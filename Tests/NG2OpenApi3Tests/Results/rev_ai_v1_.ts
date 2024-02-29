import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Rev.ai Account Model */
	export interface Account {

		/**
		 * Amount of Rev.ai API credits remaining in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance_seconds?: number | null;

		/** Email of developer account */
		email?: string | null;
	}

	/** Rev.ai Account Model */
	export interface AccountFormProperties {

		/**
		 * Amount of Rev.ai API credits remaining in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance_seconds: FormControl<number | null | undefined>,

		/** Email of developer account */
		email: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			balance_seconds: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescriptionlessJobOptions {
	}
	export interface DescriptionlessJobOptionsFormProperties {
	}
	export function CreateDescriptionlessJobOptionsFormGroup() {
		return new FormGroup<DescriptionlessJobOptionsFormProperties>({
		});

	}

	export interface Job {
	}
	export interface JobFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
		});

	}

	export interface SubmitJobMediaUrlOptions {
	}
	export interface SubmitJobMediaUrlOptionsFormProperties {
	}
	export function CreateSubmitJobMediaUrlOptionsFormGroup() {
		return new FormGroup<SubmitJobMediaUrlOptionsFormProperties>({
		});

	}

	export interface SubmitJobOptions {
	}
	export interface SubmitJobOptionsFormProperties {
	}
	export function CreateSubmitJobOptionsFormGroup() {
		return new FormGroup<SubmitJobOptionsFormProperties>({
		});

	}


	/**
	 * Rev.ai Transcript Model
	 * ***
	 * Note: properties are not displayed in the returned object if they are null
	 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
	 */
	export interface Transcript {
		TranscriptMonologues?: Array<TranscriptMonologues>;
	}

	/**
	 * Rev.ai Transcript Model
	 * ***
	 * Note: properties are not displayed in the returned object if they are null
	 * Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
	 */
	export interface TranscriptFormProperties {
	}
	export function CreateTranscriptFormGroup() {
		return new FormGroup<TranscriptFormProperties>({
		});

	}

	export interface TranscriptMonologues {

		/** Array of transcript elements */
		TranscriptMonologuesElements?: Array<TranscriptMonologuesElements>;

		/**
		 * Id of the speaker of the monologue
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speaker?: number | null;
	}
	export interface TranscriptMonologuesFormProperties {

		/**
		 * Id of the speaker of the monologue
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speaker: FormControl<number | null | undefined>,
	}
	export function CreateTranscriptMonologuesFormGroup() {
		return new FormGroup<TranscriptMonologuesFormProperties>({
			speaker: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TranscriptMonologuesElements {

		/**
		 * Confidence score of the provided value. If the element `type` is `punct` or `unknown`, confidence will be `null`
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;

		/**
		 * The timestamp of the beginning of the element relative to the beginning of the audio in seconds (centisecond precision)
		 * Type: double
		 */
		ts?: number | null;

		/**
		 * The timestamp of the end of the element relative to the beginning of the audio in seconds (centisecond precision)
		 * Type: double
		 */
		ts_end?: number | null;

		/** Type of transcript element. If Rev.ai was unable to determine the spoken word, the `type` will be `unknown`. */
		type?: TranscriptMonologuesElementsType | null;

		/** Value of the transcript element. */
		value?: string | null;
	}
	export interface TranscriptMonologuesElementsFormProperties {

		/**
		 * Confidence score of the provided value. If the element `type` is `punct` or `unknown`, confidence will be `null`
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * The timestamp of the beginning of the element relative to the beginning of the audio in seconds (centisecond precision)
		 * Type: double
		 */
		ts: FormControl<number | null | undefined>,

		/**
		 * The timestamp of the end of the element relative to the beginning of the audio in seconds (centisecond precision)
		 * Type: double
		 */
		ts_end: FormControl<number | null | undefined>,

		/** Type of transcript element. If Rev.ai was unable to determine the spoken word, the `type` will be `unknown`. */
		type: FormControl<TranscriptMonologuesElementsType | null | undefined>,

		/** Value of the transcript element. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptMonologuesElementsFormGroup() {
		return new FormGroup<TranscriptMonologuesElementsFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			ts: new FormControl<number | null | undefined>(undefined),
			ts_end: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<TranscriptMonologuesElementsType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscriptMonologuesElementsType { text = 'text', punct = 'punct', unknown = 'unknown' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Account
		 * Get the developer's account information
		 * Get account
		 * @return {Account} Rev.ai Account
		 */
		GetAccount(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * Get List of Jobs
		 * Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.
		 * Get jobs
		 * @param {number} limit Limits the number of jobs returned, default is 100, max is 1000
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} starting_after If specified, returns transcription jobs submitted before the job with this id, exclusive (job with this id is not included)
		 * @return {Array<Job>} List of Rev.ai Transcription Jobs
		 */
		GetListOfJobs(limit: number | null | undefined, starting_after: string | null | undefined): Observable<Array<Job>> {
			return this.http.get<Array<Job>>(this.baseUri + 'jobs?limit=' + limit + '&starting_after=' + (starting_after == null ? '' : encodeURIComponent(starting_after)), {});
		}

		/**
		 * Submit Transcription Job
		 * Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.
		 * Post jobs
		 * @param {SubmitJobMediaUrlOptions} requestBody Transcription Job Options
		 * @return {Job} Transcription Job Details
		 */
		SubmitTranscriptionJob(requestBody: SubmitJobMediaUrlOptions): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Job by Id
		 * Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).
		 * Delete jobs/{id}
		 * @return {void} 
		 */
		DeleteJobById(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Job By Id
		 * Returns information about a transcription job
		 * Get jobs/{id}
		 * @return {Job} Transcription Job Details
		 */
		GetJobById(): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'jobs/{id}', {});
		}

		/**
		 * Get Captions
		 * Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
		 * Caption output format can be specified in the `Accept` header. Returns SRT by default.
		 * ***
		 * Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.
		 * Get jobs/{id}/captions
		 * @param {number} speaker_channel Identifies which channel of the job output to caption. Default is `null` which works only for jobs with no `speaker_channels_count` provided during job submission.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Rev.ai API Captions
		 * ***
		 * Note: Caption output format is required in the Accept header. The supported headers are `application/x-subrip` and `text/vtt`.
		 * ([SRT](https://en.wikipedia.org/wiki/SubRip))
		 */
		GetCaptions(speaker_channel: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jobs/{id}/captions?speaker_channel=' + speaker_channel, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Transcript By Id
		 * Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
		 * ***
		 * Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.
		 * Get jobs/{id}/transcript
		 * @return {void} Rev.ai API Transcript
		 * ***
		 * Note: Transcript output format is required in the Accept header. Output can either be in Rev's JSON format or plaintext.
		 */
		GetTranscriptById(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jobs/{id}/transcript', { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetCaptionsAccept { 'application/x-subrip' = 'application/x-subrip', 'text/vtt' = 'text/vtt' }

	export enum GetTranscriptByIdAccept { 'application/vnd.rev.transcript.v1.0+json' = 'application/vnd.rev.transcript.v1.0+json', 'text/plain' = 'text/plain' }

}

