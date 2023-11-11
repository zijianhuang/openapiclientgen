import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GetRoleCredentialsResponse {

		/** Provides information about the role credentials that are assigned to the user. */
		roleCredentials?: RoleCredentials | null;
	}


	/** Provides information about the role credentials that are assigned to the user. */
	export interface RoleCredentials {
		accessKeyId?: string | null;
		secretAccessKey?: string | null;
		sessionToken?: string | null;
		expiration?: number | null;
	}

	export interface InvalidRequestException {
	}

	export interface UnauthorizedException {
	}

	export interface TooManyRequestsException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ListAccountRolesResponse {
		nextToken?: string | null;
		roleList?: Array<RoleInfo> | null;
	}


	/** Provides information about the role that is assigned to the user. */
	export interface RoleInfo {
		roleName?: string | null;
		accountId?: string | null;
	}

	export interface ListAccountsResponse {
		nextToken?: string | null;
		accountList?: Array<AccountInfo> | null;
	}


	/** Provides information about your AWS account. */
	export interface AccountInfo {
		accountId?: string | null;
		accountName?: string | null;
		emailAddress?: string | null;
	}

	export interface GetRoleCredentialsRequest {
	}

	export interface ListAccountRolesRequest {
	}

	export interface ListAccountsRequest {
	}

	export interface LogoutRequest {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the STS short-term credentials for a given role name that is assigned to the user.
		 * Get federation/credentials#role_name&account_id&x-amz-sso_bearer_token
		 * @param {string} role_name The friendly name of the role that is assigned to the user.
		 * @param {string} account_id The identifier for the AWS account that is assigned to the user.
		 * @return {GetRoleCredentialsResponse} Success
		 */
		GetRoleCredentials(role_name: string, account_id: string): Observable<GetRoleCredentialsResponse> {
			return this.http.get<GetRoleCredentialsResponse>(this.baseUri + 'federation/credentials#role_name&account_id&x-amz-sso_bearer_token?role_name=' + (role_name == null ? '' : encodeURIComponent(role_name)) + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)), {});
		}

		/**
		 * Lists all roles that are assigned to the user for a given AWS account.
		 * Get assignment/roles#x-amz-sso_bearer_token&account_id
		 * @param {string} next_token The page token from the previous response output when you request subsequent pages.
		 * @param {number} max_result The number of items that clients can request per page.
		 * @param {string} account_id The identifier for the AWS account that is assigned to the user.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountRolesResponse} Success
		 */
		ListAccountRoles(next_token: string, max_result: number, account_id: string, maxResults: string, nextToken: string): Observable<ListAccountRolesResponse> {
			return this.http.get<ListAccountRolesResponse>(this.baseUri + 'assignment/roles#x-amz-sso_bearer_token&account_id?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&account_id=' + (account_id == null ? '' : encodeURIComponent(account_id)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>AWS SSO User Guide</i>. This operation returns a paginated response.
		 * Get assignment/accounts#x-amz-sso_bearer_token
		 * @param {string} next_token (Optional) When requesting subsequent pages, this is the page token from the previous response output.
		 * @param {number} max_result This is the number of items clients can request per page.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(next_token: string, max_result: number, maxResults: string, nextToken: string): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'assignment/accounts#x-amz-sso_bearer_token?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Removes the client- and server-side session that is associated with the user.
		 * Post logout#x-amz-sso_bearer_token
		 * @return {void} Success
		 */
		Logout(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'logout#x-amz-sso_bearer_token', null, { observe: 'response', responseType: 'text' });
		}
	}

}

