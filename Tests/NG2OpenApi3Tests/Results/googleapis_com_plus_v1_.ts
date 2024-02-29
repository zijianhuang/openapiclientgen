import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Acl {

		/** Description of the access granted, suitable for display. */
		description?: string | null;

		/** The list of access entries. */
		items?: Array<PlusAclentryResource>;

		/** Identifies this resource as a collection of access controls. Value: "plus#acl". */
		kind?: string | null;
	}
	export interface AclFormProperties {

		/** Description of the access granted, suitable for display. */
		description: FormControl<string | null | undefined>,

		/** Identifies this resource as a collection of access controls. Value: "plus#acl". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAclFormGroup() {
		return new FormGroup<AclFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlusAclentryResource {

		/** A descriptive name for this entry. Suitable for display. */
		displayName?: string | null;

		/** The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set. */
		id?: string | null;

		/**
		 * The type of entry describing to whom access is granted. Possible values are:
		 * - "person" - Access to an individual.
		 * - "circle" - Access to members of a circle.
		 * - "myCircles" - Access to members of all the person's circles.
		 * - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles.
		 * - "domain" - Access to members of the person's Google Apps domain.
		 * - "public" - Access to anyone on the web.
		 */
		type?: string | null;
	}
	export interface PlusAclentryResourceFormProperties {

		/** A descriptive name for this entry. Suitable for display. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set. */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of entry describing to whom access is granted. Possible values are:
		 * - "person" - Access to an individual.
		 * - "circle" - Access to members of a circle.
		 * - "myCircles" - Access to members of all the person's circles.
		 * - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles.
		 * - "domain" - Access to members of the person's Google Apps domain.
		 * - "public" - Access to anyone on the web.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlusAclentryResourceFormGroup() {
		return new FormGroup<PlusAclentryResourceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Activity {
		access?: Acl;

		/** The person who performed this activity. */
		actor?: ActivityActor;

		/** Street address where this activity occurred. */
		address?: string | null;

		/** Additional content added by the person who shared this activity, applicable only when resharing an activity. */
		annotation?: string | null;

		/** If this activity is a crosspost from another system, this property specifies the ID of the original activity. */
		crosspostSource?: string | null;

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated. */
		geocode?: string | null;

		/** The ID of this activity. */
		id?: string | null;

		/** Identifies this resource as an activity. Value: "plus#activity". */
		kind?: string | null;
		location?: Place;

		/** The object of this activity. */
		object?: ActivityObject;

		/** ID of the place where this activity occurred. */
		placeId?: string | null;

		/** Name of the place where this activity occurred. */
		placeName?: string | null;

		/** The service provider that initially published this activity. */
		provider?: ActivityProvider;

		/** The time at which this activity was initially published. Formatted as an RFC 3339 timestamp. */
		published?: Date | null;

		/** Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode. */
		radius?: string | null;

		/** Title of this activity. */
		title?: string | null;

		/** The time at which this activity was last updated. Formatted as an RFC 3339 timestamp. */
		updated?: Date | null;

		/** The link to this activity. */
		url?: string | null;

		/**
		 * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:
		 * - "post" - Publish content to the stream.
		 * - "share" - Reshare an activity.
		 */
		verb?: string | null;
	}
	export interface ActivityFormProperties {

		/** Street address where this activity occurred. */
		address: FormControl<string | null | undefined>,

		/** Additional content added by the person who shared this activity, applicable only when resharing an activity. */
		annotation: FormControl<string | null | undefined>,

		/** If this activity is a crosspost from another system, this property specifies the ID of the original activity. */
		crosspostSource: FormControl<string | null | undefined>,

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated. */
		geocode: FormControl<string | null | undefined>,

		/** The ID of this activity. */
		id: FormControl<string | null | undefined>,

		/** Identifies this resource as an activity. Value: "plus#activity". */
		kind: FormControl<string | null | undefined>,

		/** ID of the place where this activity occurred. */
		placeId: FormControl<string | null | undefined>,

		/** Name of the place where this activity occurred. */
		placeName: FormControl<string | null | undefined>,

		/** The time at which this activity was initially published. Formatted as an RFC 3339 timestamp. */
		published: FormControl<Date | null | undefined>,

		/** Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode. */
		radius: FormControl<string | null | undefined>,

		/** Title of this activity. */
		title: FormControl<string | null | undefined>,

		/** The time at which this activity was last updated. Formatted as an RFC 3339 timestamp. */
		updated: FormControl<Date | null | undefined>,

		/** The link to this activity. */
		url: FormControl<string | null | undefined>,

		/**
		 * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:
		 * - "post" - Publish content to the stream.
		 * - "share" - Reshare an activity.
		 */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			annotation: new FormControl<string | null | undefined>(undefined),
			crosspostSource: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			geocode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			placeName: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<Date | null | undefined>(undefined),
			radius: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityActor {

		/** Actor info specific to particular clients. */
		clientSpecificActorInfo?: ActivityActorClientSpecificActorInfo;

		/** The name of the actor, suitable for display. */
		displayName?: string | null;

		/** The ID of the actor's Person resource. */
		id?: string | null;

		/** The image representation of the actor. */
		image?: ActivityActorImage;

		/** An object representation of the individual components of name. */
		name?: ActivityActorName;

		/** The link to the actor's Google profile. */
		url?: string | null;

		/** Verification status of actor. */
		verification?: ActivityActorVerification;
	}
	export interface ActivityActorFormProperties {

		/** The name of the actor, suitable for display. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the actor's Person resource. */
		id: FormControl<string | null | undefined>,

		/** The link to the actor's Google profile. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityActorFormGroup() {
		return new FormGroup<ActivityActorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityActorClientSpecificActorInfo {

		/** Actor info specific to YouTube clients. */
		youtubeActorInfo?: ActivityActorClientSpecificActorInfoYoutubeActorInfo;
	}
	export interface ActivityActorClientSpecificActorInfoFormProperties {
	}
	export function CreateActivityActorClientSpecificActorInfoFormGroup() {
		return new FormGroup<ActivityActorClientSpecificActorInfoFormProperties>({
		});

	}

	export interface ActivityActorClientSpecificActorInfoYoutubeActorInfo {

		/** ID of the YouTube channel owned by the Actor. */
		channelId?: string | null;
	}
	export interface ActivityActorClientSpecificActorInfoYoutubeActorInfoFormProperties {

		/** ID of the YouTube channel owned by the Actor. */
		channelId: FormControl<string | null | undefined>,
	}
	export function CreateActivityActorClientSpecificActorInfoYoutubeActorInfoFormGroup() {
		return new FormGroup<ActivityActorClientSpecificActorInfoYoutubeActorInfoFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityActorImage {

		/** The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url?: string | null;
	}
	export interface ActivityActorImageFormProperties {

		/** The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityActorImageFormGroup() {
		return new FormGroup<ActivityActorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityActorName {

		/** The family name ("last name") of the actor. */
		familyName?: string | null;

		/** The given name ("first name") of the actor. */
		givenName?: string | null;
	}
	export interface ActivityActorNameFormProperties {

		/** The family name ("last name") of the actor. */
		familyName: FormControl<string | null | undefined>,

		/** The given name ("first name") of the actor. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreateActivityActorNameFormGroup() {
		return new FormGroup<ActivityActorNameFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityActorVerification {

		/** Verification for one-time or manual processes. */
		adHocVerified?: string | null;
	}
	export interface ActivityActorVerificationFormProperties {

		/** Verification for one-time or manual processes. */
		adHocVerified: FormControl<string | null | undefined>,
	}
	export function CreateActivityActorVerificationFormGroup() {
		return new FormGroup<ActivityActorVerificationFormProperties>({
			adHocVerified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Place {

		/** The physical address of the place. */
		address?: PlaceAddress;

		/** The display name of the place. */
		displayName?: string | null;

		/** The id of the place. */
		id?: string | null;

		/** Identifies this resource as a place. Value: "plus#place". */
		kind?: string | null;

		/** The position of the place. */
		position?: PlacePosition;
	}
	export interface PlaceFormProperties {

		/** The display name of the place. */
		displayName: FormControl<string | null | undefined>,

		/** The id of the place. */
		id: FormControl<string | null | undefined>,

		/** Identifies this resource as a place. Value: "plus#place". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceAddress {

		/** The formatted address for display. */
		formatted?: string | null;
	}
	export interface PlaceAddressFormProperties {

		/** The formatted address for display. */
		formatted: FormControl<string | null | undefined>,
	}
	export function CreatePlaceAddressFormGroup() {
		return new FormGroup<PlaceAddressFormProperties>({
			formatted: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlacePosition {

		/**
		 * The latitude of this position.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude of this position.
		 * Type: double
		 */
		longitude?: number | null;
	}
	export interface PlacePositionFormProperties {

		/**
		 * The latitude of this position.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude of this position.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreatePlacePositionFormGroup() {
		return new FormGroup<PlacePositionFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObject {

		/** If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor. */
		actor?: ActivityObjectActor;

		/** The media objects attached to this activity. */
		ActivityObjectAttachments?: Array<ActivityObjectAttachments>;

		/** The HTML-formatted content, which is suitable for display. */
		content?: string | null;

		/** The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared. */
		id?: string | null;

		/**
		 * The type of the object. Possible values include, but are not limited to, the following values:
		 * - "note" - Textual content.
		 * - "activity" - A Google+ activity.
		 */
		objectType?: string | null;

		/** The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request. */
		originalContent?: string | null;

		/** People who +1'd this activity. */
		plusoners?: ActivityObjectPlusoners;

		/** Comments in reply to this activity. */
		replies?: ActivityObjectReplies;

		/** People who reshared this activity. */
		resharers?: ActivityObjectResharers;

		/** The URL that points to the linked resource. */
		url?: string | null;
	}
	export interface ActivityObjectFormProperties {

		/** The HTML-formatted content, which is suitable for display. */
		content: FormControl<string | null | undefined>,

		/** The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared. */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of the object. Possible values include, but are not limited to, the following values:
		 * - "note" - Textual content.
		 * - "activity" - A Google+ activity.
		 */
		objectType: FormControl<string | null | undefined>,

		/** The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request. */
		originalContent: FormControl<string | null | undefined>,

		/** The URL that points to the linked resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectFormGroup() {
		return new FormGroup<ActivityObjectFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			originalContent: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectActor {

		/** Actor info specific to particular clients. */
		clientSpecificActorInfo?: ActivityObjectActorClientSpecificActorInfo;

		/** The original actor's name, which is suitable for display. */
		displayName?: string | null;

		/** ID of the original actor. */
		id?: string | null;

		/** The image representation of the original actor. */
		image?: ActivityObjectActorImage;

		/** A link to the original actor's Google profile. */
		url?: string | null;

		/** Verification status of actor. */
		verification?: ActivityObjectActorVerification;
	}
	export interface ActivityObjectActorFormProperties {

		/** The original actor's name, which is suitable for display. */
		displayName: FormControl<string | null | undefined>,

		/** ID of the original actor. */
		id: FormControl<string | null | undefined>,

		/** A link to the original actor's Google profile. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectActorFormGroup() {
		return new FormGroup<ActivityObjectActorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectActorClientSpecificActorInfo {

		/** Actor info specific to YouTube clients. */
		youtubeActorInfo?: ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
	}
	export interface ActivityObjectActorClientSpecificActorInfoFormProperties {
	}
	export function CreateActivityObjectActorClientSpecificActorInfoFormGroup() {
		return new FormGroup<ActivityObjectActorClientSpecificActorInfoFormProperties>({
		});

	}

	export interface ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo {

		/** ID of the YouTube channel owned by the Actor. */
		channelId?: string | null;
	}
	export interface ActivityObjectActorClientSpecificActorInfoYoutubeActorInfoFormProperties {

		/** ID of the YouTube channel owned by the Actor. */
		channelId: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectActorClientSpecificActorInfoYoutubeActorInfoFormGroup() {
		return new FormGroup<ActivityObjectActorClientSpecificActorInfoYoutubeActorInfoFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectActorImage {

		/** A URL that points to a thumbnail photo of the original actor. */
		url?: string | null;
	}
	export interface ActivityObjectActorImageFormProperties {

		/** A URL that points to a thumbnail photo of the original actor. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectActorImageFormGroup() {
		return new FormGroup<ActivityObjectActorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectActorVerification {

		/** Verification for one-time or manual processes. */
		adHocVerified?: string | null;
	}
	export interface ActivityObjectActorVerificationFormProperties {

		/** Verification for one-time or manual processes. */
		adHocVerified: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectActorVerificationFormGroup() {
		return new FormGroup<ActivityObjectActorVerificationFormProperties>({
			adHocVerified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachments {

		/** If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types. */
		content?: string | null;

		/** The title of the attachment, such as a photo caption or an article title. */
		displayName?: string | null;

		/** If the attachment is a video, the embeddable link. */
		embed?: ActivityObjectAttachmentsEmbed;

		/** The full image URL for photo attachments. */
		fullImage?: ActivityObjectAttachmentsFullImage;

		/** The ID of the attachment. */
		id?: string | null;

		/** The preview image for photos or videos. */
		image?: ActivityObjectAttachmentsImage;

		/**
		 * The type of media object. Possible values include, but are not limited to, the following values:
		 * - "photo" - A photo.
		 * - "album" - A photo album.
		 * - "video" - A video.
		 * - "article" - An article, specified by a link.
		 */
		objectType?: string | null;

		/** If the attachment is an album, this property is a list of potential additional thumbnails from the album. */
		ActivityObjectAttachmentsThumbnails?: Array<ActivityObjectAttachmentsThumbnails>;

		/** The link to the attachment, which should be of type text/html. */
		url?: string | null;
	}
	export interface ActivityObjectAttachmentsFormProperties {

		/** If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types. */
		content: FormControl<string | null | undefined>,

		/** The title of the attachment, such as a photo caption or an article title. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the attachment. */
		id: FormControl<string | null | undefined>,

		/**
		 * The type of media object. Possible values include, but are not limited to, the following values:
		 * - "photo" - A photo.
		 * - "album" - A photo album.
		 * - "video" - A video.
		 * - "article" - An article, specified by a link.
		 */
		objectType: FormControl<string | null | undefined>,

		/** The link to the attachment, which should be of type text/html. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachmentsEmbed {

		/** Media type of the link. */
		type?: string | null;

		/** URL of the link. */
		url?: string | null;
	}
	export interface ActivityObjectAttachmentsEmbedFormProperties {

		/** Media type of the link. */
		type: FormControl<string | null | undefined>,

		/** URL of the link. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsEmbedFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsEmbedFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachmentsFullImage {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height?: number | null;

		/** Media type of the link. */
		type?: string | null;

		/** URL of the image. */
		url?: string | null;

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width?: number | null;
	}
	export interface ActivityObjectAttachmentsFullImageFormProperties {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height: FormControl<number | null | undefined>,

		/** Media type of the link. */
		type: FormControl<string | null | undefined>,

		/** URL of the image. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsFullImageFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsFullImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachmentsImage {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height?: number | null;

		/** Media type of the link. */
		type?: string | null;

		/** Image URL. */
		url?: string | null;

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width?: number | null;
	}
	export interface ActivityObjectAttachmentsImageFormProperties {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height: FormControl<number | null | undefined>,

		/** Media type of the link. */
		type: FormControl<string | null | undefined>,

		/** Image URL. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsImageFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachmentsThumbnails {

		/** Potential name of the thumbnail. */
		description?: string | null;

		/** Image resource. */
		image?: ActivityObjectAttachmentsThumbnailsImage;

		/** URL of the webpage containing the image. */
		url?: string | null;
	}
	export interface ActivityObjectAttachmentsThumbnailsFormProperties {

		/** Potential name of the thumbnail. */
		description: FormControl<string | null | undefined>,

		/** URL of the webpage containing the image. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsThumbnailsFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsThumbnailsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectAttachmentsThumbnailsImage {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height?: number | null;

		/** Media type of the link. */
		type?: string | null;

		/** Image url. */
		url?: string | null;

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width?: number | null;
	}
	export interface ActivityObjectAttachmentsThumbnailsImageFormProperties {

		/**
		 * The height, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		height: FormControl<number | null | undefined>,

		/** Media type of the link. */
		type: FormControl<string | null | undefined>,

		/** Image url. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of the linked resource.
		 * Type: uint, 0 to 4,294,967,295
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectAttachmentsThumbnailsImageFormGroup() {
		return new FormGroup<ActivityObjectAttachmentsThumbnailsImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectPlusoners {

		/** The URL for the collection of people who +1'd this activity. */
		selfLink?: string | null;

		/**
		 * Total number of people who +1'd this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems?: number | null;
	}
	export interface ActivityObjectPlusonersFormProperties {

		/** The URL for the collection of people who +1'd this activity. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * Total number of people who +1'd this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectPlusonersFormGroup() {
		return new FormGroup<ActivityObjectPlusonersFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectReplies {

		/** The URL for the collection of comments in reply to this activity. */
		selfLink?: string | null;

		/**
		 * Total number of comments on this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems?: number | null;
	}
	export interface ActivityObjectRepliesFormProperties {

		/** The URL for the collection of comments in reply to this activity. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * Total number of comments on this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectRepliesFormGroup() {
		return new FormGroup<ActivityObjectRepliesFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityObjectResharers {

		/** The URL for the collection of resharers. */
		selfLink?: string | null;

		/**
		 * Total number of people who reshared this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems?: number | null;
	}
	export interface ActivityObjectResharersFormProperties {

		/** The URL for the collection of resharers. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * Total number of people who reshared this activity.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateActivityObjectResharersFormGroup() {
		return new FormGroup<ActivityObjectResharersFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityProvider {

		/** Name of the service provider. */
		title?: string | null;
	}
	export interface ActivityProviderFormProperties {

		/** Name of the service provider. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateActivityProviderFormGroup() {
		return new FormGroup<ActivityProviderFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityFeed {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The ID of this collection of activities. Deprecated. */
		id?: string | null;

		/** The activities in this page of results. */
		items?: Array<Activity>;

		/** Identifies this resource as a collection of activities. Value: "plus#activityFeed". */
		kind?: string | null;

		/** Link to the next page of activities. */
		nextLink?: string | null;

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** Link to this activity resource. */
		selfLink?: string | null;

		/** The title of this collection of activities, which is a truncated portion of the content. */
		title?: string | null;

		/** The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp. */
		updated?: Date | null;
	}
	export interface ActivityFeedFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The ID of this collection of activities. Deprecated. */
		id: FormControl<string | null | undefined>,

		/** Identifies this resource as a collection of activities. Value: "plus#activityFeed". */
		kind: FormControl<string | null | undefined>,

		/** Link to the next page of activities. */
		nextLink: FormControl<string | null | undefined>,

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Link to this activity resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The title of this collection of activities, which is a truncated portion of the content. */
		title: FormControl<string | null | undefined>,

		/** The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateActivityFeedFormGroup() {
		return new FormGroup<ActivityFeedFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Comment {

		/** The person who posted this comment. */
		actor?: CommentActor;

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The ID of this comment. */
		id?: string | null;

		/** The activity this comment replied to. */
		CommentInReplyTo?: Array<CommentInReplyTo>;

		/** Identifies this resource as a comment. Value: "plus#comment". */
		kind?: string | null;

		/** The object of this comment. */
		object?: CommentObject;

		/** People who +1'd this comment. */
		plusoners?: CommentPlusoners;

		/** The time at which this comment was initially published. Formatted as an RFC 3339 timestamp. */
		published?: Date | null;

		/** Link to this comment resource. */
		selfLink?: string | null;

		/** The time at which this comment was last updated. Formatted as an RFC 3339 timestamp. */
		updated?: Date | null;

		/**
		 * This comment's verb, indicating what action was performed. Possible values are:
		 * - "post" - Publish content to the stream.
		 */
		verb?: string | null;
	}
	export interface CommentFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The ID of this comment. */
		id: FormControl<string | null | undefined>,

		/** Identifies this resource as a comment. Value: "plus#comment". */
		kind: FormControl<string | null | undefined>,

		/** The time at which this comment was initially published. Formatted as an RFC 3339 timestamp. */
		published: FormControl<Date | null | undefined>,

		/** Link to this comment resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The time at which this comment was last updated. Formatted as an RFC 3339 timestamp. */
		updated: FormControl<Date | null | undefined>,

		/**
		 * This comment's verb, indicating what action was performed. Possible values are:
		 * - "post" - Publish content to the stream.
		 */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<Date | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentActor {

		/** Actor info specific to particular clients. */
		clientSpecificActorInfo?: CommentActorClientSpecificActorInfo;

		/** The name of this actor, suitable for display. */
		displayName?: string | null;

		/** The ID of the actor. */
		id?: string | null;

		/** The image representation of this actor. */
		image?: CommentActorImage;

		/** A link to the Person resource for this actor. */
		url?: string | null;

		/** Verification status of actor. */
		verification?: CommentActorVerification;
	}
	export interface CommentActorFormProperties {

		/** The name of this actor, suitable for display. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the actor. */
		id: FormControl<string | null | undefined>,

		/** A link to the Person resource for this actor. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommentActorFormGroup() {
		return new FormGroup<CommentActorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentActorClientSpecificActorInfo {

		/** Actor info specific to YouTube clients. */
		youtubeActorInfo?: CommentActorClientSpecificActorInfoYoutubeActorInfo;
	}
	export interface CommentActorClientSpecificActorInfoFormProperties {
	}
	export function CreateCommentActorClientSpecificActorInfoFormGroup() {
		return new FormGroup<CommentActorClientSpecificActorInfoFormProperties>({
		});

	}

	export interface CommentActorClientSpecificActorInfoYoutubeActorInfo {

		/** ID of the YouTube channel owned by the Actor. */
		channelId?: string | null;
	}
	export interface CommentActorClientSpecificActorInfoYoutubeActorInfoFormProperties {

		/** ID of the YouTube channel owned by the Actor. */
		channelId: FormControl<string | null | undefined>,
	}
	export function CreateCommentActorClientSpecificActorInfoYoutubeActorInfoFormGroup() {
		return new FormGroup<CommentActorClientSpecificActorInfoYoutubeActorInfoFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentActorImage {

		/** The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url?: string | null;
	}
	export interface CommentActorImageFormProperties {

		/** The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommentActorImageFormGroup() {
		return new FormGroup<CommentActorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentActorVerification {

		/** Verification for one-time or manual processes. */
		adHocVerified?: string | null;
	}
	export interface CommentActorVerificationFormProperties {

		/** Verification for one-time or manual processes. */
		adHocVerified: FormControl<string | null | undefined>,
	}
	export function CreateCommentActorVerificationFormGroup() {
		return new FormGroup<CommentActorVerificationFormProperties>({
			adHocVerified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentInReplyTo {

		/** The ID of the activity. */
		id?: string | null;

		/** The URL of the activity. */
		url?: string | null;
	}
	export interface CommentInReplyToFormProperties {

		/** The ID of the activity. */
		id: FormControl<string | null | undefined>,

		/** The URL of the activity. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommentInReplyToFormGroup() {
		return new FormGroup<CommentInReplyToFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentObject {

		/** The HTML-formatted content, suitable for display. */
		content?: string | null;

		/**
		 * The object type of this comment. Possible values are:
		 * - "comment" - A comment in reply to an activity.
		 */
		objectType?: string | null;

		/** The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request. */
		originalContent?: string | null;
	}
	export interface CommentObjectFormProperties {

		/** The HTML-formatted content, suitable for display. */
		content: FormControl<string | null | undefined>,

		/**
		 * The object type of this comment. Possible values are:
		 * - "comment" - A comment in reply to an activity.
		 */
		objectType: FormControl<string | null | undefined>,

		/** The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request. */
		originalContent: FormControl<string | null | undefined>,
	}
	export function CreateCommentObjectFormGroup() {
		return new FormGroup<CommentObjectFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			originalContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentPlusoners {

		/**
		 * Total number of people who +1'd this comment.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems?: number | null;
	}
	export interface CommentPlusonersFormProperties {

		/**
		 * Total number of people who +1'd this comment.
		 * Type: uint, 0 to 4,294,967,295
		 */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateCommentPlusonersFormGroup() {
		return new FormGroup<CommentPlusonersFormProperties>({
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentFeed {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The ID of this collection of comments. */
		id?: string | null;

		/** The comments in this page of results. */
		items?: Array<Comment>;

		/** Identifies this resource as a collection of comments. Value: "plus#commentFeed". */
		kind?: string | null;

		/** Link to the next page of activities. */
		nextLink?: string | null;

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** The title of this collection of comments. */
		title?: string | null;

		/** The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp. */
		updated?: Date | null;
	}
	export interface CommentFeedFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The ID of this collection of comments. */
		id: FormControl<string | null | undefined>,

		/** Identifies this resource as a collection of comments. Value: "plus#commentFeed". */
		kind: FormControl<string | null | undefined>,

		/** Link to the next page of activities. */
		nextLink: FormControl<string | null | undefined>,

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The title of this collection of comments. */
		title: FormControl<string | null | undefined>,

		/** The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateCommentFeedFormGroup() {
		return new FormGroup<CommentFeedFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PeopleFeed {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method. */
		items?: Array<Person>;

		/** Identifies this resource as a collection of people. Value: "plus#peopleFeed". */
		kind?: string | null;

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** Link to this resource. */
		selfLink?: string | null;

		/** The title of this collection of people. */
		title?: string | null;

		/**
		 * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalItems?: number | null;
	}
	export interface PeopleFeedFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Identifies this resource as a collection of people. Value: "plus#peopleFeed". */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Link to this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The title of this collection of people. */
		title: FormControl<string | null | undefined>,

		/**
		 * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreatePeopleFeedFormGroup() {
		return new FormGroup<PeopleFeedFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Person {

		/** A short biography for this person. */
		aboutMe?: string | null;

		/** The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning. */
		ageRange?: PersonAgeRange;

		/** The person's date of birth, represented as YYYY-MM-DD. */
		birthday?: string | null;

		/** The "bragging rights" line of this person. */
		braggingRights?: string | null;

		/**
		 * For followers who are visible, the number of people who have added this person or page to a circle.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		circledByCount?: number | null;

		/** The cover photo content. */
		cover?: PersonCover;

		/** (this field is not currently used) */
		currentLocation?: string | null;

		/** The name of this person, which is suitable for display. */
		displayName?: string | null;

		/** The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name. */
		domain?: string | null;

		/** A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address. */
		PersonEmails?: Array<PersonEmails>;

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/**
		 * The person's gender. Possible values include, but are not limited to, the following values:
		 * - "male" - Male gender.
		 * - "female" - Female gender.
		 * - "other" - Other.
		 */
		gender?: string | null;

		/** The ID of this person. */
		id?: string | null;

		/** The representation of the person's profile photo. */
		image?: PersonImage;

		/** Whether this user has signed up for Google+. */
		isPlusUser?: boolean | null;

		/** Identifies this resource as a person. Value: "plus#person". */
		kind?: string | null;

		/** The user's preferred language for rendering. */
		language?: string | null;

		/** An object representation of the individual components of a person's name. */
		name?: PersonName;

		/** The nickname of this person. */
		nickname?: string | null;

		/**
		 * Type of person within Google+. Possible values include, but are not limited to, the following values:
		 * - "person" - represents an actual person.
		 * - "page" - represents a page.
		 */
		objectType?: string | null;

		/** The occupation of this person. */
		occupation?: string | null;

		/** A list of current or past organizations with which this person is associated. */
		PersonOrganizations?: Array<PersonOrganizations>;

		/** A list of places where this person has lived. */
		PersonPlacesLived?: Array<PersonPlacesLived>;

		/**
		 * If a Google+ Page, the number of people who have +1'd this page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		plusOneCount?: number | null;

		/**
		 * The person's relationship status. Possible values include, but are not limited to, the following values:
		 * - "single" - Person is single.
		 * - "in_a_relationship" - Person is in a relationship.
		 * - "engaged" - Person is engaged.
		 * - "married" - Person is married.
		 * - "its_complicated" - The relationship is complicated.
		 * - "open_relationship" - Person is in an open relationship.
		 * - "widowed" - Person is widowed.
		 * - "in_domestic_partnership" - Person is in a domestic partnership.
		 * - "in_civil_union" - Person is in a civil union.
		 */
		relationshipStatus?: string | null;

		/** The person's skills. */
		skills?: string | null;

		/** The brief description (tagline) of this person. */
		tagline?: string | null;

		/** The URL of this person's profile. */
		url?: string | null;

		/** A list of URLs for this person. */
		PersonUrls?: Array<PersonUrls>;

		/** Whether the person or Google+ Page has been verified. */
		verified?: boolean | null;
	}
	export interface PersonFormProperties {

		/** A short biography for this person. */
		aboutMe: FormControl<string | null | undefined>,

		/** The person's date of birth, represented as YYYY-MM-DD. */
		birthday: FormControl<string | null | undefined>,

		/** The "bragging rights" line of this person. */
		braggingRights: FormControl<string | null | undefined>,

		/**
		 * For followers who are visible, the number of people who have added this person or page to a circle.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		circledByCount: FormControl<number | null | undefined>,

		/** (this field is not currently used) */
		currentLocation: FormControl<string | null | undefined>,

		/** The name of this person, which is suitable for display. */
		displayName: FormControl<string | null | undefined>,

		/** The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name. */
		domain: FormControl<string | null | undefined>,

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/**
		 * The person's gender. Possible values include, but are not limited to, the following values:
		 * - "male" - Male gender.
		 * - "female" - Female gender.
		 * - "other" - Other.
		 */
		gender: FormControl<string | null | undefined>,

		/** The ID of this person. */
		id: FormControl<string | null | undefined>,

		/** Whether this user has signed up for Google+. */
		isPlusUser: FormControl<boolean | null | undefined>,

		/** Identifies this resource as a person. Value: "plus#person". */
		kind: FormControl<string | null | undefined>,

		/** The user's preferred language for rendering. */
		language: FormControl<string | null | undefined>,

		/** The nickname of this person. */
		nickname: FormControl<string | null | undefined>,

		/**
		 * Type of person within Google+. Possible values include, but are not limited to, the following values:
		 * - "person" - represents an actual person.
		 * - "page" - represents a page.
		 */
		objectType: FormControl<string | null | undefined>,

		/** The occupation of this person. */
		occupation: FormControl<string | null | undefined>,

		/**
		 * If a Google+ Page, the number of people who have +1'd this page.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		plusOneCount: FormControl<number | null | undefined>,

		/**
		 * The person's relationship status. Possible values include, but are not limited to, the following values:
		 * - "single" - Person is single.
		 * - "in_a_relationship" - Person is in a relationship.
		 * - "engaged" - Person is engaged.
		 * - "married" - Person is married.
		 * - "its_complicated" - The relationship is complicated.
		 * - "open_relationship" - Person is in an open relationship.
		 * - "widowed" - Person is widowed.
		 * - "in_domestic_partnership" - Person is in a domestic partnership.
		 * - "in_civil_union" - Person is in a civil union.
		 */
		relationshipStatus: FormControl<string | null | undefined>,

		/** The person's skills. */
		skills: FormControl<string | null | undefined>,

		/** The brief description (tagline) of this person. */
		tagline: FormControl<string | null | undefined>,

		/** The URL of this person's profile. */
		url: FormControl<string | null | undefined>,

		/** Whether the person or Google+ Page has been verified. */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			aboutMe: new FormControl<string | null | undefined>(undefined),
			birthday: new FormControl<string | null | undefined>(undefined),
			braggingRights: new FormControl<string | null | undefined>(undefined),
			circledByCount: new FormControl<number | null | undefined>(undefined),
			currentLocation: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isPlusUser: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			occupation: new FormControl<string | null | undefined>(undefined),
			plusOneCount: new FormControl<number | null | undefined>(undefined),
			relationshipStatus: new FormControl<string | null | undefined>(undefined),
			skills: new FormControl<string | null | undefined>(undefined),
			tagline: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PersonAgeRange {

		/**
		 * The age range's upper bound, if any. Possible values include, but are not limited to, the following:
		 * - "17" - for age 17
		 * - "20" - for age 20
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max?: number | null;

		/**
		 * The age range's lower bound, if any. Possible values include, but are not limited to, the following:
		 * - "21" - for age 21
		 * - "18" - for age 18
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min?: number | null;
	}
	export interface PersonAgeRangeFormProperties {

		/**
		 * The age range's upper bound, if any. Possible values include, but are not limited to, the following:
		 * - "17" - for age 17
		 * - "20" - for age 20
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The age range's lower bound, if any. Possible values include, but are not limited to, the following:
		 * - "21" - for age 21
		 * - "18" - for age 18
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min: FormControl<number | null | undefined>,
	}
	export function CreatePersonAgeRangeFormGroup() {
		return new FormGroup<PersonAgeRangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PersonCover {

		/** Extra information about the cover photo. */
		coverInfo?: PersonCoverCoverInfo;

		/** The person's primary cover image. */
		coverPhoto?: PersonCoverCoverPhoto;

		/**
		 * The layout of the cover art. Possible values include, but are not limited to, the following values:
		 * - "banner" - One large image banner.
		 */
		layout?: string | null;
	}
	export interface PersonCoverFormProperties {

		/**
		 * The layout of the cover art. Possible values include, but are not limited to, the following values:
		 * - "banner" - One large image banner.
		 */
		layout: FormControl<string | null | undefined>,
	}
	export function CreatePersonCoverFormGroup() {
		return new FormGroup<PersonCoverFormProperties>({
			layout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonCoverCoverInfo {

		/**
		 * The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftImageOffset?: number | null;

		/**
		 * The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topImageOffset?: number | null;
	}
	export interface PersonCoverCoverInfoFormProperties {

		/**
		 * The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftImageOffset: FormControl<number | null | undefined>,

		/**
		 * The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topImageOffset: FormControl<number | null | undefined>,
	}
	export function CreatePersonCoverCoverInfoFormGroup() {
		return new FormGroup<PersonCoverCoverInfoFormProperties>({
			leftImageOffset: new FormControl<number | null | undefined>(undefined),
			topImageOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PersonCoverCoverPhoto {

		/**
		 * The height of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The URL of the image. */
		url?: string | null;

		/**
		 * The width of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface PersonCoverCoverPhotoFormProperties {

		/**
		 * The height of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The URL of the image. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePersonCoverCoverPhotoFormGroup() {
		return new FormGroup<PersonCoverCoverPhotoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PersonEmails {

		/**
		 * The type of address. Possible values include, but are not limited to, the following values:
		 * - "account" - Google account email address.
		 * - "home" - Home email address.
		 * - "work" - Work email address.
		 * - "other" - Other.
		 */
		type?: string | null;

		/** The email address. */
		value?: string | null;
	}
	export interface PersonEmailsFormProperties {

		/**
		 * The type of address. Possible values include, but are not limited to, the following values:
		 * - "account" - Google account email address.
		 * - "home" - Home email address.
		 * - "work" - Work email address.
		 * - "other" - Other.
		 */
		type: FormControl<string | null | undefined>,

		/** The email address. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePersonEmailsFormGroup() {
		return new FormGroup<PersonEmailsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonImage {

		/** Whether the person's profile photo is the default one */
		isDefault?: boolean | null;

		/** The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url?: string | null;
	}
	export interface PersonImageFormProperties {

		/** Whether the person's profile photo is the default one */
		isDefault: FormControl<boolean | null | undefined>,

		/** The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePersonImageFormGroup() {
		return new FormGroup<PersonImageFormProperties>({
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonName {

		/** The family name (last name) of this person. */
		familyName?: string | null;

		/** The full name of this person, including middle names, suffixes, etc. */
		formatted?: string | null;

		/** The given name (first name) of this person. */
		givenName?: string | null;

		/** The honorific prefixes (such as "Dr." or "Mrs.") for this person. */
		honorificPrefix?: string | null;

		/** The honorific suffixes (such as "Jr.") for this person. */
		honorificSuffix?: string | null;

		/** The middle name of this person. */
		middleName?: string | null;
	}
	export interface PersonNameFormProperties {

		/** The family name (last name) of this person. */
		familyName: FormControl<string | null | undefined>,

		/** The full name of this person, including middle names, suffixes, etc. */
		formatted: FormControl<string | null | undefined>,

		/** The given name (first name) of this person. */
		givenName: FormControl<string | null | undefined>,

		/** The honorific prefixes (such as "Dr." or "Mrs.") for this person. */
		honorificPrefix: FormControl<string | null | undefined>,

		/** The honorific suffixes (such as "Jr.") for this person. */
		honorificSuffix: FormControl<string | null | undefined>,

		/** The middle name of this person. */
		middleName: FormControl<string | null | undefined>,
	}
	export function CreatePersonNameFormGroup() {
		return new FormGroup<PersonNameFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
			formatted: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			honorificPrefix: new FormControl<string | null | undefined>(undefined),
			honorificSuffix: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonOrganizations {

		/** The department within the organization. Deprecated. */
		department?: string | null;

		/** A short description of the person's role in this organization. Deprecated. */
		description?: string | null;

		/** The date that the person left this organization. */
		endDate?: string | null;

		/** The location of this organization. Deprecated. */
		location?: string | null;

		/** The name of the organization. */
		name?: string | null;

		/** If "true", indicates this organization is the person's primary one, which is typically interpreted as the current one. */
		primary?: boolean | null;

		/** The date that the person joined this organization. */
		startDate?: string | null;

		/** The person's job title or role within the organization. */
		title?: string | null;

		/**
		 * The type of organization. Possible values include, but are not limited to, the following values:
		 * - "work" - Work.
		 * - "school" - School.
		 */
		type?: string | null;
	}
	export interface PersonOrganizationsFormProperties {

		/** The department within the organization. Deprecated. */
		department: FormControl<string | null | undefined>,

		/** A short description of the person's role in this organization. Deprecated. */
		description: FormControl<string | null | undefined>,

		/** The date that the person left this organization. */
		endDate: FormControl<string | null | undefined>,

		/** The location of this organization. Deprecated. */
		location: FormControl<string | null | undefined>,

		/** The name of the organization. */
		name: FormControl<string | null | undefined>,

		/** If "true", indicates this organization is the person's primary one, which is typically interpreted as the current one. */
		primary: FormControl<boolean | null | undefined>,

		/** The date that the person joined this organization. */
		startDate: FormControl<string | null | undefined>,

		/** The person's job title or role within the organization. */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of organization. Possible values include, but are not limited to, the following values:
		 * - "work" - Work.
		 * - "school" - School.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonOrganizationsFormGroup() {
		return new FormGroup<PersonOrganizationsFormProperties>({
			department: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonPlacesLived {

		/** If "true", this place of residence is this person's primary residence. */
		primary?: boolean | null;

		/** A place where this person has lived. For example: "Seattle, WA", "Near Toronto". */
		value?: string | null;
	}
	export interface PersonPlacesLivedFormProperties {

		/** If "true", this place of residence is this person's primary residence. */
		primary: FormControl<boolean | null | undefined>,

		/** A place where this person has lived. For example: "Seattle, WA", "Near Toronto". */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePersonPlacesLivedFormGroup() {
		return new FormGroup<PersonPlacesLivedFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonUrls {

		/** The label of the URL. */
		label?: string | null;

		/**
		 * The type of URL. Possible values include, but are not limited to, the following values:
		 * - "otherProfile" - URL for another profile.
		 * - "contributor" - URL to a site for which this person is a contributor.
		 * - "website" - URL for this Google+ Page's primary website.
		 * - "other" - Other URL.
		 */
		type?: string | null;

		/** The URL value. */
		value?: string | null;
	}
	export interface PersonUrlsFormProperties {

		/** The label of the URL. */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of URL. Possible values include, but are not limited to, the following values:
		 * - "otherProfile" - URL for another profile.
		 * - "contributor" - URL to a site for which this person is a contributor.
		 * - "website" - URL for this Google+ Page's primary website.
		 * - "other" - Other URL.
		 */
		type: FormControl<string | null | undefined>,

		/** The URL value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePersonUrlsFormGroup() {
		return new FormGroup<PersonUrlsFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get activities
		 * @param {string} query Full-text search query string.
		 * @param {string} language Specify the preferred language to search with. See search language codes for available values.
		 * @param {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 1    Maximum: 20
		 * @param {Plus_activities_searchOrderBy} orderBy Specifies how to order search results.
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
		 * @return {ActivityFeed} Successful response
		 */
		Plus_activities_search(query: string, language: string | null | undefined, maxResults: number | null | undefined, orderBy: Plus_activities_searchOrderBy | null | undefined, pageToken: string | null | undefined): Observable<ActivityFeed> {
			return this.http.get<ActivityFeed>(this.baseUri + 'activities?query=' + (query == null ? '' : encodeURIComponent(query)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get activities/{activityId}
		 * @param {string} activityId The ID of the activity to get.
		 * @return {Activity} Successful response
		 */
		Plus_activities_get(activityId: string): Observable<Activity> {
			return this.http.get<Activity>(this.baseUri + 'activities/' + (activityId == null ? '' : encodeURIComponent(activityId)), {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get activities/{activityId}/comments
		 * @param {string} activityId The ID of the activity to get comments for.
		 * @param {number} maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 0    Maximum: 500
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @param {Plus_comments_listSortOrder} sortOrder The order in which to sort the list of comments.
		 * @return {CommentFeed} Successful response
		 */
		Plus_comments_list(activityId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortOrder: Plus_comments_listSortOrder | null | undefined): Observable<CommentFeed> {
			return this.http.get<CommentFeed>(this.baseUri + 'activities/' + (activityId == null ? '' : encodeURIComponent(activityId)) + '/comments&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get activities/{activityId}/people/{collection}
		 * @param {string} activityId The ID of the activity to get the list of people for.
		 * @param {Plus_people_listByActivityCollection} collection The collection of people to list.
		 * @param {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {PeopleFeed} Successful response
		 */
		Plus_people_listByActivity(activityId: string, collection: Plus_people_listByActivityCollection, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PeopleFeed> {
			return this.http.get<PeopleFeed>(this.baseUri + 'activities/' + (activityId == null ? '' : encodeURIComponent(activityId)) + '/people/' + collection + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get comments/{commentId}
		 * @param {string} commentId The ID of the comment to get.
		 * @return {Comment} Successful response
		 */
		Plus_comments_get(commentId: string): Observable<Comment> {
			return this.http.get<Comment>(this.baseUri + 'comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get people
		 * @param {string} query Specify a query string for full text search of public text in all profiles.
		 * @param {string} language Specify the preferred language to search with. See search language codes for available values.
		 * @param {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
		 * @return {PeopleFeed} Successful response
		 */
		Plus_people_search(query: string, language: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PeopleFeed> {
			return this.http.get<PeopleFeed>(this.baseUri + 'people?query=' + (query == null ? '' : encodeURIComponent(query)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
		 * Get people/{userId}
		 * @param {string} userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
		 * @return {Person} Successful response
		 */
		Plus_people_get(userId: string): Observable<Person> {
			return this.http.get<Person>(this.baseUri + 'people/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Shut down. See https://developers.google.com/+/api-shutdown for more details.
		 * Get people/{userId}/activities/{collection}
		 * @param {string} userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
		 * @param {Plus_activities_listCollection} collection The collection of activities to list.
		 * @param {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {ActivityFeed} Successful response
		 */
		Plus_activities_list(userId: string, collection: Plus_activities_listCollection, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ActivityFeed> {
			return this.http.get<ActivityFeed>(this.baseUri + 'people/' + (userId == null ? '' : encodeURIComponent(userId)) + '/activities/' + collection + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all of the people in the specified collection.
		 * Get people/{userId}/people/{collection}
		 * @param {string} userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
		 * @param {Plus_people_listCollection} collection The collection of people to list.
		 * @param {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
		 *     Minimum: 1    Maximum: 100
		 * @param {Plus_people_listOrderBy} orderBy The order to return people in.
		 * @param {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {PeopleFeed} Successful response
		 */
		Plus_people_list(userId: string, collection: Plus_people_listCollection, maxResults: number | null | undefined, orderBy: Plus_people_listOrderBy | null | undefined, pageToken: string | null | undefined): Observable<PeopleFeed> {
			return this.http.get<PeopleFeed>(this.baseUri + 'people/' + (userId == null ? '' : encodeURIComponent(userId)) + '/people/' + collection + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Plus_activities_searchOrderBy { best = 'best', recent = 'recent' }

	export enum Plus_comments_listSortOrder { ascending = 'ascending', descending = 'descending' }

	export enum Plus_people_listByActivityCollection { plusoners = 'plusoners', resharers = 'resharers' }

	export enum Plus_activities_listCollection { public = 'public' }

	export enum Plus_people_listCollection { connected = 'connected', visible = 'visible' }

	export enum Plus_people_listOrderBy { alphabetical = 'alphabetical', best = 'best' }

}

