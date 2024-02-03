import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Account defender risk assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment {

		/** Output only. Labels for this request. */
		labels?: Array<string>;
	}

	/** Account defender risk assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentFormProperties>({
		});

	}


	/** Information about account verification, used for identity verification. */
	export interface GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo {

		/** Optional. Endpoints that can be used for identity verification. */
		endpoints?: Array<GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo>;

		/** Optional. Language code preference for the verification message, set as a IETF BCP 47 language code. */
		languageCode?: string | null;

		/** Output only. Result of the latest account verification challenge. */
		latestVerificationResult?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResult | null;

		/** Username of the account that is being verified. Deprecated. Customers should now provide the `account_id` field in `event.user_info`. */
		username?: string | null;
	}

	/** Information about account verification, used for identity verification. */
	export interface GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoFormProperties {

		/** Optional. Language code preference for the verification message, set as a IETF BCP 47 language code. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Result of the latest account verification challenge. */
		latestVerificationResult: FormControl<GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResult | null | undefined>,

		/** Username of the account that is being verified. Deprecated. Customers should now provide the `account_id` field in `event.user_info`. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AccountVerificationInfoFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			latestVerificationResult: new FormControl<GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResult | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a verification endpoint that can be used for 2FA. */
	export interface GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo {

		/** Email address for which to trigger a verification request. */
		emailAddress?: string | null;

		/** Output only. Timestamp of the last successful verification for the endpoint, if any. */
		lastVerificationTime?: string | null;

		/** Phone number for which to trigger a verification request. Should be given in E.164 format. */
		phoneNumber?: string | null;

		/** Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes. */
		requestToken?: string | null;
	}

	/** Information about a verification endpoint that can be used for 2FA. */
	export interface GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoFormProperties {

		/** Email address for which to trigger a verification request. */
		emailAddress: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the last successful verification for the endpoint, if any. */
		lastVerificationTime: FormControl<string | null | undefined>,

		/** Phone number for which to trigger a verification request. Should be given in E.164 format. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes. */
		requestToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			lastVerificationTime: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			requestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResult { RESULT_UNSPECIFIED = 'RESULT_UNSPECIFIED', SUCCESS_USER_VERIFIED = 'SUCCESS_USER_VERIFIED', ERROR_USER_NOT_VERIFIED = 'ERROR_USER_NOT_VERIFIED', ERROR_SITE_ONBOARDING_INCOMPLETE = 'ERROR_SITE_ONBOARDING_INCOMPLETE', ERROR_RECIPIENT_NOT_ALLOWED = 'ERROR_RECIPIENT_NOT_ALLOWED', ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED = 'ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED', ERROR_CRITICAL_INTERNAL = 'ERROR_CRITICAL_INTERNAL', ERROR_CUSTOMER_QUOTA_EXHAUSTED = 'ERROR_CUSTOMER_QUOTA_EXHAUSTED', ERROR_VERIFICATION_BYPASSED = 'ERROR_VERIFICATION_BYPASSED', ERROR_VERDICT_MISMATCH = 'ERROR_VERDICT_MISMATCH' }


	/** Settings specific to keys that can be used by Android apps. */
	export interface GoogleCloudRecaptchaenterpriseV1AndroidKeySettings {

		/** Optional. If set to true, allowed_package_names are not enforced. */
		allowAllPackageNames?: boolean | null;

		/** Optional. Android package names of apps allowed to use the key. Example: 'com.companyname.appname' */
		allowedPackageNames?: Array<string>;

		/** Optional. Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store. */
		supportNonGoogleAppStoreDistribution?: boolean | null;
	}

	/** Settings specific to keys that can be used by Android apps. */
	export interface GoogleCloudRecaptchaenterpriseV1AndroidKeySettingsFormProperties {

		/** Optional. If set to true, allowed_package_names are not enforced. */
		allowAllPackageNames: FormControl<boolean | null | undefined>,

		/** Optional. Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store. */
		supportNonGoogleAppStoreDistribution: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AndroidKeySettingsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AndroidKeySettingsFormProperties>({
			allowAllPackageNames: new FormControl<boolean | null | undefined>(undefined),
			supportNonGoogleAppStoreDistribution: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request message to annotate an Assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest {

		/** Optional. A stable account identifier to apply to the assessment. This is an alternative to setting `account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request. */
		accountId?: string | null;

		/** Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent. */
		annotation?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotation | null;

		/** Optional. A stable hashed account identifier to apply to the assessment. This is an alternative to setting `hashed_account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request. */
		hashedAccountId?: string | null;

		/** Optional. Reasons for the annotation that are assigned to the event. */
		reasons?: Array<string>;

		/** Describes an event in the lifecycle of a payment transaction. */
		transactionEvent?: GoogleCloudRecaptchaenterpriseV1TransactionEvent;
	}

	/** The request message to annotate an Assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestFormProperties {

		/** Optional. A stable account identifier to apply to the assessment. This is an alternative to setting `account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request. */
		accountId: FormControl<string | null | undefined>,

		/** Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent. */
		annotation: FormControl<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotation | null | undefined>,

		/** Optional. A stable hashed account identifier to apply to the assessment. This is an alternative to setting `hashed_account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request. */
		hashedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			annotation: new FormControl<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotation | null | undefined>(undefined),
			hashedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotation { ANNOTATION_UNSPECIFIED = 'ANNOTATION_UNSPECIFIED', LEGITIMATE = 'LEGITIMATE', FRAUDULENT = 'FRAUDULENT', PASSWORD_CORRECT = 'PASSWORD_CORRECT', PASSWORD_INCORRECT = 'PASSWORD_INCORRECT' }


	/** Describes an event in the lifecycle of a payment transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionEvent {

		/** Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call. */
		eventTime?: string | null;

		/** Optional. The type of this transaction event. */
		eventType?: GoogleCloudRecaptchaenterpriseV1TransactionEventEventType | null;

		/** Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005. */
		reason?: string | null;

		/** Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data. */
		value?: number | null;
	}

	/** Describes an event in the lifecycle of a payment transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionEventFormProperties {

		/** Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call. */
		eventTime: FormControl<string | null | undefined>,

		/** Optional. The type of this transaction event. */
		eventType: FormControl<GoogleCloudRecaptchaenterpriseV1TransactionEventEventType | null | undefined>,

		/** Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005. */
		reason: FormControl<string | null | undefined>,

		/** Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionEventFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionEventFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudRecaptchaenterpriseV1TransactionEventEventType | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1TransactionEventEventType { TRANSACTION_EVENT_TYPE_UNSPECIFIED = 'TRANSACTION_EVENT_TYPE_UNSPECIFIED', MERCHANT_APPROVE = 'MERCHANT_APPROVE', MERCHANT_DENY = 'MERCHANT_DENY', MANUAL_REVIEW = 'MANUAL_REVIEW', AUTHORIZATION = 'AUTHORIZATION', AUTHORIZATION_DECLINE = 'AUTHORIZATION_DECLINE', PAYMENT_CAPTURE = 'PAYMENT_CAPTURE', PAYMENT_CAPTURE_DECLINE = 'PAYMENT_CAPTURE_DECLINE', CANCEL = 'CANCEL', CHARGEBACK_INQUIRY = 'CHARGEBACK_INQUIRY', CHARGEBACK_ALERT = 'CHARGEBACK_ALERT', FRAUD_NOTIFICATION = 'FRAUD_NOTIFICATION', CHARGEBACK = 'CHARGEBACK', CHARGEBACK_REPRESENTMENT = 'CHARGEBACK_REPRESENTMENT', CHARGEBACK_REVERSE = 'CHARGEBACK_REVERSE', REFUND_REQUEST = 'REFUND_REQUEST', REFUND_DECLINE = 'REFUND_DECLINE', REFUND = 'REFUND', REFUND_REVERSE = 'REFUND_REVERSE' }


	/** Empty response for AnnotateAssessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse {
	}

	/** Empty response for AnnotateAssessment. */
	export interface GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponseFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponseFormProperties>({
		});

	}


	/** Contains fields that are required to perform Apple-specific integrity checks. */
	export interface GoogleCloudRecaptchaenterpriseV1AppleDeveloperId {

		/** Required. The Apple developer key ID (10-character string). */
		keyId?: string | null;

		/** Required. Input only. A private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that Apple DeviceCheck is enabled for the private key. */
		privateKey?: string | null;

		/** Required. The Apple team ID (10-character string) owning the provisioning profile used to build your application. */
		teamId?: string | null;
	}

	/** Contains fields that are required to perform Apple-specific integrity checks. */
	export interface GoogleCloudRecaptchaenterpriseV1AppleDeveloperIdFormProperties {

		/** Required. The Apple developer key ID (10-character string). */
		keyId: FormControl<string | null | undefined>,

		/** Required. Input only. A private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that Apple DeviceCheck is enabled for the private key. */
		privateKey: FormControl<string | null | undefined>,

		/** Required. The Apple team ID (10-character string) owning the provisioning profile used to build your application. */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AppleDeveloperIdFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AppleDeveloperIdFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reCAPTCHA Enterprise assessment resource. */
	export interface GoogleCloudRecaptchaenterpriseV1Assessment {

		/** Account defender risk assessment. */
		accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;

		/** Information about account verification, used for identity verification. */
		accountVerification?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo;

		/** The event being assessed. */
		event?: GoogleCloudRecaptchaenterpriseV1Event;

		/** Policy config assessment. */
		firewallPolicyAssessment?: GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;

		/** Assessment for Fraud Prevention. */
		fraudPreventionAssessment?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;

		/** Fraud signals describing users and cards involved in the transaction. */
		fraudSignals?: GoogleCloudRecaptchaenterpriseV1FraudSignals;

		/** Output only. Identifier. The resource name for the Assessment in the format `projects/{project}/assessments/{assessment}`. */
		name?: string | null;

		/** Private password leak verification info. */
		privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;

		/** Risk analysis result for an event. */
		riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;

		/** Properties of the provided event token. */
		tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
	}

	/** A reCAPTCHA Enterprise assessment resource. */
	export interface GoogleCloudRecaptchaenterpriseV1AssessmentFormProperties {

		/** Output only. Identifier. The resource name for the Assessment in the format `projects/{project}/assessments/{assessment}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1AssessmentFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1AssessmentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event being assessed. */
	export interface GoogleCloudRecaptchaenterpriseV1Event {

		/** Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise. */
		expectedAction?: string | null;

		/** Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference a SCORE key with WAF feature set to EXPRESS. */
		express?: boolean | null;

		/** Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response. */
		firewallPolicyEvaluation?: boolean | null;

		/** Optional. Deprecated: use `user_info.account_id` instead. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret. */
		hashedAccountId?: string | null;

		/** Optional. HTTP header information about the request. */
		headers?: Array<string>;

		/** Optional. JA3 fingerprint for SSL clients. */
		ja3?: string | null;

		/** Optional. The URI resource the user requested that triggered an assessment. */
		requestedUri?: string | null;

		/** Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token. */
		siteKey?: string | null;

		/** Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site. */
		token?: string | null;

		/** Transaction data associated with a payment protected by reCAPTCHA Enterprise. */
		transactionData?: GoogleCloudRecaptchaenterpriseV1TransactionData;

		/** Optional. The user agent present in the request from the user's device related to this event. */
		userAgent?: string | null;

		/** User information associated with a request protected by reCAPTCHA Enterprise. */
		userInfo?: GoogleCloudRecaptchaenterpriseV1UserInfo;

		/** Optional. The IP address in the request from the user's device related to this event. */
		userIpAddress?: string | null;

		/** Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key. */
		wafTokenAssessment?: boolean | null;
	}

	/** The event being assessed. */
	export interface GoogleCloudRecaptchaenterpriseV1EventFormProperties {

		/** Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise. */
		expectedAction: FormControl<string | null | undefined>,

		/** Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference a SCORE key with WAF feature set to EXPRESS. */
		express: FormControl<boolean | null | undefined>,

		/** Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response. */
		firewallPolicyEvaluation: FormControl<boolean | null | undefined>,

		/** Optional. Deprecated: use `user_info.account_id` instead. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret. */
		hashedAccountId: FormControl<string | null | undefined>,

		/** Optional. JA3 fingerprint for SSL clients. */
		ja3: FormControl<string | null | undefined>,

		/** Optional. The URI resource the user requested that triggered an assessment. */
		requestedUri: FormControl<string | null | undefined>,

		/** Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token. */
		siteKey: FormControl<string | null | undefined>,

		/** Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site. */
		token: FormControl<string | null | undefined>,

		/** Optional. The user agent present in the request from the user's device related to this event. */
		userAgent: FormControl<string | null | undefined>,

		/** Optional. The IP address in the request from the user's device related to this event. */
		userIpAddress: FormControl<string | null | undefined>,

		/** Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key. */
		wafTokenAssessment: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1EventFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1EventFormProperties>({
			expectedAction: new FormControl<string | null | undefined>(undefined),
			express: new FormControl<boolean | null | undefined>(undefined),
			firewallPolicyEvaluation: new FormControl<boolean | null | undefined>(undefined),
			hashedAccountId: new FormControl<string | null | undefined>(undefined),
			ja3: new FormControl<string | null | undefined>(undefined),
			requestedUri: new FormControl<string | null | undefined>(undefined),
			siteKey: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userIpAddress: new FormControl<string | null | undefined>(undefined),
			wafTokenAssessment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Transaction data associated with a payment protected by reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionData {

		/** Structured address format for billing and shipping addresses. */
		billingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;

		/** Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card. */
		cardBin?: string | null;

		/** Optional. The last four digits of the card. */
		cardLastFour?: string | null;

		/** Optional. The currency code in ISO-4217 format. */
		currencyCode?: string | null;

		/** Details about the transaction from the gateway. */
		gatewayInfo?: GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo;

		/** Optional. Items purchased in this transaction. */
		items?: Array<GoogleCloudRecaptchaenterpriseV1TransactionDataItem>;

		/** Optional. Information about the user or users fulfilling the transaction. */
		merchants?: Array<GoogleCloudRecaptchaenterpriseV1TransactionDataUser>;

		/** Optional. The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto) */
		paymentMethod?: string | null;

		/** Structured address format for billing and shipping addresses. */
		shippingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;

		/** Optional. The value of shipping in the specified currency. 0 for free or no shipping. */
		shippingValue?: number | null;

		/** Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id. */
		transactionId?: string | null;

		/** Details about a user's account involved in the transaction. */
		user?: GoogleCloudRecaptchaenterpriseV1TransactionDataUser;

		/** Optional. The decimal value of the transaction in the specified currency. */
		value?: number | null;
	}

	/** Transaction data associated with a payment protected by reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataFormProperties {

		/** Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card. */
		cardBin: FormControl<string | null | undefined>,

		/** Optional. The last four digits of the card. */
		cardLastFour: FormControl<string | null | undefined>,

		/** Optional. The currency code in ISO-4217 format. */
		currencyCode: FormControl<string | null | undefined>,

		/** Optional. The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name} (If a third-party is used, for example, processor-paypal) * custom-{name} (If an alternative method is used, for example, custom-crypto) */
		paymentMethod: FormControl<string | null | undefined>,

		/** Optional. The value of shipping in the specified currency. 0 for free or no shipping. */
		shippingValue: FormControl<number | null | undefined>,

		/** Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id. */
		transactionId: FormControl<string | null | undefined>,

		/** Optional. The decimal value of the transaction in the specified currency. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionDataFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionDataFormProperties>({
			cardBin: new FormControl<string | null | undefined>(undefined),
			cardLastFour: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			paymentMethod: new FormControl<string | null | undefined>(undefined),
			shippingValue: new FormControl<number | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structured address format for billing and shipping addresses. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataAddress {

		/** Optional. The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number. */
		address?: Array<string>;

		/** Optional. The state, province, or otherwise administrative area of the address. */
		administrativeArea?: string | null;

		/** Optional. The town/city of the address. */
		locality?: string | null;

		/** Optional. The postal or ZIP code of the address. */
		postalCode?: string | null;

		/** Optional. The recipient name, potentially including information such as "care of". */
		recipient?: string | null;

		/** Optional. The CLDR country/region of the address. */
		regionCode?: string | null;
	}

	/** Structured address format for billing and shipping addresses. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataAddressFormProperties {

		/** Optional. The state, province, or otherwise administrative area of the address. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. The town/city of the address. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The postal or ZIP code of the address. */
		postalCode: FormControl<string | null | undefined>,

		/** Optional. The recipient name, potentially including information such as "care of". */
		recipient: FormControl<string | null | undefined>,

		/** Optional. The CLDR country/region of the address. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionDataAddressFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionDataAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			recipient: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the transaction from the gateway. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo {

		/** Optional. AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). */
		avsResponseCode?: string | null;

		/** Optional. CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). */
		cvvResponseCode?: string | null;

		/** Optional. Gateway response code describing the state of the transaction. */
		gatewayResponseCode?: string | null;

		/** Optional. Name of the gateway service (for example, stripe, square, paypal). */
		name?: string | null;
	}

	/** Details about the transaction from the gateway. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfoFormProperties {

		/** Optional. AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). */
		avsResponseCode: FormControl<string | null | undefined>,

		/** Optional. CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization). */
		cvvResponseCode: FormControl<string | null | undefined>,

		/** Optional. Gateway response code describing the state of the transaction. */
		gatewayResponseCode: FormControl<string | null | undefined>,

		/** Optional. Name of the gateway service (for example, stripe, square, paypal). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfoFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfoFormProperties>({
			avsResponseCode: new FormControl<string | null | undefined>(undefined),
			cvvResponseCode: new FormControl<string | null | undefined>(undefined),
			gatewayResponseCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Line items being purchased in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataItem {

		/** Optional. When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions. */
		merchantAccountId?: string | null;

		/** Optional. The full name of the item. */
		name?: string | null;

		/** Optional. The quantity of this item that is being purchased. */
		quantity?: string | null;

		/** Optional. The value per item that the user is paying, in the transaction currency, after discounts. */
		value?: number | null;
	}

	/** Line items being purchased in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataItemFormProperties {

		/** Optional. When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions. */
		merchantAccountId: FormControl<string | null | undefined>,

		/** Optional. The full name of the item. */
		name: FormControl<string | null | undefined>,

		/** Optional. The quantity of this item that is being purchased. */
		quantity: FormControl<string | null | undefined>,

		/** Optional. The value per item that the user is paying, in the transaction currency, after discounts. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionDataItemFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionDataItemFormProperties>({
			merchantAccountId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about a user's account involved in the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataUser {

		/** Optional. Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account. */
		accountId?: string | null;

		/** Optional. The epoch milliseconds of the user's account creation. */
		creationMs?: string | null;

		/** Optional. The email address of the user. */
		email?: string | null;

		/** Optional. Whether the email has been verified to be accessible by the user (OTP or similar). */
		emailVerified?: boolean | null;

		/** Optional. The phone number of the user, with country code. */
		phoneNumber?: string | null;

		/** Optional. Whether the phone number has been verified to be accessible by the user (OTP or similar). */
		phoneVerified?: boolean | null;
	}

	/** Details about a user's account involved in the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1TransactionDataUserFormProperties {

		/** Optional. Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account. */
		accountId: FormControl<string | null | undefined>,

		/** Optional. The epoch milliseconds of the user's account creation. */
		creationMs: FormControl<string | null | undefined>,

		/** Optional. The email address of the user. */
		email: FormControl<string | null | undefined>,

		/** Optional. Whether the email has been verified to be accessible by the user (OTP or similar). */
		emailVerified: FormControl<boolean | null | undefined>,

		/** Optional. The phone number of the user, with country code. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Optional. Whether the phone number has been verified to be accessible by the user (OTP or similar). */
		phoneVerified: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TransactionDataUserFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TransactionDataUserFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creationMs: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			phoneVerified: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** User information associated with a request protected by reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1UserInfo {

		/** Optional. For logged-in requests or login/registration requests, the unique account identifier associated with this user. You can use the username if it is stable (meaning it is the same for every request associated with the same user), or any stable user ID of your choice. Leave blank for non logged-in actions or guest checkout. */
		accountId?: string | null;

		/** Optional. Creation time for this account associated with this user. Leave blank for non logged-in actions, guest checkout, or when there is no account associated with the current user. */
		createAccountTime?: string | null;

		/** Optional. Identifiers associated with this user or request. */
		userIds?: Array<GoogleCloudRecaptchaenterpriseV1UserId>;
	}

	/** User information associated with a request protected by reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1UserInfoFormProperties {

		/** Optional. For logged-in requests or login/registration requests, the unique account identifier associated with this user. You can use the username if it is stable (meaning it is the same for every request associated with the same user), or any stable user ID of your choice. Leave blank for non logged-in actions or guest checkout. */
		accountId: FormControl<string | null | undefined>,

		/** Optional. Creation time for this account associated with this user. Leave blank for non logged-in actions, guest checkout, or when there is no account associated with the current user. */
		createAccountTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1UserInfoFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1UserInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			createAccountTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An identifier associated with a user. */
	export interface GoogleCloudRecaptchaenterpriseV1UserId {

		/** Optional. An email address. */
		email?: string | null;

		/** Optional. A phone number. Should use the E.164 format. */
		phoneNumber?: string | null;

		/** Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user. */
		username?: string | null;
	}

	/** An identifier associated with a user. */
	export interface GoogleCloudRecaptchaenterpriseV1UserIdFormProperties {

		/** Optional. An email address. */
		email: FormControl<string | null | undefined>,

		/** Optional. A phone number. Should use the E.164 format. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1UserIdFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1UserIdFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy config assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** A FirewallPolicy represents a single matching pattern and resulting actions to take. */
		firewallPolicy?: GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
	}

	/** Policy config assessment. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessmentFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessmentFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessmentFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A FirewallPolicy represents a single matching pattern and resulting actions to take. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallPolicy {

		/** Optional. The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as `AllowAction`, `BlockAction` or `SubstituteAction`. Zero or more non-terminal actions such as `SetHeader` might be specified. A single policy can contain up to 16 actions. */
		actions?: Array<GoogleCloudRecaptchaenterpriseV1FirewallAction>;

		/** Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters. */
		condition?: string | null;

		/** Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters. */
		description?: string | null;

		/** Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. */
		name?: string | null;

		/** Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters. */
		path?: string | null;
	}

	/** A FirewallPolicy represents a single matching pattern and resulting actions to take. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallPolicyFormProperties {

		/** Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters. */
		condition: FormControl<string | null | undefined>,

		/** Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters. */
		description: FormControl<string | null | undefined>,

		/** Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallPolicyFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallPolicyFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual action. Each action represents what to do if a policy matches. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallAction {

		/** An allow action continues processing a request unimpeded. */
		allow?: GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction;

		/** A block action serves an HTTP error code a prevents the request from hitting the backend. */
		block?: GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction;

		/** A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token. */
		redirect?: GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction;

		/** A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend. */
		setHeader?: GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;

		/** A substitute action transparently serves a different page than the one requested. */
		substitute?: GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
	}

	/** An individual action. Each action represents what to do if a policy matches. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionFormProperties>({
		});

	}


	/** An allow action continues processing a request unimpeded. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction {
	}

	/** An allow action continues processing a request unimpeded. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionAllowActionFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionAllowActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionAllowActionFormProperties>({
		});

	}


	/** A block action serves an HTTP error code a prevents the request from hitting the backend. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction {
	}

	/** A block action serves an HTTP error code a prevents the request from hitting the backend. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionBlockActionFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionBlockActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionBlockActionFormProperties>({
		});

	}


	/** A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction {
	}

	/** A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectActionFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionRedirectActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectActionFormProperties>({
		});

	}


	/** A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction {

		/** Optional. The header key to set in the request to the backend server. */
		key?: string | null;

		/** Optional. The header value to set in the request to the backend server. */
		value?: string | null;
	}

	/** A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderActionFormProperties {

		/** Optional. The header key to set in the request to the backend server. */
		key: FormControl<string | null | undefined>,

		/** Optional. The header value to set in the request to the backend server. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderActionFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A substitute action transparently serves a different page than the one requested. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction {

		/** Optional. The address to redirect to. The target is a relative path in the current host. Example: "/blog/404.html". */
		path?: string | null;
	}

	/** A substitute action transparently serves a different page than the one requested. */
	export interface GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteActionFormProperties {

		/** Optional. The address to redirect to. The target is a relative path in the current host. Example: "/blog/404.html". */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteActionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteActionFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Assessment for Fraud Prevention. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment {

		/** Information about behavioral trust of the transaction. */
		behavioralTrustVerdict?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict;

		/** Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details. */
		cardTestingVerdict?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict;

		/** Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase. */
		stolenInstrumentVerdict?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict;

		/** Output only. Probability of this transaction being fraudulent. Summarizes the combined risk of attack vectors below. Values are from 0.0 (lowest) to 1.0 (highest). */
		transactionRisk?: number | null;
	}

	/** Assessment for Fraud Prevention. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentFormProperties {

		/** Output only. Probability of this transaction being fraudulent. Summarizes the combined risk of attack vectors below. Values are from 0.0 (lowest) to 1.0 (highest). */
		transactionRisk: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentFormProperties>({
			transactionRisk: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about behavioral trust of the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict {

		/** Output only. Probability of this transaction attempt being executed in a behaviorally trustworthy way. Values are from 0.0 (lowest) to 1.0 (highest). */
		trust?: number | null;
	}

	/** Information about behavioral trust of the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdictFormProperties {

		/** Output only. Probability of this transaction attempt being executed in a behaviorally trustworthy way. Values are from 0.0 (lowest) to 1.0 (highest). */
		trust: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdictFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdictFormProperties>({
			trust: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict {

		/** Output only. Probability of this transaction attempt being part of a card testing attack. Values are from 0.0 (lowest) to 1.0 (highest). */
		risk?: number | null;
	}

	/** Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdictFormProperties {

		/** Output only. Probability of this transaction attempt being part of a card testing attack. Values are from 0.0 (lowest) to 1.0 (highest). */
		risk: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdictFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdictFormProperties>({
			risk: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict {

		/** Output only. Probability of this transaction being executed with a stolen instrument. Values are from 0.0 (lowest) to 1.0 (highest). */
		risk?: number | null;
	}

	/** Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdictFormProperties {

		/** Output only. Probability of this transaction being executed with a stolen instrument. Values are from 0.0 (lowest) to 1.0 (highest). */
		risk: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdictFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdictFormProperties>({
			risk: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Fraud signals describing users and cards involved in the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignals {

		/** Signals describing the payment card used in this transaction. */
		cardSignals?: GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals;

		/** Signals describing the user involved in this transaction. */
		userSignals?: GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals;
	}

	/** Fraud signals describing users and cards involved in the transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignalsFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudSignalsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudSignalsFormProperties>({
		});

	}


	/** Signals describing the payment card used in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals {

		/** Output only. The labels for the payment card in this transaction. */
		cardLabels?: Array<string>;
	}

	/** Signals describing the payment card used in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignalsFormProperties {
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignalsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignalsFormProperties>({
		});

	}


	/** Signals describing the user involved in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals {

		/** Output only. This user (based on email, phone, and other identifiers) has been seen on the internet for at least this number of days. */
		activeDaysLowerBound?: number | null;

		/** Output only. Likelihood (from 0.0 to 1.0) this user includes synthetic components in their identity, such as a randomly generated email address, temporary phone number, or fake shipping address. */
		syntheticRisk?: number | null;
	}

	/** Signals describing the user involved in this transaction. */
	export interface GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignalsFormProperties {

		/** Output only. This user (based on email, phone, and other identifiers) has been seen on the internet for at least this number of days. */
		activeDaysLowerBound: FormControl<number | null | undefined>,

		/** Output only. Likelihood (from 0.0 to 1.0) this user includes synthetic components in their identity, such as a randomly generated email address, temporary phone number, or fake shipping address. */
		syntheticRisk: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignalsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignalsFormProperties>({
			activeDaysLowerBound: new FormControl<number | null | undefined>(undefined),
			syntheticRisk: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Private password leak verification info. */
	export interface GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification {

		/** Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of `reencrypted_user_credentials_hash` */
		encryptedLeakMatchPrefixes?: Array<string>;

		/** Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`. */
		encryptedUserCredentialsHash?: string | null;

		/** Required. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix. */
		lookupHashPrefix?: string | null;

		/** Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`. */
		reencryptedUserCredentialsHash?: string | null;
	}

	/** Private password leak verification info. */
	export interface GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationFormProperties {

		/** Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`. */
		encryptedUserCredentialsHash: FormControl<string | null | undefined>,

		/** Required. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix. */
		lookupHashPrefix: FormControl<string | null | undefined>,

		/** Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`. */
		reencryptedUserCredentialsHash: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationFormProperties>({
			encryptedUserCredentialsHash: new FormControl<string | null | undefined>(undefined),
			lookupHashPrefix: new FormControl<string | null | undefined>(undefined),
			reencryptedUserCredentialsHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Risk analysis result for an event. */
	export interface GoogleCloudRecaptchaenterpriseV1RiskAnalysis {

		/** Output only. Extended verdict reasons to be used for experimentation only. The set of possible reasons is subject to change. */
		extendedVerdictReasons?: Array<string>;

		/** Output only. Reasons contributing to the risk analysis verdict. */
		reasons?: Array<string>;

		/** Output only. Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic). */
		score?: number | null;
	}

	/** Risk analysis result for an event. */
	export interface GoogleCloudRecaptchaenterpriseV1RiskAnalysisFormProperties {

		/** Output only. Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1RiskAnalysisFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1RiskAnalysisFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties of the provided event token. */
	export interface GoogleCloudRecaptchaenterpriseV1TokenProperties {

		/** Output only. Action name provided at token generation. */
		action?: string | null;

		/** Output only. The name of the Android package with which the token was generated (Android keys only). */
		androidPackageName?: string | null;

		/** Output only. The timestamp corresponding to the generation of the token. */
		createTime?: string | null;

		/** Output only. The hostname of the page on which the token was generated (Web keys only). */
		hostname?: string | null;

		/** Output only. Reason associated with the response when valid = false. */
		invalidReason?: GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReason | null;

		/** Output only. The ID of the iOS bundle with which the token was generated (iOS keys only). */
		iosBundleId?: string | null;

		/** Output only. Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment). */
		valid?: boolean | null;
	}

	/** Properties of the provided event token. */
	export interface GoogleCloudRecaptchaenterpriseV1TokenPropertiesFormProperties {

		/** Output only. Action name provided at token generation. */
		action: FormControl<string | null | undefined>,

		/** Output only. The name of the Android package with which the token was generated (Android keys only). */
		androidPackageName: FormControl<string | null | undefined>,

		/** Output only. The timestamp corresponding to the generation of the token. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The hostname of the page on which the token was generated (Web keys only). */
		hostname: FormControl<string | null | undefined>,

		/** Output only. Reason associated with the response when valid = false. */
		invalidReason: FormControl<GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReason | null | undefined>,

		/** Output only. The ID of the iOS bundle with which the token was generated (iOS keys only). */
		iosBundleId: FormControl<string | null | undefined>,

		/** Output only. Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment). */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TokenPropertiesFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TokenPropertiesFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			androidPackageName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			invalidReason: new FormControl<GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReason | null | undefined>(undefined),
			iosBundleId: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReason { INVALID_REASON_UNSPECIFIED = 'INVALID_REASON_UNSPECIFIED', UNKNOWN_INVALID_REASON = 'UNKNOWN_INVALID_REASON', MALFORMED = 'MALFORMED', EXPIRED = 'EXPIRED', DUPE = 'DUPE', MISSING = 'MISSING', BROWSER_ERROR = 'BROWSER_ERROR' }


	/** Metrics related to challenges. */
	export interface GoogleCloudRecaptchaenterpriseV1ChallengeMetrics {

		/** Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered. */
		failedCount?: string | null;

		/** Count of nocaptchas (successful verification without a challenge) issued. */
		nocaptchaCount?: string | null;

		/** Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA. */
		pageloadCount?: string | null;

		/** Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification. */
		passedCount?: string | null;
	}

	/** Metrics related to challenges. */
	export interface GoogleCloudRecaptchaenterpriseV1ChallengeMetricsFormProperties {

		/** Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered. */
		failedCount: FormControl<string | null | undefined>,

		/** Count of nocaptchas (successful verification without a challenge) issued. */
		nocaptchaCount: FormControl<string | null | undefined>,

		/** Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA. */
		pageloadCount: FormControl<string | null | undefined>,

		/** Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification. */
		passedCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ChallengeMetricsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ChallengeMetricsFormProperties>({
			failedCount: new FormControl<string | null | undefined>(undefined),
			nocaptchaCount: new FormControl<string | null | undefined>(undefined),
			pageloadCount: new FormControl<string | null | undefined>(undefined),
			passedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings specific to keys that can be used by iOS apps. */
	export interface GoogleCloudRecaptchaenterpriseV1IOSKeySettings {

		/** Optional. If set to true, allowed_bundle_ids are not enforced. */
		allowAllBundleIds?: boolean | null;

		/** Optional. iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname' */
		allowedBundleIds?: Array<string>;

		/** Contains fields that are required to perform Apple-specific integrity checks. */
		appleDeveloperId?: GoogleCloudRecaptchaenterpriseV1AppleDeveloperId;
	}

	/** Settings specific to keys that can be used by iOS apps. */
	export interface GoogleCloudRecaptchaenterpriseV1IOSKeySettingsFormProperties {

		/** Optional. If set to true, allowed_bundle_ids are not enforced. */
		allowAllBundleIds: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1IOSKeySettingsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1IOSKeySettingsFormProperties>({
			allowAllBundleIds: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1Key {

		/** Settings specific to keys that can be used by Android apps. */
		androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;

		/** Output only. The timestamp corresponding to the creation of this key. */
		createTime?: string | null;

		/** Required. Human-readable display name of this key. Modifiable by user. */
		displayName?: string | null;

		/** Settings specific to keys that can be used by iOS apps. */
		iosSettings?: GoogleCloudRecaptchaenterpriseV1IOSKeySettings;

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha-enterprise/docs/labels). */
		labels?: {[id: string]: string };

		/** Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`. */
		name?: string | null;

		/** Options for user acceptance testing. */
		testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;

		/** Settings specific to keys that can be used for WAF (Web Application Firewall). */
		wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;

		/** Settings specific to keys that can be used by websites. */
		webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
	}

	/** A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. */
	export interface GoogleCloudRecaptchaenterpriseV1KeyFormProperties {

		/** Output only. The timestamp corresponding to the creation of this key. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Human-readable display name of this key. Modifiable by user. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha-enterprise/docs/labels). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1KeyFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1KeyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for user acceptance testing. */
	export interface GoogleCloudRecaptchaenterpriseV1TestingOptions {

		/** Optional. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE. */
		testingChallenge?: GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallenge | null;

		/** Optional. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive. */
		testingScore?: number | null;
	}

	/** Options for user acceptance testing. */
	export interface GoogleCloudRecaptchaenterpriseV1TestingOptionsFormProperties {

		/** Optional. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE. */
		testingChallenge: FormControl<GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallenge | null | undefined>,

		/** Optional. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive. */
		testingScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1TestingOptionsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1TestingOptionsFormProperties>({
			testingChallenge: new FormControl<GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallenge | null | undefined>(undefined),
			testingScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallenge { TESTING_CHALLENGE_UNSPECIFIED = 'TESTING_CHALLENGE_UNSPECIFIED', NOCAPTCHA = 'NOCAPTCHA', UNSOLVABLE_CHALLENGE = 'UNSOLVABLE_CHALLENGE' }


	/** Settings specific to keys that can be used for WAF (Web Application Firewall). */
	export interface GoogleCloudRecaptchaenterpriseV1WafSettings {

		/** Required. The WAF feature for which this key is enabled. */
		wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeature | null;

		/** Required. The WAF service that uses this key. */
		wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafService | null;
	}

	/** Settings specific to keys that can be used for WAF (Web Application Firewall). */
	export interface GoogleCloudRecaptchaenterpriseV1WafSettingsFormProperties {

		/** Required. The WAF feature for which this key is enabled. */
		wafFeature: FormControl<GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeature | null | undefined>,

		/** Required. The WAF service that uses this key. */
		wafService: FormControl<GoogleCloudRecaptchaenterpriseV1WafSettingsWafService | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1WafSettingsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1WafSettingsFormProperties>({
			wafFeature: new FormControl<GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeature | null | undefined>(undefined),
			wafService: new FormControl<GoogleCloudRecaptchaenterpriseV1WafSettingsWafService | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeature { WAF_FEATURE_UNSPECIFIED = 'WAF_FEATURE_UNSPECIFIED', CHALLENGE_PAGE = 'CHALLENGE_PAGE', SESSION_TOKEN = 'SESSION_TOKEN', ACTION_TOKEN = 'ACTION_TOKEN', EXPRESS = 'EXPRESS' }

	export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafService { WAF_SERVICE_UNSPECIFIED = 'WAF_SERVICE_UNSPECIFIED', CA = 'CA', FASTLY = 'FASTLY' }


	/** Settings specific to keys that can be used by websites. */
	export interface GoogleCloudRecaptchaenterpriseV1WebKeySettings {

		/** Optional. If set to true, it means allowed_domains will not be enforced. */
		allowAllDomains?: boolean | null;

		/** Optional. If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type. */
		allowAmpTraffic?: boolean | null;

		/** Optional. Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com' */
		allowedDomains?: Array<string>;

		/** Optional. Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. */
		challengeSecurityPreference?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreference | null;

		/** Required. Describes how this key is integrated with the website. */
		integrationType?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationType | null;
	}

	/** Settings specific to keys that can be used by websites. */
	export interface GoogleCloudRecaptchaenterpriseV1WebKeySettingsFormProperties {

		/** Optional. If set to true, it means allowed_domains will not be enforced. */
		allowAllDomains: FormControl<boolean | null | undefined>,

		/** Optional. If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type. */
		allowAmpTraffic: FormControl<boolean | null | undefined>,

		/** Optional. Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. */
		challengeSecurityPreference: FormControl<GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreference | null | undefined>,

		/** Required. Describes how this key is integrated with the website. */
		integrationType: FormControl<GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationType | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1WebKeySettingsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1WebKeySettingsFormProperties>({
			allowAllDomains: new FormControl<boolean | null | undefined>(undefined),
			allowAmpTraffic: new FormControl<boolean | null | undefined>(undefined),
			challengeSecurityPreference: new FormControl<GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreference | null | undefined>(undefined),
			integrationType: new FormControl<GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreference { CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED = 'CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED', USABILITY = 'USABILITY', BALANCE = 'BALANCE', SECURITY = 'SECURITY' }

	export enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationType { INTEGRATION_TYPE_UNSPECIFIED = 'INTEGRATION_TYPE_UNSPECIFIED', SCORE = 'SCORE', CHECKBOX = 'CHECKBOX', INVISIBLE = 'INVISIBLE' }


	/** Response to request to list firewall policies belonging to a key. */
	export interface GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse {

		/** Policy details. */
		firewallPolicies?: Array<GoogleCloudRecaptchaenterpriseV1FirewallPolicy>;

		/** Token to retrieve the next page of results. It is set to empty if no policies remain in results. */
		nextPageToken?: string | null;
	}

	/** Response to request to list firewall policies belonging to a key. */
	export interface GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponseFormProperties {

		/** Token to retrieve the next page of results. It is set to empty if no policies remain in results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to request to list keys in a project. */
	export interface GoogleCloudRecaptchaenterpriseV1ListKeysResponse {

		/** Key details. */
		keys?: Array<GoogleCloudRecaptchaenterpriseV1Key>;

		/** Token to retrieve the next page of results. It is set to empty if no keys remain in results. */
		nextPageToken?: string | null;
	}

	/** Response to request to list keys in a project. */
	export interface GoogleCloudRecaptchaenterpriseV1ListKeysResponseFormProperties {

		/** Token to retrieve the next page of results. It is set to empty if no keys remain in results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ListKeysResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ListKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a `ListRelatedAccountGroupMemberships` call. */
	export interface GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The memberships listed by the query. */
		relatedAccountGroupMemberships?: Array<GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership>;
	}

	/** The response to a `ListRelatedAccountGroupMemberships` call. */
	export interface GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A membership in a group of related accounts. */
	export interface GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership {

		/** The unique stable account identifier of the member. The identifier corresponds to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. */
		accountId?: string | null;

		/** Deprecated: use `account_id` instead. The unique stable hashed account identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. */
		hashedAccountId?: string | null;

		/** Required. Identifier. The resource name for this membership in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}`. */
		name?: string | null;
	}

	/** A membership in a group of related accounts. */
	export interface GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipFormProperties {

		/** The unique stable account identifier of the member. The identifier corresponds to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. */
		accountId: FormControl<string | null | undefined>,

		/** Deprecated: use `account_id` instead. The unique stable hashed account identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. */
		hashedAccountId: FormControl<string | null | undefined>,

		/** Required. Identifier. The resource name for this membership in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembershipFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			hashedAccountId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a `ListRelatedAccountGroups` call. */
	export interface GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The groups of related accounts listed by the query. */
		relatedAccountGroups?: Array<GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup>;
	}

	/** The response to a `ListRelatedAccountGroups` call. */
	export interface GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group of related accounts. */
	export interface GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup {

		/** Required. Identifier. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{related_account_group}`. */
		name?: string | null;
	}

	/** A group of related accounts. */
	export interface GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupFormProperties {

		/** Required. Identifier. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{related_account_group}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1RelatedAccountGroupFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics for a single Key. */
	export interface GoogleCloudRecaptchaenterpriseV1Metrics {

		/** Metrics will be continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE), will have challenge-based data. */
		challengeMetrics?: Array<GoogleCloudRecaptchaenterpriseV1ChallengeMetrics>;

		/** Output only. Identifier. The name of the metrics, in the format `projects/{project}/keys/{key}/metrics`. */
		name?: string | null;

		/** Metrics will be continuous and in order by dates, and in the granularity of day. All Key types should have score-based data. */
		scoreMetrics?: Array<GoogleCloudRecaptchaenterpriseV1ScoreMetrics>;

		/** Inclusive start time aligned to a day (UTC). */
		startTime?: string | null;
	}

	/** Metrics for a single Key. */
	export interface GoogleCloudRecaptchaenterpriseV1MetricsFormProperties {

		/** Output only. Identifier. The name of the metrics, in the format `projects/{project}/keys/{key}/metrics`. */
		name: FormControl<string | null | undefined>,

		/** Inclusive start time aligned to a day (UTC). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1MetricsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1MetricsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics related to scoring. */
	export interface GoogleCloudRecaptchaenterpriseV1ScoreMetrics {

		/** Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call. */
		actionMetrics?: {[id: string]: GoogleCloudRecaptchaenterpriseV1ScoreDistribution };

		/** Score distribution. */
		overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
	}

	/** Metrics related to scoring. */
	export interface GoogleCloudRecaptchaenterpriseV1ScoreMetricsFormProperties {

		/** Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call. */
		actionMetrics: FormControl<{[id: string]: GoogleCloudRecaptchaenterpriseV1ScoreDistribution } | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ScoreMetricsFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ScoreMetricsFormProperties>({
			actionMetrics: new FormControl<{[id: string]: GoogleCloudRecaptchaenterpriseV1ScoreDistribution } | null | undefined>(undefined),
		});

	}


	/** Score distribution. */
	export interface GoogleCloudRecaptchaenterpriseV1ScoreDistribution {

		/** Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10). */
		scoreBuckets?: {[id: string]: string };
	}

	/** Score distribution. */
	export interface GoogleCloudRecaptchaenterpriseV1ScoreDistributionFormProperties {

		/** Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10). */
		scoreBuckets: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1ScoreDistributionFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1ScoreDistributionFormProperties>({
			scoreBuckets: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The migrate key request message. */
	export interface GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest {

		/** Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information. */
		skipBillingCheck?: boolean | null;
	}

	/** The migrate key request message. */
	export interface GoogleCloudRecaptchaenterpriseV1MigrateKeyRequestFormProperties {

		/** Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha-enterprise/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha-enterprise/docs/billing-information. */
		skipBillingCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1MigrateKeyRequestFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1MigrateKeyRequestFormProperties>({
			skipBillingCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA. */
	export interface GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse {

		/** The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes. */
		legacySecretKey?: string | null;
	}

	/** Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA. */
	export interface GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponseFormProperties {

		/** The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes. */
		legacySecretKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponseFormProperties>({
			legacySecretKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message to search related account group memberships. */
	export interface GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest {

		/** Optional. The unique stable account identifier used to search connections. The identifier should correspond to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both. */
		accountId?: string | null;

		/** Optional. Deprecated: use `account_id` instead. The unique stable hashed account identifier used to search connections. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both. */
		hashedAccountId?: string | null;

		/** Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
		pageSize?: number | null;

		/** Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token. */
		pageToken?: string | null;
	}

	/** The request message to search related account group memberships. */
	export interface GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequestFormProperties {

		/** Optional. The unique stable account identifier used to search connections. The identifier should correspond to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both. */
		accountId: FormControl<string | null | undefined>,

		/** Optional. Deprecated: use `account_id` instead. The unique stable hashed account identifier used to search connections. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both. */
		hashedAccountId: FormControl<string | null | undefined>,

		/** Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequestFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			hashedAccountId: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a `SearchRelatedAccountGroupMemberships` call. */
	export interface GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The queried memberships. */
		relatedAccountGroupMemberships?: Array<GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership>;
	}

	/** The response to a `SearchRelatedAccountGroupMemberships` call. */
	export interface GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
		 * Get v1/{key}:retrieveLegacySecretKey
		 * @param {string} key Required. The public key name linked to the requested secret key in the format `projects/{project}/keys/{key}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse} Successful response
		 */
		Recaptchaenterprise_projects_keys_retrieveLegacySecretKey(key: string): Observable<GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>(this.baseUri + 'v1/' + (key == null ? '' : encodeURIComponent(key)) + ':retrieveLegacySecretKey', {});
		}

		/**
		 * Deletes the specified key.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the key to be deleted, in the format `projects/{project}/keys/{key}`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Recaptchaenterprise_projects_keys_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get some aggregated metrics for a Key. This data can be used to build dashboards.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the requested metrics, in the format `projects/{project}/keys/{key}/metrics`.
		 * @return {GoogleCloudRecaptchaenterpriseV1Metrics} Successful response
		 */
		Recaptchaenterprise_projects_keys_getMetrics(name: string): Observable<GoogleCloudRecaptchaenterpriseV1Metrics> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1Metrics>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified key.
		 * Patch v1/{name}
		 * @param {string} name Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`.
		 * @param {string} updateMask Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated.
		 * @return {GoogleCloudRecaptchaenterpriseV1Key} Successful response
		 */
		Recaptchaenterprise_projects_keys_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudRecaptchaenterpriseV1Key): Observable<GoogleCloudRecaptchaenterpriseV1Key> {
			return this.http.patch<GoogleCloudRecaptchaenterpriseV1Key>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
		 * Post v1/{name}:annotate
		 * @param {string} name Required. The resource name of the Assessment, in the format `projects/{project}/assessments/{assessment}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse} Successful response
		 */
		Recaptchaenterprise_projects_assessments_annotate(name: string, requestBody: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest): Observable<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
		 * Post v1/{name}:migrate
		 * @param {string} name Required. The name of the key to be migrated, in the format `projects/{project}/keys/{key}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1Key} Successful response
		 */
		Recaptchaenterprise_projects_keys_migrate(name: string, requestBody: GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest): Observable<GoogleCloudRecaptchaenterpriseV1Key> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1Key>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':migrate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Assessment of the likelihood an event is legitimate.
		 * Post v1/{parent}/assessments
		 * @param {string} parent Required. The name of the project in which the assessment will be created, in the format `projects/{project}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1Assessment} Successful response
		 */
		Recaptchaenterprise_projects_assessments_create(parent: string, requestBody: GoogleCloudRecaptchaenterpriseV1Assessment): Observable<GoogleCloudRecaptchaenterpriseV1Assessment> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1Assessment>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assessments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all firewall policies that belong to a project.
		 * Get v1/{parent}/firewallpolicies
		 * @param {string} parent Required. The name of the project to list the policies for, in the format `projects/{project}`.
		 * @param {number} pageSize Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.
		 * @return {GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse} Successful response
		 */
		Recaptchaenterprise_projects_firewallpolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firewallpolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
		 * Post v1/{parent}/firewallpolicies
		 * @param {string} parent Required. The name of the project this policy will apply to, in the format `projects/{project}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1FirewallPolicy} Successful response
		 */
		Recaptchaenterprise_projects_firewallpolicies_create(parent: string, requestBody: GoogleCloudRecaptchaenterpriseV1FirewallPolicy): Observable<GoogleCloudRecaptchaenterpriseV1FirewallPolicy> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firewallpolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all keys that belong to a project.
		 * Get v1/{parent}/keys
		 * @param {string} parent Required. The name of the project that contains the keys that will be listed, in the format `projects/{project}`.
		 * @param {number} pageSize Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
		 * @return {GoogleCloudRecaptchaenterpriseV1ListKeysResponse} Successful response
		 */
		Recaptchaenterprise_projects_keys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecaptchaenterpriseV1ListKeysResponse> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1ListKeysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new reCAPTCHA Enterprise key.
		 * Post v1/{parent}/keys
		 * @param {string} parent Required. The name of the project in which the key will be created, in the format `projects/{project}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1Key} Successful response
		 */
		Recaptchaenterprise_projects_keys_create(parent: string, requestBody: GoogleCloudRecaptchaenterpriseV1Key): Observable<GoogleCloudRecaptchaenterpriseV1Key> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1Key>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get memberships in a group of related accounts.
		 * Get v1/{parent}/memberships
		 * @param {string} parent Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.
		 * @param {number} pageSize Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
		 * @return {GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse} Successful response
		 */
		Recaptchaenterprise_projects_relatedaccountgroups_memberships_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List groups of related accounts.
		 * Get v1/{parent}/relatedaccountgroups
		 * @param {string} parent Required. The name of the project to list related account groups from, in the format `projects/{project}`.
		 * @param {number} pageSize Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
		 * @return {GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse} Successful response
		 */
		Recaptchaenterprise_projects_relatedaccountgroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse> {
			return this.http.get<GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/relatedaccountgroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Search group memberships related to a given account.
		 * Post v1/{project}/relatedaccountgroupmemberships:search
		 * @param {string} project Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project}`.
		 * @return {GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse} Successful response
		 */
		Recaptchaenterprise_projects_relatedaccountgroupmemberships_search(project: string, requestBody: GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest): Observable<GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse> {
			return this.http.post<GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/relatedaccountgroupmemberships:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

