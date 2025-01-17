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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		CustomAttributes: Array<SchemaAttributeType>;
	}

	/** Represents the request to add custom attributes. */
	export interface AddCustomAttributesRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAddCustomAttributesRequestFormGroup() {
		return new FormGroup<AddCustomAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}


	/** Contains information about the schema attribute. */
	export interface SchemaAttributeType {

		/**
		 * Max length: 20
		 * Min length: 1
		 */
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

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		AttributeDataType: FormControl<SchemaAttributeTypeAttributeDataType | null | undefined>,
		DeveloperOnlyAttribute: FormControl<boolean | null | undefined>,
		Mutable: FormControl<boolean | null | undefined>,
		Required: FormControl<boolean | null | undefined>,
	}
	export function CreateSchemaAttributeTypeFormGroup() {
		return new FormGroup<SchemaAttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;
	}
	export interface AdminAddUserToGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminAddUserToGroupRequestFormGroup() {
		return new FormGroup<AdminAddUserToGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to confirm user registration. */
	export interface AdminConfirmSignUpRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminConfirmSignUpRequestFormGroup() {
		return new FormGroup<AdminConfirmSignUpRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Max length: 128
		 * Min length: 1
		 */
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

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserTypeUserStatus | null | undefined>,
	}
	export function CreateUserTypeFormGroup() {
		return new FormGroup<UserTypeFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserTypeUserStatus | null | undefined>(undefined),
		});

	}


	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeType {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;

		/** Max length: 2048 */
		Value?: string | null;
	}

	/** Specifies whether the attribute is standard or custom. */
	export interface AttributeTypeFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeTypeFormGroup() {
		return new FormGroup<AttributeTypeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export enum UserTypeUserStatus { UNCONFIRMED = 0, CONFIRMED = 1, ARCHIVED = 2, COMPROMISED = 3, UNKNOWN = 4, RESET_REQUIRED = 5, FORCE_CHANGE_PASSWORD = 6 }


	/** <p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionType {
		DeliveryMedium?: MFAOptionTypeDeliveryMedium | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName?: string | null;
	}

	/** <p> <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.</p> <p>To set either type of MFA configuration, use the <a>AdminSetUserMFAPreference</a> or <a>SetUserMFAPreference</a> actions.</p> <p>To look up information about either type of MFA configuration, use the <a>AdminGetUserResponse$UserMFASettingList</a> or <a>GetUserResponse$UserMFASettingList</a> responses.</p> */
	export interface MFAOptionTypeFormProperties {
		DeliveryMedium: FormControl<MFAOptionTypeDeliveryMedium | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateMFAOptionTypeFormGroup() {
		return new FormGroup<MFAOptionTypeFormProperties>({
			DeliveryMedium: new FormControl<MFAOptionTypeDeliveryMedium | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}

	export enum MFAOptionTypeDeliveryMedium { SMS = 0, EMAIL = 1 }


	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
		UserAttributes?: Array<AttributeType>;
		ValidationData?: Array<AttributeType>;

		/**
		 * Max length: 256
		 * Min length: 6
		 */
		TemporaryPassword?: string | null;
		ForceAliasCreation?: boolean | null;
		MessageAction?: AdminCreateUserRequestMessageAction | null;
		DesiredDeliveryMediums?: Array<DeliveryMediumType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to create a user in the specified user pool. */
	export interface AdminCreateUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 6
		 */
		TemporaryPassword: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
		MessageAction: FormControl<AdminCreateUserRequestMessageAction | null | undefined>,
	}
	export function CreateAdminCreateUserRequestFormGroup() {
		return new FormGroup<AdminCreateUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			TemporaryPassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** Represents the request to delete a user as an administrator. */
	export interface AdminDeleteUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserRequestFormGroup() {
		return new FormGroup<AdminDeleteUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** Required */
		UserAttributeNames: Array<string>;
	}

	/** Represents the request to delete user attributes as an administrator. */
	export interface AdminDeleteUserAttributesRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDeleteUserAttributesRequestFormGroup() {
		return new FormGroup<AdminDeleteUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * A container for information about an identity provider for a user pool.
		 * Required
		 */
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


	/** A container for information about an identity provider for a user pool. */
	export interface ProviderUserIdentifierType {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName?: string | null;
		ProviderAttributeName?: string | null;
		ProviderAttributeValue?: string | null;
	}

	/** A container for information about an identity provider for a user pool. */
	export interface ProviderUserIdentifierTypeFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
		ProviderAttributeName: FormControl<string | null | undefined>,
		ProviderAttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateProviderUserIdentifierTypeFormGroup() {
		return new FormGroup<ProviderUserIdentifierTypeFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** Represents the request to disable any user as an administrator. */
	export interface AdminDisableUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminDisableUserRequestFormGroup() {
		return new FormGroup<AdminDisableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** Represents the request that enables the user as an administrator. */
	export interface AdminEnableUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminEnableUserRequestFormGroup() {
		return new FormGroup<AdminEnableUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;
	}

	/** Sends the forgot device request, as an administrator. */
	export interface AdminForgetDeviceRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminForgetDeviceRequestFormGroup() {
		return new FormGroup<AdminForgetDeviceRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey?: string | null;
		DeviceAttributes?: Array<AttributeType>;
		DeviceCreateDate?: Date | null;
		DeviceLastModifiedDate?: Date | null;
		DeviceLastAuthenticatedDate?: Date | null;
	}

	/** The device type. */
	export interface DeviceTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceCreateDate: FormControl<Date | null | undefined>,
		DeviceLastModifiedDate: FormControl<Date | null | undefined>,
		DeviceLastAuthenticatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceTypeFormGroup() {
		return new FormGroup<DeviceTypeFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
			DeviceCreateDate: new FormControl<Date | null | undefined>(undefined),
			DeviceLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			DeviceLastAuthenticatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** Represents the request to get the device, as an administrator. */
	export interface AdminGetDeviceRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetDeviceRequestFormGroup() {
		return new FormGroup<AdminGetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** Represents the response from the server from the request to get the specified user as an administrator. */
	export interface AdminGetUserResponse {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
		UserCreateDate: FormControl<Date | null | undefined>,
		UserLastModifiedDate: FormControl<Date | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		UserStatus: FormControl<UserTypeUserStatus | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserResponseFormGroup() {
		return new FormGroup<AdminGetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserCreateDate: new FormControl<Date | null | undefined>(undefined),
			UserLastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			UserStatus: new FormControl<UserTypeUserStatus | null | undefined>(undefined),
			PreferredMfaSetting: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** Represents the request to get the specified user as an administrator. */
	export interface AdminGetUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminGetUserRequestFormGroup() {
		return new FormGroup<AdminGetUserRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response, as an administrator. */
	export interface AdminInitiateAuthResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminInitiateAuthResponseFormGroup() {
		return new FormGroup<AdminInitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
			ExpiresIn: new FormControl<number | null | undefined>(undefined),
			TokenType: new FormControl<string | null | undefined>(undefined),
			RefreshToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
			IdToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
		});

	}


	/** The new device metadata type. */
	export interface NewDeviceMetadataType {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey?: string | null;
		DeviceGroupKey?: string | null;
	}

	/** The new device metadata type. */
	export interface NewDeviceMetadataTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceGroupKey: FormControl<string | null | undefined>,
	}
	export function CreateNewDeviceMetadataTypeFormGroup() {
		return new FormGroup<NewDeviceMetadataTypeFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
			DeviceGroupKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the authorization request, as an administrator. */
	export interface AdminInitiateAuthRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/** Required */
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		AuthFlow: FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>,
	}
	export function CreateAdminInitiateAuthRequestFormGroup() {
		return new FormGroup<AdminInitiateAuthRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			AuthFlow: new FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		IpAddress: string;

		/** Required */
		ServerName: string;

		/** Required */
		ServerPath: string;

		/** Required */
		HttpHeaders: Array<HttpHeader>;
		EncodedData?: string | null;
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

		/** Required */
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

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Lists the device's response, as an administrator. */
	export interface AdminListDevicesResponseFormProperties {

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListDevicesResponseFormGroup() {
		return new FormGroup<AdminListDevicesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Represents the request to list devices, as an administrator. */
	export interface AdminListDevicesRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListDevicesRequestFormGroup() {
		return new FormGroup<AdminListDevicesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface AdminListGroupsForUserResponse {
		Groups?: Array<GroupType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface AdminListGroupsForUserResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListGroupsForUserResponseFormGroup() {
		return new FormGroup<AdminListGroupsForUserResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** The group type. */
	export interface GroupType {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/** Max length: 2048 */
		Description?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Minimum: 0 */
		Precedence?: number | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** The group type. */
	export interface GroupTypeFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Precedence: FormControl<number | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupTypeFormGroup() {
		return new FormGroup<GroupTypeFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			Precedence: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AdminListGroupsForUserRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface AdminListGroupsForUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListGroupsForUserRequestFormGroup() {
		return new FormGroup<AdminListGroupsForUserRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface AdminListUserAuthEventsResponse {
		AuthEvents?: Array<AuthEventType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface AdminListUserAuthEventsResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListUserAuthEventsResponseFormGroup() {
		return new FormGroup<AdminListUserAuthEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
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

		/** Required */
		FeedbackValue: EventFeedbackTypeFeedbackValue;

		/** Required */
		Provider: string;
		FeedbackDate?: Date | null;
	}

	/** Specifies the event feedback type. */
	export interface EventFeedbackTypeFormProperties {

		/** Required */
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,

		/** Required */
		Provider: FormControl<string | null | undefined>,
		FeedbackDate: FormControl<Date | null | undefined>,
	}
	export function CreateEventFeedbackTypeFormGroup() {
		return new FormGroup<EventFeedbackTypeFormProperties>({
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined, [Validators.required]),
			Provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FeedbackDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EventFeedbackTypeFeedbackValue { Valid = 0, Invalid = 1 }

	export interface AdminListUserAuthEventsRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		MaxResults?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface AdminListUserAuthEventsRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateAdminListUserAuthEventsRequestFormGroup() {
		return new FormGroup<AdminListUserAuthEventsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;
	}
	export interface AdminRemoveUserFromGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAdminRemoveUserFromGroupRequestFormGroup() {
		return new FormGroup<AdminRemoveUserFromGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password as an administrator. */
	export interface AdminResetUserPasswordRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminResetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminResetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Responds to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/** Required */
		ChallengeName: AdminInitiateAuthResponseChallengeName;
		ChallengeResponses?: ChallengeResponsesType;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		ContextData?: ContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request to respond to the authentication challenge, as an administrator. */
	export interface AdminRespondToAuthChallengeRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAdminRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<AdminRespondToAuthChallengeRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined, [Validators.required]),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}
	export interface AdminSetUserMFAPreferenceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<AdminSetUserMFAPreferenceRequestFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		Password: string;
		Permanent?: boolean | null;
	}
	export interface AdminSetUserPasswordRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		Password: FormControl<string | null | undefined>,
		Permanent: FormControl<boolean | null | undefined>,
	}
	export function CreateAdminSetUserPasswordRequestFormGroup() {
		return new FormGroup<AdminSetUserPasswordRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** Required */
		MFAOptions: Array<MFAOptionType>;
	}

	/** You can use this parameter to set an MFA configuration that uses the SMS delivery medium. */
	export interface AdminSetUserSettingsRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminSetUserSettingsRequestFormGroup() {
		return new FormGroup<AdminSetUserSettingsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		EventId: string;

		/** Required */
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}
	export interface AdminUpdateAuthEventFeedbackRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,
	}
	export function CreateAdminUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<AdminUpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[\w+-]+')]),
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null;
	}

	/** The request to update the device status, as an administrator. */
	export interface AdminUpdateDeviceStatusRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>,
	}
	export function CreateAdminUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<AdminUpdateDeviceStatusRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** Required */
		UserAttributes: Array<AttributeType>;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to update the user's attributes as an administrator. */
	export interface AdminUpdateUserAttributesRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUpdateUserAttributesRequestFormGroup() {
		return new FormGroup<AdminUpdateUserAttributesRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;
	}

	/** The request to sign out of all devices, as an administrator. */
	export interface AdminUserGlobalSignOutRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAdminUserGlobalSignOutRequestFormGroup() {
		return new FormGroup<AdminUserGlobalSignOutRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}

	export interface AssociateSoftwareTokenResponse {

		/** Min length: 16 */
		SecretCode?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
	}
	export interface AssociateSoftwareTokenResponseFormProperties {

		/** Min length: 16 */
		SecretCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSoftwareTokenResponseFormGroup() {
		return new FormGroup<AssociateSoftwareTokenResponseFormProperties>({
			SecretCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.pattern('[A-Za-z0-9]+')]),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface AssociateSoftwareTokenRequest {
		AccessToken?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
	}
	export interface AssociateSoftwareTokenRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSoftwareTokenRequestFormGroup() {
		return new FormGroup<AssociateSoftwareTokenRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		PreviousPassword: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		ProposedPassword: string;

		/** Required */
		AccessToken: string;
	}

	/** Represents the request to change a user password. */
	export interface ChangePasswordRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		PreviousPassword: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		ProposedPassword: FormControl<string | null | undefined>,

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordRequestFormGroup() {
		return new FormGroup<ChangePasswordRequestFormProperties>({
			PreviousPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
			ProposedPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;

		/** The device verifier against which it will be authenticated. */
		DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DeviceName?: string | null;
	}

	/** Confirms the device request. */
	export interface ConfirmDeviceRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateConfirmDeviceRequestFormGroup() {
		return new FormGroup<ConfirmDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
			DeviceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ConfirmationCode: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		Password: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** The request representing the confirmation for a password reset. */
	export interface ConfirmForgotPasswordRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ConfirmationCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateConfirmForgotPasswordRequestFormGroup() {
		return new FormGroup<ConfirmForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			SecretHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=/]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[\S]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ConfirmationCode: FormControl<string | null | undefined>,
		ForceAliasCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateConfirmSignUpRequestFormGroup() {
		return new FormGroup<ConfirmSignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			SecretHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=/]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			ConfirmationCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/** Max length: 2048 */
		Description?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Minimum: 0 */
		Precedence?: number | null;
	}
	export interface CreateGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			Precedence: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName?: string | null;
		ProviderType?: IdentityProviderTypeProviderType | null;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		IdpIdentifiers?: Array<string>;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A container for information about an identity provider. */
	export interface IdentityProviderTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityProviderTypeFormGroup() {
		return new FormGroup<IdentityProviderTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: string;

		/** Required */
		ProviderType: IdentityProviderTypeProviderType;

		/** Required */
		ProviderDetails: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		IdpIdentifiers?: Array<string>;
	}
	export interface CreateIdentityProviderRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,

		/** Required */
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
	}
	export function CreateCreateIdentityProviderRequestFormGroup() {
		return new FormGroup<CreateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+')]),
			ProviderType: new FormControl<IdentityProviderTypeProviderType | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;

		/** Maximum items: 100 */
		Scopes?: Array<ResourceServerScopeType>;
	}

	/** A container for information about a resource server for a user pool. */
	export interface ResourceServerTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourceServerTypeFormGroup() {
		return new FormGroup<ResourceServerTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x5B\x5D-\x7E]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\w\s+=,.@-]+')]),
		});

	}


	/** A resource server scope. */
	export interface ResourceServerScopeType {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScopeName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScopeDescription: string;
	}

	/** A resource server scope. */
	export interface ResourceServerScopeTypeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScopeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScopeDescription: FormControl<string | null | undefined>,
	}
	export function CreateResourceServerScopeTypeFormGroup() {
		return new FormGroup<ResourceServerScopeTypeFormProperties>({
			ScopeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x2E\x30-\x5B\x5D-\x7E]+')]),
			ScopeDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface CreateResourceServerRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** Maximum items: 100 */
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface CreateResourceServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceServerRequestFormGroup() {
		return new FormGroup<CreateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x5B\x5D-\x7E]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\w\s+=,.@-]+')]),
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

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		JobId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		PreSignedUrl?: string | null;
		CreationDate?: Date | null;
		StartDate?: Date | null;
		CompletionDate?: Date | null;
		Status?: UserImportJobTypeStatus | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CloudWatchLogsRoleArn?: string | null;
		ImportedUsers?: number | null;
		SkippedUsers?: number | null;
		FailedUsers?: number | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		CompletionMessage?: string | null;
	}

	/** The user import job type. */
	export interface UserImportJobTypeFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		PreSignedUrl: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		CompletionDate: FormControl<Date | null | undefined>,
		Status: FormControl<UserImportJobTypeStatus | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		ImportedUsers: FormControl<number | null | undefined>,
		SkippedUsers: FormControl<number | null | undefined>,
		FailedUsers: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		CompletionMessage: FormControl<string | null | undefined>,
	}
	export function CreateUserImportJobTypeFormGroup() {
		return new FormGroup<UserImportJobTypeFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('import-[0-9a-zA-Z-]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			PreSignedUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			CompletionDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<UserImportJobTypeStatus | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			ImportedUsers: new FormControl<number | null | undefined>(undefined),
			SkippedUsers: new FormControl<number | null | undefined>(undefined),
			FailedUsers: new FormControl<number | null | undefined>(undefined),
			CompletionMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w]+')]),
		});

	}

	export enum UserImportJobTypeStatus { Created = 0, Pending = 1, InProgress = 2, Stopping = 3, Expired = 4, Stopped = 5, Failed = 6, Succeeded = 7 }


	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		JobName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		CloudWatchLogsRoleArn: string;
	}

	/** Represents the request to create the user import job. */
	export interface CreateUserImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserImportJobRequestFormGroup() {
		return new FormGroup<CreateUserImportJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		SchemaAttributes?: Array<SchemaAttributeType>;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
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

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		Domain?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CustomDomain?: string | null;

		/** The configuration for creating a new user profile. */
		AdminCreateUserConfig?: AdminCreateUserConfigType;

		/** The user pool add-ons type. */
		UserPoolAddOns?: UserPoolAddOnsType;

		/** The username configuration type. */
		UsernameConfiguration?: UsernameConfigurationType;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;

		/** The data type for <code>AccountRecoverySetting</code>. */
		AccountRecoverySetting?: AccountRecoverySettingType;
	}

	/** A container for information about the user pool. */
	export interface UserPoolTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<UserPoolTypeStatus | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
		EstimatedNumberOfUsers: FormControl<number | null | undefined>,
		SmsConfigurationFailure: FormControl<string | null | undefined>,
		EmailConfigurationFailure: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CustomDomain: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolTypeFormGroup() {
		return new FormGroup<UserPoolTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			Status: new FormControl<UserPoolTypeStatus | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			MfaConfiguration: new FormControl<UserPoolTypeMfaConfiguration | null | undefined>(undefined),
			EstimatedNumberOfUsers: new FormControl<number | null | undefined>(undefined),
			SmsConfigurationFailure: new FormControl<string | null | undefined>(undefined),
			EmailConfigurationFailure: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			CustomDomain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
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

		/**
		 * Minimum: 6
		 * Maximum: 99
		 */
		MinimumLength?: number | null;
		RequireUppercase?: boolean | null;
		RequireLowercase?: boolean | null;
		RequireNumbers?: boolean | null;
		RequireSymbols?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 365
		 */
		TemporaryPasswordValidityDays?: number | null;
	}

	/** The password policy type. */
	export interface PasswordPolicyTypeFormProperties {

		/**
		 * Minimum: 6
		 * Maximum: 99
		 */
		MinimumLength: FormControl<number | null | undefined>,
		RequireUppercase: FormControl<boolean | null | undefined>,
		RequireLowercase: FormControl<boolean | null | undefined>,
		RequireNumbers: FormControl<boolean | null | undefined>,
		RequireSymbols: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 365
		 */
		TemporaryPasswordValidityDays: FormControl<number | null | undefined>,
	}
	export function CreatePasswordPolicyTypeFormGroup() {
		return new FormGroup<PasswordPolicyTypeFormProperties>({
			MinimumLength: new FormControl<number | null | undefined>(undefined, [Validators.min(6), Validators.max(99)]),
			RequireUppercase: new FormControl<boolean | null | undefined>(undefined),
			RequireLowercase: new FormControl<boolean | null | undefined>(undefined),
			RequireNumbers: new FormControl<boolean | null | undefined>(undefined),
			RequireSymbols: new FormControl<boolean | null | undefined>(undefined),
			TemporaryPasswordValidityDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(365)]),
		});

	}


	/** Specifies the configuration for AWS Lambda triggers. */
	export interface LambdaConfigType {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreSignUp?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CustomMessage?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PostConfirmation?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreAuthentication?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PostAuthentication?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		DefineAuthChallenge?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CreateAuthChallenge?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		VerifyAuthChallengeResponse?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreTokenGeneration?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		UserMigration?: string | null;
	}

	/** Specifies the configuration for AWS Lambda triggers. */
	export interface LambdaConfigTypeFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreSignUp: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CustomMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PostConfirmation: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreAuthentication: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PostAuthentication: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		DefineAuthChallenge: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CreateAuthChallenge: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		VerifyAuthChallengeResponse: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		PreTokenGeneration: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		UserMigration: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConfigTypeFormGroup() {
		return new FormGroup<LambdaConfigTypeFormProperties>({
			PreSignUp: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			CustomMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			PostConfirmation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			PreAuthentication: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			PostAuthentication: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			DefineAuthChallenge: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			CreateAuthChallenge: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			VerifyAuthChallengeResponse: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			PreTokenGeneration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			UserMigration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
		});

	}

	export enum UserPoolTypeStatus { Enabled = 0, Disabled = 1 }

	export enum VerifiedAttributeType { phone_number = 0, email = 1 }

	export enum AliasAttributeType { phone_number = 0, email = 1, preferred_username = 2 }

	export enum UsernameAttributeType { phone_number = 0, email = 1 }


	/** The template for verification messages. */
	export interface VerificationMessageTemplateType {

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsMessage?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessage?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubject?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessageByLink?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubjectByLink?: string | null;
		DefaultEmailOption?: VerificationMessageTemplateTypeDefaultEmailOption | null;
	}

	/** The template for verification messages. */
	export interface VerificationMessageTemplateTypeFormProperties {

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubject: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessageByLink: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubjectByLink: FormControl<string | null | undefined>,
		DefaultEmailOption: FormControl<VerificationMessageTemplateTypeDefaultEmailOption | null | undefined>,
	}
	export function CreateVerificationMessageTemplateTypeFormGroup() {
		return new FormGroup<VerificationMessageTemplateTypeFormProperties>({
			SmsMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			EmailMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailSubject: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
			EmailMessageByLink: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{##[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*##\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailSubjectByLink: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
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

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		SourceArn?: string | null;
		ReplyToEmailAddress?: string | null;
		EmailSendingAccount?: EmailConfigurationTypeEmailSendingAccount | null;
		From?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ConfigurationSet?: string | null;
	}

	/** The email configuration type. */
	export interface EmailConfigurationTypeFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		SourceArn: FormControl<string | null | undefined>,
		ReplyToEmailAddress: FormControl<string | null | undefined>,
		EmailSendingAccount: FormControl<EmailConfigurationTypeEmailSendingAccount | null | undefined>,
		From: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ConfigurationSet: FormControl<string | null | undefined>,
	}
	export function CreateEmailConfigurationTypeFormGroup() {
		return new FormGroup<EmailConfigurationTypeFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			ReplyToEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+@[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			EmailSendingAccount: new FormControl<EmailConfigurationTypeEmailSendingAccount | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined),
			ConfigurationSet: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
		});

	}

	export enum EmailConfigurationTypeEmailSendingAccount { COGNITO_DEFAULT = 0, DEVELOPER = 1 }


	/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationType {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SnsCallerArn: string;
		ExternalId?: string | null;
	}

	/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
	export interface SmsConfigurationTypeFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SnsCallerArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateSmsConfigurationTypeFormGroup() {
		return new FormGroup<SmsConfigurationTypeFormProperties>({
			SnsCallerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
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

		/**
		 * Minimum: 0
		 * Maximum: 365
		 */
		UnusedAccountValidityDays?: number | null;

		/** The message template structure. */
		InviteMessageTemplate?: MessageTemplateType;
	}

	/** The configuration for creating a new user profile. */
	export interface AdminCreateUserConfigTypeFormProperties {
		AllowAdminCreateUserOnly: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 365
		 */
		UnusedAccountValidityDays: FormControl<number | null | undefined>,
	}
	export function CreateAdminCreateUserConfigTypeFormGroup() {
		return new FormGroup<AdminCreateUserConfigTypeFormProperties>({
			AllowAdminCreateUserOnly: new FormControl<boolean | null | undefined>(undefined),
			UnusedAccountValidityDays: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(365)]),
		});

	}


	/** The message template structure. */
	export interface MessageTemplateType {

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SMSMessage?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessage?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubject?: string | null;
	}

	/** The message template structure. */
	export interface MessageTemplateTypeFormProperties {

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SMSMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailSubject: FormControl<string | null | undefined>,
	}
	export function CreateMessageTemplateTypeFormGroup() {
		return new FormGroup<MessageTemplateTypeFormProperties>({
			SMSMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			EmailMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailSubject: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
		});

	}


	/** The user pool add-ons type. */
	export interface UserPoolAddOnsType {

		/** Required */
		AdvancedSecurityMode: UserPoolAddOnsTypeAdvancedSecurityMode;
	}

	/** The user pool add-ons type. */
	export interface UserPoolAddOnsTypeFormProperties {

		/** Required */
		AdvancedSecurityMode: FormControl<UserPoolAddOnsTypeAdvancedSecurityMode | null | undefined>,
	}
	export function CreateUserPoolAddOnsTypeFormGroup() {
		return new FormGroup<UserPoolAddOnsTypeFormProperties>({
			AdvancedSecurityMode: new FormControl<UserPoolAddOnsTypeAdvancedSecurityMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserPoolAddOnsTypeAdvancedSecurityMode { OFF = 0, AUDIT = 1, ENFORCED = 2 }


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

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
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

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 2
		 */
		Priority: number;

		/** Required */
		Name: RecoveryOptionTypeName;
	}

	/** A map containing a priority as a key, and recovery method name as a value. */
	export interface RecoveryOptionTypeFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 2
		 */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<RecoveryOptionTypeName | null | undefined>,
	}
	export function CreateRecoveryOptionTypeFormGroup() {
		return new FormGroup<RecoveryOptionTypeFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(2)]),
			Name: new FormControl<RecoveryOptionTypeName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecoveryOptionTypeName { verified_email = 0, verified_phone_number = 1, admin_only = 2 }


	/** Represents the request to create a user pool. */
	export interface CreateUserPoolRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PoolName: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;
		AliasAttributes?: Array<AliasAttributeType>;
		UsernameAttributes?: Array<UsernameAttributeType>;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
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

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PoolName: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateCreateUserPoolRequestFormGroup() {
		return new FormGroup<CreateUserPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientSecret?: string | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CallbackURLs?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		LogoutURLs?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		AllowedOAuthFlows?: Array<OAuthFlowType>;

		/** Maximum items: 50 */
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
	}

	/** Contains information about a user pool client. */
	export interface UserPoolClientTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientSecret: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
	}
	export function CreateUserPoolClientTypeFormGroup() {
		return new FormGroup<UserPoolClientTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			ClientSecret: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\w+]+')]),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3650)]),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>(undefined),
		});

	}

	export enum ExplicitAuthFlowsType { ADMIN_NO_SRP_AUTH = 0, CUSTOM_AUTH_FLOW_ONLY = 1, USER_PASSWORD_AUTH = 2, ALLOW_ADMIN_USER_PASSWORD_AUTH = 3, ALLOW_CUSTOM_AUTH = 4, ALLOW_USER_PASSWORD_AUTH = 5, ALLOW_USER_SRP_AUTH = 6, ALLOW_REFRESH_TOKEN_AUTH = 7 }

	export enum OAuthFlowType { code = 0, implicit = 1, client_credentials = 2 }


	/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationType {

		/** Required */
		ApplicationId: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Required */
		ExternalId: string;
		UserDataShared?: boolean | null;
	}

	/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
	export interface AnalyticsConfigurationTypeFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
		UserDataShared: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyticsConfigurationTypeFormGroup() {
		return new FormGroup<AnalyticsConfigurationTypeFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9a-fA-F]+$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserDataShared: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UserPoolClientTypePreventUserExistenceErrors { LEGACY = 0, ENABLED = 1 }


	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName: string;
		GenerateSecret?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CallbackURLs?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		LogoutURLs?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		AllowedOAuthFlows?: Array<OAuthFlowType>;

		/** Maximum items: 50 */
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
	}

	/** Represents the request to create a user pool client. */
	export interface CreateUserPoolClientRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName: FormControl<string | null | undefined>,
		GenerateSecret: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
	}
	export function CreateCreateUserPoolClientRequestFormGroup() {
		return new FormGroup<CreateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			GenerateSecret: new FormControl<boolean | null | undefined>(undefined),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3650)]),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CloudFrontDomain?: string | null;
	}
	export interface CreateUserPoolDomainResponseFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CloudFrontDomain: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPoolDomainResponseFormGroup() {
		return new FormGroup<CreateUserPoolDomainResponseFormProperties>({
			CloudFrontDomain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
		});

	}

	export interface CreateUserPoolDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}
	export interface CreateUserPoolDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPoolDomainRequestFormGroup() {
		return new FormGroup<CreateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}


	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigType {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		CertificateArn: string;
	}

	/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
	export interface CustomDomainConfigTypeFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomDomainConfigTypeFormGroup() {
		return new FormGroup<CustomDomainConfigTypeFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
		});

	}

	export interface DeleteGroupRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}
	export interface DeleteGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}

	export interface DeleteIdentityProviderRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: string;
	}
	export interface DeleteIdentityProviderRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityProviderRequestFormGroup() {
		return new FormGroup<DeleteIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: string;
	}
	export interface DeleteResourceServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceServerRequestFormGroup() {
		return new FormGroup<DeleteResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x5B\x5D-\x7E]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
		});

	}


	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}

	/** Represents the request to delete a user pool. */
	export interface DeleteUserPoolRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolRequestFormGroup() {
		return new FormGroup<DeleteUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}


	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;
	}

	/** Represents the request to delete a user pool client. */
	export interface DeleteUserPoolClientRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolClientRequestFormGroup() {
		return new FormGroup<DeleteUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}
	export interface DeleteUserPoolDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPoolDomainRequestFormGroup() {
		return new FormGroup<DeleteUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: string;
	}
	export interface DescribeIdentityProviderRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderRequestFormGroup() {
		return new FormGroup<DescribeIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: string;
	}
	export interface DescribeResourceServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceServerRequestFormGroup() {
		return new FormGroup<DescribeResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x5B\x5D-\x7E]+')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRiskConfigurationTypeFormGroup() {
		return new FormGroup<RiskConfigurationTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/** Required */
		EventAction: CompromisedCredentialsActionsTypeEventAction;
	}

	/** The compromised credentials actions type */
	export interface CompromisedCredentialsActionsTypeFormProperties {

		/** Required */
		EventAction: FormControl<CompromisedCredentialsActionsTypeEventAction | null | undefined>,
	}
	export function CreateCompromisedCredentialsActionsTypeFormGroup() {
		return new FormGroup<CompromisedCredentialsActionsTypeFormProperties>({
			EventAction: new FormControl<CompromisedCredentialsActionsTypeEventAction | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateNotifyConfigurationTypeFormGroup() {
		return new FormGroup<NotifyConfigurationTypeFormProperties>({
			From: new FormControl<string | null | undefined>(undefined),
			ReplyTo: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
		});

	}


	/** The notify email type. */
	export interface NotifyEmailType {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		Subject: string;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		HtmlBody?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		TextBody?: string | null;
	}

	/** The notify email type. */
	export interface NotifyEmailTypeFormProperties {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		Subject: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		HtmlBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		TextBody: FormControl<string | null | undefined>,
	}
	export function CreateNotifyEmailTypeFormGroup() {
		return new FormGroup<NotifyEmailTypeFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
			HtmlBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+')]),
			TextBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+')]),
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

		/** Required */
		Notify: boolean;

		/** Required */
		EventAction: AccountTakeoverActionTypeEventAction;
	}

	/** Account takeover action type. */
	export interface AccountTakeoverActionTypeFormProperties {

		/** Required */
		Notify: FormControl<boolean | null | undefined>,

		/** Required */
		EventAction: FormControl<AccountTakeoverActionTypeEventAction | null | undefined>,
	}
	export function CreateAccountTakeoverActionTypeFormGroup() {
		return new FormGroup<AccountTakeoverActionTypeFormProperties>({
			Notify: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EventAction: new FormControl<AccountTakeoverActionTypeEventAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccountTakeoverActionTypeEventAction { BLOCK = 0, MFA_IF_CONFIGURED = 1, MFA_REQUIRED = 2, NO_ACTION = 3 }


	/** The type of the configuration to override the risk decision. */
	export interface RiskExceptionConfigurationType {

		/** Maximum items: 20 */
		BlockedIPRangeList?: Array<string>;

		/** Maximum items: 20 */
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;
	}
	export interface DescribeRiskConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRiskConfigurationRequestFormGroup() {
		return new FormGroup<DescribeRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: string;
	}

	/** Represents the request to describe the user import job. */
	export interface DescribeUserImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserImportJobRequestFormGroup() {
		return new FormGroup<DescribeUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('import-[0-9a-zA-Z-]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}

	/** Represents the request to describe the user pool. */
	export interface DescribeUserPoolRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolRequestFormGroup() {
		return new FormGroup<DescribeUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;
	}

	/** Represents the request to describe a user pool client. */
	export interface DescribeUserPoolClientRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolClientRequestFormGroup() {
		return new FormGroup<DescribeUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;
		AWSAccountId?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		Domain?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 3
		 */
		S3Bucket?: string | null;
		CloudFrontDistribution?: string | null;

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		Version?: string | null;
		Status?: DomainDescriptionTypeStatus | null;

		/** The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application. */
		CustomDomainConfig?: CustomDomainConfigType;
	}

	/** A container for information about a domain. */
	export interface DomainDescriptionTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
		AWSAccountId: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 3
		 */
		S3Bucket: FormControl<string | null | undefined>,
		CloudFrontDistribution: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,
		Status: FormControl<DomainDescriptionTypeStatus | null | undefined>,
	}
	export function CreateDomainDescriptionTypeFormGroup() {
		return new FormGroup<DomainDescriptionTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			AWSAccountId: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(1024), Validators.pattern('^[0-9A-Za-z\.\-_]*(?<!\.)$')]),
			CloudFrontDistribution: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20)]),
			Status: new FormControl<DomainDescriptionTypeStatus | null | undefined>(undefined),
		});

	}

	export enum DomainDescriptionTypeStatus { CREATING = 0, DELETING = 1, UPDATING = 2, ACTIVE = 3, FAILED = 4 }

	export interface DescribeUserPoolDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: string;
	}
	export interface DescribeUserPoolDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserPoolDomainRequestFormGroup() {
		return new FormGroup<DescribeUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
		});

	}


	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequest {
		AccessToken?: string | null;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;
	}

	/** Represents the request to forget the device. */
	export interface ForgetDeviceRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
	}
	export function CreateForgetDeviceRequestFormGroup() {
		return new FormGroup<ForgetDeviceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
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

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName?: string | null;
	}

	/** The code delivery details being returned from the server. */
	export interface CodeDeliveryDetailsTypeFormProperties {
		Destination: FormControl<string | null | undefined>,
		DeliveryMedium: FormControl<MFAOptionTypeDeliveryMedium | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateCodeDeliveryDetailsTypeFormGroup() {
		return new FormGroup<CodeDeliveryDetailsTypeFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			DeliveryMedium: new FormControl<MFAOptionTypeDeliveryMedium | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash?: string | null;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to reset a user's password. */
	export interface ForgotPasswordRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateForgotPasswordRequestFormGroup() {
		return new FormGroup<ForgotPasswordRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			SecretHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=/]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;
		CSVHeader?: Array<string>;
	}

	/** Represents the response from the server to the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderResponseFormGroup() {
		return new FormGroup<GetCSVHeaderResponseFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}


	/** Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}

	/** Represents the request to get the header information for the .csv file for the user import job. */
	export interface GetCSVHeaderRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetCSVHeaderRequestFormGroup() {
		return new FormGroup<GetCSVHeaderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;
		AccessToken?: string | null;
	}

	/** Represents the request to get the device. */
	export interface GetDeviceRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}
	export interface GetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		IdpIdentifier: string;
	}
	export interface GetIdentityProviderByIdentifierRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		IdpIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityProviderByIdentifierRequestFormGroup() {
		return new FormGroup<GetIdentityProviderByIdentifierRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			IdpIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[\w\s+=.@-]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}

	/** Request to get a signing certificate from Cognito. */
	export interface GetSigningCertificateRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningCertificateRequestFormGroup() {
		return new FormGroup<GetSigningCertificateRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;
		ImageUrl?: string | null;
		CSS?: string | null;
		CSSVersion?: string | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A container for the UI customization information for a user pool's built-in app UI. */
	export interface UICustomizationTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		CSS: FormControl<string | null | undefined>,
		CSSVersion: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateUICustomizationTypeFormGroup() {
		return new FormGroup<UICustomizationTypeFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			CSS: new FormControl<string | null | undefined>(undefined),
			CSSVersion: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetUICustomizationRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;
	}
	export interface GetUICustomizationRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateGetUICustomizationRequestFormGroup() {
		return new FormGroup<GetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
		});

	}


	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponse {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** Required */
		UserAttributes: Array<AttributeType>;
		MFAOptions?: Array<MFAOptionType>;
		PreferredMfaSetting?: string | null;
		UserMFASettingList?: Array<string>;
	}

	/** Represents the response from the server from the request to get information about the user. */
	export interface GetUserResponseFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
		PreferredMfaSetting: FormControl<string | null | undefined>,
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
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

		/** Required */
		AccessToken: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: string;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to get user attribute verification. */
	export interface GetUserAttributeVerificationCodeRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserAttributeVerificationCodeRequestFormGroup() {
		return new FormGroup<GetUserAttributeVerificationCodeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsAuthenticationMessage?: string | null;

		/** The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role that you provide for your AWS account. */
		SmsConfiguration?: SmsConfigurationType;
	}

	/** The SMS text message multi-factor authentication (MFA) configuration type. */
	export interface SmsMfaConfigTypeFormProperties {

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
	}
	export function CreateSmsMfaConfigTypeFormGroup() {
		return new FormGroup<SmsMfaConfigTypeFormProperties>({
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
	}
	export interface GetUserPoolMfaConfigRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<GetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
		});

	}


	/** Initiates the authentication response. */
	export interface InitiateAuthResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** Initiates the authentication response. */
	export interface InitiateAuthResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthResponseFormGroup() {
		return new FormGroup<InitiateAuthResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** Initiates the authentication request. */
	export interface InitiateAuthRequest {

		/** Required */
		AuthFlow: AdminInitiateAuthRequestAuthFlow;
		AuthParameters?: AuthParametersType;
		ClientMetadata?: ClientMetadataType;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;
	}

	/** Initiates the authentication request. */
	export interface InitiateAuthRequestFormProperties {

		/** Required */
		AuthFlow: FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateAuthRequestFormGroup() {
		return new FormGroup<InitiateAuthRequestFormProperties>({
			AuthFlow: new FormControl<AdminInitiateAuthRequestAuthFlow | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
		});

	}


	/** Represents the response to list devices. */
	export interface ListDevicesResponse {
		Devices?: Array<DeviceType>;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Represents the response to list devices. */
	export interface ListDevicesResponseFormProperties {

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the request to list the devices. */
	export interface ListDevicesRequest {

		/** Required */
		AccessToken: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Represents the request to list the devices. */
	export interface ListDevicesRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListGroupsResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListGroupsRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListGroupsRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListIdentityProvidersResponse {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Providers: Array<ProviderDescription>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListIdentityProvidersResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersResponseFormGroup() {
		return new FormGroup<ListIdentityProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** A container for identity provider details. */
	export interface ProviderDescription {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName?: string | null;
		ProviderType?: IdentityProviderTypeProviderType | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A container for identity provider details. */
	export interface ProviderDescriptionFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
		ProviderType: FormControl<IdentityProviderTypeProviderType | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateProviderDescriptionFormGroup() {
		return new FormGroup<ProviderDescriptionFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			ProviderType: new FormControl<IdentityProviderTypeProviderType | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListIdentityProvidersRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		MaxResults?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListIdentityProvidersRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersRequestFormGroup() {
		return new FormGroup<ListIdentityProvidersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListResourceServersResponse {

		/** Required */
		ResourceServers: Array<ResourceServerType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListResourceServersResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceServersResponseFormGroup() {
		return new FormGroup<ListResourceServersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListResourceServersRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListResourceServersRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceServersRequestFormGroup() {
		return new FormGroup<ListResourceServersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
		});

	}


	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		UserImportJobs?: Array<UserImportJobType>;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Represents the response from the server to the request to list the user import jobs. */
	export interface ListUserImportJobsResponseFormProperties {

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserImportJobsResponseFormGroup() {
		return new FormGroup<ListUserImportJobsResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: number;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** Represents the request to list the user import jobs. */
	export interface ListUserImportJobsRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserImportJobsRequestFormGroup() {
		return new FormGroup<ListUserImportJobsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(60)]),
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponse {
		UserPoolClients?: Array<UserPoolClientDescription>;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Represents the response from the server that lists user pool clients. */
	export interface ListUserPoolClientsResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolClientsResponseFormGroup() {
		return new FormGroup<ListUserPoolClientsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** The description of the user pool client. */
	export interface UserPoolClientDescription {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName?: string | null;
	}

	/** The description of the user pool client. */
	export interface UserPoolClientDescriptionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolClientDescriptionFormGroup() {
		return new FormGroup<UserPoolClientDescriptionFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
		});

	}


	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Represents the request to list the user pool clients. */
	export interface ListUserPoolClientsRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolClientsRequestFormGroup() {
		return new FormGroup<ListUserPoolClientsRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponse {
		UserPools?: Array<UserPoolDescriptionType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Represents the response to list user pools. */
	export interface ListUserPoolsResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoolsResponseFormGroup() {
		return new FormGroup<ListUserPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** A user pool description. */
	export interface UserPoolDescriptionType {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		Status?: UserPoolTypeStatus | null;
		LastModifiedDate?: Date | null;
		CreationDate?: Date | null;
	}

	/** A user pool description. */
	export interface UserPoolDescriptionTypeFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<UserPoolTypeStatus | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserPoolDescriptionTypeFormGroup() {
		return new FormGroup<UserPoolDescriptionTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			Status: new FormControl<UserPoolTypeStatus | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequest {

		/** Min length: 1 */
		NextToken?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: number;
	}

	/** Represents the request to list user pools. */
	export interface ListUserPoolsRequestFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUserPoolsRequestFormGroup() {
		return new FormGroup<ListUserPoolsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(60)]),
		});

	}


	/** The response from the request to list users. */
	export interface ListUsersResponse {
		Users?: Array<UserType>;

		/** Min length: 1 */
		PaginationToken?: string | null;
	}

	/** The response from the request to list users. */
	export interface ListUsersResponseFormProperties {

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Represents the request to list users. */
	export interface ListUsersRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;
		AttributesToGet?: Array<string>;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		PaginationToken?: string | null;

		/** Max length: 256 */
		Filter?: string | null;
	}

	/** Represents the request to list users. */
	export interface ListUsersRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		PaginationToken: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Filter: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			PaginationToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
			Filter: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListUsersInGroupResponse {
		Users?: Array<UserType>;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListUsersInGroupResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersInGroupResponseFormGroup() {
		return new FormGroup<ListUsersInGroupResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListUsersInGroupRequest {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}
	export interface ListUsersInGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 60
		 */
		Limit: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersInGroupRequestFormGroup() {
		return new FormGroup<ListUsersInGroupRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash?: string | null;

		/** Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security. */
		UserContextData?: UserContextDataType;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/** <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsMetadata?: AnalyticsMetadataType;
		ClientMetadata?: ClientMetadataType;
	}

	/** Represents the request to resend the confirmation code. */
	export interface ResendConfirmationCodeRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateResendConfirmationCodeRequestFormGroup() {
		return new FormGroup<ResendConfirmationCodeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			SecretHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=/]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
		});

	}


	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponse {
		ChallengeName?: AdminInitiateAuthResponseChallengeName | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
		ChallengeParameters?: ChallengeParametersType;

		/** The authentication result. */
		AuthenticationResult?: AuthenticationResultType;
	}

	/** The response to respond to the authentication challenge. */
	export interface RespondToAuthChallengeResponseFormProperties {
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeResponseFormGroup() {
		return new FormGroup<RespondToAuthChallengeResponseFormProperties>({
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The request to respond to an authentication challenge. */
	export interface RespondToAuthChallengeRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/** Required */
		ChallengeName: AdminInitiateAuthResponseChallengeName;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		ChallengeName: FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateRespondToAuthChallengeRequestFormGroup() {
		return new FormGroup<RespondToAuthChallengeRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			ChallengeName: new FormControl<AdminInitiateAuthResponseChallengeName | null | undefined>(undefined, [Validators.required]),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;

		/** The compromised credentials risk configuration type. */
		CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

		/** Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover. */
		AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

		/** The type of the configuration to override the risk decision. */
		RiskExceptionConfiguration?: RiskExceptionConfigurationType;
	}
	export interface SetRiskConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateSetRiskConfigurationRequestFormGroup() {
		return new FormGroup<SetRiskConfigurationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;
		CSS?: string | null;
		ImageFile?: string | null;
	}
	export interface SetUICustomizationRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
		CSS: FormControl<string | null | undefined>,
		ImageFile: FormControl<string | null | undefined>,
	}
	export function CreateSetUICustomizationRequestFormGroup() {
		return new FormGroup<SetUICustomizationRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
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

		/** Required */
		AccessToken: string;
	}
	export interface SetUserMFAPreferenceRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateSetUserMFAPreferenceRequestFormGroup() {
		return new FormGroup<SetUserMFAPreferenceRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/** The SMS text message multi-factor authentication (MFA) configuration type. */
		SmsMfaConfiguration?: SmsMfaConfigType;

		/** The type used for enabling software token MFA at the user pool level. */
		SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
		MfaConfiguration?: UserPoolTypeMfaConfiguration | null;
	}
	export interface SetUserPoolMfaConfigRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateSetUserPoolMfaConfigRequestFormGroup() {
		return new FormGroup<SetUserPoolMfaConfigRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
		});

	}


	/** The response from the server for a registration request. */
	export interface SignUpResponse {

		/** Required */
		UserConfirmed: boolean;

		/** The code delivery details being returned from the server. */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		SecretHash: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 6
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateSignUpRequestFormGroup() {
		return new FormGroup<SignUpRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			SecretHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=/]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(256), Validators.pattern('[\S]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: string;
	}

	/** Represents the request to start the user import job. */
	export interface StartUserImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartUserImportJobRequestFormGroup() {
		return new FormGroup<StartUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('import-[0-9a-zA-Z-]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: string;
	}

	/** Represents the request to stop the user import job. */
	export interface StopUserImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopUserImportJobRequestFormGroup() {
		return new FormGroup<StopUserImportJobRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('import-[0-9a-zA-Z-]+')]),
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;

		/** Required */
		Tags: UserPoolTagsType;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		EventId: string;

		/** Required */
		FeedbackToken: string;

		/** Required */
		FeedbackValue: EventFeedbackTypeFeedbackValue;
	}
	export interface UpdateAuthEventFeedbackRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		EventId: FormControl<string | null | undefined>,

		/** Required */
		FeedbackToken: FormControl<string | null | undefined>,

		/** Required */
		FeedbackValue: FormControl<EventFeedbackTypeFeedbackValue | null | undefined>,
	}
	export function CreateUpdateAuthEventFeedbackRequestFormGroup() {
		return new FormGroup<UpdateAuthEventFeedbackRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			EventId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[\w+-]+')]),
			FeedbackToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			FeedbackValue: new FormControl<EventFeedbackTypeFeedbackValue | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: string;
		DeviceRememberedStatus?: AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null;
	}

	/** Represents the request to update the device status. */
	export interface UpdateDeviceStatusRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		DeviceKey: FormControl<string | null | undefined>,
		DeviceRememberedStatus: FormControl<AdminUpdateDeviceStatusRequestDeviceRememberedStatus | null | undefined>,
	}
	export function CreateUpdateDeviceStatusRequestFormGroup() {
		return new FormGroup<UpdateDeviceStatusRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			DeviceKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-f-]+')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/** Max length: 2048 */
		Description?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Minimum: 0 */
		Precedence?: number | null;
	}
	export interface UpdateGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Precedence: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?')]),
			Precedence: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: string;
		ProviderDetails?: ProviderDetailsType;
		AttributeMapping?: AttributeMappingType;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		IdpIdentifiers?: Array<string>;
	}
	export interface UpdateIdentityProviderRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/** Maximum items: 100 */
		Scopes?: Array<ResourceServerScopeType>;
	}
	export interface UpdateResourceServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identifier: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceServerRequestFormGroup() {
		return new FormGroup<UpdateResourceServerRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\x21\x23-\x5B\x5D-\x7E]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\w\s+=,.@-]+')]),
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
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/** The policy associated with a user pool. */
		Policies?: UserPoolPolicyType;

		/** Specifies the configuration for AWS Lambda triggers. */
		LambdaConfig?: LambdaConfigType;
		AutoVerifiedAttributes?: Array<VerifiedAttributeType>;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage?: string | null;

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage?: string | null;

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject?: string | null;

		/** The template for verification messages. */
		VerificationMessageTemplate?: VerificationMessageTemplateType;

		/**
		 * Max length: 140
		 * Min length: 6
		 */
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 20000
		 * Min length: 6
		 */
		EmailVerificationMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 1
		 */
		EmailVerificationSubject: FormControl<string | null | undefined>,

		/**
		 * Max length: 140
		 * Min length: 6
		 */
		SmsAuthenticationMessage: FormControl<string | null | undefined>,
		MfaConfiguration: FormControl<UserPoolTypeMfaConfiguration | null | undefined>,
	}
	export function CreateUpdateUserPoolRequestFormGroup() {
		return new FormGroup<UpdateUserPoolRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			SmsVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
			EmailVerificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(20000), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*')]),
			EmailVerificationSubject: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+')]),
			SmsAuthenticationMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(140), Validators.pattern('.*\{####\}.*')]),
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

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity?: number | null;
		ReadAttributes?: Array<string>;
		WriteAttributes?: Array<string>;
		ExplicitAuthFlows?: Array<ExplicitAuthFlowsType>;
		SupportedIdentityProviders?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		CallbackURLs?: Array<string>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		LogoutURLs?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		AllowedOAuthFlows?: Array<OAuthFlowType>;

		/** Maximum items: 50 */
		AllowedOAuthScopes?: Array<string>;
		AllowedOAuthFlowsUserPoolClient?: boolean | null;

		/** <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user pool.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note> */
		AnalyticsConfiguration?: AnalyticsConfigurationType;
		PreventUserExistenceErrors?: UserPoolClientTypePreventUserExistenceErrors | null;
	}

	/** Represents the request to update the user pool client. */
	export interface UpdateUserPoolClientRequestFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 3650
		 */
		RefreshTokenValidity: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultRedirectURI: FormControl<string | null | undefined>,
		AllowedOAuthFlowsUserPoolClient: FormControl<boolean | null | undefined>,
		PreventUserExistenceErrors: FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>,
	}
	export function CreateUpdateUserPoolClientRequestFormGroup() {
		return new FormGroup<UpdateUserPoolClientRequestFormProperties>({
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+]+')]),
			ClientName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			RefreshTokenValidity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3650)]),
			DefaultRedirectURI: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			AllowedOAuthFlowsUserPoolClient: new FormControl<boolean | null | undefined>(undefined),
			PreventUserExistenceErrors: new FormControl<UserPoolClientTypePreventUserExistenceErrors | null | undefined>(undefined),
		});

	}


	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponse {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CloudFrontDomain?: string | null;
	}

	/** The UpdateUserPoolDomain response output. */
	export interface UpdateUserPoolDomainResponseFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CloudFrontDomain: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPoolDomainResponseFormGroup() {
		return new FormGroup<UpdateUserPoolDomainResponseFormProperties>({
			CloudFrontDomain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
		});

	}


	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: string;

		/**
		 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
		 * Required
		 */
		CustomDomainConfig: CustomDomainConfigType;
	}

	/** The UpdateUserPoolDomain request input. */
	export interface UpdateUserPoolDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPoolId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPoolDomainRequestFormGroup() {
		return new FormGroup<UpdateUserPoolDomainRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$')]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
		});

	}

	export interface VerifySoftwareTokenResponse {
		Status?: VerifySoftwareTokenResponseStatus | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;
	}
	export interface VerifySoftwareTokenResponseFormProperties {
		Status: FormControl<VerifySoftwareTokenResponseStatus | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenResponseFormGroup() {
		return new FormGroup<VerifySoftwareTokenResponseFormProperties>({
			Status: new FormControl<VerifySoftwareTokenResponseStatus | null | undefined>(undefined),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export enum VerifySoftwareTokenResponseStatus { SUCCESS = 0, ERROR = 1 }

	export interface VerifySoftwareTokenRequest {
		AccessToken?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session?: string | null;

		/**
		 * Required
		 * Max length: 6
		 * Min length: 6
		 */
		UserCode: string;
		FriendlyDeviceName?: string | null;
	}
	export interface VerifySoftwareTokenRequestFormProperties {
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Session: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 6
		 * Min length: 6
		 */
		UserCode: FormControl<string | null | undefined>,
		FriendlyDeviceName: FormControl<string | null | undefined>,
	}
	export function CreateVerifySoftwareTokenRequestFormGroup() {
		return new FormGroup<VerifySoftwareTokenRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9-_=.]+')]),
			Session: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			UserCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+')]),
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

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Code: string;
	}

	/** Represents the request to verify user attributes. */
	export interface VerifyUserAttributeRequestFormProperties {

		/** Required */
		AccessToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Code: FormControl<string | null | undefined>,
	}
	export function CreateVerifyUserAttributeRequestFormGroup() {
		return new FormGroup<VerifyUserAttributeRequestFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[A-Za-z0-9-_=.]+')]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[\S]+')]),
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

