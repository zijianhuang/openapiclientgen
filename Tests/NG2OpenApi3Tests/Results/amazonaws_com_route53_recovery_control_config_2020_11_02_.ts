import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateClusterResponse {
		Cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster. */
	export interface Cluster {
		ClusterArn?: string;
		ClusterEndpoints?: Array<ClusterEndpoint>;
		Name?: string;
		Status?: Status;
	}

	/** A set of five redundant Regional endpoints against which you can execute API calls to update or get the state of routing controls. You can host multiple control panels and routing controls on one cluster. */
	export interface ClusterFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}


	/** A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster. */
	export interface ClusterEndpoint {
		Endpoint?: string;
		Region?: string;
	}

	/** A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster. */
	export interface ClusterEndpointFormProperties {
		Endpoint: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateClusterEndpointFormGroup() {
		return new FormGroup<ClusterEndpointFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The deployment status of a resource. Status can be one of the following:</p> <p>PENDING: Amazon Route 53 Application Recovery Controller is creating the resource.</p> <p>DEPLOYED: The resource is deployed and ready to use.</p> <p>PENDING_DELETION: Amazon Route 53 Application Recovery Controller is deleting the resource.</p> */
	export enum Status { PENDING = 'PENDING', DEPLOYED = 'DEPLOYED', PENDING_DELETION = 'PENDING_DELETION' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateControlPanelResponse {
		ControlPanel?: ControlPanel;
	}
	export interface CreateControlPanelResponseFormProperties {
	}
	export function CreateCreateControlPanelResponseFormGroup() {
		return new FormGroup<CreateControlPanelResponseFormProperties>({
		});

	}


	/** A control panel represents a group of routing controls that can be changed together in a single transaction. */
	export interface ControlPanel {
		ClusterArn?: string;
		ControlPanelArn?: string;
		DefaultControlPanel?: boolean | null;
		Name?: string;
		RoutingControlCount?: number | null;
		Status?: Status;
	}

	/** A control panel represents a group of routing controls that can be changed together in a single transaction. */
	export interface ControlPanelFormProperties {
		ClusterArn: FormControl<string | null | undefined>,
		ControlPanelArn: FormControl<string | null | undefined>,
		DefaultControlPanel: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoutingControlCount: FormControl<number | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateControlPanelFormGroup() {
		return new FormGroup<ControlPanelFormProperties>({
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			DefaultControlPanel: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoutingControlCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface CreateRoutingControlResponse {
		RoutingControl?: RoutingControl;
	}
	export interface CreateRoutingControlResponseFormProperties {
	}
	export function CreateCreateRoutingControlResponseFormGroup() {
		return new FormGroup<CreateRoutingControlResponseFormProperties>({
		});

	}


	/** A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing. */
	export interface RoutingControl {
		ControlPanelArn?: string;
		Name?: string;
		RoutingControlArn?: string;
		Status?: Status;
	}

	/** A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing. */
	export interface RoutingControlFormProperties {
		ControlPanelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoutingControlArn: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateRoutingControlFormGroup() {
		return new FormGroup<RoutingControlFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoutingControlArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export interface CreateSafetyRuleResponse {
		AssertionRule?: AssertionRule;
		GatingRule?: GatingRule;
	}
	export interface CreateSafetyRuleResponseFormProperties {
	}
	export function CreateCreateSafetyRuleResponseFormGroup() {
		return new FormGroup<CreateSafetyRuleResponseFormProperties>({
		});

	}


	/** An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario. */
	export interface AssertionRule {

		/** Required */
		AssertedControls: Array<string>;

		/** Required */
		ControlPanelArn: string;

		/** Required */
		Name: string;

		/** Required */
		RuleConfig: RuleConfig;

		/** Required */
		SafetyRuleArn: string;

		/** Required */
		Status: Status;

		/** Required */
		WaitPeriodMs: number;
	}

	/** An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario. */
	export interface AssertionRuleFormProperties {

		/** Required */
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SafetyRuleArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<Status | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateAssertionRuleFormGroup() {
		return new FormGroup<AssertionRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes. */
	export interface RuleConfig {

		/** Required */
		Inverted: boolean;

		/** Required */
		Threshold: number;

		/** Required */
		Type: RuleType;
	}

	/** The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many control states must be ON after a transaction completes. */
	export interface RuleConfigFormProperties {

		/** Required */
		Inverted: FormControl<boolean | null | undefined>,

		/** Required */
		Threshold: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<RuleType | null | undefined>,
	}
	export function CreateRuleConfigFormGroup() {
		return new FormGroup<RuleConfigFormProperties>({
			Inverted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<RuleType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An enumerated type that determines how the evaluated rules are processed. RuleType can be one of the following:</p> <p>ATLEAST - At least N routing controls must be set. You specify N as the Threshold in the rule configuration.</p> <p>AND - All routing controls must be set. This is a shortcut for "At least N," where N is the total number of controls in the rule.</p> <p>OR - Any control must be set. This is a shortcut for "At least N," where N is 1.</p> */
	export enum RuleType { ATLEAST = 'ATLEAST', AND = 'AND', OR = 'OR' }


	/** <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p> */
	export interface GatingRule {

		/** Required */
		ControlPanelArn: string;

		/** Required */
		GatingControls: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		RuleConfig: RuleConfig;

		/** Required */
		SafetyRuleArn: string;

		/** Required */
		Status: Status;

		/** Required */
		TargetControls: Array<string>;

		/** Required */
		WaitPeriodMs: number;
	}

	/** <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p> */
	export interface GatingRuleFormProperties {

		/** Required */
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SafetyRuleArn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<Status | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateGatingRuleFormGroup() {
		return new FormGroup<GatingRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteControlPanelResponse {
	}
	export interface DeleteControlPanelResponseFormProperties {
	}
	export function CreateDeleteControlPanelResponseFormGroup() {
		return new FormGroup<DeleteControlPanelResponseFormProperties>({
		});

	}

	export interface DeleteRoutingControlResponse {
	}
	export interface DeleteRoutingControlResponseFormProperties {
	}
	export function CreateDeleteRoutingControlResponseFormGroup() {
		return new FormGroup<DeleteRoutingControlResponseFormProperties>({
		});

	}

	export interface DeleteSafetyRuleResponse {
	}
	export interface DeleteSafetyRuleResponseFormProperties {
	}
	export function CreateDeleteSafetyRuleResponseFormGroup() {
		return new FormGroup<DeleteSafetyRuleResponseFormProperties>({
		});

	}

	export interface DescribeClusterResponse {
		Cluster?: Cluster;
	}
	export interface DescribeClusterResponseFormProperties {
	}
	export function CreateDescribeClusterResponseFormGroup() {
		return new FormGroup<DescribeClusterResponseFormProperties>({
		});

	}

	export interface DescribeControlPanelResponse {
		ControlPanel?: ControlPanel;
	}
	export interface DescribeControlPanelResponseFormProperties {
	}
	export function CreateDescribeControlPanelResponseFormGroup() {
		return new FormGroup<DescribeControlPanelResponseFormProperties>({
		});

	}

	export interface DescribeRoutingControlResponse {
		RoutingControl?: RoutingControl;
	}
	export interface DescribeRoutingControlResponseFormProperties {
	}
	export function CreateDescribeRoutingControlResponseFormGroup() {
		return new FormGroup<DescribeRoutingControlResponseFormProperties>({
		});

	}

	export interface DescribeSafetyRuleResponse {
		AssertionRule?: AssertionRule;
		GatingRule?: GatingRule;
	}
	export interface DescribeSafetyRuleResponseFormProperties {
	}
	export function CreateDescribeSafetyRuleResponseFormGroup() {
		return new FormGroup<DescribeSafetyRuleResponseFormProperties>({
		});

	}

	export interface ListAssociatedRoute53HealthChecksResponse {
		HealthCheckIds?: Array<string>;
		NextToken?: string;
	}
	export interface ListAssociatedRoute53HealthChecksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedRoute53HealthChecksResponseFormGroup() {
		return new FormGroup<ListAssociatedRoute53HealthChecksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResponse {
		Clusters?: Array<Cluster>;
		NextToken?: string;
	}
	export interface ListClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListControlPanelsResponse {
		ControlPanels?: Array<ControlPanel>;
		NextToken?: string;
	}
	export interface ListControlPanelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListControlPanelsResponseFormGroup() {
		return new FormGroup<ListControlPanelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoutingControlsResponse {
		NextToken?: string;
		RoutingControls?: Array<RoutingControl>;
	}
	export interface ListRoutingControlsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutingControlsResponseFormGroup() {
		return new FormGroup<ListRoutingControlsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSafetyRulesResponse {
		NextToken?: string;
		SafetyRules?: Array<Rule>;
	}
	export interface ListSafetyRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSafetyRulesResponseFormGroup() {
		return new FormGroup<ListSafetyRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A safety rule. A safety rule can be an assertion rule or a gating rule. */
	export interface Rule {
		ASSERTION?: AssertionRule;
		GATING?: GatingRule;
	}

	/** A safety rule. A safety rule can be an assertion rule or a gating rule. */
	export interface RuleFormProperties {
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__stringMin0Max256PatternS;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface __mapOf__stringMin0Max256PatternS {
	}
	export interface __mapOf__stringMin0Max256PatternSFormProperties {
	}
	export function Create__mapOf__stringMin0Max256PatternSFormGroup() {
		return new FormGroup<__mapOf__stringMin0Max256PatternSFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateControlPanelResponse {
		ControlPanel?: ControlPanel;
	}
	export interface UpdateControlPanelResponseFormProperties {
	}
	export function CreateUpdateControlPanelResponseFormGroup() {
		return new FormGroup<UpdateControlPanelResponseFormProperties>({
		});

	}

	export interface UpdateRoutingControlResponse {
		RoutingControl?: RoutingControl;
	}
	export interface UpdateRoutingControlResponseFormProperties {
	}
	export function CreateUpdateRoutingControlResponseFormGroup() {
		return new FormGroup<UpdateRoutingControlResponseFormProperties>({
		});

	}

	export interface UpdateSafetyRuleResponse {
		AssertionRule?: AssertionRule;
		GatingRule?: GatingRule;
	}
	export interface UpdateSafetyRuleResponseFormProperties {
	}
	export function CreateUpdateSafetyRuleResponseFormGroup() {
		return new FormGroup<UpdateSafetyRuleResponseFormProperties>({
		});

	}


	/** An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
	export interface AssertionRuleUpdate {

		/** Required */
		Name: string;

		/** Required */
		SafetyRuleArn: string;

		/** Required */
		WaitPeriodMs: number;
	}

	/** An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
	export interface AssertionRuleUpdateFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SafetyRuleArn: FormControl<string | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateAssertionRuleUpdateFormGroup() {
		return new FormGroup<AssertionRuleUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a cluster. */
	export interface CreateClusterRequest {
		ClientToken?: string;

		/** Required */
		ClusterName: string;
		Tags?: __mapOf__stringMin0Max256PatternS;
	}

	/** Creates a cluster. */
	export interface CreateClusterRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the control panel that you're creating. */
	export interface CreateControlPanelRequest {
		ClientToken?: string;

		/** Required */
		ClusterArn: string;

		/** Required */
		ControlPanelName: string;
		Tags?: __mapOf__stringMin0Max256PatternS;
	}

	/** The details of the control panel that you're creating. */
	export interface CreateControlPanelRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ClusterArn: FormControl<string | null | undefined>,

		/** Required */
		ControlPanelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateControlPanelRequestFormGroup() {
		return new FormGroup<CreateControlPanelRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ControlPanelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the routing control that you're creating. */
	export interface CreateRoutingControlRequest {
		ClientToken?: string;

		/** Required */
		ClusterArn: string;
		ControlPanelArn?: string;

		/** Required */
		RoutingControlName: string;
	}

	/** The details of the routing control that you're creating. */
	export interface CreateRoutingControlRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ClusterArn: FormControl<string | null | undefined>,
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		RoutingControlName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutingControlRequestFormGroup() {
		return new FormGroup<CreateRoutingControlRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			RoutingControlName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A new assertion rule for a control panel. */
	export interface NewAssertionRule {

		/** Required */
		AssertedControls: Array<string>;

		/** Required */
		ControlPanelArn: string;

		/** Required */
		Name: string;

		/** Required */
		RuleConfig: RuleConfig;

		/** Required */
		WaitPeriodMs: number;
	}

	/** A new assertion rule for a control panel. */
	export interface NewAssertionRuleFormProperties {

		/** Required */
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateNewAssertionRuleFormGroup() {
		return new FormGroup<NewAssertionRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A new gating rule for a control panel. */
	export interface NewGatingRule {

		/** Required */
		ControlPanelArn: string;

		/** Required */
		GatingControls: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		RuleConfig: RuleConfig;

		/** Required */
		TargetControls: Array<string>;

		/** Required */
		WaitPeriodMs: number;
	}

	/** A new gating rule for a control panel. */
	export interface NewGatingRuleFormProperties {

		/** Required */
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateNewGatingRuleFormGroup() {
		return new FormGroup<NewGatingRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body that you include when you create a safety rule. */
	export interface CreateSafetyRuleRequest {
		AssertionRule?: NewAssertionRule;
		ClientToken?: string;
		GatingRule?: NewGatingRule;
		Tags?: __mapOf__stringMin0Max256PatternS;
	}

	/** The request body that you include when you create a safety rule. */
	export interface CreateSafetyRuleRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSafetyRuleRequestFormGroup() {
		return new FormGroup<CreateSafetyRuleRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteClusterRequest {
	}
	export interface DeleteClusterRequestFormProperties {
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
		});

	}

	export interface DeleteControlPanelRequest {
	}
	export interface DeleteControlPanelRequestFormProperties {
	}
	export function CreateDeleteControlPanelRequestFormGroup() {
		return new FormGroup<DeleteControlPanelRequestFormProperties>({
		});

	}

	export interface DeleteRoutingControlRequest {
	}
	export interface DeleteRoutingControlRequestFormProperties {
	}
	export function CreateDeleteRoutingControlRequestFormGroup() {
		return new FormGroup<DeleteRoutingControlRequestFormProperties>({
		});

	}

	export interface DeleteSafetyRuleRequest {
	}
	export interface DeleteSafetyRuleRequestFormProperties {
	}
	export function CreateDeleteSafetyRuleRequestFormGroup() {
		return new FormGroup<DeleteSafetyRuleRequestFormProperties>({
		});

	}

	export interface DescribeClusterRequest {
	}
	export interface DescribeClusterRequestFormProperties {
	}
	export function CreateDescribeClusterRequestFormGroup() {
		return new FormGroup<DescribeClusterRequestFormProperties>({
		});

	}

	export interface DescribeControlPanelRequest {
	}
	export interface DescribeControlPanelRequestFormProperties {
	}
	export function CreateDescribeControlPanelRequestFormGroup() {
		return new FormGroup<DescribeControlPanelRequestFormProperties>({
		});

	}

	export interface DescribeRoutingControlRequest {
	}
	export interface DescribeRoutingControlRequestFormProperties {
	}
	export function CreateDescribeRoutingControlRequestFormGroup() {
		return new FormGroup<DescribeRoutingControlRequestFormProperties>({
		});

	}

	export interface DescribeSafetyRuleRequest {
	}
	export interface DescribeSafetyRuleRequestFormProperties {
	}
	export function CreateDescribeSafetyRuleRequestFormGroup() {
		return new FormGroup<DescribeSafetyRuleRequestFormProperties>({
		});

	}


	/** Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
	export interface GatingRuleUpdate {

		/** Required */
		Name: string;

		/** Required */
		SafetyRuleArn: string;

		/** Required */
		WaitPeriodMs: number;
	}

	/** Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
	export interface GatingRuleUpdateFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SafetyRuleArn: FormControl<string | null | undefined>,

		/** Required */
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateGatingRuleUpdateFormGroup() {
		return new FormGroup<GatingRuleUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssociatedRoute53HealthChecksRequest {
	}
	export interface ListAssociatedRoute53HealthChecksRequestFormProperties {
	}
	export function CreateListAssociatedRoute53HealthChecksRequestFormGroup() {
		return new FormGroup<ListAssociatedRoute53HealthChecksRequestFormProperties>({
		});

	}

	export interface ListClustersRequest {
	}
	export interface ListClustersRequestFormProperties {
	}
	export function CreateListClustersRequestFormGroup() {
		return new FormGroup<ListClustersRequestFormProperties>({
		});

	}

	export interface ListControlPanelsRequest {
	}
	export interface ListControlPanelsRequestFormProperties {
	}
	export function CreateListControlPanelsRequestFormGroup() {
		return new FormGroup<ListControlPanelsRequestFormProperties>({
		});

	}

	export interface ListRoutingControlsRequest {
	}
	export interface ListRoutingControlsRequestFormProperties {
	}
	export function CreateListRoutingControlsRequestFormGroup() {
		return new FormGroup<ListRoutingControlsRequestFormProperties>({
		});

	}

	export interface ListSafetyRulesRequest {
	}
	export interface ListSafetyRulesRequestFormProperties {
	}
	export function CreateListSafetyRulesRequestFormGroup() {
		return new FormGroup<ListSafetyRulesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** Request of adding tag to the resource */
	export interface TagResourceRequest {

		/** Required */
		Tags: __mapOf__stringMin0Max256PatternS;
	}

	/** Request of adding tag to the resource */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** The details of the control panel that you're updating. */
	export interface UpdateControlPanelRequest {

		/** Required */
		ControlPanelArn: string;

		/** Required */
		ControlPanelName: string;
	}

	/** The details of the control panel that you're updating. */
	export interface UpdateControlPanelRequestFormProperties {

		/** Required */
		ControlPanelArn: FormControl<string | null | undefined>,

		/** Required */
		ControlPanelName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateControlPanelRequestFormGroup() {
		return new FormGroup<UpdateControlPanelRequestFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ControlPanelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the routing control that you're updating. */
	export interface UpdateRoutingControlRequest {

		/** Required */
		RoutingControlArn: string;

		/** Required */
		RoutingControlName: string;
	}

	/** The details of the routing control that you're updating. */
	export interface UpdateRoutingControlRequestFormProperties {

		/** Required */
		RoutingControlArn: FormControl<string | null | undefined>,

		/** Required */
		RoutingControlName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingControlRequestFormGroup() {
		return new FormGroup<UpdateRoutingControlRequestFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoutingControlName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability. */
	export interface UpdateSafetyRuleRequest {
		AssertionRuleUpdate?: AssertionRuleUpdate;
		GatingRuleUpdate?: GatingRuleUpdate;
	}

	/** A rule that you add to Application Recovery Controller to ensure that recovery actions don't accidentally impair your application's availability. */
	export interface UpdateSafetyRuleRequestFormProperties {
	}
	export function CreateUpdateSafetyRuleRequestFormGroup() {
		return new FormGroup<UpdateSafetyRuleRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
		 * Post cluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + 'cluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of all the clusters in an account.
		 * Get cluster
		 * @param {number} MaxResults The number of objects that you want to return with this call.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken The token that identifies which batch of results you want to see.
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'cluster?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
		 * Post controlpanel
		 * @return {CreateControlPanelResponse} Success
		 */
		CreateControlPanel(requestBody: CreateControlPanelPostBody): Observable<CreateControlPanelResponse> {
			return this.http.post<CreateControlPanelResponse>(this.baseUri + 'controlpanel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
		 * Put controlpanel
		 * @return {UpdateControlPanelResponse} Success
		 */
		UpdateControlPanel(requestBody: UpdateControlPanelPutBody): Observable<UpdateControlPanelResponse> {
			return this.http.put<UpdateControlPanelResponse>(this.baseUri + 'controlpanel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
		 * Post routingcontrol
		 * @return {CreateRoutingControlResponse} Success
		 */
		CreateRoutingControl(requestBody: CreateRoutingControlPostBody): Observable<CreateRoutingControlResponse> {
			return this.http.post<CreateRoutingControlResponse>(this.baseUri + 'routingcontrol', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
		 * Put routingcontrol
		 * @return {UpdateRoutingControlResponse} Success
		 */
		UpdateRoutingControl(requestBody: UpdateRoutingControlPutBody): Observable<UpdateRoutingControlResponse> {
			return this.http.put<UpdateRoutingControlResponse>(this.baseUri + 'routingcontrol', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
		 * Post safetyrule
		 * @return {CreateSafetyRuleResponse} Success
		 */
		CreateSafetyRule(requestBody: CreateSafetyRulePostBody): Observable<CreateSafetyRuleResponse> {
			return this.http.post<CreateSafetyRuleResponse>(this.baseUri + 'safetyrule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.
		 * Put safetyrule
		 * @return {UpdateSafetyRuleResponse} Success
		 */
		UpdateSafetyRule(requestBody: UpdateSafetyRulePutBody): Observable<UpdateSafetyRuleResponse> {
			return this.http.put<UpdateSafetyRuleResponse>(this.baseUri + 'safetyrule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a cluster.
		 * Delete cluster/{ClusterArn}
		 * @param {string} ClusterArn The Amazon Resource Name (ARN) of the cluster that you're deleting.
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(ClusterArn: string): Observable<DeleteClusterResponse> {
			return this.http.delete<DeleteClusterResponse>(this.baseUri + 'cluster/' + (ClusterArn == null ? '' : encodeURIComponent(ClusterArn)), {});
		}

		/**
		 * Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
		 * Get cluster/{ClusterArn}
		 * @param {string} ClusterArn The Amazon Resource Name (ARN) of the cluster.
		 * @return {DescribeClusterResponse} Success
		 */
		DescribeCluster(ClusterArn: string): Observable<DescribeClusterResponse> {
			return this.http.get<DescribeClusterResponse>(this.baseUri + 'cluster/' + (ClusterArn == null ? '' : encodeURIComponent(ClusterArn)), {});
		}

		/**
		 * Deletes a control panel.
		 * Delete controlpanel/{ControlPanelArn}
		 * @param {string} ControlPanelArn The Amazon Resource Name (ARN) of the control panel.
		 * @return {DeleteControlPanelResponse} Success
		 */
		DeleteControlPanel(ControlPanelArn: string): Observable<DeleteControlPanelResponse> {
			return this.http.delete<DeleteControlPanelResponse>(this.baseUri + 'controlpanel/' + (ControlPanelArn == null ? '' : encodeURIComponent(ControlPanelArn)), {});
		}

		/**
		 * Displays details about a control panel.
		 * Get controlpanel/{ControlPanelArn}
		 * @param {string} ControlPanelArn The Amazon Resource Name (ARN) of the control panel.
		 * @return {DescribeControlPanelResponse} Success
		 */
		DescribeControlPanel(ControlPanelArn: string): Observable<DescribeControlPanelResponse> {
			return this.http.get<DescribeControlPanelResponse>(this.baseUri + 'controlpanel/' + (ControlPanelArn == null ? '' : encodeURIComponent(ControlPanelArn)), {});
		}

		/**
		 * Deletes a routing control.
		 * Delete routingcontrol/{RoutingControlArn}
		 * @param {string} RoutingControlArn The Amazon Resource Name (ARN) of the routing control that you're deleting.
		 * @return {DeleteRoutingControlResponse} Success
		 */
		DeleteRoutingControl(RoutingControlArn: string): Observable<DeleteRoutingControlResponse> {
			return this.http.delete<DeleteRoutingControlResponse>(this.baseUri + 'routingcontrol/' + (RoutingControlArn == null ? '' : encodeURIComponent(RoutingControlArn)), {});
		}

		/**
		 * <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
		 * Get routingcontrol/{RoutingControlArn}
		 * @param {string} RoutingControlArn The Amazon Resource Name (ARN) of the routing control.
		 * @return {DescribeRoutingControlResponse} Success
		 */
		DescribeRoutingControl(RoutingControlArn: string): Observable<DescribeRoutingControlResponse> {
			return this.http.get<DescribeRoutingControlResponse>(this.baseUri + 'routingcontrol/' + (RoutingControlArn == null ? '' : encodeURIComponent(RoutingControlArn)), {});
		}

		/**
		 * <p>Deletes a safety rule.</p>/&gt;
		 * Delete safetyrule/{SafetyRuleArn}
		 * @param {string} SafetyRuleArn The ARN of the safety rule.
		 * @return {DeleteSafetyRuleResponse} Success
		 */
		DeleteSafetyRule(SafetyRuleArn: string): Observable<DeleteSafetyRuleResponse> {
			return this.http.delete<DeleteSafetyRuleResponse>(this.baseUri + 'safetyrule/' + (SafetyRuleArn == null ? '' : encodeURIComponent(SafetyRuleArn)), {});
		}

		/**
		 * Returns information about a safety rule.
		 * Get safetyrule/{SafetyRuleArn}
		 * @param {string} SafetyRuleArn The ARN of the safety rule.
		 * @return {DescribeSafetyRuleResponse} Success
		 */
		DescribeSafetyRule(SafetyRuleArn: string): Observable<DescribeSafetyRuleResponse> {
			return this.http.get<DescribeSafetyRuleResponse>(this.baseUri + 'safetyrule/' + (SafetyRuleArn == null ? '' : encodeURIComponent(SafetyRuleArn)), {});
		}

		/**
		 * Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
		 * Get routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks
		 * @param {number} MaxResults The number of objects that you want to return with this call.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken The token that identifies which batch of results you want to see.
		 * @param {string} RoutingControlArn The Amazon Resource Name (ARN) of the routing control.
		 * @return {ListAssociatedRoute53HealthChecksResponse} Success
		 */
		ListAssociatedRoute53HealthChecks(MaxResults: number | null | undefined, NextToken: string | null | undefined, RoutingControlArn: string): Observable<ListAssociatedRoute53HealthChecksResponse> {
			return this.http.get<ListAssociatedRoute53HealthChecksResponse>(this.baseUri + 'routingcontrol/' + (RoutingControlArn == null ? '' : encodeURIComponent(RoutingControlArn)) + '/associatedRoute53HealthChecks?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns an array of control panels in an account or in a cluster.
		 * Get controlpanels
		 * @param {string} ClusterArn The Amazon Resource Name (ARN) of a cluster.
		 * @param {number} MaxResults The number of objects that you want to return with this call.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken The token that identifies which batch of results you want to see.
		 * @return {ListControlPanelsResponse} Success
		 */
		ListControlPanels(ClusterArn: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListControlPanelsResponse> {
			return this.http.get<ListControlPanelsResponse>(this.baseUri + 'controlpanels?ClusterArn=' + (ClusterArn == null ? '' : encodeURIComponent(ClusterArn)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
		 * Get controlpanel/{ControlPanelArn}/routingcontrols
		 * @param {string} ControlPanelArn The Amazon Resource Name (ARN) of the control panel.
		 * @param {number} MaxResults The number of objects that you want to return with this call.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken The token that identifies which batch of results you want to see.
		 * @return {ListRoutingControlsResponse} Success
		 */
		ListRoutingControls(ControlPanelArn: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListRoutingControlsResponse> {
			return this.http.get<ListRoutingControlsResponse>(this.baseUri + 'controlpanel/' + (ControlPanelArn == null ? '' : encodeURIComponent(ControlPanelArn)) + '/routingcontrols&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
		 * Get controlpanel/{ControlPanelArn}/safetyrules
		 * @param {string} ControlPanelArn The Amazon Resource Name (ARN) of the control panel.
		 * @param {number} MaxResults The number of objects that you want to return with this call.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} NextToken The token that identifies which batch of results you want to see.
		 * @return {ListSafetyRulesResponse} Success
		 */
		ListSafetyRules(ControlPanelArn: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListSafetyRulesResponse> {
			return this.http.get<ListSafetyRulesResponse>(this.baseUri + 'controlpanel/' + (ControlPanelArn == null ? '' : encodeURIComponent(ControlPanelArn)) + '/safetyrules&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags for a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the resource that's tagged.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds a tag to a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the resource that's tagged.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete tags/{ResourceArn}#TagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) for the resource that's tagged.
		 * @param {Array<string>} TagKeys Keys for the tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, TagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#TagKeys&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateClusterPostBody {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken?: string | null;

		/**
		 * The name of the cluster.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClusterName: string;

		/** The tags associated with the cluster. */
		Tags?: {[id: string]: string };
	}
	export interface CreateClusterPostBodyFormProperties {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The name of the cluster.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClusterName: FormControl<string | null | undefined>,

		/** The tags associated with the cluster. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterPostBodyFormGroup() {
		return new FormGroup<CreateClusterPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateControlPanelPostBody {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the cluster for the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ClusterArn: string;

		/**
		 * The name of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ControlPanelName: string;

		/** The tags associated with the control panel. */
		Tags?: {[id: string]: string };
	}
	export interface CreateControlPanelPostBodyFormProperties {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the cluster for the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ClusterArn: FormControl<string | null | undefined>,

		/**
		 * The name of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ControlPanelName: FormControl<string | null | undefined>,

		/** The tags associated with the control panel. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateControlPanelPostBodyFormGroup() {
		return new FormGroup<CreateControlPanelPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			ClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9:\/_-]*$')]),
			ControlPanelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateControlPanelPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ControlPanelArn: string;

		/**
		 * The name of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ControlPanelName: string;
	}
	export interface UpdateControlPanelPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ControlPanelArn: FormControl<string | null | undefined>,

		/**
		 * The name of the control panel.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ControlPanelName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateControlPanelPutBodyFormGroup() {
		return new FormGroup<UpdateControlPanelPutBodyFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9:\/_-]*$')]),
			ControlPanelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
		});

	}

	export interface CreateRoutingControlPostBody {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the cluster that includes the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ClusterArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
		 * Min length: 1
		 * Max length: 256
		 */
		ControlPanelArn?: string | null;

		/**
		 * The name of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		RoutingControlName: string;
	}
	export interface CreateRoutingControlPostBodyFormProperties {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the cluster that includes the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		ClusterArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
		 * Min length: 1
		 * Max length: 256
		 */
		ControlPanelArn: FormControl<string | null | undefined>,

		/**
		 * The name of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		RoutingControlName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutingControlPostBodyFormGroup() {
		return new FormGroup<CreateRoutingControlPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			ClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9:\/_-]*$')]),
			ControlPanelArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9:\/_-]*$')]),
			RoutingControlName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
		});

	}

	export interface UpdateRoutingControlPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		RoutingControlArn: string;

		/**
		 * The name of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		RoutingControlName: string;
	}
	export interface UpdateRoutingControlPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		RoutingControlArn: FormControl<string | null | undefined>,

		/**
		 * The name of the routing control.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		RoutingControlName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutingControlPutBodyFormGroup() {
		return new FormGroup<UpdateRoutingControlPutBodyFormProperties>({
			RoutingControlArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9:\/_-]*$')]),
			RoutingControlName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
		});

	}

	export interface CreateSafetyRulePostBody {

		/** A new assertion rule for a control panel. */
		AssertionRule?: CreateSafetyRulePostBodyAssertionRule;

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken?: string | null;

		/** A new gating rule for a control panel. */
		GatingRule?: CreateSafetyRulePostBodyGatingRule;

		/** The tags associated with the safety rule. */
		Tags?: {[id: string]: string };
	}
	export interface CreateSafetyRulePostBodyFormProperties {

		/**
		 * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** The tags associated with the safety rule. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSafetyRulePostBodyFormGroup() {
		return new FormGroup<CreateSafetyRulePostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSafetyRulePostBodyAssertionRule {
		AssertedControls?: Array<string>;
		ControlPanelArn?: string;
		Name?: string;
		RuleConfig?: RuleConfig;
		WaitPeriodMs?: number | null;
	}
	export interface CreateSafetyRulePostBodyAssertionRuleFormProperties {
		ControlPanelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateCreateSafetyRulePostBodyAssertionRuleFormGroup() {
		return new FormGroup<CreateSafetyRulePostBodyAssertionRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSafetyRulePostBodyGatingRule {
		ControlPanelArn?: string;
		GatingControls?: Array<string>;
		Name?: string;
		RuleConfig?: RuleConfig;
		TargetControls?: Array<string>;
		WaitPeriodMs?: number | null;
	}
	export interface CreateSafetyRulePostBodyGatingRuleFormProperties {
		ControlPanelArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateCreateSafetyRulePostBodyGatingRuleFormGroup() {
		return new FormGroup<CreateSafetyRulePostBodyGatingRuleFormProperties>({
			ControlPanelArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSafetyRulePutBody {

		/** An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
		AssertionRuleUpdate?: UpdateSafetyRulePutBodyAssertionRuleUpdate;

		/** Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged. */
		GatingRuleUpdate?: UpdateSafetyRulePutBodyGatingRuleUpdate;
	}
	export interface UpdateSafetyRulePutBodyFormProperties {
	}
	export function CreateUpdateSafetyRulePutBodyFormGroup() {
		return new FormGroup<UpdateSafetyRulePutBodyFormProperties>({
		});

	}

	export interface UpdateSafetyRulePutBodyAssertionRuleUpdate {
		Name?: string;
		SafetyRuleArn?: string;
		WaitPeriodMs?: number | null;
	}
	export interface UpdateSafetyRulePutBodyAssertionRuleUpdateFormProperties {
		Name: FormControl<string | null | undefined>,
		SafetyRuleArn: FormControl<string | null | undefined>,
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSafetyRulePutBodyAssertionRuleUpdateFormGroup() {
		return new FormGroup<UpdateSafetyRulePutBodyAssertionRuleUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSafetyRulePutBodyGatingRuleUpdate {
		Name?: string;
		SafetyRuleArn?: string;
		WaitPeriodMs?: number | null;
	}
	export interface UpdateSafetyRulePutBodyGatingRuleUpdateFormProperties {
		Name: FormControl<string | null | undefined>,
		SafetyRuleArn: FormControl<string | null | undefined>,
		WaitPeriodMs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSafetyRulePutBodyGatingRuleUpdateFormGroup() {
		return new FormGroup<UpdateSafetyRulePutBodyGatingRuleUpdateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SafetyRuleArn: new FormControl<string | null | undefined>(undefined),
			WaitPeriodMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags associated with the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags associated with the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

