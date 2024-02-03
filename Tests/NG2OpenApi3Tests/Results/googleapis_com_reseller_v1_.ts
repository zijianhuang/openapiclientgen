import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** JSON template for address of a customer. */
	export interface Address {

		/** A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3` are optional. */
		addressLine1?: string | null;

		/** Line 2 of the address. */
		addressLine2?: string | null;

		/** Line 3 of the address. */
		addressLine3?: string | null;

		/** The customer contact's name. This is required. */
		contactName?: string | null;

		/** For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer. */
		countryCode?: string | null;

		/** Identifies the resource as a customer address. Value: `customers#address` */
		kind?: string | null;

		/** An example of a `locality` value is the city of `San Francisco`. */
		locality?: string | null;

		/** The company or company division name. This is required. */
		organizationName?: string | null;

		/** A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer. */
		postalCode?: string | null;

		/** An example of a `region` value is `CA` for the state of California. */
		region?: string | null;
	}

	/** JSON template for address of a customer. */
	export interface AddressFormProperties {

		/** A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3` are optional. */
		addressLine1: FormControl<string | null | undefined>,

		/** Line 2 of the address. */
		addressLine2: FormControl<string | null | undefined>,

		/** Line 3 of the address. */
		addressLine3: FormControl<string | null | undefined>,

		/** The customer contact's name. This is required. */
		contactName: FormControl<string | null | undefined>,

		/** For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer. */
		countryCode: FormControl<string | null | undefined>,

		/** Identifies the resource as a customer address. Value: `customers#address` */
		kind: FormControl<string | null | undefined>,

		/** An example of a `locality` value is the city of `San Francisco`. */
		locality: FormControl<string | null | undefined>,

		/** The company or company division name. This is required. */
		organizationName: FormControl<string | null | undefined>,

		/** A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer. */
		postalCode: FormControl<string | null | undefined>,

		/** An example of a `region` value is `CA` for the state of California. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			addressLine3: new FormControl<string | null | undefined>(undefined),
			contactName: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organizationName: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for the ChangePlan rpc request. */
	export interface ChangePlanRequest {

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply. */
		dealCode?: string | null;

		/** Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest` */
		kind?: string | null;

		/** The `planName` property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` - The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan */
		planName?: string | null;

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId?: string | null;

		/** JSON template for subscription seats. */
		seats?: Seats;
	}

	/** JSON template for the ChangePlan rpc request. */
	export interface ChangePlanRequestFormProperties {

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply. */
		dealCode: FormControl<string | null | undefined>,

		/** Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest` */
		kind: FormControl<string | null | undefined>,

		/** The `planName` property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` - The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan */
		planName: FormControl<string | null | undefined>,

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId: FormControl<string | null | undefined>,
	}
	export function CreateChangePlanRequestFormGroup() {
		return new FormGroup<ChangePlanRequestFormProperties>({
			dealCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			planName: new FormControl<string | null | undefined>(undefined),
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for subscription seats. */
	export interface Seats {

		/** Identifies the resource as a subscription seat setting. Value: `subscriptions#seats` */
		kind?: string | null;

		/** Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku). */
		licensedNumberOfSeats?: number | null;

		/** This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user. */
		maximumNumberOfSeats?: number | null;

		/** This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user. */
		numberOfSeats?: number | null;
	}

	/** JSON template for subscription seats. */
	export interface SeatsFormProperties {

		/** Identifies the resource as a subscription seat setting. Value: `subscriptions#seats` */
		kind: FormControl<string | null | undefined>,

		/** Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku). */
		licensedNumberOfSeats: FormControl<number | null | undefined>,

		/** This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user. */
		maximumNumberOfSeats: FormControl<number | null | undefined>,

		/** This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user. */
		numberOfSeats: FormControl<number | null | undefined>,
	}
	export function CreateSeatsFormGroup() {
		return new FormGroup<SeatsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			licensedNumberOfSeats: new FormControl<number | null | undefined>(undefined),
			maximumNumberOfSeats: new FormControl<number | null | undefined>(undefined),
			numberOfSeats: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address. */
	export interface Customer {

		/** Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer. */
		alternateEmail?: string | null;

		/** The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer. */
		customerDomain?: string | null;

		/** Whether the customer's primary domain has been verified. */
		customerDomainVerified?: boolean | null;

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId?: string | null;

		/** Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479). */
		customerType?: CustomerCustomerType | null;

		/** Identifies the resource as a customer. Value: `reseller#customer` */
		kind?: string | null;

		/** Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid. */
		phoneNumber?: string | null;

		/** JSON template for address of a customer. */
		postalAddress?: Address;

		/** JSON template for primary admin in case of TEAM customers */
		primaryAdmin?: PrimaryAdmin;

		/** URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console. */
		resourceUiUrl?: string | null;
	}

	/** When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address. */
	export interface CustomerFormProperties {

		/** Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer. */
		alternateEmail: FormControl<string | null | undefined>,

		/** The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer. */
		customerDomain: FormControl<string | null | undefined>,

		/** Whether the customer's primary domain has been verified. */
		customerDomainVerified: FormControl<boolean | null | undefined>,

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId: FormControl<string | null | undefined>,

		/** Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479). */
		customerType: FormControl<CustomerCustomerType | null | undefined>,

		/** Identifies the resource as a customer. Value: `reseller#customer` */
		kind: FormControl<string | null | undefined>,

		/** Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid. */
		phoneNumber: FormControl<string | null | undefined>,

		/** URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console. */
		resourceUiUrl: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			alternateEmail: new FormControl<string | null | undefined>(undefined),
			customerDomain: new FormControl<string | null | undefined>(undefined),
			customerDomainVerified: new FormControl<boolean | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			customerType: new FormControl<CustomerCustomerType | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			resourceUiUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomerCustomerType { customerTypeUnspecified = 'customerTypeUnspecified', domain = 'domain', team = 'team' }


	/** JSON template for primary admin in case of TEAM customers */
	export interface PrimaryAdmin {

		/** The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer's Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer. */
		primaryEmail?: string | null;
	}

	/** JSON template for primary admin in case of TEAM customers */
	export interface PrimaryAdminFormProperties {

		/** The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer's Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer. */
		primaryEmail: FormControl<string | null | undefined>,
	}
	export function CreatePrimaryAdminFormGroup() {
		return new FormGroup<PrimaryAdminFormProperties>({
			primaryEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a subscription renewal settings. */
	export interface RenewalSettings {

		/** Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings` */
		kind?: string | null;

		/** Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property. */
		renewalType?: string | null;
	}

	/** JSON template for a subscription renewal settings. */
	export interface RenewalSettingsFormProperties {

		/** Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings` */
		kind: FormControl<string | null | undefined>,

		/** Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property. */
		renewalType: FormControl<string | null | undefined>,
	}
	export function CreateRenewalSettingsFormGroup() {
		return new FormGroup<RenewalSettingsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			renewalType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for resellernotify getwatchdetails response. */
	export interface ResellernotifyGetwatchdetailsResponse {

		/** List of registered service accounts. */
		serviceAccountEmailAddresses?: Array<string>;

		/** Topic name of the PubSub */
		topicName?: string | null;
	}

	/** JSON template for resellernotify getwatchdetails response. */
	export interface ResellernotifyGetwatchdetailsResponseFormProperties {

		/** Topic name of the PubSub */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateResellernotifyGetwatchdetailsResponseFormGroup() {
		return new FormGroup<ResellernotifyGetwatchdetailsResponseFormProperties>({
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for resellernotify response. */
	export interface ResellernotifyResource {

		/** Topic name of the PubSub */
		topicName?: string | null;
	}

	/** JSON template for resellernotify response. */
	export interface ResellernotifyResourceFormProperties {

		/** Topic name of the PubSub */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateResellernotifyResourceFormGroup() {
		return new FormGroup<ResellernotifyResourceFormProperties>({
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a subscription. */
	export interface Subscription {

		/** Read-only field that returns the current billing method for a subscription. */
		billingMethod?: string | null;

		/** The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter. */
		creationTime?: string | null;

		/** Primary domain name of the customer */
		customerDomain?: string | null;

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId?: string | null;

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert` requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty. */
		dealCode?: string | null;

		/** Identifies the resource as a Subscription. Value: `reseller#subscription` */
		kind?: string | null;

		/** The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts. */
		plan?: SubscriptionPlan;

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId?: string | null;

		/** JSON template for a subscription renewal settings. */
		renewalSettings?: RenewalSettings;

		/** URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console. */
		resourceUiUrl?: string | null;

		/** JSON template for subscription seats. */
		seats?: Seats;

		/** A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs. */
		skuId?: string | null;

		/** Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs. */
		skuName?: string | null;

		/** This is an optional property. */
		status?: string | null;

		/** The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the `subscriptionId` as described in retrieve all reseller subscriptions. */
		subscriptionId?: string | null;

		/** Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's `STATUS` is `SUSPENDED` until all pending suspensions are removed. Possible options include: - `PENDING_TOS_ACCEPTANCE` - The customer has not logged in and accepted the G Suite Resold Terms of Services. - `RENEWAL_WITH_TYPE_CANCEL` - The customer's commitment ended and their service was cancelled at the end of their term. - `RESELLER_INITIATED` - A manual suspension invoked by a Reseller. - `TRIAL_ENDED` - The customer's trial expired without a plan selected. - `OTHER` - The customer is suspended for an internal Google reason (e.g. abuse or otherwise). */
		suspensionReasons?: Array<string>;

		/** Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer. */
		transferInfo?: SubscriptionTransferInfo;

		/** The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts. */
		trialSettings?: SubscriptionTrialSettings;
	}

	/** JSON template for a subscription. */
	export interface SubscriptionFormProperties {

		/** Read-only field that returns the current billing method for a subscription. */
		billingMethod: FormControl<string | null | undefined>,

		/** The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter. */
		creationTime: FormControl<string | null | undefined>,

		/** Primary domain name of the customer */
		customerDomain: FormControl<string | null | undefined>,

		/** This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google. */
		customerId: FormControl<string | null | undefined>,

		/** Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert` requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty. */
		dealCode: FormControl<string | null | undefined>,

		/** Identifies the resource as a Subscription. Value: `reseller#subscription` */
		kind: FormControl<string | null | undefined>,

		/** This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. */
		purchaseOrderId: FormControl<string | null | undefined>,

		/** URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console. */
		resourceUiUrl: FormControl<string | null | undefined>,

		/** A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs. */
		skuId: FormControl<string | null | undefined>,

		/** Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs. */
		skuName: FormControl<string | null | undefined>,

		/** This is an optional property. */
		status: FormControl<string | null | undefined>,

		/** The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the `subscriptionId` as described in retrieve all reseller subscriptions. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			billingMethod: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			customerDomain: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			dealCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
			resourceUiUrl: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionPlan {

		/** In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. */
		commitmentInterval?: SubscriptionPlanCommitmentInterval;

		/** The `isCommitmentPlan` property's boolean value identifies the plan as an annual commitment plan: - `true` — The subscription's plan is an annual commitment plan. - `false` — The plan is not an annual commitment plan. */
		isCommitmentPlan?: boolean | null;

		/** The `planName` property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` — The annual commitment plan with monthly payments. *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` — The annual commitment plan with yearly payments - `FLEXIBLE` — The flexible plan - `TRIAL` — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling `changePlan` will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling `startPaidService`. - `FREE` — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing. */
		planName?: string | null;
	}
	export interface SubscriptionPlanFormProperties {

		/** The `isCommitmentPlan` property's boolean value identifies the plan as an annual commitment plan: - `true` — The subscription's plan is an annual commitment plan. - `false` — The plan is not an annual commitment plan. */
		isCommitmentPlan: FormControl<boolean | null | undefined>,

		/** The `planName` property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` — The annual commitment plan with monthly payments. *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` — The annual commitment plan with yearly payments - `FLEXIBLE` — The flexible plan - `TRIAL` — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling `changePlan` will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling `startPaidService`. - `FREE` — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing. */
		planName: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPlanFormGroup() {
		return new FormGroup<SubscriptionPlanFormProperties>({
			isCommitmentPlan: new FormControl<boolean | null | undefined>(undefined),
			planName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionPlanCommitmentInterval {

		/** An annual commitment plan's interval's `endTime` in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		endTime?: string | null;

		/** An annual commitment plan's interval's `startTime` in milliseconds using UNIX Epoch format. See an example Epoch converter. */
		startTime?: string | null;
	}
	export interface SubscriptionPlanCommitmentIntervalFormProperties {

		/** An annual commitment plan's interval's `endTime` in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		endTime: FormControl<string | null | undefined>,

		/** An annual commitment plan's interval's `startTime` in milliseconds using UNIX Epoch format. See an example Epoch converter. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPlanCommitmentIntervalFormGroup() {
		return new FormGroup<SubscriptionPlanCommitmentIntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionTransferInfo {

		/** The `skuId` of the current resold subscription. This is populated only when the customer has a subscription with a legacy SKU and the subscription resource is populated with the `skuId` of the SKU recommended for the transfer. */
		currentLegacySkuId?: string | null;

		/** When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats. */
		minimumTransferableSeats?: number | null;

		/** The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format. */
		transferabilityExpirationTime?: string | null;
	}
	export interface SubscriptionTransferInfoFormProperties {

		/** The `skuId` of the current resold subscription. This is populated only when the customer has a subscription with a legacy SKU and the subscription resource is populated with the `skuId` of the SKU recommended for the transfer. */
		currentLegacySkuId: FormControl<string | null | undefined>,

		/** When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats. */
		minimumTransferableSeats: FormControl<number | null | undefined>,

		/** The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format. */
		transferabilityExpirationTime: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionTransferInfoFormGroup() {
		return new FormGroup<SubscriptionTransferInfoFormProperties>({
			currentLegacySkuId: new FormControl<string | null | undefined>(undefined),
			minimumTransferableSeats: new FormControl<number | null | undefined>(undefined),
			transferabilityExpirationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionTrialSettings {

		/** Determines if a subscription's plan is in a 30-day free trial or not: - `true` — The plan is in trial. - `false` — The plan is not in trial. */
		isInTrial?: boolean | null;

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		trialEndTime?: string | null;
	}
	export interface SubscriptionTrialSettingsFormProperties {

		/** Determines if a subscription's plan is in a 30-day free trial or not: - `true` — The plan is in trial. - `false` — The plan is not in trial. */
		isInTrial: FormControl<boolean | null | undefined>,

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter. */
		trialEndTime: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionTrialSettingsFormGroup() {
		return new FormGroup<SubscriptionTrialSettingsFormProperties>({
			isInTrial: new FormControl<boolean | null | undefined>(undefined),
			trialEndTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions. */
	export interface Subscriptions {

		/** Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** The subscriptions in this page of results. */
		subscriptions?: Array<Subscription>;
	}

	/** A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions. */
	export interface SubscriptionsFormProperties {

		/** Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionsFormGroup() {
		return new FormGroup<SubscriptionsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
		 * Post apps/reseller/v1/customers
		 * @param {string} customerAuthToken The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @return {Customer} Successful response
		 */
		Reseller_customers_insert(customerAuthToken: string | null | undefined, requestBody: Customer): Observable<Customer> {
			return this.http.post<Customer>(this.baseUri + 'apps/reseller/v1/customers?customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
		 * Get apps/reseller/v1/customers/{customerId}
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @return {Customer} Successful response
		 */
		Reseller_customers_get(customerId: string): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), {});
		}

		/**
		 * Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
		 * Patch apps/reseller/v1/customers/{customerId}
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @return {Customer} Successful response
		 */
		Reseller_customers_patch(customerId: string, requestBody: Customer): Observable<Customer> {
			return this.http.patch<Customer>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).
		 * Put apps/reseller/v1/customers/{customerId}
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @return {Customer} Successful response
		 */
		Reseller_customers_update(customerId: string, requestBody: Customer): Observable<Customer> {
			return this.http.put<Customer>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {Reseller_subscriptions_insertAction} action The intented insert action. The usage of this field is governed by certain policies which are being developed & tested currently. Hence, these might not work as intended. Once this is fully tested & available to consume, we will share more information about its usage, limitations and policy documentation.
		 * @param {string} customerAuthToken The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @param {string} sourceSkuId The sku_id of the existing subscription to be upgraded or downgraded. This is required when action is SWITCH. The usage of this field is governed by certain policies which are being developed & tested currently. Hence, these might not work as intended. Once this is fully tested & available to consume, we will share more information about its usage, limitations and policy documentation.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_insert(customerId: string, action: Reseller_subscriptions_insertAction | null | undefined, customerAuthToken: string | null | undefined, sourceSkuId: string | null | undefined, requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions&action=' + action + '&customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)) + '&sourceSkuId=' + (sourceSkuId == null ? '' : encodeURIComponent(sourceSkuId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels, suspends, or transfers a subscription to direct.
		 * Delete apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @param {Reseller_subscriptions_deleteDeletionType} deletionType The `deletionType` query string enables the cancellation, downgrade, or suspension of a subscription.
		 * @return {void} Successful response
		 */
		Reseller_subscriptions_delete(customerId: string, subscriptionId: string, deletionType: Reseller_subscriptions_deleteDeletionType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '&deletionType=' + deletionType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
		 * Get apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_get(customerId: string, subscriptionId: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), {});
		}

		/**
		 * Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_activate(customerId: string, subscriptionId: string): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/activate', null, {});
		}

		/**
		 * Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_changePlan(customerId: string, subscriptionId: string, requestBody: ChangePlanRequest): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changePlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_changeRenewalSettings(customerId: string, subscriptionId: string, requestBody: RenewalSettings): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changeRenewalSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_changeSeats(customerId: string, subscriptionId: string, requestBody: Seats): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/changeSeats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_startPaidService(customerId: string, subscriptionId: string): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/startPaidService', null, {});
		}

		/**
		 * Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.
		 * Post apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} subscriptionId This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.
		 * @return {Subscription} Successful response
		 */
		Reseller_subscriptions_suspend(customerId: string, subscriptionId: string): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'apps/reseller/v1/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/suspend', null, {});
		}

		/**
		 * Returns all the details of the watch corresponding to the reseller.
		 * Get apps/reseller/v1/resellernotify/getwatchdetails
		 * @return {ResellernotifyGetwatchdetailsResponse} Successful response
		 */
		Reseller_resellernotify_getwatchdetails(): Observable<ResellernotifyGetwatchdetailsResponse> {
			return this.http.get<ResellernotifyGetwatchdetailsResponse>(this.baseUri + 'apps/reseller/v1/resellernotify/getwatchdetails', {});
		}

		/**
		 * Registers a Reseller for receiving notifications.
		 * Post apps/reseller/v1/resellernotify/register
		 * @param {string} serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
		 * @return {ResellernotifyResource} Successful response
		 */
		Reseller_resellernotify_register(serviceAccountEmailAddress: string | null | undefined): Observable<ResellernotifyResource> {
			return this.http.post<ResellernotifyResource>(this.baseUri + 'apps/reseller/v1/resellernotify/register?serviceAccountEmailAddress=' + (serviceAccountEmailAddress == null ? '' : encodeURIComponent(serviceAccountEmailAddress)), null, {});
		}

		/**
		 * Unregisters a Reseller for receiving notifications.
		 * Post apps/reseller/v1/resellernotify/unregister
		 * @param {string} serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
		 * @return {ResellernotifyResource} Successful response
		 */
		Reseller_resellernotify_unregister(serviceAccountEmailAddress: string | null | undefined): Observable<ResellernotifyResource> {
			return this.http.post<ResellernotifyResource>(this.baseUri + 'apps/reseller/v1/resellernotify/unregister?serviceAccountEmailAddress=' + (serviceAccountEmailAddress == null ? '' : encodeURIComponent(serviceAccountEmailAddress)), null, {});
		}

		/**
		 * Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
		 * Get apps/reseller/v1/subscriptions
		 * @param {string} customerAuthToken The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
		 * @param {string} customerId This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.
		 * @param {string} customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes `exam.com`, `example20.com` and `example.com`: - `exa` -- Returns all customer names that start with 'exa' which could include `exam.com`, `example20.com`, and `example.com`. A name prefix is similar to using a regular expression's asterisk, exa*. - `example` -- Returns `example20.com` and `example.com`. 
		 * @param {number} maxResults When retrieving a large list, the `maxResults` is the maximum number of results per page. The `nextPageToken` value takes you to the next page. The default is 20.
		 * @param {string} pageToken Token to specify next page in the list
		 * @return {Subscriptions} Successful response
		 */
		Reseller_subscriptions_list(customerAuthToken: string | null | undefined, customerId: string | null | undefined, customerNamePrefix: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<Subscriptions> {
			return this.http.get<Subscriptions>(this.baseUri + 'apps/reseller/v1/subscriptions?customerAuthToken=' + (customerAuthToken == null ? '' : encodeURIComponent(customerAuthToken)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&customerNamePrefix=' + (customerNamePrefix == null ? '' : encodeURIComponent(customerNamePrefix)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Reseller_subscriptions_insertAction { actionUnspecified = 'actionUnspecified', buy = 'buy', switch = 'switch' }

	export enum Reseller_subscriptions_deleteDeletionType { deletion_type_undefined = 'deletion_type_undefined', cancel = 'cancel', transfer_to_direct = 'transfer_to_direct' }

}

