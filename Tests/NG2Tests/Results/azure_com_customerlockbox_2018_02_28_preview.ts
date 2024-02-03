import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request content object, in the use of Approve or Deny a Lockbox request. */
	export interface Approval {

		/** Approval decision to the Lockbox request. */
		decision?: ApprovalDecision | null;

		/** Reason of the decision */
		reason?: string | null;
	}

	/** Request content object, in the use of Approve or Deny a Lockbox request. */
	export interface ApprovalFormProperties {

		/** Approval decision to the Lockbox request. */
		decision: FormControl<ApprovalDecision | null | undefined>,

		/** Reason of the decision */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateApprovalFormGroup() {
		return new FormGroup<ApprovalFormProperties>({
			decision: new FormControl<ApprovalDecision | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApprovalDecision { Approve = 'Approve', Deny = 'Deny' }


	/** An error additional info for the Lockbox service. */
	export interface ErrorAdditionalInfo {
		info?: ErrorAdditionalInfoInfo;

		/** The type of error info. */
		type?: string | null;
	}

	/** An error additional info for the Lockbox service. */
	export interface ErrorAdditionalInfoFormProperties {

		/** The type of error info. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorAdditionalInfoFormGroup() {
		return new FormGroup<ErrorAdditionalInfoFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorAdditionalInfoInfo {

		/** The status of the request. */
		currentStatus?: ErrorAdditionalInfoInfoCurrentStatus | null;
	}
	export interface ErrorAdditionalInfoInfoFormProperties {

		/** The status of the request. */
		currentStatus: FormControl<ErrorAdditionalInfoInfoCurrentStatus | null | undefined>,
	}
	export function CreateErrorAdditionalInfoInfoFormGroup() {
		return new FormGroup<ErrorAdditionalInfoInfoFormProperties>({
			currentStatus: new FormControl<ErrorAdditionalInfoInfoCurrentStatus | null | undefined>(undefined),
		});

	}

	export enum ErrorAdditionalInfoInfoCurrentStatus { Initializing = 'Initializing', Pending = 'Pending', Approving = 'Approving', Denying = 'Denying', Approved = 'Approved', Denied = 'Denied', Expired = 'Expired', Revoking = 'Revoking', Revoked = 'Revoked', Error = 'Error', Unknown = 'Unknown', Completed = 'Completed', Completing = 'Completing' }


	/** An error response body from the Lockbox service. */
	export interface ErrorBody {

		/** A list of error details about the error. */
		additionalInfo?: Array<ErrorAdditionalInfo>;

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response body from the Lockbox service. */
	export interface ErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorBodyFormGroup() {
		return new FormGroup<ErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Lockbox service. */
	export interface ErrorResponse {

		/** An error response body from the Lockbox service. */
		error?: ErrorBody;
	}

	/** An error response from the Lockbox service. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** A Lockbox request response object, containing all information associated with the request. */
	export interface LockboxRequestResponse {

		/** The Arm resource id of the Lockbox request. */
		id?: string | null;

		/** The name of the Lockbox request. */
		name?: string | null;

		/** The properties that are associated with a lockbox request. */
		properties?: LockboxRequestResponseProperties;

		/** The type of the Lockbox request. */
		type?: string | null;
	}

	/** A Lockbox request response object, containing all information associated with the request. */
	export interface LockboxRequestResponseFormProperties {

		/** The Arm resource id of the Lockbox request. */
		id: FormControl<string | null | undefined>,

		/** The name of the Lockbox request. */
		name: FormControl<string | null | undefined>,

		/** The type of the Lockbox request. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLockboxRequestResponseFormGroup() {
		return new FormGroup<LockboxRequestResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a lockbox request. */
	export interface LockboxRequestResponseProperties {

		/** The creation time of the request. */
		createdDateTime?: Date | null;

		/** The duration of the request in hours. */
		duration?: number | null;

		/** The expiration time of the request. */
		expirationDateTime?: Date | null;

		/** The justification of the requestor. */
		justification?: string | null;

		/** The Lockbox request ID. */
		requestId?: string | null;

		/** A list of resource IDs associated with the Lockbox request separated by ','. */
		requestedResourceIds?: Array<string>;

		/** The resource type of the requested resources. */
		resourceType?: string | null;

		/** The status of the request. */
		status?: ErrorAdditionalInfoInfoCurrentStatus | null;

		/** The subscription ID. */
		subscriptionId?: string | null;

		/** The url of the support case. */
		supportCaseUrl?: string | null;

		/** The id of the support request associated. */
		supportRequest?: string | null;
	}

	/** The properties that are associated with a lockbox request. */
	export interface LockboxRequestResponsePropertiesFormProperties {

		/** The creation time of the request. */
		createdDateTime: FormControl<Date | null | undefined>,

		/** The duration of the request in hours. */
		duration: FormControl<number | null | undefined>,

		/** The expiration time of the request. */
		expirationDateTime: FormControl<Date | null | undefined>,

		/** The justification of the requestor. */
		justification: FormControl<string | null | undefined>,

		/** The Lockbox request ID. */
		requestId: FormControl<string | null | undefined>,

		/** The resource type of the requested resources. */
		resourceType: FormControl<string | null | undefined>,

		/** The status of the request. */
		status: FormControl<ErrorAdditionalInfoInfoCurrentStatus | null | undefined>,

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The url of the support case. */
		supportCaseUrl: FormControl<string | null | undefined>,

		/** The id of the support request associated. */
		supportRequest: FormControl<string | null | undefined>,
	}
	export function CreateLockboxRequestResponsePropertiesFormGroup() {
		return new FormGroup<LockboxRequestResponsePropertiesFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			expirationDateTime: new FormControl<Date | null | undefined>(undefined),
			justification: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ErrorAdditionalInfoInfoCurrentStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			supportCaseUrl: new FormControl<string | null | undefined>(undefined),
			supportRequest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the request. */
	export enum LockboxRequestStatus { Initializing = 'Initializing', Pending = 'Pending', Approving = 'Approving', Denying = 'Denying', Approved = 'Approved', Denied = 'Denied', Expired = 'Expired', Revoking = 'Revoking', Revoked = 'Revoked', Error = 'Error', Unknown = 'Unknown', Completed = 'Completed', Completing = 'Completing' }


	/** Operation result model for ARM RP */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: any;

		/** Gets or sets a value indicating whether it is a data plane action */
		isDataAction?: string | null;

		/** Gets or sets action name */
		name?: string | null;

		/** Gets or sets origin */
		origin?: string | null;

		/** Gets or sets properties */
		properties?: string | null;
	}

	/** Operation result model for ARM RP */
	export interface OperationFormProperties {

		/** Contains the localized display information for this particular operation / action. */
		display: FormControl<any | null | undefined>,

		/** Gets or sets a value indicating whether it is a data plane action */
		isDataAction: FormControl<string | null | undefined>,

		/** Gets or sets action name */
		name: FormControl<string | null | undefined>,

		/** Gets or sets origin */
		origin: FormControl<string | null | undefined>,

		/** Gets or sets properties */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			isDataAction: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Customer Lockbox operations. It contains a list of operations. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Customer Lockbox operations supported by the Microsoft.StreamAnalytics resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Customer Lockbox operations. It contains a list of operations. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing a list of streaming jobs. */
	export interface RequestListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** A list of Lockbox requests. Populated by a 'List' operation. */
		value?: Array<LockboxRequestResponse>;
	}

	/** Object containing a list of streaming jobs. */
	export interface RequestListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRequestListResultFormGroup() {
		return new FormGroup<RequestListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available REST API operations.
		 * Get providers/Microsoft.CustomerLockbox/operations
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {OperationListResult} OK. Successfully retrieved operation list.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.CustomerLockbox/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the Lockbox requests in the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests
		 * @param {string} filter The $filter OData query parameter. Only filter by request status is supported, e.g $filter=properties/status eq 'Pending'
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {RequestListResult} Successfully listed the Lockbox requests under the given subscription.
		 */
		Requests_List(filter: string | null | undefined, subscriptionId: string): Observable<RequestListResult> {
			return this.http.get<RequestListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CustomerLockbox/requests?filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Get Customer Lockbox request
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests/{requestId}
		 * @param {string} requestId The Lockbox request ID.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {LockboxRequestResponse} Retrieval of Customer Lockbox request successful.
		 */
		Requests_Get(requestId: string, subscriptionId: string, api_version: string): Observable<LockboxRequestResponse> {
			return this.http.get<LockboxRequestResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CustomerLockbox/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update Customer Lockbox request approval status API
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.CustomerLockbox/requests/{requestId}/UpdateApproval
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} requestId The Lockbox request ID.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {Approval} requestBody The approval object to update request status.
		 * @return {Approval} Update of Request Status successful
		 */
		Requests_UpdateStatus(subscriptionId: string, requestId: string, api_version: string, requestBody: Approval): Observable<Approval> {
			return this.http.post<Approval>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CustomerLockbox/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)) + '/UpdateApproval&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

