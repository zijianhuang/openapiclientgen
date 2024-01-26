import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Achievement reset all response. */
	export interface AchievementResetAllResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`. */
		kind?: string | null;

		/** The achievement reset results. */
		results?: Array<AchievementResetResponse>;
	}

	/** Achievement reset all response. */
	export interface AchievementResetAllResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAchievementResetAllResponseFormGroup() {
		return new FormGroup<AchievementResetAllResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An achievement reset response. */
	export interface AchievementResetResponse {

		/** The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. */
		currentState?: string | null;

		/** The ID of an achievement for which player state has been updated. */
		definitionId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`. */
		kind?: string | null;

		/** Flag to indicate if the requested update actually occurred. */
		updateOccurred?: boolean | null;
	}

	/** An achievement reset response. */
	export interface AchievementResetResponseFormProperties {

		/** The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. */
		currentState: FormControl<string | null | undefined>,

		/** The ID of an achievement for which player state has been updated. */
		definitionId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Flag to indicate if the requested update actually occurred. */
		updateOccurred: FormControl<boolean | null | undefined>,
	}
	export function CreateAchievementResetResponseFormGroup() {
		return new FormGroup<AchievementResetResponseFormProperties>({
			currentState: new FormControl<string | null | undefined>(undefined),
			definitionId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updateOccurred: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AchievementResetMultipleForAllRequest {

		/** The IDs of achievements to reset. */
		achievement_ids?: Array<string>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`. */
		kind?: string | null;
	}
	export interface AchievementResetMultipleForAllRequestFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAchievementResetMultipleForAllRequestFormGroup() {
		return new FormGroup<AchievementResetMultipleForAllRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Multiple events reset all request. */
	export interface EventsResetMultipleForAllRequest {

		/** The IDs of events to reset. */
		event_ids?: Array<string>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`. */
		kind?: string | null;
	}

	/** Multiple events reset all request. */
	export interface EventsResetMultipleForAllRequestFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventsResetMultipleForAllRequestFormGroup() {
		return new FormGroup<EventsResetMultipleForAllRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** 1P/3P metadata about the player's experience. */
	export interface GamesPlayerExperienceInfoResource {

		/** The current number of experience points for the player. */
		currentExperiencePoints?: string | null;

		/** 1P/3P metadata about a user's level. */
		currentLevel?: GamesPlayerLevelResource;

		/** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
		lastLevelUpTimestampMillis?: string | null;

		/** 1P/3P metadata about a user's level. */
		nextLevel?: GamesPlayerLevelResource;
	}

	/** 1P/3P metadata about the player's experience. */
	export interface GamesPlayerExperienceInfoResourceFormProperties {

		/** The current number of experience points for the player. */
		currentExperiencePoints: FormControl<string | null | undefined>,

		/** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
		lastLevelUpTimestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateGamesPlayerExperienceInfoResourceFormGroup() {
		return new FormGroup<GamesPlayerExperienceInfoResourceFormProperties>({
			currentExperiencePoints: new FormControl<string | null | undefined>(undefined),
			lastLevelUpTimestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** 1P/3P metadata about a user's level. */
	export interface GamesPlayerLevelResource {

		/** The level for the user. */
		level?: number | null;

		/** The maximum experience points for this level. */
		maxExperiencePoints?: string | null;

		/** The minimum experience points for this level. */
		minExperiencePoints?: string | null;
	}

	/** 1P/3P metadata about a user's level. */
	export interface GamesPlayerLevelResourceFormProperties {

		/** The level for the user. */
		level: FormControl<number | null | undefined>,

		/** The maximum experience points for this level. */
		maxExperiencePoints: FormControl<string | null | undefined>,

		/** The minimum experience points for this level. */
		minExperiencePoints: FormControl<string | null | undefined>,
	}
	export function CreateGamesPlayerLevelResourceFormGroup() {
		return new FormGroup<GamesPlayerLevelResourceFormProperties>({
			level: new FormControl<number | null | undefined>(undefined),
			maxExperiencePoints: new FormControl<string | null | undefined>(undefined),
			minExperiencePoints: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HiddenPlayer resource. */
	export interface HiddenPlayer {

		/** Output only. The time this player was hidden. */
		hiddenTimeMillis?: string | null;

		/** Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`. */
		kind?: string | null;

		/** A Player resource. */
		player?: Player;
	}

	/** The HiddenPlayer resource. */
	export interface HiddenPlayerFormProperties {

		/** Output only. The time this player was hidden. */
		hiddenTimeMillis: FormControl<string | null | undefined>,

		/** Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateHiddenPlayerFormGroup() {
		return new FormGroup<HiddenPlayerFormProperties>({
			hiddenTimeMillis: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Player resource. */
	export interface Player {

		/** The base URL for the image that represents the player. */
		avatarImageUrl?: string | null;

		/** The url to the landscape mode player banner image. */
		bannerUrlLandscape?: string | null;

		/** The url to the portrait mode player banner image. */
		bannerUrlPortrait?: string | null;

		/** The name to display for the player. */
		displayName?: string | null;

		/** 1P/3P metadata about the player's experience. */
		experienceInfo?: GamesPlayerExperienceInfoResource;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`. */
		kind?: string | null;

		/** An object representation of the individual components of the player's name. For some players, these fields may not be present. */
		name?: PlayerName;

		/** The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs. */
		originalPlayerId?: string | null;

		/** The ID of the player. */
		playerId?: string | null;

		/** Profile settings */
		profileSettings?: ProfileSettings;

		/** The player's title rewarded for their game activities. */
		title?: string | null;
	}

	/** A Player resource. */
	export interface PlayerFormProperties {

		/** The base URL for the image that represents the player. */
		avatarImageUrl: FormControl<string | null | undefined>,

		/** The url to the landscape mode player banner image. */
		bannerUrlLandscape: FormControl<string | null | undefined>,

		/** The url to the portrait mode player banner image. */
		bannerUrlPortrait: FormControl<string | null | undefined>,

		/** The name to display for the player. */
		displayName: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`. */
		kind: FormControl<string | null | undefined>,

		/** The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs. */
		originalPlayerId: FormControl<string | null | undefined>,

		/** The ID of the player. */
		playerId: FormControl<string | null | undefined>,

		/** The player's title rewarded for their game activities. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			avatarImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerUrlLandscape: new FormControl<string | null | undefined>(undefined),
			bannerUrlPortrait: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			originalPlayerId: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerName {

		/** The family name of this player. In some places, this is known as the last name. */
		familyName?: string | null;

		/** The given name of this player. In some places, this is known as the first name. */
		givenName?: string | null;
	}
	export interface PlayerNameFormProperties {

		/** The family name of this player. In some places, this is known as the last name. */
		familyName: FormControl<string | null | undefined>,

		/** The given name of this player. In some places, this is known as the first name. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreatePlayerNameFormGroup() {
		return new FormGroup<PlayerNameFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Profile settings */
	export interface ProfileSettings {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`. */
		kind?: string | null;
		profileVisible?: boolean | null;
	}

	/** Profile settings */
	export interface ProfileSettingsFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`. */
		kind: FormControl<string | null | undefined>,
		profileVisible: FormControl<boolean | null | undefined>,
	}
	export function CreateProfileSettingsFormGroup() {
		return new FormGroup<ProfileSettingsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			profileVisible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of hidden players. */
	export interface HiddenPlayerList {

		/** The players. */
		items?: Array<HiddenPlayer>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of hidden players. */
	export interface HiddenPlayerListFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateHiddenPlayerListFormGroup() {
		return new FormGroup<HiddenPlayerListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of leaderboard reset resources. */
	export interface PlayerScoreResetAllResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`. */
		kind?: string | null;

		/** The leaderboard reset results. */
		results?: Array<PlayerScoreResetResponse>;
	}

	/** A list of leaderboard reset resources. */
	export interface PlayerScoreResetAllResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlayerScoreResetAllResponseFormGroup() {
		return new FormGroup<PlayerScoreResetAllResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of reset leaderboard entry resources. */
	export interface PlayerScoreResetResponse {

		/** The ID of an leaderboard for which player state has been updated. */
		definitionId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`. */
		kind?: string | null;

		/** The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score. */
		resetScoreTimeSpans?: Array<string>;
	}

	/** A list of reset leaderboard entry resources. */
	export interface PlayerScoreResetResponseFormProperties {

		/** The ID of an leaderboard for which player state has been updated. */
		definitionId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlayerScoreResetResponseFormGroup() {
		return new FormGroup<PlayerScoreResetResponseFormProperties>({
			definitionId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoresResetMultipleForAllRequest {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`. */
		kind?: string | null;

		/** The IDs of leaderboards to reset. */
		leaderboard_ids?: Array<string>;
	}
	export interface ScoresResetMultipleForAllRequestFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateScoresResetMultipleForAllRequestFormGroup() {
		return new FormGroup<ScoresResetMultipleForAllRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/achievements/reset
		 * @return {AchievementResetAllResponse} Successful response
		 */
		GamesManagement_achievements_resetAll(): Observable<AchievementResetAllResponse> {
			return this.http.post<AchievementResetAllResponse>(this.baseUri + 'games/v1management/achievements/reset', null, {});
		}

		/**
		 * Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
		 * Post games/v1management/achievements/resetAllForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_achievements_resetAllForAllPlayers(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/achievements/resetAllForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
		 * Post games/v1management/achievements/resetMultipleForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_achievements_resetMultipleForAllPlayers(requestBody: AchievementResetMultipleForAllRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/achievements/resetMultipleForAllPlayers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/achievements/{achievementId}/reset
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {AchievementResetResponse} Successful response
		 */
		GamesManagement_achievements_reset(achievementId: string): Observable<AchievementResetResponse> {
			return this.http.post<AchievementResetResponse>(this.baseUri + 'games/v1management/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/reset', null, {});
		}

		/**
		 * Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
		 * Post games/v1management/achievements/{achievementId}/resetForAllPlayers
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		GamesManagement_achievements_resetForAllPlayers(achievementId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/resetForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
		 * Get games/v1management/applications/{applicationId}/players/hidden
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {number} maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {HiddenPlayerList} Successful response
		 */
		GamesManagement_applications_listHidden(applicationId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HiddenPlayerList> {
			return this.http.get<HiddenPlayerList>(this.baseUri + 'games/v1management/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/players/hidden&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
		 * Delete games/v1management/applications/{applicationId}/players/hidden/{playerId}
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @return {void} Successful response
		 */
		GamesManagement_players_unhide(applicationId: string, playerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'games/v1management/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/players/hidden/' + (playerId == null ? '' : encodeURIComponent(playerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
		 * Post games/v1management/applications/{applicationId}/players/hidden/{playerId}
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @return {void} Successful response
		 */
		GamesManagement_players_hide(applicationId: string, playerId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/players/hidden/' + (playerId == null ? '' : encodeURIComponent(playerId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/events/reset
		 * @return {void} Successful response
		 */
		GamesManagement_events_resetAll(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/events/reset', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets all draft events for all players. This method is only available to user accounts for your developer console.
		 * Post games/v1management/events/resetAllForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_events_resetAllForAllPlayers(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/events/resetAllForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
		 * Post games/v1management/events/resetMultipleForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_events_resetMultipleForAllPlayers(requestBody: EventsResetMultipleForAllRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/events/resetMultipleForAllPlayers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/events/{eventId}/reset
		 * @param {string} eventId The ID of the event.
		 * @return {void} Successful response
		 */
		GamesManagement_events_reset(eventId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/reset', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
		 * Post games/v1management/events/{eventId}/resetForAllPlayers
		 * @param {string} eventId The ID of the event.
		 * @return {void} Successful response
		 */
		GamesManagement_events_resetForAllPlayers(eventId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/resetForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/leaderboards/{leaderboardId}/scores/reset
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {PlayerScoreResetResponse} Successful response
		 */
		GamesManagement_scores_reset(leaderboardId: string): Observable<PlayerScoreResetResponse> {
			return this.http.post<PlayerScoreResetResponse>(this.baseUri + 'games/v1management/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/reset', null, {});
		}

		/**
		 * Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
		 * Post games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @return {void} Successful response
		 */
		GamesManagement_scores_resetForAllPlayers(leaderboardId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/resetForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
		 * Post games/v1management/scores/reset
		 * @return {PlayerScoreResetAllResponse} Successful response
		 */
		GamesManagement_scores_resetAll(): Observable<PlayerScoreResetAllResponse> {
			return this.http.post<PlayerScoreResetAllResponse>(this.baseUri + 'games/v1management/scores/reset', null, {});
		}

		/**
		 * Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
		 * Post games/v1management/scores/resetAllForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_scores_resetAllForAllPlayers(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/scores/resetAllForAllPlayers', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
		 * Post games/v1management/scores/resetMultipleForAllPlayers
		 * @return {void} Successful response
		 */
		GamesManagement_scores_resetMultipleForAllPlayers(requestBody: ScoresResetMultipleForAllRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1management/scores/resetMultipleForAllPlayers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

