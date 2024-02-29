import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Feedback {

		/** A comment written by the reviewer about the user (may be null). */
		content?: string | null;

		/** Date when the feedback was submitted. */
		date?: Date | null;
		feedback_id?: string | null;

		/** Set to true for positive feedback and false for negative feedback. */
		positive?: boolean | null;

		/** The user ID of the user that submitted the feedback. */
		reviewer_user_id?: string | null;

		/** The user ID of the user that the feedback is about. */
		user_id?: string | null;
	}
	export interface FeedbackFormProperties {

		/** A comment written by the reviewer about the user (may be null). */
		content: FormControl<string | null | undefined>,

		/** Date when the feedback was submitted. */
		date: FormControl<Date | null | undefined>,
		feedback_id: FormControl<string | null | undefined>,

		/** Set to true for positive feedback and false for negative feedback. */
		positive: FormControl<boolean | null | undefined>,

		/** The user ID of the user that submitted the feedback. */
		reviewer_user_id: FormControl<string | null | undefined>,

		/** The user ID of the user that the feedback is about. */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateFeedbackFormGroup() {
		return new FormGroup<FeedbackFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			feedback_id: new FormControl<string | null | undefined>(undefined),
			positive: new FormControl<boolean | null | undefined>(undefined),
			reviewer_user_id: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
	 */
	export interface Group {

		/** Provides information about the country that is associated with a group.  May be null. */
		country?: GroupCountry;
		group_id?: string | null;

		/** When true, anyone requesting membership to this group will be required to answer a new membership questionnaire. */
		has_questions?: boolean | null;

		/** A URL to the group homepage. */
		homepage?: string | null;

		/** A unique identifier for the group that is used in URLs. */
		identifier?: string | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;

		/**
		 * The number of members who belong to the group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		member_count?: number | null;

		/**
		 * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
		 */
		membership?: GroupMembership;

		/** The name of the group (not guaranteed to be unique). */
		name?: string | null;

		/** When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group. */
		open_archives?: boolean | null;

		/** When true, the group allows anyone to join.  When false, the group moderators review and approve applicants. */
		open_membership?: boolean | null;

		/** Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null. */
		region?: GroupRegion;

		/** The timezone that the group is in (eg. America/New_York). */
		timezone?: string | null;
	}

	/**
	 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
	 */
	export interface GroupFormProperties {
		group_id: FormControl<string | null | undefined>,

		/** When true, anyone requesting membership to this group will be required to answer a new membership questionnaire. */
		has_questions: FormControl<boolean | null | undefined>,

		/** A URL to the group homepage. */
		homepage: FormControl<string | null | undefined>,

		/** A unique identifier for the group that is used in URLs. */
		identifier: FormControl<string | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,

		/**
		 * The number of members who belong to the group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		member_count: FormControl<number | null | undefined>,

		/** The name of the group (not guaranteed to be unique). */
		name: FormControl<string | null | undefined>,

		/** When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group. */
		open_archives: FormControl<boolean | null | undefined>,

		/** When true, the group allows anyone to join.  When false, the group moderators review and approve applicants. */
		open_membership: FormControl<boolean | null | undefined>,

		/** The timezone that the group is in (eg. America/New_York). */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			group_id: new FormControl<string | null | undefined>(undefined),
			has_questions: new FormControl<boolean | null | undefined>(undefined),
			homepage: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			member_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_archives: new FormControl<boolean | null | undefined>(undefined),
			open_membership: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupCountry {

		/**
		 * A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
		 */
		abbreviation?: string | null;

		/** The name of the country. */
		name?: string | null;
	}
	export interface GroupCountryFormProperties {

		/**
		 * A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
		 */
		abbreviation: FormControl<string | null | undefined>,

		/** The name of the country. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupCountryFormGroup() {
		return new FormGroup<GroupCountryFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupMembership {

		/**
		 * The UTC date and time when the membership was last updated.
		 */
		date?: Date | null;

		/** Membership questionnaire data.  Will be null unless the membership status is pending-questions. */
		questionnaire?: GroupMembershipQuestionnaire;

		/**
		 * One of: subscribed, pending, pending-questions
		 */
		status?: string | null;
	}
	export interface GroupMembershipFormProperties {

		/**
		 * The UTC date and time when the membership was last updated.
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * One of: subscribed, pending, pending-questions
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGroupMembershipFormGroup() {
		return new FormGroup<GroupMembershipFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupMembershipQuestionnaire {

		/** A message from the group moderators to be displayed above the questions (may be null). */
		message?: string | null;

		/** The list of questions. */
		questions?: Array<string>;
	}
	export interface GroupMembershipQuestionnaireFormProperties {

		/** A message from the group moderators to be displayed above the questions (may be null). */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGroupMembershipQuestionnaireFormGroup() {
		return new FormGroup<GroupMembershipQuestionnaireFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupRegion {

		/** A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country). */
		abbreviation?: string | null;

		/** The name of the region. */
		name?: string | null;
	}
	export interface GroupRegionFormProperties {

		/** A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country). */
		abbreviation: FormControl<string | null | undefined>,

		/** The name of the region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupRegionFormGroup() {
		return new FormGroup<GroupRegionFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Photo {

		/**
		 * A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.
		 */
		blurhash?: string | null;

		/** All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties. */
		PhotoImages?: Array<PhotoImages>;
		photo_id?: string | null;

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail?: string | null;

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url?: string | null;
	}
	export interface PhotoFormProperties {

		/**
		 * A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.
		 */
		blurhash: FormControl<string | null | undefined>,
		photo_id: FormControl<string | null | undefined>,

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail: FormControl<string | null | undefined>,

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			blurhash: new FormControl<string | null | undefined>(undefined),
			photo_id: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoImages {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface PhotoImagesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePhotoImagesFormGroup() {
		return new FormGroup<PhotoImagesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An offer, wanted, admin, taken or received post. */
	export interface Post {
		content?: string | null;

		/** The UTC date and time when the post was published. */
		date?: Date | null;

		/**
		 * The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.
		 */
		expiration?: Date | null;

		/** Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null). */
		footer?: string | null;

		/**
		 * The group ID of the post.  For public posts, this is always null.
		 */
		group_id?: string | null;

		/**
		 * May be null if a post hasn't been mapped.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * May be null if a post hasn't been mapped.
		 * Type: double
		 */
		longitude?: number | null;

		/**
		 * For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.
		 */
		outcome?: string | null;

		/** Details about the photos associated with this post (may be null if there are no photos). */
		photos?: Array<Photo>;
		post_id?: string | null;

		/**
		 * The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repost_count?: number | null;

		/**
		 * For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.
		 */
		reselling?: boolean | null;

		/**
		 * The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
		 */
		source?: string | null;
		title?: string | null;

		/**
		 * The type of post.  One of: offer, taken, wanted, received, admin
		 */
		type?: string | null;

		/** The link to use to view the post on the trash nothing site. */
		url?: string | null;
		user_id?: string | null;
	}

	/** An offer, wanted, admin, taken or received post. */
	export interface PostFormProperties {
		content: FormControl<string | null | undefined>,

		/** The UTC date and time when the post was published. */
		date: FormControl<Date | null | undefined>,

		/**
		 * The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.
		 */
		expiration: FormControl<Date | null | undefined>,

		/** Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null). */
		footer: FormControl<string | null | undefined>,

		/**
		 * The group ID of the post.  For public posts, this is always null.
		 */
		group_id: FormControl<string | null | undefined>,

		/**
		 * May be null if a post hasn't been mapped.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * May be null if a post hasn't been mapped.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/**
		 * For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.
		 */
		outcome: FormControl<string | null | undefined>,
		post_id: FormControl<string | null | undefined>,

		/**
		 * The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repost_count: FormControl<number | null | undefined>,

		/**
		 * For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.
		 */
		reselling: FormControl<boolean | null | undefined>,

		/**
		 * The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.
		 */
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * The type of post.  One of: offer, taken, wanted, received, admin
		 */
		type: FormControl<string | null | undefined>,

		/** The link to use to view the post on the trash nothing site. */
		url: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			footer: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			outcome: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<string | null | undefined>(undefined),
			repost_count: new FormControl<number | null | undefined>(undefined),
			reselling: new FormControl<boolean | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostSearchResult extends Post {

		/**
		 * A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.
		 */
		search_content?: string | null;

		/**
		 * The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.
		 */
		search_title?: string | null;
	}
	export interface PostSearchResultFormProperties extends PostFormProperties {

		/**
		 * A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.
		 */
		search_content: FormControl<string | null | undefined>,

		/**
		 * The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.
		 */
		search_title: FormControl<string | null | undefined>,
	}
	export function CreatePostSearchResultFormGroup() {
		return new FormGroup<PostSearchResultFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
			footer: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			outcome: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<string | null | undefined>(undefined),
			repost_count: new FormControl<number | null | undefined>(undefined),
			reselling: new FormControl<boolean | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			search_content: new FormControl<string | null | undefined>(undefined),
			search_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {

		/**
		 * A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.
		 */
		about_me?: string | null;

		/**
		 * A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
		 */
		country?: string | null;
		feedback?: UserFeedback;

		/** The first name of the user (may be null). */
		firstname?: string | null;

		/** The last name of the user (may be null). */
		lastname?: string | null;

		/** The date and time when the user first became publicly active on a group (the date may be older than when the user signed up). */
		member_since?: string | null;

		/**
		 * A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		profile_image?: string | null;

		/**
		 * An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reply_time?: number | null;
		user_id?: string | null;

		/**
		 * A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		username?: string | null;
	}
	export interface UserFormProperties {

		/**
		 * A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.
		 */
		about_me: FormControl<string | null | undefined>,

		/**
		 * A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
		 */
		country: FormControl<string | null | undefined>,

		/** The first name of the user (may be null). */
		firstname: FormControl<string | null | undefined>,

		/** The last name of the user (may be null). */
		lastname: FormControl<string | null | undefined>,

		/** The date and time when the user first became publicly active on a group (the date may be older than when the user signed up). */
		member_since: FormControl<string | null | undefined>,

		/**
		 * A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		profile_image: FormControl<string | null | undefined>,

		/**
		 * An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reply_time: FormControl<number | null | undefined>,
		user_id: FormControl<string | null | undefined>,

		/**
		 * A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			about_me: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			member_since: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reply_time: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserFeedback {

		/**
		 * The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent_positive?: number | null;

		/**
		 * If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait
		 * some number of days before they will be able to leave negative feedback on this user.  This string can
		 * change depending on the number of days.  For example, when the current user must wait one day, the
		 * string will be '1-day-wait-for-negative'.  A wait is necessary because a lot of negative feedback results
		 * from communication issues that are resolved with more time.
		 */
		restriction?: string | null;

		/**
		 * The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score?: number | null;
	}
	export interface UserFeedbackFormProperties {

		/**
		 * The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent_positive: FormControl<number | null | undefined>,

		/**
		 * If the current user can leave positive or negative feedback on this user then restriction is null. <br /><br /> Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative <br /><br /> - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. <br /> - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is >= 0. <br /> - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. <br /> - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait
		 * some number of days before they will be able to leave negative feedback on this user.  This string can
		 * change depending on the number of days.  For example, when the current user must wait one day, the
		 * string will be '1-day-wait-for-negative'.  A wait is necessary because a lot of negative feedback results
		 * from communication issues that are resolved with more time.
		 */
		restriction: FormControl<string | null | undefined>,

		/**
		 * The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateUserFeedbackFormGroup() {
		return new FormGroup<UserFeedbackFormProperties>({
			percent_positive: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			restriction: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search groups
		 * Get groups
		 * @param {string} name Find groups that have the given text somewhere in their name (case insensitive).
		 * @param {number} latitude Find groups near the given latitude and longitude.
		 *     Type: double
		 * @param {number} longitude Find groups near the given latitude and longitude.
		 *     Type: double
		 * @param {number} distance When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.
		 *     Minimum: 0    Maximum: 150
		 * @param {string} country Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
		 * @param {string} region For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv
		 * @param {string} postal_code Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.
		 * @param {number} page The page of groups to return.
		 *     Minimum: 1
		 * @param {number} per_page The number of groups to return per page (must be >= 1 and <= 100).
		 *     Minimum: 1    Maximum: 100
		 * @return {Search_groupsReturn} The groups and paging data.
		 */
		Search_groups(name: string | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, distance: number | null | undefined, country: string | null | undefined, region: string | null | undefined, postal_code: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<Search_groupsReturn> {
			return this.http.get<Search_groupsReturn>(this.baseUri + 'groups?name=' + (name == null ? '' : encodeURIComponent(name)) + '&latitude=' + latitude + '&longitude=' + longitude + '&distance=' + distance + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&postal_code=' + (postal_code == null ? '' : encodeURIComponent(postal_code)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Retrieve multiple groups
		 * Get groups/multiple
		 * @param {string} group_ids The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.
		 * @return {Array<Group>} The groups.
		 */
		Get_groups_by_ids(group_ids: string): Observable<Array<Group>> {
			return this.http.get<Array<Group>>(this.baseUri + 'groups/multiple?group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)), {});
		}

		/**
		 * Retrieve a group
		 * Get groups/{group_id}
		 * @param {string} group_id The ID of the group to retrieve.
		 * @return {Group} The group.
		 */
		Get_group(group_id: string): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'groups/' + (group_id == null ? '' : encodeURIComponent(group_id)), {});
		}

		/**
		 * List posts
		 * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
		 * NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
		 * Get posts
		 * @param {string} sort_by How to sort the posts that are returned.  One of: date, active, distance <br /><br />
		 * Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page The page of posts to return.
		 *     Minimum: 1
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 *     Type: double
		 * @param {number} latitude The latitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} longitude The longitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 *     Minimum: 0    Maximum: 257500
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.
		 * @param {string} user_state If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.
		 * @param {number} include_reposts If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.
		 *     Minimum: 0    Maximum: 1
		 * @return {Get_postsReturn} The posts and paging data.
		 */
		Get_posts(sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined, user_state: string | null | undefined, include_reposts: number | null | undefined): Observable<Get_postsReturn> {
			return this.http.get<Get_postsReturn>(this.baseUri + 'posts?sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)) + '&user_state=' + (user_state == null ? '' : encodeURIComponent(user_state)) + '&include_reposts=' + include_reposts, {});
		}

		/**
		 * List all posts
		 * This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
		 * Get posts/all
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, wanted
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 50).
		 *     Minimum: 1    Maximum: 50
		 * @param {number} page The page of posts to return.
		 *     Minimum: 1
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 *     Type: double
		 * @return {Get_all_postsReturn} The posts.
		 */
		Get_all_posts(types: string, date_min: Date, date_max: Date, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined): Observable<Get_all_postsReturn> {
			return this.http.get<Get_all_postsReturn>(this.baseUri + 'posts/all?types=' + (types == null ? '' : encodeURIComponent(types)) + '&date_min=' + date_min.toISOString() + '&date_max=' + date_max.toISOString() + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio, {});
		}

		/**
		 * List all post changes
		 * This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
		 * Get posts/all/changes
		 * @param {Date} date_min Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
		 * @param {Date} date_max Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
		 * @param {number} per_page The number of changes to return per page (must be >= 1 and <= 50).
		 *     Minimum: 1    Maximum: 50
		 * @param {number} page The page of changes to return.
		 *     Minimum: 1
		 * @return {Get_all_posts_changesReturn} The changes.
		 */
		Get_all_posts_changes(date_min: Date, date_max: Date, per_page: number | null | undefined, page: number | null | undefined): Observable<Get_all_posts_changesReturn> {
			return this.http.get<Get_all_posts_changesReturn>(this.baseUri + 'posts/all/changes?date_min=' + date_min.toISOString() + '&date_max=' + date_max.toISOString() + '&per_page=' + per_page + '&page=' + page, {});
		}

		/**
		 * Retrieve multiple posts
		 * Get posts/multiple
		 * @param {string} post_ids A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.
		 * @return {Get_posts_by_idsReturn} The posts.
		 */
		Get_posts_by_ids(post_ids: string): Observable<Get_posts_by_idsReturn> {
			return this.http.get<Get_posts_by_idsReturn>(this.baseUri + 'posts/multiple?post_ids=' + (post_ids == null ? '' : encodeURIComponent(post_ids)), {});
		}

		/**
		 * Search posts
		 * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
		 * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
		 * Get posts/search
		 * @param {string} search The search query used to find posts.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page The page of posts to return.
		 *     Minimum: 1
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 *     Type: double
		 * @param {number} latitude The latitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} longitude The longitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 *     Minimum: 0    Maximum: 257500
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.
		 * @param {string} user_state If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.
		 * @param {number} include_reposts If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.
		 *     Minimum: 0    Maximum: 1
		 * @return {Search_postsReturn} The posts and paging data.
		 */
		Search_posts(search: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined, user_state: string | null | undefined, include_reposts: number | null | undefined): Observable<Search_postsReturn> {
			return this.http.get<Search_postsReturn>(this.baseUri + 'posts/search?search=' + (search == null ? '' : encodeURIComponent(search)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)) + '&user_state=' + (user_state == null ? '' : encodeURIComponent(user_state)) + '&include_reposts=' + include_reposts, {});
		}

		/**
		 * Retrieve a post
		 * Get posts/{post_id}
		 * @param {string} post_id The ID of the post to retrieve.
		 * @return {Post} The post.
		 */
		Get_post(post_id: string): Observable<Post> {
			return this.http.get<Post>(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)), {});
		}

		/**
		 * Retrieve post display data
		 * Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
		 * Get posts/{post_id}/display
		 * @param {string} post_id The ID of the post to retrieve.
		 * @return {Get_post_and_related_dataReturn} The post and related data.
		 */
		Get_post_and_related_data(post_id: string): Observable<Get_post_and_related_dataReturn> {
			return this.http.get<Get_post_and_related_dataReturn>(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)) + '/display', {});
		}

		/**
		 * List posts by a user
		 * Get users/{user_id}/posts
		 * @param {string} user_id The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: date, active, distance <br /><br />
		 * Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page The page of posts to return.
		 *     Minimum: 1
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 *     Type: double
		 * @param {number} latitude The latitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} longitude The longitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 *     Minimum: 0    Maximum: 257500
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.
		 * @param {number} include_reposts If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.
		 *     Minimum: 0    Maximum: 1
		 * @return {Get_user_postsReturn} The posts and paging data.
		 */
		Get_user_posts(user_id: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined, include_reposts: number | null | undefined): Observable<Get_user_postsReturn> {
			return this.http.get<Get_user_postsReturn>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/posts&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)) + '&include_reposts=' + include_reposts, {});
		}

		/**
		 * Search posts by a user
		 * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
		 * Get users/{user_id}/posts/search
		 * @param {string} user_id The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
		 * @param {string} search The search query used to find posts.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page The page of posts to return.
		 *     Minimum: 1
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 *     Type: double
		 * @param {number} latitude The latitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} longitude The longitude of a point around which to return posts.
		 *     Type: double
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 *     Minimum: 0    Maximum: 257500
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.
		 * @param {number} include_reposts If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.
		 *     Minimum: 0    Maximum: 1
		 * @return {Search_user_postsReturn} The posts and paging data.
		 */
		Search_user_posts(user_id: string, search: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined, include_reposts: number | null | undefined): Observable<Search_user_postsReturn> {
			return this.http.get<Search_user_postsReturn>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/posts/search&search=' + (search == null ? '' : encodeURIComponent(search)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)) + '&include_reposts=' + include_reposts, {});
		}
	}

	export interface Search_groupsReturn {

		/**
		 * The index of the last group being returned (an integer between start_index and num_groups).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index?: number | null;
		groups?: Array<Group>;

		/**
		 * The total number of groups available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_groups?: number | null;

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages?: number | null;

		/**
		 * The page number of the groups being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of groups being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page?: number | null;

		/**
		 * The index of the first group being returned (an integer between 1 and num_groups).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index?: number | null;
	}
	export interface Search_groupsReturnFormProperties {

		/**
		 * The index of the last group being returned (an integer between start_index and num_groups).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: FormControl<number | null | undefined>,

		/**
		 * The total number of groups available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_groups: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages: FormControl<number | null | undefined>,

		/**
		 * The page number of the groups being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of groups being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * The index of the first group being returned (an integer between 1 and num_groups).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: FormControl<number | null | undefined>,
	}
	export function CreateSearch_groupsReturnFormGroup() {
		return new FormGroup<Search_groupsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			num_groups: new FormControl<number | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_postsReturn {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index?: number | null;

		/**
		 * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
		 */
		group_ids?: Array<string>;

		/**
		 * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
		 */
		last_listings_view?: Date | null;

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages?: number | null;

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts?: number | null;

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page?: number | null;
		posts?: Array<Post>;

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index?: number | null;
	}
	export interface Get_postsReturnFormProperties {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: FormControl<number | null | undefined>,

		/**
		 * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
		 */
		last_listings_view: FormControl<Date | null | undefined>,

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages: FormControl<number | null | undefined>,

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts: FormControl<number | null | undefined>,

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: FormControl<number | null | undefined>,
	}
	export function CreateGet_postsReturnFormGroup() {
		return new FormGroup<Get_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			last_listings_view: new FormControl<Date | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_all_postsReturn {
		posts?: Array<Post>;
	}
	export interface Get_all_postsReturnFormProperties {
	}
	export function CreateGet_all_postsReturnFormGroup() {
		return new FormGroup<Get_all_postsReturnFormProperties>({
		});

	}

	export interface Get_all_posts_changesReturn {
		Get_all_posts_changesReturnChanges?: Array<Get_all_posts_changesReturnChanges>;
	}
	export interface Get_all_posts_changesReturnFormProperties {
	}
	export function CreateGet_all_posts_changesReturnFormGroup() {
		return new FormGroup<Get_all_posts_changesReturnFormProperties>({
		});

	}

	export interface Get_all_posts_changesReturnChanges {

		/** The UTC date and time when the post was changed. */
		date?: Date | null;
		post_id?: string | null;

		/**
		 * The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired
		 */
		type?: string | null;
	}
	export interface Get_all_posts_changesReturnChangesFormProperties {

		/** The UTC date and time when the post was changed. */
		date: FormControl<Date | null | undefined>,
		post_id: FormControl<string | null | undefined>,

		/**
		 * The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGet_all_posts_changesReturnChangesFormGroup() {
		return new FormGroup<Get_all_posts_changesReturnChangesFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			post_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_posts_by_idsReturn {

		/** The IDs of posts that are forbidden for the current user. */
		forbidden?: Array<string>;

		/** The IDs of posts that weren't found (may have been deleted or never existed). */
		not_found?: Array<string>;
		posts?: Array<Post>;
	}
	export interface Get_posts_by_idsReturnFormProperties {
	}
	export function CreateGet_posts_by_idsReturnFormGroup() {
		return new FormGroup<Get_posts_by_idsReturnFormProperties>({
		});

	}

	export interface Search_postsReturn {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index?: number | null;

		/**
		 * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
		 */
		group_ids?: Array<string>;

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages?: number | null;

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts?: number | null;

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page?: number | null;
		posts?: Array<PostSearchResult>;

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index?: number | null;
	}
	export interface Search_postsReturnFormProperties {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages: FormControl<number | null | undefined>,

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts: FormControl<number | null | undefined>,

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: FormControl<number | null | undefined>,
	}
	export function CreateSearch_postsReturnFormGroup() {
		return new FormGroup<Search_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_post_and_related_dataReturn {
		author?: User;

		/**
		 * Count of offer posts made by the post author in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		author_offer_count?: number | null;

		/**
		 * Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.
		 */
		author_posts?: Array<Post>;

		/**
		 * Count of wanted posts made by the post author in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		author_wanted_count?: number | null;

		/** Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts. */
		bookmarked?: boolean | null;

		/** Feedback the current user has left on the post author. */
		feedback?: Array<Feedback>;

		/** The groups the post is published on. */
		groups?: Array<Group>;

		/** An offer, wanted, admin, taken or received post. */
		post?: Post;

		/** Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts. */
		replied?: boolean | null;

		/**
		 * Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
		 */
		user_can_reply?: boolean | null;

		/** Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts. */
		viewed?: boolean | null;
	}
	export interface Get_post_and_related_dataReturnFormProperties {

		/**
		 * Count of offer posts made by the post author in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		author_offer_count: FormControl<number | null | undefined>,

		/**
		 * Count of wanted posts made by the post author in the last 90 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		author_wanted_count: FormControl<number | null | undefined>,

		/** Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts. */
		bookmarked: FormControl<boolean | null | undefined>,

		/** Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts. */
		replied: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
		 */
		user_can_reply: FormControl<boolean | null | undefined>,

		/** Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts. */
		viewed: FormControl<boolean | null | undefined>,
	}
	export function CreateGet_post_and_related_dataReturnFormGroup() {
		return new FormGroup<Get_post_and_related_dataReturnFormProperties>({
			author_offer_count: new FormControl<number | null | undefined>(undefined),
			author_wanted_count: new FormControl<number | null | undefined>(undefined),
			bookmarked: new FormControl<boolean | null | undefined>(undefined),
			replied: new FormControl<boolean | null | undefined>(undefined),
			user_can_reply: new FormControl<boolean | null | undefined>(undefined),
			viewed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Get_user_postsReturn {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index?: number | null;

		/**
		 * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
		 */
		group_ids?: Array<string>;

		/**
		 * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
		 */
		last_listings_view?: Date | null;

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages?: number | null;

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts?: number | null;

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page?: number | null;
		posts?: Array<Post>;

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index?: number | null;
	}
	export interface Get_user_postsReturnFormProperties {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: FormControl<number | null | undefined>,

		/**
		 * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
		 */
		last_listings_view: FormControl<Date | null | undefined>,

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages: FormControl<number | null | undefined>,

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts: FormControl<number | null | undefined>,

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: FormControl<number | null | undefined>,
	}
	export function CreateGet_user_postsReturnFormGroup() {
		return new FormGroup<Get_user_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			last_listings_view: new FormControl<Date | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search_user_postsReturn {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index?: number | null;

		/**
		 * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
		 */
		group_ids?: Array<string>;

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages?: number | null;

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts?: number | null;

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page?: number | null;
		posts?: Array<PostSearchResult>;

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index?: number | null;
	}
	export interface Search_user_postsReturnFormProperties {

		/**
		 * The index of the last post being returned (an integer between start_index and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end_index: FormControl<number | null | undefined>,

		/**
		 * The total number of pages available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_pages: FormControl<number | null | undefined>,

		/**
		 * The total number of posts available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_posts: FormControl<number | null | undefined>,

		/**
		 * The page number of the posts being returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of posts being returned per page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * The index of the first post being returned (an integer between 1 and num_posts).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_index: FormControl<number | null | undefined>,
	}
	export function CreateSearch_user_postsReturnFormGroup() {
		return new FormGroup<Search_user_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

}

