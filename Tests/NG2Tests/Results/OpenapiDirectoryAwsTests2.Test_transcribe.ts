import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMedicalVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: CreateMedicalVocabularyResponseLanguageCode | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
		LastModifiedTime?: Date | null;
		FailureReason?: string | null;
	}
	export interface CreateMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateMedicalVocabularyResponseLanguageCode | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateCreateMedicalVocabularyResponseFormGroup() {
		return new FormGroup<CreateMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateMedicalVocabularyResponseLanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateMedicalVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export enum CreateMedicalVocabularyResponseVocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface CreateMedicalVocabularyRequest {
		VocabularyName: string;
		LanguageCode: CreateMedicalVocabularyRequestLanguageCode;
		VocabularyFileUri: string;
	}
	export interface CreateMedicalVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateMedicalVocabularyRequestLanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateMedicalVocabularyRequestFormGroup() {
		return new FormGroup<CreateMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateMedicalVocabularyRequestLanguageCode | null | undefined>(undefined),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateMedicalVocabularyRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: CreateVocabularyResponseLanguageCode | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
		LastModifiedTime?: Date | null;
		FailureReason?: string | null;
	}
	export interface CreateVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateVocabularyResponseLanguageCode | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyResponseFormGroup() {
		return new FormGroup<CreateVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateVocabularyResponseLanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface CreateVocabularyRequest {
		VocabularyName: string;
		LanguageCode: CreateVocabularyRequestLanguageCode;
		Phrases?: Array<string>;
		VocabularyFileUri?: string | null;
	}
	export interface CreateVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateVocabularyRequestLanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyRequestFormGroup() {
		return new FormGroup<CreateVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateVocabularyRequestLanguageCode | null | undefined>(undefined),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateVocabularyRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface CreateVocabularyFilterResponse {
		VocabularyFilterName?: string | null;
		LanguageCode?: CreateVocabularyFilterResponseLanguageCode | null;
		LastModifiedTime?: Date | null;
	}
	export interface CreateVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateVocabularyFilterResponseLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateVocabularyFilterResponseFormGroup() {
		return new FormGroup<CreateVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateVocabularyFilterResponseLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateVocabularyFilterResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface CreateVocabularyFilterRequest {
		VocabularyFilterName: string;
		LanguageCode: CreateVocabularyFilterRequestLanguageCode;
		Words?: Array<string>;
		VocabularyFilterFileUri?: string | null;
	}
	export interface CreateVocabularyFilterRequestFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<CreateVocabularyFilterRequestLanguageCode | null | undefined>,
		VocabularyFilterFileUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyFilterRequestFormGroup() {
		return new FormGroup<CreateVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<CreateVocabularyFilterRequestLanguageCode | null | undefined>(undefined),
			VocabularyFilterFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateVocabularyFilterRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface DeleteMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
	}
	export interface DeleteMedicalTranscriptionJobRequestFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<DeleteMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMedicalVocabularyRequest {
		VocabularyName: string;
	}
	export interface DeleteMedicalVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMedicalVocabularyRequestFormGroup() {
		return new FormGroup<DeleteMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteTranscriptionJobRequest {
		TranscriptionJobName: string;
	}
	export interface DeleteTranscriptionJobRequestFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTranscriptionJobRequestFormGroup() {
		return new FormGroup<DeleteTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteVocabularyRequest {
		VocabularyName: string;
	}
	export interface DeleteVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVocabularyRequestFormGroup() {
		return new FormGroup<DeleteVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteVocabularyFilterRequest {
		VocabularyFilterName: string;
	}
	export interface DeleteVocabularyFilterRequestFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVocabularyFilterRequestFormGroup() {
		return new FormGroup<DeleteVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMedicalTranscriptionJobResponse {

		/** The data structure that containts the information for a medical transcription job. */
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}
	export interface GetMedicalTranscriptionJobResponseFormProperties {
	}
	export function CreateGetMedicalTranscriptionJobResponseFormGroup() {
		return new FormGroup<GetMedicalTranscriptionJobResponseFormProperties>({
		});

	}


	/** The data structure that containts the information for a medical transcription job. */
	export interface MedicalTranscriptionJob {
		MedicalTranscriptionJobName?: string | null;
		TranscriptionJobStatus?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		LanguageCode?: MedicalTranscriptionJobLanguageCode | null;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MedicalTranscriptionJobMediaFormat | null;

		/** Describes the input media file in a transcription request. */
		Media?: Media;

		/** Identifies the location of a medical transcript. */
		Transcript?: MedicalTranscript;
		StartTime?: Date | null;
		CreationTime?: Date | null;
		CompletionTime?: Date | null;
		FailureReason?: string | null;

		/** Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
		Settings?: MedicalTranscriptionSetting;
		Specialty?: MedicalTranscriptionJobSpecialty | null;
		Type?: MedicalTranscriptionJobType | null;
	}

	/** The data structure that containts the information for a medical transcription job. */
	export interface MedicalTranscriptionJobFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
		TranscriptionJobStatus: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		LanguageCode: FormControl<MedicalTranscriptionJobLanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		Specialty: FormControl<MedicalTranscriptionJobSpecialty | null | undefined>,
		Type: FormControl<MedicalTranscriptionJobType | null | undefined>,
	}
	export function CreateMedicalTranscriptionJobFormGroup() {
		return new FormGroup<MedicalTranscriptionJobFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<MedicalTranscriptionJobLanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			Specialty: new FormControl<MedicalTranscriptionJobSpecialty | null | undefined>(undefined),
			Type: new FormControl<MedicalTranscriptionJobType | null | undefined>(undefined),
		});

	}

	export enum MedicalTranscriptionJobTranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum MedicalTranscriptionJobLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export enum MedicalTranscriptionJobMediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }


	/** Describes the input media file in a transcription request. */
	export interface Media {
		MediaFileUri?: string | null;
	}

	/** Describes the input media file in a transcription request. */
	export interface MediaFormProperties {
		MediaFileUri: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			MediaFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the location of a medical transcript. */
	export interface MedicalTranscript {
		TranscriptFileUri?: string | null;
	}

	/** Identifies the location of a medical transcript. */
	export interface MedicalTranscriptFormProperties {
		TranscriptFileUri: FormControl<string | null | undefined>,
	}
	export function CreateMedicalTranscriptFormGroup() {
		return new FormGroup<MedicalTranscriptFormProperties>({
			TranscriptFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
	export interface MedicalTranscriptionSetting {
		ShowSpeakerLabels?: boolean | null;
		MaxSpeakerLabels?: number | null;
		ChannelIdentification?: boolean | null;
		ShowAlternatives?: boolean | null;
		MaxAlternatives?: number | null;
		VocabularyName?: string | null;
	}

	/** Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
	export interface MedicalTranscriptionSettingFormProperties {
		ShowSpeakerLabels: FormControl<boolean | null | undefined>,
		MaxSpeakerLabels: FormControl<number | null | undefined>,
		ChannelIdentification: FormControl<boolean | null | undefined>,
		ShowAlternatives: FormControl<boolean | null | undefined>,
		MaxAlternatives: FormControl<number | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateMedicalTranscriptionSettingFormGroup() {
		return new FormGroup<MedicalTranscriptionSettingFormProperties>({
			ShowSpeakerLabels: new FormControl<boolean | null | undefined>(undefined),
			MaxSpeakerLabels: new FormControl<number | null | undefined>(undefined),
			ChannelIdentification: new FormControl<boolean | null | undefined>(undefined),
			ShowAlternatives: new FormControl<boolean | null | undefined>(undefined),
			MaxAlternatives: new FormControl<number | null | undefined>(undefined),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MedicalTranscriptionJobSpecialty { PRIMARYCARE = 0 }

	export enum MedicalTranscriptionJobType { CONVERSATION = 0, DICTATION = 1 }

	export interface GetMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
	}
	export interface GetMedicalTranscriptionJobRequestFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<GetMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMedicalVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: GetMedicalVocabularyResponseLanguageCode | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
		LastModifiedTime?: Date | null;
		FailureReason?: string | null;
		DownloadUri?: string | null;
	}
	export interface GetMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<GetMedicalVocabularyResponseLanguageCode | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalVocabularyResponseFormGroup() {
		return new FormGroup<GetMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<GetMedicalVocabularyResponseLanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetMedicalVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface GetMedicalVocabularyRequest {
		VocabularyName: string;
	}
	export interface GetMedicalVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalVocabularyRequestFormGroup() {
		return new FormGroup<GetMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTranscriptionJobResponse {

		/** Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. */
		TranscriptionJob?: TranscriptionJob;
	}
	export interface GetTranscriptionJobResponseFormProperties {
	}
	export function CreateGetTranscriptionJobResponseFormGroup() {
		return new FormGroup<GetTranscriptionJobResponseFormProperties>({
		});

	}


	/** Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.  */
	export interface TranscriptionJob {
		TranscriptionJobName?: string | null;
		TranscriptionJobStatus?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		LanguageCode?: TranscriptionJobLanguageCode | null;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MedicalTranscriptionJobMediaFormat | null;

		/** Describes the input media file in a transcription request. */
		Media?: Media;

		/** Identifies the location of a transcription. */
		Transcript?: Transcript;
		StartTime?: Date | null;
		CreationTime?: Date | null;
		CompletionTime?: Date | null;
		FailureReason?: string | null;

		/** Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
		Settings?: Settings;

		/** Provides information about when a transcription job should be executed. */
		JobExecutionSettings?: JobExecutionSettings;

		/** Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}

	/** Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.  */
	export interface TranscriptionJobFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
		TranscriptionJobStatus: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		LanguageCode: FormControl<TranscriptionJobLanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptionJobFormGroup() {
		return new FormGroup<TranscriptionJobFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<TranscriptionJobLanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscriptionJobLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }


	/** Identifies the location of a transcription. */
	export interface Transcript {
		TranscriptFileUri?: string | null;
		RedactedTranscriptFileUri?: string | null;
	}

	/** Identifies the location of a transcription. */
	export interface TranscriptFormProperties {
		TranscriptFileUri: FormControl<string | null | undefined>,
		RedactedTranscriptFileUri: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptFormGroup() {
		return new FormGroup<TranscriptFormProperties>({
			TranscriptFileUri: new FormControl<string | null | undefined>(undefined),
			RedactedTranscriptFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
	export interface Settings {
		VocabularyName?: string | null;
		ShowSpeakerLabels?: boolean | null;
		MaxSpeakerLabels?: number | null;
		ChannelIdentification?: boolean | null;
		ShowAlternatives?: boolean | null;
		MaxAlternatives?: number | null;
		VocabularyFilterName?: string | null;
		VocabularyFilterMethod?: SettingsVocabularyFilterMethod | null;
	}

	/** Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
	export interface SettingsFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		ShowSpeakerLabels: FormControl<boolean | null | undefined>,
		MaxSpeakerLabels: FormControl<number | null | undefined>,
		ChannelIdentification: FormControl<boolean | null | undefined>,
		ShowAlternatives: FormControl<boolean | null | undefined>,
		MaxAlternatives: FormControl<number | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterMethod: FormControl<SettingsVocabularyFilterMethod | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			ShowSpeakerLabels: new FormControl<boolean | null | undefined>(undefined),
			MaxSpeakerLabels: new FormControl<number | null | undefined>(undefined),
			ChannelIdentification: new FormControl<boolean | null | undefined>(undefined),
			ShowAlternatives: new FormControl<boolean | null | undefined>(undefined),
			MaxAlternatives: new FormControl<number | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<SettingsVocabularyFilterMethod | null | undefined>(undefined),
		});

	}

	export enum SettingsVocabularyFilterMethod { remove = 0, mask = 1 }


	/** Provides information about when a transcription job should be executed. */
	export interface JobExecutionSettings {
		AllowDeferredExecution?: boolean | null;
		DataAccessRoleArn?: string | null;
	}

	/** Provides information about when a transcription job should be executed. */
	export interface JobExecutionSettingsFormProperties {
		AllowDeferredExecution: FormControl<boolean | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionSettingsFormGroup() {
		return new FormGroup<JobExecutionSettingsFormProperties>({
			AllowDeferredExecution: new FormControl<boolean | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for content redaction within a transcription job. */
	export interface ContentRedaction {
		RedactionType: ContentRedactionRedactionType;
		RedactionOutput: ContentRedactionRedactionOutput;
	}

	/** Settings for content redaction within a transcription job. */
	export interface ContentRedactionFormProperties {
		RedactionType: FormControl<ContentRedactionRedactionType | null | undefined>,
		RedactionOutput: FormControl<ContentRedactionRedactionOutput | null | undefined>,
	}
	export function CreateContentRedactionFormGroup() {
		return new FormGroup<ContentRedactionFormProperties>({
			RedactionType: new FormControl<ContentRedactionRedactionType | null | undefined>(undefined),
			RedactionOutput: new FormControl<ContentRedactionRedactionOutput | null | undefined>(undefined),
		});

	}

	export enum ContentRedactionRedactionType { PII = 0 }

	export enum ContentRedactionRedactionOutput { redacted = 0, redacted_and_unredacted = 1 }

	export interface GetTranscriptionJobRequest {
		TranscriptionJobName: string;
	}
	export interface GetTranscriptionJobRequestFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateGetTranscriptionJobRequestFormGroup() {
		return new FormGroup<GetTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: GetVocabularyResponseLanguageCode | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
		LastModifiedTime?: Date | null;
		FailureReason?: string | null;
		DownloadUri?: string | null;
	}
	export interface GetVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<GetVocabularyResponseLanguageCode | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyResponseFormGroup() {
		return new FormGroup<GetVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<GetVocabularyResponseLanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface GetVocabularyRequest {
		VocabularyName: string;
	}
	export interface GetVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyRequestFormGroup() {
		return new FormGroup<GetVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVocabularyFilterResponse {
		VocabularyFilterName?: string | null;
		LanguageCode?: GetVocabularyFilterResponseLanguageCode | null;
		LastModifiedTime?: Date | null;
		DownloadUri?: string | null;
	}
	export interface GetVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<GetVocabularyFilterResponseLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyFilterResponseFormGroup() {
		return new FormGroup<GetVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<GetVocabularyFilterResponseLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetVocabularyFilterResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface GetVocabularyFilterRequest {
		VocabularyFilterName: string;
	}
	export interface GetVocabularyFilterRequestFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyFilterRequestFormGroup() {
		return new FormGroup<GetVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMedicalTranscriptionJobsResponse {
		Status?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		NextToken?: string | null;
		MedicalTranscriptionJobSummaries?: Array<MedicalTranscriptionJobSummary>;
	}
	export interface ListMedicalTranscriptionJobsResponseFormProperties {
		Status: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalTranscriptionJobsResponseFormGroup() {
		return new FormGroup<ListMedicalTranscriptionJobsResponseFormProperties>({
			Status: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about a transcription job. */
	export interface MedicalTranscriptionJobSummary {
		MedicalTranscriptionJobName?: string | null;
		CreationTime?: Date | null;
		StartTime?: Date | null;
		CompletionTime?: Date | null;
		LanguageCode?: MedicalTranscriptionJobSummaryLanguageCode | null;
		TranscriptionJobStatus?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		FailureReason?: string | null;
		OutputLocationType?: MedicalTranscriptionJobSummaryOutputLocationType | null;
		Specialty?: MedicalTranscriptionJobSpecialty | null;
		Type?: MedicalTranscriptionJobType | null;
	}

	/** Provides summary information about a transcription job. */
	export interface MedicalTranscriptionJobSummaryFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<MedicalTranscriptionJobSummaryLanguageCode | null | undefined>,
		TranscriptionJobStatus: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		OutputLocationType: FormControl<MedicalTranscriptionJobSummaryOutputLocationType | null | undefined>,
		Specialty: FormControl<MedicalTranscriptionJobSpecialty | null | undefined>,
		Type: FormControl<MedicalTranscriptionJobType | null | undefined>,
	}
	export function CreateMedicalTranscriptionJobSummaryFormGroup() {
		return new FormGroup<MedicalTranscriptionJobSummaryFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<MedicalTranscriptionJobSummaryLanguageCode | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			OutputLocationType: new FormControl<MedicalTranscriptionJobSummaryOutputLocationType | null | undefined>(undefined),
			Specialty: new FormControl<MedicalTranscriptionJobSpecialty | null | undefined>(undefined),
			Type: new FormControl<MedicalTranscriptionJobType | null | undefined>(undefined),
		});

	}

	export enum MedicalTranscriptionJobSummaryLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export enum MedicalTranscriptionJobSummaryOutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }

	export interface ListMedicalTranscriptionJobsRequest {
		Status?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		JobNameContains?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListMedicalTranscriptionJobsRequestFormProperties {
		Status: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		JobNameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMedicalTranscriptionJobsRequestFormGroup() {
		return new FormGroup<ListMedicalTranscriptionJobsRequestFormProperties>({
			Status: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			JobNameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMedicalVocabulariesResponse {
		Status?: CreateMedicalVocabularyResponseVocabularyState | null;
		NextToken?: string | null;
		Vocabularies?: Array<VocabularyInfo>;
	}
	export interface ListMedicalVocabulariesResponseFormProperties {
		Status: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalVocabulariesResponseFormGroup() {
		return new FormGroup<ListMedicalVocabulariesResponseFormProperties>({
			Status: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a custom vocabulary.  */
	export interface VocabularyInfo {
		VocabularyName?: string | null;
		LanguageCode?: VocabularyInfoLanguageCode | null;
		LastModifiedTime?: Date | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
	}

	/** Provides information about a custom vocabulary.  */
	export interface VocabularyInfoFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<VocabularyInfoLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
	}
	export function CreateVocabularyInfoFormGroup() {
		return new FormGroup<VocabularyInfoFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<VocabularyInfoLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
		});

	}

	export enum VocabularyInfoLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface ListMedicalVocabulariesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		StateEquals?: CreateMedicalVocabularyResponseVocabularyState | null;
		NameContains?: string | null;
	}
	export interface ListMedicalVocabulariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StateEquals: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalVocabulariesRequestFormGroup() {
		return new FormGroup<ListMedicalVocabulariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StateEquals: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTranscriptionJobsResponse {
		Status?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		NextToken?: string | null;
		TranscriptionJobSummaries?: Array<TranscriptionJobSummary>;
	}
	export interface ListTranscriptionJobsResponseFormProperties {
		Status: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTranscriptionJobsResponseFormGroup() {
		return new FormGroup<ListTranscriptionJobsResponseFormProperties>({
			Status: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of information about a transcription job. */
	export interface TranscriptionJobSummary {
		TranscriptionJobName?: string | null;
		CreationTime?: Date | null;
		StartTime?: Date | null;
		CompletionTime?: Date | null;
		LanguageCode?: TranscriptionJobSummaryLanguageCode | null;
		TranscriptionJobStatus?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		FailureReason?: string | null;
		OutputLocationType?: MedicalTranscriptionJobSummaryOutputLocationType | null;

		/** Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}

	/** Provides a summary of information about a transcription job. */
	export interface TranscriptionJobSummaryFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<TranscriptionJobSummaryLanguageCode | null | undefined>,
		TranscriptionJobStatus: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		OutputLocationType: FormControl<MedicalTranscriptionJobSummaryOutputLocationType | null | undefined>,
	}
	export function CreateTranscriptionJobSummaryFormGroup() {
		return new FormGroup<TranscriptionJobSummaryFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<TranscriptionJobSummaryLanguageCode | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			OutputLocationType: new FormControl<MedicalTranscriptionJobSummaryOutputLocationType | null | undefined>(undefined),
		});

	}

	export enum TranscriptionJobSummaryLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface ListTranscriptionJobsRequest {
		Status?: MedicalTranscriptionJobTranscriptionJobStatus | null;
		JobNameContains?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListTranscriptionJobsRequestFormProperties {
		Status: FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>,
		JobNameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTranscriptionJobsRequestFormGroup() {
		return new FormGroup<ListTranscriptionJobsRequestFormProperties>({
			Status: new FormControl<MedicalTranscriptionJobTranscriptionJobStatus | null | undefined>(undefined),
			JobNameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListVocabulariesResponse {
		Status?: CreateMedicalVocabularyResponseVocabularyState | null;
		NextToken?: string | null;
		Vocabularies?: Array<VocabularyInfo>;
	}
	export interface ListVocabulariesResponseFormProperties {
		Status: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVocabulariesResponseFormGroup() {
		return new FormGroup<ListVocabulariesResponseFormProperties>({
			Status: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVocabulariesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		StateEquals?: CreateMedicalVocabularyResponseVocabularyState | null;
		NameContains?: string | null;
	}
	export interface ListVocabulariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StateEquals: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
	}
	export function CreateListVocabulariesRequestFormGroup() {
		return new FormGroup<ListVocabulariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StateEquals: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVocabularyFiltersResponse {
		NextToken?: string | null;
		VocabularyFilters?: Array<VocabularyFilterInfo>;
	}
	export interface ListVocabularyFiltersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVocabularyFiltersResponseFormGroup() {
		return new FormGroup<ListVocabularyFiltersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a vocabulary filter. */
	export interface VocabularyFilterInfo {
		VocabularyFilterName?: string | null;
		LanguageCode?: VocabularyFilterInfoLanguageCode | null;
		LastModifiedTime?: Date | null;
	}

	/** Provides information about a vocabulary filter. */
	export interface VocabularyFilterInfoFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<VocabularyFilterInfoLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateVocabularyFilterInfoFormGroup() {
		return new FormGroup<VocabularyFilterInfoFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<VocabularyFilterInfoLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum VocabularyFilterInfoLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface ListVocabularyFiltersRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		NameContains?: string | null;
	}
	export interface ListVocabularyFiltersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
	}
	export function CreateListVocabularyFiltersRequestFormGroup() {
		return new FormGroup<ListVocabularyFiltersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMedicalTranscriptionJobResponse {

		/** The data structure that containts the information for a medical transcription job. */
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}
	export interface StartMedicalTranscriptionJobResponseFormProperties {
	}
	export function CreateStartMedicalTranscriptionJobResponseFormGroup() {
		return new FormGroup<StartMedicalTranscriptionJobResponseFormProperties>({
		});

	}

	export interface StartMedicalTranscriptionJobRequest {
		MedicalTranscriptionJobName: string;
		LanguageCode: StartMedicalTranscriptionJobRequestLanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MedicalTranscriptionJobMediaFormat | null;

		/**
		 * Describes the input media file in a transcription request.
		 * Required
		 */
		Media: Media;
		OutputBucketName: string;
		OutputEncryptionKMSKeyId?: string | null;

		/** Optional settings for the <a>StartMedicalTranscriptionJob</a> operation. */
		Settings?: MedicalTranscriptionSetting;
		Specialty: MedicalTranscriptionJobSpecialty;
		Type: MedicalTranscriptionJobType;
	}
	export interface StartMedicalTranscriptionJobRequestFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<StartMedicalTranscriptionJobRequestLanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>,
		OutputBucketName: FormControl<string | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
		Specialty: FormControl<MedicalTranscriptionJobSpecialty | null | undefined>,
		Type: FormControl<MedicalTranscriptionJobType | null | undefined>,
	}
	export function CreateStartMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<StartMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<StartMedicalTranscriptionJobRequestLanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>(undefined),
			OutputBucketName: new FormControl<string | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
			Specialty: new FormControl<MedicalTranscriptionJobSpecialty | null | undefined>(undefined),
			Type: new FormControl<MedicalTranscriptionJobType | null | undefined>(undefined),
		});

	}

	export enum StartMedicalTranscriptionJobRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface StartTranscriptionJobResponse {

		/** Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. */
		TranscriptionJob?: TranscriptionJob;
	}
	export interface StartTranscriptionJobResponseFormProperties {
	}
	export function CreateStartTranscriptionJobResponseFormGroup() {
		return new FormGroup<StartTranscriptionJobResponseFormProperties>({
		});

	}

	export interface StartTranscriptionJobRequest {
		TranscriptionJobName: string;
		LanguageCode: StartTranscriptionJobRequestLanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MedicalTranscriptionJobMediaFormat | null;

		/**
		 * Describes the input media file in a transcription request.
		 * Required
		 */
		Media: Media;
		OutputBucketName?: string | null;
		OutputEncryptionKMSKeyId?: string | null;

		/** Provides optional settings for the <code>StartTranscriptionJob</code> operation. */
		Settings?: Settings;

		/** Provides information about when a transcription job should be executed. */
		JobExecutionSettings?: JobExecutionSettings;

		/** Settings for content redaction within a transcription job. */
		ContentRedaction?: ContentRedaction;
	}
	export interface StartTranscriptionJobRequestFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<StartTranscriptionJobRequestLanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>,
		OutputBucketName: FormControl<string | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartTranscriptionJobRequestFormGroup() {
		return new FormGroup<StartTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<StartTranscriptionJobRequestLanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MedicalTranscriptionJobMediaFormat | null | undefined>(undefined),
			OutputBucketName: new FormControl<string | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartTranscriptionJobRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateMedicalVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: UpdateMedicalVocabularyResponseLanguageCode | null;
		LastModifiedTime?: Date | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
	}
	export interface UpdateMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<UpdateMedicalVocabularyResponseLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
	}
	export function CreateUpdateMedicalVocabularyResponseFormGroup() {
		return new FormGroup<UpdateMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<UpdateMedicalVocabularyResponseLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
		});

	}

	export enum UpdateMedicalVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateMedicalVocabularyRequest {
		VocabularyName: string;
		LanguageCode: UpdateMedicalVocabularyRequestLanguageCode;
		VocabularyFileUri?: string | null;
	}
	export interface UpdateMedicalVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<UpdateMedicalVocabularyRequestLanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMedicalVocabularyRequestFormGroup() {
		return new FormGroup<UpdateMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<UpdateMedicalVocabularyRequestLanguageCode | null | undefined>(undefined),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateMedicalVocabularyRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateVocabularyResponse {
		VocabularyName?: string | null;
		LanguageCode?: UpdateVocabularyResponseLanguageCode | null;
		LastModifiedTime?: Date | null;
		VocabularyState?: CreateMedicalVocabularyResponseVocabularyState | null;
	}
	export interface UpdateVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<UpdateVocabularyResponseLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>,
	}
	export function CreateUpdateVocabularyResponseFormGroup() {
		return new FormGroup<UpdateVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<UpdateVocabularyResponseLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<CreateMedicalVocabularyResponseVocabularyState | null | undefined>(undefined),
		});

	}

	export enum UpdateVocabularyResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateVocabularyRequest {
		VocabularyName: string;
		LanguageCode: UpdateVocabularyRequestLanguageCode;
		Phrases?: Array<string>;
		VocabularyFileUri?: string | null;
	}
	export interface UpdateVocabularyRequestFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<UpdateVocabularyRequestLanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVocabularyRequestFormGroup() {
		return new FormGroup<UpdateVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<UpdateVocabularyRequestLanguageCode | null | undefined>(undefined),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateVocabularyRequestLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateVocabularyFilterResponse {
		VocabularyFilterName?: string | null;
		LanguageCode?: UpdateVocabularyFilterResponseLanguageCode | null;
		LastModifiedTime?: Date | null;
	}
	export interface UpdateVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<UpdateVocabularyFilterResponseLanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateVocabularyFilterResponseFormGroup() {
		return new FormGroup<UpdateVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<UpdateVocabularyFilterResponseLanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UpdateVocabularyFilterResponseLanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export interface UpdateVocabularyFilterRequest {
		VocabularyFilterName: string;
		Words?: Array<string>;
		VocabularyFilterFileUri?: string | null;
	}
	export interface UpdateVocabularyFilterRequestFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterFileUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVocabularyFilterRequestFormGroup() {
		return new FormGroup<UpdateVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RedactionType { PII = 0 }

	export enum RedactionOutput { redacted = 0, redacted_and_unredacted = 1 }

	export enum LanguageCode { en_US = 0, es_US = 1, en_AU = 2, fr_CA = 3, en_GB = 4, de_DE = 5, pt_BR = 6, fr_FR = 7, it_IT = 8, ko_KR = 9, es_ES = 10, en_IN = 11, hi_IN = 12, ar_SA = 13, ru_RU = 14, zh_CN = 15, nl_NL = 16, id_ID = 17, ta_IN = 18, fa_IR = 19, en_IE = 20, en_AB = 21, en_WL = 22, pt_PT = 23, te_IN = 24, tr_TR = 25, de_CH = 26, he_IL = 27, ms_MY = 28, ja_JP = 29, ar_AE = 30 }

	export enum VocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export enum TranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum MediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3 }

	export enum Specialty { PRIMARYCARE = 0 }

	export enum Type { CONVERSATION = 0, DICTATION = 1 }

	export enum OutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }

	export enum VocabularyFilterMethod { remove = 0, mask = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new custom vocabulary that you can use to change how Amazon Transcribe Medical transcribes your audio file.
		 * Post #X-Amz-Target=Transcribe.CreateMedicalVocabulary
		 * @return {CreateMedicalVocabularyResponse} Success
		 */
		CreateMedicalVocabulary(requestBody: CreateMedicalVocabularyRequest): Observable<CreateMedicalVocabularyResponse> {
			return this.http.post<CreateMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
		 * Post #X-Amz-Target=Transcribe.CreateVocabulary
		 * @return {CreateVocabularyResponse} Success
		 */
		CreateVocabulary(requestBody: CreateVocabularyRequest): Observable<CreateVocabularyResponse> {
			return this.http.post<CreateVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
		 * Post #X-Amz-Target=Transcribe.CreateVocabularyFilter
		 * @return {CreateVocabularyFilterResponse} Success
		 */
		CreateVocabularyFilter(requestBody: CreateVocabularyFilterRequest): Observable<CreateVocabularyFilterResponse> {
			return this.http.post<CreateVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
		 * Post #X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob
		 * @return {void} Success
		 */
		DeleteMedicalTranscriptionJob(requestBody: DeleteMedicalTranscriptionJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a vocabulary from Amazon Transcribe Medical.
		 * Post #X-Amz-Target=Transcribe.DeleteMedicalVocabulary
		 * @return {void} Success
		 */
		DeleteMedicalVocabulary(requestBody: DeleteMedicalVocabularyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
		 * Post #X-Amz-Target=Transcribe.DeleteTranscriptionJob
		 * @return {void} Success
		 */
		DeleteTranscriptionJob(requestBody: DeleteTranscriptionJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a vocabulary from Amazon Transcribe.
		 * Post #X-Amz-Target=Transcribe.DeleteVocabulary
		 * @return {void} Success
		 */
		DeleteVocabulary(requestBody: DeleteVocabularyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a vocabulary filter.
		 * Post #X-Amz-Target=Transcribe.DeleteVocabularyFilter
		 * @return {void} Success
		 */
		DeleteVocabularyFilter(requestBody: DeleteVocabularyFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
		 * Post #X-Amz-Target=Transcribe.GetMedicalTranscriptionJob
		 * @return {GetMedicalTranscriptionJobResponse} Success
		 */
		GetMedicalTranscriptionJob(requestBody: GetMedicalTranscriptionJobRequest): Observable<GetMedicalTranscriptionJobResponse> {
			return this.http.post<GetMedicalTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about a medical vocabulary.
		 * Post #X-Amz-Target=Transcribe.GetMedicalVocabulary
		 * @return {GetMedicalVocabularyResponse} Success
		 */
		GetMedicalVocabulary(requestBody: GetMedicalVocabularyRequest): Observable<GetMedicalVocabularyResponse> {
			return this.http.post<GetMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
		 * Post #X-Amz-Target=Transcribe.GetTranscriptionJob
		 * @return {GetTranscriptionJobResponse} Success
		 */
		GetTranscriptionJob(requestBody: GetTranscriptionJobRequest): Observable<GetTranscriptionJobResponse> {
			return this.http.post<GetTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a vocabulary.
		 * Post #X-Amz-Target=Transcribe.GetVocabulary
		 * @return {GetVocabularyResponse} Success
		 */
		GetVocabulary(requestBody: GetVocabularyRequest): Observable<GetVocabularyResponse> {
			return this.http.post<GetVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a vocabulary filter.
		 * Post #X-Amz-Target=Transcribe.GetVocabularyFilter
		 * @return {GetVocabularyFilterResponse} Success
		 */
		GetVocabularyFilter(requestBody: GetVocabularyFilterRequest): Observable<GetVocabularyFilterResponse> {
			return this.http.post<GetVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists medical transcription jobs with a specified status or substring that matches their names.
		 * Post #X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalTranscriptionJobsResponse} Success
		 */
		ListMedicalTranscriptionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMedicalTranscriptionJobsRequest): Observable<ListMedicalTranscriptionJobsResponse> {
			return this.http.post<ListMedicalTranscriptionJobsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of vocabularies that match the specified criteria. You get the entire list of vocabularies if you don't enter a value in any of the request parameters.
		 * Post #X-Amz-Target=Transcribe.ListMedicalVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalVocabulariesResponse} Success
		 */
		ListMedicalVocabularies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMedicalVocabulariesRequest): Observable<ListMedicalVocabulariesResponse> {
			return this.http.post<ListMedicalVocabulariesResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListMedicalVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists transcription jobs with the specified status.
		 * Post #X-Amz-Target=Transcribe.ListTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTranscriptionJobsResponse} Success
		 */
		ListTranscriptionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTranscriptionJobsRequest): Observable<ListTranscriptionJobsResponse> {
			return this.http.post<ListTranscriptionJobsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
		 * Post #X-Amz-Target=Transcribe.ListVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabulariesResponse} Success
		 */
		ListVocabularies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVocabulariesRequest): Observable<ListVocabulariesResponse> {
			return this.http.post<ListVocabulariesResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about vocabulary filters.
		 * Post #X-Amz-Target=Transcribe.ListVocabularyFilters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabularyFiltersResponse} Success
		 */
		ListVocabularyFilters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVocabularyFiltersRequest): Observable<ListVocabularyFiltersResponse> {
			return this.http.post<ListVocabularyFiltersResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListVocabularyFilters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start a batch job to transcribe medical speech to text.
		 * Post #X-Amz-Target=Transcribe.StartMedicalTranscriptionJob
		 * @return {StartMedicalTranscriptionJobResponse} Success
		 */
		StartMedicalTranscriptionJob(requestBody: StartMedicalTranscriptionJobRequest): Observable<StartMedicalTranscriptionJobResponse> {
			return this.http.post<StartMedicalTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous job to transcribe speech to text.
		 * Post #X-Amz-Target=Transcribe.StartTranscriptionJob
		 * @return {StartTranscriptionJobResponse} Success
		 */
		StartTranscriptionJob(requestBody: StartTranscriptionJobRequest): Observable<StartTranscriptionJobResponse> {
			return this.http.post<StartTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.StartTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing vocabulary with new values in a different text file. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
		 * Post #X-Amz-Target=Transcribe.UpdateMedicalVocabulary
		 * @return {UpdateMedicalVocabularyResponse} Success
		 */
		UpdateMedicalVocabulary(requestBody: UpdateMedicalVocabularyRequest): Observable<UpdateMedicalVocabularyResponse> {
			return this.http.post<UpdateMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
		 * Post #X-Amz-Target=Transcribe.UpdateVocabulary
		 * @return {UpdateVocabularyResponse} Success
		 */
		UpdateVocabulary(requestBody: UpdateVocabularyRequest): Observable<UpdateVocabularyResponse> {
			return this.http.post<UpdateVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a vocabulary filter with a new list of filtered words.
		 * Post #X-Amz-Target=Transcribe.UpdateVocabularyFilter
		 * @return {UpdateVocabularyFilterResponse} Success
		 */
		UpdateVocabularyFilter(requestBody: UpdateVocabularyFilterRequest): Observable<UpdateVocabularyFilterResponse> {
			return this.http.post<UpdateVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateMedicalVocabularyX_Amz_Target { Transcribe_CreateMedicalVocabulary = 0 }

	export enum CreateVocabularyX_Amz_Target { Transcribe_CreateVocabulary = 0 }

	export enum CreateVocabularyFilterX_Amz_Target { Transcribe_CreateVocabularyFilter = 0 }

	export enum DeleteMedicalTranscriptionJobX_Amz_Target { Transcribe_DeleteMedicalTranscriptionJob = 0 }

	export enum DeleteMedicalVocabularyX_Amz_Target { Transcribe_DeleteMedicalVocabulary = 0 }

	export enum DeleteTranscriptionJobX_Amz_Target { Transcribe_DeleteTranscriptionJob = 0 }

	export enum DeleteVocabularyX_Amz_Target { Transcribe_DeleteVocabulary = 0 }

	export enum DeleteVocabularyFilterX_Amz_Target { Transcribe_DeleteVocabularyFilter = 0 }

	export enum GetMedicalTranscriptionJobX_Amz_Target { Transcribe_GetMedicalTranscriptionJob = 0 }

	export enum GetMedicalVocabularyX_Amz_Target { Transcribe_GetMedicalVocabulary = 0 }

	export enum GetTranscriptionJobX_Amz_Target { Transcribe_GetTranscriptionJob = 0 }

	export enum GetVocabularyX_Amz_Target { Transcribe_GetVocabulary = 0 }

	export enum GetVocabularyFilterX_Amz_Target { Transcribe_GetVocabularyFilter = 0 }

	export enum ListMedicalTranscriptionJobsX_Amz_Target { Transcribe_ListMedicalTranscriptionJobs = 0 }

	export enum ListMedicalVocabulariesX_Amz_Target { Transcribe_ListMedicalVocabularies = 0 }

	export enum ListTranscriptionJobsX_Amz_Target { Transcribe_ListTranscriptionJobs = 0 }

	export enum ListVocabulariesX_Amz_Target { Transcribe_ListVocabularies = 0 }

	export enum ListVocabularyFiltersX_Amz_Target { Transcribe_ListVocabularyFilters = 0 }

	export enum StartMedicalTranscriptionJobX_Amz_Target { Transcribe_StartMedicalTranscriptionJob = 0 }

	export enum StartTranscriptionJobX_Amz_Target { Transcribe_StartTranscriptionJob = 0 }

	export enum UpdateMedicalVocabularyX_Amz_Target { Transcribe_UpdateMedicalVocabulary = 0 }

	export enum UpdateVocabularyX_Amz_Target { Transcribe_UpdateVocabulary = 0 }

	export enum UpdateVocabularyFilterX_Amz_Target { Transcribe_UpdateVocabularyFilter = 0 }

}

