import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity_3_1 {

		/** The category that this event occurred for. This will be preset for only "category" activity types. */
		category?: Category;

		/** The channel that this event occurred for. This will be present for only "channel" activity types. */
		channel?: Channel;

		/**
		 * Video associated with ths activity.
		 * Required
		 */
		clip: Video;

		/** The group that this event occurred for. This will be present for only "group" activity types. */
		group?: Group;

		/**
		 * The activity's metadata.
		 * Required
		 */
		metadata: Activity_3_1Metadata;

		/** The tag that this event occurred for. This will be present for only "tag" activity types. */
		tag?: Tag;

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
		user?: User;
	}
	export interface Activity_3_1FormProperties {

		/**
		 * Time that the event occurred.
		 * Required
		 */
		time: FormControl<string | null | undefined>,

		/**
		 * Activity type
		 * Required
		 */
		type: FormControl<Activity_3_1Type | null | undefined>,
	}
	export function CreateActivity_3_1FormGroup() {
		return new FormGroup<Activity_3_1FormProperties>({
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Activity_3_1Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Category {

		/** The active icon for the category. */
		icon?: Picture;

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
		CategorySubcategories?: Array<CategorySubcategories>;

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
	export interface CategoryFormProperties {

		/**
		 * The last time, in ISO 8601 format, that a video was featured.
		 * Required
		 */
		last_video_featured_time: FormControl<string | null | undefined>,

		/**
		 * The URL to access the category in a browser.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The display name that identifies the category.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource key of the category.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * Whether the category isn't a subcategory of another category.
		 * Required
		 */
		top_level: FormControl<boolean | null | undefined>,

		/**
		 * The unique identifier to access the category resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			last_video_featured_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			top_level: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface PictureFormProperties {

		/**
		 * Whether this picture is the active picture for its parent resource.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/** The upload URL for the picture. This field appears when you create the picture resource for the first time. */
		link: FormControl<string | null | undefined>,

		/**
		 * The picture's resource key string.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The type of the picture:
		 * Option descriptions:
		 * * `caution` - An image that is appropriate for all ages.
		 * * `custom` - A custom image for the video.
		 * * `default` - The default image for the video.
		 * Required
		 */
		type: FormControl<PictureType | null | undefined>,

		/**
		 * The picture's URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePictureFormGroup() {
		return new FormGroup<PictureFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PictureType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PictureSizes {

		/**
		 * The height of the image.
		 * Required
		 * Type: double
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
		 * Type: double
		 */
		width: number;
	}
	export interface PictureSizesFormProperties {

		/**
		 * The height of the image.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The direct link to the image.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/** The direct link to the image with a play button overlay. */
		link_with_play_button: FormControl<string | null | undefined>,

		/**
		 * The width of the image.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePictureSizesFormGroup() {
		return new FormGroup<PictureSizesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link_with_play_button: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PictureType { caution = 'caution', custom = 'custom', default = 'default' }

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
	export interface CategoryMetadataFormProperties {
	}
	export function CreateCategoryMetadataFormGroup() {
		return new FormGroup<CategoryMetadataFormProperties>({
		});

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
	export interface CategoryMetadataConnectionsFormProperties {
	}
	export function CreateCategoryMetadataConnectionsFormGroup() {
		return new FormGroup<CategoryMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface CategoryMetadataConnectionsChannelsFormProperties {

		/**
		 * The total number of channels on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryMetadataConnectionsChannelsFormGroup() {
		return new FormGroup<CategoryMetadataConnectionsChannelsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface CategoryMetadataConnectionsGroupsFormProperties {

		/**
		 * The total number of groups on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryMetadataConnectionsGroupsFormGroup() {
		return new FormGroup<CategoryMetadataConnectionsGroupsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface CategoryMetadataConnectionsUsersFormProperties {

		/**
		 * The total number of users on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryMetadataConnectionsUsersFormGroup() {
		return new FormGroup<CategoryMetadataConnectionsUsersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface CategoryMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryMetadataConnectionsVideosFormGroup() {
		return new FormGroup<CategoryMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryMetadataInteractions {

		/**
		 * An action indicating if the authenticated user has followed this category.
		 * Required
		 */
		follow: CategoryMetadataInteractionsFollow;
	}
	export interface CategoryMetadataInteractionsFormProperties {
	}
	export function CreateCategoryMetadataInteractionsFormGroup() {
		return new FormGroup<CategoryMetadataInteractionsFormProperties>({
		});

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
	export interface CategoryMetadataInteractionsFollowFormProperties {

		/**
		 * Whether the authenticated user has followed this category.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryMetadataInteractionsFollowFormGroup() {
		return new FormGroup<CategoryMetadataInteractionsFollowFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface CategoryParentFormProperties {

		/**
		 * The URL to access the parent category in a browser.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The display name that identifies the parent category.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique identifier to access the parent of this category resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryParentFormGroup() {
		return new FormGroup<CategoryParentFormProperties>({
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface CategorySubcategoriesFormProperties {

		/**
		 * The URL to access the subcategory in a browser.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The display name that identifies the subcategory.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique identifier to access the subcategory resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCategorySubcategoriesFormGroup() {
		return new FormGroup<CategorySubcategoriesFormProperties>({
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelFormProperties {

		/**
		 * The time in ISO 8601 format when the channel was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * A brief explanation of the channel's content.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The URL to access the channel in a browser.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the album was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The display name that identifies the channel.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The channel resource key.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The unique identifier to access the channel resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelMetadataFormProperties {
	}
	export function CreateChannelMetadataFormGroup() {
		return new FormGroup<ChannelMetadataFormProperties>({
		});

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
	export interface ChannelMetadataConnectionsFormProperties {
	}
	export function CreateChannelMetadataConnectionsFormGroup() {
		return new FormGroup<ChannelMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}
	export interface ChannelMetadataConnectionsPrivacy_usersFormProperties {

		/**
		 * The total number of users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataConnectionsPrivacy_usersFormGroup() {
		return new FormGroup<ChannelMetadataConnectionsPrivacy_usersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface ChannelMetadataConnectionsUsersFormProperties {

		/**
		 * The total number of users on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataConnectionsUsersFormGroup() {
		return new FormGroup<ChannelMetadataConnectionsUsersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface ChannelMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataConnectionsVideosFormGroup() {
		return new FormGroup<ChannelMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelMetadataInteractionsFormProperties {
	}
	export function CreateChannelMetadataInteractionsFormGroup() {
		return new FormGroup<ChannelMetadataInteractionsFormProperties>({
		});

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
	export interface ChannelMetadataInteractionsAdd_moderatorsFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataInteractionsAdd_moderatorsFormGroup() {
		return new FormGroup<ChannelMetadataInteractionsAdd_moderatorsFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelMetadataInteractionsAdd_toFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataInteractionsAdd_toFormGroup() {
		return new FormGroup<ChannelMetadataInteractionsAdd_toFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelMetadataInteractionsFollowFormProperties {

		/**
		 * Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
		 * Option descriptions:
		 * * `moderator` - The authenticated user is a moderator.
		 * * `subscriber` - The authenticated user is a subscriber.
		 * Required
		 */
		type: FormControl<ChannelMetadataInteractionsFollowType | null | undefined>,

		/**
		 * The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataInteractionsFollowFormGroup() {
		return new FormGroup<ChannelMetadataInteractionsFollowFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ChannelMetadataInteractionsFollowType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChannelMetadataInteractionsFollowType { moderator = 'moderator', subscriber = 'subscriber' }

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
	export interface ChannelMetadataInteractionsModerate_videosFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelMetadataInteractionsModerate_videosFormGroup() {
		return new FormGroup<ChannelMetadataInteractionsModerate_videosFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ChannelPrivacyFormProperties {

		/**
		 * Who can view the channel:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the channel.
		 * * `moderators` - Only moderators can view the channel.
		 * * `users` - Only registered users can view the channel.
		 * Required
		 */
		view: FormControl<ChannelPrivacyView | null | undefined>,
	}
	export function CreateChannelPrivacyFormGroup() {
		return new FormGroup<ChannelPrivacyFormProperties>({
			view: new FormControl<ChannelPrivacyView | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChannelPrivacyView { anybody = 'anybody', moderators = 'moderators', users = 'users' }

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
	export interface TagFormProperties {

		/**
		 * The normalized canonical tag name.
		 * Required
		 */
		canonical: FormControl<string | null | undefined>,

		/**
		 * The tag value.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The tag's resource key string.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The canonical relative URI of the tag.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			canonical: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagMetadata {

		/**
		 * A collection of information that is connected to this resource.
		 * Required
		 */
		connections: TagMetadataConnections;
	}
	export interface TagMetadataFormProperties {
	}
	export function CreateTagMetadataFormGroup() {
		return new FormGroup<TagMetadataFormProperties>({
		});

	}

	export interface TagMetadataConnections {

		/**
		 * Information about the videos related to this tag.
		 * Required
		 */
		videos: TagMetadataConnectionsVideos;
	}
	export interface TagMetadataConnectionsFormProperties {
	}
	export function CreateTagMetadataConnectionsFormGroup() {
		return new FormGroup<TagMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface TagMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTagMetadataConnectionsVideosFormGroup() {
		return new FormGroup<TagMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		content_filter?: Array<string>;

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
		preferences?: UserPreferences;

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
	export interface UserFormProperties {

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
		account: FormControl<UserAccount | null | undefined>,

		/**
		 * The user's bio.
		 * Required
		 */
		bio: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user account was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/** The user's email address. This data requires a bearer token with the `email` scope. */
		email: FormControl<string | null | undefined>,

		/**
		 * The absolute URL of this user's profile page.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The user's location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The user's display name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The user's resource key string.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The user's canonical relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			account: new FormControl<UserAccount | null | undefined>(undefined, [Validators.required]),
			bio: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserAccount { basic = 'basic', business = 'business', live_business = 'live_business', live_premium = 'live_premium', live_pro = 'live_pro', plus = 'plus', pro = 'pro', pro_unlimited = 'pro_unlimited', producer = 'producer' }

	export interface UserMetadata {

		/**
		 * The list of resource URIs related to the user.
		 * Required
		 */
		connections: UserMetadataConnections;

		/** Required */
		interactions: UserMetadataInteractions;
	}
	export interface UserMetadataFormProperties {
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
		});

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
	export interface UserMetadataConnectionsFormProperties {
	}
	export function CreateUserMetadataConnectionsFormGroup() {
		return new FormGroup<UserMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsAlbumsFormProperties {

		/**
		 * The total number of albums on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsAlbumsFormGroup() {
		return new FormGroup<UserMetadataConnectionsAlbumsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsAppearancesFormProperties {

		/**
		 * The total number of appearances on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsAppearancesFormGroup() {
		return new FormGroup<UserMetadataConnectionsAppearancesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsBlockFormProperties {

		/**
		 * The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsBlockFormGroup() {
		return new FormGroup<UserMetadataConnectionsBlockFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsCategoriesFormProperties {

		/**
		 * The total number of categories on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsCategoriesFormGroup() {
		return new FormGroup<UserMetadataConnectionsCategoriesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsChannelsFormProperties {

		/**
		 * The total number of channels on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsChannelsFormGroup() {
		return new FormGroup<UserMetadataConnectionsChannelsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface UserMetadataConnectionsFeedFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsFeedFormGroup() {
		return new FormGroup<UserMetadataConnectionsFeedFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsFoldersFormProperties {

		/**
		 * The total number of folders on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsFoldersFormGroup() {
		return new FormGroup<UserMetadataConnectionsFoldersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsFollowersFormProperties {

		/**
		 * The total number of followers on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsFollowersFormGroup() {
		return new FormGroup<UserMetadataConnectionsFollowersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsFollowingFormProperties {

		/**
		 * The total number of users on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsFollowingFormGroup() {
		return new FormGroup<UserMetadataConnectionsFollowingFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsGroupsFormProperties {

		/**
		 * The total number of groups on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsGroupsFormGroup() {
		return new FormGroup<UserMetadataConnectionsGroupsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsLikesFormProperties {

		/**
		 * The total number of likes on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsLikesFormGroup() {
		return new FormGroup<UserMetadataConnectionsLikesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsModerated_channelsFormProperties {

		/**
		 * The total number of channels on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsModerated_channelsFormGroup() {
		return new FormGroup<UserMetadataConnectionsModerated_channelsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsPicturesFormProperties {

		/**
		 * The total number of pictures on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsPicturesFormGroup() {
		return new FormGroup<UserMetadataConnectionsPicturesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsPortfoliosFormProperties {

		/**
		 * The total number of portfolios on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsPortfoliosFormGroup() {
		return new FormGroup<UserMetadataConnectionsPortfoliosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsRecommended_channelsFormProperties {

		/**
		 * The total number of channels on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsRecommended_channelsFormGroup() {
		return new FormGroup<UserMetadataConnectionsRecommended_channelsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsRecommended_usersFormProperties {

		/**
		 * The total number of users on this connection. This data requires a bearer token with the `private` scope.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsRecommended_usersFormGroup() {
		return new FormGroup<UserMetadataConnectionsRecommended_usersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsSharedFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsSharedFormGroup() {
		return new FormGroup<UserMetadataConnectionsSharedFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsVideosFormGroup() {
		return new FormGroup<UserMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsWatched_videosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsWatched_videosFormGroup() {
		return new FormGroup<UserMetadataConnectionsWatched_videosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface UserMetadataConnectionsWatchlaterFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataConnectionsWatchlaterFormGroup() {
		return new FormGroup<UserMetadataConnectionsWatchlaterFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserMetadataInteractions {
		add_privacy_user?: UserMetadataInteractionsAdd_privacy_user;

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
	export interface UserMetadataInteractionsFormProperties {
	}
	export function CreateUserMetadataInteractionsFormGroup() {
		return new FormGroup<UserMetadataInteractionsFormProperties>({
		});

	}

	export interface UserMetadataInteractionsAdd_privacy_user {

		/** An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope. */
		options?: Array<string>;

		/** The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope. */
		uri?: string | null;
	}
	export interface UserMetadataInteractionsAdd_privacy_userFormProperties {

		/** The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataInteractionsAdd_privacy_userFormGroup() {
		return new FormGroup<UserMetadataInteractionsAdd_privacy_userFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UserMetadataInteractionsBlockFormProperties {

		/**
		 * Whether a user is blocking the current user.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the block occurred, or the null value if no block exists.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The URI to block or unblock the user.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataInteractionsBlockFormGroup() {
		return new FormGroup<UserMetadataInteractionsBlockFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface UserMetadataInteractionsFollowFormProperties {

		/**
		 * Whether a user is following the current user.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The URI to follow the user.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataInteractionsFollowFormGroup() {
		return new FormGroup<UserMetadataInteractionsFollowFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface UserMetadataInteractionsReportFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataInteractionsReportFormGroup() {
		return new FormGroup<UserMetadataInteractionsReportFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserPreferences {
		videos?: UserPreferencesVideos;
	}
	export interface UserPreferencesFormProperties {
	}
	export function CreateUserPreferencesFormGroup() {
		return new FormGroup<UserPreferencesFormProperties>({
		});

	}

	export interface UserPreferencesVideos {
		privacy?: UserPreferencesVideosPrivacy;
	}
	export interface UserPreferencesVideosFormProperties {
	}
	export function CreateUserPreferencesVideosFormGroup() {
		return new FormGroup<UserPreferencesVideosFormProperties>({
		});

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
	export interface UserPreferencesVideosPrivacyFormProperties {

		/** Whether other users can add the user's videos. */
		add: FormControl<boolean | null | undefined>,

		/**
		 * The user's privacy preference for comments:
		 * Option descriptions:
		 * * `anybody` - Anyone can comment on the user's videos.
		 * * `contacts` - Only contacts can comment on the user's videos.
		 * * `nobody` - No one can comment on the user's videos.
		 */
		comments: FormControl<UserPreferencesVideosPrivacyComments | null | undefined>,

		/** Whether other users can download the user's videos. */
		download: FormControl<boolean | null | undefined>,

		/**
		 * The user's privacy preference for embeds:
		 * Option descriptions:
		 * * `private` - Only the user can embed their own videos.
		 * * `public` - Anyone can embed the user's videos.
		 * * `whitelist` - Only those on the whitelist can embed the user's videos.
		 */
		embed: FormControl<UserPreferencesVideosPrivacyEmbed | null | undefined>,

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
		view: FormControl<UserPreferencesVideosPrivacyView | null | undefined>,
	}
	export function CreateUserPreferencesVideosPrivacyFormGroup() {
		return new FormGroup<UserPreferencesVideosPrivacyFormProperties>({
			add: new FormControl<boolean | null | undefined>(undefined),
			comments: new FormControl<UserPreferencesVideosPrivacyComments | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined),
			embed: new FormControl<UserPreferencesVideosPrivacyEmbed | null | undefined>(undefined),
			view: new FormControl<UserPreferencesVideosPrivacyView | null | undefined>(undefined),
		});

	}

	export enum UserPreferencesVideosPrivacyComments { anybody = 'anybody', contacts = 'contacts', nobody = 'nobody' }

	export enum UserPreferencesVideosPrivacyEmbed { private = 'private', public = 'public', whitelist = 'whitelist' }

	export enum UserPreferencesVideosPrivacyView { anybody = 'anybody', contacts = 'contacts', disable = 'disable', nobody = 'nobody', password = 'password', unlisted = 'unlisted', users = 'users' }

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
	export interface UserUpload_quotaFormProperties {
	}
	export function CreateUserUpload_quotaFormGroup() {
		return new FormGroup<UserUpload_quotaFormProperties>({
		});

	}

	export interface UserUpload_quotaLifetime {

		/**
		 * The number of bytes remaining in your lifetime maximum.
		 * Required
		 * Type: double
		 */
		free: number;

		/**
		 * The total number of bytes that you can upload across the lifetime of your account.
		 * Required
		 * Type: double
		 */
		max: number;

		/**
		 * The number of bytes that you've already uploaded against your lifetime limit.
		 * Required
		 * Type: double
		 */
		used: number;
	}
	export interface UserUpload_quotaLifetimeFormProperties {

		/**
		 * The number of bytes remaining in your lifetime maximum.
		 * Required
		 * Type: double
		 */
		free: FormControl<number | null | undefined>,

		/**
		 * The total number of bytes that you can upload across the lifetime of your account.
		 * Required
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The number of bytes that you've already uploaded against your lifetime limit.
		 * Required
		 * Type: double
		 */
		used: FormControl<number | null | undefined>,
	}
	export function CreateUserUpload_quotaLifetimeFormGroup() {
		return new FormGroup<UserUpload_quotaLifetimeFormProperties>({
			free: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserUpload_quotaPeriodic {

		/**
		 * The number of bytes remaining in your upload quota for the current period.
		 * Required
		 * Type: double
		 */
		free: number;

		/**
		 * The total number of bytes that you can upload per period.
		 * Required
		 * Type: double
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
		 * Type: double
		 */
		used: number;
	}
	export interface UserUpload_quotaPeriodicFormProperties {

		/**
		 * The number of bytes remaining in your upload quota for the current period.
		 * Required
		 * Type: double
		 */
		free: FormControl<number | null | undefined>,

		/**
		 * The total number of bytes that you can upload per period.
		 * Required
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The time in ISO 8601 format when your upload quota resets.
		 * Required
		 */
		reset_date: FormControl<string | null | undefined>,

		/**
		 * The number of bytes that you've already uploaded against your quota in the current period.
		 * Required
		 * Type: double
		 */
		used: FormControl<number | null | undefined>,
	}
	export function CreateUserUpload_quotaPeriodicFormGroup() {
		return new FormGroup<UserUpload_quotaPeriodicFormProperties>({
			free: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reset_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			used: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserUpload_quotaSpace {

		/**
		 * The number of bytes remaining in your upload quota.
		 * Required
		 * Type: double
		 */
		free: number;

		/**
		 * The maximum number of bytes allotted to your upload quota.
		 * Required
		 * Type: double
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
		 * Type: double
		 */
		used: number;
	}
	export interface UserUpload_quotaSpaceFormProperties {

		/**
		 * The number of bytes remaining in your upload quota.
		 * Required
		 * Type: double
		 */
		free: FormControl<number | null | undefined>,

		/**
		 * The maximum number of bytes allotted to your upload quota.
		 * Required
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.
		 * Required
		 */
		showing: FormControl<UserUpload_quotaSpaceShowing | null | undefined>,

		/**
		 * The number of bytes that you've already uploaded against your quota.
		 * Required
		 * Type: double
		 */
		used: FormControl<number | null | undefined>,
	}
	export function CreateUserUpload_quotaSpaceFormGroup() {
		return new FormGroup<UserUpload_quotaSpaceFormProperties>({
			free: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			showing: new FormControl<UserUpload_quotaSpaceShowing | null | undefined>(undefined, [Validators.required]),
			used: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserUpload_quotaSpaceShowing { lifetime = 'lifetime', periodic = 'periodic' }

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
	export interface UserWebsitesFormProperties {

		/**
		 * The website's description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The URL of the website.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The name of the website.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWebsitesFormGroup() {
		return new FormGroup<UserWebsitesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
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
		 * Type: double
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
		parent_folder?: Project;

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
		 * Type: double
		 */
		width: number;
	}
	export interface VideoFormProperties {

		/**
		 * The time in ISO 8601 format when the video was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * A brief explanation of the video's content.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The video's duration in seconds.
		 * Required
		 * Type: double
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * The video's height in pixels.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The video's primary language.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** The time in ISO 8601 format when the user last modified the video. */
		last_user_action_event_date: FormControl<string | null | undefined>,

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
		license: FormControl<VideoLicense | null | undefined>,

		/**
		 * The link to the video.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the video metadata was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The video's title.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope. */
		password: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the video was released.
		 * Required
		 */
		release_time: FormControl<string | null | undefined>,

		/**
		 * The resource key string of the video.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

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
		status: FormControl<VideoStatus | null | undefined>,

		/**
		 * The video's canonical relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * The video's width in pixels.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_user_action_event_date: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<VideoLicense | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			release_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<VideoStatus | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoContextFormProperties {

		/**
		 * The contextual action:
		 * Option descriptions:
		 * * `Added to` - An Added To action.
		 * * `Appearance by` - An Appearance By action.
		 * * `Liked by` - A Liked By action.
		 * * `Uploaded by` - An Unloaded By action.
		 * Required
		 */
		action: FormControl<VideoContextAction | null | undefined>,

		/**
		 * The contextual resource: a user, group, or channel representation, or an object of a tag.
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * The contextual resource type.
		 * Required
		 */
		resource_type: FormControl<string | null | undefined>,
	}
	export function CreateVideoContextFormGroup() {
		return new FormGroup<VideoContextFormProperties>({
			action: new FormControl<VideoContextAction | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VideoContextAction { 'Added to' = 'Added to', 'Appearance by' = 'Appearance by', 'Liked by' = 'Liked by', 'Uploaded by' = 'Uploaded by' }

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
	export interface Embed_settingsFormProperties {

		/**
		 * The primary player color, which controls the color of the progress bar, buttons, and more.
		 * Required
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Whether the playbar appears in the embeddable player for this video.
		 * Required
		 */
		playbar: FormControl<boolean | null | undefined>,

		/**
		 * Whether the speed controls appear in the embeddable player for this video.
		 * Required
		 */
		speed: FormControl<boolean | null | undefined>,

		/** The URI of the embed preset. */
		uri: FormControl<string | null | undefined>,

		/**
		 * Whether the volume controls appear in the embeddable player for this video.
		 * Required
		 */
		volume: FormControl<boolean | null | undefined>,
	}
	export function CreateEmbed_settingsFormGroup() {
		return new FormGroup<Embed_settingsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			playbar: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			speed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface Embed_settingsButtonsFormProperties {

		/**
		 * Whether the Embed button appears in the embeddable player for this video.
		 * Required
		 */
		embed: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Fullscreen button appears in the embeddable player for this video.
		 * Required
		 */
		fullscreen: FormControl<boolean | null | undefined>,

		/**
		 * Whether the HD button appears in the embeddable player for this video.
		 * Required
		 */
		hd: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Like button appears in the embeddable player for this video.
		 * Required
		 */
		like: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Scaling button appears in the embeddable player for this video.
		 * Required
		 */
		scaling: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Share button appears in the embeddable player for this video.
		 * Required
		 */
		share: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Watch Later button appears in the embeddable player for this video.
		 * Required
		 */
		watchlater: FormControl<boolean | null | undefined>,
	}
	export function CreateEmbed_settingsButtonsFormGroup() {
		return new FormGroup<Embed_settingsButtonsFormProperties>({
			embed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			fullscreen: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			like: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scaling: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			share: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			watchlater: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface Embed_settingsLogosFormProperties {

		/**
		 * Whether the Vimeo logo appears in the embeddable player for this video.
		 * Required
		 */
		vimeo: FormControl<boolean | null | undefined>,
	}
	export function CreateEmbed_settingsLogosFormGroup() {
		return new FormGroup<Embed_settingsLogosFormProperties>({
			vimeo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface Embed_settingsLogosCustomFormProperties {

		/**
		 * Whether the custom logo appears in the embeddable player.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The URL that loads upon clicking the custom logo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Whether the custom logo appears even when the player interface is hidden.
		 * Required
		 */
		sticky: FormControl<boolean | null | undefined>,
	}
	export function CreateEmbed_settingsLogosCustomFormGroup() {
		return new FormGroup<Embed_settingsLogosCustomFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sticky: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface Embed_settingsTitleFormProperties {

		/**
		 * How the embeddable player handles the video title:
		 * Option descriptions:
		 * * `hide` - The title is hidden.
		 * * `show` - The title is shown.
		 * Required
		 */
		name: FormControl<Embed_settingsTitleName | null | undefined>,

		/**
		 * How the embeddable player handles the video owner's information:
		 * Option descriptions:
		 * * `hide` - The owner's information is hidden.
		 * * `show` - The owner's information is shown.
		 * Required
		 */
		owner: FormControl<Embed_settingsTitleName | null | undefined>,

		/**
		 * How the embeddable player handles the video owner's portrait:
		 * Option descriptions:
		 * * `hide` - The owner's portrait is hidden
		 * * `show` - The owner's portrait is shown.
		 * Required
		 */
		portrait: FormControl<Embed_settingsTitleName | null | undefined>,
	}
	export function CreateEmbed_settingsTitleFormGroup() {
		return new FormGroup<Embed_settingsTitleFormProperties>({
			name: new FormControl<Embed_settingsTitleName | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<Embed_settingsTitleName | null | undefined>(undefined, [Validators.required]),
			portrait: new FormControl<Embed_settingsTitleName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Embed_settingsTitleName { hide = 'hide', show = 'show', user = 'user' }

	export enum VideoLicense { by = 'by', 'by-nc' = 'by-nc', 'by-nc-nd' = 'by-nc-nd', 'by-nc-sa' = 'by-nc-sa', 'by-nd' = 'by-nd', 'by-sa' = 'by-sa', cc0 = 'cc0' }

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
	export interface VideoMetadataFormProperties {
	}
	export function CreateVideoMetadataFormGroup() {
		return new FormGroup<VideoMetadataFormProperties>({
		});

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
	export interface VideoMetadataConnectionsFormProperties {
	}
	export function CreateVideoMetadataConnectionsFormGroup() {
		return new FormGroup<VideoMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsCommentsFormProperties {

		/**
		 * The total number of comments on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsCommentsFormGroup() {
		return new FormGroup<VideoMetadataConnectionsCommentsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VideoMetadataConnectionsCredits {

		/** An array of HTTP methods permitted on this URI. */
		options?: Array<string>;

		/**
		 * The total number of users on this connection.
		 * Type: double
		 */
		total?: number | null;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}
	export interface VideoMetadataConnectionsCreditsFormProperties {

		/**
		 * The total number of users on this connection.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/** The API URI that resolves to the connection data. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsCreditsFormGroup() {
		return new FormGroup<VideoMetadataConnectionsCreditsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsLikesFormProperties {

		/**
		 * The total number of likes on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsLikesFormGroup() {
		return new FormGroup<VideoMetadataConnectionsLikesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataConnectionsOndemandFormProperties {

		/**
		 * The On Demand connection resource key.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsOndemandFormGroup() {
		return new FormGroup<VideoMetadataConnectionsOndemandFormProperties>({
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsPicturesFormProperties {

		/**
		 * Total number of thumbnails on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsPicturesFormGroup() {
		return new FormGroup<VideoMetadataConnectionsPicturesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataConnectionsPlaybackFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsPlaybackFormGroup() {
		return new FormGroup<VideoMetadataConnectionsPlaybackFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VideoMetadataConnectionsRecommendations {

		/** An array of HTTP methods allowed on this URI. */
		options?: Array<string>;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}
	export interface VideoMetadataConnectionsRecommendationsFormProperties {

		/** The API URI that resolves to the connection data. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsRecommendationsFormGroup() {
		return new FormGroup<VideoMetadataConnectionsRecommendationsFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoMetadataConnectionsRelated {

		/** An array of HTTP methods allowed on this URI. */
		options?: Array<string>;

		/** The API URI that resolves to the connection data. */
		uri?: string | null;
	}
	export interface VideoMetadataConnectionsRelatedFormProperties {

		/** The API URI that resolves to the connection data. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsRelatedFormGroup() {
		return new FormGroup<VideoMetadataConnectionsRelatedFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface VideoMetadataConnectionsSeasonFormProperties {

		/**
		 * The name of this season.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsSeasonFormGroup() {
		return new FormGroup<VideoMetadataConnectionsSeasonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsTexttracksFormProperties {

		/**
		 * The total number of text tracks on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsTexttracksFormGroup() {
		return new FormGroup<VideoMetadataConnectionsTexttracksFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataConnectionsTrailerFormProperties {

		/**
		 * The trailer connection resource key.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsTrailerFormGroup() {
		return new FormGroup<VideoMetadataConnectionsTrailerFormProperties>({
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsUsers_with_accessFormProperties {

		/**
		 * The total number of users on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsUsers_with_accessFormGroup() {
		return new FormGroup<VideoMetadataConnectionsUsers_with_accessFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface VideoMetadataConnectionsVersionsFormProperties {

		/** The URI of the current version of the video. */
		current_uri: FormControl<string | null | undefined>,

		/**
		 * The total number of versions on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataConnectionsVersionsFormGroup() {
		return new FormGroup<VideoMetadataConnectionsVersionsFormProperties>({
			current_uri: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		subscribe?: VideoMetadataInteractionsSubscribe;

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
	export interface VideoMetadataInteractionsFormProperties {
	}
	export function CreateVideoMetadataInteractionsFormGroup() {
		return new FormGroup<VideoMetadataInteractionsFormProperties>({
		});

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
		 * Type: double
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
	export interface VideoMetadataInteractionsBuyFormProperties {

		/**
		 * The currency code for the current user's region.
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Formatted price to display to buy an On Demand video.
		 * Required
		 */
		display_price: FormControl<string | null | undefined>,

		/**
		 * The user's download access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for download.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to download the video.
		 * * `unavailable` - The video isn't available for download.
		 * Required
		 */
		download: FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>,

		/**
		 * Whether the video has DRM.
		 * Required
		 */
		drm: FormControl<boolean | null | undefined>,

		/**
		 * The URL to buy the On Demand video on Vimeo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The numeric value of the price for buying the On Demand video.
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The time in ISO 8601 format when the On Demand video was purchased.
		 * Required
		 */
		purchase_time: FormControl<string | null | undefined>,

		/**
		 * The user's streaming access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for streaming.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to stream the video.
		 * * `unavailable` - The video isn't available for streaming
		 * Required
		 */
		stream: FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>,

		/**
		 * The product URI to purchase the On Demand video.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsBuyFormGroup() {
		return new FormGroup<VideoMetadataInteractionsBuyFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			display_price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			download: new FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>(undefined, [Validators.required]),
			drm: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			purchase_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stream: new FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VideoMetadataInteractionsBuyDownload { available = 'available', purchased = 'purchased', restricted = 'restricted', unavailable = 'unavailable' }

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
	export interface VideoMetadataInteractionsChannelFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsChannelFormGroup() {
		return new FormGroup<VideoMetadataInteractionsChannelFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataInteractionsLikeFormProperties {

		/**
		 * Whether the user has liked the video.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user liked the video.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsLikeFormGroup() {
		return new FormGroup<VideoMetadataInteractionsLikeFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
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
	export interface VideoMetadataInteractionsRentFormProperties {

		/**
		 * The currency code for the current user's region.
		 * Required
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Formatted price to display to rent an On Demand video.
		 * Required
		 */
		display_price: FormControl<string | null | undefined>,

		/**
		 * Whether the video has DRM.
		 * Required
		 */
		drm: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the rental period for the video expires.
		 * Required
		 */
		expires_time: FormControl<string | null | undefined>,

		/**
		 * The URL to rent the On Demand video on Vimeo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The numeric value of the price for buying the On Demand video.
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The time in ISO 8601 format when the On Demand video was rented.
		 * Required
		 */
		purchase_time: FormControl<string | null | undefined>,

		/**
		 * The user's streaming access to this On Demand video:
		 * Option descriptions:
		 * * `available` - The video is available for streaming.
		 * * `purchased` - The user has purchased the video.
		 * * `restricted` - The user isn't permitted to stream the video.
		 * * `unavailable` - The video isn't available for streaming.
		 * Required
		 */
		stream: FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>,

		/**
		 * The product URI to rent the On Demand video.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsRentFormGroup() {
		return new FormGroup<VideoMetadataInteractionsRentFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			display_price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			drm: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expires_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			purchase_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stream: new FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataInteractionsReportFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsReportFormGroup() {
		return new FormGroup<VideoMetadataInteractionsReportFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataInteractionsSubscribeFormProperties {

		/** Whether the video has DRM. */
		drm: FormControl<boolean | null | undefined>,

		/** The time in ISO 8601 format when the subscription expires. */
		expires_time: FormControl<string | null | undefined>,

		/** The tine in ISO 8601 format when the subscription was purchased. */
		purchase_time: FormControl<string | null | undefined>,

		/** The stream type. */
		stream: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsSubscribeFormGroup() {
		return new FormGroup<VideoMetadataInteractionsSubscribeFormProperties>({
			drm: new FormControl<boolean | null | undefined>(undefined),
			expires_time: new FormControl<string | null | undefined>(undefined),
			purchase_time: new FormControl<string | null | undefined>(undefined),
			stream: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface VideoMetadataInteractionsWatchedFormProperties {

		/**
		 * Whether the user has watched the video.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user watched the video.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsWatchedFormGroup() {
		return new FormGroup<VideoMetadataInteractionsWatchedFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoMetadataInteractionsWatchlaterFormProperties {

		/**
		 * Whether the user has added the video to their Watch later list.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user added the video to their Watch Later list.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoMetadataInteractionsWatchlaterFormGroup() {
		return new FormGroup<VideoMetadataInteractionsWatchlaterFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface ProjectFormProperties {

		/**
		 * The time in ISO 8601 format when the project was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the project was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The name of the folder.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource key string of the project.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The URI of the project.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectMetadata {

		/**
		 * A list of resource URIs related to the project.
		 * Required
		 */
		connections: ProjectMetadataConnections;
	}
	export interface ProjectMetadataFormProperties {
	}
	export function CreateProjectMetadataFormGroup() {
		return new FormGroup<ProjectMetadataFormProperties>({
		});

	}

	export interface ProjectMetadataConnections {

		/**
		 * A standard connection object indicating how to get all the videos in this project.
		 * Required
		 */
		videos: ProjectMetadataConnectionsVideos;
	}
	export interface ProjectMetadataConnectionsFormProperties {
	}
	export function CreateProjectMetadataConnectionsFormGroup() {
		return new FormGroup<ProjectMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface ProjectMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProjectMetadataConnectionsVideosFormGroup() {
		return new FormGroup<ProjectMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface VideoPrivacyFormProperties {

		/**
		 * Whether the video can be added to collections.
		 * Required
		 */
		add: FormControl<boolean | null | undefined>,

		/**
		 * Who can comment on the video:
		 * Option descriptions:
		 * * `anybody` - Anyone can comment on the video.
		 * * `contacts` - Only contacts can comment on the video.
		 * * `nobody` - No one can comment on the video.
		 * Required
		 */
		comments: FormControl<UserPreferencesVideosPrivacyComments | null | undefined>,

		/**
		 * The video's download permission setting.
		 * Required
		 */
		download: FormControl<boolean | null | undefined>,

		/**
		 * The video's embed permission setting:
		 * Option descriptions:
		 * * `private` - The video is private.
		 * * `public` - Anyone can embed the video.
		 * Required
		 */
		embed: FormControl<VideoPrivacyEmbed | null | undefined>,

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
		view: FormControl<UserPreferencesVideosPrivacyView | null | undefined>,
	}
	export function CreateVideoPrivacyFormGroup() {
		return new FormGroup<VideoPrivacyFormProperties>({
			add: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<UserPreferencesVideosPrivacyComments | null | undefined>(undefined, [Validators.required]),
			download: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			embed: new FormControl<VideoPrivacyEmbed | null | undefined>(undefined, [Validators.required]),
			view: new FormControl<UserPreferencesVideosPrivacyView | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VideoPrivacyEmbed { private = 'private', public = 'public' }

	export interface VideoSpatial {

		/**
		 * 360 director timeline.
		 * Required
		 */
		VideoSpatialDirector_timeline: Array<VideoSpatialDirector_timeline>;

		/**
		 * The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
		 * Required
		 * Type: double
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
	export interface VideoSpatialFormProperties {

		/**
		 * The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.
		 * Required
		 * Type: double
		 */
		field_of_view: FormControl<number | null | undefined>,

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
		projection: FormControl<VideoSpatialProjection | null | undefined>,

		/**
		 * The 360 stereo format:
		 * Option descriptions:
		 * * `left-right` - The stereo format is left-right.
		 * * `mono` - The audio is monaural.
		 * * `top-bottom` - The stereo format is top-bottom.
		 * Required
		 */
		stereo_format: FormControl<VideoSpatialStereo_format | null | undefined>,
	}
	export function CreateVideoSpatialFormGroup() {
		return new FormGroup<VideoSpatialFormProperties>({
			field_of_view: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			projection: new FormControl<VideoSpatialProjection | null | undefined>(undefined, [Validators.required]),
			stereo_format: new FormControl<VideoSpatialStereo_format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VideoSpatialDirector_timeline {

		/**
		 * The director timeline pitch, from -90 (minimum) to 90 (maximum).
		 * Type: double
		 */
		pitch?: number | null;

		/**
		 * The director timeline roll.
		 * Type: double
		 */
		roll?: number | null;

		/**
		 * The director timeline time code.
		 * Type: double
		 */
		time_code?: number | null;

		/**
		 * The director timeline yaw, from 0 (minimum) to 360 (maximum).
		 * Type: double
		 */
		yaw?: number | null;
	}
	export interface VideoSpatialDirector_timelineFormProperties {

		/**
		 * The director timeline pitch, from -90 (minimum) to 90 (maximum).
		 * Type: double
		 */
		pitch: FormControl<number | null | undefined>,

		/**
		 * The director timeline roll.
		 * Type: double
		 */
		roll: FormControl<number | null | undefined>,

		/**
		 * The director timeline time code.
		 * Type: double
		 */
		time_code: FormControl<number | null | undefined>,

		/**
		 * The director timeline yaw, from 0 (minimum) to 360 (maximum).
		 * Type: double
		 */
		yaw: FormControl<number | null | undefined>,
	}
	export function CreateVideoSpatialDirector_timelineFormGroup() {
		return new FormGroup<VideoSpatialDirector_timelineFormProperties>({
			pitch: new FormControl<number | null | undefined>(undefined),
			roll: new FormControl<number | null | undefined>(undefined),
			time_code: new FormControl<number | null | undefined>(undefined),
			yaw: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VideoSpatialProjection { cubical = 'cubical', cylindrical = 'cylindrical', dome = 'dome', equirectangular = 'equirectangular', pyramid = 'pyramid' }

	export enum VideoSpatialStereo_format { 'left-right' = 'left-right', mono = 'mono', 'top-bottom' = 'top-bottom' }

	export interface VideoStats {

		/**
		 * The current total number of times that the video has been played.
		 * Required
		 * Type: double
		 */
		plays: number;
	}
	export interface VideoStatsFormProperties {

		/**
		 * The current total number of times that the video has been played.
		 * Required
		 * Type: double
		 */
		plays: FormControl<number | null | undefined>,
	}
	export function CreateVideoStatsFormGroup() {
		return new FormGroup<VideoStatsFormProperties>({
			plays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VideoStatus { available = 'available', quota_exceeded = 'quota_exceeded', total_cap_exceeded = 'total_cap_exceeded', transcode_starting = 'transcode_starting', transcoding = 'transcoding', transcoding_error = 'transcoding_error', unavailable = 'unavailable', uploading = 'uploading', uploading_error = 'uploading_error' }

	export interface VideoTranscode {

		/** Status code for this video's availability. */
		status?: VideoTranscodeStatus | null;
	}
	export interface VideoTranscodeFormProperties {

		/** Status code for this video's availability. */
		status: FormControl<VideoTranscodeStatus | null | undefined>,
	}
	export function CreateVideoTranscodeFormGroup() {
		return new FormGroup<VideoTranscodeFormProperties>({
			status: new FormControl<VideoTranscodeStatus | null | undefined>(undefined),
		});

	}

	export enum VideoTranscodeStatus { complete = 'complete', error = 'error', in_progress = 'in_progress' }

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

		/**
		 * The file size in bytes of the uploaded video.
		 * Type: double
		 */
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
	export interface VideoUploadFormProperties {

		/** The approach for uploading the video. */
		approach: FormControl<VideoUploadApproach | null | undefined>,

		/** The URI for completing the upload. */
		complete_uri: FormControl<string | null | undefined>,

		/** The HTML form for uploading a video through the post approach. */
		form: FormControl<string | null | undefined>,

		/** The link of the video to capture through the pull approach. */
		link: FormControl<string | null | undefined>,

		/** The redirect URL for the upload app. */
		redirect_url: FormControl<string | null | undefined>,

		/**
		 * The file size in bytes of the uploaded video.
		 * Type: double
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The status code for the availability of the uploaded video:
		 * Option descriptions:
		 * * `complete` - The upload is complete.
		 * * `error` - The upload ended with an error.
		 * * `in_progress` - The upload is underway.
		 * Required
		 */
		status: FormControl<VideoTranscodeStatus | null | undefined>,

		/** The link for sending video file data. */
		upload_link: FormControl<string | null | undefined>,
	}
	export function CreateVideoUploadFormGroup() {
		return new FormGroup<VideoUploadFormProperties>({
			approach: new FormControl<VideoUploadApproach | null | undefined>(undefined),
			complete_uri: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<VideoTranscodeStatus | null | undefined>(undefined, [Validators.required]),
			upload_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoUploadApproach { post = 'post', pull = 'pull', streaming = 'streaming', tus = 'tus' }

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
		user?: User;
	}
	export interface GroupFormProperties {

		/**
		 * The time in ISO 8601 format when the group was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The group's description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The link to the group.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the group was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The group's display name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource key of the group.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The canonical relative URI of this group.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface GroupMetadataFormProperties {
	}
	export function CreateGroupMetadataFormGroup() {
		return new FormGroup<GroupMetadataFormProperties>({
		});

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
	export interface GroupMetadataConnectionsFormProperties {
	}
	export function CreateGroupMetadataConnectionsFormGroup() {
		return new FormGroup<GroupMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface GroupMetadataConnectionsUsersFormProperties {

		/**
		 * The total number of users on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGroupMetadataConnectionsUsersFormGroup() {
		return new FormGroup<GroupMetadataConnectionsUsersFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface GroupMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGroupMetadataConnectionsVideosFormGroup() {
		return new FormGroup<GroupMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupMetadataInteractions {

		/**
		 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		join: GroupMetadataInteractionsJoin;
	}
	export interface GroupMetadataInteractionsFormProperties {
	}
	export function CreateGroupMetadataInteractionsFormGroup() {
		return new FormGroup<GroupMetadataInteractionsFormProperties>({
		});

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
	export interface GroupMetadataInteractionsJoinFormProperties {

		/**
		 * Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.
		 * Option descriptions:
		 * * `member` - The authenticated user is a member.
		 * * `moderator` - The authenticated user is a moderator.
		 * Required
		 */
		type: FormControl<GroupMetadataInteractionsJoinType | null | undefined>,

		/**
		 * The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGroupMetadataInteractionsJoinFormGroup() {
		return new FormGroup<GroupMetadataInteractionsJoinFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GroupMetadataInteractionsJoinType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupMetadataInteractionsJoinType { member = 'member', moderator = 'moderator' }

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
	export interface GroupPrivacyFormProperties {

		/**
		 * Who can comment on the group:
		 * Option descriptions:
		 * * `all` - Anyone can comment on the group.
		 * * `members` - Only members can comment on the group.
		 * Required
		 */
		comment: FormControl<GroupPrivacyComment | null | undefined>,

		/**
		 * Who can invite new members to the group:
		 * Option descriptions:
		 * * `all` - Anyone can invite new members to join.
		 * * `members` - Only group members can invite new members to join.
		 * Required
		 */
		invite: FormControl<GroupPrivacyComment | null | undefined>,

		/**
		 * Who can join the group:
		 * Option descriptions:
		 * * `anybody` - Anyone can join the group.
		 * * `members` - Only people with a Vimeo account can join the group.
		 * Required
		 */
		join: FormControl<GroupPrivacyJoin | null | undefined>,

		/**
		 * Who can add videos to the group:
		 * Option descriptions:
		 * * `all` - Anyone can add videos to the group.
		 * * `members` - Only group members can add videos to the group.
		 * Required
		 */
		videos: FormControl<GroupPrivacyComment | null | undefined>,

		/**
		 * Who can view the group:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the group.
		 * * `members` - Only group members can view the group.
		 * Required
		 */
		view: FormControl<GroupPrivacyJoin | null | undefined>,
	}
	export function CreateGroupPrivacyFormGroup() {
		return new FormGroup<GroupPrivacyFormProperties>({
			comment: new FormControl<GroupPrivacyComment | null | undefined>(undefined, [Validators.required]),
			invite: new FormControl<GroupPrivacyComment | null | undefined>(undefined, [Validators.required]),
			join: new FormControl<GroupPrivacyJoin | null | undefined>(undefined, [Validators.required]),
			videos: new FormControl<GroupPrivacyComment | null | undefined>(undefined, [Validators.required]),
			view: new FormControl<GroupPrivacyJoin | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupPrivacyComment { all = 'all', members = 'members' }

	export enum GroupPrivacyJoin { anybody = 'anybody', members = 'members' }

	export interface Activity_3_1Metadata {

		/**
		 * A list of resource URIs related to the activity.
		 * Required
		 */
		connections: Activity_3_1MetadataConnections;
	}
	export interface Activity_3_1MetadataFormProperties {
	}
	export function CreateActivity_3_1MetadataFormGroup() {
		return new FormGroup<Activity_3_1MetadataFormProperties>({
		});

	}

	export interface Activity_3_1MetadataConnections {

		/**
		 * Related content for this activity.
		 * Required
		 */
		related: Activity_3_1MetadataConnectionsRelated;
	}
	export interface Activity_3_1MetadataConnectionsFormProperties {
	}
	export function CreateActivity_3_1MetadataConnectionsFormGroup() {
		return new FormGroup<Activity_3_1MetadataConnectionsFormProperties>({
		});

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
	export interface Activity_3_1MetadataConnectionsRelatedFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateActivity_3_1MetadataConnectionsRelatedFormGroup() {
		return new FormGroup<Activity_3_1MetadataConnectionsRelatedFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Activity_3_1Type { appearance = 'appearance', category = 'category', channel = 'channel', facebook_feed = 'facebook_feed', group = 'group', like = 'like', ondemand = 'ondemand', share = 'share', tag = 'tag', twitter_timeline = 'twitter_timeline', upload = 'upload' }

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
		 * Type: double
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
	export interface AlbumFormProperties {

		/**
		 * Whether an album should allow continuous play.
		 * Required
		 */
		allow_continuous_play: FormControl<boolean | null | undefined>,

		/**
		 * Whether an album should allow downloads.
		 * Required
		 */
		allow_downloads: FormControl<boolean | null | undefined>,

		/**
		 * Whether an album should allow sharing.
		 * Required
		 */
		allow_share: FormControl<boolean | null | undefined>,

		/**
		 * Hexadecimal color code for the decorative color. For example, album videos use this color for player buttons.
		 * Required
		 */
		brand_color: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format that the album was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * A brief description of the album's content.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The custom domain a user has selected for their album.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The total duration in seconds of all the videos in the album.
		 * Required
		 * Type: double
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * Whether to show the album's custom brand color in the player of the album's embedded playlist.
		 * Required
		 */
		embed_brand_color: FormControl<boolean | null | undefined>,

		/**
		 * Whether to show the album's custom logo in the player of the album's embedded playlist.
		 * Required
		 */
		embed_custom_logo: FormControl<boolean | null | undefined>,

		/**
		 * Whether to hide the Vimeo navigation when viewing the album.
		 * Required
		 */
		hide_nav: FormControl<boolean | null | undefined>,

		/**
		 * Whether to hide the Vimeo logo in the player of the album's embedded playlist.
		 * Required
		 */
		hide_vimeo_logo: FormControl<boolean | null | undefined>,

		/**
		 * The album's layout preference
		 * Required
		 */
		layout: FormControl<AlbumLayout | null | undefined>,

		/**
		 * The URL to access the album.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the album was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The album's display name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The album resource key.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * Whether album videos should use the review mode URL.
		 * Required
		 */
		review_mode: FormControl<boolean | null | undefined>,

		/**
		 * Sort type of the album.
		 * Required
		 */
		sort: FormControl<AlbumSort | null | undefined>,

		/**
		 * The album's color theme preference
		 * Required
		 */
		theme: FormControl<AlbumTheme | null | undefined>,

		/**
		 * The album's URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * The custom Vimeo URL a user has selected for their album.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Whether the user has opted in to use a custom domain for their album.
		 * Required
		 */
		use_custom_domain: FormControl<boolean | null | undefined>,

		/**
		 * Whether an album should show the brand color in the web layout.
		 * Required
		 */
		web_brand_color: FormControl<boolean | null | undefined>,

		/**
		 * Whether an album's custom logo should be shown in the web layout.
		 * Required
		 */
		web_custom_logo: FormControl<boolean | null | undefined>,
	}
	export function CreateAlbumFormGroup() {
		return new FormGroup<AlbumFormProperties>({
			allow_continuous_play: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allow_downloads: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allow_share: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			brand_color: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			embed_brand_color: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			embed_custom_logo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hide_nav: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hide_vimeo_logo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			layout: new FormControl<AlbumLayout | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			review_mode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sort: new FormControl<AlbumSort | null | undefined>(undefined, [Validators.required]),
			theme: new FormControl<AlbumTheme | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			use_custom_domain: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			web_brand_color: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			web_custom_logo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlbumEmbed {

		/**
		 * The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.
		 * Required
		 */
		html: string;
	}
	export interface AlbumEmbedFormProperties {

		/**
		 * The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.
		 * Required
		 */
		html: FormControl<string | null | undefined>,
	}
	export function CreateAlbumEmbedFormGroup() {
		return new FormGroup<AlbumEmbedFormProperties>({
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlbumLayout { grid = 'grid', player = 'player' }

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
	export interface AlbumMetadataFormProperties {
	}
	export function CreateAlbumMetadataFormGroup() {
		return new FormGroup<AlbumMetadataFormProperties>({
		});

	}

	export interface AlbumMetadataConnections {

		/**
		 * Information about the videos that belong to this album.
		 * Required
		 */
		videos: AlbumMetadataConnectionsVideos;
	}
	export interface AlbumMetadataConnectionsFormProperties {
	}
	export function CreateAlbumMetadataConnectionsFormGroup() {
		return new FormGroup<AlbumMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface AlbumMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumMetadataConnectionsVideosFormGroup() {
		return new FormGroup<AlbumMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface AlbumMetadataInteractionsFormProperties {
	}
	export function CreateAlbumMetadataInteractionsFormGroup() {
		return new FormGroup<AlbumMetadataInteractionsFormProperties>({
		});

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
	export interface AlbumMetadataInteractionsAdd_custom_thumbnailsFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumMetadataInteractionsAdd_custom_thumbnailsFormGroup() {
		return new FormGroup<AlbumMetadataInteractionsAdd_custom_thumbnailsFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface AlbumMetadataInteractionsAdd_logosFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumMetadataInteractionsAdd_logosFormGroup() {
		return new FormGroup<AlbumMetadataInteractionsAdd_logosFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface AlbumMetadataInteractionsAdd_videosFormProperties {

		/**
		 * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlbumMetadataInteractionsAdd_videosFormGroup() {
		return new FormGroup<AlbumMetadataInteractionsAdd_videosFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface AlbumPrivacyFormProperties {

		/** The privacy-enabled password to see this album. Present only when `privacy.view` is `password`. */
		password: FormControl<string | null | undefined>,

		/**
		 * Who can view the album:
		 * Option descriptions:
		 * * `anybody` - Anyone can view the album.
		 * * `embed_only` - Only owner can see album, can be embedded off-site
		 * * `password` - Only those with the password can view the album.
		 * Required
		 */
		view: FormControl<AlbumPrivacyView | null | undefined>,
	}
	export function CreateAlbumPrivacyFormGroup() {
		return new FormGroup<AlbumPrivacyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<AlbumPrivacyView | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlbumPrivacyView { anybody = 'anybody', embed_only = 'embed_only', password = 'password' }

	export enum AlbumSort { added_first = 'added_first', added_last = 'added_last', alphabetical = 'alphabetical', arranged = 'arranged', comments = 'comments', likes = 'likes', newest = 'newest', oldest = 'oldest', plays = 'plays' }

	export enum AlbumTheme { dark = 'dark', standard = 'standard' }

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
	export interface Api_appFormProperties {

		/**
		 * The name of the API app.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The canonical URI of the API app.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApi_appFormGroup() {
		return new FormGroup<Api_appFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		user?: User;
	}
	export interface AuthFormProperties {

		/**
		 * The access token string.
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/** The date and time that the token expires. */
		expires_on: FormControl<string | null | undefined>,

		/** The refresh token string. */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * The scope or scopes that the token supports.
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The token type:
		 * Option descriptions:
		 * * `bearer` - The token is of the `bearer` type.
		 * Required
		 */
		token_type: FormControl<AuthToken_type | null | undefined>,
	}
	export function CreateAuthFormGroup() {
		return new FormGroup<AuthFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_on: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<AuthToken_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthToken_type { bearer = 'bearer' }

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
	export interface Auth_errorFormProperties {

		/**
		 * The name of the error.
		 * Required
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * The description of the error.
		 * Required
		 */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateAuth_errorFormGroup() {
		return new FormGroup<Auth_errorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Comment {

		/**
		 * The time in ISO 8601 format when the comment was posted.
		 * Required
		 */
		created_on: string;

		/** Required */
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
	export interface CommentFormProperties {

		/**
		 * The time in ISO 8601 format when the comment was posted.
		 * Required
		 */
		created_on: FormControl<string | null | undefined>,

		/**
		 * The resource key string for the comment.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The content of the comment.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The Vimeo content to which the comment relates:
		 * Option descriptions:
		 * * `video` - The comment is about a video.
		 * Required
		 */
		type: FormControl<CommentType | null | undefined>,

		/**
		 * The unique identifier to access the comment resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			created_on: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CommentType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CommentMetadata {

		/** Required */
		connections: CommentMetadataConnections;
	}
	export interface CommentMetadataFormProperties {
	}
	export function CreateCommentMetadataFormGroup() {
		return new FormGroup<CommentMetadataFormProperties>({
		});

	}

	export interface CommentMetadataConnections {

		/**
		 * Information about this comment's replies.
		 * Required
		 */
		replies: CommentMetadataConnectionsReplies;
	}
	export interface CommentMetadataConnectionsFormProperties {
	}
	export function CreateCommentMetadataConnectionsFormGroup() {
		return new FormGroup<CommentMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface CommentMetadataConnectionsRepliesFormProperties {

		/**
		 * The total number of replies on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCommentMetadataConnectionsRepliesFormGroup() {
		return new FormGroup<CommentMetadataConnectionsRepliesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommentType { video = 'video' }

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
	export interface Content_ratingFormProperties {

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
		code: FormControl<Content_ratingCode | null | undefined>,

		/**
		 * The description of this content rating.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The canonical relative URI of the content rating.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContent_ratingFormGroup() {
		return new FormGroup<Content_ratingFormProperties>({
			code: new FormControl<Content_ratingCode | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Content_ratingCode { drugs = 'drugs', language = 'language', nudity = 'nudity', safe = 'safe', unrated = 'unrated', violence = 'violence' }

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
		code: VideoLicense;

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
	export interface Creative_commonsFormProperties {

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
		code: FormControl<VideoLicense | null | undefined>,

		/**
		 * The description of this Creative Commons license.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The canonical relative URI of the Creative Commons license.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreative_commonsFormGroup() {
		return new FormGroup<Creative_commonsFormProperties>({
			code: new FormControl<VideoLicense | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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
		user?: User;

		/** The video associated with this credit. */
		video?: Video;
	}
	export interface CreditFormProperties {

		/**
		 * The name of the person credited.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The character that this person portrayed, or the job that this person performed.
		 * Required
		 */
		role: FormControl<string | null | undefined>,

		/**
		 * The unique identifier to access the credits resource.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreditFormGroup() {
		return new FormGroup<CreditFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface DomainFormProperties {

		/**
		 * Whether to permit HD embeds on this domain.
		 * Required
		 */
		allow_hd: FormControl<boolean | null | undefined>,

		/**
		 * The domain name.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The URI of the domain.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			allow_hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface EndpointFormProperties {

		/**
		 * The path section of the URL, which, when appended to the API host `https:///api.vimeo.com`, builds a full API endpoint.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		error_code: number;

		/**
		 * A link to more information about the error.
		 * Required
		 */
		link: string;
	}
	export interface ErrorFormProperties {

		/**
		 * The error message that developers receive.
		 * Required
		 */
		developer_message: FormControl<string | null | undefined>,

		/**
		 * The error message that non-developer users receive.
		 * Required
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * The error code.
		 * Required
		 * Type: double
		 */
		error_code: FormControl<number | null | undefined>,

		/**
		 * A link to more information about the error.
		 * Required
		 */
		link: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			developer_message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface LanguageFormProperties {

		/**
		 * The code that represents this language.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The name of the language.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Legacy_error {

		/**
		 * User-friendly error message
		 * Required
		 */
		error: string;
	}
	export interface Legacy_errorFormProperties {

		/**
		 * User-friendly error message
		 * Required
		 */
		error: FormControl<string | null | undefined>,
	}
	export function CreateLegacy_errorFormGroup() {
		return new FormGroup<Legacy_errorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_genre {

		/**
		 * The canonical name or URL slug of the genre.
		 * Required
		 */
		canonical: string;

		/** Required */
		interactions: On_demand_genreInteractions;

		/**
		 * The Vimeo URL for this genre.
		 * Required
		 */
		link: string;

		/** Required */
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
	export interface On_demand_genreFormProperties {

		/**
		 * The canonical name or URL slug of the genre.
		 * Required
		 */
		canonical: FormControl<string | null | undefined>,

		/**
		 * The Vimeo URL for this genre.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The descriptive name of the genre.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The relative URI of the On Demand genre.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_genreFormGroup() {
		return new FormGroup<On_demand_genreFormProperties>({
			canonical: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_genreInteractions {

		/**
		 * Interactions for On Demand pages that are in this genre.
		 * Required
		 */
		page: On_demand_genreInteractionsPage;
	}
	export interface On_demand_genreInteractionsFormProperties {
	}
	export function CreateOn_demand_genreInteractionsFormGroup() {
		return new FormGroup<On_demand_genreInteractionsFormProperties>({
		});

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
	export interface On_demand_genreInteractionsPageFormProperties {

		/**
		 * Whether this On Demand genre was added.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The URI to access the On Demand page.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_genreInteractionsPageFormGroup() {
		return new FormGroup<On_demand_genreInteractionsPageFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_genreMetadata {

		/**
		 * A collection of information connected to this resource.
		 * Required
		 */
		connections: On_demand_genreMetadataConnections;
	}
	export interface On_demand_genreMetadataFormProperties {
	}
	export function CreateOn_demand_genreMetadataFormGroup() {
		return new FormGroup<On_demand_genreMetadataFormProperties>({
		});

	}

	export interface On_demand_genreMetadataConnections {

		/**
		 * Information about the On Demand pages related to this group.
		 * Required
		 */
		pages: On_demand_genreMetadataConnectionsPages;
	}
	export interface On_demand_genreMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_genreMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_genreMetadataConnectionsFormProperties>({
		});

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
	export interface On_demand_genreMetadataConnectionsPagesFormProperties {

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_genreMetadataConnectionsPagesFormGroup() {
		return new FormGroup<On_demand_genreMetadataConnectionsPagesFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		film?: Video;

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

		/** Required */
		preorder: On_demand_pagePreorder;

		/** Required */
		published: On_demand_pagePublished;

		/**
		 * The rating of this page.
		 * Required
		 * Type: double
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
	export interface On_demand_pageFormProperties {

		/** The time in ISO 8601 format when the page was created. */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The description of this On Demand page.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The link to this page on its own domain.
		 * Required
		 */
		domain_link: FormControl<string | null | undefined>,

		/**
		 * The link to the page on Vimeo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/** he time in ISO 8601 format when the page was last modified. */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * A descriptive title of this On Demand page.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The rating of this page.
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * The VOD resource key.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/** The creator-designated SKU for this On Demand page. */
		sku: FormControl<string | null | undefined>,

		/**
		 * The graphical theme for this On Demand page.
		 * Required
		 */
		theme: FormControl<string | null | undefined>,

		/**
		 * Whether this On Demand page is for a film or a series.
		 * Option descriptions:
		 * * `film` - The On Demand page is for a film.
		 * * `series` - The On Demand page is for a series.
		 * Required
		 */
		type: FormControl<On_demand_pageType | null | undefined>,

		/**
		 * The relative URI of the On Demand page.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageFormGroup() {
		return new FormGroup<On_demand_pageFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<On_demand_pageType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_pageColorsFormProperties {

		/**
		 * The hexadecimal color code for the page's primary color.
		 * Required
		 */
		primary: FormControl<string | null | undefined>,

		/**
		 * The hexadecimal color code for the page's secondary color.
		 * Required
		 */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageColorsFormGroup() {
		return new FormGroup<On_demand_pageColorsFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secondary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_pageEpisodes {

		/** Required */
		buy: On_demand_pageEpisodesBuy;

		/** Required */
		rent: On_demand_pageEpisodesRent;
	}
	export interface On_demand_pageEpisodesFormProperties {
	}
	export function CreateOn_demand_pageEpisodesFormGroup() {
		return new FormGroup<On_demand_pageEpisodesFormProperties>({
		});

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
		 * Type: double
		 */
		price: number;
	}
	export interface On_demand_pageEpisodesBuyFormProperties {

		/**
		 * Whether all the videos on this On Demand page can be purchased as a whole.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The default price to buy an episode.
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,
	}
	export function CreateOn_demand_pageEpisodesBuyFormGroup() {
		return new FormGroup<On_demand_pageEpisodesBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		price: number;
	}
	export interface On_demand_pageEpisodesRentFormProperties {

		/**
		 * Whether all the videos on this On Demand page can be rented as a whole.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

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
		period: FormControl<On_demand_pageEpisodesRentPeriod | null | undefined>,

		/**
		 * The default price to rent an episode.
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,
	}
	export function CreateOn_demand_pageEpisodesRentFormGroup() {
		return new FormGroup<On_demand_pageEpisodesRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<On_demand_pageEpisodesRentPeriod | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum On_demand_pageEpisodesRentPeriod { '1 day' = '1 day', '1 month' = '1 month', '1 week' = '1 week', '1 year' = '1 year', '2 day' = '2 day', '24 hour' = '24 hour', '3 day' = '3 day', '3 month' = '3 month', '30 day' = '30 day', '48 hour' = '48 hour', '6 month' = '6 month', '60 day' = '60 day', '7 day' = '7 day', '72 hour' = '72 hour' }

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
	export interface On_demand_pageMetadataFormProperties {
	}
	export function CreateOn_demand_pageMetadataFormGroup() {
		return new FormGroup<On_demand_pageMetadataFormProperties>({
		});

	}

	export interface On_demand_pageMetadataConnections {

		/** Required */
		metadata: On_demand_pageMetadataConnectionsMetadata;
	}
	export interface On_demand_pageMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_pageMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsFormProperties>({
		});

	}

	export interface On_demand_pageMetadataConnectionsMetadata {

		/** Required */
		connections: On_demand_pageMetadataConnectionsMetadataConnections;
	}
	export interface On_demand_pageMetadataConnectionsMetadataFormProperties {
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataFormProperties>({
		});

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
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsCommentsFormProperties {

		/**
		 * The total number of comments on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsCommentsFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsCommentsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsGenresFormProperties {

		/**
		 * The total number of genres on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsGenresFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsGenresFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsLikesFormProperties {

		/**
		 * The total number of likes on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsLikesFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsLikesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsPicturesFormProperties {

		/**
		 * The total number of pictures on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsPicturesFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsPicturesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsSeasonsFormProperties {

		/**
		 * The total number of seasons on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsSeasonsFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsSeasonsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_pageMetadataConnectionsMetadataConnectionsVideos {

		/**
		 * The total number of extra videos.
		 * Required
		 * Type: double
		 */
		extra_total: number;

		/**
		 * The total number of main videos.
		 * Required
		 * Type: double
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
		 * Type: double
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
		 * Type: double
		 */
		viewable_total: number;
	}
	export interface On_demand_pageMetadataConnectionsMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of extra videos.
		 * Required
		 * Type: double
		 */
		extra_total: FormControl<number | null | undefined>,

		/**
		 * The total number of main videos.
		 * Required
		 * Type: double
		 */
		main_total: FormControl<number | null | undefined>,

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * The total number of viewable videos.
		 * Required
		 * Type: double
		 */
		viewable_total: FormControl<number | null | undefined>,
	}
	export function CreateOn_demand_pageMetadataConnectionsMetadataConnectionsVideosFormGroup() {
		return new FormGroup<On_demand_pageMetadataConnectionsMetadataConnectionsVideosFormProperties>({
			extra_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			main_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewable_total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Purchase_interaction {

		/** Information on purchasing this video. */
		buy?: Purchase_interactionBuy;

		/** Information on renting this video. */
		rent?: string | null;

		/** Information on subscribing to this video. */
		subscribe?: Purchase_interactionSubscribe;
	}
	export interface Purchase_interactionFormProperties {

		/** Information on renting this video. */
		rent: FormControl<string | null | undefined>,
	}
	export function CreatePurchase_interactionFormGroup() {
		return new FormGroup<Purchase_interactionFormProperties>({
			rent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Purchase_interactionBuy {

		/** Whether the On Demand video for purchase has DRM. */
		drm?: boolean | null;
	}
	export interface Purchase_interactionBuyFormProperties {

		/** Whether the On Demand video for purchase has DRM. */
		drm: FormControl<boolean | null | undefined>,
	}
	export function CreatePurchase_interactionBuyFormGroup() {
		return new FormGroup<Purchase_interactionBuyFormProperties>({
			drm: new FormControl<boolean | null | undefined>(undefined),
		});

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
	export interface Purchase_interactionSubscribeFormProperties {

		/** Whether the On Demand subscription has DRM. */
		drm: FormControl<boolean | null | undefined>,

		/** The time in ISO 8601 format when the On Demand video will expire. */
		expires_time: FormControl<string | null | undefined>,

		/** The URL to purchase this On Demand subscription on Vimeo. */
		link: FormControl<string | null | undefined>,

		/** The time in ISO 8601 format when the On Demand was purchased. */
		purchase_time: FormControl<string | null | undefined>,

		/**
		 * The user's streaming access to this On Demand subscription:
		 * Option descriptions:
		 * * `available` - The On Demand subscription is available for streaming.
		 * * `purchased` - The On Demand subscription has been purchased.
		 * * `restricted` - Streaming for the On Demand subscription is restricted.
		 * * `unavailable` - The On Demand subscription is unavailable.
		 */
		stream: FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>,

		/** The On Demand subscription's product URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePurchase_interactionSubscribeFormGroup() {
		return new FormGroup<Purchase_interactionSubscribeFormProperties>({
			drm: new FormControl<boolean | null | undefined>(undefined),
			expires_time: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			purchase_time: new FormControl<string | null | undefined>(undefined),
			stream: new FormControl<VideoMetadataInteractionsBuyDownload | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface On_demand_pagePreorderFormProperties {

		/**
		 * Whether this page is available for preorder.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the preorder was cancelled.
		 * Required
		 */
		cancel_time: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the preorder was released to the public.
		 * Required
		 */
		publish_time: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the preorder started.
		 * Required
		 */
		time: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pagePreorderFormGroup() {
		return new FormGroup<On_demand_pagePreorderFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			cancel_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publish_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_pagePublishedFormProperties {

		/**
		 * Whether this On Demand page has been published.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The time in IS 8601 format when this page was published.
		 * Required
		 */
		time: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pagePublishedFormGroup() {
		return new FormGroup<On_demand_pagePublishedFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_pageSubscriptionFormProperties {

		/**
		 * Whether this product is active.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The link to this product on Vimeo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/** The product's rental period. */
		period: FormControl<string | null | undefined>,

		/**
		 * The accepted currencies and respective pricing for this product.
		 * Required
		 */
		price: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_pageSubscriptionFormGroup() {
		return new FormGroup<On_demand_pageSubscriptionFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum On_demand_pageType { film = 'film', series = 'series' }

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
		 * Type: double
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
		 * Type: double
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
	export interface On_demand_promotionFormProperties {

		/**
		 * The type of access that this promotion grants:
		 * Option descriptions:
		 * * `default` - Grants discounts on existing product offerings.
		 * * `vip` - Grants free access either to VOD content before it is released or to access types that aren't part of the existing product offerings.
		 * Required
		 */
		access_type: FormControl<On_demand_promotionAccess_type | null | undefined>,

		/**
		 * The type of discount for which this promotion can be used.
		 * Option descriptions:
		 * * `dollars` - The discount is a certain fixed amount.
		 * * `free` - The discount is the full purchase price. VIP access promotions always use this discount type.
		 * * `percent` - The discount is a certain percentage of the full price.
		 * Required
		 */
		discount_type: FormControl<On_demand_promotionDiscount_type | null | undefined>,

		/**
		 * Whether this promotion grants download access to On Demand content.
		 * Required
		 */
		download: FormControl<boolean | null | undefined>,

		/**
		 * The prefix string for batch codes, or the null value for single codes.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The percentage amount that is deducted from the product price.
		 * Required
		 * Type: double
		 */
		percent_off: FormControl<number | null | undefined>,

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
		product_type: FormControl<On_demand_promotionProduct_type | null | undefined>,

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
		stream_period: FormControl<On_demand_promotionStream_period | null | undefined>,

		/**
		 * The total amount of times that this promotion can be used.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The way in which this promotion can generate promo codes:
		 * Option descriptions:
		 * * `batch` - Provides many unique promo codes that can only be used once each.
		 * * `batch_prefix` - Similar to `batch`, except that all codes have a similar prefix string. This mode is deprecated, yet it may still appear for some users.
		 * * `single` - Provides a single promo code with many uses.
		 * Required
		 */
		type: FormControl<On_demand_promotionType | null | undefined>,

		/**
		 * The promotion's canonical relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_promotionFormGroup() {
		return new FormGroup<On_demand_promotionFormProperties>({
			access_type: new FormControl<On_demand_promotionAccess_type | null | undefined>(undefined, [Validators.required]),
			discount_type: new FormControl<On_demand_promotionDiscount_type | null | undefined>(undefined, [Validators.required]),
			download: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			percent_off: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			product_type: new FormControl<On_demand_promotionProduct_type | null | undefined>(undefined, [Validators.required]),
			stream_period: new FormControl<On_demand_promotionStream_period | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<On_demand_promotionType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum On_demand_promotionAccess_type { default = 'default', vip = 'vip' }

	export enum On_demand_promotionDiscount_type { dollars = 'dollars', free = 'free', percent = 'percent' }

	export interface On_demand_promotionMetadata {

		/**
		 * A list of resource URIs related to the On Demand promotion.
		 * Required
		 */
		connections: On_demand_promotionMetadataConnections;
	}
	export interface On_demand_promotionMetadataFormProperties {
	}
	export function CreateOn_demand_promotionMetadataFormGroup() {
		return new FormGroup<On_demand_promotionMetadataFormProperties>({
		});

	}

	export interface On_demand_promotionMetadataConnections {

		/**
		 * Information about the codes associated with this promotion.
		 * Required
		 */
		codes: On_demand_promotionMetadataConnectionsCodes;
	}
	export interface On_demand_promotionMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_promotionMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_promotionMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_promotionMetadataConnectionsCodesFormProperties {

		/**
		 * The total number of uses on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_promotionMetadataConnectionsCodesFormGroup() {
		return new FormGroup<On_demand_promotionMetadataConnectionsCodesFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum On_demand_promotionProduct_type { any = 'any', buy = 'buy', buy_episode = 'buy_episode', rent = 'rent', rent_episode = 'rent_episode', subscribe = 'subscribe' }

	export enum On_demand_promotionStream_period { '1_week' = '1_week', '1_year' = '1_year', '24_hour' = '24_hour', '30_days' = '30_days', '3_month' = '3_month', '48_hour' = '48_hour', '6_month' = '6_month', '72_hour' = '72_hour' }

	export enum On_demand_promotionType { batch = 'batch', batch_prefix = 'batch_prefix', single = 'single' }

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
		 * Type: double
		 */
		max_uses: number;

		/**
		 * The number of times that this code has been used.
		 * Required
		 * Type: double
		 */
		uses: number;
	}
	export interface On_demand_promotion_codeFormProperties {

		/**
		 * A promotion code that can be redeemed on Vimeo.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A link to redeem the promotion code instantly.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The total amount of times this code can be used.
		 * Required
		 * Type: double
		 */
		max_uses: FormControl<number | null | undefined>,

		/**
		 * The number of times that this code has been used.
		 * Required
		 * Type: double
		 */
		uses: FormControl<number | null | undefined>,
	}
	export function CreateOn_demand_promotion_codeFormGroup() {
		return new FormGroup<On_demand_promotion_codeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max_uses: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uses: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_regionFormProperties {

		/**
		 * The ISO 3166-1 alpha-2 code for this country.
		 * Required
		 */
		country_code: FormControl<string | null | undefined>,

		/**
		 * The descriptive name of this country.
		 * Required
		 */
		country_name: FormControl<string | null | undefined>,

		/**
		 * The region container's relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_regionFormGroup() {
		return new FormGroup<On_demand_regionFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_season {

		/**
		 * The description for this season.
		 * Required
		 */
		description: string;

		/** Required */
		metadata: On_demand_seasonMetadata;

		/**
		 * The descriptive name of the season.
		 * Required
		 */
		name: string;

		/**
		 * The position of the season relative to other seasons in the series.
		 * Required
		 * Type: double
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
	export interface On_demand_seasonFormProperties {

		/**
		 * The description for this season.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The descriptive name of the season.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The position of the season relative to other seasons in the series.
		 * Required
		 * Type: double
		 */
		position: FormControl<number | null | undefined>,

		/**
		 * The unique identifier for this On Demand season.
		 * Required
		 */
		resource_key: FormControl<string | null | undefined>,

		/**
		 * The type of season.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The season container's relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_seasonFormGroup() {
		return new FormGroup<On_demand_seasonFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resource_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_seasonMetadata {

		/** Required */
		connections: On_demand_seasonMetadataConnections;
	}
	export interface On_demand_seasonMetadataFormProperties {
	}
	export function CreateOn_demand_seasonMetadataFormGroup() {
		return new FormGroup<On_demand_seasonMetadataFormProperties>({
		});

	}

	export interface On_demand_seasonMetadataConnections {

		/**
		 * The Videos connection.
		 * Required
		 */
		videos: On_demand_seasonMetadataConnectionsVideos;
	}
	export interface On_demand_seasonMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_seasonMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_seasonMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection ∂data.
		 * Required
		 */
		uri: string;
	}
	export interface On_demand_seasonMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection ∂data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_seasonMetadataConnectionsVideosFormGroup() {
		return new FormGroup<On_demand_seasonMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

		/**
		 * The episode number of the On Demand video.
		 * Type: double
		 */
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
		options?: Array<string>;

		/** The active picture for this video. */
		pictures?: Picture;

		/**
		 * The user's most recent play position in seconds for this video.
		 * Required
		 * Type: double
		 */
		play_progress: number;

		/**
		 * Describes the manual position of this video relative to the other videos owned by this On Demand page.
		 * Type: double
		 */
		position?: number | null;

		/** The time in ISO 8601 format when the On Demand video was created or published. */
		release_date?: string | null;

		/**
		 * The year that this On Demand video was released.
		 * Required
		 * Type: double
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
		user?: User;
	}
	export interface On_demand_videoFormProperties {

		/** Description of the On Demand video. */
		description: FormControl<string | null | undefined>,

		/** The duration of the On Demand video. */
		duration: FormControl<string | null | undefined>,

		/**
		 * The episode number of the On Demand video.
		 * Type: double
		 */
		episode: FormControl<number | null | undefined>,

		/**
		 * The link to this video on Vimeo.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/** The title of the On Demand video. */
		name: FormControl<string | null | undefined>,

		/**
		 * The user's most recent play position in seconds for this video.
		 * Required
		 * Type: double
		 */
		play_progress: FormControl<number | null | undefined>,

		/**
		 * Describes the manual position of this video relative to the other videos owned by this On Demand page.
		 * Type: double
		 */
		position: FormControl<number | null | undefined>,

		/** The time in ISO 8601 format when the On Demand video was created or published. */
		release_date: FormControl<string | null | undefined>,

		/**
		 * The year that this On Demand video was released.
		 * Required
		 * Type: double
		 */
		release_year: FormControl<number | null | undefined>,

		/**
		 * The type of the On Demand video:
		 * Option descriptions:
		 * * `extra` - The On Demand video is an extra feature.
		 * * `main` - The On Demand video is a main feature.
		 * * `trailer` - The On Demand video is a trailer.
		 * Required
		 */
		type: FormControl<On_demand_videoType | null | undefined>,

		/**
		 * The video container's relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_videoFormGroup() {
		return new FormGroup<On_demand_videoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			episode: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			play_progress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<number | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined),
			release_year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<On_demand_videoType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_videoBuyFormProperties {

		/**
		 * Whether this On Demand video can be purchased.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * A map of currency type to price.
		 * Required
		 */
		price: FormControl<string | null | undefined>,

		/** Whether this On Demand video has been purchased. */
		purchased: FormControl<boolean | null | undefined>,
	}
	export function CreateOn_demand_videoBuyFormGroup() {
		return new FormGroup<On_demand_videoBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchased: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface On_demand_videoInteractions {

		/**
		 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
		 * Required
		 */
		page: On_demand_videoInteractionsPage;
	}
	export interface On_demand_videoInteractionsFormProperties {
	}
	export function CreateOn_demand_videoInteractionsFormGroup() {
		return new FormGroup<On_demand_videoInteractionsFormProperties>({
		});

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
	export interface On_demand_videoInteractionsPageFormProperties {

		/**
		 * Whether this On Demand page was added.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The URI to access the On Demand page.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_videoInteractionsPageFormGroup() {
		return new FormGroup<On_demand_videoInteractionsPageFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface On_demand_videoMetadata {

		/** Required */
		connections: On_demand_videoMetadataConnections;

		/** Required */
		interactions: On_demand_videoMetadataInteractions;
	}
	export interface On_demand_videoMetadataFormProperties {
	}
	export function CreateOn_demand_videoMetadataFormGroup() {
		return new FormGroup<On_demand_videoMetadataFormProperties>({
		});

	}

	export interface On_demand_videoMetadataConnections {

		/**
		 * Information about this season.
		 * Required
		 */
		season: On_demand_videoMetadataConnectionsSeason;
	}
	export interface On_demand_videoMetadataConnectionsFormProperties {
	}
	export function CreateOn_demand_videoMetadataConnectionsFormGroup() {
		return new FormGroup<On_demand_videoMetadataConnectionsFormProperties>({
		});

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
	export interface On_demand_videoMetadataConnectionsSeasonFormProperties {

		/**
		 * The name of the season on this connection.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_videoMetadataConnectionsSeasonFormGroup() {
		return new FormGroup<On_demand_videoMetadataConnectionsSeasonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_videoMetadataInteractionsFormProperties {
	}
	export function CreateOn_demand_videoMetadataInteractionsFormGroup() {
		return new FormGroup<On_demand_videoMetadataInteractionsFormProperties>({
		});

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
	export interface On_demand_videoMetadataInteractionsLikesFormProperties {

		/**
		 * Whether the user has liked this video.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user liked this video.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The URI for the user to like this video.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_videoMetadataInteractionsLikesFormGroup() {
		return new FormGroup<On_demand_videoMetadataInteractionsLikesFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_videoMetadataInteractionsWatchlaterFormProperties {

		/**
		 * Whether the user has added this video to their Watch Later queue.
		 * Required
		 */
		added: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 format when the user added this video to their Watch Later queue.
		 * Required
		 */
		added_time: FormControl<string | null | undefined>,

		/**
		 * The URI for the user to add this video to their Watch Later queue.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOn_demand_videoMetadataInteractionsWatchlaterFormGroup() {
		return new FormGroup<On_demand_videoMetadataInteractionsWatchlaterFormProperties>({
			added: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			added_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface On_demand_videoRentFormProperties {

		/**
		 * Whether this On Demand video can be rented.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * A map of currency type to price.
		 * Required
		 */
		price: FormControl<string | null | undefined>,

		/** Whether this On Demand video has been rented. */
		purchased: FormControl<boolean | null | undefined>,
	}
	export function CreateOn_demand_videoRentFormGroup() {
		return new FormGroup<On_demand_videoRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchased: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum On_demand_videoType { extra = 'extra', main = 'main', trailer = 'trailer' }

	export interface Play {

		/** Progressive files. */
		PlayProgressive?: Array<PlayProgressive>;

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
	export interface PlayFormProperties {

		/**
		 * The play status of the video:
		 * Option descriptions:
		 * * `playable` - The video is playable.
		 * * `purchase_required` - The video must be purchased.
		 * * `restricted` - Playback for the video is restricted.
		 * * `unavailable` - The video is unavailable.
		 * Required
		 */
		status: FormControl<PlayStatus | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			status: new FormControl<PlayStatus | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
		 */
		fps: number;

		/**
		 * The height in pixels of the video.
		 * Required
		 * Type: double
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
		 * Type: double
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
		 * Type: double
		 */
		width: number;
	}
	export interface PlayProgressiveFormProperties {

		/**
		 * The time in ISO 8601 format when this video file was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The FPS of the video file.
		 * Required
		 * Type: double
		 */
		fps: FormControl<number | null | undefined>,

		/**
		 * The height in pixels of the video.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The direct link to this video file.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the link to this video file expires.
		 * Required
		 */
		link_expiration_time: FormControl<string | null | undefined>,

		/** The URLs for logging events. */
		log: FormControl<string | null | undefined>,

		/**
		 * The MD5 hash of the video file.
		 * Required
		 */
		md5: FormControl<string | null | undefined>,

		/**
		 * The file size in bytes of this video.
		 * Required
		 * Type: double
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The type of the video file:
		 * Option descriptions:
		 * * `source` - The video is a source file.
		 * * `video/mp4` - The video is in MP4 format.
		 * * `video/webm` - The video is in WebM format.
		 * * `vp6/x-video` - The video is in VP6 format.
		 * Required
		 */
		type: FormControl<PlayProgressiveType | null | undefined>,

		/**
		 * The width in pixels of the video.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePlayProgressiveFormGroup() {
		return new FormGroup<PlayProgressiveFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link_expiration_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			log: new FormControl<string | null | undefined>(undefined),
			md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PlayProgressiveType | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayProgressiveType { source = 'source', 'video/mp4' = 'video/mp4', 'video/webm' = 'video/webm', 'vp6/x-video' = 'vp6/x-video' }

	export enum PlayStatus { playable = 'playable', purchase_required = 'purchase_required', restricted = 'restricted', unavailable = 'unavailable' }

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
	export interface PortfolioFormProperties {

		/**
		 * The time in ISO 8601 format when the portfolio was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The portfolio's description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The link to the portfolio.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the portfolio's data was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The display name of the portfolio.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The default video sort order for the portfolio:
		 * Option descriptions:
		 * * `alphabetical` - The default sort order is alphabetical by name.
		 * * `clips` - The default sort order is video creation date.
		 * * `modified` - The default sort order is the order in which the videos were modified.
		 * * `recent` - The default sort order is the order in which the videos were added.
		 * Required
		 */
		sort: FormControl<PortfolioSort | null | undefined>,

		/**
		 * The canonical relative URI of the portfolio.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioFormGroup() {
		return new FormGroup<PortfolioFormProperties>({
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sort: new FormControl<PortfolioSort | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PortfolioMetadata {

		/**
		 * A list of resource URIs related to the album.
		 * Required
		 */
		connections: PortfolioMetadataConnections;
	}
	export interface PortfolioMetadataFormProperties {
	}
	export function CreatePortfolioMetadataFormGroup() {
		return new FormGroup<PortfolioMetadataFormProperties>({
		});

	}

	export interface PortfolioMetadataConnections {

		/**
		 * Information about the videos contained within this portfolio.
		 * Required
		 */
		videos: PortfolioMetadataConnectionsVideos;
	}
	export interface PortfolioMetadataConnectionsFormProperties {
	}
	export function CreatePortfolioMetadataConnectionsFormGroup() {
		return new FormGroup<PortfolioMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface PortfolioMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioMetadataConnectionsVideosFormGroup() {
		return new FormGroup<PortfolioMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortfolioSort { alphabetical = 'alphabetical', clips = 'clips', modified = 'modified', recent = 'recent' }

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
	export interface PresetsFormProperties {

		/**
		 * The display name of the presets group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The canonical relative URI of the presets object.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePresetsFormGroup() {
		return new FormGroup<PresetsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PresetsMetadata {

		/**
		 * A list of resource URIs related to the album.
		 * Required
		 */
		connections: PresetsMetadataConnections;
	}
	export interface PresetsMetadataFormProperties {
	}
	export function CreatePresetsMetadataFormGroup() {
		return new FormGroup<PresetsMetadataFormProperties>({
		});

	}

	export interface PresetsMetadataConnections {

		/**
		 * Information about the videos in this preset.
		 * Required
		 */
		videos: PresetsMetadataConnectionsVideos;
	}
	export interface PresetsMetadataConnectionsFormProperties {
	}
	export function CreatePresetsMetadataConnectionsFormGroup() {
		return new FormGroup<PresetsMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface PresetsMetadataConnectionsVideosFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreatePresetsMetadataConnectionsVideosFormGroup() {
		return new FormGroup<PresetsMetadataConnectionsVideosFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PresetsSettings {

		/** Required */
		buttons: PresetsSettingsButtons;

		/** Required */
		logos: PresetsSettingsLogos;

		/** Required */
		outro: PresetsSettingsOutro;
	}
	export interface PresetsSettingsFormProperties {
	}
	export function CreatePresetsSettingsFormGroup() {
		return new FormGroup<PresetsSettingsFormProperties>({
		});

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
	export interface PresetsSettingsButtonsFormProperties {

		/**
		 * Whether the preset includes Embed button settings.
		 * Required
		 */
		embed: FormControl<boolean | null | undefined>,

		/**
		 * Whether the preset includes HD button settings.
		 * Required
		 */
		hd: FormControl<boolean | null | undefined>,

		/**
		 * Whether the preset includes Like button settings.
		 * Required
		 */
		like: FormControl<boolean | null | undefined>,

		/**
		 * Whether the present includes Share button settings.
		 * Required
		 */
		share: FormControl<boolean | null | undefined>,

		/**
		 * Whether the preset includes Vote button settings.
		 * Required
		 */
		vote: FormControl<boolean | null | undefined>,

		/**
		 * Whether the preset includes Watch Later button settings.
		 * Required
		 */
		watchlater: FormControl<boolean | null | undefined>,
	}
	export function CreatePresetsSettingsButtonsFormGroup() {
		return new FormGroup<PresetsSettingsButtonsFormProperties>({
			embed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			like: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			share: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			vote: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			watchlater: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

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
	export interface PresetsSettingsLogosFormProperties {

		/**
		 * Whether the preset includes custom logo settings.
		 * Required
		 */
		custom: FormControl<boolean | null | undefined>,

		/**
		 * Whether the present includes sticky custom logo settings.
		 * Required
		 */
		sticky_custom: FormControl<boolean | null | undefined>,

		/**
		 * Whether the preset includes Vimeo logo settings.
		 * Required
		 */
		vimeo: FormControl<boolean | null | undefined>,
	}
	export function CreatePresetsSettingsLogosFormGroup() {
		return new FormGroup<PresetsSettingsLogosFormProperties>({
			custom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sticky_custom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			vimeo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PresetsSettingsOutro {

		/** A comma-separated list of video URIs. Present only if the type is `uploaded_clips`. */
		clips?: string | null;

		/** The outro link settings. Present only if the type is `link`. */
		link?: PresetsSettingsOutroLink;

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
	export interface PresetsSettingsOutroFormProperties {

		/** A comma-separated list of video URIs. Present only if the type is `uploaded_clips`. */
		clips: FormControl<string | null | undefined>,

		/** The outro text. Present only if the type is `text`. */
		text: FormControl<string | null | undefined>,

		/**
		 * The preset outro type:
		 * Required
		 */
		type: FormControl<PresetsSettingsOutroType | null | undefined>,

		/** A comma-separated list of video URIs. Present only if type is `no idea`. */
		videos: FormControl<string | null | undefined>,
	}
	export function CreatePresetsSettingsOutroFormGroup() {
		return new FormGroup<PresetsSettingsOutroFormProperties>({
			clips: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PresetsSettingsOutroType | null | undefined>(undefined, [Validators.required]),
			videos: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PresetsSettingsOutroLink {

		/** The name of the outro link. */
		name?: string | null;

		/** The URL of the outro link. */
		url?: string | null;
	}
	export interface PresetsSettingsOutroLinkFormProperties {

		/** The name of the outro link. */
		name: FormControl<string | null | undefined>,

		/** The URL of the outro link. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePresetsSettingsOutroLinkFormGroup() {
		return new FormGroup<PresetsSettingsOutroLinkFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PresetsSettingsOutroType { link = 'link', 'no idea' = 'no idea', text = 'text', uploaded_clips = 'uploaded_clips', uploaded_videos = 'uploaded_videos' }

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
	export interface Text_trackFormProperties {

		/**
		 * Whether this text track is active.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The read-only URL of the text track file, intended for use with HLS playback.
		 * Required
		 */
		hls_link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the read-only HLS playback text track file expires.
		 * Required
		 */
		hls_link_expires_time: FormControl<string | null | undefined>,

		/**
		 * The language code for this text track. To see a full list, request
		 * `/languages?filter=texttrack`.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * The read-only URL of the text track file. You can upload to this link when you create it for the first time.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the text track link expires.
		 * Required
		 */
		link_expires_time: FormControl<string | null | undefined>,

		/**
		 * The descriptive name of this text track.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the text track:
		 * Option descriptions:
		 * * `captions` - The text track is for captions.
		 * * `subtitles` - The text track is for subtitles.
		 * Required
		 */
		type: FormControl<Text_trackType | null | undefined>,

		/**
		 * The relative URI of the text track.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateText_trackFormGroup() {
		return new FormGroup<Text_trackFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hls_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hls_link_expires_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link_expires_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Text_trackType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Text_trackType { captions = 'captions', subtitles = 'subtitles' }

	export interface Upload_attempt {

		/** The video to upload. */
		clip?: Video;

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
	export interface Upload_attemptFormProperties {

		/** The completion URI of the upload. */
		complete_uri: FormControl<string | null | undefined>,

		/** The HTML upload form. */
		form: FormControl<string | null | undefined>,

		/**
		 * The ticket identifier string for the upload.
		 * Required
		 */
		ticket_id: FormControl<string | null | undefined>,

		/**
		 * The upload URL.
		 * Required
		 */
		upload_link: FormControl<string | null | undefined>,

		/**
		 * The upload URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUpload_attemptFormGroup() {
		return new FormGroup<Upload_attemptFormProperties>({
			complete_uri: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			ticket_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upload_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Type: double
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
		 * Type: double
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
	export interface Video_versionsFormProperties {

		/**
		 * Whether this video version is the currently active one.
		 * Required
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The time in ISO 8601 for when the video version was created.
		 * Required
		 */
		created_time: FormControl<string | null | undefined>,

		/**
		 * The duration of the video version in seconds.
		 * Required
		 * Type: double
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * The file name of the video version.
		 * Required
		 */
		filename: FormControl<string | null | undefined>,

		/**
		 * The size in byes of the video version file.
		 * Required
		 * Type: double
		 */
		filesize: FormControl<number | null | undefined>,

		/**
		 * The time in ISO 8601 format when the video version was last modified.
		 * Required
		 */
		modified_time: FormControl<string | null | undefined>,

		/**
		 * The time in ISO 8601 format when the video version was uploaded.
		 * Required
		 */
		upload_date: FormControl<string | null | undefined>,

		/**
		 * The version's canonical relative URI.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideo_versionsFormGroup() {
		return new FormGroup<Video_versionsFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			created_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filesize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upload_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Video_versionsMetadata {

		/** Required */
		connections: Video_versionsMetadataConnections;
	}
	export interface Video_versionsMetadataFormProperties {
	}
	export function CreateVideo_versionsMetadataFormGroup() {
		return new FormGroup<Video_versionsMetadataFormProperties>({
		});

	}

	export interface Video_versionsMetadataConnections {

		/**
		 * Data from video associated with version
		 * Required
		 */
		video: Video_versionsMetadataConnectionsVideo;
	}
	export interface Video_versionsMetadataConnectionsFormProperties {
	}
	export function CreateVideo_versionsMetadataConnectionsFormGroup() {
		return new FormGroup<Video_versionsMetadataConnectionsFormProperties>({
		});

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
		 * Type: double
		 */
		total: number;

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: string;
	}
	export interface Video_versionsMetadataConnectionsVideoFormProperties {

		/**
		 * The total number of videos on this connection.
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * The API URI that resolves to the connection data.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideo_versionsMetadataConnectionsVideoFormGroup() {
		return new FormGroup<Video_versionsMetadataConnectionsVideoFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

		/**
		 * The file size in bytes of the uploaded video.
		 * Type: double
		 */
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
	export interface Video_versionsUploadFormProperties {

		/** The approach for uploading the video. */
		approach: FormControl<VideoUploadApproach | null | undefined>,

		/** The URI for completing the upload. */
		complete_uri: FormControl<string | null | undefined>,

		/** The HTML form for uploading a video through the post approach. */
		form: FormControl<string | null | undefined>,

		/** The link of the video to capture through the pull approach. */
		link: FormControl<string | null | undefined>,

		/** The redirect URL for the upload app. */
		redirect_url: FormControl<string | null | undefined>,

		/**
		 * The file size in bytes of the uploaded video.
		 * Type: double
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The status code for the availability of the uploaded video:
		 * Option descriptions:
		 * * `complete` - The upload is complete.
		 * * `error` - The upload ended with an error.
		 * * `in_progress` - The upload is underway.
		 * Required
		 */
		status: FormControl<VideoTranscodeStatus | null | undefined>,

		/** The link for sending video file data. */
		upload_link: FormControl<string | null | undefined>,
	}
	export function CreateVideo_versionsUploadFormGroup() {
		return new FormGroup<Video_versionsUploadFormProperties>({
			approach: new FormControl<VideoUploadApproach | null | undefined>(undefined),
			complete_uri: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<VideoTranscodeStatus | null | undefined>(undefined, [Validators.required]),
			upload_link: new FormControl<string | null | undefined>(undefined),
		});

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
		Get_endpoints(openapi: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?openapi=' + openapi, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all categories
		 * This method gets all existing categories.
		 * Get categories
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_categoriesSort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_categories(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_categoriesSort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_category_channels(category: string, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/channels&direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the groups in a category
		 * Get categories/{category}/groups
		 * @param {string} category The name of the category.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_category_groups(category: string, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_groupsSort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_category_videos(category: string, direction: Get_categoriesDirection | null | undefined, filter: Get_category_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/videos&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check for a video in a category
		 * Get categories/{category}/videos/{video_id}
		 * @param {string} category The name of the category.
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `relevant` - Relevant sorting is available only for search queries.
		 * @return {void} The channels were returned.
		 */
		Get_channels(direction: Get_categoriesDirection | null | undefined, filter: Get_channelsFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a channel
		 * Delete channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_channel(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific channel
		 * Get channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @return {void} 
		 */
		Categorize_channel(category: string, channel_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of channel moderators
		 * Delete channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} 
		 */
		Remove_channel_moderators(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/moderators', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the moderators in a channel
		 * Get channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The moderators were returned.
		 */
		Get_channel_moderators(channel_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/moderators?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace the moderators of a channel
		 * Patch channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {Array<User>} The moderators were replaced.
		 */
		Replace_channel_moderators(channel_id: number, requestBody: Replace_channel_moderatorsPatchBody): Observable<Array<User>> {
			return this.http.patch<Array<User>>(this.baseUri + 'channels/' + channel_id + '/moderators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a list of channel moderators
		 * Put channels/{channel_id}/moderators
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} The moderators were added.
		 */
		Add_channel_moderators(channel_id: number, requestBody: Add_channel_moderatorsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/moderators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific channel moderator
		 * Delete channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Remove_channel_moderator(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/moderators/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific channel moderator
		 * Get channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The moderator was returned.
		 */
		Get_channel_moderator(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/moderators/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific channel moderator
		 * Put channels/{channel_id}/moderators/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The users were returned.
		 */
		Get_channel_privacy_users(channel_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/privacy/users?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a user from viewing a private channel
		 * This method prevents a single user from being able to access the specified private channel.
		 * Delete channels/{channel_id}/privacy/users/{user_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscribersFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followers were returned.
		 */
		Get_channel_subscribers(channel_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscribersFilter, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/users?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of videos from a channel
		 * Delete channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} 
		 */
		Remove_videos_from_channel(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + channel_id + '/videos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a channel
		 * Get channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_channel_videos(channel_id: number, containing_uri: string | null | undefined, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a list of videos to a channel
		 * Put channels/{channel_id}/videos
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} The videos were added.
		 */
		Add_videos_to_channel(channel_id: number, requestBody: Add_videos_to_channelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a specific video from a channel
		 * Delete channels/{channel_id}/videos/{video_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video was returned.
		 */
		Get_channel_video(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to a channel
		 * Put channels/{channel_id}/videos/{video_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_channel(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the comments on a video
		 * Get channels/{channel_id}/videos/{video_id}/comments
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The comments were returned.
		 */
		Get_comments_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/comments?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the credited users in a video
		 * Get channels/{channel_id}/videos/{video_id}/credits
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_credits_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/credits?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who have liked a video
		 * Get channels/{channel_id}/videos/{video_id}/likes
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_likes_alt1(channel_id: number, video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/likes?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the thumbnails of a video
		 * Get channels/{channel_id}/videos/{video_id}/pictures
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The thumbnails were returned.
		 */
		Get_video_thumbnails_alt1(channel_id: number, video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who can view a user's private videos by default
		 * Get channels/{channel_id}/videos/{video_id}/privacy/users
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The users were returned.
		 */
		Get_video_privacy_users_alt1(channel_id: number, video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/privacy/users?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a list of users to view a private video
		 * The body of this request should follow our
		 * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
		 * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
		 * Put channels/{channel_id}/videos/{video_id}/privacy/users
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The users can now view the private video.
		 */
		Add_video_privacy_users_alt1(channel_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + channel_id + '/videos/' + video_id + '/privacy/users', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the text tracks of a video
		 * Get channels/{channel_id}/videos/{video_id}/texttracks
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `relevant` - Relevant sorting is available only for search queries.
		 * @return {void} The groups were returned.
		 */
		Get_groups(direction: Get_categoriesDirection | null | undefined, filter: Get_channelsFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a group
		 * Delete groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_group(group_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific group
		 * Get groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @return {void} The group was returned.
		 */
		Get_group(group_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the members of a group
		 * Get groups/{group_id}/users
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscribersFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The members were returned.
		 */
		Get_group_members(group_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscribersFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/users?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a group
		 * Get groups/{group_id}/videos
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_group_videos(group_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/videos?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a group
		 * Delete groups/{group_id}/videos/{video_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video was returned.
		 */
		Get_group_video(group_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + group_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a group
		 * Put groups/{group_id}/videos/{video_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		Get_languages(filter: Get_languagesFilter | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_albums_alt1Sort} sort The way to sort the results.
		 * @return {Array<Album>} The albums were returned.
		 */
		Get_albums_alt1(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_albums_alt1Sort | null | undefined): Observable<Array<Album>> {
			return this.http.get<Array<Album>>(this.baseUri + 'me/albums?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, {});
		}

		/**
		 * Delete an album
		 * Delete me/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_album_alt1(album_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific album
		 * Get me/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @return {void} The album was returned.
		 */
		Get_album_alt1(album_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in an album
		 * Get me/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {string} containing_uri The page containing the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {string} password The password of the album.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_album_videos_alt1Sort} sort The way to sort the results.
		 * @param {boolean} weak_search Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.
		 * @return {void} The videos were returned.
		 */
		Get_album_videos_alt1(album_id: number, containing_uri: string | null | undefined, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, password: string | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_album_videos_alt1Sort | null | undefined, weak_search: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&weak_search=' + weak_search, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all the videos in an album
		 * This method replaces all the existing videos in an album with one or more videos.
		 * Put me/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @return {void} 
		 */
		Replace_videos_in_album_alt1(album_id: number, requestBody: Replace_videos_in_album_alt1PutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/albums/' + album_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an album
		 * Delete me/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {string} password The password of the album.
		 * @return {void} The video was returned.
		 */
		Get_album_video_alt1(album_id: number, video_id: number, password: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id + '?password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to an album
		 * Put me/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_album_alt1(album_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/albums/' + album_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set a video as the album thumbnail
		 * Post me/albums/{album_id}/videos/{video_id}/set_album_thumbnail
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_appearances_alt1(direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/appearances?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories that a user follows
		 * Get me/categories
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_category_subscriptions_alt1Sort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_category_subscriptions_alt1(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_category_subscriptions_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_channel_subscriptions_alt1(direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscriptions_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a specific channel
		 * Delete me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} 
		 */
		Unsubscribe_from_channel_alt1(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a channel
		 * Get me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_channel_alt1(channel_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a specific channel
		 * Put me/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_feed_alt1Type} type The feed type.
		 * @return {void} The videos were returned.
		 */
		Get_feed_alt1(offset: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, type: Get_feed_alt1Type | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/feed?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&page=' + page + '&per_page=' + per_page + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the followers of a user
		 * Get me/followers
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The user's followers were returned.
		 */
		Get_followers_alt1(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/followers?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users that a user is following
		 * Get me/following
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_user_following_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followed users were returned.
		 */
		Get_user_following_alt1(direction: Get_categoriesDirection | null | undefined, filter: Get_user_following_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @return {void} 
		 */
		Unfollow_user_alt1(follow_user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user is following another user
		 * Get me/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_is_following_alt1(follow_user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a specific user
		 * Put me/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_user_groups_alt1(direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscriptions_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_groupsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a user from a group
		 * Delete me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @return {void} 
		 */
		Leave_group_alt1(group_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has joined a group
		 * Get me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_joined_group_alt1(group_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user to a group
		 * Put me/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_likes_alt1(filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/likes?filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to unlike a video
		 * Delete me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Unlike_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has liked a video
		 * Get me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_liked_video_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to like a video
		 * Put me/likes/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_user_vods_alt1Sort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_user_vods_alt1(direction: Get_categoriesDirection | null | undefined, filter: On_demand_pageType | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_user_vods_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_vod_purchasesSort} sort The way to sort the results.
		 * @return {void} The purchases and rentals were returned.
		 */
		Get_vod_purchases(direction: Get_categoriesDirection | null | undefined, filter: Get_vod_purchasesFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_vod_purchasesSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/ondemand/purchases?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has made a purchase or rental from an On Demand page
		 * Get me/ondemand/purchases/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} You have purchased the On Demand page.
		 */
		Check_if_vod_was_purchased_alt1(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/ondemand/purchases/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the pictures that belong to a user
		 * Get me/pictures
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The pictures were returned.
		 */
		Get_pictures_alt1(page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @return {void} 
		 */
		Delete_picture_alt1(portraitset_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user picture
		 * Get me/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The portfolios were returned.
		 */
		Get_portfolios_alt1(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific portfolio
		 * Get me/portfolios/{portfolio_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @return {void} The portfolio was returned.
		 */
		Get_portfolio_alt1(portfolio_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a portfolio
		 * Get me/portfolios/{portfolio_id}/videos
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_portfolio_videos_alt1Sort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `default` - This will sort to the default sort set on the portfolio.
		 * @return {void} The videos were returned.
		 */
		Get_portfolio_videos_alt1(portfolio_id: number, containing_uri: string | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_portfolio_videos_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a portfolio
		 * Delete me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_from_portfolio_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a portfolio
		 * Get me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video was returned.
		 */
		Get_portfolio_video_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a portfolio
		 * Put me/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_portfolio_alt1(portfolio_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/portfolios/' + portfolio_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the embed presets that a user has created
		 * Get me/presets
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The embed presets were returned.
		 */
		Get_embed_presets_alt1(page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific embed preset
		 * Get me/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @return {void} The embed preset was returned.
		 */
		Get_embed_preset_alt1(preset_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that have been added to an embed preset
		 * Get me/presets/{preset_id}/videos
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The videos were returned.
		 */
		Get_embed_preset_videos_alt1(preset_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/presets/' + preset_id + '/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the projects that belong to a user
		 * This method gets all the projects that belong to the specified user.
		 * Get me/projects
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_projects_alt1Sort} sort The way to sort the results.
		 * @return {Array<Project>} The projects were returned.
		 */
		Get_projects_alt1(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_projects_alt1Sort | null | undefined): Observable<Array<Project>> {
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
		 *     Type: double
		 * @param {boolean} should_delete_clips Whether to delete all the videos in the project along with the project itself.
		 * @return {void} 
		 */
		Delete_project_alt1(project_id: number, should_delete_clips: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/projects/' + project_id + '?should_delete_clips=' + should_delete_clips, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific project
		 * This method gets a single project that belongs to the specified user.
		 * Get me/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @param {boolean} should_delete_clips Whether to delete the videos when removing them from the project.
		 * @param {string} uris A comma-separated list of the video URIs to remove.
		 * @return {void} 
		 */
		Remove_videos_from_project_alt1(project_id: number, should_delete_clips: boolean | null | undefined, uris: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/projects/' + project_id + '/videos?should_delete_clips=' + should_delete_clips + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a project
		 * This method gets all the videos that belong to the specified project.
		 * Get me/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_project_videos_alt1Sort} sort The way to sort the results.
		 * @return {Array<Video>} The videos were returned.
		 */
		Get_project_videos_alt1(project_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_project_videos_alt1Sort | null | undefined): Observable<Array<Video>> {
			return this.http.get<Array<Video>>(this.baseUri + 'me/projects/' + project_id + '/videos?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Add a list of videos to a project
		 * This method adds multiple videos to the specified project.
		 * Put me/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_videos_alt1Sort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos_alt1(containing_uri: string | null | undefined, direction: Get_categoriesDirection | null | undefined, filter: Get_videos_alt1Filter | null | undefined, filter_embeddable: boolean | null | undefined, filter_playable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_videos_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&filter_playable=' + filter_playable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user owns a video
		 * Get me/videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The videos were returned.
		 */
		Get_watch_history(page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watched/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific video from a user's watch history
		 * Delete me/watched/videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_watch_later_queue_alt1(direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watchlater?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a user's Watch Later queue
		 * Delete me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_from_watch_later_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'me/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has added a specific video to their Watch Later queue
		 * Get me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video appears in the user's Watch Later queue.
		 */
		Check_watch_later_queue_alt1(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a user's Watch Later queue
		 * Put me/watchlater/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_genre_vodsSort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_genre_vods(genre_id: string, direction: Get_categoriesDirection | null | undefined, filter: Get_genre_vodsFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_genre_vodsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)) + '/pages&direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand page in a genre
		 * Check whether a genre contains an On Demand page.
		 * Get ondemand/genres/{genre_id}/pages/{ondemand_id}
		 * @param {string} genre_id The ID of the genre.
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} The On Demand page belongs to the genre.
		 */
		Get_genre_vod(genre_id: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/genres/' + (genre_id == null ? '' : encodeURIComponent(genre_id)) + '/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a draft of an On Demand page
		 * Delete ondemand/pages/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_vod_draft(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific On Demand page
		 * Get ondemand/pages/{ondemand_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} The On Demand page was returned.
		 */
		Get_vod(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the backgrounds of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/backgrounds
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The background images were returned.
		 */
		Get_vod_backgrounds(ondemand_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a background to an On Demand page
		 * Post ondemand/pages/{ondemand_id}/backgrounds
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} The background was created.
		 */
		Create_vod_background(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a background from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/backgrounds/{background_id}
		 * @param {number} background_id The ID of the background.
		 *     Type: double
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_vod_background(background_id: number, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds/' + background_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific background of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/backgrounds/{background_id}
		 * @param {number} background_id The ID of the background.
		 *     Type: double
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} The background image was returned.
		 */
		Get_vod_background(background_id: number, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/backgrounds/' + background_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the genres of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/genres
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {On_demand_videoType} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_vod_likes(ondemand_id: number, direction: Get_categoriesDirection | null | undefined, filter: On_demand_videoType | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/likes?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the posters of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/pictures
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The posters were returned.
		 */
		Get_vod_posters(ondemand_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a poster to an On Demand page
		 * Post ondemand/pages/{ondemand_id}/pictures
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} 
		 */
		Add_vod_poster(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific poster of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/pictures/{poster_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} poster_id The ID of the picture.
		 *     Type: double
		 * @return {void} The poster was returned.
		 */
		Get_vod_poster(ondemand_id: number, poster_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/pictures/' + poster_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the promotions on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {Get_vod_promotionsFilter} filter The filter to apply to the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The promotions were returned.
		 */
		Get_vod_promotions(ondemand_id: number, filter: Get_vod_promotionsFilter, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions?filter=' + filter + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a promotion from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/promotions/{promotion_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} promotion_id The ID of the promotion.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_vod_promotion(ondemand_id: number, promotion_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific promotion on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions/{promotion_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} promotion_id The ID of the promotion.
		 *     Type: double
		 * @return {void} The promotion was returned.
		 */
		Get_vod_promotion(ondemand_id: number, promotion_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the codes of a promotion on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} promotion_id The ID of the promotion.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The codes were returned.
		 */
		Get_vod_promotion_codes(ondemand_id: number, promotion_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/promotions/' + promotion_id + '/codes?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a list of regions from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/regions
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @return {void} The On Demand regions were deleted.
		 */
		Delete_vod_regions(ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the regions of an On Demand page
		 * Get ondemand/pages/{ondemand_id}/regions
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @return {void} 
		 */
		Add_vod_region(country: string, ondemand_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ondemand/pages/' + ondemand_id + '/regions/' + (country == null ? '' : encodeURIComponent(country)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the seasons on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_vod_seasonsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_vod_seasonsSort} sort The way to sort the results.
		 * @return {void} The seasons were returned.
		 */
		Get_vod_seasons(ondemand_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_vod_seasonsFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_vod_seasonsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific season on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons/{season_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} season_id The ID of the season.
		 *     Type: double
		 * @return {void} The season was returned.
		 */
		Get_vod_season(ondemand_id: number, season_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons/' + season_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a season on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/seasons/{season_id}/videos
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} season_id The ID of the season.
		 *     Type: double
		 * @param {Get_vod_seasonsFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_vod_season_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_vod_season_videos(ondemand_id: number, season_id: number, filter: Get_vod_seasonsFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_vod_season_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/seasons/' + season_id + '/videos?filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/videos
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_vod_videosFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_vod_videosSort} sort The way to sort the results.
		 * @return {void} * The videos were returned.
		 * * The videos were returned.
		 */
		Get_vod_videos(ondemand_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_vod_videosFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_vod_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ondemand/pages/' + ondemand_id + '/videos?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an On Demand page
		 * Delete ondemand/pages/{ondemand_id}/videos/{video_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_from_vod(ondemand_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ondemand/pages/' + ondemand_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video on an On Demand page
		 * Get ondemand/pages/{ondemand_id}/videos/{video_id}
		 * @param {number} ondemand_id The ID of the On Demand.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_videos_with_tagSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos_with_tag(word: string, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_videos_with_tagSort | null | undefined): Observable<HttpResponse<string>> {
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channelsSort} sort The way to sort the results.
		 * @return {void} The search results were returned.
		 */
		Search_users(direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user
		 * Get users/{user_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The user was returned.
		 */
		Get_user(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the albums that belong to a user
		 * Get users/{user_id}/albums
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_albums_alt1Sort} sort The way to sort the results.
		 * @return {Array<Album>} The albums were returned.
		 */
		Get_albums(user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_albums_alt1Sort | null | undefined): Observable<Array<Album>> {
			return this.http.get<Array<Album>>(this.baseUri + 'users/' + user_id + '/albums?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, {});
		}

		/**
		 * Delete an album
		 * Delete users/{user_id}/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_album(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific album
		 * Get users/{user_id}/albums/{album_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The album was returned.
		 */
		Get_album(album_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom upload thumbnails of an album
		 * Get users/{user_id}/albums/{album_id}/custom_thumbnails
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The custom uploaded thumbnails were returned.
		 */
		Get_album_custom_thumbs(album_id: number, user_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom uploaded thumbnail
		 * Post users/{user_id}/albums/{album_id}/custom_thumbnails
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} thumbnail_id The ID of the custom thumbnail.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_album_custom_thumbnail(album_id: number, thumbnail_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom uploaded album thumbnail
		 * Get users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} thumbnail_id The ID of the custom thumbnail.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The custom thumbnail was returned.
		 */
		Get_album_custom_thumbnail(album_id: number, thumbnail_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/custom_thumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom logos of an album
		 * Get users/{user_id}/albums/{album_id}/logos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The custom logos were returned.
		 */
		Get_album_logos(album_id: number, user_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom album logo
		 * Post users/{user_id}/albums/{album_id}/logos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} logo_id The ID of the custom logo.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_album_logo(album_id: number, logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom album logo
		 * Get users/{user_id}/albums/{album_id}/logos/{logo_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} logo_id The ID of the custom logo.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The custom logo was returned.
		 */
		Get_album_logo(album_id: number, logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/logos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in an album
		 * Get users/{user_id}/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {string} containing_uri The page containing the video URI.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {string} password The password of the album.
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_album_videos_alt1Sort} sort The way to sort the results.
		 * @param {boolean} weak_search Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.
		 * @return {void} The videos were returned.
		 */
		Get_album_videos(album_id: number, user_id: number, containing_uri: string | null | undefined, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, password: string | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_album_videos_alt1Sort | null | undefined, weak_search: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&weak_search=' + weak_search, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace all the videos in an album
		 * This method replaces all the existing videos in an album with one or more videos.
		 * Put users/{user_id}/albums/{album_id}/videos
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Replace_videos_in_album(album_id: number, user_id: number, requestBody: Replace_videos_in_albumPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from an album
		 * Delete users/{user_id}/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {string} password The password of the album.
		 * @return {void} The video was returned.
		 */
		Get_album_video(album_id: number, user_id: number, video_id: number, password: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id + '?password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a specific video to an album
		 * Put users/{user_id}/albums/{album_id}/videos/{video_id}
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_album(album_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set a video as the album thumbnail
		 * Post users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail
		 * @param {number} album_id The ID of the album.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {Album} The album was updated with a new thumbnail.
		 */
		Set_video_as_album_thumbnail(album_id: number, user_id: number, video_id: number, requestBody: Set_video_as_album_thumbnailPostBody): Observable<Album> {
			return this.http.post<Album>(this.baseUri + 'users/' + user_id + '/albums/' + album_id + '/videos/' + video_id + '/set_album_thumbnail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the videos in which a user appears
		 * Get users/{user_id}/appearances
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_appearances(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/appearances?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories that a user follows
		 * Get users/{user_id}/categories
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_category_subscriptions_alt1Sort} sort The way to sort the results.
		 * @return {void} The categories were returned.
		 */
		Get_category_subscriptions(user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_category_subscriptions_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/categories?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a category
		 * Delete users/{user_id}/categories/{category}
		 * @param {string} category The name of the category.
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_category(category: string, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/categories/' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a single category
		 * Put users/{user_id}/categories/{category}
		 * @param {number} category The name of the category.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Subscribe_to_category(category: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/categories/' + category, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels to which a user subscribes
		 * Get users/{user_id}/channels
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_channelsSort} sort The way to sort the results.
		 * @return {void} The channels were returned.
		 */
		Get_channel_subscriptions(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscriptions_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_channelsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/channels?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe a user from a specific channel
		 * Delete users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Unsubscribe_from_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user follows a channel
		 * Get users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_subscribed_to_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe a user to a specific channel
		 * Put users/{user_id}/channels/{channel_id}
		 * @param {number} channel_id The ID of the channel.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Subscribe_to_channel(channel_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/channels/' + channel_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the custom logos that belong to a user
		 * Get users/{user_id}/customlogos
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The custom logos were returned.
		 */
		Get_custom_logos(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/customlogos', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a custom logo
		 * Post users/{user_id}/customlogos
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Create_custom_logo(user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/customlogos', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom logo
		 * Get users/{user_id}/customlogos/{logo_id}
		 * @param {number} logo_id The ID of the custom logo.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The custom logo was returned.
		 */
		Get_custom_logo(logo_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/customlogos/' + logo_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all videos in a user's feed
		 * Get users/{user_id}/feed
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {string} offset Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_feed_alt1Type} type The feed type.
		 * @return {void} The videos were returned.
		 */
		Get_feed(user_id: number, offset: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, type: Get_feed_alt1Type | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/feed?offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&page=' + page + '&per_page=' + per_page + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the followers of a user
		 * Get users/{user_id}/followers
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The user's followers were returned.
		 */
		Get_followers(user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/followers?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users that a user is following
		 * Get users/{user_id}/following
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_user_following_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The followed users were returned.
		 */
		Get_user_following(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_user_following_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/following?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a list of users
		 * Post users/{user_id}/following
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Follow_users(user_id: number, requestBody: Follow_usersPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/following', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow a user
		 * Delete users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Unfollow_user(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user is following another user
		 * Get users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_is_following(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Follow a specific user
		 * Put users/{user_id}/following/{follow_user_id}
		 * @param {number} follow_user_id The ID of the following user.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Follow_user(follow_user_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/following/' + follow_user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the groups that a user has joined
		 * Get users/{user_id}/groups
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_subscriptions_alt1Filter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_category_groupsSort} sort The way to sort the results.
		 * @return {void} The groups were returned.
		 */
		Get_user_groups(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_subscriptions_alt1Filter | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_category_groupsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/groups?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a user from a group
		 * Delete users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Leave_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has joined a group
		 * Get users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_joined_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user to a group
		 * Put users/{user_id}/groups/{group_id}
		 * @param {number} group_id The ID of the group.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Join_group(group_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/groups/' + group_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has liked
		 * Get users/{user_id}/likes
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_likes(user_id: number, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/likes?filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to unlike a video
		 * Delete users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Unlike_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has liked a video
		 * Get users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Check_if_user_liked_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/likes/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cause a user to like a video
		 * Put users/{user_id}/likes/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Like_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/likes/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the On Demand pages of a user
		 * Get users/{user_id}/ondemand/pages
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {On_demand_pageType} filter The type of On Demand pages to return.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_user_vods_alt1Sort} sort The way to sort the results.
		 * @return {void} The On Demand pages were returned.
		 */
		Get_user_vods(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: On_demand_pageType | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_user_vods_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/ondemand/pages?direction=' + direction + '&filter=' + filter + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an On Demand page
		 * Post users/{user_id}/ondemand/pages
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Create_vod(user_id: number, requestBody: Create_vodPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/ondemand/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has made a purchase or rental from an On Demand page
		 * Get users/{user_id}/ondemand/purchases
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} You have purchased the On Demand page.
		 */
		Check_if_vod_was_purchased(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/ondemand/purchases', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the pictures that belong to a user
		 * Get users/{user_id}/pictures
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The pictures were returned.
		 */
		Get_pictures(user_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a user picture
		 * Post users/{user_id}/pictures
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The user picture was created.
		 */
		Create_picture(user_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + user_id + '/pictures', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user picture
		 * Delete users/{user_id}/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_picture(portraitset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user picture
		 * Get users/{user_id}/pictures/{portraitset_id}
		 * @param {number} portraitset_id The ID of the picture.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The picture was returned.
		 */
		Get_picture(portraitset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/pictures/' + portraitset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the portfolios that belong to a user
		 * Get users/{user_id}/portfolios
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The portfolios were returned.
		 */
		Get_portfolios(user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The portfolio was returned.
		 */
		Get_portfolio(portfolio_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}/videos
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {string} containing_uri The page that contains the video URI.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_portfolio_videos_alt1Sort} sort The way to sort the results.
		 * Option descriptions:
		 *  * `default` - This will sort to the default sort set on the portfolio.
		 * @return {void} The videos were returned.
		 */
		Get_portfolio_videos(portfolio_id: number, user_id: number, containing_uri: string | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_portfolio_videos_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a portfolio
		 * Delete users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_from_portfolio(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video in a portfolio
		 * Get users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video was returned.
		 */
		Get_portfolio_video(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a portfolio
		 * Put users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}
		 * @param {number} portfolio_id The ID of the portfolio.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_portfolio(portfolio_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/portfolios/' + portfolio_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the embed presets that a user has created
		 * Get users/{user_id}/presets
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The embed presets were returned.
		 */
		Get_embed_presets(user_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific embed preset
		 * Get users/{user_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The embed preset was returned.
		 */
		Get_embed_preset(preset_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that have been added to an embed preset
		 * Get users/{user_id}/presets/{preset_id}/videos
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The videos were returned.
		 */
		Get_embed_preset_videos(preset_id: number, user_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/presets/' + preset_id + '/videos?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the projects that belong to a user
		 * This method gets all the projects that belong to the specified user.
		 * Get users/{user_id}/projects
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_projects_alt1Sort} sort The way to sort the results.
		 * @return {Array<Project>} The projects were returned.
		 */
		Get_projects(user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_projects_alt1Sort | null | undefined): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'users/' + user_id + '/projects?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Create a project
		 * This method creates a new project for the specified user.
		 * Post users/{user_id}/projects
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {boolean} should_delete_clips Whether to delete all the videos in the project along with the project itself.
		 * @return {void} 
		 */
		Delete_project(project_id: number, user_id: number, should_delete_clips: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '?should_delete_clips=' + should_delete_clips, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific project
		 * This method gets a single project that belongs to the specified user.
		 * Get users/{user_id}/projects/{project_id}
		 * @param {number} project_id The ID of the project.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {boolean} should_delete_clips Whether to delete the videos when removing them from the project.
		 * @param {string} uris A comma-separated list of the video URIs to remove.
		 * @return {void} 
		 */
		Remove_videos_from_project(project_id: number, user_id: number, should_delete_clips: boolean | null | undefined, uris: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos?should_delete_clips=' + should_delete_clips + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a project
		 * This method gets all the videos that belong to the specified project.
		 * Get users/{user_id}/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_project_videos_alt1Sort} sort The way to sort the results.
		 * @return {Array<Video>} The videos were returned.
		 */
		Get_project_videos(project_id: number, user_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_project_videos_alt1Sort | null | undefined): Observable<Array<Video>> {
			return this.http.get<Array<Video>>(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * Add a list of videos to a project
		 * This method adds multiple videos to the specified project.
		 * Put users/{user_id}/projects/{project_id}/videos
		 * @param {number} project_id The ID of the project.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_to_project(project_id: number, user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + user_id + '/projects/' + project_id + '/videos/' + video_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete a user's streaming upload
		 * Delete users/{user_id}/uploads/{upload}
		 * @param {number} upload The ID of the upload attempt.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {string} signature The crypto signature of the completed upload.
		 * @param {number} video_file_id The ID of the uploaded file.
		 *     Type: double
		 * @return {void} 
		 */
		Complete_streaming_upload(upload: number, user_id: number, signature: string, video_file_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/uploads/' + upload + '?signature=' + (signature == null ? '' : encodeURIComponent(signature)) + '&video_file_id=' + video_file_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a user's upload attempt
		 * Get users/{user_id}/uploads/{upload}
		 * @param {number} upload The ID of the upload attempt.
		 *     Type: double
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @return {void} The upload attempt was returned.
		 */
		Get_upload_attempt(upload: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/uploads/' + upload, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos that a user has uploaded
		 * Get users/{user_id}/videos
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {string} containing_uri The page that contains the video URI. Only available when not paired with `query`.
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_videos_alt1Filter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {boolean} filter_playable Whether to filter by all playable videos or by all videos that are not  playable.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_videos_alt1Sort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_videos(user_id: number, containing_uri: string | null | undefined, direction: Get_categoriesDirection | null | undefined, filter: Get_videos_alt1Filter | null | undefined, filter_embeddable: boolean | null | undefined, filter_playable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_videos_alt1Sort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/videos?containing_uri=' + (containing_uri == null ? '' : encodeURIComponent(containing_uri)) + '&direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&filter_playable=' + filter_playable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user owns a video
		 * Get users/{user_id}/videos/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The user owns the video.
		 */
		Check_if_user_owns_video(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the videos in a user's Watch Later queue
		 * Get users/{user_id}/watchlater
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {Get_channel_videosFilter} filter The attribute by which to filter the results.
		 * @param {boolean} filter_embeddable Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_group_videosSort} sort The way to sort the results.
		 * @return {void} The videos were returned.
		 */
		Get_watch_later_queue(user_id: number, direction: Get_categoriesDirection | null | undefined, filter: Get_channel_videosFilter | null | undefined, filter_embeddable: boolean | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_group_videosSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/watchlater?direction=' + direction + '&filter=' + filter + '&filter_embeddable=' + filter_embeddable + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a video from a user's Watch Later queue
		 * Delete users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_from_watch_later(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + user_id + '/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if a user has added a specific video to their Watch Later queue
		 * Get users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video appears in the user's Watch Later queue.
		 */
		Check_watch_later_queue(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + user_id + '/watchlater/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a video to a user's Watch Later queue
		 * Put users/{user_id}/watchlater/{video_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query Search query.
		 * @param {Search_videosSort} sort The way to sort the results.
		 * @param {string} uris The comma-separated list of videos to find.
		 * @return {void} The search results were returned.
		 */
		Search_videos(direction: Get_categoriesDirection | null | undefined, filter: Search_videosFilter | null | undefined, links: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string, sort: Search_videosSort | null | undefined, uris: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos?direction=' + direction + '&filter=' + filter + '&links=' + (links == null ? '' : encodeURIComponent(links)) + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort + '&uris=' + (uris == null ? '' : encodeURIComponent(uris)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video
		 * Delete videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video(video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video
		 * Get videos/{video_id}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The video was returned.
		 */
		Get_video(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the channels to which a user can add or remove a specific video
		 * Get videos/{video_id}/available_channels
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The channels were returned.
		 */
		Get_available_video_channels(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/available_channels', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the categories to which a video belongs
		 * Get videos/{video_id}/categories
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The categories were returned.
		 */
		Get_video_categories(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/categories', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the comments on a video
		 * Get videos/{video_id}/comments
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The comments were returned.
		 */
		Get_comments(video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments?direction=' + direction + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video comment
		 * Delete videos/{video_id}/comments/{comment_id}
		 * @param {number} comment_id The ID of the comment.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_comment(comment_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific video comment
		 * Get videos/{video_id}/comments/{comment_id}
		 * @param {number} comment_id The ID of the comment.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The comment was returned.
		 */
		Get_comment(comment_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the replies to a video comment
		 * Get videos/{video_id}/comments/{comment_id}/replies
		 * @param {number} comment_id The ID of the comment.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The replies were returned.
		 */
		Get_comment_replies(comment_id: number, video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/comments/' + comment_id + '/replies?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the credited users in a video
		 * Get videos/{video_id}/credits
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {string} query The search query to use to filter the results.
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_credits(video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, query: string | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/credits?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a credit for a user in a video
		 * Delete videos/{video_id}/credits/{credit_id}
		 * @param {number} credit_id The ID of the credit.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_credit(credit_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/credits/' + credit_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific credited user in a video
		 * Get videos/{video_id}/credits/{credit_id}
		 * @param {number} credit_id The ID of the credit.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The credit was returned.
		 */
		Get_video_credit(credit_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/credits/' + credit_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who have liked a video
		 * Get videos/{video_id}/likes
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_categoriesDirection} direction The sort direction of the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @param {Get_channel_moderatorsSort} sort The way to sort the results.
		 * @return {void} The users were returned.
		 */
		Get_video_likes(video_id: number, direction: Get_categoriesDirection | null | undefined, page: number | null | undefined, per_page: number | null | undefined, sort: Get_channel_moderatorsSort | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/likes?direction=' + direction + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the thumbnails of a video
		 * Get videos/{video_id}/pictures
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The thumbnails were returned.
		 */
		Get_video_thumbnails(video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/pictures?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a video thumbnail
		 * Delete videos/{video_id}/pictures/{picture_id}
		 * @param {number} picture_id The ID of the picture.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_thumbnail(picture_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/pictures/' + picture_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a video thumbnail
		 * Get videos/{video_id}/pictures/{picture_id}
		 * @param {number} picture_id The ID of the picture.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The thumbnail was returned.
		 */
		Get_video_thumbnail(picture_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/pictures/' + picture_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an embed preset from a video
		 * Delete videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if an embed preset has been added to a video
		 * Get videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Get_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add an embed preset to a video
		 * Put videos/{video_id}/presets/{preset_id}
		 * @param {number} preset_id The ID of the preset.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_embed_preset(preset_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/presets/' + preset_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the domains on which a video can be embedded
		 * Get videos/{video_id}/privacy/domains
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The domains were returned.
		 */
		Get_video_privacy_domains(video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/privacy/domains?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a video from being embedded on a domain
		 * Delete videos/{video_id}/privacy/domains/{domain}
		 * @param {string} domain The domain name.
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
		 * @return {void} 
		 */
		Add_video_privacy_domain(domain: string, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/domains/' + (domain == null ? '' : encodeURIComponent(domain)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the users who can view a user's private videos by default
		 * Get videos/{video_id}/privacy/users
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The users were returned.
		 */
		Get_video_privacy_users(video_id: number, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/privacy/users?page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a list of users to view a private video
		 * The body of this request should follow our
		 * [batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain
		 * a single `URI` field, and the value of this field must be the URI of the user who can view this video.
		 * Put videos/{video_id}/privacy/users
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The users can now view the private video.
		 */
		Add_video_privacy_users(video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/users', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restrict a user from viewing a private video
		 * Delete videos/{video_id}/privacy/users/{user_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_video_privacy_user(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/privacy/users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permit a specific user to view a private video
		 * Put videos/{video_id}/privacy/users/{user_id}
		 * @param {number} user_id The ID of the user.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The user can now view the private video.
		 */
		Add_video_privacy_user(user_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos/' + video_id + '/privacy/users/' + user_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the tags of a video
		 * Get videos/{video_id}/tags
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The tags were returned.
		 */
		Get_video_tags(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a video
		 * Delete videos/{video_id}/tags/{word}
		 * @param {number} video_id The ID of the video.
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
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
		 *     Type: double
		 * @return {void} The text tracks were returned.
		 */
		Get_text_tracks(video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/texttracks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a text track
		 * Delete videos/{video_id}/texttracks/{texttrack_id}
		 * @param {number} texttrack_id The ID of the text track.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Delete_text_track(texttrack_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos/' + video_id + '/texttracks/' + texttrack_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific text track
		 * Get videos/{video_id}/texttracks/{texttrack_id}
		 * @param {number} texttrack_id The ID of the text track.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The text track was returned.
		 */
		Get_text_track(texttrack_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/texttracks/' + texttrack_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new custom logo to a video
		 * Post videos/{video_id}/timelinethumbnails
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} 
		 */
		Create_video_custom_logo(video_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'videos/' + video_id + '/timelinethumbnails', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a custom video logo
		 * Get videos/{video_id}/timelinethumbnails/{thumbnail_id}
		 * @param {number} thumbnail_id The ID of the picture.
		 *     Type: double
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @return {void} The custom logo was returned.
		 */
		Get_video_custom_logo(thumbnail_id: number, video_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/timelinethumbnails/' + thumbnail_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the related videos of a video
		 * Get videos/{video_id}/videos
		 * @param {number} video_id The ID of the video.
		 *     Type: double
		 * @param {Get_related_videosFilter} filter The attribute by which to filter the results.
		 * @param {number} page The page number of the results to show.
		 *     Type: double
		 * @param {number} per_page The number of items to show on each page of results, up to a maximum of 100.
		 *     Type: double
		 * @return {void} The related videos were returned.
		 */
		Get_related_videos(video_id: number, filter: Get_related_videosFilter | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/' + video_id + '/videos?filter=' + filter + '&page=' + page + '&per_page=' + per_page, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Get_categoriesDirection { asc = 'asc', desc = 'desc' }

	export enum Get_categoriesSort { last_video_featured_time = 'last_video_featured_time', name = 'name' }

	export enum Get_category_channelsSort { alphabetical = 'alphabetical', date = 'date', followers = 'followers', videos = 'videos' }

	export enum Get_category_groupsSort { alphabetical = 'alphabetical', date = 'date', members = 'members', videos = 'videos' }

	export enum Get_category_videosFilter { conditional_featured = 'conditional_featured', embeddable = 'embeddable' }

	export enum Get_category_videosSort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', duration = 'duration', featured = 'featured', likes = 'likes', plays = 'plays', relevant = 'relevant' }

	export enum Get_channelsFilter { featured = 'featured' }

	export enum Get_channelsSort { alphabetical = 'alphabetical', date = 'date', followers = 'followers', relevant = 'relevant', videos = 'videos' }

	export interface Add_channel_categoriesPutBody {

		/**
		 * The array of category URIs to add.
		 * Required
		 */
		channels: Array<string>;
	}
	export interface Add_channel_categoriesPutBodyFormProperties {
	}
	export function CreateAdd_channel_categoriesPutBodyFormGroup() {
		return new FormGroup<Add_channel_categoriesPutBodyFormProperties>({
		});

	}

	export enum Get_channel_moderatorsSort { alphabetical = 'alphabetical', date = 'date' }

	export interface Replace_channel_moderatorsPatchBody {

		/**
		 * The URI of the user to add as a moderator.
		 * Required
		 */
		user_uri: string;
	}
	export interface Replace_channel_moderatorsPatchBodyFormProperties {

		/**
		 * The URI of the user to add as a moderator.
		 * Required
		 */
		user_uri: FormControl<string | null | undefined>,
	}
	export function CreateReplace_channel_moderatorsPatchBodyFormGroup() {
		return new FormGroup<Replace_channel_moderatorsPatchBodyFormProperties>({
			user_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Add_channel_moderatorsPutBody {

		/**
		 * The URI of a user to add as a moderator.
		 * Required
		 */
		user_uri: string;
	}
	export interface Add_channel_moderatorsPutBodyFormProperties {

		/**
		 * The URI of a user to add as a moderator.
		 * Required
		 */
		user_uri: FormControl<string | null | undefined>,
	}
	export function CreateAdd_channel_moderatorsPutBodyFormGroup() {
		return new FormGroup<Add_channel_moderatorsPutBodyFormProperties>({
			user_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Get_channel_subscribersFilter { moderators = 'moderators' }

	export enum Get_channel_videosFilter { embeddable = 'embeddable' }

	export enum Get_channel_videosSort { added = 'added', alphabetical = 'alphabetical', comments = 'comments', date = 'date', default = 'default', duration = 'duration', likes = 'likes', manual = 'manual', modified_time = 'modified_time', plays = 'plays' }

	export interface Add_videos_to_channelPutBody {

		/**
		 * The URI of a video to add.
		 * Required
		 */
		video_uri: string;
	}
	export interface Add_videos_to_channelPutBodyFormProperties {

		/**
		 * The URI of a video to add.
		 * Required
		 */
		video_uri: FormControl<string | null | undefined>,
	}
	export function CreateAdd_videos_to_channelPutBodyFormGroup() {
		return new FormGroup<Add_videos_to_channelPutBodyFormProperties>({
			video_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Get_group_videosSort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', duration = 'duration', likes = 'likes', plays = 'plays' }

	export enum Get_languagesFilter { texttracks = 'texttracks' }

	export enum Get_albums_alt1Sort { alphabetical = 'alphabetical', date = 'date', duration = 'duration', videos = 'videos' }

	export enum Get_album_videos_alt1Sort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', default = 'default', duration = 'duration', likes = 'likes', manual = 'manual', modified_time = 'modified_time', plays = 'plays' }

	export interface Replace_videos_in_album_alt1PutBody {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: string;
	}
	export interface Replace_videos_in_album_alt1PutBodyFormProperties {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: FormControl<string | null | undefined>,
	}
	export function CreateReplace_videos_in_album_alt1PutBodyFormGroup() {
		return new FormGroup<Replace_videos_in_album_alt1PutBodyFormProperties>({
			videos: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Set_video_as_album_thumbnail_alt1PostBody {

		/**
		 * The video frame time in seconds to use as the album thumbnail.
		 * Type: double
		 */
		time_code?: number | null;
	}
	export interface Set_video_as_album_thumbnail_alt1PostBodyFormProperties {

		/**
		 * The video frame time in seconds to use as the album thumbnail.
		 * Type: double
		 */
		time_code: FormControl<number | null | undefined>,
	}
	export function CreateSet_video_as_album_thumbnail_alt1PostBodyFormGroup() {
		return new FormGroup<Set_video_as_album_thumbnail_alt1PostBodyFormProperties>({
			time_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Get_category_subscriptions_alt1Sort { alphabetical = 'alphabetical', date = 'date', name = 'name' }

	export enum Get_channel_subscriptions_alt1Filter { moderated = 'moderated' }

	export enum Get_feed_alt1Type { appears = 'appears', category_featured = 'category_featured', channel = 'channel', facebook_feed = 'facebook_feed', following = 'following', group = 'group', likes = 'likes', ondemand_publish = 'ondemand_publish', share = 'share', tagged_with = 'tagged_with', twitter_timeline = 'twitter_timeline', uploads = 'uploads' }

	export enum Get_user_following_alt1Filter { online = 'online' }

	export interface Follow_users_alt1PostBody {

		/**
		 * An array of user URIs for the list of users to follow.
		 * Required
		 */
		users: Array<string>;
	}
	export interface Follow_users_alt1PostBodyFormProperties {
	}
	export function CreateFollow_users_alt1PostBodyFormGroup() {
		return new FormGroup<Follow_users_alt1PostBodyFormProperties>({
		});

	}

	export enum Get_user_vods_alt1Sort { added = 'added', alphabetical = 'alphabetical', date = 'date', modified_time = 'modified_time', name = 'name', 'publish.time' = 'publish.time', rating = 'rating' }

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
		buy?: Create_vod_alt1PostBodyBuy;

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
		episodes?: Create_vod_alt1PostBodyEpisodes;

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link?: string | null;

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: string;
		rent?: Create_vod_alt1PostBodyRent;
		subscription?: Create_vod_alt1PostBodySubscription;

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: On_demand_pageType;
	}
	export interface Create_vod_alt1PostBodyFormProperties {

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
		accepted_currencies: FormControl<Create_vod_alt1PostBodyAccepted_currencies | null | undefined>,

		/**
		 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
		 * Required
		 */
		content_rating: FormControl<Content_ratingCode | null | undefined>,

		/**
		 * The description of the On Demand page.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** The custom domain of the On Demand page. */
		domain_link: FormControl<string | null | undefined>,

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link: FormControl<string | null | undefined>,

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: FormControl<On_demand_pageType | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyFormProperties>({
			accepted_currencies: new FormControl<Create_vod_alt1PostBodyAccepted_currencies | null | undefined>(undefined),
			content_rating: new FormControl<Content_ratingCode | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain_link: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<On_demand_pageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Create_vod_alt1PostBodyAccepted_currencies { AUD = 'AUD', CAD = 'CAD', CHF = 'CHF', DKK = 'DKK', EUR = 'EUR', GBP = 'GBP', JPY = 'JPY', KRW = 'KRW', NOK = 'NOK', PLN = 'PLN', SEK = 'SEK', USD = 'USD' }

	export interface Create_vod_alt1PostBodyBuy {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active?: boolean | null;

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download?: boolean | null;
		price?: Create_vod_alt1PostBodyBuyPrice;
	}
	export interface Create_vod_alt1PostBodyBuyFormProperties {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active: FormControl<boolean | null | undefined>,

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyBuyFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyBuyPrice {

		/**
		 * The purchase price of this video in AUD.
		 * Type: double
		 */
		AUD?: number | null;

		/**
		 * The purchase price of this video in CAD.
		 * Type: double
		 */
		CAD?: number | null;

		/**
		 * The purchase price of this video in CHF.
		 * Type: double
		 */
		CHF?: number | null;

		/**
		 * The purchase price of this video in DKK.
		 * Type: double
		 */
		DKK?: number | null;

		/**
		 * The purchase price of this video in EUR.
		 * Type: double
		 */
		EUR?: number | null;

		/**
		 * The purchase price of this video in GBP.
		 * Type: double
		 */
		GBP?: number | null;

		/**
		 * The purchase price of this video in JPY.
		 * Type: double
		 */
		JPY?: number | null;

		/**
		 * The purchase price of this video in KRW.
		 * Type: double
		 */
		KRW?: number | null;

		/**
		 * The purchase price of this video in NOK.
		 * Type: double
		 */
		NOK?: number | null;

		/**
		 * The purchase price of this video in PLN.
		 * Type: double
		 */
		PLN?: number | null;

		/**
		 * The purchase price of this video in SEK.
		 * Type: double
		 */
		SEK?: number | null;

		/**
		 * The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vod_alt1PostBodyBuyPriceFormProperties {

		/**
		 * The purchase price of this video in AUD.
		 * Type: double
		 */
		AUD: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in CAD.
		 * Type: double
		 */
		CAD: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in CHF.
		 * Type: double
		 */
		CHF: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in DKK.
		 * Type: double
		 */
		DKK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in EUR.
		 * Type: double
		 */
		EUR: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in GBP.
		 * Type: double
		 */
		GBP: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in JPY.
		 * Type: double
		 */
		JPY: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in KRW.
		 * Type: double
		 */
		KRW: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in NOK.
		 * Type: double
		 */
		NOK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in PLN.
		 * Type: double
		 */
		PLN: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in SEK.
		 * Type: double
		 */
		SEK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyBuyPriceFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyBuyPriceFormProperties>({
			AUD: new FormControl<number | null | undefined>(undefined),
			CAD: new FormControl<number | null | undefined>(undefined),
			CHF: new FormControl<number | null | undefined>(undefined),
			DKK: new FormControl<number | null | undefined>(undefined),
			EUR: new FormControl<number | null | undefined>(undefined),
			GBP: new FormControl<number | null | undefined>(undefined),
			JPY: new FormControl<number | null | undefined>(undefined),
			KRW: new FormControl<number | null | undefined>(undefined),
			NOK: new FormControl<number | null | undefined>(undefined),
			PLN: new FormControl<number | null | undefined>(undefined),
			SEK: new FormControl<number | null | undefined>(undefined),
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyEpisodes {
		buy?: Create_vod_alt1PostBodyEpisodesBuy;
		rent?: Create_vod_alt1PostBodyEpisodesRent;
	}
	export interface Create_vod_alt1PostBodyEpisodesFormProperties {
	}
	export function CreateCreate_vod_alt1PostBodyEpisodesFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyEpisodesFormProperties>({
		});

	}

	export interface Create_vod_alt1PostBodyEpisodesBuy {

		/** Whether episodes can be bought. */
		active?: boolean | null;

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download?: boolean | null;
		price?: Create_vod_alt1PostBodyEpisodesBuyPrice;
	}
	export interface Create_vod_alt1PostBodyEpisodesBuyFormProperties {

		/** Whether episodes can be bought. */
		active: FormControl<boolean | null | undefined>,

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyEpisodesBuyFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyEpisodesBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyEpisodesBuyPrice {

		/**
		 * The purchase price per episode. *Required if `episodes.buy.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vod_alt1PostBodyEpisodesBuyPriceFormProperties {

		/**
		 * The purchase price per episode. *Required if `episodes.buy.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyEpisodesBuyPriceFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyEpisodesBuyPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyEpisodesRent {

		/** Whether episodes can be rented */
		active?: boolean | null;

		/** The period in which this episode can be rented for. */
		period?: Create_vod_alt1PostBodyEpisodesRentPeriod | null;
		price?: Create_vod_alt1PostBodyEpisodesRentPrice;
	}
	export interface Create_vod_alt1PostBodyEpisodesRentFormProperties {

		/** Whether episodes can be rented */
		active: FormControl<boolean | null | undefined>,

		/** The period in which this episode can be rented for. */
		period: FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyEpisodesRentFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyEpisodesRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>(undefined),
		});

	}

	export enum Create_vod_alt1PostBodyEpisodesRentPeriod { '1 week' = '1 week', '1 year' = '1 year', '24 hour' = '24 hour', '3 month' = '3 month', '30 day' = '30 day', '48 hour' = '48 hour', '6 month' = '6 month', '72 hour' = '72 hour' }

	export interface Create_vod_alt1PostBodyEpisodesRentPrice {

		/**
		 * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vod_alt1PostBodyEpisodesRentPriceFormProperties {

		/**
		 * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyEpisodesRentPriceFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyEpisodesRentPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyRent {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active?: boolean | null;

		/** The period in which this can be rented for. */
		period?: Create_vod_alt1PostBodyEpisodesRentPeriod | null;
		price?: Create_vod_alt1PostBodyRentPrice;
	}
	export interface Create_vod_alt1PostBodyRentFormProperties {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active: FormControl<boolean | null | undefined>,

		/** The period in which this can be rented for. */
		period: FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyRentFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodyRentPrice {

		/**
		 * The rental price of this video in AUD.
		 * Type: double
		 */
		AUD?: number | null;

		/**
		 * The rental price of this video in CAD.
		 * Type: double
		 */
		CAD?: number | null;

		/**
		 * The rental price of this video in CHF.
		 * Type: double
		 */
		CHF?: number | null;

		/**
		 * The rental price of this video in DKK.
		 * Type: double
		 */
		DKK?: number | null;

		/**
		 * The rental price of this video in EUR.
		 * Type: double
		 */
		EUR?: number | null;

		/**
		 * The rental price of this video in GBP.
		 * Type: double
		 */
		GBP?: number | null;

		/**
		 * The rental price of this video in JPY.
		 * Type: double
		 */
		JPY?: number | null;

		/**
		 * The rental price of this video in KRW.
		 * Type: double
		 */
		KRW?: number | null;

		/**
		 * The rental price of this video in NOK.
		 * Type: double
		 */
		NOK?: number | null;

		/**
		 * The rental price of this video in PLN.
		 * Type: double
		 */
		PLN?: number | null;

		/**
		 * The rental price of this video in SEK.
		 * Type: double
		 */
		SEK?: number | null;

		/**
		 * The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vod_alt1PostBodyRentPriceFormProperties {

		/**
		 * The rental price of this video in AUD.
		 * Type: double
		 */
		AUD: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in CAD.
		 * Type: double
		 */
		CAD: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in CHF.
		 * Type: double
		 */
		CHF: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in DKK.
		 * Type: double
		 */
		DKK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in EUR.
		 * Type: double
		 */
		EUR: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in GBP.
		 * Type: double
		 */
		GBP: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in JPY.
		 * Type: double
		 */
		JPY: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in KRW.
		 * Type: double
		 */
		KRW: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in NOK.
		 * Type: double
		 */
		NOK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in PLN.
		 * Type: double
		 */
		PLN: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in SEK.
		 * Type: double
		 */
		SEK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodyRentPriceFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodyRentPriceFormProperties>({
			AUD: new FormControl<number | null | undefined>(undefined),
			CAD: new FormControl<number | null | undefined>(undefined),
			CHF: new FormControl<number | null | undefined>(undefined),
			DKK: new FormControl<number | null | undefined>(undefined),
			EUR: new FormControl<number | null | undefined>(undefined),
			GBP: new FormControl<number | null | undefined>(undefined),
			JPY: new FormControl<number | null | undefined>(undefined),
			KRW: new FormControl<number | null | undefined>(undefined),
			NOK: new FormControl<number | null | undefined>(undefined),
			PLN: new FormControl<number | null | undefined>(undefined),
			SEK: new FormControl<number | null | undefined>(undefined),
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodySubscription {
		monthly?: Create_vod_alt1PostBodySubscriptionMonthly;
	}
	export interface Create_vod_alt1PostBodySubscriptionFormProperties {
	}
	export function CreateCreate_vod_alt1PostBodySubscriptionFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodySubscriptionFormProperties>({
		});

	}

	export interface Create_vod_alt1PostBodySubscriptionMonthly {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active?: boolean | null;
		price?: Create_vod_alt1PostBodySubscriptionMonthlyPrice;
	}
	export interface Create_vod_alt1PostBodySubscriptionMonthlyFormProperties {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodySubscriptionMonthlyFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodySubscriptionMonthlyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vod_alt1PostBodySubscriptionMonthlyPrice {

		/**
		 * The monthly subscription price in USD. *Required if `subscription.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vod_alt1PostBodySubscriptionMonthlyPriceFormProperties {

		/**
		 * The monthly subscription price in USD. *Required if `subscription.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vod_alt1PostBodySubscriptionMonthlyPriceFormGroup() {
		return new FormGroup<Create_vod_alt1PostBodySubscriptionMonthlyPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Get_vod_purchasesFilter { all = 'all', expiring_soon = 'expiring_soon', film = 'film', important = 'important', purchased = 'purchased', rented = 'rented', series = 'series', subscription = 'subscription', unwatched = 'unwatched', watched = 'watched' }

	export enum Get_vod_purchasesSort { added = 'added', alphabetical = 'alphabetical', date = 'date', name = 'name', purchase_time = 'purchase_time', rating = 'rating', release_date = 'release_date' }

	export enum Get_portfolio_videos_alt1Sort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', default = 'default', likes = 'likes', manual = 'manual', plays = 'plays' }

	export enum Get_projects_alt1Sort { date = 'date', default = 'default', modified_time = 'modified_time', name = 'name' }

	export interface Create_project_alt1PostBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}
	export interface Create_project_alt1PostBodyFormProperties {

		/**
		 * The name of the project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreate_project_alt1PostBodyFormGroup() {
		return new FormGroup<Create_project_alt1PostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Edit_project_alt1PatchBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}
	export interface Edit_project_alt1PatchBodyFormProperties {

		/**
		 * The name of the project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEdit_project_alt1PatchBodyFormGroup() {
		return new FormGroup<Edit_project_alt1PatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Get_project_videos_alt1Sort { alphabetical = 'alphabetical', date = 'date', default = 'default', duration = 'duration', last_user_action_event_date = 'last_user_action_event_date' }

	export enum Get_videos_alt1Filter { app_only = 'app_only', embeddable = 'embeddable', featured = 'featured', playable = 'playable' }

	export enum Get_videos_alt1Sort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', default = 'default', duration = 'duration', last_user_action_event_date = 'last_user_action_event_date', likes = 'likes', modified_time = 'modified_time', plays = 'plays' }

	export enum Get_genre_vodsFilter { country = 'country', my_region = 'my_region' }

	export enum Get_genre_vodsSort { alphabetical = 'alphabetical', date = 'date', name = 'name', 'publish.time' = 'publish.time', videos = 'videos' }

	export enum Get_vod_promotionsFilter { batch = 'batch', default = 'default', single = 'single', vip = 'vip' }

	export enum Get_vod_seasonsFilter { viewable = 'viewable' }

	export enum Get_vod_seasonsSort { date = 'date', manual = 'manual' }

	export enum Get_vod_season_videosSort { date = 'date', default = 'default', manual = 'manual', name = 'name', purchase_time = 'purchase_time', release_date = 'release_date' }

	export enum Get_vod_videosFilter { all = 'all', buy = 'buy', expiring_soon = 'expiring_soon', extra = 'extra', main = 'main', 'main.viewable' = 'main.viewable', rent = 'rent', trailer = 'trailer', unwatched = 'unwatched', viewable = 'viewable', watched = 'watched' }

	export enum Get_vod_videosSort { date = 'date', default = 'default', episode = 'episode', manual = 'manual', name = 'name', purchase_time = 'purchase_time', release_date = 'release_date' }

	export enum Get_videos_with_tagSort { created_time = 'created_time', duration = 'duration', name = 'name' }

	export interface Replace_videos_in_albumPutBody {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: string;
	}
	export interface Replace_videos_in_albumPutBodyFormProperties {

		/**
		 * A comma-separated list of video URIs.
		 * Required
		 */
		videos: FormControl<string | null | undefined>,
	}
	export function CreateReplace_videos_in_albumPutBodyFormGroup() {
		return new FormGroup<Replace_videos_in_albumPutBodyFormProperties>({
			videos: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Set_video_as_album_thumbnailPostBody {

		/**
		 * The video frame time in seconds to use as the album thumbnail.
		 * Type: double
		 */
		time_code?: number | null;
	}
	export interface Set_video_as_album_thumbnailPostBodyFormProperties {

		/**
		 * The video frame time in seconds to use as the album thumbnail.
		 * Type: double
		 */
		time_code: FormControl<number | null | undefined>,
	}
	export function CreateSet_video_as_album_thumbnailPostBodyFormGroup() {
		return new FormGroup<Set_video_as_album_thumbnailPostBodyFormProperties>({
			time_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Follow_usersPostBody {

		/**
		 * An array of user URIs for the list of users to follow.
		 * Required
		 */
		users: Array<string>;
	}
	export interface Follow_usersPostBodyFormProperties {
	}
	export function CreateFollow_usersPostBodyFormGroup() {
		return new FormGroup<Follow_usersPostBodyFormProperties>({
		});

	}

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
		buy?: Create_vodPostBodyBuy;

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
		episodes?: Create_vodPostBodyEpisodes;

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link?: string | null;

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: string;
		rent?: Create_vodPostBodyRent;
		subscription?: Create_vodPostBodySubscription;

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: On_demand_pageType;
	}
	export interface Create_vodPostBodyFormProperties {

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
		accepted_currencies: FormControl<Create_vod_alt1PostBodyAccepted_currencies | null | undefined>,

		/**
		 * One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.
		 * Required
		 */
		content_rating: FormControl<Content_ratingCode | null | undefined>,

		/**
		 * The description of the On Demand page.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** The custom domain of the On Demand page. */
		domain_link: FormControl<string | null | undefined>,

		/** The custom string to use in this On Demand page's Vimeo URL. */
		link: FormControl<string | null | undefined>,

		/**
		 * The name of the On Demand page.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of On Demand page.
		 * Required
		 */
		type: FormControl<On_demand_pageType | null | undefined>,
	}
	export function CreateCreate_vodPostBodyFormGroup() {
		return new FormGroup<Create_vodPostBodyFormProperties>({
			accepted_currencies: new FormControl<Create_vod_alt1PostBodyAccepted_currencies | null | undefined>(undefined),
			content_rating: new FormControl<Content_ratingCode | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain_link: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<On_demand_pageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Create_vodPostBodyBuy {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active?: boolean | null;

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download?: boolean | null;
		price?: Create_vodPostBodyBuyPrice;
	}
	export interface Create_vodPostBodyBuyFormProperties {

		/** Whether the Buy action is active. *Required if `rent.active` is false. */
		active: FormControl<boolean | null | undefined>,

		/** Whether people who buy the video can download it. To use this field, `type` must be `film`. */
		download: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vodPostBodyBuyFormGroup() {
		return new FormGroup<Create_vodPostBodyBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyBuyPrice {

		/**
		 * The purchase price of this video in AUD.
		 * Type: double
		 */
		AUD?: number | null;

		/**
		 * The purchase price of this video in CAD.
		 * Type: double
		 */
		CAD?: number | null;

		/**
		 * The purchase price of this video in CHF.
		 * Type: double
		 */
		CHF?: number | null;

		/**
		 * The purchase price of this video in DKK.
		 * Type: double
		 */
		DKK?: number | null;

		/**
		 * The purchase price of this video in EUR.
		 * Type: double
		 */
		EUR?: number | null;

		/**
		 * The purchase price of this video in GBP.
		 * Type: double
		 */
		GBP?: number | null;

		/**
		 * The purchase price of this video in JPY.
		 * Type: double
		 */
		JPY?: number | null;

		/**
		 * The purchase price of this video in KRW.
		 * Type: double
		 */
		KRW?: number | null;

		/**
		 * The purchase price of this video in NOK.
		 * Type: double
		 */
		NOK?: number | null;

		/**
		 * The purchase price of this video in PLN.
		 * Type: double
		 */
		PLN?: number | null;

		/**
		 * The purchase price of this video in SEK.
		 * Type: double
		 */
		SEK?: number | null;

		/**
		 * The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vodPostBodyBuyPriceFormProperties {

		/**
		 * The purchase price of this video in AUD.
		 * Type: double
		 */
		AUD: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in CAD.
		 * Type: double
		 */
		CAD: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in CHF.
		 * Type: double
		 */
		CHF: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in DKK.
		 * Type: double
		 */
		DKK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in EUR.
		 * Type: double
		 */
		EUR: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in GBP.
		 * Type: double
		 */
		GBP: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in JPY.
		 * Type: double
		 */
		JPY: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in KRW.
		 * Type: double
		 */
		KRW: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in NOK.
		 * Type: double
		 */
		NOK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in PLN.
		 * Type: double
		 */
		PLN: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in SEK.
		 * Type: double
		 */
		SEK: FormControl<number | null | undefined>,

		/**
		 * The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vodPostBodyBuyPriceFormGroup() {
		return new FormGroup<Create_vodPostBodyBuyPriceFormProperties>({
			AUD: new FormControl<number | null | undefined>(undefined),
			CAD: new FormControl<number | null | undefined>(undefined),
			CHF: new FormControl<number | null | undefined>(undefined),
			DKK: new FormControl<number | null | undefined>(undefined),
			EUR: new FormControl<number | null | undefined>(undefined),
			GBP: new FormControl<number | null | undefined>(undefined),
			JPY: new FormControl<number | null | undefined>(undefined),
			KRW: new FormControl<number | null | undefined>(undefined),
			NOK: new FormControl<number | null | undefined>(undefined),
			PLN: new FormControl<number | null | undefined>(undefined),
			SEK: new FormControl<number | null | undefined>(undefined),
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyEpisodes {
		buy?: Create_vodPostBodyEpisodesBuy;
		rent?: Create_vodPostBodyEpisodesRent;
	}
	export interface Create_vodPostBodyEpisodesFormProperties {
	}
	export function CreateCreate_vodPostBodyEpisodesFormGroup() {
		return new FormGroup<Create_vodPostBodyEpisodesFormProperties>({
		});

	}

	export interface Create_vodPostBodyEpisodesBuy {

		/** Whether episodes can be bought. */
		active?: boolean | null;

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download?: boolean | null;
		price?: Create_vodPostBodyEpisodesBuyPrice;
	}
	export interface Create_vodPostBodyEpisodesBuyFormProperties {

		/** Whether episodes can be bought. */
		active: FormControl<boolean | null | undefined>,

		/** Whether people who buy the episode can download it. To use this field, `type` must be `series`. */
		download: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vodPostBodyEpisodesBuyFormGroup() {
		return new FormGroup<Create_vodPostBodyEpisodesBuyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyEpisodesBuyPrice {

		/**
		 * The purchase price per episode. *Required if `episodes.buy.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vodPostBodyEpisodesBuyPriceFormProperties {

		/**
		 * The purchase price per episode. *Required if `episodes.buy.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vodPostBodyEpisodesBuyPriceFormGroup() {
		return new FormGroup<Create_vodPostBodyEpisodesBuyPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyEpisodesRent {

		/** Whether episodes can be rented */
		active?: boolean | null;

		/** The period in which this episode can be rented for. */
		period?: Create_vod_alt1PostBodyEpisodesRentPeriod | null;
		price?: Create_vodPostBodyEpisodesRentPrice;
	}
	export interface Create_vodPostBodyEpisodesRentFormProperties {

		/** Whether episodes can be rented */
		active: FormControl<boolean | null | undefined>,

		/** The period in which this episode can be rented for. */
		period: FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>,
	}
	export function CreateCreate_vodPostBodyEpisodesRentFormGroup() {
		return new FormGroup<Create_vodPostBodyEpisodesRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyEpisodesRentPrice {

		/**
		 * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vodPostBodyEpisodesRentPriceFormProperties {

		/**
		 * The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vodPostBodyEpisodesRentPriceFormGroup() {
		return new FormGroup<Create_vodPostBodyEpisodesRentPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyRent {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active?: boolean | null;

		/** The period in which this can be rented for. */
		period?: Create_vod_alt1PostBodyEpisodesRentPeriod | null;
		price?: Create_vodPostBodyRentPrice;
	}
	export interface Create_vodPostBodyRentFormProperties {

		/** Whether the video can be rented. *Required if `buy.active` is false. */
		active: FormControl<boolean | null | undefined>,

		/** The period in which this can be rented for. */
		period: FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>,
	}
	export function CreateCreate_vodPostBodyRentFormGroup() {
		return new FormGroup<Create_vodPostBodyRentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<Create_vod_alt1PostBodyEpisodesRentPeriod | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodyRentPrice {

		/**
		 * The rental price of this video in AUD.
		 * Type: double
		 */
		AUD?: number | null;

		/**
		 * The rental price of this video in CAD.
		 * Type: double
		 */
		CAD?: number | null;

		/**
		 * The rental price of this video in CHF.
		 * Type: double
		 */
		CHF?: number | null;

		/**
		 * The rental price of this video in DKK.
		 * Type: double
		 */
		DKK?: number | null;

		/**
		 * The rental price of this video in EUR.
		 * Type: double
		 */
		EUR?: number | null;

		/**
		 * The rental price of this video in GBP.
		 * Type: double
		 */
		GBP?: number | null;

		/**
		 * The rental price of this video in JPY.
		 * Type: double
		 */
		JPY?: number | null;

		/**
		 * The rental price of this video in KRW.
		 * Type: double
		 */
		KRW?: number | null;

		/**
		 * The rental price of this video in NOK.
		 * Type: double
		 */
		NOK?: number | null;

		/**
		 * The rental price of this video in PLN.
		 * Type: double
		 */
		PLN?: number | null;

		/**
		 * The rental price of this video in SEK.
		 * Type: double
		 */
		SEK?: number | null;

		/**
		 * The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vodPostBodyRentPriceFormProperties {

		/**
		 * The rental price of this video in AUD.
		 * Type: double
		 */
		AUD: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in CAD.
		 * Type: double
		 */
		CAD: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in CHF.
		 * Type: double
		 */
		CHF: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in DKK.
		 * Type: double
		 */
		DKK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in EUR.
		 * Type: double
		 */
		EUR: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in GBP.
		 * Type: double
		 */
		GBP: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in JPY.
		 * Type: double
		 */
		JPY: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in KRW.
		 * Type: double
		 */
		KRW: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in NOK.
		 * Type: double
		 */
		NOK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in PLN.
		 * Type: double
		 */
		PLN: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in SEK.
		 * Type: double
		 */
		SEK: FormControl<number | null | undefined>,

		/**
		 * The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vodPostBodyRentPriceFormGroup() {
		return new FormGroup<Create_vodPostBodyRentPriceFormProperties>({
			AUD: new FormControl<number | null | undefined>(undefined),
			CAD: new FormControl<number | null | undefined>(undefined),
			CHF: new FormControl<number | null | undefined>(undefined),
			DKK: new FormControl<number | null | undefined>(undefined),
			EUR: new FormControl<number | null | undefined>(undefined),
			GBP: new FormControl<number | null | undefined>(undefined),
			JPY: new FormControl<number | null | undefined>(undefined),
			KRW: new FormControl<number | null | undefined>(undefined),
			NOK: new FormControl<number | null | undefined>(undefined),
			PLN: new FormControl<number | null | undefined>(undefined),
			SEK: new FormControl<number | null | undefined>(undefined),
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodySubscription {
		monthly?: Create_vodPostBodySubscriptionMonthly;
	}
	export interface Create_vodPostBodySubscriptionFormProperties {
	}
	export function CreateCreate_vodPostBodySubscriptionFormGroup() {
		return new FormGroup<Create_vodPostBodySubscriptionFormProperties>({
		});

	}

	export interface Create_vodPostBodySubscriptionMonthly {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active?: boolean | null;
		price?: Create_vodPostBodySubscriptionMonthlyPrice;
	}
	export interface Create_vodPostBodySubscriptionMonthlyFormProperties {

		/** Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false. */
		active: FormControl<boolean | null | undefined>,
	}
	export function CreateCreate_vodPostBodySubscriptionMonthlyFormGroup() {
		return new FormGroup<Create_vodPostBodySubscriptionMonthlyFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Create_vodPostBodySubscriptionMonthlyPrice {

		/**
		 * The monthly subscription price in USD. *Required if `subscription.active` is true.
		 * Type: double
		 */
		USD?: number | null;
	}
	export interface Create_vodPostBodySubscriptionMonthlyPriceFormProperties {

		/**
		 * The monthly subscription price in USD. *Required if `subscription.active` is true.
		 * Type: double
		 */
		USD: FormControl<number | null | undefined>,
	}
	export function CreateCreate_vodPostBodySubscriptionMonthlyPriceFormGroup() {
		return new FormGroup<Create_vodPostBodySubscriptionMonthlyPriceFormProperties>({
			USD: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Create_projectPostBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}
	export interface Create_projectPostBodyFormProperties {

		/**
		 * The name of the project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreate_projectPostBodyFormGroup() {
		return new FormGroup<Create_projectPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Edit_projectPatchBody {

		/**
		 * The name of the project.
		 * Required
		 */
		name: string;
	}
	export interface Edit_projectPatchBodyFormProperties {

		/**
		 * The name of the project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEdit_projectPatchBodyFormGroup() {
		return new FormGroup<Edit_projectPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Search_videosFilter { CC = 'CC', 'CC-BY' = 'CC-BY', 'CC-BY-NC' = 'CC-BY-NC', 'CC-BY-NC-ND' = 'CC-BY-NC-ND', 'CC-BY-NC-SA' = 'CC-BY-NC-SA', 'CC-BY-ND' = 'CC-BY-ND', 'CC-BY-SA' = 'CC-BY-SA', CC0 = 'CC0', categories = 'categories', duration = 'duration', 'in-progress' = 'in-progress', minimum_likes = 'minimum_likes', trending = 'trending', upload_date = 'upload_date' }

	export enum Search_videosSort { alphabetical = 'alphabetical', comments = 'comments', date = 'date', duration = 'duration', likes = 'likes', plays = 'plays', relevant = 'relevant' }

	export enum Get_related_videosFilter { related = 'related' }

}
