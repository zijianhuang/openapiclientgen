import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a user of Mastodon and their associated profile. */
	export interface Account {

		/** The Webfinger account URI. Equal to `username` for local users, or `username@domain` for */
		acct?: string | null;

		/** An image icon that is shown next to statuses and in the profile. The format is URL. */
		avatar?: string | null;

		/** A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF. The format is URL. */
		avatar_static?: string | null;

		/** A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot. */
		bot?: boolean | null;

		/** When the account was created. */
		created_at?: Date | null;

		/** Whether the account has opted into discovery features such as the profile directory. */
		discoverable?: boolean | null;

		/** The profile's display name. */
		display_name?: string | null;

		/** Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned. */
		emojis?: Array<Emoji>;

		/** Additional metadata attached to a profile as name-value pairs. */
		fields?: Array<Field>;

		/**
		 * The reported followers of this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count?: number | null;

		/**
		 * The reported follows of this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		following_count?: number | null;

		/** An image banner that is shown above the profile and in profile cards. The format is URL. */
		header?: string | null;

		/** A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. The format is URL. */
		header_static?: string | null;

		/** The account id `header`. */
		id?: string | null;

		/** When the most recent status was posted. */
		last_status_at?: Date | null;

		/** Whether the account manually approves follow requests. */
		locked?: boolean | null;

		/** Represents a user of Mastodon and their associated profile. */
		moved?: Account;

		/** When a timed mute will expire, if applicable. ISO 8601 Datetime. */
		mute_expires_at?: Date | null;

		/** The profile's bio / description. */
		note?: string | null;

		/** Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account. */
		source?: Source;

		/**
		 * How many statuses are attached to this account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statuses_count?: number | null;

		/** An extra entity returned when an account is suspended. */
		suspended?: boolean | null;

		/** The location of the user's profile page. (HTTPS URL) */
		url?: string | null;

		/** The username of the account, not including domain. */
		username?: string | null;
	}

	/** Represents a user of Mastodon and their associated profile. */
	export interface AccountFormProperties {

		/** The Webfinger account URI. Equal to `username` for local users, or `username@domain` for */
		acct: FormControl<string | null | undefined>,

		/** An image icon that is shown next to statuses and in the profile. The format is URL. */
		avatar: FormControl<string | null | undefined>,

		/** A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF. The format is URL. */
		avatar_static: FormControl<string | null | undefined>,

		/** A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot. */
		bot: FormControl<boolean | null | undefined>,

		/** When the account was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Whether the account has opted into discovery features such as the profile directory. */
		discoverable: FormControl<boolean | null | undefined>,

		/** The profile's display name. */
		display_name: FormControl<string | null | undefined>,

		/**
		 * The reported followers of this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		followers_count: FormControl<number | null | undefined>,

		/**
		 * The reported follows of this profile.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		following_count: FormControl<number | null | undefined>,

		/** An image banner that is shown above the profile and in profile cards. The format is URL. */
		header: FormControl<string | null | undefined>,

		/** A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. The format is URL. */
		header_static: FormControl<string | null | undefined>,

		/** The account id `header`. */
		id: FormControl<string | null | undefined>,

		/** When the most recent status was posted. */
		last_status_at: FormControl<Date | null | undefined>,

		/** Whether the account manually approves follow requests. */
		locked: FormControl<boolean | null | undefined>,

		/** When a timed mute will expire, if applicable. ISO 8601 Datetime. */
		mute_expires_at: FormControl<Date | null | undefined>,

		/** The profile's bio / description. */
		note: FormControl<string | null | undefined>,

		/**
		 * How many statuses are attached to this account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statuses_count: FormControl<number | null | undefined>,

		/** An extra entity returned when an account is suspended. */
		suspended: FormControl<boolean | null | undefined>,

		/** The location of the user's profile page. (HTTPS URL) */
		url: FormControl<string | null | undefined>,

		/** The username of the account, not including domain. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			acct: new FormControl<string | null | undefined>(undefined),
			avatar: new FormControl<string | null | undefined>(undefined),
			avatar_static: new FormControl<string | null | undefined>(undefined),
			bot: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			discoverable: new FormControl<boolean | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			following_count: new FormControl<number | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			header_static: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_status_at: new FormControl<Date | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			mute_expires_at: new FormControl<Date | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			statuses_count: new FormControl<number | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a custom emoji. */
	export interface Emoji {

		/** Used for sorting custom emoji in the picker. */
		category?: string | null;

		/**
		 * The name of the custom emoji.
		 * Required
		 */
		shortcode: string;

		/**
		 * A link to a static copy of the custom emoji. The format is URL.
		 * Required
		 */
		static_url: string;

		/**
		 * A link to the custom emoji. The format is URL.
		 * Required
		 */
		url: string;

		/**
		 * Whether this Emoji should be visible in the picker or unlisted.
		 * Required
		 */
		visible_in_picker: boolean;
	}

	/** Represents a custom emoji. */
	export interface EmojiFormProperties {

		/** Used for sorting custom emoji in the picker. */
		category: FormControl<string | null | undefined>,

		/**
		 * The name of the custom emoji.
		 * Required
		 */
		shortcode: FormControl<string | null | undefined>,

		/**
		 * A link to a static copy of the custom emoji. The format is URL.
		 * Required
		 */
		static_url: FormControl<string | null | undefined>,

		/**
		 * A link to the custom emoji. The format is URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Whether this Emoji should be visible in the picker or unlisted.
		 * Required
		 */
		visible_in_picker: FormControl<boolean | null | undefined>,
	}
	export function CreateEmojiFormGroup() {
		return new FormGroup<EmojiFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			shortcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			static_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible_in_picker: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a profile field as a name-value pair with optional verification. */
	export interface Field {

		/** The key of a given field's key-value pair. */
		name?: string | null;

		/** The value associated with the `name` key. */
		value?: string | null;

		/** Timestamp of when the server verified a URL value for a rel="me” link. If `value` is a verified URL. Otherwise, null */
		verified_at?: Date | null;
	}

	/** Represents a profile field as a name-value pair with optional verification. */
	export interface FieldFormProperties {

		/** The key of a given field's key-value pair. */
		name: FormControl<string | null | undefined>,

		/** The value associated with the `name` key. */
		value: FormControl<string | null | undefined>,

		/** Timestamp of when the server verified a URL value for a rel="me” link. If `value` is a verified URL. Otherwise, null */
		verified_at: FormControl<Date | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			verified_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account. */
	export interface Source {

		/** Metadata about the account. */
		fields?: Array<Field>;

		/**
		 * The number of pending follow requests
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		follow_requests_count?: number | null;

		/** The default posting language for new statuses, ISO 639-1 language two-letter code. */
		language?: string | null;

		/** Profile bio */
		note?: string | null;

		/** The default post privacy to be used for new statuses. */
		privacy?: SourcePrivacy | null;

		/** Whether new statuses should be marked sensitive by default. */
		sensitive?: boolean | null;
	}

	/** Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account. */
	export interface SourceFormProperties {

		/**
		 * The number of pending follow requests
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		follow_requests_count: FormControl<number | null | undefined>,

		/** The default posting language for new statuses, ISO 639-1 language two-letter code. */
		language: FormControl<string | null | undefined>,

		/** Profile bio */
		note: FormControl<string | null | undefined>,

		/** The default post privacy to be used for new statuses. */
		privacy: FormControl<SourcePrivacy | null | undefined>,

		/** Whether new statuses should be marked sensitive by default. */
		sensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			follow_requests_count: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			privacy: new FormControl<SourcePrivacy | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SourcePrivacy { public = 'public', unlisted = 'unlisted', private = 'private', direct = 'direct' }


	/** Represents a weekly bucket of instance activity. */
	export interface Activity {

		/** User logins since the week began, String (cast from an integer). */
		logins?: string | null;

		/** User registrations since the week began, String (cast from an integer). */
		registrations?: string | null;

		/** Statuses created since the week began, String (cast from an integer). */
		statuses?: string | null;

		/** Midnight at the first day of the week.  (UNIX Timestamp). */
		week?: string | null;
	}

	/** Represents a weekly bucket of instance activity. */
	export interface ActivityFormProperties {

		/** User logins since the week began, String (cast from an integer). */
		logins: FormControl<string | null | undefined>,

		/** User registrations since the week began, String (cast from an integer). */
		registrations: FormControl<string | null | undefined>,

		/** Statuses created since the week began, String (cast from an integer). */
		statuses: FormControl<string | null | undefined>,

		/** Midnight at the first day of the week.  (UNIX Timestamp). */
		week: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			logins: new FormControl<string | null | undefined>(undefined),
			registrations: new FormControl<string | null | undefined>(undefined),
			statuses: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Admin-level information about a given account. */
	export interface AdminAccount {

		/** Represents a user of Mastodon and their associated profile. */
		account?: Account;

		/** Whether the account is currently approved. */
		approved?: boolean | null;

		/** Whether the account has confirmed their email address. */
		confirmed?: boolean | null;

		/** When the account was first discovered. */
		created_at?: Date | null;

		/** The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number. */
		created_by_application_id?: string | null;

		/** Whether the account is currently disabled. */
		disabled?: boolean | null;

		/** The email address associated with the account. */
		email?: string | null;

		/** The ID of the account in the database. Cast from an integer, but not guaranteed to be a number. */
		id?: string | null;

		/** Invite request text ??? */
		invite_request?: string | null;

		/** The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number. */
		invited_by_account_id?: string | null;

		/** The IP address last used to login to this account. */
		ip?: string | null;

		/** The locale of the account. ISO 639 Part 1 two-letter language code. */
		locale?: string | null;

		/** The current role of the account. Enumerable oneOf. */
		role?: string | null;

		/** Whether the account is currently silenced. */
		silenced?: boolean | null;

		/** Whether the account is currently suspended. */
		suspended?: boolean | null;

		/** The username of the account. */
		username?: string | null;
	}

	/** Admin-level information about a given account. */
	export interface AdminAccountFormProperties {

		/** Whether the account is currently approved. */
		approved: FormControl<boolean | null | undefined>,

		/** Whether the account has confirmed their email address. */
		confirmed: FormControl<boolean | null | undefined>,

		/** When the account was first discovered. */
		created_at: FormControl<Date | null | undefined>,

		/** The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number. */
		created_by_application_id: FormControl<string | null | undefined>,

		/** Whether the account is currently disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** The email address associated with the account. */
		email: FormControl<string | null | undefined>,

		/** The ID of the account in the database. Cast from an integer, but not guaranteed to be a number. */
		id: FormControl<string | null | undefined>,

		/** Invite request text ??? */
		invite_request: FormControl<string | null | undefined>,

		/** The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number. */
		invited_by_account_id: FormControl<string | null | undefined>,

		/** The IP address last used to login to this account. */
		ip: FormControl<string | null | undefined>,

		/** The locale of the account. ISO 639 Part 1 two-letter language code. */
		locale: FormControl<string | null | undefined>,

		/** The current role of the account. Enumerable oneOf. */
		role: FormControl<string | null | undefined>,

		/** Whether the account is currently silenced. */
		silenced: FormControl<boolean | null | undefined>,

		/** Whether the account is currently suspended. */
		suspended: FormControl<boolean | null | undefined>,

		/** The username of the account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAdminAccountFormGroup() {
		return new FormGroup<AdminAccountFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by_application_id: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invite_request: new FormControl<string | null | undefined>(undefined),
			invited_by_account_id: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			silenced: new FormControl<boolean | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Admin-level information about a filed report. */
	export interface AdminReport {

		/** Represents a user of Mastodon and their associated profile. */
		account?: Account;

		/** The action taken to resolve this report. Enumerable oneOf. */
		action_taken?: string | null;

		/** Represents a user of Mastodon and their associated profile. */
		assigned_account?: Account;

		/** An optional reason for reporting. */
		comment?: string | null;

		/** The time the report was filed. */
		created_at?: Date | null;

		/** The ID of the report in the database. Cast from an integer, but not guaranteed to be a number. */
		id?: string | null;

		/** Statuses attached to the report, for context. */
		statuses?: Array<Status>;

		/** Represents a user of Mastodon and their associated profile. */
		target_account?: Account;

		/** The time of last action on this report. */
		updated_at?: Date | null;
	}

	/** Admin-level information about a filed report. */
	export interface AdminReportFormProperties {

		/** The action taken to resolve this report. Enumerable oneOf. */
		action_taken: FormControl<string | null | undefined>,

		/** An optional reason for reporting. */
		comment: FormControl<string | null | undefined>,

		/** The time the report was filed. */
		created_at: FormControl<Date | null | undefined>,

		/** The ID of the report in the database. Cast from an integer, but not guaranteed to be a number. */
		id: FormControl<string | null | undefined>,

		/** The time of last action on this report. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateAdminReportFormGroup() {
		return new FormGroup<AdminReportFormProperties>({
			action_taken: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents a status posted by an account. */
	export interface Status {

		/** Represents a user of Mastodon and their associated profile. */
		account?: Account;

		/** Represents an application that interfaces with the REST API to access accounts or post statuses. */
		application?: Application;

		/** Have you bookmarked this status? */
		bookmarked?: boolean | null;

		/** Represents a rich preview card that is generated using OpenGraph tags from a URL. */
		card?: Card;

		/** HTML-encoded status content. */
		content?: string | null;

		/** The date when this status was created. */
		created_at?: Date | null;

		/** Custom emoji to be used when rendering status content. */
		emojis?: Array<Emoji>;

		/** Have you favourited this status? */
		favourited?: boolean | null;

		/**
		 * How many favourites this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		favourites_count?: number | null;

		/** ID of the status in the database. Cast from an integer but not guaranteed to be a number. */
		id?: string | null;

		/** ID of the account being replied to. */
		in_reply_to_account_id?: string | null;

		/** ID of the status being replied. Cast from an integer but not guaranteed to be a number. */
		in_reply_to_id?: string | null;

		/** Primary language of this status. ISO 639 Part 1 two-letter language code. */
		language?: string | null;

		/** Media that is attached to this status. */
		media_attachments?: Array<Attachment>;

		/** Mentions of users within the status content. */
		mentions?: Array<Mention>;

		/** Have you muted notifications for this status's conversation? */
		muted?: boolean | null;

		/** Have you pinned this status? Only appears if the status is pinnable. */
		pinned?: boolean | null;

		/** Represents a poll attached to a status. */
		poll?: Poll;

		/** Represents a status posted by an account. */
		reblog?: Status;

		/** Have you boosted this status? */
		reblogged?: boolean | null;

		/**
		 * How many boosts this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reblogs_count?: number | null;

		/**
		 * How many replies this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replies_count?: number | null;

		/** Is this status marked as sensitive content? */
		sensitive?: boolean | null;

		/** Subject or summary line, below which status content is collapsed until expanded. */
		spoiler_text?: string | null;

		/** Hashtags used within the status content. */
		tags?: Array<Tag>;

		/** Plain-text source of a status. Returned instead of `content` when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content. */
		text?: string | null;

		/** URI of the status used for federation. */
		uri?: string | null;

		/** A link to the status's HTML representation. */
		url?: string | null;

		/** Visibility of this status. */
		visibility?: SourcePrivacy | null;
	}

	/** Represents a status posted by an account. */
	export interface StatusFormProperties {

		/** Have you bookmarked this status? */
		bookmarked: FormControl<boolean | null | undefined>,

		/** HTML-encoded status content. */
		content: FormControl<string | null | undefined>,

		/** The date when this status was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Have you favourited this status? */
		favourited: FormControl<boolean | null | undefined>,

		/**
		 * How many favourites this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		favourites_count: FormControl<number | null | undefined>,

		/** ID of the status in the database. Cast from an integer but not guaranteed to be a number. */
		id: FormControl<string | null | undefined>,

		/** ID of the account being replied to. */
		in_reply_to_account_id: FormControl<string | null | undefined>,

		/** ID of the status being replied. Cast from an integer but not guaranteed to be a number. */
		in_reply_to_id: FormControl<string | null | undefined>,

		/** Primary language of this status. ISO 639 Part 1 two-letter language code. */
		language: FormControl<string | null | undefined>,

		/** Have you muted notifications for this status's conversation? */
		muted: FormControl<boolean | null | undefined>,

		/** Have you pinned this status? Only appears if the status is pinnable. */
		pinned: FormControl<boolean | null | undefined>,

		/** Have you boosted this status? */
		reblogged: FormControl<boolean | null | undefined>,

		/**
		 * How many boosts this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reblogs_count: FormControl<number | null | undefined>,

		/**
		 * How many replies this status has received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replies_count: FormControl<number | null | undefined>,

		/** Is this status marked as sensitive content? */
		sensitive: FormControl<boolean | null | undefined>,

		/** Subject or summary line, below which status content is collapsed until expanded. */
		spoiler_text: FormControl<string | null | undefined>,

		/** Plain-text source of a status. Returned instead of `content` when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content. */
		text: FormControl<string | null | undefined>,

		/** URI of the status used for federation. */
		uri: FormControl<string | null | undefined>,

		/** A link to the status's HTML representation. */
		url: FormControl<string | null | undefined>,

		/** Visibility of this status. */
		visibility: FormControl<SourcePrivacy | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			bookmarked: new FormControl<boolean | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			favourited: new FormControl<boolean | null | undefined>(undefined),
			favourites_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			in_reply_to_account_id: new FormControl<string | null | undefined>(undefined),
			in_reply_to_id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			muted: new FormControl<boolean | null | undefined>(undefined),
			pinned: new FormControl<boolean | null | undefined>(undefined),
			reblogged: new FormControl<boolean | null | undefined>(undefined),
			reblogs_count: new FormControl<number | null | undefined>(undefined),
			replies_count: new FormControl<number | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			spoiler_text: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<SourcePrivacy | null | undefined>(undefined),
		});

	}


	/** Represents a file or media attachment that can be added to a status. */
	export interface Attachment {

		/** A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. */
		blurhash?: string | null;

		/** Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load. */
		description?: string | null;

		/**
		 * The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number
		 * Required
		 */
		id: string;

		/** Metadata returned by Paperclip. */
		meta?: string | null;

		/**
		 * The location of a scaled-down preview of the attachment.
		 * Required
		 */
		preview_url: string;

		/** The location of the full-size original attachment on the remote website. String or null if the attachment is local. */
		remote_url?: string | null;

		/** A shorter URL for the attachment. */
		text_url?: string | null;

		/**
		 * The type of the attachment.
		 * Required
		 */
		type: AttachmentType;

		/**
		 * The location of the original full-size attachment.
		 * Required
		 */
		url: string;
	}

	/** Represents a file or media attachment that can be added to a status. */
	export interface AttachmentFormProperties {

		/** A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. */
		blurhash: FormControl<string | null | undefined>,

		/** Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load. */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Metadata returned by Paperclip. */
		meta: FormControl<string | null | undefined>,

		/**
		 * The location of a scaled-down preview of the attachment.
		 * Required
		 */
		preview_url: FormControl<string | null | undefined>,

		/** The location of the full-size original attachment on the remote website. String or null if the attachment is local. */
		remote_url: FormControl<string | null | undefined>,

		/** A shorter URL for the attachment. */
		text_url: FormControl<string | null | undefined>,

		/**
		 * The type of the attachment.
		 * Required
		 */
		type: FormControl<AttachmentType | null | undefined>,

		/**
		 * The location of the original full-size attachment.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			blurhash: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meta: new FormControl<string | null | undefined>(undefined),
			preview_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remote_url: new FormControl<string | null | undefined>(undefined),
			text_url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AttachmentType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttachmentType { unknown = 'unknown', image = 'image', gifv = 'gifv', video = 'video', audio = 'audio' }


	/** Represents a mention of a user within the content of a status. */
	export interface Mention {

		/**
		 * The webfinger acct URI of the mentioned user. Equivalent to `username` for local users, or `username@domain` for remote users.
		 * Required
		 */
		acct: string;

		/**
		 * The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number
		 * Required
		 */
		id: string;

		/**
		 * The location of the mentioned user's profile.
		 * Required
		 */
		url: string;

		/**
		 * The username of the mentioned user.
		 * Required
		 */
		username: string;
	}

	/** Represents a mention of a user within the content of a status. */
	export interface MentionFormProperties {

		/**
		 * The webfinger acct URI of the mentioned user. Equivalent to `username` for local users, or `username@domain` for remote users.
		 * Required
		 */
		acct: FormControl<string | null | undefined>,

		/**
		 * The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the mentioned user's profile.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The username of the mentioned user.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateMentionFormGroup() {
		return new FormGroup<MentionFormProperties>({
			acct: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a hashtag used within the content of a status. */
	export interface Tag {

		/** Usage statistics for given days. */
		history?: Array<History>;

		/**
		 * The value of the hashtag after the `#` sign.
		 * Required
		 */
		name: string;

		/**
		 * A link to the hashtag on the instance.
		 * Required
		 */
		url: string;
	}

	/** Represents a hashtag used within the content of a status. */
	export interface TagFormProperties {

		/**
		 * The value of the hashtag after the `#` sign.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A link to the hashtag on the instance.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents daily usage history of a hashtag. */
	export interface History {

		/**
		 * the total of accounts using the tag within that day. Cast from an integer.
		 * Required
		 */
		accounts: string;

		/**
		 * UNIX timestamp on midnight of the given day.
		 * Required
		 */
		day: string;

		/**
		 * the counted usage of the tag within that day. Cast from an integer.
		 * Required
		 */
		uses: string;
	}

	/** Represents daily usage history of a hashtag. */
	export interface HistoryFormProperties {

		/**
		 * the total of accounts using the tag within that day. Cast from an integer.
		 * Required
		 */
		accounts: FormControl<string | null | undefined>,

		/**
		 * UNIX timestamp on midnight of the given day.
		 * Required
		 */
		day: FormControl<string | null | undefined>,

		/**
		 * the counted usage of the tag within that day. Cast from an integer.
		 * Required
		 */
		uses: FormControl<string | null | undefined>,
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
			accounts: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			day: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an announcement set by an administrator. */
	export interface Announcement {

		/**
		 * Whether the announcement has a start/end time.
		 * Required
		 */
		all_day: boolean;

		/**
		 * When the announcement was created.
		 * Required
		 */
		created_at: string;

		/** When the future announcement will end. ISO 8601 Datetime. */
		ends_at?: string | null;

		/**
		 * The announcement id. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/**
		 * Whether the announcement is currently active.
		 * Required
		 */
		published: boolean;

		/**
		 * Whether the announcement has been read by the user.
		 * Required
		 */
		read: boolean;

		/** When the future announcement was scheduled. ISO 8601 Datetime. */
		scheduled_at?: string | null;

		/** When the future announcement will start. ISO 8601 Datetime. */
		starts_at?: string | null;

		/**
		 * The content of the announcement.
		 * Required
		 */
		text: string;

		/**
		 * When the announcement was last updated. ISO 8601 Datetime.
		 * Required
		 */
		updated_at: string;
	}

	/** Represents an announcement set by an administrator. */
	export interface AnnouncementFormProperties {

		/**
		 * Whether the announcement has a start/end time.
		 * Required
		 */
		all_day: FormControl<boolean | null | undefined>,

		/**
		 * When the announcement was created.
		 * Required
		 */
		created_at: FormControl<string | null | undefined>,

		/** When the future announcement will end. ISO 8601 Datetime. */
		ends_at: FormControl<string | null | undefined>,

		/**
		 * The announcement id. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether the announcement is currently active.
		 * Required
		 */
		published: FormControl<boolean | null | undefined>,

		/**
		 * Whether the announcement has been read by the user.
		 * Required
		 */
		read: FormControl<boolean | null | undefined>,

		/** When the future announcement was scheduled. ISO 8601 Datetime. */
		scheduled_at: FormControl<string | null | undefined>,

		/** When the future announcement will start. ISO 8601 Datetime. */
		starts_at: FormControl<string | null | undefined>,

		/**
		 * The content of the announcement.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * When the announcement was last updated. ISO 8601 Datetime.
		 * Required
		 */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateAnnouncementFormGroup() {
		return new FormGroup<AnnouncementFormProperties>({
			all_day: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ends_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			published: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			read: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduled_at: new FormControl<string | null | undefined>(undefined),
			starts_at: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an emoji reaction to an Announcement. */
	export interface AnnouncementReaction {

		/**
		 * The total number of users who have added this reaction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Whether the authorized user has added this reaction to the announcement. */
		me?: boolean | null;

		/** The emoji used for the reaction. Either a unicode emoji, or a custom emoji's shortcode. */
		name?: string | null;

		/** A link to a non-animated version of the custom emoji (URL). */
		static_url?: string | null;

		/** A link to the custom emoji (URL). */
		url?: string | null;
	}

	/** Represents an emoji reaction to an Announcement. */
	export interface AnnouncementReactionFormProperties {

		/**
		 * The total number of users who have added this reaction.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Whether the authorized user has added this reaction to the announcement. */
		me: FormControl<boolean | null | undefined>,

		/** The emoji used for the reaction. Either a unicode emoji, or a custom emoji's shortcode. */
		name: FormControl<string | null | undefined>,

		/** A link to a non-animated version of the custom emoji (URL). */
		static_url: FormControl<string | null | undefined>,

		/** A link to the custom emoji (URL). */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAnnouncementReactionFormGroup() {
		return new FormGroup<AnnouncementReactionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			me: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			static_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an application that interfaces with the REST API to access accounts or post statuses. */
	export interface Application {

		/** Client ID key, to be used for obtaining OAuth tokens */
		client_id?: string | null;

		/** Client secret key, to be used for obtaining OAuth tokens */
		client_secret?: string | null;

		/**
		 * The name of your application.
		 * Required
		 */
		name: string;

		/** Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key) */
		vapid_key?: string | null;

		/** The website associated with your application. Must be URL. */
		website?: string | null;
	}

	/** Represents an application that interfaces with the REST API to access accounts or post statuses. */
	export interface ApplicationFormProperties {

		/** Client ID key, to be used for obtaining OAuth tokens */
		client_id: FormControl<string | null | undefined>,

		/** Client secret key, to be used for obtaining OAuth tokens */
		client_secret: FormControl<string | null | undefined>,

		/**
		 * The name of your application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key) */
		vapid_key: FormControl<string | null | undefined>,

		/** The website associated with your application. Must be URL. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vapid_key: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a rich preview card that is generated using OpenGraph tags from a URL. */
	export interface Card {

		/** The author of the original resource. */
		author_name?: string | null;

		/** A link to the author of the original resource. */
		author_url?: string | null;

		/** A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. */
		blurhash?: string | null;

		/**
		 * Description of preview.
		 * Required
		 */
		description: string;

		/**
		 * Height of preview, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** HTML to be used for generating the preview card. */
		html?: string | null;

		/** Preview thumbnail (URL). */
		image?: string | null;

		/** The provider of the original resource. */
		provider_name?: string | null;

		/** A link to the provider of the original resource. */
		provider_url?: string | null;

		/**
		 * Title of linked resource.
		 * Required
		 */
		title: string;

		/**
		 * The type of the preview card. String (Enumerable, oneOf).
		 * Required
		 */
		type: CardType;

		/**
		 * Location of linked resource.
		 * Required
		 */
		url: string;

		/**
		 * Width of preview, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Represents a rich preview card that is generated using OpenGraph tags from a URL. */
	export interface CardFormProperties {

		/** The author of the original resource. */
		author_name: FormControl<string | null | undefined>,

		/** A link to the author of the original resource. */
		author_url: FormControl<string | null | undefined>,

		/** A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet. */
		blurhash: FormControl<string | null | undefined>,

		/**
		 * Description of preview.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Height of preview, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** HTML to be used for generating the preview card. */
		html: FormControl<string | null | undefined>,

		/** Preview thumbnail (URL). */
		image: FormControl<string | null | undefined>,

		/** The provider of the original resource. */
		provider_name: FormControl<string | null | undefined>,

		/** A link to the provider of the original resource. */
		provider_url: FormControl<string | null | undefined>,

		/**
		 * Title of linked resource.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the preview card. String (Enumerable, oneOf).
		 * Required
		 */
		type: FormControl<CardType | null | undefined>,

		/**
		 * Location of linked resource.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Width of preview, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			author_name: new FormControl<string | null | undefined>(undefined),
			author_url: new FormControl<string | null | undefined>(undefined),
			blurhash: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			height: new FormControl<number | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			provider_name: new FormControl<string | null | undefined>(undefined),
			provider_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CardType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CardType { link = 'link', photo = 'photo', video = 'video', rich = 'rich' }


	/** Represents the tree around a given status. Used for reconstructing threads of statuses. */
	export interface Context {

		/**
		 * Parents in the thread.
		 * Required
		 */
		ancestors: Array<Status>;

		/**
		 * Children in the thread.
		 * Required
		 */
		descendants: Array<Status>;
	}

	/** Represents the tree around a given status. Used for reconstructing threads of statuses. */
	export interface ContextFormProperties {
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
		});

	}


	/** Represents a conversation with "direct message" visibility. */
	export interface Conversation {

		/**
		 * Participants in the conversation.
		 * Required
		 */
		accounts: Array<Account>;

		/**
		 * Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number
		 * Required
		 */
		id: string;

		/** Represents a status posted by an account. */
		last_status?: Status;

		/**
		 * Is the conversation currently marked as unread?
		 * Required
		 */
		unread: boolean;
	}

	/** Represents a conversation with "direct message" visibility. */
	export interface ConversationFormProperties {

		/**
		 * Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is the conversation currently marked as unread?
		 * Required
		 */
		unread: FormControl<boolean | null | undefined>,
	}
	export function CreateConversationFormGroup() {
		return new FormGroup<ConversationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unread: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an error message. */
	export interface Error {

		/** Required */
		error: string;
		error_description?: string | null;
	}

	/** Represents an error message. */
	export interface ErrorFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a hashtag that is featured on a profile. */
	export interface FeaturedTag {

		/** The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number */
		id?: string | null;

		/** The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime. */
		last_status_at?: Date | null;

		/** The name of the hashtag being featured. */
		name?: string | null;

		/**
		 * The number of authored statuses containing this hashtag.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statuses_count?: number | null;

		/** A link to all statuses by a user that contain this hashtag. */
		url?: string | null;
	}

	/** Represents a hashtag that is featured on a profile. */
	export interface FeaturedTagFormProperties {

		/** The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number */
		id: FormControl<string | null | undefined>,

		/** The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime. */
		last_status_at: FormControl<Date | null | undefined>,

		/** The name of the hashtag being featured. */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of authored statuses containing this hashtag.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statuses_count: FormControl<number | null | undefined>,

		/** A link to all statuses by a user that contain this hashtag. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedTagFormGroup() {
		return new FormGroup<FeaturedTagFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			last_status_at: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			statuses_count: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a user-defined filter for determining which statuses should not be shown to the user. */
	export interface Filter {

		/** The contexts in which the filter should be applied. */
		context?: Array<string>;

		/** When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire */
		expires_at?: string | null;

		/** The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number. */
		id?: string | null;

		/** Should matching entities in home and notifications be dropped by the server? */
		irreversible?: boolean | null;

		/** The text to be filtered. */
		phrase?: string | null;

		/** Should the filter consider word boundaries? */
		whole_word?: boolean | null;
	}

	/** Represents a user-defined filter for determining which statuses should not be shown to the user. */
	export interface FilterFormProperties {

		/** When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire */
		expires_at: FormControl<string | null | undefined>,

		/** The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number. */
		id: FormControl<string | null | undefined>,

		/** Should matching entities in home and notifications be dropped by the server? */
		irreversible: FormControl<boolean | null | undefined>,

		/** The text to be filtered. */
		phrase: FormControl<string | null | undefined>,

		/** Should the filter consider word boundaries? */
		whole_word: FormControl<boolean | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			expires_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			irreversible: new FormControl<boolean | null | undefined>(undefined),
			phrase: new FormControl<string | null | undefined>(undefined),
			whole_word: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a proof from an external identity provider. */
	export interface IdentityProof {

		/** The account owner's profile URL on the identity provider. */
		profile_url?: string | null;

		/** A link to a statement of identity proof, hosted by the identity provider. */
		proof_url?: string | null;

		/** The name of the identity provider. */
		provider?: string | null;

		/** The account owner's username on the identity provider's service. */
		provider_username?: string | null;

		/** When the identity proof was last updated. ISO 8601 Datetime. */
		updated_at?: string | null;
	}

	/** Represents a proof from an external identity provider. */
	export interface IdentityProofFormProperties {

		/** The account owner's profile URL on the identity provider. */
		profile_url: FormControl<string | null | undefined>,

		/** A link to a statement of identity proof, hosted by the identity provider. */
		proof_url: FormControl<string | null | undefined>,

		/** The name of the identity provider. */
		provider: FormControl<string | null | undefined>,

		/** The account owner's username on the identity provider's service. */
		provider_username: FormControl<string | null | undefined>,

		/** When the identity proof was last updated. ISO 8601 Datetime. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProofFormGroup() {
		return new FormGroup<IdentityProofFormProperties>({
			profile_url: new FormControl<string | null | undefined>(undefined),
			proof_url: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			provider_username: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the software instance of Mastodon running on this domain. */
	export interface Instance {

		/**
		 * Whether registrations require moderator approval.
		 * Required
		 */
		approval_required: boolean;

		/** Represents a user of Mastodon and their associated profile. */
		contact_account?: Account;

		/**
		 * Admin-defined description of the Mastodon site.
		 * Required
		 */
		description: string;

		/**
		 * An email that may be contacted for any inquiries.
		 * Required
		 */
		email: string;

		/**
		 * Whether invites are enabled.
		 * Required
		 */
		invites_enabled: boolean;

		/**
		 * Primary languages of the website and its staff. ISO 639 Part 1-5 language codes.
		 * Required
		 */
		languages: Array<string>;

		/**
		 * Whether registrations are enabled.
		 * Required
		 */
		registrations: boolean;

		/**
		 * A shorter description defined by the admin.
		 * Required
		 */
		short_description: string;

		/**
		 * Statistics about how much information the instance contains.
		 * Required
		 */
		stats: string;

		/** Banner image for the website. */
		thumbnail?: string | null;

		/**
		 * The title of the website.
		 * Required
		 */
		title: string;

		/**
		 * The domain name of the instance.
		 * Required
		 */
		uri: string;

		/**
		 * URLs of interest for clients apps.
		 * Required
		 */
		urls: string;

		/**
		 * The version of Mastodon installed on the instance.
		 * Required
		 */
		version: string;
	}

	/** Represents the software instance of Mastodon running on this domain. */
	export interface InstanceFormProperties {

		/**
		 * Whether registrations require moderator approval.
		 * Required
		 */
		approval_required: FormControl<boolean | null | undefined>,

		/**
		 * Admin-defined description of the Mastodon site.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * An email that may be contacted for any inquiries.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Whether invites are enabled.
		 * Required
		 */
		invites_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Whether registrations are enabled.
		 * Required
		 */
		registrations: FormControl<boolean | null | undefined>,

		/**
		 * A shorter description defined by the admin.
		 * Required
		 */
		short_description: FormControl<string | null | undefined>,

		/**
		 * Statistics about how much information the instance contains.
		 * Required
		 */
		stats: FormControl<string | null | undefined>,

		/** Banner image for the website. */
		thumbnail: FormControl<string | null | undefined>,

		/**
		 * The title of the website.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The domain name of the instance.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * URLs of interest for clients apps.
		 * Required
		 */
		urls: FormControl<string | null | undefined>,

		/**
		 * The version of Mastodon installed on the instance.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			approval_required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invites_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			registrations: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			short_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stats: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urls: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a list of some users that the authenticated user follows. */
	export interface List {

		/**
		 * The internal database ID of the list. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/**
		 * The user-defined title of the list.
		 * Required
		 */
		replies_policy: ListReplies_policy;

		/**
		 * The user-defined title of the list.
		 * Required
		 */
		title: string;
	}

	/** Represents a list of some users that the authenticated user follows. */
	export interface ListFormProperties {

		/**
		 * The internal database ID of the list. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The user-defined title of the list.
		 * Required
		 */
		replies_policy: FormControl<ListReplies_policy | null | undefined>,

		/**
		 * The user-defined title of the list.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateListFormGroup() {
		return new FormGroup<ListFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replies_policy: new FormControl<ListReplies_policy | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListReplies_policy { followed = 'followed', list = 'list', none = 'none' }


	/** Represents the last read position within a user's timelines. */
	export interface Marker {

		/** Information about the user's position in the home timeline. */
		home?: string | null;

		/** The ID of the most recently viewed entity. Cast from integer but not guaranteed to be a number */
		last_read_id?: string | null;

		/** Information about the user's position in their notifications. */
		notifications?: string | null;

		/** The timestamp of when the marker was set. ISO 8601 Datetime. */
		updated_at?: Date | null;

		/**
		 * Used for locking to prevent write conflicts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Represents the last read position within a user's timelines. */
	export interface MarkerFormProperties {

		/** Information about the user's position in the home timeline. */
		home: FormControl<string | null | undefined>,

		/** The ID of the most recently viewed entity. Cast from integer but not guaranteed to be a number */
		last_read_id: FormControl<string | null | undefined>,

		/** Information about the user's position in their notifications. */
		notifications: FormControl<string | null | undefined>,

		/** The timestamp of when the marker was set. ISO 8601 Datetime. */
		updated_at: FormControl<Date | null | undefined>,

		/**
		 * Used for locking to prevent write conflicts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMarkerFormGroup() {
		return new FormGroup<MarkerFormProperties>({
			home: new FormControl<string | null | undefined>(undefined),
			last_read_id: new FormControl<string | null | undefined>(undefined),
			notifications: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a notification of an event relevant to the user. */
	export interface Notification {

		/**
		 * Represents a user of Mastodon and their associated profile.
		 * Required
		 */
		account: Account;

		/**
		 * The timestamp of the notification. ISO 8601 Datetime.
		 * Required
		 */
		created_at: Date;

		/**
		 * The id of the notification in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/** Represents a status posted by an account. */
		status?: Status;

		/**
		 * The type of event that resulted in the notification.
		 * Required
		 */
		type: NotificationType;
	}

	/** Represents a notification of an event relevant to the user. */
	export interface NotificationFormProperties {

		/**
		 * The timestamp of the notification. ISO 8601 Datetime.
		 * Required
		 */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The id of the notification in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of event that resulted in the notification.
		 * Required
		 */
		type: FormControl<NotificationType | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NotificationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationType { follow = 'follow', follow_request = 'follow_request', mention = 'mention', reblog = 'reblog', favourite = 'favourite', poll = 'poll', status = 'status' }


	/** Represents a poll attached to a status. */
	export interface Poll {

		/** Custom emoji to be used for rendering poll options. */
		emojis?: Array<Emoji>;

		/** Is the poll currently expired? */
		expired?: boolean | null;

		/** When the poll ends. ISO 8601 Datetime, or null if the poll does not end. */
		expires_at?: Date | null;

		/** The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number. */
		id?: string | null;

		/** Does the poll allow multiple-choice answers? */
		multiple?: boolean | null;

		/** Possible answers for the poll. */
		options?: Array<string>;

		/** When called with a user token, which options has the authorized user chosen? Contains an array of index values for `options`. Array of Number, or null if no current user */
		own_votes?: Array<number>;

		/** When called with a user token, has the authorized user voted? Boolean, or null if no current user */
		voted?: boolean | null;

		/**
		 * How many unique accounts have voted on a multiple-choice poll. Number, or null if `multiple` is false.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voters_count?: number | null;

		/**
		 * How many votes have been received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		votes_count?: number | null;
	}

	/** Represents a poll attached to a status. */
	export interface PollFormProperties {

		/** Is the poll currently expired? */
		expired: FormControl<boolean | null | undefined>,

		/** When the poll ends. ISO 8601 Datetime, or null if the poll does not end. */
		expires_at: FormControl<Date | null | undefined>,

		/** The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number. */
		id: FormControl<string | null | undefined>,

		/** Does the poll allow multiple-choice answers? */
		multiple: FormControl<boolean | null | undefined>,

		/** When called with a user token, has the authorized user voted? Boolean, or null if no current user */
		voted: FormControl<boolean | null | undefined>,

		/**
		 * How many unique accounts have voted on a multiple-choice poll. Number, or null if `multiple` is false.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		voters_count: FormControl<number | null | undefined>,

		/**
		 * How many votes have been received.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		votes_count: FormControl<number | null | undefined>,
	}
	export function CreatePollFormGroup() {
		return new FormGroup<PollFormProperties>({
			expired: new FormControl<boolean | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			multiple: new FormControl<boolean | null | undefined>(undefined),
			voted: new FormControl<boolean | null | undefined>(undefined),
			voters_count: new FormControl<number | null | undefined>(undefined),
			votes_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a user's preferences. */
	export interface Preferences {

		/** Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null */
		'posting:default:language'?: string | null;

		/** Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive). */
		'posting:default:sensitive'?: boolean | null;

		/** Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy). */
		'posting:default:visibility'?: SourcePrivacy | null;

		/** Whether media attachments should be automatically displayed or blurred/hidden. */
		'reading:expand:media'?: PreferencesReading_expand_media | null;

		/** Whether CWs should be expanded by default. */
		'reading:expand:spoilers'?: boolean | null;
	}

	/** Represents a user's preferences. */
	export interface PreferencesFormProperties {

		/** Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null */
		'posting:default:language': FormControl<string | null | undefined>,

		/** Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive). */
		'posting:default:sensitive': FormControl<boolean | null | undefined>,

		/** Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy). */
		'posting:default:visibility': FormControl<SourcePrivacy | null | undefined>,

		/** Whether media attachments should be automatically displayed or blurred/hidden. */
		'reading:expand:media': FormControl<PreferencesReading_expand_media | null | undefined>,

		/** Whether CWs should be expanded by default. */
		'reading:expand:spoilers': FormControl<boolean | null | undefined>,
	}
	export function CreatePreferencesFormGroup() {
		return new FormGroup<PreferencesFormProperties>({
			'posting:default:language': new FormControl<string | null | undefined>(undefined),
			'posting:default:sensitive': new FormControl<boolean | null | undefined>(undefined),
			'posting:default:visibility': new FormControl<SourcePrivacy | null | undefined>(undefined),
			'reading:expand:media': new FormControl<PreferencesReading_expand_media | null | undefined>(undefined),
			'reading:expand:spoilers': new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PreferencesReading_expand_media { default = 'default', show_all = 'show_all', hide_all = 'hide_all' }


	/** Represents a subscription to the push streaming server. */
	export interface PushSubscription {

		/**
		 * Which alerts should be delivered to the `endpoint`.
		 * Required
		 */
		alerts: string;

		/**
		 * Where push alerts will be sent to.
		 * Required
		 */
		endpoint: string;

		/**
		 * The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/**
		 * The streaming server's VAPID key.
		 * Required
		 */
		server_key: string;
	}

	/** Represents a subscription to the push streaming server. */
	export interface PushSubscriptionFormProperties {

		/**
		 * Which alerts should be delivered to the `endpoint`.
		 * Required
		 */
		alerts: FormControl<string | null | undefined>,

		/**
		 * Where push alerts will be sent to.
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/**
		 * The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The streaming server's VAPID key.
		 * Required
		 */
		server_key: FormControl<string | null | undefined>,
	}
	export function CreatePushSubscriptionFormGroup() {
		return new FormGroup<PushSubscriptionFormProperties>({
			alerts: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the relationship between accounts, such as following / blocking / muting / etc. */
	export interface Relationship {

		/**
		 * Is this user blocking you?
		 * Required
		 */
		blocked_by: boolean;

		/**
		 * Are you blocking this user?
		 * Required
		 */
		blocking: boolean;

		/**
		 * Are you blocking this user's domain?
		 * Required
		 */
		domain_blocking: boolean;

		/**
		 * Are you featuring this user on your profile?
		 * Required
		 */
		endorsed: boolean;

		/**
		 * Are you followed by this user?
		 * Required
		 */
		followed_by: boolean;

		/**
		 * Are you following this user?
		 * Required
		 */
		following: boolean;

		/**
		 * The account id. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/**
		 * Are you muting this user?
		 * Required
		 */
		muting: boolean;

		/**
		 * Are you muting notifications from this user?
		 * Required
		 */
		muting_notifications: boolean;

		/**
		 * This user's profile bio
		 * Required
		 */
		note: string;

		/**
		 * Have you enabled notifications for this user?
		 * Required
		 */
		notifying: boolean;

		/**
		 * Do you have a pending follow request for this user?
		 * Required
		 */
		requested: boolean;

		/**
		 * Are you receiving this user's boosts in your home timeline?
		 * Required
		 */
		showing_reblogs: boolean;
	}

	/** Represents the relationship between accounts, such as following / blocking / muting / etc. */
	export interface RelationshipFormProperties {

		/**
		 * Is this user blocking you?
		 * Required
		 */
		blocked_by: FormControl<boolean | null | undefined>,

		/**
		 * Are you blocking this user?
		 * Required
		 */
		blocking: FormControl<boolean | null | undefined>,

		/**
		 * Are you blocking this user's domain?
		 * Required
		 */
		domain_blocking: FormControl<boolean | null | undefined>,

		/**
		 * Are you featuring this user on your profile?
		 * Required
		 */
		endorsed: FormControl<boolean | null | undefined>,

		/**
		 * Are you followed by this user?
		 * Required
		 */
		followed_by: FormControl<boolean | null | undefined>,

		/**
		 * Are you following this user?
		 * Required
		 */
		following: FormControl<boolean | null | undefined>,

		/**
		 * The account id. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Are you muting this user?
		 * Required
		 */
		muting: FormControl<boolean | null | undefined>,

		/**
		 * Are you muting notifications from this user?
		 * Required
		 */
		muting_notifications: FormControl<boolean | null | undefined>,

		/**
		 * This user's profile bio
		 * Required
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * Have you enabled notifications for this user?
		 * Required
		 */
		notifying: FormControl<boolean | null | undefined>,

		/**
		 * Do you have a pending follow request for this user?
		 * Required
		 */
		requested: FormControl<boolean | null | undefined>,

		/**
		 * Are you receiving this user's boosts in your home timeline?
		 * Required
		 */
		showing_reblogs: FormControl<boolean | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			blocked_by: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			blocking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			domain_blocking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			endorsed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			followed_by: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			following: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			muting: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			muting_notifications: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notifying: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requested: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			showing_reblogs: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Reports filed against users and/or statuses, to be taken action on by moderators. */
	export interface Report {
		action_taken?: boolean | null;
		action_taken_at?: Date | null;
		category?: ReportCategory | null;
		comment?: string | null;
		created_at?: Date | null;
		forwarded?: boolean | null;
		id?: string | null;
		rule_ids?: Array<number>;
		status_ids?: Array<number>;

		/** Represents a user of Mastodon and their associated profile. */
		target_account?: Account;
	}

	/** Reports filed against users and/or statuses, to be taken action on by moderators. */
	export interface ReportFormProperties {
		action_taken: FormControl<boolean | null | undefined>,
		action_taken_at: FormControl<Date | null | undefined>,
		category: FormControl<ReportCategory | null | undefined>,
		comment: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		forwarded: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			action_taken: new FormControl<boolean | null | undefined>(undefined),
			action_taken_at: new FormControl<Date | null | undefined>(undefined),
			category: new FormControl<ReportCategory | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			forwarded: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportCategory { other = 'other', spam = 'spam', violation = 'violation' }


	/** Represents the results of a search. */
	export interface Results {

		/**
		 * Accounts which match the given query.
		 * Required
		 */
		accounts: Array<Account>;

		/**
		 * Hashtags which match the given query.
		 * Required
		 */
		hashtags: Array<Tag>;

		/**
		 * Statuses which match the given query.
		 * Required
		 */
		statuses: Array<Status>;
	}

	/** Represents the results of a search. */
	export interface ResultsFormProperties {
	}
	export function CreateResultsFormGroup() {
		return new FormGroup<ResultsFormProperties>({
		});

	}


	/** Represents a status that will be published at a future scheduled date. */
	export interface ScheduledStatus {

		/**
		 * ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: string;

		/**
		 * Array of attachements
		 * Required
		 */
		media_attachments: Array<Attachment>;

		/** Required */
		params: StatusParams;

		/**
		 * ID of the status in the database. ISO 8601 Datetime.
		 * Required
		 */
		scheduled_at: Date;
	}

	/** Represents a status that will be published at a future scheduled date. */
	export interface ScheduledStatusFormProperties {

		/**
		 * ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * ID of the status in the database. ISO 8601 Datetime.
		 * Required
		 */
		scheduled_at: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledStatusFormGroup() {
		return new FormGroup<ScheduledStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduled_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StatusParams {

		/** application_id */
		application_id?: string | null;

		/** in_reply_to_id */
		in_reply_to_id?: string | null;

		/** media_ids */
		media_ids?: Array<string>;

		/** scheduled_at */
		scheduled_at?: Date | null;

		/** sensitive */
		sensitive?: boolean | null;

		/** spoiler_text */
		spoiler_text?: string | null;

		/** text */
		text?: string | null;

		/** visibility */
		visibility?: string | null;
	}
	export interface StatusParamsFormProperties {

		/** application_id */
		application_id: FormControl<string | null | undefined>,

		/** in_reply_to_id */
		in_reply_to_id: FormControl<string | null | undefined>,

		/** scheduled_at */
		scheduled_at: FormControl<Date | null | undefined>,

		/** sensitive */
		sensitive: FormControl<boolean | null | undefined>,

		/** spoiler_text */
		spoiler_text: FormControl<string | null | undefined>,

		/** text */
		text: FormControl<string | null | undefined>,

		/** visibility */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateStatusParamsFormGroup() {
		return new FormGroup<StatusParamsFormProperties>({
			application_id: new FormControl<string | null | undefined>(undefined),
			in_reply_to_id: new FormControl<string | null | undefined>(undefined),
			scheduled_at: new FormControl<Date | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			spoiler_text: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an OAuth token used for authenticating with the API and performing actions. */
	export interface Token {

		/** An OAuth token to be used for authorization. */
		access_token?: string | null;

		/**
		 * When the token was generated. UNIX Timestamp.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at?: number | null;

		/** The OAuth scopes granted by this token, space-separated. */
		scope?: string | null;

		/** The OAuth token type. Mastodon uses `Bearer` tokens. */
		token_type?: string | null;
	}

	/** Represents an OAuth token used for authenticating with the API and performing actions. */
	export interface TokenFormProperties {

		/** An OAuth token to be used for authorization. */
		access_token: FormControl<string | null | undefined>,

		/**
		 * When the token was generated. UNIX Timestamp.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		created_at: FormControl<number | null | undefined>,

		/** The OAuth scopes granted by this token, space-separated. */
		scope: FormControl<string | null | undefined>,

		/** The OAuth token type. Mastodon uses `Bearer` tokens. */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * OEmbed as JSON
		 * Get api/oembed
		 * @param {string} url URL of a status
		 * @param {number} maxwidth width of the iframe. Defaults to 400
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} maxheight height of the iframe. Defaults to null
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Card} Success
		 */
		ApiOembedGetByUrlAndMaxwidthAndMaxheight(url: string | null | undefined, maxwidth: number | null | undefined, maxheight: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Card> {
			return this.http.get<Card>(this.baseUri + 'api/oembed?url=' + (url == null ? '' : encodeURIComponent(url)) + '&maxwidth=' + maxwidth + '&maxheight=' + maxheight, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View identity proof
		 * Get api/proofs
		 * @param {string} provider The identity provider to be looked up. Currently only supports keybase (case-sensitive)
		 * @param {string} username The username on the selected identity provider
		 * @return {IdentityProof} Success
		 */
		ApiProofsGetByProviderAndUsername(provider: string | null | undefined, username: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<IdentityProof> {
			return this.http.get<IdentityProof>(this.baseUri + 'api/proofs?provider=' + (provider == null ? '' : encodeURIComponent(provider)) + '&username=' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sets a private note on a user.
		 * Get api/v1/accounts/relationships
		 * @param {Array<string>} id Array of account IDs to check
		 * @return {Array<Relationship>} Success.
		 */
		ApiV1AccountsRelationshipsGetById(id: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<Relationship>> {
			return this.http.get<Array<Relationship>>(this.baseUri + 'api/v1/accounts/relationships?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for matching accounts by username or display name.
		 * Get api/v1/accounts/search
		 * @param {string} q What to search for
		 * @param {number} limit Maximum number of results. Defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} resolve Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address.
		 * @param {boolean} following Only who the user is following. Defaults to false.
		 * @return {Array<Account>} Accounts matching `q` in username or display name
		 */
		ApiV1AccountsSearchGetByQAndLimitAndResolveAndFollowing(q: string, limit: number | null | undefined, resolve: string | null | undefined, following: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/accounts/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit + '&resolve=' + (resolve == null ? '' : encodeURIComponent(resolve)) + '&following=' + following, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Test to make sure that the user token works.
		 * Get api/v1/accounts/verify_credentials
		 * @return {Account} Note the extra `source` property, which is not visible on accounts other than your own. Also note that plain-text is used within `source` and HTML is used for their corresponding properties such as `note` and `fields`.
		 */
		ApiV1AccountsVerify_credentialsGet(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v1/accounts/verify_credentials', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/accounts/{id}
		 * @return {Account} Account record will be returned. Note that `acct` of local users does not include the domain name.
		 */
		ApiV1Accounts_idGet(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v1/accounts/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
		 * Post api/v1/accounts/{id}/block
		 * @return {Relationship} Successfully blocked, or account was already blocked
		 */
		ApiV1Accounts_idBlockPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/block', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Tags featured by this account.
		 * Get api/v1/accounts/{id}/featured_tags
		 * @return {Array<FeaturedTag>} Success
		 */
		ApiV1Accounts_idFeatured_tagsGet(headersHandler?: () => HttpHeaders): Observable<Array<FeaturedTag>> {
			return this.http.get<Array<FeaturedTag>>(this.baseUri + 'api/v1/accounts/{id}/featured_tags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accounts which follow the given account, if network is not hidden by the account owner.
		 * Get api/v1/accounts/{id}/followers
		 * @param {string} max_id Internal parameter. Use HTTP `Link` header for pagination.
		 * @param {string} since_id Internal parameter. Use HTTP `Link` header for pagination.
		 * @param {number} limit Maximum number of results to return. Defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Account>} Success
		 */
		ApiV1Accounts_idFollowersGetByMax_idAndSince_idAndLimit(max_id: string | null | undefined, since_id: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/accounts/{id}/followers?max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accounts which the given account is following, if network is not hidden by the account owner.
		 * Get api/v1/accounts/{id}/following
		 * @param {string} max_id Internal parameter. Use HTTP `Link` header for pagination.
		 * @param {string} since_id Internal parameter. Use HTTP `Link` header for pagination.
		 * @param {number} limit Maximum number of results to return. Defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Account>} Success
		 */
		ApiV1Accounts_idFollowingGetByMax_idAndSince_idAndLimit(max_id: string | null | undefined, since_id: string | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/accounts/{id}/following?max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Array of IdentityProof
		 * Get api/v1/accounts/{id}/identity_proofs
		 * @return {Array<IdentityProof>} Success
		 */
		ApiV1Accounts_idIdentity_proofsGet(headersHandler?: () => HttpHeaders): Observable<Array<IdentityProof>> {
			return this.http.get<Array<IdentityProof>>(this.baseUri + 'api/v1/accounts/{id}/identity_proofs', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User lists that you have added this account to.
		 * Get api/v1/accounts/{id}/lists
		 * @return {Array<List>} Success
		 */
		ApiV1Accounts_idListsGet(headersHandler?: () => HttpHeaders): Observable<Array<List>> {
			return this.http.get<Array<List>>(this.baseUri + 'api/v1/accounts/{id}/lists', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
		 * Post api/v1/accounts/{id}/pin
		 * @return {Relationship} Successfully unmuted, or account was already unmuted.
		 */
		ApiV1Accounts_idPinPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/pin', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Statuses posted to the given account.
		 * Get api/v1/accounts/{id}/statuses
		 * @return {Array<Status>} Statuses posted to the given account. Public (for public statuses only), or user token + read:statuses (for private statuses the user is authorized to see)
		 */
		ApiV1Accounts_idStatusesGet(headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/accounts/{id}/statuses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
		 * Post api/v1/accounts/{id}/unblock
		 * @return {Relationship} Successfully unblocked, or account was already not blocked
		 */
		ApiV1Accounts_idUnblockPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/unblock', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfollow the given account.
		 * Post api/v1/accounts/{id}/unfollow
		 * @return {Relationship} Successfully unfollowed, or account was already not followed
		 */
		ApiV1Accounts_idUnfollowPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/unfollow', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unmute the given account.
		 * Post api/v1/accounts/{id}/unmute
		 * @return {Relationship} Successfully unmuted, or account was already unmuted.
		 */
		ApiV1Accounts_idUnmutePost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/unmute', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove the given account from the user's featured profiles.
		 * Post api/v1/accounts/{id}/unpin
		 * @return {Relationship} Successfully unmuted, or account was already unmuted.
		 */
		ApiV1Accounts_idUnpinPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/accounts/{id}/unpin', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.
		 * Get api/v1/admin/accounts
		 * @param {boolean} local Filter for local accounts?
		 * @param {boolean} remote Filter for remote accounts?
		 * @param {string} by_domain Filter by the given domain
		 * @param {boolean} active Filter for currently active accounts?
		 * @param {boolean} pending Filter for currently pending accounts?
		 * @param {boolean} disabled Filter for currently disabled accounts?
		 * @param {boolean} silenced Filter for currently silenced accounts?
		 * @param {boolean} suspended Filter for currently suspended accounts?
		 * @param {boolean} staff Filter for staff accounts?
		 * @param {string} username Username to search for
		 * @param {string} display_name Display name to search for
		 * @param {string} email Lookup a user with this email
		 * @param {string} ip Lookup a user with this IP
		 * @return {Array<AdminAccount>} Success
		 */
		ApiV1AdminAccountsGetByLocalAndRemoteAndBy_domainAndActiveAndPendingAndDisabledAndSilencedAndSuspendedAndStaffAndUsernameAndDisplay_nameAndEmailAndIp(local: boolean | null | undefined, remote: boolean | null | undefined, by_domain: string | null | undefined, active: boolean | null | undefined, pending: boolean | null | undefined, disabled: boolean | null | undefined, silenced: boolean | null | undefined, suspended: boolean | null | undefined, staff: boolean | null | undefined, username: string | null | undefined, display_name: string | null | undefined, email: string | null | undefined, ip: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AdminAccount>> {
			return this.http.get<Array<AdminAccount>>(this.baseUri + 'api/v1/admin/accounts?local=' + local + '&remote=' + remote + '&by_domain=' + (by_domain == null ? '' : encodeURIComponent(by_domain)) + '&active=' + active + '&pending=' + pending + '&disabled=' + disabled + '&silenced=' + silenced + '&suspended=' + suspended + '&staff=' + staff + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&display_name=' + (display_name == null ? '' : encodeURIComponent(display_name)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View admin-level information about the given account.
		 * Get api/v1/admin/accounts/{id}
		 * @return {AdminAccount} Success
		 */
		ApiV1AdminAccounts_idGet(headersHandler?: () => HttpHeaders): Observable<AdminAccount> {
			return this.http.get<AdminAccount>(this.baseUri + 'api/v1/admin/accounts/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Perform an action against an account and log this action in the moderation history.
		 * Post api/v1/admin/accounts/{id}/action
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idActionPost(requestBody: ApiV1AdminAccounts_idActionPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/action', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Approve the given local account if it is currently pending approval.
		 * Post api/v1/admin/accounts/{id}/approve
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idApprovePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/approve', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-enable a local account whose login is currently disabled.
		 * Post api/v1/admin/accounts/{id}/enable
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idEnablePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/enable', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reject the given local account if it is currently pending approval.
		 * Post api/v1/admin/accounts/{id}/reject
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idRejectPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/reject', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsilence a currently silenced account.
		 * Post api/v1/admin/accounts/{id}/unsilence
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idUnsilencePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/unsilence', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsuspend a currently suspended account.
		 * Post api/v1/admin/accounts/{id}/unsuspend
		 * @return {void} Success
		 */
		ApiV1AdminAccounts_idUnsuspendPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/admin/accounts/{id}/unsuspend', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * View all reports. Pagination may be done with HTTP Link header in the response.
		 * Get api/v1/admin/reports
		 * @return {Array<AdminReport>} Success
		 */
		ApiV1AdminReportsGetByResolvedAndAccount_idAndTarget_account_id(resolved: boolean | null | undefined, account_id: string | null | undefined, target_account_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AdminReport>> {
			return this.http.get<Array<AdminReport>>(this.baseUri + 'api/v1/admin/reports?resolved=' + resolved + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)) + '&target_account_id=' + (target_account_id == null ? '' : encodeURIComponent(target_account_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View information about the report with the given ID.
		 * Get api/v1/admin/reports/{id}
		 * @return {AdminReport} Success
		 */
		ApiV1AdminReports_idGet(headersHandler?: () => HttpHeaders): Observable<AdminReport> {
			return this.http.get<AdminReport>(this.baseUri + 'api/v1/admin/reports/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Claim the handling of this report to yourself.
		 * Post api/v1/admin/reports/{id}/assign_to_self
		 * @return {AdminReport} Success
		 */
		ApiV1AdminReports_idAssign_to_selfPost(headersHandler?: () => HttpHeaders): Observable<AdminReport> {
			return this.http.post<AdminReport>(this.baseUri + 'api/v1/admin/reports/{id}/assign_to_self', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mark a report as resolved with no further action taken.
		 * Post api/v1/admin/reports/{id}/reopen
		 * @return {AdminReport} Success
		 */
		ApiV1AdminReports_idReopenPost(headersHandler?: () => HttpHeaders): Observable<AdminReport> {
			return this.http.post<AdminReport>(this.baseUri + 'api/v1/admin/reports/{id}/reopen', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Mark a report as resolved with no further action taken.
		 * Post api/v1/admin/reports/{id}/resolve
		 * @return {AdminReport} Success
		 */
		ApiV1AdminReports_idResolvePost(headersHandler?: () => HttpHeaders): Observable<AdminReport> {
			return this.http.post<AdminReport>(this.baseUri + 'api/v1/admin/reports/{id}/resolve', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unassign a report so that someone else can claim it.
		 * Post api/v1/admin/reports/{id}/unassign
		 * @return {AdminReport} Success
		 */
		ApiV1AdminReports_idUnassignPost(headersHandler?: () => HttpHeaders): Observable<AdminReport> {
			return this.http.post<AdminReport>(this.baseUri + 'api/v1/admin/reports/{id}/unassign', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * See all currently active announcements set by admins.
		 * Get api/v1/announcements
		 * @param {boolean} with_dismissed If true, response will include announcements dismissed by the user. Defaults to false.
		 * @return {Array<Announcement>} Success
		 */
		ApiV1AnnouncementsGetByWith_dismissed(with_dismissed: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Announcement>> {
			return this.http.get<Array<Announcement>>(this.baseUri + 'api/v1/announcements?with_dismissed=' + with_dismissed, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Allows a user to mark the announcement as read.
		 * Post api/v1/announcements/{id}/dismiss
		 * @return {string} Success
		 */
		ApiV1Announcements_idDismissPost(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/v1/announcements/{id}/dismiss', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Undo a react emoji to an announcement.
		 * Delete api/v1/announcements/{id}/reactions/{name}
		 * @return {string} Success
		 */
		ApiV1Announcements_idReactions_nameDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/announcements/{id}/reactions/{name}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Allows a user to mark the announcement as read.
		 * Put api/v1/announcements/{id}/reactions/{name}
		 * @return {string} Success
		 */
		ApiV1Announcements_idReactions_namePut(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'api/v1/announcements/{id}/reactions/{name}', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Confirm that the app's OAuth2 credentials work.
		 * Get api/v1/apps/verify_credentials
		 * @return {Application} If the Authorization header was provided with a valid token, you should see your app returned as an Application entity.
		 */
		ApiV1AppsVerify_credentialsGet(headersHandler?: () => HttpHeaders): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'api/v1/apps/verify_credentials', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get blocked users.
		 * Get api/v1/blocks
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Account>} success
		 */
		ApiV1BlocksGetByLimitAndMax_idAndSince_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/blocks?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Statuses the user has bookmarked.
		 * Get api/v1/bookmarks
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Status>} success
		 */
		ApiV1BookmarksGetByLimitAndMax_idAndSince_idAndMin_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/bookmarks?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Show conversation.
		 * Get api/v1/conversations
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<Conversation>} Success.
		 */
		ApiV1ConversationsGetByLimitAndMax_idAndSince_idAndMin_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Conversation>> {
			return this.http.get<Array<Conversation>>(this.baseUri + 'api/v1/conversations?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove converstation
		 * Delete api/v1/conversations/{id}
		 * @return {string} Success.
		 */
		ApiV1Conversations_idDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/conversations/{id}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Remove converstation
		 * Post api/v1/conversations/{id}/read
		 * @return {Conversation} The value of unread has been changed to false..
		 */
		ApiV1Conversations_idReadPost(headersHandler?: () => HttpHeaders): Observable<Conversation> {
			return this.http.post<Conversation>(this.baseUri + 'api/v1/conversations/{id}/read', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns custom emojis that are available on the server.
		 * Get api/v1/custom_emojis
		 * @return {Array<Emoji>} List of Emojis
		 */
		ApiV1Custom_emojisGet(headersHandler?: () => HttpHeaders): Observable<Array<Emoji>> {
			return this.http.get<Array<Emoji>>(this.baseUri + 'api/v1/custom_emojis', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List accounts visible in the directory.
		 * Get api/v1/directory
		 * @param {number} limit How many accounts to load. Default 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset How many accounts to skip before returning results. Default 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ApiV1DirectoryGetByLimitAndOffsetAndOrderAndLocalOrder} order the `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles.
		 * @param {boolean} local Only return local accounts.
		 * @return {Array<Account>} List of accounts
		 */
		ApiV1DirectoryGetByLimitAndOffsetAndOrderAndLocal(limit: number | null | undefined, offset: number | null | undefined, order: ApiV1DirectoryGetByLimitAndOffsetAndOrderAndLocalOrder | null | undefined, local: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/directory?limit=' + limit + '&offset=' + offset + '&order=' + order + '&local=' + local, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a domain block, if it exists in the user's array of blocked domains.
		 * Delete api/v1/domain_blocks
		 * @param {string} domain Domain to unblock.
		 * @return {string} success
		 */
		ApiV1Domain_blocksDeleteByDomain(domain: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/domain_blocks?domain=' + (domain == null ? '' : encodeURIComponent(domain)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View domains the user has blocked.
		 * Get api/v1/domain_blocks
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<string>} success
		 */
		ApiV1Domain_blocksGetByLimitAndMax_idAndSince_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/domain_blocks?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accounts that the user is currently featuring on their profile.
		 * Get api/v1/endorsements
		 * @param {number} limit Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Internal parameter. Use HTTP Link header from response for pagination
		 * @param {string} since_id Internal parameter. Use HTTP Link header from response for pagination.
		 * @return {Array<Account>} Success. Because endorsement ids are private, you must parse the HTTP Link header to find next and previous pages.
		 */
		ApiV1EndorsementsGetByLimitAndMax_idAndSince_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/endorsements?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Statuses the user has favourited.
		 * Get api/v1/favourites
		 * @return {Array<Status>} success
		 */
		ApiV1FavouritesGetByLimitAndMax_idAndMin_id(limit: string | null | undefined, max_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/favourites?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View your featured tags.
		 * Get api/v1/featured_tags
		 * @return {Array<FeaturedTag>} Success.
		 */
		ApiV1Featured_tagsGet(headersHandler?: () => HttpHeaders): Observable<Array<FeaturedTag>> {
			return this.http.get<Array<FeaturedTag>>(this.baseUri + 'api/v1/featured_tags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a feature a tag.
		 * Post api/v1/featured_tags
		 * @return {FeaturedTag} Success.
		 */
		ApiV1Featured_tagsPost(requestBody: ApiV1Featured_tagsPostPostBody, headersHandler?: () => HttpHeaders): Observable<FeaturedTag> {
			return this.http.post<FeaturedTag>(this.baseUri + 'api/v1/featured_tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Shows your 10 most-used tags, with usage history for the past week.
		 * Get api/v1/featured_tags/suggestions
		 * @return {Array<FeaturedTag>} Success.
		 */
		ApiV1Featured_tagsSuggestionsGet(headersHandler?: () => HttpHeaders): Observable<Array<FeaturedTag>> {
			return this.http.get<Array<FeaturedTag>>(this.baseUri + 'api/v1/featured_tags/suggestions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfeature a tag
		 * Delete api/v1/featured_tags/{id}
		 * @return {string} An empty object will be returned if the featured tag was successfully deleted.
		 */
		ApiV1Featured_tags_idDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/featured_tags/{id}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get api/v1/filters
		 * @return {Array<Filter>} Excerpts of various filters in different contexts.
		 */
		ApiV1FiltersGet(headersHandler?: () => HttpHeaders): Observable<Array<Filter>> {
			return this.http.get<Array<Filter>>(this.baseUri + 'api/v1/filters', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a filter.
		 * Delete api/v1/filters/{id}
		 * @return {void} The filter has been deleted successfully, so an empty object will be returned.
		 */
		ApiV1Filters_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/filters/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one filter.
		 * Get api/v1/filters/{id}
		 * @return {Filter} Filter returned successfully.
		 */
		ApiV1Filters_idGet(headersHandler?: () => HttpHeaders): Observable<Filter> {
			return this.http.get<Filter>(this.baseUri + 'api/v1/filters/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Pending Follows
		 * Get api/v1/follow_requests
		 * @param {number} limit Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Account>} Accounts that are requesting a follow.
		 */
		ApiV1Follow_requestsGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/follow_requests?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accept Follow
		 * Post api/v1/follow_requests/{id}/authorize
		 * @return {Relationship} Your Relationship with this account should be updated so that you are followed_by this account.
		 */
		ApiV1Follow_requests_idAuthorizePost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/follow_requests/{id}/authorize', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accept Follow
		 * Post api/v1/follow_requests/{id}/reject
		 * @return {Relationship} Your Relationship with this Account should be unchanged.
		 */
		ApiV1Follow_requests_idRejectPost(headersHandler?: () => HttpHeaders): Observable<Relationship> {
			return this.http.post<Relationship>(this.baseUri + 'api/v1/follow_requests/{id}/reject', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Information about the server.
		 * Get api/v1/instance
		 * @return {Instance} Result
		 */
		ApiV1InstanceGet(headersHandler?: () => HttpHeaders): Observable<Instance> {
			return this.http.get<Instance>(this.baseUri + 'api/v1/instance', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Instance activity over the last 3 months, binned weekly.
		 * Get api/v1/instance/activity
		 * @return {Array<Activity>} Domains that this instance is aware of.
		 */
		ApiV1InstanceActivityGet(headersHandler?: () => HttpHeaders): Observable<Array<Activity>> {
			return this.http.get<Array<Activity>>(this.baseUri + 'api/v1/instance/activity', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Information about the server.
		 * Get api/v1/instance/peers
		 * @return {Array<string>} Domains that this instance is aware of.
		 */
		ApiV1InstancePeersGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/v1/instance/peers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a list
		 * Delete api/v1/lists
		 * @return {string} A list was deleted successfully
		 */
		ApiV1ListsDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/lists', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Fetch all lists that the user owns.
		 * Get api/v1/lists
		 * @return {Array<List>} Use id as a parameter for related API calls.
		 */
		ApiV1ListsGet(headersHandler?: () => HttpHeaders): Observable<Array<List>> {
			return this.http.get<Array<List>>(this.baseUri + 'api/v1/lists', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new list.
		 * Post api/v1/lists
		 * @return {List} A list was created successfully
		 */
		ApiV1ListsPost(requestBody: ApiV1ListsPostPostBody, headersHandler?: () => HttpHeaders): Observable<List> {
			return this.http.post<List>(this.baseUri + 'api/v1/lists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Change the title of a list, or which replies to show.
		 * Put api/v1/lists
		 * @return {List} A list was updated successfully
		 */
		ApiV1ListsPut(requestBody: ApiV1ListsPutPutBody, headersHandler?: () => HttpHeaders): Observable<List> {
			return this.http.put<List>(this.baseUri + 'api/v1/lists', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Remove converstation
		 * Get api/v1/lists/{id}
		 * @return {List} The value of unread has been changed to false..
		 */
		ApiV1Lists_idGet(headersHandler?: () => HttpHeaders): Observable<List> {
			return this.http.get<List>(this.baseUri + 'api/v1/lists/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove accounts from the given list.
		 * Delete api/v1/lists/{id}/accounts
		 * @param {Array<string>} account_ids Array of account IDs to add to the list.
		 * @return {string} Account was successfully removed from the list, or it was already not in the list.
		 */
		ApiV1Lists_idAccountsDeleteByAccount_ids(account_ids: Array<string>, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/lists/{id}/accounts?' + account_ids.map(z => `account_ids=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View accounts in List
		 * Get api/v1/lists/{id}/accounts
		 * @param {number} limit Maximum number of results. Defaults to 40. Max 40. Set to 0 in order to get all accounts without pagination. Pagination is done with the HTTP Link header.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @return {Array<Account>} Success
		 */
		ApiV1Lists_idAccountsGetByLimitAndMax_idAndSince_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/lists/{id}/accounts?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add accounts to the given list. Note that the user must be following these accounts.
		 * Post api/v1/lists/{id}/accounts
		 * @return {string} Success
		 */
		ApiV1Lists_idAccountsPost(requestBody: ApiV1Lists_idAccountsPostPostBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/v1/lists/{id}/accounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Get saved timeline position
		 * Get api/v1/markers
		 * @param {Array<string>} timeline Array of markers to fetch. String enum anyOf home, notifications. If not provided, an empty object will be returned.
		 * @return {string} Account was successfully removed from the list, or it was already not in the list.
		 */
		ApiV1MarkersGetByTimeline(timeline: Array<string>, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/v1/markers?' + timeline.map(z => `timeline=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get saved timeline position
		 * Post api/v1/markers
		 * @return {string} Account was successfully removed from the list, or it was already not in the list.
		 */
		ApiV1MarkersPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/v1/markers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Get an attachement.
		 * Get api/v1/media/{id}
		 * @return {Attachment} Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.
		 */
		ApiV1Media_idGet(headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.get<Attachment>(this.baseUri + 'api/v1/media/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accounts the user has muted.
		 * Get api/v1/mutes
		 * @return {Array<Account>} success
		 */
		ApiV1MutesGetByLimitAndMax_idAndSince_id(limit: string | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'api/v1/mutes?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.
		 * Get api/v1/notifications
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @param {Array<string>} exclude_types Array of types to exclude (follow, favourite, reblog, mention, poll, follow_request)
		 * @param {string} account_id Return only notifications received from this account
		 * @return {Array<Notification>} Success
		 */
		ApiV1NotificationsGetByLimitAndMax_idAndSince_idAndMin_idAndExclude_typesAndAccount_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, exclude_types: Array<string> | null | undefined, account_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Notification>> {
			return this.http.get<Array<Notification>>(this.baseUri + 'api/v1/notifications?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)) + '&' + exclude_types?.map(z => `exclude_types=${encodeURIComponent(z)}`).join('&') + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Clear all notifications from the server.
		 * Post api/v1/notifications/clear
		 * @return {string} Success
		 */
		ApiV1NotificationsClearPost(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/v1/notifications/clear', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View information about a notification with a given ID.
		 * Get api/v1/notifications/{id}
		 * @return {Notification} Success
		 */
		ApiV1Notifications_idGet(headersHandler?: () => HttpHeaders): Observable<Notification> {
			return this.http.get<Notification>(this.baseUri + 'api/v1/notifications/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Clear a single notification from the server.
		 * Post api/v1/notifications/{id}/dismiss
		 * @return {Notification} Notification with given ID successfully dismissed
		 */
		ApiV1Notifications_idDismissPost(headersHandler?: () => HttpHeaders): Observable<Notification> {
			return this.http.post<Notification>(this.baseUri + 'api/v1/notifications/{id}/dismiss', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View a poll.
		 * Get api/v1/polls/{id}
		 * @return {Poll} Get one poll.
		 */
		ApiV1Polls_idGet(headersHandler?: () => HttpHeaders): Observable<Poll> {
			return this.http.get<Poll>(this.baseUri + 'api/v1/polls/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Vote on a poll.
		 * Post api/v1/polls/{id}
		 * @return {Poll} Get one poll.
		 */
		ApiV1Polls_idPost(requestBody: ApiV1Polls_idPostPostBody, headersHandler?: () => HttpHeaders): Observable<Poll> {
			return this.http.post<Poll>(this.baseUri + 'api/v1/polls/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Shows your 10 most-used tags, with usage history for the past week.
		 * Get api/v1/preferences
		 * @return {Preferences} Success.
		 */
		ApiV1PreferencesGet(headersHandler?: () => HttpHeaders): Observable<Preferences> {
			return this.http.get<Preferences>(this.baseUri + 'api/v1/preferences', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
		 * Delete api/v1/push/subscription
		 * @return {string} Updating a PushSubscription to only receive mention alerts
		 */
		ApiV1PushSubscriptionDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/push/subscription', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View the PushSubscription currently associated with this access token.
		 * Get api/v1/push/subscription
		 * @return {PushSubscription} Get one PushSubscription
		 */
		ApiV1PushSubscriptionGet(headersHandler?: () => HttpHeaders): Observable<PushSubscription> {
			return this.http.get<PushSubscription>(this.baseUri + 'api/v1/push/subscription', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.
		 * Post api/v1/push/subscription
		 * @return {PushSubscription} PushSubscription created
		 */
		ApiV1PushSubscriptionPost(requestBody: ApiV1PushSubscriptionPostPostBody, headersHandler?: () => HttpHeaders): Observable<PushSubscription> {
			return this.http.post<PushSubscription>(this.baseUri + 'api/v1/push/subscription', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
		 * Put api/v1/push/subscription
		 * @return {PushSubscription} Updating a PushSubscription to only receive mention alerts
		 */
		ApiV1PushSubscriptionPut(requestBody: ApiV1PushSubscriptionPutPutBody, headersHandler?: () => HttpHeaders): Observable<PushSubscription> {
			return this.http.put<PushSubscription>(this.baseUri + 'api/v1/push/subscription', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * File a report.
		 * Post api/v1/reports
		 * @return {Report} Successfully reported.
		 */
		ApiV1ReportsPost(requestBody: ApiV1ReportsPostPostBody, headersHandler?: () => HttpHeaders): Observable<Report> {
			return this.http.post<Report>(this.baseUri + 'api/v1/reports', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * View scheduled statuses
		 * Get api/v1/scheduled_statuses
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<ScheduledStatus>} Get scheduled statuses.
		 */
		ApiV1Scheduled_statusesGetByLimitAndMax_idAndSince_idAndMin_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ScheduledStatus>> {
			return this.http.get<Array<ScheduledStatus>>(this.baseUri + 'api/v1/scheduled_statuses?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancel a scheduled status
		 * Delete api/v1/scheduled_statuses/{id}
		 * @return {string} Success.
		 */
		ApiV1Scheduled_statuses_idDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/scheduled_statuses/{id}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View a single scheduled status
		 * Get api/v1/scheduled_statuses/{id}
		 * @return {ScheduledStatus} Success.
		 */
		ApiV1Scheduled_statuses_idGet(headersHandler?: () => HttpHeaders): Observable<ScheduledStatus> {
			return this.http.get<ScheduledStatus>(this.baseUri + 'api/v1/scheduled_statuses/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View a single scheduled status
		 * Put api/v1/scheduled_statuses/{id}
		 * @return {ScheduledStatus} Success.
		 */
		ApiV1Scheduled_statuses_idPut(requestBody: ApiV1Scheduled_statuses_idPutPutBody, headersHandler?: () => HttpHeaders): Observable<ScheduledStatus> {
			return this.http.put<ScheduledStatus>(this.baseUri + 'api/v1/scheduled_statuses/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/statuses
		 * @return {Status} Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.
		 */
		ApiV1StatusesPost(requestBody: Array<ApiV1StatusesPostPostBody>, headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/v1/statuses/{id}
		 * @return {Status} Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.
		 */
		ApiV1Statuses_idDelete(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.delete<Status>(this.baseUri + 'api/v1/statuses/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/statuses/{id}
		 * @return {Status} Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.
		 */
		ApiV1Statuses_idGet(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.get<Status>(this.baseUri + 'api/v1/statuses/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Privately bookmark a status.
		 * Post api/v1/statuses/{id}/bookmark
		 * @return {Status} Status bookmarked
		 */
		ApiV1Statuses_idBookmarkPost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/bookmark', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/statuses/{id}/context
		 * @return {Context} Success
		 */
		ApiV1Statuses_idContextGet(headersHandler?: () => HttpHeaders): Observable<Context> {
			return this.http.get<Context>(this.baseUri + 'api/v1/statuses/{id}/context', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a status to your favourites list.
		 * Post api/v1/statuses/{id}/favourite
		 * @return {Status} Success
		 */
		ApiV1Statuses_idFavouritePost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/favourite', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View who favourited a given status.
		 * Get api/v1/statuses/{id}/favourited_by
		 * @return {Account} Success
		 */
		ApiV1Statuses_idFavourited_byGet(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v1/statuses/{id}/favourited_by', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
		 * Post api/v1/statuses/{id}/mute
		 * @return {Status} Status's conversation muted, or was already muted
		 */
		ApiV1Statuses_idMutePost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/mute', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Feature one of your own public statuses at the top of your profile.
		 * Post api/v1/statuses/{id}/pin
		 * @return {Status} Status pinned. Note the status is not a reblog and its authoring account is your own.
		 */
		ApiV1Statuses_idPinPost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/pin', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reshare a status.
		 * Post api/v1/statuses/{id}/reblog
		 * @return {Status} Status has been reblogged. Note that the top-level id has changed. The id of the boosted status is now inside the reblog property. The top-level id is the id of the reblog itself. Also note that reblogs cannot be pinned.
		 */
		ApiV1Statuses_idReblogPost(requestBody: ApiV1Statuses_idReblogPostPostBody, headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/reblog', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * View who boosted a given status.
		 * Get api/v1/statuses/{id}/reblogged_by
		 * @return {Account} Success
		 */
		ApiV1Statuses_idReblogged_byGet(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v1/statuses/{id}/reblogged_by', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a status from your private bookmarks.
		 * Post api/v1/statuses/{id}/unbookmark
		 * @return {Status} Status unbookmarked
		 */
		ApiV1Statuses_idUnbookmarkPost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/unbookmark', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a status from your favourites list.
		 * Post api/v1/statuses/{id}/unfavourite
		 * @return {Status} Success
		 */
		ApiV1Statuses_idUnfavouritePost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/unfavourite', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Status's conversation unmuted, or was already unmuted
		 * Post api/v1/statuses/{id}/unmute
		 * @return {Status} Status's conversation muted, or was already muted
		 */
		ApiV1Statuses_idUnmutePost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/unmute', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unfeature a status from the top of your profile.
		 * Post api/v1/statuses/{id}/unpin
		 * @return {Status} Status unpinned, or was already not pinned
		 */
		ApiV1Statuses_idUnpinPost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/unpin', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Undo a reshare of a status.
		 * Post api/v1/statuses/{id}/unreblog
		 * @return {Status} Status no longer reblogged
		 */
		ApiV1Statuses_idUnreblogPost(headersHandler?: () => HttpHeaders): Observable<Status> {
			return this.http.post<Status>(this.baseUri + 'api/v1/statuses/{id}/unreblog', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accounts the user has had past positive interactions with, but is not yet following.
		 * Get api/v1/suggestions
		 * @param {number} limit Maximum number of results to return. Defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Account} Success.
		 */
		ApiV1SuggestionsGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'api/v1/suggestions?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete user suggestion
		 * Delete api/v1/suggestions/{id}
		 * @return {string} Successfully removed
		 */
		ApiV1Suggestions_idDelete(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'api/v1/suggestions/{id}', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * View statuses from followed users.
		 * Get api/v1/timelines/home
		 * @param {boolean} local Show only local statuses? Defaults to false.
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<Status>} Get statuses for home.
		 */
		ApiV1TimelinesHomeGetByLocalAndLimitAndMax_idAndSince_idAndMin_id(local: boolean | null | undefined, limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/timelines/home?local=' + local + '&limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View statuses in the given list timeline.
		 * Get api/v1/timelines/list/{list_id}
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<Status>} Statuses in this list will be returned..
		 */
		ApiV1TimelinesList_list_idGetByLimitAndMax_idAndSince_idAndMin_id(limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/timelines/list/{list_id}?limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Public timeline
		 * Get api/v1/timelines/public
		 * @param {boolean} local Show only local statuses? Defaults to false.
		 * @param {boolean} remote Show only local statuses? Defaults to false.
		 * @param {boolean} only_media Show only statuses with media attached? Defaults to false..
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<Status>} get statuses.
		 */
		ApiV1TimelinesPublicGetByLocalAndRemoteAndOnly_mediaAndLimitAndMax_idAndSince_idAndMin_id(local: boolean | null | undefined, remote: boolean | null | undefined, only_media: boolean | null | undefined, limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/timelines/public?local=' + local + '&remote=' + remote + '&only_media=' + only_media + '&limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * View public statuses containing the given hashtag.
		 * Get api/v1/timelines/tag/{hashtag}
		 * @param {boolean} local Show only local statuses? Defaults to false.
		 * @param {boolean} remote Show only local statuses? Defaults to false.
		 * @param {boolean} only_media Show only statuses with media attached? Defaults to false..
		 * @param {number} limit Max number of results to return. Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} max_id Return results older than ID
		 * @param {string} since_id Return results newer than ID
		 * @param {string} min_id Return results immediately newer than ID
		 * @return {Array<Status>} Get statuses.
		 */
		ApiV1TimelinesTag_hashtagGetByLocalAndRemoteAndOnly_mediaAndLimitAndMax_idAndSince_idAndMin_id(local: boolean | null | undefined, remote: boolean | null | undefined, only_media: boolean | null | undefined, limit: number | null | undefined, max_id: string | null | undefined, since_id: string | null | undefined, min_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Status>> {
			return this.http.get<Array<Status>>(this.baseUri + 'api/v1/timelines/tag/{hashtag}?local=' + local + '&remote=' + remote + '&only_media=' + only_media + '&limit=' + limit + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&since_id=' + (since_id == null ? '' : encodeURIComponent(since_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Tags that are being used more frequently within the past week.
		 * Get api/v1/trends
		 * @param {number} limit Max number of results to return. Defaults to 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Tag>} Domains that this instance is aware of.
		 */
		ApiV1TrendsGetByLimit(limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'api/v1/trends?limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search results
		 * Get api/v2/search
		 * @param {string} q What to search for
		 * @param {number} limit Maximum number of results. Defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} resolve Attempt WebFinger lookup.
		 * @param {boolean} following Only who the user is following. Defaults to false.
		 * @param {string} account_id If provided, statuses returned will be authored only by this account
		 * @param {string} max_id Return results older than this id
		 * @param {string} min_id Return results immediately newer than this id
		 * @param {ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetType} type Enum(accounts, hashtags, statuses)
		 * @param {boolean} exclude_unreviewed Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags.
		 * @param {number} offset Offset in search results. Used for pagination. Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturn} Result
		 */
		ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffset(q: string, limit: number | null | undefined, resolve: string | null | undefined, following: boolean | null | undefined, account_id: string | null | undefined, max_id: string | null | undefined, min_id: string | null | undefined, type: ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetType | null | undefined, exclude_unreviewed: boolean | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturn> {
			return this.http.get<ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturn>(this.baseUri + 'api/v2/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&limit=' + limit + '&resolve=' + (resolve == null ? '' : encodeURIComponent(resolve)) + '&following=' + following + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)) + '&max_id=' + (max_id == null ? '' : encodeURIComponent(max_id)) + '&min_id=' + (min_id == null ? '' : encodeURIComponent(min_id)) + '&type=' + type + '&exclude_unreviewed=' + exclude_unreviewed + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
		 * Get oauth/authorize
		 * @param {string} response_type Should be set equal to code.
		 * @param {string} client_id Client ID, obtained during app registration.
		 * @param {string} redirect_uri Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration.
		 * @param {string} scope List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read.
		 * @param {boolean} force_login Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance.
		 * @return {void} The authorization code will be returned as a query parameter named code.
		 */
		OauthAuthorizeGetByResponse_typeAndClient_idAndRedirect_uriAndScopeAndForce_login(response_type: string, client_id: string, redirect_uri: string, scope: string | null | undefined, force_login: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/authorize?response_type=' + (response_type == null ? '' : encodeURIComponent(response_type)) + '&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&force_login=' + force_login, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export interface ApiV1AdminAccounts_idActionPostPostBody {

		/** ID of an associated report that caused this action to be taken */
		report_id?: string | null;

		/** Whether an email should be sent to the user with the above information. */
		send_email_notification?: boolean | null;

		/** Additional text for clarification of why this action was taken */
		text?: string | null;

		/** Type of action to be taken. Enumerable oneOf: none disable silence suspend */
		type?: ApiV1AdminAccounts_idActionPostPostBodyType | null;

		/** ID of a preset warning */
		warning_preset_id?: string | null;
	}
	export interface ApiV1AdminAccounts_idActionPostPostBodyFormProperties {

		/** ID of an associated report that caused this action to be taken */
		report_id: FormControl<string | null | undefined>,

		/** Whether an email should be sent to the user with the above information. */
		send_email_notification: FormControl<boolean | null | undefined>,

		/** Additional text for clarification of why this action was taken */
		text: FormControl<string | null | undefined>,

		/** Type of action to be taken. Enumerable oneOf: none disable silence suspend */
		type: FormControl<ApiV1AdminAccounts_idActionPostPostBodyType | null | undefined>,

		/** ID of a preset warning */
		warning_preset_id: FormControl<string | null | undefined>,
	}
	export function CreateApiV1AdminAccounts_idActionPostPostBodyFormGroup() {
		return new FormGroup<ApiV1AdminAccounts_idActionPostPostBodyFormProperties>({
			report_id: new FormControl<string | null | undefined>(undefined),
			send_email_notification: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ApiV1AdminAccounts_idActionPostPostBodyType | null | undefined>(undefined),
			warning_preset_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiV1AdminAccounts_idActionPostPostBodyType { none = 'none', disable = 'disable', silence = 'silence', suspend = 'suspend' }

	export enum ApiV1DirectoryGetByLimitAndOffsetAndOrderAndLocalOrder { active = 'active', new = 'new' }

	export interface ApiV1Featured_tagsPostPostBody {
		name?: string | null;
	}
	export interface ApiV1Featured_tagsPostPostBodyFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiV1Featured_tagsPostPostBodyFormGroup() {
		return new FormGroup<ApiV1Featured_tagsPostPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiV1ListsPostPostBody {

		/** Enumerable oneOf followed list none. Defaults to list. */
		replies_policy?: ListReplies_policy | null;

		/**
		 * The title of the list to be created.
		 * Required
		 */
		title: string;
	}
	export interface ApiV1ListsPostPostBodyFormProperties {

		/** Enumerable oneOf followed list none. Defaults to list. */
		replies_policy: FormControl<ListReplies_policy | null | undefined>,

		/**
		 * The title of the list to be created.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApiV1ListsPostPostBodyFormGroup() {
		return new FormGroup<ApiV1ListsPostPostBodyFormProperties>({
			replies_policy: new FormControl<ListReplies_policy | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiV1ListsPutPutBody {

		/** Enumerable oneOf followed list none. Defaults to list. */
		replies_policy?: ListReplies_policy | null;

		/** The title of the list to be created. */
		title?: string | null;
	}
	export interface ApiV1ListsPutPutBodyFormProperties {

		/** Enumerable oneOf followed list none. Defaults to list. */
		replies_policy: FormControl<ListReplies_policy | null | undefined>,

		/** The title of the list to be created. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApiV1ListsPutPutBodyFormGroup() {
		return new FormGroup<ApiV1ListsPutPutBodyFormProperties>({
			replies_policy: new FormControl<ListReplies_policy | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiV1Lists_idAccountsPostPostBody {

		/**
		 * Array of account IDs to add to the list.
		 * Required
		 */
		account_ids: Array<string>;
	}
	export interface ApiV1Lists_idAccountsPostPostBodyFormProperties {
	}
	export function CreateApiV1Lists_idAccountsPostPostBodyFormGroup() {
		return new FormGroup<ApiV1Lists_idAccountsPostPostBodyFormProperties>({
		});

	}

	export interface ApiV1Polls_idPostPostBody {

		/** Required */
		choices: Array<string>;
	}
	export interface ApiV1Polls_idPostPostBodyFormProperties {
	}
	export function CreateApiV1Polls_idPostPostBodyFormGroup() {
		return new FormGroup<ApiV1Polls_idPostPostBodyFormProperties>({
		});

	}

	export interface ApiV1PushSubscriptionPostPostBody {

		/** Required */
		data: string;

		/** Required */
		subscription: string;
	}
	export interface ApiV1PushSubscriptionPostPostBodyFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateApiV1PushSubscriptionPostPostBodyFormGroup() {
		return new FormGroup<ApiV1PushSubscriptionPostPostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiV1PushSubscriptionPutPutBody {

		/** Required */
		data: string;
	}
	export interface ApiV1PushSubscriptionPutPutBodyFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateApiV1PushSubscriptionPutPutBodyFormGroup() {
		return new FormGroup<ApiV1PushSubscriptionPutPutBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiV1ReportsPostPostBody {

		/**
		 * ID of the account to report
		 * Required
		 */
		account_id: string;

		/** Reason for the report (default max 1000 characters) */
		comment?: string | null;

		/** If the account is remote, should the report be forwarded to the remote admin? */
		forward?: boolean | null;

		/** Array of Statuses to attach to the report, for context */
		status_ids?: Array<string>;
	}
	export interface ApiV1ReportsPostPostBodyFormProperties {

		/**
		 * ID of the account to report
		 * Required
		 */
		account_id: FormControl<string | null | undefined>,

		/** Reason for the report (default max 1000 characters) */
		comment: FormControl<string | null | undefined>,

		/** If the account is remote, should the report be forwarded to the remote admin? */
		forward: FormControl<boolean | null | undefined>,
	}
	export function CreateApiV1ReportsPostPostBodyFormGroup() {
		return new FormGroup<ApiV1ReportsPostPostBodyFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined),
			forward: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApiV1Scheduled_statuses_idPutPutBody {

		/** ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future. */
		scheduled_at?: Date | null;
	}
	export interface ApiV1Scheduled_statuses_idPutPutBodyFormProperties {

		/** ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future. */
		scheduled_at: FormControl<Date | null | undefined>,
	}
	export function CreateApiV1Scheduled_statuses_idPutPutBodyFormGroup() {
		return new FormGroup<ApiV1Scheduled_statuses_idPutPutBodyFormProperties>({
			scheduled_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ApiV1StatusesPostPostBody {

		/** ID of the status being replied to, if status is a reply */
		in_reply_to_id?: string | null;

		/** ISO 639 language code for this status. */
		language?: string | null;

		/** Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used. */
		media_ids?: Array<string>;
		poll?: Array<string>;

		/** ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future. */
		scheduled_at?: string | null;

		/** Mark status and attached media as sensitive? */
		sensitive?: boolean | null;

		/** Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field. */
		spoiler_text?: string | null;

		/** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */
		status?: string | null;

		/** Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct. */
		visibility?: SourcePrivacy | null;
	}
	export interface ApiV1StatusesPostPostBodyFormProperties {

		/** ID of the status being replied to, if status is a reply */
		in_reply_to_id: FormControl<string | null | undefined>,

		/** ISO 639 language code for this status. */
		language: FormControl<string | null | undefined>,

		/** ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future. */
		scheduled_at: FormControl<string | null | undefined>,

		/** Mark status and attached media as sensitive? */
		sensitive: FormControl<boolean | null | undefined>,

		/** Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field. */
		spoiler_text: FormControl<string | null | undefined>,

		/** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */
		status: FormControl<string | null | undefined>,

		/** Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct. */
		visibility: FormControl<SourcePrivacy | null | undefined>,
	}
	export function CreateApiV1StatusesPostPostBodyFormGroup() {
		return new FormGroup<ApiV1StatusesPostPostBodyFormProperties>({
			in_reply_to_id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			scheduled_at: new FormControl<string | null | undefined>(undefined),
			sensitive: new FormControl<boolean | null | undefined>(undefined),
			spoiler_text: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<SourcePrivacy | null | undefined>(undefined),
		});

	}

	export interface ApiV1Statuses_idReblogPostPostBody {

		/** any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI. */
		visibility?: string | null;
	}
	export interface ApiV1Statuses_idReblogPostPostBodyFormProperties {

		/** any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI. */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateApiV1Statuses_idReblogPostPostBodyFormGroup() {
		return new FormGroup<ApiV1Statuses_idReblogPostPostBodyFormProperties>({
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetType { accounts = 'accounts', hashtags = 'hashtags', statuses = 'statuses' }

	export interface ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturn {
		accounts?: Array<Account>;
		hashtags?: Array<Status>;
		statuses?: Array<Tag>;
	}
	export interface ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturnFormProperties {
	}
	export function CreateApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturnFormGroup() {
		return new FormGroup<ApiV2SearchGetByQAndLimitAndResolveAndFollowingAndAccount_idAndMax_idAndMin_idAndTypeAndExclude_unreviewedAndOffsetReturnFormProperties>({
		});

	}

}

