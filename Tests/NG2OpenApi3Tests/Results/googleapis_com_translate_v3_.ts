import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Adaptive MT Dataset. */
	export interface AdaptiveMtDataset {

		/** Output only. Timestamp when this dataset was created. */
		createTime?: string | null;

		/** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName?: string | null;

		/** The number of examples in the dataset. */
		exampleCount?: number | null;

		/** Required. The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}` */
		name?: string | null;

		/** The BCP-47 language code of the source language. */
		sourceLanguageCode?: string | null;

		/** The BCP-47 language code of the target language. */
		targetLanguageCode?: string | null;

		/** Output only. Timestamp when this dataset was last updated. */
		updateTime?: string | null;
	}

	/** An Adaptive MT Dataset. */
	export interface AdaptiveMtDatasetFormProperties {

		/** Output only. Timestamp when this dataset was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName: FormControl<string | null | undefined>,

		/** The number of examples in the dataset. */
		exampleCount: FormControl<number | null | undefined>,

		/** Required. The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}` */
		name: FormControl<string | null | undefined>,

		/** The BCP-47 language code of the source language. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** The BCP-47 language code of the target language. */
		targetLanguageCode: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this dataset was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtDatasetFormGroup() {
		return new FormGroup<AdaptiveMtDatasetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exampleCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AdaptiveMtFile. */
	export interface AdaptiveMtFile {

		/** Output only. Timestamp when this file was created. */
		createTime?: string | null;

		/** The file's display name. */
		displayName?: string | null;

		/** The number of entries that the file contains. */
		entryCount?: number | null;

		/** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/files/{file}` */
		name?: string | null;

		/** Output only. Timestamp when this file was last updated. */
		updateTime?: string | null;
	}

	/** An AdaptiveMtFile. */
	export interface AdaptiveMtFileFormProperties {

		/** Output only. Timestamp when this file was created. */
		createTime: FormControl<string | null | undefined>,

		/** The file's display name. */
		displayName: FormControl<string | null | undefined>,

		/** The number of entries that the file contains. */
		entryCount: FormControl<number | null | undefined>,

		/** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/files/{file}` */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this file was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtFileFormGroup() {
		return new FormGroup<AdaptiveMtFileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entryCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AdaptiveMt sentence entry. */
	export interface AdaptiveMtSentence {

		/** Output only. Timestamp when this sentence was created. */
		createTime?: string | null;

		/** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/files/{file}/sentences/{sentence}` */
		name?: string | null;

		/** Required. The source sentence. */
		sourceSentence?: string | null;

		/** Required. The target sentence. */
		targetSentence?: string | null;

		/** Output only. Timestamp when this sentence was last updated. */
		updateTime?: string | null;
	}

	/** An AdaptiveMt sentence entry. */
	export interface AdaptiveMtSentenceFormProperties {

		/** Output only. Timestamp when this sentence was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/files/{file}/sentences/{sentence}` */
		name: FormControl<string | null | undefined>,

		/** Required. The source sentence. */
		sourceSentence: FormControl<string | null | undefined>,

		/** Required. The target sentence. */
		targetSentence: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this sentence was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtSentenceFormGroup() {
		return new FormGroup<AdaptiveMtSentenceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceSentence: new FormControl<string | null | undefined>(undefined),
			targetSentence: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for sending an AdaptiveMt translation query. */
	export interface AdaptiveMtTranslateRequest {

		/** Required. The content of the input in string format. For now only one sentence per request is supported. */
		content?: Array<string>;

		/** Required. The resource name for the dataset to use for adaptive MT. `projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}` */
		dataset?: string | null;
	}

	/** The request for sending an AdaptiveMt translation query. */
	export interface AdaptiveMtTranslateRequestFormProperties {

		/** Required. The resource name for the dataset to use for adaptive MT. `projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}` */
		dataset: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtTranslateRequestFormGroup() {
		return new FormGroup<AdaptiveMtTranslateRequestFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AdaptiveMtTranslate response. */
	export interface AdaptiveMtTranslateResponse {

		/** Output only. The translation's language code. */
		languageCode?: string | null;

		/** Output only. The translation. */
		translations?: Array<AdaptiveMtTranslation>;
	}

	/** An AdaptiveMtTranslate response. */
	export interface AdaptiveMtTranslateResponseFormProperties {

		/** Output only. The translation's language code. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtTranslateResponseFormGroup() {
		return new FormGroup<AdaptiveMtTranslateResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AdaptiveMt translation. */
	export interface AdaptiveMtTranslation {

		/** Output only. The translated text. */
		translatedText?: string | null;
	}

	/** An AdaptiveMt translation. */
	export interface AdaptiveMtTranslationFormProperties {

		/** Output only. The translated text. */
		translatedText: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveMtTranslationFormGroup() {
		return new FormGroup<AdaptiveMtTranslationFormProperties>({
			translatedText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input configuration for BatchTranslateDocument request. */
	export interface BatchDocumentInputConfig {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}

	/** Input configuration for BatchTranslateDocument request. */
	export interface BatchDocumentInputConfigFormProperties {
	}
	export function CreateBatchDocumentInputConfigFormGroup() {
		return new FormGroup<BatchDocumentInputConfigFormProperties>({
		});

	}


	/** The Google Cloud Storage location for the input content. */
	export interface GcsSource {

		/** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
		inputUri?: string | null;
	}

	/** The Google Cloud Storage location for the input content. */
	export interface GcsSourceFormProperties {

		/** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for BatchTranslateDocument request. */
	export interface BatchDocumentOutputConfig {

		/** The Google Cloud Storage location for the output content. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for BatchTranslateDocument request. */
	export interface BatchDocumentOutputConfigFormProperties {
	}
	export function CreateBatchDocumentOutputConfigFormGroup() {
		return new FormGroup<BatchDocumentOutputConfigFormProperties>({
		});

	}


	/** The Google Cloud Storage location for the output content. */
	export interface GcsDestination {

		/** Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned. */
		outputUriPrefix?: string | null;
	}

	/** The Google Cloud Storage location for the output content. */
	export interface GcsDestinationFormProperties {

		/** Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The BatchTranslateDocument request. */
	export interface BatchTranslateDocumentRequest {

		/** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
		customizedAttribution?: string | null;

		/** Optional. If true, enable auto rotation correction in DVS. */
		enableRotationCorrection?: boolean | null;

		/** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
		enableShadowRemovalNativePdf?: boolean | null;

		/** Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified, output files will be in the same format as the original file. */
		formatConversions?: {[id: string]: string };

		/** Optional. Glossaries to be applied. It's keyed by target language code. */
		glossaries?: {[id: string]: TranslateTextGlossaryConfig };

		/** Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
		inputConfigs?: Array<BatchDocumentInputConfig>;

		/** Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
		models?: {[id: string]: string };

		/** Output configuration for BatchTranslateDocument request. */
		outputConfig?: BatchDocumentOutputConfig;

		/** Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
		sourceLanguageCode?: string | null;

		/** Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here. */
		targetLanguageCodes?: Array<string>;
	}

	/** The BatchTranslateDocument request. */
	export interface BatchTranslateDocumentRequestFormProperties {

		/** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
		customizedAttribution: FormControl<string | null | undefined>,

		/** Optional. If true, enable auto rotation correction in DVS. */
		enableRotationCorrection: FormControl<boolean | null | undefined>,

		/** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
		enableShadowRemovalNativePdf: FormControl<boolean | null | undefined>,

		/** Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified, output files will be in the same format as the original file. */
		formatConversions: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Glossaries to be applied. It's keyed by target language code. */
		glossaries: FormControl<{[id: string]: TranslateTextGlossaryConfig } | null | undefined>,

		/** Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
		models: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). */
		sourceLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateBatchTranslateDocumentRequestFormGroup() {
		return new FormGroup<BatchTranslateDocumentRequestFormProperties>({
			customizedAttribution: new FormControl<string | null | undefined>(undefined),
			enableRotationCorrection: new FormControl<boolean | null | undefined>(undefined),
			enableShadowRemovalNativePdf: new FormControl<boolean | null | undefined>(undefined),
			formatConversions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			glossaries: new FormControl<{[id: string]: TranslateTextGlossaryConfig } | null | undefined>(undefined),
			models: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
	export interface TranslateTextGlossaryConfig {

		/** Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}` */
		glossary?: string | null;

		/** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
		ignoreCase?: boolean | null;
	}

	/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
	export interface TranslateTextGlossaryConfigFormProperties {

		/** Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}` */
		glossary: FormControl<string | null | undefined>,

		/** Optional. Indicates match is case insensitive. The default value is `false` if missing. */
		ignoreCase: FormControl<boolean | null | undefined>,
	}
	export function CreateTranslateTextGlossaryConfigFormGroup() {
		return new FormGroup<TranslateTextGlossaryConfigFormProperties>({
			glossary: new FormControl<string | null | undefined>(undefined),
			ignoreCase: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The batch translation request. */
	export interface BatchTranslateTextRequest {

		/** Optional. Glossaries to be applied for translation. It's keyed by target language code. */
		glossaries?: {[id: string]: TranslateTextGlossaryConfig };

		/** Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding. */
		inputConfigs?: Array<InputConfig>;

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels?: {[id: string]: string };

		/** Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
		models?: {[id: string]: string };

		/** Output configuration for BatchTranslateText request. */
		outputConfig?: OutputConfig;

		/** Required. Source language code. */
		sourceLanguageCode?: string | null;

		/** Required. Specify up to 10 language codes here. */
		targetLanguageCodes?: Array<string>;
	}

	/** The batch translation request. */
	export interface BatchTranslateTextRequestFormProperties {

		/** Optional. Glossaries to be applied for translation. It's keyed by target language code. */
		glossaries: FormControl<{[id: string]: TranslateTextGlossaryConfig } | null | undefined>,

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. */
		models: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Source language code. */
		sourceLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateBatchTranslateTextRequestFormGroup() {
		return new FormGroup<BatchTranslateTextRequestFormProperties>({
			glossaries: new FormControl<{[id: string]: TranslateTextGlossaryConfig } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			models: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input configuration for BatchTranslateText request. */
	export interface InputConfig {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;

		/** Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty. */
		mimeType?: string | null;
	}

	/** Input configuration for BatchTranslateText request. */
	export interface InputConfigFormProperties {

		/** Optional. Can be "text/plain" or "text/html". For `.tsv`, "text/html" is used if mime_type is missing. For `.html`, this field must be "text/html" or empty. For `.txt`, this field must be "text/plain" or empty. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for BatchTranslateText request. */
	export interface OutputConfig {

		/** The Google Cloud Storage location for the output content. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for BatchTranslateText request. */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** A dataset that hosts the examples (sentence pairs) used for translation models. */
	export interface Dataset {

		/** Output only. Timestamp when this dataset was created. */
		createTime?: string | null;

		/** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName?: string | null;

		/** Output only. The number of examples in the dataset. */
		exampleCount?: number | null;

		/** The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
		name?: string | null;

		/** The BCP-47 language code of the source language. */
		sourceLanguageCode?: string | null;

		/** The BCP-47 language code of the target language. */
		targetLanguageCode?: string | null;

		/** Output only. Number of test examples (sentence pairs). */
		testExampleCount?: number | null;

		/** Output only. Number of training examples (sentence pairs). */
		trainExampleCount?: number | null;

		/** Output only. Timestamp when this dataset was last updated. */
		updateTime?: string | null;

		/** Output only. Number of validation examples (sentence pairs). */
		validateExampleCount?: number | null;
	}

	/** A dataset that hosts the examples (sentence pairs) used for translation models. */
	export interface DatasetFormProperties {

		/** Output only. Timestamp when this dataset was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The number of examples in the dataset. */
		exampleCount: FormControl<number | null | undefined>,

		/** The resource name of the dataset, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
		name: FormControl<string | null | undefined>,

		/** The BCP-47 language code of the source language. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** The BCP-47 language code of the target language. */
		targetLanguageCode: FormControl<string | null | undefined>,

		/** Output only. Number of test examples (sentence pairs). */
		testExampleCount: FormControl<number | null | undefined>,

		/** Output only. Number of training examples (sentence pairs). */
		trainExampleCount: FormControl<number | null | undefined>,

		/** Output only. Timestamp when this dataset was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Number of validation examples (sentence pairs). */
		validateExampleCount: FormControl<number | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exampleCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
			testExampleCount: new FormControl<number | null | undefined>(undefined),
			trainExampleCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			validateExampleCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input configuration for datasets. */
	export interface DatasetInputConfig {

		/** Files containing the sentence pairs to be imported to the dataset. */
		inputFiles?: Array<InputFile>;
	}

	/** Input configuration for datasets. */
	export interface DatasetInputConfigFormProperties {
	}
	export function CreateDatasetInputConfigFormGroup() {
		return new FormGroup<DatasetInputConfigFormProperties>({
		});

	}


	/** An input file. */
	export interface InputFile {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsInputSource;

		/** Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split. */
		usage?: string | null;
	}

	/** An input file. */
	export interface InputFileFormProperties {

		/** Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split. */
		usage: FormControl<string | null | undefined>,
	}
	export function CreateInputFileFormGroup() {
		return new FormGroup<InputFileFormProperties>({
			usage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location for the input content. */
	export interface GcsInputSource {

		/** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
		inputUri?: string | null;
	}

	/** The Google Cloud Storage location for the input content. */
	export interface GcsInputSourceFormProperties {

		/** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGcsInputSourceFormGroup() {
		return new FormGroup<GcsInputSourceFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for datasets. */
	export interface DatasetOutputConfig {

		/** The Google Cloud Storage location for the output content. */
		gcsDestination?: GcsOutputDestination;
	}

	/** Output configuration for datasets. */
	export interface DatasetOutputConfigFormProperties {
	}
	export function CreateDatasetOutputConfigFormGroup() {
		return new FormGroup<DatasetOutputConfigFormProperties>({
		});

	}


	/** The Google Cloud Storage location for the output content. */
	export interface GcsOutputDestination {

		/** Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist. */
		outputUriPrefix?: string | null;
	}

	/** The Google Cloud Storage location for the output content. */
	export interface GcsOutputDestinationFormProperties {

		/** Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`. The requesting user must have write permission to the bucket. The directory will be created if it doesn't exist. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsOutputDestinationFormGroup() {
		return new FormGroup<GcsOutputDestinationFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for language detection. */
	export interface DetectLanguageRequest {

		/** The content of the input stored as a string. */
		content?: string | null;

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels?: {[id: string]: string };

		/** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
		mimeType?: string | null;

		/** Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used. */
		model?: string | null;
	}

	/** The request message for language detection. */
	export interface DetectLanguageRequestFormProperties {

		/** The content of the input stored as a string. */
		content: FormControl<string | null | undefined>,

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
		mimeType: FormControl<string | null | undefined>,

		/** Optional. The language detection model to be used. Format: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}` Only one language detection model is currently supported: `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`. If not specified, the default model is used. */
		model: FormControl<string | null | undefined>,
	}
	export function CreateDetectLanguageRequestFormGroup() {
		return new FormGroup<DetectLanguageRequestFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for language detection. */
	export interface DetectLanguageResponse {

		/** The most probable language detected by the Translation API. For each request, the Translation API will always return only one result. */
		languages?: Array<DetectedLanguage>;
	}

	/** The response message for language detection. */
	export interface DetectLanguageResponseFormProperties {
	}
	export function CreateDetectLanguageResponseFormGroup() {
		return new FormGroup<DetectLanguageResponseFormProperties>({
		});

	}


	/** The response message for language detection. */
	export interface DetectedLanguage {

		/** The confidence of the detection result for this language. */
		confidence?: number | null;

		/** The ISO-639 language code of the source content in the request, detected automatically. */
		languageCode?: string | null;
	}

	/** The response message for language detection. */
	export interface DetectedLanguageFormProperties {

		/** The confidence of the detection result for this language. */
		confidence: FormControl<number | null | undefined>,

		/** The ISO-639 language code of the source content in the request, detected automatically. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateDetectedLanguageFormGroup() {
		return new FormGroup<DetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A document translation request input config. */
	export interface DocumentInputConfig {

		/** Document's content represented as a stream of bytes. */
		content?: string | null;

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;

		/** Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
		mimeType?: string | null;
	}

	/** A document translation request input config. */
	export interface DocumentInputConfigFormProperties {

		/** Document's content represented as a stream of bytes. */
		content: FormControl<string | null | undefined>,

		/** Specifies the input document's mime_type. If not specified it will be determined using the file extension for gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently supported mime types are: - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentInputConfigFormGroup() {
		return new FormGroup<DocumentInputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A document translation request output config. */
	export interface DocumentOutputConfig {

		/** The Google Cloud Storage location for the output content. */
		gcsDestination?: GcsDestination;

		/** Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
		mimeType?: string | null;
	}

	/** A document translation request output config. */
	export interface DocumentOutputConfigFormProperties {

		/** Optional. Specifies the translated document's mime_type. If not specified, the translated file's mime type will be the same as the input file's mime type. Currently only support the output mime type to be the same as input mime type. - application/pdf - application/vnd.openxmlformats-officedocument.wordprocessingml.document - application/vnd.openxmlformats-officedocument.presentationml.presentation - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentOutputConfigFormGroup() {
		return new FormGroup<DocumentOutputConfigFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A translated document message. */
	export interface DocumentTranslation {

		/** The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats. */
		byteStreamOutputs?: Array<string>;

		/** The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode?: string | null;

		/** The translated document's mime type. */
		mimeType?: string | null;
	}

	/** A translated document message. */
	export interface DocumentTranslationFormProperties {

		/** The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode: FormControl<string | null | undefined>,

		/** The translated document's mime type. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateDocumentTranslationFormGroup() {
		return new FormGroup<DocumentTranslationFormProperties>({
			detectedLanguageCode: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A sentence pair. */
	export interface Example {

		/** Output only. The resource name of the example, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}' */
		name?: string | null;

		/** Sentence in source language. */
		sourceText?: string | null;

		/** Sentence in target language. */
		targetText?: string | null;

		/** Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST. */
		usage?: string | null;
	}

	/** A sentence pair. */
	export interface ExampleFormProperties {

		/** Output only. The resource name of the example, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}' */
		name: FormControl<string | null | undefined>,

		/** Sentence in source language. */
		sourceText: FormControl<string | null | undefined>,

		/** Sentence in target language. */
		targetText: FormControl<string | null | undefined>,

		/** Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST. */
		usage: FormControl<string | null | undefined>,
	}
	export function CreateExampleFormGroup() {
		return new FormGroup<ExampleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sourceText: new FormControl<string | null | undefined>(undefined),
			targetText: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ExportData. */
	export interface ExportDataRequest {

		/** Output configuration for datasets. */
		outputConfig?: DatasetOutputConfig;
	}

	/** Request message for ExportData. */
	export interface ExportDataRequestFormProperties {
	}
	export function CreateExportDataRequestFormGroup() {
		return new FormGroup<ExportDataRequestFormProperties>({
		});

	}


	/** An inlined file. */
	export interface FileInputSource {

		/** Required. The file's byte contents. */
		content?: string | null;

		/** Required. The file's display name. */
		displayName?: string | null;

		/** Required. The file's mime type. */
		mimeType?: string | null;
	}

	/** An inlined file. */
	export interface FileInputSourceFormProperties {

		/** Required. The file's byte contents. */
		content: FormControl<string | null | undefined>,

		/** Required. The file's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The file's mime type. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateFileInputSourceFormGroup() {
		return new FormGroup<FileInputSourceFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a glossary built from user-provided data. */
	export interface Glossary {

		/** Optional. The display name of the glossary. */
		displayName?: string | null;

		/** Output only. When the glossary creation was finished. */
		endTime?: string | null;

		/** Output only. The number of entries defined in the glossary. */
		entryCount?: number | null;

		/** Input configuration for glossaries. */
		inputConfig?: GlossaryInputConfig;

		/** Used with equivalent term set glossaries. */
		languageCodesSet?: LanguageCodesSet;

		/** Used with unidirectional glossaries. */
		languagePair?: LanguageCodePair;

		/** Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. */
		name?: string | null;

		/** Output only. When CreateGlossary was called. */
		submitTime?: string | null;
	}

	/** Represents a glossary built from user-provided data. */
	export interface GlossaryFormProperties {

		/** Optional. The display name of the glossary. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. When the glossary creation was finished. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The number of entries defined in the glossary. */
		entryCount: FormControl<number | null | undefined>,

		/** Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. When CreateGlossary was called. */
		submitTime: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryFormGroup() {
		return new FormGroup<GlossaryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			entryCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			submitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input configuration for glossaries. */
	export interface GlossaryInputConfig {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}

	/** Input configuration for glossaries. */
	export interface GlossaryInputConfigFormProperties {
	}
	export function CreateGlossaryInputConfigFormGroup() {
		return new FormGroup<GlossaryInputConfigFormProperties>({
		});

	}


	/** Used with equivalent term set glossaries. */
	export interface LanguageCodesSet {

		/** The ISO-639 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code. */
		languageCodes?: Array<string>;
	}

	/** Used with equivalent term set glossaries. */
	export interface LanguageCodesSetFormProperties {
	}
	export function CreateLanguageCodesSetFormGroup() {
		return new FormGroup<LanguageCodesSetFormProperties>({
		});

	}


	/** Used with unidirectional glossaries. */
	export interface LanguageCodePair {

		/** Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code. */
		sourceLanguageCode?: string | null;

		/** Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code. */
		targetLanguageCode?: string | null;
	}

	/** Used with unidirectional glossaries. */
	export interface LanguageCodePairFormProperties {

		/** Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code. */
		targetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateLanguageCodePairFormGroup() {
		return new FormGroup<LanguageCodePairFormProperties>({
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry in a glossary. */
	export interface GlossaryEntry {

		/** Describes the glossary entry. */
		description?: string | null;

		/** Required. The resource name of the entry. Format: "projects/locations/glossaries/glossaryEntries/*" */
		name?: string | null;

		/** Represents a single entry for an unidirectional glossary. */
		termsPair?: GlossaryTermsPair;

		/** Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set. */
		termsSet?: GlossaryTermsSet;
	}

	/** Represents a single entry in a glossary. */
	export interface GlossaryEntryFormProperties {

		/** Describes the glossary entry. */
		description: FormControl<string | null | undefined>,

		/** Required. The resource name of the entry. Format: "projects/locations/glossaries/glossaryEntries/*" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryEntryFormGroup() {
		return new FormGroup<GlossaryEntryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry for an unidirectional glossary. */
	export interface GlossaryTermsPair {

		/** Represents a single glossary term */
		sourceTerm?: GlossaryTerm;

		/** Represents a single glossary term */
		targetTerm?: GlossaryTerm;
	}

	/** Represents a single entry for an unidirectional glossary. */
	export interface GlossaryTermsPairFormProperties {
	}
	export function CreateGlossaryTermsPairFormGroup() {
		return new FormGroup<GlossaryTermsPairFormProperties>({
		});

	}


	/** Represents a single glossary term */
	export interface GlossaryTerm {

		/** The language for this glossary term. */
		languageCode?: string | null;

		/** The text for the glossary term. */
		text?: string | null;
	}

	/** Represents a single glossary term */
	export interface GlossaryTermFormProperties {

		/** The language for this glossary term. */
		languageCode: FormControl<string | null | undefined>,

		/** The text for the glossary term. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryTermFormGroup() {
		return new FormGroup<GlossaryTermFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set. */
	export interface GlossaryTermsSet {

		/** Each term in the set represents a term that can be replaced by the other terms. */
		terms?: Array<GlossaryTerm>;
	}

	/** Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set. */
	export interface GlossaryTermsSetFormProperties {
	}
	export function CreateGlossaryTermsSetFormGroup() {
		return new FormGroup<GlossaryTermsSetFormProperties>({
		});

	}


	/** The request for importing an AdaptiveMt file along with its sentences. */
	export interface ImportAdaptiveMtFileRequest {

		/** An inlined file. */
		fileInputSource?: FileInputSource;

		/** The Google Cloud Storage location for the input content. */
		gcsInputSource?: GcsInputSource;
	}

	/** The request for importing an AdaptiveMt file along with its sentences. */
	export interface ImportAdaptiveMtFileRequestFormProperties {
	}
	export function CreateImportAdaptiveMtFileRequestFormGroup() {
		return new FormGroup<ImportAdaptiveMtFileRequestFormProperties>({
		});

	}


	/** The response for importing an AdaptiveMtFile */
	export interface ImportAdaptiveMtFileResponse {

		/** An AdaptiveMtFile. */
		adaptiveMtFile?: AdaptiveMtFile;
	}

	/** The response for importing an AdaptiveMtFile */
	export interface ImportAdaptiveMtFileResponseFormProperties {
	}
	export function CreateImportAdaptiveMtFileResponseFormGroup() {
		return new FormGroup<ImportAdaptiveMtFileResponseFormProperties>({
		});

	}


	/** Request message for ImportData. */
	export interface ImportDataRequest {

		/** Input configuration for datasets. */
		inputConfig?: DatasetInputConfig;
	}

	/** Request message for ImportData. */
	export interface ImportDataRequestFormProperties {
	}
	export function CreateImportDataRequestFormGroup() {
		return new FormGroup<ImportDataRequestFormProperties>({
		});

	}


	/** A list of AdaptiveMtDatasets. */
	export interface ListAdaptiveMtDatasetsResponse {

		/** Output only. A list of Adaptive MT datasets. */
		adaptiveMtDatasets?: Array<AdaptiveMtDataset>;

		/** Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to `ListAdaptiveMtDatasets` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of AdaptiveMtDatasets. */
	export interface ListAdaptiveMtDatasetsResponseFormProperties {

		/** Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to `ListAdaptiveMtDatasets` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdaptiveMtDatasetsResponseFormGroup() {
		return new FormGroup<ListAdaptiveMtDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for listing all AdaptiveMt files under a given dataset. */
	export interface ListAdaptiveMtFilesResponse {

		/** Output only. The Adaptive MT files. */
		adaptiveMtFiles?: Array<AdaptiveMtFile>;

		/** Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** The response for listing all AdaptiveMt files under a given dataset. */
	export interface ListAdaptiveMtFilesResponseFormProperties {

		/** Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to `ListAdaptiveMtFiles` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdaptiveMtFilesResponseFormGroup() {
		return new FormGroup<ListAdaptiveMtFilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List AdaptiveMt sentences response. */
	export interface ListAdaptiveMtSentencesResponse {

		/** Output only. The list of AdaptiveMtSentences. */
		adaptiveMtSentences?: Array<AdaptiveMtSentence>;

		/** Optional. */
		nextPageToken?: string | null;
	}

	/** List AdaptiveMt sentences response. */
	export interface ListAdaptiveMtSentencesResponseFormProperties {

		/** Optional. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdaptiveMtSentencesResponseFormGroup() {
		return new FormGroup<ListAdaptiveMtSentencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDatasets. */
	export interface ListDatasetsResponse {

		/** The datasets read. */
		datasets?: Array<Dataset>;

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDatasets. */
	export interface ListDatasetsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to obtain the corresponding page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListExamples. */
	export interface ListExamplesResponse {

		/** The sentence pairs. */
		examples?: Array<Example>;

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page. */
		nextPageToken?: string | null;
	}

	/** Response message for ListExamples. */
	export interface ListExamplesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to obtain the corresponding page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExamplesResponseFormGroup() {
		return new FormGroup<ListExamplesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListGlossaries. */
	export interface ListGlossariesResponse {

		/** The list of glossaries for a project. */
		glossaries?: Array<Glossary>;

		/** A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for ListGlossaries. */
	export interface ListGlossariesResponseFormProperties {

		/** A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGlossariesResponseFormGroup() {
		return new FormGroup<ListGlossariesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListGlossaryEntries */
	export interface ListGlossaryEntriesResponse {

		/** Optional. The Glossary Entries */
		glossaryEntries?: Array<GlossaryEntry>;

		/** Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls. */
		nextPageToken?: string | null;
	}

	/** Response message for ListGlossaryEntries */
	export interface ListGlossaryEntriesResponseFormProperties {

		/** Optional. A token to retrieve a page of results. Pass this value in the [ListGLossaryEntriesRequest.page_token] field in the subsequent calls. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGlossaryEntriesResponseFormGroup() {
		return new FormGroup<ListGlossaryEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

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
	export interface LocationFormProperties {

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
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListModels. */
	export interface ListModelsResponse {

		/** The models read. */
		models?: Array<Model>;

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page. */
		nextPageToken?: string | null;
	}

	/** Response message for ListModels. */
	export interface ListModelsResponseFormProperties {

		/** A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A trained translation model. */
	export interface Model {

		/** Output only. Timestamp when the model resource was created, which is also when the training started. */
		createTime?: string | null;

		/** The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
		dataset?: string | null;

		/** The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName?: string | null;

		/** The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}` */
		name?: string | null;

		/** Output only. The BCP-47 language code of the source language. */
		sourceLanguageCode?: string | null;

		/** Output only. The BCP-47 language code of the target language. */
		targetLanguageCode?: string | null;

		/** Output only. Number of examples (sentence pairs) used to test the model. */
		testExampleCount?: number | null;

		/** Output only. Number of examples (sentence pairs) used to train the model. */
		trainExampleCount?: number | null;

		/** Output only. Timestamp when this model was last updated. */
		updateTime?: string | null;

		/** Output only. Number of examples (sentence pairs) used to validate the model. */
		validateExampleCount?: number | null;
	}

	/** A trained translation model. */
	export interface ModelFormProperties {

		/** Output only. Timestamp when the model resource was created, which is also when the training started. */
		createTime: FormControl<string | null | undefined>,

		/** The dataset from which the model is trained, in form of `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}` */
		dataset: FormControl<string | null | undefined>,

		/** The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the model, in form of `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The BCP-47 language code of the source language. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Output only. The BCP-47 language code of the target language. */
		targetLanguageCode: FormControl<string | null | undefined>,

		/** Output only. Number of examples (sentence pairs) used to test the model. */
		testExampleCount: FormControl<number | null | undefined>,

		/** Output only. Number of examples (sentence pairs) used to train the model. */
		trainExampleCount: FormControl<number | null | undefined>,

		/** Output only. Timestamp when this model was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Number of examples (sentence pairs) used to validate the model. */
		validateExampleCount: FormControl<number | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
			testExampleCount: new FormControl<number | null | undefined>(undefined),
			trainExampleCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			validateExampleCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** A single romanization response. */
	export interface Romanization {

		/** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode?: string | null;

		/** Romanized text. If an error occurs during romanization, this field might be excluded from the response. */
		romanizedText?: string | null;
	}

	/** A single romanization response. */
	export interface RomanizationFormProperties {

		/** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode: FormControl<string | null | undefined>,

		/** Romanized text. If an error occurs during romanization, this field might be excluded from the response. */
		romanizedText: FormControl<string | null | undefined>,
	}
	export function CreateRomanizationFormGroup() {
		return new FormGroup<RomanizationFormProperties>({
			detectedLanguageCode: new FormControl<string | null | undefined>(undefined),
			romanizedText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for synchronous romanization. */
	export interface RomanizeTextRequest {

		/** Required. The content of the input in string format. */
		contents?: Array<string>;

		/** Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language for each content in the response. */
		sourceLanguageCode?: string | null;
	}

	/** The request message for synchronous romanization. */
	export interface RomanizeTextRequestFormProperties {

		/** Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh". If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language for each content in the response. */
		sourceLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateRomanizeTextRequestFormGroup() {
		return new FormGroup<RomanizeTextRequestFormProperties>({
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for synchronous romanization. */
	export interface RomanizeTextResponse {

		/** Text romanization responses. This field has the same length as `contents`. */
		romanizations?: Array<Romanization>;
	}

	/** The response message for synchronous romanization. */
	export interface RomanizeTextResponseFormProperties {
	}
	export function CreateRomanizeTextResponseFormGroup() {
		return new FormGroup<RomanizeTextResponseFormProperties>({
		});

	}


	/** A single supported language response corresponds to information related to one supported language. */
	export interface SupportedLanguage {

		/** Human-readable name of the language localized in the display language specified in the request. */
		displayName?: string | null;

		/** Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN'). */
		languageCode?: string | null;

		/** Can be used as a source language. */
		supportSource?: boolean | null;

		/** Can be used as a target language. */
		supportTarget?: boolean | null;
	}

	/** A single supported language response corresponds to information related to one supported language. */
	export interface SupportedLanguageFormProperties {

		/** Human-readable name of the language localized in the display language specified in the request. */
		displayName: FormControl<string | null | undefined>,

		/** Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN'). */
		languageCode: FormControl<string | null | undefined>,

		/** Can be used as a source language. */
		supportSource: FormControl<boolean | null | undefined>,

		/** Can be used as a target language. */
		supportTarget: FormControl<boolean | null | undefined>,
	}
	export function CreateSupportedLanguageFormGroup() {
		return new FormGroup<SupportedLanguageFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			supportSource: new FormControl<boolean | null | undefined>(undefined),
			supportTarget: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response message for discovering supported languages. */
	export interface SupportedLanguages {

		/** A list of supported language responses. This list contains an entry for each language the Translation API supports. */
		languages?: Array<SupportedLanguage>;
	}

	/** The response message for discovering supported languages. */
	export interface SupportedLanguagesFormProperties {
	}
	export function CreateSupportedLanguagesFormGroup() {
		return new FormGroup<SupportedLanguagesFormProperties>({
		});

	}


	/** A document translation request. */
	export interface TranslateDocumentRequest {

		/** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
		customizedAttribution?: string | null;

		/** A document translation request input config. */
		documentInputConfig?: DocumentInputConfig;

		/** A document translation request output config. */
		documentOutputConfig?: DocumentOutputConfig;

		/** Optional. If true, enable auto rotation correction in DVS. */
		enableRotationCorrection?: boolean | null;

		/** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
		enableShadowRemovalNativePdf?: boolean | null;

		/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
		glossaryConfig?: TranslateTextGlossaryConfig;

		/** Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated. */
		isTranslateNativePdfOnly?: boolean | null;

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels?: {[id: string]: string };

		/** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation. */
		model?: string | null;

		/** Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model. */
		sourceLanguageCode?: string | null;

		/** Required. The ISO-639 language code to use for translation of the input document, set to one of the language codes listed in Language Support. */
		targetLanguageCode?: string | null;
	}

	/** A document translation request. */
	export interface TranslateDocumentRequestFormProperties {

		/** Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos */
		customizedAttribution: FormControl<string | null | undefined>,

		/** Optional. If true, enable auto rotation correction in DVS. */
		enableRotationCorrection: FormControl<boolean | null | undefined>,

		/** Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only: false */
		enableShadowRemovalNativePdf: FormControl<boolean | null | undefined>,

		/** Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated. */
		isTranslateNativePdfOnly: FormControl<boolean | null | undefined>,

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided, the default Google model (NMT) will be used for translation. */
		model: FormControl<string | null | undefined>,

		/** Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Required. The ISO-639 language code to use for translation of the input document, set to one of the language codes listed in Language Support. */
		targetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateDocumentRequestFormGroup() {
		return new FormGroup<TranslateDocumentRequestFormProperties>({
			customizedAttribution: new FormControl<string | null | undefined>(undefined),
			enableRotationCorrection: new FormControl<boolean | null | undefined>(undefined),
			enableShadowRemovalNativePdf: new FormControl<boolean | null | undefined>(undefined),
			isTranslateNativePdfOnly: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A translated document response message. */
	export interface TranslateDocumentResponse {

		/** A translated document message. */
		documentTranslation?: DocumentTranslation;

		/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
		glossaryConfig?: TranslateTextGlossaryConfig;

		/** A translated document message. */
		glossaryDocumentTranslation?: DocumentTranslation;

		/** Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
		model?: string | null;
	}

	/** A translated document response message. */
	export interface TranslateDocumentResponseFormProperties {

		/** Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example: If the 'model' field in TranslateDocumentRequest is: `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
		model: FormControl<string | null | undefined>,
	}
	export function CreateTranslateDocumentResponseFormGroup() {
		return new FormGroup<TranslateDocumentResponseFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for synchronous translation. */
	export interface TranslateTextRequest {

		/** Required. The content of the input in string format. We recommend the total content be less than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger text. */
		contents?: Array<string>;

		/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
		glossaryConfig?: TranslateTextGlossaryConfig;

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels?: {[id: string]: string };

		/** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
		mimeType?: string | null;

		/** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used */
		model?: string | null;

		/** Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. */
		sourceLanguageCode?: string | null;

		/** Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support. */
		targetLanguageCode?: string | null;

		/** Configures transliteration feature on top of translation. */
		transliterationConfig?: TransliterationConfig;
	}

	/** The request message for synchronous translation. */
	export interface TranslateTextRequestFormProperties {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The format of the source text, for example, "text/html", "text/plain". If left blank, the MIME type defaults to "text/html". */
		mimeType: FormControl<string | null | undefined>,

		/** Optional. The `model` type requested for this translation. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the default Google model (NMT) will be used */
		model: FormControl<string | null | undefined>,

		/** Optional. The ISO-639 language code of the input text if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in Language Support. If the source language isn't specified, the API attempts to identify the source language automatically and returns the source language within the response. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Required. The ISO-639 language code to use for translation of the input text, set to one of the language codes listed in Language Support. */
		targetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextRequestFormGroup() {
		return new FormGroup<TranslateTextRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures transliteration feature on top of translation. */
	export interface TransliterationConfig {

		/** If true, source text in romanized form can be translated to the target language. */
		enableTransliteration?: boolean | null;
	}

	/** Configures transliteration feature on top of translation. */
	export interface TransliterationConfigFormProperties {

		/** If true, source text in romanized form can be translated to the target language. */
		enableTransliteration: FormControl<boolean | null | undefined>,
	}
	export function CreateTransliterationConfigFormGroup() {
		return new FormGroup<TransliterationConfigFormProperties>({
			enableTransliteration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TranslateTextResponse {

		/** Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`. */
		glossaryTranslations?: Array<Translation>;

		/** Text translation responses with no glossary applied. This field has the same length as `contents`. */
		translations?: Array<Translation>;
	}
	export interface TranslateTextResponseFormProperties {
	}
	export function CreateTranslateTextResponseFormGroup() {
		return new FormGroup<TranslateTextResponseFormProperties>({
		});

	}


	/** A single translation response. */
	export interface Translation {

		/** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode?: string | null;

		/** Configures which glossary is used for a specific target language and defines options for applying that glossary. */
		glossaryConfig?: TranslateTextGlossaryConfig;

		/** Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
		model?: string | null;

		/** Text translated into the target language. If an error occurs during translation, this field might be excluded from the response. */
		translatedText?: string | null;
	}

	/** A single translation response. */
	export interface TranslationFormProperties {

		/** The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. */
		detectedLanguageCode: FormControl<string | null | undefined>,

		/** Only present when `model` is present in the request. `model` here is normalized to have project number. For example: If the `model` requested in TranslationTextRequest is `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`. */
		model: FormControl<string | null | undefined>,

		/** Text translated into the target language. If an error occurs during translation, this field might be excluded from the response. */
		translatedText: FormControl<string | null | undefined>,
	}
	export function CreateTranslationFormGroup() {
		return new FormGroup<TranslationFormProperties>({
			detectedLanguageCode: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			translatedText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateWaitOperationRequestFormGroup() {
		return new FormGroup<WaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exports dataset's data to the provided output location.
		 * Post v3/{dataset}:exportData
		 * @param {string} dataset Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_datasets_exportData(dataset: string, requestBody: ExportDataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (dataset == null ? '' : encodeURIComponent(dataset)) + ':exportData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import sentence pairs into translation Dataset.
		 * Post v3/{dataset}:importData
		 * @param {string} dataset Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_datasets_importData(dataset: string, requestBody: ImportDataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (dataset == null ? '' : encodeURIComponent(dataset)) + ':importData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v3/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Translate_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v3/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a glossary entry.
		 * Patch v3/{name}
		 * @param {string} name Required. The resource name of the entry. Format: "projects/locations/glossaries/glossaryEntries/*"
		 * @param {string} updateMask The list of fields to be updated. Currently only `display_name` and 'input_config'
		 * @return {GlossaryEntry} Successful response
		 */
		Translate_projects_locations_glossaries_glossaryEntries_patch(name: string, updateMask: string | null | undefined, requestBody: GlossaryEntry): Observable<GlossaryEntry> {
			return this.http.patch<GlossaryEntry>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v3/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Translate_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v3/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Translate_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v3/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Translate_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v3/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_operations_wait(name: string, requestBody: WaitOperationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Adaptive MT datasets for which the caller has read permission.
		 * Get v3/{parent}/adaptiveMtDatasets
		 * @param {string} parent Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}`
		 * @param {string} filter Optional. An expression for filtering the results of the request. Filter is not supported yet.
		 * @param {number} pageSize Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing.
		 * @return {ListAdaptiveMtDatasetsResponse} Successful response
		 */
		Translate_projects_locations_adaptiveMtDatasets_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdaptiveMtDatasetsResponse> {
			return this.http.get<ListAdaptiveMtDatasetsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adaptiveMtDatasets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Adaptive MT dataset.
		 * Post v3/{parent}/adaptiveMtDatasets
		 * @param {string} parent Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
		 * @return {AdaptiveMtDataset} Successful response
		 */
		Translate_projects_locations_adaptiveMtDatasets_create(parent: string, requestBody: AdaptiveMtDataset): Observable<AdaptiveMtDataset> {
			return this.http.post<AdaptiveMtDataset>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adaptiveMtDatasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
		 * Get v3/{parent}/adaptiveMtFiles
		 * @param {string} parent Required. The resource name of the project from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
		 * @param {number} pageSize Optional. 
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.
		 * @return {ListAdaptiveMtFilesResponse} Successful response
		 */
		Translate_projects_locations_adaptiveMtDatasets_adaptiveMtFiles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdaptiveMtFilesResponse> {
			return this.http.get<ListAdaptiveMtFilesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adaptiveMtFiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all AdaptiveMtSentences under a given file/dataset.
		 * Get v3/{parent}/adaptiveMtSentences
		 * @param {string} parent Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.
		 * @return {ListAdaptiveMtSentencesResponse} Successful response
		 */
		Translate_projects_locations_adaptiveMtDatasets_adaptiveMtSentences_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdaptiveMtSentencesResponse> {
			return this.http.get<ListAdaptiveMtSentencesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adaptiveMtSentences&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists datasets.
		 * Get v3/{parent}/datasets
		 * @param {string} parent Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
		 * @param {number} pageSize Optional. Requested page size. The server can return fewer results than requested.
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call.
		 * @return {ListDatasetsResponse} Successful response
		 */
		Translate_projects_locations_datasets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Dataset.
		 * Post v3/{parent}/datasets
		 * @param {string} parent Required. The project name.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_datasets_create(parent: string, requestBody: Dataset): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists sentence pairs in the dataset.
		 * Get v3/{parent}/examples
		 * @param {string} parent Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
		 * @param {string} filter Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN`
		 * @param {number} pageSize Optional. Requested page size. The server can return fewer results than requested.
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.
		 * @return {ListExamplesResponse} Successful response
		 */
		Translate_projects_locations_datasets_examples_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExamplesResponse> {
			return this.http.get<ListExamplesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/examples&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
		 * Get v3/{parent}/glossaries
		 * @param {string} parent Required. The name of the project from which to list all of the glossaries.
		 * @param {string} filter Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.
		 * @param {number} pageSize Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
		 * @return {ListGlossariesResponse} Successful response
		 */
		Translate_projects_locations_glossaries_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGlossariesResponse> {
			return this.http.get<ListGlossariesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/glossaries&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
		 * Post v3/{parent}/glossaries
		 * @param {string} parent Required. The project name.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_glossaries_create(parent: string, requestBody: Glossary): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/glossaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the entries for the glossary.
		 * Get v3/{parent}/glossaryEntries
		 * @param {string} parent Required. The parent glossary resource name for listing the glossary's entries.
		 * @param {number} pageSize Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing.
		 * @return {ListGlossaryEntriesResponse} Successful response
		 */
		Translate_projects_locations_glossaries_glossaryEntries_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGlossaryEntriesResponse> {
			return this.http.get<ListGlossaryEntriesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/glossaryEntries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a glossary entry.
		 * Post v3/{parent}/glossaryEntries
		 * @param {string} parent Required. The resource name of the glossary to create the entry under.
		 * @return {GlossaryEntry} Successful response
		 */
		Translate_projects_locations_glossaries_glossaryEntries_create(parent: string, requestBody: GlossaryEntry): Observable<GlossaryEntry> {
			return this.http.post<GlossaryEntry>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/glossaryEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists models.
		 * Get v3/{parent}/models
		 * @param {string} parent Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
		 * @param {string} filter Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`
		 * @param {number} pageSize Optional. Requested page size. The server can return fewer results than requested.
		 * @param {string} pageToken Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.
		 * @return {ListModelsResponse} Successful response
		 */
		Translate_projects_locations_models_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Model.
		 * Post v3/{parent}/models
		 * @param {string} parent Required. The project name, in form of `projects/{project}/locations/{location}`
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_models_create(parent: string, requestBody: Model): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of supported languages for translation.
		 * Get v3/{parent}/supportedLanguages
		 * @param {string} parent Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @param {string} displayLanguageCode Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
		 * @param {string} model Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
		 * @return {SupportedLanguages} Successful response
		 */
		Translate_projects_locations_getSupportedLanguages(parent: string, displayLanguageCode: string | null | undefined, model: string | null | undefined): Observable<SupportedLanguages> {
			return this.http.get<SupportedLanguages>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/supportedLanguages&displayLanguageCode=' + (displayLanguageCode == null ? '' : encodeURIComponent(displayLanguageCode)) + '&model=' + (model == null ? '' : encodeURIComponent(model)), {});
		}

		/**
		 * Translate text using Adaptive MT.
		 * Post v3/{parent}:adaptiveMtTranslate
		 * @param {string} parent Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`.
		 * @return {AdaptiveMtTranslateResponse} Successful response
		 */
		Translate_projects_locations_adaptiveMtTranslate(parent: string, requestBody: AdaptiveMtTranslateRequest): Observable<AdaptiveMtTranslateResponse> {
			return this.http.post<AdaptiveMtTranslateResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':adaptiveMtTranslate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
		 * Post v3/{parent}:batchTranslateDocument
		 * @param {string} parent Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_batchTranslateDocument(parent: string, requestBody: BatchTranslateDocumentRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':batchTranslateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
		 * Post v3/{parent}:batchTranslateText
		 * @param {string} parent Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @return {Operation} Successful response
		 */
		Translate_projects_locations_batchTranslateText(parent: string, requestBody: BatchTranslateTextRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':batchTranslateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the language of text within a request.
		 * Post v3/{parent}:detectLanguage
		 * @param {string} parent Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @return {DetectLanguageResponse} Successful response
		 */
		Translate_projects_locations_detectLanguage(parent: string, requestBody: DetectLanguageRequest): Observable<DetectLanguageResponse> {
			return this.http.post<DetectLanguageResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':detectLanguage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
		 * Post v3/{parent}:importAdaptiveMtFile
		 * @param {string} parent Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}`
		 * @return {ImportAdaptiveMtFileResponse} Successful response
		 */
		Translate_projects_locations_adaptiveMtDatasets_importAdaptiveMtFile(parent: string, requestBody: ImportAdaptiveMtFileRequest): Observable<ImportAdaptiveMtFileResponse> {
			return this.http.post<ImportAdaptiveMtFileResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':importAdaptiveMtFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Romanize input text written in non-Latin scripts to Latin text.
		 * Post v3/{parent}:romanizeText
		 * @param {string} parent Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.
		 * @return {RomanizeTextResponse} Successful response
		 */
		Translate_projects_locations_romanizeText(parent: string, requestBody: RomanizeTextRequest): Observable<RomanizeTextResponse> {
			return this.http.post<RomanizeTextResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':romanizeText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates documents in synchronous mode.
		 * Post v3/{parent}:translateDocument
		 * @param {string} parent Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @return {TranslateDocumentResponse} Successful response
		 */
		Translate_projects_locations_translateDocument(parent: string, requestBody: TranslateDocumentRequest): Observable<TranslateDocumentResponse> {
			return this.http.post<TranslateDocumentResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':translateDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Translates input text and returns translated text.
		 * Post v3/{parent}:translateText
		 * @param {string} parent Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
		 * @return {TranslateTextResponse} Successful response
		 */
		Translate_projects_locations_translateText(parent: string, requestBody: TranslateTextRequest): Observable<TranslateTextResponse> {
			return this.http.post<TranslateTextResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + ':translateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

