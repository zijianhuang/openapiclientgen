import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the response from the server for the request to add custom attributes. */
	export interface AddCustomAttributesResponse {
	}


	/** Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequest {
		UserPoolId: string;
		CustomAttributes: Array<SchemaAttributeType>;
	}


	/** Contains information about the schema attribute. */
	export interface SchemaAttributeType {
		Name?: string;
		AttributeDataType?: SchemaAttributeTypeAttributeDataType;
		DeveloperOnlyAttribute?: boolean;
		Mutable?: boolean;
		Required?: boolean;

		/** The minimum and maximum value of an attribute that is of the number data type. */
		NumberAttributeConstraints?: NumberAttributeConstraintsType;

		/** The constraints associated with a string attribute. */
		StringAttributeConstraints?: StringAttributeConstraintsType;
	}

	export enum SchemaAttributeTypeAttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }


	/** The minimum and maximum value of an attribute that is of the number data type. */
	export interface NumberAttributeConstraintsType {
		MinValue?: string;
		MaxValue?: string;
	}


	/** The constraints associated with a string attribute. */
	export interface StringAttributeConstraintsType {
		MinLength?: string;
		MaxLength?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidParameterException {
	}

	export interface TooManyRequestsException {
	}

	export interface NotAuthorizedException {
	}

	export interface UserImportInProgressException {
	}

	export interface InternalErrorException {
	}

	export interface AdminAddUserToGroupRequest {
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}

	export interface UserNotFoundException {
	}


	/** Represents the response from the server for the request to confirm registration. */
	export interface AdminConfirmSignUpResponse {
	}


	/** Represents the request to confirm user registration. */
	export interface AdminConfirmSignUpRequest {
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	export interface ClientMetadataType {
	}

	export interface UnexpectedLambdaException {
	}

	export interface UserLambdaValidationException {
	}

	export interface TooManyFailedAttemptsException {
	}

	export interface InvalidLambdaResponseException {
	}

	export interface LimitExceededException {
	}


	/** Represents the response from the server to the request to create the user. */
	export interface AdminCreateUserResponse {

		/** The user type. */
		User?: UserType;
	}


	/** The user type. */
	export interface UserType {
		Username?: string;
		Attributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean;
		UserStatus?: UserTypeUserStatus;
		MFAOptions?: Array<MFAOptionType>;
	}


	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeType {
		Name: string;
		Value?: string;
	}

	export enum UserTypeUserStatus { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/** <p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionType {
		DeliveryMedium?: MFAOptionTypeDeliveryMedium;
		AttributeName?: string;
	}

	export enum MFAOptionTypeDeliveryMedium { SMS = 0, EMAIL = 1 }


	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequest {
		UserPoolId: string;
		Username: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;
		TemporaryPassword?: string;
		ForceAliasCreation?: boolean;
		MessageAction?: AdminCreateUserRequestMessageAction;
		DesiredDeliveryMediums?: Array<DeliveryMediumType>;
		ClientMetadata?: ClientMetadataType;
	}

	export enum AdminCreateUserRequestMessageAction { RESEND = 0, SUPPRESS = 1 }

	export enum DeliveryMediumType { SMS = 0, EMAIL = 1 }

	export interface UsernameExistsException {
	}

	export interface InvalidPasswordException {
	}

	export interface CodeDeliveryFailureException {
	}

	export interface PreconditionNotMetException {
	}

	export interface InvalidSmsRoleAccessPolicyException {
	}

	export interface InvalidSmsRoleTrustRelationshipException {
	}

	export interface UnsupportedUserStateException {
	}


	/** Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/** Represents the response received from the server for a request to delete user attributes. */
	export interface AdminDeleteUserAttributesResponse {
	}


	/** Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequest {
		UserPoolId: string;
		Username: string;
		UserAttributeNames: Array<string>;
	}

	export interface AdminDisableProviderForUserResponse {
	}

	export interface AdminDisableProviderForUserRequest {
		UserPoolId: string;

		/**
		 * A container for information about an identity provider for a user pool.
		 * Required
		 */
		User: ProviderUserIdentifierType;
	}


	/** A container for information about an identity provider for a user pool. */
	export interface ProviderUserIdentifierType {
		ProviderName?: string;
		ProviderAttributeName?: string;
		ProviderAttributeValue?: string;
	}

	export interface AliasExistsException {
	}


	/** Represents the response received from the server to disable the user as an administrator. */
	export interface AdminDisableUserResponse {
	}


	/** Represents the request to disable any user as an administrator. */
	export interface AdminDisableUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/** Represents the response from the server for the request to enable a user as an administrator. */
	export interface AdminEnableUserResponse {
	}


	/** Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
	}

	export interface InvalidUserPoolConfigurationException {
	}


	/** Gets the device response, as an administrator. */
	export interface AdminGetDeviceResponse {

		/**
		 * The device type.
		 * Required
		 */
		Device: DeviceType;
	}


	/** The device type. */
	export interface DeviceType {
		DeviceKey?: string;
		DeviceAttributes?: Array<AttributeType>;
		DeviceCreateDate?: Date;
		DeviceLastModifiedDate?: Date;
		DeviceLastAuthenticatedDate?: Date;
	}


	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequest {
		DeviceKey: string;
		UserPoolId: string;
		Username: string;
	}


	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponse {
		Username: string;
		UserAttributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean;
		UserStatus?: UserTypeUserStatus;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<string>;
	}


	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequest {
		UserPoolId: string;
		Username: string;
	}


	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	export enum AdminInitiateAuthResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

	export interface ChallengeParametersType {
	}


	/** The authentication result. */
	export interface AuthenticationResultType {
		AccessToken?: string;
		ExpiresIn?: number;
		TokenType?: string;
		RefreshToken?: string;
		IdToken?: string;

		/** The new device metadata type. */
		NewDeviceMetadata?: NewDeviceMetadataType;
	}


	/** The new device metadata type. */
	export interface NewDeviceMetadataType {
		DeviceKey?: string;
		DeviceGroupKey?: string;
	}


	/** Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequest {
		UserPoolId: string;
		ClientId: string;
		AuthFlow: AdminInitiateAuthRequestAuthFlow;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
	}

	export enum AdminInitiateAuthRequestAuthFlow { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }

	export interface AuthParametersType {
	}


	/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsMetadataType {
		AnalyticsEndpointId?: string;
	}


	/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface ContextDataType {
		IpAddress: string;
		ServerName: string;
		ServerPath: string;
		HttpHeaders: Array<HttpHeader>;
		EncodedData?: string;
	}


	/** The HTTP header. */
	export interface HttpHeader {
		headerName?: string;
		headerValue?: string;
	}

	export interface MFAMethodNotFoundException {
	}

	export interface PasswordResetRequiredException {
	}

	export interface UserNotConfirmedException {
	}

	export interface AdminLinkProviderForUserResponse {
	}

	export interface AdminLinkProviderForUserRequest {
		UserPoolId: string;

		/**
		 * A container for information about an identity provider for a user pool.
		 * Required
		 */
		DestinationUser: ProviderUserIdentifierType;

		/**
		 * A container for information about an identity provider for a user pool.
		 * Required
		 */
		SourceUser: ProviderUserIdentifierType;
	}


	/** Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}


	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequest {
		UserPoolId: string;
		Username: string;
		Limit?: number;
		PaginationToken?: string;
	}

	export interface AdminListGroupsForUserResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}


	/** The group type. */
	export interface GroupType {
		GroupName?: string;
		UserPoolId?: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export interface AdminListGroupsForUserRequest {
		Username: string;
		UserPoolId: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface AdminListUserAuthEventsResponse {
		AuthEvents?: Array<AuthEventType>;
		NextToken?: string;
	}


	/** The authentication event type. */
	export interface AuthEventType {
		EventId?: string;
		EventType?: AuthEventTypeEventType;
		CreationDate?: Date;
		EventResponse?: AuthEventTypeEventResponse;

		/** The event risk type. */
		EventRisk?: EventRiskType;
		ChallengeResponses?: Array<ChallengeResponseType>;

		/** Specifies the user context data captured at the time of an event request. */
		EventContextData?: EventContextDataType;

		/** Specifies the event feedback type. */
		EventFeedback?: EventFeedbackType;
	}

	export enum AuthEventTypeEventType { SignIn = 0, SignUp = 1, ForgotPassword = 2 }

	export enum AuthEventTypeEventResponse { Success = 0, Failure = 1 }


	/** The event risk type. */
	export interface EventRiskType {
		RiskDecision?: EventRiskTypeRiskDecision;
		RiskLevel?: EventRiskTypeRiskLevel;
		CompromisedCredentialsDetected?: boolean;
	}

	export enum EventRiskTypeRiskDecision { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum EventRiskTypeRiskLevel { Low = 0, Medium = 1, High = 2 }


	/** The challenge response type. */
	export interface ChallengeResponseType {
		ChallengeName?: ChallengeResponseTypeChallengeName;
		ChallengeResponse?: AuthEventTypeEventResponse;
	}

	export enum ChallengeResponseTypeChallengeName { Password = 0, Mfa = 1 }


	/** Specifies the user context data captured at the time of an event request. */
	export interface EventContextDataType {
		IpAddress?: string;
		DeviceName?: string;
		Timezone?: string;
		City?: string;
		Country?: string;
	}


	/** Specifies the event feedback type. */
	export interface EventFeedbackType {
		FeedbackValue: EventFeedbackTypeFeedbackValue;
		Provider: string;
		FeedbackDate?: Date;
	}

	export enum EventFeedbackTypeFeedbackValue { Valid = 0, Invalid = 1 }

	export interface AdminListUserAuthEventsRequest {
		UserPoolId: string;
		Username: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface UserPoolAddOnNotEnabledException {
	}

	export interface AdminRemoveUserFromGroupRequest {
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}


	/** Represents the response from the server to reset a user password as an administrator. */
	export interface AdminResetUserPasswordResponse {
	}


	/** Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequest {
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	export interface InvalidEmailRoleAccessPolicyException {
	}


	/** Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}


	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequest {
		UserPoolId: string;
		ClientId: string;
		ChallengeName: AdminInitiateAuthResponseChallengeName;
		ChallengeResponses?: ChallengeResponsesType;
		Session?: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export interface ChallengeResponsesType {
	}

	export interface CodeMismatchException {
	}

	export interface ExpiredCodeException {
	}

	export interface SoftwareTokenMFANotFoundException {
	}

	export interface AdminSetUserMFAPreferenceResponse {
	}

	export interface AdminSetUserMFAPreferenceRequest {

		/** The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/** The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		Username: string;
		UserPoolId: string;
	}


	/** The type used for enabling SMS MFA at the user level. */
	export interface SMSMfaSettingsType {
		Enabled?: boolean;
		PreferredMfa?: boolean;
	}


	/** The type used for enabling software token MFA at the user level. */
	export interface SoftwareTokenMfaSettingsType {
		Enabled?: boolean;
		PreferredMfa?: boolean;
	}

	export interface AdminSetUserPasswordResponse {
	}

	export interface AdminSetUserPasswordRequest {
		UserPoolId: string;
		Username: string;
		Password: string;
		Permanent?: boolean;
	}


	/** Represents the response from the server to set user settings as an administrator. */
	export interface AdminSetUserSettingsResponse {
	}


	/** You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequest {
		UserPoolId: string;
		Username: string;
		MFAOptions: Array<MFAOptionType>;
	}

	export interface AdminUpdateAuthEventFeedbackResponse {
	}

	export interface AdminUpdateAuthEventFeedbackRequest {
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}


	/** The status response from the request to update the device, as an administrator. */
	export interface AdminUpdateDeviceStatusResponse {
	}


	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus;
	}

	export enum AdminUpdateDeviceStatusRequestDeviceRememberedStatus { remembered = 0, not_remembered = 1 }


	/** Represents the response from the server for the request to update user attributes as an administrator. */
	export interface AdminUpdateUserAttributesResponse {
	}


	/** Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequest {
		UserPoolId: string;
		Username: string;
		UserAttributes: Array<AttributeType>;
		ClientMetadata?: ClientMetadataType;
	}


	/** The global sign-out response, as an administrator. */
	export interface AdminUserGlobalSignOutResponse {
	}


	/** The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequest {
		UserPoolId: string;
		Username: string;
	}

	export interface AssociateSoftwareTokenResponse {
		SecretCode?: string;
		Session?: string;
	}

	export interface AssociateSoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;
	}


	/** The response from the server to the change password request. */
	export interface ChangePasswordResponse {
	}


	/** Represents the request to change a user password. */
	export interface ChangePasswordRequest {
		PreviousPassword: string;
		ProposedPassword: string;
		AccessToken: string;
	}


	/** Confirms the device response. */
	export interface ConfirmDeviceResponse {
		UserConfirmationNecessary?: boolean;
	}


	/** Confirms the device request. */
	export interface ConfirmDeviceRequest {
		AccessToken: string;
		DeviceKey: string;

		/** The device verifier against which it will be authenticated. */
		DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
		DeviceName?: string;
	}


	/** The device verifier against which it will be authenticated. */
	export interface DeviceSecretVerifierConfigType {
		PasswordVerifier?: string;
		Salt?: string;
	}


	/** The response from the server that results from a user's request to retrieve a forgotten password. */
	export interface ConfirmForgotPasswordResponse {
	}


	/** The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		ConfirmationCode: string;
		Password: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}


	/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataType {
		EncodedData?: string;
	}


	/** Represents the response from the server for the registration confirmation. */
	export interface ConfirmSignUpResponse {
	}


	/** Represents the request to confirm registration of a user. */
	export interface ConfirmSignUpRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		ConfirmationCode: string;
		ForceAliasCreation?: boolean;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export interface CreateGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}

	export interface CreateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
	}

	export interface GroupExistsException {
	}

	export interface CreateIdentityProviderResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}


	/** A container for information about an identity provider. */
	export interface IdentityProviderType {
		UserPoolId?: string;
		ProviderName?: string;
		ProviderType?: IdentityProviderTypeProviderType;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export enum IdentityProviderTypeProviderType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }

	export interface ProviderDetailsType {
	}

	export interface AttributeMappingType {
	}

	export interface CreateIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
		ProviderType: IdentityProviderTypeProviderType;
		ProviderDetails: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}

	export interface DuplicateProviderException {
	}

	export interface CreateResourceServerResponse {

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
		ResourceServer: ResourceServerType;
	}


	/** A container for information about a resource server for a user pool. */
	export interface ResourceServerType {
		UserPoolId?: string;
		Identifier?: string;
		Name?: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/** A resource server scope. */
	export interface ResourceServerScopeType {
		ScopeName: string;
		ScopeDescription: string;
	}

	export interface CreateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/** Represents the response from the server to the request to create the user import job. */
	export interface CreateUserImportJobResponse {

		/** The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/** The user import job type. */
	export interface UserImportJobType {
		JobName?: string;
		JobId?: string;
		UserPoolId?: string;
		PreSignedUrl?: string;
		CreationDate?: Date;
		StartDate?: Date;
		CompletionDate?: Date;
		Status?: UserImportJobTypeStatus;
		CloudWatchLogsRoleArn?: string;
		ImportedUsers?: number;
		SkippedUsers?: number;
		FailedUsers?: number;
		CompletionMessage?: string;
	}

	export enum UserImportJobTypeStatus { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }


	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequest {
		JobName: string;
		UserPoolId: string;
		CloudWatchLogsRoleArn: string;
	}


	/** Represents the response from the server for the request to create a user pool. */
	export interface CreateUserPoolResponse {

		/** A container for information about the user pool. */
		UserPool?: UserPoolType;
	}


	/** A container for information about the user pool. */
	export interface UserPoolType {
		Id?: string;
		Name?: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		SchemaAttributes?: Array<SchemaAttributeType>;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;

		/** The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;
		EstimatedNumberOfUsers?: number;

		/** The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		SmsConfigurationFailure?: string;
		EmailConfigurationFailure?: string;
		Domain?: string;
		CustomDomain?: string;

		/** The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/** The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/** The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;
		Arn?: string;

		/** The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}


	/** The policy associated with a user pool. */
	export interface UserPoolPolicyType {

		/** The password policy type. */
		PasswordPolicy?: PasswordPolicyType;
	}


	/** The password policy type. */
	export interface PasswordPolicyType {
		MinimumLength?: number;
		RequireUppercase?: boolean;
		RequireLowercase?: boolean;
		RequireNumbers?: boolean;
		RequireSymbols?: boolean;
		TemporaryPasswordValidityDays?: number;
	}


	/** Specifies the configuration for AWS Lambda triggers. */
	export interface LambdaConfigType {
		PreSignUp?: string;
		CustomMessage?: string;
		PostConfirmation?: string;
		PreAuthentication?: string;
		PostAuthentication?: string;
		DefineAuthChallenge?: string;
		CreateAuthChallenge?: string;
		VerifyAuthChallengeResponse?: string;
		PreTokenGeneration?: string;
		UserMigration?: string;
	}

	export enum UserPoolTypeStatus { Enabled = 0, Disabled = 1 }

	export enum VerifiedAttributeType { phone_number = 0, email = 1 }

	export enum AliasAttributeType { phone_number = 0, email = 1, preferred_username = 2 }

	export enum UsernameAttributeType { phone_number = 0, email = 1 }


	/** The template for verification messages. */
	export interface VerificationMessageTemplateType {
		SmsMessage?: string;
		EmailMessage?: string;
		EmailSubject?: string;
		EmailMessageByLink?: string;
		EmailSubjectByLink?: string;
		DefaultEmailOption?: VerificationMessageTemplateTypeDefaultEmailOption;
	}

	export enum VerificationMessageTemplateTypeDefaultEmailOption { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }

	export enum UserPoolTypeMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/** The configuration for the user pool's device tracking. */
	export interface DeviceConfigurationType {
		ChallengeRequiredOnNewDevice?: boolean;
		DeviceOnlyRememberedOnUserPrompt?: boolean;
	}


	/** The email configuration type. */
	export interface EmailConfigurationType {
		SourceArn?: string;
		ReplyToEmailAddress?: string;
		EmailSendingAccount?: EmailConfigurationTypeEmailSendingAccount;
		From?: string;
		ConfigurationSet?: string;
	}

	export enum EmailConfigurationTypeEmailSendingAccount { COGNITO_DEFAULT = 0, DEVELOPER = 1 }


	/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationType {
		SnsCallerArn: string;
		ExternalId?: string;
	}

	export interface UserPoolTagsType {
	}


	/** The configuration for creating a new user profile. */
	export interface AdminCreateUserConfigType {
		AllowAdminCreateUserOnly?: boolean;
		UnusedAccountValidityDays?: number;

		/** The message template structure. */
		InviteMessageTemplate?: MessageTemplateType;
	}


	/** The message template structure. */
	export interface MessageTemplateType {
		SMSMessage?: string;
		EmailMessage?: string;
		EmailSubject?: string;
	}


	/** The user pool add-ons type. */
	export interface UserPoolAddOnsType {
		AdvancedSecurityMode: UserPoolAddOnsTypeAdvancedSecurityMode;
	}

	export enum UserPoolAddOnsTypeAdvancedSecurityMode { OFF = 0, AUDIT = 1, ENFORCED = 2 }


	/** The username configuration type.  */
	export interface UsernameConfigurationType {
		CaseSensitive: boolean;
	}


	/** The data type for <code>AccountRecoverySetting</code>. */
	export interface AccountRecoverySettingType {
		RecoveryMechanisms?: Array<RecoveryOptionType>;
	}


	/** A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionType {
		Priority: number;
		Name: RecoveryOptionTypeName;
	}

	export enum RecoveryOptionTypeName { verified_email = 0, verified_phone_number = 1, admin_only = 2 }


	/** Represents the request to create a user pool. */
	export interface CreateUserPoolRequest {
		PoolName: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;

		/** The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;

		/** The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;

		/** The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;
		Schema?: Array<SchemaAttributeType>;

		/** The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/** The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;

		/** The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	export interface UserPoolTaggingException {
	}


	/** Represents the response from the server to create a user pool client. */
	export interface CreateUserPoolClientResponse {

		/** Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/** Contains information about a user pool client. */
	export interface UserPoolClientType {
		UserPoolId?: string;
		ClientName?: string;
		ClientId?: string;
		ClientSecret?: string;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors;
	}

	export enum ExplicitAuthFlowsType { ADMIN_NO_SRP_AUTH = 0, CUSTOM_AUTH_FLOW_ONLY = 1, USER_PASSWORD_AUTH = 2, ALLOW_ADMIN_USER_PASSWORD_AUTH = 3, ALLOW_CUSTOM_AUTH = 4, ALLOW_USER_PASSWORD_AUTH = 5, ALLOW_USER_SRP_AUTH = 6, ALLOW_REFRESH_TOKEN_AUTH = 7 }

	export enum OAuthFlowType { code = 0, _implicit = 1, client_credentials = 2 }


	/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationType {
		ApplicationId: string;
		RoleArn: string;
		ExternalId: string;
		UserDataShared?: boolean;
	}

	export enum UserPoolClientTypePreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }


	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequest {
		UserPoolId: string;
		ClientName: string;
		GenerateSecret?: boolean;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors;
	}

	export interface ScopeDoesNotExistException {
	}

	export interface InvalidOAuthFlowException {
	}

	export interface CreateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}

	export interface CreateUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}


	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigType {
		CertificateArn: string;
	}

	export interface DeleteGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}

	export interface DeleteIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}

	export interface UnsupportedIdentityProviderException {
	}

	export interface DeleteResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
	}


	/** Represents the request to delete a user. */
	export interface DeleteUserRequest {
		AccessToken: string;
	}


	/** Represents the response from the server to delete user attributes. */
	export interface DeleteUserAttributesResponse {
	}


	/** Represents the request to delete user attributes. */
	export interface DeleteUserAttributesRequest {
		UserAttributeNames: Array<string>;
		AccessToken: string;
	}


	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequest {
		UserPoolId: string;
	}


	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
	}

	export interface DeleteUserPoolDomainResponse {
	}

	export interface DeleteUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;
	}

	export interface DescribeIdentityProviderResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}

	export interface DescribeIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}

	export interface DescribeResourceServerResponse {

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
		ResourceServer: ResourceServerType;
	}

	export interface DescribeResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
	}

	export interface DescribeRiskConfigurationResponse {

		/**
		 * The risk configuration type.
		 * Required
		 */
		RiskConfiguration: RiskConfigurationType;
	}


	/** The risk configuration type. */
	export interface RiskConfigurationType {
		UserPoolId?: string;
		ClientId?: string;

		/** The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/** The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
		LastModifiedDate?: Date;
	}


	/** The compromised credentials risk configuration type. */
	export interface CompromisedCredentialsRiskConfigurationType {
		EventFilter?: Array<EventFilterType>;

		/**
		 * The compromised credentials actions type
		 * Required
		 */
		Actions: CompromisedCredentialsActionsType;
	}

	export enum EventFilterType { SIGN_IN = 0, PASSWORD_CHANGE = 1, SIGN_UP = 2 }


	/** The compromised credentials actions type */
	export interface CompromisedCredentialsActionsType {
		EventAction: CompromisedCredentialsActionsTypeEventAction;
	}

	export enum CompromisedCredentialsActionsTypeEventAction { BLOCK = 0, NO_ACTION = 1 }


	/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
	export interface AccountTakeoverRiskConfigurationType {

		/** The notify configuration type. */
		NotifyConfiguration?: NotifyConfigurationType;

		/**
		 * Account takeover actions type.
		 * Required
		 */
		Actions: AccountTakeoverActionsType;
	}


	/** The notify configuration type. */
	export interface NotifyConfigurationType {
		From?: string;
		ReplyTo?: string;
		SourceArn: string;

		/** The notify email type. */
		BlockEmail?: NotifyEmailType;

		/** The notify email type. */
		NoActionEmail?: NotifyEmailType;

		/** The notify email type. */
		MfaEmail?: NotifyEmailType;
	}


	/** The notify email type. */
	export interface NotifyEmailType {
		Subject: string;
		HtmlBody?: string;
		TextBody?: string;
	}


	/** Account takeover actions type. */
	export interface AccountTakeoverActionsType {

		/** Account takeover action type. */
		LowAction?: AccountTakeoverActionType;

		/** Account takeover action type. */
		MediumAction?: AccountTakeoverActionType;

		/** Account takeover action type. */
		HighAction?: AccountTakeoverActionType;
	}


	/** Account takeover action type. */
	export interface AccountTakeoverActionType {
		Notify: boolean;
		EventAction: AccountTakeoverActionTypeEventAction;
	}

	export enum AccountTakeoverActionTypeEventAction { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


	/** The type of the configuration to override the risk decision. */
	export interface RiskExceptionConfigurationType {
		BlockedIPRangeList?: Array<string>;
		SkippedIPRangeList?: Array<string>;
	}

	export interface DescribeRiskConfigurationRequest {
		UserPoolId: string;
		ClientId?: string;
	}


	/** Represents the response from the server to the request to describe the user import job. */
	export interface DescribeUserImportJobResponse {

		/** The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/** Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}


	/** Represents the response to describe the user pool. */
	export interface DescribeUserPoolResponse {

		/** A container for information about the user pool. */
		UserPool?: UserPoolType;
	}


	/** Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequest {
		UserPoolId: string;
	}


	/** Represents the response from the server from a request to describe the user pool client. */
	export interface DescribeUserPoolClientResponse {

		/** Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/** Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
	}

	export interface DescribeUserPoolDomainResponse {

		/** A container for information about a domain. */
		DomainDescription?: DomainDescriptionType;
	}


	/** A container for information about a domain. */
	export interface DomainDescriptionType {
		UserPoolId?: string;
		AWSAccountId?: string;
		Domain?: string;
		S3Bucket?: string;
		CloudFrontDistribution?: string;
		Version?: string;
		Status?: DomainDescriptionTypeStatus;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}

	export enum DomainDescriptionTypeStatus { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export interface DescribeUserPoolDomainRequest {
		Domain: string;
	}


	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequest {
		AccessToken?: string;
		DeviceKey: string;
	}


	/** Respresents the response from the server regarding the request to reset a password. */
	export interface ForgotPasswordResponse {

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/** The code delivery details being returned from the server. */
	export interface CodeDeliveryDetailsType {
		Destination?: string;
		DeliveryMedium?: MFAOptionTypeDeliveryMedium;
		AttributeName?: string;
	}


	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequest {
		ClientId: string;
		SecretHash?: string;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}


	/** Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponse {
		UserPoolId?: string;
		CSVHeader?: Array<string>;
	}


	/** Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequest {
		UserPoolId: string;
	}


	/** Gets the device response. */
	export interface GetDeviceResponse {

		/**
		 * The device type.
		 * Required
		 */
		Device: DeviceType;
	}


	/** Represents the request to get the device. */
	export interface GetDeviceRequest {
		DeviceKey: string;
		AccessToken?: string;
	}

	export interface GetGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}

	export interface GetGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}

	export interface GetIdentityProviderByIdentifierResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}

	export interface GetIdentityProviderByIdentifierRequest {
		UserPoolId: string;
		IdpIdentifier: string;
	}


	/** Response from Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponse {
		Certificate?: string;
	}


	/** Request to get a signing certificate from Cognito. */
	export interface GetSigningCertificateRequest {
		UserPoolId: string;
	}

	export interface GetUICustomizationResponse {

		/**
		 * A container for the UI customization information for a user pool's built-in app UI.
		 * Required
		 */
		UICustomization: UICustomizationType;
	}


	/** A container for the UI customization information for a user pool's built-in app UI. */
	export interface UICustomizationType {
		UserPoolId?: string;
		ClientId?: string;
		ImageUrl?: string;
		CSS?: string;
		CSSVersion?: string;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export interface GetUICustomizationRequest {
		UserPoolId: string;
		ClientId?: string;
	}


	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponse {
		Username: string;
		UserAttributes: Array<AttributeType>;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<string>;
	}


	/** Represents the request to get information about the user. */
	export interface GetUserRequest {
		AccessToken: string;
	}


	/** The verification code response returned by the server response to get the user attribute verification code. */
	export interface GetUserAttributeVerificationCodeResponse {

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/** Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequest {
		AccessToken: string;
		AttributeName: string;
		ClientMetadata?: ClientMetadataType;
	}

	export interface GetUserPoolMfaConfigResponse {

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;
	}


	/** The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigType {
		SmsAuthenticationMessage?: string;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
	}


	/** The type used for enabling software token MFA at the user pool level. */
	export interface SoftwareTokenMfaConfigType {
		Enabled?: boolean;
	}

	export interface GetUserPoolMfaConfigRequest {
		UserPoolId: string;
	}


	/** The response to the request to sign out all devices. */
	export interface GlobalSignOutResponse {
	}


	/** Represents the request to sign out all devices. */
	export interface GlobalSignOutRequest {
		AccessToken: string;
	}


	/** Initiates the authentication response. */
	export interface InitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}


	/** Initiates the authentication request. */
	export interface InitiateAuthRequest {
		AuthFlow: AdminInitiateAuthRequestAuthFlow;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;
		ClientId: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
	}


	/** Represents the response to list devices. */
	export interface ListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}


	/** Represents the request to list the devices. */
	export interface ListDevicesRequest {
		AccessToken: string;
		Limit?: number;
		PaginationToken?: string;
	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}

	export interface ListGroupsRequest {
		UserPoolId: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface ListIdentityProvidersResponse {
		Providers: Array<ProviderDescription>;
		NextToken?: string;
	}


	/** A container for identity provider details. */
	export interface ProviderDescription {
		ProviderName?: string;
		ProviderType?: IdentityProviderTypeProviderType;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	export interface ListIdentityProvidersRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListResourceServersResponse {
		ResourceServers: Array<ResourceServerType>;
		NextToken?: string;
	}

	export interface ListResourceServersRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: UserPoolTagsType;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}


	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponse {
		UserImportJobs?: Array<UserImportJobType>;
		PaginationToken?: string;
	}


	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequest {
		UserPoolId: string;
		MaxResults: number;
		PaginationToken?: string;
	}


	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponse {
		UserPoolClients?: Array<UserPoolClientDescription>;
		NextToken?: string;
	}


	/** The description of the user pool client. */
	export interface UserPoolClientDescription {
		ClientId?: string;
		UserPoolId?: string;
		ClientName?: string;
	}


	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequest {
		UserPoolId: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponse {
		UserPools?: Array<UserPoolDescriptionType>;
		NextToken?: string;
	}


	/** A user pool description. */
	export interface UserPoolDescriptionType {
		Id?: string;
		Name?: string;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}


	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequest {
		NextToken?: string;
		MaxResults: number;
	}


	/** The response from the request to list users. */
	export interface ListUsersResponse {
		Users?: Array<UserType>;
		PaginationToken?: string;
	}


	/** Represents the request to list users. */
	export interface ListUsersRequest {
		UserPoolId: string;
		AttributesToGet?: Array<string>;
		Limit?: number;
		PaginationToken?: string;
		Filter?: string;
	}

	export interface ListUsersInGroupResponse {
		Users?: Array<UserType>;
		NextToken?: string;
	}

	export interface ListUsersInGroupRequest {
		UserPoolId: string;
		GroupName: string;
		Limit?: number;
		NextToken?: string;
	}


	/** The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponse {

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}


	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequest {
		ClientId: string;
		SecretHash?: string;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}


	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}


	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequest {
		ClientId: string;
		ChallengeName: AdminInitiateAuthResponseChallengeName;
		Session?: string;
		ChallengeResponses?: ChallengeResponsesType;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	export interface SetRiskConfigurationResponse {

		/**
		 * The risk configuration type.
		 * Required
		 */
		RiskConfiguration: RiskConfigurationType;
	}

	export interface SetRiskConfigurationRequest {
		UserPoolId: string;
		ClientId?: string;

		/** The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/** The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
	}

	export interface SetUICustomizationResponse {

		/**
		 * A container for the UI customization information for a user pool's built-in app UI.
		 * Required
		 */
		UICustomization: UICustomizationType;
	}

	export interface SetUICustomizationRequest {
		UserPoolId: string;
		ClientId?: string;
		CSS?: string;
		ImageFile?: string;
	}

	export interface SetUserMFAPreferenceResponse {
	}

	export interface SetUserMFAPreferenceRequest {

		/** The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/** The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		AccessToken: string;
	}

	export interface SetUserPoolMfaConfigResponse {

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;
	}

	export interface SetUserPoolMfaConfigRequest {
		UserPoolId: string;

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;
	}


	/** The response from the server for a set user settings request. */
	export interface SetUserSettingsResponse {
	}


	/** Represents the request to set user settings. */
	export interface SetUserSettingsRequest {
		AccessToken: string;
		MFAOptions: Array<MFAOptionType>;
	}


	/** The response from the server for a registration request. */
	export interface SignUpResponse {
		UserConfirmed: boolean;

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
		UserSub: string;
	}


	/** Represents the request to register a user. */
	export interface SignUpRequest {
		ClientId: string;
		SecretHash?: string;
		Username: string;
		Password: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}


	/** Represents the response from the server to the request to start the user import job. */
	export interface StartUserImportJobResponse {

		/** The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/** Represents the request to start the user import job. */
	export interface StartUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}


	/** Represents the response from the server to the request to stop the user import job. */
	export interface StopUserImportJobResponse {

		/** The user import job type. */
		UserImportJob?: UserImportJobType;
	}


	/** Represents the request to stop the user import job. */
	export interface StopUserImportJobRequest {
		UserPoolId: string;
		JobId: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: UserPoolTagsType;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateAuthEventFeedbackResponse {
	}

	export interface UpdateAuthEventFeedbackRequest {
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackToken: string;
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}


	/** The response to the request to update the device status. */
	export interface UpdateDeviceStatusResponse {
	}


	/** Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequest {
		AccessToken: string;
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus;
	}

	export interface UpdateGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}

	export interface UpdateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number;
	}

	export interface UpdateIdentityProviderResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}

	export interface UpdateIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}

	export interface UpdateResourceServerResponse {

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
		ResourceServer: ResourceServerType;
	}

	export interface UpdateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}


	/** Represents the response from the server for the request to update user attributes. */
	export interface UpdateUserAttributesResponse {
		CodeDeliveryDetailsList?: Array<CodeDeliveryDetailsType>;
	}


	/** Represents the request to update user attributes. */
	export interface UpdateUserAttributesRequest {
		UserAttributes: Array<AttributeType>;
		AccessToken: string;
		ClientMetadata?: ClientMetadataType;
	}


	/** Represents the response from the server when you make a request to update the user pool. */
	export interface UpdateUserPoolResponse {
	}


	/** Represents the request to update the user pool. */
	export interface UpdateUserPoolRequest {
		UserPoolId: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UserPoolTypeMfaConfiguration;

		/** The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;

		/** The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;

		/** The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/** The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/** The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	export interface ConcurrentModificationException {
	}


	/** Represents the response from the server to the request to update the user pool client. */
	export interface UpdateUserPoolClientResponse {

		/** Contains information about a user pool client. */
		UserPoolClient?: UserPoolClientType;
	}


	/** Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
		ClientName?: string;
		RefreshTokenValidity?: number;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors;
	}


	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}


	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequest {
		Domain: string;
		UserPoolId: string;

		/**
		 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
		 * Required
		 */
		CustomDomainConfig: CustomDomainConfigType;
	}

	export interface VerifySoftwareTokenResponse {
		Status?: VerifySoftwareTokenResponseStatus;
		Session?: string;
	}

	export enum VerifySoftwareTokenResponseStatus { SUCCESS = 0, ERROR = 1 }

	export interface VerifySoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;
		UserCode: string;
		FriendlyDeviceName?: string;
	}

	export interface EnableSoftwareTokenMFAException {
	}


	/** A container representing the response from the server from the request to verify user attributes. */
	export interface VerifyUserAttributeResponse {
	}


	/** Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequest {
		AccessToken: string;
		AttributeName: string;
		Code: string;
	}

	export enum AccountTakeoverEventActionType { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }

	export enum MessageActionType { RESEND = 0, SUPPRESS = 1 }

	export enum UserStatusType { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }

	export enum AuthFlowType { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }

	export enum ChallengeNameType { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

	export enum FeedbackValueType { Valid = 0, Invalid = 1 }

	export enum DeviceRememberedStatusType { remembered = 0, not_remembered = 1 }

	export enum AdvancedSecurityModeType { OFF = 0, AUDIT = 1, ENFORCED = 2 }

	export enum AttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }

	export enum EventType { SignIn = 0, SignUp = 1, ForgotPassword = 2 }

	export enum EventResponseType { Success = 0, Failure = 1 }

	export enum ChallengeName { Password = 0, Mfa = 1 }

	export enum ChallengeResponse { Success = 0, Failure = 1 }

	export enum CompromisedCredentialsEventActionType { BLOCK = 0, NO_ACTION = 1 }

	export enum IdentityProviderTypeType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }

	export enum PreventUserExistenceErrorTypes { LEGACY = 0, ENABLED = 1 }

	export enum UserPoolMfaType { OFF = 0, ON = 1, OPTIONAL = 2 }

	export enum DefaultEmailOptionType { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }

	export enum DomainStatusType { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export enum EmailSendingAccountType { COGNITO_DEFAULT = 0, DEVELOPER = 1 }

	export enum RiskDecisionType { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum RiskLevelType { Low = 0, Medium = 1, High = 2 }

	export enum RecoveryOptionNameType { verified_email = 0, verified_phone_number = 1, admin_only = 2 }

	export enum StatusType { Enabled = 0, Disabled = 1 }

	export enum UserImportJobStatusType { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }

	export enum VerifySoftwareTokenResponseType { SUCCESS = 0, ERROR = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds additional user attributes to the user pool schema.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes
		 * @return {AddCustomAttributesResponse} Success
		 */
		AddCustomAttributes(requestBody: AddCustomAttributesRequest): Observable<AddCustomAttributesResponse> {
			return this.http.post<AddCustomAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup
		 * @return {void} Success
		 */
		AdminAddUserToGroup(requestBody: AdminAddUserToGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp
		 * @return {AdminConfirmSignUpResponse} Success
		 */
		AdminConfirmSignUp(requestBody: AdminConfirmSignUpRequest): Observable<AdminConfirmSignUpResponse> {
			return this.http.post<AdminConfirmSignUpResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This message is based on a template that you configured in your call to or . This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> </note> <p>Alternatively, you can call AdminCreateUser with “SUPPRESS” for the <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p>AdminCreateUser requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser
		 * @return {AdminCreateUserResponse} Success
		 */
		AdminCreateUser(requestBody: AdminCreateUserRequest): Observable<AdminCreateUserResponse> {
			return this.http.post<AdminCreateUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser
		 * @return {void} Success
		 */
		AdminDeleteUser(requestBody: AdminDeleteUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes
		 * @return {AdminDeleteUserAttributesResponse} Success
		 */
		AdminDeleteUserAttributes(requestBody: AdminDeleteUserAttributesRequest): Observable<AdminDeleteUserAttributesResponse> {
			return this.http.post<AdminDeleteUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked <code>DestinationUser</code>) signs in, they must create a new user account. See .</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To disable a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social identity providers. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked in the call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser
		 * @return {AdminDisableProviderForUserResponse} Success
		 */
		AdminDisableProviderForUser(requestBody: AdminDisableProviderForUserRequest): Observable<AdminDisableProviderForUserResponse> {
			return this.http.post<AdminDisableProviderForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the specified user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser
		 * @return {AdminDisableUserResponse} Success
		 */
		AdminDisableUser(requestBody: AdminDisableUserRequest): Observable<AdminDisableUserResponse> {
			return this.http.post<AdminDisableUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser
		 * @return {AdminEnableUserResponse} Success
		 */
		AdminEnableUser(requestBody: AdminEnableUserRequest): Observable<AdminEnableUserResponse> {
			return this.http.post<AdminEnableUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice
		 * @return {void} Success
		 */
		AdminForgetDevice(requestBody: AdminForgetDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice
		 * @return {AdminGetDeviceResponse} Success
		 */
		AdminGetDevice(requestBody: AdminGetDeviceRequest): Observable<AdminGetDeviceResponse> {
			return this.http.post<AdminGetDeviceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser
		 * @return {AdminGetUserResponse} Success
		 */
		AdminGetUser(requestBody: AdminGetUserRequest): Observable<AdminGetUserResponse> {
			return this.http.post<AdminGetUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates the authentication flow, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth
		 * @return {AdminInitiateAuthResponse} Success
		 */
		AdminInitiateAuth(requestBody: AdminInitiateAuthRequest): Observable<AdminInitiateAuthResponse> {
			return this.http.post<AdminInitiateAuthResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external identity provider (<code>SourceUser</code>) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account. </p> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.</p> </important> <p>See also .</p> <p>This action is enabled only for admin access and requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser
		 * @return {AdminLinkProviderForUserResponse} Success
		 */
		AdminLinkProviderForUser(requestBody: AdminLinkProviderForUserRequest): Observable<AdminLinkProviderForUserResponse> {
			return this.http.post<AdminLinkProviderForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices
		 * @return {AdminListDevicesResponse} Success
		 */
		AdminListDevices(requestBody: AdminListDevicesRequest): Observable<AdminListDevicesResponse> {
			return this.http.post<AdminListDevicesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListGroupsForUserResponse} Success
		 */
		AdminListGroupsForUser(Limit: string, NextToken: string, requestBody: AdminListGroupsForUserRequest): Observable<AdminListGroupsForUserResponse> {
			return this.http.post<AdminListGroupsForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListUserAuthEventsResponse} Success
		 */
		AdminListUserAuthEvents(MaxResults: string, NextToken: string, requestBody: AdminListUserAuthEventsRequest): Observable<AdminListUserAuthEventsResponse> {
			return this.http.post<AdminListUserAuthEventsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup
		 * @return {void} Success
		 */
		AdminRemoveUserFromGroup(requestBody: AdminRemoveUserFromGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword
		 * @return {AdminResetUserPasswordResponse} Success
		 */
		AdminResetUserPassword(requestBody: AdminResetUserPasswordRequest): Observable<AdminResetUserPasswordResponse> {
			return this.http.post<AdminResetUserPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Responds to an authentication challenge, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge
		 * @return {AdminRespondToAuthChallengeResponse} Success
		 */
		AdminRespondToAuthChallenge(requestBody: AdminRespondToAuthChallengeRequest): Observable<AdminRespondToAuthChallengeResponse> {
			return this.http.post<AdminRespondToAuthChallengeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the user's multi-factor authentication (MFA) preference, including which MFA options are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference
		 * @return {AdminSetUserMFAPreferenceResponse} Success
		 */
		AdminSetUserMFAPreference(requestBody: AdminSetUserMFAPreferenceRequest): Observable<AdminSetUserMFAPreferenceResponse> {
			return this.http.post<AdminSetUserMFAPreferenceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status will be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it expires, the user will not be able to sign in and their password will need to be reset by an administrator. </p> <p>Once the user has set a new password, or the password is permanent, the user status will be set to <code>Confirmed</code>.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword
		 * @return {AdminSetUserPasswordResponse} Success
		 */
		AdminSetUserPassword(requestBody: AdminSetUserPasswordRequest): Observable<AdminSetUserPasswordResponse> {
			return this.http.post<AdminSetUserPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use the <a>AdminSetUserMFAPreference</a> action instead.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings
		 * @return {AdminSetUserSettingsResponse} Success
		 */
		AdminSetUserSettings(requestBody: AdminSetUserSettingsRequest): Observable<AdminSetUserSettingsResponse> {
			return this.http.post<AdminSetUserSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides feedback for an authentication event as to whether it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback
		 * @return {AdminUpdateAuthEventFeedbackResponse} Success
		 */
		AdminUpdateAuthEventFeedback(requestBody: AdminUpdateAuthEventFeedbackRequest): Observable<AdminUpdateAuthEventFeedbackResponse> {
			return this.http.post<AdminUpdateAuthEventFeedbackResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus
		 * @return {AdminUpdateDeviceStatusResponse} Success
		 */
		AdminUpdateDeviceStatus(requestBody: AdminUpdateDeviceStatusRequest): Observable<AdminUpdateDeviceStatusResponse> {
			return this.http.post<AdminUpdateDeviceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes
		 * @return {AdminUpdateUserAttributesResponse} Success
		 */
		AdminUpdateUserAttributes(requestBody: AdminUpdateUserAttributesRequest): Observable<AdminUpdateUserAttributesResponse> {
			return this.http.post<AdminUpdateUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut
		 * @return {AdminUserGlobalSignOutResponse} Success
		 */
		AdminUserGlobalSignOut(requestBody: AdminUserGlobalSignOutRequest): Observable<AdminUserGlobalSignOutResponse> {
			return this.http.post<AdminUserGlobalSignOutResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a unique generated shared secret key code for the user account. The request takes an access token or a session string, but not both.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken
		 * @return {AssociateSoftwareTokenResponse} Success
		 */
		AssociateSoftwareToken(requestBody: AssociateSoftwareTokenRequest): Observable<AssociateSoftwareTokenResponse> {
			return this.http.post<AssociateSoftwareTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the password for a specified user in a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword
		 * @return {ChangePasswordResponse} Success
		 */
		ChangePassword(requestBody: ChangePasswordRequest): Observable<ChangePasswordResponse> {
			return this.http.post<ChangePasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirms tracking of the device. This API call is the call that begins device tracking.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice
		 * @return {ConfirmDeviceResponse} Success
		 */
		ConfirmDevice(requestBody: ConfirmDeviceRequest): Observable<ConfirmDeviceResponse> {
			return this.http.post<ConfirmDeviceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows a user to enter a confirmation code to reset a forgotten password.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword
		 * @return {ConfirmForgotPasswordResponse} Success
		 */
		ConfirmForgotPassword(requestBody: ConfirmForgotPasswordRequest): Observable<ConfirmForgotPasswordResponse> {
			return this.http.post<ConfirmForgotPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirms registration of a user and handles the existing alias from a previous user.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp
		 * @return {ConfirmSignUpResponse} Success
		 */
		ConfirmSignUp(requestBody: ConfirmSignUpRequest): Observable<ConfirmSignUpResponse> {
			return this.http.post<ConfirmSignUpResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an identity provider for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider
		 * @return {CreateIdentityProviderResponse} Success
		 */
		CreateIdentityProvider(requestBody: CreateIdentityProviderRequest): Observable<CreateIdentityProviderResponse> {
			return this.http.post<CreateIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new OAuth2.0 resource server and defines custom scopes in it.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer
		 * @return {CreateResourceServerResponse} Success
		 */
		CreateResourceServer(requestBody: CreateResourceServerRequest): Observable<CreateResourceServerResponse> {
			return this.http.post<CreateResourceServerResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the user import job.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob
		 * @return {CreateUserImportJobResponse} Success
		 */
		CreateUserImportJob(requestBody: CreateUserImportJobRequest): Observable<CreateUserImportJobResponse> {
			return this.http.post<CreateUserImportJobResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Amazon Cognito user pool and sets the password policy for the pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool
		 * @return {CreateUserPoolResponse} Success
		 */
		CreateUserPool(requestBody: CreateUserPoolRequest): Observable<CreateUserPoolResponse> {
			return this.http.post<CreateUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the user pool client.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient
		 * @return {CreateUserPoolClientResponse} Success
		 */
		CreateUserPoolClient(requestBody: CreateUserPoolClientRequest): Observable<CreateUserPoolClientResponse> {
			return this.http.post<CreateUserPoolClientResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new domain for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain
		 * @return {CreateUserPoolDomainResponse} Success
		 */
		CreateUserPoolDomain(requestBody: CreateUserPoolDomainRequest): Observable<CreateUserPoolDomainResponse> {
			return this.http.post<CreateUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a group. Currently only groups with no members can be deleted.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup
		 * @return {void} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an identity provider for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider
		 * @return {void} Success
		 */
		DeleteIdentityProvider(requestBody: DeleteIdentityProviderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a resource server.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer
		 * @return {void} Success
		 */
		DeleteResourceServer(requestBody: DeleteResourceServerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows a user to delete himself or herself.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser
		 * @return {void} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the attributes for a user.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes
		 * @return {DeleteUserAttributesResponse} Success
		 */
		DeleteUserAttributes(requestBody: DeleteUserAttributesRequest): Observable<DeleteUserAttributesResponse> {
			return this.http.post<DeleteUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Amazon Cognito user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool
		 * @return {void} Success
		 */
		DeleteUserPool(requestBody: DeleteUserPoolRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows the developer to delete the user pool client.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient
		 * @return {void} Success
		 */
		DeleteUserPoolClient(requestBody: DeleteUserPoolClientRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a domain for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain
		 * @return {DeleteUserPoolDomainResponse} Success
		 */
		DeleteUserPoolDomain(requestBody: DeleteUserPoolDomainRequest): Observable<DeleteUserPoolDomainResponse> {
			return this.http.post<DeleteUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specific identity provider.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider
		 * @return {DescribeIdentityProviderResponse} Success
		 */
		DescribeIdentityProvider(requestBody: DescribeIdentityProviderRequest): Observable<DescribeIdentityProviderResponse> {
			return this.http.post<DescribeIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a resource server.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer
		 * @return {DescribeResourceServerResponse} Success
		 */
		DescribeResourceServer(requestBody: DescribeResourceServerRequest): Observable<DescribeResourceServerResponse> {
			return this.http.post<DescribeResourceServerResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the risk configuration.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration
		 * @return {DescribeRiskConfigurationResponse} Success
		 */
		DescribeRiskConfiguration(requestBody: DescribeRiskConfigurationRequest): Observable<DescribeRiskConfigurationResponse> {
			return this.http.post<DescribeRiskConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the user import job.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob
		 * @return {DescribeUserImportJobResponse} Success
		 */
		DescribeUserImportJob(requestBody: DescribeUserImportJobRequest): Observable<DescribeUserImportJobResponse> {
			return this.http.post<DescribeUserImportJobResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the configuration information and metadata of the specified user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool
		 * @return {DescribeUserPoolResponse} Success
		 */
		DescribeUserPool(requestBody: DescribeUserPoolRequest): Observable<DescribeUserPoolResponse> {
			return this.http.post<DescribeUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Client method for returning the configuration information and metadata of the specified user pool app client.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient
		 * @return {DescribeUserPoolClientResponse} Success
		 */
		DescribeUserPoolClient(requestBody: DescribeUserPoolClientRequest): Observable<DescribeUserPoolClientResponse> {
			return this.http.post<DescribeUserPoolClientResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a domain.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain
		 * @return {DescribeUserPoolDomainResponse} Success
		 */
		DescribeUserPoolDomain(requestBody: DescribeUserPoolDomainRequest): Observable<DescribeUserPoolDomainResponse> {
			return this.http.post<DescribeUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Forgets the specified device.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice
		 * @return {void} Success
		 */
		ForgetDevice(requestBody: ForgetDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call .
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword
		 * @return {ForgotPasswordResponse} Success
		 */
		ForgotPassword(requestBody: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
			return this.http.post<ForgotPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the header information for the .csv file to be used as input for the user import job.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader
		 * @return {GetCSVHeaderResponse} Success
		 */
		GetCSVHeader(requestBody: GetCSVHeaderRequest): Observable<GetCSVHeaderResponse> {
			return this.http.post<GetCSVHeaderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the device.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice
		 * @return {GetDeviceResponse} Success
		 */
		GetDevice(requestBody: GetDeviceRequest): Observable<GetDeviceResponse> {
			return this.http.post<GetDeviceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup
		 * @return {GetGroupResponse} Success
		 */
		GetGroup(requestBody: GetGroupRequest): Observable<GetGroupResponse> {
			return this.http.post<GetGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified identity provider.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier
		 * @return {GetIdentityProviderByIdentifierResponse} Success
		 */
		GetIdentityProviderByIdentifier(requestBody: GetIdentityProviderByIdentifierRequest): Observable<GetIdentityProviderByIdentifierResponse> {
			return this.http.post<GetIdentityProviderByIdentifierResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method takes a user pool ID, and returns the signing certificate.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate
		 * @return {GetSigningCertificateResponse} Success
		 */
		GetSigningCertificate(requestBody: GetSigningCertificateRequest): Observable<GetSigningCertificateResponse> {
			return this.http.post<GetSigningCertificateResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that is returned. If nothing is present, then an empty shape is returned.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization
		 * @return {GetUICustomizationResponse} Success
		 */
		GetUICustomization(requestBody: GetUICustomizationRequest): Observable<GetUICustomizationResponse> {
			return this.http.post<GetUICustomizationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the user attributes and metadata for a user.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUser
		 * @return {GetUserResponse} Success
		 */
		GetUser(requestBody: GetUserRequest): Observable<GetUserResponse> {
			return this.http.post<GetUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the user attribute verification code for the specified attribute name.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode
		 * @return {GetUserAttributeVerificationCodeResponse} Success
		 */
		GetUserAttributeVerificationCode(requestBody: GetUserAttributeVerificationCodeRequest): Observable<GetUserAttributeVerificationCodeResponse> {
			return this.http.post<GetUserAttributeVerificationCodeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the user pool multi-factor authentication (MFA) configuration.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig
		 * @return {GetUserPoolMfaConfigResponse} Success
		 */
		GetUserPoolMfaConfig(requestBody: GetUserPoolMfaConfigRequest): Observable<GetUserPoolMfaConfigResponse> {
			return this.http.post<GetUserPoolMfaConfigResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut
		 * @return {GlobalSignOutResponse} Success
		 */
		GlobalSignOut(requestBody: GlobalSignOutRequest): Observable<GlobalSignOutResponse> {
			return this.http.post<GlobalSignOutResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates the authentication flow.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth
		 * @return {InitiateAuthResponse} Success
		 */
		InitiateAuth(requestBody: InitiateAuthRequest): Observable<InitiateAuthResponse> {
			return this.http.post<InitiateAuthResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the devices.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(requestBody: ListDevicesRequest): Observable<ListDevicesResponse> {
			return this.http.post<ListDevicesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(Limit: string, NextToken: string, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about all identity providers for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(MaxResults: string, NextToken: string, requestBody: ListIdentityProvidersRequest): Observable<ListIdentityProvidersResponse> {
			return this.http.post<ListIdentityProvidersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resource servers for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceServersResponse} Success
		 */
		ListResourceServers(MaxResults: string, NextToken: string, requestBody: ListResourceServersRequest): Observable<ListResourceServersResponse> {
			return this.http.post<ListResourceServersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user import jobs.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs
		 * @return {ListUserImportJobsResponse} Success
		 */
		ListUserImportJobs(requestBody: ListUserImportJobsRequest): Observable<ListUserImportJobsResponse> {
			return this.http.post<ListUserImportJobsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the clients that have been created for the specified user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolClientsResponse} Success
		 */
		ListUserPoolClients(MaxResults: string, NextToken: string, requestBody: ListUserPoolClientsRequest): Observable<ListUserPoolClientsResponse> {
			return this.http.post<ListUserPoolClientsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user pools associated with an AWS account.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolsResponse} Success
		 */
		ListUserPools(MaxResults: string, NextToken: string, requestBody: ListUserPoolsRequest): Observable<ListUserPoolsResponse> {
			return this.http.post<ListUserPoolsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the users in the Amazon Cognito user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers
		 * @param {string} Limit Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(Limit: string, PaginationToken: string, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersInGroupResponse} Success
		 */
		ListUsersInGroup(Limit: string, NextToken: string, requestBody: ListUsersInGroupRequest): Observable<ListUsersInGroupResponse> {
			return this.http.post<ListUsersInGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resends the confirmation (for confirmation of registration) to a specific user in the user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode
		 * @return {ResendConfirmationCodeResponse} Success
		 */
		ResendConfirmationCode(requestBody: ResendConfirmationCodeRequest): Observable<ResendConfirmationCodeResponse> {
			return this.http.post<ResendConfirmationCodeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Responds to the authentication challenge.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge
		 * @return {RespondToAuthChallengeResponse} Success
		 */
		RespondToAuthChallenge(requestBody: RespondToAuthChallengeRequest): Observable<RespondToAuthChallengeResponse> {
			return this.http.post<RespondToAuthChallengeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To enable Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p> <p>See .</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration
		 * @return {SetRiskConfigurationResponse} Success
		 */
		SetRiskConfiguration(requestBody: SetRiskConfigurationRequest): Observable<SetRiskConfigurationResponse> {
			return this.http.post<SetRiskConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the UI customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the <code>ALL</code> configuration. </p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization
		 * @return {SetUICustomizationResponse} Success
		 */
		SetUICustomization(requestBody: SetUICustomizationRequest): Observable<SetUICustomizationResponse> {
			return this.http.post<SetUICustomizationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference
		 * @return {SetUserMFAPreferenceResponse} Success
		 */
		SetUserMFAPreference(requestBody: SetUserMFAPreferenceRequest): Observable<SetUserMFAPreferenceResponse> {
			return this.http.post<SetUserMFAPreferenceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set the user pool multi-factor authentication (MFA) configuration.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig
		 * @return {SetUserPoolMfaConfigResponse} Success
		 */
		SetUserPoolMfaConfig(requestBody: SetUserPoolMfaConfigRequest): Observable<SetUserPoolMfaConfigResponse> {
			return this.http.post<SetUserPoolMfaConfigResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use the <a>SetUserMFAPreference</a> action instead.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings
		 * @return {SetUserSettingsResponse} Success
		 */
		SetUserSettings(requestBody: SetUserSettingsRequest): Observable<SetUserSettingsResponse> {
			return this.http.post<SetUserSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers the user in the specified user pool and creates a user name, password, and user attributes.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SignUp
		 * @return {SignUpResponse} Success
		 */
		SignUp(requestBody: SignUpRequest): Observable<SignUpResponse> {
			return this.http.post<SignUpResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the user import.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob
		 * @return {StartUserImportJobResponse} Success
		 */
		StartUserImportJob(requestBody: StartUserImportJobRequest): Observable<StartUserImportJobResponse> {
			return this.http.post<StartUserImportJobResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the user import job.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob
		 * @return {StopUserImportJobResponse} Success
		 */
		StopUserImportJob(requestBody: StopUserImportJobRequest): Observable<StopUserImportJobResponse> {
			return this.http.post<StopUserImportJobResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an IAM policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the feedback for an authentication event whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback
		 * @return {UpdateAuthEventFeedbackResponse} Success
		 */
		UpdateAuthEventFeedback(requestBody: UpdateAuthEventFeedbackRequest): Observable<UpdateAuthEventFeedbackResponse> {
			return this.http.post<UpdateAuthEventFeedbackResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the device status.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus
		 * @return {UpdateDeviceStatusResponse} Success
		 */
		UpdateDeviceStatus(requestBody: UpdateDeviceStatusRequest): Observable<UpdateDeviceStatusResponse> {
			return this.http.post<UpdateDeviceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(requestBody: UpdateGroupRequest): Observable<UpdateGroupResponse> {
			return this.http.post<UpdateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates identity provider information for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider
		 * @return {UpdateIdentityProviderResponse} Success
		 */
		UpdateIdentityProvider(requestBody: UpdateIdentityProviderRequest): Observable<UpdateIdentityProviderResponse> {
			return this.http.post<UpdateIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer
		 * @return {UpdateResourceServerResponse} Success
		 */
		UpdateResourceServer(requestBody: UpdateResourceServerRequest): Observable<UpdateResourceServerResponse> {
			return this.http.post<UpdateResourceServerResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows a user to update a specific attribute (one at a time).
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes
		 * @return {UpdateUserAttributesResponse} Success
		 */
		UpdateUserAttributes(requestBody: UpdateUserAttributesRequest): Observable<UpdateUserAttributesResponse> {
			return this.http.post<UpdateUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings with .</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool
		 * @return {UpdateUserPoolResponse} Success
		 */
		UpdateUserPool(requestBody: UpdateUserPoolRequest): Observable<UpdateUserPoolResponse> {
			return this.http.post<UpdateUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings with .</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient
		 * @return {UpdateUserPoolClientResponse} Success
		 */
		UpdateUserPoolClient(requestBody: UpdateUserPoolClientRequest): Observable<UpdateUserPoolClientResponse> {
			return this.http.post<UpdateUserPoolClientResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You cannot use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with AWS Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the AWS Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain
		 * @return {UpdateUserPoolDomainResponse} Success
		 */
		UpdateUserPoolDomain(requestBody: UpdateUserPoolDomainRequest): Observable<UpdateUserPoolDomainResponse> {
			return this.http.post<UpdateUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this API to register a user's entered TOTP code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken
		 * @return {VerifySoftwareTokenResponse} Success
		 */
		VerifySoftwareToken(requestBody: VerifySoftwareTokenRequest): Observable<VerifySoftwareTokenResponse> {
			return this.http.post<VerifySoftwareTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies the specified user attributes in the user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute
		 * @return {VerifyUserAttributeResponse} Success
		 */
		VerifyUserAttribute(requestBody: VerifyUserAttributeRequest): Observable<VerifyUserAttributeResponse> {
			return this.http.post<VerifyUserAttributeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddCustomAttributesX_Amz_Target { AWSCognitoIdentityProviderService_AddCustomAttributes = 0 }

	export enum AdminAddUserToGroupX_Amz_Target { AWSCognitoIdentityProviderService_AdminAddUserToGroup = 0 }

	export enum AdminConfirmSignUpX_Amz_Target { AWSCognitoIdentityProviderService_AdminConfirmSignUp = 0 }

	export enum AdminCreateUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminCreateUser = 0 }

	export enum AdminDeleteUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminDeleteUser = 0 }

	export enum AdminDeleteUserAttributesX_Amz_Target { AWSCognitoIdentityProviderService_AdminDeleteUserAttributes = 0 }

	export enum AdminDisableProviderForUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminDisableProviderForUser = 0 }

	export enum AdminDisableUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminDisableUser = 0 }

	export enum AdminEnableUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminEnableUser = 0 }

	export enum AdminForgetDeviceX_Amz_Target { AWSCognitoIdentityProviderService_AdminForgetDevice = 0 }

	export enum AdminGetDeviceX_Amz_Target { AWSCognitoIdentityProviderService_AdminGetDevice = 0 }

	export enum AdminGetUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminGetUser = 0 }

	export enum AdminInitiateAuthX_Amz_Target { AWSCognitoIdentityProviderService_AdminInitiateAuth = 0 }

	export enum AdminLinkProviderForUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminLinkProviderForUser = 0 }

	export enum AdminListDevicesX_Amz_Target { AWSCognitoIdentityProviderService_AdminListDevices = 0 }

	export enum AdminListGroupsForUserX_Amz_Target { AWSCognitoIdentityProviderService_AdminListGroupsForUser = 0 }

	export enum AdminListUserAuthEventsX_Amz_Target { AWSCognitoIdentityProviderService_AdminListUserAuthEvents = 0 }

	export enum AdminRemoveUserFromGroupX_Amz_Target { AWSCognitoIdentityProviderService_AdminRemoveUserFromGroup = 0 }

	export enum AdminResetUserPasswordX_Amz_Target { AWSCognitoIdentityProviderService_AdminResetUserPassword = 0 }

	export enum AdminRespondToAuthChallengeX_Amz_Target { AWSCognitoIdentityProviderService_AdminRespondToAuthChallenge = 0 }

	export enum AdminSetUserMFAPreferenceX_Amz_Target { AWSCognitoIdentityProviderService_AdminSetUserMFAPreference = 0 }

	export enum AdminSetUserPasswordX_Amz_Target { AWSCognitoIdentityProviderService_AdminSetUserPassword = 0 }

	export enum AdminSetUserSettingsX_Amz_Target { AWSCognitoIdentityProviderService_AdminSetUserSettings = 0 }

	export enum AdminUpdateAuthEventFeedbackX_Amz_Target { AWSCognitoIdentityProviderService_AdminUpdateAuthEventFeedback = 0 }

	export enum AdminUpdateDeviceStatusX_Amz_Target { AWSCognitoIdentityProviderService_AdminUpdateDeviceStatus = 0 }

	export enum AdminUpdateUserAttributesX_Amz_Target { AWSCognitoIdentityProviderService_AdminUpdateUserAttributes = 0 }

	export enum AdminUserGlobalSignOutX_Amz_Target { AWSCognitoIdentityProviderService_AdminUserGlobalSignOut = 0 }

	export enum AssociateSoftwareTokenX_Amz_Target { AWSCognitoIdentityProviderService_AssociateSoftwareToken = 0 }

	export enum ChangePasswordX_Amz_Target { AWSCognitoIdentityProviderService_ChangePassword = 0 }

	export enum ConfirmDeviceX_Amz_Target { AWSCognitoIdentityProviderService_ConfirmDevice = 0 }

	export enum ConfirmForgotPasswordX_Amz_Target { AWSCognitoIdentityProviderService_ConfirmForgotPassword = 0 }

	export enum ConfirmSignUpX_Amz_Target { AWSCognitoIdentityProviderService_ConfirmSignUp = 0 }

	export enum CreateGroupX_Amz_Target { AWSCognitoIdentityProviderService_CreateGroup = 0 }

	export enum CreateIdentityProviderX_Amz_Target { AWSCognitoIdentityProviderService_CreateIdentityProvider = 0 }

	export enum CreateResourceServerX_Amz_Target { AWSCognitoIdentityProviderService_CreateResourceServer = 0 }

	export enum CreateUserImportJobX_Amz_Target { AWSCognitoIdentityProviderService_CreateUserImportJob = 0 }

	export enum CreateUserPoolX_Amz_Target { AWSCognitoIdentityProviderService_CreateUserPool = 0 }

	export enum CreateUserPoolClientX_Amz_Target { AWSCognitoIdentityProviderService_CreateUserPoolClient = 0 }

	export enum CreateUserPoolDomainX_Amz_Target { AWSCognitoIdentityProviderService_CreateUserPoolDomain = 0 }

	export enum DeleteGroupX_Amz_Target { AWSCognitoIdentityProviderService_DeleteGroup = 0 }

	export enum DeleteIdentityProviderX_Amz_Target { AWSCognitoIdentityProviderService_DeleteIdentityProvider = 0 }

	export enum DeleteResourceServerX_Amz_Target { AWSCognitoIdentityProviderService_DeleteResourceServer = 0 }

	export enum DeleteUserX_Amz_Target { AWSCognitoIdentityProviderService_DeleteUser = 0 }

	export enum DeleteUserAttributesX_Amz_Target { AWSCognitoIdentityProviderService_DeleteUserAttributes = 0 }

	export enum DeleteUserPoolX_Amz_Target { AWSCognitoIdentityProviderService_DeleteUserPool = 0 }

	export enum DeleteUserPoolClientX_Amz_Target { AWSCognitoIdentityProviderService_DeleteUserPoolClient = 0 }

	export enum DeleteUserPoolDomainX_Amz_Target { AWSCognitoIdentityProviderService_DeleteUserPoolDomain = 0 }

	export enum DescribeIdentityProviderX_Amz_Target { AWSCognitoIdentityProviderService_DescribeIdentityProvider = 0 }

	export enum DescribeResourceServerX_Amz_Target { AWSCognitoIdentityProviderService_DescribeResourceServer = 0 }

	export enum DescribeRiskConfigurationX_Amz_Target { AWSCognitoIdentityProviderService_DescribeRiskConfiguration = 0 }

	export enum DescribeUserImportJobX_Amz_Target { AWSCognitoIdentityProviderService_DescribeUserImportJob = 0 }

	export enum DescribeUserPoolX_Amz_Target { AWSCognitoIdentityProviderService_DescribeUserPool = 0 }

	export enum DescribeUserPoolClientX_Amz_Target { AWSCognitoIdentityProviderService_DescribeUserPoolClient = 0 }

	export enum DescribeUserPoolDomainX_Amz_Target { AWSCognitoIdentityProviderService_DescribeUserPoolDomain = 0 }

	export enum ForgetDeviceX_Amz_Target { AWSCognitoIdentityProviderService_ForgetDevice = 0 }

	export enum ForgotPasswordX_Amz_Target { AWSCognitoIdentityProviderService_ForgotPassword = 0 }

	export enum GetCSVHeaderX_Amz_Target { AWSCognitoIdentityProviderService_GetCSVHeader = 0 }

	export enum GetDeviceX_Amz_Target { AWSCognitoIdentityProviderService_GetDevice = 0 }

	export enum GetGroupX_Amz_Target { AWSCognitoIdentityProviderService_GetGroup = 0 }

	export enum GetIdentityProviderByIdentifierX_Amz_Target { AWSCognitoIdentityProviderService_GetIdentityProviderByIdentifier = 0 }

	export enum GetSigningCertificateX_Amz_Target { AWSCognitoIdentityProviderService_GetSigningCertificate = 0 }

	export enum GetUICustomizationX_Amz_Target { AWSCognitoIdentityProviderService_GetUICustomization = 0 }

	export enum GetUserX_Amz_Target { AWSCognitoIdentityProviderService_GetUser = 0 }

	export enum GetUserAttributeVerificationCodeX_Amz_Target { AWSCognitoIdentityProviderService_GetUserAttributeVerificationCode = 0 }

	export enum GetUserPoolMfaConfigX_Amz_Target { AWSCognitoIdentityProviderService_GetUserPoolMfaConfig = 0 }

	export enum GlobalSignOutX_Amz_Target { AWSCognitoIdentityProviderService_GlobalSignOut = 0 }

	export enum InitiateAuthX_Amz_Target { AWSCognitoIdentityProviderService_InitiateAuth = 0 }

	export enum ListDevicesX_Amz_Target { AWSCognitoIdentityProviderService_ListDevices = 0 }

	export enum ListGroupsX_Amz_Target { AWSCognitoIdentityProviderService_ListGroups = 0 }

	export enum ListIdentityProvidersX_Amz_Target { AWSCognitoIdentityProviderService_ListIdentityProviders = 0 }

	export enum ListResourceServersX_Amz_Target { AWSCognitoIdentityProviderService_ListResourceServers = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSCognitoIdentityProviderService_ListTagsForResource = 0 }

	export enum ListUserImportJobsX_Amz_Target { AWSCognitoIdentityProviderService_ListUserImportJobs = 0 }

	export enum ListUserPoolClientsX_Amz_Target { AWSCognitoIdentityProviderService_ListUserPoolClients = 0 }

	export enum ListUserPoolsX_Amz_Target { AWSCognitoIdentityProviderService_ListUserPools = 0 }

	export enum ListUsersX_Amz_Target { AWSCognitoIdentityProviderService_ListUsers = 0 }

	export enum ListUsersInGroupX_Amz_Target { AWSCognitoIdentityProviderService_ListUsersInGroup = 0 }

	export enum ResendConfirmationCodeX_Amz_Target { AWSCognitoIdentityProviderService_ResendConfirmationCode = 0 }

	export enum RespondToAuthChallengeX_Amz_Target { AWSCognitoIdentityProviderService_RespondToAuthChallenge = 0 }

	export enum SetRiskConfigurationX_Amz_Target { AWSCognitoIdentityProviderService_SetRiskConfiguration = 0 }

	export enum SetUICustomizationX_Amz_Target { AWSCognitoIdentityProviderService_SetUICustomization = 0 }

	export enum SetUserMFAPreferenceX_Amz_Target { AWSCognitoIdentityProviderService_SetUserMFAPreference = 0 }

	export enum SetUserPoolMfaConfigX_Amz_Target { AWSCognitoIdentityProviderService_SetUserPoolMfaConfig = 0 }

	export enum SetUserSettingsX_Amz_Target { AWSCognitoIdentityProviderService_SetUserSettings = 0 }

	export enum SignUpX_Amz_Target { AWSCognitoIdentityProviderService_SignUp = 0 }

	export enum StartUserImportJobX_Amz_Target { AWSCognitoIdentityProviderService_StartUserImportJob = 0 }

	export enum StopUserImportJobX_Amz_Target { AWSCognitoIdentityProviderService_StopUserImportJob = 0 }

	export enum TagResourceX_Amz_Target { AWSCognitoIdentityProviderService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSCognitoIdentityProviderService_UntagResource = 0 }

	export enum UpdateAuthEventFeedbackX_Amz_Target { AWSCognitoIdentityProviderService_UpdateAuthEventFeedback = 0 }

	export enum UpdateDeviceStatusX_Amz_Target { AWSCognitoIdentityProviderService_UpdateDeviceStatus = 0 }

	export enum UpdateGroupX_Amz_Target { AWSCognitoIdentityProviderService_UpdateGroup = 0 }

	export enum UpdateIdentityProviderX_Amz_Target { AWSCognitoIdentityProviderService_UpdateIdentityProvider = 0 }

	export enum UpdateResourceServerX_Amz_Target { AWSCognitoIdentityProviderService_UpdateResourceServer = 0 }

	export enum UpdateUserAttributesX_Amz_Target { AWSCognitoIdentityProviderService_UpdateUserAttributes = 0 }

	export enum UpdateUserPoolX_Amz_Target { AWSCognitoIdentityProviderService_UpdateUserPool = 0 }

	export enum UpdateUserPoolClientX_Amz_Target { AWSCognitoIdentityProviderService_UpdateUserPoolClient = 0 }

	export enum UpdateUserPoolDomainX_Amz_Target { AWSCognitoIdentityProviderService_UpdateUserPoolDomain = 0 }

	export enum VerifySoftwareTokenX_Amz_Target { AWSCognitoIdentityProviderService_VerifySoftwareToken = 0 }

	export enum VerifyUserAttributeX_Amz_Target { AWSCognitoIdentityProviderService_VerifyUserAttribute = 0 }

}

