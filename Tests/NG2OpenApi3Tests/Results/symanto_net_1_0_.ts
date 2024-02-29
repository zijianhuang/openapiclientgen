import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface LanguageDetection {

		/** id of the text. */
		id?: string | null;

		/**
		 * the text itself.
		 * Required
		 */
		text: string;
	}
	export interface LanguageDetectionFormProperties {

		/** id of the text. */
		id: FormControl<string | null | undefined>,

		/**
		 * the text itself.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLanguageDetectionFormGroup() {
		return new FormGroup<LanguageDetectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LanguagePredicted {

		/**
		 * the detected language_code corresponding to the input text.
		 * Required
		 */
		detected_language: string;

		/** id of the post. */
		id?: string | null;
	}
	export interface LanguagePredictedFormProperties {

		/**
		 * the detected language_code corresponding to the input text.
		 * Required
		 */
		detected_language: FormControl<string | null | undefined>,

		/** id of the post. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLanguagePredictedFormGroup() {
		return new FormGroup<LanguagePredictedFormProperties>({
			detected_language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Post {

		/** id of the post. */
		id?: string | null;

		/**
		 * language_code of the text.
		 * Required
		 */
		language: string;

		/**
		 * the text to be analysed.
		 * Required
		 */
		text: string;
	}
	export interface PostFormProperties {

		/** id of the post. */
		id: FormControl<string | null | undefined>,

		/**
		 * language_code of the text.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * the text to be analysed.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostPredicted {

		/** id of the post. */
		id?: string | null;

		/**
		 * the list of predictions.
		 * Required
		 */
		predictions: Array<Prediction>;
	}
	export interface PostPredictedFormProperties {

		/** id of the post. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePostPredictedFormGroup() {
		return new FormGroup<PostPredictedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Prediction {

		/**
		 * the predicted label.
		 * Required
		 */
		prediction: string;

		/**
		 * the probability of the predicted label.
		 * Required
		 * Type: double
		 */
		probability: number;
	}
	export interface PredictionFormProperties {

		/**
		 * the predicted label.
		 * Required
		 */
		prediction: FormControl<string | null | undefined>,

		/**
		 * the probability of the predicted label.
		 * Required
		 * Type: double
		 */
		probability: FormControl<number | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			prediction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			probability: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sentiment {
		category?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;
		negationTerm?: string | null;
		parentCategory?: string | null;
		positive?: boolean | null;

		/** Type: double */
		scale?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;
		text?: string | null;
	}
	export interface SentimentFormProperties {
		category: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,
		negationTerm: FormControl<string | null | undefined>,
		parentCategory: FormControl<string | null | undefined>,
		positive: FormControl<boolean | null | undefined>,

		/** Type: double */
		scale: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSentimentFormGroup() {
		return new FormGroup<SentimentFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			negationTerm: new FormControl<string | null | undefined>(undefined),
			parentCategory: new FormControl<string | null | undefined>(undefined),
			positive: new FormControl<boolean | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Topic {
		category?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;

		/** Type: double */
		polarity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;
		text?: string | null;
		topic?: string | null;
	}
	export interface TopicFormProperties {
		category: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,

		/** Type: double */
		polarity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			polarity: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopicSentiment {
		sentence?: string | null;
		sentiment?: Sentiment;
		topic?: Topic;
	}
	export interface TopicSentimentFormProperties {
		sentence: FormControl<string | null | undefined>,
	}
	export function CreateTopicSentimentFormGroup() {
		return new FormGroup<TopicSentimentFormProperties>({
			sentence: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopicSentimentOutput {
		id?: string | null;
		language?: string | null;
		sentiments?: Array<Sentiment>;
		text?: string | null;
		topicSentiments?: Array<TopicSentiment>;
		topics?: Array<Topic>;
	}
	export interface TopicSentimentOutputFormProperties {
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateTopicSentimentOutputFormGroup() {
		return new FormGroup<TopicSentimentOutputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidationErrors {
		detail?: Array<ValidationError>;
	}
	export interface ValidationErrorsFormProperties {
	}
	export function CreateValidationErrorsFormGroup() {
		return new FormGroup<ValidationErrorsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Communication & Tonality
		 * Identify the purpose and writing style of a written text.
		 * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
		 * Returned labels:
		 * * action-seeking
		 * * fact-oriented
		 * * information-seeking
		 * * self-revealing
		 * Post communication
		 * @return {Array<PostPredicted>} Successful Response
		 */
		Communication(all: boolean | null | undefined, requestBody: Array<Post>): Observable<Array<PostPredicted>> {
			return this.http.post<Array<PostPredicted>>(this.baseUri + 'communication?all=' + all, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Emotion Analysis
		 * Detect the emotions of the text based on Ekman.
		 * Supported Langauges: [`en`, `de`, `es`]
		 * Returned labels:
		 * * anger
		 * * disgust
		 * * fear
		 * * joy
		 * * sadness
		 * * surprise
		 * * no-emotion
		 * Post ekman-emotion
		 * @return {Array<PostPredicted>} Successful Response
		 */
		Ekman_emotion(all: boolean | null | undefined, requestBody: Array<Post>): Observable<Array<PostPredicted>> {
			return this.http.post<Array<PostPredicted>>(this.baseUri + 'ekman-emotion?all=' + all, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Emotion Analysis
		 * Detect the emotions of the text.
		 * Supported Langauges: [`en`, `de`, `es`]
		 * Returned labels:
		 * * anger
		 * * joy
		 * * love
		 * * sadness
		 * * surprise
		 * * uncategorized
		 * Post emotion
		 * @return {Array<PostPredicted>} Successful Response
		 */
		Emotion(all: boolean | null | undefined, requestBody: Array<Post>): Observable<Array<PostPredicted>> {
			return this.http.post<Array<PostPredicted>>(this.baseUri + 'emotion?all=' + all, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Language Detection
		 * Identifies what language a text is written in. Only languages that our API supports can be analyzed.
		 * Returned labels:
		 * * language_code of the detected language
		 * Post language-detection
		 * @return {Array<LanguagePredicted>} Successful Response
		 */
		Language_detection(requestBody: Array<LanguageDetection>): Observable<Array<LanguagePredicted>> {
			return this.http.post<Array<LanguagePredicted>>(this.baseUri + 'language-detection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Personality Traits
		 * Predict the personality trait of author of any written text.
		 * Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]
		 * Returned labels:
		 * * emotional
		 * * rational
		 * Post personality
		 * @return {Array<PostPredicted>} Successful Response
		 */
		Personality(all: boolean | null | undefined, requestBody: Array<Post>): Observable<Array<PostPredicted>> {
			return this.http.post<Array<PostPredicted>>(this.baseUri + 'personality?all=' + all, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sentiment Analysis
		 * Evaluate the overall tonality of the text.
		 * Supported Languages: [`en`, `de`, `es`]
		 * Returned labels:
		 * * positive
		 * * negative
		 * Post sentiment
		 * @return {Array<PostPredicted>} Successful Response
		 */
		Sentiment(all: boolean | null | undefined, requestBody: Array<Post>): Observable<Array<PostPredicted>> {
			return this.http.post<Array<PostPredicted>>(this.baseUri + 'sentiment?all=' + all, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Extracts topics and sentiments and relates them.
		 * Post topic-sentiment
		 * @param {Topic_sentimentDomain} domain Provide analysis domain for better extraction (optional)
		 */
		Topic_sentiment(domain: Topic_sentimentDomain | null | undefined, requestBody: Array<Post>): Observable<Array<TopicSentimentOutput>> {
			return this.http.post<Array<TopicSentimentOutput>>(this.baseUri + 'topic-sentiment?domain=' + domain, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Topic_sentimentDomain { Ecom = 'Ecom', Employee = 'Employee', Hotel = 'Hotel', Restaurant = 'Restaurant' }

}

