import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an answer to a question */
	export interface Answer {

		/** Represents the author of a question or answer */
		author?: Author;

		/** Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching. */
		createTime?: string | null;

		/** Output only. The unique name for the answer locations/questions/answers/* */
		name?: string | null;

		/** Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. */
		text?: string | null;

		/** Output only. The timestamp for when the answer was last modified. */
		updateTime?: string | null;

		/**
		 * Output only. The number of upvotes for the answer.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upvoteCount?: number | null;
	}

	/** Represents an answer to a question */
	export interface AnswerFormProperties {

		/** Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique name for the answer locations/questions/answers/* */
		name: FormControl<string | null | undefined>,

		/** Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. */
		text: FormControl<string | null | undefined>,

		/** Output only. The timestamp for when the answer was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of upvotes for the answer.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upvoteCount: FormControl<number | null | undefined>,
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			upvoteCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the author of a question or answer */
	export interface Author {

		/** The display name of the user */
		displayName?: string | null;

		/** The profile photo URI of the user. */
		profilePhotoUri?: string | null;

		/** The type of user the author is. */
		type?: AuthorType | null;
	}

	/** Represents the author of a question or answer */
	export interface AuthorFormProperties {

		/** The display name of the user */
		displayName: FormControl<string | null | undefined>,

		/** The profile photo URI of the user. */
		profilePhotoUri: FormControl<string | null | undefined>,

		/** The type of user the author is. */
		type: FormControl<AuthorType | null | undefined>,
	}
	export function CreateAuthorFormGroup() {
		return new FormGroup<AuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			profilePhotoUri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AuthorType | null | undefined>(undefined),
		});

	}

	export enum AuthorType { AUTHOR_TYPE_UNSPECIFIED = 'AUTHOR_TYPE_UNSPECIFIED', REGULAR_USER = 'REGULAR_USER', LOCAL_GUIDE = 'LOCAL_GUIDE', MERCHANT = 'MERCHANT' }


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


	/** Response message for QuestionsAndAnswers.ListAnswers */
	export interface ListAnswersResponse {

		/** The requested answers. */
		answers?: Array<Answer>;

		/** If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. */
		nextPageToken?: string | null;

		/**
		 * The total number of answers posted for this question across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize?: number | null;
	}

	/** Response message for QuestionsAndAnswers.ListAnswers */
	export interface ListAnswersResponseFormProperties {

		/** If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * The total number of answers posted for this question across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListAnswersResponseFormGroup() {
		return new FormGroup<ListAnswersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for QuestionsAndAnswers.ListQuestions */
	export interface ListQuestionsResponse {

		/** If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The requested questions, */
		questions?: Array<Question>;

		/**
		 * The total number of questions posted for this location across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize?: number | null;
	}

	/** Response message for QuestionsAndAnswers.ListQuestions */
	export interface ListQuestionsResponseFormProperties {

		/** If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * The total number of questions posted for this location across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListQuestionsResponseFormGroup() {
		return new FormGroup<ListQuestionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a single question and some of its answers. */
	export interface Question {

		/** Represents the author of a question or answer */
		author?: Author;

		/** Output only. The timestamp for when the question was written. */
		createTime?: string | null;

		/** Immutable. The unique name for the question. locations/questions/* This field will be ignored if set during question creation. */
		name?: string | null;

		/** Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. */
		text?: string | null;

		/** Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question) */
		topAnswers?: Array<Answer>;

		/**
		 * Output only. The total number of answers posted for this question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalAnswerCount?: number | null;

		/** Output only. The timestamp for when the question was last modified. */
		updateTime?: string | null;

		/**
		 * Output only. The number of upvotes for the question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upvoteCount?: number | null;
	}

	/** Represents a single question and some of its answers. */
	export interface QuestionFormProperties {

		/** Output only. The timestamp for when the question was written. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The unique name for the question. locations/questions/* This field will be ignored if set during question creation. */
		name: FormControl<string | null | undefined>,

		/** Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. */
		text: FormControl<string | null | undefined>,

		/**
		 * Output only. The total number of answers posted for this question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalAnswerCount: FormControl<number | null | undefined>,

		/** Output only. The timestamp for when the question was last modified. */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of upvotes for the question.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upvoteCount: FormControl<number | null | undefined>,
	}
	export function CreateQuestionFormGroup() {
		return new FormGroup<QuestionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			totalAnswerCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			upvoteCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for QuestionsAndAnswers.UpsertAnswer */
	export interface UpsertAnswerRequest {

		/** Represents an answer to a question */
		answer?: Answer;
	}

	/** Request message for QuestionsAndAnswers.UpsertAnswer */
	export interface UpsertAnswerRequestFormProperties {
	}
	export function CreateUpsertAnswerRequestFormGroup() {
		return new FormGroup<UpsertAnswerRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a specific question written by the current user.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the question to delete.
		 * @return {Empty} Successful response
		 */
		Mybusinessqanda_locations_questions_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a specific question written by the current user.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The unique name for the question. locations/questions/* This field will be ignored if set during question creation.
		 * @param {string} updateMask Required. The specific fields to update. Only question text can be updated.
		 * @return {Question} Successful response
		 */
		Mybusinessqanda_locations_questions_patch(name: string, updateMask: string | null | undefined, requestBody: Question): Observable<Question> {
			return this.http.patch<Question>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the answer written by the current user to a question.
		 * Delete v1/{name}/answers:delete
		 * @param {string} name Required. The name of the question to delete an answer for.
		 * @return {Empty} Successful response
		 */
		Mybusinessqanda_locations_questions_answers_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/answers:delete', {});
		}

		/**
		 * Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.
		 * Get v1/{parent}
		 * @param {string} parent Required. The name of the location to fetch questions for.
		 * @param {number} answersPerQuestion Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"
		 * @param {string} orderBy Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.
		 * @param {number} pageSize Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If specified, the next page of questions is retrieved.
		 * @return {ListQuestionsResponse} Successful response
		 */
		Mybusinessqanda_locations_questions_list(parent: string, answersPerQuestion: number | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListQuestionsResponse> {
			return this.http.get<ListQuestionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '&answersPerQuestion=' + answersPerQuestion + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a question for the specified location.
		 * Post v1/{parent}
		 * @param {string} parent Required. The name of the location to write a question for.
		 * @return {Question} Successful response
		 */
		Mybusinessqanda_locations_questions_create(parent: string, requestBody: Question): Observable<Question> {
			return this.http.post<Question>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the paginated list of answers for a specified question.
		 * Get v1/{parent}/answers
		 * @param {string} parent Required. The name of the question to fetch answers for.
		 * @param {string} orderBy Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.
		 * @param {number} pageSize Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If specified, the next page of answers is retrieved.
		 * @return {ListAnswersResponse} Successful response
		 */
		Mybusinessqanda_locations_questions_answers_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAnswersResponse> {
			return this.http.get<ListAnswersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/answers&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
		 * Post v1/{parent}/answers:upsert
		 * @param {string} parent Required. The name of the question to write an answer for.
		 * @return {Answer} Successful response
		 */
		Mybusinessqanda_locations_questions_answers_upsert(parent: string, requestBody: UpsertAnswerRequest): Observable<Answer> {
			return this.http.post<Answer>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/answers:upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

