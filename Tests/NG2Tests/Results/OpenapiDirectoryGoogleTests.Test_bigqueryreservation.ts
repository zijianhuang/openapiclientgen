import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * A Assignment allows a project to submit jobs
	 * of a certain type using slots from the specified reservation.
	 */
	export interface Assignment {

		/**
		 * The resource which will use the reservation. E.g.
		 * projects/myproject, folders/123, organizations/456.
		 */
		assignee?: string;

		/** Which type of jobs will use the reservation. */
		jobType?: AssignmentJobType;

		/**
		 * Output only. Name of the resource. E.g.:
		 * projects/myproject/locations/US/reservations/team1-prod/assignments/123.
		 */
		name?: string;

		/** Output only. State of the assignment. */
		state?: AssignmentState;
	}

	export enum AssignmentJobType { JOB_TYPE_UNSPECIFIED = 0, PIPELINE = 1, QUERY = 2 }

	export enum AssignmentState { STATE_UNSPECIFIED = 0, PENDING = 1, ACTIVE = 2 }


	/** Represents a BI Reservation. */
	export interface BiReservation {

		/**
		 * The resource name of the singleton BI reservation.
		 * Reservation names have the form
		 * `projects/{project_id}/locations/{location_id}/bireservation`.
		 */
		name?: string;

		/** Size of a reservation, in bytes. */
		size?: string;

		/** Output only. The last update timestamp of a reservation. */
		updateTime?: string;
	}


	/**
	 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs
	 * (in the form of slots) with some committed period of usage. Annual
	 * commitments renew by default. Commitments can be removed after their
	 * commitment end time passes. In order to remove annual commitment, its plan
	 * needs to be changed to monthly or flex first.
	 * A capacity commitment resource exists as a child resource of the admin
	 * project.
	 */
	export interface CapacityCommitment {

		/**
		 * Output only. The end of the current commitment period. It is applicable only for ACTIVE
		 * capacity commitments.
		 */
		commitmentEndTime?: string;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		failureStatus?: Status;

		/**
		 * Output only. The resource name of the capacity commitment, e.g.,
		 * projects/myproject/locations/US/capacityCommitments/123
		 */
		name?: string;

		/** Capacity commitment commitment plan. */
		plan?: CapacityCommitmentPlan;

		/**
		 * The plan this capacity commitment is converted to after commitment_end_time
		 * passes. Once the plan is changed, committed period is extended according to
		 * commitment plan. Only applicable for ANNUAL commitments.
		 */
		renewalPlan?: CapacityCommitmentPlan;

		/** Number of slots in this commitment. */
		slotCount?: string;

		/** Output only. State of the commitment. */
		state?: CapacityCommitmentState;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}

	export enum CapacityCommitmentPlan { COMMITMENT_PLAN_UNSPECIFIED = 0, FLEX = 1, MONTHLY = 2, ANNUAL = 3 }

	export enum CapacityCommitmentState { STATE_UNSPECIFIED = 0, PENDING = 1, ACTIVE = 2, FAILED = 3 }


	/**
	 * The metadata for operation returned from
	 * ReservationService.CreateSlotPool.
	 */
	export interface CreateSlotPoolMetadata {

		/**
		 * Resource name of the slot pool that is being created. E.g.,
		 * projects/myproject/locations/us-central1/reservations/foo/slotPools/123
		 */
		slotPool?: string;
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


	/** The response for ReservationService.ListAssignments. */
	export interface ListAssignmentsResponse {

		/** List of assignments visible to the user. */
		assignments?: Array<Assignment>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string;
	}


	/** The response for ReservationService.ListCapacityCommitments. */
	export interface ListCapacityCommitmentsResponse {

		/** List of capacity commitments visible to the user. */
		capacityCommitments?: Array<CapacityCommitment>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/** The response for ReservationService.ListReservations. */
	export interface ListReservationsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string;

		/** List of reservations visible to the user. */
		reservations?: Array<Reservation>;
	}


	/** A reservation is a mechanism used to guarantee slots to users. */
	export interface Reservation {

		/**
		 * If false, any query using this reservation will use idle slots from other
		 * reservations within the same admin project. If true, a query using this
		 * reservation will execute with the slot capacity specified above at most.
		 */
		ignoreIdleSlots?: boolean;

		/**
		 * The resource name of the reservation, e.g.,
		 * "projects/locations/reservations/team1-prod".
		 */
		name?: string;

		/**
		 * Minimum slots available to this reservation. A slot is a unit of
		 * computational power in BigQuery, and serves as the unit of parallelism.
		 * Queries using this reservation might use more slots during runtime if
		 * ignore_idle_slots is set to false.
		 * If the new reservation's slot capacity exceed the parent's slot capacity or
		 * if total slot capacity of the new reservation and its siblings exceeds the
		 * parent's slot capacity, the request will fail with
		 * `google.rpc.Code.RESOURCE_EXHAUSTED`.
		 */
		slotCapacity?: string;
	}


	/** The request for ReservationService.MergeCapacityCommitments. */
	export interface MergeCapacityCommitmentsRequest {

		/**
		 * Ids of capacity commitments to merge.
		 * These capacity commitments must exist under admin project and location
		 * specified in the parent.
		 */
		capacityCommitmentIds?: Array<string>;
	}


	/**
	 * The request for
	 * ReservationService.MoveAssignment.
	 * Note: "bigquery.reservationAssignments.create" permission is required on the
	 * destination_id. Note: "bigquery.reservationAssignments.create" and
	 * "bigquery.reservationAssignments.delete" permission is required on the
	 * related assignee.
	 */
	export interface MoveAssignmentRequest {

		/**
		 * The new reservation ID, e.g.:
		 * projects/myotherproject/locations/US/reservations/team2-prod
		 */
		destinationId?: string;
	}


	/** The response for ReservationService.SearchAssignments. */
	export interface SearchAssignmentsResponse {

		/** List of assignments visible to the user. */
		assignments?: Array<Assignment>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string;
	}


	/** The request for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentRequest {

		/** Number of slots in the capacity commitment after the split. */
		slotCount?: string;
	}


	/** The response for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentResponse {

		/**
		 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs
		 * (in the form of slots) with some committed period of usage. Annual
		 * commitments renew by default. Commitments can be removed after their
		 * commitment end time passes. In order to remove annual commitment, its plan
		 * needs to be changed to monthly or flex first.
		 * A capacity commitment resource exists as a child resource of the admin
		 * project.
		 */
		first?: CapacityCommitment;

		/**
		 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs
		 * (in the form of slots) with some committed period of usage. Annual
		 * commitments renew by default. Commitments can be removed after their
		 * commitment end time passes. In order to remove annual commitment, its plan
		 * needs to be changed to monthly or flex first.
		 * A capacity commitment resource exists as a child resource of the admin
		 * project.
		 */
		second?: CapacityCommitment;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a assignment. No expansion will happen.
		 * E.g:
		 * organizationA contains project1 and project2. Reservation res1 exists.
		 * CreateAssignment was invoked previously and following assignments were
		 * created explicitly:
		 * <organizationA, res1>
		 * <project1, res1>
		 * Then deletion of <organizationA, res1> won't affect <project1, res1>. After
		 * deletion of <organizationA, res1>, queries from project1 will still use
		 * res1, while queries from project2 will use on-demand mode.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the resource, e.g.:
		 *   projects/myproject/locations/US/reservations/team1-prod/assignments/123
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the reservation.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the reservation to retrieve. E.g.,
		 *    projects/myproject/locations/US/reservations/team1-prod
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_get(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing reservation resource.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the reservation, e.g.,
		 * "projects/locations/reservations/team1-prod".
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_patch(name: string, updateMask: string, requestBody: Reservation): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves a assignment under a new reservation. Customers can do this by
		 * deleting the existing assignment followed by creating another assignment
		 * under the new reservation, but this method provides a transactional way to
		 * do so, to make sure the assignee always has an associated reservation.
		 * Without the method customers might see some queries run on-demand which
		 * might be unexpected.
		 * Post v1/{name}:move
		 * @param {string} name Required. The resource name of the assignment,
		 * e.g.:
		 *   projects/myproject/locations/US/reservations/team1-prod/assignments/123
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_move(name: string, requestBody: MoveAssignmentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Splits capacity commitment to two commitments of the same plan and
		 * commitment_end_time. A common use case to do that is to perform a downgrade
		 * e.g., in order to downgrade from 10000 slots to 8000, one might split 10000
		 * capacity commitment to 2000 and 8000, change the plan of the first one to
		 * flex and then delete it.
		 * Post v1/{name}:split
		 * @param {string} name Required. The resource name e.g.,:
		 *   projects/myproject/locations/US/capacityCommitments/123
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_split(name: string, requestBody: SplitCapacityCommitmentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':split', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists assignments.
		 * Only explicitly created assignments will be returned. E.g:
		 * organizationA contains project1 and project2. Reservation res1 exists.
		 * CreateAssignment was invoked previously and following assignments were
		 * created explicitly:
		 * <organizationA, res1>
		 * <project1, res1>
		 * Then this API will just return the above two assignments for reservation
		 * res1, and no expansion/merge will happen. Wildcard "-" can be used for
		 * reservations in the request. In that case all assignments belongs to the
		 * specified project and location will be listed. Note
		 * "-" cannot be used for projects nor locations.
		 * Get v1/{parent}/assignments
		 * @param {string} parent Required. The parent resource name e.g.:
		 * projects/myproject/locations/US/reservations/team1-prod
		 * Or:
		 * projects/myproject/locations/US/reservations/-
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assignments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an object which allows the given project to submit jobs
		 * of a certain type using slots from the specified reservation. Currently a
		 * resource (project, folder, organization) can only have one assignment per
		 * {job_type, location}, and that reservation will be used for all jobs of the
		 * matching type. Within the organization, different assignments can be
		 * created on projects, folders or organization level. During query execution,
		 * the assignment is looked up at the project, folder and organization levels
		 * in that order. The first assignment found is applied to the query. When
		 * creating assignments, it does not matter if other assignments exist at
		 * higher levels. E.g: organizationA contains project1, project2. Assignments
		 * for organizationA, project1 and project2 could all be created, mapping to
		 * the same or different reservations.
		 * Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have
		 * 'bigquery.admin' permissions on the project using the reservation
		 * and the project that owns this reservation.
		 * Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment
		 * does not match location of the reservation.
		 * Post v1/{parent}/assignments
		 * @param {string} parent Required. The parent resource name of the assignment
		 * E.g.: projects/myproject/locations/US/reservations/team1-prod
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_create(parent: string, requestBody: Assignment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assignments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the capacity commitments for the admin project.
		 * Get v1/{parent}/capacityCommitments
		 * @param {string} parent Required. Resource name of the parent reservation. E.g.,
		 *    projects/myproject/locations/US
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new capacity commitment resource.
		 * Post v1/{parent}/capacityCommitments
		 * @param {string} parent Required. Resource name of the parent reservation. E.g.,
		 *    projects/myproject/locations/US
		 * @param {boolean} enforceSingleAdminProjectPerOrg If true, fail the request if another project in the organization has a
		 * capacity commitment.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_create(parent: string, enforceSingleAdminProjectPerOrg: boolean, requestBody: CapacityCommitment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments&enforceSingleAdminProjectPerOrg=' + enforceSingleAdminProjectPerOrg, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Merges capacity commitments of the same plan into one. Resulting capacity
		 * commitment has the longer commitment_end_time out of the two. Attempting to
		 * merge capacity commitments of different plan will fail with the error code
		 * `google.rpc.Code.FAILED_PRECONDITION`.
		 * Post v1/{parent}/capacityCommitments:merge
		 * @param {string} parent Parent resource that identifies admin project and location e.g.,
		 * projects/myproject/locations/us
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_merge(parent: string, requestBody: MergeCapacityCommitmentsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments:merge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the reservations for the project in the specified location.
		 * Get v1/{parent}/reservations
		 * @param {string} parent Required. The parent resource name containing project and location, e.g.:
		 *   "projects/myproject/locations/US"
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new reservation resource.
		 * Post v1/{parent}/reservations
		 * @param {string} parent Required. Project, location. E.g.,
		 *    projects/myproject/locations/US
		 * @param {string} reservationId The reservation ID. This field must only contain lower case alphanumeric
		 * characters or dash. Max length is 64 characters.
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_create(parent: string, reservationId: string, requestBody: Reservation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up assignments for a specified resource for a particular region.
		 * If the request is about a project:
		 * 1) Assignments created on the project will be returned if they exist.
		 * 2) Otherwise assignments created on the closest ancestor will be
		 * returned. 3) Assignments for different JobTypes will all be returned.
		 * Same logic applies if the request is about a folder.
		 * If the request is about an organization, then assignments created on the
		 * organization will be returned (organization doesn't have ancestors).
		 * Comparing to ListAssignments, there are some behavior
		 * differences:
		 * 1) permission on the assignee will be verified in this API.
		 * 2) Hierarchy lookup (project->folder->organization) happens in this API.
		 * 3) Parent here is projects/locations/*, instead of
		 * projects/locations/*reservations/*.
		 * Note "-" cannot be used for projects
		 * nor locations.
		 * Get v1/{parent}:searchAssignments
		 * @param {string} parent Required. The resource name of the admin project(containing project and location),
		 * e.g.:
		 *   "projects/myproject/locations/US".
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @param {string} query Please specify resource name as assignee in the query.
		 * e.g., "assignee=projects/myproject"
		 *       "assignee=folders/123"
		 *       "assignee=organizations/456"
		 * @return {void} Successful response
		 */
		Bigqueryreservation_projects_locations_searchAssignments(parent: string, pageSize: number, pageToken: string, query: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':searchAssignments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}
	}

}

