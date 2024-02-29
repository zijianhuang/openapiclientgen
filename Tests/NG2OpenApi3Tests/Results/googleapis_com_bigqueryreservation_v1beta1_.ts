import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An assignment allows a project to submit jobs of a certain type using slots from the specified reservation. */
	export interface Assignment {

		/** The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`. */
		assignee?: string | null;

		/** Which type of jobs will use the reservation. */
		jobType?: AssignmentJobType | null;

		/** Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters. */
		name?: string | null;

		/** Output only. State of the assignment. */
		state?: AssignmentState | null;
	}

	/** An assignment allows a project to submit jobs of a certain type using slots from the specified reservation. */
	export interface AssignmentFormProperties {

		/** The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`. */
		assignee: FormControl<string | null | undefined>,

		/** Which type of jobs will use the reservation. */
		jobType: FormControl<AssignmentJobType | null | undefined>,

		/** Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the assignment. */
		state: FormControl<AssignmentState | null | undefined>,
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
			assignee: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<AssignmentJobType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AssignmentState | null | undefined>(undefined),
		});

	}

	export enum AssignmentJobType { JOB_TYPE_UNSPECIFIED = 'JOB_TYPE_UNSPECIFIED', PIPELINE = 'PIPELINE', QUERY = 'QUERY', ML_EXTERNAL = 'ML_EXTERNAL' }

	export enum AssignmentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', ACTIVE = 'ACTIVE' }


	/** Represents a BI Reservation. */
	export interface BiReservation {

		/** The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/biReservation`. */
		name?: string | null;

		/** Preferred tables to use BI capacity for. */
		preferredTables?: Array<TableReference>;

		/** Size of a reservation, in bytes. */
		size?: string | null;

		/** Output only. The last update timestamp of a reservation. */
		updateTime?: string | null;
	}

	/** Represents a BI Reservation. */
	export interface BiReservationFormProperties {

		/** The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/biReservation`. */
		name: FormControl<string | null | undefined>,

		/** Size of a reservation, in bytes. */
		size: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of a reservation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBiReservationFormGroup() {
		return new FormGroup<BiReservationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference. */
	export interface TableReference {

		/** The ID of the dataset in the above project. */
		datasetId?: string | null;

		/** The assigned project ID of the project. */
		projectId?: string | null;

		/** The ID of the table in the above dataset. */
		tableId?: string | null;
	}

	/** Fully qualified reference to BigQuery table. Internally stored as google.cloud.bi.v1.BqTableReference. */
	export interface TableReferenceFormProperties {

		/** The ID of the dataset in the above project. */
		datasetId: FormControl<string | null | undefined>,

		/** The assigned project ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** The ID of the table in the above dataset. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateTableReferenceFormGroup() {
		return new FormGroup<TableReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project. */
	export interface CapacityCommitment {

		/** Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. */
		commitmentEndTime?: string | null;

		/** Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. */
		commitmentStartTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		failureStatus?: Status;

		/** Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. */
		multiRegionAuxiliary?: boolean | null;

		/** Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. */
		name?: string | null;

		/** Capacity commitment commitment plan. */
		plan?: CapacityCommitmentPlan | null;

		/** The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments. */
		renewalPlan?: CapacityCommitmentPlan | null;

		/** Number of slots in this commitment. */
		slotCount?: string | null;

		/** Output only. State of the commitment. */
		state?: CapacityCommitmentState | null;
	}

	/** Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project. */
	export interface CapacityCommitmentFormProperties {

		/** Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. */
		commitmentEndTime: FormControl<string | null | undefined>,

		/** Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. */
		commitmentStartTime: FormControl<string | null | undefined>,

		/** Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region. */
		multiRegionAuxiliary: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. */
		name: FormControl<string | null | undefined>,

		/** Capacity commitment commitment plan. */
		plan: FormControl<CapacityCommitmentPlan | null | undefined>,

		/** The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments. */
		renewalPlan: FormControl<CapacityCommitmentPlan | null | undefined>,

		/** Number of slots in this commitment. */
		slotCount: FormControl<string | null | undefined>,

		/** Output only. State of the commitment. */
		state: FormControl<CapacityCommitmentState | null | undefined>,
	}
	export function CreateCapacityCommitmentFormGroup() {
		return new FormGroup<CapacityCommitmentFormProperties>({
			commitmentEndTime: new FormControl<string | null | undefined>(undefined),
			commitmentStartTime: new FormControl<string | null | undefined>(undefined),
			multiRegionAuxiliary: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<CapacityCommitmentPlan | null | undefined>(undefined),
			renewalPlan: new FormControl<CapacityCommitmentPlan | null | undefined>(undefined),
			slotCount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CapacityCommitmentState | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CapacityCommitmentPlan { COMMITMENT_PLAN_UNSPECIFIED = 'COMMITMENT_PLAN_UNSPECIFIED', FLEX = 'FLEX', TRIAL = 'TRIAL', MONTHLY = 'MONTHLY', ANNUAL = 'ANNUAL' }

	export enum CapacityCommitmentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', ACTIVE = 'ACTIVE', FAILED = 'FAILED' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** The response for ReservationService.ListAssignments. */
	export interface ListAssignmentsResponse {

		/** List of assignments visible to the user. */
		assignments?: Array<Assignment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response for ReservationService.ListAssignments. */
	export interface ListAssignmentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssignmentsResponseFormGroup() {
		return new FormGroup<ListAssignmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ReservationService.ListCapacityCommitments. */
	export interface ListCapacityCommitmentsResponse {

		/** List of capacity commitments visible to the user. */
		capacityCommitments?: Array<CapacityCommitment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response for ReservationService.ListCapacityCommitments. */
	export interface ListCapacityCommitmentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCapacityCommitmentsResponseFormGroup() {
		return new FormGroup<ListCapacityCommitmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ReservationService.ListReservations. */
	export interface ListReservationsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** List of reservations visible to the user. */
		reservations?: Array<Reservation>;
	}

	/** The response for ReservationService.ListReservations. */
	export interface ListReservationsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reservation is a mechanism used to guarantee slots to users. */
	export interface Reservation {

		/** Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as `target_job_concurrency` in the Information Schema, DDL and BQ CLI. */
		concurrency?: string | null;

		/** Output only. Creation time of the reservation. */
		creationTime?: string | null;

		/** If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most. */
		ignoreIdleSlots?: boolean | null;

		/** Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. */
		multiRegionAuxiliary?: boolean | null;

		/** The resource name of the reservation, e.g., `projects/locations/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. */
		name?: string | null;

		/** Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation's slot capacity exceeds the project's slot capacity or if total slot capacity of the new reservation and its siblings exceeds the project's slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`. NOTE: for reservations in US or EU multi-regions, slot capacity constraints are checked separately for default and auxiliary regions. See multi_region_auxiliary flag for more details. */
		slotCapacity?: string | null;

		/** Output only. Last update time of the reservation. */
		updateTime?: string | null;
	}

	/** A reservation is a mechanism used to guarantee slots to users. */
	export interface ReservationFormProperties {

		/** Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as `target_job_concurrency` in the Information Schema, DDL and BQ CLI. */
		concurrency: FormControl<string | null | undefined>,

		/** Output only. Creation time of the reservation. */
		creationTime: FormControl<string | null | undefined>,

		/** If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most. */
		ignoreIdleSlots: FormControl<boolean | null | undefined>,

		/** Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region. */
		multiRegionAuxiliary: FormControl<boolean | null | undefined>,

		/** The resource name of the reservation, e.g., `projects/locations/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. */
		name: FormControl<string | null | undefined>,

		/** Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation's slot capacity exceeds the project's slot capacity or if total slot capacity of the new reservation and its siblings exceeds the project's slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`. NOTE: for reservations in US or EU multi-regions, slot capacity constraints are checked separately for default and auxiliary regions. See multi_region_auxiliary flag for more details. */
		slotCapacity: FormControl<string | null | undefined>,

		/** Output only. Last update time of the reservation. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			concurrency: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			ignoreIdleSlots: new FormControl<boolean | null | undefined>(undefined),
			multiRegionAuxiliary: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slotCapacity: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for ReservationService.MergeCapacityCommitments. */
	export interface MergeCapacityCommitmentsRequest {

		/** Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc */
		capacityCommitmentIds?: Array<string>;
	}

	/** The request for ReservationService.MergeCapacityCommitments. */
	export interface MergeCapacityCommitmentsRequestFormProperties {
	}
	export function CreateMergeCapacityCommitmentsRequestFormGroup() {
		return new FormGroup<MergeCapacityCommitmentsRequestFormProperties>({
		});

	}


	/** The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee. */
	export interface MoveAssignmentRequest {

		/** The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod` */
		destinationId?: string | null;
	}

	/** The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee. */
	export interface MoveAssignmentRequestFormProperties {

		/** The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod` */
		destinationId: FormControl<string | null | undefined>,
	}
	export function CreateMoveAssignmentRequestFormGroup() {
		return new FormGroup<MoveAssignmentRequestFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ReservationService.SearchAssignments. */
	export interface SearchAssignmentsResponse {

		/** List of assignments visible to the user. */
		assignments?: Array<Assignment>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response for ReservationService.SearchAssignments. */
	export interface SearchAssignmentsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAssignmentsResponseFormGroup() {
		return new FormGroup<SearchAssignmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentRequest {

		/** Number of slots in the capacity commitment after the split. */
		slotCount?: string | null;
	}

	/** The request for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentRequestFormProperties {

		/** Number of slots in the capacity commitment after the split. */
		slotCount: FormControl<string | null | undefined>,
	}
	export function CreateSplitCapacityCommitmentRequestFormGroup() {
		return new FormGroup<SplitCapacityCommitmentRequestFormProperties>({
			slotCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentResponse {

		/** Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project. */
		first?: CapacityCommitment;

		/** Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project. */
		second?: CapacityCommitment;
	}

	/** The response for ReservationService.SplitCapacityCommitment. */
	export interface SplitCapacityCommitmentResponseFormProperties {
	}
	export function CreateSplitCapacityCommitmentResponseFormGroup() {
		return new FormGroup<SplitCapacityCommitmentResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
		 * @param {boolean} force Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots.
		 * @return {Empty} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Returns information about the reservation.
		 * Get v1beta1/{name}
		 * @param {string} name Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
		 * @return {Reservation} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_get(name: string): Observable<Reservation> {
			return this.http.get<Reservation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing assignment. Only the `priority` field can be updated.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
		 * @param {string} updateMask Standard field mask for the set of fields to be updated.
		 * @return {Assignment} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_patch(name: string, updateMask: string | null | undefined, requestBody: Assignment): Observable<Assignment> {
			return this.http.patch<Assignment>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.
		 * Post v1beta1/{name}:move
		 * @param {string} name Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
		 * @return {Assignment} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_move(name: string, requestBody: MoveAssignmentRequest): Observable<Assignment> {
			return this.http.post<Assignment>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.
		 * Post v1beta1/{name}:split
		 * @param {string} name Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
		 * @return {SplitCapacityCommitmentResponse} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_split(name: string, requestBody: SplitCapacityCommitmentRequest): Observable<SplitCapacityCommitmentResponse> {
			return this.http.post<SplitCapacityCommitmentResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':split', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.
		 * Get v1beta1/{parent}/assignments
		 * @param {string} parent Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListAssignmentsResponse} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAssignmentsResponse> {
			return this.http.get<ListAssignmentsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assignments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.
		 * Post v1beta1/{parent}/assignments
		 * @param {string} parent Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
		 * @param {string} assignmentId The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters.
		 * @return {Assignment} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_assignments_create(parent: string, assignmentId: string | null | undefined, requestBody: Assignment): Observable<Assignment> {
			return this.http.post<Assignment>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/assignments&assignmentId=' + (assignmentId == null ? '' : encodeURIComponent(assignmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the capacity commitments for the admin project.
		 * Get v1beta1/{parent}/capacityCommitments
		 * @param {string} parent Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListCapacityCommitmentsResponse} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCapacityCommitmentsResponse> {
			return this.http.get<ListCapacityCommitmentsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new capacity commitment resource.
		 * Post v1beta1/{parent}/capacityCommitments
		 * @param {string} parent Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
		 * @param {string} capacityCommitmentId The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
		 * @param {boolean} enforceSingleAdminProjectPerOrg If true, fail the request if another project in the organization has a capacity commitment.
		 * @return {CapacityCommitment} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_create(parent: string, capacityCommitmentId: string | null | undefined, enforceSingleAdminProjectPerOrg: boolean | null | undefined, requestBody: CapacityCommitment): Observable<CapacityCommitment> {
			return this.http.post<CapacityCommitment>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments&capacityCommitmentId=' + (capacityCommitmentId == null ? '' : encodeURIComponent(capacityCommitmentId)) + '&enforceSingleAdminProjectPerOrg=' + enforceSingleAdminProjectPerOrg, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
		 * Post v1beta1/{parent}/capacityCommitments:merge
		 * @param {string} parent Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
		 * @return {CapacityCommitment} Successful response
		 */
		Bigqueryreservation_projects_locations_capacityCommitments_merge(parent: string, requestBody: MergeCapacityCommitmentsRequest): Observable<CapacityCommitment> {
			return this.http.post<CapacityCommitment>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/capacityCommitments:merge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the reservations for the project in the specified location.
		 * Get v1beta1/{parent}/reservations
		 * @param {string} parent Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
		 * @param {string} filter Can be used to filter out reservations based on names, capacity, etc, e.g.: filter="reservation.slot_capacity > 200" filter="reservation.name = \"*dev/*\"" Advanced filtering syntax can be [here](https://cloud.google.com/logging/docs/view/advanced-filters).
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListReservationsResponse} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReservationsResponse> {
			return this.http.get<ListReservationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new reservation resource.
		 * Post v1beta1/{parent}/reservations
		 * @param {string} parent Required. Project, location. E.g., `projects/myproject/locations/US`
		 * @param {string} reservationId The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
		 * @return {Reservation} Successful response
		 */
		Bigqueryreservation_projects_locations_reservations_create(parent: string, reservationId: string | null | undefined, requestBody: Reservation): Observable<Reservation> {
			return this.http.post<Reservation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/locations/*`, instead of `projects/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.
		 * Get v1beta1/{parent}:searchAssignments
		 * @param {string} parent Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @param {string} query Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
		 * @return {SearchAssignmentsResponse} Successful response
		 */
		Bigqueryreservation_projects_locations_searchAssignments(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchAssignmentsResponse> {
			return this.http.get<SearchAssignmentsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':searchAssignments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}
	}

}

