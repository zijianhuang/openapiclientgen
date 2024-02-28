import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** this is the management partner operations error */
	export interface Error {

		/** this is the extended error info */
		error?: ExtendedErrorInfo;
	}

	/** this is the management partner operations error */
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}


	/** this is the extended error info */
	export interface ExtendedErrorInfo {

		/** this is the error response code that management partner operations may return */
		code?: ExtendedErrorInfoCode | null;

		/** this is the extended error info message */
		message?: string | null;
	}

	/** this is the extended error info */
	export interface ExtendedErrorInfoFormProperties {

		/** this is the error response code that management partner operations may return */
		code: FormControl<ExtendedErrorInfoCode | null | undefined>,

		/** this is the extended error info message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateExtendedErrorInfoFormGroup() {
		return new FormGroup<ExtendedErrorInfoFormProperties>({
			code: new FormControl<ExtendedErrorInfoCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExtendedErrorInfoCode { NotFound = 'NotFound', Conflict = 'Conflict', BadRequest = 'BadRequest' }


	/** this is the error response code that management partner operations may return */
	export enum ErrorResponseCode { NotFound = 'NotFound', Conflict = 'Conflict', BadRequest = 'BadRequest' }


	/** this is the management partner state: Active or Deleted */
	export enum ManagementPartnerState { Active = 'Active', Deleted = 'Deleted' }


	/** this is the management partner operation */
	export interface OperationDisplay {

		/** the is management partner operation description */
		description?: string | null;

		/** the is management partner operation */
		operation?: string | null;

		/** the is management partner provider */
		provider?: string | null;

		/** the is management partner resource */
		resource?: string | null;
	}

	/** this is the management partner operation */
	export interface OperationDisplayFormProperties {

		/** the is management partner operation description */
		description: FormControl<string | null | undefined>,

		/** the is management partner operation */
		operation: FormControl<string | null | undefined>,

		/** the is management partner provider */
		provider: FormControl<string | null | undefined>,

		/** the is management partner resource */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** this is the management partner operations list */
	export interface OperationList {

		/** Url to get the next page of items. */
		nextLink?: string | null;

		/** this is the operation response list */
		value?: Array<OperationResponse>;
	}

	/** this is the management partner operations list */
	export interface OperationListFormProperties {

		/** Url to get the next page of items. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** this is the management partner operations response */
	export interface OperationResponse {

		/** this is the management partner operation */
		display?: OperationDisplay;

		/** this is the operation response name */
		name?: string | null;

		/** the is operation response origin information */
		origin?: string | null;
	}

	/** this is the management partner operations response */
	export interface OperationResponseFormProperties {

		/** this is the operation response name */
		name: FormControl<string | null | undefined>,

		/** the is operation response origin information */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationResponseFormGroup() {
		return new FormGroup<OperationResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** this is the management partner properties */
	export interface PartnerProperties {

		/** This is the DateTime when the partner was created. */
		createdTime?: Date | null;

		/** This is the object id. */
		objectId?: string | null;

		/** This is the partner id */
		partnerId?: string | null;

		/** This is the partner name */
		partnerName?: string | null;

		/** this is the management partner state: Active or Deleted */
		state?: ManagementPartnerState | null;

		/** This is the tenant id. */
		tenantId?: string | null;

		/** This is the DateTime when the partner was updated. */
		updatedTime?: Date | null;

		/** This is the version. */
		version?: string | null;
	}

	/** this is the management partner properties */
	export interface PartnerPropertiesFormProperties {

		/** This is the DateTime when the partner was created. */
		createdTime: FormControl<Date | null | undefined>,

		/** This is the object id. */
		objectId: FormControl<string | null | undefined>,

		/** This is the partner id */
		partnerId: FormControl<string | null | undefined>,

		/** This is the partner name */
		partnerName: FormControl<string | null | undefined>,

		/** this is the management partner state: Active or Deleted */
		state: FormControl<ManagementPartnerState | null | undefined>,

		/** This is the tenant id. */
		tenantId: FormControl<string | null | undefined>,

		/** This is the DateTime when the partner was updated. */
		updatedTime: FormControl<Date | null | undefined>,

		/** This is the version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePartnerPropertiesFormGroup() {
		return new FormGroup<PartnerPropertiesFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			partnerName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ManagementPartnerState | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			updatedTime: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** this is the management partner operations response */
	export interface PartnerResponse {

		/**
		 * Type of the partner
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		etag?: number | null;

		/** Identifier of the partner */
		id?: string | null;

		/** Name of the partner */
		name?: string | null;

		/** this is the management partner properties */
		properties?: PartnerProperties;

		/** Type of resource. "Microsoft.ManagementPartner/partners" */
		type?: string | null;
	}

	/** this is the management partner operations response */
	export interface PartnerResponseFormProperties {

		/**
		 * Type of the partner
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		etag: FormControl<number | null | undefined>,

		/** Identifier of the partner */
		id: FormControl<string | null | undefined>,

		/** Name of the partner */
		name: FormControl<string | null | undefined>,

		/** Type of resource. "Microsoft.ManagementPartner/partners" */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePartnerResponseFormGroup() {
		return new FormGroup<PartnerResponseFormProperties>({
			etag: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get operations.
		 * List all the operations.
		 * Get providers/Microsoft.ManagementPartner/operations
		 * @param {string} api_version Supported version.
		 * @return {OperationList} List all the operations.
		 */
		Operation_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.ManagementPartner/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a specific `Partner`.
		 * Get the management partner using the objectId and tenantId.
		 * Get providers/Microsoft.ManagementPartner/partners
		 * @param {string} api_version Supported version.
		 * @return {PartnerResponse} Get the details of the `Partner`.
		 */
		Partners_Get(api_version: string): Observable<PartnerResponse> {
			return this.http.get<PartnerResponse>(this.baseUri + 'providers/Microsoft.ManagementPartner/partners?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a specific `Partner`.
		 * Get the management partner using the partnerId, objectId and tenantId.
		 * Get providers/Microsoft.ManagementPartner/partners/{partnerId}
		 * @param {string} partnerId Id of the Partner
		 * @param {string} api_version Supported version.
		 * @return {PartnerResponse} Get the details of the `Partner`.
		 */
		Partner_Get(partnerId: string, api_version: string): Observable<PartnerResponse> {
			return this.http.get<PartnerResponse>(this.baseUri + 'providers/Microsoft.ManagementPartner/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a specific `Partner`.
		 * Create a management partner for the objectId and tenantId.
		 * Put providers/Microsoft.ManagementPartner/partners/{partnerId}
		 * @param {string} partnerId Id of the Partner
		 * @param {string} api_version Supported version.
		 * @return {PartnerResponse} Get the details of the `Partner`.
		 */
		Partner_Create(partnerId: string, api_version: string): Observable<PartnerResponse> {
			return this.http.put<PartnerResponse>(this.baseUri + 'providers/Microsoft.ManagementPartner/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Delete a specific `Partner`.
		 * Delete the management partner for the objectId and tenantId.
		 * Delete providers/Microsoft.ManagementPartner/partners/{partnerId}
		 * @param {string} partnerId Id of the Partner
		 * @param {string} api_version Supported version.
		 * @return {void} Deleted the `Partner`.
		 */
		Partner_Delete(partnerId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.ManagementPartner/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a specific `Partner`.
		 * Update the management partner for the objectId and tenantId.
		 * Patch providers/Microsoft.ManagementPartner/partners/{partnerId}
		 * @param {string} partnerId Id of the Partner
		 * @param {string} api_version Supported version.
		 * @return {PartnerResponse} Get the details of the `Partner`.
		 */
		Partner_Update(partnerId: string, api_version: string): Observable<PartnerResponse> {
			return this.http.patch<PartnerResponse>(this.baseUri + 'providers/Microsoft.ManagementPartner/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

