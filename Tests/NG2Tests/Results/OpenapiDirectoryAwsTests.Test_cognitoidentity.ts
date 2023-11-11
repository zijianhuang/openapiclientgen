import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** An object representing an Amazon Cognito identity pool. */
	export interface IdentityPool {
		IdentityPoolId: string;
		IdentityPoolName: string;
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders | null;
		DeveloperProviderName?: string | null;
		OpenIdConnectProviderARNs?: Array<string> | null;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider> | null;
		SamlProviderARNs?: Array<string> | null;
		IdentityPoolTags?: IdentityPoolTagsType | null;
	}

	export interface IdentityProviders {
	}


	/** A provider representing an Amazon Cognito user pool and its client ID. */
	export interface CognitoIdentityProvider {
		ProviderName?: string | null;
		ClientId?: string | null;
		ServerSideTokenCheck?: boolean | null;
	}

	export interface IdentityPoolTagsType {
	}


	/** Input to the CreateIdentityPool action. */
	export interface CreateIdentityPoolInput {
		IdentityPoolName: string;
		AllowUnauthenticatedIdentities: boolean;
		AllowClassicFlow?: boolean | null;
		SupportedLoginProviders?: IdentityProviders | null;
		DeveloperProviderName?: string | null;
		OpenIdConnectProviderARNs?: Array<string> | null;
		CognitoIdentityProviders?: Array<CognitoIdentityProvider> | null;
		SamlProviderARNs?: Array<string> | null;
		IdentityPoolTags?: IdentityPoolTagsType | null;
	}

	export interface InvalidParameterException {
	}

	export interface NotAuthorizedException {
	}

	export interface ResourceConflictException {
	}

	export interface TooManyRequestsException {
	}

	export interface InternalErrorException {
	}

	export interface LimitExceededException {
	}


	/** Returned in response to a successful <code>DeleteIdentities</code> operation. */
	export interface DeleteIdentitiesResponse {
		UnprocessedIdentityIds?: Array<UnprocessedIdentityId> | null;
	}


	/** An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId. */
	export interface UnprocessedIdentityId {
		IdentityId?: string | null;
		ErrorCode?: UnprocessedIdentityIdErrorCode | null;
	}

	export enum UnprocessedIdentityIdErrorCode { AccessDenied = 0, InternalServerError = 1 }


	/** Input to the <code>DeleteIdentities</code> action. */
	export interface DeleteIdentitiesInput {
		IdentityIdsToDelete: Array<string>;
	}


	/** Input to the DeleteIdentityPool action. */
	export interface DeleteIdentityPoolInput {
		IdentityPoolId: string;
	}

	export interface ResourceNotFoundException {
	}


	/** A description of the identity. */
	export interface IdentityDescription {
		IdentityId?: string | null;
		Logins?: Array<string> | null;
		CreationDate?: Date | null;
		LastModifiedDate?: Date | null;
	}


	/** Input to the <code>DescribeIdentity</code> action. */
	export interface DescribeIdentityInput {
		IdentityId: string;
	}


	/** Input to the DescribeIdentityPool action. */
	export interface DescribeIdentityPoolInput {
		IdentityPoolId: string;
	}


	/** Returned in response to a successful <code>GetCredentialsForIdentity</code> operation. */
	export interface GetCredentialsForIdentityResponse {
		IdentityId?: string | null;

		/** Credentials for the provided identity ID. */
		Credentials?: Credentials | null;
	}


	/** Credentials for the provided identity ID. */
	export interface Credentials {
		AccessKeyId?: string | null;
		SecretKey?: string | null;
		SessionToken?: string | null;
		Expiration?: Date | null;
	}


	/** Input to the <code>GetCredentialsForIdentity</code> action. */
	export interface GetCredentialsForIdentityInput {
		IdentityId: string;
		Logins?: LoginsMap | null;
		CustomRoleArn?: string | null;
	}

	export interface LoginsMap {
	}

	export interface InvalidIdentityPoolConfigurationException {
	}

	export interface ExternalServiceException {
	}


	/** Returned in response to a GetId request. */
	export interface GetIdResponse {
		IdentityId?: string | null;
	}


	/** Input to the GetId action. */
	export interface GetIdInput {
		AccountId?: string | null;
		IdentityPoolId: string;
		Logins?: LoginsMap | null;
	}


	/** Returned in response to a successful <code>GetIdentityPoolRoles</code> operation. */
	export interface GetIdentityPoolRolesResponse {
		IdentityPoolId?: string | null;
		Roles?: RolesMap | null;
		RoleMappings?: RoleMappingMap | null;
	}

	export interface RolesMap {
	}

	export interface RoleMappingMap {
	}


	/** Input to the <code>GetIdentityPoolRoles</code> action. */
	export interface GetIdentityPoolRolesInput {
		IdentityPoolId: string;
	}


	/** Returned in response to a successful GetOpenIdToken request. */
	export interface GetOpenIdTokenResponse {
		IdentityId?: string | null;
		Token?: string | null;
	}


	/** Input to the GetOpenIdToken action. */
	export interface GetOpenIdTokenInput {
		IdentityId: string;
		Logins?: LoginsMap | null;
	}


	/** Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request. */
	export interface GetOpenIdTokenForDeveloperIdentityResponse {
		IdentityId?: string | null;
		Token?: string | null;
	}


	/** Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action. */
	export interface GetOpenIdTokenForDeveloperIdentityInput {
		IdentityPoolId: string;
		IdentityId?: string | null;
		Logins: LoginsMap;
		TokenDuration?: number | null;
	}

	export interface DeveloperUserAlreadyRegisteredException {
	}


	/** The response to a ListIdentities request. */
	export interface ListIdentitiesResponse {
		IdentityPoolId?: string | null;
		Identities?: Array<IdentityDescription> | null;
		NextToken?: string | null;
	}


	/** Input to the ListIdentities action. */
	export interface ListIdentitiesInput {
		IdentityPoolId: string;
		MaxResults: number;
		NextToken?: string | null;
		HideDisabled?: boolean | null;
	}


	/** The result of a successful ListIdentityPools action. */
	export interface ListIdentityPoolsResponse {
		IdentityPools?: Array<IdentityPoolShortDescription> | null;
		NextToken?: string | null;
	}


	/** A description of the identity pool. */
	export interface IdentityPoolShortDescription {
		IdentityPoolId?: string | null;
		IdentityPoolName?: string | null;
	}


	/** Input to the ListIdentityPools action. */
	export interface ListIdentityPoolsInput {
		MaxResults: number;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: IdentityPoolTagsType | null;
	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
	}


	/** Returned in response to a successful <code>LookupDeveloperIdentity</code> action. */
	export interface LookupDeveloperIdentityResponse {
		IdentityId?: string | null;
		DeveloperUserIdentifierList?: Array<string> | null;
		NextToken?: string | null;
	}


	/** Input to the <code>LookupDeveloperIdentityInput</code> action. */
	export interface LookupDeveloperIdentityInput {
		IdentityPoolId: string;
		IdentityId?: string | null;
		DeveloperUserIdentifier?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}


	/** Returned in response to a successful <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesResponse {
		IdentityId?: string | null;
	}


	/** Input to the <code>MergeDeveloperIdentities</code> action. */
	export interface MergeDeveloperIdentitiesInput {
		SourceUserIdentifier: string;
		DestinationUserIdentifier: string;
		DeveloperProviderName: string;
		IdentityPoolId: string;
	}


	/** Input to the <code>SetIdentityPoolRoles</code> action. */
	export interface SetIdentityPoolRolesInput {
		IdentityPoolId: string;
		Roles: RolesMap;
		RoleMappings?: RoleMappingMap | null;
	}

	export interface ConcurrentModificationException {
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: IdentityPoolTagsType;
	}


	/** Input to the <code>UnlinkDeveloperIdentity</code> action. */
	export interface UnlinkDeveloperIdentityInput {
		IdentityId: string;
		IdentityPoolId: string;
		DeveloperProviderName: string;
		DeveloperUserIdentifier: string;
	}


	/** Input to the UnlinkIdentity action. */
	export interface UnlinkIdentityInput {
		IdentityId: string;
		Logins: LoginsMap;
		LoginsToRemove: Array<string>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export enum AmbiguousRoleResolutionType { AuthenticatedRole = 0, Deny = 1 }

	export enum ErrorCode { AccessDenied = 0, InternalServerError = 1 }

	export enum MappingRuleMatchType { Equals = 0, Contains = 1, StartsWith = 2, NotEqual = 3 }


	/** A rule that maps a claim name, a claim value, and a match type to a role ARN. */
	export interface MappingRule {
		Claim: string;
		MatchType: MappingRuleMatchType;
		Value: string;
		RoleARN: string;
	}

	export enum RoleMappingType { Token = 0, Rules = 1 }


	/** A container for rules. */
	export interface RulesConfigurationType {
		Rules: Array<MappingRule>;
	}


	/** A role mapping. */
	export interface RoleMapping {
		Type: RoleMappingType;
		AmbiguousRoleResolution?: AmbiguousRoleResolutionType | null;

		/** A container for rules. */
		RulesConfiguration?: RulesConfigurationType | null;
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

	export enum CreateIdentityPoolX_Amz_Target { AWSCognitoIdentityService_CreateIdentityPool = 0 }

	export enum DeleteIdentitiesX_Amz_Target { AWSCognitoIdentityService_DeleteIdentities = 0 }

	export enum DeleteIdentityPoolX_Amz_Target { AWSCognitoIdentityService_DeleteIdentityPool = 0 }

	export enum DescribeIdentityX_Amz_Target { AWSCognitoIdentityService_DescribeIdentity = 0 }

	export enum DescribeIdentityPoolX_Amz_Target { AWSCognitoIdentityService_DescribeIdentityPool = 0 }

	export enum GetCredentialsForIdentityX_Amz_Target { AWSCognitoIdentityService_GetCredentialsForIdentity = 0 }

	export enum GetIdX_Amz_Target { AWSCognitoIdentityService_GetId = 0 }

	export enum GetIdentityPoolRolesX_Amz_Target { AWSCognitoIdentityService_GetIdentityPoolRoles = 0 }

	export enum GetOpenIdTokenX_Amz_Target { AWSCognitoIdentityService_GetOpenIdToken = 0 }

	export enum GetOpenIdTokenForDeveloperIdentityX_Amz_Target { AWSCognitoIdentityService_GetOpenIdTokenForDeveloperIdentity = 0 }

	export enum ListIdentitiesX_Amz_Target { AWSCognitoIdentityService_ListIdentities = 0 }

	export enum ListIdentityPoolsX_Amz_Target { AWSCognitoIdentityService_ListIdentityPools = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSCognitoIdentityService_ListTagsForResource = 0 }

	export enum LookupDeveloperIdentityX_Amz_Target { AWSCognitoIdentityService_LookupDeveloperIdentity = 0 }

	export enum MergeDeveloperIdentitiesX_Amz_Target { AWSCognitoIdentityService_MergeDeveloperIdentities = 0 }

	export enum SetIdentityPoolRolesX_Amz_Target { AWSCognitoIdentityService_SetIdentityPoolRoles = 0 }

	export enum TagResourceX_Amz_Target { AWSCognitoIdentityService_TagResource = 0 }

	export enum UnlinkDeveloperIdentityX_Amz_Target { AWSCognitoIdentityService_UnlinkDeveloperIdentity = 0 }

	export enum UnlinkIdentityX_Amz_Target { AWSCognitoIdentityService_UnlinkIdentity = 0 }

	export enum UntagResourceX_Amz_Target { AWSCognitoIdentityService_UntagResource = 0 }

	export enum UpdateIdentityPoolX_Amz_Target { AWSCognitoIdentityService_UpdateIdentityPool = 0 }

}

