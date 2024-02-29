import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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


	/** The status of a subscription for a contact. */
	export interface PublicSubscriptionStatus {

		/**
		 * The ID of the brand that the subscription is associated with, if there is one.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		brandId?: string | null;

		/**
		 * A description of the subscription.
		 * Required
		 */
		description: string;

		/**
		 * The ID for the subscription.
		 * Required
		 */
		id: string;

		/** The legal reason for the current status of the subscription. */
		legalBasis?: PublicSubscriptionStatusLegalBasis | null;

		/** A more detailed explanation to go with the legal basis. */
		legalBasisExplanation?: string | null;

		/**
		 * The name of the subscription.
		 * Required
		 */
		name: string;

		/** The name of the preferences group that the subscription is associated with. */
		preferenceGroupName?: string | null;

		/**
		 * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
		 * Required
		 */
		sourceOfStatus: PublicSubscriptionStatusSourceOfStatus;

		/**
		 * Whether the contact is subscribed.
		 * Required
		 */
		status: PublicSubscriptionStatusStatus;
	}

	/** The status of a subscription for a contact. */
	export interface PublicSubscriptionStatusFormProperties {

		/**
		 * The ID of the brand that the subscription is associated with, if there is one.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * A description of the subscription.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID for the subscription.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The legal reason for the current status of the subscription. */
		legalBasis: FormControl<PublicSubscriptionStatusLegalBasis | null | undefined>,

		/** A more detailed explanation to go with the legal basis. */
		legalBasisExplanation: FormControl<string | null | undefined>,

		/**
		 * The name of the subscription.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the preferences group that the subscription is associated with. */
		preferenceGroupName: FormControl<string | null | undefined>,

		/**
		 * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
		 * Required
		 */
		sourceOfStatus: FormControl<PublicSubscriptionStatusSourceOfStatus | null | undefined>,

		/**
		 * Whether the contact is subscribed.
		 * Required
		 */
		status: FormControl<PublicSubscriptionStatusStatus | null | undefined>,
	}
	export function CreatePublicSubscriptionStatusFormGroup() {
		return new FormGroup<PublicSubscriptionStatusFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			legalBasis: new FormControl<PublicSubscriptionStatusLegalBasis | null | undefined>(undefined),
			legalBasisExplanation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferenceGroupName: new FormControl<string | null | undefined>(undefined),
			sourceOfStatus: new FormControl<PublicSubscriptionStatusSourceOfStatus | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<PublicSubscriptionStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PublicSubscriptionStatusLegalBasis { LEGITIMATE_INTEREST_PQL = 'LEGITIMATE_INTEREST_PQL', LEGITIMATE_INTEREST_CLIENT = 'LEGITIMATE_INTEREST_CLIENT', PERFORMANCE_OF_CONTRACT = 'PERFORMANCE_OF_CONTRACT', CONSENT_WITH_NOTICE = 'CONSENT_WITH_NOTICE', NON_GDPR = 'NON_GDPR', PROCESS_AND_STORE = 'PROCESS_AND_STORE', LEGITIMATE_INTEREST_OTHER = 'LEGITIMATE_INTEREST_OTHER' }

	export enum PublicSubscriptionStatusSourceOfStatus { PORTAL_WIDE_STATUS = 'PORTAL_WIDE_STATUS', BRAND_WIDE_STATUS = 'BRAND_WIDE_STATUS', SUBSCRIPTION_STATUS = 'SUBSCRIPTION_STATUS' }

	export enum PublicSubscriptionStatusStatus { SUBSCRIBED = 'SUBSCRIBED', NOT_SUBSCRIBED = 'NOT_SUBSCRIBED' }


	/** A collection of subscription statuses for a contact. */
	export interface PublicSubscriptionStatusesResponse {

		/**
		 * Email address of the contact.
		 * Required
		 */
		recipient: string;

		/**
		 * A list of all of the contact's subscriptions statuses.
		 * Required
		 */
		subscriptionStatuses: Array<PublicSubscriptionStatus>;
	}

	/** A collection of subscription statuses for a contact. */
	export interface PublicSubscriptionStatusesResponseFormProperties {

		/**
		 * Email address of the contact.
		 * Required
		 */
		recipient: FormControl<string | null | undefined>,
	}
	export function CreatePublicSubscriptionStatusesResponseFormGroup() {
		return new FormGroup<PublicSubscriptionStatusesResponseFormProperties>({
			recipient: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to change the status of a contact's subscription. */
	export interface PublicUpdateSubscriptionStatusRequest {

		/**
		 * Contact's email address.
		 * Required
		 */
		emailAddress: string;

		/** Legal basis for updating the contact's status (required for GDPR enabled portals). */
		legalBasis?: PublicSubscriptionStatusLegalBasis | null;

		/** A more detailed explanation to go with the legal basis (required for GDPR enabled portals). */
		legalBasisExplanation?: string | null;

		/**
		 * ID of the subscription being updated for the contact.
		 * Required
		 */
		subscriptionId: string;
	}

	/** A request to change the status of a contact's subscription. */
	export interface PublicUpdateSubscriptionStatusRequestFormProperties {

		/**
		 * Contact's email address.
		 * Required
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Legal basis for updating the contact's status (required for GDPR enabled portals). */
		legalBasis: FormControl<PublicSubscriptionStatusLegalBasis | null | undefined>,

		/** A more detailed explanation to go with the legal basis (required for GDPR enabled portals). */
		legalBasisExplanation: FormControl<string | null | undefined>,

		/**
		 * ID of the subscription being updated for the contact.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreatePublicUpdateSubscriptionStatusRequestFormGroup() {
		return new FormGroup<PublicUpdateSubscriptionStatusRequestFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			legalBasis: new FormControl<PublicSubscriptionStatusLegalBasis | null | undefined>(undefined),
			legalBasisExplanation: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionDefinition {

		/** The method or technology used to contact. */
		communicationMethod?: string | null;

		/**
		 * Time at which the definition was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * A description of the subscription.
		 * Required
		 */
		description: string;

		/**
		 * The ID of the definition.
		 * Required
		 */
		id: string;

		/**
		 * Whether the definition is active or archived.
		 * Required
		 */
		isActive: boolean;

		/**
		 * A subscription definition created by HubSpot.
		 * Required
		 */
		isDefault: boolean;

		/**
		 * A default description that is used by some HubSpot tools and cannot be edited.
		 * Required
		 */
		isInternal: boolean;

		/**
		 * The name of the subscription.
		 * Required
		 */
		name: string;

		/** The purpose of this subscription or the department in your organization that uses it. */
		purpose?: string | null;

		/**
		 * Time at which the definition was last updated.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface SubscriptionDefinitionFormProperties {

		/** The method or technology used to contact. */
		communicationMethod: FormControl<string | null | undefined>,

		/**
		 * Time at which the definition was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * A description of the subscription.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the definition.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether the definition is active or archived.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * A subscription definition created by HubSpot.
		 * Required
		 */
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * A default description that is used by some HubSpot tools and cannot be edited.
		 * Required
		 */
		isInternal: FormControl<boolean | null | undefined>,

		/**
		 * The name of the subscription.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The purpose of this subscription or the department in your organization that uses it. */
		purpose: FormControl<string | null | undefined>,

		/**
		 * Time at which the definition was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSubscriptionDefinitionFormGroup() {
		return new FormGroup<SubscriptionDefinitionFormProperties>({
			communicationMethod: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isInternal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purpose: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A collection of subscription definitions for the portal. */
	export interface SubscriptionDefinitionsResponse {

		/**
		 * A list of all subscription definitions.
		 * Required
		 */
		subscriptionDefinitions: Array<SubscriptionDefinition>;
	}

	/** A collection of subscription definitions for the portal. */
	export interface SubscriptionDefinitionsResponseFormProperties {
	}
	export function CreateSubscriptionDefinitionsResponseFormGroup() {
		return new FormGroup<SubscriptionDefinitionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get subscription definitions
		 * Get a list of all subscription definitions for the portal
		 * Get communication-preferences/v3/definitions
		 * @return {SubscriptionDefinitionsResponse} successful operation
		 */
		Get_Slashcommunication_preferencesSlashv3Slashdefinitions_getPage(): Observable<SubscriptionDefinitionsResponse> {
			return this.http.get<SubscriptionDefinitionsResponse>(this.baseUri + 'communication-preferences/v3/definitions', {});
		}

		/**
		 * Get subscription statuses for a contact
		 * Returns a list of subscriptions and their status for a given contact.
		 * Get communication-preferences/v3/status/email/{emailAddress}
		 * @return {PublicSubscriptionStatusesResponse} successful operation
		 */
		Get_Slashcommunication_preferencesSlashv3SlashstatusSlashemailSlashemailAddress_getEmailStatus(emailAddress: string): Observable<PublicSubscriptionStatusesResponse> {
			return this.http.get<PublicSubscriptionStatusesResponse>(this.baseUri + 'communication-preferences/v3/status/email/' + (emailAddress == null ? '' : encodeURIComponent(emailAddress)), {});
		}

		/**
		 * Subscribe a contact
		 * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
		 * Post communication-preferences/v3/subscribe
		 * @return {PublicSubscriptionStatus} successful operation
		 */
		Post_Slashcommunication_preferencesSlashv3Slashsubscribe_subscribe(requestBody: PublicUpdateSubscriptionStatusRequest): Observable<PublicSubscriptionStatus> {
			return this.http.post<PublicSubscriptionStatus>(this.baseUri + 'communication-preferences/v3/subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unsubscribe a contact
		 * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
		 * Post communication-preferences/v3/unsubscribe
		 * @return {PublicSubscriptionStatus} successful operation
		 */
		Post_Slashcommunication_preferencesSlashv3Slashunsubscribe_unsubscribe(requestBody: PublicUpdateSubscriptionStatusRequest): Observable<PublicSubscriptionStatus> {
			return this.http.post<PublicSubscriptionStatus>(this.baseUri + 'communication-preferences/v3/unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

