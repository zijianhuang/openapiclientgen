import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountEvent {
		accountId?: string | null;
		type?: AccountEventType | null;
	}
	export interface AccountEventFormProperties {
		accountId: FormControl<string | null | undefined>,
		type: FormControl<AccountEventType | null | undefined>,
	}
	export function CreateAccountEventFormGroup() {
		return new FormGroup<AccountEventFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccountEventType | null | undefined>(undefined),
		});

	}

	export enum AccountEventType { account = 0, messageStatus = 1, messageIncoming = 2 }

	export interface AccountEventPayload {
		balance?: number | null;
	}
	export interface AccountEventPayloadFormProperties {
		balance: FormControl<number | null | undefined>,
	}
	export function CreateAccountEventPayloadFormGroup() {
		return new FormGroup<AccountEventPayloadFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AttributeFilter {
		comparator?: AttributeFilterComparator | null;
		name?: string | null;
		value?: string | null;
	}
	export interface AttributeFilterFormProperties {
		comparator: FormControl<AttributeFilterComparator | null | undefined>,
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFilterFormGroup() {
		return new FormGroup<AttributeFilterFormProperties>({
			comparator: new FormControl<AttributeFilterComparator | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeFilterComparator { '=' = 0, '<' = 1, '<=' = 2, '>' = 3, '>=' = 4, '!=' = 5 }

	export interface Campaign {
		id?: string | null;
	}
	export interface CampaignFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CampaignRequest {
		filters?: CampaignRequestFilters;
		template?: string | null;
		trigger?: CampaignRequestTrigger;
	}
	export interface CampaignRequestFormProperties {
		template: FormControl<string | null | undefined>,
	}
	export function CreateCampaignRequestFormGroup() {
		return new FormGroup<CampaignRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CampaignRequestFilters {
		attributes?: Array<string>;
		contacts?: Array<string>;
		tags?: Array<string>;
	}
	export interface CampaignRequestFiltersFormProperties {
	}
	export function CreateCampaignRequestFiltersFormGroup() {
		return new FormGroup<CampaignRequestFiltersFormProperties>({
		});

	}

	export interface CampaignRequestTrigger {

		/**
		 * Campaign type specifies how it sources contacts and what event triggers its execution  Sort order
		 * * `M` - Manual
		 * * `S` - Scheduled
		 * * `FU` - File Upload
		 */
		code?: CampaignRequestTriggerCode | null;
	}
	export interface CampaignRequestTriggerFormProperties {

		/**
		 * Campaign type specifies how it sources contacts and what event triggers its execution  Sort order
		 * * `M` - Manual
		 * * `S` - Scheduled
		 * * `FU` - File Upload
		 */
		code: FormControl<CampaignRequestTriggerCode | null | undefined>,
	}
	export function CreateCampaignRequestTriggerFormGroup() {
		return new FormGroup<CampaignRequestTriggerFormProperties>({
			code: new FormControl<CampaignRequestTriggerCode | null | undefined>(undefined),
		});

	}

	export enum CampaignRequestTriggerCode { M = 0, S = 1, FU = 2 }

	export interface CampaignResponse {
		data?: Campaign;
		success?: boolean | null;
	}
	export interface CampaignResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCampaignResponseFormGroup() {
		return new FormGroup<CampaignResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CampaignsResponse extends PaginatedResponse {
		data?: Array<Campaign>;
	}
	export interface CampaignsResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateCampaignsResponseFormGroup() {
		return new FormGroup<CampaignsResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Contact extends ContactRequest {
		created?: Updated;
		error?: Error;
		updated?: Updated;
		valid?: boolean | null;
	}
	export interface ContactFormProperties extends ContactRequestFormProperties {
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Updated {
		at?: Date | null;
		by?: UpdatedBy;
	}
	export interface UpdatedFormProperties {
		at: FormControl<Date | null | undefined>,
	}
	export function CreateUpdatedFormGroup() {
		return new FormGroup<UpdatedFormProperties>({
			at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdatedBy {
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface UpdatedByFormProperties {
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatedByFormGroup() {
		return new FormGroup<UpdatedByFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		code?: string | null;
		description?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactIdentifiers {
		email?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		mobile?: ContactIdentifiersMobile;
	}
	export interface ContactIdentifiersFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateContactIdentifiersFormGroup() {
		return new FormGroup<ContactIdentifiersFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactIdentifiersMobile {
		country?: string | null;
		number?: string | null;
	}
	export interface ContactIdentifiersMobileFormProperties {
		country: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateContactIdentifiersMobileFormGroup() {
		return new FormGroup<ContactIdentifiersMobileFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactRequest extends ContactIdentifiers {
		attributes?: string | null;
		tags?: Array<Tag>;
	}
	export interface ContactRequestFormProperties extends ContactIdentifiersFormProperties {
		attributes: FormControl<string | null | undefined>,
	}
	export function CreateContactRequestFormGroup() {
		return new FormGroup<ContactRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag {
		tag?: string | null;
		visible?: boolean | null;
	}
	export interface TagFormProperties {
		tag: FormControl<string | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContactResponse {
		data?: Contact;
		success?: boolean | null;
	}
	export interface ContactResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateContactResponseFormGroup() {
		return new FormGroup<ContactResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContactUploadResponse {
		data?: ContactUploadResponseData;
		success?: boolean | null;
	}
	export interface ContactUploadResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateContactUploadResponseFormGroup() {
		return new FormGroup<ContactUploadResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContactUploadResponseData {

		/** Uploaded contacts */
		contacts?: Array<Contact>;

		/** Contacts that failed validation */
		errors?: Array<Contact>;
		inserted?: number | null;
		submitted?: number | null;
		success?: number | null;
		updated?: number | null;
	}
	export interface ContactUploadResponseDataFormProperties {
		inserted: FormControl<number | null | undefined>,
		submitted: FormControl<number | null | undefined>,
		success: FormControl<number | null | undefined>,
		updated: FormControl<number | null | undefined>,
	}
	export function CreateContactUploadResponseDataFormGroup() {
		return new FormGroup<ContactUploadResponseDataFormProperties>({
			inserted: new FormControl<number | null | undefined>(undefined),
			submitted: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContactsResponse extends PaginatedResponse {
		data?: Array<Contact>;
	}
	export interface ContactsResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateContactsResponseFormGroup() {
		return new FormGroup<ContactsResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Conversation {
		closed?: boolean | null;
		contact?: ContactIdentifiers;
		created?: Updated;
		id?: string | null;
		lastMessage?: Message;
		phoneNumber?: PhoneNumber;
		unread?: Array<string>;
		updated?: Updated;
	}
	export interface ConversationFormProperties {
		closed: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateConversationFormGroup() {
		return new FormGroup<ConversationFormProperties>({
			closed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Message {
		contact?: ContactIdentifiers;
		conversation?: MessageConversation;
		created?: Updated;
		error?: Error;
		id?: string | null;

		/** List of media objects attached to message */
		MessageMedia?: Array<MessageMedia>;
		message?: string | null;
		outgoing?: boolean | null;
		phoneNumber?: string | null;
		price?: number | null;
		read?: boolean | null;
		segments?: number | null;
		status?: string | null;
		template?: string | null;
		updated?: Updated;
	}
	export interface MessageFormProperties {
		id: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		outgoing: FormControl<boolean | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		read: FormControl<boolean | null | undefined>,
		segments: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			outgoing: new FormControl<boolean | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			segments: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageConversation {
		id?: string | null;
	}
	export interface MessageConversationFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateMessageConversationFormGroup() {
		return new FormGroup<MessageConversationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageMedia {
		filename?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface MessageMediaFormProperties {
		filename: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateMessageMediaFormGroup() {
		return new FormGroup<MessageMediaFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumber {
		active?: boolean | null;
		country?: string | null;
		number?: string | null;
	}
	export interface PhoneNumberFormProperties {
		active: FormControl<boolean | null | undefined>,
		country: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConversationResponse {
		data?: Conversation;
		success?: boolean | null;
	}
	export interface ConversationResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateConversationResponseFormGroup() {
		return new FormGroup<ConversationResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConversationsResponse extends PaginatedResponse {
		data?: Array<Conversation>;
	}
	export interface ConversationsResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateConversationsResponseFormGroup() {
		return new FormGroup<ConversationsResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
		error?: ErrorResponseError;
		success?: boolean | null;
	}
	export interface ErrorResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ErrorResponseError {
		code?: string | null;
		message?: string | null;
	}
	export interface ErrorResponseErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseErrorFormGroup() {
		return new FormGroup<ErrorResponseErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {
		accountId?: string | null;
		data?: AccountEventPayload;
		eventId?: string | null;
		type?: AccountEventType | null;
	}
	export interface EventFormProperties {
		accountId: FormControl<string | null | undefined>,
		eventId: FormControl<string | null | undefined>,
		type: FormControl<AccountEventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccountEventType | null | undefined>(undefined),
		});

	}

	export enum EventType { account = 0, messageStatus = 1, messageIncoming = 2 }

	export interface MessageEventPayload {
		contact?: ContactIdentifiers;
		error?: string | null;
		message?: string | null;
		status?: string | null;
	}
	export interface MessageEventPayloadFormProperties {
		error: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateMessageEventPayloadFormGroup() {
		return new FormGroup<MessageEventPayloadFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageResponse {
		data?: Message;
		success?: boolean | null;
	}
	export interface MessageResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateMessageResponseFormGroup() {
		return new FormGroup<MessageResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MessagesResponse extends PaginatedResponse {
		data?: Array<Message>;
	}
	export interface MessagesResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateMessagesResponseFormGroup() {
		return new FormGroup<MessagesResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PaginatedResponse {
		error?: PaginatedResponseError;
		pagination?: PaginatedResponsePagination;
		success?: boolean | null;
	}
	export interface PaginatedResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreatePaginatedResponseFormGroup() {
		return new FormGroup<PaginatedResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PaginatedResponseError {
		code?: string | null;
		message?: string | null;
	}
	export interface PaginatedResponseErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedResponseErrorFormGroup() {
		return new FormGroup<PaginatedResponseErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginatedResponsePagination {
		limit?: number | null;
		offset?: number | null;
		totalCount?: number | null;
	}
	export interface PaginatedResponsePaginationFormProperties {
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreatePaginatedResponsePaginationFormGroup() {
		return new FormGroup<PaginatedResponsePaginationFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendMessagesRequest {
		contacts?: Array<ContactRequest>;
		conversationStrategy?: string | null;

		/** List of conversation ids to send messages to */
		conversations?: Array<string>;
		filters?: SendMessagesRequestFilters;

		/** List of media objects to attach to message */
		SendMessagesRequestMedia?: Array<SendMessagesRequestMedia>;
		phoneNumberFilter?: SendMessagesRequestPhoneNumberFilter;
		template?: string | null;
		type?: SendMessagesRequestType | null;
	}
	export interface SendMessagesRequestFormProperties {
		conversationStrategy: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
		type: FormControl<SendMessagesRequestType | null | undefined>,
	}
	export function CreateSendMessagesRequestFormGroup() {
		return new FormGroup<SendMessagesRequestFormProperties>({
			conversationStrategy: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SendMessagesRequestType | null | undefined>(undefined),
		});

	}

	export interface SendMessagesRequestFilters {
		attributes?: Array<string>;
		tags?: Array<string>;
	}
	export interface SendMessagesRequestFiltersFormProperties {
	}
	export function CreateSendMessagesRequestFiltersFormGroup() {
		return new FormGroup<SendMessagesRequestFiltersFormProperties>({
		});

	}

	export interface SendMessagesRequestMedia {
		url?: string | null;
	}
	export interface SendMessagesRequestMediaFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateSendMessagesRequestMediaFormGroup() {
		return new FormGroup<SendMessagesRequestMediaFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendMessagesRequestPhoneNumberFilter {
		group?: SendMessagesRequestPhoneNumberFilterGroup;
	}
	export interface SendMessagesRequestPhoneNumberFilterFormProperties {
	}
	export function CreateSendMessagesRequestPhoneNumberFilterFormGroup() {
		return new FormGroup<SendMessagesRequestPhoneNumberFilterFormProperties>({
		});

	}

	export interface SendMessagesRequestPhoneNumberFilterGroup {
		id?: string | null;
	}
	export interface SendMessagesRequestPhoneNumberFilterGroupFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateSendMessagesRequestPhoneNumberFilterGroupFormGroup() {
		return new FormGroup<SendMessagesRequestPhoneNumberFilterGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SendMessagesRequestType { SMS = 0, MMS = 1 }

	export interface SendMessagesResponse {
		data?: SendMessagesResponseData;
	}
	export interface SendMessagesResponseFormProperties {
	}
	export function CreateSendMessagesResponseFormGroup() {
		return new FormGroup<SendMessagesResponseFormProperties>({
		});

	}

	export interface SendMessagesResponseData {
		estimatedPrice?: number | null;
		invalid?: Array<Contact>;
		jobId?: string | null;
		messages?: Array<Message>;
		requested?: number | null;
		valid?: number | null;
	}
	export interface SendMessagesResponseDataFormProperties {
		estimatedPrice: FormControl<number | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		requested: FormControl<number | null | undefined>,
		valid: FormControl<number | null | undefined>,
	}
	export function CreateSendMessagesResponseDataFormGroup() {
		return new FormGroup<SendMessagesResponseDataFormProperties>({
			estimatedPrice: new FormControl<number | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			requested: new FormControl<number | null | undefined>(undefined),
			valid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ShareFileResponse {
		data?: ShareFileResponseData;
		success?: boolean | null;
	}
	export interface ShareFileResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateShareFileResponseFormGroup() {
		return new FormGroup<ShareFileResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ShareFileResponseData {
		expires?: Date | null;
		link?: string | null;
	}
	export interface ShareFileResponseDataFormProperties {
		expires: FormControl<Date | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreateShareFileResponseDataFormGroup() {
		return new FormGroup<ShareFileResponseDataFormProperties>({
			expires: new FormControl<Date | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Template extends TemplateRequest {
		id?: string | null;
	}
	export interface TemplateFormProperties extends TemplateRequestFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TemplateRequestType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateRequest {
		name?: string | null;
		template?: string | null;
		type?: TemplateRequestType | null;
	}
	export interface TemplateRequestFormProperties {
		name: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
		type: FormControl<TemplateRequestType | null | undefined>,
	}
	export function CreateTemplateRequestFormGroup() {
		return new FormGroup<TemplateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TemplateRequestType | null | undefined>(undefined),
		});

	}

	export enum TemplateRequestType { SMS = 0, Web = 1 }

	export interface TemplateResponse {
		data?: Template;
		success?: boolean | null;
	}
	export interface TemplateResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplateResponseFormGroup() {
		return new FormGroup<TemplateResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TemplatesResponse extends PaginatedResponse {
		data?: Array<Template>;
	}
	export interface TemplatesResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateTemplatesResponseFormGroup() {
		return new FormGroup<TemplatesResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TokenRequest {
		client_id?: string | null;
		client_secret?: string | null;
		grant_type?: string | null;
	}
	export interface TokenRequestFormProperties {
		client_id: FormControl<string | null | undefined>,
		client_secret: FormControl<string | null | undefined>,
		grant_type: FormControl<string | null | undefined>,
	}
	export function CreateTokenRequestFormGroup() {
		return new FormGroup<TokenRequestFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TokenResponse {
		access_token?: string | null;
		token_type?: string | null;
	}
	export interface TokenResponseFormProperties {
		access_token: FormControl<string | null | undefined>,
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateTokenResponseFormGroup() {
		return new FormGroup<TokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook {
		eventTypes?: Array<string>;
		url?: string | null;
	}
	export interface WebhookFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookResponse {
		data?: Webhook;
		success?: boolean | null;
	}
	export interface WebhookResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateWebhookResponseFormGroup() {
		return new FormGroup<WebhookResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WebhooksResponse extends PaginatedResponse {
		data?: Array<Webhook>;
	}
	export interface WebhooksResponseFormProperties extends PaginatedResponseFormProperties {
	}
	export function CreateWebhooksResponseFormGroup() {
		return new FormGroup<WebhooksResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get token for accessing APIs
		 * Post oauth2/token
		 * @return {TokenResponse} successful operation
		 */
		Auth_token(requestBody: TokenRequest): Observable<TokenResponse> {
			return this.http.post<TokenResponse>(this.baseUri + 'oauth2/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch campaigns
		 * Get v1/accounts/{accountId}/campaigns
		 * @param {string} accountId Account to apply operations to
		 * @param {number} offset Results to skip when paginating through a result set
		 * @param {number} limit Maximum number of results to return
		 * @param {string} name Filter by name or part of
		 * @return {CampaignsResponse} successful operation
		 */
		Campaigns_fetchAll(accountId: string, offset: number | null | undefined, limit: number | null | undefined, name: string | null | undefined): Observable<CampaignsResponse> {
			return this.http.get<CampaignsResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/campaigns&offset=' + offset + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create campaign
		 * Post v1/accounts/{accountId}/campaigns
		 * @param {string} accountId Account to apply operations to
		 * @return {void} 
		 */
		Campaigns_create(accountId: string, requestBody: CampaignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a campaign
		 * Delete v1/accounts/{accountId}/campaigns/{campaignId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} campaignId Campaign id to delete
		 * @return {Campaigns_removeReturn} successful operation
		 */
		Campaigns_remove(accountId: string, campaignId: string): Observable<Campaigns_removeReturn> {
			return this.http.delete<Campaigns_removeReturn>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)), {});
		}

		/**
		 * Fetch campaign by ID
		 * Get v1/accounts/{accountId}/campaigns/{campaignId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} campaignId ID of campaign to return
		 * @return {CampaignResponse} successful operation
		 */
		Campaigns_fetch(accountId: string, campaignId: string): Observable<CampaignResponse> {
			return this.http.get<CampaignResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)), {});
		}

		/**
		 * Updates a campaign
		 * Put v1/accounts/{accountId}/campaigns/{campaignId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} campaignId ID of campaign
		 * @return {CampaignResponse} successful operation
		 */
		Campaigns_update(accountId: string, campaignId: string): Observable<CampaignResponse> {
			return this.http.put<CampaignResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)), null, {});
		}

		/**
		 * Fetch contacts
		 * Get v1/accounts/{accountId}/contacts
		 * @param {string} accountId Account to apply operations to
		 * @param {number} offset Results to skip when paginating through a result set
		 * @param {number} limit Maximum number of results to return
		 * @param {string} firstName Filter by first name or part of
		 * @param {string} lastName Filter by last name or part of
		 * @param {string} mobile Filter by mobile or part of
		 * @param {string} email Filter by email or part of
		 * @param {string} tags Filter by tag(s)
		 * @return {ContactsResponse} successful operation
		 */
		Contacts_fetchAll(accountId: string, offset: number | null | undefined, limit: number | null | undefined, firstName: string | null | undefined, lastName: string | null | undefined, mobile: string | null | undefined, email: string | null | undefined, tags: string | null | undefined): Observable<ContactsResponse> {
			return this.http.get<ContactsResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/contacts&offset=' + offset + '&limit=' + limit + '&firstName=' + (firstName == null ? '' : encodeURIComponent(firstName)) + '&lastName=' + (lastName == null ? '' : encodeURIComponent(lastName)) + '&mobile=' + (mobile == null ? '' : encodeURIComponent(mobile)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), {});
		}

		/**
		 * Create contact
		 * Post v1/accounts/{accountId}/contacts
		 * @param {string} accountId Account to apply operations to
		 * @param {Contacts_createMergeStrategy} mergeStrategy Determines how existing contacts with matching mobile numbers are treated
		 * @return {void} 
		 */
		Contacts_create(accountId: string, mergeStrategy: Contacts_createMergeStrategy | null | undefined, requestBody: ContactRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/contacts&mergeStrategy=' + mergeStrategy, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a contact
		 * Delete v1/accounts/{accountId}/contacts/{contactId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} contactId Contact id to delete
		 * @return {Contacts_removeReturn} successful operation
		 */
		Contacts_remove(accountId: string, contactId: string): Observable<Contacts_removeReturn> {
			return this.http.delete<Contacts_removeReturn>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), {});
		}

		/**
		 * Fetch contact by ID
		 * Get v1/accounts/{accountId}/contacts/{contactId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} contactId ID of contact to return
		 * @return {ContactResponse} successful operation
		 */
		Contacts_fetch(accountId: string, contactId: string): Observable<ContactResponse> {
			return this.http.get<ContactResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), {});
		}

		/**
		 * Updates a contact
		 * Put v1/accounts/{accountId}/contacts/{contactId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} contactId ID of contact
		 * @return {ContactResponse} successful operation
		 */
		Contacts_update(accountId: string, contactId: string): Observable<ContactResponse> {
			return this.http.put<ContactResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/contacts/' + (contactId == null ? '' : encodeURIComponent(contactId)), null, {});
		}

		/**
		 * Fetch conversations
		 * Get v1/accounts/{accountId}/conversations
		 * @param {string} accountId Account to apply operations to
		 * @param {number} offset Results to skip when paginating through a result set
		 * @param {number} limit Maximum number of results to return
		 * @return {ConversationsResponse} successful operation
		 */
		Conversations_fetchAll(accountId: string, offset: number | null | undefined, limit: number | null | undefined): Observable<ConversationsResponse> {
			return this.http.get<ConversationsResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Fetch conversation by ID
		 * Get v1/accounts/{accountId}/conversations/{conversationId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} conversationId ID of template to return
		 * @return {ConversationResponse} successful operation
		 */
		Conversations_fetch(accountId: string, conversationId: string): Observable<ConversationResponse> {
			return this.http.get<ConversationResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations/' + (conversationId == null ? '' : encodeURIComponent(conversationId)), {});
		}

		/**
		 * Closes a conversation
		 * Put v1/accounts/{accountId}/conversations/{conversationId}/close
		 * @param {string} accountId Account to apply operations to
		 * @param {string} conversationId ID of conversation
		 * @return {ConversationResponse} successful operation
		 */
		Conversations_close(accountId: string, conversationId: string): Observable<ConversationResponse> {
			return this.http.put<ConversationResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations/' + (conversationId == null ? '' : encodeURIComponent(conversationId)) + '/close', null, {});
		}

		/**
		 * Fetch messages
		 * Get v1/accounts/{accountId}/messages
		 * @param {string} accountId Account to apply operations to
		 * @param {number} offset Results to skip when paginating through a result set
		 * @param {number} limit Maximum number of results to return
		 * @param {string} contactId ID of contact
		 * @param {string} conversationId ID of conversation
		 * @return {MessagesResponse} successful operation
		 */
		Messages_fetchAll(accountId: string, offset: number | null | undefined, limit: number | null | undefined, contactId: string | null | undefined, conversationId: string | null | undefined): Observable<MessagesResponse> {
			return this.http.get<MessagesResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/messages&offset=' + offset + '&limit=' + limit + '&contactId=' + (contactId == null ? '' : encodeURIComponent(contactId)) + '&conversationId=' + (conversationId == null ? '' : encodeURIComponent(conversationId)), {});
		}

		/**
		 * Send Messages
		 * Post v1/accounts/{accountId}/messages
		 * @param {string} accountId Account to apply operations to
		 * @return {SendMessagesResponse} successful operation
		 */
		Messages_send(accountId: string, requestBody: SendMessagesRequest): Observable<SendMessagesResponse> {
			return this.http.post<SendMessagesResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch message by id
		 * Returns a single messag
		 * Get v1/accounts/{accountId}/messages/{messageId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} messageId ID of message to return
		 * @return {MessageResponse} successful operation
		 */
		Messages_fetch(accountId: string, messageId: string): Observable<MessageResponse> {
			return this.http.get<MessageResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}

		/**
		 * Fetch templates
		 * Get v1/accounts/{accountId}/templates
		 * @param {string} accountId Account to apply operations to
		 * @param {number} offset Results to skip when paginating through a result set
		 * @param {number} limit Maximum number of results to return
		 * @param {string} name Filter by name or part of
		 * @return {TemplatesResponse} successful operation
		 */
		Templates_fetchAll(accountId: string, offset: number | null | undefined, limit: number | null | undefined, name: string | null | undefined): Observable<TemplatesResponse> {
			return this.http.get<TemplatesResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/templates&offset=' + offset + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create template
		 * Post v1/accounts/{accountId}/templates
		 * @param {string} accountId Account to apply operations to
		 * @return {void} 
		 */
		Templates_create(accountId: string, requestBody: TemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a template
		 * Delete v1/accounts/{accountId}/templates/{templateId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} templateId Template id to delete
		 * @return {Templates_removeReturn} successful operation
		 */
		Templates_remove(accountId: string, templateId: string): Observable<Templates_removeReturn> {
			return this.http.delete<Templates_removeReturn>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Fetch template by ID
		 * Get v1/accounts/{accountId}/templates/{templateId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} templateId ID of template to return
		 * @return {TemplateResponse} successful operation
		 */
		Templates_fetch(accountId: string, templateId: string): Observable<TemplateResponse> {
			return this.http.get<TemplateResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Updates a template
		 * Put v1/accounts/{accountId}/templates/{templateId}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} templateId ID of template
		 * @return {TemplateResponse} successful operation
		 */
		Templates_update(accountId: string, templateId: string): Observable<TemplateResponse> {
			return this.http.put<TemplateResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)), null, {});
		}

		/**
		 * Fetch active webhooks
		 * When messages are acknowledge by carriers, a notification is sent to the specified URL
		 * Get v1/accounts/{accountId}/webhooks
		 * @param {string} accountId Account to apply operations to
		 * @return {WebhooksResponse} successful operation
		 */
		Webhooks_fetchAll(accountId: string): Observable<WebhooksResponse> {
			return this.http.get<WebhooksResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webhooks', {});
		}

		/**
		 * Subscribe to message events
		 * When messages are acknowledge by carriers, a notification is sent to the specified URL
		 * Post v1/accounts/{accountId}/webhooks
		 * @param {string} accountId Account to apply operations to
		 * @return {WebhookResponse} successful operation
		 */
		Webhooks_subscribe(accountId: string, requestBody: Webhooks_subscribePostBody): Observable<WebhookResponse> {
			return this.http.post<WebhookResponse>(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unsubscribe to message events
		 * Delete subscription for receiving notifications
		 * Delete v1/accounts/{accountId}/webhooks/{url}
		 * @param {string} accountId Account to apply operations to
		 * @param {string} url Account to apply operations to
		 * @return {void} 
		 */
		Webhooks_unsubscribe(accountId: string, url: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webhooks/' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface Campaigns_removeReturn {
		success?: boolean | null;
	}
	export interface Campaigns_removeReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateCampaigns_removeReturnFormGroup() {
		return new FormGroup<Campaigns_removeReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Contacts_createMergeStrategy { append = 0, core = 1, remove = 2 }

	export interface Contacts_removeReturn {
		success?: boolean | null;
	}
	export interface Contacts_removeReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateContacts_removeReturnFormGroup() {
		return new FormGroup<Contacts_removeReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Templates_removeReturn {
		success?: boolean | null;
	}
	export interface Templates_removeReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplates_removeReturnFormGroup() {
		return new FormGroup<Templates_removeReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Webhooks_subscribePostBody {
		eventTypes?: Array<string>;
		url?: string | null;
	}
	export interface Webhooks_subscribePostBodyFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhooks_subscribePostBodyFormGroup() {
		return new FormGroup<Webhooks_subscribePostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

