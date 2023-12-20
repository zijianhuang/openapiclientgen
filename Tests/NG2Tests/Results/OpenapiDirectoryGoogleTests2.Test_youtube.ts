import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
	export interface Activity {

		/** Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc. */
		contentDetails?: ActivityContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the activity. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#activity". */
		kind?: string | null;

		/** Basic details about an activity, including title, description, thumbnails, activity type and group. */
		snippet?: ActivitySnippet;
	}

	/** An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded. */
	export interface ActivityFormProperties {

		/** Etag of this resource. */
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

	export enum ActivityContentDetailsPromotedItemCtaType { unspecified = 0, visitAdvertiserSite = 1 }


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

	export enum ActivityContentDetailsRecommendationReason { unspecified = 0, videoFavorited = 1, videoLiked = 2, videoWatched = 3 }


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

	export enum ActivityContentDetailsSocialType { facebook = 0, googlePlus = 1, twitter = 2, unspecified = 3 }


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


	/** Basic details about an activity, including title, description, thumbnails, activity type and group. */
	export interface ActivitySnippet {

		/** The ID that YouTube uses to uniquely identify the channel associated with the activity. */
		channelId?: string | null;

		/** Channel title for the channel responsible for this activity */
		channelTitle?: string | null;

		/** The description of the resource primarily associated with the activity. */
		description?: string | null;

		/** The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. */
		groupId?: string | null;

		/** The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The title of the resource primarily associated with the activity. */
		title?: string | null;

		/** The type of activity that the resource describes. */
		type?: ActivitySnippetType | null;
	}

	/** Basic details about an activity, including title, description, thumbnails, activity type and group. */
	export interface ActivitySnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the channel associated with the activity. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel responsible for this activity */
		channelTitle: FormControl<string | null | undefined>,

		/** The description of the resource primarily associated with the activity. */
		description: FormControl<string | null | undefined>,

		/** The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. */
		groupId: FormControl<string | null | undefined>,

		/** The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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
		default?: Thumbnail;

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

		/** (Optional) Height of the thumbnail image. */
		height?: string | null;

		/** The thumbnail image's URL. */
		url?: string | null;

		/** (Optional) Width of the thumbnail image. */
		width?: string | null;
	}

	/** A thumbnail is an image representing a YouTube resource. */
	export interface ThumbnailFormProperties {

		/** (Optional) Height of the thumbnail image. */
		height: FormControl<string | null | undefined>,

		/** The thumbnail image's URL. */
		url: FormControl<string | null | undefined>,

		/** (Optional) Width of the thumbnail image. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivitySnippetType { bulletin = 0, channelItem = 1, comment = 2, favorite = 3, like = 4, playlistItem = 5, promotedItem = 6, recommendation = 7, social = 8, subscription = 9, upload = 10 }

	export interface ActivityListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of activities, or events, that match the request criteria. */
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

		/** The number of results included in the API response. */
		resultsPerPage?: number | null;

		/** The total number of results in the result set. */
		totalResults?: number | null;
	}

	/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
	export interface PageInfoFormProperties {

		/** The number of results included in the API response. */
		resultsPerPage: FormControl<number | null | undefined>,

		/** The total number of results in the result set. */
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


	/** A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
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

	/** A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video. */
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

		/** Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. */
		isDraft?: boolean | null;

		/** Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false. */
		isEasyReader?: boolean | null;

		/** Indicates whether the caption track uses large text for the vision-impaired. The default value is false. */
		isLarge?: boolean | null;

		/** The language of the caption track. The property value is a BCP-47 language tag. */
		language?: string | null;

		/** The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		lastUpdated?: Date | null;

		/** The name of the caption track. The name is intended to be visible to the user as an option during playback. */
		name?: string | null;

		/** The caption track's status. */
		status?: CaptionSnippetStatus | null;

		/** The caption track's type. */
		trackKind?: CaptionSnippetTrackKind | null;

		/** The ID that YouTube uses to uniquely identify the video associated with the caption track. */
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

		/** Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. */
		isDraft: FormControl<boolean | null | undefined>,

		/** Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false. */
		isEasyReader: FormControl<boolean | null | undefined>,

		/** Indicates whether the caption track uses large text for the vision-impaired. The default value is false. */
		isLarge: FormControl<boolean | null | undefined>,

		/** The language of the caption track. The property value is a BCP-47 language tag. */
		language: FormControl<string | null | undefined>,

		/** The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The name of the caption track. The name is intended to be visible to the user as an option during playback. */
		name: FormControl<string | null | undefined>,

		/** The caption track's status. */
		status: FormControl<CaptionSnippetStatus | null | undefined>,

		/** The caption track's type. */
		trackKind: FormControl<CaptionSnippetTrackKind | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video associated with the caption track. */
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

	export enum CaptionSnippetAudioTrackType { commentary = 0, descriptive = 1, primary = 2, unknown = 3 }

	export enum CaptionSnippetFailureReason { processingFailed = 0, unknownFormat = 1, unsupportedFormat = 2 }

	export enum CaptionSnippetStatus { failed = 0, serving = 1, syncing = 2 }

	export enum CaptionSnippetTrackKind { ASR = 0, forced = 1, standard = 2 }

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

		/** Describes information necessary for ingesting an RTMP or an HTTP stream. */
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

	export enum CdnSettingsFrameRate { _30fps = 0, _60fps = 1, variable = 2 }


	/** Describes information necessary for ingesting an RTMP or an HTTP stream. */
	export interface IngestionInfo {

		/** The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. */
		backupIngestionAddress?: string | null;

		/**
		 * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.
		 * Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:
		 * STREAM_URL/STREAM_NAME
		 */
		ingestionAddress?: string | null;

		/** The HTTP or RTMP stream name that YouTube assigns to the video stream. */
		streamName?: string | null;
	}

	/** Describes information necessary for ingesting an RTMP or an HTTP stream. */
	export interface IngestionInfoFormProperties {

		/** The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL. */
		backupIngestionAddress: FormControl<string | null | undefined>,

		/**
		 * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.
		 * Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:
		 * STREAM_URL/STREAM_NAME
		 */
		ingestionAddress: FormControl<string | null | undefined>,

		/** The HTTP or RTMP stream name that YouTube assigns to the video stream. */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateIngestionInfoFormGroup() {
		return new FormGroup<IngestionInfoFormProperties>({
			backupIngestionAddress: new FormControl<string | null | undefined>(undefined),
			ingestionAddress: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CdnSettingsIngestionType { dash = 0, hls = 1, rtmp = 2, webrtc = 3 }

	export enum CdnSettingsResolution { _1080p = 0, _1440p = 1, _2160p = 2, _240p = 3, _360p = 4, _480p = 5, _720p = 6, variable = 7 }


	/** A channel resource contains information about a YouTube channel. */
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

		/** Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id. */
		invideoPromotion?: InvideoPromotion;

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

	/** A channel resource contains information about a YouTube channel. */
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

		/** This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs. */
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

		/** The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels. */
		watchIconImageUrl?: string | null;
	}

	/** Branding properties for images associated with the channel. */
	export interface ImageSettingsFormProperties {

		/** This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs. */
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

		/** The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels. */
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
		default?: string | null;
		defaultLanguage?: LanguageTag;
		localized?: Array<LocalizedString>;
	}
	export interface LocalizedPropertyFormProperties {
		default: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedPropertyFormGroup() {
		return new FormGroup<LocalizedPropertyFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
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

		/** The ID of the playlist that contains the channel"s favorite videos. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		favorites?: string | null;

		/** The ID of the playlist that contains the channel"s liked videos. Use the   playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		likes?: string | null;

		/** The ID of the playlist that contains the channel"s uploaded videos. Use the  videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos. */
		uploads?: string | null;

		/** The ID of the playlist that contains the channel"s watch history. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		watchHistory?: string | null;

		/** The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		watchLater?: string | null;
	}
	export interface ChannelContentDetailsRelatedPlaylistsFormProperties {

		/** The ID of the playlist that contains the channel"s favorite videos. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		favorites: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s liked videos. Use the   playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		likes: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s uploaded videos. Use the  videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos. */
		uploads: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s watch history. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
		watchHistory: FormControl<string | null | undefined>,

		/** The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and  playlistItems.delete to add or remove items from that list. */
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

		/** The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		timeLinked?: Date | null;
	}

	/** The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel. */
	export interface ChannelContentOwnerDetailsFormProperties {

		/** The ID of the content owner linked to the channel. */
		contentOwner: FormControl<string | null | undefined>,

		/** The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

	export enum ChannelConversionPingContext { cview = 0, subscribe = 1, unsubscribe = 2 }


	/** Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id. */
	export interface InvideoPromotion {

		/** Describes a temporal position of a visual widget inside a video. */
		defaultTiming?: InvideoTiming;

		/** List of promoted items in decreasing priority. */
		items?: Array<PromotedItem>;

		/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
		position?: InvideoPosition;

		/** Indicates whether the channel's promotional campaign uses "smart timing." This feature attempts to show promotions at a point in the video when they are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video. */
		useSmartTiming?: boolean | null;
	}

	/** Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id. */
	export interface InvideoPromotionFormProperties {

		/** Indicates whether the channel's promotional campaign uses "smart timing." This feature attempts to show promotions at a point in the video when they are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video. */
		useSmartTiming: FormControl<boolean | null | undefined>,
	}
	export function CreateInvideoPromotionFormGroup() {
		return new FormGroup<InvideoPromotionFormProperties>({
			useSmartTiming: new FormControl<boolean | null | undefined>(undefined),
		});

	}


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

	export enum InvideoTimingType { offsetFromEnd = 0, offsetFromStart = 1 }


	/** Describes a single promoted item. */
	export interface PromotedItem {

		/** A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website. */
		customMessage?: string | null;

		/** Describes a single promoted item id. It is a union of various possible types. */
		id?: PromotedItemId;

		/** If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner. */
		promotedByContentOwner?: boolean | null;

		/** Describes a temporal position of a visual widget inside a video. */
		timing?: InvideoTiming;
	}

	/** Describes a single promoted item. */
	export interface PromotedItemFormProperties {

		/** A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website. */
		customMessage: FormControl<string | null | undefined>,

		/** If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner. */
		promotedByContentOwner: FormControl<boolean | null | undefined>,
	}
	export function CreatePromotedItemFormGroup() {
		return new FormGroup<PromotedItemFormProperties>({
			customMessage: new FormControl<string | null | undefined>(undefined),
			promotedByContentOwner: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a single promoted item id. It is a union of various possible types. */
	export interface PromotedItemId {

		/** If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set. */
		recentlyUploadedBy?: string | null;

		/** Describes the type of the promoted item. */
		type?: PromotedItemIdType | null;

		/** If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video. */
		videoId?: string | null;

		/** If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website. */
		websiteUrl?: string | null;
	}

	/** Describes a single promoted item id. It is a union of various possible types. */
	export interface PromotedItemIdFormProperties {

		/** If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set. */
		recentlyUploadedBy: FormControl<string | null | undefined>,

		/** Describes the type of the promoted item. */
		type: FormControl<PromotedItemIdType | null | undefined>,

		/** If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video. */
		videoId: FormControl<string | null | undefined>,

		/** If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreatePromotedItemIdFormGroup() {
		return new FormGroup<PromotedItemIdFormProperties>({
			recentlyUploadedBy: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PromotedItemIdType | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotedItemIdType { recentUpload = 0, video = 1, website = 2 }


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

	export enum InvideoPositionCornerPosition { bottomLeft = 0, bottomRight = 1, topLeft = 2, topRight = 3 }

	export enum InvideoPositionType { corner = 0 }


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

		/** The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The long uploads status of this channel. See */
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

		/** The long uploads status of this channel. See */
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

	export enum ChannelStatusLongUploadsStatus { allowed = 0, disallowed = 1, eligible = 2, longUploadsUnspecified = 3 }

	export enum ChannelStatusPrivacyStatus { _private = 0, _public = 1, unlisted = 2 }


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

		/** Etag of this resource. */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource". */
		kind?: string | null;

		/** The URL of this banner image. */
		url?: string | null;
	}

	/** A channel banner returned as the response to a channel_banner.insert call. */
	export interface ChannelBannerResourceFormProperties {

		/** Etag of this resource. */
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

		/** A list of channels that match the request criteria. */
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

		/** The position of the channel section in the channel. */
		position?: string | null;

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

		/** The position of the channel section in the channel. */
		position: FormControl<string | null | undefined>,

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
			position: new FormControl<string | null | undefined>(undefined),
			style: new FormControl<ChannelSectionSnippetStyle | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelSectionSnippetType | null | undefined>(undefined),
		});

	}

	export enum ChannelSectionSnippetStyle { channelsectionStyleUndefined = 0, horizontalRow = 1, verticalList = 2 }

	export enum ChannelSectionSnippetType { allPlaylists = 0, channelsectionTypeUndefined = 1, completedEvents = 2, likedPlaylists = 3, likes = 4, liveEvents = 5, multipleChannels = 6, multiplePlaylists = 7, popularUploads = 8, postedPlaylists = 9, postedVideos = 10, recentActivity = 11, recentPosts = 12, recentUploads = 13, singlePlaylist = 14, subscriptions = 15, upcomingEvents = 16 }


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


	/** A comment represents a single YouTube comment. */
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

	/** A comment represents a single YouTube comment. */
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
		authorChannelId?: any;

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

		/** The total number of likes this comment has received. */
		likeCount?: string | null;

		/** The comment's moderation status. Will not be set if the comments were requested through the id filter. */
		moderationStatus?: CommentSnippetModerationStatus | null;

		/** The unique id of the parent comment, only set for replies. */
		parentId?: string | null;

		/** The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc. */
		textDisplay?: string | null;

		/** The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author. */
		textOriginal?: string | null;

		/** The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		updatedAt?: Date | null;

		/** The ID of the video the comment refers to, if any. */
		videoId?: string | null;

		/** The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future. */
		viewerRating?: CommentSnippetViewerRating | null;
	}

	/** Basic details about a comment, such as its author and text. */
	export interface CommentSnippetFormProperties {

		/** The id of the author's YouTube channel, if any. */
		authorChannelId: FormControl<any | null | undefined>,

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

		/** The total number of likes this comment has received. */
		likeCount: FormControl<string | null | undefined>,

		/** The comment's moderation status. Will not be set if the comments were requested through the id filter. */
		moderationStatus: FormControl<CommentSnippetModerationStatus | null | undefined>,

		/** The unique id of the parent comment, only set for replies. */
		parentId: FormControl<string | null | undefined>,

		/** The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc. */
		textDisplay: FormControl<string | null | undefined>,

		/** The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author. */
		textOriginal: FormControl<string | null | undefined>,

		/** The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		updatedAt: FormControl<Date | null | undefined>,

		/** The ID of the video the comment refers to, if any. */
		videoId: FormControl<string | null | undefined>,

		/** The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future. */
		viewerRating: FormControl<CommentSnippetViewerRating | null | undefined>,
	}
	export function CreateCommentSnippetFormGroup() {
		return new FormGroup<CommentSnippetFormProperties>({
			authorChannelId: new FormControl<any | null | undefined>(undefined),
			authorChannelUrl: new FormControl<string | null | undefined>(undefined),
			authorDisplayName: new FormControl<string | null | undefined>(undefined),
			authorProfileImageUrl: new FormControl<string | null | undefined>(undefined),
			canRate: new FormControl<boolean | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			likeCount: new FormControl<string | null | undefined>(undefined),
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

	export enum CommentSnippetModerationStatus { heldForReview = 0, likelySpam = 1, published = 2, rejected = 3 }

	export enum CommentSnippetViewerRating { dislike = 0, like = 1, none = 2, unspecified = 3 }

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


	/** A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
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

	/** A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies. */
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

		/** A comment represents a single YouTube comment. */
		topLevelComment?: Comment;

		/** The total number of replies (not including the top level comment). */
		totalReplyCount?: string | null;

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

		/** The total number of replies (not including the top level comment). */
		totalReplyCount: FormControl<string | null | undefined>,

		/** The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateCommentThreadSnippetFormGroup() {
		return new FormGroup<CommentThreadSnippetFormProperties>({
			canReply: new FormControl<boolean | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			totalReplyCount: new FormControl<string | null | undefined>(undefined),
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


	/** Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 72 */
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

		/** The video's rating from France's Conseil supérieur de l?audiovisuel, which rates broadcast content. */
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

		/** voor de Classificatie van Audiovisuele Media (Netherlands). */
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

		/** The rating system for MENA countries, a clone of MPAA. It is needed to */
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

	/** Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 72 */
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

		/** The video's rating from France's Conseil supérieur de l?audiovisuel, which rates broadcast content. */
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

		/** voor de Classificatie van Audiovisuele Media (Netherlands). */
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

		/** The rating system for MENA countries, a clone of MPAA. It is needed to */
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

	export enum ContentRatingAcbRating { acbC = 0, acbE = 1, acbG = 2, acbM = 3, acbMa15plus = 4, acbP = 5, acbPg = 6, acbR18plus = 7, acbUnrated = 8 }

	export enum ContentRatingAgcomRating { agcomT = 0, agcomUnrated = 1, agcomVm14 = 2, agcomVm18 = 3 }

	export enum ContentRatingAnatelRating { anatelA = 0, anatelF = 1, anatelI = 2, anatelI10 = 3, anatelI12 = 4, anatelI7 = 5, anatelR = 6, anatelUnrated = 7 }

	export enum ContentRatingBbfcRating { bbfc12 = 0, bbfc12a = 1, bbfc15 = 2, bbfc18 = 3, bbfcPg = 4, bbfcR18 = 5, bbfcU = 6, bbfcUnrated = 7 }

	export enum ContentRatingBfvcRating { bfvc13 = 0, bfvc15 = 1, bfvc18 = 2, bfvc20 = 3, bfvcB = 4, bfvcE = 5, bfvcG = 6, bfvcUnrated = 7 }

	export enum ContentRatingBmukkRating { bmukk10 = 0, bmukk12 = 1, bmukk14 = 2, bmukk16 = 3, bmukk6 = 4, bmukk8 = 5, bmukkAa = 6, bmukkUnrated = 7 }

	export enum ContentRatingCatvRating { catv14plus = 0, catv18plus = 1, catvC = 2, catvC8 = 3, catvG = 4, catvPg = 5, catvUnrated = 6 }

	export enum ContentRatingCatvfrRating { catvfr13plus = 0, catvfr16plus = 1, catvfr18plus = 2, catvfr8plus = 3, catvfrG = 4, catvfrUnrated = 5 }

	export enum ContentRatingCbfcRating { cbfcA = 0, cbfcS = 1, cbfcU = 2, cbfcUA = 3, cbfcUnrated = 4 }

	export enum ContentRatingCccRating { ccc14 = 0, ccc18 = 1, ccc18s = 2, ccc18v = 3, ccc6 = 4, cccTe = 5, cccUnrated = 6 }

	export enum ContentRatingCceRating { cceM12 = 0, cceM14 = 1, cceM16 = 2, cceM18 = 3, cceM4 = 4, cceM6 = 5, cceUnrated = 6 }

	export enum ContentRatingChfilmRating { chfilm0 = 0, chfilm12 = 1, chfilm16 = 2, chfilm18 = 3, chfilm6 = 4, chfilmUnrated = 5 }

	export enum ContentRatingChvrsRating { chvrs14a = 0, chvrs18a = 1, chvrsE = 2, chvrsG = 3, chvrsPg = 4, chvrsR = 5, chvrsUnrated = 6 }

	export enum ContentRatingCicfRating { cicfE = 0, cicfKntEna = 1, cicfKtEa = 2, cicfUnrated = 3 }

	export enum ContentRatingCnaRating { cna12 = 0, cna15 = 1, cna18 = 2, cna18plus = 3, cnaAp = 4, cnaUnrated = 5 }

	export enum ContentRatingCncRating { cnc10 = 0, cnc12 = 1, cnc16 = 2, cnc18 = 3, cncE = 4, cncInterdiction = 5, cncT = 6, cncUnrated = 7 }

	export enum ContentRatingCsaRating { csa10 = 0, csa12 = 1, csa16 = 2, csa18 = 3, csaInterdiction = 4, csaT = 5, csaUnrated = 6 }

	export enum ContentRatingCscfRating { cscf12 = 0, cscf16 = 1, cscf18 = 2, cscf6 = 3, cscf9 = 4, cscfA = 5, cscfAl = 6, cscfUnrated = 7 }

	export enum ContentRatingCzfilmRating { czfilm12 = 0, czfilm14 = 1, czfilm18 = 2, czfilmU = 3, czfilmUnrated = 4 }

	export enum ContentRatingDjctqRating { djctq10 = 0, djctq1012 = 1, djctq1014 = 2, djctq1016 = 3, djctq1018 = 4, djctq12 = 5, djctq1214 = 6, djctq1216 = 7, djctq1218 = 8, djctq14 = 9, djctq1416 = 10, djctq1418 = 11, djctq16 = 12, djctq1618 = 13, djctq18 = 14, djctqEr = 15, djctqL = 16, djctqL10 = 17, djctqL12 = 18, djctqL14 = 19, djctqL16 = 20, djctqL18 = 21, djctqUnrated = 22 }

	export enum ContentRatingEcbmctRating { ecbmct13a = 0, ecbmct13plus = 1, ecbmct15a = 2, ecbmct15plus = 3, ecbmct18plus = 4, ecbmct7a = 5, ecbmct7plus = 6, ecbmctG = 7, ecbmctUnrated = 8 }

	export enum ContentRatingEefilmRating { eefilmK12 = 0, eefilmK14 = 1, eefilmK16 = 2, eefilmK6 = 3, eefilmL = 4, eefilmMs12 = 5, eefilmMs6 = 6, eefilmPere = 7, eefilmUnrated = 8 }

	export enum ContentRatingEgfilmRating { egfilm18 = 0, egfilmBn = 1, egfilmGn = 2, egfilmUnrated = 3 }

	export enum ContentRatingEirinRating { eirinG = 0, eirinPg12 = 1, eirinR15plus = 2, eirinR18plus = 3, eirinUnrated = 4 }

	export enum ContentRatingFcbmRating { fcbm18 = 0, fcbm18pa = 1, fcbm18pl = 2, fcbm18sg = 3, fcbm18sx = 4, fcbmP13 = 5, fcbmPg13 = 6, fcbmU = 7, fcbmUnrated = 8 }

	export enum ContentRatingFcoRating { fcoI = 0, fcoIi = 1, fcoIia = 2, fcoIib = 3, fcoIii = 4, fcoUnrated = 5 }

	export enum ContentRatingFmocRating { fmoc10 = 0, fmoc12 = 1, fmoc16 = 2, fmoc18 = 3, fmocE = 4, fmocU = 5, fmocUnrated = 6 }

	export enum ContentRatingFpbRating { fpb10 = 0, fpb1012Pg = 1, fpb13 = 2, fpb16 = 3, fpb18 = 4, fpb79Pg = 5, fpbA = 6, fpbPg = 7, fpbUnrated = 8, fpbX18 = 9, fpbXx = 10 }

	export enum ContentRatingFskRating { fsk0 = 0, fsk12 = 1, fsk16 = 2, fsk18 = 3, fsk6 = 4, fskUnrated = 5 }

	export enum ContentRatingGrfilmRating { grfilmE = 0, grfilmK = 1, grfilmK12 = 2, grfilmK13 = 3, grfilmK15 = 4, grfilmK17 = 5, grfilmK18 = 6, grfilmUnrated = 7 }

	export enum ContentRatingIcaaRating { icaa12 = 0, icaa13 = 1, icaa16 = 2, icaa18 = 3, icaa7 = 4, icaaApta = 5, icaaUnrated = 6, icaaX = 7 }

	export enum ContentRatingIfcoRating { ifco12 = 0, ifco12a = 1, ifco15 = 2, ifco15a = 3, ifco16 = 4, ifco18 = 5, ifcoG = 6, ifcoPg = 7, ifcoUnrated = 8 }

	export enum ContentRatingIlfilmRating { ilfilm12 = 0, ilfilm14 = 1, ilfilm16 = 2, ilfilm18 = 3, ilfilmAa = 4, ilfilmUnrated = 5 }

	export enum ContentRatingIncaaRating { incaaAtp = 0, incaaC = 1, incaaSam13 = 2, incaaSam16 = 3, incaaSam18 = 4, incaaUnrated = 5 }

	export enum ContentRatingKfcbRating { kfcb16plus = 0, kfcbG = 1, kfcbPg = 2, kfcbR = 3, kfcbUnrated = 4 }

	export enum ContentRatingKijkwijzerRating { kijkwijzer12 = 0, kijkwijzer16 = 1, kijkwijzer18 = 2, kijkwijzer6 = 3, kijkwijzer9 = 4, kijkwijzerAl = 5, kijkwijzerUnrated = 6 }

	export enum ContentRatingKmrbRating { kmrb12plus = 0, kmrb15plus = 1, kmrbAll = 2, kmrbR = 3, kmrbTeenr = 4, kmrbUnrated = 5 }

	export enum ContentRatingLsfRating { lsf13 = 0, lsf17 = 1, lsf21 = 2, lsfA = 3, lsfBo = 4, lsfD = 5, lsfR = 6, lsfSu = 7, lsfUnrated = 8 }

	export enum ContentRatingMccaaRating { mccaa12 = 0, mccaa12a = 1, mccaa14 = 2, mccaa15 = 3, mccaa16 = 4, mccaa18 = 5, mccaaPg = 6, mccaaU = 7, mccaaUnrated = 8 }

	export enum ContentRatingMccypRating { mccyp11 = 0, mccyp15 = 1, mccyp7 = 2, mccypA = 3, mccypUnrated = 4 }

	export enum ContentRatingMcstRating { mcst0 = 0, mcst16plus = 1, mcstC13 = 2, mcstC16 = 3, mcstC18 = 4, mcstGPg = 5, mcstP = 6, mcstUnrated = 7 }

	export enum ContentRatingMdaRating { mdaG = 0, mdaM18 = 1, mdaNc16 = 2, mdaPg = 3, mdaPg13 = 4, mdaR21 = 5, mdaUnrated = 6 }

	export enum ContentRatingMedietilsynetRating { medietilsynet11 = 0, medietilsynet12 = 1, medietilsynet15 = 2, medietilsynet18 = 3, medietilsynet6 = 4, medietilsynet7 = 5, medietilsynet9 = 6, medietilsynetA = 7, medietilsynetUnrated = 8 }

	export enum ContentRatingMekuRating { meku12 = 0, meku16 = 1, meku18 = 2, meku7 = 3, mekuS = 4, mekuUnrated = 5 }

	export enum ContentRatingMenaMpaaRating { menaMpaaG = 0, menaMpaaPg = 1, menaMpaaPg13 = 2, menaMpaaR = 3, menaMpaaUnrated = 4 }

	export enum ContentRatingMibacRating { mibacT = 0, mibacUnrated = 1, mibacVap = 2, mibacVm12 = 3, mibacVm14 = 4, mibacVm18 = 5 }

	export enum ContentRatingMocRating { moc12 = 0, moc15 = 1, moc18 = 2, moc7 = 3, mocBanned = 4, mocE = 5, mocT = 6, mocUnrated = 7, mocX = 8 }

	export enum ContentRatingMoctwRating { moctwG = 0, moctwP = 1, moctwPg = 2, moctwR = 3, moctwR12 = 4, moctwR15 = 5, moctwUnrated = 6 }

	export enum ContentRatingMpaaRating { mpaaG = 0, mpaaNc17 = 1, mpaaPg = 2, mpaaPg13 = 3, mpaaR = 4, mpaaUnrated = 5, mpaaX = 6 }

	export enum ContentRatingMpaatRating { mpaatGb = 0, mpaatRb = 1 }

	export enum ContentRatingMtrcbRating { mtrcbG = 0, mtrcbPg = 1, mtrcbR13 = 2, mtrcbR16 = 3, mtrcbR18 = 4, mtrcbUnrated = 5, mtrcbX = 6 }

	export enum ContentRatingNbcRating { nbc12plus = 0, nbc15plus = 1, nbc18plus = 2, nbc18plusr = 3, nbcG = 4, nbcPg = 5, nbcPu = 6, nbcUnrated = 7 }

	export enum ContentRatingNbcplRating { nbcpl18plus = 0, nbcplI = 1, nbcplIi = 2, nbcplIii = 3, nbcplIv = 4, nbcplUnrated = 5 }

	export enum ContentRatingNfrcRating { nfrcA = 0, nfrcB = 1, nfrcC = 2, nfrcD = 3, nfrcUnrated = 4, nfrcX = 5 }

	export enum ContentRatingNfvcbRating { nfvcb12 = 0, nfvcb12a = 1, nfvcb15 = 2, nfvcb18 = 3, nfvcbG = 4, nfvcbPg = 5, nfvcbRe = 6, nfvcbUnrated = 7 }

	export enum ContentRatingNkclvRating { nkclv12plus = 0, nkclv16plus = 1, nkclv18plus = 2, nkclv7plus = 3, nkclvU = 4, nkclvUnrated = 5 }

	export enum ContentRatingNmcRating { nmc15plus = 0, nmc18plus = 1, nmc18tc = 2, nmcG = 3, nmcPg = 4, nmcPg13 = 5, nmcPg15 = 6, nmcUnrated = 7 }

	export enum ContentRatingOflcRating { oflcG = 0, oflcM = 1, oflcPg = 2, oflcR13 = 3, oflcR15 = 4, oflcR16 = 5, oflcR18 = 6, oflcRp13 = 7, oflcRp16 = 8, oflcRp18 = 9, oflcUnrated = 10 }

	export enum ContentRatingPefilmRating { pefilm14 = 0, pefilm18 = 1, pefilmPg = 2, pefilmPt = 3, pefilmUnrated = 4 }

	export enum ContentRatingRcnofRating { rcnofI = 0, rcnofIi = 1, rcnofIii = 2, rcnofIv = 3, rcnofUnrated = 4, rcnofV = 5, rcnofVi = 6 }

	export enum ContentRatingResorteviolenciaRating { resorteviolenciaA = 0, resorteviolenciaB = 1, resorteviolenciaC = 2, resorteviolenciaD = 3, resorteviolenciaE = 4, resorteviolenciaUnrated = 5 }

	export enum ContentRatingRtcRating { rtcA = 0, rtcAa = 1, rtcB = 2, rtcB15 = 3, rtcC = 4, rtcD = 5, rtcUnrated = 6 }

	export enum ContentRatingRteRating { rteCh = 0, rteGa = 1, rteMa = 2, rtePs = 3, rteUnrated = 4 }

	export enum ContentRatingRussiaRating { russia0 = 0, russia12 = 1, russia16 = 2, russia18 = 3, russia6 = 4, russiaUnrated = 5 }

	export enum ContentRatingSkfilmRating { skfilmG = 0, skfilmP2 = 1, skfilmP5 = 2, skfilmP8 = 3, skfilmUnrated = 4 }

	export enum ContentRatingSmaisRating { smais12 = 0, smais14 = 1, smais16 = 2, smais18 = 3, smais7 = 4, smaisL = 5, smaisUnrated = 6 }

	export enum ContentRatingSmsaRating { smsa11 = 0, smsa15 = 1, smsa7 = 2, smsaA = 3, smsaUnrated = 4 }

	export enum ContentRatingTvpgRating { pg14 = 0, tvpgG = 1, tvpgMa = 2, tvpgPg = 3, tvpgUnrated = 4, tvpgY = 5, tvpgY7 = 6, tvpgY7Fv = 7 }

	export enum ContentRatingYtRating { ytAgeRestricted = 0 }


	/** Geographical coordinates of a point, in WGS84. */
	export interface GeoPoint {

		/** Altitude above the reference ellipsoid, in meters. */
		altitude?: number | null;

		/** Latitude in degrees. */
		latitude?: number | null;

		/** Longitude in degrees. */
		longitude?: number | null;
	}

	/** Geographical coordinates of a point, in WGS84. */
	export interface GeoPointFormProperties {

		/** Altitude above the reference ellipsoid, in meters. */
		altitude: FormControl<number | null | undefined>,

		/** Latitude in degrees. */
		latitude: FormControl<number | null | undefined>,

		/** Longitude in degrees. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeoPointFormGroup() {
		return new FormGroup<GeoPointFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel's content or other indicators, such as the channel's popularity. The list is similar to video categories, with the difference being that a video's uploader can assign a video category but only YouTube can assign a channel category. */
	export interface GuideCategory {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the guide category. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategory". */
		kind?: string | null;

		/** Basic details about a guide category. */
		snippet?: GuideCategorySnippet;
	}

	/** A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel's content or other indicators, such as the channel's popularity. The list is similar to video categories, with the difference being that a video's uploader can assign a video category but only YouTube can assign a channel category. */
	export interface GuideCategoryFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the guide category. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategory". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGuideCategoryFormGroup() {
		return new FormGroup<GuideCategoryFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic details about a guide category. */
	export interface GuideCategorySnippet {
		channelId?: string | null;

		/** Description of the guide category. */
		title?: string | null;
	}

	/** Basic details about a guide category. */
	export interface GuideCategorySnippetFormProperties {
		channelId: FormControl<string | null | undefined>,

		/** Description of the guide category. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGuideCategorySnippetFormGroup() {
		return new FormGroup<GuideCategorySnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GuideCategoryListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding guideCategory resource. */
		items?: Array<GuideCategory>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategoryListResponse". */
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
	export interface GuideCategoryListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategoryListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. */
		prevPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateGuideCategoryListResponseFormGroup() {
		return new FormGroup<GuideCategoryListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An i18nLanguage resource identifies a UI language currently supported by YouTube. */
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

	/** An i18nLanguage resource identifies a UI language currently supported by YouTube. */
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


	/** A i18nRegion resource identifies a region where YouTube is available. */
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

	/** A i18nRegion resource identifies a region where YouTube is available. */
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

	export interface InvideoBranding {
		imageBytes?: string | null;
		imageUrl?: string | null;

		/** Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one. */
		position?: InvideoPosition;
		targetChannelId?: string | null;

		/** Describes a temporal position of a visual widget inside a video. */
		timing?: InvideoTiming;
	}
	export interface InvideoBrandingFormProperties {
		imageBytes: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		targetChannelId: FormControl<string | null | undefined>,
	}
	export function CreateInvideoBrandingFormGroup() {
		return new FormGroup<InvideoBrandingFormProperties>({
			imageBytes: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			targetChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LevelDetails {
		displayName?: string | null;
	}
	export interface LevelDetailsFormProperties {
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateLevelDetailsFormGroup() {
		return new FormGroup<LevelDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube. */
	export interface LiveBroadcast {

		/** Detailed settings of a broadcast. */
		contentDetails?: LiveBroadcastContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the broadcast. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast". */
		kind?: string | null;
		snippet?: LiveBroadcastSnippet;

		/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
		statistics?: LiveBroadcastStatistics;
		status?: LiveBroadcastStatus;
	}

	/** A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube. */
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

		/** This setting indicates whether auto start is enabled for this broadcast. */
		enableAutoStart?: boolean | null;
		enableAutoStop?: boolean | null;

		/** This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. */
		enableClosedCaptions?: boolean | null;

		/** This setting indicates whether YouTube should enable content encryption for the broadcast. */
		enableContentEncryption?: boolean | null;

		/**
		 * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.
		 * Important: You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
		 */
		enableDvr?: boolean | null;

		/** This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. */
		enableEmbed?: boolean | null;

		/** Indicates whether this broadcast has low latency enabled. */
		enableLowLatency?: boolean | null;

		/** If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted. */
		latencyPreference?: LiveBroadcastContentDetailsLatencyPreference | null;

		/** The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the  Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. */
		mesh?: string | null;

		/** Settings and Info of the monitor stream */
		monitorStream?: MonitorStreamInfo;

		/** The projection format of this broadcast. This defaults to rectangular. */
		projection?: LiveBroadcastContentDetailsProjection | null;

		/**
		 * Automatically start recording after the event goes live. The default value for this property is true.
		 * Important: You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
		 */
		recordFromStart?: boolean | null;

		/** This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. */
		startWithSlate?: boolean | null;
		stereoLayout?: LiveBroadcastContentDetailsStereoLayout | null;
	}

	/** Detailed settings of a broadcast. */
	export interface LiveBroadcastContentDetailsFormProperties {

		/** This value uniquely identifies the live stream bound to the broadcast. */
		boundStreamId: FormControl<string | null | undefined>,

		/** The date and time that the live stream referenced by boundStreamId was last updated. */
		boundStreamLastUpdateTimeMs: FormControl<Date | null | undefined>,
		closedCaptionsType: FormControl<LiveBroadcastContentDetailsClosedCaptionsType | null | undefined>,

		/** This setting indicates whether auto start is enabled for this broadcast. */
		enableAutoStart: FormControl<boolean | null | undefined>,
		enableAutoStop: FormControl<boolean | null | undefined>,

		/** This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST. */
		enableClosedCaptions: FormControl<boolean | null | undefined>,

		/** This setting indicates whether YouTube should enable content encryption for the broadcast. */
		enableContentEncryption: FormControl<boolean | null | undefined>,

		/**
		 * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.
		 * Important: You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
		 */
		enableDvr: FormControl<boolean | null | undefined>,

		/** This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video. */
		enableEmbed: FormControl<boolean | null | undefined>,

		/** Indicates whether this broadcast has low latency enabled. */
		enableLowLatency: FormControl<boolean | null | undefined>,

		/** If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted. */
		latencyPreference: FormControl<LiveBroadcastContentDetailsLatencyPreference | null | undefined>,

		/** The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the  Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags. */
		mesh: FormControl<string | null | undefined>,

		/** The projection format of this broadcast. This defaults to rectangular. */
		projection: FormControl<LiveBroadcastContentDetailsProjection | null | undefined>,

		/**
		 * Automatically start recording after the event goes live. The default value for this property is true.
		 * Important: You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
		 */
		recordFromStart: FormControl<boolean | null | undefined>,

		/** This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers. */
		startWithSlate: FormControl<boolean | null | undefined>,
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

	export enum LiveBroadcastContentDetailsClosedCaptionsType { closedCaptionsDisabled = 0, closedCaptionsEmbedded = 1, closedCaptionsHttpPost = 2 }

	export enum LiveBroadcastContentDetailsLatencyPreference { low = 0, normal = 1, ultraLow = 2 }


	/** Settings and Info of the monitor stream */
	export interface MonitorStreamInfo {

		/** If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay. */
		broadcastStreamDelayMs?: string | null;

		/** HTML code that embeds a player that plays the monitor stream. */
		embedHtml?: string | null;

		/**
		 * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.
		 * You need to set this value to true if you intend to have a broadcast delay for your event.
		 * Note: This property cannot be updated once the broadcast is in the testing or live state.
		 */
		enableMonitorStream?: boolean | null;
	}

	/** Settings and Info of the monitor stream */
	export interface MonitorStreamInfoFormProperties {

		/** If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay. */
		broadcastStreamDelayMs: FormControl<string | null | undefined>,

		/** HTML code that embeds a player that plays the monitor stream. */
		embedHtml: FormControl<string | null | undefined>,

		/**
		 * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.
		 * You need to set this value to true if you intend to have a broadcast delay for your event.
		 * Note: This property cannot be updated once the broadcast is in the testing or live state.
		 */
		enableMonitorStream: FormControl<boolean | null | undefined>,
	}
	export function CreateMonitorStreamInfoFormGroup() {
		return new FormGroup<MonitorStreamInfoFormProperties>({
			broadcastStreamDelayMs: new FormControl<string | null | undefined>(undefined),
			embedHtml: new FormControl<string | null | undefined>(undefined),
			enableMonitorStream: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LiveBroadcastContentDetailsProjection { _360 = 0, mesh = 1, rectangular = 2 }

	export enum LiveBroadcastContentDetailsStereoLayout { left_right = 0, mono = 1, top_bottom = 2 }

	export interface LiveBroadcastSnippet {

		/** The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		actualEndTime?: Date | null;

		/** The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		actualStartTime?: Date | null;
		broadcastType?: LiveBroadcastSnippetBroadcastType | null;

		/** The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. */
		channelId?: string | null;

		/** The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. */
		description?: string | null;
		isDefaultBroadcast?: boolean | null;

		/** The id of the live chat for this broadcast. */
		liveChatId?: string | null;

		/** The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		scheduledEndTime?: Date | null;

		/** The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		scheduledStartTime?: Date | null;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. */
		title?: string | null;
	}
	export interface LiveBroadcastSnippetFormProperties {

		/** The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		actualEndTime: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		actualStartTime: FormControl<Date | null | undefined>,
		broadcastType: FormControl<LiveBroadcastSnippetBroadcastType | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast. */
		channelId: FormControl<string | null | undefined>,

		/** The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource. */
		description: FormControl<string | null | undefined>,
		isDefaultBroadcast: FormControl<boolean | null | undefined>,

		/** The id of the live chat for this broadcast. */
		liveChatId: FormControl<string | null | undefined>,

		/** The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		scheduledEndTime: FormControl<Date | null | undefined>,

		/** The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		scheduledStartTime: FormControl<Date | null | undefined>,

		/** The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastSnippetFormGroup() {
		return new FormGroup<LiveBroadcastSnippetFormProperties>({
			actualEndTime: new FormControl<Date | null | undefined>(undefined),
			actualStartTime: new FormControl<Date | null | undefined>(undefined),
			broadcastType: new FormControl<LiveBroadcastSnippetBroadcastType | null | undefined>(undefined),
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

	export enum LiveBroadcastSnippetBroadcastType { fludd = 0, fluddArchive = 1, gplusHoa = 2, lcrEncoder = 3, mobile = 4, persistent = 5, premiere = 6, unspecified = 7, webcam = 8, ytHoa = 9 }


	/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
	export interface LiveBroadcastStatistics {

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers?: string | null;

		/** The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast. */
		totalChatCount?: string | null;
	}

	/** Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts. */
	export interface LiveBroadcastStatisticsFormProperties {

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers: FormControl<string | null | undefined>,

		/** The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast. */
		totalChatCount: FormControl<string | null | undefined>,
	}
	export function CreateLiveBroadcastStatisticsFormGroup() {
		return new FormGroup<LiveBroadcastStatisticsFormProperties>({
			concurrentViewers: new FormControl<string | null | undefined>(undefined),
			totalChatCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveBroadcastStatus {

		/** The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method. */
		lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatus | null;

		/** Priority of the live broadcast event (internal state). */
		liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriority | null;
		madeForKids?: boolean | null;

		/** The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. */
		privacyStatus?: LiveBroadcastStatusPrivacyStatus | null;

		/** The broadcast's recording status. */
		recordingStatus?: LiveBroadcastStatusRecordingStatus | null;
		selfDeclaredMadeForKids?: boolean | null;
	}
	export interface LiveBroadcastStatusFormProperties {

		/** The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method. */
		lifeCycleStatus: FormControl<LiveBroadcastStatusLifeCycleStatus | null | undefined>,

		/** Priority of the live broadcast event (internal state). */
		liveBroadcastPriority: FormControl<LiveBroadcastStatusLiveBroadcastPriority | null | undefined>,
		madeForKids: FormControl<boolean | null | undefined>,

		/** The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource. */
		privacyStatus: FormControl<LiveBroadcastStatusPrivacyStatus | null | undefined>,

		/** The broadcast's recording status. */
		recordingStatus: FormControl<LiveBroadcastStatusRecordingStatus | null | undefined>,
		selfDeclaredMadeForKids: FormControl<boolean | null | undefined>,
	}
	export function CreateLiveBroadcastStatusFormGroup() {
		return new FormGroup<LiveBroadcastStatusFormProperties>({
			lifeCycleStatus: new FormControl<LiveBroadcastStatusLifeCycleStatus | null | undefined>(undefined),
			liveBroadcastPriority: new FormControl<LiveBroadcastStatusLiveBroadcastPriority | null | undefined>(undefined),
			madeForKids: new FormControl<boolean | null | undefined>(undefined),
			privacyStatus: new FormControl<LiveBroadcastStatusPrivacyStatus | null | undefined>(undefined),
			recordingStatus: new FormControl<LiveBroadcastStatusRecordingStatus | null | undefined>(undefined),
			selfDeclaredMadeForKids: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LiveBroadcastStatusLifeCycleStatus { complete = 0, created = 1, live = 2, liveStarting = 3, ready = 4, revoked = 5, testStarting = 6, testing = 7 }

	export enum LiveBroadcastStatusLiveBroadcastPriority { high = 0, low = 1, normal = 2 }

	export enum LiveBroadcastStatusPrivacyStatus { _private = 0, _public = 1, unlisted = 2 }

	export enum LiveBroadcastStatusRecordingStatus { notRecording = 0, recorded = 1, recording = 2 }

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


	/** A liveChatBan resource represents a ban for a YouTube live chat. */
	export interface LiveChatBan {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the ban. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatBan". */
		kind?: string | null;
		snippet?: LiveChatBanSnippet;
	}

	/** A liveChatBan resource represents a ban for a YouTube live chat. */
	export interface LiveChatBanFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the ban. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatBan". */
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

	export enum LiveChatBanSnippetType { permanent = 0, temporary = 1 }

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


	/** A liveChatMessage resource represents a chat message in a YouTube Live Chat. */
	export interface LiveChatMessage {
		authorDetails?: LiveChatMessageAuthorDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the message. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage". */
		kind?: string | null;
		snippet?: LiveChatMessageSnippet;
	}

	/** A liveChatMessage resource represents a chat message in a YouTube Live Chat. */
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

	export interface LiveChatMessageSnippet {

		/** The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase */
		authorChannelId?: string | null;

		/** Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. */
		displayMessage?: string | null;
		fanFundingEventDetails?: LiveChatFanFundingEventDetails;

		/** Whether the message has display content that should be displayed to users. */
		hasDisplayContent?: boolean | null;
		liveChatId?: string | null;
		messageDeletedDetails?: LiveChatMessageDeletedDetails;
		messageRetractedDetails?: LiveChatMessageRetractedDetails;
		pollClosedDetails?: LiveChatPollClosedDetails;
		pollEditedDetails?: LiveChatPollEditedDetails;
		pollOpenedDetails?: LiveChatPollOpenedDetails;
		pollVotedDetails?: LiveChatPollVotedDetails;

		/** The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;
		superChatDetails?: LiveChatSuperChatDetails;
		superStickerDetails?: LiveChatSuperStickerDetails;
		textMessageDetails?: LiveChatTextMessageDetails;

		/** The type of message, this will always be present, it determines the contents of the message as well as which fields will be present. */
		type?: LiveChatMessageSnippetType | null;
		userBannedDetails?: LiveChatUserBannedMessageDetails;
	}
	export interface LiveChatMessageSnippetFormProperties {

		/** The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase */
		authorChannelId: FormControl<string | null | undefined>,

		/** Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent. */
		displayMessage: FormControl<string | null | undefined>,

		/** Whether the message has display content that should be displayed to users. */
		hasDisplayContent: FormControl<boolean | null | undefined>,
		liveChatId: FormControl<string | null | undefined>,

		/** The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

	export interface LiveChatPollClosedDetails {

		/** The id of the poll that was closed. */
		pollId?: string | null;
	}
	export interface LiveChatPollClosedDetailsFormProperties {

		/** The id of the poll that was closed. */
		pollId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatPollClosedDetailsFormGroup() {
		return new FormGroup<LiveChatPollClosedDetailsFormProperties>({
			pollId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatPollEditedDetails {
		id?: string | null;
		items?: Array<LiveChatPollItem>;
		prompt?: string | null;
	}
	export interface LiveChatPollEditedDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		prompt: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatPollEditedDetailsFormGroup() {
		return new FormGroup<LiveChatPollEditedDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			prompt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatPollItem {

		/** Plain text description of the item. */
		description?: string | null;
		itemId?: string | null;
	}
	export interface LiveChatPollItemFormProperties {

		/** Plain text description of the item. */
		description: FormControl<string | null | undefined>,
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatPollItemFormGroup() {
		return new FormGroup<LiveChatPollItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatPollOpenedDetails {
		id?: string | null;
		items?: Array<LiveChatPollItem>;
		prompt?: string | null;
	}
	export interface LiveChatPollOpenedDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		prompt: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatPollOpenedDetailsFormGroup() {
		return new FormGroup<LiveChatPollOpenedDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			prompt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatPollVotedDetails {

		/** The poll item the user chose. */
		itemId?: string | null;

		/** The poll the user voted on. */
		pollId?: string | null;
	}
	export interface LiveChatPollVotedDetailsFormProperties {

		/** The poll item the user chose. */
		itemId: FormControl<string | null | undefined>,

		/** The poll the user voted on. */
		pollId: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatPollVotedDetailsFormGroup() {
		return new FormGroup<LiveChatPollVotedDetailsFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			pollId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveChatSuperChatDetails {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString?: string | null;

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros?: string | null;

		/** The currency in which the purchase was made. */
		currency?: string | null;

		/** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
		tier?: string | null;

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

		/** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
		tier: FormControl<string | null | undefined>,

		/** The comment added by the user to this Super Chat event. */
		userComment: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatSuperChatDetailsFormGroup() {
		return new FormGroup<LiveChatSuperChatDetailsFormProperties>({
			amountDisplayString: new FormControl<string | null | undefined>(undefined),
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
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

		/** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
		tier?: string | null;
	}
	export interface LiveChatSuperStickerDetailsFormProperties {

		/** A rendered string that displays the fund amount and currency to the user. */
		amountDisplayString: FormControl<string | null | undefined>,

		/** The amount purchased by the user, in micros (1,750,000 micros = 1.75). */
		amountMicros: FormControl<string | null | undefined>,

		/** The currency in which the purchase was made. */
		currency: FormControl<string | null | undefined>,

		/** The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateLiveChatSuperStickerDetailsFormGroup() {
		return new FormGroup<LiveChatSuperStickerDetailsFormProperties>({
			amountDisplayString: new FormControl<string | null | undefined>(undefined),
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
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

	export enum LiveChatMessageSnippetType { chatEndedEvent = 0, fanFundingEvent = 1, messageDeletedEvent = 2, messageRetractedEvent = 3, newSponsorEvent = 4, pollClosedEvent = 5, pollEditedEvent = 6, pollOpenedEvent = 7, pollVotedEvent = 8, sponsorOnlyModeEndedEvent = 9, sponsorOnlyModeStartedEvent = 10, superChatEvent = 11, superStickerEvent = 12, textMessageEvent = 13, tombstone = 14, userBannedEvent = 15 }

	export interface LiveChatUserBannedMessageDetails {

		/** The duration of the ban. This property is only present if the banType is temporary. */
		banDurationSeconds?: string | null;

		/** The type of ban. */
		banType?: LiveChatBanSnippetType | null;
		bannedUserDetails?: ChannelProfileDetails;
	}
	export interface LiveChatUserBannedMessageDetailsFormProperties {

		/** The duration of the ban. This property is only present if the banType is temporary. */
		banDurationSeconds: FormControl<string | null | undefined>,

		/** The type of ban. */
		banType: FormControl<LiveChatBanSnippetType | null | undefined>,
	}
	export function CreateLiveChatUserBannedMessageDetailsFormGroup() {
		return new FormGroup<LiveChatUserBannedMessageDetailsFormProperties>({
			banDurationSeconds: new FormControl<string | null | undefined>(undefined),
			banType: new FormControl<LiveChatBanSnippetType | null | undefined>(undefined),
		});

	}

	export interface LiveChatMessageListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of live chat messages. */
		items?: Array<LiveChatMessage>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse". */
		kind?: string | null;

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken?: string | null;

		/** The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		offlineAt?: Date | null;

		/** Paging details for lists of resources, including total number of items available and number of resources returned in a single page. */
		pageInfo?: PageInfo;

		/** The amount of time the client should wait before polling again. */
		pollingIntervalMillis?: string | null;

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

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		offlineAt: FormControl<Date | null | undefined>,

		/** The amount of time the client should wait before polling again. */
		pollingIntervalMillis: FormControl<string | null | undefined>,

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
			pollingIntervalMillis: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
	export interface LiveChatModerator {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the moderator. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator". */
		kind?: string | null;
		snippet?: LiveChatModeratorSnippet;
	}

	/** A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc. */
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

		/**
		 * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.
		 * If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways:
		 * - A non-reusable stream can only be bound to one broadcast.
		 * - A non-reusable stream might be deleted by an automated process after the broadcast ends.
		 * - The  liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.
		 */
		isReusable?: boolean | null;
	}

	/** Detailed settings of a stream. */
	export interface LiveStreamContentDetailsFormProperties {

		/** The ingestion URL where the closed captions of this stream are sent. */
		closedCaptionsIngestionUrl: FormControl<string | null | undefined>,

		/**
		 * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.
		 * If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways:
		 * - A non-reusable stream can only be bound to one broadcast.
		 * - A non-reusable stream might be deleted by an automated process after the broadcast ends.
		 * - The  liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.
		 */
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

		/** The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

	export enum LiveStreamConfigurationIssueSeverity { error = 0, info = 1, warning = 2 }

	export enum LiveStreamConfigurationIssueType { audioBitrateHigh = 0, audioBitrateLow = 1, audioBitrateMismatch = 2, audioCodec = 3, audioCodecMismatch = 4, audioSampleRate = 5, audioSampleRateMismatch = 6, audioStereoMismatch = 7, audioTooManyChannels = 8, badContainer = 9, bitrateHigh = 10, bitrateLow = 11, frameRateHigh = 12, framerateMismatch = 13, gopMismatch = 14, gopSizeLong = 15, gopSizeOver = 16, gopSizeShort = 17, interlacedVideo = 18, multipleAudioStreams = 19, multipleVideoStreams = 20, noAudioStream = 21, noVideoStream = 22, openGop = 23, resolutionMismatch = 24, videoBitrateMismatch = 25, videoCodec = 26, videoCodecMismatch = 27, videoIngestionFasterThanRealtime = 28, videoIngestionStarved = 29, videoInterlaceMismatch = 30, videoProfileMismatch = 31, videoResolutionSuboptimal = 32, videoResolutionUnsupported = 33 }

	export enum LiveStreamHealthStatusStatus { bad = 0, good = 1, noData = 2, ok = 3, revoked = 4 }

	export enum LiveStreamStatusStreamStatus { active = 0, created = 1, error = 2, inactive = 3, ready = 4 }

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


	/** A member resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
	export interface Member {

		/** Etag of this resource. */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#member". */
		kind?: string | null;
		snippet?: MemberSnippet;
	}

	/** A member resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits. */
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

		/** Display name of the highest level that the user has access to at the moment. */
		highestAccessibleLevelDisplayName?: string | null;
		membershipsDuration?: MembershipsDuration;

		/** Data about memberships duration on particular pricing levels. */
		membershipsDurationAtLevels?: Array<MembershipsDurationAtLevel>;
	}
	export interface MembershipsDetailsFormProperties {

		/** Id of the highest level that the user has access to at the moment. */
		highestAccessibleLevel: FormControl<string | null | undefined>,

		/** Display name of the highest level that the user has access to at the moment. */
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

		/** The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer). */
		memberTotalDurationMonths?: number | null;
	}
	export interface MembershipsDurationFormProperties {

		/** The date and time when the user became a continuous member across all levels. */
		memberSince: FormControl<string | null | undefined>,

		/** The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer). */
		memberTotalDurationMonths: FormControl<number | null | undefined>,
	}
	export function CreateMembershipsDurationFormGroup() {
		return new FormGroup<MembershipsDurationFormProperties>({
			memberSince: new FormControl<string | null | undefined>(undefined),
			memberTotalDurationMonths: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MembershipsDurationAtLevel {

		/** Pricing level id. */
		level?: string | null;

		/** The date and time when the user became a continuous member for the given level. */
		memberSince?: string | null;

		/** The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer). */
		memberTotalDurationMonths?: number | null;
	}
	export interface MembershipsDurationAtLevelFormProperties {

		/** Pricing level id. */
		level: FormControl<string | null | undefined>,

		/** The date and time when the user became a continuous member for the given level. */
		memberSince: FormControl<string | null | undefined>,

		/** The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer). */
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


	/** A membershipsLevel resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
	export interface MembershipsLevel {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the memberships level. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevel". */
		kind?: string | null;
		snippet?: MembershipsLevelSnippet;
	}

	/** A membershipsLevel resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits. */
	export interface MembershipsLevelFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the memberships level. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevel". */
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


	/** Nonprofit information. */
	export interface Nonprofit {
		nonprofitId?: NonprofitId;

		/** Legal name of the nonprofit. */
		nonprofitLegalName?: string | null;
	}

	/** Nonprofit information. */
	export interface NonprofitFormProperties {

		/** Legal name of the nonprofit. */
		nonprofitLegalName: FormControl<string | null | undefined>,
	}
	export function CreateNonprofitFormGroup() {
		return new FormGroup<NonprofitFormProperties>({
			nonprofitLegalName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NonprofitId {
		value?: string | null;
	}
	export interface NonprofitIdFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateNonprofitIdFormGroup() {
		return new FormGroup<NonprofitIdFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
	 * YouTube also uses playlists to identify special collections of videos for a channel, such as:  
	 * - uploaded videos 
	 * - favorite videos 
	 * - positively rated (liked) videos 
	 * - watch history 
	 * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the  channel resource for a given channel.
	 * You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods.
	 */
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

	/**
	 * A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.
	 * YouTube also uses playlists to identify special collections of videos for a channel, such as:  
	 * - uploaded videos 
	 * - favorite videos 
	 * - positively rated (liked) videos 
	 * - watch history 
	 * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the  channel resource for a given channel.
	 * You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods.
	 */
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

		/** The number of videos in the playlist. */
		itemCount?: string | null;
	}
	export interface PlaylistContentDetailsFormProperties {

		/** The number of videos in the playlist. */
		itemCount: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistContentDetailsFormGroup() {
		return new FormGroup<PlaylistContentDetailsFormProperties>({
			itemCount: new FormControl<string | null | undefined>(undefined),
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

		/** The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** Keyword tags associated with the playlist. */
		tags?: Array<string>;

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

		/** The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt: FormControl<Date | null | undefined>,

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
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaylistStatus {

		/** The playlist's privacy status. */
		privacyStatus?: PlaylistStatusPrivacyStatus | null;
	}
	export interface PlaylistStatusFormProperties {

		/** The playlist's privacy status. */
		privacyStatus: FormControl<PlaylistStatusPrivacyStatus | null | undefined>,
	}
	export function CreatePlaylistStatusFormGroup() {
		return new FormGroup<PlaylistStatusFormProperties>({
			privacyStatus: new FormControl<PlaylistStatusPrivacyStatus | null | undefined>(undefined),
		});

	}

	export enum PlaylistStatusPrivacyStatus { _private = 0, _public = 1, unlisted = 2 }


	/**
	 * A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
	 * YouTube uses playlists to identify special collections of videos for a channel, such as:  
	 * - uploaded videos 
	 * - favorite videos 
	 * - positively rated (liked) videos 
	 * - watch history 
	 * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information.
	 * You can retrieve the playlist IDs for each of these lists from the  channel resource  for a given channel. You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
	 */
	export interface PlaylistItem {
		contentDetails?: PlaylistItemContentDetails;

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube uses to uniquely identify the playlist item. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem". */
		kind?: string | null;

		/** Basic details about a playlist, including title, description and thumbnails. */
		snippet?: PlaylistItemSnippet;

		/** Information about the playlist item's privacy status. */
		status?: PlaylistItemStatus;
	}

	/**
	 * A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.
	 * YouTube uses playlists to identify special collections of videos for a channel, such as:  
	 * - uploaded videos 
	 * - favorite videos 
	 * - positively rated (liked) videos 
	 * - watch history 
	 * - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information.
	 * You can retrieve the playlist IDs for each of these lists from the  channel resource  for a given channel. You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
	 */
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

		/** The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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


	/** Basic details about a playlist, including title, description and thumbnails. */
	export interface PlaylistItemSnippet {

		/** The ID that YouTube uses to uniquely identify the user that added the item to the playlist. */
		channelId?: string | null;

		/** Channel title for the channel that the playlist item belongs to. */
		channelTitle?: string | null;

		/** The item's description. */
		description?: string | null;

		/** The ID that YouTube uses to uniquely identify the playlist that the playlist item is in. */
		playlistId?: string | null;

		/** The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth. */
		position?: string | null;

		/** The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** A resource id is a generic reference that points to another YouTube resource. */
		resourceId?: ResourceId;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The item's title. */
		title?: string | null;
	}

	/** Basic details about a playlist, including title, description and thumbnails. */
	export interface PlaylistItemSnippetFormProperties {

		/** The ID that YouTube uses to uniquely identify the user that added the item to the playlist. */
		channelId: FormControl<string | null | undefined>,

		/** Channel title for the channel that the playlist item belongs to. */
		channelTitle: FormControl<string | null | undefined>,

		/** The item's description. */
		description: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the playlist that the playlist item is in. */
		playlistId: FormControl<string | null | undefined>,

		/** The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth. */
		position: FormControl<string | null | undefined>,

		/** The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The item's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistItemSnippetFormGroup() {
		return new FormGroup<PlaylistItemSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelTitle: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			playlistId: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			publishedAt: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the playlist item's privacy status. */
	export interface PlaylistItemStatus {

		/** This resource's privacy status. */
		privacyStatus?: PlaylistItemStatusPrivacyStatus | null;
	}

	/** Information about the playlist item's privacy status. */
	export interface PlaylistItemStatusFormProperties {

		/** This resource's privacy status. */
		privacyStatus: FormControl<PlaylistItemStatusPrivacyStatus | null | undefined>,
	}
	export function CreatePlaylistItemStatusFormGroup() {
		return new FormGroup<PlaylistItemStatusFormProperties>({
			privacyStatus: new FormControl<PlaylistItemStatusPrivacyStatus | null | undefined>(undefined),
		});

	}

	export enum PlaylistItemStatusPrivacyStatus { _private = 0, _public = 1, unlisted = 2 }

	export interface PlaylistItemListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of playlist items that match the request criteria. */
		items?: Array<PlaylistItem>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". */
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

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". */
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

		/** A list of playlists that match the request criteria. */
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

		/** A list of results that match the search criteria. */
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

		/** The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

	export enum SearchResultSnippetLiveBroadcastContent { live = 0, none = 1, upcoming = 2 }


	/** A sponsor resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits. */
	export interface Sponsor {

		/** Etag of this resource. */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#sponsor". */
		kind?: string | null;
		snippet?: SponsorSnippet;
	}

	/** A sponsor resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits. */
	export interface SponsorFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#sponsor". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSponsorFormGroup() {
		return new FormGroup<SponsorFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SponsorSnippet {

		/** The id of the channel being sponsored. */
		channelId?: string | null;

		/** The cumulative time a user has been a sponsor in months. */
		cumulativeDurationMonths?: number | null;
		sponsorDetails?: ChannelProfileDetails;

		/** The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		sponsorSince?: Date | null;
	}
	export interface SponsorSnippetFormProperties {

		/** The id of the channel being sponsored. */
		channelId: FormControl<string | null | undefined>,

		/** The cumulative time a user has been a sponsor in months. */
		cumulativeDurationMonths: FormControl<number | null | undefined>,

		/** The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		sponsorSince: FormControl<Date | null | undefined>,
	}
	export function CreateSponsorSnippetFormGroup() {
		return new FormGroup<SponsorSnippetFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			cumulativeDurationMonths: new FormControl<number | null | undefined>(undefined),
			sponsorSince: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SponsorListResponse {

		/** Etag of this resource. */
		etag?: string | null;

		/** Serialized EventId of the request which produced this response. */
		eventId?: string | null;

		/** A list of sponsors that match the request criteria. */
		items?: Array<Sponsor>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#sponsorListResponse". */
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
	export interface SponsorListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#sponsorListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateSponsorListResponseFormGroup() {
		return new FormGroup<SponsorListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
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

	/** A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video. */
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

		/** The number of new items in the subscription since its content was last read. */
		newItemCount?: string | null;

		/** The approximate number of items that the subscription points to. */
		totalItemCount?: string | null;
	}

	/** Details about the content to witch a subscription refers. */
	export interface SubscriptionContentDetailsFormProperties {

		/** The type of activity this subscription is for (only uploads, everything). */
		activityType: FormControl<SubscriptionContentDetailsActivityType | null | undefined>,

		/** The number of new items in the subscription since its content was last read. */
		newItemCount: FormControl<string | null | undefined>,

		/** The approximate number of items that the subscription points to. */
		totalItemCount: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionContentDetailsFormGroup() {
		return new FormGroup<SubscriptionContentDetailsFormProperties>({
			activityType: new FormControl<SubscriptionContentDetailsActivityType | null | undefined>(undefined),
			newItemCount: new FormControl<string | null | undefined>(undefined),
			totalItemCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubscriptionContentDetailsActivityType { all = 0, uploads = 1 }


	/** Basic details about a subscription, including title, description and thumbnails of the subscribed item. */
	export interface SubscriptionSnippet {

		/** The ID that YouTube uses to uniquely identify the subscriber's channel. */
		channelId?: string | null;

		/** Channel title for the channel that the subscription belongs to. */
		channelTitle?: string | null;

		/** The subscription's details. */
		description?: string | null;

		/** The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

		/** The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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


	/** A superChatEvent resource represents a Super Chat purchase on a YouTube channel. */
	export interface SuperChatEvent {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID that YouTube assigns to uniquely identify the Super Chat event. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEvent". */
		kind?: string | null;
		snippet?: SuperChatEventSnippet;
	}

	/** A superChatEvent resource represents a Super Chat purchase on a YouTube channel. */
	export interface SuperChatEventFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube assigns to uniquely identify the Super Chat event. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEvent". */
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

		/** The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		createdAt?: Date | null;

		/** The currency in which the purchase was made. ISO 4217. */
		currency?: string | null;

		/** A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language. */
		displayString?: string | null;

		/** True if this event is a Super Chat for Good purchase. */
		isSuperChatForGood?: boolean | null;

		/** True if this event is a Super Sticker event. */
		isSuperStickerEvent?: boolean | null;

		/** The tier for the paid message, which is based on the amount of money spent to purchase the message. */
		messageType?: string | null;

		/** Nonprofit information. */
		nonprofit?: Nonprofit;
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

		/** The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		createdAt: FormControl<Date | null | undefined>,

		/** The currency in which the purchase was made. ISO 4217. */
		currency: FormControl<string | null | undefined>,

		/** A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language. */
		displayString: FormControl<string | null | undefined>,

		/** True if this event is a Super Chat for Good purchase. */
		isSuperChatForGood: FormControl<boolean | null | undefined>,

		/** True if this event is a Super Sticker event. */
		isSuperStickerEvent: FormControl<boolean | null | undefined>,

		/** The tier for the paid message, which is based on the amount of money spent to purchase the message. */
		messageType: FormControl<string | null | undefined>,
	}
	export function CreateSuperChatEventSnippetFormGroup() {
		return new FormGroup<SuperChatEventSnippetFormProperties>({
			amountMicros: new FormControl<string | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			commentText: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			displayString: new FormControl<string | null | undefined>(undefined),
			isSuperChatForGood: new FormControl<boolean | null | undefined>(undefined),
			isSuperStickerEvent: new FormControl<boolean | null | undefined>(undefined),
			messageType: new FormControl<string | null | undefined>(undefined),
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


	/** A video resource represents a YouTube video. */
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

		/** List with all localizations. */
		localizations?: {[id: string]: VideoLocalization };

		/** Details about monetization of a YouTube Video. */
		monetizationDetails?: VideoMonetizationDetails;

		/** Player to be used for a video playback. */
		player?: VideoPlayer;

		/** Describes processing status and progress and availability of some other Video resource parts. */
		processingDetails?: VideoProcessingDetails;

		/** Project specific details about the content of a YouTube Video. */
		projectDetails?: VideoProjectDetails;

		/** Recording information associated with the video. */
		recordingDetails?: VideoRecordingDetails;

		/** Basic details about a video, including title, description, uploader, thumbnails and category. */
		snippet?: VideoSnippet;

		/** Statistics about the video, such as the number of times the video was viewed or liked. */
		statistics?: VideoStatistics;

		/** Basic details about a video category, such as its localized title. */
		status?: VideoStatus;

		/** Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions. */
		suggestions?: VideoSuggestions;

		/** Freebase topic information related to the video. */
		topicDetails?: VideoTopicDetails;
	}

	/** A video resource represents a YouTube video. */
	export interface VideoFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID that YouTube uses to uniquely identify the video. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#video". */
		kind: FormControl<string | null | undefined>,

		/** List with all localizations. */
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

	export enum VideoAgeGatingVideoGameRating { anyone = 0, m15Plus = 1, m16Plus = 2, m17Plus = 3 }


	/** Details about the content of a YouTube Video. */
	export interface VideoContentDetails {

		/** The value of captions indicates whether the video has captions or not. */
		caption?: VideoContentDetailsCaption | null;

		/** Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 72 */
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

	export enum VideoContentDetailsCaption { _false = 0, _true = 1 }

	export enum VideoContentDetailsDefinition { hd = 0, sd = 1 }

	export enum VideoContentDetailsProjection { _360 = 0, rectangular = 1 }


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

		/**
		 * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:
		 * - Date only: YYYY-MM-DD
		 * - Naive time: YYYY-MM-DDTHH:MM:SS
		 * - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
		 */
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

		/**
		 * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:
		 * - Date only: YYYY-MM-DD
		 * - Naive time: YYYY-MM-DDTHH:MM:SS
		 * - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
		 */
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

		/** The number of audio channels that the stream contains. */
		channelCount?: string | null;

		/** The audio codec that the stream uses. */
		codec?: string | null;

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor?: string | null;
	}

	/** Information about an audio stream. */
	export interface VideoFileDetailsAudioStreamFormProperties {

		/** The audio stream's bitrate, in bits per second. */
		bitrateBps: FormControl<string | null | undefined>,

		/** The number of audio channels that the stream contains. */
		channelCount: FormControl<string | null | undefined>,

		/** The audio codec that the stream uses. */
		codec: FormControl<string | null | undefined>,

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateVideoFileDetailsAudioStreamFormGroup() {
		return new FormGroup<VideoFileDetailsAudioStreamFormProperties>({
			bitrateBps: new FormControl<string | null | undefined>(undefined),
			channelCount: new FormControl<string | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoFileDetailsFileType { archive = 0, audio = 1, document = 2, image = 3, other = 4, project = 5, video = 6 }


	/** Information about a video stream. */
	export interface VideoFileDetailsVideoStream {

		/** The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed. */
		aspectRatio?: number | null;

		/** The video stream's bitrate, in bits per second. */
		bitrateBps?: string | null;

		/** The video codec that the stream uses. */
		codec?: string | null;

		/** The video stream's frame rate, in frames per second. */
		frameRateFps?: number | null;

		/** The encoded video content's height in pixels. */
		heightPixels?: string | null;

		/** The amount that YouTube needs to rotate the original source content to properly display the video. */
		rotation?: VideoFileDetailsVideoStreamRotation | null;

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor?: string | null;

		/** The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels. */
		widthPixels?: string | null;
	}

	/** Information about a video stream. */
	export interface VideoFileDetailsVideoStreamFormProperties {

		/** The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed. */
		aspectRatio: FormControl<number | null | undefined>,

		/** The video stream's bitrate, in bits per second. */
		bitrateBps: FormControl<string | null | undefined>,

		/** The video codec that the stream uses. */
		codec: FormControl<string | null | undefined>,

		/** The video stream's frame rate, in frames per second. */
		frameRateFps: FormControl<number | null | undefined>,

		/** The encoded video content's height in pixels. */
		heightPixels: FormControl<string | null | undefined>,

		/** The amount that YouTube needs to rotate the original source content to properly display the video. */
		rotation: FormControl<VideoFileDetailsVideoStreamRotation | null | undefined>,

		/** A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. */
		vendor: FormControl<string | null | undefined>,

		/** The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels. */
		widthPixels: FormControl<string | null | undefined>,
	}
	export function CreateVideoFileDetailsVideoStreamFormGroup() {
		return new FormGroup<VideoFileDetailsVideoStreamFormProperties>({
			aspectRatio: new FormControl<number | null | undefined>(undefined),
			bitrateBps: new FormControl<string | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			frameRateFps: new FormControl<number | null | undefined>(undefined),
			heightPixels: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<VideoFileDetailsVideoStreamRotation | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			widthPixels: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoFileDetailsVideoStreamRotation { clockwise = 0, counterClockwise = 1, none = 2, other = 3, upsideDown = 4 }


	/** Details about the live streaming metadata. */
	export interface VideoLiveStreamingDetails {

		/** The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page. */
		activeLiveChatId?: string | null;

		/** The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over. */
		actualEndTime?: Date | null;

		/** The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins. */
		actualStartTime?: Date | null;

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers?: string | null;

		/** The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely. */
		scheduledEndTime?: Date | null;

		/** The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		scheduledStartTime?: Date | null;
	}

	/** Details about the live streaming metadata. */
	export interface VideoLiveStreamingDetailsFormProperties {

		/** The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page. */
		activeLiveChatId: FormControl<string | null | undefined>,

		/** The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over. */
		actualEndTime: FormControl<Date | null | undefined>,

		/** The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins. */
		actualStartTime: FormControl<Date | null | undefined>,

		/** The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. */
		concurrentViewers: FormControl<string | null | undefined>,

		/** The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely. */
		scheduledEndTime: FormControl<Date | null | undefined>,

		/** The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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

	export enum VideoProcessingDetailsProcessingFailureReason { other = 0, streamingFailed = 1, transcodeFailed = 2, uploadFailed = 3 }


	/** Video processing progress and completion time estimate. */
	export interface VideoProcessingDetailsProcessingProgress {

		/**
		 * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:
		 * 100 * parts_processed / parts_total
		 * Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
		 */
		partsProcessed?: string | null;

		/** An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video. */
		partsTotal?: string | null;

		/** An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video. */
		timeLeftMs?: string | null;
	}

	/** Video processing progress and completion time estimate. */
	export interface VideoProcessingDetailsProcessingProgressFormProperties {

		/**
		 * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:
		 * 100 * parts_processed / parts_total
		 * Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
		 */
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

	export enum VideoProcessingDetailsProcessingStatus { failed = 0, processing = 1, succeeded = 2, terminated = 3 }


	/** Project specific details about the content of a YouTube Video. */
	export interface VideoProjectDetails {

		/** A list of project tags associated with the video during the upload. */
		tags?: Array<string>;
	}

	/** Project specific details about the content of a YouTube Video. */
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

		/** The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format. */
		recordingDate?: Date | null;
	}

	/** Recording information associated with the video. */
	export interface VideoRecordingDetailsFormProperties {

		/** The text description of the location where the video was recorded. */
		locationDescription: FormControl<string | null | undefined>,

		/** The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format. */
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

		/** The video's description. */
		description?: string | null;

		/** Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast. */
		liveBroadcastContent?: SearchResultSnippetLiveBroadcastContent | null;

		/** Localized versions of certain video properties (e.g. title). */
		localized?: VideoLocalization;

		/** The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt?: Date | null;

		/** A list of keyword tags associated with the video. Tags may contain spaces. */
		tags?: Array<string>;

		/** Internal representation of thumbnails for a YouTube resource. */
		thumbnails?: ThumbnailDetails;

		/** The video's title. */
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

		/** The video's description. */
		description: FormControl<string | null | undefined>,

		/** Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast. */
		liveBroadcastContent: FormControl<SearchResultSnippetLiveBroadcastContent | null | undefined>,

		/** The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishedAt: FormControl<Date | null | undefined>,

		/** The video's title. */
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


	/** Basic details about a video category, such as its localized title. */
	export interface VideoStatus {

		/** This value indicates if the video can be embedded on another website. */
		embeddable?: boolean | null;

		/** This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. */
		failureReason?: VideoStatusFailureReason | null;

		/** The video's license. */
		license?: VideoStatusLicense | null;
		madeForKids?: boolean | null;

		/** The video's privacy status. */
		privacyStatus?: VideoStatusPrivacyStatus | null;

		/** This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. */
		publicStatsViewable?: boolean | null;

		/** The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
		publishAt?: Date | null;

		/** This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected. */
		rejectionReason?: VideoStatusRejectionReason | null;
		selfDeclaredMadeForKids?: boolean | null;

		/** The status of the uploaded video. */
		uploadStatus?: VideoStatusUploadStatus | null;
	}

	/** Basic details about a video category, such as its localized title. */
	export interface VideoStatusFormProperties {

		/** This value indicates if the video can be embedded on another website. */
		embeddable: FormControl<boolean | null | undefined>,

		/** This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. */
		failureReason: FormControl<VideoStatusFailureReason | null | undefined>,

		/** The video's license. */
		license: FormControl<VideoStatusLicense | null | undefined>,
		madeForKids: FormControl<boolean | null | undefined>,

		/** The video's privacy status. */
		privacyStatus: FormControl<VideoStatusPrivacyStatus | null | undefined>,

		/** This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. */
		publicStatsViewable: FormControl<boolean | null | undefined>,

		/** The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. */
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
			privacyStatus: new FormControl<VideoStatusPrivacyStatus | null | undefined>(undefined),
			publicStatsViewable: new FormControl<boolean | null | undefined>(undefined),
			publishAt: new FormControl<Date | null | undefined>(undefined),
			rejectionReason: new FormControl<VideoStatusRejectionReason | null | undefined>(undefined),
			selfDeclaredMadeForKids: new FormControl<boolean | null | undefined>(undefined),
			uploadStatus: new FormControl<VideoStatusUploadStatus | null | undefined>(undefined),
		});

	}

	export enum VideoStatusFailureReason { codec = 0, conversion = 1, emptyFile = 2, invalidFile = 3, tooSmall = 4, uploadAborted = 5 }

	export enum VideoStatusLicense { creativeCommon = 0, youtube = 1 }

	export enum VideoStatusPrivacyStatus { _private = 0, _public = 1, unlisted = 2 }

	export enum VideoStatusRejectionReason { claim = 0, copyright = 1, duplicate = 2, inappropriate = 3, legal = 4, length = 5, termsOfUse = 6, trademark = 7, uploaderAccountClosed = 8, uploaderAccountSuspended = 9 }

	export enum VideoStatusUploadStatus { deleted = 0, failed = 1, processed = 2, rejected = 3, uploaded = 4 }


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

		/** A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API. */
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


	/** A videoAbuseReportReason resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with video.ReportAbuse. */
	export interface VideoAbuseReportReason {

		/** Etag of this resource. */
		etag?: string | null;

		/** The ID of this abuse report reason. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReason". */
		kind?: string | null;

		/** Basic details about a video category, such as its localized title. */
		snippet?: VideoAbuseReportReasonSnippet;
	}

	/** A videoAbuseReportReason resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with video.ReportAbuse. */
	export interface VideoAbuseReportReasonFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The ID of this abuse report reason. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReason". */
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

		/** A list of valid abuse reasons that are used with video.ReportAbuse. */
		items?: Array<VideoAbuseReportReason>;

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReasonListResponse". */
		kind?: string | null;

		/** The visitorId identifies the visitor. */
		visitorId?: string | null;
	}
	export interface VideoAbuseReportReasonListResponseFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Serialized EventId of the request which produced this response. */
		eventId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReasonListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The visitorId identifies the visitor. */
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


	/** A videoCategory resource identifies a category that has been or could be associated with uploaded videos. */
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

	/** A videoCategory resource identifies a category that has been or could be associated with uploaded videos. */
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

	export interface VideoRating {
		rating?: CommentSnippetViewerRating | null;
		videoId?: string | null;
	}
	export interface VideoRatingFormProperties {
		rating: FormControl<CommentSnippetViewerRating | null | undefined>,
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

		/** A list of videos that match the request criteria. */
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
		 * Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
		 * Get activities
		 * @param {string} part The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
		 * @param {string} channelId The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
		 * @param {boolean} home Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} publishedAfter The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
		 * @param {string} publishedBefore The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
		 * @param {string} regionCode The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
		 * @return {void} Successful response
		 */
		Youtube_activities_list(part: string, channelId: string | null | undefined, home: boolean | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, pageToken: string | null | undefined, publishedAfter: string | null | undefined, publishedBefore: string | null | undefined, regionCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'activities?part=' + (part == null ? '' : encodeURIComponent(part)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&home=' + home + '&maxResults=' + maxResults + '&mine=' + mine + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedAfter=' + (publishedAfter == null ? '' : encodeURIComponent(publishedAfter)) + '&publishedBefore=' + (publishedBefore == null ? '' : encodeURIComponent(publishedBefore)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)
		 * Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
		 * Post activities
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @return {void} Successful response
		 */
		Youtube_activities_insert(part: string, requestBody: Activity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'activities?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified caption track.
		 * Delete captions
		 * @param {string} id The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_captions_delete(id: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'captions?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
		 * Get captions
		 * @param {string} part The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
		 * @param {string} videoId The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
		 * @param {string} id The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is on behalf of.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_captions_list(part: string, videoId: string, id: string | null | undefined, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'captions?part=' + (part == null ? '' : encodeURIComponent(part)) + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a caption track.
		 * Post captions
		 * @param {string} part The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {boolean} sync The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.
		 * You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
		 * @return {void} Successful response
		 */
		Youtube_captions_insert(part: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, sync: boolean | null | undefined, requestBody: Caption): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'captions?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&sync=' + sync, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
		 * Put captions
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {boolean} sync Note: The API server only processes the parameter value if the request contains an updated caption file.
		 * The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will automatically synchronize the caption track with the audio track.
		 * @return {void} Successful response
		 */
		Youtube_captions_update(part: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, sync: boolean | null | undefined, requestBody: Caption): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'captions?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&sync=' + sync, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
		 * Get captions/{id}
		 * @param {string} id The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
		 * @param {string} onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {Youtube_captions_downloadTfmt} tfmt The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
		 * @param {string} tlang The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
		 * @return {void} Successful response
		 */
		Youtube_captions_download(id: string, onBehalfOf: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, tfmt: Youtube_captions_downloadTfmt | null | undefined, tlang: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'captions/' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOf=' + (onBehalfOf == null ? '' : encodeURIComponent(onBehalfOf)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&tfmt=' + tfmt + '&tlang=' + (tlang == null ? '' : encodeURIComponent(tlang)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a channelSection.
		 * Delete channelSections
		 * @param {string} id The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_channelSections_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channelSections?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns channelSection resources that match the API request criteria.
		 * Get channelSections
		 * @param {string} part The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
		 * @param {string} channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
		 * @param {string} hl The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
		 * @param {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_channelSections_list(part: string, channelId: string | null | undefined, hl: string | null | undefined, id: string | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channelSections?part=' + (part == null ? '' : encodeURIComponent(part)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a channelSection for the authenticated user's channel.
		 * Post channelSections
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part names that you can include in the parameter value are snippet and contentDetails.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_channelSections_insert(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: ChannelSection): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channelSections?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a channelSection.
		 * Put channelSections
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part names that you can include in the parameter value are snippet and contentDetails.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_channelSections_update(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: ChannelSection): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channelSections?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of zero or more channel resources that match the request criteria.
		 * Get channels
		 * @param {string} part The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
		 * @param {string} categoryId The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
		 * @param {string} forUsername The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
		 * @param {string} hl The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
		 * @param {boolean} managedByMe Note: This parameter is intended exclusively for YouTube content partners.
		 * Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
		 * @param {boolean} mySubscribers Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_channels_list(part: string, categoryId: string | null | undefined, forUsername: string | null | undefined, hl: string | null | undefined, id: string | null | undefined, managedByMe: boolean | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, mySubscribers: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'channels?part=' + (part == null ? '' : encodeURIComponent(part)) + '&categoryId=' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&forUsername=' + (forUsername == null ? '' : encodeURIComponent(forUsername)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&managedByMe=' + managedByMe + '&maxResults=' + maxResults + '&mine=' + mine + '&mySubscribers=' + mySubscribers + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
		 * Put channels
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.)
		 * Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
		 * @param {string} onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_channels_update(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of comment threads that match the API request parameters.
		 * Get commentThreads
		 * @param {string} part The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
		 * @param {string} allThreadsRelatedToChannelId The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
		 * @param {string} channelId The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
		 * @param {string} id The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {Youtube_commentThreads_listModerationStatus} moderationStatus Set this parameter to limit the returned comment threads to a particular moderation state.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {Youtube_commentThreads_listOrder} order The order parameter specifies the order in which the API response should list comment threads. Valid values are: 
		 * - time - Comment threads are ordered by time. This is the default behavior.
		 * - relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {string} searchTerms The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {Youtube_commentThreads_listTextFormat} textFormat Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
		 * @param {string} videoId The videoId parameter instructs the API to return comment threads associated with the specified video ID.
		 * @return {void} Successful response
		 */
		Youtube_commentThreads_list(part: string, allThreadsRelatedToChannelId: string | null | undefined, channelId: string | null | undefined, id: string | null | undefined, maxResults: number | null | undefined, moderationStatus: Youtube_commentThreads_listModerationStatus | null | undefined, order: Youtube_commentThreads_listOrder | null | undefined, pageToken: string | null | undefined, searchTerms: string | null | undefined, textFormat: Youtube_commentThreads_listTextFormat | null | undefined, videoId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'commentThreads?part=' + (part == null ? '' : encodeURIComponent(part)) + '&allThreadsRelatedToChannelId=' + (allThreadsRelatedToChannelId == null ? '' : encodeURIComponent(allThreadsRelatedToChannelId)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&moderationStatus=' + moderationStatus + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&textFormat=' + textFormat + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.
		 * Post commentThreads
		 * @param {string} part The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
		 * @return {void} Successful response
		 */
		Youtube_commentThreads_insert(part: string, requestBody: CommentThread): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'commentThreads?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the top-level comment in a comment thread.
		 * Put commentThreads
		 * @param {string} part The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
		 * @return {void} Successful response
		 */
		Youtube_commentThreads_update(part: string, requestBody: CommentThread): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'commentThreads?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Delete comments
		 * @param {string} id The id parameter specifies the comment ID for the resource that is being deleted.
		 * @return {void} Successful response
		 */
		Youtube_comments_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'comments?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of comments that match the API request parameters.
		 * Get comments
		 * @param {string} part The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
		 * @param {string} id The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.
		 * Note: This parameter is not supported for use in conjunction with the id parameter.
		 * @param {string} parentId The parentId parameter specifies the ID of the comment for which replies should be retrieved.
		 * Note: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.
		 * @param {Youtube_commentThreads_listTextFormat} textFormat This parameter indicates whether the API should return comments formatted as HTML or as plain text.
		 * @return {void} Successful response
		 */
		Youtube_comments_list(part: string, id: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, parentId: string | null | undefined, textFormat: Youtube_commentThreads_listTextFormat | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments?part=' + (part == null ? '' : encodeURIComponent(part)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parentId=' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&textFormat=' + textFormat, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.
		 * Post comments
		 * @param {string} part The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
		 * @return {void} Successful response
		 */
		Youtube_comments_insert(part: string, requestBody: Comment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a comment.
		 * Put comments
		 * @param {string} part The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
		 * @return {void} Successful response
		 */
		Youtube_comments_update(part: string, requestBody: Comment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'comments?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Expresses the caller's opinion that one or more comments should be flagged as spam.
		 * Post comments/markAsSpam
		 * @param {string} id The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
		 * @return {void} Successful response
		 */
		Youtube_comments_markAsSpam(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/markAsSpam?id=' + (id == null ? '' : encodeURIComponent(id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
		 * Post comments/setModerationStatus
		 * @param {string} id The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
		 * @param {Youtube_comments_setModerationStatusModerationStatus} moderationStatus Identifies the new moderation status of the specified comments.
		 * @param {boolean} banAuthor The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.
		 * Note: This parameter is only valid if the moderationStatus parameter is also set to rejected.
		 * @return {void} Successful response
		 */
		Youtube_comments_setModerationStatus(id: string, moderationStatus: Youtube_comments_setModerationStatusModerationStatus, banAuthor: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/setModerationStatus?id=' + (id == null ? '' : encodeURIComponent(id)) + '&moderationStatus=' + moderationStatus + '&banAuthor=' + banAuthor, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of categories that can be associated with YouTube channels.
		 * Get guideCategories
		 * @param {string} part The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} hl The hl parameter specifies the language that will be used for text values in the API response.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
		 * @param {string} regionCode The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
		 * @return {void} Successful response
		 */
		Youtube_guideCategories_list(part: string, hl: string | null | undefined, id: string | null | undefined, regionCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'guideCategories?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of application languages that the YouTube website supports.
		 * Get i18nLanguages
		 * @param {string} part The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} hl The hl parameter specifies the language that should be used for text values in the API response.
		 * @return {void} Successful response
		 */
		Youtube_i18nLanguages_list(part: string, hl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'i18nLanguages?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of content regions that the YouTube website supports.
		 * Get i18nRegions
		 * @param {string} part The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} hl The hl parameter specifies the language that should be used for text values in the API response.
		 * @return {void} Successful response
		 */
		Youtube_i18nRegions_list(part: string, hl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'i18nRegions?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a broadcast.
		 * Delete liveBroadcasts
		 * @param {string} id The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_delete(id: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'liveBroadcasts?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of YouTube broadcasts that match the API request parameters.
		 * Get liveBroadcasts
		 * @param {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {Youtube_liveBroadcasts_listBroadcastStatus} broadcastStatus The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
		 * @param {Youtube_liveBroadcasts_listBroadcastType} broadcastType The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
		 * @param {string} id The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_list(part: string, broadcastStatus: Youtube_liveBroadcasts_listBroadcastStatus | null | undefined, broadcastType: Youtube_liveBroadcasts_listBroadcastType | null | undefined, id: string | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liveBroadcasts?part=' + (part == null ? '' : encodeURIComponent(part)) + '&broadcastStatus=' + broadcastStatus + '&broadcastType=' + broadcastType + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a broadcast.
		 * Post liveBroadcasts
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_insert(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveBroadcast): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveBroadcasts?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
		 * Put liveBroadcasts
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_update(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveBroadcast): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'liveBroadcasts?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
		 * Post liveBroadcasts/bind
		 * @param {string} id The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
		 * @param {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} streamId The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_bind(id: string, part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, streamId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveBroadcasts/bind?id=' + (id == null ? '' : encodeURIComponent(id)) + '&part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&streamId=' + (streamId == null ? '' : encodeURIComponent(streamId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Controls the settings for a slate that can be displayed in the broadcast stream.
		 * Post liveBroadcasts/control
		 * @param {string} id The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
		 * @param {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {boolean} displaySlate The displaySlate parameter specifies whether the slate is being enabled or disabled.
		 * @param {string} offsetTimeMs The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.
		 * If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.
		 * Important: You should only specify a value for this parameter if your broadcast stream is delayed.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} walltime The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_control(id: string, part: string, displaySlate: boolean | null | undefined, offsetTimeMs: string | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, walltime: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveBroadcasts/control?id=' + (id == null ? '' : encodeURIComponent(id)) + '&part=' + (part == null ? '' : encodeURIComponent(part)) + '&displaySlate=' + displaySlate + '&offsetTimeMs=' + (offsetTimeMs == null ? '' : encodeURIComponent(offsetTimeMs)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&walltime=' + (walltime == null ? '' : encodeURIComponent(walltime)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
		 * Post liveBroadcasts/transition
		 * @param {Youtube_liveBroadcasts_transitionBroadcastStatus} broadcastStatus The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
		 * @param {string} id The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
		 * @param {string} part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveBroadcasts_transition(broadcastStatus: Youtube_liveBroadcasts_transitionBroadcastStatus, id: string, part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveBroadcasts/transition?broadcastStatus=' + broadcastStatus + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a chat ban.
		 * Delete liveChat/bans
		 * @param {string} id The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
		 * @return {void} Successful response
		 */
		Youtube_liveChatBans_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'liveChat/bans?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new ban to the chat.
		 * Post liveChat/bans
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
		 * @return {void} Successful response
		 */
		Youtube_liveChatBans_insert(part: string, requestBody: LiveChatBan): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveChat/bans?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a chat message.
		 * Delete liveChat/messages
		 * @param {string} id The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
		 * @return {void} Successful response
		 */
		Youtube_liveChatMessages_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'liveChat/messages?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists live chat messages for a specific chat.
		 * Get liveChat/messages
		 * @param {string} liveChatId The liveChatId parameter specifies the ID of the chat whose messages will be returned.
		 * @param {string} part The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
		 * @param {string} hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
		 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
		 * @param {number} profileImageSize The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
		 * @return {void} Successful response
		 */
		Youtube_liveChatMessages_list(liveChatId: string, part: string, hl: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, profileImageSize: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liveChat/messages?liveChatId=' + (liveChatId == null ? '' : encodeURIComponent(liveChatId)) + '&part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&profileImageSize=' + profileImageSize, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a message to a live chat.
		 * Post liveChat/messages
		 * @param {string} part The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
		 * @return {void} Successful response
		 */
		Youtube_liveChatMessages_insert(part: string, requestBody: LiveChatMessage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveChat/messages?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a chat moderator.
		 * Delete liveChat/moderators
		 * @param {string} id The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
		 * @return {void} Successful response
		 */
		Youtube_liveChatModerators_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'liveChat/moderators?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists moderators for a live chat.
		 * Get liveChat/moderators
		 * @param {string} liveChatId The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
		 * @param {string} part The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_liveChatModerators_list(liveChatId: string, part: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liveChat/moderators?liveChatId=' + (liveChatId == null ? '' : encodeURIComponent(liveChatId)) + '&part=' + (part == null ? '' : encodeURIComponent(part)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new moderator for the chat.
		 * Post liveChat/moderators
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
		 * @return {void} Successful response
		 */
		Youtube_liveChatModerators_insert(part: string, requestBody: LiveChatModerator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveChat/moderators?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a video stream.
		 * Delete liveStreams
		 * @param {string} id The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveStreams_delete(id: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'liveStreams?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of video streams that match the API request parameters.
		 * Get liveStreams
		 * @param {string} part The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
		 * @param {string} id The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_liveStreams_list(part: string, id: string | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liveStreams?part=' + (part == null ? '' : encodeURIComponent(part)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
		 * Post liveStreams
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part properties that you can include in the parameter value are id, snippet, cdn, and status.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveStreams_insert(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveStream): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liveStreams?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
		 * Put liveStreams
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * The part properties that you can include in the parameter value are id, snippet, cdn, and status.
		 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_liveStreams_update(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: LiveStream): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'liveStreams?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists members for a channel.
		 * Get members
		 * @param {string} part The part parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
		 * @param {string} filterByMemberChannelId The filterByMemberChannelId parameter represents a comma separated list of channel IDs. Only data about members that are part of this list will be included in the response. It can be used to efficiently check whether specific users are entitled to perks offered via third parties.
		 * @param {string} hasAccessToLevel The hasAccessToLevel parameter specifies, when set, the ID of a pricing level that members from the results set should have access to. When not set, all members will be considered, regardless of their active pricing level.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {Youtube_members_listMode} mode The mode parameter specifies which channel members to return.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_members_list(part: string, filterByMemberChannelId: string | null | undefined, hasAccessToLevel: string | null | undefined, maxResults: number | null | undefined, mode: Youtube_members_listMode | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'members?part=' + (part == null ? '' : encodeURIComponent(part)) + '&filterByMemberChannelId=' + (filterByMemberChannelId == null ? '' : encodeURIComponent(filterByMemberChannelId)) + '&hasAccessToLevel=' + (hasAccessToLevel == null ? '' : encodeURIComponent(hasAccessToLevel)) + '&maxResults=' + maxResults + '&mode=' + mode + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists pricing levels for a channel.
		 * Get membershipsLevels
		 * @param {string} part The part parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
		 * @return {void} Successful response
		 */
		Youtube_membershipsLevels_list(part: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'membershipsLevels?part=' + (part == null ? '' : encodeURIComponent(part)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a playlist item.
		 * Delete playlistItems
		 * @param {string} id The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlistItems_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playlistItems?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
		 * Get playlistItems
		 * @param {string} part The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
		 * @param {string} id The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} playlistId The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
		 * @param {string} videoId The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
		 * @return {void} Successful response
		 */
		Youtube_playlistItems_list(part: string, id: string | null | undefined, maxResults: number | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined, playlistId: string | null | undefined, videoId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlistItems?part=' + (part == null ? '' : encodeURIComponent(part)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&playlistId=' + (playlistId == null ? '' : encodeURIComponent(playlistId)) + '&videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a resource to a playlist.
		 * Post playlistItems
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlistItems_insert(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: PlaylistItem): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'playlistItems?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a playlist item. For example, you could update the item's position in the playlist.
		 * Put playlistItems
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlistItems_update(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: PlaylistItem): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'playlistItems?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a playlist.
		 * Delete playlists
		 * @param {string} id The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlists_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playlists?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
		 * Get playlists
		 * @param {string} part The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
		 * @param {string} channelId This value indicates that the API should only return the specified channel's playlists.
		 * @param {string} hl The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_playlists_list(part: string, channelId: string | null | undefined, hl: string | null | undefined, id: string | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'playlists?part=' + (part == null ? '' : encodeURIComponent(part)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&mine=' + mine + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a playlist.
		 * Post playlists
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @return {void} Successful response
		 */
		Youtube_playlists_insert(part: string, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, requestBody: Playlist): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'playlists?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
		 * Put playlists
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_playlists_update(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: Playlist): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'playlists?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
		 * Get search
		 * @param {string} part The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} channelId The channelId parameter indicates that the API response should only contain resources created by the channel
		 * @param {Youtube_search_listChannelType} channelType The channelType parameter lets you restrict a search to a particular type of channel.
		 * @param {Youtube_search_listEventType} eventType The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {boolean} forContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
		 * @param {boolean} forDeveloper The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
		 * @param {boolean} forMine The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
		 * @param {string} location The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
		 * - The location parameter value identifies the point at the center of the area.
		 * - The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.
		 * @param {string} locationRadius The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.
		 * The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
		 * Note: See the definition of the location parameter for more information.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {Youtube_search_listOrder} order The order parameter specifies the method that will be used to order resources in the API response.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @param {string} publishedAfter The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
		 * @param {string} publishedBefore The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
		 * @param {string} q The q parameter specifies the query term to search for.
		 * Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
		 * @param {string} regionCode The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
		 * @param {string} relatedToVideoId The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
		 * @param {string} relevanceLanguage The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
		 * @param {Youtube_search_listSafeSearch} safeSearch The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
		 * @param {string} topicId The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
		 * @param {string} type The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
		 * @param {Youtube_search_listVideoCaption} videoCaption The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {string} videoCategoryId The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoDefinition} videoDefinition The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoDimension} videoDimension The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoDuration} videoDuration The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoEmbeddable} videoEmbeddable The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoLicense} videoLicense The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoSyndicated} videoSyndicated The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @param {Youtube_search_listVideoType} videoType The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
		 * @return {void} Successful response
		 */
		Youtube_search_list(part: string, channelId: string | null | undefined, channelType: Youtube_search_listChannelType | null | undefined, eventType: Youtube_search_listEventType | null | undefined, forContentOwner: boolean | null | undefined, forDeveloper: boolean | null | undefined, forMine: boolean | null | undefined, location: string | null | undefined, locationRadius: string | null | undefined, maxResults: number | null | undefined, onBehalfOfContentOwner: string | null | undefined, order: Youtube_search_listOrder | null | undefined, pageToken: string | null | undefined, publishedAfter: string | null | undefined, publishedBefore: string | null | undefined, q: string | null | undefined, regionCode: string | null | undefined, relatedToVideoId: string | null | undefined, relevanceLanguage: string | null | undefined, safeSearch: Youtube_search_listSafeSearch | null | undefined, topicId: string | null | undefined, type: string | null | undefined, videoCaption: Youtube_search_listVideoCaption | null | undefined, videoCategoryId: string | null | undefined, videoDefinition: Youtube_search_listVideoDefinition | null | undefined, videoDimension: Youtube_search_listVideoDimension | null | undefined, videoDuration: Youtube_search_listVideoDuration | null | undefined, videoEmbeddable: Youtube_search_listVideoEmbeddable | null | undefined, videoLicense: Youtube_search_listVideoLicense | null | undefined, videoSyndicated: Youtube_search_listVideoSyndicated | null | undefined, videoType: Youtube_search_listVideoType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search?part=' + (part == null ? '' : encodeURIComponent(part)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&channelType=' + channelType + '&eventType=' + eventType + '&forContentOwner=' + forContentOwner + '&forDeveloper=' + forDeveloper + '&forMine=' + forMine + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&locationRadius=' + (locationRadius == null ? '' : encodeURIComponent(locationRadius)) + '&maxResults=' + maxResults + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedAfter=' + (publishedAfter == null ? '' : encodeURIComponent(publishedAfter)) + '&publishedBefore=' + (publishedBefore == null ? '' : encodeURIComponent(publishedBefore)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&relatedToVideoId=' + (relatedToVideoId == null ? '' : encodeURIComponent(relatedToVideoId)) + '&relevanceLanguage=' + (relevanceLanguage == null ? '' : encodeURIComponent(relevanceLanguage)) + '&safeSearch=' + safeSearch + '&topicId=' + (topicId == null ? '' : encodeURIComponent(topicId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&videoCaption=' + videoCaption + '&videoCategoryId=' + (videoCategoryId == null ? '' : encodeURIComponent(videoCategoryId)) + '&videoDefinition=' + videoDefinition + '&videoDimension=' + videoDimension + '&videoDuration=' + videoDuration + '&videoEmbeddable=' + videoEmbeddable + '&videoLicense=' + videoLicense + '&videoSyndicated=' + videoSyndicated + '&videoType=' + videoType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists sponsors for a channel.
		 * Get sponsors
		 * @param {string} part The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
		 * @param {Youtube_sponsors_listFilter} filter The filter parameter specifies which channel sponsors to return.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_sponsors_list(part: string, filter: Youtube_sponsors_listFilter | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sponsors?part=' + (part == null ? '' : encodeURIComponent(part)) + '&filter=' + filter + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a subscription.
		 * Delete subscriptions
		 * @param {string} id The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
		 * @return {void} Successful response
		 */
		Youtube_subscriptions_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns subscription resources that match the API request criteria.
		 * Get subscriptions
		 * @param {string} part The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
		 * @param {string} channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
		 * @param {string} forChannelId The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {boolean} mine Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
		 * @param {boolean} myRecentSubscribers Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
		 * @param {boolean} mySubscribers Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.
		 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
		 * @param {Youtube_subscriptions_listOrder} order The order parameter specifies the method that will be used to sort resources in the API response.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_subscriptions_list(part: string, channelId: string | null | undefined, forChannelId: string | null | undefined, id: string | null | undefined, maxResults: number | null | undefined, mine: boolean | null | undefined, myRecentSubscribers: boolean | null | undefined, mySubscribers: boolean | null | undefined, onBehalfOfContentOwner: string | null | undefined, onBehalfOfContentOwnerChannel: string | null | undefined, order: Youtube_subscriptions_listOrder | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions?part=' + (part == null ? '' : encodeURIComponent(part)) + '&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&forChannelId=' + (forChannelId == null ? '' : encodeURIComponent(forChannelId)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&maxResults=' + maxResults + '&mine=' + mine + '&myRecentSubscribers=' + myRecentSubscribers + '&mySubscribers=' + mySubscribers + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&onBehalfOfContentOwnerChannel=' + (onBehalfOfContentOwnerChannel == null ? '' : encodeURIComponent(onBehalfOfContentOwnerChannel)) + '&order=' + order + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a subscription for the authenticated user's channel.
		 * Post subscriptions
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * @return {void} Successful response
		 */
		Youtube_subscriptions_insert(part: string, requestBody: Subscription): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions?part=' + (part == null ? '' : encodeURIComponent(part)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Super Chat events for a channel.
		 * Get superChatEvents
		 * @param {string} part The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
		 * @param {string} hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
		 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * @return {void} Successful response
		 */
		Youtube_superChatEvents_list(part: string, hl: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'superChatEvents?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a custom video thumbnail to YouTube and sets it for a video.
		 * Post thumbnails/set
		 * @param {string} videoId The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_thumbnails_set(videoId: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'thumbnails/set?videoId=' + (videoId == null ? '' : encodeURIComponent(videoId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of abuse reasons that can be used for reporting abusive videos.
		 * Get videoAbuseReportReasons
		 * @param {string} part The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
		 * @param {string} hl The hl parameter specifies the language that should be used for text values in the API response.
		 * @return {void} Successful response
		 */
		Youtube_videoAbuseReportReasons_list(part: string, hl: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videoAbuseReportReasons?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of categories that can be associated with YouTube videos.
		 * Get videoCategories
		 * @param {string} part The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
		 * @param {string} hl The hl parameter specifies the language that should be used for text values in the API response.
		 * @param {string} id The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
		 * @param {string} regionCode The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
		 * @return {void} Successful response
		 */
		Youtube_videoCategories_list(part: string, hl: string | null | undefined, id: string | null | undefined, regionCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videoCategories?part=' + (part == null ? '' : encodeURIComponent(part)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a YouTube video.
		 * Delete videos
		 * @param {string} id The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_delete(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'videos?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of videos that match the API request parameters.
		 * Get videos
		 * @param {string} part The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.
		 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
		 * @param {Youtube_videos_listChart} chart The chart parameter identifies the chart that you want to retrieve.
		 * @param {string} hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.
		 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
		 * @param {string} locale DEPRECATED
		 * @param {number} maxHeight The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
		 * @param {number} maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
		 * Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
		 * @param {number} maxWidth The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
		 * @param {Youtube_videos_listMyRating} myRating Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @param {string} pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
		 * Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
		 * @param {string} regionCode The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
		 * @param {string} videoCategoryId The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
		 * @return {void} Successful response
		 */
		Youtube_videos_list(part: string, chart: Youtube_videos_listChart | null | undefined, hl: string | null | undefined, id: string | null | undefined, locale: string | null | undefined, maxHeight: number | null | undefined, maxResults: number | null | undefined, maxWidth: number | null | undefined, myRating: Youtube_videos_listMyRating | null | undefined, onBehalfOfContentOwner: string | null | undefined, pageToken: string | null | undefined, regionCode: string | null | undefined, videoCategoryId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos?part=' + (part == null ? '' : encodeURIComponent(part)) + '&chart=' + chart + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxHeight=' + maxHeight + '&maxResults=' + maxResults + '&maxWidth=' + maxWidth + '&myRating=' + myRating + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&videoCategoryId=' + (videoCategoryId == null ? '' : encodeURIComponent(videoCategoryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a video's metadata.
		 * Put videos
		 * @param {string} part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
		 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.
		 * In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_update(part: string, onBehalfOfContentOwner: string | null | undefined, requestBody: Video): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'videos?part=' + (part == null ? '' : encodeURIComponent(part)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the ratings that the authorized user gave to a list of specified videos.
		 * Get videos/getRating
		 * @param {string} id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_getRating(id: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'videos/getRating?id=' + (id == null ? '' : encodeURIComponent(id)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a like or dislike rating to a video or remove a rating from a video.
		 * Post videos/rate
		 * @param {string} id The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
		 * @param {Youtube_videos_rateRating} rating Specifies the rating to record.
		 * @return {void} Successful response
		 */
		Youtube_videos_rate(id: string, rating: Youtube_videos_rateRating): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'videos/rate?id=' + (id == null ? '' : encodeURIComponent(id)) + '&rating=' + rating, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Report abuse for a video.
		 * Post videos/reportAbuse
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_videos_reportAbuse(onBehalfOfContentOwner: string | null | undefined, requestBody: VideoAbuseReport): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'videos/reportAbuse?onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a channel's watermark image.
		 * Post watermarks/unset
		 * @param {string} channelId The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
		 * @param {string} onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.
		 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
		 * @return {void} Successful response
		 */
		Youtube_watermarks_unset(channelId: string, onBehalfOfContentOwner: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'watermarks/unset?channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&onBehalfOfContentOwner=' + (onBehalfOfContentOwner == null ? '' : encodeURIComponent(onBehalfOfContentOwner)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Youtube_captions_downloadTfmt { sbv = 0, scc = 1, srt = 2, ttml = 3, vtt = 4 }

	export enum Youtube_commentThreads_listModerationStatus { heldForReview = 0, likelySpam = 1, published = 2 }

	export enum Youtube_commentThreads_listOrder { relevance = 0, time = 1 }

	export enum Youtube_commentThreads_listTextFormat { html = 0, plainText = 1 }

	export enum Youtube_comments_setModerationStatusModerationStatus { heldForReview = 0, published = 1, rejected = 2 }

	export enum Youtube_liveBroadcasts_listBroadcastStatus { active = 0, all = 1, completed = 2, upcoming = 3 }

	export enum Youtube_liveBroadcasts_listBroadcastType { all = 0, _event = 1, persistent = 2 }

	export enum Youtube_liveBroadcasts_transitionBroadcastStatus { complete = 0, live = 1, testing = 2 }

	export enum Youtube_members_listMode { all_current = 0, updates = 1 }

	export enum Youtube_search_listChannelType { any = 0, show = 1 }

	export enum Youtube_search_listEventType { completed = 0, live = 1, upcoming = 2 }

	export enum Youtube_search_listOrder { date = 0, rating = 1, relevance = 2, title = 3, videoCount = 4, viewCount = 5 }

	export enum Youtube_search_listSafeSearch { moderate = 0, none = 1, strict = 2 }

	export enum Youtube_search_listVideoCaption { any = 0, closedCaption = 1, none = 2 }

	export enum Youtube_search_listVideoDefinition { any = 0, high = 1, standard = 2 }

	export enum Youtube_search_listVideoDimension { _2d = 0, _3d = 1, any = 2 }

	export enum Youtube_search_listVideoDuration { any = 0, _long = 1, medium = 2, _short = 3 }

	export enum Youtube_search_listVideoEmbeddable { any = 0, _true = 1 }

	export enum Youtube_search_listVideoLicense { any = 0, creativeCommon = 1, youtube = 2 }

	export enum Youtube_search_listVideoSyndicated { any = 0, _true = 1 }

	export enum Youtube_search_listVideoType { any = 0, episode = 1, movie = 2 }

	export enum Youtube_sponsors_listFilter { all = 0, newest = 1 }

	export enum Youtube_subscriptions_listOrder { alphabetical = 0, relevance = 1, unread = 2 }

	export enum Youtube_videos_listChart { mostPopular = 0 }

	export enum Youtube_videos_listMyRating { dislike = 0, like = 1 }

	export enum Youtube_videos_rateRating { dislike = 0, like = 1, none = 2 }

}

