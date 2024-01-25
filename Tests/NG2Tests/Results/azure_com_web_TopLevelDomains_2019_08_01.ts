import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Legal agreement for a top level domain. */
	export interface TldLegalAgreement {

		/**
		 * Unique identifier for the agreement.
		 * Required
		 */
		agreementKey: string;

		/**
		 * Agreement details.
		 * Required
		 */
		content: string;

		/**
		 * Agreement title.
		 * Required
		 */
		title: string;

		/** URL where a copy of the agreement details is hosted. */
		url?: string | null;
	}

	/** Legal agreement for a top level domain. */
	export interface TldLegalAgreementFormProperties {

		/**
		 * Unique identifier for the agreement.
		 * Required
		 */
		agreementKey: FormControl<string | null | undefined>,

		/**
		 * Agreement details.
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Agreement title.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** URL where a copy of the agreement details is hosted. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTldLegalAgreementFormGroup() {
		return new FormGroup<TldLegalAgreementFormProperties>({
			agreementKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of top-level domain legal agreements. */
	export interface TldLegalAgreementCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<TldLegalAgreement>;
	}

	/** Collection of top-level domain legal agreements. */
	export interface TldLegalAgreementCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTldLegalAgreementCollectionFormGroup() {
		return new FormGroup<TldLegalAgreementCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A top level domain object. */
	export interface TopLevelDomain {

		/** TopLevelDomain resource specific properties */
		properties?: any;
	}

	/** A top level domain object. */
	export interface TopLevelDomainFormProperties {

		/** TopLevelDomain resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateTopLevelDomainFormGroup() {
		return new FormGroup<TopLevelDomainFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Options for retrieving the list of top level domain legal agreements. */
	export interface TopLevelDomainAgreementOption {

		/** If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>. */
		forTransfer?: boolean | null;

		/** If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>. */
		includePrivacy?: boolean | null;
	}

	/** Options for retrieving the list of top level domain legal agreements. */
	export interface TopLevelDomainAgreementOptionFormProperties {

		/** If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>. */
		forTransfer: FormControl<boolean | null | undefined>,

		/** If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>. */
		includePrivacy: FormControl<boolean | null | undefined>,
	}
	export function CreateTopLevelDomainAgreementOptionFormGroup() {
		return new FormGroup<TopLevelDomainAgreementOptionFormProperties>({
			forTransfer: new FormControl<boolean | null | undefined>(undefined),
			includePrivacy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Collection of Top-level domains. */
	export interface TopLevelDomainCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<TopLevelDomain>;
	}

	/** Collection of Top-level domains. */
	export interface TopLevelDomainCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTopLevelDomainCollectionFormGroup() {
		return new FormGroup<TopLevelDomainCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all top-level domains supported for registration.
		 * Description for Get all top-level domains supported for registration.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TopLevelDomainCollection} OK
		 */
		TopLevelDomains_List(subscriptionId: string, api_version: string): Observable<TopLevelDomainCollection> {
			return this.http.get<TopLevelDomainCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/topLevelDomains&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get details of a top-level domain.
		 * Description for Get details of a top-level domain.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}
		 * @param {string} name Name of the top-level domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {TopLevelDomain} OK
		 */
		TopLevelDomains_Get(name: string, subscriptionId: string, api_version: string): Observable<TopLevelDomain> {
			return this.http.get<TopLevelDomain>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/topLevelDomains/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all legal agreements that user needs to accept before purchasing a domain.
		 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}/listAgreements
		 * @param {string} name Name of the top-level domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {TopLevelDomainAgreementOption} requestBody Domain agreement options.
		 * @return {TldLegalAgreementCollection} OK
		 */
		TopLevelDomains_ListAgreements(name: string, subscriptionId: string, api_version: string, requestBody: TopLevelDomainAgreementOption): Observable<TldLegalAgreementCollection> {
			return this.http.post<TldLegalAgreementCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/topLevelDomains/' + (name == null ? '' : encodeURIComponent(name)) + '/listAgreements&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

