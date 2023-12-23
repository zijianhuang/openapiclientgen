import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteLexiconOutput {
	}
	export interface DeleteLexiconOutputFormProperties {
	}
	export function CreateDeleteLexiconOutputFormGroup() {
		return new FormGroup<DeleteLexiconOutputFormProperties>({
		});

	}

	export interface LexiconNotFoundException {
	}
	export interface LexiconNotFoundExceptionFormProperties {
	}
	export function CreateLexiconNotFoundExceptionFormGroup() {
		return new FormGroup<LexiconNotFoundExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface DescribeVoicesOutput {
		Voices?: Array<Voice>;

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface DescribeVoicesOutputFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVoicesOutputFormGroup() {
		return new FormGroup<DescribeVoicesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.minLength(0)]),
		});

	}


	/** Description of the voice. */
	export interface Voice {
		Gender?: VoiceGender | null;
		Id?: VoiceId | null;
		LanguageCode?: VoiceLanguageCode | null;
		LanguageName?: string | null;
		Name?: string | null;
		AdditionalLanguageCodes?: Array<LanguageCode>;
		SupportedEngines?: Array<Engine>;
	}

	/** Description of the voice. */
	export interface VoiceFormProperties {
		Gender: FormControl<VoiceGender | null | undefined>,
		Id: FormControl<VoiceId | null | undefined>,
		LanguageCode: FormControl<VoiceLanguageCode | null | undefined>,
		LanguageName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateVoiceFormGroup() {
		return new FormGroup<VoiceFormProperties>({
			Gender: new FormControl<VoiceGender | null | undefined>(undefined),
			Id: new FormControl<VoiceId | null | undefined>(undefined),
			LanguageCode: new FormControl<VoiceLanguageCode | null | undefined>(undefined),
			LanguageName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoiceGender { Female = 0, Male = 1 }

	export enum VoiceId { Aditi = 0, Amy = 1, Astrid = 2, Bianca = 3, Brian = 4, Camila = 5, Carla = 6, Carmen = 7, Celine = 8, Chantal = 9, Conchita = 10, Cristiano = 11, Dora = 12, Emma = 13, Enrique = 14, Ewa = 15, Filiz = 16, Geraint = 17, Giorgio = 18, Gwyneth = 19, Hans = 20, Ines = 21, Ivy = 22, Jacek = 23, Jan = 24, Joanna = 25, Joey = 26, Justin = 27, Karl = 28, Kendra = 29, Kimberly = 30, Lea = 31, Liv = 32, Lotte = 33, Lucia = 34, Lupe = 35, Mads = 36, Maja = 37, Marlene = 38, Mathieu = 39, Matthew = 40, Maxim = 41, Mia = 42, Miguel = 43, Mizuki = 44, Naja = 45, Nicole = 46, Penelope = 47, Raveena = 48, Ricardo = 49, Ruben = 50, Russell = 51, Salli = 52, Seoyeon = 53, Takumi = 54, Tatyana = 55, Vicki = 56, Vitoria = 57, Zeina = 58, Zhiyu = 59 }

	export enum VoiceLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export enum LanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export enum Engine { standard = 0, neural = 1 }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface GetLexiconOutput {

		/** Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>. */
		Lexicon?: Lexicon;

		/** Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>. */
		LexiconAttributes?: LexiconAttributes;
	}
	export interface GetLexiconOutputFormProperties {
	}
	export function CreateGetLexiconOutputFormGroup() {
		return new FormGroup<GetLexiconOutputFormProperties>({
		});

	}


	/** Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>. */
	export interface Lexicon {
		Content?: string | null;

		/** Pattern: [0-9A-Za-z]{1,20} */
		Name?: string | null;
	}

	/** Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>. */
	export interface LexiconFormProperties {
		Content: FormControl<string | null | undefined>,

		/** Pattern: [0-9A-Za-z]{1,20} */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLexiconFormGroup() {
		return new FormGroup<LexiconFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>. */
	export interface LexiconAttributes {
		Alphabet?: string | null;
		LanguageCode?: LexiconAttributesLanguageCode | null;
		LastModified?: Date | null;
		LexiconArn?: string | null;
		LexemesCount?: number | null;
		Size?: number | null;
	}

	/** Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>. */
	export interface LexiconAttributesFormProperties {
		Alphabet: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LexiconAttributesLanguageCode | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LexiconArn: FormControl<string | null | undefined>,
		LexemesCount: FormControl<number | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateLexiconAttributesFormGroup() {
		return new FormGroup<LexiconAttributesFormProperties>({
			Alphabet: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LexiconAttributesLanguageCode | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LexiconArn: new FormControl<string | null | undefined>(undefined),
			LexemesCount: new FormControl<number | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LexiconAttributesLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export interface GetSpeechSynthesisTaskOutput {

		/** SynthesisTask object that provides information about a speech synthesis task. */
		SynthesisTask?: SynthesisTask;
	}
	export interface GetSpeechSynthesisTaskOutputFormProperties {
	}
	export function CreateGetSpeechSynthesisTaskOutputFormGroup() {
		return new FormGroup<GetSpeechSynthesisTaskOutputFormProperties>({
		});

	}


	/** SynthesisTask object that provides information about a speech synthesis task. */
	export interface SynthesisTask {
		Engine?: Engine | null;

		/** Pattern: ^[a-zA-Z0-9_-]{1,100}$ */
		TaskId?: string | null;
		TaskStatus?: SynthesisTaskTaskStatus | null;
		TaskStatusReason?: string | null;
		OutputUri?: string | null;
		CreationTime?: Date | null;
		RequestCharacters?: number | null;

		/** Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$ */
		SnsTopicArn?: string | null;

		/** Maximum items: 5 */
		LexiconNames?: Array<string>;
		OutputFormat?: SynthesisTaskOutputFormat | null;
		SampleRate?: string | null;

		/** Maximum items: 4 */
		SpeechMarkTypes?: Array<SpeechMarkType>;
		TextType?: SynthesisTaskTextType | null;
		VoiceId?: VoiceId | null;
		LanguageCode?: SynthesisTaskLanguageCode | null;
	}

	/** SynthesisTask object that provides information about a speech synthesis task. */
	export interface SynthesisTaskFormProperties {
		Engine: FormControl<Engine | null | undefined>,

		/** Pattern: ^[a-zA-Z0-9_-]{1,100}$ */
		TaskId: FormControl<string | null | undefined>,
		TaskStatus: FormControl<SynthesisTaskTaskStatus | null | undefined>,
		TaskStatusReason: FormControl<string | null | undefined>,
		OutputUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		RequestCharacters: FormControl<number | null | undefined>,

		/** Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$ */
		SnsTopicArn: FormControl<string | null | undefined>,
		OutputFormat: FormControl<SynthesisTaskOutputFormat | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,
		TextType: FormControl<SynthesisTaskTextType | null | undefined>,
		VoiceId: FormControl<VoiceId | null | undefined>,
		LanguageCode: FormControl<SynthesisTaskLanguageCode | null | undefined>,
	}
	export function CreateSynthesisTaskFormGroup() {
		return new FormGroup<SynthesisTaskFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			TaskId: new FormControl<string | null | undefined>(undefined),
			TaskStatus: new FormControl<SynthesisTaskTaskStatus | null | undefined>(undefined),
			TaskStatusReason: new FormControl<string | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			RequestCharacters: new FormControl<number | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			OutputFormat: new FormControl<SynthesisTaskOutputFormat | null | undefined>(undefined),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			TextType: new FormControl<SynthesisTaskTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined),
			LanguageCode: new FormControl<SynthesisTaskLanguageCode | null | undefined>(undefined),
		});

	}

	export enum SynthesisTaskTaskStatus { scheduled = 0, inProgress = 1, completed = 2, failed = 3 }

	export enum SynthesisTaskOutputFormat { json = 0, mp3 = 1, ogg_vorbis = 2, pcm = 3 }

	export enum SpeechMarkType { sentence = 0, ssml = 1, viseme = 2, word = 3 }

	export enum SynthesisTaskTextType { ssml = 0, text = 1 }

	export enum SynthesisTaskLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export interface InvalidTaskIdException {
	}
	export interface InvalidTaskIdExceptionFormProperties {
	}
	export function CreateInvalidTaskIdExceptionFormGroup() {
		return new FormGroup<InvalidTaskIdExceptionFormProperties>({
		});

	}

	export interface SynthesisTaskNotFoundException {
	}
	export interface SynthesisTaskNotFoundExceptionFormProperties {
	}
	export function CreateSynthesisTaskNotFoundExceptionFormGroup() {
		return new FormGroup<SynthesisTaskNotFoundExceptionFormProperties>({
		});

	}

	export interface ListLexiconsOutput {
		Lexicons?: Array<LexiconDescription>;

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken?: string | null;
	}
	export interface ListLexiconsOutputFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLexiconsOutputFormGroup() {
		return new FormGroup<ListLexiconsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.minLength(0)]),
		});

	}


	/** Describes the content of the lexicon. */
	export interface LexiconDescription {

		/** Pattern: [0-9A-Za-z]{1,20} */
		Name?: string | null;

		/** Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>. */
		Attributes?: LexiconAttributes;
	}

	/** Describes the content of the lexicon. */
	export interface LexiconDescriptionFormProperties {

		/** Pattern: [0-9A-Za-z]{1,20} */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLexiconDescriptionFormGroup() {
		return new FormGroup<LexiconDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpeechSynthesisTasksOutput {

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken?: string | null;
		SynthesisTasks?: Array<SynthesisTask>;
	}
	export interface ListSpeechSynthesisTasksOutputFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeechSynthesisTasksOutputFormGroup() {
		return new FormGroup<ListSpeechSynthesisTasksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.minLength(0)]),
		});

	}

	export interface PutLexiconOutput {
	}
	export interface PutLexiconOutputFormProperties {
	}
	export function CreatePutLexiconOutputFormGroup() {
		return new FormGroup<PutLexiconOutputFormProperties>({
		});

	}

	export interface InvalidLexiconException {
	}
	export interface InvalidLexiconExceptionFormProperties {
	}
	export function CreateInvalidLexiconExceptionFormGroup() {
		return new FormGroup<InvalidLexiconExceptionFormProperties>({
		});

	}

	export interface UnsupportedPlsAlphabetException {
	}
	export interface UnsupportedPlsAlphabetExceptionFormProperties {
	}
	export function CreateUnsupportedPlsAlphabetExceptionFormGroup() {
		return new FormGroup<UnsupportedPlsAlphabetExceptionFormProperties>({
		});

	}

	export interface UnsupportedPlsLanguageException {
	}
	export interface UnsupportedPlsLanguageExceptionFormProperties {
	}
	export function CreateUnsupportedPlsLanguageExceptionFormGroup() {
		return new FormGroup<UnsupportedPlsLanguageExceptionFormProperties>({
		});

	}

	export interface LexiconSizeExceededException {
	}
	export interface LexiconSizeExceededExceptionFormProperties {
	}
	export function CreateLexiconSizeExceededExceptionFormGroup() {
		return new FormGroup<LexiconSizeExceededExceptionFormProperties>({
		});

	}

	export interface MaxLexemeLengthExceededException {
	}
	export interface MaxLexemeLengthExceededExceptionFormProperties {
	}
	export function CreateMaxLexemeLengthExceededExceptionFormGroup() {
		return new FormGroup<MaxLexemeLengthExceededExceptionFormProperties>({
		});

	}

	export interface MaxLexiconsNumberExceededException {
	}
	export interface MaxLexiconsNumberExceededExceptionFormProperties {
	}
	export function CreateMaxLexiconsNumberExceededExceptionFormGroup() {
		return new FormGroup<MaxLexiconsNumberExceededExceptionFormProperties>({
		});

	}

	export interface StartSpeechSynthesisTaskOutput {

		/** SynthesisTask object that provides information about a speech synthesis task. */
		SynthesisTask?: SynthesisTask;
	}
	export interface StartSpeechSynthesisTaskOutputFormProperties {
	}
	export function CreateStartSpeechSynthesisTaskOutputFormGroup() {
		return new FormGroup<StartSpeechSynthesisTaskOutputFormProperties>({
		});

	}

	export interface TextLengthExceededException {
	}
	export interface TextLengthExceededExceptionFormProperties {
	}
	export function CreateTextLengthExceededExceptionFormGroup() {
		return new FormGroup<TextLengthExceededExceptionFormProperties>({
		});

	}

	export interface InvalidS3BucketException {
	}
	export interface InvalidS3BucketExceptionFormProperties {
	}
	export function CreateInvalidS3BucketExceptionFormGroup() {
		return new FormGroup<InvalidS3BucketExceptionFormProperties>({
		});

	}

	export interface InvalidS3KeyException {
	}
	export interface InvalidS3KeyExceptionFormProperties {
	}
	export function CreateInvalidS3KeyExceptionFormGroup() {
		return new FormGroup<InvalidS3KeyExceptionFormProperties>({
		});

	}

	export interface InvalidSampleRateException {
	}
	export interface InvalidSampleRateExceptionFormProperties {
	}
	export function CreateInvalidSampleRateExceptionFormGroup() {
		return new FormGroup<InvalidSampleRateExceptionFormProperties>({
		});

	}

	export interface InvalidSnsTopicArnException {
	}
	export interface InvalidSnsTopicArnExceptionFormProperties {
	}
	export function CreateInvalidSnsTopicArnExceptionFormGroup() {
		return new FormGroup<InvalidSnsTopicArnExceptionFormProperties>({
		});

	}

	export interface InvalidSsmlException {
	}
	export interface InvalidSsmlExceptionFormProperties {
	}
	export function CreateInvalidSsmlExceptionFormGroup() {
		return new FormGroup<InvalidSsmlExceptionFormProperties>({
		});

	}

	export interface EngineNotSupportedException {
	}
	export interface EngineNotSupportedExceptionFormProperties {
	}
	export function CreateEngineNotSupportedExceptionFormGroup() {
		return new FormGroup<EngineNotSupportedExceptionFormProperties>({
		});

	}

	export interface MarksNotSupportedForFormatException {
	}
	export interface MarksNotSupportedForFormatExceptionFormProperties {
	}
	export function CreateMarksNotSupportedForFormatExceptionFormGroup() {
		return new FormGroup<MarksNotSupportedForFormatExceptionFormProperties>({
		});

	}

	export interface SsmlMarksNotSupportedForTextTypeException {
	}
	export interface SsmlMarksNotSupportedForTextTypeExceptionFormProperties {
	}
	export function CreateSsmlMarksNotSupportedForTextTypeExceptionFormGroup() {
		return new FormGroup<SsmlMarksNotSupportedForTextTypeExceptionFormProperties>({
		});

	}

	export interface LanguageNotSupportedException {
	}
	export interface LanguageNotSupportedExceptionFormProperties {
	}
	export function CreateLanguageNotSupportedExceptionFormGroup() {
		return new FormGroup<LanguageNotSupportedExceptionFormProperties>({
		});

	}

	export interface SynthesizeSpeechOutput {
		AudioStream?: string | null;
	}
	export interface SynthesizeSpeechOutputFormProperties {
		AudioStream: FormControl<string | null | undefined>,
	}
	export function CreateSynthesizeSpeechOutputFormGroup() {
		return new FormGroup<SynthesizeSpeechOutputFormProperties>({
			AudioStream: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLexiconInput {
	}
	export interface DeleteLexiconInputFormProperties {
	}
	export function CreateDeleteLexiconInputFormGroup() {
		return new FormGroup<DeleteLexiconInputFormProperties>({
		});

	}

	export interface DescribeVoicesInput {
	}
	export interface DescribeVoicesInputFormProperties {
	}
	export function CreateDescribeVoicesInputFormGroup() {
		return new FormGroup<DescribeVoicesInputFormProperties>({
		});

	}

	export enum Gender { Female = 0, Male = 1 }

	export interface GetLexiconInput {
	}
	export interface GetLexiconInputFormProperties {
	}
	export function CreateGetLexiconInputFormGroup() {
		return new FormGroup<GetLexiconInputFormProperties>({
		});

	}

	export interface GetSpeechSynthesisTaskInput {
	}
	export interface GetSpeechSynthesisTaskInputFormProperties {
	}
	export function CreateGetSpeechSynthesisTaskInputFormGroup() {
		return new FormGroup<GetSpeechSynthesisTaskInputFormProperties>({
		});

	}

	export interface ListLexiconsInput {
	}
	export interface ListLexiconsInputFormProperties {
	}
	export function CreateListLexiconsInputFormGroup() {
		return new FormGroup<ListLexiconsInputFormProperties>({
		});

	}

	export enum TaskStatus { scheduled = 0, inProgress = 1, completed = 2, failed = 3 }

	export interface ListSpeechSynthesisTasksInput {
	}
	export interface ListSpeechSynthesisTasksInputFormProperties {
	}
	export function CreateListSpeechSynthesisTasksInputFormGroup() {
		return new FormGroup<ListSpeechSynthesisTasksInputFormProperties>({
		});

	}

	export enum OutputFormat { json = 0, mp3 = 1, ogg_vorbis = 2, pcm = 3 }

	export interface PutLexiconInput {

		/** Required */
		Content: string;
	}
	export interface PutLexiconInputFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreatePutLexiconInputFormGroup() {
		return new FormGroup<PutLexiconInputFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TextType { ssml = 0, text = 1 }

	export interface StartSpeechSynthesisTaskInput {
		Engine?: Engine | null;
		LanguageCode?: StartSpeechSynthesisTaskInputLanguageCode | null;

		/** Maximum items: 5 */
		LexiconNames?: Array<string>;

		/** Required */
		OutputFormat: SynthesisTaskOutputFormat;

		/**
		 * Required
		 * Pattern: ^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$
		 */
		OutputS3BucketName: string;

		/** Pattern: ^[0-9a-zA-Z\/\!\-_\.\*\'\(\)]{0,800}$ */
		OutputS3KeyPrefix?: string | null;
		SampleRate?: string | null;

		/** Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$ */
		SnsTopicArn?: string | null;

		/** Maximum items: 4 */
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/** Required */
		Text: string;
		TextType?: SynthesisTaskTextType | null;

		/** Required */
		VoiceId: VoiceId;
	}
	export interface StartSpeechSynthesisTaskInputFormProperties {
		Engine: FormControl<Engine | null | undefined>,
		LanguageCode: FormControl<StartSpeechSynthesisTaskInputLanguageCode | null | undefined>,

		/** Required */
		OutputFormat: FormControl<SynthesisTaskOutputFormat | null | undefined>,

		/**
		 * Required
		 * Pattern: ^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** Pattern: ^[0-9a-zA-Z\/\!\-_\.\*\'\(\)]{0,800}$ */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,

		/** Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$ */
		SnsTopicArn: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		TextType: FormControl<SynthesisTaskTextType | null | undefined>,

		/** Required */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateStartSpeechSynthesisTaskInputFormGroup() {
		return new FormGroup<StartSpeechSynthesisTaskInputFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<StartSpeechSynthesisTaskInputLanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<SynthesisTaskOutputFormat | null | undefined>(undefined, [Validators.required]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<SynthesisTaskTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StartSpeechSynthesisTaskInputLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export interface SynthesizeSpeechInput {
		Engine?: Engine | null;
		LanguageCode?: SynthesizeSpeechInputLanguageCode | null;

		/** Maximum items: 5 */
		LexiconNames?: Array<string>;

		/** Required */
		OutputFormat: SynthesisTaskOutputFormat;
		SampleRate?: string | null;

		/** Maximum items: 4 */
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/** Required */
		Text: string;
		TextType?: SynthesisTaskTextType | null;

		/** Required */
		VoiceId: VoiceId;
	}
	export interface SynthesizeSpeechInputFormProperties {
		Engine: FormControl<Engine | null | undefined>,
		LanguageCode: FormControl<SynthesizeSpeechInputLanguageCode | null | undefined>,

		/** Required */
		OutputFormat: FormControl<SynthesisTaskOutputFormat | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		TextType: FormControl<SynthesisTaskTextType | null | undefined>,

		/** Required */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateSynthesizeSpeechInputFormGroup() {
		return new FormGroup<SynthesizeSpeechInputFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<SynthesizeSpeechInputLanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<SynthesisTaskOutputFormat | null | undefined>(undefined, [Validators.required]),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<SynthesisTaskTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SynthesizeSpeechInputLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
		 * Delete v1/lexicons/{LexiconName}
		 * @param {string} LexiconName The name of the lexicon to delete. Must be an existing lexicon in the region.
		 * @return {DeleteLexiconOutput} Success
		 */
		DeleteLexicon(LexiconName: string): Observable<DeleteLexiconOutput> {
			return this.http.delete<DeleteLexiconOutput>(this.baseUri + 'v1/lexicons/' + (LexiconName == null ? '' : encodeURIComponent(LexiconName)), {});
		}

		/**
		 * Returns the content of the specified pronunciation lexicon stored in an AWS Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
		 * Get v1/lexicons/{LexiconName}
		 * @param {string} LexiconName Name of the lexicon.
		 * @return {GetLexiconOutput} Success
		 */
		GetLexicon(LexiconName: string): Observable<GetLexiconOutput> {
			return this.http.get<GetLexiconOutput>(this.baseUri + 'v1/lexicons/' + (LexiconName == null ? '' : encodeURIComponent(LexiconName)), {});
		}

		/**
		 * <p>Stores a pronunciation lexicon in an AWS Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
		 * Put v1/lexicons/{LexiconName}
		 * @param {string} LexiconName Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long. 
		 * @return {PutLexiconOutput} Success
		 */
		PutLexicon(LexiconName: string, requestBody: PutLexiconPutBody): Observable<PutLexiconOutput> {
			return this.http.put<PutLexiconOutput>(this.baseUri + 'v1/lexicons/' + (LexiconName == null ? '' : encodeURIComponent(LexiconName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
		 * Get v1/voices
		 * @param {Engine} Engine Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis. 
		 * @param {DescribeVoicesLanguageCode} LanguageCode  The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. 
		 * @param {boolean} IncludeAdditionalLanguageCodes Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.
		 * @param {string} NextToken An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.
		 * @return {DescribeVoicesOutput} Success
		 */
		DescribeVoices(Engine: Engine | null | undefined, LanguageCode: DescribeVoicesLanguageCode | null | undefined, IncludeAdditionalLanguageCodes: boolean | null | undefined, NextToken: string | null | undefined): Observable<DescribeVoicesOutput> {
			return this.http.get<DescribeVoicesOutput>(this.baseUri + 'v1/voices?Engine=' + Engine + '&LanguageCode=' + LanguageCode + '&IncludeAdditionalLanguageCodes=' + IncludeAdditionalLanguageCodes + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.
		 * Get v1/synthesisTasks/{TaskId}
		 * @param {string} TaskId The Amazon Polly generated identifier for a speech synthesis task.
		 * @return {GetSpeechSynthesisTaskOutput} Success
		 */
		GetSpeechSynthesisTask(TaskId: string): Observable<GetSpeechSynthesisTaskOutput> {
			return this.http.get<GetSpeechSynthesisTaskOutput>(this.baseUri + 'v1/synthesisTasks/' + (TaskId == null ? '' : encodeURIComponent(TaskId)), {});
		}

		/**
		 * Returns a list of pronunciation lexicons stored in an AWS Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
		 * Get v1/lexicons
		 * @param {string} NextToken An opaque pagination token returned from previous <code>ListLexicons</code> operation. If present, indicates where to continue the list of lexicons.
		 * @return {ListLexiconsOutput} Success
		 */
		ListLexicons(NextToken: string | null | undefined): Observable<ListLexiconsOutput> {
			return this.http.get<ListLexiconsOutput>(this.baseUri + 'v1/lexicons?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.
		 * Get v1/synthesisTasks
		 * @param {number} MaxResults Maximum number of speech synthesis tasks returned in a List operation.
		 * @param {string} NextToken The pagination token to use in the next request to continue the listing of speech synthesis tasks. 
		 * @param {SynthesisTaskTaskStatus} Status Status of the speech synthesis tasks returned in a List operation
		 * @return {ListSpeechSynthesisTasksOutput} Success
		 */
		ListSpeechSynthesisTasks(MaxResults: number | null | undefined, NextToken: string | null | undefined, Status: SynthesisTaskTaskStatus | null | undefined): Observable<ListSpeechSynthesisTasksOutput> {
			return this.http.get<ListSpeechSynthesisTasksOutput>(this.baseUri + 'v1/synthesisTasks?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Status=' + Status, {});
		}

		/**
		 * Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn). Once the synthesis task is created, this operation will return a SpeechSynthesisTask object, which will include an identifier of this task as well as the current status.
		 * Post v1/synthesisTasks
		 * @return {StartSpeechSynthesisTaskOutput} Success
		 */
		StartSpeechSynthesisTask(requestBody: StartSpeechSynthesisTaskPostBody): Observable<StartSpeechSynthesisTaskOutput> {
			return this.http.post<StartSpeechSynthesisTaskOutput>(this.baseUri + 'v1/synthesisTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.
		 * Post v1/speech
		 * @return {SynthesizeSpeechOutput} Success
		 */
		SynthesizeSpeech(requestBody: SynthesizeSpeechPostBody): Observable<SynthesizeSpeechOutput> {
			return this.http.post<SynthesizeSpeechOutput>(this.baseUri + 'v1/speech', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PutLexiconPutBody {

		/**
		 * Content of the PLS lexicon as string data.
		 * Required
		 */
		Content: string;
	}
	export interface PutLexiconPutBodyFormProperties {

		/**
		 * Content of the PLS lexicon as string data.
		 * Required
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreatePutLexiconPutBodyFormGroup() {
		return new FormGroup<PutLexiconPutBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DescribeVoicesLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export interface StartSpeechSynthesisTaskPostBody {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine?: Engine | null;

		/** <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode?: StartSpeechSynthesisTaskPostBodyLanguageCode | null;

		/**
		 * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.
		 * Maximum items: 5
		 */
		LexiconNames?: Array<string>;

		/**
		 * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
		 * Required
		 */
		OutputFormat: SynthesisTaskOutputFormat;

		/**
		 * Amazon S3 bucket name to which the output file will be saved.
		 * Required
		 * Pattern: ^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$
		 */
		OutputS3BucketName: string;

		/**
		 * The Amazon S3 key prefix for the output speech file.
		 * Pattern: ^[0-9a-zA-Z\/\!\-_\.\*\'\(\)]{0,800}$
		 */
		OutputS3KeyPrefix?: string | null;

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate?: string | null;

		/**
		 * ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
		 * Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$
		 */
		SnsTopicArn?: string | null;

		/**
		 * The type of speech marks returned for the input text.
		 * Maximum items: 4
		 */
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/**
		 * The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text.
		 * Required
		 */
		Text: string;

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. */
		TextType?: SynthesisTaskTextType | null;

		/**
		 * Voice ID to use for the synthesis.
		 * Required
		 */
		VoiceId: VoiceId;
	}
	export interface StartSpeechSynthesisTaskPostBodyFormProperties {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine: FormControl<Engine | null | undefined>,

		/** <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode: FormControl<StartSpeechSynthesisTaskPostBodyLanguageCode | null | undefined>,

		/**
		 * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
		 * Required
		 */
		OutputFormat: FormControl<SynthesisTaskOutputFormat | null | undefined>,

		/**
		 * Amazon S3 bucket name to which the output file will be saved.
		 * Required
		 * Pattern: ^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 key prefix for the output speech file.
		 * Pattern: ^[0-9a-zA-Z\/\!\-_\.\*\'\(\)]{0,800}$
		 */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate: FormControl<string | null | undefined>,

		/**
		 * ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
		 * Pattern: ^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$
		 */
		SnsTopicArn: FormControl<string | null | undefined>,

		/**
		 * The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text.
		 * Required
		 */
		Text: FormControl<string | null | undefined>,

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. */
		TextType: FormControl<SynthesisTaskTextType | null | undefined>,

		/**
		 * Voice ID to use for the synthesis.
		 * Required
		 */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateStartSpeechSynthesisTaskPostBodyFormGroup() {
		return new FormGroup<StartSpeechSynthesisTaskPostBodyFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<StartSpeechSynthesisTaskPostBodyLanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<SynthesisTaskOutputFormat | null | undefined>(undefined, [Validators.required]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<SynthesisTaskTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StartSpeechSynthesisTaskPostBodyLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

	export interface SynthesizeSpeechPostBody {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine?: Engine | null;

		/** <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode?: SynthesizeSpeechPostBodyLanguageCode | null;

		/**
		 * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.
		 * Maximum items: 5
		 */
		LexiconNames?: Array<string>;

		/**
		 * <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
		 * Required
		 */
		OutputFormat: SynthesisTaskOutputFormat;

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate?: string | null;

		/**
		 * The type of speech marks returned for the input text.
		 * Maximum items: 4
		 */
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/**
		 * Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text.
		 * Required
		 */
		Text: string;

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>. */
		TextType?: SynthesisTaskTextType | null;

		/**
		 * Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation.
		 * Required
		 */
		VoiceId: VoiceId;
	}
	export interface SynthesizeSpeechPostBodyFormProperties {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine: FormControl<Engine | null | undefined>,

		/** <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode: FormControl<SynthesizeSpeechPostBodyLanguageCode | null | undefined>,

		/**
		 * <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
		 * Required
		 */
		OutputFormat: FormControl<SynthesisTaskOutputFormat | null | undefined>,

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate: FormControl<string | null | undefined>,

		/**
		 * Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text.
		 * Required
		 */
		Text: FormControl<string | null | undefined>,

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>. */
		TextType: FormControl<SynthesisTaskTextType | null | undefined>,

		/**
		 * Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation.
		 * Required
		 */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateSynthesizeSpeechPostBodyFormGroup() {
		return new FormGroup<SynthesizeSpeechPostBodyFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<SynthesizeSpeechPostBodyLanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<SynthesisTaskOutputFormat | null | undefined>(undefined, [Validators.required]),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<SynthesisTaskTextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SynthesizeSpeechPostBodyLanguageCode { arb = 0, cmn_CN = 1, cy_GB = 2, da_DK = 3, de_DE = 4, en_AU = 5, en_GB = 6, en_GB_WLS = 7, en_IN = 8, en_US = 9, es_ES = 10, es_MX = 11, es_US = 12, fr_CA = 13, fr_FR = 14, is_IS = 15, it_IT = 16, ja_JP = 17, hi_IN = 18, ko_KR = 19, nb_NO = 20, nl_NL = 21, pl_PL = 22, pt_BR = 23, pt_PT = 24, ro_RO = 25, ru_RU = 26, sv_SE = 27, tr_TR = 28 }

}

