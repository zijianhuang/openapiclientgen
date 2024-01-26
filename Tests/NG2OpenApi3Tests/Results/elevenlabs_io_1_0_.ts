import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddVoiceResponseModel {

		/** Required */
		voice_id: string;
	}
	export interface AddVoiceResponseModelFormProperties {

		/** Required */
		voice_id: FormControl<string | null | undefined>,
	}
	export function CreateAddVoiceResponseModelFormGroup() {
		return new FormGroup<AddVoiceResponseModelFormProperties>({
			voice_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_Add_voice_v1_voices_add_post {

		/** How would you describe the voice? */
		description?: string | null;

		/**
		 * One or more audio files to clone the voice from
		 * Required
		 */
		files: Array<string>;

		/** Serialized labels dictionary for the voice. */
		labels?: string | null;

		/**
		 * The name that identifies this voice. This will be displayed in the dropdown of the website.
		 * Required
		 */
		name: string;
	}
	export interface Body_Add_voice_v1_voices_add_postFormProperties {

		/** How would you describe the voice? */
		description: FormControl<string | null | undefined>,

		/** Serialized labels dictionary for the voice. */
		labels: FormControl<string | null | undefined>,

		/**
		 * The name that identifies this voice. This will be displayed in the dropdown of the website.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBody_Add_voice_v1_voices_add_postFormGroup() {
		return new FormGroup<Body_Add_voice_v1_voices_add_postFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_Delete_history_items_v1_history_delete_post {

		/**
		 * A list of history items to remove, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.
		 * Required
		 */
		history_item_ids: Array<string>;
	}
	export interface Body_Delete_history_items_v1_history_delete_postFormProperties {
	}
	export function CreateBody_Delete_history_items_v1_history_delete_postFormGroup() {
		return new FormGroup<Body_Delete_history_items_v1_history_delete_postFormProperties>({
		});

	}

	export interface Body_Download_history_items_v1_history_download_post {

		/**
		 * A list of history items to download, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.
		 * Required
		 */
		history_item_ids: Array<string>;
	}
	export interface Body_Download_history_items_v1_history_download_postFormProperties {
	}
	export function CreateBody_Download_history_items_v1_history_download_postFormGroup() {
		return new FormGroup<Body_Download_history_items_v1_history_download_postFormProperties>({
		});

	}

	export interface Body_Edit_voice_v1_voices__voice_id__edit_post {

		/** How would you describe the voice? */
		description?: string | null;

		/** Audio files to add to the voice */
		files?: Array<string>;

		/** Serialized labels dictionary for the voice. */
		labels?: string | null;

		/**
		 * The name that identifies this voice. This will be displayed in the dropdown of the website.
		 * Required
		 */
		name: string;
	}
	export interface Body_Edit_voice_v1_voices__voice_id__edit_postFormProperties {

		/** How would you describe the voice? */
		description: FormControl<string | null | undefined>,

		/** Serialized labels dictionary for the voice. */
		labels: FormControl<string | null | undefined>,

		/**
		 * The name that identifies this voice. This will be displayed in the dropdown of the website.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBody_Edit_voice_v1_voices__voice_id__edit_postFormGroup() {
		return new FormGroup<Body_Edit_voice_v1_voices__voice_id__edit_postFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_Text_to_speech_v1_text_to_speech__voice_id__post {

		/**
		 * The text that will get converted into speech. Currently only English text is supported.
		 * Required
		 */
		text: string;

		/** Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request. */
		voice_settings?: VoiceSettingsResponseModel;
	}
	export interface Body_Text_to_speech_v1_text_to_speech__voice_id__postFormProperties {

		/**
		 * The text that will get converted into speech. Currently only English text is supported.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateBody_Text_to_speech_v1_text_to_speech__voice_id__postFormGroup() {
		return new FormGroup<Body_Text_to_speech_v1_text_to_speech__voice_id__postFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VoiceSettingsResponseModel {

		/** Required */
		similarity_boost: number;

		/** Required */
		stability: number;
	}
	export interface VoiceSettingsResponseModelFormProperties {

		/** Required */
		similarity_boost: FormControl<number | null | undefined>,

		/** Required */
		stability: FormControl<number | null | undefined>,
	}
	export function CreateVoiceSettingsResponseModelFormGroup() {
		return new FormGroup<VoiceSettingsResponseModelFormProperties>({
			similarity_boost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stability: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post {

		/**
		 * The text that will get converted into speech. Currently only English text is supported.
		 * Required
		 */
		text: string;

		/** Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request. */
		voice_settings?: VoiceSettingsResponseModel;
	}
	export interface Body_Text_to_speech_v1_text_to_speech__voice_id__stream_postFormProperties {

		/**
		 * The text that will get converted into speech. Currently only English text is supported.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateBody_Text_to_speech_v1_text_to_speech__voice_id__stream_postFormGroup() {
		return new FormGroup<Body_Text_to_speech_v1_text_to_speech__voice_id__stream_postFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExtendedSubscriptionResponseModel {

		/** Required */
		allowed_to_extend_character_limit: boolean;

		/** Required */
		available_models: Array<TTSModelResponseModel>;

		/** Required */
		can_extend_character_limit: boolean;

		/** Required */
		can_extend_voice_limit: boolean;

		/** Required */
		can_use_delayed_payment_methods: boolean;

		/** Required */
		can_use_instant_voice_cloning: boolean;

		/** Required */
		can_use_professional_voice_cloning: boolean;

		/** Required */
		character_count: number;

		/** Required */
		character_limit: number;

		/** Required */
		currency: ExtendedSubscriptionResponseModelCurrency;

		/** Required */
		next_character_count_reset_unix: number;

		/** Required */
		next_invoice: InvoiceResponseModel;

		/** Required */
		professional_voice_limit: number;

		/** Required */
		status: ExtendedSubscriptionResponseModelStatus;

		/** Required */
		tier: string;

		/** Required */
		voice_limit: number;
	}
	export interface ExtendedSubscriptionResponseModelFormProperties {

		/** Required */
		allowed_to_extend_character_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_extend_character_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_extend_voice_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_delayed_payment_methods: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_instant_voice_cloning: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_professional_voice_cloning: FormControl<boolean | null | undefined>,

		/** Required */
		character_count: FormControl<number | null | undefined>,

		/** Required */
		character_limit: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<ExtendedSubscriptionResponseModelCurrency | null | undefined>,

		/** Required */
		next_character_count_reset_unix: FormControl<number | null | undefined>,

		/** Required */
		professional_voice_limit: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<ExtendedSubscriptionResponseModelStatus | null | undefined>,

		/** Required */
		tier: FormControl<string | null | undefined>,

		/** Required */
		voice_limit: FormControl<number | null | undefined>,
	}
	export function CreateExtendedSubscriptionResponseModelFormGroup() {
		return new FormGroup<ExtendedSubscriptionResponseModelFormProperties>({
			allowed_to_extend_character_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_extend_character_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_extend_voice_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_delayed_payment_methods: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_instant_voice_cloning: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_professional_voice_cloning: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			character_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			character_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<ExtendedSubscriptionResponseModelCurrency | null | undefined>(undefined, [Validators.required]),
			next_character_count_reset_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			professional_voice_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ExtendedSubscriptionResponseModelStatus | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TTSModelResponseModel {

		/** Required */
		display_name: string;

		/** Required */
		model_id: string;

		/** Required */
		supported_language: Array<LanguageResponseModel>;
	}
	export interface TTSModelResponseModelFormProperties {

		/** Required */
		display_name: FormControl<string | null | undefined>,

		/** Required */
		model_id: FormControl<string | null | undefined>,
	}
	export function CreateTTSModelResponseModelFormGroup() {
		return new FormGroup<TTSModelResponseModelFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			model_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LanguageResponseModel {

		/** Required */
		display_name: string;

		/** Required */
		iso_code: string;
	}
	export interface LanguageResponseModelFormProperties {

		/** Required */
		display_name: FormControl<string | null | undefined>,

		/** Required */
		iso_code: FormControl<string | null | undefined>,
	}
	export function CreateLanguageResponseModelFormGroup() {
		return new FormGroup<LanguageResponseModelFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iso_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExtendedSubscriptionResponseModelCurrency { usd = 0, eur = 1 }

	export interface InvoiceResponseModel {

		/** Required */
		amount_due_cents: number;

		/** Required */
		next_payment_attempt_unix: number;
	}
	export interface InvoiceResponseModelFormProperties {

		/** Required */
		amount_due_cents: FormControl<number | null | undefined>,

		/** Required */
		next_payment_attempt_unix: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceResponseModelFormGroup() {
		return new FormGroup<InvoiceResponseModelFormProperties>({
			amount_due_cents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_payment_attempt_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExtendedSubscriptionResponseModelStatus { trialing = 0, active = 1, incomplete = 2, incomplete_expired = 3, past_due = 4, canceled = 5, unpaid = 6, free = 7 }

	export interface FeedbackResponseModel {

		/** Required */
		audio_quality: boolean;

		/** Required */
		emotions: boolean;

		/** Required */
		feedback: string;

		/** Required */
		glitches: boolean;

		/** Required */
		inaccurate_clone: boolean;

		/** Required */
		other: boolean;
		review_status?: string | null;

		/** Required */
		thumbs_up: boolean;
	}
	export interface FeedbackResponseModelFormProperties {

		/** Required */
		audio_quality: FormControl<boolean | null | undefined>,

		/** Required */
		emotions: FormControl<boolean | null | undefined>,

		/** Required */
		feedback: FormControl<string | null | undefined>,

		/** Required */
		glitches: FormControl<boolean | null | undefined>,

		/** Required */
		inaccurate_clone: FormControl<boolean | null | undefined>,

		/** Required */
		other: FormControl<boolean | null | undefined>,
		review_status: FormControl<string | null | undefined>,

		/** Required */
		thumbs_up: FormControl<boolean | null | undefined>,
	}
	export function CreateFeedbackResponseModelFormGroup() {
		return new FormGroup<FeedbackResponseModelFormProperties>({
			audio_quality: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			emotions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			feedback: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			glitches: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			inaccurate_clone: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			other: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			review_status: new FormControl<string | null | undefined>(undefined),
			thumbs_up: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FineTuningResponseModel {

		/** Required */
		fine_tuning_requested: boolean;

		/** Required */
		finetuning_state: FineTuningResponseModelFinetuning_state;

		/** Required */
		is_allowed_to_fine_tune: boolean;

		/** Required */
		model_id: string;

		/** Required */
		slice_ids: Array<string>;

		/** Required */
		verification_attempts: Array<VerificationAttemptResponseModel>;

		/** Required */
		verification_attempts_count: number;

		/** Required */
		verification_failures: Array<string>;
	}
	export interface FineTuningResponseModelFormProperties {

		/** Required */
		fine_tuning_requested: FormControl<boolean | null | undefined>,

		/** Required */
		finetuning_state: FormControl<FineTuningResponseModelFinetuning_state | null | undefined>,

		/** Required */
		is_allowed_to_fine_tune: FormControl<boolean | null | undefined>,

		/** Required */
		model_id: FormControl<string | null | undefined>,

		/** Required */
		verification_attempts_count: FormControl<number | null | undefined>,
	}
	export function CreateFineTuningResponseModelFormGroup() {
		return new FormGroup<FineTuningResponseModelFormProperties>({
			fine_tuning_requested: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			finetuning_state: new FormControl<FineTuningResponseModelFinetuning_state | null | undefined>(undefined, [Validators.required]),
			is_allowed_to_fine_tune: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			model_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			verification_attempts_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FineTuningResponseModelFinetuning_state { not_started = 0, is_fine_tuning = 1, fine_tuned = 2 }

	export interface VerificationAttemptResponseModel {

		/** Required */
		accepted: boolean;

		/** Required */
		date_unix: number;

		/** Required */
		levenshtein_distance: number;

		/** Required */
		recording: RecordingResponseModel;

		/** Required */
		similarity: number;

		/** Required */
		text: string;
	}
	export interface VerificationAttemptResponseModelFormProperties {

		/** Required */
		accepted: FormControl<boolean | null | undefined>,

		/** Required */
		date_unix: FormControl<number | null | undefined>,

		/** Required */
		levenshtein_distance: FormControl<number | null | undefined>,

		/** Required */
		similarity: FormControl<number | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateVerificationAttemptResponseModelFormGroup() {
		return new FormGroup<VerificationAttemptResponseModelFormProperties>({
			accepted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			date_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			levenshtein_distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			similarity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RecordingResponseModel {

		/** Required */
		mime_type: string;

		/** Required */
		recording_id: string;

		/** Required */
		size_bytes: number;

		/** Required */
		transcription: string;

		/** Required */
		upload_date_unix: number;
	}
	export interface RecordingResponseModelFormProperties {

		/** Required */
		mime_type: FormControl<string | null | undefined>,

		/** Required */
		recording_id: FormControl<string | null | undefined>,

		/** Required */
		size_bytes: FormControl<number | null | undefined>,

		/** Required */
		transcription: FormControl<string | null | undefined>,

		/** Required */
		upload_date_unix: FormControl<number | null | undefined>,
	}
	export function CreateRecordingResponseModelFormGroup() {
		return new FormGroup<RecordingResponseModelFormProperties>({
			mime_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recording_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size_bytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transcription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upload_date_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetHistoryResponseModel {

		/** Required */
		history: Array<HistoryItemResponseModel>;
	}
	export interface GetHistoryResponseModelFormProperties {
	}
	export function CreateGetHistoryResponseModelFormGroup() {
		return new FormGroup<GetHistoryResponseModelFormProperties>({
		});

	}

	export interface HistoryItemResponseModel {

		/** Required */
		character_count_change_from: number;

		/** Required */
		character_count_change_to: number;

		/** Required */
		content_type: string;

		/** Required */
		date_unix: number;

		/** Required */
		feedback: FeedbackResponseModel;

		/** Required */
		history_item_id: string;

		/** Required */
		request_id: string;

		/** Required */
		settings: string;

		/** Required */
		state: HistoryItemResponseModelState;

		/** Required */
		text: string;

		/** Required */
		voice_id: string;

		/** Required */
		voice_name: string;
	}
	export interface HistoryItemResponseModelFormProperties {

		/** Required */
		character_count_change_from: FormControl<number | null | undefined>,

		/** Required */
		character_count_change_to: FormControl<number | null | undefined>,

		/** Required */
		content_type: FormControl<string | null | undefined>,

		/** Required */
		date_unix: FormControl<number | null | undefined>,

		/** Required */
		history_item_id: FormControl<string | null | undefined>,

		/** Required */
		request_id: FormControl<string | null | undefined>,

		/** Required */
		settings: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<HistoryItemResponseModelState | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		voice_id: FormControl<string | null | undefined>,

		/** Required */
		voice_name: FormControl<string | null | undefined>,
	}
	export function CreateHistoryItemResponseModelFormGroup() {
		return new FormGroup<HistoryItemResponseModelFormProperties>({
			character_count_change_from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			character_count_change_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			content_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			history_item_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			settings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<HistoryItemResponseModelState | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HistoryItemResponseModelState { created = 0, deleted = 1, processing = 2 }

	export interface GetVoicesResponseModel {

		/** Required */
		voices: Array<VoiceResponseModel>;
	}
	export interface GetVoicesResponseModelFormProperties {
	}
	export function CreateGetVoicesResponseModelFormGroup() {
		return new FormGroup<GetVoicesResponseModelFormProperties>({
		});

	}

	export interface VoiceResponseModel {

		/** Required */
		available_for_tiers: Array<string>;

		/** Required */
		category: string;

		/** Required */
		description: string;

		/** Required */
		fine_tuning: FineTuningResponseModel;

		/** Required */
		labels: {[id: string]: string };

		/** Required */
		name: string;

		/** Required */
		preview_url: string;

		/** Required */
		samples: Array<SampleResponseModel>;

		/** Required */
		settings: VoiceSettingsResponseModel;

		/** Required */
		voice_id: string;
	}
	export interface VoiceResponseModelFormProperties {

		/** Required */
		category: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		preview_url: FormControl<string | null | undefined>,

		/** Required */
		voice_id: FormControl<string | null | undefined>,
	}
	export function CreateVoiceResponseModelFormGroup() {
		return new FormGroup<VoiceResponseModelFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preview_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SampleResponseModel {

		/** Required */
		file_name: string;

		/** Required */
		hash: string;

		/** Required */
		mime_type: string;

		/** Required */
		sample_id: string;

		/** Required */
		size_bytes: number;
	}
	export interface SampleResponseModelFormProperties {

		/** Required */
		file_name: FormControl<string | null | undefined>,

		/** Required */
		hash: FormControl<string | null | undefined>,

		/** Required */
		mime_type: FormControl<string | null | undefined>,

		/** Required */
		sample_id: FormControl<string | null | undefined>,

		/** Required */
		size_bytes: FormControl<number | null | undefined>,
	}
	export function CreateSampleResponseModelFormGroup() {
		return new FormGroup<SampleResponseModelFormProperties>({
			file_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mime_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sample_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size_bytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionResponseModel {

		/** Required */
		allowed_to_extend_character_limit: boolean;

		/** Required */
		available_models: Array<TTSModelResponseModel>;

		/** Required */
		can_extend_character_limit: boolean;

		/** Required */
		can_extend_voice_limit: boolean;

		/** Required */
		can_use_delayed_payment_methods: boolean;

		/** Required */
		can_use_instant_voice_cloning: boolean;

		/** Required */
		can_use_professional_voice_cloning: boolean;

		/** Required */
		character_count: number;

		/** Required */
		character_limit: number;

		/** Required */
		currency: ExtendedSubscriptionResponseModelCurrency;

		/** Required */
		next_character_count_reset_unix: number;

		/** Required */
		professional_voice_limit: number;

		/** Required */
		status: ExtendedSubscriptionResponseModelStatus;

		/** Required */
		tier: string;

		/** Required */
		voice_limit: number;
	}
	export interface SubscriptionResponseModelFormProperties {

		/** Required */
		allowed_to_extend_character_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_extend_character_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_extend_voice_limit: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_delayed_payment_methods: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_instant_voice_cloning: FormControl<boolean | null | undefined>,

		/** Required */
		can_use_professional_voice_cloning: FormControl<boolean | null | undefined>,

		/** Required */
		character_count: FormControl<number | null | undefined>,

		/** Required */
		character_limit: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<ExtendedSubscriptionResponseModelCurrency | null | undefined>,

		/** Required */
		next_character_count_reset_unix: FormControl<number | null | undefined>,

		/** Required */
		professional_voice_limit: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<ExtendedSubscriptionResponseModelStatus | null | undefined>,

		/** Required */
		tier: FormControl<string | null | undefined>,

		/** Required */
		voice_limit: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionResponseModelFormGroup() {
		return new FormGroup<SubscriptionResponseModelFormProperties>({
			allowed_to_extend_character_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_extend_character_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_extend_voice_limit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_delayed_payment_methods: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_instant_voice_cloning: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			can_use_professional_voice_cloning: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			character_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			character_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<ExtendedSubscriptionResponseModelCurrency | null | undefined>(undefined, [Validators.required]),
			next_character_count_reset_unix: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			professional_voice_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ExtendedSubscriptionResponseModelStatus | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserResponseModel {

		/** Required */
		is_new_user: boolean;

		/** Required */
		subscription: SubscriptionResponseModel;

		/** Required */
		xi_api_key: string;
	}
	export interface UserResponseModelFormProperties {

		/** Required */
		is_new_user: FormControl<boolean | null | undefined>,

		/** Required */
		xi_api_key: FormControl<string | null | undefined>,
	}
	export function CreateUserResponseModelFormGroup() {
		return new FormGroup<UserResponseModelFormProperties>({
			is_new_user: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			xi_api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Generated Items
		 * Returns metadata about all your generated audio.
		 * Get v1/history
		 * @return {GetHistoryResponseModel} Successful Response
		 */
		Get_generated_items_v1_history_get(): Observable<GetHistoryResponseModel> {
			return this.http.get<GetHistoryResponseModel>(this.baseUri + 'v1/history', {});
		}

		/**
		 * Delete History Items
		 * Delete a number of history items by their IDs.
		 * Post v1/history/delete
		 * @return {any} Successful Response
		 */
		Delete_history_items_v1_history_delete_post(requestBody: Body_Delete_history_items_v1_history_delete_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/history/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download History Items
		 * Download one or more history items. If one history item ID is provided, we will return a single audio file. If more than one history item IDs are provided, we will provide the history items packed into a .zip file.
		 * Post v1/history/download
		 * @return {void} Successful Response
		 */
		Download_history_items_v1_history_download_post(requestBody: Body_Download_history_items_v1_history_download_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/history/download', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete History Item
		 * Delete a history item by its ID
		 * Delete v1/history/{history_item_id}
		 * @param {string} history_item_id History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.
		 * @return {any} Successful Response
		 */
		Delete_history_item_v1_history__history_item_id__delete(history_item_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/history/' + (history_item_id == null ? '' : encodeURIComponent(history_item_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Audio From History Item
		 * Returns the audio of an history item.
		 * Get v1/history/{history_item_id}/audio
		 * @param {string} history_item_id History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.
		 * @return {void} Successful Response
		 */
		Get_audio_from_history_item_v1_history__history_item_id__audio_get(history_item_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/history/' + (history_item_id == null ? '' : encodeURIComponent(history_item_id)) + '/audio', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Text To Speech
		 * Converts text into speech using a voice of your choice and returns audio.
		 * Post v1/text-to-speech/{voice_id}
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @return {void} Successful Response
		 */
		Text_to_speech_v1_text_to_speech__voice_id__post(voice_id: string, requestBody: Body_Text_to_speech_v1_text_to_speech__voice_id__post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/text-to-speech/' + (voice_id == null ? '' : encodeURIComponent(voice_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Text To Speech
		 * Converts text into speech using a voice of your choice and returns audio as an audio stream.
		 * Post v1/text-to-speech/{voice_id}/stream
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @return {void} Successful Response
		 */
		Text_to_speech_v1_text_to_speech__voice_id__stream_post(voice_id: string, requestBody: Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/text-to-speech/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '/stream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User Info
		 * Gets information about the user
		 * Get v1/user
		 * @return {UserResponseModel} Successful Response
		 */
		Get_user_info_v1_user_get(): Observable<UserResponseModel> {
			return this.http.get<UserResponseModel>(this.baseUri + 'v1/user', {});
		}

		/**
		 * Get User Subscription Info
		 * Gets extended information about the users subscription
		 * Get v1/user/subscription
		 * @return {ExtendedSubscriptionResponseModel} Successful Response
		 */
		Get_user_subscription_info_v1_user_subscription_get(): Observable<ExtendedSubscriptionResponseModel> {
			return this.http.get<ExtendedSubscriptionResponseModel>(this.baseUri + 'v1/user/subscription', {});
		}

		/**
		 * Get Voices
		 * Gets a list of all available voices for a user.
		 * Get v1/voices
		 * @return {GetVoicesResponseModel} Successful Response
		 */
		Get_voices_v1_voices_get(): Observable<GetVoicesResponseModel> {
			return this.http.get<GetVoicesResponseModel>(this.baseUri + 'v1/voices', {});
		}

		/**
		 * Get Default Voice Settings.
		 * Gets the default settings for voices. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
		 * Get v1/voices/settings/default
		 * @return {VoiceSettingsResponseModel} Successful Response
		 */
		Get_default_voice_settings__v1_voices_settings_default_get(): Observable<VoiceSettingsResponseModel> {
			return this.http.get<VoiceSettingsResponseModel>(this.baseUri + 'v1/voices/settings/default', {});
		}

		/**
		 * Delete Voice
		 * Deletes a voice by its ID.
		 * Delete v1/voices/{voice_id}
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @return {any} Successful Response
		 */
		Delete_voice_v1_voices__voice_id__delete(voice_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Voice
		 * Returns metadata about a specific voice.
		 * Get v1/voices/{voice_id}
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @param {boolean} with_settings If set will return settings information corresponding to the voice, requires authorization.
		 * @return {VoiceResponseModel} Successful Response
		 */
		Get_voice_v1_voices__voice_id__get(voice_id: string, with_settings: boolean | null | undefined): Observable<VoiceResponseModel> {
			return this.http.get<VoiceResponseModel>(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '&with_settings=' + with_settings, {});
		}

		/**
		 * Delete Sample
		 * Removes a sample by its ID.
		 * Delete v1/voices/{voice_id}/samples/{sample_id}
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @param {string} sample_id Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.
		 * @return {any} Successful Response
		 */
		Delete_sample_v1_voices__voice_id__samples__sample_id__delete(voice_id: string, sample_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '/samples/' + (sample_id == null ? '' : encodeURIComponent(sample_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Audio From Sample
		 * Returns the audio corresponding to a sample attached to a voice.
		 * Get v1/voices/{voice_id}/samples/{sample_id}/audio
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @param {string} sample_id Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.
		 * @return {void} Successful Response
		 */
		Get_audio_from_sample_v1_voices__voice_id__samples__sample_id__audio_get(voice_id: string, sample_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '/samples/' + (sample_id == null ? '' : encodeURIComponent(sample_id)) + '/audio', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Voice Settings
		 * Returns the settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
		 * Get v1/voices/{voice_id}/settings
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @return {VoiceSettingsResponseModel} Successful Response
		 */
		Get_voice_settings_v1_voices__voice_id__settings_get(voice_id: string): Observable<VoiceSettingsResponseModel> {
			return this.http.get<VoiceSettingsResponseModel>(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '/settings', {});
		}

		/**
		 * Edit Voice Settings
		 * Edit your settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.
		 * Post v1/voices/{voice_id}/settings/edit
		 * @param {string} voice_id Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.
		 * @return {any} Successful Response
		 */
		Edit_voice_settings_v1_voices__voice_id__settings_edit_post(voice_id: string, requestBody: VoiceSettingsResponseModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/voices/' + (voice_id == null ? '' : encodeURIComponent(voice_id)) + '/settings/edit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

