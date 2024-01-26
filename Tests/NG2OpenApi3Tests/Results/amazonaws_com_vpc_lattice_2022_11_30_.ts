import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchUpdateRuleResponse {
		successful?: Array<RuleUpdateSuccess>;
		unsuccessful?: Array<RuleUpdateFailure>;
	}
	export interface BatchUpdateRuleResponseFormProperties {
	}
	export function CreateBatchUpdateRuleResponseFormGroup() {
		return new FormGroup<BatchUpdateRuleResponseFormProperties>({
		});

	}


	/** Describes a successful rule update. */
	export interface RuleUpdateSuccess {
		action?: RuleAction;
		arn?: string;
		id?: string;
		isDefault?: boolean | null;
		match?: RuleMatch;
		name?: string;
		priority?: number | null;
	}

	/** Describes a successful rule update. */
	export interface RuleUpdateSuccessFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateRuleUpdateSuccessFormGroup() {
		return new FormGroup<RuleUpdateSuccessFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed. */
	export interface RuleAction {
		fixedResponse?: FixedResponseAction;
		forward?: ForwardAction;
	}

	/** Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed. */
	export interface RuleActionFormProperties {
	}
	export function CreateRuleActionFormGroup() {
		return new FormGroup<RuleActionFormProperties>({
		});

	}


	/** Information about an action that returns a custom HTTP response.  */
	export interface FixedResponseAction {

		/** Required */
		statusCode: number;
	}

	/** Information about an action that returns a custom HTTP response.  */
	export interface FixedResponseActionFormProperties {

		/** Required */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateFixedResponseActionFormGroup() {
		return new FormGroup<FixedResponseActionFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a forward action. You can use forward actions to route requests to one or more target groups.  */
	export interface ForwardAction {

		/** Required */
		targetGroups: Array<WeightedTargetGroup>;
	}

	/** Describes a forward action. You can use forward actions to route requests to one or more target groups.  */
	export interface ForwardActionFormProperties {
	}
	export function CreateForwardActionFormGroup() {
		return new FormGroup<ForwardActionFormProperties>({
		});

	}


	/** Describes the weight of a target group. */
	export interface WeightedTargetGroup {

		/** Required */
		targetGroupIdentifier: string;
		weight?: number | null;
	}

	/** Describes the weight of a target group. */
	export interface WeightedTargetGroupFormProperties {

		/** Required */
		targetGroupIdentifier: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedTargetGroupFormGroup() {
		return new FormGroup<WeightedTargetGroupFormProperties>({
			targetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a rule match. */
	export interface RuleMatch {
		httpMatch?: HttpMatch;
	}

	/** Describes a rule match. */
	export interface RuleMatchFormProperties {
	}
	export function CreateRuleMatchFormGroup() {
		return new FormGroup<RuleMatchFormProperties>({
		});

	}


	/** Describes criteria that can be applied to incoming requests. */
	export interface HttpMatch {
		headerMatches?: Array<HeaderMatch>;
		method?: string;
		pathMatch?: PathMatch;
	}

	/** Describes criteria that can be applied to incoming requests. */
	export interface HttpMatchFormProperties {
		method: FormControl<string | null | undefined>,
	}
	export function CreateHttpMatchFormGroup() {
		return new FormGroup<HttpMatchFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the constraints for a header match. Matches incoming requests with rule based on request header value before applying rule action. */
	export interface HeaderMatch {
		caseSensitive?: boolean | null;

		/** Required */
		match: HeaderMatchType;

		/** Required */
		name: string;
	}

	/** Describes the constraints for a header match. Matches incoming requests with rule based on request header value before applying rule action. */
	export interface HeaderMatchFormProperties {
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHeaderMatchFormGroup() {
		return new FormGroup<HeaderMatchFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a header match type. Only one can be provided. */
	export interface HeaderMatchType {
		contains?: string;
		exact?: string;
		prefix?: string;
	}

	/** Describes a header match type. Only one can be provided. */
	export interface HeaderMatchTypeFormProperties {
		contains: FormControl<string | null | undefined>,
		exact: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateHeaderMatchTypeFormGroup() {
		return new FormGroup<HeaderMatchTypeFormProperties>({
			contains: new FormControl<string | null | undefined>(undefined),
			exact: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the conditions that can be applied when matching a path for incoming requests. */
	export interface PathMatch {
		caseSensitive?: boolean | null;

		/** Required */
		match: PathMatchType;
	}

	/** Describes the conditions that can be applied when matching a path for incoming requests. */
	export interface PathMatchFormProperties {
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreatePathMatchFormGroup() {
		return new FormGroup<PathMatchFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a path match type. Each rule can include only one of the following types of paths. */
	export interface PathMatchType {
		exact?: string;
		prefix?: string;
	}

	/** Describes a path match type. Each rule can include only one of the following types of paths. */
	export interface PathMatchTypeFormProperties {
		exact: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreatePathMatchTypeFormGroup() {
		return new FormGroup<PathMatchTypeFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a rule update that failed. */
	export interface RuleUpdateFailure {
		failureCode?: string;
		failureMessage?: string;
		ruleIdentifier?: string;
	}

	/** Describes a rule update that failed. */
	export interface RuleUpdateFailureFormProperties {
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		ruleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRuleUpdateFailureFormGroup() {
		return new FormGroup<RuleUpdateFailureFormProperties>({
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			ruleIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an object when updating a rule. */
	export interface RuleUpdate {
		action?: RuleAction;
		match?: RuleMatch;
		priority?: number | null;

		/** Required */
		ruleIdentifier: string;
	}

	/** Represents an object when updating a rule. */
	export interface RuleUpdateFormProperties {
		priority: FormControl<number | null | undefined>,

		/** Required */
		ruleIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRuleUpdateFormGroup() {
		return new FormGroup<RuleUpdateFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
			ruleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface CreateAccessLogSubscriptionResponse {

		/** Required */
		arn: string;

		/** Required */
		destinationArn: string;

		/** Required */
		id: string;

		/** Required */
		resourceArn: string;

		/** Required */
		resourceId: string;
	}
	export interface CreateAccessLogSubscriptionResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessLogSubscriptionResponseFormGroup() {
		return new FormGroup<CreateAccessLogSubscriptionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateListenerResponse {
		arn?: string;
		defaultAction?: RuleAction;
		id?: string;
		name?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		serviceArn?: string;
		serviceId?: string;
	}
	export interface CreateListenerResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateListenerResponseFormGroup() {
		return new FormGroup<CreateListenerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListenerProtocol { HTTP = 0, HTTPS = 1 }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateRuleResponse {
		action?: RuleAction;
		arn?: string;
		id?: string;
		match?: RuleMatch;
		name?: string;
		priority?: number | null;
	}
	export interface CreateRuleResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateRuleResponseFormGroup() {
		return new FormGroup<CreateRuleResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateServiceResponse {
		arn?: string;
		authType?: AuthType;
		certificateArn?: string;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		id?: string;
		name?: string;
		status?: ServiceStatus;
	}
	export interface CreateServiceResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceStatus | null | undefined>(undefined),
		});

	}

	export enum AuthType { NONE = 0, AWS_IAM = 1 }


	/** Describes the DNS information of a service. */
	export interface DnsEntry {
		domainName?: string;
		hostedZoneId?: string;
	}

	/** Describes the DNS information of a service. */
	export interface DnsEntryFormProperties {
		domainName: FormControl<string | null | undefined>,
		hostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateDnsEntryFormGroup() {
		return new FormGroup<DnsEntryFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			hostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceStatus { ACTIVE = 0, CREATE_IN_PROGRESS = 1, DELETE_IN_PROGRESS = 2, CREATE_FAILED = 3, DELETE_FAILED = 4 }

	export interface CreateServiceNetworkResponse {
		arn?: string;
		authType?: AuthType;
		id?: string;
		name?: string;
	}
	export interface CreateServiceNetworkResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceNetworkResponseFormGroup() {
		return new FormGroup<CreateServiceNetworkResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceNetworkServiceAssociationResponse {
		arn?: string;
		createdBy?: string;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		id?: string;
		status?: ServiceNetworkServiceAssociationStatus;
	}
	export interface CreateServiceNetworkServiceAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
	}
	export function CreateCreateServiceNetworkServiceAssociationResponseFormGroup() {
		return new FormGroup<CreateServiceNetworkServiceAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
		});

	}

	export enum ServiceNetworkServiceAssociationStatus { CREATE_IN_PROGRESS = 0, ACTIVE = 1, DELETE_IN_PROGRESS = 2, CREATE_FAILED = 3, DELETE_FAILED = 4 }

	export interface CreateServiceNetworkVpcAssociationResponse {
		arn?: string;
		createdBy?: string;
		id?: string;
		securityGroupIds?: Array<string>;
		status?: ServiceNetworkVpcAssociationStatus;
	}
	export interface CreateServiceNetworkVpcAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>,
	}
	export function CreateCreateServiceNetworkVpcAssociationResponseFormGroup() {
		return new FormGroup<CreateServiceNetworkVpcAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>(undefined),
		});

	}

	export enum ServiceNetworkVpcAssociationStatus { CREATE_IN_PROGRESS = 0, ACTIVE = 1, UPDATE_IN_PROGRESS = 2, DELETE_IN_PROGRESS = 3, CREATE_FAILED = 4, DELETE_FAILED = 5, UPDATE_FAILED = 6 }

	export interface CreateTargetGroupResponse {
		arn?: string;
		config?: TargetGroupConfig;
		id?: string;
		name?: string;
		status?: ServiceNetworkServiceAssociationStatus;
		type?: TargetGroupType;
	}
	export interface CreateTargetGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
		type: FormControl<TargetGroupType | null | undefined>,
	}
	export function CreateCreateTargetGroupResponseFormGroup() {
		return new FormGroup<CreateTargetGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
			type: new FormControl<TargetGroupType | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a target group. Lambda functions don't support target group configuration. */
	export interface TargetGroupConfig {
		healthCheck?: HealthCheckConfig;
		ipAddressType?: IpAddressType;

		/** Required */
		port: number;

		/** Required */
		protocol: ListenerProtocol;
		protocolVersion?: TargetGroupProtocolVersion;

		/** Required */
		vpcIdentifier: string;
	}

	/** Describes the configuration of a target group. Lambda functions don't support target group configuration. */
	export interface TargetGroupConfigFormProperties {
		ipAddressType: FormControl<IpAddressType | null | undefined>,

		/** Required */
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<ListenerProtocol | null | undefined>,
		protocolVersion: FormControl<TargetGroupProtocolVersion | null | undefined>,

		/** Required */
		vpcIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateTargetGroupConfigFormGroup() {
		return new FormGroup<TargetGroupConfigFormProperties>({
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined, [Validators.required]),
			protocolVersion: new FormControl<TargetGroupProtocolVersion | null | undefined>(undefined),
			vpcIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The health check configuration of a target group. Health check configurations aren't used for <code>LAMBDA</code> and <code>ALB</code> target groups. */
	export interface HealthCheckConfig {
		enabled?: boolean | null;
		healthCheckIntervalSeconds?: number | null;
		healthCheckTimeoutSeconds?: number | null;
		healthyThresholdCount?: number | null;
		matcher?: Matcher;
		path?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		protocolVersion?: HealthCheckProtocolVersion;
		unhealthyThresholdCount?: number | null;
	}

	/** The health check configuration of a target group. Health check configurations aren't used for <code>LAMBDA</code> and <code>ALB</code> target groups. */
	export interface HealthCheckConfigFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		healthCheckIntervalSeconds: FormControl<number | null | undefined>,
		healthCheckTimeoutSeconds: FormControl<number | null | undefined>,
		healthyThresholdCount: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		protocolVersion: FormControl<HealthCheckProtocolVersion | null | undefined>,
		unhealthyThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckConfigFormGroup() {
		return new FormGroup<HealthCheckConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			healthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			healthCheckTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			healthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			protocolVersion: new FormControl<HealthCheckProtocolVersion | null | undefined>(undefined),
			unhealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The codes to use when checking for a successful response from a target for health checks. */
	export interface Matcher {
		httpCode?: string;
	}

	/** The codes to use when checking for a successful response from a target for health checks. */
	export interface MatcherFormProperties {
		httpCode: FormControl<string | null | undefined>,
	}
	export function CreateMatcherFormGroup() {
		return new FormGroup<MatcherFormProperties>({
			httpCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HealthCheckProtocolVersion { HTTP1 = 0, HTTP2 = 1 }

	export enum IpAddressType { IPV4 = 0, IPV6 = 1 }

	export enum TargetGroupProtocolVersion { HTTP1 = 0, HTTP2 = 1, GRPC = 2 }

	export enum TargetGroupType { IP = 0, LAMBDA = 1, INSTANCE = 2, ALB = 3 }

	export enum TargetGroupProtocol { HTTP = 0, HTTPS = 1 }

	export interface DeleteAccessLogSubscriptionResponse {
	}
	export interface DeleteAccessLogSubscriptionResponseFormProperties {
	}
	export function CreateDeleteAccessLogSubscriptionResponseFormGroup() {
		return new FormGroup<DeleteAccessLogSubscriptionResponseFormProperties>({
		});

	}

	export interface DeleteAuthPolicyResponse {
	}
	export interface DeleteAuthPolicyResponseFormProperties {
	}
	export function CreateDeleteAuthPolicyResponseFormGroup() {
		return new FormGroup<DeleteAuthPolicyResponseFormProperties>({
		});

	}

	export interface DeleteListenerResponse {
	}
	export interface DeleteListenerResponseFormProperties {
	}
	export function CreateDeleteListenerResponseFormGroup() {
		return new FormGroup<DeleteListenerResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteRuleResponse {
	}
	export interface DeleteRuleResponseFormProperties {
	}
	export function CreateDeleteRuleResponseFormGroup() {
		return new FormGroup<DeleteRuleResponseFormProperties>({
		});

	}

	export interface DeleteServiceResponse {
		arn?: string;
		id?: string;
		name?: string;
		status?: ServiceStatus;
	}
	export interface DeleteServiceResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteServiceNetworkResponse {
	}
	export interface DeleteServiceNetworkResponseFormProperties {
	}
	export function CreateDeleteServiceNetworkResponseFormGroup() {
		return new FormGroup<DeleteServiceNetworkResponseFormProperties>({
		});

	}

	export interface DeleteServiceNetworkServiceAssociationResponse {
		arn?: string;
		id?: string;
		status?: ServiceNetworkServiceAssociationStatus;
	}
	export interface DeleteServiceNetworkServiceAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
	}
	export function CreateDeleteServiceNetworkServiceAssociationResponseFormGroup() {
		return new FormGroup<DeleteServiceNetworkServiceAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteServiceNetworkVpcAssociationResponse {
		arn?: string;
		id?: string;
		status?: ServiceNetworkVpcAssociationStatus;
	}
	export interface DeleteServiceNetworkVpcAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>,
	}
	export function CreateDeleteServiceNetworkVpcAssociationResponseFormGroup() {
		return new FormGroup<DeleteServiceNetworkVpcAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteTargetGroupResponse {
		arn?: string;
		id?: string;
		status?: ServiceNetworkServiceAssociationStatus;
	}
	export interface DeleteTargetGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
	}
	export function CreateDeleteTargetGroupResponseFormGroup() {
		return new FormGroup<DeleteTargetGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface DeregisterTargetsResponse {
		successful?: Array<Target>;
		unsuccessful?: Array<TargetFailure>;
	}
	export interface DeregisterTargetsResponseFormProperties {
	}
	export function CreateDeregisterTargetsResponseFormGroup() {
		return new FormGroup<DeregisterTargetsResponseFormProperties>({
		});

	}


	/** Describes a target. */
	export interface Target {

		/** Required */
		id: string;
		port?: number | null;
	}

	/** Describes a target. */
	export interface TargetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a target failure. */
	export interface TargetFailure {
		failureCode?: string;
		failureMessage?: string;
		id?: string;
		port?: number | null;
	}

	/** Describes a target failure. */
	export interface TargetFailureFormProperties {
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
	}
	export function CreateTargetFailureFormGroup() {
		return new FormGroup<TargetFailureFormProperties>({
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAccessLogSubscriptionResponse {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		destinationArn: string;

		/** Required */
		id: string;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		resourceArn: string;

		/** Required */
		resourceId: string;
	}
	export interface GetAccessLogSubscriptionResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessLogSubscriptionResponseFormGroup() {
		return new FormGroup<GetAccessLogSubscriptionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAuthPolicyResponse {
		createdAt?: Date;
		lastUpdatedAt?: Date;
		policy?: string;
		state?: AuthPolicyState;
	}
	export interface GetAuthPolicyResponseFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		policy: FormControl<string | null | undefined>,
		state: FormControl<AuthPolicyState | null | undefined>,
	}
	export function CreateGetAuthPolicyResponseFormGroup() {
		return new FormGroup<GetAuthPolicyResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AuthPolicyState | null | undefined>(undefined),
		});

	}

	export enum AuthPolicyState { Active = 0, Inactive = 1 }

	export interface GetListenerResponse {
		arn?: string;
		createdAt?: Date;
		defaultAction?: RuleAction;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		serviceArn?: string;
		serviceId?: string;
	}
	export interface GetListenerResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateGetListenerResponseFormGroup() {
		return new FormGroup<GetListenerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {
		policy?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRuleResponse {
		action?: RuleAction;
		arn?: string;
		createdAt?: Date;
		id?: string;
		isDefault?: boolean | null;
		lastUpdatedAt?: Date;
		match?: RuleMatch;
		name?: string;
		priority?: number | null;
	}
	export interface GetRuleResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGetRuleResponseFormGroup() {
		return new FormGroup<GetRuleResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetServiceResponse {
		arn?: string;
		authType?: AuthType;
		certificateArn?: string;
		createdAt?: Date;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		failureCode?: string;
		failureMessage?: string;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		status?: ServiceStatus;
	}
	export interface GetServiceResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateGetServiceResponseFormGroup() {
		return new FormGroup<GetServiceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceStatus | null | undefined>(undefined),
		});

	}

	export interface GetServiceNetworkResponse {
		arn?: string;
		authType?: AuthType;
		createdAt?: Date;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		numberOfAssociatedServices?: number | null;
		numberOfAssociatedVPCs?: number | null;
	}
	export interface GetServiceNetworkResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		numberOfAssociatedServices: FormControl<number | null | undefined>,
		numberOfAssociatedVPCs: FormControl<number | null | undefined>,
	}
	export function CreateGetServiceNetworkResponseFormGroup() {
		return new FormGroup<GetServiceNetworkResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfAssociatedServices: new FormControl<number | null | undefined>(undefined),
			numberOfAssociatedVPCs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetServiceNetworkServiceAssociationResponse {
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		failureCode?: string;
		failureMessage?: string;
		id?: string;
		serviceArn?: string;
		serviceId?: string;
		serviceName?: string;
		serviceNetworkArn?: string;
		serviceNetworkId?: string;
		serviceNetworkName?: string;
		status?: ServiceNetworkServiceAssociationStatus;
	}
	export interface GetServiceNetworkServiceAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceNetworkArn: FormControl<string | null | undefined>,
		serviceNetworkId: FormControl<string | null | undefined>,
		serviceNetworkName: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
	}
	export function CreateGetServiceNetworkServiceAssociationResponseFormGroup() {
		return new FormGroup<GetServiceNetworkServiceAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceNetworkArn: new FormControl<string | null | undefined>(undefined),
			serviceNetworkId: new FormControl<string | null | undefined>(undefined),
			serviceNetworkName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface GetServiceNetworkVpcAssociationResponse {
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		failureCode?: string;
		failureMessage?: string;
		id?: string;
		lastUpdatedAt?: Date;
		securityGroupIds?: Array<string>;
		serviceNetworkArn?: string;
		serviceNetworkId?: string;
		serviceNetworkName?: string;
		status?: ServiceNetworkVpcAssociationStatus;
		vpcId?: string;
	}
	export interface GetServiceNetworkVpcAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		serviceNetworkArn: FormControl<string | null | undefined>,
		serviceNetworkId: FormControl<string | null | undefined>,
		serviceNetworkName: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceNetworkVpcAssociationResponseFormGroup() {
		return new FormGroup<GetServiceNetworkVpcAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			serviceNetworkArn: new FormControl<string | null | undefined>(undefined),
			serviceNetworkId: new FormControl<string | null | undefined>(undefined),
			serviceNetworkName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTargetGroupResponse {
		arn?: string;
		config?: TargetGroupConfig;
		createdAt?: Date;
		failureCode?: string;
		failureMessage?: string;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		serviceArns?: Array<string>;
		status?: ServiceNetworkServiceAssociationStatus;
		type?: TargetGroupType;
	}
	export interface GetTargetGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		failureCode: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
		type: FormControl<TargetGroupType | null | undefined>,
	}
	export function CreateGetTargetGroupResponseFormGroup() {
		return new FormGroup<GetTargetGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			failureCode: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
			type: new FormControl<TargetGroupType | null | undefined>(undefined),
		});

	}

	export interface ListAccessLogSubscriptionsResponse {

		/** Required */
		items: Array<AccessLogSubscriptionSummary>;
		nextToken?: string;
	}
	export interface ListAccessLogSubscriptionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessLogSubscriptionsResponseFormGroup() {
		return new FormGroup<ListAccessLogSubscriptionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an access log subscription. */
	export interface AccessLogSubscriptionSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		destinationArn: string;

		/** Required */
		id: string;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		resourceArn: string;

		/** Required */
		resourceId: string;
	}

	/** Summary information about an access log subscription. */
	export interface AccessLogSubscriptionSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateAccessLogSubscriptionSummaryFormGroup() {
		return new FormGroup<AccessLogSubscriptionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListListenersResponse {

		/** Required */
		items: Array<ListenerSummary>;
		nextToken?: string;
	}
	export interface ListListenersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListListenersResponseFormGroup() {
		return new FormGroup<ListListenersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a listener. */
	export interface ListenerSummary {
		arn?: string;
		createdAt?: Date;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
	}

	/** Summary information about a listener. */
	export interface ListenerSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
	}
	export function CreateListenerSummaryFormGroup() {
		return new FormGroup<ListenerSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
		});

	}

	export interface ListRulesResponse {

		/** Required */
		items: Array<RuleSummary>;
		nextToken?: string;
	}
	export interface ListRulesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the listener rule. */
	export interface RuleSummary {
		arn?: string;
		createdAt?: Date;
		id?: string;
		isDefault?: boolean | null;
		lastUpdatedAt?: Date;
		name?: string;
		priority?: number | null;
	}

	/** Summary information about the listener rule. */
	export interface RuleSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServiceNetworkServiceAssociationsResponse {

		/** Required */
		items: Array<ServiceNetworkServiceAssociationSummary>;
		nextToken?: string;
	}
	export interface ListServiceNetworkServiceAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceNetworkServiceAssociationsResponseFormGroup() {
		return new FormGroup<ListServiceNetworkServiceAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about the association between a service network and a service. */
	export interface ServiceNetworkServiceAssociationSummary {
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		id?: string;
		serviceArn?: string;
		serviceId?: string;
		serviceName?: string;
		serviceNetworkArn?: string;
		serviceNetworkId?: string;
		serviceNetworkName?: string;
		status?: ServiceNetworkServiceAssociationStatus;
	}

	/** Summary information about the association between a service network and a service. */
	export interface ServiceNetworkServiceAssociationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		serviceNetworkArn: FormControl<string | null | undefined>,
		serviceNetworkId: FormControl<string | null | undefined>,
		serviceNetworkName: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
	}
	export function CreateServiceNetworkServiceAssociationSummaryFormGroup() {
		return new FormGroup<ServiceNetworkServiceAssociationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceNetworkArn: new FormControl<string | null | undefined>(undefined),
			serviceNetworkId: new FormControl<string | null | undefined>(undefined),
			serviceNetworkName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface ListServiceNetworkVpcAssociationsResponse {

		/** Required */
		items: Array<ServiceNetworkVpcAssociationSummary>;
		nextToken?: string;
	}
	export interface ListServiceNetworkVpcAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceNetworkVpcAssociationsResponseFormGroup() {
		return new FormGroup<ListServiceNetworkVpcAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an association between a service network and a VPC. */
	export interface ServiceNetworkVpcAssociationSummary {
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		id?: string;
		lastUpdatedAt?: Date;
		serviceNetworkArn?: string;
		serviceNetworkId?: string;
		serviceNetworkName?: string;
		status?: ServiceNetworkVpcAssociationStatus;
		vpcId?: string;
	}

	/** Summary information about an association between a service network and a VPC. */
	export interface ServiceNetworkVpcAssociationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		serviceNetworkArn: FormControl<string | null | undefined>,
		serviceNetworkId: FormControl<string | null | undefined>,
		serviceNetworkName: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateServiceNetworkVpcAssociationSummaryFormGroup() {
		return new FormGroup<ServiceNetworkVpcAssociationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			serviceNetworkArn: new FormControl<string | null | undefined>(undefined),
			serviceNetworkId: new FormControl<string | null | undefined>(undefined),
			serviceNetworkName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceNetworksResponse {

		/** Required */
		items: Array<ServiceNetworkSummary>;
		nextToken?: string;
	}
	export interface ListServiceNetworksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceNetworksResponseFormGroup() {
		return new FormGroup<ListServiceNetworksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a service network. */
	export interface ServiceNetworkSummary {
		arn?: string;
		createdAt?: Date;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		numberOfAssociatedServices?: number | null;
		numberOfAssociatedVPCs?: number | null;
	}

	/** Summary information about a service network. */
	export interface ServiceNetworkSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		numberOfAssociatedServices: FormControl<number | null | undefined>,
		numberOfAssociatedVPCs: FormControl<number | null | undefined>,
	}
	export function CreateServiceNetworkSummaryFormGroup() {
		return new FormGroup<ServiceNetworkSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfAssociatedServices: new FormControl<number | null | undefined>(undefined),
			numberOfAssociatedVPCs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServicesResponse {
		items?: Array<ServiceSummary>;
		nextToken?: string;
	}
	export interface ListServicesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a service. */
	export interface ServiceSummary {
		arn?: string;
		createdAt?: Date;
		customDomainName?: string;
		dnsEntry?: DnsEntry;
		id?: string;
		lastUpdatedAt?: Date;
		name?: string;
		status?: ServiceStatus;
	}

	/** Summary information about a service. */
	export interface ServiceSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceStatus | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceStatus | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListTargetGroupsResponse {
		items?: Array<TargetGroupSummary>;
		nextToken?: string;
	}
	export interface ListTargetGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetGroupsResponseFormGroup() {
		return new FormGroup<ListTargetGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a target group. */
	export interface TargetGroupSummary {
		arn?: string;
		createdAt?: Date;
		id?: string;
		ipAddressType?: IpAddressType;
		lastUpdatedAt?: Date;
		name?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		serviceArns?: Array<string>;
		status?: ServiceNetworkServiceAssociationStatus;
		type?: TargetGroupType;
		vpcIdentifier?: string;
	}

	/** Summary information about a target group. */
	export interface TargetGroupSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
		type: FormControl<TargetGroupType | null | undefined>,
		vpcIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateTargetGroupSummaryFormGroup() {
		return new FormGroup<TargetGroupSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
			type: new FormControl<TargetGroupType | null | undefined>(undefined),
			vpcIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsResponse {

		/** Required */
		items: Array<TargetSummary>;
		nextToken?: string;
	}
	export interface ListTargetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsResponseFormGroup() {
		return new FormGroup<ListTargetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a target. */
	export interface TargetSummary {
		id?: string;
		port?: number | null;
		reasonCode?: string;
		status?: TargetStatus;
	}

	/** Summary information about a target. */
	export interface TargetSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		reasonCode: FormControl<string | null | undefined>,
		status: FormControl<TargetStatus | null | undefined>,
	}
	export function CreateTargetSummaryFormGroup() {
		return new FormGroup<TargetSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TargetStatus | null | undefined>(undefined),
		});

	}

	export enum TargetStatus { DRAINING = 0, UNAVAILABLE = 1, HEALTHY = 2, UNHEALTHY = 3, INITIAL = 4, UNUSED = 5 }

	export interface PutAuthPolicyResponse {
		policy?: string;
		state?: AuthPolicyState;
	}
	export interface PutAuthPolicyResponseFormProperties {
		policy: FormControl<string | null | undefined>,
		state: FormControl<AuthPolicyState | null | undefined>,
	}
	export function CreatePutAuthPolicyResponseFormGroup() {
		return new FormGroup<PutAuthPolicyResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AuthPolicyState | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyResponse {
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface RegisterTargetsResponse {
		successful?: Array<Target>;
		unsuccessful?: Array<TargetFailure>;
	}
	export interface RegisterTargetsResponseFormProperties {
	}
	export function CreateRegisterTargetsResponseFormGroup() {
		return new FormGroup<RegisterTargetsResponseFormProperties>({
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

	export interface UpdateAccessLogSubscriptionResponse {

		/** Required */
		arn: string;

		/** Required */
		destinationArn: string;

		/** Required */
		id: string;

		/** Required */
		resourceArn: string;

		/** Required */
		resourceId: string;
	}
	export interface UpdateAccessLogSubscriptionResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessLogSubscriptionResponseFormGroup() {
		return new FormGroup<UpdateAccessLogSubscriptionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateListenerResponse {
		arn?: string;
		defaultAction?: RuleAction;
		id?: string;
		name?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		serviceArn?: string;
		serviceId?: string;
	}
	export interface UpdateListenerResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateListenerResponseFormGroup() {
		return new FormGroup<UpdateListenerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRuleResponse {
		action?: RuleAction;
		arn?: string;
		id?: string;
		isDefault?: boolean | null;
		match?: RuleMatch;
		name?: string;
		priority?: number | null;
	}
	export interface UpdateRuleResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRuleResponseFormGroup() {
		return new FormGroup<UpdateRuleResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceResponse {
		arn?: string;
		authType?: AuthType;
		certificateArn?: string;
		customDomainName?: string;
		id?: string;
		name?: string;
	}
	export interface UpdateServiceResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceResponseFormGroup() {
		return new FormGroup<UpdateServiceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceNetworkResponse {
		arn?: string;
		authType?: AuthType;
		id?: string;
		name?: string;
	}
	export interface UpdateServiceNetworkResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceNetworkResponseFormGroup() {
		return new FormGroup<UpdateServiceNetworkResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceNetworkVpcAssociationResponse {
		arn?: string;
		createdBy?: string;
		id?: string;
		securityGroupIds?: Array<string>;
		status?: ServiceNetworkVpcAssociationStatus;
	}
	export interface UpdateServiceNetworkVpcAssociationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>,
	}
	export function CreateUpdateServiceNetworkVpcAssociationResponseFormGroup() {
		return new FormGroup<UpdateServiceNetworkVpcAssociationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkVpcAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateTargetGroupResponse {
		arn?: string;
		config?: TargetGroupConfig;
		id?: string;
		name?: string;
		status?: ServiceNetworkServiceAssociationStatus;
		type?: TargetGroupType;
	}
	export interface UpdateTargetGroupResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>,
		type: FormControl<TargetGroupType | null | undefined>,
	}
	export function CreateUpdateTargetGroupResponseFormGroup() {
		return new FormGroup<UpdateTargetGroupResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ServiceNetworkServiceAssociationStatus | null | undefined>(undefined),
			type: new FormControl<TargetGroupType | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateRuleRequest {

		/** Required */
		rules: Array<RuleUpdate>;
	}
	export interface BatchUpdateRuleRequestFormProperties {
	}
	export function CreateBatchUpdateRuleRequestFormGroup() {
		return new FormGroup<BatchUpdateRuleRequestFormProperties>({
		});

	}

	export interface CreateAccessLogSubscriptionRequest {
		clientToken?: string;

		/** Required */
		destinationArn: string;

		/** Required */
		resourceIdentifier: string;
		tags?: TagMap;
	}
	export interface CreateAccessLogSubscriptionRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		resourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessLogSubscriptionRequestFormGroup() {
		return new FormGroup<CreateAccessLogSubscriptionRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateListenerRequest {
		clientToken?: string;

		/** Required */
		defaultAction: RuleAction;

		/** Required */
		name: string;
		port?: number | null;

		/** Required */
		protocol: ListenerProtocol;
		tags?: TagMap;
	}
	export interface CreateListenerRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<ListenerProtocol | null | undefined>,
	}
	export function CreateCreateListenerRequestFormGroup() {
		return new FormGroup<CreateListenerRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRuleRequest {

		/** Required */
		action: RuleAction;
		clientToken?: string;

		/** Required */
		match: RuleMatch;

		/** Required */
		name: string;

		/** Required */
		priority: number;
		tags?: TagMap;
	}
	export interface CreateRuleRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceNetworkRequest {
		authType?: AuthType;
		clientToken?: string;

		/** Required */
		name: string;
		tags?: TagMap;
	}
	export interface CreateServiceNetworkRequestFormProperties {
		authType: FormControl<AuthType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceNetworkRequestFormGroup() {
		return new FormGroup<CreateServiceNetworkRequestFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceNetworkServiceAssociationRequest {
		clientToken?: string;

		/** Required */
		serviceIdentifier: string;

		/** Required */
		serviceNetworkIdentifier: string;
		tags?: TagMap;
	}
	export interface CreateServiceNetworkServiceAssociationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		serviceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		serviceNetworkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceNetworkServiceAssociationRequestFormGroup() {
		return new FormGroup<CreateServiceNetworkServiceAssociationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			serviceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceNetworkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceNetworkVpcAssociationRequest {
		clientToken?: string;
		securityGroupIds?: Array<string>;

		/** Required */
		serviceNetworkIdentifier: string;
		tags?: TagMap;

		/** Required */
		vpcIdentifier: string;
	}
	export interface CreateServiceNetworkVpcAssociationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		serviceNetworkIdentifier: FormControl<string | null | undefined>,

		/** Required */
		vpcIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceNetworkVpcAssociationRequestFormGroup() {
		return new FormGroup<CreateServiceNetworkVpcAssociationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			serviceNetworkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vpcIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceRequest {
		authType?: AuthType;
		certificateArn?: string;
		clientToken?: string;
		customDomainName?: string;

		/** Required */
		name: string;
		tags?: TagMap;
	}
	export interface CreateServiceRequestFormProperties {
		authType: FormControl<AuthType | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		customDomainName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			customDomainName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTargetGroupRequest {
		clientToken?: string;
		config?: TargetGroupConfig;

		/** Required */
		name: string;
		tags?: TagMap;

		/** Required */
		type: TargetGroupType;
	}
	export interface CreateTargetGroupRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<TargetGroupType | null | undefined>,
	}
	export function CreateCreateTargetGroupRequestFormGroup() {
		return new FormGroup<CreateTargetGroupRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TargetGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TargetGroupStatus { CREATE_IN_PROGRESS = 0, ACTIVE = 1, DELETE_IN_PROGRESS = 2, CREATE_FAILED = 3, DELETE_FAILED = 4 }

	export interface DeleteAccessLogSubscriptionRequest {
	}
	export interface DeleteAccessLogSubscriptionRequestFormProperties {
	}
	export function CreateDeleteAccessLogSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteAccessLogSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteAuthPolicyRequest {
	}
	export interface DeleteAuthPolicyRequestFormProperties {
	}
	export function CreateDeleteAuthPolicyRequestFormGroup() {
		return new FormGroup<DeleteAuthPolicyRequestFormProperties>({
		});

	}

	export interface DeleteListenerRequest {
	}
	export interface DeleteListenerRequestFormProperties {
	}
	export function CreateDeleteListenerRequestFormGroup() {
		return new FormGroup<DeleteListenerRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {
	}
	export interface DeleteResourcePolicyRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
		});

	}

	export interface DeleteRuleRequest {
	}
	export interface DeleteRuleRequestFormProperties {
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
		});

	}

	export interface DeleteServiceNetworkRequest {
	}
	export interface DeleteServiceNetworkRequestFormProperties {
	}
	export function CreateDeleteServiceNetworkRequestFormGroup() {
		return new FormGroup<DeleteServiceNetworkRequestFormProperties>({
		});

	}

	export interface DeleteServiceNetworkServiceAssociationRequest {
	}
	export interface DeleteServiceNetworkServiceAssociationRequestFormProperties {
	}
	export function CreateDeleteServiceNetworkServiceAssociationRequestFormGroup() {
		return new FormGroup<DeleteServiceNetworkServiceAssociationRequestFormProperties>({
		});

	}

	export interface DeleteServiceNetworkVpcAssociationRequest {
	}
	export interface DeleteServiceNetworkVpcAssociationRequestFormProperties {
	}
	export function CreateDeleteServiceNetworkVpcAssociationRequestFormGroup() {
		return new FormGroup<DeleteServiceNetworkVpcAssociationRequestFormProperties>({
		});

	}

	export interface DeleteServiceRequest {
	}
	export interface DeleteServiceRequestFormProperties {
	}
	export function CreateDeleteServiceRequestFormGroup() {
		return new FormGroup<DeleteServiceRequestFormProperties>({
		});

	}

	export interface DeleteTargetGroupRequest {
	}
	export interface DeleteTargetGroupRequestFormProperties {
	}
	export function CreateDeleteTargetGroupRequestFormGroup() {
		return new FormGroup<DeleteTargetGroupRequestFormProperties>({
		});

	}

	export interface DeregisterTargetsRequest {

		/** Required */
		targets: Array<Target>;
	}
	export interface DeregisterTargetsRequestFormProperties {
	}
	export function CreateDeregisterTargetsRequestFormGroup() {
		return new FormGroup<DeregisterTargetsRequestFormProperties>({
		});

	}

	export interface GetAccessLogSubscriptionRequest {
	}
	export interface GetAccessLogSubscriptionRequestFormProperties {
	}
	export function CreateGetAccessLogSubscriptionRequestFormGroup() {
		return new FormGroup<GetAccessLogSubscriptionRequestFormProperties>({
		});

	}

	export interface GetAuthPolicyRequest {
	}
	export interface GetAuthPolicyRequestFormProperties {
	}
	export function CreateGetAuthPolicyRequestFormGroup() {
		return new FormGroup<GetAuthPolicyRequestFormProperties>({
		});

	}

	export interface GetListenerRequest {
	}
	export interface GetListenerRequestFormProperties {
	}
	export function CreateGetListenerRequestFormGroup() {
		return new FormGroup<GetListenerRequestFormProperties>({
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
		});

	}

	export interface GetRuleRequest {
	}
	export interface GetRuleRequestFormProperties {
	}
	export function CreateGetRuleRequestFormGroup() {
		return new FormGroup<GetRuleRequestFormProperties>({
		});

	}

	export interface GetServiceNetworkRequest {
	}
	export interface GetServiceNetworkRequestFormProperties {
	}
	export function CreateGetServiceNetworkRequestFormGroup() {
		return new FormGroup<GetServiceNetworkRequestFormProperties>({
		});

	}

	export interface GetServiceNetworkServiceAssociationRequest {
	}
	export interface GetServiceNetworkServiceAssociationRequestFormProperties {
	}
	export function CreateGetServiceNetworkServiceAssociationRequestFormGroup() {
		return new FormGroup<GetServiceNetworkServiceAssociationRequestFormProperties>({
		});

	}

	export interface GetServiceNetworkVpcAssociationRequest {
	}
	export interface GetServiceNetworkVpcAssociationRequestFormProperties {
	}
	export function CreateGetServiceNetworkVpcAssociationRequestFormGroup() {
		return new FormGroup<GetServiceNetworkVpcAssociationRequestFormProperties>({
		});

	}

	export interface GetServiceRequest {
	}
	export interface GetServiceRequestFormProperties {
	}
	export function CreateGetServiceRequestFormGroup() {
		return new FormGroup<GetServiceRequestFormProperties>({
		});

	}

	export interface GetTargetGroupRequest {
	}
	export interface GetTargetGroupRequestFormProperties {
	}
	export function CreateGetTargetGroupRequestFormGroup() {
		return new FormGroup<GetTargetGroupRequestFormProperties>({
		});

	}

	export interface ListAccessLogSubscriptionsRequest {
	}
	export interface ListAccessLogSubscriptionsRequestFormProperties {
	}
	export function CreateListAccessLogSubscriptionsRequestFormGroup() {
		return new FormGroup<ListAccessLogSubscriptionsRequestFormProperties>({
		});

	}

	export interface ListListenersRequest {
	}
	export interface ListListenersRequestFormProperties {
	}
	export function CreateListListenersRequestFormGroup() {
		return new FormGroup<ListListenersRequestFormProperties>({
		});

	}

	export interface ListRulesRequest {
	}
	export interface ListRulesRequestFormProperties {
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
		});

	}

	export interface ListServiceNetworkServiceAssociationsRequest {
	}
	export interface ListServiceNetworkServiceAssociationsRequestFormProperties {
	}
	export function CreateListServiceNetworkServiceAssociationsRequestFormGroup() {
		return new FormGroup<ListServiceNetworkServiceAssociationsRequestFormProperties>({
		});

	}

	export interface ListServiceNetworkVpcAssociationsRequest {
	}
	export interface ListServiceNetworkVpcAssociationsRequestFormProperties {
	}
	export function CreateListServiceNetworkVpcAssociationsRequestFormGroup() {
		return new FormGroup<ListServiceNetworkVpcAssociationsRequestFormProperties>({
		});

	}

	export interface ListServiceNetworksRequest {
	}
	export interface ListServiceNetworksRequestFormProperties {
	}
	export function CreateListServiceNetworksRequestFormGroup() {
		return new FormGroup<ListServiceNetworksRequestFormProperties>({
		});

	}

	export interface ListServicesRequest {
	}
	export interface ListServicesRequestFormProperties {
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
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

	export interface ListTargetGroupsRequest {
	}
	export interface ListTargetGroupsRequestFormProperties {
	}
	export function CreateListTargetGroupsRequestFormGroup() {
		return new FormGroup<ListTargetGroupsRequestFormProperties>({
		});

	}

	export interface ListTargetsRequest {
		targets?: Array<Target>;
	}
	export interface ListTargetsRequestFormProperties {
	}
	export function CreateListTargetsRequestFormGroup() {
		return new FormGroup<ListTargetsRequestFormProperties>({
		});

	}

	export interface PutAuthPolicyRequest {

		/** Required */
		policy: string;
	}
	export interface PutAuthPolicyRequestFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutAuthPolicyRequestFormGroup() {
		return new FormGroup<PutAuthPolicyRequestFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		policy: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterTargetsRequest {

		/** Required */
		targets: Array<Target>;
	}
	export interface RegisterTargetsRequestFormProperties {
	}
	export function CreateRegisterTargetsRequestFormGroup() {
		return new FormGroup<RegisterTargetsRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
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

	export interface UpdateAccessLogSubscriptionRequest {

		/** Required */
		destinationArn: string;
	}
	export interface UpdateAccessLogSubscriptionRequestFormProperties {

		/** Required */
		destinationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessLogSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateAccessLogSubscriptionRequestFormProperties>({
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateListenerRequest {

		/** Required */
		defaultAction: RuleAction;
	}
	export interface UpdateListenerRequestFormProperties {
	}
	export function CreateUpdateListenerRequestFormGroup() {
		return new FormGroup<UpdateListenerRequestFormProperties>({
		});

	}

	export interface UpdateRuleRequest {
		action?: RuleAction;
		match?: RuleMatch;
		priority?: number | null;
	}
	export interface UpdateRuleRequestFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRuleRequestFormGroup() {
		return new FormGroup<UpdateRuleRequestFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceNetworkRequest {

		/** Required */
		authType: AuthType;
	}
	export interface UpdateServiceNetworkRequestFormProperties {

		/** Required */
		authType: FormControl<AuthType | null | undefined>,
	}
	export function CreateUpdateServiceNetworkRequestFormGroup() {
		return new FormGroup<UpdateServiceNetworkRequestFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceNetworkVpcAssociationRequest {

		/** Required */
		securityGroupIds: Array<string>;
	}
	export interface UpdateServiceNetworkVpcAssociationRequestFormProperties {
	}
	export function CreateUpdateServiceNetworkVpcAssociationRequestFormGroup() {
		return new FormGroup<UpdateServiceNetworkVpcAssociationRequestFormProperties>({
		});

	}

	export interface UpdateServiceRequest {
		authType?: AuthType;
		certificateArn?: string;
	}
	export interface UpdateServiceRequestFormProperties {
		authType: FormControl<AuthType | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceRequestFormGroup() {
		return new FormGroup<UpdateServiceRequestFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTargetGroupRequest {

		/** Required */
		healthCheck: HealthCheckConfig;
	}
	export interface UpdateTargetGroupRequestFormProperties {
	}
	export function CreateUpdateTargetGroupRequestFormGroup() {
		return new FormGroup<UpdateTargetGroupRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority.
		 * Patch services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {BatchUpdateRuleResponse} Success
		 */
		BatchUpdateRule(listenerIdentifier: string, serviceIdentifier: string, requestBody: BatchUpdateRulePatchBody): Observable<BatchUpdateRuleResponse> {
			return this.http.patch<BatchUpdateRuleResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Post services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {void} 
		 */
		CreateRule(listenerIdentifier: string, serviceIdentifier: string, requestBody: CreateRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the rules for the listener.
		 * Get services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {ListRulesResponse} Success
		 */
		ListRules(listenerIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined, serviceIdentifier: string): Observable<ListRulesResponse> {
			return this.http.get<ListRulesResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Post accesslogsubscriptions
		 * @return {void} 
		 */
		CreateAccessLogSubscription(requestBody: CreateAccessLogSubscriptionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accesslogsubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Post services/{serviceIdentifier}/listeners
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {void} 
		 */
		CreateListener(serviceIdentifier: string, requestBody: CreateListenerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the listeners for the specified service.
		 * Get services/{serviceIdentifier}/listeners
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {ListListenersResponse} Success
		 */
		ListListeners(maxResults: number | null | undefined, nextToken: string | null | undefined, serviceIdentifier: string): Observable<ListListenersResponse> {
			return this.http.get<ListListenersResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
		 * Post services
		 * @return {void} 
		 */
		CreateService(requestBody: CreateServicePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the services owned by the caller account or shared with the caller account.
		 * Get services
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @return {ListServicesResponse} Success
		 */
		ListServices(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'services?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
		 * Post servicenetworks
		 * @return {void} 
		 */
		CreateServiceNetwork(requestBody: CreateServiceNetworkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'servicenetworks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the service networks owned by the caller account or shared with the caller account. Also includes the account ID in the ARN to show which account owns the service network.
		 * Get servicenetworks
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @return {ListServiceNetworksResponse} Success
		 */
		ListServiceNetworks(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListServiceNetworksResponse> {
			return this.http.get<ListServiceNetworksResponse>(this.baseUri + 'servicenetworks?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Associates a service with a service network.</p> <p>You can't use this operation if the service and service network are already associated or if there is a disassociation or deletion in progress. If the association fails, you can retry the operation by deleting the association and recreating it.</p> <p>You cannot associate a service and service network that are shared with a caller. The caller must own either the service or the service network.</p> <p>As a result of this operation, the association is created in the service network account and the association owner account.</p>
		 * Post servicenetworkserviceassociations
		 * @return {CreateServiceNetworkServiceAssociationResponse} Success
		 */
		CreateServiceNetworkServiceAssociation(requestBody: CreateServiceNetworkServiceAssociationPostBody): Observable<CreateServiceNetworkServiceAssociationResponse> {
			return this.http.post<CreateServiceNetworkServiceAssociationResponse>(this.baseUri + 'servicenetworkserviceassociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the associations between the service network and the service. You can filter the list either by service or service network. You must provide either the service network identifier or the service identifier.</p> <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a service network is associated with a VPC or when a service is associated with a service network. If the association is for a resource that is shared with another account, the association will include the local account ID as the prefix in the ARN for each account the resource is shared with.</p>
		 * Get servicenetworkserviceassociations
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @param {string} serviceNetworkIdentifier The ID or Amazon Resource Name (ARN) of the service network.
		 * @return {ListServiceNetworkServiceAssociationsResponse} Success
		 */
		ListServiceNetworkServiceAssociations(maxResults: number | null | undefined, nextToken: string | null | undefined, serviceIdentifier: string | null | undefined, serviceNetworkIdentifier: string | null | undefined): Observable<ListServiceNetworkServiceAssociationsResponse> {
			return this.http.get<ListServiceNetworkServiceAssociationsResponse>(this.baseUri + 'servicenetworkserviceassociations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&serviceIdentifier=' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '&serviceNetworkIdentifier=' + (serviceNetworkIdentifier == null ? '' : encodeURIComponent(serviceNetworkIdentifier)), {});
		}

		/**
		 * <p>Associates a VPC with a service network. When you associate a VPC with the service network, it enables all the resources within that VPC to be clients and communicate with other services in the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p> <p>You can't use this operation if there is a disassociation in progress. If the association fails, retry by deleting the association and recreating it.</p> <p>As a result of this operation, the association gets created in the service network account and the VPC owner account.</p> <p>If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.</p>
		 * Post servicenetworkvpcassociations
		 * @return {CreateServiceNetworkVpcAssociationResponse} Success
		 */
		CreateServiceNetworkVpcAssociation(requestBody: CreateServiceNetworkVpcAssociationPostBody): Observable<CreateServiceNetworkVpcAssociationResponse> {
			return this.http.post<CreateServiceNetworkVpcAssociationResponse>(this.baseUri + 'servicenetworkvpcassociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the service network and VPC associations. You can filter the list either by VPC or service network. You must provide either the service network identifier or the VPC identifier.
		 * Get servicenetworkvpcassociations
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} serviceNetworkIdentifier The ID or Amazon Resource Name (ARN) of the service network.
		 * @param {string} vpcIdentifier The ID or Amazon Resource Name (ARN) of the VPC.
		 * @return {ListServiceNetworkVpcAssociationsResponse} Success
		 */
		ListServiceNetworkVpcAssociations(maxResults: number | null | undefined, nextToken: string | null | undefined, serviceNetworkIdentifier: string | null | undefined, vpcIdentifier: string | null | undefined): Observable<ListServiceNetworkVpcAssociationsResponse> {
			return this.http.get<ListServiceNetworkVpcAssociationsResponse>(this.baseUri + 'servicenetworkvpcassociations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&serviceNetworkIdentifier=' + (serviceNetworkIdentifier == null ? '' : encodeURIComponent(serviceNetworkIdentifier)) + '&vpcIdentifier=' + (vpcIdentifier == null ? '' : encodeURIComponent(vpcIdentifier)), {});
		}

		/**
		 * <p>Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
		 * Post targetgroups
		 * @return {void} 
		 */
		CreateTargetGroup(requestBody: CreateTargetGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targetgroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists your target groups. You can narrow your search by using the filters below in your request.
		 * Get targetgroups
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {TargetGroupType} targetGroupType The target group type.
		 * @param {string} vpcIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {ListTargetGroupsResponse} Success
		 */
		ListTargetGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, targetGroupType: TargetGroupType | null | undefined, vpcIdentifier: string | null | undefined): Observable<ListTargetGroupsResponse> {
			return this.http.get<ListTargetGroupsResponse>(this.baseUri + 'targetgroups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&targetGroupType=' + targetGroupType + '&vpcIdentifier=' + (vpcIdentifier == null ? '' : encodeURIComponent(vpcIdentifier)), {});
		}

		/**
		 * Deletes the specified access log subscription.
		 * Delete accesslogsubscriptions/{accessLogSubscriptionIdentifier}
		 * @param {string} accessLogSubscriptionIdentifier The ID or Amazon Resource Name (ARN) of the access log subscription.
		 * @return {void} 
		 */
		DeleteAccessLogSubscription(accessLogSubscriptionIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accesslogsubscriptions/' + (accessLogSubscriptionIdentifier == null ? '' : encodeURIComponent(accessLogSubscriptionIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified access log subscription.
		 * Get accesslogsubscriptions/{accessLogSubscriptionIdentifier}
		 * @param {string} accessLogSubscriptionIdentifier The ID or Amazon Resource Name (ARN) of the access log subscription.
		 * @return {GetAccessLogSubscriptionResponse} Success
		 */
		GetAccessLogSubscription(accessLogSubscriptionIdentifier: string): Observable<GetAccessLogSubscriptionResponse> {
			return this.http.get<GetAccessLogSubscriptionResponse>(this.baseUri + 'accesslogsubscriptions/' + (accessLogSubscriptionIdentifier == null ? '' : encodeURIComponent(accessLogSubscriptionIdentifier)), {});
		}

		/**
		 * Updates the specified access log subscription.
		 * Patch accesslogsubscriptions/{accessLogSubscriptionIdentifier}
		 * @param {string} accessLogSubscriptionIdentifier The ID or Amazon Resource Name (ARN) of the access log subscription.
		 * @return {UpdateAccessLogSubscriptionResponse} Success
		 */
		UpdateAccessLogSubscription(accessLogSubscriptionIdentifier: string, requestBody: UpdateAccessLogSubscriptionPatchBody): Observable<UpdateAccessLogSubscriptionResponse> {
			return this.http.patch<UpdateAccessLogSubscriptionResponse>(this.baseUri + 'accesslogsubscriptions/' + (accessLogSubscriptionIdentifier == null ? '' : encodeURIComponent(accessLogSubscriptionIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth policy is deleted, all requests will be denied by default. If you are trying to remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is enabled on the resource, but no auth policy is set, all requests will be denied.
		 * Delete authpolicy/{resourceIdentifier}
		 * @param {string} resourceIdentifier The ID or Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		DeleteAuthPolicy(resourceIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'authpolicy/' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the auth policy for the specified service or service network.
		 * Get authpolicy/{resourceIdentifier}
		 * @param {string} resourceIdentifier The ID or Amazon Resource Name (ARN) of the service network or service.
		 * @return {GetAuthPolicyResponse} Success
		 */
		GetAuthPolicy(resourceIdentifier: string): Observable<GetAuthPolicyResponse> {
			return this.http.get<GetAuthPolicyResponse>(this.baseUri + 'authpolicy/' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)), {});
		}

		/**
		 * Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
		 * Put authpolicy/{resourceIdentifier}
		 * @param {string} resourceIdentifier The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
		 * @return {PutAuthPolicyResponse} Success
		 */
		PutAuthPolicy(resourceIdentifier: string, requestBody: PutAuthPolicyPutBody): Observable<PutAuthPolicyResponse> {
			return this.http.put<PutAuthPolicyResponse>(this.baseUri + 'authpolicy/' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified listener.
		 * Delete services/{serviceIdentifier}/listeners/{listenerIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {void} 
		 */
		DeleteListener(listenerIdentifier: string, serviceIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified listener for the specified service.
		 * Get services/{serviceIdentifier}/listeners/{listenerIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {GetListenerResponse} Success
		 */
		GetListener(listenerIdentifier: string, serviceIdentifier: string): Observable<GetListenerResponse> {
			return this.http.get<GetListenerResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)), {});
		}

		/**
		 * Updates the specified listener for the specified service.
		 * Patch services/{serviceIdentifier}/listeners/{listenerIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {UpdateListenerResponse} Success
		 */
		UpdateListener(listenerIdentifier: string, serviceIdentifier: string, requestBody: UpdateListenerPatchBody): Observable<UpdateListenerResponse> {
			return this.http.patch<UpdateListenerResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified resource policy.
		 * Delete resourcepolicy/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		DeleteResourcePolicy(resourceArn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'resourcepolicy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the resource policy. The resource policy is an IAM policy created on behalf of the resource owner when they share a resource.
		 * Get resourcepolicy/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the service network or service.
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(resourceArn: string): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'resourcepolicy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Attaches a resource-based permission policy to a service or service network. The policy must contain the same actions and condition statements as the Amazon Web Services Resource Access Manager permission for sharing services and service networks.
		 * Put resourcepolicy/{resourceArn}
		 * @param {string} resourceArn The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(resourceArn: string, requestBody: PutResourcePolicyPutBody): Observable<PutResourcePolicyResponse> {
			return this.http.put<PutResourcePolicyResponse>(this.baseUri + 'resourcepolicy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. You can delete additional listener rules, but you cannot delete the default rule.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
		 * Delete services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} ruleIdentifier The ID or Amazon Resource Name (ARN) of the rule.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {void} 
		 */
		DeleteRule(listenerIdentifier: string, ruleIdentifier: string, serviceIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules/' + (ruleIdentifier == null ? '' : encodeURIComponent(ruleIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about listener rules. You can also retrieve information about the default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Get services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} ruleIdentifier The ID or Amazon Resource Name (ARN) of the listener rule.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {GetRuleResponse} Success
		 */
		GetRule(listenerIdentifier: string, ruleIdentifier: string, serviceIdentifier: string): Observable<GetRuleResponse> {
			return this.http.get<GetRuleResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules/' + (ruleIdentifier == null ? '' : encodeURIComponent(ruleIdentifier)), {});
		}

		/**
		 * Updates a rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use <code>UpdateListener</code>.
		 * Patch services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}
		 * @param {string} listenerIdentifier The ID or Amazon Resource Name (ARN) of the listener.
		 * @param {string} ruleIdentifier The ID or Amazon Resource Name (ARN) of the rule.
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {UpdateRuleResponse} Success
		 */
		UpdateRule(listenerIdentifier: string, ruleIdentifier: string, serviceIdentifier: string, requestBody: UpdateRulePatchBody): Observable<UpdateRuleResponse> {
			return this.http.patch<UpdateRuleResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)) + '/listeners/' + (listenerIdentifier == null ? '' : encodeURIComponent(listenerIdentifier)) + '/rules/' + (ruleIdentifier == null ? '' : encodeURIComponent(ruleIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a service. A service can't be deleted if it's associated with a service network. If you delete a service, all resources related to the service, such as the resource policy, auth policy, listeners, listener rules, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Delete services/{serviceIdentifier}
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(serviceIdentifier: string): Observable<DeleteServiceResponse> {
			return this.http.delete<DeleteServiceResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)), {});
		}

		/**
		 * Retrieves information about the specified service.
		 * Get services/{serviceIdentifier}
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {GetServiceResponse} Success
		 */
		GetService(serviceIdentifier: string): Observable<GetServiceResponse> {
			return this.http.get<GetServiceResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)), {});
		}

		/**
		 * Updates the specified service.
		 * Patch services/{serviceIdentifier}
		 * @param {string} serviceIdentifier The ID or Amazon Resource Name (ARN) of the service.
		 * @return {UpdateServiceResponse} Success
		 */
		UpdateService(serviceIdentifier: string, requestBody: UpdateServicePatchBody): Observable<UpdateServiceResponse> {
			return this.http.patch<UpdateServiceResponse>(this.baseUri + 'services/' + (serviceIdentifier == null ? '' : encodeURIComponent(serviceIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service network</a> in the <i>Amazon VPC Lattice User Guide</i>.
		 * Delete servicenetworks/{serviceNetworkIdentifier}
		 * @param {string} serviceNetworkIdentifier The Amazon Resource Name (ARN) or ID of the service network.
		 * @return {void} 
		 */
		DeleteServiceNetwork(serviceNetworkIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'servicenetworks/' + (serviceNetworkIdentifier == null ? '' : encodeURIComponent(serviceNetworkIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified service network.
		 * Get servicenetworks/{serviceNetworkIdentifier}
		 * @param {string} serviceNetworkIdentifier The ID or Amazon Resource Name (ARN) of the service network.
		 * @return {GetServiceNetworkResponse} Success
		 */
		GetServiceNetwork(serviceNetworkIdentifier: string): Observable<GetServiceNetworkResponse> {
			return this.http.get<GetServiceNetworkResponse>(this.baseUri + 'servicenetworks/' + (serviceNetworkIdentifier == null ? '' : encodeURIComponent(serviceNetworkIdentifier)), {});
		}

		/**
		 * Updates the specified service network.
		 * Patch servicenetworks/{serviceNetworkIdentifier}
		 * @param {string} serviceNetworkIdentifier The ID or Amazon Resource Name (ARN) of the service network.
		 * @return {UpdateServiceNetworkResponse} Success
		 */
		UpdateServiceNetwork(serviceNetworkIdentifier: string, requestBody: UpdateServiceNetworkPatchBody): Observable<UpdateServiceNetworkResponse> {
			return this.http.patch<UpdateServiceNetworkResponse>(this.baseUri + 'servicenetworks/' + (serviceNetworkIdentifier == null ? '' : encodeURIComponent(serviceNetworkIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the association between a specified service and the specific service network. This request will fail if an association is still in progress.
		 * Delete servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}
		 * @param {string} serviceNetworkServiceAssociationIdentifier The ID or Amazon Resource Name (ARN) of the association.
		 * @return {DeleteServiceNetworkServiceAssociationResponse} Success
		 */
		DeleteServiceNetworkServiceAssociation(serviceNetworkServiceAssociationIdentifier: string): Observable<DeleteServiceNetworkServiceAssociationResponse> {
			return this.http.delete<DeleteServiceNetworkServiceAssociationResponse>(this.baseUri + 'servicenetworkserviceassociations/' + (serviceNetworkServiceAssociationIdentifier == null ? '' : encodeURIComponent(serviceNetworkServiceAssociationIdentifier)), {});
		}

		/**
		 * Retrieves information about the specified association between a service network and a service.
		 * Get servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}
		 * @param {string} serviceNetworkServiceAssociationIdentifier The ID or Amazon Resource Name (ARN) of the association.
		 * @return {GetServiceNetworkServiceAssociationResponse} Success
		 */
		GetServiceNetworkServiceAssociation(serviceNetworkServiceAssociationIdentifier: string): Observable<GetServiceNetworkServiceAssociationResponse> {
			return this.http.get<GetServiceNetworkServiceAssociationResponse>(this.baseUri + 'servicenetworkserviceassociations/' + (serviceNetworkServiceAssociationIdentifier == null ? '' : encodeURIComponent(serviceNetworkServiceAssociationIdentifier)), {});
		}

		/**
		 * Disassociates the VPC from the service network. You can't disassociate the VPC if there is a create or update association in progress.
		 * Delete servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}
		 * @param {string} serviceNetworkVpcAssociationIdentifier The ID or Amazon Resource Name (ARN) of the association.
		 * @return {DeleteServiceNetworkVpcAssociationResponse} Success
		 */
		DeleteServiceNetworkVpcAssociation(serviceNetworkVpcAssociationIdentifier: string): Observable<DeleteServiceNetworkVpcAssociationResponse> {
			return this.http.delete<DeleteServiceNetworkVpcAssociationResponse>(this.baseUri + 'servicenetworkvpcassociations/' + (serviceNetworkVpcAssociationIdentifier == null ? '' : encodeURIComponent(serviceNetworkVpcAssociationIdentifier)), {});
		}

		/**
		 * Retrieves information about the association between a service network and a VPC.
		 * Get servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}
		 * @param {string} serviceNetworkVpcAssociationIdentifier The ID or Amazon Resource Name (ARN) of the association.
		 * @return {GetServiceNetworkVpcAssociationResponse} Success
		 */
		GetServiceNetworkVpcAssociation(serviceNetworkVpcAssociationIdentifier: string): Observable<GetServiceNetworkVpcAssociationResponse> {
			return this.http.get<GetServiceNetworkVpcAssociationResponse>(this.baseUri + 'servicenetworkvpcassociations/' + (serviceNetworkVpcAssociationIdentifier == null ? '' : encodeURIComponent(serviceNetworkVpcAssociationIdentifier)), {});
		}

		/**
		 * Updates the service network and VPC association. If you add a security group to the service network and VPC association, the association must continue to always have at least one security group. You can add or edit security groups at any time. However, to remove all security groups, you must first delete the association and recreate it without security groups.
		 * Patch servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}
		 * @param {string} serviceNetworkVpcAssociationIdentifier The ID or Amazon Resource Name (ARN) of the association.
		 * @return {UpdateServiceNetworkVpcAssociationResponse} Success
		 */
		UpdateServiceNetworkVpcAssociation(serviceNetworkVpcAssociationIdentifier: string, requestBody: UpdateServiceNetworkVpcAssociationPatchBody): Observable<UpdateServiceNetworkVpcAssociationResponse> {
			return this.http.patch<UpdateServiceNetworkVpcAssociationResponse>(this.baseUri + 'servicenetworkvpcassociations/' + (serviceNetworkVpcAssociationIdentifier == null ? '' : encodeURIComponent(serviceNetworkVpcAssociationIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
		 * Delete targetgroups/{targetGroupIdentifier}
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {DeleteTargetGroupResponse} Success
		 */
		DeleteTargetGroup(targetGroupIdentifier: string): Observable<DeleteTargetGroupResponse> {
			return this.http.delete<DeleteTargetGroupResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)), {});
		}

		/**
		 * Retrieves information about the specified target group.
		 * Get targetgroups/{targetGroupIdentifier}
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {GetTargetGroupResponse} Success
		 */
		GetTargetGroup(targetGroupIdentifier: string): Observable<GetTargetGroupResponse> {
			return this.http.get<GetTargetGroupResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)), {});
		}

		/**
		 * Updates the specified target group.
		 * Patch targetgroups/{targetGroupIdentifier}
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {UpdateTargetGroupResponse} Success
		 */
		UpdateTargetGroup(targetGroupIdentifier: string, requestBody: UpdateTargetGroupPatchBody): Observable<UpdateTargetGroupResponse> {
			return this.http.patch<UpdateTargetGroupResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters the specified targets from the specified target group.
		 * Post targetgroups/{targetGroupIdentifier}/deregistertargets
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {DeregisterTargetsResponse} Success
		 */
		DeregisterTargets(targetGroupIdentifier: string, requestBody: DeregisterTargetsPostBody): Observable<DeregisterTargetsResponse> {
			return this.http.post<DeregisterTargetsResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)) + '/deregistertargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all access log subscriptions for the specified service network or service.
		 * Get accesslogsubscriptions#resourceIdentifier
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} resourceIdentifier The ID or Amazon Resource Name (ARN) of the service network or service.
		 * @return {ListAccessLogSubscriptionsResponse} Success
		 */
		ListAccessLogSubscriptions(maxResults: number | null | undefined, nextToken: string | null | undefined, resourceIdentifier: string): Observable<ListAccessLogSubscriptionsResponse> {
			return this.http.get<ListAccessLogSubscriptionsResponse>(this.baseUri + 'accesslogsubscriptions#resourceIdentifier?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceIdentifier=' + (resourceIdentifier == null ? '' : encodeURIComponent(resourceIdentifier)), {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target.
		 * Post targetgroups/{targetGroupIdentifier}/listtargets
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A pagination token for the next page of results.
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {ListTargetsResponse} Success
		 */
		ListTargets(maxResults: number | null | undefined, nextToken: string | null | undefined, targetGroupIdentifier: string, requestBody: ListTargetsPostBody): Observable<ListTargetsResponse> {
			return this.http.post<ListTargetsResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)) + '/listtargets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.
		 * Post targetgroups/{targetGroupIdentifier}/registertargets
		 * @param {string} targetGroupIdentifier The ID or Amazon Resource Name (ARN) of the target group.
		 * @return {RegisterTargetsResponse} Success
		 */
		RegisterTargets(targetGroupIdentifier: string, requestBody: RegisterTargetsPostBody): Observable<RegisterTargetsResponse> {
			return this.http.post<RegisterTargetsResponse>(this.baseUri + 'targetgroups/' + (targetGroupIdentifier == null ? '' : encodeURIComponent(targetGroupIdentifier)) + '/registertargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys of the tags to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchUpdateRulePatchBody {

		/**
		 * The rules for the specified listener.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		rules: Array<RuleUpdate>;
	}
	export interface BatchUpdateRulePatchBodyFormProperties {
	}
	export function CreateBatchUpdateRulePatchBodyFormGroup() {
		return new FormGroup<BatchUpdateRulePatchBodyFormProperties>({
		});

	}

	export interface CreateRulePostBody {

		/**
		 * Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed.
		 * Required
		 */
		action: CreateRulePostBodyAction;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Describes a rule match.
		 * Required
		 */
		match: CreateRulePostBodyMatch;

		/**
		 * The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: string;

		/**
		 * The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		priority: number;

		/** The tags for the rule. */
		tags?: {[id: string]: string };
	}
	export interface CreateRulePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		priority: FormControl<number | null | undefined>,

		/** The tags for the rule. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRulePostBodyFormGroup() {
		return new FormGroup<CreateRulePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!rule-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$')]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRulePostBodyAction {
		fixedResponse?: FixedResponseAction;
		forward?: ForwardAction;
	}
	export interface CreateRulePostBodyActionFormProperties {
	}
	export function CreateCreateRulePostBodyActionFormGroup() {
		return new FormGroup<CreateRulePostBodyActionFormProperties>({
		});

	}

	export interface CreateRulePostBodyMatch {
		httpMatch?: HttpMatch;
	}
	export interface CreateRulePostBodyMatchFormProperties {
	}
	export function CreateCreateRulePostBodyMatchFormGroup() {
		return new FormGroup<CreateRulePostBodyMatchFormProperties>({
		});

	}

	export interface CreateAccessLogSubscriptionPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the destination. The supported destination types are CloudWatch Log groups, Kinesis Data Firehose delivery streams, and Amazon S3 buckets.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		destinationArn: string;

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network or service.
		 * Required
		 * Max length: 200
		 * Min length: 17
		 */
		resourceIdentifier: string;

		/** The tags for the access log subscription. */
		tags?: {[id: string]: string };
	}
	export interface CreateAccessLogSubscriptionPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the destination. The supported destination types are CloudWatch Log groups, Kinesis Data Firehose delivery streams, and Amazon S3 buckets.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		destinationArn: FormControl<string | null | undefined>,

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network or service.
		 * Required
		 * Max length: 200
		 * Min length: 17
		 */
		resourceIdentifier: FormControl<string | null | undefined>,

		/** The tags for the access log subscription. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAccessLogSubscriptionPostBodyFormGroup() {
		return new FormGroup<CreateAccessLogSubscriptionPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$')]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(17), Validators.maxLength(200), Validators.pattern('^((((sn)|(svc))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(service/svc))-[0-9a-z]{17}))$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateListenerPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed.
		 * Required
		 */
		defaultAction: CreateListenerPostBodyDefaultAction;

		/**
		 * The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: string;

		/**
		 * The listener port. You can specify a value from <code>1</code> to <code>65535</code>. For HTTP, the default is <code>80</code>. For HTTPS, the default is <code>443</code>.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port?: number | null;

		/**
		 * The listener protocol HTTP or HTTPS.
		 * Required
		 */
		protocol: ListenerProtocol;

		/** The tags for the listener. */
		tags?: {[id: string]: string };
	}
	export interface CreateListenerPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The listener port. You can specify a value from <code>1</code> to <code>65535</code>. For HTTP, the default is <code>80</code>. For HTTPS, the default is <code>443</code>.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The listener protocol HTTP or HTTPS.
		 * Required
		 */
		protocol: FormControl<ListenerProtocol | null | undefined>,

		/** The tags for the listener. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateListenerPostBodyFormGroup() {
		return new FormGroup<CreateListenerPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!listener-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$')]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateListenerPostBodyDefaultAction {
		fixedResponse?: FixedResponseAction;
		forward?: ForwardAction;
	}
	export interface CreateListenerPostBodyDefaultActionFormProperties {
	}
	export function CreateCreateListenerPostBodyDefaultActionFormGroup() {
		return new FormGroup<CreateListenerPostBodyDefaultActionFormProperties>({
		});

	}

	export interface CreateServicePostBody {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType?: AuthType | null;

		/**
		 * The Amazon Resource Name (ARN) of the certificate.
		 * Max length: 2048
		 * Min length: 0
		 */
		certificateArn?: string | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The custom domain name of the service.
		 * Max length: 255
		 * Min length: 3
		 */
		customDomainName?: string | null;

		/**
		 * The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 40
		 * Min length: 3
		 */
		name: string;

		/** The tags for the service. */
		tags?: {[id: string]: string };
	}
	export interface CreateServicePostBodyFormProperties {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType: FormControl<AuthType | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the certificate.
		 * Max length: 2048
		 * Min length: 0
		 */
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The custom domain name of the service.
		 * Max length: 255
		 * Min length: 3
		 */
		customDomainName: FormControl<string | null | undefined>,

		/**
		 * The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 40
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/** The tags for the service. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateServicePostBodyFormGroup() {
		return new FormGroup<CreateServicePostBodyFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('^(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:certificate/[0-9a-z-]+)?$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			customDomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern('^(?!svc-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateServiceNetworkPostBody {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType?: AuthType | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The name of the service network. The name must be unique to the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: string;

		/** The tags for the service network. */
		tags?: {[id: string]: string };
	}
	export interface CreateServiceNetworkPostBodyFormProperties {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType: FormControl<AuthType | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name of the service network. The name must be unique to the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/** The tags for the service network. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateServiceNetworkPostBodyFormGroup() {
		return new FormGroup<CreateServiceNetworkPostBodyFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!servicenetwork-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateServiceNetworkServiceAssociationPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The ID or Amazon Resource Name (ARN) of the service.
		 * Required
		 * Max length: 2048
		 * Min length: 17
		 */
		serviceIdentifier: string;

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts.
		 * Required
		 * Max length: 2048
		 * Min length: 3
		 */
		serviceNetworkIdentifier: string;

		/** The tags for the association. */
		tags?: {[id: string]: string };
	}
	export interface CreateServiceNetworkServiceAssociationPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The ID or Amazon Resource Name (ARN) of the service.
		 * Required
		 * Max length: 2048
		 * Min length: 17
		 */
		serviceIdentifier: FormControl<string | null | undefined>,

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts.
		 * Required
		 * Max length: 2048
		 * Min length: 3
		 */
		serviceNetworkIdentifier: FormControl<string | null | undefined>,

		/** The tags for the association. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateServiceNetworkServiceAssociationPostBodyFormGroup() {
		return new FormGroup<CreateServiceNetworkServiceAssociationPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			serviceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(17), Validators.maxLength(2048), Validators.pattern('^((svc-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}))$')]),
			serviceNetworkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(2048), Validators.pattern('^((sn-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}))$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateServiceNetworkVpcAssociationPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The IDs of the security groups. Security groups aren't added by default. You can add a security group to apply network level controls to control which resources in a VPC are allowed to access the service network and its services. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Control traffic to resources using security groups</a> in the <i>Amazon VPC User Guide</i>.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		securityGroupIds?: Array<string>;

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN when the resources specified in the operation are in different accounts.
		 * Required
		 * Max length: 2048
		 * Min length: 3
		 */
		serviceNetworkIdentifier: string;

		/** The tags for the association. */
		tags?: {[id: string]: string };

		/**
		 * The ID of the VPC.
		 * Required
		 * Max length: 50
		 * Min length: 5
		 */
		vpcIdentifier: string;
	}
	export interface CreateServiceNetworkVpcAssociationPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The ID or Amazon Resource Name (ARN) of the service network. You must use the ARN when the resources specified in the operation are in different accounts.
		 * Required
		 * Max length: 2048
		 * Min length: 3
		 */
		serviceNetworkIdentifier: FormControl<string | null | undefined>,

		/** The tags for the association. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The ID of the VPC.
		 * Required
		 * Max length: 50
		 * Min length: 5
		 */
		vpcIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceNetworkVpcAssociationPostBodyFormGroup() {
		return new FormGroup<CreateServiceNetworkVpcAssociationPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			serviceNetworkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(2048), Validators.pattern('^((sn-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}))$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vpcIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$')]),
		});

	}

	export interface CreateTargetGroupPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Describes the configuration of a target group. Lambda functions don't support target group configuration. */
		config?: CreateTargetGroupPostBodyConfig;

		/**
		 * The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		name: string;

		/** The tags for the target group. */
		tags?: {[id: string]: string };

		/**
		 * The type of target group.
		 * Required
		 */
		type: TargetGroupType;
	}
	export interface CreateTargetGroupPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry succeeds without performing any actions. If the parameters aren't identical, the retry fails.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/** The tags for the target group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of target group.
		 * Required
		 */
		type: FormControl<TargetGroupType | null | undefined>,
	}
	export function CreateCreateTargetGroupPostBodyFormGroup() {
		return new FormGroup<CreateTargetGroupPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^(?!tg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<TargetGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTargetGroupPostBodyConfig {
		healthCheck?: HealthCheckConfig;
		ipAddressType?: IpAddressType;
		port?: number | null;
		protocol?: ListenerProtocol;
		protocolVersion?: TargetGroupProtocolVersion;
		vpcIdentifier?: string;
	}
	export interface CreateTargetGroupPostBodyConfigFormProperties {
		ipAddressType: FormControl<IpAddressType | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		protocolVersion: FormControl<TargetGroupProtocolVersion | null | undefined>,
		vpcIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateTargetGroupPostBodyConfigFormGroup() {
		return new FormGroup<CreateTargetGroupPostBodyConfigFormProperties>({
			ipAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			protocolVersion: new FormControl<TargetGroupProtocolVersion | null | undefined>(undefined),
			vpcIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAccessLogSubscriptionPatchBody {

		/**
		 * The Amazon Resource Name (ARN) of the access log destination.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		destinationArn: string;
	}
	export interface UpdateAccessLogSubscriptionPatchBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the access log destination.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		destinationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessLogSubscriptionPatchBodyFormGroup() {
		return new FormGroup<UpdateAccessLogSubscriptionPatchBodyFormProperties>({
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$')]),
		});

	}

	export interface PutAuthPolicyPutBody {

		/**
		 * The auth policy. The policy string in JSON must not contain newlines or blank lines.
		 * Required
		 * Max length: 10000
		 * Min length: 0
		 */
		policy: string;
	}
	export interface PutAuthPolicyPutBodyFormProperties {

		/**
		 * The auth policy. The policy string in JSON must not contain newlines or blank lines.
		 * Required
		 * Max length: 10000
		 * Min length: 0
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutAuthPolicyPutBodyFormGroup() {
		return new FormGroup<PutAuthPolicyPutBodyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10000), Validators.pattern('^.*\S.*$')]),
		});

	}

	export interface UpdateListenerPatchBody {

		/**
		 * Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed.
		 * Required
		 */
		defaultAction: UpdateListenerPatchBodyDefaultAction;
	}
	export interface UpdateListenerPatchBodyFormProperties {
	}
	export function CreateUpdateListenerPatchBodyFormGroup() {
		return new FormGroup<UpdateListenerPatchBodyFormProperties>({
		});

	}

	export interface UpdateListenerPatchBodyDefaultAction {
		fixedResponse?: FixedResponseAction;
		forward?: ForwardAction;
	}
	export interface UpdateListenerPatchBodyDefaultActionFormProperties {
	}
	export function CreateUpdateListenerPatchBodyDefaultActionFormGroup() {
		return new FormGroup<UpdateListenerPatchBodyDefaultActionFormProperties>({
		});

	}

	export interface PutResourcePolicyPutBody {

		/**
		 * An IAM policy. The policy string in JSON must not contain newlines or blank lines.
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		policy: string;
	}
	export interface PutResourcePolicyPutBodyFormProperties {

		/**
		 * An IAM policy. The policy string in JSON must not contain newlines or blank lines.
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPutBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPutBodyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10000), Validators.pattern('^.*\S.*$')]),
		});

	}

	export interface UpdateRulePatchBody {

		/** Describes the action for a rule. Each rule must include exactly one of the following types of actions: <code>forward </code>or <code>fixed-response</code>, and it must be the last action to be performed. */
		action?: UpdateRulePatchBodyAction;

		/** Describes a rule match. */
		match?: UpdateRulePatchBodyMatch;

		/**
		 * The rule priority. A listener can't have multiple rules with the same priority.
		 * Minimum: 1
		 * Maximum: 100
		 */
		priority?: number | null;
	}
	export interface UpdateRulePatchBodyFormProperties {

		/**
		 * The rule priority. A listener can't have multiple rules with the same priority.
		 * Minimum: 1
		 * Maximum: 100
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRulePatchBodyFormGroup() {
		return new FormGroup<UpdateRulePatchBodyFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface UpdateRulePatchBodyAction {
		fixedResponse?: FixedResponseAction;
		forward?: ForwardAction;
	}
	export interface UpdateRulePatchBodyActionFormProperties {
	}
	export function CreateUpdateRulePatchBodyActionFormGroup() {
		return new FormGroup<UpdateRulePatchBodyActionFormProperties>({
		});

	}

	export interface UpdateRulePatchBodyMatch {
		httpMatch?: HttpMatch;
	}
	export interface UpdateRulePatchBodyMatchFormProperties {
	}
	export function CreateUpdateRulePatchBodyMatchFormGroup() {
		return new FormGroup<UpdateRulePatchBodyMatchFormProperties>({
		});

	}

	export interface UpdateServicePatchBody {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType?: AuthType | null;

		/**
		 * The Amazon Resource Name (ARN) of the certificate.
		 * Max length: 2048
		 * Min length: 0
		 */
		certificateArn?: string | null;
	}
	export interface UpdateServicePatchBodyFormProperties {

		/** <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul> */
		authType: FormControl<AuthType | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the certificate.
		 * Max length: 2048
		 * Min length: 0
		 */
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServicePatchBodyFormGroup() {
		return new FormGroup<UpdateServicePatchBodyFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('^(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:certificate/[0-9a-z-]+)?$')]),
		});

	}

	export interface UpdateServiceNetworkPatchBody {

		/**
		 * <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul>
		 * Required
		 */
		authType: AuthType;
	}
	export interface UpdateServiceNetworkPatchBodyFormProperties {

		/**
		 * <p>The type of IAM policy.</p> <ul> <li> <p> <code>NONE</code>: The resource does not use an IAM policy. This is the default.</p> </li> <li> <p> <code>AWS_IAM</code>: The resource uses an IAM policy. When this type is used, auth is enabled and an auth policy is required.</p> </li> </ul>
		 * Required
		 */
		authType: FormControl<AuthType | null | undefined>,
	}
	export function CreateUpdateServiceNetworkPatchBodyFormGroup() {
		return new FormGroup<UpdateServiceNetworkPatchBodyFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceNetworkVpcAssociationPatchBody {

		/**
		 * The IDs of the security groups.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		securityGroupIds: Array<string>;
	}
	export interface UpdateServiceNetworkVpcAssociationPatchBodyFormProperties {
	}
	export function CreateUpdateServiceNetworkVpcAssociationPatchBodyFormGroup() {
		return new FormGroup<UpdateServiceNetworkVpcAssociationPatchBodyFormProperties>({
		});

	}

	export interface UpdateTargetGroupPatchBody {

		/**
		 * The health check configuration of a target group. Health check configurations aren't used for <code>LAMBDA</code> and <code>ALB</code> target groups.
		 * Required
		 */
		healthCheck: UpdateTargetGroupPatchBodyHealthCheck;
	}
	export interface UpdateTargetGroupPatchBodyFormProperties {
	}
	export function CreateUpdateTargetGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateTargetGroupPatchBodyFormProperties>({
		});

	}

	export interface UpdateTargetGroupPatchBodyHealthCheck {
		enabled?: boolean | null;
		healthCheckIntervalSeconds?: number | null;
		healthCheckTimeoutSeconds?: number | null;
		healthyThresholdCount?: number | null;
		matcher?: Matcher;
		path?: string;
		port?: number | null;
		protocol?: ListenerProtocol;
		protocolVersion?: HealthCheckProtocolVersion;
		unhealthyThresholdCount?: number | null;
	}
	export interface UpdateTargetGroupPatchBodyHealthCheckFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		healthCheckIntervalSeconds: FormControl<number | null | undefined>,
		healthCheckTimeoutSeconds: FormControl<number | null | undefined>,
		healthyThresholdCount: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<ListenerProtocol | null | undefined>,
		protocolVersion: FormControl<HealthCheckProtocolVersion | null | undefined>,
		unhealthyThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTargetGroupPatchBodyHealthCheckFormGroup() {
		return new FormGroup<UpdateTargetGroupPatchBodyHealthCheckFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			healthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			healthCheckTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			healthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			protocolVersion: new FormControl<HealthCheckProtocolVersion | null | undefined>(undefined),
			unhealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeregisterTargetsPostBody {

		/**
		 * The targets to deregister.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		targets: Array<Target>;
	}
	export interface DeregisterTargetsPostBodyFormProperties {
	}
	export function CreateDeregisterTargetsPostBodyFormGroup() {
		return new FormGroup<DeregisterTargetsPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags for the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags for the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTargetsPostBody {

		/**
		 * The targets to list.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		targets?: Array<Target>;
	}
	export interface ListTargetsPostBodyFormProperties {
	}
	export function CreateListTargetsPostBodyFormGroup() {
		return new FormGroup<ListTargetsPostBodyFormProperties>({
		});

	}

	export interface RegisterTargetsPostBody {

		/**
		 * The targets.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		targets: Array<Target>;
	}
	export interface RegisterTargetsPostBodyFormProperties {
	}
	export function CreateRegisterTargetsPostBodyFormGroup() {
		return new FormGroup<RegisterTargetsPostBodyFormProperties>({
		});

	}

}

