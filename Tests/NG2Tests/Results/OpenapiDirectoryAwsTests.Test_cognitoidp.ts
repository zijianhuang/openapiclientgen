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
		UserPoolId: string;
		CustomAttributes: Array<SchemaAttributeType>;
	}

	/** Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAddCustomAttributesRequestFormGroup() {
		return new FormGroup<AddCustomAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the schema attribute. */
	export interface SchemaAttributeType {
		Name?: string | null;
		AttributeDataType?: SchemaAttributeTypeAttributeDataType | null;
		DeveloperOnlyAttribute?: boolean | null;
		Mutable?: boolean | null;
		Required?: boolean | null;

		/** The minimum and maximum value of an attribute that is of the number data type. */
		NumberAttributeConstraints?: NumberAttributeConstraintsType;

		/** The constraints associated with a string attribute. */
		StringAttributeConstraints?: StringAttributeConstraintsType;
	}

	/** Contains information about the schema attribute. */
	export interface SchemaAttributeTypeFormProperties {
		Name: FormControl<string | null | undefined>,
		AttributeDataType: FormControl<SchemaAttributeTypeAttributeDataType | null | undefined>,
		DeveloperOnlyAttribute: FormControl<boolean | null | undefined>,
		Mutable: FormControl<boolean | null | undefined>,
		Required: FormControl<boolean | null | undefined>,
	}
	export function CreateSchemaAttributeTypeFormGroup() {
		return new FormGroup<SchemaAttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AttributeDataType: new FormControl<SchemaAttributeTypeAttributeDataType | null | undefined>(undefined),
			DeveloperOnlyAttribute: new FormControl<boolean | null | undefined>(undefined),
			Mutable: new FormControl<boolean | null | undefined>(undefined),
			Required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SchemaAttributeTypeAttributeDataType { String = 0, Number = 1, DateTime = 2, Boolean = 3 }


	/** The minimum and maximum value of an attribute that is of the number data type. */
	export interface NumberAttributeConstraintsType {
		MinValue?: string | null;
		MaxValue?: string | null;
	}

	/** The minimum and maximum value of an attribute that is of the number data type. */
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
		MinLength?: string | null;
		MaxLength?: string | null;
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
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}
	export interface AdminAddUserToGroupRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminAddUserToGroupRequestFormGroup() {
		return new FormGroup<AdminAddUserToGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
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


	/** Represents the request to confirm user registration. */
	export interface AdminConfirmSignUpRequest {
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to confirm user registration. */
	export interface AdminConfirmSignUpRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminConfirmSignUpRequestFormGroup() {
		return new FormGroup<AdminConfirmSignUpRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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

		/** The user type. */
		User?: UserType;
	}

	/** Represents the response from the server to the request to create the user. */
	export interface AdminCreateUserResponseFormProperties {
	}
	export function CreateAdminCreateUserResponseFormGroup() {
		return new FormGroup<AdminCreateUserResponseFormProperties>({
		});

	}


	/** The user type. */
	export interface UserType {
		Username?: string | null;
		Attributes?: Array<AttributeType>;
		UserCreateDate?: Date | null;
		UserLastModifiedDate?: Date | null;
		Enabled?: boolean | null;
		UserStatus?: UserTypeUserStatus | null;
		MFAOptions?: Array<MFAOptionType>;
	}

	/** The user type. */
	export interface UserTypeFormProperties {
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserTypeUserStatus | null | undefined>,
	}
	export function CreateUserTypeFormGroup() {
		return new FormGroup<UserTypeFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserTypeUserStatus | null | undefined>(undefined),
		});

	}


	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeType {
		Name: string;
		Value?: string | null;
	}

	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeTypeFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeTypeFormGroup() {
		return new FormGroup<AttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserTypeUserStatus { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/** <p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionType {
		DeliveryMedium?: MFAOptionTypeDeliveryMedium | null;
		AttributeName?: string | null;
	}

	/** <p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionTypeFormProperties {
		DeliveryMedium: FormControl<MFAOptionTypeDeliveryMedium | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateMFAOptionTypeFormGroup() {
		return new FormGroup<MFAOptionTypeFormProperties>({
			DeliveryMedium: new FormControl<MFAOptionTypeDeliveryMedium | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MFAOptionTypeDeliveryMedium { SMS = 0, EMAIL = 1 }


	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequest {
		UserPoolId: string;
		Username: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;
		TemporaryPassword?: string | null;
		ForceAliasCreation?: boolean | null;
		MessageAction?: AdminCreateUserRequestMessageAction | null;
		DesiredDeliveryMediums?: Array<DeliveryMediumType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		TemporaryPassword: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
		MessageAction: FormControl<AdminCreateUserRequestMessageAction | null | undefined>,
	}
	export function CreateAdminCreateUserRequestFormGroup() {
		return new FormGroup<AdminCreateUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			TemporaryPassword: new FormControl<string | null | undefined>(undefined),
			ForceAliasCreation: new FormControl<boolean | null | undefined>(undefined),
			MessageAction: new FormControl<AdminCreateUserRequestMessageAction | null | undefined>(undefined),
		});

	}

	export enum AdminCreateUserRequestMessageAction { RESEND = 0, SUPPRESS = 1 }

	export enum DeliveryMediumType { SMS = 0, EMAIL = 1 }

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
		UserPoolId: string;
		Username: string;
	}

	/** Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserRequestFormGroup() {
		return new FormGroup<AdminDeleteUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		UserAttributeNames: Array<string>;
	}

	/** Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserAttributesRequestFormGroup() {
		return new FormGroup<AdminDeleteUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;

		/**
		 * A container for information about an identity provider for a user pool.
		 * Required
		 */
		User: ProviderUserIdentifierType;
	}
	export interface AdminDisableProviderForUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminDisableProviderForUserRequestFormGroup() {
		return new FormGroup<AdminDisableProviderForUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for information about an identity provider for a user pool. */
	export interface ProviderUserIdentifierType {
		ProviderName?: string | null;
		ProviderAttributeName?: string | null;
		ProviderAttributeValue?: string | null;
	}

	/** A container for information about an identity provider for a user pool. */
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


	/** Represents the request to disable any user as an administrator. */
	export interface AdminDisableUserRequest {
		UserPoolId: string;
		Username: string;
	}

	/** Represents the request to disable any user as an administrator. */
	export interface AdminDisableUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDisableUserRequestFormGroup() {
		return new FormGroup<AdminDisableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
	}

	/** Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminEnableUserRequestFormGroup() {
		return new FormGroup<AdminEnableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
	}

	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminForgetDeviceRequestFormGroup() {
		return new FormGroup<AdminForgetDeviceRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * The device type.
		 * Required
		 */
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
		DeviceKey?: string | null;
		DeviceAttributes?: Array<AttributeType>;
		DeviceCreateDate?: Date | null;
		DeviceLastModifiedDate?: Date | null;
		DeviceLastAuthenticatedDate?: Date | null;
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
		DeviceKey: string;
		UserPoolId: string;
		Username: string;
	}

	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequestFormProperties {
		DeviceKey: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetDeviceRequestFormGroup() {
		return new FormGroup<AdminGetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponse {
		Username: string;
		UserAttributes?: Array<AttributeType>;
		UserCreateDate?: Date | null;
		UserLastModifiedDate?: Date | null;
		Enabled?: boolean | null;
		UserStatus?: UserTypeUserStatus | null;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string | null;
		UserMFASettingList?: Array<string>;
	}

	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponseFormProperties {
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserTypeUserStatus | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserResponseFormGroup() {
		return new FormGroup<AdminGetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserTypeUserStatus | null | undefined>(undefined),
			PreferredMfaSetting: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequest {
		UserPoolId: string;
		Username: string;
	}

	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserRequestFormGroup() {
		return new FormGroup<AdminGetUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminInitiateAuthResponseFormGroup() {
		return new FormGroup<AdminInitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdminInitiateAuthResponseChallengeName { SMS_MFA = 0, SOFTWARE_TOKEN_MFA = 1, SELECT_MFA_TYPE = 2, MFA_SETUP = 3, PASSWORD_VERIFIER = 4, CUSTOM_CHALLENGE = 5, DEVICE_SRP_AUTH = 6, DEVICE_PASSWORD_VERIFIER = 7, ADMIN_NO_SRP_AUTH = 8, NEW_PASSWORD_REQUIRED = 9 }

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
		AccessToken?: string | null;
		ExpiresIn?: number | null;
		TokenType?: string | null;
		RefreshToken?: string | null;
		IdToken?: string | null;

		/** The new device metadata type. */
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
		DeviceKey?: string | null;
		DeviceGroupKey?: string | null;
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

	/** Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		AuthFlow: FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>,
	}
	export function CreateAdminInitiateAuthRequestFormGroup() {
		return new FormGroup<AdminInitiateAuthRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			AuthFlow: new FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>(undefined),
		});

	}

	export enum AdminInitiateAuthRequestAuthFlow { USER_SRP_AUTH = 0, REFRESH_TOKEN_AUTH = 1, REFRESH_TOKEN = 2, CUSTOM_AUTH = 3, ADMIN_NO_SRP_AUTH = 4, USER_PASSWORD_AUTH = 5, ADMIN_USER_PASSWORD_AUTH = 6 }

	export interface AuthParametersType {
	}
	export interface AuthParametersTypeFormProperties {
	}
	export function CreateAuthParametersTypeFormGroup() {
		return new FormGroup<AuthParametersTypeFormProperties>({
		});

	}


	/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsMetadataType {
		AnalyticsEndpointId?: string | null;
	}

	/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
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
		IpAddress: string;
		ServerName: string;
		ServerPath: string;
		HttpHeaders: Array<HttpHeader>;
		EncodedData?: string | null;
	}

	/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface ContextDataTypeFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServerPath: FormControl<string | null | undefined>,
		EncodedData: FormControl<string | null | undefined>,
	}
	export function CreateContextDataTypeFormGroup() {
		return new FormGroup<ContextDataTypeFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServerPath: new FormControl<string | null | undefined>(undefined),
			EncodedData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP header. */
	export interface HttpHeader {
		headerName?: string | null;
		headerValue?: string | null;
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
	export interface AdminLinkProviderForUserRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminLinkProviderForUserRequestFormGroup() {
		return new FormGroup<AdminLinkProviderForUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string | null;
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
		UserPoolId: string;
		Username: string;
		Limit?: number | null;
		PaginationToken?: string | null;
	}

	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListDevicesRequestFormGroup() {
		return new FormGroup<AdminListDevicesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminListGroupsForUserResponse {
		Groups?: Array<GroupType>;
		NextToken?: string | null;
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
		GroupName?: string | null;
		UserPoolId?: string | null;
		Description?: string | null;
		RoleArn?: string | null;
		Precedence?: number | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
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
		Username: string;
		UserPoolId: string;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface AdminListGroupsForUserRequestFormProperties {
		Username: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListGroupsForUserRequestFormGroup() {
		return new FormGroup<AdminListGroupsForUserRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminListUserAuthEventsResponse {
		AuthEvents?: Array<AuthEventType>;
		NextToken?: string | null;
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
		EventId?: string | null;
		EventType?: AuthEventTypeEventType | null;
		CreationDate?: Date | null;
		EventResponse?: AuthEventTypeEventResponse | null;

		/** The event risk type. */
		EventRisk?: EventRiskType;
		ChallengeResponses?: Array<ChallengeResponseType>;

		/** Specifies the user context data captured at the time of an event request. */
		EventContextData?: EventContextDataType;

		/** Specifies the event feedback type. */
		EventFeedback?: EventFeedbackType;
	}

	/** The authentication event type. */
	export interface AuthEventTypeFormProperties {
		EventId: FormControl<string | null | undefined>,
		EventType: FormControl<AuthEventTypeEventType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		EventResponse: FormControl<AuthEventTypeEventResponse | null | undefined>,
	}
	export function CreateAuthEventTypeFormGroup() {
		return new FormGroup<AuthEventTypeFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			EventType: new FormControl<AuthEventTypeEventType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			EventResponse: new FormControl<AuthEventTypeEventResponse | null | undefined>(undefined),
		});

	}

	export enum AuthEventTypeEventType { SignIn = 0, SignUp = 1, ForgotPassword = 2 }

	export enum AuthEventTypeEventResponse { Success = 0, Failure = 1 }


	/** The event risk type. */
	export interface EventRiskType {
		RiskDecision?: EventRiskTypeRiskDecision | null;
		RiskLevel?: EventRiskTypeRiskLevel | null;
		CompromisedCredentialsDetected?: boolean | null;
	}

	/** The event risk type. */
	export interface EventRiskTypeFormProperties {
		RiskDecision: FormControl<EventRiskTypeRiskDecision | null | undefined>,
		RiskLevel: FormControl<EventRiskTypeRiskLevel | null | undefined>,
		CompromisedCredentialsDetected: FormControl<boolean | null | undefined>,
	}
	export function CreateEventRiskTypeFormGroup() {
		return new FormGroup<EventRiskTypeFormProperties>({
			RiskDecision: new FormControl<EventRiskTypeRiskDecision | null | undefined>(undefined),
			RiskLevel: new FormControl<EventRiskTypeRiskLevel | null | undefined>(undefined),
			CompromisedCredentialsDetected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EventRiskTypeRiskDecision { NoRisk = 0, AccountTakeover = 1, Block = 2 }

	export enum EventRiskTypeRiskLevel { Low = 0, Medium = 1, High = 2 }


	/** The challenge response type. */
	export interface ChallengeResponseType {
		ChallengeName?: ChallengeResponseTypeChallengeName | null;
		ChallengeResponse?: AuthEventTypeEventResponse | null;
	}

	/** The challenge response type. */
	export interface ChallengeResponseTypeFormProperties {
		ChallengeName: FormControl<ChallengeResponseTypeChallengeName | null | undefined>,
		ChallengeResponse: FormControl<AuthEventTypeEventResponse | null | undefined>,
	}
	export function CreateChallengeResponseTypeFormGroup() {
		return new FormGroup<ChallengeResponseTypeFormProperties>({
			ChallengeName: new FormControl<ChallengeResponseTypeChallengeName | null | undefined>(undefined),
			ChallengeResponse: new FormControl<AuthEventTypeEventResponse | null | undefined>(undefined),
		});

	}

	export enum ChallengeResponseTypeChallengeName { Password = 0, Mfa = 1 }


	/** Specifies the user context data captured at the time of an event request. */
	export interface EventContextDataType {
		IpAddress?: string | null;
		DeviceName?: string | null;
		Timezone?: string | null;
		City?: string | null;
		Country?: string | null;
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
		FeedbackValue: EventFeedbackTypeFeedbackValue;
		Provider: string;
		FeedbackDate?: Date | null;
	}

	/** Specifies the event feedback type. */
	export interface EventFeedbackTypeFormProperties {
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,
		Provider: FormControl<string | null | undefined>,
		FeedbackDate: FormControl<Date | null | undefined>,
	}
	export function CreateEventFeedbackTypeFormGroup() {
		return new FormGroup<EventFeedbackTypeFormProperties>({
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			FeedbackDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EventFeedbackTypeFeedbackValue { Valid = 0, Invalid = 1 }

	export interface AdminListUserAuthEventsRequest {
		UserPoolId: string;
		Username: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface AdminListUserAuthEventsRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListUserAuthEventsRequestFormGroup() {
		return new FormGroup<AdminListUserAuthEventsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		GroupName: string;
	}
	export interface AdminRemoveUserFromGroupRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminRemoveUserFromGroupRequestFormGroup() {
		return new FormGroup<AdminRemoveUserFromGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminResetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminResetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequest {
		UserPoolId: string;
		ClientId: string;
		ChallengeName: AdminInitiateAuthResponseChallengeName;
		ChallengeResponses?: ChallengeResponsesType;
		Session?: string | null;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
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

		/** The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/** The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		Username: string;
		UserPoolId: string;
	}
	export interface AdminSetUserMFAPreferenceRequestFormProperties {
		Username: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<AdminSetUserMFAPreferenceRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type used for enabling SMS MFA at the user level. */
	export interface SMSMfaSettingsType {
		Enabled?: boolean | null;
		PreferredMfa?: boolean | null;
	}

	/** The type used for enabling SMS MFA at the user level. */
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


	/** The type used for enabling software token MFA at the user level. */
	export interface SoftwareTokenMfaSettingsType {
		Enabled?: boolean | null;
		PreferredMfa?: boolean | null;
	}

	/** The type used for enabling software token MFA at the user level. */
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
		UserPoolId: string;
		Username: string;
		Password: string;
		Permanent?: boolean | null;
	}
	export interface AdminSetUserPasswordRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Permanent: FormControl<boolean | null | undefined>,
	}
	export function CreateAdminSetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminSetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		MFAOptions: Array<MFAOptionType>;
	}

	/** You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserSettingsRequestFormGroup() {
		return new FormGroup<AdminSetUserSettingsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}
	export interface AdminUpdateAuthEventFeedbackRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		EventId: FormControl<string | null | undefined>,
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,
	}
	export function CreateAdminUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<AdminUpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			EventId: new FormControl<string | null | undefined>(undefined),
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined),
		});

	}


	/** The status response from the request to update the device, as an administrator. */
	export interface AdminUpdateDeviceStatusResponse {
	}

	/** The status response from the request to update the device, as an administrator. */
	export interface AdminUpdateDeviceStatusResponseFormProperties {
	}
	export function CreateAdminUpdateDeviceStatusResponseFormGroup() {
		return new FormGroup<AdminUpdateDeviceStatusResponseFormProperties>({
		});

	}


	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequest {
		UserPoolId: string;
		Username: string;
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null;
	}

	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>,
	}
	export function CreateAdminUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<AdminUpdateDeviceStatusRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			DeviceRememberedStatus: new FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>(undefined),
		});

	}

	export enum AdminUpdateDeviceStatusRequestDeviceRememberedStatus { remembered = 0, not_remembered = 1 }


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
		UserPoolId: string;
		Username: string;
		UserAttributes: Array<AttributeType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUpdateUserAttributesRequestFormGroup() {
		return new FormGroup<AdminUpdateUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
	}

	/** The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUserGlobalSignOutRequestFormGroup() {
		return new FormGroup<AdminUserGlobalSignOutRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSoftwareTokenResponse {
		SecretCode?: string | null;
		Session?: string | null;
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
		AccessToken?: string | null;
		Session?: string | null;
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
		PreviousPassword: string;
		ProposedPassword: string;
		AccessToken: string;
	}

	/** Represents the request to change a user password. */
	export interface ChangePasswordRequestFormProperties {
		PreviousPassword: FormControl<string | null | undefined>,
		ProposedPassword: FormControl<string | null | undefined>,
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordRequestFormGroup() {
		return new FormGroup<ChangePasswordRequestFormProperties>({
			PreviousPassword: new FormControl<string | null | undefined>(undefined),
			ProposedPassword: new FormControl<string | null | undefined>(undefined),
			AccessToken: new FormControl<string | null | undefined>(undefined),
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
		AccessToken: string;
		DeviceKey: string;

		/** The device verifier against which it will be authenticated. */
		DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
		DeviceName?: string | null;
	}

	/** Confirms the device request. */
	export interface ConfirmDeviceRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		DeviceKey: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateConfirmDeviceRequestFormGroup() {
		return new FormGroup<ConfirmDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device verifier against which it will be authenticated. */
	export interface DeviceSecretVerifierConfigType {
		PasswordVerifier?: string | null;
		Salt?: string | null;
	}

	/** The device verifier against which it will be authenticated. */
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
		ClientId: string;
		SecretHash?: string | null;
		Username: string;
		ConfirmationCode: string;
		Password: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ConfirmationCode: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateConfirmForgotPasswordRequestFormGroup() {
		return new FormGroup<ConfirmForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataType {
		EncodedData?: string | null;
	}

	/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
	export interface UserContextDataTypeFormProperties {
		EncodedData: FormControl<string | null | undefined>,
	}
	export function CreateUserContextDataTypeFormGroup() {
		return new FormGroup<UserContextDataTypeFormProperties>({
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
		ClientId: string;
		SecretHash?: string | null;
		Username: string;
		ConfirmationCode: string;
		ForceAliasCreation?: boolean | null;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to confirm registration of a user. */
	export interface ConfirmSignUpRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ConfirmationCode: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateConfirmSignUpRequestFormGroup() {
		return new FormGroup<ConfirmSignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined),
			ForceAliasCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}
	export interface CreateGroupResponseFormProperties {
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
		});

	}

	export interface CreateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string | null;
		RoleArn?: string | null;
		Precedence?: number | null;
	}
	export interface CreateGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}
	export interface CreateIdentityProviderResponseFormProperties {
	}
	export function CreateCreateIdentityProviderResponseFormGroup() {
		return new FormGroup<CreateIdentityProviderResponseFormProperties>({
		});

	}


	/** A container for information about an identity provider. */
	export interface IdentityProviderType {
		UserPoolId?: string | null;
		ProviderName?: string | null;
		ProviderType?: IdentityProviderTypeProviderType | null;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A container for information about an identity provider. */
	export interface IdentityProviderTypeFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityProviderTypeFormGroup() {
		return new FormGroup<IdentityProviderTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<IdentityProviderTypeProviderType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum IdentityProviderTypeProviderType { SAML = 0, Facebook = 1, Google = 2, LoginWithAmazon = 3, SignInWithApple = 4, OIDC = 5 }

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
		UserPoolId: string;
		ProviderName: string;
		ProviderType: IdentityProviderTypeProviderType;
		ProviderDetails: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}
	export interface CreateIdentityProviderRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
	}
	export function CreateCreateIdentityProviderRequestFormGroup() {
		return new FormGroup<CreateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<IdentityProviderTypeProviderType | null | undefined>(undefined),
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

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
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
		UserPoolId?: string | null;
		Identifier?: string | null;
		Name?: string | null;
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
		ScopeName: string;
		ScopeDescription: string;
	}

	/** A resource server scope. */
	export interface ResourceServerScopeTypeFormProperties {
		ScopeName: FormControl<string | null | undefined>,
		ScopeDescription: FormControl<string | null | undefined>,
	}
	export function CreateResourceServerScopeTypeFormGroup() {
		return new FormGroup<ResourceServerScopeTypeFormProperties>({
			ScopeName: new FormControl<string | null | undefined>(undefined),
			ScopeDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface CreateResourceServerRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceServerRequestFormGroup() {
		return new FormGroup<CreateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to create the user import job. */
	export interface CreateUserImportJobResponse {

		/** The user import job type. */
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
		JobName?: string | null;
		JobId?: string | null;
		UserPoolId?: string | null;
		PreSignedUrl?: string | null;
		CreationDate?: Date | null;
		StartDate?: Date | null;
		CompletionDate?: Date | null;
		Status?: UserImportJobTypeStatus | null;
		CloudWatchLogsRoleArn?: string | null;
		ImportedUsers?: number | null;
		SkippedUsers?: number | null;
		FailedUsers?: number | null;
		CompletionMessage?: string | null;
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
		Status: FormControl<UserImportJobTypeStatus | null | undefined>,
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
			Status: new FormControl<UserImportJobTypeStatus | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			ImportedUsers: new FormControl<number | null | undefined>(undefined),
			SkippedUsers: new FormControl<number | null | undefined>(undefined),
			FailedUsers: new FormControl<number | null | undefined>(undefined),
			CompletionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserImportJobTypeStatus { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }


	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequest {
		JobName: string;
		UserPoolId: string;
		CloudWatchLogsRoleArn: string;
	}

	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserImportJobRequestFormGroup() {
		return new FormGroup<CreateUserImportJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server for the request to create a user pool. */
	export interface CreateUserPoolResponse {

		/** A container for information about the user pool. */
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
		Id?: string | null;
		Name?: string | null;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
		SchemaAttributes?: Array<SchemaAttributeType>;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;
		SmsVerificationMessage?: string | null;
		EmailVerificationMessage?: string | null;
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string | null;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;

		/** The configuration for the user pool's device tracking. */
		DeviceConfiguration?: DeviceConfigurationType;
		EstimatedNumberOfUsers?: number | null;

		/** The email configuration type. */
		EmailConfiguration?: EmailConfigurationType;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
		UserPoolTags?: UserPoolTagsType;
		SmsConfigurationFailure?: string | null;
		EmailConfigurationFailure?: string | null;
		Domain?: string | null;
		CustomDomain?: string | null;

		/** The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/** The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/** The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;
		Arn?: string | null;

		/** The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	/** A container for information about the user pool. */
	export interface UserPoolTypeFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<UserPoolTypeStatus | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
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
			Status: new FormControl<UserPoolTypeStatus | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
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

		/** The password policy type. */
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


	/** Specifies the configuration for AWS Lambda triggers. */
	export interface LambdaConfigType {
		PreSignUp?: string | null;
		CustomMessage?: string | null;
		PostConfirmation?: string | null;
		PreAuthentication?: string | null;
		PostAuthentication?: string | null;
		DefineAuthChallenge?: string | null;
		CreateAuthChallenge?: string | null;
		VerifyAuthChallengeResponse?: string | null;
		PreTokenGeneration?: string | null;
		UserMigration?: string | null;
	}

	/** Specifies the configuration for AWS Lambda triggers. */
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
		});

	}

	export enum UserPoolTypeStatus { Enabled = 0, Disabled = 1 }

	export enum VerifiedAttributeType { phone_number = 0, email = 1 }

	export enum AliasAttributeType { phone_number = 0, email = 1, preferred_username = 2 }

	export enum UsernameAttributeType { phone_number = 0, email = 1 }


	/** The template for verification messages. */
	export interface VerificationMessageTemplateType {
		SmsMessage?: string | null;
		EmailMessage?: string | null;
		EmailSubject?: string | null;
		EmailMessageByLink?: string | null;
		EmailSubjectByLink?: string | null;
		DefaultEmailOption?: VerificationMessageTemplateTypeDefaultEmailOption | null;
	}

	/** The template for verification messages. */
	export interface VerificationMessageTemplateTypeFormProperties {
		SmsMessage: FormControl<string | null | undefined>,
		EmailMessage: FormControl<string | null | undefined>,
		EmailSubject: FormControl<string | null | undefined>,
		EmailMessageByLink: FormControl<string | null | undefined>,
		EmailSubjectByLink: FormControl<string | null | undefined>,
		DefaultEmailOption: FormControl<VerificationMessageTemplateTypeDefaultEmailOption | null | undefined>,
	}
	export function CreateVerificationMessageTemplateTypeFormGroup() {
		return new FormGroup<VerificationMessageTemplateTypeFormProperties>({
			SmsMessage: new FormControl<string | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined),
			EmailSubject: new FormControl<string | null | undefined>(undefined),
			EmailMessageByLink: new FormControl<string | null | undefined>(undefined),
			EmailSubjectByLink: new FormControl<string | null | undefined>(undefined),
			DefaultEmailOption: new FormControl<VerificationMessageTemplateTypeDefaultEmailOption | null | undefined>(undefined),
		});

	}

	export enum VerificationMessageTemplateTypeDefaultEmailOption { CONFIRM_WITH_LINK = 0, CONFIRM_WITH_CODE = 1 }

	export enum UserPoolTypeMfaConfiguration { OFF = 0, ON = 1, OPTIONAL = 2 }


	/** The configuration for the user pool's device tracking. */
	export interface DeviceConfigurationType {
		ChallengeRequiredOnNewDevice?: boolean | null;
		DeviceOnlyRememberedOnUserPrompt?: boolean | null;
	}

	/** The configuration for the user pool's device tracking. */
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


	/** The email configuration type. */
	export interface EmailConfigurationType {
		SourceArn?: string | null;
		ReplyToEmailAddress?: string | null;
		EmailSendingAccount?: EmailConfigurationTypeEmailSendingAccount | null;
		From?: string | null;
		ConfigurationSet?: string | null;
	}

	/** The email configuration type. */
	export interface EmailConfigurationTypeFormProperties {
		SourceArn: FormControl<string | null | undefined>,
		ReplyToEmailAddress: FormControl<string | null | undefined>,
		EmailSendingAccount: FormControl<EmailConfigurationTypeEmailSendingAccount | null | undefined>,
		From: FormControl<string | null | undefined>,
		ConfigurationSet: FormControl<string | null | undefined>,
	}
	export function CreateEmailConfigurationTypeFormGroup() {
		return new FormGroup<EmailConfigurationTypeFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReplyToEmailAddress: new FormControl<string | null | undefined>(undefined),
			EmailSendingAccount: new FormControl<EmailConfigurationTypeEmailSendingAccount | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined),
			ConfigurationSet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EmailConfigurationTypeEmailSendingAccount { COGNITO_DEFAULT = 0, DEVELOPER = 1 }


	/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationType {
		SnsCallerArn: string;
		ExternalId?: string | null;
	}

	/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationTypeFormProperties {
		SnsCallerArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateSmsConfigurationTypeFormGroup() {
		return new FormGroup<SmsConfigurationTypeFormProperties>({
			SnsCallerArn: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
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

		/** The message template structure. */
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
		SMSMessage?: string | null;
		EmailMessage?: string | null;
		EmailSubject?: string | null;
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


	/** The user pool add-ons type. */
	export interface UserPoolAddOnsType {
		AdvancedSecurityMode: UserPoolAddOnsTypeAdvancedSecurityMode;
	}

	/** The user pool add-ons type. */
	export interface UserPoolAddOnsTypeFormProperties {
		AdvancedSecurityMode: FormControl<UserPoolAddOnsTypeAdvancedSecurityMode | null | undefined>,
	}
	export function CreateUserPoolAddOnsTypeFormGroup() {
		return new FormGroup<UserPoolAddOnsTypeFormProperties>({
			AdvancedSecurityMode: new FormControl<UserPoolAddOnsTypeAdvancedSecurityMode | null | undefined>(undefined),
		});

	}

	export enum UserPoolAddOnsTypeAdvancedSecurityMode { OFF = 0, AUDIT = 1, ENFORCED = 2 }


	/** The username configuration type.  */
	export interface UsernameConfigurationType {
		CaseSensitive: boolean;
	}

	/** The username configuration type.  */
	export interface UsernameConfigurationTypeFormProperties {
		CaseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateUsernameConfigurationTypeFormGroup() {
		return new FormGroup<UsernameConfigurationTypeFormProperties>({
			CaseSensitive: new FormControl<boolean | null | undefined>(undefined),
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
		Priority: number;
		Name: RecoveryOptionTypeName;
	}

	/** A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionTypeFormProperties {
		Priority: FormControl<number | null | undefined>,
		Name: FormControl<RecoveryOptionTypeName | null | undefined>,
	}
	export function CreateRecoveryOptionTypeFormGroup() {
		return new FormGroup<RecoveryOptionTypeFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<RecoveryOptionTypeName | null | undefined>(undefined),
		});

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
		SmsVerificationMessage?: string | null;
		EmailVerificationMessage?: string | null;
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string | null;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;

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

	/** Represents the request to create a user pool. */
	export interface CreateUserPoolRequestFormProperties {
		PoolName: FormControl<string | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateCreateUserPoolRequestFormGroup() {
		return new FormGroup<CreateUserPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
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

		/** Contains information about a user pool client. */
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
		UserPoolId?: string | null;
		ClientName?: string | null;
		ClientId?: string | null;
		ClientSecret?: string | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string | null;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
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
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
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
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>(undefined),
		});

	}

	export enum ExplicitAuthFlowsType { ADMIN_NO_SRP_AUTH = 0, CUSTOM_AUTH_FLOW_ONLY = 1, USER_PASSWORD_AUTH = 2, ALLOW_ADMIN_USER_PASSWORD_AUTH = 3, ALLOW_CUSTOM_AUTH = 4, ALLOW_USER_PASSWORD_AUTH = 5, ALLOW_USER_SRP_AUTH = 6, ALLOW_REFRESH_TOKEN_AUTH = 7 }

	export enum OAuthFlowType { code = 0, _implicit = 1, client_credentials = 2 }


	/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationType {
		ApplicationId: string;
		RoleArn: string;
		ExternalId: string;
		UserDataShared?: boolean | null;
	}

	/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationTypeFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		UserDataShared: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyticsConfigurationTypeFormGroup() {
		return new FormGroup<AnalyticsConfigurationTypeFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			UserDataShared: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UserPoolClientTypePreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }


	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequest {
		UserPoolId: string;
		ClientName: string;
		GenerateSecret?: boolean | null;
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string | null;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
	}

	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientName: FormControl<string | null | undefined>,
		GenerateSecret: FormControl<boolean | null | undefined>,
		RefreshTokenValidity: FormControl<number | null | undefined>,
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
	}
	export function CreateCreateUserPoolClientRequestFormGroup() {
		return new FormGroup<CreateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientName: new FormControl<string | null | undefined>(undefined),
			GenerateSecret: new FormControl<boolean | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>(undefined),
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
		CloudFrontDomain?: string | null;
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
		Domain: string;
		UserPoolId: string;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}
	export interface CreateUserPoolDomainRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPoolDomainRequestFormGroup() {
		return new FormGroup<CreateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigType {
		CertificateArn: string;
	}

	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigTypeFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomDomainConfigTypeFormGroup() {
		return new FormGroup<CustomDomainConfigTypeFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}
	export interface DeleteGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}
	export interface DeleteIdentityProviderRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityProviderRequestFormGroup() {
		return new FormGroup<DeleteIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Identifier: string;
	}
	export interface DeleteResourceServerRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceServerRequestFormGroup() {
		return new FormGroup<DeleteResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to delete a user. */
	export interface DeleteUserRequest {
		AccessToken: string;
	}

	/** Represents the request to delete a user. */
	export interface DeleteUserRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
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
		UserAttributeNames: Array<string>;
		AccessToken: string;
	}

	/** Represents the request to delete user attributes. */
	export interface DeleteUserAttributesRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserAttributesRequestFormGroup() {
		return new FormGroup<DeleteUserAttributesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequest {
		UserPoolId: string;
	}

	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolRequestFormGroup() {
		return new FormGroup<DeleteUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequest {
		UserPoolId: string;
		ClientId: string;
	}

	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolClientRequestFormGroup() {
		return new FormGroup<DeleteUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
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
		Domain: string;
		UserPoolId: string;
	}
	export interface DeleteUserPoolDomainRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolDomainRequestFormGroup() {
		return new FormGroup<DeleteUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeIdentityProviderResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}
	export interface DescribeIdentityProviderResponseFormProperties {
	}
	export function CreateDescribeIdentityProviderResponseFormGroup() {
		return new FormGroup<DescribeIdentityProviderResponseFormProperties>({
		});

	}

	export interface DescribeIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
	}
	export interface DescribeIdentityProviderRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderRequestFormGroup() {
		return new FormGroup<DescribeIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceServerResponse {

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
		ResourceServer: ResourceServerType;
	}
	export interface DescribeResourceServerResponseFormProperties {
	}
	export function CreateDescribeResourceServerResponseFormGroup() {
		return new FormGroup<DescribeResourceServerResponseFormProperties>({
		});

	}

	export interface DescribeResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
	}
	export interface DescribeResourceServerRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceServerRequestFormGroup() {
		return new FormGroup<DescribeResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRiskConfigurationResponse {

		/**
		 * The risk configuration type.
		 * Required
		 */
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
		UserPoolId?: string | null;
		ClientId?: string | null;

		/** The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/** The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
		LastModifiedDate?: Date | null;
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

		/**
		 * The compromised credentials actions type
		 * Required
		 */
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


	/** The compromised credentials actions type */
	export interface CompromisedCredentialsActionsType {
		EventAction: CompromisedCredentialsActionsTypeEventAction;
	}

	/** The compromised credentials actions type */
	export interface CompromisedCredentialsActionsTypeFormProperties {
		EventAction: FormControl<CompromisedCredentialsActionsTypeEventAction | null | undefined>,
	}
	export function CreateCompromisedCredentialsActionsTypeFormGroup() {
		return new FormGroup<CompromisedCredentialsActionsTypeFormProperties>({
			EventAction: new FormControl<CompromisedCredentialsActionsTypeEventAction | null | undefined>(undefined),
		});

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

	/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
	export interface AccountTakeoverRiskConfigurationTypeFormProperties {
	}
	export function CreateAccountTakeoverRiskConfigurationTypeFormGroup() {
		return new FormGroup<AccountTakeoverRiskConfigurationTypeFormProperties>({
		});

	}


	/** The notify configuration type. */
	export interface NotifyConfigurationType {
		From?: string | null;
		ReplyTo?: string | null;
		SourceArn: string;

		/** The notify email type. */
		BlockEmail?: NotifyEmailType;

		/** The notify email type. */
		NoActionEmail?: NotifyEmailType;

		/** The notify email type. */
		MfaEmail?: NotifyEmailType;
	}

	/** The notify configuration type. */
	export interface NotifyConfigurationTypeFormProperties {
		From: FormControl<string | null | undefined>,
		ReplyTo: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateNotifyConfigurationTypeFormGroup() {
		return new FormGroup<NotifyConfigurationTypeFormProperties>({
			From: new FormControl<string | null | undefined>(undefined),
			ReplyTo: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The notify email type. */
	export interface NotifyEmailType {
		Subject: string;
		HtmlBody?: string | null;
		TextBody?: string | null;
	}

	/** The notify email type. */
	export interface NotifyEmailTypeFormProperties {
		Subject: FormControl<string | null | undefined>,
		HtmlBody: FormControl<string | null | undefined>,
		TextBody: FormControl<string | null | undefined>,
	}
	export function CreateNotifyEmailTypeFormGroup() {
		return new FormGroup<NotifyEmailTypeFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined),
			HtmlBody: new FormControl<string | null | undefined>(undefined),
			TextBody: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Account takeover actions type. */
	export interface AccountTakeoverActionsTypeFormProperties {
	}
	export function CreateAccountTakeoverActionsTypeFormGroup() {
		return new FormGroup<AccountTakeoverActionsTypeFormProperties>({
		});

	}


	/** Account takeover action type. */
	export interface AccountTakeoverActionType {
		Notify: boolean;
		EventAction: AccountTakeoverActionTypeEventAction;
	}

	/** Account takeover action type. */
	export interface AccountTakeoverActionTypeFormProperties {
		Notify: FormControl<boolean | null | undefined>,
		EventAction: FormControl<AccountTakeoverActionTypeEventAction | null | undefined>,
	}
	export function CreateAccountTakeoverActionTypeFormGroup() {
		return new FormGroup<AccountTakeoverActionTypeFormProperties>({
			Notify: new FormControl<boolean | null | undefined>(undefined),
			EventAction: new FormControl<AccountTakeoverActionTypeEventAction | null | undefined>(undefined),
		});

	}

	export enum AccountTakeoverActionTypeEventAction { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


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
		UserPoolId: string;
		ClientId?: string | null;
	}
	export interface DescribeRiskConfigurationRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRiskConfigurationRequestFormGroup() {
		return new FormGroup<DescribeRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to describe the user import job. */
	export interface DescribeUserImportJobResponse {

		/** The user import job type. */
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
		UserPoolId: string;
		JobId: string;
	}

	/** Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserImportJobRequestFormGroup() {
		return new FormGroup<DescribeUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to describe the user pool. */
	export interface DescribeUserPoolResponse {

		/** A container for information about the user pool. */
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
		UserPoolId: string;
	}

	/** Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolRequestFormGroup() {
		return new FormGroup<DescribeUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server from a request to describe the user pool client. */
	export interface DescribeUserPoolClientResponse {

		/** Contains information about a user pool client. */
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
		UserPoolId: string;
		ClientId: string;
	}

	/** Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolClientRequestFormGroup() {
		return new FormGroup<DescribeUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUserPoolDomainResponse {

		/** A container for information about a domain. */
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
		UserPoolId?: string | null;
		AWSAccountId?: string | null;
		Domain?: string | null;
		S3Bucket?: string | null;
		CloudFrontDistribution?: string | null;
		Version?: string | null;
		Status?: DomainDescriptionTypeStatus | null;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
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
		Status: FormControl<DomainDescriptionTypeStatus | null | undefined>,
	}
	export function CreateDomainDescriptionTypeFormGroup() {
		return new FormGroup<DomainDescriptionTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			CloudFrontDistribution: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DomainDescriptionTypeStatus | null | undefined>(undefined),
		});

	}

	export enum DomainDescriptionTypeStatus { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export interface DescribeUserPoolDomainRequest {
		Domain: string;
	}
	export interface DescribeUserPoolDomainRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolDomainRequestFormGroup() {
		return new FormGroup<DescribeUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequest {
		AccessToken?: string | null;
		DeviceKey: string;
	}

	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateForgetDeviceRequestFormGroup() {
		return new FormGroup<ForgetDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Respresents the response from the server regarding the request to reset a password. */
	export interface ForgotPasswordResponse {

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}

	/** Respresents the response from the server regarding the request to reset a password. */
	export interface ForgotPasswordResponseFormProperties {
	}
	export function CreateForgotPasswordResponseFormGroup() {
		return new FormGroup<ForgotPasswordResponseFormProperties>({
		});

	}


	/** The code delivery details being returned from the server. */
	export interface CodeDeliveryDetailsType {
		Destination?: string | null;
		DeliveryMedium?: MFAOptionTypeDeliveryMedium | null;
		AttributeName?: string | null;
	}

	/** The code delivery details being returned from the server. */
	export interface CodeDeliveryDetailsTypeFormProperties {
		Destination: FormControl<string | null | undefined>,
		DeliveryMedium: FormControl<MFAOptionTypeDeliveryMedium | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateCodeDeliveryDetailsTypeFormGroup() {
		return new FormGroup<CodeDeliveryDetailsTypeFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			DeliveryMedium: new FormControl<MFAOptionTypeDeliveryMedium | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequest {
		ClientId: string;
		SecretHash?: string | null;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateForgotPasswordRequestFormGroup() {
		return new FormGroup<ForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponse {
		UserPoolId?: string | null;
		CSVHeader?: Array<string>;
	}

	/** Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponseFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderResponseFormGroup() {
		return new FormGroup<GetCSVHeaderResponseFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequest {
		UserPoolId: string;
	}

	/** Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderRequestFormGroup() {
		return new FormGroup<GetCSVHeaderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets the device response. */
	export interface GetDeviceResponse {

		/**
		 * The device type.
		 * Required
		 */
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
		DeviceKey: string;
		AccessToken?: string | null;
	}

	/** Represents the request to get the device. */
	export interface GetDeviceRequestFormProperties {
		DeviceKey: FormControl<string | null | undefined>,
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}
	export interface GetGroupResponseFormProperties {
	}
	export function CreateGetGroupResponseFormGroup() {
		return new FormGroup<GetGroupResponseFormProperties>({
		});

	}

	export interface GetGroupRequest {
		GroupName: string;
		UserPoolId: string;
	}
	export interface GetGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIdentityProviderByIdentifierResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}
	export interface GetIdentityProviderByIdentifierResponseFormProperties {
	}
	export function CreateGetIdentityProviderByIdentifierResponseFormGroup() {
		return new FormGroup<GetIdentityProviderByIdentifierResponseFormProperties>({
		});

	}

	export interface GetIdentityProviderByIdentifierRequest {
		UserPoolId: string;
		IdpIdentifier: string;
	}
	export interface GetIdentityProviderByIdentifierRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		IdpIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityProviderByIdentifierRequestFormGroup() {
		return new FormGroup<GetIdentityProviderByIdentifierRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			IdpIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponse {
		Certificate?: string | null;
	}

	/** Response from Cognito for a signing certificate request. */
	export interface GetSigningCertificateResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningCertificateResponseFormGroup() {
		return new FormGroup<GetSigningCertificateResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to get a signing certificate from Cognito. */
	export interface GetSigningCertificateRequest {
		UserPoolId: string;
	}

	/** Request to get a signing certificate from Cognito. */
	export interface GetSigningCertificateRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningCertificateRequestFormGroup() {
		return new FormGroup<GetSigningCertificateRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUICustomizationResponse {

		/**
		 * A container for the UI customization information for a user pool's built-in app UI.
		 * Required
		 */
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
		UserPoolId?: string | null;
		ClientId?: string | null;
		ImageUrl?: string | null;
		CSS?: string | null;
		CSSVersion?: string | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
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
		UserPoolId: string;
		ClientId?: string | null;
	}
	export interface GetUICustomizationRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateGetUICustomizationRequestFormGroup() {
		return new FormGroup<GetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponse {
		Username: string;
		UserAttributes: Array<AttributeType>;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string | null;
		UserMFASettingList?: Array<string>;
	}

	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponseFormProperties {
		Username: FormControl<string | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			PreferredMfaSetting: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get information about the user. */
	export interface GetUserRequest {
		AccessToken: string;
	}

	/** Represents the request to get information about the user. */
	export interface GetUserRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetUserRequestFormGroup() {
		return new FormGroup<GetUserRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The verification code response returned by the server response to get the user attribute verification code. */
	export interface GetUserAttributeVerificationCodeResponse {

		/** The code delivery details being returned from the server. */
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
		AccessToken: string;
		AttributeName: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserAttributeVerificationCodeRequestFormGroup() {
		return new FormGroup<GetUserAttributeVerificationCodeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserPoolMfaConfigResponse {

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;
	}
	export interface GetUserPoolMfaConfigResponseFormProperties {
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateGetUserPoolMfaConfigResponseFormGroup() {
		return new FormGroup<GetUserPoolMfaConfigResponseFormProperties>({
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
		});

	}


	/** The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigType {
		SmsAuthenticationMessage?: string | null;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
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
		UserPoolId: string;
	}
	export interface GetUserPoolMfaConfigRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<GetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
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
		AccessToken: string;
	}

	/** Represents the request to sign out all devices. */
	export interface GlobalSignOutRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSignOutRequestFormGroup() {
		return new FormGroup<GlobalSignOutRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the authentication response. */
	export interface InitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response. */
	export interface InitiateAuthResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthResponseFormGroup() {
		return new FormGroup<InitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Initiates the authentication request. */
	export interface InitiateAuthRequestFormProperties {
		AuthFlow: FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthRequestFormGroup() {
		return new FormGroup<InitiateAuthRequestFormProperties>({
			AuthFlow: new FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to list devices. */
	export interface ListDevicesResponse {
		Devices?: Array<DeviceType>;
		PaginationToken?: string | null;
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
		AccessToken: string;
		Limit?: number | null;
		PaginationToken?: string | null;
	}

	/** Represents the request to list the devices. */
	export interface ListDevicesRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupType>;
		NextToken?: string | null;
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
		UserPoolId: string;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface ListGroupsRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersResponse {
		Providers: Array<ProviderDescription>;
		NextToken?: string | null;
	}
	export interface ListIdentityProvidersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersResponseFormGroup() {
		return new FormGroup<ListIdentityProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for identity provider details. */
	export interface ProviderDescription {
		ProviderName?: string | null;
		ProviderType?: IdentityProviderTypeProviderType | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A container for identity provider details. */
	export interface ProviderDescriptionFormProperties {
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateProviderDescriptionFormGroup() {
		return new FormGroup<ProviderDescriptionFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<IdentityProviderTypeProviderType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersRequest {
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListIdentityProvidersRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersRequestFormGroup() {
		return new FormGroup<ListIdentityProvidersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceServersResponse {
		ResourceServers: Array<ResourceServerType>;
		NextToken?: string | null;
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
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListResourceServersRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceServersRequestFormGroup() {
		return new FormGroup<ListResourceServersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponse {
		UserImportJobs?: Array<UserImportJobType>;
		PaginationToken?: string | null;
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
		UserPoolId: string;
		MaxResults: number;
		PaginationToken?: string | null;
	}

	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserImportJobsRequestFormGroup() {
		return new FormGroup<ListUserImportJobsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponse {
		UserPoolClients?: Array<UserPoolClientDescription>;
		NextToken?: string | null;
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
		ClientId?: string | null;
		UserPoolId?: string | null;
		ClientName?: string | null;
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
		UserPoolId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolClientsRequestFormGroup() {
		return new FormGroup<ListUserPoolClientsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponse {
		UserPools?: Array<UserPoolDescriptionType>;
		NextToken?: string | null;
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
		Id?: string | null;
		Name?: string | null;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A user pool description. */
	export interface UserPoolDescriptionTypeFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<UserPoolTypeStatus | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserPoolDescriptionTypeFormGroup() {
		return new FormGroup<UserPoolDescriptionTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UserPoolTypeStatus | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequest {
		NextToken?: string | null;
		MaxResults: number;
	}

	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUserPoolsRequestFormGroup() {
		return new FormGroup<ListUserPoolsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response from the request to list users. */
	export interface ListUsersResponse {
		Users?: Array<UserType>;
		PaginationToken?: string | null;
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
		UserPoolId: string;
		AttributesToGet?: Array<string>;
		Limit?: number | null;
		PaginationToken?: string | null;
		Filter?: string | null;
	}

	/** Represents the request to list users. */
	export interface ListUsersRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
		Filter: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			Filter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersInGroupResponse {
		Users?: Array<UserType>;
		NextToken?: string | null;
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
		UserPoolId: string;
		GroupName: string;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface ListUsersInGroupRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersInGroupRequestFormGroup() {
		return new FormGroup<ListUsersInGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponse {

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
	}

	/** The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code. */
	export interface ResendConfirmationCodeResponseFormProperties {
	}
	export function CreateResendConfirmationCodeResponseFormGroup() {
		return new FormGroup<ResendConfirmationCodeResponseFormProperties>({
		});

	}


	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequest {
		ClientId: string;
		SecretHash?: string | null;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateResendConfirmationCodeRequestFormGroup() {
		return new FormGroup<ResendConfirmationCodeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<RespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequest {
		ClientId: string;
		ChallengeName: AdminInitiateAuthResponseChallengeName;
		Session?: string | null;
		ChallengeResponses?: ChallengeResponsesType;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<RespondToAuthChallengeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetRiskConfigurationResponse {

		/**
		 * The risk configuration type.
		 * Required
		 */
		RiskConfiguration: RiskConfigurationType;
	}
	export interface SetRiskConfigurationResponseFormProperties {
	}
	export function CreateSetRiskConfigurationResponseFormGroup() {
		return new FormGroup<SetRiskConfigurationResponseFormProperties>({
		});

	}

	export interface SetRiskConfigurationRequest {
		UserPoolId: string;
		ClientId?: string | null;

		/** The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/** The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
	}
	export interface SetRiskConfigurationRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateSetRiskConfigurationRequestFormGroup() {
		return new FormGroup<SetRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetUICustomizationResponse {

		/**
		 * A container for the UI customization information for a user pool's built-in app UI.
		 * Required
		 */
		UICustomization: UICustomizationType;
	}
	export interface SetUICustomizationResponseFormProperties {
	}
	export function CreateSetUICustomizationResponseFormGroup() {
		return new FormGroup<SetUICustomizationResponseFormProperties>({
		});

	}

	export interface SetUICustomizationRequest {
		UserPoolId: string;
		ClientId?: string | null;
		CSS?: string | null;
		ImageFile?: string | null;
	}
	export interface SetUICustomizationRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		CSS: FormControl<string | null | undefined>,
		ImageFile: FormControl<string | null | undefined>,
	}
	export function CreateSetUICustomizationRequestFormGroup() {
		return new FormGroup<SetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
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

		/** The type used for enabling SMS MFA at the user level. */
		SMSMfaSettings?: SMSMfaSettingsType;

		/** The type used for enabling software token MFA at the user level. */
		SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
		AccessToken: string;
	}
	export interface SetUserMFAPreferenceRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<SetUserMFAPreferenceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetUserPoolMfaConfigResponse {

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;
	}
	export interface SetUserPoolMfaConfigResponseFormProperties {
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateSetUserPoolMfaConfigResponseFormGroup() {
		return new FormGroup<SetUserPoolMfaConfigResponseFormProperties>({
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
		});

	}

	export interface SetUserPoolMfaConfigRequest {
		UserPoolId: string;

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;
	}
	export interface SetUserPoolMfaConfigRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateSetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<SetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
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
		AccessToken: string;
		MFAOptions: Array<MFAOptionType>;
	}

	/** Represents the request to set user settings. */
	export interface SetUserSettingsRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateSetUserSettingsRequestFormGroup() {
		return new FormGroup<SetUserSettingsRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the server for a registration request. */
	export interface SignUpResponse {
		UserConfirmed: boolean;

		/** The code delivery details being returned from the server. */
		CodeDeliveryDetails?: CodeDeliveryDetailsType;
		UserSub: string;
	}

	/** The response from the server for a registration request. */
	export interface SignUpResponseFormProperties {
		UserConfirmed: FormControl<boolean | null | undefined>,
		UserSub: FormControl<string | null | undefined>,
	}
	export function CreateSignUpResponseFormGroup() {
		return new FormGroup<SignUpResponseFormProperties>({
			UserConfirmed: new FormControl<boolean | null | undefined>(undefined),
			UserSub: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to register a user. */
	export interface SignUpRequest {
		ClientId: string;
		SecretHash?: string | null;
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

	/** Represents the request to register a user. */
	export interface SignUpRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		SecretHash: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSignUpRequestFormGroup() {
		return new FormGroup<SignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			SecretHash: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to start the user import job. */
	export interface StartUserImportJobResponse {

		/** The user import job type. */
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
		UserPoolId: string;
		JobId: string;
	}

	/** Represents the request to start the user import job. */
	export interface StartUserImportJobRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartUserImportJobRequestFormGroup() {
		return new FormGroup<StartUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response from the server to the request to stop the user import job. */
	export interface StopUserImportJobResponse {

		/** The user import job type. */
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
		UserPoolId: string;
		JobId: string;
	}

	/** Represents the request to stop the user import job. */
	export interface StopUserImportJobRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopUserImportJobRequestFormGroup() {
		return new FormGroup<StopUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
		Tags: UserPoolTagsType;
	}
	export interface TagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;
		Username: string;
		EventId: string;
		FeedbackToken: string;
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}
	export interface UpdateAuthEventFeedbackRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		EventId: FormControl<string | null | undefined>,
		FeedbackToken: FormControl<string | null | undefined>,
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,
	}
	export function CreateUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<UpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			EventId: new FormControl<string | null | undefined>(undefined),
			FeedbackToken: new FormControl<string | null | undefined>(undefined),
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined),
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
		AccessToken: string;
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null;
	}

	/** Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>,
	}
	export function CreateUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<UpdateDeviceStatusRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			DeviceKey: new FormControl<string | null | undefined>(undefined),
			DeviceRememberedStatus: new FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupResponse {

		/** The group type. */
		Group?: GroupType;
	}
	export interface UpdateGroupResponseFormProperties {
	}
	export function CreateUpdateGroupResponseFormGroup() {
		return new FormGroup<UpdateGroupResponseFormProperties>({
		});

	}

	export interface UpdateGroupRequest {
		GroupName: string;
		UserPoolId: string;
		Description?: string | null;
		RoleArn?: string | null;
		Precedence?: number | null;
	}
	export interface UpdateGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Precedence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderResponse {

		/**
		 * A container for information about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProviderType;
	}
	export interface UpdateIdentityProviderResponseFormProperties {
	}
	export function CreateUpdateIdentityProviderResponseFormGroup() {
		return new FormGroup<UpdateIdentityProviderResponseFormProperties>({
		});

	}

	export interface UpdateIdentityProviderRequest {
		UserPoolId: string;
		ProviderName: string;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;
		IdpIdentifiers?: Array<string>;
	}
	export interface UpdateIdentityProviderRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceServerResponse {

		/**
		 * A container for information about a resource server for a user pool.
		 * Required
		 */
		ResourceServer: ResourceServerType;
	}
	export interface UpdateResourceServerResponseFormProperties {
	}
	export function CreateUpdateResourceServerResponseFormGroup() {
		return new FormGroup<UpdateResourceServerResponseFormProperties>({
		});

	}

	export interface UpdateResourceServerRequest {
		UserPoolId: string;
		Identifier: string;
		Name: string;
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface UpdateResourceServerRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceServerRequestFormGroup() {
		return new FormGroup<UpdateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
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
		UserAttributes: Array<AttributeType>;
		AccessToken: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to update user attributes. */
	export interface UpdateUserAttributesRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserAttributesRequestFormGroup() {
		return new FormGroup<UpdateUserAttributesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
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
		UserPoolId: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		SmsVerificationMessage?: string | null;
		EmailVerificationMessage?: string | null;
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;
		SmsAuthenticationMessage?: string | null;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;

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

	/** Represents the request to update the user pool. */
	export interface UpdateUserPoolRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		SmsVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationMessage: FormControl<string | null | undefined>,
		EmailVerificationSubject: FormControl<string | null | undefined>,
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateUpdateUserPoolRequestFormGroup() {
		return new FormGroup<UpdateUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined),
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
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


	/** Represents the response from the server to the request to update the user pool client. */
	export interface UpdateUserPoolClientResponse {

		/** Contains information about a user pool client. */
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
		UserPoolId: string;
		ClientId: string;
		ClientName?: string | null;
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;
		CallbackURLs?: Array<string>;
		LogoutURLs?: Array<string>;
		DefaultRedirectURI?: string | null;
		AllowedOAuthFlows?: Array<OAuthFlowType>;
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
	}

	/** Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequestFormProperties {
		UserPoolId: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		ClientName: FormControl<string | null | undefined>,
		RefreshTokenValidity: FormControl<number | null | undefined>,
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
	}
	export function CreateUpdateUserPoolClientRequestFormGroup() {
		return new FormGroup<UpdateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
			ClientName: new FormControl<string | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>(undefined),
		});

	}


	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponse {
		CloudFrontDomain?: string | null;
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
		Domain: string;
		UserPoolId: string;

		/**
		 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
		 * Required
		 */
		CustomDomainConfig: CustomDomainConfigType;
	}

	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPoolDomainRequestFormGroup() {
		return new FormGroup<UpdateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			UserPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifySoftwareTokenResponse {
		Status?: VerifySoftwareTokenResponseStatus | null;
		Session?: string | null;
	}
	export interface VerifySoftwareTokenResponseFormProperties {
		Status: FormControl<VerifySoftwareTokenResponseStatus | null | undefined>,
		Session: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenResponseFormGroup() {
		return new FormGroup<VerifySoftwareTokenResponseFormProperties>({
			Status: new FormControl<VerifySoftwareTokenResponseStatus | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerifySoftwareTokenResponseStatus { SUCCESS = 0, ERROR = 1 }

	export interface VerifySoftwareTokenRequest {
		AccessToken?: string | null;
		Session?: string | null;
		UserCode: string;
		FriendlyDeviceName?: string | null;
	}
	export interface VerifySoftwareTokenRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		Session: FormControl<string | null | undefined>,
		UserCode: FormControl<string | null | undefined>,
		FriendlyDeviceName: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenRequestFormGroup() {
		return new FormGroup<VerifySoftwareTokenRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined),
			UserCode: new FormControl<string | null | undefined>(undefined),
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
		AccessToken: string;
		AttributeName: string;
		Code: string;
	}

	/** Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
	}
	export function CreateVerifyUserAttributeRequestFormGroup() {
		return new FormGroup<VerifyUserAttributeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
		});

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
		AdminListGroupsForUser(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: AdminListGroupsForUserRequest): Observable<AdminListGroupsForUserResponse> {
			return this.http.post<AdminListGroupsForUserResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {AdminListUserAuthEventsResponse} Success
		 */
		AdminListUserAuthEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: AdminListUserAuthEventsRequest): Observable<AdminListUserAuthEventsResponse> {
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
		ListGroups(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about all identity providers for a user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIdentityProvidersRequest): Observable<ListIdentityProvidersResponse> {
			return this.http.post<ListIdentityProvidersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resource servers for a user pool.
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
		ListUserPoolClients(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserPoolClientsRequest): Observable<ListUserPoolClientsResponse> {
			return this.http.post<ListUserPoolClientsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user pools associated with an AWS account.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserPoolsResponse} Success
		 */
		ListUserPools(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserPoolsRequest): Observable<ListUserPoolsResponse> {
			return this.http.post<ListUserPoolsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the users in the Amazon Cognito user pool.
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers
		 * @param {string} Limit Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(Limit: string | null | undefined, PaginationToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersInGroupResponse} Success
		 */
		ListUsersInGroup(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersInGroupRequest): Observable<ListUsersInGroupResponse> {
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

