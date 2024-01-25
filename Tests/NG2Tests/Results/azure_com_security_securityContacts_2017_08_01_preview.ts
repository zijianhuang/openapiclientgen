import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contact details for security issues */
	export interface SecurityContact {

		/** describes security contact properties */
		properties?: SecurityContactProperties;
	}

	/** Contact details for security issues */
	export interface SecurityContactFormProperties {
	}
	export function CreateSecurityContactFormGroup() {
		return new FormGroup<SecurityContactFormProperties>({
		});

	}


	/** describes security contact properties */
	export interface SecurityContactProperties {

		/**
		 * Whether to send security alerts notifications to the security contact
		 * Required
		 */
		alertNotifications: SecurityContactPropertiesAlertNotifications;

		/**
		 * Whether to send security alerts notifications to subscription admins
		 * Required
		 */
		alertsToAdmins: SecurityContactPropertiesAlertNotifications;

		/**
		 * The email of this security contact
		 * Required
		 */
		email: string;

		/** The phone number of this security contact */
		phone?: string | null;
	}

	/** describes security contact properties */
	export interface SecurityContactPropertiesFormProperties {

		/**
		 * Whether to send security alerts notifications to the security contact
		 * Required
		 */
		alertNotifications: FormControl<SecurityContactPropertiesAlertNotifications | null | undefined>,

		/**
		 * Whether to send security alerts notifications to subscription admins
		 * Required
		 */
		alertsToAdmins: FormControl<SecurityContactPropertiesAlertNotifications | null | undefined>,

		/**
		 * The email of this security contact
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** The phone number of this security contact */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateSecurityContactPropertiesFormGroup() {
		return new FormGroup<SecurityContactPropertiesFormProperties>({
			alertNotifications: new FormControl<SecurityContactPropertiesAlertNotifications | null | undefined>(undefined, [Validators.required]),
			alertsToAdmins: new FormControl<SecurityContactPropertiesAlertNotifications | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecurityContactPropertiesAlertNotifications { On = 0, Off = 1 }


	/** List of security contacts response */
	export interface SecurityContactList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of security contacts */
		value?: Array<SecurityContact>;
	}

	/** List of security contacts response */
	export interface SecurityContactListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecurityContactListFormGroup() {
		return new FormGroup<SecurityContactListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Security contact configurations for the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {SecurityContactList} OK
		 */
		SecurityContacts_List(api_version: string, subscriptionId: string): Observable<SecurityContactList> {
			return this.http.get<SecurityContactList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Security contact configurations for the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Get(api_version: string, subscriptionId: string, securityContactName: string): Observable<SecurityContact> {
			return this.http.get<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Security contact configurations for the subscription
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @param {SecurityContact} requestBody Security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Create(api_version: string, subscriptionId: string, securityContactName: string, requestBody: SecurityContact): Observable<SecurityContact> {
			return this.http.put<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Security contact configurations for the subscription
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @return {void} 
		 */
		SecurityContacts_Delete(api_version: string, subscriptionId: string, securityContactName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Security contact configurations for the subscription
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @param {SecurityContact} requestBody Security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Update(api_version: string, subscriptionId: string, securityContactName: string, requestBody: SecurityContact): Observable<SecurityContact> {
			return this.http.patch<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

