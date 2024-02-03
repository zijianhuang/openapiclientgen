import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetRoutingControlStateResponse {

		/** Required */
		RoutingControlArn: string;

		/** Required */
		RoutingControlState: RoutingControlState;
		RoutingControlName?: string;
	}
	export interface GetRoutingControlStateResponseFormProperties {

		/** Required */
		RoutingControlArn: FormControl<string | null | undefined>,

		/** Required */
		RoutingControlState: FormControl<RoutingControlState | null | undefined>,
		RoutingControlName: FormControl<string | null | undefined>,
	}
	export function CreateGetRoutingControlStateResponseFormGroup() {
		return new FormGroup<GetRoutingControlStateResponseFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoutingControlState: new FormControl<RoutingControlState | null | undefined>(undefined, [Validators.required]),
			RoutingControlName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoutingControlState { On = 'On', Off = 'Off' }

	export interface GetRoutingControlStateRequest {

		/** Required */
		RoutingControlArn: string;
	}
	export interface GetRoutingControlStateRequestFormProperties {

		/** Required */
		RoutingControlArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRoutingControlStateRequestFormGroup() {
		return new FormGroup<GetRoutingControlStateRequestFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface EndpointTemporarilyUnavailableException {
	}
	export interface EndpointTemporarilyUnavailableExceptionFormProperties {
	}
	export function CreateEndpointTemporarilyUnavailableExceptionFormGroup() {
		return new FormGroup<EndpointTemporarilyUnavailableExceptionFormProperties>({
		});

	}

	export interface ListRoutingControlsResponse {

		/** Required */
		RoutingControls: Array<RoutingControl>;
		NextToken?: string;
	}
	export interface ListRoutingControlsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutingControlsResponseFormGroup() {
		return new FormGroup<ListRoutingControlsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A routing control, which is a simple on/off switch that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow.  */
	export interface RoutingControl {
		ControlPanelArn?: string;
		ControlPanelName?: string;
		RoutingControlArn?: string;
		RoutingControlName?: string;
		RoutingControlState?: RoutingControlState;
	}

	/** A routing control, which is a simple on/off switch that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow.  */
	export interface RoutingControlFormProperties {
		ControlPanelArn: FormControl<string | null | undefined>,
		ControlPanelName: FormControl<string | null | undefined>,
		RoutingControlArn: FormControl<string | null | undefined>,
		RoutingControlName: FormControl<string | null | undefined>,
		RoutingControlState: FormControl<RoutingControlState | null | undefined>,
	}
	export function CreateRoutingControlFormGroup() {
		return new FormGroup<RoutingControlFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			ControlPanelName: new FormControl<string | null | undefined>(undefined),
			RoutingControlArn: new FormControl<string | null | undefined>(undefined),
			RoutingControlName: new FormControl<string | null | undefined>(undefined),
			RoutingControlState: new FormControl<RoutingControlState | null | undefined>(undefined),
		});

	}

	export interface ListRoutingControlsRequest {
		ControlPanelArn?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRoutingControlsRequestFormProperties {
		ControlPanelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRoutingControlsRequestFormGroup() {
		return new FormGroup<ListRoutingControlsRequestFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutingControlStateResponse {
	}
	export interface UpdateRoutingControlStateResponseFormProperties {
	}
	export function CreateUpdateRoutingControlStateResponseFormGroup() {
		return new FormGroup<UpdateRoutingControlStateResponseFormProperties>({
		});

	}

	export interface UpdateRoutingControlStateRequest {

		/** Required */
		RoutingControlArn: string;

		/** Required */
		RoutingControlState: RoutingControlState;
		SafetyRulesToOverride?: Array<string>;
	}
	export interface UpdateRoutingControlStateRequestFormProperties {

		/** Required */
		RoutingControlArn: FormControl<string | null | undefined>,

		/** Required */
		RoutingControlState: FormControl<RoutingControlState | null | undefined>,
	}
	export function CreateUpdateRoutingControlStateRequestFormGroup() {
		return new FormGroup<UpdateRoutingControlStateRequestFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoutingControlState: new FormControl<RoutingControlState | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateRoutingControlStatesResponse {
	}
	export interface UpdateRoutingControlStatesResponseFormProperties {
	}
	export function CreateUpdateRoutingControlStatesResponseFormGroup() {
		return new FormGroup<UpdateRoutingControlStatesResponseFormProperties>({
		});

	}

	export interface UpdateRoutingControlStatesRequest {

		/** Required */
		UpdateRoutingControlStateEntries: Array<UpdateRoutingControlStateEntry>;
		SafetyRulesToOverride?: Array<string>;
	}
	export interface UpdateRoutingControlStatesRequestFormProperties {
	}
	export function CreateUpdateRoutingControlStatesRequestFormGroup() {
		return new FormGroup<UpdateRoutingControlStatesRequestFormProperties>({
		});

	}


	/** A routing control state entry. */
	export interface UpdateRoutingControlStateEntry {

		/** Required */
		RoutingControlArn: string;

		/** Required */
		RoutingControlState: RoutingControlState;
	}

	/** A routing control state entry. */
	export interface UpdateRoutingControlStateEntryFormProperties {

		/** Required */
		RoutingControlArn: FormControl<string | null | undefined>,

		/** Required */
		RoutingControlState: FormControl<RoutingControlState | null | undefined>,
	}
	export function CreateUpdateRoutingControlStateEntryFormGroup() {
		return new FormGroup<UpdateRoutingControlStateEntryFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoutingControlState: new FormControl<RoutingControlState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceLimitExceededException {
	}
	export interface ServiceLimitExceededExceptionFormProperties {
	}
	export function CreateServiceLimitExceededExceptionFormGroup() {
		return new FormGroup<ServiceLimitExceededExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow. </p> <p>Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html"> Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. </p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p>Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls in Route 53 ARC</a> </p> </li> </ul>
		 * Post #X-Amz-Target=ToggleCustomerAPI.GetRoutingControlState
		 * @return {GetRoutingControlStateResponse} Success
		 */
		GetRoutingControlState(requestBody: GetRoutingControlStateRequest): Observable<GetRoutingControlStateResponse> {
			return this.http.post<GetRoutingControlStateResponse>(this.baseUri + '#X-Amz-Target=ToggleCustomerAPI.GetRoutingControlState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List routing control names and Amazon Resource Names (ARNs), as well as the routing control state for each routing control, along with the control panel name and control panel ARN for the routing controls. If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists all the routing controls in the cluster.</p> <p>A routing control is a simple on/off switch in Route 53 ARC that you can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When the state is Off, traffic does not flow.</p> <p>Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html"> Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. </p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to use this API operation to list routing controls in Route 53 ARC.</i> </p> <p>Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls in Route 53 ARC</a> </p> </li> </ul>
		 * Post #X-Amz-Target=ToggleCustomerAPI.ListRoutingControls
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoutingControlsResponse} Success
		 */
		ListRoutingControls(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRoutingControlsRequest): Observable<ListRoutingControlsResponse> {
			return this.http.post<ListRoutingControlsResponse>(this.baseUri + '#X-Amz-Target=ToggleCustomerAPI.ListRoutingControls?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Set the state of the routing control to reroute traffic. You can set the value to be On or Off. When the state is On, traffic flows to a cell. When the state is Off, traffic does not flow.</p> <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application.</p> <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and update routing control states. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html"> Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a> </p> </li> </ul>
		 * Post #X-Amz-Target=ToggleCustomerAPI.UpdateRoutingControlState
		 * @return {UpdateRoutingControlStateResponse} Success
		 */
		UpdateRoutingControlState(requestBody: UpdateRoutingControlStateRequest): Observable<UpdateRoutingControlStateResponse> {
			return this.http.post<UpdateRoutingControlStateResponse>(this.baseUri + '#X-Amz-Target=ToggleCustomerAPI.UpdateRoutingControlState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Set multiple routing control states. You can set the value for each state to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow.</p> <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application.</p> <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and update routing control states. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html"> Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <p> <i>You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.</i> </p> <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html"> Viewing and updating routing control states</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a> </p> </li> </ul>
		 * Post #X-Amz-Target=ToggleCustomerAPI.UpdateRoutingControlStates
		 * @return {UpdateRoutingControlStatesResponse} Success
		 */
		UpdateRoutingControlStates(requestBody: UpdateRoutingControlStatesRequest): Observable<UpdateRoutingControlStatesResponse> {
			return this.http.post<UpdateRoutingControlStatesResponse>(this.baseUri + '#X-Amz-Target=ToggleCustomerAPI.UpdateRoutingControlStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetRoutingControlStateX_Amz_Target { 'ToggleCustomerAPI.GetRoutingControlState' = 'ToggleCustomerAPI.GetRoutingControlState' }

	export enum ListRoutingControlsX_Amz_Target { 'ToggleCustomerAPI.ListRoutingControls' = 'ToggleCustomerAPI.ListRoutingControls' }

	export enum UpdateRoutingControlStateX_Amz_Target { 'ToggleCustomerAPI.UpdateRoutingControlState' = 'ToggleCustomerAPI.UpdateRoutingControlState' }

	export enum UpdateRoutingControlStatesX_Amz_Target { 'ToggleCustomerAPI.UpdateRoutingControlStates' = 'ToggleCustomerAPI.UpdateRoutingControlStates' }

}

