import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
	export interface GoogleCloudDialogflowCxV3AdvancedSettings {

		/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
		audioExportGcsDestination?: GoogleCloudDialogflowCxV3GcsDestination;

		/** Define behaviors for DTMF (dual tone multi frequency). */
		dtmfSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings;

		/** Define behaviors on logging. */
		loggingSettings?: GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings;
	}

	/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
	export interface GoogleCloudDialogflowCxV3AdvancedSettingsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3AdvancedSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3AdvancedSettingsFormProperties>({
		});

	}


	/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3GcsDestination {

		/** Required. The Google Cloud Storage URI for the exported objects. A URI is of the form: `gs://bucket/object-name-or-prefix` Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation. */
		uri?: string | null;
	}

	/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3GcsDestinationFormProperties {

		/** Required. The Google Cloud Storage URI for the exported objects. A URI is of the form: `gs://bucket/object-name-or-prefix` Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Define behaviors for DTMF (dual tone multi frequency). */
	export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettings {

		/** If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). */
		enabled?: boolean | null;

		/** The digit that terminates a DTMF digit sequence. */
		finishDigit?: string | null;

		/**
		 * Max length of DTMF digits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDigits?: number | null;
	}

	/** Define behaviors for DTMF (dual tone multi frequency). */
	export interface GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettingsFormProperties {

		/** If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). */
		enabled: FormControl<boolean | null | undefined>,

		/** The digit that terminates a DTMF digit sequence. */
		finishDigit: FormControl<string | null | undefined>,

		/**
		 * Max length of DTMF digits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDigits: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3AdvancedSettingsDtmfSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			finishDigit: new FormControl<string | null | undefined>(undefined),
			maxDigits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Define behaviors on logging. */
	export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings {

		/** If true, DF Interaction logging is currently enabled. */
		enableInteractionLogging?: boolean | null;

		/** If true, StackDriver logging is currently enabled. */
		enableStackdriverLogging?: boolean | null;
	}

	/** Define behaviors on logging. */
	export interface GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettingsFormProperties {

		/** If true, DF Interaction logging is currently enabled. */
		enableInteractionLogging: FormControl<boolean | null | undefined>,

		/** If true, StackDriver logging is currently enabled. */
		enableStackdriverLogging: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettingsFormProperties>({
			enableInteractionLogging: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverLogging: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the natural speech audio to be processed. */
	export interface GoogleCloudDialogflowCxV3AudioInput {

		/** The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests. */
		audio?: string | null;

		/** Instructs the speech recognizer on how to process the audio content. */
		config?: GoogleCloudDialogflowCxV3InputAudioConfig;
	}

	/** Represents the natural speech audio to be processed. */
	export interface GoogleCloudDialogflowCxV3AudioInputFormProperties {

		/** The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests. */
		audio: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3AudioInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3AudioInputFormProperties>({
			audio: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instructs the speech recognizer on how to process the audio content. */
	export interface GoogleCloudDialogflowCxV3InputAudioConfig {

		/** Required. Audio encoding of the audio content to process. */
		audioEncoding?: GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null;

		/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
		bargeInConfig?: GoogleCloudDialogflowCxV3BargeInConfig;

		/** Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information. */
		enableWordInfo?: boolean | null;

		/** Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models). */
		model?: string | null;

		/** Optional. Which variant of the Speech model to use. */
		modelVariant?: GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null;

		/** Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. */
		phraseHints?: Array<string>;

		/**
		 * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz?: number | null;

		/** Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. */
		singleUtterance?: boolean | null;
	}

	/** Instructs the speech recognizer on how to process the audio content. */
	export interface GoogleCloudDialogflowCxV3InputAudioConfigFormProperties {

		/** Required. Audio encoding of the audio content to process. */
		audioEncoding: FormControl<GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null | undefined>,

		/** Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information. */
		enableWordInfo: FormControl<boolean | null | undefined>,

		/** Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models). */
		model: FormControl<string | null | undefined>,

		/** Optional. Which variant of the Speech model to use. */
		modelVariant: FormControl<GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null | undefined>,

		/**
		 * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz: FormControl<number | null | undefined>,

		/** Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. */
		singleUtterance: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3InputAudioConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3InputAudioConfigFormProperties>({
			audioEncoding: new FormControl<GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null | undefined>(undefined),
			enableWordInfo: new FormControl<boolean | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			modelVariant: new FormControl<GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
			singleUtterance: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding { AUDIO_ENCODING_UNSPECIFIED = 'AUDIO_ENCODING_UNSPECIFIED', AUDIO_ENCODING_LINEAR_16 = 'AUDIO_ENCODING_LINEAR_16', AUDIO_ENCODING_FLAC = 'AUDIO_ENCODING_FLAC', AUDIO_ENCODING_MULAW = 'AUDIO_ENCODING_MULAW', AUDIO_ENCODING_AMR = 'AUDIO_ENCODING_AMR', AUDIO_ENCODING_AMR_WB = 'AUDIO_ENCODING_AMR_WB', AUDIO_ENCODING_OGG_OPUS = 'AUDIO_ENCODING_OGG_OPUS', AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 'AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE' }


	/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
	export interface GoogleCloudDialogflowCxV3BargeInConfig {

		/** Duration that is not eligible for barge-in at the beginning of the input audio. */
		noBargeInDuration?: string | null;

		/** Total duration for the playback at the beginning of the input audio. */
		totalDuration?: string | null;
	}

	/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
	export interface GoogleCloudDialogflowCxV3BargeInConfigFormProperties {

		/** Duration that is not eligible for barge-in at the beginning of the input audio. */
		noBargeInDuration: FormControl<string | null | undefined>,

		/** Total duration for the playback at the beginning of the input audio. */
		totalDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3BargeInConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3BargeInConfigFormProperties>({
			noBargeInDuration: new FormControl<string | null | undefined>(undefined),
			totalDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3InputAudioConfigModelVariant { SPEECH_MODEL_VARIANT_UNSPECIFIED = 'SPEECH_MODEL_VARIANT_UNSPECIFIED', USE_BEST_AVAILABLE = 'USE_BEST_AVAILABLE', USE_STANDARD = 'USE_STANDARD', USE_ENHANCED = 'USE_ENHANCED' }


	/** Metadata returned for the TestCases.BatchRunTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {

		/** The test errors. */
		errors?: Array<GoogleCloudDialogflowCxV3TestError>;
	}

	/** Metadata returned for the TestCases.BatchRunTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3BatchRunTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3BatchRunTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3BatchRunTestCasesMetadataFormProperties>({
		});

	}


	/** Error info for running a test. */
	export interface GoogleCloudDialogflowCxV3TestError {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** The test case resource name. */
		testCase?: string | null;

		/** The timestamp when the test was completed. */
		testTime?: string | null;
	}

	/** Error info for running a test. */
	export interface GoogleCloudDialogflowCxV3TestErrorFormProperties {

		/** The test case resource name. */
		testCase: FormControl<string | null | undefined>,

		/** The timestamp when the test was completed. */
		testTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TestErrorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestErrorFormProperties>({
			testCase: new FormControl<string | null | undefined>(undefined),
			testTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

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
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** The response message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3BatchRunTestCasesResponse {

		/** The test case results. The detailed conversation turns are empty in this response. */
		results?: Array<GoogleCloudDialogflowCxV3TestCaseResult>;
	}

	/** The response message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3BatchRunTestCasesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3BatchRunTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3BatchRunTestCasesResponseFormProperties>({
		});

	}


	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3TestCaseResult {

		/** The conversation turns uttered during the test case replay in chronological order. */
		conversationTurns?: Array<GoogleCloudDialogflowCxV3ConversationTurn>;

		/** Environment where the test was run. If not set, it indicates the draft environment. */
		environment?: string | null;

		/** The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`. */
		name?: string | null;

		/** Whether the test case passed in the agent environment. */
		testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResult | null;

		/** The time that the test was run. */
		testTime?: string | null;
	}

	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3TestCaseResultFormProperties {

		/** Environment where the test was run. If not set, it indicates the draft environment. */
		environment: FormControl<string | null | undefined>,

		/** The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`. */
		name: FormControl<string | null | undefined>,

		/** Whether the test case passed in the agent environment. */
		testResult: FormControl<GoogleCloudDialogflowCxV3TestCaseResultTestResult | null | undefined>,

		/** The time that the test was run. */
		testTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TestCaseResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestCaseResultFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testResult: new FormControl<GoogleCloudDialogflowCxV3TestCaseResultTestResult | null | undefined>(undefined),
			testTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response. */
	export interface GoogleCloudDialogflowCxV3ConversationTurn {

		/** The input from the human user. */
		userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;

		/** The output from the virtual agent. */
		virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
	}

	/** One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response. */
	export interface GoogleCloudDialogflowCxV3ConversationTurnFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ConversationTurnFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ConversationTurnFormProperties>({
		});

	}


	/** The input from the human user. */
	export interface GoogleCloudDialogflowCxV3ConversationTurnUserInput {

		/** Whether sentiment analysis is enabled. */
		enableSentimentAnalysis?: boolean | null;

		/** Parameters that need to be injected into the conversation during intent detection. */
		injectedParameters?: {[id: string]: any };

		/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
		input?: GoogleCloudDialogflowCxV3QueryInput;

		/** If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled. */
		isWebhookEnabled?: boolean | null;
	}

	/** The input from the human user. */
	export interface GoogleCloudDialogflowCxV3ConversationTurnUserInputFormProperties {

		/** Whether sentiment analysis is enabled. */
		enableSentimentAnalysis: FormControl<boolean | null | undefined>,

		/** Parameters that need to be injected into the conversation during intent detection. */
		injectedParameters: FormControl<{[id: string]: any } | null | undefined>,

		/** If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled. */
		isWebhookEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ConversationTurnUserInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ConversationTurnUserInputFormProperties>({
			enableSentimentAnalysis: new FormControl<boolean | null | undefined>(undefined),
			injectedParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			isWebhookEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
	export interface GoogleCloudDialogflowCxV3QueryInput {

		/** Represents the natural speech audio to be processed. */
		audio?: GoogleCloudDialogflowCxV3AudioInput;

		/** Represents the input for dtmf event. */
		dtmf?: GoogleCloudDialogflowCxV3DtmfInput;

		/** Represents the event to trigger. */
		event?: GoogleCloudDialogflowCxV3EventInput;

		/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
		intent?: GoogleCloudDialogflowCxV3IntentInput;

		/** Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. */
		languageCode?: string | null;

		/** Represents the natural language text to be processed. */
		text?: GoogleCloudDialogflowCxV3TextInput;
	}

	/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
	export interface GoogleCloudDialogflowCxV3QueryInputFormProperties {

		/** Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3QueryInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3QueryInputFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for dtmf event. */
	export interface GoogleCloudDialogflowCxV3DtmfInput {

		/** The dtmf digits. */
		digits?: string | null;

		/** The finish digit (if any). */
		finishDigit?: string | null;
	}

	/** Represents the input for dtmf event. */
	export interface GoogleCloudDialogflowCxV3DtmfInputFormProperties {

		/** The dtmf digits. */
		digits: FormControl<string | null | undefined>,

		/** The finish digit (if any). */
		finishDigit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3DtmfInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3DtmfInputFormProperties>({
			digits: new FormControl<string | null | undefined>(undefined),
			finishDigit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the event to trigger. */
	export interface GoogleCloudDialogflowCxV3EventInput {

		/** Name of the event. */
		event?: string | null;
	}

	/** Represents the event to trigger. */
	export interface GoogleCloudDialogflowCxV3EventInputFormProperties {

		/** Name of the event. */
		event: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3EventInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EventInputFormProperties>({
			event: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
	export interface GoogleCloudDialogflowCxV3IntentInput {

		/** Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`. */
		intent?: string | null;
	}

	/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
	export interface GoogleCloudDialogflowCxV3IntentInputFormProperties {

		/** Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`. */
		intent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3IntentInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3IntentInputFormProperties>({
			intent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the natural language text to be processed. */
	export interface GoogleCloudDialogflowCxV3TextInput {

		/** Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters. */
		text?: string | null;
	}

	/** Represents the natural language text to be processed. */
	export interface GoogleCloudDialogflowCxV3TextInputFormProperties {

		/** Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TextInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TextInputFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the virtual agent. */
	export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {

		/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
		currentPage?: GoogleCloudDialogflowCxV3Page;

		/** Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage. */
		diagnosticInfo?: {[id: string]: any };

		/** Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any. */
		differences?: Array<GoogleCloudDialogflowCxV3TestRunDifference>;

		/** The session parameters available to the bot at this point. */
		sessionParameters?: {[id: string]: any };

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** The text responses from the agent for the turn. */
		textResponses?: Array<GoogleCloudDialogflowCxV3ResponseMessageText>;

		/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
		triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
	}

	/** The output from the virtual agent. */
	export interface GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputFormProperties {

		/** Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage. */
		diagnosticInfo: FormControl<{[id: string]: any } | null | undefined>,

		/** The session parameters available to the bot at this point. */
		sessionParameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputFormProperties>({
			diagnosticInfo: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sessionParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
	export interface GoogleCloudDialogflowCxV3Page {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;

		/** The description of the page. The maximum length is 500 characters. */
		description?: string | null;

		/** Required. The human-readable name of the page, unique within the flow. */
		displayName?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		entryFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

		/** Handlers associated with the page to handle events such as webhook errors, no match or no input. */
		eventHandlers?: Array<GoogleCloudDialogflowCxV3EventHandler>;

		/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
		form?: GoogleCloudDialogflowCxV3Form;

		/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
		knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3KnowledgeConnectorSettings;

		/** The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`. */
		name?: string | null;

		/** Ordered list of `TransitionRouteGroups` added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups. */
		transitionRouteGroups?: Array<string>;

		/** A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified. */
		transitionRoutes?: Array<GoogleCloudDialogflowCxV3TransitionRoute>;
	}

	/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
	export interface GoogleCloudDialogflowCxV3PageFormProperties {

		/** The description of the page. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the page, unique within the flow. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3PageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3PageFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
	export interface GoogleCloudDialogflowCxV3Fulfillment {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;

		/** Conditional cases for this fulfillment. */
		conditionalCases?: Array<GoogleCloudDialogflowCxV3FulfillmentConditionalCases>;

		/** If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers. */
		enableGenerativeFallback?: boolean | null;

		/** The list of rich message responses to present to the user. */
		messages?: Array<GoogleCloudDialogflowCxV3ResponseMessage>;

		/** Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks. */
		returnPartialResponses?: boolean | null;

		/** Set parameter values before executing the webhook. */
		setParameterActions?: Array<GoogleCloudDialogflowCxV3FulfillmentSetParameterAction>;

		/** The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified. */
		tag?: string | null;

		/** The webhook to call. Format: `projects//locations//agents//webhooks/`. */
		webhook?: string | null;
	}

	/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
	export interface GoogleCloudDialogflowCxV3FulfillmentFormProperties {

		/** If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers. */
		enableGenerativeFallback: FormControl<boolean | null | undefined>,

		/** Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks. */
		returnPartialResponses: FormControl<boolean | null | undefined>,

		/** The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified. */
		tag: FormControl<string | null | undefined>,

		/** The webhook to call. Format: `projects//locations//agents//webhooks/`. */
		webhook: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3FulfillmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FulfillmentFormProperties>({
			enableGenerativeFallback: new FormControl<boolean | null | undefined>(undefined),
			returnPartialResponses: new FormControl<boolean | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			webhook: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCases {

		/** A list of cascading if-else conditions. */
		cases?: Array<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase>;
	}

	/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3FulfillmentConditionalCasesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesFormProperties>({
		});

	}


	/** Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase {

		/** A list of case content. */
		caseContent?: Array<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent>;

		/** The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition?: string | null;
	}

	/** Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseFormProperties {

		/** The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of messages or conditional cases to activate for this case. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent {

		/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
		additionalCases?: GoogleCloudDialogflowCxV3FulfillmentConditionalCases;

		/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
		message?: GoogleCloudDialogflowCxV3ResponseMessage;
	}

	/** The list of messages or conditional cases to activate for this case. */
	export interface GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentFormProperties>({
		});

	}


	/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
	export interface GoogleCloudDialogflowCxV3ResponseMessage {

		/** The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned. */
		channel?: string | null;

		/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
		conversationSuccess?: GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;

		/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
		endInteraction?: GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;

		/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
		knowledgeInfoCard?: GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard;

		/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
		liveAgentHandoff?: GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;

		/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
		mixedAudio?: GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;

		/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
		outputAudioText?: GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;

		/** Returns a response containing a custom, platform-specific payload. */
		payload?: {[id: string]: any };

		/** Specifies an audio clip to be played by the client as part of the response. */
		playAudio?: GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;

		/** Response type. */
		responseType?: GoogleCloudDialogflowCxV3ResponseMessageResponseType | null;

		/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
		telephonyTransferCall?: GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall;

		/** The text response message. */
		text?: GoogleCloudDialogflowCxV3ResponseMessageText;
	}

	/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageFormProperties {

		/** The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned. */
		channel: FormControl<string | null | undefined>,

		/** Returns a response containing a custom, platform-specific payload. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Response type. */
		responseType: FormControl<GoogleCloudDialogflowCxV3ResponseMessageResponseType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			responseType: new FormControl<GoogleCloudDialogflowCxV3ResponseMessageResponseType | null | undefined>(undefined),
		});

	}


	/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {

		/** Custom metadata. Dialogflow doesn't impose any structure on this. */
		metadata?: {[id: string]: any };
	}

	/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageConversationSuccessFormProperties {

		/** Custom metadata. Dialogflow doesn't impose any structure on this. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageConversationSuccessFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageConversationSuccessFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {
	}

	/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageEndInteractionFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageEndInteractionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageEndInteractionFormProperties>({
		});

	}


	/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCard {
	}

	/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCardFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageKnowledgeInfoCardFormProperties>({
		});

	}


	/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {

		/** Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this. */
		metadata?: {[id: string]: any };
	}

	/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoffFormProperties {

		/** Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoffFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoffFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudio {

		/** Segments this audio response is composed of. */
		segments?: Array<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment>;
	}

	/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageMixedAudioFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioFormProperties>({
		});

	}


	/** Represents one segment of audio. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment {

		/** Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request. */
		audio?: string | null;

		/** Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it. */
		uri?: string | null;
	}

	/** Represents one segment of audio. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentFormProperties {

		/** Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request. */
		audio: FormControl<string | null | undefined>,

		/** Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			audio: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml). */
		ssml?: string | null;

		/** The raw text to be synthesized. */
		text?: string | null;
	}

	/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml). */
		ssml: FormControl<string | null | undefined>,

		/** The raw text to be synthesized. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			ssml: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an audio clip to be played by the client as part of the response. */
	export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it. */
		audioUri?: string | null;
	}

	/** Specifies an audio clip to be played by the client as part of the response. */
	export interface GoogleCloudDialogflowCxV3ResponseMessagePlayAudioFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it. */
		audioUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessagePlayAudioFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessagePlayAudioFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			audioUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3ResponseMessageResponseType { RESPONSE_TYPE_UNSPECIFIED = 'RESPONSE_TYPE_UNSPECIFIED', ENTRY_PROMPT = 'ENTRY_PROMPT', PARAMETER_PROMPT = 'PARAMETER_PROMPT', HANDLER_PROMPT = 'HANDLER_PROMPT' }


	/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall {

		/** Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). */
		phoneNumber?: string | null;
	}

	/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCallFormProperties {

		/** Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCallFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCallFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text response message. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageText {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Required. A collection of text responses. */
		text?: Array<string>;
	}

	/** The text response message. */
	export interface GoogleCloudDialogflowCxV3ResponseMessageTextFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ResponseMessageTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ResponseMessageTextFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Setting a parameter value. */
	export interface GoogleCloudDialogflowCxV3FulfillmentSetParameterAction {

		/** Display name of the parameter. */
		parameter?: string | null;

		/** The new value of the parameter. A null value clears the parameter. */
		value?: any;
	}

	/** Setting a parameter value. */
	export interface GoogleCloudDialogflowCxV3FulfillmentSetParameterActionFormProperties {

		/** Display name of the parameter. */
		parameter: FormControl<string | null | undefined>,

		/** The new value of the parameter. A null value clears the parameter. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3FulfillmentSetParameterActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FulfillmentSetParameterActionFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3EventHandler {

		/** Required. The name of the event to handle. */
		event?: string | null;

		/** Output only. The unique identifier of this event handler. */
		name?: string | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
	}

	/** An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3EventHandlerFormProperties {

		/** Required. The name of the event to handle. */
		event: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of this event handler. */
		name: FormControl<string | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3EventHandlerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EventHandlerFormProperties>({
			event: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
	export interface GoogleCloudDialogflowCxV3Form {

		/** Parameters to collect from the user. */
		parameters?: Array<GoogleCloudDialogflowCxV3FormParameter>;
	}

	/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
	export interface GoogleCloudDialogflowCxV3FormFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3FormFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FormFormProperties>({
		});

	}


	/** Represents a form parameter. */
	export interface GoogleCloudDialogflowCxV3FormParameter {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;

		/** The default value of an optional parameter. If the parameter is required, the default value will be ignored. */
		defaultValue?: any;

		/** Required. The human-readable name of the parameter, unique within the form. */
		displayName?: string | null;

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType?: string | null;

		/** Configuration for how the filling of a parameter should be handled. */
		fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;

		/** Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact?: boolean | null;

		/** Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required?: boolean | null;
	}

	/** Represents a form parameter. */
	export interface GoogleCloudDialogflowCxV3FormParameterFormProperties {

		/** The default value of an optional parameter. If the parameter is required, the default value will be ignored. */
		defaultValue: FormControl<any | null | undefined>,

		/** Required. The human-readable name of the parameter, unique within the form. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType: FormControl<string | null | undefined>,

		/** Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3FormParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FormParameterFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			redact: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for how the filling of a parameter should be handled. */
	export interface GoogleCloudDialogflowCxV3FormParameterFillBehavior {

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

		/** The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * `sys.no-match-`, where N can be from 1 to 6 * `sys.no-match-default` * `sys.no-input-`, where N can be from 1 to 6 * `sys.no-input-default` * `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted. */
		repromptEventHandlers?: Array<GoogleCloudDialogflowCxV3EventHandler>;
	}

	/** Configuration for how the filling of a parameter should be handled. */
	export interface GoogleCloudDialogflowCxV3FormParameterFillBehaviorFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3FormParameterFillBehaviorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3FormParameterFillBehaviorFormProperties>({
		});

	}


	/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
	export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettings {

		/** Optional. List of related data store connections. */
		dataStoreConnections?: Array<GoogleCloudDialogflowCxV3DataStoreConnection>;

		/** Whether Knowledge Connector is enabled or not. */
		enabled?: boolean | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
	}

	/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
	export interface GoogleCloudDialogflowCxV3KnowledgeConnectorSettingsFormProperties {

		/** Whether Knowledge Connector is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3KnowledgeConnectorSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3KnowledgeConnectorSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains. */
	export interface GoogleCloudDialogflowCxV3DataStoreConnection {

		/** The full name of the referenced data store. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store}` */
		dataStore?: string | null;

		/** The type of the connected data store. */
		dataStoreType?: GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null;
	}

	/** A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains. */
	export interface GoogleCloudDialogflowCxV3DataStoreConnectionFormProperties {

		/** The full name of the referenced data store. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store}` */
		dataStore: FormControl<string | null | undefined>,

		/** The type of the connected data store. */
		dataStoreType: FormControl<GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3DataStoreConnectionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3DataStoreConnectionFormProperties>({
			dataStore: new FormControl<string | null | undefined>(undefined),
			dataStoreType: new FormControl<GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType { DATA_STORE_TYPE_UNSPECIFIED = 'DATA_STORE_TYPE_UNSPECIFIED', PUBLIC_WEB = 'PUBLIC_WEB', UNSTRUCTURED = 'UNSTRUCTURED', STRUCTURED = 'STRUCTURED' }


	/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3TransitionRoute {

		/** The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		condition?: string | null;

		/** Optional. The description of the transition route. The maximum length is 500 characters. */
		description?: string | null;

		/** The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		intent?: string | null;

		/** Output only. The unique identifier of this transition route. */
		name?: string | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
	}

	/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3TransitionRouteFormProperties {

		/** The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		condition: FormControl<string | null | undefined>,

		/** Optional. The description of the transition route. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		intent: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of this transition route. */
		name: FormControl<string | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TransitionRouteFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TransitionRouteFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			intent: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of differences between original and replayed agent output. */
	export interface GoogleCloudDialogflowCxV3TestRunDifference {

		/** A human readable description of the diff, showing the actual output vs expected output. */
		description?: string | null;

		/** The type of diff. */
		type?: GoogleCloudDialogflowCxV3TestRunDifferenceType | null;
	}

	/** The description of differences between original and replayed agent output. */
	export interface GoogleCloudDialogflowCxV3TestRunDifferenceFormProperties {

		/** A human readable description of the diff, showing the actual output vs expected output. */
		description: FormControl<string | null | undefined>,

		/** The type of diff. */
		type: FormControl<GoogleCloudDialogflowCxV3TestRunDifferenceType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TestRunDifferenceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestRunDifferenceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowCxV3TestRunDifferenceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3TestRunDifferenceType { DIFF_TYPE_UNSPECIFIED = 'DIFF_TYPE_UNSPECIFIED', INTENT = 'INTENT', PAGE = 'PAGE', PARAMETERS = 'PARAMETERS', UTTERANCE = 'UTTERANCE', FLOW = 'FLOW' }


	/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
	export interface GoogleCloudDialogflowCxV3Intent {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description?: string | null;

		/** Required. The human-readable name of the intent, unique within the agent. */
		displayName?: string | null;

		/** Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event. */
		isFallback?: boolean | null;

		/** The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent. */
		labels?: {[id: string]: string };

		/** The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`. */
		name?: string | null;

		/** The collection of parameters associated with the intent. */
		parameters?: Array<GoogleCloudDialogflowCxV3IntentParameter>;

		/**
		 * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** The collection of training phrases the agent is trained on to identify the intent. */
		trainingPhrases?: Array<GoogleCloudDialogflowCxV3IntentTrainingPhrase>;
	}

	/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
	export interface GoogleCloudDialogflowCxV3IntentFormProperties {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the intent, unique within the agent. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event. */
		isFallback: FormControl<boolean | null | undefined>,

		/** The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`. */
		name: FormControl<string | null | undefined>,

		/**
		 * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3IntentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3IntentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isFallback: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an intent parameter. */
	export interface GoogleCloudDialogflowCxV3IntentParameter {

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType?: string | null;

		/** Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts. */
		id?: string | null;

		/** Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact?: boolean | null;
	}

	/** Represents an intent parameter. */
	export interface GoogleCloudDialogflowCxV3IntentParameterFormProperties {

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType: FormControl<string | null | undefined>,

		/** Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3IntentParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3IntentParameterFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			redact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an example that the agent is trained on to identify the intent. */
	export interface GoogleCloudDialogflowCxV3IntentTrainingPhrase {

		/** Output only. The unique identifier of the training phrase. */
		id?: string | null;

		/** Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `parameter_id` field is set. */
		parts?: Array<GoogleCloudDialogflowCxV3IntentTrainingPhrasePart>;

		/**
		 * Indicates how many times this example was added to the intent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatCount?: number | null;
	}

	/** Represents an example that the agent is trained on to identify the intent. */
	export interface GoogleCloudDialogflowCxV3IntentTrainingPhraseFormProperties {

		/** Output only. The unique identifier of the training phrase. */
		id: FormControl<string | null | undefined>,

		/**
		 * Indicates how many times this example was added to the intent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3IntentTrainingPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3IntentTrainingPhraseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			repeatCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {

		/** The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase. */
		parameterId?: string | null;

		/** Required. The text for this part. */
		text?: string | null;
	}

	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowCxV3IntentTrainingPhrasePartFormProperties {

		/** The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase. */
		parameterId: FormControl<string | null | undefined>,

		/** Required. The text for this part. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3IntentTrainingPhrasePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3IntentTrainingPhrasePartFormProperties>({
			parameterId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3TestCaseResultTestResult { TEST_RESULT_UNSPECIFIED = 'TEST_RESULT_UNSPECIFIED', PASSED = 'PASSED', FAILED = 'FAILED' }


	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3ContinuousTestResult {

		/** The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`. */
		name?: string | null;

		/** The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not. */
		result?: GoogleCloudDialogflowCxV3ContinuousTestResultResult | null;

		/** Time when the continuous testing run starts. */
		runTime?: string | null;

		/** A list of individual test case results names in this continuous test run. */
		testCaseResults?: Array<string>;
	}

	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3ContinuousTestResultFormProperties {

		/** The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`. */
		name: FormControl<string | null | undefined>,

		/** The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not. */
		result: FormControl<GoogleCloudDialogflowCxV3ContinuousTestResultResult | null | undefined>,

		/** Time when the continuous testing run starts. */
		runTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ContinuousTestResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ContinuousTestResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<GoogleCloudDialogflowCxV3ContinuousTestResultResult | null | undefined>(undefined),
			runTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3ContinuousTestResultResult { AGGREGATED_TEST_RESULT_UNSPECIFIED = 'AGGREGATED_TEST_RESULT_UNSPECIFIED', PASSED = 'PASSED', FAILED = 'FAILED' }


	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowCxV3ConversationSignals {

		/** Collection of all signals that were extracted for a single turn of the conversation. */
		turnSignals?: GoogleCloudDialogflowCxV3TurnSignals;
	}

	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowCxV3ConversationSignalsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ConversationSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ConversationSignalsFormProperties>({
		});

	}


	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowCxV3TurnSignals {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated?: boolean | null;

		/** Whether user was using DTMF input. */
		dtmfUsed?: boolean | null;

		/** Failure reasons of the turn. */
		failureReasons?: Array<string>;

		/** Whether NLU predicted NO_MATCH. */
		noMatch?: boolean | null;

		/** Whether user provided no input. */
		noUserInput?: boolean | null;

		/** Whether turn resulted in End Session page. */
		reachedEndPage?: boolean | null;

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude?: number | null;

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore?: number | null;

		/** Whether user was specifically asking for a live agent. */
		userEscalated?: boolean | null;

		/** Human-readable statuses of the webhooks triggered during this turn. */
		webhookStatuses?: Array<string>;
	}

	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowCxV3TurnSignalsFormProperties {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated: FormControl<boolean | null | undefined>,

		/** Whether user was using DTMF input. */
		dtmfUsed: FormControl<boolean | null | undefined>,

		/** Whether NLU predicted NO_MATCH. */
		noMatch: FormControl<boolean | null | undefined>,

		/** Whether user provided no input. */
		noUserInput: FormControl<boolean | null | undefined>,

		/** Whether turn resulted in End Session page. */
		reachedEndPage: FormControl<boolean | null | undefined>,

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore: FormControl<number | null | undefined>,

		/** Whether user was specifically asking for a live agent. */
		userEscalated: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TurnSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TurnSignalsFormProperties>({
			agentEscalated: new FormControl<boolean | null | undefined>(undefined),
			dtmfUsed: new FormControl<boolean | null | undefined>(undefined),
			noMatch: new FormControl<boolean | null | undefined>(undefined),
			noUserInput: new FormControl<boolean | null | undefined>(undefined),
			reachedEndPage: new FormControl<boolean | null | undefined>(undefined),
			sentimentMagnitude: new FormControl<number | null | undefined>(undefined),
			sentimentScore: new FormControl<number | null | undefined>(undefined),
			userEscalated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowCxV3CreateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
	}

	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowCxV3CreateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3CreateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3CreateDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata {

		/** Required. Output only. The current state of this operation. */
		state?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null;
	}

	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataFormProperties {

		/** Required. Output only. The current state of this operation. */
		state: FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataFormProperties>({
			state: new FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', DONE = 'DONE' }


	/** Metadata associated with the long running operation for Versions.CreateVersion. */
	export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {

		/** Name of the created version. Format: `projects//locations//agents//flows//versions/`. */
		version?: string | null;
	}

	/** Metadata associated with the long running operation for Versions.CreateVersion. */
	export interface GoogleCloudDialogflowCxV3CreateVersionOperationMetadataFormProperties {

		/** Name of the created version. Format: `projects//locations//agents//flows//versions/`. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3CreateVersionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3CreateVersionOperationMetadataFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowCxV3DeleteDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
	}

	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowCxV3DeleteDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3DeleteDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3DeleteDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata returned for the Environments.DeployFlow long running operation. */
	export interface GoogleCloudDialogflowCxV3DeployFlowMetadata {

		/** Errors of running deployment tests. */
		testErrors?: Array<GoogleCloudDialogflowCxV3TestError>;
	}

	/** Metadata returned for the Environments.DeployFlow long running operation. */
	export interface GoogleCloudDialogflowCxV3DeployFlowMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3DeployFlowMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3DeployFlowMetadataFormProperties>({
		});

	}


	/** The response message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3DeployFlowResponse {

		/** The name of the flow version Deployment. Format: `projects//locations//agents// environments//deployments/`. */
		deployment?: string | null;

		/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
		environment?: GoogleCloudDialogflowCxV3Environment;
	}

	/** The response message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3DeployFlowResponseFormProperties {

		/** The name of the flow version Deployment. Format: `projects//locations//agents// environments//deployments/`. */
		deployment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3DeployFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3DeployFlowResponseFormProperties>({
			deployment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
	export interface GoogleCloudDialogflowCxV3Environment {

		/** The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description?: string | null;

		/** Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters. */
		displayName?: string | null;

		/** The name of the environment. Format: `projects//locations//agents//environments/`. */
		name?: string | null;

		/** The configuration for continuous tests. */
		testCasesConfig?: GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;

		/** Output only. Update time of this environment. */
		updateTime?: string | null;

		/** A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned. */
		versionConfigs?: Array<GoogleCloudDialogflowCxV3EnvironmentVersionConfig>;

		/** Configuration for webhooks. */
		webhookConfig?: GoogleCloudDialogflowCxV3EnvironmentWebhookConfig;
	}

	/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
	export interface GoogleCloudDialogflowCxV3EnvironmentFormProperties {

		/** The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the environment. Format: `projects//locations//agents//environments/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Update time of this environment. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3EnvironmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EnvironmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for continuous tests. */
	export interface GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig {

		/** Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day. */
		enableContinuousRun?: boolean | null;

		/** Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false. */
		enablePredeploymentRun?: boolean | null;

		/** A list of test case names to run. They should be under the same agent. Format of each test case name: `projects//locations/ /agents//testCases/` */
		testCases?: Array<string>;
	}

	/** The configuration for continuous tests. */
	export interface GoogleCloudDialogflowCxV3EnvironmentTestCasesConfigFormProperties {

		/** Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day. */
		enableContinuousRun: FormControl<boolean | null | undefined>,

		/** Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false. */
		enablePredeploymentRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3EnvironmentTestCasesConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EnvironmentTestCasesConfigFormProperties>({
			enableContinuousRun: new FormControl<boolean | null | undefined>(undefined),
			enablePredeploymentRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the version. */
	export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfig {

		/** Required. Format: projects//locations//agents//flows//versions/. */
		version?: string | null;
	}

	/** Configuration for the version. */
	export interface GoogleCloudDialogflowCxV3EnvironmentVersionConfigFormProperties {

		/** Required. Format: projects//locations//agents//flows//versions/. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3EnvironmentVersionConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EnvironmentVersionConfigFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for webhooks. */
	export interface GoogleCloudDialogflowCxV3EnvironmentWebhookConfig {

		/** The list of webhooks to override for the agent environment. The webhook must exist in the agent. You can override fields in `generic_web_service` and `service_directory`. */
		webhookOverrides?: Array<GoogleCloudDialogflowCxV3Webhook>;
	}

	/** Configuration for webhooks. */
	export interface GoogleCloudDialogflowCxV3EnvironmentWebhookConfigFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3EnvironmentWebhookConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3EnvironmentWebhookConfigFormProperties>({
		});

	}


	/** Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend. */
	export interface GoogleCloudDialogflowCxV3Webhook {

		/** Indicates whether the webhook is disabled. */
		disabled?: boolean | null;

		/** Required. The human-readable name of the webhook, unique within the agent. */
		displayName?: string | null;

		/** Represents configuration for a generic web service. */
		genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

		/** The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`. */
		name?: string | null;

		/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
		serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;

		/** Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds. */
		timeout?: string | null;
	}

	/** Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend. */
	export interface GoogleCloudDialogflowCxV3WebhookFormProperties {

		/** Indicates whether the webhook is disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** Required. The human-readable name of the webhook, unique within the agent. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`. */
		name: FormControl<string | null | undefined>,

		/** Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents configuration for a generic web service. */
	export interface GoogleCloudDialogflowCxV3WebhookGenericWebService {

		/** Optional. Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command, ``` openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'") ``` */
		allowedCaCerts?: Array<string>;

		/** Optional. HTTP method for the flexible webhook calls. Standard webhook always uses POST. */
		httpMethod?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null;

		/** Optional. Maps the values extracted from specific fields of the flexible webhook response into session parameters. - Key: session parameter name - Value: field path in the webhook response */
		parameterMapping?: {[id: string]: string };

		/** The password for HTTP Basic authentication. */
		password?: string | null;

		/** Optional. Defines a custom JSON object as request body to send to flexible webhook. */
		requestBody?: string | null;

		/** The HTTP request headers to send together with webhook requests. */
		requestHeaders?: {[id: string]: string };

		/** Required. The webhook URI for receiving POST requests. It must use https protocol. */
		uri?: string | null;

		/** The user name for HTTP Basic authentication. */
		username?: string | null;

		/** Optional. Type of the webhook. */
		webhookType?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null;
	}

	/** Represents configuration for a generic web service. */
	export interface GoogleCloudDialogflowCxV3WebhookGenericWebServiceFormProperties {

		/** Optional. HTTP method for the flexible webhook calls. Standard webhook always uses POST. */
		httpMethod: FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null | undefined>,

		/** Optional. Maps the values extracted from specific fields of the flexible webhook response into session parameters. - Key: session parameter name - Value: field path in the webhook response */
		parameterMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** The password for HTTP Basic authentication. */
		password: FormControl<string | null | undefined>,

		/** Optional. Defines a custom JSON object as request body to send to flexible webhook. */
		requestBody: FormControl<string | null | undefined>,

		/** The HTTP request headers to send together with webhook requests. */
		requestHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The webhook URI for receiving POST requests. It must use https protocol. */
		uri: FormControl<string | null | undefined>,

		/** The user name for HTTP Basic authentication. */
		username: FormControl<string | null | undefined>,

		/** Optional. Type of the webhook. */
		webhookType: FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookGenericWebServiceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookGenericWebServiceFormProperties>({
			httpMethod: new FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null | undefined>(undefined),
			parameterMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			webhookType: new FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod { HTTP_METHOD_UNSPECIFIED = 'HTTP_METHOD_UNSPECIFIED', POST = 'POST', GET = 'GET', HEAD = 'HEAD', PUT = 'PUT', DELETE = 'DELETE', PATCH = 'PATCH', OPTIONS = 'OPTIONS' }

	export enum GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType { WEBHOOK_TYPE_UNSPECIFIED = 'WEBHOOK_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', FLEXIBLE = 'FLEXIBLE' }


	/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
	export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig {

		/** Represents configuration for a generic web service. */
		genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

		/** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent. */
		service?: string | null;
	}

	/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
	export interface GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfigFormProperties {

		/** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookServiceDirectoryConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3ExportAgentResponse {

		/** Uncompressed raw byte content for agent. This field is populated if none of `agent_uri` and `git_destination` are specified in ExportAgentRequest. */
		agentContent?: string | null;

		/** The URI to a file containing the exported agent. This field is populated if `agent_uri` is specified in ExportAgentRequest. */
		agentUri?: string | null;

		/** Commit SHA of the git push. This field is populated if `git_destination` is specified in ExportAgentRequest. */
		commitSha?: string | null;
	}

	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3ExportAgentResponseFormProperties {

		/** Uncompressed raw byte content for agent. This field is populated if none of `agent_uri` and `git_destination` are specified in ExportAgentRequest. */
		agentContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported agent. This field is populated if `agent_uri` is specified in ExportAgentRequest. */
		agentUri: FormControl<string | null | undefined>,

		/** Commit SHA of the git push. This field is populated if `git_destination` is specified in ExportAgentRequest. */
		commitSha: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ExportAgentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportAgentResponseFormProperties>({
			agentContent: new FormControl<string | null | undefined>(undefined),
			agentUri: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3ExportFlowResponse {

		/** Uncompressed raw byte content for flow. */
		flowContent?: string | null;

		/** The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest. */
		flowUri?: string | null;
	}

	/** The response message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3ExportFlowResponseFormProperties {

		/** Uncompressed raw byte content for flow. */
		flowContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest. */
		flowUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ExportFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportFlowResponseFormProperties>({
			flowContent: new FormControl<string | null | undefined>(undefined),
			flowUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the Intents.ExportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3ExportIntentsMetadata {
	}

	/** Metadata returned for the Intents.ExportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3ExportIntentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ExportIntentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportIntentsMetadataFormProperties>({
		});

	}


	/** The response message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3ExportIntentsResponse {

		/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
		intentsContent?: GoogleCloudDialogflowCxV3InlineDestination;

		/** The URI to a file containing the exported intents. This field is populated only if `intents_uri` is specified in ExportIntentsRequest. */
		intentsUri?: string | null;
	}

	/** The response message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3ExportIntentsResponseFormProperties {

		/** The URI to a file containing the exported intents. This field is populated only if `intents_uri` is specified in ExportIntentsRequest. */
		intentsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ExportIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportIntentsResponseFormProperties>({
			intentsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3InlineDestination {

		/** Output only. The uncompressed byte content for the objects. Only populated in responses. */
		content?: string | null;
	}

	/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3InlineDestinationFormProperties {

		/** Output only. The uncompressed byte content for the objects. Only populated in responses. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3InlineDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3InlineDestinationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadata {
	}

	/** Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3ExportTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ExportTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportTestCasesMetadataFormProperties>({
		});

	}


	/** The response message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3ExportTestCasesResponse {

		/** Uncompressed raw byte content for test cases. */
		content?: string | null;

		/** The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest. */
		gcsUri?: string | null;
	}

	/** The response message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3ExportTestCasesResponseFormProperties {

		/** Uncompressed raw byte content for test cases. */
		content: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ExportTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ExportTestCasesResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowCxV3ImportDocumentsOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowCxV3ImportDocumentsOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportDocumentsOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportDocumentsOperationMetadataFormProperties>({
		});

	}


	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowCxV3ImportDocumentsResponse {

		/** Includes details about skipped documents or any other warnings. */
		warnings?: Array<GoogleRpcStatus>;
	}

	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowCxV3ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportDocumentsResponseFormProperties>({
		});

	}


	/** The response message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3ImportFlowResponse {

		/** The unique identifier of the new flow. Format: `projects//locations//agents//flows/`. */
		flow?: string | null;
	}

	/** The response message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3ImportFlowResponseFormProperties {

		/** The unique identifier of the new flow. Format: `projects//locations//agents//flows/`. */
		flow: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3ImportFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportFlowResponseFormProperties>({
			flow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the Intents.ImportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsMetadata {
	}

	/** Metadata returned for the Intents.ImportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportIntentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportIntentsMetadataFormProperties>({
		});

	}


	/** The response message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsResponse {

		/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
		conflictingResources?: GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources;

		/** The unique identifier of the imported intents. Format: `projects//locations//agents//intents/`. */
		intents?: Array<string>;
	}

	/** The response message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportIntentsResponseFormProperties>({
		});

	}


	/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResources {

		/** Display names of conflicting entities. */
		entityDisplayNames?: Array<string>;

		/** Display names of conflicting intents. */
		intentDisplayNames?: Array<string>;
	}

	/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
	export interface GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResourcesFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResourcesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportIntentsResponseConflictingResourcesFormProperties>({
		});

	}


	/** Metadata returned for the TestCases.ImportTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3ImportTestCasesMetadata {

		/** Errors for failed test cases. */
		errors?: Array<GoogleCloudDialogflowCxV3TestCaseError>;
	}

	/** Metadata returned for the TestCases.ImportTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3ImportTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportTestCasesMetadataFormProperties>({
		});

	}


	/** Error info for importing a test. */
	export interface GoogleCloudDialogflowCxV3TestCaseError {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** Represents a test case. */
		testCase?: GoogleCloudDialogflowCxV3TestCase;
	}

	/** Error info for importing a test. */
	export interface GoogleCloudDialogflowCxV3TestCaseErrorFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3TestCaseErrorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestCaseErrorFormProperties>({
		});

	}


	/** Represents a test case. */
	export interface GoogleCloudDialogflowCxV3TestCase {

		/** Output only. When the test was created. */
		creationTime?: string | null;

		/** Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters. */
		displayName?: string | null;

		/** Represents a result from running a test case in an agent environment. */
		lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;

		/** The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`. */
		name?: string | null;

		/** Additional freeform notes about the test case. Limit of 400 characters. */
		notes?: string | null;

		/** Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters. */
		tags?: Array<string>;

		/** The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly. */
		testCaseConversationTurns?: Array<GoogleCloudDialogflowCxV3ConversationTurn>;

		/** Represents configurations for a test case. */
		testConfig?: GoogleCloudDialogflowCxV3TestConfig;
	}

	/** Represents a test case. */
	export interface GoogleCloudDialogflowCxV3TestCaseFormProperties {

		/** Output only. When the test was created. */
		creationTime: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`. */
		name: FormControl<string | null | undefined>,

		/** Additional freeform notes about the test case. Limit of 400 characters. */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TestCaseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestCaseFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents configurations for a test case. */
	export interface GoogleCloudDialogflowCxV3TestConfig {

		/** Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		flow?: string | null;

		/** The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		page?: string | null;

		/** Session parameters to be compared when calculating differences. */
		trackingParameters?: Array<string>;
	}

	/** Represents configurations for a test case. */
	export interface GoogleCloudDialogflowCxV3TestConfigFormProperties {

		/** Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		flow: FormControl<string | null | undefined>,

		/** The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		page: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3TestConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3TestConfigFormProperties>({
			flow: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3ImportTestCasesResponse {

		/** The unique identifiers of the new test cases. Format: `projects//locations//agents//testCases/`. */
		names?: Array<string>;
	}

	/** The response message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3ImportTestCasesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ImportTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ImportTestCasesResponseFormProperties>({
		});

	}


	/** Represents page information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3PageInfo {

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`. */
		currentPage?: string | null;

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The display name of the current page. */
		displayName?: string | null;

		/** Represents form information. */
		formInfo?: GoogleCloudDialogflowCxV3PageInfoFormInfo;
	}

	/** Represents page information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3PageInfoFormProperties {

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`. */
		currentPage: FormControl<string | null | undefined>,

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The display name of the current page. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3PageInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3PageInfoFormProperties>({
			currentPage: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents form information. */
	export interface GoogleCloudDialogflowCxV3PageInfoFormInfo {

		/** Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter. */
		parameterInfo?: Array<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo>;
	}

	/** Represents form information. */
	export interface GoogleCloudDialogflowCxV3PageInfoFormInfoFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3PageInfoFormInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3PageInfoFormInfoFormProperties>({
		});

	}


	/** Represents parameter information. */
	export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {

		/** Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook. */
		displayName?: string | null;

		/** Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn. */
		justCollected?: boolean | null;

		/** Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required?: boolean | null;

		/** Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored. */
		state?: GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null;

		/** Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value. */
		value?: any;
	}

	/** Represents parameter information. */
	export interface GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoFormProperties {

		/** Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook. */
		displayName: FormControl<string | null | undefined>,

		/** Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn. */
		justCollected: FormControl<boolean | null | undefined>,

		/** Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required: FormControl<boolean | null | undefined>,

		/** Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored. */
		state: FormControl<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null | undefined>,

		/** Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			justCollected: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState { PARAMETER_STATE_UNSPECIFIED = 'PARAMETER_STATE_UNSPECIFIED', EMPTY = 'EMPTY', INVALID = 'INVALID', FILLED = 'FILLED' }


	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowCxV3ReloadDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowCxV3ReloadDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3ReloadDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3ReloadDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata returned for the Environments.RunContinuousTest long running operation. */
	export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadata {

		/** The test errors. */
		errors?: Array<GoogleCloudDialogflowCxV3TestError>;
	}

	/** Metadata returned for the Environments.RunContinuousTest long running operation. */
	export interface GoogleCloudDialogflowCxV3RunContinuousTestMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3RunContinuousTestMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3RunContinuousTestMetadataFormProperties>({
		});

	}


	/** The response message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3RunContinuousTestResponse {

		/** Represents a result from running a test case in an agent environment. */
		continuousTestResult?: GoogleCloudDialogflowCxV3ContinuousTestResult;
	}

	/** The response message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3RunContinuousTestResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3RunContinuousTestResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3RunContinuousTestResponseFormProperties>({
		});

	}


	/** Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3RunTestCaseMetadata {
	}

	/** Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3RunTestCaseMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3RunTestCaseMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3RunTestCaseMetadataFormProperties>({
		});

	}


	/** The response message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3RunTestCaseResponse {

		/** Represents a result from running a test case in an agent environment. */
		result?: GoogleCloudDialogflowCxV3TestCaseResult;
	}

	/** The response message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3RunTestCaseResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3RunTestCaseResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3RunTestCaseResponseFormProperties>({
		});

	}


	/** Represents session information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3SessionInfo {

		/** Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names. */
		parameters?: {[id: string]: any };

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified. */
		session?: string | null;
	}

	/** Represents session information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3SessionInfoFormProperties {

		/** Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified. */
		session: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3SessionInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3SessionInfoFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowCxV3UpdateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
	}

	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowCxV3UpdateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3UpdateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3UpdateDocumentOperationMetadataFormProperties>({
		});

	}


	/** The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases. You may see undocumented fields in an actual request. These fields are used internally by Dialogflow and should be ignored. */
	export interface GoogleCloudDialogflowCxV3WebhookRequest {

		/** Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller. */
		detectIntentResponseId?: string | null;

		/** If DTMF was provided as input, this field will contain the DTMF digits. */
		dtmfDigits?: string | null;

		/** Represents fulfillment information communicated to the webhook. */
		fulfillmentInfo?: GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;

		/** Represents intent information communicated to the webhook. */
		intentInfo?: GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;

		/** The language code specified in the original request. */
		languageCode?: string | null;

		/** The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response; */
		messages?: Array<GoogleCloudDialogflowCxV3ResponseMessage>;

		/** Represents page information communicated to and from the webhook. */
		pageInfo?: GoogleCloudDialogflowCxV3PageInfo;

		/** Custom data set in QueryParameters.payload. */
		payload?: {[id: string]: any };

		/** Represents the result of sentiment analysis. */
		sentimentAnalysisResult?: GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;

		/** Represents session information communicated to and from the webhook. */
		sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text?: string | null;

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript?: string | null;

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent?: string | null;

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent?: string | null;
	}

	/** The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases. You may see undocumented fields in an actual request. These fields are used internally by Dialogflow and should be ignored. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestFormProperties {

		/** Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller. */
		detectIntentResponseId: FormControl<string | null | undefined>,

		/** If DTMF was provided as input, this field will contain the DTMF digits. */
		dtmfDigits: FormControl<string | null | undefined>,

		/** The language code specified in the original request. */
		languageCode: FormControl<string | null | undefined>,

		/** Custom data set in QueryParameters.payload. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text: FormControl<string | null | undefined>,

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript: FormControl<string | null | undefined>,

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent: FormControl<string | null | undefined>,

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookRequestFormProperties>({
			detectIntentResponseId: new FormControl<string | null | undefined>(undefined),
			dtmfDigits: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
			triggerEvent: new FormControl<string | null | undefined>(undefined),
			triggerIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fulfillment information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {

		/** Always present. The value of the Fulfillment.tag field will be populated in this field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. */
		tag?: string | null;
	}

	/** Represents fulfillment information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfoFormProperties {

		/** Always present. The value of the Fulfillment.tag field will be populated in this field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfoFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents intent information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {

		/**
		 * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** Always present. The display name of the last matched intent. */
		displayName?: string | null;

		/** Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`. */
		lastMatchedIntent?: string | null;

		/** Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here. */
		parameters?: {[id: string]: GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue };
	}

	/** Represents intent information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoFormProperties {

		/**
		 * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Always present. The display name of the last matched intent. */
		displayName: FormControl<string | null | undefined>,

		/** Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`. */
		lastMatchedIntent: FormControl<string | null | undefined>,

		/** Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here. */
		parameters: FormControl<{[id: string]: GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookRequestIntentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookRequestIntentInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastMatchedIntent: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue } | null | undefined>(undefined),
		});

	}


	/** Represents a value for an intent parameter. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {

		/** Always present. Original text value extracted from user utterance. */
		originalValue?: string | null;

		/** Always present. Structured value for the parameter extracted from user utterance. */
		resolvedValue?: any;
	}

	/** Represents a value for an intent parameter. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValueFormProperties {

		/** Always present. Original text value extracted from user utterance. */
		originalValue: FormControl<string | null | undefined>,

		/** Always present. Structured value for the parameter extracted from user utterance. */
		resolvedValue: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValueFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValueFormProperties>({
			originalValue: new FormControl<string | null | undefined>(undefined),
			resolvedValue: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Represents the result of sentiment analysis. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Represents the result of sentiment analysis. */
	export interface GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResultFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResultFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for a webhook call. */
	export interface GoogleCloudDialogflowCxV3WebhookResponse {

		/** Represents a fulfillment response to the user. */
		fulfillmentResponse?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;

		/** Represents page information communicated to and from the webhook. */
		pageInfo?: GoogleCloudDialogflowCxV3PageInfo;

		/** Value to append directly to QueryResult.webhook_payloads. */
		payload?: {[id: string]: any };

		/** Represents session information communicated to and from the webhook. */
		sessionInfo?: GoogleCloudDialogflowCxV3SessionInfo;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;
	}

	/** The response message for a webhook call. */
	export interface GoogleCloudDialogflowCxV3WebhookResponseFormProperties {

		/** Value to append directly to QueryResult.webhook_payloads. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookResponseFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a fulfillment response to the user. */
	export interface GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse {

		/** Merge behavior for `messages`. */
		mergeBehavior?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null;

		/** The list of rich message responses to present to the user. */
		messages?: Array<GoogleCloudDialogflowCxV3ResponseMessage>;
	}

	/** Represents a fulfillment response to the user. */
	export interface GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseFormProperties {

		/** Merge behavior for `messages`. */
		mergeBehavior: FormControl<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseFormProperties>({
			mergeBehavior: new FormControl<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior { MERGE_BEHAVIOR_UNSPECIFIED = 'MERGE_BEHAVIOR_UNSPECIFIED', APPEND = 'APPEND', REPLACE = 'REPLACE' }


	/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettings {

		/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
		audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;

		/** Define behaviors for DTMF (dual tone multi frequency). */
		dtmfSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings;

		/** Define behaviors on logging. */
		loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
	}

	/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AdvancedSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AdvancedSettingsFormProperties>({
		});

	}


	/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1GcsDestination {

		/** Required. The Google Cloud Storage URI for the exported objects. A URI is of the form: `gs://bucket/object-name-or-prefix` Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation. */
		uri?: string | null;
	}

	/** Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1GcsDestinationFormProperties {

		/** Required. The Google Cloud Storage URI for the exported objects. A URI is of the form: `gs://bucket/object-name-or-prefix` Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Define behaviors for DTMF (dual tone multi frequency). */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettings {

		/** If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). */
		enabled?: boolean | null;

		/** The digit that terminates a DTMF digit sequence. */
		finishDigit?: string | null;

		/**
		 * Max length of DTMF digits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDigits?: number | null;
	}

	/** Define behaviors for DTMF (dual tone multi frequency). */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettingsFormProperties {

		/** If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance). */
		enabled: FormControl<boolean | null | undefined>,

		/** The digit that terminates a DTMF digit sequence. */
		finishDigit: FormControl<string | null | undefined>,

		/**
		 * Max length of DTMF digits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDigits: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AdvancedSettingsDtmfSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			finishDigit: new FormControl<string | null | undefined>(undefined),
			maxDigits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Define behaviors on logging. */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {

		/** If true, DF Interaction logging is currently enabled. */
		enableInteractionLogging?: boolean | null;

		/** If true, StackDriver logging is currently enabled. */
		enableStackdriverLogging?: boolean | null;
	}

	/** Define behaviors on logging. */
	export interface GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettingsFormProperties {

		/** If true, DF Interaction logging is currently enabled. */
		enableInteractionLogging: FormControl<boolean | null | undefined>,

		/** If true, StackDriver logging is currently enabled. */
		enableStackdriverLogging: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettingsFormProperties>({
			enableInteractionLogging: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverLogging: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, TransitionRouteGroups and so on to manage the conversation flows. */
	export interface GoogleCloudDialogflowCxV3beta1Agent {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** Settings for answer feedback collection. */
		answerFeedbackSettings?: GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings;

		/** The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration. */
		avatarUri?: string | null;

		/** Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method. */
		defaultLanguageCode?: string | null;

		/** The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description?: string | null;

		/** Required. The human-readable name of the agent, unique within the location. */
		displayName?: string | null;

		/** Indicates if automatic spell correction is enabled in detect intent requests. */
		enableSpellCorrection?: boolean | null;

		/** Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead. */
		enableStackdriverLogging?: boolean | null;

		/** Settings for Gen App Builder. */
		genAppBuilderSettings?: GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings;

		/** Settings for connecting to Git repository for an agent. */
		gitIntegrationSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings;

		/** Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent. */
		locked?: boolean | null;

		/** The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`. */
		name?: string | null;

		/** Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`. */
		securitySettings?: string | null;

		/** Settings related to speech recognition. */
		speechToTextSettings?: GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;

		/** Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`. */
		startFlow?: string | null;

		/** The list of all languages supported by the agent (except for the `default_language_code`). */
		supportedLanguageCodes?: Array<string>;

		/** Settings related to speech synthesizing. */
		textToSpeechSettings?: GoogleCloudDialogflowCxV3beta1TextToSpeechSettings;

		/** Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. */
		timeZone?: string | null;
	}

	/** Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, TransitionRouteGroups and so on to manage the conversation flows. */
	export interface GoogleCloudDialogflowCxV3beta1AgentFormProperties {

		/** The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration. */
		avatarUri: FormControl<string | null | undefined>,

		/** Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method. */
		defaultLanguageCode: FormControl<string | null | undefined>,

		/** The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the agent, unique within the location. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if automatic spell correction is enabled in detect intent requests. */
		enableSpellCorrection: FormControl<boolean | null | undefined>,

		/** Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead. */
		enableStackdriverLogging: FormControl<boolean | null | undefined>,

		/** Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent. */
		locked: FormControl<boolean | null | undefined>,

		/** The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`. */
		name: FormControl<string | null | undefined>,

		/** Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`. */
		securitySettings: FormControl<string | null | undefined>,

		/** Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`. */
		startFlow: FormControl<string | null | undefined>,

		/** Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentFormProperties>({
			avatarUri: new FormControl<string | null | undefined>(undefined),
			defaultLanguageCode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableSpellCorrection: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverLogging: new FormControl<boolean | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			securitySettings: new FormControl<string | null | undefined>(undefined),
			startFlow: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for answer feedback collection. */
	export interface GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings {

		/** Optional. If enabled, end users will be able to provide answer feedback to Dialogflow responses. Feature works only if interaction logging is enabled in the Dialogflow agent. */
		enableAnswerFeedback?: boolean | null;
	}

	/** Settings for answer feedback collection. */
	export interface GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettingsFormProperties {

		/** Optional. If enabled, end users will be able to provide answer feedback to Dialogflow responses. Feature works only if interaction logging is enabled in the Dialogflow agent. */
		enableAnswerFeedback: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettingsFormProperties>({
			enableAnswerFeedback: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for Gen App Builder. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings {

		/** Required. The full name of the Gen App Builder engine related to this agent if there is one. Format: `projects/{Project ID}/locations/{Location ID}/collections/{Collection ID}/engines/{Engine ID}` */
		engine?: string | null;
	}

	/** Settings for Gen App Builder. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettingsFormProperties {

		/** Required. The full name of the Gen App Builder engine related to this agent if there is one. Format: `projects/{Project ID}/locations/{Location ID}/collections/{Collection ID}/engines/{Engine ID}` */
		engine: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettingsFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for connecting to Git repository for an agent. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings {

		/** Settings of integration with GitHub. */
		githubSettings?: GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings;
	}

	/** Settings for connecting to Git repository for an agent. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsFormProperties>({
		});

	}


	/** Settings of integration with GitHub. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettings {

		/** The access token used to authenticate the access to the GitHub repository. */
		accessToken?: string | null;

		/** A list of branches configured to be used from Dialogflow. */
		branches?: Array<string>;

		/** The unique repository display name for the GitHub repository. */
		displayName?: string | null;

		/** The GitHub repository URI related to the agent. */
		repositoryUri?: string | null;

		/** The branch of the GitHub repository tracked for this agent. */
		trackingBranch?: string | null;
	}

	/** Settings of integration with GitHub. */
	export interface GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettingsFormProperties {

		/** The access token used to authenticate the access to the GitHub repository. */
		accessToken: FormControl<string | null | undefined>,

		/** The unique repository display name for the GitHub repository. */
		displayName: FormControl<string | null | undefined>,

		/** The GitHub repository URI related to the agent. */
		repositoryUri: FormControl<string | null | undefined>,

		/** The branch of the GitHub repository tracked for this agent. */
		trackingBranch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettingsGithubSettingsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			repositoryUri: new FormControl<string | null | undefined>(undefined),
			trackingBranch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to speech recognition. */
	export interface GoogleCloudDialogflowCxV3beta1SpeechToTextSettings {

		/** Whether to use speech adaptation for speech recognition. */
		enableSpeechAdaptation?: boolean | null;
	}

	/** Settings related to speech recognition. */
	export interface GoogleCloudDialogflowCxV3beta1SpeechToTextSettingsFormProperties {

		/** Whether to use speech adaptation for speech recognition. */
		enableSpeechAdaptation: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SpeechToTextSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SpeechToTextSettingsFormProperties>({
			enableSpeechAdaptation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings related to speech synthesizing. */
	export interface GoogleCloudDialogflowCxV3beta1TextToSpeechSettings {

		/** Configuration of how speech should be synthesized, mapping from language (https://cloud.google.com/dialogflow/cx/docs/reference/language) to SynthesizeSpeechConfig. These settings affect: - The [phone gateway](https://cloud.google.com/dialogflow/cx/docs/concept/integration/phone-gateway) synthesize configuration set via Agent.text_to_speech_settings. - How speech is synthesized when invoking session APIs. Agent.text_to_speech_settings only applies if OutputAudioConfig.synthesize_speech_config is not specified. */
		synthesizeSpeechConfigs?: {[id: string]: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig };
	}

	/** Settings related to speech synthesizing. */
	export interface GoogleCloudDialogflowCxV3beta1TextToSpeechSettingsFormProperties {

		/** Configuration of how speech should be synthesized, mapping from language (https://cloud.google.com/dialogflow/cx/docs/reference/language) to SynthesizeSpeechConfig. These settings affect: - The [phone gateway](https://cloud.google.com/dialogflow/cx/docs/concept/integration/phone-gateway) synthesize configuration set via Agent.text_to_speech_settings. - How speech is synthesized when invoking session APIs. Agent.text_to_speech_settings only applies if OutputAudioConfig.synthesize_speech_config is not specified. */
		synthesizeSpeechConfigs: FormControl<{[id: string]: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TextToSpeechSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TextToSpeechSettingsFormProperties>({
			synthesizeSpeechConfigs: new FormControl<{[id: string]: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig } | null | undefined>(undefined),
		});

	}


	/** Configuration of how speech should be synthesized. */
	export interface GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig {

		/** Optional. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. */
		effectsProfileId?: Array<string>;

		/**
		 * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
		 * Type: double
		 */
		pitch?: number | null;

		/**
		 * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
		 * Type: double
		 */
		speakingRate?: number | null;

		/** Description of which voice to use for speech synthesis. */
		voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;

		/**
		 * Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
		 * Type: double
		 */
		volumeGainDb?: number | null;
	}

	/** Configuration of how speech should be synthesized. */
	export interface GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfigFormProperties {

		/**
		 * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
		 * Type: double
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
		 * Type: double
		 */
		speakingRate: FormControl<number | null | undefined>,

		/**
		 * Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
		 * Type: double
		 */
		volumeGainDb: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfigFormProperties>({
			pitch: new FormControl<number | null | undefined>(undefined),
			speakingRate: new FormControl<number | null | undefined>(undefined),
			volumeGainDb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Description of which voice to use for speech synthesis. */
	export interface GoogleCloudDialogflowCxV3beta1VoiceSelectionParams {

		/** Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices). */
		name?: string | null;

		/** Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. */
		ssmlGender?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGender | null;
	}

	/** Description of which voice to use for speech synthesis. */
	export interface GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsFormProperties {

		/** Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices). */
		name: FormControl<string | null | undefined>,

		/** Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. */
		ssmlGender: FormControl<GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGender | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1VoiceSelectionParamsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			ssmlGender: new FormControl<GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGender | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1VoiceSelectionParamsSsmlGender { SSML_VOICE_GENDER_UNSPECIFIED = 'SSML_VOICE_GENDER_UNSPECIFIED', SSML_VOICE_GENDER_MALE = 'SSML_VOICE_GENDER_MALE', SSML_VOICE_GENDER_FEMALE = 'SSML_VOICE_GENDER_FEMALE', SSML_VOICE_GENDER_NEUTRAL = 'SSML_VOICE_GENDER_NEUTRAL' }


	/** The response message for Agents.GetAgentValidationResult. */
	export interface GoogleCloudDialogflowCxV3beta1AgentValidationResult {

		/** Contains all flow validation results. */
		flowValidationResults?: Array<GoogleCloudDialogflowCxV3beta1FlowValidationResult>;

		/** The unique identifier of the agent validation result. Format: `projects//locations//agents//validationResult`. */
		name?: string | null;
	}

	/** The response message for Agents.GetAgentValidationResult. */
	export interface GoogleCloudDialogflowCxV3beta1AgentValidationResultFormProperties {

		/** The unique identifier of the agent validation result. Format: `projects//locations//agents//validationResult`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AgentValidationResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AgentValidationResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Flows.GetFlowValidationResult. */
	export interface GoogleCloudDialogflowCxV3beta1FlowValidationResult {

		/** The unique identifier of the flow validation result. Format: `projects//locations//agents//flows//validationResult`. */
		name?: string | null;

		/** Last time the flow was validated. */
		updateTime?: string | null;

		/** Contains all validation messages. */
		validationMessages?: Array<GoogleCloudDialogflowCxV3beta1ValidationMessage>;
	}

	/** The response message for Flows.GetFlowValidationResult. */
	export interface GoogleCloudDialogflowCxV3beta1FlowValidationResultFormProperties {

		/** The unique identifier of the flow validation result. Format: `projects//locations//agents//flows//validationResult`. */
		name: FormControl<string | null | undefined>,

		/** Last time the flow was validated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FlowValidationResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FlowValidationResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent/flow validation message. */
	export interface GoogleCloudDialogflowCxV3beta1ValidationMessage {

		/** The message detail. */
		detail?: string | null;

		/** The resource names of the resources where the message is found. */
		resourceNames?: Array<GoogleCloudDialogflowCxV3beta1ResourceName>;

		/** The type of the resources where the message is found. */
		resourceType?: GoogleCloudDialogflowCxV3beta1ValidationMessageResourceType | null;

		/** The names of the resources where the message is found. */
		resources?: Array<string>;

		/** Indicates the severity of the message. */
		severity?: GoogleCloudDialogflowCxV3beta1ValidationMessageSeverity | null;
	}

	/** Agent/flow validation message. */
	export interface GoogleCloudDialogflowCxV3beta1ValidationMessageFormProperties {

		/** The message detail. */
		detail: FormControl<string | null | undefined>,

		/** The type of the resources where the message is found. */
		resourceType: FormControl<GoogleCloudDialogflowCxV3beta1ValidationMessageResourceType | null | undefined>,

		/** Indicates the severity of the message. */
		severity: FormControl<GoogleCloudDialogflowCxV3beta1ValidationMessageSeverity | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ValidationMessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ValidationMessageFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<GoogleCloudDialogflowCxV3beta1ValidationMessageResourceType | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudDialogflowCxV3beta1ValidationMessageSeverity | null | undefined>(undefined),
		});

	}


	/** Resource name and display name. */
	export interface GoogleCloudDialogflowCxV3beta1ResourceName {

		/** Display name. */
		displayName?: string | null;

		/** Name. */
		name?: string | null;
	}

	/** Resource name and display name. */
	export interface GoogleCloudDialogflowCxV3beta1ResourceNameFormProperties {

		/** Display name. */
		displayName: FormControl<string | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResourceNameFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResourceNameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ValidationMessageResourceType { RESOURCE_TYPE_UNSPECIFIED = 'RESOURCE_TYPE_UNSPECIFIED', AGENT = 'AGENT', INTENT = 'INTENT', INTENT_TRAINING_PHRASE = 'INTENT_TRAINING_PHRASE', INTENT_PARAMETER = 'INTENT_PARAMETER', INTENTS = 'INTENTS', INTENT_TRAINING_PHRASES = 'INTENT_TRAINING_PHRASES', ENTITY_TYPE = 'ENTITY_TYPE', ENTITY_TYPES = 'ENTITY_TYPES', WEBHOOK = 'WEBHOOK', FLOW = 'FLOW', PAGE = 'PAGE', PAGES = 'PAGES', TRANSITION_ROUTE_GROUP = 'TRANSITION_ROUTE_GROUP', AGENT_TRANSITION_ROUTE_GROUP = 'AGENT_TRANSITION_ROUTE_GROUP' }

	export enum GoogleCloudDialogflowCxV3beta1ValidationMessageSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', INFO = 'INFO', WARNING = 'WARNING', ERROR = 'ERROR' }


	/** Stores information about feedback provided by users about a response. */
	export interface GoogleCloudDialogflowCxV3beta1AnswerFeedback {

		/** Optional. Custom rating from the user about the provided answer, with maximum length of 1024 characters. For example, client could use a customized JSON object to indicate the rating. */
		customRating?: string | null;

		/** Optional. Rating from user for the specific Dialogflow response. */
		rating?: GoogleCloudDialogflowCxV3beta1AnswerFeedbackRating | null;

		/** Stores extra information about why users provided thumbs down rating. */
		ratingReason?: GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason;
	}

	/** Stores information about feedback provided by users about a response. */
	export interface GoogleCloudDialogflowCxV3beta1AnswerFeedbackFormProperties {

		/** Optional. Custom rating from the user about the provided answer, with maximum length of 1024 characters. For example, client could use a customized JSON object to indicate the rating. */
		customRating: FormControl<string | null | undefined>,

		/** Optional. Rating from user for the specific Dialogflow response. */
		rating: FormControl<GoogleCloudDialogflowCxV3beta1AnswerFeedbackRating | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AnswerFeedbackFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AnswerFeedbackFormProperties>({
			customRating: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<GoogleCloudDialogflowCxV3beta1AnswerFeedbackRating | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1AnswerFeedbackRating { RATING_UNSPECIFIED = 'RATING_UNSPECIFIED', THUMBS_UP = 'THUMBS_UP', THUMBS_DOWN = 'THUMBS_DOWN' }


	/** Stores extra information about why users provided thumbs down rating. */
	export interface GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason {

		/** Optional. Additional feedback about the rating. This field can be populated without choosing a predefined `reason`. */
		feedback?: string | null;

		/** Optional. Custom reason labels for thumbs down rating provided by the user. The maximum number of labels allowed is 10 and the maximum length of a single label is 128 characters. */
		reasonLabels?: Array<string>;
	}

	/** Stores extra information about why users provided thumbs down rating. */
	export interface GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReasonFormProperties {

		/** Optional. Additional feedback about the rating. This field can be populated without choosing a predefined `reason`. */
		feedback: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReasonFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReasonFormProperties>({
			feedback: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the natural speech audio to be processed. */
	export interface GoogleCloudDialogflowCxV3beta1AudioInput {

		/** The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests. */
		audio?: string | null;

		/** Instructs the speech recognizer on how to process the audio content. */
		config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
	}

	/** Represents the natural speech audio to be processed. */
	export interface GoogleCloudDialogflowCxV3beta1AudioInputFormProperties {

		/** The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests. */
		audio: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1AudioInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1AudioInputFormProperties>({
			audio: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instructs the speech recognizer on how to process the audio content. */
	export interface GoogleCloudDialogflowCxV3beta1InputAudioConfig {

		/** Required. Audio encoding of the audio content to process. */
		audioEncoding?: GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null;

		/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
		bargeInConfig?: GoogleCloudDialogflowCxV3beta1BargeInConfig;

		/** Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information. */
		enableWordInfo?: boolean | null;

		/** Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models). */
		model?: string | null;

		/** Optional. Which variant of the Speech model to use. */
		modelVariant?: GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null;

		/** Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. */
		phraseHints?: Array<string>;

		/**
		 * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz?: number | null;

		/** Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. */
		singleUtterance?: boolean | null;
	}

	/** Instructs the speech recognizer on how to process the audio content. */
	export interface GoogleCloudDialogflowCxV3beta1InputAudioConfigFormProperties {

		/** Required. Audio encoding of the audio content to process. */
		audioEncoding: FormControl<GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null | undefined>,

		/** Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information. */
		enableWordInfo: FormControl<boolean | null | undefined>,

		/** Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models). */
		model: FormControl<string | null | undefined>,

		/** Optional. Which variant of the Speech model to use. */
		modelVariant: FormControl<GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null | undefined>,

		/**
		 * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz: FormControl<number | null | undefined>,

		/** Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. */
		singleUtterance: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1InputAudioConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1InputAudioConfigFormProperties>({
			audioEncoding: new FormControl<GoogleCloudDialogflowCxV3InputAudioConfigAudioEncoding | null | undefined>(undefined),
			enableWordInfo: new FormControl<boolean | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			modelVariant: new FormControl<GoogleCloudDialogflowCxV3InputAudioConfigModelVariant | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
			singleUtterance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
	export interface GoogleCloudDialogflowCxV3beta1BargeInConfig {

		/** Duration that is not eligible for barge-in at the beginning of the input audio. */
		noBargeInDuration?: string | null;

		/** Total duration for the playback at the beginning of the input audio. */
		totalDuration?: string | null;
	}

	/** Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up. */
	export interface GoogleCloudDialogflowCxV3beta1BargeInConfigFormProperties {

		/** Duration that is not eligible for barge-in at the beginning of the input audio. */
		noBargeInDuration: FormControl<string | null | undefined>,

		/** Total duration for the playback at the beginning of the input audio. */
		totalDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BargeInConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BargeInConfigFormProperties>({
			noBargeInDuration: new FormControl<string | null | undefined>(undefined),
			totalDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for TestCases.BatchDeleteTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest {

		/** Required. Format of test case names: `projects//locations/ /agents//testCases/`. */
		names?: Array<string>;
	}

	/** The request message for TestCases.BatchDeleteTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequestFormProperties>({
		});

	}


	/** Metadata returned for the TestCases.BatchRunTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata {

		/** The test errors. */
		errors?: Array<GoogleCloudDialogflowCxV3beta1TestError>;
	}

	/** Metadata returned for the TestCases.BatchRunTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadataFormProperties>({
		});

	}


	/** Error info for running a test. */
	export interface GoogleCloudDialogflowCxV3beta1TestError {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** The test case resource name. */
		testCase?: string | null;

		/** The timestamp when the test was completed. */
		testTime?: string | null;
	}

	/** Error info for running a test. */
	export interface GoogleCloudDialogflowCxV3beta1TestErrorFormProperties {

		/** The test case resource name. */
		testCase: FormControl<string | null | undefined>,

		/** The timestamp when the test was completed. */
		testTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestErrorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestErrorFormProperties>({
			testCase: new FormControl<string | null | undefined>(undefined),
			testTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest {

		/** Optional. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment?: string | null;

		/** Required. Format: `projects//locations//agents//testCases/`. */
		testCases?: Array<string>;
	}

	/** The request message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequestFormProperties {

		/** Optional. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequestFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse {

		/** The test case results. The detailed conversation turns are empty in this response. */
		results?: Array<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
	}

	/** The response message for TestCases.BatchRunTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponseFormProperties>({
		});

	}


	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3beta1TestCaseResult {

		/** The conversation turns uttered during the test case replay in chronological order. */
		conversationTurns?: Array<GoogleCloudDialogflowCxV3beta1ConversationTurn>;

		/** Environment where the test was run. If not set, it indicates the draft environment. */
		environment?: string | null;

		/** The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`. */
		name?: string | null;

		/** Whether the test case passed in the agent environment. */
		testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResult | null;

		/** The time that the test was run. */
		testTime?: string | null;
	}

	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3beta1TestCaseResultFormProperties {

		/** Environment where the test was run. If not set, it indicates the draft environment. */
		environment: FormControl<string | null | undefined>,

		/** The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`. */
		name: FormControl<string | null | undefined>,

		/** Whether the test case passed in the agent environment. */
		testResult: FormControl<GoogleCloudDialogflowCxV3TestCaseResultTestResult | null | undefined>,

		/** The time that the test was run. */
		testTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestCaseResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestCaseResultFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testResult: new FormControl<GoogleCloudDialogflowCxV3TestCaseResultTestResult | null | undefined>(undefined),
			testTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurn {

		/** The input from the human user. */
		userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;

		/** The output from the virtual agent. */
		virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
	}

	/** One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurnFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ConversationTurnFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ConversationTurnFormProperties>({
		});

	}


	/** The input from the human user. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {

		/** Whether sentiment analysis is enabled. */
		enableSentimentAnalysis?: boolean | null;

		/** Parameters that need to be injected into the conversation during intent detection. */
		injectedParameters?: {[id: string]: any };

		/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
		input?: GoogleCloudDialogflowCxV3beta1QueryInput;

		/** If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled. */
		isWebhookEnabled?: boolean | null;
	}

	/** The input from the human user. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurnUserInputFormProperties {

		/** Whether sentiment analysis is enabled. */
		enableSentimentAnalysis: FormControl<boolean | null | undefined>,

		/** Parameters that need to be injected into the conversation during intent detection. */
		injectedParameters: FormControl<{[id: string]: any } | null | undefined>,

		/** If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled. */
		isWebhookEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ConversationTurnUserInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ConversationTurnUserInputFormProperties>({
			enableSentimentAnalysis: new FormControl<boolean | null | undefined>(undefined),
			injectedParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			isWebhookEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
	export interface GoogleCloudDialogflowCxV3beta1QueryInput {

		/** Represents the natural speech audio to be processed. */
		audio?: GoogleCloudDialogflowCxV3beta1AudioInput;

		/** Represents the input for dtmf event. */
		dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;

		/** Represents the event to trigger. */
		event?: GoogleCloudDialogflowCxV3beta1EventInput;

		/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
		intent?: GoogleCloudDialogflowCxV3beta1IntentInput;

		/** Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. */
		languageCode?: string | null;

		/** Represents the natural language text to be processed. */
		text?: GoogleCloudDialogflowCxV3beta1TextInput;
	}

	/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
	export interface GoogleCloudDialogflowCxV3beta1QueryInputFormProperties {

		/** Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1QueryInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1QueryInputFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for dtmf event. */
	export interface GoogleCloudDialogflowCxV3beta1DtmfInput {

		/** The dtmf digits. */
		digits?: string | null;

		/** The finish digit (if any). */
		finishDigit?: string | null;
	}

	/** Represents the input for dtmf event. */
	export interface GoogleCloudDialogflowCxV3beta1DtmfInputFormProperties {

		/** The dtmf digits. */
		digits: FormControl<string | null | undefined>,

		/** The finish digit (if any). */
		finishDigit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DtmfInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DtmfInputFormProperties>({
			digits: new FormControl<string | null | undefined>(undefined),
			finishDigit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the event to trigger. */
	export interface GoogleCloudDialogflowCxV3beta1EventInput {

		/** Name of the event. */
		event?: string | null;
	}

	/** Represents the event to trigger. */
	export interface GoogleCloudDialogflowCxV3beta1EventInputFormProperties {

		/** Name of the event. */
		event: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EventInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EventInputFormProperties>({
			event: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
	export interface GoogleCloudDialogflowCxV3beta1IntentInput {

		/** Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`. */
		intent?: string | null;
	}

	/** Represents the intent to trigger programmatically rather than as a result of natural language processing. */
	export interface GoogleCloudDialogflowCxV3beta1IntentInputFormProperties {

		/** Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`. */
		intent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentInputFormProperties>({
			intent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the natural language text to be processed. */
	export interface GoogleCloudDialogflowCxV3beta1TextInput {

		/** Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters. */
		text?: string | null;
	}

	/** Represents the natural language text to be processed. */
	export interface GoogleCloudDialogflowCxV3beta1TextInputFormProperties {

		/** Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TextInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TextInputFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the virtual agent. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {

		/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
		currentPage?: GoogleCloudDialogflowCxV3beta1Page;

		/** Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage. */
		diagnosticInfo?: {[id: string]: any };

		/** Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any. */
		differences?: Array<GoogleCloudDialogflowCxV3beta1TestRunDifference>;

		/** The session parameters available to the bot at this point. */
		sessionParameters?: {[id: string]: any };

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** The text responses from the agent for the turn. */
		textResponses?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessageText>;

		/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
		triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent;
	}

	/** The output from the virtual agent. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputFormProperties {

		/** Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage. */
		diagnosticInfo: FormControl<{[id: string]: any } | null | undefined>,

		/** The session parameters available to the bot at this point. */
		sessionParameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputFormProperties>({
			diagnosticInfo: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sessionParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
	export interface GoogleCloudDialogflowCxV3beta1Page {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** The description of the page. The maximum length is 500 characters. */
		description?: string | null;

		/** Required. The human-readable name of the page, unique within the flow. */
		displayName?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;

		/** Handlers associated with the page to handle events such as webhook errors, no match or no input. */
		eventHandlers?: Array<GoogleCloudDialogflowCxV3beta1EventHandler>;

		/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
		form?: GoogleCloudDialogflowCxV3beta1Form;

		/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
		knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;

		/** The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`. */
		name?: string | null;

		/** Ordered list of `TransitionRouteGroups` added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups. */
		transitionRouteGroups?: Array<string>;

		/** A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified. */
		transitionRoutes?: Array<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
	}

	/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
	export interface GoogleCloudDialogflowCxV3beta1PageFormProperties {

		/** The description of the page. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the page, unique within the flow. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1PageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1PageFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
	export interface GoogleCloudDialogflowCxV3beta1Fulfillment {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** Conditional cases for this fulfillment. */
		conditionalCases?: Array<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases>;

		/** If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers. */
		enableGenerativeFallback?: boolean | null;

		/** The list of rich message responses to present to the user. */
		messages?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessage>;

		/** Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks. */
		returnPartialResponses?: boolean | null;

		/** Set parameter values before executing the webhook. */
		setParameterActions?: Array<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction>;

		/** The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified. */
		tag?: string | null;

		/** The webhook to call. Format: `projects//locations//agents//webhooks/`. */
		webhook?: string | null;
	}

	/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentFormProperties {

		/** If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers. */
		enableGenerativeFallback: FormControl<boolean | null | undefined>,

		/** Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks. */
		returnPartialResponses: FormControl<boolean | null | undefined>,

		/** The value of this field will be populated in the WebhookRequest `fulfillmentInfo.tag` field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if `webhook` is specified. */
		tag: FormControl<string | null | undefined>,

		/** The webhook to call. Format: `projects//locations//agents//webhooks/`. */
		webhook: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillmentFormProperties>({
			enableGenerativeFallback: new FormControl<boolean | null | undefined>(undefined),
			returnPartialResponses: new FormControl<boolean | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			webhook: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases {

		/** A list of cascading if-else conditions. */
		cases?: Array<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase>;
	}

	/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesFormProperties>({
		});

	}


	/** Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase {

		/** A list of case content. */
		caseContent?: Array<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent>;

		/** The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition?: string | null;
	}

	/** Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseFormProperties {

		/** The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of messages or conditional cases to activate for this case. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent {

		/** A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored. */
		additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;

		/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
		message?: GoogleCloudDialogflowCxV3beta1ResponseMessage;
	}

	/** The list of messages or conditional cases to activate for this case. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentFormProperties>({
		});

	}


	/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessage {

		/** The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned. */
		channel?: string | null;

		/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
		conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;

		/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
		endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;

		/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
		knowledgeInfoCard?: GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard;

		/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
		liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;

		/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
		mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;

		/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
		outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;

		/** Returns a response containing a custom, platform-specific payload. */
		payload?: {[id: string]: any };

		/** Specifies an audio clip to be played by the client as part of the response. */
		playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;

		/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
		telephonyTransferCall?: GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall;

		/** The text response message. */
		text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText;
	}

	/** Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageFormProperties {

		/** The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned. */
		channel: FormControl<string | null | undefined>,

		/** Returns a response containing a custom, platform-specific payload. */
		payload: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {

		/** Custom metadata. Dialogflow doesn't impose any structure on this. */
		metadata?: {[id: string]: any };
	}

	/** Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccessFormProperties {

		/** Custom metadata. Dialogflow doesn't impose any structure on this. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccessFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccessFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {
	}

	/** Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteractionFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageEndInteractionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteractionFormProperties>({
		});

	}


	/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCard {
	}

	/** Represents info card response. If the response contains generative knowledge prediction, Dialogflow will return a payload with Infobot Messenger compatible info card. Otherwise, the info card response is skipped. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCardFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageKnowledgeInfoCardFormProperties>({
		});

	}


	/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {

		/** Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this. */
		metadata?: {[id: string]: any };
	}

	/** Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoffFormProperties {

		/** Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoffFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoffFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio {

		/** Segments this audio response is composed of. */
		segments?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment>;
	}

	/** Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioFormProperties>({
		});

	}


	/** Represents one segment of audio. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {

		/** Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request. */
		audio?: string | null;

		/** Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it. */
		uri?: string | null;
	}

	/** Represents one segment of audio. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentFormProperties {

		/** Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request. */
		audio: FormControl<string | null | undefined>,

		/** Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			audio: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml). */
		ssml?: string | null;

		/** The raw text to be synthesized. */
		text?: string | null;
	}

	/** A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml). */
		ssml: FormControl<string | null | undefined>,

		/** The raw text to be synthesized. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			ssml: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an audio clip to be played by the client as part of the response. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it. */
		audioUri?: string | null;
	}

	/** Specifies an audio clip to be played by the client as part of the response. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,

		/** Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it. */
		audioUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
			audioUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall {

		/** Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). */
		phoneNumber?: string | null;
	}

	/** Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCallFormProperties {

		/** Transfer the call to a phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCallFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCallFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text response message. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageText {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption?: boolean | null;

		/** Required. A collection of text responses. */
		text?: Array<string>;
	}

	/** The text response message. */
	export interface GoogleCloudDialogflowCxV3beta1ResponseMessageTextFormProperties {

		/** Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request. */
		allowPlaybackInterruption: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ResponseMessageTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ResponseMessageTextFormProperties>({
			allowPlaybackInterruption: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Setting a parameter value. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction {

		/** Display name of the parameter. */
		parameter?: string | null;

		/** The new value of the parameter. A null value clears the parameter. */
		value?: any;
	}

	/** Setting a parameter value. */
	export interface GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterActionFormProperties {

		/** Display name of the parameter. */
		parameter: FormControl<string | null | undefined>,

		/** The new value of the parameter. A null value clears the parameter. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillmentSetParameterActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterActionFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3beta1EventHandler {

		/** Required. The name of the event to handle. */
		event?: string | null;

		/** Output only. The unique identifier of this event handler. */
		name?: string | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
	}

	/** An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3beta1EventHandlerFormProperties {

		/** Required. The name of the event to handle. */
		event: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of this event handler. */
		name: FormControl<string | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EventHandlerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EventHandlerFormProperties>({
			event: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
	export interface GoogleCloudDialogflowCxV3beta1Form {

		/** Parameters to collect from the user. */
		parameters?: Array<GoogleCloudDialogflowCxV3beta1FormParameter>;
	}

	/** A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session. */
	export interface GoogleCloudDialogflowCxV3beta1FormFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FormFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FormFormProperties>({
		});

	}


	/** Represents a form parameter. */
	export interface GoogleCloudDialogflowCxV3beta1FormParameter {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** The default value of an optional parameter. If the parameter is required, the default value will be ignored. */
		defaultValue?: any;

		/** Required. The human-readable name of the parameter, unique within the form. */
		displayName?: string | null;

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType?: string | null;

		/** Configuration for how the filling of a parameter should be handled. */
		fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;

		/** Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact?: boolean | null;

		/** Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required?: boolean | null;
	}

	/** Represents a form parameter. */
	export interface GoogleCloudDialogflowCxV3beta1FormParameterFormProperties {

		/** The default value of an optional parameter. If the parameter is required, the default value will be ignored. */
		defaultValue: FormControl<any | null | undefined>,

		/** Required. The human-readable name of the parameter, unique within the form. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType: FormControl<string | null | undefined>,

		/** Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FormParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FormParameterFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			redact: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for how the filling of a parameter should be handled. */
	export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;

		/** The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * `sys.no-match-`, where N can be from 1 to 6 * `sys.no-match-default` * `sys.no-input-`, where N can be from 1 to 6 * `sys.no-input-default` * `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted. */
		repromptEventHandlers?: Array<GoogleCloudDialogflowCxV3beta1EventHandler>;
	}

	/** Configuration for how the filling of a parameter should be handled. */
	export interface GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorFormProperties>({
		});

	}


	/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
	export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings {

		/** Optional. List of related data store connections. */
		dataStoreConnections?: Array<GoogleCloudDialogflowCxV3beta1DataStoreConnection>;

		/** Whether Knowledge Connector is enabled or not. */
		enabled?: boolean | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
	}

	/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
	export interface GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettingsFormProperties {

		/** Whether Knowledge Connector is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains. */
	export interface GoogleCloudDialogflowCxV3beta1DataStoreConnection {

		/** The full name of the referenced data store. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store}` */
		dataStore?: string | null;

		/** The type of the connected data store. */
		dataStoreType?: GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null;
	}

	/** A data store connection. It represents a data store in Discovery Engine and the type of the contents it contains. */
	export interface GoogleCloudDialogflowCxV3beta1DataStoreConnectionFormProperties {

		/** The full name of the referenced data store. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store}` */
		dataStore: FormControl<string | null | undefined>,

		/** The type of the connected data store. */
		dataStoreType: FormControl<GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DataStoreConnectionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DataStoreConnectionFormProperties>({
			dataStore: new FormControl<string | null | undefined>(undefined),
			dataStoreType: new FormControl<GoogleCloudDialogflowCxV3DataStoreConnectionDataStoreType | null | undefined>(undefined),
		});

	}


	/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRoute {

		/** The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		condition?: string | null;

		/** Optional. The description of the transition route. The maximum length is 500 characters. */
		description?: string | null;

		/** The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		intent?: string | null;

		/** Output only. The unique identifier of this transition route. */
		name?: string | null;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;

		/** A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both. */
		triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
	}

	/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteFormProperties {

		/** The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		condition: FormControl<string | null | undefined>,

		/** Optional. The description of the transition route. The maximum length is 500 characters. */
		description: FormControl<string | null | undefined>,

		/** The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled. */
		intent: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of this transition route. */
		name: FormControl<string | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionRouteFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionRouteFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			intent: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of differences between original and replayed agent output. */
	export interface GoogleCloudDialogflowCxV3beta1TestRunDifference {

		/** A human readable description of the diff, showing the actual output vs expected output. */
		description?: string | null;

		/** The type of diff. */
		type?: GoogleCloudDialogflowCxV3TestRunDifferenceType | null;
	}

	/** The description of differences between original and replayed agent output. */
	export interface GoogleCloudDialogflowCxV3beta1TestRunDifferenceFormProperties {

		/** A human readable description of the diff, showing the actual output vs expected output. */
		description: FormControl<string | null | undefined>,

		/** The type of diff. */
		type: FormControl<GoogleCloudDialogflowCxV3TestRunDifferenceType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestRunDifferenceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestRunDifferenceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowCxV3TestRunDifferenceType | null | undefined>(undefined),
		});

	}


	/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
	export interface GoogleCloudDialogflowCxV3beta1Intent {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description?: string | null;

		/** Required. The human-readable name of the intent, unique within the agent. */
		displayName?: string | null;

		/** Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event. */
		isFallback?: boolean | null;

		/** The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys-contextual" means the intent is a contextual intent. */
		labels?: {[id: string]: string };

		/** The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`. */
		name?: string | null;

		/** The collection of parameters associated with the intent. */
		parameters?: Array<GoogleCloudDialogflowCxV3beta1IntentParameter>;

		/**
		 * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** The collection of training phrases the agent is trained on to identify the intent. */
		trainingPhrases?: Array<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase>;
	}

	/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
	export interface GoogleCloudDialogflowCxV3beta1IntentFormProperties {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the intent, unique within the agent. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event. */
		isFallback: FormControl<boolean | null | undefined>,

		/** The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys-contextual" means the intent is a contextual intent. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`. */
		name: FormControl<string | null | undefined>,

		/**
		 * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isFallback: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an intent parameter. */
	export interface GoogleCloudDialogflowCxV3beta1IntentParameter {

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType?: string | null;

		/** Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts. */
		id?: string | null;

		/** Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact?: boolean | null;
	}

	/** Represents an intent parameter. */
	export interface GoogleCloudDialogflowCxV3beta1IntentParameterFormProperties {

		/** Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types. */
		entityType: FormControl<string | null | undefined>,

		/** Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled. */
		redact: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentParameterFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			redact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an example that the agent is trained on to identify the intent. */
	export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase {

		/** Output only. The unique identifier of the training phrase. */
		id?: string | null;

		/** Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `parameter_id` field is set. */
		parts?: Array<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart>;

		/**
		 * Indicates how many times this example was added to the intent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatCount?: number | null;
	}

	/** Represents an example that the agent is trained on to identify the intent. */
	export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhraseFormProperties {

		/** Output only. The unique identifier of the training phrase. */
		id: FormControl<string | null | undefined>,

		/**
		 * Indicates how many times this example was added to the intent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentTrainingPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentTrainingPhraseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			repeatCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart {

		/** The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase. */
		parameterId?: string | null;

		/** Required. The text for this part. */
		text?: string | null;
	}

	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePartFormProperties {

		/** The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase. */
		parameterId: FormControl<string | null | undefined>,

		/** Required. The text for this part. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePartFormProperties>({
			parameterId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Boost specification to boost certain documents. A copy of google.cloud.discoveryengine.v1main.BoostSpec, field documentation is available at https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/BoostSpec */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpec {

		/** Optional. Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. */
		conditionBoostSpecs?: Array<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec>;
	}

	/** Boost specification to boost certain documents. A copy of google.cloud.discoveryengine.v1main.BoostSpec, field documentation is available at https://cloud.google.com/generative-ai-app-builder/docs/reference/rest/v1alpha/BoostSpec */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpecFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BoostSpecFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BoostSpecFormProperties>({
		});

	}


	/** Boost applies to documents which match a condition. */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpec {

		/**
		 * Optional. Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
		 * Type: float
		 */
		boost?: number | null;

		/** Optional. An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": * (id: ANY("doc_1", "doc_2")) AND (color: ANY("Red","Blue")) */
		condition?: string | null;
	}

	/** Boost applies to documents which match a condition. */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecFormProperties {

		/**
		 * Optional. Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
		 * Type: float
		 */
		boost: FormControl<number | null | undefined>,

		/** Optional. An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": * (id: ANY("doc_1", "doc_2")) AND (color: ANY("Red","Blue")) */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BoostSpecConditionBoostSpecFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Boost specifications for data stores. */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpecs {

		/** Optional. Data Stores where the boosting configuration is applied. The full names of the referenced data stores. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store} */
		dataStores?: Array<string>;

		/** Optional. A list of boosting specifications. */
		spec?: Array<GoogleCloudDialogflowCxV3beta1BoostSpec>;
	}

	/** Boost specifications for data stores. */
	export interface GoogleCloudDialogflowCxV3beta1BoostSpecsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1BoostSpecsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1BoostSpecsFormProperties>({
		});

	}


	/** The response message for TestCases.CalculateCoverage. */
	export interface GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse {

		/** The agent to calculate coverage for. Format: `projects//locations//agents/`. */
		agent?: string | null;

		/** Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases. */
		intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage;

		/** Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group. */
		routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;

		/** Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases. */
		transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage;
	}

	/** The response message for TestCases.CalculateCoverage. */
	export interface GoogleCloudDialogflowCxV3beta1CalculateCoverageResponseFormProperties {

		/** The agent to calculate coverage for. Format: `projects//locations//agents/`. */
		agent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1CalculateCoverageResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1CalculateCoverageResponseFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases. */
	export interface GoogleCloudDialogflowCxV3beta1IntentCoverage {

		/**
		 * The percent of intents in the agent that are covered.
		 * Type: float
		 */
		coverageScore?: number | null;

		/** The list of Intents present in the agent */
		intents?: Array<GoogleCloudDialogflowCxV3beta1IntentCoverageIntent>;
	}

	/** Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases. */
	export interface GoogleCloudDialogflowCxV3beta1IntentCoverageFormProperties {

		/**
		 * The percent of intents in the agent that are covered.
		 * Type: float
		 */
		coverageScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentCoverageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentCoverageFormProperties>({
			coverageScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The agent's intent. */
	export interface GoogleCloudDialogflowCxV3beta1IntentCoverageIntent {

		/** Whether the intent is covered by at least one of the agent's test cases. */
		covered?: boolean | null;

		/** The intent full resource name */
		intent?: string | null;
	}

	/** The agent's intent. */
	export interface GoogleCloudDialogflowCxV3beta1IntentCoverageIntentFormProperties {

		/** Whether the intent is covered by at least one of the agent's test cases. */
		covered: FormControl<boolean | null | undefined>,

		/** The intent full resource name */
		intent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1IntentCoverageIntentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1IntentCoverageIntentFormProperties>({
			covered: new FormControl<boolean | null | undefined>(undefined),
			intent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage {

		/**
		 * The percent of transition routes in all the transition route groups that are covered.
		 * Type: float
		 */
		coverageScore?: number | null;

		/** Transition route group coverages. */
		coverages?: Array<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage>;
	}

	/** Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageFormProperties {

		/**
		 * The percent of transition routes in all the transition route groups that are covered.
		 * Type: float
		 */
		coverageScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageFormProperties>({
			coverageScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Coverage result message for one transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage {

		/**
		 * The percent of transition routes in the transition route group that are covered.
		 * Type: float
		 */
		coverageScore?: number | null;

		/** A TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page. */
		routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;

		/** The list of transition routes and coverage in the transition route group. */
		transitions?: Array<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition>;
	}

	/** Coverage result message for one transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageFormProperties {

		/**
		 * The percent of transition routes in the transition route group that are covered.
		 * Type: float
		 */
		coverageScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageFormProperties>({
			coverageScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroup {

		/** Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters. */
		displayName?: string | null;

		/** The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups. */
		name?: string | null;

		/** Transition routes associated with the TransitionRouteGroup. */
		transitionRoutes?: Array<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
	}

	/** A TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupFormProperties {

		/** Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionRouteGroupFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transition coverage in a transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition {

		/** Whether the transition route is covered by at least one of the agent's test cases. */
		covered?: boolean | null;

		/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
		transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
	}

	/** A transition coverage in a transition route group. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransitionFormProperties {

		/** Whether the transition route is covered by at least one of the agent's test cases. */
		covered: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransitionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransitionFormProperties>({
			covered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverage {

		/**
		 * The percent of transitions in the agent that are covered.
		 * Type: float
		 */
		coverageScore?: number | null;

		/** The list of Transitions present in the agent. */
		transitions?: Array<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition>;
	}

	/** Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageFormProperties {

		/**
		 * The percent of transitions in the agent that are covered.
		 * Type: float
		 */
		coverageScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionCoverageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionCoverageFormProperties>({
			coverageScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A transition in a page. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition {

		/** Whether the transition is covered by at least one of the agent's test cases. */
		covered?: boolean | null;

		/** An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow. */
		eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;

		/**
		 * The index of a transition in the transition list. Starting from 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;

		/** The source or target of a transition. */
		source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

		/** The source or target of a transition. */
		target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

		/** A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow. */
		transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
	}

	/** A transition in a page. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionFormProperties {

		/** Whether the transition is covered by at least one of the agent's test cases. */
		covered: FormControl<boolean | null | undefined>,

		/**
		 * The index of a transition in the transition list. Starting from 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionFormProperties>({
			covered: new FormControl<boolean | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The source or target of a transition. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode {

		/** Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow. */
		flow?: GoogleCloudDialogflowCxV3beta1Flow;

		/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
		page?: GoogleCloudDialogflowCxV3beta1Page;
	}

	/** The source or target of a transition. */
	export interface GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNodeFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNodeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNodeFormProperties>({
		});

	}


	/** Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow. */
	export interface GoogleCloudDialogflowCxV3beta1Flow {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description?: string | null;

		/** Required. The human-readable name of the flow. */
		displayName?: string | null;

		/** A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored. */
		eventHandlers?: Array<GoogleCloudDialogflowCxV3beta1EventHandler>;

		/** The Knowledge Connector settings for this page or flow. This includes information such as the attached Knowledge Bases, and the way to execute fulfillment. */
		knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings;

		/** The unique identifier of the flow. Format: `projects//locations//agents//flows/`. */
		name?: string | null;

		/** Settings related to NLU. */
		nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

		/** A flow's transition route group serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format:`projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/` for agent-level groups. */
		transitionRouteGroups?: Array<string>;

		/** A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evalauted in the following order: * TransitionRoutes with intent specified. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow. */
		transitionRoutes?: Array<GoogleCloudDialogflowCxV3beta1TransitionRoute>;
	}

	/** Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow. */
	export interface GoogleCloudDialogflowCxV3beta1FlowFormProperties {

		/** The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the flow. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the flow. Format: `projects//locations//agents//flows/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FlowFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FlowFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to NLU. */
	export interface GoogleCloudDialogflowCxV3beta1NluSettings {

		/**
		 * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
		 * Type: float
		 */
		classificationThreshold?: number | null;

		/** Indicates NLU model training mode. */
		modelTrainingMode?: GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingMode | null;

		/** Indicates the type of NLU model. */
		modelType?: GoogleCloudDialogflowCxV3beta1NluSettingsModelType | null;
	}

	/** Settings related to NLU. */
	export interface GoogleCloudDialogflowCxV3beta1NluSettingsFormProperties {

		/**
		 * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
		 * Type: float
		 */
		classificationThreshold: FormControl<number | null | undefined>,

		/** Indicates NLU model training mode. */
		modelTrainingMode: FormControl<GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingMode | null | undefined>,

		/** Indicates the type of NLU model. */
		modelType: FormControl<GoogleCloudDialogflowCxV3beta1NluSettingsModelType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1NluSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1NluSettingsFormProperties>({
			classificationThreshold: new FormControl<number | null | undefined>(undefined),
			modelTrainingMode: new FormControl<GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingMode | null | undefined>(undefined),
			modelType: new FormControl<GoogleCloudDialogflowCxV3beta1NluSettingsModelType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingMode { MODEL_TRAINING_MODE_UNSPECIFIED = 'MODEL_TRAINING_MODE_UNSPECIFIED', MODEL_TRAINING_MODE_AUTOMATIC = 'MODEL_TRAINING_MODE_AUTOMATIC', MODEL_TRAINING_MODE_MANUAL = 'MODEL_TRAINING_MODE_MANUAL' }

	export enum GoogleCloudDialogflowCxV3beta1NluSettingsModelType { MODEL_TYPE_UNSPECIFIED = 'MODEL_TYPE_UNSPECIFIED', MODEL_TYPE_STANDARD = 'MODEL_TYPE_STANDARD', MODEL_TYPE_ADVANCED = 'MODEL_TYPE_ADVANCED' }


	/** Changelogs represents a change made to a given agent. */
	export interface GoogleCloudDialogflowCxV3beta1Changelog {

		/** The action of the change. */
		action?: string | null;

		/** The timestamp of the change. */
		createTime?: string | null;

		/** The affected resource display name of the change. */
		displayName?: string | null;

		/** The unique identifier of the changelog. Format: `projects//locations//agents//changelogs/`. */
		name?: string | null;

		/** The affected resource name of the change. */
		resource?: string | null;

		/** The affected resource type. */
		type?: string | null;

		/** Email address of the authenticated user. */
		userEmail?: string | null;
	}

	/** Changelogs represents a change made to a given agent. */
	export interface GoogleCloudDialogflowCxV3beta1ChangelogFormProperties {

		/** The action of the change. */
		action: FormControl<string | null | undefined>,

		/** The timestamp of the change. */
		createTime: FormControl<string | null | undefined>,

		/** The affected resource display name of the change. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the changelog. Format: `projects//locations//agents//changelogs/`. */
		name: FormControl<string | null | undefined>,

		/** The affected resource name of the change. */
		resource: FormControl<string | null | undefined>,

		/** The affected resource type. */
		type: FormControl<string | null | undefined>,

		/** Email address of the authenticated user. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ChangelogFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ChangelogFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Versions.CompareVersions. */
	export interface GoogleCloudDialogflowCxV3beta1CompareVersionsRequest {

		/** The language to compare the flow versions for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. */
		languageCode?: string | null;

		/** Required. Name of the target flow version to compare with the base version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`. */
		targetVersion?: string | null;
	}

	/** The request message for Versions.CompareVersions. */
	export interface GoogleCloudDialogflowCxV3beta1CompareVersionsRequestFormProperties {

		/** The language to compare the flow versions for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. Name of the target flow version to compare with the base version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`. */
		targetVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1CompareVersionsRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1CompareVersionsRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Versions.CompareVersions. */
	export interface GoogleCloudDialogflowCxV3beta1CompareVersionsResponse {

		/** JSON representation of the base version content. */
		baseVersionContentJson?: string | null;

		/** The timestamp when the two version compares. */
		compareTime?: string | null;

		/** JSON representation of the target version content. */
		targetVersionContentJson?: string | null;
	}

	/** The response message for Versions.CompareVersions. */
	export interface GoogleCloudDialogflowCxV3beta1CompareVersionsResponseFormProperties {

		/** JSON representation of the base version content. */
		baseVersionContentJson: FormControl<string | null | undefined>,

		/** The timestamp when the two version compares. */
		compareTime: FormControl<string | null | undefined>,

		/** JSON representation of the target version content. */
		targetVersionContentJson: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1CompareVersionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1CompareVersionsResponseFormProperties>({
			baseVersionContentJson: new FormControl<string | null | undefined>(undefined),
			compareTime: new FormControl<string | null | undefined>(undefined),
			targetVersionContentJson: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResult {

		/** The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`. */
		name?: string | null;

		/** The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not. */
		result?: GoogleCloudDialogflowCxV3ContinuousTestResultResult | null;

		/** Time when the continuous testing run starts. */
		runTime?: string | null;

		/** A list of individual test case results names in this continuous test run. */
		testCaseResults?: Array<string>;
	}

	/** Represents a result from running a test case in an agent environment. */
	export interface GoogleCloudDialogflowCxV3beta1ContinuousTestResultFormProperties {

		/** The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`. */
		name: FormControl<string | null | undefined>,

		/** The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not. */
		result: FormControl<GoogleCloudDialogflowCxV3ContinuousTestResultResult | null | undefined>,

		/** Time when the continuous testing run starts. */
		runTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ContinuousTestResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ContinuousTestResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<GoogleCloudDialogflowCxV3ContinuousTestResultResult | null | undefined>(undefined),
			runTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationSignals {

		/** Collection of all signals that were extracted for a single turn of the conversation. */
		turnSignals?: GoogleCloudDialogflowCxV3beta1TurnSignals;
	}

	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowCxV3beta1ConversationSignalsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ConversationSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ConversationSignalsFormProperties>({
		});

	}


	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowCxV3beta1TurnSignals {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated?: boolean | null;

		/** Whether user was using DTMF input. */
		dtmfUsed?: boolean | null;

		/** Failure reasons of the turn. */
		failureReasons?: Array<string>;

		/** Whether NLU predicted NO_MATCH. */
		noMatch?: boolean | null;

		/** Whether user provided no input. */
		noUserInput?: boolean | null;

		/** Whether turn resulted in End Session page. */
		reachedEndPage?: boolean | null;

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude?: number | null;

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore?: number | null;

		/** Whether user was specifically asking for a live agent. */
		userEscalated?: boolean | null;

		/** Human-readable statuses of the webhooks triggered during this turn. */
		webhookStatuses?: Array<string>;
	}

	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowCxV3beta1TurnSignalsFormProperties {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated: FormControl<boolean | null | undefined>,

		/** Whether user was using DTMF input. */
		dtmfUsed: FormControl<boolean | null | undefined>,

		/** Whether NLU predicted NO_MATCH. */
		noMatch: FormControl<boolean | null | undefined>,

		/** Whether user provided no input. */
		noUserInput: FormControl<boolean | null | undefined>,

		/** Whether turn resulted in End Session page. */
		reachedEndPage: FormControl<boolean | null | undefined>,

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore: FormControl<number | null | undefined>,

		/** Whether user was specifically asking for a live agent. */
		userEscalated: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TurnSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TurnSignalsFormProperties>({
			agentEscalated: new FormControl<boolean | null | undefined>(undefined),
			dtmfUsed: new FormControl<boolean | null | undefined>(undefined),
			noMatch: new FormControl<boolean | null | undefined>(undefined),
			noUserInput: new FormControl<boolean | null | undefined>(undefined),
			reachedEndPage: new FormControl<boolean | null | undefined>(undefined),
			sentimentMagnitude: new FormControl<number | null | undefined>(undefined),
			sentimentScore: new FormControl<number | null | undefined>(undefined),
			userEscalated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1CreateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1CreateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1CreateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1CreateDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata {

		/** Required. Output only. The current state of this operation. */
		state?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null;
	}

	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadataFormProperties {

		/** Required. Output only. The current state of this operation. */
		state: FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadataFormProperties>({
			state: new FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>(undefined),
		});

	}


	/** Metadata associated with the long running operation for Versions.CreateVersion. */
	export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {

		/** Name of the created version. Format: `projects//locations//agents//flows//versions/`. */
		version?: string | null;
	}

	/** Metadata associated with the long running operation for Versions.CreateVersion. */
	export interface GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadataFormProperties {

		/** Name of the created version. Format: `projects//locations//agents//flows//versions/`. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadataFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1DeleteDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1DeleteDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeleteDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeleteDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata returned for the Environments.DeployFlow long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowMetadata {

		/** Errors of running deployment tests. */
		testErrors?: Array<GoogleCloudDialogflowCxV3beta1TestError>;
	}

	/** Metadata returned for the Environments.DeployFlow long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeployFlowMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeployFlowMetadataFormProperties>({
		});

	}


	/** The request message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowRequest {

		/** Required. The flow version to deploy. Format: `projects//locations//agents// flows//versions/`. */
		flowVersion?: string | null;
	}

	/** The request message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowRequestFormProperties {

		/** Required. The flow version to deploy. Format: `projects//locations//agents// flows//versions/`. */
		flowVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeployFlowRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeployFlowRequestFormProperties>({
			flowVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowResponse {

		/** The name of the flow version deployment. Format: `projects//locations//agents// environments//deployments/`. */
		deployment?: string | null;

		/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
		environment?: GoogleCloudDialogflowCxV3beta1Environment;
	}

	/** The response message for Environments.DeployFlow. */
	export interface GoogleCloudDialogflowCxV3beta1DeployFlowResponseFormProperties {

		/** The name of the flow version deployment. Format: `projects//locations//agents// environments//deployments/`. */
		deployment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeployFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeployFlowResponseFormProperties>({
			deployment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
	export interface GoogleCloudDialogflowCxV3beta1Environment {

		/** The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description?: string | null;

		/** Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters. */
		displayName?: string | null;

		/** The name of the environment. Format: `projects//locations//agents//environments/`. */
		name?: string | null;

		/** The configuration for continuous tests. */
		testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;

		/** Output only. Update time of this environment. */
		updateTime?: string | null;

		/** A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned. */
		versionConfigs?: Array<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig>;

		/** Configuration for webhooks. */
		webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig;
	}

	/** Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentFormProperties {

		/** The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the environment. Format: `projects//locations//agents//environments/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Update time of this environment. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EnvironmentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EnvironmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for continuous tests. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {

		/** Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day. */
		enableContinuousRun?: boolean | null;

		/** Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false. */
		enablePredeploymentRun?: boolean | null;

		/** A list of test case names to run. They should be under the same agent. Format of each test case name: `projects//locations/ /agents//testCases/` */
		testCases?: Array<string>;
	}

	/** The configuration for continuous tests. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfigFormProperties {

		/** Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day. */
		enableContinuousRun: FormControl<boolean | null | undefined>,

		/** Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false. */
		enablePredeploymentRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfigFormProperties>({
			enableContinuousRun: new FormControl<boolean | null | undefined>(undefined),
			enablePredeploymentRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for the version. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {

		/** Required. Format: projects//locations//agents//flows//versions/. */
		version?: string | null;
	}

	/** Configuration for the version. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfigFormProperties {

		/** Required. Format: projects//locations//agents//flows//versions/. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EnvironmentVersionConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfigFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for webhooks. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig {

		/** The list of webhooks to override for the agent environment. The webhook must exist in the agent. You can override fields in `generic_web_service` and `service_directory`. */
		webhookOverrides?: Array<GoogleCloudDialogflowCxV3beta1Webhook>;
	}

	/** Configuration for webhooks. */
	export interface GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfigFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfigFormProperties>({
		});

	}


	/** Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend. */
	export interface GoogleCloudDialogflowCxV3beta1Webhook {

		/** Indicates whether the webhook is disabled. */
		disabled?: boolean | null;

		/** Required. The human-readable name of the webhook, unique within the agent. */
		displayName?: string | null;

		/** Represents configuration for a generic web service. */
		genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;

		/** The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`. */
		name?: string | null;

		/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
		serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;

		/** Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds. */
		timeout?: string | null;
	}

	/** Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookFormProperties {

		/** Indicates whether the webhook is disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** Required. The human-readable name of the webhook, unique within the agent. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`. */
		name: FormControl<string | null | undefined>,

		/** Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents configuration for a generic web service. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {

		/** Optional. Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command, ``` openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'") ``` */
		allowedCaCerts?: Array<string>;

		/** Optional. HTTP method for the flexible webhook calls. Standard webhook always uses POST. */
		httpMethod?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null;

		/** Optional. Maps the values extracted from specific fields of the flexible webhook response into session parameters. - Key: session parameter name - Value: field path in the webhook response */
		parameterMapping?: {[id: string]: string };

		/** The password for HTTP Basic authentication. */
		password?: string | null;

		/** Optional. Defines a custom JSON object as request body to send to flexible webhook. */
		requestBody?: string | null;

		/** The HTTP request headers to send together with webhook requests. */
		requestHeaders?: {[id: string]: string };

		/** Required. The webhook URI for receiving POST requests. It must use https protocol. */
		uri?: string | null;

		/** The user name for HTTP Basic authentication. */
		username?: string | null;

		/** Optional. Type of the webhook. */
		webhookType?: GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null;
	}

	/** Represents configuration for a generic web service. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceFormProperties {

		/** Optional. HTTP method for the flexible webhook calls. Standard webhook always uses POST. */
		httpMethod: FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null | undefined>,

		/** Optional. Maps the values extracted from specific fields of the flexible webhook response into session parameters. - Key: session parameter name - Value: field path in the webhook response */
		parameterMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** The password for HTTP Basic authentication. */
		password: FormControl<string | null | undefined>,

		/** Optional. Defines a custom JSON object as request body to send to flexible webhook. */
		requestBody: FormControl<string | null | undefined>,

		/** The HTTP request headers to send together with webhook requests. */
		requestHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The webhook URI for receiving POST requests. It must use https protocol. */
		uri: FormControl<string | null | undefined>,

		/** The user name for HTTP Basic authentication. */
		username: FormControl<string | null | undefined>,

		/** Optional. Type of the webhook. */
		webhookType: FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookGenericWebServiceFormProperties>({
			httpMethod: new FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceHttpMethod | null | undefined>(undefined),
			parameterMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			requestBody: new FormControl<string | null | undefined>(undefined),
			requestHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			webhookType: new FormControl<GoogleCloudDialogflowCxV3WebhookGenericWebServiceWebhookType | null | undefined>(undefined),
		});

	}


	/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {

		/** Represents configuration for a generic web service. */
		genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;

		/** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent. */
		service?: string | null;
	}

	/** Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfigFormProperties {

		/** Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc. */
	export interface GoogleCloudDialogflowCxV3beta1Deployment {

		/** End time of this deployment. */
		endTime?: string | null;

		/** The name of the flow version for this deployment. Format: projects//locations//agents//flows//versions/. */
		flowVersion?: string | null;

		/** The name of the deployment. Format: projects//locations//agents//environments//deployments/. */
		name?: string | null;

		/** Result of the deployment. */
		result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;

		/** Start time of this deployment. */
		startTime?: string | null;

		/** The current state of the deployment. */
		state?: GoogleCloudDialogflowCxV3beta1DeploymentState | null;
	}

	/** Represents a deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc. */
	export interface GoogleCloudDialogflowCxV3beta1DeploymentFormProperties {

		/** End time of this deployment. */
		endTime: FormControl<string | null | undefined>,

		/** The name of the flow version for this deployment. Format: projects//locations//agents//flows//versions/. */
		flowVersion: FormControl<string | null | undefined>,

		/** The name of the deployment. Format: projects//locations//agents//environments//deployments/. */
		name: FormControl<string | null | undefined>,

		/** Start time of this deployment. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the deployment. */
		state: FormControl<GoogleCloudDialogflowCxV3beta1DeploymentState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeploymentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeploymentFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			flowVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3beta1DeploymentState | null | undefined>(undefined),
		});

	}


	/** Result of the deployment. */
	export interface GoogleCloudDialogflowCxV3beta1DeploymentResult {

		/** Results of test cases running before the deployment. Format: `projects//locations//agents//testCases//results/`. */
		deploymentTestResults?: Array<string>;

		/** The name of the experiment triggered by this deployment. Format: projects//locations//agents//environments//experiments/. */
		experiment?: string | null;
	}

	/** Result of the deployment. */
	export interface GoogleCloudDialogflowCxV3beta1DeploymentResultFormProperties {

		/** The name of the experiment triggered by this deployment. Format: projects//locations//agents//environments//experiments/. */
		experiment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DeploymentResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DeploymentResultFormProperties>({
			experiment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1DeploymentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** The request to detect user's intent. */
	export interface GoogleCloudDialogflowCxV3beta1DetectIntentRequest {

		/** Instructs the speech synthesizer how to generate the output audio content. */
		outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

		/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
		queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

		/** Represents the parameters of a conversational query. */
		queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
	}

	/** The request to detect user's intent. */
	export interface GoogleCloudDialogflowCxV3beta1DetectIntentRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DetectIntentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DetectIntentRequestFormProperties>({
		});

	}


	/** Instructs the speech synthesizer how to generate the output audio content. */
	export interface GoogleCloudDialogflowCxV3beta1OutputAudioConfig {

		/** Required. Audio encoding of the synthesized audio content. */
		audioEncoding?: GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncoding | null;

		/**
		 * Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz?: number | null;

		/** Configuration of how speech should be synthesized. */
		synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
	}

	/** Instructs the speech synthesizer how to generate the output audio content. */
	export interface GoogleCloudDialogflowCxV3beta1OutputAudioConfigFormProperties {

		/** Required. Audio encoding of the synthesized audio content. */
		audioEncoding: FormControl<GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncoding | null | undefined>,

		/**
		 * Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1OutputAudioConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1OutputAudioConfigFormProperties>({
			audioEncoding: new FormControl<GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncoding | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncoding { OUTPUT_AUDIO_ENCODING_UNSPECIFIED = 'OUTPUT_AUDIO_ENCODING_UNSPECIFIED', OUTPUT_AUDIO_ENCODING_LINEAR_16 = 'OUTPUT_AUDIO_ENCODING_LINEAR_16', OUTPUT_AUDIO_ENCODING_MP3 = 'OUTPUT_AUDIO_ENCODING_MP3', OUTPUT_AUDIO_ENCODING_MP3_64_KBPS = 'OUTPUT_AUDIO_ENCODING_MP3_64_KBPS', OUTPUT_AUDIO_ENCODING_OGG_OPUS = 'OUTPUT_AUDIO_ENCODING_OGG_OPUS', OUTPUT_AUDIO_ENCODING_MULAW = 'OUTPUT_AUDIO_ENCODING_MULAW' }


	/** Represents the parameters of a conversational query. */
	export interface GoogleCloudDialogflowCxV3beta1QueryParameters {

		/** Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed. */
		analyzeQueryTextSentiment?: boolean | null;

		/** The channel which this query is for. If specified, only the ResponseMessage associated with the channel will be returned. If no ResponseMessage is associated with the channel, it falls back to the ResponseMessage with unspecified channel. If unspecified, the ResponseMessage with unspecified channel will be returned. */
		channel?: string | null;

		/** The unique identifier of the page to override the current page in the session. Format: `projects//locations//agents//flows//pages/`. If `current_page` is specified, the previous state of the session will be ignored by Dialogflow, including the previous page and the previous session parameters. In most cases, current_page and parameters should be configured together to direct a session to a specific state. */
		currentPage?: string | null;

		/** Whether to disable webhook calls for this request. */
		disableWebhook?: boolean | null;

		/** Optional. Information about the end-user to improve the relevance and accuracy of generative answers. This will be interpreted and used by a language model, so, for good results, the data should be self-descriptive, and in a simple structure. Example: ```json { "subscription plan": "Business Premium Plus", "devices owned": [ {"model": "Google Pixel 7"}, {"model": "Google Pixel Tablet"} ] } ``` */
		endUserMetadata?: {[id: string]: any };

		/** A list of flow versions to override for the request. Format: `projects//locations//agents//flows//versions/`. If version 1 of flow X is included in this list, the traffic of flow X will go through version 1 regardless of the version configuration in the environment. Each flow can have at most one version specified in this list. */
		flowVersions?: Array<string>;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		geoLocation?: GoogleTypeLatLng;

		/** Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. You can reference the session parameters in the agent with the following format: $session.params.parameter-id. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };

		/** This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: ``` { "telephony": { "caller_id": "+18558363987" } } ``` */
		payload?: {[id: string]: any };

		/** Search configuration for UCS search queries. */
		searchConfig?: GoogleCloudDialogflowCxV3beta1SearchConfig;

		/** Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query. */
		sessionEntityTypes?: Array<GoogleCloudDialogflowCxV3beta1SessionEntityType>;

		/** Optional. Configure lifetime of the Dialogflow session. By default, a Dialogflow session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day. */
		sessionTtl?: string | null;

		/** The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used. */
		timeZone?: string | null;

		/** This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc. */
		webhookHeaders?: {[id: string]: string };
	}

	/** Represents the parameters of a conversational query. */
	export interface GoogleCloudDialogflowCxV3beta1QueryParametersFormProperties {

		/** Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed. */
		analyzeQueryTextSentiment: FormControl<boolean | null | undefined>,

		/** The channel which this query is for. If specified, only the ResponseMessage associated with the channel will be returned. If no ResponseMessage is associated with the channel, it falls back to the ResponseMessage with unspecified channel. If unspecified, the ResponseMessage with unspecified channel will be returned. */
		channel: FormControl<string | null | undefined>,

		/** The unique identifier of the page to override the current page in the session. Format: `projects//locations//agents//flows//pages/`. If `current_page` is specified, the previous state of the session will be ignored by Dialogflow, including the previous page and the previous session parameters. In most cases, current_page and parameters should be configured together to direct a session to a specific state. */
		currentPage: FormControl<string | null | undefined>,

		/** Whether to disable webhook calls for this request. */
		disableWebhook: FormControl<boolean | null | undefined>,

		/** Optional. Information about the end-user to improve the relevance and accuracy of generative answers. This will be interpreted and used by a language model, so, for good results, the data should be self-descriptive, and in a simple structure. Example: ```json { "subscription plan": "Business Premium Plus", "devices owned": [ {"model": "Google Pixel 7"}, {"model": "Google Pixel Tablet"} ] } ``` */
		endUserMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. You can reference the session parameters in the agent with the following format: $session.params.parameter-id. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: ``` { "telephony": { "caller_id": "+18558363987" } } ``` */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. Configure lifetime of the Dialogflow session. By default, a Dialogflow session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day. */
		sessionTtl: FormControl<string | null | undefined>,

		/** The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used. */
		timeZone: FormControl<string | null | undefined>,

		/** This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc. */
		webhookHeaders: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1QueryParametersFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1QueryParametersFormProperties>({
			analyzeQueryTextSentiment: new FormControl<boolean | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			currentPage: new FormControl<string | null | undefined>(undefined),
			disableWebhook: new FormControl<boolean | null | undefined>(undefined),
			endUserMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sessionTtl: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			webhookHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLng {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLngFormProperties {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeLatLngFormGroup() {
		return new FormGroup<GoogleTypeLatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Search configuration for UCS search queries. */
	export interface GoogleCloudDialogflowCxV3beta1SearchConfig {

		/** Optional. Boosting configuration for the datastores. */
		boostSpecs?: Array<GoogleCloudDialogflowCxV3beta1BoostSpecs>;

		/** Optional. Filter configuration for the datastores. */
		filterSpecs?: Array<GoogleCloudDialogflowCxV3beta1FilterSpecs>;
	}

	/** Search configuration for UCS search queries. */
	export interface GoogleCloudDialogflowCxV3beta1SearchConfigFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SearchConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SearchConfigFormProperties>({
		});

	}


	/** Filter specifications for data stores. */
	export interface GoogleCloudDialogflowCxV3beta1FilterSpecs {

		/** Optional. Data Stores where the boosting configuration is applied. The full names of the referenced data stores. Formats: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` `projects/{project}/locations/{location}/dataStores/{data_store} */
		dataStores?: Array<string>;

		/** Optional. The filter expression to be applied. Expression syntax is documented at https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata#filter-expression-syntax */
		filter?: string | null;
	}

	/** Filter specifications for data stores. */
	export interface GoogleCloudDialogflowCxV3beta1FilterSpecsFormProperties {

		/** Optional. The filter expression to be applied. Expression syntax is documented at https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata#filter-expression-syntax */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FilterSpecsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FilterSpecsFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowCxV3beta1SessionEntityType {

		/** Required. The collection of entities to override or supplement the custom entity type. */
		entities?: Array<GoogleCloudDialogflowCxV3beta1EntityTypeEntity>;

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode?: GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null;

		/** Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. */
		name?: string | null;
	}

	/** Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowCxV3beta1SessionEntityTypeFormProperties {

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode: FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>,

		/** Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SessionEntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SessionEntityTypeFormProperties>({
			entityOverrideMode: new FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowCxV3beta1EntityTypeEntity {

		/** Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`. */
		synonyms?: Array<string>;

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A canonical value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value?: string | null;
	}

	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowCxV3beta1EntityTypeEntityFormProperties {

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A canonical value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EntityTypeEntityFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EntityTypeEntityFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode { ENTITY_OVERRIDE_MODE_UNSPECIFIED = 'ENTITY_OVERRIDE_MODE_UNSPECIFIED', ENTITY_OVERRIDE_MODE_OVERRIDE = 'ENTITY_OVERRIDE_MODE_OVERRIDE', ENTITY_OVERRIDE_MODE_SUPPLEMENT = 'ENTITY_OVERRIDE_MODE_SUPPLEMENT' }


	/** The message returned from the DetectIntent method. */
	export interface GoogleCloudDialogflowCxV3beta1DetectIntentResponse {

		/** Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled. */
		allowCancellation?: boolean | null;

		/** The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. */
		outputAudio?: string | null;

		/** Instructs the speech synthesizer how to generate the output audio content. */
		outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

		/** Represents the result of a conversational query. */
		queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

		/** Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. */
		responseId?: string | null;

		/** Response type. */
		responseType?: GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseType | null;
	}

	/** The message returned from the DetectIntent method. */
	export interface GoogleCloudDialogflowCxV3beta1DetectIntentResponseFormProperties {

		/** Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled. */
		allowCancellation: FormControl<boolean | null | undefined>,

		/** The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. */
		outputAudio: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. */
		responseId: FormControl<string | null | undefined>,

		/** Response type. */
		responseType: FormControl<GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1DetectIntentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1DetectIntentResponseFormProperties>({
			allowCancellation: new FormControl<boolean | null | undefined>(undefined),
			outputAudio: new FormControl<string | null | undefined>(undefined),
			responseId: new FormControl<string | null | undefined>(undefined),
			responseType: new FormControl<GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseType | null | undefined>(undefined),
		});

	}


	/** Represents the result of a conversational query. */
	export interface GoogleCloudDialogflowCxV3beta1QueryResult {

		/** Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter. */
		advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;

		/** Indicates whether the Thumbs up/Thumbs down rating controls are need to be shown for the response in the Dialogflow Messenger widget. */
		allowAnswerFeedback?: boolean | null;

		/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
		currentPage?: GoogleCloudDialogflowCxV3beta1Page;

		/** The free-form diagnostic info. For example, this field could contain webhook call latency. The fields of this data can change without notice, so you should not write code that depends on its structure. One of the fields is called "Alternative Matched Intents", which may aid with debugging. The following describes these intent results: - The list is empty if no intent was matched to end-user input. - Only intents that are referenced in the currently active flow are included. - The matched intent is included. - Other intents that could have matched end-user input, but did not match because they are referenced by intent routes that are out of [scope](https://cloud.google.com/dialogflow/cx/docs/concept/handler#scope), are included. - Other intents referenced by intent routes in scope that matched end-user input, but had a lower confidence score. */
		diagnosticInfo?: {[id: string]: any };

		/** Represents the input for dtmf event. */
		dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;

		/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
		intent?: GoogleCloudDialogflowCxV3beta1Intent;

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead.
		 * Type: float
		 */
		intentDetectionConfidence?: number | null;

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. */
		languageCode?: string | null;

		/** Represents one match result of MatchIntent. */
		match?: GoogleCloudDialogflowCxV3beta1Match;

		/** The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };

		/** The list of rich messages returned to the client. Responses vary from simple text messages to more sophisticated, structured payloads used to drive complex logic. */
		responseMessages?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessage>;

		/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. */
		sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text?: string | null;

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript?: string | null;

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent?: string | null;

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent?: string | null;

		/** The list of webhook payload in WebhookResponse.payload, in the order of call sequence. If some webhook call fails or doesn't return any payload, an empty `Struct` would be used instead. */
		webhookPayloads?: Array<string>;

		/** The list of webhook call status in the order of call sequence. */
		webhookStatuses?: Array<GoogleRpcStatus>;
	}

	/** Represents the result of a conversational query. */
	export interface GoogleCloudDialogflowCxV3beta1QueryResultFormProperties {

		/** Indicates whether the Thumbs up/Thumbs down rating controls are need to be shown for the response in the Dialogflow Messenger widget. */
		allowAnswerFeedback: FormControl<boolean | null | undefined>,

		/** The free-form diagnostic info. For example, this field could contain webhook call latency. The fields of this data can change without notice, so you should not write code that depends on its structure. One of the fields is called "Alternative Matched Intents", which may aid with debugging. The following describes these intent results: - The list is empty if no intent was matched to end-user input. - Only intents that are referenced in the currently active flow are included. - The matched intent is included. - Other intents that could have matched end-user input, but did not match because they are referenced by intent routes that are out of [scope](https://cloud.google.com/dialogflow/cx/docs/concept/handler#scope), are included. - Other intents referenced by intent routes in scope that matched end-user input, but had a lower confidence score. */
		diagnosticInfo: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead.
		 * Type: float
		 */
		intentDetectionConfidence: FormControl<number | null | undefined>,

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. */
		languageCode: FormControl<string | null | undefined>,

		/** The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text: FormControl<string | null | undefined>,

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript: FormControl<string | null | undefined>,

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent: FormControl<string | null | undefined>,

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1QueryResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1QueryResultFormProperties>({
			allowAnswerFeedback: new FormControl<boolean | null | undefined>(undefined),
			diagnosticInfo: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			intentDetectionConfidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
			triggerEvent: new FormControl<string | null | undefined>(undefined),
			triggerIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents one match result of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1Match {

		/**
		 * The confidence of this match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation.
		 * Type: float
		 */
		confidence?: number | null;

		/** The event that matched the query. Filled for `EVENT`, `NO_MATCH` and `NO_INPUT` match types. */
		event?: string | null;

		/** An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent. */
		intent?: GoogleCloudDialogflowCxV3beta1Intent;

		/** Type of this Match. */
		matchType?: GoogleCloudDialogflowCxV3beta1MatchMatchType | null;

		/** The collection of parameters extracted from the query. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };

		/** Final text input which was matched during MatchIntent. This value can be different from original input sent in request because of spelling correction or other processing. */
		resolvedInput?: string | null;
	}

	/** Represents one match result of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1MatchFormProperties {

		/**
		 * The confidence of this match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation.
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The event that matched the query. Filled for `EVENT`, `NO_MATCH` and `NO_INPUT` match types. */
		event: FormControl<string | null | undefined>,

		/** Type of this Match. */
		matchType: FormControl<GoogleCloudDialogflowCxV3beta1MatchMatchType | null | undefined>,

		/** The collection of parameters extracted from the query. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Final text input which was matched during MatchIntent. This value can be different from original input sent in request because of spelling correction or other processing. */
		resolvedInput: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1MatchFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1MatchFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			event: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<GoogleCloudDialogflowCxV3beta1MatchMatchType | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resolvedInput: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1MatchMatchType { MATCH_TYPE_UNSPECIFIED = 'MATCH_TYPE_UNSPECIFIED', INTENT = 'INTENT', DIRECT_INTENT = 'DIRECT_INTENT', PARAMETER_FILLING = 'PARAMETER_FILLING', NO_MATCH = 'NO_MATCH', NO_INPUT = 'NO_INPUT', EVENT = 'EVENT' }


	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. */
	export interface GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. */
	export interface GoogleCloudDialogflowCxV3beta1SentimentAnalysisResultFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SentimentAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SentimentAnalysisResultFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseType { RESPONSE_TYPE_UNSPECIFIED = 'RESPONSE_TYPE_UNSPECIFIED', PARTIAL = 'PARTIAL', FINAL = 'FINAL' }


	/** Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application. When you define an entity, you can also include synonyms that all map to that entity. For example, "soft drink", "soda", "pop", and so on. There are three types of entities: * **System** - entities that are defined by the Dialogflow API for common data types such as date, time, currency, and so on. A system entity is represented by the `EntityType` type. * **Custom** - entities that are defined by you that represent actionable data that is meaningful to your application. For example, you could define a `pizza.sauce` entity for red or white pizza sauce, a `pizza.cheese` entity for the different types of cheese on a pizza, a `pizza.topping` entity for different toppings, and so on. A custom entity is represented by the `EntityType` type. * **User** - entities that are built for an individual user such as favorites, preferences, playlists, and so on. A user entity is represented by the SessionEntityType type. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowCxV3beta1EntityType {

		/** Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode?: GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null;

		/** Required. The human-readable name of the entity type, unique within the agent. */
		displayName?: string | null;

		/** Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction?: boolean | null;

		/** The collection of entity entries associated with the entity type. */
		entities?: Array<GoogleCloudDialogflowCxV3beta1EntityTypeEntity>;

		/** Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry `giant`(an adjective), you might consider adding `giants`(a noun) as an exclusion. If the kind of entity type is `KIND_MAP`, then the phrases specified by entities and excluded phrases should be mutually exclusive. */
		excludedPhrases?: Array<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase>;

		/** Required. Indicates the kind of entity type. */
		kind?: GoogleCloudDialogflowCxV3beta1EntityTypeKind | null;

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`. */
		name?: string | null;

		/** Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name during logging. */
		redact?: boolean | null;
	}

	/** Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application. When you define an entity, you can also include synonyms that all map to that entity. For example, "soft drink", "soda", "pop", and so on. There are three types of entities: * **System** - entities that are defined by the Dialogflow API for common data types such as date, time, currency, and so on. A system entity is represented by the `EntityType` type. * **Custom** - entities that are defined by you that represent actionable data that is meaningful to your application. For example, you could define a `pizza.sauce` entity for red or white pizza sauce, a `pizza.cheese` entity for the different types of cheese on a pizza, a `pizza.topping` entity for different toppings, and so on. A custom entity is represented by the `EntityType` type. * **User** - entities that are built for an individual user such as favorites, preferences, playlists, and so on. A user entity is represented by the SessionEntityType type. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowCxV3beta1EntityTypeFormProperties {

		/** Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>,

		/** Required. The human-readable name of the entity type, unique within the agent. */
		displayName: FormControl<string | null | undefined>,

		/** Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction: FormControl<boolean | null | undefined>,

		/** Required. Indicates the kind of entity type. */
		kind: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>,

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name during logging. */
		redact: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EntityTypeFormProperties>({
			autoExpansionMode: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableFuzzyExtraction: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redact: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode { AUTO_EXPANSION_MODE_UNSPECIFIED = 'AUTO_EXPANSION_MODE_UNSPECIFIED', AUTO_EXPANSION_MODE_DEFAULT = 'AUTO_EXPANSION_MODE_DEFAULT' }


	/** An excluded entity phrase that should not be matched. */
	export interface GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase {

		/** Required. The word or phrase to be excluded. */
		value?: string | null;
	}

	/** An excluded entity phrase that should not be matched. */
	export interface GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhraseFormProperties {

		/** Required. The word or phrase to be excluded. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhraseFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1EntityTypeKind { KIND_UNSPECIFIED = 'KIND_UNSPECIFIED', KIND_MAP = 'KIND_MAP', KIND_LIST = 'KIND_LIST', KIND_REGEXP = 'KIND_REGEXP' }


	/** Represents an experiment in an environment. */
	export interface GoogleCloudDialogflowCxV3beta1Experiment {

		/** Creation time of this experiment. */
		createTime?: string | null;

		/** Definition of the experiment. */
		definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;

		/** The human-readable description of the experiment. */
		description?: string | null;

		/** Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters. */
		displayName?: string | null;

		/** End time of this experiment. */
		endTime?: string | null;

		/** Maximum number of days to run the experiment. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days. */
		experimentLength?: string | null;

		/** Last update time of this experiment. */
		lastUpdateTime?: string | null;

		/** The name of the experiment. Format: projects//locations//agents//environments//experiments/.. */
		name?: string | null;

		/** The inference result which includes an objective metric to optimize and the confidence interval. */
		result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;

		/** The configuration for auto rollout. */
		rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;

		/** The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED. */
		rolloutFailureReason?: string | null;

		/** State of the auto-rollout process. */
		rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;

		/** Start time of this experiment. */
		startTime?: string | null;

		/** The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT->RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT->DONE or RUNNING->DONE. */
		state?: GoogleCloudDialogflowCxV3beta1ExperimentState | null;

		/** The history of updates to the experiment variants. */
		variantsHistory?: Array<GoogleCloudDialogflowCxV3beta1VariantsHistory>;
	}

	/** Represents an experiment in an environment. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentFormProperties {

		/** Creation time of this experiment. */
		createTime: FormControl<string | null | undefined>,

		/** The human-readable description of the experiment. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** End time of this experiment. */
		endTime: FormControl<string | null | undefined>,

		/** Maximum number of days to run the experiment. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days. */
		experimentLength: FormControl<string | null | undefined>,

		/** Last update time of this experiment. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The name of the experiment. Format: projects//locations//agents//environments//experiments/.. */
		name: FormControl<string | null | undefined>,

		/** The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED. */
		rolloutFailureReason: FormControl<string | null | undefined>,

		/** Start time of this experiment. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT->RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT->DONE or RUNNING->DONE. */
		state: FormControl<GoogleCloudDialogflowCxV3beta1ExperimentState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			experimentLength: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rolloutFailureReason: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3beta1ExperimentState | null | undefined>(undefined),
		});

	}


	/** Definition of the experiment. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentDefinition {

		/** The condition defines which subset of sessions are selected for this experiment. If not specified, all sessions are eligible. E.g. "query_input.language_code=en" See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition?: string | null;

		/** A list of flow version variants. */
		versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
	}

	/** Definition of the experiment. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentDefinitionFormProperties {

		/** The condition defines which subset of sessions are selected for this experiment. If not specified, all sessions are eligible. E.g. "query_input.language_code=en" See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentDefinitionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentDefinitionFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of flow version variants. */
	export interface GoogleCloudDialogflowCxV3beta1VersionVariants {

		/** A list of flow version variants. */
		variants?: Array<GoogleCloudDialogflowCxV3beta1VersionVariantsVariant>;
	}

	/** A list of flow version variants. */
	export interface GoogleCloudDialogflowCxV3beta1VersionVariantsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1VersionVariantsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1VersionVariantsFormProperties>({
		});

	}


	/** A single flow version with specified traffic allocation. */
	export interface GoogleCloudDialogflowCxV3beta1VersionVariantsVariant {

		/** Whether the variant is for the control group. */
		isControlGroup?: boolean | null;

		/**
		 * Percentage of the traffic which should be routed to this version of flow. Traffic allocation for a single flow must sum up to 1.0.
		 * Type: float
		 */
		trafficAllocation?: number | null;

		/** The name of the flow version. Format: `projects//locations//agents//flows//versions/`. */
		version?: string | null;
	}

	/** A single flow version with specified traffic allocation. */
	export interface GoogleCloudDialogflowCxV3beta1VersionVariantsVariantFormProperties {

		/** Whether the variant is for the control group. */
		isControlGroup: FormControl<boolean | null | undefined>,

		/**
		 * Percentage of the traffic which should be routed to this version of flow. Traffic allocation for a single flow must sum up to 1.0.
		 * Type: float
		 */
		trafficAllocation: FormControl<number | null | undefined>,

		/** The name of the flow version. Format: `projects//locations//agents//flows//versions/`. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1VersionVariantsVariantFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1VersionVariantsVariantFormProperties>({
			isControlGroup: new FormControl<boolean | null | undefined>(undefined),
			trafficAllocation: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inference result which includes an objective metric to optimize and the confidence interval. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResult {

		/** The last time the experiment's stats data was updated. Will have default value if stats have never been computed for this experiment. */
		lastUpdateTime?: string | null;

		/** Version variants and metrics. */
		versionMetrics?: Array<GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics>;
	}

	/** The inference result which includes an objective metric to optimize and the confidence interval. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultFormProperties {

		/** The last time the experiment's stats data was updated. Will have default value if stats have never been computed for this experiment. */
		lastUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentResultFormProperties>({
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version variant and associated metrics. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics {

		/** The metrics and corresponding confidence intervals in the inference result. */
		metrics?: Array<GoogleCloudDialogflowCxV3beta1ExperimentResultMetric>;

		/**
		 * Number of sessions that were allocated to this version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sessionCount?: number | null;

		/** The name of the flow Version. Format: `projects//locations//agents//flows//versions/`. */
		version?: string | null;
	}

	/** Version variant and associated metrics. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetricsFormProperties {

		/**
		 * Number of sessions that were allocated to this version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sessionCount: FormControl<number | null | undefined>,

		/** The name of the flow Version. Format: `projects//locations//agents//flows//versions/`. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetricsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetricsFormProperties>({
			sessionCount: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric and corresponding confidence intervals. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultMetric {

		/** A confidence interval is a range of possible values for the experiment objective you are trying to measure. */
		confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;

		/**
		 * Count value of a metric.
		 * Type: double
		 */
		count?: number | null;

		/** Count-based metric type. Only one of type or count_type is specified in each Metric. */
		countType?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountType | null;

		/**
		 * Ratio value of a metric.
		 * Type: double
		 */
		ratio?: number | null;

		/** Ratio-based metric type. Only one of type or count_type is specified in each Metric. */
		type?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricType | null;
	}

	/** Metric and corresponding confidence intervals. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultMetricFormProperties {

		/**
		 * Count value of a metric.
		 * Type: double
		 */
		count: FormControl<number | null | undefined>,

		/** Count-based metric type. Only one of type or count_type is specified in each Metric. */
		countType: FormControl<GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountType | null | undefined>,

		/**
		 * Ratio value of a metric.
		 * Type: double
		 */
		ratio: FormControl<number | null | undefined>,

		/** Ratio-based metric type. Only one of type or count_type is specified in each Metric. */
		type: FormControl<GoogleCloudDialogflowCxV3beta1ExperimentResultMetricType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentResultMetricFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentResultMetricFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			countType: new FormControl<GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountType | null | undefined>(undefined),
			ratio: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowCxV3beta1ExperimentResultMetricType | null | undefined>(undefined),
		});

	}


	/** A confidence interval is a range of possible values for the experiment objective you are trying to measure. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval {

		/**
		 * The confidence level used to construct the interval, i.e. there is X% chance that the true value is within this interval.
		 * Type: double
		 */
		confidenceLevel?: number | null;

		/**
		 * Lower bound of the interval.
		 * Type: double
		 */
		lowerBound?: number | null;

		/**
		 * The percent change between an experiment metric's value and the value for its control.
		 * Type: double
		 */
		ratio?: number | null;

		/**
		 * Upper bound of the interval.
		 * Type: double
		 */
		upperBound?: number | null;
	}

	/** A confidence interval is a range of possible values for the experiment objective you are trying to measure. */
	export interface GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceIntervalFormProperties {

		/**
		 * The confidence level used to construct the interval, i.e. there is X% chance that the true value is within this interval.
		 * Type: double
		 */
		confidenceLevel: FormControl<number | null | undefined>,

		/**
		 * Lower bound of the interval.
		 * Type: double
		 */
		lowerBound: FormControl<number | null | undefined>,

		/**
		 * The percent change between an experiment metric's value and the value for its control.
		 * Type: double
		 */
		ratio: FormControl<number | null | undefined>,

		/**
		 * Upper bound of the interval.
		 * Type: double
		 */
		upperBound: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceIntervalFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceIntervalFormProperties>({
			confidenceLevel: new FormControl<number | null | undefined>(undefined),
			lowerBound: new FormControl<number | null | undefined>(undefined),
			ratio: new FormControl<number | null | undefined>(undefined),
			upperBound: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountType { COUNT_TYPE_UNSPECIFIED = 'COUNT_TYPE_UNSPECIFIED', TOTAL_NO_MATCH_COUNT = 'TOTAL_NO_MATCH_COUNT', TOTAL_TURN_COUNT = 'TOTAL_TURN_COUNT', AVERAGE_TURN_COUNT = 'AVERAGE_TURN_COUNT' }

	export enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricType { METRIC_UNSPECIFIED = 'METRIC_UNSPECIFIED', CONTAINED_SESSION_NO_CALLBACK_RATE = 'CONTAINED_SESSION_NO_CALLBACK_RATE', LIVE_AGENT_HANDOFF_RATE = 'LIVE_AGENT_HANDOFF_RATE', CALLBACK_SESSION_RATE = 'CALLBACK_SESSION_RATE', ABANDONED_SESSION_RATE = 'ABANDONED_SESSION_RATE', SESSION_END_RATE = 'SESSION_END_RATE' }


	/** The configuration for auto rollout. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutConfig {

		/** The conditions that are used to evaluate the failure of a rollout step. If not specified, no rollout steps will fail. E.g. "containment_rate < 10% OR average_turn_count < 3". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		failureCondition?: string | null;

		/** The conditions that are used to evaluate the success of a rollout step. If not specified, all rollout steps will proceed to the next one unless failure conditions are met. E.g. "containment_rate > 60% AND callback_rate < 20%". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		rolloutCondition?: string | null;

		/** Steps to roll out a flow version. Steps should be sorted by percentage in ascending order. */
		rolloutSteps?: Array<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep>;
	}

	/** The configuration for auto rollout. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutConfigFormProperties {

		/** The conditions that are used to evaluate the failure of a rollout step. If not specified, no rollout steps will fail. E.g. "containment_rate < 10% OR average_turn_count < 3". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		failureCondition: FormControl<string | null | undefined>,

		/** The conditions that are used to evaluate the success of a rollout step. If not specified, all rollout steps will proceed to the next one unless failure conditions are met. E.g. "containment_rate > 60% AND callback_rate < 20%". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). */
		rolloutCondition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RolloutConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RolloutConfigFormProperties>({
			failureCondition: new FormControl<string | null | undefined>(undefined),
			rolloutCondition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single rollout step with specified traffic allocation. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep {

		/** The name of the rollout step; */
		displayName?: string | null;

		/** The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour. */
		minDuration?: string | null;

		/**
		 * The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trafficPercent?: number | null;
	}

	/** A single rollout step with specified traffic allocation. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStepFormProperties {

		/** The name of the rollout step; */
		displayName: FormControl<string | null | undefined>,

		/** The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour. */
		minDuration: FormControl<string | null | undefined>,

		/**
		 * The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trafficPercent: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStepFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStepFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			minDuration: new FormControl<string | null | undefined>(undefined),
			trafficPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** State of the auto-rollout process. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutState {

		/** Start time of the current step. */
		startTime?: string | null;

		/** Display name of the current auto rollout step. */
		step?: string | null;

		/**
		 * Index of the current step in the auto rollout steps list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepIndex?: number | null;
	}

	/** State of the auto-rollout process. */
	export interface GoogleCloudDialogflowCxV3beta1RolloutStateFormProperties {

		/** Start time of the current step. */
		startTime: FormControl<string | null | undefined>,

		/** Display name of the current auto rollout step. */
		step: FormControl<string | null | undefined>,

		/**
		 * Index of the current step in the auto rollout steps list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepIndex: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RolloutStateFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RolloutStateFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
			stepIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ExperimentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DRAFT = 'DRAFT', RUNNING = 'RUNNING', DONE = 'DONE', ROLLOUT_FAILED = 'ROLLOUT_FAILED' }


	/** The history of variants update. */
	export interface GoogleCloudDialogflowCxV3beta1VariantsHistory {

		/** Update time of the variants. */
		updateTime?: string | null;

		/** A list of flow version variants. */
		versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
	}

	/** The history of variants update. */
	export interface GoogleCloudDialogflowCxV3beta1VariantsHistoryFormProperties {

		/** Update time of the variants. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1VariantsHistoryFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1VariantsHistoryFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequest {

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		agentUri?: string | null;

		/** Optional. The data format of the exported agent. If not specified, `BLOB` is assumed. */
		dataFormat?: GoogleCloudDialogflowCxV3beta1ExportAgentRequestDataFormat | null;

		/** Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment?: string | null;

		/** Settings for exporting to a git branch. */
		gitDestination?: GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination;

		/** Optional. Whether to include BigQuery Export setting. */
		includeBigqueryExportSettings?: boolean | null;
	}

	/** The request message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequestFormProperties {

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		agentUri: FormControl<string | null | undefined>,

		/** Optional. The data format of the exported agent. If not specified, `BLOB` is assumed. */
		dataFormat: FormControl<GoogleCloudDialogflowCxV3beta1ExportAgentRequestDataFormat | null | undefined>,

		/** Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment: FormControl<string | null | undefined>,

		/** Optional. Whether to include BigQuery Export setting. */
		includeBigqueryExportSettings: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportAgentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportAgentRequestFormProperties>({
			agentUri: new FormControl<string | null | undefined>(undefined),
			dataFormat: new FormControl<GoogleCloudDialogflowCxV3beta1ExportAgentRequestDataFormat | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			includeBigqueryExportSettings: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ExportAgentRequestDataFormat { DATA_FORMAT_UNSPECIFIED = 'DATA_FORMAT_UNSPECIFIED', BLOB = 'BLOB', JSON_PACKAGE = 'JSON_PACKAGE' }


	/** Settings for exporting to a git branch. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestination {

		/** Commit message for the git push. */
		commitMessage?: string | null;

		/** Tracking branch for the git push. */
		trackingBranch?: string | null;
	}

	/** Settings for exporting to a git branch. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestinationFormProperties {

		/** Commit message for the git push. */
		commitMessage: FormControl<string | null | undefined>,

		/** Tracking branch for the git push. */
		trackingBranch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportAgentRequestGitDestinationFormProperties>({
			commitMessage: new FormControl<string | null | undefined>(undefined),
			trackingBranch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponse {

		/** Uncompressed raw byte content for agent. This field is populated if none of `agent_uri` and `git_destination` are specified in ExportAgentRequest. */
		agentContent?: string | null;

		/** The URI to a file containing the exported agent. This field is populated if `agent_uri` is specified in ExportAgentRequest. */
		agentUri?: string | null;

		/** Commit SHA of the git push. This field is populated if `git_destination` is specified in ExportAgentRequest. */
		commitSha?: string | null;
	}

	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ExportAgentResponseFormProperties {

		/** Uncompressed raw byte content for agent. This field is populated if none of `agent_uri` and `git_destination` are specified in ExportAgentRequest. */
		agentContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported agent. This field is populated if `agent_uri` is specified in ExportAgentRequest. */
		agentUri: FormControl<string | null | undefined>,

		/** Commit SHA of the git push. This field is populated if `git_destination` is specified in ExportAgentRequest. */
		commitSha: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportAgentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportAgentResponseFormProperties>({
			agentContent: new FormControl<string | null | undefined>(undefined),
			agentUri: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ExportFlowRequest {

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the flow to. The format of this URI must be `gs:///`. If left unspecified, the serialized flow is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		flowUri?: string | null;

		/** Optional. Whether to export flows referenced by the specified flow. */
		includeReferencedFlows?: boolean | null;
	}

	/** The request message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ExportFlowRequestFormProperties {

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the flow to. The format of this URI must be `gs:///`. If left unspecified, the serialized flow is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		flowUri: FormControl<string | null | undefined>,

		/** Optional. Whether to export flows referenced by the specified flow. */
		includeReferencedFlows: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportFlowRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportFlowRequestFormProperties>({
			flowUri: new FormControl<string | null | undefined>(undefined),
			includeReferencedFlows: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ExportFlowResponse {

		/** Uncompressed raw byte content for flow. */
		flowContent?: string | null;

		/** The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest. */
		flowUri?: string | null;
	}

	/** The response message for Flows.ExportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ExportFlowResponseFormProperties {

		/** Uncompressed raw byte content for flow. */
		flowContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest. */
		flowUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportFlowResponseFormProperties>({
			flowContent: new FormControl<string | null | undefined>(undefined),
			flowUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the Intents.ExportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadata {
	}

	/** Metadata returned for the Intents.ExportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportIntentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportIntentsMetadataFormProperties>({
		});

	}


	/** The request message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsRequest {

		/** Optional. The data format of the exported intents. If not specified, `BLOB` is assumed. */
		dataFormat?: GoogleCloudDialogflowCxV3beta1ExportIntentsRequestDataFormat | null;

		/** Required. The name of the intents to export. Format: `projects//locations//agents//intents/`. */
		intents?: Array<string>;

		/** Optional. The option to return the serialized intents inline. */
		intentsContentInline?: boolean | null;

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the intents to. The format of this URI must be `gs:///`. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		intentsUri?: string | null;
	}

	/** The request message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsRequestFormProperties {

		/** Optional. The data format of the exported intents. If not specified, `BLOB` is assumed. */
		dataFormat: FormControl<GoogleCloudDialogflowCxV3beta1ExportIntentsRequestDataFormat | null | undefined>,

		/** Optional. The option to return the serialized intents inline. */
		intentsContentInline: FormControl<boolean | null | undefined>,

		/** Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the intents to. The format of this URI must be `gs:///`. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		intentsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportIntentsRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportIntentsRequestFormProperties>({
			dataFormat: new FormControl<GoogleCloudDialogflowCxV3beta1ExportIntentsRequestDataFormat | null | undefined>(undefined),
			intentsContentInline: new FormControl<boolean | null | undefined>(undefined),
			intentsUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ExportIntentsRequestDataFormat { DATA_FORMAT_UNSPECIFIED = 'DATA_FORMAT_UNSPECIFIED', BLOB = 'BLOB', JSON = 'JSON', CSV = 'CSV' }


	/** The response message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponse {

		/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
		intentsContent?: GoogleCloudDialogflowCxV3beta1InlineDestination;

		/** The URI to a file containing the exported intents. This field is populated only if `intents_uri` is specified in ExportIntentsRequest. */
		intentsUri?: string | null;
	}

	/** The response message for Intents.ExportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ExportIntentsResponseFormProperties {

		/** The URI to a file containing the exported intents. This field is populated only if `intents_uri` is specified in ExportIntentsRequest. */
		intentsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportIntentsResponseFormProperties>({
			intentsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1InlineDestination {

		/** Output only. The uncompressed byte content for the objects. Only populated in responses. */
		content?: string | null;
	}

	/** Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1InlineDestinationFormProperties {

		/** Output only. The uncompressed byte content for the objects. Only populated in responses. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1InlineDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1InlineDestinationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {
	}

	/** Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadataFormProperties>({
		});

	}


	/** The request message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest {

		/** The data format of the exported test cases. If not specified, `BLOB` is assumed. */
		dataFormat?: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormat | null;

		/** The filter expression used to filter exported test cases, see [API Filtering](https://aip.dev/160). The expression is case insensitive and supports the following syntax: name = [OR name = ] ... For example: * "name = t1 OR name = t2" matches the test case with the exact resource name "t1" or "t2". */
		filter?: string | null;

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the test cases to. The format of this URI must be `gs:///`. If unspecified, the serialized test cases is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		gcsUri?: string | null;
	}

	/** The request message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestFormProperties {

		/** The data format of the exported test cases. If not specified, `BLOB` is assumed. */
		dataFormat: FormControl<GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormat | null | undefined>,

		/** The filter expression used to filter exported test cases, see [API Filtering](https://aip.dev/160). The expression is case insensitive and supports the following syntax: name = [OR name = ] ... For example: * "name = t1 OR name = t2" matches the test case with the exact resource name "t1" or "t2". */
		filter: FormControl<string | null | undefined>,

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the test cases to. The format of this URI must be `gs:///`. If unspecified, the serialized test cases is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller's behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportTestCasesRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestFormProperties>({
			dataFormat: new FormControl<GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormat | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormat { DATA_FORMAT_UNSPECIFIED = 'DATA_FORMAT_UNSPECIFIED', BLOB = 'BLOB', JSON = 'JSON' }


	/** The response message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {

		/** Uncompressed raw byte content for test cases. */
		content?: string | null;

		/** The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest. */
		gcsUri?: string | null;
	}

	/** The response message for TestCases.ExportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ExportTestCasesResponseFormProperties {

		/** Uncompressed raw byte content for test cases. */
		content: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ExportTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ExportTestCasesResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The flow import strategy used for resource conflict resolution associated with an ImportFlowRequest. */
	export interface GoogleCloudDialogflowCxV3beta1FlowImportStrategy {

		/** Optional. Global flow import strategy for resource conflict resolution. The import Import strategy for resource conflict resolution, applied globally throughout the flow. It will be applied for all display name conflicts in the imported content. If not specified, 'CREATE_NEW' is assumed. */
		globalImportStrategy?: GoogleCloudDialogflowCxV3beta1FlowImportStrategyGlobalImportStrategy | null;
	}

	/** The flow import strategy used for resource conflict resolution associated with an ImportFlowRequest. */
	export interface GoogleCloudDialogflowCxV3beta1FlowImportStrategyFormProperties {

		/** Optional. Global flow import strategy for resource conflict resolution. The import Import strategy for resource conflict resolution, applied globally throughout the flow. It will be applied for all display name conflicts in the imported content. If not specified, 'CREATE_NEW' is assumed. */
		globalImportStrategy: FormControl<GoogleCloudDialogflowCxV3beta1FlowImportStrategyGlobalImportStrategy | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FlowImportStrategyFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FlowImportStrategyFormProperties>({
			globalImportStrategy: new FormControl<GoogleCloudDialogflowCxV3beta1FlowImportStrategyGlobalImportStrategy | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1FlowImportStrategyGlobalImportStrategy { IMPORT_STRATEGY_UNSPECIFIED = 'IMPORT_STRATEGY_UNSPECIFIED', IMPORT_STRATEGY_CREATE_NEW = 'IMPORT_STRATEGY_CREATE_NEW', IMPORT_STRATEGY_REPLACE = 'IMPORT_STRATEGY_REPLACE', IMPORT_STRATEGY_KEEP = 'IMPORT_STRATEGY_KEEP', IMPORT_STRATEGY_MERGE = 'IMPORT_STRATEGY_MERGE', IMPORT_STRATEGY_THROW_ERROR = 'IMPORT_STRATEGY_THROW_ERROR' }


	/** Request of FulfillIntent */
	export interface GoogleCloudDialogflowCxV3beta1FulfillIntentRequest {

		/** Represents one match result of MatchIntent. */
		match?: GoogleCloudDialogflowCxV3beta1Match;

		/** Request of MatchIntent. */
		matchIntentRequest?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;

		/** Instructs the speech synthesizer how to generate the output audio content. */
		outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
	}

	/** Request of FulfillIntent */
	export interface GoogleCloudDialogflowCxV3beta1FulfillIntentRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillIntentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillIntentRequestFormProperties>({
		});

	}


	/** Request of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1MatchIntentRequest {

		/** Persist session parameter changes from `query_params`. */
		persistParameterChanges?: boolean | null;

		/** Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 5. DTMF digits to invoke an intent and fill in parameter value. 6. The results of a tool executed by the client. */
		queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

		/** Represents the parameters of a conversational query. */
		queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
	}

	/** Request of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1MatchIntentRequestFormProperties {

		/** Persist session parameter changes from `query_params`. */
		persistParameterChanges: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1MatchIntentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1MatchIntentRequestFormProperties>({
			persistParameterChanges: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response of FulfillIntent */
	export interface GoogleCloudDialogflowCxV3beta1FulfillIntentResponse {

		/** The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. */
		outputAudio?: string | null;

		/** Instructs the speech synthesizer how to generate the output audio content. */
		outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

		/** Represents the result of a conversational query. */
		queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult;

		/** Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. */
		responseId?: string | null;
	}

	/** Response of FulfillIntent */
	export interface GoogleCloudDialogflowCxV3beta1FulfillIntentResponseFormProperties {

		/** The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. */
		outputAudio: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. */
		responseId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1FulfillIntentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1FulfillIntentResponseFormProperties>({
			outputAudio: new FormControl<string | null | undefined>(undefined),
			responseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for Generative AI. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettings {

		/** Settings for Generative Fallback. */
		fallbackSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings;

		/** Settings for Generative Safety. */
		generativeSafetySettings?: GoogleCloudDialogflowCxV3beta1SafetySettings;

		/** Settings for knowledge connector. These parameters are used for LLM prompt like "You are . You are a helpful and verbose at , . Your task is to help humans on ". */
		knowledgeConnectorSettings?: GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings;

		/** Language for this settings. */
		languageCode?: string | null;

		/** Format: `projects//locations//agents//generativeSettings`. */
		name?: string | null;
	}

	/** Settings for Generative AI. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFormProperties {

		/** Language for this settings. */
		languageCode: FormControl<string | null | undefined>,

		/** Format: `projects//locations//agents//generativeSettings`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GenerativeSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for Generative Fallback. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettings {

		/** Stored prompts that can be selected, for example default templates like "conservative" or "chatty", or user defined ones. */
		promptTemplates?: Array<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate>;

		/** Display name of the selected prompt. */
		selectedPrompt?: string | null;
	}

	/** Settings for Generative Fallback. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsFormProperties {

		/** Display name of the selected prompt. */
		selectedPrompt: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsFormProperties>({
			selectedPrompt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Prompt template. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplate {

		/** Prompt name. */
		displayName?: string | null;

		/** If the flag is true, the prompt is frozen and cannot be modified by users. */
		frozen?: boolean | null;

		/** Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. For example: "Here is a conversation $conversation, a response is: " */
		promptText?: string | null;
	}

	/** Prompt template. */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplateFormProperties {

		/** Prompt name. */
		displayName: FormControl<string | null | undefined>,

		/** If the flag is true, the prompt is frozen and cannot be modified by users. */
		frozen: FormControl<boolean | null | undefined>,

		/** Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. For example: "Here is a conversation $conversation, a response is: " */
		promptText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplateFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GenerativeSettingsFallbackSettingsPromptTemplateFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			frozen: new FormControl<boolean | null | undefined>(undefined),
			promptText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for Generative Safety. */
	export interface GoogleCloudDialogflowCxV3beta1SafetySettings {

		/** Banned phrases for generated text. */
		bannedPhrases?: Array<GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase>;
	}

	/** Settings for Generative Safety. */
	export interface GoogleCloudDialogflowCxV3beta1SafetySettingsFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SafetySettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SafetySettingsFormProperties>({
		});

	}


	/** Text input which can be used for prompt or banned phrases. */
	export interface GoogleCloudDialogflowCxV3beta1SafetySettingsPhrase {

		/** Required. Language code of the phrase. */
		languageCode?: string | null;

		/** Required. Text input which can be used for prompt or banned phrases. */
		text?: string | null;
	}

	/** Text input which can be used for prompt or banned phrases. */
	export interface GoogleCloudDialogflowCxV3beta1SafetySettingsPhraseFormProperties {

		/** Required. Language code of the phrase. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. Text input which can be used for prompt or banned phrases. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SafetySettingsPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SafetySettingsPhraseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for knowledge connector. These parameters are used for LLM prompt like "You are . You are a helpful and verbose at , . Your task is to help humans on ". */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings {

		/** Name of the virtual agent. Used for LLM prompt. Can be left empty. */
		agent?: string | null;

		/** Identity of the agent, e.g. "virtual agent", "AI assistant". */
		agentIdentity?: string | null;

		/** Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". */
		agentScope?: string | null;

		/** Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. */
		business?: string | null;

		/** Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans". */
		businessDescription?: string | null;

		/** Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). Per default the feature is enabled. */
		disableDataStoreFallback?: boolean | null;
	}

	/** Settings for knowledge connector. These parameters are used for LLM prompt like "You are . You are a helpful and verbose at , . Your task is to help humans on ". */
	export interface GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettingsFormProperties {

		/** Name of the virtual agent. Used for LLM prompt. Can be left empty. */
		agent: FormControl<string | null | undefined>,

		/** Identity of the agent, e.g. "virtual agent", "AI assistant". */
		agentIdentity: FormControl<string | null | undefined>,

		/** Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". */
		agentScope: FormControl<string | null | undefined>,

		/** Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. */
		business: FormControl<string | null | undefined>,

		/** Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans". */
		businessDescription: FormControl<string | null | undefined>,

		/** Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). Per default the feature is enabled. */
		disableDataStoreFallback: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettingsFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
			agentIdentity: new FormControl<string | null | undefined>(undefined),
			agentScope: new FormControl<string | null | undefined>(undefined),
			business: new FormControl<string | null | undefined>(undefined),
			businessDescription: new FormControl<string | null | undefined>(undefined),
			disableDataStoreFallback: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Generators contain prompt to be sent to the LLM model to generate text. The prompt can contain parameters which will be resolved before calling the model. It can optionally contain banned phrases to ensure the model responses are safe. */
	export interface GoogleCloudDialogflowCxV3beta1Generator {

		/** Required. The human-readable name of the generator, unique within the agent. The prompt contains pre-defined parameters such as $conversation, $last-user-utterance, etc. populated by Dialogflow. It can also contain custom placeholders which will be resolved during fulfillment. */
		displayName?: string | null;

		/** The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: `projects//locations//agents//generators/`. */
		name?: string | null;

		/** Optional. List of custom placeholders in the prompt text. */
		placeholders?: Array<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder>;

		/** Text input which can be used for prompt or banned phrases. */
		promptText?: GoogleCloudDialogflowCxV3beta1Phrase;
	}

	/** Generators contain prompt to be sent to the LLM model to generate text. The prompt can contain parameters which will be resolved before calling the model. It can optionally contain banned phrases to ensure the model responses are safe. */
	export interface GoogleCloudDialogflowCxV3beta1GeneratorFormProperties {

		/** Required. The human-readable name of the generator, unique within the agent. The prompt contains pre-defined parameters such as $conversation, $last-user-utterance, etc. populated by Dialogflow. It can also contain custom placeholders which will be resolved during fulfillment. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: `projects//locations//agents//generators/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GeneratorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GeneratorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a custom placeholder in the prompt text. */
	export interface GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder {

		/** Unique ID used to map custom placeholder to parameters in fulfillment. */
		id?: string | null;

		/** Custom placeholder value in the prompt text. */
		name?: string | null;
	}

	/** Represents a custom placeholder in the prompt text. */
	export interface GoogleCloudDialogflowCxV3beta1GeneratorPlaceholderFormProperties {

		/** Unique ID used to map custom placeholder to parameters in fulfillment. */
		id: FormControl<string | null | undefined>,

		/** Custom placeholder value in the prompt text. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1GeneratorPlaceholderFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1GeneratorPlaceholderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Text input which can be used for prompt or banned phrases. */
	export interface GoogleCloudDialogflowCxV3beta1Phrase {

		/** Required. Text input which can be used for prompt or banned phrases. */
		text?: string | null;
	}

	/** Text input which can be used for prompt or banned phrases. */
	export interface GoogleCloudDialogflowCxV3beta1PhraseFormProperties {

		/** Required. Text input which can be used for prompt or banned phrases. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1PhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1PhraseFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportDocumentsOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportDocumentsOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportDocumentsOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportDocumentsOperationMetadataFormProperties>({
		});

	}


	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse {

		/** Includes details about skipped documents or any other warnings. */
		warnings?: Array<GoogleRpcStatus>;
	}

	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowCxV3beta1ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportDocumentsResponseFormProperties>({
		});

	}


	/** The request message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ImportFlowRequest {

		/** Uncompressed raw byte content for flow. */
		flowContent?: string | null;

		/** The flow import strategy used for resource conflict resolution associated with an ImportFlowRequest. */
		flowImportStrategy?: GoogleCloudDialogflowCxV3beta1FlowImportStrategy;

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import flow from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		flowUri?: string | null;

		/** Flow import mode. If not specified, `KEEP` is assumed. */
		importOption?: GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOption | null;
	}

	/** The request message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ImportFlowRequestFormProperties {

		/** Uncompressed raw byte content for flow. */
		flowContent: FormControl<string | null | undefined>,

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import flow from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		flowUri: FormControl<string | null | undefined>,

		/** Flow import mode. If not specified, `KEEP` is assumed. */
		importOption: FormControl<GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOption | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportFlowRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportFlowRequestFormProperties>({
			flowContent: new FormControl<string | null | undefined>(undefined),
			flowUri: new FormControl<string | null | undefined>(undefined),
			importOption: new FormControl<GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOption | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOption { IMPORT_OPTION_UNSPECIFIED = 'IMPORT_OPTION_UNSPECIFIED', KEEP = 'KEEP', FALLBACK = 'FALLBACK' }


	/** The response message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponse {

		/** The unique identifier of the new flow. Format: `projects//locations//agents//flows/`. */
		flow?: string | null;
	}

	/** The response message for Flows.ImportFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ImportFlowResponseFormProperties {

		/** The unique identifier of the new flow. Format: `projects//locations//agents//flows/`. */
		flow: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportFlowResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportFlowResponseFormProperties>({
			flow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for the Intents.ImportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadata {
	}

	/** Metadata returned for the Intents.ImportIntents long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportIntentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportIntentsMetadataFormProperties>({
		});

	}


	/** The request message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsRequest {

		/** Inline source for a Dialogflow operation that reads or imports objects (e.g. intents) into Dialogflow. */
		intentsContent?: GoogleCloudDialogflowCxV3beta1InlineSource;

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import intents from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		intentsUri?: string | null;

		/** Merge option for importing intents. If not specified, `REJECT` is assumed. */
		mergeOption?: GoogleCloudDialogflowCxV3beta1ImportIntentsRequestMergeOption | null;
	}

	/** The request message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsRequestFormProperties {

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import intents from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		intentsUri: FormControl<string | null | undefined>,

		/** Merge option for importing intents. If not specified, `REJECT` is assumed. */
		mergeOption: FormControl<GoogleCloudDialogflowCxV3beta1ImportIntentsRequestMergeOption | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportIntentsRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportIntentsRequestFormProperties>({
			intentsUri: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<GoogleCloudDialogflowCxV3beta1ImportIntentsRequestMergeOption | null | undefined>(undefined),
		});

	}


	/** Inline source for a Dialogflow operation that reads or imports objects (e.g. intents) into Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1InlineSource {

		/** The uncompressed byte content for the objects. */
		content?: string | null;
	}

	/** Inline source for a Dialogflow operation that reads or imports objects (e.g. intents) into Dialogflow. */
	export interface GoogleCloudDialogflowCxV3beta1InlineSourceFormProperties {

		/** The uncompressed byte content for the objects. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1InlineSourceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1InlineSourceFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1ImportIntentsRequestMergeOption { MERGE_OPTION_UNSPECIFIED = 'MERGE_OPTION_UNSPECIFIED', REJECT = 'REJECT', REPLACE = 'REPLACE', MERGE = 'MERGE', RENAME = 'RENAME', REPORT_CONFLICT = 'REPORT_CONFLICT', KEEP = 'KEEP' }


	/** The response message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponse {

		/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
		conflictingResources?: GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources;

		/** The unique identifier of the imported intents. Format: `projects//locations//agents//intents/`. */
		intents?: Array<string>;
	}

	/** The response message for Intents.ImportIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportIntentsResponseFormProperties>({
		});

	}


	/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResources {

		/** Display names of conflicting entities. */
		entityDisplayNames?: Array<string>;

		/** Display names of conflicting intents. */
		intentDisplayNames?: Array<string>;
	}

	/** Conflicting resources detected during the import process. Only filled when REPORT_CONFLICT is set in the request and there are conflicts in the display names. */
	export interface GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResourcesFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResourcesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportIntentsResponseConflictingResourcesFormProperties>({
		});

	}


	/** Metadata returned for the TestCases.ImportTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata {

		/** Errors for failed test cases. */
		errors?: Array<GoogleCloudDialogflowCxV3beta1TestCaseError>;
	}

	/** Metadata returned for the TestCases.ImportTestCases long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportTestCasesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadataFormProperties>({
		});

	}


	/** Error info for importing a test. */
	export interface GoogleCloudDialogflowCxV3beta1TestCaseError {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;

		/** Represents a test case. */
		testCase?: GoogleCloudDialogflowCxV3beta1TestCase;
	}

	/** Error info for importing a test. */
	export interface GoogleCloudDialogflowCxV3beta1TestCaseErrorFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestCaseErrorFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestCaseErrorFormProperties>({
		});

	}


	/** Represents a test case. */
	export interface GoogleCloudDialogflowCxV3beta1TestCase {

		/** Output only. When the test was created. */
		creationTime?: string | null;

		/** Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters. */
		displayName?: string | null;

		/** Represents a result from running a test case in an agent environment. */
		lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;

		/** The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`. */
		name?: string | null;

		/** Additional freeform notes about the test case. Limit of 400 characters. */
		notes?: string | null;

		/** Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters. */
		tags?: Array<string>;

		/** The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly. */
		testCaseConversationTurns?: Array<GoogleCloudDialogflowCxV3beta1ConversationTurn>;

		/** Represents configurations for a test case. */
		testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
	}

	/** Represents a test case. */
	export interface GoogleCloudDialogflowCxV3beta1TestCaseFormProperties {

		/** Output only. When the test was created. */
		creationTime: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`. */
		name: FormControl<string | null | undefined>,

		/** Additional freeform notes about the test case. Limit of 400 characters. */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestCaseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestCaseFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents configurations for a test case. */
	export interface GoogleCloudDialogflowCxV3beta1TestConfig {

		/** Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		flow?: string | null;

		/** The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		page?: string | null;

		/** Session parameters to be compared when calculating differences. */
		trackingParameters?: Array<string>;
	}

	/** Represents configurations for a test case. */
	export interface GoogleCloudDialogflowCxV3beta1TestConfigFormProperties {

		/** Flow name to start the test case with. Format: `projects//locations//agents//flows/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		flow: FormControl<string | null | undefined>,

		/** The page to start the test case with. Format: `projects//locations//agents//flows//pages/`. Only one of `flow` and `page` should be set to indicate the starting point of the test case. If both are set, `page` takes precedence over `flow`. If neither is set, the test case will start with start page on the default start flow. */
		page: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TestConfigFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TestConfigFormProperties>({
			flow: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest {

		/** Uncompressed raw byte content for test cases. */
		content?: string | null;

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import test cases from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		gcsUri?: string | null;
	}

	/** The request message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesRequestFormProperties {

		/** Uncompressed raw byte content for test cases. */
		content: FormControl<string | null | undefined>,

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import test cases from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportTestCasesRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportTestCasesRequestFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {

		/** The unique identifiers of the new test cases. Format: `projects//locations//agents//testCases/`. */
		names?: Array<string>;
	}

	/** The response message for TestCases.ImportTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ImportTestCasesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ImportTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ImportTestCasesResponseFormProperties>({
		});

	}


	/** The response message for Agents.ListAgents. */
	export interface GoogleCloudDialogflowCxV3beta1ListAgentsResponse {

		/** The list of agents. There will be a maximum number of items returned based on the page_size field in the request. */
		agents?: Array<GoogleCloudDialogflowCxV3beta1Agent>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Agents.ListAgents. */
	export interface GoogleCloudDialogflowCxV3beta1ListAgentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListAgentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListAgentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Changelogs.ListChangelogs. */
	export interface GoogleCloudDialogflowCxV3beta1ListChangelogsResponse {

		/** The list of changelogs. There will be a maximum number of items returned based on the page_size field in the request. The changelogs will be ordered by timestamp. */
		changelogs?: Array<GoogleCloudDialogflowCxV3beta1Changelog>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Changelogs.ListChangelogs. */
	export interface GoogleCloudDialogflowCxV3beta1ListChangelogsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListChangelogsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListChangelogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Environments.ListTestCaseResults. */
	export interface GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse {

		/** The list of continuous test results. */
		continuousTestResults?: Array<GoogleCloudDialogflowCxV3beta1ContinuousTestResult>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Environments.ListTestCaseResults. */
	export interface GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Deployments.ListDeployments. */
	export interface GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse {

		/** The list of deployments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page. */
		deployments?: Array<GoogleCloudDialogflowCxV3beta1Deployment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Deployments.ListDeployments. */
	export interface GoogleCloudDialogflowCxV3beta1ListDeploymentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListDeploymentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListDeploymentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for EntityTypes.ListEntityTypes. */
	export interface GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse {

		/** The list of entity types. There will be a maximum number of items returned based on the page_size field in the request. */
		entityTypes?: Array<GoogleCloudDialogflowCxV3beta1EntityType>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for EntityTypes.ListEntityTypes. */
	export interface GoogleCloudDialogflowCxV3beta1ListEntityTypesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListEntityTypesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListEntityTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Environments.ListEnvironments. */
	export interface GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse {

		/** The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page. */
		environments?: Array<GoogleCloudDialogflowCxV3beta1Environment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Environments.ListEnvironments. */
	export interface GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListEnvironmentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Experiments.ListExperiments. */
	export interface GoogleCloudDialogflowCxV3beta1ListExperimentsResponse {

		/** The list of experiments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page. */
		experiments?: Array<GoogleCloudDialogflowCxV3beta1Experiment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Experiments.ListExperiments. */
	export interface GoogleCloudDialogflowCxV3beta1ListExperimentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListExperimentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListExperimentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Flows.ListFlows. */
	export interface GoogleCloudDialogflowCxV3beta1ListFlowsResponse {

		/** The list of flows. There will be a maximum number of items returned based on the page_size field in the request. */
		flows?: Array<GoogleCloudDialogflowCxV3beta1Flow>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Flows.ListFlows. */
	export interface GoogleCloudDialogflowCxV3beta1ListFlowsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListFlowsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListFlowsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Generators.ListGenerators. */
	export interface GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse {

		/** The list of generators. There will be a maximum number of items returned based on the page_size field in the request. */
		generators?: Array<GoogleCloudDialogflowCxV3beta1Generator>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Generators.ListGenerators. */
	export interface GoogleCloudDialogflowCxV3beta1ListGeneratorsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListGeneratorsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListGeneratorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Intents.ListIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ListIntentsResponse {

		/** The list of intents. There will be a maximum number of items returned based on the page_size field in the request. */
		intents?: Array<GoogleCloudDialogflowCxV3beta1Intent>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Intents.ListIntents. */
	export interface GoogleCloudDialogflowCxV3beta1ListIntentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListIntentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Pages.ListPages. */
	export interface GoogleCloudDialogflowCxV3beta1ListPagesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of pages. There will be a maximum number of items returned based on the page_size field in the request. */
		pages?: Array<GoogleCloudDialogflowCxV3beta1Page>;
	}

	/** The response message for Pages.ListPages. */
	export interface GoogleCloudDialogflowCxV3beta1ListPagesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListPagesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListPagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for SecuritySettings.ListSecuritySettings. */
	export interface GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of security settings. */
		securitySettings?: Array<GoogleCloudDialogflowCxV3beta1SecuritySettings>;
	}

	/** The response message for SecuritySettings.ListSecuritySettings. */
	export interface GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect. */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettings {

		/** Settings for exporting audio. */
		audioExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;

		/** [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`. */
		deidentifyTemplate?: string | null;

		/** Required. The human-readable name of the security settings, unique within the location. */
		displayName?: string | null;

		/** Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs). */
		insightsExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;

		/** [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`. */
		inspectTemplate?: string | null;

		/** Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`. */
		name?: string | null;

		/** List of types of data to remove when retention settings triggers purge. */
		purgeDataTypes?: Array<string>;

		/** Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging. */
		redactionScope?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScope | null;

		/** Strategy that defines how we do redaction. */
		redactionStrategy?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategy | null;

		/** Specifies the retention behavior defined by SecuritySettings.RetentionStrategy. */
		retentionStrategy?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRetentionStrategy | null;

		/**
		 * Retains data in interaction logging for the specified number of days. This does not apply to Cloud logging, which is owned by the user - not Dialogflow. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionWindowDays?: number | null;
	}

	/** Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect. */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsFormProperties {

		/** [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`. */
		deidentifyTemplate: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the security settings, unique within the location. */
		displayName: FormControl<string | null | undefined>,

		/** [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`. */
		inspectTemplate: FormControl<string | null | undefined>,

		/** Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`. */
		name: FormControl<string | null | undefined>,

		/** Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging. */
		redactionScope: FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScope | null | undefined>,

		/** Strategy that defines how we do redaction. */
		redactionStrategy: FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategy | null | undefined>,

		/** Specifies the retention behavior defined by SecuritySettings.RetentionStrategy. */
		retentionStrategy: FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRetentionStrategy | null | undefined>,

		/**
		 * Retains data in interaction logging for the specified number of days. This does not apply to Cloud logging, which is owned by the user - not Dialogflow. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionWindowDays: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SecuritySettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SecuritySettingsFormProperties>({
			deidentifyTemplate: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			inspectTemplate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redactionScope: new FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScope | null | undefined>(undefined),
			redactionStrategy: new FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategy | null | undefined>(undefined),
			retentionStrategy: new FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsRetentionStrategy | null | undefined>(undefined),
			retentionWindowDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings for exporting audio. */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings {

		/** Filename pattern for exported audio. */
		audioExportPattern?: string | null;

		/** File format for exported audio file. Currently only in telephony recordings. */
		audioFormat?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormat | null;

		/** Enable audio redaction if it is true. */
		enableAudioRedaction?: boolean | null;

		/** Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy. */
		gcsBucket?: string | null;
	}

	/** Settings for exporting audio. */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsFormProperties {

		/** Filename pattern for exported audio. */
		audioExportPattern: FormControl<string | null | undefined>,

		/** File format for exported audio file. Currently only in telephony recordings. */
		audioFormat: FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormat | null | undefined>,

		/** Enable audio redaction if it is true. */
		enableAudioRedaction: FormControl<boolean | null | undefined>,

		/** Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy. */
		gcsBucket: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsFormProperties>({
			audioExportPattern: new FormControl<string | null | undefined>(undefined),
			audioFormat: new FormControl<GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormat | null | undefined>(undefined),
			enableAudioRedaction: new FormControl<boolean | null | undefined>(undefined),
			gcsBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormat { AUDIO_FORMAT_UNSPECIFIED = 'AUDIO_FORMAT_UNSPECIFIED', MULAW = 'MULAW', MP3 = 'MP3', OGG = 'OGG' }


	/** Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs). */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings {

		/** If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. */
		enableInsightsExport?: boolean | null;
	}

	/** Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs). */
	export interface GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettingsFormProperties {

		/** If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. */
		enableInsightsExport: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettingsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettingsFormProperties>({
			enableInsightsExport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScope { REDACTION_SCOPE_UNSPECIFIED = 'REDACTION_SCOPE_UNSPECIFIED', REDACT_DISK_STORAGE = 'REDACT_DISK_STORAGE' }

	export enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategy { REDACTION_STRATEGY_UNSPECIFIED = 'REDACTION_STRATEGY_UNSPECIFIED', REDACT_WITH_SERVICE = 'REDACT_WITH_SERVICE' }

	export enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRetentionStrategy { RETENTION_STRATEGY_UNSPECIFIED = 'RETENTION_STRATEGY_UNSPECIFIED', REMOVE_AFTER_CONVERSATION = 'REMOVE_AFTER_CONVERSATION' }


	/** The response message for SessionEntityTypes.ListSessionEntityTypes. */
	export interface GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request. */
		sessionEntityTypes?: Array<GoogleCloudDialogflowCxV3beta1SessionEntityType>;
	}

	/** The response message for SessionEntityTypes.ListSessionEntityTypes. */
	export interface GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.ListTestCaseResults. */
	export interface GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of test case results. */
		testCaseResults?: Array<GoogleCloudDialogflowCxV3beta1TestCaseResult>;
	}

	/** The response message for TestCases.ListTestCaseResults. */
	export interface GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.ListTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ListTestCasesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of test cases. There will be a maximum number of items returned based on the page_size field in the request. */
		testCases?: Array<GoogleCloudDialogflowCxV3beta1TestCase>;
	}

	/** The response message for TestCases.ListTestCases. */
	export interface GoogleCloudDialogflowCxV3beta1ListTestCasesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListTestCasesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListTestCasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TransitionRouteGroups.ListTransitionRouteGroups. */
	export interface GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of transition route groups. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page. */
		transitionRouteGroups?: Array<GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>;
	}

	/** The response message for TransitionRouteGroups.ListTransitionRouteGroups. */
	export interface GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Versions.ListVersions. */
	export interface GoogleCloudDialogflowCxV3beta1ListVersionsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** A list of versions. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page. */
		versions?: Array<GoogleCloudDialogflowCxV3beta1Version>;
	}

	/** The response message for Versions.ListVersions. */
	export interface GoogleCloudDialogflowCxV3beta1ListVersionsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListVersionsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a version of a flow. */
	export interface GoogleCloudDialogflowCxV3beta1Version {

		/** Output only. Create time of the version. */
		createTime?: string | null;

		/** The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description?: string | null;

		/** Required. The human-readable name of the version. Limit of 64 characters. */
		displayName?: string | null;

		/** Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation. */
		name?: string | null;

		/** Settings related to NLU. */
		nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings;

		/** Output only. The state of this version. This field is read-only and cannot be set by create and update methods. */
		state?: GoogleCloudDialogflowCxV3beta1DeploymentState | null;
	}

	/** Represents a version of a flow. */
	export interface GoogleCloudDialogflowCxV3beta1VersionFormProperties {

		/** Output only. Create time of the version. */
		createTime: FormControl<string | null | undefined>,

		/** The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected. */
		description: FormControl<string | null | undefined>,

		/** Required. The human-readable name of the version. Limit of 64 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of this version. This field is read-only and cannot be set by create and update methods. */
		state: FormControl<GoogleCloudDialogflowCxV3beta1DeploymentState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1VersionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1VersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3beta1DeploymentState | null | undefined>(undefined),
		});

	}


	/** The response message for Webhooks.ListWebhooks. */
	export interface GoogleCloudDialogflowCxV3beta1ListWebhooksResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of webhooks. There will be a maximum number of items returned based on the page_size field in the request. */
		webhooks?: Array<GoogleCloudDialogflowCxV3beta1Webhook>;
	}

	/** The response message for Webhooks.ListWebhooks. */
	export interface GoogleCloudDialogflowCxV3beta1ListWebhooksResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ListWebhooksResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ListWebhooksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Versions.LoadVersion. */
	export interface GoogleCloudDialogflowCxV3beta1LoadVersionRequest {

		/** This field is used to prevent accidental overwrite of other agent resources, which can potentially impact other flow's behavior. If `allow_override_agent_resources` is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks). */
		allowOverrideAgentResources?: boolean | null;
	}

	/** The request message for Versions.LoadVersion. */
	export interface GoogleCloudDialogflowCxV3beta1LoadVersionRequestFormProperties {

		/** This field is used to prevent accidental overwrite of other agent resources, which can potentially impact other flow's behavior. If `allow_override_agent_resources` is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks). */
		allowOverrideAgentResources: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1LoadVersionRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1LoadVersionRequestFormProperties>({
			allowOverrideAgentResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response message for Environments.LookupEnvironmentHistory. */
	export interface GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse {

		/** Represents a list of snapshots for an environment. Time of the snapshots is stored in `update_time`. */
		environments?: Array<GoogleCloudDialogflowCxV3beta1Environment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Environments.LookupEnvironmentHistory. */
	export interface GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1MatchIntentResponse {

		/** A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page). */
		currentPage?: GoogleCloudDialogflowCxV3beta1Page;

		/** Match results, if more than one, ordered descendingly by the confidence we have that the particular intent matches the query. */
		matches?: Array<GoogleCloudDialogflowCxV3beta1Match>;

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text?: string | null;

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript?: string | null;

		/** If an event was provided as input, this field will contain a copy of the event name. */
		triggerEvent?: string | null;

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent?: string | null;
	}

	/** Response of MatchIntent. */
	export interface GoogleCloudDialogflowCxV3beta1MatchIntentResponseFormProperties {

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text: FormControl<string | null | undefined>,

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript: FormControl<string | null | undefined>,

		/** If an event was provided as input, this field will contain a copy of the event name. */
		triggerEvent: FormControl<string | null | undefined>,

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1MatchIntentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1MatchIntentResponseFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
			triggerEvent: new FormControl<string | null | undefined>(undefined),
			triggerIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents page information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfo {

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`. */
		currentPage?: string | null;

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The display name of the current page. */
		displayName?: string | null;

		/** Represents form information. */
		formInfo?: GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
	}

	/** Represents page information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfoFormProperties {

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`. */
		currentPage: FormControl<string | null | undefined>,

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The display name of the current page. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1PageInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1PageInfoFormProperties>({
			currentPage: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents form information. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {

		/** Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter. */
		parameterInfo?: Array<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo>;
	}

	/** Represents form information. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1PageInfoFormInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoFormProperties>({
		});

	}


	/** Represents parameter information. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {

		/** Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook. */
		displayName?: string | null;

		/** Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn. */
		justCollected?: boolean | null;

		/** Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required?: boolean | null;

		/** Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored. */
		state?: GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null;

		/** Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value. */
		value?: any;
	}

	/** Represents parameter information. */
	export interface GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfoFormProperties {

		/** Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook. */
		displayName: FormControl<string | null | undefined>,

		/** Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn. */
		justCollected: FormControl<boolean | null | undefined>,

		/** Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes. */
		required: FormControl<boolean | null | undefined>,

		/** Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored. */
		state: FormControl<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null | undefined>,

		/** Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			justCollected: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfoState | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1ReloadDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1ReloadDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ReloadDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ReloadDocumentOperationMetadataFormProperties>({
		});

	}


	/** The request message for Agents.RestoreAgent. */
	export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequest {

		/** Uncompressed raw byte content for agent. */
		agentContent?: string | null;

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		agentUri?: string | null;

		/** Settings for restoring from a git branch */
		gitSource?: GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource;

		/** Agent restore mode. If not specified, `KEEP` is assumed. */
		restoreOption?: GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOption | null;
	}

	/** The request message for Agents.RestoreAgent. */
	export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequestFormProperties {

		/** Uncompressed raw byte content for agent. */
		agentContent: FormControl<string | null | undefined>,

		/** The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be `gs:///`. Dialogflow performs a read operation for the Cloud Storage object on the caller's behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). */
		agentUri: FormControl<string | null | undefined>,

		/** Agent restore mode. If not specified, `KEEP` is assumed. */
		restoreOption: FormControl<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOption | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RestoreAgentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestFormProperties>({
			agentContent: new FormControl<string | null | undefined>(undefined),
			agentUri: new FormControl<string | null | undefined>(undefined),
			restoreOption: new FormControl<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOption | null | undefined>(undefined),
		});

	}


	/** Settings for restoring from a git branch */
	export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSource {

		/** tracking branch for the git pull */
		trackingBranch?: string | null;
	}

	/** Settings for restoring from a git branch */
	export interface GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSourceFormProperties {

		/** tracking branch for the git pull */
		trackingBranch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSourceFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RestoreAgentRequestGitSourceFormProperties>({
			trackingBranch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOption { RESTORE_OPTION_UNSPECIFIED = 'RESTORE_OPTION_UNSPECIFIED', KEEP = 'KEEP', FALLBACK = 'FALLBACK' }


	/** Metadata returned for the Environments.RunContinuousTest long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata {

		/** The test errors. */
		errors?: Array<GoogleCloudDialogflowCxV3beta1TestError>;
	}

	/** Metadata returned for the Environments.RunContinuousTest long running operation. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunContinuousTestMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadataFormProperties>({
		});

	}


	/** The request message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest {
	}

	/** The request message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunContinuousTestRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunContinuousTestRequestFormProperties>({
		});

	}


	/** The response message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse {

		/** Represents a result from running a test case in an agent environment. */
		continuousTestResult?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult;
	}

	/** The response message for Environments.RunContinuousTest. */
	export interface GoogleCloudDialogflowCxV3beta1RunContinuousTestResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunContinuousTestResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunContinuousTestResponseFormProperties>({
		});

	}


	/** Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {
	}

	/** Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunTestCaseMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunTestCaseMetadataFormProperties>({
		});

	}


	/** The request message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseRequest {

		/** Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment?: string | null;
	}

	/** The request message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseRequestFormProperties {

		/** Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`. */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunTestCaseRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunTestCaseRequestFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {

		/** Represents a result from running a test case in an agent environment. */
		result?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
	}

	/** The response message for TestCases.RunTestCase. */
	export interface GoogleCloudDialogflowCxV3beta1RunTestCaseResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1RunTestCaseResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1RunTestCaseResponseFormProperties>({
		});

	}


	/** Represents session information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1SessionInfo {

		/** Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names. */
		parameters?: {[id: string]: any };

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified. */
		session?: string | null;
	}

	/** Represents session information communicated to and from the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1SessionInfoFormProperties {

		/** Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified. */
		session: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SessionInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SessionInfoFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Experiments.StartExperiment. */
	export interface GoogleCloudDialogflowCxV3beta1StartExperimentRequest {
	}

	/** The request message for Experiments.StartExperiment. */
	export interface GoogleCloudDialogflowCxV3beta1StartExperimentRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1StartExperimentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1StartExperimentRequestFormProperties>({
		});

	}


	/** The request message for Experiments.StopExperiment. */
	export interface GoogleCloudDialogflowCxV3beta1StopExperimentRequest {
	}

	/** The request message for Experiments.StopExperiment. */
	export interface GoogleCloudDialogflowCxV3beta1StopExperimentRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1StopExperimentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1StopExperimentRequestFormProperties>({
		});

	}


	/** The request to set the feedback for a bot answer. */
	export interface GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest {

		/** Stores information about feedback provided by users about a response. */
		answerFeedback?: GoogleCloudDialogflowCxV3beta1AnswerFeedback;

		/** Required. ID of the response to update its feedback. This is the same as DetectIntentResponse.response_id. */
		responseId?: string | null;

		/** Optional. The mask to control which fields to update. If the mask is not present, all fields will be updated. */
		updateMask?: string | null;
	}

	/** The request to set the feedback for a bot answer. */
	export interface GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequestFormProperties {

		/** Required. ID of the response to update its feedback. This is the same as DetectIntentResponse.response_id. */
		responseId: FormControl<string | null | undefined>,

		/** Optional. The mask to control which fields to update. If the mask is not present, all fields will be updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequestFormProperties>({
			responseId: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Flows.TrainFlow. */
	export interface GoogleCloudDialogflowCxV3beta1TrainFlowRequest {
	}

	/** The request message for Flows.TrainFlow. */
	export interface GoogleCloudDialogflowCxV3beta1TrainFlowRequestFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1TrainFlowRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1TrainFlowRequestFormProperties>({
		});

	}


	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1UpdateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowCxV3beta1UpdateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowCxV3beta1UpdateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1UpdateDocumentOperationMetadataFormProperties>({
		});

	}


	/** The request message for Agents.ValidateAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ValidateAgentRequest {

		/** If not specified, the agent's default language is used. */
		languageCode?: string | null;
	}

	/** The request message for Agents.ValidateAgent. */
	export interface GoogleCloudDialogflowCxV3beta1ValidateAgentRequestFormProperties {

		/** If not specified, the agent's default language is used. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ValidateAgentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ValidateAgentRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Flows.ValidateFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ValidateFlowRequest {

		/** If not specified, the agent's default language is used. */
		languageCode?: string | null;
	}

	/** The request message for Flows.ValidateFlow. */
	export interface GoogleCloudDialogflowCxV3beta1ValidateFlowRequestFormProperties {

		/** If not specified, the agent's default language is used. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1ValidateFlowRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1ValidateFlowRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases. You may see undocumented fields in an actual request. These fields are used internally by Dialogflow and should be ignored. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequest {

		/** Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller. */
		detectIntentResponseId?: string | null;

		/** If DTMF was provided as input, this field will contain the DTMF digits. */
		dtmfDigits?: string | null;

		/** Represents fulfillment information communicated to the webhook. */
		fulfillmentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;

		/** Represents intent information communicated to the webhook. */
		intentInfo?: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;

		/** The language code specified in the original request. */
		languageCode?: string | null;

		/** The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response; */
		messages?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessage>;

		/** Represents page information communicated to and from the webhook. */
		pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;

		/** Custom data set in QueryParameters.payload. */
		payload?: {[id: string]: any };

		/** Represents the result of sentiment analysis. */
		sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;

		/** Represents session information communicated to and from the webhook. */
		sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text?: string | null;

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript?: string | null;

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent?: string | null;

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent?: string | null;
	}

	/** The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases. You may see undocumented fields in an actual request. These fields are used internally by Dialogflow and should be ignored. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFormProperties {

		/** Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller. */
		detectIntentResponseId: FormControl<string | null | undefined>,

		/** If DTMF was provided as input, this field will contain the DTMF digits. */
		dtmfDigits: FormControl<string | null | undefined>,

		/** The language code specified in the original request. */
		languageCode: FormControl<string | null | undefined>,

		/** Custom data set in QueryParameters.payload. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** If natural language text was provided as input, this field will contain a copy of the text. */
		text: FormControl<string | null | undefined>,

		/** If natural language speech audio was provided as input, this field will contain the transcript for the audio. */
		transcript: FormControl<string | null | undefined>,

		/** If an event was provided as input, this field will contain the name of the event. */
		triggerEvent: FormControl<string | null | undefined>,

		/** If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`. */
		triggerIntent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookRequestFormProperties>({
			detectIntentResponseId: new FormControl<string | null | undefined>(undefined),
			dtmfDigits: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
			triggerEvent: new FormControl<string | null | undefined>(undefined),
			triggerIntent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fulfillment information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {

		/** Always present. The value of the Fulfillment.tag field will be populated in this field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. */
		tag?: string | null;
	}

	/** Represents fulfillment information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfoFormProperties {

		/** Always present. The value of the Fulfillment.tag field will be populated in this field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfoFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents intent information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {

		/**
		 * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** Always present. The display name of the last matched intent. */
		displayName?: string | null;

		/** Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`. */
		lastMatchedIntent?: string | null;

		/** Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here. */
		parameters?: {[id: string]: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue };
	}

	/** Represents intent information communicated to the webhook. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoFormProperties {

		/**
		 * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Always present. The display name of the last matched intent. */
		displayName: FormControl<string | null | undefined>,

		/** Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`. */
		lastMatchedIntent: FormControl<string | null | undefined>,

		/** Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here. */
		parameters: FormControl<{[id: string]: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastMatchedIntent: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue } | null | undefined>(undefined),
		});

	}


	/** Represents a value for an intent parameter. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {

		/** Always present. Original text value extracted from user utterance. */
		originalValue?: string | null;

		/** Always present. Structured value for the parameter extracted from user utterance. */
		resolvedValue?: any;
	}

	/** Represents a value for an intent parameter. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValueFormProperties {

		/** Always present. Original text value extracted from user utterance. */
		originalValue: FormControl<string | null | undefined>,

		/** Always present. Structured value for the parameter extracted from user utterance. */
		resolvedValue: FormControl<any | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValueFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValueFormProperties>({
			originalValue: new FormControl<string | null | undefined>(undefined),
			resolvedValue: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Represents the result of sentiment analysis. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Represents the result of sentiment analysis. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResultFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResultFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for a webhook call. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookResponse {

		/** Represents a fulfillment response to the user. */
		fulfillmentResponse?: GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;

		/** Represents page information communicated to and from the webhook. */
		pageInfo?: GoogleCloudDialogflowCxV3beta1PageInfo;

		/** Value to append directly to QueryResult.webhook_payloads. */
		payload?: {[id: string]: any };

		/** Represents session information communicated to and from the webhook. */
		sessionInfo?: GoogleCloudDialogflowCxV3beta1SessionInfo;

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow?: string | null;

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage?: string | null;
	}

	/** The response message for a webhook call. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFormProperties {

		/** Value to append directly to QueryResult.webhook_payloads. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** The target flow to transition to. Format: `projects//locations//agents//flows/`. */
		targetFlow: FormControl<string | null | undefined>,

		/** The target page to transition to. Format: `projects//locations//agents//flows//pages/`. */
		targetPage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookResponseFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			targetFlow: new FormControl<string | null | undefined>(undefined),
			targetPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a fulfillment response to the user. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {

		/** Merge behavior for `messages`. */
		mergeBehavior?: GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null;

		/** The list of rich message responses to present to the user. */
		messages?: Array<GoogleCloudDialogflowCxV3beta1ResponseMessage>;
	}

	/** Represents a fulfillment response to the user. */
	export interface GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponseFormProperties {

		/** Merge behavior for `messages`. */
		mergeBehavior: FormControl<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponseFormProperties>({
			mergeBehavior: new FormControl<GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponseMergeBehavior | null | undefined>(undefined),
		});

	}


	/** Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end. */
	export interface GoogleCloudDialogflowV2AnnotatedMessagePart {

		/** The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity. */
		entityType?: string | null;

		/** The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" } */
		formattedValue?: any;

		/** A part of a message possibly annotated with an entity. */
		text?: string | null;
	}

	/** Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end. */
	export interface GoogleCloudDialogflowV2AnnotatedMessagePartFormProperties {

		/** The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity. */
		entityType: FormControl<string | null | undefined>,

		/** The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" } */
		formattedValue: FormControl<any | null | undefined>,

		/** A part of a message possibly annotated with an entity. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2AnnotatedMessagePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2AnnotatedMessagePartFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<any | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents article answer. */
	export interface GoogleCloudDialogflowV2ArticleAnswer {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/**
		 * Article match confidence. The system's confidence score that this article is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** Article snippets. */
		snippets?: Array<string>;

		/** The article title. */
		title?: string | null;

		/** The article URI. */
		uri?: string | null;
	}

	/** Represents article answer. */
	export interface GoogleCloudDialogflowV2ArticleAnswerFormProperties {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/**
		 * Article match confidence. The system's confidence score that this article is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The article title. */
		title: FormControl<string | null | undefined>,

		/** The article URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ArticleAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ArticleAnswerFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for article suggestion models. */
	export interface GoogleCloudDialogflowV2ArticleSuggestionModelMetadata {

		/** Optional. Type of the article suggestion model. If not provided, model_type is used. */
		trainingModelType?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null;
	}

	/** Metadata for article suggestion models. */
	export interface GoogleCloudDialogflowV2ArticleSuggestionModelMetadataFormProperties {

		/** Optional. Type of the article suggestion model. If not provided, model_type is used. */
		trainingModelType: FormControl<GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ArticleSuggestionModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ArticleSuggestionModelMetadataFormProperties>({
			trainingModelType: new FormControl<GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType { MODEL_TYPE_UNSPECIFIED = 'MODEL_TYPE_UNSPECIFIED', SMART_REPLY_DUAL_ENCODER_MODEL = 'SMART_REPLY_DUAL_ENCODER_MODEL', SMART_REPLY_BERT_MODEL = 'SMART_REPLY_BERT_MODEL' }


	/** The response message for EntityTypes.BatchUpdateEntityTypes. */
	export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {

		/** The collection of updated or created entity types. */
		entityTypes?: Array<GoogleCloudDialogflowV2EntityType>;
	}

	/** The response message for EntityTypes.BatchUpdateEntityTypes. */
	export interface GoogleCloudDialogflowV2BatchUpdateEntityTypesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2BatchUpdateEntityTypesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2BatchUpdateEntityTypesResponseFormProperties>({
		});

	}


	/** Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowV2EntityType {

		/** Optional. Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode?: GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null;

		/** Required. The name of the entity type. */
		displayName?: string | null;

		/** Optional. Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction?: boolean | null;

		/** Optional. The collection of entity entries associated with the entity type. */
		entities?: Array<GoogleCloudDialogflowV2EntityTypeEntity>;

		/** Required. Indicates the kind of entity type. */
		kind?: GoogleCloudDialogflowCxV3beta1EntityTypeKind | null;

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`. */
		name?: string | null;
	}

	/** Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowV2EntityTypeFormProperties {

		/** Optional. Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>,

		/** Required. The name of the entity type. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction: FormControl<boolean | null | undefined>,

		/** Required. Indicates the kind of entity type. */
		kind: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>,

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2EntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2EntityTypeFormProperties>({
			autoExpansionMode: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableFuzzyExtraction: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowV2EntityTypeEntity {

		/** Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`. */
		synonyms?: Array<string>;

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value?: string | null;
	}

	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowV2EntityTypeEntityFormProperties {

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2EntityTypeEntityFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2EntityTypeEntityFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Intents.BatchUpdateIntents. */
	export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponse {

		/** The collection of updated or created intents. */
		intents?: Array<GoogleCloudDialogflowV2Intent>;
	}

	/** The response message for Intents.BatchUpdateIntents. */
	export interface GoogleCloudDialogflowV2BatchUpdateIntentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2BatchUpdateIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2BatchUpdateIntentsResponseFormProperties>({
		});

	}


	/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
	export interface GoogleCloudDialogflowV2Intent {

		/** Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces. */
		action?: string | null;

		/** Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). */
		defaultResponsePlatforms?: Array<string>;

		/** Required. The name of this intent. */
		displayName?: string | null;

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction?: boolean | null;

		/** Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters. */
		events?: Array<string>;

		/** Output only. Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output. */
		followupIntentInfo?: Array<GoogleCloudDialogflowV2IntentFollowupIntentInfo>;

		/** Optional. The list of context names required for this intent to be triggered. Format: `projects//agent/sessions/-/contexts/`. */
		inputContextNames?: Array<string>;

		/** Optional. Indicates whether this is a fallback intent. */
		isFallback?: boolean | null;

		/** Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff?: boolean | null;

		/** Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console. */
		messages?: Array<GoogleCloudDialogflowV2IntentMessage>;

		/** Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. */
		mlDisabled?: boolean | null;

		/** Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`. */
		name?: string | null;

		/** Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`. */
		outputContexts?: Array<GoogleCloudDialogflowV2Context>;

		/** Optional. The collection of parameters associated with the intent. */
		parameters?: Array<GoogleCloudDialogflowV2IntentParameter>;

		/** Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName?: string | null;

		/**
		 * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Optional. Indicates whether to delete all contexts in the current session when this intent is matched. */
		resetContexts?: boolean | null;

		/** Output only. Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output. Format: `projects//agent/intents/`. */
		rootFollowupIntentName?: string | null;

		/** Optional. The collection of examples that the agent is trained on. */
		trainingPhrases?: Array<GoogleCloudDialogflowV2IntentTrainingPhrase>;

		/** Optional. Indicates whether webhooks are enabled for the intent. */
		webhookState?: GoogleCloudDialogflowV2IntentWebhookState | null;
	}

	/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
	export interface GoogleCloudDialogflowV2IntentFormProperties {

		/** Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces. */
		action: FormControl<string | null | undefined>,

		/** Required. The name of this intent. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether this is a fallback intent. */
		isFallback: FormControl<boolean | null | undefined>,

		/** Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. */
		mlDisabled: FormControl<boolean | null | undefined>,

		/** Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`. */
		name: FormControl<string | null | undefined>,

		/** Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName: FormControl<string | null | undefined>,

		/**
		 * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Optional. Indicates whether to delete all contexts in the current session when this intent is matched. */
		resetContexts: FormControl<boolean | null | undefined>,

		/** Output only. Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output. Format: `projects//agent/intents/`. */
		rootFollowupIntentName: FormControl<string | null | undefined>,

		/** Optional. Indicates whether webhooks are enabled for the intent. */
		webhookState: FormControl<GoogleCloudDialogflowV2IntentWebhookState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endInteraction: new FormControl<boolean | null | undefined>(undefined),
			isFallback: new FormControl<boolean | null | undefined>(undefined),
			liveAgentHandoff: new FormControl<boolean | null | undefined>(undefined),
			mlDisabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentFollowupIntentName: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			resetContexts: new FormControl<boolean | null | undefined>(undefined),
			rootFollowupIntentName: new FormControl<string | null | undefined>(undefined),
			webhookState: new FormControl<GoogleCloudDialogflowV2IntentWebhookState | null | undefined>(undefined),
		});

	}


	/** Represents a single followup intent in the chain. */
	export interface GoogleCloudDialogflowV2IntentFollowupIntentInfo {

		/** The unique identifier of the followup intent. Format: `projects//agent/intents/`. */
		followupIntentName?: string | null;

		/** The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName?: string | null;
	}

	/** Represents a single followup intent in the chain. */
	export interface GoogleCloudDialogflowV2IntentFollowupIntentInfoFormProperties {

		/** The unique identifier of the followup intent. Format: `projects//agent/intents/`. */
		followupIntentName: FormControl<string | null | undefined>,

		/** The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentFollowupIntentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentFollowupIntentInfoFormProperties>({
			followupIntentName: new FormControl<string | null | undefined>(undefined),
			parentFollowupIntentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages). */
	export interface GoogleCloudDialogflowV2IntentMessage {

		/** The basic card message. Useful for displaying information. */
		basicCard?: GoogleCloudDialogflowV2IntentMessageBasicCard;

		/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
		browseCarouselCard?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;

		/** The card response message. */
		card?: GoogleCloudDialogflowV2IntentMessageCard;

		/** The card for presenting a carousel of options to select from. */
		carouselSelect?: GoogleCloudDialogflowV2IntentMessageCarouselSelect;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
		linkOutSuggestion?: GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;

		/** The card for presenting a list of options to select from. */
		listSelect?: GoogleCloudDialogflowV2IntentMessageListSelect;

		/** The media content card for Actions on Google. */
		mediaContent?: GoogleCloudDialogflowV2IntentMessageMediaContent;

		/** A custom platform-specific response. */
		payload?: {[id: string]: any };

		/** Optional. The platform that this message is intended for. */
		platform?: GoogleCloudDialogflowV2IntentMessagePlatform | null;

		/** The quick replies response message. */
		quickReplies?: GoogleCloudDialogflowV2IntentMessageQuickReplies;

		/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
		simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponses;

		/** The collection of suggestions. */
		suggestions?: GoogleCloudDialogflowV2IntentMessageSuggestions;

		/** Table card for Actions on Google. */
		tableCard?: GoogleCloudDialogflowV2IntentMessageTableCard;

		/** The text response message. */
		text?: GoogleCloudDialogflowV2IntentMessageText;
	}

	/** A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages). */
	export interface GoogleCloudDialogflowV2IntentMessageFormProperties {

		/** A custom platform-specific response. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. The platform that this message is intended for. */
		platform: FormControl<GoogleCloudDialogflowV2IntentMessagePlatform | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			platform: new FormControl<GoogleCloudDialogflowV2IntentMessagePlatform | null | undefined>(undefined),
		});

	}


	/** The basic card message. Useful for displaying information. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCard {

		/** Optional. The collection of card buttons. */
		buttons?: Array<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;

		/** Required, unless image is present. The body text of the card. */
		formattedText?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Optional. The subtitle of the card. */
		subtitle?: string | null;

		/** Optional. The title of the card. */
		title?: string | null;
	}

	/** The basic card message. Useful for displaying information. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCardFormProperties {

		/** Required, unless image is present. The body text of the card. */
		formattedText: FormControl<string | null | undefined>,

		/** Optional. The subtitle of the card. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBasicCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBasicCardFormProperties>({
			formattedText: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The button object that appears at the bottom of a card. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCardButton {

		/** Opens the given URI. */
		openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;

		/** Required. The title of the button. */
		title?: string | null;
	}

	/** The button object that appears at the bottom of a card. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonFormProperties {

		/** Required. The title of the button. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBasicCardButtonFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBasicCardButtonFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Opens the given URI. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {

		/** Required. The HTTP or HTTPS scheme URI. */
		uri?: string | null;
	}

	/** Opens the given URI. */
	export interface GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriActionFormProperties {

		/** Required. The HTTP or HTTPS scheme URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriActionFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image response message. */
	export interface GoogleCloudDialogflowV2IntentMessageImage {

		/** Optional. A text description of the image to be used for accessibility, e.g., screen readers. */
		accessibilityText?: string | null;

		/** Optional. The public URI to an image file. */
		imageUri?: string | null;
	}

	/** The image response message. */
	export interface GoogleCloudDialogflowV2IntentMessageImageFormProperties {

		/** Optional. A text description of the image to be used for accessibility, e.g., screen readers. */
		accessibilityText: FormControl<string | null | undefined>,

		/** Optional. The public URI to an image file. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageImageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageImageFormProperties>({
			accessibilityText: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {

		/** Optional. Settings for displaying the image. Applies to every image in items. */
		imageDisplayOptions?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null;

		/** Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten. */
		items?: Array<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem>;
	}

	/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardFormProperties {

		/** Optional. Settings for displaying the image. Applies to every image in items. */
		imageDisplayOptions: FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBrowseCarouselCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardFormProperties>({
			imageDisplayOptions: new FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions { IMAGE_DISPLAY_OPTIONS_UNSPECIFIED = 'IMAGE_DISPLAY_OPTIONS_UNSPECIFIED', GRAY = 'GRAY', WHITE = 'WHITE', CROPPED = 'CROPPED', BLURRED_BACKGROUND = 'BLURRED_BACKGROUND' }


	/** Browsing carousel tile */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {

		/** Optional. Description of the carousel item. Maximum of four lines of text. */
		description?: string | null;

		/** Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text. */
		footer?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Actions on Google action to open a given url. */
		openUriAction?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

		/** Required. Title of the carousel item. Maximum of two lines of text. */
		title?: string | null;
	}

	/** Browsing carousel tile */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormProperties {

		/** Optional. Description of the carousel item. Maximum of four lines of text. */
		description: FormControl<string | null | undefined>,

		/** Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text. */
		footer: FormControl<string | null | undefined>,

		/** Required. Title of the carousel item. Maximum of two lines of text. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			footer: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Actions on Google action to open a given url. */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {

		/** Required. URL */
		url?: string | null;

		/** Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser. */
		urlTypeHint?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null;
	}

	/** Actions on Google action to open a given url. */
	export interface GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormProperties {

		/** Required. URL */
		url: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser. */
		urlTypeHint: FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			urlTypeHint: new FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint { URL_TYPE_HINT_UNSPECIFIED = 'URL_TYPE_HINT_UNSPECIFIED', AMP_ACTION = 'AMP_ACTION', AMP_CONTENT = 'AMP_CONTENT' }


	/** The card response message. */
	export interface GoogleCloudDialogflowV2IntentMessageCard {

		/** Optional. The collection of card buttons. */
		buttons?: Array<GoogleCloudDialogflowV2IntentMessageCardButton>;

		/** Optional. The public URI to an image file for the card. */
		imageUri?: string | null;

		/** Optional. The subtitle of the card. */
		subtitle?: string | null;

		/** Optional. The title of the card. */
		title?: string | null;
	}

	/** The card response message. */
	export interface GoogleCloudDialogflowV2IntentMessageCardFormProperties {

		/** Optional. The public URI to an image file for the card. */
		imageUri: FormControl<string | null | undefined>,

		/** Optional. The subtitle of the card. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageCardFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a button. */
	export interface GoogleCloudDialogflowV2IntentMessageCardButton {

		/** Optional. The text to send back to the Dialogflow API or a URI to open. */
		postback?: string | null;

		/** Optional. The text to show on the button. */
		text?: string | null;
	}

	/** Contains information about a button. */
	export interface GoogleCloudDialogflowV2IntentMessageCardButtonFormProperties {

		/** Optional. The text to send back to the Dialogflow API or a URI to open. */
		postback: FormControl<string | null | undefined>,

		/** Optional. The text to show on the button. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageCardButtonFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageCardButtonFormProperties>({
			postback: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The card for presenting a carousel of options to select from. */
	export interface GoogleCloudDialogflowV2IntentMessageCarouselSelect {

		/** Required. Carousel items. */
		items?: Array<GoogleCloudDialogflowV2IntentMessageCarouselSelectItem>;
	}

	/** The card for presenting a carousel of options to select from. */
	export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageCarouselSelectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageCarouselSelectFormProperties>({
		});

	}


	/** An item in the carousel. */
	export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {

		/** Optional. The body text of the card. */
		description?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Additional info about the select item for when it is triggered in a dialog. */
		info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;

		/** Required. Title of the carousel item. */
		title?: string | null;
	}

	/** An item in the carousel. */
	export interface GoogleCloudDialogflowV2IntentMessageCarouselSelectItemFormProperties {

		/** Optional. The body text of the card. */
		description: FormControl<string | null | undefined>,

		/** Required. Title of the carousel item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageCarouselSelectItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageCarouselSelectItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional info about the select item for when it is triggered in a dialog. */
	export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfo {

		/** Required. A unique key that will be sent back to the agent if this response is given. */
		key?: string | null;

		/** Optional. A list of synonyms that can also be used to trigger this item in dialog. */
		synonyms?: Array<string>;
	}

	/** Additional info about the select item for when it is triggered in a dialog. */
	export interface GoogleCloudDialogflowV2IntentMessageSelectItemInfoFormProperties {

		/** Required. A unique key that will be sent back to the agent if this response is given. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageSelectItemInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageSelectItemInfoFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
	export interface GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {

		/** Required. The name of the app or site this chip is linking to. */
		destinationName?: string | null;

		/** Required. The URI of the app or site to open when the user taps the suggestion chip. */
		uri?: string | null;
	}

	/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
	export interface GoogleCloudDialogflowV2IntentMessageLinkOutSuggestionFormProperties {

		/** Required. The name of the app or site this chip is linking to. */
		destinationName: FormControl<string | null | undefined>,

		/** Required. The URI of the app or site to open when the user taps the suggestion chip. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageLinkOutSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageLinkOutSuggestionFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The card for presenting a list of options to select from. */
	export interface GoogleCloudDialogflowV2IntentMessageListSelect {

		/** Required. List items. */
		items?: Array<GoogleCloudDialogflowV2IntentMessageListSelectItem>;

		/** Optional. Subtitle of the list. */
		subtitle?: string | null;

		/** Optional. The overall title of the list. */
		title?: string | null;
	}

	/** The card for presenting a list of options to select from. */
	export interface GoogleCloudDialogflowV2IntentMessageListSelectFormProperties {

		/** Optional. Subtitle of the list. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The overall title of the list. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageListSelectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageListSelectFormProperties>({
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item in the list. */
	export interface GoogleCloudDialogflowV2IntentMessageListSelectItem {

		/** Optional. The main text describing the item. */
		description?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Additional info about the select item for when it is triggered in a dialog. */
		info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;

		/** Required. The title of the list item. */
		title?: string | null;
	}

	/** An item in the list. */
	export interface GoogleCloudDialogflowV2IntentMessageListSelectItemFormProperties {

		/** Optional. The main text describing the item. */
		description: FormControl<string | null | undefined>,

		/** Required. The title of the list item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageListSelectItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageListSelectItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The media content card for Actions on Google. */
	export interface GoogleCloudDialogflowV2IntentMessageMediaContent {

		/** Required. List of media objects. */
		mediaObjects?: Array<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject>;

		/** Optional. What type of media is the content (ie "audio"). */
		mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null;
	}

	/** The media content card for Actions on Google. */
	export interface GoogleCloudDialogflowV2IntentMessageMediaContentFormProperties {

		/** Optional. What type of media is the content (ie "audio"). */
		mediaType: FormControl<GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageMediaContentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageMediaContentFormProperties>({
			mediaType: new FormControl<GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null | undefined>(undefined),
		});

	}


	/** Response media object for media content card. */
	export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {

		/** Required. Url where the media is stored. */
		contentUrl?: string | null;

		/** Optional. Description of media card. */
		description?: string | null;

		/** The image response message. */
		icon?: GoogleCloudDialogflowV2IntentMessageImage;

		/** The image response message. */
		largeImage?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Required. Name of media card. */
		name?: string | null;
	}

	/** Response media object for media content card. */
	export interface GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObjectFormProperties {

		/** Required. Url where the media is stored. */
		contentUrl: FormControl<string | null | undefined>,

		/** Optional. Description of media card. */
		description: FormControl<string | null | undefined>,

		/** Required. Name of media card. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObjectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObjectFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2IntentMessageMediaContentMediaType { RESPONSE_MEDIA_TYPE_UNSPECIFIED = 'RESPONSE_MEDIA_TYPE_UNSPECIFIED', AUDIO = 'AUDIO' }

	export enum GoogleCloudDialogflowV2IntentMessagePlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', FACEBOOK = 'FACEBOOK', SLACK = 'SLACK', TELEGRAM = 'TELEGRAM', KIK = 'KIK', SKYPE = 'SKYPE', LINE = 'LINE', VIBER = 'VIBER', ACTIONS_ON_GOOGLE = 'ACTIONS_ON_GOOGLE', GOOGLE_HANGOUTS = 'GOOGLE_HANGOUTS' }


	/** The quick replies response message. */
	export interface GoogleCloudDialogflowV2IntentMessageQuickReplies {

		/** Optional. The collection of quick replies. */
		quickReplies?: Array<string>;

		/** Optional. The title of the collection of quick replies. */
		title?: string | null;
	}

	/** The quick replies response message. */
	export interface GoogleCloudDialogflowV2IntentMessageQuickRepliesFormProperties {

		/** Optional. The title of the collection of quick replies. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageQuickRepliesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageQuickRepliesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
	export interface GoogleCloudDialogflowV2IntentMessageSimpleResponses {

		/** Required. The list of simple responses. */
		simpleResponses?: Array<GoogleCloudDialogflowV2IntentMessageSimpleResponse>;
	}

	/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
	export interface GoogleCloudDialogflowV2IntentMessageSimpleResponsesFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageSimpleResponsesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageSimpleResponsesFormProperties>({
		});

	}


	/** The simple response message containing speech or text. */
	export interface GoogleCloudDialogflowV2IntentMessageSimpleResponse {

		/** Optional. The text to display. */
		displayText?: string | null;

		/** One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech. */
		ssml?: string | null;

		/** One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml. */
		textToSpeech?: string | null;
	}

	/** The simple response message containing speech or text. */
	export interface GoogleCloudDialogflowV2IntentMessageSimpleResponseFormProperties {

		/** Optional. The text to display. */
		displayText: FormControl<string | null | undefined>,

		/** One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech. */
		ssml: FormControl<string | null | undefined>,

		/** One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml. */
		textToSpeech: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageSimpleResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageSimpleResponseFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			ssml: new FormControl<string | null | undefined>(undefined),
			textToSpeech: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of suggestions. */
	export interface GoogleCloudDialogflowV2IntentMessageSuggestions {

		/** Required. The list of suggested replies. */
		suggestions?: Array<GoogleCloudDialogflowV2IntentMessageSuggestion>;
	}

	/** The collection of suggestions. */
	export interface GoogleCloudDialogflowV2IntentMessageSuggestionsFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageSuggestionsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageSuggestionsFormProperties>({
		});

	}


	/** The suggestion chip message that the user can tap to quickly post a reply to the conversation. */
	export interface GoogleCloudDialogflowV2IntentMessageSuggestion {

		/** Required. The text shown the in the suggestion chip. */
		title?: string | null;
	}

	/** The suggestion chip message that the user can tap to quickly post a reply to the conversation. */
	export interface GoogleCloudDialogflowV2IntentMessageSuggestionFormProperties {

		/** Required. The text shown the in the suggestion chip. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageSuggestionFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Table card for Actions on Google. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCard {

		/** Optional. List of buttons for the card. */
		buttons?: Array<GoogleCloudDialogflowV2IntentMessageBasicCardButton>;

		/** Optional. Display properties for the columns in this table. */
		columnProperties?: Array<GoogleCloudDialogflowV2IntentMessageColumnProperties>;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2IntentMessageImage;

		/** Optional. Rows in this table of data. */
		rows?: Array<GoogleCloudDialogflowV2IntentMessageTableCardRow>;

		/** Optional. Subtitle to the title. */
		subtitle?: string | null;

		/** Required. Title of the card. */
		title?: string | null;
	}

	/** Table card for Actions on Google. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCardFormProperties {

		/** Optional. Subtitle to the title. */
		subtitle: FormControl<string | null | undefined>,

		/** Required. Title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageTableCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageTableCardFormProperties>({
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Column properties for TableCard. */
	export interface GoogleCloudDialogflowV2IntentMessageColumnProperties {

		/** Required. Column heading. */
		header?: string | null;

		/** Optional. Defines text alignment for all cells in this column. */
		horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null;
	}

	/** Column properties for TableCard. */
	export interface GoogleCloudDialogflowV2IntentMessageColumnPropertiesFormProperties {

		/** Required. Column heading. */
		header: FormControl<string | null | undefined>,

		/** Optional. Defines text alignment for all cells in this column. */
		horizontalAlignment: FormControl<GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageColumnPropertiesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageColumnPropertiesFormProperties>({
			header: new FormControl<string | null | undefined>(undefined),
			horizontalAlignment: new FormControl<GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment { HORIZONTAL_ALIGNMENT_UNSPECIFIED = 'HORIZONTAL_ALIGNMENT_UNSPECIFIED', LEADING = 'LEADING', CENTER = 'CENTER', TRAILING = 'TRAILING' }


	/** Row of TableCard. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCardRow {

		/** Optional. List of cells that make up this row. */
		cells?: Array<GoogleCloudDialogflowV2IntentMessageTableCardCell>;

		/** Optional. Whether to add a visual divider after this row. */
		dividerAfter?: boolean | null;
	}

	/** Row of TableCard. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCardRowFormProperties {

		/** Optional. Whether to add a visual divider after this row. */
		dividerAfter: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageTableCardRowFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageTableCardRowFormProperties>({
			dividerAfter: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Cell of TableCardRow. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCardCell {

		/** Required. Text in this cell. */
		text?: string | null;
	}

	/** Cell of TableCardRow. */
	export interface GoogleCloudDialogflowV2IntentMessageTableCardCellFormProperties {

		/** Required. Text in this cell. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageTableCardCellFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageTableCardCellFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text response message. */
	export interface GoogleCloudDialogflowV2IntentMessageText {

		/** Optional. The collection of the agent's responses. */
		text?: Array<string>;
	}

	/** The text response message. */
	export interface GoogleCloudDialogflowV2IntentMessageTextFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2IntentMessageTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentMessageTextFormProperties>({
		});

	}


	/** Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview). */
	export interface GoogleCloudDialogflowV2Context {

		/**
		 * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lifespanCount?: number | null;

		/** Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` */
		name?: string | null;

		/** Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };
	}

	/** Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview). */
	export interface GoogleCloudDialogflowV2ContextFormProperties {

		/**
		 * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lifespanCount: FormControl<number | null | undefined>,

		/** Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` */
		name: FormControl<string | null | undefined>,

		/** Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ContextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ContextFormProperties>({
			lifespanCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Represents intent parameters. */
	export interface GoogleCloudDialogflowV2IntentParameter {

		/** Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`. */
		defaultValue?: string | null;

		/** Required. The name of the parameter. */
		displayName?: string | null;

		/** Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided. */
		entityTypeDisplayName?: string | null;

		/** Optional. Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value. */
		mandatory?: boolean | null;

		/** The unique identifier of this parameter. */
		name?: string | null;

		/** Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter. */
		prompts?: Array<string>;

		/** Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`. */
		value?: string | null;
	}

	/** Represents intent parameters. */
	export interface GoogleCloudDialogflowV2IntentParameterFormProperties {

		/** Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`. */
		defaultValue: FormControl<string | null | undefined>,

		/** Required. The name of the parameter. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided. */
		entityTypeDisplayName: FormControl<string | null | undefined>,

		/** Optional. Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value. */
		mandatory: FormControl<boolean | null | undefined>,

		/** The unique identifier of this parameter. */
		name: FormControl<string | null | undefined>,

		/** Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentParameterFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityTypeDisplayName: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			mandatory: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an example that the agent is trained on. */
	export interface GoogleCloudDialogflowV2IntentTrainingPhrase {

		/** Output only. The unique identifier of this training phrase. */
		name?: string | null;

		/** Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set. */
		parts?: Array<GoogleCloudDialogflowV2IntentTrainingPhrasePart>;

		/**
		 * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timesAddedCount?: number | null;

		/** Required. The type of the training phrase. */
		type?: GoogleCloudDialogflowV2IntentTrainingPhraseType | null;
	}

	/** Represents an example that the agent is trained on. */
	export interface GoogleCloudDialogflowV2IntentTrainingPhraseFormProperties {

		/** Output only. The unique identifier of this training phrase. */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timesAddedCount: FormControl<number | null | undefined>,

		/** Required. The type of the training phrase. */
		type: FormControl<GoogleCloudDialogflowV2IntentTrainingPhraseType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentTrainingPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentTrainingPhraseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			timesAddedCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowV2IntentTrainingPhraseType | null | undefined>(undefined),
		});

	}


	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowV2IntentTrainingPhrasePart {

		/** Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase. */
		alias?: string | null;

		/** Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase. */
		entityType?: string | null;

		/** Required. The text for this part. */
		text?: string | null;

		/** Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true. */
		userDefined?: boolean | null;
	}

	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowV2IntentTrainingPhrasePartFormProperties {

		/** Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase. */
		alias: FormControl<string | null | undefined>,

		/** Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase. */
		entityType: FormControl<string | null | undefined>,

		/** Required. The text for this part. */
		text: FormControl<string | null | undefined>,

		/** Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true. */
		userDefined: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2IntentTrainingPhrasePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2IntentTrainingPhrasePartFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			userDefined: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2IntentTrainingPhraseType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', EXAMPLE = 'EXAMPLE', TEMPLATE = 'TEMPLATE' }

	export enum GoogleCloudDialogflowV2IntentWebhookState { WEBHOOK_STATE_UNSPECIFIED = 'WEBHOOK_STATE_UNSPECIFIED', WEBHOOK_STATE_ENABLED = 'WEBHOOK_STATE_ENABLED', WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 'WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING' }


	/** Metadata for a ConversationProfile.ClearSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadata {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile?: string | null;

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime?: string | null;

		/** Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Required. The type of the suggestion feature to remove. */
		suggestionFeatureType?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null;
	}

	/** Metadata for a ConversationProfile.ClearSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataFormProperties {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile: FormControl<string | null | undefined>,

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Required. The type of the suggestion feature to remove. */
		suggestionFeatureType: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			suggestionFeatureType: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole { ROLE_UNSPECIFIED = 'ROLE_UNSPECIFIED', HUMAN_AGENT = 'HUMAN_AGENT', AUTOMATED_AGENT = 'AUTOMATED_AGENT', END_USER = 'END_USER' }

	export enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', ARTICLE_SUGGESTION = 'ARTICLE_SUGGESTION', FAQ = 'FAQ', SMART_REPLY = 'SMART_REPLY', KNOWLEDGE_SEARCH = 'KNOWLEDGE_SEARCH' }


	/** Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events. */
	export interface GoogleCloudDialogflowV2ConversationEvent {

		/** The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`. */
		conversation?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		errorStatus?: GoogleRpcStatus;

		/** Represents a message posted into a conversation. */
		newMessagePayload?: GoogleCloudDialogflowV2Message;

		/** The type of the event that this notification refers to. */
		type?: GoogleCloudDialogflowV2ConversationEventType | null;
	}

	/** Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events. */
	export interface GoogleCloudDialogflowV2ConversationEventFormProperties {

		/** The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`. */
		conversation: FormControl<string | null | undefined>,

		/** The type of the event that this notification refers to. */
		type: FormControl<GoogleCloudDialogflowV2ConversationEventType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ConversationEventFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ConversationEventFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowV2ConversationEventType | null | undefined>(undefined),
		});

	}


	/** Represents a message posted into a conversation. */
	export interface GoogleCloudDialogflowV2Message {

		/** Required. The message content. */
		content?: string | null;

		/** Output only. The time when the message was created in Contact Center AI. */
		createTime?: string | null;

		/** Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode?: string | null;

		/** Represents the result of annotation for the message. */
		messageAnnotation?: GoogleCloudDialogflowV2MessageAnnotation;

		/** Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`. */
		name?: string | null;

		/** Output only. The participant that sends this message. */
		participant?: string | null;

		/** Output only. The role of the participant. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Optional. The time when the message was sent. */
		sendTime?: string | null;

		/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
		sentimentAnalysis?: GoogleCloudDialogflowV2SentimentAnalysisResult;
	}

	/** Represents a message posted into a conversation. */
	export interface GoogleCloudDialogflowV2MessageFormProperties {

		/** Required. The message content. */
		content: FormControl<string | null | undefined>,

		/** Output only. The time when the message was created in Contact Center AI. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The participant that sends this message. */
		participant: FormControl<string | null | undefined>,

		/** Output only. The role of the participant. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Optional. The time when the message was sent. */
		sendTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2MessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			participant: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			sendTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of annotation for the message. */
	export interface GoogleCloudDialogflowV2MessageAnnotation {

		/** Indicates whether the text message contains entities. */
		containEntities?: boolean | null;

		/** The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text]. */
		parts?: Array<GoogleCloudDialogflowV2AnnotatedMessagePart>;
	}

	/** Represents the result of annotation for the message. */
	export interface GoogleCloudDialogflowV2MessageAnnotationFormProperties {

		/** Indicates whether the text message contains entities. */
		containEntities: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2MessageAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2MessageAnnotationFormProperties>({
			containEntities: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
	export interface GoogleCloudDialogflowV2SentimentAnalysisResult {

		/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
		queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
	}

	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
	export interface GoogleCloudDialogflowV2SentimentAnalysisResultFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2SentimentAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SentimentAnalysisResultFormProperties>({
		});

	}


	/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
	export interface GoogleCloudDialogflowV2Sentiment {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
	export interface GoogleCloudDialogflowV2SentimentFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SentimentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SentimentFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2ConversationEventType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', CONVERSATION_STARTED = 'CONVERSATION_STARTED', CONVERSATION_FINISHED = 'CONVERSATION_FINISHED', HUMAN_INTERVENTION_NEEDED = 'HUMAN_INTERVENTION_NEEDED', NEW_MESSAGE = 'NEW_MESSAGE', UNRECOVERABLE_ERROR = 'UNRECOVERABLE_ERROR' }


	/** Represents a conversation model. */
	export interface GoogleCloudDialogflowV2ConversationModel {

		/** Metadata for article suggestion models. */
		articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;

		/** Output only. Creation time of this model. */
		createTime?: string | null;

		/** Required. Datasets used to create model. */
		datasets?: Array<GoogleCloudDialogflowV2InputDataset>;

		/** Required. The display name of the model. At most 64 bytes long. */
		displayName?: string | null;

		/** Language code for the conversation model. If not specified, the language is en-US. Language at ConversationModel should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode?: string | null;

		/** ConversationModel resource name. Format: `projects//conversationModels/` */
		name?: string | null;

		/** Metadata for smart reply models. */
		smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;

		/** Output only. State of the model. A model can only serve prediction requests after it gets deployed. */
		state?: GoogleCloudDialogflowV2ConversationModelState | null;
	}

	/** Represents a conversation model. */
	export interface GoogleCloudDialogflowV2ConversationModelFormProperties {

		/** Output only. Creation time of this model. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The display name of the model. At most 64 bytes long. */
		displayName: FormControl<string | null | undefined>,

		/** Language code for the conversation model. If not specified, the language is en-US. Language at ConversationModel should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** ConversationModel resource name. Format: `projects//conversationModels/` */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the model. A model can only serve prediction requests after it gets deployed. */
		state: FormControl<GoogleCloudDialogflowV2ConversationModelState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ConversationModelFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ConversationModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowV2ConversationModelState | null | undefined>(undefined),
		});

	}


	/** InputDataset used to create model or do evaluation. NextID:5 */
	export interface GoogleCloudDialogflowV2InputDataset {

		/** Required. ConversationDataset resource name. Format: `projects//locations//conversationDatasets/` */
		dataset?: string | null;
	}

	/** InputDataset used to create model or do evaluation. NextID:5 */
	export interface GoogleCloudDialogflowV2InputDatasetFormProperties {

		/** Required. ConversationDataset resource name. Format: `projects//locations//conversationDatasets/` */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2InputDatasetFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2InputDatasetFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for smart reply models. */
	export interface GoogleCloudDialogflowV2SmartReplyModelMetadata {

		/** Optional. Type of the smart reply model. If not provided, model_type is used. */
		trainingModelType?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null;
	}

	/** Metadata for smart reply models. */
	export interface GoogleCloudDialogflowV2SmartReplyModelMetadataFormProperties {

		/** Optional. Type of the smart reply model. If not provided, model_type is used. */
		trainingModelType: FormControl<GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SmartReplyModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SmartReplyModelMetadataFormProperties>({
			trainingModelType: new FormControl<GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2ConversationModelState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', UNDEPLOYED = 'UNDEPLOYED', DEPLOYING = 'DEPLOYING', DEPLOYED = 'DEPLOYED', UNDEPLOYING = 'UNDEPLOYING', DELETING = 'DELETING', FAILED = 'FAILED', PENDING = 'PENDING' }


	/** Metadata for ConversationDatasets. */
	export interface GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata {

		/** The resource name of the conversation dataset that will be created. Format: `projects//locations//conversationDatasets/` */
		conversationDataset?: string | null;
	}

	/** Metadata for ConversationDatasets. */
	export interface GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadataFormProperties {

		/** The resource name of the conversation dataset that will be created. Format: `projects//locations//conversationDatasets/` */
		conversationDataset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2CreateConversationDatasetOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadataFormProperties>({
			conversationDataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationModels.CreateConversationModelEvaluation operation. */
	export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadata {

		/** The resource name of the conversation model. Format: `projects//locations//conversationModels/` */
		conversationModel?: string | null;

		/** The resource name of the conversation model. Format: `projects//locations//conversationModels//evaluations/` */
		conversationModelEvaluation?: string | null;

		/** Timestamp when the request to create conversation model was submitted. The time is measured on server side. */
		createTime?: string | null;

		/** State of CreateConversationModel operation. */
		state?: GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataState | null;
	}

	/** Metadata for a ConversationModels.CreateConversationModelEvaluation operation. */
	export interface GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataFormProperties {

		/** The resource name of the conversation model. Format: `projects//locations//conversationModels/` */
		conversationModel: FormControl<string | null | undefined>,

		/** The resource name of the conversation model. Format: `projects//locations//conversationModels//evaluations/` */
		conversationModelEvaluation: FormControl<string | null | undefined>,

		/** Timestamp when the request to create conversation model was submitted. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** State of CreateConversationModel operation. */
		state: FormControl<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataFormProperties>({
			conversationModel: new FormControl<string | null | undefined>(undefined),
			conversationModelEvaluation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2CreateConversationModelEvaluationOperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', RUNNING = 'RUNNING', CANCELLED = 'CANCELLED', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Metadata for a ConversationModels.CreateConversationModel operation. */
	export interface GoogleCloudDialogflowV2CreateConversationModelOperationMetadata {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel?: string | null;

		/** Timestamp when the request to create conversation model is submitted. The time is measured on server side. */
		createTime?: string | null;

		/** State of CreateConversationModel operation. */
		state?: GoogleCloudDialogflowV2CreateConversationModelOperationMetadataState | null;
	}

	/** Metadata for a ConversationModels.CreateConversationModel operation. */
	export interface GoogleCloudDialogflowV2CreateConversationModelOperationMetadataFormProperties {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel: FormControl<string | null | undefined>,

		/** Timestamp when the request to create conversation model is submitted. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** State of CreateConversationModel operation. */
		state: FormControl<GoogleCloudDialogflowV2CreateConversationModelOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2CreateConversationModelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2CreateConversationModelOperationMetadataFormProperties>({
			conversationModel: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowV2CreateConversationModelOperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2CreateConversationModelOperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', CANCELLING = 'CANCELLING', TRAINING = 'TRAINING' }


	/** Metadata for ConversationDatasets. */
	export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadata {
	}

	/** Metadata for ConversationDatasets. */
	export interface GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2DeleteConversationDatasetOperationMetadataFormProperties>({
		});

	}


	/** Metadata for a ConversationModels.DeleteConversationModel operation. */
	export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel?: string | null;

		/** Timestamp when delete conversation model request was created. The time is measured on server side. */
		createTime?: string | null;
	}

	/** Metadata for a ConversationModels.DeleteConversationModel operation. */
	export interface GoogleCloudDialogflowV2DeleteConversationModelOperationMetadataFormProperties {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel: FormControl<string | null | undefined>,

		/** Timestamp when delete conversation model request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2DeleteConversationModelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2DeleteConversationModelOperationMetadataFormProperties>({
			conversationModel: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationModels.DeployConversationModel operation. */
	export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadata {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel?: string | null;

		/** Timestamp when request to deploy conversation model was submitted. The time is measured on server side. */
		createTime?: string | null;
	}

	/** Metadata for a ConversationModels.DeployConversationModel operation. */
	export interface GoogleCloudDialogflowV2DeployConversationModelOperationMetadataFormProperties {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel: FormControl<string | null | undefined>,

		/** Timestamp when request to deploy conversation model was submitted. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2DeployConversationModelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2DeployConversationModelOperationMetadataFormProperties>({
			conversationModel: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
	export interface GoogleCloudDialogflowV2EventInput {

		/** Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. This field is ignored when used in the context of a WebhookResponse.followup_event_input field, because the language was already defined in the originating detect intent request. */
		languageCode?: string | null;

		/** Required. The unique identifier of the event. */
		name?: string | null;

		/** The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };
	}

	/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
	export interface GoogleCloudDialogflowV2EventInputFormProperties {

		/** Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. This field is ignored when used in the context of a WebhookResponse.followup_event_input field, because the language was already defined in the originating detect intent request. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The unique identifier of the event. */
		name: FormControl<string | null | undefined>,

		/** The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2EventInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2EventInputFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowV2ExportAgentResponse {

		/** Zip compressed raw byte content for agent. */
		agentContent?: string | null;

		/** The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`. */
		agentUri?: string | null;
	}

	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowV2ExportAgentResponseFormProperties {

		/** Zip compressed raw byte content for agent. */
		agentContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`. */
		agentUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ExportAgentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ExportAgentResponseFormProperties>({
			agentContent: new FormControl<string | null | undefined>(undefined),
			agentUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
	export interface GoogleCloudDialogflowV2ExportOperationMetadata {

		/** Google Cloud Storage location for the output. */
		exportedGcsDestination?: GoogleCloudDialogflowV2GcsDestination;
	}

	/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
	export interface GoogleCloudDialogflowV2ExportOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2ExportOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ExportOperationMetadataFormProperties>({
		});

	}


	/** Google Cloud Storage location for the output. */
	export interface GoogleCloudDialogflowV2GcsDestination {

		/** The Google Cloud Storage URIs for the output. A URI is of the form: `gs://bucket/object-prefix-or-name` Whether a prefix or name is used depends on the use case. The requesting user must have "write-permission" to the bucket. */
		uri?: string | null;
	}

	/** Google Cloud Storage location for the output. */
	export interface GoogleCloudDialogflowV2GcsDestinationFormProperties {

		/** The Google Cloud Storage URIs for the output. A URI is of the form: `gs://bucket/object-prefix-or-name` Whether a prefix or name is used depends on the use case. The requesting user must have "write-permission" to the bucket. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents answer from "frequently asked questions". */
	export interface GoogleCloudDialogflowV2FaqAnswer {

		/** The piece of text from the `source` knowledge base document. */
		answer?: string | null;

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The corresponding FAQ question. */
		question?: string | null;

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`. */
		source?: string | null;
	}

	/** Represents answer from "frequently asked questions". */
	export interface GoogleCloudDialogflowV2FaqAnswerFormProperties {

		/** The piece of text from the `source` knowledge base document. */
		answer: FormControl<string | null | undefined>,

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The corresponding FAQ question. */
		question: FormControl<string | null | undefined>,

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2FaqAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2FaqAnswerFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. */
	export interface GoogleCloudDialogflowV2HumanAgentAssistantEvent {

		/** The conversation this notification refers to. Format: `projects//conversations/`. */
		conversation?: string | null;

		/** The participant that the suggestion is compiled for. Format: `projects//conversations//participants/`. It will not be set in legacy workflow. */
		participant?: string | null;

		/** The suggestion results payload that this notification refers to. */
		suggestionResults?: Array<GoogleCloudDialogflowV2SuggestionResult>;
	}

	/** Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation. */
	export interface GoogleCloudDialogflowV2HumanAgentAssistantEventFormProperties {

		/** The conversation this notification refers to. Format: `projects//conversations/`. */
		conversation: FormControl<string | null | undefined>,

		/** The participant that the suggestion is compiled for. Format: `projects//conversations//participants/`. It will not be set in legacy workflow. */
		participant: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2HumanAgentAssistantEventFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2HumanAgentAssistantEventFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			participant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent. */
	export interface GoogleCloudDialogflowV2SuggestionResult {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** The response message for Participants.SuggestArticles. */
		suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;

		/** The request message for Participants.SuggestFaqAnswers. */
		suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

		/** The response message for Participants.SuggestSmartReplies. */
		suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
	}

	/** One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent. */
	export interface GoogleCloudDialogflowV2SuggestionResultFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2SuggestionResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SuggestionResultFormProperties>({
		});

	}


	/** The response message for Participants.SuggestArticles. */
	export interface GoogleCloudDialogflowV2SuggestArticlesResponse {

		/** Articles ordered by score in descending order. */
		articleAnswers?: Array<GoogleCloudDialogflowV2ArticleAnswer>;

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;
	}

	/** The response message for Participants.SuggestArticles. */
	export interface GoogleCloudDialogflowV2SuggestArticlesResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SuggestArticlesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SuggestArticlesResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Participants.SuggestFaqAnswers. */
	export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponse {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** Answers extracted from FAQ documents. */
		faqAnswers?: Array<GoogleCloudDialogflowV2FaqAnswer>;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;
	}

	/** The request message for Participants.SuggestFaqAnswers. */
	export interface GoogleCloudDialogflowV2SuggestFaqAnswersResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SuggestFaqAnswersResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SuggestFaqAnswersResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Participants.SuggestSmartReplies. */
	export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponse {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;

		/** Output only. Multiple reply options provided by smart reply service. The order is based on the rank of the model prediction. The maximum number of the returned replies is set in SmartReplyConfig. */
		smartReplyAnswers?: Array<GoogleCloudDialogflowV2SmartReplyAnswer>;
	}

	/** The response message for Participants.SuggestSmartReplies. */
	export interface GoogleCloudDialogflowV2SuggestSmartRepliesResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SuggestSmartRepliesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SuggestSmartRepliesResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a smart reply answer. */
	export interface GoogleCloudDialogflowV2SmartReplyAnswer {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/**
		 * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** The content of the reply. */
		reply?: string | null;
	}

	/** Represents a smart reply answer. */
	export interface GoogleCloudDialogflowV2SmartReplyAnswerFormProperties {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/**
		 * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The content of the reply. */
		reply: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SmartReplyAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SmartReplyAnswerFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			reply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationDatasets.ImportConversationData operation. */
	export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadata {

		/** The resource name of the imported conversation dataset. Format: `projects//locations//conversationDatasets/` */
		conversationDataset?: string | null;

		/** Timestamp when import conversation data request was created. The time is measured on server side. */
		createTime?: string | null;

		/** Partial failures are failures that don't fail the whole long running operation, e.g. single files that couldn't be read. */
		partialFailures?: Array<GoogleRpcStatus>;
	}

	/** Metadata for a ConversationDatasets.ImportConversationData operation. */
	export interface GoogleCloudDialogflowV2ImportConversationDataOperationMetadataFormProperties {

		/** The resource name of the imported conversation dataset. Format: `projects//locations//conversationDatasets/` */
		conversationDataset: FormControl<string | null | undefined>,

		/** Timestamp when import conversation data request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ImportConversationDataOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ImportConversationDataOperationMetadataFormProperties>({
			conversationDataset: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response used for ConversationDatasets.ImportConversationData long running operation. */
	export interface GoogleCloudDialogflowV2ImportConversationDataOperationResponse {

		/** The resource name of the imported conversation dataset. Format: `projects//locations//conversationDatasets/` */
		conversationDataset?: string | null;

		/**
		 * Number of conversations imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount?: number | null;
	}

	/** Response used for ConversationDatasets.ImportConversationData long running operation. */
	export interface GoogleCloudDialogflowV2ImportConversationDataOperationResponseFormProperties {

		/** The resource name of the imported conversation dataset. Format: `projects//locations//conversationDatasets/` */
		conversationDataset: FormControl<string | null | undefined>,

		/**
		 * Number of conversations imported successfully.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		importCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2ImportConversationDataOperationResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ImportConversationDataOperationResponseFormProperties>({
			conversationDataset: new FormControl<string | null | undefined>(undefined),
			importCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV2ImportDocumentsResponse {

		/** Includes details about skipped documents or any other warnings. */
		warnings?: Array<GoogleRpcStatus>;
	}

	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV2ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2ImportDocumentsResponseFormProperties>({
		});

	}


	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV2KnowledgeOperationMetadata {

		/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
		exportOperationMetadata?: GoogleCloudDialogflowV2ExportOperationMetadata;

		/** The name of the knowledge base interacted with during the operation. */
		knowledgeBase?: string | null;

		/** Output only. The current state of this operation. */
		state?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null;
	}

	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV2KnowledgeOperationMetadataFormProperties {

		/** The name of the knowledge base interacted with during the operation. */
		knowledgeBase: FormControl<string | null | undefined>,

		/** Output only. The current state of this operation. */
		state: FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2KnowledgeOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2KnowledgeOperationMetadataFormProperties>({
			knowledgeBase: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>(undefined),
		});

	}


	/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
	export interface GoogleCloudDialogflowV2OriginalDetectIntentRequest {

		/** Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents. */
		payload?: {[id: string]: any };

		/** The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers. */
		source?: string | null;

		/** Optional. The version of the protocol used for this request. This field is AoG-specific. */
		version?: string | null;
	}

	/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
	export interface GoogleCloudDialogflowV2OriginalDetectIntentRequestFormProperties {

		/** Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers. */
		source: FormControl<string | null | undefined>,

		/** Optional. The version of the protocol used for this request. This field is AoG-specific. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2OriginalDetectIntentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2OriginalDetectIntentRequestFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of conversational query or event processing. */
	export interface GoogleCloudDialogflowV2QueryResult {

		/** The action name from the matched intent. */
		action?: string | null;

		/** This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters. */
		allRequiredParamsPresent?: boolean | null;

		/** Indicates whether the conversational query triggers a cancellation for slot filling. For more information, see the [cancel slot filling documentation](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#cancel). */
		cancelsSlotFilling?: boolean | null;

		/** Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors */
		diagnosticInfo?: {[id: string]: any };

		/** The collection of rich messages to present to the user. */
		fulfillmentMessages?: Array<GoogleCloudDialogflowV2IntentMessage>;

		/** The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred. */
		fulfillmentText?: string | null;

		/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
		intent?: GoogleCloudDialogflowV2Intent;

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
		 * Type: float
		 */
		intentDetectionConfidence?: number | null;

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		languageCode?: string | null;

		/** The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query. */
		outputContexts?: Array<GoogleCloudDialogflowV2Context>;

		/** The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };

		/** The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input. */
		queryText?: string | null;

		/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
		sentimentAnalysisResult?: GoogleCloudDialogflowV2SentimentAnalysisResult;

		/**
		 * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
		 * Type: float
		 */
		speechRecognitionConfidence?: number | null;

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response. */
		webhookPayload?: {[id: string]: any };

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response. */
		webhookSource?: string | null;
	}

	/** Represents the result of conversational query or event processing. */
	export interface GoogleCloudDialogflowV2QueryResultFormProperties {

		/** The action name from the matched intent. */
		action: FormControl<string | null | undefined>,

		/** This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters. */
		allRequiredParamsPresent: FormControl<boolean | null | undefined>,

		/** Indicates whether the conversational query triggers a cancellation for slot filling. For more information, see the [cancel slot filling documentation](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#cancel). */
		cancelsSlotFilling: FormControl<boolean | null | undefined>,

		/** Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors */
		diagnosticInfo: FormControl<{[id: string]: any } | null | undefined>,

		/** The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred. */
		fulfillmentText: FormControl<string | null | undefined>,

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
		 * Type: float
		 */
		intentDetectionConfidence: FormControl<number | null | undefined>,

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		languageCode: FormControl<string | null | undefined>,

		/** The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input. */
		queryText: FormControl<string | null | undefined>,

		/**
		 * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
		 * Type: float
		 */
		speechRecognitionConfidence: FormControl<number | null | undefined>,

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response. */
		webhookPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response. */
		webhookSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2QueryResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2QueryResultFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			allRequiredParamsPresent: new FormControl<boolean | null | undefined>(undefined),
			cancelsSlotFilling: new FormControl<boolean | null | undefined>(undefined),
			diagnosticInfo: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			fulfillmentText: new FormControl<string | null | undefined>(undefined),
			intentDetectionConfidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined),
			speechRecognitionConfidence: new FormControl<number | null | undefined>(undefined),
			webhookPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			webhookSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session). */
	export interface GoogleCloudDialogflowV2SessionEntityType {

		/** Required. The collection of entities associated with this session entity type. */
		entities?: Array<GoogleCloudDialogflowV2EntityTypeEntity>;

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode?: GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null;

		/** Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. */
		name?: string | null;
	}

	/** A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session). */
	export interface GoogleCloudDialogflowV2SessionEntityTypeFormProperties {

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode: FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>,

		/** Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SessionEntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SessionEntityTypeFormProperties>({
			entityOverrideMode: new FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationProfile.SetSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadata {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile?: string | null;

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime?: string | null;

		/** Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Required. The type of the suggestion feature to add or update. */
		suggestionFeatureType?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null;
	}

	/** Metadata for a ConversationProfile.SetSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadataFormProperties {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile: FormControl<string | null | undefined>,

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Required. The type of the suggestion feature to add or update. */
		suggestionFeatureType: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2SetSuggestionFeatureConfigOperationMetadataFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			suggestionFeatureType: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationModels.UndeployConversationModel operation. */
	export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadata {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel?: string | null;

		/** Timestamp when the request to undeploy conversation model was submitted. The time is measured on server side. */
		createTime?: string | null;
	}

	/** Metadata for a ConversationModels.UndeployConversationModel operation. */
	export interface GoogleCloudDialogflowV2UndeployConversationModelOperationMetadataFormProperties {

		/** The resource name of the conversation model. Format: `projects//conversationModels/` */
		conversationModel: FormControl<string | null | undefined>,

		/** Timestamp when the request to undeploy conversation model was submitted. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2UndeployConversationModelOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2UndeployConversationModelOperationMetadataFormProperties>({
			conversationModel: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for a webhook call. */
	export interface GoogleCloudDialogflowV2WebhookRequest {

		/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
		originalDetectIntentRequest?: GoogleCloudDialogflowV2OriginalDetectIntentRequest;

		/** Represents the result of conversational query or event processing. */
		queryResult?: GoogleCloudDialogflowV2QueryResult;

		/** The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`. */
		responseId?: string | null;

		/** The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. */
		session?: string | null;
	}

	/** The request message for a webhook call. */
	export interface GoogleCloudDialogflowV2WebhookRequestFormProperties {

		/** The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`. */
		responseId: FormControl<string | null | undefined>,

		/** The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. */
		session: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2WebhookRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2WebhookRequestFormProperties>({
			responseId: new FormControl<string | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json). */
	export interface GoogleCloudDialogflowV2WebhookResponse {

		/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
		followupEventInput?: GoogleCloudDialogflowV2EventInput;

		/** Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller. */
		fulfillmentMessages?: Array<GoogleCloudDialogflowV2IntentMessage>;

		/** Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller. */
		fulfillmentText?: string | null;

		/** Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller. */
		outputContexts?: Array<GoogleCloudDialogflowV2Context>;

		/** Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json) */
		payload?: {[id: string]: any };

		/** Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods. */
		sessionEntityTypes?: Array<GoogleCloudDialogflowV2SessionEntityType>;

		/** Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller. */
		source?: string | null;
	}

	/** The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json). */
	export interface GoogleCloudDialogflowV2WebhookResponseFormProperties {

		/** Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller. */
		fulfillmentText: FormControl<string | null | undefined>,

		/** Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json) */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2WebhookResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2WebhookResponseFormProperties>({
			fulfillmentText: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end. */
	export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePart {

		/** Optional. The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity. */
		entityType?: string | null;

		/** Optional. The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" } */
		formattedValue?: any;

		/** Required. A part of a message possibly annotated with an entity. */
		text?: string | null;
	}

	/** Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end. */
	export interface GoogleCloudDialogflowV2beta1AnnotatedMessagePartFormProperties {

		/** Optional. The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity. */
		entityType: FormControl<string | null | undefined>,

		/** Optional. The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" } */
		formattedValue: FormControl<any | null | undefined>,

		/** Required. A part of a message possibly annotated with an entity. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1AnnotatedMessagePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1AnnotatedMessagePartFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<any | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents article answer. */
	export interface GoogleCloudDialogflowV2beta1ArticleAnswer {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** Output only. Article snippets. */
		snippets?: Array<string>;

		/** The article title. */
		title?: string | null;

		/** The article URI. */
		uri?: string | null;
	}

	/** Represents article answer. */
	export interface GoogleCloudDialogflowV2beta1ArticleAnswerFormProperties {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The article title. */
		title: FormControl<string | null | undefined>,

		/** The article URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1ArticleAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ArticleAnswerFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for EntityTypes.BatchUpdateEntityTypes. */
	export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {

		/** The collection of updated or created entity types. */
		entityTypes?: Array<GoogleCloudDialogflowV2beta1EntityType>;
	}

	/** The response message for EntityTypes.BatchUpdateEntityTypes. */
	export interface GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponseFormProperties>({
		});

	}


	/** Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowV2beta1EntityType {

		/** Optional. Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode?: GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null;

		/** Required. The name of the entity type. */
		displayName?: string | null;

		/** Optional. Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction?: boolean | null;

		/** Optional. The collection of entity entries associated with the entity type. */
		entities?: Array<GoogleCloudDialogflowV2beta1EntityTypeEntity>;

		/** Required. Indicates the kind of entity type. */
		kind?: GoogleCloudDialogflowCxV3beta1EntityTypeKind | null;

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/` */
		name?: string | null;
	}

	/** Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview). */
	export interface GoogleCloudDialogflowV2beta1EntityTypeFormProperties {

		/** Optional. Indicates whether the entity type can be automatically expanded. */
		autoExpansionMode: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>,

		/** Required. The name of the entity type. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Enables fuzzy entity extraction during classification. */
		enableFuzzyExtraction: FormControl<boolean | null | undefined>,

		/** Required. Indicates the kind of entity type. */
		kind: FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>,

		/** The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1EntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1EntityTypeFormProperties>({
			autoExpansionMode: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeAutoExpansionMode | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableFuzzyExtraction: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<GoogleCloudDialogflowCxV3beta1EntityTypeKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowV2beta1EntityTypeEntity {

		/** Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`. */
		synonyms?: Array<string>;

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value?: string | null;
	}

	/** An **entity entry** for an associated entity type. */
	export interface GoogleCloudDialogflowV2beta1EntityTypeEntityFormProperties {

		/** Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1EntityTypeEntityFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1EntityTypeEntityFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Intents.BatchUpdateIntents. */
	export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {

		/** The collection of updated or created intents. */
		intents?: Array<GoogleCloudDialogflowV2beta1Intent>;
	}

	/** The response message for Intents.BatchUpdateIntents. */
	export interface GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1BatchUpdateIntentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponseFormProperties>({
		});

	}


	/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
	export interface GoogleCloudDialogflowV2beta1Intent {

		/** Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces. */
		action?: string | null;

		/** Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). */
		defaultResponsePlatforms?: Array<string>;

		/** Required. The name of this intent. */
		displayName?: string | null;

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction?: boolean | null;

		/** Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters. */
		events?: Array<string>;

		/** Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output. */
		followupIntentInfo?: Array<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo>;

		/** Optional. The list of context names required for this intent to be triggered. Formats: - `projects//agent/sessions/-/contexts/` - `projects//locations//agent/sessions/-/contexts/` */
		inputContextNames?: Array<string>;

		/** Optional. Indicates whether this is a fallback intent. */
		isFallback?: boolean | null;

		/** Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff?: boolean | null;

		/** Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console. */
		messages?: Array<GoogleCloudDialogflowV2beta1IntentMessage>;

		/** Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. */
		mlDisabled?: boolean | null;

		/** Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is: ml_enabled = true / ml_disabled = false. */
		mlEnabled?: boolean | null;

		/** Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/` */
		name?: string | null;

		/** Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`. */
		outputContexts?: Array<GoogleCloudDialogflowV2beta1Context>;

		/** Optional. The collection of parameters associated with the intent. */
		parameters?: Array<GoogleCloudDialogflowV2beta1IntentParameter>;

		/** Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName?: string | null;

		/**
		 * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Optional. Indicates whether to delete all contexts in the current session when this intent is matched. */
		resetContexts?: boolean | null;

		/** Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects//agent/intents/`. */
		rootFollowupIntentName?: string | null;

		/** Optional. The collection of examples that the agent is trained on. */
		trainingPhrases?: Array<GoogleCloudDialogflowV2beta1IntentTrainingPhrase>;

		/** Optional. Indicates whether webhooks are enabled for the intent. */
		webhookState?: GoogleCloudDialogflowV2IntentWebhookState | null;
	}

	/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
	export interface GoogleCloudDialogflowV2beta1IntentFormProperties {

		/** Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces. */
		action: FormControl<string | null | undefined>,

		/** Required. The name of this intent. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether this is a fallback intent. */
		isFallback: FormControl<boolean | null | undefined>,

		/** Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. */
		mlDisabled: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is: ml_enabled = true / ml_disabled = false. */
		mlEnabled: FormControl<boolean | null | undefined>,

		/** Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/` */
		name: FormControl<string | null | undefined>,

		/** Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName: FormControl<string | null | undefined>,

		/**
		 * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Optional. Indicates whether to delete all contexts in the current session when this intent is matched. */
		resetContexts: FormControl<boolean | null | undefined>,

		/** Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects//agent/intents/`. */
		rootFollowupIntentName: FormControl<string | null | undefined>,

		/** Optional. Indicates whether webhooks are enabled for the intent. */
		webhookState: FormControl<GoogleCloudDialogflowV2IntentWebhookState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endInteraction: new FormControl<boolean | null | undefined>(undefined),
			isFallback: new FormControl<boolean | null | undefined>(undefined),
			liveAgentHandoff: new FormControl<boolean | null | undefined>(undefined),
			mlDisabled: new FormControl<boolean | null | undefined>(undefined),
			mlEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentFollowupIntentName: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			resetContexts: new FormControl<boolean | null | undefined>(undefined),
			rootFollowupIntentName: new FormControl<string | null | undefined>(undefined),
			webhookState: new FormControl<GoogleCloudDialogflowV2IntentWebhookState | null | undefined>(undefined),
		});

	}


	/** Represents a single followup intent in the chain. */
	export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {

		/** The unique identifier of the followup intent. Format: `projects//agent/intents/`. */
		followupIntentName?: string | null;

		/** The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName?: string | null;
	}

	/** Represents a single followup intent in the chain. */
	export interface GoogleCloudDialogflowV2beta1IntentFollowupIntentInfoFormProperties {

		/** The unique identifier of the followup intent. Format: `projects//agent/intents/`. */
		followupIntentName: FormControl<string | null | undefined>,

		/** The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`. */
		parentFollowupIntentName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentFollowupIntentInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentFollowupIntentInfoFormProperties>({
			followupIntentName: new FormControl<string | null | undefined>(undefined),
			parentFollowupIntentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Corresponds to the `Response` field in the Dialogflow console. */
	export interface GoogleCloudDialogflowV2beta1IntentMessage {

		/** The basic card message. Useful for displaying information. */
		basicCard?: GoogleCloudDialogflowV2beta1IntentMessageBasicCard;

		/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
		browseCarouselCard?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;

		/** The card response message. */
		card?: GoogleCloudDialogflowV2beta1IntentMessageCard;

		/** The card for presenting a carousel of options to select from. */
		carouselSelect?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
		linkOutSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;

		/** The card for presenting a list of options to select from. */
		listSelect?: GoogleCloudDialogflowV2beta1IntentMessageListSelect;

		/** The media content card for Actions on Google. */
		mediaContent?: GoogleCloudDialogflowV2beta1IntentMessageMediaContent;

		/** A custom platform-specific response. */
		payload?: {[id: string]: any };

		/** Optional. The platform that this message is intended for. */
		platform?: GoogleCloudDialogflowV2beta1IntentMessagePlatform | null;

		/** The quick replies response message. */
		quickReplies?: GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;

		/** Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead. */
		rbmCarouselRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;

		/** Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout. */
		rbmStandaloneRichCard?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;

		/** Rich Business Messaging (RBM) text response with suggestions. */
		rbmText?: GoogleCloudDialogflowV2beta1IntentMessageRbmText;

		/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
		simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;

		/** The collection of suggestions. */
		suggestions?: GoogleCloudDialogflowV2beta1IntentMessageSuggestions;

		/** Table card for Actions on Google. */
		tableCard?: GoogleCloudDialogflowV2beta1IntentMessageTableCard;

		/** Plays audio from a file in Telephony Gateway. */
		telephonyPlayAudio?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;

		/** Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config. */
		telephonySynthesizeSpeech?: GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;

		/** Transfers the call in Telephony Gateway. */
		telephonyTransferCall?: GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;

		/** The text response message. */
		text?: GoogleCloudDialogflowV2beta1IntentMessageText;
	}

	/** Corresponds to the `Response` field in the Dialogflow console. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageFormProperties {

		/** A custom platform-specific response. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. The platform that this message is intended for. */
		platform: FormControl<GoogleCloudDialogflowV2beta1IntentMessagePlatform | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			platform: new FormControl<GoogleCloudDialogflowV2beta1IntentMessagePlatform | null | undefined>(undefined),
		});

	}


	/** The basic card message. Useful for displaying information. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCard {

		/** Optional. The collection of card buttons. */
		buttons?: Array<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;

		/** Required, unless image is present. The body text of the card. */
		formattedText?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Optional. The subtitle of the card. */
		subtitle?: string | null;

		/** Optional. The title of the card. */
		title?: string | null;
	}

	/** The basic card message. Useful for displaying information. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardFormProperties {

		/** Required, unless image is present. The body text of the card. */
		formattedText: FormControl<string | null | undefined>,

		/** Optional. The subtitle of the card. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBasicCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBasicCardFormProperties>({
			formattedText: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The button object that appears at the bottom of a card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {

		/** Opens the given URI. */
		openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;

		/** Required. The title of the button. */
		title?: string | null;
	}

	/** The button object that appears at the bottom of a card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonFormProperties {

		/** Required. The title of the button. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Opens the given URI. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {

		/** Required. The HTTP or HTTPS scheme URI. */
		uri?: string | null;
	}

	/** Opens the given URI. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriActionFormProperties {

		/** Required. The HTTP or HTTPS scheme URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriActionFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageImage {

		/** A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect. */
		accessibilityText?: string | null;

		/** Optional. The public URI to an image file. */
		imageUri?: string | null;
	}

	/** The image response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageImageFormProperties {

		/** A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect. */
		accessibilityText: FormControl<string | null | undefined>,

		/** Optional. The public URI to an image file. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageImageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageImageFormProperties>({
			accessibilityText: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard {

		/** Optional. Settings for displaying the image. Applies to every image in items. */
		imageDisplayOptions?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null;

		/** Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten. */
		items?: Array<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem>;
	}

	/** Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardFormProperties {

		/** Optional. Settings for displaying the image. Applies to every image in items. */
		imageDisplayOptions: FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardFormProperties>({
			imageDisplayOptions: new FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptions | null | undefined>(undefined),
		});

	}


	/** Browsing carousel tile */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {

		/** Optional. Description of the carousel item. Maximum of four lines of text. */
		description?: string | null;

		/** Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text. */
		footer?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Actions on Google action to open a given url. */
		openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;

		/** Required. Title of the carousel item. Maximum of two lines of text. */
		title?: string | null;
	}

	/** Browsing carousel tile */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormProperties {

		/** Optional. Description of the carousel item. Maximum of four lines of text. */
		description: FormControl<string | null | undefined>,

		/** Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text. */
		footer: FormControl<string | null | undefined>,

		/** Required. Title of the carousel item. Maximum of two lines of text. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			footer: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Actions on Google action to open a given url. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {

		/** Required. URL */
		url?: string | null;

		/** Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser. */
		urlTypeHint?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null;
	}

	/** Actions on Google action to open a given url. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormProperties {

		/** Required. URL */
		url: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser. */
		urlTypeHint: FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			urlTypeHint: new FormControl<GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHint | null | undefined>(undefined),
		});

	}


	/** The card response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCard {

		/** Optional. The collection of card buttons. */
		buttons?: Array<GoogleCloudDialogflowV2beta1IntentMessageCardButton>;

		/** Optional. The public URI to an image file for the card. */
		imageUri?: string | null;

		/** Optional. The subtitle of the card. */
		subtitle?: string | null;

		/** Optional. The title of the card. */
		title?: string | null;
	}

	/** The card response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCardFormProperties {

		/** Optional. The public URI to an image file for the card. */
		imageUri: FormControl<string | null | undefined>,

		/** Optional. The subtitle of the card. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageCardFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Optional. Contains information about a button. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCardButton {

		/** Optional. The text to send back to the Dialogflow API or a URI to open. */
		postback?: string | null;

		/** Optional. The text to show on the button. */
		text?: string | null;
	}

	/** Optional. Contains information about a button. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCardButtonFormProperties {

		/** Optional. The text to send back to the Dialogflow API or a URI to open. */
		postback: FormControl<string | null | undefined>,

		/** Optional. The text to show on the button. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageCardButtonFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageCardButtonFormProperties>({
			postback: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The card for presenting a carousel of options to select from. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {

		/** Required. Carousel items. */
		items?: Array<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem>;
	}

	/** The card for presenting a carousel of options to select from. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageCarouselSelectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectFormProperties>({
		});

	}


	/** An item in the carousel. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {

		/** Optional. The body text of the card. */
		description?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Additional info about the select item for when it is triggered in a dialog. */
		info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;

		/** Required. Title of the carousel item. */
		title?: string | null;
	}

	/** An item in the carousel. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItemFormProperties {

		/** Optional. The body text of the card. */
		description: FormControl<string | null | undefined>,

		/** Required. Title of the carousel item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional info about the select item for when it is triggered in a dialog. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {

		/** Required. A unique key that will be sent back to the agent if this response is given. */
		key?: string | null;

		/** Optional. A list of synonyms that can also be used to trigger this item in dialog. */
		synonyms?: Array<string>;
	}

	/** Additional info about the select item for when it is triggered in a dialog. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfoFormProperties {

		/** Required. A unique key that will be sent back to the agent if this response is given. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageSelectItemInfoFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfoFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {

		/** Required. The name of the app or site this chip is linking to. */
		destinationName?: string | null;

		/** Required. The URI of the app or site to open when the user taps the suggestion chip. */
		uri?: string | null;
	}

	/** The suggestion chip message that allows the user to jump out to the app or website associated with this agent. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestionFormProperties {

		/** Required. The name of the app or site this chip is linking to. */
		destinationName: FormControl<string | null | undefined>,

		/** Required. The URI of the app or site to open when the user taps the suggestion chip. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestionFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The card for presenting a list of options to select from. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageListSelect {

		/** Required. List items. */
		items?: Array<GoogleCloudDialogflowV2beta1IntentMessageListSelectItem>;

		/** Optional. Subtitle of the list. */
		subtitle?: string | null;

		/** Optional. The overall title of the list. */
		title?: string | null;
	}

	/** The card for presenting a list of options to select from. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectFormProperties {

		/** Optional. Subtitle of the list. */
		subtitle: FormControl<string | null | undefined>,

		/** Optional. The overall title of the list. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageListSelectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageListSelectFormProperties>({
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item in the list. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {

		/** Optional. The main text describing the item. */
		description?: string | null;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Additional info about the select item for when it is triggered in a dialog. */
		info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;

		/** Required. The title of the list item. */
		title?: string | null;
	}

	/** An item in the list. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageListSelectItemFormProperties {

		/** Optional. The main text describing the item. */
		description: FormControl<string | null | undefined>,

		/** Required. The title of the list item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageListSelectItemFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageListSelectItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The media content card for Actions on Google. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContent {

		/** Required. List of media objects. */
		mediaObjects?: Array<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject>;

		/** Optional. What type of media is the content (ie "audio"). */
		mediaType?: GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null;
	}

	/** The media content card for Actions on Google. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentFormProperties {

		/** Optional. What type of media is the content (ie "audio"). */
		mediaType: FormControl<GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageMediaContentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageMediaContentFormProperties>({
			mediaType: new FormControl<GoogleCloudDialogflowV2IntentMessageMediaContentMediaType | null | undefined>(undefined),
		});

	}


	/** Response media object for media content card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {

		/** Required. Url where the media is stored. */
		contentUrl?: string | null;

		/** Optional. Description of media card. */
		description?: string | null;

		/** The image response message. */
		icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** The image response message. */
		largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Required. Name of media card. */
		name?: string | null;
	}

	/** Response media object for media content card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObjectFormProperties {

		/** Required. Url where the media is stored. */
		contentUrl: FormControl<string | null | undefined>,

		/** Optional. Description of media card. */
		description: FormControl<string | null | undefined>,

		/** Required. Name of media card. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObjectFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObjectFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1IntentMessagePlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', FACEBOOK = 'FACEBOOK', SLACK = 'SLACK', TELEGRAM = 'TELEGRAM', KIK = 'KIK', SKYPE = 'SKYPE', LINE = 'LINE', VIBER = 'VIBER', ACTIONS_ON_GOOGLE = 'ACTIONS_ON_GOOGLE', TELEPHONY = 'TELEPHONY', GOOGLE_HANGOUTS = 'GOOGLE_HANGOUTS' }


	/** The quick replies response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {

		/** Optional. The collection of quick replies. */
		quickReplies?: Array<string>;

		/** Optional. The title of the collection of quick replies. */
		title?: string | null;
	}

	/** The quick replies response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageQuickRepliesFormProperties {

		/** Optional. The title of the collection of quick replies. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageQuickRepliesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageQuickRepliesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {

		/** Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10. */
		cardContents?: Array<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent>;

		/** Required. The width of the cards in the carousel. */
		cardWidth?: GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidth | null;
	}

	/** Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardFormProperties {

		/** Required. The width of the cards in the carousel. */
		cardWidth: FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidth | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardFormProperties>({
			cardWidth: new FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidth | null | undefined>(undefined),
		});

	}


	/** Rich Business Messaging (RBM) Card content */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {

		/** Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set. */
		description?: string | null;

		/** Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm */
		media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;

		/** Optional. List of suggestions to include in the card. */
		suggestions?: Array<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;

		/** Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set. */
		title?: string | null;
	}

	/** Rich Business Messaging (RBM) Card content */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentFormProperties {

		/** Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set. */
		description: FormControl<string | null | undefined>,

		/** Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmCardContentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {

		/** Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. */
		fileUri?: string | null;

		/** Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored. */
		height?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeight | null;

		/** Optional. Publicly reachable URI of the thumbnail.If you don't provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user's device downloads the file. Depending on the user's setting, the file may not download automatically and may require the user to tap a download button. */
		thumbnailUri?: string | null;
	}

	/** Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaFormProperties {

		/** Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. */
		fileUri: FormControl<string | null | undefined>,

		/** Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored. */
		height: FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeight | null | undefined>,

		/** Optional. Publicly reachable URI of the thumbnail.If you don't provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user's device downloads the file. Depending on the user's setting, the file may not download automatically and may require the user to tap a download button. */
		thumbnailUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaFormProperties>({
			fileUri: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeight | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeight { HEIGHT_UNSPECIFIED = 'HEIGHT_UNSPECIFIED', SHORT = 'SHORT', MEDIUM = 'MEDIUM', TALL = 'TALL' }


	/** Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri). */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {

		/** Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card. */
		action?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;

		/** Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response. */
		reply?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
	}

	/** Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri). */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestionFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestionFormProperties>({
		});

	}


	/** Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {

		/** Opens the user's default dialer app with the specified phone number but does not dial automatically. */
		dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;

		/** Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI. */
		openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;

		/** Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic. */
		postbackData?: string | null;

		/** Opens the device's location chooser so the user can pick a location to send back to the agent. */
		shareLocation?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;

		/** Text to display alongside the action. */
		text?: string | null;
	}

	/** Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionFormProperties {

		/** Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic. */
		postbackData: FormControl<string | null | undefined>,

		/** Text to display alongside the action. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionFormProperties>({
			postbackData: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Opens the user's default dialer app with the specified phone number but does not dial automatically. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {

		/** Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888. */
		phoneNumber?: string | null;
	}

	/** Opens the user's default dialer app with the specified phone number but does not dial automatically. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDialFormProperties {

		/** Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDialFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDialFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {

		/** Required. The uri to open on the user device */
		uri?: string | null;
	}

	/** Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUriFormProperties {

		/** Required. The uri to open on the user device */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUriFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUriFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Opens the device's location chooser so the user can pick a location to send back to the agent. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {
	}

	/** Opens the device's location chooser so the user can pick a location to send back to the agent. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocationFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocationFormProperties>({
		});

	}


	/** Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {

		/** Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic. */
		postbackData?: string | null;

		/** Suggested reply text. */
		text?: string | null;
	}

	/** Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReplyFormProperties {

		/** Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic. */
		postbackData: FormControl<string | null | undefined>,

		/** Suggested reply text. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReplyFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReplyFormProperties>({
			postbackData: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidth { CARD_WIDTH_UNSPECIFIED = 'CARD_WIDTH_UNSPECIFIED', SMALL = 'SMALL', MEDIUM = 'MEDIUM' }


	/** Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {

		/** Rich Business Messaging (RBM) Card content */
		cardContent?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;

		/** Required. Orientation of the card. */
		cardOrientation?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientation | null;

		/** Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout. */
		thumbnailImageAlignment?: GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignment | null;
	}

	/** Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardFormProperties {

		/** Required. Orientation of the card. */
		cardOrientation: FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientation | null | undefined>,

		/** Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout. */
		thumbnailImageAlignment: FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignment | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardFormProperties>({
			cardOrientation: new FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientation | null | undefined>(undefined),
			thumbnailImageAlignment: new FormControl<GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignment | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientation { CARD_ORIENTATION_UNSPECIFIED = 'CARD_ORIENTATION_UNSPECIFIED', HORIZONTAL = 'HORIZONTAL', VERTICAL = 'VERTICAL' }

	export enum GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignment { THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED = 'THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED', LEFT = 'LEFT', RIGHT = 'RIGHT' }


	/** Rich Business Messaging (RBM) text response with suggestions. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmText {

		/** Optional. One or more suggestions to show to the user. */
		rbmSuggestion?: Array<GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion>;

		/** Required. Text sent and displayed to the user. */
		text?: string | null;
	}

	/** Rich Business Messaging (RBM) text response with suggestions. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageRbmTextFormProperties {

		/** Required. Text sent and displayed to the user. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageRbmTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageRbmTextFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {

		/** Required. The list of simple responses. */
		simpleResponses?: Array<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse>;
	}

	/** The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponsesFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageSimpleResponsesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponsesFormProperties>({
		});

	}


	/** The simple response message containing speech or text. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {

		/** Optional. The text to display. */
		displayText?: string | null;

		/** One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech. */
		ssml?: string | null;

		/** One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml. */
		textToSpeech?: string | null;
	}

	/** The simple response message containing speech or text. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSimpleResponseFormProperties {

		/** Optional. The text to display. */
		displayText: FormControl<string | null | undefined>,

		/** One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech. */
		ssml: FormControl<string | null | undefined>,

		/** One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml. */
		textToSpeech: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageSimpleResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageSimpleResponseFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			ssml: new FormControl<string | null | undefined>(undefined),
			textToSpeech: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of suggestions. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestions {

		/** Required. The list of suggested replies. */
		suggestions?: Array<GoogleCloudDialogflowV2beta1IntentMessageSuggestion>;
	}

	/** The collection of suggestions. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestionsFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageSuggestionsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageSuggestionsFormProperties>({
		});

	}


	/** The suggestion chip message that the user can tap to quickly post a reply to the conversation. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestion {

		/** Required. The text shown the in the suggestion chip. */
		title?: string | null;
	}

	/** The suggestion chip message that the user can tap to quickly post a reply to the conversation. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageSuggestionFormProperties {

		/** Required. The text shown the in the suggestion chip. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageSuggestionFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Table card for Actions on Google. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCard {

		/** Optional. List of buttons for the card. */
		buttons?: Array<GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton>;

		/** Optional. Display properties for the columns in this table. */
		columnProperties?: Array<GoogleCloudDialogflowV2beta1IntentMessageColumnProperties>;

		/** The image response message. */
		image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

		/** Optional. Rows in this table of data. */
		rows?: Array<GoogleCloudDialogflowV2beta1IntentMessageTableCardRow>;

		/** Optional. Subtitle to the title. */
		subtitle?: string | null;

		/** Required. Title of the card. */
		title?: string | null;
	}

	/** Table card for Actions on Google. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardFormProperties {

		/** Optional. Subtitle to the title. */
		subtitle: FormControl<string | null | undefined>,

		/** Required. Title of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTableCardFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTableCardFormProperties>({
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Column properties for TableCard. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {

		/** Required. Column heading. */
		header?: string | null;

		/** Optional. Defines text alignment for all cells in this column. */
		horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null;
	}

	/** Column properties for TableCard. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesFormProperties {

		/** Required. Column heading. */
		header: FormControl<string | null | undefined>,

		/** Optional. Defines text alignment for all cells in this column. */
		horizontalAlignment: FormControl<GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesFormProperties>({
			header: new FormControl<string | null | undefined>(undefined),
			horizontalAlignment: new FormControl<GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignment | null | undefined>(undefined),
		});

	}


	/** Row of TableCard. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {

		/** Optional. List of cells that make up this row. */
		cells?: Array<GoogleCloudDialogflowV2beta1IntentMessageTableCardCell>;

		/** Optional. Whether to add a visual divider after this row. */
		dividerAfter?: boolean | null;
	}

	/** Row of TableCard. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardRowFormProperties {

		/** Optional. Whether to add a visual divider after this row. */
		dividerAfter: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTableCardRowFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTableCardRowFormProperties>({
			dividerAfter: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Cell of TableCardRow. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {

		/** Required. Text in this cell. */
		text?: string | null;
	}

	/** Cell of TableCardRow. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTableCardCellFormProperties {

		/** Required. Text in this cell. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTableCardCellFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTableCardCellFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Plays audio from a file in Telephony Gateway. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {

		/** Required. URI to a Google Cloud Storage object containing the audio to play, e.g., "gs://bucket/object". The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML. */
		audioUri?: string | null;
	}

	/** Plays audio from a file in Telephony Gateway. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudioFormProperties {

		/** Required. URI to a Google Cloud Storage object containing the audio to play, e.g., "gs://bucket/object". The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML. */
		audioUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudioFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudioFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {

		/** The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml). */
		ssml?: string | null;

		/** The raw text to be synthesized. */
		text?: string | null;
	}

	/** Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeechFormProperties {

		/** The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml). */
		ssml: FormControl<string | null | undefined>,

		/** The raw text to be synthesized. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeechFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeechFormProperties>({
			ssml: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Transfers the call in Telephony Gateway. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {

		/** Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz). */
		phoneNumber?: string | null;
	}

	/** Transfers the call in Telephony Gateway. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCallFormProperties {

		/** Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz). */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCallFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCallFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The text response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageText {

		/** Optional. The collection of the agent's responses. */
		text?: Array<string>;
	}

	/** The text response message. */
	export interface GoogleCloudDialogflowV2beta1IntentMessageTextFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentMessageTextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentMessageTextFormProperties>({
		});

	}


	/** Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview). */
	export interface GoogleCloudDialogflowV2beta1Context {

		/**
		 * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lifespanCount?: number | null;

		/** Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` */
		name?: string | null;

		/** Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };
	}

	/** Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview). */
	export interface GoogleCloudDialogflowV2beta1ContextFormProperties {

		/**
		 * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lifespanCount: FormControl<number | null | undefined>,

		/** Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` */
		name: FormControl<string | null | undefined>,

		/** Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1ContextFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ContextFormProperties>({
			lifespanCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Represents intent parameters. */
	export interface GoogleCloudDialogflowV2beta1IntentParameter {

		/** Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`. */
		defaultValue?: string | null;

		/** Required. The name of the parameter. */
		displayName?: string | null;

		/** Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided. */
		entityTypeDisplayName?: string | null;

		/** Optional. Indicates whether the parameter represents a list of values. */
		isList?: boolean | null;

		/** Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value. */
		mandatory?: boolean | null;

		/** The unique identifier of this parameter. */
		name?: string | null;

		/** Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter. */
		prompts?: Array<string>;

		/** Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`. */
		value?: string | null;
	}

	/** Represents intent parameters. */
	export interface GoogleCloudDialogflowV2beta1IntentParameterFormProperties {

		/** Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`. */
		defaultValue: FormControl<string | null | undefined>,

		/** Required. The name of the parameter. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided. */
		entityTypeDisplayName: FormControl<string | null | undefined>,

		/** Optional. Indicates whether the parameter represents a list of values. */
		isList: FormControl<boolean | null | undefined>,

		/** Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value. */
		mandatory: FormControl<boolean | null | undefined>,

		/** The unique identifier of this parameter. */
		name: FormControl<string | null | undefined>,

		/** Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentParameterFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentParameterFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityTypeDisplayName: new FormControl<string | null | undefined>(undefined),
			isList: new FormControl<boolean | null | undefined>(undefined),
			mandatory: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an example that the agent is trained on. */
	export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrase {

		/** Output only. The unique identifier of this training phrase. */
		name?: string | null;

		/** Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set. */
		parts?: Array<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart>;

		/**
		 * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timesAddedCount?: number | null;

		/** Required. The type of the training phrase. */
		type?: GoogleCloudDialogflowV2IntentTrainingPhraseType | null;
	}

	/** Represents an example that the agent is trained on. */
	export interface GoogleCloudDialogflowV2beta1IntentTrainingPhraseFormProperties {

		/** Output only. The unique identifier of this training phrase. */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timesAddedCount: FormControl<number | null | undefined>,

		/** Required. The type of the training phrase. */
		type: FormControl<GoogleCloudDialogflowV2IntentTrainingPhraseType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentTrainingPhraseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentTrainingPhraseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			timesAddedCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowV2IntentTrainingPhraseType | null | undefined>(undefined),
		});

	}


	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {

		/** Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase. */
		alias?: string | null;

		/** Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase. */
		entityType?: string | null;

		/** Required. The text for this part. */
		text?: string | null;

		/** Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true. */
		userDefined?: boolean | null;
	}

	/** Represents a part of a training phrase. */
	export interface GoogleCloudDialogflowV2beta1IntentTrainingPhrasePartFormProperties {

		/** Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase. */
		alias: FormControl<string | null | undefined>,

		/** Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase. */
		entityType: FormControl<string | null | undefined>,

		/** Required. The text for this part. */
		text: FormControl<string | null | undefined>,

		/** Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true. */
		userDefined: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentTrainingPhrasePartFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentTrainingPhrasePartFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			userDefined: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationProfile.ClearSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadata {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile?: string | null;

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime?: string | null;

		/** Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Required. The type of the suggestion feature to remove. */
		suggestionFeatureType?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null;
	}

	/** Metadata for a ConversationProfile.ClearSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataFormProperties {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile: FormControl<string | null | undefined>,

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Required. The type of the suggestion feature to remove. */
		suggestionFeatureType: FormControl<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			suggestionFeatureType: new FormControl<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', ARTICLE_SUGGESTION = 'ARTICLE_SUGGESTION', FAQ = 'FAQ', SMART_REPLY = 'SMART_REPLY', DIALOGFLOW_ASSIST = 'DIALOGFLOW_ASSIST', CONVERSATION_SUMMARIZATION = 'CONVERSATION_SUMMARIZATION', KNOWLEDGE_SEARCH = 'KNOWLEDGE_SEARCH' }


	/** Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events. */
	export interface GoogleCloudDialogflowV2beta1ConversationEvent {

		/** Required. The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`. */
		conversation?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		errorStatus?: GoogleRpcStatus;

		/** Represents a message posted into a conversation. */
		newMessagePayload?: GoogleCloudDialogflowV2beta1Message;

		/** Required. The type of the event that this notification refers to. */
		type?: GoogleCloudDialogflowV2ConversationEventType | null;
	}

	/** Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events. */
	export interface GoogleCloudDialogflowV2beta1ConversationEventFormProperties {

		/** Required. The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`. */
		conversation: FormControl<string | null | undefined>,

		/** Required. The type of the event that this notification refers to. */
		type: FormControl<GoogleCloudDialogflowV2ConversationEventType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1ConversationEventFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ConversationEventFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDialogflowV2ConversationEventType | null | undefined>(undefined),
		});

	}


	/** Represents a message posted into a conversation. */
	export interface GoogleCloudDialogflowV2beta1Message {

		/** Required. The message content. */
		content?: string | null;

		/** Output only. The time when the message was created in Contact Center AI. */
		createTime?: string | null;

		/** Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode?: string | null;

		/** Represents the result of annotation for the message. */
		messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;

		/** Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`. */
		name?: string | null;

		/** Output only. The participant that sends this message. */
		participant?: string | null;

		/** Output only. The role of the participant. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Optional. The time when the message was sent. */
		sendTime?: string | null;

		/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
		sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
	}

	/** Represents a message posted into a conversation. */
	export interface GoogleCloudDialogflowV2beta1MessageFormProperties {

		/** Required. The message content. */
		content: FormControl<string | null | undefined>,

		/** Output only. The time when the message was created in Contact Center AI. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The participant that sends this message. */
		participant: FormControl<string | null | undefined>,

		/** Output only. The role of the participant. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Optional. The time when the message was sent. */
		sendTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1MessageFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			participant: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			sendTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of annotation for the message. */
	export interface GoogleCloudDialogflowV2beta1MessageAnnotation {

		/** Required. Indicates whether the text message contains entities. */
		containEntities?: boolean | null;

		/** Optional. The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text]. */
		parts?: Array<GoogleCloudDialogflowV2beta1AnnotatedMessagePart>;
	}

	/** Represents the result of annotation for the message. */
	export interface GoogleCloudDialogflowV2beta1MessageAnnotationFormProperties {

		/** Required. Indicates whether the text message contains entities. */
		containEntities: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1MessageAnnotationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1MessageAnnotationFormProperties>({
			containEntities: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
	export interface GoogleCloudDialogflowV2beta1SentimentAnalysisResult {

		/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
		queryTextSentiment?: GoogleCloudDialogflowV2beta1Sentiment;
	}

	/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
	export interface GoogleCloudDialogflowV2beta1SentimentAnalysisResultFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1SentimentAnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SentimentAnalysisResultFormProperties>({
		});

	}


	/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
	export interface GoogleCloudDialogflowV2beta1Sentiment {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result. */
	export interface GoogleCloudDialogflowV2beta1SentimentFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SentimentFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SentimentFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a Dialogflow assist answer. */
	export interface GoogleCloudDialogflowV2beta1DialogflowAssistAnswer {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/** Represents an intent suggestion. */
		intentSuggestion?: GoogleCloudDialogflowV2beta1IntentSuggestion;

		/** Represents the result of conversational query or event processing. */
		queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
	}

	/** Represents a Dialogflow assist answer. */
	export interface GoogleCloudDialogflowV2beta1DialogflowAssistAnswerFormProperties {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1DialogflowAssistAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1DialogflowAssistAnswerFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an intent suggestion. */
	export interface GoogleCloudDialogflowV2beta1IntentSuggestion {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description?: string | null;

		/** The display name of the intent. */
		displayName?: string | null;

		/** The unique identifier of this intent. Format: `projects//locations//agent/intents/`. */
		intentV2?: string | null;
	}

	/** Represents an intent suggestion. */
	export interface GoogleCloudDialogflowV2beta1IntentSuggestionFormProperties {

		/** Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. */
		description: FormControl<string | null | undefined>,

		/** The display name of the intent. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of this intent. Format: `projects//locations//agent/intents/`. */
		intentV2: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1IntentSuggestionFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1IntentSuggestionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			intentV2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of conversational query or event processing. */
	export interface GoogleCloudDialogflowV2beta1QueryResult {

		/** The action name from the matched intent. */
		action?: string | null;

		/** This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters. */
		allRequiredParamsPresent?: boolean | null;

		/** Indicates whether the conversational query triggers a cancellation for slot filling. For more information, see the [cancel slot filling documentation](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#cancel). */
		cancelsSlotFilling?: boolean | null;

		/** Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors */
		diagnosticInfo?: {[id: string]: any };

		/** The collection of rich messages to present to the user. */
		fulfillmentMessages?: Array<GoogleCloudDialogflowV2beta1IntentMessage>;

		/** The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred. */
		fulfillmentText?: string | null;

		/** An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview). */
		intent?: GoogleCloudDialogflowV2beta1Intent;

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
		 * Type: float
		 */
		intentDetectionConfidence?: number | null;

		/** Represents the result of querying a Knowledge base. */
		knowledgeAnswers?: GoogleCloudDialogflowV2beta1KnowledgeAnswers;

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		languageCode?: string | null;

		/** The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query. */
		outputContexts?: Array<GoogleCloudDialogflowV2beta1Context>;

		/** The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };

		/** The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input. */
		queryText?: string | null;

		/** The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config */
		sentimentAnalysisResult?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;

		/**
		 * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
		 * Type: float
		 */
		speechRecognitionConfidence?: number | null;

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response. */
		webhookPayload?: {[id: string]: any };

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response. */
		webhookSource?: string | null;
	}

	/** Represents the result of conversational query or event processing. */
	export interface GoogleCloudDialogflowV2beta1QueryResultFormProperties {

		/** The action name from the matched intent. */
		action: FormControl<string | null | undefined>,

		/** This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters. */
		allRequiredParamsPresent: FormControl<boolean | null | undefined>,

		/** Indicates whether the conversational query triggers a cancellation for slot filling. For more information, see the [cancel slot filling documentation](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#cancel). */
		cancelsSlotFilling: FormControl<boolean | null | undefined>,

		/** Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors */
		diagnosticInfo: FormControl<{[id: string]: any } | null | undefined>,

		/** The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred. */
		fulfillmentText: FormControl<string | null | undefined>,

		/**
		 * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
		 * Type: float
		 */
		intentDetectionConfidence: FormControl<number | null | undefined>,

		/** The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		languageCode: FormControl<string | null | undefined>,

		/** The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input. */
		queryText: FormControl<string | null | undefined>,

		/**
		 * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
		 * Type: float
		 */
		speechRecognitionConfidence: FormControl<number | null | undefined>,

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response. */
		webhookPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response. */
		webhookSource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1QueryResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1QueryResultFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			allRequiredParamsPresent: new FormControl<boolean | null | undefined>(undefined),
			cancelsSlotFilling: new FormControl<boolean | null | undefined>(undefined),
			diagnosticInfo: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			fulfillmentText: new FormControl<string | null | undefined>(undefined),
			intentDetectionConfidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined),
			speechRecognitionConfidence: new FormControl<number | null | undefined>(undefined),
			webhookPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			webhookSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of querying a Knowledge base. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeAnswers {

		/** A list of answers from Knowledge Connector. */
		answers?: Array<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer>;
	}

	/** Represents the result of querying a Knowledge base. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1KnowledgeAnswersFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1KnowledgeAnswersFormProperties>({
		});

	}


	/** An answer from Knowledge Connector. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {

		/** The piece of text from the `source` knowledge base document that answers this conversational query. */
		answer?: string | null;

		/** The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise. */
		faqQuestion?: string | null;

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
		 * Type: float
		 */
		matchConfidence?: number | null;

		/** The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer. */
		matchConfidenceLevel?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevel | null;

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`. */
		source?: string | null;
	}

	/** An answer from Knowledge Connector. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerFormProperties {

		/** The piece of text from the `source` knowledge base document that answers this conversational query. */
		answer: FormControl<string | null | undefined>,

		/** The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise. */
		faqQuestion: FormControl<string | null | undefined>,

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
		 * Type: float
		 */
		matchConfidence: FormControl<number | null | undefined>,

		/** The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer. */
		matchConfidenceLevel: FormControl<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevel | null | undefined>,

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			faqQuestion: new FormControl<string | null | undefined>(undefined),
			matchConfidence: new FormControl<number | null | undefined>(undefined),
			matchConfidenceLevel: new FormControl<GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevel | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevel { MATCH_CONFIDENCE_LEVEL_UNSPECIFIED = 'MATCH_CONFIDENCE_LEVEL_UNSPECIFIED', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH' }


	/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
	export interface GoogleCloudDialogflowV2beta1EventInput {

		/** Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. This field is ignored when used in the context of a WebhookResponse.followup_event_input field, because the language was already defined in the originating detect intent request. */
		languageCode?: string | null;

		/** Required. The unique identifier of the event. */
		name?: string | null;

		/** The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters?: {[id: string]: any };
	}

	/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
	export interface GoogleCloudDialogflowV2beta1EventInputFormProperties {

		/** Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. This field is ignored when used in the context of a WebhookResponse.followup_event_input field, because the language was already defined in the originating detect intent request. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The unique identifier of the event. */
		name: FormControl<string | null | undefined>,

		/** The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1EventInputFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1EventInputFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowV2beta1ExportAgentResponse {

		/** Zip compressed raw byte content for agent. */
		agentContent?: string | null;

		/** The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`. */
		agentUri?: string | null;
	}

	/** The response message for Agents.ExportAgent. */
	export interface GoogleCloudDialogflowV2beta1ExportAgentResponseFormProperties {

		/** Zip compressed raw byte content for agent. */
		agentContent: FormControl<string | null | undefined>,

		/** The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`. */
		agentUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1ExportAgentResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ExportAgentResponseFormProperties>({
			agentContent: new FormControl<string | null | undefined>(undefined),
			agentUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
	export interface GoogleCloudDialogflowV2beta1ExportOperationMetadata {

		/** Google Cloud Storage location for the output. */
		exportedGcsDestination?: GoogleCloudDialogflowV2beta1GcsDestination;
	}

	/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
	export interface GoogleCloudDialogflowV2beta1ExportOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1ExportOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ExportOperationMetadataFormProperties>({
		});

	}


	/** Google Cloud Storage location for the output. */
	export interface GoogleCloudDialogflowV2beta1GcsDestination {

		/** Required. The Google Cloud Storage URIs for the output. A URI is of the form: `gs://bucket/object-prefix-or-name` Whether a prefix or name is used depends on the use case. The requesting user must have "write-permission" to the bucket. */
		uri?: string | null;
	}

	/** Google Cloud Storage location for the output. */
	export interface GoogleCloudDialogflowV2beta1GcsDestinationFormProperties {

		/** Required. The Google Cloud Storage URIs for the output. A URI is of the form: `gs://bucket/object-prefix-or-name` Whether a prefix or name is used depends on the use case. The requesting user must have "write-permission" to the bucket. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents answer from "frequently asked questions". */
	export interface GoogleCloudDialogflowV2beta1FaqAnswer {

		/** The piece of text from the `source` knowledge base document. */
		answer?: string | null;

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The corresponding FAQ question. */
		question?: string | null;

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`. */
		source?: string | null;
	}

	/** Represents answer from "frequently asked questions". */
	export interface GoogleCloudDialogflowV2beta1FaqAnswerFormProperties {

		/** The piece of text from the `source` knowledge base document. */
		answer: FormControl<string | null | undefined>,

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/**
		 * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** A map that contains metadata about the answer and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The corresponding FAQ question. */
		question: FormControl<string | null | undefined>,

		/** Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1FaqAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1FaqAnswerFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output only. Represents a notification sent to Pub/Sub subscribers for agent assistant events in a specific conversation. */
	export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {

		/** The conversation this notification refers to. Format: `projects//conversations/`. */
		conversation?: string | null;

		/** The participant that the suggestion is compiled for. And This field is used to call Participants.ListSuggestions API. Format: `projects//conversations//participants/`. It will not be set in legacy workflow. HumanAgentAssistantConfig.name for more information. */
		participant?: string | null;

		/** The suggestion results payload that this notification refers to. It will only be set when HumanAgentAssistantConfig.SuggestionConfig.group_suggestion_responses sets to true. */
		suggestionResults?: Array<GoogleCloudDialogflowV2beta1SuggestionResult>;
	}

	/** Output only. Represents a notification sent to Pub/Sub subscribers for agent assistant events in a specific conversation. */
	export interface GoogleCloudDialogflowV2beta1HumanAgentAssistantEventFormProperties {

		/** The conversation this notification refers to. Format: `projects//conversations/`. */
		conversation: FormControl<string | null | undefined>,

		/** The participant that the suggestion is compiled for. And This field is used to call Participants.ListSuggestions API. Format: `projects//conversations//participants/`. It will not be set in legacy workflow. HumanAgentAssistantConfig.name for more information. */
		participant: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1HumanAgentAssistantEventFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1HumanAgentAssistantEventFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			participant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent. */
	export interface GoogleCloudDialogflowV2beta1SuggestionResult {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** The response message for Participants.SuggestArticles. */
		suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;

		/** The response message for Participants.SuggestDialogflowAssists. */
		suggestDialogflowAssistsResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;

		/** The response message for Participants.SuggestDialogflowAssists. */
		suggestEntityExtractionResponse?: GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse;

		/** The request message for Participants.SuggestFaqAnswers. */
		suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;

		/** The response message for Participants.SuggestSmartReplies. */
		suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
	}

	/** One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent. */
	export interface GoogleCloudDialogflowV2beta1SuggestionResultFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1SuggestionResultFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SuggestionResultFormProperties>({
		});

	}


	/** The response message for Participants.SuggestArticles. */
	export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponse {

		/** Output only. Articles ordered by score in descending order. */
		articleAnswers?: Array<GoogleCloudDialogflowV2beta1ArticleAnswer>;

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesResponse.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;
	}

	/** The response message for Participants.SuggestArticles. */
	export interface GoogleCloudDialogflowV2beta1SuggestArticlesResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesResponse.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SuggestArticlesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SuggestArticlesResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Participants.SuggestDialogflowAssists. */
	export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestDialogflowAssistsRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** Output only. Multiple reply options provided by Dialogflow assist service. The order is based on the rank of the model prediction. */
		dialogflowAssistAnswers?: Array<GoogleCloudDialogflowV2beta1DialogflowAssistAnswer>;

		/** The name of the latest conversation message used to suggest answer. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;
	}

	/** The response message for Participants.SuggestDialogflowAssists. */
	export interface GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestDialogflowAssistsRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to suggest answer. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Participants.SuggestFaqAnswers. */
	export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** Output only. Answers extracted from FAQ documents. */
		faqAnswers?: Array<GoogleCloudDialogflowV2beta1FaqAnswer>;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;
	}

	/** The request message for Participants.SuggestFaqAnswers. */
	export interface GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SuggestFaqAnswersResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Participants.SuggestSmartReplies. */
	export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize?: number | null;

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage?: string | null;

		/** Output only. Multiple reply options provided by smart reply service. The order is based on the rank of the model prediction. The maximum number of the returned replies is set in SmartReplyConfig. */
		smartReplyAnswers?: Array<GoogleCloudDialogflowV2beta1SmartReplyAnswer>;
	}

	/** The response message for Participants.SuggestSmartReplies. */
	export interface GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponseFormProperties {

		/**
		 * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contextSize: FormControl<number | null | undefined>,

		/** The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`. */
		latestMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SuggestSmartRepliesResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponseFormProperties>({
			contextSize: new FormControl<number | null | undefined>(undefined),
			latestMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a smart reply answer. */
	export interface GoogleCloudDialogflowV2beta1SmartReplyAnswer {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord?: string | null;

		/**
		 * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence?: number | null;

		/** The content of the reply. */
		reply?: string | null;
	}

	/** Represents a smart reply answer. */
	export interface GoogleCloudDialogflowV2beta1SmartReplyAnswerFormProperties {

		/** The name of answer record, in the format of "projects//locations//answerRecords/" */
		answerRecord: FormControl<string | null | undefined>,

		/**
		 * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The content of the reply. */
		reply: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SmartReplyAnswerFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SmartReplyAnswerFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			reply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponse {

		/** Includes details about skipped documents or any other warnings. */
		warnings?: Array<GoogleRpcStatus>;
	}

	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV2beta1ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV2beta1ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1ImportDocumentsResponseFormProperties>({
		});

	}


	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {

		/** Metadata related to the Export Data Operations (e.g. ExportDocument). */
		exportOperationMetadata?: GoogleCloudDialogflowV2beta1ExportOperationMetadata;

		/** The name of the knowledge base interacted with during the operation. */
		knowledgeBase?: string | null;

		/** Required. Output only. The current state of this operation. */
		state?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null;
	}

	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV2beta1KnowledgeOperationMetadataFormProperties {

		/** The name of the knowledge base interacted with during the operation. */
		knowledgeBase: FormControl<string | null | undefined>,

		/** Required. Output only. The current state of this operation. */
		state: FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1KnowledgeOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1KnowledgeOperationMetadataFormProperties>({
			knowledgeBase: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>(undefined),
		});

	}


	/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
	export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {

		/** Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents. */
		payload?: {[id: string]: any };

		/** The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers. */
		source?: string | null;

		/** Optional. The version of the protocol used for this request. This field is AoG-specific. */
		version?: string | null;
	}

	/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
	export interface GoogleCloudDialogflowV2beta1OriginalDetectIntentRequestFormProperties {

		/** Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers. */
		source: FormControl<string | null | undefined>,

		/** Optional. The version of the protocol used for this request. This field is AoG-specific. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1OriginalDetectIntentRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1OriginalDetectIntentRequestFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session). */
	export interface GoogleCloudDialogflowV2beta1SessionEntityType {

		/** Required. The collection of entities associated with this session entity type. */
		entities?: Array<GoogleCloudDialogflowV2beta1EntityTypeEntity>;

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode?: GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null;

		/** Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. */
		name?: string | null;
	}

	/** A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session). */
	export interface GoogleCloudDialogflowV2beta1SessionEntityTypeFormProperties {

		/** Required. Indicates whether the additional data should override or supplement the custom entity type definition. */
		entityOverrideMode: FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>,

		/** Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SessionEntityTypeFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SessionEntityTypeFormProperties>({
			entityOverrideMode: new FormControl<GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a ConversationProfile.SetSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadata {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile?: string | null;

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime?: string | null;

		/** Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null;

		/** Required. The type of the suggestion feature to add or update. */
		suggestionFeatureType?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null;
	}

	/** Metadata for a ConversationProfile.SetSuggestionFeatureConfig operation. */
	export interface GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadataFormProperties {

		/** The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/` */
		conversationProfile: FormControl<string | null | undefined>,

		/** Timestamp whe the request was created. The time is measured on server side. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The participant role to add or update the suggestion feature config. Only HUMAN_AGENT or END_USER can be used. */
		participantRole: FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>,

		/** Required. The type of the suggestion feature to add or update. */
		suggestionFeatureType: FormControl<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigOperationMetadataFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			participantRole: new FormControl<GoogleCloudDialogflowV2ClearSuggestionFeatureConfigOperationMetadataParticipantRole | null | undefined>(undefined),
			suggestionFeatureType: new FormControl<GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigOperationMetadataSuggestionFeatureType | null | undefined>(undefined),
		});

	}


	/** The request message for a webhook call. */
	export interface GoogleCloudDialogflowV2beta1WebhookRequest {

		/** Alternative query results from KnowledgeService. */
		alternativeQueryResults?: Array<GoogleCloudDialogflowV2beta1QueryResult>;

		/** Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call. */
		originalDetectIntentRequest?: GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;

		/** Represents the result of conversational query or event processing. */
		queryResult?: GoogleCloudDialogflowV2beta1QueryResult;

		/** The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`. */
		responseId?: string | null;

		/** The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, */
		session?: string | null;
	}

	/** The request message for a webhook call. */
	export interface GoogleCloudDialogflowV2beta1WebhookRequestFormProperties {

		/** The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`. */
		responseId: FormControl<string | null | undefined>,

		/** The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, */
		session: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1WebhookRequestFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1WebhookRequestFormProperties>({
			responseId: new FormControl<string | null | undefined>(undefined),
			session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json). */
	export interface GoogleCloudDialogflowV2beta1WebhookResponse {

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction?: boolean | null;

		/** Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`. */
		followupEventInput?: GoogleCloudDialogflowV2beta1EventInput;

		/** Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller. */
		fulfillmentMessages?: Array<GoogleCloudDialogflowV2beta1IntentMessage>;

		/** Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller. */
		fulfillmentText?: string | null;

		/** Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff?: boolean | null;

		/** Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller. */
		outputContexts?: Array<GoogleCloudDialogflowV2beta1Context>;

		/** Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json) */
		payload?: {[id: string]: any };

		/** Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods. */
		sessionEntityTypes?: Array<GoogleCloudDialogflowV2beta1SessionEntityType>;

		/** Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller. */
		source?: string | null;
	}

	/** The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json). */
	export interface GoogleCloudDialogflowV2beta1WebhookResponseFormProperties {

		/** Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. */
		endInteraction: FormControl<boolean | null | undefined>,

		/** Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller. */
		fulfillmentText: FormControl<string | null | undefined>,

		/** Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. */
		liveAgentHandoff: FormControl<boolean | null | undefined>,

		/** Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json) */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV2beta1WebhookResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV2beta1WebhookResponseFormProperties>({
			endInteraction: new FormControl<boolean | null | undefined>(undefined),
			fulfillmentText: new FormControl<string | null | undefined>(undefined),
			liveAgentHandoff: new FormControl<boolean | null | undefined>(undefined),
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowV3alpha1ConversationSignals {

		/** Collection of all signals that were extracted for a single turn of the conversation. */
		turnSignals?: GoogleCloudDialogflowV3alpha1TurnSignals;
	}

	/** This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery. */
	export interface GoogleCloudDialogflowV3alpha1ConversationSignalsFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1ConversationSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1ConversationSignalsFormProperties>({
		});

	}


	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowV3alpha1TurnSignals {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated?: boolean | null;

		/** Whether user was using DTMF input. */
		dtmfUsed?: boolean | null;

		/** Failure reasons of the turn. */
		failureReasons?: Array<string>;

		/** Whether NLU predicted NO_MATCH. */
		noMatch?: boolean | null;

		/** Whether user provided no input. */
		noUserInput?: boolean | null;

		/** Whether turn resulted in End Session page. */
		reachedEndPage?: boolean | null;

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude?: number | null;

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore?: number | null;

		/** Whether agent has triggered the event corresponding to user abandoning the conversation. */
		triggeredAbandonmentEvent?: boolean | null;

		/** Whether user was specifically asking for a live agent. */
		userEscalated?: boolean | null;

		/** Human-readable statuses of the webhooks triggered during this turn. */
		webhookStatuses?: Array<string>;
	}

	/** Collection of all signals that were extracted for a single turn of the conversation. */
	export interface GoogleCloudDialogflowV3alpha1TurnSignalsFormProperties {

		/** Whether agent responded with LiveAgentHandoff fulfillment. */
		agentEscalated: FormControl<boolean | null | undefined>,

		/** Whether user was using DTMF input. */
		dtmfUsed: FormControl<boolean | null | undefined>,

		/** Whether NLU predicted NO_MATCH. */
		noMatch: FormControl<boolean | null | undefined>,

		/** Whether user provided no input. */
		noUserInput: FormControl<boolean | null | undefined>,

		/** Whether turn resulted in End Session page. */
		reachedEndPage: FormControl<boolean | null | undefined>,

		/**
		 * Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentMagnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled.
		 * Type: float
		 */
		sentimentScore: FormControl<number | null | undefined>,

		/** Whether agent has triggered the event corresponding to user abandoning the conversation. */
		triggeredAbandonmentEvent: FormControl<boolean | null | undefined>,

		/** Whether user was specifically asking for a live agent. */
		userEscalated: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV3alpha1TurnSignalsFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1TurnSignalsFormProperties>({
			agentEscalated: new FormControl<boolean | null | undefined>(undefined),
			dtmfUsed: new FormControl<boolean | null | undefined>(undefined),
			noMatch: new FormControl<boolean | null | undefined>(undefined),
			noUserInput: new FormControl<boolean | null | undefined>(undefined),
			reachedEndPage: new FormControl<boolean | null | undefined>(undefined),
			sentimentMagnitude: new FormControl<number | null | undefined>(undefined),
			sentimentScore: new FormControl<number | null | undefined>(undefined),
			triggeredAbandonmentEvent: new FormControl<boolean | null | undefined>(undefined),
			userEscalated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1CreateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for CreateDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1CreateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1CreateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1CreateDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata {

		/** Required. Output only. The current state of this operation. */
		state?: GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null;
	}

	/** Metadata in google::longrunning::Operation for Knowledge operations. */
	export interface GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadataFormProperties {

		/** Required. Output only. The current state of this operation. */
		state: FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadataFormProperties>({
			state: new FormControl<GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadataState | null | undefined>(undefined),
		});

	}


	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1DeleteDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for DeleteDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1DeleteDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1DeleteDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1DeleteDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowV3alpha1ImportDocumentsOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ImportDocuments operation. */
	export interface GoogleCloudDialogflowV3alpha1ImportDocumentsOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1ImportDocumentsOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1ImportDocumentsOperationMetadataFormProperties>({
		});

	}


	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV3alpha1ImportDocumentsResponse {

		/** Includes details about skipped documents or any other warnings. */
		warnings?: Array<GoogleRpcStatus>;
	}

	/** Response message for Documents.ImportDocuments. */
	export interface GoogleCloudDialogflowV3alpha1ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1ImportDocumentsResponseFormProperties>({
		});

	}


	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1ReloadDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for ReloadDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1ReloadDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1ReloadDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1ReloadDocumentOperationMetadataFormProperties>({
		});

	}


	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1UpdateDocumentOperationMetadata {

		/** Metadata in google::longrunning::Operation for Knowledge operations. */
		genericMetadata?: GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
	}

	/** Metadata for UpdateDocument operation. */
	export interface GoogleCloudDialogflowV3alpha1UpdateDocumentOperationMetadataFormProperties {
	}
	export function CreateGoogleCloudDialogflowV3alpha1UpdateDocumentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDialogflowV3alpha1UpdateDocumentOperationMetadataFormProperties>({
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<GoogleCloudLocationLocation>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudLocationListLocationsResponseFormGroup() {
		return new FormGroup<GoogleCloudLocationListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface GoogleCloudLocationLocation {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface GoogleCloudLocationLocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudLocationLocationFormGroup() {
		return new FormGroup<GoogleCloudLocationLocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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
		 * Calculates the test coverage for an agent.
		 * Get v3beta1/{agent}/testCases:calculateCoverage
		 * @param {string} agent Required. The agent to calculate coverage for. Format: `projects//locations//agents/`.
		 * @param {Dialogflow_projects_locations_agents_testCases_calculateCoverageType} type Required. The type of coverage requested.
		 * @return {GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_calculateCoverage(agent: string, type: Dialogflow_projects_locations_agents_testCases_calculateCoverageType | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>(this.baseUri + 'v3beta1/' + (agent == null ? '' : encodeURIComponent(agent)) + '/testCases:calculateCoverage&type=' + type, {});
		}

		/**
		 * Compares the specified base version with target version.
		 * Post v3beta1/{baseVersion}:compareVersions
		 * @param {string} baseVersion Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents/ /flows//versions/`.
		 * @return {GoogleCloudDialogflowCxV3beta1CompareVersionsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_versions_compareVersions(baseVersion: string, requestBody: GoogleCloudDialogflowCxV3beta1CompareVersionsRequest): Observable<GoogleCloudDialogflowCxV3beta1CompareVersionsResponse> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>(this.baseUri + 'v3beta1/' + (baseVersion == null ? '' : encodeURIComponent(baseVersion)) + ':compareVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
		 * Post v3beta1/{environment}:deployFlow
		 * @param {string} environment Required. The environment to deploy the flow to. Format: `projects//locations//agents// environments/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_deployFlow(environment: string, requestBody: GoogleCloudDialogflowCxV3beta1DeployFlowRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':deployFlow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
		 * Post v3beta1/{environment}:runContinuousTest
		 * @param {string} environment Required. Format: `projects//locations//agents//environments/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_runContinuousTest(environment: string, requestBody: GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':runContinuousTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified SecuritySettings.
		 * Delete v3beta1/{name}
		 * @param {string} name Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
		 * @param {boolean} force This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dialogflow_projects_locations_securitySettings_delete(name: string, force: boolean | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v3beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {string} languageCode The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_operations_get(name: string, languageCode: string | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), {});
		}

		/**
		 * Updates the specified SecuritySettings.
		 * Patch v3beta1/{name}
		 * @param {string} name Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
		 * @param {string} updateMask Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
		 * @return {GoogleCloudDialogflowCxV3beta1SecuritySettings} Successful response
		 */
		Dialogflow_projects_locations_securitySettings_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1SecuritySettings): Observable<GoogleCloudDialogflowCxV3beta1SecuritySettings> {
			return this.http.patch<GoogleCloudDialogflowCxV3beta1SecuritySettings>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v3beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {GoogleCloudLocationListLocationsResponse} Successful response
		 */
		Dialogflow_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudLocationListLocationsResponse> {
			return this.http.get<GoogleCloudLocationListLocationsResponse>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v3beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Dialogflow_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v3beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dialogflow_projects_operations_cancel(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
		 * Post v3beta1/{name}:export
		 * @param {string} name Required. The name of the flow to export. Format: `projects//locations//agents//flows/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_export(name: string, requestBody: GoogleCloudDialogflowCxV3beta1ExportFlowRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
		 * Post v3beta1/{name}:load
		 * @param {string} name Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_versions_load(name: string, requestBody: GoogleCloudDialogflowCxV3beta1LoadVersionRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':load', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Looks up the history of the specified Environment.
		 * Get v3beta1/{name}:lookupEnvironmentHistory
		 * @param {string} name Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_lookupEnvironmentHistory(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':lookupEnvironmentHistory&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{name}:restore
		 * @param {string} name Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_restore(name: string, requestBody: GoogleCloudDialogflowCxV3beta1RestoreAgentRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
		 * Post v3beta1/{name}:run
		 * @param {string} name Required. Format of test case name to run: `projects//locations/ /agents//testCases/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_run(name: string, requestBody: GoogleCloudDialogflowCxV3beta1RunTestCaseRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
		 * Post v3beta1/{name}:start
		 * @param {string} name Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`.
		 * @return {GoogleCloudDialogflowCxV3beta1Experiment} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_experiments_start(name: string, requestBody: GoogleCloudDialogflowCxV3beta1StartExperimentRequest): Observable<GoogleCloudDialogflowCxV3beta1Experiment> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Experiment>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
		 * Post v3beta1/{name}:stop
		 * @param {string} name Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`.
		 * @return {GoogleCloudDialogflowCxV3beta1Experiment} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_experiments_stop(name: string, requestBody: GoogleCloudDialogflowCxV3beta1StopExperimentRequest): Observable<GoogleCloudDialogflowCxV3beta1Experiment> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Experiment>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{name}:train
		 * @param {string} name Required. The flow to train. Format: `projects//locations//agents//flows/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_train(name: string, requestBody: GoogleCloudDialogflowCxV3beta1TrainFlowRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':train', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
		 * Post v3beta1/{name}:validate
		 * @param {string} name Required. The flow to validate. Format: `projects//locations//agents//flows/`.
		 * @return {GoogleCloudDialogflowCxV3beta1FlowValidationResult} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_validate(name: string, requestBody: GoogleCloudDialogflowCxV3beta1ValidateFlowRequest): Observable<GoogleCloudDialogflowCxV3beta1FlowValidationResult> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1FlowValidationResult>(this.baseUri + 'v3beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all agents in the specified location.
		 * Get v3beta1/{parent}/agents
		 * @param {string} parent Required. The location to list all agents for. Format: `projects//locations/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListAgentsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListAgentsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListAgentsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/agents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{parent}/agents
		 * @param {string} parent Required. The location to create a agent for. Format: `projects//locations/`.
		 * @return {GoogleCloudDialogflowCxV3beta1Agent} Successful response
		 */
		Dialogflow_projects_locations_agents_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1Agent): Observable<GoogleCloudDialogflowCxV3beta1Agent> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Agent>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/agents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of Changelogs.
		 * Get v3beta1/{parent}/changelogs
		 * @param {string} parent Required. The agent containing the changelogs. Format: `projects//locations//agents/`.
		 * @param {string} filter The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds > 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListChangelogsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_changelogs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListChangelogsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/changelogs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Fetches a list of continuous test results for a given environment.
		 * Get v3beta1/{parent}/continuousTestResults
		 * @param {string} parent Required. The environment to list results for. Format: `projects//locations//agents// environments/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_continuousTestResults_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/continuousTestResults&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the list of all deployments in the specified Environment.
		 * Get v3beta1/{parent}/deployments
		 * @param {string} parent Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20 and at most 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_deployments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deployments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the list of all session entity types in the specified session.
		 * Get v3beta1/{parent}/entityTypes
		 * @param {string} parent Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_entityTypes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entityTypes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a session entity type.
		 * Post v3beta1/{parent}/entityTypes
		 * @param {string} parent Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
		 * @param {string} languageCode The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleCloudDialogflowCxV3beta1SessionEntityType} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_entityTypes_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1SessionEntityType): Observable<GoogleCloudDialogflowCxV3beta1SessionEntityType> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1SessionEntityType>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entityTypes&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all environments in the specified Agent.
		 * Get v3beta1/{parent}/environments
		 * @param {string} parent Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20 and at most 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
		 * Post v3beta1/{parent}/environments
		 * @param {string} parent Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1Environment): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all experiments in the specified Environment.
		 * Get v3beta1/{parent}/experiments
		 * @param {string} parent Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20 and at most 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListExperimentsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_experiments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListExperimentsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/experiments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Experiment in the specified Environment.
		 * Post v3beta1/{parent}/experiments
		 * @param {string} parent Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`.
		 * @return {GoogleCloudDialogflowCxV3beta1Experiment} Successful response
		 */
		Dialogflow_projects_locations_agents_environments_experiments_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1Experiment): Observable<GoogleCloudDialogflowCxV3beta1Experiment> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Experiment>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/experiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all flows in the specified agent.
		 * Get v3beta1/{parent}/flows
		 * @param {string} parent Required. The agent containing the flows. Format: `projects//locations//agents/`.
		 * @param {string} languageCode The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListFlowsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListFlowsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListFlowsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/flows&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{parent}/flows
		 * @param {string} parent Required. The agent to create a flow for. Format: `projects//locations//agents/`.
		 * @param {string} languageCode The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleCloudDialogflowCxV3beta1Flow} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1Flow): Observable<GoogleCloudDialogflowCxV3beta1Flow> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Flow>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/flows&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{parent}/flows:import
		 * @param {string} parent Required. The agent to import the flow into. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_import(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1ImportFlowRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/flows:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all generators in the specified agent.
		 * Get v3beta1/{parent}/generators
		 * @param {string} parent Required. The agent to list all generators for. Format: `projects//locations//agents/`.
		 * @param {string} languageCode The language to list generators for.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_generators_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListGeneratorsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/generators&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a generator in the specified agent.
		 * Post v3beta1/{parent}/generators
		 * @param {string} parent Required. The agent to create a generator for. Format: `projects//locations//agents/`.
		 * @param {string} languageCode The language to create generators for the following fields: * `Generator.prompt_text.text` If not specified, the agent's default language is used.
		 * @return {GoogleCloudDialogflowCxV3beta1Generator} Successful response
		 */
		Dialogflow_projects_locations_agents_generators_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1Generator): Observable<GoogleCloudDialogflowCxV3beta1Generator> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Generator>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/generators&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all intents in the specified agent.
		 * Get v3beta1/{parent}/intents
		 * @param {string} parent Required. The agent to list all intents for. Format: `projects//locations//agents/`.
		 * @param {Dialogflow_projects_locations_agents_intents_listIntentView} intentView The resource view to apply to the returned intent.
		 * @param {string} languageCode The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListIntentsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_intents_list(parent: string, intentView: Dialogflow_projects_locations_agents_intents_listIntentView | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListIntentsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListIntentsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/intents&intentView=' + intentView + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{parent}/intents
		 * @param {string} parent Required. The agent to create an intent for. Format: `projects//locations//agents/`.
		 * @param {string} languageCode The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleCloudDialogflowCxV3beta1Intent} Successful response
		 */
		Dialogflow_projects_locations_agents_intents_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1Intent): Observable<GoogleCloudDialogflowCxV3beta1Intent> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Intent>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/intents&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse
		 * Post v3beta1/{parent}/intents:export
		 * @param {string} parent Required. The name of the parent agent to export intents. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_intents_export(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1ExportIntentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/intents:export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse
		 * Post v3beta1/{parent}/intents:import
		 * @param {string} parent Required. The agent to import the intents into. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_intents_import(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1ImportIntentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/intents:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all pages in the specified flow.
		 * Get v3beta1/{parent}/pages
		 * @param {string} parent Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
		 * @param {string} languageCode The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListPagesResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_pages_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListPagesResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListPagesResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pages&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a page in the specified flow.
		 * Post v3beta1/{parent}/pages
		 * @param {string} parent Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
		 * @param {string} languageCode The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleCloudDialogflowCxV3beta1Page} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_pages_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1Page): Observable<GoogleCloudDialogflowCxV3beta1Page> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Page>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pages&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.
		 * Get v3beta1/{parent}/results
		 * @param {string} parent Required. The test case to list results for. Format: `projects//locations//agents// testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases.
		 * @param {string} filter The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time > 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_results_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/results&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the list of all security settings in the specified location.
		 * Get v3beta1/{parent}/securitySettings
		 * @param {string} parent Required. The location to list all security settings for. Format: `projects//locations/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20 and at most 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse} Successful response
		 */
		Dialogflow_projects_locations_securitySettings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securitySettings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create security settings in the specified location.
		 * Post v3beta1/{parent}/securitySettings
		 * @param {string} parent Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
		 * @return {GoogleCloudDialogflowCxV3beta1SecuritySettings} Successful response
		 */
		Dialogflow_projects_locations_securitySettings_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1SecuritySettings): Observable<GoogleCloudDialogflowCxV3beta1SecuritySettings> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1SecuritySettings>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/securitySettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches a list of test cases for a given agent.
		 * Get v3beta1/{parent}/testCases
		 * @param {string} parent Required. The agent to list all pages for. Format: `projects//locations//agents/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @param {Dialogflow_projects_locations_agents_testCases_listView} view Specifies whether response should include all fields or just the metadata.
		 * @return {GoogleCloudDialogflowCxV3beta1ListTestCasesResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Dialogflow_projects_locations_agents_testCases_listView | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListTestCasesResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a test case for the given agent.
		 * Post v3beta1/{parent}/testCases
		 * @param {string} parent Required. The agent to create the test case for. Format: `projects//locations//agents/`.
		 * @return {GoogleCloudDialogflowCxV3beta1TestCase} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1TestCase): Observable<GoogleCloudDialogflowCxV3beta1TestCase> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1TestCase>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch deletes test cases.
		 * Post v3beta1/{parent}/testCases:batchDelete
		 * @param {string} parent Required. The agent to delete test cases from. Format: `projects//locations//agents/`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_batchDelete(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
		 * Post v3beta1/{parent}/testCases:batchRun
		 * @param {string} parent Required. Agent name. Format: `projects//locations//agents/ `.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_batchRun(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases:batchRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
		 * Post v3beta1/{parent}/testCases:export
		 * @param {string} parent Required. The agent where to export test cases from. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_export(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases:export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
		 * Post v3beta1/{parent}/testCases:import
		 * @param {string} parent Required. The agent to import test cases to. Format: `projects//locations//agents/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_testCases_import(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testCases:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all transition route groups in the specified flow.
		 * Get v3beta1/{parent}/transitionRouteGroups
		 * @param {string} parent Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/.
		 * @param {string} languageCode The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_transitionRouteGroups_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transitionRouteGroups&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
		 * Post v3beta1/{parent}/transitionRouteGroups
		 * @param {string} parent Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups.
		 * @param {string} languageCode The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
		 * @return {GoogleCloudDialogflowCxV3beta1TransitionRouteGroup} Successful response
		 */
		Dialogflow_projects_locations_agents_transitionRouteGroups_create(parent: string, languageCode: string | null | undefined, requestBody: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup): Observable<GoogleCloudDialogflowCxV3beta1TransitionRouteGroup> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transitionRouteGroups&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all versions in the specified Flow.
		 * Get v3beta1/{parent}/versions
		 * @param {string} parent Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 20 and at most 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListVersionsResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_versions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListVersionsResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListVersionsResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
		 * Post v3beta1/{parent}/versions
		 * @param {string} parent Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Dialogflow_projects_locations_agents_flows_versions_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1Version): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all webhooks in the specified agent.
		 * Get v3beta1/{parent}/webhooks
		 * @param {string} parent Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
		 * @param {number} pageSize The maximum number of items to return in a single page. By default 100 and at most 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous list request.
		 * @return {GoogleCloudDialogflowCxV3beta1ListWebhooksResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_webhooks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDialogflowCxV3beta1ListWebhooksResponse> {
			return this.http.get<GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webhooks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a webhook in the specified agent.
		 * Post v3beta1/{parent}/webhooks
		 * @param {string} parent Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
		 * @return {GoogleCloudDialogflowCxV3beta1Webhook} Successful response
		 */
		Dialogflow_projects_locations_agents_webhooks_create(parent: string, requestBody: GoogleCloudDialogflowCxV3beta1Webhook): Observable<GoogleCloudDialogflowCxV3beta1Webhook> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1Webhook>(this.baseUri + 'v3beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
		 * Post v3beta1/{session}:detectIntent
		 * @param {string} session Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
		 * @return {GoogleCloudDialogflowCxV3beta1DetectIntentResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_detectIntent(session: string, requestBody: GoogleCloudDialogflowCxV3beta1DetectIntentRequest): Observable<GoogleCloudDialogflowCxV3beta1DetectIntentResponse> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1DetectIntentResponse>(this.baseUri + 'v3beta1/' + (session == null ? '' : encodeURIComponent(session)) + ':detectIntent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
		 * Post v3beta1/{session}:fulfillIntent
		 * @param {string} session Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
		 * @return {GoogleCloudDialogflowCxV3beta1FulfillIntentResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_fulfillIntent(session: string, requestBody: GoogleCloudDialogflowCxV3beta1FulfillIntentRequest): Observable<GoogleCloudDialogflowCxV3beta1FulfillIntentResponse> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>(this.baseUri + 'v3beta1/' + (session == null ? '' : encodeURIComponent(session)) + ':fulfillIntent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns preliminary intent match results, doesn't change the session status.
		 * Post v3beta1/{session}:matchIntent
		 * @param {string} session Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
		 * @return {GoogleCloudDialogflowCxV3beta1MatchIntentResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_matchIntent(session: string, requestBody: GoogleCloudDialogflowCxV3beta1MatchIntentRequest): Observable<GoogleCloudDialogflowCxV3beta1MatchIntentResponse> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1MatchIntentResponse>(this.baseUri + 'v3beta1/' + (session == null ? '' : encodeURIComponent(session)) + ':matchIntent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.
		 * Post v3beta1/{session}:serverStreamingDetectIntent
		 * @param {string} session Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
		 * @return {GoogleCloudDialogflowCxV3beta1DetectIntentResponse} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_serverStreamingDetectIntent(session: string, requestBody: GoogleCloudDialogflowCxV3beta1DetectIntentRequest): Observable<GoogleCloudDialogflowCxV3beta1DetectIntentResponse> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1DetectIntentResponse>(this.baseUri + 'v3beta1/' + (session == null ? '' : encodeURIComponent(session)) + ':serverStreamingDetectIntent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the feedback received from the user for a single turn of the bot response.
		 * Post v3beta1/{session}:submitAnswerFeedback
		 * @param {string} session Required. The name of the session the feedback was sent to.
		 * @return {GoogleCloudDialogflowCxV3beta1AnswerFeedback} Successful response
		 */
		Dialogflow_projects_locations_agents_sessions_submitAnswerFeedback(session: string, requestBody: GoogleCloudDialogflowCxV3beta1SubmitAnswerFeedbackRequest): Observable<GoogleCloudDialogflowCxV3beta1AnswerFeedback> {
			return this.http.post<GoogleCloudDialogflowCxV3beta1AnswerFeedback>(this.baseUri + 'v3beta1/' + (session == null ? '' : encodeURIComponent(session)) + ':submitAnswerFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Dialogflow_projects_locations_agents_testCases_calculateCoverageType { COVERAGE_TYPE_UNSPECIFIED = 'COVERAGE_TYPE_UNSPECIFIED', INTENT = 'INTENT', PAGE_TRANSITION = 'PAGE_TRANSITION', TRANSITION_ROUTE_GROUP = 'TRANSITION_ROUTE_GROUP' }

	export enum Dialogflow_projects_locations_agents_intents_listIntentView { INTENT_VIEW_UNSPECIFIED = 'INTENT_VIEW_UNSPECIFIED', INTENT_VIEW_PARTIAL = 'INTENT_VIEW_PARTIAL', INTENT_VIEW_FULL = 'INTENT_VIEW_FULL' }

	export enum Dialogflow_projects_locations_agents_testCases_listView { TEST_CASE_VIEW_UNSPECIFIED = 'TEST_CASE_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}
