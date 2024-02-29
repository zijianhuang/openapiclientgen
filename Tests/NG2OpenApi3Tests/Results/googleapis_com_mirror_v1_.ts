import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an account passed into the Account Manager on Glass. */
	export interface Account {
		authTokens?: Array<AuthToken>;
		features?: Array<string>;
		password?: string | null;
		userData?: Array<UserData>;
	}

	/** Represents an account passed into the Account Manager on Glass. */
	export interface AccountFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthToken {
		authToken?: string | null;
		type?: string | null;
	}
	export interface AuthTokenFormProperties {
		authToken: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAuthTokenFormGroup() {
		return new FormGroup<AuthTokenFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserData {
		key?: string | null;
		value?: string | null;
	}
	export interface UserDataFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents media content, such as a photo, that can be attached to a timeline item. */
	export interface Attachment {

		/** The MIME type of the attachment. */
		contentType?: string | null;

		/** The URL for the content. */
		contentUrl?: string | null;

		/** The ID of the attachment. */
		id?: string | null;

		/** Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later. */
		isProcessingContent?: boolean | null;
	}

	/** Represents media content, such as a photo, that can be attached to a timeline item. */
	export interface AttachmentFormProperties {

		/** The MIME type of the attachment. */
		contentType: FormControl<string | null | undefined>,

		/** The URL for the content. */
		contentUrl: FormControl<string | null | undefined>,

		/** The ID of the attachment. */
		id: FormControl<string | null | undefined>,

		/** Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later. */
		isProcessingContent: FormControl<boolean | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			contentUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isProcessingContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of Attachments. This is the response from the server to GET requests on the attachments collection. */
	export interface AttachmentsListResponse {

		/** The list of attachments. */
		items?: Array<Attachment>;

		/** The type of resource. This is always mirror#attachmentsList. */
		kind?: string | null;
	}

	/** A list of Attachments. This is the response from the server to GET requests on the attachments collection. */
	export interface AttachmentsListResponseFormProperties {

		/** The type of resource. This is always mirror#attachmentsList. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentsListResponseFormGroup() {
		return new FormGroup<AttachmentsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single menu command that is part of a Contact. */
	export interface Command {

		/**
		 * The type of operation this command corresponds to. Allowed values are:
		 * - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the "Take a note" voice menu command.
		 * - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the "Post an update" voice menu command.
		 */
		type?: string | null;
	}

	/** A single menu command that is part of a Contact. */
	export interface CommandFormProperties {

		/**
		 * The type of operation this command corresponds to. Allowed values are:
		 * - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the "Take a note" voice menu command.
		 * - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the "Post an update" voice menu command.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person or group that can be used as a creator or a contact. */
	export interface Contact {

		/** A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command. */
		acceptCommands?: Array<Command>;

		/** A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items. */
		acceptTypes?: Array<string>;

		/** The name to display for this contact. */
		displayName?: string | null;

		/** An ID for this contact. This is generated by the application and is treated as an opaque token. */
		id?: string | null;

		/** Set of image URLs to display for a contact. Most contacts will have a single image, but a "group" contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client. */
		imageUrls?: Array<string>;

		/** The type of resource. This is always mirror#contact. */
		kind?: string | null;

		/** Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number. */
		phoneNumber?: string | null;

		/**
		 * Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.
		 * Type: uint, 0 to 4,294,967,295
		 */
		priority?: number | null;

		/**
		 * A list of sharing features that a contact can handle. Allowed values are:
		 * - ADD_CAPTION
		 */
		sharingFeatures?: Array<string>;

		/** The ID of the application that created this contact. This is populated by the API */
		source?: string | null;

		/** Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic. */
		speakableName?: string | null;

		/**
		 * The type for this contact. This is used for sorting in UIs. Allowed values are:
		 * - INDIVIDUAL - Represents a single person. This is the default.
		 * - GROUP - Represents more than a single person.
		 */
		type?: string | null;
	}

	/** A person or group that can be used as a creator or a contact. */
	export interface ContactFormProperties {

		/** The name to display for this contact. */
		displayName: FormControl<string | null | undefined>,

		/** An ID for this contact. This is generated by the application and is treated as an opaque token. */
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always mirror#contact. */
		kind: FormControl<string | null | undefined>,

		/** Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number. */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.
		 * Type: uint, 0 to 4,294,967,295
		 */
		priority: FormControl<number | null | undefined>,

		/** The ID of the application that created this contact. This is populated by the API */
		source: FormControl<string | null | undefined>,

		/** Name of this contact as it should be pronounced. If this contact's name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic. */
		speakableName: FormControl<string | null | undefined>,

		/**
		 * The type for this contact. This is used for sorting in UIs. Allowed values are:
		 * - INDIVIDUAL - Represents a single person. This is the default.
		 * - GROUP - Represents more than a single person.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			speakableName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection. */
	export interface ContactsListResponse {

		/** Contact list. */
		items?: Array<Contact>;

		/** The type of resource. This is always mirror#contacts. */
		kind?: string | null;
	}

	/** A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection. */
	export interface ContactsListResponseFormProperties {

		/** The type of resource. This is always mirror#contacts. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateContactsListResponseFormGroup() {
		return new FormGroup<ContactsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A geographic location that can be associated with a timeline item. */
	export interface Location {

		/**
		 * The accuracy of the location fix in meters.
		 * Type: double
		 */
		accuracy?: number | null;

		/** The full address of the location. */
		address?: string | null;

		/** The name to be displayed. This may be a business name or a user-defined place, such as "Home". */
		displayName?: string | null;

		/** The ID of the location. */
		id?: string | null;

		/** The type of resource. This is always mirror#location. */
		kind?: string | null;

		/**
		 * The latitude, in degrees.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude, in degrees.
		 * Type: double
		 */
		longitude?: number | null;

		/** The time at which this location was captured, formatted according to RFC 3339. */
		timestamp?: Date | null;
	}

	/** A geographic location that can be associated with a timeline item. */
	export interface LocationFormProperties {

		/**
		 * The accuracy of the location fix in meters.
		 * Type: double
		 */
		accuracy: FormControl<number | null | undefined>,

		/** The full address of the location. */
		address: FormControl<string | null | undefined>,

		/** The name to be displayed. This may be a business name or a user-defined place, such as "Home". */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the location. */
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always mirror#location. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The latitude, in degrees.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude, in degrees.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/** The time at which this location was captured, formatted according to RFC 3339. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of Locations. This is the response from the server to GET requests on the locations collection. */
	export interface LocationsListResponse {

		/** The list of locations. */
		items?: Array<Location>;

		/** The type of resource. This is always mirror#locationsList. */
		kind?: string | null;
	}

	/** A list of Locations. This is the response from the server to GET requests on the locations collection. */
	export interface LocationsListResponseFormProperties {

		/** The type of resource. This is always mirror#locationsList. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocationsListResponseFormGroup() {
		return new FormGroup<LocationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom menu item that can be presented to the user by a timeline item. */
	export interface MenuItem {

		/**
		 * Controls the behavior when the user picks the menu option. Allowed values are:
		 * - CUSTOM - Custom action set by the service. When the user selects this menuItem, the API triggers a notification to your callbackUrl with the userActions.type set to CUSTOM and the userActions.payload set to the ID of this menu item. This is the default value.
		 * - Built-in actions:
		 * - REPLY - Initiate a reply to the timeline item using the voice recording UI. The creator attribute must be set in the timeline item for this menu to be available.
		 * - REPLY_ALL - Same behavior as REPLY. The original timeline item's recipients will be added to the reply item.
		 * - DELETE - Delete the timeline item.
		 * - SHARE - Share the timeline item with the available contacts.
		 * - READ_ALOUD - Read the timeline item's speakableText aloud; if this field is not set, read the text field; if none of those fields are set, this menu item is ignored.
		 * - GET_MEDIA_INPUT - Allow users to provide media payloads to Glassware from a menu item (currently, only transcribed text from voice input is supported). Subscribe to notifications when users invoke this menu item to receive the timeline item ID. Retrieve the media from the timeline item in the payload property.
		 * - VOICE_CALL - Initiate a phone call using the timeline item's creator.phoneNumber attribute as recipient.
		 * - NAVIGATE - Navigate to the timeline item's location.
		 * - TOGGLE_PINNED - Toggle the isPinned state of the timeline item.
		 * - OPEN_URI - Open the payload of the menu item in the browser.
		 * - PLAY_VIDEO - Open the payload of the menu item in the Glass video player.
		 * - SEND_MESSAGE - Initiate sending a message to the timeline item's creator:
		 * - If the creator.phoneNumber is set and Glass is connected to an Android phone, the message is an SMS.
		 * - Otherwise, if the creator.email is set, the message is an email.
		 */
		action?: string | null;

		/** The ContextualMenus.Command associated with this MenuItem (e.g. READ_ALOUD). The voice label for this command will be displayed in the voice menu and the touch label will be displayed in the touch menu. Note that the default menu value's display name will be overriden if you specify this property. Values that do not correspond to a ContextualMenus.Command name will be ignored. */
		contextual_command?: string | null;

		/** The ID for this menu item. This is generated by the application and is treated as an opaque token. */
		id?: string | null;

		/**
		 * A generic payload whose meaning changes depending on this MenuItem's action.
		 * - When the action is OPEN_URI, the payload is the URL of the website to view.
		 * - When the action is PLAY_VIDEO, the payload is the streaming URL of the video
		 * - When the action is GET_MEDIA_INPUT, the payload is the text transcription of a user's speech input
		 */
		payload?: string | null;

		/** If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected. */
		removeWhenSelected?: boolean | null;

		/** For CUSTOM items, a list of values controlling the appearance of the menu item in each of its states. A value for the DEFAULT state must be provided. If the PENDING or CONFIRMED states are missing, they will not be shown. */
		values?: Array<MenuValue>;
	}

	/** A custom menu item that can be presented to the user by a timeline item. */
	export interface MenuItemFormProperties {

		/**
		 * Controls the behavior when the user picks the menu option. Allowed values are:
		 * - CUSTOM - Custom action set by the service. When the user selects this menuItem, the API triggers a notification to your callbackUrl with the userActions.type set to CUSTOM and the userActions.payload set to the ID of this menu item. This is the default value.
		 * - Built-in actions:
		 * - REPLY - Initiate a reply to the timeline item using the voice recording UI. The creator attribute must be set in the timeline item for this menu to be available.
		 * - REPLY_ALL - Same behavior as REPLY. The original timeline item's recipients will be added to the reply item.
		 * - DELETE - Delete the timeline item.
		 * - SHARE - Share the timeline item with the available contacts.
		 * - READ_ALOUD - Read the timeline item's speakableText aloud; if this field is not set, read the text field; if none of those fields are set, this menu item is ignored.
		 * - GET_MEDIA_INPUT - Allow users to provide media payloads to Glassware from a menu item (currently, only transcribed text from voice input is supported). Subscribe to notifications when users invoke this menu item to receive the timeline item ID. Retrieve the media from the timeline item in the payload property.
		 * - VOICE_CALL - Initiate a phone call using the timeline item's creator.phoneNumber attribute as recipient.
		 * - NAVIGATE - Navigate to the timeline item's location.
		 * - TOGGLE_PINNED - Toggle the isPinned state of the timeline item.
		 * - OPEN_URI - Open the payload of the menu item in the browser.
		 * - PLAY_VIDEO - Open the payload of the menu item in the Glass video player.
		 * - SEND_MESSAGE - Initiate sending a message to the timeline item's creator:
		 * - If the creator.phoneNumber is set and Glass is connected to an Android phone, the message is an SMS.
		 * - Otherwise, if the creator.email is set, the message is an email.
		 */
		action: FormControl<string | null | undefined>,

		/** The ContextualMenus.Command associated with this MenuItem (e.g. READ_ALOUD). The voice label for this command will be displayed in the voice menu and the touch label will be displayed in the touch menu. Note that the default menu value's display name will be overriden if you specify this property. Values that do not correspond to a ContextualMenus.Command name will be ignored. */
		contextual_command: FormControl<string | null | undefined>,

		/** The ID for this menu item. This is generated by the application and is treated as an opaque token. */
		id: FormControl<string | null | undefined>,

		/**
		 * A generic payload whose meaning changes depending on this MenuItem's action.
		 * - When the action is OPEN_URI, the payload is the URL of the website to view.
		 * - When the action is PLAY_VIDEO, the payload is the streaming URL of the video
		 * - When the action is GET_MEDIA_INPUT, the payload is the text transcription of a user's speech input
		 */
		payload: FormControl<string | null | undefined>,

		/** If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected. */
		removeWhenSelected: FormControl<boolean | null | undefined>,
	}
	export function CreateMenuItemFormGroup() {
		return new FormGroup<MenuItemFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			contextual_command: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			removeWhenSelected: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A single value that is part of a MenuItem. */
	export interface MenuValue {

		/** The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown. */
		displayName?: string | null;

		/** URL of an icon to display with the menu item. */
		iconUrl?: string | null;

		/**
		 * The state that this value applies to. Allowed values are:
		 * - DEFAULT - Default value shown when displayed in the menuItems list.
		 * - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled.
		 * - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.
		 */
		state?: string | null;
	}

	/** A single value that is part of a MenuItem. */
	export interface MenuValueFormProperties {

		/** The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown. */
		displayName: FormControl<string | null | undefined>,

		/** URL of an icon to display with the menu item. */
		iconUrl: FormControl<string | null | undefined>,

		/**
		 * The state that this value applies to. Allowed values are:
		 * - DEFAULT - Default value shown when displayed in the menuItems list.
		 * - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled.
		 * - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateMenuValueFormGroup() {
		return new FormGroup<MenuValueFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification delivered by the API. */
	export interface Notification {

		/** The collection that generated the notification. */
		collection?: string | null;

		/** The ID of the item that generated the notification. */
		itemId?: string | null;

		/** The type of operation that generated the notification. */
		operation?: string | null;

		/** A list of actions taken by the user that triggered the notification. */
		userActions?: Array<UserAction>;

		/** The user token provided by the service when it subscribed for notifications. */
		userToken?: string | null;

		/** The secret verify token provided by the service when it subscribed for notifications. */
		verifyToken?: string | null;
	}

	/** A notification delivered by the API. */
	export interface NotificationFormProperties {

		/** The collection that generated the notification. */
		collection: FormControl<string | null | undefined>,

		/** The ID of the item that generated the notification. */
		itemId: FormControl<string | null | undefined>,

		/** The type of operation that generated the notification. */
		operation: FormControl<string | null | undefined>,

		/** The user token provided by the service when it subscribed for notifications. */
		userToken: FormControl<string | null | undefined>,

		/** The secret verify token provided by the service when it subscribed for notifications. */
		verifyToken: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			collection: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			userToken: new FormControl<string | null | undefined>(undefined),
			verifyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an action taken by the user that triggered a notification. */
	export interface UserAction {

		/**
		 * An optional payload for the action.
		 * For actions of type CUSTOM, this is the ID of the custom menu item that was selected.
		 */
		payload?: string | null;

		/**
		 * The type of action. The value of this can be:
		 * - SHARE - the user shared an item.
		 * - REPLY - the user replied to an item.
		 * - REPLY_ALL - the user replied to all recipients of an item.
		 * - CUSTOM - the user selected a custom menu item on the timeline item.
		 * - DELETE - the user deleted the item.
		 * - PIN - the user pinned the item.
		 * - UNPIN - the user unpinned the item.
		 * - LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored.
		 */
		type?: string | null;
	}

	/** Represents an action taken by the user that triggered a notification. */
	export interface UserActionFormProperties {

		/**
		 * An optional payload for the action.
		 * For actions of type CUSTOM, this is the ID of the custom menu item that was selected.
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * The type of action. The value of this can be:
		 * - SHARE - the user shared an item.
		 * - REPLY - the user replied to an item.
		 * - REPLY_ALL - the user replied to all recipients of an item.
		 * - CUSTOM - the user selected a custom menu item on the timeline item.
		 * - DELETE - the user deleted the item.
		 * - PIN - the user pinned the item.
		 * - UNPIN - the user unpinned the item.
		 * - LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUserActionFormGroup() {
		return new FormGroup<UserActionFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls how notifications for a timeline item are presented to the user. */
	export interface NotificationConfig {

		/** The time at which the notification should be delivered. */
		deliveryTime?: Date | null;

		/**
		 * Describes how important the notification is. Allowed values are:
		 * - DEFAULT - Notifications of default importance. A chime will be played to alert users.
		 */
		level?: string | null;
	}

	/** Controls how notifications for a timeline item are presented to the user. */
	export interface NotificationConfigFormProperties {

		/** The time at which the notification should be delivered. */
		deliveryTime: FormControl<Date | null | undefined>,

		/**
		 * Describes how important the notification is. Allowed values are:
		 * - DEFAULT - Notifications of default importance. A chime will be played to alert users.
		 */
		level: FormControl<string | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			deliveryTime: new FormControl<Date | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A setting for Glass. */
	export interface Setting {

		/**
		 * The setting's ID. The following IDs are valid:
		 * - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.
		 * - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
		 */
		id?: string | null;

		/** The type of resource. This is always mirror#setting. */
		kind?: string | null;

		/** The setting value, as a string. */
		value?: string | null;
	}

	/** A setting for Glass. */
	export interface SettingFormProperties {

		/**
		 * The setting's ID. The following IDs are valid:
		 * - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.
		 * - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
		 */
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always mirror#setting. */
		kind: FormControl<string | null | undefined>,

		/** The setting value, as a string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription to events on a collection. */
	export interface Subscription {

		/** The URL where notifications should be delivered (must start with https://). */
		callbackUrl?: string | null;

		/**
		 * The collection to subscribe to. Allowed values are:
		 * - timeline - Changes in the timeline including insertion, deletion, and updates.
		 * - locations - Location updates.
		 * - settings - Settings updates.
		 */
		collection?: string | null;

		/** The ID of the subscription. */
		id?: string | null;

		/** The type of resource. This is always mirror#subscription. */
		kind?: string | null;

		/** A notification delivered by the API. */
		notification?: Notification;

		/**
		 * A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:
		 * - UPDATE - The item has been updated.
		 * - INSERT - A new item has been inserted.
		 * - DELETE - The item has been deleted.
		 * - MENU_ACTION - A custom menu item has been triggered by the user.
		 */
		operation?: Array<string>;

		/** The time at which this subscription was last modified, formatted according to RFC 3339. */
		updated?: Date | null;

		/** An opaque token sent to the subscriber in notifications so that it can determine the ID of the user. */
		userToken?: string | null;

		/** A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google. */
		verifyToken?: string | null;
	}

	/** A subscription to events on a collection. */
	export interface SubscriptionFormProperties {

		/** The URL where notifications should be delivered (must start with https://). */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * The collection to subscribe to. Allowed values are:
		 * - timeline - Changes in the timeline including insertion, deletion, and updates.
		 * - locations - Location updates.
		 * - settings - Settings updates.
		 */
		collection: FormControl<string | null | undefined>,

		/** The ID of the subscription. */
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always mirror#subscription. */
		kind: FormControl<string | null | undefined>,

		/** The time at which this subscription was last modified, formatted according to RFC 3339. */
		updated: FormControl<Date | null | undefined>,

		/** An opaque token sent to the subscriber in notifications so that it can determine the ID of the user. */
		userToken: FormControl<string | null | undefined>,

		/** A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google. */
		verifyToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			collection: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			userToken: new FormControl<string | null | undefined>(undefined),
			verifyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Subscriptions. This is the response from the server to GET requests on the subscription collection. */
	export interface SubscriptionsListResponse {

		/** The list of subscriptions. */
		items?: Array<Subscription>;

		/** The type of resource. This is always mirror#subscriptionsList. */
		kind?: string | null;
	}

	/** A list of Subscriptions. This is the response from the server to GET requests on the subscription collection. */
	export interface SubscriptionsListResponseFormProperties {

		/** The type of resource. This is always mirror#subscriptionsList. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionsListResponseFormGroup() {
		return new FormGroup<SubscriptionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each item in the user's timeline is represented as a TimelineItem JSON structure, described below. */
	export interface TimelineItem {

		/**
		 * A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:
		 * - attachment: <img src="attachment:attachment_index"> where attachment_index is the 0-based index of this array.
		 * - cid: <img src="cid:attachment_id"> where attachment_id is the ID of the attachment.
		 */
		attachments?: Array<Attachment>;

		/** The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device. */
		bundleId?: string | null;

		/** A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item. */
		canonicalUrl?: string | null;

		/** The time at which this item was created, formatted according to RFC 3339. */
		created?: Date | null;

		/** A person or group that can be used as a creator or a contact. */
		creator?: Contact;

		/** The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time. */
		displayTime?: Date | null;

		/** ETag for this item. */
		etag?: string | null;

		/**
		 * HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.
		 * Allowed HTML elements - You can use these elements in your timeline cards.
		 * - Headers: h1, h2, h3, h4, h5, h6
		 * - Images: img
		 * - Lists: li, ol, ul
		 * - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time
		 * - Structural: blockquote, br, div, hr, p, span
		 * - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup
		 * - Tables: table, tbody, td, tfoot, th, thead, tr
		 * Blocked HTML elements: These elements and their contents are removed from HTML payloads.
		 * - Document headers: head, title
		 * - Embeds: audio, embed, object, source, video
		 * - Frames: frame, frameset
		 * - Scripting: applet, script
		 * Other elements: Any elements that aren't listed are removed, but their contents are preserved.
		 */
		html?: string | null;

		/** The ID of the timeline item. This is unique within a user's timeline. */
		id?: string | null;

		/** If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post. */
		inReplyTo?: string | null;

		/**
		 * Whether this item is a bundle cover.
		 * If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.
		 * On the main timeline, items that are shown are:
		 * - Items that have isBundleCover set to true
		 * - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:
		 * - Items that have the bundleId in question AND isBundleCover set to false
		 */
		isBundleCover?: boolean | null;

		/** When true, indicates this item is deleted, and only the ID property is set. */
		isDeleted?: boolean | null;

		/** When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item. */
		isPinned?: boolean | null;

		/** The type of resource. This is always mirror#timelineItem. */
		kind?: string | null;

		/** A geographic location that can be associated with a timeline item. */
		location?: Location;

		/** A list of menu items that will be presented to the user when this item is selected in the timeline. */
		menuItems?: Array<MenuItem>;

		/** Controls how notifications for a timeline item are presented to the user. */
		notification?: NotificationConfig;

		/**
		 * For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pinScore?: number | null;

		/** A list of users or groups that this item has been shared with. */
		recipients?: Array<Contact>;

		/** A URL that can be used to retrieve this item. */
		selfLink?: string | null;

		/** Opaque string you can use to map a timeline item to data in your own service. */
		sourceItemId?: string | null;

		/**
		 * The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.
		 * Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
		 */
		speakableText?: string | null;

		/**
		 * A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
		 * This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".
		 * Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.
		 */
		speakableType?: string | null;

		/** Text content of this item. */
		text?: string | null;

		/** The title of this item. */
		title?: string | null;

		/** The time at which this item was last modified, formatted according to RFC 3339. */
		updated?: Date | null;
	}

	/** Each item in the user's timeline is represented as a TimelineItem JSON structure, described below. */
	export interface TimelineItemFormProperties {

		/** The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device. */
		bundleId: FormControl<string | null | undefined>,

		/** A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item. */
		canonicalUrl: FormControl<string | null | undefined>,

		/** The time at which this item was created, formatted according to RFC 3339. */
		created: FormControl<Date | null | undefined>,

		/** The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user's timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time. */
		displayTime: FormControl<Date | null | undefined>,

		/** ETag for this item. */
		etag: FormControl<string | null | undefined>,

		/**
		 * HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline.
		 * Allowed HTML elements - You can use these elements in your timeline cards.
		 * - Headers: h1, h2, h3, h4, h5, h6
		 * - Images: img
		 * - Lists: li, ol, ul
		 * - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time
		 * - Structural: blockquote, br, div, hr, p, span
		 * - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup
		 * - Tables: table, tbody, td, tfoot, th, thead, tr
		 * Blocked HTML elements: These elements and their contents are removed from HTML payloads.
		 * - Document headers: head, title
		 * - Embeds: audio, embed, object, source, video
		 * - Frames: frame, frameset
		 * - Scripting: applet, script
		 * Other elements: Any elements that aren't listed are removed, but their contents are preserved.
		 */
		html: FormControl<string | null | undefined>,

		/** The ID of the timeline item. This is unique within a user's timeline. */
		id: FormControl<string | null | undefined>,

		/** If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post. */
		inReplyTo: FormControl<string | null | undefined>,

		/**
		 * Whether this item is a bundle cover.
		 * If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.
		 * On the main timeline, items that are shown are:
		 * - Items that have isBundleCover set to true
		 * - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:
		 * - Items that have the bundleId in question AND isBundleCover set to false
		 */
		isBundleCover: FormControl<boolean | null | undefined>,

		/** When true, indicates this item is deleted, and only the ID property is set. */
		isDeleted: FormControl<boolean | null | undefined>,

		/** When true, indicates this item is pinned, which means it's grouped alongside "active" items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item. */
		isPinned: FormControl<boolean | null | undefined>,

		/** The type of resource. This is always mirror#timelineItem. */
		kind: FormControl<string | null | undefined>,

		/**
		 * For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pinScore: FormControl<number | null | undefined>,

		/** A URL that can be used to retrieve this item. */
		selfLink: FormControl<string | null | undefined>,

		/** Opaque string you can use to map a timeline item to data in your own service. */
		sourceItemId: FormControl<string | null | undefined>,

		/**
		 * The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.
		 * Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
		 */
		speakableText: FormControl<string | null | undefined>,

		/**
		 * A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
		 * This should be a short, simple noun phrase such as "Email", "Text message", or "Daily Planet News Update".
		 * Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.
		 */
		speakableType: FormControl<string | null | undefined>,

		/** Text content of this item. */
		text: FormControl<string | null | undefined>,

		/** The title of this item. */
		title: FormControl<string | null | undefined>,

		/** The time at which this item was last modified, formatted according to RFC 3339. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateTimelineItemFormGroup() {
		return new FormGroup<TimelineItemFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			canonicalUrl: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			displayTime: new FormControl<Date | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inReplyTo: new FormControl<string | null | undefined>(undefined),
			isBundleCover: new FormControl<boolean | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isPinned: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pinScore: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			sourceItemId: new FormControl<string | null | undefined>(undefined),
			speakableText: new FormControl<string | null | undefined>(undefined),
			speakableType: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of timeline items. This is the response from the server to GET requests on the timeline collection. */
	export interface TimelineListResponse {

		/** Items in the timeline. */
		items?: Array<TimelineItem>;

		/** The type of resource. This is always mirror#timeline. */
		kind?: string | null;

		/** The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of timeline items. This is the response from the server to GET requests on the timeline collection. */
	export interface TimelineListResponseFormProperties {

		/** The type of resource. This is always mirror#timeline. */
		kind: FormControl<string | null | undefined>,

		/** The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTimelineListResponseFormGroup() {
		return new FormGroup<TimelineListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Inserts a new account for a user
		 * Post accounts/{userToken}/{accountType}/{accountName}
		 * @param {string} userToken The ID for the user.
		 * @param {string} accountType Account type to be passed to Android Account Manager.
		 * @param {string} accountName The name of the account to be passed to the Android Account Manager.
		 * @return {void} Successful response
		 */
		Mirror_accounts_insert(userToken: string, accountType: string, accountName: string, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (userToken == null ? '' : encodeURIComponent(userToken)) + '/' + (accountType == null ? '' : encodeURIComponent(accountType)) + '/' + (accountName == null ? '' : encodeURIComponent(accountName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of contacts for the authenticated user.
		 * Get contacts
		 * @return {void} Successful response
		 */
		Mirror_contacts_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'contacts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new contact.
		 * Post contacts
		 * @return {void} Successful response
		 */
		Mirror_contacts_insert(requestBody: Contact): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a contact.
		 * Delete contacts/{id}
		 * @param {string} id The ID of the contact.
		 * @return {void} Successful response
		 */
		Mirror_contacts_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a single contact by ID.
		 * Get contacts/{id}
		 * @param {string} id The ID of the contact.
		 * @return {void} Successful response
		 */
		Mirror_contacts_get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a contact in place. This method supports patch semantics.
		 * Patch contacts/{id}
		 * @param {string} id The ID of the contact.
		 * @return {void} Successful response
		 */
		Mirror_contacts_patch(id: string, requestBody: Contact): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a contact in place.
		 * Put contacts/{id}
		 * @param {string} id The ID of the contact.
		 * @return {void} Successful response
		 */
		Mirror_contacts_update(id: string, requestBody: Contact): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'contacts/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of locations for the user.
		 * Get locations
		 * @return {void} Successful response
		 */
		Mirror_locations_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'locations', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a single location by ID.
		 * Get locations/{id}
		 * @param {string} id The ID of the location or latest for the last known location.
		 * @return {void} Successful response
		 */
		Mirror_locations_get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'locations/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a single setting by ID.
		 * Get settings/{id}
		 * @param {string} id The ID of the setting. The following IDs are valid: 
		 * - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content. 
		 * - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
		 * @return {void} Successful response
		 */
		Mirror_settings_get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'settings/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of subscriptions for the authenticated user and service.
		 * Get subscriptions
		 * @return {void} Successful response
		 */
		Mirror_subscriptions_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new subscription.
		 * Post subscriptions
		 * @return {void} Successful response
		 */
		Mirror_subscriptions_insert(requestBody: Subscription): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a subscription.
		 * Delete subscriptions/{id}
		 * @param {string} id The ID of the subscription.
		 * @return {void} Successful response
		 */
		Mirror_subscriptions_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing subscription in place.
		 * Put subscriptions/{id}
		 * @param {string} id The ID of the subscription.
		 * @return {void} Successful response
		 */
		Mirror_subscriptions_update(id: string, requestBody: Subscription): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of timeline items for the authenticated user.
		 * Get timeline
		 * @param {string} bundleId If provided, only items with the given bundleId will be returned.
		 * @param {boolean} includeDeleted If true, tombstone records for deleted items will be returned.
		 * @param {number} maxResults The maximum number of items to include in the response, used for paging.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Mirror_timeline_listOrderBy} orderBy Controls the order in which timeline items are returned.
		 * @param {string} pageToken Token for the page of results to return.
		 * @param {boolean} pinnedOnly If true, only pinned items will be returned.
		 * @param {string} sourceItemId If provided, only items with the given sourceItemId will be returned.
		 * @return {void} Successful response
		 */
		Mirror_timeline_list(bundleId: string | null | undefined, includeDeleted: boolean | null | undefined, maxResults: number | null | undefined, orderBy: Mirror_timeline_listOrderBy | null | undefined, pageToken: string | null | undefined, pinnedOnly: boolean | null | undefined, sourceItemId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timeline?bundleId=' + (bundleId == null ? '' : encodeURIComponent(bundleId)) + '&includeDeleted=' + includeDeleted + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&pinnedOnly=' + pinnedOnly + '&sourceItemId=' + (sourceItemId == null ? '' : encodeURIComponent(sourceItemId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new item into the timeline.
		 * Post timeline
		 * @return {void} Successful response
		 */
		Mirror_timeline_insert(requestBody: TimelineItem): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a timeline item.
		 * Delete timeline/{id}
		 * @param {string} id The ID of the timeline item.
		 * @return {void} Successful response
		 */
		Mirror_timeline_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'timeline/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a single timeline item by ID.
		 * Get timeline/{id}
		 * @param {string} id The ID of the timeline item.
		 * @return {void} Successful response
		 */
		Mirror_timeline_get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timeline/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a timeline item in place. This method supports patch semantics.
		 * Patch timeline/{id}
		 * @param {string} id The ID of the timeline item.
		 * @return {void} Successful response
		 */
		Mirror_timeline_patch(id: string, requestBody: TimelineItem): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'timeline/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of attachments for a timeline item.
		 * Get timeline/{itemId}/attachments
		 * @param {string} itemId The ID of the timeline item whose attachments should be listed.
		 * @return {void} Successful response
		 */
		Mirror_timeline_attachments_list(itemId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timeline/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/attachments', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new attachment to a timeline item.
		 * Post timeline/{itemId}/attachments
		 * @param {string} itemId The ID of the timeline item the attachment belongs to.
		 * @return {void} Successful response
		 */
		Mirror_timeline_attachments_insert(itemId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeline/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/attachments', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an attachment from a timeline item.
		 * Delete timeline/{itemId}/attachments/{attachmentId}
		 * @param {string} itemId The ID of the timeline item the attachment belongs to.
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {void} Successful response
		 */
		Mirror_timeline_attachments_delete(itemId: string, attachmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'timeline/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an attachment on a timeline item by item ID and attachment ID.
		 * Get timeline/{itemId}/attachments/{attachmentId}
		 * @param {string} itemId The ID of the timeline item the attachment belongs to.
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {void} Successful response
		 */
		Mirror_timeline_attachments_get(itemId: string, attachmentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'timeline/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Mirror_timeline_listOrderBy { displayTime = 'displayTime', writeTime = 'writeTime' }

}

