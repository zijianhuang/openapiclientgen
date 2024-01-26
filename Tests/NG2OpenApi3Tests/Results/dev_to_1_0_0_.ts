import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of an Article to be created/updated */
	export interface Article {
		article?: ArticleArticle;
	}

	/** Representation of an Article to be created/updated */
	export interface ArticleFormProperties {
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
		});

	}

	export interface ArticleArticle {
		body_markdown?: string | null;
		canonical_url?: string | null;
		description?: string | null;
		main_image?: string | null;
		organization_id?: number | null;
		published?: boolean | null;
		series?: string | null;
		tags?: string | null;
		title?: string | null;
	}
	export interface ArticleArticleFormProperties {
		body_markdown: FormControl<string | null | undefined>,
		canonical_url: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		main_image: FormControl<string | null | undefined>,
		organization_id: FormControl<number | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		series: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateArticleArticleFormGroup() {
		return new FormGroup<ArticleArticleFormProperties>({
			body_markdown: new FormControl<string | null | undefined>(undefined),
			canonical_url: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			main_image: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<number | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			series: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flare tag of the article */
	export interface ArticleFlareTag {

		/** Background color (hexadecimal) */
		bg_color_hex?: string | null;
		name?: string | null;

		/** Text color (hexadecimal) */
		text_color_hex?: string | null;
	}

	/** Flare tag of the article */
	export interface ArticleFlareTagFormProperties {

		/** Background color (hexadecimal) */
		bg_color_hex: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Text color (hexadecimal) */
		text_color_hex: FormControl<string | null | undefined>,
	}
	export function CreateArticleFlareTagFormGroup() {
		return new FormGroup<ArticleFlareTagFormProperties>({
			bg_color_hex: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text_color_hex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of an article or post returned in a list */
	export interface ArticleIndex {

		/** Required */
		canonical_url: string;

		/** Required */
		cover_image: string;

		/** Required */
		created_at: Date;

		/** Required */
		crossposted_at: Date;

		/** Required */
		description: string;

		/** Required */
		edited_at: Date;

		/** Flare tag of the article */
		flare_tag?: ArticleFlareTag;

		/** Required */
		id: number;

		/** Required */
		last_comment_at: Date;

		/** The organization the resource belongs to */
		organization?: SharedOrganization;

		/** Required */
		path: string;

		/** Required */
		positive_reactions_count: number;

		/** Required */
		public_reactions_count: number;

		/** Required */
		published_at: Date;

		/**
		 * Crossposting or published date time
		 * Required
		 */
		published_timestamp: Date;

		/** Required */
		readable_publish_date: string;

		/**
		 * Reading time, in minutes
		 * Required
		 */
		reading_time_minutes: number;

		/** Required */
		slug: string;

		/** Required */
		social_image: string;

		/** Required */
		tag_list: Array<string>;

		/** Required */
		tags: string;

		/** Required */
		title: string;

		/** Required */
		type_of: string;

		/** Required */
		url: string;

		/**
		 * The resource creator
		 * Required
		 */
		user: SharedUser;
	}

	/** Representation of an article or post returned in a list */
	export interface ArticleIndexFormProperties {

		/** Required */
		canonical_url: FormControl<string | null | undefined>,

		/** Required */
		cover_image: FormControl<string | null | undefined>,

		/** Required */
		created_at: FormControl<Date | null | undefined>,

		/** Required */
		crossposted_at: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		edited_at: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		last_comment_at: FormControl<Date | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		positive_reactions_count: FormControl<number | null | undefined>,

		/** Required */
		public_reactions_count: FormControl<number | null | undefined>,

		/** Required */
		published_at: FormControl<Date | null | undefined>,

		/**
		 * Crossposting or published date time
		 * Required
		 */
		published_timestamp: FormControl<Date | null | undefined>,

		/** Required */
		readable_publish_date: FormControl<string | null | undefined>,

		/**
		 * Reading time, in minutes
		 * Required
		 */
		reading_time_minutes: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		social_image: FormControl<string | null | undefined>,

		/** Required */
		tags: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type_of: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleIndexFormGroup() {
		return new FormGroup<ArticleIndexFormProperties>({
			canonical_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cover_image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			crossposted_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edited_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_comment_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			positive_reactions_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			public_reactions_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			published_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			published_timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			readable_publish_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reading_time_minutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			social_image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type_of: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The organization the resource belongs to */
	export interface SharedOrganization {
		name?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** Profile image (90x90) */
		profile_image_90?: string | null;
		slug?: string | null;
		username?: string | null;
	}

	/** The organization the resource belongs to */
	export interface SharedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** Profile image (90x90) */
		profile_image_90: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateSharedOrganizationFormGroup() {
		return new FormGroup<SharedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			profile_image_90: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource creator */
	export interface SharedUser {
		github_username?: string | null;
		name?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** Profile image (90x90) */
		profile_image_90?: string | null;
		twitter_username?: string | null;
		username?: string | null;
		website_url?: string | null;
	}

	/** The resource creator */
	export interface SharedUserFormProperties {
		github_username: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** Profile image (90x90) */
		profile_image_90: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateSharedUserFormGroup() {
		return new FormGroup<SharedUserFormProperties>({
			github_username: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			profile_image_90: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Comment on an Article or Podcast Episode */
	export interface Comment {
		created_at?: Date | null;
		id_code?: string | null;

		/** Podcast image url */
		image_url?: string | null;
		type_of?: string | null;
	}

	/** A Comment on an Article or Podcast Episode */
	export interface CommentFormProperties {
		created_at: FormControl<Date | null | undefined>,
		id_code: FormControl<string | null | undefined>,

		/** Podcast image url */
		image_url: FormControl<string | null | undefined>,
		type_of: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id_code: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Display Ad, aka Billboard, aka Widget */
	export interface DisplayAd {

		/** Ad must be both published and approved to be in rotation */
		approved?: boolean | null;

		/** Articles this ad should *not* appear on (blank means no articles are disallowed, and this ad can appear next to any/all articles). Comma-separated list of integer Article IDs */
		article_exclude_ids?: string | null;

		/**
		 * The text (in markdown) of the ad (required)
		 * Required
		 */
		body_markdown: string;

		/** Identifies the user who created the ad. */
		creator_id?: number | null;

		/** Potentially limits visitors to whom the ad is visible */
		display_to?: DisplayAdDisplay_to | null;

		/** The ID of the Display Ad */
		id?: number | null;

		/**
		 * For internal use, helps distinguish ads from one another
		 * Required
		 */
		name: string;

		/** Identifies the organization to which the ad belongs */
		organization_id?: number | null;

		/**
		 * Identifies which area of site layout the ad can appear in
		 * Required
		 */
		placement_area: DisplayAdPlacement_area;

		/** Ad must be both published and approved to be in rotation */
		published?: boolean | null;

		/** Tags on which this ad can be displayed (blank is all/any tags) */
		tag_list?: string | null;

		/**
		 * Types of the billboards:
		 * in_house (created by admins),
		 * community (created by an entity, appears on entity's content),
		 * external ( created by an entity, or a non-entity, can appear everywhere)
		 */
		type_of?: DisplayAdType_of | null;
	}

	/** A Display Ad, aka Billboard, aka Widget */
	export interface DisplayAdFormProperties {

		/** Ad must be both published and approved to be in rotation */
		approved: FormControl<boolean | null | undefined>,

		/** Articles this ad should *not* appear on (blank means no articles are disallowed, and this ad can appear next to any/all articles). Comma-separated list of integer Article IDs */
		article_exclude_ids: FormControl<string | null | undefined>,

		/**
		 * The text (in markdown) of the ad (required)
		 * Required
		 */
		body_markdown: FormControl<string | null | undefined>,

		/** Identifies the user who created the ad. */
		creator_id: FormControl<number | null | undefined>,

		/** Potentially limits visitors to whom the ad is visible */
		display_to: FormControl<DisplayAdDisplay_to | null | undefined>,

		/** The ID of the Display Ad */
		id: FormControl<number | null | undefined>,

		/**
		 * For internal use, helps distinguish ads from one another
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Identifies the organization to which the ad belongs */
		organization_id: FormControl<number | null | undefined>,

		/**
		 * Identifies which area of site layout the ad can appear in
		 * Required
		 */
		placement_area: FormControl<DisplayAdPlacement_area | null | undefined>,

		/** Ad must be both published and approved to be in rotation */
		published: FormControl<boolean | null | undefined>,

		/** Tags on which this ad can be displayed (blank is all/any tags) */
		tag_list: FormControl<string | null | undefined>,

		/**
		 * Types of the billboards:
		 * in_house (created by admins),
		 * community (created by an entity, appears on entity's content),
		 * external ( created by an entity, or a non-entity, can appear everywhere)
		 */
		type_of: FormControl<DisplayAdType_of | null | undefined>,
	}
	export function CreateDisplayAdFormGroup() {
		return new FormGroup<DisplayAdFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			article_exclude_ids: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creator_id: new FormControl<number | null | undefined>(undefined),
			display_to: new FormControl<DisplayAdDisplay_to | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			organization_id: new FormControl<number | null | undefined>(undefined),
			placement_area: new FormControl<DisplayAdPlacement_area | null | undefined>(undefined, [Validators.required]),
			published: new FormControl<boolean | null | undefined>(undefined),
			tag_list: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<DisplayAdType_of | null | undefined>(undefined),
		});

	}

	export enum DisplayAdDisplay_to { all = 'all', logged_in = 'logged_in', logged_out = 'logged_out' }

	export enum DisplayAdPlacement_area { sidebar_left = 'sidebar_left', sidebar_left_2 = 'sidebar_left_2', sidebar_right = 'sidebar_right', feed_first = 'feed_first', feed_second = 'feed_second', feed_third = 'feed_third', post_sidebar = 'post_sidebar', post_comments = 'post_comments' }

	export enum DisplayAdType_of { in_house = 'in_house', community = 'community', external = 'external' }


	/** Representation of a followed tag */
	export interface FollowedTag {

		/**
		 * Tag id
		 * Required
		 */
		id: number;

		/** Required */
		name: string;

		/** Required */
		points: number;
	}

	/** Representation of a followed tag */
	export interface FollowedTagFormProperties {

		/**
		 * Tag id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		points: FormControl<number | null | undefined>,
	}
	export function CreateFollowedTagFormGroup() {
		return new FormGroup<FollowedTagFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			points: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Representation of an Organization */
	export interface Organization {
		github_username?: string | null;
		joined_at?: string | null;
		location?: string | null;
		name?: string | null;
		story?: string | null;
		summary?: string | null;
		tag_line?: string | null;
		tech_stack?: string | null;
		twitter_username?: string | null;
		type_of?: string | null;
		url?: string | null;
		username?: string | null;
	}

	/** Representation of an Organization */
	export interface OrganizationFormProperties {
		github_username: FormControl<string | null | undefined>,
		joined_at: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		story: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		tag_line: FormControl<string | null | undefined>,
		tech_stack: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		type_of: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			github_username: new FormControl<string | null | undefined>(undefined),
			joined_at: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			story: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			tag_line: new FormControl<string | null | undefined>(undefined),
			tech_stack: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a page object */
	export interface Page {

		/** For JSON pages, the JSON body */
		body_json?: string | null;

		/** The text (in markdown) of the ad (required) */
		body_markdown?: string | null;

		/**
		 * For internal use, helps similar pages from one another
		 * Required
		 */
		description: string;

		/** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
		is_top_level_path?: boolean | null;

		/**
		 * Used to link to this page in URLs, must be unique and URL-safe
		 * Required
		 */
		slug: string;
		social_image?: string | null;

		/**
		 * Controls what kind of layout the page is rendered in
		 * Required
		 */
		template: PageTemplate;

		/**
		 * Title of the page
		 * Required
		 */
		title: string;
	}

	/** Representation of a page object */
	export interface PageFormProperties {

		/** For JSON pages, the JSON body */
		body_json: FormControl<string | null | undefined>,

		/** The text (in markdown) of the ad (required) */
		body_markdown: FormControl<string | null | undefined>,

		/**
		 * For internal use, helps similar pages from one another
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
		is_top_level_path: FormControl<boolean | null | undefined>,

		/**
		 * Used to link to this page in URLs, must be unique and URL-safe
		 * Required
		 */
		slug: FormControl<string | null | undefined>,
		social_image: FormControl<string | null | undefined>,

		/**
		 * Controls what kind of layout the page is rendered in
		 * Required
		 */
		template: FormControl<PageTemplate | null | undefined>,

		/**
		 * Title of the page
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			body_json: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_top_level_path: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			social_image: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<PageTemplate | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PageTemplate { contained = 'contained', full_within_layout = 'full_within_layout', nav_bar_included = 'nav_bar_included', json = 'json' }


	/** Representation of a podcast episode returned in a list */
	export interface PodcastEpisodeIndex {

		/** Required */
		class_name: string;

		/** Required */
		id: number;

		/**
		 * Podcast episode image url or podcast image url
		 * Required
		 */
		image_url: string;

		/** Required */
		path: string;

		/**
		 * The podcast that the resource belongs to
		 * Required
		 */
		podcast: SharedPodcast;

		/** Required */
		title: string;

		/** Required */
		type_of: string;
	}

	/** Representation of a podcast episode returned in a list */
	export interface PodcastEpisodeIndexFormProperties {

		/** Required */
		class_name: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/**
		 * Podcast episode image url or podcast image url
		 * Required
		 */
		image_url: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type_of: FormControl<string | null | undefined>,
	}
	export function CreatePodcastEpisodeIndexFormGroup() {
		return new FormGroup<PodcastEpisodeIndexFormProperties>({
			class_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			image_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type_of: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The podcast that the resource belongs to */
	export interface SharedPodcast {

		/** Podcast image url */
		image_url?: string | null;
		slug?: string | null;
		title?: string | null;
	}

	/** The podcast that the resource belongs to */
	export interface SharedPodcastFormProperties {

		/** Podcast image url */
		image_url: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSharedPodcastFormGroup() {
		return new FormGroup<SharedPodcastFormProperties>({
			image_url: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A profile image object */
	export interface ProfileImage {

		/** Determines the type of the profile image owner (user or organization) */
		image_of?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** Profile image (90x90) */
		profile_image_90?: string | null;

		/** Return profile_image */
		type_of?: string | null;
	}

	/** A profile image object */
	export interface ProfileImageFormProperties {

		/** Determines the type of the profile image owner (user or organization) */
		image_of: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** Profile image (90x90) */
		profile_image_90: FormControl<string | null | undefined>,

		/** Return profile_image */
		type_of: FormControl<string | null | undefined>,
	}
	export function CreateProfileImageFormGroup() {
		return new FormGroup<ProfileImageFormProperties>({
			image_of: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			profile_image_90: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a tag */
	export interface Tag {
		bg_color_hex?: string | null;

		/** Tag id */
		id?: number | null;
		name?: string | null;
		text_color_hex?: string | null;
	}

	/** Representation of a tag */
	export interface TagFormProperties {
		bg_color_hex: FormControl<string | null | undefined>,

		/** Tag id */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		text_color_hex: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			bg_color_hex: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text_color_hex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The representation of a user */
	export interface User {
		github_username?: string | null;
		id?: number | null;
		joined_at?: string | null;
		location?: string | null;
		name?: string | null;
		profile_image?: string | null;
		summary?: string | null;
		twitter_username?: string | null;
		type_of?: string | null;
		username?: string | null;
		website_url?: string | null;
	}

	/** The representation of a user */
	export interface UserFormProperties {
		github_username: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		joined_at: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		type_of: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			github_username: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			joined_at: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User invite parameters */
	export interface UserInviteParam {
		email?: string | null;
		name?: string | null;
	}

	/** User invite parameters */
	export interface UserInviteParamFormProperties {
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserInviteParamFormGroup() {
		return new FormGroup<UserInviteParamFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of an Article with video */
	export interface VideoArticle {
		cloudinary_video_url?: string | null;
		id?: number | null;
		path?: string | null;
		title?: string | null;
		type_of?: string | null;

		/** Author of the article */
		user?: VideoArticleUser;
		user_id?: number | null;
		video_duration_in_minutes?: string | null;
		video_source_url?: string | null;
	}

	/** Representation of an Article with video */
	export interface VideoArticleFormProperties {
		cloudinary_video_url: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type_of: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		video_duration_in_minutes: FormControl<string | null | undefined>,
		video_source_url: FormControl<string | null | undefined>,
	}
	export function CreateVideoArticleFormGroup() {
		return new FormGroup<VideoArticleFormProperties>({
			cloudinary_video_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			video_duration_in_minutes: new FormControl<string | null | undefined>(undefined),
			video_source_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoArticleUser {
		name?: string | null;
	}
	export interface VideoArticleUserFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateVideoArticleUserFormGroup() {
		return new FormGroup<VideoArticleUserFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Invite a User
		 * This endpoint allows the client to trigger an invitation to the provided email address.
		 * It requires a token from a user with `super_admin` privileges.
		 * Post api/admin/users
		 * @return {void} Successful
		 */
		ApiAdminUsersPost(requestBody: UserInviteParam, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/admin/users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Published articles
		 * This endpoint allows the client to retrieve a list of articles.
		 * "Articles" are all the posts that users create on DEV that typically
		 * show up in the feed. They can be a blog post, a discussion question,
		 * a help thread etc. but is referred to as article within the code.
		 * By default it will return featured, published articles ordered
		 * by descending popularity.
		 * It supports pagination, each page will contain `30` articles by default.
		 * Get api/articles
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @param {string} tag Using this parameter will retrieve articles that contain the requested tag. Articles
		 * will be ordered by descending popularity.This parameter can be used in conjuction with `top`.
		 * @param {string} tags Using this parameter will retrieve articles with any of the comma-separated tags.
		 * Articles will be ordered by descending popularity.
		 * @param {string} tags_exclude Using this parameter will retrieve articles that do _not_ contain _any_
		 * of comma-separated tags. Articles will be ordered by descending popularity.
		 * @param {string} username Using this parameter will retrieve articles belonging
		 *             to a User or Organization ordered by descending publication date.
		 *             If `state=all` the number of items returned will be `1000` instead of the default `30`.
		 *             This parameter can be used in conjuction with `state`.
		 * @param {ApiArticlesGetByPageAndPer_pageAndTagAndTagsAndTags_excludeAndUsernameAndStateAndTopAndCollection_idState} state Using this parameter will allow the client to check which articles are fresh or rising.
		 *             If `state=fresh` the server will return fresh articles.
		 *             If `state=rising` the server will return rising articles.
		 *             This param can be used in conjuction with `username`, only if set to `all`.
		 * @param {number} top Using this parameter will allow the client to return the most popular articles
		 * in the last `N` days.
		 * `top` indicates the number of days since publication of the articles returned.
		 * This param can be used in conjuction with `tag`.
		 * @param {number} collection_id Adding this will allow the client to return the list of articles
		 * belonging to the requested collection, ordered by ascending publication date.
		 * @return {Array<ArticleIndex>} A List of Articles
		 */
		ApiArticlesGetByPageAndPer_pageAndTagAndTagsAndTags_excludeAndUsernameAndStateAndTopAndCollection_id(page: number | null | undefined, per_page: number | null | undefined, tag: string | null | undefined, tags: string | null | undefined, tags_exclude: string | null | undefined, username: string | null | undefined, state: ApiArticlesGetByPageAndPer_pageAndTagAndTagsAndTags_excludeAndUsernameAndStateAndTopAndCollection_idState | null | undefined, top: number | null | undefined, collection_id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles?page=' + page + '&per_page=' + per_page + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&tags_exclude=' + (tags_exclude == null ? '' : encodeURIComponent(tags_exclude)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&state=' + state + '&top=' + top + '&collection_id=' + collection_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Publish article
		 * This endpoint allows the client to create a new article.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * Post api/articles
		 * @return {void} 
		 */
		ApiArticlesPost(requestBody: Article, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/articles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Published articles sorted by published date
		 * This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.
		 * It supports pagination, each page will contain 30 articles by default.
		 * Get api/articles/latest
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A List of Articles
		 */
		ApiArticlesLatestGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles/latest?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User's articles
		 * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * Published articles will be in reverse chronological publication order.
		 * It will return published articles with pagination. By default a page will contain 30 articles.
		 * Get api/articles/me
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A List of the authenticated user's Articles
		 */
		ApiArticlesMeGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles/me?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User's all articles
		 * This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * It will return both published and unpublished articles with pagination.
		 * Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.
		 * By default a page will contain 30 articles.
		 * Get api/articles/me/all
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A List of the authenticated user's Articles
		 */
		ApiArticlesMeAllGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles/me/all?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User's published articles
		 * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * Published articles will be in reverse chronological publication order.
		 * It will return published articles with pagination. By default a page will contain 30 articles.
		 * Get api/articles/me/published
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A List of the authenticated user's Articles
		 */
		ApiArticlesMePublishedGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles/me/published?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User's unpublished articles
		 * This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * Unpublished articles will be in reverse chronological creation order.
		 * It will return unpublished articles with pagination. By default a page will contain 30 articles.
		 * Get api/articles/me/unpublished
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A List of the authenticated user's Articles
		 */
		ApiArticlesMeUnpublishedGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/articles/me/unpublished?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Published article by id
		 * This endpoint allows the client to retrieve a single published article given its `id`.
		 * Get api/articles/{id}
		 * @return {string} An Article
		 */
		ApiArticles_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/articles/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Update an article by id
		 * This endpoint allows the client to update an existing article.
		 * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
		 * Put api/articles/{id}
		 * @param {number} id The ID of the user to unpublish.
		 * @return {void} An Article
		 */
		ApiArticles_idPut(id: number, requestBody: Article, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/articles/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unpublish an article
		 * This endpoint allows the client to unpublish an article.
		 * The user associated with the API key must have any 'admin' or 'moderator' role.
		 * The article will be unpublished and will no longer be visible to the public. It will remain
		 * in the database and will set back to draft status on the author's posts dashboard. Any
		 * notifications associated with the article will be deleted. Any comments on the article
		 * will remain.
		 * Put api/articles/{id}/unpublish
		 * @param {number} id The ID of the article to unpublish.
		 * @param {string} note Content for the note that's created along with unpublishing
		 * @return {void} 
		 */
		ApiArticles_idUnpublishPutByNote(id: number, note: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/articles/' + id + '/unpublish?note=' + (note == null ? '' : encodeURIComponent(note)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Published article by path
		 * This endpoint allows the client to retrieve a single published article given its `path`.
		 * Get api/articles/{username}/{slug}
		 * @return {string} An Article
		 */
		ApiArticles_username_slugGet(username: string, slug: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/articles/' + (username == null ? '' : encodeURIComponent(username)) + '/' + (slug == null ? '' : encodeURIComponent(slug)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Comments
		 * This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.
		 * It will return the all top level comments with their nested comments as threads. See the format specification for further details.
		 * Get api/comments
		 * @param {string} a_id Article identifier.
		 * @param {string} p_id Podcast Episode identifier.
		 * @return {Array<Comment>} A List of Comments
		 */
		ApiCommentsGetByA_idAndP_id(a_id: string | null | undefined, p_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Comment>> {
			return this.http.get<Array<Comment>>(this.baseUri + 'api/comments?a_id=' + (a_id == null ? '' : encodeURIComponent(a_id)) + '&p_id=' + (p_id == null ? '' : encodeURIComponent(p_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Comment by id
		 * This endpoint allows the client to retrieve a comment as well as his descendants comments.
		 * It will return the required comment (the root) with its nested descendants as a thread.
		 * See the format specification for further details.
		 * Get api/comments/{id}
		 * @param {number} id Comment identifier.
		 * @return {void} A List of the Comments
		 */
		ApiComments_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/comments/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * display ads
		 * This endpoint allows the client to retrieve a list of all display ads.
		 * Get api/display_ads
		 * @return {Array<DisplayAd>} successful
		 */
		ApiDisplay_adsGet(headersHandler?: () => HttpHeaders): Observable<Array<DisplayAd>> {
			return this.http.get<Array<DisplayAd>>(this.baseUri + 'api/display_ads', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * display ads
		 * This endpoint allows the client to create a new display ad.
		 * Post api/display_ads
		 * @return {string} successful
		 */
		ApiDisplay_adsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/display_ads', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * display ad
		 * This endpoint allows the client to retrieve a single display ad, via its id.
		 * Get api/display_ads/{id}
		 * @param {number} id The ID of the display ad.
		 * @return {void} successful
		 */
		ApiDisplay_ads_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/display_ads/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * display ads
		 * This endpoint allows the client to update the attributes of a single display ad, via its id.
		 * Put api/display_ads/{id}
		 * @param {number} id The ID of the display ad.
		 * @return {string} successful
		 */
		ApiDisplay_ads_idPut(id: number, requestBody: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'api/display_ads/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * unpublish
		 * This endpoint allows the client to remove a display ad from rotation by un-publishing it.
		 * Put api/display_ads/{id}/unpublish
		 * @param {number} id The ID of the display ad to unpublish.
		 * @return {void} 
		 */
		ApiDisplay_ads_idUnpublishPut(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/display_ads/' + id + '/unpublish', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Followers
		 * This endpoint allows the client to retrieve a list of the followers they have.
		 * "Followers" are users that are following other users on the website.
		 * It supports pagination, each page will contain 80 followers by default.
		 * Get api/followers/users
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @param {string} sort Default is 'created_at'. Specifies the sort order for the created_at param of the follow
		 *                                 relationship. To sort by newest followers first (descending order) specify
		 *                                 ?sort=-created_at.
		 * @return {Array<ApiFollowersUsersGetByPageAndPer_pageAndSortReturn>} A List of followers
		 */
		ApiFollowersUsersGetByPageAndPer_pageAndSort(page: number | null | undefined, per_page: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ApiFollowersUsersGetByPageAndPer_pageAndSortReturn>> {
			return this.http.get<Array<ApiFollowersUsersGetByPageAndPer_pageAndSortReturn>>(this.baseUri + 'api/followers/users?page=' + page + '&per_page=' + per_page + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Followed Tags
		 * This endpoint allows the client to retrieve a list of the tags they follow.
		 * Get api/follows/tags
		 * @return {Array<FollowedTag>} A List of followed tags
		 */
		ApiFollowsTagsGet(headersHandler?: () => HttpHeaders): Observable<Array<FollowedTag>> {
			return this.http.get<Array<FollowedTag>>(this.baseUri + 'api/follows/tags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * An organization
		 * This endpoint allows the client to retrieve a single organization by their username
		 * Get api/organizations/{username}
		 * @return {string} An Organization
		 */
		ApiOrganizations_usernameGet(username: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/organizations/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Organization's Articles
		 * This endpoint allows the client to retrieve a list of Articles belonging to the organization
		 * It supports pagination, each page will contain `30` users by default.
		 * Get api/organizations/{username}/articles
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} An Organization's Articles
		 */
		ApiOrganizations_usernameArticlesGetByPageAndPer_page(username: string, page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/organizations/' + (username == null ? '' : encodeURIComponent(username)) + '/articles&page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Organization's users
		 * This endpoint allows the client to retrieve a list of users belonging to the organization
		 * It supports pagination, each page will contain `30` users by default.
		 * Get api/organizations/{username}/users
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<User>} An Organization's users
		 */
		ApiOrganizations_usernameUsersGetByPageAndPer_page(username: string, page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'api/organizations/' + (username == null ? '' : encodeURIComponent(username)) + '/users&page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * show details for all pages
		 * This endpoint allows the client to retrieve details for all Page objects.
		 * Get api/pages
		 * @return {Array<Page>} successful
		 */
		ApiPagesGet(headersHandler?: () => HttpHeaders): Observable<Array<Page>> {
			return this.http.get<Array<Page>>(this.baseUri + 'api/pages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * pages
		 * This endpoint allows the client to create a new page.
		 * Post api/pages
		 * @return {void} successful
		 */
		ApiPagesPost(requestBody: ApiPagesPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/pages', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * remove a page
		 * This endpoint allows the client to delete a single Page object, specified by ID.
		 * Delete api/pages/{id}
		 * @param {number} id The ID of the page.
		 * @return {Page} successful
		 */
		ApiPages_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.delete<Page>(this.baseUri + 'api/pages/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * show details for a page
		 * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
		 * Get api/pages/{id}
		 * @param {number} id The ID of the page.
		 * @return {Page} successful
		 */
		ApiPages_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.get<Page>(this.baseUri + 'api/pages/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * update details for a page
		 * This endpoint allows the client to retrieve details for a single Page object, specified by ID.
		 * Put api/pages/{id}
		 * @param {number} id The ID of the page.
		 * @return {Page} successful
		 */
		ApiPages_idPut(id: number, requestBody: Page, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.put<Page>(this.baseUri + 'api/pages/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Podcast Episodes
		 * This endpoint allows the client to retrieve a list of podcast episodes.
		 * "Podcast episodes" are episodes belonging to podcasts.
		 * It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
		 * It supports pagination, each page will contain 30 articles by default.
		 * Get api/podcast_episodes
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @param {string} username Using this parameter will retrieve episodes belonging to a specific podcast.
		 * @return {Array<PodcastEpisodeIndex>} A List of Podcast episodes filtered by username
		 */
		ApiPodcast_episodesGetByPageAndPer_pageAndUsername(page: number | null | undefined, per_page: number | null | undefined, username: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<PodcastEpisodeIndex>> {
			return this.http.get<Array<PodcastEpisodeIndex>>(this.baseUri + 'api/podcast_episodes?page=' + page + '&per_page=' + per_page + '&username=' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * A Users or organizations profile image
		 * This endpoint allows the client to retrieve a user or organization profile image information by its
		 * corresponding username.
		 * Get api/profile_images/{username}
		 * @param {string} username The parameter is the username of the user or the username of the organization.
		 * @return {string} An object containing profile image details
		 */
		ApiProfile_images_usernameGet(username: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/profile_images/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * create reaction
		 * This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
		 * * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
		 * * "Like"ing that Article a second time will return the previous "like"
		 * Post api/reactions
		 * @return {void} successful
		 */
		ApiReactionsPostByCategoryAndReactable_idAndReactable_type(category: ApiReactionsPostByCategoryAndReactable_idAndReactable_typeCategory, reactable_id: number, reactable_type: ApiReactionsPostByCategoryAndReactable_idAndReactable_typeReactable_type, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/reactions?category=' + category + '&reactable_id=' + reactable_id + '&reactable_type=' + reactable_type, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * toggle reaction
		 * This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
		 * * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
		 * * "Like"ing that Article a second time will remove the "like" from the user
		 * Post api/reactions/toggle
		 * @return {void} successful
		 */
		ApiReactionsTogglePostByCategoryAndReactable_idAndReactable_type(category: ApiReactionsPostByCategoryAndReactable_idAndReactable_typeCategory, reactable_id: number, reactable_type: ApiReactionsPostByCategoryAndReactable_idAndReactable_typeReactable_type, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/reactions/toggle?category=' + category + '&reactable_id=' + reactable_id + '&reactable_type=' + reactable_type, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Readinglist
		 * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
		 * It supports pagination, each page will contain `30` articles by default
		 * Get api/readinglist
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<ArticleIndex>} A list of articles in the users readinglist
		 */
		ApiReadinglistGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ArticleIndex>> {
			return this.http.get<Array<ArticleIndex>>(this.baseUri + 'api/readinglist?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Tags
		 * This endpoint allows the client to retrieve a list of tags that can be used to tag articles.
		 * It will return tags ordered by popularity.
		 * It supports pagination, each page will contain 10 tags by default.
		 * Get api/tags
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<Tag>} A List of all tags
		 */
		ApiTagsGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'api/tags?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * The authenticated user
		 * This endpoint allows the client to retrieve information about the authenticated user
		 * Get api/users/me
		 * @return {string} successful
		 */
		ApiUsersMeGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/users/me', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * A User
		 * This endpoint allows the client to retrieve a single user, either by id
		 * or by the user's username.
		 * For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser
		 * Get api/users/{id}
		 * @return {string} successful
		 */
		ApiUsers_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/users/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Suspend a User
		 * This endpoint allows the client to suspend a user.
		 * The user associated with the API key must have any 'admin' or 'moderator' role.
		 * This specified user will be assigned the 'suspended' role. Suspending a user will stop the
		 * user from posting new posts and comments. It doesn't delete any of the user's content, just
		 * prevents them from creating new content while suspended. Users are not notified of their suspension
		 * in the UI, so if you want them to know about this, you must notify them.
		 * Put api/users/{id}/suspend
		 * @param {number} id The ID of the user to suspend.
		 * @return {void} 
		 */
		ApiUsers_idSuspendPut(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/users/' + id + '/suspend', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unpublish a User's Articles and Comments
		 * This endpoint allows the client to unpublish all of the articles and
		 * comments created by a user.
		 * The user associated with the API key must have any 'admin' or 'moderator' role.
		 * This specified user's articles and comments will be unpublished and will no longer be
		 * visible to the public. They will remain in the database and will set back to draft status
		 * on the specified user's  dashboard. Any notifications associated with the specified user's
		 * articles and comments will be deleted.
		 * Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
		 * status code immediately, but the articles and comments will not be unpublished until the
		 * request is completed on the server.
		 * Put api/users/{id}/unpublish
		 * @param {number} id The ID of the user to unpublish.
		 * @return {void} 
		 */
		ApiUsers_idUnpublishPut(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/users/' + id + '/unpublish', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Articles with a video
		 * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.
		 * It will only return published video articles ordered by descending popularity.
		 * It supports pagination, each page will contain 24 articles by default.
		 * Get api/videos
		 * @param {number} page Pagination page
		 * @param {number} per_page Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
		 * @return {Array<VideoArticle>} A List of all articles with videos
		 */
		ApiVideosGetByPageAndPer_page(page: number | null | undefined, per_page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<VideoArticle>> {
			return this.http.get<Array<VideoArticle>>(this.baseUri + 'api/videos?page=' + page + '&per_page=' + per_page, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ApiArticlesGetByPageAndPer_pageAndTagAndTagsAndTags_excludeAndUsernameAndStateAndTopAndCollection_idState { fresh = 'fresh', rising = 'rising', all = 'all' }

	export interface ApiFollowersUsersGetByPageAndPer_pageAndSortReturn {
		id?: number | null;

		/** The follower's name */
		name?: string | null;

		/** A path to the follower's profile */
		path?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** user_follower by default */
		type_of?: string | null;

		/** The follower's user id */
		user_id?: number | null;
	}
	export interface ApiFollowersUsersGetByPageAndPer_pageAndSortReturnFormProperties {
		id: FormControl<number | null | undefined>,

		/** The follower's name */
		name: FormControl<string | null | undefined>,

		/** A path to the follower's profile */
		path: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** user_follower by default */
		type_of: FormControl<string | null | undefined>,

		/** The follower's user id */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateApiFollowersUsersGetByPageAndPer_pageAndSortReturnFormGroup() {
		return new FormGroup<ApiFollowersUsersGetByPageAndPer_pageAndSortReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			type_of: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiPagesPostPostBody {

		/** For JSON pages, the JSON body */
		body_json?: string | null;

		/** The text (in markdown) of the ad (required) */
		body_markdown?: string | null;

		/** For internal use, helps similar pages from one another */
		description?: string | null;

		/** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
		is_top_level_path?: boolean | null;

		/** Used to link to this page in URLs, must be unique and URL-safe */
		slug?: string | null;

		/** Controls what kind of layout the page is rendered in */
		template?: PageTemplate | null;

		/** Title of the page */
		title?: string | null;
	}
	export interface ApiPagesPostPostBodyFormProperties {

		/** For JSON pages, the JSON body */
		body_json: FormControl<string | null | undefined>,

		/** The text (in markdown) of the ad (required) */
		body_markdown: FormControl<string | null | undefined>,

		/** For internal use, helps similar pages from one another */
		description: FormControl<string | null | undefined>,

		/** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
		is_top_level_path: FormControl<boolean | null | undefined>,

		/** Used to link to this page in URLs, must be unique and URL-safe */
		slug: FormControl<string | null | undefined>,

		/** Controls what kind of layout the page is rendered in */
		template: FormControl<PageTemplate | null | undefined>,

		/** Title of the page */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApiPagesPostPostBodyFormGroup() {
		return new FormGroup<ApiPagesPostPostBodyFormProperties>({
			body_json: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			is_top_level_path: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<PageTemplate | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiReactionsPostByCategoryAndReactable_idAndReactable_typeCategory { like = 'like', unicorn = 'unicorn', exploding_head = 'exploding_head', raised_hands = 'raised_hands', fire = 'fire' }

	export enum ApiReactionsPostByCategoryAndReactable_idAndReactable_typeReactable_type { Comment = 'Comment', Article = 'Article', User = 'User' }

}

