import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Connection {

		/** Xero identifier */
		id?: string;

		/** Xero identifier of organisation */
		tenantId?: string;

		/** Identifier shared across connections authorised at the same time */
		authEventId?: string;

		/** Xero tenant type (i.e. ORGANISATION, PRACTICE) */
		tenantType?: string;

		/** Xero tenant name */
		tenantName?: string;

		/** The date when the user connected this tenant to your app */
		createdDateUtc?: Date;

		/** The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app. */
		updatedDateUtc?: Date;
	}

	export interface RefreshToken {

		/** Xero grant type */
		grant_type?: string;

		/** refresh token provided during authentication flow */
		refresh_token?: string;

		/** client id for Xero app */
		client_id?: string;

		/** client secret for Xero app 2 */
		client_secret?: string;
	}

	export interface AccessToken {

		/** Xero unique identifier */
		id_token?: string;

		/** access token provided during authentication flow */
		access_token?: string;

		/** time in milliseconds until access token expires. */
		expires_in?: string;

		/** type of token i.e. Bearer */
		token_type?: string;

		/** token used to refresh an expired access token */
		refresh_token?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allows you to retrieve the connections for this user
		 * Override the base server url that include version
		 * Get connections
		 * @param {string} authEventId Filter by authEventId
		 * @return {Array<Connection>} Success - return response of type Connections array with 0 to n Connection
		 */
		GetConnections(authEventId: string): Observable<Array<Connection>> {
			return this.http.get<Array<Connection>>(this.baseUri + 'connections?authEventId=' + (authEventId == null ? '' : encodeURIComponent(authEventId)), {});
		}

		/**
		 * Allows you to delete a connection for this user (i.e. disconnect a tenant)
		 * Override the base server url that include version
		 * Delete connections/{id}
		 * @param {string} id Unique identifier for retrieving single object
		 * @return {void} 
		 */
		DeleteConnection(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'connections/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}
	}

}

