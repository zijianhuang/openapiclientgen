import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Address information for domain registration. */
	export interface Address {

		/**
		 * First line of an Address.
		 * Required
		 */
		address1: string;

		/** The second line of the Address. Optional. */
		address2?: string | null;

		/**
		 * The city for the address.
		 * Required
		 */
		city: string;

		/**
		 * The country for the address.
		 * Required
		 */
		country: string;

		/**
		 * The postal code for the address.
		 * Required
		 */
		postalCode: string;

		/**
		 * The state or province for the address.
		 * Required
		 */
		state: string;
	}

	/** Address information for domain registration. */
	export interface AddressFormProperties {

		/**
		 * First line of an Address.
		 * Required
		 */
		address1: FormControl<string | null | undefined>,

		/** The second line of the Address. Optional. */
		address2: FormControl<string | null | undefined>,

		/**
		 * The city for the address.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country for the address.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The postal code for the address.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The state or province for the address.
		 * Required
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
	 * directories as per ICANN requirements.
	 */
	export interface Contact {

		/** Address information for domain registration. */
		addressMailing?: Address;

		/**
		 * Email address.
		 * Required
		 */
		email: string;

		/** Fax number. */
		fax?: string | null;

		/** Job title. */
		jobTitle?: string | null;

		/**
		 * First name.
		 * Required
		 */
		nameFirst: string;

		/**
		 * Last name.
		 * Required
		 */
		nameLast: string;

		/** Middle name. */
		nameMiddle?: string | null;

		/** Organization contact belongs to. */
		organization?: string | null;

		/**
		 * Phone number.
		 * Required
		 */
		phone: string;
	}

	/**
	 * Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
	 * directories as per ICANN requirements.
	 */
	export interface ContactFormProperties {

		/**
		 * Email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** Fax number. */
		fax: FormControl<string | null | undefined>,

		/** Job title. */
		jobTitle: FormControl<string | null | undefined>,

		/**
		 * First name.
		 * Required
		 */
		nameFirst: FormControl<string | null | undefined>,

		/**
		 * Last name.
		 * Required
		 */
		nameLast: FormControl<string | null | undefined>,

		/** Middle name. */
		nameMiddle: FormControl<string | null | undefined>,

		/** Organization contact belongs to. */
		organization: FormControl<string | null | undefined>,

		/**
		 * Phone number.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fax: new FormControl<string | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			nameFirst: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameLast: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameMiddle: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a domain. */
	export interface Domain {

		/** Domain resource specific properties */
		properties?: any;
	}

	/** Information about a domain. */
	export interface DomainFormProperties {

		/** Domain resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Domain availability check result. */
	export interface DomainAvailabilityCheckResult {

		/** <code>true</code> if domain can be purchased using CreateDomain API; otherwise, <code>false</code>. */
		available?: boolean | null;

		/** Valid values are Regular domain: Azure will charge the full price of domain registration, SoftDeleted: Purchasing this domain will simply restore it and this operation will not cost anything. */
		domainType?: DomainAvailabilityCheckResultDomainType | null;

		/** Name of the domain. */
		name?: string | null;
	}

	/** Domain availability check result. */
	export interface DomainAvailabilityCheckResultFormProperties {

		/** <code>true</code> if domain can be purchased using CreateDomain API; otherwise, <code>false</code>. */
		available: FormControl<boolean | null | undefined>,

		/** Valid values are Regular domain: Azure will charge the full price of domain registration, SoftDeleted: Purchasing this domain will simply restore it and this operation will not cost anything. */
		domainType: FormControl<DomainAvailabilityCheckResultDomainType | null | undefined>,

		/** Name of the domain. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomainAvailabilityCheckResultFormGroup() {
		return new FormGroup<DomainAvailabilityCheckResultFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			domainType: new FormControl<DomainAvailabilityCheckResultDomainType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainAvailabilityCheckResultDomainType { Regular = 'Regular', SoftDeleted = 'SoftDeleted' }


	/** Collection of domains. */
	export interface DomainCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Domain>;
	}

	/** Collection of domains. */
	export interface DomainCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainCollectionFormGroup() {
		return new FormGroup<DomainCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Single sign-on request information for domain management. */
	export interface DomainControlCenterSsoRequest {

		/** Post parameter key. */
		postParameterKey?: string | null;

		/** Post parameter value. Client should use 'application/x-www-form-urlencoded' encoding for this value. */
		postParameterValue?: string | null;

		/** URL where the single sign-on request is to be made. */
		url?: string | null;
	}

	/** Single sign-on request information for domain management. */
	export interface DomainControlCenterSsoRequestFormProperties {

		/** Post parameter key. */
		postParameterKey: FormControl<string | null | undefined>,

		/** Post parameter value. Client should use 'application/x-www-form-urlencoded' encoding for this value. */
		postParameterValue: FormControl<string | null | undefined>,

		/** URL where the single sign-on request is to be made. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDomainControlCenterSsoRequestFormGroup() {
		return new FormGroup<DomainControlCenterSsoRequestFormProperties>({
			postParameterKey: new FormControl<string | null | undefined>(undefined),
			postParameterValue: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Domain ownership Identifier. */
	export interface DomainOwnershipIdentifier {

		/** DomainOwnershipIdentifier resource specific properties */
		properties?: any;
	}

	/** Domain ownership Identifier. */
	export interface DomainOwnershipIdentifierFormProperties {

		/** DomainOwnershipIdentifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDomainOwnershipIdentifierFormGroup() {
		return new FormGroup<DomainOwnershipIdentifierFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of domain ownership identifiers. */
	export interface DomainOwnershipIdentifierCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<DomainOwnershipIdentifier>;
	}

	/** Collection of domain ownership identifiers. */
	export interface DomainOwnershipIdentifierCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainOwnershipIdentifierCollectionFormGroup() {
		return new FormGroup<DomainOwnershipIdentifierCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM resource for a domain. */
	export interface DomainPatchResource {

		/** DomainPatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a domain. */
	export interface DomainPatchResourceFormProperties {

		/** DomainPatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDomainPatchResourceFormGroup() {
		return new FormGroup<DomainPatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Domain purchase consent object, representing acceptance of applicable legal agreements. */
	export interface DomainPurchaseConsent {

		/** Timestamp when the agreements were accepted. */
		agreedAt?: Date | null;

		/** Client IP address. */
		agreedBy?: string | null;

		/** List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource. */
		agreementKeys?: Array<string>;
	}

	/** Domain purchase consent object, representing acceptance of applicable legal agreements. */
	export interface DomainPurchaseConsentFormProperties {

		/** Timestamp when the agreements were accepted. */
		agreedAt: FormControl<Date | null | undefined>,

		/** Client IP address. */
		agreedBy: FormControl<string | null | undefined>,
	}
	export function CreateDomainPurchaseConsentFormGroup() {
		return new FormGroup<DomainPurchaseConsentFormProperties>({
			agreedAt: new FormControl<Date | null | undefined>(undefined),
			agreedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Domain recommendation search parameters. */
	export interface DomainRecommendationSearchParameters {

		/** Keywords to be used for generating domain recommendations. */
		keywords?: string | null;

		/**
		 * Maximum number of recommendations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDomainRecommendations?: number | null;
	}

	/** Domain recommendation search parameters. */
	export interface DomainRecommendationSearchParametersFormProperties {

		/** Keywords to be used for generating domain recommendations. */
		keywords: FormControl<string | null | undefined>,

		/**
		 * Maximum number of recommendations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDomainRecommendations: FormControl<number | null | undefined>,
	}
	export function CreateDomainRecommendationSearchParametersFormGroup() {
		return new FormGroup<DomainRecommendationSearchParametersFormProperties>({
			keywords: new FormControl<string | null | undefined>(undefined),
			maxDomainRecommendations: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a hostname derived from a domain. */
	export interface HostName {

		/** Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name. */
		azureResourceName?: string | null;

		/** Type of the Azure resource the hostname is assigned to. */
		azureResourceType?: HostNameAzureResourceType | null;

		/** Type of the DNS record. */
		customHostNameDnsRecordType?: HostNameCustomHostNameDnsRecordType | null;

		/** Type of the hostname. */
		hostNameType?: HostNameHostNameType | null;

		/** Name of the hostname. */
		name?: string | null;

		/** List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager. */
		siteNames?: Array<string>;
	}

	/** Details of a hostname derived from a domain. */
	export interface HostNameFormProperties {

		/** Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name. */
		azureResourceName: FormControl<string | null | undefined>,

		/** Type of the Azure resource the hostname is assigned to. */
		azureResourceType: FormControl<HostNameAzureResourceType | null | undefined>,

		/** Type of the DNS record. */
		customHostNameDnsRecordType: FormControl<HostNameCustomHostNameDnsRecordType | null | undefined>,

		/** Type of the hostname. */
		hostNameType: FormControl<HostNameHostNameType | null | undefined>,

		/** Name of the hostname. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHostNameFormGroup() {
		return new FormGroup<HostNameFormProperties>({
			azureResourceName: new FormControl<string | null | undefined>(undefined),
			azureResourceType: new FormControl<HostNameAzureResourceType | null | undefined>(undefined),
			customHostNameDnsRecordType: new FormControl<HostNameCustomHostNameDnsRecordType | null | undefined>(undefined),
			hostNameType: new FormControl<HostNameHostNameType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HostNameAzureResourceType { Website = 'Website', TrafficManager = 'TrafficManager' }

	export enum HostNameCustomHostNameDnsRecordType { CName = 'CName', A = 'A' }

	export enum HostNameHostNameType { Verified = 'Verified', Managed = 'Managed' }


	/** Collection of domain name identifiers. */
	export interface NameIdentifierCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		NameIdentifierCollectionValue: Array<NameIdentifierCollectionValue>;
	}

	/** Collection of domain name identifiers. */
	export interface NameIdentifierCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNameIdentifierCollectionFormGroup() {
		return new FormGroup<NameIdentifierCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameIdentifierCollectionValue {

		/** Name of the object. */
		name?: string | null;
	}
	export interface NameIdentifierCollectionValueFormProperties {

		/** Name of the object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameIdentifierCollectionValueFormGroup() {
		return new FormGroup<NameIdentifierCollectionValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check if a domain is available for registration.
		 * Description for Check if a domain is available for registration.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {Domains_CheckAvailabilityPostBody} requestBody Name of the domain.
		 * @return {DomainAvailabilityCheckResult} OK
		 */
		Domains_CheckAvailability(subscriptionId: string, api_version: string, requestBody: Domains_CheckAvailabilityPostBody): Observable<DomainAvailabilityCheckResult> {
			return this.http.post<DomainAvailabilityCheckResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/checkDomainAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all domains in a subscription.
		 * Description for Get all domains in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DomainCollection} OK
		 */
		Domains_List(subscriptionId: string, api_version: string): Observable<DomainCollection> {
			return this.http.get<DomainCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/domains&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Generate a single sign-on request for the domain management portal.
		 * Description for Generate a single sign-on request for the domain management portal.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DomainControlCenterSsoRequest} OK
		 */
		Domains_GetControlCenterSsoRequest(subscriptionId: string, api_version: string): Observable<DomainControlCenterSsoRequest> {
			return this.http.post<DomainControlCenterSsoRequest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/generateSsoRequest&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get domain name recommendations based on keywords.
		 * Description for Get domain name recommendations based on keywords.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DomainRecommendationSearchParameters} requestBody Search parameters for domain name recommendations.
		 * @return {NameIdentifierCollection} OK
		 */
		Domains_ListRecommendations(subscriptionId: string, api_version: string, requestBody: DomainRecommendationSearchParameters): Observable<NameIdentifierCollection> {
			return this.http.post<NameIdentifierCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DomainRegistration/listDomainRecommendations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all domains in a resource group.
		 * Description for Get all domains in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DomainCollection} OK
		 */
		Domains_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<DomainCollection> {
			return this.http.get<DomainCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a domain.
		 * Description for Get a domain.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of the domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Domain} OK
		 */
		Domains_Get(resourceGroupName: string, domainName: string, subscriptionId: string, api_version: string): Observable<Domain> {
			return this.http.get<Domain>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a domain.
		 * Description for Creates or updates a domain.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of the domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {Domain} requestBody Domain registration information.
		 * @return {Domain} Domain purchase was successful.
		 */
		Domains_CreateOrUpdate(resourceGroupName: string, domainName: string, subscriptionId: string, api_version: string, requestBody: Domain): Observable<Domain> {
			return this.http.put<Domain>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a domain.
		 * Description for Delete a domain.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of the domain.
		 * @param {boolean} forceHardDeleteDomain Specify <code>true</code> to delete the domain immediately. The default is <code>false</code> which deletes the domain after 24 hours.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted domain.
		 */
		Domains_Delete(resourceGroupName: string, domainName: string, forceHardDeleteDomain: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&forceHardDeleteDomain=' + forceHardDeleteDomain + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a domain.
		 * Description for Creates or updates a domain.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of the domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DomainPatchResource} requestBody Domain registration information.
		 * @return {Domain} Domain purchase was successful.
		 */
		Domains_Update(resourceGroupName: string, domainName: string, subscriptionId: string, api_version: string, requestBody: DomainPatchResource): Observable<Domain> {
			return this.http.patch<Domain>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists domain ownership identifiers.
		 * Description for Lists domain ownership identifiers.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DomainOwnershipIdentifierCollection} OK
		 */
		Domains_ListOwnershipIdentifiers(resourceGroupName: string, domainName: string, subscriptionId: string, api_version: string): Observable<DomainOwnershipIdentifierCollection> {
			return this.http.get<DomainOwnershipIdentifierCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/domainOwnershipIdentifiers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get ownership identifier for domain
		 * Description for Get ownership identifier for domain
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of domain.
		 * @param {string} name Name of identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DomainOwnershipIdentifier} OK
		 */
		Domains_GetOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, subscriptionId: string, api_version: string): Observable<DomainOwnershipIdentifier> {
			return this.http.get<DomainOwnershipIdentifier>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/domainOwnershipIdentifiers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an ownership identifier for a domain or updates identifier details for an existing identifer
		 * Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifer
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of domain.
		 * @param {string} name Name of identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DomainOwnershipIdentifier} requestBody A JSON representation of the domain ownership properties.
		 * @return {DomainOwnershipIdentifier} OK
		 */
		Domains_CreateOrUpdateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, subscriptionId: string, api_version: string, requestBody: DomainOwnershipIdentifier): Observable<DomainOwnershipIdentifier> {
			return this.http.put<DomainOwnershipIdentifier>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/domainOwnershipIdentifiers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete ownership identifier for domain
		 * Description for Delete ownership identifier for domain
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of domain.
		 * @param {string} name Name of identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted domain ownership identifier.
		 */
		Domains_DeleteOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/domainOwnershipIdentifiers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an ownership identifier for a domain or updates identifier details for an existing identifer
		 * Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifer
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of domain.
		 * @param {string} name Name of identifier.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {DomainOwnershipIdentifier} requestBody A JSON representation of the domain ownership properties.
		 * @return {DomainOwnershipIdentifier} OK
		 */
		Domains_UpdateOwnershipIdentifier(resourceGroupName: string, domainName: string, name: string, subscriptionId: string, api_version: string, requestBody: DomainOwnershipIdentifier): Observable<DomainOwnershipIdentifier> {
			return this.http.patch<DomainOwnershipIdentifier>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/domainOwnershipIdentifiers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renew a domain.
		 * Description for Renew a domain.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} domainName Name of the domain.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Domain renewal was successful.
		 */
		Domains_Renew(resourceGroupName: string, domainName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DomainRegistration/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/renew&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface Domains_CheckAvailabilityPostBody {

		/** Name of the object. */
		name?: string | null;
	}
	export interface Domains_CheckAvailabilityPostBodyFormProperties {

		/** Name of the object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomains_CheckAvailabilityPostBodyFormGroup() {
		return new FormGroup<Domains_CheckAvailabilityPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

