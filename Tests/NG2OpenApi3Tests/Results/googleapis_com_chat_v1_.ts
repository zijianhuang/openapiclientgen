import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. */
	export interface ActionParameter {

		/** The name of the parameter for the action script. */
		key?: string | null;

		/** The value of the parameter. */
		value?: string | null;
	}

	/** List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. */
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


	/** Parameters that a Chat app can use to configure how its response is posted. */
	export interface ActionResponse {

		/** Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code. */
		dialogAction?: DialogAction;

		/** Input only. The type of Chat app response. */
		type?: ActionResponseType | null;

		/** The response of the updated widget. Used to provide autocomplete options for a widget. */
		updatedWidget?: UpdatedWidget;

		/** Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.) */
		url?: string | null;
	}

	/** Parameters that a Chat app can use to configure how its response is posted. */
	export interface ActionResponseFormProperties {

		/** Input only. The type of Chat app response. */
		type: FormControl<ActionResponseType | null | undefined>,

		/** Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActionResponseFormGroup() {
		return new FormGroup<ActionResponseFormProperties>({
			type: new FormControl<ActionResponseType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code. */
	export interface DialogAction {

		/** Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
		actionStatus?: ActionStatus;

		/** Wrapper around the card body of the dialog. */
		dialog?: Dialog;
	}

	/** Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code. */
	export interface DialogActionFormProperties {
	}
	export function CreateDialogActionFormGroup() {
		return new FormGroup<DialogActionFormProperties>({
		});

	}


	/** Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
	export interface ActionStatus {

		/** The status code. */
		statusCode?: ActionStatusStatusCode | null;

		/** The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent. */
		userFacingMessage?: string | null;
	}

	/** Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
	export interface ActionStatusFormProperties {

		/** The status code. */
		statusCode: FormControl<ActionStatusStatusCode | null | undefined>,

		/** The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent. */
		userFacingMessage: FormControl<string | null | undefined>,
	}
	export function CreateActionStatusFormGroup() {
		return new FormGroup<ActionStatusFormProperties>({
			statusCode: new FormControl<ActionStatusStatusCode | null | undefined>(undefined),
			userFacingMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionStatusStatusCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


	/** Wrapper around the card body of the dialog. */
	export interface Dialog {

		/** A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ``` */
		body?: GoogleAppsCardV1Card;
	}

	/** Wrapper around the card body of the dialog. */
	export interface DialogFormProperties {
	}
	export function CreateDialogFormGroup() {
		return new FormGroup<DialogFormProperties>({
		});

	}


	/** A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ``` */
	export interface GoogleAppsCardV1Card {

		/** The card's actions. Actions are added to the card's toolbar menu. Because Chat app cards have no toolbar, `cardActions[]` isn't supported by Chat apps. For example, the following JSON constructs a card action menu with `Settings` and `Send Feedback` options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ``` */
		cardActions?: Array<GoogleAppsCardV1CardAction>;

		/** In Google Workspace add-ons, sets the display properties of the `peekCardHeader`. Not supported by Chat apps. */
		displayStyle?: GoogleAppsCardV1CardDisplayStyle | null;

		/** A persistent (sticky) footer that that appears at the bottom of the card. For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). */
		fixedFooter?: GoogleAppsCardV1CardFixedFooter;

		/** Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). */
		header?: GoogleAppsCardV1CardHeader;

		/** Name of the card. Used as a card identifier in card navigation. Because Chat apps don't support card navigation, they ignore this field. */
		name?: string | null;

		/** Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). */
		peekCardHeader?: GoogleAppsCardV1CardHeader;

		/** The divider style between sections. */
		sectionDividerStyle?: GoogleAppsCardV1CardSectionDividerStyle | null;

		/** Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Card section](https://developers.google.com/chat/ui/widgets/card-section). */
		sections?: Array<GoogleAppsCardV1Section>;
	}

	/** A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ``` */
	export interface GoogleAppsCardV1CardFormProperties {

		/** In Google Workspace add-ons, sets the display properties of the `peekCardHeader`. Not supported by Chat apps. */
		displayStyle: FormControl<GoogleAppsCardV1CardDisplayStyle | null | undefined>,

		/** Name of the card. Used as a card identifier in card navigation. Because Chat apps don't support card navigation, they ignore this field. */
		name: FormControl<string | null | undefined>,

		/** The divider style between sections. */
		sectionDividerStyle: FormControl<GoogleAppsCardV1CardSectionDividerStyle | null | undefined>,
	}
	export function CreateGoogleAppsCardV1CardFormGroup() {
		return new FormGroup<GoogleAppsCardV1CardFormProperties>({
			displayStyle: new FormControl<GoogleAppsCardV1CardDisplayStyle | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sectionDividerStyle: new FormControl<GoogleAppsCardV1CardSectionDividerStyle | null | undefined>(undefined),
		});

	}


	/** A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): */
	export interface GoogleAppsCardV1CardAction {

		/** The label that displays as the action menu item. */
		actionLabel?: string | null;

		/** Represents how to respond when users click an interactive element on a card, such as a button. */
		onClick?: GoogleAppsCardV1OnClick;
	}

	/** A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): */
	export interface GoogleAppsCardV1CardActionFormProperties {

		/** The label that displays as the action menu item. */
		actionLabel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1CardActionFormGroup() {
		return new FormGroup<GoogleAppsCardV1CardActionFormProperties>({
			actionLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents how to respond when users click an interactive element on a card, such as a button. */
	export interface GoogleAppsCardV1OnClick {

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		action?: GoogleAppsCardV1Action;

		/** A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ``` */
		card?: GoogleAppsCardV1Card;

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		openDynamicLinkAction?: GoogleAppsCardV1Action;

		/** Represents an `onClick` event that opens a hyperlink. */
		openLink?: GoogleAppsCardV1OpenLink;
	}

	/** Represents how to respond when users click an interactive element on a card, such as a button. */
	export interface GoogleAppsCardV1OnClickFormProperties {
	}
	export function CreateGoogleAppsCardV1OnClickFormGroup() {
		return new FormGroup<GoogleAppsCardV1OnClickFormProperties>({
		});

	}


	/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
	export interface GoogleAppsCardV1Action {

		/** A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick). */
		function?: string | null;

		/** Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator isn't shown. Supported by Chat apps, but not Google Workspace Add-ons. If specified for an add-on, the entire card is stripped and nothing is shown in the client. */
		interaction?: GoogleAppsCardV1ActionInteraction | null;

		/** Specifies the loading indicator that the action displays while making the call to the action. */
		loadIndicator?: GoogleAppsCardV1ActionLoadIndicator | null;

		/** List of action parameters. */
		parameters?: Array<GoogleAppsCardV1ActionParameter>;

		/** Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`. */
		persistValues?: boolean | null;
	}

	/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
	export interface GoogleAppsCardV1ActionFormProperties {

		/** A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick). */
		function: FormControl<string | null | undefined>,

		/** Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator isn't shown. Supported by Chat apps, but not Google Workspace Add-ons. If specified for an add-on, the entire card is stripped and nothing is shown in the client. */
		interaction: FormControl<GoogleAppsCardV1ActionInteraction | null | undefined>,

		/** Specifies the loading indicator that the action displays while making the call to the action. */
		loadIndicator: FormControl<GoogleAppsCardV1ActionLoadIndicator | null | undefined>,

		/** Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`. */
		persistValues: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ActionFormGroup() {
		return new FormGroup<GoogleAppsCardV1ActionFormProperties>({
			function: new FormControl<string | null | undefined>(undefined),
			interaction: new FormControl<GoogleAppsCardV1ActionInteraction | null | undefined>(undefined),
			loadIndicator: new FormControl<GoogleAppsCardV1ActionLoadIndicator | null | undefined>(undefined),
			persistValues: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1ActionInteraction { INTERACTION_UNSPECIFIED = 0, OPEN_DIALOG = 1 }

	export enum GoogleAppsCardV1ActionLoadIndicator { SPINNER = 0, NONE = 1 }


	/** List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject). */
	export interface GoogleAppsCardV1ActionParameter {

		/** The name of the parameter for the action script. */
		key?: string | null;

		/** The value of the parameter. */
		value?: string | null;
	}

	/** List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject). */
	export interface GoogleAppsCardV1ActionParameterFormProperties {

		/** The name of the parameter for the action script. */
		key: FormControl<string | null | undefined>,

		/** The value of the parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ActionParameterFormGroup() {
		return new FormGroup<GoogleAppsCardV1ActionParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an `onClick` event that opens a hyperlink. */
	export interface GoogleAppsCardV1OpenLink {

		/** Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps. */
		onClose?: GoogleAppsCardV1OpenLinkOnClose | null;

		/** How to open a link. Not supported by Chat apps. */
		openAs?: GoogleAppsCardV1OpenLinkOpenAs | null;

		/** The URL to open. */
		url?: string | null;
	}

	/** Represents an `onClick` event that opens a hyperlink. */
	export interface GoogleAppsCardV1OpenLinkFormProperties {

		/** Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps. */
		onClose: FormControl<GoogleAppsCardV1OpenLinkOnClose | null | undefined>,

		/** How to open a link. Not supported by Chat apps. */
		openAs: FormControl<GoogleAppsCardV1OpenLinkOpenAs | null | undefined>,

		/** The URL to open. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1OpenLinkFormGroup() {
		return new FormGroup<GoogleAppsCardV1OpenLinkFormProperties>({
			onClose: new FormControl<GoogleAppsCardV1OpenLinkOnClose | null | undefined>(undefined),
			openAs: new FormControl<GoogleAppsCardV1OpenLinkOpenAs | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1OpenLinkOnClose { NOTHING = 0, RELOAD = 1 }

	export enum GoogleAppsCardV1OpenLinkOpenAs { FULL_SIZE = 0, OVERLAY = 1 }

	export enum GoogleAppsCardV1CardDisplayStyle { DISPLAY_STYLE_UNSPECIFIED = 0, PEEK = 1, REPLACE = 2 }


	/** A persistent (sticky) footer that that appears at the bottom of the card. For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). */
	export interface GoogleAppsCardV1CardFixedFooter {

		/** A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. */
		primaryButton?: GoogleAppsCardV1Button;

		/** A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. */
		secondaryButton?: GoogleAppsCardV1Button;
	}

	/** A persistent (sticky) footer that that appears at the bottom of the card. For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). */
	export interface GoogleAppsCardV1CardFixedFooterFormProperties {
	}
	export function CreateGoogleAppsCardV1CardFixedFooterFormGroup() {
		return new FormGroup<GoogleAppsCardV1CardFixedFooterFormProperties>({
		});

	}


	/** A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. */
	export interface GoogleAppsCardV1Button {

		/** The alternative text that's used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat". */
		altText?: string | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** If `true`, the button is displayed in an inactive state and doesn't respond to user actions. */
		disabled?: boolean | null;

		/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
		icon?: GoogleAppsCardV1Icon;

		/** Represents how to respond when users click an interactive element on a card, such as a button. */
		onClick?: GoogleAppsCardV1OnClick;

		/** The text displayed inside the button. */
		text?: string | null;
	}

	/** A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. */
	export interface GoogleAppsCardV1ButtonFormProperties {

		/** The alternative text that's used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat". */
		altText: FormControl<string | null | undefined>,

		/** If `true`, the button is displayed in an inactive state and doesn't respond to user actions. */
		disabled: FormControl<boolean | null | undefined>,

		/** The text displayed inside the button. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ButtonFormGroup() {
		return new FormGroup<GoogleAppsCardV1ButtonFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface Color {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha?: number | null;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number | null;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number | null;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number | null;
	}

	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface ColorFormProperties {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha: FormControl<number | null | undefined>,

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red: FormControl<number | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
	export interface GoogleAppsCardV1Icon {

		/** Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored. */
		altText?: string | null;

		/** Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`. */
		iconUrl?: string | null;

		/** The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon. */
		imageType?: GoogleAppsCardV1IconImageType | null;

		/** Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/format-messages#builtinicons). */
		knownIcon?: string | null;
	}

	/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
	export interface GoogleAppsCardV1IconFormProperties {

		/** Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored. */
		altText: FormControl<string | null | undefined>,

		/** Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`. */
		iconUrl: FormControl<string | null | undefined>,

		/** The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon. */
		imageType: FormControl<GoogleAppsCardV1IconImageType | null | undefined>,

		/** Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/format-messages#builtinicons). */
		knownIcon: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1IconFormGroup() {
		return new FormGroup<GoogleAppsCardV1IconFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<GoogleAppsCardV1IconImageType | null | undefined>(undefined),
			knownIcon: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1IconImageType { SQUARE = 0, CIRCLE = 1 }


	/** Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). */
	export interface GoogleAppsCardV1CardHeader {

		/** The alternative text of this image that's used for accessibility. */
		imageAltText?: string | null;

		/** The shape used to crop the image. */
		imageType?: GoogleAppsCardV1IconImageType | null;

		/** The HTTPS URL of the image in the card header. */
		imageUrl?: string | null;

		/** The subtitle of the card header. If specified, appears on its own line below the `title`. */
		subtitle?: string | null;

		/** Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines. */
		title?: string | null;
	}

	/** Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). */
	export interface GoogleAppsCardV1CardHeaderFormProperties {

		/** The alternative text of this image that's used for accessibility. */
		imageAltText: FormControl<string | null | undefined>,

		/** The shape used to crop the image. */
		imageType: FormControl<GoogleAppsCardV1IconImageType | null | undefined>,

		/** The HTTPS URL of the image in the card header. */
		imageUrl: FormControl<string | null | undefined>,

		/** The subtitle of the card header. If specified, appears on its own line below the `title`. */
		subtitle: FormControl<string | null | undefined>,

		/** Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1CardHeaderFormGroup() {
		return new FormGroup<GoogleAppsCardV1CardHeaderFormProperties>({
			imageAltText: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<GoogleAppsCardV1IconImageType | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1CardSectionDividerStyle { DIVIDER_STYLE_UNSPECIFIED = 0, SOLID_DIVIDER = 1, NO_DIVIDER = 2 }


	/** A section contains a collection of widgets that are rendered vertically in the order that they're specified. */
	export interface GoogleAppsCardV1Section {

		/** Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`. */
		collapsible?: boolean | null;

		/** Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		header?: string | null;

		/** The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`. */
		uncollapsibleWidgetsCount?: number | null;

		/** All the widgets in the section. Must contain at least one widget. */
		widgets?: Array<GoogleAppsCardV1Widget>;
	}

	/** A section contains a collection of widgets that are rendered vertically in the order that they're specified. */
	export interface GoogleAppsCardV1SectionFormProperties {

		/** Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`. */
		collapsible: FormControl<boolean | null | undefined>,

		/** Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		header: FormControl<string | null | undefined>,

		/** The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`. */
		uncollapsibleWidgetsCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsCardV1SectionFormGroup() {
		return new FormGroup<GoogleAppsCardV1SectionFormProperties>({
			collapsible: new FormControl<boolean | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			uncollapsibleWidgetsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types. */
	export interface GoogleAppsCardV1Widget {

		/** A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). */
		buttonList?: GoogleAppsCardV1ButtonList;

		/** The `Columns` widget displays up to 2 columns in a card message or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. Supported by Chat apps, but not Google Workspace Add-ons. */
		columns?: GoogleAppsCardV1Columns;

		/** Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. */
		dateTimePicker?: GoogleAppsCardV1DateTimePicker;

		/** A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). */
		decoratedText?: GoogleAppsCardV1DecoratedText;

		/** Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). For example, the following JSON creates a divider: ``` "divider": {} ``` */
		divider?: GoogleAppsCardV1Divider;

		/** Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ``` */
		grid?: GoogleAppsCardV1Grid;

		/** Specifies whether widgets align to the left, right, or center of a column. */
		horizontalAlignment?: GoogleAppsCardV1ColumnHorizontalAlignment | null;

		/** An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). */
		image?: GoogleAppsCardV1Image;

		/** A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. */
		selectionInput?: GoogleAppsCardV1SelectionInput;

		/** A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. */
		textInput?: GoogleAppsCardV1TextInput;

		/** A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		textParagraph?: GoogleAppsCardV1TextParagraph;
	}

	/** Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types. */
	export interface GoogleAppsCardV1WidgetFormProperties {

		/** Specifies whether widgets align to the left, right, or center of a column. */
		horizontalAlignment: FormControl<GoogleAppsCardV1ColumnHorizontalAlignment | null | undefined>,
	}
	export function CreateGoogleAppsCardV1WidgetFormGroup() {
		return new FormGroup<GoogleAppsCardV1WidgetFormProperties>({
			horizontalAlignment: new FormControl<GoogleAppsCardV1ColumnHorizontalAlignment | null | undefined>(undefined),
		});

	}


	/** A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). */
	export interface GoogleAppsCardV1ButtonList {

		/** An array of buttons. */
		buttons?: Array<GoogleAppsCardV1Button>;
	}

	/** A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). */
	export interface GoogleAppsCardV1ButtonListFormProperties {
	}
	export function CreateGoogleAppsCardV1ButtonListFormGroup() {
		return new FormGroup<GoogleAppsCardV1ButtonListFormProperties>({
		});

	}


	/** The `Columns` widget displays up to 2 columns in a card message or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. Supported by Chat apps, but not Google Workspace Add-ons. */
	export interface GoogleAppsCardV1Columns {

		/** An array of columns. You can include up to 2 columns in a card or dialog. */
		columnItems?: Array<GoogleAppsCardV1Column>;
	}

	/** The `Columns` widget displays up to 2 columns in a card message or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. Supported by Chat apps, but not Google Workspace Add-ons. */
	export interface GoogleAppsCardV1ColumnsFormProperties {
	}
	export function CreateGoogleAppsCardV1ColumnsFormGroup() {
		return new FormGroup<GoogleAppsCardV1ColumnsFormProperties>({
		});

	}


	/** A column. */
	export interface GoogleAppsCardV1Column {

		/** Specifies whether widgets align to the left, right, or center of a column. */
		horizontalAlignment?: GoogleAppsCardV1ColumnHorizontalAlignment | null;

		/** Specifies how a column fills the width of the card. */
		horizontalSizeStyle?: GoogleAppsCardV1ColumnHorizontalSizeStyle | null;

		/** Specifies whether widgets align to the top, bottom, or center of a column. */
		verticalAlignment?: GoogleAppsCardV1ColumnVerticalAlignment | null;

		/** An array of widgets included in a column. Widgets appear in the order that they are specified. */
		widgets?: Array<GoogleAppsCardV1Widgets>;
	}

	/** A column. */
	export interface GoogleAppsCardV1ColumnFormProperties {

		/** Specifies whether widgets align to the left, right, or center of a column. */
		horizontalAlignment: FormControl<GoogleAppsCardV1ColumnHorizontalAlignment | null | undefined>,

		/** Specifies how a column fills the width of the card. */
		horizontalSizeStyle: FormControl<GoogleAppsCardV1ColumnHorizontalSizeStyle | null | undefined>,

		/** Specifies whether widgets align to the top, bottom, or center of a column. */
		verticalAlignment: FormControl<GoogleAppsCardV1ColumnVerticalAlignment | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ColumnFormGroup() {
		return new FormGroup<GoogleAppsCardV1ColumnFormProperties>({
			horizontalAlignment: new FormControl<GoogleAppsCardV1ColumnHorizontalAlignment | null | undefined>(undefined),
			horizontalSizeStyle: new FormControl<GoogleAppsCardV1ColumnHorizontalSizeStyle | null | undefined>(undefined),
			verticalAlignment: new FormControl<GoogleAppsCardV1ColumnVerticalAlignment | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1ColumnHorizontalAlignment { HORIZONTAL_ALIGNMENT_UNSPECIFIED = 0, START = 1, CENTER = 2, END = 3 }

	export enum GoogleAppsCardV1ColumnHorizontalSizeStyle { HORIZONTAL_SIZE_STYLE_UNSPECIFIED = 0, FILL_AVAILABLE_SPACE = 1, FILL_MINIMUM_SPACE = 2 }

	export enum GoogleAppsCardV1ColumnVerticalAlignment { VERTICAL_ALIGNMENT_UNSPECIFIED = 0, CENTER = 1, TOP = 2, BOTTOM = 3 }


	/** The supported widgets that you can include in a column. */
	export interface GoogleAppsCardV1Widgets {

		/** A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). */
		buttonList?: GoogleAppsCardV1ButtonList;

		/** Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. */
		dateTimePicker?: GoogleAppsCardV1DateTimePicker;

		/** A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). */
		decoratedText?: GoogleAppsCardV1DecoratedText;

		/** An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). */
		image?: GoogleAppsCardV1Image;

		/** A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. */
		selectionInput?: GoogleAppsCardV1SelectionInput;

		/** A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. */
		textInput?: GoogleAppsCardV1TextInput;

		/** A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		textParagraph?: GoogleAppsCardV1TextParagraph;
	}

	/** The supported widgets that you can include in a column. */
	export interface GoogleAppsCardV1WidgetsFormProperties {
	}
	export function CreateGoogleAppsCardV1WidgetsFormGroup() {
		return new FormGroup<GoogleAppsCardV1WidgetsFormProperties>({
		});

	}


	/** Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. */
	export interface GoogleAppsCardV1DateTimePicker {

		/** The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`. */
		label?: string | null;

		/** The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name?: string | null;

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		onChangeAction?: GoogleAppsCardV1Action;

		/** The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting. */
		timezoneOffsetDate?: number | null;

		/** Whether the widget supports inputting a date, a time, or the date and time. */
		type?: GoogleAppsCardV1DateTimePickerType | null;

		/** The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`). */
		valueMsEpoch?: string | null;
	}

	/** Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. */
	export interface GoogleAppsCardV1DateTimePickerFormProperties {

		/** The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`. */
		label: FormControl<string | null | undefined>,

		/** The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name: FormControl<string | null | undefined>,

		/** The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting. */
		timezoneOffsetDate: FormControl<number | null | undefined>,

		/** Whether the widget supports inputting a date, a time, or the date and time. */
		type: FormControl<GoogleAppsCardV1DateTimePickerType | null | undefined>,

		/** The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`). */
		valueMsEpoch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1DateTimePickerFormGroup() {
		return new FormGroup<GoogleAppsCardV1DateTimePickerFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timezoneOffsetDate: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleAppsCardV1DateTimePickerType | null | undefined>(undefined),
			valueMsEpoch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1DateTimePickerType { DATE_AND_TIME = 0, DATE_ONLY = 1, TIME_ONLY = 2 }


	/** A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). */
	export interface GoogleAppsCardV1DecoratedText {

		/** The text that appears below `text`. Always wraps. */
		bottomLabel?: string | null;

		/** A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. */
		button?: GoogleAppsCardV1Button;

		/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
		endIcon?: GoogleAppsCardV1Icon;

		/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
		icon?: GoogleAppsCardV1Icon;

		/** Represents how to respond when users click an interactive element on a card, such as a button. */
		onClick?: GoogleAppsCardV1OnClick;

		/** An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. */
		startIcon?: GoogleAppsCardV1Icon;

		/** Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported in the `decoratedText` widget. */
		switchControl?: GoogleAppsCardV1SwitchControl;

		/** Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		text?: string | null;

		/** The text that appears above `text`. Always truncates. */
		topLabel?: string | null;

		/** The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`. */
		wrapText?: boolean | null;
	}

	/** A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). */
	export interface GoogleAppsCardV1DecoratedTextFormProperties {

		/** The text that appears below `text`. Always wraps. */
		bottomLabel: FormControl<string | null | undefined>,

		/** Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		text: FormControl<string | null | undefined>,

		/** The text that appears above `text`. Always truncates. */
		topLabel: FormControl<string | null | undefined>,

		/** The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`. */
		wrapText: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsCardV1DecoratedTextFormGroup() {
		return new FormGroup<GoogleAppsCardV1DecoratedTextFormProperties>({
			bottomLabel: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			topLabel: new FormControl<string | null | undefined>(undefined),
			wrapText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported in the `decoratedText` widget. */
	export interface GoogleAppsCardV1SwitchControl {

		/** How the switch appears in the user interface. */
		controlType?: GoogleAppsCardV1SwitchControlControlType | null;

		/** The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name?: string | null;

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		onChangeAction?: GoogleAppsCardV1Action;

		/** When `true`, the switch is selected. */
		selected?: boolean | null;

		/** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value?: string | null;
	}

	/** Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported in the `decoratedText` widget. */
	export interface GoogleAppsCardV1SwitchControlFormProperties {

		/** How the switch appears in the user interface. */
		controlType: FormControl<GoogleAppsCardV1SwitchControlControlType | null | undefined>,

		/** The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name: FormControl<string | null | undefined>,

		/** When `true`, the switch is selected. */
		selected: FormControl<boolean | null | undefined>,

		/** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1SwitchControlFormGroup() {
		return new FormGroup<GoogleAppsCardV1SwitchControlFormProperties>({
			controlType: new FormControl<GoogleAppsCardV1SwitchControlControlType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1SwitchControlControlType { SWITCH = 0, CHECKBOX = 1, CHECK_BOX = 2 }


	/** An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). */
	export interface GoogleAppsCardV1Image {

		/** The alternative text of this image that's used for accessibility. */
		altText?: string | null;

		/** The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ``` */
		imageUrl?: string | null;

		/** Represents how to respond when users click an interactive element on a card, such as a button. */
		onClick?: GoogleAppsCardV1OnClick;
	}

	/** An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). */
	export interface GoogleAppsCardV1ImageFormProperties {

		/** The alternative text of this image that's used for accessibility. */
		altText: FormControl<string | null | undefined>,

		/** The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ``` */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ImageFormGroup() {
		return new FormGroup<GoogleAppsCardV1ImageFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. */
	export interface GoogleAppsCardV1SelectionInput {

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		externalDataSource?: GoogleAppsCardV1Action;

		/** An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items. */
		items?: Array<GoogleAppsCardV1SelectionItem>;

		/** The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency". */
		label?: string | null;

		/** For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items. */
		multiSelectMaxSelectedItems?: number | null;

		/** For multiselect menus, the number of text characters that a user inputs before the Chat app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources. */
		multiSelectMinQueryLength?: number | null;

		/** The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name?: string | null;

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		onChangeAction?: GoogleAppsCardV1Action;

		/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. */
		platformDataSource?: GoogleAppsCardV1PlatformDataSource;

		/** The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu. */
		type?: GoogleAppsCardV1SelectionInputType | null;
	}

	/** A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. */
	export interface GoogleAppsCardV1SelectionInputFormProperties {

		/** The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency". */
		label: FormControl<string | null | undefined>,

		/** For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items. */
		multiSelectMaxSelectedItems: FormControl<number | null | undefined>,

		/** For multiselect menus, the number of text characters that a user inputs before the Chat app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources. */
		multiSelectMinQueryLength: FormControl<number | null | undefined>,

		/** The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name: FormControl<string | null | undefined>,

		/** The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu. */
		type: FormControl<GoogleAppsCardV1SelectionInputType | null | undefined>,
	}
	export function CreateGoogleAppsCardV1SelectionInputFormGroup() {
		return new FormGroup<GoogleAppsCardV1SelectionInputFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			multiSelectMaxSelectedItems: new FormControl<number | null | undefined>(undefined),
			multiSelectMinQueryLength: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAppsCardV1SelectionInputType | null | undefined>(undefined),
		});

	}


	/** An item that users can select in a selection input, such as a checkbox or switch. */
	export interface GoogleAppsCardV1SelectionItem {

		/** For multiselect menus, a text description or label that's displayed below the item's `text` field. */
		bottomText?: string | null;

		/** Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. */
		selected?: boolean | null;

		/** For multiselect menus, the URL for the icon displayed next to the item's `text` field. Supports PNG and JPEG files. Must be an `HTTPS` URL. For example, `https://developers.google.com/chat/images/quickstart-app-avatar.png`. */
		startIconUri?: string | null;

		/** The text that identifies or describes the item to users. */
		text?: string | null;

		/** The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value?: string | null;
	}

	/** An item that users can select in a selection input, such as a checkbox or switch. */
	export interface GoogleAppsCardV1SelectionItemFormProperties {

		/** For multiselect menus, a text description or label that's displayed below the item's `text` field. */
		bottomText: FormControl<string | null | undefined>,

		/** Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. */
		selected: FormControl<boolean | null | undefined>,

		/** For multiselect menus, the URL for the icon displayed next to the item's `text` field. Supports PNG and JPEG files. Must be an `HTTPS` URL. For example, `https://developers.google.com/chat/images/quickstart-app-avatar.png`. */
		startIconUri: FormControl<string | null | undefined>,

		/** The text that identifies or describes the item to users. */
		text: FormControl<string | null | undefined>,

		/** The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1SelectionItemFormGroup() {
		return new FormGroup<GoogleAppsCardV1SelectionItemFormProperties>({
			bottomText: new FormControl<string | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			startIconUri: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. */
	export interface GoogleAppsCardV1PlatformDataSource {

		/** A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. */
		commonDataSource?: GoogleAppsCardV1PlatformDataSourceCommonDataSource | null;

		/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. */
		hostAppDataSource?: HostAppDataSourceMarkup;
	}

	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. */
	export interface GoogleAppsCardV1PlatformDataSourceFormProperties {

		/** A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. */
		commonDataSource: FormControl<GoogleAppsCardV1PlatformDataSourceCommonDataSource | null | undefined>,
	}
	export function CreateGoogleAppsCardV1PlatformDataSourceFormGroup() {
		return new FormGroup<GoogleAppsCardV1PlatformDataSourceFormProperties>({
			commonDataSource: new FormControl<GoogleAppsCardV1PlatformDataSourceCommonDataSource | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1PlatformDataSourceCommonDataSource { UNKNOWN = 0, USER = 1 }


	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. */
	export interface HostAppDataSourceMarkup {

		/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. */
		chatDataSource?: ChatClientDataSourceMarkup;
	}

	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. */
	export interface HostAppDataSourceMarkupFormProperties {
	}
	export function CreateHostAppDataSourceMarkupFormGroup() {
		return new FormGroup<HostAppDataSourceMarkupFormProperties>({
		});

	}


	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. */
	export interface ChatClientDataSourceMarkup {

		/** A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. */
		spaceDataSource?: SpaceDataSource;
	}

	/** Chat apps only. For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. */
	export interface ChatClientDataSourceMarkupFormProperties {
	}
	export function CreateChatClientDataSourceMarkupFormGroup() {
		return new FormGroup<ChatClientDataSourceMarkupFormProperties>({
		});

	}


	/** A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. */
	export interface SpaceDataSource {

		/** If set to `true`, the multiselect menu selects the current Google Chat space as an item by default. */
		defaultToCurrentSpace?: boolean | null;
	}

	/** A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. */
	export interface SpaceDataSourceFormProperties {

		/** If set to `true`, the multiselect menu selects the current Google Chat space as an item by default. */
		defaultToCurrentSpace: FormControl<boolean | null | undefined>,
	}
	export function CreateSpaceDataSourceFormGroup() {
		return new FormGroup<SpaceDataSourceFormProperties>({
			defaultToCurrentSpace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1SelectionInputType { CHECK_BOX = 0, RADIO_BUTTON = 1, SWITCH = 2, DROPDOWN = 3, MULTI_SELECT = 4 }


	/** A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. */
	export interface GoogleAppsCardV1TextInput {

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		autoCompleteAction?: GoogleAppsCardV1Action;

		/** Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional. */
		hintText?: string | null;

		/** Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. */
		initialSuggestions?: GoogleAppsCardV1Suggestions;

		/** The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional. */
		label?: string | null;

		/** The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name?: string | null;

		/** An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. */
		onChangeAction?: GoogleAppsCardV1Action;

		/** Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/chat): */
		placeholderText?: string | null;

		/** How a text input field appears in the user interface. For example, whether the field is single or multi-line. */
		type?: GoogleAppsCardV1TextInputType | null;

		/** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value?: string | null;
	}

	/** A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. */
	export interface GoogleAppsCardV1TextInputFormProperties {

		/** Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional. */
		hintText: FormControl<string | null | undefined>,

		/** The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional. */
		label: FormControl<string | null | undefined>,

		/** The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		name: FormControl<string | null | undefined>,

		/** Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/chat): */
		placeholderText: FormControl<string | null | undefined>,

		/** How a text input field appears in the user interface. For example, whether the field is single or multi-line. */
		type: FormControl<GoogleAppsCardV1TextInputType | null | undefined>,

		/** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1TextInputFormGroup() {
		return new FormGroup<GoogleAppsCardV1TextInputFormProperties>({
			hintText: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			placeholderText: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAppsCardV1TextInputType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. */
	export interface GoogleAppsCardV1Suggestions {

		/** A list of suggestions used for autocomplete recommendations in text input fields. */
		items?: Array<GoogleAppsCardV1SuggestionItem>;
	}

	/** Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. */
	export interface GoogleAppsCardV1SuggestionsFormProperties {
	}
	export function CreateGoogleAppsCardV1SuggestionsFormGroup() {
		return new FormGroup<GoogleAppsCardV1SuggestionsFormProperties>({
		});

	}


	/** One suggested value that users can enter in a text input field. */
	export interface GoogleAppsCardV1SuggestionItem {

		/** The value of a suggested input to a text input field. This is equivalent to what users enter themselves. */
		text?: string | null;
	}

	/** One suggested value that users can enter in a text input field. */
	export interface GoogleAppsCardV1SuggestionItemFormProperties {

		/** The value of a suggested input to a text input field. This is equivalent to what users enter themselves. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1SuggestionItemFormGroup() {
		return new FormGroup<GoogleAppsCardV1SuggestionItemFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1TextInputType { SINGLE_LINE = 0, MULTIPLE_LINE = 1 }


	/** A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
	export interface GoogleAppsCardV1TextParagraph {

		/** The text that's shown in the widget. */
		text?: string | null;
	}

	/** A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
	export interface GoogleAppsCardV1TextParagraphFormProperties {

		/** The text that's shown in the widget. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1TextParagraphFormGroup() {
		return new FormGroup<GoogleAppsCardV1TextParagraphFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). For example, the following JSON creates a divider: ``` "divider": {} ``` */
	export interface GoogleAppsCardV1Divider {
	}

	/** Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). For example, the following JSON creates a divider: ``` "divider": {} ``` */
	export interface GoogleAppsCardV1DividerFormProperties {
	}
	export function CreateGoogleAppsCardV1DividerFormGroup() {
		return new FormGroup<GoogleAppsCardV1DividerFormProperties>({
		});

	}


	/** Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ``` */
	export interface GoogleAppsCardV1Grid {

		/** The style options for the border of a card or widget, including the border type and color. */
		borderStyle?: GoogleAppsCardV1BorderStyle;

		/** The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion). */
		columnCount?: number | null;

		/** The items to display in the grid. */
		items?: Array<GoogleAppsCardV1GridItem>;

		/** Represents how to respond when users click an interactive element on a card, such as a button. */
		onClick?: GoogleAppsCardV1OnClick;

		/** The text that displays in the grid header. */
		title?: string | null;
	}

	/** Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ``` */
	export interface GoogleAppsCardV1GridFormProperties {

		/** The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion). */
		columnCount: FormControl<number | null | undefined>,

		/** The text that displays in the grid header. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1GridFormGroup() {
		return new FormGroup<GoogleAppsCardV1GridFormProperties>({
			columnCount: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The style options for the border of a card or widget, including the border type and color. */
	export interface GoogleAppsCardV1BorderStyle {

		/** The corner radius for the border. */
		cornerRadius?: number | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		strokeColor?: Color;

		/** The border type. */
		type?: GoogleAppsCardV1BorderStyleType | null;
	}

	/** The style options for the border of a card or widget, including the border type and color. */
	export interface GoogleAppsCardV1BorderStyleFormProperties {

		/** The corner radius for the border. */
		cornerRadius: FormControl<number | null | undefined>,

		/** The border type. */
		type: FormControl<GoogleAppsCardV1BorderStyleType | null | undefined>,
	}
	export function CreateGoogleAppsCardV1BorderStyleFormGroup() {
		return new FormGroup<GoogleAppsCardV1BorderStyleFormProperties>({
			cornerRadius: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleAppsCardV1BorderStyleType | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1BorderStyleType { BORDER_TYPE_UNSPECIFIED = 0, NO_BORDER = 1, STROKE = 2 }


	/** Represents an item in a grid layout. Items can contain text, an image, or both text and an image. */
	export interface GoogleAppsCardV1GridItem {

		/** A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters. */
		id?: string | null;

		/** Represents an image. */
		image?: GoogleAppsCardV1ImageComponent;

		/** The layout to use for the grid item. */
		layout?: GoogleAppsCardV1GridItemLayout | null;

		/** The grid item's subtitle. */
		subtitle?: string | null;

		/** The grid item's title. */
		title?: string | null;
	}

	/** Represents an item in a grid layout. Items can contain text, an image, or both text and an image. */
	export interface GoogleAppsCardV1GridItemFormProperties {

		/** A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters. */
		id: FormControl<string | null | undefined>,

		/** The layout to use for the grid item. */
		layout: FormControl<GoogleAppsCardV1GridItemLayout | null | undefined>,

		/** The grid item's subtitle. */
		subtitle: FormControl<string | null | undefined>,

		/** The grid item's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1GridItemFormGroup() {
		return new FormGroup<GoogleAppsCardV1GridItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<GoogleAppsCardV1GridItemLayout | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an image. */
	export interface GoogleAppsCardV1ImageComponent {

		/** The accessibility label for the image. */
		altText?: string | null;

		/** The style options for the border of a card or widget, including the border type and color. */
		borderStyle?: GoogleAppsCardV1BorderStyle;

		/** Represents the crop style applied to an image. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
		cropStyle?: GoogleAppsCardV1ImageCropStyle;

		/** The image URL. */
		imageUri?: string | null;
	}

	/** Represents an image. */
	export interface GoogleAppsCardV1ImageComponentFormProperties {

		/** The accessibility label for the image. */
		altText: FormControl<string | null | undefined>,

		/** The image URL. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ImageComponentFormGroup() {
		return new FormGroup<GoogleAppsCardV1ImageComponentFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the crop style applied to an image. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
	export interface GoogleAppsCardV1ImageCropStyle {

		/** The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
		aspectRatio?: number | null;

		/** The crop type. */
		type?: GoogleAppsCardV1ImageCropStyleType | null;
	}

	/** Represents the crop style applied to an image. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
	export interface GoogleAppsCardV1ImageCropStyleFormProperties {

		/** The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
		aspectRatio: FormControl<number | null | undefined>,

		/** The crop type. */
		type: FormControl<GoogleAppsCardV1ImageCropStyleType | null | undefined>,
	}
	export function CreateGoogleAppsCardV1ImageCropStyleFormGroup() {
		return new FormGroup<GoogleAppsCardV1ImageCropStyleFormProperties>({
			aspectRatio: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleAppsCardV1ImageCropStyleType | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsCardV1ImageCropStyleType { IMAGE_CROP_TYPE_UNSPECIFIED = 0, SQUARE = 1, CIRCLE = 2, RECTANGLE_CUSTOM = 3, RECTANGLE_4_3 = 4 }

	export enum GoogleAppsCardV1GridItemLayout { GRID_ITEM_LAYOUT_UNSPECIFIED = 0, TEXT_BELOW = 1, TEXT_ABOVE = 2 }

	export enum ActionResponseType { TYPE_UNSPECIFIED = 0, NEW_MESSAGE = 1, UPDATE_MESSAGE = 2, UPDATE_USER_MESSAGE_CARDS = 3, REQUEST_CONFIG = 4, DIALOG = 5, UPDATE_WIDGET = 6 }


	/** The response of the updated widget. Used to provide autocomplete options for a widget. */
	export interface UpdatedWidget {

		/** List of widget autocomplete results. */
		suggestions?: SelectionItems;

		/** The ID of the updated widget. The ID must match the one for the widget that triggered the update request. */
		widget?: string | null;
	}

	/** The response of the updated widget. Used to provide autocomplete options for a widget. */
	export interface UpdatedWidgetFormProperties {

		/** The ID of the updated widget. The ID must match the one for the widget that triggered the update request. */
		widget: FormControl<string | null | undefined>,
	}
	export function CreateUpdatedWidgetFormGroup() {
		return new FormGroup<UpdatedWidgetFormProperties>({
			widget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of widget autocomplete results. */
	export interface SelectionItems {

		/** An array of the SelectionItem objects. */
		items?: Array<GoogleAppsCardV1SelectionItem>;
	}

	/** List of widget autocomplete results. */
	export interface SelectionItemsFormProperties {
	}
	export function CreateSelectionItemsFormGroup() {
		return new FormGroup<SelectionItemsFormProperties>({
		});

	}


	/** Output only. Annotations associated with the plain-text body of the message. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/chat/format-messages). Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ``` */
	export interface Annotation {

		/** Length of the substring in the plain-text message body this annotation corresponds to. */
		length?: number | null;

		/** Annotation metadata for slash commands (/). */
		slashCommand?: SlashCommandMetadata;

		/** Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to. */
		startIndex?: number | null;

		/** The type of this annotation. */
		type?: AnnotationType | null;

		/** Annotation metadata for user mentions (@). */
		userMention?: UserMentionMetadata;
	}

	/** Output only. Annotations associated with the plain-text body of the message. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/chat/format-messages). Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ``` */
	export interface AnnotationFormProperties {

		/** Length of the substring in the plain-text message body this annotation corresponds to. */
		length: FormControl<number | null | undefined>,

		/** Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to. */
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


	/** Annotation metadata for slash commands (/). */
	export interface SlashCommandMetadata {

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		bot?: User;

		/** The command ID of the invoked slash command. */
		commandId?: string | null;

		/** The name of the invoked slash command. */
		commandName?: string | null;

		/** Indicates whether the slash command is for a dialog. */
		triggersDialog?: boolean | null;

		/** The type of slash command. */
		type?: SlashCommandMetadataType | null;
	}

	/** Annotation metadata for slash commands (/). */
	export interface SlashCommandMetadataFormProperties {

		/** The command ID of the invoked slash command. */
		commandId: FormControl<string | null | undefined>,

		/** The name of the invoked slash command. */
		commandName: FormControl<string | null | undefined>,

		/** Indicates whether the slash command is for a dialog. */
		triggersDialog: FormControl<boolean | null | undefined>,

		/** The type of slash command. */
		type: FormControl<SlashCommandMetadataType | null | undefined>,
	}
	export function CreateSlashCommandMetadataFormGroup() {
		return new FormGroup<SlashCommandMetadataFormProperties>({
			commandId: new FormControl<string | null | undefined>(undefined),
			commandName: new FormControl<string | null | undefined>(undefined),
			triggersDialog: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<SlashCommandMetadataType | null | undefined>(undefined),
		});

	}


	/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
	export interface User {

		/** Output only. The user's display name. */
		displayName?: string | null;

		/** Unique identifier of the user's Google Workspace domain. */
		domainId?: string | null;

		/** Output only. When `true`, the user is deleted or their profile is not visible. */
		isAnonymous?: boolean | null;

		/** Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API. */
		name?: string | null;

		/** User type. */
		type?: UserType | null;
	}

	/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
	export interface UserFormProperties {

		/** Output only. The user's display name. */
		displayName: FormControl<string | null | undefined>,

		/** Unique identifier of the user's Google Workspace domain. */
		domainId: FormControl<string | null | undefined>,

		/** Output only. When `true`, the user is deleted or their profile is not visible. */
		isAnonymous: FormControl<boolean | null | undefined>,

		/** Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API. */
		name: FormControl<string | null | undefined>,

		/** User type. */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			domainId: new FormControl<string | null | undefined>(undefined),
			isAnonymous: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export enum UserType { TYPE_UNSPECIFIED = 0, HUMAN = 1, BOT = 2 }

	export enum SlashCommandMetadataType { TYPE_UNSPECIFIED = 0, ADD = 1, INVOKE = 2 }

	export enum AnnotationType { ANNOTATION_TYPE_UNSPECIFIED = 0, USER_MENTION = 1, SLASH_COMMAND = 2 }


	/** Annotation metadata for user mentions (@). */
	export interface UserMentionMetadata {

		/** The type of user mention. */
		type?: UserMentionMetadataType | null;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
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


	/** A GIF image that's specified by a URL. */
	export interface AttachedGif {

		/** Output only. The URL that hosts the GIF image. */
		uri?: string | null;
	}

	/** A GIF image that's specified by a URL. */
	export interface AttachedGifFormProperties {

		/** Output only. The URL that hosts the GIF image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAttachedGifFormGroup() {
		return new FormGroup<AttachedGifFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attachment in Google Chat. */
	export interface Attachment {
		attachmentDataRef?: AttachmentDataRef;

		/** Output only. The original file name for the content, not the full path. */
		contentName?: string | null;

		/** Output only. The content type (MIME type) of the file. */
		contentType?: string | null;

		/** Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content. */
		downloadUri?: string | null;

		/** A reference to the data of a drive attachment. */
		driveDataRef?: DriveDataRef;

		/** Resource name of the attachment, in the form `spaces/messages/attachments/*`. */
		name?: string | null;

		/** Output only. The source of the attachment. */
		source?: AttachmentSource | null;

		/** Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content. */
		thumbnailUri?: string | null;
	}

	/** An attachment in Google Chat. */
	export interface AttachmentFormProperties {

		/** Output only. The original file name for the content, not the full path. */
		contentName: FormControl<string | null | undefined>,

		/** Output only. The content type (MIME type) of the file. */
		contentType: FormControl<string | null | undefined>,

		/** Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content. */
		downloadUri: FormControl<string | null | undefined>,

		/** Resource name of the attachment, in the form `spaces/messages/attachments/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The source of the attachment. */
		source: FormControl<AttachmentSource | null | undefined>,

		/** Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content. */
		thumbnailUri: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			contentName: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			downloadUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<AttachmentSource | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachmentDataRef {

		/** Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments. */
		attachmentUploadToken?: string | null;

		/** The resource name of the attachment data. This field is used with the media API to download the attachment data. */
		resourceName?: string | null;
	}
	export interface AttachmentDataRefFormProperties {

		/** Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments. */
		attachmentUploadToken: FormControl<string | null | undefined>,

		/** The resource name of the attachment data. This field is used with the media API to download the attachment data. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentDataRefFormGroup() {
		return new FormGroup<AttachmentDataRefFormProperties>({
			attachmentUploadToken: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to the data of a drive attachment. */
	export interface DriveDataRef {

		/** The ID for the drive file. Use with the Drive API. */
		driveFileId?: string | null;
	}

	/** A reference to the data of a drive attachment. */
	export interface DriveDataRefFormProperties {

		/** The ID for the drive file. Use with the Drive API. */
		driveFileId: FormControl<string | null | undefined>,
	}
	export function CreateDriveDataRefFormGroup() {
		return new FormGroup<DriveDataRefFormProperties>({
			driveFileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachmentSource { SOURCE_UNSPECIFIED = 0, DRIVE_FILE = 1, UPLOADED_CONTENT = 2 }


	/** A button. Can be a text button or an image button. */
	export interface Button {

		/** An image button with an `onclick` action. */
		imageButton?: ImageButton;

		/** A button with text and `onclick` action. */
		textButton?: TextButton;
	}

	/** A button. Can be a text button or an image button. */
	export interface ButtonFormProperties {
	}
	export function CreateButtonFormGroup() {
		return new FormGroup<ButtonFormProperties>({
		});

	}


	/** An image button with an `onclick` action. */
	export interface ImageButton {

		/** The icon specified by an `enum` that indices to an icon provided by Chat API. */
		icon?: ImageButtonIcon | null;

		/** The icon specified by a URL. */
		iconUrl?: string | null;

		/** The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified. */
		name?: string | null;

		/** An `onclick` action (for example, open a link). */
		onClick?: OnClick;
	}

	/** An image button with an `onclick` action. */
	export interface ImageButtonFormProperties {

		/** The icon specified by an `enum` that indices to an icon provided by Chat API. */
		icon: FormControl<ImageButtonIcon | null | undefined>,

		/** The icon specified by a URL. */
		iconUrl: FormControl<string | null | undefined>,

		/** The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified. */
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


	/** An `onclick` action (for example, open a link). */
	export interface OnClick {

		/** A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form. */
		action?: FormAction;

		/** A link that opens a new window. */
		openLink?: OpenLink;
	}

	/** An `onclick` action (for example, open a link). */
	export interface OnClickFormProperties {
	}
	export function CreateOnClickFormGroup() {
		return new FormGroup<OnClickFormProperties>({
		});

	}


	/** A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form. */
	export interface FormAction {

		/** The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior. */
		actionMethodName?: string | null;

		/** List of action parameters. */
		parameters?: Array<ActionParameter>;
	}

	/** A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form. */
	export interface FormActionFormProperties {

		/** The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior. */
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


	/** A button with text and `onclick` action. */
	export interface TextButton {

		/** An `onclick` action (for example, open a link). */
		onClick?: OnClick;

		/** The text of the button. */
		text?: string | null;
	}

	/** A button with text and `onclick` action. */
	export interface TextButtonFormProperties {

		/** The text of the button. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextButtonFormGroup() {
		return new FormGroup<TextButtonFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A card is a UI element that can contain UI widgets such as text and images. */
	export interface Card {

		/** The actions of this card. */
		cardActions?: Array<CardAction>;
		header?: CardHeader;

		/** Name of the card. */
		name?: string | null;

		/** Sections are separated by a line divider. */
		sections?: Array<Section>;
	}

	/** A card is a UI element that can contain UI widgets such as text and images. */
	export interface CardFormProperties {

		/** Name of the card. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardFormGroup() {
		return new FormGroup<CardFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps. */
	export interface CardAction {

		/** The label used to be displayed in the action menu item. */
		actionLabel?: string | null;

		/** An `onclick` action (for example, open a link). */
		onClick?: OnClick;
	}

	/** A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps. */
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

		/** The image's type (for example, square border or circular border). */
		imageStyle?: CardHeaderImageStyle | null;

		/** The URL of the image in the card header. */
		imageUrl?: string | null;

		/** The subtitle of the card header. */
		subtitle?: string | null;

		/** The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines. */
		title?: string | null;
	}
	export interface CardHeaderFormProperties {

		/** The image's type (for example, square border or circular border). */
		imageStyle: FormControl<CardHeaderImageStyle | null | undefined>,

		/** The URL of the image in the card header. */
		imageUrl: FormControl<string | null | undefined>,

		/** The subtitle of the card header. */
		subtitle: FormControl<string | null | undefined>,

		/** The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines. */
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


	/** A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float). */
	export interface Section {

		/** The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		header?: string | null;

		/** A section must contain at least one widget. */
		widgets?: Array<WidgetMarkup>;
	}

	/** A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float). */
	export interface SectionFormProperties {

		/** The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		header: FormControl<string | null | undefined>,
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
			header: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A widget is a UI element that presents text and images. */
	export interface WidgetMarkup {

		/** A list of buttons. Buttons is also `oneof data` and only one of these fields should be set. */
		buttons?: Array<Button>;

		/** An image that's specified by a URL and can have an `onclick` action. */
		image?: Image;

		/** A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button. */
		keyValue?: KeyValue;

		/** A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		textParagraph?: TextParagraph;
	}

	/** A widget is a UI element that presents text and images. */
	export interface WidgetMarkupFormProperties {
	}
	export function CreateWidgetMarkupFormGroup() {
		return new FormGroup<WidgetMarkupFormProperties>({
		});

	}


	/** An image that's specified by a URL and can have an `onclick` action. */
	export interface Image {

		/** The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image. */
		aspectRatio?: number | null;

		/** The URL of the image. */
		imageUrl?: string | null;

		/** An `onclick` action (for example, open a link). */
		onClick?: OnClick;
	}

	/** An image that's specified by a URL and can have an `onclick` action. */
	export interface ImageFormProperties {

		/** The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image. */
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


	/** A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button. */
	export interface KeyValue {

		/** The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		bottomLabel?: string | null;

		/** A button. Can be a text button or an image button. */
		button?: Button;

		/** The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		content?: string | null;

		/** If the content should be multiline. */
		contentMultiline?: boolean | null;

		/** An enum value that's replaced by the Chat API with the corresponding icon image. */
		icon?: ImageButtonIcon | null;

		/** The icon specified by a URL. */
		iconUrl?: string | null;

		/** An `onclick` action (for example, open a link). */
		onClick?: OnClick;

		/** The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		topLabel?: string | null;
	}

	/** A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button. */
	export interface KeyValueFormProperties {

		/** The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		bottomLabel: FormControl<string | null | undefined>,

		/** The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
		content: FormControl<string | null | undefined>,

		/** If the content should be multiline. */
		contentMultiline: FormControl<boolean | null | undefined>,

		/** An enum value that's replaced by the Chat API with the corresponding icon image. */
		icon: FormControl<ImageButtonIcon | null | undefined>,

		/** The icon specified by a URL. */
		iconUrl: FormControl<string | null | undefined>,

		/** The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
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


	/** A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
	export interface TextParagraph {
		text?: string | null;
	}

	/** A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
	export interface TextParagraphFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextParagraphFormGroup() {
		return new FormGroup<TextParagraphFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A [card](https://developers.google.com/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder) */
	export interface CardWithId {

		/** A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ``` */
		card?: GoogleAppsCardV1Card;

		/** Required if the message contains multiple cards. A unique identifier for a card in a message. */
		cardId?: string | null;
	}

	/** A [card](https://developers.google.com/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder) */
	export interface CardWithIdFormProperties {

		/** Required if the message contains multiple cards. A unique identifier for a card in a message. */
		cardId: FormControl<string | null | undefined>,
	}
	export function CreateCardWithIdFormGroup() {
		return new FormGroup<CardWithIdFormProperties>({
			cardId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs). */
	export interface ChatAppLogEntry {

		/** The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script. */
		deployment?: string | null;

		/** The unencrypted `callback_method` name that was running when the error was encountered. */
		deploymentFunction?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;
	}

	/** JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs). */
	export interface ChatAppLogEntryFormProperties {

		/** The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script. */
		deployment: FormControl<string | null | undefined>,

		/** The unencrypted `callback_method` name that was running when the error was encountered. */
		deploymentFunction: FormControl<string | null | undefined>,
	}
	export function CreateChatAppLogEntryFormGroup() {
		return new FormGroup<ChatAppLogEntryFormProperties>({
			deployment: new FormControl<string | null | undefined>(undefined),
			deploymentFunction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs). */
	export interface CommonEventObject {

		/** A map containing the current values of the widgets in a card. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. Depending on the input data type, a different object represents each input: For single-value widgets, `StringInput`. For multi-value widgets, an array of `StringInput` objects. For a date-time picker, a `DateTimeInput`. For a date-only picker, a `DateInput`. For a time-only picker, a `TimeInput`. Corresponds with the data entered by a user on a card in a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
		formInputs?: {[id: string]: Inputs };

		/** The hostApp enum which indicates the app the add-on is invoked from. Always `CHAT` for Chat apps. */
		hostApp?: CommonEventObjectHostApp | null;

		/** Name of the invoked function associated with the widget. Only set for Chat apps. */
		invokedFunction?: string | null;

		/** Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings. */
		parameters?: {[id: string]: string };

		/** The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps. */
		platform?: CommonEventObjectPlatform | null;

		/** The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG). */
		timeZone?: TimeZone;

		/** The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US". */
		userLocale?: string | null;
	}

	/** Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs). */
	export interface CommonEventObjectFormProperties {

		/** A map containing the current values of the widgets in a card. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. Depending on the input data type, a different object represents each input: For single-value widgets, `StringInput`. For multi-value widgets, an array of `StringInput` objects. For a date-time picker, a `DateTimeInput`. For a date-only picker, a `DateInput`. For a time-only picker, a `TimeInput`. Corresponds with the data entered by a user on a card in a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
		formInputs: FormControl<{[id: string]: Inputs } | null | undefined>,

		/** The hostApp enum which indicates the app the add-on is invoked from. Always `CHAT` for Chat apps. */
		hostApp: FormControl<CommonEventObjectHostApp | null | undefined>,

		/** Name of the invoked function associated with the widget. Only set for Chat apps. */
		invokedFunction: FormControl<string | null | undefined>,

		/** Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps. */
		platform: FormControl<CommonEventObjectPlatform | null | undefined>,

		/** The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US". */
		userLocale: FormControl<string | null | undefined>,
	}
	export function CreateCommonEventObjectFormGroup() {
		return new FormGroup<CommonEventObjectFormProperties>({
			formInputs: new FormControl<{[id: string]: Inputs } | null | undefined>(undefined),
			hostApp: new FormControl<CommonEventObjectHostApp | null | undefined>(undefined),
			invokedFunction: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			platform: new FormControl<CommonEventObjectPlatform | null | undefined>(undefined),
			userLocale: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Types of data that users can enter on cards or dialogs. To learn how to process information from users, see [Read form data input by users on cards](https://developers.google.com/chat/ui/read-form-data). */
	export interface Inputs {

		/** Date input values. */
		dateInput?: DateInput;

		/** Date and time input values. */
		dateTimeInput?: DateTimeInput;

		/** Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented. */
		stringInputs?: StringInputs;

		/** Time input values. */
		timeInput?: TimeInput;
	}

	/** Types of data that users can enter on cards or dialogs. To learn how to process information from users, see [Read form data input by users on cards](https://developers.google.com/chat/ui/read-form-data). */
	export interface InputsFormProperties {
	}
	export function CreateInputsFormGroup() {
		return new FormGroup<InputsFormProperties>({
		});

	}


	/** Date input values. */
	export interface DateInput {

		/** Time since epoch time, in milliseconds. */
		msSinceEpoch?: string | null;
	}

	/** Date input values. */
	export interface DateInputFormProperties {

		/** Time since epoch time, in milliseconds. */
		msSinceEpoch: FormControl<string | null | undefined>,
	}
	export function CreateDateInputFormGroup() {
		return new FormGroup<DateInputFormProperties>({
			msSinceEpoch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Date and time input values. */
	export interface DateTimeInput {

		/** Whether the `datetime` input includes a calendar date. */
		hasDate?: boolean | null;

		/** Whether the `datetime` input includes a timestamp. */
		hasTime?: boolean | null;

		/** Time since epoch time, in milliseconds. */
		msSinceEpoch?: string | null;
	}

	/** Date and time input values. */
	export interface DateTimeInputFormProperties {

		/** Whether the `datetime` input includes a calendar date. */
		hasDate: FormControl<boolean | null | undefined>,

		/** Whether the `datetime` input includes a timestamp. */
		hasTime: FormControl<boolean | null | undefined>,

		/** Time since epoch time, in milliseconds. */
		msSinceEpoch: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeInputFormGroup() {
		return new FormGroup<DateTimeInputFormProperties>({
			hasDate: new FormControl<boolean | null | undefined>(undefined),
			hasTime: new FormControl<boolean | null | undefined>(undefined),
			msSinceEpoch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented. */
	export interface StringInputs {

		/** An array of strings entered by the user. */
		value?: Array<string>;
	}

	/** Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented. */
	export interface StringInputsFormProperties {
	}
	export function CreateStringInputsFormGroup() {
		return new FormGroup<StringInputsFormProperties>({
		});

	}


	/** Time input values. */
	export interface TimeInput {

		/** The hour on a 24-hour clock. */
		hours?: number | null;

		/** The number of minutes past the hour. Valid values are 0 to 59. */
		minutes?: number | null;
	}

	/** Time input values. */
	export interface TimeInputFormProperties {

		/** The hour on a 24-hour clock. */
		hours: FormControl<number | null | undefined>,

		/** The number of minutes past the hour. Valid values are 0 to 59. */
		minutes: FormControl<number | null | undefined>,
	}
	export function CreateTimeInputFormGroup() {
		return new FormGroup<TimeInputFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CommonEventObjectHostApp { UNSPECIFIED_HOST_APP = 0, GMAIL = 1, CALENDAR = 2, DRIVE = 3, DEMO = 4, DOCS = 5, MEET = 6, SHEETS = 7, SLIDES = 8, DRAWINGS = 9, CHAT = 10 }

	export enum CommonEventObjectPlatform { UNKNOWN_PLATFORM = 0, WEB = 1, IOS = 2, ANDROID = 3 }


	/** The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG). */
	export interface TimeZone {

		/** The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto". */
		id?: string | null;

		/** The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC). */
		offset?: number | null;
	}

	/** The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG). */
	export interface TimeZoneFormProperties {

		/** The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto". */
		id: FormControl<string | null | undefined>,

		/** The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC). */
		offset: FormControl<number | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for completing the import process for a space. */
	export interface CompleteImportSpaceRequest {
	}

	/** Request message for completing the import process for a space. */
	export interface CompleteImportSpaceRequestFormProperties {
	}
	export function CreateCompleteImportSpaceRequestFormGroup() {
		return new FormGroup<CompleteImportSpaceRequestFormProperties>({
		});

	}

	export interface CompleteImportSpaceResponse {

		/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
		space?: Space;
	}
	export interface CompleteImportSpaceResponseFormProperties {
	}
	export function CreateCompleteImportSpaceResponseFormGroup() {
		return new FormGroup<CompleteImportSpaceResponseFormProperties>({
		});

	}


	/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
	export interface Space {

		/** Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging. */
		adminInstalled?: boolean | null;

		/** Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`. */
		createTime?: string | null;

		/** The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters. */
		displayName?: string | null;

		/** Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a Google Account. By default, the space permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview). Import mode spaces must only permit members from the same Google Workspace organization. For existing spaces, this field is output only. */
		externalUserAllowed?: boolean | null;

		/** Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. */
		importMode?: boolean | null;

		/** Resource name of the space. Format: `spaces/{space}` */
		name?: string | null;

		/** Optional. Whether the space is a DM between a Chat app and a single human. */
		singleUserBotDm?: boolean | null;

		/** Details about the space including description and rules. */
		spaceDetails?: SpaceDetails;

		/** The message history state for messages and threads in this space. */
		spaceHistoryState?: SpaceSpaceHistoryState | null;

		/** Output only. The threading state in the Chat space. */
		spaceThreadingState?: SpaceSpaceThreadingState | null;

		/** The type of space. Required when creating a space or updating the space type of a space. Output only for other usage. */
		spaceType?: SpaceSpaceType | null;

		/** Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space. */
		threaded?: boolean | null;

		/** Output only. Deprecated: Use `space_type` instead. The type of a space. */
		type?: SpaceType | null;
	}

	/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
	export interface SpaceFormProperties {

		/** Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging. */
		adminInstalled: FormControl<boolean | null | undefined>,

		/** Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`. */
		createTime: FormControl<string | null | undefined>,

		/** The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a Google Account. By default, the space permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview). Import mode spaces must only permit members from the same Google Workspace organization. For existing spaces, this field is output only. */
		externalUserAllowed: FormControl<boolean | null | undefined>,

		/** Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. */
		importMode: FormControl<boolean | null | undefined>,

		/** Resource name of the space. Format: `spaces/{space}` */
		name: FormControl<string | null | undefined>,

		/** Optional. Whether the space is a DM between a Chat app and a single human. */
		singleUserBotDm: FormControl<boolean | null | undefined>,

		/** The message history state for messages and threads in this space. */
		spaceHistoryState: FormControl<SpaceSpaceHistoryState | null | undefined>,

		/** Output only. The threading state in the Chat space. */
		spaceThreadingState: FormControl<SpaceSpaceThreadingState | null | undefined>,

		/** The type of space. Required when creating a space or updating the space type of a space. Output only for other usage. */
		spaceType: FormControl<SpaceSpaceType | null | undefined>,

		/** Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space. */
		threaded: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `space_type` instead. The type of a space. */
		type: FormControl<SpaceType | null | undefined>,
	}
	export function CreateSpaceFormGroup() {
		return new FormGroup<SpaceFormProperties>({
			adminInstalled: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			externalUserAllowed: new FormControl<boolean | null | undefined>(undefined),
			importMode: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			singleUserBotDm: new FormControl<boolean | null | undefined>(undefined),
			spaceHistoryState: new FormControl<SpaceSpaceHistoryState | null | undefined>(undefined),
			spaceThreadingState: new FormControl<SpaceSpaceThreadingState | null | undefined>(undefined),
			spaceType: new FormControl<SpaceSpaceType | null | undefined>(undefined),
			threaded: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<SpaceType | null | undefined>(undefined),
		});

	}


	/** Details about the space including description and rules. */
	export interface SpaceDetails {

		/** Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters. */
		description?: string | null;

		/** Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters. */
		guidelines?: string | null;
	}

	/** Details about the space including description and rules. */
	export interface SpaceDetailsFormProperties {

		/** Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters. */
		guidelines: FormControl<string | null | undefined>,
	}
	export function CreateSpaceDetailsFormGroup() {
		return new FormGroup<SpaceDetailsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			guidelines: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SpaceSpaceHistoryState { HISTORY_STATE_UNSPECIFIED = 0, HISTORY_OFF = 1, HISTORY_ON = 2 }

	export enum SpaceSpaceThreadingState { SPACE_THREADING_STATE_UNSPECIFIED = 0, THREADED_MESSAGES = 1, GROUPED_MESSAGES = 2, UNTHREADED_MESSAGES = 3 }

	export enum SpaceSpaceType { SPACE_TYPE_UNSPECIFIED = 0, SPACE = 1, GROUP_CHAT = 2, DIRECT_MESSAGE = 3 }

	export enum SpaceType { TYPE_UNSPECIFIED = 0, ROOM = 1, DM = 2 }


	/** Represents a custom emoji. */
	export interface CustomEmoji {

		/** Unique key for the custom emoji resource. */
		uid?: string | null;
	}

	/** Represents a custom emoji. */
	export interface CustomEmojiFormProperties {

		/** Unique key for the custom emoji resource. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCustomEmojiFormGroup() {
		return new FormGroup<CustomEmojiFormProperties>({
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a deleted message. A message is deleted when `delete_time` is set. */
	export interface DeletionMetadata {

		/** Indicates who deleted the message. */
		deletionType?: DeletionMetadataDeletionType | null;
	}

	/** Information about a deleted message. A message is deleted when `delete_time` is set. */
	export interface DeletionMetadataFormProperties {

		/** Indicates who deleted the message. */
		deletionType: FormControl<DeletionMetadataDeletionType | null | undefined>,
	}
	export function CreateDeletionMetadataFormGroup() {
		return new FormGroup<DeletionMetadataFormProperties>({
			deletionType: new FormControl<DeletionMetadataDeletionType | null | undefined>(undefined),
		});

	}

	export enum DeletionMetadataDeletionType { DELETION_TYPE_UNSPECIFIED = 0, CREATOR = 1, SPACE_OWNER = 2, ADMIN = 3, APP_MESSAGE_EXPIRY = 4, CREATOR_VIA_APP = 5, SPACE_OWNER_VIA_APP = 6 }


	/** A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events). */
	export interface DeprecatedEvent {

		/** A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form. */
		action?: FormAction;

		/** Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs). */
		common?: CommonEventObject;

		/** The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/chat/how-tos/connect-web-services-tools). */
		configCompleteRedirectUrl?: string | null;

		/** The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) interaction event received. */
		dialogEventType?: DeprecatedEventDialogEventType | null;

		/** The timestamp indicating when the interaction event occurred. */
		eventTime?: string | null;

		/** For `CARD_CLICKED` interaction events, whether the user interacted with a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
		isDialogEvent?: boolean | null;

		/** A message in a Google Chat space. */
		message?: Message;

		/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
		space?: Space;

		/** The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information. */
		threadKey?: string | null;

		/** A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat). */
		token?: string | null;

		/** The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events). */
		type?: DeprecatedEventType | null;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		user?: User;
	}

	/** A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events). */
	export interface DeprecatedEventFormProperties {

		/** The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/chat/how-tos/connect-web-services-tools). */
		configCompleteRedirectUrl: FormControl<string | null | undefined>,

		/** The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) interaction event received. */
		dialogEventType: FormControl<DeprecatedEventDialogEventType | null | undefined>,

		/** The timestamp indicating when the interaction event occurred. */
		eventTime: FormControl<string | null | undefined>,

		/** For `CARD_CLICKED` interaction events, whether the user interacted with a [dialog](https://developers.google.com/chat/how-tos/dialogs). */
		isDialogEvent: FormControl<boolean | null | undefined>,

		/** The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information. */
		threadKey: FormControl<string | null | undefined>,

		/** A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat). */
		token: FormControl<string | null | undefined>,

		/** The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events). */
		type: FormControl<DeprecatedEventType | null | undefined>,
	}
	export function CreateDeprecatedEventFormGroup() {
		return new FormGroup<DeprecatedEventFormProperties>({
			configCompleteRedirectUrl: new FormControl<string | null | undefined>(undefined),
			dialogEventType: new FormControl<DeprecatedEventDialogEventType | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			isDialogEvent: new FormControl<boolean | null | undefined>(undefined),
			threadKey: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeprecatedEventType | null | undefined>(undefined),
		});

	}

	export enum DeprecatedEventDialogEventType { TYPE_UNSPECIFIED = 0, REQUEST_DIALOG = 1, SUBMIT_DIALOG = 2, CANCEL_DIALOG = 3 }


	/** A message in a Google Chat space. */
	export interface Message {

		/** Parameters that a Chat app can use to configure how its response is posted. */
		actionResponse?: ActionResponse;

		/** Output only. Annotations associated with the `text` in this message. */
		annotations?: Array<Annotation>;

		/** Output only. Plain-text body of the message with all Chat app mentions stripped out. */
		argumentText?: string | null;

		/** Output only. GIF images that are attached to the message. */
		attachedGifs?: Array<AttachedGif>;

		/** User-uploaded attachment. */
		attachment?: Array<Attachment>;

		/** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB. */
		cards?: Array<Card>;

		/** An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder) */
		cardsV2?: Array<CardWithId>;

		/** A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. Assigning a custom name lets a Chat app recall the message without saving the message `name` from the [response body](/chat/api/reference/rest/v1/spaces.messages/get#response-body) returned when creating the message. Assigning a custom name doesn't replace the generated `name` field, the message's resource name. Instead, it sets the custom name as the `clientAssignedMessageId` field, which you can reference while processing later operations, like updating or deleting the message. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). */
		clientAssignedMessageId?: string | null;

		/** Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time. */
		createTime?: string | null;

		/** Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty. */
		deleteTime?: string | null;

		/** Information about a deleted message. A message is deleted when `delete_time` is set. */
		deletionMetadata?: DeletionMetadata;

		/** Output only. The list of emoji reaction summaries on the message. */
		emojiReactionSummaries?: Array<EmojiReactionSummary>;

		/** A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications. */
		fallbackText?: string | null;

		/** Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/chat/format-messages) for bold, italic, strikethrough, monospace, and monospace block. * [User mentions](https://developers.google.com/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url}|{rendered_text}>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/chat/format-messages#view_text_formatting_sent_in_a_message) */
		formattedText?: string | null;

		/** Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty. */
		lastUpdateTime?: string | null;

		/** A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links). */
		matchedUrl?: MatchedUrl;

		/** Resource name in the form `spaces/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB` */
		name?: string | null;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		privateMessageViewer?: User;

		/** Information about a quoted message. */
		quotedMessageMetadata?: QuotedMessageMetadata;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		sender?: User;

		/** A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat. */
		slashCommand?: SlashCommand;

		/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
		space?: Space;

		/** Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages). */
		text?: string | null;

		/** A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found. */
		thread?: Thread;

		/** Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`. */
		threadReply?: boolean | null;
	}

	/** A message in a Google Chat space. */
	export interface MessageFormProperties {

		/** Output only. Plain-text body of the message with all Chat app mentions stripped out. */
		argumentText: FormControl<string | null | undefined>,

		/** A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. Assigning a custom name lets a Chat app recall the message without saving the message `name` from the [response body](/chat/api/reference/rest/v1/spaces.messages/get#response-body) returned when creating the message. Assigning a custom name doesn't replace the generated `name` field, the message's resource name. Instead, it sets the custom name as the `clientAssignedMessageId` field, which you can reference while processing later operations, like updating or deleting the message. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). */
		clientAssignedMessageId: FormControl<string | null | undefined>,

		/** Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty. */
		deleteTime: FormControl<string | null | undefined>,

		/** A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications. */
		fallbackText: FormControl<string | null | undefined>,

		/** Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/chat/format-messages) for bold, italic, strikethrough, monospace, and monospace block. * [User mentions](https://developers.google.com/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url}|{rendered_text}>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/chat/format-messages#view_text_formatting_sent_in_a_message) */
		formattedText: FormControl<string | null | undefined>,

		/** Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Resource name in the form `spaces/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB` */
		name: FormControl<string | null | undefined>,

		/** Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages). */
		text: FormControl<string | null | undefined>,

		/** Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`. */
		threadReply: FormControl<boolean | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			argumentText: new FormControl<string | null | undefined>(undefined),
			clientAssignedMessageId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			fallbackText: new FormControl<string | null | undefined>(undefined),
			formattedText: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			threadReply: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The number of people who reacted to a message with a specific emoji. */
	export interface EmojiReactionSummary {

		/** An emoji that is used as a reaction to a message. */
		emoji?: Emoji;

		/** The total number of reactions using the associated emoji. */
		reactionCount?: number | null;
	}

	/** The number of people who reacted to a message with a specific emoji. */
	export interface EmojiReactionSummaryFormProperties {

		/** The total number of reactions using the associated emoji. */
		reactionCount: FormControl<number | null | undefined>,
	}
	export function CreateEmojiReactionSummaryFormGroup() {
		return new FormGroup<EmojiReactionSummaryFormProperties>({
			reactionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An emoji that is used as a reaction to a message. */
	export interface Emoji {

		/** Represents a custom emoji. */
		customEmoji?: CustomEmoji;

		/** A basic emoji represented by a unicode string. */
		unicode?: string | null;
	}

	/** An emoji that is used as a reaction to a message. */
	export interface EmojiFormProperties {

		/** A basic emoji represented by a unicode string. */
		unicode: FormControl<string | null | undefined>,
	}
	export function CreateEmojiFormGroup() {
		return new FormGroup<EmojiFormProperties>({
			unicode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links). */
	export interface MatchedUrl {

		/** Output only. The URL that was matched. */
		url?: string | null;
	}

	/** A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links). */
	export interface MatchedUrlFormProperties {

		/** Output only. The URL that was matched. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMatchedUrlFormGroup() {
		return new FormGroup<MatchedUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a quoted message. */
	export interface QuotedMessageMetadata {

		/** Output only. The timestamp when the quoted message was created or when the quoted message was last updated. */
		lastUpdateTime?: string | null;

		/** Output only. Resource name of the quoted message. Format: `spaces/{space}/messages/{message}` */
		name?: string | null;
	}

	/** Information about a quoted message. */
	export interface QuotedMessageMetadataFormProperties {

		/** Output only. The timestamp when the quoted message was created or when the quoted message was last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Output only. Resource name of the quoted message. Format: `spaces/{space}/messages/{message}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQuotedMessageMetadataFormGroup() {
		return new FormGroup<QuotedMessageMetadataFormProperties>({
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat. */
	export interface SlashCommand {

		/** The ID of the slash command invoked. */
		commandId?: string | null;
	}

	/** A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat. */
	export interface SlashCommandFormProperties {

		/** The ID of the slash command invoked. */
		commandId: FormControl<string | null | undefined>,
	}
	export function CreateSlashCommandFormGroup() {
		return new FormGroup<SlashCommandFormProperties>({
			commandId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found. */
	export interface Thread {

		/** Output only. Resource name of the thread. Example: `spaces/{space}/threads/{thread}` */
		name?: string | null;

		/** Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead. */
		threadKey?: string | null;
	}

	/** A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found. */
	export interface ThreadFormProperties {

		/** Output only. Resource name of the thread. Example: `spaces/{space}/threads/{thread}` */
		name: FormControl<string | null | undefined>,

		/** Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead. */
		threadKey: FormControl<string | null | undefined>,
	}
	export function CreateThreadFormGroup() {
		return new FormGroup<ThreadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			threadKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeprecatedEventType { UNSPECIFIED = 0, MESSAGE = 1, ADDED_TO_SPACE = 2, REMOVED_FROM_SPACE = 3, CARD_CLICKED = 4, WIDGET_UPDATED = 5 }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A Google Group in Google Chat. */
	export interface Group {

		/** Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group} */
		name?: string | null;
	}

	/** A Google Group in Google Chat. */
	export interface GroupFormProperties {

		/** Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembershipsResponse {

		/** Unordered list. List of memberships in the requested (or first) page. */
		memberships?: Array<Membership>;

		/** A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}
	export interface ListMembershipsResponseFormProperties {

		/** A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipsResponseFormGroup() {
		return new FormGroup<ListMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space. */
	export interface Membership {

		/** Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces. */
		createTime?: string | null;

		/** Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces. */
		deleteTime?: string | null;

		/** A Google Group in Google Chat. */
		groupMember?: Group;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		member?: User;

		/** Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}` */
		name?: string | null;

		/** Optional. User's role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in `UpdateMembership`. */
		role?: MembershipRole | null;

		/** Output only. State of the membership. */
		state?: MembershipState | null;
	}

	/** Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space. */
	export interface MembershipFormProperties {

		/** Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces. */
		deleteTime: FormControl<string | null | undefined>,

		/** Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}` */
		name: FormControl<string | null | undefined>,

		/** Optional. User's role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in `UpdateMembership`. */
		role: FormControl<MembershipRole | null | undefined>,

		/** Output only. State of the membership. */
		state: FormControl<MembershipState | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<MembershipRole | null | undefined>(undefined),
			state: new FormControl<MembershipState | null | undefined>(undefined),
		});

	}

	export enum MembershipRole { MEMBERSHIP_ROLE_UNSPECIFIED = 0, ROLE_MEMBER = 1, ROLE_MANAGER = 2 }

	export enum MembershipState { MEMBERSHIP_STATE_UNSPECIFIED = 0, JOINED = 1, INVITED = 2, NOT_A_MEMBER = 3 }

	export interface ListMessagesResponse {

		/** List of messages. */
		messages?: Array<Message>;

		/** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken?: string | null;
	}
	export interface ListMessagesResponseFormProperties {

		/** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMessagesResponseFormGroup() {
		return new FormGroup<ListMessagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReactionsResponse {

		/** Continuation token to retrieve the next page of results. It's empty for the last page of results. */
		nextPageToken?: string | null;

		/** List of reactions in the requested (or first) page. */
		reactions?: Array<Reaction>;
	}
	export interface ListReactionsResponseFormProperties {

		/** Continuation token to retrieve the next page of results. It's empty for the last page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReactionsResponseFormGroup() {
		return new FormGroup<ListReactionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reaction to a message. */
	export interface Reaction {

		/** An emoji that is used as a reaction to a message. */
		emoji?: Emoji;

		/** The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}` */
		name?: string | null;

		/** A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`. */
		user?: User;
	}

	/** A reaction to a message. */
	export interface ReactionFormProperties {

		/** The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReactionFormGroup() {
		return new FormGroup<ReactionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpacesResponse {

		/** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of spaces in the requested (or first) page. */
		spaces?: Array<Space>;
	}
	export interface ListSpacesResponseFormProperties {

		/** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpacesResponseFormGroup() {
		return new FormGroup<ListSpacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Media resource. */
	export interface Media {

		/** Name of the media resource. */
		resourceName?: string | null;
	}

	/** Media resource. */
	export interface MediaFormProperties {

		/** Name of the media resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetUpSpaceRequest {

		/** Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The `Membership.member` field must contain a `user` with `name` populated (format: `users/{user}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the `user.name` can be `users/example@gmail.com`." To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user}`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`). */
		memberships?: Array<Membership>;

		/** Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. */
		requestId?: string | null;

		/** A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app. */
		space?: Space;
	}
	export interface SetUpSpaceRequestFormProperties {

		/** Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateSetUpSpaceRequestFormGroup() {
		return new FormGroup<SetUpSpaceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadAttachmentRequest {

		/** Required. The filename of the attachment, including the file extension. */
		filename?: string | null;
	}
	export interface UploadAttachmentRequestFormProperties {

		/** Required. The filename of the attachment, including the file extension. */
		filename: FormControl<string | null | undefined>,
	}
	export function CreateUploadAttachmentRequestFormGroup() {
		return new FormGroup<UploadAttachmentRequestFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadAttachmentResponse {
		attachmentDataRef?: AttachmentDataRef;
	}
	export interface UploadAttachmentResponseFormProperties {
	}
	export function CreateUploadAttachmentResponseFormGroup() {
		return new FormGroup<UploadAttachmentResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.
		 * Get v1/media/{resourceName}
		 * @param {string} resourceName Name of the media that is being downloaded. See ReadRequest.resource_name.
		 * @return {Media} Successful response
		 */
		Chat_media_download(resourceName: string): Observable<Media> {
			return this.http.get<Media>(this.baseUri + 'v1/media/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), {});
		}

		/**
		 * Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/chat/api/guides/v1/spaces/list). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
		 * Get v1/spaces
		 * @param {string} filter Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
		 * @param {number} pageSize Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.
		 * @param {string} pageToken Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
		 * @return {ListSpacesResponse} Successful response
		 */
		Chat_spaces_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSpacesResponse> {
			return this.http.get<ListSpacesResponse>(this.baseUri + 'v1/spaces?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a named space. Spaces grouped by topics aren't supported. For an example, see [Create a space](https://developers.google.com/chat/api/guides/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Post v1/spaces
		 * @param {string} requestId Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
		 * @return {Space} Successful response
		 */
		Chat_spaces_create(requestId: string | null | undefined, requestBody: Space): Observable<Space> {
			return this.http.post<Space>(this.baseUri + 'v1/spaces?requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [user authentication](https://developers.google.com/chat/api/guides/auth/users), returns the direct message space between the specified user and the authenticated user. With [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts), returns the direct message space between the specified user and the calling Chat app. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users) or [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
		 * Get v1/spaces:findDirectMessage
		 * @param {string} name Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/chat/api/guides/auth/users), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.
		 * @return {Space} Successful response
		 */
		Chat_spaces_findDirectMessage(name: string | null | undefined): Observable<Space> {
			return this.http.get<Space>(this.baseUri + 'v1/spaces:findDirectMessage?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space](https://developers.google.com/chat/api/guides/v1/spaces/set-up). To specify the human members to add, add memberships with the appropriate `member.name` in the `SetUpSpaceRequest`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. For a space or group chat, if the caller blocks or is blocked by some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [create a membership](https://developers.google.com/chat/api/guides/v1/members/create). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Post v1/spaces:setup
		 * @return {Space} Successful response
		 */
		Chat_spaces_setup(requestBody: SetUpSpaceRequest): Observable<Space> {
			return this.http.post<Space>(this.baseUri + 'v1/spaces:setup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/chat/api/guides/v1/reactions/delete). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`
		 * @param {boolean} force When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/chat/api/guides/auth/users). Has no effect when [authenticating as a Chat app] (https://developers.google.com/chat/api/guides/auth/service-accounts).
		 * @return {Empty} Successful response
		 */
		Chat_spaces_messages_reactions_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). For an example, see [Get a message attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/get). Requires [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the attachment, in the form `spaces/messages/attachments/*`.
		 * @return {Attachment} Successful response
		 */
		Chat_spaces_messages_attachments_get(name: string): Observable<Attachment> {
			return this.http.get<Attachment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.
		 * Patch v1/{name}
		 * @param {string} name Resource name in the form `spaces/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
		 * @param {boolean} allowMissing Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.
		 * @param {string} updateMask Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)
		 * @return {Message} Successful response
		 */
		Chat_spaces_messages_patch(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, requestBody: Message): Observable<Message> {
			return this.http.patch<Message>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.
		 * Put v1/{name}
		 * @param {string} name Resource name in the form `spaces/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
		 * @param {boolean} allowMissing Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.
		 * @param {string} updateMask Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)
		 * @return {Message} Successful response
		 */
		Chat_spaces_messages_update(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, requestBody: Message): Observable<Message> {
			return this.http.put<Message>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes the [import process](https://developers.google.com/chat/api/guides/import-data) for the specified space and makes it visible to users. Requires app authentication and domain-wide delegation. For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/chat/api/guides/authorize-import).
		 * Post v1/{name}:completeImport
		 * @param {string} name Required. Resource name of the import mode space. Format: `spaces/{space}`
		 * @return {CompleteImportSpaceResponse} Successful response
		 */
		Chat_spaces_completeImport(name: string, requestBody: CompleteImportSpaceRequest): Observable<CompleteImportSpaceResponse> {
			return this.http.post<CompleteImportSpaceResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':completeImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists memberships in a space. For an example, see [List memberships](https://developers.google.com/chat/api/guides/v1/members/list). Listing memberships with [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/chat/api/guides/auth/users) lists memberships in spaces that the authenticated user has access to. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Get v1/{parent}/members
		 * @param {string} parent Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}
		 * @param {string} filter Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
		 * @param {number} pageSize Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.
		 * @param {string} pageToken Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
		 * @param {boolean} showGroups Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.
		 * @param {boolean} showInvited Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * @return {ListMembershipsResponse} Successful response
		 */
		Chat_spaces_members_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showGroups: boolean | null | undefined, showInvited: boolean | null | undefined): Observable<ListMembershipsResponse> {
			return this.http.get<ListMembershipsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/members&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showGroups=' + showGroups + '&showInvited=' + showInvited, {});
		}

		/**
		 * Creates a human membership or app membership for the calling app. Creating memberships for other apps isn't supported. For an example, see [ Create a membership](https://developers.google.com/chat/api/guides/v1/members/create). When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). To specify the member to add, set the `membership.member.name` in the `CreateMembershipRequest`: - To add the calling app to a space or a direct message between two human users, use `users/app`. Unable to add other apps to the space. - To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.
		 * Post v1/{parent}/members
		 * @param {string} parent Required. The resource name of the space for which to create the membership. Format: spaces/{space}
		 * @return {Membership} Successful response
		 */
		Chat_spaces_members_create(parent: string, requestBody: Membership): Observable<Membership> {
			return this.http.post<Membership>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. For an example, see [List messages](/chat/api/guides/v1/messages/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Get v1/{parent}/messages
		 * @param {string} parent Required. The resource name of the space to list messages from. Format: `spaces/{space}`
		 * @param {string} filter A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > "2012-04-21T11:30:00-04:00" create_time > "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
		 * @param {string} orderBy Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`.
		 * @param {number} pageSize The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.
		 * @param {string} pageToken Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
		 * @param {boolean} showDeleted Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.
		 * @return {ListMessagesResponse} Successful response
		 */
		Chat_spaces_messages_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListMessagesResponse> {
			return this.http.get<ListMessagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a message in a Google Chat space. For an example, see [Create a message](https://developers.google.com/chat/api/guides/v1/messages/create). Calling this method requires [authentication](https://developers.google.com/chat/api/guides/auth) and supports the following authentication types: - For text messages, user authentication or app authentication are supported. - For card messages, only app authentication is supported. (Only Chat apps can create card messages.)
		 * Post v1/{parent}/messages
		 * @param {string} parent Required. The resource name of the space in which to create a message. Format: `spaces/{space}`
		 * @param {string} messageId Optional. A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. Assigning a custom name lets a a Chat app recall the message without saving the message `name` from the [response body](/chat/api/reference/rest/v1/spaces.messages/get#response-body) returned when creating the message. Assigning a custom name doesn't replace the generated `name` field, the message's resource name. Instead, it sets the custom name as the `clientAssignedMessageId` field, which you can reference while processing later operations, like updating or deleting the message. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).
		 * @param {Chat_spaces_messages_createMessageReplyOption} messageReplyOption Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
		 * @param {string} requestId Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
		 * @param {string} threadKey Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).
		 * @return {Message} Successful response
		 */
		Chat_spaces_messages_create(parent: string, messageId: string | null | undefined, messageReplyOption: Chat_spaces_messages_createMessageReplyOption | null | undefined, requestId: string | null | undefined, threadKey: string | null | undefined, requestBody: Message): Observable<Message> {
			return this.http.post<Message>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/messages&messageId=' + (messageId == null ? '' : encodeURIComponent(messageId)) + '&messageReplyOption=' + messageReplyOption + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&threadKey=' + (threadKey == null ? '' : encodeURIComponent(threadKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists reactions to a message. For an example, see [List reactions](https://developers.google.com/chat/api/guides/v1/reactions/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).
		 * Get v1/{parent}/reactions
		 * @param {string} parent Required. The message users reacted to. Format: `spaces/{space}/messages/{message}`
		 * @param {string} filter Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" AND user.name = "users/{user}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}") AND user.name = "users/{user}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" AND user.name = "users/{user}" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
		 * @param {number} pageSize Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
		 * @param {string} pageToken Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
		 * @return {ListReactionsResponse} Successful response
		 */
		Chat_spaces_messages_reactions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReactionsResponse> {
			return this.http.get<ListReactionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reactions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a reaction and adds it to a message. For an example, see [Create a reaction](https://developers.google.com/chat/api/guides/v1/reactions/create). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). Only unicode emoji are supported.
		 * Post v1/{parent}/reactions
		 * @param {string} parent Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}`
		 * @return {Reaction} Successful response
		 */
		Chat_spaces_messages_reactions_create(parent: string, requestBody: Reaction): Observable<Reaction> {
			return this.http.post<Reaction>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Chat_spaces_messages_createMessageReplyOption { MESSAGE_REPLY_OPTION_UNSPECIFIED = 0, REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD = 1, REPLY_MESSAGE_OR_FAIL = 2 }

}

