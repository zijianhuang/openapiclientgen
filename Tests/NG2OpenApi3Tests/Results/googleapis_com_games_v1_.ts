import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An achievement definition object. */
	export interface AchievementDefinition {

		/** The type of the achievement. */
		achievementType?: AchievementDefinitionAchievementType | null;

		/** The description of the achievement. */
		description?: string | null;

		/** Experience points which will be earned when unlocking this achievement. */
		experiencePoints?: string | null;

		/** The total steps for an incremental achievement as a string. */
		formattedTotalSteps?: string | null;

		/** The ID of the achievement. */
		id?: string | null;

		/** The initial state of the achievement. */
		initialState?: AchievementDefinitionInitialState | null;

		/** Indicates whether the revealed icon image being returned is a default image, or is provided by the game. */
		isRevealedIconUrlDefault?: boolean | null;

		/** Indicates whether the unlocked icon image being returned is a default image, or is game-provided. */
		isUnlockedIconUrlDefault?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`. */
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

	/** An achievement definition object. */
	export interface AchievementDefinitionFormProperties {

		/** The type of the achievement. */
		achievementType: FormControl<AchievementDefinitionAchievementType | null | undefined>,

		/** The description of the achievement. */
		description: FormControl<string | null | undefined>,

		/** Experience points which will be earned when unlocking this achievement. */
		experiencePoints: FormControl<string | null | undefined>,

		/** The total steps for an incremental achievement as a string. */
		formattedTotalSteps: FormControl<string | null | undefined>,

		/** The ID of the achievement. */
		id: FormControl<string | null | undefined>,

		/** The initial state of the achievement. */
		initialState: FormControl<AchievementDefinitionInitialState | null | undefined>,

		/** Indicates whether the revealed icon image being returned is a default image, or is provided by the game. */
		isRevealedIconUrlDefault: FormControl<boolean | null | undefined>,

		/** Indicates whether the unlocked icon image being returned is a default image, or is game-provided. */
		isUnlockedIconUrlDefault: FormControl<boolean | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the achievement. */
		name: FormControl<string | null | undefined>,

		/** The image URL for the revealed achievement icon. */
		revealedIconUrl: FormControl<string | null | undefined>,

		/** The total steps for an incremental achievement. */
		totalSteps: FormControl<number | null | undefined>,

		/** The image URL for the unlocked achievement icon. */
		unlockedIconUrl: FormControl<string | null | undefined>,
	}
	export function CreateAchievementDefinitionFormGroup() {
		return new FormGroup<AchievementDefinitionFormProperties>({
			achievementType: new FormControl<AchievementDefinitionAchievementType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			experiencePoints: new FormControl<string | null | undefined>(undefined),
			formattedTotalSteps: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialState: new FormControl<AchievementDefinitionInitialState | null | undefined>(undefined),
			isRevealedIconUrlDefault: new FormControl<boolean | null | undefined>(undefined),
			isUnlockedIconUrlDefault: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revealedIconUrl: new FormControl<string | null | undefined>(undefined),
			totalSteps: new FormControl<number | null | undefined>(undefined),
			unlockedIconUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AchievementDefinitionAchievementType { STANDARD = 0, INCREMENTAL = 1 }

	export enum AchievementDefinitionInitialState { HIDDEN = 0, REVEALED = 1, UNLOCKED = 2 }


	/** A list of achievement definition objects. */
	export interface AchievementDefinitionsListResponse {

		/** The achievement definitions. */
		items?: Array<AchievementDefinition>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of achievement definition objects. */
	export interface AchievementDefinitionsListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAchievementDefinitionsListResponseFormGroup() {
		return new FormGroup<AchievementDefinitionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An achievement increment response */
	export interface AchievementIncrementResponse {

		/** The current steps recorded for this incremental achievement. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`. */
		kind?: string | null;

		/** Whether the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked?: boolean | null;
	}

	/** An achievement increment response */
	export interface AchievementIncrementResponseFormProperties {

		/** The current steps recorded for this incremental achievement. */
		currentSteps: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Whether the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked: FormControl<boolean | null | undefined>,
	}
	export function CreateAchievementIncrementResponseFormGroup() {
		return new FormGroup<AchievementIncrementResponseFormProperties>({
			currentSteps: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newlyUnlocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An achievement reveal response */
	export interface AchievementRevealResponse {

		/** The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked. */
		currentState?: AchievementRevealResponseCurrentState | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`. */
		kind?: string | null;
	}

	/** An achievement reveal response */
	export interface AchievementRevealResponseFormProperties {

		/** The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked. */
		currentState: FormControl<AchievementRevealResponseCurrentState | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAchievementRevealResponseFormGroup() {
		return new FormGroup<AchievementRevealResponseFormProperties>({
			currentState: new FormControl<AchievementRevealResponseCurrentState | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AchievementRevealResponseCurrentState { REVEALED = 0, UNLOCKED = 1 }


	/** An achievement set steps at least response. */
	export interface AchievementSetStepsAtLeastResponse {

		/** The current steps recorded for this incremental achievement. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`. */
		kind?: string | null;

		/** Whether the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked?: boolean | null;
	}

	/** An achievement set steps at least response. */
	export interface AchievementSetStepsAtLeastResponseFormProperties {

		/** The current steps recorded for this incremental achievement. */
		currentSteps: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Whether the current steps for the achievement has reached the number of steps required to unlock. */
		newlyUnlocked: FormControl<boolean | null | undefined>,
	}
	export function CreateAchievementSetStepsAtLeastResponseFormGroup() {
		return new FormGroup<AchievementSetStepsAtLeastResponseFormProperties>({
			currentSteps: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newlyUnlocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An achievement unlock response */
	export interface AchievementUnlockResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`. */
		kind?: string | null;

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked?: boolean | null;
	}

	/** An achievement unlock response */
	export interface AchievementUnlockResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked: FormControl<boolean | null | undefined>,
	}
	export function CreateAchievementUnlockResponseFormGroup() {
		return new FormGroup<AchievementUnlockResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			newlyUnlocked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of achievement update requests. */
	export interface AchievementUpdateMultipleRequest {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`. */
		kind?: string | null;

		/** The individual achievement update requests. */
		updates?: Array<AchievementUpdateRequest>;
	}

	/** A list of achievement update requests. */
	export interface AchievementUpdateMultipleRequestFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAchievementUpdateMultipleRequestFormGroup() {
		return new FormGroup<AchievementUpdateMultipleRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an achievement. */
	export interface AchievementUpdateRequest {

		/** The achievement this update is being applied to. */
		achievementId?: string | null;

		/** The payload to request to increment an achievement. */
		incrementPayload?: GamesAchievementIncrement;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`. */
		kind?: string | null;

		/** The payload to request to increment an achievement. */
		setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast;

		/** The type of update being applied. */
		updateType?: AchievementUpdateRequestUpdateType | null;
	}

	/** A request to update an achievement. */
	export interface AchievementUpdateRequestFormProperties {

		/** The achievement this update is being applied to. */
		achievementId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`. */
		kind: FormControl<string | null | undefined>,

		/** The type of update being applied. */
		updateType: FormControl<AchievementUpdateRequestUpdateType | null | undefined>,
	}
	export function CreateAchievementUpdateRequestFormGroup() {
		return new FormGroup<AchievementUpdateRequestFormProperties>({
			achievementId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updateType: new FormControl<AchievementUpdateRequestUpdateType | null | undefined>(undefined),
		});

	}


	/** The payload to request to increment an achievement. */
	export interface GamesAchievementIncrement {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`. */
		kind?: string | null;

		/** The requestId associated with an increment to an achievement. */
		requestId?: string | null;

		/** The number of steps to be incremented. */
		steps?: number | null;
	}

	/** The payload to request to increment an achievement. */
	export interface GamesAchievementIncrementFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`. */
		kind: FormControl<string | null | undefined>,

		/** The requestId associated with an increment to an achievement. */
		requestId: FormControl<string | null | undefined>,

		/** The number of steps to be incremented. */
		steps: FormControl<number | null | undefined>,
	}
	export function CreateGamesAchievementIncrementFormGroup() {
		return new FormGroup<GamesAchievementIncrementFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			steps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The payload to request to increment an achievement. */
	export interface GamesAchievementSetStepsAtLeast {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`. */
		kind?: string | null;

		/** The minimum number of steps for the achievement to be set to. */
		steps?: number | null;
	}

	/** The payload to request to increment an achievement. */
	export interface GamesAchievementSetStepsAtLeastFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`. */
		kind: FormControl<string | null | undefined>,

		/** The minimum number of steps for the achievement to be set to. */
		steps: FormControl<number | null | undefined>,
	}
	export function CreateGamesAchievementSetStepsAtLeastFormGroup() {
		return new FormGroup<GamesAchievementSetStepsAtLeastFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			steps: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AchievementUpdateRequestUpdateType { REVEAL = 0, UNLOCK = 1, INCREMENT = 2, SET_STEPS_AT_LEAST = 3 }


	/** Response message for UpdateMultipleAchievements rpc. */
	export interface AchievementUpdateMultipleResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`. */
		kind?: string | null;

		/** The updated state of the achievements. */
		updatedAchievements?: Array<AchievementUpdateResponse>;
	}

	/** Response message for UpdateMultipleAchievements rpc. */
	export interface AchievementUpdateMultipleResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAchievementUpdateMultipleResponseFormGroup() {
		return new FormGroup<AchievementUpdateMultipleResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An updated achievement. */
	export interface AchievementUpdateResponse {

		/** The achievement this update is was applied to. */
		achievementId?: string | null;

		/** The current state of the achievement. */
		currentState?: AchievementDefinitionInitialState | null;

		/** The current steps recorded for this achievement if it is incremental. */
		currentSteps?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`. */
		kind?: string | null;

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked?: boolean | null;

		/** Whether the requested updates actually affected the achievement. */
		updateOccurred?: boolean | null;
	}

	/** An updated achievement. */
	export interface AchievementUpdateResponseFormProperties {

		/** The achievement this update is was applied to. */
		achievementId: FormControl<string | null | undefined>,

		/** The current state of the achievement. */
		currentState: FormControl<AchievementDefinitionInitialState | null | undefined>,

		/** The current steps recorded for this achievement if it is incremental. */
		currentSteps: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). */
		newlyUnlocked: FormControl<boolean | null | undefined>,

		/** Whether the requested updates actually affected the achievement. */
		updateOccurred: FormControl<boolean | null | undefined>,
	}
	export function CreateAchievementUpdateResponseFormGroup() {
		return new FormGroup<AchievementUpdateResponseFormProperties>({
			achievementId: new FormControl<string | null | undefined>(undefined),
			currentState: new FormControl<AchievementDefinitionInitialState | null | undefined>(undefined),
			currentSteps: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newlyUnlocked: new FormControl<boolean | null | undefined>(undefined),
			updateOccurred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Application resource. */
	export interface Application {

		/** The number of achievements visible to the currently authenticated player. */
		achievement_count?: number | null;

		/** The assets of the application. */
		assets?: Array<ImageAsset>;

		/** The author of the application. */
		author?: string | null;

		/** An application category object. */
		category?: ApplicationCategory;

		/** The description of the application. */
		description?: string | null;

		/** A list of features that have been enabled for the application. */
		enabledFeatures?: Array<string>;

		/** The ID of the application. */
		id?: string | null;

		/** The instances of the application. */
		instances?: Array<Instance>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#application`. */
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

	/** The Application resource. */
	export interface ApplicationFormProperties {

		/** The number of achievements visible to the currently authenticated player. */
		achievement_count: FormControl<number | null | undefined>,

		/** The author of the application. */
		author: FormControl<string | null | undefined>,

		/** The description of the application. */
		description: FormControl<string | null | undefined>,

		/** The ID of the application. */
		id: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#application`. */
		kind: FormControl<string | null | undefined>,

		/** The last updated timestamp of the application. */
		lastUpdatedTimestamp: FormControl<string | null | undefined>,

		/** The number of leaderboards visible to the currently authenticated player. */
		leaderboard_count: FormControl<number | null | undefined>,

		/** The name of the application. */
		name: FormControl<string | null | undefined>,

		/** A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0"). */
		themeColor: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			achievement_count: new FormControl<number | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			leaderboard_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeColor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image asset object. */
	export interface ImageAsset {

		/** The height of the asset. */
		height?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`. */
		kind?: string | null;

		/** The name of the asset. */
		name?: string | null;

		/** The URL of the asset. */
		url?: string | null;

		/** The width of the asset. */
		width?: number | null;
	}

	/** An image asset object. */
	export interface ImageAssetFormProperties {

		/** The height of the asset. */
		height: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the asset. */
		name: FormControl<string | null | undefined>,

		/** The URL of the asset. */
		url: FormControl<string | null | undefined>,

		/** The width of the asset. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageAssetFormGroup() {
		return new FormGroup<ImageAssetFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An application category object. */
	export interface ApplicationCategory {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`. */
		kind?: string | null;

		/** The primary category. */
		primary?: string | null;

		/** The secondary category. */
		secondary?: string | null;
	}

	/** An application category object. */
	export interface ApplicationCategoryFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`. */
		kind: FormControl<string | null | undefined>,

		/** The primary category. */
		primary: FormControl<string | null | undefined>,

		/** The secondary category. */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateApplicationCategoryFormGroup() {
		return new FormGroup<ApplicationCategoryFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Instance resource. */
	export interface Instance {

		/** URI which shows where a user can acquire this instance. */
		acquisitionUri?: string | null;

		/** The Android instance details resource. */
		androidInstance?: InstanceAndroidDetails;

		/** The iOS details resource. */
		iosInstance?: InstanceIosDetails;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`. */
		kind?: string | null;

		/** Localized display name. */
		name?: string | null;

		/** The platform type. */
		platformType?: InstancePlatformType | null;

		/** Flag to show if this game instance supports realtime play. */
		realtimePlay?: boolean | null;

		/** Flag to show if this game instance supports turn based play. */
		turnBasedPlay?: boolean | null;

		/** The Web details resource. */
		webInstance?: InstanceWebDetails;
	}

	/** The Instance resource. */
	export interface InstanceFormProperties {

		/** URI which shows where a user can acquire this instance. */
		acquisitionUri: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`. */
		kind: FormControl<string | null | undefined>,

		/** Localized display name. */
		name: FormControl<string | null | undefined>,

		/** The platform type. */
		platformType: FormControl<InstancePlatformType | null | undefined>,

		/** Flag to show if this game instance supports realtime play. */
		realtimePlay: FormControl<boolean | null | undefined>,

		/** Flag to show if this game instance supports turn based play. */
		turnBasedPlay: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			acquisitionUri: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platformType: new FormControl<InstancePlatformType | null | undefined>(undefined),
			realtimePlay: new FormControl<boolean | null | undefined>(undefined),
			turnBasedPlay: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Android instance details resource. */
	export interface InstanceAndroidDetails {

		/** Flag indicating whether the anti-piracy check is enabled. */
		enablePiracyCheck?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`. */
		kind?: string | null;

		/** Android package name which maps to Google Play URL. */
		packageName?: string | null;

		/** Indicates that this instance is the default for new installations. */
		preferred?: boolean | null;
	}

	/** The Android instance details resource. */
	export interface InstanceAndroidDetailsFormProperties {

		/** Flag indicating whether the anti-piracy check is enabled. */
		enablePiracyCheck: FormControl<boolean | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`. */
		kind: FormControl<string | null | undefined>,

		/** Android package name which maps to Google Play URL. */
		packageName: FormControl<string | null | undefined>,

		/** Indicates that this instance is the default for new installations. */
		preferred: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceAndroidDetailsFormGroup() {
		return new FormGroup<InstanceAndroidDetailsFormProperties>({
			enablePiracyCheck: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The iOS details resource. */
	export interface InstanceIosDetails {

		/** Bundle identifier. */
		bundleIdentifier?: string | null;

		/** iTunes App ID. */
		itunesAppId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`. */
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

	/** The iOS details resource. */
	export interface InstanceIosDetailsFormProperties {

		/** Bundle identifier. */
		bundleIdentifier: FormControl<string | null | undefined>,

		/** iTunes App ID. */
		itunesAppId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`. */
		kind: FormControl<string | null | undefined>,

		/** Indicates that this instance is the default for new installations on iPad devices. */
		preferredForIpad: FormControl<boolean | null | undefined>,

		/** Indicates that this instance is the default for new installations on iPhone devices. */
		preferredForIphone: FormControl<boolean | null | undefined>,

		/** Flag to indicate if this instance supports iPad. */
		supportIpad: FormControl<boolean | null | undefined>,

		/** Flag to indicate if this instance supports iPhone. */
		supportIphone: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceIosDetailsFormGroup() {
		return new FormGroup<InstanceIosDetailsFormProperties>({
			bundleIdentifier: new FormControl<string | null | undefined>(undefined),
			itunesAppId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			preferredForIpad: new FormControl<boolean | null | undefined>(undefined),
			preferredForIphone: new FormControl<boolean | null | undefined>(undefined),
			supportIpad: new FormControl<boolean | null | undefined>(undefined),
			supportIphone: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum InstancePlatformType { ANDROID = 0, IOS = 1, WEB_APP = 2 }


	/** The Web details resource. */
	export interface InstanceWebDetails {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`. */
		kind?: string | null;

		/** Launch URL for the game. */
		launchUrl?: string | null;

		/** Indicates that this instance is the default for new installations. */
		preferred?: boolean | null;
	}

	/** The Web details resource. */
	export interface InstanceWebDetailsFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`. */
		kind: FormControl<string | null | undefined>,

		/** Launch URL for the game. */
		launchUrl: FormControl<string | null | undefined>,

		/** Indicates that this instance is the default for new installations. */
		preferred: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceWebDetailsFormGroup() {
		return new FormGroup<InstanceWebDetailsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			launchUrl: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Primary scoped player identifier for an application. */
	export interface ApplicationPlayerId {

		/** The application that this player identifier is for. */
		applicationId?: string | null;

		/** The player identifier for the application. */
		playerId?: string | null;
	}

	/** Primary scoped player identifier for an application. */
	export interface ApplicationPlayerIdFormProperties {

		/** The application that this player identifier is for. */
		applicationId: FormControl<string | null | undefined>,

		/** The player identifier for the application. */
		playerId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPlayerIdFormGroup() {
		return new FormGroup<ApplicationPlayerIdFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A third party application verification response resource. */
	export interface ApplicationVerifyResponse {

		/** An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.) */
		alternate_player_id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`. */
		kind?: string | null;

		/** The ID of the player that was issued the auth token used in this request. */
		player_id?: string | null;
	}

	/** A third party application verification response resource. */
	export interface ApplicationVerifyResponseFormProperties {

		/** An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.) */
		alternate_player_id: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The ID of the player that was issued the auth token used in this request. */
		player_id: FormControl<string | null | undefined>,
	}
	export function CreateApplicationVerifyResponseFormGroup() {
		return new FormGroup<ApplicationVerifyResponseFormProperties>({
			alternate_player_id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			player_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data related to individual game categories. */
	export interface Category {

		/** The category name. */
		category?: string | null;

		/** Experience points earned in this category. */
		experiencePoints?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#category`. */
		kind?: string | null;
	}

	/** Data related to individual game categories. */
	export interface CategoryFormProperties {

		/** The category name. */
		category: FormControl<string | null | undefined>,

		/** Experience points earned in this category. */
		experiencePoints: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#category`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			experiencePoints: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A third party list metagame categories response. */
	export interface CategoryListResponse {

		/** The list of categories with usage data. */
		items?: Array<Category>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}

	/** A third party list metagame categories response. */
	export interface CategoryListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCategoryListResponseFormGroup() {
		return new FormGroup<CategoryListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for a URL end point of the requested type. */
	export interface EndPoint {

		/** A URL suitable for loading in a web browser for the requested endpoint. */
		url?: string | null;
	}

	/** Container for a URL end point of the requested type. */
	export interface EndPointFormProperties {

		/** A URL suitable for loading in a web browser for the requested endpoint. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEndPointFormGroup() {
		return new FormGroup<EndPointFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch update failure resource. */
	export interface EventBatchRecordFailure {

		/** The cause for the update failure. */
		failureCause?: EventBatchRecordFailureFailureCause | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`. */
		kind?: string | null;

		/** An event period time range. */
		range?: EventPeriodRange;
	}

	/** A batch update failure resource. */
	export interface EventBatchRecordFailureFormProperties {

		/** The cause for the update failure. */
		failureCause: FormControl<EventBatchRecordFailureFailureCause | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventBatchRecordFailureFormGroup() {
		return new FormGroup<EventBatchRecordFailureFormProperties>({
			failureCause: new FormControl<EventBatchRecordFailureFailureCause | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventBatchRecordFailureFailureCause { TOO_LARGE = 0, TIME_PERIOD_EXPIRED = 1, TIME_PERIOD_SHORT = 2, TIME_PERIOD_LONG = 3, ALREADY_UPDATED = 4, RECORD_RATE_HIGH = 5 }


	/** An event period time range. */
	export interface EventPeriodRange {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`. */
		kind?: string | null;

		/** The time when this update period ends, in millis, since 1970 UTC (Unix Epoch). */
		periodEndMillis?: string | null;

		/** The time when this update period begins, in millis, since 1970 UTC (Unix Epoch). */
		periodStartMillis?: string | null;
	}

	/** An event period time range. */
	export interface EventPeriodRangeFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`. */
		kind: FormControl<string | null | undefined>,

		/** The time when this update period ends, in millis, since 1970 UTC (Unix Epoch). */
		periodEndMillis: FormControl<string | null | undefined>,

		/** The time when this update period begins, in millis, since 1970 UTC (Unix Epoch). */
		periodStartMillis: FormControl<string | null | undefined>,
	}
	export function CreateEventPeriodRangeFormGroup() {
		return new FormGroup<EventPeriodRangeFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			periodEndMillis: new FormControl<string | null | undefined>(undefined),
			periodStartMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event child relationship resource. */
	export interface EventChild {

		/** The ID of the child event. */
		childId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`. */
		kind?: string | null;
	}

	/** An event child relationship resource. */
	export interface EventChildFormProperties {

		/** The ID of the child event. */
		childId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventChildFormGroup() {
		return new FormGroup<EventChildFormProperties>({
			childId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event definition resource. */
	export interface EventDefinition {

		/** A list of events that are a child of this event. */
		childEvents?: Array<EventChild>;

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

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`. */
		kind?: string | null;

		/** The visibility of event being tracked in this definition. */
		visibility?: EventDefinitionVisibility | null;
	}

	/** An event definition resource. */
	export interface EventDefinitionFormProperties {

		/** Description of what this event represents. */
		description: FormControl<string | null | undefined>,

		/** The name to display for the event. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the event. */
		id: FormControl<string | null | undefined>,

		/** The base URL for the image that represents the event. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether the icon image being returned is a default image, or is game-provided. */
		isDefaultImageUrl: FormControl<boolean | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`. */
		kind: FormControl<string | null | undefined>,

		/** The visibility of event being tracked in this definition. */
		visibility: FormControl<EventDefinitionVisibility | null | undefined>,
	}
	export function CreateEventDefinitionFormGroup() {
		return new FormGroup<EventDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isDefaultImageUrl: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<EventDefinitionVisibility | null | undefined>(undefined),
		});

	}

	export enum EventDefinitionVisibility { REVEALED = 0, HIDDEN = 1 }


	/** A ListDefinitions response. */
	export interface EventDefinitionListResponse {

		/** The event definitions. */
		items?: Array<EventDefinition>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListDefinitions response. */
	export interface EventDefinitionListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateEventDefinitionListResponseFormGroup() {
		return new FormGroup<EventDefinitionListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event period update resource. */
	export interface EventPeriodUpdate {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`. */
		kind?: string | null;

		/** An event period time range. */
		timePeriod?: EventPeriodRange;

		/** The updates being made for this time period. */
		updates?: Array<EventUpdateRequest>;
	}

	/** An event period update resource. */
	export interface EventPeriodUpdateFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventPeriodUpdateFormGroup() {
		return new FormGroup<EventPeriodUpdateFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event period update resource. */
	export interface EventUpdateRequest {

		/** The ID of the event being modified in this update. */
		definitionId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`. */
		kind?: string | null;

		/** The number of times this event occurred in this time period. */
		updateCount?: string | null;
	}

	/** An event period update resource. */
	export interface EventUpdateRequestFormProperties {

		/** The ID of the event being modified in this update. */
		definitionId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`. */
		kind: FormControl<string | null | undefined>,

		/** The number of times this event occurred in this time period. */
		updateCount: FormControl<string | null | undefined>,
	}
	export function CreateEventUpdateRequestFormGroup() {
		return new FormGroup<EventUpdateRequestFormProperties>({
			definitionId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updateCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event update failure resource. */
	export interface EventRecordFailure {

		/** The ID of the event that was not updated. */
		eventId?: string | null;

		/** The cause for the update failure. */
		failureCause?: EventRecordFailureFailureCause | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`. */
		kind?: string | null;
	}

	/** An event update failure resource. */
	export interface EventRecordFailureFormProperties {

		/** The ID of the event that was not updated. */
		eventId: FormControl<string | null | undefined>,

		/** The cause for the update failure. */
		failureCause: FormControl<EventRecordFailureFailureCause | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventRecordFailureFormGroup() {
		return new FormGroup<EventRecordFailureFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			failureCause: new FormControl<EventRecordFailureFailureCause | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventRecordFailureFailureCause { NOT_FOUND = 0, INVALID_UPDATE_VALUE = 1 }


	/** An event period update resource. */
	export interface EventRecordRequest {

		/** The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch). */
		currentTimeMillis?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`. */
		kind?: string | null;

		/** The request ID used to identify this attempt to record events. */
		requestId?: string | null;

		/** A list of the time period updates being made in this request. */
		timePeriods?: Array<EventPeriodUpdate>;
	}

	/** An event period update resource. */
	export interface EventRecordRequestFormProperties {

		/** The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch). */
		currentTimeMillis: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`. */
		kind: FormControl<string | null | undefined>,

		/** The request ID used to identify this attempt to record events. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateEventRecordRequestFormGroup() {
		return new FormGroup<EventRecordRequestFormProperties>({
			currentTimeMillis: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event period update resource. */
	export interface EventUpdateResponse {

		/** Any batch-wide failures which occurred applying updates. */
		batchFailures?: Array<EventBatchRecordFailure>;

		/** Any failures updating a particular event. */
		eventFailures?: Array<EventRecordFailure>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`. */
		kind?: string | null;

		/** The current status of any updated events */
		playerEvents?: Array<PlayerEvent>;
	}

	/** An event period update resource. */
	export interface EventUpdateResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventUpdateResponseFormGroup() {
		return new FormGroup<EventUpdateResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event status resource. */
	export interface PlayerEvent {

		/** The ID of the event definition. */
		definitionId?: string | null;

		/** The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console. */
		formattedNumEvents?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`. */
		kind?: string | null;

		/** The current number of times this event has occurred. */
		numEvents?: string | null;

		/** The ID of the player. */
		playerId?: string | null;
	}

	/** An event status resource. */
	export interface PlayerEventFormProperties {

		/** The ID of the event definition. */
		definitionId: FormControl<string | null | undefined>,

		/** The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console. */
		formattedNumEvents: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`. */
		kind: FormControl<string | null | undefined>,

		/** The current number of times this event has occurred. */
		numEvents: FormControl<string | null | undefined>,

		/** The ID of the player. */
		playerId: FormControl<string | null | undefined>,
	}
	export function CreatePlayerEventFormGroup() {
		return new FormGroup<PlayerEventFormProperties>({
			definitionId: new FormControl<string | null | undefined>(undefined),
			formattedNumEvents: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numEvents: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for GetMultipleApplicationPlayerIds rpc. */
	export interface GetMultipleApplicationPlayerIdsResponse {

		/** Output only. The requested applications along with the scoped ids for tha player, if that player has an id for the application. If not, the application is not included in the response. */
		playerIds?: Array<ApplicationPlayerId>;
	}

	/** Response message for GetMultipleApplicationPlayerIds rpc. */
	export interface GetMultipleApplicationPlayerIdsResponseFormProperties {
	}
	export function CreateGetMultipleApplicationPlayerIdsResponseFormGroup() {
		return new FormGroup<GetMultipleApplicationPlayerIdsResponseFormProperties>({
		});

	}


	/** The Leaderboard resource. */
	export interface Leaderboard {

		/** The icon for the leaderboard. */
		iconUrl?: string | null;

		/** The leaderboard ID. */
		id?: string | null;

		/** Indicates whether the icon image being returned is a default image, or is game-provided. */
		isIconUrlDefault?: boolean | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`. */
		kind?: string | null;

		/** The name of the leaderboard. */
		name?: string | null;

		/** How scores are ordered. */
		order?: LeaderboardOrder | null;
	}

	/** The Leaderboard resource. */
	export interface LeaderboardFormProperties {

		/** The icon for the leaderboard. */
		iconUrl: FormControl<string | null | undefined>,

		/** The leaderboard ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether the icon image being returned is a default image, or is game-provided. */
		isIconUrlDefault: FormControl<boolean | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the leaderboard. */
		name: FormControl<string | null | undefined>,

		/** How scores are ordered. */
		order: FormControl<LeaderboardOrder | null | undefined>,
	}
	export function CreateLeaderboardFormGroup() {
		return new FormGroup<LeaderboardFormProperties>({
			iconUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isIconUrlDefault: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<LeaderboardOrder | null | undefined>(undefined),
		});

	}

	export enum LeaderboardOrder { LARGER_IS_BETTER = 0, SMALLER_IS_BETTER = 1 }


	/** The Leaderboard Entry resource. */
	export interface LeaderboardEntry {

		/** The localized string for the numerical value of this score. */
		formattedScore?: string | null;

		/** The localized string for the rank of this score for this leaderboard. */
		formattedScoreRank?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`. */
		kind?: string | null;

		/** A Player resource. */
		player?: Player;

		/** The rank of this score for this leaderboard. */
		scoreRank?: string | null;

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The numerical value of this score. */
		scoreValue?: string | null;

		/** The time span of this high score. */
		timeSpan?: LeaderboardEntryTimeSpan | null;

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestampMillis?: string | null;
	}

	/** The Leaderboard Entry resource. */
	export interface LeaderboardEntryFormProperties {

		/** The localized string for the numerical value of this score. */
		formattedScore: FormControl<string | null | undefined>,

		/** The localized string for the rank of this score for this leaderboard. */
		formattedScoreRank: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`. */
		kind: FormControl<string | null | undefined>,

		/** The rank of this score for this leaderboard. */
		scoreRank: FormControl<string | null | undefined>,

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag: FormControl<string | null | undefined>,

		/** The numerical value of this score. */
		scoreValue: FormControl<string | null | undefined>,

		/** The time span of this high score. */
		timeSpan: FormControl<LeaderboardEntryTimeSpan | null | undefined>,

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardEntryFormGroup() {
		return new FormGroup<LeaderboardEntryFormProperties>({
			formattedScore: new FormControl<string | null | undefined>(undefined),
			formattedScoreRank: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			scoreRank: new FormControl<string | null | undefined>(undefined),
			scoreTag: new FormControl<string | null | undefined>(undefined),
			scoreValue: new FormControl<string | null | undefined>(undefined),
			timeSpan: new FormControl<LeaderboardEntryTimeSpan | null | undefined>(undefined),
			writeTimestampMillis: new FormControl<string | null | undefined>(undefined),
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
		experienceInfo?: PlayerExperienceInfo;

		/** The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game. */
		friendStatus?: PlayerFriendStatus | null;

		/** Per-application unique player identifier. */
		gamePlayerId?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#player` */
		kind?: string | null;

		/** A representation of the individual components of the name. */
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

		/** The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game. */
		friendStatus: FormControl<PlayerFriendStatus | null | undefined>,

		/** Per-application unique player identifier. */
		gamePlayerId: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#player` */
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
			friendStatus: new FormControl<PlayerFriendStatus | null | undefined>(undefined),
			gamePlayerId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			originalPlayerId: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** 1P/3P metadata about the player's experience. */
	export interface PlayerExperienceInfo {

		/** The current number of experience points for the player. */
		currentExperiencePoints?: string | null;

		/** 1P/3P metadata about a user's level. */
		currentLevel?: PlayerLevel;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`. */
		kind?: string | null;

		/** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
		lastLevelUpTimestampMillis?: string | null;

		/** 1P/3P metadata about a user's level. */
		nextLevel?: PlayerLevel;
	}

	/** 1P/3P metadata about the player's experience. */
	export interface PlayerExperienceInfoFormProperties {

		/** The current number of experience points for the player. */
		currentExperiencePoints: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`. */
		kind: FormControl<string | null | undefined>,

		/** The timestamp when the player was leveled up, in millis since Unix epoch UTC. */
		lastLevelUpTimestampMillis: FormControl<string | null | undefined>,
	}
	export function CreatePlayerExperienceInfoFormGroup() {
		return new FormGroup<PlayerExperienceInfoFormProperties>({
			currentExperiencePoints: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastLevelUpTimestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** 1P/3P metadata about a user's level. */
	export interface PlayerLevel {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`. */
		kind?: string | null;

		/** The level for the user. */
		level?: number | null;

		/** The maximum experience points for this level. */
		maxExperiencePoints?: string | null;

		/** The minimum experience points for this level. */
		minExperiencePoints?: string | null;
	}

	/** 1P/3P metadata about a user's level. */
	export interface PlayerLevelFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`. */
		kind: FormControl<string | null | undefined>,

		/** The level for the user. */
		level: FormControl<number | null | undefined>,

		/** The maximum experience points for this level. */
		maxExperiencePoints: FormControl<string | null | undefined>,

		/** The minimum experience points for this level. */
		minExperiencePoints: FormControl<string | null | undefined>,
	}
	export function CreatePlayerLevelFormGroup() {
		return new FormGroup<PlayerLevelFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			maxExperiencePoints: new FormControl<string | null | undefined>(undefined),
			minExperiencePoints: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlayerFriendStatus { NO_RELATIONSHIP = 0, FRIEND = 1 }

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
		friendsListVisibility?: ProfileSettingsFriendsListVisibility | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`. */
		kind?: string | null;

		/** Whether the player's profile is visible to the currently signed in player. */
		profileVisible?: boolean | null;
	}

	/** Profile settings */
	export interface ProfileSettingsFormProperties {
		friendsListVisibility: FormControl<ProfileSettingsFriendsListVisibility | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`. */
		kind: FormControl<string | null | undefined>,

		/** Whether the player's profile is visible to the currently signed in player. */
		profileVisible: FormControl<boolean | null | undefined>,
	}
	export function CreateProfileSettingsFormGroup() {
		return new FormGroup<ProfileSettingsFormProperties>({
			friendsListVisibility: new FormControl<ProfileSettingsFriendsListVisibility | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			profileVisible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ProfileSettingsFriendsListVisibility { VISIBLE = 0, REQUEST_REQUIRED = 1, UNAVAILABLE = 2 }

	export enum LeaderboardEntryTimeSpan { ALL_TIME = 0, WEEKLY = 1, DAILY = 2 }


	/** A list of leaderboard objects. */
	export interface LeaderboardListResponse {

		/** The leaderboards. */
		items?: Array<Leaderboard>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of leaderboard objects. */
	export interface LeaderboardListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardListResponseFormGroup() {
		return new FormGroup<LeaderboardListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A score rank in a leaderboard. */
	export interface LeaderboardScoreRank {

		/** The number of scores in the leaderboard as a string. */
		formattedNumScores?: string | null;

		/** The rank in the leaderboard as a string. */
		formattedRank?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`. */
		kind?: string | null;

		/** The number of scores in the leaderboard. */
		numScores?: string | null;

		/** The rank in the leaderboard. */
		rank?: string | null;
	}

	/** A score rank in a leaderboard. */
	export interface LeaderboardScoreRankFormProperties {

		/** The number of scores in the leaderboard as a string. */
		formattedNumScores: FormControl<string | null | undefined>,

		/** The rank in the leaderboard as a string. */
		formattedRank: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`. */
		kind: FormControl<string | null | undefined>,

		/** The number of scores in the leaderboard. */
		numScores: FormControl<string | null | undefined>,

		/** The rank in the leaderboard. */
		rank: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardScoreRankFormGroup() {
		return new FormGroup<LeaderboardScoreRankFormProperties>({
			formattedNumScores: new FormControl<string | null | undefined>(undefined),
			formattedRank: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numScores: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ListScores response. */
	export interface LeaderboardScores {

		/** The scores in the leaderboard. */
		items?: Array<LeaderboardEntry>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;

		/** The total number of scores in the leaderboard. */
		numScores?: string | null;

		/** The Leaderboard Entry resource. */
		playerScore?: LeaderboardEntry;

		/** The pagination token for the previous page of results. */
		prevPageToken?: string | null;
	}

	/** A ListScores response. */
	export interface LeaderboardScoresFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of scores in the leaderboard. */
		numScores: FormControl<string | null | undefined>,

		/** The pagination token for the previous page of results. */
		prevPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLeaderboardScoresFormGroup() {
		return new FormGroup<LeaderboardScoresFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			numScores: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to link an in-game account with a PGS principal (encoded in the session id). */
	export interface LinkPersonaRequest {

		/** Required. Cardinality constraint to observe when linking a persona to a player in the scope of a game. */
		cardinalityConstraint?: LinkPersonaRequestCardinalityConstraint | null;

		/** Required. Resolution policy to apply when the linking of a persona to a player would result in violating the specified cardinality constraint. */
		conflictingLinksResolutionPolicy?: LinkPersonaRequestConflictingLinksResolutionPolicy | null;

		/** Input only. Optional expiration time. */
		expireTime?: string | null;

		/** Required. Stable identifier of the in-game account. Please refrain from re-using the same persona for different games. */
		persona?: string | null;

		/** Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. */
		sessionId?: string | null;

		/** Required. Value of the token to create. Opaque to Play Games and assumed to be non-stable (encrypted with key rotation). */
		token?: string | null;

		/** Input only. Optional time-to-live. */
		ttl?: string | null;
	}

	/** Request to link an in-game account with a PGS principal (encoded in the session id). */
	export interface LinkPersonaRequestFormProperties {

		/** Required. Cardinality constraint to observe when linking a persona to a player in the scope of a game. */
		cardinalityConstraint: FormControl<LinkPersonaRequestCardinalityConstraint | null | undefined>,

		/** Required. Resolution policy to apply when the linking of a persona to a player would result in violating the specified cardinality constraint. */
		conflictingLinksResolutionPolicy: FormControl<LinkPersonaRequestConflictingLinksResolutionPolicy | null | undefined>,

		/** Input only. Optional expiration time. */
		expireTime: FormControl<string | null | undefined>,

		/** Required. Stable identifier of the in-game account. Please refrain from re-using the same persona for different games. */
		persona: FormControl<string | null | undefined>,

		/** Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. */
		sessionId: FormControl<string | null | undefined>,

		/** Required. Value of the token to create. Opaque to Play Games and assumed to be non-stable (encrypted with key rotation). */
		token: FormControl<string | null | undefined>,

		/** Input only. Optional time-to-live. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateLinkPersonaRequestFormGroup() {
		return new FormGroup<LinkPersonaRequestFormProperties>({
			cardinalityConstraint: new FormControl<LinkPersonaRequestCardinalityConstraint | null | undefined>(undefined),
			conflictingLinksResolutionPolicy: new FormControl<LinkPersonaRequestConflictingLinksResolutionPolicy | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			persona: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinkPersonaRequestCardinalityConstraint { ONE_PERSONA_TO_ONE_PLAYER = 0 }

	export enum LinkPersonaRequestConflictingLinksResolutionPolicy { KEEP_EXISTING_LINKS = 0, CREATE_NEW_LINK = 1 }


	/** Outcome of a persona linking attempt. */
	export interface LinkPersonaResponse {

		/** Output only. State of a persona linking attempt. */
		state?: LinkPersonaResponseState | null;
	}

	/** Outcome of a persona linking attempt. */
	export interface LinkPersonaResponseFormProperties {

		/** Output only. State of a persona linking attempt. */
		state: FormControl<LinkPersonaResponseState | null | undefined>,
	}
	export function CreateLinkPersonaResponseFormGroup() {
		return new FormGroup<LinkPersonaResponseFormProperties>({
			state: new FormControl<LinkPersonaResponseState | null | undefined>(undefined),
		});

	}

	export enum LinkPersonaResponseState { LINK_CREATED = 0, PERSONA_OR_PLAYER_ALREADY_LINKED = 1 }


	/** The metagame config resource */
	export interface MetagameConfig {

		/** Current version of the metagame configuration data. When this data is updated, the version number will be increased by one. */
		currentVersion?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`. */
		kind?: string | null;

		/** The list of player levels. */
		playerLevels?: Array<PlayerLevel>;
	}

	/** The metagame config resource */
	export interface MetagameConfigFormProperties {

		/** Current version of the metagame configuration data. When this data is updated, the version number will be increased by one. */
		currentVersion: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMetagameConfigFormGroup() {
		return new FormGroup<MetagameConfigFormProperties>({
			currentVersion: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An achievement object. */
	export interface PlayerAchievement {

		/** The state of the achievement. */
		achievementState?: AchievementDefinitionInitialState | null;

		/** The current steps for an incremental achievement. */
		currentSteps?: number | null;

		/** Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished. */
		experiencePoints?: string | null;

		/** The current steps for an incremental achievement as a string. */
		formattedCurrentStepsString?: string | null;

		/** The ID of the achievement. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`. */
		kind?: string | null;

		/** The timestamp of the last modification to this achievement's state. */
		lastUpdatedTimestamp?: string | null;
	}

	/** An achievement object. */
	export interface PlayerAchievementFormProperties {

		/** The state of the achievement. */
		achievementState: FormControl<AchievementDefinitionInitialState | null | undefined>,

		/** The current steps for an incremental achievement. */
		currentSteps: FormControl<number | null | undefined>,

		/** Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished. */
		experiencePoints: FormControl<string | null | undefined>,

		/** The current steps for an incremental achievement as a string. */
		formattedCurrentStepsString: FormControl<string | null | undefined>,

		/** The ID of the achievement. */
		id: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`. */
		kind: FormControl<string | null | undefined>,

		/** The timestamp of the last modification to this achievement's state. */
		lastUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreatePlayerAchievementFormGroup() {
		return new FormGroup<PlayerAchievementFormProperties>({
			achievementState: new FormControl<AchievementDefinitionInitialState | null | undefined>(undefined),
			currentSteps: new FormControl<number | null | undefined>(undefined),
			experiencePoints: new FormControl<string | null | undefined>(undefined),
			formattedCurrentStepsString: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of achievement objects. */
	export interface PlayerAchievementListResponse {

		/** The achievements. */
		items?: Array<PlayerAchievement>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of achievement objects. */
	export interface PlayerAchievementListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlayerAchievementListResponseFormGroup() {
		return new FormGroup<PlayerAchievementListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ListByPlayer response. */
	export interface PlayerEventListResponse {

		/** The player events. */
		items?: Array<PlayerEvent>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** A ListByPlayer response. */
	export interface PlayerEventListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlayerEventListResponseFormGroup() {
		return new FormGroup<PlayerEventListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A player leaderboard score object. */
	export interface PlayerLeaderboardScore {

		/** A score rank in a leaderboard. */
		friendsRank?: LeaderboardScoreRank;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`. */
		kind?: string | null;

		/** The ID of the leaderboard this score is in. */
		leaderboard_id?: string | null;

		/** A score rank in a leaderboard. */
		publicRank?: LeaderboardScoreRank;

		/** The formatted value of this score. */
		scoreString?: string | null;

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The numerical value of this score. */
		scoreValue?: string | null;

		/** A score rank in a leaderboard. */
		socialRank?: LeaderboardScoreRank;

		/** The time span of this score. */
		timeSpan?: LeaderboardEntryTimeSpan | null;

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestamp?: string | null;
	}

	/** A player leaderboard score object. */
	export interface PlayerLeaderboardScoreFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`. */
		kind: FormControl<string | null | undefined>,

		/** The ID of the leaderboard this score is in. */
		leaderboard_id: FormControl<string | null | undefined>,

		/** The formatted value of this score. */
		scoreString: FormControl<string | null | undefined>,

		/** Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag: FormControl<string | null | undefined>,

		/** The numerical value of this score. */
		scoreValue: FormControl<string | null | undefined>,

		/** The time span of this score. */
		timeSpan: FormControl<LeaderboardEntryTimeSpan | null | undefined>,

		/** The timestamp at which this score was recorded, in milliseconds since the epoch in UTC. */
		writeTimestamp: FormControl<string | null | undefined>,
	}
	export function CreatePlayerLeaderboardScoreFormGroup() {
		return new FormGroup<PlayerLeaderboardScoreFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			leaderboard_id: new FormControl<string | null | undefined>(undefined),
			scoreString: new FormControl<string | null | undefined>(undefined),
			scoreTag: new FormControl<string | null | undefined>(undefined),
			scoreValue: new FormControl<string | null | undefined>(undefined),
			timeSpan: new FormControl<LeaderboardEntryTimeSpan | null | undefined>(undefined),
			writeTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of player leaderboard scores. */
	export interface PlayerLeaderboardScoreListResponse {

		/** The leaderboard scores. */
		items?: Array<PlayerLeaderboardScore>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`. */
		kind?: string | null;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;

		/** A Player resource. */
		player?: Player;
	}

	/** A list of player leaderboard scores. */
	export interface PlayerLeaderboardScoreListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlayerLeaderboardScoreListResponseFormGroup() {
		return new FormGroup<PlayerLeaderboardScoreListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A third party player list response. */
	export interface PlayerListResponse {

		/** The players. */
		items?: Array<Player>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. */
		nextPageToken?: string | null;
	}

	/** A third party player list response. */
	export interface PlayerListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlayerListResponseFormGroup() {
		return new FormGroup<PlayerListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A player score. */
	export interface PlayerScore {

		/** The formatted score for this player score. */
		formattedScore?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`. */
		kind?: string | null;

		/** The numerical value for this player score. */
		score?: string | null;

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The time span for this player score. */
		timeSpan?: LeaderboardEntryTimeSpan | null;
	}

	/** A player score. */
	export interface PlayerScoreFormProperties {

		/** The formatted score for this player score. */
		formattedScore: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`. */
		kind: FormControl<string | null | undefined>,

		/** The numerical value for this player score. */
		score: FormControl<string | null | undefined>,

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag: FormControl<string | null | undefined>,

		/** The time span for this player score. */
		timeSpan: FormControl<LeaderboardEntryTimeSpan | null | undefined>,
	}
	export function CreatePlayerScoreFormGroup() {
		return new FormGroup<PlayerScoreFormProperties>({
			formattedScore: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<string | null | undefined>(undefined),
			scoreTag: new FormControl<string | null | undefined>(undefined),
			timeSpan: new FormControl<LeaderboardEntryTimeSpan | null | undefined>(undefined),
		});

	}


	/** A list of score submission statuses. */
	export interface PlayerScoreListResponse {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`. */
		kind?: string | null;

		/** The score submissions statuses. */
		submittedScores?: Array<PlayerScoreResponse>;
	}

	/** A list of score submission statuses. */
	export interface PlayerScoreListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlayerScoreListResponseFormGroup() {
		return new FormGroup<PlayerScoreListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of leaderboard entry resources. */
	export interface PlayerScoreResponse {

		/** The time spans where the submitted score is better than the existing score for that time span. */
		beatenScoreTimeSpans?: Array<LeaderboardEntryTimeSpan>;

		/** The formatted value of the submitted score. */
		formattedScore?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`. */
		kind?: string | null;

		/** The leaderboard ID that this score was submitted to. */
		leaderboardId?: string | null;

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's `DAILY` score, but not better than the player's scores for the `WEEKLY` or `ALL_TIME` time spans. */
		unbeatenScores?: Array<PlayerScore>;
	}

	/** A list of leaderboard entry resources. */
	export interface PlayerScoreResponseFormProperties {

		/** The formatted value of the submitted score. */
		formattedScore: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The leaderboard ID that this score was submitted to. */
		leaderboardId: FormControl<string | null | undefined>,

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag: FormControl<string | null | undefined>,
	}
	export function CreatePlayerScoreResponseFormGroup() {
		return new FormGroup<PlayerScoreResponseFormProperties>({
			formattedScore: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			leaderboardId: new FormControl<string | null | undefined>(undefined),
			scoreTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of score submission requests. */
	export interface PlayerScoreSubmissionList {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`. */
		kind?: string | null;

		/** The score submissions. */
		scores?: Array<ScoreSubmission>;
	}

	/** A list of score submission requests. */
	export interface PlayerScoreSubmissionListFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlayerScoreSubmissionListFormGroup() {
		return new FormGroup<PlayerScoreSubmissionListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to submit a score to leaderboards. */
	export interface ScoreSubmission {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`. */
		kind?: string | null;

		/** The leaderboard this score is being submitted to. */
		leaderboardId?: string | null;

		/** The new score being submitted. */
		score?: string | null;

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag?: string | null;

		/** Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986. */
		signature?: string | null;
	}

	/** A request to submit a score to leaderboards. */
	export interface ScoreSubmissionFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`. */
		kind: FormControl<string | null | undefined>,

		/** The leaderboard this score is being submitted to. */
		leaderboardId: FormControl<string | null | undefined>,

		/** The new score being submitted. */
		score: FormControl<string | null | undefined>,

		/** Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. */
		scoreTag: FormControl<string | null | undefined>,

		/** Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateScoreSubmissionFormGroup() {
		return new FormGroup<ScoreSubmissionFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			leaderboardId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<string | null | undefined>(undefined),
			scoreTag: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recall token data returned from RetrievePlayerTokens RPC */
	export interface RecallToken {

		/** Optional. Optional expiration time of the token */
		expireTime?: string | null;

		/** Required. Whether the persona identified by the token is linked to multiple PGS Players */
		multiPlayerPersona?: boolean | null;

		/** Required. Value of the Recall token as it is provided by the client via LinkPersona RPC */
		token?: string | null;
	}

	/** Recall token data returned from RetrievePlayerTokens RPC */
	export interface RecallTokenFormProperties {

		/** Optional. Optional expiration time of the token */
		expireTime: FormControl<string | null | undefined>,

		/** Required. Whether the persona identified by the token is linked to multiple PGS Players */
		multiPlayerPersona: FormControl<boolean | null | undefined>,

		/** Required. Value of the Recall token as it is provided by the client via LinkPersona RPC */
		token: FormControl<string | null | undefined>,
	}
	export function CreateRecallTokenFormGroup() {
		return new FormGroup<RecallTokenFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			multiPlayerPersona: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to remove all Recall tokens associated with a persona for an app. */
	export interface ResetPersonaRequest {

		/** Value of the 'persona' field as it was provided by the client in LinkPersona RPC */
		persona?: string | null;
	}

	/** Request to remove all Recall tokens associated with a persona for an app. */
	export interface ResetPersonaRequestFormProperties {

		/** Value of the 'persona' field as it was provided by the client in LinkPersona RPC */
		persona: FormControl<string | null | undefined>,
	}
	export function CreateResetPersonaRequestFormGroup() {
		return new FormGroup<ResetPersonaRequestFormProperties>({
			persona: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ResetPersona RPC */
	export interface ResetPersonaResponse {

		/** Required. Whether any tokens were unlinked as a result of this request. */
		unlinked?: boolean | null;
	}

	/** Response for the ResetPersona RPC */
	export interface ResetPersonaResponseFormProperties {

		/** Required. Whether any tokens were unlinked as a result of this request. */
		unlinked: FormControl<boolean | null | undefined>,
	}
	export function CreateResetPersonaResponseFormGroup() {
		return new FormGroup<ResetPersonaResponseFormProperties>({
			unlinked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for the RetrievePlayerTokens RPC */
	export interface RetrievePlayerTokensResponse {

		/** Required. Recall tokens associated with the requested PGS Player principal */
		tokens?: Array<RecallToken>;
	}

	/** Response for the RetrievePlayerTokens RPC */
	export interface RetrievePlayerTokensResponseFormProperties {
	}
	export function CreateRetrievePlayerTokensResponseFormGroup() {
		return new FormGroup<RetrievePlayerTokensResponseFormProperties>({
		});

	}


	/** A third party checking a revision response. */
	export interface RevisionCheckResponse {

		/** The version of the API this client revision should use when calling API methods. */
		apiVersion?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`. */
		kind?: string | null;

		/** The result of the revision check. */
		revisionStatus?: RevisionCheckResponseRevisionStatus | null;
	}

	/** A third party checking a revision response. */
	export interface RevisionCheckResponseFormProperties {

		/** The version of the API this client revision should use when calling API methods. */
		apiVersion: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`. */
		kind: FormControl<string | null | undefined>,

		/** The result of the revision check. */
		revisionStatus: FormControl<RevisionCheckResponseRevisionStatus | null | undefined>,
	}
	export function CreateRevisionCheckResponseFormGroup() {
		return new FormGroup<RevisionCheckResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			revisionStatus: new FormControl<RevisionCheckResponseRevisionStatus | null | undefined>(undefined),
		});

	}

	export enum RevisionCheckResponseRevisionStatus { OK = 0, DEPRECATED = 1, INVALID = 2 }


	/** Scoped player identifiers. */
	export interface ScopedPlayerIds {

		/** Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged. */
		developerPlayerKey?: string | null;

		/** Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field. */
		gamePlayerId?: string | null;
	}

	/** Scoped player identifiers. */
	export interface ScopedPlayerIdsFormProperties {

		/** Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged. */
		developerPlayerKey: FormControl<string | null | undefined>,

		/** Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field. */
		gamePlayerId: FormControl<string | null | undefined>,
	}
	export function CreateScopedPlayerIdsFormGroup() {
		return new FormGroup<ScopedPlayerIdsFormProperties>({
			developerPlayerKey: new FormControl<string | null | undefined>(undefined),
			gamePlayerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An snapshot object. */
	export interface Snapshot {

		/** An image of a snapshot. */
		coverImage?: SnapshotImage;

		/** The description of this snapshot. */
		description?: string | null;

		/** The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller. */
		driveId?: string | null;

		/** The duration associated with this snapshot, in millis. */
		durationMillis?: string | null;

		/** The ID of the snapshot. */
		id?: string | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`. */
		kind?: string | null;

		/** The timestamp (in millis since Unix epoch) of the last modification to this snapshot. */
		lastModifiedMillis?: string | null;

		/** The progress value (64-bit integer set by developer) associated with this snapshot. */
		progressValue?: string | null;

		/** The title of this snapshot. */
		title?: string | null;

		/** The type of this snapshot. */
		type?: SnapshotType | null;

		/** The unique name provided when the snapshot was created. */
		uniqueName?: string | null;
	}

	/** An snapshot object. */
	export interface SnapshotFormProperties {

		/** The description of this snapshot. */
		description: FormControl<string | null | undefined>,

		/** The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller. */
		driveId: FormControl<string | null | undefined>,

		/** The duration associated with this snapshot, in millis. */
		durationMillis: FormControl<string | null | undefined>,

		/** The ID of the snapshot. */
		id: FormControl<string | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`. */
		kind: FormControl<string | null | undefined>,

		/** The timestamp (in millis since Unix epoch) of the last modification to this snapshot. */
		lastModifiedMillis: FormControl<string | null | undefined>,

		/** The progress value (64-bit integer set by developer) associated with this snapshot. */
		progressValue: FormControl<string | null | undefined>,

		/** The title of this snapshot. */
		title: FormControl<string | null | undefined>,

		/** The type of this snapshot. */
		type: FormControl<SnapshotType | null | undefined>,

		/** The unique name provided when the snapshot was created. */
		uniqueName: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			durationMillis: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModifiedMillis: new FormControl<string | null | undefined>(undefined),
			progressValue: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SnapshotType | null | undefined>(undefined),
			uniqueName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image of a snapshot. */
	export interface SnapshotImage {

		/** The height of the image. */
		height?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`. */
		kind?: string | null;

		/** The MIME type of the image. */
		mime_type?: string | null;

		/** The URL of the image. This URL may be invalidated at any time and should not be cached. */
		url?: string | null;

		/** The width of the image. */
		width?: number | null;
	}

	/** An image of a snapshot. */
	export interface SnapshotImageFormProperties {

		/** The height of the image. */
		height: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`. */
		kind: FormControl<string | null | undefined>,

		/** The MIME type of the image. */
		mime_type: FormControl<string | null | undefined>,

		/** The URL of the image. This URL may be invalidated at any time and should not be cached. */
		url: FormControl<string | null | undefined>,

		/** The width of the image. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotImageFormGroup() {
		return new FormGroup<SnapshotImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SnapshotType { SAVE_GAME = 0 }


	/** A third party list snapshots response. */
	export interface SnapshotListResponse {

		/** The snapshots. */
		items?: Array<Snapshot>;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`. */
		kind?: string | null;

		/** Token corresponding to the next page of results. If there are no more results, the token is omitted. */
		nextPageToken?: string | null;
	}

	/** A third party list snapshots response. */
	export interface SnapshotListResponseFormProperties {

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Token corresponding to the next page of results. If there are no more results, the token is omitted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotListResponseFormGroup() {
		return new FormGroup<SnapshotListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A third party stats resource. */
	export interface StatsResponse {

		/** Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information. */
		avg_session_length_minutes?: number | null;

		/** The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information. */
		churn_probability?: number | null;

		/** Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		days_since_last_played?: number | null;

		/** The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. */
		high_spender_probability?: number | null;

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`. */
		kind?: string | null;

		/** Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		num_purchases?: number | null;

		/** The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		num_sessions?: number | null;

		/** The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. */
		num_sessions_percentile?: number | null;

		/** The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. */
		spend_percentile?: number | null;

		/** The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. */
		spend_probability?: number | null;

		/** The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information. */
		total_spend_next_28_days?: number | null;
	}

	/** A third party stats resource. */
	export interface StatsResponseFormProperties {

		/** Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information. */
		avg_session_length_minutes: FormControl<number | null | undefined>,

		/** The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information. */
		churn_probability: FormControl<number | null | undefined>,

		/** Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		days_since_last_played: FormControl<number | null | undefined>,

		/** The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. */
		high_spender_probability: FormControl<number | null | undefined>,

		/** Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`. */
		kind: FormControl<string | null | undefined>,

		/** Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		num_purchases: FormControl<number | null | undefined>,

		/** The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information. */
		num_sessions: FormControl<number | null | undefined>,

		/** The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. */
		num_sessions_percentile: FormControl<number | null | undefined>,

		/** The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information. */
		spend_percentile: FormControl<number | null | undefined>,

		/** The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information. */
		spend_probability: FormControl<number | null | undefined>,

		/** The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information. */
		total_spend_next_28_days: FormControl<number | null | undefined>,
	}
	export function CreateStatsResponseFormGroup() {
		return new FormGroup<StatsResponseFormProperties>({
			avg_session_length_minutes: new FormControl<number | null | undefined>(undefined),
			churn_probability: new FormControl<number | null | undefined>(undefined),
			days_since_last_played: new FormControl<number | null | undefined>(undefined),
			high_spender_probability: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			num_purchases: new FormControl<number | null | undefined>(undefined),
			num_sessions: new FormControl<number | null | undefined>(undefined),
			num_sessions_percentile: new FormControl<number | null | undefined>(undefined),
			spend_percentile: new FormControl<number | null | undefined>(undefined),
			spend_probability: new FormControl<number | null | undefined>(undefined),
			total_spend_next_28_days: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to remove a Recall token linking PGS principal and an in-game account */
	export interface UnlinkPersonaRequest {

		/** Value of the 'persona' field as it was provided by the client in LinkPersona RPC */
		persona?: string | null;

		/** Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. */
		sessionId?: string | null;

		/** Value of the Recall token as it was provided by the client in LinkPersona RPC */
		token?: string | null;
	}

	/** Request to remove a Recall token linking PGS principal and an in-game account */
	export interface UnlinkPersonaRequestFormProperties {

		/** Value of the 'persona' field as it was provided by the client in LinkPersona RPC */
		persona: FormControl<string | null | undefined>,

		/** Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. */
		sessionId: FormControl<string | null | undefined>,

		/** Value of the Recall token as it was provided by the client in LinkPersona RPC */
		token: FormControl<string | null | undefined>,
	}
	export function CreateUnlinkPersonaRequestFormGroup() {
		return new FormGroup<UnlinkPersonaRequestFormProperties>({
			persona: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the UnlinkPersona RPC */
	export interface UnlinkPersonaResponse {

		/** Required. Whether a Recall token specified by the request was deleted. Can be 'false' when there were no Recall tokens satisfied the criteria from the request. */
		unlinked?: boolean | null;
	}

	/** Response for the UnlinkPersona RPC */
	export interface UnlinkPersonaResponseFormProperties {

		/** Required. Whether a Recall token specified by the request was deleted. Can be 'false' when there were no Recall tokens satisfied the criteria from the request. */
		unlinked: FormControl<boolean | null | undefined>,
	}
	export function CreateUnlinkPersonaResponseFormGroup() {
		return new FormGroup<UnlinkPersonaResponseFormProperties>({
			unlinked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the achievement definitions for your application.
		 * Get games/v1/achievements
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AchievementDefinitionsListResponse} Successful response
		 */
		Games_achievementDefinitions_list(language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AchievementDefinitionsListResponse> {
			return this.http.get<AchievementDefinitionsListResponse>(this.baseUri + 'games/v1/achievements?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates multiple achievements for the currently authenticated player.
		 * Post games/v1/achievements/updateMultiple
		 * @return {AchievementUpdateMultipleResponse} Successful response
		 */
		Games_achievements_updateMultiple(requestBody: AchievementUpdateMultipleRequest): Observable<AchievementUpdateMultipleResponse> {
			return this.http.post<AchievementUpdateMultipleResponse>(this.baseUri + 'games/v1/achievements/updateMultiple', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Increments the steps of the achievement with the given ID for the currently authenticated player.
		 * Post games/v1/achievements/{achievementId}/increment
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @param {number} stepsToIncrement Required. The number of steps to increment.
		 * @param {string} requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
		 * @return {AchievementIncrementResponse} Successful response
		 */
		Games_achievements_increment(achievementId: string, stepsToIncrement: number, requestId: string | null | undefined): Observable<AchievementIncrementResponse> {
			return this.http.post<AchievementIncrementResponse>(this.baseUri + 'games/v1/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/increment&stepsToIncrement=' + stepsToIncrement + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), null, {});
		}

		/**
		 * Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
		 * Post games/v1/achievements/{achievementId}/reveal
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {AchievementRevealResponse} Successful response
		 */
		Games_achievements_reveal(achievementId: string): Observable<AchievementRevealResponse> {
			return this.http.post<AchievementRevealResponse>(this.baseUri + 'games/v1/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/reveal', null, {});
		}

		/**
		 * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
		 * Post games/v1/achievements/{achievementId}/setStepsAtLeast
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @param {number} steps Required. The minimum value to set the steps to.
		 * @return {AchievementSetStepsAtLeastResponse} Successful response
		 */
		Games_achievements_setStepsAtLeast(achievementId: string, steps: number): Observable<AchievementSetStepsAtLeastResponse> {
			return this.http.post<AchievementSetStepsAtLeastResponse>(this.baseUri + 'games/v1/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/setStepsAtLeast&steps=' + steps, null, {});
		}

		/**
		 * Unlocks this achievement for the currently authenticated player.
		 * Post games/v1/achievements/{achievementId}/unlock
		 * @param {string} achievementId The ID of the achievement used by this method.
		 * @return {AchievementUnlockResponse} Successful response
		 */
		Games_achievements_unlock(achievementId: string): Observable<AchievementUnlockResponse> {
			return this.http.post<AchievementUnlockResponse>(this.baseUri + 'games/v1/achievements/' + (achievementId == null ? '' : encodeURIComponent(achievementId)) + '/unlock', null, {});
		}

		/**
		 * Returns a URL for the requested end point type.
		 * Post games/v1/applications/getEndPoint
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {Games_applications_getEndPointEndPointType} endPointType Type of endpoint being requested.
		 * @return {EndPoint} Successful response
		 */
		Games_applications_getEndPoint(applicationId: string | null | undefined, endPointType: Games_applications_getEndPointEndPointType | null | undefined): Observable<EndPoint> {
			return this.http.post<EndPoint>(this.baseUri + 'games/v1/applications/getEndPoint?applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&endPointType=' + endPointType, null, {});
		}

		/**
		 * Indicate that the currently authenticated user is playing your application.
		 * Post games/v1/applications/played
		 * @return {void} Successful response
		 */
		Games_applications_played(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'games/v1/applications/played', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
		 * Get games/v1/applications/{applicationId}
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {InstancePlatformType} platformType Restrict application details returned to the specific platform.
		 * @return {Application} Successful response
		 */
		Games_applications_get(applicationId: string, language: string | null | undefined, platformType: InstancePlatformType | null | undefined): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'games/v1/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&platformType=' + platformType, {});
		}

		/**
		 * Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
		 * Get games/v1/applications/{applicationId}/verify
		 * @param {string} applicationId The application ID from the Google Play developer console.
		 * @return {ApplicationVerifyResponse} Successful response
		 */
		Games_applications_verify(applicationId: string): Observable<ApplicationVerifyResponse> {
			return this.http.get<ApplicationVerifyResponse>(this.baseUri + 'games/v1/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/verify', {});
		}

		/**
		 * Returns a list of the event definitions in this application.
		 * Get games/v1/eventDefinitions
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {EventDefinitionListResponse} Successful response
		 */
		Games_events_listDefinitions(language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<EventDefinitionListResponse> {
			return this.http.get<EventDefinitionListResponse>(this.baseUri + 'games/v1/eventDefinitions?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a list showing the current progress on events in this application for the currently authenticated user.
		 * Get games/v1/events
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {PlayerEventListResponse} Successful response
		 */
		Games_events_listByPlayer(language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PlayerEventListResponse> {
			return this.http.get<PlayerEventListResponse>(this.baseUri + 'games/v1/events?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
		 * Post games/v1/events
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {EventUpdateResponse} Successful response
		 */
		Games_events_record(language: string | null | undefined, requestBody: EventRecordRequest): Observable<EventUpdateResponse> {
			return this.http.post<EventUpdateResponse>(this.baseUri + 'games/v1/events?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the leaderboard metadata for your application.
		 * Get games/v1/leaderboards
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {LeaderboardListResponse} Successful response
		 */
		Games_leaderboards_list(language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LeaderboardListResponse> {
			return this.http.get<LeaderboardListResponse>(this.baseUri + 'games/v1/leaderboards?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Submits multiple scores to leaderboards.
		 * Post games/v1/leaderboards/scores
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {PlayerScoreListResponse} Successful response
		 */
		Games_scores_submitMultiple(language: string | null | undefined, requestBody: PlayerScoreSubmissionList): Observable<PlayerScoreListResponse> {
			return this.http.post<PlayerScoreListResponse>(this.baseUri + 'games/v1/leaderboards/scores?language=' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata of the leaderboard with the given ID.
		 * Get games/v1/leaderboards/{leaderboardId}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {Leaderboard} Successful response
		 */
		Games_leaderboards_get(leaderboardId: string, language: string | null | undefined): Observable<Leaderboard> {
			return this.http.get<Leaderboard>(this.baseUri + 'games/v1/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Submits a score to the specified leaderboard.
		 * Post games/v1/leaderboards/{leaderboardId}/scores
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {string} score Required. The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {string} scoreTag Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
		 * @return {PlayerScoreResponse} Successful response
		 */
		Games_scores_submit(leaderboardId: string, score: string, language: string | null | undefined, scoreTag: string | null | undefined): Observable<PlayerScoreResponse> {
			return this.http.post<PlayerScoreResponse>(this.baseUri + 'games/v1/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores&score=' + (score == null ? '' : encodeURIComponent(score)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&scoreTag=' + (scoreTag == null ? '' : encodeURIComponent(scoreTag)), null, {});
		}

		/**
		 * Lists the scores in a leaderboard, starting from the top.
		 * Get games/v1/leaderboards/{leaderboardId}/scores/{collection}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {Games_scores_listCollection} collection The collection of scores you're requesting.
		 * @param {LeaderboardEntryTimeSpan} timeSpan Required. The time span for the scores and ranks you're requesting.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {LeaderboardScores} Successful response
		 */
		Games_scores_list(leaderboardId: string, collection: Games_scores_listCollection, timeSpan: LeaderboardEntryTimeSpan, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LeaderboardScores> {
			return this.http.get<LeaderboardScores>(this.baseUri + 'games/v1/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/' + collection + '&timeSpan=' + timeSpan + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the scores in a leaderboard around (and including) a player's score.
		 * Get games/v1/leaderboards/{leaderboardId}/window/{collection}
		 * @param {string} leaderboardId The ID of the leaderboard.
		 * @param {Games_scores_listCollection} collection The collection of scores you're requesting.
		 * @param {LeaderboardEntryTimeSpan} timeSpan Required. The time span for the scores and ranks you're requesting.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {number} resultsAbove The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
		 * @param {boolean} returnTopIfAbsent True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
		 * @return {LeaderboardScores} Successful response
		 */
		Games_scores_listWindow(leaderboardId: string, collection: Games_scores_listCollection, timeSpan: LeaderboardEntryTimeSpan, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, resultsAbove: number | null | undefined, returnTopIfAbsent: boolean | null | undefined): Observable<LeaderboardScores> {
			return this.http.get<LeaderboardScores>(this.baseUri + 'games/v1/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/window/' + collection + '&timeSpan=' + timeSpan + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&resultsAbove=' + resultsAbove + '&returnTopIfAbsent=' + returnTopIfAbsent, {});
		}

		/**
		 * Return the metagame configuration data for the calling application.
		 * Get games/v1/metagameConfig
		 * @return {MetagameConfig} Successful response
		 */
		Games_metagame_getMetagameConfig(): Observable<MetagameConfig> {
			return this.http.get<MetagameConfig>(this.baseUri + 'games/v1/metagameConfig', {});
		}

		/**
		 * Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
		 * Get games/v1/players/me/multipleApplicationPlayerIds
		 * @param {Array<string>} applicationIds Required. The application IDs from the Google Play developer console for the games to return scoped ids for.
		 * @return {GetMultipleApplicationPlayerIdsResponse} Successful response
		 */
		Games_players_getMultipleApplicationPlayerIds(applicationIds: Array<string> | null | undefined): Observable<GetMultipleApplicationPlayerIdsResponse> {
			return this.http.get<GetMultipleApplicationPlayerIdsResponse>(this.baseUri + 'games/v1/players/me/multipleApplicationPlayerIds?' + applicationIds?.map(z => `applicationIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get the collection of players for the currently authenticated user.
		 * Get games/v1/players/me/players/{collection}
		 * @param {Games_players_listCollection} collection Collection of players being retrieved
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {PlayerListResponse} Successful response
		 */
		Games_players_list(collection: Games_players_listCollection, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PlayerListResponse> {
			return this.http.get<PlayerListResponse>(this.baseUri + 'games/v1/players/me/players/' + collection + '?language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves scoped player identifiers for currently authenticated user.
		 * Get games/v1/players/me/scopedIds
		 * @return {ScopedPlayerIds} Successful response
		 */
		Games_players_getScopedPlayerIds(): Observable<ScopedPlayerIds> {
			return this.http.get<ScopedPlayerIds>(this.baseUri + 'games/v1/players/me/scopedIds', {});
		}

		/**
		 * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
		 * Get games/v1/players/{playerId}
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {string} playerIdConsistencyToken Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto
		 * @return {Player} Successful response
		 */
		Games_players_get(playerId: string, language: string | null | undefined, playerIdConsistencyToken: string | null | undefined): Observable<Player> {
			return this.http.get<Player>(this.baseUri + 'games/v1/players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&playerIdConsistencyToken=' + (playerIdConsistencyToken == null ? '' : encodeURIComponent(playerIdConsistencyToken)), {});
		}

		/**
		 * Lists the progress for all your application's achievements for the currently authenticated player.
		 * Get games/v1/players/{playerId}/achievements
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {Games_achievements_listState} state Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
		 * @return {PlayerAchievementListResponse} Successful response
		 */
		Games_achievements_list(playerId: string, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, state: Games_achievements_listState | null | undefined): Observable<PlayerAchievementListResponse> {
			return this.http.get<PlayerAchievementListResponse>(this.baseUri + 'games/v1/players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/achievements&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&state=' + state, {});
		}

		/**
		 * List play data aggregated per category for the player corresponding to `playerId`.
		 * Get games/v1/players/{playerId}/categories/{collection}
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @param {Games_metagame_listCategoriesByPlayerCollection} collection The collection of categories for which data will be returned.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {CategoryListResponse} Successful response
		 */
		Games_metagame_listCategoriesByPlayer(playerId: string, collection: Games_metagame_listCategoriesByPlayerCollection, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<CategoryListResponse> {
			return this.http.get<CategoryListResponse>(this.baseUri + 'games/v1/players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/categories/' + collection + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
		 * Get games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @param {string} leaderboardId The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
		 * @param {Games_scores_getTimeSpan} timeSpan The time span for the scores and ranks you're requesting.
		 * @param {Games_scores_getIncludeRankType} includeRankType The types of ranks to return. If the parameter is omitted, no ranks will be returned.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {PlayerLeaderboardScoreListResponse} Successful response
		 */
		Games_scores_get(playerId: string, leaderboardId: string, timeSpan: Games_scores_getTimeSpan, includeRankType: Games_scores_getIncludeRankType | null | undefined, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PlayerLeaderboardScoreListResponse> {
			return this.http.get<PlayerLeaderboardScoreListResponse>(this.baseUri + 'games/v1/players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/leaderboards/' + (leaderboardId == null ? '' : encodeURIComponent(leaderboardId)) + '/scores/' + timeSpan + '&includeRankType=' + includeRankType + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
		 * Get games/v1/players/{playerId}/snapshots
		 * @param {string} playerId A player ID. A value of `me` may be used in place of the authenticated player's ID.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @param {number} maxResults The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {SnapshotListResponse} Successful response
		 */
		Games_snapshots_list(playerId: string, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<SnapshotListResponse> {
			return this.http.get<SnapshotListResponse>(this.baseUri + 'games/v1/players/' + (playerId == null ? '' : encodeURIComponent(playerId)) + '/snapshots&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieve all Recall tokens associated with the PGS Player principal encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.
		 * Get games/v1/recall/tokens/{sessionId}
		 * @param {string} sessionId Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
		 * @return {RetrievePlayerTokensResponse} Successful response
		 */
		Games_recall_retrieveTokens(sessionId: string): Observable<RetrievePlayerTokensResponse> {
			return this.http.get<RetrievePlayerTokensResponse>(this.baseUri + 'games/v1/recall/tokens/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Associate the PGS Player principal encoded in the provided recall session id with an in-game account
		 * Post games/v1/recall:linkPersona
		 * @return {LinkPersonaResponse} Successful response
		 */
		Games_recall_linkPersona(requestBody: LinkPersonaRequest): Observable<LinkPersonaResponse> {
			return this.http.post<LinkPersonaResponse>(this.baseUri + 'games/v1/recall:linkPersona', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete all Recall tokens linking the given persona to any player (with or without a profile).
		 * Post games/v1/recall:resetPersona
		 * @return {ResetPersonaResponse} Successful response
		 */
		Games_recall_resetPersona(requestBody: ResetPersonaRequest): Observable<ResetPersonaResponse> {
			return this.http.post<ResetPersonaResponse>(this.baseUri + 'games/v1/recall:resetPersona', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.
		 * Post games/v1/recall:unlinkPersona
		 * @return {UnlinkPersonaResponse} Successful response
		 */
		Games_recall_unlinkPersona(requestBody: UnlinkPersonaRequest): Observable<UnlinkPersonaResponse> {
			return this.http.post<UnlinkPersonaResponse>(this.baseUri + 'games/v1/recall:unlinkPersona', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether the games client is out of date.
		 * Get games/v1/revisions/check
		 * @param {string} clientRevision Required. The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.
		 * @return {RevisionCheckResponse} Successful response
		 */
		Games_revisions_check(clientRevision: string): Observable<RevisionCheckResponse> {
			return this.http.get<RevisionCheckResponse>(this.baseUri + 'games/v1/revisions/check?clientRevision=' + (clientRevision == null ? '' : encodeURIComponent(clientRevision)), {});
		}

		/**
		 * Retrieves the metadata for a given snapshot ID.
		 * Get games/v1/snapshots/{snapshotId}
		 * @param {string} snapshotId The ID of the snapshot.
		 * @param {string} language The preferred language to use for strings returned by this method.
		 * @return {Snapshot} Successful response
		 */
		Games_snapshots_get(snapshotId: string, language: string | null | undefined): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'games/v1/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Returns engagement and spend statistics in this application for the currently authenticated user.
		 * Get games/v1/stats
		 * @return {StatsResponse} Successful response
		 */
		Games_stats_get(): Observable<StatsResponse> {
			return this.http.get<StatsResponse>(this.baseUri + 'games/v1/stats', {});
		}
	}

	export enum Games_applications_getEndPointEndPointType { PROFILE_CREATION = 0, PROFILE_SETTINGS = 1 }

	export enum Games_scores_listCollection { PUBLIC = 0, SOCIAL = 1, FRIENDS = 2 }

	export enum Games_players_listCollection { CONNECTED = 0, VISIBLE = 1, FRIENDS_ALL = 2 }

	export enum Games_achievements_listState { ALL = 0, HIDDEN = 1, REVEALED = 2, UNLOCKED = 3 }

	export enum Games_metagame_listCategoriesByPlayerCollection { ALL = 0 }

	export enum Games_scores_getTimeSpan { ALL = 0, ALL_TIME = 1, WEEKLY = 2, DAILY = 3 }

	export enum Games_scores_getIncludeRankType { ALL = 0, PUBLIC = 1, SOCIAL = 2, FRIENDS = 3 }

}

