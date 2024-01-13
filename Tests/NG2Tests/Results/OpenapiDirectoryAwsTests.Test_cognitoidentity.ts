import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An object representing an Amazon Cognito identity pool. */
	export interface IdentityPool {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName: string;

		/** Required */
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName?: string | null;
		OpenIdConnectProviderARNs?: Array<string>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<string>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}

	/** An object representing an Amazon Cognito identity pool. */
	export interface IdentityPoolFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName: FormControl<string | null | undefined>,

		/** Required */
		AllowUnauthenticatedIdentities: FormControl<boolean | null | undefined>,
		AllowClassicFlow: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPoolFormGroup() {
		return new FormGroup<IdentityPoolFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			AllowUnauthenticatedIdentities: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AllowClassicFlow: new FormControl<boolean | null | undefined>(undefined),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w._-]+')]),
		});

	}

	export interface IdentityProviders {
	}
	export interface IdentityProvidersFormProperties {
	}
	export function CreateIdentityProvidersFormGroup() {
		return new FormGroup<IdentityProvidersFormProperties>({
		});

	}


	/** A provider representing an Amazon Cognito user pool and its client ID. */
	export interface CognitoIdentityProvider {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProviderName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId?: string | null;
		ServerSideTokenCheck?: boolean | null;
	}

	/** A provider representing an Amazon Cognito user pool and its client ID. */
	export interface CognitoIdentityProviderFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ProviderName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
		ServerSideTokenCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateCognitoIdentityProviderFormGroup() {
		return new FormGroup<CognitoIdentityProviderFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w._:/-]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w_]+')]),
			ServerSideTokenCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IdentityPoolTagsType {
	}
	export interface IdentityPoolTagsTypeFormProperties {
	}
	export function CreateIdentityPoolTagsTypeFormGroup() {
		return new FormGroup<IdentityPoolTagsTypeFormProperties>({
		});

	}


	/** Input to the CreateIdentityPool action. */
	export interface CreateIdentityPoolInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName: string;

		/** Required */
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName?: string | null;
		OpenIdConnectProviderARNs?: Array<string>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<string>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}

	/** Input to the CreateIdentityPool action. */
	export interface CreateIdentityPoolInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName: FormControl<string | null | undefined>,

		/** Required */
		AllowUnauthenticatedIdentities: FormControl<boolean | null | undefined>,
		AllowClassicFlow: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentityPoolInputFormGroup() {
		return new FormGroup<CreateIdentityPoolInputFormProperties>({
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
			AllowUnauthenticatedIdentities: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AllowClassicFlow: new FormControl<boolean | null | undefined>(undefined),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w._-]+')]),
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

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
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

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
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


	/** Returned in response to a successful <code>DeleteIdentities</code> operation. */
	export interface DeleteIdentitiesResponse {

		/** Maximum items: 60 */
		UnprocessedIdentityIds?: Array<UnprocessedIdentityId>;
	}

	/** Returned in response to a successful <code>DeleteIdentities</code> operation. */
	export interface DeleteIdentitiesResponseFormProperties {
	}
	export function CreateDeleteIdentitiesResponseFormGroup() {
		return new FormGroup<DeleteIdentitiesResponseFormProperties>({
		});

	}


	/** An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId. */
	export interface UnprocessedIdentityId {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
		ErrorCode?: UnprocessedIdentityIdErrorCode | null;
	}

	/** An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId. */
	export interface UnprocessedIdentityIdFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<UnprocessedIdentityIdErrorCode | null | undefined>,
	}
	export function CreateUnprocessedIdentityIdFormGroup() {
		return new FormGroup<UnprocessedIdentityIdFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			ErrorCode: new FormControl<UnprocessedIdentityIdErrorCode | null | undefined>(undefined),
		});

	}

	export enum UnprocessedIdentityIdErrorCode { AccessDenied = 0, InternalServerError = 1 }


	/** Input to the <code>DeleteIdentities</code> action. */
	export interface DeleteIdentitiesInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 60
		 */
		IdentityIdsToDelete: Array<string>;
	}

	/** Input to the <code>DeleteIdentities</code> action. */
	export interface DeleteIdentitiesInputFormProperties {
	}
	export function CreateDeleteIdentitiesInputFormGroup() {
		return new FormGroup<DeleteIdentitiesInputFormProperties>({
		});

	}


	/** Input to the DeleteIdentityPool action. */
	export interface DeleteIdentityPoolInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;
	}

	/** Input to the DeleteIdentityPool action. */
	export interface DeleteIdentityPoolInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityPoolInputFormGroup() {
		return new FormGroup<DeleteIdentityPoolInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
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


	/** A description of the identity. */
	export interface IdentityDescription {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
		Logins?: Array<string>;
		CreationDate?: Date | null;
		LastModifiedDate?: Date | null;
	}

	/** A description of the identity. */
	export interface IdentityDescriptionFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityDescriptionFormGroup() {
		return new FormGroup<IdentityDescriptionFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: string;
	}

	/** Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityInputFormGroup() {
		return new FormGroup<DescribeIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;
	}

	/** Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityPoolInputFormGroup() {
		return new FormGroup<DescribeIdentityPoolInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;

		/** Credentials for the provided identity ID. */
		Credentials?: Credentials;
	}

	/** Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetCredentialsForIdentityResponseFormGroup() {
		return new FormGroup<GetCredentialsForIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Credentials for the provided identity ID. */
	export interface Credentials {
		AccessKeyId?: string | null;
		SecretKey?: string | null;
		SessionToken?: string | null;
		Expiration?: Date | null;
	}

	/** Credentials for the provided identity ID. */
	export interface CredentialsFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		SecretKey: FormControl<string | null | undefined>,
		SessionToken: FormControl<string | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			SecretKey: new FormControl<string | null | undefined>(undefined),
			SessionToken: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Input to the <code>GetCredentialsForIdentity</code> action. */
	export interface GetCredentialsForIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: string;
		Logins?: LoginsMap;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CustomRoleArn?: string | null;
	}

	/** Input to the <code>GetCredentialsForIdentity</code> action. */
	export interface GetCredentialsForIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		CustomRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCredentialsForIdentityInputFormGroup() {
		return new FormGroup<GetCredentialsForIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			CustomRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface LoginsMap {
	}
	export interface LoginsMapFormProperties {
	}
	export function CreateLoginsMapFormGroup() {
		return new FormGroup<LoginsMapFormProperties>({
		});

	}

	export interface InvalidIdentityPoolConfigurationException {
	}
	export interface InvalidIdentityPoolConfigurationExceptionFormProperties {
	}
	export function CreateInvalidIdentityPoolConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidIdentityPoolConfigurationExceptionFormProperties>({
		});

	}

	export interface ExternalServiceException {
	}
	export interface ExternalServiceExceptionFormProperties {
	}
	export function CreateExternalServiceExceptionFormGroup() {
		return new FormGroup<ExternalServiceExceptionFormProperties>({
		});

	}


	/** Returned in response to a GetId request. */
	export interface GetIdResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
	}

	/** Returned in response to a GetId request. */
	export interface GetIdResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdResponseFormGroup() {
		return new FormGroup<GetIdResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Input to the GetId action. */
	export interface GetIdInput {

		/**
		 * Max length: 15
		 * Min length: 1
		 */
		AccountId?: string | null;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;
		Logins?: LoginsMap;
	}

	/** Input to the GetId action. */
	export interface GetIdInputFormProperties {

		/**
		 * Max length: 15
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdInputFormGroup() {
		return new FormGroup<GetIdInputFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(15), Validators.pattern('\d+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
		Roles?: RolesMap;
		RoleMappings?: RoleMappingMap;
	}

	/** Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoolRolesResponseFormGroup() {
		return new FormGroup<GetIdentityPoolRolesResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}

	export interface RolesMap {
	}
	export interface RolesMapFormProperties {
	}
	export function CreateRolesMapFormGroup() {
		return new FormGroup<RolesMapFormProperties>({
		});

	}

	export interface RoleMappingMap {
	}
	export interface RoleMappingMapFormProperties {
	}
	export function CreateRoleMappingMapFormGroup() {
		return new FormGroup<RoleMappingMapFormProperties>({
		});

	}


	/** Input to the <code>GetIdentityPoolRoles</code> action. */
	export interface GetIdentityPoolRolesInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;
	}

	/** Input to the <code>GetIdentityPoolRoles</code> action. */
	export interface GetIdentityPoolRolesInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoolRolesInputFormGroup() {
		return new FormGroup<GetIdentityPoolRolesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
		Token?: string | null;
	}

	/** Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenResponseFormGroup() {
		return new FormGroup<GetOpenIdTokenResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: string;
		Logins?: LoginsMap;
	}

	/** Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenInputFormGroup() {
		return new FormGroup<GetOpenIdTokenInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
		Token?: string | null;
	}

	/** Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenForDeveloperIdentityResponseFormGroup() {
		return new FormGroup<GetOpenIdTokenForDeveloperIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;

		/** Required */
		Logins: LoginsMap;

		/**
		 * Minimum: 1
		 * Maximum: 86400
		 */
		TokenDuration?: number | null;
	}

	/** Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 86400
		 */
		TokenDuration: FormControl<number | null | undefined>,
	}
	export function CreateGetOpenIdTokenForDeveloperIdentityInputFormGroup() {
		return new FormGroup<GetOpenIdTokenForDeveloperIdentityInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			TokenDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(86400)]),
		});

	}

	export interface DeveloperUserAlreadyRegisteredException {
	}
	export interface DeveloperUserAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateDeveloperUserAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<DeveloperUserAlreadyRegisteredExceptionFormProperties>({
		});

	}


	/** The response to a ListIdentities request. */
	export interface ListIdentitiesResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;
		Identities?: Array<IdentityDescription>;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** The response to a ListIdentities request. */
	export interface ListIdentitiesResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentitiesResponseFormGroup() {
		return new FormGroup<ListIdentitiesResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Input to the ListIdentities action. */
	export interface ListIdentitiesInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: number;

		/** Min length: 1 */
		NextToken?: string | null;
		HideDisabled?: boolean | null;
	}

	/** Input to the ListIdentities action. */
	export interface ListIdentitiesInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
		HideDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateListIdentitiesInputFormGroup() {
		return new FormGroup<ListIdentitiesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
			HideDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponse {
		IdentityPools?: Array<IdentityPoolShortDescription>;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponseFormProperties {

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoolsResponseFormGroup() {
		return new FormGroup<ListIdentityPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** A description of the identity pool. */
	export interface IdentityPoolShortDescription {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName?: string | null;
	}

	/** A description of the identity pool. */
	export interface IdentityPoolShortDescriptionFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IdentityPoolName: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPoolShortDescriptionFormGroup() {
		return new FormGroup<IdentityPoolShortDescriptionFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w\s+=,.@-]+')]),
		});

	}


	/** Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInput {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: number;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInputFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoolsInputFormGroup() {
		return new FormGroup<ListIdentityPoolsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: IdentityPoolTagsType;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
		DeveloperUserIdentifierList?: Array<string>;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupDeveloperIdentityResponseFormGroup() {
		return new FormGroup<LookupDeveloperIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DeveloperUserIdentifier?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults?: number | null;

		/** Min length: 1 */
		NextToken?: string | null;
	}

	/** Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DeveloperUserIdentifier: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 60
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupDeveloperIdentityInputFormGroup() {
		return new FormGroup<LookupDeveloperIdentityInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			DeveloperUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(60)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\S]+')]),
		});

	}


	/** Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponse {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId?: string | null;
	}

	/** Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponseFormProperties {

		/**
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateMergeDeveloperIdentitiesResponseFormGroup() {
		return new FormGroup<MergeDeveloperIdentitiesResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceUserIdentifier: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DestinationUserIdentifier: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;
	}

	/** Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceUserIdentifier: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DestinationUserIdentifier: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateMergeDeveloperIdentitiesInputFormGroup() {
		return new FormGroup<MergeDeveloperIdentitiesInputFormProperties>({
			SourceUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			DestinationUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w._-]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
		});

	}


	/** Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/** Required */
		Roles: RolesMap;
		RoleMappings?: RoleMappingMap;
	}

	/** Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateSetIdentityPoolRolesInputFormGroup() {
		return new FormGroup<SetIdentityPoolRolesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;

		/** Required */
		Tags: IdentityPoolTagsType;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: string;

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DeveloperUserIdentifier: string;
	}

	/** Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityPoolId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DeveloperProviderName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DeveloperUserIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUnlinkDeveloperIdentityInputFormGroup() {
		return new FormGroup<UnlinkDeveloperIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w._-]+')]),
			DeveloperUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInput {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: string;

		/** Required */
		Logins: LoginsMap;

		/** Required */
		LoginsToRemove: Array<string>;
	}

	/** Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInputFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateUnlinkIdentityInputFormGroup() {
		return new FormGroup<UnlinkIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(55), Validators.pattern('[\w-]+:[0-9a-f-]+')]),
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

	export interface UntagResourceInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export enum AmbiguousRoleResolutionType { AuthenticatedRole = 0, Deny = 1 }

	export enum ErrorCode { AccessDenied = 0, InternalServerError = 1 }

	export enum MappingRuleMatchType { Equals = 0, Contains = 1, StartsWith = 2, NotEqual = 3 }


	/** A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRule {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Claim: string;

		/** Required */
		MatchType: MappingRuleMatchType;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Value: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: string;
	}

	/** A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRuleFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Claim: FormControl<string | null | undefined>,

		/** Required */
		MatchType: FormControl<MappingRuleMatchType | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateMappingRuleFormGroup() {
		return new FormGroup<MappingRuleFormProperties>({
			Claim: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			MatchType: new FormControl<MappingRuleMatchType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export enum RoleMappingType { Token = 0, Rules = 1 }


	/** A container for rules. */
	export interface RulesConfigurationType {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Rules: Array<MappingRule>;
	}

	/** A container for rules. */
	export interface RulesConfigurationTypeFormProperties {
	}
	export function CreateRulesConfigurationTypeFormGroup() {
		return new FormGroup<RulesConfigurationTypeFormProperties>({
		});

	}


	/** A role mapping. */
	export interface RoleMapping {

		/** Required */
		Type: RoleMappingType;
		AmbiguousRoleResolution?: AmbiguousRoleResolutionType | null;

		/** A container for rules. */
		RulesConfiguration?: RulesConfigurationType;
	}

	/** A role mapping. */
	export interface RoleMappingFormProperties {

		/** Required */
		Type: FormControl<RoleMappingType | null | undefined>,
		AmbiguousRoleResolution: FormControl<AmbiguousRoleResolutionType | null | undefined>,
	}
	export function CreateRoleMappingFormGroup() {
		return new FormGroup<RoleMappingFormProperties>({
			Type: new FormControl<RoleMappingType | null | undefined>(undefined, [Validators.required]),
			AmbiguousRoleResolution: new FormControl<AmbiguousRoleResolutionType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool
		 * @return {IdentityPool} Success
		 */
		CreateIdentityPool(requestBody: CreateIdentityPoolInput): Observable<IdentityPool> {
			return this.http.post<IdentityPool>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities
		 * @return {DeleteIdentitiesResponse} Success
		 */
		DeleteIdentities(requestBody: DeleteIdentitiesInput): Observable<DeleteIdentitiesResponse> {
			return this.http.post<DeleteIdentitiesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool
		 * @return {void} Success
		 */
		DeleteIdentityPool(requestBody: DeleteIdentityPoolInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity
		 * @return {IdentityDescription} Success
		 */
		DescribeIdentity(requestBody: DescribeIdentityInput): Observable<IdentityDescription> {
			return this.http.post<IdentityDescription>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool
		 * @return {IdentityPool} Success
		 */
		DescribeIdentityPool(requestBody: DescribeIdentityPoolInput): Observable<IdentityPool> {
			return this.http.post<IdentityPool>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity
		 * @return {GetCredentialsForIdentityResponse} Success
		 */
		GetCredentialsForIdentity(requestBody: GetCredentialsForIdentityInput): Observable<GetCredentialsForIdentityResponse> {
			return this.http.post<GetCredentialsForIdentityResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetId
		 * @return {GetIdResponse} Success
		 */
		GetId(requestBody: GetIdInput): Observable<GetIdResponse> {
			return this.http.post<GetIdResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles
		 * @return {GetIdentityPoolRolesResponse} Success
		 */
		GetIdentityPoolRoles(requestBody: GetIdentityPoolRolesInput): Observable<GetIdentityPoolRolesResponse> {
			return this.http.post<GetIdentityPoolRolesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenId token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken
		 * @return {GetOpenIdTokenResponse} Success
		 */
		GetOpenIdToken(requestBody: GetOpenIdTokenInput): Observable<GetOpenIdTokenResponse> {
			return this.http.post<GetOpenIdTokenResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity
		 * @return {GetOpenIdTokenForDeveloperIdentityResponse} Success
		 */
		GetOpenIdTokenForDeveloperIdentity(requestBody: GetOpenIdTokenForDeveloperIdentityInput): Observable<GetOpenIdTokenForDeveloperIdentityResponse> {
			return this.http.post<GetOpenIdTokenForDeveloperIdentityResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.ListIdentities
		 * @return {ListIdentitiesResponse} Success
		 */
		ListIdentities(requestBody: ListIdentitiesInput): Observable<ListIdentitiesResponse> {
			return this.http.post<ListIdentitiesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.ListIdentities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools
		 * @return {ListIdentityPoolsResponse} Success
		 */
		ListIdentityPools(requestBody: ListIdentityPoolsInput): Observable<ListIdentityPoolsResponse> {
			return this.http.post<ListIdentityPoolsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity
		 * @return {LookupDeveloperIdentityResponse} Success
		 */
		LookupDeveloperIdentity(requestBody: LookupDeveloperIdentityInput): Observable<LookupDeveloperIdentityResponse> {
			return this.http.post<LookupDeveloperIdentityResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities
		 * @return {MergeDeveloperIdentitiesResponse} Success
		 */
		MergeDeveloperIdentities(requestBody: MergeDeveloperIdentitiesInput): Observable<MergeDeveloperIdentitiesResponse> {
			return this.http.post<MergeDeveloperIdentitiesResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles
		 * @return {void} Success
		 */
		SetIdentityPoolRoles(requestBody: SetIdentityPoolRolesInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Assigns a set of tags to an Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity
		 * @return {void} Success
		 */
		UnlinkDeveloperIdentity(requestBody: UnlinkDeveloperIdentityInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity
		 * @return {void} Success
		 */
		UnlinkIdentity(requestBody: UnlinkIdentityInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from an Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
		 * Post #X-Amz-Target=AWSCognitoIdentityService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
		 * Post #X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool
		 * @return {IdentityPool} Success
		 */
		UpdateIdentityPool(requestBody: IdentityPool): Observable<IdentityPool> {
			return this.http.post<IdentityPool>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.CreateIdentityPool' = 0 }

	export enum DeleteIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.DeleteIdentities' = 0 }

	export enum DeleteIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.DeleteIdentityPool' = 0 }

	export enum DescribeIdentityX_Amz_Target { 'AWSCognitoIdentityService.DescribeIdentity' = 0 }

	export enum DescribeIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.DescribeIdentityPool' = 0 }

	export enum GetCredentialsForIdentityX_Amz_Target { 'AWSCognitoIdentityService.GetCredentialsForIdentity' = 0 }

	export enum GetIdX_Amz_Target { 'AWSCognitoIdentityService.GetId' = 0 }

	export enum GetIdentityPoolRolesX_Amz_Target { 'AWSCognitoIdentityService.GetIdentityPoolRoles' = 0 }

	export enum GetOpenIdTokenX_Amz_Target { 'AWSCognitoIdentityService.GetOpenIdToken' = 0 }

	export enum GetOpenIdTokenForDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity' = 0 }

	export enum ListIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.ListIdentities' = 0 }

	export enum ListIdentityPoolsX_Amz_Target { 'AWSCognitoIdentityService.ListIdentityPools' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSCognitoIdentityService.ListTagsForResource' = 0 }

	export enum LookupDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.LookupDeveloperIdentity' = 0 }

	export enum MergeDeveloperIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.MergeDeveloperIdentities' = 0 }

	export enum SetIdentityPoolRolesX_Amz_Target { 'AWSCognitoIdentityService.SetIdentityPoolRoles' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSCognitoIdentityService.TagResource' = 0 }

	export enum UnlinkDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.UnlinkDeveloperIdentity' = 0 }

	export enum UnlinkIdentityX_Amz_Target { 'AWSCognitoIdentityService.UnlinkIdentity' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSCognitoIdentityService.UntagResource' = 0 }

	export enum UpdateIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.UpdateIdentityPool' = 0 }

}

