import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A guest diagnostic settings association. */
	export interface GuestDiagnosticSettingsAssociation {

		/**
		 * The guest diagnostic settings name.
		 * Required
		 */
		guestDiagnosticSettingsName: string;
	}

	/** A guest diagnostic settings association. */
	export interface GuestDiagnosticSettingsAssociationFormProperties {

		/**
		 * The guest diagnostic settings name.
		 * Required
		 */
		guestDiagnosticSettingsName: FormControl<string | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsAssociationFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsAssociationFormProperties>({
			guestDiagnosticSettingsName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of guest diagnostic settings association. */
	export interface GuestDiagnosticSettingsAssociationList {

		/** Provides the link to retrieve the next set of elements. */
		nextLink?: string | null;

		/** The list of guest diagnostic settings association. */
		value?: Array<GuestDiagnosticSettingsAssociationResource>;
	}

	/** A list of guest diagnostic settings association. */
	export interface GuestDiagnosticSettingsAssociationListFormProperties {

		/** Provides the link to retrieve the next set of elements. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsAssociationListFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsAssociationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual machine guest diagnostic settings resource. */
	export interface GuestDiagnosticSettingsAssociationResource {

		/**
		 * A guest diagnostic settings association.
		 * Required
		 */
		properties: GuestDiagnosticSettingsAssociation;
	}

	/** Virtual machine guest diagnostic settings resource. */
	export interface GuestDiagnosticSettingsAssociationResourceFormProperties {
	}
	export function CreateGuestDiagnosticSettingsAssociationResourceFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsAssociationResourceFormProperties>({
		});

	}


	/** Guest diagnostic setting resource for patch operations */
	export interface GuestDiagnosticSettingsAssociationResourcePatch {

		/** A guest diagnostic settings association. */
		properties?: GuestDiagnosticSettingsAssociation;

		/** Resource tags */
		tags?: any;
	}

	/** Guest diagnostic setting resource for patch operations */
	export interface GuestDiagnosticSettingsAssociationResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateGuestDiagnosticSettingsAssociationResourcePatchFormGroup() {
		return new FormGroup<GuestDiagnosticSettingsAssociationResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all guest diagnostic settings association in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/guestDiagnosticSettingsAssociations
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsAssociationList} The request succeeded.
		 */
		GuestDiagnosticsSettingsAssociation_List(subscriptionId: string, api_version: string): Observable<GuestDiagnosticSettingsAssociationList> {
			return this.http.get<GuestDiagnosticSettingsAssociationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of all guest diagnostic settings association in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/guestDiagnosticSettingsAssociations
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsAssociationList} The request succeeded.
		 */
		GuestDiagnosticsSettingsAssociation_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<GuestDiagnosticSettingsAssociationList> {
			return this.http.get<GuestDiagnosticSettingsAssociationList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets guest diagnostics association settings.
		 * Get {resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName}
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type.
		 * @param {string} associationName The name of the diagnostic settings association.
		 * @param {string} api_version Client Api Version.
		 * @return {GuestDiagnosticSettingsAssociationResource} The request succeeded.
		 */
		GuestDiagnosticsSettingsAssociation_Get(resourceUri: string, associationName: string, api_version: string): Observable<GuestDiagnosticSettingsAssociationResource> {
			return this.http.get<GuestDiagnosticSettingsAssociationResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociation/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates guest diagnostics settings association.
		 * Put {resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName}
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type.
		 * @param {string} associationName The name of the diagnostic settings association.
		 * @param {string} api_version Client Api Version.
		 * @param {GuestDiagnosticSettingsAssociationResource} requestBody The diagnostic settings association to create or update.
		 * @return {GuestDiagnosticSettingsAssociationResource} An existing guest diagnostic settings association was successfully updated.
		 */
		GuestDiagnosticsSettingsAssociation_CreateOrUpdate(resourceUri: string, associationName: string, api_version: string, requestBody: GuestDiagnosticSettingsAssociationResource): Observable<GuestDiagnosticSettingsAssociationResource> {
			return this.http.put<GuestDiagnosticSettingsAssociationResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociation/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete guest diagnostics association settings.
		 * Delete {resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName}
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type.
		 * @param {string} associationName The name of the diagnostic settings association.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The diagnostic settings association was successfully deleted.
		 */
		GuestDiagnosticsSettingsAssociation_Delete(resourceUri: string, associationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociation/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing guestDiagnosticsSettingsAssociation Resource. To update other fields use the CreateOrUpdate method
		 * Patch {resourceUri}/providers/microsoft.insights/guestDiagnosticSettingsAssociation/{associationName}
		 * @param {string} resourceUri The fully qualified ID of the resource, including the resource name and resource type.
		 * @param {string} api_version Client Api Version.
		 * @param {string} associationName The name of the diagnostic settings association.
		 * @param {GuestDiagnosticSettingsAssociationResourcePatch} requestBody Parameters supplied to the operation.
		 * @return {GuestDiagnosticSettingsAssociationResource} An existing guest diagnostics setting resource was successfully updated.
		 */
		GuestDiagnosticsSettingsAssociation_Update(resourceUri: string, api_version: string, associationName: string, requestBody: GuestDiagnosticSettingsAssociationResourcePatch): Observable<GuestDiagnosticSettingsAssociationResource> {
			return this.http.patch<GuestDiagnosticSettingsAssociationResource>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/guestDiagnosticSettingsAssociation/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

