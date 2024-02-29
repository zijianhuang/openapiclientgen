import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An achievement configuration resource. */
	export interface AchievementConfiguration {

		/** The type of the achievement. */
		achievementType?: AchievementConfigurationAchievementType | null;

		/** An achievement configuration detail. */
		draft?: AchievementConfigurationDetail;

		/** The ID of the achievement. */
		id?: string | null;

		/** The initial state of the achievement. */
		initialState?: AchievementConfigurationInitialState | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`. */
		kind?: string | null;

		/** An achievement configuration detail. */
		published?: AchievementConfigurationDetail;

		/**
		 * Steps to unlock. Only applicable to incremental achievements.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepsToUnlock?: number | null;

		/** The token for this resource. */
		token?: string | null;
	}

	/** An achievement configuration resource. */
	export interface AchievementConfigurationFormProperties {

		/** The type of the achievement. */
		achievementType: FormControl<AchievementConfigurationAchievementType | null | undefined>,

		/** The ID of the achievement. */
		id: FormControl<string | null | undefined>,

		/** The initial state of the achievement. */
		initialState: FormControl<AchievementConfigurationInitialState | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/**
		 * Steps to unlock. Only applicable to incremental achievements.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stepsToUnlock: FormControl<number | null | undefined>,

		/** The token for this resource. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateAchievementConfigurationFormGroup() {
		return new FormGroup<AchievementConfigurationFormProperties>({
			achievementType: new FormControl<AchievementConfigurationAchievementType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialState: new FormControl<AchievementConfigurationInitialState | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			stepsToUnlock: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AchievementConfigurationAchievementType { ACHIEVEMENT_TYPE_UNSPECIFIED = 'ACHIEVEMENT_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', INCREMENTAL = 'INCREMENTAL' }


	/** An achievement configuration detail. */
	export interface AchievementConfigurationDetail {

		/** A localized string bundle resource. */
		description?: LocalizedStringBundle;

		/** The icon url of this achievement. Writes to this field are ignored. */
		iconUrl?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`. */
		kind?: string | null;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/**
		 * Point value for the achievement.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pointValue?: number | null;

		/**
		 * The sort rank of this achievement. Writes to this field are ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortRank?: number | null;
	}

	/** An achievement configuration detail. */
	export interface AchievementConfigurationDetailFormProperties {

		/** The icon url of this achievement. Writes to this field are ignored. */
		iconUrl: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`. */
		kind: FormControl<string | null | undefined>,

		/**
		 * Point value for the achievement.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pointValue: FormControl<number | null | undefined>,

		/**
		 * The sort rank of this achievement. Writes to this field are ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortRank: FormControl<number | null | undefined>,
	}
	export function CreateAchievementConfigurationDetailFormGroup() {
		return new FormGroup<AchievementConfigurationDetailFormProperties>({
			iconUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pointValue: new FormControl<number | null | undefined>(undefined),
			sortRank: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A localized string bundle resource. */
	export interface LocalizedStringBundle {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`. */
		kind?: string | null;

		/** The locale strings. */
		translations?: Array<LocalizedString>;
	}

	/** A localized string bundle resource. */
	export interface LocalizedStringBundleFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringBundleFormGroup() {
		return new FormGroup<LocalizedStringBundleFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A localized string resource. */
	export interface LocalizedString {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`. */
		kind?: string | null;

		/** The locale string. */
		locale?: string | null;

		/** The string value. */
		value?: string | null;
	}

	/** A localized string resource. */
	export interface LocalizedStringFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`. */
		kind: FormControl<string | null | undefined>,

		/** The locale string. */
		locale: FormControl<string | null | undefined>,

		/** The string value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringFormGroup() {
		return new FormGroup<LocalizedStringFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AchievementConfigurationInitialState { INITIAL_STATE_UNSPECIFIED = 'INITIAL_STATE_UNSPECIFIED', HIDDEN = 'HIDDEN', REVEALED = 'REVEALED' }


	/** A ListConfigurations response. */
	export interface AchievementConfigurationListResponse {

		/** The achievement configurations. */
		items?: Array<AchievementConfiguration>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListConfigurations response. */
	export interface AchievementConfigurationListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAchievementConfigurationListResponseFormGroup() {
		return new FormGroup<AchievementConfigurationListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A number affix resource. */
	export interface GamesNumberAffixConfiguration {

		/** A localized string bundle resource. */
		few?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		many?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		one?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		other?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		two?: LocalizedStringBundle;

		/** A localized string bundle resource. */
		zero?: LocalizedStringBundle;
	}

	/** A number affix resource. */
	export interface GamesNumberAffixConfigurationFormProperties {
	}
	export function CreateGamesNumberAffixConfigurationFormGroup() {
		return new FormGroup<GamesNumberAffixConfigurationFormProperties>({
		});

	}


	/** A number format resource. */
	export interface GamesNumberFormatConfiguration {

		/** The curreny code string. Only used for CURRENCY format type. */
		currencyCode?: string | null;

		/**
		 * The number of decimal places for number. Only used for NUMERIC format type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numDecimalPlaces?: number | null;

		/** The formatting for the number. */
		numberFormatType?: GamesNumberFormatConfigurationNumberFormatType | null;

		/** A number affix resource. */
		suffix?: GamesNumberAffixConfiguration;
	}

	/** A number format resource. */
	export interface GamesNumberFormatConfigurationFormProperties {

		/** The curreny code string. Only used for CURRENCY format type. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * The number of decimal places for number. Only used for NUMERIC format type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numDecimalPlaces: FormControl<number | null | undefined>,

		/** The formatting for the number. */
		numberFormatType: FormControl<GamesNumberFormatConfigurationNumberFormatType | null | undefined>,
	}
	export function CreateGamesNumberFormatConfigurationFormGroup() {
		return new FormGroup<GamesNumberFormatConfigurationFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			numDecimalPlaces: new FormControl<number | null | undefined>(undefined),
			numberFormatType: new FormControl<GamesNumberFormatConfigurationNumberFormatType | null | undefined>(undefined),
		});

	}

	export enum GamesNumberFormatConfigurationNumberFormatType { NUMBER_FORMAT_TYPE_UNSPECIFIED = 'NUMBER_FORMAT_TYPE_UNSPECIFIED', NUMERIC = 'NUMERIC', TIME_DURATION = 'TIME_DURATION', CURRENCY = 'CURRENCY' }


	/** An leaderboard configuration resource. */
	export interface LeaderboardConfiguration {

		/** A leaderboard configuration detail. */
		draft?: LeaderboardConfigurationDetail;

		/** The ID of the leaderboard. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`. */
		kind?: string | null;

		/** A leaderboard configuration detail. */
		published?: LeaderboardConfigurationDetail;

		/** Maximum score that can be posted to this leaderboard. */
		scoreMax?: string | null;

		/** Minimum score that can be posted to this leaderboard. */
		scoreMin?: string | null;
		scoreOrder?: LeaderboardConfigurationScoreOrder | null;

		/** The token for this resource. */
		token?: string | null;
	}

	/** An leaderboard configuration resource. */
	export interface LeaderboardConfigurationFormProperties {

		/** The ID of the leaderboard. */
		id: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** Maximum score that can be posted to this leaderboard. */
		scoreMax: FormControl<string | null | undefined>,

		/** Minimum score that can be posted to this leaderboard. */
		scoreMin: FormControl<string | null | undefined>,
		scoreOrder: FormControl<LeaderboardConfigurationScoreOrder | null | undefined>,

		/** The token for this resource. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardConfigurationFormGroup() {
		return new FormGroup<LeaderboardConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			scoreMax: new FormControl<string | null | undefined>(undefined),
			scoreMin: new FormControl<string | null | undefined>(undefined),
			scoreOrder: new FormControl<LeaderboardConfigurationScoreOrder | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A leaderboard configuration detail. */
	export interface LeaderboardConfigurationDetail {

		/** The icon url of this leaderboard. Writes to this field are ignored. */
		iconUrl?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`. */
		kind?: string | null;

		/** A localized string bundle resource. */
		name?: LocalizedStringBundle;

		/** A number format resource. */
		scoreFormat?: GamesNumberFormatConfiguration;

		/**
		 * The sort rank of this leaderboard. Writes to this field are ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortRank?: number | null;
	}

	/** A leaderboard configuration detail. */
	export interface LeaderboardConfigurationDetailFormProperties {

		/** The icon url of this leaderboard. Writes to this field are ignored. */
		iconUrl: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The sort rank of this leaderboard. Writes to this field are ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sortRank: FormControl<number | null | undefined>,
	}
	export function CreateLeaderboardConfigurationDetailFormGroup() {
		return new FormGroup<LeaderboardConfigurationDetailFormProperties>({
			iconUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			sortRank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LeaderboardConfigurationScoreOrder { SCORE_ORDER_UNSPECIFIED = 'SCORE_ORDER_UNSPECIFIED', LARGER_IS_BETTER = 'LARGER_IS_BETTER', SMALLER_IS_BETTER = 'SMALLER_IS_BETTER' }


	/** A ListConfigurations response. */
	export interface LeaderboardConfigurationListResponse {

		/** The leaderboard configurations. */
		items?: Array<LeaderboardConfiguration>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListConfigurations response. */
	export interface LeaderboardConfigurationListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardConfigurationListResponseFormGroup() {
		return new FormGroup<LeaderboardConfigurationListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete the achievement configuration with the given ID.
		 * Delete games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		GamesConfiguration_achievementConfigurations_delete(achievementId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the achievement configuration with the given ID.
		 * Get games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {AchievementConfiguration} Successful response
		 */
		GamesConfiguration_achievementConfigurations_get(achievementId: string): Observable<AchievementConfiguration> {
			return this.http.get<AchievementConfiguration>(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), {});
		}

		/**
		 * Update the metadata of the achievement configuration with the given ID.
		 * Put games/v1configuration/achievements/{achievementId}
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {AchievementConfiguration} Successful response
		 */
		GamesConfiguration_achievementConfigurations_update(achievementId: string, requestBody: AchievementConfiguration): Observable<AchievementConfiguration> {
			return this.http.put<AchievementConfiguration>(this.baseUri + 'games/v1configuration/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the achievement configurations in this application.
		 * Get games/v1configuration/applications/{applicationId}/achievements
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {number} maxResults The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AchievementConfigurationListResponse} Successful response
		 */
		GamesConfiguration_achievementConfigurations_list(applicationId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AchievementConfigurationListResponse> {
			return this.http.get<AchievementConfigurationListResponse>(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/achievements&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Insert a new achievement configuration in this application.
		 * Post games/v1configuration/applications/{applicationId}/achievements
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {AchievementConfiguration} Successful response
		 */
		GamesConfiguration_achievementConfigurations_insert(applicationId: string, requestBody: AchievementConfiguration): Observable<AchievementConfiguration> {
			return this.http.post<AchievementConfiguration>(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/achievements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the leaderboard configurations in this application.
		 * Get games/v1configuration/applications/{applicationId}/leaderboards
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {number} maxResults The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {LeaderboardConfigurationListResponse} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_list(applicationId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LeaderboardConfigurationListResponse> {
			return this.http.get<LeaderboardConfigurationListResponse>(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/leaderboards&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Insert a new leaderboard configuration in this application.
		 * Post games/v1configuration/applications/{applicationId}/leaderboards
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {LeaderboardConfiguration} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_insert(applicationId: string, requestBody: LeaderboardConfiguration): Observable<LeaderboardConfiguration> {
			return this.http.post<LeaderboardConfiguration>(this.baseUri + 'games/v1configuration/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/leaderboards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the leaderboard configuration with the given ID.
		 * Delete games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {void} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_delete(leaderboardId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the leaderboard configuration with the given ID.
		 * Get games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {LeaderboardConfiguration} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_get(leaderboardId: string): Observable<LeaderboardConfiguration> {
			return this.http.get<LeaderboardConfiguration>(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), {});
		}

		/**
		 * Update the metadata of the leaderboard configuration with the given ID.
		 * Put games/v1configuration/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {LeaderboardConfiguration} Successful response
		 */
		GamesConfiguration_leaderboardConfigurations_update(leaderboardId: string, requestBody: LeaderboardConfiguration): Observable<LeaderboardConfiguration> {
			return this.http.put<LeaderboardConfiguration>(this.baseUri + 'games/v1configuration/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

