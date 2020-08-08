import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** JSON template for address of a customer. */
	export interface Address {

		/** A customer's physical address. An address can be composed of one to three lines. The addressline2 and addressLine3 are optional. */
		addressLine1?: string;

		/** Line 2 of the address. */
		addressLine2?: string;

		/** Line 3 of the address. */
		addressLine3?: string;

		/** The customer contact's name. This is required. */
		contactName?: string;

		/** For countryCode information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer. */
		countryCode?: string;

		/** Identifies the resource as a customer address. Value: customers#address */
		kind?: string;

		/** An example of a locality value is the city of San Francisco. */
		locality?: string;

		/** The company or company division name. This is required. */
		organizationName?: string;

		/** A postalCode example is a postal zip code such as 94043. This property is required when creating a new customer. */
		postalCode?: string;

		/** An example of a region value is CA for the state of California. */
		region?: string;
	}


	/** JSON template for the ChangePlan rpc request. */
	export interface ChangePlanRequest {

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in changePlan request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply. */
		dealCode?: string;

		/** Identifies the resource as a subscription change plan request. Value: subscriptions#changePlanRequest */
		kind?: string;

		/**
		 * The planName property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts.
		 * Possible values are:
		 * - ANNUAL_MONTHLY_PAY - The annual commitment plan with monthly payments  Caution: ANNUAL_MONTHLY_PAY is returned as ANNUAL in all API responses.
		 * - ANNUAL_YEARLY_PAY - The annual commitment plan with yearly payments
		 * - FLEXIBLE - The flexible plan
		 * - TRIAL - The 30-day free trial plan
		 */
		planName?: string;

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId?: string;

		/** JSON template for subscription seats. */
		seats?: Seats;
	}


	/** JSON template for subscription seats. */
	export interface Seats {

		/** Identifies the resource as a subscription seat setting. Value: subscriptions#seats */
		kind?: string;

		/** Read-only field containing the current number of users that are assigned a license for the product defined in skuId. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: listForProductAndSku */
		licensedNumberOfSeats?: number;

		/** This is a required property and is exclusive to subscriptions with FLEXIBLE or TRIAL plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. Note: G Suite subscriptions automatically assign a license to every user. */
		maximumNumberOfSeats?: number;

		/** This is a required property and is exclusive to subscriptions with ANNUAL_MONTHLY_PAY and ANNUAL_YEARLY_PAY plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the numberOfSeats cannot be reduced until renewal. The reseller is invoiced based on the numberOfSeats value regardless of how many of these user licenses are assigned. Note: G Suite subscriptions automatically assign a license to every user. */
		numberOfSeats?: number;
	}


	/** JSON template for a customer. */
	export interface Customer {

		/** Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new customer and should not use the same domain as customerDomain. */
		alternateEmail?: string;

		/** The customer's primary domain name string. customerDomain is required when creating a new customer. Do not include the www prefix in the domain when adding a customer. */
		customerDomain?: string;

		/** Whether the customer's primary domain has been verified. */
		customerDomainVerified?: boolean;

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId?: string;

		/** Identifies the resource as a customer. Value: reseller#customer */
		kind?: string;

		/** Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid. */
		phoneNumber?: string;

		/** JSON template for address of a customer. */
		postalAddress?: Address;

		/** URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console. */
		resourceUiUrl?: string;
	}


	/** JSON template for a subscription renewal settings. */
	export interface RenewalSettings {

		/** Identifies the resource as a subscription renewal setting. Value: subscriptions#renewalSettings */
		kind?: string;

		/** Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the renewalType is a required property. */
		renewalType?: string;
	}


	/** JSON template for resellernotify getwatchdetails response. */
	export interface ResellernotifyGetwatchdetailsResponse {

		/** List of registered service accounts. */
		serviceAccountEmailAddresses?: Array<string>;

		/** Topic name of the PubSub */
		topicName?: string;
	}


	/** JSON template for resellernotify response. */
	export interface ResellernotifyResource {

		/** Topic name of the PubSub */
		topicName?: string;
	}


	/** JSON template for a subscription. */
	export interface Subscription {

		/** Read-only field that returns the current billing method for a subscription. */
		billingMethod?: string;

		/** The creationTime property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter. */
		creationTime?: string;

		/** Primary domain name of the customer */
		customerDomain?: string;

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId?: string;

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in insert requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty. */
		dealCode?: string;

		/** Identifies the resource as a Subscription. Value: reseller#subscription */
		kind?: string;

		/** The plan property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts. */
		plan?: SubscriptionPlan;

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId?: string;

		/** JSON template for a subscription renewal settings. */
		renewalSettings?: RenewalSettings;

		/** URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console. */
		resourceUiUrl?: string;

		/** JSON template for subscription seats. */
		seats?: Seats;

		/** A required property. The skuId is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see  Product and SKU IDs. */
		skuId?: string;

		/** Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see  Product and SKU IDs. */
		skuName?: string;

		/** This is an optional property. */
		status?: string;

		/** The subscriptionId is the subscription identifier and is unique for each customer. This is a required property. Since a subscriptionId changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the subscriptionId as described in retrieve all reseller subscriptions. */
		subscriptionId?: string;

		/**
		 * Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's STATUS is SUSPENDED until all pending suspensions are removed.
		 * Possible options include:
		 * - PENDING_TOS_ACCEPTANCE - The customer has not logged in and accepted the G Suite Resold Terms of Services.
		 * - RENEWAL_WITH_TYPE_CANCEL - The customer's commitment ended and their service was cancelled at the end of their term.
		 * - RESELLER_INITIATED - A manual suspension invoked by a Reseller.
		 * - TRIAL_ENDED - The customer's trial expired without a plan selected.
		 * - OTHER - The customer is suspended for an internal Google reason (e.g. abuse or otherwise).
		 */
		suspensionReasons?: Array<string>;

		/** Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer. */
		transferInfo?: SubscriptionTransferInfo;

		/** The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts. */
		trialSettings?: SubscriptionTrialSettings;
	}

	export interface SubscriptionPlan {

		/** In this version of the API, annual commitment plan's interval is one year.  Note: When billingMethod value is OFFLINE, the subscription property object plan.commitmentInterval is omitted in all API responses. */
		commitmentInterval?: SubscriptionPlanCommitmentInterval;

		/**
		 * The isCommitmentPlan property's boolean value identifies the plan as an annual commitment plan:
		 * - true — The subscription's plan is an annual commitment plan.
		 * - false — The plan is not an annual commitment plan.
		 */
		isCommitmentPlan?: boolean;

		/**
		 * The planName property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts.
		 * Possible values are:
		 * - ANNUAL_MONTHLY_PAY — The annual commitment plan with monthly payments.  Caution: ANNUAL_MONTHLY_PAY is returned as ANNUAL in all API responses.
		 * - ANNUAL_YEARLY_PAY — The annual commitment plan with yearly payments
		 * - FLEXIBLE — The flexible plan
		 * - TRIAL — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling changePlan will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling startPaidService.
		 * - FREE — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing.
		 */
		planName?: string;
	}

	export interface SubscriptionPlanCommitmentInterval {

		/** An annual commitment plan's interval's endTime in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		endTime?: string;

		/** An annual commitment plan's interval's startTime in milliseconds using UNIX Epoch format. See an example Epoch converter. */
		startTime?: string;
	}

	export interface SubscriptionTransferInfo {

		/** When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats. */
		minimumTransferableSeats?: number;

		/** The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format. */
		transferabilityExpirationTime?: string;
	}

	export interface SubscriptionTrialSettings {

		/**
		 * Determines if a subscription's plan is in a 30-day free trial or not:
		 * - true — The plan is in trial.
		 * - false — The plan is not in trial.
		 */
		isInTrial?: boolean;

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		trialEndTime?: string;
	}


	/** JSON template for a subscription list. */
	export interface Subscriptions {

		/** Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions */
		kind?: string;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string;

		/** The subscriptions in this page of results. */
		subscriptions?: Array<Subscription>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Order a new customer's account.
		 * Post customers
		 * @param {string} customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @return {void} Successful response
		 */
		Reseller_customers_insert(customerAuthToken: string, requestBody: Customer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers?customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a customer account.
		 * Get customers/{customerId}
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @return {void} Successful response
		 */
		Reseller_customers_get(customerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a customer account's settings. This method supports patch semantics.
		 * Patch customers/{customerId}
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @return {void} Successful response
		 */
		Reseller_customers_patch(customerId: string, requestBody: Customer): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a customer account's settings.
		 * Put customers/{customerId}
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @return {void} Successful response
		 */
		Reseller_customers_update(customerId: string, requestBody: Customer): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or transfer a subscription.
		 * Post customers/{customerId}/subscriptions
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_insert(customerId: string, customerAuthToken: string, requestBody: Subscription): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions&customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel, suspend, or transfer a subscription to direct.
		 * Delete customers/{customerId}/subscriptions/{subscriptionId}
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @param {Reseller_subscriptions_deleteDeletionType} deletionType The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_delete(customerId: string, subscriptionId: string, deletionType: Reseller_subscriptions_deleteDeletionType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '&deletionType=' + deletionType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific subscription.
		 * Get customers/{customerId}/subscriptions/{subscriptionId}
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_get(customerId: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activates a subscription previously suspended by the reseller
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/activate
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_activate(customerId: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/activate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/changePlan
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_changePlan(customerId: string, subscriptionId: string, requestBody: ChangePlanRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changePlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_changeRenewalSettings(customerId: string, subscriptionId: string, requestBody: RenewalSettings): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changeRenewalSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a subscription's user license settings.
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/changeSeats
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_changeSeats(customerId: string, subscriptionId: string, requestBody: Seats): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changeSeats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately move a 30-day free trial subscription to a paid service subscription.
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/startPaidService
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_startPaidService(customerId: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/startPaidService', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Suspends an active subscription.
		 * Post customers/{customerId}/subscriptions/{subscriptionId}/suspend
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_suspend(customerId: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/suspend', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the details of the watch corresponding to the reseller.
		 * Get resellernotify/getwatchdetails
		 * @return {void} Successful response
		 */
		Reseller_resellernotify_getwatchdetails(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'resellernotify/getwatchdetails', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Registers a Reseller for receiving notifications.
		 * Post resellernotify/register
		 * @param {string} serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
		 * @return {void} Successful response
		 */
		Reseller_resellernotify_register(serviceAccountEmailAddress: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resellernotify/register?serviceAccountEmailAddress=' + (serviceAccountEmailAddress == null ? '' : encodeURIComponent(serviceAccountEmailAddress)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unregisters a Reseller for receiving notifications.
		 * Post resellernotify/unregister
		 * @param {string} serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
		 * @return {void} Successful response
		 */
		Reseller_resellernotify_unregister(serviceAccountEmailAddress: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resellernotify/unregister?serviceAccountEmailAddress=' + (serviceAccountEmailAddress == null ? '' : encodeURIComponent(serviceAccountEmailAddress)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.
		 * Get subscriptions
		 * @param {string} customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @param {string} customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
		 * @param {string} customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com:  
		 * - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*. 
		 * - example -- Returns example20.com and example.com.
		 * @param {number} maxResults When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
		 * @param {string} pageToken Token to specify next page in the list
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_list(customerAuthToken: string, customerId: string, customerNamePrefix: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions?customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&customerNamePrefix=' + (customerNamePrefix == null ? '' : encodeURIComponent(customerNamePrefix)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Reseller_subscriptions_deleteDeletionType { cancel = 0, transfer_to_direct = 1 }

}

