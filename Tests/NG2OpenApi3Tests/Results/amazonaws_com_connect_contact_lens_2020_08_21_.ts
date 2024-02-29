import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ListRealtimeContactAnalysisSegmentsResponse {

		/** Required */
		Segments: Array<RealtimeContactAnalysisSegment>;
		NextToken?: string;
	}
	export interface ListRealtimeContactAnalysisSegmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRealtimeContactAnalysisSegmentsResponseFormGroup() {
		return new FormGroup<ListRealtimeContactAnalysisSegmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An analyzed segment for a real-time analysis session. */
	export interface RealtimeContactAnalysisSegment {
		Transcript?: Transcript;
		Categories?: Categories;
	}

	/** An analyzed segment for a real-time analysis session. */
	export interface RealtimeContactAnalysisSegmentFormProperties {
	}
	export function CreateRealtimeContactAnalysisSegmentFormGroup() {
		return new FormGroup<RealtimeContactAnalysisSegmentFormProperties>({
		});

	}


	/** A list of messages in the session. */
	export interface Transcript {

		/** Required */
		Id: string;

		/** Required */
		ParticipantId: string;

		/** Required */
		ParticipantRole: string;

		/** Required */
		Content: string;

		/** Required */
		BeginOffsetMillis: number;

		/** Required */
		EndOffsetMillis: number;

		/** Required */
		Sentiment: SentimentValue;
		IssuesDetected?: Array<IssueDetected>;
	}

	/** A list of messages in the session. */
	export interface TranscriptFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ParticipantId: FormControl<string | null | undefined>,

		/** Required */
		ParticipantRole: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		BeginOffsetMillis: FormControl<number | null | undefined>,

		/** Required */
		EndOffsetMillis: FormControl<number | null | undefined>,

		/** Required */
		Sentiment: FormControl<SentimentValue | null | undefined>,
	}
	export function CreateTranscriptFormGroup() {
		return new FormGroup<TranscriptFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParticipantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParticipantRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BeginOffsetMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndOffsetMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sentiment: new FormControl<SentimentValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SentimentValue { POSITIVE = 'POSITIVE', NEUTRAL = 'NEUTRAL', NEGATIVE = 'NEGATIVE' }


	/** Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation. */
	export interface IssueDetected {

		/** Required */
		CharacterOffsets: CharacterOffsets;
	}

	/** Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation. */
	export interface IssueDetectedFormProperties {
	}
	export function CreateIssueDetectedFormGroup() {
		return new FormGroup<IssueDetectedFormProperties>({
		});

	}


	/** For characters that were detected as issues, where they occur in the transcript. */
	export interface CharacterOffsets {

		/** Required */
		BeginOffsetChar: number;

		/** Required */
		EndOffsetChar: number;
	}

	/** For characters that were detected as issues, where they occur in the transcript. */
	export interface CharacterOffsetsFormProperties {

		/** Required */
		BeginOffsetChar: FormControl<number | null | undefined>,

		/** Required */
		EndOffsetChar: FormControl<number | null | undefined>,
	}
	export function CreateCharacterOffsetsFormGroup() {
		return new FormGroup<CharacterOffsetsFormProperties>({
			BeginOffsetChar: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndOffsetChar: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases. */
	export interface Categories {

		/** Required */
		MatchedCategories: Array<string>;

		/** Required */
		MatchedDetails: MatchedDetails;
	}

	/** Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases. */
	export interface CategoriesFormProperties {
	}
	export function CreateCategoriesFormGroup() {
		return new FormGroup<CategoriesFormProperties>({
		});

	}

	export interface MatchedDetails {
	}
	export interface MatchedDetailsFormProperties {
	}
	export function CreateMatchedDetailsFormGroup() {
		return new FormGroup<MatchedDetailsFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}


	/** The section of the contact audio where that category rule was detected. */
	export interface PointOfInterest {

		/** Required */
		BeginOffsetMillis: number;

		/** Required */
		EndOffsetMillis: number;
	}

	/** The section of the contact audio where that category rule was detected. */
	export interface PointOfInterestFormProperties {

		/** Required */
		BeginOffsetMillis: FormControl<number | null | undefined>,

		/** Required */
		EndOffsetMillis: FormControl<number | null | undefined>,
	}
	export function CreatePointOfInterestFormGroup() {
		return new FormGroup<PointOfInterestFormProperties>({
			BeginOffsetMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndOffsetMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the category rule that was matched. */
	export interface CategoryDetails {

		/** Required */
		PointsOfInterest: Array<PointOfInterest>;
	}

	/** Provides information about the category rule that was matched. */
	export interface CategoryDetailsFormProperties {
	}
	export function CreateCategoryDetailsFormGroup() {
		return new FormGroup<CategoryDetailsFormProperties>({
		});

	}

	export interface ListRealtimeContactAnalysisSegmentsRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		ContactId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListRealtimeContactAnalysisSegmentsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRealtimeContactAnalysisSegmentsRequestFormGroup() {
		return new FormGroup<ListRealtimeContactAnalysisSegmentsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Provides a list of analysis segments for a real-time analysis session.
		 * Post realtime-contact-analysis/analysis-segments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRealtimeContactAnalysisSegmentsResponse} Success
		 */
		ListRealtimeContactAnalysisSegments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRealtimeContactAnalysisSegmentsPostBody): Observable<ListRealtimeContactAnalysisSegmentsResponse> {
			return this.http.post<ListRealtimeContactAnalysisSegmentsResponse>(this.baseUri + 'realtime-contact-analysis/analysis-segments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ListRealtimeContactAnalysisSegmentsPostBody {

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ContactId: string;

		/**
		 * The maximimum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 131070
		 */
		NextToken?: string | null;
	}
	export interface ListRealtimeContactAnalysisSegmentsPostBodyFormProperties {

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the contact.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The maximimum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * Min length: 1
		 * Max length: 131070
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRealtimeContactAnalysisSegmentsPostBodyFormGroup() {
		return new FormGroup<ListRealtimeContactAnalysisSegmentsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131070), Validators.pattern('.*\S.*')]),
		});

	}

}

