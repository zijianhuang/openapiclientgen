import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * List of string parameters to supply when the action method is invoked.
	 * For example, consider three snooze buttons: snooze now, snooze 1 day,
	 * snooze next week. You might use action method = snooze(), passing the
	 * snooze type and snooze time in the list of string parameters.
	 */
	export interface ActionParameter {

		/** The name of the parameter for the action script. */
		key?: string | null;

		/** The value of the parameter. */
		value?: string | null;
	}

	/**
	 * List of string parameters to supply when the action method is invoked.
	 * For example, consider three snooze buttons: snooze now, snooze 1 day,
	 * snooze next week. You might use action method = snooze(), passing the
	 * snooze type and snooze time in the list of string parameters.
	 */
	export interface ActionParameterFormProperties {

		/** The name of the parameter for the action script. */
		key: FormControl<string | null | undefined>,

		/** The value of the parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateActionParameterFormGroup() {
		return new FormGroup<ActionParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters that a bot can use to configure how it's response is posted. */
	export interface ActionResponse {

		/** The type of bot response. */
		type?: ActionResponseType | null;

		/** URL for users to auth or config. (Only for REQUEST_CONFIG response types.) */
		url?: string | null;
	}

	/** Parameters that a bot can use to configure how it's response is posted. */
	export interface ActionResponseFormProperties {

		/** The type of bot response. */
		type: FormControl<ActionResponseType | null | undefined>,

		/** URL for users to auth or config. (Only for REQUEST_CONFIG response types.) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActionResponseFormGroup() {
		return new FormGroup<ActionResponseFormProperties>({
			type: new FormControl<ActionResponseType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

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
		length?: number | null;

		/**
		 * Start index (0-based, inclusive) in the plain-text message body this
		 * annotation corresponds to.
		 */
		startIndex?: number | null;

		/** The type of this annotation. */
		type?: AnnotationType | null;

		/** Annotation metadata for user mentions (@). */
		userMention?: UserMentionMetadata;
	}

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
	export interface AnnotationFormProperties {

		/**
		 * Length of the substring in the plain-text message body this annotation
		 * corresponds to.
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Start index (0-based, inclusive) in the plain-text message body this
		 * annotation corresponds to.
		 */
		startIndex: FormControl<number | null | undefined>,

		/** The type of this annotation. */
		type: FormControl<AnnotationType | null | undefined>,
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<AnnotationType | null | undefined>(undefined),
		});

	}

	export enum AnnotationType { ANNOTATION_TYPE_UNSPECIFIED = 0, USER_MENTION = 1 }


	/** Annotation metadata for user mentions (@). */
	export interface UserMentionMetadata {

		/** The type of user mention. */
		type?: UserMentionMetadataType | null;

		/** A user in Hangouts Chat. */
		user?: User;
	}

	/** Annotation metadata for user mentions (@). */
	export interface UserMentionMetadataFormProperties {

		/** The type of user mention. */
		type: FormControl<UserMentionMetadataType | null | undefined>,
	}
	export function CreateUserMentionMetadataFormGroup() {
		return new FormGroup<UserMentionMetadataFormProperties>({
			type: new FormControl<UserMentionMetadataType | null | undefined>(undefined),
		});

	}

	export enum UserMentionMetadataType { TYPE_UNSPECIFIED = 0, ADD = 1, MENTION = 2 }


	/** A user in Hangouts Chat. */
	export interface User {

		/** The user's display name. */
		displayName?: string | null;

		/** Obfuscated domain information. */
		domainId?: string | null;

		/** Resource name, in the format "users/*". */
		name?: string | null;

		/** User type. */
		type?: UserType | null;
	}

	/** A user in Hangouts Chat. */
	export interface UserFormProperties {

		/** The user's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Obfuscated domain information. */
		domainId: FormControl<string | null | undefined>,

		/** Resource name, in the format "users/*". */
		name: FormControl<string | null | undefined>,

		/** User type. */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			domainId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export enum UserType { TYPE_UNSPECIFIED = 0, HUMAN = 1, BOT = 2 }


	/** A button. Can be a text button or an image button. */
	export interface Button {

		/** An image button with an onclick action. */
		imageButton?: ImageButton;

		/** A button with text and onclick action. */
		textButton?: TextButton;
	}

	/** A button. Can be a text button or an image button. */
	export interface ButtonFormProperties {
	}
	export function CreateButtonFormGroup() {
		return new FormGroup<ButtonFormProperties>({
		});

	}


	/** An image button with an onclick action. */
	export interface ImageButton {

		/**
		 * The icon specified by an enum that indices to an icon provided by Chat
		 * API.
		 */
		icon?: ImageButtonIcon | null;

		/** The icon specified by a URL. */
		iconUrl?: string | null;

		/**
		 * The name of this image_button which will be used for accessibility.
		 * Default value will be provided if developers don't specify.
		 */
		name?: string | null;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}

	/** An image button with an onclick action. */
	export interface ImageButtonFormProperties {

		/**
		 * The icon specified by an enum that indices to an icon provided by Chat
		 * API.
		 */
		icon: FormControl<ImageButtonIcon | null | undefined>,

		/** The icon specified by a URL. */
		iconUrl: FormControl<string | null | undefined>,

		/**
		 * The name of this image_button which will be used for accessibility.
		 * Default value will be provided if developers don't specify.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImageButtonFormGroup() {
		return new FormGroup<ImageButtonFormProperties>({
			icon: new FormControl<ImageButtonIcon | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

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

	/** An onclick action (e.g. open a link). */
	export interface OnClickFormProperties {
	}
	export function CreateOnClickFormGroup() {
		return new FormGroup<OnClickFormProperties>({
		});

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
		actionMethodName?: string | null;

		/** List of action parameters. */
		parameters?: Array<ActionParameter>;
	}

	/**
	 * A form action describes the behavior when the form is submitted.
	 * For example, an Apps Script can be invoked to handle the form.
	 */
	export interface FormActionFormProperties {

		/**
		 * The method name is used to identify which part of the form triggered the
		 * form submission. This information is echoed back to the bot as part of
		 * the card click event. The same method name can be used for several
		 * elements that trigger a common behavior if desired.
		 */
		actionMethodName: FormControl<string | null | undefined>,
	}
	export function CreateFormActionFormGroup() {
		return new FormGroup<FormActionFormProperties>({
			actionMethodName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link that opens a new window. */
	export interface OpenLink {

		/** The URL to open. */
		url?: string | null;
	}

	/** A link that opens a new window. */
	export interface OpenLinkFormProperties {

		/** The URL to open. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateOpenLinkFormGroup() {
		return new FormGroup<OpenLinkFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A button with text and onclick action. */
	export interface TextButton {

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;

		/** The text of the button. */
		text?: string | null;
	}

	/** A button with text and onclick action. */
	export interface TextButtonFormProperties {

		/** The text of the button. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextButtonFormGroup() {
		return new FormGroup<TextButtonFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A card is a UI element that can contain UI widgets such as texts, images. */
	export interface Card {

		/** The actions of this card. */
		cardActions?: Array<CardAction>;
		header?: CardHeader;

		/** Name of the card. */
		name?: string | null;

		/** Sections are separated by a line divider. */
		sections?: Array<Section>;
	}

	/** A card is a UI element that can contain UI widgets such as texts, images. */
	export interface CardFormProperties {

		/** Name of the card. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A card action is
	 * the action associated with the card. For an invoice card, a
	 * typical action would be: delete invoice, email invoice or open the
	 * invoice in browser.
	 */
	export interface CardAction {

		/** The label used to be displayed in the action menu item. */
		actionLabel?: string | null;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}

	/**
	 * A card action is
	 * the action associated with the card. For an invoice card, a
	 * typical action would be: delete invoice, email invoice or open the
	 * invoice in browser.
	 */
	export interface CardActionFormProperties {

		/** The label used to be displayed in the action menu item. */
		actionLabel: FormControl<string | null | undefined>,
	}
	export function CreateCardActionFormGroup() {
		return new FormGroup<CardActionFormProperties>({
			actionLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CardHeader {

		/** The image's type (e.g. square border or circular border). */
		imageStyle?: CardHeaderImageStyle | null;

		/** The URL of the image in the card header. */
		imageUrl?: string | null;

		/** The subtitle of the card header. */
		subtitle?: string | null;

		/**
		 * The title must be specified. The header has a fixed height: if both a
		 * title and subtitle is specified, each will take up 1 line. If only the
		 * title is specified, it will take up both lines.
		 */
		title?: string | null;
	}
	export interface CardHeaderFormProperties {

		/** The image's type (e.g. square border or circular border). */
		imageStyle: FormControl<CardHeaderImageStyle | null | undefined>,

		/** The URL of the image in the card header. */
		imageUrl: FormControl<string | null | undefined>,

		/** The subtitle of the card header. */
		subtitle: FormControl<string | null | undefined>,

		/**
		 * The title must be specified. The header has a fixed height: if both a
		 * title and subtitle is specified, each will take up 1 line. If only the
		 * title is specified, it will take up both lines.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCardHeaderFormGroup() {
		return new FormGroup<CardHeaderFormProperties>({
			imageStyle: new FormControl<CardHeaderImageStyle | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

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
		header?: string | null;

		/** A section must contain at least 1 widget. */
		widgets?: Array<WidgetMarkup>;
	}

	/**
	 * A section contains a collection of widgets that are rendered
	 * (vertically) in the order that they are specified. Across all platforms,
	 * cards have a narrow fixed width, so
	 * there is currently no need for layout properties (e.g. float).
	 */
	export interface SectionFormProperties {

		/** The header of the section, text formatted supported. */
		header: FormControl<string | null | undefined>,
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
			header: new FormControl<string | null | undefined>(undefined),
		});

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

	/** A widget is a UI element that presents texts, images, etc. */
	export interface WidgetMarkupFormProperties {
	}
	export function CreateWidgetMarkupFormGroup() {
		return new FormGroup<WidgetMarkupFormProperties>({
		});

	}


	/** An image that is specified by a URL and can have an onclick action. */
	export interface Image {

		/**
		 * The aspect ratio of this image (width/height). This field allows clients
		 * to reserve the right height for the image while waiting for it to load.
		 * It's not meant to override the native aspect ratio of the image.
		 * If unset, the server fills it by prefetching the image.
		 */
		aspectRatio?: number | null;

		/** The URL of the image. */
		imageUrl?: string | null;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;
	}

	/** An image that is specified by a URL and can have an onclick action. */
	export interface ImageFormProperties {

		/**
		 * The aspect ratio of this image (width/height). This field allows clients
		 * to reserve the right height for the image while waiting for it to load.
		 * It's not meant to override the native aspect ratio of the image.
		 * If unset, the server fills it by prefetching the image.
		 */
		aspectRatio: FormControl<number | null | undefined>,

		/** The URL of the image. */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			aspectRatio: new FormControl<number | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A UI element contains a key (label) and a value (content). And this
	 * element may also contain some actions such as onclick button.
	 */
	export interface KeyValue {

		/** The text of the bottom label. Formatted text supported. */
		bottomLabel?: string | null;

		/** A button. Can be a text button or an image button. */
		button?: Button;

		/** The text of the content. Formatted text supported and always required. */
		content?: string | null;

		/** If the content should be multiline. */
		contentMultiline?: boolean | null;

		/**
		 * An enum value that will be replaced by the Chat API with the
		 * corresponding icon image.
		 */
		icon?: ImageButtonIcon | null;

		/** The icon specified by a URL. */
		iconUrl?: string | null;

		/** An onclick action (e.g. open a link). */
		onClick?: OnClick;

		/** The text of the top label. Formatted text supported. */
		topLabel?: string | null;
	}

	/**
	 * A UI element contains a key (label) and a value (content). And this
	 * element may also contain some actions such as onclick button.
	 */
	export interface KeyValueFormProperties {

		/** The text of the bottom label. Formatted text supported. */
		bottomLabel: FormControl<string | null | undefined>,

		/** The text of the content. Formatted text supported and always required. */
		content: FormControl<string | null | undefined>,

		/** If the content should be multiline. */
		contentMultiline: FormControl<boolean | null | undefined>,

		/**
		 * An enum value that will be replaced by the Chat API with the
		 * corresponding icon image.
		 */
		icon: FormControl<ImageButtonIcon | null | undefined>,

		/** The icon specified by a URL. */
		iconUrl: FormControl<string | null | undefined>,

		/** The text of the top label. Formatted text supported. */
		topLabel: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueFormGroup() {
		return new FormGroup<KeyValueFormProperties>({
			bottomLabel: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			contentMultiline: new FormControl<boolean | null | undefined>(undefined),
			icon: new FormControl<ImageButtonIcon | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			topLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paragraph of text. Formatted text supported. */
	export interface TextParagraph {
		text?: string | null;
	}

	/** A paragraph of text. Formatted text supported. */
	export interface TextParagraphFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextParagraphFormGroup() {
		return new FormGroup<TextParagraphFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

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
		configCompleteRedirectUrl?: string | null;

		/** The timestamp indicating when the event was dispatched. */
		eventTime?: string | null;

		/** A message in Hangouts Chat. */
		message?: Message;

		/** A room or DM in Hangouts Chat. */
		space?: Space;

		/**
		 * The bot-defined key for the thread related to the event. See the
		 * thread_key field of the
		 * `spaces.message.create` request for more information.
		 */
		threadKey?: string | null;

		/**
		 * A secret value that bots can use to verify if a request is from Google. The
		 * token is randomly generated by Google, remains static, and can be obtained
		 * from the Hangouts Chat API configuration page in the Cloud Console.
		 * Developers can revoke/regenerate it if needed from the same page.
		 */
		token?: string | null;

		/** The type of the event. */
		type?: DeprecatedEventType | null;

		/** A user in Hangouts Chat. */
		user?: User;
	}

	/** Hangouts Chat events. */
	export interface DeprecatedEventFormProperties {

		/**
		 * The URL the bot should redirect the user to after they have completed an
		 * authorization or configuration flow outside of Hangouts Chat. See the
		 * [Authorizing access to 3p services guide](/hangouts/chat/how-tos/auth-3p)
		 * for more information.
		 */
		configCompleteRedirectUrl: FormControl<string | null | undefined>,

		/** The timestamp indicating when the event was dispatched. */
		eventTime: FormControl<string | null | undefined>,

		/**
		 * The bot-defined key for the thread related to the event. See the
		 * thread_key field of the
		 * `spaces.message.create` request for more information.
		 */
		threadKey: FormControl<string | null | undefined>,

		/**
		 * A secret value that bots can use to verify if a request is from Google. The
		 * token is randomly generated by Google, remains static, and can be obtained
		 * from the Hangouts Chat API configuration page in the Cloud Console.
		 * Developers can revoke/regenerate it if needed from the same page.
		 */
		token: FormControl<string | null | undefined>,

		/** The type of the event. */
		type: FormControl<DeprecatedEventType | null | undefined>,
	}
	export function CreateDeprecatedEventFormGroup() {
		return new FormGroup<DeprecatedEventFormProperties>({
			configCompleteRedirectUrl: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			threadKey: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeprecatedEventType | null | undefined>(undefined),
		});

	}


	/** A message in Hangouts Chat. */
	export interface Message {

		/** Parameters that a bot can use to configure how it's response is posted. */
		actionResponse?: ActionResponse;

		/** Output only. Annotations associated with the text in this message. */
		annotations?: Array<Annotation>;

		/** Plain-text body of the message with all bot mentions stripped out. */
		argumentText?: string | null;

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
		createTime?: string | null;

		/**
		 * A plain-text description of the message's cards, used when the actual cards
		 * cannot be displayed (e.g. mobile notifications).
		 */
		fallbackText?: string | null;

		/**
		 * Resource name, in the form "spaces/messages/*".
		 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
		 */
		name?: string | null;

		/**
		 * Text for generating preview chips. This text will not be displayed to the
		 * user, but any links to images, web pages, videos, etc. included here will
		 * generate preview chips.
		 */
		previewText?: string | null;

		/** A user in Hangouts Chat. */
		sender?: User;

		/** A room or DM in Hangouts Chat. */
		space?: Space;

		/** Plain-text body of the message. */
		text?: string | null;

		/** A thread in Hangouts Chat. */
		thread?: Thread;
	}

	/** A message in Hangouts Chat. */
	export interface MessageFormProperties {

		/** Plain-text body of the message with all bot mentions stripped out. */
		argumentText: FormControl<string | null | undefined>,

		/**
		 * Output only. The time at which the message was created in Hangouts Chat
		 * server.
		 */
		createTime: FormControl<string | null | undefined>,

		/**
		 * A plain-text description of the message's cards, used when the actual cards
		 * cannot be displayed (e.g. mobile notifications).
		 */
		fallbackText: FormControl<string | null | undefined>,

		/**
		 * Resource name, in the form "spaces/messages/*".
		 * Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Text for generating preview chips. This text will not be displayed to the
		 * user, but any links to images, web pages, videos, etc. included here will
		 * generate preview chips.
		 */
		previewText: FormControl<string | null | undefined>,

		/** Plain-text body of the message. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			argumentText: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			fallbackText: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			previewText: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A room or DM in Hangouts Chat. */
	export interface Space {

		/** Output only. The display name (only if the space is a room). */
		displayName?: string | null;

		/**
		 * Resource name of the space, in the form "spaces/*".
		 * Example: spaces/AAAAMpdlehYs
		 */
		name?: string | null;

		/** Output only. The type of a space. */
		type?: SpaceType | null;
	}

	/** A room or DM in Hangouts Chat. */
	export interface SpaceFormProperties {

		/** Output only. The display name (only if the space is a room). */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Resource name of the space, in the form "spaces/*".
		 * Example: spaces/AAAAMpdlehYs
		 */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of a space. */
		type: FormControl<SpaceType | null | undefined>,
	}
	export function CreateSpaceFormGroup() {
		return new FormGroup<SpaceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SpaceType | null | undefined>(undefined),
		});

	}

	export enum SpaceType { TYPE_UNSPECIFIED = 0, ROOM = 1, DM = 2 }


	/** A thread in Hangouts Chat. */
	export interface Thread {

		/**
		 * Resource name, in the form "spaces/threads/*".
		 * Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
		 */
		name?: string | null;
	}

	/** A thread in Hangouts Chat. */
	export interface ThreadFormProperties {

		/**
		 * Resource name, in the form "spaces/threads/*".
		 * Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateThreadFormGroup() {
		return new FormGroup<ThreadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

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

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface ListMembershipsResponse {

		/** List of memberships in the requested (or first) page. */
		memberships?: Array<Membership>;

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results.
		 */
		nextPageToken?: string | null;
	}
	export interface ListMembershipsResponseFormProperties {

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipsResponseFormGroup() {
		return new FormGroup<ListMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a membership relation in Hangouts Chat. */
	export interface Membership {

		/**
		 * The creation time of the membership a.k.a the time at which the member
		 * joined the space, if applicable.
		 */
		createTime?: string | null;

		/** A user in Hangouts Chat. */
		member?: User;

		/**
		 * Resource name of the membership, in the form "spaces/members/*".
		 * Example: spaces/AAAAMpdlehY/members/105115627578887013105
		 */
		name?: string | null;

		/** State of the membership. */
		state?: MembershipState | null;
	}

	/** Represents a membership relation in Hangouts Chat. */
	export interface MembershipFormProperties {

		/**
		 * The creation time of the membership a.k.a the time at which the member
		 * joined the space, if applicable.
		 */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Resource name of the membership, in the form "spaces/members/*".
		 * Example: spaces/AAAAMpdlehY/members/105115627578887013105
		 */
		name: FormControl<string | null | undefined>,

		/** State of the membership. */
		state: FormControl<MembershipState | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MembershipState | null | undefined>(undefined),
		});

	}

	export enum MembershipState { MEMBERSHIP_STATE_UNSPECIFIED = 0, JOINED = 1, INVITED = 2, NOT_A_MEMBER = 3 }

	export interface ListSpacesResponse {

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results. Tokens expire in an hour. An error is thrown
		 * if an expired token is passed.
		 */
		nextPageToken?: string | null;

		/** List of spaces in the requested (or first) page. */
		spaces?: Array<Space>;
	}
	export interface ListSpacesResponseFormProperties {

		/**
		 * Continuation token to retrieve the next page of results. It will be empty
		 * for the last page of results. Tokens expire in an hour. An error is thrown
		 * if an expired token is passed.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpacesResponseFormGroup() {
		return new FormGroup<ListSpacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

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
		Chat_spaces_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		Chat_spaces_messages_update(name: string, updateMask: string | null | undefined, requestBody: Message): Observable<HttpResponse<string>> {
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
		Chat_spaces_members_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		Chat_spaces_messages_create(parent: string, threadKey: string | null | undefined, requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&threadKey=' + (threadKey == null ? '' : encodeURIComponent(threadKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

