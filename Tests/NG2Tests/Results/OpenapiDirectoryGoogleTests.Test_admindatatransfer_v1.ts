import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The JSON template for an Application resource. */
	export interface Application {

		/** Etag of the resource. */
		etag?: string | null;

		/** The application's ID. */
		id?: string | null;

		/** Identifies the resource as a DataTransfer Application Resource. */
		kind?: string | null;

		/** The application's name. */
		name?: string | null;

		/** The list of all possible transfer parameters for this application. These parameters can be used to select the data of the user in this application to be transferred. */
		transferParams?: Array<ApplicationTransferParam>;
	}

	/** The JSON template for an Application resource. */
	export interface ApplicationFormProperties {

		/** Etag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The application's ID. */
		id: FormControl<string | null | undefined>,

		/** Identifies the resource as a DataTransfer Application Resource. */
		kind: FormControl<string | null | undefined>,

		/** The application's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template for application transfer parameters. */
	export interface ApplicationTransferParam {

		/** The type of the transfer parameter. eg: 'PRIVACY_LEVEL' */
		key?: string | null;

		/** The value of the corresponding transfer parameter. eg: 'PRIVATE' or 'SHARED' */
		value?: Array<string>;
	}

	/** Template for application transfer parameters. */
	export interface ApplicationTransferParamFormProperties {

		/** The type of the transfer parameter. eg: 'PRIVACY_LEVEL' */
		key: FormControl<string | null | undefined>,
	}
	export function CreateApplicationTransferParamFormGroup() {
		return new FormGroup<ApplicationTransferParamFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template to map fields of ApplicationDataTransfer resource. */
	export interface ApplicationDataTransfer {

		/** The application's ID. */
		applicationId?: string | null;

		/** The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. */
		applicationTransferParams?: Array<ApplicationTransferParam>;

		/** Current status of transfer for this application. (Read-only) */
		applicationTransferStatus?: string | null;
	}

	/** Template to map fields of ApplicationDataTransfer resource. */
	export interface ApplicationDataTransferFormProperties {

		/** The application's ID. */
		applicationId: FormControl<string | null | undefined>,

		/** Current status of transfer for this application. (Read-only) */
		applicationTransferStatus: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDataTransferFormGroup() {
		return new FormGroup<ApplicationDataTransferFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			applicationTransferStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template for a collection of Applications. */
	export interface ApplicationsListResponse {

		/** List of applications that support data transfer and are also installed for the customer. */
		applications?: Array<Application>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Identifies the resource as a collection of Applications. */
		kind?: string | null;

		/** Continuation token which will be used to specify next page in list API. */
		nextPageToken?: string | null;
	}

	/** Template for a collection of Applications. */
	export interface ApplicationsListResponseFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies the resource as a collection of Applications. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token which will be used to specify next page in list API. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsListResponseFormGroup() {
		return new FormGroup<ApplicationsListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON template for a DataTransfer resource. */
	export interface DataTransfer {

		/** List of per application data transfer resources. It contains data transfer details of the applications associated with this transfer resource. Note that this list is also used to specify the applications for which data transfer has to be done at the time of the transfer resource creation. */
		applicationDataTransfers?: Array<ApplicationDataTransfer>;

		/** ETag of the resource. */
		etag?: string | null;

		/** The transfer's ID (Read-only). */
		id?: string | null;

		/** Identifies the resource as a DataTransfer request. */
		kind?: string | null;

		/** ID of the user to whom the data is being transferred. */
		newOwnerUserId?: string | null;

		/** ID of the user whose data is being transferred. */
		oldOwnerUserId?: string | null;

		/** Overall transfer status (Read-only). */
		overallTransferStatusCode?: string | null;

		/** The time at which the data transfer was requested (Read-only). */
		requestTime?: Date | null;
	}

	/** The JSON template for a DataTransfer resource. */
	export interface DataTransferFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The transfer's ID (Read-only). */
		id: FormControl<string | null | undefined>,

		/** Identifies the resource as a DataTransfer request. */
		kind: FormControl<string | null | undefined>,

		/** ID of the user to whom the data is being transferred. */
		newOwnerUserId: FormControl<string | null | undefined>,

		/** ID of the user whose data is being transferred. */
		oldOwnerUserId: FormControl<string | null | undefined>,

		/** Overall transfer status (Read-only). */
		overallTransferStatusCode: FormControl<string | null | undefined>,

		/** The time at which the data transfer was requested (Read-only). */
		requestTime: FormControl<Date | null | undefined>,
	}
	export function CreateDataTransferFormGroup() {
		return new FormGroup<DataTransferFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newOwnerUserId: new FormControl<string | null | undefined>(undefined),
			oldOwnerUserId: new FormControl<string | null | undefined>(undefined),
			overallTransferStatusCode: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Template for a collection of DataTransfer resources. */
	export interface DataTransfersListResponse {

		/** List of data transfer requests. */
		dataTransfers?: Array<DataTransfer>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Identifies the resource as a collection of data transfer requests. */
		kind?: string | null;

		/** Continuation token which will be used to specify next page in list API. */
		nextPageToken?: string | null;
	}

	/** Template for a collection of DataTransfer resources. */
	export interface DataTransfersListResponseFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies the resource as a collection of data transfer requests. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token which will be used to specify next page in list API. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDataTransfersListResponseFormGroup() {
		return new FormGroup<DataTransfersListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the applications available for data transfer for a customer.
		 * Get applications
		 * @param {string} customerId Immutable ID of the G Suite account.
		 * @param {number} maxResults Maximum number of results to return. Default is 100.
		 * @param {string} pageToken Token to specify next page in the list.
		 * @return {void} Successful response
		 */
		Datatransfer_applications_list(customerId: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'applications?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an application for the given application ID.
		 * Get applications/{applicationId}
		 * @param {string} applicationId ID of the application resource to be retrieved.
		 * @return {void} Successful response
		 */
		Datatransfer_applications_get(applicationId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the transfers for a customer by source user, destination user, or status.
		 * Get transfers
		 * @param {string} customerId Immutable ID of the G Suite account.
		 * @param {number} maxResults Maximum number of results to return. Default is 100.
		 * @param {string} newOwnerUserId Destination user's profile ID.
		 * @param {string} oldOwnerUserId Source user's profile ID.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @param {string} status Status of the transfer.
		 * @return {void} Successful response
		 */
		Datatransfer_transfers_list(customerId: string | null | undefined, maxResults: number | null | undefined, newOwnerUserId: string | null | undefined, oldOwnerUserId: string | null | undefined, pageToken: string | null | undefined, status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transfers?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&newOwnerUserId=' + (newOwnerUserId == null ? '' : encodeURIComponent(newOwnerUserId)) + '&oldOwnerUserId=' + (oldOwnerUserId == null ? '' : encodeURIComponent(oldOwnerUserId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a data transfer request.
		 * Post transfers
		 * @return {void} Successful response
		 */
		Datatransfer_transfers_insert(requestBody: DataTransfer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a data transfer request by its resource ID.
		 * Get transfers/{dataTransferId}
		 * @param {string} dataTransferId ID of the resource to be retrieved. This is returned in the response from the insert method.
		 * @return {void} Successful response
		 */
		Datatransfer_transfers_get(dataTransferId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'transfers/' + (dataTransferId == null ? '' : encodeURIComponent(dataTransferId)), { observe: 'response', responseType: 'text' });
		}
	}

}

