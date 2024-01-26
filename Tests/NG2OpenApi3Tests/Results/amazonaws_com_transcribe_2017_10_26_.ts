import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCallAnalyticsCategoryResponse {
		CategoryProperties?: CategoryProperties;
	}
	export interface CreateCallAnalyticsCategoryResponseFormProperties {
	}
	export function CreateCreateCallAnalyticsCategoryResponseFormGroup() {
		return new FormGroup<CreateCallAnalyticsCategoryResponseFormProperties>({
		});

	}


	/** Provides you with the properties of the Call Analytics category you specified in your request. This includes the list of rules that define the specified category. */
	export interface CategoryProperties {
		CategoryName?: string;
		Rules?: Array<Rule>;
		CreateTime?: Date;
		LastUpdateTime?: Date;
		InputType?: InputType;
	}

	/** Provides you with the properties of the Call Analytics category you specified in your request. This includes the list of rules that define the specified category. */
	export interface CategoryPropertiesFormProperties {
		CategoryName: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		InputType: FormControl<InputType | null | undefined>,
	}
	export function CreateCategoryPropertiesFormGroup() {
		return new FormGroup<CategoryPropertiesFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			InputType: new FormControl<InputType | null | undefined>(undefined),
		});

	}


	/** <p>A rule is a set of criteria that you can specify to flag an attribute in your Call Analytics output. Rules define a Call Analytics category.</p> <p>Rules can include these parameters: , , , and .</p> <p>To learn more about Call Analytics rules and categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To learn more about Call Analytics, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> */
	export interface Rule {
		NonTalkTimeFilter?: NonTalkTimeFilter;
		InterruptionFilter?: InterruptionFilter;
		TranscriptFilter?: TranscriptFilter;
		SentimentFilter?: SentimentFilter;
	}

	/** <p>A rule is a set of criteria that you can specify to flag an attribute in your Call Analytics output. Rules define a Call Analytics category.</p> <p>Rules can include these parameters: , , , and .</p> <p>To learn more about Call Analytics rules and categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To learn more about Call Analytics, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> */
	export interface RuleFormProperties {
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
		});

	}


	/** <p>Flag the presence or absence of periods of silence in your Call Analytics transcription output.</p> <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p> <ul> <li> <p>The presence of silence at specified periods throughout the call</p> </li> <li> <p>The presence of speech at specified periods throughout the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface NonTalkTimeFilter {
		Threshold?: number | null;
		AbsoluteTimeRange?: AbsoluteTimeRange;
		RelativeTimeRange?: RelativeTimeRange;
		Negate?: boolean | null;
	}

	/** <p>Flag the presence or absence of periods of silence in your Call Analytics transcription output.</p> <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p> <ul> <li> <p>The presence of silence at specified periods throughout the call</p> </li> <li> <p>The presence of speech at specified periods throughout the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface NonTalkTimeFilterFormProperties {
		Threshold: FormControl<number | null | undefined>,
		Negate: FormControl<boolean | null | undefined>,
	}
	export function CreateNonTalkTimeFilterFormGroup() {
		return new FormGroup<NonTalkTimeFilterFormProperties>({
			Threshold: new FormControl<number | null | undefined>(undefined),
			Negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A time range, in milliseconds, between two points in your media file.</p> <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code> to 50000 only searches for your specified criteria in the audio contained between the 10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include one, you must include both.</p> <p>You can use also <code>First</code> to search from the start of the audio until the time that you specify, or <code>Last</code> to search from the time that you specify until the end of the audio. For example, setting <code>First</code> to 50000 only searches for your specified criteria in the audio contained between the start of the media file to the 50,000 millisecond mark. You can use <code>First</code> and <code>Last</code> independently of each other.</p> <p>If you prefer to use percentage instead of milliseconds, see .</p> */
	export interface AbsoluteTimeRange {
		StartTime?: number | null;
		EndTime?: number | null;
		First?: number | null;
		Last?: number | null;
	}

	/** <p>A time range, in milliseconds, between two points in your media file.</p> <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code> to 50000 only searches for your specified criteria in the audio contained between the 10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include one, you must include both.</p> <p>You can use also <code>First</code> to search from the start of the audio until the time that you specify, or <code>Last</code> to search from the time that you specify until the end of the audio. For example, setting <code>First</code> to 50000 only searches for your specified criteria in the audio contained between the start of the media file to the 50,000 millisecond mark. You can use <code>First</code> and <code>Last</code> independently of each other.</p> <p>If you prefer to use percentage instead of milliseconds, see .</p> */
	export interface AbsoluteTimeRangeFormProperties {
		StartTime: FormControl<number | null | undefined>,
		EndTime: FormControl<number | null | undefined>,
		First: FormControl<number | null | undefined>,
		Last: FormControl<number | null | undefined>,
	}
	export function CreateAbsoluteTimeRangeFormGroup() {
		return new FormGroup<AbsoluteTimeRangeFormProperties>({
			StartTime: new FormControl<number | null | undefined>(undefined),
			EndTime: new FormControl<number | null | undefined>(undefined),
			First: new FormControl<number | null | undefined>(undefined),
			Last: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A time range, in percentage, between two points in your media file.</p> <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to search a custom segment. For example, setting <code>StartPercentage</code> to 10 and <code>EndPercentage</code> to 50 only searches for your specified criteria in the audio contained between the 10 percent mark and the 50 percent mark of your media file.</p> <p>You can use also <code>First</code> to search from the start of the media file until the time that you specify. Or use <code>Last</code> to search from the time that you specify until the end of the media file. For example, setting <code>First</code> to 10 only searches for your specified criteria in the audio contained in the first 10 percent of the media file.</p> <p>If you prefer to use milliseconds instead of percentage, see .</p> */
	export interface RelativeTimeRange {
		StartPercentage?: number | null;
		EndPercentage?: number | null;
		First?: number | null;
		Last?: number | null;
	}

	/** <p>A time range, in percentage, between two points in your media file.</p> <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to search a custom segment. For example, setting <code>StartPercentage</code> to 10 and <code>EndPercentage</code> to 50 only searches for your specified criteria in the audio contained between the 10 percent mark and the 50 percent mark of your media file.</p> <p>You can use also <code>First</code> to search from the start of the media file until the time that you specify. Or use <code>Last</code> to search from the time that you specify until the end of the media file. For example, setting <code>First</code> to 10 only searches for your specified criteria in the audio contained in the first 10 percent of the media file.</p> <p>If you prefer to use milliseconds instead of percentage, see .</p> */
	export interface RelativeTimeRangeFormProperties {
		StartPercentage: FormControl<number | null | undefined>,
		EndPercentage: FormControl<number | null | undefined>,
		First: FormControl<number | null | undefined>,
		Last: FormControl<number | null | undefined>,
	}
	export function CreateRelativeTimeRangeFormGroup() {
		return new FormGroup<RelativeTimeRangeFormProperties>({
			StartPercentage: new FormControl<number | null | undefined>(undefined),
			EndPercentage: new FormControl<number | null | undefined>(undefined),
			First: new FormControl<number | null | undefined>(undefined),
			Last: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Flag the presence or absence of interruptions in your Call Analytics transcription output.</p> <p>Rules using <code>InterruptionFilter</code> are designed to match:</p> <ul> <li> <p>Instances where an agent interrupts a customer</p> </li> <li> <p>Instances where a customer interrupts an agent</p> </li> <li> <p>Either participant interrupting the other</p> </li> <li> <p>A lack of interruptions</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface InterruptionFilter {
		Threshold?: number | null;
		ParticipantRole?: ParticipantRole;
		AbsoluteTimeRange?: AbsoluteTimeRange;
		RelativeTimeRange?: RelativeTimeRange;
		Negate?: boolean | null;
	}

	/** <p>Flag the presence or absence of interruptions in your Call Analytics transcription output.</p> <p>Rules using <code>InterruptionFilter</code> are designed to match:</p> <ul> <li> <p>Instances where an agent interrupts a customer</p> </li> <li> <p>Instances where a customer interrupts an agent</p> </li> <li> <p>Either participant interrupting the other</p> </li> <li> <p>A lack of interruptions</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface InterruptionFilterFormProperties {
		Threshold: FormControl<number | null | undefined>,
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		Negate: FormControl<boolean | null | undefined>,
	}
	export function CreateInterruptionFilterFormGroup() {
		return new FormGroup<InterruptionFilterFormProperties>({
			Threshold: new FormControl<number | null | undefined>(undefined),
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			Negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ParticipantRole { AGENT = 0, CUSTOMER = 1 }


	/** <p>Flag the presence or absence of specific words or phrases detected in your Call Analytics transcription output.</p> <p>Rules using <code>TranscriptFilter</code> are designed to match:</p> <ul> <li> <p>Custom words or phrases spoken by the agent, the customer, or both</p> </li> <li> <p>Custom words or phrases <b>not</b> spoken by the agent, the customer, or either</p> </li> <li> <p>Custom words or phrases that occur at a specific time frame</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream">Rule criteria for streaming categories</a> for usage examples.</p> */
	export interface TranscriptFilter {

		/** Required */
		TranscriptFilterType: TranscriptFilterType;
		AbsoluteTimeRange?: AbsoluteTimeRange;
		RelativeTimeRange?: RelativeTimeRange;
		ParticipantRole?: ParticipantRole;
		Negate?: boolean | null;

		/** Required */
		Targets: Array<string>;
	}

	/** <p>Flag the presence or absence of specific words or phrases detected in your Call Analytics transcription output.</p> <p>Rules using <code>TranscriptFilter</code> are designed to match:</p> <ul> <li> <p>Custom words or phrases spoken by the agent, the customer, or both</p> </li> <li> <p>Custom words or phrases <b>not</b> spoken by the agent, the customer, or either</p> </li> <li> <p>Custom words or phrases that occur at a specific time frame</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream">Rule criteria for streaming categories</a> for usage examples.</p> */
	export interface TranscriptFilterFormProperties {

		/** Required */
		TranscriptFilterType: FormControl<TranscriptFilterType | null | undefined>,
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		Negate: FormControl<boolean | null | undefined>,
	}
	export function CreateTranscriptFilterFormGroup() {
		return new FormGroup<TranscriptFilterFormProperties>({
			TranscriptFilterType: new FormControl<TranscriptFilterType | null | undefined>(undefined, [Validators.required]),
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			Negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TranscriptFilterType { EXACT = 0 }


	/** <p>Flag the presence or absence of specific sentiments detected in your Call Analytics transcription output.</p> <p>Rules using <code>SentimentFilter</code> are designed to match:</p> <ul> <li> <p>The presence or absence of a positive sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a negative sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a neutral sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a mixed sentiment felt by the customer, the agent, or both at specified points in the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface SentimentFilter {

		/** Required */
		Sentiments: Array<SentimentValue>;
		AbsoluteTimeRange?: AbsoluteTimeRange;
		RelativeTimeRange?: RelativeTimeRange;
		ParticipantRole?: ParticipantRole;
		Negate?: boolean | null;
	}

	/** <p>Flag the presence or absence of specific sentiments detected in your Call Analytics transcription output.</p> <p>Rules using <code>SentimentFilter</code> are designed to match:</p> <ul> <li> <p>The presence or absence of a positive sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a negative sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a neutral sentiment felt by the customer, agent, or both at specified points in the call</p> </li> <li> <p>The presence or absence of a mixed sentiment felt by the customer, the agent, or both at specified points in the call</p> </li> </ul> <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call categories</a> for usage examples.</p> */
	export interface SentimentFilterFormProperties {
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		Negate: FormControl<boolean | null | undefined>,
	}
	export function CreateSentimentFilterFormGroup() {
		return new FormGroup<SentimentFilterFormProperties>({
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			Negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SentimentValue { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }

	export enum InputType { REAL_TIME = 0, POST_CALL = 1 }

	export interface CreateCallAnalyticsCategoryRequest {

		/** Required */
		CategoryName: string;

		/** Required */
		Rules: Array<Rule>;
		InputType?: InputType;
	}
	export interface CreateCallAnalyticsCategoryRequestFormProperties {

		/** Required */
		CategoryName: FormControl<string | null | undefined>,
		InputType: FormControl<InputType | null | undefined>,
	}
	export function CreateCreateCallAnalyticsCategoryRequestFormGroup() {
		return new FormGroup<CreateCallAnalyticsCategoryRequestFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputType: new FormControl<InputType | null | undefined>(undefined),
		});

	}

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

	export interface CreateLanguageModelResponse {
		LanguageCode?: CLMLanguageCode;
		BaseModelName?: BaseModelName;
		ModelName?: string;
		InputDataConfig?: InputDataConfig;
		ModelStatus?: ModelStatus;
	}
	export interface CreateLanguageModelResponseFormProperties {
		LanguageCode: FormControl<CLMLanguageCode | null | undefined>,
		BaseModelName: FormControl<BaseModelName | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		ModelStatus: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateCreateLanguageModelResponseFormGroup() {
		return new FormGroup<CreateLanguageModelResponseFormProperties>({
			LanguageCode: new FormControl<CLMLanguageCode | null | undefined>(undefined),
			BaseModelName: new FormControl<BaseModelName | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelStatus: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export enum CLMLanguageCode { 'en-US' = 0, 'hi-IN' = 1, 'es-US' = 2, 'en-GB' = 3, 'en-AU' = 4, 'de-DE' = 5, 'ja-JP' = 6 }

	export enum BaseModelName { NarrowBand = 0, WideBand = 1 }


	/** <p>Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.</p> <p>When using <code>InputDataConfig</code>, you must include these sub-parameters: <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include <code>TuningDataS3Uri</code>.</p> */
	export interface InputDataConfig {

		/** Required */
		S3Uri: string;
		TuningDataS3Uri?: string;

		/** Required */
		DataAccessRoleArn: string;
	}

	/** <p>Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.</p> <p>When using <code>InputDataConfig</code>, you must include these sub-parameters: <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include <code>TuningDataS3Uri</code>.</p> */
	export interface InputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		TuningDataS3Uri: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TuningDataS3Uri: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelStatus { IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export interface CreateLanguageModelRequest {

		/** Required */
		LanguageCode: CLMLanguageCode;

		/** Required */
		BaseModelName: BaseModelName;

		/** Required */
		ModelName: string;

		/** Required */
		InputDataConfig: InputDataConfig;
		Tags?: Array<Tag>;
	}
	export interface CreateLanguageModelRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<CLMLanguageCode | null | undefined>,

		/** Required */
		BaseModelName: FormControl<BaseModelName | null | undefined>,

		/** Required */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLanguageModelRequestFormGroup() {
		return new FormGroup<CreateLanguageModelRequestFormProperties>({
			LanguageCode: new FormControl<CLMLanguageCode | null | undefined>(undefined, [Validators.required]),
			BaseModelName: new FormControl<BaseModelName | null | undefined>(undefined, [Validators.required]),
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Adds metadata, in the form of a key:value pair, to the specified resource.</p> <p>For example, you could add the tag <code>Department:Sales</code> to a resource to indicate that it pertains to your organization's sales department. You can also use tags for tag-based access control.</p> <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>Adds metadata, in the form of a key:value pair, to the specified resource.</p> <p>For example, you could add the tag <code>Department:Sales</code> to a resource to indicate that it pertains to your organization's sales department. You can also use tags for tag-based access control.</p> <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		VocabularyState?: VocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
	}
	export interface CreateMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateCreateMedicalVocabularyResponseFormGroup() {
		return new FormGroup<CreateMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LanguageCode { 'af-ZA' = 0, 'ar-AE' = 1, 'ar-SA' = 2, 'da-DK' = 3, 'de-CH' = 4, 'de-DE' = 5, 'en-AB' = 6, 'en-AU' = 7, 'en-GB' = 8, 'en-IE' = 9, 'en-IN' = 10, 'en-US' = 11, 'en-WL' = 12, 'es-ES' = 13, 'es-US' = 14, 'fa-IR' = 15, 'fr-CA' = 16, 'fr-FR' = 17, 'he-IL' = 18, 'hi-IN' = 19, 'id-ID' = 20, 'it-IT' = 21, 'ja-JP' = 22, 'ko-KR' = 23, 'ms-MY' = 24, 'nl-NL' = 25, 'pt-BR' = 26, 'pt-PT' = 27, 'ru-RU' = 28, 'ta-IN' = 29, 'te-IN' = 30, 'tr-TR' = 31, 'zh-CN' = 32, 'zh-TW' = 33, 'th-TH' = 34, 'en-ZA' = 35, 'en-NZ' = 36, 'vi-VN' = 37, 'sv-SE' = 38 }

	export enum VocabularyState { PENDING = 0, READY = 1, FAILED = 2 }

	export interface CreateMedicalVocabularyRequest {

		/** Required */
		VocabularyName: string;

		/** Required */
		LanguageCode: LanguageCode;

		/** Required */
		VocabularyFileUri: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMedicalVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/** Required */
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateMedicalVocabularyRequestFormGroup() {
		return new FormGroup<CreateMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		VocabularyState?: VocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
	}
	export interface CreateVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyResponseFormGroup() {
		return new FormGroup<CreateVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyRequest {

		/** Required */
		VocabularyName: string;

		/** Required */
		LanguageCode: LanguageCode;
		Phrases?: Array<string>;
		VocabularyFileUri?: string;
		Tags?: Array<Tag>;
		DataAccessRoleArn?: string;
	}
	export interface CreateVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyRequestFormGroup() {
		return new FormGroup<CreateVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
	}
	export interface CreateVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateVocabularyFilterResponseFormGroup() {
		return new FormGroup<CreateVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateVocabularyFilterRequest {

		/** Required */
		VocabularyFilterName: string;

		/** Required */
		LanguageCode: LanguageCode;
		Words?: Array<string>;
		VocabularyFilterFileUri?: string;
		Tags?: Array<Tag>;
		DataAccessRoleArn?: string;
	}
	export interface CreateVocabularyFilterRequestFormProperties {

		/** Required */
		VocabularyFilterName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyFilterFileUri: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVocabularyFilterRequestFormGroup() {
		return new FormGroup<CreateVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyFilterFileUri: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCallAnalyticsCategoryResponse {
	}
	export interface DeleteCallAnalyticsCategoryResponseFormProperties {
	}
	export function CreateDeleteCallAnalyticsCategoryResponseFormGroup() {
		return new FormGroup<DeleteCallAnalyticsCategoryResponseFormProperties>({
		});

	}

	export interface DeleteCallAnalyticsCategoryRequest {

		/** Required */
		CategoryName: string;
	}
	export interface DeleteCallAnalyticsCategoryRequestFormProperties {

		/** Required */
		CategoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCallAnalyticsCategoryRequestFormGroup() {
		return new FormGroup<DeleteCallAnalyticsCategoryRequestFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteCallAnalyticsJobResponse {
	}
	export interface DeleteCallAnalyticsJobResponseFormProperties {
	}
	export function CreateDeleteCallAnalyticsJobResponseFormGroup() {
		return new FormGroup<DeleteCallAnalyticsJobResponseFormProperties>({
		});

	}

	export interface DeleteCallAnalyticsJobRequest {

		/** Required */
		CallAnalyticsJobName: string;
	}
	export interface DeleteCallAnalyticsJobRequestFormProperties {

		/** Required */
		CallAnalyticsJobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCallAnalyticsJobRequestFormGroup() {
		return new FormGroup<DeleteCallAnalyticsJobRequestFormProperties>({
			CallAnalyticsJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLanguageModelRequest {

		/** Required */
		ModelName: string;
	}
	export interface DeleteLanguageModelRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLanguageModelRequestFormGroup() {
		return new FormGroup<DeleteLanguageModelRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMedicalTranscriptionJobRequest {

		/** Required */
		MedicalTranscriptionJobName: string;
	}
	export interface DeleteMedicalTranscriptionJobRequestFormProperties {

		/** Required */
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<DeleteMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMedicalVocabularyRequest {

		/** Required */
		VocabularyName: string;
	}
	export interface DeleteMedicalVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMedicalVocabularyRequestFormGroup() {
		return new FormGroup<DeleteMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTranscriptionJobRequest {

		/** Required */
		TranscriptionJobName: string;
	}
	export interface DeleteTranscriptionJobRequestFormProperties {

		/** Required */
		TranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTranscriptionJobRequestFormGroup() {
		return new FormGroup<DeleteTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVocabularyRequest {

		/** Required */
		VocabularyName: string;
	}
	export interface DeleteVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVocabularyRequestFormGroup() {
		return new FormGroup<DeleteVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVocabularyFilterRequest {

		/** Required */
		VocabularyFilterName: string;
	}
	export interface DeleteVocabularyFilterRequestFormProperties {

		/** Required */
		VocabularyFilterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVocabularyFilterRequestFormGroup() {
		return new FormGroup<DeleteVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLanguageModelResponse {
		LanguageModel?: LanguageModel;
	}
	export interface DescribeLanguageModelResponseFormProperties {
	}
	export function CreateDescribeLanguageModelResponseFormGroup() {
		return new FormGroup<DescribeLanguageModelResponseFormProperties>({
		});

	}


	/** <p>Provides information about a custom language model, including:</p> <ul> <li> <p>The base model name</p> </li> <li> <p>When the model was created</p> </li> <li> <p>The location of the files used to train the model</p> </li> <li> <p>When the model was last modified</p> </li> <li> <p>The name you chose for the model</p> </li> <li> <p>The model's language</p> </li> <li> <p>The model's processing state</p> </li> <li> <p>Any available upgrades for the base model</p> </li> </ul> */
	export interface LanguageModel {
		ModelName?: string;
		CreateTime?: Date;
		LastModifiedTime?: Date;
		LanguageCode?: CLMLanguageCode;
		BaseModelName?: BaseModelName;
		ModelStatus?: ModelStatus;
		UpgradeAvailability?: boolean | null;
		FailureReason?: string;
		InputDataConfig?: InputDataConfig;
	}

	/** <p>Provides information about a custom language model, including:</p> <ul> <li> <p>The base model name</p> </li> <li> <p>When the model was created</p> </li> <li> <p>The location of the files used to train the model</p> </li> <li> <p>When the model was last modified</p> </li> <li> <p>The name you chose for the model</p> </li> <li> <p>The model's language</p> </li> <li> <p>The model's processing state</p> </li> <li> <p>Any available upgrades for the base model</p> </li> </ul> */
	export interface LanguageModelFormProperties {
		ModelName: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<CLMLanguageCode | null | undefined>,
		BaseModelName: FormControl<BaseModelName | null | undefined>,
		ModelStatus: FormControl<ModelStatus | null | undefined>,
		UpgradeAvailability: FormControl<boolean | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateLanguageModelFormGroup() {
		return new FormGroup<LanguageModelFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<CLMLanguageCode | null | undefined>(undefined),
			BaseModelName: new FormControl<BaseModelName | null | undefined>(undefined),
			ModelStatus: new FormControl<ModelStatus | null | undefined>(undefined),
			UpgradeAvailability: new FormControl<boolean | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLanguageModelRequest {

		/** Required */
		ModelName: string;
	}
	export interface DescribeLanguageModelRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLanguageModelRequestFormGroup() {
		return new FormGroup<DescribeLanguageModelRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCallAnalyticsCategoryResponse {
		CategoryProperties?: CategoryProperties;
	}
	export interface GetCallAnalyticsCategoryResponseFormProperties {
	}
	export function CreateGetCallAnalyticsCategoryResponseFormGroup() {
		return new FormGroup<GetCallAnalyticsCategoryResponseFormProperties>({
		});

	}

	export interface GetCallAnalyticsCategoryRequest {

		/** Required */
		CategoryName: string;
	}
	export interface GetCallAnalyticsCategoryRequestFormProperties {

		/** Required */
		CategoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetCallAnalyticsCategoryRequestFormGroup() {
		return new FormGroup<GetCallAnalyticsCategoryRequestFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCallAnalyticsJobResponse {
		CallAnalyticsJob?: CallAnalyticsJob;
	}
	export interface GetCallAnalyticsJobResponseFormProperties {
	}
	export function CreateGetCallAnalyticsJobResponseFormGroup() {
		return new FormGroup<GetCallAnalyticsJobResponseFormProperties>({
		});

	}


	/** <p>Provides detailed information about a Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> */
	export interface CallAnalyticsJob {
		CallAnalyticsJobName?: string;
		CallAnalyticsJobStatus?: CallAnalyticsJobStatus;
		LanguageCode?: LanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MediaFormat;
		Media?: Media;

		/** Provides you with the Amazon S3 URI you can use to access your transcript. */
		Transcript?: Transcript;
		StartTime?: Date;
		CreationTime?: Date;
		CompletionTime?: Date;
		FailureReason?: string;
		DataAccessRoleArn?: string;
		IdentifiedLanguageScore?: number;
		Settings?: CallAnalyticsJobSettings;
		ChannelDefinitions?: Array<ChannelDefinition>;
	}

	/** <p>Provides detailed information about a Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> */
	export interface CallAnalyticsJobFormProperties {
		CallAnalyticsJobName: FormControl<string | null | undefined>,
		CallAnalyticsJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MediaFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		IdentifiedLanguageScore: FormControl<number | null | undefined>,
	}
	export function CreateCallAnalyticsJobFormGroup() {
		return new FormGroup<CallAnalyticsJobFormProperties>({
			CallAnalyticsJobName: new FormControl<string | null | undefined>(undefined),
			CallAnalyticsJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MediaFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			IdentifiedLanguageScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CallAnalyticsJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	export enum MediaFormat { mp3 = 0, mp4 = 1, wav = 2, flac = 3, ogg = 4, amr = 5, webm = 6 }


	/** <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p> */
	export interface Media {
		MediaFileUri?: string;
		RedactedMediaFileUri?: string;
	}

	/** <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p> */
	export interface MediaFormProperties {
		MediaFileUri: FormControl<string | null | undefined>,
		RedactedMediaFileUri: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			MediaFileUri: new FormControl<string | null | undefined>(undefined),
			RedactedMediaFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides you with the Amazon S3 URI you can use to access your transcript. */
	export interface Transcript {
		TranscriptFileUri?: string;
		RedactedTranscriptFileUri?: string;
	}

	/** Provides you with the Amazon S3 URI you can use to access your transcript. */
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


	/** Provides additional optional settings for your request, including content redaction, automatic language identification; allows you to apply custom language models, custom vocabulary filters, and custom vocabularies. */
	export interface CallAnalyticsJobSettings {
		VocabularyName?: string;
		VocabularyFilterName?: string;
		VocabularyFilterMethod?: VocabularyFilterMethod;
		LanguageModelName?: string;

		/** Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>. */
		ContentRedaction?: ContentRedaction;
		LanguageOptions?: Array<LanguageCode>;
		LanguageIdSettings?: LanguageIdSettingsMap;
	}

	/** Provides additional optional settings for your request, including content redaction, automatic language identification; allows you to apply custom language models, custom vocabulary filters, and custom vocabularies. */
	export interface CallAnalyticsJobSettingsFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterMethod: FormControl<VocabularyFilterMethod | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
	}
	export function CreateCallAnalyticsJobSettingsFormGroup() {
		return new FormGroup<CallAnalyticsJobSettingsFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<VocabularyFilterMethod | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VocabularyFilterMethod { remove = 0, mask = 1, tag = 2 }


	/** Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>. */
	export interface ContentRedaction {

		/** Required */
		RedactionType: RedactionType;

		/** Required */
		RedactionOutput: RedactionOutput;
		PiiEntityTypes?: Array<PiiEntityType>;
	}

	/** Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>. */
	export interface ContentRedactionFormProperties {

		/** Required */
		RedactionType: FormControl<RedactionType | null | undefined>,

		/** Required */
		RedactionOutput: FormControl<RedactionOutput | null | undefined>,
	}
	export function CreateContentRedactionFormGroup() {
		return new FormGroup<ContentRedactionFormProperties>({
			RedactionType: new FormControl<RedactionType | null | undefined>(undefined, [Validators.required]),
			RedactionOutput: new FormControl<RedactionOutput | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RedactionType { PII = 0 }

	export enum RedactionOutput { redacted = 0, redacted_and_unredacted = 1 }

	export enum PiiEntityType { BANK_ACCOUNT_NUMBER = 0, BANK_ROUTING = 1, CREDIT_DEBIT_NUMBER = 2, CREDIT_DEBIT_CVV = 3, CREDIT_DEBIT_EXPIRY = 4, PIN = 5, EMAIL = 6, ADDRESS = 7, NAME = 8, PHONE = 9, SSN = 10, ALL = 11 }

	export interface LanguageIdSettingsMap {
	}
	export interface LanguageIdSettingsMapFormProperties {
	}
	export function CreateLanguageIdSettingsMapFormGroup() {
		return new FormGroup<LanguageIdSettingsMapFormProperties>({
		});

	}


	/** Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to indicate that it's the agent speaking). */
	export interface ChannelDefinition {
		ChannelId?: number | null;
		ParticipantRole?: ParticipantRole;
	}

	/** Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to indicate that it's the agent speaking). */
	export interface ChannelDefinitionFormProperties {
		ChannelId: FormControl<number | null | undefined>,
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
	}
	export function CreateChannelDefinitionFormGroup() {
		return new FormGroup<ChannelDefinitionFormProperties>({
			ChannelId: new FormControl<number | null | undefined>(undefined),
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
		});

	}

	export interface GetCallAnalyticsJobRequest {

		/** Required */
		CallAnalyticsJobName: string;
	}
	export interface GetCallAnalyticsJobRequestFormProperties {

		/** Required */
		CallAnalyticsJobName: FormControl<string | null | undefined>,
	}
	export function CreateGetCallAnalyticsJobRequestFormGroup() {
		return new FormGroup<GetCallAnalyticsJobRequestFormProperties>({
			CallAnalyticsJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMedicalTranscriptionJobResponse {
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}
	export interface GetMedicalTranscriptionJobResponseFormProperties {
	}
	export function CreateGetMedicalTranscriptionJobResponseFormGroup() {
		return new FormGroup<GetMedicalTranscriptionJobResponseFormProperties>({
		});

	}


	/** <p>Provides detailed information about a medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> */
	export interface MedicalTranscriptionJob {
		MedicalTranscriptionJobName?: string;
		TranscriptionJobStatus?: CallAnalyticsJobStatus;
		LanguageCode?: LanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MediaFormat;

		/** <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p> */
		Media?: Media;
		Transcript?: MedicalTranscript;
		StartTime?: Date;
		CreationTime?: Date;
		CompletionTime?: Date;
		FailureReason?: string;
		Settings?: MedicalTranscriptionSetting;
		ContentIdentificationType?: MedicalContentIdentificationType;
		Specialty?: Specialty;
		Type?: Type;
		Tags?: Array<Tag>;
	}

	/** <p>Provides detailed information about a medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> */
	export interface MedicalTranscriptionJobFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
		TranscriptionJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MediaFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		ContentIdentificationType: FormControl<MedicalContentIdentificationType | null | undefined>,
		Specialty: FormControl<Specialty | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateMedicalTranscriptionJobFormGroup() {
		return new FormGroup<MedicalTranscriptionJobFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MediaFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<MedicalContentIdentificationType | null | undefined>(undefined),
			Specialty: new FormControl<Specialty | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}


	/** Provides you with the Amazon S3 URI you can use to access your transcript. */
	export interface MedicalTranscript {
		TranscriptFileUri?: string;
	}

	/** Provides you with the Amazon S3 URI you can use to access your transcript. */
	export interface MedicalTranscriptFormProperties {
		TranscriptFileUri: FormControl<string | null | undefined>,
	}
	export function CreateMedicalTranscriptFormGroup() {
		return new FormGroup<MedicalTranscriptFormProperties>({
			TranscriptFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your medical transcription job. */
	export interface MedicalTranscriptionSetting {
		ShowSpeakerLabels?: boolean | null;
		MaxSpeakerLabels?: number | null;
		ChannelIdentification?: boolean | null;
		ShowAlternatives?: boolean | null;
		MaxAlternatives?: number | null;
		VocabularyName?: string;
	}

	/** Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your medical transcription job. */
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

	export enum MedicalContentIdentificationType { PHI = 0 }

	export enum Specialty { PRIMARYCARE = 0 }

	export enum Type { CONVERSATION = 0, DICTATION = 1 }

	export interface GetMedicalTranscriptionJobRequest {

		/** Required */
		MedicalTranscriptionJobName: string;
	}
	export interface GetMedicalTranscriptionJobRequestFormProperties {

		/** Required */
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<GetMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		VocabularyState?: VocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
		DownloadUri?: string;
	}
	export interface GetMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalVocabularyResponseFormGroup() {
		return new FormGroup<GetMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMedicalVocabularyRequest {

		/** Required */
		VocabularyName: string;
	}
	export interface GetMedicalVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateGetMedicalVocabularyRequestFormGroup() {
		return new FormGroup<GetMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTranscriptionJobResponse {
		TranscriptionJob?: TranscriptionJob;
	}
	export interface GetTranscriptionJobResponseFormProperties {
	}
	export function CreateGetTranscriptionJobResponseFormGroup() {
		return new FormGroup<GetTranscriptionJobResponseFormProperties>({
		});

	}


	/** <p>Provides detailed information about a transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> */
	export interface TranscriptionJob {
		TranscriptionJobName?: string;
		TranscriptionJobStatus?: CallAnalyticsJobStatus;
		LanguageCode?: LanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MediaFormat;
		Media?: Media;
		Transcript?: Transcript;
		StartTime?: Date;
		CreationTime?: Date;
		CompletionTime?: Date;
		FailureReason?: string;
		Settings?: Settings;
		ModelSettings?: ModelSettings;
		JobExecutionSettings?: JobExecutionSettings;
		ContentRedaction?: ContentRedaction;
		IdentifyLanguage?: boolean | null;
		IdentifyMultipleLanguages?: boolean | null;
		LanguageOptions?: Array<LanguageCode>;
		IdentifiedLanguageScore?: number;
		LanguageCodes?: Array<LanguageCodeItem>;
		Tags?: Array<Tag>;
		Subtitles?: SubtitlesOutput;
		LanguageIdSettings?: LanguageIdSettingsMap;
		ToxicityDetection?: Array<ToxicityDetectionSettings>;
	}

	/** <p>Provides detailed information about a transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> */
	export interface TranscriptionJobFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
		TranscriptionJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MediaFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		IdentifyMultipleLanguages: FormControl<boolean | null | undefined>,
		IdentifiedLanguageScore: FormControl<number | null | undefined>,
	}
	export function CreateTranscriptionJobFormGroup() {
		return new FormGroup<TranscriptionJobFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MediaFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			IdentifyMultipleLanguages: new FormControl<boolean | null | undefined>(undefined),
			IdentifiedLanguageScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job. */
	export interface Settings {
		VocabularyName?: string;
		ShowSpeakerLabels?: boolean | null;
		MaxSpeakerLabels?: number | null;
		ChannelIdentification?: boolean | null;
		ShowAlternatives?: boolean | null;
		MaxAlternatives?: number | null;
		VocabularyFilterName?: string;
		VocabularyFilterMethod?: VocabularyFilterMethod;
	}

	/** Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job. */
	export interface SettingsFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		ShowSpeakerLabels: FormControl<boolean | null | undefined>,
		MaxSpeakerLabels: FormControl<number | null | undefined>,
		ChannelIdentification: FormControl<boolean | null | undefined>,
		ShowAlternatives: FormControl<boolean | null | undefined>,
		MaxAlternatives: FormControl<number | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterMethod: FormControl<VocabularyFilterMethod | null | undefined>,
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
			VocabularyFilterMethod: new FormControl<VocabularyFilterMethod | null | undefined>(undefined),
		});

	}


	/** <p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p> */
	export interface ModelSettings {
		LanguageModelName?: string;
	}

	/** <p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p> */
	export interface ModelSettingsFormProperties {
		LanguageModelName: FormControl<string | null | undefined>,
	}
	export function CreateModelSettingsFormGroup() {
		return new FormGroup<ModelSettingsFormProperties>({
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Makes it possible to control how your transcription job is processed. Currently, the only <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p> <p>If you include <code>JobExecutionSettings</code> in your request, you must also include the sub-parameters: <code>AllowDeferredExecution</code> and <code>DataAccessRoleArn</code>.</p> */
	export interface JobExecutionSettings {
		AllowDeferredExecution?: boolean | null;
		DataAccessRoleArn?: string;
	}

	/** <p>Makes it possible to control how your transcription job is processed. Currently, the only <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p> <p>If you include <code>JobExecutionSettings</code> in your request, you must also include the sub-parameters: <code>AllowDeferredExecution</code> and <code>DataAccessRoleArn</code>.</p> */
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


	/** Provides information on the speech contained in a discreet utterance when multi-language identification is enabled in your request. This utterance represents a block of speech consisting of one language, preceded or followed by a block of speech in a different language. */
	export interface LanguageCodeItem {
		LanguageCode?: LanguageCode;
		DurationInSeconds?: number;
	}

	/** Provides information on the speech contained in a discreet utterance when multi-language identification is enabled in your request. This utterance represents a block of speech consisting of one language, preceded or followed by a block of speech in a different language. */
	export interface LanguageCodeItemFormProperties {
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLanguageCodeItemFormGroup() {
		return new FormGroup<LanguageCodeItemFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about your subtitle file, including format, start index, and Amazon S3 location. */
	export interface SubtitlesOutput {
		Formats?: Array<SubtitleFormat>;
		SubtitleFileUris?: Array<string>;
		OutputStartIndex?: number | null;
	}

	/** Provides information about your subtitle file, including format, start index, and Amazon S3 location. */
	export interface SubtitlesOutputFormProperties {
		OutputStartIndex: FormControl<number | null | undefined>,
	}
	export function CreateSubtitlesOutputFormGroup() {
		return new FormGroup<SubtitlesOutputFormProperties>({
			OutputStartIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubtitleFormat { vtt = 0, srt = 1 }


	/** Contains <code>ToxicityCategories</code>, which is a required parameter if you want to enable toxicity detection (<code>ToxicityDetection</code>) in your transcription request. */
	export interface ToxicityDetectionSettings {

		/** Required */
		ToxicityCategories: Array<ToxicityCategory>;
	}

	/** Contains <code>ToxicityCategories</code>, which is a required parameter if you want to enable toxicity detection (<code>ToxicityDetection</code>) in your transcription request. */
	export interface ToxicityDetectionSettingsFormProperties {
	}
	export function CreateToxicityDetectionSettingsFormGroup() {
		return new FormGroup<ToxicityDetectionSettingsFormProperties>({
		});

	}

	export enum ToxicityCategory { ALL = 0 }

	export interface GetTranscriptionJobRequest {

		/** Required */
		TranscriptionJobName: string;
	}
	export interface GetTranscriptionJobRequestFormProperties {

		/** Required */
		TranscriptionJobName: FormControl<string | null | undefined>,
	}
	export function CreateGetTranscriptionJobRequestFormGroup() {
		return new FormGroup<GetTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		VocabularyState?: VocabularyState;
		LastModifiedTime?: Date;
		FailureReason?: string;
		DownloadUri?: string;
	}
	export interface GetVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyResponseFormGroup() {
		return new FormGroup<GetVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVocabularyRequest {

		/** Required */
		VocabularyName: string;
	}
	export interface GetVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyRequestFormGroup() {
		return new FormGroup<GetVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
		DownloadUri?: string;
	}
	export interface GetVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		DownloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyFilterResponseFormGroup() {
		return new FormGroup<GetVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			DownloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVocabularyFilterRequest {

		/** Required */
		VocabularyFilterName: string;
	}
	export interface GetVocabularyFilterRequestFormProperties {

		/** Required */
		VocabularyFilterName: FormControl<string | null | undefined>,
	}
	export function CreateGetVocabularyFilterRequestFormGroup() {
		return new FormGroup<GetVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCallAnalyticsCategoriesResponse {
		NextToken?: string;
		Categories?: Array<CategoryProperties>;
	}
	export interface ListCallAnalyticsCategoriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCallAnalyticsCategoriesResponseFormGroup() {
		return new FormGroup<ListCallAnalyticsCategoriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCallAnalyticsCategoriesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCallAnalyticsCategoriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCallAnalyticsCategoriesRequestFormGroup() {
		return new FormGroup<ListCallAnalyticsCategoriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCallAnalyticsJobsResponse {
		Status?: CallAnalyticsJobStatus;
		NextToken?: string;
		CallAnalyticsJobSummaries?: Array<CallAnalyticsJobSummary>;
	}
	export interface ListCallAnalyticsJobsResponseFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCallAnalyticsJobsResponseFormGroup() {
		return new FormGroup<ListCallAnalyticsJobsResponseFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a specific Call Analytics job. */
	export interface CallAnalyticsJobSummary {
		CallAnalyticsJobName?: string;
		CreationTime?: Date;
		StartTime?: Date;
		CompletionTime?: Date;
		LanguageCode?: LanguageCode;
		CallAnalyticsJobStatus?: CallAnalyticsJobStatus;
		FailureReason?: string;
	}

	/** Provides detailed information about a specific Call Analytics job. */
	export interface CallAnalyticsJobSummaryFormProperties {
		CallAnalyticsJobName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		CallAnalyticsJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateCallAnalyticsJobSummaryFormGroup() {
		return new FormGroup<CallAnalyticsJobSummaryFormProperties>({
			CallAnalyticsJobName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			CallAnalyticsJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCallAnalyticsJobsRequest {
		Status?: CallAnalyticsJobStatus;
		JobNameContains?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCallAnalyticsJobsRequestFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		JobNameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCallAnalyticsJobsRequestFormGroup() {
		return new FormGroup<ListCallAnalyticsJobsRequestFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			JobNameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLanguageModelsResponse {
		NextToken?: string;
		Models?: Array<LanguageModel>;
	}
	export interface ListLanguageModelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLanguageModelsResponseFormGroup() {
		return new FormGroup<ListLanguageModelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLanguageModelsRequest {
		StatusEquals?: ModelStatus;
		NameContains?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLanguageModelsRequestFormProperties {
		StatusEquals: FormControl<ModelStatus | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLanguageModelsRequestFormGroup() {
		return new FormGroup<ListLanguageModelsRequestFormProperties>({
			StatusEquals: new FormControl<ModelStatus | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMedicalTranscriptionJobsResponse {
		Status?: CallAnalyticsJobStatus;
		NextToken?: string;
		MedicalTranscriptionJobSummaries?: Array<MedicalTranscriptionJobSummary>;
	}
	export interface ListMedicalTranscriptionJobsResponseFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalTranscriptionJobsResponseFormGroup() {
		return new FormGroup<ListMedicalTranscriptionJobsResponseFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a specific medical transcription job. */
	export interface MedicalTranscriptionJobSummary {
		MedicalTranscriptionJobName?: string;
		CreationTime?: Date;
		StartTime?: Date;
		CompletionTime?: Date;
		LanguageCode?: LanguageCode;
		TranscriptionJobStatus?: CallAnalyticsJobStatus;
		FailureReason?: string;
		OutputLocationType?: OutputLocationType;
		Specialty?: Specialty;
		ContentIdentificationType?: MedicalContentIdentificationType;
		Type?: Type;
	}

	/** Provides detailed information about a specific medical transcription job. */
	export interface MedicalTranscriptionJobSummaryFormProperties {
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		TranscriptionJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		OutputLocationType: FormControl<OutputLocationType | null | undefined>,
		Specialty: FormControl<Specialty | null | undefined>,
		ContentIdentificationType: FormControl<MedicalContentIdentificationType | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateMedicalTranscriptionJobSummaryFormGroup() {
		return new FormGroup<MedicalTranscriptionJobSummaryFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			OutputLocationType: new FormControl<OutputLocationType | null | undefined>(undefined),
			Specialty: new FormControl<Specialty | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<MedicalContentIdentificationType | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}

	export enum OutputLocationType { CUSTOMER_BUCKET = 0, SERVICE_BUCKET = 1 }

	export interface ListMedicalTranscriptionJobsRequest {
		Status?: CallAnalyticsJobStatus;
		JobNameContains?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMedicalTranscriptionJobsRequestFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		JobNameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMedicalTranscriptionJobsRequestFormGroup() {
		return new FormGroup<ListMedicalTranscriptionJobsRequestFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			JobNameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMedicalVocabulariesResponse {
		Status?: VocabularyState;
		NextToken?: string;
		Vocabularies?: Array<VocabularyInfo>;
	}
	export interface ListMedicalVocabulariesResponseFormProperties {
		Status: FormControl<VocabularyState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalVocabulariesResponseFormGroup() {
		return new FormGroup<ListMedicalVocabulariesResponseFormProperties>({
			Status: new FormControl<VocabularyState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a custom vocabulary, including the language of the custom vocabulary, when it was last modified, its name, and the processing state. */
	export interface VocabularyInfo {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: VocabularyState;
	}

	/** Provides information about a custom vocabulary, including the language of the custom vocabulary, when it was last modified, its name, and the processing state. */
	export interface VocabularyInfoFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
	}
	export function CreateVocabularyInfoFormGroup() {
		return new FormGroup<VocabularyInfoFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
		});

	}

	export interface ListMedicalVocabulariesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		StateEquals?: VocabularyState;
		NameContains?: string;
	}
	export interface ListMedicalVocabulariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StateEquals: FormControl<VocabularyState | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
	}
	export function CreateListMedicalVocabulariesRequestFormGroup() {
		return new FormGroup<ListMedicalVocabulariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StateEquals: new FormControl<VocabularyState | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
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

	export interface ListTranscriptionJobsResponse {
		Status?: CallAnalyticsJobStatus;
		NextToken?: string;
		TranscriptionJobSummaries?: Array<TranscriptionJobSummary>;
	}
	export interface ListTranscriptionJobsResponseFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTranscriptionJobsResponseFormGroup() {
		return new FormGroup<ListTranscriptionJobsResponseFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a specific transcription job. */
	export interface TranscriptionJobSummary {
		TranscriptionJobName?: string;
		CreationTime?: Date;
		StartTime?: Date;
		CompletionTime?: Date;
		LanguageCode?: LanguageCode;
		TranscriptionJobStatus?: CallAnalyticsJobStatus;
		FailureReason?: string;
		OutputLocationType?: OutputLocationType;
		ContentRedaction?: ContentRedaction;

		/** <p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p> */
		ModelSettings?: ModelSettings;
		IdentifyLanguage?: boolean | null;
		IdentifyMultipleLanguages?: boolean | null;
		IdentifiedLanguageScore?: number;
		LanguageCodes?: Array<LanguageCodeItem>;
		ToxicityDetection?: Array<ToxicityDetectionSettings>;
	}

	/** Provides detailed information about a specific transcription job. */
	export interface TranscriptionJobSummaryFormProperties {
		TranscriptionJobName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		CompletionTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		TranscriptionJobStatus: FormControl<CallAnalyticsJobStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		OutputLocationType: FormControl<OutputLocationType | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		IdentifyMultipleLanguages: FormControl<boolean | null | undefined>,
		IdentifiedLanguageScore: FormControl<number | null | undefined>,
	}
	export function CreateTranscriptionJobSummaryFormGroup() {
		return new FormGroup<TranscriptionJobSummaryFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			CompletionTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			TranscriptionJobStatus: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			OutputLocationType: new FormControl<OutputLocationType | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			IdentifyMultipleLanguages: new FormControl<boolean | null | undefined>(undefined),
			IdentifiedLanguageScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTranscriptionJobsRequest {
		Status?: CallAnalyticsJobStatus;
		JobNameContains?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTranscriptionJobsRequestFormProperties {
		Status: FormControl<CallAnalyticsJobStatus | null | undefined>,
		JobNameContains: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTranscriptionJobsRequestFormGroup() {
		return new FormGroup<ListTranscriptionJobsRequestFormProperties>({
			Status: new FormControl<CallAnalyticsJobStatus | null | undefined>(undefined),
			JobNameContains: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListVocabulariesResponse {
		Status?: VocabularyState;
		NextToken?: string;
		Vocabularies?: Array<VocabularyInfo>;
	}
	export interface ListVocabulariesResponseFormProperties {
		Status: FormControl<VocabularyState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVocabulariesResponseFormGroup() {
		return new FormGroup<ListVocabulariesResponseFormProperties>({
			Status: new FormControl<VocabularyState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVocabulariesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		StateEquals?: VocabularyState;
		NameContains?: string;
	}
	export interface ListVocabulariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StateEquals: FormControl<VocabularyState | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
	}
	export function CreateListVocabulariesRequestFormGroup() {
		return new FormGroup<ListVocabulariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StateEquals: new FormControl<VocabularyState | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVocabularyFiltersResponse {
		NextToken?: string;
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


	/** Provides information about a custom vocabulary filter, including the language of the filter, when it was last modified, and its name. */
	export interface VocabularyFilterInfo {
		VocabularyFilterName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
	}

	/** Provides information about a custom vocabulary filter, including the language of the filter, when it was last modified, and its name. */
	export interface VocabularyFilterInfoFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateVocabularyFilterInfoFormGroup() {
		return new FormGroup<VocabularyFilterInfoFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListVocabularyFiltersRequest {
		NextToken?: string;
		MaxResults?: number | null;
		NameContains?: string;
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

	export interface StartCallAnalyticsJobResponse {
		CallAnalyticsJob?: CallAnalyticsJob;
	}
	export interface StartCallAnalyticsJobResponseFormProperties {
	}
	export function CreateStartCallAnalyticsJobResponseFormGroup() {
		return new FormGroup<StartCallAnalyticsJobResponseFormProperties>({
		});

	}

	export interface StartCallAnalyticsJobRequest {

		/** Required */
		CallAnalyticsJobName: string;

		/** Required */
		Media: Media;
		OutputLocation?: string;
		OutputEncryptionKMSKeyId?: string;
		DataAccessRoleArn?: string;
		Settings?: CallAnalyticsJobSettings;
		ChannelDefinitions?: Array<ChannelDefinition>;
	}
	export interface StartCallAnalyticsJobRequestFormProperties {

		/** Required */
		CallAnalyticsJobName: FormControl<string | null | undefined>,
		OutputLocation: FormControl<string | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartCallAnalyticsJobRequestFormGroup() {
		return new FormGroup<StartCallAnalyticsJobRequestFormProperties>({
			CallAnalyticsJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputLocation: new FormControl<string | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMedicalTranscriptionJobResponse {
		MedicalTranscriptionJob?: MedicalTranscriptionJob;
	}
	export interface StartMedicalTranscriptionJobResponseFormProperties {
	}
	export function CreateStartMedicalTranscriptionJobResponseFormGroup() {
		return new FormGroup<StartMedicalTranscriptionJobResponseFormProperties>({
		});

	}

	export interface StartMedicalTranscriptionJobRequest {

		/** Required */
		MedicalTranscriptionJobName: string;

		/** Required */
		LanguageCode: LanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MediaFormat;

		/**
		 * <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>
		 * Required
		 */
		Media: Media;

		/** Required */
		OutputBucketName: string;
		OutputKey?: string;
		OutputEncryptionKMSKeyId?: string;
		KMSEncryptionContext?: KMSEncryptionContextMap;
		Settings?: MedicalTranscriptionSetting;
		ContentIdentificationType?: MedicalContentIdentificationType;

		/** Required */
		Specialty: Specialty;

		/** Required */
		Type: Type;
		Tags?: Array<Tag>;
	}
	export interface StartMedicalTranscriptionJobRequestFormProperties {

		/** Required */
		MedicalTranscriptionJobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MediaFormat | null | undefined>,

		/** Required */
		OutputBucketName: FormControl<string | null | undefined>,
		OutputKey: FormControl<string | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
		ContentIdentificationType: FormControl<MedicalContentIdentificationType | null | undefined>,

		/** Required */
		Specialty: FormControl<Specialty | null | undefined>,

		/** Required */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateStartMedicalTranscriptionJobRequestFormGroup() {
		return new FormGroup<StartMedicalTranscriptionJobRequestFormProperties>({
			MedicalTranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MediaFormat | null | undefined>(undefined),
			OutputBucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<MedicalContentIdentificationType | null | undefined>(undefined),
			Specialty: new FormControl<Specialty | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KMSEncryptionContextMap {
	}
	export interface KMSEncryptionContextMapFormProperties {
	}
	export function CreateKMSEncryptionContextMapFormGroup() {
		return new FormGroup<KMSEncryptionContextMapFormProperties>({
		});

	}

	export interface StartTranscriptionJobResponse {
		TranscriptionJob?: TranscriptionJob;
	}
	export interface StartTranscriptionJobResponseFormProperties {
	}
	export function CreateStartTranscriptionJobResponseFormGroup() {
		return new FormGroup<StartTranscriptionJobResponseFormProperties>({
		});

	}

	export interface StartTranscriptionJobRequest {

		/** Required */
		TranscriptionJobName: string;
		LanguageCode?: LanguageCode;
		MediaSampleRateHertz?: number | null;
		MediaFormat?: MediaFormat;

		/** Required */
		Media: Media;
		OutputBucketName?: string;
		OutputKey?: string;
		OutputEncryptionKMSKeyId?: string;
		KMSEncryptionContext?: KMSEncryptionContextMap;
		Settings?: Settings;
		ModelSettings?: ModelSettings;
		JobExecutionSettings?: JobExecutionSettings;
		ContentRedaction?: ContentRedaction;
		IdentifyLanguage?: boolean | null;
		IdentifyMultipleLanguages?: boolean | null;
		LanguageOptions?: Array<LanguageCode>;
		Subtitles?: Subtitles;
		Tags?: Array<Tag>;
		LanguageIdSettings?: LanguageIdSettingsMap;
		ToxicityDetection?: Array<ToxicityDetectionSettings>;
	}
	export interface StartTranscriptionJobRequestFormProperties {

		/** Required */
		TranscriptionJobName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		MediaSampleRateHertz: FormControl<number | null | undefined>,
		MediaFormat: FormControl<MediaFormat | null | undefined>,
		OutputBucketName: FormControl<string | null | undefined>,
		OutputKey: FormControl<string | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		IdentifyMultipleLanguages: FormControl<boolean | null | undefined>,
	}
	export function CreateStartTranscriptionJobRequestFormGroup() {
		return new FormGroup<StartTranscriptionJobRequestFormProperties>({
			TranscriptionJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			MediaSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			MediaFormat: new FormControl<MediaFormat | null | undefined>(undefined),
			OutputBucketName: new FormControl<string | null | undefined>(undefined),
			OutputKey: new FormControl<string | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			IdentifyMultipleLanguages: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Generate subtitles for your media file with your transcription request.</p> <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or both) as your output format.</p> <p>Note that your subtitle files are placed in the same location as your transcription output.</p> */
	export interface Subtitles {
		Formats?: Array<SubtitleFormat>;
		OutputStartIndex?: number | null;
	}

	/** <p>Generate subtitles for your media file with your transcription request.</p> <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or both) as your output format.</p> <p>Note that your subtitle files are placed in the same location as your transcription output.</p> */
	export interface SubtitlesFormProperties {
		OutputStartIndex: FormControl<number | null | undefined>,
	}
	export function CreateSubtitlesFormGroup() {
		return new FormGroup<SubtitlesFormProperties>({
			OutputStartIndex: new FormControl<number | null | undefined>(undefined),
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

	export interface UpdateCallAnalyticsCategoryResponse {
		CategoryProperties?: CategoryProperties;
	}
	export interface UpdateCallAnalyticsCategoryResponseFormProperties {
	}
	export function CreateUpdateCallAnalyticsCategoryResponseFormGroup() {
		return new FormGroup<UpdateCallAnalyticsCategoryResponseFormProperties>({
		});

	}

	export interface UpdateCallAnalyticsCategoryRequest {

		/** Required */
		CategoryName: string;

		/** Required */
		Rules: Array<Rule>;
		InputType?: InputType;
	}
	export interface UpdateCallAnalyticsCategoryRequestFormProperties {

		/** Required */
		CategoryName: FormControl<string | null | undefined>,
		InputType: FormControl<InputType | null | undefined>,
	}
	export function CreateUpdateCallAnalyticsCategoryRequestFormGroup() {
		return new FormGroup<UpdateCallAnalyticsCategoryRequestFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputType: new FormControl<InputType | null | undefined>(undefined),
		});

	}

	export interface UpdateMedicalVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: VocabularyState;
	}
	export interface UpdateMedicalVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
	}
	export function CreateUpdateMedicalVocabularyResponseFormGroup() {
		return new FormGroup<UpdateMedicalVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
		});

	}

	export interface UpdateMedicalVocabularyRequest {

		/** Required */
		VocabularyName: string;

		/** Required */
		LanguageCode: LanguageCode;

		/** Required */
		VocabularyFileUri: string;
	}
	export interface UpdateMedicalVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/** Required */
		VocabularyFileUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMedicalVocabularyRequestFormGroup() {
		return new FormGroup<UpdateMedicalVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVocabularyResponse {
		VocabularyName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
		VocabularyState?: VocabularyState;
	}
	export interface UpdateVocabularyResponseFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		VocabularyState: FormControl<VocabularyState | null | undefined>,
	}
	export function CreateUpdateVocabularyResponseFormGroup() {
		return new FormGroup<UpdateVocabularyResponseFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			VocabularyState: new FormControl<VocabularyState | null | undefined>(undefined),
		});

	}

	export interface UpdateVocabularyRequest {

		/** Required */
		VocabularyName: string;

		/** Required */
		LanguageCode: LanguageCode;
		Phrases?: Array<string>;
		VocabularyFileUri?: string;
		DataAccessRoleArn?: string;
	}
	export interface UpdateVocabularyRequestFormProperties {

		/** Required */
		VocabularyName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VocabularyFileUri: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVocabularyRequestFormGroup() {
		return new FormGroup<UpdateVocabularyRequestFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyFileUri: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVocabularyFilterResponse {
		VocabularyFilterName?: string;
		LanguageCode?: LanguageCode;
		LastModifiedTime?: Date;
	}
	export interface UpdateVocabularyFilterResponseFormProperties {
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateVocabularyFilterResponseFormGroup() {
		return new FormGroup<UpdateVocabularyFilterResponseFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateVocabularyFilterRequest {

		/** Required */
		VocabularyFilterName: string;
		Words?: Array<string>;
		VocabularyFilterFileUri?: string;
		DataAccessRoleArn?: string;
	}
	export interface UpdateVocabularyFilterRequestFormProperties {

		/** Required */
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterFileUri: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVocabularyFilterRequestFormGroup() {
		return new FormGroup<UpdateVocabularyFilterRequestFormProperties>({
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VocabularyFilterFileUri: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p> */
	export interface LanguageIdSettings {
		VocabularyName?: string;
		VocabularyFilterName?: string;
		LanguageModelName?: string;
	}

	/** <p>If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters (<code>VocabularyName</code>, <code>LanguageModelName</code>, and <code>VocabularyFilterName</code>). Note that multi-language identification (<code>IdentifyMultipleLanguages</code>) doesn't support custom language models.</p> <p> <code>LanguageIdSettings</code> supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.</p> <p>It's recommended that you include <code>LanguageOptions</code> when using <code>LanguageIdSettings</code> to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in <code>en-US</code> but Amazon Transcribe determines that the language spoken in your media is <code>en-AU</code>, your custom vocabulary <i>is not</i> applied to your transcription. If you include <code>LanguageOptions</code> and include <code>en-US</code> as the only English language dialect, your custom vocabulary <i>is</i> applied to your transcription.</p> <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>LanguageModelName</code> sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use instead the <code/> parameter with the <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both) sub-parameter.</p> */
	export interface LanguageIdSettingsFormProperties {
		VocabularyName: FormControl<string | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
	}
	export function CreateLanguageIdSettingsFormGroup() {
		return new FormGroup<LanguageIdSettingsFormProperties>({
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscriptionJobStatus { QUEUED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new Call Analytics category.</p> <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively.</p> <p>When creating a new category, you can use the <code>InputType</code> parameter to label the category as a <code>POST_CALL</code> or a <code>REAL_TIME</code> category. <code>POST_CALL</code> categories can only be applied to post-call transcriptions and <code>REAL_TIME</code> categories can only be applied to real-time transcriptions. If you do not include <code>InputType</code>, your category is created as a <code>POST_CALL</code> category by default.</p> <p>Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and .</p> <p>To update an existing category, see .</p> <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p>
		 * Post #X-Amz-Target=Transcribe.CreateCallAnalyticsCategory
		 * @return {CreateCallAnalyticsCategoryResponse} Success
		 */
		CreateCallAnalyticsCategory(requestBody: CreateCallAnalyticsCategoryRequest): Observable<CreateCallAnalyticsCategoryResponse> {
			return this.http.post<CreateCallAnalyticsCategoryResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateCallAnalyticsCategory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new custom language model.</p> <p>When creating a new custom language model, you must specify:</p> <ul> <li> <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model</p> </li> <li> <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p> </li> <li> <p>The language of your model</p> </li> <li> <p>A unique name for your model</p> </li> </ul>
		 * Post #X-Amz-Target=Transcribe.CreateLanguageModel
		 * @return {CreateLanguageModelResponse} Success
		 */
		CreateLanguageModel(requestBody: CreateLanguageModelRequest): Observable<CreateLanguageModelResponse> {
			return this.http.post<CreateLanguageModelResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateLanguageModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new custom medical vocabulary.</p> <p>Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the <code>Phrases</code> flag; <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code> flag and only accepts vocabularies in table format.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
		 * Post #X-Amz-Target=Transcribe.CreateMedicalVocabulary
		 * @return {CreateMedicalVocabularyResponse} Success
		 */
		CreateMedicalVocabulary(requestBody: CreateMedicalVocabularyRequest): Observable<CreateMedicalVocabularyResponse> {
			return this.http.post<CreateMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new custom vocabulary.</p> <p>When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the <code>Phrases</code> flag.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
		 * Post #X-Amz-Target=Transcribe.CreateVocabulary
		 * @return {CreateVocabularyResponse} Success
		 */
		CreateVocabulary(requestBody: CreateVocabularyRequest): Observable<CreateVocabularyResponse> {
			return this.http.post<CreateVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new custom vocabulary filter.</p> <p>You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts.</p> <p>Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your language.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Vocabulary filtering</a>.</p>
		 * Post #X-Amz-Target=Transcribe.CreateVocabularyFilter
		 * @return {CreateVocabularyFilterResponse} Success
		 */
		CreateVocabularyFilter(requestBody: CreateVocabularyFilterRequest): Observable<CreateVocabularyFilterResponse> {
			return this.http.post<CreateVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.CreateVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using <code>CategoryName</code>. Category names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory
		 * @return {DeleteCallAnalyticsCategoryResponse} Success
		 */
		DeleteCallAnalyticsCategory(requestBody: DeleteCallAnalyticsCategoryRequest): Observable<DeleteCallAnalyticsCategoryResponse> {
			return this.http.post<DeleteCallAnalyticsCategoryResponse>(this.baseUri + '#X-Amz-Target=Transcribe.DeleteCallAnalyticsCategory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using <code>CallAnalyticsJobName</code>. Job names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteCallAnalyticsJob
		 * @return {DeleteCallAnalyticsJobResponse} Success
		 */
		DeleteCallAnalyticsJob(requestBody: DeleteCallAnalyticsJobRequest): Observable<DeleteCallAnalyticsJobResponse> {
			return this.http.post<DeleteCallAnalyticsJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.DeleteCallAnalyticsJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using <code>ModelName</code>. custom language model names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteLanguageModel
		 * @return {void} Success
		 */
		DeleteLanguageModel(requestBody: DeleteLanguageModelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteLanguageModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob
		 * @return {void} Success
		 */
		DeleteMedicalTranscriptionJob(requestBody: DeleteMedicalTranscriptionJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteMedicalVocabulary
		 * @return {void} Success
		 */
		DeleteMedicalVocabulary(requestBody: DeleteMedicalVocabularyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a transcription job. To use this operation, specify the name of the job you want to delete using <code>TranscriptionJobName</code>. Job names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteTranscriptionJob
		 * @return {void} Success
		 */
		DeleteTranscriptionJob(requestBody: DeleteTranscriptionJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using <code>VocabularyName</code>. Custom vocabulary names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteVocabulary
		 * @return {void} Success
		 */
		DeleteVocabulary(requestBody: DeleteVocabularyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>. Custom vocabulary filter names are case sensitive.
		 * Post #X-Amz-Target=Transcribe.DeleteVocabularyFilter
		 * @return {void} Success
		 */
		DeleteVocabularyFilter(requestBody: DeleteVocabularyFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Transcribe.DeleteVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides information about the specified custom language model.</p> <p>This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.</p> <p>If you tried to create a new custom language model and the request wasn't successful, you can use <code>DescribeLanguageModel</code> to help identify the reason for this failure.</p>
		 * Post #X-Amz-Target=Transcribe.DescribeLanguageModel
		 * @return {DescribeLanguageModelResponse} Success
		 */
		DescribeLanguageModel(requestBody: DescribeLanguageModelRequest): Observable<DescribeLanguageModelResponse> {
			return this.http.post<DescribeLanguageModelResponse>(this.baseUri + '#X-Amz-Target=Transcribe.DescribeLanguageModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified Call Analytics category.</p> <p>To get a list of your Call Analytics categories, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetCallAnalyticsCategory
		 * @return {GetCallAnalyticsCategoryResponse} Success
		 */
		GetCallAnalyticsCategory(requestBody: GetCallAnalyticsCategoryRequest): Observable<GetCallAnalyticsCategoryResponse> {
			return this.http.post<GetCallAnalyticsCategoryResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetCallAnalyticsCategory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in <code>RedactedMediaFileUri</code>.</p> <p>To get a list of your Call Analytics jobs, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetCallAnalyticsJob
		 * @return {GetCallAnalyticsJobResponse} Success
		 */
		GetCallAnalyticsJob(requestBody: GetCallAnalyticsJobRequest): Observable<GetCallAnalyticsJobResponse> {
			return this.http.post<GetCallAnalyticsJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetCallAnalyticsJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>To get a list of your medical transcription jobs, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetMedicalTranscriptionJob
		 * @return {GetMedicalTranscriptionJobResponse} Success
		 */
		GetMedicalTranscriptionJob(requestBody: GetMedicalTranscriptionJobRequest): Observable<GetMedicalTranscriptionJobResponse> {
			return this.http.post<GetMedicalTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified custom medical vocabulary.</p> <p>To view the status of the specified custom medical vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary failed.</p> <p>To get a list of your custom medical vocabularies, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetMedicalVocabulary
		 * @return {GetMedicalVocabularyResponse} Success
		 */
		GetMedicalVocabulary(requestBody: GetMedicalVocabularyRequest): Observable<GetMedicalVocabularyResponse> {
			return this.http.post<GetMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>To get a list of your transcription jobs, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetTranscriptionJob
		 * @return {GetTranscriptionJobResponse} Success
		 */
		GetTranscriptionJob(requestBody: GetTranscriptionJobRequest): Observable<GetTranscriptionJobResponse> {
			return this.http.post<GetTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified custom vocabulary.</p> <p>To view the status of the specified custom vocabulary, check the <code>VocabularyState</code> field. If the status is <code>READY</code>, your custom vocabulary is available to use. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your custom vocabulary failed.</p> <p>To get a list of your custom vocabularies, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetVocabulary
		 * @return {GetVocabularyResponse} Success
		 */
		GetVocabulary(requestBody: GetVocabularyRequest): Observable<GetVocabularyResponse> {
			return this.http.post<GetVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about the specified custom vocabulary filter.</p> <p>To get a list of your custom vocabulary filters, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.GetVocabularyFilter
		 * @return {GetVocabularyFilterResponse} Success
		 */
		GetVocabularyFilter(requestBody: GetVocabularyFilterRequest): Observable<GetVocabularyFilterResponse> {
			return this.http.post<GetVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.GetVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of Call Analytics categories, including all rules that make up each category.</p> <p>To get detailed information about a specific Call Analytics category, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListCallAnalyticsCategories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCallAnalyticsCategoriesResponse} Success
		 */
		ListCallAnalyticsCategories(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCallAnalyticsCategoriesRequest): Observable<ListCallAnalyticsCategoriesResponse> {
			return this.http.post<ListCallAnalyticsCategoriesResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListCallAnalyticsCategories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned.</p> <p>To get detailed information about a specific Call Analytics job, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListCallAnalyticsJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCallAnalyticsJobsResponse} Success
		 */
		ListCallAnalyticsJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCallAnalyticsJobsRequest): Observable<ListCallAnalyticsJobsResponse> {
			return this.http.post<ListCallAnalyticsJobsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListCallAnalyticsJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned.</p> <p>To get detailed information about a specific custom language model, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListLanguageModels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLanguageModelsResponse} Success
		 */
		ListLanguageModels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLanguageModelsRequest): Observable<ListLanguageModelsResponse> {
			return this.http.post<ListLanguageModelsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListLanguageModels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned.</p> <p>To get detailed information about a specific medical transcription job, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalTranscriptionJobsResponse} Success
		 */
		ListMedicalTranscriptionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMedicalTranscriptionJobsRequest): Observable<ListMedicalTranscriptionJobsResponse> {
			return this.http.post<ListMedicalTranscriptionJobsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListMedicalTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned.</p> <p>To get detailed information about a specific custom medical vocabulary, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListMedicalVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMedicalVocabulariesResponse} Success
		 */
		ListMedicalVocabularies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMedicalVocabulariesRequest): Observable<ListMedicalVocabulariesResponse> {
			return this.http.post<ListMedicalVocabulariesResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListMedicalVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all tags associated with the specified transcription job, vocabulary, model, or resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
		 * Post #X-Amz-Target=Transcribe.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned.</p> <p>To get detailed information about a specific transcription job, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListTranscriptionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTranscriptionJobsResponse} Success
		 */
		ListTranscriptionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTranscriptionJobsRequest): Observable<ListTranscriptionJobsResponse> {
			return this.http.post<ListTranscriptionJobsResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListTranscriptionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListVocabularies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabulariesResponse} Success
		 */
		ListVocabularies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVocabulariesRequest): Observable<ListVocabulariesResponse> {
			return this.http.post<ListVocabulariesResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListVocabularies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned.</p> <p>To get detailed information about a specific custom vocabulary filter, use the operation.</p>
		 * Post #X-Amz-Target=Transcribe.ListVocabularyFilters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVocabularyFiltersResponse} Success
		 */
		ListVocabularyFilters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVocabularyFiltersRequest): Observable<ListVocabularyFiltersResponse> {
			return this.http.post<ListVocabularyFiltersResponse>(this.baseUri + '#X-Amz-Target=Transcribe.ListVocabularyFilters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call Analytics</a>.</p> <p>If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for real-time transcriptions</a>.</p> <p>To make a <code>StartCallAnalyticsJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>Note that job queuing is enabled by default for Call Analytics jobs.</p> <p>You must include the following parameters in your <code>StartCallAnalyticsJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>CallAnalyticsJobName</code>: A custom name that you create for your transcription job that's unique within your Amazon Web Services account.</p> </li> <li> <p> <code>DataAccessRoleArn</code>: The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code> or <code>RedactedMediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> </ul> <note> <p>With Call Analytics, you can redact the audio contained in your media file by including <code>RedactedMediaFileUri</code>, instead of <code>MediaFileUri</code>, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p> </note>
		 * Post #X-Amz-Target=Transcribe.StartCallAnalyticsJob
		 * @return {StartCallAnalyticsJobResponse} Success
		 */
		StartCallAnalyticsJob(requestBody: StartCallAnalyticsJobRequest): Observable<StartCallAnalyticsJobResponse> {
			return this.http.post<StartCallAnalyticsJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.StartCallAnalyticsJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request.</p> <p>In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works-med.html">How Amazon Transcribe Medical works</a>.</p> <p>To make a <code>StartMedicalTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartMedicalTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>MedicalTranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p> <code>LanguageCode</code>: This must be <code>en-US</code>.</p> </li> <li> <p> <code>OutputBucketName</code>: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include <code>OutputKey</code>.</p> </li> <li> <p> <code>Specialty</code>: This must be <code>PRIMARYCARE</code>.</p> </li> <li> <p> <code>Type</code>: Choose whether your audio is a conversation or a dictation.</p> </li> </ul>
		 * Post #X-Amz-Target=Transcribe.StartMedicalTranscriptionJob
		 * @return {StartMedicalTranscriptionJobResponse} Success
		 */
		StartMedicalTranscriptionJob(requestBody: StartMedicalTranscriptionJobRequest): Observable<StartMedicalTranscriptionJobResponse> {
			return this.http.post<StartMedicalTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.StartMedicalTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request.</p> <p>To make a <code>StartTranscriptionJob</code> request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the <code>Media</code> parameter.</p> <p>You must include the following parameters in your <code>StartTranscriptionJob</code> request:</p> <ul> <li> <p> <code>region</code>: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html">Amazon Transcribe endpoints and quotas</a>.</p> </li> <li> <p> <code>TranscriptionJobName</code>: A custom name you create for your transcription job that is unique within your Amazon Web Services account.</p> </li> <li> <p> <code>Media</code> (<code>MediaFileUri</code>): The Amazon S3 location of your media file.</p> </li> <li> <p>One of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code>: If you know the language of your media file, specify it using the <code>LanguageCode</code> parameter; you can find all valid language codes in the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. If you don't know the languages spoken in your media, use either <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> and let Amazon Transcribe identify the languages for you.</p> </li> </ul>
		 * Post #X-Amz-Target=Transcribe.StartTranscriptionJob
		 * @return {StartTranscriptionJobResponse} Success
		 */
		StartTranscriptionJob(requestBody: StartTranscriptionJobRequest): Observable<StartTranscriptionJobResponse> {
			return this.http.post<StartTranscriptionJobResponse>(this.baseUri + '#X-Amz-Target=Transcribe.StartTranscriptionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.</p> <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
		 * Post #X-Amz-Target=Transcribe.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Transcribe.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags from the specified Amazon Transcribe resource.</p> <p>If you include <code>UntagResource</code> in your request, you must also include <code>ResourceArn</code> and <code>TagKeys</code>.</p>
		 * Post #X-Amz-Target=Transcribe.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified Call Analytics category with new rules. Note that the <code>UpdateCallAnalyticsCategory</code> operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category.</p> <p>To create a new category, see .</p>
		 * Post #X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory
		 * @return {UpdateCallAnalyticsCategoryResponse} Success
		 */
		UpdateCallAnalyticsCategory(requestBody: UpdateCallAnalyticsCategoryRequest): Observable<UpdateCallAnalyticsCategoryResponse> {
			return this.http.post<UpdateCallAnalyticsCategoryResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateCallAnalyticsCategory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
		 * Post #X-Amz-Target=Transcribe.UpdateMedicalVocabulary
		 * @return {UpdateMedicalVocabularyResponse} Success
		 */
		UpdateMedicalVocabulary(requestBody: UpdateMedicalVocabularyRequest): Observable<UpdateMedicalVocabularyResponse> {
			return this.http.post<UpdateMedicalVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateMedicalVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.
		 * Post #X-Amz-Target=Transcribe.UpdateVocabulary
		 * @return {UpdateVocabularyResponse} Success
		 */
		UpdateVocabulary(requestBody: UpdateVocabularyRequest): Observable<UpdateVocabularyResponse> {
			return this.http.post<UpdateVocabularyResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateVocabulary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.
		 * Post #X-Amz-Target=Transcribe.UpdateVocabularyFilter
		 * @return {UpdateVocabularyFilterResponse} Success
		 */
		UpdateVocabularyFilter(requestBody: UpdateVocabularyFilterRequest): Observable<UpdateVocabularyFilterResponse> {
			return this.http.post<UpdateVocabularyFilterResponse>(this.baseUri + '#X-Amz-Target=Transcribe.UpdateVocabularyFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateCallAnalyticsCategoryX_Amz_Target { 'Transcribe.CreateCallAnalyticsCategory' = 0 }

	export enum CreateLanguageModelX_Amz_Target { 'Transcribe.CreateLanguageModel' = 0 }

	export enum CreateMedicalVocabularyX_Amz_Target { 'Transcribe.CreateMedicalVocabulary' = 0 }

	export enum CreateVocabularyX_Amz_Target { 'Transcribe.CreateVocabulary' = 0 }

	export enum CreateVocabularyFilterX_Amz_Target { 'Transcribe.CreateVocabularyFilter' = 0 }

	export enum DeleteCallAnalyticsCategoryX_Amz_Target { 'Transcribe.DeleteCallAnalyticsCategory' = 0 }

	export enum DeleteCallAnalyticsJobX_Amz_Target { 'Transcribe.DeleteCallAnalyticsJob' = 0 }

	export enum DeleteLanguageModelX_Amz_Target { 'Transcribe.DeleteLanguageModel' = 0 }

	export enum DeleteMedicalTranscriptionJobX_Amz_Target { 'Transcribe.DeleteMedicalTranscriptionJob' = 0 }

	export enum DeleteMedicalVocabularyX_Amz_Target { 'Transcribe.DeleteMedicalVocabulary' = 0 }

	export enum DeleteTranscriptionJobX_Amz_Target { 'Transcribe.DeleteTranscriptionJob' = 0 }

	export enum DeleteVocabularyX_Amz_Target { 'Transcribe.DeleteVocabulary' = 0 }

	export enum DeleteVocabularyFilterX_Amz_Target { 'Transcribe.DeleteVocabularyFilter' = 0 }

	export enum DescribeLanguageModelX_Amz_Target { 'Transcribe.DescribeLanguageModel' = 0 }

	export enum GetCallAnalyticsCategoryX_Amz_Target { 'Transcribe.GetCallAnalyticsCategory' = 0 }

	export enum GetCallAnalyticsJobX_Amz_Target { 'Transcribe.GetCallAnalyticsJob' = 0 }

	export enum GetMedicalTranscriptionJobX_Amz_Target { 'Transcribe.GetMedicalTranscriptionJob' = 0 }

	export enum GetMedicalVocabularyX_Amz_Target { 'Transcribe.GetMedicalVocabulary' = 0 }

	export enum GetTranscriptionJobX_Amz_Target { 'Transcribe.GetTranscriptionJob' = 0 }

	export enum GetVocabularyX_Amz_Target { 'Transcribe.GetVocabulary' = 0 }

	export enum GetVocabularyFilterX_Amz_Target { 'Transcribe.GetVocabularyFilter' = 0 }

	export enum ListCallAnalyticsCategoriesX_Amz_Target { 'Transcribe.ListCallAnalyticsCategories' = 0 }

	export enum ListCallAnalyticsJobsX_Amz_Target { 'Transcribe.ListCallAnalyticsJobs' = 0 }

	export enum ListLanguageModelsX_Amz_Target { 'Transcribe.ListLanguageModels' = 0 }

	export enum ListMedicalTranscriptionJobsX_Amz_Target { 'Transcribe.ListMedicalTranscriptionJobs' = 0 }

	export enum ListMedicalVocabulariesX_Amz_Target { 'Transcribe.ListMedicalVocabularies' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'Transcribe.ListTagsForResource' = 0 }

	export enum ListTranscriptionJobsX_Amz_Target { 'Transcribe.ListTranscriptionJobs' = 0 }

	export enum ListVocabulariesX_Amz_Target { 'Transcribe.ListVocabularies' = 0 }

	export enum ListVocabularyFiltersX_Amz_Target { 'Transcribe.ListVocabularyFilters' = 0 }

	export enum StartCallAnalyticsJobX_Amz_Target { 'Transcribe.StartCallAnalyticsJob' = 0 }

	export enum StartMedicalTranscriptionJobX_Amz_Target { 'Transcribe.StartMedicalTranscriptionJob' = 0 }

	export enum StartTranscriptionJobX_Amz_Target { 'Transcribe.StartTranscriptionJob' = 0 }

	export enum TagResourceX_Amz_Target { 'Transcribe.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'Transcribe.UntagResource' = 0 }

	export enum UpdateCallAnalyticsCategoryX_Amz_Target { 'Transcribe.UpdateCallAnalyticsCategory' = 0 }

	export enum UpdateMedicalVocabularyX_Amz_Target { 'Transcribe.UpdateMedicalVocabulary' = 0 }

	export enum UpdateVocabularyX_Amz_Target { 'Transcribe.UpdateVocabulary' = 0 }

	export enum UpdateVocabularyFilterX_Amz_Target { 'Transcribe.UpdateVocabularyFilter' = 0 }

}

