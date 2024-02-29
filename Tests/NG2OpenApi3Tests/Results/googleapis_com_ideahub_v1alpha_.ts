import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents locales that are available for a web property. */
	export interface GoogleSearchIdeahubV1alphaAvailableLocale {

		/** A string in BCP 47 format, without a resource prefix. */
		locale?: string | null;

		/** A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform}/properties/{property}/locales/{locale} */
		name?: string | null;
	}

	/** Represents locales that are available for a web property. */
	export interface GoogleSearchIdeahubV1alphaAvailableLocaleFormProperties {

		/** A string in BCP 47 format, without a resource prefix. */
		locale: FormControl<string | null | undefined>,

		/** A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform}/properties/{property}/locales/{locale} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaAvailableLocaleFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaAvailableLocaleFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single Idea that we want to show the end user. */
	export interface GoogleSearchIdeahubV1alphaIdea {

		/** Unique identifier for the idea. Format: ideas/{ideaId} */
		name?: string | null;

		/** The idea’s text. */
		text?: string | null;

		/** The Topics that match the idea. */
		topics?: Array<GoogleSearchIdeahubV1alphaTopic>;
	}

	/** A single Idea that we want to show the end user. */
	export interface GoogleSearchIdeahubV1alphaIdeaFormProperties {

		/** Unique identifier for the idea. Format: ideas/{ideaId} */
		name: FormControl<string | null | undefined>,

		/** The idea’s text. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaIdeaFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaIdeaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Topic umbrella for a list of questions that a Creator may want to respond to. */
	export interface GoogleSearchIdeahubV1alphaTopic {

		/** String displayed to the creator indicating the name of the Topic. */
		displayName?: string | null;

		/** The mID of the topic. */
		mid?: string | null;

		/** Unique identifier for the topic. Format: topics/{topic} */
		name?: string | null;
	}

	/** Represents a Topic umbrella for a list of questions that a Creator may want to respond to. */
	export interface GoogleSearchIdeahubV1alphaTopicFormProperties {

		/** String displayed to the creator indicating the name of the Topic. */
		displayName: FormControl<string | null | undefined>,

		/** The mID of the topic. */
		mid: FormControl<string | null | undefined>,

		/** Unique identifier for the topic. Format: topics/{topic} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaTopicFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaTopicFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An idea activity entry. */
	export interface GoogleSearchIdeahubV1alphaIdeaActivity {

		/** The Idea IDs for this entry. If empty, topics should be set. */
		ideas?: Array<string>;

		/** Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity} */
		name?: string | null;

		/** The Topic IDs for this entry. If empty, ideas should be set. */
		topics?: Array<string>;

		/** The type of activity performed. */
		type?: GoogleSearchIdeahubV1alphaIdeaActivityType | null;

		/** The uri the activity relates to. */
		uri?: string | null;
	}

	/** An idea activity entry. */
	export interface GoogleSearchIdeahubV1alphaIdeaActivityFormProperties {

		/** Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity} */
		name: FormControl<string | null | undefined>,

		/** The type of activity performed. */
		type: FormControl<GoogleSearchIdeahubV1alphaIdeaActivityType | null | undefined>,

		/** The uri the activity relates to. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaIdeaActivityFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaIdeaActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleSearchIdeahubV1alphaIdeaActivityType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleSearchIdeahubV1alphaIdeaActivityType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', POST_DRAFTED = 'POST_DRAFTED', POST_PUBLISHED = 'POST_PUBLISHED', POST_DELETED = 'POST_DELETED', POST_UNPUBLISHED = 'POST_UNPUBLISHED' }


	/** Represents idea state specific to a web property. */
	export interface GoogleSearchIdeahubV1alphaIdeaState {

		/** Whether the idea is dismissed. */
		dismissed?: boolean | null;

		/** Unique identifier for the idea state. Format: platforms/{platform}/properties/{property}/ideaStates/{idea_state} */
		name?: string | null;

		/** Whether the idea is saved. */
		saved?: boolean | null;
	}

	/** Represents idea state specific to a web property. */
	export interface GoogleSearchIdeahubV1alphaIdeaStateFormProperties {

		/** Whether the idea is dismissed. */
		dismissed: FormControl<boolean | null | undefined>,

		/** Unique identifier for the idea state. Format: platforms/{platform}/properties/{property}/ideaStates/{idea_state} */
		name: FormControl<string | null | undefined>,

		/** Whether the idea is saved. */
		saved: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaIdeaStateFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaIdeaStateFormProperties>({
			dismissed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			saved: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for whether ideas are available for a given web property on a platform, for the currently logged-in user. */
	export interface GoogleSearchIdeahubV1alphaListAvailableLocalesResponse {

		/** Locales for which ideas are available for the given Creator. */
		availableLocales?: Array<GoogleSearchIdeahubV1alphaAvailableLocale>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for whether ideas are available for a given web property on a platform, for the currently logged-in user. */
	export interface GoogleSearchIdeahubV1alphaListAvailableLocalesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaListAvailableLocalesResponseFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaListAvailableLocalesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleSearchIdeahubV1alphaListIdeasResponse {

		/** Results for the ListIdeasRequest. */
		ideas?: Array<GoogleSearchIdeahubV1alphaIdea>;

		/** Used to fetch the next page in a subsequent request. */
		nextPageToken?: string | null;
	}
	export interface GoogleSearchIdeahubV1alphaListIdeasResponseFormProperties {

		/** Used to fetch the next page in a subsequent request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaListIdeasResponseFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaListIdeasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents topic state specific to a web property. */
	export interface GoogleSearchIdeahubV1alphaTopicState {

		/** Whether the topic is dismissed. */
		dismissed?: boolean | null;

		/** Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state} */
		name?: string | null;

		/** Whether the topic is saved. */
		saved?: boolean | null;
	}

	/** Represents topic state specific to a web property. */
	export interface GoogleSearchIdeahubV1alphaTopicStateFormProperties {

		/** Whether the topic is dismissed. */
		dismissed: FormControl<boolean | null | undefined>,

		/** Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state} */
		name: FormControl<string | null | undefined>,

		/** Whether the topic is saved. */
		saved: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleSearchIdeahubV1alphaTopicStateFormGroup() {
		return new FormGroup<GoogleSearchIdeahubV1alphaTopicStateFormProperties>({
			dismissed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			saved: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List ideas for a given Creator and filter and sort options.
		 * Get v1alpha/ideas
		 * @param {string} filter Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
		 * @param {string} orderBy Order semantics described below.
		 * @param {number} pageSize The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Used to fetch next page.
		 * @param {string} parent If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}
		 * @return {GoogleSearchIdeahubV1alphaListIdeasResponse} Successful response
		 */
		Ideahub_ideas_list(filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<GoogleSearchIdeahubV1alphaListIdeasResponse> {
			return this.http.get<GoogleSearchIdeahubV1alphaListIdeasResponse>(this.baseUri + 'v1alpha/ideas?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Update a topic state resource.
		 * Patch v1alpha/{name}
		 * @param {string} name Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {GoogleSearchIdeahubV1alphaTopicState} Successful response
		 */
		Ideahub_platforms_properties_topicStates_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleSearchIdeahubV1alphaTopicState): Observable<GoogleSearchIdeahubV1alphaTopicState> {
			return this.http.patch<GoogleSearchIdeahubV1alphaTopicState>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an idea activity entry.
		 * Post v1alpha/{parent}/ideaActivities
		 * @param {string} parent Required. The parent resource where this idea activity will be created. Format: platforms/{platform}/property/{property}
		 * @return {GoogleSearchIdeahubV1alphaIdeaActivity} Successful response
		 */
		Ideahub_platforms_properties_ideaActivities_create(parent: string, requestBody: GoogleSearchIdeahubV1alphaIdeaActivity): Observable<GoogleSearchIdeahubV1alphaIdeaActivity> {
			return this.http.post<GoogleSearchIdeahubV1alphaIdeaActivity>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/ideaActivities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List ideas for a given Creator and filter and sort options.
		 * Get v1alpha/{parent}/ideas
		 * @param {string} parent If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}
		 * @param {string} filter Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.
		 * @param {string} orderBy Order semantics described below.
		 * @param {number} pageSize The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Used to fetch next page.
		 * @return {GoogleSearchIdeahubV1alphaListIdeasResponse} Successful response
		 */
		Ideahub_platforms_properties_ideas_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleSearchIdeahubV1alphaListIdeasResponse> {
			return this.http.get<GoogleSearchIdeahubV1alphaListIdeasResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/ideas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns which locales ideas are available in for a given Creator.
		 * Get v1alpha/{parent}/locales
		 * @param {string} parent Required. The web property to check idea availability for Format: platforms/{platform}/property/{property}
		 * @param {number} pageSize The maximum number of locales to return. The service may return fewer than this value. If unspecified, at most 100 locales will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAvailableLocales` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAvailableLocales` must match the call that provided the page token.
		 * @return {GoogleSearchIdeahubV1alphaListAvailableLocalesResponse} Successful response
		 */
		Ideahub_platforms_properties_locales_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleSearchIdeahubV1alphaListAvailableLocalesResponse> {
			return this.http.get<GoogleSearchIdeahubV1alphaListAvailableLocalesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locales&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

