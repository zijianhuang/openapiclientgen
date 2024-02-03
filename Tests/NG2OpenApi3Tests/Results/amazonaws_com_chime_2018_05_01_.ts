import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociatePhoneNumberWithUserResponse {
	}
	export interface AssociatePhoneNumberWithUserResponseFormProperties {
	}
	export function CreateAssociatePhoneNumberWithUserResponseFormGroup() {
		return new FormGroup<AssociatePhoneNumberWithUserResponseFormProperties>({
		});

	}

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ThrottledClientException {
	}
	export interface ThrottledClientExceptionFormProperties {
	}
	export function CreateThrottledClientExceptionFormGroup() {
		return new FormGroup<ThrottledClientExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorResponseFormProperties {
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorResponseFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorResponseFormProperties>({
		});

	}


	/** If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberError {
		PhoneNumberId?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberErrorFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberErrorFormGroup() {
		return new FormGroup<PhoneNumberErrorFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { BadRequest = 'BadRequest', Conflict = 'Conflict', Forbidden = 'Forbidden', NotFound = 'NotFound', PreconditionFailed = 'PreconditionFailed', ResourceLimitExceeded = 'ResourceLimitExceeded', ServiceFailure = 'ServiceFailure', AccessDenied = 'AccessDenied', ServiceUnavailable = 'ServiceUnavailable', Throttled = 'Throttled', Throttling = 'Throttling', Unauthorized = 'Unauthorized', Unprocessable = 'Unprocessable', VoiceConnectorGroupAssociationsExist = 'VoiceConnectorGroupAssociationsExist', PhoneNumberAssociationsExist = 'PhoneNumberAssociationsExist' }

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface AssociateSigninDelegateGroupsWithAccountResponse {
	}
	export interface AssociateSigninDelegateGroupsWithAccountResponseFormProperties {
	}
	export function CreateAssociateSigninDelegateGroupsWithAccountResponseFormGroup() {
		return new FormGroup<AssociateSigninDelegateGroupsWithAccountResponseFormProperties>({
		});

	}


	/** An Active Directory (AD) group whose members are granted permission to act as delegates. */
	export interface SigninDelegateGroup {
		GroupName?: string;
	}

	/** An Active Directory (AD) group whose members are granted permission to act as delegates. */
	export interface SigninDelegateGroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateSigninDelegateGroupFormGroup() {
		return new FormGroup<SigninDelegateGroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateAttendeeResponse {
		Attendees?: Array<Attendee>;
		Errors?: Array<CreateAttendeeError>;
	}
	export interface BatchCreateAttendeeResponseFormProperties {
	}
	export function CreateBatchCreateAttendeeResponseFormGroup() {
		return new FormGroup<BatchCreateAttendeeResponseFormProperties>({
		});

	}


	/** <p> An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code> . The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface Attendee {
		ExternalUserId?: string;
		AttendeeId?: string;
		JoinToken?: string;
	}

	/** <p> An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code> and <code>JoinToken</code> . The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting. </p> <p>We recommend securely transferring each <code>JoinToken</code> from your server application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p> */
	export interface AttendeeFormProperties {
		ExternalUserId: FormControl<string | null | undefined>,
		AttendeeId: FormControl<string | null | undefined>,
		JoinToken: FormControl<string | null | undefined>,
	}
	export function CreateAttendeeFormGroup() {
		return new FormGroup<AttendeeFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined),
			AttendeeId: new FormControl<string | null | undefined>(undefined),
			JoinToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeError {
		ExternalUserId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages. */
	export interface CreateAttendeeErrorFormProperties {
		ExternalUserId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeErrorFormGroup() {
		return new FormGroup<CreateAttendeeErrorFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItem {

		/** Required */
		ExternalUserId: string;
		Tags?: Array<Tag>;
	}

	/** The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action. */
	export interface CreateAttendeeRequestItemFormProperties {

		/** Required */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeRequestItemFormGroup() {
		return new FormGroup<CreateAttendeeRequestItemFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a tag applied to a resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Describes a tag applied to a resource. */
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

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface BatchCreateChannelMembershipResponse {
		BatchChannelMemberships?: BatchChannelMemberships;
		Errors?: Array<BatchCreateChannelMembershipError>;
	}
	export interface BatchCreateChannelMembershipResponseFormProperties {
	}
	export function CreateBatchCreateChannelMembershipResponseFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipResponseFormProperties>({
		});

	}


	/** The membership information, including member ARNs, the channel ARN, and membership types. */
	export interface BatchChannelMemberships {
		InvitedBy?: Identity;
		Type?: ChannelMembershipType;
		Members?: Array<Identity>;
		ChannelArn?: string;
	}

	/** The membership information, including member ARNs, the channel ARN, and membership types. */
	export interface BatchChannelMembershipsFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchChannelMembershipsFormGroup() {
		return new FormGroup<BatchChannelMembershipsFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a user. */
	export interface Identity {
		Arn?: string;
		Name?: string;
	}

	/** The details of a user. */
	export interface IdentityFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelMembershipType { DEFAULT = 'DEFAULT', HIDDEN = 'HIDDEN' }


	/** A list of failed member ARNs, error codes, and error messages. */
	export interface BatchCreateChannelMembershipError {
		MemberArn?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** A list of failed member ARNs, error codes, and error messages. */
	export interface BatchCreateChannelMembershipErrorFormProperties {
		MemberArn: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipErrorFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipErrorFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateRoomMembershipResponse {
		Errors?: Array<MemberError>;
	}
	export interface BatchCreateRoomMembershipResponseFormProperties {
	}
	export function CreateBatchCreateRoomMembershipResponseFormGroup() {
		return new FormGroup<BatchCreateRoomMembershipResponseFormProperties>({
		});

	}


	/** The list of errors returned when a member action results in an error. */
	export interface MemberError {
		MemberId?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** The list of errors returned when a member action results in an error. */
	export interface MemberErrorFormProperties {
		MemberId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateMemberErrorFormGroup() {
		return new FormGroup<MemberErrorFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Membership details, such as member ID and member role. */
	export interface MembershipItem {
		MemberId?: string;
		Role?: RoomMembershipRole;
	}

	/** Membership details, such as member ID and member role. */
	export interface MembershipItemFormProperties {
		MemberId: FormControl<string | null | undefined>,
		Role: FormControl<RoomMembershipRole | null | undefined>,
	}
	export function CreateMembershipItemFormGroup() {
		return new FormGroup<MembershipItemFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
		});

	}

	export enum RoomMembershipRole { Administrator = 'Administrator', Member = 'Member' }

	export interface BatchDeletePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface BatchDeletePhoneNumberResponseFormProperties {
	}
	export function CreateBatchDeletePhoneNumberResponseFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberResponseFormProperties>({
		});

	}

	export interface BatchSuspendUserResponse {
		UserErrors?: Array<UserError>;
	}
	export interface BatchSuspendUserResponseFormProperties {
	}
	export function CreateBatchSuspendUserResponseFormGroup() {
		return new FormGroup<BatchSuspendUserResponseFormProperties>({
		});

	}


	/** The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages. */
	export interface UserError {
		UserId?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages. */
	export interface UserErrorFormProperties {
		UserId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUserErrorFormGroup() {
		return new FormGroup<UserErrorFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUnsuspendUserResponse {
		UserErrors?: Array<UserError>;
	}
	export interface BatchUnsuspendUserResponseFormProperties {
	}
	export function CreateBatchUnsuspendUserResponseFormGroup() {
		return new FormGroup<BatchUnsuspendUserResponseFormProperties>({
		});

	}

	export interface BatchUpdatePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface BatchUpdatePhoneNumberResponseFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberResponseFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberResponseFormProperties>({
		});

	}


	/** The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItem {

		/** Required */
		PhoneNumberId: string;
		ProductType?: PhoneNumberProductType;
		CallingName?: string;
	}

	/** The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItemFormProperties {

		/** Required */
		PhoneNumberId: FormControl<string | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestItemFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestItemFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberProductType { BusinessCalling = 'BusinessCalling', VoiceConnector = 'VoiceConnector', SipMediaApplicationDialIn = 'SipMediaApplicationDialIn' }

	export interface BatchUpdateUserResponse {
		UserErrors?: Array<UserError>;
	}
	export interface BatchUpdateUserResponseFormProperties {
	}
	export function CreateBatchUpdateUserResponseFormGroup() {
		return new FormGroup<BatchUpdateUserResponseFormProperties>({
		});

	}


	/** The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action. */
	export interface UpdateUserRequestItem {

		/** Required */
		UserId: string;
		LicenseType?: License;
		UserType?: UserType;
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
	}

	/** The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action. */
	export interface UpdateUserRequestItemFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,
		LicenseType: FormControl<License | null | undefined>,
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateUpdateUserRequestItemFormGroup() {
		return new FormGroup<UpdateUserRequestItemFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseType: new FormControl<License | null | undefined>(undefined),
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export enum License { Basic = 'Basic', Plus = 'Plus', Pro = 'Pro', ProTrial = 'ProTrial' }

	export enum UserType { PrivateUser = 'PrivateUser', SharedDevice = 'SharedDevice' }


	/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
	export interface AlexaForBusinessMetadata {
		IsAlexaForBusinessEnabled?: boolean | null;
		AlexaForBusinessRoomArn?: string;
	}

	/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
	export interface AlexaForBusinessMetadataFormProperties {
		IsAlexaForBusinessEnabled: FormControl<boolean | null | undefined>,
		AlexaForBusinessRoomArn: FormControl<string | null | undefined>,
	}
	export function CreateAlexaForBusinessMetadataFormGroup() {
		return new FormGroup<AlexaForBusinessMetadataFormProperties>({
			IsAlexaForBusinessEnabled: new FormControl<boolean | null | undefined>(undefined),
			AlexaForBusinessRoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccountResponse {
		Account?: Account;
	}
	export interface CreateAccountResponseFormProperties {
	}
	export function CreateCreateAccountResponseFormGroup() {
		return new FormGroup<CreateAccountResponseFormProperties>({
		});

	}


	/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
	export interface Account {

		/** Required */
		AwsAccountId: string;

		/** Required */
		AccountId: string;

		/** Required */
		Name: string;
		AccountType?: AccountType;
		CreatedTimestamp?: Date;
		DefaultLicense?: License;
		SupportedLicenses?: Array<License>;
		AccountStatus?: AccountStatus;
		SigninDelegateGroups?: Array<SigninDelegateGroup>;
	}

	/** The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts. */
	export interface AccountFormProperties {

		/** Required */
		AwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		AccountType: FormControl<AccountType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		DefaultLicense: FormControl<License | null | undefined>,
		AccountStatus: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<AccountType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			DefaultLicense: new FormControl<License | null | undefined>(undefined),
			AccountStatus: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export enum AccountType { Team = 'Team', EnterpriseDirectory = 'EnterpriseDirectory', EnterpriseLWA = 'EnterpriseLWA', EnterpriseOIDC = 'EnterpriseOIDC' }

	export enum AccountStatus { Suspended = 'Suspended', Active = 'Active' }

	export interface CreateAppInstanceResponse {
		AppInstanceArn?: string;
	}
	export interface CreateAppInstanceResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceResponseFormGroup() {
		return new FormGroup<CreateAppInstanceResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateAppInstanceAdminResponse {
		AppInstanceAdmin?: Identity;
		AppInstanceArn?: string;
	}
	export interface CreateAppInstanceAdminResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminResponseFormGroup() {
		return new FormGroup<CreateAppInstanceAdminResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppInstanceUserResponse {
		AppInstanceUserArn?: string;
	}
	export interface CreateAppInstanceUserResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserResponseFormGroup() {
		return new FormGroup<CreateAppInstanceUserResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAttendeeResponse {
		Attendee?: Attendee;
	}
	export interface CreateAttendeeResponseFormProperties {
	}
	export function CreateCreateAttendeeResponseFormGroup() {
		return new FormGroup<CreateAttendeeResponseFormProperties>({
		});

	}

	export interface CreateBotResponse {
		Bot?: Bot;
	}
	export interface CreateBotResponseFormProperties {
	}
	export function CreateCreateBotResponseFormGroup() {
		return new FormGroup<CreateBotResponseFormProperties>({
		});

	}


	/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
	export interface Bot {
		BotId?: string;
		UserId?: string;
		DisplayName?: string;
		BotType?: BotType;
		Disabled?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		BotEmail?: string;
		SecurityToken?: string;
	}

	/** A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime. */
	export interface BotFormProperties {
		BotId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		BotType: FormControl<BotType | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		BotEmail: FormControl<string | null | undefined>,
		SecurityToken: FormControl<string | null | undefined>,
	}
	export function CreateBotFormGroup() {
		return new FormGroup<BotFormProperties>({
			BotId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			BotType: new FormControl<BotType | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			BotEmail: new FormControl<string | null | undefined>(undefined),
			SecurityToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BotType { ChatBot = 'ChatBot' }

	export interface CreateChannelResponse {
		ChannelArn?: string;
	}
	export interface CreateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelBanResponse {
		ChannelArn?: string;
		Member?: Identity;
	}
	export interface CreateChannelBanResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanResponseFormGroup() {
		return new FormGroup<CreateChannelBanResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelMembershipResponse {
		ChannelArn?: string;
		Member?: Identity;
	}
	export interface CreateChannelMembershipResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelMembershipResponseFormGroup() {
		return new FormGroup<CreateChannelMembershipResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelModeratorResponse {
		ChannelArn?: string;
		ChannelModerator?: Identity;
	}
	export interface CreateChannelModeratorResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorResponseFormGroup() {
		return new FormGroup<CreateChannelModeratorResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaCapturePipelineResponse {
		MediaCapturePipeline?: MediaCapturePipeline;
	}
	export interface CreateMediaCapturePipelineResponseFormProperties {
	}
	export function CreateCreateMediaCapturePipelineResponseFormGroup() {
		return new FormGroup<CreateMediaCapturePipelineResponseFormProperties>({
		});

	}


	/** A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object. */
	export interface MediaCapturePipeline {
		MediaPipelineId?: string;
		SourceType?: MediaPipelineSourceType;
		SourceArn?: string;
		Status?: MediaPipelineStatus;
		SinkType?: MediaPipelineSinkType;
		SinkArn?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
	}

	/** A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object. */
	export interface MediaCapturePipelineFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		Status: FormControl<MediaPipelineStatus | null | undefined>,
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaCapturePipelineFormGroup() {
		return new FormGroup<MediaCapturePipelineFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MediaPipelineStatus | null | undefined>(undefined),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MediaPipelineSourceType { ChimeSdkMeeting = 'ChimeSdkMeeting' }

	export enum MediaPipelineStatus { Initializing = 'Initializing', InProgress = 'InProgress', Failed = 'Failed', Stopping = 'Stopping', Stopped = 'Stopped' }

	export enum MediaPipelineSinkType { S3Bucket = 'S3Bucket' }


	/** The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface ChimeSdkMeetingConfiguration {
		SourceConfiguration?: SourceConfiguration;
		ArtifactsConfiguration?: ArtifactsConfiguration;
	}

	/** The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface ChimeSdkMeetingConfigurationFormProperties {
	}
	export function CreateChimeSdkMeetingConfigurationFormGroup() {
		return new FormGroup<ChimeSdkMeetingConfigurationFormProperties>({
		});

	}


	/** Source configuration for a specified media capture pipeline. */
	export interface SourceConfiguration {
		SelectedVideoStreams?: SelectedVideoStreams;
	}

	/** Source configuration for a specified media capture pipeline. */
	export interface SourceConfigurationFormProperties {
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
		});

	}


	/** The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25. */
	export interface SelectedVideoStreams {
		AttendeeIds?: Array<string>;
		ExternalUserIds?: Array<string>;
	}

	/** The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25. */
	export interface SelectedVideoStreamsFormProperties {
	}
	export function CreateSelectedVideoStreamsFormGroup() {
		return new FormGroup<SelectedVideoStreamsFormProperties>({
		});

	}


	/** The configuration for the artifacts. */
	export interface ArtifactsConfiguration {

		/** Required */
		Audio: AudioArtifactsConfiguration;

		/** Required */
		Video: VideoArtifactsConfiguration;

		/** Required */
		Content: ContentArtifactsConfiguration;
	}

	/** The configuration for the artifacts. */
	export interface ArtifactsConfigurationFormProperties {
	}
	export function CreateArtifactsConfigurationFormGroup() {
		return new FormGroup<ArtifactsConfigurationFormProperties>({
		});

	}


	/** The audio artifact configuration object. */
	export interface AudioArtifactsConfiguration {

		/** Required */
		MuxType: AudioMuxType;
	}

	/** The audio artifact configuration object. */
	export interface AudioArtifactsConfigurationFormProperties {

		/** Required */
		MuxType: FormControl<AudioMuxType | null | undefined>,
	}
	export function CreateAudioArtifactsConfigurationFormGroup() {
		return new FormGroup<AudioArtifactsConfigurationFormProperties>({
			MuxType: new FormControl<AudioMuxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioMuxType { AudioOnly = 'AudioOnly', AudioWithActiveSpeakerVideo = 'AudioWithActiveSpeakerVideo' }


	/** The video artifact configuration object. */
	export interface VideoArtifactsConfiguration {

		/** Required */
		State: ArtifactsState;
		MuxType?: VideoMuxType;
	}

	/** The video artifact configuration object. */
	export interface VideoArtifactsConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
		MuxType: FormControl<VideoMuxType | null | undefined>,
	}
	export function CreateVideoArtifactsConfigurationFormGroup() {
		return new FormGroup<VideoArtifactsConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
			MuxType: new FormControl<VideoMuxType | null | undefined>(undefined),
		});

	}

	export enum ArtifactsState { Enabled = 'Enabled', Disabled = 'Disabled' }

	export enum VideoMuxType { VideoOnly = 'VideoOnly' }


	/** The content artifact object. */
	export interface ContentArtifactsConfiguration {

		/** Required */
		State: ArtifactsState;
		MuxType?: ContentMuxType;
	}

	/** The content artifact object. */
	export interface ContentArtifactsConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
		MuxType: FormControl<ContentMuxType | null | undefined>,
	}
	export function CreateContentArtifactsConfigurationFormGroup() {
		return new FormGroup<ContentArtifactsConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
			MuxType: new FormControl<ContentMuxType | null | undefined>(undefined),
		});

	}

	export enum ContentMuxType { ContentOnly = 'ContentOnly' }

	export interface CreateMeetingResponse {
		Meeting?: Meeting;
	}
	export interface CreateMeetingResponseFormProperties {
	}
	export function CreateCreateMeetingResponseFormGroup() {
		return new FormGroup<CreateMeetingResponseFormProperties>({
		});

	}


	/** A meeting created using the Amazon Chime SDK. */
	export interface Meeting {
		MeetingId?: string;
		ExternalMeetingId?: string;
		MediaPlacement?: MediaPlacement;
		MediaRegion?: string;
	}

	/** A meeting created using the Amazon Chime SDK. */
	export interface MeetingFormProperties {
		MeetingId: FormControl<string | null | undefined>,
		ExternalMeetingId: FormControl<string | null | undefined>,
		MediaRegion: FormControl<string | null | undefined>,
	}
	export function CreateMeetingFormGroup() {
		return new FormGroup<MeetingFormProperties>({
			MeetingId: new FormControl<string | null | undefined>(undefined),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting. */
	export interface MediaPlacement {
		AudioHostUrl?: string;
		AudioFallbackUrl?: string;
		ScreenDataUrl?: string;
		ScreenSharingUrl?: string;
		ScreenViewingUrl?: string;
		SignalingUrl?: string;
		TurnControlUrl?: string;
		EventIngestionUrl?: string;
	}

	/** A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting. */
	export interface MediaPlacementFormProperties {
		AudioHostUrl: FormControl<string | null | undefined>,
		AudioFallbackUrl: FormControl<string | null | undefined>,
		ScreenDataUrl: FormControl<string | null | undefined>,
		ScreenSharingUrl: FormControl<string | null | undefined>,
		ScreenViewingUrl: FormControl<string | null | undefined>,
		SignalingUrl: FormControl<string | null | undefined>,
		TurnControlUrl: FormControl<string | null | undefined>,
		EventIngestionUrl: FormControl<string | null | undefined>,
	}
	export function CreateMediaPlacementFormGroup() {
		return new FormGroup<MediaPlacementFormProperties>({
			AudioHostUrl: new FormControl<string | null | undefined>(undefined),
			AudioFallbackUrl: new FormControl<string | null | undefined>(undefined),
			ScreenDataUrl: new FormControl<string | null | undefined>(undefined),
			ScreenSharingUrl: new FormControl<string | null | undefined>(undefined),
			ScreenViewingUrl: new FormControl<string | null | undefined>(undefined),
			SignalingUrl: new FormControl<string | null | undefined>(undefined),
			TurnControlUrl: new FormControl<string | null | undefined>(undefined),
			EventIngestionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingDialOutResponse {
		TransactionId?: string;
	}
	export interface CreateMeetingDialOutResponseFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingDialOutResponseFormGroup() {
		return new FormGroup<CreateMeetingDialOutResponseFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingWithAttendeesResponse {
		Meeting?: Meeting;
		Attendees?: Array<Attendee>;
		Errors?: Array<CreateAttendeeError>;
	}
	export interface CreateMeetingWithAttendeesResponseFormProperties {
	}
	export function CreateCreateMeetingWithAttendeesResponseFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesResponseFormProperties>({
		});

	}

	export interface CreatePhoneNumberOrderResponse {
		PhoneNumberOrder?: PhoneNumberOrder;
	}
	export interface CreatePhoneNumberOrderResponseFormProperties {
	}
	export function CreateCreatePhoneNumberOrderResponseFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderResponseFormProperties>({
		});

	}


	/** The details of a phone number order created for Amazon Chime. */
	export interface PhoneNumberOrder {
		PhoneNumberOrderId?: string;
		ProductType?: PhoneNumberProductType;
		Status?: PhoneNumberOrderStatus;
		OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The details of a phone number order created for Amazon Chime. */
	export interface PhoneNumberOrderFormProperties {
		PhoneNumberOrderId: FormControl<string | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		Status: FormControl<PhoneNumberOrderStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberOrderFormGroup() {
		return new FormGroup<PhoneNumberOrderFormProperties>({
			PhoneNumberOrderId: new FormControl<string | null | undefined>(undefined),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			Status: new FormControl<PhoneNumberOrderStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberOrderStatus { Processing = 'Processing', Successful = 'Successful', Failed = 'Failed', Partial = 'Partial' }


	/** A phone number for which an order has been placed. */
	export interface OrderedPhoneNumber {
		E164PhoneNumber?: string;
		Status?: OrderedPhoneNumberStatus;
	}

	/** A phone number for which an order has been placed. */
	export interface OrderedPhoneNumberFormProperties {
		E164PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<OrderedPhoneNumberStatus | null | undefined>,
	}
	export function CreateOrderedPhoneNumberFormGroup() {
		return new FormGroup<OrderedPhoneNumberFormProperties>({
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrderedPhoneNumberStatus | null | undefined>(undefined),
		});

	}

	export enum OrderedPhoneNumberStatus { Processing = 'Processing', Acquired = 'Acquired', Failed = 'Failed' }

	export interface CreateProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface CreateProxySessionResponseFormProperties {
	}
	export function CreateCreateProxySessionResponseFormGroup() {
		return new FormGroup<CreateProxySessionResponseFormProperties>({
		});

	}


	/** The proxy session for an Amazon Chime Voice Connector. */
	export interface ProxySession {
		VoiceConnectorId?: string;
		ProxySessionId?: string;
		Name?: string;
		Status?: ProxySessionStatus;
		ExpiryMinutes?: number | null;
		Capabilities?: Array<Capability>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		EndedTimestamp?: Date;
		Participants?: Array<Participant>;
		NumberSelectionBehavior?: NumberSelectionBehavior;
		GeoMatchLevel?: GeoMatchLevel;
		GeoMatchParams?: GeoMatchParams;
	}

	/** The proxy session for an Amazon Chime Voice Connector. */
	export interface ProxySessionFormProperties {
		VoiceConnectorId: FormControl<string | null | undefined>,
		ProxySessionId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ProxySessionStatus | null | undefined>,
		ExpiryMinutes: FormControl<number | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		EndedTimestamp: FormControl<Date | null | undefined>,
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateProxySessionFormGroup() {
		return new FormGroup<ProxySessionFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined),
			ProxySessionId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProxySessionStatus | null | undefined>(undefined),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndedTimestamp: new FormControl<Date | null | undefined>(undefined),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export enum ProxySessionStatus { Open = 'Open', InProgress = 'InProgress', Closed = 'Closed' }

	export enum Capability { Voice = 'Voice', SMS = 'SMS' }


	/** The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session. */
	export interface Participant {
		PhoneNumber?: string;
		ProxyPhoneNumber?: string;
	}

	/** The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session. */
	export interface ParticipantFormProperties {
		PhoneNumber: FormControl<string | null | undefined>,
		ProxyPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateParticipantFormGroup() {
		return new FormGroup<ParticipantFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			ProxyPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NumberSelectionBehavior { PreferSticky = 'PreferSticky', AvoidSticky = 'AvoidSticky' }

	export enum GeoMatchLevel { Country = 'Country', AreaCode = 'AreaCode' }


	/** The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParams {

		/** Required */
		Country: string;

		/** Required */
		AreaCode: string;
	}

	/** The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParamsFormProperties {

		/** Required */
		Country: FormControl<string | null | undefined>,

		/** Required */
		AreaCode: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchParamsFormGroup() {
		return new FormGroup<GeoMatchParamsFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AreaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoomResponse {
		Room?: Room;
	}
	export interface CreateRoomResponseFormProperties {
	}
	export function CreateCreateRoomResponseFormGroup() {
		return new FormGroup<CreateRoomResponseFormProperties>({
		});

	}


	/** The Amazon Chime chat room details. */
	export interface Room {
		RoomId?: string;
		Name?: string;
		AccountId?: string;
		CreatedBy?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The Amazon Chime chat room details. */
	export interface RoomFormProperties {
		RoomId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateRoomFormGroup() {
		return new FormGroup<RoomFormProperties>({
			RoomId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateRoomMembershipResponse {
		RoomMembership?: RoomMembership;
	}
	export interface CreateRoomMembershipResponseFormProperties {
	}
	export function CreateCreateRoomMembershipResponseFormGroup() {
		return new FormGroup<CreateRoomMembershipResponseFormProperties>({
		});

	}


	/** The room membership details. */
	export interface RoomMembership {
		RoomId?: string;
		Member?: Member;
		Role?: RoomMembershipRole;
		InvitedBy?: string;
		UpdatedTimestamp?: Date;
	}

	/** The room membership details. */
	export interface RoomMembershipFormProperties {
		RoomId: FormControl<string | null | undefined>,
		Role: FormControl<RoomMembershipRole | null | undefined>,
		InvitedBy: FormControl<string | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateRoomMembershipFormGroup() {
		return new FormGroup<RoomMembershipFormProperties>({
			RoomId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
			InvitedBy: new FormControl<string | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The member details, such as email address, name, member ID, and member type. */
	export interface Member {
		MemberId?: string;
		MemberType?: MemberType;
		Email?: string;
		FullName?: string;
		AccountId?: string;
	}

	/** The member details, such as email address, name, member ID, and member type. */
	export interface MemberFormProperties {
		MemberId: FormControl<string | null | undefined>,
		MemberType: FormControl<MemberType | null | undefined>,
		Email: FormControl<string | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
			MemberType: new FormControl<MemberType | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MemberType { User = 'User', Bot = 'Bot', Webhook = 'Webhook' }

	export interface CreateSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface CreateSipMediaApplicationResponseFormProperties {
	}
	export function CreateCreateSipMediaApplicationResponseFormGroup() {
		return new FormGroup<CreateSipMediaApplicationResponseFormProperties>({
		});

	}


	/** The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications. */
	export interface SipMediaApplication {
		SipMediaApplicationId?: string;
		AwsRegion?: string;
		Name?: string;
		Endpoints?: Array<SipMediaApplicationEndpoint>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications. */
	export interface SipMediaApplicationFormProperties {
		SipMediaApplicationId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSipMediaApplicationFormGroup() {
		return new FormGroup<SipMediaApplicationFormProperties>({
			SipMediaApplicationId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The endpoint assigned to the SIP media application. */
	export interface SipMediaApplicationEndpoint {
		LambdaArn?: string;
	}

	/** The endpoint assigned to the SIP media application. */
	export interface SipMediaApplicationEndpointFormProperties {
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateSipMediaApplicationEndpointFormGroup() {
		return new FormGroup<SipMediaApplicationEndpointFormProperties>({
			LambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSipMediaApplicationCallResponse {
		SipMediaApplicationCall?: SipMediaApplicationCall;
	}
	export interface CreateSipMediaApplicationCallResponseFormProperties {
	}
	export function CreateCreateSipMediaApplicationCallResponseFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallResponseFormProperties>({
		});

	}


	/** A <code>Call</code> instance for a SIP media application. */
	export interface SipMediaApplicationCall {
		TransactionId?: string;
	}

	/** A <code>Call</code> instance for a SIP media application. */
	export interface SipMediaApplicationCallFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateSipMediaApplicationCallFormGroup() {
		return new FormGroup<SipMediaApplicationCallFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface CreateSipRuleResponseFormProperties {
	}
	export function CreateCreateSipRuleResponseFormGroup() {
		return new FormGroup<CreateSipRuleResponseFormProperties>({
		});

	}


	/** The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules. */
	export interface SipRule {
		SipRuleId?: string;
		Name?: string;
		Disabled?: boolean | null;
		TriggerType?: SipRuleTriggerType;
		TriggerValue?: string;
		TargetApplications?: Array<SipRuleTargetApplication>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules. */
	export interface SipRuleFormProperties {
		SipRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,
		TriggerValue: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSipRuleFormGroup() {
		return new FormGroup<SipRuleFormProperties>({
			SipRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined),
			TriggerValue: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SipRuleTriggerType { ToPhoneNumber = 'ToPhoneNumber', RequestUriHostname = 'RequestUriHostname' }


	/** Target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided. */
	export interface SipRuleTargetApplication {
		SipMediaApplicationId?: string;
		Priority?: number | null;
		AwsRegion?: string;
	}

	/** Target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided. */
	export interface SipRuleTargetApplicationFormProperties {
		SipMediaApplicationId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateSipRuleTargetApplicationFormGroup() {
		return new FormGroup<SipRuleTargetApplicationFormProperties>({
			SipMediaApplicationId: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserResponse {
		User?: User;
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}


	/** The user on the Amazon Chime account. */
	export interface User {

		/** Required */
		UserId: string;
		AccountId?: string;
		PrimaryEmail?: string;
		PrimaryProvisionedNumber?: string;
		DisplayName?: string;
		LicenseType?: License;
		UserType?: UserType;
		UserRegistrationStatus?: RegistrationStatus;
		UserInvitationStatus?: InviteStatus;
		RegisteredOn?: Date;
		InvitedOn?: Date;
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
		PersonalPIN?: string;
	}

	/** The user on the Amazon Chime account. */
	export interface UserFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		PrimaryEmail: FormControl<string | null | undefined>,
		PrimaryProvisionedNumber: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		LicenseType: FormControl<License | null | undefined>,
		UserType: FormControl<UserType | null | undefined>,
		UserRegistrationStatus: FormControl<RegistrationStatus | null | undefined>,
		UserInvitationStatus: FormControl<InviteStatus | null | undefined>,
		RegisteredOn: FormControl<Date | null | undefined>,
		InvitedOn: FormControl<Date | null | undefined>,
		PersonalPIN: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
			PrimaryEmail: new FormControl<string | null | undefined>(undefined),
			PrimaryProvisionedNumber: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			LicenseType: new FormControl<License | null | undefined>(undefined),
			UserType: new FormControl<UserType | null | undefined>(undefined),
			UserRegistrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined),
			UserInvitationStatus: new FormControl<InviteStatus | null | undefined>(undefined),
			RegisteredOn: new FormControl<Date | null | undefined>(undefined),
			InvitedOn: new FormControl<Date | null | undefined>(undefined),
			PersonalPIN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegistrationStatus { Unregistered = 'Unregistered', Registered = 'Registered', Suspended = 'Suspended' }

	export enum InviteStatus { Pending = 'Pending', Accepted = 'Accepted', Failed = 'Failed' }

	export interface CreateVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface CreateVoiceConnectorResponseFormProperties {
	}
	export function CreateCreateVoiceConnectorResponseFormGroup() {
		return new FormGroup<CreateVoiceConnectorResponseFormProperties>({
		});

	}


	/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnector {
		VoiceConnectorId?: string;
		AwsRegion?: VoiceConnectorAwsRegion;
		Name?: string;
		OutboundHostName?: string;
		RequireEncryption?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		VoiceConnectorArn?: string;
	}

	/** The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnectorFormProperties {
		VoiceConnectorId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OutboundHostName: FormControl<string | null | undefined>,
		RequireEncryption: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		VoiceConnectorArn: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorFormGroup() {
		return new FormGroup<VoiceConnectorFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OutboundHostName: new FormControl<string | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			VoiceConnectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoiceConnectorAwsRegion { 'us-east-1' = 'us-east-1', 'us-west-2' = 'us-west-2' }

	export interface CreateVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface CreateVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateCreateVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupResponseFormProperties>({
		});

	}


	/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroup {
		VoiceConnectorGroupId?: string;
		Name?: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		VoiceConnectorGroupArn?: string;
	}

	/** The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroupFormProperties {
		VoiceConnectorGroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		VoiceConnectorGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorGroupFormGroup() {
		return new FormGroup<VoiceConnectorGroupFormProperties>({
			VoiceConnectorGroupId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			VoiceConnectorGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group. */
	export interface VoiceConnectorItem {

		/** Required */
		VoiceConnectorId: string;

		/** Required */
		Priority: number;
	}

	/** For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group. */
	export interface VoiceConnectorItemFormProperties {

		/** Required */
		VoiceConnectorId: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateVoiceConnectorItemFormGroup() {
		return new FormGroup<VoiceConnectorItemFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccountResponse {
	}
	export interface DeleteAccountResponseFormProperties {
	}
	export function CreateDeleteAccountResponseFormGroup() {
		return new FormGroup<DeleteAccountResponseFormProperties>({
		});

	}

	export interface UnprocessableEntityException {
	}
	export interface UnprocessableEntityExceptionFormProperties {
	}
	export function CreateUnprocessableEntityExceptionFormGroup() {
		return new FormGroup<UnprocessableEntityExceptionFormProperties>({
		});

	}

	export interface DescribeAppInstanceResponse {
		AppInstance?: AppInstance;
	}
	export interface DescribeAppInstanceResponseFormProperties {
	}
	export function CreateDescribeAppInstanceResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceResponseFormProperties>({
		});

	}


	/** The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application. */
	export interface AppInstance {
		AppInstanceArn?: string;
		Name?: string;
		Metadata?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/** The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application. */
	export interface AppInstanceFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceFormGroup() {
		return new FormGroup<AppInstanceFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAppInstanceAdminResponse {
		AppInstanceAdmin?: AppInstanceAdmin;
	}
	export interface DescribeAppInstanceAdminResponseFormProperties {
	}
	export function CreateDescribeAppInstanceAdminResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceAdminResponseFormProperties>({
		});

	}


	/** The details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdmin {
		Admin?: Identity;
		AppInstanceArn?: string;
		CreatedTimestamp?: Date;
	}

	/** The details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdminFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceAdminFormGroup() {
		return new FormGroup<AppInstanceAdminFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAppInstanceUserResponse {
		AppInstanceUser?: AppInstanceUser;
	}
	export interface DescribeAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeAppInstanceUserResponseFormProperties>({
		});

	}


	/** The details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUser {
		AppInstanceUserArn?: string;
		Name?: string;
		CreatedTimestamp?: Date;
		Metadata?: string;
		LastUpdatedTimestamp?: Date;
	}

	/** The details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceUserFormGroup() {
		return new FormGroup<AppInstanceUserFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelResponse {
		Channel?: Channel;
	}
	export interface DescribeChannelResponseFormProperties {
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
		});

	}


	/** The details of a channel. */
	export interface Channel {
		Name?: string;
		ChannelArn?: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;
		CreatedBy?: Identity;
		CreatedTimestamp?: Date;
		LastMessageTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/** The details of a channel. */
	export interface ChannelFormProperties {
		Name: FormControl<string | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastMessageTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastMessageTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ChannelMode { UNRESTRICTED = 'UNRESTRICTED', RESTRICTED = 'RESTRICTED' }

	export enum ChannelPrivacy { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE' }

	export interface DescribeChannelBanResponse {
		ChannelBan?: ChannelBan;
	}
	export interface DescribeChannelBanResponseFormProperties {
	}
	export function CreateDescribeChannelBanResponseFormGroup() {
		return new FormGroup<DescribeChannelBanResponseFormProperties>({
		});

	}


	/** The details of a channel ban. */
	export interface ChannelBan {
		Member?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		CreatedBy?: Identity;
	}

	/** The details of a channel ban. */
	export interface ChannelBanFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelBanFormGroup() {
		return new FormGroup<ChannelBanFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelMembershipResponse {
		ChannelMembership?: ChannelMembership;
	}
	export interface DescribeChannelMembershipResponseFormProperties {
	}
	export function CreateDescribeChannelMembershipResponseFormGroup() {
		return new FormGroup<DescribeChannelMembershipResponseFormProperties>({
		});

	}


	/** The details of a channel member. */
	export interface ChannelMembership {
		InvitedBy?: Identity;
		Type?: ChannelMembershipType;
		Member?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/** The details of a channel member. */
	export interface ChannelMembershipFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelMembershipFormGroup() {
		return new FormGroup<ChannelMembershipFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelMembershipForAppInstanceUserResponse {
		ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
	}
	export interface DescribeChannelMembershipForAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeChannelMembershipForAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeChannelMembershipForAppInstanceUserResponseFormProperties>({
		});

	}


	/** Summary of the channel membership details of an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipForAppInstanceUserSummary {
		ChannelSummary?: ChannelSummary;
		AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
	}

	/** Summary of the channel membership details of an <code>AppInstanceUser</code>. */
	export interface ChannelMembershipForAppInstanceUserSummaryFormProperties {
	}
	export function CreateChannelMembershipForAppInstanceUserSummaryFormGroup() {
		return new FormGroup<ChannelMembershipForAppInstanceUserSummaryFormProperties>({
		});

	}


	/** Summary of the details of a <code>Channel</code>. */
	export interface ChannelSummary {
		Name?: string;
		ChannelArn?: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;
		LastMessageTimestamp?: Date;
	}

	/** Summary of the details of a <code>Channel</code>. */
	export interface ChannelSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		ChannelArn: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		LastMessageTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			LastMessageTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary of the membership details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserMembershipSummary {
		Type?: ChannelMembershipType;
		ReadMarkerTimestamp?: Date;
	}

	/** Summary of the membership details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserMembershipSummaryFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
		ReadMarkerTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAppInstanceUserMembershipSummaryFormGroup() {
		return new FormGroup<AppInstanceUserMembershipSummaryFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
			ReadMarkerTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelModeratedByAppInstanceUserResponse {
		Channel?: ChannelModeratedByAppInstanceUserSummary;
	}
	export interface DescribeChannelModeratedByAppInstanceUserResponseFormProperties {
	}
	export function CreateDescribeChannelModeratedByAppInstanceUserResponseFormGroup() {
		return new FormGroup<DescribeChannelModeratedByAppInstanceUserResponseFormProperties>({
		});

	}


	/** Summary of the details of a moderated channel. */
	export interface ChannelModeratedByAppInstanceUserSummary {
		ChannelSummary?: ChannelSummary;
	}

	/** Summary of the details of a moderated channel. */
	export interface ChannelModeratedByAppInstanceUserSummaryFormProperties {
	}
	export function CreateChannelModeratedByAppInstanceUserSummaryFormGroup() {
		return new FormGroup<ChannelModeratedByAppInstanceUserSummaryFormProperties>({
		});

	}

	export interface DescribeChannelModeratorResponse {
		ChannelModerator?: ChannelModerator;
	}
	export interface DescribeChannelModeratorResponseFormProperties {
	}
	export function CreateDescribeChannelModeratorResponseFormGroup() {
		return new FormGroup<DescribeChannelModeratorResponseFormProperties>({
		});

	}


	/** The details of a channel moderator. */
	export interface ChannelModerator {
		Moderator?: Identity;
		ChannelArn?: string;
		CreatedTimestamp?: Date;
		CreatedBy?: Identity;
	}

	/** The details of a channel moderator. */
	export interface ChannelModeratorFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateChannelModeratorFormGroup() {
		return new FormGroup<ChannelModeratorFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DisassociatePhoneNumberFromUserResponse {
	}
	export interface DisassociatePhoneNumberFromUserResponseFormProperties {
	}
	export function CreateDisassociatePhoneNumberFromUserResponseFormGroup() {
		return new FormGroup<DisassociatePhoneNumberFromUserResponseFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorResponseFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorResponseFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorResponseFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface DisassociateSigninDelegateGroupsFromAccountResponse {
	}
	export interface DisassociateSigninDelegateGroupsFromAccountResponseFormProperties {
	}
	export function CreateDisassociateSigninDelegateGroupsFromAccountResponseFormGroup() {
		return new FormGroup<DisassociateSigninDelegateGroupsFromAccountResponseFormProperties>({
		});

	}

	export interface GetAccountResponse {
		Account?: Account;
	}
	export interface GetAccountResponseFormProperties {
	}
	export function CreateGetAccountResponseFormGroup() {
		return new FormGroup<GetAccountResponseFormProperties>({
		});

	}

	export interface GetAccountSettingsResponse {
		AccountSettings?: AccountSettings;
	}
	export interface GetAccountSettingsResponseFormProperties {
	}
	export function CreateGetAccountSettingsResponseFormGroup() {
		return new FormGroup<GetAccountSettingsResponseFormProperties>({
		});

	}


	/** Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
	export interface AccountSettings {
		DisableRemoteControl?: boolean | null;
		EnableDialOut?: boolean | null;
	}

	/** Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>. */
	export interface AccountSettingsFormProperties {
		DisableRemoteControl: FormControl<boolean | null | undefined>,
		EnableDialOut: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountSettingsFormGroup() {
		return new FormGroup<AccountSettingsFormProperties>({
			DisableRemoteControl: new FormControl<boolean | null | undefined>(undefined),
			EnableDialOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAppInstanceRetentionSettingsResponse {
		AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface GetAppInstanceRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetAppInstanceRetentionSettingsResponseFormGroup() {
		return new FormGroup<GetAppInstanceRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The details of the data-retention settings for an <code>AppInstance</code>. */
	export interface AppInstanceRetentionSettings {
		ChannelRetentionSettings?: ChannelRetentionSettings;
	}

	/** The details of the data-retention settings for an <code>AppInstance</code>. */
	export interface AppInstanceRetentionSettingsFormProperties {
	}
	export function CreateAppInstanceRetentionSettingsFormGroup() {
		return new FormGroup<AppInstanceRetentionSettingsFormProperties>({
		});

	}


	/** The details of the retention settings for a channel. */
	export interface ChannelRetentionSettings {
		RetentionDays?: number | null;
	}

	/** The details of the retention settings for a channel. */
	export interface ChannelRetentionSettingsFormProperties {
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateChannelRetentionSettingsFormGroup() {
		return new FormGroup<ChannelRetentionSettingsFormProperties>({
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAppInstanceStreamingConfigurationsResponse {
		AppInstanceStreamingConfigurations?: Array<AppInstanceStreamingConfiguration>;
	}
	export interface GetAppInstanceStreamingConfigurationsResponseFormProperties {
	}
	export function CreateGetAppInstanceStreamingConfigurationsResponseFormGroup() {
		return new FormGroup<GetAppInstanceStreamingConfigurationsResponseFormProperties>({
		});

	}


	/** The details of the streaming configuration of an <code>AppInstance</code>. */
	export interface AppInstanceStreamingConfiguration {

		/** Required */
		AppInstanceDataType: AppInstanceDataType;

		/** Required */
		ResourceArn: string;
	}

	/** The details of the streaming configuration of an <code>AppInstance</code>. */
	export interface AppInstanceStreamingConfigurationFormProperties {

		/** Required */
		AppInstanceDataType: FormControl<AppInstanceDataType | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceStreamingConfigurationFormGroup() {
		return new FormGroup<AppInstanceStreamingConfigurationFormProperties>({
			AppInstanceDataType: new FormControl<AppInstanceDataType | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppInstanceDataType { Channel = 'Channel', ChannelMessage = 'ChannelMessage' }

	export interface GetAttendeeResponse {
		Attendee?: Attendee;
	}
	export interface GetAttendeeResponseFormProperties {
	}
	export function CreateGetAttendeeResponseFormGroup() {
		return new FormGroup<GetAttendeeResponseFormProperties>({
		});

	}

	export interface GetBotResponse {
		Bot?: Bot;
	}
	export interface GetBotResponseFormProperties {
	}
	export function CreateGetBotResponseFormGroup() {
		return new FormGroup<GetBotResponseFormProperties>({
		});

	}

	export interface GetChannelMessageResponse {
		ChannelMessage?: ChannelMessage;
	}
	export interface GetChannelMessageResponseFormProperties {
	}
	export function CreateGetChannelMessageResponseFormGroup() {
		return new FormGroup<GetChannelMessageResponseFormProperties>({
		});

	}


	/** The details of a message in a channel. */
	export interface ChannelMessage {
		ChannelArn?: string;
		MessageId?: string;
		Content?: string;
		Metadata?: string;
		Type?: ChannelMessageType;
		CreatedTimestamp?: Date;
		LastEditedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Sender?: Identity;
		Redacted?: boolean | null;
		Persistence?: ChannelMessagePersistenceType;
	}

	/** The details of a message in a channel. */
	export interface ChannelMessageFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		Type: FormControl<ChannelMessageType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastEditedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Redacted: FormControl<boolean | null | undefined>,
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,
	}
	export function CreateChannelMessageFormGroup() {
		return new FormGroup<ChannelMessageFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastEditedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Redacted: new FormControl<boolean | null | undefined>(undefined),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined),
		});

	}

	export enum ChannelMessageType { STANDARD = 'STANDARD', CONTROL = 'CONTROL' }

	export enum ChannelMessagePersistenceType { PERSISTENT = 'PERSISTENT', NON_PERSISTENT = 'NON_PERSISTENT' }

	export interface GetEventsConfigurationResponse {
		EventsConfiguration?: EventsConfiguration;
	}
	export interface GetEventsConfigurationResponseFormProperties {
	}
	export function CreateGetEventsConfigurationResponseFormGroup() {
		return new FormGroup<GetEventsConfigurationResponseFormProperties>({
		});

	}


	/** The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
	export interface EventsConfiguration {
		BotId?: string;
		OutboundEventsHTTPSEndpoint?: string;
		LambdaFunctionArn?: string;
	}

	/** The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN. */
	export interface EventsConfigurationFormProperties {
		BotId: FormControl<string | null | undefined>,
		OutboundEventsHTTPSEndpoint: FormControl<string | null | undefined>,
		LambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateEventsConfigurationFormGroup() {
		return new FormGroup<EventsConfigurationFormProperties>({
			BotId: new FormControl<string | null | undefined>(undefined),
			OutboundEventsHTTPSEndpoint: new FormControl<string | null | undefined>(undefined),
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGlobalSettingsResponse {
		BusinessCalling?: BusinessCallingSettings;
		VoiceConnector?: VoiceConnectorSettings;
	}
	export interface GetGlobalSettingsResponseFormProperties {
	}
	export function CreateGetGlobalSettingsResponseFormGroup() {
		return new FormGroup<GetGlobalSettingsResponseFormProperties>({
		});

	}


	/** The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface BusinessCallingSettings {
		CdrBucket?: string;
	}

	/** The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface BusinessCallingSettingsFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateBusinessCallingSettingsFormGroup() {
		return new FormGroup<BusinessCallingSettingsFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettings {
		CdrBucket?: string;
	}

	/** The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettingsFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorSettingsFormGroup() {
		return new FormGroup<VoiceConnectorSettingsFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMediaCapturePipelineResponse {
		MediaCapturePipeline?: MediaCapturePipeline;
	}
	export interface GetMediaCapturePipelineResponseFormProperties {
	}
	export function CreateGetMediaCapturePipelineResponseFormGroup() {
		return new FormGroup<GetMediaCapturePipelineResponseFormProperties>({
		});

	}

	export interface GetMeetingResponse {
		Meeting?: Meeting;
	}
	export interface GetMeetingResponseFormProperties {
	}
	export function CreateGetMeetingResponseFormGroup() {
		return new FormGroup<GetMeetingResponseFormProperties>({
		});

	}

	export interface GetMessagingSessionEndpointResponse {
		Endpoint?: MessagingSessionEndpoint;
	}
	export interface GetMessagingSessionEndpointResponseFormProperties {
	}
	export function CreateGetMessagingSessionEndpointResponseFormGroup() {
		return new FormGroup<GetMessagingSessionEndpointResponseFormProperties>({
		});

	}


	/** The websocket endpoint used to connect to Amazon Chime SDK messaging. */
	export interface MessagingSessionEndpoint {
		Url?: string;
	}

	/** The websocket endpoint used to connect to Amazon Chime SDK messaging. */
	export interface MessagingSessionEndpointFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateMessagingSessionEndpointFormGroup() {
		return new FormGroup<MessagingSessionEndpointFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface GetPhoneNumberResponseFormProperties {
	}
	export function CreateGetPhoneNumberResponseFormGroup() {
		return new FormGroup<GetPhoneNumberResponseFormProperties>({
		});

	}


	/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
	export interface PhoneNumber {
		PhoneNumberId?: string;
		E164PhoneNumber?: string;
		Country?: string;
		Type?: PhoneNumberType;
		ProductType?: PhoneNumberProductType;
		Status?: PhoneNumberStatus;
		Capabilities?: PhoneNumberCapabilities;
		Associations?: Array<PhoneNumberAssociation>;
		CallingName?: string;
		CallingNameStatus?: CallingNameStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		DeletionTimestamp?: Date;
	}

	/** A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector. */
	export interface PhoneNumberFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		E164PhoneNumber: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Type: FormControl<PhoneNumberType | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		Status: FormControl<PhoneNumberStatus | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
		CallingNameStatus: FormControl<CallingNameStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		DeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PhoneNumberType | null | undefined>(undefined),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			Status: new FormControl<PhoneNumberStatus | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
			CallingNameStatus: new FormControl<CallingNameStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			DeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberType { Local = 'Local', TollFree = 'TollFree' }

	export enum PhoneNumberStatus { AcquireInProgress = 'AcquireInProgress', AcquireFailed = 'AcquireFailed', Unassigned = 'Unassigned', Assigned = 'Assigned', ReleaseInProgress = 'ReleaseInProgress', DeleteInProgress = 'DeleteInProgress', ReleaseFailed = 'ReleaseFailed', DeleteFailed = 'DeleteFailed' }


	/** The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
	export interface PhoneNumberCapabilities {
		InboundCall?: boolean | null;
		OutboundCall?: boolean | null;
		InboundSMS?: boolean | null;
		OutboundSMS?: boolean | null;
		InboundMMS?: boolean | null;
		OutboundMMS?: boolean | null;
	}

	/** The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging. */
	export interface PhoneNumberCapabilitiesFormProperties {
		InboundCall: FormControl<boolean | null | undefined>,
		OutboundCall: FormControl<boolean | null | undefined>,
		InboundSMS: FormControl<boolean | null | undefined>,
		OutboundSMS: FormControl<boolean | null | undefined>,
		InboundMMS: FormControl<boolean | null | undefined>,
		OutboundMMS: FormControl<boolean | null | undefined>,
	}
	export function CreatePhoneNumberCapabilitiesFormGroup() {
		return new FormGroup<PhoneNumberCapabilitiesFormProperties>({
			InboundCall: new FormControl<boolean | null | undefined>(undefined),
			OutboundCall: new FormControl<boolean | null | undefined>(undefined),
			InboundSMS: new FormControl<boolean | null | undefined>(undefined),
			OutboundSMS: new FormControl<boolean | null | undefined>(undefined),
			InboundMMS: new FormControl<boolean | null | undefined>(undefined),
			OutboundMMS: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID. */
	export interface PhoneNumberAssociation {
		Value?: string;
		Name?: PhoneNumberAssociationName;
		AssociatedTimestamp?: Date;
	}

	/** The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID. */
	export interface PhoneNumberAssociationFormProperties {
		Value: FormControl<string | null | undefined>,
		Name: FormControl<PhoneNumberAssociationName | null | undefined>,
		AssociatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberAssociationFormGroup() {
		return new FormGroup<PhoneNumberAssociationFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<PhoneNumberAssociationName | null | undefined>(undefined),
			AssociatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberAssociationName { AccountId = 'AccountId', UserId = 'UserId', VoiceConnectorId = 'VoiceConnectorId', VoiceConnectorGroupId = 'VoiceConnectorGroupId', SipRuleId = 'SipRuleId' }

	export enum CallingNameStatus { Unassigned = 'Unassigned', UpdateInProgress = 'UpdateInProgress', UpdateSucceeded = 'UpdateSucceeded', UpdateFailed = 'UpdateFailed' }

	export interface GetPhoneNumberOrderResponse {
		PhoneNumberOrder?: PhoneNumberOrder;
	}
	export interface GetPhoneNumberOrderResponseFormProperties {
	}
	export function CreateGetPhoneNumberOrderResponseFormGroup() {
		return new FormGroup<GetPhoneNumberOrderResponseFormProperties>({
		});

	}

	export interface GetPhoneNumberSettingsResponse {
		CallingName?: string;
		CallingNameUpdatedTimestamp?: Date;
	}
	export interface GetPhoneNumberSettingsResponseFormProperties {
		CallingName: FormControl<string | null | undefined>,
		CallingNameUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetPhoneNumberSettingsResponseFormGroup() {
		return new FormGroup<GetPhoneNumberSettingsResponseFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined),
			CallingNameUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface GetProxySessionResponseFormProperties {
	}
	export function CreateGetProxySessionResponseFormGroup() {
		return new FormGroup<GetProxySessionResponseFormProperties>({
		});

	}

	export interface GetRetentionSettingsResponse {
		RetentionSettings?: RetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface GetRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetRetentionSettingsResponseFormGroup() {
		return new FormGroup<GetRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages. */
	export interface RetentionSettings {
		RoomRetentionSettings?: RoomRetentionSettings;
		ConversationRetentionSettings?: ConversationRetentionSettings;
	}

	/** The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages. */
	export interface RetentionSettingsFormProperties {
	}
	export function CreateRetentionSettingsFormGroup() {
		return new FormGroup<RetentionSettingsFormProperties>({
		});

	}


	/** The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account. */
	export interface RoomRetentionSettings {
		RetentionDays?: number | null;
	}

	/** The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account. */
	export interface RoomRetentionSettingsFormProperties {
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateRoomRetentionSettingsFormGroup() {
		return new FormGroup<RoomRetentionSettingsFormProperties>({
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account. */
	export interface ConversationRetentionSettings {
		RetentionDays?: number | null;
	}

	/** The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account. */
	export interface ConversationRetentionSettingsFormProperties {
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateConversationRetentionSettingsFormGroup() {
		return new FormGroup<ConversationRetentionSettingsFormProperties>({
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRoomResponse {
		Room?: Room;
	}
	export interface GetRoomResponseFormProperties {
	}
	export function CreateGetRoomResponseFormGroup() {
		return new FormGroup<GetRoomResponseFormProperties>({
		});

	}

	export interface GetSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface GetSipMediaApplicationResponseFormProperties {
	}
	export function CreateGetSipMediaApplicationResponseFormGroup() {
		return new FormGroup<GetSipMediaApplicationResponseFormProperties>({
		});

	}

	export interface GetSipMediaApplicationLoggingConfigurationResponse {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface GetSipMediaApplicationLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetSipMediaApplicationLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetSipMediaApplicationLoggingConfigurationResponseFormProperties>({
		});

	}


	/** Logging configuration of the SIP media application. */
	export interface SipMediaApplicationLoggingConfiguration {
		EnableSipMediaApplicationMessageLogs?: boolean | null;
	}

	/** Logging configuration of the SIP media application. */
	export interface SipMediaApplicationLoggingConfigurationFormProperties {
		EnableSipMediaApplicationMessageLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSipMediaApplicationLoggingConfigurationFormGroup() {
		return new FormGroup<SipMediaApplicationLoggingConfigurationFormProperties>({
			EnableSipMediaApplicationMessageLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface GetSipRuleResponseFormProperties {
	}
	export function CreateGetSipRuleResponseFormGroup() {
		return new FormGroup<GetSipRuleResponseFormProperties>({
		});

	}

	export interface GetUserResponse {
		User?: User;
	}
	export interface GetUserResponseFormProperties {
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
		});

	}

	export interface GetUserSettingsResponse {
		UserSettings?: UserSettings;
	}
	export interface GetUserSettingsResponseFormProperties {
	}
	export function CreateGetUserSettingsResponseFormGroup() {
		return new FormGroup<GetUserSettingsResponseFormProperties>({
		});

	}


	/** Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
	export interface UserSettings {

		/** Required */
		Telephony: TelephonySettings;
	}

	/** Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging. */
	export interface UserSettingsFormProperties {
	}
	export function CreateUserSettingsFormGroup() {
		return new FormGroup<UserSettingsFormProperties>({
		});

	}


	/** Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
	export interface TelephonySettings {

		/** Required */
		InboundCalling: boolean;

		/** Required */
		OutboundCalling: boolean;

		/** Required */
		SMS: boolean;
	}

	/** Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging. */
	export interface TelephonySettingsFormProperties {

		/** Required */
		InboundCalling: FormControl<boolean | null | undefined>,

		/** Required */
		OutboundCalling: FormControl<boolean | null | undefined>,

		/** Required */
		SMS: FormControl<boolean | null | undefined>,
	}
	export function CreateTelephonySettingsFormGroup() {
		return new FormGroup<TelephonySettingsFormProperties>({
			InboundCalling: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OutboundCalling: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SMS: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface GetVoiceConnectorResponseFormProperties {
	}
	export function CreateGetVoiceConnectorResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorResponseFormProperties>({
		});

	}

	export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
		EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
	}
	export interface GetVoiceConnectorEmergencyCallingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorEmergencyCallingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorEmergencyCallingConfigurationResponseFormProperties>({
		});

	}


	/** The emergency calling configuration details associated with an Amazon Chime Voice Connector. */
	export interface EmergencyCallingConfiguration {
		DNIS?: Array<DNISEmergencyCallingConfiguration>;
	}

	/** The emergency calling configuration details associated with an Amazon Chime Voice Connector. */
	export interface EmergencyCallingConfigurationFormProperties {
	}
	export function CreateEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<EmergencyCallingConfigurationFormProperties>({
		});

	}


	/** The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration. */
	export interface DNISEmergencyCallingConfiguration {

		/** Required */
		EmergencyPhoneNumber: string;
		TestPhoneNumber?: string;

		/** Required */
		CallingCountry: string;
	}

	/** The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration. */
	export interface DNISEmergencyCallingConfigurationFormProperties {

		/** Required */
		EmergencyPhoneNumber: FormControl<string | null | undefined>,
		TestPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		CallingCountry: FormControl<string | null | undefined>,
	}
	export function CreateDNISEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<DNISEmergencyCallingConfigurationFormProperties>({
			EmergencyPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestPhoneNumber: new FormControl<string | null | undefined>(undefined),
			CallingCountry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface GetVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateGetVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface GetVoiceConnectorLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface GetVoiceConnectorLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorLoggingConfigurationResponseFormProperties>({
		});

	}


	/** The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
	export interface LoggingConfiguration {
		EnableSIPLogs?: boolean | null;
		EnableMediaMetricLogs?: boolean | null;
	}

	/** The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs. */
	export interface LoggingConfigurationFormProperties {
		EnableSIPLogs: FormControl<boolean | null | undefined>,
		EnableMediaMetricLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			EnableSIPLogs: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaMetricLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorOriginationResponse {
		Origination?: Origination;
	}
	export interface GetVoiceConnectorOriginationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorOriginationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorOriginationResponseFormProperties>({
		});

	}


	/** <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note> */
	export interface Origination {
		Routes?: Array<OriginationRoute>;
		Disabled?: boolean | null;
	}

	/** <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note> */
	export interface OriginationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOriginationFormGroup() {
		return new FormGroup<OriginationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note> */
	export interface OriginationRoute {
		Host?: string;
		Port?: number | null;
		Protocol?: OriginationRouteProtocol;
		Priority?: number | null;
		Weight?: number | null;
	}

	/** <p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note> */
	export interface OriginationRouteFormProperties {
		Host: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<OriginationRouteProtocol | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateOriginationRouteFormGroup() {
		return new FormGroup<OriginationRouteFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<OriginationRouteProtocol | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OriginationRouteProtocol { TCP = 'TCP', UDP = 'UDP' }

	export interface GetVoiceConnectorProxyResponse {
		Proxy?: Proxy;
	}
	export interface GetVoiceConnectorProxyResponseFormProperties {
	}
	export function CreateGetVoiceConnectorProxyResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorProxyResponseFormProperties>({
		});

	}


	/** The proxy configuration for an Amazon Chime Voice Connector. */
	export interface Proxy {
		DefaultSessionExpiryMinutes?: number | null;
		Disabled?: boolean | null;
		FallBackPhoneNumber?: string;
		PhoneNumberCountries?: Array<string>;
	}

	/** The proxy configuration for an Amazon Chime Voice Connector. */
	export interface ProxyFormProperties {
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		FallBackPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateProxyFormGroup() {
		return new FormGroup<ProxyFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorStreamingConfigurationResponse {
		StreamingConfiguration?: StreamingConfiguration;
	}
	export interface GetVoiceConnectorStreamingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorStreamingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorStreamingConfigurationResponseFormProperties>({
		});

	}


	/** The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfiguration {

		/** Required */
		DataRetentionInHours: number;
		Disabled?: boolean | null;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
	}

	/** The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfigurationFormProperties {

		/** Required */
		DataRetentionInHours: FormControl<number | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamingConfigurationFormGroup() {
		return new FormGroup<StreamingConfigurationFormProperties>({
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The targeted recipient for a streaming configuration notification. */
	export interface StreamingNotificationTarget {

		/** Required */
		NotificationTarget: NotificationTarget;
	}

	/** The targeted recipient for a streaming configuration notification. */
	export interface StreamingNotificationTargetFormProperties {

		/** Required */
		NotificationTarget: FormControl<NotificationTarget | null | undefined>,
	}
	export function CreateStreamingNotificationTargetFormGroup() {
		return new FormGroup<StreamingNotificationTargetFormProperties>({
			NotificationTarget: new FormControl<NotificationTarget | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationTarget { EventBridge = 'EventBridge', SNS = 'SNS', SQS = 'SQS' }

	export interface GetVoiceConnectorTerminationResponse {
		Termination?: Termination;
	}
	export interface GetVoiceConnectorTerminationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationResponseFormProperties>({
		});

	}


	/** Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
	export interface Termination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string;
		CallingRegions?: Array<string>;
		CidrAllowedList?: Array<string>;
		Disabled?: boolean | null;
	}

	/** Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector. */
	export interface TerminationFormProperties {
		CpsLimit: FormControl<number | null | undefined>,
		DefaultPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTerminationFormGroup() {
		return new FormGroup<TerminationFormProperties>({
			CpsLimit: new FormControl<number | null | undefined>(undefined),
			DefaultPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorTerminationHealthResponse {
		TerminationHealth?: TerminationHealth;
	}
	export interface GetVoiceConnectorTerminationHealthResponseFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationHealthResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationHealthResponseFormProperties>({
		});

	}


	/** The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealth {
		Timestamp?: Date;
		Source?: string;
	}

	/** The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealthFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateTerminationHealthFormGroup() {
		return new FormGroup<TerminationHealthFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InviteUsersResponse {
		Invites?: Array<Invite>;
	}
	export interface InviteUsersResponseFormProperties {
	}
	export function CreateInviteUsersResponseFormGroup() {
		return new FormGroup<InviteUsersResponseFormProperties>({
		});

	}


	/** Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account. */
	export interface Invite {
		InviteId?: string;
		Status?: InviteStatus;
		EmailAddress?: string;
		EmailStatus?: EmailStatus;
	}

	/** Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account. */
	export interface InviteFormProperties {
		InviteId: FormControl<string | null | undefined>,
		Status: FormControl<InviteStatus | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		EmailStatus: FormControl<EmailStatus | null | undefined>,
	}
	export function CreateInviteFormGroup() {
		return new FormGroup<InviteFormProperties>({
			InviteId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InviteStatus | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			EmailStatus: new FormControl<EmailStatus | null | undefined>(undefined),
		});

	}

	export enum EmailStatus { NotSent = 'NotSent', Sent = 'Sent', Failed = 'Failed' }

	export interface ListAccountsResponse {
		Accounts?: Array<Account>;
		NextToken?: string;
	}
	export interface ListAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppInstanceAdminsResponse {
		AppInstanceArn?: string;
		AppInstanceAdmins?: Array<AppInstanceAdminSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceAdminsResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceAdminsResponseFormGroup() {
		return new FormGroup<ListAppInstanceAdminsResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdminSummary {
		Admin?: Identity;
	}

	/** Summary of the details of an <code>AppInstanceAdmin</code>. */
	export interface AppInstanceAdminSummaryFormProperties {
	}
	export function CreateAppInstanceAdminSummaryFormGroup() {
		return new FormGroup<AppInstanceAdminSummaryFormProperties>({
		});

	}

	export interface ListAppInstanceUsersResponse {
		AppInstanceArn?: string;
		AppInstanceUsers?: Array<AppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListAppInstanceUsersResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstanceUsersResponseFormGroup() {
		return new FormGroup<ListAppInstanceUsersResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserSummary {
		AppInstanceUserArn?: string;
		Name?: string;
		Metadata?: string;
	}

	/** Summary of the details of an <code>AppInstanceUser</code>. */
	export interface AppInstanceUserSummaryFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceUserSummaryFormGroup() {
		return new FormGroup<AppInstanceUserSummaryFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppInstancesResponse {
		AppInstances?: Array<AppInstanceSummary>;
		NextToken?: string;
	}
	export interface ListAppInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppInstancesResponseFormGroup() {
		return new FormGroup<ListAppInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the data for an <code>AppInstance</code>. */
	export interface AppInstanceSummary {
		AppInstanceArn?: string;
		Name?: string;
		Metadata?: string;
	}

	/** Summary of the data for an <code>AppInstance</code>. */
	export interface AppInstanceSummaryFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceSummaryFormGroup() {
		return new FormGroup<AppInstanceSummaryFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttendeeTagsResponse {
		Tags?: Array<Tag>;
	}
	export interface ListAttendeeTagsResponseFormProperties {
	}
	export function CreateListAttendeeTagsResponseFormGroup() {
		return new FormGroup<ListAttendeeTagsResponseFormProperties>({
		});

	}

	export interface ListAttendeesResponse {
		Attendees?: Array<Attendee>;
		NextToken?: string;
	}
	export interface ListAttendeesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttendeesResponseFormGroup() {
		return new FormGroup<ListAttendeesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBotsResponse {
		Bots?: Array<Bot>;
		NextToken?: string;
	}
	export interface ListBotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBotsResponseFormGroup() {
		return new FormGroup<ListBotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelBansResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelBans?: Array<ChannelBanSummary>;
	}
	export interface ListChannelBansResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelBansResponseFormGroup() {
		return new FormGroup<ListChannelBansResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelBan</code>. */
	export interface ChannelBanSummary {
		Member?: Identity;
	}

	/** Summary of the details of a <code>ChannelBan</code>. */
	export interface ChannelBanSummaryFormProperties {
	}
	export function CreateChannelBanSummaryFormGroup() {
		return new FormGroup<ChannelBanSummaryFormProperties>({
		});

	}

	export interface ListChannelMembershipsResponse {
		ChannelArn?: string;
		ChannelMemberships?: Array<ChannelMembershipSummary>;
		NextToken?: string;
	}
	export interface ListChannelMembershipsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMembershipsResponseFormGroup() {
		return new FormGroup<ListChannelMembershipsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelMembership</code>. */
	export interface ChannelMembershipSummary {
		Member?: Identity;
	}

	/** Summary of the details of a <code>ChannelMembership</code>. */
	export interface ChannelMembershipSummaryFormProperties {
	}
	export function CreateChannelMembershipSummaryFormGroup() {
		return new FormGroup<ChannelMembershipSummaryFormProperties>({
		});

	}

	export interface ListChannelMembershipsForAppInstanceUserResponse {
		ChannelMemberships?: Array<ChannelMembershipForAppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListChannelMembershipsForAppInstanceUserResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMembershipsForAppInstanceUserResponseFormGroup() {
		return new FormGroup<ListChannelMembershipsForAppInstanceUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelMessagesResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelMessages?: Array<ChannelMessageSummary>;
	}
	export interface ListChannelMessagesResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelMessagesResponseFormGroup() {
		return new FormGroup<ListChannelMessagesResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the messages in a <code>Channel</code>. */
	export interface ChannelMessageSummary {
		MessageId?: string;
		Content?: string;
		Metadata?: string;
		Type?: ChannelMessageType;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		LastEditedTimestamp?: Date;
		Sender?: Identity;
		Redacted?: boolean | null;
	}

	/** Summary of the messages in a <code>Channel</code>. */
	export interface ChannelMessageSummaryFormProperties {
		MessageId: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
		Type: FormControl<ChannelMessageType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		LastEditedTimestamp: FormControl<Date | null | undefined>,
		Redacted: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelMessageSummaryFormGroup() {
		return new FormGroup<ChannelMessageSummaryFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastEditedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Redacted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListChannelModeratorsResponse {
		ChannelArn?: string;
		NextToken?: string;
		ChannelModerators?: Array<ChannelModeratorSummary>;
	}
	export interface ListChannelModeratorsResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelModeratorsResponseFormGroup() {
		return new FormGroup<ListChannelModeratorsResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the details of a <code>ChannelModerator</code>. */
	export interface ChannelModeratorSummary {
		Moderator?: Identity;
	}

	/** Summary of the details of a <code>ChannelModerator</code>. */
	export interface ChannelModeratorSummaryFormProperties {
	}
	export function CreateChannelModeratorSummaryFormGroup() {
		return new FormGroup<ChannelModeratorSummaryFormProperties>({
		});

	}

	export interface ListChannelsResponse {
		Channels?: Array<ChannelSummary>;
		NextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsModeratedByAppInstanceUserResponse {
		Channels?: Array<ChannelModeratedByAppInstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListChannelsModeratedByAppInstanceUserResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsModeratedByAppInstanceUserResponseFormGroup() {
		return new FormGroup<ListChannelsModeratedByAppInstanceUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMediaCapturePipelinesResponse {
		MediaCapturePipelines?: Array<MediaCapturePipeline>;
		NextToken?: string;
	}
	export interface ListMediaCapturePipelinesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMediaCapturePipelinesResponseFormGroup() {
		return new FormGroup<ListMediaCapturePipelinesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMeetingTagsResponse {
		Tags?: Array<Tag>;
	}
	export interface ListMeetingTagsResponseFormProperties {
	}
	export function CreateListMeetingTagsResponseFormGroup() {
		return new FormGroup<ListMeetingTagsResponseFormProperties>({
		});

	}

	export interface ListMeetingsResponse {
		Meetings?: Array<Meeting>;
		NextToken?: string;
	}
	export interface ListMeetingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMeetingsResponseFormGroup() {
		return new FormGroup<ListMeetingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumberOrdersResponse {
		PhoneNumberOrders?: Array<PhoneNumberOrder>;
		NextToken?: string;
	}
	export interface ListPhoneNumberOrdersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumberOrdersResponseFormGroup() {
		return new FormGroup<ListPhoneNumberOrdersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumbersResponse {
		PhoneNumbers?: Array<PhoneNumber>;
		NextToken?: string;
	}
	export interface ListPhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersResponseFormGroup() {
		return new FormGroup<ListPhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProxySessionsResponse {
		ProxySessions?: Array<ProxySession>;
		NextToken?: string;
	}
	export interface ListProxySessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProxySessionsResponseFormGroup() {
		return new FormGroup<ListProxySessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoomMembershipsResponse {
		RoomMemberships?: Array<RoomMembership>;
		NextToken?: string;
	}
	export interface ListRoomMembershipsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoomMembershipsResponseFormGroup() {
		return new FormGroup<ListRoomMembershipsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoomsResponse {
		Rooms?: Array<Room>;
		NextToken?: string;
	}
	export interface ListRoomsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoomsResponseFormGroup() {
		return new FormGroup<ListRoomsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSipMediaApplicationsResponse {
		SipMediaApplications?: Array<SipMediaApplication>;
		NextToken?: string;
	}
	export interface ListSipMediaApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSipMediaApplicationsResponseFormGroup() {
		return new FormGroup<ListSipMediaApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSipRulesResponse {
		SipRules?: Array<SipRule>;
		NextToken?: string;
	}
	export interface ListSipRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSipRulesResponseFormGroup() {
		return new FormGroup<ListSipRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSupportedPhoneNumberCountriesResponse {
		PhoneNumberCountries?: Array<PhoneNumberCountry>;
	}
	export interface ListSupportedPhoneNumberCountriesResponseFormProperties {
	}
	export function CreateListSupportedPhoneNumberCountriesResponseFormGroup() {
		return new FormGroup<ListSupportedPhoneNumberCountriesResponseFormProperties>({
		});

	}


	/** The phone number country. */
	export interface PhoneNumberCountry {
		CountryCode?: string;
		SupportedPhoneNumberTypes?: Array<PhoneNumberType>;
	}

	/** The phone number country. */
	export interface PhoneNumberCountryFormProperties {
		CountryCode: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberCountryFormGroup() {
		return new FormGroup<PhoneNumberCountryFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
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

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVoiceConnectorGroupsResponse {
		VoiceConnectorGroups?: Array<VoiceConnectorGroup>;
		NextToken?: string;
	}
	export interface ListVoiceConnectorGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceConnectorGroupsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVoiceConnectorTerminationCredentialsResponse {
		Usernames?: Array<string>;
	}
	export interface ListVoiceConnectorTerminationCredentialsResponseFormProperties {
	}
	export function CreateListVoiceConnectorTerminationCredentialsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorTerminationCredentialsResponseFormProperties>({
		});

	}

	export interface ListVoiceConnectorsResponse {
		VoiceConnectors?: Array<VoiceConnector>;
		NextToken?: string;
	}
	export interface ListVoiceConnectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceConnectorsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LogoutUserResponse {
	}
	export interface LogoutUserResponseFormProperties {
	}
	export function CreateLogoutUserResponseFormGroup() {
		return new FormGroup<LogoutUserResponseFormProperties>({
		});

	}

	export interface PutAppInstanceRetentionSettingsResponse {
		AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface PutAppInstanceRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePutAppInstanceRetentionSettingsResponseFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutAppInstanceStreamingConfigurationsResponse {
		AppInstanceStreamingConfigurations?: Array<AppInstanceStreamingConfiguration>;
	}
	export interface PutAppInstanceStreamingConfigurationsResponseFormProperties {
	}
	export function CreatePutAppInstanceStreamingConfigurationsResponseFormGroup() {
		return new FormGroup<PutAppInstanceStreamingConfigurationsResponseFormProperties>({
		});

	}

	export interface PutEventsConfigurationResponse {
		EventsConfiguration?: EventsConfiguration;
	}
	export interface PutEventsConfigurationResponseFormProperties {
	}
	export function CreatePutEventsConfigurationResponseFormGroup() {
		return new FormGroup<PutEventsConfigurationResponseFormProperties>({
		});

	}

	export interface PutRetentionSettingsResponse {
		RetentionSettings?: RetentionSettings;
		InitiateDeletionTimestamp?: Date;
	}
	export interface PutRetentionSettingsResponseFormProperties {
		InitiateDeletionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePutRetentionSettingsResponseFormGroup() {
		return new FormGroup<PutRetentionSettingsResponseFormProperties>({
			InitiateDeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationResponse {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
		EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationResponse {
		Origination?: Origination;
	}
	export interface PutVoiceConnectorOriginationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorProxyResponse {
		Proxy?: Proxy;
	}
	export interface PutVoiceConnectorProxyResponseFormProperties {
	}
	export function CreatePutVoiceConnectorProxyResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationResponse {
		StreamingConfiguration?: StreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationResponse {
		Termination?: Termination;
	}
	export interface PutVoiceConnectorTerminationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationResponseFormProperties>({
		});

	}


	/** The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector. */
	export interface Credential {
		Username?: string;
		Password?: string;
	}

	/** The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector. */
	export interface CredentialFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RedactChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
	}
	export interface RedactChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateRedactChannelMessageResponseFormGroup() {
		return new FormGroup<RedactChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RedactConversationMessageResponse {
	}
	export interface RedactConversationMessageResponseFormProperties {
	}
	export function CreateRedactConversationMessageResponseFormGroup() {
		return new FormGroup<RedactConversationMessageResponseFormProperties>({
		});

	}

	export interface RedactRoomMessageResponse {
	}
	export interface RedactRoomMessageResponseFormProperties {
	}
	export function CreateRedactRoomMessageResponseFormGroup() {
		return new FormGroup<RedactRoomMessageResponseFormProperties>({
		});

	}

	export interface RegenerateSecurityTokenResponse {
		Bot?: Bot;
	}
	export interface RegenerateSecurityTokenResponseFormProperties {
	}
	export function CreateRegenerateSecurityTokenResponseFormGroup() {
		return new FormGroup<RegenerateSecurityTokenResponseFormProperties>({
		});

	}

	export interface ResetPersonalPINResponse {
		User?: User;
	}
	export interface ResetPersonalPINResponseFormProperties {
	}
	export function CreateResetPersonalPINResponseFormGroup() {
		return new FormGroup<ResetPersonalPINResponseFormProperties>({
		});

	}

	export interface RestorePhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface RestorePhoneNumberResponseFormProperties {
	}
	export function CreateRestorePhoneNumberResponseFormGroup() {
		return new FormGroup<RestorePhoneNumberResponseFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersResponse {
		E164PhoneNumbers?: Array<string>;
		NextToken?: string;
	}
	export interface SearchAvailablePhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAvailablePhoneNumbersResponseFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
	}
	export interface SendChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessageResponseFormGroup() {
		return new FormGroup<SendChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMeetingTranscriptionResponse {
	}
	export interface StartMeetingTranscriptionResponseFormProperties {
	}
	export function CreateStartMeetingTranscriptionResponseFormGroup() {
		return new FormGroup<StartMeetingTranscriptionResponseFormProperties>({
		});

	}


	/** <p>Settings specific for Amazon Transcribe as the live transcription engine.</p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface EngineTranscribeSettings {
		LanguageCode?: TranscribeLanguageCode;
		VocabularyFilterMethod?: TranscribeVocabularyFilterMethod;
		VocabularyFilterName?: string;
		VocabularyName?: string;
		Region?: TranscribeRegion;
		EnablePartialResultsStabilization?: boolean | null;
		PartialResultsStability?: TranscribePartialResultsStability;
		ContentIdentificationType?: TranscribeContentIdentificationType;
		ContentRedactionType?: TranscribeContentIdentificationType;
		PiiEntityTypes?: string;
		LanguageModelName?: string;
		IdentifyLanguage?: boolean | null;
		LanguageOptions?: string;
		PreferredLanguage?: TranscribeLanguageCode;
		VocabularyNames?: string;
		VocabularyFilterNames?: string;
	}

	/** <p>Settings specific for Amazon Transcribe as the live transcription engine.</p> <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface EngineTranscribeSettingsFormProperties {
		LanguageCode: FormControl<TranscribeLanguageCode | null | undefined>,
		VocabularyFilterMethod: FormControl<TranscribeVocabularyFilterMethod | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		Region: FormControl<TranscribeRegion | null | undefined>,
		EnablePartialResultsStabilization: FormControl<boolean | null | undefined>,
		PartialResultsStability: FormControl<TranscribePartialResultsStability | null | undefined>,
		ContentIdentificationType: FormControl<TranscribeContentIdentificationType | null | undefined>,
		ContentRedactionType: FormControl<TranscribeContentIdentificationType | null | undefined>,
		PiiEntityTypes: FormControl<string | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		LanguageOptions: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<TranscribeLanguageCode | null | undefined>,
		VocabularyNames: FormControl<string | null | undefined>,
		VocabularyFilterNames: FormControl<string | null | undefined>,
	}
	export function CreateEngineTranscribeSettingsFormGroup() {
		return new FormGroup<EngineTranscribeSettingsFormProperties>({
			LanguageCode: new FormControl<TranscribeLanguageCode | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<TranscribeVocabularyFilterMethod | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<TranscribeRegion | null | undefined>(undefined),
			EnablePartialResultsStabilization: new FormControl<boolean | null | undefined>(undefined),
			PartialResultsStability: new FormControl<TranscribePartialResultsStability | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<TranscribeContentIdentificationType | null | undefined>(undefined),
			ContentRedactionType: new FormControl<TranscribeContentIdentificationType | null | undefined>(undefined),
			PiiEntityTypes: new FormControl<string | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			LanguageOptions: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<TranscribeLanguageCode | null | undefined>(undefined),
			VocabularyNames: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterNames: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscribeLanguageCode { 'en-US' = 'en-US', 'en-GB' = 'en-GB', 'es-US' = 'es-US', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'en-AU' = 'en-AU', 'it-IT' = 'it-IT', 'de-DE' = 'de-DE', 'pt-BR' = 'pt-BR', 'ja-JP' = 'ja-JP', 'ko-KR' = 'ko-KR', 'zh-CN' = 'zh-CN', 'th-TH' = 'th-TH', 'hi-IN' = 'hi-IN' }

	export enum TranscribeVocabularyFilterMethod { remove = 'remove', mask = 'mask', tag = 'tag' }

	export enum TranscribeRegion { 'us-east-2' = 'us-east-2', 'us-east-1' = 'us-east-1', 'us-west-2' = 'us-west-2', 'ap-northeast-2' = 'ap-northeast-2', 'ap-southeast-2' = 'ap-southeast-2', 'ap-northeast-1' = 'ap-northeast-1', 'ca-central-1' = 'ca-central-1', 'eu-central-1' = 'eu-central-1', 'eu-west-1' = 'eu-west-1', 'eu-west-2' = 'eu-west-2', 'sa-east-1' = 'sa-east-1', auto = 'auto' }

	export enum TranscribePartialResultsStability { low = 'low', medium = 'medium', high = 'high' }

	export enum TranscribeContentIdentificationType { PII = 'PII' }


	/** Settings specific to the Amazon Transcribe Medical engine. */
	export interface EngineTranscribeMedicalSettings {

		/** Required */
		LanguageCode: TranscribeMedicalLanguageCode;

		/** Required */
		Specialty: TranscribeMedicalSpecialty;

		/** Required */
		Type: TranscribeMedicalType;
		VocabularyName?: string;
		Region?: TranscribeMedicalRegion;
		ContentIdentificationType?: TranscribeMedicalContentIdentificationType;
	}

	/** Settings specific to the Amazon Transcribe Medical engine. */
	export interface EngineTranscribeMedicalSettingsFormProperties {

		/** Required */
		LanguageCode: FormControl<TranscribeMedicalLanguageCode | null | undefined>,

		/** Required */
		Specialty: FormControl<TranscribeMedicalSpecialty | null | undefined>,

		/** Required */
		Type: FormControl<TranscribeMedicalType | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		Region: FormControl<TranscribeMedicalRegion | null | undefined>,
		ContentIdentificationType: FormControl<TranscribeMedicalContentIdentificationType | null | undefined>,
	}
	export function CreateEngineTranscribeMedicalSettingsFormGroup() {
		return new FormGroup<EngineTranscribeMedicalSettingsFormProperties>({
			LanguageCode: new FormControl<TranscribeMedicalLanguageCode | null | undefined>(undefined, [Validators.required]),
			Specialty: new FormControl<TranscribeMedicalSpecialty | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<TranscribeMedicalType | null | undefined>(undefined, [Validators.required]),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<TranscribeMedicalRegion | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<TranscribeMedicalContentIdentificationType | null | undefined>(undefined),
		});

	}

	export enum TranscribeMedicalLanguageCode { 'en-US' = 'en-US' }

	export enum TranscribeMedicalSpecialty { PRIMARYCARE = 'PRIMARYCARE', CARDIOLOGY = 'CARDIOLOGY', NEUROLOGY = 'NEUROLOGY', ONCOLOGY = 'ONCOLOGY', RADIOLOGY = 'RADIOLOGY', UROLOGY = 'UROLOGY' }

	export enum TranscribeMedicalType { CONVERSATION = 'CONVERSATION', DICTATION = 'DICTATION' }

	export enum TranscribeMedicalRegion { 'us-east-1' = 'us-east-1', 'us-east-2' = 'us-east-2', 'us-west-2' = 'us-west-2', 'ap-southeast-2' = 'ap-southeast-2', 'ca-central-1' = 'ca-central-1', 'eu-west-1' = 'eu-west-1', auto = 'auto' }

	export enum TranscribeMedicalContentIdentificationType { PHI = 'PHI' }

	export interface StopMeetingTranscriptionResponse {
	}
	export interface StopMeetingTranscriptionResponseFormProperties {
	}
	export function CreateStopMeetingTranscriptionResponseFormGroup() {
		return new FormGroup<StopMeetingTranscriptionResponseFormProperties>({
		});

	}

	export interface UpdateAccountResponse {
		Account?: Account;
	}
	export interface UpdateAccountResponseFormProperties {
	}
	export function CreateUpdateAccountResponseFormGroup() {
		return new FormGroup<UpdateAccountResponseFormProperties>({
		});

	}

	export interface UpdateAccountSettingsResponse {
	}
	export interface UpdateAccountSettingsResponseFormProperties {
	}
	export function CreateUpdateAccountSettingsResponseFormGroup() {
		return new FormGroup<UpdateAccountSettingsResponseFormProperties>({
		});

	}

	export interface UpdateAppInstanceResponse {
		AppInstanceArn?: string;
	}
	export interface UpdateAppInstanceResponseFormProperties {
		AppInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceResponseFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceUserResponse {
		AppInstanceUserArn?: string;
	}
	export interface UpdateAppInstanceUserResponseFormProperties {
		AppInstanceUserArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserResponseFormGroup() {
		return new FormGroup<UpdateAppInstanceUserResponseFormProperties>({
			AppInstanceUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBotResponse {
		Bot?: Bot;
	}
	export interface UpdateBotResponseFormProperties {
	}
	export function CreateUpdateBotResponseFormGroup() {
		return new FormGroup<UpdateBotResponseFormProperties>({
		});

	}

	export interface UpdateChannelResponse {
		ChannelArn?: string;
	}
	export interface UpdateChannelResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelMessageResponse {
		ChannelArn?: string;
		MessageId?: string;
	}
	export interface UpdateChannelMessageResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessageResponseFormGroup() {
		return new FormGroup<UpdateChannelMessageResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelReadMarkerResponse {
		ChannelArn?: string;
	}
	export interface UpdateChannelReadMarkerResponseFormProperties {
		ChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelReadMarkerResponseFormGroup() {
		return new FormGroup<UpdateChannelReadMarkerResponseFormProperties>({
			ChannelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface UpdatePhoneNumberResponseFormProperties {
	}
	export function CreateUpdatePhoneNumberResponseFormGroup() {
		return new FormGroup<UpdatePhoneNumberResponseFormProperties>({
		});

	}

	export interface UpdateProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface UpdateProxySessionResponseFormProperties {
	}
	export function CreateUpdateProxySessionResponseFormGroup() {
		return new FormGroup<UpdateProxySessionResponseFormProperties>({
		});

	}

	export interface UpdateRoomResponse {
		Room?: Room;
	}
	export interface UpdateRoomResponseFormProperties {
	}
	export function CreateUpdateRoomResponseFormGroup() {
		return new FormGroup<UpdateRoomResponseFormProperties>({
		});

	}

	export interface UpdateRoomMembershipResponse {
		RoomMembership?: RoomMembership;
	}
	export interface UpdateRoomMembershipResponseFormProperties {
	}
	export function CreateUpdateRoomMembershipResponseFormGroup() {
		return new FormGroup<UpdateRoomMembershipResponseFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface UpdateSipMediaApplicationResponseFormProperties {
	}
	export function CreateUpdateSipMediaApplicationResponseFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationResponseFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationCallResponse {
		SipMediaApplicationCall?: SipMediaApplicationCall;
	}
	export interface UpdateSipMediaApplicationCallResponseFormProperties {
	}
	export function CreateUpdateSipMediaApplicationCallResponseFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallResponseFormProperties>({
		});

	}

	export interface UpdateSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface UpdateSipRuleResponseFormProperties {
	}
	export function CreateUpdateSipRuleResponseFormGroup() {
		return new FormGroup<UpdateSipRuleResponseFormProperties>({
		});

	}

	export interface UpdateUserResponse {
		User?: User;
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface UpdateVoiceConnectorResponseFormProperties {
	}
	export function CreateUpdateVoiceConnectorResponseFormGroup() {
		return new FormGroup<UpdateVoiceConnectorResponseFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface UpdateVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateUpdateVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface ValidateE911AddressResponse {
		ValidationResult?: number | null;
		AddressExternalId?: string;
		Address?: Address;
		CandidateAddressList?: Array<CandidateAddress>;
	}
	export interface ValidateE911AddressResponseFormProperties {
		ValidationResult: FormControl<number | null | undefined>,
		AddressExternalId: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressResponseFormGroup() {
		return new FormGroup<ValidateE911AddressResponseFormProperties>({
			ValidationResult: new FormControl<number | null | undefined>(undefined),
			AddressExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A validated address. */
	export interface Address {
		streetName?: string;
		streetSuffix?: string;
		postDirectional?: string;
		preDirectional?: string;
		streetNumber?: string;
		city?: string;
		state?: string;
		postalCode?: string;
		postalCodePlus4?: string;
		country?: string;
	}

	/** A validated address. */
	export interface AddressFormProperties {
		streetName: FormControl<string | null | undefined>,
		streetSuffix: FormControl<string | null | undefined>,
		postDirectional: FormControl<string | null | undefined>,
		preDirectional: FormControl<string | null | undefined>,
		streetNumber: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		postalCodePlus4: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			streetName: new FormControl<string | null | undefined>(undefined),
			streetSuffix: new FormControl<string | null | undefined>(undefined),
			postDirectional: new FormControl<string | null | undefined>(undefined),
			preDirectional: new FormControl<string | null | undefined>(undefined),
			streetNumber: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			postalCodePlus4: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A suggested address. */
	export interface CandidateAddress {
		streetInfo?: string;
		streetNumber?: string;
		city?: string;
		state?: string;
		postalCode?: string;
		postalCodePlus4?: string;
		country?: string;
	}

	/** A suggested address. */
	export interface CandidateAddressFormProperties {
		streetInfo: FormControl<string | null | undefined>,
		streetNumber: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		postalCodePlus4: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
	}
	export function CreateCandidateAddressFormGroup() {
		return new FormGroup<CandidateAddressFormProperties>({
			streetInfo: new FormControl<string | null | undefined>(undefined),
			streetNumber: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			postalCodePlus4: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumberWithUserRequest {

		/** Required */
		E164PhoneNumber: string;
	}
	export interface AssociatePhoneNumberWithUserRequestFormProperties {

		/** Required */
		E164PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePhoneNumberWithUserRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumberWithUserRequestFormProperties>({
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequestFormProperties {
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupRequestFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorRequestFormProperties {
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorRequestFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateSigninDelegateGroupsWithAccountRequest {

		/** Required */
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}
	export interface AssociateSigninDelegateGroupsWithAccountRequestFormProperties {
	}
	export function CreateAssociateSigninDelegateGroupsWithAccountRequestFormGroup() {
		return new FormGroup<AssociateSigninDelegateGroupsWithAccountRequestFormProperties>({
		});

	}

	export interface BatchCreateAttendeeRequest {

		/** Required */
		Attendees: Array<CreateAttendeeRequestItem>;
	}
	export interface BatchCreateAttendeeRequestFormProperties {
	}
	export function CreateBatchCreateAttendeeRequestFormGroup() {
		return new FormGroup<BatchCreateAttendeeRequestFormProperties>({
		});

	}

	export interface BatchCreateChannelMembershipRequest {
		Type?: ChannelMembershipType;

		/** Required */
		MemberArns: Array<string>;
	}
	export interface BatchCreateChannelMembershipRequestFormProperties {
		Type: FormControl<ChannelMembershipType | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipRequestFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipRequestFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
		});

	}

	export interface BatchCreateRoomMembershipRequest {

		/** Required */
		MembershipItemList: Array<MembershipItem>;
	}
	export interface BatchCreateRoomMembershipRequestFormProperties {
	}
	export function CreateBatchCreateRoomMembershipRequestFormGroup() {
		return new FormGroup<BatchCreateRoomMembershipRequestFormProperties>({
		});

	}

	export interface BatchDeletePhoneNumberRequest {

		/** Required */
		PhoneNumberIds: Array<string>;
	}
	export interface BatchDeletePhoneNumberRequestFormProperties {
	}
	export function CreateBatchDeletePhoneNumberRequestFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberRequestFormProperties>({
		});

	}

	export interface BatchSuspendUserRequest {

		/** Required */
		UserIdList: Array<string>;
	}
	export interface BatchSuspendUserRequestFormProperties {
	}
	export function CreateBatchSuspendUserRequestFormGroup() {
		return new FormGroup<BatchSuspendUserRequestFormProperties>({
		});

	}

	export interface BatchUnsuspendUserRequest {

		/** Required */
		UserIdList: Array<string>;
	}
	export interface BatchUnsuspendUserRequestFormProperties {
	}
	export function CreateBatchUnsuspendUserRequestFormGroup() {
		return new FormGroup<BatchUnsuspendUserRequestFormProperties>({
		});

	}

	export interface BatchUpdatePhoneNumberRequest {

		/** Required */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}
	export interface BatchUpdatePhoneNumberRequestFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberRequestFormProperties>({
		});

	}

	export interface BatchUpdateUserRequest {

		/** Required */
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}
	export interface BatchUpdateUserRequestFormProperties {
	}
	export function CreateBatchUpdateUserRequestFormGroup() {
		return new FormGroup<BatchUpdateUserRequestFormProperties>({
		});

	}

	export interface CreateAccountRequest {

		/** Required */
		Name: string;
	}
	export interface CreateAccountRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountRequestFormGroup() {
		return new FormGroup<CreateAccountRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceAdminRequest {

		/** Required */
		AppInstanceAdminArn: string;
	}
	export interface CreateAppInstanceAdminRequestFormProperties {

		/** Required */
		AppInstanceAdminArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminRequestFormGroup() {
		return new FormGroup<CreateAppInstanceAdminRequestFormProperties>({
			AppInstanceAdminArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceRequest {

		/** Required */
		Name: string;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstanceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceRequestFormGroup() {
		return new FormGroup<CreateAppInstanceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppInstanceUserRequest {

		/** Required */
		AppInstanceArn: string;

		/** Required */
		AppInstanceUserId: string;

		/** Required */
		Name: string;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstanceUserRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AppInstanceUserId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserRequestFormGroup() {
		return new FormGroup<CreateAppInstanceUserRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppInstanceUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAttendeeRequest {

		/** Required */
		ExternalUserId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAttendeeRequestFormProperties {

		/** Required */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeeRequestFormGroup() {
		return new FormGroup<CreateAttendeeRequestFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBotRequest {

		/** Required */
		DisplayName: string;
		Domain?: string;
	}
	export interface CreateBotRequestFormProperties {

		/** Required */
		DisplayName: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotRequestFormGroup() {
		return new FormGroup<CreateBotRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelBanRequest {

		/** Required */
		MemberArn: string;
	}
	export interface CreateChannelBanRequestFormProperties {

		/** Required */
		MemberArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanRequestFormGroup() {
		return new FormGroup<CreateChannelBanRequestFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelMembershipRequest {

		/** Required */
		MemberArn: string;

		/** Required */
		Type: ChannelMembershipType;
	}
	export interface CreateChannelMembershipRequestFormProperties {

		/** Required */
		MemberArn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelMembershipType | null | undefined>,
	}
	export function CreateCreateChannelMembershipRequestFormGroup() {
		return new FormGroup<CreateChannelMembershipRequestFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelModeratorRequest {

		/** Required */
		ChannelModeratorArn: string;
	}
	export interface CreateChannelModeratorRequestFormProperties {

		/** Required */
		ChannelModeratorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorRequestFormGroup() {
		return new FormGroup<CreateChannelModeratorRequestFormProperties>({
			ChannelModeratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelRequest {

		/** Required */
		AppInstanceArn: string;

		/** Required */
		Name: string;
		Mode?: ChannelMode;
		Privacy?: ChannelPrivacy;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		AppInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Mode: FormControl<ChannelMode | null | undefined>,
		Privacy: FormControl<ChannelPrivacy | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMediaCapturePipelineRequest {

		/** Required */
		SourceType: MediaPipelineSourceType;

		/** Required */
		SourceArn: string;

		/** Required */
		SinkType: MediaPipelineSinkType;

		/** Required */
		SinkArn: string;
		ClientRequestToken?: string;
		ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
	}
	export interface CreateMediaCapturePipelineRequestFormProperties {

		/** Required */
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,

		/** Required */
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,

		/** Required */
		SinkArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<CreateMediaCapturePipelineRequestFormProperties>({
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined, [Validators.required]),
			SinkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingDialOutRequest {

		/** Required */
		FromPhoneNumber: string;

		/** Required */
		ToPhoneNumber: string;

		/** Required */
		JoinToken: string;
	}
	export interface CreateMeetingDialOutRequestFormProperties {

		/** Required */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		ToPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		JoinToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingDialOutRequestFormGroup() {
		return new FormGroup<CreateMeetingDialOutRequestFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JoinToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).  */
	export interface MeetingNotificationConfiguration {
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}

	/**  The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).  */
	export interface MeetingNotificationConfigurationFormProperties {
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateMeetingNotificationConfigurationFormGroup() {
		return new FormGroup<MeetingNotificationConfigurationFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingRequest {

		/** Required */
		ClientRequestToken: string;
		ExternalMeetingId?: string;
		MeetingHostId?: string;
		MediaRegion?: string;
		Tags?: Array<Tag>;
		NotificationsConfiguration?: MeetingNotificationConfiguration;
	}
	export interface CreateMeetingRequestFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		ExternalMeetingId: FormControl<string | null | undefined>,
		MeetingHostId: FormControl<string | null | undefined>,
		MediaRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingRequestFormGroup() {
		return new FormGroup<CreateMeetingRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined),
			MeetingHostId: new FormControl<string | null | undefined>(undefined),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingWithAttendeesRequest {

		/** Required */
		ClientRequestToken: string;
		ExternalMeetingId?: string;
		MeetingHostId?: string;
		MediaRegion?: string;
		Tags?: Array<Tag>;
		NotificationsConfiguration?: MeetingNotificationConfiguration;
		Attendees?: Array<CreateAttendeeRequestItem>;
	}
	export interface CreateMeetingWithAttendeesRequestFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		ExternalMeetingId: FormControl<string | null | undefined>,
		MeetingHostId: FormControl<string | null | undefined>,
		MediaRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesRequestFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined),
			MeetingHostId: new FormControl<string | null | undefined>(undefined),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePhoneNumberOrderRequest {

		/** Required */
		ProductType: PhoneNumberProductType;

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface CreatePhoneNumberOrderRequestFormProperties {

		/** Required */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
	}
	export function CreateCreatePhoneNumberOrderRequestFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderRequestFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProxySessionRequest {

		/** Required */
		ParticipantPhoneNumbers: Array<string>;
		Name?: string;
		ExpiryMinutes?: number | null;

		/** Required */
		Capabilities: Array<Capability>;
		NumberSelectionBehavior?: NumberSelectionBehavior;
		GeoMatchLevel?: GeoMatchLevel;
		GeoMatchParams?: GeoMatchParams;
	}
	export interface CreateProxySessionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ExpiryMinutes: FormControl<number | null | undefined>,
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateCreateProxySessionRequestFormGroup() {
		return new FormGroup<CreateProxySessionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export interface CreateRoomMembershipRequest {

		/** Required */
		MemberId: string;
		Role?: RoomMembershipRole;
	}
	export interface CreateRoomMembershipRequestFormProperties {

		/** Required */
		MemberId: FormControl<string | null | undefined>,
		Role: FormControl<RoomMembershipRole | null | undefined>,
	}
	export function CreateCreateRoomMembershipRequestFormGroup() {
		return new FormGroup<CreateRoomMembershipRequestFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
		});

	}

	export interface CreateRoomRequest {

		/** Required */
		Name: string;
		ClientRequestToken?: string;
	}
	export interface CreateRoomRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomRequestFormGroup() {
		return new FormGroup<CreateRoomRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SipHeadersMap {
	}
	export interface SipHeadersMapFormProperties {
	}
	export function CreateSipHeadersMapFormGroup() {
		return new FormGroup<SipHeadersMapFormProperties>({
		});

	}

	export interface CreateSipMediaApplicationCallRequest {

		/** Required */
		FromPhoneNumber: string;

		/** Required */
		ToPhoneNumber: string;
		SipHeaders?: SipHeadersMap;
	}
	export interface CreateSipMediaApplicationCallRequestFormProperties {

		/** Required */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		ToPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationCallRequestFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallRequestFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSipMediaApplicationRequest {

		/** Required */
		AwsRegion: string;

		/** Required */
		Name: string;

		/** Required */
		Endpoints: Array<SipMediaApplicationEndpoint>;
	}
	export interface CreateSipMediaApplicationRequestFormProperties {

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationRequestFormGroup() {
		return new FormGroup<CreateSipMediaApplicationRequestFormProperties>({
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSipRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		TriggerType: SipRuleTriggerType;

		/** Required */
		TriggerValue: string;
		Disabled?: boolean | null;

		/** Required */
		TargetApplications: Array<SipRuleTargetApplication>;
	}
	export interface CreateSipRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,

		/** Required */
		TriggerValue: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSipRuleRequestFormGroup() {
		return new FormGroup<CreateSipRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined, [Validators.required]),
			TriggerValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {
		Username?: string;
		Email?: string;
		UserType?: UserType;
	}
	export interface CreateUserRequestFormProperties {
		Username: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceConnectorGroupRequest {

		/** Required */
		Name: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}
	export interface CreateVoiceConnectorGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceConnectorRequest {

		/** Required */
		Name: string;
		AwsRegion?: VoiceConnectorAwsRegion;

		/** Required */
		RequireEncryption: boolean;
	}
	export interface CreateVoiceConnectorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,

		/** Required */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateVoiceConnectorRequestFormGroup() {
		return new FormGroup<CreateVoiceConnectorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccountRequest {
	}
	export interface DeleteAccountRequestFormProperties {
	}
	export function CreateDeleteAccountRequestFormGroup() {
		return new FormGroup<DeleteAccountRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceAdminRequest {
	}
	export interface DeleteAppInstanceAdminRequestFormProperties {
	}
	export function CreateDeleteAppInstanceAdminRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceAdminRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceRequest {
	}
	export interface DeleteAppInstanceRequestFormProperties {
	}
	export function CreateDeleteAppInstanceRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceStreamingConfigurationsRequest {
	}
	export interface DeleteAppInstanceStreamingConfigurationsRequestFormProperties {
	}
	export function CreateDeleteAppInstanceStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface DeleteAppInstanceUserRequest {
	}
	export interface DeleteAppInstanceUserRequestFormProperties {
	}
	export function CreateDeleteAppInstanceUserRequestFormGroup() {
		return new FormGroup<DeleteAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DeleteAttendeeRequest {
	}
	export interface DeleteAttendeeRequestFormProperties {
	}
	export function CreateDeleteAttendeeRequestFormGroup() {
		return new FormGroup<DeleteAttendeeRequestFormProperties>({
		});

	}

	export interface DeleteChannelBanRequest {
	}
	export interface DeleteChannelBanRequestFormProperties {
	}
	export function CreateDeleteChannelBanRequestFormGroup() {
		return new FormGroup<DeleteChannelBanRequestFormProperties>({
		});

	}

	export interface DeleteChannelMembershipRequest {
	}
	export interface DeleteChannelMembershipRequestFormProperties {
	}
	export function CreateDeleteChannelMembershipRequestFormGroup() {
		return new FormGroup<DeleteChannelMembershipRequestFormProperties>({
		});

	}

	export interface DeleteChannelMessageRequest {
	}
	export interface DeleteChannelMessageRequestFormProperties {
	}
	export function CreateDeleteChannelMessageRequestFormGroup() {
		return new FormGroup<DeleteChannelMessageRequestFormProperties>({
		});

	}

	export interface DeleteChannelModeratorRequest {
	}
	export interface DeleteChannelModeratorRequestFormProperties {
	}
	export function CreateDeleteChannelModeratorRequestFormGroup() {
		return new FormGroup<DeleteChannelModeratorRequestFormProperties>({
		});

	}

	export interface DeleteChannelRequest {
	}
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}

	export interface DeleteEventsConfigurationRequest {
	}
	export interface DeleteEventsConfigurationRequestFormProperties {
	}
	export function CreateDeleteEventsConfigurationRequestFormGroup() {
		return new FormGroup<DeleteEventsConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteMediaCapturePipelineRequest {
	}
	export interface DeleteMediaCapturePipelineRequestFormProperties {
	}
	export function CreateDeleteMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<DeleteMediaCapturePipelineRequestFormProperties>({
		});

	}

	export interface DeleteMeetingRequest {
	}
	export interface DeleteMeetingRequestFormProperties {
	}
	export function CreateDeleteMeetingRequestFormGroup() {
		return new FormGroup<DeleteMeetingRequestFormProperties>({
		});

	}

	export interface DeletePhoneNumberRequest {
	}
	export interface DeletePhoneNumberRequestFormProperties {
	}
	export function CreateDeletePhoneNumberRequestFormGroup() {
		return new FormGroup<DeletePhoneNumberRequestFormProperties>({
		});

	}

	export interface DeleteProxySessionRequest {
	}
	export interface DeleteProxySessionRequestFormProperties {
	}
	export function CreateDeleteProxySessionRequestFormGroup() {
		return new FormGroup<DeleteProxySessionRequestFormProperties>({
		});

	}

	export interface DeleteRoomMembershipRequest {
	}
	export interface DeleteRoomMembershipRequestFormProperties {
	}
	export function CreateDeleteRoomMembershipRequestFormGroup() {
		return new FormGroup<DeleteRoomMembershipRequestFormProperties>({
		});

	}

	export interface DeleteRoomRequest {
	}
	export interface DeleteRoomRequestFormProperties {
	}
	export function CreateDeleteRoomRequestFormGroup() {
		return new FormGroup<DeleteRoomRequestFormProperties>({
		});

	}

	export interface DeleteSipMediaApplicationRequest {
	}
	export interface DeleteSipMediaApplicationRequestFormProperties {
	}
	export function CreateDeleteSipMediaApplicationRequestFormGroup() {
		return new FormGroup<DeleteSipMediaApplicationRequestFormProperties>({
		});

	}

	export interface DeleteSipRuleRequest {
	}
	export interface DeleteSipRuleRequestFormProperties {
	}
	export function CreateDeleteSipRuleRequestFormGroup() {
		return new FormGroup<DeleteSipRuleRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
	}
	export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorGroupRequest {
	}
	export interface DeleteVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorOriginationRequest {
	}
	export interface DeleteVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorProxyRequest {
	}
	export interface DeleteVoiceConnectorProxyRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorProxyRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorRequest {
	}
	export interface DeleteVoiceConnectorRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorStreamingConfigurationRequest {
	}
	export interface DeleteVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorTerminationCredentialsRequest {

		/** Required */
		Usernames: Array<string>;
	}
	export interface DeleteVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorTerminationRequest {
	}
	export interface DeleteVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceAdminRequest {
	}
	export interface DescribeAppInstanceAdminRequestFormProperties {
	}
	export function CreateDescribeAppInstanceAdminRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceAdminRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceRequest {
	}
	export interface DescribeAppInstanceRequestFormProperties {
	}
	export function CreateDescribeAppInstanceRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceRequestFormProperties>({
		});

	}

	export interface DescribeAppInstanceUserRequest {
	}
	export interface DescribeAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DescribeChannelBanRequest {
	}
	export interface DescribeChannelBanRequestFormProperties {
	}
	export function CreateDescribeChannelBanRequestFormGroup() {
		return new FormGroup<DescribeChannelBanRequestFormProperties>({
		});

	}

	export interface DescribeChannelMembershipForAppInstanceUserRequest {
	}
	export interface DescribeChannelMembershipForAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeChannelMembershipForAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeChannelMembershipForAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DescribeChannelMembershipRequest {
	}
	export interface DescribeChannelMembershipRequestFormProperties {
	}
	export function CreateDescribeChannelMembershipRequestFormGroup() {
		return new FormGroup<DescribeChannelMembershipRequestFormProperties>({
		});

	}

	export interface DescribeChannelModeratedByAppInstanceUserRequest {
	}
	export interface DescribeChannelModeratedByAppInstanceUserRequestFormProperties {
	}
	export function CreateDescribeChannelModeratedByAppInstanceUserRequestFormGroup() {
		return new FormGroup<DescribeChannelModeratedByAppInstanceUserRequestFormProperties>({
		});

	}

	export interface DescribeChannelModeratorRequest {
	}
	export interface DescribeChannelModeratorRequestFormProperties {
	}
	export function CreateDescribeChannelModeratorRequestFormGroup() {
		return new FormGroup<DescribeChannelModeratorRequestFormProperties>({
		});

	}

	export interface DescribeChannelRequest {
	}
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumberFromUserRequest {
	}
	export interface DisassociatePhoneNumberFromUserRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumberFromUserRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumberFromUserRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorRequestFormProperties>({
		});

	}

	export interface DisassociateSigninDelegateGroupsFromAccountRequest {

		/** Required */
		GroupNames: Array<string>;
	}
	export interface DisassociateSigninDelegateGroupsFromAccountRequestFormProperties {
	}
	export function CreateDisassociateSigninDelegateGroupsFromAccountRequestFormGroup() {
		return new FormGroup<DisassociateSigninDelegateGroupsFromAccountRequestFormProperties>({
		});

	}

	export enum TranscribeContentRedactionType { PII = 'PII' }

	export interface GetAccountRequest {
	}
	export interface GetAccountRequestFormProperties {
	}
	export function CreateGetAccountRequestFormGroup() {
		return new FormGroup<GetAccountRequestFormProperties>({
		});

	}

	export interface GetAccountSettingsRequest {
	}
	export interface GetAccountSettingsRequestFormProperties {
	}
	export function CreateGetAccountSettingsRequestFormGroup() {
		return new FormGroup<GetAccountSettingsRequestFormProperties>({
		});

	}

	export interface GetAppInstanceRetentionSettingsRequest {
	}
	export interface GetAppInstanceRetentionSettingsRequestFormProperties {
	}
	export function CreateGetAppInstanceRetentionSettingsRequestFormGroup() {
		return new FormGroup<GetAppInstanceRetentionSettingsRequestFormProperties>({
		});

	}

	export interface GetAppInstanceStreamingConfigurationsRequest {
	}
	export interface GetAppInstanceStreamingConfigurationsRequestFormProperties {
	}
	export function CreateGetAppInstanceStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<GetAppInstanceStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface GetAttendeeRequest {
	}
	export interface GetAttendeeRequestFormProperties {
	}
	export function CreateGetAttendeeRequestFormGroup() {
		return new FormGroup<GetAttendeeRequestFormProperties>({
		});

	}

	export interface GetBotRequest {
	}
	export interface GetBotRequestFormProperties {
	}
	export function CreateGetBotRequestFormGroup() {
		return new FormGroup<GetBotRequestFormProperties>({
		});

	}

	export interface GetChannelMessageRequest {
	}
	export interface GetChannelMessageRequestFormProperties {
	}
	export function CreateGetChannelMessageRequestFormGroup() {
		return new FormGroup<GetChannelMessageRequestFormProperties>({
		});

	}

	export interface GetEventsConfigurationRequest {
	}
	export interface GetEventsConfigurationRequestFormProperties {
	}
	export function CreateGetEventsConfigurationRequestFormGroup() {
		return new FormGroup<GetEventsConfigurationRequestFormProperties>({
		});

	}

	export interface GetMediaCapturePipelineRequest {
	}
	export interface GetMediaCapturePipelineRequestFormProperties {
	}
	export function CreateGetMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<GetMediaCapturePipelineRequestFormProperties>({
		});

	}

	export interface GetMeetingRequest {
	}
	export interface GetMeetingRequestFormProperties {
	}
	export function CreateGetMeetingRequestFormGroup() {
		return new FormGroup<GetMeetingRequestFormProperties>({
		});

	}

	export interface GetMessagingSessionEndpointRequest {
	}
	export interface GetMessagingSessionEndpointRequestFormProperties {
	}
	export function CreateGetMessagingSessionEndpointRequestFormGroup() {
		return new FormGroup<GetMessagingSessionEndpointRequestFormProperties>({
		});

	}

	export interface GetPhoneNumberOrderRequest {
	}
	export interface GetPhoneNumberOrderRequestFormProperties {
	}
	export function CreateGetPhoneNumberOrderRequestFormGroup() {
		return new FormGroup<GetPhoneNumberOrderRequestFormProperties>({
		});

	}

	export interface GetPhoneNumberRequest {
	}
	export interface GetPhoneNumberRequestFormProperties {
	}
	export function CreateGetPhoneNumberRequestFormGroup() {
		return new FormGroup<GetPhoneNumberRequestFormProperties>({
		});

	}

	export interface GetProxySessionRequest {
	}
	export interface GetProxySessionRequestFormProperties {
	}
	export function CreateGetProxySessionRequestFormGroup() {
		return new FormGroup<GetProxySessionRequestFormProperties>({
		});

	}

	export interface GetRetentionSettingsRequest {
	}
	export interface GetRetentionSettingsRequestFormProperties {
	}
	export function CreateGetRetentionSettingsRequestFormGroup() {
		return new FormGroup<GetRetentionSettingsRequestFormProperties>({
		});

	}

	export interface GetRoomRequest {
	}
	export interface GetRoomRequestFormProperties {
	}
	export function CreateGetRoomRequestFormGroup() {
		return new FormGroup<GetRoomRequestFormProperties>({
		});

	}

	export interface GetSipMediaApplicationLoggingConfigurationRequest {
	}
	export interface GetSipMediaApplicationLoggingConfigurationRequestFormProperties {
	}
	export function CreateGetSipMediaApplicationLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetSipMediaApplicationLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface GetSipMediaApplicationRequest {
	}
	export interface GetSipMediaApplicationRequestFormProperties {
	}
	export function CreateGetSipMediaApplicationRequestFormGroup() {
		return new FormGroup<GetSipMediaApplicationRequestFormProperties>({
		});

	}

	export interface GetSipRuleRequest {
	}
	export interface GetSipRuleRequestFormProperties {
	}
	export function CreateGetSipRuleRequestFormGroup() {
		return new FormGroup<GetSipRuleRequestFormProperties>({
		});

	}

	export interface GetUserRequest {
	}
	export interface GetUserRequestFormProperties {
	}
	export function CreateGetUserRequestFormGroup() {
		return new FormGroup<GetUserRequestFormProperties>({
		});

	}

	export interface GetUserSettingsRequest {
	}
	export interface GetUserSettingsRequestFormProperties {
	}
	export function CreateGetUserSettingsRequestFormGroup() {
		return new FormGroup<GetUserSettingsRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
	}
	export interface GetVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorGroupRequest {
	}
	export interface GetVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateGetVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorLoggingConfigurationRequest {
	}
	export interface GetVoiceConnectorLoggingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorOriginationRequest {
	}
	export interface GetVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorProxyRequest {
	}
	export interface GetVoiceConnectorProxyRequestFormProperties {
	}
	export function CreateGetVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorProxyRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorRequest {
	}
	export interface GetVoiceConnectorRequestFormProperties {
	}
	export function CreateGetVoiceConnectorRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorStreamingConfigurationRequest {
	}
	export interface GetVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorTerminationHealthRequest {
	}
	export interface GetVoiceConnectorTerminationHealthRequestFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationHealthRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationHealthRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorTerminationRequest {
	}
	export interface GetVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface InviteUsersRequest {

		/** Required */
		UserEmailList: Array<string>;
		UserType?: UserType;
	}
	export interface InviteUsersRequestFormProperties {
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateInviteUsersRequestFormGroup() {
		return new FormGroup<InviteUsersRequestFormProperties>({
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export interface ListAccountsRequest {
	}
	export interface ListAccountsRequestFormProperties {
	}
	export function CreateListAccountsRequestFormGroup() {
		return new FormGroup<ListAccountsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceAdminsRequest {
	}
	export interface ListAppInstanceAdminsRequestFormProperties {
	}
	export function CreateListAppInstanceAdminsRequestFormGroup() {
		return new FormGroup<ListAppInstanceAdminsRequestFormProperties>({
		});

	}

	export interface ListAppInstanceUsersRequest {
	}
	export interface ListAppInstanceUsersRequestFormProperties {
	}
	export function CreateListAppInstanceUsersRequestFormGroup() {
		return new FormGroup<ListAppInstanceUsersRequestFormProperties>({
		});

	}

	export interface ListAppInstancesRequest {
	}
	export interface ListAppInstancesRequestFormProperties {
	}
	export function CreateListAppInstancesRequestFormGroup() {
		return new FormGroup<ListAppInstancesRequestFormProperties>({
		});

	}

	export interface ListAttendeeTagsRequest {
	}
	export interface ListAttendeeTagsRequestFormProperties {
	}
	export function CreateListAttendeeTagsRequestFormGroup() {
		return new FormGroup<ListAttendeeTagsRequestFormProperties>({
		});

	}

	export interface ListAttendeesRequest {
	}
	export interface ListAttendeesRequestFormProperties {
	}
	export function CreateListAttendeesRequestFormGroup() {
		return new FormGroup<ListAttendeesRequestFormProperties>({
		});

	}

	export interface ListBotsRequest {
	}
	export interface ListBotsRequestFormProperties {
	}
	export function CreateListBotsRequestFormGroup() {
		return new FormGroup<ListBotsRequestFormProperties>({
		});

	}

	export interface ListChannelBansRequest {
	}
	export interface ListChannelBansRequestFormProperties {
	}
	export function CreateListChannelBansRequestFormGroup() {
		return new FormGroup<ListChannelBansRequestFormProperties>({
		});

	}

	export interface ListChannelMembershipsForAppInstanceUserRequest {
	}
	export interface ListChannelMembershipsForAppInstanceUserRequestFormProperties {
	}
	export function CreateListChannelMembershipsForAppInstanceUserRequestFormGroup() {
		return new FormGroup<ListChannelMembershipsForAppInstanceUserRequestFormProperties>({
		});

	}

	export interface ListChannelMembershipsRequest {
	}
	export interface ListChannelMembershipsRequestFormProperties {
	}
	export function CreateListChannelMembershipsRequestFormGroup() {
		return new FormGroup<ListChannelMembershipsRequestFormProperties>({
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListChannelMessagesRequest {
	}
	export interface ListChannelMessagesRequestFormProperties {
	}
	export function CreateListChannelMessagesRequestFormGroup() {
		return new FormGroup<ListChannelMessagesRequestFormProperties>({
		});

	}

	export interface ListChannelModeratorsRequest {
	}
	export interface ListChannelModeratorsRequestFormProperties {
	}
	export function CreateListChannelModeratorsRequestFormGroup() {
		return new FormGroup<ListChannelModeratorsRequestFormProperties>({
		});

	}

	export interface ListChannelsModeratedByAppInstanceUserRequest {
	}
	export interface ListChannelsModeratedByAppInstanceUserRequestFormProperties {
	}
	export function CreateListChannelsModeratedByAppInstanceUserRequestFormGroup() {
		return new FormGroup<ListChannelsModeratedByAppInstanceUserRequestFormProperties>({
		});

	}

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListMediaCapturePipelinesRequest {
	}
	export interface ListMediaCapturePipelinesRequestFormProperties {
	}
	export function CreateListMediaCapturePipelinesRequestFormGroup() {
		return new FormGroup<ListMediaCapturePipelinesRequestFormProperties>({
		});

	}

	export interface ListMeetingTagsRequest {
	}
	export interface ListMeetingTagsRequestFormProperties {
	}
	export function CreateListMeetingTagsRequestFormGroup() {
		return new FormGroup<ListMeetingTagsRequestFormProperties>({
		});

	}

	export interface ListMeetingsRequest {
	}
	export interface ListMeetingsRequestFormProperties {
	}
	export function CreateListMeetingsRequestFormGroup() {
		return new FormGroup<ListMeetingsRequestFormProperties>({
		});

	}

	export interface ListPhoneNumberOrdersRequest {
	}
	export interface ListPhoneNumberOrdersRequestFormProperties {
	}
	export function CreateListPhoneNumberOrdersRequestFormGroup() {
		return new FormGroup<ListPhoneNumberOrdersRequestFormProperties>({
		});

	}

	export interface ListPhoneNumbersRequest {
	}
	export interface ListPhoneNumbersRequestFormProperties {
	}
	export function CreateListPhoneNumbersRequestFormGroup() {
		return new FormGroup<ListPhoneNumbersRequestFormProperties>({
		});

	}

	export interface ListProxySessionsRequest {
	}
	export interface ListProxySessionsRequestFormProperties {
	}
	export function CreateListProxySessionsRequestFormGroup() {
		return new FormGroup<ListProxySessionsRequestFormProperties>({
		});

	}

	export interface ListRoomMembershipsRequest {
	}
	export interface ListRoomMembershipsRequestFormProperties {
	}
	export function CreateListRoomMembershipsRequestFormGroup() {
		return new FormGroup<ListRoomMembershipsRequestFormProperties>({
		});

	}

	export interface ListRoomsRequest {
	}
	export interface ListRoomsRequestFormProperties {
	}
	export function CreateListRoomsRequestFormGroup() {
		return new FormGroup<ListRoomsRequestFormProperties>({
		});

	}

	export interface ListSipMediaApplicationsRequest {
	}
	export interface ListSipMediaApplicationsRequestFormProperties {
	}
	export function CreateListSipMediaApplicationsRequestFormGroup() {
		return new FormGroup<ListSipMediaApplicationsRequestFormProperties>({
		});

	}

	export interface ListSipRulesRequest {
	}
	export interface ListSipRulesRequestFormProperties {
	}
	export function CreateListSipRulesRequestFormGroup() {
		return new FormGroup<ListSipRulesRequestFormProperties>({
		});

	}

	export interface ListSupportedPhoneNumberCountriesRequest {
	}
	export interface ListSupportedPhoneNumberCountriesRequestFormProperties {
	}
	export function CreateListSupportedPhoneNumberCountriesRequestFormGroup() {
		return new FormGroup<ListSupportedPhoneNumberCountriesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListUsersRequest {
	}
	export interface ListUsersRequestFormProperties {
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
		});

	}

	export interface ListVoiceConnectorGroupsRequest {
	}
	export interface ListVoiceConnectorGroupsRequestFormProperties {
	}
	export function CreateListVoiceConnectorGroupsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorGroupsRequestFormProperties>({
		});

	}

	export interface ListVoiceConnectorTerminationCredentialsRequest {
	}
	export interface ListVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreateListVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface ListVoiceConnectorsRequest {
	}
	export interface ListVoiceConnectorsRequestFormProperties {
	}
	export function CreateListVoiceConnectorsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorsRequestFormProperties>({
		});

	}

	export interface LogoutUserRequest {
	}
	export interface LogoutUserRequestFormProperties {
	}
	export function CreateLogoutUserRequestFormGroup() {
		return new FormGroup<LogoutUserRequestFormProperties>({
		});

	}

	export interface PutAppInstanceRetentionSettingsRequest {

		/** Required */
		AppInstanceRetentionSettings: AppInstanceRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsRequestFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsRequestFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsRequestFormProperties>({
		});

	}

	export interface PutAppInstanceStreamingConfigurationsRequest {

		/** Required */
		AppInstanceStreamingConfigurations: Array<AppInstanceStreamingConfiguration>;
	}
	export interface PutAppInstanceStreamingConfigurationsRequestFormProperties {
	}
	export function CreatePutAppInstanceStreamingConfigurationsRequestFormGroup() {
		return new FormGroup<PutAppInstanceStreamingConfigurationsRequestFormProperties>({
		});

	}

	export interface PutEventsConfigurationRequest {
		OutboundEventsHTTPSEndpoint?: string;
		LambdaFunctionArn?: string;
	}
	export interface PutEventsConfigurationRequestFormProperties {
		OutboundEventsHTTPSEndpoint: FormControl<string | null | undefined>,
		LambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsConfigurationRequestFormGroup() {
		return new FormGroup<PutEventsConfigurationRequestFormProperties>({
			OutboundEventsHTTPSEndpoint: new FormControl<string | null | undefined>(undefined),
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRetentionSettingsRequest {

		/** Required */
		RetentionSettings: RetentionSettings;
	}
	export interface PutRetentionSettingsRequestFormProperties {
	}
	export function CreatePutRetentionSettingsRequestFormGroup() {
		return new FormGroup<PutRetentionSettingsRequestFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationRequest {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {

		/** Required */
		EmergencyCallingConfiguration: EmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationRequest {

		/** Required */
		LoggingConfiguration: LoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationRequest {

		/** Required */
		Origination: Origination;
	}
	export interface PutVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorProxyRequest {

		/** Required */
		DefaultSessionExpiryMinutes: number;

		/** Required */
		PhoneNumberPoolCountries: Array<string>;
		FallBackPhoneNumber?: string;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorProxyRequestFormProperties {

		/** Required */
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,
		FallBackPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyRequestFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationRequest {

		/** Required */
		StreamingConfiguration: StreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationCredentialsRequest {
		Credentials?: Array<Credential>;
	}
	export interface PutVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationRequest {

		/** Required */
		Termination: Termination;
	}
	export interface PutVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface RedactChannelMessageRequest {
	}
	export interface RedactChannelMessageRequestFormProperties {
	}
	export function CreateRedactChannelMessageRequestFormGroup() {
		return new FormGroup<RedactChannelMessageRequestFormProperties>({
		});

	}

	export interface RedactConversationMessageRequest {
	}
	export interface RedactConversationMessageRequestFormProperties {
	}
	export function CreateRedactConversationMessageRequestFormGroup() {
		return new FormGroup<RedactConversationMessageRequestFormProperties>({
		});

	}

	export interface RedactRoomMessageRequest {
	}
	export interface RedactRoomMessageRequestFormProperties {
	}
	export function CreateRedactRoomMessageRequestFormGroup() {
		return new FormGroup<RedactRoomMessageRequestFormProperties>({
		});

	}

	export interface RegenerateSecurityTokenRequest {
	}
	export interface RegenerateSecurityTokenRequestFormProperties {
	}
	export function CreateRegenerateSecurityTokenRequestFormGroup() {
		return new FormGroup<RegenerateSecurityTokenRequestFormProperties>({
		});

	}

	export interface ResetPersonalPINRequest {
	}
	export interface ResetPersonalPINRequestFormProperties {
	}
	export function CreateResetPersonalPINRequestFormGroup() {
		return new FormGroup<ResetPersonalPINRequestFormProperties>({
		});

	}

	export interface RestorePhoneNumberRequest {
	}
	export interface RestorePhoneNumberRequestFormProperties {
	}
	export function CreateRestorePhoneNumberRequestFormGroup() {
		return new FormGroup<RestorePhoneNumberRequestFormProperties>({
		});

	}

	export interface SMAUpdateCallArgumentsMap {
	}
	export interface SMAUpdateCallArgumentsMapFormProperties {
	}
	export function CreateSMAUpdateCallArgumentsMapFormGroup() {
		return new FormGroup<SMAUpdateCallArgumentsMapFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersRequest {
	}
	export interface SearchAvailablePhoneNumbersRequestFormProperties {
	}
	export function CreateSearchAvailablePhoneNumbersRequestFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersRequestFormProperties>({
		});

	}

	export interface SendChannelMessageRequest {

		/** Required */
		Content: string;

		/** Required */
		Type: ChannelMessageType;

		/** Required */
		Persistence: ChannelMessagePersistenceType;
		Metadata?: string;

		/** Required */
		ClientRequestToken: string;
	}
	export interface SendChannelMessageRequestFormProperties {

		/** Required */
		Content: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelMessageType | null | undefined>,

		/** Required */
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessageRequestFormGroup() {
		return new FormGroup<SendChannelMessageRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined, [Validators.required]),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>. */
	export interface TranscriptionConfiguration {
		EngineTranscribeSettings?: EngineTranscribeSettings;
		EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
	}

	/** The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>. */
	export interface TranscriptionConfigurationFormProperties {
	}
	export function CreateTranscriptionConfigurationFormGroup() {
		return new FormGroup<TranscriptionConfigurationFormProperties>({
		});

	}

	export interface StartMeetingTranscriptionRequest {

		/** Required */
		TranscriptionConfiguration: TranscriptionConfiguration;
	}
	export interface StartMeetingTranscriptionRequestFormProperties {
	}
	export function CreateStartMeetingTranscriptionRequestFormGroup() {
		return new FormGroup<StartMeetingTranscriptionRequestFormProperties>({
		});

	}

	export interface StopMeetingTranscriptionRequest {
	}
	export interface StopMeetingTranscriptionRequestFormProperties {
	}
	export function CreateStopMeetingTranscriptionRequestFormGroup() {
		return new FormGroup<StopMeetingTranscriptionRequestFormProperties>({
		});

	}

	export interface TagAttendeeRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagAttendeeRequestFormProperties {
	}
	export function CreateTagAttendeeRequestFormGroup() {
		return new FormGroup<TagAttendeeRequestFormProperties>({
		});

	}

	export interface TagMeetingRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagMeetingRequestFormProperties {
	}
	export function CreateTagMeetingRequestFormGroup() {
		return new FormGroup<TagMeetingRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagAttendeeRequest {

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagAttendeeRequestFormProperties {
	}
	export function CreateUntagAttendeeRequestFormGroup() {
		return new FormGroup<UntagAttendeeRequestFormProperties>({
		});

	}

	export interface UntagMeetingRequest {

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagMeetingRequestFormProperties {
	}
	export function CreateUntagMeetingRequestFormGroup() {
		return new FormGroup<UntagMeetingRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountRequest {
		Name?: string;
		DefaultLicense?: License;
	}
	export interface UpdateAccountRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		DefaultLicense: FormControl<License | null | undefined>,
	}
	export function CreateUpdateAccountRequestFormGroup() {
		return new FormGroup<UpdateAccountRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DefaultLicense: new FormControl<License | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountSettingsRequest {

		/** Required */
		AccountSettings: AccountSettings;
	}
	export interface UpdateAccountSettingsRequestFormProperties {
	}
	export function CreateUpdateAccountSettingsRequestFormGroup() {
		return new FormGroup<UpdateAccountSettingsRequestFormProperties>({
		});

	}

	export interface UpdateAppInstanceRequest {

		/** Required */
		Name: string;
		Metadata?: string;
	}
	export interface UpdateAppInstanceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstanceUserRequest {

		/** Required */
		Name: string;
		Metadata?: string;
	}
	export interface UpdateAppInstanceUserRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserRequestFormGroup() {
		return new FormGroup<UpdateAppInstanceUserRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBotRequest {
		Disabled?: boolean | null;
	}
	export interface UpdateBotRequestFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBotRequestFormGroup() {
		return new FormGroup<UpdateBotRequestFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelMessageRequest {
		Content?: string;
		Metadata?: string;
	}
	export interface UpdateChannelMessageRequestFormProperties {
		Content: FormControl<string | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessageRequestFormGroup() {
		return new FormGroup<UpdateChannelMessageRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelReadMarkerRequest {
	}
	export interface UpdateChannelReadMarkerRequestFormProperties {
	}
	export function CreateUpdateChannelReadMarkerRequestFormGroup() {
		return new FormGroup<UpdateChannelReadMarkerRequestFormProperties>({
		});

	}

	export interface UpdateChannelRequest {

		/** Required */
		Name: string;

		/** Required */
		Mode: ChannelMode;
		Metadata?: string;
	}
	export interface UpdateChannelRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Mode: FormControl<ChannelMode | null | undefined>,
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsRequest {
		BusinessCalling?: BusinessCallingSettings;
		VoiceConnector?: VoiceConnectorSettings;
	}
	export interface UpdateGlobalSettingsRequestFormProperties {
	}
	export function CreateUpdateGlobalSettingsRequestFormGroup() {
		return new FormGroup<UpdateGlobalSettingsRequestFormProperties>({
		});

	}

	export interface UpdatePhoneNumberRequest {
		ProductType?: PhoneNumberProductType;
		CallingName?: string;
	}
	export interface UpdatePhoneNumberRequestFormProperties {
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberSettingsRequest {

		/** Required */
		CallingName: string;
	}
	export interface UpdatePhoneNumberSettingsRequestFormProperties {

		/** Required */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberSettingsRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberSettingsRequestFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProxySessionRequest {

		/** Required */
		Capabilities: Array<Capability>;
		ExpiryMinutes?: number | null;
	}
	export interface UpdateProxySessionRequestFormProperties {
		ExpiryMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProxySessionRequestFormGroup() {
		return new FormGroup<UpdateProxySessionRequestFormProperties>({
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRoomMembershipRequest {
		Role?: RoomMembershipRole;
	}
	export interface UpdateRoomMembershipRequestFormProperties {
		Role: FormControl<RoomMembershipRole | null | undefined>,
	}
	export function CreateUpdateRoomMembershipRequestFormGroup() {
		return new FormGroup<UpdateRoomMembershipRequestFormProperties>({
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
		});

	}

	export interface UpdateRoomRequest {
		Name?: string;
	}
	export interface UpdateRoomRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomRequestFormGroup() {
		return new FormGroup<UpdateRoomRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSipMediaApplicationCallRequest {

		/** Required */
		Arguments: SMAUpdateCallArgumentsMap;
	}
	export interface UpdateSipMediaApplicationCallRequestFormProperties {
	}
	export function CreateUpdateSipMediaApplicationCallRequestFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallRequestFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationRequest {
		Name?: string;
		Endpoints?: Array<SipMediaApplicationEndpoint>;
	}
	export interface UpdateSipMediaApplicationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationRequestFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSipRuleRequest {

		/** Required */
		Name: string;
		Disabled?: boolean | null;
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface UpdateSipRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSipRuleRequestFormGroup() {
		return new FormGroup<UpdateSipRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRequest {
		LicenseType?: License;
		UserType?: UserType;
		AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
	}
	export interface UpdateUserRequestFormProperties {
		LicenseType: FormControl<License | null | undefined>,
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			LicenseType: new FormControl<License | null | undefined>(undefined),
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserSettingsRequest {

		/** Required */
		UserSettings: UserSettings;
	}
	export interface UpdateUserSettingsRequestFormProperties {
	}
	export function CreateUpdateUserSettingsRequestFormGroup() {
		return new FormGroup<UpdateUserSettingsRequestFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}
	export interface UpdateVoiceConnectorGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVoiceConnectorRequest {

		/** Required */
		Name: string;

		/** Required */
		RequireEncryption: boolean;
	}
	export interface UpdateVoiceConnectorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorRequestFormGroup() {
		return new FormGroup<UpdateVoiceConnectorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateE911AddressRequest {

		/** Required */
		AwsAccountId: string;

		/** Required */
		StreetNumber: string;

		/** Required */
		StreetInfo: string;

		/** Required */
		City: string;

		/** Required */
		State: string;

		/** Required */
		Country: string;

		/** Required */
		PostalCode: string;
	}
	export interface ValidateE911AddressRequestFormProperties {

		/** Required */
		AwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		StreetNumber: FormControl<string | null | undefined>,

		/** Required */
		StreetInfo: FormControl<string | null | undefined>,

		/** Required */
		City: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<string | null | undefined>,

		/** Required */
		Country: FormControl<string | null | undefined>,

		/** Required */
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressRequestFormGroup() {
		return new FormGroup<ValidateE911AddressRequestFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreetNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreetInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * <p>Associates phone numbers with the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_AssociatePhoneNumbersWithVoiceConnector.html">AssociatePhoneNumbersWithVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnector(voiceConnectorId: string, operation: AssociatePhoneNumbersWithVoiceConnectorOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorResponse> {
			return this.http.post<AssociatePhoneNumbersWithVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=associate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates phone numbers with the specified Amazon Chime Voice Connector group.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_AssociatePhoneNumbersWithVoiceConnectorGroup.html">AssociatePhoneNumbersWithVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorGroupResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnectorGroup(voiceConnectorGroupId: string, operation: AssociatePhoneNumbersWithVoiceConnectorOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorGroupPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorGroupResponse> {
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
		 * <p>Creates up to 100 new attendees for an active Amazon Chime SDK meeting.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_BatchCreateAttendee.html">BatchCreateAttendee</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important> <p>For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. </p>
		 * Post meetings/{meetingId}/attendees#operation=batch-create
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		BatchCreateAttendee(meetingId: string, operation: BatchCreateAttendeeOperation, requestBody: BatchCreateAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds a specified number of users to a channel.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_BatchCreateChannelMembership.html">BatchCreateChannelMembership</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/memberships#operation=batch-create
		 * @param {string} channelArn The ARN of the channel to which you're adding users.
		 * @return {BatchCreateChannelMembershipResponse} Success
		 */
		BatchCreateChannelMembership(channelArn: string, operation: BatchCreateAttendeeOperation, requestBody: BatchCreateChannelMembershipPostBody): Observable<BatchCreateChannelMembershipResponse> {
			return this.http.post<BatchCreateChannelMembershipResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.
		 * Post accounts/{accountId}/rooms/{roomId}/memberships#operation=batch-create
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @return {void} 
		 */
		BatchCreateRoomMembership(accountId: string, roomId: string, operation: BatchCreateAttendeeOperation, requestBody: BatchCreateRoomMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/rooms/' + (roomId == null ? '' : encodeURIComponent(roomId)) + '/memberships#operation=batch-create&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. </p> <p> Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently. </p>
		 * Post phone-numbers#operation=batch-delete
		 * @return {BatchDeletePhoneNumberResponse} Success
		 */
		BatchDeletePhoneNumber(operation: BatchDeletePhoneNumberOperation, requestBody: BatchDeletePhoneNumberPostBody): Observable<BatchDeletePhoneNumberResponse> {
			return this.http.post<BatchDeletePhoneNumberResponse>(this.baseUri + 'phone-numbers#operation=batch-delete?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p> <p> To sign out users without suspending them, use the <a>LogoutUser</a> action.</p>
		 * Post accounts/{accountId}/users#operation=suspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchSuspendUserResponse} Success
		 */
		BatchSuspendUser(accountId: string, operation: BatchSuspendUserOperation, requestBody: BatchSuspendUserPostBody): Observable<BatchSuspendUserResponse> {
			return this.http.post<BatchSuspendUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=suspend&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html"> Managing Your Amazon Chime Accounts </a> in the account types, in the <i>Amazon Chime Administration Guide</i>. </p> <p>Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored.</p>
		 * Post accounts/{accountId}/users#operation=unsuspend
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {BatchUnsuspendUserResponse} Success
		 */
		BatchUnsuspendUser(accountId: string, operation: BatchUnsuspendUserOperation, requestBody: BatchUnsuspendUserPostBody): Observable<BatchUnsuspendUserResponse> {
			return this.http.post<BatchUnsuspendUserResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/users#operation=unsuspend&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
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
		 * @param {UserType} user_type The user type.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(accountId: string, user_email: string | null | undefined, user_type: UserType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUsersResponse> {
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
		 * <p>Creates an Amazon Chime SDK messaging <code>AppInstance</code> under an AWS account. Only SDK messaging customers use this API. <code>CreateAppInstance</code> supports idempotency behavior as described in the AWS API Standard.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstance.html">CreateAppInstance</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post app-instances
		 * @return {void} 
		 */
		CreateAppInstance(requestBody: CreateAppInstancePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS account.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstances.html">ListAppInstances</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances
		 * @param {number} max_results The maximum number of <code>AppInstance</code>s that you want to return.
		 * @param {string} next_token The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstancesResponse} Success
		 */
		ListAppInstances(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstancesResponse> {
			return this.http.get<ListAppInstancesResponse>(this.baseUri + 'app-instances?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Promotes an <code>AppInstanceUser</code> to an <code>AppInstanceAdmin</code>. The promoted user can perform the following actions. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceAdmin.html">CreateAppInstanceAdmin</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important> <ul> <li> <p> <code>ChannelModerator</code> actions across all channels in the <code>AppInstance</code>.</p> </li> <li> <p> <code>DeleteChannelMessage</code> actions.</p> </li> </ul> <p>Only an <code>AppInstanceUser</code> can be promoted to an <code>AppInstanceAdmin</code> role.</p>
		 * Post app-instances/{appInstanceArn}/admins
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		CreateAppInstanceAdmin(appInstanceArn: string, requestBody: CreateAppInstanceAdminPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceAdmins.html">ListAppInstanceAdmins</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances/{appInstanceArn}/admins
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @param {number} max_results The maximum number of administrators that you want to return.
		 * @param {string} next_token The token returned from previous API requests until the number of administrators is reached.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceAdminsResponse} Success
		 */
		ListAppInstanceAdmins(appInstanceArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceAdminsResponse> {
			return this.http.get<ListAppInstanceAdminsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a unique <code>appInstanceUserId</code> and <code>Name</code> for that user.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstanceUser.html">CreateAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post app-instance-users
		 * @return {void} 
		 */
		CreateAppInstanceUser(requestBody: CreateAppInstanceUserPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app-instance-users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateAttendee.html">CreateAttendee</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings/{meetingId}/attendees
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		CreateAttendee(meetingId: string, requestBody: CreateAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_ListAttendees.html">ListAttendees</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Creates a channel to which you can add users and send messages.</p> <p> <b>Restriction</b>: You can't change a channel's privacy.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannel.html">CreateChannel</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to <code>DeleteChannelBan</code>, and then <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or channels.</p> <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelBan.html">CreateChannelBan</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/bans
		 * @param {string} channelArn The ARN of the ban request.
		 * @return {void} 
		 */
		CreateChannelBan(channelArn: string, requestBody: CreateChannelBanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the users banned from a particular channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelBans.html">ListChannelBans</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/bans
		 * @param {string} channelArn The ARN of the channel.
		 * @param {number} max_results The maximum number of bans that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested bans are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelBansResponse} Success
		 */
		ListChannelBans(channelArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelBansResponse> {
			return this.http.get<ListChannelBansResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the request header. A channel member can:</p> <ul> <li> <p>List messages</p> </li> <li> <p>Send messages</p> </li> <li> <p>Receive messages</p> </li> <li> <p>Edit their own messages</p> </li> <li> <p>Leave the channel</p> </li> </ul> <p>Privacy settings impact this action as follows:</p> <ul> <li> <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p> </li> <li> <p>Private Channels: You must be a member to list or send messages.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelMembership.html">CreateChannelMembership</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/memberships
		 * @param {string} channelArn The ARN of the channel to which you're adding users.
		 * @return {void} 
		 */
		CreateChannelMembership(channelArn: string, requestBody: CreateChannelMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all channel memberships in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMemberships.html">ListChannelMemberships</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/memberships
		 * @param {string} channelArn The maximum number of channel memberships that you want returned.
		 * @param {ChannelMembershipType} type The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned.
		 * @param {number} max_results The maximum number of channel memberships that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested channel memberships are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMembershipsResponse} Success
		 */
		ListChannelMemberships(channelArn: string, type: ChannelMembershipType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelMembershipsResponse> {
			return this.http.get<ListChannelMembershipsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships&type=' + type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p> <ul> <li> <p>Add and remove other members of the channel.</p> </li> <li> <p>Add and remove other moderators of the channel.</p> </li> <li> <p>Add and remove user bans for the channel.</p> </li> <li> <p>Redact messages in the channel.</p> </li> <li> <p>List messages in the channel.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelModerator.html">CreateChannelModerator</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/moderators
		 * @param {string} channelArn The ARN of the channel.
		 * @return {void} 
		 */
		CreateChannelModerator(channelArn: string, requestBody: CreateChannelModeratorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the moderators for a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelModerators.html">ListChannelModerators</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/moderators
		 * @param {string} channelArn The ARN of the channel.
		 * @param {number} max_results The maximum number of moderators that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested moderators are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelModeratorsResponse} Success
		 */
		ListChannelModerators(channelArn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelModeratorsResponse> {
			return this.http.get<ListChannelModeratorsResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a media capture pipeline.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_CreateMediaCapturePipeline">CreateMediaCapturePipeline</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post media-capture-pipelines
		 * @return {void} 
		 */
		CreateMediaCapturePipeline(requestBody: CreateMediaCapturePipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'media-capture-pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of media capture pipelines.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_ListMediaCapturePipelines.html">ListMediaCapturePipelines</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get media-capture-pipelines
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. Valid Range: 1 - 99.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMediaCapturePipelinesResponse} Success
		 */
		ListMediaCapturePipelines(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMediaCapturePipelinesResponse> {
			return this.http.get<ListMediaCapturePipelinesResponse>(this.baseUri + 'media-capture-pipelines?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html">CreateMeeting</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings
		 * @return {void} 
		 */
		CreateMeeting(requestBody: CreateMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists up to 100 active Amazon Chime SDK meetings.</p> <important> <p>ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p> </important> <p>For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
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
		 * <p>Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer.</p> <p>To play welcome audio or implement an interactive voice response (IVR), use the <code>CreateSipMediaApplicationCall</code> action with the corresponding SIP media application ID.</p> <important> <p> <b>This API is is not available in a dedicated namespace.</b> </p> </important>
		 * Post meetings/{meetingId}/dial-outs
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		CreateMeetingDialOut(meetingId: string, requestBody: CreateMeetingDialOutPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/dial-outs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the <i>Amazon Chime SDK Developer Guide</i> . For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeetingWithAttendees.html">CreateMeetingWithAttendees</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings#operation=create-attendees
		 * @return {void} 
		 */
		CreateMeetingWithAttendees(operation: CreateMeetingWithAttendeesOperation, requestBody: CreateMeetingWithAttendeesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings#operation=create-attendees?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.
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
		 * <p>Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateProxySession.html">CreateProxySession</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {void} 
		 */
		CreateProxySession(voiceConnectorId: string, requestBody: CreateProxySessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListProxySessions.html">ListProxySessions</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Creates a SIP media application.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateSipMediaApplication.html">CreateSipMediaApplication</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post sip-media-applications
		 * @return {void} 
		 */
		CreateSipMediaApplication(requestBody: CreateSipMediaApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the SIP media applications under the administrator's AWS account.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListSipMediaApplications.html">ListSipMediaApplications</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get sip-media-applications
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSipMediaApplicationsResponse} Success
		 */
		ListSipMediaApplications(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSipMediaApplicationsResponse> {
			return this.http.get<ListSipMediaApplicationsResponse>(this.baseUri + 'sip-media-applications?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified <code>sipMediaApplicationId</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateSipMediaApplicationCall.html">CreateSipMediaApplicationCall</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post sip-media-applications/{sipMediaApplicationId}/calls
		 * @param {string} sipMediaApplicationId The ID of the SIP media application.
		 * @return {void} 
		 */
		CreateSipMediaApplicationCall(sipMediaApplicationId: string, requestBody: CreateSipMediaApplicationCallPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/calls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateSipRule.html">CreateSipRule</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post sip-rules
		 * @return {void} 
		 */
		CreateSipRule(requestBody: CreateSipRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the SIP rules under the administrator's AWS account.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListSipRules.html">ListSipRules</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get sip-rules
		 * @param {string} sip_media_application The SIP media application ID.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSipRulesResponse} Success
		 */
		ListSipRules(sip_media_application: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSipRulesResponse> {
			return this.http.get<ListSipRulesResponse>(this.baseUri + 'sip-rules?sip_media_application=' + (sip_media_application == null ? '' : encodeURIComponent(sip_media_application)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p> <p>Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnector.html">CreateVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors
		 * @return {void} 
		 */
		CreateVoiceConnector(requestBody: CreateVoiceConnectorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceConnectors.html">ListVoiceConnectors</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including <code>VoiceConnectorItems</code> in the request.</p> <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateVoiceConnectorGroup.html">CreateVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connector-groups
		 * @return {void} 
		 */
		CreateVoiceConnectorGroup(requestBody: CreateVoiceConnectorGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connector-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceConnectorGroups.html">ListVoiceConnectorGroups</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to dodo.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>
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
		 * Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.
		 * Post accounts/{accountId}
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {UpdateAccountResponse} Success
		 */
		UpdateAccount(accountId: string, requestBody: UpdateAccountPostBody): Observable<UpdateAccountResponse> {
			return this.http.post<UpdateAccountResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstance.html">DeleteAppInstance</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		DeleteAppInstance(appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of an <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstance.html">DescribeAppInstance</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {DescribeAppInstanceResponse} Success
		 */
		DescribeAppInstance(appInstanceArn: string): Observable<DescribeAppInstanceResponse> {
			return this.http.get<DescribeAppInstanceResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), {});
		}

		/**
		 * <p>Updates <code>AppInstance</code> metadata.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstance.html">UpdateAppInstance</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put app-instances/{appInstanceArn}
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {UpdateAppInstanceResponse} Success
		 */
		UpdateAppInstance(appInstanceArn: string, requestBody: UpdateAppInstancePutBody): Observable<UpdateAppInstanceResponse> {
			return this.http.put<UpdateAppInstanceResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceAdmin.html">DeleteAppInstanceAdmin</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}
		 * @param {string} appInstanceAdminArn The ARN of the <code>AppInstance</code>'s administrator.
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {void} 
		 */
		DeleteAppInstanceAdmin(appInstanceAdminArn: string, appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins/' + (appInstanceAdminArn == null ? '' : encodeURIComponent(appInstanceAdminArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceAdmin.html">DescribeAppInstanceAdmin</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances/{appInstanceArn}/admins/{appInstanceAdminArn}
		 * @param {string} appInstanceAdminArn The ARN of the <code>AppInstanceAdmin</code>.
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {DescribeAppInstanceAdminResponse} Success
		 */
		DescribeAppInstanceAdmin(appInstanceAdminArn: string, appInstanceArn: string): Observable<DescribeAppInstanceAdminResponse> {
			return this.http.get<DescribeAppInstanceAdminResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/admins/' + (appInstanceAdminArn == null ? '' : encodeURIComponent(appInstanceAdminArn)), {});
		}

		/**
		 * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceStreamingConfigurations.html">DeleteAppInstanceStreamingConfigurations</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the streaming configurations being deleted.
		 * @return {void} 
		 */
		DeleteAppInstanceStreamingConfigurations(appInstanceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the streaming settings for an <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingStreamingConfigurations.html">GetMessagingStreamingConfigurations</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {GetAppInstanceStreamingConfigurationsResponse} Success
		 */
		GetAppInstanceStreamingConfigurations(appInstanceArn: string): Observable<GetAppInstanceStreamingConfigurationsResponse> {
			return this.http.get<GetAppInstanceStreamingConfigurationsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', {});
		}

		/**
		 * <p>The data streaming configurations of an <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_PutMessagingStreamingConfigurations.html">PutMessagingStreamingConfigurations</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put app-instances/{appInstanceArn}/streaming-configurations
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {PutAppInstanceStreamingConfigurationsResponse} Success
		 */
		PutAppInstanceStreamingConfigurations(appInstanceArn: string, requestBody: PutAppInstanceStreamingConfigurationsPutBody): Observable<PutAppInstanceStreamingConfigurationsResponse> {
			return this.http.put<PutAppInstanceStreamingConfigurationsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/streaming-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an <code>AppInstanceUser</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceUser.html">DeleteAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the user request being deleted.
		 * @return {void} 
		 */
		DeleteAppInstanceUser(appInstanceUserArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of an <code>AppInstanceUser</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DescribeAppInstanceUser.html">DescribeAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {DescribeAppInstanceUserResponse} Success
		 */
		DescribeAppInstanceUser(appInstanceUserArn: string): Observable<DescribeAppInstanceUserResponse> {
			return this.http.get<DescribeAppInstanceUserResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), {});
		}

		/**
		 * <p>Updates the details of an <code>AppInstanceUser</code>. You can update names and metadata.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_UpdateAppInstanceUser.html">UpdateAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put app-instance-users/{appInstanceUserArn}
		 * @param {string} appInstanceUserArn The ARN of the <code>AppInstanceUser</code>.
		 * @return {UpdateAppInstanceUserResponse} Success
		 */
		UpdateAppInstanceUser(appInstanceUserArn: string, requestBody: UpdateAppInstanceUserPutBody): Observable<UpdateAppInstanceUserResponse> {
			return this.http.put<UpdateAppInstanceUserResponse>(this.baseUri + 'app-instance-users/' + (appInstanceUserArn == null ? '' : encodeURIComponent(appInstanceUserArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_DeleteAttendee.html">DeleteAttendee</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		DeleteAttendee(meetingId: string, attendeeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetAttendee.html">GetAttendee</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get meetings/{meetingId}/attendees/{attendeeId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {GetAttendeeResponse} Success
		 */
		GetAttendee(meetingId: string, attendeeId: string): Observable<GetAttendeeResponse> {
			return this.http.get<GetAttendeeResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)), {});
		}

		/**
		 * <p>Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannel.html">DeleteChannel</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete channels/{channelArn}
		 * @param {string} channelArn The ARN of the channel being deleted.
		 * @return {void} 
		 */
		DeleteChannel(channelArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a channel in an Amazon Chime <code>AppInstance</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannel.html">DescribeChannel</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}
		 * @param {string} channelArn The ARN of the channel.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelArn: string): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)), {});
		}

		/**
		 * <p>Update a channel's attributes.</p> <p> <b>Restriction</b>: You can't change a channel's privacy. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannel.html">UpdateChannel</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put channels/{channelArn}
		 * @param {string} channelArn The ARN of the channel.
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(channelArn: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a user from a channel's ban list.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelBan.html">DeleteChannelBan</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete channels/{channelArn}/bans/{memberArn}
		 * @param {string} channelArn The ARN of the channel from which the <code>AppInstanceUser</code> was banned.
		 * @param {string} memberArn The ARN of the <code>AppInstanceUser</code> that you want to reinstate.
		 * @return {void} 
		 */
		DeleteChannelBan(channelArn: string, memberArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans/' + (memberArn == null ? '' : encodeURIComponent(memberArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a channel ban.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelBan.html">DescribeChannelBan</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/bans/{memberArn}
		 * @param {string} channelArn The ARN of the channel from which the user is banned.
		 * @param {string} memberArn The ARN of the member being banned.
		 * @return {DescribeChannelBanResponse} Success
		 */
		DescribeChannelBan(channelArn: string, memberArn: string): Observable<DescribeChannelBanResponse> {
			return this.http.get<DescribeChannelBanResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/bans/' + (memberArn == null ? '' : encodeURIComponent(memberArn)), {});
		}

		/**
		 * <p>Removes a member from a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMembership.html">DeleteChannelMembership</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete channels/{channelArn}/memberships/{memberArn}
		 * @param {string} channelArn The ARN of the channel from which you want to remove the user.
		 * @param {string} memberArn The ARN of the member that you're removing from the channel.
		 * @return {void} 
		 */
		DeleteChannelMembership(channelArn: string, memberArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a user's channel membership.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembership.html">DescribeChannelMembership</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/memberships/{memberArn}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} memberArn The ARN of the member.
		 * @return {DescribeChannelMembershipResponse} Success
		 */
		DescribeChannelMembership(channelArn: string, memberArn: string): Observable<DescribeChannelMembershipResponse> {
			return this.http.get<DescribeChannelMembershipResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/memberships/' + (memberArn == null ? '' : encodeURIComponent(memberArn)), {});
		}

		/**
		 * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by <code>UpdateChannelMessage</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelMessage.html">DeleteChannelMessage</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete channels/{channelArn}/messages/{messageId}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} messageId The ID of the message being deleted.
		 * @return {void} 
		 */
		DeleteChannelMessage(channelArn: string, messageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the full details of a channel message.</p> <note> <p>The x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetChannelMessage.html">GetChannelMessage</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/messages/{messageId}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} messageId The ID of the message.
		 * @return {GetChannelMessageResponse} Success
		 */
		GetChannelMessage(channelArn: string, messageId: string): Observable<GetChannelMessageResponse> {
			return this.http.get<GetChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}

		/**
		 * <p>Updates the content of a message.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelMessage.html">UpdateChannelMessage</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put channels/{channelArn}/messages/{messageId}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} messageId The ID string of the message being updated.
		 * @return {UpdateChannelMessageResponse} Success
		 */
		UpdateChannelMessage(channelArn: string, messageId: string, requestBody: UpdateChannelMessagePutBody): Observable<UpdateChannelMessageResponse> {
			return this.http.put<UpdateChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a channel moderator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DeleteChannelModerator.html">DeleteChannelModerator</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete channels/{channelArn}/moderators/{channelModeratorArn}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} channelModeratorArn The ARN of the moderator being deleted.
		 * @return {void} 
		 */
		DeleteChannelModerator(channelArn: string, channelModeratorArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators/' + (channelModeratorArn == null ? '' : encodeURIComponent(channelModeratorArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the full details of a single ChannelModerator.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModerator.html">DescribeChannelModerator</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/moderators/{channelModeratorArn}
		 * @param {string} channelArn The ARN of the channel.
		 * @param {string} channelModeratorArn The ARN of the channel moderator.
		 * @return {DescribeChannelModeratorResponse} Success
		 */
		DescribeChannelModerator(channelArn: string, channelModeratorArn: string): Observable<DescribeChannelModeratorResponse> {
			return this.http.get<DescribeChannelModeratorResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/moderators/' + (channelModeratorArn == null ? '' : encodeURIComponent(channelModeratorArn)), {});
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
		 * <p>Deletes the media capture pipeline.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_DeleteMediaCapturePipeline.html">DeleteMediaCapturePipeline</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete media-capture-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the media capture pipeline being deleted. 
		 * @return {void} 
		 */
		DeleteMediaCapturePipeline(mediaPipelineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'media-capture-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets an existing media capture pipeline.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_media-pipelines-chime_GetMediaCapturePipeline.html">GetMediaCapturePipeline</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get media-capture-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the pipeline that you want to get.
		 * @return {GetMediaCapturePipelineResponse} Success
		 */
		GetMediaCapturePipeline(mediaPipelineId: string): Observable<GetMediaCapturePipelineResponse> {
			return this.http.get<GetMediaCapturePipelineResponse>(this.baseUri + 'media-capture-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), {});
		}

		/**
		 * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_DeleteMeeting.html">DeleteMeeting</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete meetings/{meetingId}
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		DeleteMeeting(meetingId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetMeeting.html">GetMeeting</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important> <p> Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the <i>Amazon Chime SDK Developer Guide</i> . </p>
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
		 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {UpdatePhoneNumberResponse} Success
		 */
		UpdatePhoneNumber(phoneNumberId: string, requestBody: UpdatePhoneNumberPostBody): Observable<UpdatePhoneNumberResponse> {
			return this.http.post<UpdatePhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified proxy session from the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteProxySession.html">DeleteProxySession</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {void} 
		 */
		DeleteProxySession(voiceConnectorId: string, proxySessionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the specified proxy session details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetProxySession.html">GetProxySession</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @param {string} proxySessionId The proxy session ID.
		 * @return {GetProxySessionResponse} Success
		 */
		GetProxySession(voiceConnectorId: string, proxySessionId: string): Observable<GetProxySessionResponse> {
			return this.http.get<GetProxySessionResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), {});
		}

		/**
		 * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateProxySession.html">UpdateProxySession</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Deletes a SIP media application.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteSipMediaApplication.html">DeleteSipMediaApplication</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {void} 
		 */
		DeleteSipMediaApplication(sipMediaApplicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetSipMediaApplication.html">GetSipMediaApplication</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {GetSipMediaApplicationResponse} Success
		 */
		GetSipMediaApplication(sipMediaApplicationId: string): Observable<GetSipMediaApplicationResponse> {
			return this.http.get<GetSipMediaApplicationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), {});
		}

		/**
		 * <p>Updates the details of the specified SIP media application.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateSipMediaApplication.html">UpdateSipMediaApplication</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {UpdateSipMediaApplicationResponse} Success
		 */
		UpdateSipMediaApplication(sipMediaApplicationId: string, requestBody: UpdateSipMediaApplicationPutBody): Observable<UpdateSipMediaApplicationResponse> {
			return this.http.put<UpdateSipMediaApplicationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a SIP rule. You must disable a SIP rule before you can delete it.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteSipRule.html">DeleteSipRule</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {void} 
		 */
		DeleteSipRule(sipRuleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetSipRule.html">GetSipRule</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {GetSipRuleResponse} Success
		 */
		GetSipRule(sipRuleId: string): Observable<GetSipRuleResponse> {
			return this.http.get<GetSipRuleResponse>(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), {});
		}

		/**
		 * <p>Updates the details of the specified SIP rule.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateSipRule.html">UpdateSipRule</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {void} 
		 */
		UpdateSipRule(sipRuleId: string, requestBody: UpdateSipRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnector.html">DeleteVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnector(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnector.html">GetVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorResponse} Success
		 */
		GetVoiceConnector(voiceConnectorId: string): Observable<GetVoiceConnectorResponse> {
			return this.http.get<GetVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), {});
		}

		/**
		 * <p>Updates details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceConnector.html">UpdateVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {UpdateVoiceConnectorResponse} Success
		 */
		UpdateVoiceConnector(voiceConnectorId: string, requestBody: UpdateVoiceConnectorPutBody): Observable<UpdateVoiceConnectorResponse> {
			return this.http.put<UpdateVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorEmergencyCallingConfiguration.html">DeleteVoiceConnectorEmergencyCallingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorEmergencyCallingConfiguration.html">GetVoiceConnectorEmergencyCallingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorEmergencyCallingConfigurationResponse} Success
		 */
		GetVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorEmergencyCallingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorEmergencyCallingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', {});
		}

		/**
		 * <p>Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorEmergencyCallingConfiguration.html">PutVoiceConnectorEmergencyCallingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorEmergencyCallingConfigurationResponse} Success
		 */
		PutVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorEmergencyCallingConfigurationPutBody): Observable<PutVoiceConnectorEmergencyCallingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorEmergencyCallingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified Amazon Chime Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorGroup.html">DeleteVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorGroup.html">GetVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {GetVoiceConnectorGroupResponse} Success
		 */
		GetVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<GetVoiceConnectorGroupResponse> {
			return this.http.get<GetVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), {});
		}

		/**
		 * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateVoiceConnectorGroup.html">UpdateVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {void} 
		 */
		UpdateVoiceConnectorGroup(voiceConnectorGroupId: string, requestBody: UpdateVoiceConnectorGroupPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorOrigination.html">DeleteVoiceConnectorOrigination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorOrigination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorOrigination.html">GetVoiceConnectorOrigination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorOriginationResponse} Success
		 */
		GetVoiceConnectorOrigination(voiceConnectorId: string): Observable<GetVoiceConnectorOriginationResponse> {
			return this.http.get<GetVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', {});
		}

		/**
		 * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorOrigination.html">PutVoiceConnectorOrigination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorOriginationResponse} Success
		 */
		PutVoiceConnectorOrigination(voiceConnectorId: string, requestBody: PutVoiceConnectorOriginationPutBody): Observable<PutVoiceConnectorOriginationResponse> {
			return this.http.put<PutVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the proxy configuration from the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorProxy.html">DeleteVoiceProxy</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorProxy(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the proxy configuration details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorProxy.html">GetVoiceConnectorProxy</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {GetVoiceConnectorProxyResponse} Success
		 */
		GetVoiceConnectorProxy(voiceConnectorId: string): Observable<GetVoiceConnectorProxyResponse> {
			return this.http.get<GetVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', {});
		}

		/**
		 * <p>Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorProxy.html">PutVoiceConnectorProxy</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Amazon Chime voice connector ID.
		 * @return {PutVoiceConnectorProxyResponse} Success
		 */
		PutVoiceConnectorProxy(voiceConnectorId: string, requestBody: PutVoiceConnectorProxyPutBody): Observable<PutVoiceConnectorProxyResponse> {
			return this.http.put<PutVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorStreamingConfiguration.html">DeleteVoiceConnectorStreamingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorStreamingConfiguration.html">GetVoiceConnectorStreamingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorStreamingConfigurationResponse} Success
		 */
		GetVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorStreamingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', {});
		}

		/**
		 * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorStreamingConfiguration.html">PutVoiceConnectorStreamingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorStreamingConfigurationResponse} Success
		 */
		PutVoiceConnectorStreamingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorStreamingConfigurationPutBody): Observable<PutVoiceConnectorStreamingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorTermination.html">DeleteVoiceConnectorTermination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Delete voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTermination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves termination setting details for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorTermination.html">GetVoiceConnectorTermination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationResponse} Success
		 */
		GetVoiceConnectorTermination(voiceConnectorId: string): Observable<GetVoiceConnectorTerminationResponse> {
			return this.http.get<GetVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', {});
		}

		/**
		 * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p> <note> <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorTermination.html">PutVoiceConnectorTermination</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorTerminationResponse} Success
		 */
		PutVoiceConnectorTermination(voiceConnectorId: string, requestBody: PutVoiceConnectorTerminationPutBody): Observable<PutVoiceConnectorTerminationResponse> {
			return this.http.put<PutVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DeleteVoiceConnectorTerminationCredentials.html">DeleteVoiceConnectorTerminationCredentials</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: DeleteVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelMembershipForAppInstanceUser.html">DescribeChannelMembershipForAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}#scope=app-instance-user-membership&app-instance-user-arn
		 * @param {string} channelArn The ARN of the channel to which the user belongs.
		 * @param {string} app_instance_user_arn The ARN of the user in a channel.
		 * @return {DescribeChannelMembershipForAppInstanceUserResponse} Success
		 */
		DescribeChannelMembershipForAppInstanceUser(channelArn: string, app_instance_user_arn: string, scope: DescribeChannelMembershipForAppInstanceUserScope): Observable<DescribeChannelMembershipForAppInstanceUserResponse> {
			return this.http.get<DescribeChannelMembershipForAppInstanceUserResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#scope=app-instance-user-membership&app-instance-user-arn&app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&scope=' + scope, {});
		}

		/**
		 * <p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_DescribeChannelModeratedByAppInstanceUser.html">DescribeChannelModeratedByAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}#scope=app-instance-user-moderated-channel&app-instance-user-arn
		 * @param {string} channelArn The ARN of the moderated channel.
		 * @param {string} app_instance_user_arn The ARN of the <code>AppInstanceUser</code> in the moderated channel.
		 * @return {DescribeChannelModeratedByAppInstanceUserResponse} Success
		 */
		DescribeChannelModeratedByAppInstanceUser(channelArn: string, app_instance_user_arn: string, scope: DescribeChannelModeratedByAppInstanceUserScope): Observable<DescribeChannelModeratedByAppInstanceUserResponse> {
			return this.http.get<DescribeChannelModeratedByAppInstanceUserResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '#scope=app-instance-user-moderated-channel&app-instance-user-arn&app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&scope=' + scope, {});
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
		 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DisassociatePhoneNumbersFromVoiceConnector.html">DisassociatePhoneNumbersFromVoiceConnector</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnector(voiceConnectorId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorResponse> {
			return this.http.post<DisassociatePhoneNumbersFromVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=disassociate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DisassociatePhoneNumbersFromVoiceConnectorGroup.html">DisassociatePhoneNumbersFromVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime Voice Connector group ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorGroupResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnectorGroup(voiceConnectorGroupId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse> {
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
		 * Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
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
		 * <p>Gets the retention settings for an <code>AppInstance</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_GetAppInstanceRetentionSettings.html">GetMessagingRetentionSettings</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instances/{appInstanceArn}/retention-settings
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {GetAppInstanceRetentionSettingsResponse} Success
		 */
		GetAppInstanceRetentionSettings(appInstanceArn: string): Observable<GetAppInstanceRetentionSettingsResponse> {
			return this.http.get<GetAppInstanceRetentionSettingsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/retention-settings', {});
		}

		/**
		 * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains data.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_PutAppInstanceRetentionSettings.html">PutAppInstanceRetentionSettings</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put app-instances/{appInstanceArn}/retention-settings
		 * @param {string} appInstanceArn The ARN of the <code>AppInstance</code>.
		 * @return {PutAppInstanceRetentionSettingsResponse} Success
		 */
		PutAppInstanceRetentionSettings(appInstanceArn: string, requestBody: PutAppInstanceRetentionSettingsPutBody): Observable<PutAppInstanceRetentionSettingsResponse> {
			return this.http.put<PutAppInstanceRetentionSettingsResponse>(this.baseUri + 'app-instances/' + (appInstanceArn == null ? '' : encodeURIComponent(appInstanceArn)) + '/retention-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>The details of the endpoint for the messaging session.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingSessionEndpoint.html">GetMessagingSessionEndpoint</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get endpoints/messaging-session
		 * @return {GetMessagingSessionEndpointResponse} Success
		 */
		GetMessagingSessionEndpoint(): Observable<GetMessagingSessionEndpointResponse> {
			return this.http.get<GetMessagingSessionEndpointResponse>(this.baseUri + 'endpoints/messaging-session', {});
		}

		/**
		 * Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.
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
		 * <p> Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p> To turn off existing retention settings, remove the number of days from the corresponding <b>RetentionDays</b> field in the <b>RetentionSettings</b> object. For more information about retention settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a> in the <i>Amazon Chime Administration Guide</i>.</p>
		 * Put accounts/{accountId}/retention-settings
		 * @param {string} accountId The Amazon Chime account ID.
		 * @return {void} 
		 */
		PutRetentionSettings(accountId: string, requestBody: PutRetentionSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/retention-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the logging configuration for the specified SIP media application.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetSipMediaApplicationLoggingConfiguration.html">GetSipMediaApplicationLoggingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get sip-media-applications/{sipMediaApplicationId}/logging-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {GetSipMediaApplicationLoggingConfigurationResponse} Success
		 */
		GetSipMediaApplicationLoggingConfiguration(sipMediaApplicationId: string): Observable<GetSipMediaApplicationLoggingConfigurationResponse> {
			return this.http.get<GetSipMediaApplicationLoggingConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/logging-configuration', {});
		}

		/**
		 * <p>Updates the logging configuration for the specified SIP media application.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutSipMediaApplicationLoggingConfiguration.html">PutSipMediaApplicationLoggingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put sip-media-applications/{sipMediaApplicationId}/logging-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {PutSipMediaApplicationLoggingConfigurationResponse} Success
		 */
		PutSipMediaApplicationLoggingConfiguration(sipMediaApplicationId: string, requestBody: PutSipMediaApplicationLoggingConfigurationPutBody): Observable<PutSipMediaApplicationLoggingConfigurationResponse> {
			return this.http.put<PutSipMediaApplicationLoggingConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/logging-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.</p> <p> To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address. </p>
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
		 * <p>Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorLoggingConfiguration.html">GetVoiceConnectorLoggingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {GetVoiceConnectorLoggingConfigurationResponse} Success
		 */
		GetVoiceConnectorLoggingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorLoggingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', {});
		}

		/**
		 * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorLoggingConfiguration.html">PutVoiceConnectorLoggingConfiguration</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {PutVoiceConnectorLoggingConfigurationResponse} Success
		 */
		PutVoiceConnectorLoggingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorLoggingConfigurationPutBody): Observable<PutVoiceConnectorLoggingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_GetVoiceConnectorTerminationHealth.html">GetVoiceConnectorTerminationHealth</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important> <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
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
		 * <p>List all <code>AppInstanceUsers</code> created under a single <code>AppInstance</code>. </p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_ListAppInstanceUsers.html">ListAppInstanceUsers</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get app-instance-users#app-instance-arn
		 * @param {string} app_instance_arn The ARN of the <code>AppInstance</code>.
		 * @param {number} max_results The maximum number of requests that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested users are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppInstanceUsersResponse} Success
		 */
		ListAppInstanceUsers(app_instance_arn: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppInstanceUsersResponse> {
			return this.http.get<ListAppInstanceUsersResponse>(this.baseUri + 'app-instance-users#app-instance-arn?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Lists the tags applied to an Amazon Chime SDK attendee resource.</p> <important> <p>ListAttendeeTags is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p> </important>
		 * Get meetings/{meetingId}/attendees/{attendeeId}/tags
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {ListAttendeeTagsResponse} Success
		 */
		ListAttendeeTags(meetingId: string, attendeeId: string): Observable<ListAttendeeTagsResponse> {
			return this.http.get<ListAttendeeTagsResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags', {});
		}

		/**
		 * <p> Lists all channels that a particular <code>AppInstanceUser</code> is a part of. Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html">ListChannelMembershipsForAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels#scope=app-instance-user-memberships
		 * @param {string} app_instance_user_arn The ARN of the <code>AppInstanceUser</code>s
		 * @param {number} max_results The maximum number of users that you want returned.
		 * @param {string} next_token The token returned from previous API requests until the number of channel memberships is reached.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMembershipsForAppInstanceUserResponse} Success
		 */
		ListChannelMembershipsForAppInstanceUser(app_instance_user_arn: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, scope: ListChannelMembershipsForAppInstanceUserScope): Observable<ListChannelMembershipsForAppInstanceUserResponse> {
			return this.http.get<ListChannelMembershipsForAppInstanceUserResponse>(this.baseUri + 'channels#scope=app-instance-user-memberships?app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&scope=' + scope, {});
		}

		/**
		 * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>. By default, sorted by creation timestamp in descending order.</p> <note> <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p> <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMessages.html">ListChannelMessages</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels/{channelArn}/messages
		 * @param {string} channelArn The ARN of the channel.
		 * @param {SortOrder} sort_order The order in which you want messages sorted. Default is Descending, based on time created.
		 * @param {Date} not_before The initial or starting time stamp for your requested messages.
		 * @param {Date} not_after The final or ending time stamp for your requested messages.
		 * @param {number} max_results The maximum number of messages that you want returned.
		 * @param {string} next_token The token passed by previous API calls until all requested messages are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelMessagesResponse} Success
		 */
		ListChannelMessages(channelArn: string, sort_order: SortOrder | null | undefined, not_before: Date | null | undefined, not_after: Date | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelMessagesResponse> {
			return this.http.get<ListChannelMessagesResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages&sort_order=' + sort_order + '&not_before=' + not_before?.toISOString() + '&not_after=' + not_after?.toISOString() + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Sends a message to a particular channel that the member is a part of.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of data and no metadata.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_SendChannelMessage.html">SendChannelMessage</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/messages
		 * @param {string} channelArn The ARN of the channel.
		 * @return {void} 
		 */
		SendChannelMessage(channelArn: string, requestBody: SendChannelMessagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.</p> <p class="title"> <b>Functionality &amp; restrictions</b> </p> <ul> <li> <p>Use privacy = <code>PUBLIC</code> to retrieve all public channels in the account.</p> </li> <li> <p>Only an <code>AppInstanceAdmin</code> can set privacy = <code>PRIVATE</code> to list the private channels in an account.</p> </li> </ul> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannels.html">ListChannels</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels#app-instance-arn
		 * @param {string} app_instance_arn The ARN of the <code>AppInstance</code>.
		 * @param {ChannelPrivacy} privacy The privacy setting. <code>PUBLIC</code> retrieves all the public channels. <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code> can retrieve private channels. 
		 * @param {number} max_results The maximum number of channels that you want to return.
		 * @param {string} next_token The token passed by previous API calls until all requested channels are returned.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(app_instance_arn: string, privacy: ChannelPrivacy | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels#app-instance-arn?app_instance_arn=' + (app_instance_arn == null ? '' : encodeURIComponent(app_instance_arn)) + '&privacy=' + privacy + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelsModeratedByAppInstanceUser.html">ListChannelsModeratedByAppInstanceUser</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get channels#scope=app-instance-user-moderated-channels
		 * @param {string} app_instance_user_arn The ARN of the user in the moderated channel.
		 * @param {number} max_results The maximum number of channels in the request.
		 * @param {string} next_token The token returned from previous API requests until the number of channels moderated by the user is reached.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsModeratedByAppInstanceUserResponse} Success
		 */
		ListChannelsModeratedByAppInstanceUser(app_instance_user_arn: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, scope: ListChannelsModeratedByAppInstanceUserScope): Observable<ListChannelsModeratedByAppInstanceUserResponse> {
			return this.http.get<ListChannelsModeratedByAppInstanceUserResponse>(this.baseUri + 'channels#scope=app-instance-user-moderated-channels?app_instance_user_arn=' + (app_instance_user_arn == null ? '' : encodeURIComponent(app_instance_user_arn)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&scope=' + scope, {});
		}

		/**
		 * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_ListTagsForResource.html">ListTagsForResource</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * @param {PhoneNumberProductType} product_type The phone number product type.
		 * @param {PhoneNumberAssociationName} filter_name The filter to use to limit the number of results.
		 * @param {string} filter_value The value to use for the filter.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token to use to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(status: PhoneNumberStatus | null | undefined, product_type: PhoneNumberProductType | null | undefined, filter_name: PhoneNumberAssociationName | null | undefined, filter_value: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumbersResponse> {
			return this.http.get<ListPhoneNumbersResponse>(this.baseUri + 'phone-numbers?status=' + status + '&product_type=' + product_type + '&filter_name=' + filter_name + '&filter_value=' + (filter_value == null ? '' : encodeURIComponent(filter_value)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists supported phone number countries.
		 * Get phone-number-countries#product-type
		 * @param {PhoneNumberProductType} product_type The phone number product type.
		 * @return {ListSupportedPhoneNumberCountriesResponse} Success
		 */
		ListSupportedPhoneNumberCountries(product_type: PhoneNumberProductType): Observable<ListSupportedPhoneNumberCountriesResponse> {
			return this.http.get<ListSupportedPhoneNumberCountriesResponse>(this.baseUri + 'phone-number-countries#product-type?product_type=' + product_type, {});
		}

		/**
		 * <p>Lists the tags applied to an Amazon Chime SDK meeting and messaging resources.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the applicable latest version in the Amazon Chime SDK.</p> <ul> <li> <p>For meetings: <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_ListTagsForResource.html">ListTagsForResource</a>.</p> </li> <li> <p>For messaging: <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListTagsForResource.html">ListTagsForResource</a>.</p> </li> </ul> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Get tags#arn
		 * @param {string} arn The resource ARN.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListVoiceConnectorTerminationCredentials.html">ListVoiceConnectorTerminationCredentials</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
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
		 * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorTerminationCredentials.html">PutVoiceConnectorTerminationCredentials</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=put
		 * @param {string} voiceConnectorId The Amazon Chime Voice Connector ID.
		 * @return {void} 
		 */
		PutVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: PutVoiceConnectorTerminationCredentialsOperation, requestBody: PutVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=put&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_RedactChannelMessage.html">RedactChannelMessage</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post channels/{channelArn}/messages/{messageId}#operation=redact
		 * @param {string} channelArn The ARN of the channel containing the messages that you want to redact.
		 * @param {string} messageId The ID of the message being redacted.
		 * @return {RedactChannelMessageResponse} Success
		 */
		RedactChannelMessage(channelArn: string, messageId: string, operation: RedactChannelMessageOperation): Observable<RedactChannelMessageResponse> {
			return this.http.post<RedactChannelMessageResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + operation, null, {});
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime conversation.
		 * Post accounts/{accountId}/conversations/{conversationId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} conversationId The conversation ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactConversationMessageResponse} Success
		 */
		RedactConversationMessage(accountId: string, conversationId: string, messageId: string, operation: RedactChannelMessageOperation): Observable<RedactConversationMessageResponse> {
			return this.http.post<RedactConversationMessageResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/conversations/' + (conversationId == null ? '' : encodeURIComponent(conversationId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '#operation=redact&operation=' + operation, null, {});
		}

		/**
		 * Redacts the specified message from the specified Amazon Chime channel.
		 * Post accounts/{accountId}/rooms/{roomId}/messages/{messageId}#operation=redact
		 * @param {string} accountId The Amazon Chime account ID.
		 * @param {string} roomId The room ID.
		 * @param {string} messageId The message ID.
		 * @return {RedactRoomMessageResponse} Success
		 */
		RedactRoomMessage(accountId: string, roomId: string, messageId: string, operation: RedactChannelMessageOperation): Observable<RedactRoomMessageResponse> {
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
		 * Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: <code>AreaCode</code>, <code>City</code>, <code>State</code>, or <code>TollFreePrefix</code>. If you provide <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only support the <code>PhoneNumberType</code> filter, which you must use.
		 * Get search#type=phone-numbers
		 * @param {string} area_code The area code used to filter results. Only applies to the US.
		 * @param {string} city The city used to filter results. Only applies to the US.
		 * @param {string} country The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.
		 * @param {string} state The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.
		 * @param {string} toll_free_prefix The toll-free prefix that you use to filter results. Only applies to the US.
		 * @param {PhoneNumberType} phone_number_type The phone number type used to filter results. Required for non-US numbers.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchAvailablePhoneNumbersResponse} Success
		 */
		SearchAvailablePhoneNumbers(area_code: string | null | undefined, city: string | null | undefined, country: string | null | undefined, state: string | null | undefined, toll_free_prefix: string | null | undefined, phone_number_type: PhoneNumberType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, type: SearchAvailablePhoneNumbersType): Observable<SearchAvailablePhoneNumbersResponse> {
			return this.http.get<SearchAvailablePhoneNumbersResponse>(this.baseUri + 'search#type=phone-numbers?area_code=' + (area_code == null ? '' : encodeURIComponent(area_code)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&toll_free_prefix=' + (toll_free_prefix == null ? '' : encodeURIComponent(toll_free_prefix)) + '&phone_number_type=' + phone_number_type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&type=' + type, {});
		}

		/**
		 * <p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html"> Using Amazon Chime SDK live transcription </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the <i>Amazon Transcribe Developer Guide</i>.</p> <note> <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_StartMeetingTranscription.html">StartMeetingTranscription</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings/{meetingId}/transcription#operation=start
		 * @param {string} meetingId The unique ID of the meeting being transcribed.
		 * @return {StartMeetingTranscriptionResponse} Success
		 */
		StartMeetingTranscription(meetingId: string, operation: StartMeetingTranscriptionOperation, requestBody: StartMeetingTranscriptionPostBody): Observable<StartMeetingTranscriptionResponse> {
			return this.http.post<StartMeetingTranscriptionResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/transcription#operation=start&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops transcription for the specified <code>meetingId</code>.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_StopMeetingTranscription.html">StopMeetingTranscription</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings/{meetingId}/transcription#operation=stop
		 * @param {string} meetingId The unique ID of the meeting for which you stop transcription.
		 * @return {StopMeetingTranscriptionResponse} Success
		 */
		StopMeetingTranscription(meetingId: string, operation: StopMeetingTranscriptionOperation): Observable<StopMeetingTranscriptionResponse> {
			return this.http.post<StopMeetingTranscriptionResponse>(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/transcription#operation=stop&operation=' + operation, null, {});
		}

		/**
		 * <p>Applies the specified tags to the specified Amazon Chime attendee.</p> <important> <p>TagAttendee is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p> </important>
		 * Post meetings/{meetingId}/attendees/{attendeeId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		TagAttendee(meetingId: string, attendeeId: string, operation: InviteUsersOperation, requestBody: TagAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=add&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_TagResource.html">TagResource</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings/{meetingId}/tags#operation=add
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		TagMeeting(meetingId: string, operation: InviteUsersOperation, requestBody: TagMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=add&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Applies the specified tags to the specified Amazon Chime SDK meeting resource.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_TagResource.html">TagResource</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p> <important> <p>UntagAttendee is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.</p> </important>
		 * Post meetings/{meetingId}/attendees/{attendeeId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @param {string} attendeeId The Amazon Chime SDK attendee ID.
		 * @return {void} 
		 */
		UntagAttendee(meetingId: string, attendeeId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: UntagAttendeePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/attendees/' + (attendeeId == null ? '' : encodeURIComponent(attendeeId)) + '/tags#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Untags the specified tags from the specified Amazon Chime SDK meeting.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_UntagResource.html">UntagResource</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post meetings/{meetingId}/tags#operation=delete
		 * @param {string} meetingId The Amazon Chime SDK meeting ID.
		 * @return {void} 
		 */
		UntagMeeting(meetingId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: UntagMeetingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'meetings/' + (meetingId == null ? '' : encodeURIComponent(meetingId)) + '/tags#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Untags the specified tags from the specified Amazon Chime SDK meeting resource.</p> <p>Applies the specified tags to the specified Amazon Chime SDK meeting resource.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_UntagResource.html">UntagResource</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The details of the time when a user last read messages in a channel.</p> <note> <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the value in the header.</p> </note> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_UpdateChannelReadMarker.html">UpdateChannelReadMarker</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Put channels/{channelArn}/readMarker
		 * @param {string} channelArn The ARN of the channel.
		 * @return {UpdateChannelReadMarkerResponse} Success
		 */
		UpdateChannelReadMarker(channelArn: string): Observable<UpdateChannelReadMarkerResponse> {
			return this.http.put<UpdateChannelReadMarkerResponse>(this.baseUri + 'channels/' + (channelArn == null ? '' : encodeURIComponent(channelArn)) + '/readMarker', null, {});
		}

		/**
		 * <p>Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_UpdateSipMediaApplicationCall.html">UpdateSipMediaApplicationCall</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}
		 * @param {string} sipMediaApplicationId The ID of the SIP media application handling the call.
		 * @param {string} transactionId The ID of the call transaction.
		 * @return {void} 
		 */
		UpdateSipMediaApplicationCall(sipMediaApplicationId: string, transactionId: string, requestBody: UpdateSipMediaApplicationCallPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/calls/' + (transactionId == null ? '' : encodeURIComponent(transactionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Validates an address to be used for 911 calls made with Amazon Chime Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.</p> <important> <p> <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ValidateE911Address.html">ValidateE911Address</a>, in the Amazon Chime SDK.</p> <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> </important>
		 * Post emergency-calling/address
		 * @return {void} 
		 */
		ValidateE911Address(requestBody: ValidateE911AddressPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'emergency-calling/address', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociatePhoneNumberWithUserOperation { 'associate-phone-number' = 'associate-phone-number' }

	export interface AssociatePhoneNumberWithUserPostBody {

		/**
		 * The phone number, in E.164 format.
		 * Required
		 */
		E164PhoneNumber: string;
	}
	export interface AssociatePhoneNumberWithUserPostBodyFormProperties {

		/**
		 * The phone number, in E.164 format.
		 * Required
		 */
		E164PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateAssociatePhoneNumberWithUserPostBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumberWithUserPostBodyFormProperties>({
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
		});

	}

	export enum AssociatePhoneNumbersWithVoiceConnectorOperation { 'associate-phone-numbers' = 'associate-phone-numbers' }

	export interface AssociatePhoneNumbersWithVoiceConnectorPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorPostBodyFormProperties {

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorPostBodyFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormProperties {

		/** If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AssociateSigninDelegateGroupsWithAccountOperation { 'associate-signin-delegate-groups' = 'associate-signin-delegate-groups' }

	export interface AssociateSigninDelegateGroupsWithAccountPostBody {

		/**
		 * The sign-in delegate groups.
		 * Required
		 */
		SigninDelegateGroups: Array<SigninDelegateGroup>;
	}
	export interface AssociateSigninDelegateGroupsWithAccountPostBodyFormProperties {
	}
	export function CreateAssociateSigninDelegateGroupsWithAccountPostBodyFormGroup() {
		return new FormGroup<AssociateSigninDelegateGroupsWithAccountPostBodyFormProperties>({
		});

	}

	export enum BatchCreateAttendeeOperation { 'batch-create' = 'batch-create' }

	export interface BatchCreateAttendeePostBody {

		/**
		 * The request containing the attendees to create.
		 * Required
		 */
		Attendees: Array<CreateAttendeeRequestItem>;
	}
	export interface BatchCreateAttendeePostBodyFormProperties {
	}
	export function CreateBatchCreateAttendeePostBodyFormGroup() {
		return new FormGroup<BatchCreateAttendeePostBodyFormProperties>({
		});

	}

	export interface BatchCreateChannelMembershipPostBody {

		/** The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators. */
		Type?: ChannelMembershipType | null;

		/**
		 * The ARNs of the members you want to add to the channel.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		MemberArns: Array<string>;
	}
	export interface BatchCreateChannelMembershipPostBodyFormProperties {

		/** The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators. */
		Type: FormControl<ChannelMembershipType | null | undefined>,
	}
	export function CreateBatchCreateChannelMembershipPostBodyFormGroup() {
		return new FormGroup<BatchCreateChannelMembershipPostBodyFormProperties>({
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined),
		});

	}

	export interface BatchCreateRoomMembershipPostBody {

		/**
		 * The list of membership items.
		 * Required
		 * Maximum items: 50
		 */
		MembershipItemList: Array<MembershipItem>;
	}
	export interface BatchCreateRoomMembershipPostBodyFormProperties {
	}
	export function CreateBatchCreateRoomMembershipPostBodyFormGroup() {
		return new FormGroup<BatchCreateRoomMembershipPostBodyFormProperties>({
		});

	}

	export enum BatchDeletePhoneNumberOperation { 'batch-delete' = 'batch-delete' }

	export interface BatchDeletePhoneNumberPostBody {

		/**
		 * List of phone number IDs.
		 * Required
		 * Minimum items: 1
		 */
		PhoneNumberIds: Array<string>;
	}
	export interface BatchDeletePhoneNumberPostBodyFormProperties {
	}
	export function CreateBatchDeletePhoneNumberPostBodyFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberPostBodyFormProperties>({
		});

	}

	export enum BatchSuspendUserOperation { suspend = 'suspend' }

	export interface BatchSuspendUserPostBody {

		/**
		 * The request containing the user IDs to suspend.
		 * Required
		 * Maximum items: 50
		 */
		UserIdList: Array<string>;
	}
	export interface BatchSuspendUserPostBodyFormProperties {
	}
	export function CreateBatchSuspendUserPostBodyFormGroup() {
		return new FormGroup<BatchSuspendUserPostBodyFormProperties>({
		});

	}

	export enum BatchUnsuspendUserOperation { unsuspend = 'unsuspend' }

	export interface BatchUnsuspendUserPostBody {

		/**
		 * The request containing the user IDs to unsuspend.
		 * Required
		 * Maximum items: 50
		 */
		UserIdList: Array<string>;
	}
	export interface BatchUnsuspendUserPostBodyFormProperties {
	}
	export function CreateBatchUnsuspendUserPostBodyFormGroup() {
		return new FormGroup<BatchUnsuspendUserPostBodyFormProperties>({
		});

	}

	export enum BatchUpdatePhoneNumberOperation { 'batch-update' = 'batch-update' }

	export interface BatchUpdatePhoneNumberPostBody {

		/**
		 * The request containing the phone number IDs and product types or calling names to update.
		 * Required
		 */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}
	export interface BatchUpdatePhoneNumberPostBodyFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberPostBodyFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberPostBodyFormProperties>({
		});

	}

	export interface BatchUpdateUserPostBody {

		/**
		 * The request containing the user IDs and details to update.
		 * Required
		 * Maximum items: 20
		 */
		UpdateUserRequestItems: Array<UpdateUserRequestItem>;
	}
	export interface BatchUpdateUserPostBodyFormProperties {
	}
	export function CreateBatchUpdateUserPostBodyFormGroup() {
		return new FormGroup<BatchUpdateUserPostBodyFormProperties>({
		});

	}

	export interface CreateAccountPostBody {

		/**
		 * The name of the Amazon Chime account.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateAccountPostBodyFormProperties {

		/**
		 * The name of the Amazon Chime account.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountPostBodyFormGroup() {
		return new FormGroup<CreateAccountPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateAppInstancePostBody {

		/**
		 * The name of the <code>AppInstance</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The <code>ClientRequestToken</code> of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * Tags assigned to the <code>AppInstance</code>.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstancePostBodyFormProperties {

		/**
		 * The name of the <code>AppInstance</code>.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The <code>ClientRequestToken</code> of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstancePostBodyFormGroup() {
		return new FormGroup<CreateAppInstancePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateAppInstanceAdminPostBody {

		/**
		 * The ARN of the administrator of the current <code>AppInstance</code>.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceAdminArn: string;
	}
	export interface CreateAppInstanceAdminPostBodyFormProperties {

		/**
		 * The ARN of the administrator of the current <code>AppInstance</code>.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceAdminArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceAdminPostBodyFormGroup() {
		return new FormGroup<CreateAppInstanceAdminPostBodyFormProperties>({
			AppInstanceAdminArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateAppInstanceUserPostBody {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: string;

		/**
		 * The user ID of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AppInstanceUserId: string;

		/**
		 * The user's name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The request's metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The token assigned to the user requesting an <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * Tags assigned to the <code>AppInstanceUser</code>.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateAppInstanceUserPostBodyFormProperties {

		/**
		 * The ARN of the <code>AppInstance</code> request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The user ID of the <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		AppInstanceUserId: FormControl<string | null | undefined>,

		/**
		 * The user's name.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The request's metadata. Limited to a 1KB string in UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The token assigned to the user requesting an <code>AppInstance</code>.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppInstanceUserPostBodyFormGroup() {
		return new FormGroup<CreateAppInstanceUserPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			AppInstanceUserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateAttendeePostBody {

		/**
		 * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
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
		Tags?: Array<Tag>;
	}
	export interface CreateAttendeePostBodyFormProperties {

		/**
		 * The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAttendeePostBodyFormGroup() {
		return new FormGroup<CreateAttendeePostBodyFormProperties>({
			ExternalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
		});

	}

	export interface CreateBotPostBody {

		/**
		 * The bot display name.
		 * Required
		 */
		DisplayName: string;

		/** The domain of the Amazon Chime Enterprise account. */
		Domain?: string | null;
	}
	export interface CreateBotPostBodyFormProperties {

		/**
		 * The bot display name.
		 * Required
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** The domain of the Amazon Chime Enterprise account. */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotPostBodyFormGroup() {
		return new FormGroup<CreateBotPostBodyFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateChannelPostBody {

		/**
		 * The ARN of the channel request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: string;

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels. */
		Mode?: ChannelMode | null;

		/** The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>. */
		Privacy?: ChannelPrivacy | null;

		/**
		 * The metadata of the creation request. Limited to 1KB and UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The client token for the request. An <code>Idempotency</code> token.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;

		/**
		 * The tags for the creation request.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateChannelPostBodyFormProperties {

		/**
		 * The ARN of the channel request.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		AppInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels. */
		Mode: FormControl<ChannelMode | null | undefined>,

		/** The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the <code>AppInstance</code>. */
		Privacy: FormControl<ChannelPrivacy | null | undefined>,

		/**
		 * The metadata of the creation request. Limited to 1KB and UTF-8.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The client token for the request. An <code>Idempotency</code> token.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			AppInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined),
			Privacy: new FormControl<ChannelPrivacy | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateChannelBanPostBody {

		/**
		 * The ARN of the member being banned.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		MemberArn: string;
	}
	export interface CreateChannelBanPostBodyFormProperties {

		/**
		 * The ARN of the member being banned.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		MemberArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelBanPostBodyFormGroup() {
		return new FormGroup<CreateChannelBanPostBodyFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateChannelMembershipPostBody {

		/**
		 * The ARN of the member you want to add to the channel.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		MemberArn: string;

		/**
		 * The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.
		 * Required
		 */
		Type: ChannelMembershipType;
	}
	export interface CreateChannelMembershipPostBodyFormProperties {

		/**
		 * The ARN of the member you want to add to the channel.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		MemberArn: FormControl<string | null | undefined>,

		/**
		 * The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default members are always returned as part of <code>ListChannelMemberships</code>. Hidden members are only returned if the type filter in <code>ListChannelMemberships</code> equals <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported by moderators.
		 * Required
		 */
		Type: FormControl<ChannelMembershipType | null | undefined>,
	}
	export function CreateCreateChannelMembershipPostBodyFormGroup() {
		return new FormGroup<CreateChannelMembershipPostBodyFormProperties>({
			MemberArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
			Type: new FormControl<ChannelMembershipType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelModeratorPostBody {

		/**
		 * The ARN of the moderator.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ChannelModeratorArn: string;
	}
	export interface CreateChannelModeratorPostBodyFormProperties {

		/**
		 * The ARN of the moderator.
		 * Required
		 * Max length: 1600
		 * Min length: 5
		 */
		ChannelModeratorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelModeratorPostBodyFormGroup() {
		return new FormGroup<CreateChannelModeratorPostBodyFormProperties>({
			ChannelModeratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(1600), Validators.pattern('arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}')]),
		});

	}

	export interface CreateMediaCapturePipelinePostBody {

		/**
		 * Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.
		 * Required
		 */
		SourceType: MediaPipelineSourceType;

		/**
		 * ARN of the source from which the media artifacts are captured.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceArn: string;

		/**
		 * Destination type to which the media artifacts are saved. You must use an S3 bucket.
		 * Required
		 */
		SinkType: MediaPipelineSinkType;

		/**
		 * The ARN of the sink type.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SinkArn: string;

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;

		/** The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
		ChimeSdkMeetingConfiguration?: CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfiguration;
	}
	export interface CreateMediaCapturePipelinePostBodyFormProperties {

		/**
		 * Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source.
		 * Required
		 */
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,

		/**
		 * ARN of the source from which the media artifacts are captured.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceArn: FormControl<string | null | undefined>,

		/**
		 * Destination type to which the media artifacts are saved. You must use an S3 bucket.
		 * Required
		 */
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,

		/**
		 * The ARN of the sink type.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SinkArn: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaCapturePipelinePostBodyFormGroup() {
		return new FormGroup<CreateMediaCapturePipelinePostBodyFormProperties>({
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined, [Validators.required]),
			SinkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfiguration {
		SourceConfiguration?: SourceConfiguration;
		ArtifactsConfiguration?: ArtifactsConfiguration;
	}
	export interface CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormProperties {
	}
	export function CreateCreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormGroup() {
		return new FormGroup<CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormProperties>({
		});

	}

	export interface CreateMeetingPostBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
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

		/** <p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p> */
		MediaRegion?: string | null;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). */
		NotificationsConfiguration?: CreateMeetingPostBodyNotificationsConfiguration;
	}
	export interface CreateMeetingPostBodyFormProperties {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The external meeting ID.
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId: FormControl<string | null | undefined>,

		/** <p> The Region in which to create the meeting. Default: <code>us-east-1</code>. </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p> */
		MediaRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingPostBodyFormGroup() {
		return new FormGroup<CreateMeetingPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingPostBodyNotificationsConfiguration {
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}
	export interface CreateMeetingPostBodyNotificationsConfigurationFormProperties {
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingPostBodyNotificationsConfigurationFormGroup() {
		return new FormGroup<CreateMeetingPostBodyNotificationsConfigurationFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingDialOutPostBody {

		/**
		 * Phone number used as the caller ID when the remote party receives a call.
		 * Required
		 */
		FromPhoneNumber: string;

		/**
		 * Phone number called when inviting someone to a meeting.
		 * Required
		 */
		ToPhoneNumber: string;

		/**
		 * Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.
		 * Required
		 * Max length: 2048
		 * Min length: 2
		 */
		JoinToken: string;
	}
	export interface CreateMeetingDialOutPostBodyFormProperties {

		/**
		 * Phone number used as the caller ID when the remote party receives a call.
		 * Required
		 */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Phone number called when inviting someone to a meeting.
		 * Required
		 */
		ToPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.
		 * Required
		 * Max length: 2048
		 * Min length: 2
		 */
		JoinToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingDialOutPostBodyFormGroup() {
		return new FormGroup<CreateMeetingDialOutPostBodyFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			JoinToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2048), Validators.pattern('^[a-zA-Z0-9+/]+$')]),
		});

	}

	export enum CreateMeetingWithAttendeesOperation { 'create-attendees' = 'create-attendees' }

	export interface CreateMeetingWithAttendeesPostBody {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
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

		/** <p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p> */
		MediaRegion?: string | null;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>). */
		NotificationsConfiguration?: CreateMeetingWithAttendeesPostBodyNotificationsConfiguration;

		/**
		 * The request containing the attendees to create.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Attendees?: Array<CreateAttendeeRequestItem>;
	}
	export interface CreateMeetingWithAttendeesPostBodyFormProperties {

		/**
		 * The unique identifier for the client request. Use a different token for different meetings.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The external meeting ID.
		 * Max length: 64
		 * Min length: 2
		 */
		ExternalMeetingId: FormControl<string | null | undefined>,

		/**
		 * Reserved.
		 * Max length: 64
		 * Min length: 2
		 */
		MeetingHostId: FormControl<string | null | undefined>,

		/** <p> The Region in which to create the meeting. Default: <code>us-east-1</code> . </p> <p> Available values: <code>af-south-1</code> , <code>ap-northeast-1</code> , <code>ap-northeast-2</code> , <code>ap-south-1</code> , <code>ap-southeast-1</code> , <code>ap-southeast-2</code> , <code>ca-central-1</code> , <code>eu-central-1</code> , <code>eu-north-1</code> , <code>eu-south-1</code> , <code>eu-west-1</code> , <code>eu-west-2</code> , <code>eu-west-3</code> , <code>sa-east-1</code> , <code>us-east-1</code> , <code>us-east-2</code> , <code>us-west-1</code> , <code>us-west-2</code> . </p> */
		MediaRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesPostBodyFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
			ExternalMeetingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			MeetingHostId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64)]),
			MediaRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMeetingWithAttendeesPostBodyNotificationsConfiguration {
		SnsTopicArn?: string;
		SqsQueueArn?: string;
	}
	export interface CreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormProperties {
		SnsTopicArn: FormControl<string | null | undefined>,
		SqsQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormGroup() {
		return new FormGroup<CreateMeetingWithAttendeesPostBodyNotificationsConfigurationFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SqsQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePhoneNumberOrderPostBody {

		/**
		 * The phone number product type.
		 * Required
		 */
		ProductType: PhoneNumberProductType;

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface CreatePhoneNumberOrderPostBodyFormProperties {

		/**
		 * The phone number product type.
		 * Required
		 */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
	}
	export function CreateCreatePhoneNumberOrderPostBodyFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderPostBodyFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProxySessionPostBody {

		/**
		 * The participant phone numbers.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		ParticipantPhoneNumbers: Array<string>;

		/** The name of the proxy session. */
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
		NumberSelectionBehavior?: NumberSelectionBehavior | null;

		/** The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel?: GeoMatchLevel | null;

		/** The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: CreateProxySessionPostBodyGeoMatchParams;
	}
	export interface CreateProxySessionPostBodyFormProperties {

		/** The name of the proxy session. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes: FormControl<number | null | undefined>,

		/** The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. */
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,

		/** The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateCreateProxySessionPostBodyFormGroup() {
		return new FormGroup<CreateProxySessionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|^[a-zA-Z0-9 ]{0,30}$')]),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export interface CreateProxySessionPostBodyGeoMatchParams {
		Country?: string;
		AreaCode?: string;
	}
	export interface CreateProxySessionPostBodyGeoMatchParamsFormProperties {
		Country: FormControl<string | null | undefined>,
		AreaCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProxySessionPostBodyGeoMatchParamsFormGroup() {
		return new FormGroup<CreateProxySessionPostBodyGeoMatchParamsFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			AreaCode: new FormControl<string | null | undefined>(undefined),
		});

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
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateRoomPostBodyFormProperties {

		/**
		 * The room name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomPostBodyFormGroup() {
		return new FormGroup<CreateRoomPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateRoomMembershipPostBody {

		/**
		 * The Amazon Chime member ID (user ID or bot ID).
		 * Required
		 */
		MemberId: string;

		/** The role of the member. */
		Role?: RoomMembershipRole | null;
	}
	export interface CreateRoomMembershipPostBodyFormProperties {

		/**
		 * The Amazon Chime member ID (user ID or bot ID).
		 * Required
		 */
		MemberId: FormControl<string | null | undefined>,

		/** The role of the member. */
		Role: FormControl<RoomMembershipRole | null | undefined>,
	}
	export function CreateCreateRoomMembershipPostBodyFormGroup() {
		return new FormGroup<CreateRoomMembershipPostBodyFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
		});

	}

	export interface CreateSipMediaApplicationPostBody {

		/**
		 * The AWS Region assigned to the SIP media application.
		 * Required
		 */
		AwsRegion: string;

		/**
		 * The SIP media application name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Endpoints: Array<SipMediaApplicationEndpoint>;
	}
	export interface CreateSipMediaApplicationPostBodyFormProperties {

		/**
		 * The AWS Region assigned to the SIP media application.
		 * Required
		 */
		AwsRegion: FormControl<string | null | undefined>,

		/**
		 * The SIP media application name.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationPostBodyFormGroup() {
		return new FormGroup<CreateSipMediaApplicationPostBodyFormProperties>({
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface CreateSipMediaApplicationCallPostBody {

		/**
		 * The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.
		 * Required
		 */
		FromPhoneNumber: string;

		/**
		 * The phone number that the service should call.
		 * Required
		 */
		ToPhoneNumber: string;

		/** The SIP headers added to an outbound call leg. */
		SipHeaders?: {[id: string]: string };
	}
	export interface CreateSipMediaApplicationCallPostBodyFormProperties {

		/**
		 * The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.
		 * Required
		 */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number that the service should call.
		 * Required
		 */
		ToPhoneNumber: FormControl<string | null | undefined>,

		/** The SIP headers added to an outbound call leg. */
		SipHeaders: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationCallPostBodyFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallPostBodyFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			SipHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSipRulePostBody {

		/**
		 * The name of the SIP rule.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.
		 * Required
		 */
		TriggerType: SipRuleTriggerType;

		/**
		 * If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.
		 * Required
		 */
		TriggerValue: string;

		/** Enables or disables a rule. You must disable rules before you can delete them. */
		Disabled?: boolean | null;

		/**
		 * List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TargetApplications: Array<SipRuleTargetApplication>;
	}
	export interface CreateSipRulePostBodyFormProperties {

		/**
		 * The name of the SIP rule.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.
		 * Required
		 */
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,

		/**
		 * If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.
		 * Required
		 */
		TriggerValue: FormControl<string | null | undefined>,

		/** Enables or disables a rule. You must disable rules before you can delete them. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSipRulePostBodyFormGroup() {
		return new FormGroup<CreateSipRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined, [Validators.required]),
			TriggerValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateUserOperation { create = 'create' }

	export interface CreateUserPostBody {

		/** The user name. */
		Username?: string | null;

		/** The user's email address. */
		Email?: string | null;

		/** The user type. */
		UserType?: UserType | null;
	}
	export interface CreateUserPostBodyFormProperties {

		/** The user name. */
		Username: FormControl<string | null | undefined>,

		/** The user's email address. */
		Email: FormControl<string | null | undefined>,

		/** The user type. */
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.+@.+\..+')]),
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceConnectorPostBody {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . */
		AwsRegion?: VoiceConnectorAwsRegion | null;

		/**
		 * When enabled, requires encryption for the Amazon Chime Voice Connector.
		 * Required
		 */
		RequireEncryption: boolean;
	}
	export interface CreateVoiceConnectorPostBodyFormProperties {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code> . */
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,

		/**
		 * When enabled, requires encryption for the Amazon Chime Voice Connector.
		 * Required
		 */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<CreateVoiceConnectorPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceConnectorGroupPostBody {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The Amazon Chime Voice Connectors to route inbound calls to. */
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}
	export interface CreateVoiceConnectorGroupPostBodyFormProperties {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface UpdateAccountPostBody {

		/**
		 * The new name for the specified Amazon Chime account.
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/** The default license applied when you add users to an Amazon Chime account. */
		DefaultLicense?: License | null;
	}
	export interface UpdateAccountPostBodyFormProperties {

		/**
		 * The new name for the specified Amazon Chime account.
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The default license applied when you add users to an Amazon Chime account. */
		DefaultLicense: FormControl<License | null | undefined>,
	}
	export function CreateUpdateAccountPostBodyFormGroup() {
		return new FormGroup<UpdateAccountPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
			DefaultLicense: new FormControl<License | null | undefined>(undefined),
		});

	}

	export interface UpdateAppInstancePutBody {

		/**
		 * The name that you want to change.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata that you want to change.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;
	}
	export interface UpdateAppInstancePutBodyFormProperties {

		/**
		 * The name that you want to change.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata that you want to change.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstancePutBodyFormGroup() {
		return new FormGroup<UpdateAppInstancePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface PutAppInstanceStreamingConfigurationsPutBody {

		/**
		 * The streaming configurations set for an <code>AppInstance</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		AppInstanceStreamingConfigurations: Array<AppInstanceStreamingConfiguration>;
	}
	export interface PutAppInstanceStreamingConfigurationsPutBodyFormProperties {
	}
	export function CreatePutAppInstanceStreamingConfigurationsPutBodyFormGroup() {
		return new FormGroup<PutAppInstanceStreamingConfigurationsPutBodyFormProperties>({
		});

	}

	export interface UpdateAppInstanceUserPutBody {

		/**
		 * The name of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The metadata of the <code>AppInstanceUser</code>.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;
	}
	export interface UpdateAppInstanceUserPutBodyFormProperties {

		/**
		 * The name of the <code>AppInstanceUser</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The metadata of the <code>AppInstanceUser</code>.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppInstanceUserPutBodyFormGroup() {
		return new FormGroup<UpdateAppInstanceUserPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('.*\S.*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateChannelPutBody {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The mode of the update request.
		 * Required
		 */
		Mode: ChannelMode;

		/**
		 * The metadata for the update request.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The mode of the update request.
		 * Required
		 */
		Mode: FormControl<ChannelMode | null | undefined>,

		/**
		 * The metadata for the update request.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*')]),
			Mode: new FormControl<ChannelMode | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface UpdateChannelMessagePutBody {

		/**
		 * The content of the message being updated.
		 * Max length: 4096
		 * Min length: 0
		 */
		Content?: string | null;

		/**
		 * The metadata of the message being updated.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;
	}
	export interface UpdateChannelMessagePutBodyFormProperties {

		/**
		 * The content of the message being updated.
		 * Max length: 4096
		 * Min length: 0
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * The metadata of the message being updated.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelMessagePutBodyFormGroup() {
		return new FormGroup<UpdateChannelMessagePutBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4096), Validators.pattern('[\s\S]*')]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export interface PutEventsConfigurationPutBody {

		/** HTTPS endpoint that allows the bot to receive outgoing events. */
		OutboundEventsHTTPSEndpoint?: string | null;

		/** Lambda function ARN that allows the bot to receive outgoing events. */
		LambdaFunctionArn?: string | null;
	}
	export interface PutEventsConfigurationPutBodyFormProperties {

		/** HTTPS endpoint that allows the bot to receive outgoing events. */
		OutboundEventsHTTPSEndpoint: FormControl<string | null | undefined>,

		/** Lambda function ARN that allows the bot to receive outgoing events. */
		LambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsConfigurationPutBodyFormGroup() {
		return new FormGroup<PutEventsConfigurationPutBodyFormProperties>({
			OutboundEventsHTTPSEndpoint: new FormControl<string | null | undefined>(undefined),
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberPostBody {

		/** The product type. */
		ProductType?: PhoneNumberProductType | null;

		/** The outbound calling name associated with the phone number. */
		CallingName?: string | null;
	}
	export interface UpdatePhoneNumberPostBodyFormProperties {

		/** The product type. */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,

		/** The outbound calling name associated with the phone number. */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberPostBodyFormGroup() {
		return new FormGroup<UpdatePhoneNumberPostBodyFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|^[a-zA-Z0-9 ]{2,15}$')]),
		});

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
	export interface UpdateProxySessionPostBodyFormProperties {

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProxySessionPostBodyFormGroup() {
		return new FormGroup<UpdateProxySessionPostBodyFormProperties>({
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface UpdateRoomPostBody {

		/** The room name. */
		Name?: string | null;
	}
	export interface UpdateRoomPostBodyFormProperties {

		/** The room name. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomPostBodyFormGroup() {
		return new FormGroup<UpdateRoomPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoomMembershipPostBody {

		/** The role of the member. */
		Role?: RoomMembershipRole | null;
	}
	export interface UpdateRoomMembershipPostBodyFormProperties {

		/** The role of the member. */
		Role: FormControl<RoomMembershipRole | null | undefined>,
	}
	export function CreateUpdateRoomMembershipPostBodyFormGroup() {
		return new FormGroup<UpdateRoomMembershipPostBodyFormProperties>({
			Role: new FormControl<RoomMembershipRole | null | undefined>(undefined),
		});

	}

	export interface UpdateSipMediaApplicationPutBody {

		/**
		 * The new name for the specified SIP media application.
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The new set of endpoints for the specified SIP media application.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Endpoints?: Array<SipMediaApplicationEndpoint>;
	}
	export interface UpdateSipMediaApplicationPutBodyFormProperties {

		/**
		 * The new name for the specified SIP media application.
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationPutBodyFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface UpdateSipRulePutBody {

		/**
		 * The new name for the specified SIP rule.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** The new value specified to indicate whether the rule is disabled. */
		Disabled?: boolean | null;

		/**
		 * The new value of the list of target applications.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface UpdateSipRulePutBodyFormProperties {

		/**
		 * The new name for the specified SIP rule.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The new value specified to indicate whether the rule is disabled. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSipRulePutBodyFormGroup() {
		return new FormGroup<UpdateSipRulePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

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
	export interface UpdateVoiceConnectorPutBodyFormProperties {

		/**
		 * The name of the Amazon Chime Voice Connector.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * When enabled, requires encryption for the Amazon Chime Voice Connector.
		 * Required
		 */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceConnectorPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBody {

		/**
		 * The emergency calling configuration details associated with an Amazon Chime Voice Connector.
		 * Required
		 */
		EmergencyCallingConfiguration: PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfiguration {
		DNIS?: Array<DNISEmergencyCallingConfiguration>;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormProperties>({
		});

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
	export interface UpdateVoiceConnectorGroupPutBodyFormProperties {

		/**
		 * The name of the Amazon Chime Voice Connector group.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorGroupPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface PutVoiceConnectorOriginationPutBody {

		/**
		 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one. </p> </note>
		 * Required
		 */
		Origination: PutVoiceConnectorOriginationPutBodyOrigination;
	}
	export interface PutVoiceConnectorOriginationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationPutBodyOrigination {
		Routes?: Array<OriginationRoute>;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorOriginationPutBodyOriginationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorOriginationPutBodyOriginationFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationPutBodyOriginationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

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

		/** The phone number to route calls to after a proxy session expires. */
		FallBackPhoneNumber?: string | null;

		/** When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector. */
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorProxyPutBodyFormProperties {

		/**
		 * The default number of minutes allowed for proxy sessions.
		 * Required
		 */
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,

		/** The phone number to route calls to after a proxy session expires. */
		FallBackPhoneNumber: FormControl<string | null | undefined>,

		/** When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorProxyPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyPutBodyFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationPutBody {

		/**
		 * The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
		 * Required
		 */
		StreamingConfiguration: PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration {
		DataRetentionInHours?: number | null;
		Disabled?: boolean | null;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
	}
	export interface PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormProperties {
		DataRetentionInHours: FormControl<number | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormProperties>({
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorTerminationPutBody {

		/**
		 * Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime Voice Connector.
		 * Required
		 */
		Termination: PutVoiceConnectorTerminationPutBodyTermination;
	}
	export interface PutVoiceConnectorTerminationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationPutBodyTermination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string;
		CallingRegions?: Array<string>;
		CidrAllowedList?: Array<string>;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorTerminationPutBodyTerminationFormProperties {
		CpsLimit: FormControl<number | null | undefined>,
		DefaultPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorTerminationPutBodyTerminationFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationPutBodyTerminationFormProperties>({
			CpsLimit: new FormControl<number | null | undefined>(undefined),
			DefaultPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeleteVoiceConnectorTerminationCredentialsOperation { delete = 'delete' }

	export interface DeleteVoiceConnectorTerminationCredentialsPostBody {

		/**
		 * The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.
		 * Required
		 */
		Usernames: Array<string>;
	}
	export interface DeleteVoiceConnectorTerminationCredentialsPostBodyFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationCredentialsPostBodyFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationCredentialsPostBodyFormProperties>({
		});

	}

	export enum DescribeChannelMembershipForAppInstanceUserScope { 'app-instance-user-membership' = 'app-instance-user-membership' }

	export enum DescribeChannelModeratedByAppInstanceUserScope { 'app-instance-user-moderated-channel' = 'app-instance-user-moderated-channel' }

	export enum DisassociatePhoneNumberFromUserOperation { 'disassociate-phone-number' = 'disassociate-phone-number' }

	export enum DisassociatePhoneNumbersFromVoiceConnectorOperation { 'disassociate-phone-numbers' = 'disassociate-phone-numbers' }

	export interface DisassociatePhoneNumbersFromVoiceConnectorPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorPostBodyFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorPostBodyFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormProperties>({
		});

	}

	export enum DisassociateSigninDelegateGroupsFromAccountOperation { 'disassociate-signin-delegate-groups' = 'disassociate-signin-delegate-groups' }

	export interface DisassociateSigninDelegateGroupsFromAccountPostBody {

		/**
		 * The sign-in delegate group names.
		 * Required
		 * Minimum items: 1
		 */
		GroupNames: Array<string>;
	}
	export interface DisassociateSigninDelegateGroupsFromAccountPostBodyFormProperties {
	}
	export function CreateDisassociateSigninDelegateGroupsFromAccountPostBodyFormGroup() {
		return new FormGroup<DisassociateSigninDelegateGroupsFromAccountPostBodyFormProperties>({
		});

	}

	export interface UpdateAccountSettingsPutBody {

		/**
		 * Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.
		 * Required
		 */
		AccountSettings: UpdateAccountSettingsPutBodyAccountSettings;
	}
	export interface UpdateAccountSettingsPutBodyFormProperties {
	}
	export function CreateUpdateAccountSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateAccountSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateAccountSettingsPutBodyAccountSettings {
		DisableRemoteControl?: boolean | null;
		EnableDialOut?: boolean | null;
	}
	export interface UpdateAccountSettingsPutBodyAccountSettingsFormProperties {
		DisableRemoteControl: FormControl<boolean | null | undefined>,
		EnableDialOut: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAccountSettingsPutBodyAccountSettingsFormGroup() {
		return new FormGroup<UpdateAccountSettingsPutBodyAccountSettingsFormProperties>({
			DisableRemoteControl: new FormControl<boolean | null | undefined>(undefined),
			EnableDialOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAppInstanceRetentionSettingsPutBody {

		/**
		 * The details of the data-retention settings for an <code>AppInstance</code>.
		 * Required
		 */
		AppInstanceRetentionSettings: PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsPutBodyFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsPutBodyFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsPutBodyFormProperties>({
		});

	}

	export interface PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettings {
		ChannelRetentionSettings?: ChannelRetentionSettings;
	}
	export interface PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormProperties {
	}
	export function CreatePutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormGroup() {
		return new FormGroup<PutAppInstanceRetentionSettingsPutBodyAppInstanceRetentionSettingsFormProperties>({
		});

	}

	export interface UpdateBotPostBody {

		/** When true, stops the specified bot from running in your account. */
		Disabled?: boolean | null;
	}
	export interface UpdateBotPostBodyFormProperties {

		/** When true, stops the specified bot from running in your account. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBotPostBodyFormGroup() {
		return new FormGroup<UpdateBotPostBodyFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsPutBody {

		/** The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records. */
		BusinessCalling?: UpdateGlobalSettingsPutBodyBusinessCalling;

		/** The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector?: UpdateGlobalSettingsPutBodyVoiceConnector;
	}
	export interface UpdateGlobalSettingsPutBodyFormProperties {
	}
	export function CreateUpdateGlobalSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateGlobalSettingsPutBodyBusinessCalling {
		CdrBucket?: string;
	}
	export interface UpdateGlobalSettingsPutBodyBusinessCallingFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsPutBodyBusinessCallingFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyBusinessCallingFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsPutBodyVoiceConnector {
		CdrBucket?: string;
	}
	export interface UpdateGlobalSettingsPutBodyVoiceConnectorFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsPutBodyVoiceConnectorFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyVoiceConnectorFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberSettingsPutBody {

		/**
		 * The default outbound calling name for the account.
		 * Required
		 */
		CallingName: string;
	}
	export interface UpdatePhoneNumberSettingsPutBodyFormProperties {

		/**
		 * The default outbound calling name for the account.
		 * Required
		 */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberSettingsPutBodyFormGroup() {
		return new FormGroup<UpdatePhoneNumberSettingsPutBodyFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^$|^[a-zA-Z0-9 ]{2,15}$')]),
		});

	}

	export interface PutRetentionSettingsPutBody {

		/**
		 * The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.
		 * Required
		 */
		RetentionSettings: PutRetentionSettingsPutBodyRetentionSettings;
	}
	export interface PutRetentionSettingsPutBodyFormProperties {
	}
	export function CreatePutRetentionSettingsPutBodyFormGroup() {
		return new FormGroup<PutRetentionSettingsPutBodyFormProperties>({
		});

	}

	export interface PutRetentionSettingsPutBodyRetentionSettings {
		RoomRetentionSettings?: RoomRetentionSettings;
		ConversationRetentionSettings?: ConversationRetentionSettings;
	}
	export interface PutRetentionSettingsPutBodyRetentionSettingsFormProperties {
	}
	export function CreatePutRetentionSettingsPutBodyRetentionSettingsFormGroup() {
		return new FormGroup<PutRetentionSettingsPutBodyRetentionSettingsFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationPutBody {

		/** Logging configuration of the SIP media application. */
		SipMediaApplicationLoggingConfiguration?: PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationPutBodyFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfiguration {
		EnableSipMediaApplicationMessageLogs?: boolean | null;
	}
	export interface PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormProperties {
		EnableSipMediaApplicationMessageLogs: FormControl<boolean | null | undefined>,
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormProperties>({
			EnableSipMediaApplicationMessageLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPostBody {

		/** The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to. */
		LicenseType?: License | null;

		/** The user type. */
		UserType?: UserType | null;

		/** The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device. */
		AlexaForBusinessMetadata?: UpdateUserPostBodyAlexaForBusinessMetadata;
	}
	export interface UpdateUserPostBodyFormProperties {

		/** The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to. */
		LicenseType: FormControl<License | null | undefined>,

		/** The user type. */
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateUpdateUserPostBodyFormGroup() {
		return new FormGroup<UpdateUserPostBodyFormProperties>({
			LicenseType: new FormControl<License | null | undefined>(undefined),
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPostBodyAlexaForBusinessMetadata {
		IsAlexaForBusinessEnabled?: boolean | null;
		AlexaForBusinessRoomArn?: string;
	}
	export interface UpdateUserPostBodyAlexaForBusinessMetadataFormProperties {
		IsAlexaForBusinessEnabled: FormControl<boolean | null | undefined>,
		AlexaForBusinessRoomArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPostBodyAlexaForBusinessMetadataFormGroup() {
		return new FormGroup<UpdateUserPostBodyAlexaForBusinessMetadataFormProperties>({
			IsAlexaForBusinessEnabled: new FormControl<boolean | null | undefined>(undefined),
			AlexaForBusinessRoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserSettingsPutBody {

		/**
		 * Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
		 * Required
		 */
		UserSettings: UpdateUserSettingsPutBodyUserSettings;
	}
	export interface UpdateUserSettingsPutBodyFormProperties {
	}
	export function CreateUpdateUserSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateUserSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateUserSettingsPutBodyUserSettings {
		Telephony?: TelephonySettings;
	}
	export interface UpdateUserSettingsPutBodyUserSettingsFormProperties {
	}
	export function CreateUpdateUserSettingsPutBodyUserSettingsFormGroup() {
		return new FormGroup<UpdateUserSettingsPutBodyUserSettingsFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationPutBody {

		/**
		 * The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Required
		 */
		LoggingConfiguration: PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration {
		EnableSIPLogs?: boolean | null;
		EnableMediaMetricLogs?: boolean | null;
	}
	export interface PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormProperties {
		EnableSIPLogs: FormControl<boolean | null | undefined>,
		EnableMediaMetricLogs: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormProperties>({
			EnableSIPLogs: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaMetricLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum InviteUsersOperation { add = 'add' }

	export interface InviteUsersPostBody {

		/**
		 * The user email addresses to which to send the email invitation.
		 * Required
		 * Maximum items: 50
		 */
		UserEmailList: Array<string>;

		/** The user type. */
		UserType?: UserType | null;
	}
	export interface InviteUsersPostBodyFormProperties {

		/** The user type. */
		UserType: FormControl<UserType | null | undefined>,
	}
	export function CreateInviteUsersPostBodyFormGroup() {
		return new FormGroup<InviteUsersPostBodyFormProperties>({
			UserType: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export enum ListChannelMembershipsForAppInstanceUserScope { 'app-instance-user-memberships' = 'app-instance-user-memberships' }

	export interface SendChannelMessagePostBody {

		/**
		 * The content of the message.
		 * Required
		 * Min length: 1
		 */
		Content: string;

		/**
		 * The type of message, <code>STANDARD</code> or <code>CONTROL</code>.
		 * Required
		 */
		Type: ChannelMessageType;

		/**
		 * Boolean that controls whether the message is persisted on the back end. Required.
		 * Required
		 */
		Persistence: ChannelMessagePersistenceType;

		/**
		 * The optional metadata for each message.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata?: string | null;

		/**
		 * The <code>Idempotency</code> token for each client request.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: string;
	}
	export interface SendChannelMessagePostBodyFormProperties {

		/**
		 * The content of the message.
		 * Required
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * The type of message, <code>STANDARD</code> or <code>CONTROL</code>.
		 * Required
		 */
		Type: FormControl<ChannelMessageType | null | undefined>,

		/**
		 * Boolean that controls whether the message is persisted on the back end. Required.
		 * Required
		 */
		Persistence: FormControl<ChannelMessagePersistenceType | null | undefined>,

		/**
		 * The optional metadata for each message.
		 * Max length: 1024
		 * Min length: 0
		 */
		Metadata: FormControl<string | null | undefined>,

		/**
		 * The <code>Idempotency</code> token for each client request.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSendChannelMessagePostBodyFormGroup() {
		return new FormGroup<SendChannelMessagePostBodyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<ChannelMessageType | null | undefined>(undefined, [Validators.required]),
			Persistence: new FormControl<ChannelMessagePersistenceType | null | undefined>(undefined, [Validators.required]),
			Metadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export enum ListChannelsModeratedByAppInstanceUserScope { 'app-instance-user-moderated-channels' = 'app-instance-user-moderated-channels' }

	export enum LogoutUserOperation { logout = 'logout' }

	export enum PutVoiceConnectorTerminationCredentialsOperation { put = 'put' }

	export interface PutVoiceConnectorTerminationCredentialsPostBody {

		/** The termination SIP credentials. */
		Credentials?: Array<Credential>;
	}
	export interface PutVoiceConnectorTerminationCredentialsPostBodyFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationCredentialsPostBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationCredentialsPostBodyFormProperties>({
		});

	}

	export enum RedactChannelMessageOperation { redact = 'redact' }

	export enum RegenerateSecurityTokenOperation { 'regenerate-security-token' = 'regenerate-security-token' }

	export enum ResetPersonalPINOperation { 'reset-personal-pin' = 'reset-personal-pin' }

	export enum RestorePhoneNumberOperation { restore = 'restore' }

	export enum SearchAvailablePhoneNumbersType { 'phone-numbers' = 'phone-numbers' }

	export enum StartMeetingTranscriptionOperation { start = 'start' }

	export interface StartMeetingTranscriptionPostBody {

		/**
		 * The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.
		 * Required
		 */
		TranscriptionConfiguration: StartMeetingTranscriptionPostBodyTranscriptionConfiguration;
	}
	export interface StartMeetingTranscriptionPostBodyFormProperties {
	}
	export function CreateStartMeetingTranscriptionPostBodyFormGroup() {
		return new FormGroup<StartMeetingTranscriptionPostBodyFormProperties>({
		});

	}

	export interface StartMeetingTranscriptionPostBodyTranscriptionConfiguration {
		EngineTranscribeSettings?: EngineTranscribeSettings;
		EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
	}
	export interface StartMeetingTranscriptionPostBodyTranscriptionConfigurationFormProperties {
	}
	export function CreateStartMeetingTranscriptionPostBodyTranscriptionConfigurationFormGroup() {
		return new FormGroup<StartMeetingTranscriptionPostBodyTranscriptionConfigurationFormProperties>({
		});

	}

	export enum StopMeetingTranscriptionOperation { stop = 'stop' }

	export interface TagAttendeePostBody {

		/**
		 * The tag key-value pairs.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Tags: Array<Tag>;
	}
	export interface TagAttendeePostBodyFormProperties {
	}
	export function CreateTagAttendeePostBodyFormGroup() {
		return new FormGroup<TagAttendeePostBodyFormProperties>({
		});

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
	export interface TagMeetingPostBodyFormProperties {
	}
	export function CreateTagMeetingPostBodyFormGroup() {
		return new FormGroup<TagMeetingPostBodyFormProperties>({
		});

	}

	export enum TagResourceOperation { 'tag-resource' = 'tag-resource' }

	export interface TagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
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
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

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
	export interface UntagAttendeePostBodyFormProperties {
	}
	export function CreateUntagAttendeePostBodyFormGroup() {
		return new FormGroup<UntagAttendeePostBodyFormProperties>({
		});

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
	export interface UntagMeetingPostBodyFormProperties {
	}
	export function CreateUntagMeetingPostBodyFormGroup() {
		return new FormGroup<UntagMeetingPostBodyFormProperties>({
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 'untag-resource' }

	export interface UntagResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
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
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export interface UpdateSipMediaApplicationCallPostBody {

		/**
		 * Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.
		 * Required
		 */
		Arguments: {[id: string]: string };
	}
	export interface UpdateSipMediaApplicationCallPostBodyFormProperties {

		/**
		 * Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.
		 * Required
		 */
		Arguments: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationCallPostBodyFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallPostBodyFormProperties>({
			Arguments: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateE911AddressPostBody {

		/**
		 * The AWS account ID.
		 * Required
		 */
		AwsAccountId: string;

		/**
		 * The address street number, such as <code>200</code> or <code>2121</code>.
		 * Required
		 */
		StreetNumber: string;

		/**
		 * The address street information, such as <code>8th Avenue</code>.
		 * Required
		 */
		StreetInfo: string;

		/**
		 * The address city, such as <code>Portland</code>.
		 * Required
		 */
		City: string;

		/**
		 * The address state, such as <code>ME</code>.
		 * Required
		 */
		State: string;

		/**
		 * The address country, such as <code>US</code>.
		 * Required
		 */
		Country: string;

		/**
		 * The address postal code, such as <code>04352</code>.
		 * Required
		 */
		PostalCode: string;
	}
	export interface ValidateE911AddressPostBodyFormProperties {

		/**
		 * The AWS account ID.
		 * Required
		 */
		AwsAccountId: FormControl<string | null | undefined>,

		/**
		 * The address street number, such as <code>200</code> or <code>2121</code>.
		 * Required
		 */
		StreetNumber: FormControl<string | null | undefined>,

		/**
		 * The address street information, such as <code>8th Avenue</code>.
		 * Required
		 */
		StreetInfo: FormControl<string | null | undefined>,

		/**
		 * The address city, such as <code>Portland</code>.
		 * Required
		 */
		City: FormControl<string | null | undefined>,

		/**
		 * The address state, such as <code>ME</code>.
		 * Required
		 */
		State: FormControl<string | null | undefined>,

		/**
		 * The address country, such as <code>US</code>.
		 * Required
		 */
		Country: FormControl<string | null | undefined>,

		/**
		 * The address postal code, such as <code>04352</code>.
		 * Required
		 */
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressPostBodyFormGroup() {
		return new FormGroup<ValidateE911AddressPostBodyFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StreetNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StreetInfo: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

}

