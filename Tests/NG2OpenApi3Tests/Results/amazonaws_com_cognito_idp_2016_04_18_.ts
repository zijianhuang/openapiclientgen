import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the response from the server for the request to add custom attributes. */
	export interface AddCustomAttributesResponse {
	}

	/** Represents the response from the server for the request to add custom attributes. */
	export interface AddCustomAttributesResponseFormProperties {
	}
	export function CreateAddCustomAttributesResponseFormGroup() {
		return new FormGroup<AddCustomAttributesResponseFormProperties>({
		});

	}


	/** Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		CustomAttributes: Array<SchemaAttributeType>;
	}

	/** Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAddCustomAttributesRequestFormGroup() {
		return new FormGroup<AddCustomAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a <code>custom:</code> prefix, and developer attributes with a <code>dev:</code> prefix. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool attributes</a>.</p> <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</p> */
	export interface SchemaAttributeType {
		Name?: string;
		AttributeDataType?: AttributeDataType;
		DeveloperOnlyAttribute?: boolean | null;
		Mutable?: boolean | null;
		Required?: boolean | null;
		NumberAttributeConstraints?: NumberAttributeConstraintsType;
		StringAttributeConstraints?: StringAttributeConstraintsType;
	}

	/** <p>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a <code>custom:</code> prefix, and developer attributes with a <code>dev:</code> prefix. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool attributes</a>.</p> <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</p> */
	export interface SchemaAttributeTypeFormProperties {
		Name: FormControl<string | null | undefined>,
		AttributeDataType: FormControl<AttributeDataType | null | undefined>,
		DeveloperOnlyAttribute: FormControl<boolean | null | undefined>,
		Mutable: FormControl<boolean | null | undefined>,
		Required: FormControl<boolean | null | undefined>,
	}
	export function CreateSchemaAttributeTypeFormGroup() {
		return new FormGroup<SchemaAttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AttributeDataType: new FormControl<AttributeDataType | null | undefined>(undefined),
			DeveloperOnlyAttribute: new FormControl<boolean | null | undefined>(undefined),
			Mutable: new FormControl<boolean | null | undefined>(undefined),
			Required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }


	/** The minimum and maximum values of an attribute that is of the number data type. */
	export interface NumberAttributeConstraintsType {
		MinValue?: string;
		MaxValue?: string;
	}

	/** The minimum and maximum values of an attribute that is of the number data type. */
	export interface NumberAttributeConstraintsTypeFormProperties {
		MinValue: FormControl<string | null | undefined>,
		MaxValue: FormControl<string | null | undefined>,
	}
	export function CreateNumberAttributeConstraintsTypeFormGroup() {
		return new FormGroup<NumberAttributeConstraintsTypeFormProperties>({
			MinValue: new FormControl<string | null | undefined>(undefined),
			MaxValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The constraints associated with a string attribute. */
	export interface StringAttributeConstraintsType {
		MinLength?: string;
		MaxLength?: string;
	}

	/** The constraints associated with a string attribute. */
	export interface StringAttributeConstraintsTypeFormProperties {
		MinLength: FormControl<string | null | undefined>,
		MaxLength: FormControl<string | null | undefined>,
	}
	export function CreateStringAttributeConstraintsTypeFormGroup() {
		return new FormGroup<StringAttributeConstraintsTypeFormProperties>({
			MinLength: new FormControl<string | null | undefined>(undefined),
			MaxLength: new FormControl<string | null | undefined>(undefined),
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

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface UserImportInProgressException {
	}
	export interface UserImportInProgressExceptionFormProperties {
	}
	export function CreateUserImportInProgressExceptionFormGroup() {
		return new FormGroup<UserImportInProgressExceptionFormProperties>({
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

	export interface AdminAddUserToGroupRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		GroupName: string;
	}
	export interface AdminAddUserToGroupRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminAddUserToGroupRequestFormGroup() {
		return new FormGroup<AdminAddUserToGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserNotFoundException {
	}
	export interface UserNotFoundExceptionFormProperties {
	}
	export function CreateUserNotFoundExceptionFormGroup() {
		return new FormGroup<UserNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the response from the server for the request to confirm registration. */
	export interface AdminConfirmSignUpResponse {
	}

	/** Represents the response from the server for the request to confirm registration. */
	export interface AdminConfirmSignUpResponseFormProperties {
	}
	export function CreateAdminConfirmSignUpResponseFormGroup() {
		return new FormGroup<AdminConfirmSignUpResponseFormProperties>({
		});

	}


	/** Confirm a user's registration as a user pool administrator. */
	export interface AdminConfirmSignUpRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Confirm a user's registration as a user pool administrator. */
	export interface AdminConfirmSignUpRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminConfirmSignUpRequestFormGroup() {
		return new FormGroup<AdminConfirmSignUpRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClientMetadataType {
	}
	export interface ClientMetadataTypeFormProperties {
	}
	export function CreateClientMetadataTypeFormGroup() {
		return new FormGroup<ClientMetadataTypeFormProperties>({
		});

	}

	export interface UnexpectedLambdaException {
	}
	export interface UnexpectedLambdaExceptionFormProperties {
	}
	export function CreateUnexpectedLambdaExceptionFormGroup() {
		return new FormGroup<UnexpectedLambdaExceptionFormProperties>({
		});

	}

	export interface UserLambdaValidationException {
	}
	export interface UserLambdaValidationExceptionFormProperties {
	}
	export function CreateUserLambdaValidationExceptionFormGroup() {
		return new FormGroup<UserLambdaValidationExceptionFormProperties>({
		});

	}

	export interface TooManyFailedAttemptsException {
	}
	export interface TooManyFailedAttemptsExceptionFormProperties {
	}
	export function CreateTooManyFailedAttemptsExceptionFormGroup() {
		return new FormGroup<TooManyFailedAttemptsExceptionFormProperties>({
		});

	}

	export interface InvalidLambdaResponseException {
	}
	export interface InvalidLambdaResponseExceptionFormProperties {
	}
	export function CreateInvalidLambdaResponseExceptionFormGroup() {
		return new FormGroup<InvalidLambdaResponseExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}


	/** Represents the response from the server to the request to create the user. */
	export interface AdminCreateUserResponse {
		User?: UserType;
	}

	/** Represents the response from the server to the request to create the user. */
	export interface AdminCreateUserResponseFormProperties {
	}
	export function CreateAdminCreateUserResponseFormGroup() {
		return new FormGroup<AdminCreateUserResponseFormProperties>({
		});

	}


	/** A user profile in a Amazon Cognito user pool. */
	export interface UserType {
		Username?: string;
		Attributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean | null;
		UserStatus?: UserStatusType;
		MFAOptions?: Array<MFAOptionType>;
	}

	/** A user profile in a Amazon Cognito user pool. */
	export interface UserTypeFormProperties {
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserStatusType | null | undefined>,
	}
	export function CreateUserTypeFormGroup() {
		return new FormGroup<UserTypeFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserStatusType | null | undefined>(undefined),
		});

	}


	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeType {

		/** Required */
		Name: string;
		Value?: string;
	}

	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeTypeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeTypeFormGroup() {
		return new FormGroup<AttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserStatusType { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/**  <i>This data type is no longer supported.</i> Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations. */
	export interface MFAOptionType {
		DeliveryMedium?: DeliveryMediumType;
		AttributeName?: string;
	}

	/**  <i>This data type is no longer supported.</i> Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations. */
	export interface MFAOptionTypeFormProperties {
		DeliveryMedium: FormControl<DeliveryMediumType | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateMFAOptionTypeFormGroup() {
		return new FormGroup<MFAOptionTypeFormProperties>({
			DeliveryMedium: new FormControl<DeliveryMediumType | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeliveryMediumType { SMS = 0, EMAIL = 1 }


	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;
		TemporaryPassword?: string;
		ForceAliasCreation?: boolean | null;
		MessageAction?: MessageActionType;
		DesiredDeliveryMediums?: Array<DeliveryMediumType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		TemporaryPassword: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
		MessageAction: FormControl<MessageActionType | null | undefined>,
	}
	export function CreateAdminCreateUserRequestFormGroup() {
		return new FormGroup<AdminCreateUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemporaryPassword: new FormControl<string | null | undefined>(undefined),
			ForceAliasCreation: new FormControl<boolean | null | undefined>(undefined),
			MessageAction: new FormControl<MessageActionType | null | undefined>(undefined),
		});

	}

	export enum MessageActionType { RESEND = 0, SUPPRESS = 1 }

	export interface UsernameExistsException {
	}
	export interface UsernameExistsExceptionFormProperties {
	}
	export function CreateUsernameExistsExceptionFormGroup() {
		return new FormGroup<UsernameExistsExceptionFormProperties>({
		});

	}

	export interface InvalidPasswordException {
	}
	export interface InvalidPasswordExceptionFormProperties {
	}
	export function CreateInvalidPasswordExceptionFormGroup() {
		return new FormGroup<InvalidPasswordExceptionFormProperties>({
		});

	}

	export interface CodeDeliveryFailureException {
	}
	export interface CodeDeliveryFailureExceptionFormProperties {
	}
	export function CreateCodeDeliveryFailureExceptionFormGroup() {
		return new FormGroup<CodeDeliveryFailureExceptionFormProperties>({
		});

	}

	export interface PreconditionNotMetException {
	}
	export interface PreconditionNotMetExceptionFormProperties {
	}
	export function CreatePreconditionNotMetExceptionFormGroup() {
		return new FormGroup<PreconditionNotMetExceptionFormProperties>({
		});

	}

	export interface InvalidSmsRoleAccessPolicyException {
	}
	export interface InvalidSmsRoleAccessPolicyExceptionFormProperties {
	}
	export function CreateInvalidSmsRoleAccessPolicyExceptionFormGroup() {
		return new FormGroup<InvalidSmsRoleAccessPolicyExceptionFormProperties>({
		});

	}

	export interface InvalidSmsRoleTrustRelationshipException {
	}
	export interface InvalidSmsRoleTrustRelationshipExceptionFormProperties {
	}
	export function CreateInvalidSmsRoleTrustRelationshipExceptionFormGroup() {
		return new FormGroup<InvalidSmsRoleTrustRelationshipExceptionFormProperties>({
		});

	}

	export interface UnsupportedUserStateException {
	}
	export interface UnsupportedUserStateExceptionFormProperties {
	}
	export function CreateUnsupportedUserStateExceptionFormGroup() {
		return new FormGroup<UnsupportedUserStateExceptionFormProperties>({
		});

	}


	/** Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserRequestFormGroup() {
		return new FormGroup<AdminDeleteUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response received from the server for a request to delete user attributes. */
	export interface AdminDeleteUserAttributesResponse {
	}

	/** Represents the response received from the server for a request to delete user attributes. */
	export interface AdminDeleteUserAttributesResponseFormProperties {
	}
	export function CreateAdminDeleteUserAttributesResponseFormGroup() {
		return new FormGroup<AdminDeleteUserAttributesResponseFormProperties>({
		});

	}


	/** Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		UserAttributeNames: Array<string>;
	}

	/** Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserAttributesRequestFormGroup() {
		return new FormGroup<AdminDeleteUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AdminDisableProviderForUserResponse {
	}
	export interface AdminDisableProviderForUserResponseFormProperties {
	}
	export function CreateAdminDisableProviderForUserResponseFormGroup() {
		return new FormGroup<AdminDisableProviderForUserResponseFormProperties>({
		});

	}

	export interface AdminDisableProviderForUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		User: ProviderUserIdentifierType;
	}
	export interface AdminDisableProviderForUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminDisableProviderForUserRequestFormGroup() {
		return new FormGroup<AdminDisableProviderForUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container for information about an IdP for a user pool. */
	export interface ProviderUserIdentifierType {
		ProviderName?: string;
		ProviderAttributeName?: string;
		ProviderAttributeValue?: string;
	}

	/** A container for information about an IdP for a user pool. */
	export interface ProviderUserIdentifierTypeFormProperties {
		ProviderName: FormControl<string | null | undefined>,
		ProviderAttributeName: FormControl<string | null | undefined>,
		ProviderAttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateProviderUserIdentifierTypeFormGroup() {
		return new FormGroup<ProviderUserIdentifierTypeFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderAttributeName: new FormControl<string | null | undefined>(undefined),
			ProviderAttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AliasExistsException {
	}
	export interface AliasExistsExceptionFormProperties {
	}
	export function CreateAliasExistsExceptionFormGroup() {
		return new FormGroup<AliasExistsExceptionFormProperties>({
		});

	}


	/** Represents the response received from the server to disable the user as an administrator. */
	export interface AdminDisableUserResponse {
	}

	/** Represents the response received from the server to disable the user as an administrator. */
	export interface AdminDisableUserResponseFormProperties {
	}
	export function CreateAdminDisableUserResponseFormGroup() {
		return new FormGroup<AdminDisableUserResponseFormProperties>({
		});

	}


	/** Represents the request to disable the user as an administrator. */
	export interface AdminDisableUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** Represents the request to disable the user as an administrator. */
	export interface AdminDisableUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDisableUserRequestFormGroup() {
		return new FormGroup<AdminDisableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server for the request to enable a user as an administrator. */
	export interface AdminEnableUserResponse {
	}

	/** Represents the response from the server for the request to enable a user as an administrator. */
	export interface AdminEnableUserResponseFormProperties {
	}
	export function CreateAdminEnableUserResponseFormGroup() {
		return new FormGroup<AdminEnableUserResponseFormProperties>({
		});

	}


	/** Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminEnableUserRequestFormGroup() {
		return new FormGroup<AdminEnableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		DeviceKey: string;
	}

	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminForgetDeviceRequestFormGroup() {
		return new FormGroup<AdminForgetDeviceRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidUserPoolConfigurationException {
	}
	export interface InvalidUserPoolConfigurationExceptionFormProperties {
	}
	export function CreateInvalidUserPoolConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidUserPoolConfigurationExceptionFormProperties>({
		});

	}


	/** Gets the device response, as an administrator. */
	export interface AdminGetDeviceResponse {

		/** Required */
		Device: DeviceType;
	}

	/** Gets the device response, as an administrator. */
	export interface AdminGetDeviceResponseFormProperties {
	}
	export function CreateAdminGetDeviceResponseFormGroup() {
		return new FormGroup<AdminGetDeviceResponseFormProperties>({
		});

	}


	/** The device type. */
	export interface DeviceType {
		DeviceKey?: string;
		DeviceAttributes?: Array<AttributeType>;
		DeviceCreateDate?: Date;
		DeviceLastModifiedDate?: Date;
		DeviceLastAuthenticatedDate?: Date;
	}

	/** The device type. */
	export interface DeviceTypeFormProperties {
		DeviceKey: FormControl<string | null | undefined>,
		DeviceCreateDate: FormControl<Date | null | undefined>,
		DeviceLastModifiedDate: FormControl<Date | null | undefined>,
		DeviceLastAuthenticatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceTypeFormGroup() {
		return new FormGroup<DeviceTypeFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			DeviceCreateDate: new FormControl<Date | null | undefined>(undefined),
			DeviceLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			DeviceLastAuthenticatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequest {

		/** Required */
		DeviceKey: string;

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequestFormProperties {

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetDeviceRequestFormGroup() {
		return new FormGroup<AdminGetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponse {

		/** Required */
		Username: string;
		UserAttributes?: Array<AttributeType>;
		UserCreateDate?: Date;
		UserLastModifiedDate?: Date;
		Enabled?: boolean | null;
		UserStatus?: UserStatusType;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<string>;
	}

	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponseFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserStatusType | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserResponseFormGroup() {
		return new FormGroup<AdminGetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserStatusType | null | undefined>(undefined),
			PreferredMfaSetting: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserRequestFormGroup() {
		return new FormGroup<AdminGetUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponse {
		ChallengeName?: ChallengeNameType;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponseFormProperties {
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminInitiateAuthResponseFormGroup() {
		return new FormGroup<AdminInitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChallengeNameType { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

	export interface ChallengeParametersType {
	}
	export interface ChallengeParametersTypeFormProperties {
	}
	export function CreateChallengeParametersTypeFormGroup() {
		return new FormGroup<ChallengeParametersTypeFormProperties>({
		});

	}


	/** The authentication result. */
	export interface AuthenticationResultType {
		AccessToken?: string;
		ExpiresIn?: number | null;
		TokenType?: string;
		RefreshToken?: string;
		IdToken?: string;
		NewDeviceMetadata?: NewDeviceMetadataType;
	}

	/** The authentication result. */
	export interface AuthenticationResultTypeFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		ExpiresIn: FormControl<number | null | undefined>,
		TokenType: FormControl<string | null | undefined>,
		RefreshToken: FormControl<string | null | undefined>,
		IdToken: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationResultTypeFormGroup() {
		return new FormGroup<AuthenticationResultTypeFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			ExpiresIn: new FormControl<number | null | undefined>(undefined),
			TokenType: new FormControl<string | null | undefined>(undefined),
			RefreshToken: new FormControl<string | null | undefined>(undefined),
			IdToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The new device metadata type. */
	export interface NewDeviceMetadataType {
		DeviceKey?: string;
		DeviceGroupKey?: string;
	}

	/** The new device metadata type. */
	export interface NewDeviceMetadataTypeFormProperties {
		DeviceKey: FormControl<string | null | undefined>,
		DeviceGroupKey: FormControl<string | null | undefined>,
	}
	export function CreateNewDeviceMetadataTypeFormGroup() {
		return new FormGroup<NewDeviceMetadataTypeFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			DeviceGroupKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientId: string;

		/** Required */
		AuthFlow: AuthFlowType;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;
		AnalyticsMetadata?: AnalyticsMetadataType;
		ContextData?: ContextDataType;
	}

	/** Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		AuthFlow: FormControl<AuthFlowType | null | undefined>,
	}
	export function CreateAdminInitiateAuthRequestFormGroup() {
		return new FormGroup<AdminInitiateAuthRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthFlow: new FormControl<AuthFlowType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthFlowType { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }

	export interface AuthParametersType {
	}
	export interface AuthParametersTypeFormProperties {
	}
	export function CreateAuthParametersTypeFormGroup() {
		return new FormGroup<AuthParametersTypeFormProperties>({
		});

	}


	/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p> */
	export interface AnalyticsMetadataType {
		AnalyticsEndpointId?: string;
	}

	/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p> */
	export interface AnalyticsMetadataTypeFormProperties {
		AnalyticsEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsMetadataTypeFormGroup() {
		return new FormGroup<AnalyticsMetadataTypeFormProperties>({
			AnalyticsEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface ContextDataType {

		/** Required */
		IpAddress: string;

		/** Required */
		ServerName: string;

		/** Required */
		ServerPath: string;

		/** Required */
		HttpHeaders: Array<HttpHeader>;
		EncodedData?: string;
	}

	/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface ContextDataTypeFormProperties {

		/** Required */
		IpAddress: FormControl<string | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		ServerPath: FormControl<string | null | undefined>,
		EncodedData: FormControl<string | null | undefined>,
	}
	export function CreateContextDataTypeFormGroup() {
		return new FormGroup<ContextDataTypeFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncodedData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP header. */
	export interface HttpHeader {
		headerName?: string;
		headerValue?: string;
	}

	/** The HTTP header. */
	export interface HttpHeaderFormProperties {
		headerName: FormControl<string | null | undefined>,
		headerValue: FormControl<string | null | undefined>,
	}
	export function CreateHttpHeaderFormGroup() {
		return new FormGroup<HttpHeaderFormProperties>({
			headerName: new FormControl<string | null | undefined>(undefined),
			headerValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MFAMethodNotFoundException {
	}
	export interface MFAMethodNotFoundExceptionFormProperties {
	}
	export function CreateMFAMethodNotFoundExceptionFormGroup() {
		return new FormGroup<MFAMethodNotFoundExceptionFormProperties>({
		});

	}

	export interface PasswordResetRequiredException {
	}
	export interface PasswordResetRequiredExceptionFormProperties {
	}
	export function CreatePasswordResetRequiredExceptionFormGroup() {
		return new FormGroup<PasswordResetRequiredExceptionFormProperties>({
		});

	}

	export interface UserNotConfirmedException {
	}
	export interface UserNotConfirmedExceptionFormProperties {
	}
	export function CreateUserNotConfirmedExceptionFormGroup() {
		return new FormGroup<UserNotConfirmedExceptionFormProperties>({
		});

	}

	export interface AdminLinkProviderForUserResponse {
	}
	export interface AdminLinkProviderForUserResponseFormProperties {
	}
	export function CreateAdminLinkProviderForUserResponseFormGroup() {
		return new FormGroup<AdminLinkProviderForUserResponseFormProperties>({
		});

	}

	export interface AdminLinkProviderForUserRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		DestinationUser: ProviderUserIdentifierType;

		/** Required */
		SourceUser: ProviderUserIdentifierType;
	}
	export interface AdminLinkProviderForUserRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminLinkProviderForUserRequestFormGroup() {
		return new FormGroup<AdminLinkProviderForUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}

	/** Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListDevicesResponseFormGroup() {
		return new FormGroup<AdminListDevicesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
		Limit?: number | null;
		PaginationToken?: string;
	}

	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListDevicesRequestFormGroup() {
		return new FormGroup<AdminListDevicesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminListGroupsForUserResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}
	export interface AdminListGroupsForUserResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListGroupsForUserResponseFormGroup() {
		return new FormGroup<AdminListGroupsForUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The group type. */
	export interface GroupType {
		GroupName?: string;
		UserPoolId?: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number | null;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	/** The group type. */
	export interface GroupTypeFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Precedence: FormControl<number | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupTypeFormGroup() {
		return new FormGroup<GroupTypeFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Precedence: new FormControl<number | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AdminListGroupsForUserRequest {

		/** Required */
		Username: string;

		/** Required */
		UserPoolId: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface AdminListGroupsForUserRequestFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListGroupsForUserRequestFormGroup() {
		return new FormGroup<AdminListGroupsForUserRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminListUserAuthEventsResponse {
		AuthEvents?: Array<AuthEventType>;
		NextToken?: string;
	}
	export interface AdminListUserAuthEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListUserAuthEventsResponseFormGroup() {
		return new FormGroup<AdminListUserAuthEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authentication event type. */
	export interface AuthEventType {
		EventId?: string;
		EventType?: EventType;
		CreationDate?: Date;
		EventResponse?: EventResponseType;
		EventRisk?: EventRiskType;
		ChallengeResponses?: Array<ChallengeResponseType>;
		EventContextData?: EventContextDataType;
		EventFeedback?: EventFeedbackType;
	}

	/** The authentication event type. */
	export interface AuthEventTypeFormProperties {
		EventId: FormControl<string | null | undefined>,
		EventType: FormControl<EventType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		EventResponse: FormControl<EventResponseType | null | undefined>,
	}
	export function CreateAuthEventTypeFormGroup() {
		return new FormGroup<AuthEventTypeFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			EventType: new FormControl<EventType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			EventResponse: new FormControl<EventResponseType | null | undefined>(undefined),
		});

	}

	export enum EventType { SignIn = 0, SignUp = 1, ForgotPassword = 2, PasswordChange = 3, ResendCode = 4 }

	export enum EventResponseType { Pass = 0, Fail = 1, InProgress = 2 }


	/** The event risk type. */
	export interface EventRiskType {
		RiskDecision?: RiskDecisionType;
		RiskLevel?: RiskLevelType;
		CompromisedCredentialsDetected?: boolean | null;
	}

	/** The event risk type. */
	export interface EventRiskTypeFormProperties {
		RiskDecision: FormControl<RiskDecisionType | null | undefined>,
		RiskLevel: FormControl<RiskLevelType | null | undefined>,
		CompromisedCredentialsDetected: FormControl<boolean | null | undefined>,
	}
	export function CreateEventRiskTypeFormGroup() {
		return new FormGroup<EventRiskTypeFormProperties>({
			RiskDecision: new FormControl<RiskDecisionType | null | undefined>(undefined),
			RiskLevel: new FormControl<RiskLevelType | null | undefined>(undefined),
			CompromisedCredentialsDetected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RiskDecisionType { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum RiskLevelType { Low = 0, Medium = 1, High = 2 }


	/** The challenge response type. */
	export interface ChallengeResponseType {
		ChallengeName?: ChallengeName;
		ChallengeResponse?: ChallengeResponse;
	}

	/** The challenge response type. */
	export interface ChallengeResponseTypeFormProperties {
		ChallengeName: FormControl<ChallengeName | null | undefined>,
		ChallengeResponse: FormControl<ChallengeResponse | null | undefined>,
	}
	export function CreateChallengeResponseTypeFormGroup() {
		return new FormGroup<ChallengeResponseTypeFormProperties>({
			ChallengeName: new FormControl<ChallengeName | null | undefined>(undefined),
			ChallengeResponse: new FormControl<ChallengeResponse | null | undefined>(undefined),
		});

	}

	export enum ChallengeName { Password = 0, Mfa = 1 }

	export enum ChallengeResponse { Success = 0, Failure = 1 }


	/** Specifies the user context data captured at the time of an event request. */
	export interface EventContextDataType {
		IpAddress?: string;
		DeviceName?: string;
		Timezone?: string;
		City?: string;
		Country?: string;
	}

	/** Specifies the user context data captured at the time of an event request. */
	export interface EventContextDataTypeFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
	}
	export function CreateEventContextDataTypeFormGroup() {
		return new FormGroup<EventContextDataTypeFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the event feedback type. */
	export interface EventFeedbackType {

		/** Required */
		FeedbackValue: FeedbackValueType;

		/** Required */
		Provider: string;
		FeedbackDate?: Date;
	}

	/** Specifies the event feedback type. */
	export interface EventFeedbackTypeFormProperties {

		/** Required */
		FeedbackValue: FormControl<FeedbackValueType | null | undefined>,

		/** Required */
		Provider: FormControl<string | null | undefined>,
		FeedbackDate: FormControl<Date | null | undefined>,
	}
	export function CreateEventFeedbackTypeFormGroup() {
		return new FormGroup<EventFeedbackTypeFormProperties>({
			FeedbackValue: new FormControl<FeedbackValueType | null | undefined>(undefined, [Validators.required]),
			Provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeedbackDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum FeedbackValueType { Valid = 0, Invalid = 1 }

	export interface AdminListUserAuthEventsRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface AdminListUserAuthEventsRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListUserAuthEventsRequestFormGroup() {
		return new FormGroup<AdminListUserAuthEventsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPoolAddOnNotEnabledException {
	}
	export interface UserPoolAddOnNotEnabledExceptionFormProperties {
	}
	export function CreateUserPoolAddOnNotEnabledExceptionFormGroup() {
		return new FormGroup<UserPoolAddOnNotEnabledExceptionFormProperties>({
		});

	}

	export interface AdminRemoveUserFromGroupRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		GroupName: string;
	}
	export interface AdminRemoveUserFromGroupRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminRemoveUserFromGroupRequestFormGroup() {
		return new FormGroup<AdminRemoveUserFromGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to reset a user password as an administrator. */
	export interface AdminResetUserPasswordResponse {
	}

	/** Represents the response from the server to reset a user password as an administrator. */
	export interface AdminResetUserPasswordResponseFormProperties {
	}
	export function CreateAdminResetUserPasswordResponseFormGroup() {
		return new FormGroup<AdminResetUserPasswordResponseFormProperties>({
		});

	}


	/** Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminResetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminResetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidEmailRoleAccessPolicyException {
	}
	export interface InvalidEmailRoleAccessPolicyExceptionFormProperties {
	}
	export function CreateInvalidEmailRoleAccessPolicyExceptionFormGroup() {
		return new FormGroup<InvalidEmailRoleAccessPolicyExceptionFormProperties>({
		});

	}


	/** Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponse {
		ChallengeName?: ChallengeNameType;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientId: string;

		/** Required */
		ChallengeName: ChallengeNameType;
		ChallengeResponses?: ChallengeResponsesType;
		Session?: string;
		AnalyticsMetadata?: AnalyticsMetadataType;
		ContextData?: ContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined, [Validators.required]),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChallengeResponsesType {
	}
	export interface ChallengeResponsesTypeFormProperties {
	}
	export function CreateChallengeResponsesTypeFormGroup() {
		return new FormGroup<ChallengeResponsesTypeFormProperties>({
		});

	}

	export interface CodeMismatchException {
	}
	export interface CodeMismatchExceptionFormProperties {
	}
	export function CreateCodeMismatchExceptionFormGroup() {
		return new FormGroup<CodeMismatchExceptionFormProperties>({
		});

	}

	export interface ExpiredCodeException {
	}
	export interface ExpiredCodeExceptionFormProperties {
	}
	export function CreateExpiredCodeExceptionFormGroup() {
		return new FormGroup<ExpiredCodeExceptionFormProperties>({
		});

	}

	export interface SoftwareTokenMFANotFoundException {
	}
	export interface SoftwareTokenMFANotFoundExceptionFormProperties {
	}
	export function CreateSoftwareTokenMFANotFoundExceptionFormGroup() {
		return new FormGroup<SoftwareTokenMFANotFoundExceptionFormProperties>({
		});

	}

	export interface AdminSetUserMFAPreferenceResponse {
	}
	export interface AdminSetUserMFAPreferenceResponseFormProperties {
	}
	export function CreateAdminSetUserMFAPreferenceResponseFormGroup() {
		return new FormGroup<AdminSetUserMFAPreferenceResponseFormProperties>({
		});

	}

	export interface AdminSetUserMFAPreferenceRequest {
		SMSMfaSettings?: SMSMfaSettingsType;
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

		/** Required */
		Username: string;

		/** Required */
		UserPoolId: string;
	}
	export interface AdminSetUserMFAPreferenceRequestFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<AdminSetUserMFAPreferenceRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. */
	export interface SMSMfaSettingsType {
		Enabled?: boolean | null;
		PreferredMfa?: boolean | null;
	}

	/** The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. */
	export interface SMSMfaSettingsTypeFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		PreferredMfa: FormControl<boolean | null | undefined>,
	}
	export function CreateSMSMfaSettingsTypeFormGroup() {
		return new FormGroup<SMSMfaSettingsTypeFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PreferredMfa: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. */
	export interface SoftwareTokenMfaSettingsType {
		Enabled?: boolean | null;
		PreferredMfa?: boolean | null;
	}

	/** The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. */
	export interface SoftwareTokenMfaSettingsTypeFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		PreferredMfa: FormControl<boolean | null | undefined>,
	}
	export function CreateSoftwareTokenMfaSettingsTypeFormGroup() {
		return new FormGroup<SoftwareTokenMfaSettingsTypeFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PreferredMfa: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdminSetUserPasswordResponse {
	}
	export interface AdminSetUserPasswordResponseFormProperties {
	}
	export function CreateAdminSetUserPasswordResponseFormGroup() {
		return new FormGroup<AdminSetUserPasswordResponseFormProperties>({
		});

	}

	export interface AdminSetUserPasswordRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		Password: string;
		Permanent?: boolean | null;
	}
	export interface AdminSetUserPasswordRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		Permanent: FormControl<boolean | null | undefined>,
	}
	export function CreateAdminSetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminSetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Permanent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to set user settings as an administrator. */
	export interface AdminSetUserSettingsResponse {
	}

	/** Represents the response from the server to set user settings as an administrator. */
	export interface AdminSetUserSettingsResponseFormProperties {
	}
	export function CreateAdminSetUserSettingsResponseFormGroup() {
		return new FormGroup<AdminSetUserSettingsResponseFormProperties>({
		});

	}


	/** You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		MFAOptions: Array<MFAOptionType>;
	}

	/** You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserSettingsRequestFormGroup() {
		return new FormGroup<AdminSetUserSettingsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AdminUpdateAuthEventFeedbackResponse {
	}
	export interface AdminUpdateAuthEventFeedbackResponseFormProperties {
	}
	export function CreateAdminUpdateAuthEventFeedbackResponseFormGroup() {
		return new FormGroup<AdminUpdateAuthEventFeedbackResponseFormProperties>({
		});

	}

	export interface AdminUpdateAuthEventFeedbackRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		EventId: string;

		/** Required */
		FeedbackValue: FeedbackValueType;
	}
	export interface AdminUpdateAuthEventFeedbackRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		FeedbackValue: FormControl<FeedbackValueType | null | undefined>,
	}
	export function CreateAdminUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<AdminUpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeedbackValue: new FormControl<FeedbackValueType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status response to the request to update the device, as an administrator. */
	export interface AdminUpdateDeviceStatusResponse {
	}

	/** The status response to the request to update the device, as an administrator. */
	export interface AdminUpdateDeviceStatusResponseFormProperties {
	}
	export function CreateAdminUpdateDeviceStatusResponseFormGroup() {
		return new FormGroup<AdminUpdateDeviceStatusResponseFormProperties>({
		});

	}


	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		DeviceKey: string;
		DeviceRememberedStatus?: DeviceRememberedStatusType;
	}

	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<DeviceRememberedStatusType | null | undefined>,
	}
	export function CreateAdminUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<AdminUpdateDeviceStatusRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceRememberedStatus: new FormControl<DeviceRememberedStatusType | null | undefined>(undefined),
		});

	}

	export enum DeviceRememberedStatusType { remembered = 0, not_remembered = 1 }


	/** Represents the response from the server for the request to update user attributes as an administrator. */
	export interface AdminUpdateUserAttributesResponse {
	}

	/** Represents the response from the server for the request to update user attributes as an administrator. */
	export interface AdminUpdateUserAttributesResponseFormProperties {
	}
	export function CreateAdminUpdateUserAttributesResponseFormGroup() {
		return new FormGroup<AdminUpdateUserAttributesResponseFormProperties>({
		});

	}


	/** Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		UserAttributes: Array<AttributeType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUpdateUserAttributesRequestFormGroup() {
		return new FormGroup<AdminUpdateUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The global sign-out response, as an administrator. */
	export interface AdminUserGlobalSignOutResponse {
	}

	/** The global sign-out response, as an administrator. */
	export interface AdminUserGlobalSignOutResponseFormProperties {
	}
	export function CreateAdminUserGlobalSignOutResponseFormGroup() {
		return new FormGroup<AdminUserGlobalSignOutResponseFormProperties>({
		});

	}


	/** The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;
	}

	/** The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUserGlobalSignOutRequestFormGroup() {
		return new FormGroup<AdminUserGlobalSignOutRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateSoftwareTokenResponse {
		SecretCode?: string;
		Session?: string;
	}
	export interface AssociateSoftwareTokenResponseFormProperties {
		SecretCode: FormControl<string | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSoftwareTokenResponseFormGroup() {
		return new FormGroup<AssociateSoftwareTokenResponseFormProperties>({
			SecretCode: new FormControl<string | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;
	}
	export interface AssociateSoftwareTokenRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSoftwareTokenRequestFormGroup() {
		return new FormGroup<AssociateSoftwareTokenRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
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


	/** The response from the server to the change password request. */
	export interface ChangePasswordResponse {
	}

	/** The response from the server to the change password request. */
	export interface ChangePasswordResponseFormProperties {
	}
	export function CreateChangePasswordResponseFormGroup() {
		return new FormGroup<ChangePasswordResponseFormProperties>({
		});

	}


	/** Represents the request to change a user password. */
	export interface ChangePasswordRequest {

		/** Required */
		PreviousPassword: string;

		/** Required */
		ProposedPassword: string;

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to change a user password. */
	export interface ChangePasswordRequestFormProperties {

		/** Required */
		PreviousPassword: FormControl<string | null | undefined>,

		/** Required */
		ProposedPassword: FormControl<string | null | undefined>,

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordRequestFormGroup() {
		return new FormGroup<ChangePasswordRequestFormProperties>({
			PreviousPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProposedPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Confirms the device response. */
	export interface ConfirmDeviceResponse {
		UserConfirmationNecessary?: boolean | null;
	}

	/** Confirms the device response. */
	export interface ConfirmDeviceResponseFormProperties {
		UserConfirmationNecessary: FormControl<boolean | null | undefined>,
	}
	export function CreateConfirmDeviceResponseFormGroup() {
		return new FormGroup<ConfirmDeviceResponseFormProperties>({
			UserConfirmationNecessary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Confirms the device request. */
	export interface ConfirmDeviceRequest {

		/** Required */
		AccessToken: string;

		/** Required */
		DeviceKey: string;
		DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
		DeviceName?: string;
	}

	/** Confirms the device request. */
	export interface ConfirmDeviceRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateConfirmDeviceRequestFormGroup() {
		return new FormGroup<ConfirmDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device verifier against which it is authenticated. */
	export interface DeviceSecretVerifierConfigType {
		PasswordVerifier?: string;
		Salt?: string;
	}

	/** The device verifier against which it is authenticated. */
	export interface DeviceSecretVerifierConfigTypeFormProperties {
		PasswordVerifier: FormControl<string | null | undefined>,
		Salt: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSecretVerifierConfigTypeFormGroup() {
		return new FormGroup<DeviceSecretVerifierConfigTypeFormProperties>({
			PasswordVerifier: new FormControl<string | null | undefined>(undefined),
			Salt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the server that results from a user's request to retrieve a forgotten password. */
	export interface ConfirmForgotPasswordResponse {
	}

	/** The response from the server that results from a user's request to retrieve a forgotten password. */
	export interface ConfirmForgotPasswordResponseFormProperties {
	}
	export function CreateConfirmForgotPasswordResponseFormGroup() {
		return new FormGroup<ConfirmForgotPasswordResponseFormProperties>({
		});

	}


	/** The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequest {

		/** Required */
		ClientId: string;
		SecretHash?: string;

		/** Required */
		Username: string;

		/** Required */
		ConfirmationCode: string;

		/** Required */
		Password: string;
		AnalyticsMetadata?: AnalyticsMetadataType;
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		ConfirmationCode: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateConfirmForgotPasswordRequestFormGroup() {
		return new FormGroup<ConfirmForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataType {
		IpAddress?: string;
		EncodedData?: string;
	}

	/** Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataTypeFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		EncodedData: FormControl<string | null | undefined>,
	}
	export function CreateUserContextDataTypeFormGroup() {
		return new FormGroup<UserContextDataTypeFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			EncodedData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server for the registration confirmation. */
	export interface ConfirmSignUpResponse {
	}

	/** Represents the response from the server for the registration confirmation. */
	export interface ConfirmSignUpResponseFormProperties {
	}
	export function CreateConfirmSignUpResponseFormGroup() {
		return new FormGroup<ConfirmSignUpResponseFormProperties>({
		});

	}


	/** Represents the request to confirm registration of a user. */
	export interface ConfirmSignUpRequest {

		/** Required */
		ClientId: string;
		SecretHash?: string;

		/** Required */
		Username: string;

		/** Required */
		ConfirmationCode: string;
		ForceAliasCreation?: boolean | null;
		AnalyticsMetadata?: AnalyticsMetadataType;
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to confirm registration of a user. */
	export interface ConfirmSignUpRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		ConfirmationCode: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateConfirmSignUpRequestFormGroup() {
		return new FormGroup<ConfirmSignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceAliasCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGroupResponse {
		Group?: GroupType;
	}
	export interface CreateGroupResponseFormProperties {
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
		});

	}

	export interface CreateGroupRequest {

		/** Required */
		GroupName: string;

		/** Required */
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number | null;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Precedence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupExistsException {
	}
	export interface GroupExistsExceptionFormProperties {
	}
	export function CreateGroupExistsExceptionFormGroup() {
		return new FormGroup<GroupExistsExceptionFormProperties>({
		});

	}

	export interface CreateIdentityProviderResponse {

		/** Required */
		IdentityProvider: IdentityProviderType;
	}
	export interface CreateIdentityProviderResponseFormProperties {
	}
	export function CreateCreateIdentityProviderResponseFormGroup() {
		return new FormGroup<CreateIdentityProviderResponseFormProperties>({
		});

	}


	/** A container for information about an IdP. */
	export interface IdentityProviderType {
		UserPoolId?: string;
		ProviderName?: string;
		ProviderType?: IdentityProviderTypeType;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	/** A container for information about an IdP. */
	export interface IdentityProviderTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityProviderTypeFormGroup() {
		return new FormGroup<IdentityProviderTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<IdentityProviderTypeType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum IdentityProviderTypeType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }

	export interface ProviderDetailsType {
	}
	export interface ProviderDetailsTypeFormProperties {
	}
	export function CreateProviderDetailsTypeFormGroup() {
		return new FormGroup<ProviderDetailsTypeFormProperties>({
		});

	}

	export interface AttributeMappingType {
	}
	export interface AttributeMappingTypeFormProperties {
	}
	export function CreateAttributeMappingTypeFormGroup() {
		return new FormGroup<AttributeMappingTypeFormProperties>({
		});

	}

	export interface CreateIdentityProviderRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ProviderName: string;

		/** Required */
		ProviderType: IdentityProviderTypeType;

		/** Required */
		ProviderDetails: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}
	export interface CreateIdentityProviderRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ProviderName: FormControl<string | null | undefined>,

		/** Required */
		ProviderType: FormControl<IdentityProviderTypeType | null | undefined>,
	}
	export function CreateCreateIdentityProviderRequestFormGroup() {
		return new FormGroup<CreateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderType: new FormControl<IdentityProviderTypeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DuplicateProviderException {
	}
	export interface DuplicateProviderExceptionFormProperties {
	}
	export function CreateDuplicateProviderExceptionFormGroup() {
		return new FormGroup<DuplicateProviderExceptionFormProperties>({
		});

	}

	export interface CreateResourceServerResponse {

		/** Required */
		ResourceServer: ResourceServerType;
	}
	export interface CreateResourceServerResponseFormProperties {
	}
	export function CreateCreateResourceServerResponseFormGroup() {
		return new FormGroup<CreateResourceServerResponseFormProperties>({
		});

	}


	/** A container for information about a resource server for a user pool. */
	export interface ResourceServerType {
		UserPoolId?: string;
		Identifier?: string;
		Name?: string;
		Scopes?: Array<ResourceServerScopeType>;
	}

	/** A container for information about a resource server for a user pool. */
	export interface ResourceServerTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourceServerTypeFormGroup() {
		return new FormGroup<ResourceServerTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource server scope. */
	export interface ResourceServerScopeType {

		/** Required */
		ScopeName: string;

		/** Required */
		ScopeDescription: string;
	}

	/** A resource server scope. */
	export interface ResourceServerScopeTypeFormProperties {

		/** Required */
		ScopeName: FormControl<string | null | undefined>,

		/** Required */
		ScopeDescription: FormControl<string | null | undefined>,
	}
	export function CreateResourceServerScopeTypeFormGroup() {
		return new FormGroup<ResourceServerScopeTypeFormProperties>({
			ScopeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScopeDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResourceServerRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Identifier: string;

		/** Required */
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface CreateResourceServerRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceServerRequestFormGroup() {
		return new FormGroup<CreateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to the request to create the user import job. */
	export interface CreateUserImportJobResponse {
		UserImportJob?: UserImportJobType;
	}

	/** Represents the response from the server to the request to create the user import job. */
	export interface CreateUserImportJobResponseFormProperties {
	}
	export function CreateCreateUserImportJobResponseFormGroup() {
		return new FormGroup<CreateUserImportJobResponseFormProperties>({
		});

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
		Status?: UserImportJobStatusType;
		CloudWatchLogsRoleArn?: string;
		ImportedUsers?: number | null;
		SkippedUsers?: number | null;
		FailedUsers?: number | null;
		CompletionMessage?: string;
	}

	/** The user import job type. */
	export interface UserImportJobTypeFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		PreSignedUrl: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<UserImportJobStatusType | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		ImportedUsers: FormControl<number | null | undefined>,
		SkippedUsers: FormControl<number | null | undefined>,
		FailedUsers: FormControl<number | null | undefined>,
		CompletionMessage: FormControl<string | null | undefined>,
	}
	export function CreateUserImportJobTypeFormGroup() {
		return new FormGroup<UserImportJobTypeFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			PreSignedUrl: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<UserImportJobStatusType | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			ImportedUsers: new FormControl<number | null | undefined>(undefined),
			SkippedUsers: new FormControl<number | null | undefined>(undefined),
			FailedUsers: new FormControl<number | null | undefined>(undefined),
			CompletionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserImportJobStatusType { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }


	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequest {

		/** Required */
		JobName: string;

		/** Required */
		UserPoolId: string;

		/** Required */
		CloudWatchLogsRoleArn: string;
	}

	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequestFormProperties {

		/** Required */
		JobName: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserImportJobRequestFormGroup() {
		return new FormGroup<CreateUserImportJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server for the request to create a user pool. */
	export interface CreateUserPoolResponse {
		UserPool?: UserPoolType;
	}

	/** Represents the response from the server for the request to create a user pool. */
	export interface CreateUserPoolResponseFormProperties {
	}
	export function CreateCreateUserPoolResponseFormGroup() {
		return new FormGroup<CreateUserPoolResponseFormProperties>({
		});

	}


	/** A container for information about the user pool. */
	export interface UserPoolType {
		Id?: string;
		Name?: string;
		Policies?: UserPoolPolicyType;
		DeletionProtection?: DeletionProtectionType;
		LambdaConfig?: LambdaConfigType;
		Status?: StatusType;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		SchemaAttributes?: Array<SchemaAttributeType>;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
		MfaConfiguration?: UserPoolMfaType;
		DeviceConfiguration?: DeviceConfigurationType;
		EstimatedNumberOfUsers?: number | null;
		EmailConfiguration?: EmailConfigurationType;
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		SmsConfigurationFailure?: string;
		EmailConfigurationFailure?: string;
		Domain?: string;
		CustomDomain?: string;
		AdminCreateUserConfig?: AdminCreateUserConfigType;
		UserPoolAddOns?: UserPoolAddOnsType;
		UsernameConfiguration?: UsernameConfigurationType;
		Arn?: string;
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	/** A container for information about the user pool. */
	export interface UserPoolTypeFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<DeletionProtectionType | null | undefined>,
		Status: FormControl<StatusType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
		EstimatedNumberOfUsers: FormControl<number | null | undefined>,
		SmsConfigurationFailure: FormControl<string | null | undefined>,
		EmailConfigurationFailure: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		CustomDomain: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolTypeFormGroup() {
		return new FormGroup<UserPoolTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DeletionProtection: new FormControl<DeletionProtectionType | null | undefined>(undefined),
			Status: new FormControl<StatusType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
			EstimatedNumberOfUsers: new FormControl<number | null | undefined>(undefined),
			SmsConfigurationFailure: new FormControl<string | null | undefined>(undefined),
			EmailConfigurationFailure: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			CustomDomain: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy associated with a user pool. */
	export interface UserPoolPolicyType {
		PasswordPolicy?: PasswordPolicyType;
	}

	/** The policy associated with a user pool. */
	export interface UserPoolPolicyTypeFormProperties {
	}
	export function CreateUserPoolPolicyTypeFormGroup() {
		return new FormGroup<UserPoolPolicyTypeFormProperties>({
		});

	}


	/** The password policy type. */
	export interface PasswordPolicyType {
		MinimumLength?: number | null;
		RequireUppercase?: boolean | null;
		RequireLowercase?: boolean | null;
		RequireNumbers?: boolean | null;
		RequireSymbols?: boolean | null;
		TemporaryPasswordValidityDays?: number | null;
	}

	/** The password policy type. */
	export interface PasswordPolicyTypeFormProperties {
		MinimumLength: FormControl<number | null | undefined>,
		RequireUppercase: FormControl<boolean | null | undefined>,
		RequireLowercase: FormControl<boolean | null | undefined>,
		RequireNumbers: FormControl<boolean | null | undefined>,
		RequireSymbols: FormControl<boolean | null | undefined>,
		TemporaryPasswordValidityDays: FormControl<number | null | undefined>,
	}
	export function CreatePasswordPolicyTypeFormGroup() {
		return new FormGroup<PasswordPolicyTypeFormProperties>({
			MinimumLength: new FormControl<number | null | undefined>(undefined),
			RequireUppercase: new FormControl<boolean | null | undefined>(undefined),
			RequireLowercase: new FormControl<boolean | null | undefined>(undefined),
			RequireNumbers: new FormControl<boolean | null | undefined>(undefined),
			RequireSymbols: new FormControl<boolean | null | undefined>(undefined),
			TemporaryPasswordValidityDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeletionProtectionType { ACTIVE = 0, INACTIVE = 1 }


	/** Specifies the configuration for Lambda triggers. */
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
		CustomSMSSender?: CustomSMSLambdaVersionConfigType;
		CustomEmailSender?: CustomEmailLambdaVersionConfigType;
		KMSKeyID?: string;
	}

	/** Specifies the configuration for Lambda triggers. */
	export interface LambdaConfigTypeFormProperties {
		PreSignUp: FormControl<string | null | undefined>,
		CustomMessage: FormControl<string | null | undefined>,
		PostConfirmation: FormControl<string | null | undefined>,
		PreAuthentication: FormControl<string | null | undefined>,
		PostAuthentication: FormControl<string | null | undefined>,
		DefineAuthChallenge: FormControl<string | null | undefined>,
		CreateAuthChallenge: FormControl<string | null | undefined>,
		VerifyAuthChallengeResponse: FormControl<string | null | undefined>,
		PreTokenGeneration: FormControl<string | null | undefined>,
		UserMigration: FormControl<string | null | undefined>,
		KMSKeyID: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConfigTypeFormGroup() {
		return new FormGroup<LambdaConfigTypeFormProperties>({
			PreSignUp: new FormControl<string | null | undefined>(undefined),
			CustomMessage: new FormControl<string | null | undefined>(undefined),
			PostConfirmation: new FormControl<string | null | undefined>(undefined),
			PreAuthentication: new FormControl<string | null | undefined>(undefined),
			PostAuthentication: new FormControl<string | null | undefined>(undefined),
			DefineAuthChallenge: new FormControl<string | null | undefined>(undefined),
			CreateAuthChallenge: new FormControl<string | null | undefined>(undefined),
			VerifyAuthChallengeResponse: new FormControl<string | null | undefined>(undefined),
			PreTokenGeneration: new FormControl<string | null | undefined>(undefined),
			UserMigration: new FormControl<string | null | undefined>(undefined),
			KMSKeyID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom SMS sender Lambda configuration type. */
	export interface CustomSMSLambdaVersionConfigType {

		/** Required */
		LambdaVersion: CustomSMSSenderLambdaVersionType;

		/** Required */
		LambdaArn: string;
	}

	/** A custom SMS sender Lambda configuration type. */
	export interface CustomSMSLambdaVersionConfigTypeFormProperties {

		/** Required */
		LambdaVersion: FormControl<CustomSMSSenderLambdaVersionType | null | undefined>,

		/** Required */
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomSMSLambdaVersionConfigTypeFormGroup() {
		return new FormGroup<CustomSMSLambdaVersionConfigTypeFormProperties>({
			LambdaVersion: new FormControl<CustomSMSSenderLambdaVersionType | null | undefined>(undefined, [Validators.required]),
			LambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomSMSSenderLambdaVersionType { V1_0 = 0 }


	/** A custom email sender Lambda configuration type. */
	export interface CustomEmailLambdaVersionConfigType {

		/** Required */
		LambdaVersion: CustomSMSSenderLambdaVersionType;

		/** Required */
		LambdaArn: string;
	}

	/** A custom email sender Lambda configuration type. */
	export interface CustomEmailLambdaVersionConfigTypeFormProperties {

		/** Required */
		LambdaVersion: FormControl<CustomSMSSenderLambdaVersionType | null | undefined>,

		/** Required */
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomEmailLambdaVersionConfigTypeFormGroup() {
		return new FormGroup<CustomEmailLambdaVersionConfigTypeFormProperties>({
			LambdaVersion: new FormControl<CustomSMSSenderLambdaVersionType | null | undefined>(undefined, [Validators.required]),
			LambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatusType { Enabled = 0, Disabled = 1 }

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
		DefaultEmailOption?: DefaultEmailOptionType;
	}

	/** The template for verification messages. */
	export interface VerificationMessageTemplateTypeFormProperties {
		SmsMessage: FormControl<string | null | undefined>,
		EmailMessage: FormControl<string | null | undefined>,
		EmailSubject: FormControl<string | null | undefined>,
		EmailMessageByLink: FormControl<string | null | undefined>,
		EmailSubjectByLink: FormControl<string | null | undefined>,
		DefaultEmailOption: FormControl<DefaultEmailOptionType | null | undefined>,
	}
	export function CreateVerificationMessageTemplateTypeFormGroup() {
		return new FormGroup<VerificationMessageTemplateTypeFormProperties>({
			SmsMessage: new FormControl<string | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined),
			EmailSubject: new FormControl<string | null | undefined>(undefined),
			EmailMessageByLink: new FormControl<string | null | undefined>(undefined),
			EmailSubjectByLink: new FormControl<string | null | undefined>(undefined),
			DefaultEmailOption: new FormControl<DefaultEmailOptionType | null | undefined>(undefined),
		});

	}

	export enum DefaultEmailOptionType { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }


	/** The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>. */
	export interface UserAttributeUpdateSettingsType {
		AttributesRequireVerificationBeforeUpdate?: Array<VerifiedAttributeType>;
	}

	/** The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>. */
	export interface UserAttributeUpdateSettingsTypeFormProperties {
	}
	export function CreateUserAttributeUpdateSettingsTypeFormGroup() {
		return new FormGroup<UserAttributeUpdateSettingsTypeFormProperties>({
		});

	}

	export enum UserPoolMfaType { OFF = 0, ON = 1, OPTIONAL = 2 }


	/** <p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html"> DescribeUserPool</a> request returns a null value for this object when the user pool isn't configured to remember devices. When device remembering is active, you can remember a user's device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user's device to <code>remembered</code> or <code>not_remembered</code>.</p> <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the authentication parameters in your user's <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html"> InitiateAuth</a> request. If your app doesn't include a <code>DEVICE_KEY</code> parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store these values to use in future device-authentication requests.</p> <note> <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you activate the device remembering for the user pool.</p> </note> */
	export interface DeviceConfigurationType {
		ChallengeRequiredOnNewDevice?: boolean | null;
		DeviceOnlyRememberedOnUserPrompt?: boolean | null;
	}

	/** <p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html"> DescribeUserPool</a> request returns a null value for this object when the user pool isn't configured to remember devices. When device remembering is active, you can remember a user's device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user's device to <code>remembered</code> or <code>not_remembered</code>.</p> <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the authentication parameters in your user's <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html"> InitiateAuth</a> request. If your app doesn't include a <code>DEVICE_KEY</code> parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store these values to use in future device-authentication requests.</p> <note> <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you activate the device remembering for the user pool.</p> </note> */
	export interface DeviceConfigurationTypeFormProperties {
		ChallengeRequiredOnNewDevice: FormControl<boolean | null | undefined>,
		DeviceOnlyRememberedOnUserPrompt: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceConfigurationTypeFormGroup() {
		return new FormGroup<DeviceConfigurationTypeFormProperties>({
			ChallengeRequiredOnNewDevice: new FormControl<boolean | null | undefined>(undefined),
			DeviceOnlyRememberedOnUserPrompt: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</p> <note> <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p> </note> */
	export interface EmailConfigurationType {
		SourceArn?: string;
		ReplyToEmailAddress?: string;
		EmailSendingAccount?: EmailSendingAccountType;
		From?: string;
		ConfigurationSet?: string;
	}

	/** <p>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</p> <note> <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p> </note> */
	export interface EmailConfigurationTypeFormProperties {
		SourceArn: FormControl<string | null | undefined>,
		ReplyToEmailAddress: FormControl<string | null | undefined>,
		EmailSendingAccount: FormControl<EmailSendingAccountType | null | undefined>,
		From: FormControl<string | null | undefined>,
		ConfigurationSet: FormControl<string | null | undefined>,
	}
	export function CreateEmailConfigurationTypeFormGroup() {
		return new FormGroup<EmailConfigurationTypeFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReplyToEmailAddress: new FormControl<string | null | undefined>(undefined),
			EmailSendingAccount: new FormControl<EmailSendingAccountType | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined),
			ConfigurationSet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmailSendingAccountType { COGNITO_DEFAULT = 0, DEVELOPER = 1 }


	/** The SMS configuration type is the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. */
	export interface SmsConfigurationType {

		/** Required */
		SnsCallerArn: string;
		ExternalId?: string;
		SnsRegion?: string;
	}

	/** The SMS configuration type is the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. */
	export interface SmsConfigurationTypeFormProperties {

		/** Required */
		SnsCallerArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		SnsRegion: FormControl<string | null | undefined>,
	}
	export function CreateSmsConfigurationTypeFormGroup() {
		return new FormGroup<SmsConfigurationTypeFormProperties>({
			SnsCallerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			SnsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPoolTagsType {
	}
	export interface UserPoolTagsTypeFormProperties {
	}
	export function CreateUserPoolTagsTypeFormGroup() {
		return new FormGroup<UserPoolTagsTypeFormProperties>({
		});

	}


	/** The configuration for creating a new user profile. */
	export interface AdminCreateUserConfigType {
		AllowAdminCreateUserOnly?: boolean | null;
		UnusedAccountValidityDays?: number | null;
		InviteMessageTemplate?: MessageTemplateType;
	}

	/** The configuration for creating a new user profile. */
	export interface AdminCreateUserConfigTypeFormProperties {
		AllowAdminCreateUserOnly: FormControl<boolean | null | undefined>,
		UnusedAccountValidityDays: FormControl<number | null | undefined>,
	}
	export function CreateAdminCreateUserConfigTypeFormGroup() {
		return new FormGroup<AdminCreateUserConfigTypeFormProperties>({
			AllowAdminCreateUserOnly: new FormControl<boolean | null | undefined>(undefined),
			UnusedAccountValidityDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The message template structure. */
	export interface MessageTemplateType {
		SMSMessage?: string;
		EmailMessage?: string;
		EmailSubject?: string;
	}

	/** The message template structure. */
	export interface MessageTemplateTypeFormProperties {
		SMSMessage: FormControl<string | null | undefined>,
		EmailMessage: FormControl<string | null | undefined>,
		EmailSubject: FormControl<string | null | undefined>,
	}
	export function CreateMessageTemplateTypeFormGroup() {
		return new FormGroup<MessageTemplateTypeFormProperties>({
			SMSMessage: new FormControl<string | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined),
			EmailSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p> */
	export interface UserPoolAddOnsType {

		/** Required */
		AdvancedSecurityMode: AdvancedSecurityModeType;
	}

	/** <p>User pool add-ons. Contains settings for activation of advanced security features. To log user security information but take no action, set to <code>AUDIT</code>. To configure automatic security responses to risky traffic to your user pool, set to <code>ENFORCED</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p> */
	export interface UserPoolAddOnsTypeFormProperties {

		/** Required */
		AdvancedSecurityMode: FormControl<AdvancedSecurityModeType | null | undefined>,
	}
	export function CreateUserPoolAddOnsTypeFormGroup() {
		return new FormGroup<UserPoolAddOnsTypeFormProperties>({
			AdvancedSecurityMode: new FormControl<AdvancedSecurityModeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdvancedSecurityModeType { OFF = 0, AUDIT = 1, ENFORCED = 2 }


	/** The username configuration type.  */
	export interface UsernameConfigurationType {

		/** Required */
		CaseSensitive: boolean;
	}

	/** The username configuration type.  */
	export interface UsernameConfigurationTypeFormProperties {

		/** Required */
		CaseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateUsernameConfigurationTypeFormGroup() {
		return new FormGroup<UsernameConfigurationTypeFormProperties>({
			CaseSensitive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data type for <code>AccountRecoverySetting</code>. */
	export interface AccountRecoverySettingType {
		RecoveryMechanisms?: Array<RecoveryOptionType>;
	}

	/** The data type for <code>AccountRecoverySetting</code>. */
	export interface AccountRecoverySettingTypeFormProperties {
	}
	export function CreateAccountRecoverySettingTypeFormGroup() {
		return new FormGroup<AccountRecoverySettingTypeFormProperties>({
		});

	}


	/** A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionType {

		/** Required */
		Priority: number;

		/** Required */
		Name: RecoveryOptionNameType;
	}

	/** A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionTypeFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<RecoveryOptionNameType | null | undefined>,
	}
	export function CreateRecoveryOptionTypeFormGroup() {
		return new FormGroup<RecoveryOptionTypeFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<RecoveryOptionNameType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecoveryOptionNameType { verified_email = 0, verified_phone_number = 1, admin_only = 2 }


	/** Represents the request to create a user pool. */
	export interface CreateUserPoolRequest {

		/** Required */
		PoolName: string;
		Policies?: UserPoolPolicyType;
		DeletionProtection?: DeletionProtectionType;
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		MfaConfiguration?: UserPoolMfaType;
		UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
		DeviceConfiguration?: DeviceConfigurationType;
		EmailConfiguration?: EmailConfigurationType;
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		AdminCreateUserConfig?: AdminCreateUserConfigType;
		Schema?: Array<SchemaAttributeType>;
		UserPoolAddOns?: UserPoolAddOnsType;
		UsernameConfiguration?: UsernameConfigurationType;
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	/** Represents the request to create a user pool. */
	export interface CreateUserPoolRequestFormProperties {

		/** Required */
		PoolName: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<DeletionProtectionType | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
	}
	export function CreateCreateUserPoolRequestFormGroup() {
		return new FormGroup<CreateUserPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeletionProtection: new FormControl<DeletionProtectionType | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
		});

	}

	export interface UserPoolTaggingException {
	}
	export interface UserPoolTaggingExceptionFormProperties {
	}
	export function CreateUserPoolTaggingExceptionFormGroup() {
		return new FormGroup<UserPoolTaggingExceptionFormProperties>({
		});

	}


	/** Represents the response from the server to create a user pool client. */
	export interface CreateUserPoolClientResponse {
		UserPoolClient?: UserPoolClientType;
	}

	/** Represents the response from the server to create a user pool client. */
	export interface CreateUserPoolClientResponseFormProperties {
	}
	export function CreateCreateUserPoolClientResponseFormGroup() {
		return new FormGroup<CreateUserPoolClientResponseFormProperties>({
		});

	}


	/** Contains information about a user pool client. */
	export interface UserPoolClientType {
		UserPoolId?: string;
		ClientName?: string;
		ClientId?: string;
		ClientSecret?: string;
		LastModifiedDate?: Date;
		CreationDate?: Date;
		RefreshTokenValidity?: number | null;
		AccessTokenValidity?: number | null;
		IdTokenValidity?: number | null;
		TokenValidityUnits?: TokenValidityUnitsType;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
		EnableTokenRevocation?: boolean | null;
		EnablePropagateAdditionalUserContextData?: boolean | null;
		AuthSessionValidity?: number | null;
	}

	/** Contains information about a user pool client. */
	export interface UserPoolClientTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientName: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		RefreshTokenValidity: FormControl<number | null | undefined>,
		AccessTokenValidity: FormControl<number | null | undefined>,
		IdTokenValidity: FormControl<number | null | undefined>,
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<PreventUserExistenceErrorTypes | null | undefined>,
		EnableTokenRevocation: FormControl<boolean | null | undefined>,
		EnablePropagateAdditionalUserContextData: FormControl<boolean | null | undefined>,
		AuthSessionValidity: FormControl<number | null | undefined>,
	}
	export function CreateUserPoolClientTypeFormGroup() {
		return new FormGroup<UserPoolClientTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientName: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			AccessTokenValidity: new FormControl<number | null | undefined>(undefined),
			IdTokenValidity: new FormControl<number | null | undefined>(undefined),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<PreventUserExistenceErrorTypes | null | undefined>(undefined),
			EnableTokenRevocation: new FormControl<boolean | null | undefined>(undefined),
			EnablePropagateAdditionalUserContextData: new FormControl<boolean | null | undefined>(undefined),
			AuthSessionValidity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data type TokenValidityUnits specifies the time units you use when you set the duration of ID, access, and refresh tokens. */
	export interface TokenValidityUnitsType {
		AccessToken?: TimeUnitsType;
		IdToken?: TimeUnitsType;
		RefreshToken?: TimeUnitsType;
	}

	/** The data type TokenValidityUnits specifies the time units you use when you set the duration of ID, access, and refresh tokens. */
	export interface TokenValidityUnitsTypeFormProperties {
		AccessToken: FormControl<TimeUnitsType | null | undefined>,
		IdToken: FormControl<TimeUnitsType | null | undefined>,
		RefreshToken: FormControl<TimeUnitsType | null | undefined>,
	}
	export function CreateTokenValidityUnitsTypeFormGroup() {
		return new FormGroup<TokenValidityUnitsTypeFormProperties>({
			AccessToken: new FormControl<TimeUnitsType | null | undefined>(undefined),
			IdToken: new FormControl<TimeUnitsType | null | undefined>(undefined),
			RefreshToken: new FormControl<TimeUnitsType | null | undefined>(undefined),
		});

	}

	export enum TimeUnitsType { seconds = 0, minutes = 1, hours = 2, days = 3 }

	export enum ExplicitAuthFlowsType { ADMIN_NO_SRP_AUTH = 0, CUSTOM_AUTH_FLOW_ONLY = 1, USER_PASSWORD_AUTH = 2, ALLOW_ADMIN_USER_PASSWORD_AUTH = 3, ALLOW_CUSTOM_AUTH = 4, ALLOW_USER_PASSWORD_AUTH = 5, ALLOW_USER_SRP_AUTH = 6, ALLOW_REFRESH_TOKEN_AUTH = 7 }

	export enum OAuthFlowType { code = 0, implicit = 1, client_credentials = 2 }


	/** <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.</p> <note> <p>In Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note> */
	export interface AnalyticsConfigurationType {
		ApplicationId?: string;
		ApplicationArn?: string;
		RoleArn?: string;
		ExternalId?: string;
		UserDataShared?: boolean | null;
	}

	/** <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.</p> <note> <p>In Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note> */
	export interface AnalyticsConfigurationTypeFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ApplicationArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		UserDataShared: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyticsConfigurationTypeFormGroup() {
		return new FormGroup<AnalyticsConfigurationTypeFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			UserDataShared: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PreventUserExistenceErrorTypes { LEGACY = 0, ENABLED = 1 }


	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientName: string;
		GenerateSecret?: boolean | null;
		RefreshTokenValidity?: number | null;
		AccessTokenValidity?: number | null;
		IdTokenValidity?: number | null;
		TokenValidityUnits?: TokenValidityUnitsType;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
		EnableTokenRevocation?: boolean | null;
		EnablePropagateAdditionalUserContextData?: boolean | null;
		AuthSessionValidity?: number | null;
	}

	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientName: FormControl<string | null | undefined>,
		GenerateSecret: FormControl<boolean | null | undefined>,
		RefreshTokenValidity: FormControl<number | null | undefined>,
		AccessTokenValidity: FormControl<number | null | undefined>,
		IdTokenValidity: FormControl<number | null | undefined>,
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<PreventUserExistenceErrorTypes | null | undefined>,
		EnableTokenRevocation: FormControl<boolean | null | undefined>,
		EnablePropagateAdditionalUserContextData: FormControl<boolean | null | undefined>,
		AuthSessionValidity: FormControl<number | null | undefined>,
	}
	export function CreateCreateUserPoolClientRequestFormGroup() {
		return new FormGroup<CreateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GenerateSecret: new FormControl<boolean | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			AccessTokenValidity: new FormControl<number | null | undefined>(undefined),
			IdTokenValidity: new FormControl<number | null | undefined>(undefined),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<PreventUserExistenceErrorTypes | null | undefined>(undefined),
			EnableTokenRevocation: new FormControl<boolean | null | undefined>(undefined),
			EnablePropagateAdditionalUserContextData: new FormControl<boolean | null | undefined>(undefined),
			AuthSessionValidity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScopeDoesNotExistException {
	}
	export interface ScopeDoesNotExistExceptionFormProperties {
	}
	export function CreateScopeDoesNotExistExceptionFormGroup() {
		return new FormGroup<ScopeDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidOAuthFlowException {
	}
	export interface InvalidOAuthFlowExceptionFormProperties {
	}
	export function CreateInvalidOAuthFlowExceptionFormGroup() {
		return new FormGroup<InvalidOAuthFlowExceptionFormProperties>({
		});

	}

	export interface CreateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}
	export interface CreateUserPoolDomainResponseFormProperties {
		CloudFrontDomain: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPoolDomainResponseFormGroup() {
		return new FormGroup<CreateUserPoolDomainResponseFormProperties>({
			CloudFrontDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserPoolDomainRequest {

		/** Required */
		Domain: string;

		/** Required */
		UserPoolId: string;
		CustomDomainConfig?: CustomDomainConfigType;
	}
	export interface CreateUserPoolDomainRequestFormProperties {

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPoolDomainRequestFormGroup() {
		return new FormGroup<CreateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigType {

		/** Required */
		CertificateArn: string;
	}

	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigTypeFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomDomainConfigTypeFormGroup() {
		return new FormGroup<CustomDomainConfigTypeFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGroupRequest {

		/** Required */
		GroupName: string;

		/** Required */
		UserPoolId: string;
	}
	export interface DeleteGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIdentityProviderRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ProviderName: string;
	}
	export interface DeleteIdentityProviderRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityProviderRequestFormGroup() {
		return new FormGroup<DeleteIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsupportedIdentityProviderException {
	}
	export interface UnsupportedIdentityProviderExceptionFormProperties {
	}
	export function CreateUnsupportedIdentityProviderExceptionFormGroup() {
		return new FormGroup<UnsupportedIdentityProviderExceptionFormProperties>({
		});

	}

	export interface DeleteResourceServerRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Identifier: string;
	}
	export interface DeleteResourceServerRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceServerRequestFormGroup() {
		return new FormGroup<DeleteResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the request to delete a user. */
	export interface DeleteUserRequest {

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to delete a user. */
	export interface DeleteUserRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to delete user attributes. */
	export interface DeleteUserAttributesResponse {
	}

	/** Represents the response from the server to delete user attributes. */
	export interface DeleteUserAttributesResponseFormProperties {
	}
	export function CreateDeleteUserAttributesResponseFormGroup() {
		return new FormGroup<DeleteUserAttributesResponseFormProperties>({
		});

	}


	/** Represents the request to delete user attributes. */
	export interface DeleteUserAttributesRequest {

		/** Required */
		UserAttributeNames: Array<string>;

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to delete user attributes. */
	export interface DeleteUserAttributesRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserAttributesRequestFormGroup() {
		return new FormGroup<DeleteUserAttributesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequest {

		/** Required */
		UserPoolId: string;
	}

	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolRequestFormGroup() {
		return new FormGroup<DeleteUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientId: string;
	}

	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolClientRequestFormGroup() {
		return new FormGroup<DeleteUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserPoolDomainResponse {
	}
	export interface DeleteUserPoolDomainResponseFormProperties {
	}
	export function CreateDeleteUserPoolDomainResponseFormGroup() {
		return new FormGroup<DeleteUserPoolDomainResponseFormProperties>({
		});

	}

	export interface DeleteUserPoolDomainRequest {

		/** Required */
		Domain: string;

		/** Required */
		UserPoolId: string;
	}
	export interface DeleteUserPoolDomainRequestFormProperties {

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolDomainRequestFormGroup() {
		return new FormGroup<DeleteUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeIdentityProviderResponse {

		/** Required */
		IdentityProvider: IdentityProviderType;
	}
	export interface DescribeIdentityProviderResponseFormProperties {
	}
	export function CreateDescribeIdentityProviderResponseFormGroup() {
		return new FormGroup<DescribeIdentityProviderResponseFormProperties>({
		});

	}

	export interface DescribeIdentityProviderRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ProviderName: string;
	}
	export interface DescribeIdentityProviderRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderRequestFormGroup() {
		return new FormGroup<DescribeIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourceServerResponse {

		/** Required */
		ResourceServer: ResourceServerType;
	}
	export interface DescribeResourceServerResponseFormProperties {
	}
	export function CreateDescribeResourceServerResponseFormGroup() {
		return new FormGroup<DescribeResourceServerResponseFormProperties>({
		});

	}

	export interface DescribeResourceServerRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Identifier: string;
	}
	export interface DescribeResourceServerRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceServerRequestFormGroup() {
		return new FormGroup<DescribeResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRiskConfigurationResponse {

		/** Required */
		RiskConfiguration: RiskConfigurationType;
	}
	export interface DescribeRiskConfigurationResponseFormProperties {
	}
	export function CreateDescribeRiskConfigurationResponseFormGroup() {
		return new FormGroup<DescribeRiskConfigurationResponseFormProperties>({
		});

	}


	/** The risk configuration type. */
	export interface RiskConfigurationType {
		UserPoolId?: string;
		ClientId?: string;
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
		LastModifiedDate?: Date;
	}

	/** The risk configuration type. */
	export interface RiskConfigurationTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRiskConfigurationTypeFormGroup() {
		return new FormGroup<RiskConfigurationTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The compromised credentials risk configuration type. */
	export interface CompromisedCredentialsRiskConfigurationType {
		EventFilter?: Array<EventFilterType>;

		/** Required */
		Actions: CompromisedCredentialsActionsType;
	}

	/** The compromised credentials risk configuration type. */
	export interface CompromisedCredentialsRiskConfigurationTypeFormProperties {
	}
	export function CreateCompromisedCredentialsRiskConfigurationTypeFormGroup() {
		return new FormGroup<CompromisedCredentialsRiskConfigurationTypeFormProperties>({
		});

	}

	export enum EventFilterType { SIGN_IN = 0, PASSWORD_CHANGE = 1, SIGN_UP = 2 }


	/** The compromised credentials actions type. */
	export interface CompromisedCredentialsActionsType {

		/** Required */
		EventAction: CompromisedCredentialsEventActionType;
	}

	/** The compromised credentials actions type. */
	export interface CompromisedCredentialsActionsTypeFormProperties {

		/** Required */
		EventAction: FormControl<CompromisedCredentialsEventActionType | null | undefined>,
	}
	export function CreateCompromisedCredentialsActionsTypeFormGroup() {
		return new FormGroup<CompromisedCredentialsActionsTypeFormProperties>({
			EventAction: new FormControl<CompromisedCredentialsEventActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CompromisedCredentialsEventActionType { BLOCK = 0, NO_ACTION = 1 }


	/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
	export interface AccountTakeoverRiskConfigurationType {
		NotifyConfiguration?: NotifyConfigurationType;

		/** Required */
		Actions: AccountTakeoverActionsType;
	}

	/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
	export interface AccountTakeoverRiskConfigurationTypeFormProperties {
	}
	export function CreateAccountTakeoverRiskConfigurationTypeFormGroup() {
		return new FormGroup<AccountTakeoverRiskConfigurationTypeFormProperties>({
		});

	}


	/** The notify configuration type. */
	export interface NotifyConfigurationType {
		From?: string;
		ReplyTo?: string;

		/** Required */
		SourceArn: string;
		BlockEmail?: NotifyEmailType;
		NoActionEmail?: NotifyEmailType;
		MfaEmail?: NotifyEmailType;
	}

	/** The notify configuration type. */
	export interface NotifyConfigurationTypeFormProperties {
		From: FormControl<string | null | undefined>,
		ReplyTo: FormControl<string | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateNotifyConfigurationTypeFormGroup() {
		return new FormGroup<NotifyConfigurationTypeFormProperties>({
			From: new FormControl<string | null | undefined>(undefined),
			ReplyTo: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The notify email type. */
	export interface NotifyEmailType {

		/** Required */
		Subject: string;
		HtmlBody?: string;
		TextBody?: string;
	}

	/** The notify email type. */
	export interface NotifyEmailTypeFormProperties {

		/** Required */
		Subject: FormControl<string | null | undefined>,
		HtmlBody: FormControl<string | null | undefined>,
		TextBody: FormControl<string | null | undefined>,
	}
	export function CreateNotifyEmailTypeFormGroup() {
		return new FormGroup<NotifyEmailTypeFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HtmlBody: new FormControl<string | null | undefined>(undefined),
			TextBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account takeover actions type. */
	export interface AccountTakeoverActionsType {
		LowAction?: AccountTakeoverActionType;
		MediumAction?: AccountTakeoverActionType;
		HighAction?: AccountTakeoverActionType;
	}

	/** Account takeover actions type. */
	export interface AccountTakeoverActionsTypeFormProperties {
	}
	export function CreateAccountTakeoverActionsTypeFormGroup() {
		return new FormGroup<AccountTakeoverActionsTypeFormProperties>({
		});

	}


	/** Account takeover action type. */
	export interface AccountTakeoverActionType {

		/** Required */
		Notify: boolean;

		/** Required */
		EventAction: AccountTakeoverEventActionType;
	}

	/** Account takeover action type. */
	export interface AccountTakeoverActionTypeFormProperties {

		/** Required */
		Notify: FormControl<boolean | null | undefined>,

		/** Required */
		EventAction: FormControl<AccountTakeoverEventActionType | null | undefined>,
	}
	export function CreateAccountTakeoverActionTypeFormGroup() {
		return new FormGroup<AccountTakeoverActionTypeFormProperties>({
			Notify: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EventAction: new FormControl<AccountTakeoverEventActionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccountTakeoverEventActionType { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


	/** The type of the configuration to override the risk decision. */
	export interface RiskExceptionConfigurationType {
		BlockedIPRangeList?: Array<string>;
		SkippedIPRangeList?: Array<string>;
	}

	/** The type of the configuration to override the risk decision. */
	export interface RiskExceptionConfigurationTypeFormProperties {
	}
	export function CreateRiskExceptionConfigurationTypeFormGroup() {
		return new FormGroup<RiskExceptionConfigurationTypeFormProperties>({
		});

	}

	export interface DescribeRiskConfigurationRequest {

		/** Required */
		UserPoolId: string;
		ClientId?: string;
	}
	export interface DescribeRiskConfigurationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRiskConfigurationRequestFormGroup() {
		return new FormGroup<DescribeRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to describe the user import job. */
	export interface DescribeUserImportJobResponse {
		UserImportJob?: UserImportJobType;
	}

	/** Represents the response from the server to the request to describe the user import job. */
	export interface DescribeUserImportJobResponseFormProperties {
	}
	export function CreateDescribeUserImportJobResponseFormGroup() {
		return new FormGroup<DescribeUserImportJobResponseFormProperties>({
		});

	}


	/** Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		JobId: string;
	}

	/** Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserImportJobRequestFormGroup() {
		return new FormGroup<DescribeUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response to describe the user pool. */
	export interface DescribeUserPoolResponse {
		UserPool?: UserPoolType;
	}

	/** Represents the response to describe the user pool. */
	export interface DescribeUserPoolResponseFormProperties {
	}
	export function CreateDescribeUserPoolResponseFormGroup() {
		return new FormGroup<DescribeUserPoolResponseFormProperties>({
		});

	}


	/** Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequest {

		/** Required */
		UserPoolId: string;
	}

	/** Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolRequestFormGroup() {
		return new FormGroup<DescribeUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server from a request to describe the user pool client. */
	export interface DescribeUserPoolClientResponse {
		UserPoolClient?: UserPoolClientType;
	}

	/** Represents the response from the server from a request to describe the user pool client. */
	export interface DescribeUserPoolClientResponseFormProperties {
	}
	export function CreateDescribeUserPoolClientResponseFormGroup() {
		return new FormGroup<DescribeUserPoolClientResponseFormProperties>({
		});

	}


	/** Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientId: string;
	}

	/** Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolClientRequestFormGroup() {
		return new FormGroup<DescribeUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserPoolDomainResponse {
		DomainDescription?: DomainDescriptionType;
	}
	export interface DescribeUserPoolDomainResponseFormProperties {
	}
	export function CreateDescribeUserPoolDomainResponseFormGroup() {
		return new FormGroup<DescribeUserPoolDomainResponseFormProperties>({
		});

	}


	/** A container for information about a domain. */
	export interface DomainDescriptionType {
		UserPoolId?: string;
		AWSAccountId?: string;
		Domain?: string;
		S3Bucket?: string;
		CloudFrontDistribution?: string;
		Version?: string;
		Status?: DomainStatusType;
		CustomDomainConfig?: CustomDomainConfigType;
	}

	/** A container for information about a domain. */
	export interface DomainDescriptionTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		AWSAccountId: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		S3Bucket: FormControl<string | null | undefined>,
		CloudFrontDistribution: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Status: FormControl<DomainStatusType | null | undefined>,
	}
	export function CreateDomainDescriptionTypeFormGroup() {
		return new FormGroup<DomainDescriptionTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			CloudFrontDistribution: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DomainStatusType | null | undefined>(undefined),
		});

	}

	export enum DomainStatusType { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export interface DescribeUserPoolDomainRequest {

		/** Required */
		Domain: string;
	}
	export interface DescribeUserPoolDomainRequestFormProperties {

		/** Required */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolDomainRequestFormGroup() {
		return new FormGroup<DescribeUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequest {
		AccessToken?: string;

		/** Required */
		DeviceKey: string;
	}

	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateForgetDeviceRequestFormGroup() {
		return new FormGroup<ForgetDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from Amazon Cognito to a request to reset a password. */
	export interface ForgotPasswordResponse {
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}

	/** The response from Amazon Cognito to a request to reset a password. */
	export interface ForgotPasswordResponseFormProperties {
	}
	export function CreateForgotPasswordResponseFormGroup() {
		return new FormGroup<ForgotPasswordResponseFormProperties>({
		});

	}


	/** The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification. */
	export interface CodeDeliveryDetailsType {
		Destination?: string;
		DeliveryMedium?: DeliveryMediumType;
		AttributeName?: string;
	}

	/** The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification. */
	export interface CodeDeliveryDetailsTypeFormProperties {
		Destination: FormControl<string | null | undefined>,
		DeliveryMedium: FormControl<DeliveryMediumType | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateCodeDeliveryDetailsTypeFormGroup() {
		return new FormGroup<CodeDeliveryDetailsTypeFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			DeliveryMedium: new FormControl<DeliveryMediumType | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequest {

		/** Required */
		ClientId: string;
		SecretHash?: string;
		UserContextData?: UserContextDataType;

		/** Required */
		Username: string;
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateForgotPasswordRequestFormGroup() {
		return new FormGroup<ForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to the request to get the header information of the CSV file for the user import job. */
	export interface GetCSVHeaderResponse {
		UserPoolId?: string;
		CSVHeader?: Array<string>;
	}

	/** Represents the response from the server to the request to get the header information of the CSV file for the user import job. */
	export interface GetCSVHeaderResponseFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderResponseFormGroup() {
		return new FormGroup<GetCSVHeaderResponseFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the header information of the CSV file for the user import job. */
	export interface GetCSVHeaderRequest {

		/** Required */
		UserPoolId: string;
	}

	/** Represents the request to get the header information of the CSV file for the user import job. */
	export interface GetCSVHeaderRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderRequestFormGroup() {
		return new FormGroup<GetCSVHeaderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gets the device response. */
	export interface GetDeviceResponse {

		/** Required */
		Device: DeviceType;
	}

	/** Gets the device response. */
	export interface GetDeviceResponseFormProperties {
	}
	export function CreateGetDeviceResponseFormGroup() {
		return new FormGroup<GetDeviceResponseFormProperties>({
		});

	}


	/** Represents the request to get the device. */
	export interface GetDeviceRequest {

		/** Required */
		DeviceKey: string;
		AccessToken?: string;
	}

	/** Represents the request to get the device. */
	export interface GetDeviceRequestFormProperties {

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupResponse {
		Group?: GroupType;
	}
	export interface GetGroupResponseFormProperties {
	}
	export function CreateGetGroupResponseFormGroup() {
		return new FormGroup<GetGroupResponseFormProperties>({
		});

	}

	export interface GetGroupRequest {

		/** Required */
		GroupName: string;

		/** Required */
		UserPoolId: string;
	}
	export interface GetGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIdentityProviderByIdentifierResponse {

		/** Required */
		IdentityProvider: IdentityProviderType;
	}
	export interface GetIdentityProviderByIdentifierResponseFormProperties {
	}
	export function CreateGetIdentityProviderByIdentifierResponseFormGroup() {
		return new FormGroup<GetIdentityProviderByIdentifierResponseFormProperties>({
		});

	}

	export interface GetIdentityProviderByIdentifierRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		IdpIdentifier: string;
	}
	export interface GetIdentityProviderByIdentifierRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		IdpIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityProviderByIdentifierRequestFormGroup() {
		return new FormGroup<GetIdentityProviderByIdentifierRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdpIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLogDeliveryConfigurationResponse {
		LogDeliveryConfiguration?: LogDeliveryConfigurationType;
	}
	export interface GetLogDeliveryConfigurationResponseFormProperties {
	}
	export function CreateGetLogDeliveryConfigurationResponseFormGroup() {
		return new FormGroup<GetLogDeliveryConfigurationResponseFormProperties>({
		});

	}


	/** The logging parameters of a user pool. */
	export interface LogDeliveryConfigurationType {

		/** Required */
		UserPoolId: string;

		/** Required */
		LogConfigurations: Array<LogConfigurationType>;
	}

	/** The logging parameters of a user pool. */
	export interface LogDeliveryConfigurationTypeFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateLogDeliveryConfigurationTypeFormGroup() {
		return new FormGroup<LogDeliveryConfigurationTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The logging parameters of a user pool. */
	export interface LogConfigurationType {

		/** Required */
		LogLevel: LogLevel;

		/** Required */
		EventSource: EventSourceName;
		CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType;
	}

	/** The logging parameters of a user pool. */
	export interface LogConfigurationTypeFormProperties {

		/** Required */
		LogLevel: FormControl<LogLevel | null | undefined>,

		/** Required */
		EventSource: FormControl<EventSourceName | null | undefined>,
	}
	export function CreateLogConfigurationTypeFormGroup() {
		return new FormGroup<LogConfigurationTypeFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
			EventSource: new FormControl<EventSourceName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogLevel { ERROR = 0 }

	export enum EventSourceName { userNotification = 0 }


	/** The CloudWatch logging destination of a user pool detailed activity logging configuration. */
	export interface CloudWatchLogsConfigurationType {
		LogGroupArn?: string;
	}

	/** The CloudWatch logging destination of a user pool detailed activity logging configuration. */
	export interface CloudWatchLogsConfigurationTypeFormProperties {
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsConfigurationTypeFormGroup() {
		return new FormGroup<CloudWatchLogsConfigurationTypeFormProperties>({
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLogDeliveryConfigurationRequest {

		/** Required */
		UserPoolId: string;
	}
	export interface GetLogDeliveryConfigurationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetLogDeliveryConfigurationRequestFormGroup() {
		return new FormGroup<GetLogDeliveryConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response from Amazon Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponse {
		Certificate?: string;
	}

	/** Response from Amazon Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningCertificateResponseFormGroup() {
		return new FormGroup<GetSigningCertificateResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to get a signing certificate from Amazon Cognito. */
	export interface GetSigningCertificateRequest {

		/** Required */
		UserPoolId: string;
	}

	/** Request to get a signing certificate from Amazon Cognito. */
	export interface GetSigningCertificateRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningCertificateRequestFormGroup() {
		return new FormGroup<GetSigningCertificateRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUICustomizationResponse {

		/** Required */
		UICustomization: UICustomizationType;
	}
	export interface GetUICustomizationResponseFormProperties {
	}
	export function CreateGetUICustomizationResponseFormGroup() {
		return new FormGroup<GetUICustomizationResponseFormProperties>({
		});

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

	/** A container for the UI customization information for a user pool's built-in app UI. */
	export interface UICustomizationTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		CSS: FormControl<string | null | undefined>,
		CSSVersion: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateUICustomizationTypeFormGroup() {
		return new FormGroup<UICustomizationTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			CSS: new FormControl<string | null | undefined>(undefined),
			CSSVersion: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetUICustomizationRequest {

		/** Required */
		UserPoolId: string;
		ClientId?: string;
	}
	export interface GetUICustomizationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateGetUICustomizationRequestFormGroup() {
		return new FormGroup<GetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponse {

		/** Required */
		Username: string;

		/** Required */
		UserAttributes: Array<AttributeType>;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string;
		UserMFASettingList?: Array<string>;
	}

	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponseFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PreferredMfaSetting: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get information about the user. */
	export interface GetUserRequest {

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to get information about the user. */
	export interface GetUserRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUserRequestFormGroup() {
		return new FormGroup<GetUserRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The verification code response returned by the server response to get the user attribute verification code. */
	export interface GetUserAttributeVerificationCodeResponse {
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}

	/** The verification code response returned by the server response to get the user attribute verification code. */
	export interface GetUserAttributeVerificationCodeResponseFormProperties {
	}
	export function CreateGetUserAttributeVerificationCodeResponseFormGroup() {
		return new FormGroup<GetUserAttributeVerificationCodeResponseFormProperties>({
		});

	}


	/** Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequest {

		/** Required */
		AccessToken: string;

		/** Required */
		AttributeName: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserAttributeVerificationCodeRequestFormGroup() {
		return new FormGroup<GetUserAttributeVerificationCodeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserPoolMfaConfigResponse {
		SmsMfaConfiguration?: SmsMfaConfigType;
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolMfaType;
	}
	export interface GetUserPoolMfaConfigResponseFormProperties {
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
	}
	export function CreateGetUserPoolMfaConfigResponseFormGroup() {
		return new FormGroup<GetUserPoolMfaConfigResponseFormProperties>({
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
		});

	}


	/** The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigType {
		SmsAuthenticationMessage?: string;
		SmsConfiguration?: SmsConfigurationType;
	}

	/** The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigTypeFormProperties {
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
	}
	export function CreateSmsMfaConfigTypeFormGroup() {
		return new FormGroup<SmsMfaConfigTypeFormProperties>({
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type used for enabling software token MFA at the user pool level. */
	export interface SoftwareTokenMfaConfigType {
		Enabled?: boolean | null;
	}

	/** The type used for enabling software token MFA at the user pool level. */
	export interface SoftwareTokenMfaConfigTypeFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSoftwareTokenMfaConfigTypeFormGroup() {
		return new FormGroup<SoftwareTokenMfaConfigTypeFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetUserPoolMfaConfigRequest {

		/** Required */
		UserPoolId: string;
	}
	export interface GetUserPoolMfaConfigRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<GetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request to sign out all devices. */
	export interface GlobalSignOutResponse {
	}

	/** The response to the request to sign out all devices. */
	export interface GlobalSignOutResponseFormProperties {
	}
	export function CreateGlobalSignOutResponseFormGroup() {
		return new FormGroup<GlobalSignOutResponseFormProperties>({
		});

	}


	/** Represents the request to sign out all devices. */
	export interface GlobalSignOutRequest {

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to sign out all devices. */
	export interface GlobalSignOutRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSignOutRequestFormGroup() {
		return new FormGroup<GlobalSignOutRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Initiates the authentication response. */
	export interface InitiateAuthResponse {
		ChallengeName?: ChallengeNameType;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response. */
	export interface InitiateAuthResponseFormProperties {
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthResponseFormGroup() {
		return new FormGroup<InitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the authentication request. */
	export interface InitiateAuthRequest {

		/** Required */
		AuthFlow: AuthFlowType;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;

		/** Required */
		ClientId: string;
		AnalyticsMetadata?: AnalyticsMetadataType;
		UserContextData?: UserContextDataType;
	}

	/** Initiates the authentication request. */
	export interface InitiateAuthRequestFormProperties {

		/** Required */
		AuthFlow: FormControl<AuthFlowType | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthRequestFormGroup() {
		return new FormGroup<InitiateAuthRequestFormProperties>({
			AuthFlow: new FormControl<AuthFlowType | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response to list devices. */
	export interface ListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string;
	}

	/** Represents the response to list devices. */
	export interface ListDevicesResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list the devices. */
	export interface ListDevicesRequest {

		/** Required */
		AccessToken: string;
		Limit?: number | null;
		PaginationToken?: string;
	}

	/** Represents the request to list the devices. */
	export interface ListDevicesRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupType>;
		NextToken?: string;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsRequest {

		/** Required */
		UserPoolId: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListGroupsRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersResponse {

		/** Required */
		Providers: Array<ProviderDescription>;
		NextToken?: string;
	}
	export interface ListIdentityProvidersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersResponseFormGroup() {
		return new FormGroup<ListIdentityProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for IdP details. */
	export interface ProviderDescription {
		ProviderName?: string;
		ProviderType?: IdentityProviderTypeType;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	/** A container for IdP details. */
	export interface ProviderDescriptionFormProperties {
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateProviderDescriptionFormGroup() {
		return new FormGroup<ProviderDescriptionFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<IdentityProviderTypeType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersRequest {

		/** Required */
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListIdentityProvidersRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersRequestFormGroup() {
		return new FormGroup<ListIdentityProvidersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceServersResponse {

		/** Required */
		ResourceServers: Array<ResourceServerType>;
		NextToken?: string;
	}
	export interface ListResourceServersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceServersResponseFormGroup() {
		return new FormGroup<ListResourceServersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceServersRequest {

		/** Required */
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListResourceServersRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceServersRequestFormGroup() {
		return new FormGroup<ListResourceServersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: UserPoolTagsType;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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


	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponse {
		UserImportJobs?: Array<UserImportJobType>;
		PaginationToken?: string;
	}

	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserImportJobsResponseFormGroup() {
		return new FormGroup<ListUserImportJobsResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		MaxResults: number;
		PaginationToken?: string;
	}

	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserImportJobsRequestFormGroup() {
		return new FormGroup<ListUserImportJobsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponse {
		UserPoolClients?: Array<UserPoolClientDescription>;
		NextToken?: string;
	}

	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolClientsResponseFormGroup() {
		return new FormGroup<ListUserPoolClientsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the user pool client. */
	export interface UserPoolClientDescription {
		ClientId?: string;
		UserPoolId?: string;
		ClientName?: string;
	}

	/** The description of the user pool client. */
	export interface UserPoolClientDescriptionFormProperties {
		ClientId: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		ClientName: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolClientDescriptionFormGroup() {
		return new FormGroup<UserPoolClientDescriptionFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequest {

		/** Required */
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolClientsRequestFormGroup() {
		return new FormGroup<ListUserPoolClientsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponse {
		UserPools?: Array<UserPoolDescriptionType>;
		NextToken?: string;
	}

	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolsResponseFormGroup() {
		return new FormGroup<ListUserPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user pool description. */
	export interface UserPoolDescriptionType {
		Id?: string;
		Name?: string;
		LambdaConfig?: LambdaConfigType;
		Status?: StatusType;
		LastModifiedDate?: Date;
		CreationDate?: Date;
	}

	/** A user pool description. */
	export interface UserPoolDescriptionTypeFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<StatusType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserPoolDescriptionTypeFormGroup() {
		return new FormGroup<UserPoolDescriptionTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StatusType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequest {
		NextToken?: string;

		/** Required */
		MaxResults: number;
	}

	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUserPoolsRequestFormGroup() {
		return new FormGroup<ListUserPoolsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from the request to list users. */
	export interface ListUsersResponse {
		Users?: Array<UserType>;
		PaginationToken?: string;
	}

	/** The response from the request to list users. */
	export interface ListUsersResponseFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to list users. */
	export interface ListUsersRequest {

		/** Required */
		UserPoolId: string;
		AttributesToGet?: Array<string>;
		Limit?: number | null;
		PaginationToken?: string;
		Filter?: string;
	}

	/** Represents the request to list users. */
	export interface ListUsersRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
		Filter: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			Filter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersInGroupResponse {
		Users?: Array<UserType>;
		NextToken?: string;
	}
	export interface ListUsersInGroupResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersInGroupResponseFormGroup() {
		return new FormGroup<ListUsersInGroupResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersInGroupRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		GroupName: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListUsersInGroupRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		GroupName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersInGroupRequestFormGroup() {
		return new FormGroup<ListUsersInGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the server when Amazon Cognito makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponse {
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}

	/** The response from the server when Amazon Cognito makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponseFormProperties {
	}
	export function CreateResendConfirmationCodeResponseFormGroup() {
		return new FormGroup<ResendConfirmationCodeResponseFormProperties>({
		});

	}


	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequest {

		/** Required */
		ClientId: string;
		SecretHash?: string;
		UserContextData?: UserContextDataType;

		/** Required */
		Username: string;
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateResendConfirmationCodeRequestFormGroup() {
		return new FormGroup<ResendConfirmationCodeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponse {
		ChallengeName?: ChallengeNameType;
		Session?: string;
		ChallengeParameters?: ChallengeParametersType;
		AuthenticationResult?: AuthenticationResultType;
	}

	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<RespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequest {

		/** Required */
		ClientId: string;

		/** Required */
		ChallengeName: ChallengeNameType;
		Session?: string;
		ChallengeResponses?: ChallengeResponsesType;
		AnalyticsMetadata?: AnalyticsMetadataType;
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		ChallengeName: FormControl<ChallengeNameType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<RespondToAuthChallengeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChallengeName: new FormControl<ChallengeNameType | null | undefined>(undefined, [Validators.required]),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokeTokenResponse {
	}
	export interface RevokeTokenResponseFormProperties {
	}
	export function CreateRevokeTokenResponseFormGroup() {
		return new FormGroup<RevokeTokenResponseFormProperties>({
		});

	}

	export interface RevokeTokenRequest {

		/** Required */
		Token: string;

		/** Required */
		ClientId: string;
		ClientSecret?: string;
	}
	export interface RevokeTokenRequestFormProperties {

		/** Required */
		Token: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
	}
	export function CreateRevokeTokenRequestFormGroup() {
		return new FormGroup<RevokeTokenRequestFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface UnsupportedTokenTypeException {
	}
	export interface UnsupportedTokenTypeExceptionFormProperties {
	}
	export function CreateUnsupportedTokenTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedTokenTypeExceptionFormProperties>({
		});

	}

	export interface SetLogDeliveryConfigurationResponse {
		LogDeliveryConfiguration?: LogDeliveryConfigurationType;
	}
	export interface SetLogDeliveryConfigurationResponseFormProperties {
	}
	export function CreateSetLogDeliveryConfigurationResponseFormGroup() {
		return new FormGroup<SetLogDeliveryConfigurationResponseFormProperties>({
		});

	}

	export interface SetLogDeliveryConfigurationRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		LogConfigurations: Array<LogConfigurationType>;
	}
	export interface SetLogDeliveryConfigurationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateSetLogDeliveryConfigurationRequestFormGroup() {
		return new FormGroup<SetLogDeliveryConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetRiskConfigurationResponse {

		/** Required */
		RiskConfiguration: RiskConfigurationType;
	}
	export interface SetRiskConfigurationResponseFormProperties {
	}
	export function CreateSetRiskConfigurationResponseFormGroup() {
		return new FormGroup<SetRiskConfigurationResponseFormProperties>({
		});

	}

	export interface SetRiskConfigurationRequest {

		/** Required */
		UserPoolId: string;
		ClientId?: string;
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
	}
	export interface SetRiskConfigurationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateSetRiskConfigurationRequestFormGroup() {
		return new FormGroup<SetRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetUICustomizationResponse {

		/** Required */
		UICustomization: UICustomizationType;
	}
	export interface SetUICustomizationResponseFormProperties {
	}
	export function CreateSetUICustomizationResponseFormGroup() {
		return new FormGroup<SetUICustomizationResponseFormProperties>({
		});

	}

	export interface SetUICustomizationRequest {

		/** Required */
		UserPoolId: string;
		ClientId?: string;
		CSS?: string;
		ImageFile?: string;
	}
	export interface SetUICustomizationRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		CSS: FormControl<string | null | undefined>,
		ImageFile: FormControl<string | null | undefined>,
	}
	export function CreateSetUICustomizationRequestFormGroup() {
		return new FormGroup<SetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined),
			CSS: new FormControl<string | null | undefined>(undefined),
			ImageFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetUserMFAPreferenceResponse {
	}
	export interface SetUserMFAPreferenceResponseFormProperties {
	}
	export function CreateSetUserMFAPreferenceResponseFormGroup() {
		return new FormGroup<SetUserMFAPreferenceResponseFormProperties>({
		});

	}

	export interface SetUserMFAPreferenceRequest {
		SMSMfaSettings?: SMSMfaSettingsType;
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

		/** Required */
		AccessToken: string;
	}
	export interface SetUserMFAPreferenceRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<SetUserMFAPreferenceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetUserPoolMfaConfigResponse {
		SmsMfaConfiguration?: SmsMfaConfigType;
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolMfaType;
	}
	export interface SetUserPoolMfaConfigResponseFormProperties {
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
	}
	export function CreateSetUserPoolMfaConfigResponseFormGroup() {
		return new FormGroup<SetUserPoolMfaConfigResponseFormProperties>({
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
		});

	}

	export interface SetUserPoolMfaConfigRequest {

		/** Required */
		UserPoolId: string;
		SmsMfaConfiguration?: SmsMfaConfigType;
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolMfaType;
	}
	export interface SetUserPoolMfaConfigRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
	}
	export function CreateSetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<SetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
		});

	}


	/** The response from the server for a set user settings request. */
	export interface SetUserSettingsResponse {
	}

	/** The response from the server for a set user settings request. */
	export interface SetUserSettingsResponseFormProperties {
	}
	export function CreateSetUserSettingsResponseFormGroup() {
		return new FormGroup<SetUserSettingsResponseFormProperties>({
		});

	}


	/** Represents the request to set user settings. */
	export interface SetUserSettingsRequest {

		/** Required */
		AccessToken: string;

		/** Required */
		MFAOptions: Array<MFAOptionType>;
	}

	/** Represents the request to set user settings. */
	export interface SetUserSettingsRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateSetUserSettingsRequestFormGroup() {
		return new FormGroup<SetUserSettingsRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from the server for a registration request. */
	export interface SignUpResponse {

		/** Required */
		UserConfirmed: boolean;
		CodeDeliveryDetails?: CodeDeliveryDetailsType;

		/** Required */
		UserSub: string;
	}

	/** The response from the server for a registration request. */
	export interface SignUpResponseFormProperties {

		/** Required */
		UserConfirmed: FormControl<boolean | null | undefined>,

		/** Required */
		UserSub: FormControl<string | null | undefined>,
	}
	export function CreateSignUpResponseFormGroup() {
		return new FormGroup<SignUpResponseFormProperties>({
			UserConfirmed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			UserSub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the request to register a user. */
	export interface SignUpRequest {

		/** Required */
		ClientId: string;
		SecretHash?: string;

		/** Required */
		Username: string;

		/** Required */
		Password: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;
		AnalyticsMetadata?: AnalyticsMetadataType;
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to register a user. */
	export interface SignUpRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSignUpRequestFormGroup() {
		return new FormGroup<SignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to the request to start the user import job. */
	export interface StartUserImportJobResponse {
		UserImportJob?: UserImportJobType;
	}

	/** Represents the response from the server to the request to start the user import job. */
	export interface StartUserImportJobResponseFormProperties {
	}
	export function CreateStartUserImportJobResponseFormGroup() {
		return new FormGroup<StartUserImportJobResponseFormProperties>({
		});

	}


	/** Represents the request to start the user import job. */
	export interface StartUserImportJobRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		JobId: string;
	}

	/** Represents the request to start the user import job. */
	export interface StartUserImportJobRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartUserImportJobRequestFormGroup() {
		return new FormGroup<StartUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server to the request to stop the user import job. */
	export interface StopUserImportJobResponse {
		UserImportJob?: UserImportJobType;
	}

	/** Represents the response from the server to the request to stop the user import job. */
	export interface StopUserImportJobResponseFormProperties {
	}
	export function CreateStopUserImportJobResponseFormGroup() {
		return new FormGroup<StopUserImportJobResponseFormProperties>({
		});

	}


	/** Represents the request to stop the user import job. */
	export interface StopUserImportJobRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		JobId: string;
	}

	/** Represents the request to stop the user import job. */
	export interface StopUserImportJobRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopUserImportJobRequestFormGroup() {
		return new FormGroup<StopUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: UserPoolTagsType;
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
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

	export interface UpdateAuthEventFeedbackResponse {
	}
	export interface UpdateAuthEventFeedbackResponseFormProperties {
	}
	export function CreateUpdateAuthEventFeedbackResponseFormGroup() {
		return new FormGroup<UpdateAuthEventFeedbackResponseFormProperties>({
		});

	}

	export interface UpdateAuthEventFeedbackRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Username: string;

		/** Required */
		EventId: string;

		/** Required */
		FeedbackToken: string;

		/** Required */
		FeedbackValue: FeedbackValueType;
	}
	export interface UpdateAuthEventFeedbackRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		FeedbackToken: FormControl<string | null | undefined>,

		/** Required */
		FeedbackValue: FormControl<FeedbackValueType | null | undefined>,
	}
	export function CreateUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<UpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeedbackToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeedbackValue: new FormControl<FeedbackValueType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request to update the device status. */
	export interface UpdateDeviceStatusResponse {
	}

	/** The response to the request to update the device status. */
	export interface UpdateDeviceStatusResponseFormProperties {
	}
	export function CreateUpdateDeviceStatusResponseFormGroup() {
		return new FormGroup<UpdateDeviceStatusResponseFormProperties>({
		});

	}


	/** Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequest {

		/** Required */
		AccessToken: string;

		/** Required */
		DeviceKey: string;
		DeviceRememberedStatus?: DeviceRememberedStatusType;
	}

	/** Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/** Required */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<DeviceRememberedStatusType | null | undefined>,
	}
	export function CreateUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<UpdateDeviceStatusRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceRememberedStatus: new FormControl<DeviceRememberedStatusType | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupResponse {
		Group?: GroupType;
	}
	export interface UpdateGroupResponseFormProperties {
	}
	export function CreateUpdateGroupResponseFormGroup() {
		return new FormGroup<UpdateGroupResponseFormProperties>({
		});

	}

	export interface UpdateGroupRequest {

		/** Required */
		GroupName: string;

		/** Required */
		UserPoolId: string;
		Description?: string;
		RoleArn?: string;
		Precedence?: number | null;
	}
	export interface UpdateGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Precedence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderResponse {

		/** Required */
		IdentityProvider: IdentityProviderType;
	}
	export interface UpdateIdentityProviderResponseFormProperties {
	}
	export function CreateUpdateIdentityProviderResponseFormGroup() {
		return new FormGroup<UpdateIdentityProviderResponseFormProperties>({
		});

	}

	export interface UpdateIdentityProviderRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ProviderName: string;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}
	export interface UpdateIdentityProviderRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourceServerResponse {

		/** Required */
		ResourceServer: ResourceServerType;
	}
	export interface UpdateResourceServerResponseFormProperties {
	}
	export function CreateUpdateResourceServerResponseFormGroup() {
		return new FormGroup<UpdateResourceServerResponseFormProperties>({
		});

	}

	export interface UpdateResourceServerRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		Identifier: string;

		/** Required */
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface UpdateResourceServerRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceServerRequestFormGroup() {
		return new FormGroup<UpdateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server for the request to update user attributes. */
	export interface UpdateUserAttributesResponse {
		CodeDeliveryDetailsList?: Array<CodeDeliveryDetailsType>;
	}

	/** Represents the response from the server for the request to update user attributes. */
	export interface UpdateUserAttributesResponseFormProperties {
	}
	export function CreateUpdateUserAttributesResponseFormGroup() {
		return new FormGroup<UpdateUserAttributesResponseFormProperties>({
		});

	}


	/** Represents the request to update user attributes. */
	export interface UpdateUserAttributesRequest {

		/** Required */
		UserAttributes: Array<AttributeType>;

		/** Required */
		AccessToken: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to update user attributes. */
	export interface UpdateUserAttributesRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserAttributesRequestFormGroup() {
		return new FormGroup<UpdateUserAttributesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the response from the server when you make a request to update the user pool. */
	export interface UpdateUserPoolResponse {
	}

	/** Represents the response from the server when you make a request to update the user pool. */
	export interface UpdateUserPoolResponseFormProperties {
	}
	export function CreateUpdateUserPoolResponseFormGroup() {
		return new FormGroup<UpdateUserPoolResponseFormProperties>({
		});

	}


	/** Represents the request to update the user pool. */
	export interface UpdateUserPoolRequest {

		/** Required */
		UserPoolId: string;
		Policies?: UserPoolPolicyType;
		DeletionProtection?: DeletionProtectionType;
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		SmsVerificationMessage?: string;
		EmailVerificationMessage?: string;
		EmailVerificationSubject?: string;
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string;
		UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
		MfaConfiguration?: UserPoolMfaType;
		DeviceConfiguration?: DeviceConfigurationType;
		EmailConfiguration?: EmailConfigurationType;
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		AdminCreateUserConfig?: AdminCreateUserConfigType;
		UserPoolAddOns?: UserPoolAddOnsType;
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	/** Represents the request to update the user pool. */
	export interface UpdateUserPoolRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
		DeletionProtection: FormControl<DeletionProtectionType | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolMfaType | null | undefined>,
	}
	export function CreateUpdateUserPoolRequestFormGroup() {
		return new FormGroup<UpdateUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeletionProtection: new FormControl<DeletionProtectionType | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolMfaType | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to update the user pool client. */
	export interface UpdateUserPoolClientResponse {
		UserPoolClient?: UserPoolClientType;
	}

	/** Represents the response from the server to the request to update the user pool client. */
	export interface UpdateUserPoolClientResponseFormProperties {
	}
	export function CreateUpdateUserPoolClientResponseFormGroup() {
		return new FormGroup<UpdateUserPoolClientResponseFormProperties>({
		});

	}


	/** Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequest {

		/** Required */
		UserPoolId: string;

		/** Required */
		ClientId: string;
		ClientName?: string;
		RefreshTokenValidity?: number | null;
		AccessTokenValidity?: number | null;
		IdTokenValidity?: number | null;
		TokenValidityUnits?: TokenValidityUnitsType;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
		EnableTokenRevocation?: boolean | null;
		EnablePropagateAdditionalUserContextData?: boolean | null;
		AuthSessionValidity?: number | null;
	}

	/** Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequestFormProperties {

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		ClientName: FormControl<string | null | undefined>,
		RefreshTokenValidity: FormControl<number | null | undefined>,
		AccessTokenValidity: FormControl<number | null | undefined>,
		IdTokenValidity: FormControl<number | null | undefined>,
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<PreventUserExistenceErrorTypes | null | undefined>,
		EnableTokenRevocation: FormControl<boolean | null | undefined>,
		EnablePropagateAdditionalUserContextData: FormControl<boolean | null | undefined>,
		AuthSessionValidity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateUserPoolClientRequestFormGroup() {
		return new FormGroup<UpdateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientName: new FormControl<string | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			AccessTokenValidity: new FormControl<number | null | undefined>(undefined),
			IdTokenValidity: new FormControl<number | null | undefined>(undefined),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<PreventUserExistenceErrorTypes | null | undefined>(undefined),
			EnableTokenRevocation: new FormControl<boolean | null | undefined>(undefined),
			EnablePropagateAdditionalUserContextData: new FormControl<boolean | null | undefined>(undefined),
			AuthSessionValidity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponse {
		CloudFrontDomain?: string;
	}

	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponseFormProperties {
		CloudFrontDomain: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPoolDomainResponseFormGroup() {
		return new FormGroup<UpdateUserPoolDomainResponseFormProperties>({
			CloudFrontDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequest {

		/** Required */
		Domain: string;

		/** Required */
		UserPoolId: string;

		/** Required */
		CustomDomainConfig: CustomDomainConfigType;
	}

	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequestFormProperties {

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPoolDomainRequestFormGroup() {
		return new FormGroup<UpdateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifySoftwareTokenResponse {
		Status?: VerifySoftwareTokenResponseType;
		Session?: string;
	}
	export interface VerifySoftwareTokenResponseFormProperties {
		Status: FormControl<VerifySoftwareTokenResponseType | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenResponseFormGroup() {
		return new FormGroup<VerifySoftwareTokenResponseFormProperties>({
			Status: new FormControl<VerifySoftwareTokenResponseType | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerifySoftwareTokenResponseType { SUCCESS = 0, ERROR = 1 }

	export interface VerifySoftwareTokenRequest {
		AccessToken?: string;
		Session?: string;

		/** Required */
		UserCode: string;
		FriendlyDeviceName?: string;
	}
	export interface VerifySoftwareTokenRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		Session: FormControl<string | null | undefined>,

		/** Required */
		UserCode: FormControl<string | null | undefined>,
		FriendlyDeviceName: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenRequestFormGroup() {
		return new FormGroup<VerifySoftwareTokenRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
			UserCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FriendlyDeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableSoftwareTokenMFAException {
	}
	export interface EnableSoftwareTokenMFAExceptionFormProperties {
	}
	export function CreateEnableSoftwareTokenMFAExceptionFormGroup() {
		return new FormGroup<EnableSoftwareTokenMFAExceptionFormProperties>({
		});

	}


	/** A container representing the response from the server from the request to verify user attributes. */
	export interface VerifyUserAttributeResponse {
	}

	/** A container representing the response from the server from the request to verify user attributes. */
	export interface VerifyUserAttributeResponseFormProperties {
	}
	export function CreateVerifyUserAttributeResponseFormGroup() {
		return new FormGroup<VerifyUserAttributeResponseFormProperties>({
		});

	}


	/** Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequest {

		/** Required */
		AccessToken: string;

		/** Required */
		AttributeName: string;

		/** Required */
		Code: string;
	}

	/** Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		Code: FormControl<string | null | undefined>,
	}
	export function CreateVerifyUserAttributeRequestFormGroup() {
		return new FormGroup<VerifyUserAttributeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomEmailSenderLambdaVersionType { V1_0 = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds additional user attributes to the user pool schema.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes
		 * @return {AddCustomAttributesResponse} Success
		 */
		AddCustomAttributes(requestBody: AddCustomAttributesRequest): Observable<AddCustomAttributesResponse> {
			return this.http.post<AddCustomAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified user to the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup
		 * @return {void} Success
		 */
		AdminAddUserToGroup(requestBody: AdminAddUserToGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp
		 * @return {AdminConfirmSignUpResponse} Success
		 */
		AdminConfirmSignUp(requestBody: AdminConfirmSignUpRequest): Observable<AdminConfirmSignUpResponse> {
			return this.http.post<AdminConfirmSignUpResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser
		 * @return {AdminCreateUserResponse} Success
		 */
		AdminCreateUser(requestBody: AdminCreateUserRequest): Observable<AdminCreateUserResponse> {
			return this.http.post<AdminCreateUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser
		 * @return {void} Success
		 */
		AdminDeleteUser(requestBody: AdminDeleteUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes
		 * @return {AdminDeleteUserAttributesResponse} Success
		 */
		AdminDeleteUserAttributes(requestBody: AdminDeleteUserAttributesRequest): Observable<AdminDeleteUserAttributesResponse> {
			return this.http.post<AdminDeleteUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser
		 * @return {AdminDisableProviderForUserResponse} Success
		 */
		AdminDisableProviderForUser(requestBody: AdminDisableProviderForUserRequest): Observable<AdminDisableProviderForUserResponse> {
			return this.http.post<AdminDisableProviderForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser
		 * @return {AdminDisableUserResponse} Success
		 */
		AdminDisableUser(requestBody: AdminDisableUserRequest): Observable<AdminDisableUserResponse> {
			return this.http.post<AdminDisableUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the specified user as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser
		 * @return {AdminEnableUserResponse} Success
		 */
		AdminEnableUser(requestBody: AdminEnableUserRequest): Observable<AdminEnableUserResponse> {
			return this.http.post<AdminEnableUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Forgets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice
		 * @return {void} Success
		 */
		AdminForgetDevice(requestBody: AdminForgetDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the device, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice
		 * @return {AdminGetDeviceResponse} Success
		 */
		AdminGetDevice(requestBody: AdminGetDeviceRequest): Observable<AdminGetDeviceResponse> {
			return this.http.post<AdminGetDeviceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser
		 * @return {AdminGetUserResponse} Success
		 */
		AdminGetUser(requestBody: AdminGetUserRequest): Observable<AdminGetUserResponse> {
			return this.http.post<AdminGetUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth
		 * @return {AdminInitiateAuthResponse} Success
		 */
		AdminInitiateAuth(requestBody: AdminInitiateAuthRequest): Observable<AdminInitiateAuthResponse> {
			return this.http.post<AdminInitiateAuthResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser
		 * @return {AdminLinkProviderForUserResponse} Success
		 */
		AdminLinkProviderForUser(requestBody: AdminLinkProviderForUserRequest): Observable<AdminLinkProviderForUserResponse> {
			return this.http.post<AdminLinkProviderForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists devices, as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices
		 * @return {AdminListDevicesResponse} Success
		 */
		AdminListDevices(requestBody: AdminListDevicesRequest): Observable<AdminListDevicesResponse> {
			return this.http.post<AdminListDevicesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the groups that the user belongs to.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListGroupsForUserResponse} Success
		 */
		AdminListGroupsForUser(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: AdminListGroupsForUserRequest): Observable<AdminListGroupsForUserResponse> {
			return this.http.post<AdminListGroupsForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A history of user activity and any risks detected as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListUserAuthEventsResponse} Success
		 */
		AdminListUserAuthEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: AdminListUserAuthEventsRequest): Observable<AdminListUserAuthEventsResponse> {
			return this.http.post<AdminListUserAuthEventsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified user from the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup
		 * @return {void} Success
		 */
		AdminRemoveUserFromGroup(requestBody: AdminRemoveUserFromGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Deactivates a user's password, requiring them to change it. If a user tries to sign in after the API is called, Amazon Cognito responds with a <code>PasswordResetRequiredException</code> error. Your app must then perform the actions that reset your user's password: the forgot-password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword
		 * @return {AdminResetUserPasswordResponse} Success
		 */
		AdminResetUserPassword(requestBody: AdminResetUserPasswordRequest): Observable<AdminResetUserPasswordResponse> {
			return this.http.post<AdminResetUserPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge
		 * @return {AdminRespondToAuthChallengeResponse} Success
		 */
		AdminRespondToAuthChallenge(requestBody: AdminRespondToAuthChallengeRequest): Observable<AdminRespondToAuthChallengeResponse> {
			return this.http.post<AdminRespondToAuthChallengeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference
		 * @return {AdminSetUserMFAPreferenceResponse} Success
		 */
		AdminSetUserMFAPreference(requestBody: AdminSetUserMFAPreferenceRequest): Observable<AdminSetUserMFAPreferenceResponse> {
			return this.http.post<AdminSetUserMFAPreferenceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p> <p> <code>AdminSetUserPassword</code> can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from <code>EXTERNAL_PROVIDER</code> to <code>CONFIRMED</code>. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like <code>ChangePassword</code> and <code>UpdateUserAttributes</code>. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">Linking federated users to an existing user profile</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword
		 * @return {AdminSetUserPasswordResponse} Success
		 */
		AdminSetUserPassword(requestBody: AdminSetUserPasswordRequest): Observable<AdminSetUserPasswordResponse> {
			return this.http.post<AdminSetUserPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings
		 * @return {AdminSetUserSettingsResponse} Success
		 */
		AdminSetUserSettings(requestBody: AdminSetUserSettingsRequest): Observable<AdminSetUserSettingsResponse> {
			return this.http.post<AdminSetUserSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback
		 * @return {AdminUpdateAuthEventFeedbackResponse} Success
		 */
		AdminUpdateAuthEventFeedback(requestBody: AdminUpdateAuthEventFeedbackRequest): Observable<AdminUpdateAuthEventFeedbackResponse> {
			return this.http.post<AdminUpdateAuthEventFeedbackResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the device status as an administrator.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus
		 * @return {AdminUpdateDeviceStatusResponse} Success
		 */
		AdminUpdateDeviceStatus(requestBody: AdminUpdateDeviceStatusRequest): Observable<AdminUpdateDeviceStatusResponse> {
			return this.http.post<AdminUpdateDeviceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes
		 * @return {AdminUpdateUserAttributesResponse} Success
		 */
		AdminUpdateUserAttributes(requestBody: AdminUpdateUserAttributesRequest): Observable<AdminUpdateUserAttributesResponse> {
			return this.http.post<AdminUpdateUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Signs out a user from all devices. <code>AdminUserGlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn't aware that a user's access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut
		 * @return {AdminUserGlobalSignOutResponse} Success
		 */
		AdminUserGlobalSignOut(requestBody: AdminUserGlobalSignOutRequest): Observable<AdminUserGlobalSignOutResponse> {
			return this.http.post<AdminUserGlobalSignOutResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken
		 * @return {AssociateSoftwareTokenResponse} Success
		 */
		AssociateSoftwareToken(requestBody: AssociateSoftwareTokenRequest): Observable<AssociateSoftwareTokenResponse> {
			return this.http.post<AssociateSoftwareTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Changes the password for a specified user in a user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword
		 * @return {ChangePasswordResponse} Success
		 */
		ChangePassword(requestBody: ChangePasswordRequest): Observable<ChangePasswordResponse> {
			return this.http.post<ChangePasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Confirms tracking of the device. This API call is the call that begins device tracking.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice
		 * @return {ConfirmDeviceResponse} Success
		 */
		ConfirmDevice(requestBody: ConfirmDeviceRequest): Observable<ConfirmDeviceResponse> {
			return this.http.post<ConfirmDeviceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword
		 * @return {ConfirmForgotPasswordResponse} Success
		 */
		ConfirmForgotPassword(requestBody: ConfirmForgotPasswordRequest): Observable<ConfirmForgotPasswordResponse> {
			return this.http.post<ConfirmForgotPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Confirms registration of a new user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp
		 * @return {ConfirmSignUpResponse} Success
		 */
		ConfirmSignUp(requestBody: ConfirmSignUpRequest): Observable<ConfirmSignUpResponse> {
			return this.http.post<ConfirmSignUpResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new group in the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an IdP for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider
		 * @return {CreateIdentityProviderResponse} Success
		 */
		CreateIdentityProvider(requestBody: CreateIdentityProviderRequest): Observable<CreateIdentityProviderResponse> {
			return this.http.post<CreateIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new OAuth2.0 resource server and defines custom scopes within it.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer
		 * @return {CreateResourceServerResponse} Success
		 */
		CreateResourceServer(requestBody: CreateResourceServerRequest): Observable<CreateResourceServerResponse> {
			return this.http.post<CreateResourceServerResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a user import job.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob
		 * @return {CreateUserImportJobResponse} Success
		 */
		CreateUserImportJob(requestBody: CreateUserImportJobRequest): Observable<CreateUserImportJobResponse> {
			return this.http.post<CreateUserImportJobResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool
		 * @return {CreateUserPoolResponse} Success
		 */
		CreateUserPool(requestBody: CreateUserPoolRequest): Observable<CreateUserPoolResponse> {
			return this.http.post<CreateUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient
		 * @return {CreateUserPoolClientResponse} Success
		 */
		CreateUserPoolClient(requestBody: CreateUserPoolClientRequest): Observable<CreateUserPoolClientResponse> {
			return this.http.post<CreateUserPoolClientResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new domain for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain
		 * @return {CreateUserPoolDomainResponse} Success
		 */
		CreateUserPoolDomain(requestBody: CreateUserPoolDomainRequest): Observable<CreateUserPoolDomainResponse> {
			return this.http.post<CreateUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup
		 * @return {void} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an IdP for a user pool.
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
		 * <p>Allows a user to delete their own user profile.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser
		 * @return {void} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the attributes for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
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
		 * Gets information about a specific IdP.
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
		 * <p>Returns the configuration information and metadata of the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool
		 * @return {DescribeUserPoolResponse} Success
		 */
		DescribeUserPool(requestBody: DescribeUserPoolRequest): Observable<DescribeUserPoolResponse> {
			return this.http.post<DescribeUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Client method for returning the configuration information and metadata of the specified user pool app client.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
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
		 * <p>Forgets the specified device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice
		 * @return {void} Success
		 */
		ForgetDevice(requestBody: ForgetDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <p>If neither a verified phone number nor a verified email exists, this API returns <code>InvalidParameterException</code>. If your app client has a client secret and you don't provide a <code>SECRET_HASH</code> parameter, this API returns <code>NotAuthorizedException</code>.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword
		 * @return {ForgotPasswordResponse} Success
		 */
		ForgotPassword(requestBody: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
			return this.http.post<ForgotPasswordResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader
		 * @return {GetCSVHeaderResponse} Success
		 */
		GetCSVHeader(requestBody: GetCSVHeaderRequest): Observable<GetCSVHeaderResponse> {
			return this.http.post<GetCSVHeaderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the device.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
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
		 * Gets the specified IdP.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier
		 * @return {GetIdentityProviderByIdentifierResponse} Success
		 */
		GetIdentityProviderByIdentifier(requestBody: GetIdentityProviderByIdentifierRequest): Observable<GetIdentityProviderByIdentifierResponse> {
			return this.http.post<GetIdentityProviderByIdentifierResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the detailed activity logging configuration for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration
		 * @return {GetLogDeliveryConfigurationResponse} Success
		 */
		GetLogDeliveryConfiguration(requestBody: GetLogDeliveryConfigurationRequest): Observable<GetLogDeliveryConfigurationResponse> {
			return this.http.post<GetLogDeliveryConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate
		 * @return {GetSigningCertificateResponse} Success
		 */
		GetSigningCertificate(requestBody: GetSigningCertificateRequest): Observable<GetSigningCertificateResponse> {
			return this.http.post<GetSigningCertificateResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization
		 * @return {GetUICustomizationResponse} Success
		 */
		GetUICustomization(requestBody: GetUICustomizationRequest): Observable<GetUICustomizationResponse> {
			return this.http.post<GetUICustomizationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the user attributes and metadata for a user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GetUser
		 * @return {GetUserResponse} Success
		 */
		GetUser(requestBody: GetUserRequest): Observable<GetUserResponse> {
			return this.http.post<GetUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
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
		 * <p>Signs out a user from all devices. <code>GlobalSignOut</code> invalidates all identity, access and refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.</p> <p>Your app isn't aware that a user's access token is revoked unless it attempts to authorize a user pools API request with an access token that contains the scope <code>aws.cognito.signin.user.admin</code>. Your app might otherwise accept access tokens until they expire.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut
		 * @return {GlobalSignOutResponse} Success
		 */
		GlobalSignOut(requestBody: GlobalSignOutRequest): Observable<GlobalSignOutResponse> {
			return this.http.post<GlobalSignOutResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth
		 * @return {InitiateAuthResponse} Success
		 */
		InitiateAuth(requestBody: InitiateAuthRequest): Observable<InitiateAuthResponse> {
			return this.http.post<InitiateAuthResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the sign-in devices that Amazon Cognito has registered to the current user.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(requestBody: ListDevicesRequest): Observable<ListDevicesResponse> {
			return this.http.post<ListDevicesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the groups associated with a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists information about all IdPs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIdentityProvidersRequest): Observable<ListIdentityProvidersResponse> {
			return this.http.post<ListIdentityProvidersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the resource servers for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceServersResponse} Success
		 */
		ListResourceServers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceServersRequest): Observable<ListResourceServersResponse> {
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
		 * <p>Lists user import jobs for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs
		 * @return {ListUserImportJobsResponse} Success
		 */
		ListUserImportJobs(requestBody: ListUserImportJobsRequest): Observable<ListUserImportJobsResponse> {
			return this.http.post<ListUserImportJobsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the clients that have been created for the specified user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolClientsResponse} Success
		 */
		ListUserPoolClients(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserPoolClientsRequest): Observable<ListUserPoolClientsResponse> {
			return this.http.post<ListUserPoolClientsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the user pools associated with an Amazon Web Services account.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolsResponse} Success
		 */
		ListUserPools(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserPoolsRequest): Observable<ListUserPoolsResponse> {
			return this.http.post<ListUserPoolsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists users and their basic details in a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers
		 * @param {string} Limit Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(Limit: string | null | undefined, PaginationToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the users in the specified group.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersInGroupResponse} Success
		 */
		ListUsersInGroup(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersInGroupRequest): Observable<ListUsersInGroupResponse> {
			return this.http.post<ListUsersInGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode
		 * @return {ResendConfirmationCodeResponse} Success
		 */
		ResendConfirmationCode(requestBody: ResendConfirmationCodeRequest): Observable<ResendConfirmationCodeResponse> {
			return this.http.post<ResendConfirmationCodeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Responds to the authentication challenge.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge
		 * @return {RespondToAuthChallengeResponse} Success
		 */
		RespondToAuthChallenge(requestBody: RespondToAuthChallengeRequest): Observable<RespondToAuthChallengeResponse> {
			return this.http.post<RespondToAuthChallengeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken
		 * @return {RevokeTokenResponse} Success
		 */
		RevokeToken(requestBody: RevokeTokenRequest): Observable<RevokeTokenResponse> {
			return this.http.post<RevokeTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets up or modifies the detailed activity logging configuration of a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration
		 * @return {SetLogDeliveryConfigurationResponse} Success
		 */
		SetLogDeliveryConfiguration(requestBody: SetLogDeliveryConfigurationRequest): Observable<SetLogDeliveryConfigurationResponse> {
			return this.http.post<SetLogDeliveryConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration
		 * @return {SetRiskConfigurationResponse} Success
		 */
		SetRiskConfiguration(requestBody: SetRiskConfigurationRequest): Observable<SetRiskConfigurationResponse> {
			return this.http.post<SetRiskConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization
		 * @return {SetUICustomizationResponse} Success
		 */
		SetUICustomization(requestBody: SetUICustomizationRequest): Observable<SetUICustomizationResponse> {
			return this.http.post<SetUICustomizationResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference
		 * @return {SetUserMFAPreferenceResponse} Success
		 */
		SetUserMFAPreference(requestBody: SetUserMFAPreferenceRequest): Observable<SetUserMFAPreferenceResponse> {
			return this.http.post<SetUserMFAPreferenceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig
		 * @return {SetUserPoolMfaConfigResponse} Success
		 */
		SetUserPoolMfaConfig(requestBody: SetUserPoolMfaConfigRequest): Observable<SetUserPoolMfaConfigResponse> {
			return this.http.post<SetUserPoolMfaConfigResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings
		 * @return {SetUserSettingsResponse} Success
		 */
		SetUserSettings(requestBody: SetUserSettingsRequest): Observable<SetUserSettingsResponse> {
			return this.http.post<SetUserSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
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
		 * <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback
		 * @return {UpdateAuthEventFeedbackResponse} Success
		 */
		UpdateAuthEventFeedback(requestBody: UpdateAuthEventFeedbackRequest): Observable<UpdateAuthEventFeedbackResponse> {
			return this.http.post<UpdateAuthEventFeedbackResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the device status.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus
		 * @return {UpdateDeviceStatusResponse} Success
		 */
		UpdateDeviceStatus(requestBody: UpdateDeviceStatusRequest): Observable<UpdateDeviceStatusResponse> {
			return this.http.post<UpdateDeviceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified group with the specified attributes.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(requestBody: UpdateGroupRequest): Observable<UpdateGroupResponse> {
			return this.http.post<UpdateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates IdP information for a user pool.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider
		 * @return {UpdateIdentityProviderResponse} Success
		 */
		UpdateIdentityProvider(requestBody: UpdateIdentityProviderRequest): Observable<UpdateIdentityProviderResponse> {
			return this.http.post<UpdateIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer
		 * @return {UpdateResourceServerResponse} Success
		 */
		UpdateResourceServer(requestBody: UpdateResourceServerRequest): Observable<UpdateResourceServerResponse> {
			return this.http.post<UpdateResourceServerResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes
		 * @return {UpdateUserAttributesResponse} Success
		 */
		UpdateUserAttributes(requestBody: UpdateUserAttributesRequest): Observable<UpdateUserAttributesResponse> {
			return this.http.post<UpdateUserAttributesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool
		 * @return {UpdateUserPoolResponse} Success
		 */
		UpdateUserPool(requestBody: UpdateUserPoolRequest): Observable<UpdateUserPoolResponse> {
			return this.http.post<UpdateUserPoolResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient
		 * @return {UpdateUserPoolClientResponse} Success
		 */
		UpdateUserPoolClient(requestBody: UpdateUserPoolClientRequest): Observable<UpdateUserPoolClientResponse> {
			return this.http.post<UpdateUserPoolClientResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p> <note> <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.</p> <p class="title"> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a> </p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain
		 * @return {UpdateUserPoolDomainResponse} Success
		 */
		UpdateUserPoolDomain(requestBody: UpdateUserPoolDomainRequest): Observable<UpdateUserPoolDomainResponse> {
			return this.http.post<UpdateUserPoolDomainResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.</p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken
		 * @return {VerifySoftwareTokenResponse} Success
		 */
		VerifySoftwareToken(requestBody: VerifySoftwareTokenRequest): Observable<VerifySoftwareTokenResponse> {
			return this.http.post<VerifySoftwareTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p> <note> <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p> </note>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute
		 * @return {VerifyUserAttributeResponse} Success
		 */
		VerifyUserAttribute(requestBody: VerifyUserAttributeRequest): Observable<VerifyUserAttributeResponse> {
			return this.http.post<VerifyUserAttributeResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddCustomAttributesX_Amz_Target { 'AWSCognitoIdentityProviderService.AddCustomAttributes' = 0 }

	export enum AdminAddUserToGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminAddUserToGroup' = 0 }

	export enum AdminConfirmSignUpX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminConfirmSignUp' = 0 }

	export enum AdminCreateUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminCreateUser' = 0 }

	export enum AdminDeleteUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminDeleteUser' = 0 }

	export enum AdminDeleteUserAttributesX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminDeleteUserAttributes' = 0 }

	export enum AdminDisableProviderForUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminDisableProviderForUser' = 0 }

	export enum AdminDisableUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminDisableUser' = 0 }

	export enum AdminEnableUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminEnableUser' = 0 }

	export enum AdminForgetDeviceX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminForgetDevice' = 0 }

	export enum AdminGetDeviceX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminGetDevice' = 0 }

	export enum AdminGetUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminGetUser' = 0 }

	export enum AdminInitiateAuthX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminInitiateAuth' = 0 }

	export enum AdminLinkProviderForUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminLinkProviderForUser' = 0 }

	export enum AdminListDevicesX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminListDevices' = 0 }

	export enum AdminListGroupsForUserX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminListGroupsForUser' = 0 }

	export enum AdminListUserAuthEventsX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminListUserAuthEvents' = 0 }

	export enum AdminRemoveUserFromGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup' = 0 }

	export enum AdminResetUserPasswordX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminResetUserPassword' = 0 }

	export enum AdminRespondToAuthChallengeX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge' = 0 }

	export enum AdminSetUserMFAPreferenceX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminSetUserMFAPreference' = 0 }

	export enum AdminSetUserPasswordX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminSetUserPassword' = 0 }

	export enum AdminSetUserSettingsX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminSetUserSettings' = 0 }

	export enum AdminUpdateAuthEventFeedbackX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback' = 0 }

	export enum AdminUpdateDeviceStatusX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus' = 0 }

	export enum AdminUpdateUserAttributesX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminUpdateUserAttributes' = 0 }

	export enum AdminUserGlobalSignOutX_Amz_Target { 'AWSCognitoIdentityProviderService.AdminUserGlobalSignOut' = 0 }

	export enum AssociateSoftwareTokenX_Amz_Target { 'AWSCognitoIdentityProviderService.AssociateSoftwareToken' = 0 }

	export enum ChangePasswordX_Amz_Target { 'AWSCognitoIdentityProviderService.ChangePassword' = 0 }

	export enum ConfirmDeviceX_Amz_Target { 'AWSCognitoIdentityProviderService.ConfirmDevice' = 0 }

	export enum ConfirmForgotPasswordX_Amz_Target { 'AWSCognitoIdentityProviderService.ConfirmForgotPassword' = 0 }

	export enum ConfirmSignUpX_Amz_Target { 'AWSCognitoIdentityProviderService.ConfirmSignUp' = 0 }

	export enum CreateGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateGroup' = 0 }

	export enum CreateIdentityProviderX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateIdentityProvider' = 0 }

	export enum CreateResourceServerX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateResourceServer' = 0 }

	export enum CreateUserImportJobX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateUserImportJob' = 0 }

	export enum CreateUserPoolX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateUserPool' = 0 }

	export enum CreateUserPoolClientX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateUserPoolClient' = 0 }

	export enum CreateUserPoolDomainX_Amz_Target { 'AWSCognitoIdentityProviderService.CreateUserPoolDomain' = 0 }

	export enum DeleteGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteGroup' = 0 }

	export enum DeleteIdentityProviderX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteIdentityProvider' = 0 }

	export enum DeleteResourceServerX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteResourceServer' = 0 }

	export enum DeleteUserX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteUser' = 0 }

	export enum DeleteUserAttributesX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteUserAttributes' = 0 }

	export enum DeleteUserPoolX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteUserPool' = 0 }

	export enum DeleteUserPoolClientX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteUserPoolClient' = 0 }

	export enum DeleteUserPoolDomainX_Amz_Target { 'AWSCognitoIdentityProviderService.DeleteUserPoolDomain' = 0 }

	export enum DescribeIdentityProviderX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeIdentityProvider' = 0 }

	export enum DescribeResourceServerX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeResourceServer' = 0 }

	export enum DescribeRiskConfigurationX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeRiskConfiguration' = 0 }

	export enum DescribeUserImportJobX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeUserImportJob' = 0 }

	export enum DescribeUserPoolX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeUserPool' = 0 }

	export enum DescribeUserPoolClientX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeUserPoolClient' = 0 }

	export enum DescribeUserPoolDomainX_Amz_Target { 'AWSCognitoIdentityProviderService.DescribeUserPoolDomain' = 0 }

	export enum ForgetDeviceX_Amz_Target { 'AWSCognitoIdentityProviderService.ForgetDevice' = 0 }

	export enum ForgotPasswordX_Amz_Target { 'AWSCognitoIdentityProviderService.ForgotPassword' = 0 }

	export enum GetCSVHeaderX_Amz_Target { 'AWSCognitoIdentityProviderService.GetCSVHeader' = 0 }

	export enum GetDeviceX_Amz_Target { 'AWSCognitoIdentityProviderService.GetDevice' = 0 }

	export enum GetGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.GetGroup' = 0 }

	export enum GetIdentityProviderByIdentifierX_Amz_Target { 'AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier' = 0 }

	export enum GetLogDeliveryConfigurationX_Amz_Target { 'AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration' = 0 }

	export enum GetSigningCertificateX_Amz_Target { 'AWSCognitoIdentityProviderService.GetSigningCertificate' = 0 }

	export enum GetUICustomizationX_Amz_Target { 'AWSCognitoIdentityProviderService.GetUICustomization' = 0 }

	export enum GetUserX_Amz_Target { 'AWSCognitoIdentityProviderService.GetUser' = 0 }

	export enum GetUserAttributeVerificationCodeX_Amz_Target { 'AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode' = 0 }

	export enum GetUserPoolMfaConfigX_Amz_Target { 'AWSCognitoIdentityProviderService.GetUserPoolMfaConfig' = 0 }

	export enum GlobalSignOutX_Amz_Target { 'AWSCognitoIdentityProviderService.GlobalSignOut' = 0 }

	export enum InitiateAuthX_Amz_Target { 'AWSCognitoIdentityProviderService.InitiateAuth' = 0 }

	export enum ListDevicesX_Amz_Target { 'AWSCognitoIdentityProviderService.ListDevices' = 0 }

	export enum ListGroupsX_Amz_Target { 'AWSCognitoIdentityProviderService.ListGroups' = 0 }

	export enum ListIdentityProvidersX_Amz_Target { 'AWSCognitoIdentityProviderService.ListIdentityProviders' = 0 }

	export enum ListResourceServersX_Amz_Target { 'AWSCognitoIdentityProviderService.ListResourceServers' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSCognitoIdentityProviderService.ListTagsForResource' = 0 }

	export enum ListUserImportJobsX_Amz_Target { 'AWSCognitoIdentityProviderService.ListUserImportJobs' = 0 }

	export enum ListUserPoolClientsX_Amz_Target { 'AWSCognitoIdentityProviderService.ListUserPoolClients' = 0 }

	export enum ListUserPoolsX_Amz_Target { 'AWSCognitoIdentityProviderService.ListUserPools' = 0 }

	export enum ListUsersX_Amz_Target { 'AWSCognitoIdentityProviderService.ListUsers' = 0 }

	export enum ListUsersInGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.ListUsersInGroup' = 0 }

	export enum ResendConfirmationCodeX_Amz_Target { 'AWSCognitoIdentityProviderService.ResendConfirmationCode' = 0 }

	export enum RespondToAuthChallengeX_Amz_Target { 'AWSCognitoIdentityProviderService.RespondToAuthChallenge' = 0 }

	export enum RevokeTokenX_Amz_Target { 'AWSCognitoIdentityProviderService.RevokeToken' = 0 }

	export enum SetLogDeliveryConfigurationX_Amz_Target { 'AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration' = 0 }

	export enum SetRiskConfigurationX_Amz_Target { 'AWSCognitoIdentityProviderService.SetRiskConfiguration' = 0 }

	export enum SetUICustomizationX_Amz_Target { 'AWSCognitoIdentityProviderService.SetUICustomization' = 0 }

	export enum SetUserMFAPreferenceX_Amz_Target { 'AWSCognitoIdentityProviderService.SetUserMFAPreference' = 0 }

	export enum SetUserPoolMfaConfigX_Amz_Target { 'AWSCognitoIdentityProviderService.SetUserPoolMfaConfig' = 0 }

	export enum SetUserSettingsX_Amz_Target { 'AWSCognitoIdentityProviderService.SetUserSettings' = 0 }

	export enum SignUpX_Amz_Target { 'AWSCognitoIdentityProviderService.SignUp' = 0 }

	export enum StartUserImportJobX_Amz_Target { 'AWSCognitoIdentityProviderService.StartUserImportJob' = 0 }

	export enum StopUserImportJobX_Amz_Target { 'AWSCognitoIdentityProviderService.StopUserImportJob' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSCognitoIdentityProviderService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSCognitoIdentityProviderService.UntagResource' = 0 }

	export enum UpdateAuthEventFeedbackX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateAuthEventFeedback' = 0 }

	export enum UpdateDeviceStatusX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateDeviceStatus' = 0 }

	export enum UpdateGroupX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateGroup' = 0 }

	export enum UpdateIdentityProviderX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateIdentityProvider' = 0 }

	export enum UpdateResourceServerX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateResourceServer' = 0 }

	export enum UpdateUserAttributesX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateUserAttributes' = 0 }

	export enum UpdateUserPoolX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateUserPool' = 0 }

	export enum UpdateUserPoolClientX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateUserPoolClient' = 0 }

	export enum UpdateUserPoolDomainX_Amz_Target { 'AWSCognitoIdentityProviderService.UpdateUserPoolDomain' = 0 }

	export enum VerifySoftwareTokenX_Amz_Target { 'AWSCognitoIdentityProviderService.VerifySoftwareToken' = 0 }

	export enum VerifyUserAttributeX_Amz_Target { 'AWSCognitoIdentityProviderService.VerifyUserAttribute' = 0 }

}

