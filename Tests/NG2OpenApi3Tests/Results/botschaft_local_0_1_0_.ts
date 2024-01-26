import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Config {

		/** Required */
		providers: string;

		/** Required */
		topics: Array<string>;
	}
	export interface ConfigFormProperties {

		/** Required */
		providers: FormControl<string | null | undefined>,
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
			providers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DiscordMessageRequest {
		base64_message?: string | null;

		/** Required */
		channel: string;
		message?: string | null;
	}
	export interface DiscordMessageRequestFormProperties {
		base64_message: FormControl<string | null | undefined>,

		/** Required */
		channel: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDiscordMessageRequestFormGroup() {
		return new FormGroup<DiscordMessageRequestFormProperties>({
			base64_message: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
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

	export interface SlackMessageRequest {
		base64_message?: string | null;

		/** Required */
		channel: string;
		message?: string | null;
	}
	export interface SlackMessageRequestFormProperties {
		base64_message: FormControl<string | null | undefined>,

		/** Required */
		channel: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSlackMessageRequestFormGroup() {
		return new FormGroup<SlackMessageRequestFormProperties>({
			base64_message: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SnsMessageRequest {
		base64_message?: string | null;
		message?: string | null;
	}
	export interface SnsMessageRequestFormProperties {
		base64_message: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSnsMessageRequestFormGroup() {
		return new FormGroup<SnsMessageRequestFormProperties>({
			base64_message: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TwilioMessageRequest {
		base64_message?: string | null;
		message?: string | null;

		/** Required */
		to: string;
	}
	export interface TwilioMessageRequestFormProperties {
		base64_message: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
	}
	export function CreateTwilioMessageRequestFormGroup() {
		return new FormGroup<TwilioMessageRequestFormProperties>({
			base64_message: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Config
		 * Get config
		 * @return {Config} Successful Response
		 */
		Config_config_get(): Observable<Config> {
			return this.http.get<Config>(this.baseUri + 'config', {});
		}

		/**
		 * Discord Get
		 * Get discord
		 * @return {any} Successful Response
		 */
		Discord_get_discord_get(channel: string, message: string | null | undefined, base64_message: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discord?channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&base64_message=' + (base64_message == null ? '' : encodeURIComponent(base64_message)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Discord Post
		 * Post discord
		 * @return {any} Successful Response
		 */
		Discord_post_discord_post(requestBody: DiscordMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'discord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slack Get
		 * Get slack
		 * @return {any} Successful Response
		 */
		Slack_get_slack_get(channel: string, message: string | null | undefined, base64_message: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'slack?channel=' + (channel == null ? '' : encodeURIComponent(channel)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&base64_message=' + (base64_message == null ? '' : encodeURIComponent(base64_message)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Slack Post
		 * Post slack
		 * @return {any} Successful Response
		 */
		Slack_post_slack_post(requestBody: SlackMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'slack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sns Get
		 * Get sns
		 * @return {any} Successful Response
		 */
		Sns_get_sns_get(message: string | null | undefined, base64_message: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sns?message=' + (message == null ? '' : encodeURIComponent(message)) + '&base64_message=' + (base64_message == null ? '' : encodeURIComponent(base64_message)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sns Post
		 * Post sns
		 * @return {any} Successful Response
		 */
		Sns_post_sns_post(requestBody: SnsMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Topic
		 * Get topic/{topic_name}
		 * @return {any} Successful Response
		 */
		Topic_topic__topic_name__get(topic_name: string, message: string | null | undefined, base64_message: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'topic/' + (topic_name == null ? '' : encodeURIComponent(topic_name)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&base64_message=' + (base64_message == null ? '' : encodeURIComponent(base64_message)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Twilio Message Get
		 * Get twilio
		 * @return {any} Successful Response
		 */
		Twilio_message_get_twilio_get(to: string, message: string | null | undefined, base64_message: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'twilio?to=' + (to == null ? '' : encodeURIComponent(to)) + '&message=' + (message == null ? '' : encodeURIComponent(message)) + '&base64_message=' + (base64_message == null ? '' : encodeURIComponent(base64_message)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Twilio Message Post
		 * Post twilio
		 * @return {any} Successful Response
		 */
		Twilio_message_post_twilio_post(requestBody: TwilioMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'twilio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

