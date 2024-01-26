import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ZonalShift {

		/** Required */
		awayFrom: string;

		/** Required */
		comment: string;

		/** Required */
		expiryTime: Date;

		/** Required */
		resourceIdentifier: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: ZonalShiftStatus;

		/** Required */
		zonalShiftId: string;
	}
	export interface ZonalShiftFormProperties {

		/** Required */
		awayFrom: FormControl<string | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/** Required */
		expiryTime: FormControl<Date | null | undefined>,

		/** Required */
		resourceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ZonalShiftStatus | null | undefined>,

		/** Required */
		zonalShiftId: FormControl<string | null | undefined>,
	}
	export function CreateZonalShiftFormGroup() {
		return new FormGroup<ZonalShiftFormProperties>({
			awayFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiryTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ZonalShiftStatus | null | undefined>(undefined, [Validators.required]),
			zonalShiftId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ZonalShiftStatus { ACTIVE = 0, EXPIRED = 1, CANCELED = 2 }

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface GetManagedResourceResponse {

		/** Required */
		appliedWeights: AppliedWeights;
		arn?: string;
		name?: string;

		/** Required */
		zonalShifts: Array<ZonalShiftInResource>;
	}
	export interface GetManagedResourceResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedResourceResponseFormGroup() {
		return new FormGroup<GetManagedResourceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppliedWeights {
	}
	export interface AppliedWeightsFormProperties {
	}
	export function CreateAppliedWeightsFormGroup() {
		return new FormGroup<AppliedWeightsFormProperties>({
		});

	}


	/** A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource. */
	export interface ZonalShiftInResource {

		/** Required */
		appliedStatus: AppliedStatus;

		/** Required */
		awayFrom: string;

		/** Required */
		comment: string;

		/** Required */
		expiryTime: Date;

		/** Required */
		resourceIdentifier: string;

		/** Required */
		startTime: Date;

		/** Required */
		zonalShiftId: string;
	}

	/** A complex structure that lists the zonal shifts for a managed resource and their statuses for the resource. */
	export interface ZonalShiftInResourceFormProperties {

		/** Required */
		appliedStatus: FormControl<AppliedStatus | null | undefined>,

		/** Required */
		awayFrom: FormControl<string | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/** Required */
		expiryTime: FormControl<Date | null | undefined>,

		/** Required */
		resourceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		zonalShiftId: FormControl<string | null | undefined>,
	}
	export function CreateZonalShiftInResourceFormGroup() {
		return new FormGroup<ZonalShiftInResourceFormProperties>({
			appliedStatus: new FormControl<AppliedStatus | null | undefined>(undefined, [Validators.required]),
			awayFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiryTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			zonalShiftId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppliedStatus { APPLIED = 0, NOT_APPLIED = 1 }

	export interface ListManagedResourcesResponse {

		/** Required */
		items: Array<ManagedResourceSummary>;
		nextToken?: string;
	}
	export interface ListManagedResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedResourcesResponseFormGroup() {
		return new FormGroup<ListManagedResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A complex structure for a managed resource in an account.</p> <p>A managed resource is a Network Load Balancer or Application Load Balancer that has been registered with Route 53 ARC by Elastic Load Balancing. You can start a zonal shift in Route 53 ARC for a managed resource to temporarily move traffic for the resource away from an Availability Zone in an AWS Region.</p> <note> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p> </note> */
	export interface ManagedResourceSummary {
		arn?: string;

		/** Required */
		availabilityZones: Array<string>;
		name?: string;
	}

	/** <p>A complex structure for a managed resource in an account.</p> <p>A managed resource is a Network Load Balancer or Application Load Balancer that has been registered with Route 53 ARC by Elastic Load Balancing. You can start a zonal shift in Route 53 ARC for a managed resource to temporarily move traffic for the resource away from an Availability Zone in an AWS Region.</p> <note> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p> </note> */
	export interface ManagedResourceSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateManagedResourceSummaryFormGroup() {
		return new FormGroup<ManagedResourceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListZonalShiftsResponse {
		items?: Array<ZonalShiftSummary>;
		nextToken?: string;
	}
	export interface ListZonalShiftsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListZonalShiftsResponseFormGroup() {
		return new FormGroup<ListZonalShiftsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region. A zonal shift helps your application recover immediately, for example, from a developer's bad code deployment or from an AWS infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed resources in your account in an AWS Region. Supported AWS resources are automatically registered with Route 53 ARC.</p> <p>Zonal shifts are temporary. A zonal shift can be active for up to three days (72 hours).</p> <p>When you start a zonal shift, you specify how long you want it to be active, which Amazon Route 53 Application Recovery Controller converts to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you can extend the zonal shift by updating the expiration so the zonal shift is active longer.</p> */
	export interface ZonalShiftSummary {

		/** Required */
		awayFrom: string;

		/** Required */
		comment: string;

		/** Required */
		expiryTime: Date;

		/** Required */
		resourceIdentifier: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: ZonalShiftStatus;

		/** Required */
		zonalShiftId: string;
	}

	/** <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region. A zonal shift helps your application recover immediately, for example, from a developer's bad code deployment or from an AWS infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed resources in your account in an AWS Region. Supported AWS resources are automatically registered with Route 53 ARC.</p> <p>Zonal shifts are temporary. A zonal shift can be active for up to three days (72 hours).</p> <p>When you start a zonal shift, you specify how long you want it to be active, which Amazon Route 53 Application Recovery Controller converts to an expiry time (expiration time). You can cancel a zonal shift, for example, if you're ready to restore traffic to the Availability Zone. Or you can extend the zonal shift by updating the expiration so the zonal shift is active longer.</p> */
	export interface ZonalShiftSummaryFormProperties {

		/** Required */
		awayFrom: FormControl<string | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/** Required */
		expiryTime: FormControl<Date | null | undefined>,

		/** Required */
		resourceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ZonalShiftStatus | null | undefined>,

		/** Required */
		zonalShiftId: FormControl<string | null | undefined>,
	}
	export function CreateZonalShiftSummaryFormGroup() {
		return new FormGroup<ZonalShiftSummaryFormProperties>({
			awayFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiryTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ZonalShiftStatus | null | undefined>(undefined, [Validators.required]),
			zonalShiftId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelZonalShiftRequest {
	}
	export interface CancelZonalShiftRequestFormProperties {
	}
	export function CreateCancelZonalShiftRequestFormGroup() {
		return new FormGroup<CancelZonalShiftRequestFormProperties>({
		});

	}

	export interface GetManagedResourceRequest {
	}
	export interface GetManagedResourceRequestFormProperties {
	}
	export function CreateGetManagedResourceRequestFormGroup() {
		return new FormGroup<GetManagedResourceRequestFormProperties>({
		});

	}

	export interface ListManagedResourcesRequest {
	}
	export interface ListManagedResourcesRequestFormProperties {
	}
	export function CreateListManagedResourcesRequestFormGroup() {
		return new FormGroup<ListManagedResourcesRequestFormProperties>({
		});

	}

	export interface ListZonalShiftsRequest {
	}
	export interface ListZonalShiftsRequestFormProperties {
	}
	export function CreateListZonalShiftsRequestFormGroup() {
		return new FormGroup<ListZonalShiftsRequestFormProperties>({
		});

	}

	export interface StartZonalShiftRequest {

		/** Required */
		awayFrom: string;

		/** Required */
		comment: string;

		/** Required */
		expiresIn: string;

		/** Required */
		resourceIdentifier: string;
	}
	export interface StartZonalShiftRequestFormProperties {

		/** Required */
		awayFrom: FormControl<string | null | undefined>,

		/** Required */
		comment: FormControl<string | null | undefined>,

		/** Required */
		expiresIn: FormControl<string | null | undefined>,

		/** Required */
		resourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartZonalShiftRequestFormGroup() {
		return new FormGroup<StartZonalShiftRequestFormProperties>({
			awayFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresIn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateZonalShiftRequest {
		comment?: string;
		expiresIn?: string;
	}
	export interface UpdateZonalShiftRequestFormProperties {
		comment: FormControl<string | null | undefined>,
		expiresIn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateZonalShiftRequestFormGroup() {
		return new FormGroup<UpdateZonalShiftRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancel a zonal shift in Amazon Route 53 Application Recovery Controller that you've started for a resource in your AWS account in an AWS Region.
		 * Delete zonalshifts/{zonalShiftId}
		 * @param {string} zonalShiftId The internally-generated identifier of a zonal shift.
		 * @return {ZonalShift} Success
		 */
		CancelZonalShift(zonalShiftId: string): Observable<ZonalShift> {
			return this.http.delete<ZonalShift>(this.baseUri + 'zonalshifts/' + (zonalShiftId == null ? '' : encodeURIComponent(zonalShiftId)), {});
		}

		/**
		 * Update an active zonal shift in Amazon Route 53 Application Recovery Controller in your AWS account. You can update a zonal shift to set a new expiration, or edit or replace the comment for the zonal shift.
		 * Patch zonalshifts/{zonalShiftId}
		 * @param {string} zonalShiftId The identifier of a zonal shift.
		 * @return {ZonalShift} Success
		 */
		UpdateZonalShift(zonalShiftId: string, requestBody: UpdateZonalShiftPatchBody): Observable<ZonalShift> {
			return this.http.patch<ZonalShift>(this.baseUri + 'zonalshifts/' + (zonalShiftId == null ? '' : encodeURIComponent(zonalShiftId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this AWS Region. Resources that are registered for zonal shifts are managed resources in Route 53 ARC.</p> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
		 * Get managedresources/{resourceIdentifier}
		 * @param {string} resourceIdentifier <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
		 * @return {GetManagedResourceResponse} Success
		 */
		GetManagedResource(resourceIdentifier: string): Observable<GetManagedResourceResponse> {
			return this.http.get<GetManagedResourceResponse>(this.baseUri + 'managedresources/' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)), {});
		}

		/**
		 * Lists all the resources in your AWS account in this AWS Region that are managed for zonal shifts in Amazon Route 53 Application Recovery Controller, and information about them. The information includes their Amazon Resource Names (ARNs), the Availability Zones the resources are deployed in, and the resource name.
		 * Get managedresources
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.
		 * @return {ListManagedResourcesResponse} Success
		 */
		ListManagedResources(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListManagedResourcesResponse> {
			return this.http.get<ListManagedResourcesResponse>(this.baseUri + 'managedresources?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all the active zonal shifts in Amazon Route 53 Application Recovery Controller in your AWS account in this AWS Region.
		 * Get zonalshifts
		 * @param {number} maxResults The number of objects that you want to return with this call.
		 * @param {string} nextToken Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results.
		 * @param {ZonalShiftStatus} status <p>A status for a zonal shift.</p> <p>The <code>Status</code> for a zonal shift can have one of the following values:</p> <ul> <li> <p> <b>ACTIVE</b>: The zonal shift is started and active.</p> </li> <li> <p> <b>EXPIRED</b>: The zonal shift has expired (the expiry time was exceeded).</p> </li> <li> <p> <b>CANCELED</b>: The zonal shift was canceled.</p> </li> </ul>
		 * @return {ListZonalShiftsResponse} Success
		 */
		ListZonalShifts(maxResults: number | null | undefined, nextToken: string | null | undefined, status: ZonalShiftStatus | null | undefined): Observable<ListZonalShiftsResponse> {
			return this.http.get<ListZonalShiftsResponse>(this.baseUri + 'zonalshifts?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&status=' + status, {});
		}

		/**
		 * <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region, to help your application recover immediately, for example, from a developer's bad code deployment or from an AWS infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed resources in your account in an AWS Region. Resources are automatically registered with Route 53 ARC by AWS services.</p> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p> <p>When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The zonal shift is created immediately in Route 53 ARC. However, it can take a short time, typically up to a few minutes, for existing, in-progress connections in the Availability Zone to complete.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.html">Zonal shift</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
		 * Post zonalshifts
		 * @return {void} 
		 */
		StartZonalShift(requestBody: StartZonalShiftPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'zonalshifts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface UpdateZonalShiftPatchBody {

		/**
		 * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
		 * Max length: 128
		 * Min length: 0
		 */
		comment?: string | null;

		/**
		 * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <ul> <li> <p> <b>A lowercase letter m:</b> To specify that the value is in minutes.</p> </li> <li> <p> <b>A lowercase letter h:</b> To specify that the value is in hours.</p> </li> </ul> <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
		 * Max length: 5
		 * Min length: 2
		 */
		expiresIn?: string | null;
	}
	export interface UpdateZonalShiftPatchBodyFormProperties {

		/**
		 * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
		 * Max length: 128
		 * Min length: 0
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <ul> <li> <p> <b>A lowercase letter m:</b> To specify that the value is in minutes.</p> </li> <li> <p> <b>A lowercase letter h:</b> To specify that the value is in hours.</p> </li> </ul> <p>For example: <code>20h</code> means the zonal shift expires in 20 hours. <code>120m</code> means the zonal shift expires in 120 minutes (2 hours).</p>
		 * Max length: 5
		 * Min length: 2
		 */
		expiresIn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateZonalShiftPatchBodyFormGroup() {
		return new FormGroup<UpdateZonalShiftPatchBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128)]),
			expiresIn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(5), Validators.pattern('^([1-9][0-9]*)(m|h)$')]),
		});

	}

	export interface StartZonalShiftPostBody {

		/**
		 * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.
		 * Required
		 * Max length: 20
		 * Min length: 0
		 */
		awayFrom: string;

		/**
		 * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		comment: string;

		/**
		 * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;A lowercase letter m:&lt;/b&gt; To specify that the value is in minutes.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;A lowercase letter h:&lt;/b&gt; To specify that the value is in hours.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For example: &lt;code&gt;20h&lt;/code&gt; means the zonal shift expires in 20 hours. &lt;code&gt;120m&lt;/code&gt; means the zonal shift expires in 120 minutes (2 hours).&lt;/p&gt; </code></pre>
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		expiresIn: string;

		/**
		 * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
		 * Required
		 * Max length: 1024
		 * Min length: 8
		 */
		resourceIdentifier: string;
	}
	export interface StartZonalShiftPostBodyFormProperties {

		/**
		 * The Availability Zone that traffic is moved away from for a resource when you start a zonal shift. Until the zonal shift expires or you cancel it, traffic for the resource is instead moved to other Availability Zones in the AWS Region.
		 * Required
		 * Max length: 20
		 * Min length: 0
		 */
		awayFrom: FormControl<string | null | undefined>,

		/**
		 * A comment that you enter about the zonal shift. Only the latest comment is retained; no comment history is maintained. A new comment overwrites any existing comment string.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * <p>The length of time that you want a zonal shift to be active, which Route 53 ARC converts to an expiry time (expiration time). Zonal shifts are temporary. You can set a zonal shift to be active initially for up to three days (72 hours).</p> <p>If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration. You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p> <p>To set a length of time for a zonal shift to be active, specify a whole number, and then one of the following, with no space:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;A lowercase letter m:&lt;/b&gt; To specify that the value is in minutes.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;A lowercase letter h:&lt;/b&gt; To specify that the value is in hours.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For example: &lt;code&gt;20h&lt;/code&gt; means the zonal shift expires in 20 hours. &lt;code&gt;120m&lt;/code&gt; means the zonal shift expires in 120 minutes (2 hours).&lt;/p&gt; </code></pre>
		 * Required
		 * Max length: 5
		 * Min length: 2
		 */
		expiresIn: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier for the resource to include in a zonal shift. The identifier is the Amazon Resource Name (ARN) for the resource.</p> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
		 * Required
		 * Max length: 1024
		 * Min length: 8
		 */
		resourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateStartZonalShiftPostBodyFormGroup() {
		return new FormGroup<StartZonalShiftPostBodyFormProperties>({
			awayFrom: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(20)]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128)]),
			expiresIn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern('^([1-9][0-9]*)(m|h)$')]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(1024)]),
		});

	}

}

