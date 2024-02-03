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
		NextToken?: string;
	}
	export interface DescribeVoicesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVoicesOutputFormGroup() {
		return new FormGroup<DescribeVoicesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of the voice. */
	export interface Voice {
		Gender?: Gender;
		Id?: VoiceId;
		LanguageCode?: LanguageCode;
		LanguageName?: string;
		Name?: string;
		AdditionalLanguageCodes?: Array<LanguageCode>;
		SupportedEngines?: Array<Engine>;
	}

	/** Description of the voice. */
	export interface VoiceFormProperties {
		Gender: FormControl<Gender | null | undefined>,
		Id: FormControl<VoiceId | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LanguageName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateVoiceFormGroup() {
		return new FormGroup<VoiceFormProperties>({
			Gender: new FormControl<Gender | null | undefined>(undefined),
			Id: new FormControl<VoiceId | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LanguageName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Gender { Female = 'Female', Male = 'Male' }

	export enum VoiceId { Aditi = 'Aditi', Amy = 'Amy', Astrid = 'Astrid', Bianca = 'Bianca', Brian = 'Brian', Camila = 'Camila', Carla = 'Carla', Carmen = 'Carmen', Celine = 'Celine', Chantal = 'Chantal', Conchita = 'Conchita', Cristiano = 'Cristiano', Dora = 'Dora', Emma = 'Emma', Enrique = 'Enrique', Ewa = 'Ewa', Filiz = 'Filiz', Gabrielle = 'Gabrielle', Geraint = 'Geraint', Giorgio = 'Giorgio', Gwyneth = 'Gwyneth', Hans = 'Hans', Ines = 'Ines', Ivy = 'Ivy', Jacek = 'Jacek', Jan = 'Jan', Joanna = 'Joanna', Joey = 'Joey', Justin = 'Justin', Karl = 'Karl', Kendra = 'Kendra', Kevin = 'Kevin', Kimberly = 'Kimberly', Lea = 'Lea', Liv = 'Liv', Lotte = 'Lotte', Lucia = 'Lucia', Lupe = 'Lupe', Mads = 'Mads', Maja = 'Maja', Marlene = 'Marlene', Mathieu = 'Mathieu', Matthew = 'Matthew', Maxim = 'Maxim', Mia = 'Mia', Miguel = 'Miguel', Mizuki = 'Mizuki', Naja = 'Naja', Nicole = 'Nicole', Olivia = 'Olivia', Penelope = 'Penelope', Raveena = 'Raveena', Ricardo = 'Ricardo', Ruben = 'Ruben', Russell = 'Russell', Salli = 'Salli', Seoyeon = 'Seoyeon', Takumi = 'Takumi', Tatyana = 'Tatyana', Vicki = 'Vicki', Vitoria = 'Vitoria', Zeina = 'Zeina', Zhiyu = 'Zhiyu', Aria = 'Aria', Ayanda = 'Ayanda', Arlet = 'Arlet', Hannah = 'Hannah', Arthur = 'Arthur', Daniel = 'Daniel', Liam = 'Liam', Pedro = 'Pedro', Kajal = 'Kajal', Hiujin = 'Hiujin', Laura = 'Laura', Elin = 'Elin', Ida = 'Ida', Suvi = 'Suvi', Ola = 'Ola', Hala = 'Hala', Andres = 'Andres', Sergio = 'Sergio', Remi = 'Remi', Adriano = 'Adriano', Thiago = 'Thiago', Ruth = 'Ruth', Stephen = 'Stephen', Kazuha = 'Kazuha', Tomoko = 'Tomoko', Niamh = 'Niamh', Sofie = 'Sofie', Lisa = 'Lisa', Isabelle = 'Isabelle' }

	export enum LanguageCode { arb = 'arb', 'cmn-CN' = 'cmn-CN', 'cy-GB' = 'cy-GB', 'da-DK' = 'da-DK', 'de-DE' = 'de-DE', 'en-AU' = 'en-AU', 'en-GB' = 'en-GB', 'en-GB-WLS' = 'en-GB-WLS', 'en-IN' = 'en-IN', 'en-US' = 'en-US', 'es-ES' = 'es-ES', 'es-MX' = 'es-MX', 'es-US' = 'es-US', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'is-IS' = 'is-IS', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'hi-IN' = 'hi-IN', 'ko-KR' = 'ko-KR', 'nb-NO' = 'nb-NO', 'nl-NL' = 'nl-NL', 'pl-PL' = 'pl-PL', 'pt-BR' = 'pt-BR', 'pt-PT' = 'pt-PT', 'ro-RO' = 'ro-RO', 'ru-RU' = 'ru-RU', 'sv-SE' = 'sv-SE', 'tr-TR' = 'tr-TR', 'en-NZ' = 'en-NZ', 'en-ZA' = 'en-ZA', 'ca-ES' = 'ca-ES', 'de-AT' = 'de-AT', 'yue-CN' = 'yue-CN', 'ar-AE' = 'ar-AE', 'fi-FI' = 'fi-FI', 'en-IE' = 'en-IE', 'nl-BE' = 'nl-BE', 'fr-BE' = 'fr-BE' }

	export enum Engine { standard = 'standard', neural = 'neural' }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface GetLexiconOutput {
		Lexicon?: Lexicon;
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
		Content?: string;
		Name?: string;
	}

	/** Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>. */
	export interface LexiconFormProperties {
		Content: FormControl<string | null | undefined>,
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
		Alphabet?: string;
		LanguageCode?: LanguageCode;
		LastModified?: Date;
		LexiconArn?: string;
		LexemesCount?: number | null;
		Size?: number | null;
	}

	/** Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>. */
	export interface LexiconAttributesFormProperties {
		Alphabet: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		LexiconArn: FormControl<string | null | undefined>,
		LexemesCount: FormControl<number | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateLexiconAttributesFormGroup() {
		return new FormGroup<LexiconAttributesFormProperties>({
			Alphabet: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			LexiconArn: new FormControl<string | null | undefined>(undefined),
			LexemesCount: new FormControl<number | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSpeechSynthesisTaskOutput {
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
		Engine?: Engine;
		TaskId?: string;
		TaskStatus?: TaskStatus;
		TaskStatusReason?: string;
		OutputUri?: string;
		CreationTime?: Date;
		RequestCharacters?: number | null;
		SnsTopicArn?: string;
		LexiconNames?: Array<string>;
		OutputFormat?: OutputFormat;
		SampleRate?: string;
		SpeechMarkTypes?: Array<SpeechMarkType>;
		TextType?: TextType;
		VoiceId?: VoiceId;
		LanguageCode?: LanguageCode;
	}

	/** SynthesisTask object that provides information about a speech synthesis task. */
	export interface SynthesisTaskFormProperties {
		Engine: FormControl<Engine | null | undefined>,
		TaskId: FormControl<string | null | undefined>,
		TaskStatus: FormControl<TaskStatus | null | undefined>,
		TaskStatusReason: FormControl<string | null | undefined>,
		OutputUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		RequestCharacters: FormControl<number | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		OutputFormat: FormControl<OutputFormat | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,
		TextType: FormControl<TextType | null | undefined>,
		VoiceId: FormControl<VoiceId | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateSynthesisTaskFormGroup() {
		return new FormGroup<SynthesisTaskFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			TaskId: new FormControl<string | null | undefined>(undefined),
			TaskStatus: new FormControl<TaskStatus | null | undefined>(undefined),
			TaskStatusReason: new FormControl<string | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			RequestCharacters: new FormControl<number | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
		});

	}

	export enum TaskStatus { scheduled = 'scheduled', inProgress = 'inProgress', completed = 'completed', failed = 'failed' }

	export enum OutputFormat { json = 'json', mp3 = 'mp3', ogg_vorbis = 'ogg_vorbis', pcm = 'pcm' }

	export enum SpeechMarkType { sentence = 'sentence', ssml = 'ssml', viseme = 'viseme', word = 'word' }

	export enum TextType { ssml = 'ssml', text = 'text' }

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
		NextToken?: string;
	}
	export interface ListLexiconsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLexiconsOutputFormGroup() {
		return new FormGroup<ListLexiconsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the content of the lexicon. */
	export interface LexiconDescription {
		Name?: string;
		Attributes?: LexiconAttributes;
	}

	/** Describes the content of the lexicon. */
	export interface LexiconDescriptionFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLexiconDescriptionFormGroup() {
		return new FormGroup<LexiconDescriptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpeechSynthesisTasksOutput {
		NextToken?: string;
		SynthesisTasks?: Array<SynthesisTask>;
	}
	export interface ListSpeechSynthesisTasksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeechSynthesisTasksOutputFormGroup() {
		return new FormGroup<ListSpeechSynthesisTasksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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
		AudioStream?: string;
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

	export interface ListSpeechSynthesisTasksInput {
	}
	export interface ListSpeechSynthesisTasksInputFormProperties {
	}
	export function CreateListSpeechSynthesisTasksInputFormGroup() {
		return new FormGroup<ListSpeechSynthesisTasksInputFormProperties>({
		});

	}

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

	export interface StartSpeechSynthesisTaskInput {
		Engine?: Engine;
		LanguageCode?: LanguageCode;
		LexiconNames?: Array<string>;

		/** Required */
		OutputFormat: OutputFormat;

		/** Required */
		OutputS3BucketName: string;
		OutputS3KeyPrefix?: string;
		SampleRate?: string;
		SnsTopicArn?: string;
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/** Required */
		Text: string;
		TextType?: TextType;

		/** Required */
		VoiceId: VoiceId;
	}
	export interface StartSpeechSynthesisTaskInputFormProperties {
		Engine: FormControl<Engine | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/** Required */
		OutputFormat: FormControl<OutputFormat | null | undefined>,

		/** Required */
		OutputS3BucketName: FormControl<string | null | undefined>,
		OutputS3KeyPrefix: FormControl<string | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		TextType: FormControl<TextType | null | undefined>,

		/** Required */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateStartSpeechSynthesisTaskInputFormGroup() {
		return new FormGroup<StartSpeechSynthesisTaskInputFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined, [Validators.required]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SynthesizeSpeechInput {
		Engine?: Engine;
		LanguageCode?: LanguageCode;
		LexiconNames?: Array<string>;

		/** Required */
		OutputFormat: OutputFormat;
		SampleRate?: string;
		SpeechMarkTypes?: Array<SpeechMarkType>;

		/** Required */
		Text: string;
		TextType?: TextType;

		/** Required */
		VoiceId: VoiceId;
	}
	export interface SynthesizeSpeechInputFormProperties {
		Engine: FormControl<Engine | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/** Required */
		OutputFormat: FormControl<OutputFormat | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		TextType: FormControl<TextType | null | undefined>,

		/** Required */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateSynthesizeSpeechInputFormGroup() {
		return new FormGroup<SynthesizeSpeechInputFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined, [Validators.required]),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
		 * Delete v1/lexicons/{LexiconName}
		 * @param {string} LexiconName The name of the lexicon to delete. Must be an existing lexicon in the region.
		 * @return {DeleteLexiconOutput} Success
		 */
		DeleteLexicon(LexiconName: string): Observable<DeleteLexiconOutput> {
			return this.http.delete<DeleteLexiconOutput>(this.baseUri + 'v1/lexicons/' + (LexiconName == null ? '' : encodeURIComponent(LexiconName)), {});
		}

		/**
		 * Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
		 * Get v1/lexicons/{LexiconName}
		 * @param {string} LexiconName Name of the lexicon.
		 * @return {GetLexiconOutput} Success
		 */
		GetLexicon(LexiconName: string): Observable<GetLexiconOutput> {
			return this.http.get<GetLexiconOutput>(this.baseUri + 'v1/lexicons/' + (LexiconName == null ? '' : encodeURIComponent(LexiconName)), {});
		}

		/**
		 * <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
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
		 * @param {LanguageCode} LanguageCode  The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned. 
		 * @param {boolean} IncludeAdditionalLanguageCodes Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.
		 * @param {string} NextToken An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.
		 * @return {DescribeVoicesOutput} Success
		 */
		DescribeVoices(Engine: Engine | null | undefined, LanguageCode: LanguageCode | null | undefined, IncludeAdditionalLanguageCodes: boolean | null | undefined, NextToken: string | null | undefined): Observable<DescribeVoicesOutput> {
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
		 * Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
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
		 * @param {TaskStatus} Status Status of the speech synthesis tasks returned in a List operation
		 * @return {ListSpeechSynthesisTasksOutput} Success
		 */
		ListSpeechSynthesisTasks(MaxResults: number | null | undefined, NextToken: string | null | undefined, Status: TaskStatus | null | undefined): Observable<ListSpeechSynthesisTasksOutput> {
			return this.http.get<ListSpeechSynthesisTasksOutput>(this.baseUri + 'v1/synthesisTasks?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Status=' + Status, {});
		}

		/**
		 * Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.
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

	export interface StartSpeechSynthesisTaskPostBody {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine?: Engine | null;

		/** <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode?: LanguageCode | null;

		/**
		 * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.
		 * Maximum items: 5
		 */
		LexiconNames?: Array<string>;

		/**
		 * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
		 * Required
		 */
		OutputFormat: OutputFormat;

		/**
		 * Amazon S3 bucket name to which the output file will be saved.
		 * Required
		 */
		OutputS3BucketName: string;

		/** The Amazon S3 key prefix for the output speech file. */
		OutputS3KeyPrefix?: string | null;

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate?: string | null;

		/** ARN for the SNS topic optionally used for providing status notification for a speech synthesis task. */
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
		TextType?: TextType | null;

		/**
		 * Voice ID to use for the synthesis.
		 * Required
		 */
		VoiceId: VoiceId;
	}
	export interface StartSpeechSynthesisTaskPostBodyFormProperties {

		/** Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error. */
		Engine: FormControl<Engine | null | undefined>,

		/** <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/**
		 * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json.
		 * Required
		 */
		OutputFormat: FormControl<OutputFormat | null | undefined>,

		/**
		 * Amazon S3 bucket name to which the output file will be saved.
		 * Required
		 */
		OutputS3BucketName: FormControl<string | null | undefined>,

		/** The Amazon S3 key prefix for the output speech file. */
		OutputS3KeyPrefix: FormControl<string | null | undefined>,

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate: FormControl<string | null | undefined>,

		/** ARN for the SNS topic optionally used for providing status notification for a speech synthesis task. */
		SnsTopicArn: FormControl<string | null | undefined>,

		/**
		 * The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text.
		 * Required
		 */
		Text: FormControl<string | null | undefined>,

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. */
		TextType: FormControl<TextType | null | undefined>,

		/**
		 * Voice ID to use for the synthesis.
		 * Required
		 */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateStartSpeechSynthesisTaskPostBodyFormGroup() {
		return new FormGroup<StartSpeechSynthesisTaskPostBodyFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined, [Validators.required]),
			OutputS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$')]),
			OutputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-zA-Z\/\!\-_\.\*\\\'\(\):;\$@=+\,\?&]{0,800}$')]),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws(-(cn|iso(-b)?|us-gov))?:sns:[a-z0-9_-]{1,50}:\d{12}:[a-zA-Z0-9_-]{1,256}$')]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SynthesizeSpeechPostBody {

		/** <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> | <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p> */
		Engine?: Engine | null;

		/** <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode?: LanguageCode | null;

		/**
		 * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.
		 * Maximum items: 5
		 */
		LexiconNames?: Array<string>;

		/**
		 * <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
		 * Required
		 */
		OutputFormat: OutputFormat;

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
		TextType?: TextType | null;

		/**
		 * Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation.
		 * Required
		 */
		VoiceId: VoiceId;
	}
	export interface SynthesizeSpeechPostBodyFormProperties {

		/** <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. For information on Amazon Polly voices and which voices are available in standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p> <p> <b>NTTS-only voices</b> </p> <p>When using NTTS-only voices such as Kevin (en-US), this parameter is required and must be set to <code>neural</code>. If the engine is not specified, or is set to <code>standard</code>, this will result in an error. </p> <p>Type: String</p> <p>Valid Values: <code>standard</code> | <code>neural</code> </p> <p>Required: Yes</p> <p> <b>Standard voices</b> </p> <p>For standard voices, this is not required; the engine parameter defaults to <code>standard</code>. If the engine is not specified, or is set to <code>standard</code> and an NTTS-only voice is selected, this will result in an error. </p> */
		Engine: FormControl<Engine | null | undefined>,

		/** <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p> */
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/**
		 * <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
		 * Required
		 */
		OutputFormat: FormControl<OutputFormat | null | undefined>,

		/** <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p> */
		SampleRate: FormControl<string | null | undefined>,

		/**
		 * Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text.
		 * Required
		 */
		Text: FormControl<string | null | undefined>,

		/** Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>. */
		TextType: FormControl<TextType | null | undefined>,

		/**
		 * Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation.
		 * Required
		 */
		VoiceId: FormControl<VoiceId | null | undefined>,
	}
	export function CreateSynthesizeSpeechPostBodyFormGroup() {
		return new FormGroup<SynthesizeSpeechPostBodyFormProperties>({
			Engine: new FormControl<Engine | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined, [Validators.required]),
			SampleRate: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextType: new FormControl<TextType | null | undefined>(undefined),
			VoiceId: new FormControl<VoiceId | null | undefined>(undefined, [Validators.required]),
		});

	}

}

