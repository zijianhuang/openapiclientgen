import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface InvalidParameterException {
	}

	export interface InternalErrorException {
	}

	export interface AuthorizationErrorException {
	}

	export interface NotFoundException {
	}


	/** The response from the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutResponse {
		isOptedOut?: boolean;
	}

	export interface ThrottledException {
	}


	/** Response for ConfirmSubscriptions action. */
	export interface ConfirmSubscriptionResponse {
		SubscriptionArn?: string;
	}

	export interface SubscriptionLimitExceededException {
	}

	export interface FilterPolicyLimitExceededException {
	}


	/** Response from CreatePlatformApplication action. */
	export interface CreatePlatformApplicationResponse {
		PlatformApplicationArn?: string;
	}


	/** Response from CreateEndpoint action. */
	export interface CreateEndpointResponse {
		EndpointArn?: string;
	}


	/** Response from CreateTopic action. */
	export interface CreateTopicResponse {
		TopicArn?: string;
	}


	/** The list of tags to be added to the specified topic. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface TopicLimitExceededException {
	}

	export interface InvalidSecurityException {
	}

	export interface TagLimitExceededException {
	}

	export interface StaleTagException {
	}

	export interface TagPolicyException {
	}

	export interface ConcurrentAccessException {
	}


	/** Response from GetEndpointAttributes of the EndpointArn. */
	export interface GetEndpointAttributesResponse {
		Attributes?: MapStringToString;
	}

	export interface MapStringToString {
	}


	/** Response for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesResponse {
		Attributes?: MapStringToString;
	}


	/** The response from the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesResponse {
		attributes?: MapStringToString;
	}


	/** Response for GetSubscriptionAttributes action. */
	export interface GetSubscriptionAttributesResponse {
		Attributes?: SubscriptionAttributesMap;
	}

	export interface SubscriptionAttributesMap {
	}


	/** Response for GetTopicAttributes action. */
	export interface GetTopicAttributesResponse {
		Attributes?: TopicAttributesMap;
	}

	export interface TopicAttributesMap {
	}


	/** Response for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationResponse {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}


	/** Endpoint for mobile app and device. */
	export interface Endpoint {
		EndpointArn?: string;
		Attributes?: MapStringToString;
	}


	/** The response from the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutResponse {
		phoneNumbers?: Array<string>;
		nextToken?: string;
	}


	/** Response for ListPlatformApplications action. */
	export interface ListPlatformApplicationsResponse {
		PlatformApplications?: Array<PlatformApplication>;
		NextToken?: string;
	}


	/** Platform application object. */
	export interface PlatformApplication {
		PlatformApplicationArn?: string;
		Attributes?: MapStringToString;
	}


	/** Response for ListSubscriptions action */
	export interface ListSubscriptionsResponse {
		Subscriptions?: Array<Subscription>;
		NextToken?: string;
	}


	/** A wrapper type for the attributes of an Amazon SNS subscription. */
	export interface Subscription {
		SubscriptionArn?: string;
		Owner?: string;
		Protocol?: string;
		Endpoint?: string;
		TopicArn?: string;
	}


	/** Response for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicResponse {
		Subscriptions?: Array<Subscription>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ResourceNotFoundException {
	}


	/** Response for ListTopics action. */
	export interface ListTopicsResponse {
		Topics?: Array<Topic>;
		NextToken?: string;
	}


	/** A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use <code>GetTopicAttributes</code>. */
	export interface Topic {
		TopicArn?: string;
	}


	/** The response for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberResponse {
	}


	/** Response for Publish action. */
	export interface PublishResponse {
		MessageId?: string;
	}


	/** <p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Publish.html">Publish</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html">Using Amazon SNS Message Attributes</a>.</p> */
	export interface MessageAttributeValue {
		DataType: string;
		StringValue?: string;
		BinaryValue?: string;
	}

	export interface InvalidParameterValueException {
	}

	export interface EndpointDisabledException {
	}

	export interface PlatformApplicationDisabledException {
	}

	export interface KMSDisabledException {
	}

	export interface KMSInvalidStateException {
	}

	export interface KMSNotFoundException {
	}

	export interface KMSOptInRequired {
	}

	export interface KMSThrottlingException {
	}

	export interface KMSAccessDeniedException {
	}


	/** The response for the SetSMSAttributes action. */
	export interface SetSMSAttributesResponse {
	}


	/** Response for Subscribe action. */
	export interface SubscribeResponse {
		SubscriptionArn?: string;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface AddPermissionInput {
		TopicArn: string;
		Label: string;
		AWSAccountId: Array<string>;
		ActionName: Array<string>;
	}


	/** The input for the <code>CheckIfPhoneNumberIsOptedOut</code> action. */
	export interface CheckIfPhoneNumberIsOptedOutInput {
		phoneNumber: string;
	}


	/** Input for ConfirmSubscription action. */
	export interface ConfirmSubscriptionInput {
		TopicArn: string;
		Token: string;
		AuthenticateOnUnsubscribe?: string;
	}


	/** Input for CreatePlatformApplication action. */
	export interface CreatePlatformApplicationInput {
		Name: string;
		Platform: string;
		Attributes: MapStringToString;
	}


	/** Input for CreatePlatformEndpoint action. */
	export interface CreatePlatformEndpointInput {
		PlatformApplicationArn: string;
		Token: string;
		CustomUserData?: string;
		Attributes?: MapStringToString;
	}


	/** Input for CreateTopic action. */
	export interface CreateTopicInput {
		Name: string;
		Attributes?: TopicAttributesMap;
		Tags?: Array<Tag>;
	}


	/** Input for DeleteEndpoint action. */
	export interface DeleteEndpointInput {
		EndpointArn: string;
	}


	/** Input for DeletePlatformApplication action. */
	export interface DeletePlatformApplicationInput {
		PlatformApplicationArn: string;
	}

	export interface DeleteTopicInput {
		TopicArn: string;
	}


	/** Input for GetEndpointAttributes action. */
	export interface GetEndpointAttributesInput {
		EndpointArn: string;
	}


	/** Input for GetPlatformApplicationAttributes action. */
	export interface GetPlatformApplicationAttributesInput {
		PlatformApplicationArn: string;
	}


	/** The input for the <code>GetSMSAttributes</code> request. */
	export interface GetSMSAttributesInput {
		attributes?: Array<string>;
	}


	/** Input for GetSubscriptionAttributes. */
	export interface GetSubscriptionAttributesInput {
		SubscriptionArn: string;
	}


	/** Input for GetTopicAttributes action. */
	export interface GetTopicAttributesInput {
		TopicArn: string;
	}


	/** Input for ListEndpointsByPlatformApplication action. */
	export interface ListEndpointsByPlatformApplicationInput {
		PlatformApplicationArn: string;
		NextToken?: string;
	}


	/** The input for the <code>ListPhoneNumbersOptedOut</code> action. */
	export interface ListPhoneNumbersOptedOutInput {
		nextToken?: string;
	}


	/** Input for ListPlatformApplications action. */
	export interface ListPlatformApplicationsInput {
		NextToken?: string;
	}


	/** Input for ListSubscriptionsByTopic action. */
	export interface ListSubscriptionsByTopicInput {
		TopicArn: string;
		NextToken?: string;
	}


	/** Input for ListSubscriptions action. */
	export interface ListSubscriptionsInput {
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ListTopicsInput {
		NextToken?: string;
	}

	export interface MessageAttributeMap {
	}


	/** Input for the OptInPhoneNumber action. */
	export interface OptInPhoneNumberInput {
		phoneNumber: string;
	}


	/** Input for Publish action. */
	export interface PublishInput {
		TopicArn?: string;
		TargetArn?: string;
		PhoneNumber?: string;
		Message: string;
		Subject?: string;
		MessageStructure?: string;
		MessageAttributes?: MessageAttributeMap;
	}


	/** Input for RemovePermission action. */
	export interface RemovePermissionInput {
		TopicArn: string;
		Label: string;
	}


	/** Input for SetEndpointAttributes action. */
	export interface SetEndpointAttributesInput {
		EndpointArn: string;
		Attributes: MapStringToString;
	}


	/** Input for SetPlatformApplicationAttributes action. */
	export interface SetPlatformApplicationAttributesInput {
		PlatformApplicationArn: string;
		Attributes: MapStringToString;
	}


	/** The input for the SetSMSAttributes action. */
	export interface SetSMSAttributesInput {
		attributes: MapStringToString;
	}


	/** Input for SetSubscriptionAttributes action. */
	export interface SetSubscriptionAttributesInput {
		SubscriptionArn: string;
		AttributeName: string;
		AttributeValue?: string;
	}


	/** Input for SetTopicAttributes action. */
	export interface SetTopicAttributesInput {
		TopicArn: string;
		AttributeName: string;
		AttributeValue?: string;
	}


	/** Input for Subscribe action. */
	export interface SubscribeInput {
		TopicArn: string;
		Protocol: string;
		Endpoint?: string;
		Attributes?: SubscriptionAttributesMap;
		ReturnSubscriptionArn?: boolean;
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}


	/** Input for Unsubscribe action. */
	export interface UnsubscribeInput {
		SubscriptionArn: string;
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.
		 * Get #Action=AddPermission
		 * @param {string} TopicArn The ARN of the topic whose access control policy you wish to modify.
		 * @param {string} Label A unique identifier for the new policy statement.
		 * @param {Array<string>} AWSAccountId The AWS account IDs of the users (principals) who will be given access to the specified actions. The users must have AWS accounts, but do not need to be signed up for this service.
		 * @param {Array<string>} ActionName <p>The action you want to allow for the specified principal(s).</p> <p>Valid values: Any Amazon SNS action name, for example <code>Publish</code>.</p>
		 * @return {void} Success
		 */
		GET_AddPermission(TopicArn: string, Label: string, AWSAccountId: Array<string>, ActionName: Array<string>, Action: GET_AddPermissionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddPermission?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&' + AWSAccountId.map(z => `AWSAccountId=${encodeURIComponent(z)}`).join('&') + '&' + ActionName.map(z => `ActionName=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>
		 * Get #Action=CheckIfPhoneNumberIsOptedOut
		 * @param {string} phoneNumber The phone number for which you want to check the opt out status.
		 * @return {void} Success
		 */
		GET_CheckIfPhoneNumberIsOptedOut(phoneNumber: string, Action: GET_CheckIfPhoneNumberIsOptedOutAction, Version: GET_CheckIfPhoneNumberIsOptedOutVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CheckIfPhoneNumberIsOptedOut?phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".
		 * Get #Action=ConfirmSubscription
		 * @param {string} TopicArn The ARN of the topic for which you wish to confirm a subscription.
		 * @param {string} Token Short-lived token sent to an endpoint during the <code>Subscribe</code> action.
		 * @param {string} AuthenticateOnUnsubscribe Disallows unauthenticated unsubscribes of the subscription. If the value of this parameter is <code>true</code> and the request has an AWS signature, then only the topic owner and the subscription owner can unsubscribe the endpoint. The unsubscribe action requires AWS authentication. 
		 * @return {void} Success
		 */
		GET_ConfirmSubscription(TopicArn: string, Token: string, AuthenticateOnUnsubscribe: string, Action: GET_ConfirmSubscriptionAction, Version: GET_ConfirmSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ConfirmSubscription?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Token=' + (Token == null ? '' : encodeURIComponent(Token)) + '&AuthenticateOnUnsubscribe=' + (AuthenticateOnUnsubscribe == null ? '' : encodeURIComponent(AuthenticateOnUnsubscribe)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a platform application object for one of the supported push notification services, such as APNS and FCM, to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the <code>CreatePlatformApplication</code> action. The PlatformPrincipal is received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is "SSL certificate". For FCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id". The PlatformCredential is also received from the notification service. For WNS, PlatformPrincipal is "Package Security Identifier". For MPNS, PlatformPrincipal is "TLS certificate". For Baidu, PlatformPrincipal is "API key".</p> <p>For APNS/APNS_SANDBOX, PlatformCredential is "private key". For FCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret". For WNS, PlatformCredential is "secret key". For MPNS, PlatformCredential is "private key". For Baidu, PlatformCredential is "secret key". The PlatformApplicationArn that is returned when using <code>CreatePlatformApplication</code> is then used as an attribute for the <code>CreatePlatformEndpoint</code> action.</p>
		 * Get #Action=CreatePlatformApplication
		 * @param {string} Name Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.
		 * @param {string} Platform The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and FCM (Firebase Cloud Messaging).
		 * @param {{[id: string]: string }} Attributes For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html">SetPlatformApplicationAttributes</a> 
		 * @return {void} Success
		 */
		GET_CreatePlatformApplication(Name: string, Platform: string, Attributes: {[id: string]: string }, Action: GET_CreatePlatformApplicationAction, Version: GET_CreatePlatformApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformApplication?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Platform=' + (Platform == null ? '' : encodeURIComponent(Platform)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as FCM and APNS. <code>CreatePlatformEndpoint</code> requires the PlatformApplicationArn that is returned from <code>CreatePlatformApplication</code>. The EndpointArn that is returned when using <code>CreatePlatformEndpoint</code> can then be used by the <code>Publish</code> action to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>
		 * Get #Action=CreatePlatformEndpoint
		 * @param {string} PlatformApplicationArn PlatformApplicationArn returned from CreatePlatformApplication is used to create a an endpoint.
		 * @param {string} Token Unique identifier created by the notification service for an app on a device. The specific name for Token will vary, depending on which notification service is being used. For example, when using APNS as the notification service, you need the device token. Alternatively, when using FCM or ADM, the device token equivalent is called the registration ID.
		 * @param {string} CustomUserData Arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.
		 * @param {{[id: string]: string }} Attributes For a list of attributes, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html">SetEndpointAttributes</a>.
		 * @return {void} Success
		 */
		GET_CreatePlatformEndpoint(PlatformApplicationArn: string, Token: string, CustomUserData: string, Attributes: {[id: string]: string }, Action: GET_CreatePlatformEndpointAction, Version: GET_CreatePlatformEndpointVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePlatformEndpoint?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Token=' + (Token == null ? '' : encodeURIComponent(Token)) + '&CustomUserData=' + (CustomUserData == null ? '' : encodeURIComponent(CustomUserData)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a topic to which notifications can be published. Users can create at most 100,000 topics. For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.
		 * Get #Action=CreateTopic
		 * @param {string} Name <p>The name of the topic you want to create.</p> <p>Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long.</p>
		 * @param {{[id: string]: string }} Attributes <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateTopic</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> - The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>AWS Key Management Service API Reference</i>. </p> </li> </ul>
		 * @param {Array<Tag>} Tags <p>The list of tags to add to a new topic.</p> <note> <p>To be able to tag a topic on creation, you must have the <code>sns:CreateTopic</code> and <code>sns:TagResource</code> permissions.</p> </note>
		 * @return {void} Success
		 */
		GET_CreateTopic(Name: string, Attributes: {[id: string]: string }, Tags: Array<Tag>, Action: GET_CreateTopicAction, Version: GET_CreateTopicVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateTopic?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Attributes=' + Attributes + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>
		 * Get #Action=DeleteEndpoint
		 * @param {string} EndpointArn EndpointArn of endpoint to delete.
		 * @return {void} Success
		 */
		GET_DeleteEndpoint(EndpointArn: string, Action: GET_DeleteEndpointAction, Version: GET_DeleteEndpointVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEndpoint?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a platform application object for one of the supported push notification services, such as APNS and FCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=DeletePlatformApplication
		 * @param {string} PlatformApplicationArn PlatformApplicationArn of platform application object to delete.
		 * @return {void} Success
		 */
		GET_DeletePlatformApplication(PlatformApplicationArn: string, Action: GET_DeletePlatformApplicationAction, Version: GET_DeletePlatformApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePlatformApplication?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.
		 * Get #Action=DeleteTopic
		 * @param {string} TopicArn The ARN of the topic you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteTopic(TopicArn: string, Action: GET_DeleteTopicAction, Version: GET_DeleteTopicVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTopic?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as FCM and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=GetEndpointAttributes
		 * @param {string} EndpointArn EndpointArn for GetEndpointAttributes input.
		 * @return {void} Success
		 */
		GET_GetEndpointAttributes(EndpointArn: string, Action: GET_GetEndpointAttributesAction, Version: GET_GetEndpointAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetEndpointAttributes?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and FCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=GetPlatformApplicationAttributes
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for GetPlatformApplicationAttributesInput.
		 * @return {void} Success
		 */
		GET_GetPlatformApplicationAttributes(PlatformApplicationArn: string, Action: GET_GetPlatformApplicationAttributesAction, Version: GET_GetPlatformApplicationAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetPlatformApplicationAttributes?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the settings for sending SMS messages from your account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
		 * Get #Action=GetSMSAttributes
		 * @param {Array<string>} attributes <p>A list of the individual attribute names, such as <code>MonthlySpendLimit</code>, for which you want values.</p> <p>For all attribute names, see <a href="https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html">SetSMSAttributes</a>.</p> <p>If you don't use this parameter, Amazon SNS returns all SMS attributes.</p>
		 * @return {void} Success
		 */
		GET_GetSMSAttributes(attributes: Array<string>, Action: GET_GetSMSAttributesAction, Version: GET_GetSMSAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSMSAttributes?' + attributes.map(z => `attributes=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of the properties of a subscription.
		 * Get #Action=GetSubscriptionAttributes
		 * @param {string} SubscriptionArn The ARN of the subscription whose properties you want to get.
		 * @return {void} Success
		 */
		GET_GetSubscriptionAttributes(SubscriptionArn: string, Action: GET_GetSubscriptionAttributesAction, Version: GET_GetSubscriptionAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSubscriptionAttributes?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.
		 * Get #Action=GetTopicAttributes
		 * @param {string} TopicArn The ARN of the topic whose properties you want to get.
		 * @return {void} Success
		 */
		GET_GetTopicAttributes(TopicArn: string, Action: GET_GetTopicAttributesAction, Version: GET_GetTopicAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTopicAttributes?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as FCM and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListEndpointsByPlatformApplication
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for ListEndpointsByPlatformApplicationInput action.
		 * @param {string} NextToken NextToken string is used when calling ListEndpointsByPlatformApplication action to retrieve additional records that are available after the first page results.
		 * @return {void} Success
		 */
		GET_ListEndpointsByPlatformApplication(PlatformApplicationArn: string, NextToken: string, Action: GET_ListEndpointsByPlatformApplicationAction, Version: GET_ListEndpointsByPlatformApplicationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListEndpointsByPlatformApplication?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>
		 * Get #Action=ListPhoneNumbersOptedOut
		 * @param {string} nextToken A <code>NextToken</code> string is used when you call the <code>ListPhoneNumbersOptedOut</code> action to retrieve additional records that are available after the first page of results.
		 * @return {void} Success
		 */
		GET_ListPhoneNumbersOptedOut(nextToken: string, Action: GET_ListPhoneNumbersOptedOutAction, Version: GET_ListPhoneNumbersOptedOutVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPhoneNumbersOptedOut?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the platform application objects for the supported push notification services, such as APNS and FCM. The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>
		 * Get #Action=ListPlatformApplications
		 * @param {string} NextToken NextToken string is used when calling ListPlatformApplications action to retrieve additional records that are available after the first page results.
		 * @return {void} Success
		 */
		GET_ListPlatformApplications(NextToken: string, Action: GET_ListPlatformApplicationsAction, Version: GET_ListPlatformApplicationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPlatformApplications?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListSubscriptions
		 * @param {string} NextToken Token returned by the previous <code>ListSubscriptions</code> request.
		 * @return {void} Success
		 */
		GET_ListSubscriptions(NextToken: string, Action: GET_ListSubscriptionsAction, Version: GET_ListSubscriptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSubscriptions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListSubscriptionsByTopic
		 * @param {string} TopicArn The ARN of the topic for which you wish to find subscriptions.
		 * @param {string} NextToken Token returned by the previous <code>ListSubscriptionsByTopic</code> request.
		 * @return {void} Success
		 */
		GET_ListSubscriptionsByTopic(TopicArn: string, NextToken: string, Action: GET_ListSubscriptionsByTopicAction, Version: GET_ListSubscriptionsByTopicVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSubscriptionsByTopic?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceArn The ARN of the topic for which to list tags.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceArn: string, Action: GET_ListTagsForResourceAction, Version: GET_ListTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
		 * Get #Action=ListTopics
		 * @param {string} NextToken Token returned by the previous <code>ListTopics</code> request.
		 * @return {void} Success
		 */
		GET_ListTopics(NextToken: string, Action: GET_ListTopicsAction, Version: GET_ListTopicsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTopics?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>
		 * Get #Action=OptInPhoneNumber
		 * @param {string} phoneNumber The phone number to opt in.
		 * @return {void} Success
		 */
		GET_OptInPhoneNumber(phoneNumber: string, Action: GET_OptInPhoneNumberAction, Version: GET_OptInPhoneNumberVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=OptInPhoneNumber?phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sends a message to an Amazon SNS topic or sends a text message (SMS message) directly to a phone number. </p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message has been saved and Amazon SNS will attempt to deliver it shortly.</p> <p>To use the <code>Publish</code> action for sending a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
		 * Get #Action=Publish
		 * @param {string} TopicArn <p>The topic you want to publish to.</p> <p>If you don't specify a value for the <code>TopicArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TargetArn</code> parameters.</p>
		 * @param {string} TargetArn If you don't specify a value for the <code>TargetArn</code> parameter, you must specify a value for the <code>PhoneNumber</code> or <code>TopicArn</code> parameters.
		 * @param {string} PhoneNumber <p>The phone number to which you want to deliver an SMS message. Use E.164 format.</p> <p>If you don't specify a value for the <code>PhoneNumber</code> parameter, you must specify a value for the <code>TargetArn</code> or <code>TopicArn</code> parameters.</p>
		 * @param {string} Message <p>The message you want to send.</p> <p>If you are publishing to a topic and you want to send the same message to all transport protocols, include the text of the message as a String value. If you want to send different messages for each transport protocol, set the value of the <code>MessageStructure</code> parameter to <code>json</code> and use a JSON object for the <code>Message</code> parameter. </p> <p/> <p>Constraints:</p> <ul> <li> <p>With the exception of SMS, messages must be UTF-8 encoded strings and at most 256 KB in size (262,144 bytes, not 262,144 characters).</p> </li> <li> <p>For SMS, each message can contain up to 140 characters. This character limit depends on the encoding schema. For example, an SMS message can contain 160 GSM characters, 140 ASCII characters, or 70 UCS-2 characters.</p> <p>If you publish a message that exceeds this size limit, Amazon SNS sends the message as multiple messages, each fitting within the size limit. Messages aren't truncated mid-word but are cut off at whole-word boundaries.</p> <p>The total size limit for a single SMS <code>Publish</code> action is 1,600 characters.</p> </li> </ul> <p>JSON-specific constraints:</p> <ul> <li> <p>Keys in the JSON object that correspond to supported transport protocols must have simple JSON string values.</p> </li> <li> <p>The values will be parsed (unescaped) before they are used in outgoing messages.</p> </li> <li> <p>Outbound notifications are JSON encoded (meaning that the characters will be reescaped for sending).</p> </li> <li> <p>Values have a minimum length of 0 (the empty string, "", is allowed).</p> </li> <li> <p>Values have a maximum length bounded by the overall message size (so, including multiple protocols may limit message sizes).</p> </li> <li> <p>Non-string values will cause the key to be ignored.</p> </li> <li> <p>Keys that do not correspond to supported transport protocols are ignored.</p> </li> <li> <p>Duplicate keys are not allowed.</p> </li> <li> <p>Failure to parse or validate any key or value in the message will cause the <code>Publish</code> call to return an error (no partial delivery).</p> </li> </ul>
		 * @param {string} Subject <p>Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints. This field will also be included, if present, in the standard JSON messages delivered to other endpoints.</p> <p>Constraints: Subjects must be ASCII text that begins with a letter, number, or punctuation mark; must not include line breaks or control characters; and must be less than 100 characters long.</p>
		 * @param {string} MessageStructure <p>Set <code>MessageStructure</code> to <code>json</code> if you want to send a different message for each protocol. For example, using one publish action, you can send a short message to your SMS subscribers and a longer message to your email subscribers. If you set <code>MessageStructure</code> to <code>json</code>, the value of the <code>Message</code> parameter must: </p> <ul> <li> <p>be a syntactically valid JSON object; and</p> </li> <li> <p>contain at least a top-level JSON key of "default" with a value that is a string.</p> </li> </ul> <p>You can define other top-level keys that define the message you want to send to a specific transport protocol (e.g., "http").</p> <p>Valid value: <code>json</code> </p>
		 * @param {{[id: string]: MessageAttributeValue }} MessageAttributes Message attributes for Publish action.
		 * @return {void} Success
		 */
		GET_Publish(TopicArn: string, TargetArn: string, PhoneNumber: string, Message: string, Subject: string, MessageStructure: string, MessageAttributes: {[id: string]: MessageAttributeValue }, Action: GET_PublishAction, Version: GET_PublishVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Publish?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&TargetArn=' + (TargetArn == null ? '' : encodeURIComponent(TargetArn)) + '&PhoneNumber=' + (PhoneNumber == null ? '' : encodeURIComponent(PhoneNumber)) + '&Message=' + (Message == null ? '' : encodeURIComponent(Message)) + '&Subject=' + (Subject == null ? '' : encodeURIComponent(Subject)) + '&MessageStructure=' + (MessageStructure == null ? '' : encodeURIComponent(MessageStructure)) + '&MessageAttributes=' + MessageAttributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a statement from a topic's access control policy.
		 * Get #Action=RemovePermission
		 * @param {string} TopicArn The ARN of the topic whose access control policy you wish to modify.
		 * @param {string} Label The unique label of the statement you want to remove.
		 * @return {void} Success
		 */
		GET_RemovePermission(TopicArn: string, Label: string, Action: GET_RemovePermissionAction, Version: GET_RemovePermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemovePermission?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as FCM and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>.
		 * Get #Action=SetEndpointAttributes
		 * @param {string} EndpointArn EndpointArn used for SetEndpointAttributes action.
		 * @param {{[id: string]: string }} Attributes <p>A map of the endpoint attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_SetEndpointAttributes(EndpointArn: string, Attributes: {[id: string]: string }, Action: GET_SetEndpointAttributesAction, Version: GET_SetEndpointAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetEndpointAttributes?EndpointArn=' + (EndpointArn == null ? '' : encodeURIComponent(EndpointArn)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the attributes of the platform application object for the supported push notification services, such as APNS and FCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>.
		 * Get #Action=SetPlatformApplicationAttributes
		 * @param {string} PlatformApplicationArn PlatformApplicationArn for SetPlatformApplicationAttributes action.
		 * @param {{[id: string]: string }} Attributes <p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service. For APNS/APNS_SANDBOX, PlatformCredential is private key. For FCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret".</p> </li> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is SSL certificate. For FCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id".</p> </li> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which EndpointCreated event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which EndpointDeleted event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which EndpointUpdate event notifications should be sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_SetPlatformApplicationAttributes(PlatformApplicationArn: string, Attributes: {[id: string]: string }, Action: GET_SetPlatformApplicationAttributesAction, Version: GET_SetPlatformApplicationAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetPlatformApplicationAttributes?PlatformApplicationArn=' + (PlatformApplicationArn == null ? '' : encodeURIComponent(PlatformApplicationArn)) + '&Attributes=' + Attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Sending an SMS Message</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * Get #Action=SetSMSAttributes
		 * @param {{[id: string]: string }} attributes <p>The default settings for sending SMS messages from your account. You can set values for the following attribute names:</p> <p> <code>MonthlySpendLimit</code> – The maximum amount in USD that you are willing to spend each month to send SMS messages. When Amazon SNS determines that sending an SMS message would incur a cost that exceeds this limit, it stops sending SMS messages within minutes.</p> <important> <p>Amazon SNS stops sending SMS messages within minutes of the limit being crossed. During that interval, if you continue to send SMS messages, you will incur costs that exceed your limit.</p> </important> <p>By default, the spend limit is set to the maximum allowed by Amazon SNS. If you want to raise the limit, submit an <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sns">SNS Limit Increase case</a>. For <b>New limit value</b>, enter your desired monthly spend limit. In the <b>Use Case Description</b> field, explain that you are requesting an SMS monthly spend limit increase.</p> <p> <code>DeliveryStatusIAMRole</code> – The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. For each SMS message that you send, Amazon SNS writes a log that includes the message price, the success or failure status, the reason for failure (if the message failed), the message dwell time, and other information.</p> <p> <code>DeliveryStatusSuccessSamplingRate</code> – The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value can be an integer from 0 - 100. For example, to write logs only for failed deliveries, set this value to <code>0</code>. To write logs for 10% of your successful deliveries, set it to <code>10</code>.</p> <p> <code>DefaultSenderID</code> – A string, such as your business brand, that is displayed as the sender on the receiving device. Support for sender IDs varies by country. The sender ID can be 1 - 11 alphanumeric characters, and it must contain at least one letter.</p> <p> <code>DefaultSMSType</code> – The type of SMS message that you will send by default. You can assign the following values:</p> <ul> <li> <p> <code>Promotional</code> – (Default) Noncritical messages, such as marketing messages. Amazon SNS optimizes the message delivery to incur the lowest cost.</p> </li> <li> <p> <code>Transactional</code> – Critical messages that support customer transactions, such as one-time passcodes for multi-factor authentication. Amazon SNS optimizes the message delivery to achieve the highest reliability.</p> </li> </ul> <p> <code>UsageReportS3Bucket</code> – The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. Each day, Amazon SNS will deliver a usage report as a CSV file to the bucket. The report includes the following information for each SMS message that was successfully delivered by your account:</p> <ul> <li> <p>Time that the message was published (in UTC)</p> </li> <li> <p>Message ID</p> </li> <li> <p>Destination phone number</p> </li> <li> <p>Message type</p> </li> <li> <p>Delivery status</p> </li> <li> <p>Message price (in USD)</p> </li> <li> <p>Part number (a message is split into multiple parts if it is too long for a single message)</p> </li> <li> <p>Total number of parts</p> </li> </ul> <p>To receive the report, the bucket must have a policy that allows the Amazon SNS service principle to perform the <code>s3:PutObject</code> and <code>s3:GetBucketLocation</code> actions.</p> <p>For an example bucket policy and usage report, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html">Monitoring SMS Activity</a> in the <i>Amazon SNS Developer Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_SetSMSAttributes(attributes: {[id: string]: string }, Action: GET_SetSMSAttributesAction, Version: GET_SetSMSAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSMSAttributes?attributes=' + attributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows a subscription owner to set an attribute of the subscription to a new value.
		 * Get #Action=SetSubscriptionAttributes
		 * @param {string} SubscriptionArn The ARN of the subscription to modify.
		 * @param {string} AttributeName <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul>
		 * @param {string} AttributeValue The new value for the attribute in JSON format.
		 * @return {void} Success
		 */
		GET_SetSubscriptionAttributes(SubscriptionArn: string, AttributeName: string, AttributeValue: string, Action: GET_SetSubscriptionAttributesAction, Version: GET_SetSubscriptionAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSubscriptionAttributes?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&AttributeValue=' + (AttributeValue == null ? '' : encodeURIComponent(AttributeValue)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows a topic owner to set an attribute of the topic to a new value.
		 * Get #Action=SetTopicAttributes
		 * @param {string} TopicArn The ARN of the topic to modify.
		 * @param {string} AttributeName <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>DisplayName</code> – The display name to use for a topic with SMS subscriptions.</p> </li> <li> <p> <code>Policy</code> – The policy that defines who can access your topic. By default, only the topic owner can publish or subscribe to the topic.</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> - The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms">Key Terms</a>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>AWS Key Management Service API Reference</i>. </p> </li> </ul>
		 * @param {string} AttributeValue The new value for the attribute.
		 * @return {void} Success
		 */
		GET_SetTopicAttributes(TopicArn: string, AttributeName: string, AttributeValue: string, Action: GET_SetTopicAttributesAction, Version: GET_SetTopicAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetTopicAttributes?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&AttributeValue=' + (AttributeValue == null ? '' : encodeURIComponent(AttributeValue)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Prepares to subscribe an endpoint by sending the endpoint a confirmation message. To actually create a subscription, the endpoint owner must call the <code>ConfirmSubscription</code> action with the token from the confirmation message. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>
		 * Get #Action=Subscribe
		 * @param {string} TopicArn The ARN of the topic you want to subscribe to.
		 * @param {string} Protocol <p>The protocol you want to use. Supported protocols include:</p> <ul> <li> <p> <code>http</code> – delivery of JSON-encoded message via HTTP POST</p> </li> <li> <p> <code>https</code> – delivery of JSON-encoded message via HTTPS POST</p> </li> <li> <p> <code>email</code> – delivery of message via SMTP</p> </li> <li> <p> <code>email-json</code> – delivery of JSON-encoded message via SMTP</p> </li> <li> <p> <code>sms</code> – delivery of message via SMS</p> </li> <li> <p> <code>sqs</code> – delivery of JSON-encoded message to an Amazon SQS queue</p> </li> <li> <p> <code>application</code> – delivery of JSON-encoded message to an EndpointArn for a mobile app and device.</p> </li> <li> <p> <code>lambda</code> – delivery of JSON-encoded message to an Amazon Lambda function.</p> </li> </ul>
		 * @param {string} Endpoint <p>The endpoint that you want to receive notifications. Endpoints vary by protocol:</p> <ul> <li> <p>For the <code>http</code> protocol, the endpoint is an URL beginning with <code>http://</code> </p> </li> <li> <p>For the <code>https</code> protocol, the endpoint is a URL beginning with <code>https://</code> </p> </li> <li> <p>For the <code>email</code> protocol, the endpoint is an email address</p> </li> <li> <p>For the <code>email-json</code> protocol, the endpoint is an email address</p> </li> <li> <p>For the <code>sms</code> protocol, the endpoint is a phone number of an SMS-enabled device</p> </li> <li> <p>For the <code>sqs</code> protocol, the endpoint is the ARN of an Amazon SQS queue</p> </li> <li> <p>For the <code>application</code> protocol, the endpoint is the EndpointArn of a mobile app and device.</p> </li> <li> <p>For the <code>lambda</code> protocol, the endpoint is the ARN of an Amazon Lambda function.</p> </li> </ul>
		 * @param {{[id: string]: string }} Attributes <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetTopicAttributes</code> action uses:</p> <ul> <li> <p> <code>DeliveryPolicy</code> – The policy that defines how Amazon SNS retries failed deliveries to HTTP/S endpoints.</p> </li> <li> <p> <code>FilterPolicy</code> – The simple JSON object that lets your subscriber receive only a subset of messages, rather than receiving every message published to the topic.</p> </li> <li> <p> <code>RawMessageDelivery</code> – When set to <code>true</code>, enables raw message delivery to Amazon SQS or HTTP/S endpoints. This eliminates the need for the endpoints to process JSON formatting, which is otherwise created for Amazon SNS metadata.</p> </li> <li> <p> <code>RedrivePolicy</code> – When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.</p> </li> </ul>
		 * @param {boolean} ReturnSubscriptionArn <p>Sets whether the response from the <code>Subscribe</code> request includes the subscription ARN, even if the subscription is not yet confirmed.</p> <ul> <li> <p>If you have the subscription ARN returned, the response includes the ARN in all cases, even if the subscription is not yet confirmed.</p> </li> <li> <p>If you don't have the subscription ARN returned, in addition to the ARN for confirmed subscriptions, the response also includes the <code>pending subscription</code> ARN value for subscriptions that aren't yet confirmed. A subscription becomes confirmed when the subscriber calls the <code>ConfirmSubscription</code> action with a confirmation token.</p> </li> </ul> <p>If you set this parameter to <code>true</code>, .</p> <p>The default value is <code>false</code>.</p>
		 * @return {void} Success
		 */
		GET_Subscribe(TopicArn: string, Protocol: string, Endpoint: string, Attributes: {[id: string]: string }, ReturnSubscriptionArn: boolean, Action: GET_SubscribeAction, Version: GET_SubscribeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Subscribe?TopicArn=' + (TopicArn == null ? '' : encodeURIComponent(TopicArn)) + '&Protocol=' + (Protocol == null ? '' : encodeURIComponent(Protocol)) + '&Endpoint=' + (Endpoint == null ? '' : encodeURIComponent(Endpoint)) + '&Attributes=' + Attributes + '&ReturnSubscriptionArn=' + ReturnSubscriptionArn + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per AWS account, per AWS region. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul>
		 * Get #Action=TagResource
		 * @param {string} ResourceArn The ARN of the topic to which to add tags.
		 * @param {Array<Tag>} Tags The tags to be added to the specified topic. A tag consists of a required key and an optional value.
		 * @return {void} Success
		 */
		GET_TagResource(ResourceArn: string, Tags: Array<Tag>, Action: GET_TagResourceAction, Version: GET_TagResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TagResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>
		 * Get #Action=Unsubscribe
		 * @param {string} SubscriptionArn The ARN of the subscription to be deleted.
		 * @return {void} Success
		 */
		GET_Unsubscribe(SubscriptionArn: string, Action: GET_UnsubscribeAction, Version: GET_UnsubscribeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=Unsubscribe?SubscriptionArn=' + (SubscriptionArn == null ? '' : encodeURIComponent(SubscriptionArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.
		 * Get #Action=UntagResource
		 * @param {string} ResourceArn The ARN of the topic from which to remove tags.
		 * @param {Array<string>} TagKeys The list of tag keys to remove from the specified topic.
		 * @return {void} Success
		 */
		GET_UntagResource(ResourceArn: string, TagKeys: Array<string>, Action: GET_UntagResourceAction, Version: GET_UntagResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UntagResource?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddPermissionAction { AddPermission = 0 }

	export enum GET_AddPermissionVersion { _2010_03_31 = 0 }

	export enum POST_AddPermissionVersion { _2010_03_31 = 0 }

	export enum GET_CheckIfPhoneNumberIsOptedOutAction { CheckIfPhoneNumberIsOptedOut = 0 }

	export enum GET_CheckIfPhoneNumberIsOptedOutVersion { _2010_03_31 = 0 }

	export enum POST_CheckIfPhoneNumberIsOptedOutVersion { _2010_03_31 = 0 }

	export enum GET_ConfirmSubscriptionAction { ConfirmSubscription = 0 }

	export enum GET_ConfirmSubscriptionVersion { _2010_03_31 = 0 }

	export enum POST_ConfirmSubscriptionVersion { _2010_03_31 = 0 }

	export enum GET_CreatePlatformApplicationAction { CreatePlatformApplication = 0 }

	export enum GET_CreatePlatformApplicationVersion { _2010_03_31 = 0 }

	export enum POST_CreatePlatformApplicationVersion { _2010_03_31 = 0 }

	export enum GET_CreatePlatformEndpointAction { CreatePlatformEndpoint = 0 }

	export enum GET_CreatePlatformEndpointVersion { _2010_03_31 = 0 }

	export enum POST_CreatePlatformEndpointVersion { _2010_03_31 = 0 }

	export enum GET_CreateTopicAction { CreateTopic = 0 }

	export enum GET_CreateTopicVersion { _2010_03_31 = 0 }

	export enum POST_CreateTopicVersion { _2010_03_31 = 0 }

	export enum GET_DeleteEndpointAction { DeleteEndpoint = 0 }

	export enum GET_DeleteEndpointVersion { _2010_03_31 = 0 }

	export enum POST_DeleteEndpointVersion { _2010_03_31 = 0 }

	export enum GET_DeletePlatformApplicationAction { DeletePlatformApplication = 0 }

	export enum GET_DeletePlatformApplicationVersion { _2010_03_31 = 0 }

	export enum POST_DeletePlatformApplicationVersion { _2010_03_31 = 0 }

	export enum GET_DeleteTopicAction { DeleteTopic = 0 }

	export enum GET_DeleteTopicVersion { _2010_03_31 = 0 }

	export enum POST_DeleteTopicVersion { _2010_03_31 = 0 }

	export enum GET_GetEndpointAttributesAction { GetEndpointAttributes = 0 }

	export enum GET_GetEndpointAttributesVersion { _2010_03_31 = 0 }

	export enum POST_GetEndpointAttributesVersion { _2010_03_31 = 0 }

	export enum GET_GetPlatformApplicationAttributesAction { GetPlatformApplicationAttributes = 0 }

	export enum GET_GetPlatformApplicationAttributesVersion { _2010_03_31 = 0 }

	export enum POST_GetPlatformApplicationAttributesVersion { _2010_03_31 = 0 }

	export enum GET_GetSMSAttributesAction { GetSMSAttributes = 0 }

	export enum GET_GetSMSAttributesVersion { _2010_03_31 = 0 }

	export enum POST_GetSMSAttributesVersion { _2010_03_31 = 0 }

	export enum GET_GetSubscriptionAttributesAction { GetSubscriptionAttributes = 0 }

	export enum GET_GetSubscriptionAttributesVersion { _2010_03_31 = 0 }

	export enum POST_GetSubscriptionAttributesVersion { _2010_03_31 = 0 }

	export enum GET_GetTopicAttributesAction { GetTopicAttributes = 0 }

	export enum GET_GetTopicAttributesVersion { _2010_03_31 = 0 }

	export enum POST_GetTopicAttributesVersion { _2010_03_31 = 0 }

	export enum GET_ListEndpointsByPlatformApplicationAction { ListEndpointsByPlatformApplication = 0 }

	export enum GET_ListEndpointsByPlatformApplicationVersion { _2010_03_31 = 0 }

	export enum POST_ListEndpointsByPlatformApplicationVersion { _2010_03_31 = 0 }

	export enum GET_ListPhoneNumbersOptedOutAction { ListPhoneNumbersOptedOut = 0 }

	export enum GET_ListPhoneNumbersOptedOutVersion { _2010_03_31 = 0 }

	export enum POST_ListPhoneNumbersOptedOutVersion { _2010_03_31 = 0 }

	export enum GET_ListPlatformApplicationsAction { ListPlatformApplications = 0 }

	export enum GET_ListPlatformApplicationsVersion { _2010_03_31 = 0 }

	export enum POST_ListPlatformApplicationsVersion { _2010_03_31 = 0 }

	export enum GET_ListSubscriptionsAction { ListSubscriptions = 0 }

	export enum GET_ListSubscriptionsVersion { _2010_03_31 = 0 }

	export enum POST_ListSubscriptionsVersion { _2010_03_31 = 0 }

	export enum GET_ListSubscriptionsByTopicAction { ListSubscriptionsByTopic = 0 }

	export enum GET_ListSubscriptionsByTopicVersion { _2010_03_31 = 0 }

	export enum POST_ListSubscriptionsByTopicVersion { _2010_03_31 = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_ListTagsForResourceVersion { _2010_03_31 = 0 }

	export enum POST_ListTagsForResourceVersion { _2010_03_31 = 0 }

	export enum GET_ListTopicsAction { ListTopics = 0 }

	export enum GET_ListTopicsVersion { _2010_03_31 = 0 }

	export enum POST_ListTopicsVersion { _2010_03_31 = 0 }

	export enum GET_OptInPhoneNumberAction { OptInPhoneNumber = 0 }

	export enum GET_OptInPhoneNumberVersion { _2010_03_31 = 0 }

	export enum POST_OptInPhoneNumberVersion { _2010_03_31 = 0 }

	export enum GET_PublishAction { Publish = 0 }

	export enum GET_PublishVersion { _2010_03_31 = 0 }

	export enum POST_PublishVersion { _2010_03_31 = 0 }

	export enum GET_RemovePermissionAction { RemovePermission = 0 }

	export enum GET_RemovePermissionVersion { _2010_03_31 = 0 }

	export enum POST_RemovePermissionVersion { _2010_03_31 = 0 }

	export enum GET_SetEndpointAttributesAction { SetEndpointAttributes = 0 }

	export enum GET_SetEndpointAttributesVersion { _2010_03_31 = 0 }

	export enum POST_SetEndpointAttributesVersion { _2010_03_31 = 0 }

	export enum GET_SetPlatformApplicationAttributesAction { SetPlatformApplicationAttributes = 0 }

	export enum GET_SetPlatformApplicationAttributesVersion { _2010_03_31 = 0 }

	export enum POST_SetPlatformApplicationAttributesVersion { _2010_03_31 = 0 }

	export enum GET_SetSMSAttributesAction { SetSMSAttributes = 0 }

	export enum GET_SetSMSAttributesVersion { _2010_03_31 = 0 }

	export enum POST_SetSMSAttributesVersion { _2010_03_31 = 0 }

	export enum GET_SetSubscriptionAttributesAction { SetSubscriptionAttributes = 0 }

	export enum GET_SetSubscriptionAttributesVersion { _2010_03_31 = 0 }

	export enum POST_SetSubscriptionAttributesVersion { _2010_03_31 = 0 }

	export enum GET_SetTopicAttributesAction { SetTopicAttributes = 0 }

	export enum GET_SetTopicAttributesVersion { _2010_03_31 = 0 }

	export enum POST_SetTopicAttributesVersion { _2010_03_31 = 0 }

	export enum GET_SubscribeAction { Subscribe = 0 }

	export enum GET_SubscribeVersion { _2010_03_31 = 0 }

	export enum POST_SubscribeVersion { _2010_03_31 = 0 }

	export enum GET_TagResourceAction { TagResource = 0 }

	export enum GET_TagResourceVersion { _2010_03_31 = 0 }

	export enum POST_TagResourceVersion { _2010_03_31 = 0 }

	export enum GET_UnsubscribeAction { Unsubscribe = 0 }

	export enum GET_UnsubscribeVersion { _2010_03_31 = 0 }

	export enum POST_UnsubscribeVersion { _2010_03_31 = 0 }

	export enum GET_UntagResourceAction { UntagResource = 0 }

	export enum GET_UntagResourceVersion { _2010_03_31 = 0 }

	export enum POST_UntagResourceVersion { _2010_03_31 = 0 }

}

