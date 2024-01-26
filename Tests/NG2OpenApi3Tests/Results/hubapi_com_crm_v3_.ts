import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActionConfirmationBody {

		/** Required */
		cancelButtonLabel: string;

		/** Required */
		confirmButtonLabel: string;

		/** Required */
		prompt: string;
	}
	export interface ActionConfirmationBodyFormProperties {

		/** Required */
		cancelButtonLabel: FormControl<string | null | undefined>,

		/** Required */
		confirmButtonLabel: FormControl<string | null | undefined>,

		/** Required */
		prompt: FormControl<string | null | undefined>,
	}
	export function CreateActionConfirmationBodyFormGroup() {
		return new FormGroup<ActionConfirmationBodyFormProperties>({
			cancelButtonLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			confirmButtonLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prompt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionHookActionBody {
		confirmation?: ActionConfirmationBody;

		/** Required */
		httpMethod: ActionHookActionBodyHttpMethod;
		label?: string | null;

		/** Required */
		propertyNamesIncluded: Array<string>;

		/** Required */
		type: ActionHookActionBodyType;

		/** Required */
		url: string;
	}
	export interface ActionHookActionBodyFormProperties {

		/** Required */
		httpMethod: FormControl<ActionHookActionBodyHttpMethod | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ActionHookActionBodyType | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActionHookActionBodyFormGroup() {
		return new FormGroup<ActionHookActionBodyFormProperties>({
			httpMethod: new FormControl<ActionHookActionBodyHttpMethod | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActionHookActionBodyType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionHookActionBodyHttpMethod { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export enum ActionHookActionBodyType { ACTION_HOOK = 0 }


	/** Configuration for custom user actions on cards. */
	export interface CardActions {

		/**
		 * A list of URL prefixes that will be accepted for card action URLs. If your data fetch response includes an action URL that doesn't begin with one of these values, it will result in an error and the card will not be displayed.
		 * Required
		 */
		baseUrls: Array<string>;
	}

	/** Configuration for custom user actions on cards. */
	export interface CardActionsFormProperties {
	}
	export function CreateCardActionsFormGroup() {
		return new FormGroup<CardActionsFormProperties>({
		});

	}


	/** State of card definition to be created */
	export interface CardCreateRequest {

		/**
		 * Configuration for custom user actions on cards.
		 * Required
		 */
		actions: CardActions;

		/**
		 * Configuration for displayed info on a card
		 * Required
		 */
		display: CardDisplayBody;

		/**
		 * Configuration for this card's data fetch request.
		 * Required
		 */
		fetch: CardFetchBody;

		/**
		 * The top-level title for this card. Displayed to users in the CRM UI.
		 * Required
		 */
		title: string;
	}

	/** State of card definition to be created */
	export interface CardCreateRequestFormProperties {

		/**
		 * The top-level title for this card. Displayed to users in the CRM UI.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCardCreateRequestFormGroup() {
		return new FormGroup<CardCreateRequestFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration for displayed info on a card */
	export interface CardDisplayBody {

		/**
		 * Card display properties. These will will be rendered as "label : value" pairs in the card UI. See the [example card](#) in the overview docs for more details.
		 * Required
		 */
		properties: Array<CardDisplayProperty>;
	}

	/** Configuration for displayed info on a card */
	export interface CardDisplayBodyFormProperties {
	}
	export function CreateCardDisplayBodyFormGroup() {
		return new FormGroup<CardDisplayBodyFormProperties>({
		});

	}


	/** Definition for a card display property. */
	export interface CardDisplayProperty {

		/**
		 * Type of data represented by this property.
		 * Required
		 */
		dataType: CardDisplayPropertyDataType;

		/**
		 * The label for this property as you'd like it displayed to users.
		 * Required
		 */
		label: string;

		/**
		 * An internal identifier for this property. This value must be unique TODO.
		 * Required
		 */
		name: string;

		/**
		 * An array of available options that can be displayed. Only used in when `dataType` is `STATUS`.
		 * Required
		 */
		options: Array<DisplayOption>;
	}

	/** Definition for a card display property. */
	export interface CardDisplayPropertyFormProperties {

		/**
		 * Type of data represented by this property.
		 * Required
		 */
		dataType: FormControl<CardDisplayPropertyDataType | null | undefined>,

		/**
		 * The label for this property as you'd like it displayed to users.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * An internal identifier for this property. This value must be unique TODO.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCardDisplayPropertyFormGroup() {
		return new FormGroup<CardDisplayPropertyFormProperties>({
			dataType: new FormControl<CardDisplayPropertyDataType | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CardDisplayPropertyDataType { BOOLEAN = 0, CURRENCY = 1, DATE = 2, DATETIME = 3, EMAIL = 4, LINK = 5, NUMERIC = 6, STRING = 7, STATUS = 8 }


	/** Option definition for STATUS dataTypes. */
	export interface DisplayOption {

		/**
		 * The text that will be displayed to users for this option.
		 * Required
		 */
		label: string;

		/**
		 * JSON-friendly unique name for option.
		 * Required
		 */
		name: string;

		/**
		 * The type of status.
		 * Required
		 */
		type: DisplayOptionType;
	}

	/** Option definition for STATUS dataTypes. */
	export interface DisplayOptionFormProperties {

		/**
		 * The text that will be displayed to users for this option.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * JSON-friendly unique name for option.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of status.
		 * Required
		 */
		type: FormControl<DisplayOptionType | null | undefined>,
	}
	export function CreateDisplayOptionFormGroup() {
		return new FormGroup<DisplayOptionFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DisplayOptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DisplayOptionType { DEFAULT = 0, SUCCESS = 1, WARNING = 2, DANGER = 3, INFO = 4 }


	/** Configuration for this card's data fetch request. */
	export interface CardFetchBody {

		/**
		 * An array of CRM object types where this card should be displayed. HubSpot will call your data fetch URL whenever a user visits a record page of the types defined here.
		 * Required
		 */
		objectTypes: Array<CardObjectTypeBody>;

		/**
		 * URL to a service endpoints that will respond with card details. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.
		 * Required
		 */
		targetUrl: string;
	}

	/** Configuration for this card's data fetch request. */
	export interface CardFetchBodyFormProperties {

		/**
		 * URL to a service endpoints that will respond with card details. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.
		 * Required
		 */
		targetUrl: FormControl<string | null | undefined>,
	}
	export function CreateCardFetchBodyFormGroup() {
		return new FormGroup<CardFetchBodyFormProperties>({
			targetUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardObjectTypeBody {

		/**
		 * A CRM object type where this card should be displayed.
		 * Required
		 */
		name: CardObjectTypeBodyName;

		/**
		 * An array of properties that should be sent to this card's target URL when the data fetch request is made. Must be valid properties for the corresponding CRM object type.
		 * Required
		 */
		propertiesToSend: Array<string>;
	}
	export interface CardObjectTypeBodyFormProperties {

		/**
		 * A CRM object type where this card should be displayed.
		 * Required
		 */
		name: FormControl<CardObjectTypeBodyName | null | undefined>,
	}
	export function CreateCardObjectTypeBodyFormGroup() {
		return new FormGroup<CardObjectTypeBodyFormProperties>({
			name: new FormControl<CardObjectTypeBodyName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CardObjectTypeBodyName { contacts = 0, deals = 1, companies = 2, tickets = 3 }


	/** Variant of CardFetchBody with fields as optional for patches */
	export interface CardFetchBodyPatch {

		/**
		 * An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.
		 * Required
		 */
		objectTypes: Array<CardObjectTypeBody>;

		/** URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed. */
		targetUrl?: string | null;
	}

	/** Variant of CardFetchBody with fields as optional for patches */
	export interface CardFetchBodyPatchFormProperties {

		/** URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed. */
		targetUrl: FormControl<string | null | undefined>,
	}
	export function CreateCardFetchBodyPatchFormGroup() {
		return new FormGroup<CardFetchBodyPatchFormProperties>({
			targetUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of card definitions */
	export interface CardListResponse {

		/**
		 * List of card definitions
		 * Required
		 */
		results: Array<CardResponse>;
	}

	/** List of card definitions */
	export interface CardListResponseFormProperties {
	}
	export function CreateCardListResponseFormGroup() {
		return new FormGroup<CardListResponseFormProperties>({
		});

	}


	/** Current state of Card Definition */
	export interface CardResponse {

		/**
		 * Configuration for custom user actions on cards.
		 * Required
		 */
		actions: CardActions;

		/** When this card was created. */
		createdAt?: Date | null;

		/**
		 * Configuration for displayed info on a card
		 * Required
		 */
		display: CardDisplayBody;

		/**
		 * Configuration for this card's data fetch request.
		 * Required
		 */
		fetch: CardFetchBody;

		/**
		 * Generated unique ID for card.
		 * Required
		 */
		id: string;

		/**
		 * Displayed title of this card.
		 * Required
		 */
		title: string;

		/** The last time this card was updated. */
		updatedAt?: Date | null;
	}

	/** Current state of Card Definition */
	export interface CardResponseFormProperties {

		/** When this card was created. */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Generated unique ID for card.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Displayed title of this card.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** The last time this card was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCardResponseFormGroup() {
		return new FormGroup<CardResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Body for a patch with optional fields */
	export interface CardPatchRequest {

		/** Configuration for custom user actions on cards. */
		actions?: CardActions;

		/** Configuration for displayed info on a card */
		display?: CardDisplayBody;

		/** Variant of CardFetchBody with fields as optional for patches */
		fetch?: CardFetchBodyPatch;

		/** The top-level title for this card. Displayed to users in the CRM UI. */
		title?: string | null;
	}

	/** Body for a patch with optional fields */
	export interface CardPatchRequestFormProperties {

		/** The top-level title for this card. Displayed to users in the CRM UI. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCardPatchRequestFormGroup() {
		return new FormGroup<CardPatchRequestFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IFrameActionBody {

		/** Required */
		height: number;
		label?: string | null;

		/** Required */
		propertyNamesIncluded: Array<string>;

		/** Required */
		type: IFrameActionBodyType;

		/** Required */
		url: string;

		/** Required */
		width: number;
	}
	export interface IFrameActionBodyFormProperties {

		/** Required */
		height: FormControl<number | null | undefined>,
		label: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<IFrameActionBodyType | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		width: FormControl<number | null | undefined>,
	}
	export function CreateIFrameActionBodyFormGroup() {
		return new FormGroup<IFrameActionBodyFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IFrameActionBodyType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IFrameActionBodyType { IFRAME = 0 }


	/** The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page. */
	export interface IntegratorCardPayloadResponse {

		/** URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`. */
		allItemsLinkUrl?: string | null;

		/** The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title. */
		cardLabel?: string | null;
		responseVersion?: IntegratorCardPayloadResponseResponseVersion | null;

		/** A list of up to five valid card sub categories. */
		sections?: Array<IntegratorObjectResult>;
		topLevelActions?: TopLevelActions;

		/**
		 * The total number of card properties that will be sent in this response.
		 * Required
		 */
		totalCount: number;
	}

	/** The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page. */
	export interface IntegratorCardPayloadResponseFormProperties {

		/** URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`. */
		allItemsLinkUrl: FormControl<string | null | undefined>,

		/** The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title. */
		cardLabel: FormControl<string | null | undefined>,
		responseVersion: FormControl<IntegratorCardPayloadResponseResponseVersion | null | undefined>,

		/**
		 * The total number of card properties that will be sent in this response.
		 * Required
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateIntegratorCardPayloadResponseFormGroup() {
		return new FormGroup<IntegratorCardPayloadResponseFormProperties>({
			allItemsLinkUrl: new FormControl<string | null | undefined>(undefined),
			cardLabel: new FormControl<string | null | undefined>(undefined),
			responseVersion: new FormControl<IntegratorCardPayloadResponseResponseVersion | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegratorCardPayloadResponseResponseVersion { v1 = 0, v3 = 1 }

	export interface IntegratorObjectResult {

		/** Required */
		actions: Array<string>;

		/** Required */
		id: string;
		linkUrl?: string | null;

		/** Required */
		title: string;

		/** Required */
		tokens: Array<ObjectToken>;
	}
	export interface IntegratorObjectResultFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		linkUrl: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIntegratorObjectResultFormGroup() {
		return new FormGroup<IntegratorObjectResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObjectToken {
		dataType?: CardDisplayPropertyDataType | null;
		label?: string | null;
		name?: string | null;

		/** Required */
		value: string;
	}
	export interface ObjectTokenFormProperties {
		dataType: FormControl<CardDisplayPropertyDataType | null | undefined>,
		label: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateObjectTokenFormGroup() {
		return new FormGroup<ObjectTokenFormProperties>({
			dataType: new FormControl<CardDisplayPropertyDataType | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TopLevelActions {
		primary?: ActionHookActionBody;

		/** Required */
		secondary: Array<string>;
		settings?: IFrameActionBody;
	}
	export interface TopLevelActionsFormProperties {
	}
	export function CreateTopLevelActionsFormGroup() {
		return new FormGroup<TopLevelActionsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get sample card detail response
		 * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
		 * Get crm/v3/extensions/cards/sample-response
		 * @return {IntegratorCardPayloadResponse} successful operation
		 */
		Get_SlashcrmSlashv3SlashextensionsSlashcardsSlashsample_response_getCardsSampleResponse(): Observable<IntegratorCardPayloadResponse> {
			return this.http.get<IntegratorCardPayloadResponse>(this.baseUri + 'crm/v3/extensions/cards/sample-response', {});
		}

		/**
		 * Get all cards
		 * Returns a list of cards for a given app.
		 * Get crm/v3/extensions/cards/{appId}
		 * @param {number} appId The ID of the target app.
		 * @return {CardListResponse} successful operation
		 */
		Get_SlashcrmSlashv3SlashextensionsSlashcardsSlashappId_getAll(appId: number): Observable<CardListResponse> {
			return this.http.get<CardListResponse>(this.baseUri + 'crm/v3/extensions/cards/' + appId, {});
		}

		/**
		 * Create a new card
		 * Defines a new card that will become active on an account when this app is installed.
		 * Post crm/v3/extensions/cards/{appId}
		 * @param {number} appId The ID of the target app.
		 * @param {CardCreateRequest} requestBody The new card definition.
		 * @return {void} 
		 */
		Post_SlashcrmSlashv3SlashextensionsSlashcardsSlashappId_create(appId: number, requestBody: CardCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crm/v3/extensions/cards/' + appId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a card
		 * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
		 * Delete crm/v3/extensions/cards/{appId}/{cardId}
		 * @param {number} appId The ID of the target app.
		 * @param {string} cardId The ID of the card to delete.
		 * @return {void} 
		 */
		Delete_SlashcrmSlashv3SlashextensionsSlashcardsSlashappIdSlashcardId_archive(appId: number, cardId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'crm/v3/extensions/cards/' + appId + '/' + (cardId == null ? '' : encodeURIComponent(cardId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a card.
		 * Returns the definition for a card with the given ID.
		 * Get crm/v3/extensions/cards/{appId}/{cardId}
		 * @param {number} appId The ID of the target app.
		 * @param {string} cardId The ID of the target card.
		 * @return {CardResponse} successful operation
		 */
		Get_SlashcrmSlashv3SlashextensionsSlashcardsSlashappIdSlashcardId_getById(appId: number, cardId: string): Observable<CardResponse> {
			return this.http.get<CardResponse>(this.baseUri + 'crm/v3/extensions/cards/' + appId + '/' + (cardId == null ? '' : encodeURIComponent(cardId)), {});
		}

		/**
		 * Update a card
		 * Update a card definition with new details.
		 * Patch crm/v3/extensions/cards/{appId}/{cardId}
		 * @param {number} appId The ID of the target app.
		 * @param {string} cardId The ID of the card to update.
		 * @param {CardPatchRequest} requestBody Card definition fields to be updated.
		 * @return {CardResponse} successful operation
		 */
		Patch_SlashcrmSlashv3SlashextensionsSlashcardsSlashappIdSlashcardId_update(appId: number, cardId: string, requestBody: CardPatchRequest): Observable<CardResponse> {
			return this.http.patch<CardResponse>(this.baseUri + 'crm/v3/extensions/cards/' + appId + '/' + (cardId == null ? '' : encodeURIComponent(cardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

