import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Developer {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface DeveloperFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperFormGroup() {
		return new FormGroup<DeveloperFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface DeveloperSingle {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface DeveloperSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperSingleFormGroup() {
		return new FormGroup<DeveloperSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		added?: number | null;
		added_by_status?: string | null;
		background_image?: string | null;
		esrb_rating?: GameEsrb_rating;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metacritic?: number | null;

		/** Min length: 1 */
		name?: string | null;
		GamePlatforms?: Array<GamePlatforms>;

		/**
		 * in hours
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playtime?: number | null;

		/**
		 * Required
		 * Type: double
		 */
		rating: number;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top?: number | null;
		ratings?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ratings_count?: number | null;

		/** Type: DateOnly */
		released?: Date | null;
		reviews_text_count?: string | null;

		/** Min length: 1 */
		slug?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		suggestions_count?: number | null;
		tba?: boolean | null;
		updated?: Date | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		added: FormControl<number | null | undefined>,
		added_by_status: FormControl<string | null | undefined>,
		background_image: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metacritic: FormControl<number | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/**
		 * in hours
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playtime: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top: FormControl<number | null | undefined>,
		ratings: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ratings_count: FormControl<number | null | undefined>,

		/** Type: DateOnly */
		released: FormControl<Date | null | undefined>,
		reviews_text_count: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		suggestions_count: FormControl<number | null | undefined>,
		tba: FormControl<boolean | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			added: new FormControl<number | null | undefined>(undefined),
			added_by_status: new FormControl<string | null | undefined>(undefined),
			background_image: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			metacritic: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			playtime: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rating_top: new FormControl<number | null | undefined>(undefined),
			ratings: new FormControl<string | null | undefined>(undefined),
			ratings_count: new FormControl<number | null | undefined>(undefined),
			released: new FormControl<Date | null | undefined>(undefined),
			reviews_text_count: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
			suggestions_count: new FormControl<number | null | undefined>(undefined),
			tba: new FormControl<boolean | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GameEsrb_rating {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: GameEsrb_ratingName | null;
		slug?: GameEsrb_ratingSlug | null;
	}
	export interface GameEsrb_ratingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<GameEsrb_ratingName | null | undefined>,
		slug: FormControl<GameEsrb_ratingSlug | null | undefined>,
	}
	export function CreateGameEsrb_ratingFormGroup() {
		return new FormGroup<GameEsrb_ratingFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<GameEsrb_ratingName | null | undefined>(undefined),
			slug: new FormControl<GameEsrb_ratingSlug | null | undefined>(undefined),
		});

	}

	export enum GameEsrb_ratingName { Everyone = 'Everyone', 'Everyone 10+' = 'Everyone 10+', Teen = 'Teen', Mature = 'Mature', 'Adults Only' = 'Adults Only', 'Rating Pending' = 'Rating Pending' }

	export enum GameEsrb_ratingSlug { everyone = 'everyone', 'everyone-10-plus' = 'everyone-10-plus', teen = 'teen', mature = 'mature', 'adults-only' = 'adults-only', 'rating-pending' = 'rating-pending' }

	export interface GamePlatforms {
		platform?: GamePlatformsPlatform;
		released_at?: string | null;
		requirements?: GamePlatformsRequirements;
	}
	export interface GamePlatformsFormProperties {
		released_at: FormControl<string | null | undefined>,
	}
	export function CreateGamePlatformsFormGroup() {
		return new FormGroup<GamePlatformsFormProperties>({
			released_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GamePlatformsPlatform {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		slug?: string | null;
	}
	export interface GamePlatformsPlatformFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
	}
	export function CreateGamePlatformsPlatformFormGroup() {
		return new FormGroup<GamePlatformsPlatformFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GamePlatformsRequirements {
		minimum?: string | null;
		recommended?: string | null;
	}
	export interface GamePlatformsRequirementsFormProperties {
		minimum: FormControl<string | null | undefined>,
		recommended: FormControl<string | null | undefined>,
	}
	export function CreateGamePlatformsRequirementsFormGroup() {
		return new FormGroup<GamePlatformsRequirementsFormProperties>({
			minimum: new FormControl<string | null | undefined>(undefined),
			recommended: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GamePersonList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface GamePersonListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateGamePersonListFormGroup() {
		return new FormGroup<GamePersonListFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface GamePlatformMetacritic {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metascore?: number | null;

		/** Min length: 1 */
		url?: string | null;
	}
	export interface GamePlatformMetacriticFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metascore: FormControl<number | null | undefined>,

		/** Min length: 1 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGamePlatformMetacriticFormGroup() {
		return new FormGroup<GamePlatformMetacriticFormProperties>({
			metascore: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface GameSingle {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		achievements_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		added?: number | null;
		added_by_status?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		additions_count?: number | null;
		alternative_names?: Array<string>;
		background_image?: string | null;
		background_image_additional?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		creators_count?: number | null;

		/** Min length: 1 */
		description?: string | null;
		esrb_rating?: GameSingleEsrb_rating;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_series_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metacritic?: number | null;
		metacritic_platforms?: Array<GamePlatformMetacritic>;

		/**
		 * For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"
		 * Min length: 1
		 */
		metacritic_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		movies_count?: number | null;

		/** Min length: 1 */
		name?: string | null;

		/** Min length: 1 */
		name_original?: string | null;
		parent_achievements_count?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parents_count?: number | null;
		GameSinglePlatforms?: Array<GameSinglePlatforms>;

		/**
		 * in hours
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playtime?: number | null;

		/**
		 * Required
		 * Type: double
		 */
		rating: number;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top?: number | null;
		ratings?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ratings_count?: number | null;
		reactions?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reddit_count?: number | null;

		/** Min length: 1 */
		reddit_description?: string | null;

		/** Min length: 1 */
		reddit_logo?: string | null;

		/** Min length: 1 */
		reddit_name?: string | null;

		/**
		 * For example "https://www.reddit.com/r/uncharted/" or "uncharted"
		 * Min length: 1
		 */
		reddit_url?: string | null;

		/** Type: DateOnly */
		released?: Date | null;
		reviews_text_count?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenshots_count?: number | null;

		/** Min length: 1 */
		slug?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		suggestions_count?: number | null;
		tba?: boolean | null;
		twitch_count?: string | null;
		updated?: Date | null;

		/** Min length: 1 */
		website?: string | null;
		youtube_count?: string | null;
	}
	export interface GameSingleFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		achievements_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		added: FormControl<number | null | undefined>,
		added_by_status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		additions_count: FormControl<number | null | undefined>,
		background_image: FormControl<string | null | undefined>,
		background_image_additional: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		creators_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_series_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		metacritic: FormControl<number | null | undefined>,

		/**
		 * For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"
		 * Min length: 1
		 */
		metacritic_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		movies_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		name_original: FormControl<string | null | undefined>,
		parent_achievements_count: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parents_count: FormControl<number | null | undefined>,

		/**
		 * in hours
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		playtime: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top: FormControl<number | null | undefined>,
		ratings: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ratings_count: FormControl<number | null | undefined>,
		reactions: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reddit_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		reddit_description: FormControl<string | null | undefined>,

		/** Min length: 1 */
		reddit_logo: FormControl<string | null | undefined>,

		/** Min length: 1 */
		reddit_name: FormControl<string | null | undefined>,

		/**
		 * For example "https://www.reddit.com/r/uncharted/" or "uncharted"
		 * Min length: 1
		 */
		reddit_url: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		released: FormControl<Date | null | undefined>,
		reviews_text_count: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenshots_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		suggestions_count: FormControl<number | null | undefined>,
		tba: FormControl<boolean | null | undefined>,
		twitch_count: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		website: FormControl<string | null | undefined>,
		youtube_count: FormControl<string | null | undefined>,
	}
	export function CreateGameSingleFormGroup() {
		return new FormGroup<GameSingleFormProperties>({
			achievements_count: new FormControl<number | null | undefined>(undefined),
			added: new FormControl<number | null | undefined>(undefined),
			added_by_status: new FormControl<string | null | undefined>(undefined),
			additions_count: new FormControl<number | null | undefined>(undefined),
			background_image: new FormControl<string | null | undefined>(undefined),
			background_image_additional: new FormControl<string | null | undefined>(undefined),
			creators_count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			game_series_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			metacritic: new FormControl<number | null | undefined>(undefined),
			metacritic_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			movies_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name_original: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			parent_achievements_count: new FormControl<string | null | undefined>(undefined),
			parents_count: new FormControl<number | null | undefined>(undefined),
			playtime: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rating_top: new FormControl<number | null | undefined>(undefined),
			ratings: new FormControl<string | null | undefined>(undefined),
			ratings_count: new FormControl<number | null | undefined>(undefined),
			reactions: new FormControl<string | null | undefined>(undefined),
			reddit_count: new FormControl<number | null | undefined>(undefined),
			reddit_description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			reddit_logo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			reddit_name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			reddit_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			released: new FormControl<Date | null | undefined>(undefined),
			reviews_text_count: new FormControl<string | null | undefined>(undefined),
			screenshots_count: new FormControl<number | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
			suggestions_count: new FormControl<number | null | undefined>(undefined),
			tba: new FormControl<boolean | null | undefined>(undefined),
			twitch_count: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			youtube_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameSingleEsrb_rating {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: GameEsrb_ratingName | null;
		slug?: GameEsrb_ratingSlug | null;
	}
	export interface GameSingleEsrb_ratingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<GameEsrb_ratingName | null | undefined>,
		slug: FormControl<GameEsrb_ratingSlug | null | undefined>,
	}
	export function CreateGameSingleEsrb_ratingFormGroup() {
		return new FormGroup<GameSingleEsrb_ratingFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<GameEsrb_ratingName | null | undefined>(undefined),
			slug: new FormControl<GameEsrb_ratingSlug | null | undefined>(undefined),
		});

	}

	export interface GameSinglePlatforms {
		platform?: GameSinglePlatformsPlatform;
		released_at?: string | null;
		requirements?: GameSinglePlatformsRequirements;
	}
	export interface GameSinglePlatformsFormProperties {
		released_at: FormControl<string | null | undefined>,
	}
	export function CreateGameSinglePlatformsFormGroup() {
		return new FormGroup<GameSinglePlatformsFormProperties>({
			released_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameSinglePlatformsPlatform {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		slug?: string | null;
	}
	export interface GameSinglePlatformsPlatformFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
	}
	export function CreateGameSinglePlatformsPlatformFormGroup() {
		return new FormGroup<GameSinglePlatformsPlatformFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameSinglePlatformsRequirements {
		minimum?: string | null;
		recommended?: string | null;
	}
	export interface GameSinglePlatformsRequirementsFormProperties {
		minimum: FormControl<string | null | undefined>,
		recommended: FormControl<string | null | undefined>,
	}
	export function CreateGameSinglePlatformsRequirementsFormGroup() {
		return new FormGroup<GameSinglePlatformsRequirementsFormProperties>({
			minimum: new FormControl<string | null | undefined>(undefined),
			recommended: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GameStoreFull {
		game_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		store_id?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		url: string;
	}
	export interface GameStoreFullFormProperties {
		game_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		store_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGameStoreFullFormGroup() {
		return new FormGroup<GameStoreFullFormProperties>({
			game_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			store_id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface Genre {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface GenreFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateGenreFormGroup() {
		return new FormGroup<GenreFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface GenreSingle {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface GenreSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateGenreSingleFormGroup() {
		return new FormGroup<GenreSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Movie {
		data?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		name?: string | null;
		preview?: string | null;
	}
	export interface MovieFormProperties {
		data: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		preview: FormControl<string | null | undefined>,
	}
	export function CreateMovieFormGroup() {
		return new FormGroup<MovieFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			preview: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParentAchievement {

		/** Min length: 1 */
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Min length: 1 */
		name?: string | null;
		percent?: string | null;
	}
	export interface ParentAchievementFormProperties {

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		percent: FormControl<string | null | undefined>,
	}
	export function CreateParentAchievementFormGroup() {
		return new FormGroup<ParentAchievementFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			percent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Person {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface PersonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface PersonSingle {

		/** Min length: 1 */
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		rating?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reviews_count?: number | null;

		/** Min length: 1 */
		slug?: string | null;
		updated?: Date | null;
	}
	export interface PersonSingleFormProperties {

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		rating: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating_top: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reviews_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreatePersonSingleFormGroup() {
		return new FormGroup<PersonSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			rating: new FormControl<string | null | undefined>(undefined),
			rating_top: new FormControl<number | null | undefined>(undefined),
			reviews_count: new FormControl<number | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Platform {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_end?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_start?: number | null;
	}
	export interface PlatformFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_end: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_start: FormControl<number | null | undefined>,
	}
	export function CreatePlatformFormGroup() {
		return new FormGroup<PlatformFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
			year_end: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32767)]),
			year_start: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32767)]),
		});

	}

	export interface PlatformParentSingle {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Required */
		platforms: Array<Platform>;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface PlatformParentSingleFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePlatformParentSingleFormGroup() {
		return new FormGroup<PlatformParentSingleFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface PlatformSingle {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		image?: string | null;
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_end?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_start?: number | null;
	}
	export interface PlatformSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		image: FormControl<string | null | undefined>,
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_end: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 32767
		 */
		year_start: FormControl<number | null | undefined>,
	}
	export function CreatePlatformSingleFormGroup() {
		return new FormGroup<PlatformSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
			year_end: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32767)]),
			year_start: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32767)]),
		});

	}

	export interface Position {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		name?: string | null;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface PositionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Publisher {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface PublisherFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePublisherFormGroup() {
		return new FormGroup<PublisherFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface PublisherSingle {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface PublisherSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePublisherSingleFormGroup() {
		return new FormGroup<PublisherSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Reddit {
		created?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image?: string | null;

		/** Min length: 1 */
		name?: string | null;

		/** Min length: 1 */
		text?: string | null;

		/** Min length: 1 */
		url?: string | null;

		/** Min length: 1 */
		username?: string | null;

		/** Min length: 1 */
		username_url?: string | null;
	}
	export interface RedditFormProperties {
		created: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image: FormControl<string | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		text: FormControl<string | null | undefined>,

		/** Min length: 1 */
		url: FormControl<string | null | undefined>,

		/** Min length: 1 */
		username: FormControl<string | null | undefined>,

		/** Min length: 1 */
		username_url: FormControl<string | null | undefined>,
	}
	export function CreateRedditFormGroup() {
		return new FormGroup<RedditFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			username_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface ScreenShot {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;

		/** Set image as hidden or visible. */
		hidden?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** An image file with size up to 20 MB. */
		image?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface ScreenShotFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,

		/** Set image as hidden or visible. */
		hidden: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** An image file with size up to 20 MB. */
		image: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateScreenShotFormGroup() {
		return new FormGroup<ScreenShotFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Store {

		/** Max length: 255 */
		domain?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface StoreFormProperties {

		/** Max length: 255 */
		domain: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateStoreFormGroup() {
		return new FormGroup<StoreFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface StoreSingle {
		description?: string | null;

		/** Max length: 255 */
		domain?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface StoreSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Max length: 255 */
		domain: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateStoreSingleFormGroup() {
		return new FormGroup<StoreSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Tag {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/** Min length: 1 */
		language?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface TagFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/** Min length: 1 */
		language: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface TagSingle {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		image_background?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/** Min length: 1 */
		slug?: string | null;
	}
	export interface TagSingleFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		image_background: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateTagSingleFormGroup() {
		return new FormGroup<TagSingleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			games_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_background: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^[-a-zA-Z0-9_]+$')]),
		});

	}

	export interface Twitch {
		created?: Date | null;

		/** Min length: 1 */
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		external_id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Min length: 1 */
		language?: string | null;

		/** Min length: 1 */
		name?: string | null;
		published?: Date | null;

		/** Min length: 1 */
		thumbnail?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		view_count?: number | null;
	}
	export interface TwitchFormProperties {
		created: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		external_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Min length: 1 */
		language: FormControl<string | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		published: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		thumbnail: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateTwitchFormGroup() {
		return new FormGroup<TwitchFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			external_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			published: new FormControl<Date | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Youtube {

		/** Min length: 1 */
		channel_id?: string | null;

		/** Min length: 1 */
		channel_title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments_count?: number | null;
		created?: Date | null;

		/** Min length: 1 */
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dislike_count?: number | null;

		/** Min length: 1 */
		external_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		favorite_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		like_count?: number | null;

		/** Min length: 1 */
		name?: string | null;
		thumbnails?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		view_count?: number | null;
	}
	export interface YoutubeFormProperties {

		/** Min length: 1 */
		channel_id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		channel_title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments_count: FormControl<number | null | undefined>,
		created: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dislike_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		external_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		favorite_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		like_count: FormControl<number | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		thumbnails: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateYoutubeFormGroup() {
		return new FormGroup<YoutubeFormProperties>({
			channel_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			channel_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			comments_count: new FormControl<number | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			dislike_count: new FormControl<number | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			favorite_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			like_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			thumbnails: new FormControl<string | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of creator positions (jobs).
		 * Get creator-roles
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Creator_roles_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Creator_roles_listReturn> {
			return this.http.get<Creator_roles_listReturn>(this.baseUri + 'creator-roles?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get a list of game creators.
		 * Get creators
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Creators_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Creators_listReturn> {
			return this.http.get<Creators_listReturn>(this.baseUri + 'creators?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the creator.
		 * Get creators/{id}
		 */
		Creators_read(id: string): Observable<PersonSingle> {
			return this.http.get<PersonSingle>(this.baseUri + 'creators/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get a list of game developers.
		 * Get developers
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Developers_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Developers_listReturn> {
			return this.http.get<Developers_listReturn>(this.baseUri + 'developers?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the developer.
		 * Get developers/{id}
		 */
		Developers_read(): Observable<DeveloperSingle> {
			return this.http.get<DeveloperSingle>(this.baseUri + 'developers/{id}', {});
		}

		/**
		 * Get a list of games.
		 * Get games
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} search Search query.
		 * @param {boolean} search_precise Disable fuzziness for the search query.
		 * @param {boolean} search_exact Mark the search query as exact.
		 * @param {string} parent_platforms Filter by parent platforms, for example: `1,2,3`.
		 * @param {string} platforms Filter by platforms, for example: `4,5`.
		 * @param {string} stores Filter by stores, for example: `5,6`.
		 * @param {string} developers Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.
		 * @param {string} publishers Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.
		 * @param {string} genres Filter by genres, for example: `4,51` or `action,indie`.
		 * @param {string} tags Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.
		 * @param {string} creators Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.
		 * @param {string} dates Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.
		 * @param {string} updated Filter by an update date, for example: `2020-12-01,2020-12-31`.
		 * @param {number} platforms_count Filter by platforms count, for example: `1`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} metacritic Filter by a metacritic rating, for example: `80,100`.
		 * @param {number} exclude_collection Exclude games from a particular collection, for example: `123`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} exclude_additions Exclude additions.
		 * @param {boolean} exclude_parents Exclude games which have additions.
		 * @param {boolean} exclude_game_series Exclude games which included in a game series.
		 * @param {string} exclude_stores Exclude stores, for example: `5,6`.
		 * @param {string} ordering Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.
		 */
		Games_list(page: number | null | undefined, page_size: number | null | undefined, search: string | null | undefined, search_precise: boolean | null | undefined, search_exact: boolean | null | undefined, parent_platforms: string | null | undefined, platforms: string | null | undefined, stores: string | null | undefined, developers: string | null | undefined, publishers: string | null | undefined, genres: string | null | undefined, tags: string | null | undefined, creators: string | null | undefined, dates: string | null | undefined, updated: string | null | undefined, platforms_count: number | null | undefined, metacritic: string | null | undefined, exclude_collection: number | null | undefined, exclude_additions: boolean | null | undefined, exclude_parents: boolean | null | undefined, exclude_game_series: boolean | null | undefined, exclude_stores: string | null | undefined, ordering: string | null | undefined): Observable<Games_listReturn> {
			return this.http.get<Games_listReturn>(this.baseUri + 'games?page=' + page + '&page_size=' + page_size + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&search_precise=' + search_precise + '&search_exact=' + search_exact + '&parent_platforms=' + (parent_platforms == null ? '' : encodeURIComponent(parent_platforms)) + '&platforms=' + (platforms == null ? '' : encodeURIComponent(platforms)) + '&stores=' + (stores == null ? '' : encodeURIComponent(stores)) + '&developers=' + (developers == null ? '' : encodeURIComponent(developers)) + '&publishers=' + (publishers == null ? '' : encodeURIComponent(publishers)) + '&genres=' + (genres == null ? '' : encodeURIComponent(genres)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&creators=' + (creators == null ? '' : encodeURIComponent(creators)) + '&dates=' + (dates == null ? '' : encodeURIComponent(dates)) + '&updated=' + (updated == null ? '' : encodeURIComponent(updated)) + '&platforms_count=' + platforms_count + '&metacritic=' + (metacritic == null ? '' : encodeURIComponent(metacritic)) + '&exclude_collection=' + exclude_collection + '&exclude_additions=' + exclude_additions + '&exclude_parents=' + exclude_parents + '&exclude_game_series=' + exclude_game_series + '&exclude_stores=' + (exclude_stores == null ? '' : encodeURIComponent(exclude_stores)) + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)), {});
		}

		/**
		 * Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
		 * Get games/{game_pk}/additions
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_additions_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Games_additions_listReturn> {
			return this.http.get<Games_additions_listReturn>(this.baseUri + 'games/{game_pk}/additions?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get a list of individual creators that were part of the development team.
		 * Get games/{game_pk}/development-team
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_development_team_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Games_development_team_listReturn> {
			return this.http.get<Games_development_team_listReturn>(this.baseUri + 'games/{game_pk}/development-team?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get a list of games that are part of the same series.
		 * Get games/{game_pk}/game-series
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_game_series_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Games_game_series_listReturn> {
			return this.http.get<Games_game_series_listReturn>(this.baseUri + 'games/{game_pk}/game-series?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get a list of parent games for DLC's and editions.
		 * Get games/{game_pk}/parent-games
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_parent_games_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Games_parent_games_listReturn> {
			return this.http.get<Games_parent_games_listReturn>(this.baseUri + 'games/{game_pk}/parent-games?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get screenshots for the game.
		 * Get games/{game_pk}/screenshots
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_screenshots_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Games_screenshots_listReturn> {
			return this.http.get<Games_screenshots_listReturn>(this.baseUri + 'games/{game_pk}/screenshots?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get links to the stores that sell the game.
		 * Get games/{game_pk}/stores
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Games_stores_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Games_stores_listReturn> {
			return this.http.get<Games_stores_listReturn>(this.baseUri + 'games/{game_pk}/stores?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the game.
		 * Get games/{id}
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_read(id: string): Observable<GameSingle> {
			return this.http.get<GameSingle>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get a list of game achievements.
		 * Get games/{id}/achievements
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_achievements_read(id: string): Observable<ParentAchievement> {
			return this.http.get<ParentAchievement>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/achievements', {});
		}

		/**
		 * Get a list of game trailers.
		 * Get games/{id}/movies
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_movies_read(id: string): Observable<Movie> {
			return this.http.get<Movie>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/movies', {});
		}

		/**
		 * Get a list of most recent posts from the game's subreddit.
		 * Get games/{id}/reddit
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_reddit_read(id: string): Observable<Reddit> {
			return this.http.get<Reddit>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/reddit', {});
		}

		/**
		 * Get a list of visually similar games, available only for business and enterprise API users.
		 * Get games/{id}/suggested
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_suggested_read(id: string): Observable<GameSingle> {
			return this.http.get<GameSingle>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/suggested', {});
		}

		/**
		 * Get streams on Twitch associated with the game, available only for business and enterprise API users.
		 * Get games/{id}/twitch
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_twitch_read(id: string): Observable<Twitch> {
			return this.http.get<Twitch>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/twitch', {});
		}

		/**
		 * Get videos from YouTube associated with the game, available only for business and enterprise API users.
		 * Get games/{id}/youtube
		 * @param {string} id An ID or a slug identifying this Game.
		 */
		Games_youtube_read(id: string): Observable<Youtube> {
			return this.http.get<Youtube>(this.baseUri + 'games/' + (id == null ? '' : encodeURIComponent(id)) + '/youtube', {});
		}

		/**
		 * Get a list of video game genres.
		 * Get genres
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Genres_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Genres_listReturn> {
			return this.http.get<Genres_listReturn>(this.baseUri + 'genres?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the genre.
		 * Get genres/{id}
		 */
		Genres_read(): Observable<GenreSingle> {
			return this.http.get<GenreSingle>(this.baseUri + 'genres/{id}', {});
		}

		/**
		 * Get a list of video game platforms.
		 * Get platforms
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Platforms_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Platforms_listReturn> {
			return this.http.get<Platforms_listReturn>(this.baseUri + 'platforms?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get a list of parent platforms.
		 * For instance, for PS2 and PS4 the “parent platform” is PlayStation.
		 * Get platforms/lists/parents
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Platforms_lists_parents_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Platforms_lists_parents_listReturn> {
			return this.http.get<Platforms_lists_parents_listReturn>(this.baseUri + 'platforms/lists/parents?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the platform.
		 * Get platforms/{id}
		 */
		Platforms_read(): Observable<PlatformSingle> {
			return this.http.get<PlatformSingle>(this.baseUri + 'platforms/{id}', {});
		}

		/**
		 * Get a list of video game publishers.
		 * Get publishers
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Publishers_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Publishers_listReturn> {
			return this.http.get<Publishers_listReturn>(this.baseUri + 'publishers?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the publisher.
		 * Get publishers/{id}
		 */
		Publishers_read(): Observable<PublisherSingle> {
			return this.http.get<PublisherSingle>(this.baseUri + 'publishers/{id}', {});
		}

		/**
		 * Get a list of video game storefronts.
		 * Get stores
		 * @param {string} ordering Which field to use when ordering the results.
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Stores_list(ordering: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined): Observable<Stores_listReturn> {
			return this.http.get<Stores_listReturn>(this.baseUri + 'stores?ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the store.
		 * Get stores/{id}
		 */
		Stores_read(): Observable<StoreSingle> {
			return this.http.get<StoreSingle>(this.baseUri + 'stores/{id}', {});
		}

		/**
		 * Get a list of tags.
		 * Get tags
		 * @param {number} page A page number within the paginated result set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Number of results to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Tags_list(page: number | null | undefined, page_size: number | null | undefined): Observable<Tags_listReturn> {
			return this.http.get<Tags_listReturn>(this.baseUri + 'tags?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Get details of the tag.
		 * Get tags/{id}
		 */
		Tags_read(): Observable<TagSingle> {
			return this.http.get<TagSingle>(this.baseUri + 'tags/{id}', {});
		}
	}

	export interface Creator_roles_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Position>;
	}
	export interface Creator_roles_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateCreator_roles_listReturnFormGroup() {
		return new FormGroup<Creator_roles_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Creators_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Person>;
	}
	export interface Creators_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateCreators_listReturnFormGroup() {
		return new FormGroup<Creators_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Developers_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Developer>;
	}
	export interface Developers_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateDevelopers_listReturnFormGroup() {
		return new FormGroup<Developers_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Game>;
	}
	export interface Games_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_listReturnFormGroup() {
		return new FormGroup<Games_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_additions_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Game>;
	}
	export interface Games_additions_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_additions_listReturnFormGroup() {
		return new FormGroup<Games_additions_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_development_team_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<GamePersonList>;
	}
	export interface Games_development_team_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_development_team_listReturnFormGroup() {
		return new FormGroup<Games_development_team_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_game_series_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Game>;
	}
	export interface Games_game_series_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_game_series_listReturnFormGroup() {
		return new FormGroup<Games_game_series_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_parent_games_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Game>;
	}
	export interface Games_parent_games_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_parent_games_listReturnFormGroup() {
		return new FormGroup<Games_parent_games_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_screenshots_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<ScreenShot>;
	}
	export interface Games_screenshots_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_screenshots_listReturnFormGroup() {
		return new FormGroup<Games_screenshots_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Games_stores_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<GameStoreFull>;
	}
	export interface Games_stores_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGames_stores_listReturnFormGroup() {
		return new FormGroup<Games_stores_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Genres_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Genre>;
	}
	export interface Genres_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateGenres_listReturnFormGroup() {
		return new FormGroup<Genres_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Platforms_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Platform>;
	}
	export interface Platforms_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePlatforms_listReturnFormGroup() {
		return new FormGroup<Platforms_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Platforms_lists_parents_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<PlatformParentSingle>;
	}
	export interface Platforms_lists_parents_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePlatforms_lists_parents_listReturnFormGroup() {
		return new FormGroup<Platforms_lists_parents_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Publishers_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Publisher>;
	}
	export interface Publishers_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePublishers_listReturnFormGroup() {
		return new FormGroup<Publishers_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stores_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Store>;
	}
	export interface Stores_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateStores_listReturnFormGroup() {
		return new FormGroup<Stores_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags_listReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		next?: string | null;
		previous?: string | null;

		/** Required */
		results: Array<Tag>;
	}
	export interface Tags_listReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateTags_listReturnFormGroup() {
		return new FormGroup<Tags_listReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

}

