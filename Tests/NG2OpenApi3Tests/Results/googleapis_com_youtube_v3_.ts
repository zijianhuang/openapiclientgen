import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AbuseReport {
		abuseTypes?: Array<AbuseType>;
		description?: string | null;
		relatedEntities?: Array<RelatedEntity>;
		subject?: Entity;
	}
	export interface AbuseReportFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateAbuseReportFormGroup() {
		return new FormGroup<AbuseReportFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AbuseType {
		id?: string | null;
	}
	export interface AbuseTypeFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAbuseTypeFormGroup() {
		return new FormGroup<AbuseTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RelatedEntity {
		entity?: Entity;
	}
	export interface RelatedEntityFormProperties {
	}
	export function CreateRelatedEntityFormGroup() {
		return new FormGroup<RelatedEntityFormProperties>({
		});

	}

	export interface Entity {
		id?: string | null;
		typeId?: string | null;
		url?: string | null;
	}
	export interface EntityFormProperties {
		id: FormControl<string | null | undefined>,
		typeId: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rights management policy for YouTube resources. */
	export interface AccessPolicy {

		/** The value of allowed indicates whether the access to the policy is allowed or denied by default. */
		allowed?: boolean | null;

		/** A list of region codes that identify countries where the default policy do not apply. */
		exception?: Array<string>;
	}

	/** Rights management policy for YouTube resources. */
	export interface AccessPolicyFormProperties {

		/** The value of allowed indicates whether the access to the policy is allowed or denied by default. */
		allowed: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessPolicyFormGroup() {
		return new FormGroup<AccessPolicyFormProperties>({
			allowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
	export interface Activity {

		/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
		contentDetails?: ActivityContentDetails;

		/** Etag of this resource */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the activity. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#activity". */
		kind?: string | null;

		/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
		snippet?: ActivitySnippet;
	}

	/** An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
	export interface ActivityFormProperties {

		/** Etag of this resource */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the activity. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#activity". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
	export interface ActivityContentDetails {

		/** Details about a channel bulletin post. */
		bulletin?: ActivityContentDetailsBulletin;

		/** Details about a resource which was added to a channel. */
		channelItem?: ActivityContentDetailsChannelItem;

		/** Information about a resource that received a comment. */
		comment?: ActivityContentDetailsComment;

		/** Information about a video that was marked as a favorite video. */
		favorite?: ActivityContentDetailsFavorite;

		/** Information about a resource that received a positive (like) rating. */
		like?: ActivityContentDetailsLike;

		/** Information about a new playlist item. */
		playlistItem?: ActivityContentDetailsPlaylistItem;

		/** Details about a resource which is being promoted. */
		promotedItem?: ActivityContentDetailsPromotedItem;

		/** Information that identifies the recommended resource. */
		recommendation?: ActivityContentDetailsRecommendation;

		/** Details about a social network post. */
		social?: ActivityContentDetailsSocial;

		/** Information about a channel that a user subscribed to. */
		subscription?: ActivityContentDetailsSubscription;

		/** Information about the uploaded video. */
		upload?: ActivityContentDetailsUpload;
	}

	/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
	export interface ActivityContentDetailsFormProperties {
	}
	export function CreateActivityContentDetailsFormGroup() {
		return new FormGroup<ActivityContentDetailsFormProperties>({
		});

	}


	/** Details about a channel bulletin post. */
	export interface ActivityContentDetailsBulletin {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Details about a channel bulletin post. */
	export interface ActivityContentDetailsBulletinFormProperties {
	}
	export function CreateActivityContentDetailsBulletinFormGroup() {
		return new FormGroup<ActivityContentDetailsBulletinFormProperties>({
		});

	}


	/** A resource id is a generic reference that points to another YouTube resource. */
	export interface ResourceId {

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel. */
		channelId?: string | null;

		/** The type of the API resource. */
		kind?: string | null;

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist. */
		playlistId?: string | null;

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video. */
		videoId?: string | null;
	}

	/** A resource id is a generic reference that points to another YouTube resource. */
	export interface ResourceIdFormProperties {

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel. */
		channelId: FormControl<string | null | undefined>,

		/** The type of the API resource. */
		kind: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist. */
		playlistId: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			playlistId: new FormControl<string | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a resource which was added to a channel. */
	export interface ActivityContentDetailsChannelItem {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Details about a resource which was added to a channel. */
	export interface ActivityContentDetailsChannelItemFormProperties {
	}
	export function CreateActivityContentDetailsChannelItemFormGroup() {
		return new FormGroup<ActivityContentDetailsChannelItemFormProperties>({
		});

	}


	/** Information about a resource that received a comment. */
	export interface ActivityContentDetailsComment {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Information about a resource that received a comment. */
	export interface ActivityContentDetailsCommentFormProperties {
	}
	export function CreateActivityContentDetailsCommentFormGroup() {
		return new FormGroup<ActivityContentDetailsCommentFormProperties>({
		});

	}


	/** Information about a video that was marked as a favorite video. */
	export interface ActivityContentDetailsFavorite {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Information about a video that was marked as a favorite video. */
	export interface ActivityContentDetailsFavoriteFormProperties {
	}
	export function CreateActivityContentDetailsFavoriteFormGroup() {
		return new FormGroup<ActivityContentDetailsFavoriteFormProperties>({
		});

	}


	/** Information about a resource that received a positive (like) rating. */
	export interface ActivityContentDetailsLike {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Information about a resource that received a positive (like) rating. */
	export interface ActivityContentDetailsLikeFormProperties {
	}
	export function CreateActivityContentDetailsLikeFormGroup() {
		return new FormGroup<ActivityContentDetailsLikeFormProperties>({
		});

	}


	/** Information about a new playlist item. */
	export interface ActivityContentDetailsPlaylistItem {

		/** The value that YouTube uses to uniquely identify the playlist. */
		playlistId?: string | null;

		/** ID of the item within the playlist. */
		playlistItemId?: string | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Information about a new playlist item. */
	export interface ActivityContentDetailsPlaylistItemFormProperties {

		/** The value that YouTube uses to uniquely identify the playlist. */
		playlistId: FormControl<string | null | undefined>,

		/** ID of the item within the playlist. */
		playlistItemId: FormControl<string | null | undefined>,
	}
	export function CreateActivityContentDetailsPlaylistItemFormGroup() {
		return new FormGroup<ActivityContentDetailsPlaylistItemFormProperties>({
			playlistId: new FormControl<string | null | undefined>(undefined),
			playlistItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a resource which is being promoted. */
	export interface ActivityContentDetailsPromotedItem {

		/** The URL the client should fetch to request a promoted item. */
		adTag?: string | null;

		/** The URL the client should ping to indicate that the user clicked through on this promoted item. */
		clickTrackingUrl?: string | null;

		/** The URL the client should ping to indicate that the user was shown this promoted item. */
		creativeViewUrl?: string | null;

		/** The type of call-to-action, a message to the user indicating action that can be taken. */
		ctaType?: ActivityContentDetailsPromotedItemCtaType | null;

		/** The custom call-to-action button text. If specified, it will override the default button text for the cta_type. */
		customCtaButtonText?: string | null;

		/** The text description to accompany the promoted item. */
		descriptionText?: string | null;

		/** The URL the client should direct the user to, if the user chooses to visit the advertiser's website. */
		destinationUrl?: string | null;

		/** The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown. */
		forecastingUrl?: Array<string>;

		/** The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item. */
		impressionUrl?: Array<string>;

		/** The ID that YouTube uses to uniquely identify the promoted video. */
		videoId?: string | null;
	}

	/** Details about a resource which is being promoted. */
	export interface ActivityContentDetailsPromotedItemFormProperties {

		/** The URL the client should fetch to request a promoted item. */
		adTag: FormControl<string | null | undefined>,

		/** The URL the client should ping to indicate that the user clicked through on this promoted item. */
		clickTrackingUrl: FormControl<string | null | undefined>,

		/** The URL the client should ping to indicate that the user was shown this promoted item. */
		creativeViewUrl: FormControl<string | null | undefined>,

		/** The type of call-to-action, a message to the user indicating action that can be taken. */
		ctaType: FormControl<ActivityContentDetailsPromotedItemCtaType | null | undefined>,

		/** The custom call-to-action button text. If specified, it will override the default button text for the cta_type. */
		customCtaButtonText: FormControl<string | null | undefined>,

		/** The text description to accompany the promoted item. */
		descriptionText: FormControl<string | null | undefined>,

		/** The URL the client should direct the user to, if the user chooses to visit the advertiser's website. */
		destinationUrl: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the promoted video. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateActivityContentDetailsPromotedItemFormGroup() {
		return new FormGroup<ActivityContentDetailsPromotedItemFormProperties>({
			adTag: new FormControl<string | null | undefined>(undefined),
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			creativeViewUrl: new FormControl<string | null | undefined>(undefined),
			ctaType: new FormControl<ActivityContentDetailsPromotedItemCtaType | null | undefined>(undefined),
			customCtaButtonText: new FormControl<string | null | undefined>(undefined),
			descriptionText: new FormControl<string | null | undefined>(undefined),
			destinationUrl: new FormControl<string | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityContentDetailsPromotedItemCtaType { ctaTypeUnspecified = 'ctaTypeUnspecified', visitAdvertiserSite = 'visitAdvertiserSite' }


	/** Information that identifies the recommended resource. */
	export interface ActivityContentDetailsRecommendation {

		/** The reason that the resource is recommended to the user. */
		reason?: ActivityContentDetailsRecommendationReason | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;

		/** A resource id is a generic reference that points to another YouTube resource. */
		seedResourceId?: ResourceId;
	}

	/** Information that identifies the recommended resource. */
	export interface ActivityContentDetailsRecommendationFormProperties {

		/** The reason that the resource is recommended to the user. */
		reason: FormControl<ActivityContentDetailsRecommendationReason | null | undefined>,
	}
	export function CreateActivityContentDetailsRecommendationFormGroup() {
		return new FormGroup<ActivityContentDetailsRecommendationFormProperties>({
			reason: new FormControl<ActivityContentDetailsRecommendationReason | null | undefined>(undefined),
		});

	}

	export enum ActivityContentDetailsRecommendationReason { reasonUnspecified = 'reasonUnspecified', videoFavorited = 'videoFavorited', videoLiked = 'videoLiked', videoWatched = 'videoWatched' }


	/** Details about a social network post. */
	export interface ActivityContentDetailsSocial {

		/** The author of the social network post. */
		author?: string | null;

		/** An image of the post's author. */
		imageUrl?: string | null;

		/** The URL of the social network post. */
		referenceUrl?: string | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;

		/** The name of the social network. */
		type?: ActivityContentDetailsSocialType | null;
	}

	/** Details about a social network post. */
	export interface ActivityContentDetailsSocialFormProperties {

		/** The author of the social network post. */
		author: FormControl<string | null | undefined>,

		/** An image of the post's author. */
		imageUrl: FormControl<string | null | undefined>,

		/** The URL of the social network post. */
		referenceUrl: FormControl<string | null | undefined>,

		/** The name of the social network. */
		type: FormControl<ActivityContentDetailsSocialType | null | undefined>,
	}
	export function CreateActivityContentDetailsSocialFormGroup() {
		return new FormGroup<ActivityContentDetailsSocialFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			referenceUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActivityContentDetailsSocialType | null | undefined>(undefined),
		});

	}

	export enum ActivityContentDetailsSocialType { unspecified = 'unspecified', googlePlus = 'googlePlus', facebook = 'facebook', twitter = 'twitter' }


	/** Information about a channel that a user subscribed to. */
	export interface ActivityContentDetailsSubscription {

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;
	}

	/** Information about a channel that a user subscribed to. */
	export interface ActivityContentDetailsSubscriptionFormProperties {
	}
	export function CreateActivityContentDetailsSubscriptionFormGroup() {
		return new FormGroup<ActivityContentDetailsSubscriptionFormProperties>({
		});

	}


	/** Information about the uploaded video. */
	export interface ActivityContentDetailsUpload {

		/** The ID that YouTube uses to uniquely identify the uploaded video. */
		videoId?: string | null;
	}

	/** Information about the uploaded video. */
	export interface ActivityContentDetailsUploadFormProperties {

		/** The ID that YouTube uses to uniquely identify the uploaded video. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateActivityContentDetailsUploadFormGroup() {
		return new FormGroup<ActivityContentDetailsUploadFormProperties>({
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
	export interface ActivitySnippet {

		/** The ID that YouTube uses to uniquely identify the channel associated with the activity. */
		channelId?: string | null;

		/** Channel title for the channel responsible for this activity */
		channelTitle?: string | null;

		/** The description of the resource primarily associated with the activity. @mutable youtube.activities.insert */
		description?: string | null;

		/** The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. */
		groupId?: string | null;

		/** The date and time that the video was uploaded. */
		publishedAt?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The title of the resource primarily associated with the activity. */
		title?: string | null;

		/** The type of activity that the resource describes. */
		type?: ActivitySnippetType | null;
	}

	/** Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12 */
	export interface ActivitySnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the channel associated with the activity. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel responsible for this activity */
		channelTitle: FormControl<string | null | undefined>,

		/** The description of the resource primarily associated with the activity. @mutable youtube.activities.insert */
		description: FormControl<string | null | undefined>,

		/** The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. */
		groupId: FormControl<string | null | undefined>,

		/** The date and time that the video was uploaded. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The title of the resource primarily associated with the activity. */
		title: FormControl<string | null | undefined>,

		/** The type of activity that the resource describes. */
		type: FormControl<ActivitySnippetType | null | undefined>,
	}
	export function CreateActivitySnippetFormGroup() {
		return new FormGroup<ActivitySnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActivitySnippetType | null | undefined>(undefined),
		});

	}


	/** Internal representation of thumbnails for a YouTube resource. */
	export interface ThumbnailDetails {

		/** A thumbnail is an image representing a YouTube resource. */
		high?: Thumbnail;

		/** A thumbnail is an image representing a YouTube resource. */
		maxres?: Thumbnail;

		/** A thumbnail is an image representing a YouTube resource. */
		medium?: Thumbnail;

		/** A thumbnail is an image representing a YouTube resource. */
		standard?: Thumbnail;
	}

	/** Internal representation of thumbnails for a YouTube resource. */
	export interface ThumbnailDetailsFormProperties {
	}
	export function CreateThumbnailDetailsFormGroup() {
		return new FormGroup<ThumbnailDetailsFormProperties>({
		});

	}


	/** A thumbnail is an image representing a YouTube resource. */
	export interface Thumbnail {

		/**
		 * (Optional) Height of the thumbnail image.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height?: number | null;

		/** The thumbnail image's URL. */
		url?: string | null;

		/**
		 * (Optional) Width of the thumbnail image.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width?: number | null;
	}

	/** A thumbnail is an image representing a YouTube resource. */
	export interface ThumbnailFormProperties {

		/**
		 * (Optional) Height of the thumbnail image.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height: FormControl<number | null | undefined>,

		/** The thumbnail image's URL. */
		url: FormControl<string | null | undefined>,

		/**
		 * (Optional) Width of the thumbnail image.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActivitySnippetType { typeUnspecified = 'typeUnspecified', upload = 'upload', like = 'like', favorite = 'favorite', comment = 'comment', subscription = 'subscription', playlistItem = 'playlistItem', recommendation = 'recommendation', bulletin = 'bulletin', social = 'social', channelItem = 'channelItem', promotedItem = 'promotedItem' }

	export interface ActivityListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;
		items?: Array<Activity>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface ActivityListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateActivityListResponseFormGroup() {
		return new FormGroup<ActivityListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
	export interface PageInfo {

		/**
		 * The number of results included in the API response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsPerPage?: number | null;

		/**
		 * The total number of results in the result set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalResults?: number | null;
	}

	/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
	export interface PageInfoFormProperties {

		/**
		 * The number of results included in the API response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsPerPage: FormControl<number | null | undefined>,

		/**
		 * The total number of results in the result set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePageInfoFormGroup() {
		return new FormGroup<PageInfoFormProperties>({
			resultsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Stub token pagination template to suppress results. */
	export interface TokenPagination {
	}

	/** Stub token pagination template to suppress results. */
	export interface TokenPaginationFormProperties {
	}
	export function CreateTokenPaginationFormGroup() {
		return new FormGroup<TokenPaginationFormProperties>({
		});

	}


	/** A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
	export interface Caption {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the caption track. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#caption". */
		kind?: string | null;

		/** Basic details about a caption track, such as its language and name. */
		snippet?: CaptionSnippet;
	}

	/** A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
	export interface CaptionFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the caption track. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#caption". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCaptionFormGroup() {
		return new FormGroup<CaptionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a caption track, such as its language and name. */
	export interface CaptionSnippet {

		/** The type of audio track associated with the caption track. */
		audioTrackType?: CaptionSnippetAudioTrackType | null;

		/** The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed. */
		failureReason?: CaptionSnippetFailureReason | null;

		/** Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions. */
		isAutoSynced?: boolean | null;

		/** Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false. */
		isCC?: boolean | null;

		/** Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update */
		isDraft?: boolean | null;

		/** Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false. */
		isEasyReader?: boolean | null;

		/** Indicates whether the caption track uses large text for the vision-impaired. The default value is false. */
		isLarge?: boolean | null;

		/** The language of the caption track. The property value is a BCP-47 language tag. */
		language?: string | null;

		/** The date and time when the caption track was last updated. */
		lastUpdated?: Date | null;

		/** The name of the caption track. The name is intended to be visible to the user as an option during playback. */
		name?: string | null;

		/** The caption track's status. */
		status?: CaptionSnippetStatus | null;

		/** The caption track's type. */
		trackKind?: CaptionSnippetTrackKind | null;

		/** The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert */
		videoId?: string | null;
	}

	/** Basic details about a caption track, such as its language and name. */
	export interface CaptionSnippetFormProperties {

		/** The type of audio track associated with the caption track. */
		audioTrackType: FormControl<CaptionSnippetAudioTrackType | null | undefined>,

		/** The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed. */
		failureReason: FormControl<CaptionSnippetFailureReason | null | undefined>,

		/** Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions. */
		isAutoSynced: FormControl<boolean | null | undefined>,

		/** Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false. */
		isCC: FormControl<boolean | null | undefined>,

		/** Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update */
		isDraft: FormControl<boolean | null | undefined>,

		/** Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false. */
		isEasyReader: FormControl<boolean | null | undefined>,

		/** Indicates whether the caption track uses large text for the vision-impaired. The default value is false. */
		isLarge: FormControl<boolean | null | undefined>,

		/** The language of the caption track. The property value is a BCP-47 language tag. */
		language: FormControl<string | null | undefined>,

		/** The date and time when the caption track was last updated. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The name of the caption track. The name is intended to be visible to the user as an option during playback. */
		name: FormControl<string | null | undefined>,

		/** The caption track's status. */
		status: FormControl<CaptionSnippetStatus | null | undefined>,

		/** The caption track's type. */
		trackKind: FormControl<CaptionSnippetTrackKind | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateCaptionSnippetFormGroup() {
		return new FormGroup<CaptionSnippetFormProperties>({
			audioTrackType: new FormControl<CaptionSnippetAudioTrackType | null | undefined>(undefined),
			failureReason: new FormControl<CaptionSnippetFailureReason | null | undefined>(undefined),
			isAutoSynced: new FormControl<boolean | null | undefined>(undefined),
			isCC: new FormControl<boolean | null | undefined>(undefined),
			isDraft: new FormControl<boolean | null | undefined>(undefined),
			isEasyReader: new FormControl<boolean | null | undefined>(undefined),
			isLarge: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CaptionSnippetStatus | null | undefined>(undefined),
			trackKind: new FormControl<CaptionSnippetTrackKind | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CaptionSnippetAudioTrackType { unknown = 'unknown', primary = 'primary', commentary = 'commentary', descriptive = 'descriptive' }

	export enum CaptionSnippetFailureReason { unknownFormat = 'unknownFormat', unsupportedFormat = 'unsupportedFormat', processingFailed = 'processingFailed' }

	export enum CaptionSnippetStatus { serving = 'serving', syncing = 'syncing', failed = 'failed' }

	export enum CaptionSnippetTrackKind { standard = 'standard', ASR = 'ASR', forced = 'forced' }

	export interface CaptionListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of captions that match the request criteria. */
		items?: Array<Caption>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface CaptionListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateCaptionListResponseFormGroup() {
		return new FormGroup<CaptionListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Brief description of the live stream cdn settings. */
	export interface CdnSettings {

		/** The format of the video stream that you are sending to Youtube. */
		format?: string | null;

		/** The frame rate of the inbound video data. */
		frameRate?: CdnSettingsFrameRate | null;

		/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
		ingestionInfo?: IngestionInfo;

		/** The method or protocol used to transmit the video stream. */
		ingestionType?: CdnSettingsIngestionType | null;

		/** The resolution of the inbound video data. */
		resolution?: CdnSettingsResolution | null;
	}

	/** Brief description of the live stream cdn settings. */
	export interface CdnSettingsFormProperties {

		/** The format of the video stream that you are sending to Youtube. */
		format: FormControl<string | null | undefined>,

		/** The frame rate of the inbound video data. */
		frameRate: FormControl<CdnSettingsFrameRate | null | undefined>,

		/** The method or protocol used to transmit the video stream. */
		ingestionType: FormControl<CdnSettingsIngestionType | null | undefined>,

		/** The resolution of the inbound video data. */
		resolution: FormControl<CdnSettingsResolution | null | undefined>,
	}
	export function CreateCdnSettingsFormGroup() {
		return new FormGroup<CdnSettingsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			frameRate: new FormControl<CdnSettingsFrameRate | null | undefined>(undefined),
			ingestionType: new FormControl<CdnSettingsIngestionType | null | undefined>(undefined),
			resolution: new FormControl<CdnSettingsResolution | null | undefined>(undefined),
		});

	}

	export enum CdnSettingsFrameRate { '30fps' = '30fps', '60fps' = '60fps', variable = 'variable' }


	/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
	export interface IngestionInfo {

		/** The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. */
		backupIngestionAddress?: string | null;

		/** The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* */
		ingestionAddress?: string | null;

		/** This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
		rtmpsBackupIngestionAddress?: string | null;

		/** This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
		rtmpsIngestionAddress?: string | null;

		/** The stream name that YouTube assigns to the video stream. */
		streamName?: string | null;
	}

	/** Describes information necessary for ingesting an RTMP, HTTP, or SRT stream. */
	export interface IngestionInfoFormProperties {

		/** The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. */
		backupIngestionAddress: FormControl<string | null | undefined>,

		/** The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* */
		ingestionAddress: FormControl<string | null | undefined>,

		/** This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
		rtmpsBackupIngestionAddress: FormControl<string | null | undefined>,

		/** This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams. */
		rtmpsIngestionAddress: FormControl<string | null | undefined>,

		/** The stream name that YouTube assigns to the video stream. */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateIngestionInfoFormGroup() {
		return new FormGroup<IngestionInfoFormProperties>({
			backupIngestionAddress: new FormControl<string | null | undefined>(undefined),
			ingestionAddress: new FormControl<string | null | undefined>(undefined),
			rtmpsBackupIngestionAddress: new FormControl<string | null | undefined>(undefined),
			rtmpsIngestionAddress: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CdnSettingsIngestionType { rtmp = 'rtmp', dash = 'dash', webrtc = 'webrtc', hls = 'hls' }

	export enum CdnSettingsResolution { '240p' = '240p', '360p' = '360p', '480p' = '480p', '720p' = '720p', '1080p' = '1080p', '1440p' = '1440p', '2160p' = '2160p', variable = 'variable' }


	/** A *channel* resource contains information about a YouTube channel. */
	export interface Channel {

		/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
		auditDetails?: ChannelAuditDetails;

		/** Branding properties of a YouTube channel. */
		brandingSettings?: ChannelBrandingSettings;

		/** Details about the content of a channel. */
		contentDetails?: ChannelContentDetails;

		/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
		contentOwnerDetails?: ChannelContentOwnerDetails;

		/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
		conversionPings?: ChannelConversionPings;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the channel. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channel". */
		kind?: string | null;

		/** Localizations for different languages */
		localizations?: {[id: string]: ChannelLocalization };

		/** Basic details about a channel, including title, description and thumbnails. */
		snippet?: ChannelSnippet;

		/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
		statistics?: ChannelStatistics;

		/** JSON template for the status part of a channel. */
		status?: ChannelStatus;

		/** Freebase topic information related to the channel. */
		topicDetails?: ChannelTopicDetails;
	}

	/** A *channel* resource contains information about a YouTube channel. */
	export interface ChannelFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channel". */
		kind: FormControl<string | null | undefined>,

		/** Localizations for different languages */
		localizations: FormControl<{[id: string]: ChannelLocalization } | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localizations: new FormControl<{[id: string]: ChannelLocalization } | null | undefined>(undefined),
		});

	}


	/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
	export interface ChannelAuditDetails {

		/** Whether or not the channel respects the community guidelines. */
		communityGuidelinesGoodStanding?: boolean | null;

		/** Whether or not the channel has any unresolved claims. */
		contentIdClaimsGoodStanding?: boolean | null;

		/** Whether or not the channel has any copyright strikes. */
		copyrightStrikesGoodStanding?: boolean | null;
	}

	/** The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process. */
	export interface ChannelAuditDetailsFormProperties {

		/** Whether or not the channel respects the community guidelines. */
		communityGuidelinesGoodStanding: FormControl<boolean | null | undefined>,

		/** Whether or not the channel has any unresolved claims. */
		contentIdClaimsGoodStanding: FormControl<boolean | null | undefined>,

		/** Whether or not the channel has any copyright strikes. */
		copyrightStrikesGoodStanding: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelAuditDetailsFormGroup() {
		return new FormGroup<ChannelAuditDetailsFormProperties>({
			communityGuidelinesGoodStanding: new FormControl<boolean | null | undefined>(undefined),
			contentIdClaimsGoodStanding: new FormControl<boolean | null | undefined>(undefined),
			copyrightStrikesGoodStanding: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Branding properties of a YouTube channel. */
	export interface ChannelBrandingSettings {

		/** Branding properties for the channel view. */
		channel?: ChannelSettings;

		/** Additional experimental branding properties. */
		hints?: Array<PropertyValue>;

		/** Branding properties for images associated with the channel. */
		image?: ImageSettings;

		/** Branding properties for the watch. All deprecated. */
		watch?: WatchSettings;
	}

	/** Branding properties of a YouTube channel. */
	export interface ChannelBrandingSettingsFormProperties {
	}
	export function CreateChannelBrandingSettingsFormGroup() {
		return new FormGroup<ChannelBrandingSettingsFormProperties>({
		});

	}


	/** Branding properties for the channel view. */
	export interface ChannelSettings {

		/** The country of the channel. */
		country?: string | null;
		defaultLanguage?: string | null;

		/** Which content tab users should see when viewing the channel. */
		defaultTab?: string | null;

		/** Specifies the channel description. */
		description?: string | null;

		/** Title for the featured channels tab. */
		featuredChannelsTitle?: string | null;

		/** The list of featured channels. */
		featuredChannelsUrls?: Array<string>;

		/** Lists keywords associated with the channel, comma-separated. */
		keywords?: string | null;

		/** Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible. */
		moderateComments?: boolean | null;

		/** A prominent color that can be rendered on this channel page. */
		profileColor?: string | null;

		/** Whether the tab to browse the videos should be displayed. */
		showBrowseView?: boolean | null;

		/** Whether related channels should be proposed. */
		showRelatedChannels?: boolean | null;

		/** Specifies the channel title. */
		title?: string | null;

		/** The ID for a Google Analytics account to track and measure traffic to the channels. */
		trackingAnalyticsAccountId?: string | null;

		/** The trailer of the channel, for users that are not subscribers. */
		unsubscribedTrailer?: string | null;
	}

	/** Branding properties for the channel view. */
	export interface ChannelSettingsFormProperties {

		/** The country of the channel. */
		country: FormControl<string | null | undefined>,
		defaultLanguage: FormControl<string | null | undefined>,

		/** Which content tab users should see when viewing the channel. */
		defaultTab: FormControl<string | null | undefined>,

		/** Specifies the channel description. */
		description: FormControl<string | null | undefined>,

		/** Title for the featured channels tab. */
		featuredChannelsTitle: FormControl<string | null | undefined>,

		/** Lists keywords associated with the channel, comma-separated. */
		keywords: FormControl<string | null | undefined>,

		/** Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible. */
		moderateComments: FormControl<boolean | null | undefined>,

		/** A prominent color that can be rendered on this channel page. */
		profileColor: FormControl<string | null | undefined>,

		/** Whether the tab to browse the videos should be displayed. */
		showBrowseView: FormControl<boolean | null | undefined>,

		/** Whether related channels should be proposed. */
		showRelatedChannels: FormControl<boolean | null | undefined>,

		/** Specifies the channel title. */
		title: FormControl<string | null | undefined>,

		/** The ID for a Google Analytics account to track and measure traffic to the channels. */
		trackingAnalyticsAccountId: FormControl<string | null | undefined>,

		/** The trailer of the channel, for users that are not subscribers. */
		unsubscribedTrailer: FormControl<string | null | undefined>,
	}
	export function CreateChannelSettingsFormGroup() {
		return new FormGroup<ChannelSettingsFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			defaultTab: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			featuredChannelsTitle: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			moderateComments: new FormControl<boolean | null | undefined>(undefined),
			profileColor: new FormControl<string | null | undefined>(undefined),
			showBrowseView: new FormControl<boolean | null | undefined>(undefined),
			showRelatedChannels: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trackingAnalyticsAccountId: new FormControl<string | null | undefined>(undefined),
			unsubscribedTrailer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair Property / Value. */
	export interface PropertyValue {

		/** A property. */
		property?: string | null;

		/** The property's value. */
		value?: string | null;
	}

	/** A pair Property / Value. */
	export interface PropertyValueFormProperties {

		/** A property. */
		property: FormControl<string | null | undefined>,

		/** The property's value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePropertyValueFormGroup() {
		return new FormGroup<PropertyValueFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Branding properties for images associated with the channel. */
	export interface ImageSettings {
		backgroundImageUrl?: LocalizedProperty;

		/** This is generated when a ChannelBanner.Insert request has succeeded for the given channel. */
		bannerExternalUrl?: string | null;

		/** Banner image. Desktop size (1060x175). */
		bannerImageUrl?: string | null;

		/** Banner image. Mobile size high resolution (1440x395). */
		bannerMobileExtraHdImageUrl?: string | null;

		/** Banner image. Mobile size high resolution (1280x360). */
		bannerMobileHdImageUrl?: string | null;

		/** Banner image. Mobile size (640x175). */
		bannerMobileImageUrl?: string | null;

		/** Banner image. Mobile size low resolution (320x88). */
		bannerMobileLowImageUrl?: string | null;

		/** Banner image. Mobile size medium/high resolution (960x263). */
		bannerMobileMediumHdImageUrl?: string | null;

		/** Banner image. Tablet size extra high resolution (2560x424). */
		bannerTabletExtraHdImageUrl?: string | null;

		/** Banner image. Tablet size high resolution (2276x377). */
		bannerTabletHdImageUrl?: string | null;

		/** Banner image. Tablet size (1707x283). */
		bannerTabletImageUrl?: string | null;

		/** Banner image. Tablet size low resolution (1138x188). */
		bannerTabletLowImageUrl?: string | null;

		/** Banner image. TV size high resolution (1920x1080). */
		bannerTvHighImageUrl?: string | null;

		/** Banner image. TV size extra high resolution (2120x1192). */
		bannerTvImageUrl?: string | null;

		/** Banner image. TV size low resolution (854x480). */
		bannerTvLowImageUrl?: string | null;

		/** Banner image. TV size medium resolution (1280x720). */
		bannerTvMediumImageUrl?: string | null;
		largeBrandedBannerImageImapScript?: LocalizedProperty;
		largeBrandedBannerImageUrl?: LocalizedProperty;
		smallBrandedBannerImageImapScript?: LocalizedProperty;
		smallBrandedBannerImageUrl?: LocalizedProperty;

		/** The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages. */
		trackingImageUrl?: string | null;
		watchIconImageUrl?: string | null;
	}

	/** Branding properties for images associated with the channel. */
	export interface ImageSettingsFormProperties {

		/** This is generated when a ChannelBanner.Insert request has succeeded for the given channel. */
		bannerExternalUrl: FormControl<string | null | undefined>,

		/** Banner image. Desktop size (1060x175). */
		bannerImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Mobile size high resolution (1440x395). */
		bannerMobileExtraHdImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Mobile size high resolution (1280x360). */
		bannerMobileHdImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Mobile size (640x175). */
		bannerMobileImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Mobile size low resolution (320x88). */
		bannerMobileLowImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Mobile size medium/high resolution (960x263). */
		bannerMobileMediumHdImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Tablet size extra high resolution (2560x424). */
		bannerTabletExtraHdImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Tablet size high resolution (2276x377). */
		bannerTabletHdImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Tablet size (1707x283). */
		bannerTabletImageUrl: FormControl<string | null | undefined>,

		/** Banner image. Tablet size low resolution (1138x188). */
		bannerTabletLowImageUrl: FormControl<string | null | undefined>,

		/** Banner image. TV size high resolution (1920x1080). */
		bannerTvHighImageUrl: FormControl<string | null | undefined>,

		/** Banner image. TV size extra high resolution (2120x1192). */
		bannerTvImageUrl: FormControl<string | null | undefined>,

		/** Banner image. TV size low resolution (854x480). */
		bannerTvLowImageUrl: FormControl<string | null | undefined>,

		/** Banner image. TV size medium resolution (1280x720). */
		bannerTvMediumImageUrl: FormControl<string | null | undefined>,

		/** The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages. */
		trackingImageUrl: FormControl<string | null | undefined>,
		watchIconImageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageSettingsFormGroup() {
		return new FormGroup<ImageSettingsFormProperties>({
			bannerExternalUrl: new FormControl<string | null | undefined>(undefined),
			bannerImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerMobileExtraHdImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerMobileHdImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerMobileImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerMobileLowImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerMobileMediumHdImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTabletExtraHdImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTabletHdImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTabletImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTabletLowImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTvHighImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTvImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTvLowImageUrl: new FormControl<string | null | undefined>(undefined),
			bannerTvMediumImageUrl: new FormControl<string | null | undefined>(undefined),
			trackingImageUrl: new FormControl<string | null | undefined>(undefined),
			watchIconImageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalizedProperty {
		defaultLanguage?: LanguageTag;
		localized?: Array<LocalizedString>;
	}
	export interface LocalizedPropertyFormProperties {
	}
	export function CreateLocalizedPropertyFormGroup() {
		return new FormGroup<LocalizedPropertyFormProperties>({
		});

	}

	export interface LanguageTag {
		value?: string | null;
	}
	export interface LanguageTagFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateLanguageTagFormGroup() {
		return new FormGroup<LanguageTagFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalizedString {
		language?: string | null;
		value?: string | null;
	}
	export interface LocalizedStringFormProperties {
		language: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringFormGroup() {
		return new FormGroup<LocalizedStringFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Branding properties for the watch. All deprecated. */
	export interface WatchSettings {

		/** The text color for the video watch page's branded area. */
		backgroundColor?: string | null;

		/** An ID that uniquely identifies a playlist that displays next to the video player. */
		featuredPlaylistId?: string | null;

		/** The background color for the video watch page's branded area. */
		textColor?: string | null;
	}

	/** Branding properties for the watch. All deprecated. */
	export interface WatchSettingsFormProperties {

		/** The text color for the video watch page's branded area. */
		backgroundColor: FormControl<string | null | undefined>,

		/** An ID that uniquely identifies a playlist that displays next to the video player. */
		featuredPlaylistId: FormControl<string | null | undefined>,

		/** The background color for the video watch page's branded area. */
		textColor: FormControl<string | null | undefined>,
	}
	export function CreateWatchSettingsFormGroup() {
		return new FormGroup<WatchSettingsFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			featuredPlaylistId: new FormControl<string | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the content of a channel. */
	export interface ChannelContentDetails {
		relatedPlaylists?: ChannelContentDetailsRelatedPlaylists;
	}

	/** Details about the content of a channel. */
	export interface ChannelContentDetailsFormProperties {
	}
	export function CreateChannelContentDetailsFormGroup() {
		return new FormGroup<ChannelContentDetailsFormProperties>({
		});

	}

	export interface ChannelContentDetailsRelatedPlaylists {

		/** The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		favorites?: string | null;

		/** The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		likes?: string | null;

		/** The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos. */
		uploads?: string | null;

		/** The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		watchHistory?: string | null;

		/** The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		watchLater?: string | null;
	}
	export interface ChannelContentDetailsRelatedPlaylistsFormProperties {

		/** The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		favorites: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		likes: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos. */
		uploads: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		watchHistory: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. */
		watchLater: FormControl<string | null | undefined>,
	}
	export function CreateChannelContentDetailsRelatedPlaylistsFormGroup() {
		return new FormGroup<ChannelContentDetailsRelatedPlaylistsFormProperties>({
			favorites: new FormControl<string | null | undefined>(undefined),
			likes: new FormControl<string | null | undefined>(undefined),
			uploads: new FormControl<string | null | undefined>(undefined),
			watchHistory: new FormControl<string | null | undefined>(undefined),
			watchLater: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
	export interface ChannelContentOwnerDetails {

		/** The ID of the content owner linked to the channel. */
		contentOwner?: string | null;

		/** The date and time when the channel was linked to the content owner. */
		timeLinked?: Date | null;
	}

	/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
	export interface ChannelContentOwnerDetailsFormProperties {

		/** The ID of the content owner linked to the channel. */
		contentOwner: FormControl<string | null | undefined>,

		/** The date and time when the channel was linked to the content owner. */
		timeLinked: FormControl<Date | null | undefined>,
	}
	export function CreateChannelContentOwnerDetailsFormGroup() {
		return new FormGroup<ChannelContentOwnerDetailsFormProperties>({
			contentOwner: new FormControl<string | null | undefined>(undefined),
			timeLinked: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
	export interface ChannelConversionPings {

		/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
		pings?: Array<ChannelConversionPing>;
	}

	/** The conversionPings object encapsulates information about conversion pings that need to be respected by the channel. */
	export interface ChannelConversionPingsFormProperties {
	}
	export function CreateChannelConversionPingsFormGroup() {
		return new FormGroup<ChannelConversionPingsFormProperties>({
		});

	}


	/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
	export interface ChannelConversionPing {

		/** Defines the context of the ping. */
		context?: ChannelConversionPingContext | null;

		/** The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping. */
		conversionUrl?: string | null;
	}

	/** Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping. */
	export interface ChannelConversionPingFormProperties {

		/** Defines the context of the ping. */
		context: FormControl<ChannelConversionPingContext | null | undefined>,

		/** The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping. */
		conversionUrl: FormControl<string | null | undefined>,
	}
	export function CreateChannelConversionPingFormGroup() {
		return new FormGroup<ChannelConversionPingFormProperties>({
			context: new FormControl<ChannelConversionPingContext | null | undefined>(undefined),
			conversionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelConversionPingContext { subscribe = 'subscribe', unsubscribe = 'unsubscribe', cview = 'cview' }


	/** Channel localization setting */
	export interface ChannelLocalization {

		/** The localized strings for channel's description. */
		description?: string | null;

		/** The localized strings for channel's title. */
		title?: string | null;
	}

	/** Channel localization setting */
	export interface ChannelLocalizationFormProperties {

		/** The localized strings for channel's description. */
		description: FormControl<string | null | undefined>,

		/** The localized strings for channel's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelLocalizationFormGroup() {
		return new FormGroup<ChannelLocalizationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a channel, including title, description and thumbnails. */
	export interface ChannelSnippet {

		/** The country of the channel. */
		country?: string | null;

		/** The custom url of the channel. */
		customUrl?: string | null;

		/** The language of the channel's default title and description. */
		defaultLanguage?: string | null;

		/** The description of the channel. */
		description?: string | null;

		/** Channel localization setting */
		localized?: ChannelLocalization;

		/** The date and time that the channel was created. */
		publishedAt?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The channel's title. */
		title?: string | null;
	}

	/** Basic details about a channel, including title, description and thumbnails. */
	export interface ChannelSnippetFormProperties {

		/** The country of the channel. */
		country: FormControl<string | null | undefined>,

		/** The custom url of the channel. */
		customUrl: FormControl<string | null | undefined>,

		/** The language of the channel's default title and description. */
		defaultLanguage: FormControl<string | null | undefined>,

		/** The description of the channel. */
		description: FormControl<string | null | undefined>,

		/** The date and time that the channel was created. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The channel's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelSnippetFormGroup() {
		return new FormGroup<ChannelSnippetFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			customUrl: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
	export interface ChannelStatistics {

		/** The number of comments for the channel. */
		commentCount?: string | null;

		/** Whether or not the number of subscribers is shown for this user. */
		hiddenSubscriberCount?: boolean | null;

		/** The number of subscribers that the channel has. */
		subscriberCount?: string | null;

		/** The number of videos uploaded to the channel. */
		videoCount?: string | null;

		/** The number of times the channel has been viewed. */
		viewCount?: string | null;
	}

	/** Statistics about a channel: number of subscribers, number of videos in the channel, etc. */
	export interface ChannelStatisticsFormProperties {

		/** The number of comments for the channel. */
		commentCount: FormControl<string | null | undefined>,

		/** Whether or not the number of subscribers is shown for this user. */
		hiddenSubscriberCount: FormControl<boolean | null | undefined>,

		/** The number of subscribers that the channel has. */
		subscriberCount: FormControl<string | null | undefined>,

		/** The number of videos uploaded to the channel. */
		videoCount: FormControl<string | null | undefined>,

		/** The number of times the channel has been viewed. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreateChannelStatisticsFormGroup() {
		return new FormGroup<ChannelStatisticsFormProperties>({
			commentCount: new FormControl<string | null | undefined>(undefined),
			hiddenSubscriberCount: new FormControl<boolean | null | undefined>(undefined),
			subscriberCount: new FormControl<string | null | undefined>(undefined),
			videoCount: new FormControl<string | null | undefined>(undefined),
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for the status part of a channel. */
	export interface ChannelStatus {

		/** If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity. */
		isLinked?: boolean | null;

		/** The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information. */
		longUploadsStatus?: ChannelStatusLongUploadsStatus | null;
		madeForKids?: boolean | null;

		/** Privacy status of the channel. */
		privacyStatus?: ChannelStatusPrivacyStatus | null;
		selfDeclaredMadeForKids?: boolean | null;
	}

	/** JSON template for the status part of a channel. */
	export interface ChannelStatusFormProperties {

		/** If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity. */
		isLinked: FormControl<boolean | null | undefined>,

		/** The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information. */
		longUploadsStatus: FormControl<ChannelStatusLongUploadsStatus | null | undefined>,
		madeForKids: FormControl<boolean | null | undefined>,

		/** Privacy status of the channel. */
		privacyStatus: FormControl<ChannelStatusPrivacyStatus | null | undefined>,
		selfDeclaredMadeForKids: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelStatusFormGroup() {
		return new FormGroup<ChannelStatusFormProperties>({
			isLinked: new FormControl<boolean | null | undefined>(undefined),
			longUploadsStatus: new FormControl<ChannelStatusLongUploadsStatus | null | undefined>(undefined),
			madeForKids: new FormControl<boolean | null | undefined>(undefined),
			privacyStatus: new FormControl<ChannelStatusPrivacyStatus | null | undefined>(undefined),
			selfDeclaredMadeForKids: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ChannelStatusLongUploadsStatus { longUploadsUnspecified = 'longUploadsUnspecified', allowed = 'allowed', eligible = 'eligible', disallowed = 'disallowed' }

	export enum ChannelStatusPrivacyStatus { public = 'public', unlisted = 'unlisted', private = 'private' }


	/** Freebase topic information related to the channel. */
	export interface ChannelTopicDetails {

		/** A list of Wikipedia URLs that describe the channel's content. */
		topicCategories?: Array<string>;

		/** A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API. */
		topicIds?: Array<string>;
	}

	/** Freebase topic information related to the channel. */
	export interface ChannelTopicDetailsFormProperties {
	}
	export function CreateChannelTopicDetailsFormGroup() {
		return new FormGroup<ChannelTopicDetailsFormProperties>({
		});

	}


	/** A channel banner returned as the response to a channel_banner.insert call. */
	export interface ChannelBannerResource {
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource". */
		kind?: string | null;

		/** The URL of this banner image. */
		url?: string | null;
	}

	/** A channel banner returned as the response to a channel_banner.insert call. */
	export interface ChannelBannerResourceFormProperties {
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource". */
		kind: FormControl<string | null | undefined>,

		/** The URL of this banner image. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChannelBannerResourceFormGroup() {
		return new FormGroup<ChannelBannerResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;
		items?: Array<Channel>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface ChannelListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateChannelListResponseFormGroup() {
		return new FormGroup<ChannelListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelProfileDetails {

		/** The YouTube channel ID. */
		channelId?: string | null;

		/** The channel's URL. */
		channelUrl?: string | null;

		/** The channel's display name. */
		displayName?: string | null;

		/** The channels's avatar URL. */
		profileImageUrl?: string | null;
	}
	export interface ChannelProfileDetailsFormProperties {

		/** The YouTube channel ID. */
		channelId: FormControl<string | null | undefined>,

		/** The channel's URL. */
		channelUrl: FormControl<string | null | undefined>,

		/** The channel's display name. */
		displayName: FormControl<string | null | undefined>,

		/** The channels's avatar URL. */
		profileImageUrl: FormControl<string | null | undefined>,
	}
	export function CreateChannelProfileDetailsFormGroup() {
		return new FormGroup<ChannelProfileDetailsFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			profileImageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelSection {

		/** Details about a channelsection, including playlists and channels. */
		contentDetails?: ChannelSectionContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the channel section. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection". */
		kind?: string | null;

		/** Localizations for different languages */
		localizations?: {[id: string]: ChannelSectionLocalization };

		/** Basic details about a channel section, including title, style and position. */
		snippet?: ChannelSectionSnippet;

		/** ChannelSection targeting setting. */
		targeting?: ChannelSectionTargeting;
	}
	export interface ChannelSectionFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the channel section. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection". */
		kind: FormControl<string | null | undefined>,

		/** Localizations for different languages */
		localizations: FormControl<{[id: string]: ChannelSectionLocalization } | null | undefined>,
	}
	export function CreateChannelSectionFormGroup() {
		return new FormGroup<ChannelSectionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localizations: new FormControl<{[id: string]: ChannelSectionLocalization } | null | undefined>(undefined),
		});

	}


	/** Details about a channelsection, including playlists and channels. */
	export interface ChannelSectionContentDetails {

		/** The channel ids for type multiple_channels. */
		channels?: Array<string>;

		/** The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed. */
		playlists?: Array<string>;
	}

	/** Details about a channelsection, including playlists and channels. */
	export interface ChannelSectionContentDetailsFormProperties {
	}
	export function CreateChannelSectionContentDetailsFormGroup() {
		return new FormGroup<ChannelSectionContentDetailsFormProperties>({
		});

	}


	/** ChannelSection localization setting */
	export interface ChannelSectionLocalization {

		/** The localized strings for channel section's title. */
		title?: string | null;
	}

	/** ChannelSection localization setting */
	export interface ChannelSectionLocalizationFormProperties {

		/** The localized strings for channel section's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelSectionLocalizationFormGroup() {
		return new FormGroup<ChannelSectionLocalizationFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a channel section, including title, style and position. */
	export interface ChannelSectionSnippet {

		/** The ID that YouTube uses to uniquely identify the channel that published the channel section. */
		channelId?: string | null;

		/** The language of the channel section's default title and description. */
		defaultLanguage?: string | null;

		/** ChannelSection localization setting */
		localized?: ChannelSectionLocalization;

		/**
		 * The position of the channel section in the channel.
		 * Type: uint, 0 to 4,294,967,295
		 */
		position?: number | null;

		/** The style of the channel section. */
		style?: ChannelSectionSnippetStyle | null;

		/** The channel section's title for multiple_playlists and multiple_channels. */
		title?: string | null;

		/** The type of the channel section. */
		type?: ChannelSectionSnippetType | null;
	}

	/** Basic details about a channel section, including title, style and position. */
	export interface ChannelSectionSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the channel that published the channel section. */
		channelId: FormControl<string | null | undefined>,

		/** The language of the channel section's default title and description. */
		defaultLanguage: FormControl<string | null | undefined>,

		/**
		 * The position of the channel section in the channel.
		 * Type: uint, 0 to 4,294,967,295
		 */
		position: FormControl<number | null | undefined>,

		/** The style of the channel section. */
		style: FormControl<ChannelSectionSnippetStyle | null | undefined>,

		/** The channel section's title for multiple_playlists and multiple_channels. */
		title: FormControl<string | null | undefined>,

		/** The type of the channel section. */
		type: FormControl<ChannelSectionSnippetType | null | undefined>,
	}
	export function CreateChannelSectionSnippetFormGroup() {
		return new FormGroup<ChannelSectionSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			style: new FormControl<ChannelSectionSnippetStyle | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelSectionSnippetType | null | undefined>(undefined),
		});

	}

	export enum ChannelSectionSnippetStyle { channelsectionStyleUnspecified = 'channelsectionStyleUnspecified', horizontalRow = 'horizontalRow', verticalList = 'verticalList' }

	export enum ChannelSectionSnippetType { channelsectionTypeUndefined = 'channelsectionTypeUndefined', singlePlaylist = 'singlePlaylist', multiplePlaylists = 'multiplePlaylists', popularUploads = 'popularUploads', recentUploads = 'recentUploads', likes = 'likes', allPlaylists = 'allPlaylists', likedPlaylists = 'likedPlaylists', recentPosts = 'recentPosts', recentActivity = 'recentActivity', liveEvents = 'liveEvents', upcomingEvents = 'upcomingEvents', completedEvents = 'completedEvents', multipleChannels = 'multipleChannels', postedVideos = 'postedVideos', postedPlaylists = 'postedPlaylists', subscriptions = 'subscriptions' }


	/** ChannelSection targeting setting. */
	export interface ChannelSectionTargeting {

		/** The country the channel section is targeting. */
		countries?: Array<string>;

		/** The language the channel section is targeting. */
		languages?: Array<string>;

		/** The region the channel section is targeting. */
		regions?: Array<string>;
	}

	/** ChannelSection targeting setting. */
	export interface ChannelSectionTargetingFormProperties {
	}
	export function CreateChannelSectionTargetingFormGroup() {
		return new FormGroup<ChannelSectionTargetingFormProperties>({
		});

	}

	export interface ChannelSectionListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of ChannelSections that match the request criteria. */
		items?: Array<ChannelSection>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface ChannelSectionListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateChannelSectionListResponseFormGroup() {
		return new FormGroup<ChannelSectionListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
	export interface ChannelToStoreLinkDetails {

		/** Google Merchant Center id of the store. */
		merchantId?: string | null;

		/** Name of the store. */
		storeName?: string | null;

		/** Landing page of the store. */
		storeUrl?: string | null;
	}

	/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
	export interface ChannelToStoreLinkDetailsFormProperties {

		/** Google Merchant Center id of the store. */
		merchantId: FormControl<string | null | undefined>,

		/** Name of the store. */
		storeName: FormControl<string | null | undefined>,

		/** Landing page of the store. */
		storeUrl: FormControl<string | null | undefined>,
	}
	export function CreateChannelToStoreLinkDetailsFormGroup() {
		return new FormGroup<ChannelToStoreLinkDetailsFormProperties>({
			merchantId: new FormControl<string | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
			storeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *comment* represents a single YouTube comment. */
	export interface Comment {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the comment. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#comment". */
		kind?: string | null;

		/** Basic details about a comment, such as its author and text. */
		snippet?: CommentSnippet;
	}

	/** A *comment* represents a single YouTube comment. */
	export interface CommentFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the comment. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#comment". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a comment, such as its author and text. */
	export interface CommentSnippet {

		/** The id of the author's YouTube channel, if any. */
		authorChannelId?: CommentSnippetAuthorChannelId;

		/** Link to the author's YouTube channel, if any. */
		authorChannelUrl?: string | null;

		/** The name of the user who posted the comment. */
		authorDisplayName?: string | null;

		/** The URL for the avatar of the user who posted the comment. */
		authorProfileImageUrl?: string | null;

		/** Whether the current viewer can rate this comment. */
		canRate?: boolean | null;

		/** The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel. */
		channelId?: string | null;

		/**
		 * The total number of likes this comment has received.
		 * Type: uint, 0 to 4,294,967,295
		 */
		likeCount?: number | null;

		/** The comment's moderation status. Will not be set if the comments were requested through the id filter. */
		moderationStatus?: CommentSnippetModerationStatus | null;

		/** The unique id of the parent comment, only set for replies. */
		parentId?: string | null;

		/** The date and time when the comment was originally published. */
		publishedAt?: Date | null;

		/** The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc. */
		textDisplay?: string | null;

		/** The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author. */
		textOriginal?: string | null;

		/** The date and time when the comment was last updated. */
		updatedAt?: Date | null;

		/** The ID of the video the comment refers to, if any. */
		videoId?: string | null;

		/** The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future. */
		viewerRating?: CommentSnippetViewerRating | null;
	}

	/** Basic details about a comment, such as its author and text. */
	export interface CommentSnippetFormProperties {

		/** Link to the author's YouTube channel, if any. */
		authorChannelUrl: FormControl<string | null | undefined>,

		/** The name of the user who posted the comment. */
		authorDisplayName: FormControl<string | null | undefined>,

		/** The URL for the avatar of the user who posted the comment. */
		authorProfileImageUrl: FormControl<string | null | undefined>,

		/** Whether the current viewer can rate this comment. */
		canRate: FormControl<boolean | null | undefined>,

		/** The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel. */
		channelId: FormControl<string | null | undefined>,

		/**
		 * The total number of likes this comment has received.
		 * Type: uint, 0 to 4,294,967,295
		 */
		likeCount: FormControl<number | null | undefined>,

		/** The comment's moderation status. Will not be set if the comments were requested through the id filter. */
		moderationStatus: FormControl<CommentSnippetModerationStatus | null | undefined>,

		/** The unique id of the parent comment, only set for replies. */
		parentId: FormControl<string | null | undefined>,

		/** The date and time when the comment was originally published. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc. */
		textDisplay: FormControl<string | null | undefined>,

		/** The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author. */
		textOriginal: FormControl<string | null | undefined>,

		/** The date and time when the comment was last updated. */
		updatedAt: FormControl<Date | null | undefined>,

		/** The ID of the video the comment refers to, if any. */
		videoId: FormControl<string | null | undefined>,

		/** The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future. */
		viewerRating: FormControl<CommentSnippetViewerRating | null | undefined>,
	}
	export function CreateCommentSnippetFormGroup() {
		return new FormGroup<CommentSnippetFormProperties>({
			authorChannelUrl: new FormControl<string | null | undefined>(undefined),
			authorDisplayName: new FormControl<string | null | undefined>(undefined),
			authorProfileImageUrl: new FormControl<string | null | undefined>(undefined),
			canRate: new FormControl<boolean | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			likeCount: new FormControl<number | null | undefined>(undefined),
			moderationStatus: new FormControl<CommentSnippetModerationStatus | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			textDisplay: new FormControl<string | null | undefined>(undefined),
			textOriginal: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
			viewerRating: new FormControl<CommentSnippetViewerRating | null | undefined>(undefined),
		});

	}


	/** The id of the author's YouTube channel, if any. */
	export interface CommentSnippetAuthorChannelId {
		value?: string | null;
	}

	/** The id of the author's YouTube channel, if any. */
	export interface CommentSnippetAuthorChannelIdFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateCommentSnippetAuthorChannelIdFormGroup() {
		return new FormGroup<CommentSnippetAuthorChannelIdFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommentSnippetModerationStatus { published = 'published', heldForReview = 'heldForReview', likelySpam = 'likelySpam', rejected = 'rejected' }

	export enum CommentSnippetViewerRating { none = 'none', like = 'like', dislike = 'dislike' }

	export interface CommentListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of comments that match the request criteria. */
		items?: Array<Comment>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface CommentListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateCommentListResponseFormGroup() {
		return new FormGroup<CommentListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
	export interface CommentThread {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the comment thread. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread". */
		kind?: string | null;

		/** Comments written in (direct or indirect) reply to the top level comment. */
		replies?: CommentThreadReplies;

		/** Basic details about a comment thread. */
		snippet?: CommentThreadSnippet;
	}

	/** A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
	export interface CommentThreadFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the comment thread. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCommentThreadFormGroup() {
		return new FormGroup<CommentThreadFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Comments written in (direct or indirect) reply to the top level comment. */
	export interface CommentThreadReplies {

		/** A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies. */
		comments?: Array<Comment>;
	}

	/** Comments written in (direct or indirect) reply to the top level comment. */
	export interface CommentThreadRepliesFormProperties {
	}
	export function CreateCommentThreadRepliesFormGroup() {
		return new FormGroup<CommentThreadRepliesFormProperties>({
		});

	}


	/** Basic details about a comment thread. */
	export interface CommentThreadSnippet {

		/** Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field. */
		canReply?: boolean | null;

		/** The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself. */
		channelId?: string | null;

		/** Whether the thread (and therefore all its comments) is visible to all YouTube users. */
		isPublic?: boolean | null;

		/** A *comment* represents a single YouTube comment. */
		topLevelComment?: Comment;

		/**
		 * The total number of replies (not including the top level comment).
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalReplyCount?: number | null;

		/** The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment. */
		videoId?: string | null;
	}

	/** Basic details about a comment thread. */
	export interface CommentThreadSnippetFormProperties {

		/** Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field. */
		canReply: FormControl<boolean | null | undefined>,

		/** The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself. */
		channelId: FormControl<string | null | undefined>,

		/** Whether the thread (and therefore all its comments) is visible to all YouTube users. */
		isPublic: FormControl<boolean | null | undefined>,

		/**
		 * The total number of replies (not including the top level comment).
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalReplyCount: FormControl<number | null | undefined>,

		/** The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateCommentThreadSnippetFormGroup() {
		return new FormGroup<CommentThreadSnippetFormProperties>({
			canReply: new FormControl<boolean | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			totalReplyCount: new FormControl<number | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentThreadListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of comment threads that match the request criteria. */
		items?: Array<CommentThread>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface CommentThreadListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateCommentThreadListResponseFormGroup() {
		return new FormGroup<CommentThreadListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange */
	export interface ContentRating {

		/** The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming. */
		acbRating?: ContentRatingAcbRating | null;

		/** The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM). */
		agcomRating?: ContentRatingAgcomRating | null;

		/** The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television. */
		anatelRating?: ContentRatingAnatelRating | null;

		/** The video's British Board of Film Classification (BBFC) rating. */
		bbfcRating?: ContentRatingBbfcRating | null;

		/** The video's rating from Thailand's Board of Film and Video Censors. */
		bfvcRating?: ContentRatingBfvcRating | null;

		/** The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur). */
		bmukkRating?: ContentRatingBmukkRating | null;

		/** Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
		catvRating?: ContentRatingCatvRating | null;

		/** The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
		catvfrRating?: ContentRatingCatvfrRating | null;

		/** The video's Central Board of Film Certification (CBFC - India) rating. */
		cbfcRating?: ContentRatingCbfcRating | null;

		/** The video's Consejo de Calificación Cinematográfica (Chile) rating. */
		cccRating?: ContentRatingCccRating | null;

		/** The video's rating from Portugal's Comissão de Classificação de Espect´culos. */
		cceRating?: ContentRatingCceRating | null;

		/** The video's rating in Switzerland. */
		chfilmRating?: ContentRatingChfilmRating | null;

		/** The video's Canadian Home Video Rating System (CHVRS) rating. */
		chvrsRating?: ContentRatingChvrsRating | null;

		/** The video's rating from the Commission de Contrôle des Films (Belgium). */
		cicfRating?: ContentRatingCicfRating | null;

		/** The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA). */
		cnaRating?: ContentRatingCnaRating | null;

		/** Rating system in France - Commission de classification cinematographique */
		cncRating?: ContentRatingCncRating | null;

		/** The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content. */
		csaRating?: ContentRatingCsaRating | null;

		/** The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF). */
		cscfRating?: ContentRatingCscfRating | null;

		/** The video's rating in the Czech Republic. */
		czfilmRating?: ContentRatingCzfilmRating | null;

		/** The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating. */
		djctqRating?: ContentRatingDjctqRating | null;

		/** Reasons that explain why the video received its DJCQT (Brazil) rating. */
		djctqRatingReasons?: Array<string>;

		/** Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism */
		ecbmctRating?: ContentRatingEcbmctRating | null;

		/** The video's rating in Estonia. */
		eefilmRating?: ContentRatingEefilmRating | null;

		/** The video's rating in Egypt. */
		egfilmRating?: ContentRatingEgfilmRating | null;

		/** The video's Eirin (映倫) rating. Eirin is the Japanese rating system. */
		eirinRating?: ContentRatingEirinRating | null;

		/** The video's rating from Malaysia's Film Censorship Board. */
		fcbmRating?: ContentRatingFcbmRating | null;

		/** The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration. */
		fcoRating?: ContentRatingFcoRating | null;

		/** This property has been deprecated. Use the contentDetails.contentRating.cncRating instead. */
		fmocRating?: ContentRatingFmocRating | null;

		/** The video's rating from South Africa's Film and Publication Board. */
		fpbRating?: ContentRatingFpbRating | null;

		/** Reasons that explain why the video received its FPB (South Africa) rating. */
		fpbRatingReasons?: Array<string>;

		/** The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating. */
		fskRating?: ContentRatingFskRating | null;

		/** The video's rating in Greece. */
		grfilmRating?: ContentRatingGrfilmRating | null;

		/** The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating. */
		icaaRating?: ContentRatingIcaaRating | null;

		/** The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information. */
		ifcoRating?: ContentRatingIfcoRating | null;

		/** The video's rating in Israel. */
		ilfilmRating?: ContentRatingIlfilmRating | null;

		/** The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating. */
		incaaRating?: ContentRatingIncaaRating | null;

		/** The video's rating from the Kenya Film Classification Board. */
		kfcbRating?: ContentRatingKfcbRating | null;

		/** The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands). */
		kijkwijzerRating?: ContentRatingKijkwijzerRating | null;

		/** The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea. */
		kmrbRating?: ContentRatingKmrbRating | null;

		/** The video's rating from Indonesia's Lembaga Sensor Film. */
		lsfRating?: ContentRatingLsfRating | null;

		/** The video's rating from Malta's Film Age-Classification Board. */
		mccaaRating?: ContentRatingMccaaRating | null;

		/** The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People. */
		mccypRating?: ContentRatingMccypRating | null;

		/** The video's rating system for Vietnam - MCST */
		mcstRating?: ContentRatingMcstRating | null;

		/** The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC). */
		mdaRating?: ContentRatingMdaRating | null;

		/** The video's rating from Medietilsynet, the Norwegian Media Authority. */
		medietilsynetRating?: ContentRatingMedietilsynetRating | null;

		/** The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute). */
		mekuRating?: ContentRatingMekuRating | null;

		/** The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details. */
		menaMpaaRating?: ContentRatingMenaMpaaRating | null;

		/** The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy). */
		mibacRating?: ContentRatingMibacRating | null;

		/** The video's Ministerio de Cultura (Colombia) rating. */
		mocRating?: ContentRatingMocRating | null;

		/** The video's rating from Taiwan's Ministry of Culture (文化部). */
		moctwRating?: ContentRatingMoctwRating | null;

		/** The video's Motion Picture Association of America (MPAA) rating. */
		mpaaRating?: ContentRatingMpaaRating | null;

		/** The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html. */
		mpaatRating?: ContentRatingMpaatRating | null;

		/** The video's rating from the Movie and Television Review and Classification Board (Philippines). */
		mtrcbRating?: ContentRatingMtrcbRating | null;

		/** The video's rating from the Maldives National Bureau of Classification. */
		nbcRating?: ContentRatingNbcRating | null;

		/** The video's rating in Poland. */
		nbcplRating?: ContentRatingNbcplRating | null;

		/** The video's rating from the Bulgarian National Film Center. */
		nfrcRating?: ContentRatingNfrcRating | null;

		/** The video's rating from Nigeria's National Film and Video Censors Board. */
		nfvcbRating?: ContentRatingNfvcbRating | null;

		/** The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia). */
		nkclvRating?: ContentRatingNkclvRating | null;

		/** The National Media Council ratings system for United Arab Emirates. */
		nmcRating?: ContentRatingNmcRating | null;

		/** The video's Office of Film and Literature Classification (OFLC - New Zealand) rating. */
		oflcRating?: ContentRatingOflcRating | null;

		/** The video's rating in Peru. */
		pefilmRating?: ContentRatingPefilmRating | null;

		/** The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film. */
		rcnofRating?: ContentRatingRcnofRating | null;

		/** The video's rating in Venezuela. */
		resorteviolenciaRating?: ContentRatingResorteviolenciaRating | null;

		/** The video's General Directorate of Radio, Television and Cinematography (Mexico) rating. */
		rtcRating?: ContentRatingRtcRating | null;

		/** The video's rating from Ireland's Raidió Teilifís Éireann. */
		rteRating?: ContentRatingRteRating | null;

		/** The video's National Film Registry of the Russian Federation (MKRF - Russia) rating. */
		russiaRating?: ContentRatingRussiaRating | null;

		/** The video's rating in Slovakia. */
		skfilmRating?: ContentRatingSkfilmRating | null;

		/** The video's rating in Iceland. */
		smaisRating?: ContentRatingSmaisRating | null;

		/** The video's rating from Statens medieråd (Sweden's National Media Council). */
		smsaRating?: ContentRatingSmsaRating | null;

		/** The video's TV Parental Guidelines (TVPG) rating. */
		tvpgRating?: ContentRatingTvpgRating | null;

		/** A rating that YouTube uses to identify age-restricted content. */
		ytRating?: ContentRatingYtRating | null;
	}

	/** Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange */
	export interface ContentRatingFormProperties {

		/** The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming. */
		acbRating: FormControl<ContentRatingAcbRating | null | undefined>,

		/** The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM). */
		agcomRating: FormControl<ContentRatingAgcomRating | null | undefined>,

		/** The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television. */
		anatelRating: FormControl<ContentRatingAnatelRating | null | undefined>,

		/** The video's British Board of Film Classification (BBFC) rating. */
		bbfcRating: FormControl<ContentRatingBbfcRating | null | undefined>,

		/** The video's rating from Thailand's Board of Film and Video Censors. */
		bfvcRating: FormControl<ContentRatingBfvcRating | null | undefined>,

		/** The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur). */
		bmukkRating: FormControl<ContentRatingBmukkRating | null | undefined>,

		/** Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
		catvRating: FormControl<ContentRatingCatvRating | null | undefined>,

		/** The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website. */
		catvfrRating: FormControl<ContentRatingCatvfrRating | null | undefined>,

		/** The video's Central Board of Film Certification (CBFC - India) rating. */
		cbfcRating: FormControl<ContentRatingCbfcRating | null | undefined>,

		/** The video's Consejo de Calificación Cinematográfica (Chile) rating. */
		cccRating: FormControl<ContentRatingCccRating | null | undefined>,

		/** The video's rating from Portugal's Comissão de Classificação de Espect´culos. */
		cceRating: FormControl<ContentRatingCceRating | null | undefined>,

		/** The video's rating in Switzerland. */
		chfilmRating: FormControl<ContentRatingChfilmRating | null | undefined>,

		/** The video's Canadian Home Video Rating System (CHVRS) rating. */
		chvrsRating: FormControl<ContentRatingChvrsRating | null | undefined>,

		/** The video's rating from the Commission de Contrôle des Films (Belgium). */
		cicfRating: FormControl<ContentRatingCicfRating | null | undefined>,

		/** The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA). */
		cnaRating: FormControl<ContentRatingCnaRating | null | undefined>,

		/** Rating system in France - Commission de classification cinematographique */
		cncRating: FormControl<ContentRatingCncRating | null | undefined>,

		/** The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content. */
		csaRating: FormControl<ContentRatingCsaRating | null | undefined>,

		/** The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF). */
		cscfRating: FormControl<ContentRatingCscfRating | null | undefined>,

		/** The video's rating in the Czech Republic. */
		czfilmRating: FormControl<ContentRatingCzfilmRating | null | undefined>,

		/** The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating. */
		djctqRating: FormControl<ContentRatingDjctqRating | null | undefined>,

		/** Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism */
		ecbmctRating: FormControl<ContentRatingEcbmctRating | null | undefined>,

		/** The video's rating in Estonia. */
		eefilmRating: FormControl<ContentRatingEefilmRating | null | undefined>,

		/** The video's rating in Egypt. */
		egfilmRating: FormControl<ContentRatingEgfilmRating | null | undefined>,

		/** The video's Eirin (映倫) rating. Eirin is the Japanese rating system. */
		eirinRating: FormControl<ContentRatingEirinRating | null | undefined>,

		/** The video's rating from Malaysia's Film Censorship Board. */
		fcbmRating: FormControl<ContentRatingFcbmRating | null | undefined>,

		/** The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration. */
		fcoRating: FormControl<ContentRatingFcoRating | null | undefined>,

		/** This property has been deprecated. Use the contentDetails.contentRating.cncRating instead. */
		fmocRating: FormControl<ContentRatingFmocRating | null | undefined>,

		/** The video's rating from South Africa's Film and Publication Board. */
		fpbRating: FormControl<ContentRatingFpbRating | null | undefined>,

		/** The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating. */
		fskRating: FormControl<ContentRatingFskRating | null | undefined>,

		/** The video's rating in Greece. */
		grfilmRating: FormControl<ContentRatingGrfilmRating | null | undefined>,

		/** The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating. */
		icaaRating: FormControl<ContentRatingIcaaRating | null | undefined>,

		/** The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information. */
		ifcoRating: FormControl<ContentRatingIfcoRating | null | undefined>,

		/** The video's rating in Israel. */
		ilfilmRating: FormControl<ContentRatingIlfilmRating | null | undefined>,

		/** The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating. */
		incaaRating: FormControl<ContentRatingIncaaRating | null | undefined>,

		/** The video's rating from the Kenya Film Classification Board. */
		kfcbRating: FormControl<ContentRatingKfcbRating | null | undefined>,

		/** The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands). */
		kijkwijzerRating: FormControl<ContentRatingKijkwijzerRating | null | undefined>,

		/** The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea. */
		kmrbRating: FormControl<ContentRatingKmrbRating | null | undefined>,

		/** The video's rating from Indonesia's Lembaga Sensor Film. */
		lsfRating: FormControl<ContentRatingLsfRating | null | undefined>,

		/** The video's rating from Malta's Film Age-Classification Board. */
		mccaaRating: FormControl<ContentRatingMccaaRating | null | undefined>,

		/** The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People. */
		mccypRating: FormControl<ContentRatingMccypRating | null | undefined>,

		/** The video's rating system for Vietnam - MCST */
		mcstRating: FormControl<ContentRatingMcstRating | null | undefined>,

		/** The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC). */
		mdaRating: FormControl<ContentRatingMdaRating | null | undefined>,

		/** The video's rating from Medietilsynet, the Norwegian Media Authority. */
		medietilsynetRating: FormControl<ContentRatingMedietilsynetRating | null | undefined>,

		/** The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute). */
		mekuRating: FormControl<ContentRatingMekuRating | null | undefined>,

		/** The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details. */
		menaMpaaRating: FormControl<ContentRatingMenaMpaaRating | null | undefined>,

		/** The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy). */
		mibacRating: FormControl<ContentRatingMibacRating | null | undefined>,

		/** The video's Ministerio de Cultura (Colombia) rating. */
		mocRating: FormControl<ContentRatingMocRating | null | undefined>,

		/** The video's rating from Taiwan's Ministry of Culture (文化部). */
		moctwRating: FormControl<ContentRatingMoctwRating | null | undefined>,

		/** The video's Motion Picture Association of America (MPAA) rating. */
		mpaaRating: FormControl<ContentRatingMpaaRating | null | undefined>,

		/** The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html. */
		mpaatRating: FormControl<ContentRatingMpaatRating | null | undefined>,

		/** The video's rating from the Movie and Television Review and Classification Board (Philippines). */
		mtrcbRating: FormControl<ContentRatingMtrcbRating | null | undefined>,

		/** The video's rating from the Maldives National Bureau of Classification. */
		nbcRating: FormControl<ContentRatingNbcRating | null | undefined>,

		/** The video's rating in Poland. */
		nbcplRating: FormControl<ContentRatingNbcplRating | null | undefined>,

		/** The video's rating from the Bulgarian National Film Center. */
		nfrcRating: FormControl<ContentRatingNfrcRating | null | undefined>,

		/** The video's rating from Nigeria's National Film and Video Censors Board. */
		nfvcbRating: FormControl<ContentRatingNfvcbRating | null | undefined>,

		/** The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia). */
		nkclvRating: FormControl<ContentRatingNkclvRating | null | undefined>,

		/** The National Media Council ratings system for United Arab Emirates. */
		nmcRating: FormControl<ContentRatingNmcRating | null | undefined>,

		/** The video's Office of Film and Literature Classification (OFLC - New Zealand) rating. */
		oflcRating: FormControl<ContentRatingOflcRating | null | undefined>,

		/** The video's rating in Peru. */
		pefilmRating: FormControl<ContentRatingPefilmRating | null | undefined>,

		/** The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film. */
		rcnofRating: FormControl<ContentRatingRcnofRating | null | undefined>,

		/** The video's rating in Venezuela. */
		resorteviolenciaRating: FormControl<ContentRatingResorteviolenciaRating | null | undefined>,

		/** The video's General Directorate of Radio, Television and Cinematography (Mexico) rating. */
		rtcRating: FormControl<ContentRatingRtcRating | null | undefined>,

		/** The video's rating from Ireland's Raidió Teilifís Éireann. */
		rteRating: FormControl<ContentRatingRteRating | null | undefined>,

		/** The video's National Film Registry of the Russian Federation (MKRF - Russia) rating. */
		russiaRating: FormControl<ContentRatingRussiaRating | null | undefined>,

		/** The video's rating in Slovakia. */
		skfilmRating: FormControl<ContentRatingSkfilmRating | null | undefined>,

		/** The video's rating in Iceland. */
		smaisRating: FormControl<ContentRatingSmaisRating | null | undefined>,

		/** The video's rating from Statens medieråd (Sweden's National Media Council). */
		smsaRating: FormControl<ContentRatingSmsaRating | null | undefined>,

		/** The video's TV Parental Guidelines (TVPG) rating. */
		tvpgRating: FormControl<ContentRatingTvpgRating | null | undefined>,

		/** A rating that YouTube uses to identify age-restricted content. */
		ytRating: FormControl<ContentRatingYtRating | null | undefined>,
	}
	export function CreateContentRatingFormGroup() {
		return new FormGroup<ContentRatingFormProperties>({
			acbRating: new FormControl<ContentRatingAcbRating | null | undefined>(undefined),
			agcomRating: new FormControl<ContentRatingAgcomRating | null | undefined>(undefined),
			anatelRating: new FormControl<ContentRatingAnatelRating | null | undefined>(undefined),
			bbfcRating: new FormControl<ContentRatingBbfcRating | null | undefined>(undefined),
			bfvcRating: new FormControl<ContentRatingBfvcRating | null | undefined>(undefined),
			bmukkRating: new FormControl<ContentRatingBmukkRating | null | undefined>(undefined),
			catvRating: new FormControl<ContentRatingCatvRating | null | undefined>(undefined),
			catvfrRating: new FormControl<ContentRatingCatvfrRating | null | undefined>(undefined),
			cbfcRating: new FormControl<ContentRatingCbfcRating | null | undefined>(undefined),
			cccRating: new FormControl<ContentRatingCccRating | null | undefined>(undefined),
			cceRating: new FormControl<ContentRatingCceRating | null | undefined>(undefined),
			chfilmRating: new FormControl<ContentRatingChfilmRating | null | undefined>(undefined),
			chvrsRating: new FormControl<ContentRatingChvrsRating | null | undefined>(undefined),
			cicfRating: new FormControl<ContentRatingCicfRating | null | undefined>(undefined),
			cnaRating: new FormControl<ContentRatingCnaRating | null | undefined>(undefined),
			cncRating: new FormControl<ContentRatingCncRating | null | undefined>(undefined),
			csaRating: new FormControl<ContentRatingCsaRating | null | undefined>(undefined),
			cscfRating: new FormControl<ContentRatingCscfRating | null | undefined>(undefined),
			czfilmRating: new FormControl<ContentRatingCzfilmRating | null | undefined>(undefined),
			djctqRating: new FormControl<ContentRatingDjctqRating | null | undefined>(undefined),
			ecbmctRating: new FormControl<ContentRatingEcbmctRating | null | undefined>(undefined),
			eefilmRating: new FormControl<ContentRatingEefilmRating | null | undefined>(undefined),
			egfilmRating: new FormControl<ContentRatingEgfilmRating | null | undefined>(undefined),
			eirinRating: new FormControl<ContentRatingEirinRating | null | undefined>(undefined),
			fcbmRating: new FormControl<ContentRatingFcbmRating | null | undefined>(undefined),
			fcoRating: new FormControl<ContentRatingFcoRating | null | undefined>(undefined),
			fmocRating: new FormControl<ContentRatingFmocRating | null | undefined>(undefined),
			fpbRating: new FormControl<ContentRatingFpbRating | null | undefined>(undefined),
			fskRating: new FormControl<ContentRatingFskRating | null | undefined>(undefined),
			grfilmRating: new FormControl<ContentRatingGrfilmRating | null | undefined>(undefined),
			icaaRating: new FormControl<ContentRatingIcaaRating | null | undefined>(undefined),
			ifcoRating: new FormControl<ContentRatingIfcoRating | null | undefined>(undefined),
			ilfilmRating: new FormControl<ContentRatingIlfilmRating | null | undefined>(undefined),
			incaaRating: new FormControl<ContentRatingIncaaRating | null | undefined>(undefined),
			kfcbRating: new FormControl<ContentRatingKfcbRating | null | undefined>(undefined),
			kijkwijzerRating: new FormControl<ContentRatingKijkwijzerRating | null | undefined>(undefined),
			kmrbRating: new FormControl<ContentRatingKmrbRating | null | undefined>(undefined),
			lsfRating: new FormControl<ContentRatingLsfRating | null | undefined>(undefined),
			mccaaRating: new FormControl<ContentRatingMccaaRating | null | undefined>(undefined),
			mccypRating: new FormControl<ContentRatingMccypRating | null | undefined>(undefined),
			mcstRating: new FormControl<ContentRatingMcstRating | null | undefined>(undefined),
			mdaRating: new FormControl<ContentRatingMdaRating | null | undefined>(undefined),
			medietilsynetRating: new FormControl<ContentRatingMedietilsynetRating | null | undefined>(undefined),
			mekuRating: new FormControl<ContentRatingMekuRating | null | undefined>(undefined),
			menaMpaaRating: new FormControl<ContentRatingMenaMpaaRating | null | undefined>(undefined),
			mibacRating: new FormControl<ContentRatingMibacRating | null | undefined>(undefined),
			mocRating: new FormControl<ContentRatingMocRating | null | undefined>(undefined),
			moctwRating: new FormControl<ContentRatingMoctwRating | null | undefined>(undefined),
			mpaaRating: new FormControl<ContentRatingMpaaRating | null | undefined>(undefined),
			mpaatRating: new FormControl<ContentRatingMpaatRating | null | undefined>(undefined),
			mtrcbRating: new FormControl<ContentRatingMtrcbRating | null | undefined>(undefined),
			nbcRating: new FormControl<ContentRatingNbcRating | null | undefined>(undefined),
			nbcplRating: new FormControl<ContentRatingNbcplRating | null | undefined>(undefined),
			nfrcRating: new FormControl<ContentRatingNfrcRating | null | undefined>(undefined),
			nfvcbRating: new FormControl<ContentRatingNfvcbRating | null | undefined>(undefined),
			nkclvRating: new FormControl<ContentRatingNkclvRating | null | undefined>(undefined),
			nmcRating: new FormControl<ContentRatingNmcRating | null | undefined>(undefined),
			oflcRating: new FormControl<ContentRatingOflcRating | null | undefined>(undefined),
			pefilmRating: new FormControl<ContentRatingPefilmRating | null | undefined>(undefined),
			rcnofRating: new FormControl<ContentRatingRcnofRating | null | undefined>(undefined),
			resorteviolenciaRating: new FormControl<ContentRatingResorteviolenciaRating | null | undefined>(undefined),
			rtcRating: new FormControl<ContentRatingRtcRating | null | undefined>(undefined),
			rteRating: new FormControl<ContentRatingRteRating | null | undefined>(undefined),
			russiaRating: new FormControl<ContentRatingRussiaRating | null | undefined>(undefined),
			skfilmRating: new FormControl<ContentRatingSkfilmRating | null | undefined>(undefined),
			smaisRating: new FormControl<ContentRatingSmaisRating | null | undefined>(undefined),
			smsaRating: new FormControl<ContentRatingSmsaRating | null | undefined>(undefined),
			tvpgRating: new FormControl<ContentRatingTvpgRating | null | undefined>(undefined),
			ytRating: new FormControl<ContentRatingYtRating | null | undefined>(undefined),
		});

	}

	export enum ContentRatingAcbRating { acbUnspecified = 'acbUnspecified', acbE = 'acbE', acbP = 'acbP', acbC = 'acbC', acbG = 'acbG', acbPg = 'acbPg', acbM = 'acbM', acbMa15plus = 'acbMa15plus', acbR18plus = 'acbR18plus', acbUnrated = 'acbUnrated' }

	export enum ContentRatingAgcomRating { agcomUnspecified = 'agcomUnspecified', agcomT = 'agcomT', agcomVm14 = 'agcomVm14', agcomVm18 = 'agcomVm18', agcomUnrated = 'agcomUnrated' }

	export enum ContentRatingAnatelRating { anatelUnspecified = 'anatelUnspecified', anatelF = 'anatelF', anatelI = 'anatelI', anatelI7 = 'anatelI7', anatelI10 = 'anatelI10', anatelI12 = 'anatelI12', anatelR = 'anatelR', anatelA = 'anatelA', anatelUnrated = 'anatelUnrated' }

	export enum ContentRatingBbfcRating { bbfcUnspecified = 'bbfcUnspecified', bbfcU = 'bbfcU', bbfcPg = 'bbfcPg', bbfc12a = 'bbfc12a', bbfc12 = 'bbfc12', bbfc15 = 'bbfc15', bbfc18 = 'bbfc18', bbfcR18 = 'bbfcR18', bbfcUnrated = 'bbfcUnrated' }

	export enum ContentRatingBfvcRating { bfvcUnspecified = 'bfvcUnspecified', bfvcG = 'bfvcG', bfvcE = 'bfvcE', bfvc13 = 'bfvc13', bfvc15 = 'bfvc15', bfvc18 = 'bfvc18', bfvc20 = 'bfvc20', bfvcB = 'bfvcB', bfvcUnrated = 'bfvcUnrated' }

	export enum ContentRatingBmukkRating { bmukkUnspecified = 'bmukkUnspecified', bmukkAa = 'bmukkAa', bmukk6 = 'bmukk6', bmukk8 = 'bmukk8', bmukk10 = 'bmukk10', bmukk12 = 'bmukk12', bmukk14 = 'bmukk14', bmukk16 = 'bmukk16', bmukkUnrated = 'bmukkUnrated' }

	export enum ContentRatingCatvRating { catvUnspecified = 'catvUnspecified', catvC = 'catvC', catvC8 = 'catvC8', catvG = 'catvG', catvPg = 'catvPg', catv14plus = 'catv14plus', catv18plus = 'catv18plus', catvUnrated = 'catvUnrated', catvE = 'catvE' }

	export enum ContentRatingCatvfrRating { catvfrUnspecified = 'catvfrUnspecified', catvfrG = 'catvfrG', catvfr8plus = 'catvfr8plus', catvfr13plus = 'catvfr13plus', catvfr16plus = 'catvfr16plus', catvfr18plus = 'catvfr18plus', catvfrUnrated = 'catvfrUnrated', catvfrE = 'catvfrE' }

	export enum ContentRatingCbfcRating { cbfcUnspecified = 'cbfcUnspecified', cbfcU = 'cbfcU', cbfcUA = 'cbfcUA', cbfcUA7plus = 'cbfcUA7plus', cbfcUA13plus = 'cbfcUA13plus', cbfcUA16plus = 'cbfcUA16plus', cbfcA = 'cbfcA', cbfcS = 'cbfcS', cbfcUnrated = 'cbfcUnrated' }

	export enum ContentRatingCccRating { cccUnspecified = 'cccUnspecified', cccTe = 'cccTe', ccc6 = 'ccc6', ccc14 = 'ccc14', ccc18 = 'ccc18', ccc18v = 'ccc18v', ccc18s = 'ccc18s', cccUnrated = 'cccUnrated' }

	export enum ContentRatingCceRating { cceUnspecified = 'cceUnspecified', cceM4 = 'cceM4', cceM6 = 'cceM6', cceM12 = 'cceM12', cceM16 = 'cceM16', cceM18 = 'cceM18', cceUnrated = 'cceUnrated', cceM14 = 'cceM14' }

	export enum ContentRatingChfilmRating { chfilmUnspecified = 'chfilmUnspecified', chfilm0 = 'chfilm0', chfilm6 = 'chfilm6', chfilm12 = 'chfilm12', chfilm16 = 'chfilm16', chfilm18 = 'chfilm18', chfilmUnrated = 'chfilmUnrated' }

	export enum ContentRatingChvrsRating { chvrsUnspecified = 'chvrsUnspecified', chvrsG = 'chvrsG', chvrsPg = 'chvrsPg', chvrs14a = 'chvrs14a', chvrs18a = 'chvrs18a', chvrsR = 'chvrsR', chvrsE = 'chvrsE', chvrsUnrated = 'chvrsUnrated' }

	export enum ContentRatingCicfRating { cicfUnspecified = 'cicfUnspecified', cicfE = 'cicfE', cicfKtEa = 'cicfKtEa', cicfKntEna = 'cicfKntEna', cicfUnrated = 'cicfUnrated' }

	export enum ContentRatingCnaRating { cnaUnspecified = 'cnaUnspecified', cnaAp = 'cnaAp', cna12 = 'cna12', cna15 = 'cna15', cna18 = 'cna18', cna18plus = 'cna18plus', cnaUnrated = 'cnaUnrated' }

	export enum ContentRatingCncRating { cncUnspecified = 'cncUnspecified', cncT = 'cncT', cnc10 = 'cnc10', cnc12 = 'cnc12', cnc16 = 'cnc16', cnc18 = 'cnc18', cncE = 'cncE', cncInterdiction = 'cncInterdiction', cncUnrated = 'cncUnrated' }

	export enum ContentRatingCsaRating { csaUnspecified = 'csaUnspecified', csaT = 'csaT', csa10 = 'csa10', csa12 = 'csa12', csa16 = 'csa16', csa18 = 'csa18', csaInterdiction = 'csaInterdiction', csaUnrated = 'csaUnrated' }

	export enum ContentRatingCscfRating { cscfUnspecified = 'cscfUnspecified', cscfAl = 'cscfAl', cscfA = 'cscfA', cscf6 = 'cscf6', cscf9 = 'cscf9', cscf12 = 'cscf12', cscf16 = 'cscf16', cscf18 = 'cscf18', cscfUnrated = 'cscfUnrated' }

	export enum ContentRatingCzfilmRating { czfilmUnspecified = 'czfilmUnspecified', czfilmU = 'czfilmU', czfilm12 = 'czfilm12', czfilm14 = 'czfilm14', czfilm18 = 'czfilm18', czfilmUnrated = 'czfilmUnrated' }

	export enum ContentRatingDjctqRating { djctqUnspecified = 'djctqUnspecified', djctqL = 'djctqL', djctq10 = 'djctq10', djctq12 = 'djctq12', djctq14 = 'djctq14', djctq16 = 'djctq16', djctq18 = 'djctq18', djctqEr = 'djctqEr', djctqL10 = 'djctqL10', djctqL12 = 'djctqL12', djctqL14 = 'djctqL14', djctqL16 = 'djctqL16', djctqL18 = 'djctqL18', djctq1012 = 'djctq1012', djctq1014 = 'djctq1014', djctq1016 = 'djctq1016', djctq1018 = 'djctq1018', djctq1214 = 'djctq1214', djctq1216 = 'djctq1216', djctq1218 = 'djctq1218', djctq1416 = 'djctq1416', djctq1418 = 'djctq1418', djctq1618 = 'djctq1618', djctqUnrated = 'djctqUnrated' }

	export enum ContentRatingEcbmctRating { ecbmctUnspecified = 'ecbmctUnspecified', ecbmctG = 'ecbmctG', ecbmct7a = 'ecbmct7a', ecbmct7plus = 'ecbmct7plus', ecbmct13a = 'ecbmct13a', ecbmct13plus = 'ecbmct13plus', ecbmct15a = 'ecbmct15a', ecbmct15plus = 'ecbmct15plus', ecbmct18plus = 'ecbmct18plus', ecbmctUnrated = 'ecbmctUnrated' }

	export enum ContentRatingEefilmRating { eefilmUnspecified = 'eefilmUnspecified', eefilmPere = 'eefilmPere', eefilmL = 'eefilmL', eefilmMs6 = 'eefilmMs6', eefilmK6 = 'eefilmK6', eefilmMs12 = 'eefilmMs12', eefilmK12 = 'eefilmK12', eefilmK14 = 'eefilmK14', eefilmK16 = 'eefilmK16', eefilmUnrated = 'eefilmUnrated' }

	export enum ContentRatingEgfilmRating { egfilmUnspecified = 'egfilmUnspecified', egfilmGn = 'egfilmGn', egfilm18 = 'egfilm18', egfilmBn = 'egfilmBn', egfilmUnrated = 'egfilmUnrated' }

	export enum ContentRatingEirinRating { eirinUnspecified = 'eirinUnspecified', eirinG = 'eirinG', eirinPg12 = 'eirinPg12', eirinR15plus = 'eirinR15plus', eirinR18plus = 'eirinR18plus', eirinUnrated = 'eirinUnrated' }

	export enum ContentRatingFcbmRating { fcbmUnspecified = 'fcbmUnspecified', fcbmU = 'fcbmU', fcbmPg13 = 'fcbmPg13', fcbmP13 = 'fcbmP13', fcbm18 = 'fcbm18', fcbm18sx = 'fcbm18sx', fcbm18pa = 'fcbm18pa', fcbm18sg = 'fcbm18sg', fcbm18pl = 'fcbm18pl', fcbmUnrated = 'fcbmUnrated' }

	export enum ContentRatingFcoRating { fcoUnspecified = 'fcoUnspecified', fcoI = 'fcoI', fcoIia = 'fcoIia', fcoIib = 'fcoIib', fcoIi = 'fcoIi', fcoIii = 'fcoIii', fcoUnrated = 'fcoUnrated' }

	export enum ContentRatingFmocRating { fmocUnspecified = 'fmocUnspecified', fmocU = 'fmocU', fmoc10 = 'fmoc10', fmoc12 = 'fmoc12', fmoc16 = 'fmoc16', fmoc18 = 'fmoc18', fmocE = 'fmocE', fmocUnrated = 'fmocUnrated' }

	export enum ContentRatingFpbRating { fpbUnspecified = 'fpbUnspecified', fpbA = 'fpbA', fpbPg = 'fpbPg', fpb79Pg = 'fpb79Pg', fpb1012Pg = 'fpb1012Pg', fpb13 = 'fpb13', fpb16 = 'fpb16', fpb18 = 'fpb18', fpbX18 = 'fpbX18', fpbXx = 'fpbXx', fpbUnrated = 'fpbUnrated', fpb10 = 'fpb10' }

	export enum ContentRatingFskRating { fskUnspecified = 'fskUnspecified', fsk0 = 'fsk0', fsk6 = 'fsk6', fsk12 = 'fsk12', fsk16 = 'fsk16', fsk18 = 'fsk18', fskUnrated = 'fskUnrated' }

	export enum ContentRatingGrfilmRating { grfilmUnspecified = 'grfilmUnspecified', grfilmK = 'grfilmK', grfilmE = 'grfilmE', grfilmK12 = 'grfilmK12', grfilmK13 = 'grfilmK13', grfilmK15 = 'grfilmK15', grfilmK17 = 'grfilmK17', grfilmK18 = 'grfilmK18', grfilmUnrated = 'grfilmUnrated' }

	export enum ContentRatingIcaaRating { icaaUnspecified = 'icaaUnspecified', icaaApta = 'icaaApta', icaa7 = 'icaa7', icaa12 = 'icaa12', icaa13 = 'icaa13', icaa16 = 'icaa16', icaa18 = 'icaa18', icaaX = 'icaaX', icaaUnrated = 'icaaUnrated' }

	export enum ContentRatingIfcoRating { ifcoUnspecified = 'ifcoUnspecified', ifcoG = 'ifcoG', ifcoPg = 'ifcoPg', ifco12 = 'ifco12', ifco12a = 'ifco12a', ifco15 = 'ifco15', ifco15a = 'ifco15a', ifco16 = 'ifco16', ifco18 = 'ifco18', ifcoUnrated = 'ifcoUnrated' }

	export enum ContentRatingIlfilmRating { ilfilmUnspecified = 'ilfilmUnspecified', ilfilmAa = 'ilfilmAa', ilfilm12 = 'ilfilm12', ilfilm14 = 'ilfilm14', ilfilm16 = 'ilfilm16', ilfilm18 = 'ilfilm18', ilfilmUnrated = 'ilfilmUnrated' }

	export enum ContentRatingIncaaRating { incaaUnspecified = 'incaaUnspecified', incaaAtp = 'incaaAtp', incaaSam13 = 'incaaSam13', incaaSam16 = 'incaaSam16', incaaSam18 = 'incaaSam18', incaaC = 'incaaC', incaaUnrated = 'incaaUnrated' }

	export enum ContentRatingKfcbRating { kfcbUnspecified = 'kfcbUnspecified', kfcbG = 'kfcbG', kfcbPg = 'kfcbPg', kfcb16plus = 'kfcb16plus', kfcbR = 'kfcbR', kfcbUnrated = 'kfcbUnrated' }

	export enum ContentRatingKijkwijzerRating { kijkwijzerUnspecified = 'kijkwijzerUnspecified', kijkwijzerAl = 'kijkwijzerAl', kijkwijzer6 = 'kijkwijzer6', kijkwijzer9 = 'kijkwijzer9', kijkwijzer12 = 'kijkwijzer12', kijkwijzer16 = 'kijkwijzer16', kijkwijzer18 = 'kijkwijzer18', kijkwijzerUnrated = 'kijkwijzerUnrated' }

	export enum ContentRatingKmrbRating { kmrbUnspecified = 'kmrbUnspecified', kmrbAll = 'kmrbAll', kmrb12plus = 'kmrb12plus', kmrb15plus = 'kmrb15plus', kmrbTeenr = 'kmrbTeenr', kmrbR = 'kmrbR', kmrbUnrated = 'kmrbUnrated' }

	export enum ContentRatingLsfRating { lsfUnspecified = 'lsfUnspecified', lsfSu = 'lsfSu', lsfA = 'lsfA', lsfBo = 'lsfBo', lsf13 = 'lsf13', lsfR = 'lsfR', lsf17 = 'lsf17', lsfD = 'lsfD', lsf21 = 'lsf21', lsfUnrated = 'lsfUnrated' }

	export enum ContentRatingMccaaRating { mccaaUnspecified = 'mccaaUnspecified', mccaaU = 'mccaaU', mccaaPg = 'mccaaPg', mccaa12a = 'mccaa12a', mccaa12 = 'mccaa12', mccaa14 = 'mccaa14', mccaa15 = 'mccaa15', mccaa16 = 'mccaa16', mccaa18 = 'mccaa18', mccaaUnrated = 'mccaaUnrated' }

	export enum ContentRatingMccypRating { mccypUnspecified = 'mccypUnspecified', mccypA = 'mccypA', mccyp7 = 'mccyp7', mccyp11 = 'mccyp11', mccyp15 = 'mccyp15', mccypUnrated = 'mccypUnrated' }

	export enum ContentRatingMcstRating { mcstUnspecified = 'mcstUnspecified', mcstP = 'mcstP', mcst0 = 'mcst0', mcstC13 = 'mcstC13', mcstC16 = 'mcstC16', mcst16plus = 'mcst16plus', mcstC18 = 'mcstC18', mcstGPg = 'mcstGPg', mcstUnrated = 'mcstUnrated' }

	export enum ContentRatingMdaRating { mdaUnspecified = 'mdaUnspecified', mdaG = 'mdaG', mdaPg = 'mdaPg', mdaPg13 = 'mdaPg13', mdaNc16 = 'mdaNc16', mdaM18 = 'mdaM18', mdaR21 = 'mdaR21', mdaUnrated = 'mdaUnrated' }

	export enum ContentRatingMedietilsynetRating { medietilsynetUnspecified = 'medietilsynetUnspecified', medietilsynetA = 'medietilsynetA', medietilsynet6 = 'medietilsynet6', medietilsynet7 = 'medietilsynet7', medietilsynet9 = 'medietilsynet9', medietilsynet11 = 'medietilsynet11', medietilsynet12 = 'medietilsynet12', medietilsynet15 = 'medietilsynet15', medietilsynet18 = 'medietilsynet18', medietilsynetUnrated = 'medietilsynetUnrated' }

	export enum ContentRatingMekuRating { mekuUnspecified = 'mekuUnspecified', mekuS = 'mekuS', meku7 = 'meku7', meku12 = 'meku12', meku16 = 'meku16', meku18 = 'meku18', mekuUnrated = 'mekuUnrated' }

	export enum ContentRatingMenaMpaaRating { menaMpaaUnspecified = 'menaMpaaUnspecified', menaMpaaG = 'menaMpaaG', menaMpaaPg = 'menaMpaaPg', menaMpaaPg13 = 'menaMpaaPg13', menaMpaaR = 'menaMpaaR', menaMpaaUnrated = 'menaMpaaUnrated' }

	export enum ContentRatingMibacRating { mibacUnspecified = 'mibacUnspecified', mibacT = 'mibacT', mibacVap = 'mibacVap', mibacVm6 = 'mibacVm6', mibacVm12 = 'mibacVm12', mibacVm14 = 'mibacVm14', mibacVm16 = 'mibacVm16', mibacVm18 = 'mibacVm18', mibacUnrated = 'mibacUnrated' }

	export enum ContentRatingMocRating { mocUnspecified = 'mocUnspecified', mocE = 'mocE', mocT = 'mocT', moc7 = 'moc7', moc12 = 'moc12', moc15 = 'moc15', moc18 = 'moc18', mocX = 'mocX', mocBanned = 'mocBanned', mocUnrated = 'mocUnrated' }

	export enum ContentRatingMoctwRating { moctwUnspecified = 'moctwUnspecified', moctwG = 'moctwG', moctwP = 'moctwP', moctwPg = 'moctwPg', moctwR = 'moctwR', moctwUnrated = 'moctwUnrated', moctwR12 = 'moctwR12', moctwR15 = 'moctwR15' }

	export enum ContentRatingMpaaRating { mpaaUnspecified = 'mpaaUnspecified', mpaaG = 'mpaaG', mpaaPg = 'mpaaPg', mpaaPg13 = 'mpaaPg13', mpaaR = 'mpaaR', mpaaNc17 = 'mpaaNc17', mpaaX = 'mpaaX', mpaaUnrated = 'mpaaUnrated' }

	export enum ContentRatingMpaatRating { mpaatUnspecified = 'mpaatUnspecified', mpaatGb = 'mpaatGb', mpaatRb = 'mpaatRb' }

	export enum ContentRatingMtrcbRating { mtrcbUnspecified = 'mtrcbUnspecified', mtrcbG = 'mtrcbG', mtrcbPg = 'mtrcbPg', mtrcbR13 = 'mtrcbR13', mtrcbR16 = 'mtrcbR16', mtrcbR18 = 'mtrcbR18', mtrcbX = 'mtrcbX', mtrcbUnrated = 'mtrcbUnrated' }

	export enum ContentRatingNbcRating { nbcUnspecified = 'nbcUnspecified', nbcG = 'nbcG', nbcPg = 'nbcPg', nbc12plus = 'nbc12plus', nbc15plus = 'nbc15plus', nbc18plus = 'nbc18plus', nbc18plusr = 'nbc18plusr', nbcPu = 'nbcPu', nbcUnrated = 'nbcUnrated' }

	export enum ContentRatingNbcplRating { nbcplUnspecified = 'nbcplUnspecified', nbcplI = 'nbcplI', nbcplIi = 'nbcplIi', nbcplIii = 'nbcplIii', nbcplIv = 'nbcplIv', nbcpl18plus = 'nbcpl18plus', nbcplUnrated = 'nbcplUnrated' }

	export enum ContentRatingNfrcRating { nfrcUnspecified = 'nfrcUnspecified', nfrcA = 'nfrcA', nfrcB = 'nfrcB', nfrcC = 'nfrcC', nfrcD = 'nfrcD', nfrcX = 'nfrcX', nfrcUnrated = 'nfrcUnrated' }

	export enum ContentRatingNfvcbRating { nfvcbUnspecified = 'nfvcbUnspecified', nfvcbG = 'nfvcbG', nfvcbPg = 'nfvcbPg', nfvcb12 = 'nfvcb12', nfvcb12a = 'nfvcb12a', nfvcb15 = 'nfvcb15', nfvcb18 = 'nfvcb18', nfvcbRe = 'nfvcbRe', nfvcbUnrated = 'nfvcbUnrated' }

	export enum ContentRatingNkclvRating { nkclvUnspecified = 'nkclvUnspecified', nkclvU = 'nkclvU', nkclv7plus = 'nkclv7plus', nkclv12plus = 'nkclv12plus', nkclv16plus = 'nkclv16plus', nkclv18plus = 'nkclv18plus', nkclvUnrated = 'nkclvUnrated' }

	export enum ContentRatingNmcRating { nmcUnspecified = 'nmcUnspecified', nmcG = 'nmcG', nmcPg = 'nmcPg', nmcPg13 = 'nmcPg13', nmcPg15 = 'nmcPg15', nmc15plus = 'nmc15plus', nmc18plus = 'nmc18plus', nmc18tc = 'nmc18tc', nmcUnrated = 'nmcUnrated' }

	export enum ContentRatingOflcRating { oflcUnspecified = 'oflcUnspecified', oflcG = 'oflcG', oflcPg = 'oflcPg', oflcM = 'oflcM', oflcR13 = 'oflcR13', oflcR15 = 'oflcR15', oflcR16 = 'oflcR16', oflcR18 = 'oflcR18', oflcUnrated = 'oflcUnrated', oflcRp13 = 'oflcRp13', oflcRp16 = 'oflcRp16', oflcRp18 = 'oflcRp18' }

	export enum ContentRatingPefilmRating { pefilmUnspecified = 'pefilmUnspecified', pefilmPt = 'pefilmPt', pefilmPg = 'pefilmPg', pefilm14 = 'pefilm14', pefilm18 = 'pefilm18', pefilmUnrated = 'pefilmUnrated' }

	export enum ContentRatingRcnofRating { rcnofUnspecified = 'rcnofUnspecified', rcnofI = 'rcnofI', rcnofIi = 'rcnofIi', rcnofIii = 'rcnofIii', rcnofIv = 'rcnofIv', rcnofV = 'rcnofV', rcnofVi = 'rcnofVi', rcnofUnrated = 'rcnofUnrated' }

	export enum ContentRatingResorteviolenciaRating { resorteviolenciaUnspecified = 'resorteviolenciaUnspecified', resorteviolenciaA = 'resorteviolenciaA', resorteviolenciaB = 'resorteviolenciaB', resorteviolenciaC = 'resorteviolenciaC', resorteviolenciaD = 'resorteviolenciaD', resorteviolenciaE = 'resorteviolenciaE', resorteviolenciaUnrated = 'resorteviolenciaUnrated' }

	export enum ContentRatingRtcRating { rtcUnspecified = 'rtcUnspecified', rtcAa = 'rtcAa', rtcA = 'rtcA', rtcB = 'rtcB', rtcB15 = 'rtcB15', rtcC = 'rtcC', rtcD = 'rtcD', rtcUnrated = 'rtcUnrated' }

	export enum ContentRatingRteRating { rteUnspecified = 'rteUnspecified', rteGa = 'rteGa', rteCh = 'rteCh', rtePs = 'rtePs', rteMa = 'rteMa', rteUnrated = 'rteUnrated' }

	export enum ContentRatingRussiaRating { russiaUnspecified = 'russiaUnspecified', russia0 = 'russia0', russia6 = 'russia6', russia12 = 'russia12', russia16 = 'russia16', russia18 = 'russia18', russiaUnrated = 'russiaUnrated' }

	export enum ContentRatingSkfilmRating { skfilmUnspecified = 'skfilmUnspecified', skfilmG = 'skfilmG', skfilmP2 = 'skfilmP2', skfilmP5 = 'skfilmP5', skfilmP8 = 'skfilmP8', skfilmUnrated = 'skfilmUnrated' }

	export enum ContentRatingSmaisRating { smaisUnspecified = 'smaisUnspecified', smaisL = 'smaisL', smais7 = 'smais7', smais12 = 'smais12', smais14 = 'smais14', smais16 = 'smais16', smais18 = 'smais18', smaisUnrated = 'smaisUnrated' }

	export enum ContentRatingSmsaRating { smsaUnspecified = 'smsaUnspecified', smsaA = 'smsaA', smsa7 = 'smsa7', smsa11 = 'smsa11', smsa15 = 'smsa15', smsaUnrated = 'smsaUnrated' }

	export enum ContentRatingTvpgRating { tvpgUnspecified = 'tvpgUnspecified', tvpgY = 'tvpgY', tvpgY7 = 'tvpgY7', tvpgY7Fv = 'tvpgY7Fv', tvpgG = 'tvpgG', tvpgPg = 'tvpgPg', pg14 = 'pg14', tvpgMa = 'tvpgMa', tvpgUnrated = 'tvpgUnrated' }

	export enum ContentRatingYtRating { ytUnspecified = 'ytUnspecified', ytAgeRestricted = 'ytAgeRestricted' }


	/** Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS. */
	export interface Cuepoint {
		cueType?: CuepointCueType | null;

		/**
		 * The duration of this cuepoint.
		 * Type: uint, 0 to 4,294,967,295
		 */
		durationSecs?: number | null;
		etag?: string | null;

		/** The identifier for cuepoint resource. */
		id?: string | null;

		/** The time when the cuepoint should be inserted by offset to the broadcast actual start time. */
		insertionOffsetTimeMs?: string | null;

		/** The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time. */
		walltimeMs?: string | null;
	}

	/** Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS. */
	export interface CuepointFormProperties {
		cueType: FormControl<CuepointCueType | null | undefined>,

		/**
		 * The duration of this cuepoint.
		 * Type: uint, 0 to 4,294,967,295
		 */
		durationSecs: FormControl<number | null | undefined>,
		etag: FormControl<string | null | undefined>,

		/** The identifier for cuepoint resource. */
		id: FormControl<string | null | undefined>,

		/** The time when the cuepoint should be inserted by offset to the broadcast actual start time. */
		insertionOffsetTimeMs: FormControl<string | null | undefined>,

		/** The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time. */
		walltimeMs: FormControl<string | null | undefined>,
	}
	export function CreateCuepointFormGroup() {
		return new FormGroup<CuepointFormProperties>({
			cueType: new FormControl<CuepointCueType | null | undefined>(undefined),
			durationSecs: new FormControl<number | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertionOffsetTimeMs: new FormControl<string | null | undefined>(undefined),
			walltimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CuepointCueType { cueTypeUnspecified = 'cueTypeUnspecified', cueTypeAd = 'cueTypeAd' }


	/** Schedule to insert cuepoints into a broadcast by ads automator. */
	export interface CuepointSchedule {

		/** This field is semantically required. If it is set false or not set, other fields in this message will be ignored. */
		enabled?: boolean | null;

		/** If set, automatic cuepoint insertion is paused until this timestamp ("No Ad Zone"). The value is specified in ISO 8601 format. */
		pauseAdsUntil?: string | null;

		/**
		 * Interval frequency in seconds that api uses to insert cuepoints automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatIntervalSecs?: number | null;

		/** The strategy to use when scheduling cuepoints. */
		scheduleStrategy?: CuepointScheduleScheduleStrategy | null;
	}

	/** Schedule to insert cuepoints into a broadcast by ads automator. */
	export interface CuepointScheduleFormProperties {

		/** This field is semantically required. If it is set false or not set, other fields in this message will be ignored. */
		enabled: FormControl<boolean | null | undefined>,

		/** If set, automatic cuepoint insertion is paused until this timestamp ("No Ad Zone"). The value is specified in ISO 8601 format. */
		pauseAdsUntil: FormControl<string | null | undefined>,

		/**
		 * Interval frequency in seconds that api uses to insert cuepoints automatically.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		repeatIntervalSecs: FormControl<number | null | undefined>,

		/** The strategy to use when scheduling cuepoints. */
		scheduleStrategy: FormControl<CuepointScheduleScheduleStrategy | null | undefined>,
	}
	export function CreateCuepointScheduleFormGroup() {
		return new FormGroup<CuepointScheduleFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			pauseAdsUntil: new FormControl<string | null | undefined>(undefined),
			repeatIntervalSecs: new FormControl<number | null | undefined>(undefined),
			scheduleStrategy: new FormControl<CuepointScheduleScheduleStrategy | null | undefined>(undefined),
		});

	}

	export enum CuepointScheduleScheduleStrategy { scheduleStrategyUnspecified = 'scheduleStrategyUnspecified', concurrent = 'concurrent', nonConcurrent = 'nonConcurrent' }


	/** Geographical coordinates of a point, in WGS84. */
	export interface GeoPoint {

		/**
		 * Altitude above the reference ellipsoid, in meters.
		 * Type: double
		 */
		altitude?: number | null;

		/**
		 * Latitude in degrees.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * Longitude in degrees.
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** Geographical coordinates of a point, in WGS84. */
	export interface GeoPointFormProperties {

		/**
		 * Altitude above the reference ellipsoid, in meters.
		 * Type: double
		 */
		altitude: FormControl<number | null | undefined>,

		/**
		 * Latitude in degrees.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude in degrees.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeoPointFormGroup() {
		return new FormGroup<GeoPointFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An *i18nLanguage* resource identifies a UI language currently supported by YouTube. */
	export interface I18nLanguage {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the i18n language. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage". */
		kind?: string | null;

		/** Basic details about an i18n language, such as language code and human-readable name. */
		snippet?: I18nLanguageSnippet;
	}

	/** An *i18nLanguage* resource identifies a UI language currently supported by YouTube. */
	export interface I18nLanguageFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the i18n language. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateI18nLanguageFormGroup() {
		return new FormGroup<I18nLanguageFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about an i18n language, such as language code and human-readable name. */
	export interface I18nLanguageSnippet {

		/** A short BCP-47 code that uniquely identifies a language. */
		hl?: string | null;

		/** The human-readable name of the language in the language itself. */
		name?: string | null;
	}

	/** Basic details about an i18n language, such as language code and human-readable name. */
	export interface I18nLanguageSnippetFormProperties {

		/** A short BCP-47 code that uniquely identifies a language. */
		hl: FormControl<string | null | undefined>,

		/** The human-readable name of the language in the language itself. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateI18nLanguageSnippetFormGroup() {
		return new FormGroup<I18nLanguageSnippetFormProperties>({
			hl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface I18nLanguageListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource. */
		items?: Array<I18nLanguage>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface I18nLanguageListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateI18nLanguageListResponseFormGroup() {
		return new FormGroup<I18nLanguageListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *i18nRegion* resource identifies a region where YouTube is available. */
	export interface I18nRegion {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the i18n region. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion". */
		kind?: string | null;

		/** Basic details about an i18n region, such as region code and human-readable name. */
		snippet?: I18nRegionSnippet;
	}

	/** A *i18nRegion* resource identifies a region where YouTube is available. */
	export interface I18nRegionFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the i18n region. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateI18nRegionFormGroup() {
		return new FormGroup<I18nRegionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about an i18n region, such as region code and human-readable name. */
	export interface I18nRegionSnippet {

		/** The region code as a 2-letter ISO country code. */
		gl?: string | null;

		/** The human-readable name of the region. */
		name?: string | null;
	}

	/** Basic details about an i18n region, such as region code and human-readable name. */
	export interface I18nRegionSnippetFormProperties {

		/** The region code as a 2-letter ISO country code. */
		gl: FormControl<string | null | undefined>,

		/** The human-readable name of the region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateI18nRegionSnippetFormGroup() {
		return new FormGroup<I18nRegionSnippetFormProperties>({
			gl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface I18nRegionListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource. */
		items?: Array<I18nRegion>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface I18nRegionListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateI18nRegionListResponseFormGroup() {
		return new FormGroup<I18nRegionListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange Describes an invideo branding. */
	export interface InvideoBranding {

		/** The bytes the uploaded image. Only used in api to youtube communication. */
		imageBytes?: string | null;

		/** The url of the uploaded image. Only used in apiary to api communication. */
		imageUrl?: string | null;

		/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
		position?: InvideoPosition;

		/** The channel to which this branding links. If not present it defaults to the current channel. */
		targetChannelId?: string | null;

		/** Describes a temporal position of a visual widget inside a video. */
		timing?: InvideoTiming;
	}

	/** LINT.IfChange Describes an invideo branding. */
	export interface InvideoBrandingFormProperties {

		/** The bytes the uploaded image. Only used in api to youtube communication. */
		imageBytes: FormControl<string | null | undefined>,

		/** The url of the uploaded image. Only used in apiary to api communication. */
		imageUrl: FormControl<string | null | undefined>,

		/** The channel to which this branding links. If not present it defaults to the current channel. */
		targetChannelId: FormControl<string | null | undefined>,
	}
	export function CreateInvideoBrandingFormGroup() {
		return new FormGroup<InvideoBrandingFormProperties>({
			imageBytes: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			targetChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
	export interface InvideoPosition {

		/** Describes in which corner of the video the visual widget will appear. */
		cornerPosition?: InvideoPositionCornerPosition | null;

		/** Defines the position type. */
		type?: InvideoPositionType | null;
	}

	/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
	export interface InvideoPositionFormProperties {

		/** Describes in which corner of the video the visual widget will appear. */
		cornerPosition: FormControl<InvideoPositionCornerPosition | null | undefined>,

		/** Defines the position type. */
		type: FormControl<InvideoPositionType | null | undefined>,
	}
	export function CreateInvideoPositionFormGroup() {
		return new FormGroup<InvideoPositionFormProperties>({
			cornerPosition: new FormControl<InvideoPositionCornerPosition | null | undefined>(undefined),
			type: new FormControl<InvideoPositionType | null | undefined>(undefined),
		});

	}

	export enum InvideoPositionCornerPosition { topLeft = 'topLeft', topRight = 'topRight', bottomLeft = 'bottomLeft', bottomRight = 'bottomRight' }

	export enum InvideoPositionType { corner = 'corner' }


	/** Describes a temporal position of a visual widget inside a video. */
	export interface InvideoTiming {

		/** Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default. */
		durationMs?: string | null;

		/** Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds. */
		offsetMs?: string | null;

		/** Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video. */
		type?: InvideoTimingType | null;
	}

	/** Describes a temporal position of a visual widget inside a video. */
	export interface InvideoTimingFormProperties {

		/** Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default. */
		durationMs: FormControl<string | null | undefined>,

		/** Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds. */
		offsetMs: FormControl<string | null | undefined>,

		/** Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video. */
		type: FormControl<InvideoTimingType | null | undefined>,
	}
	export function CreateInvideoTimingFormGroup() {
		return new FormGroup<InvideoTimingFormProperties>({
			durationMs: new FormControl<string | null | undefined>(undefined),
			offsetMs: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<InvideoTimingType | null | undefined>(undefined),
		});

	}

	export enum InvideoTimingType { offsetFromStart = 'offsetFromStart', offsetFromEnd = 'offsetFromEnd' }

	export interface LevelDetails {

		/** The name that should be used when referring to this level. */
		displayName?: string | null;
	}
	export interface LevelDetailsFormProperties {

		/** The name that should be used when referring to this level. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateLevelDetailsFormGroup() {
		return new FormGroup<LevelDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube. */
	export interface LiveBroadcast {

		/** Detailed settings of a broadcast. */
		contentDetails?: LiveBroadcastContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the broadcast. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast". */
		kind?: string | null;

		/** Monetization settings of a broadcast. */
		monetizationDetails?: LiveBroadcastMonetizationDetails;

		/** Basic broadcast information. */
		snippet?: LiveBroadcastSnippet;

		/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
		statistics?: LiveBroadcastStatistics;

		/** Live broadcast state. */
		status?: LiveBroadcastStatus;
	}

	/** A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube. */
	export interface LiveBroadcastFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the broadcast. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastFormGroup() {
		return new FormGroup<LiveBroadcastFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed settings of a broadcast. */
	export interface LiveBroadcastContentDetails {

		/** This value uniquely identifies the live stream bound to the broadcast. */
		boundStreamId?: string | null;

		/** The date and time that the live stream referenced by boundStreamId was last updated. */
		boundStreamLastUpdateTimeMs?: Date | null;
		closedCaptionsType?: LiveBroadcastContentDetailsClosedCaptionsType | null;

		/** This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
		enableAutoStart?: boolean | null;

		/** This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
		enableAutoStop?: boolean | null;

		/** This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. */
		enableClosedCaptions?: boolean | null;

		/** This setting indicates whether YouTube should enable content encryption for the broadcast. */
		enableContentEncryption?: boolean | null;

		/** This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends. */
		enableDvr?: boolean | null;

		/** This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. */
		enableEmbed?: boolean | null;

		/** Indicates whether this broadcast has low latency enabled. */
		enableLowLatency?: boolean | null;

		/** If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted. */
		latencyPreference?: LiveBroadcastContentDetailsLatencyPreference | null;

		/** The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. */
		mesh?: string | null;

		/** Settings and Info of the monitor stream */
		monitorStream?: MonitorStreamInfo;

		/** The projection format of this broadcast. This defaults to rectangular. */
		projection?: LiveBroadcastContentDetailsProjection | null;

		/** Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback. */
		recordFromStart?: boolean | null;

		/** This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. */
		startWithSlate?: boolean | null;

		/** The 3D stereo layout of this broadcast. This defaults to mono. */
		stereoLayout?: LiveBroadcastContentDetailsStereoLayout | null;
	}

	/** Detailed settings of a broadcast. */
	export interface LiveBroadcastContentDetailsFormProperties {

		/** This value uniquely identifies the live stream bound to the broadcast. */
		boundStreamId: FormControl<string | null | undefined>,

		/** The date and time that the live stream referenced by boundStreamId was last updated. */
		boundStreamLastUpdateTimeMs: FormControl<Date | null | undefined>,
		closedCaptionsType: FormControl<LiveBroadcastContentDetailsClosedCaptionsType | null | undefined>,

		/** This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
		enableAutoStart: FormControl<boolean | null | undefined>,

		/** This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events. */
		enableAutoStop: FormControl<boolean | null | undefined>,

		/** This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. */
		enableClosedCaptions: FormControl<boolean | null | undefined>,

		/** This setting indicates whether YouTube should enable content encryption for the broadcast. */
		enableContentEncryption: FormControl<boolean | null | undefined>,

		/** This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends. */
		enableDvr: FormControl<boolean | null | undefined>,

		/** This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. */
		enableEmbed: FormControl<boolean | null | undefined>,

		/** Indicates whether this broadcast has low latency enabled. */
		enableLowLatency: FormControl<boolean | null | undefined>,

		/** If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted. */
		latencyPreference: FormControl<LiveBroadcastContentDetailsLatencyPreference | null | undefined>,

		/** The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. */
		mesh: FormControl<string | null | undefined>,

		/** The projection format of this broadcast. This defaults to rectangular. */
		projection: FormControl<LiveBroadcastContentDetailsProjection | null | undefined>,

		/** Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback. */
		recordFromStart: FormControl<boolean | null | undefined>,

		/** This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. */
		startWithSlate: FormControl<boolean | null | undefined>,

		/** The 3D stereo layout of this broadcast. This defaults to mono. */
		stereoLayout: FormControl<LiveBroadcastContentDetailsStereoLayout | null | undefined>,
	}
	export function CreateLiveBroadcastContentDetailsFormGroup() {
		return new FormGroup<LiveBroadcastContentDetailsFormProperties>({
			boundStreamId: new FormControl<string | null | undefined>(undefined),
			boundStreamLastUpdateTimeMs: new FormControl<Date | null | undefined>(undefined),
			closedCaptionsType: new FormControl<LiveBroadcastContentDetailsClosedCaptionsType | null | undefined>(undefined),
			enableAutoStart: new FormControl<boolean | null | undefined>(undefined),
			enableAutoStop: new FormControl<boolean | null | undefined>(undefined),
			enableClosedCaptions: new FormControl<boolean | null | undefined>(undefined),
			enableContentEncryption: new FormControl<boolean | null | undefined>(undefined),
			enableDvr: new FormControl<boolean | null | undefined>(undefined),
			enableEmbed: new FormControl<boolean | null | undefined>(undefined),
			enableLowLatency: new FormControl<boolean | null | undefined>(undefined),
			latencyPreference: new FormControl<LiveBroadcastContentDetailsLatencyPreference | null | undefined>(undefined),
			mesh: new FormControl<string | null | undefined>(undefined),
			projection: new FormControl<LiveBroadcastContentDetailsProjection | null | undefined>(undefined),
			recordFromStart: new FormControl<boolean | null | undefined>(undefined),
			startWithSlate: new FormControl<boolean | null | undefined>(undefined),
			stereoLayout: new FormControl<LiveBroadcastContentDetailsStereoLayout | null | undefined>(undefined),
		});

	}

	export enum LiveBroadcastContentDetailsClosedCaptionsType { closedCaptionsTypeUnspecified = 'closedCaptionsTypeUnspecified', closedCaptionsDisabled = 'closedCaptionsDisabled', closedCaptionsHttpPost = 'closedCaptionsHttpPost', closedCaptionsEmbedded = 'closedCaptionsEmbedded' }

	export enum LiveBroadcastContentDetailsLatencyPreference { latencyPreferenceUnspecified = 'latencyPreferenceUnspecified', normal = 'normal', low = 'low', ultraLow = 'ultraLow' }


	/** Settings and Info of the monitor stream */
	export interface MonitorStreamInfo {

		/**
		 * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
		 * Type: uint, 0 to 4,294,967,295
		 */
		broadcastStreamDelayMs?: number | null;

		/** HTML code that embeds a player that plays the monitor stream. */
		embedHtml?: string | null;

		/** This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state. */
		enableMonitorStream?: boolean | null;
	}

	/** Settings and Info of the monitor stream */
	export interface MonitorStreamInfoFormProperties {

		/**
		 * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
		 * Type: uint, 0 to 4,294,967,295
		 */
		broadcastStreamDelayMs: FormControl<number | null | undefined>,

		/** HTML code that embeds a player that plays the monitor stream. */
		embedHtml: FormControl<string | null | undefined>,

		/** This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state. */
		enableMonitorStream: FormControl<boolean | null | undefined>,
	}
	export function CreateMonitorStreamInfoFormGroup() {
		return new FormGroup<MonitorStreamInfoFormProperties>({
			broadcastStreamDelayMs: new FormControl<number | null | undefined>(undefined),
			embedHtml: new FormControl<string | null | undefined>(undefined),
			enableMonitorStream: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LiveBroadcastContentDetailsProjection { projectionUnspecified = 'projectionUnspecified', rectangular = 'rectangular', _360 = '360', mesh = 'mesh' }

	export enum LiveBroadcastContentDetailsStereoLayout { stereoLayoutUnspecified = 'stereoLayoutUnspecified', mono = 'mono', leftRight = 'leftRight', topBottom = 'topBottom' }


	/** Monetization settings of a broadcast. */
	export interface LiveBroadcastMonetizationDetails {

		/** Schedule to insert cuepoints into a broadcast by ads automator. */
		cuepointSchedule?: CuepointSchedule;
	}

	/** Monetization settings of a broadcast. */
	export interface LiveBroadcastMonetizationDetailsFormProperties {
	}
	export function CreateLiveBroadcastMonetizationDetailsFormGroup() {
		return new FormGroup<LiveBroadcastMonetizationDetailsFormProperties>({
		});

	}


	/** Basic broadcast information. */
	export interface LiveBroadcastSnippet {

		/** The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. */
		actualEndTime?: Date | null;

		/** The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. */
		actualStartTime?: Date | null;

		/** The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. */
		channelId?: string | null;

		/** The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. */
		description?: string | null;

		/** Indicates whether this broadcast is the default broadcast. Internal only. */
		isDefaultBroadcast?: boolean | null;

		/** The id of the live chat for this broadcast. */
		liveChatId?: string | null;

		/** The date and time that the broadcast was added to YouTube's live broadcast schedule. */
		publishedAt?: Date | null;

		/** The date and time that the broadcast is scheduled to end. */
		scheduledEndTime?: Date | null;

		/** The date and time that the broadcast is scheduled to start. */
		scheduledStartTime?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. */
		title?: string | null;
	}

	/** Basic broadcast information. */
	export interface LiveBroadcastSnippetFormProperties {

		/** The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. */
		actualEndTime: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. */
		actualStartTime: FormControl<Date | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. */
		channelId: FormControl<string | null | undefined>,

		/** The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. */
		description: FormControl<string | null | undefined>,

		/** Indicates whether this broadcast is the default broadcast. Internal only. */
		isDefaultBroadcast: FormControl<boolean | null | undefined>,

		/** The id of the live chat for this broadcast. */
		liveChatId: FormControl<string | null | undefined>,

		/** The date and time that the broadcast was added to YouTube's live broadcast schedule. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast is scheduled to end. */
		scheduledEndTime: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast is scheduled to start. */
		scheduledStartTime: FormControl<Date | null | undefined>,

		/** The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastSnippetFormGroup() {
		return new FormGroup<LiveBroadcastSnippetFormProperties>({
			actualEndTime: new FormControl<Date | null | undefined>(undefined),
			actualStartTime: new FormControl<Date | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isDefaultBroadcast: new FormControl<boolean | null | undefined>(undefined),
			liveChatId: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			scheduledEndTime: new FormControl<Date | null | undefined>(undefined),
			scheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
	export interface LiveBroadcastStatistics {

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers?: string | null;
	}

	/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
	export interface LiveBroadcastStatisticsFormProperties {

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastStatisticsFormGroup() {
		return new FormGroup<LiveBroadcastStatisticsFormProperties>({
			concurrentViewers: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Live broadcast state. */
	export interface LiveBroadcastStatus {

		/** The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method. */
		lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatus | null;

		/** Priority of the live broadcast event (internal state). */
		liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriority | null;

		/** Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only. */
		madeForKids?: boolean | null;

		/** The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. */
		privacyStatus?: ChannelStatusPrivacyStatus | null;

		/** The broadcast's recording status. */
		recordingStatus?: LiveBroadcastStatusRecordingStatus | null;

		/** This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work. */
		selfDeclaredMadeForKids?: boolean | null;
	}

	/** Live broadcast state. */
	export interface LiveBroadcastStatusFormProperties {

		/** The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method. */
		lifeCycleStatus: FormControl<LiveBroadcastStatusLifeCycleStatus | null | undefined>,

		/** Priority of the live broadcast event (internal state). */
		liveBroadcastPriority: FormControl<LiveBroadcastStatusLiveBroadcastPriority | null | undefined>,

		/** Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only. */
		madeForKids: FormControl<boolean | null | undefined>,

		/** The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. */
		privacyStatus: FormControl<ChannelStatusPrivacyStatus | null | undefined>,

		/** The broadcast's recording status. */
		recordingStatus: FormControl<LiveBroadcastStatusRecordingStatus | null | undefined>,

		/** This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work. */
		selfDeclaredMadeForKids: FormControl<boolean | null | undefined>,
	}
	export function CreateLiveBroadcastStatusFormGroup() {
		return new FormGroup<LiveBroadcastStatusFormProperties>({
			lifeCycleStatus: new FormControl<LiveBroadcastStatusLifeCycleStatus | null | undefined>(undefined),
			liveBroadcastPriority: new FormControl<LiveBroadcastStatusLiveBroadcastPriority | null | undefined>(undefined),
			madeForKids: new FormControl<boolean | null | undefined>(undefined),
			privacyStatus: new FormControl<ChannelStatusPrivacyStatus | null | undefined>(undefined),
			recordingStatus: new FormControl<LiveBroadcastStatusRecordingStatus | null | undefined>(undefined),
			selfDeclaredMadeForKids: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LiveBroadcastStatusLifeCycleStatus { lifeCycleStatusUnspecified = 'lifeCycleStatusUnspecified', created = 'created', ready = 'ready', testing = 'testing', live = 'live', complete = 'complete', revoked = 'revoked', testStarting = 'testStarting', liveStarting = 'liveStarting' }

	export enum LiveBroadcastStatusLiveBroadcastPriority { liveBroadcastPriorityUnspecified = 'liveBroadcastPriorityUnspecified', low = 'low', normal = 'normal', high = 'high' }

	export enum LiveBroadcastStatusRecordingStatus { liveBroadcastRecordingStatusUnspecified = 'liveBroadcastRecordingStatusUnspecified', notRecording = 'notRecording', recording = 'recording', recorded = 'recorded' }

	export interface LiveBroadcastListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of broadcasts that match the request criteria. */
		items?: Array<LiveBroadcast>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface LiveBroadcastListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastListResponseFormGroup() {
		return new FormGroup<LiveBroadcastListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `__liveChatBan__` resource represents a ban for a YouTube live chat. */
	export interface LiveChatBan {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the ban. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`. */
		kind?: string | null;
		snippet?: LiveChatBanSnippet;
	}

	/** A `__liveChatBan__` resource represents a ban for a YouTube live chat. */
	export interface LiveChatBanFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the ban. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatBanFormGroup() {
		return new FormGroup<LiveChatBanFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatBanSnippet {

		/** The duration of a ban, only filled if the ban has type TEMPORARY. */
		banDurationSeconds?: string | null;
		bannedUserDetails?: ChannelProfileDetails;

		/** The chat this ban is pertinent to. */
		liveChatId?: string | null;

		/** The type of ban. */
		type?: LiveChatBanSnippetType | null;
	}
	export interface LiveChatBanSnippetFormProperties {

		/** The duration of a ban, only filled if the ban has type TEMPORARY. */
		banDurationSeconds: FormControl<string | null | undefined>,

		/** The chat this ban is pertinent to. */
		liveChatId: FormControl<string | null | undefined>,

		/** The type of ban. */
		type: FormControl<LiveChatBanSnippetType | null | undefined>,
	}
	export function CreateLiveChatBanSnippetFormGroup() {
		return new FormGroup<LiveChatBanSnippetFormProperties>({
			banDurationSeconds: new FormControl<string | null | undefined>(undefined),
			liveChatId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LiveChatBanSnippetType | null | undefined>(undefined),
		});

	}

	export enum LiveChatBanSnippetType { liveChatBanTypeUnspecified = 'liveChatBanTypeUnspecified', permanent = 'permanent', temporary = 'temporary' }

	export interface LiveChatFanFundingEventDetails {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString?: string | null;

		/** The amount of the fund. */
		amountMicros?: string | null;

		/** The currency in which the fund was made. */
		currency?: string | null;

		/** The comment added by the user to this fan funding event. */
		userComment?: string | null;
	}
	export interface LiveChatFanFundingEventDetailsFormProperties {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString: FormControl<string | null | undefined>,

		/** The amount of the fund. */
		amountMicros: FormControl<string | null | undefined>,

		/** The currency in which the fund was made. */
		currency: FormControl<string | null | undefined>,

		/** The comment added by the user to this fan funding event. */
		userComment: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatFanFundingEventDetailsFormGroup() {
		return new FormGroup<LiveChatFanFundingEventDetailsFormProperties>({
			amountDisplayString: new FormControl<string | null | undefined>(undefined),
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			userComment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatGiftMembershipReceivedDetails {

		/** The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'. */
		associatedMembershipGiftingMessageId?: string | null;

		/** The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message. */
		gifterChannelId?: string | null;

		/** The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName?: string | null;
	}
	export interface LiveChatGiftMembershipReceivedDetailsFormProperties {

		/** The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'. */
		associatedMembershipGiftingMessageId: FormControl<string | null | undefined>,

		/** The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message. */
		gifterChannelId: FormControl<string | null | undefined>,

		/** The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatGiftMembershipReceivedDetailsFormGroup() {
		return new FormGroup<LiveChatGiftMembershipReceivedDetailsFormProperties>({
			associatedMembershipGiftingMessageId: new FormControl<string | null | undefined>(undefined),
			gifterChannelId: new FormControl<string | null | undefined>(undefined),
			memberLevelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatMemberMilestoneChatDetails {

		/** The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName?: string | null;

		/**
		 * The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.
		 * Type: uint, 0 to 4,294,967,295
		 */
		memberMonth?: number | null;

		/** The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member. */
		userComment?: string | null;
	}
	export interface LiveChatMemberMilestoneChatDetailsFormProperties {

		/** The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName: FormControl<string | null | undefined>,

		/**
		 * The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.
		 * Type: uint, 0 to 4,294,967,295
		 */
		memberMonth: FormControl<number | null | undefined>,

		/** The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member. */
		userComment: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMemberMilestoneChatDetailsFormGroup() {
		return new FormGroup<LiveChatMemberMilestoneChatDetailsFormProperties>({
			memberLevelName: new FormControl<string | null | undefined>(undefined),
			memberMonth: new FormControl<number | null | undefined>(undefined),
			userComment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatMembershipGiftingDetails {

		/**
		 * The number of gift memberships purchased by the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		giftMembershipsCount?: number | null;

		/** The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		giftMembershipsLevelName?: string | null;
	}
	export interface LiveChatMembershipGiftingDetailsFormProperties {

		/**
		 * The number of gift memberships purchased by the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		giftMembershipsCount: FormControl<number | null | undefined>,

		/** The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		giftMembershipsLevelName: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMembershipGiftingDetailsFormGroup() {
		return new FormGroup<LiveChatMembershipGiftingDetailsFormProperties>({
			giftMembershipsCount: new FormControl<number | null | undefined>(undefined),
			giftMembershipsLevelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *liveChatMessage* resource represents a chat message in a YouTube Live Chat. */
	export interface LiveChatMessage {
		authorDetails?: LiveChatMessageAuthorDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the message. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage". */
		kind?: string | null;

		/** Next ID: 33 */
		snippet?: LiveChatMessageSnippet;
	}

	/** A *liveChatMessage* resource represents a chat message in a YouTube Live Chat. */
	export interface LiveChatMessageFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the message. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMessageFormGroup() {
		return new FormGroup<LiveChatMessageFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatMessageAuthorDetails {

		/** The YouTube channel ID. */
		channelId?: string | null;

		/** The channel's URL. */
		channelUrl?: string | null;

		/** The channel's display name. */
		displayName?: string | null;

		/** Whether the author is a moderator of the live chat. */
		isChatModerator?: boolean | null;

		/** Whether the author is the owner of the live chat. */
		isChatOwner?: boolean | null;

		/** Whether the author is a sponsor of the live chat. */
		isChatSponsor?: boolean | null;

		/** Whether the author's identity has been verified by YouTube. */
		isVerified?: boolean | null;

		/** The channels's avatar URL. */
		profileImageUrl?: string | null;
	}
	export interface LiveChatMessageAuthorDetailsFormProperties {

		/** The YouTube channel ID. */
		channelId: FormControl<string | null | undefined>,

		/** The channel's URL. */
		channelUrl: FormControl<string | null | undefined>,

		/** The channel's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Whether the author is a moderator of the live chat. */
		isChatModerator: FormControl<boolean | null | undefined>,

		/** Whether the author is the owner of the live chat. */
		isChatOwner: FormControl<boolean | null | undefined>,

		/** Whether the author is a sponsor of the live chat. */
		isChatSponsor: FormControl<boolean | null | undefined>,

		/** Whether the author's identity has been verified by YouTube. */
		isVerified: FormControl<boolean | null | undefined>,

		/** The channels's avatar URL. */
		profileImageUrl: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMessageAuthorDetailsFormGroup() {
		return new FormGroup<LiveChatMessageAuthorDetailsFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isChatModerator: new FormControl<boolean | null | undefined>(undefined),
			isChatOwner: new FormControl<boolean | null | undefined>(undefined),
			isChatSponsor: new FormControl<boolean | null | undefined>(undefined),
			isVerified: new FormControl<boolean | null | undefined>(undefined),
			profileImageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Next ID: 33 */
	export interface LiveChatMessageSnippet {

		/** The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase */
		authorChannelId?: string | null;

		/** Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. */
		displayMessage?: string | null;
		fanFundingEventDetails?: LiveChatFanFundingEventDetails;
		giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;

		/** Whether the message has display content that should be displayed to users. */
		hasDisplayContent?: boolean | null;
		liveChatId?: string | null;
		memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
		membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
		messageDeletedDetails?: LiveChatMessageDeletedDetails;
		messageRetractedDetails?: LiveChatMessageRetractedDetails;
		newSponsorDetails?: LiveChatNewSponsorDetails;

		/** The date and time when the message was orignally published. */
		publishedAt?: Date | null;
		superChatDetails?: LiveChatSuperChatDetails;
		superStickerDetails?: LiveChatSuperStickerDetails;
		textMessageDetails?: LiveChatTextMessageDetails;

		/** The type of message, this will always be present, it determines the contents of the message as well as which fields will be present. */
		type?: LiveChatMessageSnippetType | null;
		userBannedDetails?: LiveChatUserBannedMessageDetails;
	}

	/** Next ID: 33 */
	export interface LiveChatMessageSnippetFormProperties {

		/** The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase */
		authorChannelId: FormControl<string | null | undefined>,

		/** Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. */
		displayMessage: FormControl<string | null | undefined>,

		/** Whether the message has display content that should be displayed to users. */
		hasDisplayContent: FormControl<boolean | null | undefined>,
		liveChatId: FormControl<string | null | undefined>,

		/** The date and time when the message was orignally published. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The type of message, this will always be present, it determines the contents of the message as well as which fields will be present. */
		type: FormControl<LiveChatMessageSnippetType | null | undefined>,
	}
	export function CreateLiveChatMessageSnippetFormGroup() {
		return new FormGroup<LiveChatMessageSnippetFormProperties>({
			authorChannelId: new FormControl<string | null | undefined>(undefined),
			displayMessage: new FormControl<string | null | undefined>(undefined),
			hasDisplayContent: new FormControl<boolean | null | undefined>(undefined),
			liveChatId: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<LiveChatMessageSnippetType | null | undefined>(undefined),
		});

	}

	export interface LiveChatMessageDeletedDetails {
		deletedMessageId?: string | null;
	}
	export interface LiveChatMessageDeletedDetailsFormProperties {
		deletedMessageId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMessageDeletedDetailsFormGroup() {
		return new FormGroup<LiveChatMessageDeletedDetailsFormProperties>({
			deletedMessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatMessageRetractedDetails {
		retractedMessageId?: string | null;
	}
	export interface LiveChatMessageRetractedDetailsFormProperties {
		retractedMessageId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMessageRetractedDetailsFormGroup() {
		return new FormGroup<LiveChatMessageRetractedDetailsFormProperties>({
			retractedMessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatNewSponsorDetails {

		/** If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false. */
		isUpgrade?: boolean | null;

		/** The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName?: string | null;
	}
	export interface LiveChatNewSponsorDetailsFormProperties {

		/** If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false. */
		isUpgrade: FormControl<boolean | null | undefined>,

		/** The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled. */
		memberLevelName: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatNewSponsorDetailsFormGroup() {
		return new FormGroup<LiveChatNewSponsorDetailsFormProperties>({
			isUpgrade: new FormControl<boolean | null | undefined>(undefined),
			memberLevelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatSuperChatDetails {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString?: string | null;

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros?: string | null;

		/** The currency in which the purchase was made. */
		currency?: string | null;

		/**
		 * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		tier?: number | null;

		/** The comment added by the user to this Super Chat event. */
		userComment?: string | null;
	}
	export interface LiveChatSuperChatDetailsFormProperties {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString: FormControl<string | null | undefined>,

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros: FormControl<string | null | undefined>,

		/** The currency in which the purchase was made. */
		currency: FormControl<string | null | undefined>,

		/**
		 * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		tier: FormControl<number | null | undefined>,

		/** The comment added by the user to this Super Chat event. */
		userComment: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatSuperChatDetailsFormGroup() {
		return new FormGroup<LiveChatSuperChatDetailsFormProperties>({
			amountDisplayString: new FormControl<string | null | undefined>(undefined),
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<number | null | undefined>(undefined),
			userComment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatSuperStickerDetails {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString?: string | null;

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros?: string | null;

		/** The currency in which the purchase was made. */
		currency?: string | null;
		superStickerMetadata?: SuperStickerMetadata;

		/**
		 * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		tier?: number | null;
	}
	export interface LiveChatSuperStickerDetailsFormProperties {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString: FormControl<string | null | undefined>,

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros: FormControl<string | null | undefined>,

		/** The currency in which the purchase was made. */
		currency: FormControl<string | null | undefined>,

		/**
		 * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		tier: FormControl<number | null | undefined>,
	}
	export function CreateLiveChatSuperStickerDetailsFormGroup() {
		return new FormGroup<LiveChatSuperStickerDetailsFormProperties>({
			amountDisplayString: new FormControl<string | null | undefined>(undefined),
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SuperStickerMetadata {

		/** Internationalized alt text that describes the sticker image and any animation associated with it. */
		altText?: string | null;

		/** Specifies the localization language in which the alt text is returned. */
		altTextLanguage?: string | null;

		/** Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker. */
		stickerId?: string | null;
	}
	export interface SuperStickerMetadataFormProperties {

		/** Internationalized alt text that describes the sticker image and any animation associated with it. */
		altText: FormControl<string | null | undefined>,

		/** Specifies the localization language in which the alt text is returned. */
		altTextLanguage: FormControl<string | null | undefined>,

		/** Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker. */
		stickerId: FormControl<string | null | undefined>,
	}
	export function CreateSuperStickerMetadataFormGroup() {
		return new FormGroup<SuperStickerMetadataFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			altTextLanguage: new FormControl<string | null | undefined>(undefined),
			stickerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatTextMessageDetails {

		/** The user's message. */
		messageText?: string | null;
	}
	export interface LiveChatTextMessageDetailsFormProperties {

		/** The user's message. */
		messageText: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatTextMessageDetailsFormGroup() {
		return new FormGroup<LiveChatTextMessageDetailsFormProperties>({
			messageText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LiveChatMessageSnippetType { invalidType = 'invalidType', textMessageEvent = 'textMessageEvent', tombstone = 'tombstone', fanFundingEvent = 'fanFundingEvent', chatEndedEvent = 'chatEndedEvent', sponsorOnlyModeStartedEvent = 'sponsorOnlyModeStartedEvent', sponsorOnlyModeEndedEvent = 'sponsorOnlyModeEndedEvent', newSponsorEvent = 'newSponsorEvent', memberMilestoneChatEvent = 'memberMilestoneChatEvent', membershipGiftingEvent = 'membershipGiftingEvent', giftMembershipReceivedEvent = 'giftMembershipReceivedEvent', messageDeletedEvent = 'messageDeletedEvent', messageRetractedEvent = 'messageRetractedEvent', userBannedEvent = 'userBannedEvent', superChatEvent = 'superChatEvent', superStickerEvent = 'superStickerEvent' }

	export interface LiveChatUserBannedMessageDetails {

		/** The duration of the ban. This property is only present if the banType is temporary. */
		banDurationSeconds?: string | null;

		/** The type of ban. */
		banType?: LiveChatUserBannedMessageDetailsBanType | null;
		bannedUserDetails?: ChannelProfileDetails;
	}
	export interface LiveChatUserBannedMessageDetailsFormProperties {

		/** The duration of the ban. This property is only present if the banType is temporary. */
		banDurationSeconds: FormControl<string | null | undefined>,

		/** The type of ban. */
		banType: FormControl<LiveChatUserBannedMessageDetailsBanType | null | undefined>,
	}
	export function CreateLiveChatUserBannedMessageDetailsFormGroup() {
		return new FormGroup<LiveChatUserBannedMessageDetailsFormProperties>({
			banDurationSeconds: new FormControl<string | null | undefined>(undefined),
			banType: new FormControl<LiveChatUserBannedMessageDetailsBanType | null | undefined>(undefined),
		});

	}

	export enum LiveChatUserBannedMessageDetailsBanType { permanent = 'permanent', temporary = 'temporary' }

	export interface LiveChatMessageListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;
		items?: Array<LiveChatMessage>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse". */
		kind?: string | null;
		nextPageToken?: string | null;

		/** The date and time when the underlying stream went offline. */
		offlineAt?: Date | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/**
		 * The amount of time the client should wait before polling again.
		 * Type: uint, 0 to 4,294,967,295
		 */
		pollingIntervalMillis?: number | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface LiveChatMessageListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse". */
		kind: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,

		/** The date and time when the underlying stream went offline. */
		offlineAt: FormControl<Date | null | undefined>,

		/**
		 * The amount of time the client should wait before polling again.
		 * Type: uint, 0 to 4,294,967,295
		 */
		pollingIntervalMillis: FormControl<number | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatMessageListResponseFormGroup() {
		return new FormGroup<LiveChatMessageListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			offlineAt: new FormControl<Date | null | undefined>(undefined),
			pollingIntervalMillis: new FormControl<number | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
	export interface LiveChatModerator {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the moderator. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator". */
		kind?: string | null;
		snippet?: LiveChatModeratorSnippet;
	}

	/** A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
	export interface LiveChatModeratorFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the moderator. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatModeratorFormGroup() {
		return new FormGroup<LiveChatModeratorFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatModeratorSnippet {

		/** The ID of the live chat this moderator can act on. */
		liveChatId?: string | null;
		moderatorDetails?: ChannelProfileDetails;
	}
	export interface LiveChatModeratorSnippetFormProperties {

		/** The ID of the live chat this moderator can act on. */
		liveChatId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatModeratorSnippetFormGroup() {
		return new FormGroup<LiveChatModeratorSnippetFormProperties>({
			liveChatId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatModeratorListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of moderators that match the request criteria. */
		items?: Array<LiveChatModerator>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface LiveChatModeratorListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatModeratorListResponseFormGroup() {
		return new FormGroup<LiveChatModeratorListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A live stream describes a live ingestion point. */
	export interface LiveStream {

		/** Brief description of the live stream cdn settings. */
		cdn?: CdnSettings;

		/** Detailed settings of a stream. */
		contentDetails?: LiveStreamContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the stream. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream". */
		kind?: string | null;
		snippet?: LiveStreamSnippet;

		/** Brief description of the live stream status. */
		status?: LiveStreamStatus;
	}

	/** A live stream describes a live ingestion point. */
	export interface LiveStreamFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the stream. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiveStreamFormGroup() {
		return new FormGroup<LiveStreamFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed settings of a stream. */
	export interface LiveStreamContentDetails {

		/** The ingestion URL where the closed captions of this stream are sent. */
		closedCaptionsIngestionUrl?: string | null;

		/** Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. */
		isReusable?: boolean | null;
	}

	/** Detailed settings of a stream. */
	export interface LiveStreamContentDetailsFormProperties {

		/** The ingestion URL where the closed captions of this stream are sent. */
		closedCaptionsIngestionUrl: FormControl<string | null | undefined>,

		/** Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. */
		isReusable: FormControl<boolean | null | undefined>,
	}
	export function CreateLiveStreamContentDetailsFormGroup() {
		return new FormGroup<LiveStreamContentDetailsFormProperties>({
			closedCaptionsIngestionUrl: new FormControl<string | null | undefined>(undefined),
			isReusable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LiveStreamSnippet {

		/** The ID that YouTube uses to uniquely identify the channel that is transmitting the stream. */
		channelId?: string | null;

		/** The stream's description. The value cannot be longer than 10000 characters. */
		description?: string | null;
		isDefaultStream?: boolean | null;

		/** The date and time that the stream was created. */
		publishedAt?: Date | null;

		/** The stream's title. The value must be between 1 and 128 characters long. */
		title?: string | null;
	}
	export interface LiveStreamSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the channel that is transmitting the stream. */
		channelId: FormControl<string | null | undefined>,

		/** The stream's description. The value cannot be longer than 10000 characters. */
		description: FormControl<string | null | undefined>,
		isDefaultStream: FormControl<boolean | null | undefined>,

		/** The date and time that the stream was created. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The stream's title. The value must be between 1 and 128 characters long. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLiveStreamSnippetFormGroup() {
		return new FormGroup<LiveStreamSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isDefaultStream: new FormControl<boolean | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Brief description of the live stream status. */
	export interface LiveStreamStatus {
		healthStatus?: LiveStreamHealthStatus;
		streamStatus?: LiveStreamStatusStreamStatus | null;
	}

	/** Brief description of the live stream status. */
	export interface LiveStreamStatusFormProperties {
		streamStatus: FormControl<LiveStreamStatusStreamStatus | null | undefined>,
	}
	export function CreateLiveStreamStatusFormGroup() {
		return new FormGroup<LiveStreamStatusFormProperties>({
			streamStatus: new FormControl<LiveStreamStatusStreamStatus | null | undefined>(undefined),
		});

	}

	export interface LiveStreamHealthStatus {

		/** The configurations issues on this stream */
		configurationIssues?: Array<LiveStreamConfigurationIssue>;

		/** The last time this status was updated (in seconds) */
		lastUpdateTimeSeconds?: string | null;

		/** The status code of this stream */
		status?: LiveStreamHealthStatusStatus | null;
	}
	export interface LiveStreamHealthStatusFormProperties {

		/** The last time this status was updated (in seconds) */
		lastUpdateTimeSeconds: FormControl<string | null | undefined>,

		/** The status code of this stream */
		status: FormControl<LiveStreamHealthStatusStatus | null | undefined>,
	}
	export function CreateLiveStreamHealthStatusFormGroup() {
		return new FormGroup<LiveStreamHealthStatusFormProperties>({
			lastUpdateTimeSeconds: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LiveStreamHealthStatusStatus | null | undefined>(undefined),
		});

	}

	export interface LiveStreamConfigurationIssue {

		/** The long-form description of the issue and how to resolve it. */
		description?: string | null;

		/** The short-form reason for this issue. */
		reason?: string | null;

		/** How severe this issue is to the stream. */
		severity?: LiveStreamConfigurationIssueSeverity | null;

		/** The kind of error happening. */
		type?: LiveStreamConfigurationIssueType | null;
	}
	export interface LiveStreamConfigurationIssueFormProperties {

		/** The long-form description of the issue and how to resolve it. */
		description: FormControl<string | null | undefined>,

		/** The short-form reason for this issue. */
		reason: FormControl<string | null | undefined>,

		/** How severe this issue is to the stream. */
		severity: FormControl<LiveStreamConfigurationIssueSeverity | null | undefined>,

		/** The kind of error happening. */
		type: FormControl<LiveStreamConfigurationIssueType | null | undefined>,
	}
	export function CreateLiveStreamConfigurationIssueFormGroup() {
		return new FormGroup<LiveStreamConfigurationIssueFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<LiveStreamConfigurationIssueSeverity | null | undefined>(undefined),
			type: new FormControl<LiveStreamConfigurationIssueType | null | undefined>(undefined),
		});

	}

	export enum LiveStreamConfigurationIssueSeverity { info = 'info', warning = 'warning', error = 'error' }

	export enum LiveStreamConfigurationIssueType { gopSizeOver = 'gopSizeOver', gopSizeLong = 'gopSizeLong', gopSizeShort = 'gopSizeShort', openGop = 'openGop', badContainer = 'badContainer', audioBitrateHigh = 'audioBitrateHigh', audioBitrateLow = 'audioBitrateLow', audioSampleRate = 'audioSampleRate', bitrateHigh = 'bitrateHigh', bitrateLow = 'bitrateLow', audioCodec = 'audioCodec', videoCodec = 'videoCodec', noAudioStream = 'noAudioStream', noVideoStream = 'noVideoStream', multipleVideoStreams = 'multipleVideoStreams', multipleAudioStreams = 'multipleAudioStreams', audioTooManyChannels = 'audioTooManyChannels', interlacedVideo = 'interlacedVideo', frameRateHigh = 'frameRateHigh', resolutionMismatch = 'resolutionMismatch', videoCodecMismatch = 'videoCodecMismatch', videoInterlaceMismatch = 'videoInterlaceMismatch', videoProfileMismatch = 'videoProfileMismatch', videoBitrateMismatch = 'videoBitrateMismatch', framerateMismatch = 'framerateMismatch', gopMismatch = 'gopMismatch', audioSampleRateMismatch = 'audioSampleRateMismatch', audioStereoMismatch = 'audioStereoMismatch', audioCodecMismatch = 'audioCodecMismatch', audioBitrateMismatch = 'audioBitrateMismatch', videoResolutionSuboptimal = 'videoResolutionSuboptimal', videoResolutionUnsupported = 'videoResolutionUnsupported', videoIngestionStarved = 'videoIngestionStarved', videoIngestionFasterThanRealtime = 'videoIngestionFasterThanRealtime' }

	export enum LiveStreamHealthStatusStatus { good = 'good', ok = 'ok', bad = 'bad', noData = 'noData', revoked = 'revoked' }

	export enum LiveStreamStatusStreamStatus { created = 'created', ready = 'ready', active = 'active', inactive = 'inactive', error = 'error' }

	export interface LiveStreamListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of live streams that match the request criteria. */
		items?: Array<LiveStream>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface LiveStreamListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateLiveStreamListResponseFormGroup() {
		return new FormGroup<LiveStreamListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
	export interface Member {

		/** Etag of this resource. */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#member". */
		kind?: string | null;
		snippet?: MemberSnippet;
	}

	/** A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
	export interface MemberFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#member". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberSnippet {

		/** The id of the channel that's offering memberships. */
		creatorChannelId?: string | null;
		memberDetails?: ChannelProfileDetails;
		membershipsDetails?: MembershipsDetails;
	}
	export interface MemberSnippetFormProperties {

		/** The id of the channel that's offering memberships. */
		creatorChannelId: FormControl<string | null | undefined>,
	}
	export function CreateMemberSnippetFormGroup() {
		return new FormGroup<MemberSnippetFormProperties>({
			creatorChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembershipsDetails {

		/** Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase. */
		accessibleLevels?: Array<string>;

		/** Id of the highest level that the user has access to at the moment. */
		highestAccessibleLevel?: string | null;

		/** Display name for the highest level that the user has access to at the moment. */
		highestAccessibleLevelDisplayName?: string | null;
		membershipsDuration?: MembershipsDuration;

		/** Data about memberships duration on particular pricing levels. */
		membershipsDurationAtLevels?: Array<MembershipsDurationAtLevel>;
	}
	export interface MembershipsDetailsFormProperties {

		/** Id of the highest level that the user has access to at the moment. */
		highestAccessibleLevel: FormControl<string | null | undefined>,

		/** Display name for the highest level that the user has access to at the moment. */
		highestAccessibleLevelDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateMembershipsDetailsFormGroup() {
		return new FormGroup<MembershipsDetailsFormProperties>({
			highestAccessibleLevel: new FormControl<string | null | undefined>(undefined),
			highestAccessibleLevelDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembershipsDuration {

		/** The date and time when the user became a continuous member across all levels. */
		memberSince?: string | null;

		/**
		 * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberTotalDurationMonths?: number | null;
	}
	export interface MembershipsDurationFormProperties {

		/** The date and time when the user became a continuous member across all levels. */
		memberSince: FormControl<string | null | undefined>,

		/**
		 * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberTotalDurationMonths: FormControl<number | null | undefined>,
	}
	export function CreateMembershipsDurationFormGroup() {
		return new FormGroup<MembershipsDurationFormProperties>({
			memberSince: new FormControl<string | null | undefined>(undefined),
			memberTotalDurationMonths: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MembershipsDurationAtLevel {

		/** Pricing level ID. */
		level?: string | null;

		/** The date and time when the user became a continuous member for the given level. */
		memberSince?: string | null;

		/**
		 * The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberTotalDurationMonths?: number | null;
	}
	export interface MembershipsDurationAtLevelFormProperties {

		/** Pricing level ID. */
		level: FormControl<string | null | undefined>,

		/** The date and time when the user became a continuous member for the given level. */
		memberSince: FormControl<string | null | undefined>,

		/**
		 * The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberTotalDurationMonths: FormControl<number | null | undefined>,
	}
	export function CreateMembershipsDurationAtLevelFormGroup() {
		return new FormGroup<MembershipsDurationAtLevelFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			memberSince: new FormControl<string | null | undefined>(undefined),
			memberTotalDurationMonths: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MemberListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of members that match the request criteria. */
		items?: Array<Member>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface MemberListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateMemberListResponseFormGroup() {
		return new FormGroup<MemberListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
	export interface MembershipsLevel {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the memberships level. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
		kind?: string | null;
		snippet?: MembershipsLevelSnippet;
	}

	/** A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
	export interface MembershipsLevelFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the memberships level. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMembershipsLevelFormGroup() {
		return new FormGroup<MembershipsLevelFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembershipsLevelSnippet {

		/** The id of the channel that's offering channel memberships. */
		creatorChannelId?: string | null;
		levelDetails?: LevelDetails;
	}
	export interface MembershipsLevelSnippetFormProperties {

		/** The id of the channel that's offering channel memberships. */
		creatorChannelId: FormControl<string | null | undefined>,
	}
	export function CreateMembershipsLevelSnippetFormGroup() {
		return new FormGroup<MembershipsLevelSnippetFormProperties>({
			creatorChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembershipsLevelListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of pricing levels offered by a creator to the fans. */
		items?: Array<MembershipsLevel>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface MembershipsLevelListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateMembershipsLevelListResponseFormGroup() {
		return new FormGroup<MembershipsLevelListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. */
	export interface Playlist {
		contentDetails?: PlaylistContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the playlist. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlist". */
		kind?: string | null;

		/** Localizations for different languages */
		localizations?: {[id: string]: PlaylistLocalization };
		player?: PlaylistPlayer;

		/** Basic details about a playlist, including title, description and thumbnails. */
		snippet?: PlaylistSnippet;
		status?: PlaylistStatus;
	}

	/** A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. */
	export interface PlaylistFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the playlist. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlist". */
		kind: FormControl<string | null | undefined>,

		/** Localizations for different languages */
		localizations: FormControl<{[id: string]: PlaylistLocalization } | null | undefined>,
	}
	export function CreatePlaylistFormGroup() {
		return new FormGroup<PlaylistFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localizations: new FormControl<{[id: string]: PlaylistLocalization } | null | undefined>(undefined),
		});

	}

	export interface PlaylistContentDetails {

		/**
		 * The number of videos in the playlist.
		 * Type: uint, 0 to 4,294,967,295
		 */
		itemCount?: number | null;
	}
	export interface PlaylistContentDetailsFormProperties {

		/**
		 * The number of videos in the playlist.
		 * Type: uint, 0 to 4,294,967,295
		 */
		itemCount: FormControl<number | null | undefined>,
	}
	export function CreatePlaylistContentDetailsFormGroup() {
		return new FormGroup<PlaylistContentDetailsFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Playlist localization setting */
	export interface PlaylistLocalization {

		/** The localized strings for playlist's description. */
		description?: string | null;

		/** The localized strings for playlist's title. */
		title?: string | null;
	}

	/** Playlist localization setting */
	export interface PlaylistLocalizationFormProperties {

		/** The localized strings for playlist's description. */
		description: FormControl<string | null | undefined>,

		/** The localized strings for playlist's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistLocalizationFormGroup() {
		return new FormGroup<PlaylistLocalizationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistPlayer {

		/** An <iframe> tag that embeds a player that will play the playlist. */
		embedHtml?: string | null;
	}
	export interface PlaylistPlayerFormProperties {

		/** An <iframe> tag that embeds a player that will play the playlist. */
		embedHtml: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistPlayerFormGroup() {
		return new FormGroup<PlaylistPlayerFormProperties>({
			embedHtml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a playlist, including title, description and thumbnails. */
	export interface PlaylistSnippet {

		/** The ID that YouTube uses to uniquely identify the channel that published the playlist. */
		channelId?: string | null;

		/** The channel title of the channel that the video belongs to. */
		channelTitle?: string | null;

		/** The language of the playlist's default title and description. */
		defaultLanguage?: string | null;

		/** The playlist's description. */
		description?: string | null;

		/** Playlist localization setting */
		localized?: PlaylistLocalization;

		/** The date and time that the playlist was created. */
		publishedAt?: Date | null;

		/** Keyword tags associated with the playlist. */
		tags?: Array<string>;

		/** Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted. */
		thumbnailVideoId?: string | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The playlist's title. */
		title?: string | null;
	}

	/** Basic details about a playlist, including title, description and thumbnails. */
	export interface PlaylistSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the channel that published the playlist. */
		channelId: FormControl<string | null | undefined>,

		/** The channel title of the channel that the video belongs to. */
		channelTitle: FormControl<string | null | undefined>,

		/** The language of the playlist's default title and description. */
		defaultLanguage: FormControl<string | null | undefined>,

		/** The playlist's description. */
		description: FormControl<string | null | undefined>,

		/** The date and time that the playlist was created. */
		publishedAt: FormControl<Date | null | undefined>,

		/** Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted. */
		thumbnailVideoId: FormControl<string | null | undefined>,

		/** The playlist's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistSnippetFormGroup() {
		return new FormGroup<PlaylistSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			thumbnailVideoId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistStatus {

		/** The playlist's privacy status. */
		privacyStatus?: ChannelStatusPrivacyStatus | null;
	}
	export interface PlaylistStatusFormProperties {

		/** The playlist's privacy status. */
		privacyStatus: FormControl<ChannelStatusPrivacyStatus | null | undefined>,
	}
	export function CreatePlaylistStatusFormGroup() {
		return new FormGroup<PlaylistStatusFormProperties>({
			privacyStatus: new FormControl<ChannelStatusPrivacyStatus | null | undefined>(undefined),
		});

	}

	export interface PlaylistImage {

		/** Identifies this resource (playlist id and image type). */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImages". */
		kind?: string | null;

		/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
		snippet?: PlaylistImageSnippet;
	}
	export interface PlaylistImageFormProperties {

		/** Identifies this resource (playlist id and image type). */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImages". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistImageFormGroup() {
		return new FormGroup<PlaylistImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
	export interface PlaylistImageSnippet {

		/**
		 * The image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The Playlist ID of the playlist this image is associated with. */
		playlistId?: string | null;

		/** The image type. */
		type?: PlaylistImageSnippetType | null;

		/**
		 * The image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods. */
	export interface PlaylistImageSnippetFormProperties {

		/**
		 * The image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The Playlist ID of the playlist this image is associated with. */
		playlistId: FormControl<string | null | undefined>,

		/** The image type. */
		type: FormControl<PlaylistImageSnippetType | null | undefined>,

		/**
		 * The image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePlaylistImageSnippetFormGroup() {
		return new FormGroup<PlaylistImageSnippetFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			playlistId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlaylistImageSnippetType | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PlaylistImageSnippetType { hero = 'hero' }

	export interface PlaylistImageListResponse {
		items?: Array<PlaylistImage>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImageListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;
	}
	export interface PlaylistImageListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImageListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistImageListResponseFormGroup() {
		return new FormGroup<PlaylistImageListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel. */
	export interface PlaylistItem {
		contentDetails?: PlaylistItemContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the playlist item. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem". */
		kind?: string | null;

		/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
		snippet?: PlaylistItemSnippet;

		/** Information about the playlist item's privacy status. */
		status?: PlaylistItemStatus;
	}

	/** A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel. */
	export interface PlaylistItemFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the playlist item. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistItemFormGroup() {
		return new FormGroup<PlaylistItemFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistItemContentDetails {

		/** The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video. */
		endAt?: string | null;

		/** A user-generated note for this item. */
		note?: string | null;

		/** The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0. */
		startAt?: string | null;

		/** The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request. */
		videoId?: string | null;

		/** The date and time that the video was published to YouTube. */
		videoPublishedAt?: Date | null;
	}
	export interface PlaylistItemContentDetailsFormProperties {

		/** The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video. */
		endAt: FormControl<string | null | undefined>,

		/** A user-generated note for this item. */
		note: FormControl<string | null | undefined>,

		/** The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0. */
		startAt: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request. */
		videoId: FormControl<string | null | undefined>,

		/** The date and time that the video was published to YouTube. */
		videoPublishedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePlaylistItemContentDetailsFormGroup() {
		return new FormGroup<PlaylistItemContentDetailsFormProperties>({
			endAt: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			startAt: new FormControl<string | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
			videoPublishedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
	export interface PlaylistItemSnippet {

		/** The ID that YouTube uses to uniquely identify the user that added the item to the playlist. */
		channelId?: string | null;

		/** Channel title for the channel that the playlist item belongs to. */
		channelTitle?: string | null;

		/** The item's description. */
		description?: string | null;

		/** The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in. */
		playlistId?: string | null;

		/**
		 * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
		 * Type: uint, 0 to 4,294,967,295
		 */
		position?: number | null;

		/** The date and time that the item was added to the playlist. */
		publishedAt?: Date | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The item's title. */
		title?: string | null;

		/** Channel id for the channel this video belongs to. */
		videoOwnerChannelId?: string | null;

		/** Channel title for the channel this video belongs to. */
		videoOwnerChannelTitle?: string | null;
	}

	/** Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15 */
	export interface PlaylistItemSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the user that added the item to the playlist. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel that the playlist item belongs to. */
		channelTitle: FormControl<string | null | undefined>,

		/** The item's description. */
		description: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in. */
		playlistId: FormControl<string | null | undefined>,

		/**
		 * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
		 * Type: uint, 0 to 4,294,967,295
		 */
		position: FormControl<number | null | undefined>,

		/** The date and time that the item was added to the playlist. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The item's title. */
		title: FormControl<string | null | undefined>,

		/** Channel id for the channel this video belongs to. */
		videoOwnerChannelId: FormControl<string | null | undefined>,

		/** Channel title for the channel this video belongs to. */
		videoOwnerChannelTitle: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistItemSnippetFormGroup() {
		return new FormGroup<PlaylistItemSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			playlistId: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			videoOwnerChannelId: new FormControl<string | null | undefined>(undefined),
			videoOwnerChannelTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the playlist item's privacy status. */
	export interface PlaylistItemStatus {

		/** This resource's privacy status. */
		privacyStatus?: ChannelStatusPrivacyStatus | null;
	}

	/** Information about the playlist item's privacy status. */
	export interface PlaylistItemStatusFormProperties {

		/** This resource's privacy status. */
		privacyStatus: FormControl<ChannelStatusPrivacyStatus | null | undefined>,
	}
	export function CreatePlaylistItemStatusFormGroup() {
		return new FormGroup<PlaylistItemStatusFormProperties>({
			privacyStatus: new FormControl<ChannelStatusPrivacyStatus | null | undefined>(undefined),
		});

	}

	export interface PlaylistItemListResponse {
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of playlist items that match the request criteria. */
		items?: Array<PlaylistItem>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". Etag of this resource. */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface PlaylistItemListResponseFormProperties {
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". Etag of this resource. */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistItemListResponseFormGroup() {
		return new FormGroup<PlaylistItemListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of playlists that match the request criteria */
		items?: Array<Playlist>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface PlaylistListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistListResponseFormGroup() {
		return new FormGroup<PlaylistListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** Pagination information for token pagination. */
		items?: Array<SearchResult>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;
		regionCode?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface SearchListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,
		regionCode: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateSearchListResponseFormGroup() {
		return new FormGroup<SearchListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data. */
	export interface SearchResult {

		/** Etag of this resource. */
		etag?: string | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		id?: ResourceId;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult". */
		kind?: string | null;

		/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
		snippet?: SearchResultSnippet;
	}

	/** A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data. */
	export interface SearchResultFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
	export interface SearchResultSnippet {

		/** The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies. */
		channelId?: string | null;

		/** The title of the channel that published the resource that the search result identifies. */
		channelTitle?: string | null;

		/** A description of the search result. */
		description?: string | null;

		/** It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts. */
		liveBroadcastContent?: SearchResultSnippetLiveBroadcastContent | null;

		/** The creation date and time of the resource that the search result identifies. */
		publishedAt?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The title of the search result. */
		title?: string | null;
	}

	/** Basic details about a search result, including title, description and thumbnails of the item referenced by the search result. */
	export interface SearchResultSnippetFormProperties {

		/** The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies. */
		channelId: FormControl<string | null | undefined>,

		/** The title of the channel that published the resource that the search result identifies. */
		channelTitle: FormControl<string | null | undefined>,

		/** A description of the search result. */
		description: FormControl<string | null | undefined>,

		/** It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts. */
		liveBroadcastContent: FormControl<SearchResultSnippetLiveBroadcastContent | null | undefined>,

		/** The creation date and time of the resource that the search result identifies. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The title of the search result. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultSnippetFormGroup() {
		return new FormGroup<SearchResultSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			liveBroadcastContent: new FormControl<SearchResultSnippetLiveBroadcastContent | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SearchResultSnippetLiveBroadcastContent { none = 'none', upcoming = 'upcoming', live = 'live', completed = 'completed' }


	/** A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
	export interface Subscription {

		/** Details about the content to witch a subscription refers. */
		contentDetails?: SubscriptionContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the subscription. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#subscription". */
		kind?: string | null;

		/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
		snippet?: SubscriptionSnippet;

		/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
		subscriberSnippet?: SubscriptionSubscriberSnippet;
	}

	/** A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
	export interface SubscriptionFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the subscription. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#subscription". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the content to witch a subscription refers. */
	export interface SubscriptionContentDetails {

		/** The type of activity this subscription is for (only uploads, everything). */
		activityType?: SubscriptionContentDetailsActivityType | null;

		/**
		 * The number of new items in the subscription since its content was last read.
		 * Type: uint, 0 to 4,294,967,295
		 */
		newItemCount?: number | null;

		/**
		 * The approximate number of items that the subscription points to.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItemCount?: number | null;
	}

	/** Details about the content to witch a subscription refers. */
	export interface SubscriptionContentDetailsFormProperties {

		/** The type of activity this subscription is for (only uploads, everything). */
		activityType: FormControl<SubscriptionContentDetailsActivityType | null | undefined>,

		/**
		 * The number of new items in the subscription since its content was last read.
		 * Type: uint, 0 to 4,294,967,295
		 */
		newItemCount: FormControl<number | null | undefined>,

		/**
		 * The approximate number of items that the subscription points to.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItemCount: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionContentDetailsFormGroup() {
		return new FormGroup<SubscriptionContentDetailsFormProperties>({
			activityType: new FormControl<SubscriptionContentDetailsActivityType | null | undefined>(undefined),
			newItemCount: new FormControl<number | null | undefined>(undefined),
			totalItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubscriptionContentDetailsActivityType { subscriptionActivityTypeUnspecified = 'subscriptionActivityTypeUnspecified', all = 'all', uploads = 'uploads' }


	/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
	export interface SubscriptionSnippet {

		/** The ID that YouTube uses to uniquely identify the subscriber's channel. */
		channelId?: string | null;

		/** Channel title for the channel that the subscription belongs to. */
		channelTitle?: string | null;

		/** The subscription's details. */
		description?: string | null;

		/** The date and time that the subscription was created. */
		publishedAt?: Date | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The subscription's title. */
		title?: string | null;
	}

	/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
	export interface SubscriptionSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the subscriber's channel. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel that the subscription belongs to. */
		channelTitle: FormControl<string | null | undefined>,

		/** The subscription's details. */
		description: FormControl<string | null | undefined>,

		/** The date and time that the subscription was created. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The subscription's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionSnippetFormGroup() {
		return new FormGroup<SubscriptionSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
	export interface SubscriptionSubscriberSnippet {

		/** The channel ID of the subscriber. */
		channelId?: string | null;

		/** The description of the subscriber. */
		description?: string | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The title of the subscriber. */
		title?: string | null;
	}

	/** Basic details about a subscription's subscriber including title, description, channel ID and thumbnails. */
	export interface SubscriptionSubscriberSnippetFormProperties {

		/** The channel ID of the subscriber. */
		channelId: FormControl<string | null | undefined>,

		/** The description of the subscriber. */
		description: FormControl<string | null | undefined>,

		/** The title of the subscriber. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionSubscriberSnippetFormGroup() {
		return new FormGroup<SubscriptionSubscriberSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of subscriptions that match the request criteria. */
		items?: Array<Subscription>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface SubscriptionListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionListResponseFormGroup() {
		return new FormGroup<SubscriptionListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel. */
	export interface SuperChatEvent {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the Super Chat event. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`. */
		kind?: string | null;
		snippet?: SuperChatEventSnippet;
	}

	/** A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel. */
	export interface SuperChatEventFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the Super Chat event. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSuperChatEventFormGroup() {
		return new FormGroup<SuperChatEventFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuperChatEventSnippet {

		/** The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000. */
		amountMicros?: string | null;

		/** Channel id where the event occurred. */
		channelId?: string | null;

		/** The text contents of the comment left by the user. */
		commentText?: string | null;

		/** The date and time when the event occurred. */
		createdAt?: Date | null;

		/** The currency in which the purchase was made. ISO 4217. */
		currency?: string | null;

		/** A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language. */
		displayString?: string | null;

		/** True if this event is a Super Sticker event. */
		isSuperStickerEvent?: boolean | null;

		/**
		 * The tier for the paid message, which is based on the amount of money spent to purchase the message.
		 * Type: uint, 0 to 4,294,967,295
		 */
		messageType?: number | null;
		superStickerMetadata?: SuperStickerMetadata;
		supporterDetails?: ChannelProfileDetails;
	}
	export interface SuperChatEventSnippetFormProperties {

		/** The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000. */
		amountMicros: FormControl<string | null | undefined>,

		/** Channel id where the event occurred. */
		channelId: FormControl<string | null | undefined>,

		/** The text contents of the comment left by the user. */
		commentText: FormControl<string | null | undefined>,

		/** The date and time when the event occurred. */
		createdAt: FormControl<Date | null | undefined>,

		/** The currency in which the purchase was made. ISO 4217. */
		currency: FormControl<string | null | undefined>,

		/** A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language. */
		displayString: FormControl<string | null | undefined>,

		/** True if this event is a Super Sticker event. */
		isSuperStickerEvent: FormControl<boolean | null | undefined>,

		/**
		 * The tier for the paid message, which is based on the amount of money spent to purchase the message.
		 * Type: uint, 0 to 4,294,967,295
		 */
		messageType: FormControl<number | null | undefined>,
	}
	export function CreateSuperChatEventSnippetFormGroup() {
		return new FormGroup<SuperChatEventSnippetFormProperties>({
			amountMicros: new FormControl<string | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			commentText: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			displayString: new FormControl<string | null | undefined>(undefined),
			isSuperStickerEvent: new FormControl<boolean | null | undefined>(undefined),
			messageType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SuperChatEventListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of Super Chat purchases that match the request criteria. */
		items?: Array<SuperChatEvent>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface SuperChatEventListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateSuperChatEventListResponseFormGroup() {
		return new FormGroup<SuperChatEventListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestItem {
		featuredPart?: boolean | null;
		gaia?: string | null;
		id?: string | null;
		snippet?: TestItemTestItemSnippet;
	}
	export interface TestItemFormProperties {
		featuredPart: FormControl<boolean | null | undefined>,
		gaia: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateTestItemFormGroup() {
		return new FormGroup<TestItemFormProperties>({
			featuredPart: new FormControl<boolean | null | undefined>(undefined),
			gaia: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestItemTestItemSnippet {
	}
	export interface TestItemTestItemSnippetFormProperties {
	}
	export function CreateTestItemTestItemSnippetFormGroup() {
		return new FormGroup<TestItemTestItemSnippetFormProperties>({
		});

	}


	/** A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service. */
	export interface ThirdPartyLink {

		/** Etag of this resource */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink". */
		kind?: string | null;

		/** The linking_token identifies a YouTube account and channel with which the third party account is linked. */
		linkingToken?: string | null;

		/** Basic information about a third party account link, including its type and type-specific information. */
		snippet?: ThirdPartyLinkSnippet;

		/** The third-party link status object contains information about the status of the link. */
		status?: ThirdPartyLinkStatus;
	}

	/** A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service. */
	export interface ThirdPartyLinkFormProperties {

		/** Etag of this resource */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink". */
		kind: FormControl<string | null | undefined>,

		/** The linking_token identifies a YouTube account and channel with which the third party account is linked. */
		linkingToken: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyLinkFormGroup() {
		return new FormGroup<ThirdPartyLinkFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			linkingToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic information about a third party account link, including its type and type-specific information. */
	export interface ThirdPartyLinkSnippet {

		/** Information specific to a store on a merchandising platform linked to a YouTube channel. */
		channelToStoreLink?: ChannelToStoreLinkDetails;

		/** Type of the link named after the entities that are being linked. */
		type?: ThirdPartyLinkSnippetType | null;
	}

	/** Basic information about a third party account link, including its type and type-specific information. */
	export interface ThirdPartyLinkSnippetFormProperties {

		/** Type of the link named after the entities that are being linked. */
		type: FormControl<ThirdPartyLinkSnippetType | null | undefined>,
	}
	export function CreateThirdPartyLinkSnippetFormGroup() {
		return new FormGroup<ThirdPartyLinkSnippetFormProperties>({
			type: new FormControl<ThirdPartyLinkSnippetType | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyLinkSnippetType { linkUnspecified = 'linkUnspecified', channelToStoreLink = 'channelToStoreLink' }


	/** The third-party link status object contains information about the status of the link. */
	export interface ThirdPartyLinkStatus {
		linkStatus?: ThirdPartyLinkStatusLinkStatus | null;
	}

	/** The third-party link status object contains information about the status of the link. */
	export interface ThirdPartyLinkStatusFormProperties {
		linkStatus: FormControl<ThirdPartyLinkStatusLinkStatus | null | undefined>,
	}
	export function CreateThirdPartyLinkStatusFormGroup() {
		return new FormGroup<ThirdPartyLinkStatusFormProperties>({
			linkStatus: new FormControl<ThirdPartyLinkStatusLinkStatus | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyLinkStatusLinkStatus { unknown = 'unknown', failed = 'failed', pending = 'pending', linked = 'linked' }

	export interface ThirdPartyLinkListResponse {

		/** Etag of this resource. */
		etag?: string | null;
		items?: Array<ThirdPartyLink>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse". */
		kind?: string | null;
	}
	export interface ThirdPartyLinkListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyLinkListResponseFormGroup() {
		return new FormGroup<ThirdPartyLinkListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThumbnailSetResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of thumbnails. */
		items?: Array<ThumbnailDetails>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface ThumbnailSetResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateThumbnailSetResponseFormGroup() {
		return new FormGroup<ThumbnailSetResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *video* resource represents a YouTube video. */
	export interface Video {
		ageGating?: VideoAgeGating;

		/** Details about the content of a YouTube Video. */
		contentDetails?: VideoContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information. */
		fileDetails?: VideoFileDetails;

		/** The ID that YouTube uses to uniquely identify the video. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#video". */
		kind?: string | null;

		/** Details about the live streaming metadata. */
		liveStreamingDetails?: VideoLiveStreamingDetails;

		/** The localizations object contains localized versions of the basic details about the video, such as its title and description. */
		localizations?: {[id: string]: VideoLocalization };

		/** Details about monetization of a YouTube Video. */
		monetizationDetails?: VideoMonetizationDetails;

		/** Player to be used for a video playback. */
		player?: VideoPlayer;

		/** Describes processing status and progress and availability of some other Video resource parts. */
		processingDetails?: VideoProcessingDetails;

		/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
		projectDetails?: VideoProjectDetails;

		/** Recording information associated with the video. */
		recordingDetails?: VideoRecordingDetails;

		/** Basic details about a video, including title, description, uploader, thumbnails and category. */
		snippet?: VideoSnippet;

		/** Statistics about the video, such as the number of times the video was viewed or liked. */
		statistics?: VideoStatistics;

		/** Basic details about a video category, such as its localized title. Next Id: 18 */
		status?: VideoStatus;

		/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
		suggestions?: VideoSuggestions;

		/** Freebase topic information related to the video. */
		topicDetails?: VideoTopicDetails;
	}

	/** A *video* resource represents a YouTube video. */
	export interface VideoFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#video". */
		kind: FormControl<string | null | undefined>,

		/** The localizations object contains localized versions of the basic details about the video, such as its title and description. */
		localizations: FormControl<{[id: string]: VideoLocalization } | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localizations: new FormControl<{[id: string]: VideoLocalization } | null | undefined>(undefined),
		});

	}

	export interface VideoAgeGating {

		/** Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content. */
		alcoholContent?: boolean | null;

		/** Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present. */
		restricted?: boolean | null;

		/** Video game rating, if any. */
		videoGameRating?: VideoAgeGatingVideoGameRating | null;
	}
	export interface VideoAgeGatingFormProperties {

		/** Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content. */
		alcoholContent: FormControl<boolean | null | undefined>,

		/** Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present. */
		restricted: FormControl<boolean | null | undefined>,

		/** Video game rating, if any. */
		videoGameRating: FormControl<VideoAgeGatingVideoGameRating | null | undefined>,
	}
	export function CreateVideoAgeGatingFormGroup() {
		return new FormGroup<VideoAgeGatingFormProperties>({
			alcoholContent: new FormControl<boolean | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			videoGameRating: new FormControl<VideoAgeGatingVideoGameRating | null | undefined>(undefined),
		});

	}

	export enum VideoAgeGatingVideoGameRating { anyone = 'anyone', m15Plus = 'm15Plus', m16Plus = 'm16Plus', m17Plus = 'm17Plus' }


	/** Details about the content of a YouTube Video. */
	export interface VideoContentDetails {

		/** The value of captions indicates whether the video has captions or not. */
		caption?: VideoContentDetailsCaption | null;

		/** Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange */
		contentRating?: ContentRating;

		/** Rights management policy for YouTube resources. */
		countryRestriction?: AccessPolicy;

		/** The value of definition indicates whether the video is available in high definition or only in standard definition. */
		definition?: VideoContentDetailsDefinition | null;

		/** The value of dimension indicates whether the video is available in 3D or in 2D. */
		dimension?: string | null;

		/** The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long. */
		duration?: string | null;

		/** Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader. */
		hasCustomThumbnail?: boolean | null;

		/** The value of is_license_content indicates whether the video is licensed content. */
		licensedContent?: boolean | null;

		/** Specifies the projection format of the video. */
		projection?: VideoContentDetailsProjection | null;

		/** DEPRECATED Region restriction of the video. */
		regionRestriction?: VideoContentDetailsRegionRestriction;
	}

	/** Details about the content of a YouTube Video. */
	export interface VideoContentDetailsFormProperties {

		/** The value of captions indicates whether the video has captions or not. */
		caption: FormControl<VideoContentDetailsCaption | null | undefined>,

		/** The value of definition indicates whether the video is available in high definition or only in standard definition. */
		definition: FormControl<VideoContentDetailsDefinition | null | undefined>,

		/** The value of dimension indicates whether the video is available in 3D or in 2D. */
		dimension: FormControl<string | null | undefined>,

		/** The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long. */
		duration: FormControl<string | null | undefined>,

		/** Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader. */
		hasCustomThumbnail: FormControl<boolean | null | undefined>,

		/** The value of is_license_content indicates whether the video is licensed content. */
		licensedContent: FormControl<boolean | null | undefined>,

		/** Specifies the projection format of the video. */
		projection: FormControl<VideoContentDetailsProjection | null | undefined>,
	}
	export function CreateVideoContentDetailsFormGroup() {
		return new FormGroup<VideoContentDetailsFormProperties>({
			caption: new FormControl<VideoContentDetailsCaption | null | undefined>(undefined),
			definition: new FormControl<VideoContentDetailsDefinition | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			hasCustomThumbnail: new FormControl<boolean | null | undefined>(undefined),
			licensedContent: new FormControl<boolean | null | undefined>(undefined),
			projection: new FormControl<VideoContentDetailsProjection | null | undefined>(undefined),
		});

	}

	export enum VideoContentDetailsCaption { true = 'true', false = 'false' }

	export enum VideoContentDetailsDefinition { sd = 'sd', hd = 'hd' }

	export enum VideoContentDetailsProjection { rectangular = 'rectangular', _360 = '360' }


	/** DEPRECATED Region restriction of the video. */
	export interface VideoContentDetailsRegionRestriction {

		/** A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries. */
		allowed?: Array<string>;

		/** A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries. */
		blocked?: Array<string>;
	}

	/** DEPRECATED Region restriction of the video. */
	export interface VideoContentDetailsRegionRestrictionFormProperties {
	}
	export function CreateVideoContentDetailsRegionRestrictionFormGroup() {
		return new FormGroup<VideoContentDetailsRegionRestrictionFormProperties>({
		});

	}


	/** Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information. */
	export interface VideoFileDetails {

		/** A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream. */
		audioStreams?: Array<VideoFileDetailsAudioStream>;

		/** The uploaded video file's combined (video and audio) bitrate in bits per second. */
		bitrateBps?: string | null;

		/** The uploaded video file's container format. */
		container?: string | null;

		/** The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM */
		creationTime?: string | null;

		/** The length of the uploaded video in milliseconds. */
		durationMs?: string | null;

		/** The uploaded file's name. This field is present whether a video file or another type of file was uploaded. */
		fileName?: string | null;

		/** The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded. */
		fileSize?: string | null;

		/** The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded. */
		fileType?: VideoFileDetailsFileType | null;

		/** A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream. */
		videoStreams?: Array<VideoFileDetailsVideoStream>;
	}

	/** Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information. */
	export interface VideoFileDetailsFormProperties {

		/** The uploaded video file's combined (video and audio) bitrate in bits per second. */
		bitrateBps: FormControl<string | null | undefined>,

		/** The uploaded video file's container format. */
		container: FormControl<string | null | undefined>,

		/** The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM */
		creationTime: FormControl<string | null | undefined>,

		/** The length of the uploaded video in milliseconds. */
		durationMs: FormControl<string | null | undefined>,

		/** The uploaded file's name. This field is present whether a video file or another type of file was uploaded. */
		fileName: FormControl<string | null | undefined>,

		/** The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded. */
		fileSize: FormControl<string | null | undefined>,

		/** The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded. */
		fileType: FormControl<VideoFileDetailsFileType | null | undefined>,
	}
	export function CreateVideoFileDetailsFormGroup() {
		return new FormGroup<VideoFileDetailsFormProperties>({
			bitrateBps: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			durationMs: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<VideoFileDetailsFileType | null | undefined>(undefined),
		});

	}


	/** Information about an audio stream. */
	export interface VideoFileDetailsAudioStream {

		/** The audio stream's bitrate, in bits per second. */
		bitrateBps?: string | null;

		/**
		 * The number of audio channels that the stream contains.
		 * Type: uint, 0 to 4,294,967,295
		 */
		channelCount?: number | null;

		/** The audio codec that the stream uses. */
		codec?: string | null;

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor?: string | null;
	}

	/** Information about an audio stream. */
	export interface VideoFileDetailsAudioStreamFormProperties {

		/** The audio stream's bitrate, in bits per second. */
		bitrateBps: FormControl<string | null | undefined>,

		/**
		 * The number of audio channels that the stream contains.
		 * Type: uint, 0 to 4,294,967,295
		 */
		channelCount: FormControl<number | null | undefined>,

		/** The audio codec that the stream uses. */
		codec: FormControl<string | null | undefined>,

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateVideoFileDetailsAudioStreamFormGroup() {
		return new FormGroup<VideoFileDetailsAudioStreamFormProperties>({
			bitrateBps: new FormControl<string | null | undefined>(undefined),
			channelCount: new FormControl<number | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoFileDetailsFileType { video = 'video', audio = 'audio', image = 'image', archive = 'archive', document = 'document', project = 'project', other = 'other' }


	/** Information about a video stream. */
	export interface VideoFileDetailsVideoStream {

		/**
		 * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
		 * Type: double
		 */
		aspectRatio?: number | null;

		/** The video stream's bitrate, in bits per second. */
		bitrateBps?: string | null;

		/** The video codec that the stream uses. */
		codec?: string | null;

		/**
		 * The video stream's frame rate, in frames per second.
		 * Type: double
		 */
		frameRateFps?: number | null;

		/**
		 * The encoded video content's height in pixels.
		 * Type: uint, 0 to 4,294,967,295
		 */
		heightPixels?: number | null;

		/** The amount that YouTube needs to rotate the original source content to properly display the video. */
		rotation?: VideoFileDetailsVideoStreamRotation | null;

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor?: string | null;

		/**
		 * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
		 * Type: uint, 0 to 4,294,967,295
		 */
		widthPixels?: number | null;
	}

	/** Information about a video stream. */
	export interface VideoFileDetailsVideoStreamFormProperties {

		/**
		 * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
		 * Type: double
		 */
		aspectRatio: FormControl<number | null | undefined>,

		/** The video stream's bitrate, in bits per second. */
		bitrateBps: FormControl<string | null | undefined>,

		/** The video codec that the stream uses. */
		codec: FormControl<string | null | undefined>,

		/**
		 * The video stream's frame rate, in frames per second.
		 * Type: double
		 */
		frameRateFps: FormControl<number | null | undefined>,

		/**
		 * The encoded video content's height in pixels.
		 * Type: uint, 0 to 4,294,967,295
		 */
		heightPixels: FormControl<number | null | undefined>,

		/** The amount that YouTube needs to rotate the original source content to properly display the video. */
		rotation: FormControl<VideoFileDetailsVideoStreamRotation | null | undefined>,

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor: FormControl<string | null | undefined>,

		/**
		 * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
		 * Type: uint, 0 to 4,294,967,295
		 */
		widthPixels: FormControl<number | null | undefined>,
	}
	export function CreateVideoFileDetailsVideoStreamFormGroup() {
		return new FormGroup<VideoFileDetailsVideoStreamFormProperties>({
			aspectRatio: new FormControl<number | null | undefined>(undefined),
			bitrateBps: new FormControl<string | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			frameRateFps: new FormControl<number | null | undefined>(undefined),
			heightPixels: new FormControl<number | null | undefined>(undefined),
			rotation: new FormControl<VideoFileDetailsVideoStreamRotation | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			widthPixels: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VideoFileDetailsVideoStreamRotation { none = 'none', clockwise = 'clockwise', upsideDown = 'upsideDown', counterClockwise = 'counterClockwise', other = 'other' }


	/** Details about the live streaming metadata. */
	export interface VideoLiveStreamingDetails {

		/** The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page. */
		activeLiveChatId?: string | null;

		/** The time that the broadcast actually ended. This value will not be available until the broadcast is over. */
		actualEndTime?: Date | null;

		/** The time that the broadcast actually started. This value will not be available until the broadcast begins. */
		actualStartTime?: Date | null;

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers?: string | null;

		/** The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to contiue indefinitely. */
		scheduledEndTime?: Date | null;

		/** The time that the broadcast is scheduled to begin. */
		scheduledStartTime?: Date | null;
	}

	/** Details about the live streaming metadata. */
	export interface VideoLiveStreamingDetailsFormProperties {

		/** The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page. */
		activeLiveChatId: FormControl<string | null | undefined>,

		/** The time that the broadcast actually ended. This value will not be available until the broadcast is over. */
		actualEndTime: FormControl<Date | null | undefined>,

		/** The time that the broadcast actually started. This value will not be available until the broadcast begins. */
		actualStartTime: FormControl<Date | null | undefined>,

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers: FormControl<string | null | undefined>,

		/** The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to contiue indefinitely. */
		scheduledEndTime: FormControl<Date | null | undefined>,

		/** The time that the broadcast is scheduled to begin. */
		scheduledStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateVideoLiveStreamingDetailsFormGroup() {
		return new FormGroup<VideoLiveStreamingDetailsFormProperties>({
			activeLiveChatId: new FormControl<string | null | undefined>(undefined),
			actualEndTime: new FormControl<Date | null | undefined>(undefined),
			actualStartTime: new FormControl<Date | null | undefined>(undefined),
			concurrentViewers: new FormControl<string | null | undefined>(undefined),
			scheduledEndTime: new FormControl<Date | null | undefined>(undefined),
			scheduledStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Localized versions of certain video properties (e.g. title). */
	export interface VideoLocalization {

		/** Localized version of the video's description. */
		description?: string | null;

		/** Localized version of the video's title. */
		title?: string | null;
	}

	/** Localized versions of certain video properties (e.g. title). */
	export interface VideoLocalizationFormProperties {

		/** Localized version of the video's description. */
		description: FormControl<string | null | undefined>,

		/** Localized version of the video's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVideoLocalizationFormGroup() {
		return new FormGroup<VideoLocalizationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about monetization of a YouTube Video. */
	export interface VideoMonetizationDetails {

		/** Rights management policy for YouTube resources. */
		access?: AccessPolicy;
	}

	/** Details about monetization of a YouTube Video. */
	export interface VideoMonetizationDetailsFormProperties {
	}
	export function CreateVideoMonetizationDetailsFormGroup() {
		return new FormGroup<VideoMonetizationDetailsFormProperties>({
		});

	}


	/** Player to be used for a video playback. */
	export interface VideoPlayer {
		embedHeight?: string | null;

		/** An <iframe> tag that embeds a player that will play the video. */
		embedHtml?: string | null;

		/** The embed width */
		embedWidth?: string | null;
	}

	/** Player to be used for a video playback. */
	export interface VideoPlayerFormProperties {
		embedHeight: FormControl<string | null | undefined>,

		/** An <iframe> tag that embeds a player that will play the video. */
		embedHtml: FormControl<string | null | undefined>,

		/** The embed width */
		embedWidth: FormControl<string | null | undefined>,
	}
	export function CreateVideoPlayerFormGroup() {
		return new FormGroup<VideoPlayerFormProperties>({
			embedHeight: new FormControl<string | null | undefined>(undefined),
			embedHtml: new FormControl<string | null | undefined>(undefined),
			embedWidth: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes processing status and progress and availability of some other Video resource parts. */
	export interface VideoProcessingDetails {

		/** This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		editorSuggestionsAvailability?: string | null;

		/** This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request. */
		fileDetailsAvailability?: string | null;

		/** The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed. */
		processingFailureReason?: VideoProcessingDetailsProcessingFailureReason | null;

		/** This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		processingIssuesAvailability?: string | null;

		/** Video processing progress and completion time estimate. */
		processingProgress?: VideoProcessingDetailsProcessingProgress;

		/** The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed. */
		processingStatus?: VideoProcessingDetailsProcessingStatus | null;

		/** This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		tagSuggestionsAvailability?: string | null;

		/** This value indicates whether thumbnail images have been generated for the video. */
		thumbnailsAvailability?: string | null;
	}

	/** Describes processing status and progress and availability of some other Video resource parts. */
	export interface VideoProcessingDetailsFormProperties {

		/** This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		editorSuggestionsAvailability: FormControl<string | null | undefined>,

		/** This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request. */
		fileDetailsAvailability: FormControl<string | null | undefined>,

		/** The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed. */
		processingFailureReason: FormControl<VideoProcessingDetailsProcessingFailureReason | null | undefined>,

		/** This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		processingIssuesAvailability: FormControl<string | null | undefined>,

		/** The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed. */
		processingStatus: FormControl<VideoProcessingDetailsProcessingStatus | null | undefined>,

		/** This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. */
		tagSuggestionsAvailability: FormControl<string | null | undefined>,

		/** This value indicates whether thumbnail images have been generated for the video. */
		thumbnailsAvailability: FormControl<string | null | undefined>,
	}
	export function CreateVideoProcessingDetailsFormGroup() {
		return new FormGroup<VideoProcessingDetailsFormProperties>({
			editorSuggestionsAvailability: new FormControl<string | null | undefined>(undefined),
			fileDetailsAvailability: new FormControl<string | null | undefined>(undefined),
			processingFailureReason: new FormControl<VideoProcessingDetailsProcessingFailureReason | null | undefined>(undefined),
			processingIssuesAvailability: new FormControl<string | null | undefined>(undefined),
			processingStatus: new FormControl<VideoProcessingDetailsProcessingStatus | null | undefined>(undefined),
			tagSuggestionsAvailability: new FormControl<string | null | undefined>(undefined),
			thumbnailsAvailability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoProcessingDetailsProcessingFailureReason { uploadFailed = 'uploadFailed', transcodeFailed = 'transcodeFailed', streamingFailed = 'streamingFailed', other = 'other' }


	/** Video processing progress and completion time estimate. */
	export interface VideoProcessingDetailsProcessingProgress {

		/** The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video. */
		partsProcessed?: string | null;

		/** An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video. */
		partsTotal?: string | null;

		/** An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video. */
		timeLeftMs?: string | null;
	}

	/** Video processing progress and completion time estimate. */
	export interface VideoProcessingDetailsProcessingProgressFormProperties {

		/** The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video. */
		partsProcessed: FormControl<string | null | undefined>,

		/** An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video. */
		partsTotal: FormControl<string | null | undefined>,

		/** An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video. */
		timeLeftMs: FormControl<string | null | undefined>,
	}
	export function CreateVideoProcessingDetailsProcessingProgressFormGroup() {
		return new FormGroup<VideoProcessingDetailsProcessingProgressFormProperties>({
			partsProcessed: new FormControl<string | null | undefined>(undefined),
			partsTotal: new FormControl<string | null | undefined>(undefined),
			timeLeftMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoProcessingDetailsProcessingStatus { processing = 'processing', succeeded = 'succeeded', failed = 'failed', terminated = 'terminated' }


	/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
	export interface VideoProjectDetails {
	}

	/** DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677 */
	export interface VideoProjectDetailsFormProperties {
	}
	export function CreateVideoProjectDetailsFormGroup() {
		return new FormGroup<VideoProjectDetailsFormProperties>({
		});

	}


	/** Recording information associated with the video. */
	export interface VideoRecordingDetails {

		/** Geographical coordinates of a point, in WGS84. */
		location?: GeoPoint;

		/** The text description of the location where the video was recorded. */
		locationDescription?: string | null;

		/** The date and time when the video was recorded. */
		recordingDate?: Date | null;
	}

	/** Recording information associated with the video. */
	export interface VideoRecordingDetailsFormProperties {

		/** The text description of the location where the video was recorded. */
		locationDescription: FormControl<string | null | undefined>,

		/** The date and time when the video was recorded. */
		recordingDate: FormControl<Date | null | undefined>,
	}
	export function CreateVideoRecordingDetailsFormGroup() {
		return new FormGroup<VideoRecordingDetailsFormProperties>({
			locationDescription: new FormControl<string | null | undefined>(undefined),
			recordingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Basic details about a video, including title, description, uploader, thumbnails and category. */
	export interface VideoSnippet {

		/** The YouTube video category associated with the video. */
		categoryId?: string | null;

		/** The ID that YouTube uses to uniquely identify the channel that the video was uploaded to. */
		channelId?: string | null;

		/** Channel title for the channel that the video belongs to. */
		channelTitle?: string | null;

		/** The default_audio_language property specifies the language spoken in the video's default audio track. */
		defaultAudioLanguage?: string | null;

		/** The language of the videos's default snippet. */
		defaultLanguage?: string | null;

		/** The video's description. @mutable youtube.videos.insert youtube.videos.update */
		description?: string | null;

		/** Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast. */
		liveBroadcastContent?: SearchResultSnippetLiveBroadcastContent | null;

		/** Localized versions of certain video properties (e.g. title). */
		localized?: VideoLocalization;

		/** The date and time when the video was uploaded. */
		publishedAt?: Date | null;

		/** A list of keyword tags associated with the video. Tags may contain spaces. */
		tags?: Array<string>;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The video's title. @mutable youtube.videos.insert youtube.videos.update */
		title?: string | null;
	}

	/** Basic details about a video, including title, description, uploader, thumbnails and category. */
	export interface VideoSnippetFormProperties {

		/** The YouTube video category associated with the video. */
		categoryId: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the channel that the video was uploaded to. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel that the video belongs to. */
		channelTitle: FormControl<string | null | undefined>,

		/** The default_audio_language property specifies the language spoken in the video's default audio track. */
		defaultAudioLanguage: FormControl<string | null | undefined>,

		/** The language of the videos's default snippet. */
		defaultLanguage: FormControl<string | null | undefined>,

		/** The video's description. @mutable youtube.videos.insert youtube.videos.update */
		description: FormControl<string | null | undefined>,

		/** Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast. */
		liveBroadcastContent: FormControl<SearchResultSnippetLiveBroadcastContent | null | undefined>,

		/** The date and time when the video was uploaded. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The video's title. @mutable youtube.videos.insert youtube.videos.update */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVideoSnippetFormGroup() {
		return new FormGroup<VideoSnippetFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			defaultAudioLanguage: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			liveBroadcastContent: new FormControl<SearchResultSnippetLiveBroadcastContent | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics about the video, such as the number of times the video was viewed or liked. */
	export interface VideoStatistics {

		/** The number of comments for the video. */
		commentCount?: string | null;

		/** The number of users who have indicated that they disliked the video by giving it a negative rating. */
		dislikeCount?: string | null;

		/** The number of users who currently have the video marked as a favorite video. */
		favoriteCount?: string | null;

		/** The number of users who have indicated that they liked the video by giving it a positive rating. */
		likeCount?: string | null;

		/** The number of times the video has been viewed. */
		viewCount?: string | null;
	}

	/** Statistics about the video, such as the number of times the video was viewed or liked. */
	export interface VideoStatisticsFormProperties {

		/** The number of comments for the video. */
		commentCount: FormControl<string | null | undefined>,

		/** The number of users who have indicated that they disliked the video by giving it a negative rating. */
		dislikeCount: FormControl<string | null | undefined>,

		/** The number of users who currently have the video marked as a favorite video. */
		favoriteCount: FormControl<string | null | undefined>,

		/** The number of users who have indicated that they liked the video by giving it a positive rating. */
		likeCount: FormControl<string | null | undefined>,

		/** The number of times the video has been viewed. */
		viewCount: FormControl<string | null | undefined>,
	}
	export function CreateVideoStatisticsFormGroup() {
		return new FormGroup<VideoStatisticsFormProperties>({
			commentCount: new FormControl<string | null | undefined>(undefined),
			dislikeCount: new FormControl<string | null | undefined>(undefined),
			favoriteCount: new FormControl<string | null | undefined>(undefined),
			likeCount: new FormControl<string | null | undefined>(undefined),
			viewCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a video category, such as its localized title. Next Id: 18 */
	export interface VideoStatus {

		/** This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update */
		embeddable?: boolean | null;

		/** This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. */
		failureReason?: VideoStatusFailureReason | null;

		/** The video's license. @mutable youtube.videos.insert youtube.videos.update */
		license?: VideoStatusLicense | null;
		madeForKids?: boolean | null;

		/** The video's privacy status. */
		privacyStatus?: ChannelStatusPrivacyStatus | null;

		/** This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update */
		publicStatsViewable?: boolean | null;

		/** The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private.. */
		publishAt?: Date | null;

		/** This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected. */
		rejectionReason?: VideoStatusRejectionReason | null;
		selfDeclaredMadeForKids?: boolean | null;

		/** The status of the uploaded video. */
		uploadStatus?: VideoStatusUploadStatus | null;
	}

	/** Basic details about a video category, such as its localized title. Next Id: 18 */
	export interface VideoStatusFormProperties {

		/** This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update */
		embeddable: FormControl<boolean | null | undefined>,

		/** This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. */
		failureReason: FormControl<VideoStatusFailureReason | null | undefined>,

		/** The video's license. @mutable youtube.videos.insert youtube.videos.update */
		license: FormControl<VideoStatusLicense | null | undefined>,
		madeForKids: FormControl<boolean | null | undefined>,

		/** The video's privacy status. */
		privacyStatus: FormControl<ChannelStatusPrivacyStatus | null | undefined>,

		/** This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update */
		publicStatsViewable: FormControl<boolean | null | undefined>,

		/** The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private.. */
		publishAt: FormControl<Date | null | undefined>,

		/** This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected. */
		rejectionReason: FormControl<VideoStatusRejectionReason | null | undefined>,
		selfDeclaredMadeForKids: FormControl<boolean | null | undefined>,

		/** The status of the uploaded video. */
		uploadStatus: FormControl<VideoStatusUploadStatus | null | undefined>,
	}
	export function CreateVideoStatusFormGroup() {
		return new FormGroup<VideoStatusFormProperties>({
			embeddable: new FormControl<boolean | null | undefined>(undefined),
			failureReason: new FormControl<VideoStatusFailureReason | null | undefined>(undefined),
			license: new FormControl<VideoStatusLicense | null | undefined>(undefined),
			madeForKids: new FormControl<boolean | null | undefined>(undefined),
			privacyStatus: new FormControl<ChannelStatusPrivacyStatus | null | undefined>(undefined),
			publicStatsViewable: new FormControl<boolean | null | undefined>(undefined),
			publishAt: new FormControl<Date | null | undefined>(undefined),
			rejectionReason: new FormControl<VideoStatusRejectionReason | null | undefined>(undefined),
			selfDeclaredMadeForKids: new FormControl<boolean | null | undefined>(undefined),
			uploadStatus: new FormControl<VideoStatusUploadStatus | null | undefined>(undefined),
		});

	}

	export enum VideoStatusFailureReason { conversion = 'conversion', invalidFile = 'invalidFile', emptyFile = 'emptyFile', tooSmall = 'tooSmall', codec = 'codec', uploadAborted = 'uploadAborted' }

	export enum VideoStatusLicense { youtube = 'youtube', creativeCommon = 'creativeCommon' }

	export enum VideoStatusRejectionReason { copyright = 'copyright', inappropriate = 'inappropriate', duplicate = 'duplicate', termsOfUse = 'termsOfUse', uploaderAccountSuspended = 'uploaderAccountSuspended', length = 'length', claim = 'claim', uploaderAccountClosed = 'uploaderAccountClosed', trademark = 'trademark', legal = 'legal' }

	export enum VideoStatusUploadStatus { uploaded = 'uploaded', processed = 'processed', failed = 'failed', rejected = 'rejected', deleted = 'deleted' }


	/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
	export interface VideoSuggestions {

		/** A list of video editing operations that might improve the video quality or playback experience of the uploaded video. */
		editorSuggestions?: Array<string>;

		/** A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed. */
		processingErrors?: Array<string>;

		/** A list of suggestions that may improve YouTube's ability to process the video. */
		processingHints?: Array<string>;

		/** A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track. */
		processingWarnings?: Array<string>;

		/** A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube. */
		tagSuggestions?: Array<VideoSuggestionsTagSuggestion>;
	}

	/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
	export interface VideoSuggestionsFormProperties {
	}
	export function CreateVideoSuggestionsFormGroup() {
		return new FormGroup<VideoSuggestionsFormProperties>({
		});

	}


	/** A single tag suggestion with it's relevance information. */
	export interface VideoSuggestionsTagSuggestion {

		/** A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword. */
		categoryRestricts?: Array<string>;

		/** The keyword tag suggested for the video. */
		tag?: string | null;
	}

	/** A single tag suggestion with it's relevance information. */
	export interface VideoSuggestionsTagSuggestionFormProperties {

		/** The keyword tag suggested for the video. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateVideoSuggestionsTagSuggestionFormGroup() {
		return new FormGroup<VideoSuggestionsTagSuggestionFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Freebase topic information related to the video. */
	export interface VideoTopicDetails {

		/** Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API. */
		relevantTopicIds?: Array<string>;

		/** A list of Wikipedia URLs that provide a high-level description of the video's content. */
		topicCategories?: Array<string>;

		/** A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API">Freebase Topic API. */
		topicIds?: Array<string>;
	}

	/** Freebase topic information related to the video. */
	export interface VideoTopicDetailsFormProperties {
	}
	export function CreateVideoTopicDetailsFormGroup() {
		return new FormGroup<VideoTopicDetailsFormProperties>({
		});

	}

	export interface VideoAbuseReport {

		/** Additional comments regarding the abuse report. */
		comments?: string | null;

		/** The language that the content was viewed in. */
		language?: string | null;

		/** The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID. */
		reasonId?: string | null;

		/** The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason. */
		secondaryReasonId?: string | null;

		/** The ID that YouTube uses to uniquely identify the video. */
		videoId?: string | null;
	}
	export interface VideoAbuseReportFormProperties {

		/** Additional comments regarding the abuse report. */
		comments: FormControl<string | null | undefined>,

		/** The language that the content was viewed in. */
		language: FormControl<string | null | undefined>,

		/** The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID. */
		reasonId: FormControl<string | null | undefined>,

		/** The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason. */
		secondaryReasonId: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateVideoAbuseReportFormGroup() {
		return new FormGroup<VideoAbuseReportFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			reasonId: new FormControl<string | null | undefined>(undefined),
			secondaryReasonId: new FormControl<string | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`. */
	export interface VideoAbuseReportReason {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID of this abuse report reason. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`. */
		kind?: string | null;

		/** Basic details about a video category, such as its localized title. */
		snippet?: VideoAbuseReportReasonSnippet;
	}

	/** A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`. */
	export interface VideoAbuseReportReasonFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID of this abuse report reason. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateVideoAbuseReportReasonFormGroup() {
		return new FormGroup<VideoAbuseReportReasonFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a video category, such as its localized title. */
	export interface VideoAbuseReportReasonSnippet {

		/** The localized label belonging to this abuse report reason. */
		label?: string | null;

		/** The secondary reasons associated with this reason, if any are available. (There might be 0 or more.) */
		secondaryReasons?: Array<VideoAbuseReportSecondaryReason>;
	}

	/** Basic details about a video category, such as its localized title. */
	export interface VideoAbuseReportReasonSnippetFormProperties {

		/** The localized label belonging to this abuse report reason. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateVideoAbuseReportReasonSnippetFormGroup() {
		return new FormGroup<VideoAbuseReportReasonSnippetFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoAbuseReportSecondaryReason {

		/** The ID of this abuse report secondary reason. */
		id?: string | null;

		/** The localized label for this abuse report secondary reason. */
		label?: string | null;
	}
	export interface VideoAbuseReportSecondaryReasonFormProperties {

		/** The ID of this abuse report secondary reason. */
		id: FormControl<string | null | undefined>,

		/** The localized label for this abuse report secondary reason. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateVideoAbuseReportSecondaryReasonFormGroup() {
		return new FormGroup<VideoAbuseReportSecondaryReasonFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoAbuseReportReasonListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of valid abuse reasons that are used with `video.ReportAbuse`. */
		items?: Array<VideoAbuseReportReason>;

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`. */
		kind?: string | null;

		/** The `visitorId` identifies the visitor. */
		visitorId?: string | null;
	}
	export interface VideoAbuseReportReasonListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`. */
		kind: FormControl<string | null | undefined>,

		/** The `visitorId` identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateVideoAbuseReportReasonListResponseFormGroup() {
		return new FormGroup<VideoAbuseReportReasonListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos. */
	export interface VideoCategory {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the video category. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory". */
		kind?: string | null;

		/** Basic details about a video category, such as its localized title. */
		snippet?: VideoCategorySnippet;
	}

	/** A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos. */
	export interface VideoCategoryFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video category. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateVideoCategoryFormGroup() {
		return new FormGroup<VideoCategoryFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a video category, such as its localized title. */
	export interface VideoCategorySnippet {
		assignable?: boolean | null;

		/** The YouTube channel that created the video category. */
		channelId?: string | null;

		/** The video category's title. */
		title?: string | null;
	}

	/** Basic details about a video category, such as its localized title. */
	export interface VideoCategorySnippetFormProperties {
		assignable: FormControl<boolean | null | undefined>,

		/** The YouTube channel that created the video category. */
		channelId: FormControl<string | null | undefined>,

		/** The video category's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVideoCategorySnippetFormGroup() {
		return new FormGroup<VideoCategorySnippetFormProperties>({
			assignable: new FormControl<boolean | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoCategoryListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource. */
		items?: Array<VideoCategory>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface VideoCategoryListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateVideoCategoryListResponseFormGroup() {
		return new FormGroup<VideoCategoryListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoGetRatingResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of ratings that match the request criteria. */
		items?: Array<VideoRating>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface VideoGetRatingResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateVideoGetRatingResponseFormGroup() {
		return new FormGroup<VideoGetRatingResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about rating of a video. */
	export interface VideoRating {

		/** Rating of a video. */
		rating?: CommentSnippetViewerRating | null;

		/** The ID that YouTube uses to uniquely identify the video. */
		videoId?: string | null;
	}

	/** Basic details about rating of a video. */
	export interface VideoRatingFormProperties {

		/** Rating of a video. */
		rating: FormControl<CommentSnippetViewerRating | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateVideoRatingFormGroup() {
		return new FormGroup<VideoRatingFormProperties>({
			rating: new FormControl<CommentSnippetViewerRating | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;
		items?: Array<Video>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken?: string | null;

		/** Stub token pagination template to suppress results. */
		tokenPagination?: TokenPagination;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface VideoListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateVideoListResponseFormGroup() {
		return new FormGroup<VideoListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/abuseReports
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @return {AbuseReport} Successful response
		 */
		Youtube_abuseReports_insert(part: Array<string>, requestBody: AbuseReport): Observable<AbuseReport> {
			return this.http.post<AbuseReport>(this.baseUri + 'youtube/v3/abuseReports?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/activities
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {ActivityListResponse} Successful response
		 */
		Youtube_activities_list(part: Array<string>, channelId: string | null | undefined, home: boolean | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, pageToken: string | null | undefined, publishedAfter: string | null | undefined, publishedBefore: string | null | undefined, regionCode: string | null | undefined): Observable<ActivityListResponse> {
			return this.http.get<ActivityListResponse>(this.baseUri + 'youtube/v3/activities?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&home=' + home + '&maxResults=' + maxResults + '&mine=' + mine + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedAfter=' + (publishedAfter == null ? '' : encodeURIComponent(publishedAfter)) + '&publishedBefore=' + (publishedBefore == null ? '' : encodeURIComponent(publishedBefore)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), {});
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/captions
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_captions_delete(id: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/captions?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/captions
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
		 * @param {string} videoId Returns the captions for the specified video.
		 * @param {Array<string>} id Returns the captions with the given IDs for Stubby or Apiary.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is on behalf of.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {CaptionListResponse} Successful response
		 */
		Youtube_captions_list(part: Array<string>, videoId: string, id: Array<string> | null | undefined, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<CaptionListResponse> {
			return this.http.get<CaptionListResponse>(this.baseUri + 'youtube/v3/captions?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Downloads a caption track.
		 * Get youtube/v3/captions/{id}
		 * @param {string} id The ID of the caption track to download, required for One Platform.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} tfmt Convert the captions into this format. Supported options are sbv, srt, and vtt.
		 * @param {string} tlang tlang is the language code; machine translate the captions into this language.
		 * @return {void} Successful response
		 */
		Youtube_captions_download(id: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, tfmt: string | null | undefined, tlang: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'youtube/v3/captions/' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&tfmt=' + (tfmt == null ? '' : encodeURIComponent(tfmt)) + '&tlang=' + (tlang == null ? '' : encodeURIComponent(tlang)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/channelSections
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_channelSections_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/channelSections?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/channelSections
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
		 * @param {string} channelId Return the ChannelSections owned by the specified channel ID.
		 * @param {string} hl Return content in specified language
		 * @param {Array<string>} id Return the ChannelSections with the given IDs for Stubby or Apiary.
		 * @param {boolean} mine Return the ChannelSections owned by the authenticated user.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {ChannelSectionListResponse} Successful response
		 */
		Youtube_channelSections_list(part: Array<string>, channelId: string | null | undefined, hl: string | null | undefined, id: Array<string> | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<ChannelSectionListResponse> {
			return this.http.get<ChannelSectionListResponse>(this.baseUri + 'youtube/v3/channelSections?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/channelSections
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {ChannelSection} Successful response
		 */
		Youtube_channelSections_insert(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: ChannelSection): Observable<ChannelSection> {
			return this.http.post<ChannelSection>(this.baseUri + 'youtube/v3/channelSections?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/channelSections
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {ChannelSection} Successful response
		 */
		Youtube_channelSections_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: ChannelSection): Observable<ChannelSection> {
			return this.http.put<ChannelSection>(this.baseUri + 'youtube/v3/channelSections?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/channels
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
		 * @param {string} categoryId Return the channels within the specified guide category ID.
		 * @param {string} forUsername Return the channel associated with a YouTube username.
		 * @param {string} hl Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
		 * @param {Array<string>} id Return the channels with the specified IDs.
		 * @param {boolean} managedByMe Return the channels managed by the authenticated user.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {boolean} mine Return the ids of channels owned by the authenticated user.
		 * @param {boolean} mySubscribers Return the channels subscribed to the authenticated user
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {ChannelListResponse} Successful response
		 */
		Youtube_channels_list(part: Array<string>, categoryId: string | null | undefined, forUsername: string | null | undefined, hl: string | null | undefined, id: Array<string> | null | undefined, managedByMe: boolean | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, mySubscribers: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined): Observable<ChannelListResponse> {
			return this.http.get<ChannelListResponse>(this.baseUri + 'youtube/v3/channels?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&forUsername=' + (forUsername == null ? '' : encodeURIComponent(forUsername)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&managedByMe=' + managedByMe + '&maxResults=' + maxResults + '&mine=' + mine + '&mySubscribers=' + mySubscribers + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/channels
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
		 * @param {string} onBehalfOfContentOwner The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
		 * @return {Channel} Successful response
		 */
		Youtube_channels_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.put<Channel>(this.baseUri + 'youtube/v3/channels?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/commentThreads
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
		 * @param {string} allThreadsRelatedToChannelId Returns the comment threads of all videos of the channel and the channel comments as well.
		 * @param {string} channelId Returns the comment threads for all the channel comments (ie does not include comments left on videos).
		 * @param {Array<string>} id Returns the comment threads with the given IDs for Stubby or Apiary.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 1    Maximum: 100
		 * @param {CommentSnippetModerationStatus} moderationStatus Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} searchTerms Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
		 * @param {Youtube_commentThreads_listTextFormat} textFormat The requested text format for the returned comments.
		 * @param {string} videoId Returns the comment threads of the specified video.
		 * @return {CommentThreadListResponse} Successful response
		 */
		Youtube_commentThreads_list(part: Array<string>, allThreadsRelatedToChannelId: string | null | undefined, channelId: string | null | undefined, id: Array<string> | null | undefined, maxResults: number | null | undefined, moderationStatus: CommentSnippetModerationStatus | null | undefined, order: Youtube_commentThreads_listOrder | null | undefined, pageToken: string | null | undefined, searchTerms: string | null | undefined, textFormat: Youtube_commentThreads_listTextFormat | null | undefined, videoId: string | null | undefined): Observable<CommentThreadListResponse> {
			return this.http.get<CommentThreadListResponse>(this.baseUri + 'youtube/v3/commentThreads?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&allThreadsRelatedToChannelId=' + (allThreadsRelatedToChannelId == null ? '' : encodeURIComponent(allThreadsRelatedToChannelId)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&moderationStatus=' + moderationStatus + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&textFormat=' + textFormat + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/commentThreads
		 * @param {Array<string>} part The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
		 * @return {CommentThread} Successful response
		 */
		Youtube_commentThreads_insert(part: Array<string>, requestBody: CommentThread): Observable<CommentThread> {
			return this.http.post<CommentThread>(this.baseUri + 'youtube/v3/commentThreads?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/commentThreads
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
		 * @return {CommentThread} Successful response
		 */
		Youtube_youtube_v3_updateCommentThreads(part: Array<string> | null | undefined, requestBody: CommentThread): Observable<CommentThread> {
			return this.http.put<CommentThread>(this.baseUri + 'youtube/v3/commentThreads?' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/comments
		 * @return {void} Successful response
		 */
		Youtube_comments_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/comments?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/comments
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
		 * @param {Array<string>} id Returns the comments with the given IDs for One Platform.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} parentId Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
		 * @param {Youtube_commentThreads_listTextFormat} textFormat The requested text format for the returned comments.
		 * @return {CommentListResponse} Successful response
		 */
		Youtube_comments_list(part: Array<string>, id: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, parentId: string | null | undefined, textFormat: Youtube_commentThreads_listTextFormat | null | undefined): Observable<CommentListResponse> {
			return this.http.get<CommentListResponse>(this.baseUri + 'youtube/v3/comments?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&textFormat=' + textFormat, {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/comments
		 * @param {Array<string>} part The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
		 * @return {Comment} Successful response
		 */
		Youtube_comments_insert(part: Array<string>, requestBody: Comment): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'youtube/v3/comments?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/comments
		 * @param {Array<string>} part The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
		 * @return {Comment} Successful response
		 */
		Youtube_comments_update(part: Array<string>, requestBody: Comment): Observable<Comment> {
			return this.http.put<Comment>(this.baseUri + 'youtube/v3/comments?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Expresses the caller's opinion that one or more comments should be flagged as spam.
		 * Post youtube/v3/comments/markAsSpam
		 * @param {Array<string>} id Flags the comments with the given IDs as spam in the caller's opinion.
		 * @return {void} Successful response
		 */
		Youtube_comments_markAsSpam(id: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'youtube/v3/comments/markAsSpam?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the moderation status of one or more comments.
		 * Post youtube/v3/comments/setModerationStatus
		 * @param {Array<string>} id Modifies the moderation status of the comments with the given IDs
		 * @param {CommentSnippetModerationStatus} moderationStatus Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'.
		 * @param {boolean} banAuthor If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
		 * @return {void} Successful response
		 */
		Youtube_comments_setModerationStatus(id: Array<string>, moderationStatus: CommentSnippetModerationStatus, banAuthor: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'youtube/v3/comments/setModerationStatus?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&moderationStatus=' + moderationStatus + '&banAuthor=' + banAuthor, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/i18nLanguages
		 * @param {Array<string>} part The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
		 * @return {I18nLanguageListResponse} Successful response
		 */
		Youtube_i18nLanguages_list(part: Array<string>, hl: string | null | undefined): Observable<I18nLanguageListResponse> {
			return this.http.get<I18nLanguageListResponse>(this.baseUri + 'youtube/v3/i18nLanguages?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), {});
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/i18nRegions
		 * @param {Array<string>} part The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
		 * @return {I18nRegionListResponse} Successful response
		 */
		Youtube_i18nRegions_list(part: Array<string>, hl: string | null | undefined): Observable<I18nRegionListResponse> {
			return this.http.get<I18nRegionListResponse>(this.baseUri + 'youtube/v3/i18nRegions?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), {});
		}

		/**
		 * Delete a given broadcast.
		 * Delete youtube/v3/liveBroadcasts
		 * @param {string} id Broadcast to delete.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_delete(id: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/liveBroadcasts?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the list of broadcasts associated with the given channel.
		 * Get youtube/v3/liveBroadcasts
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
		 * @param {Youtube_liveBroadcasts_listBroadcastStatus} broadcastStatus Return broadcasts with a certain status, e.g. active broadcasts.
		 * @param {Youtube_liveBroadcasts_listBroadcastType} broadcastType Return only broadcasts with the selected type.
		 * @param {Array<string>} id Return broadcasts with the given ids from Stubby or Apiary.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {LiveBroadcastListResponse} Successful response
		 */
		Youtube_liveBroadcasts_list(part: Array<string>, broadcastStatus: Youtube_liveBroadcasts_listBroadcastStatus | null | undefined, broadcastType: Youtube_liveBroadcasts_listBroadcastType | null | undefined, id: Array<string> | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<LiveBroadcastListResponse> {
			return this.http.get<LiveBroadcastListResponse>(this.baseUri + 'youtube/v3/liveBroadcasts?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&broadcastStatus=' + broadcastStatus + '&broadcastType=' + broadcastType + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a new stream for the authenticated user.
		 * Post youtube/v3/liveBroadcasts
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {LiveBroadcast} Successful response
		 */
		Youtube_liveBroadcasts_insert(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveBroadcast): Observable<LiveBroadcast> {
			return this.http.post<LiveBroadcast>(this.baseUri + 'youtube/v3/liveBroadcasts?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing broadcast for the authenticated user.
		 * Put youtube/v3/liveBroadcasts
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {LiveBroadcast} Successful response
		 */
		Youtube_liveBroadcasts_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveBroadcast): Observable<LiveBroadcast> {
			return this.http.put<LiveBroadcast>(this.baseUri + 'youtube/v3/liveBroadcasts?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bind a broadcast to a stream.
		 * Post youtube/v3/liveBroadcasts/bind
		 * @param {string} id Broadcast to bind to the stream
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} streamId Stream to bind, if not set unbind the current one.
		 * @return {LiveBroadcast} Successful response
		 */
		Youtube_liveBroadcasts_bind(id: string, part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, streamId: string | null | undefined): Observable<LiveBroadcast> {
			return this.http.post<LiveBroadcast>(this.baseUri + 'youtube/v3/liveBroadcasts/bind?id=' + (id == null ? '' : encodeURIComponent(id)) + '&' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)), null, {});
		}

		/**
		 * Insert cuepoints in a broadcast
		 * Post youtube/v3/liveBroadcasts/cuepoint
		 * @param {string} id Broadcast to insert ads to, or equivalently `external_video_id` for internal use.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @return {Cuepoint} Successful response
		 */
		Youtube_liveBroadcasts_insertCuepoint(id: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, part: Array<string> | null | undefined, requestBody: Cuepoint): Observable<Cuepoint> {
			return this.http.post<Cuepoint>(this.baseUri + 'youtube/v3/liveBroadcasts/cuepoint?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transition a broadcast to a given status.
		 * Post youtube/v3/liveBroadcasts/transition
		 * @param {Youtube_liveBroadcasts_transitionBroadcastStatus} broadcastStatus The status to which the broadcast is going to transition.
		 * @param {string} id Broadcast to transition.
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {LiveBroadcast} Successful response
		 */
		Youtube_liveBroadcasts_transition(broadcastStatus: Youtube_liveBroadcasts_transitionBroadcastStatus, id: string, part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<LiveBroadcast> {
			return this.http.post<LiveBroadcast>(this.baseUri + 'youtube/v3/liveBroadcasts/transition?broadcastStatus=' + broadcastStatus + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), null, {});
		}

		/**
		 * Deletes a chat ban.
		 * Delete youtube/v3/liveChat/bans
		 * @return {void} Successful response
		 */
		Youtube_liveChatBans_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/liveChat/bans?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/liveChat/bans
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
		 * @return {LiveChatBan} Successful response
		 */
		Youtube_liveChatBans_insert(part: Array<string>, requestBody: LiveChatBan): Observable<LiveChatBan> {
			return this.http.post<LiveChatBan>(this.baseUri + 'youtube/v3/liveChat/bans?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a chat message.
		 * Delete youtube/v3/liveChat/messages
		 * @return {void} Successful response
		 */
		Youtube_liveChatMessages_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/liveChat/messages?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/liveChat/messages
		 * @param {string} liveChatId The id of the live chat for which comments should be returned.
		 * @param {Array<string>} part The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
		 * @param {string} hl Specifies the localization language in which the system messages should be returned.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 200    Maximum: 2000
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
		 * @param {number} profileImageSize Specifies the size of the profile image that should be returned for each user.
		 *     Minimum: 16    Maximum: 720
		 * @return {LiveChatMessageListResponse} Successful response
		 */
		Youtube_liveChatMessages_list(liveChatId: string, part: Array<string>, hl: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, profileImageSize: number | null | undefined): Observable<LiveChatMessageListResponse> {
			return this.http.get<LiveChatMessageListResponse>(this.baseUri + 'youtube/v3/liveChat/messages?liveChatId=' + (liveChatId == null ? '' : encodeURIComponent(liveChatId)) + '&' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&profileImageSize=' + profileImageSize, {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/liveChat/messages
		 * @param {Array<string>} part The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
		 * @return {LiveChatMessage} Successful response
		 */
		Youtube_liveChatMessages_insert(part: Array<string>, requestBody: LiveChatMessage): Observable<LiveChatMessage> {
			return this.http.post<LiveChatMessage>(this.baseUri + 'youtube/v3/liveChat/messages?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a chat moderator.
		 * Delete youtube/v3/liveChat/moderators
		 * @return {void} Successful response
		 */
		Youtube_liveChatModerators_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/liveChat/moderators?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/liveChat/moderators
		 * @param {string} liveChatId The id of the live chat for which moderators should be returned.
		 * @param {Array<string>} part The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {LiveChatModeratorListResponse} Successful response
		 */
		Youtube_liveChatModerators_list(liveChatId: string, part: Array<string>, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LiveChatModeratorListResponse> {
			return this.http.get<LiveChatModeratorListResponse>(this.baseUri + 'youtube/v3/liveChat/moderators?liveChatId=' + (liveChatId == null ? '' : encodeURIComponent(liveChatId)) + '&' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/liveChat/moderators
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
		 * @return {LiveChatModerator} Successful response
		 */
		Youtube_liveChatModerators_insert(part: Array<string>, requestBody: LiveChatModerator): Observable<LiveChatModerator> {
			return this.http.post<LiveChatModerator>(this.baseUri + 'youtube/v3/liveChat/moderators?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing stream for the authenticated user.
		 * Delete youtube/v3/liveStreams
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveStreams_delete(id: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/liveStreams?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the list of streams associated with the given channel. --
		 * Get youtube/v3/liveStreams
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
		 * @param {Array<string>} id Return LiveStreams with the given ids from Stubby or Apiary.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {LiveStreamListResponse} Successful response
		 */
		Youtube_liveStreams_list(part: Array<string>, id: Array<string> | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<LiveStreamListResponse> {
			return this.http.get<LiveStreamListResponse>(this.baseUri + 'youtube/v3/liveStreams?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a new stream for the authenticated user.
		 * Post youtube/v3/liveStreams
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {LiveStream} Successful response
		 */
		Youtube_liveStreams_insert(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveStream): Observable<LiveStream> {
			return this.http.post<LiveStream>(this.baseUri + 'youtube/v3/liveStreams?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing stream for the authenticated user.
		 * Put youtube/v3/liveStreams
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {LiveStream} Successful response
		 */
		Youtube_liveStreams_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveStream): Observable<LiveStream> {
			return this.http.put<LiveStream>(this.baseUri + 'youtube/v3/liveStreams?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of members that match the request criteria for a channel.
		 * Get youtube/v3/members
		 * @param {Array<string>} part The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
		 * @param {string} filterByMemberChannelId Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
		 * @param {string} hasAccessToLevel Filter members in the results set to the ones that have access to a level.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 1000
		 * @param {Youtube_members_listMode} mode Parameter that specifies which channel members to return.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {MemberListResponse} Successful response
		 */
		Youtube_members_list(part: Array<string>, filterByMemberChannelId: string | null | undefined, hasAccessToLevel: string | null | undefined, maxResults: number | null | undefined, mode: Youtube_members_listMode | null | undefined, pageToken: string | null | undefined): Observable<MemberListResponse> {
			return this.http.get<MemberListResponse>(this.baseUri + 'youtube/v3/members?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&filterByMemberChannelId=' + (filterByMemberChannelId == null ? '' : encodeURIComponent(filterByMemberChannelId)) + '&hasAccessToLevel=' + (hasAccessToLevel == null ? '' : encodeURIComponent(hasAccessToLevel)) + '&maxResults=' + maxResults + '&mode=' + mode + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves a list of all pricing levels offered by a creator to the fans.
		 * Get youtube/v3/membershipsLevels
		 * @param {Array<string>} part The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
		 * @return {MembershipsLevelListResponse} Successful response
		 */
		Youtube_membershipsLevels_list(part: Array<string>): Observable<MembershipsLevelListResponse> {
			return this.http.get<MembershipsLevelListResponse>(this.baseUri + 'youtube/v3/membershipsLevels?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/playlistImages
		 * @param {string} id Id to identify this image. This is returned from by the List method.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlistImages_delete(id: string | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/playlistImages?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/playlistImages
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} parent Return PlaylistImages for this playlist id.
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response.
		 * @return {PlaylistImageListResponse} Successful response
		 */
		Youtube_playlistImages_list(maxResults: number | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, part: Array<string> | null | undefined): Observable<PlaylistImageListResponse> {
			return this.http.get<PlaylistImageListResponse>(this.baseUri + 'youtube/v3/playlistImages?maxResults=' + maxResults + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/playlistImages
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {Array<string>} part The *part* parameter specifies the properties that the API response will include.
		 * @return {PlaylistImage} Successful response
		 */
		Youtube_playlistImages_insert(onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, part: Array<string> | null | undefined, requestBody: PlaylistImage): Observable<PlaylistImage> {
			return this.http.post<PlaylistImage>(this.baseUri + 'youtube/v3/playlistImages?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/playlistImages
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {Array<string>} part The *part* parameter specifies the properties that the API response will include.
		 * @return {PlaylistImage} Successful response
		 */
		Youtube_playlistImages_update(onBehalfOfContentOwner: string | null | undefined, part: Array<string> | null | undefined, requestBody: PlaylistImage): Observable<PlaylistImage> {
			return this.http.put<PlaylistImage>(this.baseUri + 'youtube/v3/playlistImages?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/playlistItems
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlistItems_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/playlistItems?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/playlistItems
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} playlistId Return the playlist items within the given playlist.
		 * @param {string} videoId Return the playlist items associated with the given video ID.
		 * @return {PlaylistItemListResponse} Successful response
		 */
		Youtube_playlistItems_list(part: Array<string>, id: Array<string> | null | undefined, maxResults: number | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined, playlistId: string | null | undefined, videoId: string | null | undefined): Observable<PlaylistItemListResponse> {
			return this.http.get<PlaylistItemListResponse>(this.baseUri + 'youtube/v3/playlistItems?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&playlistId=' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/playlistItems
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {PlaylistItem} Successful response
		 */
		Youtube_playlistItems_insert(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: PlaylistItem): Observable<PlaylistItem> {
			return this.http.post<PlaylistItem>(this.baseUri + 'youtube/v3/playlistItems?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/playlistItems
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {PlaylistItem} Successful response
		 */
		Youtube_playlistItems_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: PlaylistItem): Observable<PlaylistItem> {
			return this.http.put<PlaylistItem>(this.baseUri + 'youtube/v3/playlistItems?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/playlists
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlists_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/playlists?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/playlists
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
		 * @param {string} channelId Return the playlists owned by the specified channel ID.
		 * @param {string} hl Return content in specified language
		 * @param {Array<string>} id Return the playlists with the given IDs for Stubby or Apiary.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {boolean} mine Return the playlists owned by the authenticated user.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {PlaylistListResponse} Successful response
		 */
		Youtube_playlists_list(part: Array<string>, channelId: string | null | undefined, hl: string | null | undefined, id: Array<string> | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<PlaylistListResponse> {
			return this.http.get<PlaylistListResponse>(this.baseUri + 'youtube/v3/playlists?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/playlists
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {Playlist} Successful response
		 */
		Youtube_playlists_insert(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: Playlist): Observable<Playlist> {
			return this.http.post<Playlist>(this.baseUri + 'youtube/v3/playlists?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/playlists
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {Playlist} Successful response
		 */
		Youtube_playlists_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: Playlist): Observable<Playlist> {
			return this.http.put<Playlist>(this.baseUri + 'youtube/v3/playlists?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of search resources
		 * Get youtube/v3/search
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} channelId Filter on resources belonging to this channelId.
		 * @param {Youtube_search_listChannelType} channelType Add a filter on the channel search.
		 * @param {SearchResultSnippetLiveBroadcastContent} eventType Filter on the livestream status of the videos.
		 * @param {boolean} forContentOwner Search owned by a content owner.
		 * @param {boolean} forDeveloper Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
		 * @param {boolean} forMine Search for the private videos of the authenticated user.
		 * @param {string} location Filter on location of the video
		 * @param {string} locationRadius Filter on distance from the location (specified above).
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {Youtube_search_listOrder} order Sort order of the results.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} publishedAfter Filter on resources published after this date.
		 * @param {string} publishedBefore Filter on resources published before this date.
		 * @param {string} q Textual search terms to match.
		 * @param {string} regionCode Display the content as seen by viewers in this country.
		 * @param {string} relevanceLanguage Return results relevant to this language.
		 * @param {Youtube_search_listSafeSearch} safeSearch Indicates whether the search results should include restricted content as well as standard content.
		 * @param {string} topicId Restrict results to a particular topic.
		 * @param {Array<string>} type Restrict results to a particular set of resource types from One Platform.
		 * @param {Youtube_search_listVideoCaption} videoCaption Filter on the presence of captions on the videos.
		 * @param {string} videoCategoryId Filter on videos in a specific category.
		 * @param {Youtube_search_listVideoDefinition} videoDefinition Filter on the definition of the videos.
		 * @param {Youtube_search_listVideoDimension} videoDimension Filter on 3d videos.
		 * @param {Youtube_search_listVideoDuration} videoDuration Filter on the duration of the videos.
		 * @param {Youtube_search_listVideoEmbeddable} videoEmbeddable Filter on embeddable videos.
		 * @param {Youtube_search_listVideoLicense} videoLicense Filter on the license of the videos.
		 * @param {Youtube_search_listVideoSyndicated} videoSyndicated Filter on syndicated videos.
		 * @param {Youtube_search_listVideoType} videoType Filter on videos of a specific type.
		 * @return {SearchListResponse} Successful response
		 */
		Youtube_search_list(part: Array<string>, channelId: string | null | undefined, channelType: Youtube_search_listChannelType | null | undefined, eventType: SearchResultSnippetLiveBroadcastContent | null | undefined, forContentOwner: boolean | null | undefined, forDeveloper: boolean | null | undefined, forMine: boolean | null | undefined, location: string | null | undefined, locationRadius: string | null | undefined, maxResults: number | null | undefined, onBehalfOfContentOwner: string | null | undefined, order: Youtube_search_listOrder | null | undefined, pageToken: string | null | undefined, publishedAfter: string | null | undefined, publishedBefore: string | null | undefined, q: string | null | undefined, regionCode: string | null | undefined, relevanceLanguage: string | null | undefined, safeSearch: Youtube_search_listSafeSearch | null | undefined, topicId: string | null | undefined, type: Array<string> | null | undefined, videoCaption: Youtube_search_listVideoCaption | null | undefined, videoCategoryId: string | null | undefined, videoDefinition: Youtube_search_listVideoDefinition | null | undefined, videoDimension: Youtube_search_listVideoDimension | null | undefined, videoDuration: Youtube_search_listVideoDuration | null | undefined, videoEmbeddable: Youtube_search_listVideoEmbeddable | null | undefined, videoLicense: Youtube_search_listVideoLicense | null | undefined, videoPaidProductPlacement: Youtube_search_listVideoPaidProductPlacement | null | undefined, videoSyndicated: Youtube_search_listVideoSyndicated | null | undefined, videoType: Youtube_search_listVideoType | null | undefined): Observable<SearchListResponse> {
			return this.http.get<SearchListResponse>(this.baseUri + 'youtube/v3/search?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&channelType=' + channelType + '&eventType=' + eventType + '&forContentOwner=' + forContentOwner + '&forDeveloper=' + forDeveloper + '&forMine=' + forMine + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&locationRadius=' + (locationRadius == null ? '' : encodeURIComponent(locationRadius)) + '&maxResults=' + maxResults + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedAfter=' + (publishedAfter == null ? '' : encodeURIComponent(publishedAfter)) + '&publishedBefore=' + (publishedBefore == null ? '' : encodeURIComponent(publishedBefore)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&relevanceLanguage=' + (relevanceLanguage == null ? '' : encodeURIComponent(relevanceLanguage)) + '&safeSearch=' + safeSearch + '&topicId=' + (topicId == null ? '' : encodeURIComponent(topicId)) + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&videoCaption=' + videoCaption + '&videoCategoryId=' + (videoCategoryId == null ? '' : encodeURIComponent(videoCategoryId)) + '&videoDefinition=' + videoDefinition + '&videoDimension=' + videoDimension + '&videoDuration=' + videoDuration + '&videoEmbeddable=' + videoEmbeddable + '&videoLicense=' + videoLicense + '&videoPaidProductPlacement=' + videoPaidProductPlacement + '&videoSyndicated=' + videoSyndicated + '&videoType=' + videoType, {});
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/subscriptions
		 * @return {void} Successful response
		 */
		Youtube_subscriptions_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/subscriptions?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/subscriptions
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
		 * @param {string} channelId Return the subscriptions of the given channel owner.
		 * @param {string} forChannelId Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
		 * @param {Array<string>} id Return the subscriptions with the given IDs for Stubby or Apiary.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 0    Maximum: 50
		 * @param {boolean} mine Flag for returning the subscriptions of the authenticated user.
		 * @param {boolean} mySubscribers Return the subscribers of the given channel owner.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {Youtube_subscriptions_listOrder} order The order of the returned subscriptions
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {SubscriptionListResponse} Successful response
		 */
		Youtube_subscriptions_list(part: Array<string>, channelId: string | null | undefined, forChannelId: string | null | undefined, id: Array<string> | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, myRecentSubscribers: boolean | null | undefined, mySubscribers: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, order: Youtube_subscriptions_listOrder | null | undefined, pageToken: string | null | undefined): Observable<SubscriptionListResponse> {
			return this.http.get<SubscriptionListResponse>(this.baseUri + 'youtube/v3/subscriptions?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&forChannelId=' + (forChannelId == null ? '' : encodeURIComponent(forChannelId)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&mine=' + mine + '&myRecentSubscribers=' + myRecentSubscribers + '&mySubscribers=' + mySubscribers + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/subscriptions
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @return {Subscription} Successful response
		 */
		Youtube_subscriptions_insert(part: Array<string>, requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'youtube/v3/subscriptions?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/superChatEvents
		 * @param {Array<string>} part The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.
		 * @param {string} hl Return rendered funding amounts in specified language.
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {SuperChatEventListResponse} Successful response
		 */
		Youtube_superChatEvents_list(part: Array<string>, hl: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<SuperChatEventListResponse> {
			return this.http.get<SuperChatEventListResponse>(this.baseUri + 'youtube/v3/superChatEvents?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * POST method.
		 * Post youtube/v3/tests
		 * @return {TestItem} Successful response
		 */
		Youtube_tests_insert(part: Array<string>, externalChannelId: string | null | undefined, requestBody: TestItem): Observable<TestItem> {
			return this.http.post<TestItem>(this.baseUri + 'youtube/v3/tests?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&externalChannelId=' + (externalChannelId == null ? '' : encodeURIComponent(externalChannelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/thirdPartyLinks
		 * @param {string} linkingToken Delete the partner links with the given linking token.
		 * @param {ThirdPartyLinkSnippetType} type Type of the link to be deleted.
		 * @param {string} externalChannelId Channel ID to which changes should be applied, for delegation.
		 * @param {Array<string>} part Do not use. Required for compatibility.
		 * @return {void} Successful response
		 */
		Youtube_thirdPartyLinks_delete(linkingToken: string, type: ThirdPartyLinkSnippetType, externalChannelId: string | null | undefined, part: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/thirdPartyLinks?linkingToken=' + (linkingToken == null ? '' : encodeURIComponent(linkingToken)) + '&type=' + type + '&externalChannelId=' + (externalChannelId == null ? '' : encodeURIComponent(externalChannelId)) + '&' + part?.map(z => `part=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/thirdPartyLinks
		 * @param {Array<string>} part The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
		 * @param {string} externalChannelId Channel ID to which changes should be applied, for delegation.
		 * @param {string} linkingToken Get a third party link with the given linking token.
		 * @param {ThirdPartyLinkSnippetType} type Get a third party link of the given type.
		 * @return {ThirdPartyLinkListResponse} Successful response
		 */
		Youtube_thirdPartyLinks_list(part: Array<string>, externalChannelId: string | null | undefined, linkingToken: string | null | undefined, type: ThirdPartyLinkSnippetType | null | undefined): Observable<ThirdPartyLinkListResponse> {
			return this.http.get<ThirdPartyLinkListResponse>(this.baseUri + 'youtube/v3/thirdPartyLinks?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&externalChannelId=' + (externalChannelId == null ? '' : encodeURIComponent(externalChannelId)) + '&linkingToken=' + (linkingToken == null ? '' : encodeURIComponent(linkingToken)) + '&type=' + type, {});
		}

		/**
		 * Inserts a new resource into this collection.
		 * Post youtube/v3/thirdPartyLinks
		 * @param {Array<string>} part The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
		 * @param {string} externalChannelId Channel ID to which changes should be applied, for delegation.
		 * @return {ThirdPartyLink} Successful response
		 */
		Youtube_thirdPartyLinks_insert(part: Array<string>, externalChannelId: string | null | undefined, requestBody: ThirdPartyLink): Observable<ThirdPartyLink> {
			return this.http.post<ThirdPartyLink>(this.baseUri + 'youtube/v3/thirdPartyLinks?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&externalChannelId=' + (externalChannelId == null ? '' : encodeURIComponent(externalChannelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/thirdPartyLinks
		 * @param {Array<string>} part The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
		 * @param {string} externalChannelId Channel ID to which changes should be applied, for delegation.
		 * @return {ThirdPartyLink} Successful response
		 */
		Youtube_thirdPartyLinks_update(part: Array<string>, externalChannelId: string | null | undefined, requestBody: ThirdPartyLink): Observable<ThirdPartyLink> {
			return this.http.put<ThirdPartyLink>(this.baseUri + 'youtube/v3/thirdPartyLinks?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&externalChannelId=' + (externalChannelId == null ? '' : encodeURIComponent(externalChannelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.
		 * Post youtube/v3/thumbnails/set
		 * @param {string} videoId Returns the Thumbnail with the given video IDs for Stubby or Apiary.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {ThumbnailSetResponse} Successful response
		 */
		Youtube_thumbnails_set(videoId: string, onBehalfOfContentOwner: string | null | undefined): Observable<ThumbnailSetResponse> {
			return this.http.post<ThumbnailSetResponse>(this.baseUri + 'youtube/v3/thumbnails/set?videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), null, {});
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/videoAbuseReportReasons
		 * @param {Array<string>} part The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
		 * @return {VideoAbuseReportReasonListResponse} Successful response
		 */
		Youtube_videoAbuseReportReasons_list(part: Array<string>, hl: string | null | undefined): Observable<VideoAbuseReportReasonListResponse> {
			return this.http.get<VideoAbuseReportReasonListResponse>(this.baseUri + 'youtube/v3/videoAbuseReportReasons?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), {});
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/videoCategories
		 * @param {Array<string>} part The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {Array<string>} id Returns the video categories with the given IDs for Stubby or Apiary.
		 * @return {VideoCategoryListResponse} Successful response
		 */
		Youtube_videoCategories_list(part: Array<string>, hl: string | null | undefined, id: Array<string> | null | undefined, regionCode: string | null | undefined): Observable<VideoCategoryListResponse> {
			return this.http.get<VideoCategoryListResponse>(this.baseUri + 'youtube/v3/videoCategories?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), {});
		}

		/**
		 * Deletes a resource.
		 * Delete youtube/v3/videos
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'youtube/v3/videos?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of resources, possibly filtered.
		 * Get youtube/v3/videos
		 * @param {Array<string>} part The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
		 * @param {Youtube_videos_listChart} chart Return the videos that are in the specified chart.
		 * @param {string} hl Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
		 * @param {Array<string>} id Return videos with the given ids.
		 * @param {number} maxHeight Minimum: 72
		 *     Maximum: 8192
		 * @param {number} maxResults The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
		 *     Minimum: 1    Maximum: 50
		 * @param {number} maxWidth Return the player with maximum height specified in
		 *     Minimum: 72    Maximum: 8192
		 * @param {CommentSnippetViewerRating} myRating Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
		 * @param {string} regionCode Use a chart that is specific to the specified region
		 * @param {string} videoCategoryId Use chart that is specific to the specified video category
		 * @return {VideoListResponse} Successful response
		 */
		Youtube_videos_list(part: Array<string>, chart: Youtube_videos_listChart | null | undefined, hl: string | null | undefined, id: Array<string> | null | undefined, locale: string | null | undefined, maxHeight: number | null | undefined, maxResults: number | null | undefined, maxWidth: number | null | undefined, myRating: CommentSnippetViewerRating | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined, regionCode: string | null | undefined, videoCategoryId: string | null | undefined): Observable<VideoListResponse> {
			return this.http.get<VideoListResponse>(this.baseUri + 'youtube/v3/videos?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&chart=' + chart + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxHeight=' + maxHeight + '&maxResults=' + maxResults + '&maxWidth=' + maxWidth + '&myRating=' + myRating + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&videoCategoryId=' + (videoCategoryId == null ? '' : encodeURIComponent(videoCategoryId)), {});
		}

		/**
		 * Updates an existing resource.
		 * Put youtube/v3/videos
		 * @param {Array<string>} part The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {Video} Successful response
		 */
		Youtube_videos_update(part: Array<string>, onBehalfOfContentOwner: string | null | undefined, requestBody: Video): Observable<Video> {
			return this.http.put<Video>(this.baseUri + 'youtube/v3/videos?' + part.map(z => `part=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the ratings that the authorized user gave to a list of specified videos.
		 * Get youtube/v3/videos/getRating
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {VideoGetRatingResponse} Successful response
		 */
		Youtube_videos_getRating(id: Array<string>, onBehalfOfContentOwner: string | null | undefined): Observable<VideoGetRatingResponse> {
			return this.http.get<VideoGetRatingResponse>(this.baseUri + 'youtube/v3/videos/getRating?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), {});
		}

		/**
		 * Adds a like or dislike rating to a video or removes a rating from a video.
		 * Post youtube/v3/videos/rate
		 * @return {void} Successful response
		 */
		Youtube_videos_rate(id: string, rating: CommentSnippetViewerRating): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'youtube/v3/videos/rate?id=' + (id == null ? '' : encodeURIComponent(id)) + '&rating=' + rating, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Report abuse for a video.
		 * Post youtube/v3/videos/reportAbuse
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_reportAbuse(onBehalfOfContentOwner: string | null | undefined, requestBody: VideoAbuseReport): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'youtube/v3/videos/reportAbuse?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows removal of channel watermark.
		 * Post youtube/v3/watermarks/unset
		 * @param {string} onBehalfOfContentOwner *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_watermarks_unset(channelId: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'youtube/v3/watermarks/unset?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Youtube_commentThreads_listOrder { orderUnspecified = 'orderUnspecified', time = 'time', relevance = 'relevance' }

	export enum Youtube_commentThreads_listTextFormat { textFormatUnspecified = 'textFormatUnspecified', html = 'html', plainText = 'plainText' }

	export enum Youtube_liveBroadcasts_listBroadcastStatus { broadcastStatusFilterUnspecified = 'broadcastStatusFilterUnspecified', all = 'all', active = 'active', upcoming = 'upcoming', completed = 'completed' }

	export enum Youtube_liveBroadcasts_listBroadcastType { broadcastTypeFilterUnspecified = 'broadcastTypeFilterUnspecified', all = 'all', event = 'event', persistent = 'persistent' }

	export enum Youtube_liveBroadcasts_transitionBroadcastStatus { statusUnspecified = 'statusUnspecified', testing = 'testing', live = 'live', complete = 'complete' }

	export enum Youtube_members_listMode { listMembersModeUnknown = 'listMembersModeUnknown', updates = 'updates', all_current = 'all_current' }

	export enum Youtube_search_listChannelType { channelTypeUnspecified = 'channelTypeUnspecified', any = 'any', show = 'show' }

	export enum Youtube_search_listOrder { searchSortUnspecified = 'searchSortUnspecified', date = 'date', rating = 'rating', viewCount = 'viewCount', relevance = 'relevance', title = 'title', videoCount = 'videoCount' }

	export enum Youtube_search_listSafeSearch { safeSearchSettingUnspecified = 'safeSearchSettingUnspecified', none = 'none', moderate = 'moderate', strict = 'strict' }

	export enum Youtube_search_listVideoCaption { videoCaptionUnspecified = 'videoCaptionUnspecified', any = 'any', closedCaption = 'closedCaption', none = 'none' }

	export enum Youtube_search_listVideoDefinition { any = 'any', standard = 'standard', high = 'high' }

	export enum Youtube_search_listVideoDimension { any = 'any', '2d' = '2d', '3d' = '3d' }

	export enum Youtube_search_listVideoDuration { videoDurationUnspecified = 'videoDurationUnspecified', any = 'any', short = 'short', medium = 'medium', long = 'long' }

	export enum Youtube_search_listVideoEmbeddable { videoEmbeddableUnspecified = 'videoEmbeddableUnspecified', any = 'any', true = 'true' }

	export enum Youtube_search_listVideoLicense { any = 'any', youtube = 'youtube', creativeCommon = 'creativeCommon' }

	export enum Youtube_search_listVideoPaidProductPlacement { videoPaidProductPlacementUnspecified = 'videoPaidProductPlacementUnspecified', any = 'any', true = 'true' }

	export enum Youtube_search_listVideoSyndicated { videoSyndicatedUnspecified = 'videoSyndicatedUnspecified', any = 'any', true = 'true' }

	export enum Youtube_search_listVideoType { videoTypeUnspecified = 'videoTypeUnspecified', any = 'any', movie = 'movie', episode = 'episode' }

	export enum Youtube_subscriptions_listOrder { subscriptionOrderUnspecified = 'subscriptionOrderUnspecified', relevance = 'relevance', unread = 'unread', alphabetical = 'alphabetical' }

	export enum Youtube_videos_listChart { chartUnspecified = 'chartUnspecified', mostPopular = 'mostPopular' }

}

