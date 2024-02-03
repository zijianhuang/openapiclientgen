import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
		});

	}

	export interface AuthorizationErrorException {
	}
	export interface AuthorizationErrorExceptionFormProperties {
	}
	export function CreateAuthorizationErrorExceptionFormGroup() {
		return new FormGroup<AuthorizationErrorExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}


	/** The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutResponse {
		isOptedOut?: boolean | null;
	}

	/** The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutResponseFormProperties {
		isOptedOut: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckIfPhoneNumberIsOptedOutResponseFormGroup() {
		return new FormGroup<CheckIfPhoneNumberIsOptedOutResponseFormProperties>({
			isOptedOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ThrottledException {
	}
	export interface ThrottledExceptionFormProperties {
	}
	export function CreateThrottledExceptionFormGroup() {
		return new FormGroup<ThrottledExceptionFormProperties>({
		});

	}


	/** Response for ConfirmSubscriptions action. */
	export interface ConfirmSubscriptionResponse {
		SubscriptionArn?: string;
	}

	/** Response for ConfirmSubscriptions action. */
	export interface ConfirmSubscriptionResponseFormProperties {
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateConfirmSubscriptionResponseFormGroup() {
		return new FormGroup<ConfirmSubscriptionResponseFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionLimitExceededException {
	}
	export interface SubscriptionLimitExceededExceptionFormProperties {
	}
	export function CreateSubscriptionLimitExceededExceptionFormGroup() {
		return new FormGroup<SubscriptionLimitExceededExceptionFormProperties>({
		});

	}

	export interface FilterPolicyLimitExceededException {
	}
	export interface FilterPolicyLimitExceededExceptionFormProperties {
	}
	export function CreateFilterPolicyLimitExceededExceptionFormGroup() {
		return new FormGroup<FilterPolicyLimitExceededExceptionFormProperties>({
		});

	}


	/** Response from CreatePlatformApplication action. */
	export interface CreatePlatformApplicationResponse {
		PlatformApplicationArn?: string;
	}

	/** Response from CreatePlatformApplication action. */
	export interface CreatePlatformApplicationResponseFormProperties {
		PlatformApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlatformApplicationResponseFormGroup() {
		return new FormGroup<CreatePlatformApplicationResponseFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from CreateEndpoint action. */
	export interface CreateEndpointResponse {
		EndpointArn?: string;
	}

	/** Response from CreateEndpoint action. */
	export interface CreateEndpointResponseFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointResponseFormGroup() {
		return new FormGroup<CreateEndpointResponseFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSMSSandboxPhoneNumberResult {
	}
	export interface CreateSMSSandboxPhoneNumberResultFormProperties {
	}
	export function CreateCreateSMSSandboxPhoneNumberResultFormGroup() {
		return new FormGroup<CreateSMSSandboxPhoneNumberResultFormProperties>({
		});

	}

	export interface OptedOutException {
	}
	export interface OptedOutExceptionFormProperties {
	}
	export function CreateOptedOutExceptionFormGroup() {
		return new FormGroup<OptedOutExceptionFormProperties>({
		});

	}

	export interface UserErrorException {
	}
	export interface UserErrorExceptionFormProperties {
	}
	export function CreateUserErrorExceptionFormGroup() {
		return new FormGroup<UserErrorExceptionFormProperties>({
		});

	}


	/** Response from CreateTopic action. */
	export interface CreateTopicResponse {
		TopicArn?: string;
	}

	/** Response from CreateTopic action. */
	export interface CreateTopicResponseFormProperties {
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTopicResponseFormGroup() {
		return new FormGroup<CreateTopicResponseFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of tags to be added to the specified topic. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The list of tags to be added to the specified topic. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TopicLimitExceededException {
	}
	export interface TopicLimitExceededExceptionFormProperties {
	}
	export function CreateTopicLimitExceededExceptionFormGroup() {
		return new FormGroup<TopicLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidSecurityException {
	}
	export interface InvalidSecurityExceptionFormProperties {
	}
	export function CreateInvalidSecurityExceptionFormGroup() {
		return new FormGroup<InvalidSecurityExceptionFormProperties>({
		});

	}

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
		});

	}

	export interface StaleTagException {
	}
	export interface StaleTagExceptionFormProperties {
	}
	export function CreateStaleTagExceptionFormGroup() {
		return new FormGroup<StaleTagExceptionFormProperties>({
		});

	}

	export interface TagPolicyException {
	}
	export interface TagPolicyExceptionFormProperties {
	}
	export function CreateTagPolicyExceptionFormGroup() {
		return new FormGroup<TagPolicyExceptionFormProperties>({
		});

	}

	export interface ConcurrentAccessException {
	}
	export interface ConcurrentAccessExceptionFormProperties {
	}
	export function CreateConcurrentAccessExceptionFormGroup() {
		return new FormGroup<ConcurrentAccessExceptionFormProperties>({
		});

	}

	export interface DeleteSMSSandboxPhoneNumberResult {
	}
	export interface DeleteSMSSandboxPhoneNumberResultFormProperties {
	}
	export function CreateDeleteSMSSandboxPhoneNumberResultFormGroup() {
		return new FormGroup<DeleteSMSSandboxPhoneNumberResultFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface GetDataProtectionPolicyResponse {
		DataProtectionPolicy?: string;
	}
	export interface GetDataProtectionPolicyResponseFormProperties {
		DataProtectionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetDataProtectionPolicyResponseFormGroup() {
		return new FormGroup<GetDataProtectionPolicyResponseFormProperties>({
			DataProtectionPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from GetEndpointAttributes of the EndpointArn. */
	export interface GetEndpointAttributesResponse {
		Attributes?: MapStringToString;
	}

	/** Response from GetEndpointAttributes of the EndpointArn. */
	export interface GetEndpointAttributesResponseFormProperties {
	}
	export function CreateGetEndpointAttributesResponseFormGroup() {
		return new FormGroup<GetEndpointAttributesResponseFormProperties>({
		});

	}

	export interface MapStringToString {
	}
	export interface MapStringToStringFormProperties {
	}
	export function CreateMapStringToStringFormGroup() {
		return new FormGroup<MapStringToStringFormProperties>({
		});

	}


	/** Response for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesResponse {
		Attributes?: MapStringToString;
	}

	/** Response for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesResponseFormProperties {
	}
	export function CreateGetPlatformApplicationAttributesResponseFormGroup() {
		return new FormGroup<GetPlatformApplicationAttributesResponseFormProperties>({
		});

	}


	/** The response from the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesResponse {
		attributes?: MapStringToString;
	}

	/** The response from the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesResponseFormProperties {
	}
	export function CreateGetSMSAttributesResponseFormGroup() {
		return new FormGroup<GetSMSAttributesResponseFormProperties>({
		});

	}

	export interface GetSMSSandboxAccountStatusResult {

		/** Required */
		IsInSandbox: boolean;
	}
	export interface GetSMSSandboxAccountStatusResultFormProperties {

		/** Required */
		IsInSandbox: FormControl<boolean | null | undefined>,
	}
	export function CreateGetSMSSandboxAccountStatusResultFormGroup() {
		return new FormGroup<GetSMSSandboxAccountStatusResultFormProperties>({
			IsInSandbox: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response for GetSubscriptionAttributes action. */
	export interface GetSubscriptionAttributesResponse {
		Attributes?: SubscriptionAttributesMap;
	}

	/** Response for GetSubscriptionAttributes action. */
	export interface GetSubscriptionAttributesResponseFormProperties {
	}
	export function CreateGetSubscriptionAttributesResponseFormGroup() {
		return new FormGroup<GetSubscriptionAttributesResponseFormProperties>({
		});

	}

	export interface SubscriptionAttributesMap {
	}
	export interface SubscriptionAttributesMapFormProperties {
	}
	export function CreateSubscriptionAttributesMapFormGroup() {
		return new FormGroup<SubscriptionAttributesMapFormProperties>({
		});

	}


	/** Response for GetTopicAttributes action. */
	export interface GetTopicAttributesResponse {
		Attributes?: TopicAttributesMap;
	}

	/** Response for GetTopicAttributes action. */
	export interface GetTopicAttributesResponseFormProperties {
	}
	export function CreateGetTopicAttributesResponseFormGroup() {
		return new FormGroup<GetTopicAttributesResponseFormProperties>({
		});

	}

	export interface TopicAttributesMap {
	}
	export interface TopicAttributesMapFormProperties {
	}
	export function CreateTopicAttributesMapFormGroup() {
		return new FormGroup<TopicAttributesMapFormProperties>({
		});

	}


	/** Response for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationResponse {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}

	/** Response for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsByPlatformApplicationResponseFormGroup() {
		return new FormGroup<ListEndpointsByPlatformApplicationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoint for mobile app and device. */
	export interface Endpoint {
		EndpointArn?: string;
		Attributes?: MapStringToString;
	}

	/** The endpoint for mobile app and device. */
	export interface EndpointFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOriginationNumbersResult {
		NextToken?: string;
		PhoneNumbers?: Array<PhoneNumberInformation>;
	}
	export interface ListOriginationNumbersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOriginationNumbersResultFormGroup() {
		return new FormGroup<ListOriginationNumbersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of phone numbers and their metadata. */
	export interface PhoneNumberInformation {
		CreatedAt?: Date;
		PhoneNumber?: string;
		Status?: string;
		Iso2CountryCode?: string;
		RouteType?: RouteType;
		NumberCapabilities?: Array<NumberCapability>;
	}

	/** A list of phone numbers and their metadata. */
	export interface PhoneNumberInformationFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Iso2CountryCode: FormControl<string | null | undefined>,
		RouteType: FormControl<RouteType | null | undefined>,
	}
	export function CreatePhoneNumberInformationFormGroup() {
		return new FormGroup<PhoneNumberInformationFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Iso2CountryCode: new FormControl<string | null | undefined>(undefined),
			RouteType: new FormControl<RouteType | null | undefined>(undefined),
		});

	}


	/** Enum listing out all supported route types. The following enum values are supported. 1. Transactional : Non-marketing traffic 2. Promotional : Marketing 3. Premium : Premium routes for OTP delivery to the carriers */
	export enum RouteType { Transactional = 'Transactional', Promotional = 'Promotional', Premium = 'Premium' }


	/** Enum listing out all supported number capabilities. */
	export enum NumberCapability { SMS = 'SMS', MMS = 'MMS', VOICE = 'VOICE' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}


	/** The response from the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutResponse {
		phoneNumbers?: Array<string>;
		nextToken?: string;
	}

	/** The response from the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersOptedOutResponseFormGroup() {
		return new FormGroup<ListPhoneNumbersOptedOutResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListPlatformApplications action. */
	export interface ListPlatformApplicationsResponse {
		PlatformApplications?: Array<PlatformApplication>;
		NextToken?: string;
	}

	/** Response for ListPlatformApplications action. */
	export interface ListPlatformApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformApplicationsResponseFormGroup() {
		return new FormGroup<ListPlatformApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Platform application object. */
	export interface PlatformApplication {
		PlatformApplicationArn?: string;
		Attributes?: MapStringToString;
	}

	/** Platform application object. */
	export interface PlatformApplicationFormProperties {
		PlatformApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreatePlatformApplicationFormGroup() {
		return new FormGroup<PlatformApplicationFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSMSSandboxPhoneNumbersResult {

		/** Required */
		PhoneNumbers: Array<SMSSandboxPhoneNumber>;
		NextToken?: string;
	}
	export interface ListSMSSandboxPhoneNumbersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSMSSandboxPhoneNumbersResultFormGroup() {
		return new FormGroup<ListSMSSandboxPhoneNumbersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A verified or pending destination phone number in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p> */
	export interface SMSSandboxPhoneNumber {
		PhoneNumber?: string;
		Status?: SMSSandboxPhoneNumberVerificationStatus;
	}

	/** <p>A verified or pending destination phone number in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p> */
	export interface SMSSandboxPhoneNumberFormProperties {
		PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<SMSSandboxPhoneNumberVerificationStatus | null | undefined>,
	}
	export function CreateSMSSandboxPhoneNumberFormGroup() {
		return new FormGroup<SMSSandboxPhoneNumberFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SMSSandboxPhoneNumberVerificationStatus | null | undefined>(undefined),
		});

	}


	/** Enum listing out all supported destination phone number verification statuses. The following enum values are supported. 1. PENDING : The destination phone number is pending verification. 2. VERIFIED : The destination phone number is verified. */
	export enum SMSSandboxPhoneNumberVerificationStatus { Pending = 'Pending', Verified = 'Verified' }


	/** Response for ListSubscriptions action */
	export interface ListSubscriptionsResponse {
		Subscriptions?: Array<Subscription>;
		NextToken?: string;
	}

	/** Response for ListSubscriptions action */
	export interface ListSubscriptionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface Subscription {
		SubscriptionArn?: string;
		Owner?: string;
		Protocol?: string;
		Endpoint?: string;
		TopicArn?: string;
	}

	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface SubscriptionFormProperties {
		SubscriptionArn: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicResponse {
		Subscriptions?: Array<Subscription>;
		NextToken?: string;
	}

	/** Response for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsByTopicResponseFormGroup() {
		return new FormGroup<ListSubscriptionsByTopicResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** Response for ListTopics action. */
	export interface ListTopicsResponse {
		Topics?: Array<Topic>;
		NextToken?: string;
	}

	/** Response for ListTopics action. */
	export interface ListTopicsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsResponseFormGroup() {
		return new FormGroup<ListTopicsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>. */
	export interface Topic {
		TopicArn?: string;
	}

	/** A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>. */
	export interface TopicFormProperties {
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberResponse {
	}

	/** The response for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberResponseFormProperties {
	}
	export function CreateOptInPhoneNumberResponseFormGroup() {
		return new FormGroup<OptInPhoneNumberResponseFormProperties>({
		});

	}


	/** Response for Publish action. */
	export interface PublishResponse {
		MessageId?: string;
		SequenceNumber?: string;
	}

	/** Response for Publish action. */
	export interface PublishResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePublishResponseFormGroup() {
		return new FormGroup<PublishResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p> */
	export interface MessageAttributeValue {

		/** Required */
		DataType: string;
		StringValue?: string;
		BinaryValue?: string;
	}

	/** <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Amazon SNS message attributes</a> and <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide.</i> </p> */
	export interface MessageAttributeValueFormProperties {

		/** Required */
		DataType: FormControl<string | null | undefined>,
		StringValue: FormControl<string | null | undefined>,
		BinaryValue: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttributeValueFormGroup() {
		return new FormGroup<MessageAttributeValueFormProperties>({
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StringValue: new FormControl<string | null | undefined>(undefined),
			BinaryValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface EndpointDisabledException {
	}
	export interface EndpointDisabledExceptionFormProperties {
	}
	export function CreateEndpointDisabledExceptionFormGroup() {
		return new FormGroup<EndpointDisabledExceptionFormProperties>({
		});

	}

	export interface PlatformApplicationDisabledException {
	}
	export interface PlatformApplicationDisabledExceptionFormProperties {
	}
	export function CreatePlatformApplicationDisabledExceptionFormGroup() {
		return new FormGroup<PlatformApplicationDisabledExceptionFormProperties>({
		});

	}

	export interface KMSDisabledException {
	}
	export interface KMSDisabledExceptionFormProperties {
	}
	export function CreateKMSDisabledExceptionFormGroup() {
		return new FormGroup<KMSDisabledExceptionFormProperties>({
		});

	}

	export interface KMSInvalidStateException {
	}
	export interface KMSInvalidStateExceptionFormProperties {
	}
	export function CreateKMSInvalidStateExceptionFormGroup() {
		return new FormGroup<KMSInvalidStateExceptionFormProperties>({
		});

	}

	export interface KMSNotFoundException {
	}
	export interface KMSNotFoundExceptionFormProperties {
	}
	export function CreateKMSNotFoundExceptionFormGroup() {
		return new FormGroup<KMSNotFoundExceptionFormProperties>({
		});

	}

	export interface KMSOptInRequired {
	}
	export interface KMSOptInRequiredFormProperties {
	}
	export function CreateKMSOptInRequiredFormGroup() {
		return new FormGroup<KMSOptInRequiredFormProperties>({
		});

	}

	export interface KMSThrottlingException {
	}
	export interface KMSThrottlingExceptionFormProperties {
	}
	export function CreateKMSThrottlingExceptionFormGroup() {
		return new FormGroup<KMSThrottlingExceptionFormProperties>({
		});

	}

	export interface KMSAccessDeniedException {
	}
	export interface KMSAccessDeniedExceptionFormProperties {
	}
	export function CreateKMSAccessDeniedExceptionFormGroup() {
		return new FormGroup<KMSAccessDeniedExceptionFormProperties>({
		});

	}

	export interface PublishBatchResponse {
		Successful?: Array<PublishBatchResultEntry>;
		Failed?: Array<BatchResultErrorEntry>;
	}
	export interface PublishBatchResponseFormProperties {
	}
	export function CreatePublishBatchResponseFormGroup() {
		return new FormGroup<PublishBatchResponseFormProperties>({
		});

	}


	/** Encloses data related to a successful message in a batch request for topic. */
	export interface PublishBatchResultEntry {
		Id?: string;
		MessageId?: string;
		SequenceNumber?: string;
	}

	/** Encloses data related to a successful message in a batch request for topic. */
	export interface PublishBatchResultEntryFormProperties {
		Id: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePublishBatchResultEntryFormGroup() {
		return new FormGroup<PublishBatchResultEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gives a detailed description of failed messages in the batch. */
	export interface BatchResultErrorEntry {

		/** Required */
		Id: string;

		/** Required */
		Code: string;
		Message?: string;

		/** Required */
		SenderFault: boolean;
	}

	/** Gives a detailed description of failed messages in the batch. */
	export interface BatchResultErrorEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/** Required */
		SenderFault: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchResultErrorEntryFormGroup() {
		return new FormGroup<BatchResultErrorEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			SenderFault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the details of a single Amazon SNS message along with an <code>Id</code> that identifies a message within the batch.  */
	export interface PublishBatchRequestEntry {

		/** Required */
		Id: string;

		/** Required */
		Message: string;
		Subject?: string;
		MessageStructure?: string;
		MessageAttributes?: MessageAttributeMap;
		MessageDeduplicationId?: string;
		MessageGroupId?: string;
	}

	/** Contains the details of a single Amazon SNS message along with an <code>Id</code> that identifies a message within the batch.  */
	export interface PublishBatchRequestEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		MessageStructure: FormControl<string | null | undefined>,
		MessageDeduplicationId: FormControl<string | null | undefined>,
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePublishBatchRequestEntryFormGroup() {
		return new FormGroup<PublishBatchRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined),
			MessageStructure: new FormControl<string | null | undefined>(undefined),
			MessageDeduplicationId: new FormControl<string | null | undefined>(undefined),
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageAttributeMap {
	}
	export interface MessageAttributeMapFormProperties {
	}
	export function CreateMessageAttributeMapFormGroup() {
		return new FormGroup<MessageAttributeMapFormProperties>({
		});

	}

	export interface BatchEntryIdsNotDistinctException {
	}
	export interface BatchEntryIdsNotDistinctExceptionFormProperties {
	}
	export function CreateBatchEntryIdsNotDistinctExceptionFormGroup() {
		return new FormGroup<BatchEntryIdsNotDistinctExceptionFormProperties>({
		});

	}

	export interface BatchRequestTooLongException {
	}
	export interface BatchRequestTooLongExceptionFormProperties {
	}
	export function CreateBatchRequestTooLongExceptionFormGroup() {
		return new FormGroup<BatchRequestTooLongExceptionFormProperties>({
		});

	}

	export interface EmptyBatchRequestException {
	}
	export interface EmptyBatchRequestExceptionFormProperties {
	}
	export function CreateEmptyBatchRequestExceptionFormGroup() {
		return new FormGroup<EmptyBatchRequestExceptionFormProperties>({
		});

	}

	export interface InvalidBatchEntryIdException {
	}
	export interface InvalidBatchEntryIdExceptionFormProperties {
	}
	export function CreateInvalidBatchEntryIdExceptionFormGroup() {
		return new FormGroup<InvalidBatchEntryIdExceptionFormProperties>({
		});

	}

	export interface TooManyEntriesInBatchRequestException {
	}
	export interface TooManyEntriesInBatchRequestExceptionFormProperties {
	}
	export function CreateTooManyEntriesInBatchRequestExceptionFormGroup() {
		return new FormGroup<TooManyEntriesInBatchRequestExceptionFormProperties>({
		});

	}


	/** The response for the SetSMSAttributes action. */
	export interface SetSMSAttributesResponse {
	}

	/** The response for the SetSMSAttributes action. */
	export interface SetSMSAttributesResponseFormProperties {
	}
	export function CreateSetSMSAttributesResponseFormGroup() {
		return new FormGroup<SetSMSAttributesResponseFormProperties>({
		});

	}


	/** Response for Subscribe action. */
	export interface SubscribeResponse {
		SubscriptionArn?: string;
	}

	/** Response for Subscribe action. */
	export interface SubscribeResponseFormProperties {
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeResponseFormGroup() {
		return new FormGroup<SubscribeResponseFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/** The destination phone number's verification status. */
	export interface VerifySMSSandboxPhoneNumberResult {
	}

	/** The destination phone number's verification status. */
	export interface VerifySMSSandboxPhoneNumberResultFormProperties {
	}
	export function CreateVerifySMSSandboxPhoneNumberResultFormGroup() {
		return new FormGroup<VerifySMSSandboxPhoneNumberResultFormProperties>({
		});

	}

	export interface VerificationException {
	}
	export interface VerificationExceptionFormProperties {
	}
	export function CreateVerificationExceptionFormGroup() {
		return new FormGroup<VerificationExceptionFormProperties>({
		});

	}

	export interface AddPermissionInput {

		/** Required */
		TopicArn: string;

		/** Required */
		Label: string;

		/** Required */
		AWSAccountId: Array<string>;

		/** Required */
		ActionName: Array<string>;
	}
	export interface AddPermissionInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionInputFormGroup() {
		return new FormGroup<AddPermissionInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutInput {

		/** Required */
		phoneNumber: string;
	}

	/** The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutInputFormProperties {

		/** Required */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCheckIfPhoneNumberIsOptedOutInputFormGroup() {
		return new FormGroup<CheckIfPhoneNumberIsOptedOutInputFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for ConfirmSubscription action. */
	export interface ConfirmSubscriptionInput {

		/** Required */
		TopicArn: string;

		/** Required */
		Token: string;
		AuthenticateOnUnsubscribe?: string;
	}

	/** Input for ConfirmSubscription action. */
	export interface ConfirmSubscriptionInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,

		/** Required */
		Token: FormControl<string | null | undefined>,
		AuthenticateOnUnsubscribe: FormControl<string | null | undefined>,
	}
	export function CreateConfirmSubscriptionInputFormGroup() {
		return new FormGroup<ConfirmSubscriptionInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticateOnUnsubscribe: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for CreatePlatformApplication action. */
	export interface CreatePlatformApplicationInput {

		/** Required */
		Name: string;

		/** Required */
		Platform: string;

		/** Required */
		Attributes: MapStringToString;
	}

	/** Input for CreatePlatformApplication action. */
	export interface CreatePlatformApplicationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlatformApplicationInputFormGroup() {
		return new FormGroup<CreatePlatformApplicationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for CreatePlatformEndpoint action. */
	export interface CreatePlatformEndpointInput {

		/** Required */
		PlatformApplicationArn: string;

		/** Required */
		Token: string;
		CustomUserData?: string;
		Attributes?: MapStringToString;
	}

	/** Input for CreatePlatformEndpoint action. */
	export interface CreatePlatformEndpointInputFormProperties {

		/** Required */
		PlatformApplicationArn: FormControl<string | null | undefined>,

		/** Required */
		Token: FormControl<string | null | undefined>,
		CustomUserData: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlatformEndpointInputFormGroup() {
		return new FormGroup<CreatePlatformEndpointInputFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomUserData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Supported language code for sending OTP message */
	export enum LanguageCodeString { 'en-US' = 'en-US', 'en-GB' = 'en-GB', 'es-419' = 'es-419', 'es-ES' = 'es-ES', 'de-DE' = 'de-DE', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'pt-BR' = 'pt-BR', 'kr-KR' = 'kr-KR', 'zh-CN' = 'zh-CN', 'zh-TW' = 'zh-TW' }

	export interface CreateSMSSandboxPhoneNumberInput {

		/** Required */
		PhoneNumber: string;
		LanguageCode?: LanguageCodeString;
	}
	export interface CreateSMSSandboxPhoneNumberInputFormProperties {

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCodeString | null | undefined>,
	}
	export function CreateCreateSMSSandboxPhoneNumberInputFormGroup() {
		return new FormGroup<CreateSMSSandboxPhoneNumberInputFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCodeString | null | undefined>(undefined),
		});

	}


	/** Input for CreateTopic action. */
	export interface CreateTopicInput {

		/** Required */
		Name: string;
		Attributes?: TopicAttributesMap;
		Tags?: Array<Tag>;
		DataProtectionPolicy?: string;
	}

	/** Input for CreateTopic action. */
	export interface CreateTopicInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		DataProtectionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateTopicInputFormGroup() {
		return new FormGroup<CreateTopicInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataProtectionPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for DeleteEndpoint action. */
	export interface DeleteEndpointInput {

		/** Required */
		EndpointArn: string;
	}

	/** Input for DeleteEndpoint action. */
	export interface DeleteEndpointInputFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointInputFormGroup() {
		return new FormGroup<DeleteEndpointInputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for DeletePlatformApplication action. */
	export interface DeletePlatformApplicationInput {

		/** Required */
		PlatformApplicationArn: string;
	}

	/** Input for DeletePlatformApplication action. */
	export interface DeletePlatformApplicationInputFormProperties {

		/** Required */
		PlatformApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePlatformApplicationInputFormGroup() {
		return new FormGroup<DeletePlatformApplicationInputFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSMSSandboxPhoneNumberInput {

		/** Required */
		PhoneNumber: string;
	}
	export interface DeleteSMSSandboxPhoneNumberInputFormProperties {

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSMSSandboxPhoneNumberInputFormGroup() {
		return new FormGroup<DeleteSMSSandboxPhoneNumberInputFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTopicInput {

		/** Required */
		TopicArn: string;
	}
	export interface DeleteTopicInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTopicInputFormGroup() {
		return new FormGroup<DeleteTopicInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataProtectionPolicyInput {

		/** Required */
		ResourceArn: string;
	}
	export interface GetDataProtectionPolicyInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDataProtectionPolicyInputFormGroup() {
		return new FormGroup<GetDataProtectionPolicyInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for GetEndpointAttributes action. */
	export interface GetEndpointAttributesInput {

		/** Required */
		EndpointArn: string;
	}

	/** Input for GetEndpointAttributes action. */
	export interface GetEndpointAttributesInputFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateGetEndpointAttributesInputFormGroup() {
		return new FormGroup<GetEndpointAttributesInputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesInput {

		/** Required */
		PlatformApplicationArn: string;
	}

	/** Input for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesInputFormProperties {

		/** Required */
		PlatformApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPlatformApplicationAttributesInputFormGroup() {
		return new FormGroup<GetPlatformApplicationAttributesInputFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesInput {
		attributes?: Array<string>;
	}

	/** The input for the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesInputFormProperties {
	}
	export function CreateGetSMSAttributesInputFormGroup() {
		return new FormGroup<GetSMSAttributesInputFormProperties>({
		});

	}

	export interface GetSMSSandboxAccountStatusInput {
	}
	export interface GetSMSSandboxAccountStatusInputFormProperties {
	}
	export function CreateGetSMSSandboxAccountStatusInputFormGroup() {
		return new FormGroup<GetSMSSandboxAccountStatusInputFormProperties>({
		});

	}


	/** Input for GetSubscriptionAttributes. */
	export interface GetSubscriptionAttributesInput {

		/** Required */
		SubscriptionArn: string;
	}

	/** Input for GetSubscriptionAttributes. */
	export interface GetSubscriptionAttributesInputFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSubscriptionAttributesInputFormGroup() {
		return new FormGroup<GetSubscriptionAttributesInputFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for GetTopicAttributes action. */
	export interface GetTopicAttributesInput {

		/** Required */
		TopicArn: string;
	}

	/** Input for GetTopicAttributes action. */
	export interface GetTopicAttributesInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTopicAttributesInputFormGroup() {
		return new FormGroup<GetTopicAttributesInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationInput {

		/** Required */
		PlatformApplicationArn: string;
		NextToken?: string;
	}

	/** Input for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationInputFormProperties {

		/** Required */
		PlatformApplicationArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsByPlatformApplicationInputFormGroup() {
		return new FormGroup<ListEndpointsByPlatformApplicationInputFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOriginationNumbersRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListOriginationNumbersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOriginationNumbersRequestFormGroup() {
		return new FormGroup<ListOriginationNumbersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The input for the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutInput {
		nextToken?: string;
	}

	/** The input for the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersOptedOutInputFormGroup() {
		return new FormGroup<ListPhoneNumbersOptedOutInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for ListPlatformApplications action. */
	export interface ListPlatformApplicationsInput {
		NextToken?: string;
	}

	/** Input for ListPlatformApplications action. */
	export interface ListPlatformApplicationsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlatformApplicationsInputFormGroup() {
		return new FormGroup<ListPlatformApplicationsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSMSSandboxPhoneNumbersInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSMSSandboxPhoneNumbersInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSMSSandboxPhoneNumbersInputFormGroup() {
		return new FormGroup<ListSMSSandboxPhoneNumbersInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicInput {

		/** Required */
		TopicArn: string;
		NextToken?: string;
	}

	/** Input for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsByTopicInputFormGroup() {
		return new FormGroup<ListSubscriptionsByTopicInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for ListSubscriptions action. */
	export interface ListSubscriptionsInput {
		NextToken?: string;
	}

	/** Input for ListSubscriptions action. */
	export interface ListSubscriptionsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsInputFormGroup() {
		return new FormGroup<ListSubscriptionsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTopicsInput {
		NextToken?: string;
	}
	export interface ListTopicsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsInputFormGroup() {
		return new FormGroup<ListTopicsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberInput {

		/** Required */
		phoneNumber: string;
	}

	/** Input for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberInputFormProperties {

		/** Required */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOptInPhoneNumberInputFormGroup() {
		return new FormGroup<OptInPhoneNumberInputFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishBatchInput {

		/** Required */
		TopicArn: string;

		/** Required */
		PublishBatchRequestEntries: Array<PublishBatchRequestEntry>;
	}
	export interface PublishBatchInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishBatchInputFormGroup() {
		return new FormGroup<PublishBatchInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for Publish action. */
	export interface PublishInput {
		TopicArn?: string;
		TargetArn?: string;
		PhoneNumber?: string;

		/** Required */
		Message: string;
		Subject?: string;
		MessageStructure?: string;
		MessageAttributes?: MessageAttributeMap;
		MessageDeduplicationId?: string;
		MessageGroupId?: string;
	}

	/** Input for Publish action. */
	export interface PublishInputFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		TargetArn: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		MessageStructure: FormControl<string | null | undefined>,
		MessageDeduplicationId: FormControl<string | null | undefined>,
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePublishInputFormGroup() {
		return new FormGroup<PublishInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined),
			MessageStructure: new FormControl<string | null | undefined>(undefined),
			MessageDeduplicationId: new FormControl<string | null | undefined>(undefined),
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDataProtectionPolicyInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		DataProtectionPolicy: string;
	}
	export interface PutDataProtectionPolicyInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		DataProtectionPolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutDataProtectionPolicyInputFormGroup() {
		return new FormGroup<PutDataProtectionPolicyInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataProtectionPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for RemovePermission action. */
	export interface RemovePermissionInput {

		/** Required */
		TopicArn: string;

		/** Required */
		Label: string;
	}

	/** Input for RemovePermission action. */
	export interface RemovePermissionInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionInputFormGroup() {
		return new FormGroup<RemovePermissionInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for SetEndpointAttributes action. */
	export interface SetEndpointAttributesInput {

		/** Required */
		EndpointArn: string;

		/** Required */
		Attributes: MapStringToString;
	}

	/** Input for SetEndpointAttributes action. */
	export interface SetEndpointAttributesInputFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateSetEndpointAttributesInputFormGroup() {
		return new FormGroup<SetEndpointAttributesInputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for SetPlatformApplicationAttributes action. */
	export interface SetPlatformApplicationAttributesInput {

		/** Required */
		PlatformApplicationArn: string;

		/** Required */
		Attributes: MapStringToString;
	}

	/** Input for SetPlatformApplicationAttributes action. */
	export interface SetPlatformApplicationAttributesInputFormProperties {

		/** Required */
		PlatformApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateSetPlatformApplicationAttributesInputFormGroup() {
		return new FormGroup<SetPlatformApplicationAttributesInputFormProperties>({
			PlatformApplicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the SetSMSAttributes action. */
	export interface SetSMSAttributesInput {

		/** Required */
		attributes: MapStringToString;
	}

	/** The input for the SetSMSAttributes action. */
	export interface SetSMSAttributesInputFormProperties {
	}
	export function CreateSetSMSAttributesInputFormGroup() {
		return new FormGroup<SetSMSAttributesInputFormProperties>({
		});

	}


	/** Input for SetSubscriptionAttributes action. */
	export interface SetSubscriptionAttributesInput {

		/** Required */
		SubscriptionArn: string;

		/** Required */
		AttributeName: string;
		AttributeValue?: string;
	}

	/** Input for SetSubscriptionAttributes action. */
	export interface SetSubscriptionAttributesInputFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateSetSubscriptionAttributesInputFormGroup() {
		return new FormGroup<SetSubscriptionAttributesInputFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for SetTopicAttributes action. */
	export interface SetTopicAttributesInput {

		/** Required */
		TopicArn: string;

		/** Required */
		AttributeName: string;
		AttributeValue?: string;
	}

	/** Input for SetTopicAttributes action. */
	export interface SetTopicAttributesInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateSetTopicAttributesInputFormGroup() {
		return new FormGroup<SetTopicAttributesInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for Subscribe action. */
	export interface SubscribeInput {

		/** Required */
		TopicArn: string;

		/** Required */
		Protocol: string;
		Endpoint?: string;
		Attributes?: SubscriptionAttributesMap;
		ReturnSubscriptionArn?: boolean | null;
	}

	/** Input for Subscribe action. */
	export interface SubscribeInputFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<string | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		ReturnSubscriptionArn: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscribeInputFormGroup() {
		return new FormGroup<SubscribeInputFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			ReturnSubscriptionArn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input for Unsubscribe action. */
	export interface UnsubscribeInput {

		/** Required */
		SubscriptionArn: string;
	}

	/** Input for Unsubscribe action. */
	export interface UnsubscribeInputFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeInputFormGroup() {
		return new FormGroup<UnsubscribeInputFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifySMSSandboxPhoneNumberInput {

		/** Required */
		PhoneNumber: string;

		/** Required */
		OneTimePassword: string;
	}
	export interface VerifySMSSandboxPhoneNumberInputFormProperties {

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		OneTimePassword: FormControl<string | null | undefined>,
	}
	export function CreateVerifySMSSandboxPhoneNumberInputFormGroup() {
		return new FormGroup<VerifySMSSandboxPhoneNumberInputFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OneTimePassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds a statement to a topic's access control policy, granting access for the specified Amazon Web Services accounts to the specified actions.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>
		 * Get #Action=AddPermission
		 * @param {string} TopicArn The ARN of the topic whose access control policy you wish to modify.
		 * @param {string} Label A unique identifier for the new policy statement.
		 * @param {Array<string>} AWSAccountId The Amazon Web Services account IDs of the users (principals) who will be given access to the specified actions. The users must have Amazon Web Services account, but do not need to be signed up for this service.
		 * @param {Array<string>} ActionName <p>The action you want to allow for the specified principal(s).</p> <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>
		 * @return {void} Success
		 */
		GET_AddPermission(TopicArn: string, Label: string, AWSAccountId: Array<string>, ActionName: Array<string>, Action: GET_AddPermissionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddPermission?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&' + AWSAccountId.map(z => `AWSAccountId=${encodeURIComponent(z)}`).join('&') + '&' + ActionName.map(z => `ActionName=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>
		 * Get #Action=CheckIfPhoneNumberIsOptedOut
		 * @param {string} phoneNumber The phone number for which you want to check the opt out status.
		 * @return {void} Success
		 */
		GET_CheckIfPhoneNumberIsOptedOut(phoneNumber: string, Action: GET_CheckIfPhoneNumberIsOptedOutAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CheckIfPhoneNumberIsOptedOut?phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".
		 * Get #Action=ConfirmSubscription
		 * @param {string} TopicArn The ARN of the topic for which you wish to confirm a subscription.
		 * @param {string} Token Short-lived token sent to an endpoint during the <code>Subscribe</code> action.
		 * @param {string} AuthenticateOnUnsubscribe Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an Amazon Web Services signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires Amazon Web Services authentication. 
		 * @return {void} Success
		 */
		GET_ConfirmSubscription(TopicArn: string, Token: string, AuthenticateOnUnsubscribe: string | null | undefined, Action: GET_ConfirmSubscriptionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ConfirmSubscription?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Token=' + (Token == null ? '' : encodeURIComponent(Token)) + '&AuthenticateOnUnsubscribe=' + (AuthenticateOnUnsubscribe == null ? '' : encodeURIComponent(AuthenticateOnUnsubscribe)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify <code>PlatformPrincipal</code> and <code>PlatformCredential</code> attributes when using the <code>CreatePlatformApplication</code> action.</p> <p> <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from the notification service.</p> <ul> <li> <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code> and <code>PlatformCredential</code> is <code>client secret</code>.</p> </li> <li> <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials, <code>PlatformPrincipal</code> is <code>signing key ID</code> and <code>PlatformCredential</code> is <code>signing key</code>.</p> </li> <li> <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is <code>API key</code>.</p> </li> <li> <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and <code>PlatformCredential</code> is <code>private key</code>.</p> </li> <li> <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security Identifier</code> and <code>PlatformCredential</code> is <code>secret key</code>.</p> </li> </ul> <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>
		 * Get #Action=CreatePlatformApplication
		 * @param {string} Name Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.
		 * @param {string} Platform The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).
		 * @param {{[id: string]: string }} Attributes For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a>.
		 * @return {void} Success
		 */
		GET_CreatePlatformApplication(Name: string, Platform: string, Attributes: {[id: string]: string }, Action: GET_CreatePlatformApplicationAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformApplication?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Platform=' + (Platform == null ? '' : encodeURIComponent(Platform)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code> that is returned from <code>CreatePlatformApplication</code>. You can use the returned <code>EndpointArn</code> to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>
		 * Get #Action=CreatePlatformEndpoint
		 * @param {string} PlatformApplicationArn PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.
		 * @param {string} Token Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using GCM (Firebase Cloud Messaging) or ADM, the device token equivalent is called the registration ID.
		 * @param {string} CustomUserData Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
		 * @param {{[id: string]: string }} Attributes For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.
		 * @return {void} Success
		 */
		GET_CreatePlatformEndpoint(PlatformApplicationArn: string, Token: string, CustomUserData: string | null | undefined, Attributes: {[id: string]: string } | null | undefined, Action: GET_CreatePlatformEndpointAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformEndpoint?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Token=' + (Token == null ? '' : encodeURIComponent(Token)) + '&CustomUserData=' + (CustomUserData == null ? '' : encodeURIComponent(CustomUserData)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=CreateSMSSandboxPhoneNumber
		 * @param {string} PhoneNumber The destination phone number to verify. On verification, Amazon SNS adds this phone number to the list of verified phone numbers that you can send SMS messages to.
		 * @param {LanguageCodeString} LanguageCode The language to use for sending the OTP. The default value is <code>en-US</code>.
		 * @return {void} Success
		 */
		GET_CreateSMSSandboxPhoneNumber(PhoneNumber: string, LanguageCode: LanguageCodeString | null | undefined, Action: GET_CreateSMSSandboxPhoneNumberAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateSMSSandboxPhoneNumber?PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&LanguageCode=' + LanguageCode + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.
		 * Get #Action=CreateTopic
		 * @param {string} Name <p>The name of the topic you want to create.</p> <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.</p> <p>For a FIFO (first-in-first-out) topic, the name must end with the <code>.fifo</code> suffix. </p>
		 * @param {{[id: string]: string }} Attributes <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateTopic</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>FifoTopic</code> – Set to true to create a FIFO topic.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>FifoTopic</code> – When this is set to <code>true</code>, a FIFO topic is created.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The list of tags to add to a new topic.</p> <note> <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p> </note>
		 * @param {string} DataProtectionPolicy <p>The body of the policy document you want to use for this topic.</p> <p>You can only add one policy per topic.</p> <p>The policy must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>
		 * @return {void} Success
		 */
		GET_CreateTopic(Name: string, Attributes: {[id: string]: string } | null | undefined, Tags: Array<Tag> | null | undefined, DataProtectionPolicy: string | null | undefined, Action: GET_CreateTopicAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateTopic?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Attributes=' + Attributes + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&DataProtectionPolicy=' + (DataProtectionPolicy == null ? '' : encodeURIComponent(DataProtectionPolicy)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>
		 * Get #Action=DeleteEndpoint
		 * @param {string} EndpointArn EndpointArn of endpoint to delete.
		 * @return {void} Success
		 */
		GET_DeleteEndpoint(EndpointArn: string, Action: GET_DeleteEndpointAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEndpoint?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=DeletePlatformApplication
		 * @param {string} PlatformApplicationArn PlatformApplicationArn of platform application object to delete.
		 * @return {void} Success
		 */
		GET_DeletePlatformApplication(PlatformApplicationArn: string, Action: GET_DeletePlatformApplicationAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePlatformApplication?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an Amazon Web Services account's verified or pending phone number from the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=DeleteSMSSandboxPhoneNumber
		 * @param {string} PhoneNumber The destination phone number to delete.
		 * @return {void} Success
		 */
		GET_DeleteSMSSandboxPhoneNumber(PhoneNumber: string, Action: GET_DeleteSMSSandboxPhoneNumberAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSMSSandboxPhoneNumber?PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.
		 * Get #Action=DeleteTopic
		 * @param {string} TopicArn The ARN of the topic you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteTopic(TopicArn: string, Action: GET_DeleteTopicAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTopic?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the specified inline <code>DataProtectionPolicy</code> document that is stored in the specified Amazon SNS topic.
		 * Get #Action=GetDataProtectionPolicy
		 * @param {string} ResourceArn <p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to get.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>
		 * @return {void} Success
		 */
		GET_GetDataProtectionPolicy(ResourceArn: string, Action: GET_GetDataProtectionPolicyAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetDataProtectionPolicy?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=GetEndpointAttributes
		 * @param {string} EndpointArn EndpointArn for GetEndpointAttributes input.
		 * @return {void} Success
		 */
		GET_GetEndpointAttributes(EndpointArn: string, Action: GET_GetEndpointAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetEndpointAttributes?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=GetPlatformApplicationAttributes
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for GetPlatformApplicationAttributesInput.
		 * @return {void} Success
		 */
		GET_GetPlatformApplicationAttributes(PlatformApplicationArn: string, Action: GET_GetPlatformApplicationAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetPlatformApplicationAttributes?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
		 * Get #Action=GetSMSAttributes
		 * @param {Array<string>} attributes <p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for which you want values.</p> <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p> <p>If you don't use this parameter, Amazon SNS returns all SMS attributes.</p>
		 * @return {void} Success
		 */
		GET_GetSMSAttributes(attributes: Array<string> | null | undefined, Action: GET_GetSMSAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSMSAttributes?' + attributes?.map(z => `attributes=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target Amazon Web Services Region.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=GetSMSSandboxAccountStatus
		 * @return {void} Success
		 */
		GET_GetSMSSandboxAccountStatus(Action: GET_GetSMSSandboxAccountStatusAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSMSSandboxAccountStatus?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of the properties of a subscription.
		 * Get #Action=GetSubscriptionAttributes
		 * @param {string} SubscriptionArn The ARN of the subscription whose properties you want to get.
		 * @return {void} Success
		 */
		GET_GetSubscriptionAttributes(SubscriptionArn: string, Action: GET_GetSubscriptionAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSubscriptionAttributes?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
		 * Get #Action=GetTopicAttributes
		 * @param {string} TopicArn The ARN of the topic whose properties you want to get.
		 * @return {void} Success
		 */
		GET_GetTopicAttributes(TopicArn: string, Action: GET_GetTopicAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTopicAttributes?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListEndpointsByPlatformApplication
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.
		 * @param {string} NextToken NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.
		 * @return {void} Success
		 */
		GET_ListEndpointsByPlatformApplication(PlatformApplicationArn: string, NextToken: string | null | undefined, Action: GET_ListEndpointsByPlatformApplicationAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListEndpointsByPlatformApplication?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer Guide</i>.
		 * Get #Action=ListOriginationNumbers
		 * @param {string} NextToken Token that the previous <code>ListOriginationNumbers</code> request returns.
		 * @param {number} MaxResults The maximum number of origination numbers to return.
		 * @return {void} Success
		 */
		GET_ListOriginationNumbers(NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListOriginationNumbersAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListOriginationNumbers?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>
		 * Get #Action=ListPhoneNumbersOptedOut
		 * @param {string} nextToken A <code>NextToken</code> string is used when you call the <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are available after the first page of results.
		 * @return {void} Success
		 */
		GET_ListPhoneNumbersOptedOut(nextToken: string | null | undefined, Action: GET_ListPhoneNumbersOptedOutAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPhoneNumbersOptedOut?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>
		 * Get #Action=ListPlatformApplications
		 * @param {string} NextToken NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.
		 * @return {void} Success
		 */
		GET_ListPlatformApplications(NextToken: string | null | undefined, Action: GET_ListPlatformApplicationsAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformApplications?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=ListSMSSandboxPhoneNumbers
		 * @param {string} NextToken Token that the previous <code>ListSMSSandboxPhoneNumbersInput</code> request returns.
		 * @param {number} MaxResults The maximum number of phone numbers to return.
		 * @return {void} Success
		 */
		GET_ListSMSSandboxPhoneNumbers(NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListSMSSandboxPhoneNumbersAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSMSSandboxPhoneNumbers?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListSubscriptions
		 * @param {string} NextToken Token returned by the previous <code>ListSubscriptions</code> request.
		 * @return {void} Success
		 */
		GET_ListSubscriptions(NextToken: string | null | undefined, Action: GET_ListSubscriptionsAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSubscriptions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListSubscriptionsByTopic
		 * @param {string} TopicArn The ARN of the topic for which you wish to find subscriptions.
		 * @param {string} NextToken Token returned by the previous <code>ListSubscriptionsByTopic</code> request.
		 * @return {void} Success
		 */
		GET_ListSubscriptionsByTopic(TopicArn: string, NextToken: string | null | undefined, Action: GET_ListSubscriptionsByTopicAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSubscriptionsByTopic?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceArn The ARN of the topic for which to list tags.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceArn: string, Action: GET_ListTagsForResourceAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListTopics
		 * @param {string} NextToken Token returned by the previous <code>ListTopics</code> request.
		 * @return {void} Success
		 */
		GET_ListTopics(NextToken: string | null | undefined, Action: GET_ListTopicsAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTopics?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>
		 * Get #Action=OptInPhoneNumber
		 * @param {string} phoneNumber The phone number to opt in. Use E.164 format.
		 * @return {void} Success
		 */
		GET_OptInPhoneNumber(phoneNumber: string, Action: GET_OptInPhoneNumberAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=OptInPhoneNumber?phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone number, or a message to a mobile platform endpoint (when you specify the <code>TargetArn</code>).</p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately delivers it to subscribers.</p> <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p> <important> <p>You can publish messages only to topics and endpoints in the same Amazon Web Services Region.</p> </important>
		 * Get #Action=Publish
		 * @param {string} TopicArn <p>The topic you want to publish to.</p> <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>
		 * @param {string} TargetArn If you don't specify a value for the <code>TargetArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code> parameters.
		 * @param {string} PhoneNumber <p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p> <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must specify a value for the <code>TargetArn</code> or <code>TopicArn</code> parameters.</p>
		 * @param {string} Message <p>The message you want to send.</p> <p>If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object for the <code>Message</code> parameter. </p> <p/> <p>Constraints:</p> <ul> <li> <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most 256 KB in size (262,144 bytes, not 262,144 characters).</p> </li> <li> <p>For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.</p> <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren't truncated mid-word but are cut off at whole-word boundaries.</p> <p>The total size limit for a single SMS <code>Publish</code> action is 1,600 characters.</p> </li> </ul> <p>JSON-specific constraints:</p> <ul> <li> <p>Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.</p> </li> <li> <p>The values will be parsed (unescaped) before they are used in outgoing messages.</p> </li> <li> <p>Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).</p> </li> <li> <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p> </li> <li> <p>Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).</p> </li> <li> <p>Non-string values will cause the key to be ignored.</p> </li> <li> <p>Keys that do not correspond to supported transport protocols are ignored.</p> </li> <li> <p>Duplicate keys are not allowed.</p> </li> <li> <p>Failure to parse or validate any key or value in the message will cause the <code>Publish</code> call to return an error (no partial delivery).</p> </li> </ul>
		 * @param {string} Subject <p>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.</p> <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</p>
		 * @param {string} MessageStructure <p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").</p> <p>Valid value: <code>json</code> </p>
		 * @param {{[id: string]: MessageAttributeValue }} MessageAttributes Message attributes for Publish action.
		 * @param {string} MessageDeduplicationId <p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageDeduplicationId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~)</code>.</p> <p>Every message must have a unique <code>MessageDeduplicationId</code>, which is a token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any message sent with the same <code>MessageDeduplicationId</code> during the 5-minute deduplication interval is treated as a duplicate. </p> <p>If the topic has <code>ContentBasedDeduplication</code> set, the system generates a <code>MessageDeduplicationId</code> based on the contents of the message. Your <code>MessageDeduplicationId</code> overrides the generated one.</p>
		 * @param {string} MessageGroupId <p>This parameter applies only to FIFO (first-in-first-out) topics. The <code>MessageGroupId</code> can contain up to 128 alphanumeric characters <code>(a-z, A-Z, 0-9)</code> and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~)</code>.</p> <p>The <code>MessageGroupId</code> is a tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). Every message must include a <code>MessageGroupId</code>.</p>
		 * @return {void} Success
		 */
		GET_Publish(TopicArn: string | null | undefined, TargetArn: string | null | undefined, PhoneNumber: string | null | undefined, Message: string, Subject: string | null | undefined, MessageStructure: string | null | undefined, MessageAttributes: {[id: string]: MessageAttributeValue } | null | undefined, MessageDeduplicationId: string | null | undefined, MessageGroupId: string | null | undefined, Action: GET_PublishAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Publish?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&TargetArn=' + (TargetArn == null ? '' : encodeURIComponent(TargetArn)) + '&PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&Message=' + (Message == null ? '' : encodeURIComponent(Message)) + '&Subject=' + (Subject == null ? '' : encodeURIComponent(Subject)) + '&MessageStructure=' + (MessageStructure == null ? '' : encodeURIComponent(MessageStructure)) + '&MessageAttributes=' + MessageAttributes + '&MessageDeduplicationId=' + (MessageDeduplicationId == null ? '' : encodeURIComponent(MessageDeduplicationId)) + '&MessageGroupId=' + (MessageGroupId == null ? '' : encodeURIComponent(MessageGroupId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Publishes up to ten messages to the specified topic. This is a batch version of <code>Publish</code>. For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for 5 minutes.</p> <p>The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes). </p> <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this: </p> <p>&amp;AttributeName.1=first</p> <p>&amp;AttributeName.2=second</p> <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS immediately delivers the message to subscribers.</p>
		 * Get #Action=PublishBatch
		 * @param {string} TopicArn The Amazon resource name (ARN) of the topic you want to batch publish to.
		 * @param {Array<PublishBatchRequestEntry>} PublishBatchRequestEntries A list of <code>PublishBatch</code> request entries to be sent to the SNS topic.
		 * @return {void} Success
		 */
		GET_PublishBatch(TopicArn: string, PublishBatchRequestEntries: Array<PublishBatchRequestEntry>, Action: GET_PublishBatchAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PublishBatch?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&' + PublishBatchRequestEntries.map(z => `PublishBatchRequestEntries=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.
		 * Get #Action=PutDataProtectionPolicy
		 * @param {string} ResourceArn <p>The ARN of the topic whose <code>DataProtectionPolicy</code> you want to add or update.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the Amazon Web Services General Reference.</p>
		 * @param {string} DataProtectionPolicy <p>The JSON serialization of the topic's <code>DataProtectionPolicy</code>.</p> <p>The <code>DataProtectionPolicy</code> must be in JSON string format.</p> <p>Length Constraints: Maximum length of 30,720.</p>
		 * @return {void} Success
		 */
		GET_PutDataProtectionPolicy(ResourceArn: string, DataProtectionPolicy: string, Action: GET_PutDataProtectionPolicyAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutDataProtectionPolicy?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&DataProtectionPolicy=' + (DataProtectionPolicy == null ? '' : encodeURIComponent(DataProtectionPolicy)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes a statement from a topic's access control policy.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>
		 * Get #Action=RemovePermission
		 * @param {string} TopicArn The ARN of the topic whose access control policy you wish to modify.
		 * @param {string} Label The unique label of the statement you want to remove.
		 * @return {void} Success
		 */
		GET_RemovePermission(TopicArn: string, Label: string, Action: GET_RemovePermissionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemovePermission?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=SetEndpointAttributes
		 * @param {string} EndpointArn EndpointArn used for SetEndpointAttributes action.
		 * @param {{[id: string]: string }} Attributes <p>A map of the endpoint attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_SetEndpointAttributes(EndpointArn: string, Attributes: {[id: string]: string }, Action: GET_SetEndpointAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetEndpointAttributes?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>.
		 * Get #Action=SetPlatformApplicationAttributes
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for SetPlatformApplicationAttributes action.
		 * @param {{[id: string]: string }} Attributes <p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformCredential</code>is client secret.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformCredential</code> is private key.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformCredential</code> is signing key.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), <code>PlatformCredential</code> is API key. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service.</p> <ul> <li> <p>For ADM, <code>PlatformPrincipal</code>is client id.</p> </li> <li> <p>For Apple Services using certificate credentials, <code>PlatformPrincipal</code> is SSL certificate.</p> </li> <li> <p>For Apple Services using token credentials, <code>PlatformPrincipal</code> is signing key ID.</p> </li> <li> <p>For GCM (Firebase Cloud Messaging), there is no <code>PlatformPrincipal</code>. </p> </li> </ul> </li> </ul> <ul> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which <code>EndpointCreated</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which <code>EndpointDeleted</code> event notifications are sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which <code>EndpointUpdate</code> event notifications are sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which <code>DeliveryFailure</code> event notifications are sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul> <p>The following attributes only apply to <code>APNs</code> token-based authentication:</p> <ul> <li> <p> <code>ApplePlatformTeamID</code> – The identifier that's assigned to your Apple developer account team.</p> </li> <li> <p> <code>ApplePlatformBundleID</code> – The bundle identifier that's assigned to your iOS app.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_SetPlatformApplicationAttributes(PlatformApplicationArn: string, Attributes: {[id: string]: string }, Action: GET_SetPlatformApplicationAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetPlatformApplicationAttributes?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a> in the <i>Amazon SNS Developer Guide</i>.</p> <note> <p>To use this operation, you must grant the Amazon SNS service principal (<code>sns.amazonaws.com</code>) permission to perform the <code>s3:ListBucket</code> action. </p> </note>
		 * Get #Action=SetSMSAttributes
		 * @param {{[id: string]: string }} attributes <p>The default settings for sending SMS messages from your Amazon Web Services account. You can set values for the following attribute names:</p> <p> <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.</p> <important> <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.</p> </important> <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting an SMS monthly spend limit increase.</p> <p> <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.</p> <p> <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to <code>10</code>.</p> <p> <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.</p> <p> <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You can assign the following values:</p> <ul> <li> <p> <code>Promotional</code> – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p> </li> <li> <p> <code>Transactional</code> – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.</p> </li> </ul> <p> <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your Amazon Web Services account:</p> <ul> <li> <p>Time that the message was published (in UTC)</p> </li> <li> <p>Message ID</p> </li> <li> <p>Destination phone number</p> </li> <li> <p>Message type</p> </li> <li> <p>Delivery status</p> </li> <li> <p>Message price (in USD)</p> </li> <li> <p>Part number (a message is split into multiple parts if it is too long for a single message)</p> </li> <li> <p>Total number of parts</p> </li> </ul> <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service principal to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code> actions.</p> <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_SetSMSAttributes(attributes: {[id: string]: string }, Action: GET_SetSMSAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSMSAttributes?attributes=' + attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows a subscription owner to set an attribute of the subscription to a new value.
		 * Get #Action=SetSubscriptionAttributes
		 * @param {string} SubscriptionArn The ARN of the subscription to modify.
		 * @param {string} AttributeName <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that this action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>
		 * @param {string} AttributeValue The new value for the attribute in JSON format.
		 * @return {void} Success
		 */
		GET_SetSubscriptionAttributes(SubscriptionArn: string, AttributeName: string, AttributeValue: string | null | undefined, Action: GET_SetSubscriptionAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSubscriptionAttributes?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&AttributeValue=' + (AttributeValue == null ? '' : encodeURIComponent(AttributeValue)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Allows a topic owner to set an attribute of the topic to a new value.</p> <note> <p>To remove the ability to change topic permissions, you must deny permissions to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetTopicAttributes</code> actions in your IAM policy.</p> </note>
		 * Get #Action=SetTopicAttributes
		 * @param {string} TopicArn The ARN of the topic to modify.
		 * @param {string} AttributeName <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.</p> </li> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> <li> <p> <code>TracingConfig</code> – Tracing mode of an Amazon SNS topic. By default <code>TracingConfig</code> is set to <code>PassThrough</code>, and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to <code>Active</code>, Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. This is only supported on standard topics.</p> </li> <li> <p>HTTP</p> <ul> <li> <p> <code>HTTPSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p> </li> <li> <p> <code>HTTPSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> <li> <p> <code>HTTPFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.</p> </li> </ul> </li> <li> <p>Amazon Kinesis Data Firehose</p> <ul> <li> <p> <code>FirehoseSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.</p> </li> <li> <p> <code>FirehoseFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint. </p> </li> </ul> </li> <li> <p>Lambda</p> <ul> <li> <p> <code>LambdaSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Lambda endpoint.</p> </li> <li> <p> <code>LambdaFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Lambda endpoint. </p> </li> </ul> </li> <li> <p>Platform application endpoint</p> <ul> <li> <p> <code>ApplicationSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> <li> <p> <code>ApplicationFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Web Services application endpoint.</p> </li> </ul> <note> <p>In addition to being able to configure topic attributes for message delivery status of notification messages sent to Amazon SNS application endpoints, you can also configure application attributes for the delivery status of push notification messages sent to push notification services.</p> <p>For example, For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. </p> </note> </li> <li> <p>Amazon SQS</p> <ul> <li> <p> <code>SQSSuccessFeedbackRoleArn</code> – Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSSuccessFeedbackSampleRate</code> – Indicates percentage of successful messages to sample for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> <li> <p> <code>SQSFailureFeedbackRoleArn</code> – Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint. </p> </li> </ul> </li> </ul> <note> <p>The &lt;ENDPOINT&gt;SuccessFeedbackRoleArn and &lt;ENDPOINT&gt;FailureFeedbackRoleArn attributes are used to give Amazon SNS write access to use CloudWatch Logs on your behalf. The &lt;ENDPOINT&gt;SuccessFeedbackSampleRate attribute is for specifying the sample rate percentage (0-100) of successfully delivered messages. After you configure the &lt;ENDPOINT&gt;FailureFeedbackRoleArn attribute, then all failed message deliveries generate CloudWatch Logs. </p> </note> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>SignatureVersion</code> – The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, <code>SignatureVersion</code> is set to <code>1</code>.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">FIFO topics</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication for FIFO topics.</p> <ul> <li> <p>By default, <code>ContentBasedDeduplication</code> is set to <code>false</code>. If you create a FIFO topic and this attribute is <code>false</code>, you must specify a value for the <code>MessageDeduplicationId</code> parameter for the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a> action. </p> </li> <li> <p>When you set <code>ContentBasedDeduplication</code> to <code>true</code>, Amazon SNS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message).</p> <p>(Optional) To override the generated value, you can specify a value for the <code>MessageDeduplicationId</code> parameter for the <code>Publish</code> action.</p> </li> </ul> </li> </ul>
		 * @param {string} AttributeValue The new value for the attribute.
		 * @return {void} Success
		 */
		GET_SetTopicAttributes(TopicArn: string, AttributeName: string, AttributeValue: string | null | undefined, Action: GET_SetTopicAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetTopicAttributes?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&AttributeValue=' + (AttributeValue == null ? '' : encodeURIComponent(AttributeValue)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must run the <code>ConfirmSubscription</code> action to confirm the subscription.</p> <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>
		 * Get #Action=Subscribe
		 * @param {string} TopicArn The ARN of the topic you want to subscribe to.
		 * @param {string} Protocol <p>The protocol that you want to use. Supported protocols include:</p> <ul> <li> <p> <code>http</code> – delivery of JSON-encoded message via HTTP POST</p> </li> <li> <p> <code>https</code> – delivery of JSON-encoded message via HTTPS POST</p> </li> <li> <p> <code>email</code> – delivery of message via SMTP</p> </li> <li> <p> <code>email-json</code> – delivery of JSON-encoded message via SMTP</p> </li> <li> <p> <code>sms</code> – delivery of message via SMS</p> </li> <li> <p> <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS queue</p> </li> <li> <p> <code>application</code> – delivery of JSON-encoded message to an EndpointArn for a mobile app and device</p> </li> <li> <p> <code>lambda</code> – delivery of JSON-encoded message to an Lambda function</p> </li> <li> <p> <code>firehose</code> – delivery of JSON-encoded message to an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>
		 * @param {string} Endpoint <p>The endpoint that you want to receive notifications. Endpoints vary by protocol:</p> <ul> <li> <p>For the <code>http</code> protocol, the (public) endpoint is a URL beginning with <code>http://</code>.</p> </li> <li> <p>For the <code>https</code> protocol, the (public) endpoint is a URL beginning with <code>https://</code>.</p> </li> <li> <p>For the <code>email</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>email-json</code> protocol, the endpoint is an email address.</p> </li> <li> <p>For the <code>sms</code> protocol, the endpoint is a phone number of an SMS-enabled device.</p> </li> <li> <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS queue.</p> </li> <li> <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of a mobile app and device.</p> </li> <li> <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Lambda function.</p> </li> <li> <p>For the <code>firehose</code> protocol, the endpoint is the ARN of an Amazon Kinesis Data Firehose delivery stream.</p> </li> </ul>
		 * @param {{[id: string]: string }} Attributes <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>Subscribe</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>FilterPolicyScope</code> – This attribute lets you choose the filtering scope by using one of the following string value types:</p> <ul> <li> <p> <code>MessageAttributes</code> (default) – The filter is applied on the message attributes.</p> </li> <li> <p> <code>MessageBody</code> – The filter is applied on the message body.</p> </li> </ul> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul> <p>The following attribute applies only to Amazon Kinesis Data Firehose delivery stream subscriptions:</p> <ul> <li> <p> <code>SubscriptionRoleArn</code> – The ARN of the IAM role that has the following:</p> <ul> <li> <p>Permission to write to the Kinesis Data Firehose delivery stream</p> </li> <li> <p>Amazon SNS listed as a trusted entity</p> </li> </ul> <p>Specifying a valid ARN for this attribute is required for Kinesis Data Firehose delivery stream subscriptions. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html">Fanout to Kinesis Data Firehose delivery streams</a> in the <i>Amazon SNS Developer Guide</i>.</p> </li> </ul>
		 * @param {boolean} ReturnSubscriptionArn <p>Sets whether the response from the <code>Subscribe</code> request includes the subscription ARN, even if the subscription is not yet confirmed.</p> <p>If you set this parameter to <code>true</code>, the response includes the ARN in all cases, even if the subscription is not yet confirmed. In addition to the ARN for confirmed subscriptions, the response also includes the <code>pending subscription</code> ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the <code>ConfirmSubscription</code> action with a confirmation token.</p> <p/> <p>The default value is <code>false</code>.</p>
		 * @return {void} Success
		 */
		GET_Subscribe(TopicArn: string, Protocol: string, Endpoint: string | null | undefined, Attributes: {[id: string]: string } | null | undefined, ReturnSubscriptionArn: boolean | null | undefined, Action: GET_SubscribeAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Subscribe?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Protocol=' + (Protocol == null ? '' : encodeURIComponent(Protocol)) + '&Endpoint=' + (Endpoint == null ? '' : encodeURIComponent(Endpoint)) + '&Attributes=' + Attributes + '&ReturnSubscriptionArn=' + ReturnSubscriptionArn + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>
		 * Get #Action=TagResource
		 * @param {string} ResourceArn The ARN of the topic to which to add tags.
		 * @param {Array<Tag>} Tags The tags to be added to the specified topic. A tag consists of a required key and an optional value.
		 * @return {void} Success
		 */
		GET_TagResource(ResourceArn: string, Tags: Array<Tag>, Action: GET_TagResourceAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TagResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <note> <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services signature.</p> </note> <p>This action is throttled at 100 transactions per second (TPS).</p>
		 * Get #Action=Unsubscribe
		 * @param {string} SubscriptionArn The ARN of the subscription to be deleted.
		 * @return {void} Success
		 */
		GET_Unsubscribe(SubscriptionArn: string, Action: GET_UnsubscribeAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Unsubscribe?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.
		 * Get #Action=UntagResource
		 * @param {string} ResourceArn The ARN of the topic from which to remove tags.
		 * @param {Array<string>} TagKeys The list of tag keys to remove from the specified topic.
		 * @return {void} Success
		 */
		GET_UntagResource(ResourceArn: string, TagKeys: Array<string>, Action: GET_UntagResourceAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UntagResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Verifies a destination phone number with a one-time password (OTP) for the calling Amazon Web Services account.</p> <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=VerifySMSSandboxPhoneNumber
		 * @param {string} PhoneNumber The destination phone number to verify.
		 * @param {string} OneTimePassword The OTP sent to the destination number from the <code>CreateSMSSandBoxPhoneNumber</code> call.
		 * @return {void} Success
		 */
		GET_VerifySMSSandboxPhoneNumber(PhoneNumber: string, OneTimePassword: string, Action: GET_VerifySMSSandboxPhoneNumberAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=VerifySMSSandboxPhoneNumber?PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&OneTimePassword=' + (OneTimePassword == null ? '' : encodeURIComponent(OneTimePassword)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddPermissionAction { AddPermission = 'AddPermission' }

	export enum GET_AddPermissionVersion { '2010-03-31' = '2010-03-31' }

	export enum GET_CheckIfPhoneNumberIsOptedOutAction { CheckIfPhoneNumberIsOptedOut = 'CheckIfPhoneNumberIsOptedOut' }

	export enum GET_ConfirmSubscriptionAction { ConfirmSubscription = 'ConfirmSubscription' }

	export enum GET_CreatePlatformApplicationAction { CreatePlatformApplication = 'CreatePlatformApplication' }

	export enum GET_CreatePlatformEndpointAction { CreatePlatformEndpoint = 'CreatePlatformEndpoint' }

	export enum GET_CreateSMSSandboxPhoneNumberAction { CreateSMSSandboxPhoneNumber = 'CreateSMSSandboxPhoneNumber' }

	export enum GET_CreateTopicAction { CreateTopic = 'CreateTopic' }

	export enum GET_DeleteEndpointAction { DeleteEndpoint = 'DeleteEndpoint' }

	export enum GET_DeletePlatformApplicationAction { DeletePlatformApplication = 'DeletePlatformApplication' }

	export enum GET_DeleteSMSSandboxPhoneNumberAction { DeleteSMSSandboxPhoneNumber = 'DeleteSMSSandboxPhoneNumber' }

	export enum GET_DeleteTopicAction { DeleteTopic = 'DeleteTopic' }

	export enum GET_GetDataProtectionPolicyAction { GetDataProtectionPolicy = 'GetDataProtectionPolicy' }

	export enum GET_GetEndpointAttributesAction { GetEndpointAttributes = 'GetEndpointAttributes' }

	export enum GET_GetPlatformApplicationAttributesAction { GetPlatformApplicationAttributes = 'GetPlatformApplicationAttributes' }

	export enum GET_GetSMSAttributesAction { GetSMSAttributes = 'GetSMSAttributes' }

	export enum GET_GetSMSSandboxAccountStatusAction { GetSMSSandboxAccountStatus = 'GetSMSSandboxAccountStatus' }

	export enum GET_GetSubscriptionAttributesAction { GetSubscriptionAttributes = 'GetSubscriptionAttributes' }

	export enum GET_GetTopicAttributesAction { GetTopicAttributes = 'GetTopicAttributes' }

	export enum GET_ListEndpointsByPlatformApplicationAction { ListEndpointsByPlatformApplication = 'ListEndpointsByPlatformApplication' }

	export enum GET_ListOriginationNumbersAction { ListOriginationNumbers = 'ListOriginationNumbers' }

	export enum GET_ListPhoneNumbersOptedOutAction { ListPhoneNumbersOptedOut = 'ListPhoneNumbersOptedOut' }

	export enum GET_ListPlatformApplicationsAction { ListPlatformApplications = 'ListPlatformApplications' }

	export enum GET_ListSMSSandboxPhoneNumbersAction { ListSMSSandboxPhoneNumbers = 'ListSMSSandboxPhoneNumbers' }

	export enum GET_ListSubscriptionsAction { ListSubscriptions = 'ListSubscriptions' }

	export enum GET_ListSubscriptionsByTopicAction { ListSubscriptionsByTopic = 'ListSubscriptionsByTopic' }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 'ListTagsForResource' }

	export enum GET_ListTopicsAction { ListTopics = 'ListTopics' }

	export enum GET_OptInPhoneNumberAction { OptInPhoneNumber = 'OptInPhoneNumber' }

	export enum GET_PublishAction { Publish = 'Publish' }

	export enum GET_PublishBatchAction { PublishBatch = 'PublishBatch' }

	export enum GET_PutDataProtectionPolicyAction { PutDataProtectionPolicy = 'PutDataProtectionPolicy' }

	export enum GET_RemovePermissionAction { RemovePermission = 'RemovePermission' }

	export enum GET_SetEndpointAttributesAction { SetEndpointAttributes = 'SetEndpointAttributes' }

	export enum GET_SetPlatformApplicationAttributesAction { SetPlatformApplicationAttributes = 'SetPlatformApplicationAttributes' }

	export enum GET_SetSMSAttributesAction { SetSMSAttributes = 'SetSMSAttributes' }

	export enum GET_SetSubscriptionAttributesAction { SetSubscriptionAttributes = 'SetSubscriptionAttributes' }

	export enum GET_SetTopicAttributesAction { SetTopicAttributes = 'SetTopicAttributes' }

	export enum GET_SubscribeAction { Subscribe = 'Subscribe' }

	export enum GET_TagResourceAction { TagResource = 'TagResource' }

	export enum GET_UnsubscribeAction { Unsubscribe = 'Unsubscribe' }

	export enum GET_UntagResourceAction { UntagResource = 'UntagResource' }

	export enum GET_VerifySMSSandboxPhoneNumberAction { VerifySMSSandboxPhoneNumber = 'VerifySMSSandboxPhoneNumber' }

}

