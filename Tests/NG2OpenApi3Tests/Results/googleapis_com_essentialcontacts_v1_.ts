import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response message for the ComputeContacts method. */
	export interface GoogleCloudEssentialcontactsV1ComputeContactsResponse {

		/** All contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources. */
		contacts?: Array<GoogleCloudEssentialcontactsV1Contact>;

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
		nextPageToken?: string | null;
	}

	/** Response message for the ComputeContacts method. */
	export interface GoogleCloudEssentialcontactsV1ComputeContactsResponseFormProperties {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudEssentialcontactsV1ComputeContactsResponseFormGroup() {
		return new FormGroup<GoogleCloudEssentialcontactsV1ComputeContactsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contact that will receive notifications from Google Cloud. */
	export interface GoogleCloudEssentialcontactsV1Contact {

		/** Required. The email address to send notifications to. The email address does not need to be a Google Account. */
		email?: string | null;

		/** Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages. */
		languageTag?: string | null;

		/** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
		name?: string | null;

		/** Required. The categories of notifications that the contact will receive communications for. */
		notificationCategorySubscriptions?: Array<string>;

		/** The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago. */
		validateTime?: string | null;

		/** The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource. */
		validationState?: GoogleCloudEssentialcontactsV1ContactValidationState | null;
	}

	/** A contact that will receive notifications from Google Cloud. */
	export interface GoogleCloudEssentialcontactsV1ContactFormProperties {

		/** Required. The email address to send notifications to. The email address does not need to be a Google Account. */
		email: FormControl<string | null | undefined>,

		/** Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages. */
		languageTag: FormControl<string | null | undefined>,

		/** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
		name: FormControl<string | null | undefined>,

		/** The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago. */
		validateTime: FormControl<string | null | undefined>,

		/** The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource. */
		validationState: FormControl<GoogleCloudEssentialcontactsV1ContactValidationState | null | undefined>,
	}
	export function CreateGoogleCloudEssentialcontactsV1ContactFormGroup() {
		return new FormGroup<GoogleCloudEssentialcontactsV1ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			languageTag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validateTime: new FormControl<string | null | undefined>(undefined),
			validationState: new FormControl<GoogleCloudEssentialcontactsV1ContactValidationState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudEssentialcontactsV1ContactValidationState { VALIDATION_STATE_UNSPECIFIED = 0, VALID = 1, INVALID = 2 }


	/** Response message for the ListContacts method. */
	export interface GoogleCloudEssentialcontactsV1ListContactsResponse {

		/** The contacts for the specified resource. */
		contacts?: Array<GoogleCloudEssentialcontactsV1Contact>;

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListContacts method. */
	export interface GoogleCloudEssentialcontactsV1ListContactsResponseFormProperties {

		/** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudEssentialcontactsV1ListContactsResponseFormGroup() {
		return new FormGroup<GoogleCloudEssentialcontactsV1ListContactsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the SendTestMessage method. */
	export interface GoogleCloudEssentialcontactsV1SendTestMessageRequest {

		/** Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id} */
		contacts?: Array<string>;

		/** Required. The notification category to send the test message for. All contacts must be subscribed to this category. */
		notificationCategory?: GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory | null;
	}

	/** Request message for the SendTestMessage method. */
	export interface GoogleCloudEssentialcontactsV1SendTestMessageRequestFormProperties {

		/** Required. The notification category to send the test message for. All contacts must be subscribed to this category. */
		notificationCategory: FormControl<GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory | null | undefined>,
	}
	export function CreateGoogleCloudEssentialcontactsV1SendTestMessageRequestFormGroup() {
		return new FormGroup<GoogleCloudEssentialcontactsV1SendTestMessageRequestFormProperties>({
			notificationCategory: new FormControl<GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory { NOTIFICATION_CATEGORY_UNSPECIFIED = 0, ALL = 1, SUSPENSION = 2, SECURITY = 3, TECHNICAL = 4, BILLING = 5, LEGAL = 6, PRODUCT_UPDATES = 7, TECHNICAL_INCIDENTS = 8 }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a contact.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the contact to delete. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Essentialcontacts_projects_contacts_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a single contact.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the contact to retrieve. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
		 * @return {GoogleCloudEssentialcontactsV1Contact} Successful response
		 */
		Essentialcontacts_projects_contacts_get(name: string): Observable<GoogleCloudEssentialcontactsV1Contact> {
			return this.http.get<GoogleCloudEssentialcontactsV1Contact>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a contact. Note: A contact's email address cannot be changed.
		 * Patch v1/{name}
		 * @param {string} name Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}
		 * @param {string} updateMask Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {GoogleCloudEssentialcontactsV1Contact} Successful response
		 */
		Essentialcontacts_projects_contacts_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudEssentialcontactsV1Contact): Observable<GoogleCloudEssentialcontactsV1Contact> {
			return this.http.patch<GoogleCloudEssentialcontactsV1Contact>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the contacts that have been set on a resource.
		 * Get v1/{parent}/contacts
		 * @param {string} parent Required. The parent resource name. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {GoogleCloudEssentialcontactsV1ListContactsResponse} Successful response
		 */
		Essentialcontacts_projects_contacts_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudEssentialcontactsV1ListContactsResponse> {
			return this.http.get<GoogleCloudEssentialcontactsV1ListContactsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contacts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a new contact for a resource.
		 * Post v1/{parent}/contacts
		 * @param {string} parent Required. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
		 * @return {GoogleCloudEssentialcontactsV1Contact} Successful response
		 */
		Essentialcontacts_projects_contacts_create(parent: string, requestBody: GoogleCloudEssentialcontactsV1Contact): Observable<GoogleCloudEssentialcontactsV1Contact> {
			return this.http.post<GoogleCloudEssentialcontactsV1Contact>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
		 * Get v1/{parent}/contacts:compute
		 * @param {string} parent Required. The name of the resource to compute contacts for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
		 * @param {Array<GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory>} notificationCategories The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
		 * @param {string} pageToken Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {GoogleCloudEssentialcontactsV1ComputeContactsResponse} Successful response
		 */
		Essentialcontacts_projects_contacts_compute(parent: string, notificationCategories: Array<GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategory> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudEssentialcontactsV1ComputeContactsResponse> {
			return this.http.get<GoogleCloudEssentialcontactsV1ComputeContactsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contacts:compute&' + notificationCategories?.map(z => `notificationCategories=${z}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
		 * Post v1/{resource}/contacts:sendTestMessage
		 * @param {string} resource Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Essentialcontacts_projects_contacts_sendTestMessage(resource: string, requestBody: GoogleCloudEssentialcontactsV1SendTestMessageRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + '/contacts:sendTestMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

