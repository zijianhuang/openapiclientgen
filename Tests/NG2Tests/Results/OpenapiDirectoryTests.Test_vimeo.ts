import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Activity_3_1 {

		/** The category that this event occurred for. This will be preset for only "category" activity types. */
		category?: Category | null;

		/** The channel that this event occurred for. This will be present for only "channel" activity types. */
		channel?: Channel | null;

		/**
		 * Video associated with ths activity.
		 * Required
		 */
		clip: Video;

		/** The group that this event occurred for. This will be present for only "group" activity types. */
		group?: Group | null;

		/**
		 * The activity's metadata.
		 * Required
		 */
		metadata: Activity_3_1Metadata;

		/** The tag that this event occurred for. This will be present for only "tag" activity types. */
		tag?: Tag | null;

		/**
		 * Time that the event occurred.
		 * Required
		 */
		time: string;

		/**
		 * Activity type
		 * Required
		 */
		type: Activity_3_1Type;

		/** The user that this event occurred for. This will be present for "like", "appearance", and "share" activity types. */
		user?: User | null;
	}

	export interface Category {

		/** The active icon for the category. */
		icon?: Picture | null;

		/**
		 * The last time, in ISO 8601 format, that a video was featured.
		 * Required
		 */
		last_video_featured_time: string;

		/**
		 * The URL to access the category in a browser.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the category.
		 * Required
		 */
		metadata: CategoryMetadata;

		/**
		 * The display name that identifies the category.
		 * Required
		 */
		name: string;

		/**
		 * The container of this category's parent category, if the current category is a subcategory.
		 * Required
		 */
		parent: CategoryParent;

		/**
		 * The active picture for this category; defaults to vertical color bars.
		 * Required
		 */
		pictures: Picture;

		/**
		 * The resource key of the category.
		 * Required
		 */
		resource_key: string;

		/** All the subcategories that belong to this category, if the current category is a top-level parent. */
		CategorySubcategories?: Array<CategorySubcategories> | null;

		/**
		 * Whether the category isn't a subcategory of another category.
		 * Required
		 */
		top_level: boolean;

		/**
		 * The unique identifier to access the category resource.
		 * Required
		 */
		uri: string;
	}

	export interface Picture {

		/**
		 * Whether this picture is the active picture for its parent resource.
		 * Required
		 */
		active: boolean;

		/** The upload URL for the picture. This field appears when you create the picture resource for the first time. */
		link?: string | null;

		/**
		 * The picture's resource key string.
		 * Required
		 */
		resource_key: string;

		/**
		 * An array containing reference information about all available image files.
		 * Required
		 */
		PictureSizes: Array<PictureSizes>;

		/**
		 * The type of the picture:
		 * Option descriptions:
		 * * `caution` - An image that is appropriate for all ages.
		 * * `custom` - A custom image for the video.
		 * * `default` - The default image for the video.
		 * Required
		 */
		type: PictureType;

		/**
		 * The picture's URI.
		 * Required
		 */
		uri: string;
	}

	export interface PictureSizes {

		/**
		 * The height of the image.
		 * Required
		 */
		height: number;

		/**
		 * The direct link to the image.
		 * Required
		 */
		link: string;

		/** The direct link to the image with a play button overlay. */
		link_with_play_button?: string | null;

		/**
		 * The width of the image.
		 * Required
		 */
		width: number;
	}

	export enum PictureType { caution = 0, custom = 1, _default = 2 }

	export interface CategoryMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: CategoryMetadataConnections;

		/**
		 * The permissible actions related to the category.
		 * Required
		 */
		interactions: CategoryMetadataInteractions;
	}

	export interface CategoryMetadataConnections {

		/**
		 * Information about the channels related to this category.
		 * Required
		 */
		channels: CategoryMetadataConnectionsChannels;

		/**
		 * Information about the groups related to this category.
		 * Required
		 */
		groups: CategoryMetadataConnectionsGroups;

		/**
		 * Information about the users related to this category.
		 * Required
		 */
		users: CategoryMetadataConnectionsUsers;

		/**
		 * Information about the videos related to this category.
		 * Required
		 */
		videos: CategoryMetadataConnectionsVideos;
	}

	export interface CategoryMetadataConnectionsChannels {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of channels on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface CategoryMetadataConnectionsGroups {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of groups on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface CategoryMetadataConnectionsUsers {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface CategoryMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface CategoryMetadataInteractions {

		/**
		 * An action indicating if the authenticated user has followed this category.
		 * Required
		 */
		follow: CategoryMetadataInteractionsFollow;
	}

	export interface CategoryMetadataInteractionsFollow {

		/**
		 * Whether the authenticated user has followed this category.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.
		 * Required
		 */
		added_time: string;

		/**
		 * The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.
		 * Required
		 */
		uri: string;
	}

	export interface CategoryParent {

		/**
		 * The URL to access the parent category in a browser.
		 * Required
		 */
		link: string;

		/**
		 * The display name that identifies the parent category.
		 * Required
		 */
		name: string;

		/**
		 * The unique identifier to access the parent of this category resource.
		 * Required
		 */
		uri: string;
	}

	export interface CategorySubcategories {

		/**
		 * The URL to access the subcategory in a browser.
		 * Required
		 */
		link: string;

		/**
		 * The display name that identifies the subcategory.
		 * Required
		 */
		name: string;

		/**
		 * The unique identifier to access the subcategory resource.
		 * Required
		 */
		uri: string;
	}

	export interface Channel {

		/**
		 * The categories to which this channel belongs as specified by the channel moderators.
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * The time in ISO 8601 format when the channel was created.
		 * Required
		 */
		created_time: string;

		/**
		 * A brief explanation of the channel's content.
		 * Required
		 */
		description: string;

		/**
		 * The banner that appears by default at the top of the channel page.
		 * Required
		 */
		header: Picture;

		/**
		 * The URL to access the channel in a browser.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the channel.
		 * Required
		 */
		metadata: ChannelMetadata;

		/**
		 * The time in ISO 8601 format when the album was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The display name that identifies the channel.
		 * Required
		 */
		name: string;

		/**
		 * The active image for the channel; defaults to the thumbnail of the last video added to the channel.
		 * Required
		 */
		pictures: Picture;

		/**
		 * The privacy settings of the channel.
		 * Required
		 */
		privacy: ChannelPrivacy;

		/**
		 * The channel resource key.
		 * Required
		 */
		resource_key: string;

		/**
		 * An array of all tags assigned to this channel.
		 * Required
		 */
		tags: Array<Tag>;

		/**
		 * The unique identifier to access the channel resource.
		 * Required
		 */
		uri: string;

		/**
		 * The Vimeo user who owns the channel.
		 * Required
		 */
		user: User;
	}

	export interface ChannelMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: ChannelMetadataConnections;

		/**
		 * A list of resource URIs related to the channel.
		 * Required
		 */
		interactions: ChannelMetadataInteractions;
	}

	export interface ChannelMetadataConnections {

		/**
		 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		privacy_users: ChannelMetadataConnectionsPrivacy_users;

		/**
		 * Information about the users following or moderating this channel.
		 * Required
		 */
		users: ChannelMetadataConnectionsUsers;

		/**
		 * Information about the videos that belong to this channel.
		 * Required
		 */
		videos: ChannelMetadataConnectionsVideos;
	}

	export interface ChannelMetadataConnectionsPrivacy_users {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelMetadataConnectionsUsers {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelMetadataInteractions {

		/**
		 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		add_moderators: ChannelMetadataInteractionsAdd_moderators;

		/**
		 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		add_to: ChannelMetadataInteractionsAdd_to;

		/**
		 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		follow: ChannelMetadataInteractionsFollow;

		/**
		 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		moderate_videos: ChannelMetadataInteractionsModerate_videos;
	}

	export interface ChannelMetadataInteractionsAdd_moderators {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelMetadataInteractionsAdd_to {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelMetadataInteractionsFollow {

		/**
		 * Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added_time: string;

		/**
		 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
		 * Option descriptions:
		 * * `moderator` - The authenticated user is a moderator.
		 * * `subscriber` - The authenticated user is a subscriber.
		 * Required
		 */
		type: ChannelMetadataInteractionsFollowType;

		/**
		 * The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export enum ChannelMetadataInteractionsFollowType { moderator = 0, subscriber = 1 }

	export interface ChannelMetadataInteractionsModerate_videos {

		/**
		 * An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface ChannelPrivacy {

		/**
		 * Who can view the channel:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the channel.
		 * * `moderators` - Only moderators can view the channel.
		 * * `users` - Only registered users can view the channel.
		 * Required
		 */
		view: ChannelPrivacyView;
	}

	export enum ChannelPrivacyView { anybody = 0, moderators = 1, users = 2 }

	export interface Tag {

		/**
		 * The normalized canonical tag name.
		 * Required
		 */
		canonical: string;

		/**
		 * Metadata about the group.
		 * Required
		 */
		metadata: TagMetadata;

		/**
		 * The tag value.
		 * Required
		 */
		name: string;

		/**
		 * The tag's resource key string.
		 * Required
		 */
		resource_key: string;

		/**
		 * The canonical relative URI of the tag.
		 * Required
		 */
		uri: string;
	}

	export interface TagMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: TagMetadataConnections;
	}

	export interface TagMetadataConnections {

		/**
		 * Information about the videos related to this tag.
		 * Required
		 */
		videos: TagMetadataConnectionsVideos;
	}

	export interface TagMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface User {

		/**
		 * The user's account type:
		 * Option descriptions:
		 * * `basic` - The user has a Vimeo Basic subscription.
		 * * `business` - The user has a Vimeo Business subscription.
		 * * `live_business` - The user has a Vimeo Business Live subscription.
		 * * `live_premium` - The user has a Vimeo Premium subscription.
		 * * `live_pro` - The user has a Vimeo PRO Live subscription.
		 * * `plus` - The user has a Vimeo Plus subscription.
		 * * `pro` - The user has a Vimeo Pro subscription.
		 * * `pro_unlimited` - The user has a Vimeo PRO Unlimited subscription.
		 * * `producer` - The user has a Vimeo Producer subscription.
		 * Required
		 */
		account: UserAccount;

		/**
		 * The user's bio.
		 * Required
		 */
		bio: string;

		/**
		 * The user's content filters:
		 * Option descriptions:
		 * * `drugs` - Drugs or alcohol use.
		 * * `language` - Profanity or sexually suggestive content.
		 * * `nudity` - Nudity.
		 * * `safe` - Suitable for all audiences.
		 * * `unrated` - No rating.
		 * * `violence` - Violent or graphic content.
		 */
		content_filter?: Array<string> | null;

		/**
		 * The time in ISO 8601 format when the user account was created.
		 * Required
		 */
		created_time: string;

		/** The user's email address. This data requires a bearer token with the `email` scope. */
		email?: string | null;

		/**
		 * The absolute URL of this user's profile page.
		 * Required
		 */
		link: string;

		/**
		 * The user's location.
		 * Required
		 */
		location: string;

		/**
		 * The user's metadata.
		 * Required
		 */
		metadata: UserMetadata;

		/**
		 * The user's display name.
		 * Required
		 */
		name: string;

		/**
		 * The active portrait of this user.
		 * Required
		 */
		pictures: Picture;
		preferences?: UserPreferences | null;

		/**
		 * The user's resource key string.
		 * Required
		 */
		resource_key: string;

		/**
		 * Appears only when the user has upload access and is looking at their own user record.
		 * Required
		 */
		upload_quota: UserUpload_quota;

		/**
		 * The user's canonical relative URI.
		 * Required
		 */
		uri: string;

		/**
		 * The user's websites.
		 * Required
		 */
		UserWebsites: Array<UserWebsites>;
	}

	export enum UserAccount { basic = 0, business = 1, live_business = 2, live_premium = 3, live_pro = 4, plus = 5, pro = 6, pro_unlimited = 7, producer = 8 }

	export interface UserMetadata {

		/**
		 * The list of resource URIs related to the user.
		 * Required
		 */
		connections: UserMetadataConnections;
		interactions: UserMetadataInteractions;
	}

	export interface UserMetadataConnections {

		/**
		 * Information about the albums created by this user.
		 * Required
		 */
		albums: UserMetadataConnectionsAlbums;

		/**
		 * Information about the appearances of this user in other videos.
		 * Required
		 */
		appearances: UserMetadataConnectionsAppearances;

		/**
		 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		block: UserMetadataConnectionsBlock;

		/**
		 * Information about this user's followed categories.
		 * Required
		 */
		categories: UserMetadataConnectionsCategories;

		/**
		 * Information about this user's subscribed channels.
		 * Required
		 */
		channels: UserMetadataConnectionsChannels;

		/**
		 * Information about this user's feed.
		 * Required
		 */
		feed: UserMetadataConnectionsFeed;

		/**
		 * Information about this user's folders.
		 * Required
		 */
		folders: UserMetadataConnectionsFolders;

		/**
		 * Information about the user's followers.
		 * Required
		 */
		followers: UserMetadataConnectionsFollowers;

		/**
		 * Information about the users that the current user is following.
		 * Required
		 */
		following: UserMetadataConnectionsFollowing;

		/**
		 * Information about the groups created by this user.
		 * Required
		 */
		groups: UserMetadataConnectionsGroups;

		/**
		 * Information about the videos that this user has liked.
		 * Required
		 */
		likes: UserMetadataConnectionsLikes;

		/**
		 * Information about the channels that this user moderates.
		 * Required
		 */
		moderated_channels: UserMetadataConnectionsModerated_channels;

		/**
		 * Information about this user's portraits.
		 * Required
		 */
		pictures: UserMetadataConnectionsPictures;

		/**
		 * Information about this user's portfolios.
		 * Required
		 */
		portfolios: UserMetadataConnectionsPortfolios;

		/**
		 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		recommended_channels: UserMetadataConnectionsRecommended_channels;

		/**
		 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		recommended_users: UserMetadataConnectionsRecommended_users;

		/**
		 * Information about the videos that have been shared with this user.
		 * Required
		 */
		shared: UserMetadataConnectionsShared;

		/**
		 * Information about the videos uploaded by this user.
		 * Required
		 */
		videos: UserMetadataConnectionsVideos;

		/**
		 * Information about the videos that this user has watched.
		 * Required
		 */
		watched_videos: UserMetadataConnectionsWatched_videos;

		/**
		 * Information about the videos that this user wants to watch later.
		 * Required
		 */
		watchlater: UserMetadataConnectionsWatchlater;
	}

	export interface UserMetadataConnectionsAlbums {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of albums on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsAppearances {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of appearances on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsBlock {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsCategories {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of categories on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsChannels {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of channels on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsFeed {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsFolders {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of folders on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsFollowers {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of followers on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsFollowing {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsGroups {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of groups on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsLikes {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of likes on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsModerated_channels {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of channels on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsPictures {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of pictures on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsPortfolios {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of portfolios on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsRecommended_channels {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of channels on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsRecommended_users {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsShared {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsWatched_videos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataConnectionsWatchlater {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataInteractions {
		add_privacy_user?: UserMetadataInteractionsAdd_privacy_user | null;

		/**
		 * Information related to the block status of this user.
		 * Required
		 */
		block: UserMetadataInteractionsBlock;

		/**
		 * Information related to the followed status of this user.
		 * Required
		 */
		follow: UserMetadataInteractionsFollow;

		/**
		 * Information regarding where and how to report a user.
		 * Required
		 */
		report: UserMetadataInteractionsReport;
	}

	export interface UserMetadataInteractionsAdd_privacy_user {

		/** An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope. */
		options?: Array<string> | null;

		/** The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope. */
		uri?: string | null;
	}

	export interface UserMetadataInteractionsBlock {

		/**
		 * Whether a user is blocking the current user.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the block occurred, or the null value if no block exists.
		 * Required
		 */
		added_time: string;

		/**
		 * An array of the HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The URI to block or unblock the user.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataInteractionsFollow {

		/**
		 * Whether a user is following the current user.
		 * Required
		 */
		added: boolean;

		/**
		 * An array of the HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The URI to follow the user.
		 * Required
		 */
		uri: string;
	}

	export interface UserMetadataInteractionsReport {

		/**
		 * An array of the HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * List of valid reasons for reporting a video.
		 * Required
		 */
		reason: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface UserPreferences {
		videos?: UserPreferencesVideos | null;
	}

	export interface UserPreferencesVideos {
		privacy?: UserPreferencesVideosPrivacy | null;
	}

	export interface UserPreferencesVideosPrivacy {

		/** Whether other users can add the user's videos. */
		add?: boolean | null;

		/**
		 * The user's privacy preference for comments:
		 * Option descriptions:
		 * * `anybody` - Anyone can comment on the user's videos.
		 * * `contacts` - Only contacts can comment on the user's videos.
		 * * `nobody` - No one can comment on the user's videos.
		 */
		comments?: UserPreferencesVideosPrivacyComments | null;

		/** Whether other users can download the user's videos. */
		download?: boolean | null;

		/**
		 * The user's privacy preference for embeds:
		 * Option descriptions:
		 * * `private` - Only the user can embed their own videos.
		 * * `public` - Anyone can embed the user's videos.
		 * * `whitelist` - Only those on the whitelist can embed the user's videos.
		 */
		embed?: UserPreferencesVideosPrivacyEmbed | null;

		/**
		 * The user's privacy preference for views:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the user's videos.
		 * * `contacts` - Only contacts can view the user's videos.
		 * * `disable` - Views are disabled for the user's videos.
		 * * `nobody` - No one except the user can view the user's videos.
		 * * `password` - Only those with the password can view the user's videos.
		 * * `unlisted` - Anybody can view the user's videos if they have a link.
		 * * `users` - Only other Vimeo members can view the user's videos.
		 */
		view?: UserPreferencesVideosPrivacyView | null;
	}

	export enum UserPreferencesVideosPrivacyComments { anybody = 0, contacts = 1, nobody = 2 }

	export enum UserPreferencesVideosPrivacyEmbed { _private = 0, _public = 1, whitelist = 2 }

	export enum UserPreferencesVideosPrivacyView { anybody = 0, contacts = 1, disable = 2, nobody = 3, password = 4, unlisted = 5, users = 6 }

	export interface UserUpload_quota {

		/**
		 * Information about the user's lifetime upload usage.
		 * Required
		 */
		lifetime: UserUpload_quotaLifetime;

		/**
		 * Information about the user's usage for the current period.
		 * Required
		 */
		periodic: UserUpload_quotaPeriodic;

		/**
		 * Information about the user's upload space remaining for the current period.
		 * Required
		 */
		space: UserUpload_quotaSpace;
	}

	export interface UserUpload_quotaLifetime {

		/**
		 * The number of bytes remaining in your lifetime maximum.
		 * Required
		 */
		free: number;

		/**
		 * The total number of bytes that you can upload across the lifetime of your account.
		 * Required
		 */
		max: number;

		/**
		 * The number of bytes that you've already uploaded against your lifetime limit.
		 * Required
		 */
		used: number;
	}

	export interface UserUpload_quotaPeriodic {

		/**
		 * The number of bytes remaining in your upload quota for the current period.
		 * Required
		 */
		free: number;

		/**
		 * The total number of bytes that you can upload per period.
		 * Required
		 */
		max: number;

		/**
		 * The time in ISO 8601 format when your upload quota resets.
		 * Required
		 */
		reset_date: string;

		/**
		 * The number of bytes that you've already uploaded against your quota in the current period.
		 * Required
		 */
		used: number;
	}

	export interface UserUpload_quotaSpace {

		/**
		 * The number of bytes remaining in your upload quota.
		 * Required
		 */
		free: number;

		/**
		 * The maximum number of bytes allotted to your upload quota.
		 * Required
		 */
		max: number;

		/**
		 * Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
		 * Required
		 */
		showing: UserUpload_quotaSpaceShowing;

		/**
		 * The number of bytes that you've already uploaded against your quota.
		 * Required
		 */
		used: number;
	}

	export enum UserUpload_quotaSpaceShowing { lifetime = 0, periodic = 1 }

	export interface UserWebsites {

		/**
		 * The website's description.
		 * Required
		 */
		description: string;

		/**
		 * The URL of the website.
		 * Required
		 */
		link: string;

		/**
		 * The name of the website.
		 * Required
		 */
		name: string;
	}

	export interface Video {

		/**
		 * The categories to which this video belongs.
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * The content ratings of this video.
		 * Required
		 */
		content_rating: Array<string>;

		/**
		 * The context of the video's subscription, if this video is part of a subscription.
		 * Required
		 */
		context: VideoContext;

		/**
		 * The time in ISO 8601 format when the video was created.
		 * Required
		 */
		created_time: string;

		/**
		 * A brief explanation of the video's content.
		 * Required
		 */
		description: string;

		/**
		 * The video's duration in seconds.
		 * Required
		 */
		duration: number;

		/**
		 * Information about embedding this video.
		 * Required
		 */
		embed: Embed_settings;

		/**
		 * The video's height in pixels.
		 * Required
		 */
		height: number;

		/**
		 * The video's primary language.
		 * Required
		 */
		language: string;

		/** The time in ISO 8601 format when the user last modified the video. */
		last_user_action_event_date?: string | null;

		/**
		 * The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:
		 * Option descriptions:
		 * * `by` - Attribution
		 * * `by-nc` - Attribution Non-Commercial
		 * * `by-nc-nd` - Attribution Non-Commercial No Derivatives
		 * * `by-nc-sa` - Attribution Non-Commercial Share Alike
		 * * `by-nd` - Attribution No Derivatives
		 * * `by-sa` - Attribution Share Alike
		 * * `cc0` - Public Domain Dedication
		 * Required
		 */
		license: VideoLicense;

		/**
		 * The link to the video.
		 * Required
		 */
		link: string;

		/**
		 * The video's metadata.
		 * Required
		 */
		metadata: VideoMetadata;

		/**
		 * The time in ISO 8601 format when the video metadata was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The video's title.
		 * Required
		 */
		name: string;

		/** Information about the folder that contains this video. */
		parent_folder?: Project | null;

		/** The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope. */
		password?: string | null;

		/**
		 * The active picture for this video.
		 * Required
		 */
		pictures: Picture;

		/**
		 * The video's privacy setting.
		 * Required
		 */
		privacy: VideoPrivacy;

		/**
		 * The time in ISO 8601 format when the video was released.
		 * Required
		 */
		release_time: string;

		/**
		 * The resource key string of the video.
		 * Required
		 */
		resource_key: string;

		/**
		 * 360 spatial data.
		 * Required
		 */
		spatial: VideoSpatial;

		/**
		 * A collection of stats associated with this video.
		 * Required
		 */
		stats: VideoStats;

		/**
		 * The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.
		 * Option descriptions:
		 * * `available` - The video is available.
		 * * `quota_exceeded` - The user's quota is exceeded with this video.
		 * * `total_cap_exceeded` - The user has exceeded their total cap with this video.
		 * * `transcode_starting` - Transcoding is beginning for the video.
		 * * `transcoding` - Transcoding is underway for the video.
		 * * `transcoding_error` - There was an error in transcoding the video.
		 * * `unavailable` - The video is unavailable.
		 * * `uploading` - The video is being uploaded.
		 * * `uploading_error` - There was an error in uploading the video.
		 * Required
		 */
		status: VideoStatus;

		/**
		 * An array of all tags assigned to this video.
		 * Required
		 */
		tags: Array<Tag>;

		/**
		 * The transcode information for a video upload.
		 * Required
		 */
		transcode: VideoTranscode;

		/**
		 * The upload information for this video.
		 * Required
		 */
		upload: VideoUpload;

		/**
		 * The video's canonical relative URI.
		 * Required
		 */
		uri: string;

		/**
		 * The video owner.
		 * Required
		 */
		user: User;

		/**
		 * The video's width in pixels.
		 * Required
		 */
		width: number;
	}

	export interface VideoContext {

		/**
		 * The contextual action:
		 * Option descriptions:
		 * * `Added to` - An Added To action.
		 * * `Appearance by` - An Appearance By action.
		 * * `Liked by` - A Liked By action.
		 * * `Uploaded by` - An Unloaded By action.
		 * Required
		 */
		action: VideoContextAction;

		/**
		 * The contextual resource: a user, group, or channel representation, or an object of a tag.
		 * Required
		 */
		resource: string;

		/**
		 * The contextual resource type.
		 * Required
		 */
		resource_type: string;
	}

	export enum VideoContextAction { Added_to = 0, Appearance_by = 1, Liked_by = 2, Uploaded_by = 3 }

	export interface Embed_settings {

		/**
		 * A collection of information about the buttons that appear on the interface of the embeddable player.
		 * Required
		 */
		buttons: Embed_settingsButtons;

		/**
		 * The primary player color, which controls the color of the progress bar, buttons, and more.
		 * Required
		 */
		color: string;

		/**
		 * A collection of information about the logo in the corner of the embeddable player.
		 * Required
		 */
		logos: Embed_settingsLogos;

		/**
		 * Whether the playbar appears in the embeddable player for this video.
		 * Required
		 */
		playbar: boolean;

		/**
		 * Whether the speed controls appear in the embeddable player for this video.
		 * Required
		 */
		speed: boolean;

		/**
		 * A collection of information relating to the embeddable player's title bar.
		 * Required
		 */
		title: Embed_settingsTitle;

		/** The URI of the embed preset. */
		uri?: string | null;

		/**
		 * Whether the volume controls appear in the embeddable player for this video.
		 * Required
		 */
		volume: boolean;
	}

	export interface Embed_settingsButtons {

		/**
		 * Whether the Embed button appears in the embeddable player for this video.
		 * Required
		 */
		embed: boolean;

		/**
		 * Whether the Fullscreen button appears in the embeddable player for this video.
		 * Required
		 */
		fullscreen: boolean;

		/**
		 * Whether the HD button appears in the embeddable player for this video.
		 * Required
		 */
		hd: boolean;

		/**
		 * Whether the Like button appears in the embeddable player for this video.
		 * Required
		 */
		like: boolean;

		/**
		 * Whether the Scaling button appears in the embeddable player for this video.
		 * Required
		 */
		scaling: boolean;

		/**
		 * Whether the Share button appears in the embeddable player for this video.
		 * Required
		 */
		share: boolean;

		/**
		 * Whether the Watch Later button appears in the embeddable player for this video.
		 * Required
		 */
		watchlater: boolean;
	}

	export interface Embed_settingsLogos {

		/**
		 * A collection of information relating to custom logos in the embeddable player.
		 * Required
		 */
		custom: Embed_settingsLogosCustom;

		/**
		 * Whether the Vimeo logo appears in the embeddable player for this video.
		 * Required
		 */
		vimeo: boolean;
	}

	export interface Embed_settingsLogosCustom {

		/**
		 * Whether the custom logo appears in the embeddable player.
		 * Required
		 */
		active: boolean;

		/**
		 * The URL that loads upon clicking the custom logo.
		 * Required
		 */
		link: string;

		/**
		 * Whether the custom logo appears even when the player interface is hidden.
		 * Required
		 */
		sticky: boolean;
	}

	export interface Embed_settingsTitle {

		/**
		 * How the embeddable player handles the video title:
		 * Option descriptions:
		 * * `hide` - The title is hidden.
		 * * `show` - The title is shown.
		 * Required
		 */
		name: Embed_settingsTitleName;

		/**
		 * How the embeddable player handles the video owner's information:
		 * Option descriptions:
		 * * `hide` - The owner's information is hidden.
		 * * `show` - The owner's information is shown.
		 * Required
		 */
		owner: Embed_settingsTitleName;

		/**
		 * How the embeddable player handles the video owner's portrait:
		 * Option descriptions:
		 * * `hide` - The owner's portrait is hidden
		 * * `show` - The owner's portrait is shown.
		 * Required
		 */
		portrait: Embed_settingsTitleName;
	}

	export enum Embed_settingsTitleName { hide = 0, show = 1, user = 2 }

	export enum VideoLicense { by = 0, by_nc = 1, by_nc_nd = 2, by_nc_sa = 3, by_nd = 4, by_sa = 5, cc0 = 6 }

	export interface VideoMetadata {

		/**
		 * A list of resource URIs related to the video.
		 * Required
		 */
		connections: VideoMetadataConnections;

		/**
		 * A list of resource URIs related to the video.
		 * Required
		 */
		interactions: VideoMetadataInteractions;
	}

	export interface VideoMetadataConnections {

		/**
		 * Information about the comments on this video.
		 * Required
		 */
		comments: VideoMetadataConnectionsComments;

		/**
		 * Information about the users credited in this video.
		 * Required
		 */
		credits: VideoMetadataConnectionsCredits;

		/**
		 * Information about the users who have liked this video.
		 * Required
		 */
		likes: VideoMetadataConnectionsLikes;

		/**
		 * Information about this video's ondemand data.
		 * Required
		 */
		ondemand: VideoMetadataConnectionsOndemand;

		/**
		 * Information about this video's thumbnails.
		 * Required
		 */
		pictures: VideoMetadataConnectionsPictures;

		/**
		 * The DRM playback status connection for this video.
		 * Required
		 */
		playback: VideoMetadataConnectionsPlayback;

		/**
		 * The recommendations for this video.
		 * Required
		 */
		recommendations: VideoMetadataConnectionsRecommendations;

		/**
		 * Related content for this video.
		 * Required
		 */
		related: VideoMetadataConnectionsRelated;

		/**
		 * Information about the video's season.
		 * Required
		 */
		season: VideoMetadataConnectionsSeason;

		/**
		 * Information about this video's text tracks.
		 * Required
		 */
		texttracks: VideoMetadataConnectionsTexttracks;

		/**
		 * Information about this video's VOD trailer.
		 * Required
		 */
		trailer: VideoMetadataConnectionsTrailer;

		/**
		 * Information about the user privacy of this video, if the video privacy is `users`.
		 * Required
		 */
		users_with_access: VideoMetadataConnectionsUsers_with_access;

		/**
		 * Information about the versions of this video.
		 * Required
		 */
		versions: VideoMetadataConnectionsVersions;
	}

	export interface VideoMetadataConnectionsComments {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of comments on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsCredits {

		/** An array of HTTP methods permitted on this URI. */
		options?: Array<string> | null;

		/** The total number of users on this connection. */
		total?: number | null;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}

	export interface VideoMetadataConnectionsLikes {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of likes on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsOndemand {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The On Demand connection resource key.
		 * Required
		 */
		resource_key: string;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsPictures {

		/**
		 * An array of HTTP methods allowed on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * Total number of thumbnails on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsPlayback {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsRecommendations {

		/** An array of HTTP methods allowed on this URI. */
		options?: Array<string> | null;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}

	export interface VideoMetadataConnectionsRelated {

		/** An array of HTTP methods allowed on this URI. */
		options?: Array<string> | null;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}

	export interface VideoMetadataConnectionsSeason {

		/**
		 * The name of this season.
		 * Required
		 */
		name: string;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsTexttracks {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of text tracks on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsTrailer {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The trailer connection resource key.
		 * Required
		 */
		resource_key: string;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsUsers_with_access {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataConnectionsVersions {

		/** The URI of the current version of the video. */
		current_uri?: string | null;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of versions on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractions {

		/**
		 * The Buy interaction for a On Demand video.
		 * Required
		 */
		buy: VideoMetadataInteractionsBuy;

		/**
		 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
		 * Required
		 */
		channel: VideoMetadataInteractionsChannel;

		/**
		 * Information about whether the authenticated user has liked this video.
		 * Required
		 */
		like: VideoMetadataInteractionsLike;

		/**
		 * The Rent interaction for an On Demand video.
		 * Required
		 */
		rent: VideoMetadataInteractionsRent;

		/**
		 * Information about where and how to report a video.
		 * Required
		 */
		report: VideoMetadataInteractionsReport;

		/** Subscription information for an On Demand video. */
		subscribe?: VideoMetadataInteractionsSubscribe | null;

		/**
		 * Information about removing this video from the user's list of watched videos.
		 * Required
		 */
		watched: VideoMetadataInteractionsWatched;

		/**
		 * Information about whether this video appears on the authenticated user's Watch Later list.
		 * Required
		 */
		watchlater: VideoMetadataInteractionsWatchlater;
	}

	export interface VideoMetadataInteractionsBuy {

		/**
		 * The currency code for the current user's region.
		 * Required
		 */
		currency: string;

		/**
		 * Formatted price to display to buy an On Demand video.
		 * Required
		 */
		display_price: string;

		/**
		 * The user's download access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for download.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to download the video.
		 * * `unavailable` - The video isn't available for download.
		 * Required
		 */
		download: VideoMetadataInteractionsBuyDownload;

		/**
		 * Whether the video has DRM.
		 * Required
		 */
		drm: boolean;

		/**
		 * The URL to buy the On Demand video on Vimeo.
		 * Required
		 */
		link: string;

		/**
		 * The numeric value of the price for buying the On Demand video.
		 * Required
		 */
		price: number;

		/**
		 * The time in ISO 8601 format when the On Demand video was purchased.
		 * Required
		 */
		purchase_time: string;

		/**
		 * The user's streaming access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for streaming.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to stream the video.
		 * * `unavailable` - The video isn't available for streaming
		 * Required
		 */
		stream: VideoMetadataInteractionsBuyDownload;

		/**
		 * The product URI to purchase the On Demand video.
		 * Required
		 */
		uri: string;
	}

	export enum VideoMetadataInteractionsBuyDownload { available = 0, purchased = 1, restricted = 2, unavailable = 3 }

	export interface VideoMetadataInteractionsChannel {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractionsLike {

		/**
		 * Whether the user has liked the video.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user liked the video.
		 * Required
		 */
		added_time: string;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractionsRent {

		/**
		 * The currency code for the current user's region.
		 * Required
		 */
		currency: string;

		/**
		 * Formatted price to display to rent an On Demand video.
		 * Required
		 */
		display_price: string;

		/**
		 * Whether the video has DRM.
		 * Required
		 */
		drm: boolean;

		/**
		 * The time in ISO 8601 format when the rental period for the video expires.
		 * Required
		 */
		expires_time: string;

		/**
		 * The URL to rent the On Demand video on Vimeo.
		 * Required
		 */
		link: string;

		/**
		 * The numeric value of the price for buying the On Demand video.
		 * Required
		 */
		price: number;

		/**
		 * The time in ISO 8601 format when the On Demand video was rented.
		 * Required
		 */
		purchase_time: string;

		/**
		 * The user's streaming access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for streaming.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to stream the video.
		 * * `unavailable` - The video isn't available for streaming.
		 * Required
		 */
		stream: VideoMetadataInteractionsBuyDownload;

		/**
		 * The product URI to rent the On Demand video.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractionsReport {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * A list of valid reasons for reporting a video.
		 * Required
		 */
		reason: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractionsSubscribe {

		/** Whether the video has DRM. */
		drm?: boolean | null;

		/** The time in ISO 8601 format when the subscription expires. */
		expires_time?: string | null;

		/** The tine in ISO 8601 format when the subscription was purchased. */
		purchase_time?: string | null;

		/** The stream type. */
		stream?: string | null;
	}

	export interface VideoMetadataInteractionsWatched {

		/**
		 * Whether the user has watched the video.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user watched the video.
		 * Required
		 */
		added_time: string;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoMetadataInteractionsWatchlater {

		/**
		 * Whether the user has added the video to their Watch later list.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user added the video to their Watch Later list.
		 * Required
		 */
		added_time: string;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface Project {

		/**
		 * The time in ISO 8601 format when the project was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The project's metadata.
		 * Required
		 */
		metadata: ProjectMetadata;

		/**
		 * The time in ISO 8601 format when the project was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The name of the folder.
		 * Required
		 */
		name: string;

		/**
		 * The resource key string of the project.
		 * Required
		 */
		resource_key: string;

		/**
		 * The URI of the project.
		 * Required
		 */
		uri: string;

		/**
		 * The owner of the project.
		 * Required
		 */
		user: User;
	}

	export interface ProjectMetadata {

		/**
		 * A list of resource URIs related to the project.
		 * Required
		 */
		connections: ProjectMetadataConnections;
	}

	export interface ProjectMetadataConnections {

		/**
		 * A standard connection object indicating how to get all the videos in this project.
		 * Required
		 */
		videos: ProjectMetadataConnectionsVideos;
	}

	export interface ProjectMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface VideoPrivacy {

		/**
		 * Whether the video can be added to collections.
		 * Required
		 */
		add: boolean;

		/**
		 * Who can comment on the video:
		 * Option descriptions:
		 * * `anybody` - Anyone can comment on the video.
		 * * `contacts` - Only contacts can comment on the video.
		 * * `nobody` - No one can comment on the video.
		 * Required
		 */
		comments: UserPreferencesVideosPrivacyComments;

		/**
		 * The video's download permission setting.
		 * Required
		 */
		download: boolean;

		/**
		 * The video's embed permission setting:
		 * Option descriptions:
		 * * `private` - The video is private.
		 * * `public` - Anyone can embed the video.
		 * Required
		 */
		embed: VideoPrivacyEmbed;

		/**
		 * The general privacy setting for the video:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the video.
		 * * `contacts` - Only contacts can view the video.
		 * * `disable` - Hide from vimeo
		 * * `nobody` - No one besides the owner can view the video.
		 * * `password` - Anyone with the video's password can view the video.
		 * * `unlisted` - Not searchable from vimeo.com
		 * * `users` - Only people with a Vimeo account can view the video.
		 * Required
		 */
		view: UserPreferencesVideosPrivacyView;
	}

	export enum VideoPrivacyEmbed { _private = 0, _public = 1 }

	export interface VideoSpatial {

		/**
		 * 360 director timeline.
		 * Required
		 */
		VideoSpatialDirector_timeline: Array<VideoSpatialDirector_timeline>;

		/**
		 * The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
		 * Required
		 */
		field_of_view: number;

		/**
		 * The 360 spatial projection:
		 * Option descriptions:
		 * * `cubical` - The spatial projection is cubical.
		 * * `cylindrical` - The spatial projection is cylindrical.
		 * * `dome` - The spatial projection is dome-shaped.
		 * * `equirectangular` - The spatial projection is equirectangular.
		 * * `pyramid` - The spatial projection is pyramid-shaped.
		 * Required
		 */
		projection: VideoSpatialProjection;

		/**
		 * The 360 stereo format:
		 * Option descriptions:
		 * * `left-right` - The stereo format is left-right.
		 * * `mono` - The audio is monaural.
		 * * `top-bottom` - The stereo format is top-bottom.
		 * Required
		 */
		stereo_format: VideoSpatialStereo_format;
	}

	export interface VideoSpatialDirector_timeline {

		/** The director timeline pitch, from -90 (minimum) to 90 (maximum). */
		pitch?: number | null;

		/** The director timeline roll. */
		roll?: number | null;

		/** The director timeline time code. */
		time_code?: number | null;

		/** The director timeline yaw, from 0 (minimum) to 360 (maximum). */
		yaw?: number | null;
	}

	export enum VideoSpatialProjection { cubical = 0, cylindrical = 1, dome = 2, equirectangular = 3, pyramid = 4 }

	export enum VideoSpatialStereo_format { left_right = 0, mono = 1, top_bottom = 2 }

	export interface VideoStats {

		/**
		 * The current total number of times that the video has been played.
		 * Required
		 */
		plays: number;
	}

	export enum VideoStatus { available = 0, quota_exceeded = 1, total_cap_exceeded = 2, transcode_starting = 3, transcoding = 4, transcoding_error = 5, unavailable = 6, uploading = 7, uploading_error = 8 }

	export interface VideoTranscode {

		/** Status code for this video's availability. */
		status?: VideoTranscodeStatus | null;
	}

	export enum VideoTranscodeStatus { complete = 0, error = 1, in_progress = 2 }

	export interface VideoUpload {

		/** The approach for uploading the video. */
		approach?: VideoUploadApproach | null;

		/** The URI for completing the upload. */
		complete_uri?: string | null;

		/** The HTML form for uploading a video through the post approach. */
		form?: string | null;

		/** The link of the video to capture through the pull approach. */
		link?: string | null;

		/** The redirect URL for the upload app. */
		redirect_url?: string | null;

		/** The file size in bytes of the uploaded video. */
		size?: number | null;

		/**
		 * The status code for the availability of the uploaded video:
		 * Option descriptions:
		 * * `complete` - The upload is complete.
		 * * `error` - The upload ended with an error.
		 * * `in_progress` - The upload is underway.
		 * Required
		 */
		status: VideoTranscodeStatus;

		/** The link for sending video file data. */
		upload_link?: string | null;
	}

	export enum VideoUploadApproach { post = 0, pull = 1, streaming = 2, tus = 3 }

	export interface Group {

		/**
		 * The time in ISO 8601 format when the group was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The group's description.
		 * Required
		 */
		description: string;

		/**
		 * The link to the group.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the group.
		 * Required
		 */
		metadata: GroupMetadata;

		/**
		 * The time in ISO 8601 format when the group was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The group's display name.
		 * Required
		 */
		name: string;

		/**
		 * The active picture for this group.
		 * Required
		 */
		pictures: Picture;

		/**
		 * The group's privacy settings.
		 * Required
		 */
		privacy: GroupPrivacy;

		/**
		 * The resource key of the group.
		 * Required
		 */
		resource_key: string;

		/**
		 * The canonical relative URI of this group.
		 * Required
		 */
		uri: string;

		/** The owner of the group. */
		user?: User | null;
	}

	export interface GroupMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: GroupMetadataConnections;

		/**
		 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		interactions: GroupMetadataInteractions;
	}

	export interface GroupMetadataConnections {

		/**
		 * Information about the members or moderators of this group.
		 * Required
		 */
		users: GroupMetadataConnectionsUsers;

		/**
		 * Information about the videos contained within this group.
		 * Required
		 */
		videos: GroupMetadataConnectionsVideos;
	}

	export interface GroupMetadataConnectionsUsers {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface GroupMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface GroupMetadataInteractions {

		/**
		 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		join: GroupMetadataInteractionsJoin;
	}

	export interface GroupMetadataInteractionsJoin {

		/**
		 * Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added_time: string;

		/**
		 * The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		title: string;

		/**
		 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
		 * Option descriptions:
		 * * `member` - The authenticated user is a member.
		 * * `moderator` - The authenticated user is a moderator.
		 * Required
		 */
		type: GroupMetadataInteractionsJoinType;

		/**
		 * The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export enum GroupMetadataInteractionsJoinType { member = 0, moderator = 1 }

	export interface GroupPrivacy {

		/**
		 * Who can comment on the group:
		 * Option descriptions:
		 * * `all` - Anyone can comment on the group.
		 * * `members` - Only members can comment on the group.
		 * Required
		 */
		comment: GroupPrivacyComment;

		/**
		 * Who can invite new members to the group:
		 * Option descriptions:
		 * * `all` - Anyone can invite new members to join.
		 * * `members` - Only group members can invite new members to join.
		 * Required
		 */
		invite: GroupPrivacyComment;

		/**
		 * Who can join the group:
		 * Option descriptions:
		 * * `anybody` - Anyone can join the group.
		 * * `members` - Only people with a Vimeo account can join the group.
		 * Required
		 */
		join: GroupPrivacyJoin;

		/**
		 * Who can add videos to the group:
		 * Option descriptions:
		 * * `all` - Anyone can add videos to the group.
		 * * `members` - Only group members can add videos to the group.
		 * Required
		 */
		videos: GroupPrivacyComment;

		/**
		 * Who can view the group:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the group.
		 * * `members` - Only group members can view the group.
		 * Required
		 */
		view: GroupPrivacyJoin;
	}

	export enum GroupPrivacyComment { all = 0, members = 1 }

	export enum GroupPrivacyJoin { anybody = 0, members = 1 }

	export interface Activity_3_1Metadata {

		/**
		 * A list of resource URIs related to the activity.
		 * Required
		 */
		connections: Activity_3_1MetadataConnections;
	}

	export interface Activity_3_1MetadataConnections {

		/**
		 * Related content for this activity.
		 * Required
		 */
		related: Activity_3_1MetadataConnectionsRelated;
	}

	export interface Activity_3_1MetadataConnectionsRelated {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export enum Activity_3_1Type { appearance = 0, category = 1, channel = 2, facebook_feed = 3, group = 4, like = 5, ondemand = 6, share = 7, tag = 8, twitter_timeline = 9, upload = 10 }

	export interface Album {

		/**
		 * Whether an album should allow continuous play.
		 * Required
		 */
		allow_continuous_play: boolean;

		/**
		 * Whether an album should allow downloads.
		 * Required
		 */
		allow_downloads: boolean;

		/**
		 * Whether an album should allow sharing.
		 * Required
		 */
		allow_share: boolean;

		/**
		 * Hexadecimal color code for the decorative color. For example, album videos use this color for player buttons.
		 * Required
		 */
		brand_color: string;

		/**
		 * The time in ISO 8601 format that the album was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The custom logo for this album.
		 * Required
		 */
		custom_logo: Picture;

		/**
		 * A brief description of the album's content.
		 * Required
		 */
		description: string;

		/**
		 * The custom domain a user has selected for their album.
		 * Required
		 */
		domain: string;

		/**
		 * The total duration in seconds of all the videos in the album.
		 * Required
		 */
		duration: number;

		/**
		 * Embed data for the album.
		 * Required
		 */
		embed: AlbumEmbed;

		/**
		 * Whether to show the album's custom brand color in the player of the album's embedded playlist.
		 * Required
		 */
		embed_brand_color: boolean;

		/**
		 * Whether to show the album's custom logo in the player of the album's embedded playlist.
		 * Required
		 */
		embed_custom_logo: boolean;

		/**
		 * Whether to hide the Vimeo navigation when viewing the album.
		 * Required
		 */
		hide_nav: boolean;

		/**
		 * Whether to hide the Vimeo logo in the player of the album's embedded playlist.
		 * Required
		 */
		hide_vimeo_logo: boolean;

		/**
		 * The album's layout preference
		 * Required
		 */
		layout: AlbumLayout;

		/**
		 * The URL to access the album.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the album.
		 * Required
		 */
		metadata: AlbumMetadata;

		/**
		 * The time in ISO 8601 format when the album was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The album's display name.
		 * Required
		 */
		name: string;

		/**
		 * The active image for the album; defaults to the thumbnail of the last video added to the album.
		 * Required
		 */
		pictures: Picture;

		/**
		 * The privacy settings of the album.
		 * Required
		 */
		privacy: AlbumPrivacy;

		/**
		 * The album resource key.
		 * Required
		 */
		resource_key: string;

		/**
		 * Whether album videos should use the review mode URL.
		 * Required
		 */
		review_mode: boolean;

		/**
		 * Sort type of the album.
		 * Required
		 */
		sort: AlbumSort;

		/**
		 * The album's color theme preference
		 * Required
		 */
		theme: AlbumTheme;

		/**
		 * The album's URI.
		 * Required
		 */
		uri: string;

		/**
		 * The custom Vimeo URL a user has selected for their album.
		 * Required
		 */
		url: string;

		/**
		 * Whether the user has opted in to use a custom domain for their album.
		 * Required
		 */
		use_custom_domain: boolean;

		/**
		 * The owner of the album.
		 * Required
		 */
		user: User;

		/**
		 * Whether an album should show the brand color in the web layout.
		 * Required
		 */
		web_brand_color: boolean;

		/**
		 * Whether an album's custom logo should be shown in the web layout.
		 * Required
		 */
		web_custom_logo: boolean;
	}

	export interface AlbumEmbed {

		/**
		 * The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.
		 * Required
		 */
		html: string;
	}

	export enum AlbumLayout { grid = 0, player = 1 }

	export interface AlbumMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: AlbumMetadataConnections;

		/**
		 * A list of resource URIs related to the album.
		 * Required
		 */
		interactions: AlbumMetadataInteractions;
	}

	export interface AlbumMetadataConnections {

		/**
		 * Information about the videos that belong to this album.
		 * Required
		 */
		videos: AlbumMetadataConnectionsVideos;
	}

	export interface AlbumMetadataConnectionsVideos {

		/**
		 * An array of the HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface AlbumMetadataInteractions {

		/**
		 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		add_custom_thumbnails: AlbumMetadataInteractionsAdd_custom_thumbnails;

		/**
		 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		add_logos: AlbumMetadataInteractionsAdd_logos;

		/**
		 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		add_videos: AlbumMetadataInteractionsAdd_videos;
	}

	export interface AlbumMetadataInteractionsAdd_custom_thumbnails {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface AlbumMetadataInteractionsAdd_logos {

		/**
		 * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface AlbumMetadataInteractionsAdd_videos {

		/**
		 * An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}

	export interface AlbumPrivacy {

		/** The privacy-enabled password to see this album. Present only when `privacy.view` is `password`. */
		password?: string | null;

		/**
		 * Who can view the album:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the album.
		 * * `embed_only` - Only owner can see album, can be embedded off-site
		 * * `password` - Only those with the password can view the album.
		 * Required
		 */
		view: AlbumPrivacyView;
	}

	export enum AlbumPrivacyView { anybody = 0, embed_only = 1, password = 2 }

	export enum AlbumSort { added_first = 0, added_last = 1, alphabetical = 2, arranged = 3, comments = 4, likes = 5, newest = 6, oldest = 7, plays = 8 }

	export enum AlbumTheme { dark = 0, standard = 1 }

	export interface Api_app {

		/**
		 * The name of the API app.
		 * Required
		 */
		name: string;

		/**
		 * The canonical URI of the API app.
		 * Required
		 */
		uri: string;
	}

	export interface Auth {

		/**
		 * The access token string.
		 * Required
		 */
		access_token: string;

		/**
		 * The API application associated with the token.
		 * Required
		 */
		app: Api_app;

		/** The date and time that the token expires. */
		expires_on?: string | null;

		/** The refresh token string. */
		refresh_token?: string | null;

		/**
		 * The scope or scopes that the token supports.
		 * Required
		 */
		scope: string;

		/**
		 * The token type:
		 * Option descriptions:
		 * * `bearer` - The token is of the `bearer` type.
		 * Required
		 */
		token_type: AuthToken_type;

		/** The user associated with the token. */
		user?: User | null;
	}

	export enum AuthToken_type { bearer = 0 }

	export interface Auth_error {

		/**
		 * The name of the error.
		 * Required
		 */
		error: string;

		/**
		 * The description of the error.
		 * Required
		 */
		error_description: string;
	}

	export interface Comment {

		/**
		 * The time in ISO 8601 format when the comment was posted.
		 * Required
		 */
		created_on: string;
		metadata: CommentMetadata;

		/**
		 * The resource key string for the comment.
		 * Required
		 */
		resource_key: string;

		/**
		 * The content of the comment.
		 * Required
		 */
		text: string;

		/**
		 * The Vimeo content to which the comment relates:
		 * Option descriptions:
		 * * `video` - The comment is about a video.
		 * Required
		 */
		type: CommentType;

		/**
		 * The unique identifier to access the comment resource.
		 * Required
		 */
		uri: string;

		/**
		 * The user who posted the comment.
		 * Required
		 */
		user: User;
	}

	export interface CommentMetadata {
		connections: CommentMetadataConnections;
	}

	export interface CommentMetadataConnections {

		/**
		 * Information about this comment's replies.
		 * Required
		 */
		replies: CommentMetadataConnectionsReplies;
	}

	export interface CommentMetadataConnectionsReplies {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of replies on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export enum CommentType { video = 0 }

	export interface Content_rating {

		/**
		 * The code that uniquely identifies this content rating:
		 * Option descriptions:
		 * * `drugs` - Drug or alcohol use.
		 * * `language` - Profanity or sexually suggestive content.
		 * * `nudity` - Nudity.
		 * * `safe` - Suitable for all audiences.
		 * * `unrated` - No rating.
		 * * `violence` - Violent or graphic content.
		 * Required
		 */
		code: Content_ratingCode;

		/**
		 * The description of this content rating.
		 * Required
		 */
		name: string;

		/**
		 * The canonical relative URI of the content rating.
		 * Required
		 */
		uri: string;
	}

	export enum Content_ratingCode { drugs = 0, language = 1, nudity = 2, safe = 3, unrated = 4, violence = 5 }

	export interface Creative_commons {

		/**
		 * The code that uniquely identifies this Creative Commons license:
		 * Option descriptions:
		 * * `by` - Attribution
		 * * `by-nc` - Attribution Non-Commercial
		 * * `by-nc-nd` - Attribution Non-Commercial No Derivatives
		 * * `by-nc-sa` - Attribution Non-Commercial Share Alike
		 * * `by-nd` - Attribution No Derivatives
		 * * `by-sa` - Attribution Share Alike
		 * * `cc0` - Public Domain Dedication
		 * Required
		 */
		code: Creative_commonsCode;

		/**
		 * The description of this Creative Commons license.
		 * Required
		 */
		name: string;

		/**
		 * The canonical relative URI of the Creative Commons license.
		 * Required
		 */
		uri: string;
	}

	export enum Creative_commonsCode { by = 0, by_nc = 1, by_nc_nd = 2, by_nc_sa = 3, by_nd = 4, by_sa = 5, cc0 = 6 }

	export interface Credit {

		/**
		 * The name of the person credited.
		 * Required
		 */
		name: string;

		/**
		 * The character that this person portrayed, or the job that this person performed.
		 * Required
		 */
		role: string;

		/**
		 * The unique identifier to access the credits resource.
		 * Required
		 */
		uri: string;

		/** The Vimeo user associated with this credit. */
		user?: User | null;

		/** The video associated with this credit. */
		video?: Video | null;
	}

	export interface Domain {

		/**
		 * Whether to permit HD embeds on this domain.
		 * Required
		 */
		allow_hd: boolean;

		/**
		 * The domain name.
		 * Required
		 */
		domain: string;

		/**
		 * The URI of the domain.
		 * Required
		 */
		uri: string;
	}

	export interface Endpoint {

		/**
		 * All HTTP methods permitted on this endpoint.
		 * Required
		 */
		methods: Array<string>;

		/**
		 * The path section of the URL, which, when appended to the API host `https:///api.vimeo.com`, builds a full API endpoint.
		 * Required
		 */
		path: string;
	}

	export interface Error {

		/**
		 * The error message that developers receive.
		 * Required
		 */
		developer_message: string;

		/**
		 * The error message that non-developer users receive.
		 * Required
		 */
		error: string;

		/**
		 * The error code.
		 * Required
		 */
		error_code: number;

		/**
		 * A link to more information about the error.
		 * Required
		 */
		link: string;
	}

	export interface Language {

		/**
		 * The code that represents this language.
		 * Required
		 */
		code: string;

		/**
		 * The name of the language.
		 * Required
		 */
		name: string;
	}

	export interface Legacy_error {

		/**
		 * User-friendly error message
		 * Required
		 */
		error: string;
	}

	export interface On_demand_genre {

		/**
		 * The canonical name or URL slug of the genre.
		 * Required
		 */
		canonical: string;
		interactions: On_demand_genreInteractions;

		/**
		 * The Vimeo URL for this genre.
		 * Required
		 */
		link: string;
		metadata: On_demand_genreMetadata;

		/**
		 * The descriptive name of the genre.
		 * Required
		 */
		name: string;

		/**
		 * The relative URI of the On Demand genre.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_genreInteractions {

		/**
		 * Interactions for On Demand pages that are in this genre.
		 * Required
		 */
		page: On_demand_genreInteractionsPage;
	}

	export interface On_demand_genreInteractionsPage {

		/**
		 * Whether this On Demand genre was added.
		 * Required
		 */
		added: boolean;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The URI to access the On Demand page.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_genreMetadata {

		/**
		 * A collection of information connected to this resource.
		 * Required
		 */
		connections: On_demand_genreMetadataConnections;
	}

	export interface On_demand_genreMetadataConnections {

		/**
		 * Information about the On Demand pages related to this group.
		 * Required
		 */
		pages: On_demand_genreMetadataConnectionsPages;
	}

	export interface On_demand_genreMetadataConnectionsPages {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_page {

		/**
		 * The background image for the On Demand page on Vimeo.
		 * Required
		 */
		background: Picture;

		/**
		 * The primary and secondary colors used for rendering this On Demand page.
		 * Required
		 */
		colors: On_demand_pageColors;

		/**
		 * An array of the page's content ratings.
		 * Required
		 */
		content_rating: Array<string>;

		/** The time in ISO 8601 format when the page was created. */
		created_time?: string | null;

		/**
		 * The description of this On Demand page.
		 * Required
		 */
		description: string;

		/**
		 * The link to this page on its own domain.
		 * Required
		 */
		domain_link: string;

		/**
		 * Information about this On Demand page's episodes, if the page is for a series.
		 * Required
		 */
		episodes: On_demand_pageEpisodes;

		/** This On Demand page's film, if it is a film. */
		film?: Video | null;

		/**
		 * All the genres assigned to this page.
		 * Required
		 */
		genres: Array<On_demand_genre>;

		/**
		 * The link to the page on Vimeo.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the On Demand page.
		 * Required
		 */
		metadata: On_demand_pageMetadata;

		/** he time in ISO 8601 format when the page was last modified. */
		modified_time?: string | null;

		/**
		 * A descriptive title of this On Demand page.
		 * Required
		 */
		name: string;

		/**
		 * The active poster for this On Demand page.
		 * Required
		 */
		pictures: Picture;
		preorder: On_demand_pagePreorder;
		published: On_demand_pagePublished;

		/**
		 * The rating of this page.
		 * Required
		 */
		rating: number;

		/**
		 * The VOD resource key.
		 * Required
		 */
		resource_key: string;

		/** The creator-designated SKU for this On Demand page. */
		sku?: string | null;

		/**
		 * Information about subscribing to this On Demand page, if enabled.
		 * Required
		 */
		subscription: On_demand_pageSubscription;

		/**
		 * The graphical theme for this On Demand page.
		 * Required
		 */
		theme: string;

		/**
		 * The thumbnail image for the On Demand page on Vimeo.
		 * Required
		 */
		thumbnail: Picture;

		/**
		 * The trailer for this On Demand page.
		 * Required
		 */
		trailer: Video;

		/**
		 * Whether this On Demand page is for a film or a series.
		 * Option descriptions:
		 * * `film` - The On Demand page is for a film.
		 * * `series` - The On Demand page is for a series.
		 * Required
		 */
		type: On_demand_pageType;

		/**
		 * The relative URI of the On Demand page.
		 * Required
		 */
		uri: string;

		/**
		 * The user who created this On Demand page.
		 * Required
		 */
		user: User;
	}

	export interface On_demand_pageColors {

		/**
		 * The hexadecimal color code for the page's primary color.
		 * Required
		 */
		primary: string;

		/**
		 * The hexadecimal color code for the page's secondary color.
		 * Required
		 */
		secondary: string;
	}

	export interface On_demand_pageEpisodes {
		buy: On_demand_pageEpisodesBuy;
		rent: On_demand_pageEpisodesRent;
	}

	export interface On_demand_pageEpisodesBuy {

		/**
		 * Whether all the videos on this On Demand page can be purchased as a whole.
		 * Required
		 */
		active: boolean;

		/**
		 * The default price to buy an episode.
		 * Required
		 */
		price: number;
	}

	export interface On_demand_pageEpisodesRent {

		/**
		 * Whether all the videos on this On Demand page can be rented as a whole.
		 * Required
		 */
		active: boolean;

		/**
		 * The rental period for the video:
		 * Option descriptions:
		 * * `1 day` - The rental period is one day.
		 * * `1 month` - The rental period is one month.
		 * * `1 week` - The rental period is one week.
		 * * `1 year` - The rental period is one year.
		 * * `2 day` - The rental period is two days.
		 * * `24 hour` - The rental period is 24 hours.
		 * * `3 day` - The rental period is three days.
		 * * `3 month` - The rental period is three months.
		 * * `30 day` - The rental period is 30 days.
		 * * `48 hour` - The rental period is 48 hours.
		 * * `6 month` - The rental period is six months.
		 * * `60 day` - The rental period is 60 days.
		 * * `7 day` - The rental period is 7 days.
		 * * `72 hour` - The rental period is 72 hours.
		 * Required
		 */
		period: On_demand_pageEpisodesRentPeriod;

		/**
		 * The default price to rent an episode.
		 * Required
		 */
		price: number;
	}

	export enum On_demand_pageEpisodesRentPeriod { _1_day = 0, _1_month = 1, _1_week = 2, _1_year = 3, _2_day = 4, _24_hour = 5, _3_day = 6, _3_month = 7, _30_day = 8, _48_hour = 9, _6_month = 10, _60_day = 11, _7_day = 12, _72_hour = 13 }

	export interface On_demand_pageMetadata {

		/**
		 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
		 * Required
		 */
		connections: On_demand_pageMetadataConnections;

		/**
		 * The user's available purchase interactions.
		 * Required
		 */
		interactions: Purchase_interaction;
	}

	export interface On_demand_pageMetadataConnections {
		metadata: On_demand_pageMetadataConnectionsMetadata;
	}

	export interface On_demand_pageMetadataConnectionsMetadata {
		connections: On_demand_pageMetadataConnectionsMetadataConnections;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnections {

		/**
		 * Information about the comments associated with this page.
		 * Required
		 */
		comments: On_demand_pageMetadataConnectionsMetadataConnectionsComments;

		/**
		 * Information about the genres associated with this page.
		 * Required
		 */
		genres: On_demand_pageMetadataConnectionsMetadataConnectionsGenres;

		/**
		 * Information about the likes associated with this page.
		 * Required
		 */
		likes: On_demand_pageMetadataConnectionsMetadataConnectionsLikes;

		/**
		 * Information about the pictures associated with this page.
		 * Required
		 */
		pictures: On_demand_pageMetadataConnectionsMetadataConnectionsPictures;

		/**
		 * Information about the seasons associated with this page.
		 * Required
		 */
		seasons: On_demand_pageMetadataConnectionsMetadataConnectionsSeasons;

		/**
		 * Information about the videos associated with this page.
		 * Required
		 */
		videos: On_demand_pageMetadataConnectionsMetadataConnectionsVideos;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsComments {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of comments on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsGenres {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of genres on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsLikes {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of likes on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsPictures {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of pictures on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsSeasons {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of seasons on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsVideos {

		/**
		 * The total number of extra videos.
		 * Required
		 */
		extra_total: number;

		/**
		 * The total number of main videos.
		 * Required
		 */
		main_total: number;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;

		/**
		 * The total number of viewable videos.
		 * Required
		 */
		viewable_total: number;
	}

	export interface Purchase_interaction {

		/** Information on purchasing this video. */
		buy?: Purchase_interactionBuy | null;

		/** Information on renting this video. */
		rent?: string | null;

		/** Information on subscribing to this video. */
		subscribe?: Purchase_interactionSubscribe | null;
	}

	export interface Purchase_interactionBuy {

		/** Whether the On Demand video for purchase has DRM. */
		drm?: boolean | null;
	}

	export interface Purchase_interactionSubscribe {

		/** Whether the On Demand subscription has DRM. */
		drm?: boolean | null;

		/** The time in ISO 8601 format when the On Demand video will expire. */
		expires_time?: string | null;

		/** The URL to purchase this On Demand subscription on Vimeo. */
		link?: string | null;

		/** The time in ISO 8601 format when the On Demand was purchased. */
		purchase_time?: string | null;

		/**
		 * The user's streaming access to this On Demand subscription:
		 * Option descriptions:
		 * * `available` - The On Demand subscription is available for streaming.
		 * * `purchased` - The On Demand subscription has been purchased.
		 * * `restricted` - Streaming for the On Demand subscription is restricted.
		 * * `unavailable` - The On Demand subscription is unavailable.
		 */
		stream?: VideoMetadataInteractionsBuyDownload | null;

		/** The On Demand subscription's product URI. */
		uri?: string | null;
	}

	export interface On_demand_pagePreorder {

		/**
		 * Whether this page is available for preorder.
		 * Required
		 */
		active: boolean;

		/**
		 * The time in ISO 8601 format when the preorder was cancelled.
		 * Required
		 */
		cancel_time: string;

		/**
		 * The time in ISO 8601 format when the preorder was released to the public.
		 * Required
		 */
		publish_time: string;

		/**
		 * The time in ISO 8601 format when the preorder started.
		 * Required
		 */
		time: string;
	}

	export interface On_demand_pagePublished {

		/**
		 * Whether this On Demand page has been published.
		 * Required
		 */
		enabled: boolean;

		/**
		 * The time in IS 8601 format when this page was published.
		 * Required
		 */
		time: string;
	}

	export interface On_demand_pageSubscription {

		/**
		 * Whether this product is active.
		 * Required
		 */
		active: boolean;

		/**
		 * The link to this product on Vimeo.
		 * Required
		 */
		link: string;

		/** The product's rental period. */
		period?: string | null;

		/**
		 * The accepted currencies and respective pricing for this product.
		 * Required
		 */
		price: string;
	}

	export enum On_demand_pageType { film = 0, series = 1 }

	export interface On_demand_promotion {

		/**
		 * The type of access that this promotion grants:
		 * Option descriptions:
		 * * `default` - Grants discounts on existing product offerings.
		 * * `vip` - Grants free access either to VOD content before it is released or to access types that aren't part of the existing product offerings.
		 * Required
		 */
		access_type: On_demand_promotionAccess_type;

		/**
		 * The type of discount for which this promotion can be used.
		 * Option descriptions:
		 * * `dollars` - The discount is a certain fixed amount.
		 * * `free` - The discount is the full purchase price. VIP access promotions always use this discount type.
		 * * `percent` - The discount is a certain percentage of the full price.
		 * Required
		 */
		discount_type: On_demand_promotionDiscount_type;

		/**
		 * Whether this promotion grants download access to On Demand content.
		 * Required
		 */
		download: boolean;

		/**
		 * The prefix string for batch codes, or the null value for single codes.
		 * Required
		 */
		label: string;

		/**
		 * The video's metadata.
		 * Required
		 */
		metadata: On_demand_promotionMetadata;

		/**
		 * The percentage amount that is deducted from the product price.
		 * Required
		 */
		percent_off: number;

		/**
		 * The type of product to which this promotion can be applied. Only `buy` and `rent` are available for the VIP access type:
		 * Option descriptions:
		 * * `any` - The promotion can be applied to any product.
		 * * `buy` - The promotion can be applied to a buyable single video.
		 * * `buy_episode` - The promotion can be applied to a buyable single episode.
		 * * `rent` - The promotion can be applied to a rentable single video.
		 * * `rent_episode` - The promotion can be applied to a rentable single episode.
		 * * `subscribe` - The promotion can be applied to a subscription.
		 * Required
		 */
		product_type: On_demand_promotionProduct_type;

		/**
		 * The amount of time that the user has access to the VOD content after redeeming a promo code.
		 * Option descriptions:
		 * * `1_week` - Access lasts for one week.
		 * * `1_year` - Access lasts for one year.
		 * * `24_hour` - Access lasts for 24 hours.
		 * * `30_days` - Access lasts for 30 days.
		 * * `3_month` - Access lasts for 3 months.
		 * * `48_hour` - Access lasts for 48 hours.
		 * * `6_month` - Access lasts for 6 months.
		 * * `72_hour` - Access lasts for 72 hours.
		 * Required
		 */
		stream_period: On_demand_promotionStream_period;

		/**
		 * The total amount of times that this promotion can be used.
		 * Required
		 */
		total: number;

		/**
		 * The way in which this promotion can generate promo codes:
		 * Option descriptions:
		 * * `batch` - Provides many unique promo codes that can only be used once each.
		 * * `batch_prefix` - Similar to `batch`, except that all codes have a similar prefix string. This mode is deprecated, yet it may still appear for some users.
		 * * `single` - Provides a single promo code with many uses.
		 * Required
		 */
		type: On_demand_promotionType;

		/**
		 * The promotion's canonical relative URI.
		 * Required
		 */
		uri: string;
	}

	export enum On_demand_promotionAccess_type { _default = 0, vip = 1 }

	export enum On_demand_promotionDiscount_type { dollars = 0, free = 1, percent = 2 }

	export interface On_demand_promotionMetadata {

		/**
		 * A list of resource URIs related to the On Demand promotion.
		 * Required
		 */
		connections: On_demand_promotionMetadataConnections;
	}

	export interface On_demand_promotionMetadataConnections {

		/**
		 * Information about the codes associated with this promotion.
		 * Required
		 */
		codes: On_demand_promotionMetadataConnectionsCodes;
	}

	export interface On_demand_promotionMetadataConnectionsCodes {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of uses on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export enum On_demand_promotionProduct_type { any = 0, buy = 1, buy_episode = 2, rent = 3, rent_episode = 4, subscribe = 5 }

	export enum On_demand_promotionStream_period { _1_week = 0, _1_year = 1, _24_hour = 2, _30_days = 3, _3_month = 4, _48_hour = 5, _6_month = 6, _72_hour = 7 }

	export enum On_demand_promotionType { batch = 0, batch_prefix = 1, single = 2 }

	export interface On_demand_promotion_code {

		/**
		 * A promotion code that can be redeemed on Vimeo.
		 * Required
		 */
		code: string;

		/**
		 * A link to redeem the promotion code instantly.
		 * Required
		 */
		link: string;

		/**
		 * The total amount of times this code can be used.
		 * Required
		 */
		max_uses: number;

		/**
		 * The number of times that this code has been used.
		 * Required
		 */
		uses: number;
	}

	export interface On_demand_region {

		/**
		 * The ISO 3166-1 alpha-2 code for this country.
		 * Required
		 */
		country_code: string;

		/**
		 * The descriptive name of this country.
		 * Required
		 */
		country_name: string;

		/**
		 * The region container's relative URI.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_season {

		/**
		 * The description for this season.
		 * Required
		 */
		description: string;
		metadata: On_demand_seasonMetadata;

		/**
		 * The descriptive name of the season.
		 * Required
		 */
		name: string;

		/**
		 * The position of the season relative to other seasons in the series.
		 * Required
		 */
		position: number;

		/**
		 * The unique identifier for this On Demand season.
		 * Required
		 */
		resource_key: string;

		/**
		 * The type of season.
		 * Required
		 */
		type: string;

		/**
		 * The season container's relative URI.
		 * Required
		 */
		uri: string;

		/**
		 * The creator of this On Demand page.
		 * Required
		 */
		user: User;
	}

	export interface On_demand_seasonMetadata {
		connections: On_demand_seasonMetadataConnections;
	}

	export interface On_demand_seasonMetadataConnections {

		/**
		 * The Videos connection.
		 * Required
		 */
		videos: On_demand_seasonMetadataConnectionsVideos;
	}

	export interface On_demand_seasonMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection ∂data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_video {

		/**
		 * Information about purchasing this video.
		 * Required
		 */
		buy: On_demand_videoBuy;

		/** Description of the On Demand video. */
		description?: string | null;

		/** The duration of the On Demand video. */
		duration?: string | null;

		/** The episode number of the On Demand video. */
		episode?: number | null;

		/**
		 * An object containing information about how the authenticated user can interact with this On Demand page.
		 * Required
		 */
		interactions: On_demand_videoInteractions;

		/**
		 * The link to this video on Vimeo.
		 * Required
		 */
		link: string;

		/**
		 * Metadata information about this video.
		 * Required
		 */
		metadata: On_demand_videoMetadata;

		/** The title of the On Demand video. */
		name?: string | null;

		/** An array of HTTP methods permitted on this URI. */
		options?: Array<string> | null;

		/** The active picture for this video. */
		pictures?: Picture | null;

		/**
		 * The user's most recent play position in seconds for this video.
		 * Required
		 */
		play_progress: number;

		/** Describes the manual position of this video relative to the other videos owned by this On Demand page. */
		position?: number | null;

		/** The time in ISO 8601 format when the On Demand video was created or published. */
		release_date?: string | null;

		/**
		 * The year that this On Demand video was released.
		 * Required
		 */
		release_year: number;

		/**
		 * Information about renting this video.
		 * Required
		 */
		rent: On_demand_videoRent;

		/**
		 * The type of the On Demand video:
		 * Option descriptions:
		 * * `extra` - The On Demand video is an extra feature.
		 * * `main` - The On Demand video is a main feature.
		 * * `trailer` - The On Demand video is a trailer.
		 * Required
		 */
		type: On_demand_videoType;

		/**
		 * The video container's relative URI.
		 * Required
		 */
		uri: string;

		/** The owner of the video. */
		user?: User | null;
	}

	export interface On_demand_videoBuy {

		/**
		 * Whether this On Demand video can be purchased.
		 * Required
		 */
		active: boolean;

		/**
		 * A map of currency type to price.
		 * Required
		 */
		price: string;

		/** Whether this On Demand video has been purchased. */
		purchased?: boolean | null;
	}

	export interface On_demand_videoInteractions {

		/**
		 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
		 * Required
		 */
		page: On_demand_videoInteractionsPage;
	}

	export interface On_demand_videoInteractionsPage {

		/**
		 * Whether this On Demand page was added.
		 * Required
		 */
		added: boolean;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The URI to access the On Demand page.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_videoMetadata {
		connections: On_demand_videoMetadataConnections;
		interactions: On_demand_videoMetadataInteractions;
	}

	export interface On_demand_videoMetadataConnections {

		/**
		 * Information about this season.
		 * Required
		 */
		season: On_demand_videoMetadataConnectionsSeason;
	}

	export interface On_demand_videoMetadataConnectionsSeason {

		/**
		 * The name of the season on this connection.
		 * Required
		 */
		name: string;

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_videoMetadataInteractions {

		/**
		 * Information about the user's Like interactions with this video.
		 * Required
		 */
		likes: On_demand_videoMetadataInteractionsLikes;

		/**
		 * Information about the user's Watch Later interactions with this video.
		 * Required
		 */
		watchlater: On_demand_videoMetadataInteractionsWatchlater;
	}

	export interface On_demand_videoMetadataInteractionsLikes {

		/**
		 * Whether the user has liked this video.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user liked this video.
		 * Required
		 */
		added_time: string;

		/**
		 * The URI for the user to like this video.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_videoMetadataInteractionsWatchlater {

		/**
		 * Whether the user has added this video to their Watch Later queue.
		 * Required
		 */
		added: boolean;

		/**
		 * The time in ISO 8601 format when the user added this video to their Watch Later queue.
		 * Required
		 */
		added_time: string;

		/**
		 * The URI for the user to add this video to their Watch Later queue.
		 * Required
		 */
		uri: string;
	}

	export interface On_demand_videoRent {

		/**
		 * Whether this On Demand video can be rented.
		 * Required
		 */
		active: boolean;

		/**
		 * A map of currency type to price.
		 * Required
		 */
		price: string;

		/** Whether this On Demand video has been rented. */
		purchased?: boolean | null;
	}

	export enum On_demand_videoType { extra = 0, main = 1, trailer = 2 }

	export interface Play {

		/** Progressive files. */
		PlayProgressive?: Array<PlayProgressive> | null;

		/**
		 * The play status of the video:
		 * Option descriptions:
		 * * `playable` - The video is playable.
		 * * `purchase_required` - The video must be purchased.
		 * * `restricted` - Playback for the video is restricted.
		 * * `unavailable` - The video is unavailable.
		 * Required
		 */
		status: PlayStatus;
	}

	export interface PlayProgressive {

		/**
		 * The time in ISO 8601 format when this video file was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The FPS of the video file.
		 * Required
		 */
		fps: number;

		/**
		 * The height in pixels of the video.
		 * Required
		 */
		height: number;

		/**
		 * The direct link to this video file.
		 * Required
		 */
		link: string;

		/**
		 * The time in ISO 8601 format when the link to this video file expires.
		 * Required
		 */
		link_expiration_time: string;

		/** The URLs for logging events. */
		log?: string | null;

		/**
		 * The MD5 hash of the video file.
		 * Required
		 */
		md5: string;

		/**
		 * The file size in bytes of this video.
		 * Required
		 */
		size: number;

		/**
		 * The type of the video file:
		 * Option descriptions:
		 * * `source` - The video is a source file.
		 * * `video/mp4` - The video is in MP4 format.
		 * * `video/webm` - The video is in WebM format.
		 * * `vp6/x-video` - The video is in VP6 format.
		 * Required
		 */
		type: PlayProgressiveType;

		/**
		 * The width in pixels of the video.
		 * Required
		 */
		width: number;
	}

	export enum PlayProgressiveType { source = 0, video_mp4 = 1, video_webm = 2, vp6_x_video = 3 }

	export enum PlayStatus { playable = 0, purchase_required = 1, restricted = 2, unavailable = 3 }

	export interface Portfolio {

		/**
		 * The time in ISO 8601 format when the portfolio was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The portfolio's description.
		 * Required
		 */
		description: string;

		/**
		 * The link to the portfolio.
		 * Required
		 */
		link: string;

		/**
		 * Metadata about the album.
		 * Required
		 */
		metadata: PortfolioMetadata;

		/**
		 * The time in ISO 8601 format when the portfolio's data was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The display name of the portfolio.
		 * Required
		 */
		name: string;

		/**
		 * The default video sort order for the portfolio:
		 * Option descriptions:
		 * * `alphabetical` - The default sort order is alphabetical by name.
		 * * `clips` - The default sort order is video creation date.
		 * * `modified` - The default sort order is the order in which the videos were modified.
		 * * `recent` - The default sort order is the order in which the videos were added.
		 * Required
		 */
		sort: PortfolioSort;

		/**
		 * The canonical relative URI of the portfolio.
		 * Required
		 */
		uri: string;
	}

	export interface PortfolioMetadata {

		/**
		 * A list of resource URIs related to the album.
		 * Required
		 */
		connections: PortfolioMetadataConnections;
	}

	export interface PortfolioMetadataConnections {

		/**
		 * Information about the videos contained within this portfolio.
		 * Required
		 */
		videos: PortfolioMetadataConnectionsVideos;
	}

	export interface PortfolioMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export enum PortfolioSort { alphabetical = 0, clips = 1, modified = 2, recent = 3 }

	export interface Presets {

		/**
		 * Metadata about the album.
		 * Required
		 */
		metadata: PresetsMetadata;

		/**
		 * The display name of the presets group.
		 * Required
		 */
		name: string;

		/**
		 * The contents of the presets group.
		 * Required
		 */
		settings: PresetsSettings;

		/**
		 * The canonical relative URI of the presets object.
		 * Required
		 */
		uri: string;

		/**
		 * The owner of the preset.
		 * Required
		 */
		user: User;
	}

	export interface PresetsMetadata {

		/**
		 * A list of resource URIs related to the album.
		 * Required
		 */
		connections: PresetsMetadataConnections;
	}

	export interface PresetsMetadataConnections {

		/**
		 * Information about the videos in this preset.
		 * Required
		 */
		videos: PresetsMetadataConnectionsVideos;
	}

	export interface PresetsMetadataConnectionsVideos {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface PresetsSettings {
		buttons: PresetsSettingsButtons;
		logos: PresetsSettingsLogos;
		outro: PresetsSettingsOutro;
	}

	export interface PresetsSettingsButtons {

		/**
		 * Whether the preset includes Embed button settings.
		 * Required
		 */
		embed: boolean;

		/**
		 * Whether the preset includes HD button settings.
		 * Required
		 */
		hd: boolean;

		/**
		 * Whether the preset includes Like button settings.
		 * Required
		 */
		like: boolean;

		/**
		 * Whether the present includes Share button settings.
		 * Required
		 */
		share: boolean;

		/**
		 * Whether the preset includes Vote button settings.
		 * Required
		 */
		vote: boolean;

		/**
		 * Whether the preset includes Watch Later button settings.
		 * Required
		 */
		watchlater: boolean;
	}

	export interface PresetsSettingsLogos {

		/**
		 * Whether the preset includes custom logo settings.
		 * Required
		 */
		custom: boolean;

		/**
		 * Whether the present includes sticky custom logo settings.
		 * Required
		 */
		sticky_custom: boolean;

		/**
		 * Whether the preset includes Vimeo logo settings.
		 * Required
		 */
		vimeo: boolean;
	}

	export interface PresetsSettingsOutro {

		/** A comma-separated list of video URIs. Present only if the type is `uploaded_clips`. */
		clips?: string | null;

		/** The outro link settings. Present only if the type is `link`. */
		link?: PresetsSettingsOutroLink | null;

		/** The outro text. Present only if the type is `text`. */
		text?: string | null;

		/**
		 * The preset outro type:
		 * Required
		 */
		type: PresetsSettingsOutroType;

		/** A comma-separated list of video URIs. Present only if type is `no idea`. */
		videos?: string | null;
	}

	export interface PresetsSettingsOutroLink {

		/** The name of the outro link. */
		name?: string | null;

		/** The URL of the outro link. */
		url?: string | null;
	}

	export enum PresetsSettingsOutroType { link = 0, no_idea = 1, text = 2, uploaded_clips = 3, uploaded_videos = 4 }

	export interface Text_track {

		/**
		 * Whether this text track is active.
		 * Required
		 */
		active: boolean;

		/**
		 * The read-only URL of the text track file, intended for use with HLS playback.
		 * Required
		 */
		hls_link: string;

		/**
		 * The time in ISO 8601 format when the read-only HLS playback text track file expires.
		 * Required
		 */
		hls_link_expires_time: string;

		/**
		 * The language code for this text track. To see a full list, request
		 * `/languages?filter=texttrack`.
		 * Required
		 */
		language: string;

		/**
		 * The read-only URL of the text track file. You can upload to this link when you create it for the first time.
		 * Required
		 */
		link: string;

		/**
		 * The time in ISO 8601 format when the text track link expires.
		 * Required
		 */
		link_expires_time: string;

		/**
		 * The descriptive name of this text track.
		 * Required
		 */
		name: string;

		/**
		 * The type of the text track:
		 * Option descriptions:
		 * * `captions` - The text track is for captions.
		 * * `subtitles` - The text track is for subtitles.
		 * Required
		 */
		type: Text_trackType;

		/**
		 * The relative URI of the text track.
		 * Required
		 */
		uri: string;
	}

	export enum Text_trackType { captions = 0, subtitles = 1 }

	export interface Upload_attempt {

		/** The video to upload. */
		clip?: Video | null;

		/** The completion URI of the upload. */
		complete_uri?: string | null;

		/** The HTML upload form. */
		form?: string | null;

		/**
		 * The ticket identifier string for the upload.
		 * Required
		 */
		ticket_id: string;

		/**
		 * The upload URL.
		 * Required
		 */
		upload_link: string;

		/**
		 * The upload URI.
		 * Required
		 */
		uri: string;

		/**
		 * The owner of the uploaded video.
		 * Required
		 */
		user: User;
	}

	export interface Video_versions {

		/**
		 * Whether this video version is the currently active one.
		 * Required
		 */
		active: boolean;

		/**
		 * The API app associated with the video version.
		 * Required
		 */
		app: Api_app;

		/**
		 * The time in ISO 8601 for when the video version was created.
		 * Required
		 */
		created_time: string;

		/**
		 * The duration of the video version in seconds.
		 * Required
		 */
		duration: number;

		/**
		 * The file name of the video version.
		 * Required
		 */
		filename: string;

		/**
		 * The size in byes of the video version file.
		 * Required
		 */
		filesize: number;

		/**
		 * The video version's metadata.
		 * Required
		 */
		metadata: Video_versionsMetadata;

		/**
		 * The time in ISO 8601 format when the video version was last modified.
		 * Required
		 */
		modified_time: string;

		/**
		 * The Play representation.
		 * Required
		 */
		play: Play;

		/**
		 * The upload information for this version.
		 * Required
		 */
		upload: Video_versionsUpload;

		/**
		 * The time in ISO 8601 format when the video version was uploaded.
		 * Required
		 */
		upload_date: string;

		/**
		 * The version's canonical relative URI.
		 * Required
		 */
		uri: string;

		/**
		 * The owner of the video version.
		 * Required
		 */
		user: User;
	}

	export interface Video_versionsMetadata {
		connections: Video_versionsMetadataConnections;
	}

	export interface Video_versionsMetadataConnections {

		/**
		 * Data from video associated with version
		 * Required
		 */
		video: Video_versionsMetadataConnectionsVideo;
	}

	export interface Video_versionsMetadataConnectionsVideo {

		/**
		 * An array of HTTP methods permitted on this URI.
		 * Required
		 */
		options: Array<string>;

		/**
		 * The total number of videos on this connection.
		 * Required
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}

	export interface Video_versionsUpload {

		/** The approach for uploading the video. */
		approach?: VideoUploadApproach | null;

		/** The URI for completing the upload. */
		complete_uri?: string | null;

		/** The HTML form for uploading a video through the post approach. */
		form?: string | null;

		/** The link of the video to capture through the pull approach. */
		link?: string | null;

		/** The redirect URL for the upload app. */
		redirect_url?: string | null;

		/** The file size in bytes of the uploaded video. */
		size?: number | null;

		/**
		 * The status code for the availability of the uploaded video:
		 * Option descriptions:
		 * * `complete` - The upload is complete.
		 * * `error` - The upload ended with an error.
		 * * `in_progress` - The upload is underway.
		 * Required
		 */
		status: VideoTranscodeStatus;

		/** The link for sending video file data. */
		upload_link?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get an API specification
		 * Get 
		 * @param {boolean} openapi Return an OpenAPI specification.
		 * @return {void} Standard request.
		 */
		Get_endpoints(openapi: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?openapi=' + openapi, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all categories
		 * This method gets all existing categories.
		 * Get categories
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_categoriesSort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_categories(direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_categoriesSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific category
		 * Get categories/{category}
		 * @param {string} category The name of the category.
		 * @return {void} The category was returned.
		 */
		Get_category(category: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels in a category
		 * Get categories/{category}/channels
		 * @param {string} category The name of the category.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_category_channels(category: string, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_category_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/channels&direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the groups in a category
		 * Get categories/{category}/groups
		 * @param {string} category The name of the category.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_category_groups(category: string, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_category_groupsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/groups&direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a category
		 * Get categories/{category}/videos
		 * @param {string} category The name of the category.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_category_videosFilter} filter The attribute by which to filter the results.
		 * Option descriptions:
		 *  * `conditional_featured` - Featured (promoted) videos
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_category_videos(category: string, direction: Get_categoriesDirection, filter: Get_category_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_category_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/videos&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check for a video in a category
		 * Get categories/{category}/videos/{video_id}
		 * @param {string} category The name of the category.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video belongs to the category.
		 */
		Check_category_for_video(category: string, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all channels
		 * Get channels
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channelsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `relevant` - Relevant sorting is available only for search queries.
		 * @return {void} The channels were returned.
		 */
		Get_channels(direction: Get_categoriesDirection, filter: Get_channelsFilter, page: number, per_page: number, query: string, sort: Get_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a channel
		 * Delete channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Delete_channel(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific channel
		 * Get channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} The channel was returned.
		 */
		Get_channel(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories in a channel
		 * This method gets all the categories in the specified channel.
		 * Get channels/{channel_id}/categories
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} The categories were returned.
		 */
		Get_channel_categories(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/categories', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a list of categories to a channel
		 * This method adds multiple categories to the specified channel.
		 * Put channels/{channel_id}/categories
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Add_channel_categories(channel_id: number, requestBody: Add_channel_categoriesPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a category from a channel
		 * This method removes a single category from the specified channel.
		 * Delete channels/{channel_id}/categories/{category}
		 * @param {string} category The name of the category.
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Delete_channel_category(category: string, channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Categorize a channel
		 * This method adds a channel to a category.
		 * Put channels/{channel_id}/categories/{category}
		 * @param {string} category The name of the category.
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Categorize_channel(category: string, channel_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of channel moderators
		 * Delete channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Remove_channel_moderators(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/moderators', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the moderators in a channel
		 * Get channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The moderators were returned.
		 */
		Get_channel_moderators(channel_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/moderators?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace the moderators of a channel
		 * Patch channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 * @return {Array<User>} The moderators were replaced.
		 */
		Replace_channel_moderators(channel_id: number, requestBody: Replace_channel_moderatorsPatchBody): Observable<Array<User>> {
			return this.http.patch<Array<User>>(this.baseUri + 'channels/' + channel_id + '/moderators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a list of channel moderators
		 * Put channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} The moderators were added.
		 */
		Add_channel_moderators(channel_id: number, requestBody: Add_channel_moderatorsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/moderators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific channel moderator
		 * Delete channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Remove_channel_moderator(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/moderators/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific channel moderator
		 * Get channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The moderator was returned.
		 */
		Get_channel_moderator(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/moderators/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific channel moderator
		 * Put channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Add_channel_moderator(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/moderators/' + user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who can view a private channel
		 * This method gets all the users who have access to the specified private channel.
		 * Get channels/{channel_id}/privacy/users
		 * @param {number} channel_id The ID of the channel.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The users were returned.
		 */
		Get_channel_privacy_users(channel_id: number, direction: Get_categoriesDirection, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/privacy/users?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a user from viewing a private channel
		 * This method prevents a single user from being able to access the specified private channel.
		 * Delete channels/{channel_id}/privacy/users/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Delete_channel_privacy_user(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/privacy/users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a specific user to view a private channel
		 * This method gives a single user access to the specified private channel.
		 * Put channels/{channel_id}/privacy/users/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The user can now view the private channel.
		 */
		Set_channel_privacy_user(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/privacy/users/' + user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the tags that have been added to a channel
		 * This method gets all the tags that have been added to the specified channel.
		 * Get channels/{channel_id}/tags
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} The tags were returned.
		 */
		Get_channel_tags(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a channel
		 * This method removes a single tag from the specified channel.
		 * Delete channels/{channel_id}/tags/{word}
		 * @param {number} channel_id The ID of the channel.
		 * @param {string} word The word to use as the tag.
		 * @return {void} 
		 */
		Delete_tag_from_channel(channel_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a tag has been added to a channel
		 * This method determines whether a specific tag has been added to the channel in question.
		 * Get channels/{channel_id}/tags/{word}
		 * @param {number} channel_id The ID of the channel.
		 * @param {string} word The word to use as the tag.
		 * @return {void} 
		 */
		Check_if_channel_has_tag(channel_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific tag to a channel
		 * This method adds a single tag to the specified channel.
		 * Put channels/{channel_id}/tags/{word}
		 * @param {number} channel_id The ID of the channel.
		 * @param {string} word The word to use as the tag.
		 * @return {void} 
		 */
		Add_channel_tag(channel_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the followers of a channel
		 * Get channels/{channel_id}/users
		 * @param {number} channel_id The ID of the channel.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscribersFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followers were returned.
		 */
		Get_channel_subscribers(channel_id: number, direction: Get_categoriesDirection, filter: Get_channel_subscribersFilter, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/users?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of videos from a channel
		 * Delete channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Remove_videos_from_channel(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/videos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a channel
		 * Get channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_channel_videos(channel_id: number, containing_uri: string, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_channel_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a list of videos to a channel
		 * Put channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} The videos were added.
		 */
		Add_videos_to_channel(channel_id: number, requestBody: Add_videos_to_channelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific video from a channel
		 * Delete channels/{channel_id}/videos/{video_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_channel(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a channel
		 * This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.
		 * Get channels/{channel_id}/videos/{video_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was returned.
		 */
		Get_channel_video(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to a channel
		 * Put channels/{channel_id}/videos/{video_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_channel(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the comments on a video
		 * Get channels/{channel_id}/videos/{video_id}/comments
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The comments were returned.
		 */
		Get_comments_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/comments?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the credited users in a video
		 * Get channels/{channel_id}/videos/{video_id}/credits
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_credits_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/credits?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who have liked a video
		 * Get channels/{channel_id}/videos/{video_id}/likes
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_likes_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/likes?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the thumbnails of a video
		 * Get channels/{channel_id}/videos/{video_id}/pictures
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The thumbnails were returned.
		 */
		Get_video_thumbnails_alt1(channel_id: number, video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who can view a user's private videos by default
		 * Get channels/{channel_id}/videos/{video_id}/privacy/users
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The users were returned.
		 */
		Get_video_privacy_users_alt1(channel_id: number, video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/privacy/users?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a list of users to view a private video
		 * The body of this request should follow our
		 * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
		 * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
		 * Put channels/{channel_id}/videos/{video_id}/privacy/users
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The users can now view the private video.
		 */
		Add_video_privacy_users_alt1(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/privacy/users', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the text tracks of a video
		 * Get channels/{channel_id}/videos/{video_id}/texttracks
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The text tracks were returned.
		 */
		Get_text_tracks_alt1(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/texttracks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all content ratings
		 * Get contentratings
		 * @return {void} The content ratings were returned.
		 */
		Get_content_ratings(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'contentratings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all Creative Commons licenses
		 * Get creativecommons
		 * @return {void} The Creative Commons licenses were returned.
		 */
		Get_cc_licenses(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'creativecommons', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all groups
		 * Get groups
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channelsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `relevant` - Relevant sorting is available only for search queries.
		 * @return {void} The groups were returned.
		 */
		Get_groups(direction: Get_categoriesDirection, filter: Get_channelsFilter, page: number, per_page: number, query: string, sort: Get_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a group
		 * Delete groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @return {void} 
		 */
		Delete_group(group_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific group
		 * Get groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @return {void} The group was returned.
		 */
		Get_group(group_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the members of a group
		 * Get groups/{group_id}/users
		 * @param {number} group_id The ID of the group.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscribersFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The members were returned.
		 */
		Get_group_members(group_id: number, direction: Get_categoriesDirection, filter: Get_channel_subscribersFilter, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/users?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a group
		 * Get groups/{group_id}/videos
		 * @param {number} group_id The ID of the group.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_group_videos(group_id: number, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/videos?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a group
		 * Delete groups/{group_id}/videos/{video_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_group(group_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + group_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a group
		 * Check if a group has a video.
		 * Get groups/{group_id}/videos/{video_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was returned.
		 */
		Get_group_video(group_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a group
		 * Put groups/{group_id}/videos/{video_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was added.
		 */
		Add_video_to_group(group_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/' + group_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all languages
		 * Get languages
		 * @param {Get_languagesFilter} filter The attribute by which to filter the results.
		 * Option descriptions:
		 *  * `texttracks` - Only return text track supported languages
		 * @return {void} The languages were returned.
		 */
		Get_languages(filter: Get_languagesFilter): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'languages?filter=' + filter, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user
		 * Get me
		 * @return {void} The user was returned.
		 */
		Get_user_alt1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the albums that belong to a user
		 * Get me/albums
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_albums_alt1Sort} sort The way to sort the results.
		 * @return {Array<Album>} The albums were returned.
		 */
		Get_albums_alt1(direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_albums_alt1Sort): Observable<Array<Album>> {
			return this.http.get<Array<Album>>(this.baseUri + 'me/albums?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, {});
		}

		/**
		 * Delete an album
		 * Delete me/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 * @return {void} 
		 */
		Delete_album_alt1(album_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific album
		 * Get me/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 * @return {void} The album was returned.
		 */
		Get_album_alt1(album_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in an album
		 * Get me/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 * @param {string} containing_uri The page containing the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {string} password The password of the album.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_album_videos_alt1Sort} sort The way to sort the results.
		 * @param {boolean} weak_search Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.
		 * @return {void} The videos were returned.
		 */
		Get_album_videos_alt1(album_id: number, containing_uri: string, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, password: string, per_page: number, query: string, sort: Get_album_videos_alt1Sort, weak_search: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&weak_search=' + weak_search, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all the videos in an album
		 * This method replaces all the existing videos in an album with one or more videos.
		 * Put me/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 * @return {void} 
		 */
		Replace_videos_in_album_alt1(album_id: number, requestBody: Replace_videos_in_album_alt1PutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/albums/' + album_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an album
		 * Delete me/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Remove_video_from_album_alt1(album_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in an album
		 * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
		 * Get me/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} video_id The ID of the video.
		 * @param {string} password The password of the album.
		 * @return {void} The video was returned.
		 */
		Get_album_video_alt1(album_id: number, video_id: number, password: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id + '?password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to an album
		 * Put me/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_album_alt1(album_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set a video as the album thumbnail
		 * Post me/albums/{album_id}/videos/{video_id}/set_album_thumbnail
		 * @param {number} album_id The ID of the album.
		 * @param {number} video_id The ID of the video.
		 * @return {Album} The album was updated with a new thumbnail.
		 */
		Set_video_as_album_thumbnail_alt1(album_id: number, video_id: number, requestBody: Set_video_as_album_thumbnail_alt1PostBody): Observable<Album> {
			return this.http.post<Album>(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id + '/set_album_thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the videos in which a user appears
		 * Get me/appearances
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_appearances_alt1(direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/appearances?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories that a user follows
		 * Get me/categories
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_category_subscriptions_alt1Sort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_category_subscriptions_alt1(direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_category_subscriptions_alt1Sort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/categories?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a category
		 * Delete me/categories/{category}
		 * @param {string} category The name of the category.
		 * @return {void} 
		 */
		Unsubscribe_from_category_alt1(category: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a category
		 * Get me/categories/{category}
		 * @param {string} category The name of the category.
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_category_alt1(category: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a single category
		 * Put me/categories/{category}
		 * @param {number} category The name of the category.
		 * @return {void} 
		 */
		Subscribe_to_category_alt1(category: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/categories/' + category, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels to which a user subscribes
		 * Get me/channels
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_channel_subscriptions_alt1(direction: Get_categoriesDirection, filter: Get_channel_subscriptions_alt1Filter, page: number, per_page: number, query: string, sort: Get_category_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a specific channel
		 * Delete me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Unsubscribe_from_channel_alt1(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a channel
		 * Get me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_channel_alt1(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a specific channel
		 * Put me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @return {void} 
		 */
		Subscribe_to_channel_alt1(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/channels/' + channel_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom logos that belong to a user
		 * Get me/customlogos
		 * @return {void} The custom logos were returned.
		 */
		Get_custom_logos_alt1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/customlogos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom logo
		 * Post me/customlogos
		 * @return {void} 
		 */
		Create_custom_logo_alt1(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/customlogos', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom logo
		 * Get me/customlogos/{logo_id}
		 * @param {number} logo_id The ID of the custom logo.
		 * @return {void} The custom logo was returned.
		 */
		Get_custom_logo_alt1(logo_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/customlogos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all videos in a user's feed
		 * Get me/feed
		 * @param {string} offset Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_feed_alt1Type} type The feed type.
		 * @return {void} The videos were returned.
		 */
		Get_feed_alt1(offset: string, page: number, per_page: number, type: Get_feed_alt1Type): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/feed?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&page=' + page + '&per_page=' + per_page + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the followers of a user
		 * Get me/followers
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The user's followers were returned.
		 */
		Get_followers_alt1(direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followers?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users that a user is following
		 * Get me/following
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_user_following_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followed users were returned.
		 */
		Get_user_following_alt1(direction: Get_categoriesDirection, filter: Get_user_following_alt1Filter, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/following?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a list of users
		 * Post me/following
		 * @return {void} 
		 */
		Follow_users_alt1(requestBody: Follow_users_alt1PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/following', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow a user
		 * Delete me/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @return {void} 
		 */
		Unfollow_user_alt1(follow_user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user is following another user
		 * Get me/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @return {void} 
		 */
		Check_if_user_is_following_alt1(follow_user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a specific user
		 * Put me/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @return {void} 
		 */
		Follow_user_alt1(follow_user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/following/' + follow_user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the groups that a user has joined
		 * Get me/groups
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_user_groups_alt1(direction: Get_categoriesDirection, filter: Get_channel_subscriptions_alt1Filter, page: number, per_page: number, query: string, sort: Get_category_groupsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a user from a group
		 * Delete me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @return {void} 
		 */
		Leave_group_alt1(group_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has joined a group
		 * Get me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @return {void} 
		 */
		Check_if_user_joined_group_alt1(group_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user to a group
		 * Put me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @return {void} 
		 */
		Join_group_alt1(group_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/groups/' + group_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has liked
		 * Get me/likes
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_likes_alt1(filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/likes?filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to unlike a video
		 * Delete me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Unlike_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has liked a video
		 * Get me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Check_if_user_liked_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to like a video
		 * Put me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Like_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/likes/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand pages of a user
		 * Get me/ondemand/pages
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {On_demand_pageType} filter The type of On Demand pages to return.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_user_vods_alt1Sort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_user_vods_alt1(direction: Get_categoriesDirection, filter: On_demand_pageType, page: number, per_page: number, sort: Get_user_vods_alt1Sort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/ondemand/pages?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an On Demand page
		 * Post me/ondemand/pages
		 * @return {void} 
		 */
		Create_vod_alt1(requestBody: Create_vod_alt1PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/ondemand/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand purchases and rentals that a user has made
		 * Get me/ondemand/purchases
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_vod_purchasesFilter} filter The type of On Demand videos to show.
		 * Option descriptions:
		 *  * `important` - Will show all pages which are about to expire.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_vod_purchasesSort} sort The way to sort the results.
		 * @return {void} The purchases and rentals were returned.
		 */
		Get_vod_purchases(direction: Get_categoriesDirection, filter: Get_vod_purchasesFilter, page: number, per_page: number, sort: Get_vod_purchasesSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/ondemand/purchases?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has made a purchase or rental from an On Demand page
		 * Get me/ondemand/purchases/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} You have purchased the On Demand page.
		 */
		Check_if_vod_was_purchased_alt1(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/ondemand/purchases/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the pictures that belong to a user
		 * Get me/pictures
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The pictures were returned.
		 */
		Get_pictures_alt1(page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user picture
		 * Post me/pictures
		 * @return {void} The user picture was created.
		 */
		Create_picture_alt1(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/pictures', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user picture
		 * Delete me/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 * @return {void} 
		 */
		Delete_picture_alt1(portraitset_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user picture
		 * Get me/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 * @return {void} The picture was returned.
		 */
		Get_picture_alt1(portraitset_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the portfolios that belong to a user
		 * Get me/portfolios
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The portfolios were returned.
		 */
		Get_portfolios_alt1(direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific portfolio
		 * Get me/portfolios/{portfolio_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @return {void} The portfolio was returned.
		 */
		Get_portfolio_alt1(portfolio_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a portfolio
		 * Get me/portfolios/{portfolio_id}/videos
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_portfolio_videos_alt1Sort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `default` - This will sort to the default sort set on the portfolio.
		 * @return {void} The videos were returned.
		 */
		Get_portfolio_videos_alt1(portfolio_id: number, containing_uri: string, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, sort: Get_portfolio_videos_alt1Sort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a portfolio
		 * Delete me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_portfolio_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a portfolio
		 * Get me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was returned.
		 */
		Get_portfolio_video_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a portfolio
		 * Put me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_portfolio_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the embed presets that a user has created
		 * Get me/presets
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The embed presets were returned.
		 */
		Get_embed_presets_alt1(page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific embed preset
		 * Get me/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 * @return {void} The embed preset was returned.
		 */
		Get_embed_preset_alt1(preset_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that have been added to an embed preset
		 * Get me/presets/{preset_id}/videos
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The videos were returned.
		 */
		Get_embed_preset_videos_alt1(preset_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets/' + preset_id + '/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the projects that belong to a user
		 * This method gets all the projects that belong to the specified user.
		 * Get me/projects
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_projects_alt1Sort} sort The way to sort the results.
		 * @return {Array<Project>} The projects were returned.
		 */
		Get_projects_alt1(direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_projects_alt1Sort): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'me/projects?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Create a project
		 * This method creates a new project for the specified user.
		 * Post me/projects
		 * @return {void} 
		 */
		Create_project_alt1(requestBody: Create_project_alt1PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'me/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project
		 * This method deletes a project and optionally also the videos that it contains.
		 * Delete me/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @param {boolean} should_delete_clips Whether to delete all the videos in the project along with the project itself.
		 * @return {void} 
		 */
		Delete_project_alt1(project_id: number, should_delete_clips: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/projects/' + project_id + '?should_delete_clips=' + should_delete_clips, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific project
		 * This method gets a single project that belongs to the specified user.
		 * Get me/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @return {Project} The project was returned.
		 */
		Get_project_alt1(project_id: number): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'me/projects/' + project_id, {});
		}

		/**
		 * Edit a project
		 * This method edits an existing project.
		 * Patch me/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @return {Project} The project was edited.
		 */
		Edit_project_alt1(project_id: number, requestBody: Edit_project_alt1PatchBody): Observable<Project> {
			return this.http.patch<Project>(this.baseUri + 'me/projects/' + project_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a list of videos from a project
		 * This method removed multiple videos from the specified project.
		 * Delete me/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {boolean} should_delete_clips Whether to delete the videos when removing them from the project.
		 * @param {string} uris A comma-separated list of the video URIs to remove.
		 * @return {void} 
		 */
		Remove_videos_from_project_alt1(project_id: number, should_delete_clips: boolean, uris: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/projects/' + project_id + '/videos?should_delete_clips=' + should_delete_clips + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a project
		 * This method gets all the videos that belong to the specified project.
		 * Get me/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_project_videos_alt1Sort} sort The way to sort the results.
		 * @return {Array<Video>} The videos were returned.
		 */
		Get_project_videos_alt1(project_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_project_videos_alt1Sort): Observable<Array<Video>> {
			return this.http.get<Array<Video>>(this.baseUri + 'me/projects/' + project_id + '/videos?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Add a list of videos to a project
		 * This method adds multiple videos to the specified project.
		 * Put me/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {string} uris A comma-separated list of video URIs to add.
		 * @return {void} 
		 */
		Add_videos_to_project_alt1(project_id: number, uris: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/projects/' + project_id + '/videos?uris=' + (uris == null ? '' : encodeURIComponent(uris)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific video from a project
		 * This method removes a single video from the specified project.
		 * Delete me/projects/{project_id}/videos/{video_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Remove_video_from_project_alt1(project_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/projects/' + project_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to a project
		 * This method adds a single video to the specified project.
		 * Put me/projects/{project_id}/videos/{video_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_project_alt1(project_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/projects/' + project_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has uploaded
		 * Get me/videos
		 * @param {string} containing_uri The page that contains the video URI. Only available when not paired with `query`.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_videos_alt1Filter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {boolean} filter_playable Whether to filter by all playable videos or by all videos that are not  playable.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_videos_alt1Sort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos_alt1(containing_uri: string, direction: Get_categoriesDirection, filter: Get_videos_alt1Filter, filter_embeddable: boolean, filter_playable: boolean, page: number, per_page: number, query: string, sort: Get_videos_alt1Sort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&filter_playable=' + filter_playable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user owns a video
		 * Get me/videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} The user owns the video.
		 */
		Check_if_user_owns_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user's watch history
		 * Delete me/watched/videos
		 * @return {void} 
		 */
		Delete_watch_history(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/watched/videos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has watched
		 * Get me/watched/videos
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The videos were returned.
		 */
		Get_watch_history(page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watched/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific video from a user's watch history
		 * Delete me/watched/videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_from_watch_history(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/watched/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a user's Watch Later queue
		 * Get me/watchlater
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_watch_later_queue_alt1(direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watchlater?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a user's Watch Later queue
		 * Delete me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_watch_later_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has added a specific video to their Watch Later queue
		 * Get me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video appears in the user's Watch Later queue.
		 */
		Check_watch_later_queue_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a user's Watch Later queue
		 * Put me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_watch_later_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/watchlater/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify an OAuth 2 token
		 * Get oauth/verify
		 * @return {void} The token was verified.
		 */
		Verify_token(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/verify', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all On Demand genres
		 * Get ondemand/genres
		 * @return {void} The On Demand genres were returned.
		 */
		Get_vod_genres(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand genre
		 * Get ondemand/genres/{genre_id}
		 * @param {string} genre_id The ID of the genre.
		 * @return {void} The On Demand genre was returned.
		 */
		Get_vod_genre(genre_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand pages in a genre
		 * Get ondemand/genres/{genre_id}/pages
		 * @param {string} genre_id The ID of the genre.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_genre_vodsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_genre_vodsSort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_genre_vods(genre_id: string, direction: Get_categoriesDirection, filter: Get_genre_vodsFilter, page: number, per_page: number, query: string, sort: Get_genre_vodsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)) + '/pages&direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand page in a genre
		 * Check whether a genre contains an On Demand page.
		 * Get ondemand/genres/{genre_id}/pages/{ondemand_id}
		 * @param {string} genre_id The ID of the genre.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The On Demand page belongs to the genre.
		 */
		Get_genre_vod(genre_id: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)) + '/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a draft of an On Demand page
		 * Delete ondemand/pages/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Delete_vod_draft(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand page
		 * Get ondemand/pages/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The On Demand page was returned.
		 */
		Get_vod(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the backgrounds of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/backgrounds
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The background images were returned.
		 */
		Get_vod_backgrounds(ondemand_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a background to an On Demand page
		 * Post ondemand/pages/{ondemand_id}/backgrounds
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The background was created.
		 */
		Create_vod_background(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a background from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/backgrounds/{background_id}
		 * @param {number} background_id The ID of the background.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Delete_vod_background(background_id: number, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds/' + background_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific background of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/backgrounds/{background_id}
		 * @param {number} background_id The ID of the background.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The background image was returned.
		 */
		Get_vod_background(background_id: number, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds/' + background_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the genres of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/genres
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The genres were returned.
		 */
		Get_vod_genres_by_ondemand_id(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/genres', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a genre from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/genres/{genre_id}
		 * @param {string} genre_id The ID of the genre.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Delete_vod_genre(genre_id: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check whether an On Demand page belongs to a genre
		 * Get ondemand/pages/{ondemand_id}/genres/{genre_id}
		 * @param {string} genre_id The ID of the genre.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The On Demand page's genre was returned.
		 */
		Get_vod_genre_by_ondemand_id(genre_id: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a genre to an On Demand page
		 * Put ondemand/pages/{ondemand_id}/genres/{genre_id}
		 * @param {string} genre_id The ID of the genre.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Add_vod_genre(genre_id: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ondemand/pages/' + ondemand_id + '/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who have liked a video on an On Demand page
		 * This method gets all the users who have liked a particular video on an On Demand page.
		 * Get ondemand/pages/{ondemand_id}/likes
		 * @param {number} ondemand_id The ID of the On Demand page.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {On_demand_videoType} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_vod_likes(ondemand_id: number, direction: Get_categoriesDirection, filter: On_demand_videoType, page: number, per_page: number, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/likes?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the posters of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/pictures
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The posters were returned.
		 */
		Get_vod_posters(ondemand_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a poster to an On Demand page
		 * Post ondemand/pages/{ondemand_id}/pictures
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Add_vod_poster(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific poster of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/pictures/{poster_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} poster_id The ID of the picture.
		 * @return {void} The poster was returned.
		 */
		Get_vod_poster(ondemand_id: number, poster_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures/' + poster_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the promotions on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {Get_vod_promotionsFilter} filter The filter to apply to the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The promotions were returned.
		 */
		Get_vod_promotions(ondemand_id: number, filter: Get_vod_promotionsFilter, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions?filter=' + filter + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a promotion from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/promotions/{promotion_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} promotion_id The ID of the promotion.
		 * @return {void} 
		 */
		Delete_vod_promotion(ondemand_id: number, promotion_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific promotion on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions/{promotion_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} promotion_id The ID of the promotion.
		 * @return {void} The promotion was returned.
		 */
		Get_vod_promotion(ondemand_id: number, promotion_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the codes of a promotion on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} promotion_id The ID of the promotion.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The codes were returned.
		 */
		Get_vod_promotion_codes(ondemand_id: number, promotion_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id + '/codes?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of regions from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/regions
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The On Demand regions were deleted.
		 */
		Delete_vod_regions(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the regions of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/regions
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The regions were returned.
		 */
		Get_vod_regions(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific region from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/regions/{country}
		 * @param {string} country The country code.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Delete_vod_region(country: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions/' + (country == null ? '' : encodeURIComponent(country)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific region of an On Demand page
		 * Checks whether an On Demand page belongs to a region.
		 * Get ondemand/pages/{ondemand_id}/regions/{country}
		 * @param {string} country The country code.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} The On Demand page's region was returned.
		 */
		Get_vod_region(country: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions/' + (country == null ? '' : encodeURIComponent(country)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific region to an On Demand page
		 * Put ondemand/pages/{ondemand_id}/regions/{country}
		 * @param {string} country The country code.
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @return {void} 
		 */
		Add_vod_region(country: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions/' + (country == null ? '' : encodeURIComponent(country)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the seasons on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_vod_seasonsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_vod_seasonsSort} sort The way to sort the results.
		 * @return {void} The seasons were returned.
		 */
		Get_vod_seasons(ondemand_id: number, direction: Get_categoriesDirection, filter: Get_vod_seasonsFilter, page: number, per_page: number, sort: Get_vod_seasonsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific season on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons/{season_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} season_id The ID of the season.
		 * @return {void} The season was returned.
		 */
		Get_vod_season(ondemand_id: number, season_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons/' + season_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a season on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons/{season_id}/videos
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} season_id The ID of the season.
		 * @param {Get_vod_seasonsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_vod_season_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_vod_season_videos(ondemand_id: number, season_id: number, filter: Get_vod_seasonsFilter, page: number, per_page: number, sort: Get_vod_season_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons/' + season_id + '/videos?filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/videos
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_vod_videosFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_vod_videosSort} sort The way to sort the results.
		 * @return {void} * The videos were returned.
		 * * The videos were returned.
		 */
		Get_vod_videos(ondemand_id: number, direction: Get_categoriesDirection, filter: Get_vod_videosFilter, page: number, per_page: number, sort: Get_vod_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/videos?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/videos/{video_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_vod(ondemand_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/videos/{video_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video is on the On Demand page.
		 */
		Get_vod_video(ondemand_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand regions
		 * Get ondemand/regions
		 * @return {void} The On Demand regions were returned.
		 */
		Get_regions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/regions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand region
		 * Get ondemand/regions/{country}
		 * @param {string} country The country code.
		 * @return {void} The On Demand region was returned.
		 */
		Get_region(country: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/regions/' + (country == null ? '' : encodeURIComponent(country)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific tag
		 * Get tags/{word}
		 * @param {string} word The tag to return.
		 * @return {void} The tag was returned.
		 */
		Get_tag(word: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (word == null ? '' : encodeURIComponent(word)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos with a specific tag
		 * Get tags/{word}/videos
		 * @param {string} word The tag word.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_videos_with_tagSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos_with_tag(word: string, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_videos_with_tagSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (word == null ? '' : encodeURIComponent(word)) + '/videos&direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke the current access token
		 * This method enables an app to notify the API that it is done with a token and that the token can be discarded.
		 * Delete tokens
		 * @return {void} 
		 */
		Delete_token(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tokens', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for users
		 * Get users
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * @return {void} The search results were returned.
		 */
		Search_users(direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user
		 * Get users/{user_id}
		 * @param {number} user_id The ID of the user.
		 * @return {void} The user was returned.
		 */
		Get_user(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the albums that belong to a user
		 * Get users/{user_id}/albums
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_albums_alt1Sort} sort The way to sort the results.
		 * @return {Array<Album>} The albums were returned.
		 */
		Get_albums(user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_albums_alt1Sort): Observable<Array<Album>> {
			return this.http.get<Array<Album>>(this.baseUri + 'users/' + user_id + '/albums?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, {});
		}

		/**
		 * Delete an album
		 * Delete users/{user_id}/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Delete_album(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific album
		 * Get users/{user_id}/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The album was returned.
		 */
		Get_album(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom upload thumbnails of an album
		 * Get users/{user_id}/albums/{album_id}/custom_thumbnails
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The custom uploaded thumbnails were returned.
		 */
		Get_album_custom_thumbs(album_id: number, user_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom uploaded thumbnail
		 * Post users/{user_id}/albums/{album_id}/custom_thumbnails
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Create_album_custom_thumb(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a custom uploaded album thumbnail
		 * This method removes a custom uploaded thumbnail from the specified album.
		 * Delete users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} thumbnail_id The ID of the custom thumbnail.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Delete_album_custom_thumbnail(album_id: number, thumbnail_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom uploaded album thumbnail
		 * Get users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} thumbnail_id The ID of the custom thumbnail.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The custom thumbnail was returned.
		 */
		Get_album_custom_thumbnail(album_id: number, thumbnail_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom logos of an album
		 * Get users/{user_id}/albums/{album_id}/logos
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The custom logos were returned.
		 */
		Get_album_logos(album_id: number, user_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom album logo
		 * Post users/{user_id}/albums/{album_id}/logos
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Create_album_logo(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a custom album logo
		 * This method removes a custom logo from the specified album.
		 * Delete users/{user_id}/albums/{album_id}/logos/{logo_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} logo_id The ID of the custom logo.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Delete_album_logo(album_id: number, logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom album logo
		 * Get users/{user_id}/albums/{album_id}/logos/{logo_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} logo_id The ID of the custom logo.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The custom logo was returned.
		 */
		Get_album_logo(album_id: number, logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in an album
		 * Get users/{user_id}/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {string} containing_uri The page containing the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {string} password The password of the album.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_album_videosSort} sort The way to sort the results.
		 * @param {boolean} weak_search Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.
		 * @return {void} The videos were returned.
		 */
		Get_album_videos(album_id: number, user_id: number, containing_uri: string, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, password: string, per_page: number, query: string, sort: Get_album_videosSort, weak_search: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&weak_search=' + weak_search, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all the videos in an album
		 * This method replaces all the existing videos in an album with one or more videos.
		 * Put users/{user_id}/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Replace_videos_in_album(album_id: number, user_id: number, requestBody: Replace_videos_in_albumPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an album
		 * Delete users/{user_id}/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Remove_video_from_album(album_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in an album
		 * This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.
		 * Get users/{user_id}/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @param {string} password The password of the album.
		 * @return {void} The video was returned.
		 */
		Get_album_video(album_id: number, user_id: number, video_id: number, password: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id + '?password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to an album
		 * Put users/{user_id}/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_album(album_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set a video as the album thumbnail
		 * Post users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail
		 * @param {number} album_id The ID of the album.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {Album} The album was updated with a new thumbnail.
		 */
		Set_video_as_album_thumbnail(album_id: number, user_id: number, video_id: number, requestBody: Set_video_as_album_thumbnailPostBody): Observable<Album> {
			return this.http.post<Album>(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id + '/set_album_thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the videos in which a user appears
		 * Get users/{user_id}/appearances
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_appearances(user_id: number, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/appearances?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories that a user follows
		 * Get users/{user_id}/categories
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_category_subscriptions_alt1Sort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_category_subscriptions(user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_category_subscriptions_alt1Sort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/categories?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a category
		 * Delete users/{user_id}/categories/{category}
		 * @param {string} category The name of the category.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Unsubscribe_from_category(category: string, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a category
		 * Get users/{user_id}/categories/{category}
		 * @param {string} category The name of the category.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_category(category: string, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a single category
		 * Put users/{user_id}/categories/{category}
		 * @param {number} category The name of the category.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Subscribe_to_category(category: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/categories/' + category, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels to which a user subscribes
		 * Get users/{user_id}/channels
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_channel_subscriptions(user_id: number, direction: Get_categoriesDirection, filter: Get_channel_subscriptions_alt1Filter, page: number, per_page: number, query: string, sort: Get_category_channelsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a specific channel
		 * Delete users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Unsubscribe_from_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a channel
		 * Get users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a specific channel
		 * Put users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Subscribe_to_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom logos that belong to a user
		 * Get users/{user_id}/customlogos
		 * @param {number} user_id The ID of the user.
		 * @return {void} The custom logos were returned.
		 */
		Get_custom_logos(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/customlogos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom logo
		 * Post users/{user_id}/customlogos
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Create_custom_logo(user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/customlogos', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom logo
		 * Get users/{user_id}/customlogos/{logo_id}
		 * @param {number} logo_id The ID of the custom logo.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The custom logo was returned.
		 */
		Get_custom_logo(logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/customlogos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all videos in a user's feed
		 * Get users/{user_id}/feed
		 * @param {number} user_id The ID of the user.
		 * @param {string} offset Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_feed_alt1Type} type The feed type.
		 * @return {void} The videos were returned.
		 */
		Get_feed(user_id: number, offset: string, page: number, per_page: number, type: Get_feed_alt1Type): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/feed?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&page=' + page + '&per_page=' + per_page + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the followers of a user
		 * Get users/{user_id}/followers
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The user's followers were returned.
		 */
		Get_followers(user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/followers?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users that a user is following
		 * Get users/{user_id}/following
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_user_following_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followed users were returned.
		 */
		Get_user_following(user_id: number, direction: Get_categoriesDirection, filter: Get_user_following_alt1Filter, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/following?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a list of users
		 * Post users/{user_id}/following
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Follow_users(user_id: number, requestBody: Follow_usersPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/following', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow a user
		 * Delete users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Unfollow_user(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user is following another user
		 * Get users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Check_if_user_is_following(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a specific user
		 * Put users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Follow_user(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the groups that a user has joined
		 * Get users/{user_id}/groups
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_user_groups(user_id: number, direction: Get_categoriesDirection, filter: Get_channel_subscriptions_alt1Filter, page: number, per_page: number, query: string, sort: Get_category_groupsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a user from a group
		 * Delete users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Leave_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has joined a group
		 * Get users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Check_if_user_joined_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user to a group
		 * Put users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Join_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/groups/' + group_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has liked
		 * Get users/{user_id}/likes
		 * @param {number} user_id The ID of the user.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_likes(user_id: number, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/likes?filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to unlike a video
		 * Delete users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Unlike_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has liked a video
		 * Get users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Check_if_user_liked_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to like a video
		 * Put users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Like_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/likes/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand pages of a user
		 * Get users/{user_id}/ondemand/pages
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {On_demand_pageType} filter The type of On Demand pages to return.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_user_vodsSort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_user_vods(user_id: number, direction: Get_categoriesDirection, filter: On_demand_pageType, page: number, per_page: number, sort: Get_user_vodsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/ondemand/pages?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an On Demand page
		 * Post users/{user_id}/ondemand/pages
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Create_vod(user_id: number, requestBody: Create_vodPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/ondemand/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has made a purchase or rental from an On Demand page
		 * Get users/{user_id}/ondemand/purchases
		 * @param {number} user_id The ID of the user.
		 * @return {void} You have purchased the On Demand page.
		 */
		Check_if_vod_was_purchased(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/ondemand/purchases', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the pictures that belong to a user
		 * Get users/{user_id}/pictures
		 * @param {number} user_id The ID of the user.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The pictures were returned.
		 */
		Get_pictures(user_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user picture
		 * Post users/{user_id}/pictures
		 * @param {number} user_id The ID of the user.
		 * @return {void} The user picture was created.
		 */
		Create_picture(user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/pictures', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user picture
		 * Delete users/{user_id}/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Delete_picture(portraitset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user picture
		 * Get users/{user_id}/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The picture was returned.
		 */
		Get_picture(portraitset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the portfolios that belong to a user
		 * Get users/{user_id}/portfolios
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The portfolios were returned.
		 */
		Get_portfolios(user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The portfolio was returned.
		 */
		Get_portfolio(portfolio_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}/videos
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} user_id The ID of the user.
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_portfolio_videosSort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `default` - This will sort to the default sort set on the portfolio.
		 * @return {void} The videos were returned.
		 */
		Get_portfolio_videos(portfolio_id: number, user_id: number, containing_uri: string, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, sort: Get_portfolio_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a portfolio
		 * Delete users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_portfolio(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was returned.
		 */
		Get_portfolio_video(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a portfolio
		 * Put users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_portfolio(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the embed presets that a user has created
		 * Get users/{user_id}/presets
		 * @param {number} user_id The ID of the user.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The embed presets were returned.
		 */
		Get_embed_presets(user_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific embed preset
		 * Get users/{user_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The embed preset was returned.
		 */
		Get_embed_preset(preset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that have been added to an embed preset
		 * Get users/{user_id}/presets/{preset_id}/videos
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} user_id The ID of the user.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The videos were returned.
		 */
		Get_embed_preset_videos(preset_id: number, user_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets/' + preset_id + '/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the projects that belong to a user
		 * This method gets all the projects that belong to the specified user.
		 * Get users/{user_id}/projects
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_projectsSort} sort The way to sort the results.
		 * @return {Array<Project>} The projects were returned.
		 */
		Get_projects(user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_projectsSort): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'users/' + user_id + '/projects?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Create a project
		 * This method creates a new project for the specified user.
		 * Post users/{user_id}/projects
		 * @param {number} user_id The ID of the user.
		 * @return {void} 
		 */
		Create_project(user_id: number, requestBody: Create_projectPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project
		 * This method deletes a project and optionally also the videos that it contains.
		 * Delete users/{user_id}/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {boolean} should_delete_clips Whether to delete all the videos in the project along with the project itself.
		 * @return {void} 
		 */
		Delete_project(project_id: number, user_id: number, should_delete_clips: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '?should_delete_clips=' + should_delete_clips, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific project
		 * This method gets a single project that belongs to the specified user.
		 * Get users/{user_id}/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @return {Project} The project was returned.
		 */
		Get_project(project_id: number, user_id: number): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'users/' + user_id + '/projects/' + project_id, {});
		}

		/**
		 * Edit a project
		 * This method edits an existing project.
		 * Patch users/{user_id}/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @return {Project} The project was edited.
		 */
		Edit_project(project_id: number, user_id: number, requestBody: Edit_projectPatchBody): Observable<Project> {
			return this.http.patch<Project>(this.baseUri + 'users/' + user_id + '/projects/' + project_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a list of videos from a project
		 * This method removed multiple videos from the specified project.
		 * Delete users/{user_id}/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {boolean} should_delete_clips Whether to delete the videos when removing them from the project.
		 * @param {string} uris A comma-separated list of the video URIs to remove.
		 * @return {void} 
		 */
		Remove_videos_from_project(project_id: number, user_id: number, should_delete_clips: boolean, uris: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos?should_delete_clips=' + should_delete_clips + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a project
		 * This method gets all the videos that belong to the specified project.
		 * Get users/{user_id}/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_project_videosSort} sort The way to sort the results.
		 * @return {Array<Video>} The videos were returned.
		 */
		Get_project_videos(project_id: number, user_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_project_videosSort): Observable<Array<Video>> {
			return this.http.get<Array<Video>>(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Add a list of videos to a project
		 * This method adds multiple videos to the specified project.
		 * Put users/{user_id}/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {string} uris A comma-separated list of video URIs to add.
		 * @return {void} 
		 */
		Add_videos_to_project(project_id: number, user_id: number, uris: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos?uris=' + (uris == null ? '' : encodeURIComponent(uris)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific video from a project
		 * This method removes a single video from the specified project.
		 * Delete users/{user_id}/projects/{project_id}/videos/{video_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Remove_video_from_project(project_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to a project
		 * This method adds a single video to the specified project.
		 * Put users/{user_id}/projects/{project_id}/videos/{video_id}
		 * @param {number} project_id The ID of the project.
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_project(project_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete a user's streaming upload
		 * Delete users/{user_id}/uploads/{upload}
		 * @param {number} upload The ID of the upload attempt.
		 * @param {number} user_id The ID of the user.
		 * @param {string} signature The crypto signature of the completed upload.
		 * @param {number} video_file_id The ID of the uploaded file.
		 * @return {void} 
		 */
		Complete_streaming_upload(upload: number, user_id: number, signature: string, video_file_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/uploads/' + upload + '?signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&video_file_id=' + video_file_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user's upload attempt
		 * Get users/{user_id}/uploads/{upload}
		 * @param {number} upload The ID of the upload attempt.
		 * @param {number} user_id The ID of the user.
		 * @return {void} The upload attempt was returned.
		 */
		Get_upload_attempt(upload: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/uploads/' + upload, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has uploaded
		 * Get users/{user_id}/videos
		 * @param {number} user_id The ID of the user.
		 * @param {string} containing_uri The page that contains the video URI. Only available when not paired with `query`.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_videos_alt1Filter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {boolean} filter_playable Whether to filter by all playable videos or by all videos that are not  playable.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos(user_id: number, containing_uri: string, direction: Get_categoriesDirection, filter: Get_videos_alt1Filter, filter_embeddable: boolean, filter_playable: boolean, page: number, per_page: number, query: string, sort: Get_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&filter_playable=' + filter_playable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user owns a video
		 * Get users/{user_id}/videos/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The user owns the video.
		 */
		Check_if_user_owns_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a user's Watch Later queue
		 * Get users/{user_id}/watchlater
		 * @param {number} user_id The ID of the user.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_watch_later_queue(user_id: number, direction: Get_categoriesDirection, filter: Get_channel_videosFilter, filter_embeddable: boolean, page: number, per_page: number, query: string, sort: Get_group_videosSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/watchlater?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a user's Watch Later queue
		 * Delete users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_from_watch_later(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has added a specific video to their Watch Later queue
		 * Get users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video appears in the user's Watch Later queue.
		 */
		Check_watch_later_queue(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a user's Watch Later queue
		 * Put users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_to_watch_later(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/watchlater/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for videos
		 * Get videos
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Search_videosFilter} filter The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.
		 * @param {string} links A comma-separated list of video URLs to find.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query Search query.
		 * @param {Search_videosSort} sort The way to sort the results.
		 * @param {string} uris The comma-separated list of videos to find.
		 * @return {void} The search results were returned.
		 */
		Search_videos(direction: Get_categoriesDirection, filter: Search_videosFilter, links: string, page: number, per_page: number, query: string, sort: Search_videosSort, uris: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos?direction=' + direction + '&filter=' + filter + '&links=' + (links == null ? '' : encodeURIComponent(links)) + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video
		 * Delete videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video
		 * Get videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 * @return {void} The video was returned.
		 */
		Get_video(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels to which a user can add or remove a specific video
		 * Get videos/{video_id}/available_channels
		 * @param {number} video_id The ID of the video.
		 * @return {void} The channels were returned.
		 */
		Get_available_video_channels(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/available_channels', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories to which a video belongs
		 * Get videos/{video_id}/categories
		 * @param {number} video_id The ID of the video.
		 * @return {void} The categories were returned.
		 */
		Get_video_categories(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/categories', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the comments on a video
		 * Get videos/{video_id}/comments
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The comments were returned.
		 */
		Get_comments(video_id: number, direction: Get_categoriesDirection, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video comment
		 * Delete videos/{video_id}/comments/{comment_id}
		 * @param {number} comment_id The ID of the comment.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_comment(comment_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video comment
		 * Get videos/{video_id}/comments/{comment_id}
		 * @param {number} comment_id The ID of the comment.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The comment was returned.
		 */
		Get_comment(comment_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the replies to a video comment
		 * Get videos/{video_id}/comments/{comment_id}/replies
		 * @param {number} comment_id The ID of the comment.
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The replies were returned.
		 */
		Get_comment_replies(comment_id: number, video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id + '/replies?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the credited users in a video
		 * Get videos/{video_id}/credits
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_credits(video_id: number, direction: Get_categoriesDirection, page: number, per_page: number, query: string, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/credits?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a credit for a user in a video
		 * Delete videos/{video_id}/credits/{credit_id}
		 * @param {number} credit_id The ID of the credit.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_credit(credit_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/credits/' + credit_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific credited user in a video
		 * Get videos/{video_id}/credits/{credit_id}
		 * @param {number} credit_id The ID of the credit.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The credit was returned.
		 */
		Get_video_credit(credit_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/credits/' + credit_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who have liked a video
		 * Get videos/{video_id}/likes
		 * @param {number} video_id The ID of the video.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_likes(video_id: number, direction: Get_categoriesDirection, page: number, per_page: number, sort: Get_channel_moderatorsSort): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/likes?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the thumbnails of a video
		 * Get videos/{video_id}/pictures
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The thumbnails were returned.
		 */
		Get_video_thumbnails(video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video thumbnail
		 * Delete videos/{video_id}/pictures/{picture_id}
		 * @param {number} picture_id The ID of the picture.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_thumbnail(picture_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/pictures/' + picture_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a video thumbnail
		 * Get videos/{video_id}/pictures/{picture_id}
		 * @param {number} picture_id The ID of the picture.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The thumbnail was returned.
		 */
		Get_video_thumbnail(picture_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/pictures/' + picture_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an embed preset from a video
		 * Delete videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if an embed preset has been added to a video
		 * Get videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Get_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add an embed preset to a video
		 * Put videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the domains on which a video can be embedded
		 * Get videos/{video_id}/privacy/domains
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The domains were returned.
		 */
		Get_video_privacy_domains(video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/privacy/domains?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a video from being embedded on a domain
		 * Delete videos/{video_id}/privacy/domains/{domain}
		 * @param {string} domain The domain name.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_privacy_domain(domain: string, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/privacy/domains/' + (domain == null ? '' : encodeURIComponent(domain)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a video to be embedded on a domain
		 * If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.
		 * Put videos/{video_id}/privacy/domains/{domain}
		 * @param {string} domain The domain name.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Add_video_privacy_domain(domain: string, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/domains/' + (domain == null ? '' : encodeURIComponent(domain)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who can view a user's private videos by default
		 * Get videos/{video_id}/privacy/users
		 * @param {number} video_id The ID of the video.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The users were returned.
		 */
		Get_video_privacy_users(video_id: number, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/privacy/users?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a list of users to view a private video
		 * The body of this request should follow our
		 * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
		 * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
		 * Put videos/{video_id}/privacy/users
		 * @param {number} video_id The ID of the video.
		 * @return {void} The users can now view the private video.
		 */
		Add_video_privacy_users(video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/users', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a user from viewing a private video
		 * Delete videos/{video_id}/privacy/users/{user_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_video_privacy_user(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/privacy/users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a specific user to view a private video
		 * Put videos/{video_id}/privacy/users/{user_id}
		 * @param {number} user_id The ID of the user.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The user can now view the private video.
		 */
		Add_video_privacy_user(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/users/' + user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the tags of a video
		 * Get videos/{video_id}/tags
		 * @param {number} video_id The ID of the video.
		 * @return {void} The tags were returned.
		 */
		Get_video_tags(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a video
		 * Delete videos/{video_id}/tags/{word}
		 * @param {number} video_id The ID of the video.
		 * @param {string} word The tag word.
		 * @return {void} 
		 */
		Delete_video_tag(video_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a tag has been added to a video
		 * Get videos/{video_id}/tags/{word}
		 * @param {number} video_id The ID of the video.
		 * @param {string} word The tag word.
		 * @return {void} 
		 */
		Check_video_for_tag(video_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific tag to a video
		 * Put videos/{video_id}/tags/{word}
		 * @param {number} video_id The ID of the video.
		 * @param {string} word The tag word.
		 * @return {void} 
		 */
		Add_video_tag(video_id: number, word: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/tags/' + (word == null ? '' : encodeURIComponent(word)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the text tracks of a video
		 * Get videos/{video_id}/texttracks
		 * @param {number} video_id The ID of the video.
		 * @return {void} The text tracks were returned.
		 */
		Get_text_tracks(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/texttracks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a text track
		 * Delete videos/{video_id}/texttracks/{texttrack_id}
		 * @param {number} texttrack_id The ID of the text track.
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Delete_text_track(texttrack_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/texttracks/' + texttrack_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific text track
		 * Get videos/{video_id}/texttracks/{texttrack_id}
		 * @param {number} texttrack_id The ID of the text track.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The text track was returned.
		 */
		Get_text_track(texttrack_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/texttracks/' + texttrack_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new custom logo to a video
		 * Post videos/{video_id}/timelinethumbnails
		 * @param {number} video_id The ID of the video.
		 * @return {void} 
		 */
		Create_video_custom_logo(video_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'videos/' + video_id + '/timelinethumbnails', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a custom video logo
		 * Get videos/{video_id}/timelinethumbnails/{thumbnail_id}
		 * @param {number} thumbnail_id The ID of the picture.
		 * @param {number} video_id The ID of the video.
		 * @return {void} The custom logo was returned.
		 */
		Get_video_custom_logo(thumbnail_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/timelinethumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the related videos of a video
		 * Get videos/{video_id}/videos
		 * @param {number} video_id The ID of the video.
		 * @param {Get_related_videosFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 * @return {void} The related videos were returned.
		 */
		Get_related_videos(video_id: number, filter: Get_related_videosFilter, page: number, per_page: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/videos?filter=' + filter + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Get_categoriesDirection { asc = 0, desc = 1 }

	export enum Get_categoriesSort { last_video_featured_time = 0, name = 1 }

	export enum Get_category_channelsSort { alphabetical = 0, date = 1, followers = 2, videos = 3 }

	export enum Get_category_groupsSort { alphabetical = 0, date = 1, members = 2, videos = 3 }

	export enum Get_category_videosFilter { conditional_featured = 0, embeddable = 1 }

	export enum Get_category_videosSort { alphabetical = 0, comments = 1, date = 2, duration = 3, featured = 4, likes = 5, plays = 6, relevant = 7 }

	export enum Get_channelsFilter { featured = 0 }

	export enum Get_channelsSort { alphabetical = 0, date = 1, followers = 2, relevant = 3, videos = 4 }

	export interface Add_channel_categoriesPutBody {

		/**
		 * The array of category URIs to add.
		 * Required
		 */
		channels: Array<string>;
	}

	export enum Get_channel_moderatorsSort { alphabetical = 0, date = 1 }

	export interface Replace_channel_moderatorsPatchBody {

		/**
		 * The URI of the user to add as a moderator.
		 * Required
		 */
		user_uri: string;
	}

	export interface Add_channel_moderatorsPutBody {

		/**
		 * The URI of a user to add as a moderator.
		 * Required
		 */
		user_uri: string;
	}

	export enum Get_channel_subscribersFilter { moderators = 0 }

	export enum Get_channel_videosFilter { embeddable = 0 }

	export enum Get_channel_videosSort { added = 0, alphabetical = 1, comments = 2, date = 3, _default = 4, duration = 5, likes = 6, manual = 7, modified_time = 8, plays = 9 }

	export interface Add_videos_to_channelPutBody {

		/**
		 * The URI of a video to add.
		 * Required
		 */
		video_uri: string;
	}

	export enum Get_group_videosSort { alphabetical = 0, comments = 1, date = 2, duration = 3, likes = 4, plays = 5 }

	export enum Get_languagesFilter { texttracks = 0 }

	export enum Get_albums_alt1Sort { alphabetical = 0, date = 1, duration = 2, videos = 3 }

	export enum Get_album_videos_alt1Sort { alphabetical = 0, comments = 1, date = 2, _default = 3, duration = 4, likes = 5, manual = 6, modified_time = 7, plays = 8 }

	export interface Replace_videos_in_album_alt1PutBody {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: string;
	}

	export interface Set_video_as_album_thumbnail_alt1PostBody {

		/** The video frame time in seconds to use as the album thumbnail. */
		time_code?: number | null;
	}

	export enum Get_category_subscriptions_alt1Sort { alphabetical = 0, date = 1, name = 2 }

	export enum Get_channel_subscriptions_alt1Filter { moderated = 0 }

	export enum Get_feed_alt1Type { appears = 0, category_featured = 1, channel = 2, facebook_feed = 3, following = 4, group = 5, likes = 6, ondemand_publish = 7, share = 8, tagged_with = 9, twitter_timeline = 10, uploads = 11 }

	export enum Get_user_following_alt1Filter { online = 0 }

	export interface Follow_users_alt1PostBody {

		/**
		 * An array of user URIs for the list of users to follow.
		 * Required
		 */
		users: Array<string>;
	}

	export enum Get_user_vods_alt1Sort { added = 0, alphabetical = 1, date = 2, modified_time = 3, name = 4, publish_time = 5, rating = 6 }

	export interface Create_vod_alt1PostBody {

		/**
		 * An array of accepted currencies.
		 * Option descriptions:
		 * * `AUD` - Australian Dollar
		 * * `CAD` - Canadian Dollar
		 * * `CHF` - Swiss Franc
		 * * `DKK` - Danish Krone
		 * * `EUR` - Euro
		 * * `GBP` - British Pound
		 * * `JPY` - Japanese Yen
		 * * `KRW` - South Korean Won
		 * * `NOK` - Norwegian Krone
		 * * `PLN` - Polish Zloty
		 * * `SEK` - Swedish Krona
		 * * `USD` - US Dollar
		 */
		accepted_currencies?: Create_vod_alt1PostBodyAccepted_currencies | null;
		buy?: Create_vod_alt1PostBodyBuy | null;

		/**
		 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
		 * Required
		 */
		content_rating: Content_ratingCode;

		/**
		 * The description of the On Demand page.
		 * Required
		 */
		description: string;

		/** The custom domain of the On Demand page. */
		domain_link?: string | null;
		episodes?: Create_vod_alt1PostBodyEpisodes | null;

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link?: string | null;

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: string;
		rent?: Create_vod_alt1PostBodyRent | null;
		subscription?: Create_vod_alt1PostBodySubscription | null;

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: On_demand_pageType;
	}

	export enum Create_vod_alt1PostBodyAccepted_currencies { AUD = 0, CAD = 1, CHF = 2, DKK = 3, EUR = 4, GBP = 5, JPY = 6, KRW = 7, NOK = 8, PLN = 9, SEK = 10, USD = 11 }

	export interface Create_vod_alt1PostBodyBuy {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active?: boolean | null;

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download?: boolean | null;
		price?: Create_vod_alt1PostBodyBuyPrice | null;
	}

	export interface Create_vod_alt1PostBodyBuyPrice {

		/** The purchase price of this video in AUD. */
		AUD?: number | null;

		/** The purchase price of this video in CAD. */
		CAD?: number | null;

		/** The purchase price of this video in CHF. */
		CHF?: number | null;

		/** The purchase price of this video in DKK. */
		DKK?: number | null;

		/** The purchase price of this video in EUR. */
		EUR?: number | null;

		/** The purchase price of this video in GBP. */
		GBP?: number | null;

		/** The purchase price of this video in JPY. */
		JPY?: number | null;

		/** The purchase price of this video in KRW. */
		KRW?: number | null;

		/** The purchase price of this video in NOK. */
		NOK?: number | null;

		/** The purchase price of this video in PLN. */
		PLN?: number | null;

		/** The purchase price of this video in SEK. */
		SEK?: number | null;

		/** The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`. */
		USD?: number | null;
	}

	export interface Create_vod_alt1PostBodyEpisodes {
		buy?: Create_vod_alt1PostBodyEpisodesBuy | null;
		rent?: Create_vod_alt1PostBodyEpisodesRent | null;
	}

	export interface Create_vod_alt1PostBodyEpisodesBuy {

		/** Whether episodes can be bought. */
		active?: boolean | null;

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download?: boolean | null;
		price?: Create_vod_alt1PostBodyEpisodesBuyPrice | null;
	}

	export interface Create_vod_alt1PostBodyEpisodesBuyPrice {

		/** The purchase price per episode. *Required if `episodes.buy.active` is true. */
		USD?: number | null;
	}

	export interface Create_vod_alt1PostBodyEpisodesRent {

		/** Whether episodes can be rented */
		active?: boolean | null;

		/** The period in which this episode can be rented for. */
		period?: Create_vod_alt1PostBodyEpisodesRentPeriod | null;
		price?: Create_vod_alt1PostBodyEpisodesRentPrice | null;
	}

	export enum Create_vod_alt1PostBodyEpisodesRentPeriod { _1_week = 0, _1_year = 1, _24_hour = 2, _3_month = 3, _30_day = 4, _48_hour = 5, _6_month = 6, _72_hour = 7 }

	export interface Create_vod_alt1PostBodyEpisodesRentPrice {

		/** The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true. */
		USD?: number | null;
	}

	export interface Create_vod_alt1PostBodyRent {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active?: boolean | null;

		/** The period in which this can be rented for. */
		period?: Create_vod_alt1PostBodyRentPeriod | null;
		price?: Create_vod_alt1PostBodyRentPrice | null;
	}

	export enum Create_vod_alt1PostBodyRentPeriod { _1_week = 0, _1_year = 1, _24_hour = 2, _3_month = 3, _30_day = 4, _48_hour = 5, _6_month = 6, _72_hour = 7 }

	export interface Create_vod_alt1PostBodyRentPrice {

		/** The rental price of this video in AUD. */
		AUD?: number | null;

		/** The rental price of this video in CAD. */
		CAD?: number | null;

		/** The rental price of this video in CHF. */
		CHF?: number | null;

		/** The rental price of this video in DKK. */
		DKK?: number | null;

		/** The rental price of this video in EUR. */
		EUR?: number | null;

		/** The rental price of this video in GBP. */
		GBP?: number | null;

		/** The rental price of this video in JPY. */
		JPY?: number | null;

		/** The rental price of this video in KRW. */
		KRW?: number | null;

		/** The rental price of this video in NOK. */
		NOK?: number | null;

		/** The rental price of this video in PLN. */
		PLN?: number | null;

		/** The rental price of this video in SEK. */
		SEK?: number | null;

		/** The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`. */
		USD?: number | null;
	}

	export interface Create_vod_alt1PostBodySubscription {
		monthly?: Create_vod_alt1PostBodySubscriptionMonthly | null;
	}

	export interface Create_vod_alt1PostBodySubscriptionMonthly {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active?: boolean | null;
		price?: Create_vod_alt1PostBodySubscriptionMonthlyPrice | null;
	}

	export interface Create_vod_alt1PostBodySubscriptionMonthlyPrice {

		/** The monthly subscription price in USD. *Required if `subscription.active` is true. */
		USD?: number | null;
	}

	export enum Get_vod_purchasesFilter { all = 0, expiring_soon = 1, film = 2, important = 3, purchased = 4, rented = 5, series = 6, subscription = 7, unwatched = 8, watched = 9 }

	export enum Get_vod_purchasesSort { added = 0, alphabetical = 1, date = 2, name = 3, purchase_time = 4, rating = 5, release_date = 6 }

	export enum Get_portfolio_videos_alt1Sort { alphabetical = 0, comments = 1, date = 2, _default = 3, likes = 4, manual = 5, plays = 6 }

	export enum Get_projects_alt1Sort { date = 0, _default = 1, modified_time = 2, name = 3 }

	export interface Create_project_alt1PostBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}

	export interface Edit_project_alt1PatchBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}

	export enum Get_project_videos_alt1Sort { alphabetical = 0, date = 1, _default = 2, duration = 3, last_user_action_event_date = 4 }

	export enum Get_videos_alt1Filter { app_only = 0, embeddable = 1, featured = 2, playable = 3 }

	export enum Get_videos_alt1Sort { alphabetical = 0, comments = 1, date = 2, _default = 3, duration = 4, last_user_action_event_date = 5, likes = 6, modified_time = 7, plays = 8 }

	export enum Get_genre_vodsFilter { country = 0, my_region = 1 }

	export enum Get_genre_vodsSort { alphabetical = 0, date = 1, name = 2, publish_time = 3, videos = 4 }

	export enum Get_vod_promotionsFilter { batch = 0, _default = 1, single = 2, vip = 3 }

	export enum Get_vod_seasonsFilter { viewable = 0 }

	export enum Get_vod_seasonsSort { date = 0, manual = 1 }

	export enum Get_vod_season_videosSort { date = 0, _default = 1, manual = 2, name = 3, purchase_time = 4, release_date = 5 }

	export enum Get_vod_videosFilter { all = 0, buy = 1, expiring_soon = 2, extra = 3, main = 4, main_viewable = 5, rent = 6, trailer = 7, unwatched = 8, viewable = 9, watched = 10 }

	export enum Get_vod_videosSort { date = 0, _default = 1, episode = 2, manual = 3, name = 4, purchase_time = 5, release_date = 6 }

	export enum Get_videos_with_tagSort { created_time = 0, duration = 1, name = 2 }

	export enum Get_album_videosSort { alphabetical = 0, comments = 1, date = 2, _default = 3, duration = 4, likes = 5, manual = 6, modified_time = 7, plays = 8 }

	export interface Replace_videos_in_albumPutBody {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: string;
	}

	export interface Set_video_as_album_thumbnailPostBody {

		/** The video frame time in seconds to use as the album thumbnail. */
		time_code?: number | null;
	}

	export interface Follow_usersPostBody {

		/**
		 * An array of user URIs for the list of users to follow.
		 * Required
		 */
		users: Array<string>;
	}

	export enum Get_user_vodsSort { added = 0, alphabetical = 1, date = 2, modified_time = 3, name = 4, publish_time = 5, rating = 6 }

	export interface Create_vodPostBody {

		/**
		 * An array of accepted currencies.
		 * Option descriptions:
		 * * `AUD` - Australian Dollar
		 * * `CAD` - Canadian Dollar
		 * * `CHF` - Swiss Franc
		 * * `DKK` - Danish Krone
		 * * `EUR` - Euro
		 * * `GBP` - British Pound
		 * * `JPY` - Japanese Yen
		 * * `KRW` - South Korean Won
		 * * `NOK` - Norwegian Krone
		 * * `PLN` - Polish Zloty
		 * * `SEK` - Swedish Krona
		 * * `USD` - US Dollar
		 */
		accepted_currencies?: Create_vod_alt1PostBodyAccepted_currencies | null;
		buy?: Create_vodPostBodyBuy | null;

		/**
		 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
		 * Required
		 */
		content_rating: Content_ratingCode;

		/**
		 * The description of the On Demand page.
		 * Required
		 */
		description: string;

		/** The custom domain of the On Demand page. */
		domain_link?: string | null;
		episodes?: Create_vodPostBodyEpisodes | null;

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link?: string | null;

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: string;
		rent?: Create_vodPostBodyRent | null;
		subscription?: Create_vodPostBodySubscription | null;

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: On_demand_pageType;
	}

	export interface Create_vodPostBodyBuy {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active?: boolean | null;

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download?: boolean | null;
		price?: Create_vodPostBodyBuyPrice | null;
	}

	export interface Create_vodPostBodyBuyPrice {

		/** The purchase price of this video in AUD. */
		AUD?: number | null;

		/** The purchase price of this video in CAD. */
		CAD?: number | null;

		/** The purchase price of this video in CHF. */
		CHF?: number | null;

		/** The purchase price of this video in DKK. */
		DKK?: number | null;

		/** The purchase price of this video in EUR. */
		EUR?: number | null;

		/** The purchase price of this video in GBP. */
		GBP?: number | null;

		/** The purchase price of this video in JPY. */
		JPY?: number | null;

		/** The purchase price of this video in KRW. */
		KRW?: number | null;

		/** The purchase price of this video in NOK. */
		NOK?: number | null;

		/** The purchase price of this video in PLN. */
		PLN?: number | null;

		/** The purchase price of this video in SEK. */
		SEK?: number | null;

		/** The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`. */
		USD?: number | null;
	}

	export interface Create_vodPostBodyEpisodes {
		buy?: Create_vodPostBodyEpisodesBuy | null;
		rent?: Create_vodPostBodyEpisodesRent | null;
	}

	export interface Create_vodPostBodyEpisodesBuy {

		/** Whether episodes can be bought. */
		active?: boolean | null;

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download?: boolean | null;
		price?: Create_vodPostBodyEpisodesBuyPrice | null;
	}

	export interface Create_vodPostBodyEpisodesBuyPrice {

		/** The purchase price per episode. *Required if `episodes.buy.active` is true. */
		USD?: number | null;
	}

	export interface Create_vodPostBodyEpisodesRent {

		/** Whether episodes can be rented */
		active?: boolean | null;

		/** The period in which this episode can be rented for. */
		period?: Create_vodPostBodyEpisodesRentPeriod | null;
		price?: Create_vodPostBodyEpisodesRentPrice | null;
	}

	export enum Create_vodPostBodyEpisodesRentPeriod { _1_week = 0, _1_year = 1, _24_hour = 2, _3_month = 3, _30_day = 4, _48_hour = 5, _6_month = 6, _72_hour = 7 }

	export interface Create_vodPostBodyEpisodesRentPrice {

		/** The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true. */
		USD?: number | null;
	}

	export interface Create_vodPostBodyRent {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active?: boolean | null;

		/** The period in which this can be rented for. */
		period?: Create_vodPostBodyRentPeriod | null;
		price?: Create_vodPostBodyRentPrice | null;
	}

	export enum Create_vodPostBodyRentPeriod { _1_week = 0, _1_year = 1, _24_hour = 2, _3_month = 3, _30_day = 4, _48_hour = 5, _6_month = 6, _72_hour = 7 }

	export interface Create_vodPostBodyRentPrice {

		/** The rental price of this video in AUD. */
		AUD?: number | null;

		/** The rental price of this video in CAD. */
		CAD?: number | null;

		/** The rental price of this video in CHF. */
		CHF?: number | null;

		/** The rental price of this video in DKK. */
		DKK?: number | null;

		/** The rental price of this video in EUR. */
		EUR?: number | null;

		/** The rental price of this video in GBP. */
		GBP?: number | null;

		/** The rental price of this video in JPY. */
		JPY?: number | null;

		/** The rental price of this video in KRW. */
		KRW?: number | null;

		/** The rental price of this video in NOK. */
		NOK?: number | null;

		/** The rental price of this video in PLN. */
		PLN?: number | null;

		/** The rental price of this video in SEK. */
		SEK?: number | null;

		/** The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`. */
		USD?: number | null;
	}

	export interface Create_vodPostBodySubscription {
		monthly?: Create_vodPostBodySubscriptionMonthly | null;
	}

	export interface Create_vodPostBodySubscriptionMonthly {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active?: boolean | null;
		price?: Create_vodPostBodySubscriptionMonthlyPrice | null;
	}

	export interface Create_vodPostBodySubscriptionMonthlyPrice {

		/** The monthly subscription price in USD. *Required if `subscription.active` is true. */
		USD?: number | null;
	}

	export enum Get_portfolio_videosSort { alphabetical = 0, comments = 1, date = 2, _default = 3, likes = 4, manual = 5, plays = 6 }

	export enum Get_projectsSort { date = 0, _default = 1, modified_time = 2, name = 3 }

	export interface Create_projectPostBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}

	export interface Edit_projectPatchBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}

	export enum Get_project_videosSort { alphabetical = 0, date = 1, _default = 2, duration = 3, last_user_action_event_date = 4 }

	export enum Get_videosSort { alphabetical = 0, comments = 1, date = 2, _default = 3, duration = 4, last_user_action_event_date = 5, likes = 6, modified_time = 7, plays = 8 }

	export enum Search_videosFilter { CC = 0, CC_BY = 1, CC_BY_NC = 2, CC_BY_NC_ND = 3, CC_BY_NC_SA = 4, CC_BY_ND = 5, CC_BY_SA = 6, CC0 = 7, categories = 8, duration = 9, in_progress = 10, minimum_likes = 11, trending = 12, upload_date = 13 }

	export enum Search_videosSort { alphabetical = 0, comments = 1, date = 2, duration = 3, likes = 4, plays = 5, relevant = 6 }

	export enum Get_related_videosFilter { related = 0 }

}

