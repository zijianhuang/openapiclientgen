import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * List of string parameters to supply when the action method is invoked.
	 * For example, consider three snooze buttons: snooze now, snooze 1 day,
	 * snooze next week. You might use action method = snooze(), passing the
	 * snooze type and snooze time in the list of string parameters.
	 */
	export interface ActionParameter {

		/** The name of the parameter for the action script. */
		key?: string;

		/** The value of the parameter. */
		value?: string;
	}


	/** Parameters that a bot can use to configure how it's response is posted. */
	export interface ActionResponse {

		/** The type of bot response. */
		type?: ActionResponseType;

		/** URL for users to auth or config. (Only for REQUEST_CONFIG response types.) */
		url?: string;
	}

	export enum ActionResponseType { TYPE_UNSPECIFIED = 0, NEW_MESSAGE = 1, UPDATE_MESSAGE = 2, REQUEST_CONFIG = 3 }


	/**
	 * Annotations associated with the plain-text body of the message.
	 * Example plain-text message body:
	 * ```
	 * Hello @FooBot how are you!"
	 * ```
	 * The corresponding annotations metadata:
	 * ```
	 * "annotations":[{
	 *   "type":"USER_MENTION",
	 *   "startIndex":6,
	 *   "length":7,
	 *   "userMention": {
	 *     "user": {
	 *       "name":"users/107946847022116401880",
	 *       "displayName":"FooBot",
	 *       "avatarUrl":"https://goo.gl/aeDtrS",
	 *       "type":"BOT"
	 *     },
	 *     "type":"MENTION"
	 *    }
	 * }]
	 * ```
	 */
	export interface Annotation {

		/**
		 * Length of the substring in the plain-text message body this annotation
		 * corresponds to.
		 */
		length?: number;

		/**
		 * Start index (0-based, inclusive) in the plain-text message body this
		 * annotation corresponds to.
		 */
		startIndex?: number;

		/** The type of this annotation. */
		type?: AnnotationType;

		/** Annotation metadata for user mentions (@). */
		userMention?: UserMentionMetadata;
	}

	export enum AnnotationType { ANNOTATION_TYPE_UNSPECIFIED = 0, USER_MENTION = 1 }


	/** Annotation metadata for user mentions (@). */
	export interface UserMentionMetadata {

		/** The type of user mention. */
		type?: UserMentionMetadataType;

		/** A user in Hangouts Chat. */
		user?: User;
	}

	export enum UserMentionMetadataType { TYPE_UNSPECIFIED = 0, ADD = 1, MENTION = 2 }


	/** A user in Hangouts Chat. */
	export interface User {

		/** The user's display name. */
		displayName?: string;

		/** Obfuscated domain information. */
		domainId?: string;

		/** Resource name, in the format "users/*". */
		name?: string;

		/** User type. */
		type?: UserType;
	}

	export enum UserType { TYPE_UNSPECIFIED = 0, HUMAN = 1, BOT = 2 }


	/** A button. Can be a text button or an image button. */
	export interface Button {

		/** An image button with an onclick action. */
		imageButton?: ImageButton;

		/** A button with text and onclick action. */
		textButton?: TextButton;
	}


	/** An image button with an onclick action. */
	export interface ImageButton {

		/**
		 * The icon specified by an enum that indices to an icon provided by Chat
		 * API.
		 */
		icon?: ImageButtonIcon;

		/** The icon specified by a URL. */
		iconUrl?: string;

		/**
		 * The name of this image_button which will be used for accessibility.
		 * Default value will be provided if developers don't specify.
		 */
		name?: string;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}

	export enum ImageButtonIcon { ICON_UNSPECIFIED = 0, AIRPLANE = 1, BOOKMARK = 2, BUS = 3, CAR = 4, CLOCK = 5, CONFIRMATION_NUMBER_ICON = 6, DOLLAR = 7, DESCRIPTION = 8, EMAIL = 9, EVENT_PERFORMER = 10, EVENT_SEAT = 11, FLIGHT_ARRIVAL = 12, FLIGHT_DEPARTURE = 13, HOTEL = 14, HOTEL_ROOM_TYPE = 15, INVITE = 16, MAP_PIN = 17, MEMBERSHIP = 18, MULTIPLE_PEOPLE = 19, OFFER = 20, PERSON = 21, PHONE = 22, RESTAURANT_ICON = 23, SHOPPING_CART = 24, STAR = 25, STORE = 26, TICKET = 27, TRAIN = 28, VIDEO_CAMERA = 29, VIDEO_PLAY = 30 }


	/** An onclick action (e.g. open a link). */
	export interface OnClick {

		/**
		 * A form action describes the behavior when the form is submitted.
		 * For example, an Apps Script can be invoked to handle the form.
		 */
		action?: FormAction;

		/** A link that opens a new window. */
		openLink?: OpenLink;
	}


	/**
	 * A form action describes the behavior when the form is submitted.
	 * For example, an Apps Script can be invoked to handle the form.
	 */
	export interface FormAction {

		/**
		 * The method name is used to identify which part of the form triggered the
		 * form submission. This information is echoed back to the bot as part of
		 * the card click event. The same method name can be used for several
		 * elements that trigger a common behavior if desired.
		 */
		actionMethodName?: string;

		/** List of action parameters. */
		parameters?: Array<ActionParameter>;
	}


	/** A link that opens a new window. */
	export interface OpenLink {

		/** The URL to open. */
		url?: string;
	}


	/** A button with text and onclick action. */
	export interface TextButton {

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;

		/** The text of the button. */
		text?: string;
	}


	/** A card is a UI element that can contain UI widgets such as texts, images. */
	export interface Card {

		/** The actions of this card. */
		cardActions?: Array<CardAction>;
		header?: CardHeader;

		/** Name of the card. */
		name?: string;

		/** Sections are separated by a line divider. */
		sections?: Array<Section>;
	}


	/**
	 * A card action is
	 * the action associated with the card. For an invoice card, a
	 * typical action would be: delete invoice, email invoice or open the
	 * invoice in browser.
	 */
	export interface CardAction {

		/** The label used to be displayed in the action menu item. */
		actionLabel?: string;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}

	export interface CardHeader {

		/** The image's type (e.g. square border or circular border). */
		imageStyle?: CardHeaderImageStyle;

		/** The URL of the image in the card header. */
		imageUrl?: string;

		/** The subtitle of the card header. */
		subtitle?: string;

		/**
		 * The title must be specified. The header has a fixed height: if both a
		 * title and subtitle is specified, each will take up 1 line. If only the
		 * title is specified, it will take up both lines.
		 */
		title?: string;
	}

	export enum CardHeaderImageStyle { IMAGE_STYLE_UNSPECIFIED = 0, IMAGE = 1, AVATAR = 2 }


	/**
	 * A section contains a collection of widgets that are rendered
	 * (vertically) in the order that they are specified. Across all platforms,
	 * cards have a narrow fixed width, so
	 * there is currently no need for layout properties (e.g. float).
	 */
	export interface Section {

		/** The header of the section, text formatted supported. */
		header?: string;

		/** A section must contain at least 1 widget. */
		widgets?: Array<WidgetMarkup>;
	}


	/** A widget is a UI element that presents texts, images, etc. */
	export interface WidgetMarkup {

		/**
		 * A list of buttons. Buttons is also oneof data and only one of these
		 * fields should be set.
		 */
		buttons?: Array<Button>;

		/** An image that is specified by a URL and can have an onclick action. */
		image?: Image;

		/**
		 * A UI element contains a key (label) and a value (content). And this
		 * element may also contain some actions such as onclick button.
		 */
		keyValue?: KeyValue;

		/** A paragraph of text. Formatted text supported. */
		textParagraph?: TextParagraph;
	}


	/** An image that is specified by a URL and can have an onclick action. */
	export interface Image {

		/**
		 * The aspect ratio of this image (width/height). This field allows clients
		 * to reserve the right height for the image while waiting for it to load.
		 * It's not meant to override the native aspect ratio of the image.
		 * If unset, the server fills it by prefetching the image.
		 */
		aspectRatio?: number;

		/** The URL of the image. */
		imageUrl?: string;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}


	/**
	 * A UI element contains a key (label) and a value (content). And this
	 * element may also contain some actions such as onclick button.
	 */
	export interface KeyValue {

		/** The text of the bottom label. Formatted text supported. */
		bottomLabel?: string;

		/** A button. Can be a text button or an image button. */
		button?: Button;

		/** The text of the content. Formatted text supported and always required. */
		content?: string;

		/** If the content should be multiline. */
		contentMultiline?: boolean;

		/**
		 * An enum value that will be replaced by the Chat API with the
		 * corresponding icon image.
		 */
		icon?: ImageButtonIcon;

		/** The icon specified by a URL. */
		iconUrl?: string;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;

		/** The text of the top label. Formatted text supported. */
		topLabel?: string;
	}


	/** A paragraph of text. Formatted text supported. */
	export interface TextParagraph {
		text?: string;
	}


	/** Hangouts Chat events. */
	export interface DeprecatedEvent {

		/**
		 * A form action describes the behavior when the form is submitted.
		 * For example, an Apps Script can be invoked to handle the form.
		 */
		action?: FormAction;

		/**
		 * The URL the bot should redirect the user to after they have completed an
		 * authorization or configuration flow outside of Hangouts Chat. See the
		 * [Authorizing access to 3p services guide](/hangouts/chat/how-tos/auth-3p)
		 * for more information.
		 */
		configCompleteRedirectUrl?: string;

		/** The timestamp indicating when the event was dispatched. */
		eventTime?: string;

		/** A message in Hangouts Chat. */
		message?: Message;

		/** A room or DM in Hangouts Chat. */
		space?: Space;

		/**
		 * The bot-defined key for the thread related to the event. See the
		 * thread_key field of the
		 * `spaces.message.create` request for more information.
		 */
		threadKey?: string;

		/**
		 * A secret value that bots can use to verify if a request is from Google. The
		 * token is randomly generated by Google, remains static, and can be obtained
		 * from the Hangouts Chat API configuration page in the Cloud Console.
		 * Developers can revoke/regenerate it if needed from the same page.
		 */
		token?: string;

		/** The type of the event. */
		type?: DeprecatedEventType;

		/** A user in Hangouts Chat. */
		user?: User;
	}


	/** A message in Hangouts Chat. */
	export interface Message {

		/** Parameters that a bot can use to configure how it's response is posted. */
		actionResponse?: ActionResponse;

		/** Output only. Annotations associated with the text in this message. */
		annotations?: Array<Annotation>;

		/** Plain-text body of the message with all bot mentions stripped out. */
		argumentText?: string;

		/**
		 * Rich, formatted and interactive cards that can be used to display UI
		 * elements such as: formatted texts, buttons, clickable images. Cards are
		 * normally displayed below the plain-text body of the message.
		 */
		cards?: Array<Card>;

		/**
		 * Output only. The time at which the message was created in Hangouts Chat
		 * server.
		 */
		createTime?: string;

		/**
		 * A plain-text description of the message's cards, used when the actual cards
		 * cannot be displayed (e.g. mobile notifications).
		 */
		fallbackText?: string;

		/**
		 * Resource name, in the form "spaces/messages/*".
		 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
		 */
		name?: string;

		/**
		 * Text for generating preview chips. This text will not be displayed to the
		 * user, but any links to images, web pages, videos, etc. included here will
		 * generate preview chips.
		 */
		previewText?: string;

		/** A user in Hangouts Chat. */
		sender?: User;

		/** A room or DM in Hangouts Chat. */
		space?: Space;

		/** Plain-text body of the message. */
		text?: string;

		/** A thread in Hangouts Chat. */
		thread?: Thread;
	}


	/** A room or DM in Hangouts Chat. */
	export interface Space {

		/** Output only. The display name (only if the space is a room). */
		displayName?: string;

		/**
		 * Resource name of the space, in the form "spaces/*".
		 * Example: spaces/AAAAMpdlehYs
		 */
		name?: string;

		/** Output only. The type of a space. */
		type?: SpaceType;
	}

	export enum SpaceType { TYPE_UNSPECIFIED = 0, ROOM = 1, DM = 2 }


	/** A thread in Hangouts Chat. */
	export interface Thread {

		/**
		 * Resource name, in the form "spaces/threads/*".
		 * Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
		 */
		name?: string;
	}

	export enum DeprecatedEventType { UNSPECIFIED = 0, MESSAGE = 1, ADDED_TO_SPACE = 2, REMOVED_FROM_SPACE = 3, CARD_CLICKED = 4 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	export interface ListMembershipsResponse {

		/** List of memberships in the requested (or first) page. */
		memberships?: Array<Membership>;

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results.
		 */
		nextPageToken?: string;
	}


	/** Represents a membership relation in Hangouts Chat. */
	export interface Membership {

		/**
		 * The creation time of the membership a.k.a the time at which the member
		 * joined the space, if applicable.
		 */
		createTime?: string;

		/** A user in Hangouts Chat. */
		member?: User;

		/**
		 * Resource name of the membership, in the form "spaces/members/*".
		 * Example: spaces/AAAAMpdlehY/members/105115627578887013105
		 */
		name?: string;

		/** State of the membership. */
		state?: MembershipState;
	}

	export enum MembershipState { MEMBERSHIP_STATE_UNSPECIFIED = 0, JOINED = 1, INVITED = 2, NOT_A_MEMBER = 3 }

	export interface ListSpacesResponse {

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results. Tokens expire in an hour. An error is thrown
		 * if an expired token is passed.
		 */
		nextPageToken?: string;

		/** List of spaces in the requested (or first) page. */
		spaces?: Array<Space>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists spaces the caller is a member of.
		 * Get v1/spaces
		 * @param {number} pageSize Requested page size. The value is capped at 1000.
		 * Server may return fewer results than requested.
		 * If unspecified, server will default to 100.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {void} Successful response
		 */
		Chat_spaces_list(pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/spaces?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message.
		 * Delete v1/{name}
		 * @param {string} name Required. Resource name of the message to be deleted, in the form
		 * "spaces/messages/*"
		 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
		 * @return {void} Successful response
		 */
		Chat_spaces_messages_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a membership.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the membership to be retrieved, in the form
		 * "spaces/members/*".
		 * Example: spaces/AAAAMpdlehY/members/105115627578887013105
		 * @return {void} Successful response
		 */
		Chat_spaces_members_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a message.
		 * Put v1/{name}
		 * @param {string} name Resource name, in the form "spaces/messages/*".
		 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
		 * @param {string} updateMask Required. The field paths to be updated, comma separated if there are
		 * multiple.
		 * Currently supported field paths:
		 * * text
		 * * cards
		 * @return {void} Successful response
		 */
		Chat_spaces_messages_update(name: string, updateMask: string, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists human memberships in a space.
		 * Get v1/{parent}/members
		 * @param {string} parent Required. The resource name of the space for which membership list is to be
		 * fetched, in the form "spaces/*".
		 * Example: spaces/AAAAMpdlehY
		 * @param {number} pageSize Requested page size. The value is capped at 1000.
		 * Server may return fewer results than requested.
		 * If unspecified, server will default to 100.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {void} Successful response
		 */
		Chat_spaces_members_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/members&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a message.
		 * Post v1/{parent}/messages
		 * @param {string} parent Required. Space resource name, in the form "spaces/*".
		 * Example: spaces/AAAAMpdlehY
		 * @param {string} threadKey Opaque thread identifier string that can be specified to group messages
		 * into a single thread. If this is the first message with a given thread
		 * identifier, a new thread is created. Subsequent messages with the same
		 * thread identifier will be posted into the same thread. This relieves bots
		 * and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post
		 * further updates to it.
		 * Has no effect if thread field,
		 * corresponding to an existing thread, is set in message.
		 * @return {void} Successful response
		 */
		Chat_spaces_messages_create(parent: string, threadKey: string, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&threadKey=' + (threadKey == null ? '' : encodeURIComponent(threadKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

