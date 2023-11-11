import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** This is a JSON template for an achievement definition object. */
	export interface AchievementDefinition {

		/**
		 * The type of the achievement.
		 * Possible values are:
		 * - "STANDARD" - Achievement is either locked or unlocked.
		 * - "INCREMENTAL" - Achievement is incremental.
		 */
		achievementType?: string | null;

		/** The description of the achievement. */
		description?: string | null;

		/** Experience points which will be earned when unlocking this achievement. */
		experiencePoints?: string | null;

		/** The total steps for an incremental achievement as a string. */
		formattedTotalSteps?: string | null;

		/** The ID of the achievement. */
		id?: string | null;

		/**
		 * The initial state of the achievement.
		 * Possible values are:
		 * - "HIDDEN" - Achievement is hidden.
		 * - "REVEALED" - Achievement is revealed.
		 * - "UNLOCKED" - Achievement is unlocked.
		 */
		initialState?: string | null;

		/** Indicates whether the revealed icon image being returned is a default image, or is provided by the game. */
		isRevealedIconUrlDefault?: boolean | null;

		/** Indicates whether the unlocked icon image being returned is a default image, or is game-provided. */
		isUnlockedIconUrlDefault?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition. */
		kind?: string | null;

		/** The name of the achievement. */
		name?: string | null;

		/** The image URL for the revealed achievement icon. */
		revealedIconUrl?: string | null;

		/** The total steps for an incremental achievement. */
		totalSteps?: number | null;

		/** The image URL for the unlocked achievement icon. */
		unlockedIconUrl?: string | null;
	}


	/** This is a JSON template for a list of achievement definition objects. */
	export interface AchievementDefinitionsListResponse {

		/** The achievement definitions. */
		items?: Array<AchievementDefinition> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for an achievement increment response */
	export interface AchievementIncrementResponse {

		/** The current steps recorded for this incremental achievement. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementIncrementResponse. */
		kind?: string | null;

		/** Whether the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked?: boolean | null;
	}


	/** This is a JSON template for an achievement reveal response */
	export interface AchievementRevealResponse {

		/**
		 * The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked.
		 * Possible values are:
		 * - "REVEALED" - Achievement is revealed.
		 * - "UNLOCKED" - Achievement is unlocked.
		 */
		currentState?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse. */
		kind?: string | null;
	}


	/** This is a JSON template for an achievement set steps at least response. */
	export interface AchievementSetStepsAtLeastResponse {

		/** The current steps recorded for this incremental achievement. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse. */
		kind?: string | null;

		/** Whether the the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked?: boolean | null;
	}


	/** This is a JSON template for an achievement unlock response */
	export interface AchievementUnlockResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUnlockResponse. */
		kind?: string | null;

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked?: boolean | null;
	}


	/** This is a JSON template for a list of achievement update requests. */
	export interface AchievementUpdateMultipleRequest {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateMultipleRequest. */
		kind?: string | null;

		/** The individual achievement update requests. */
		updates?: Array<AchievementUpdateRequest> | null;
	}


	/** This is a JSON template for a request to update an achievement. */
	export interface AchievementUpdateRequest {

		/** The achievement this update is being applied to. */
		achievementId?: string | null;

		/** This is a JSON template for the payload to request to increment an achievement. */
		incrementPayload?: GamesAchievementIncrement | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateRequest. */
		kind?: string | null;

		/** This is a JSON template for the payload to request to increment an achievement. */
		setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast | null;

		/**
		 * The type of update being applied.
		 * Possible values are:
		 * - "REVEAL" - Achievement is revealed.
		 * - "UNLOCK" - Achievement is unlocked.
		 * - "INCREMENT" - Achievement is incremented.
		 * - "SET_STEPS_AT_LEAST" - Achievement progress is set to at least the passed value.
		 */
		updateType?: string | null;
	}


	/** This is a JSON template for the payload to request to increment an achievement. */
	export interface GamesAchievementIncrement {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementIncrement. */
		kind?: string | null;

		/** The requestId associated with an increment to an achievement. */
		requestId?: string | null;

		/** The number of steps to be incremented. */
		steps?: number | null;
	}


	/** This is a JSON template for the payload to request to increment an achievement. */
	export interface GamesAchievementSetStepsAtLeast {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementSetStepsAtLeast. */
		kind?: string | null;

		/** The minimum number of steps for the achievement to be set to. */
		steps?: number | null;
	}


	/** This is a JSON template for an achievement unlock response. */
	export interface AchievementUpdateMultipleResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateListResponse. */
		kind?: string | null;

		/** The updated state of the achievements. */
		updatedAchievements?: Array<AchievementUpdateResponse> | null;
	}


	/** This is a JSON template for an achievement update response. */
	export interface AchievementUpdateResponse {

		/** The achievement this update is was applied to. */
		achievementId?: string | null;

		/**
		 * The current state of the achievement.
		 * Possible values are:
		 * - "HIDDEN" - Achievement is hidden.
		 * - "REVEALED" - Achievement is revealed.
		 * - "UNLOCKED" - Achievement is unlocked.
		 */
		currentState?: string | null;

		/** The current steps recorded for this achievement if it is incremental. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateResponse. */
		kind?: string | null;

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked?: boolean | null;

		/** Whether the requested updates actually affected the achievement. */
		updateOccurred?: boolean | null;
	}


	/** This is a JSON template for aggregate stats. */
	export interface AggregateStats {

		/** The number of messages sent between a pair of peers. */
		count?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#aggregateStats. */
		kind?: string | null;

		/** The maximum amount. */
		max?: string | null;

		/** The minimum amount. */
		min?: string | null;

		/** The total number of bytes sent for messages between a pair of peers. */
		sum?: string | null;
	}


	/** This is a JSON template for an anonymous player */
	export interface AnonymousPlayer {

		/** The base URL for the image to display for the anonymous player. */
		avatarImageUrl?: string | null;

		/** The name to display for the anonymous player. */
		displayName?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#anonymousPlayer. */
		kind?: string | null;
	}


	/** This is a JSON template for the Application resource. */
	export interface Application {

		/** The number of achievements visible to the currently authenticated player. */
		achievement_count?: number | null;

		/** The assets of the application. */
		assets?: Array<ImageAsset> | null;

		/** The author of the application. */
		author?: string | null;

		/** This is a JSON template for an application category object. */
		category?: ApplicationCategory | null;

		/** The description of the application. */
		description?: string | null;

		/**
		 * A list of features that have been enabled for the application.
		 * Possible values are:
		 * - "SNAPSHOTS" - Snapshots has been enabled
		 */
		enabledFeatures?: Array<string> | null;

		/** The ID of the application. */
		id?: string | null;

		/** The instances of the application. */
		instances?: Array<Instance> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#application. */
		kind?: string | null;

		/** The last updated timestamp of the application. */
		lastUpdatedTimestamp?: string | null;

		/** The number of leaderboards visible to the currently authenticated player. */
		leaderboard_count?: number | null;

		/** The name of the application. */
		name?: string | null;

		/** A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0"). */
		themeColor?: string | null;
	}


	/** This is a JSON template for an image asset object. */
	export interface ImageAsset {

		/** The height of the asset. */
		height?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#imageAsset. */
		kind?: string | null;

		/** The name of the asset. */
		name?: string | null;

		/** The URL of the asset. */
		url?: string | null;

		/** The width of the asset. */
		width?: number | null;
	}


	/** This is a JSON template for an application category object. */
	export interface ApplicationCategory {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#applicationCategory. */
		kind?: string | null;

		/** The primary category. */
		primary?: string | null;

		/** The secondary category. */
		secondary?: string | null;
	}


	/** This is a JSON template for the Instance resource. */
	export interface Instance {

		/** URI which shows where a user can acquire this instance. */
		acquisitionUri?: string | null;

		/** This is a JSON template for the Android instance details resource. */
		androidInstance?: InstanceAndroidDetails | null;

		/** This is a JSON template for the iOS details resource. */
		iosInstance?: InstanceIosDetails | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#instance. */
		kind?: string | null;

		/** Localized display name. */
		name?: string | null;

		/**
		 * The platform type.
		 * Possible values are:
		 * - "ANDROID" - Instance is for Android.
		 * - "IOS" - Instance is for iOS
		 * - "WEB_APP" - Instance is for Web App.
		 */
		platformType?: string | null;

		/** Flag to show if this game instance supports realtime play. */
		realtimePlay?: boolean | null;

		/** Flag to show if this game instance supports turn based play. */
		turnBasedPlay?: boolean | null;

		/** This is a JSON template for the Web details resource. */
		webInstance?: InstanceWebDetails | null;
	}


	/** This is a JSON template for the Android instance details resource. */
	export interface InstanceAndroidDetails {

		/** Flag indicating whether the anti-piracy check is enabled. */
		enablePiracyCheck?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#instanceAndroidDetails. */
		kind?: string | null;

		/** Android package name which maps to Google Play URL. */
		packageName?: string | null;

		/** Indicates that this instance is the default for new installations. */
		preferred?: boolean | null;
	}


	/** This is a JSON template for the iOS details resource. */
	export interface InstanceIosDetails {

		/** Bundle identifier. */
		bundleIdentifier?: string | null;

		/** iTunes App ID. */
		itunesAppId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#instanceIosDetails. */
		kind?: string | null;

		/** Indicates that this instance is the default for new installations on iPad devices. */
		preferredForIpad?: boolean | null;

		/** Indicates that this instance is the default for new installations on iPhone devices. */
		preferredForIphone?: boolean | null;

		/** Flag to indicate if this instance supports iPad. */
		supportIpad?: boolean | null;

		/** Flag to indicate if this instance supports iPhone. */
		supportIphone?: boolean | null;
	}


	/** This is a JSON template for the Web details resource. */
	export interface InstanceWebDetails {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#instanceWebDetails. */
		kind?: string | null;

		/** Launch URL for the game. */
		launchUrl?: string | null;

		/** Indicates that this instance is the default for new installations. */
		preferred?: boolean | null;
	}


	/** This is a JSON template for a third party application verification response resource. */
	export interface ApplicationVerifyResponse {

		/** An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.) */
		alternate_player_id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#applicationVerifyResponse. */
		kind?: string | null;

		/** The ID of the player that was issued the auth token used in this request. */
		player_id?: string | null;
	}


	/** This is a JSON template for data related to individual game categories. */
	export interface Category {

		/** The category name. */
		category?: string | null;

		/** Experience points earned in this category. */
		experiencePoints?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#category. */
		kind?: string | null;
	}


	/** This is a JSON template for a list of category data objects. */
	export interface CategoryListResponse {

		/** The list of categories with usage data. */
		items?: Array<Category> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#categoryListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a batch update failure resource. */
	export interface EventBatchRecordFailure {

		/**
		 * The cause for the update failure.
		 * Possible values are:
		 * - "TOO_LARGE": A batch request was issued with more events than are allowed in a single batch.
		 * - "TIME_PERIOD_EXPIRED": A batch was sent with data too far in the past to record.
		 * - "TIME_PERIOD_SHORT": A batch was sent with a time range that was too short.
		 * - "TIME_PERIOD_LONG": A batch was sent with a time range that was too long.
		 * - "ALREADY_UPDATED": An attempt was made to record a batch of data which was already seen.
		 * - "RECORD_RATE_HIGH": An attempt was made to record data faster than the server will apply updates.
		 */
		failureCause?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventBatchRecordFailure. */
		kind?: string | null;

		/** This is a JSON template for an event period time range. */
		range?: EventPeriodRange | null;
	}


	/** This is a JSON template for an event period time range. */
	export interface EventPeriodRange {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodRange. */
		kind?: string | null;

		/** The time when this update period ends, in millis, since 1970 UTC (Unix Epoch). */
		periodEndMillis?: string | null;

		/** The time when this update period begins, in millis, since 1970 UTC (Unix Epoch). */
		periodStartMillis?: string | null;
	}


	/** This is a JSON template for an event child relationship resource. */
	export interface EventChild {

		/** The ID of the child event. */
		childId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventChild. */
		kind?: string | null;
	}


	/** This is a JSON template for an event definition resource. */
	export interface EventDefinition {

		/** A list of events that are a child of this event. */
		childEvents?: Array<EventChild> | null;

		/** Description of what this event represents. */
		description?: string | null;

		/** The name to display for the event. */
		displayName?: string | null;

		/** The ID of the event. */
		id?: string | null;

		/** The base URL for the image that represents the event. */
		imageUrl?: string | null;

		/** Indicates whether the icon image being returned is a default image, or is game-provided. */
		isDefaultImageUrl?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinition. */
		kind?: string | null;

		/**
		 * The visibility of event being tracked in this definition.
		 * Possible values are:
		 * - "REVEALED": This event should be visible to all users.
		 * - "HIDDEN": This event should only be shown to users that have recorded this event at least once.
		 */
		visibility?: string | null;
	}


	/** This is a JSON template for a ListDefinitions response. */
	export interface EventDefinitionListResponse {

		/** The event definitions. */
		items?: Array<EventDefinition> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinitionListResponse. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for an event period update resource. */
	export interface EventPeriodUpdate {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodUpdate. */
		kind?: string | null;

		/** This is a JSON template for an event period time range. */
		timePeriod?: EventPeriodRange | null;

		/** The updates being made for this time period. */
		updates?: Array<EventUpdateRequest> | null;
	}


	/** This is a JSON template for an event period update resource. */
	export interface EventUpdateRequest {

		/** The ID of the event being modified in this update. */
		definitionId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateRequest. */
		kind?: string | null;

		/** The number of times this event occurred in this time period. */
		updateCount?: string | null;
	}


	/** This is a JSON template for an event update failure resource. */
	export interface EventRecordFailure {

		/** The ID of the event that was not updated. */
		eventId?: string | null;

		/**
		 * The cause for the update failure.
		 * Possible values are:
		 * - "NOT_FOUND" - An attempt was made to set an event that was not defined.
		 * - "INVALID_UPDATE_VALUE" - An attempt was made to increment an event by a non-positive value.
		 */
		failureCause?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordFailure. */
		kind?: string | null;
	}


	/** This is a JSON template for an event period update resource. */
	export interface EventRecordRequest {

		/** The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch). */
		currentTimeMillis?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordRequest. */
		kind?: string | null;

		/** The request ID used to identify this attempt to record events. */
		requestId?: string | null;

		/** A list of the time period updates being made in this request. */
		timePeriods?: Array<EventPeriodUpdate> | null;
	}


	/** This is a JSON template for an event period update resource. */
	export interface EventUpdateResponse {

		/** Any batch-wide failures which occurred applying updates. */
		batchFailures?: Array<EventBatchRecordFailure> | null;

		/** Any failures updating a particular event. */
		eventFailures?: Array<EventRecordFailure> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateResponse. */
		kind?: string | null;

		/** The current status of any updated events */
		playerEvents?: Array<PlayerEvent> | null;
	}


	/** This is a JSON template for an event status resource. */
	export interface PlayerEvent {

		/** The ID of the event definition. */
		definitionId?: string | null;

		/** The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console. */
		formattedNumEvents?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent. */
		kind?: string | null;

		/** The current number of times this event has occurred. */
		numEvents?: string | null;

		/** The ID of the player. */
		playerId?: string | null;
	}


	/** This is a JSON template for the Leaderboard resource. */
	export interface Leaderboard {

		/** The icon for the leaderboard. */
		iconUrl?: string | null;

		/** The leaderboard ID. */
		id?: string | null;

		/** Indicates whether the icon image being returned is a default image, or is game-provided. */
		isIconUrlDefault?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboard. */
		kind?: string | null;

		/** The name of the leaderboard. */
		name?: string | null;

		/**
		 * How scores are ordered.
		 * Possible values are:
		 * - "LARGER_IS_BETTER" - Larger values are better; scores are sorted in descending order.
		 * - "SMALLER_IS_BETTER" - Smaller values are better; scores are sorted in ascending order.
		 */
		order?: string | null;
	}


	/** This is a JSON template for the Leaderboard Entry resource. */
	export interface LeaderboardEntry {

		/** The localized string for the numerical value of this score. */
		formattedScore?: string | null;

		/** The localized string for the rank of this score for this leaderboard. */
		formattedScoreRank?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry. */
		kind?: string | null;

		/** This is a JSON template for a Player resource. */
		player?: Player | null;

		/** The rank of this score for this leaderboard. */
		scoreRank?: string | null;

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The numerical value of this score. */
		scoreValue?: string | null;

		/**
		 * The time span of this high score.
		 * Possible values are:
		 * - "ALL_TIME" - The score is an all-time high score.
		 * - "WEEKLY" - The score is a weekly high score.
		 * - "DAILY" - The score is a daily high score.
		 */
		timeSpan?: string | null;

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestampMillis?: string | null;
	}


	/** This is a JSON template for a Player resource. */
	export interface Player {

		/** The base URL for the image that represents the player. */
		avatarImageUrl?: string | null;

		/** The url to the landscape mode player banner image. */
		bannerUrlLandscape?: string | null;

		/** The url to the portrait mode player banner image. */
		bannerUrlPortrait?: string | null;

		/** The name to display for the player. */
		displayName?: string | null;

		/** This is a JSON template for 1P/3P metadata about the player's experience. */
		experienceInfo?: PlayerExperienceInfo | null;

		/** The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game. */
		friendStatus?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#player. */
		kind?: string | null;

		/** This is a JSON template for metadata about a player playing a game with the currently authenticated user. */
		lastPlayedWith?: Played | null;

		/** An object representation of the individual components of the player's name. For some players, these fields may not be present. */
		name?: PlayerName | null;

		/** The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs. */
		originalPlayerId?: string | null;

		/** The ID of the player. */
		playerId?: string | null;
		playerStattus?: string | null;

		/** This is a JSON template for profile settings */
		profileSettings?: ProfileSettings | null;

		/** The player's title rewarded for their game activities. */
		title?: string | null;
	}


	/** This is a JSON template for 1P/3P metadata about the player's experience. */
	export interface PlayerExperienceInfo {

		/** The current number of experience points for the player. */
		currentExperiencePoints?: string | null;

		/** This is a JSON template for 1P/3P metadata about a user's level. */
		currentLevel?: PlayerLevel | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerExperienceInfo. */
		kind?: string | null;

		/** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
		lastLevelUpTimestampMillis?: string | null;

		/** This is a JSON template for 1P/3P metadata about a user's level. */
		nextLevel?: PlayerLevel | null;
	}


	/** This is a JSON template for 1P/3P metadata about a user's level. */
	export interface PlayerLevel {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerLevel. */
		kind?: string | null;

		/** The level for the user. */
		level?: number | null;

		/** The maximum experience points for this level. */
		maxExperiencePoints?: string | null;

		/** The minimum experience points for this level. */
		minExperiencePoints?: string | null;
	}


	/** This is a JSON template for metadata about a player playing a game with the currently authenticated user. */
	export interface Played {

		/** True if the player was auto-matched with the currently authenticated user. */
		autoMatched?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#played. */
		kind?: string | null;

		/** The last time the player played the game in milliseconds since the epoch in UTC. */
		timeMillis?: string | null;
	}

	export interface PlayerName {

		/** The family name of this player. In some places, this is known as the last name. */
		familyName?: string | null;

		/** The given name of this player. In some places, this is known as the first name. */
		givenName?: string | null;
	}


	/** This is a JSON template for profile settings */
	export interface ProfileSettings {

		/** Whether the player's friends list is visible to the game. */
		friendsListVisibility?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#profileSettings. */
		kind?: string | null;
		profileVisible?: boolean | null;
	}


	/** This is a JSON template for a list of leaderboard objects. */
	export interface LeaderboardListResponse {

		/** The leaderboards. */
		items?: Array<Leaderboard> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a score rank in a leaderboard. */
	export interface LeaderboardScoreRank {

		/** The number of scores in the leaderboard as a string. */
		formattedNumScores?: string | null;

		/** The rank in the leaderboard as a string. */
		formattedRank?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScoreRank. */
		kind?: string | null;

		/** The number of scores in the leaderboard. */
		numScores?: string | null;

		/** The rank in the leaderboard. */
		rank?: string | null;
	}


	/** This is a JSON template for a ListScores response. */
	export interface LeaderboardScores {

		/** The scores in the leaderboard. */
		items?: Array<LeaderboardEntry> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;

		/** The total number of scores in the leaderboard. */
		numScores?: string | null;

		/** This is a JSON template for the Leaderboard Entry resource. */
		playerScore?: LeaderboardEntry | null;

		/** The pagination token for the previous page of results. */
		prevPageToken?: string | null;
	}


	/** This is a JSON template for the metagame config resource */
	export interface MetagameConfig {

		/** Current version of the metagame configuration data. When this data is updated, the version number will be increased by one. */
		currentVersion?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#metagameConfig. */
		kind?: string | null;

		/** The list of player levels. */
		playerLevels?: Array<PlayerLevel> | null;
	}


	/** This is a JSON template for network diagnostics reported for a client. */
	export interface NetworkDiagnostics {

		/** The Android network subtype. */
		androidNetworkSubtype?: number | null;

		/** The Android network type. */
		androidNetworkType?: number | null;

		/** iOS network type as defined in Reachability.h. */
		iosNetworkType?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#networkDiagnostics. */
		kind?: string | null;

		/** The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html */
		networkOperatorCode?: string | null;

		/** The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName */
		networkOperatorName?: string | null;

		/** The amount of time in milliseconds it took for the client to establish a connection with the XMPP server. */
		registrationLatencyMillis?: number | null;
	}


	/** This is a JSON template for a result for a match participant. */
	export interface ParticipantResult {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#participantResult. */
		kind?: string | null;

		/** The ID of the participant. */
		participantId?: string | null;

		/** The placement or ranking of the participant in the match results; a number from one to the number of participants in the match. Multiple participants may have the same placing value in case of a type. */
		placing?: number | null;

		/**
		 * The result of the participant for this match.
		 * Possible values are:
		 * - "MATCH_RESULT_WIN" - The participant won the match.
		 * - "MATCH_RESULT_LOSS" - The participant lost the match.
		 * - "MATCH_RESULT_TIE" - The participant tied the match.
		 * - "MATCH_RESULT_NONE" - There was no winner for the match (nobody wins or loses this kind of game.)
		 * - "MATCH_RESULT_DISCONNECT" - The participant disconnected / left during the match.
		 * - "MATCH_RESULT_DISAGREED" - Different clients reported different results for this participant.
		 */
		result?: string | null;
	}


	/** This is a JSON template for peer channel diagnostics. */
	export interface PeerChannelDiagnostics {

		/** This is a JSON template for aggregate stats. */
		bytesReceived?: AggregateStats | null;

		/** This is a JSON template for aggregate stats. */
		bytesSent?: AggregateStats | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#peerChannelDiagnostics. */
		kind?: string | null;

		/** Number of messages lost. */
		numMessagesLost?: number | null;

		/** Number of messages received. */
		numMessagesReceived?: number | null;

		/** Number of messages sent. */
		numMessagesSent?: number | null;

		/** Number of send failures. */
		numSendFailures?: number | null;

		/** This is a JSON template for aggregate stats. */
		roundtripLatencyMillis?: AggregateStats | null;
	}


	/** This is a JSON template for peer session diagnostics. */
	export interface PeerSessionDiagnostics {

		/** Connected time in milliseconds. */
		connectedTimestampMillis?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#peerSessionDiagnostics. */
		kind?: string | null;

		/** The participant ID of the peer. */
		participantId?: string | null;

		/** This is a JSON template for peer channel diagnostics. */
		reliableChannel?: PeerChannelDiagnostics | null;

		/** This is a JSON template for peer channel diagnostics. */
		unreliableChannel?: PeerChannelDiagnostics | null;
	}


	/** This is a JSON template for an achievement object. */
	export interface PlayerAchievement {

		/**
		 * The state of the achievement.
		 * Possible values are:
		 * - "HIDDEN" - Achievement is hidden.
		 * - "REVEALED" - Achievement is revealed.
		 * - "UNLOCKED" - Achievement is unlocked.
		 */
		achievementState?: string | null;

		/** The current steps for an incremental achievement. */
		currentSteps?: number | null;

		/** Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished. */
		experiencePoints?: string | null;

		/** The current steps for an incremental achievement as a string. */
		formattedCurrentStepsString?: string | null;

		/** The ID of the achievement. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement. */
		kind?: string | null;

		/** The timestamp of the last modification to this achievement's state. */
		lastUpdatedTimestamp?: string | null;
	}


	/** This is a JSON template for a list of achievement objects. */
	export interface PlayerAchievementListResponse {

		/** The achievements. */
		items?: Array<PlayerAchievement> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a ListByPlayer response. */
	export interface PlayerEventListResponse {

		/** The player events. */
		items?: Array<PlayerEvent> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerEventListResponse. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a player leaderboard score object. */
	export interface PlayerLeaderboardScore {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScore. */
		kind?: string | null;

		/** The ID of the leaderboard this score is in. */
		leaderboard_id?: string | null;

		/** This is a JSON template for a score rank in a leaderboard. */
		publicRank?: LeaderboardScoreRank | null;

		/** The formatted value of this score. */
		scoreString?: string | null;

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The numerical value of this score. */
		scoreValue?: string | null;

		/** This is a JSON template for a score rank in a leaderboard. */
		socialRank?: LeaderboardScoreRank | null;

		/**
		 * The time span of this score.
		 * Possible values are:
		 * - "ALL_TIME" - The score is an all-time score.
		 * - "WEEKLY" - The score is a weekly score.
		 * - "DAILY" - The score is a daily score.
		 */
		timeSpan?: string | null;

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestamp?: string | null;
	}


	/** This is a JSON template for a list of player leaderboard scores. */
	export interface PlayerLeaderboardScoreListResponse {

		/** The leaderboard scores. */
		items?: Array<PlayerLeaderboardScore> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScoreListResponse. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;

		/** This is a JSON template for a Player resource. */
		player?: Player | null;
	}


	/** This is a JSON template for a third party player list response. */
	export interface PlayerListResponse {

		/** The players. */
		items?: Array<Player> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a player score. */
	export interface PlayerScore {

		/** The formatted score for this player score. */
		formattedScore?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore. */
		kind?: string | null;

		/** The numerical value for this player score. */
		score?: string | null;

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/**
		 * The time span for this player score.
		 * Possible values are:
		 * - "ALL_TIME" - The score is an all-time score.
		 * - "WEEKLY" - The score is a weekly score.
		 * - "DAILY" - The score is a daily score.
		 */
		timeSpan?: string | null;
	}


	/** This is a JSON template for a list of score submission statuses. */
	export interface PlayerScoreListResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreListResponse. */
		kind?: string | null;

		/** The score submissions statuses. */
		submittedScores?: Array<PlayerScoreResponse> | null;
	}


	/** This is a JSON template for a list of leaderboard entry resources. */
	export interface PlayerScoreResponse {

		/**
		 * The time spans where the submitted score is better than the existing score for that time span.
		 * Possible values are:
		 * - "ALL_TIME" - The score is an all-time score.
		 * - "WEEKLY" - The score is a weekly score.
		 * - "DAILY" - The score is a daily score.
		 */
		beatenScoreTimeSpans?: Array<string> | null;

		/** The formatted value of the submitted score. */
		formattedScore?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse. */
		kind?: string | null;

		/** The leaderboard ID that this score was submitted to. */
		leaderboardId?: string | null;

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's DAILY score, but not better than the player's scores for the WEEKLY or ALL_TIME time spans. */
		unbeatenScores?: Array<PlayerScore> | null;
	}


	/** This is a JSON template for a list of score submission requests */
	export interface PlayerScoreSubmissionList {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreSubmissionList. */
		kind?: string | null;

		/** The score submissions. */
		scores?: Array<ScoreSubmission> | null;
	}


	/** This is a JSON template for a request to submit a score to leaderboards. */
	export interface ScoreSubmission {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#scoreSubmission. */
		kind?: string | null;

		/** The leaderboard this score is being submitted to. */
		leaderboardId?: string | null;

		/** The new score being submitted. */
		score?: string | null;

		/**
		 * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
		 * Pattern: [a-zA-Z0-9-._~]{0,64}
		 */
		scoreTag?: string | null;

		/** Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986. */
		signature?: string | null;
	}


	/** This is a JSON template for a push token resource. */
	export interface PushToken {

		/**
		 * The revision of the client SDK used by your application, in the same format that's used by revisions.check. Used to send backward compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:
		 * - IOS - Push token is for iOS
		 */
		clientRevision?: string | null;

		/** This is a JSON template for a push token ID resource. */
		id?: PushTokenId | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#pushToken. */
		kind?: string | null;

		/** The preferred language for notifications that are sent using this token. */
		language?: string | null;
	}


	/** This is a JSON template for a push token ID resource. */
	export interface PushTokenId {

		/** A push token ID for iOS devices. */
		ios?: PushTokenIdIos | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#pushTokenId. */
		kind?: string | null;
	}

	export interface PushTokenIdIos {

		/** Device token supplied by an iOS system call to register for remote notifications. Encode this field as web-safe base64. */
		apns_device_token?: string | null;

		/** Indicates whether this token should be used for the production or sandbox APNS server. */
		apns_environment?: string | null;
	}


	/** This is a JSON template for the result of checking a revision. */
	export interface RevisionCheckResponse {

		/** The version of the API this client revision should use when calling API methods. */
		apiVersion?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#revisionCheckResponse. */
		kind?: string | null;

		/**
		 * The result of the revision check.
		 * Possible values are:
		 * - "OK" - The revision being used is current.
		 * - "DEPRECATED" - There is currently a newer version available, but the revision being used still works.
		 * - "INVALID" - The revision being used is not supported in any released version.
		 */
		revisionStatus?: string | null;
	}


	/** This is a JSON template for a room resource object. */
	export interface Room {

		/** The ID of the application being played. */
		applicationId?: string | null;

		/** This is a JSON template for a room auto-match criteria object. */
		autoMatchingCriteria?: RoomAutoMatchingCriteria | null;

		/** This is a JSON template for status of room automatching that is in progress. */
		autoMatchingStatus?: RoomAutoMatchStatus | null;

		/** This is a JSON template for room modification metadata. */
		creationDetails?: RoomModification | null;

		/** This short description is generated by our servers and worded relative to the player requesting the room. It is intended to be displayed when the room is shown in a list (that is, an invitation to a room.) */
		description?: string | null;

		/** The ID of the participant that invited the user to the room. Not set if the user was not invited to the room. */
		inviterId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#room. */
		kind?: string | null;

		/** This is a JSON template for room modification metadata. */
		lastUpdateDetails?: RoomModification | null;

		/** The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations. */
		participants?: Array<RoomParticipant> | null;

		/** Globally unique ID for a room. */
		roomId?: string | null;

		/** The version of the room status: an increasing counter, used by the client to ignore out-of-order updates to room status. */
		roomStatusVersion?: number | null;

		/**
		 * The status of the room.
		 * Possible values are:
		 * - "ROOM_INVITING" - One or more players have been invited and not responded.
		 * - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching.
		 * - "ROOM_CONNECTING" - Players have joined and are connecting to each other (either before or after auto-matching).
		 * - "ROOM_ACTIVE" - All players have joined and connected to each other.
		 * - "ROOM_DELETED" - The room should no longer be shown on the client. Returned in sync calls when a player joins a room (as a tombstone), or for rooms where all joined participants have left.
		 */
		status?: string | null;

		/** The variant / mode of the application being played; can be any integer value, or left blank. */
		variant?: number | null;
	}


	/** This is a JSON template for a room auto-match criteria object. */
	export interface RoomAutoMatchingCriteria {

		/** A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game. */
		exclusiveBitmask?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchingCriteria. */
		kind?: string | null;

		/** The maximum number of players that should be added to the room by auto-matching. */
		maxAutoMatchingPlayers?: number | null;

		/** The minimum number of players that should be added to the room by auto-matching. */
		minAutoMatchingPlayers?: number | null;
	}


	/** This is a JSON template for status of room automatching that is in progress. */
	export interface RoomAutoMatchStatus {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchStatus. */
		kind?: string | null;

		/** An estimate for the amount of time (in seconds) that auto-matching is expected to take to complete. */
		waitEstimateSeconds?: number | null;
	}


	/** This is a JSON template for room modification metadata. */
	export interface RoomModification {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomModification. */
		kind?: string | null;

		/** The timestamp at which they modified the room, in milliseconds since the epoch in UTC. */
		modifiedTimestampMillis?: string | null;

		/** The ID of the participant that modified the room. */
		participantId?: string | null;
	}


	/** This is a JSON template for a participant in a room. */
	export interface RoomParticipant {

		/** True if this participant was auto-matched with the requesting player. */
		autoMatched?: boolean | null;

		/** This is a JSON template for an anonymous player */
		autoMatchedPlayer?: AnonymousPlayer | null;

		/** The capabilities which can be used when communicating with this participant. */
		capabilities?: Array<string> | null;

		/** This is a JSON template for the client address when setting up a room. */
		clientAddress?: RoomClientAddress | null;

		/** True if this participant is in the fully connected set of peers in the room. */
		connected?: boolean | null;

		/** An identifier for the participant in the scope of the room. Cannot be used to identify a player across rooms or in other contexts. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomParticipant. */
		kind?: string | null;

		/**
		 * The reason the participant left the room; populated if the participant status is PARTICIPANT_LEFT.
		 * Possible values are:
		 * - "PLAYER_LEFT" - The player explicitly chose to leave the room.
		 * - "GAME_LEFT" - The game chose to remove the player from the room.
		 * - "ABANDONED" - The player switched to another application and abandoned the room.
		 * - "PEER_CONNECTION_FAILURE" - The client was unable to establish or maintain a connection to other peer(s) in the room.
		 * - "SERVER_ERROR" - The client received an error response when it tried to communicate with the server.
		 * - "TIMEOUT" - The client timed out while waiting for players to join and connect.
		 * - "PRESENCE_FAILURE" - The client's XMPP connection ended abruptly.
		 */
		leaveReason?: string | null;

		/** This is a JSON template for a Player resource. */
		player?: Player | null;

		/**
		 * The status of the participant with respect to the room.
		 * Possible values are:
		 * - "PARTICIPANT_INVITED" - The participant has been invited to join the room, but has not yet responded.
		 * - "PARTICIPANT_JOINED" - The participant has joined the room (either after creating it or accepting an invitation.)
		 * - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the room.
		 * - "PARTICIPANT_LEFT" - The participant joined the room and then left it.
		 */
		status?: string | null;
	}


	/** This is a JSON template for the client address when setting up a room. */
	export interface RoomClientAddress {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomClientAddress. */
		kind?: string | null;

		/** The XMPP address of the client on the Google Games XMPP network. */
		xmppAddress?: string | null;
	}


	/** This is a JSON template for a room creation request. */
	export interface RoomCreateRequest {

		/** This is a JSON template for a room auto-match criteria object. */
		autoMatchingCriteria?: RoomAutoMatchingCriteria | null;

		/** The capabilities that this client supports for realtime communication. */
		capabilities?: Array<string> | null;

		/** This is a JSON template for the client address when setting up a room. */
		clientAddress?: RoomClientAddress | null;

		/** The player IDs to invite to the room. */
		invitedPlayerIds?: Array<string> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomCreateRequest. */
		kind?: string | null;

		/** This is a JSON template for network diagnostics reported for a client. */
		networkDiagnostics?: NetworkDiagnostics | null;

		/** A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries. */
		requestId?: string | null;

		/** The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible. */
		variant?: number | null;
	}


	/** This is a JSON template for a join room request. */
	export interface RoomJoinRequest {

		/** The capabilities that this client supports for realtime communication. */
		capabilities?: Array<string> | null;

		/** This is a JSON template for the client address when setting up a room. */
		clientAddress?: RoomClientAddress | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomJoinRequest. */
		kind?: string | null;

		/** This is a JSON template for network diagnostics reported for a client. */
		networkDiagnostics?: NetworkDiagnostics | null;
	}


	/** This is a JSON template for room leave diagnostics. */
	export interface RoomLeaveDiagnostics {

		/** Android network subtype. http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype() */
		androidNetworkSubtype?: number | null;

		/** Android network type. http://developer.android.com/reference/android/net/NetworkInfo.html#getType() */
		androidNetworkType?: number | null;

		/** iOS network type as defined in Reachability.h. */
		iosNetworkType?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveDiagnostics. */
		kind?: string | null;

		/** The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html */
		networkOperatorCode?: string | null;

		/** The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName */
		networkOperatorName?: string | null;

		/** Diagnostics about all peer sessions. */
		peerSession?: Array<PeerSessionDiagnostics> | null;

		/** Whether or not sockets were used. */
		socketsUsed?: boolean | null;
	}


	/** This is a JSON template for a leave room request. */
	export interface RoomLeaveRequest {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveRequest. */
		kind?: string | null;

		/** This is a JSON template for room leave diagnostics. */
		leaveDiagnostics?: RoomLeaveDiagnostics | null;

		/**
		 * Reason for leaving the match.
		 * Possible values are:
		 * - "PLAYER_LEFT" - The player chose to leave the room..
		 * - "GAME_LEFT" - The game chose to remove the player from the room.
		 * - "REALTIME_ABANDONED" - The player switched to another application and abandoned the room.
		 * - "REALTIME_PEER_CONNECTION_FAILURE" - The client was unable to establish a connection to other peer(s).
		 * - "REALTIME_SERVER_CONNECTION_FAILURE" - The client was unable to communicate with the server.
		 * - "REALTIME_SERVER_ERROR" - The client received an error response when it tried to communicate with the server.
		 * - "REALTIME_TIMEOUT" - The client timed out while waiting for a room.
		 * - "REALTIME_CLIENT_DISCONNECTING" - The client disconnects without first calling Leave.
		 * - "REALTIME_SIGN_OUT" - The user signed out of G+ while in the room.
		 * - "REALTIME_GAME_CRASHED" - The game crashed.
		 * - "REALTIME_ROOM_SERVICE_CRASHED" - RoomAndroidService crashed.
		 * - "REALTIME_DIFFERENT_CLIENT_ROOM_OPERATION" - Another client is trying to enter a room.
		 * - "REALTIME_SAME_CLIENT_ROOM_OPERATION" - The same client is trying to enter a new room.
		 */
		reason?: string | null;
	}


	/** This is a JSON template for a list of rooms. */
	export interface RoomList {

		/** The rooms. */
		items?: Array<Room> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomList. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for an update on the status of a peer in a room. */
	export interface RoomP2PStatus {

		/** The amount of time in milliseconds it took to establish connections with this peer. */
		connectionSetupLatencyMillis?: number | null;

		/**
		 * The error code in event of a failure.
		 * Possible values are:
		 * - "P2P_FAILED" - The client failed to establish a P2P connection with the peer.
		 * - "PRESENCE_FAILED" - The client failed to register to receive P2P connections.
		 * - "RELAY_SERVER_FAILED" - The client received an error when trying to use the relay server to establish a P2P connection with the peer.
		 */
		error?: string | null;

		/** More detailed diagnostic message returned in event of a failure. */
		error_reason?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatus. */
		kind?: string | null;

		/** The ID of the participant. */
		participantId?: string | null;

		/**
		 * The status of the peer in the room.
		 * Possible values are:
		 * - "CONNECTION_ESTABLISHED" - The client established a P2P connection with the peer.
		 * - "CONNECTION_FAILED" - The client failed to establish directed presence with the peer.
		 */
		status?: string | null;

		/** The amount of time in milliseconds it took to send packets back and forth on the unreliable channel with this peer. */
		unreliableRoundtripLatencyMillis?: number | null;
	}


	/** This is a JSON template for an update on the status of peers in a room. */
	export interface RoomP2PStatuses {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatuses. */
		kind?: string | null;

		/** The updates for the peers. */
		updates?: Array<RoomP2PStatus> | null;
	}


	/** This is a JSON template for the status of a room that the player has joined. */
	export interface RoomStatus {

		/** This is a JSON template for status of room automatching that is in progress. */
		autoMatchingStatus?: RoomAutoMatchStatus | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#roomStatus. */
		kind?: string | null;

		/** The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations. */
		participants?: Array<RoomParticipant> | null;

		/** Globally unique ID for a room. */
		roomId?: string | null;

		/**
		 * The status of the room.
		 * Possible values are:
		 * - "ROOM_INVITING" - One or more players have been invited and not responded.
		 * - "ROOM_AUTO_MATCHING" - One or more slots need to be filled by auto-matching.
		 * - "ROOM_CONNECTING" - Players have joined are connecting to each other (either before or after auto-matching).
		 * - "ROOM_ACTIVE" - All players have joined and connected to each other.
		 * - "ROOM_DELETED" - All joined players have left.
		 */
		status?: string | null;

		/** The version of the status for the room: an increasing counter, used by the client to ignore out-of-order updates to room status. */
		statusVersion?: number | null;
	}


	/** This is a JSON template for an snapshot object. */
	export interface Snapshot {

		/** This is a JSON template for an image of a snapshot. */
		coverImage?: SnapshotImage | null;

		/** The description of this snapshot. */
		description?: string | null;

		/** The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller. */
		driveId?: string | null;

		/** The duration associated with this snapshot, in millis. */
		durationMillis?: string | null;

		/** The ID of the snapshot. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#snapshot. */
		kind?: string | null;

		/** The timestamp (in millis since Unix epoch) of the last modification to this snapshot. */
		lastModifiedMillis?: string | null;

		/** The progress value (64-bit integer set by developer) associated with this snapshot. */
		progressValue?: string | null;

		/** The title of this snapshot. */
		title?: string | null;

		/**
		 * The type of this snapshot.
		 * Possible values are:
		 * - "SAVE_GAME" - A snapshot representing a save game.
		 */
		type?: string | null;

		/** The unique name provided when the snapshot was created. */
		uniqueName?: string | null;
	}


	/** This is a JSON template for an image of a snapshot. */
	export interface SnapshotImage {

		/** The height of the image. */
		height?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotImage. */
		kind?: string | null;

		/** The MIME type of the image. */
		mime_type?: string | null;

		/** The URL of the image. This URL may be invalidated at any time and should not be cached. */
		url?: string | null;

		/** The width of the image. */
		width?: number | null;
	}


	/** This is a JSON template for a list of snapshot objects. */
	export interface SnapshotListResponse {

		/** The snapshots. */
		items?: Array<Snapshot> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotListResponse. */
		kind?: string | null;

		/** Token corresponding to the next page of results. If there are no more results, the token is omitted. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for an turn-based auto-match criteria object. */
	export interface TurnBasedAutoMatchingCriteria {

		/** A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game. */
		exclusiveBitmask?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedAutoMatchingCriteria. */
		kind?: string | null;

		/** The maximum number of players that should be added to the match by auto-matching. */
		maxAutoMatchingPlayers?: number | null;

		/** The minimum number of players that should be added to the match by auto-matching. */
		minAutoMatchingPlayers?: number | null;
	}


	/** This is a JSON template for a turn-based match resource object. */
	export interface TurnBasedMatch {

		/** The ID of the application being played. */
		applicationId?: string | null;

		/** This is a JSON template for an turn-based auto-match criteria object. */
		autoMatchingCriteria?: TurnBasedAutoMatchingCriteria | null;

		/** This is a JSON template for turn-based match modification metadata. */
		creationDetails?: TurnBasedMatchModification | null;

		/** This is a JSON template for a turn-based match data object. */
		data?: TurnBasedMatchData | null;

		/** This short description is generated by our servers based on turn state and is localized and worded relative to the player requesting the match. It is intended to be displayed when the match is shown in a list. */
		description?: string | null;

		/** The ID of the participant that invited the user to the match. Not set if the user was not invited to the match. */
		inviterId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatch. */
		kind?: string | null;

		/** This is a JSON template for turn-based match modification metadata. */
		lastUpdateDetails?: TurnBasedMatchModification | null;

		/** Globally unique ID for a turn-based match. */
		matchId?: string | null;

		/** The number of the match in a chain of rematches. Will be set to 1 for the first match and incremented by 1 for each rematch. */
		matchNumber?: number | null;

		/** The version of this match: an increasing counter, used to avoid out-of-date updates to the match. */
		matchVersion?: number | null;

		/** The participants involved in the match, along with their statuses. Includes participants who have left or declined invitations. */
		participants?: Array<TurnBasedMatchParticipant> | null;

		/** The ID of the participant that is taking a turn. */
		pendingParticipantId?: string | null;

		/** This is a JSON template for a turn-based match data object. */
		previousMatchData?: TurnBasedMatchData | null;

		/** The ID of a rematch of this match. Only set for completed matches that have been rematched. */
		rematchId?: string | null;

		/** The results reported for this match. */
		results?: Array<ParticipantResult> | null;

		/**
		 * The status of the match.
		 * Possible values are:
		 * - "MATCH_AUTO_MATCHING" - One or more slots need to be filled by auto-matching; the match cannot be established until they are filled.
		 * - "MATCH_ACTIVE" - The match has started.
		 * - "MATCH_COMPLETE" - The match has finished.
		 * - "MATCH_CANCELED" - The match was canceled.
		 * - "MATCH_EXPIRED" - The match expired due to inactivity.
		 * - "MATCH_DELETED" - The match should no longer be shown on the client. Returned only for tombstones for matches when sync is called.
		 */
		status?: string | null;

		/**
		 * The status of the current user in the match. Derived from the match type, match status, the user's participant status, and the pending participant for the match.
		 * Possible values are:
		 * - "USER_INVITED" - The user has been invited to join the match and has not responded yet.
		 * - "USER_AWAITING_TURN" - The user is waiting for their turn.
		 * - "USER_TURN" - The user has an action to take in the match.
		 * - "USER_MATCH_COMPLETED" - The match has ended (it is completed, canceled, or expired.)
		 */
		userMatchStatus?: string | null;

		/** The variant / mode of the application being played; can be any integer value, or left blank. */
		variant?: number | null;

		/** The ID of another participant in the match that can be used when describing the participants the user is playing with. */
		withParticipantId?: string | null;
	}


	/** This is a JSON template for turn-based match modification metadata. */
	export interface TurnBasedMatchModification {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchModification. */
		kind?: string | null;

		/** The timestamp at which they modified the match, in milliseconds since the epoch in UTC. */
		modifiedTimestampMillis?: string | null;

		/** The ID of the participant that modified the match. */
		participantId?: string | null;
	}


	/** This is a JSON template for a turn-based match data object. */
	export interface TurnBasedMatchData {

		/** The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option. */
		data?: string | null;

		/** True if this match has data available but it wasn't returned in a list response; fetching the match individually will retrieve this data. */
		dataAvailable?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchData. */
		kind?: string | null;
	}


	/** This is a JSON template for a participant in a turn-based match. */
	export interface TurnBasedMatchParticipant {

		/** True if this participant was auto-matched with the requesting player. */
		autoMatched?: boolean | null;

		/** This is a JSON template for an anonymous player */
		autoMatchedPlayer?: AnonymousPlayer | null;

		/** An identifier for the participant in the scope of the match. Cannot be used to identify a player across matches or in other contexts. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchParticipant. */
		kind?: string | null;

		/** This is a JSON template for a Player resource. */
		player?: Player | null;

		/**
		 * The status of the participant with respect to the match.
		 * Possible values are:
		 * - "PARTICIPANT_NOT_INVITED_YET" - The participant is slated to be invited to the match, but the invitation has not been sent; the invite will be sent when it becomes their turn.
		 * - "PARTICIPANT_INVITED" - The participant has been invited to join the match, but has not yet responded.
		 * - "PARTICIPANT_JOINED" - The participant has joined the match (either after creating it or accepting an invitation.)
		 * - "PARTICIPANT_DECLINED" - The participant declined an invitation to join the match.
		 * - "PARTICIPANT_LEFT" - The participant joined the match and then left it.
		 * - "PARTICIPANT_FINISHED" - The participant finished playing in the match.
		 * - "PARTICIPANT_UNRESPONSIVE" - The participant did not take their turn in the allotted time.
		 */
		status?: string | null;
	}


	/** This is a JSON template for a turn-based match creation request. */
	export interface TurnBasedMatchCreateRequest {

		/** This is a JSON template for an turn-based auto-match criteria object. */
		autoMatchingCriteria?: TurnBasedAutoMatchingCriteria | null;

		/** The player ids to invite to the match. */
		invitedPlayerIds?: Array<string> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchCreateRequest. */
		kind?: string | null;

		/** A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries. */
		requestId?: string | null;

		/** The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible. */
		variant?: number | null;
	}


	/** This is a JSON template for sending a turn-based match data object. */
	export interface TurnBasedMatchDataRequest {

		/** The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option. */
		data?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchDataRequest. */
		kind?: string | null;
	}


	/** This is a JSON template for a list of turn-based matches. */
	export interface TurnBasedMatchList {

		/** The matches. */
		items?: Array<TurnBasedMatch> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchList. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for a rematch response. */
	export interface TurnBasedMatchRematch {

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchRematch. */
		kind?: string | null;

		/** This is a JSON template for a turn-based match resource object. */
		previousMatch?: TurnBasedMatch | null;

		/** This is a JSON template for a turn-based match resource object. */
		rematch?: TurnBasedMatch | null;
	}


	/** This is a JSON template for a turn-based match results object. */
	export interface TurnBasedMatchResults {

		/** This is a JSON template for sending a turn-based match data object. */
		data?: TurnBasedMatchDataRequest | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchResults. */
		kind?: string | null;

		/** The version of the match being updated. */
		matchVersion?: number | null;

		/** The match results for the participants in the match. */
		results?: Array<ParticipantResult> | null;
	}


	/** This is a JSON template for a list of turn-based matches returned from a sync. */
	export interface TurnBasedMatchSync {

		/** The matches. */
		items?: Array<TurnBasedMatch> | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchSync. */
		kind?: string | null;

		/** True if there were more matches available to fetch at the time the response was generated (which were not returned due to page size limits.) */
		moreAvailable?: boolean | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}


	/** This is a JSON template for the object representing a turn. */
	export interface TurnBasedMatchTurn {

		/** This is a JSON template for sending a turn-based match data object. */
		data?: TurnBasedMatchDataRequest | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchTurn. */
		kind?: string | null;

		/** The version of this match: an increasing counter, used to avoid out-of-date updates to the match. */
		matchVersion?: number | null;

		/** The ID of the participant who should take their turn next. May be set to the current player's participant ID to update match state without changing the turn. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players. */
		pendingParticipantId?: string | null;

		/** The match results for the participants in the match. */
		results?: Array<ParticipantResult> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the achievement definitions for your application.
		 * Get achievements
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_achievementDefinitions_list(language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'achievements?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates multiple achievements for the currently authenticated player.
		 * Post achievements/updateMultiple
		 * @param {string} builtinGameId Override used only by built-in games in Play Games application.
		 * @return {void} Successful response
		 */
		Games_achievements_updateMultiple(builtinGameId: string, requestBody: AchievementUpdateMultipleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'achievements/updateMultiple?builtinGameId=' + (builtinGameId == null ? '' : encodeURIComponent(builtinGameId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Increments the steps of the achievement with the given ID for the currently authenticated player.
		 * Post achievements/{achievementId}/increment
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @param {number} stepsToIncrement The number of steps to increment.
		 * @param {string} requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
		 * @return {void} Successful response
		 */
		Games_achievements_increment(achievementId: string, stepsToIncrement: number, requestId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/increment&stepsToIncrement=' + stepsToIncrement + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.
		 * Post achievements/{achievementId}/reveal
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {void} Successful response
		 */
		Games_achievements_reveal(achievementId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/reveal', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
		 * Post achievements/{achievementId}/setStepsAtLeast
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @param {number} steps The minimum value to set the steps to.
		 * @return {void} Successful response
		 */
		Games_achievements_setStepsAtLeast(achievementId: string, steps: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/setStepsAtLeast&steps=' + steps, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlocks this achievement for the currently authenticated player.
		 * Post achievements/{achievementId}/unlock
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @param {string} builtinGameId Override used only by built-in games in Play Games application.
		 * @return {void} Successful response
		 */
		Games_achievements_unlock(achievementId: string, builtinGameId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/unlock&builtinGameId=' + (builtinGameId == null ? '' : encodeURIComponent(builtinGameId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Indicate that the the currently authenticated user is playing your application.
		 * Post applications/played
		 * @param {string} builtinGameId Override used only by built-in games in Play Games application.
		 * @return {void} Successful response
		 */
		Games_applications_played(builtinGameId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications/played?builtinGameId=' + (builtinGameId == null ? '' : encodeURIComponent(builtinGameId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {Games_applications_getPlatformType} platformType Restrict application details returned to the specific platform.
		 * @return {void} Successful response
		 */
		Games_applications_get(applicationId: string, language: string, platformType: Games_applications_getPlatformType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&platformType=' + platformType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
		 * Get applications/{applicationId}/verify
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {void} Successful response
		 */
		Games_applications_verify(applicationId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/verify', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the event definitions in this application.
		 * Get eventDefinitions
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_events_listDefinitions(language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'eventDefinitions?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list showing the current progress on events in this application for the currently authenticated user.
		 * Get events
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_events_listByPlayer(language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
		 * Post events
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_events_record(language: string, requestBody: EventRecordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the leaderboard metadata for your application.
		 * Get leaderboards
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_leaderboards_list(language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'leaderboards?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits multiple scores to leaderboards.
		 * Post leaderboards/scores
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_scores_submitMultiple(language: string, requestBody: PlayerScoreSubmissionList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'leaderboards/scores?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the leaderboard with the given ID.
		 * Get leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_leaderboards_get(leaderboardId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submits a score to the specified leaderboard.
		 * Post leaderboards/{leaderboardId}/scores
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {string} score The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {string} scoreTag Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
		 * @return {void} Successful response
		 */
		Games_scores_submit(leaderboardId: string, score: string, language: string, scoreTag: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores&score=' + (score == null ? '' : encodeURIComponent(score)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&scoreTag=' + (scoreTag == null ? '' : encodeURIComponent(scoreTag)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the scores in a leaderboard, starting from the top.
		 * Get leaderboards/{leaderboardId}/scores/{collection}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {Games_scores_listCollection} collection The collection of scores you're requesting.
		 * @param {Games_scores_listTimeSpan} timeSpan The time span for the scores and ranks you're requesting.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_scores_list(leaderboardId: string, collection: Games_scores_listCollection, timeSpan: Games_scores_listTimeSpan, language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/' + collection + '&timeSpan=' + timeSpan + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the scores in a leaderboard around (and including) a player's score.
		 * Get leaderboards/{leaderboardId}/window/{collection}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {Games_scores_listCollection} collection The collection of scores you're requesting.
		 * @param {Games_scores_listTimeSpan} timeSpan The time span for the scores and ranks you're requesting.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {number} resultsAbove The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
		 * @param {boolean} returnTopIfAbsent True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
		 * @return {void} Successful response
		 */
		Games_scores_listWindow(leaderboardId: string, collection: Games_scores_listCollection, timeSpan: Games_scores_listTimeSpan, language: string, maxResults: number, pageToken: string, resultsAbove: number, returnTopIfAbsent: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/window/' + collection + '&timeSpan=' + timeSpan + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&resultsAbove=' + resultsAbove + '&returnTopIfAbsent=' + returnTopIfAbsent, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the metagame configuration data for the calling application.
		 * Get metagameConfig
		 * @return {void} Successful response
		 */
		Games_metagame_getMetagameConfig(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'metagameConfig', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the collection of players for the currently authenticated user.
		 * Get players/me/players/{collection}
		 * @param {Games_players_listCollection} collection Collection of players being retrieved
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_players_list(collection: Games_players_listCollection, language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/me/players/' + collection + '?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.
		 * Get players/{playerId}
		 * @param {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_players_get(playerId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the progress for all your application's achievements for the currently authenticated player.
		 * Get players/{playerId}/achievements
		 * @param {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {Games_achievements_listState} state Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
		 * @return {void} Successful response
		 */
		Games_achievements_list(playerId: string, language: string, maxResults: number, pageToken: string, state: Games_achievements_listState): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/achievements&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&state=' + state, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List play data aggregated per category for the player corresponding to playerId.
		 * Get players/{playerId}/categories/{collection}
		 * @param {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
		 * @param {Games_metagame_listCategoriesByPlayerCollection} collection The collection of categories for which data will be returned.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_metagame_listCategoriesByPlayer(playerId: string, collection: Games_metagame_listCategoriesByPlayerCollection, language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/categories/' + collection + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
		 * NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
		 * Get players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}
		 * @param {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
		 * @param {string} leaderboardId The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
		 * @param {Games_scores_getTimeSpan} timeSpan The time span for the scores and ranks you're requesting.
		 * @param {Games_scores_getIncludeRankType} includeRankType The types of ranks to return. If the parameter is omitted, no ranks will be returned.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_scores_get(playerId: string, leaderboardId: string, timeSpan: Games_scores_getTimeSpan, includeRankType: Games_scores_getIncludeRankType, language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/' + timeSpan + '&includeRankType=' + includeRankType + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
		 * Get players/{playerId}/snapshots
		 * @param {string} playerId A player ID. A value of me may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_snapshots_list(playerId: string, language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/snapshots&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Registers a push token for the current user and application.
		 * Put pushtokens
		 * @return {void} Successful response
		 */
		Games_pushtokens_update(requestBody: PushToken): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pushtokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a push token for the current user and application. Removing a non-existent push token will report success.
		 * Post pushtokens/remove
		 * @return {void} Successful response
		 */
		Games_pushtokens_remove(requestBody: PushTokenId): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pushtokens/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether the games client is out of date.
		 * Get revisions/check
		 * @param {string} clientRevision The revision of the client SDK used by your application. Format:
		 * [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:
		 *  
		 * - "ANDROID" - Client is running the Android SDK. 
		 * - "IOS" - Client is running the iOS SDK. 
		 * - "WEB_APP" - Client is running as a Web App.
		 * @return {void} Successful response
		 */
		Games_revisions_check(clientRevision: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'revisions/check?clientRevision=' + (clientRevision == null ? '' : encodeURIComponent(clientRevision)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns invitations to join rooms.
		 * Get rooms
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_rooms_list(language: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rooms?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/create
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_create(language: string, requestBody: RoomCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/create?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the data for a room.
		 * Get rooms/{roomId}
		 * @param {string} roomId The ID of the room.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_get(roomId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/{roomId}/decline
		 * @param {string} roomId The ID of the room.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_decline(roomId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/decline&language=' + (language == null ? '' : encodeURIComponent(language)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/{roomId}/dismiss
		 * @param {string} roomId The ID of the room.
		 * @return {void} Successful response
		 */
		Games_rooms_dismiss(roomId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/dismiss', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/{roomId}/join
		 * @param {string} roomId The ID of the room.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_join(roomId: string, language: string, requestBody: RoomJoinRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/join&language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/{roomId}/leave
		 * @param {string} roomId The ID of the room.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_leave(roomId: string, language: string, requestBody: RoomLeaveRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/leave&language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.
		 * Post rooms/{roomId}/reportstatus
		 * @param {string} roomId The ID of the room.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_rooms_reportStatus(roomId: string, language: string, requestBody: RoomP2PStatuses): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/reportstatus&language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata for a given snapshot ID.
		 * Get snapshots/{snapshotId}
		 * @param {string} snapshotId The ID of the snapshot.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_snapshots_get(snapshotId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns turn-based matches the player is or was involved in.
		 * Get turnbasedmatches
		 * @param {boolean} includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
		 * @param {number} maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_list(includeMatchData: boolean, language: string, maxCompletedMatches: number, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'turnbasedmatches?includeMatchData=' + includeMatchData + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxCompletedMatches=' + maxCompletedMatches + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a turn-based match.
		 * Post turnbasedmatches/create
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_create(language: string, requestBody: TurnBasedMatchCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'turnbasedmatches/create?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.
		 * Get turnbasedmatches/sync
		 * @param {boolean} includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
		 * @param {number} maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_sync(includeMatchData: boolean, language: string, maxCompletedMatches: number, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'turnbasedmatches/sync?includeMatchData=' + includeMatchData + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxCompletedMatches=' + maxCompletedMatches + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the data for a turn-based match.
		 * Get turnbasedmatches/{matchId}
		 * @param {string} matchId The ID of the match.
		 * @param {boolean} includeMatchData Get match data along with metadata.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_get(matchId: string, includeMatchData: boolean, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '&includeMatchData=' + includeMatchData + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a turn-based match.
		 * Put turnbasedmatches/{matchId}/cancel
		 * @param {string} matchId The ID of the match.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_cancel(matchId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Decline an invitation to play a turn-based match.
		 * Put turnbasedmatches/{matchId}/decline
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_decline(matchId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/decline&language=' + (language == null ? '' : encodeURIComponent(language)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.
		 * Put turnbasedmatches/{matchId}/dismiss
		 * @param {string} matchId The ID of the match.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_dismiss(matchId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/dismiss', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.
		 * Put turnbasedmatches/{matchId}/finish
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_finish(matchId: string, language: string, requestBody: TurnBasedMatchResults): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/finish&language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Join a turn-based match.
		 * Put turnbasedmatches/{matchId}/join
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_join(matchId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/join&language=' + (language == null ? '' : encodeURIComponent(language)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Leave a turn-based match when it is not the current player's turn, without canceling the match.
		 * Put turnbasedmatches/{matchId}/leave
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_leave(matchId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/leave&language=' + (language == null ? '' : encodeURIComponent(language)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Leave a turn-based match during the current player's turn, without canceling the match.
		 * Put turnbasedmatches/{matchId}/leaveTurn
		 * @param {string} matchId The ID of the match.
		 * @param {number} matchVersion The version of the match being updated.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {string} pendingParticipantId The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_leaveTurn(matchId: string, matchVersion: number, language: string, pendingParticipantId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/leaveTurn&matchVersion=' + matchVersion + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&pendingParticipantId=' + (pendingParticipantId == null ? '' : encodeURIComponent(pendingParticipantId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.
		 * Post turnbasedmatches/{matchId}/rematch
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {string} requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_rematch(matchId: string, language: string, requestId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/rematch&language=' + (language == null ? '' : encodeURIComponent(language)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Commit the results of a player turn.
		 * Put turnbasedmatches/{matchId}/turn
		 * @param {string} matchId The ID of the match.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {void} Successful response
		 */
		Games_turnBasedMatches_takeTurn(matchId: string, language: string, requestBody: TurnBasedMatchTurn): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'turnbasedmatches/' + (matchId == null ? '' : encodeURIComponent(matchId)) + '/turn&language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Games_applications_getPlatformType { ANDROID = 0, IOS = 1, WEB_APP = 2 }

	export enum Games_scores_listCollection { PUBLIC = 0, SOCIAL = 1 }

	export enum Games_scores_listTimeSpan { ALL_TIME = 0, DAILY = 1, WEEKLY = 2 }

	export enum Games_players_listCollection { connected = 0, friends_all = 1, playedWith = 2, played_with = 3, visible = 4 }

	export enum Games_achievements_listState { ALL = 0, HIDDEN = 1, REVEALED = 2, UNLOCKED = 3 }

	export enum Games_metagame_listCategoriesByPlayerCollection { all = 0 }

	export enum Games_scores_getTimeSpan { ALL = 0, ALL_TIME = 1, DAILY = 2, WEEKLY = 3 }

	export enum Games_scores_getIncludeRankType { ALL = 0, PUBLIC = 1, SOCIAL = 2 }

}

