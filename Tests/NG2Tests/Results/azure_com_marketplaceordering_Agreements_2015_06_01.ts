import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Agreement Terms definition */
	export interface AgreementProperties {

		/** If any version of the terms have been accepted, otherwise false. */
		accepted?: boolean | null;

		/** Link to HTML with Microsoft and Publisher terms. */
		licenseTextLink?: string | null;

		/** Plan identifier string of image being deployed. */
		plan?: string | null;

		/** Link to the privacy policy of the publisher. */
		privacyPolicyLink?: string | null;

		/** Offer identifier string of image being deployed. */
		product?: string | null;

		/** Publisher identifier string of image being deployed. */
		publisher?: string | null;

		/** Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. */
		retrieveDatetime?: Date | null;

		/** Terms signature. */
		signature?: string | null;
	}

	/** Agreement Terms definition */
	export interface AgreementPropertiesFormProperties {

		/** If any version of the terms have been accepted, otherwise false. */
		accepted: FormControl<boolean | null | undefined>,

		/** Link to HTML with Microsoft and Publisher terms. */
		licenseTextLink: FormControl<string | null | undefined>,

		/** Plan identifier string of image being deployed. */
		plan: FormControl<string | null | undefined>,

		/** Link to the privacy policy of the publisher. */
		privacyPolicyLink: FormControl<string | null | undefined>,

		/** Offer identifier string of image being deployed. */
		product: FormControl<string | null | undefined>,

		/** Publisher identifier string of image being deployed. */
		publisher: FormControl<string | null | undefined>,

		/** Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. */
		retrieveDatetime: FormControl<Date | null | undefined>,

		/** Terms signature. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateAgreementPropertiesFormGroup() {
		return new FormGroup<AgreementPropertiesFormProperties>({
			accepted: new FormControl<boolean | null | undefined>(undefined),
			licenseTextLink: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			privacyPolicyLink: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			retrieveDatetime: new FormControl<Date | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Terms properties for provided Publisher/Offer/Plan tuple */
	export interface AgreementTerms extends Resource {

		/** Agreement Terms definition */
		properties?: AgreementProperties;
	}

	/** Terms properties for provided Publisher/Offer/Plan tuple */
	export interface AgreementTermsFormProperties extends ResourceFormProperties {
	}
	export function CreateAgreementTermsFormGroup() {
		return new FormGroup<AgreementTermsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates Microsoft.MarketplaceOrdering service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** The details of the error. */
		error?: any;
	}

	/** Error response indicates Microsoft.MarketplaceOrdering service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** The details of the error. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Microsoft.MarketplaceOrdering REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.MarketplaceOrdering REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list MarketplaceOrdering operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.MarketplaceOrdering operations supported by the Microsoft.MarketplaceOrdering resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list MarketplaceOrdering operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.MarketplaceOrdering REST API operations.
		 * Get providers/Microsoft.MarketplaceOrdering/operations
		 * @param {string} api_version The API version to use for the request.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.MarketplaceOrdering/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List marketplace agreements in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @return {Array<AgreementTerms>} Terms returned successfully
		 */
		MarketplaceAgreements_List(api_version: string, subscriptionId: string): Observable<Array<AgreementTerms>> {
			return this.http.get<Array<AgreementTerms>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/agreements?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get marketplace agreement.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} publisherId Publisher identifier string of image being deployed.
		 * @param {string} offerId Offer identifier string of image being deployed.
		 * @param {string} planId Plan identifier string of image being deployed.
		 * @return {AgreementTerms} Terms returned successfully
		 */
		MarketplaceAgreements_GetAgreement(api_version: string, subscriptionId: string, publisherId: string, offerId: string, planId: string): Observable<AgreementTerms> {
			return this.http.get<AgreementTerms>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/agreements/' + (publisherId == null ? '' : encodeURIComponent(publisherId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '/plans/' + (planId == null ? '' : encodeURIComponent(planId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Cancel marketplace terms.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/cancel
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} publisherId Publisher identifier string of image being deployed.
		 * @param {string} offerId Offer identifier string of image being deployed.
		 * @param {string} planId Plan identifier string of image being deployed.
		 * @return {AgreementTerms} OK. The request was successfully processed and the terms were rejected.
		 */
		MarketplaceAgreements_Cancel(api_version: string, subscriptionId: string, publisherId: string, offerId: string, planId: string): Observable<AgreementTerms> {
			return this.http.post<AgreementTerms>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/agreements/' + (publisherId == null ? '' : encodeURIComponent(publisherId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '/plans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/cancel?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Sign marketplace terms.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/sign
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} publisherId Publisher identifier string of image being deployed.
		 * @param {string} offerId Offer identifier string of image being deployed.
		 * @param {string} planId Plan identifier string of image being deployed.
		 * @return {AgreementTerms} OK. The request was successfully processed and the terms were accepted.
		 */
		MarketplaceAgreements_Sign(api_version: string, subscriptionId: string, publisherId: string, offerId: string, planId: string): Observable<AgreementTerms> {
			return this.http.post<AgreementTerms>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/agreements/' + (publisherId == null ? '' : encodeURIComponent(publisherId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '/plans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/sign?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get marketplace terms.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {MarketplaceAgreements_GetOfferType} offerType Offer Type, currently only virtualmachine type is supported.
		 * @param {string} publisherId Publisher identifier string of image being deployed.
		 * @param {string} offerId Offer identifier string of image being deployed.
		 * @param {string} planId Plan identifier string of image being deployed.
		 * @return {AgreementTerms} Terms returned successfully
		 */
		MarketplaceAgreements_Get(api_version: string, subscriptionId: string, offerType: MarketplaceAgreements_GetOfferType, publisherId: string, offerId: string, planId: string): Observable<AgreementTerms> {
			return this.http.get<AgreementTerms>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/offerTypes/' + offerType + '/publishers/' + (publisherId == null ? '' : encodeURIComponent(publisherId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '/plans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/agreements/current?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Save marketplace terms.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current
		 * @param {string} api_version The API version to use for the request.
		 * @param {MarketplaceAgreements_GetOfferType} offerType Offer Type, currently only virtualmachine type is supported.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} publisherId Publisher identifier string of image being deployed.
		 * @param {string} offerId Offer identifier string of image being deployed.
		 * @param {string} planId Plan identifier string of image being deployed.
		 * @param {AgreementTerms} requestBody Parameters supplied to the Create Marketplace Terms operation.
		 * @return {AgreementTerms} OK. The request was successfully processed and the terms were accepted or acceptance revoked as per the request body.
		 */
		MarketplaceAgreements_Create(api_version: string, offerType: MarketplaceAgreements_GetOfferType, subscriptionId: string, publisherId: string, offerId: string, planId: string, requestBody: AgreementTerms): Observable<AgreementTerms> {
			return this.http.put<AgreementTerms>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MarketplaceOrdering/offerTypes/' + offerType + '/publishers/' + (publisherId == null ? '' : encodeURIComponent(publisherId)) + '/offers/' + (offerId == null ? '' : encodeURIComponent(offerId)) + '/plans/' + (planId == null ? '' : encodeURIComponent(planId)) + '/agreements/current?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum MarketplaceAgreements_GetOfferType { virtualmachine = 'virtualmachine' }

}

