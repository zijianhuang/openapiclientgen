import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateContactInMailingList {
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		unsubscribed?: boolean | null;
	}
	export interface CreateContactInMailingListFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		unsubscribed: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateContactInMailingListFormGroup() {
		return new FormGroup<CreateContactInMailingListFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			unsubscribed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDistributionLinks {
		action?: string | null;
		description?: string | null;
		expirationDate?: string | null;
		linkType?: string | null;
		mailingListId?: string | null;
		surveyId?: string | null;
	}
	export interface CreateDistributionLinksFormProperties {
		action: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		expirationDate: FormControl<string | null | undefined>,
		linkType: FormControl<string | null | undefined>,
		mailingListId: FormControl<string | null | undefined>,
		surveyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDistributionLinksFormGroup() {
		return new FormGroup<CreateDistributionLinksFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			linkType: new FormControl<string | null | undefined>(undefined),
			mailingListId: new FormControl<string | null | undefined>(undefined),
			surveyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponse {
		meta?: DistributionsResponseMeta;
		result?: DistributionsResponseResult;
	}
	export interface DistributionsResponseFormProperties {
	}
	export function CreateDistributionsResponseFormGroup() {
		return new FormGroup<DistributionsResponseFormProperties>({
		});

	}

	export interface DistributionsResponseMeta {
		httpStatus?: string | null;
		requestId?: string | null;
	}
	export interface DistributionsResponseMetaFormProperties {
		httpStatus: FormControl<string | null | undefined>,
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateDistributionsResponseMetaFormGroup() {
		return new FormGroup<DistributionsResponseMetaFormProperties>({
			httpStatus: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResult {
		DistributionsResponseResultElements?: Array<DistributionsResponseResultElements>;
		nextPage?: any;
	}
	export interface DistributionsResponseResultFormProperties {
		nextPage: FormControl<any | null | undefined>,
	}
	export function CreateDistributionsResponseResultFormGroup() {
		return new FormGroup<DistributionsResponseResultFormProperties>({
			nextPage: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResultElements {

		/** Required */
		createdDate: string;

		/** Required */
		customHeaders: string;

		/** Required */
		embeddedData: any;

		/** Required */
		headers: DistributionsResponseResultElementsHeaders;

		/** Required */
		id: string;

		/** Required */
		message: DistributionsResponseResultElementsMessage;

		/** Required */
		modifiedDate: string;

		/** Required */
		organizationId: string;

		/** Required */
		ownerId: string;

		/** Required */
		parentDistributionId: any;

		/** Required */
		recipients: DistributionsResponseResultElementsRecipients;

		/** Required */
		requestStatus: string;

		/** Required */
		requestType: string;

		/** Required */
		sendDate: string;

		/** Required */
		stats: DistributionsResponseResultElementsStats;

		/** Required */
		surveyLink: DistributionsResponseResultElementsSurveyLink;
	}
	export interface DistributionsResponseResultElementsFormProperties {

		/** Required */
		createdDate: FormControl<string | null | undefined>,

		/** Required */
		customHeaders: FormControl<string | null | undefined>,

		/** Required */
		embeddedData: FormControl<any | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modifiedDate: FormControl<string | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		ownerId: FormControl<string | null | undefined>,

		/** Required */
		parentDistributionId: FormControl<any | null | undefined>,

		/** Required */
		requestStatus: FormControl<string | null | undefined>,

		/** Required */
		requestType: FormControl<string | null | undefined>,

		/** Required */
		sendDate: FormControl<string | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customHeaders: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embeddedData: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentDistributionId: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			requestStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sendDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DistributionsResponseResultElementsHeaders {
		fromEmail?: any;
		fromName?: any;
		replyToEmail?: any;
	}
	export interface DistributionsResponseResultElementsHeadersFormProperties {
		fromEmail: FormControl<any | null | undefined>,
		fromName: FormControl<any | null | undefined>,
		replyToEmail: FormControl<any | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsHeadersFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsHeadersFormProperties>({
			fromEmail: new FormControl<any | null | undefined>(undefined),
			fromName: new FormControl<any | null | undefined>(undefined),
			replyToEmail: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResultElementsMessage {
		libraryId?: any;
		messageId?: any;
		messageText?: any;
	}
	export interface DistributionsResponseResultElementsMessageFormProperties {
		libraryId: FormControl<any | null | undefined>,
		messageId: FormControl<any | null | undefined>,
		messageText: FormControl<any | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsMessageFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsMessageFormProperties>({
			libraryId: new FormControl<any | null | undefined>(undefined),
			messageId: new FormControl<any | null | undefined>(undefined),
			messageText: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResultElementsRecipients {
		contactId?: any;
		libraryId?: string | null;
		mailingListId?: string | null;
		sampleId?: any;
	}
	export interface DistributionsResponseResultElementsRecipientsFormProperties {
		contactId: FormControl<any | null | undefined>,
		libraryId: FormControl<string | null | undefined>,
		mailingListId: FormControl<string | null | undefined>,
		sampleId: FormControl<any | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsRecipientsFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsRecipientsFormProperties>({
			contactId: new FormControl<any | null | undefined>(undefined),
			libraryId: new FormControl<string | null | undefined>(undefined),
			mailingListId: new FormControl<string | null | undefined>(undefined),
			sampleId: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResultElementsStats {
		blocked?: number | null;
		bounced?: number | null;
		complaints?: number | null;
		failed?: number | null;
		finished?: number | null;
		opened?: number | null;
		sent?: number | null;
		skipped?: number | null;
		started?: number | null;
	}
	export interface DistributionsResponseResultElementsStatsFormProperties {
		blocked: FormControl<number | null | undefined>,
		bounced: FormControl<number | null | undefined>,
		complaints: FormControl<number | null | undefined>,
		failed: FormControl<number | null | undefined>,
		finished: FormControl<number | null | undefined>,
		opened: FormControl<number | null | undefined>,
		sent: FormControl<number | null | undefined>,
		skipped: FormControl<number | null | undefined>,
		started: FormControl<number | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsStatsFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsStatsFormProperties>({
			blocked: new FormControl<number | null | undefined>(undefined),
			bounced: new FormControl<number | null | undefined>(undefined),
			complaints: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			finished: new FormControl<number | null | undefined>(undefined),
			opened: new FormControl<number | null | undefined>(undefined),
			sent: new FormControl<number | null | undefined>(undefined),
			skipped: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DistributionsResponseResultElementsSurveyLink {
		expirationDate?: string | null;
		linkType?: string | null;
		surveyId?: string | null;
	}
	export interface DistributionsResponseResultElementsSurveyLinkFormProperties {
		expirationDate: FormControl<string | null | undefined>,
		linkType: FormControl<string | null | undefined>,
		surveyId: FormControl<string | null | undefined>,
	}
	export function CreateDistributionsResponseResultElementsSurveyLinkFormGroup() {
		return new FormGroup<DistributionsResponseResultElementsSurveyLinkFormProperties>({
			expirationDate: new FormControl<string | null | undefined>(undefined),
			linkType: new FormControl<string | null | undefined>(undefined),
			surveyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventSubscriptionHookSchema {

		/** Required */
		'$content': string;

		/** Required */
		'$content-type': string;
		EventSubscriptionHookSchema_formdata_?: Array<EventSubscriptionHookSchema_formdata_>;
	}
	export interface EventSubscriptionHookSchemaFormProperties {

		/** Required */
		'$content': FormControl<string | null | undefined>,

		/** Required */
		'$content-type': FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionHookSchemaFormGroup() {
		return new FormGroup<EventSubscriptionHookSchemaFormProperties>({
			'$content': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'$content-type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventSubscriptionHookSchema_formdata_ {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}
	export interface EventSubscriptionHookSchema_formdata_FormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionHookSchema_formdata_FormGroup() {
		return new FormGroup<EventSubscriptionHookSchema_formdata_FormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventSubscriptionsResponse {
		meta?: EventSubscriptionsResponseMeta;
		result?: EventSubscriptionsResponseResult;
	}
	export interface EventSubscriptionsResponseFormProperties {
	}
	export function CreateEventSubscriptionsResponseFormGroup() {
		return new FormGroup<EventSubscriptionsResponseFormProperties>({
		});

	}

	export interface EventSubscriptionsResponseMeta {
		httpStatus?: string | null;
		requestId?: string | null;
	}
	export interface EventSubscriptionsResponseMetaFormProperties {
		httpStatus: FormControl<string | null | undefined>,
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsResponseMetaFormGroup() {
		return new FormGroup<EventSubscriptionsResponseMetaFormProperties>({
			httpStatus: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventSubscriptionsResponseResult {
		meta?: EventSubscriptionsResponseResultMeta;
		result?: EventSubscriptionsResponseResultResult;
	}
	export interface EventSubscriptionsResponseResultFormProperties {
	}
	export function CreateEventSubscriptionsResponseResultFormGroup() {
		return new FormGroup<EventSubscriptionsResponseResultFormProperties>({
		});

	}

	export interface EventSubscriptionsResponseResultMeta {
		httpStatus?: string | null;
	}
	export interface EventSubscriptionsResponseResultMetaFormProperties {
		httpStatus: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsResponseResultMetaFormGroup() {
		return new FormGroup<EventSubscriptionsResponseResultMetaFormProperties>({
			httpStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventSubscriptionsResponseResultResult {
		id?: string | null;
	}
	export interface EventSubscriptionsResponseResultResultFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsResponseResultResultFormGroup() {
		return new FormGroup<EventSubscriptionsResponseResultResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveDistributionLinksResponse {
		meta?: RetrieveDistributionLinksResponseMeta;
		result?: RetrieveDistributionLinksResponseResult;
	}
	export interface RetrieveDistributionLinksResponseFormProperties {
	}
	export function CreateRetrieveDistributionLinksResponseFormGroup() {
		return new FormGroup<RetrieveDistributionLinksResponseFormProperties>({
		});

	}

	export interface RetrieveDistributionLinksResponseMeta {
		httpStatus?: string | null;
		requestId?: string | null;
	}
	export interface RetrieveDistributionLinksResponseMetaFormProperties {
		httpStatus: FormControl<string | null | undefined>,
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveDistributionLinksResponseMetaFormGroup() {
		return new FormGroup<RetrieveDistributionLinksResponseMetaFormProperties>({
			httpStatus: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveDistributionLinksResponseResult {
		RetrieveDistributionLinksResponseResultElements?: Array<RetrieveDistributionLinksResponseResultElements>;
		nextPage?: any;
	}
	export interface RetrieveDistributionLinksResponseResultFormProperties {
		nextPage: FormControl<any | null | undefined>,
	}
	export function CreateRetrieveDistributionLinksResponseResultFormGroup() {
		return new FormGroup<RetrieveDistributionLinksResponseResultFormProperties>({
			nextPage: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RetrieveDistributionLinksResponseResultElements {

		/** Required */
		contactId: string;

		/** Required */
		email: string;

		/** Required */
		exceededContactFrequency: boolean;

		/** Required */
		externalDataReference: any;

		/** Required */
		firstName: string;

		/** Required */
		lastName: string;

		/** Required */
		link: string;

		/** Required */
		linkExpiration: string;

		/** Required */
		status: string;

		/** Required */
		transactionId: any;

		/** Required */
		unsubscribed: boolean;
	}
	export interface RetrieveDistributionLinksResponseResultElementsFormProperties {

		/** Required */
		contactId: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		exceededContactFrequency: FormControl<boolean | null | undefined>,

		/** Required */
		externalDataReference: FormControl<any | null | undefined>,

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,

		/** Required */
		link: FormControl<string | null | undefined>,

		/** Required */
		linkExpiration: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		transactionId: FormControl<any | null | undefined>,

		/** Required */
		unsubscribed: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveDistributionLinksResponseResultElementsFormGroup() {
		return new FormGroup<RetrieveDistributionLinksResponseResultElementsFormProperties>({
			contactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exceededContactFrequency: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			externalDataReference: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkExpiration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			unsubscribed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscribeToEventBody {
		encrypt?: boolean | null;

		/**
		 * The internal publication URL - will be generated by PowerAutomate
		 * Required
		 */
		publicationUrl: string;

		/**
		 * The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]
		 * Required
		 */
		topics: string;
	}
	export interface SubscribeToEventBodyFormProperties {
		encrypt: FormControl<boolean | null | undefined>,

		/**
		 * The internal publication URL - will be generated by PowerAutomate
		 * Required
		 */
		publicationUrl: FormControl<string | null | undefined>,

		/**
		 * The topics to subscribe to. Must follow the format surveyengine.completedResponse.[SurveyID]
		 * Required
		 */
		topics: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeToEventBodyFormGroup() {
		return new FormGroup<SubscribeToEventBodyFormProperties>({
			encrypt: new FormControl<boolean | null | undefined>(undefined),
			publicationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topics: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SurveyResponse {
	}
	export interface SurveyResponseFormProperties {
	}
	export function CreateSurveyResponseFormGroup() {
		return new FormGroup<SurveyResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create contact in mailing list
		 * Creates a contact in a given mailing list
		 * Post directories/{DirectoryId}/mailinglists/{MailingListId}/contacts
		 * @param {string} DirectoryId ID of the qualtrics directory to create the contact to
		 * @param {string} MailingListId ID of the mailing list
		 * @param {CreateContactInMailingList} requestBody Contact data
		 * @return {void} OK - Contact created
		 */
		CreateContactInMailinglist(DirectoryId: string, MailingListId: string, requestBody: CreateContactInMailingList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'directories/' + (DirectoryId == null ? '' : encodeURIComponent(DirectoryId)) + '/mailinglists/' + (MailingListId == null ? '' : encodeURIComponent(MailingListId)) + '/contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get distributions for survey
		 * Gets all distributions for a given survey
		 * Get distributions
		 * @param {string} surveyId The survey for which to load the distributions
		 * @return {DistributionsResponse} Distributions
		 */
		GetDistributions(surveyId: string): Observable<DistributionsResponse> {
			return this.http.get<DistributionsResponse>(this.baseUri + 'distributions?surveyId=' + (surveyId == null ? '' : encodeURIComponent(surveyId)), {});
		}

		/**
		 * Generate distribution links
		 * Geneates links for individual distribution
		 * Post distributions
		 * @param {CreateDistributionLinks} requestBody Parameters for the link generation
		 * @return {void} OK
		 */
		GenerateDistributionLinks(requestBody: CreateDistributionLinks): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'distributions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve distribution links
		 * Retrieves all the individual links for a given distribution
		 * Get distributions/{DistributionId}/links
		 * @param {string} surveyId ID of the survey (eg: SV_123)
		 * @param {string} DistributionId ID of the distribution list
		 * @return {RetrieveDistributionLinksResponse} Generated list of links
		 */
		Retrievedistributionlinks(surveyId: string, DistributionId: string): Observable<RetrieveDistributionLinksResponse> {
			return this.http.get<RetrieveDistributionLinksResponse>(this.baseUri + 'distributions/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/links?surveyId=' + (surveyId == null ? '' : encodeURIComponent(surveyId)), {});
		}

		/**
		 * Remove subscription to response event
		 * Remove event subscription
		 * Delete eventsubscriptions/
		 * @return {EventSubscriptionsResponse} 
		 */
		WebhookDelete(): Observable<EventSubscriptionsResponse> {
			return this.http.delete<EventSubscriptionsResponse>(this.baseUri + 'eventsubscriptions/', {});
		}

		/**
		 * Triggers when a response is submitted to a qualtrics survey
		 * Subscribe to response event
		 * Post eventsubscriptions/
		 * @param {SubscribeToEventBody} requestBody This is the request body of the webhook
		 * @return {EventSubscriptionsResponse} OK - web hook registered
		 */
		WhenAResponseIsReceived(requestBody: SubscribeToEventBody): Observable<EventSubscriptionsResponse> {
			return this.http.post<EventSubscriptionsResponse>(this.baseUri + 'eventsubscriptions/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get event subscriptions
		 * Get event subscriptions
		 * Get eventsubscriptions/{SubscriptionId}
		 * @param {string} SubscriptionId ID of event subscription - can be obtained from web hook response
		 * @return {EventSubscriptionsResponse} Event subscriptions
		 */
		GetEventSubscriptions(SubscriptionId: string): Observable<EventSubscriptionsResponse> {
			return this.http.get<EventSubscriptionsResponse>(this.baseUri + 'eventsubscriptions/' + (SubscriptionId == null ? '' : encodeURIComponent(SubscriptionId)), {});
		}

		/**
		 * Get survey
		 * Gets a single Qualtrics survey speficied by its ID
		 * Get survey-definitions/{SurveyId}
		 * @param {string} SurveyId ID of survey (eg. SV_123)
		 * @return {SurveyResponse} Survey data
		 */
		GetSurvey(SurveyId: string): Observable<SurveyResponse> {
			return this.http.get<SurveyResponse>(this.baseUri + 'survey-definitions/' + (SurveyId == null ? '' : encodeURIComponent(SurveyId)), {});
		}
	}

}

