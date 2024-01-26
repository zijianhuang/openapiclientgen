import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessToken {

		/** access token provided during authentication flow */
		access_token?: string | null;

		/** time in milliseconds until access token expires. */
		expires_in?: string | null;

		/** Xero unique identifier */
		id_token?: string | null;

		/** token used to refresh an expired access token */
		refresh_token?: string | null;

		/** type of token i.e. Bearer */
		token_type?: string | null;
	}
	export interface AccessTokenFormProperties {

		/** access token provided during authentication flow */
		access_token: FormControl<string | null | undefined>,

		/** time in milliseconds until access token expires. */
		expires_in: FormControl<string | null | undefined>,

		/** Xero unique identifier */
		id_token: FormControl<string | null | undefined>,

		/** token used to refresh an expired access token */
		refresh_token: FormControl<string | null | undefined>,

		/** type of token i.e. Bearer */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenFormGroup() {
		return new FormGroup<AccessTokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<string | null | undefined>(undefined),
			id_token: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Connection {

		/** Identifier shared across connections authorised at the same time */
		authEventId?: string | null;

		/** The date when the user connected this tenant to your app */
		createdDateUtc?: Date | null;

		/** Xero identifier */
		id?: string | null;

		/** Xero identifier of organisation */
		tenantId?: string | null;

		/** Xero tenant name */
		tenantName?: string | null;

		/** Xero tenant type (i.e. ORGANISATION, PRACTICE) */
		tenantType?: string | null;

		/** The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app. */
		updatedDateUtc?: Date | null;
	}
	export interface ConnectionFormProperties {

		/** Identifier shared across connections authorised at the same time */
		authEventId: FormControl<string | null | undefined>,

		/** The date when the user connected this tenant to your app */
		createdDateUtc: FormControl<Date | null | undefined>,

		/** Xero identifier */
		id: FormControl<string | null | undefined>,

		/** Xero identifier of organisation */
		tenantId: FormControl<string | null | undefined>,

		/** Xero tenant name */
		tenantName: FormControl<string | null | undefined>,

		/** Xero tenant type (i.e. ORGANISATION, PRACTICE) */
		tenantType: FormControl<string | null | undefined>,

		/** The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app. */
		updatedDateUtc: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			authEventId: new FormControl<string | null | undefined>(undefined),
			createdDateUtc: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantName: new FormControl<string | null | undefined>(undefined),
			tenantType: new FormControl<string | null | undefined>(undefined),
			updatedDateUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RefreshToken {

		/** client id for Xero app */
		client_id?: string | null;

		/** client secret for Xero app 2 */
		client_secret?: string | null;

		/** Xero grant type */
		grant_type?: string | null;

		/** refresh token provided during authentication flow */
		refresh_token?: string | null;
	}
	export interface RefreshTokenFormProperties {

		/** client id for Xero app */
		client_id: FormControl<string | null | undefined>,

		/** client secret for Xero app 2 */
		client_secret: FormControl<string | null | undefined>,

		/** Xero grant type */
		grant_type: FormControl<string | null | undefined>,

		/** refresh token provided during authentication flow */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTokenFormGroup() {
		return new FormGroup<RefreshTokenFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the connections for this user
		 * Override the base server url that include version
		 * Get Connections
		 * @param {string} authEventId Filter by authEventId
		 * @return {Array<Connection>} Success - return response of type Connections array with 0 to n Connection
		 */
		GetConnections(authEventId: string | null | undefined): Observable<Array<Connection>> {
			return this.http.get<Array<Connection>>(this.baseUri + 'Connections?authEventId=' + (authEventId == null ? '' : encodeURIComponent(authEventId)), {});
		}

		/**
		 * Deletes a connection for this user (i.e. disconnect a tenant)
		 * Override the base server url that include version
		 * Delete Connections/{id}
		 * @param {string} id Unique identifier for retrieving single object
		 * @return {void} 
		 */
		DeleteConnection(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Connections/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}
	}

}

