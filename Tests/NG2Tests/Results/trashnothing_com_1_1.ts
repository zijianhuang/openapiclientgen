import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert. */
	export interface Alert {
		alert_id?: string | null;

		/** The UTC date and time when the alert was last triggered and sent out (may be null). */
		last_sent?: Date | null;

		/** The search phrase that the alert triggers on. */
		search?: string | null;

		/**
		 * The number of time the alert has triggered and been send out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		send_count?: number | null;

		/**
		 * A list of the post types that the alert is set to match against.  The available post types are: offer, wanted <br /><br /> NOTE: Additional post types may be added in the future (eg. events) so clients should take care to support arbitrary types being returned.
		 */
		types?: Array<string>;
		user_id?: string | null;
	}

	/** A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert. */
	export interface AlertFormProperties {
		alert_id: FormControl<string | null | undefined>,

		/** The UTC date and time when the alert was last triggered and sent out (may be null). */
		last_sent: FormControl<Date | null | undefined>,

		/** The search phrase that the alert triggers on. */
		search: FormControl<string | null | undefined>,

		/**
		 * The number of time the alert has triggered and been send out.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		send_count: FormControl<number | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			alert_id: new FormControl<string | null | undefined>(undefined),
			last_sent: new FormControl<Date | null | undefined>(undefined),
			search: new FormControl<string | null | undefined>(undefined),
			send_count: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A geographic bounding box defined by its southwest and northeast points. */
	export interface BoundingBox {

		/** The point defining the northeast corner of the bounding box. */
		northeast?: BoundingBoxNortheast;

		/** The point defining the southwest corner of the bounding box. */
		southwest?: BoundingBoxSouthwest;
	}

	/** A geographic bounding box defined by its southwest and northeast points. */
	export interface BoundingBoxFormProperties {
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
		});

	}

	export interface BoundingBoxNortheast {

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
	}
	export interface BoundingBoxNortheastFormProperties {

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxNortheastFormGroup() {
		return new FormGroup<BoundingBoxNortheastFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoundingBoxSouthwest {

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
	}
	export interface BoundingBoxSouthwestFormProperties {

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxSouthwestFormGroup() {
		return new FormGroup<BoundingBoxSouthwestFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A conversation between the current user and another user. */
	export interface Conversation {

		/** Whether or not this conversation is archived. */
		archived?: boolean | null;

		/** Whether or not this conversation is blocked. */
		blocked?: boolean | null;
		conversation_id?: string | null;

		/** The UTC date and time of the last message in this conversation. */
		last_message_date?: Date | null;

		/** The latest messages in this conversation. */
		messages?: Array<Message>;

		/**
		 * The count of how many unread messages this conversation has.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_unread_messages?: number | null;
		user?: User;
	}

	/** A conversation between the current user and another user. */
	export interface ConversationFormProperties {

		/** Whether or not this conversation is archived. */
		archived: FormControl<boolean | null | undefined>,

		/** Whether or not this conversation is blocked. */
		blocked: FormControl<boolean | null | undefined>,
		conversation_id: FormControl<string | null | undefined>,

		/** The UTC date and time of the last message in this conversation. */
		last_message_date: FormControl<Date | null | undefined>,

		/**
		 * The count of how many unread messages this conversation has.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_unread_messages: FormControl<number | null | undefined>,
	}
	export function CreateConversationFormGroup() {
		return new FormGroup<ConversationFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			blocked: new FormControl<boolean | null | undefined>(undefined),
			conversation_id: new FormControl<string | null | undefined>(undefined),
			last_message_date: new FormControl<Date | null | undefined>(undefined),
			num_unread_messages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A message between two users. */
	export interface Message {

		/** The content of the message. */
		content?: string | null;

		/** The UTC date and time when the message was sent. */
		date?: Date | null;

		/**
		 * Every message a user receives is made available via the API and is sent to the user by email.  Some messages may contain unsupported attachments that are not available by the API but are emailed to the user (eg. documents, videos, zip files). The email_attachments field provides the names of all the unsupported attachments that were emailed to the user (will be null if there are no unsupported attachments).
		 */
		email_attachments?: Array<string>;

		/** The ID of the user that sent the message (the sender). */
		from_user_id?: string | null;
		message_id?: string | null;

		/** Details about the photos associated with this message (may be null if there are no photos). */
		MessagePhotos?: Array<MessagePhotos>;

		/**
		 * Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.
		 */
		subject?: string | null;

		/** The ID of the user that received the message (the recipient). */
		to_user_id?: string | null;
	}

	/** A message between two users. */
	export interface MessageFormProperties {

		/** The content of the message. */
		content: FormControl<string | null | undefined>,

		/** The UTC date and time when the message was sent. */
		date: FormControl<Date | null | undefined>,

		/** The ID of the user that sent the message (the sender). */
		from_user_id: FormControl<string | null | undefined>,
		message_id: FormControl<string | null | undefined>,

		/**
		 * Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.
		 */
		subject: FormControl<string | null | undefined>,

		/** The ID of the user that received the message (the recipient). */
		to_user_id: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			from_user_id: new FormControl<string | null | undefined>(undefined),
			message_id: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			to_user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagePhotos {

		/** All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties. */
		MessagePhotosImages?: Array<MessagePhotosImages>;
		photo_id?: string | null;

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail?: string | null;

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url?: string | null;
	}
	export interface MessagePhotosFormProperties {
		photo_id: FormControl<string | null | undefined>,

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail: FormControl<string | null | undefined>,

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMessagePhotosFormGroup() {
		return new FormGroup<MessagePhotosFormProperties>({
			photo_id: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagePhotosImages {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface MessagePhotosImagesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMessagePhotosImagesFormGroup() {
		return new FormGroup<MessagePhotosImagesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {

		/**
		 * A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.
		 */
		country?: string | null;

		/** The first name of the user (may be null). */
		firstname?: string | null;

		/** The last name of the user (may be null). */
		lastname?: string | null;

		/** The date and time when the user first became publicly active on a group (the date may be older than when the user signed up). */
		member_since?: string | null;

		/**
		 * A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		profile_image?: string | null;
		user_id?: string | null;

		/**
		 * A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		username?: string | null;
	}
	export interface UserFormProperties {

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
		 * A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Twitter, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		profile_image: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,

		/**
		 * A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			member_since: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrentUser extends User {

		/**
		 * If digest emails are enabled, this is the frequency of digest emails sent to this user. One of: daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> If digest emails are disabled, this will be null. <br /><br /> NOTE: A weekly option with the value 'weekly' will probably be added in the future so clients should recognize weekly as a valid value that can be displayed and set if it is ever returned.
		 */
		digest?: string | null;

		/** Whether or not photos are included in the digest emails sent to the user. */
		digest_photos?: boolean | null;

		/** Data related to the users' email address. */
		email?: CurrentUserEmail;

		/**
		 * Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set). <br /><br /> When has_password is false, the only way to set a password on the users' account is to send the user a password reset email.
		 */
		has_password?: boolean | null;

		/**
		 * The UTC date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.
		 */
		last_listings_view?: Date | null;

		/** The users' location.  The location is used to determine which posts are shown to the user (may be null). */
		location?: CurrentUserLocation;

		/** The short location description used by the user the last time they posted. */
		post_location?: CurrentUserPost_location;

		/** Whether or not post reminders are enabled for this user (to remind them to update or repost their posts). */
		post_reminders?: boolean | null;

		/**
		 * The source of the users' profile image. One of: gravatar, facebook, twitter, google, freegle, custom
		 */
		profile_image_source?: string | null;

		/** Whether or not the user has chosen to make their first and last name public. */
		public_name?: boolean | null;

		/**
		 * A list of the public post sources the user is interested in seeing posts from (currently only 'trashnothing' is supported). If the array is empty, no sources are enabled and the user will only see posts from the groups they are a member of. <br /><br /> NOTE: Additional sources may be added in the future so clients should take care to support arbitrary sources being returned.
		 */
		public_post_sources?: Array<string>;

		/**
		 * If true, all group posts from the users' groups are shown to them on the main posts page and in the digest emails. <br /><br /> If false, only group posts in the area defined by the users' location are shown.
		 */
		show_all_group_posts?: boolean | null;

		/** The UTC date and time when the user signed up. */
		signup?: Date | null;

		/** Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted. */
		uses_fair_offer_policy?: boolean | null;

		/**
		 * Whether or not the user has verified their account. The user account will be limited (eg. they will not be able to reply to posts) until their account is verified.
		 */
		verified?: boolean | null;
	}
	export interface CurrentUserFormProperties extends UserFormProperties {

		/**
		 * If digest emails are enabled, this is the frequency of digest emails sent to this user. One of: daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> If digest emails are disabled, this will be null. <br /><br /> NOTE: A weekly option with the value 'weekly' will probably be added in the future so clients should recognize weekly as a valid value that can be displayed and set if it is ever returned.
		 */
		digest: FormControl<string | null | undefined>,

		/** Whether or not photos are included in the digest emails sent to the user. */
		digest_photos: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set). <br /><br /> When has_password is false, the only way to set a password on the users' account is to send the user a password reset email.
		 */
		has_password: FormControl<boolean | null | undefined>,

		/**
		 * The UTC date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.
		 */
		last_listings_view: FormControl<Date | null | undefined>,

		/** Whether or not post reminders are enabled for this user (to remind them to update or repost their posts). */
		post_reminders: FormControl<boolean | null | undefined>,

		/**
		 * The source of the users' profile image. One of: gravatar, facebook, twitter, google, freegle, custom
		 */
		profile_image_source: FormControl<string | null | undefined>,

		/** Whether or not the user has chosen to make their first and last name public. */
		public_name: FormControl<boolean | null | undefined>,

		/**
		 * If true, all group posts from the users' groups are shown to them on the main posts page and in the digest emails. <br /><br /> If false, only group posts in the area defined by the users' location are shown.
		 */
		show_all_group_posts: FormControl<boolean | null | undefined>,

		/** The UTC date and time when the user signed up. */
		signup: FormControl<Date | null | undefined>,

		/** Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted. */
		uses_fair_offer_policy: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the user has verified their account. The user account will be limited (eg. they will not be able to reply to posts) until their account is verified.
		 */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateCurrentUserFormGroup() {
		return new FormGroup<CurrentUserFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			member_since: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			digest_photos: new FormControl<boolean | null | undefined>(undefined),
			has_password: new FormControl<boolean | null | undefined>(undefined),
			last_listings_view: new FormControl<Date | null | undefined>(undefined),
			post_reminders: new FormControl<boolean | null | undefined>(undefined),
			profile_image_source: new FormControl<string | null | undefined>(undefined),
			public_name: new FormControl<boolean | null | undefined>(undefined),
			show_all_group_posts: new FormControl<boolean | null | undefined>(undefined),
			signup: new FormControl<Date | null | undefined>(undefined),
			uses_fair_offer_policy: new FormControl<boolean | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CurrentUserEmail {

		/** The email address. */
		address?: string | null;

		/**
		 * Whether or not this email address has been bouncing emails that are sent to it.  When bouncing is true, no emails will be sent to the user.  If the user thinks that their email account shouldn't be bouncing emails, use the email not bouncing endpoint to reset bouncing to false.
		 */
		bouncing?: boolean | null;

		/**
		 * Whether or not emails have been stopped because of a spam complaint from the users' email account. When spam_stop is first set to true, it indicates that all emails have been automatically disabled for the users' account (eg. digest and alerts).  The user will need to re-enable digests and re-add any alerts that they had previously set up.
		 */
		spam_stop?: boolean | null;
	}
	export interface CurrentUserEmailFormProperties {

		/** The email address. */
		address: FormControl<string | null | undefined>,

		/**
		 * Whether or not this email address has been bouncing emails that are sent to it.  When bouncing is true, no emails will be sent to the user.  If the user thinks that their email account shouldn't be bouncing emails, use the email not bouncing endpoint to reset bouncing to false.
		 */
		bouncing: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not emails have been stopped because of a spam complaint from the users' email account. When spam_stop is first set to true, it indicates that all emails have been automatically disabled for the users' account (eg. digest and alerts).  The user will need to re-enable digests and re-add any alerts that they had previously set up.
		 */
		spam_stop: FormControl<boolean | null | undefined>,
	}
	export function CreateCurrentUserEmailFormGroup() {
		return new FormGroup<CurrentUserEmailFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			bouncing: new FormControl<boolean | null | undefined>(undefined),
			spam_stop: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CurrentUserLocation {

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;

		/** A text description of the location specified by latitude and longitude. */
		name?: string | null;

		/**
		 * Defines the radius (in meters) of a circle around the point specified by latitude and longitude.
		 * Minimum: 0
		 * Maximum: 257500
		 */
		radius?: number | null;
	}
	export interface CurrentUserLocationFormProperties {

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,

		/** A text description of the location specified by latitude and longitude. */
		name: FormControl<string | null | undefined>,

		/**
		 * Defines the radius (in meters) of a circle around the point specified by latitude and longitude.
		 * Minimum: 0
		 * Maximum: 257500
		 */
		radius: FormControl<number | null | undefined>,
	}
	export function CreateCurrentUserLocationFormGroup() {
		return new FormGroup<CurrentUserLocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			radius: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(257500)]),
		});

	}

	export interface CurrentUserPost_location {

		/**
		 * May be null.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * May be null.
		 * Type: double
		 */
		longitude?: number | null;

		/** A text description of the location specified by latitude and longitude. */
		name?: string | null;
	}
	export interface CurrentUserPost_locationFormProperties {

		/**
		 * May be null.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * May be null.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/** A text description of the location specified by latitude and longitude. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCurrentUserPost_locationFormGroup() {
		return new FormGroup<CurrentUserPost_locationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
	 */
	export interface GeolocateBounds {

		/** A geographic bounding box defined by its southwest and northeast points. */
		default?: BoundingBox;

		/** A geographic bounding box defined by its southwest and northeast points. */
		limit?: BoundingBox;
	}

	/**
	 * Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
	 */
	export interface GeolocateBoundsFormProperties {
	}
	export function CreateGeolocateBoundsFormGroup() {
		return new FormGroup<GeolocateBoundsFormProperties>({
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

		/**
		 * The group offset (in hours) from UTC time.  This does not take into account daylight savings time (DST) in places that observe DST so it may be incorrect during DST.
		 * Type: double
		 */
		utc_offset?: number | null;
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

		/**
		 * The group offset (in hours) from UTC time.  This does not take into account daylight savings time (DST) in places that observe DST so it may be incorrect during DST.
		 * Type: double
		 */
		utc_offset: FormControl<number | null | undefined>,
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
			utc_offset: new FormControl<number | null | undefined>(undefined),
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
		 * For pending and pending-questions memberships, this is the UTC date and time when the current user requested membership to this group. For subscribed memberships, this is the UTC date and time when the membership status became subscribed.
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
		 * For pending and pending-questions memberships, this is the UTC date and time when the current user requested membership to this group. For subscribed memberships, this is the UTC date and time when the membership status became subscribed.
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


	/** Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines). */
	export interface GroupNotice {
		content?: string | null;

		/** The UTC date and time when this notice was received. */
		date?: Date | null;
		group_id?: string | null;
		notice_id?: string | null;
		title?: string | null;
	}

	/** Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines). */
	export interface GroupNoticeFormProperties {
		content: FormControl<string | null | undefined>,

		/** The UTC date and time when this notice was received. */
		date: FormControl<Date | null | undefined>,
		group_id: FormControl<string | null | undefined>,
		notice_id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateGroupNoticeFormGroup() {
		return new FormGroup<GroupNoticeFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			notice_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Photo {

		/** All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties. */
		PhotoImages?: Array<PhotoImages>;
		photo_id?: string | null;

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail?: string | null;

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url?: string | null;
	}
	export interface PhotoFormProperties {
		photo_id: FormControl<string | null | undefined>,

		/** A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square. */
		thumbnail: FormControl<string | null | undefined>,

		/** A URL to a large version of this photo (but not necessarily the largest size available). */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
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


	/** The result of uploading or editing a photo. */
	export interface PhotoResult {
		photo_id?: string | null;

		/** Photo thumbnail data. */
		thumbnail?: PhotoResultThumbnail;
	}

	/** The result of uploading or editing a photo. */
	export interface PhotoResultFormProperties {
		photo_id: FormControl<string | null | undefined>,
	}
	export function CreatePhotoResultFormGroup() {
		return new FormGroup<PhotoResultFormProperties>({
			photo_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhotoResultThumbnail {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface PhotoResultThumbnailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePhotoResultThumbnailFormGroup() {
		return new FormGroup<PhotoResultThumbnailFormProperties>({
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
		 * For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.  Otherwise it is one of: satisfied, withdrawn
		 * For all other posts this is always null.
		 */
		outcome?: string | null;

		/** Details about the photos associated with this post (may be null if there are no photos). */
		photos?: Array<Photo>;
		post_id?: string | null;

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
		 * For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.  Otherwise it is one of: satisfied, withdrawn
		 * For all other posts this is always null.
		 */
		outcome: FormControl<string | null | undefined>,
		post_id: FormControl<string | null | undefined>,

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
			footer: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			outcome: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<string | null | undefined>(undefined),
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
			footer: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			outcome: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			search_content: new FormControl<string | null | undefined>(undefined),
			search_title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List conversations
		 * Get conversations
		 * @param {string} category Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked
		 * @param {number} page The page of conversations to return.
		 * @param {number} per_page The number of conversations to return per page (must be >= 1 and <= 30).
		 * @param {number} num_messages The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.
		 * @param {number} include_num_unread If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @return {Get_conversationsReturn} The conversations and paging data.
		 */
		Get_conversations(category: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, num_messages: number | null | undefined, include_num_unread: number | null | undefined, device_pixel_ratio: number | null | undefined): Observable<Get_conversationsReturn> {
			return this.http.get<Get_conversationsReturn>(this.baseUri + 'conversations?category=' + (category == null ? '' : encodeURIComponent(category)) + '&page=' + page + '&per_page=' + per_page + '&num_messages=' + num_messages + '&include_num_unread=' + include_num_unread + '&device_pixel_ratio=' + device_pixel_ratio, {});
		}

		/**
		 * Search conversations
		 * Searches all conversations except blocked conversations.
		 * Get conversations/search
		 * @param {string} search The search query used to find conversations and messages.
		 * @param {number} page The page of conversations to return.
		 * @param {number} per_page The number of conversations to return per page (must be >= 1 and <= 30).
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @return {Search_conversationsReturn} The conversations and paging data.
		 */
		Search_conversations(search: string, page: number | null | undefined, per_page: number | null | undefined, device_pixel_ratio: number | null | undefined): Observable<Search_conversationsReturn> {
			return this.http.get<Search_conversationsReturn>(this.baseUri + 'conversations/search?search=' + (search == null ? '' : encodeURIComponent(search)) + '&page=' + page + '&per_page=' + per_page + '&device_pixel_ratio=' + device_pixel_ratio, {});
		}

		/**
		 * Archive conversation
		 * Put conversations/{conversation_id}/archive
		 * @param {string} conversation_id The ID of the conversation to archive.
		 * @return {void} Conversation archived.
		 */
		Archive_conversation(conversation_id: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/archive', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Block conversation
		 * Put conversations/{conversation_id}/block
		 * @param {string} conversation_id The ID of the conversation to block.
		 * @return {void} Conversation blocked.
		 */
		Block_conversation(conversation_id: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/block', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List conversation messages
		 * Get conversations/{conversation_id}/messages
		 * @param {string} conversation_id The ID of the conversation to return messages from.
		 * @param {number} page The page of messages to return.
		 * @param {number} per_page The number of messages to return per page (must be >= 1 and <= 30).
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} include_conversation If set to 1, the conversation will be returned along with the messages.
		 * @return {Get_conversation_messagesReturn} The messages and page data.  The conversation data is optional and is only returned if the include_conversation parameter is set.
		 */
		Get_conversation_messages(conversation_id: string, page: number | null | undefined, per_page: number | null | undefined, device_pixel_ratio: number | null | undefined, include_conversation: number | null | undefined): Observable<Get_conversation_messagesReturn> {
			return this.http.get<Get_conversation_messagesReturn>(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/messages&page=' + page + '&per_page=' + per_page + '&device_pixel_ratio=' + device_pixel_ratio + '&include_conversation=' + include_conversation, {});
		}

		/**
		 * Unarchive conversation
		 * Put conversations/{conversation_id}/unarchive
		 * @param {string} conversation_id The ID of the conversation to unarchive.
		 * @return {void} Conversation unarchived.
		 */
		Unarchive_conversation(conversation_id: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/unarchive', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unblock conversation
		 * Put conversations/{conversation_id}/unblock
		 * @param {string} conversation_id The ID of the conversation to unblock.
		 * @return {void} Conversation unblocked.
		 */
		Unblock_conversation(conversation_id: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/unblock', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search groups
		 * Get groups
		 * @param {string} name Find groups that have the given text somewhere in their name (case insensitive).
		 * @param {number} latitude Find groups near the given latitude and longitude.
		 * @param {number} longitude Find groups near the given latitude and longitude.
		 * @param {number} distance When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.
		 * @param {string} country Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
		 * @param {string} region For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv
		 * @param {string} postal_code Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.
		 * @param {number} page The page of groups to return.
		 * @param {number} per_page The number of groups to return per page (must be >= 1 and <= 100).
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
		 * Submit group answers
		 * Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.
		 * Post groups/{group_id}/answers
		 * @param {string} group_id The group ID of the group that the user is submitting answers for.
		 * @param {{[id: string]: string }} requestBody A JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.
		 * @return {Group} The updated group.
		 */
		Submit_answers(group_id: string, requestBody: {[id: string]: string }): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'groups/' + (group_id == null ? '' : encodeURIComponent(group_id)) + '/answers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Leave a group
		 * Post groups/{group_id}/unsubscribe
		 * @param {string} group_id The ID of the group to leave.
		 * @return {Group} Updated data about the group and the current users' membership.
		 */
		Leave_group(group_id: string): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'groups/' + (group_id == null ? '' : encodeURIComponent(group_id)) + '/unsubscribe', null, {});
		}

		/**
		 * Retrieve multiple photos
		 * Get photos/multiple
		 * @param {string} photo_ids The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @return {Array<PhotoResult>} The photos.
		 */
		Get_photos_by_ids(photo_ids: string, device_pixel_ratio: number | null | undefined): Observable<Array<PhotoResult>> {
			return this.http.get<Array<PhotoResult>>(this.baseUri + 'photos/multiple?photo_ids=' + (photo_ids == null ? '' : encodeURIComponent(photo_ids)) + '&device_pixel_ratio=' + device_pixel_ratio, {});
		}

		/**
		 * Delete a photo
		 * Delete photos/{photo_id}
		 * @return {void} Photo deleted.
		 */
		Delete_photo(photo_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'photos/' + (photo_id == null ? '' : encodeURIComponent(photo_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotate a photo
		 * Post photos/{photo_id}/rotate
		 * @param {number} degrees Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @return {PhotoResult} Photo rotated.
		 */
		Rotate_photo(photo_id: string, degrees: number, device_pixel_ratio: number | null | undefined): Observable<PhotoResult> {
			return this.http.post<PhotoResult>(this.baseUri + 'photos/' + (photo_id == null ? '' : encodeURIComponent(photo_id)) + '/rotate&degrees=' + degrees + '&device_pixel_ratio=' + device_pixel_ratio, null, {});
		}

		/**
		 * List posts
		 * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
		 * NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
		 * Get posts
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Get_postsReturn} The posts and paging data.
		 */
		Get_posts(types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Get_postsReturn> {
			return this.http.get<Get_postsReturn>(this.baseUri + 'posts?types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
		}

		/**
		 * List all posts
		 * This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
		 * Get posts/all
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, wanted
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 50).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @return {Get_all_postsReturn} The posts.
		 */
		Get_all_posts(types: string, date_min: Date, date_max: Date, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined): Observable<Get_all_postsReturn> {
			return this.http.get<Get_all_postsReturn>(this.baseUri + 'posts/all?types=' + (types == null ? '' : encodeURIComponent(types)) + '&date_min=' + date_min.toISOString() + '&date_max=' + date_max.toISOString() + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio, {});
		}

		/**
		 * Retrieve client.js
		 * Defines javascript functions that can be used to validate and submit posts.
		 * The advantage of using these functions versus using the post submission endpoint directly is that
		 * some of the post validation checks can be done on the client side which will be faster.
		 * NOTE: If used, this javascript file MUST be loaded dynamically for each user because the contents
		 * of the file are generated dynamically based on the current user.  The file may be cached on a per
		 * user basis based on the HTTP cache headers that are returned when the file is requested (currently
		 * the cache headers specify that the file should expire after one day).
		 * The following functions are available:
		 * ---
		 * **window.TN.check_crossposting_restrictions(group_ids)**
		 * Checks for crossposting restrictions when the user selects more than one group to post to.
		 * Parameters:
		 * - **group_ids** is an array of group IDs
		 * Returns an object with three properties {allowed, restricted, restrictions}.
		 * - **allowed** is an array of the group IDs from group_ids that can be crossposted to
		 * - **restricted** is an array of the group IDs from group_ids that can't be crossposted to
		 * - **restrictions** is an object mapping group IDs that have crossposting restrictions to arrays of group IDs that are restricted.
		 * It is useful for pinpointing why a group ID shows up in the restricted array so that users can be provided feedback
		 * about the reason for the crossposting restriction (eg. a message like 'group A doesn't allow crossposting to group B').
		 * For example, given group_ids = [1, 2, 3, 4] and assuming group 1 doesn't allow posting to group 3 and group 2 doesn't allow
		 * posting to group 1, the returned object will be:
		 * {allowed: [4], restricted: [1, 2, 3], restrictions: {1: [3], 2: [1]}}
		 * ---
		 * **window.TN.submit_post(args, session, preferences, callback)**
		 * Submits a new post and performs validation checks on the post before it is accepted for submission.
		 * Parameters:
		 * - **args** is an object containing data about the post being submitted and must include
		 * the following properties:
		 * - type: The type of post.  One of: offer, wanted
		 * - title: A short description of the item(s).
		 * - location: A short location description.
		 * The following properties are optional:
		 * - content: A longer description of the item(s).
		 * - group_ids: An array of group IDs to submit the post to (if any).
		 * - fair_offer: If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).
		 * - photo_ids: A comma separated list of the IDs of the photos that should be attached to this post.
		 * - latitude
		 * - longitude
		 * - **session** is a temporary object that is used by submit_post to store data about the submission
		 * process for a single post.  The first time submit_post is called with a post, session should
		 * be a new empty object (eg. {}).  The session object should be persisted until that post
		 * is successfully submitted and then it can be discarded so that the next post will start
		 * over with a new empty session object.
		 * - **preferences** is a permanent object that the client persists and modifies based on warnings returned
		 * by the post submission process and user input.  Some post warnings passed to the callback object
		 * have a preference_key string property so that users can opt out of those warnings in the future.
		 * To save this opt-out preference, set the property indicated by the preference_key in the preferences
		 * object (eg. preferences[preference_key] = 1).  The preferences object is only read by submit_post and
		 * never modified - it is up to the client to initialize, modify and persist the preferences object.
		 * - **callback** is a function used to return the result of the post submission. It is called and passed
		 * one argument - an object with five properties {result, message, preference_key, identifier, session}.
		 * The result property is a string that is one of: success, error, warning.  The identifier property is
		 * set for errors and warnings and will contain a string that represents the type of error or warning that
		 * occurred.
		 * A success result indicates that the post was submitted successfully. Note that posts may not
		 * appear instantly after submission because the moderators of many groups may have additional
		 * automatic or manual review processes in place that can delay the publishing of a post.
		 * An error result indicates that there is an error with the post to show the user and the message property
		 * will contain text describing the error.
		 * A warning result indicates that there is a warning about the post to show the user and the
		 * message property will contain a string describing the warning.  A warning result doesn't prevent a post from
		 * being submitted, to continue the submission process after a warning result, just re-submit the post
		 * (with the updated session object) to temporarily override that specific warning.
		 * Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be
		 * set in the preferences object by the client to opt out of that type of warning in the future (see the description
		 * of the preferences parameter for more details).
		 * Get posts/client.js
		 * @param {string} group_ids A comma separated list of all the group IDs that the current user is a member of. If the current user is not a member of any groups, simply pass an empty string.
		 * @param {string} callback The name of a global function to call once the script is loaded.
		 * @param {string} access_token Passing the current users' OAuth2 access token as a GET parameter makes it easier to load this script in a normal HTML <script> tag.
		 * @return {void} The client.js javascript file.
		 */
		Get_post_client_javascript(group_ids: string, callback: string | null | undefined, access_token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/client.js?group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve multiple posts
		 * Get posts/multiple
		 * @param {string} post_ids A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.
		 * @return {Array<Post>} The posts.
		 */
		Get_posts_by_ids(post_ids: string): Observable<Array<Post>> {
			return this.http.get<Array<Post>>(this.baseUri + 'posts/multiple?post_ids=' + (post_ids == null ? '' : encodeURIComponent(post_ids)), {});
		}

		/**
		 * Search posts
		 * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
		 * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
		 * Get posts/search
		 * @param {string} search The search query used to find posts.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Search_postsReturn} The posts and paging data.
		 */
		Search_posts(search: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Search_postsReturn> {
			return this.http.get<Search_postsReturn>(this.baseUri + 'posts/search?search=' + (search == null ? '' : encodeURIComponent(search)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
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
		 * Satisfy a post
		 * Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).
		 * Put posts/{post_id}/satisfy
		 * @param {string} post_id The ID of the post to satisfy.
		 * @return {Post} The updated post.
		 */
		Satisfy_post(post_id: string): Observable<Post> {
			return this.http.put<Post>(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)) + '/satisfy', null, {});
		}

		/**
		 * Retrieve post share content
		 * Retrieve text and html content useful for sharing a post by email.
		 * Get posts/{post_id}/share
		 * @param {string} post_id The ID of the post to share.
		 * @return {Get_post_share_contentReturn} Email subject, text body and html body for sharing a post by email.
		 */
		Get_post_share_content(post_id: string): Observable<Get_post_share_contentReturn> {
			return this.http.get<Get_post_share_contentReturn>(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)) + '/share', {});
		}

		/**
		 * Share a post
		 * Forwards a copy of the post to the current user so that they can forward it to friends.
		 * Post posts/{post_id}/share
		 * @param {string} post_id The ID of the post to share.
		 * @return {void} Post shared.
		 */
		Share_post(post_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)) + '/share', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Withdraw a post
		 * Mark an offer or wanted post by the current user as withdrawn.
		 * Put posts/{post_id}/withdraw
		 * @param {string} post_id The ID of the post to withdraw.
		 * @return {Post} The updated post.
		 */
		Withdraw_post(post_id: string): Observable<Post> {
			return this.http.put<Post>(this.baseUri + 'posts/' + (post_id == null ? '' : encodeURIComponent(post_id)) + '/withdraw', null, {});
		}

		/**
		 * Retrieve current user
		 * Get users/me
		 * @return {CurrentUser} User data
		 */
		Get_current_user(): Observable<CurrentUser> {
			return this.http.get<CurrentUser>(this.baseUri + 'users/me', {});
		}

		/**
		 * List current users' email alerts
		 * Get users/me/alerts
		 * @return {Array<Alert>} The users alerts.
		 */
		Get_alerts(): Observable<Array<Alert>> {
			return this.http.get<Array<Alert>>(this.baseUri + 'users/me/alerts', {});
		}

		/**
		 * Delete an email alert
		 * Delete users/me/alerts/{alert_id}
		 * @param {string} alert_id The ID of the email alert to delete.
		 * @return {void} Alert deleted.
		 */
		Delete_alert(alert_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/me/alerts/' + (alert_id == null ? '' : encodeURIComponent(alert_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set users' email address as not bouncing
		 * Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.
		 * Put users/me/email/not-bouncing
		 * @return {CurrentUser} The updated user.
		 */
		Set_email_not_bouncing(): Observable<CurrentUser> {
			return this.http.put<CurrentUser>(this.baseUri + 'users/me/email/not-bouncing', null, {});
		}

		/**
		 * List current users' groups
		 * Get users/me/groups
		 * @param {string} membership Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.
		 * @return {Array<Group>} The users groups.
		 */
		Get_current_user_groups(membership: string | null | undefined): Observable<Array<Group>> {
			return this.http.get<Array<Group>>(this.baseUri + 'users/me/groups?membership=' + (membership == null ? '' : encodeURIComponent(membership)), {});
		}

		/**
		 * List current users' group notices
		 * Get users/me/notices
		 * @param {string} group_ids A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.
		 * @return {Array<GroupNotice>} The users group notices.
		 */
		Get_user_group_notices(group_ids: string | null | undefined): Observable<Array<GroupNotice>> {
			return this.http.get<Array<GroupNotice>>(this.baseUri + 'users/me/notices?group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)), {});
		}

		/**
		 * List current users' posts
		 * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
		 * Get users/me/posts
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Get_current_user_postsReturn} The posts and paging data.
		 */
		Get_current_user_posts(types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Get_current_user_postsReturn> {
			return this.http.get<Get_current_user_postsReturn>(this.baseUri + 'users/me/posts?types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
		}

		/**
		 * Search current users' posts
		 * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
		 * Get users/me/posts/search
		 * @param {string} search The search query used to find posts.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Search_current_user_postsReturn} The posts and paging data.
		 */
		Search_current_user_posts(search: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Search_current_user_postsReturn> {
			return this.http.get<Search_current_user_postsReturn>(this.baseUri + 'users/me/posts/search?search=' + (search == null ? '' : encodeURIComponent(search)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
		}

		/**
		 * List current users' profile images
		 * Get users/me/profile-images
		 * @return {Array<Get_profile_imagesReturn>} The  users profile images.
		 */
		Get_profile_images(): Observable<Array<Get_profile_imagesReturn>> {
			return this.http.get<Array<Get_profile_imagesReturn>>(this.baseUri + 'users/me/profile-images', {});
		}

		/**
		 * Resend account verification email
		 * Post users/me/resend-verification
		 * @return {void} Verification email was resent.
		 */
		Resend_account_verification_email(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/me/resend-verification', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send password reset email
		 * Post users/me/reset-password
		 * @return {void} Password reset email was sent.
		 */
		Send_password_reset_email(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/me/reset-password', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a user
		 * Get users/{user_id}
		 * @param {string} user_id A user ID.
		 * @return {User} User data
		 */
		Get_user(user_id: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * List posts by a user
		 * NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.
		 * Get users/{user_id}/posts
		 * @param {string} user_id The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Get_user_postsReturn} The posts and paging data.
		 */
		Get_user_posts(user_id: string, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Get_user_postsReturn> {
			return this.http.get<Get_user_postsReturn>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/posts&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
		}

		/**
		 * Search posts by a user
		 * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
		 * Get users/{user_id}/posts/search
		 * @param {string} user_id The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
		 * @param {string} search The search query used to find posts.
		 * @param {string} sort_by How to sort the posts that are returned.  One of: relevance, date <br /><br /> Setting sort_by to date will sort posts from newest to oldest.
		 * @param {string} types A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
		 * @param {string} sources A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
		 * @param {string} group_ids A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
		 * @param {number} per_page The number of posts to return per page (must be >= 1 and <= 100).
		 * @param {number} page The page of posts to return.
		 * @param {number} device_pixel_ratio Client device pixel ratio used to determine thumbnail size (default 1.0).
		 * @param {number} latitude The latitude of a point around which to return posts.
		 * @param {number} longitude The longitude of a point around which to return posts.
		 * @param {number} radius The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
		 * @param {Date} date_min Only posts newer than or equal to this UTC date and time will be returned.
		 * @param {Date} date_max Only posts older than this UTC date and time will be returned.
		 * @param {string} outcomes A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn are returned. If set to 'all', all posts will be returned no matter what outcome the posts have.
		 * @return {Search_user_postsReturn} The posts and paging data.
		 */
		Search_user_posts(user_id: string, search: string, sort_by: string | null | undefined, types: string, sources: string, group_ids: string | null | undefined, per_page: number | null | undefined, page: number | null | undefined, device_pixel_ratio: number | null | undefined, latitude: number | null | undefined, longitude: number | null | undefined, radius: number | null | undefined, date_min: Date | null | undefined, date_max: Date | null | undefined, outcomes: string | null | undefined): Observable<Search_user_postsReturn> {
			return this.http.get<Search_user_postsReturn>(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/posts/search&search=' + (search == null ? '' : encodeURIComponent(search)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&types=' + (types == null ? '' : encodeURIComponent(types)) + '&sources=' + (sources == null ? '' : encodeURIComponent(sources)) + '&group_ids=' + (group_ids == null ? '' : encodeURIComponent(group_ids)) + '&per_page=' + per_page + '&page=' + page + '&device_pixel_ratio=' + device_pixel_ratio + '&latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius + '&date_min=' + date_min?.toISOString() + '&date_max=' + date_max?.toISOString() + '&outcomes=' + (outcomes == null ? '' : encodeURIComponent(outcomes)), {});
		}

		/**
		 * Retrieve a users' profile image
		 * This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.
		 * Get users/{user_id}/profile-image
		 * @param {string} user_id The user ID of the user to return the profile image of.
		 * @param {string} _default A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/
		 * @return {void} 
		 */
		Get_profile_image_file(user_id: string, _default: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/profile-image&_default=' + (_default == null ? '' : encodeURIComponent(_default)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface Get_conversationsReturn {
		conversations?: Array<Conversation>;

		/**
		 * If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_unread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page?: number | null;
	}
	export interface Get_conversationsReturnFormProperties {

		/**
		 * If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_unread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page: FormControl<number | null | undefined>,
	}
	export function CreateGet_conversationsReturnFormGroup() {
		return new FormGroup<Get_conversationsReturnFormProperties>({
			num_unread: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search_conversationsReturn {
		conversations?: Array<Conversation>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page?: number | null;
		search?: string | null;
	}
	export interface Search_conversationsReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page: FormControl<number | null | undefined>,
		search: FormControl<string | null | undefined>,
	}
	export function CreateSearch_conversationsReturnFormGroup() {
		return new FormGroup<Search_conversationsReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			search: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_conversation_messagesReturn {

		/** A conversation between the current user and another user. */
		conversation?: Conversation;
		messages?: Array<Message>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page?: number | null;
	}
	export interface Get_conversation_messagesReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		per_page: FormControl<number | null | undefined>,
	}
	export function CreateGet_conversation_messagesReturnFormGroup() {
		return new FormGroup<Get_conversation_messagesReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
		});

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

		/**
		 * Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
		 */
		geolocate_bounds?: GeolocateBounds;

		/** The groups the post is published on. */
		groups?: Array<Group>;

		/** An offer, wanted, admin, taken or received post. */
		post?: Post;

		/**
		 * Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
		 */
		user_can_reply?: boolean | null;
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

		/**
		 * Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
		 */
		user_can_reply: FormControl<boolean | null | undefined>,
	}
	export function CreateGet_post_and_related_dataReturnFormGroup() {
		return new FormGroup<Get_post_and_related_dataReturnFormProperties>({
			author_offer_count: new FormControl<number | null | undefined>(undefined),
			author_wanted_count: new FormControl<number | null | undefined>(undefined),
			user_can_reply: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Get_post_share_contentReturn {

		/** Email body as html. */
		html?: string | null;

		/** Email subject line text. */
		subject?: string | null;

		/** Email body as plain text. */
		text?: string | null;
	}
	export interface Get_post_share_contentReturnFormProperties {

		/** Email body as html. */
		html: FormControl<string | null | undefined>,

		/** Email subject line text. */
		subject: FormControl<string | null | undefined>,

		/** Email body as plain text. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGet_post_share_contentReturnFormGroup() {
		return new FormGroup<Get_post_share_contentReturnFormProperties>({
			html: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Get_current_user_postsReturn {

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
	export interface Get_current_user_postsReturnFormProperties {

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
	export function CreateGet_current_user_postsReturnFormGroup() {
		return new FormGroup<Get_current_user_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			last_listings_view: new FormControl<Date | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Search_current_user_postsReturn {

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
	export interface Search_current_user_postsReturnFormProperties {

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
	export function CreateSearch_current_user_postsReturnFormGroup() {
		return new FormGroup<Search_current_user_postsReturnFormProperties>({
			end_index: new FormControl<number | null | undefined>(undefined),
			num_pages: new FormControl<number | null | undefined>(undefined),
			num_posts: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			per_page: new FormControl<number | null | undefined>(undefined),
			start_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Get_profile_imagesReturn {

		/** An image URL. */
		image?: string | null;

		/**
		 * The source of the image.  Currently one of: gravatar, facebook, twitter, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.
		 */
		source?: string | null;
	}
	export interface Get_profile_imagesReturnFormProperties {

		/** An image URL. */
		image: FormControl<string | null | undefined>,

		/**
		 * The source of the image.  Currently one of: gravatar, facebook, twitter, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGet_profile_imagesReturnFormGroup() {
		return new FormGroup<Get_profile_imagesReturnFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
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

