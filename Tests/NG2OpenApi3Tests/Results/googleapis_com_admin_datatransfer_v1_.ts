import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Application resources represent applications installed on the domain that support transferring ownership of user data. */
	export interface Application {

		/** Etag of the resource. */
		etag?: string | null;

		/** The application's ID. Retrievable by using the [`applications.list()`](/admin-sdk/data-transfer/reference/rest/v1/applications/list) method. */
		id?: string | null;

		/** Identifies the resource as a DataTransfer Application Resource. */
		kind?: string | null;

		/** The application's name. */
		name?: string | null;

		/** The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer. */
		transferParams?: Array<ApplicationTransferParam>;
	}

	/** Application resources represent applications installed on the domain that support transferring ownership of user data. */
	export interface ApplicationFormProperties {

		/** Etag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The application's ID. Retrievable by using the [`applications.list()`](/admin-sdk/data-transfer/reference/rest/v1/applications/list) method. */
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

		/** The type of the transfer parameter, such as `PRIVACY_LEVEL`. */
		key?: string | null;

		/** The value of the transfer parameter, such as `PRIVATE` or `SHARED`. */
		value?: Array<string>;
	}

	/** Template for application transfer parameters. */
	export interface ApplicationTransferParamFormProperties {

		/** The type of the transfer parameter, such as `PRIVACY_LEVEL`. */
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

		/** The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference. */
		applicationTransferParams?: Array<ApplicationTransferParam>;

		/** Read-only. Current status of transfer for this application. */
		applicationTransferStatus?: string | null;
	}

	/** Template to map fields of ApplicationDataTransfer resource. */
	export interface ApplicationDataTransferFormProperties {

		/** The application's ID. */
		applicationId: FormControl<string | null | undefined>,

		/** Read-only. Current status of transfer for this application. */
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

		/** The list of applications that support data transfer and are also installed for the customer. */
		applications?: Array<Application>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Identifies the resource as a collection of Applications. */
		kind?: string | null;

		/** Token to specify the next page in the list. */
		nextPageToken?: string | null;
	}

	/** Template for a collection of Applications. */
	export interface ApplicationsListResponseFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies the resource as a collection of Applications. */
		kind: FormControl<string | null | undefined>,

		/** Token to specify the next page in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsListResponseFormGroup() {
		return new FormGroup<ApplicationsListResponseFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Transfer resource represents the transfer of the ownership of user data between users. */
	export interface DataTransfer {

		/** The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation. */
		applicationDataTransfers?: Array<ApplicationDataTransfer>;

		/** ETag of the resource. */
		etag?: string | null;

		/** Read-only. The transfer's ID. */
		id?: string | null;

		/** Identifies the resource as a DataTransfer request. */
		kind?: string | null;

		/** ID of the user to whom the data is being transferred. */
		newOwnerUserId?: string | null;

		/** ID of the user whose data is being transferred. */
		oldOwnerUserId?: string | null;

		/** Read-only. Overall transfer status. */
		overallTransferStatusCode?: string | null;

		/** Read-only. The time at which the data transfer was requested. */
		requestTime?: Date | null;
	}

	/** A Transfer resource represents the transfer of the ownership of user data between users. */
	export interface DataTransferFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Read-only. The transfer's ID. */
		id: FormControl<string | null | undefined>,

		/** Identifies the resource as a DataTransfer request. */
		kind: FormControl<string | null | undefined>,

		/** ID of the user to whom the data is being transferred. */
		newOwnerUserId: FormControl<string | null | undefined>,

		/** ID of the user whose data is being transferred. */
		oldOwnerUserId: FormControl<string | null | undefined>,

		/** Read-only. Overall transfer status. */
		overallTransferStatusCode: FormControl<string | null | undefined>,

		/** Read-only. The time at which the data transfer was requested. */
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

		/** Token to specify the next page in the list. */
		nextPageToken?: string | null;
	}

	/** Template for a collection of DataTransfer resources. */
	export interface DataTransfersListResponseFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies the resource as a collection of data transfer requests. */
		kind: FormControl<string | null | undefined>,

		/** Token to specify the next page in the list. */
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
		 * Get admin/datatransfer/v1/applications
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @param {number} maxResults Maximum number of results to return. Default is 100.
		 *     Minimum: 1    Maximum: 500
		 * @param {string} pageToken Token to specify next page in the list.
		 * @return {ApplicationsListResponse} Successful response
		 */
		Datatransfer_applications_list(customerId: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ApplicationsListResponse> {
			return this.http.get<ApplicationsListResponse>(this.baseUri + 'admin/datatransfer/v1/applications?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves information about an application for the given application ID.
		 * Get admin/datatransfer/v1/applications/{applicationId}
		 * @param {string} applicationId ID of the application resource to be retrieved.
		 * @return {Application} Successful response
		 */
		Datatransfer_applications_get(applicationId: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'admin/datatransfer/v1/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * Lists the transfers for a customer by source user, destination user, or status.
		 * Get admin/datatransfer/v1/transfers
		 * @param {string} customerId Immutable ID of the Google Workspace account.
		 * @param {number} maxResults Maximum number of results to return. Default is 100.
		 *     Minimum: 1    Maximum: 500
		 * @param {string} newOwnerUserId Destination user's profile ID.
		 * @param {string} oldOwnerUserId Source user's profile ID.
		 * @param {string} pageToken Token to specify the next page in the list.
		 * @param {string} status Status of the transfer.
		 * @return {DataTransfersListResponse} Successful response
		 */
		Datatransfer_transfers_list(customerId: string | null | undefined, maxResults: number | null | undefined, newOwnerUserId: string | null | undefined, oldOwnerUserId: string | null | undefined, pageToken: string | null | undefined, status: string | null | undefined): Observable<DataTransfersListResponse> {
			return this.http.get<DataTransfersListResponse>(this.baseUri + 'admin/datatransfer/v1/transfers?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&maxResults=' + maxResults + '&newOwnerUserId=' + (newOwnerUserId == null ? '' : encodeURIComponent(newOwnerUserId)) + '&oldOwnerUserId=' + (oldOwnerUserId == null ? '' : encodeURIComponent(oldOwnerUserId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), {});
		}

		/**
		 * Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
		 * Post admin/datatransfer/v1/transfers
		 * @return {DataTransfer} Successful response
		 */
		Datatransfer_transfers_insert(requestBody: DataTransfer): Observable<DataTransfer> {
			return this.http.post<DataTransfer>(this.baseUri + 'admin/datatransfer/v1/transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a data transfer request by its resource ID.
		 * Get admin/datatransfer/v1/transfers/{dataTransferId}
		 * @param {string} dataTransferId ID of the resource to be retrieved. This is returned in the response from the insert method.
		 * @return {DataTransfer} Successful response
		 */
		Datatransfer_transfers_get(dataTransferId: string): Observable<DataTransfer> {
			return this.http.get<DataTransfer>(this.baseUri + 'admin/datatransfer/v1/transfers/' + (dataTransferId == null ? '' : encodeURIComponent(dataTransferId)), {});
		}
	}

}

