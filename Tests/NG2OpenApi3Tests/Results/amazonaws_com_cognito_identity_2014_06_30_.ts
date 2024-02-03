import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An object representing an Amazon Cognito identity pool. */
	export interface IdentityPool {

		/** Required */
		IdentityPoolId: string;

		/** Required */
		IdentityPoolName: string;

		/** Required */
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders;
		DeveloperProviderName?: string;
		OpenIdConnectProviderARNs?: Array<string>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<string>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}

	/** An object representing an Amazon Cognito identity pool. */
	export interface IdentityPoolFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		IdentityPoolName: FormControl<string | null | undefined>,

		/** Required */
		AllowUnauthenticatedIdentities: FormControl<boolean | null | undefined>,
		AllowClassicFlow: FormControl<boolean | null | undefined>,
		DeveloperProviderName: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPoolFormGroup() {
		return new FormGroup<IdentityPoolFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowUnauthenticatedIdentities: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AllowClassicFlow: new FormControl<boolean | null | undefined>(undefined),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined),
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
		ProviderName?: string;
		ClientId?: string;
		ServerSideTokenCheck?: boolean | null;
	}

	/** A provider representing an Amazon Cognito user pool and its client ID. */
	export interface CognitoIdentityProviderFormProperties {
		ProviderName: FormControl<string | null | undefined>,
		ClientId: FormControl<string | null | undefined>,
		ServerSideTokenCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateCognitoIdentityProviderFormGroup() {
		return new FormGroup<CognitoIdentityProviderFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined),
			ClientId: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		IdentityPoolName: string;

		/** Required */
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders;
		DeveloperProviderName?: string;
		OpenIdConnectProviderARNs?: Array<string>;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider>;
		SamlProviderARNs?: Array<string>;
		IdentityPoolTags?: IdentityPoolTagsType;
	}

	/** Input to the CreateIdentityPool action. */
	export interface CreateIdentityPoolInputFormProperties {

		/** Required */
		IdentityPoolName: FormControl<string | null | undefined>,

		/** Required */
		AllowUnauthenticatedIdentities: FormControl<boolean | null | undefined>,
		AllowClassicFlow: FormControl<boolean | null | undefined>,
		DeveloperProviderName: FormControl<string | null | undefined>,
	}
	export function CreateCreateIdentityPoolInputFormGroup() {
		return new FormGroup<CreateIdentityPoolInputFormProperties>({
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowUnauthenticatedIdentities: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AllowClassicFlow: new FormControl<boolean | null | undefined>(undefined),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined),
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
		IdentityId?: string;
		ErrorCode?: ErrorCode;
	}

	/** An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId. */
	export interface UnprocessedIdentityIdFormProperties {
		IdentityId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
	}
	export function CreateUnprocessedIdentityIdFormGroup() {
		return new FormGroup<UnprocessedIdentityIdFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { AccessDenied = 'AccessDenied', InternalServerError = 'InternalServerError' }


	/** Input to the <code>DeleteIdentities</code> action. */
	export interface DeleteIdentitiesInput {

		/** Required */
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

		/** Required */
		IdentityPoolId: string;
	}

	/** Input to the DeleteIdentityPool action. */
	export interface DeleteIdentityPoolInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityPoolInputFormGroup() {
		return new FormGroup<DeleteIdentityPoolInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		IdentityId?: string;
		Logins?: Array<string>;
		CreationDate?: Date;
		LastModifiedDate?: Date;
	}

	/** A description of the identity. */
	export interface IdentityDescriptionFormProperties {
		IdentityId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateIdentityDescriptionFormGroup() {
		return new FormGroup<IdentityDescriptionFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInput {

		/** Required */
		IdentityId: string;
	}

	/** Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInputFormProperties {

		/** Required */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityInputFormGroup() {
		return new FormGroup<DescribeIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInput {

		/** Required */
		IdentityPoolId: string;
	}

	/** Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityPoolInputFormGroup() {
		return new FormGroup<DescribeIdentityPoolInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponse {
		IdentityId?: string;
		Credentials?: Credentials;
	}

	/** Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetCredentialsForIdentityResponseFormGroup() {
		return new FormGroup<GetCredentialsForIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Credentials for the provided identity ID. */
	export interface Credentials {
		AccessKeyId?: string;
		SecretKey?: string;
		SessionToken?: string;
		Expiration?: Date;
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

		/** Required */
		IdentityId: string;
		Logins?: LoginsMap;
		CustomRoleArn?: string;
	}

	/** Input to the <code>GetCredentialsForIdentity</code> action. */
	export interface GetCredentialsForIdentityInputFormProperties {

		/** Required */
		IdentityId: FormControl<string | null | undefined>,
		CustomRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetCredentialsForIdentityInputFormGroup() {
		return new FormGroup<GetCredentialsForIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomRoleArn: new FormControl<string | null | undefined>(undefined),
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
		IdentityId?: string;
	}

	/** Returned in response to a GetId request. */
	export interface GetIdResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdResponseFormGroup() {
		return new FormGroup<GetIdResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the GetId action. */
	export interface GetIdInput {
		AccountId?: string;

		/** Required */
		IdentityPoolId: string;
		Logins?: LoginsMap;
	}

	/** Input to the GetId action. */
	export interface GetIdInputFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdInputFormGroup() {
		return new FormGroup<GetIdInputFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponse {
		IdentityPoolId?: string;
		Roles?: RolesMap;
		RoleMappings?: RoleMappingMap;
	}

	/** Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponseFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoolRolesResponseFormGroup() {
		return new FormGroup<GetIdentityPoolRolesResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		IdentityPoolId: string;
	}

	/** Input to the <code>GetIdentityPoolRoles</code> action. */
	export interface GetIdentityPoolRolesInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoolRolesInputFormGroup() {
		return new FormGroup<GetIdentityPoolRolesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponse {
		IdentityId?: string;
		Token?: string;
	}

	/** Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenResponseFormGroup() {
		return new FormGroup<GetOpenIdTokenResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInput {

		/** Required */
		IdentityId: string;
		Logins?: LoginsMap;
	}

	/** Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInputFormProperties {

		/** Required */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenInputFormGroup() {
		return new FormGroup<GetOpenIdTokenInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponse {
		IdentityId?: string;
		Token?: string;
	}

	/** Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIdTokenForDeveloperIdentityResponseFormGroup() {
		return new FormGroup<GetOpenIdTokenForDeveloperIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInput {

		/** Required */
		IdentityPoolId: string;
		IdentityId?: string;

		/** Required */
		Logins: LoginsMap;
		PrincipalTags?: PrincipalTags;
		TokenDuration?: number | null;
	}

	/** Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		TokenDuration: FormControl<number | null | undefined>,
	}
	export function CreateGetOpenIdTokenForDeveloperIdentityInputFormGroup() {
		return new FormGroup<GetOpenIdTokenForDeveloperIdentityInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			TokenDuration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PrincipalTags {
	}
	export interface PrincipalTagsFormProperties {
	}
	export function CreatePrincipalTagsFormGroup() {
		return new FormGroup<PrincipalTagsFormProperties>({
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

	export interface GetPrincipalTagAttributeMapResponse {
		IdentityPoolId?: string;
		IdentityProviderName?: string;
		UseDefaults?: boolean | null;
		PrincipalTags?: PrincipalTags;
	}
	export interface GetPrincipalTagAttributeMapResponseFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,
		IdentityProviderName: FormControl<string | null | undefined>,
		UseDefaults: FormControl<boolean | null | undefined>,
	}
	export function CreateGetPrincipalTagAttributeMapResponseFormGroup() {
		return new FormGroup<GetPrincipalTagAttributeMapResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityProviderName: new FormControl<string | null | undefined>(undefined),
			UseDefaults: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetPrincipalTagAttributeMapInput {

		/** Required */
		IdentityPoolId: string;

		/** Required */
		IdentityProviderName: string;
	}
	export interface GetPrincipalTagAttributeMapInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		IdentityProviderName: FormControl<string | null | undefined>,
	}
	export function CreateGetPrincipalTagAttributeMapInputFormGroup() {
		return new FormGroup<GetPrincipalTagAttributeMapInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a ListIdentities request. */
	export interface ListIdentitiesResponse {
		IdentityPoolId?: string;
		Identities?: Array<IdentityDescription>;
		NextToken?: string;
	}

	/** The response to a ListIdentities request. */
	export interface ListIdentitiesResponseFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentitiesResponseFormGroup() {
		return new FormGroup<ListIdentitiesResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the ListIdentities action. */
	export interface ListIdentitiesInput {

		/** Required */
		IdentityPoolId: string;

		/** Required */
		MaxResults: number;
		NextToken?: string;
		HideDisabled?: boolean | null;
	}

	/** Input to the ListIdentities action. */
	export interface ListIdentitiesInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		HideDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateListIdentitiesInputFormGroup() {
		return new FormGroup<ListIdentitiesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			HideDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponse {
		IdentityPools?: Array<IdentityPoolShortDescription>;
		NextToken?: string;
	}

	/** The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoolsResponseFormGroup() {
		return new FormGroup<ListIdentityPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the identity pool. */
	export interface IdentityPoolShortDescription {
		IdentityPoolId?: string;
		IdentityPoolName?: string;
	}

	/** A description of the identity pool. */
	export interface IdentityPoolShortDescriptionFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,
		IdentityPoolName: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPoolShortDescriptionFormGroup() {
		return new FormGroup<IdentityPoolShortDescriptionFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInput {

		/** Required */
		MaxResults: number;
		NextToken?: string;
	}

	/** Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInputFormProperties {

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoolsInputFormGroup() {
		return new FormGroup<ListIdentityPoolsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponse {
		IdentityId?: string;
		DeveloperUserIdentifierList?: Array<string>;
		NextToken?: string;
	}

	/** Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupDeveloperIdentityResponseFormGroup() {
		return new FormGroup<LookupDeveloperIdentityResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInput {

		/** Required */
		IdentityPoolId: string;
		IdentityId?: string;
		DeveloperUserIdentifier?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
		IdentityId: FormControl<string | null | undefined>,
		DeveloperUserIdentifier: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupDeveloperIdentityInputFormGroup() {
		return new FormGroup<LookupDeveloperIdentityInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityId: new FormControl<string | null | undefined>(undefined),
			DeveloperUserIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponse {
		IdentityId?: string;
	}

	/** Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponseFormProperties {
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateMergeDeveloperIdentitiesResponseFormGroup() {
		return new FormGroup<MergeDeveloperIdentitiesResponseFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInput {

		/** Required */
		SourceUserIdentifier: string;

		/** Required */
		DestinationUserIdentifier: string;

		/** Required */
		DeveloperProviderName: string;

		/** Required */
		IdentityPoolId: string;
	}

	/** Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInputFormProperties {

		/** Required */
		SourceUserIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DestinationUserIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DeveloperProviderName: FormControl<string | null | undefined>,

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateMergeDeveloperIdentitiesInputFormGroup() {
		return new FormGroup<MergeDeveloperIdentitiesInputFormProperties>({
			SourceUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInput {

		/** Required */
		IdentityPoolId: string;

		/** Required */
		Roles: RolesMap;
		RoleMappings?: RoleMappingMap;
	}

	/** Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateSetIdentityPoolRolesInputFormGroup() {
		return new FormGroup<SetIdentityPoolRolesInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface SetPrincipalTagAttributeMapResponse {
		IdentityPoolId?: string;
		IdentityProviderName?: string;
		UseDefaults?: boolean | null;
		PrincipalTags?: PrincipalTags;
	}
	export interface SetPrincipalTagAttributeMapResponseFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,
		IdentityProviderName: FormControl<string | null | undefined>,
		UseDefaults: FormControl<boolean | null | undefined>,
	}
	export function CreateSetPrincipalTagAttributeMapResponseFormGroup() {
		return new FormGroup<SetPrincipalTagAttributeMapResponseFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			IdentityProviderName: new FormControl<string | null | undefined>(undefined),
			UseDefaults: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SetPrincipalTagAttributeMapInput {

		/** Required */
		IdentityPoolId: string;

		/** Required */
		IdentityProviderName: string;
		UseDefaults?: boolean | null;
		PrincipalTags?: PrincipalTags;
	}
	export interface SetPrincipalTagAttributeMapInputFormProperties {

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		IdentityProviderName: FormControl<string | null | undefined>,
		UseDefaults: FormControl<boolean | null | undefined>,
	}
	export function CreateSetPrincipalTagAttributeMapInputFormGroup() {
		return new FormGroup<SetPrincipalTagAttributeMapInputFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseDefaults: new FormControl<boolean | null | undefined>(undefined),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: IdentityPoolTagsType;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInput {

		/** Required */
		IdentityId: string;

		/** Required */
		IdentityPoolId: string;

		/** Required */
		DeveloperProviderName: string;

		/** Required */
		DeveloperUserIdentifier: string;
	}

	/** Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInputFormProperties {

		/** Required */
		IdentityId: FormControl<string | null | undefined>,

		/** Required */
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		DeveloperProviderName: FormControl<string | null | undefined>,

		/** Required */
		DeveloperUserIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUnlinkDeveloperIdentityInputFormGroup() {
		return new FormGroup<UnlinkDeveloperIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeveloperProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeveloperUserIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInput {

		/** Required */
		IdentityId: string;

		/** Required */
		Logins: LoginsMap;

		/** Required */
		LoginsToRemove: Array<string>;
	}

	/** Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInputFormProperties {

		/** Required */
		IdentityId: FormControl<string | null | undefined>,
	}
	export function CreateUnlinkIdentityInputFormGroup() {
		return new FormGroup<UnlinkIdentityInputFormProperties>({
			IdentityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AmbiguousRoleResolutionType { AuthenticatedRole = 'AuthenticatedRole', Deny = 'Deny' }

	export enum MappingRuleMatchType { Equals = 'Equals', Contains = 'Contains', StartsWith = 'StartsWith', NotEqual = 'NotEqual' }


	/** A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRule {

		/** Required */
		Claim: string;

		/** Required */
		MatchType: MappingRuleMatchType;

		/** Required */
		Value: string;

		/** Required */
		RoleARN: string;
	}

	/** A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRuleFormProperties {

		/** Required */
		Claim: FormControl<string | null | undefined>,

		/** Required */
		MatchType: FormControl<MappingRuleMatchType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateMappingRuleFormGroup() {
		return new FormGroup<MappingRuleFormProperties>({
			Claim: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MatchType: new FormControl<MappingRuleMatchType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RoleMappingType { Token = 'Token', Rules = 'Rules' }


	/** A container for rules. */
	export interface RulesConfigurationType {

		/** Required */
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
		AmbiguousRoleResolution?: AmbiguousRoleResolutionType;
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
		 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
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
		 * Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.
		 * Post #X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap
		 * @return {GetPrincipalTagAttributeMapResponse} Success
		 */
		GetPrincipalTagAttributeMap(requestBody: GetPrincipalTagAttributeMapInput): Observable<GetPrincipalTagAttributeMapResponse> {
			return this.http.post<GetPrincipalTagAttributeMapResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityPoolsResponse} Success
		 */
		ListIdentityPools(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIdentityPoolsInput): Observable<ListIdentityPoolsResponse> {
			return this.http.post<ListIdentityPoolsResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * You can use this operation to use default (username and clientID) attribute or custom attribute mappings.
		 * Post #X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap
		 * @return {SetPrincipalTagAttributeMapResponse} Success
		 */
		SetPrincipalTagAttributeMap(requestBody: SetPrincipalTagAttributeMapInput): Observable<SetPrincipalTagAttributeMapResponse> {
			return this.http.post<SetPrincipalTagAttributeMapResponse>(this.baseUri + '#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
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
		 * Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
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

	export enum CreateIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.CreateIdentityPool' = 'AWSCognitoIdentityService.CreateIdentityPool' }

	export enum DeleteIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.DeleteIdentities' = 'AWSCognitoIdentityService.DeleteIdentities' }

	export enum DeleteIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.DeleteIdentityPool' = 'AWSCognitoIdentityService.DeleteIdentityPool' }

	export enum DescribeIdentityX_Amz_Target { 'AWSCognitoIdentityService.DescribeIdentity' = 'AWSCognitoIdentityService.DescribeIdentity' }

	export enum DescribeIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.DescribeIdentityPool' = 'AWSCognitoIdentityService.DescribeIdentityPool' }

	export enum GetCredentialsForIdentityX_Amz_Target { 'AWSCognitoIdentityService.GetCredentialsForIdentity' = 'AWSCognitoIdentityService.GetCredentialsForIdentity' }

	export enum GetIdX_Amz_Target { 'AWSCognitoIdentityService.GetId' = 'AWSCognitoIdentityService.GetId' }

	export enum GetIdentityPoolRolesX_Amz_Target { 'AWSCognitoIdentityService.GetIdentityPoolRoles' = 'AWSCognitoIdentityService.GetIdentityPoolRoles' }

	export enum GetOpenIdTokenX_Amz_Target { 'AWSCognitoIdentityService.GetOpenIdToken' = 'AWSCognitoIdentityService.GetOpenIdToken' }

	export enum GetOpenIdTokenForDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity' = 'AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity' }

	export enum GetPrincipalTagAttributeMapX_Amz_Target { 'AWSCognitoIdentityService.GetPrincipalTagAttributeMap' = 'AWSCognitoIdentityService.GetPrincipalTagAttributeMap' }

	export enum ListIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.ListIdentities' = 'AWSCognitoIdentityService.ListIdentities' }

	export enum ListIdentityPoolsX_Amz_Target { 'AWSCognitoIdentityService.ListIdentityPools' = 'AWSCognitoIdentityService.ListIdentityPools' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSCognitoIdentityService.ListTagsForResource' = 'AWSCognitoIdentityService.ListTagsForResource' }

	export enum LookupDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.LookupDeveloperIdentity' = 'AWSCognitoIdentityService.LookupDeveloperIdentity' }

	export enum MergeDeveloperIdentitiesX_Amz_Target { 'AWSCognitoIdentityService.MergeDeveloperIdentities' = 'AWSCognitoIdentityService.MergeDeveloperIdentities' }

	export enum SetIdentityPoolRolesX_Amz_Target { 'AWSCognitoIdentityService.SetIdentityPoolRoles' = 'AWSCognitoIdentityService.SetIdentityPoolRoles' }

	export enum SetPrincipalTagAttributeMapX_Amz_Target { 'AWSCognitoIdentityService.SetPrincipalTagAttributeMap' = 'AWSCognitoIdentityService.SetPrincipalTagAttributeMap' }

	export enum TagResourceX_Amz_Target { 'AWSCognitoIdentityService.TagResource' = 'AWSCognitoIdentityService.TagResource' }

	export enum UnlinkDeveloperIdentityX_Amz_Target { 'AWSCognitoIdentityService.UnlinkDeveloperIdentity' = 'AWSCognitoIdentityService.UnlinkDeveloperIdentity' }

	export enum UnlinkIdentityX_Amz_Target { 'AWSCognitoIdentityService.UnlinkIdentity' = 'AWSCognitoIdentityService.UnlinkIdentity' }

	export enum UntagResourceX_Amz_Target { 'AWSCognitoIdentityService.UntagResource' = 'AWSCognitoIdentityService.UntagResource' }

	export enum UpdateIdentityPoolX_Amz_Target { 'AWSCognitoIdentityService.UpdateIdentityPool' = 'AWSCognitoIdentityService.UpdateIdentityPool' }

}

