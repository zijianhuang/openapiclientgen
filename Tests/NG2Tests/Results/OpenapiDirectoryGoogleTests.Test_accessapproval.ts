import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Settings on a Project/Folder/Organization related to Access Approval. */
	export interface AccessApprovalSettings {

		/**
		 * Output only. This field is read only (not settable via
		 * UpdateAccessAccessApprovalSettings method). If the field is true, that
		 * indicates that at least one service is enrolled for Access Approval in one
		 * or more ancestors of the Project or Folder (this field will always be
		 * unset for the organization since organizations do not have ancestors).
		 */
		enrolledAncestor?: boolean | null;

		/**
		 * A list of Google Cloud Services for which the given resource has Access
		 * Approval enrolled. Access requests for the resource given by name against
		 * any of these services contained here will be required to have explicit
		 * approval. If name refers to an organization, enrollment can be done for
		 * individual services. If name refers to a folder or project, enrollment can
		 * only be done on an all or nothing basis.
		 * If a cloud_product is repeated in this list, the first entry will be
		 * honored and all following entries will be discarded. A maximum of 10
		 * enrolled services will be enforced, to be expanded as the set of supported
		 * services is expanded.
		 */
		enrolledServices?: Array<EnrolledService> | null;

		/**
		 * The resource name of the settings. Format is one of:
		 * <ol>
		 * <li>"projects/{project_id}/accessApprovalSettings"</li>
		 * <li>"folders/{folder_id}/accessApprovalSettings"</li>
		 * <li>"organizations/{organization_id}/accessApprovalSettings"</li>
		 * <ol>
		 */
		name?: string | null;

		/**
		 * A list of email addresses to which notifications relating to approval
		 * requests should be sent. Notifications relating to a resource will be sent
		 * to all emails in the settings of ancestor resources of that resource. A
		 * maximum of 50 email addresses are allowed.
		 */
		notificationEmails?: Array<string> | null;
	}


	/** Represents the enrollment of a cloud resource into a specific service. */
	export interface EnrolledService {

		/**
		 * The product for which Access Approval will be enrolled. Allowed values are
		 * listed below (case-sensitive):
		 * <ol>
		 * <li>all</li>
		 * <li>appengine.googleapis.com</li>
		 * <li>bigquery.googleapis.com</li>
		 * <li>bigtable.googleapis.com</li>
		 * <li>cloudkms.googleapis.com</li>
		 * <li>compute.googleapis.com</li>
		 * <li>dataflow.googleapis.com</li>
		 * <li>iam.googleapis.com</li>
		 * <li>pubsub.googleapis.com</li>
		 * <li>storage.googleapis.com</li>
		 * <ol>
		 */
		cloudProduct?: string | null;

		/** The enrollment level of the service. */
		enrollmentLevel?: EnrolledServiceEnrollmentLevel | null;
	}

	export enum EnrolledServiceEnrollmentLevel { ENROLLMENT_LEVEL_UNSPECIFIED = 0, BLOCK_ALL = 1 }


	/** Home office and physical location of the principal. */
	export interface AccessLocations {

		/**
		 * The "home office" location of the principal. A two-letter country code
		 * (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some
		 * limited situations Google systems may refer refer to a region code instead
		 * of a country code.
		 * Possible Region Codes:
		 * <ol>
		 * <li>ASI: Asia</li>
		 * <li>EUR: Europe</li>
		 * <li>OCE: Oceania</li>
		 * <li>AFR: Africa</li>
		 * <li>NAM: North America</li>
		 * <li>SAM: South America</li>
		 * <li>ANT: Antarctica</li>
		 * <li>ANY: Any location</li>
		 * </ol>
		 */
		principalOfficeCountry?: string | null;

		/**
		 * Physical location of the principal at the time of the access. A
		 * two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or
		 * a region code. In some limited situations Google systems may refer refer to
		 * a region code instead of a country code.
		 * Possible Region Codes:
		 * <ol>
		 * <li>ASI: Asia</li>
		 * <li>EUR: Europe</li>
		 * <li>OCE: Oceania</li>
		 * <li>AFR: Africa</li>
		 * <li>NAM: North America</li>
		 * <li>SAM: South America</li>
		 * <li>ANT: Antarctica</li>
		 * <li>ANY: Any location</li>
		 * </ol>
		 */
		principalPhysicalLocationCountry?: string | null;
	}

	export interface AccessReason {

		/** More detail about certain reason types. See comments for each type above. */
		detail?: string | null;

		/** Type of access justification. */
		type?: AccessReasonType | null;
	}

	export enum AccessReasonType { TYPE_UNSPECIFIED = 0, CUSTOMER_INITIATED_SUPPORT = 1, GOOGLE_INITIATED_SERVICE = 2, GOOGLE_INITIATED_REVIEW = 3 }


	/** A request for the customer to approve access to a resource. */
	export interface ApprovalRequest {

		/** A decision that has been made to approve access to a resource. */
		approve?: ApproveDecision | null;

		/** A decision that has been made to dismiss an approval request. */
		dismiss?: DismissDecision | null;

		/**
		 * The resource name of the request. Format is
		 * "{projects|folders|organizations}/{id}/approvalRequests/{approval_request_id}".
		 */
		name?: string | null;

		/** The time at which approval was requested. */
		requestTime?: string | null;

		/**
		 * The requested expiration for the approval. If the request is approved,
		 * access will be granted from the time of approval until the expiration time.
		 */
		requestedExpiration?: string | null;

		/** Home office and physical location of the principal. */
		requestedLocations?: AccessLocations | null;
		requestedReason?: AccessReason | null;

		/**
		 * The resource for which approval is being requested. The format of the
		 * resource name is defined at
		 * https://cloud.google.com/apis/design/resource_names. The resource name here
		 * may either be a "full" resource name (e.g.
		 * "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative"
		 * resource name (e.g. "shelves/shelf1/books/book2") as described in the
		 * resource name specification.
		 */
		requestedResourceName?: string | null;

		/** The properties associated with the resource of the request. */
		requestedResourceProperties?: ResourceProperties | null;
	}


	/** A decision that has been made to approve access to a resource. */
	export interface ApproveDecision {

		/** The time at which approval was granted. */
		approveTime?: string | null;

		/** The time at which the approval expires. */
		expireTime?: string | null;
	}


	/** A decision that has been made to dismiss an approval request. */
	export interface DismissDecision {

		/** The time at which the approval request was dismissed. */
		dismissTime?: string | null;
	}


	/** The properties associated with the resource of the request. */
	export interface ResourceProperties {

		/**
		 * Whether an approval will exclude the descendants of the resource being
		 * requested.
		 */
		excludesDescendants?: boolean | null;
	}


	/** Request to approve an ApprovalRequest. */
	export interface ApproveApprovalRequestMessage {

		/** The expiration time of this approval. */
		expireTime?: string | null;
	}


	/** Request to dismiss an approval request. */
	export interface DismissApprovalRequestMessage {
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** Response to listing of ApprovalRequest objects. */
	export interface ListApprovalRequestsResponse {

		/** Approval request details. */
		approvalRequests?: Array<ApprovalRequest> | null;

		/** Token to retrieve the next page of results, or empty if there are no more. */
		nextPageToken?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the settings associated with a project, folder, or organization.
		 * This will have the effect of disabling Access Approval for the project,
		 * folder, or organization, but only if all ancestors also have Access
		 * Approval disabled. If Access Approval is enabled at a higher level of the
		 * hierarchy, then Access Approval will still be enabled at this level as
		 * the settings are inherited.
		 * Delete v1beta1/{name}
		 * @param {string} name Name of the AccessApprovalSettings to delete.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_deleteAccessApprovalSettings(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an approval request. Returns NOT_FOUND if the request does not exist.
		 * Get v1beta1/{name}
		 * @param {string} name Name of the approval request to retrieve.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_approvalRequests_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the settings associated with a project, folder, or organization.
		 * Settings to update are determined by the value of field_mask.
		 * Patch v1beta1/{name}
		 * @param {string} name The resource name of the settings. Format is one of:
		 * <ol>
		 *   <li>"projects/{project_id}/accessApprovalSettings"</li>
		 *   <li>"folders/{folder_id}/accessApprovalSettings"</li>
		 *   <li>"organizations/{organization_id}/accessApprovalSettings"</li>
		 * <ol>
		 * @param {string} updateMask For the `FieldMask` definition, see
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * If this field is left unset, only the notification_emails field will be
		 * updated.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_updateAccessApprovalSettings(name: string, updateMask: string, requestBody: AccessApprovalSettings): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Approves a request and returns the updated ApprovalRequest.
		 * Returns NOT_FOUND if the request does not exist. Returns
		 * FAILED_PRECONDITION if the request exists but is not in a pending state.
		 * Post v1beta1/{name}:approve
		 * @param {string} name Name of the approval request to approve.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_approvalRequests_approve(name: string, requestBody: ApproveApprovalRequestMessage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismisses a request. Returns the updated ApprovalRequest.
		 * NOTE: This does not deny access to the resource if another request has been
		 * made and approved. It is equivalent in effect to ignoring the request
		 * altogether.
		 * Returns NOT_FOUND if the request does not exist.
		 * Returns FAILED_PRECONDITION if the request exists but is not in a pending
		 * state.
		 * Post v1beta1/{name}:dismiss
		 * @param {string} name Name of the ApprovalRequest to dismiss.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_approvalRequests_dismiss(name: string, requestBody: DismissApprovalRequestMessage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':dismiss', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists approval requests associated with a project, folder, or organization.
		 * Approval requests can be filtered by state (pending, active, dismissed).
		 * The order is reverse chronological.
		 * Get v1beta1/{parent}/approvalRequests
		 * @param {string} parent The parent resource. This may be "projects/{project_id}",
		 * "folders/{folder_id}", or "organizations/{organization_id}".
		 * @param {string} filter A filter on the type of approval requests to retrieve. Must be one of the
		 * following values:
		 * <ol>
		 *   <li>[not set]: Requests that are pending or have active approvals.</li>
		 *   <li>ALL: All requests.</li>
		 *   <li>PENDING: Only pending requests.</li>
		 *   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>
		 *   <li>DISMISSED: Only dismissed (including expired) requests.</li>
		 * </ol>
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying the page of results to return.
		 * @return {void} Successful response
		 */
		Accessapproval_organizations_approvalRequests_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/approvalRequests&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

