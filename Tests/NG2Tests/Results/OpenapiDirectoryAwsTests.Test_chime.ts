import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociatePhoneNumberWithUserResponse {
	}

	export interface UnauthorizedClientException {
	}

	export interface NotFoundException {
	}

	export interface ForbiddenException {
	}

	export interface BadRequestException {
	}

	export interface AccessDeniedException {
	}

	export interface ThrottledClientException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ServiceFailureException {
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}


	/** If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberError {
		PhoneNumberId?: string | null;
		ErrorCode?: PhoneNumberErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	export enum PhoneNumberErrorErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}

	export interface AssociateSigninDelegateGroupsWithAccountResponse {
	}


	/** An Active Directory (AD) group whose members are granted permission to act as delegates. */
	export interface SigninDelegateGroup {
		GroupName?: string | null;
	}

	export interface BatchCreateAttendeeResponse {
		Attendees?: Array<Attendee> | null;
		Errors?: Array<CreateAttendeeError> | null;
	}


	/** <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface Attendee {
		ExternalUserId?: string | null;
		AttendeeId?: string | null;
		JoinToken?: string | null;
	}


	/** The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeError {
		ExternalUserId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}


	/** The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItem {
		ExternalUserId: string;
		Tags?: Array<Tag> | null;
	}


	/** Describes a tag applied to a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ResourceLimitExceededException {
	}

	export interface BatchCreateRoomMembershipResponse {
		Errors?: Array<MemberError> | null;
	}


	/** The list of errors returned when a member action results in an error. */
	export interface MemberError {
		MemberId?: string | null;
		ErrorCode?: PhoneNumberErrorErrorCode | null;
		ErrorMessage?: string | null;
	}


	/** Membership details, such as member ID and member role. */
	export interface MembershipItem {
		MemberId?: string | null;
		Role?: MembershipItemRole | null;
	}

	export enum MembershipItemRole { Administrator = 0, Member = 1 }

	export interface BatchDeletePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}

	export interface BatchSuspendUserResponse {
		UserErrors?: Array<UserError> | null;
	}


	/** The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages. */
	export interface UserError {
		UserId?: string | null;
		ErrorCode?: PhoneNumberErrorErrorCode | null;
		ErrorMessage?: string | null;
	}

	export interface BatchUnsuspendUserResponse {
		UserErrors?: Array<UserError> | null;
	}

	export interface BatchUpdatePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}


	/** The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItem {
		PhoneNumberId: string;
		ProductType?: UpdatePhoneNumberRequestItemProductType | null;
		CallingName?: string | null;
	}

	export enum UpdatePhoneNumberRequestItemProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface BatchUpdateUserResponse {
		UserErrors?: Array<UserError> | null;
	}


	/** The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action. */
	export interface UpdateUserRequestItem {
		UserId: string;
		LicenseType?: UpdateUserRequestItemLicenseType | null;
		UserType?: UpdateUserRequestItemUserType | null;

		/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata | null;
	}

	export enum UpdateUserRequestItemLicenseType { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export enum UpdateUserRequestItemUserType { PrivateUser = 0, SharedDevice = 1 }


	/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
	export interface AlexaForBusinessMetadata {
		IsAlexaForBusinessEnabled?: boolean | null;
		AlexaForBusinessRoomArn?: string | null;
	}

	export interface CreateAccountResponse {

		/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account | null;
	}


	/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
	export interface Account {
		AwsAccountId: string;
		AccountId: string;
		Name: string;
		AccountType?: AccountAccountType | null;
		CreatedTimestamp?: Date | null;
		DefaultLicense?: UpdateUserRequestItemLicenseType | null;
		SupportedLicenses?: Array<License> | null;
		SigninDelegateGroups?: Array<SigninDelegateGroup> | null;
	}

	export enum AccountAccountType { Team = 0, EnterpriseDirectory = 1, EnterpriseLWA = 2, EnterpriseOIDC = 3 }

	export enum License { Basic = 0, Plus = 1, Pro = 2, ProTrial = 3 }

	export interface CreateAttendeeResponse {

		/** <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
		Attendee?: Attendee | null;
	}

	export interface CreateBotResponse {

		/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot | null;
	}


	/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
	export interface Bot {
		BotId?: string | null;
		UserId?: string | null;
		DisplayName?: string | null;
		BotType?: BotBotType | null;
		Disabled?: boolean | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
		BotEmail?: string | null;
		SecurityToken?: string | null;
	}

	export enum BotBotType { ChatBot = 0 }

	export interface CreateMeetingResponse {

		/** A meeting created using the Amazon Chime SDK. */
		Meeting?: Meeting | null;
	}


	/** A meeting created using the Amazon Chime SDK. */
	export interface Meeting {
		MeetingId?: string | null;
		ExternalMeetingId?: string | null;

		/** A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting. */
		MediaPlacement?: MediaPlacement | null;
		MediaRegion?: string | null;
	}


	/** A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting. */
	export interface MediaPlacement {
		AudioHostUrl?: string | null;
		AudioFallbackUrl?: string | null;
		ScreenDataUrl?: string | null;
		ScreenSharingUrl?: string | null;
		ScreenViewingUrl?: string | null;
		SignalingUrl?: string | null;
		TurnControlUrl?: string | null;
	}

	export interface CreatePhoneNumberOrderResponse {

		/** The details of a phone number order created for Amazon Chime. */
		PhoneNumberOrder?: PhoneNumberOrder | null;
	}


	/** The details of a phone number order created for Amazon Chime. */
	export interface PhoneNumberOrder {
		PhoneNumberOrderId?: string | null;
		ProductType?: UpdatePhoneNumberRequestItemProductType | null;
		Status?: PhoneNumberOrderStatus | null;
		OrderedPhoneNumbers?: Array<OrderedPhoneNumber> | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
	}

	export enum PhoneNumberOrderStatus { Processing = 0, Successful = 1, Failed = 2, Partial = 3 }


	/** A phone number for which an order has been placed. */
	export interface OrderedPhoneNumber {
		E164PhoneNumber?: string | null;
		Status?: OrderedPhoneNumberStatus | null;
	}

	export enum OrderedPhoneNumberStatus { Processing = 0, Acquired = 1, Failed = 2 }

	export interface CreateProxySessionResponse {

		/** The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession | null;
	}


	/** The proxy session for an Amazon Chime Voice Connector. */
	export interface ProxySession {
		VoiceConnectorId?: string | null;
		ProxySessionId?: string | null;
		Name?: string | null;
		Status?: ProxySessionStatus | null;
		ExpiryMinutes?: number | null;
		Capabilities?: Array<Capability> | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
		EndedTimestamp?: Date | null;
		Participants?: Array<Participant> | null;
		NumberSelectionBehavior?: ProxySessionNumberSelectionBehavior | null;
		GeoMatchLevel?: ProxySessionGeoMatchLevel | null;

		/** The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: GeoMatchParams | null;
	}

	export enum ProxySessionStatus { Open = 0, InProgress = 1, Closed = 2 }

	export enum Capability { Voice = 0, SMS = 1 }


	/** The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session. */
	export interface Participant {
		PhoneNumber?: string | null;
		ProxyPhoneNumber?: string | null;
	}

	export enum ProxySessionNumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum ProxySessionGeoMatchLevel { Country = 0, AreaCode = 1 }


	/** The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParams {
		Country: string;
		AreaCode: string;
	}

	export interface CreateRoomResponse {

		/** The Amazon Chime chat room details. */
		Room?: Room | null;
	}


	/** The Amazon Chime chat room details. */
	export interface Room {
		RoomId?: string | null;
		Name?: string | null;
		AccountId?: string | null;
		CreatedBy?: string | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
	}

	export interface CreateRoomMembershipResponse {

		/** The room membership details. */
		RoomMembership?: RoomMembership | null;
	}


	/** The room membership details. */
	export interface RoomMembership {
		RoomId?: string | null;

		/** The member details, such as email address, name, member ID, and member type. */
		Member?: Member | null;
		Role?: MembershipItemRole | null;
		InvitedBy?: string | null;
		UpdatedTimestamp?: Date | null;
	}


	/** The member details, such as email address, name, member ID, and member type. */
	export interface Member {
		MemberId?: string | null;
		MemberType?: MemberMemberType | null;
		Email?: string | null;
		FullName?: string | null;
		AccountId?: string | null;
	}

	export enum MemberMemberType { User = 0, Bot = 1, Webhook = 2 }

	export interface ConflictException {
	}

	export interface CreateUserResponse {

		/** The user on the Amazon Chime account. */
		User?: User | null;
	}


	/** The user on the Amazon Chime account. */
	export interface User {
		UserId: string;
		AccountId?: string | null;
		PrimaryEmail?: string | null;
		PrimaryProvisionedNumber?: string | null;
		DisplayName?: string | null;
		LicenseType?: UpdateUserRequestItemLicenseType | null;
		UserType?: UpdateUserRequestItemUserType | null;
		UserRegistrationStatus?: UserUserRegistrationStatus | null;
		UserInvitationStatus?: UserUserInvitationStatus | null;
		RegisteredOn?: Date | null;
		InvitedOn?: Date | null;

		/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata | null;
		PersonalPIN?: string | null;
	}

	export enum UserUserRegistrationStatus { Unregistered = 0, Registered = 1, Suspended = 2 }

	export enum UserUserInvitationStatus { Pending = 0, Accepted = 1, Failed = 2 }

	export interface CreateVoiceConnectorResponse {

		/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector | null;
	}


	/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnector {
		VoiceConnectorId?: string | null;
		AwsRegion?: VoiceConnectorAwsRegion | null;
		Name?: string | null;
		OutboundHostName?: string | null;
		RequireEncryption?: boolean | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
	}

	export enum VoiceConnectorAwsRegion { us_east_1 = 0, us_west_2 = 1 }

	export interface CreateVoiceConnectorGroupResponse {

		/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup | null;
	}


	/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroup {
		VoiceConnectorGroupId?: string | null;
		Name?: string | null;
		VoiceConnectorItems?: Array<VoiceConnectorItem> | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
	}


	/** For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group. */
	export interface VoiceConnectorItem {
		VoiceConnectorId: string;
		Priority: number;
	}

	export interface DeleteAccountResponse {
	}

	export interface UnprocessableEntityException {
	}

	export interface DisassociatePhoneNumberFromUserResponse {
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError> | null;
	}

	export interface DisassociateSigninDelegateGroupsFromAccountResponse {
	}

	export interface GetAccountResponse {

		/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account | null;
	}

	export interface GetAccountSettingsResponse {

		/** Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
		AccountSettings?: AccountSettings | null;
	}


	/** Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
	export interface AccountSettings {
		DisableRemoteControl?: boolean | null;
		EnableDialOut?: boolean | null;
	}

	export interface GetAttendeeResponse {

		/** <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
		Attendee?: Attendee | null;
	}

	export interface GetBotResponse {

		/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot | null;
	}

	export interface GetEventsConfigurationResponse {

		/** The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
		EventsConfiguration?: EventsConfiguration | null;
	}


	/** The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
	export interface EventsConfiguration {
		BotId?: string | null;
		OutboundEventsHTTPSEndpoint?: string | null;
		LambdaFunctionArn?: string | null;
	}

	export interface GetGlobalSettingsResponse {

		/** The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
		BusinessCalling?: BusinessCallingSettings | null;

		/** The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector?: VoiceConnectorSettings | null;
	}


	/** The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface BusinessCallingSettings {
		CdrBucket?: string | null;
	}


	/** The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettings {
		CdrBucket?: string | null;
	}

	export interface GetMeetingResponse {

		/** A meeting created using the Amazon Chime SDK. */
		Meeting?: Meeting | null;
	}

	export interface GetPhoneNumberResponse {

		/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber | null;
	}


	/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
	export interface PhoneNumber {
		PhoneNumberId?: string | null;
		E164PhoneNumber?: string | null;
		Type?: PhoneNumberType | null;
		ProductType?: UpdatePhoneNumberRequestItemProductType | null;
		Status?: PhoneNumberStatus | null;

		/** The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
		Capabilities?: PhoneNumberCapabilities | null;
		Associations?: Array<PhoneNumberAssociation> | null;
		CallingName?: string | null;
		CallingNameStatus?: PhoneNumberCallingNameStatus | null;
		CreatedTimestamp?: Date | null;
		UpdatedTimestamp?: Date | null;
		DeletionTimestamp?: Date | null;
	}

	export enum PhoneNumberType { Local = 0, TollFree = 1 }

	export enum PhoneNumberStatus { AcquireInProgress = 0, AcquireFailed = 1, Unassigned = 2, Assigned = 3, ReleaseInProgress = 4, DeleteInProgress = 5, ReleaseFailed = 6, DeleteFailed = 7 }


	/** The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
	export interface PhoneNumberCapabilities {
		InboundCall?: boolean | null;
		OutboundCall?: boolean | null;
		InboundSMS?: boolean | null;
		OutboundSMS?: boolean | null;
		InboundMMS?: boolean | null;
		OutboundMMS?: boolean | null;
	}


	/** The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID. */
	export interface PhoneNumberAssociation {
		Value?: string | null;
		Name?: PhoneNumberAssociationName | null;
		AssociatedTimestamp?: Date | null;
	}

	export enum PhoneNumberAssociationName { AccountId = 0, UserId = 1, VoiceConnectorId = 2, VoiceConnectorGroupId = 3 }

	export enum PhoneNumberCallingNameStatus { Unassigned = 0, UpdateInProgress = 1, UpdateSucceeded = 2, UpdateFailed = 3 }

	export interface GetPhoneNumberOrderResponse {

		/** The details of a phone number order created for Amazon Chime. */
		PhoneNumberOrder?: PhoneNumberOrder | null;
	}

	export interface GetPhoneNumberSettingsResponse {
		CallingName?: string | null;
		CallingNameUpdatedTimestamp?: Date | null;
	}

	export interface GetProxySessionResponse {

		/** The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession | null;
	}

	export interface GetRetentionSettingsResponse {

		/** The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings?: RetentionSettings | null;
		InitiateDeletionTimestamp?: Date | null;
	}


	/** The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
	export interface RetentionSettings {

		/** The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account. */
		RoomRetentionSettings?: RoomRetentionSettings | null;

		/** The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account. */
		ConversationRetentionSettings?: ConversationRetentionSettings | null;
	}


	/** The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account. */
	export interface RoomRetentionSettings {
		RetentionDays?: number | null;
	}


	/** The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account. */
	export interface ConversationRetentionSettings {
		RetentionDays?: number | null;
	}

	export interface GetRoomResponse {

		/** The Amazon Chime chat room details. */
		Room?: Room | null;
	}

	export interface GetUserResponse {

		/** The user on the Amazon Chime account. */
		User?: User | null;
	}

	export interface GetUserSettingsResponse {

		/** Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
		UserSettings?: UserSettings | null;
	}


	/** Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
	export interface UserSettings {

		/**
		 * Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.
		 * Required
		 */
		Telephony: TelephonySettings;
	}


	/** Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
	export interface TelephonySettings {
		InboundCalling: boolean;
		OutboundCalling: boolean;
		SMS: boolean;
	}

	export interface GetVoiceConnectorResponse {

		/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector | null;
	}

	export interface GetVoiceConnectorGroupResponse {

		/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup | null;
	}

	export interface GetVoiceConnectorLoggingConfigurationResponse {

		/** The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration?: LoggingConfiguration | null;
	}


	/** The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
	export interface LoggingConfiguration {
		EnableSIPLogs?: boolean | null;
	}

	export interface GetVoiceConnectorOriginationResponse {

		/** Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination?: Origination | null;
	}


	/** Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
	export interface Origination {
		Routes?: Array<OriginationRoute> | null;
		Disabled?: boolean | null;
	}


	/** Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector. */
	export interface OriginationRoute {
		Host?: string | null;
		Port?: number | null;
		Protocol?: OriginationRouteProtocol | null;
		Priority?: number | null;
		Weight?: number | null;
	}

	export enum OriginationRouteProtocol { TCP = 0, UDP = 1 }

	export interface GetVoiceConnectorProxyResponse {

		/** The proxy configuration for an Amazon Chime Voice Connector. */
		Proxy?: Proxy | null;
	}


	/** The proxy configuration for an Amazon Chime Voice Connector. */
	export interface Proxy {
		DefaultSessionExpiryMinutes?: number | null;
		Disabled?: boolean | null;
		FallBackPhoneNumber?: string | null;
		PhoneNumberCountries?: Array<string> | null;
	}

	export interface GetVoiceConnectorStreamingConfigurationResponse {

		/** The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration?: StreamingConfiguration | null;
	}


	/** The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfiguration {
		DataRetentionInHours: number;
		Disabled?: boolean | null;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget> | null;
	}


	/** The targeted recipient for a streaming configuration notification. */
	export interface StreamingNotificationTarget {
		NotificationTarget: StreamingNotificationTargetNotificationTarget;
	}

	export enum StreamingNotificationTargetNotificationTarget { EventBridge = 0, SNS = 1, SQS = 2 }

	export interface GetVoiceConnectorTerminationResponse {

		/** Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination?: Termination | null;
	}


	/** Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
	export interface Termination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string | null;
		CallingRegions?: Array<string> | null;
		CidrAllowedList?: Array<string> | null;
		Disabled?: boolean | null;
	}

	export interface GetVoiceConnectorTerminationHealthResponse {

		/** The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
		TerminationHealth?: TerminationHealth | null;
	}


	/** The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealth {
		Timestamp?: Date | null;
		Source?: string | null;
	}

	export interface InviteUsersResponse {
		Invites?: Array<Invite> | null;
	}


	/** Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account. */
	export interface Invite {
		InviteId?: string | null;
		Status?: UserUserInvitationStatus | null;
		EmailAddress?: string | null;
		EmailStatus?: InviteEmailStatus | null;
	}

	export enum InviteEmailStatus { NotSent = 0, Sent = 1, Failed = 2 }

	export interface ListAccountsResponse {
		Accounts?: Array<Account> | null;
		NextToken?: string | null;
	}

	export interface ListAttendeeTagsResponse {
		Tags?: Array<Tag> | null;
	}

	export interface ListAttendeesResponse {
		Attendees?: Array<Attendee> | null;
		NextToken?: string | null;
	}

	export interface ListBotsResponse {
		Bots?: Array<Bot> | null;
		NextToken?: string | null;
	}

	export interface ListMeetingTagsResponse {
		Tags?: Array<Tag> | null;
	}

	export interface ListMeetingsResponse {
		Meetings?: Array<Meeting> | null;
		NextToken?: string | null;
	}

	export interface ListPhoneNumberOrdersResponse {
		PhoneNumberOrders?: Array<PhoneNumberOrder> | null;
		NextToken?: string | null;
	}

	export interface ListPhoneNumbersResponse {
		PhoneNumbers?: Array<PhoneNumber> | null;
		NextToken?: string | null;
	}

	export interface ListProxySessionsResponse {
		ProxySessions?: Array<ProxySession> | null;
		NextToken?: string | null;
	}

	export interface ListRoomMembershipsResponse {
		RoomMemberships?: Array<RoomMembership> | null;
		NextToken?: string | null;
	}

	export interface ListRoomsResponse {
		Rooms?: Array<Room> | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
	}

	export interface ListUsersResponse {
		Users?: Array<User> | null;
		NextToken?: string | null;
	}

	export interface ListVoiceConnectorGroupsResponse {
		VoiceConnectorGroups?: Array<VoiceConnectorGroup> | null;
		NextToken?: string | null;
	}

	export interface ListVoiceConnectorTerminationCredentialsResponse {
		Usernames?: Array<string> | null;
	}

	export interface ListVoiceConnectorsResponse {
		VoiceConnectors?: Array<VoiceConnector> | null;
		NextToken?: string | null;
	}

	export interface LogoutUserResponse {
	}

	export interface PutEventsConfigurationResponse {

		/** The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
		EventsConfiguration?: EventsConfiguration | null;
	}

	export interface PutRetentionSettingsResponse {

		/** The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages. */
		RetentionSettings?: RetentionSettings | null;
		InitiateDeletionTimestamp?: Date | null;
	}

	export interface PutVoiceConnectorLoggingConfigurationResponse {

		/** The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
		LoggingConfiguration?: LoggingConfiguration | null;
	}

	export interface PutVoiceConnectorOriginationResponse {

		/** Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. */
		Origination?: Origination | null;
	}

	export interface PutVoiceConnectorProxyResponse {

		/** The proxy configuration for an Amazon Chime Voice Connector. */
		Proxy?: Proxy | null;
	}

	export interface PutVoiceConnectorStreamingConfigurationResponse {

		/** The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
		StreamingConfiguration?: StreamingConfiguration | null;
	}

	export interface PutVoiceConnectorTerminationResponse {

		/** Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
		Termination?: Termination | null;
	}


	/** The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector. */
	export interface Credential {
		Username?: string | null;
		Password?: string | null;
	}

	export interface RedactConversationMessageResponse {
	}

	export interface RedactRoomMessageResponse {
	}

	export interface RegenerateSecurityTokenResponse {

		/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot | null;
	}

	export interface ResetPersonalPINResponse {

		/** The user on the Amazon Chime account. */
		User?: User | null;
	}

	export interface RestorePhoneNumberResponse {

		/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber | null;
	}

	export interface SearchAvailablePhoneNumbersResponse {
		E164PhoneNumbers?: Array<string> | null;
	}

	export interface UpdateAccountResponse {

		/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
		Account?: Account | null;
	}

	export interface UpdateAccountSettingsResponse {
	}

	export interface UpdateBotResponse {

		/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
		Bot?: Bot | null;
	}

	export interface UpdatePhoneNumberResponse {

		/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
		PhoneNumber?: PhoneNumber | null;
	}

	export interface UpdateProxySessionResponse {

		/** The proxy session for an Amazon Chime Voice Connector. */
		ProxySession?: ProxySession | null;
	}

	export interface UpdateRoomResponse {

		/** The Amazon Chime chat room details. */
		Room?: Room | null;
	}

	export interface UpdateRoomMembershipResponse {

		/** The room membership details. */
		RoomMembership?: RoomMembership | null;
	}

	export interface UpdateUserResponse {

		/** The user on the Amazon Chime account. */
		User?: User | null;
	}

	export interface UpdateVoiceConnectorResponse {

		/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
		VoiceConnector?: VoiceConnector | null;
	}

	export interface UpdateVoiceConnectorGroupResponse {

		/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
		VoiceConnectorGroup?: VoiceConnectorGroup | null;
	}

	export enum AccountType { Team = 0, EnterpriseDirectory = 1, EnterpriseLWA = 2, EnterpriseOIDC = 3 }

	export interface AssociatePhoneNumberWithUserRequest {
		E164PhoneNumber: string;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
		E164PhoneNumbers?: Array<string> | null;
		ForceAssociate?: boolean | null;
	}

	export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
		E164PhoneNumbers?: Array<string> | null;
		ForceAssociate?: boolean | null;
	}

	export interface AssociateSigninDelegateGroupsWithAccountRequest {
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}

	export interface BatchCreateAttendeeRequest {
		Attendees: Array<CreateAttendeeRequestItem>;
	}

	export interface BatchCreateRoomMembershipRequest {
		MembershipItemList: Array<MembershipItem>;
	}

	export interface BatchDeletePhoneNumberRequest {
		PhoneNumberIds: Array<string>;
	}

	export interface BatchSuspendUserRequest {
		UserIdList: Array<string>;
	}

	export interface BatchUnsuspendUserRequest {
		UserIdList: Array<string>;
	}

	export interface BatchUpdatePhoneNumberRequest {
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}

	export interface BatchUpdateUserRequest {
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}

	export enum BotType { ChatBot = 0 }

	export enum CallingNameStatus { Unassigned = 0, UpdateInProgress = 1, UpdateSucceeded = 2, UpdateFailed = 3 }

	export interface CreateAccountRequest {
		Name: string;
	}

	export interface CreateAttendeeRequest {
		ExternalUserId: string;
		Tags?: Array<Tag> | null;
	}

	export interface CreateBotRequest {
		DisplayName: string;
		Domain?: string | null;
	}


	/** The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
	export interface MeetingNotificationConfiguration {
		SnsTopicArn?: string | null;
		SqsQueueArn?: string | null;
	}

	export interface CreateMeetingRequest {
		ClientRequestToken: string;
		ExternalMeetingId?: string | null;
		MeetingHostId?: string | null;
		MediaRegion?: string | null;
		Tags?: Array<Tag> | null;

		/** The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
		NotificationsConfiguration?: MeetingNotificationConfiguration | null;
	}

	export enum PhoneNumberProductType { BusinessCalling = 0, VoiceConnector = 1 }

	export interface CreatePhoneNumberOrderRequest {
		ProductType: UpdatePhoneNumberRequestItemProductType;
		E164PhoneNumbers: Array<string>;
	}

	export enum NumberSelectionBehavior { PreferSticky = 0, AvoidSticky = 1 }

	export enum GeoMatchLevel { Country = 0, AreaCode = 1 }

	export interface CreateProxySessionRequest {
		ParticipantPhoneNumbers: Array<string>;
		Name?: string | null;
		ExpiryMinutes?: number | null;
		Capabilities: Array<Capability>;
		NumberSelectionBehavior?: ProxySessionNumberSelectionBehavior | null;
		GeoMatchLevel?: ProxySessionGeoMatchLevel | null;

		/** The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: GeoMatchParams | null;
	}

	export enum RoomMembershipRole { Administrator = 0, Member = 1 }

	export interface CreateRoomMembershipRequest {
		MemberId: string;
		Role?: MembershipItemRole | null;
	}

	export interface CreateRoomRequest {
		Name: string;
		ClientRequestToken?: string | null;
	}

	export enum UserType { PrivateUser = 0, SharedDevice = 1 }

	export interface CreateUserRequest {
		Username?: string | null;
		Email?: string | null;
		UserType?: UpdateUserRequestItemUserType | null;
	}

	export interface CreateVoiceConnectorGroupRequest {
		Name: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem> | null;
	}

	export interface CreateVoiceConnectorRequest {
		Name: string;
		AwsRegion?: CreateVoiceConnectorRequestAwsRegion | null;
		RequireEncryption: boolean;
	}

	export enum CreateVoiceConnectorRequestAwsRegion { us_east_1 = 0, us_west_2 = 1 }

	export interface DeleteAccountRequest {
	}

	export interface DeleteAttendeeRequest {
	}

	export interface DeleteEventsConfigurationRequest {
	}

	export interface DeleteMeetingRequest {
	}

	export interface DeletePhoneNumberRequest {
	}

	export interface DeleteProxySessionRequest {
	}

	export interface DeleteRoomMembershipRequest {
	}

	export interface DeleteRoomRequest {
	}

	export interface DeleteVoiceConnectorGroupRequest {
	}

	export interface DeleteVoiceConnectorOriginationRequest {
	}

	export interface DeleteVoiceConnectorProxyRequest {
	}

	export interface DeleteVoiceConnectorRequest {
	}

	export interface DeleteVoiceConnectorStreamingConfigurationRequest {
	}

	export interface DeleteVoiceConnectorTerminationCredentialsRequest {
		Usernames?: Array<string> | null;
	}

	export interface DeleteVoiceConnectorTerminationRequest {
	}

	export interface DisassociatePhoneNumberFromUserRequest {
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
		E164PhoneNumbers?: Array<string> | null;
	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
		E164PhoneNumbers?: Array<string> | null;
	}

	export interface DisassociateSigninDelegateGroupsFromAccountRequest {
		GroupNames: Array<string>;
	}

	export enum EmailStatus { NotSent = 0, Sent = 1, Failed = 2 }

	export enum ErrorCode { BadRequest = 0, Conflict = 1, Forbidden = 2, NotFound = 3, PreconditionFailed = 4, ResourceLimitExceeded = 5, ServiceFailure = 6, AccessDenied = 7, ServiceUnavailable = 8, Throttled = 9, Unauthorized = 10, Unprocessable = 11, VoiceConnectorGroupAssociationsExist = 12, PhoneNumberAssociationsExist = 13 }

	export interface GetAccountRequest {
	}

	export interface GetAccountSettingsRequest {
	}

	export interface GetAttendeeRequest {
	}

	export interface GetBotRequest {
	}

	export interface GetEventsConfigurationRequest {
	}

	export interface GetMeetingRequest {
	}

	export interface GetPhoneNumberOrderRequest {
	}

	export interface GetPhoneNumberRequest {
	}

	export interface GetProxySessionRequest {
	}

	export interface GetRetentionSettingsRequest {
	}

	export interface GetRoomRequest {
	}

	export interface GetUserRequest {
	}

	export interface GetUserSettingsRequest {
	}

	export interface GetVoiceConnectorGroupRequest {
	}

	export interface GetVoiceConnectorLoggingConfigurationRequest {
	}

	export interface GetVoiceConnectorOriginationRequest {
	}

	export interface GetVoiceConnectorProxyRequest {
	}

	export interface GetVoiceConnectorRequest {
	}

	export interface GetVoiceConnectorStreamingConfigurationRequest {
	}

	export interface GetVoiceConnectorTerminationHealthRequest {
	}

	export interface GetVoiceConnectorTerminationRequest {
	}

	export enum InviteStatus { Pending = 0, Accepted = 1, Failed = 2 }

	export interface InviteUsersRequest {
		UserEmailList: Array<string>;
		UserType?: UpdateUserRequestItemUserType | null;
	}

	export interface ListAccountsRequest {
	}

	export interface ListAttendeeTagsRequest {
	}

	export interface ListAttendeesRequest {
	}

	export interface ListBotsRequest {
	}

	export interface ListMeetingTagsRequest {
	}

	export interface ListMeetingsRequest {
	}

	export interface ListPhoneNumberOrdersRequest {
	}

	export interface ListPhoneNumbersRequest {
	}

	export interface ListProxySessionsRequest {
	}

	export interface ListRoomMembershipsRequest {
	}

	export interface ListRoomsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListUsersRequest {
	}

	export interface ListVoiceConnectorGroupsRequest {
	}

	export interface ListVoiceConnectorTerminationCredentialsRequest {
	}

	export interface ListVoiceConnectorsRequest {
	}

	export interface LogoutUserRequest {
	}

	export enum MemberType { User = 0, Bot = 1, Webhook = 2 }

	export enum NotificationTarget { EventBridge = 0, SNS = 1, SQS = 2 }

	export interface PutEventsConfigurationRequest {
		OutboundEventsHTTPSEndpoint?: string | null;
		LambdaFunctionArn?: string | null;
	}

	export interface PutRetentionSettingsRequest {

		/**
		 * The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.
		 * Required
		 */
		RetentionSettings: RetentionSettings;
	}

	export interface PutVoiceConnectorLoggingConfigurationRequest {

		/**
		 * The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Required
		 */
		LoggingConfiguration: LoggingConfiguration;
	}

	export interface PutVoiceConnectorOriginationRequest {

		/**
		 * Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.
		 * Required
		 */
		Origination: Origination;
	}

	export interface PutVoiceConnectorProxyRequest {
		DefaultSessionExpiryMinutes: number;
		PhoneNumberPoolCountries: Array<string>;
		FallBackPhoneNumber?: string | null;
		Disabled?: boolean | null;
	}

	export interface PutVoiceConnectorStreamingConfigurationRequest {

		/**
		 * The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
		 * Required
		 */
		StreamingConfiguration: StreamingConfiguration;
	}

	export interface PutVoiceConnectorTerminationCredentialsRequest {
		Credentials?: Array<Credential> | null;
	}

	export interface PutVoiceConnectorTerminationRequest {

		/**
		 * Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.
		 * Required
		 */
		Termination: Termination;
	}

	export interface RedactConversationMessageRequest {
	}

	export interface RedactRoomMessageRequest {
	}

	export interface RegenerateSecurityTokenRequest {
	}

	export enum RegistrationStatus { Unregistered = 0, Registered = 1, Suspended = 2 }

	export interface ResetPersonalPINRequest {
	}

	export interface RestorePhoneNumberRequest {
	}

	export interface SearchAvailablePhoneNumbersRequest {
	}

	export interface TagAttendeeRequest {
		Tags: Array<Tag>;
	}

	export interface TagMeetingRequest {
		Tags: Array<Tag>;
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagAttendeeRequest {
		TagKeys: Array<string>;
	}

	export interface UntagMeetingRequest {
		TagKeys: Array<string>;
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateAccountRequest {
		Name?: string | null;
	}

	export interface UpdateAccountSettingsRequest {

		/**
		 * Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Required
		 */
		AccountSettings: AccountSettings;
	}

	export interface UpdateBotRequest {
		Disabled?: boolean | null;
	}

	export interface UpdateGlobalSettingsRequest {

		/**
		 * The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.
		 * Required
		 */
		BusinessCalling: BusinessCallingSettings;

		/**
		 * The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
		 * Required
		 */
		VoiceConnector: VoiceConnectorSettings;
	}

	export interface UpdatePhoneNumberRequest {
		ProductType?: UpdatePhoneNumberRequestItemProductType | null;
		CallingName?: string | null;
	}

	export interface UpdatePhoneNumberSettingsRequest {
		CallingName: string;
	}

	export interface UpdateProxySessionRequest {
		Capabilities: Array<Capability>;
		ExpiryMinutes?: number | null;
	}

	export interface UpdateRoomMembershipRequest {
		Role?: MembershipItemRole | null;
	}

	export interface UpdateRoomRequest {
		Name?: string | null;
	}

	export interface UpdateUserRequest {
		LicenseType?: UpdateUserRequestItemLicenseType | null;
		UserType?: UpdateUserRequestItemUserType | null;

		/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata | null;
	}

	export interface UpdateUserSettingsRequest {

		/**
		 * Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
		 * Required
		 */
		UserSettings: UserSettings;
	}

	export interface UpdateVoiceConnectorGroupRequest {
		Name: string;
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}

	export interface UpdateVoiceConnectorRequest {
		Name: string;
		RequireEncryption: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a phone number with the specified Amazon Chime user.
		 * Post accounts/{accountId}/users/{userId}#operation=associate-phone-number
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {AssociatePhoneNumberWithUserResponse} Success
		 */
		AssociatePhoneNumberWithUser(accountId: string, userId: string, operation: AssociatePhoneNumberWithUserOperation, requestBody: AssociatePhoneNumberWithUserPostBody): Observable<AssociatePhoneNumberWithUserResponse> {
			return this.http.post<AssociatePhoneNumberWithUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=associate-phone-number&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime Voice Connector.
		 * Post voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnector(voiceConnectorId: string, operation: AssociatePhoneNumbersWithVoiceConnectorOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorResponse> {
			return this.http.post<AssociatePhoneNumbersWithVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=associate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime Voice Connector group.
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorGroupResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnectorGroup(voiceConnectorGroupId: string, operation: AssociatePhoneNumbersWithVoiceConnectorGroupOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorGroupPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorGroupResponse> {
			return this.http.post<AssociatePhoneNumbersWithVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=associate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified sign-in delegate groups with the specified Amazon Chime account.
		 * Post accounts/{accountId}#operation=associate-signin-delegate-groups
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {AssociateSigninDelegateGroupsWithAccountResponse} Success
		 */
		AssociateSigninDelegateGroupsWithAccount(accountId: string, operation: AssociateSigninDelegateGroupsWithAccountOperation, requestBody: AssociateSigninDelegateGroupsWithAccountPostBody): Observable<AssociateSigninDelegateGroupsWithAccountResponse> {
			return this.http.post<AssociateSigninDelegateGroupsWithAccountResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '#operation=associate-signin-delegate-groups&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates up to 100 new attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings/{meetingId}/attendees#operation=batch-create
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		BatchCreateAttendee(meetingId: string, operation: BatchCreateAttendeeOperation, requestBody: BatchCreateAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be either users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.
		 * Post accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {void} 
		 */
		BatchCreateRoomMembership(accountId: string, roomId: string, operation: BatchCreateRoomMembershipOperation, requestBody: BatchCreateRoomMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.</p> <p>Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
		 * Post phone-numbers#operation=batch-delete
		 * @return {BatchDeletePhoneNumberResponse} Success
		 */
		BatchDeletePhoneNumber(operation: BatchDeletePhoneNumberOperation, requestBody: BatchDeletePhoneNumberPostBody): Observable<BatchDeletePhoneNumberResponse> {
			return this.http.post<BatchDeletePhoneNumberResponse>(this.baseUri + 'phone-numbers#operation=batch-delete?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action. </p> <p>To sign out users without suspending them, use the <a>LogoutUser</a> action.</p>
		 * Post accounts/{accountId}/users#operation=suspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchSuspendUserResponse} Success
		 */
		BatchSuspendUser(accountId: string, operation: BatchSuspendUserOperation, requestBody: BatchSuspendUserPostBody): Observable<BatchSuspendUserResponse> {
			return this.http.post<BatchSuspendUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=suspend&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored.</p>
		 * Post accounts/{accountId}/users#operation=unsuspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchUnsuspendUserResponse} Success
		 */
		BatchUnsuspendUser(accountId: string, operation: BatchUnsuspendUserOperation, requestBody: BatchUnsuspendUserPostBody): Observable<BatchUnsuspendUserResponse> {
			return this.http.post<BatchUnsuspendUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=unsuspend&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update either the product type or the calling name.</p> <p>For product types, choose from Amazon Chime Business Calling and Amazon Chime Voice Connector. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post phone-numbers#operation=batch-update
		 * @return {BatchUpdatePhoneNumberResponse} Success
		 */
		BatchUpdatePhoneNumber(operation: BatchUpdatePhoneNumberOperation, requestBody: BatchUpdatePhoneNumberPostBody): Observable<BatchUpdatePhoneNumberResponse> {
			return this.http.post<BatchUpdatePhoneNumberResponse>(this.baseUri + 'phone-numbers#operation=batch-update?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.
		 * Post accounts/{accountId}/users
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchUpdateUserResponse} Success
		 */
		BatchUpdateUser(accountId: string, requestBody: BatchUpdateUserPostBody): Observable<BatchUpdateUserResponse> {
			return this.http.post<BatchUpdateUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.
		 * Get accounts/{accountId}/users
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} user_email Optional. The user email address used to filter results. Maximum 1.
		 * @param {UpdateUserRequestItemUserType} user_type The user type.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(accountId: string, user_email: string | null | undefined, user_type: UpdateUserRequestItemUserType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users&user_email=' + (user_email == null ? '' : encodeURIComponent(user_email)) + '&user_type=' + user_type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Post accounts
		 * @return {void} 
		 */
		CreateAccount(requestBody: CreateAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.
		 * Get accounts
		 * @param {string} name Amazon Chime account name prefix with which to filter results.
		 * @param {string} user_email User email address with which to filter results.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(name: string | null | undefined, user_email: string | null | undefined, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'accounts?name=' + (name == null ? '' : encodeURIComponent(name)) + '&user_email=' + (user_email == null ? '' : encodeURIComponent(user_email)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings/{meetingId}/attendees
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		CreateAttendee(meetingId: string, requestBody: CreateAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{meetingId}/attendees
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttendeesResponse} Success
		 */
		ListAttendees(meetingId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAttendeesResponse> {
			return this.http.get<ListAttendeesResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a bot for an Amazon Chime Enterprise account.
		 * Post accounts/{accountId}/bots
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateBot(accountId: string, requestBody: CreateBotPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.
		 * Get accounts/{accountId}/bots
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {number} max_results The maximum number of results to return in a single call. The default is 10.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBotsResponse} Success
		 */
		ListBots(accountId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBotsResponse> {
			return this.http.get<ListBotsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Post meetings
		 * @return {void} 
		 */
		CreateMeeting(requestBody: CreateMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMeetingsResponse} Success
		 */
		ListMeetings(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMeetingsResponse> {
			return this.http.get<ListMeetingsResponse>(this.baseUri + 'meetings?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use the Amazon Chime Voice Connector product type.
		 * Post phone-number-orders
		 * @return {void} 
		 */
		CreatePhoneNumberOrder(requestBody: CreatePhoneNumberOrderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'phone-number-orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the phone number orders for the administrator's Amazon Chime account.
		 * Get phone-number-orders
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumberOrdersResponse} Success
		 */
		ListPhoneNumberOrders(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumberOrdersResponse> {
			return this.http.get<ListPhoneNumberOrdersResponse>(this.baseUri + 'phone-number-orders?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.
		 * Post voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {void} 
		 */
		CreateProxySession(voiceConnectorId: string, requestBody: CreateProxySessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the proxy sessions for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {ProxySessionStatus} status The proxy session status.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProxySessionsResponse} Success
		 */
		ListProxySessions(voiceConnectorId: string, status: ProxySessionStatus | null | undefined, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProxySessionsResponse> {
			return this.http.get<ListProxySessionsResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions&status=' + status + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a chat room for the specified Amazon Chime Enterprise account.
		 * Post accounts/{accountId}/rooms
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateRoom(accountId: string, requestBody: CreateRoomPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.
		 * Get accounts/{accountId}/rooms
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} member_id The member ID (user ID or bot ID).
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoomsResponse} Success
		 */
		ListRooms(accountId: string, member_id: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoomsResponse> {
			return this.http.get<ListRoomsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms&member_id=' + (member_id == null ? '' : encodeURIComponent(member_id)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.
		 * Post accounts/{accountId}/rooms/{roomId}/memberships
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {void} 
		 */
		CreateRoomMembership(accountId: string, roomId: string, requestBody: CreateRoomMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.
		 * Get accounts/{accountId}/rooms/{roomId}/memberships
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoomMembershipsResponse} Success
		 */
		ListRoomMemberships(accountId: string, roomId: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoomMembershipsResponse> {
			return this.http.get<ListRoomMembershipsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a user under the specified Amazon Chime account.
		 * Post accounts/{accountId}/users#operation=create
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		CreateUser(accountId: string, operation: CreateUserOperation, requestBody: CreateUserPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p>Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.</p>
		 * Post voice-connectors
		 * @return {void} 
		 */
		CreateVoiceConnector(requestBody: CreateVoiceConnectorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Amazon Chime Voice Connectors for the administrator's AWS account.
		 * Get voice-connectors
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorsResponse} Success
		 */
		ListVoiceConnectors(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceConnectorsResponse> {
			return this.http.get<ListVoiceConnectorsResponse>(this.baseUri + 'voice-connectors?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>
		 * Post voice-connector-groups
		 * @return {void} 
		 */
		CreateVoiceConnectorGroup(requestBody: CreateVoiceConnectorGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connector-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.
		 * Get voice-connector-groups
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorGroupsResponse} Success
		 */
		ListVoiceConnectorGroups(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceConnectorGroupsResponse> {
			return this.http.get<ListVoiceConnectorGroupsResponse>(this.baseUri + 'voice-connector-groups?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting a <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to do so.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore a deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>
		 * Delete accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		DeleteAccount(accountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.
		 * Get accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetAccountResponse} Success
		 */
		GetAccount(accountId: string): Observable<GetAccountResponse> {
			return this.http.get<GetAccountResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), {});
		}

		/**
		 * Updates account details for the specified Amazon Chime account. Currently, only account name updates are supported for this action.
		 * Post accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {UpdateAccountResponse} Success
		 */
		UpdateAccount(accountId: string, requestBody: UpdateAccountPostBody): Observable<UpdateAccountResponse> {
			return this.http.post<UpdateAccountResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		DeleteAttendee(meetingId: string, attendeeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {GetAttendeeResponse} Success
		 */
		GetAttendee(meetingId: string, attendeeId: string): Observable<GetAttendeeResponse> {
			return this.http.get<GetAttendeeResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), {});
		}

		/**
		 * Deletes the events configuration that allows a bot to receive outgoing events.
		 * Delete accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {void} 
		 */
		DeleteEventsConfiguration(accountId: string, botId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.
		 * Get accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {GetEventsConfigurationResponse} Success
		 */
		GetEventsConfiguration(accountId: string, botId: string): Observable<GetEventsConfigurationResponse> {
			return this.http.get<GetEventsConfigurationResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', {});
		}

		/**
		 * Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.
		 * Put accounts/{accountId}/bots/{botId}/events-configuration
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {void} 
		 */
		PutEventsConfiguration(accountId: string, botId: string, requestBody: PutEventsConfigurationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/events-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified Amazon Chime SDK meeting. When a meeting is deleted, its attendees are also deleted and clients can no longer join it. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Delete meetings/{meetingId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		DeleteMeeting(meetingId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime Developer Guide</i>.
		 * Get meetings/{meetingId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {GetMeetingResponse} Success
		 */
		GetMeeting(meetingId: string): Observable<GetMeetingResponse> {
			return this.http.get<GetMeetingResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)), {});
		}

		/**
		 * <p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
		 * Delete phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {void} 
		 */
		DeletePhoneNumber(phoneNumberId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.
		 * Get phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {GetPhoneNumberResponse} Success
		 */
		GetPhoneNumber(phoneNumberId: string): Observable<GetPhoneNumberResponse> {
			return this.http.get<GetPhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), {});
		}

		/**
		 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you must use the Amazon Chime Voice Connector product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {UpdatePhoneNumberResponse} Success
		 */
		UpdatePhoneNumber(phoneNumberId: string, requestBody: UpdatePhoneNumberPostBody): Observable<UpdatePhoneNumberResponse> {
			return this.http.post<UpdatePhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified proxy session from the specified Amazon Chime Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {void} 
		 */
		DeleteProxySession(voiceConnectorId: string, proxySessionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified proxy session details for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {GetProxySessionResponse} Success
		 */
		GetProxySession(voiceConnectorId: string, proxySessionId: string): Observable<GetProxySessionResponse> {
			return this.http.get<GetProxySessionResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), {});
		}

		/**
		 * Updates the specified proxy session details, such as voice or SMS capabilities.
		 * Post voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {void} 
		 */
		UpdateProxySession(voiceConnectorId: string, proxySessionId: string, requestBody: UpdateProxySessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a chat room in an Amazon Chime Enterprise account.
		 * Delete accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The chat room ID.
		 * @return {void} 
		 */
		DeleteRoom(accountId: string, roomId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.
		 * Get accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {GetRoomResponse} Success
		 */
		GetRoom(accountId: string, roomId: string): Observable<GetRoomResponse> {
			return this.http.get<GetRoomResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), {});
		}

		/**
		 * Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.
		 * Post accounts/{accountId}/rooms/{roomId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {UpdateRoomResponse} Success
		 */
		UpdateRoom(accountId: string, roomId: string, requestBody: UpdateRoomPostBody): Observable<UpdateRoomResponse> {
			return this.http.post<UpdateRoomResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a member from a chat room in an Amazon Chime Enterprise account.
		 * Delete accounts/{accountId}/rooms/{roomId}/memberships/{memberId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} memberId The member ID (user ID or bot ID).
		 * @return {void} 
		 */
		DeleteRoomMembership(accountId: string, roomId: string, memberId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships/' + (memberId == null ? '' : encodeURIComponent(memberId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.
		 * Post accounts/{accountId}/rooms/{roomId}/memberships/{memberId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} memberId The member ID.
		 * @return {UpdateRoomMembershipResponse} Success
		 */
		UpdateRoomMembership(accountId: string, roomId: string, memberId: string, requestBody: UpdateRoomMembershipPostBody): Observable<UpdateRoomMembershipResponse> {
			return this.http.post<UpdateRoomMembershipResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships/' + (memberId == null ? '' : encodeURIComponent(memberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.
		 * Delete voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnector(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps, name, outbound host, and encryption requirements.
		 * Get voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorResponse} Success
		 */
		GetVoiceConnector(voiceConnectorId: string): Observable<GetVoiceConnectorResponse> {
			return this.http.get<GetVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), {});
		}

		/**
		 * Updates details for the specified Amazon Chime Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {UpdateVoiceConnectorResponse} Success
		 */
		UpdateVoiceConnector(voiceConnectorId: string, requestBody: UpdateVoiceConnectorPutBody): Observable<UpdateVoiceConnectorResponse> {
			return this.http.put<UpdateVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.
		 * Delete voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps, name, and associated <code>VoiceConnectorItems</code>.
		 * Get voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {GetVoiceConnectorGroupResponse} Success
		 */
		GetVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<GetVoiceConnectorGroupResponse> {
			return this.http.get<GetVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), {});
		}

		/**
		 * Updates details for the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.
		 * Put voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		UpdateVoiceConnectorGroup(voiceConnectorGroupId: string, requestBody: UpdateVoiceConnectorGroupPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the origination settings for the specified Amazon Chime Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorOrigination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves origination setting details for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorOriginationResponse} Success
		 */
		GetVoiceConnectorOrigination(voiceConnectorId: string): Observable<GetVoiceConnectorOriginationResponse> {
			return this.http.get<GetVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', {});
		}

		/**
		 * Adds origination settings for the specified Amazon Chime Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorOriginationResponse} Success
		 */
		PutVoiceConnectorOrigination(voiceConnectorId: string, requestBody: PutVoiceConnectorOriginationPutBody): Observable<PutVoiceConnectorOriginationResponse> {
			return this.http.put<PutVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the proxy configuration from the specified Amazon Chime Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorProxy(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the proxy configuration details for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {GetVoiceConnectorProxyResponse} Success
		 */
		GetVoiceConnectorProxy(voiceConnectorId: string): Observable<GetVoiceConnectorProxyResponse> {
			return this.http.get<GetVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', {});
		}

		/**
		 * Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {PutVoiceConnectorProxyResponse} Success
		 */
		PutVoiceConnectorProxy(voiceConnectorId: string, requestBody: PutVoiceConnectorProxyPutBody): Observable<PutVoiceConnectorProxyResponse> {
			return this.http.put<PutVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the streaming configuration for the specified Amazon Chime Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
		 * Get voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorStreamingConfigurationResponse} Success
		 */
		GetVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorStreamingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', {});
		}

		/**
		 * Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Amazon Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.
		 * Put voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorStreamingConfigurationResponse} Success
		 */
		PutVoiceConnectorStreamingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorStreamingConfigurationPutBody): Observable<PutVoiceConnectorStreamingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the termination settings for the specified Amazon Chime Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTermination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves termination setting details for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationResponse} Success
		 */
		GetVoiceConnectorTermination(voiceConnectorId: string): Observable<GetVoiceConnectorTerminationResponse> {
			return this.http.get<GetVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', {});
		}

		/**
		 * Adds termination settings for the specified Amazon Chime Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorTerminationResponse} Success
		 */
		PutVoiceConnectorTermination(voiceConnectorId: string, requestBody: PutVoiceConnectorTerminationPutBody): Observable<PutVoiceConnectorTerminationResponse> {
			return this.http.put<PutVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified SIP credentials used by your equipment to authenticate during call termination.
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: DeleteVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates the primary provisioned phone number from the specified Amazon Chime user.
		 * Post accounts/{accountId}/users/{userId}#operation=disassociate-phone-number
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {DisassociatePhoneNumberFromUserResponse} Success
		 */
		DisassociatePhoneNumberFromUser(accountId: string, userId: string, operation: DisassociatePhoneNumberFromUserOperation): Observable<DisassociatePhoneNumberFromUserResponse> {
			return this.http.post<DisassociatePhoneNumberFromUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=disassociate-phone-number&operation=' + operation, null, {});
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.
		 * Post voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnector(voiceConnectorId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorResponse> {
			return this.http.post<DisassociatePhoneNumbersFromVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=disassociate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorGroupResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnectorGroup(voiceConnectorGroupId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorGroupOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse> {
			return this.http.post<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=disassociate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.
		 * Post accounts/{accountId}#operation=disassociate-signin-delegate-groups
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {DisassociateSigninDelegateGroupsFromAccountResponse} Success
		 */
		DisassociateSigninDelegateGroupsFromAccount(accountId: string, operation: DisassociateSigninDelegateGroupsFromAccountOperation, requestBody: DisassociateSigninDelegateGroupsFromAccountPostBody): Observable<DisassociateSigninDelegateGroupsFromAccountResponse> {
			return this.http.post<DisassociateSigninDelegateGroupsFromAccountResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '#operation=disassociate-signin-delegate-groups&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial out settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Get accounts/{accountId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetAccountSettingsResponse} Success
		 */
		GetAccountSettings(accountId: string): Observable<GetAccountSettingsResponse> {
			return this.http.get<GetAccountSettingsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/settings', {});
		}

		/**
		 * Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Put accounts/{accountId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		UpdateAccountSettings(accountId: string, requestBody: UpdateAccountSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.
		 * Get accounts/{accountId}/bots/{botId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {GetBotResponse} Success
		 */
		GetBot(accountId: string, botId: string): Observable<GetBotResponse> {
			return this.http.get<GetBotResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)), {});
		}

		/**
		 * Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.
		 * Post accounts/{accountId}/bots/{botId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {UpdateBotResponse} Success
		 */
		UpdateBot(accountId: string, botId: string, requestBody: UpdateBotPostBody): Observable<UpdateBotResponse> {
			return this.http.post<UpdateBotResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
		 * Get settings
		 * @return {GetGlobalSettingsResponse} Success
		 */
		GetGlobalSettings(): Observable<GetGlobalSettingsResponse> {
			return this.http.get<GetGlobalSettingsResponse>(this.baseUri + 'settings', {});
		}

		/**
		 * Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.
		 * Put settings
		 * @return {void} 
		 */
		UpdateGlobalSettings(requestBody: UpdateGlobalSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified phone number order, such as order creation timestamp, phone numbers in E.164 format, product type, and order status.
		 * Get phone-number-orders/{phoneNumberOrderId}
		 * @param {string} phoneNumberOrderId The ID for the phone number order.
		 * @return {GetPhoneNumberOrderResponse} Success
		 */
		GetPhoneNumberOrder(phoneNumberOrderId: string): Observable<GetPhoneNumberOrderResponse> {
			return this.http.get<GetPhoneNumberOrderResponse>(this.baseUri + 'phone-number-orders/' + (phoneNumberOrderId == null ? '' : encodeURIComponent(phoneNumberOrderId)), {});
		}

		/**
		 * Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.
		 * Get settings/phone-number
		 * @return {GetPhoneNumberSettingsResponse} Success
		 */
		GetPhoneNumberSettings(): Observable<GetPhoneNumberSettingsResponse> {
			return this.http.get<GetPhoneNumberSettingsResponse>(this.baseUri + 'settings/phone-number', {});
		}

		/**
		 * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
		 * Put settings/phone-number
		 * @return {void} 
		 */
		UpdatePhoneNumberSettings(requestBody: UpdatePhoneNumberSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'settings/phone-number', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Get accounts/{accountId}/retention-settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {GetRetentionSettingsResponse} Success
		 */
		GetRetentionSettings(accountId: string): Observable<GetRetentionSettingsResponse> {
			return this.http.get<GetRetentionSettingsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/retention-settings', {});
		}

		/**
		 * <p>Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>
		 * Put accounts/{accountId}/retention-settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		PutRetentionSettings(accountId: string, requestBody: PutRetentionSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/retention-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN.</p> <p>To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address.</p>
		 * Get accounts/{accountId}/users/{userId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {GetUserResponse} Success
		 */
		GetUser(accountId: string, userId: string): Observable<GetUserResponse> {
			return this.http.get<GetUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.
		 * Post accounts/{accountId}/users/{userId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(accountId: string, userId: string, requestBody: UpdateUserPostBody): Observable<UpdateUserResponse> {
			return this.http.post<UpdateUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves settings for the specified user ID, such as any associated phone number settings.
		 * Get accounts/{accountId}/users/{userId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {GetUserSettingsResponse} Success
		 */
		GetUserSettings(accountId: string, userId: string): Observable<GetUserSettingsResponse> {
			return this.http.get<GetUserSettingsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings', {});
		}

		/**
		 * Updates the settings for the specified user, such as phone number settings.
		 * Put accounts/{accountId}/users/{userId}/settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {void} 
		 */
		UpdateUserSettings(accountId: string, userId: string, requestBody: UpdateUserSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Get voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorLoggingConfigurationResponse} Success
		 */
		GetVoiceConnectorLoggingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorLoggingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', {});
		}

		/**
		 * Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Put voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorLoggingConfigurationResponse} Success
		 */
		PutVoiceConnectorLoggingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorLoggingConfigurationPutBody): Observable<PutVoiceConnectorLoggingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination/health
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationHealthResponse} Success
		 */
		GetVoiceConnectorTerminationHealth(voiceConnectorId: string): Observable<GetVoiceConnectorTerminationHealthResponse> {
			return this.http.get<GetVoiceConnectorTerminationHealthResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/health', {});
		}

		/**
		 * Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action.
		 * Post accounts/{accountId}/users#operation=add
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		InviteUsers(accountId: string, operation: InviteUsersOperation, requestBody: InviteUsersPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=add&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK attendee resource.
		 * Get meetings/{meetingId}/attendees/{attendeeId}/tags
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {ListAttendeeTagsResponse} Success
		 */
		ListAttendeeTags(meetingId: string, attendeeId: string): Observable<ListAttendeeTagsResponse> {
			return this.http.get<ListAttendeeTagsResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags', {});
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK meeting resource.
		 * Get meetings/{meetingId}/tags
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {ListMeetingTagsResponse} Success
		 */
		ListMeetingTags(meetingId: string): Observable<ListMeetingTagsResponse> {
			return this.http.get<ListMeetingTagsResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags', {});
		}

		/**
		 * Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.
		 * Get phone-numbers
		 * @param {PhoneNumberStatus} status The phone number status.
		 * @param {UpdatePhoneNumberRequestItemProductType} product_type The phone number product type.
		 * @param {PhoneNumberAssociationName} filter_name The filter to use to limit the number of results.
		 * @param {string} filter_value The value to use for the filter.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(status: PhoneNumberStatus | null | undefined, product_type: UpdatePhoneNumberRequestItemProductType | null | undefined, filter_name: PhoneNumberAssociationName | null | undefined, filter_value: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumbersResponse> {
			return this.http.get<ListPhoneNumbersResponse>(this.baseUri + 'phone-numbers?status=' + status + '&product_type=' + product_type + '&filter_name=' + filter_name + '&filter_value=' + (filter_value == null ? '' : encodeURIComponent(filter_value)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags applied to an Amazon Chime SDK meeting resource.
		 * Get tags#arn
		 * @param {string} arn The resource ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Lists the SIP credentials for the specified Amazon Chime Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination/credentials
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {ListVoiceConnectorTerminationCredentialsResponse} Success
		 */
		ListVoiceConnectorTerminationCredentials(voiceConnectorId: string): Observable<ListVoiceConnectorTerminationCredentialsResponse> {
			return this.http.get<ListVoiceConnectorTerminationCredentialsResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials', {});
		}

		/**
		 * Logs out the specified user from all of the devices they are currently logged into.
		 * Post accounts/{accountId}/users/{userId}#operation=logout
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {void} 
		 */
		LogoutUser(accountId: string, userId: string, operation: LogoutUserOperation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=logout&operation=' + operation, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds termination SIP credentials for the specified Amazon Chime Voice Connector.
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=put
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		PutVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: PutVoiceConnectorTerminationCredentialsOperation, requestBody: PutVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=put&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime conversation.
		 * Post accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} conversationId The conversation ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactConversationMessageResponse} Success
		 */
		RedactConversationMessage(accountId: string, conversationId: string, messageId: string, operation: RedactConversationMessageOperation): Observable<RedactConversationMessageResponse> {
			return this.http.post<RedactConversationMessageResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations/' + (conversationId == null ? '' : encodeURIComponent(conversationId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + operation, null, {});
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime chat room.
		 * Post accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactRoomMessageResponse} Success
		 */
		RedactRoomMessage(accountId: string, roomId: string, messageId: string, operation: RedactConversationMessageOperation): Observable<RedactRoomMessageResponse> {
			return this.http.post<RedactRoomMessageResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + operation, null, {});
		}

		/**
		 * Regenerates the security token for a bot.
		 * Post accounts/{accountId}/bots/{botId}#operation=regenerate-security-token
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} botId The bot ID.
		 * @return {RegenerateSecurityTokenResponse} Success
		 */
		RegenerateSecurityToken(accountId: string, botId: string, operation: RegenerateSecurityTokenOperation): Observable<RegenerateSecurityTokenResponse> {
			return this.http.post<RegenerateSecurityTokenResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '#operation=regenerate-security-token&operation=' + operation, null, {});
		}

		/**
		 * Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.
		 * Post accounts/{accountId}/users/{userId}#operation=reset-personal-pin
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} userId The user ID.
		 * @return {ResetPersonalPINResponse} Success
		 */
		ResetPersonalPIN(accountId: string, userId: string, operation: ResetPersonalPINOperation): Observable<ResetPersonalPINResponse> {
			return this.http.post<ResetPersonalPINResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '#operation=reset-personal-pin&operation=' + operation, null, {});
		}

		/**
		 * Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.
		 * Post phone-numbers/{phoneNumberId}#operation=restore
		 * @param {string} phoneNumberId The phone number.
		 * @return {RestorePhoneNumberResponse} Success
		 */
		RestorePhoneNumber(phoneNumberId: string, operation: RestorePhoneNumberOperation): Observable<RestorePhoneNumberResponse> {
			return this.http.post<RestorePhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)) + '#operation=restore&operation=' + operation, null, {});
		}

		/**
		 * Searches phone numbers that can be ordered.
		 * Get search#type=phone-numbers
		 * @param {string} area_code The area code used to filter results.
		 * @param {string} city The city used to filter results.
		 * @param {string} country The country used to filter results.
		 * @param {string} state The state used to filter results.
		 * @param {string} toll_free_prefix The toll-free prefix that you use to filter results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @return {SearchAvailablePhoneNumbersResponse} Success
		 */
		SearchAvailablePhoneNumbers(area_code: string | null | undefined, city: string | null | undefined, country: string | null | undefined, state: string | null | undefined, toll_free_prefix: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, type: SearchAvailablePhoneNumbersType): Observable<SearchAvailablePhoneNumbersResponse> {
			return this.http.get<SearchAvailablePhoneNumbersResponse>(this.baseUri + 'search#type=phone-numbers?area_code=' + (area_code == null ? '' : encodeURIComponent(area_code)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&toll_free_prefix=' + (toll_free_prefix == null ? '' : encodeURIComponent(toll_free_prefix)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&type=' + type, {});
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK attendee.
		 * Post meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		TagAttendee(meetingId: string, attendeeId: string, operation: InviteUsersOperation, requestBody: TagAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=add&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK meeting.
		 * Post meetings/{meetingId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		TagMeeting(meetingId: string, operation: InviteUsersOperation, requestBody: TagMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=add&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies the specified tags to the specified Amazon Chime SDK meeting resource.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK attendee.
		 * Post meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		UntagAttendee(meetingId: string, attendeeId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: UntagAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK meeting.
		 * Post meetings/{meetingId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		UntagMeeting(meetingId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: UntagMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Untags the specified tags from the specified Amazon Chime SDK meeting resource.
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociatePhoneNumberWithUserOperation { associate_phone_number = 0 }

	export interface AssociatePhoneNumberWithUserPostBody {

		/**
		 * The phone number, in E.164 format.
		 * Required
		 * Pattern: ^\+?[1-9]\d{1,14}$
		 */
		E164PhoneNumber: string;
	}

	export enum AssociatePhoneNumbersWithVoiceConnectorOperation { associate_phone_numbers = 0 }

	export interface AssociatePhoneNumbersWithVoiceConnectorPostBody {

		/** List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<string> | null;

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}

	export enum AssociatePhoneNumbersWithVoiceConnectorGroupOperation { associate_phone_numbers = 0 }

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupPostBody {

		/** List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<string> | null;

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}

	export enum AssociateSigninDelegateGroupsWithAccountOperation { associate_signin_delegate_groups = 0 }

	export interface AssociateSigninDelegateGroupsWithAccountPostBody {

		/**
		 * The sign-in delegate groups.
		 * Required
		 */
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}

	export enum BatchCreateAttendeeOperation { batch_create = 0 }

	export interface BatchCreateAttendeePostBody {

		/**
		 * The request containing the attendees to create.
		 * Required
		 */
		Attendees: Array<CreateAttendeeRequestItem>;
	}

	export enum BatchCreateRoomMembershipOperation { batch_create = 0 }

	export interface BatchCreateRoomMembershipPostBody {

		/**
		 * The list of membership items.
		 * Required
		 * Maximum items: 50
		 */
		MembershipItemList: Array<MembershipItem>;
	}

	export enum BatchDeletePhoneNumberOperation { batch_delete = 0 }

	export interface BatchDeletePhoneNumberPostBody {

		/**
		 * List of phone number IDs.
		 * Required
		 * Minimum items: 1
		 */
		PhoneNumberIds: Array<string>;
	}

	export enum BatchSuspendUserOperation { suspend = 0 }

	export interface BatchSuspendUserPostBody {

		/**
		 * The request containing the user IDs to suspend.
		 * Required
		 * Maximum items: 50
		 */
		UserIdList: Array<string>;
	}

	export enum BatchUnsuspendUserOperation { unsuspend = 0 }

	export interface BatchUnsuspendUserPostBody {

		/**
		 * The request containing the user IDs to unsuspend.
		 * Required
		 * Maximum items: 50
		 */
		UserIdList: Array<string>;
	}

	export enum BatchUpdatePhoneNumberOperation { batch_update = 0 }

	export interface BatchUpdatePhoneNumberPostBody {

		/**
		 * The request containing the phone number IDs and product types or calling names to update.
		 * Required
		 */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}

	export interface BatchUpdateUserPostBody {

		/**
		 * The request containing the user IDs and details to update.
		 * Required
		 * Maximum items: 20
		 */
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}

	export interface CreateAccountPostBody {

		/**
		 * The name of the Amazon Chime account.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name: string;
	}

	export interface CreateAttendeePostBody {

		/**
		 * The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalUserId: string;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Tags?: Array<Tag> | null;
	}

	export interface CreateBotPostBody {

		/**
		 * The bot display name.
		 * Required
		 */
		DisplayName: string;

		/**
		 * The domain of the Amazon Chime Enterprise account.
		 * Pattern: .*\S.*
		 */
		Domain?: string | null;
	}

	export interface CreateMeetingPostBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 * Pattern: [-_a-zA-Z0-9]*
		 */
		ClientRequestToken: string;

		/**
		 * The external meeting ID.
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId?: string | null;

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId?: string | null;

		/** The Region in which to create the meeting. Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>. */
		MediaRegion?: string | null;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag> | null;

		/** The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. */
		NotificationsConfiguration?: CreateMeetingPostBodyNotificationsConfiguration | null;
	}

	export interface CreateMeetingPostBodyNotificationsConfiguration {
		SnsTopicArn?: string | null;
		SqsQueueArn?: string | null;
	}

	export interface CreatePhoneNumberOrderPostBody {

		/**
		 * The phone number product type.
		 * Required
		 */
		ProductType: UpdatePhoneNumberRequestItemProductType;

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}

	export interface CreateProxySessionPostBody {

		/**
		 * The participant phone numbers.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		ParticipantPhoneNumbers: Array<string>;

		/**
		 * The name of the proxy session.
		 * Pattern: ^$|^[a-zA-Z0-9 ]{0,30}$
		 */
		Name?: string | null;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number | null;

		/**
		 * The proxy session capabilities.
		 * Required
		 */
		Capabilities: Array<Capability>;

		/** The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. */
		NumberSelectionBehavior?: ProxySessionNumberSelectionBehavior | null;

		/** The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel?: ProxySessionGeoMatchLevel | null;

		/** The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: CreateProxySessionPostBodyGeoMatchParams | null;
	}

	export interface CreateProxySessionPostBodyGeoMatchParams {
		Country?: string | null;
		AreaCode?: string | null;
	}

	export interface CreateRoomPostBody {

		/**
		 * The room name.
		 * Required
		 */
		Name: string;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 2
		 * Pattern: [-_a-zA-Z0-9]*
		 */
		ClientRequestToken?: string | null;
	}

	export interface CreateRoomMembershipPostBody {

		/**
		 * The Amazon Chime member ID (user ID or bot ID).
		 * Required
		 * Pattern: .*\S.*
		 */
		MemberId: string;

		/** The role of the member. */
		Role?: MembershipItemRole | null;
	}

	export enum CreateUserOperation { create = 0 }

	export interface CreateUserPostBody {

		/** The user name. */
		Username?: string | null;

		/**
		 * The user's email address.
		 * Pattern: .+@.+\..+
		 */
		Email?: string | null;

		/** The user type. */
		UserType?: UpdateUserRequestItemUserType | null;
	}

	export interface CreateVoiceConnectorPostBody {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>. */
		AwsRegion?: CreateVoiceConnectorPostBodyAwsRegion | null;

		/**
		 * When enabled, requires encryption for the Amazon Chime Voice Connector.
		 * Required
		 */
		RequireEncryption: boolean;
	}

	export enum CreateVoiceConnectorPostBodyAwsRegion { us_east_1 = 0, us_west_2 = 1 }

	export interface CreateVoiceConnectorGroupPostBody {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The Amazon Chime Voice Connectors to route inbound calls to. */
		VoiceConnectorItems?: Array<VoiceConnectorItem> | null;
	}

	export interface UpdateAccountPostBody {

		/**
		 * The new name for the specified Amazon Chime account.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name?: string | null;
	}

	export interface PutEventsConfigurationPutBody {

		/** HTTPS endpoint that allows the bot to receive outgoing events. */
		OutboundEventsHTTPSEndpoint?: string | null;

		/** Lambda function ARN that allows the bot to receive outgoing events. */
		LambdaFunctionArn?: string | null;
	}

	export interface UpdatePhoneNumberPostBody {

		/** The product type. */
		ProductType?: UpdatePhoneNumberRequestItemProductType | null;

		/**
		 * The outbound calling name associated with the phone number.
		 * Pattern: ^$|^[a-zA-Z0-9 ]{2,15}$
		 */
		CallingName?: string | null;
	}

	export interface UpdateProxySessionPostBody {

		/**
		 * The proxy session capabilities.
		 * Required
		 */
		Capabilities: Array<Capability>;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number | null;
	}

	export interface UpdateRoomPostBody {

		/** The room name. */
		Name?: string | null;
	}

	export interface UpdateRoomMembershipPostBody {

		/** The role of the member. */
		Role?: MembershipItemRole | null;
	}

	export interface UpdateVoiceConnectorPutBody {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * When enabled, requires encryption for the Amazon Chime Voice Connector.
		 * Required
		 */
		RequireEncryption: boolean;
	}

	export interface UpdateVoiceConnectorGroupPutBody {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The <code>VoiceConnectorItems</code> to associate with the group.
		 * Required
		 */
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}

	export interface PutVoiceConnectorOriginationPutBody {

		/**
		 * Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.
		 * Required
		 */
		Origination: PutVoiceConnectorOriginationPutBodyOrigination;
	}

	export interface PutVoiceConnectorOriginationPutBodyOrigination {
		Routes?: Array<OriginationRoute> | null;
		Disabled?: boolean | null;
	}

	export interface PutVoiceConnectorProxyPutBody {

		/**
		 * The default number of minutes allowed for proxy sessions.
		 * Required
		 */
		DefaultSessionExpiryMinutes: number;

		/**
		 * The countries for proxy phone numbers to be selected from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		PhoneNumberPoolCountries: Array<string>;

		/**
		 * The phone number to route calls to after a proxy session expires.
		 * Pattern: ^\+?[1-9]\d{1,14}$
		 */
		FallBackPhoneNumber?: string | null;

		/** When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector. */
		Disabled?: boolean | null;
	}

	export interface PutVoiceConnectorStreamingConfigurationPutBody {

		/**
		 * The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
		 * Required
		 */
		StreamingConfiguration: PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration;
	}

	export interface PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration {
		DataRetentionInHours?: number | null;
		Disabled?: boolean | null;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget> | null;
	}

	export interface PutVoiceConnectorTerminationPutBody {

		/**
		 * Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.
		 * Required
		 */
		Termination: PutVoiceConnectorTerminationPutBodyTermination;
	}

	export interface PutVoiceConnectorTerminationPutBodyTermination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string | null;
		CallingRegions?: Array<string> | null;
		CidrAllowedList?: Array<string> | null;
		Disabled?: boolean | null;
	}

	export enum DeleteVoiceConnectorTerminationCredentialsOperation { delete = 0 }

	export interface DeleteVoiceConnectorTerminationCredentialsPostBody {

		/** The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format. */
		Usernames?: Array<string> | null;
	}

	export enum DisassociatePhoneNumberFromUserOperation { disassociate_phone_number = 0 }

	export enum DisassociatePhoneNumbersFromVoiceConnectorOperation { disassociate_phone_numbers = 0 }

	export interface DisassociatePhoneNumbersFromVoiceConnectorPostBody {

		/** List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<string> | null;
	}

	export enum DisassociatePhoneNumbersFromVoiceConnectorGroupOperation { disassociate_phone_numbers = 0 }

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody {

		/** List of phone numbers, in E.164 format. */
		E164PhoneNumbers?: Array<string> | null;
	}

	export enum DisassociateSigninDelegateGroupsFromAccountOperation { disassociate_signin_delegate_groups = 0 }

	export interface DisassociateSigninDelegateGroupsFromAccountPostBody {

		/**
		 * The sign-in delegate group names.
		 * Required
		 * Minimum items: 1
		 */
		GroupNames: Array<string>;
	}

	export interface UpdateAccountSettingsPutBody {

		/**
		 * Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Required
		 */
		AccountSettings: UpdateAccountSettingsPutBodyAccountSettings;
	}

	export interface UpdateAccountSettingsPutBodyAccountSettings {
		DisableRemoteControl?: boolean | null;
		EnableDialOut?: boolean | null;
	}

	export interface UpdateBotPostBody {

		/** When true, stops the specified bot from running in your account. */
		Disabled?: boolean | null;
	}

	export interface UpdateGlobalSettingsPutBody {

		/**
		 * The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.
		 * Required
		 */
		BusinessCalling: UpdateGlobalSettingsPutBodyBusinessCalling;

		/**
		 * The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
		 * Required
		 */
		VoiceConnector: UpdateGlobalSettingsPutBodyVoiceConnector;
	}

	export interface UpdateGlobalSettingsPutBodyBusinessCalling {
		CdrBucket?: string | null;
	}

	export interface UpdateGlobalSettingsPutBodyVoiceConnector {
		CdrBucket?: string | null;
	}

	export interface UpdatePhoneNumberSettingsPutBody {

		/**
		 * The default outbound calling name for the account.
		 * Required
		 * Pattern: ^$|^[a-zA-Z0-9 ]{2,15}$
		 */
		CallingName: string;
	}

	export interface PutRetentionSettingsPutBody {

		/**
		 * The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.
		 * Required
		 */
		RetentionSettings: PutRetentionSettingsPutBodyRetentionSettings;
	}

	export interface PutRetentionSettingsPutBodyRetentionSettings {

		/** The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account. */
		RoomRetentionSettings?: RoomRetentionSettings | null;

		/** The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account. */
		ConversationRetentionSettings?: ConversationRetentionSettings | null;
	}

	export interface UpdateUserPostBody {

		/** The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to. */
		LicenseType?: UpdateUserRequestItemLicenseType | null;

		/** The user type. */
		UserType?: UpdateUserRequestItemUserType | null;

		/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: UpdateUserPostBodyAlexaForBusinessMetadata | null;
	}

	export interface UpdateUserPostBodyAlexaForBusinessMetadata {
		IsAlexaForBusinessEnabled?: boolean | null;
		AlexaForBusinessRoomArn?: string | null;
	}

	export interface UpdateUserSettingsPutBody {

		/**
		 * Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
		 * Required
		 */
		UserSettings: UpdateUserSettingsPutBodyUserSettings;
	}

	export interface UpdateUserSettingsPutBodyUserSettings {

		/** Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
		Telephony?: TelephonySettings | null;
	}

	export interface PutVoiceConnectorLoggingConfigurationPutBody {

		/**
		 * The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Required
		 */
		LoggingConfiguration: PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration;
	}

	export interface PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration {
		EnableSIPLogs?: boolean | null;
	}

	export enum InviteUsersOperation { add = 0 }

	export interface InviteUsersPostBody {

		/**
		 * The user email addresses to which to send the email invitation.
		 * Required
		 * Maximum items: 50
		 */
		UserEmailList: Array<string>;

		/** The user type. */
		UserType?: UpdateUserRequestItemUserType | null;
	}

	export enum LogoutUserOperation { logout = 0 }

	export enum PutVoiceConnectorTerminationCredentialsOperation { put = 0 }

	export interface PutVoiceConnectorTerminationCredentialsPostBody {

		/** The termination SIP credentials. */
		Credentials?: Array<Credential> | null;
	}

	export enum RedactConversationMessageOperation { redact = 0 }

	export enum RegenerateSecurityTokenOperation { regenerate_security_token = 0 }

	export enum ResetPersonalPINOperation { reset_personal_pin = 0 }

	export enum RestorePhoneNumberOperation { restore = 0 }

	export enum SearchAvailablePhoneNumbersType { phone_numbers = 0 }

	export interface TagAttendeePostBody {

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Tags: Array<Tag>;
	}

	export interface TagMeetingPostBody {

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export enum TagResourceOperation { tag_resource = 0 }

	export interface TagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: ^arn[\/\:\-\_\.a-zA-Z0-9]+$
		 */
		ResourceARN: string;

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export interface UntagAttendeePostBody {

		/**
		 * The tag keys.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		TagKeys: Array<string>;
	}

	export interface UntagMeetingPostBody {

		/**
		 * The tag keys.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}

	export enum UntagResourceOperation { untag_resource = 0 }

	export interface UntagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: ^arn[\/\:\-\_\.a-zA-Z0-9]+$
		 */
		ResourceARN: string;

		/**
		 * The tag keys.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}

}

