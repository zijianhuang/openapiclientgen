import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateFirewallPolicyResponse {
		FirewallArn?: string;
		FirewallName?: string;
		FirewallPolicyArn?: string;
		UpdateToken?: string;
	}
	export interface AssociateFirewallPolicyResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		FirewallPolicyArn: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFirewallPolicyResponseFormGroup() {
		return new FormGroup<AssociateFirewallPolicyResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateFirewallPolicyRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		FirewallPolicyArn: string;
	}
	export interface AssociateFirewallPolicyRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFirewallPolicyRequestFormGroup() {
		return new FormGroup<AssociateFirewallPolicyRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
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

	export interface InvalidTokenException {
	}
	export interface InvalidTokenExceptionFormProperties {
	}
	export function CreateInvalidTokenExceptionFormGroup() {
		return new FormGroup<InvalidTokenExceptionFormProperties>({
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface AssociateSubnetsResponse {
		FirewallArn?: string;
		FirewallName?: string;
		SubnetMappings?: Array<SubnetMapping>;
		UpdateToken?: string;
	}
	export interface AssociateSubnetsResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSubnetsResponseFormGroup() {
		return new FormGroup<AssociateSubnetsResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone. */
	export interface SubnetMapping {

		/** Required */
		SubnetId: string;
		IPAddressType?: IPAddressType;
	}

	/** The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone. */
	export interface SubnetMappingFormProperties {

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
		IPAddressType: FormControl<IPAddressType | null | undefined>,
	}
	export function CreateSubnetMappingFormGroup() {
		return new FormGroup<SubnetMappingFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IPAddressType: new FormControl<IPAddressType | null | undefined>(undefined),
		});

	}

	export enum IPAddressType { DUALSTACK = 'DUALSTACK', IPV4 = 'IPV4', IPV6 = 'IPV6' }

	export interface AssociateSubnetsRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		SubnetMappings: Array<SubnetMapping>;
	}
	export interface AssociateSubnetsRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSubnetsRequestFormGroup() {
		return new FormGroup<AssociateSubnetsRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InsufficientCapacityException {
	}
	export interface InsufficientCapacityExceptionFormProperties {
	}
	export function CreateInsufficientCapacityExceptionFormGroup() {
		return new FormGroup<InsufficientCapacityExceptionFormProperties>({
		});

	}

	export interface CreateFirewallResponse {
		Firewall?: Firewall;
		FirewallStatus?: FirewallStatus;
	}
	export interface CreateFirewallResponseFormProperties {
	}
	export function CreateCreateFirewallResponseFormGroup() {
		return new FormGroup<CreateFirewallResponseFormProperties>({
		});

	}


	/** <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p> */
	export interface Firewall {
		FirewallName?: string;
		FirewallArn?: string;

		/** Required */
		FirewallPolicyArn: string;

		/** Required */
		VpcId: string;

		/** Required */
		SubnetMappings: Array<SubnetMapping>;
		DeleteProtection?: boolean | null;
		SubnetChangeProtection?: boolean | null;
		FirewallPolicyChangeProtection?: boolean | null;
		Description?: string;

		/** Required */
		FirewallId: string;
		Tags?: Array<Tag>;
		EncryptionConfiguration?: EncryptionConfiguration;
	}

	/** <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p> */
	export interface FirewallFormProperties {
		FirewallName: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyArn: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
		DeleteProtection: FormControl<boolean | null | undefined>,
		SubnetChangeProtection: FormControl<boolean | null | undefined>,
		FirewallPolicyChangeProtection: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		FirewallId: FormControl<string | null | undefined>,
	}
	export function CreateFirewallFormGroup() {
		return new FormGroup<FirewallFormProperties>({
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteProtection: new FormControl<boolean | null | undefined>(undefined),
			SubnetChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			FirewallPolicyChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FirewallId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key:value pair associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>. */
	export interface EncryptionConfiguration {
		KeyId?: string;

		/** Required */
		Type: EncryptionType;
	}

	/** A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>. */
	export interface EncryptionConfigurationFormProperties {
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<EncryptionType | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionType { CUSTOMER_KMS = 'CUSTOMER_KMS', AWS_OWNED_KMS_KEY = 'AWS_OWNED_KMS_KEY' }


	/** Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN. */
	export interface FirewallStatus {

		/** Required */
		Status: FirewallStatusValue;

		/** Required */
		ConfigurationSyncStateSummary: ConfigurationSyncState;
		SyncStates?: SyncStates;
		CapacityUsageSummary?: CapacityUsageSummary;
	}

	/** Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN. */
	export interface FirewallStatusFormProperties {

		/** Required */
		Status: FormControl<FirewallStatusValue | null | undefined>,

		/** Required */
		ConfigurationSyncStateSummary: FormControl<ConfigurationSyncState | null | undefined>,
	}
	export function CreateFirewallStatusFormGroup() {
		return new FormGroup<FirewallStatusFormProperties>({
			Status: new FormControl<FirewallStatusValue | null | undefined>(undefined, [Validators.required]),
			ConfigurationSyncStateSummary: new FormControl<ConfigurationSyncState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallStatusValue { PROVISIONING = 'PROVISIONING', DELETING = 'DELETING', READY = 'READY' }

	export enum ConfigurationSyncState { PENDING = 'PENDING', IN_SYNC = 'IN_SYNC', CAPACITY_CONSTRAINED = 'CAPACITY_CONSTRAINED' }

	export interface SyncStates {
	}
	export interface SyncStatesFormProperties {
	}
	export function CreateSyncStatesFormGroup() {
		return new FormGroup<SyncStatesFormProperties>({
		});

	}


	/** The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall. */
	export interface CapacityUsageSummary {
		CIDRs?: CIDRSummary;
	}

	/** The capacity usage summary of the resources used by the <a>ReferenceSets</a> in a firewall. */
	export interface CapacityUsageSummaryFormProperties {
	}
	export function CreateCapacityUsageSummaryFormGroup() {
		return new FormGroup<CapacityUsageSummaryFormProperties>({
		});

	}


	/** Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing. */
	export interface CIDRSummary {
		AvailableCIDRCount?: number | null;
		UtilizedCIDRCount?: number | null;
		IPSetReferences?: IPSetMetadataMap;
	}

	/** Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing. */
	export interface CIDRSummaryFormProperties {
		AvailableCIDRCount: FormControl<number | null | undefined>,
		UtilizedCIDRCount: FormControl<number | null | undefined>,
	}
	export function CreateCIDRSummaryFormGroup() {
		return new FormGroup<CIDRSummaryFormProperties>({
			AvailableCIDRCount: new FormControl<number | null | undefined>(undefined),
			UtilizedCIDRCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IPSetMetadataMap {
	}
	export interface IPSetMetadataMapFormProperties {
	}
	export function CreateIPSetMetadataMapFormGroup() {
		return new FormGroup<IPSetMetadataMapFormProperties>({
		});

	}

	export interface CreateFirewallRequest {

		/** Required */
		FirewallName: string;

		/** Required */
		FirewallPolicyArn: string;

		/** Required */
		VpcId: string;

		/** Required */
		SubnetMappings: Array<SubnetMapping>;
		DeleteProtection?: boolean | null;
		SubnetChangeProtection?: boolean | null;
		FirewallPolicyChangeProtection?: boolean | null;
		Description?: string;
		Tags?: Array<Tag>;
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface CreateFirewallRequestFormProperties {

		/** Required */
		FirewallName: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyArn: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
		DeleteProtection: FormControl<boolean | null | undefined>,
		SubnetChangeProtection: FormControl<boolean | null | undefined>,
		FirewallPolicyChangeProtection: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallRequestFormGroup() {
		return new FormGroup<CreateFirewallRequestFormProperties>({
			FirewallName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteProtection: new FormControl<boolean | null | undefined>(undefined),
			SubnetChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			FirewallPolicyChangeProtection: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateFirewallPolicyResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		FirewallPolicyResponse: FirewallPolicyResponse;
	}
	export interface CreateFirewallPolicyResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallPolicyResponseFormGroup() {
		return new FormGroup<CreateFirewallPolicyResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.  */
	export interface FirewallPolicyResponse {

		/** Required */
		FirewallPolicyName: string;

		/** Required */
		FirewallPolicyArn: string;

		/** Required */
		FirewallPolicyId: string;
		Description?: string;
		FirewallPolicyStatus?: ResourceStatus;
		Tags?: Array<Tag>;
		ConsumedStatelessRuleCapacity?: number | null;
		ConsumedStatefulRuleCapacity?: number | null;
		NumberOfAssociations?: number | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		LastModifiedTime?: Date;
	}

	/** The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.  */
	export interface FirewallPolicyResponseFormProperties {

		/** Required */
		FirewallPolicyName: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyArn: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FirewallPolicyStatus: FormControl<ResourceStatus | null | undefined>,
		ConsumedStatelessRuleCapacity: FormControl<number | null | undefined>,
		ConsumedStatefulRuleCapacity: FormControl<number | null | undefined>,
		NumberOfAssociations: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateFirewallPolicyResponseFormGroup() {
		return new FormGroup<FirewallPolicyResponseFormProperties>({
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallPolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyStatus: new FormControl<ResourceStatus | null | undefined>(undefined),
			ConsumedStatelessRuleCapacity: new FormControl<number | null | undefined>(undefined),
			ConsumedStatefulRuleCapacity: new FormControl<number | null | undefined>(undefined),
			NumberOfAssociations: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ResourceStatus { ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface CreateFirewallPolicyRequest {

		/** Required */
		FirewallPolicyName: string;

		/** Required */
		FirewallPolicy: FirewallPolicy;
		Description?: string;
		Tags?: Array<Tag>;
		DryRun?: boolean | null;
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface CreateFirewallPolicyRequestFormProperties {

		/** Required */
		FirewallPolicyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFirewallPolicyRequestFormGroup() {
		return new FormGroup<CreateFirewallPolicyRequestFormProperties>({
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p> */
	export interface FirewallPolicy {
		StatelessRuleGroupReferences?: Array<StatelessRuleGroupReference>;

		/** Required */
		StatelessDefaultActions: Array<string>;

		/** Required */
		StatelessFragmentDefaultActions: Array<string>;
		StatelessCustomActions?: Array<CustomAction>;
		StatefulRuleGroupReferences?: Array<StatefulRuleGroupReference>;
		StatefulDefaultActions?: Array<string>;
		StatefulEngineOptions?: StatefulEngineOptions;
		TLSInspectionConfigurationArn?: string;
		PolicyVariables?: PolicyVariables;
	}

	/** <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p> */
	export interface FirewallPolicyFormProperties {
		TLSInspectionConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyFormGroup() {
		return new FormGroup<FirewallPolicyFormProperties>({
			TLSInspectionConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.  */
	export interface StatelessRuleGroupReference {

		/** Required */
		ResourceArn: string;

		/** Required */
		Priority: number;
	}

	/** Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.  */
	export interface StatelessRuleGroupReferenceFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateStatelessRuleGroupReferenceFormGroup() {
		return new FormGroup<StatelessRuleGroupReferenceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul> */
	export interface CustomAction {

		/** Required */
		ActionName: string;

		/** Required */
		ActionDefinition: ActionDefinition;
	}

	/** <p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul> */
	export interface CustomActionFormProperties {

		/** Required */
		ActionName: FormControl<string | null | undefined>,
	}
	export function CreateCustomActionFormGroup() {
		return new FormGroup<CustomActionFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>. */
	export interface ActionDefinition {
		PublishMetricAction?: PublishMetricAction;
	}

	/** A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>. */
	export interface ActionDefinitionFormProperties {
	}
	export function CreateActionDefinitionFormGroup() {
		return new FormGroup<ActionDefinitionFormProperties>({
		});

	}


	/** Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published. */
	export interface PublishMetricAction {

		/** Required */
		Dimensions: Array<Dimension>;
	}

	/** Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published. */
	export interface PublishMetricActionFormProperties {
	}
	export function CreatePublishMetricActionFormGroup() {
		return new FormGroup<PublishMetricActionFormProperties>({
		});

	}


	/** <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric. </p> <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p> */
	export interface Dimension {

		/** Required */
		Value: string;
	}

	/** <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric. </p> <p>Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p> */
	export interface DimensionFormProperties {

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.  */
	export interface StatefulRuleGroupReference {

		/** Required */
		ResourceArn: string;
		Priority?: number | null;
		Override?: StatefulRuleGroupOverride;
	}

	/** Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.  */
	export interface StatefulRuleGroupReferenceFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateStatefulRuleGroupReferenceFormGroup() {
		return new FormGroup<StatefulRuleGroupReferenceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The setting that allows the policy owner to change the behavior of the rule group within a policy.  */
	export interface StatefulRuleGroupOverride {
		Action?: OverrideAction;
	}

	/** The setting that allows the policy owner to change the behavior of the rule group within a policy.  */
	export interface StatefulRuleGroupOverrideFormProperties {
		Action: FormControl<OverrideAction | null | undefined>,
	}
	export function CreateStatefulRuleGroupOverrideFormGroup() {
		return new FormGroup<StatefulRuleGroupOverrideFormProperties>({
			Action: new FormControl<OverrideAction | null | undefined>(undefined),
		});

	}

	export enum OverrideAction { DROP_TO_ALERT = 'DROP_TO_ALERT' }


	/** Configuration settings for the handling of the stateful rule groups in a firewall policy.  */
	export interface StatefulEngineOptions {
		RuleOrder?: RuleOrder;
		StreamExceptionPolicy?: StreamExceptionPolicy;
	}

	/** Configuration settings for the handling of the stateful rule groups in a firewall policy.  */
	export interface StatefulEngineOptionsFormProperties {
		RuleOrder: FormControl<RuleOrder | null | undefined>,
		StreamExceptionPolicy: FormControl<StreamExceptionPolicy | null | undefined>,
	}
	export function CreateStatefulEngineOptionsFormGroup() {
		return new FormGroup<StatefulEngineOptionsFormProperties>({
			RuleOrder: new FormControl<RuleOrder | null | undefined>(undefined),
			StreamExceptionPolicy: new FormControl<StreamExceptionPolicy | null | undefined>(undefined),
		});

	}

	export enum RuleOrder { DEFAULT_ACTION_ORDER = 'DEFAULT_ACTION_ORDER', STRICT_ORDER = 'STRICT_ORDER' }

	export enum StreamExceptionPolicy { DROP = 'DROP', CONTINUE = 'CONTINUE', REJECT = 'REJECT' }


	/** Contains variables that you can use to override default Suricata settings in your firewall policy. */
	export interface PolicyVariables {
		RuleVariables?: IPSets;
	}

	/** Contains variables that you can use to override default Suricata settings in your firewall policy. */
	export interface PolicyVariablesFormProperties {
	}
	export function CreatePolicyVariablesFormGroup() {
		return new FormGroup<PolicyVariablesFormProperties>({
		});

	}

	export interface IPSets {
	}
	export interface IPSetsFormProperties {
	}
	export function CreateIPSetsFormGroup() {
		return new FormGroup<IPSetsFormProperties>({
		});

	}

	export interface CreateRuleGroupResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		RuleGroupResponse: RuleGroupResponse;
	}
	export interface CreateRuleGroupResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupResponseFormGroup() {
		return new FormGroup<CreateRuleGroupResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.  */
	export interface RuleGroupResponse {

		/** Required */
		RuleGroupArn: string;

		/** Required */
		RuleGroupName: string;

		/** Required */
		RuleGroupId: string;
		Description?: string;
		Type?: RuleGroupType;
		Capacity?: number | null;
		RuleGroupStatus?: ResourceStatus;
		Tags?: Array<Tag>;
		ConsumedCapacity?: number | null;
		NumberOfAssociations?: number | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		SourceMetadata?: SourceMetadata;
		SnsTopic?: string;
		LastModifiedTime?: Date;
	}

	/** The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.  */
	export interface RuleGroupResponseFormProperties {

		/** Required */
		RuleGroupArn: FormControl<string | null | undefined>,

		/** Required */
		RuleGroupName: FormControl<string | null | undefined>,

		/** Required */
		RuleGroupId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		RuleGroupStatus: FormControl<ResourceStatus | null | undefined>,
		ConsumedCapacity: FormControl<number | null | undefined>,
		NumberOfAssociations: FormControl<number | null | undefined>,
		SnsTopic: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateRuleGroupResponseFormGroup() {
		return new FormGroup<RuleGroupResponseFormProperties>({
			RuleGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			RuleGroupStatus: new FormControl<ResourceStatus | null | undefined>(undefined),
			ConsumedCapacity: new FormControl<number | null | undefined>(undefined),
			NumberOfAssociations: new FormControl<number | null | undefined>(undefined),
			SnsTopic: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RuleGroupType { STATELESS = 'STATELESS', STATEFUL = 'STATEFUL' }


	/** High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>. */
	export interface SourceMetadata {
		SourceArn?: string;
		SourceUpdateToken?: string;
	}

	/** High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>. */
	export interface SourceMetadataFormProperties {
		SourceArn: FormControl<string | null | undefined>,
		SourceUpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateSourceMetadataFormGroup() {
		return new FormGroup<SourceMetadataFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined),
			SourceUpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleGroupRequest {

		/** Required */
		RuleGroupName: string;
		RuleGroup?: RuleGroup;
		Rules?: string;

		/** Required */
		Type: RuleGroupType;
		Description?: string;

		/** Required */
		Capacity: number;
		Tags?: Array<Tag>;
		DryRun?: boolean | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		SourceMetadata?: SourceMetadata;
	}
	export interface CreateRuleGroupRequestFormProperties {

		/** Required */
		RuleGroupName: FormControl<string | null | undefined>,
		Rules: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<RuleGroupType | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Capacity: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRuleGroupRequestFormGroup() {
		return new FormGroup<CreateRuleGroupRequestFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Rules: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p> */
	export interface RuleGroup {
		RuleVariables?: RuleVariables;
		ReferenceSets?: ReferenceSets;

		/** Required */
		RulesSource: RulesSource;
		StatefulRuleOptions?: StatefulRuleOptions;
	}

	/** <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p> */
	export interface RuleGroupFormProperties {
	}
	export function CreateRuleGroupFormGroup() {
		return new FormGroup<RuleGroupFormProperties>({
		});

	}


	/** Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.  */
	export interface RuleVariables {
		IPSets?: IPSets;
		PortSets?: PortSets;
	}

	/** Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.  */
	export interface RuleVariablesFormProperties {
	}
	export function CreateRuleVariablesFormGroup() {
		return new FormGroup<RuleVariablesFormProperties>({
		});

	}

	export interface PortSets {
	}
	export interface PortSetsFormProperties {
	}
	export function CreatePortSetsFormGroup() {
		return new FormGroup<PortSetsFormProperties>({
		});

	}


	/** Contains a set of IP set references. */
	export interface ReferenceSets {
		IPSetReferences?: IPSetReferenceMap;
	}

	/** Contains a set of IP set references. */
	export interface ReferenceSetsFormProperties {
	}
	export function CreateReferenceSetsFormGroup() {
		return new FormGroup<ReferenceSetsFormProperties>({
		});

	}

	export interface IPSetReferenceMap {
	}
	export interface IPSetReferenceMapFormProperties {
	}
	export function CreateIPSetReferenceMapFormGroup() {
		return new FormGroup<IPSetReferenceMapFormProperties>({
		});

	}


	/** The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules.  */
	export interface RulesSource {
		RulesString?: string;
		RulesSourceList?: RulesSourceList;
		StatefulRules?: Array<StatefulRule>;
		StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
	}

	/** The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules.  */
	export interface RulesSourceFormProperties {
		RulesString: FormControl<string | null | undefined>,
	}
	export function CreateRulesSourceFormGroup() {
		return new FormGroup<RulesSourceFormProperties>({
			RulesString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p> */
	export interface RulesSourceList {

		/** Required */
		Targets: Array<string>;

		/** Required */
		TargetTypes: Array<TargetType>;

		/** Required */
		GeneratedRulesType: GeneratedRulesType;
	}

	/** <p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in Network Firewall</a> in the <i>Network Firewall Developer Guide</i>.</p> */
	export interface RulesSourceListFormProperties {

		/** Required */
		GeneratedRulesType: FormControl<GeneratedRulesType | null | undefined>,
	}
	export function CreateRulesSourceListFormGroup() {
		return new FormGroup<RulesSourceListFormProperties>({
			GeneratedRulesType: new FormControl<GeneratedRulesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TargetType { TLS_SNI = 'TLS_SNI', HTTP_HOST = 'HTTP_HOST' }

	export enum GeneratedRulesType { ALLOWLIST = 'ALLOWLIST', DENYLIST = 'DENYLIST' }


	/** A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.iorules/intro.html#">Rules Format</a>.  */
	export interface StatefulRule {

		/** Required */
		Action: StatefulAction;

		/** Required */
		Header: Header;

		/** Required */
		RuleOptions: Array<RuleOption>;
	}

	/** A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata <code>Rules</code> format, see <a href="https://suricata.readthedocs.iorules/intro.html#">Rules Format</a>.  */
	export interface StatefulRuleFormProperties {

		/** Required */
		Action: FormControl<StatefulAction | null | undefined>,
	}
	export function CreateStatefulRuleFormGroup() {
		return new FormGroup<StatefulRuleFormProperties>({
			Action: new FormControl<StatefulAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatefulAction { PASS = 'PASS', DROP = 'DROP', ALERT = 'ALERT', REJECT = 'REJECT' }


	/** The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>.  */
	export interface Header {

		/** Required */
		Protocol: StatefulRuleProtocol;

		/** Required */
		Source: string;

		/** Required */
		SourcePort: string;

		/** Required */
		Direction: StatefulRuleDirection;

		/** Required */
		Destination: string;

		/** Required */
		DestinationPort: string;
	}

	/** The basic rule criteria for Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>.  */
	export interface HeaderFormProperties {

		/** Required */
		Protocol: FormControl<StatefulRuleProtocol | null | undefined>,

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		SourcePort: FormControl<string | null | undefined>,

		/** Required */
		Direction: FormControl<StatefulRuleDirection | null | undefined>,

		/** Required */
		Destination: FormControl<string | null | undefined>,

		/** Required */
		DestinationPort: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			Protocol: new FormControl<StatefulRuleProtocol | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourcePort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Direction: new FormControl<StatefulRuleDirection | null | undefined>(undefined, [Validators.required]),
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationPort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatefulRuleProtocol { IP = 'IP', TCP = 'TCP', UDP = 'UDP', ICMP = 'ICMP', HTTP = 'HTTP', FTP = 'FTP', TLS = 'TLS', SMB = 'SMB', DNS = 'DNS', DCERPC = 'DCERPC', SSH = 'SSH', SMTP = 'SMTP', IMAP = 'IMAP', MSN = 'MSN', KRB5 = 'KRB5', IKEV2 = 'IKEV2', TFTP = 'TFTP', NTP = 'NTP', DHCP = 'DHCP' }

	export enum StatefulRuleDirection { FORWARD = 'FORWARD', ANY = 'ANY' }


	/** Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration. */
	export interface RuleOption {

		/** Required */
		Keyword: string;
		Settings?: Array<string>;
	}

	/** Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration. */
	export interface RuleOptionFormProperties {

		/** Required */
		Keyword: FormControl<string | null | undefined>,
	}
	export function CreateRuleOptionFormGroup() {
		return new FormGroup<RuleOptionFormProperties>({
			Keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.  */
	export interface StatelessRulesAndCustomActions {

		/** Required */
		StatelessRules: Array<StatelessRule>;
		CustomActions?: Array<CustomAction>;
	}

	/** Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.  */
	export interface StatelessRulesAndCustomActionsFormProperties {
	}
	export function CreateStatelessRulesAndCustomActionsFormGroup() {
		return new FormGroup<StatelessRulesAndCustomActionsFormProperties>({
		});

	}


	/** A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>. */
	export interface StatelessRule {

		/** Required */
		RuleDefinition: RuleDefinition;

		/** Required */
		Priority: number;
	}

	/** A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>. */
	export interface StatelessRuleFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateStatelessRuleFormGroup() {
		return new FormGroup<StatelessRuleFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet. */
	export interface RuleDefinition {

		/** Required */
		MatchAttributes: MatchAttributes;

		/** Required */
		Actions: Array<string>;
	}

	/** The inspection criteria and action for a single stateless rule. Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet. */
	export interface RuleDefinitionFormProperties {
	}
	export function CreateRuleDefinitionFormGroup() {
		return new FormGroup<RuleDefinitionFormProperties>({
		});

	}


	/** Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.  */
	export interface MatchAttributes {
		Sources?: Array<Address>;
		Destinations?: Array<Address>;
		SourcePorts?: Array<PortRange>;
		DestinationPorts?: Array<PortRange>;
		Protocols?: Array<number> | null;
		TCPFlags?: Array<TCPFlagField>;
	}

	/** Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.  */
	export interface MatchAttributesFormProperties {
	}
	export function CreateMatchAttributesFormGroup() {
		return new FormGroup<MatchAttributesFormProperties>({
		});

	}


	/** A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications. */
	export interface Address {

		/** Required */
		AddressDefinition: string;
	}

	/** A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications. */
	export interface AddressFormProperties {

		/** Required */
		AddressDefinition: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			AddressDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings.  */
	export interface PortRange {

		/** Required */
		FromPort: number;

		/** Required */
		ToPort: number;
	}

	/** A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings.  */
	export interface PortRangeFormProperties {

		/** Required */
		FromPort: FormControl<number | null | undefined>,

		/** Required */
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ToPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings. */
	export interface TCPFlagField {

		/** Required */
		Flags: Array<TCPFlag>;
		Masks?: Array<TCPFlag>;
	}

	/** TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings. */
	export interface TCPFlagFieldFormProperties {
	}
	export function CreateTCPFlagFieldFormGroup() {
		return new FormGroup<TCPFlagFieldFormProperties>({
		});

	}

	export enum TCPFlag { FIN = 'FIN', SYN = 'SYN', RST = 'RST', PSH = 'PSH', ACK = 'ACK', URG = 'URG', ECE = 'ECE', CWR = 'CWR' }


	/** Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups. */
	export interface StatefulRuleOptions {
		RuleOrder?: RuleOrder;
	}

	/** Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups. */
	export interface StatefulRuleOptionsFormProperties {
		RuleOrder: FormControl<RuleOrder | null | undefined>,
	}
	export function CreateStatefulRuleOptionsFormGroup() {
		return new FormGroup<StatefulRuleOptionsFormProperties>({
			RuleOrder: new FormControl<RuleOrder | null | undefined>(undefined),
		});

	}

	export interface CreateTLSInspectionConfigurationResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
	}
	export interface CreateTLSInspectionConfigurationResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTLSInspectionConfigurationResponseFormGroup() {
		return new FormGroup<CreateTLSInspectionConfigurationResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The high-level properties of a TLS inspection configuration. This, along with the <code>TLSInspectionConfiguration</code>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <code>DescribeTLSInspectionConfiguration</code>. */
	export interface TLSInspectionConfigurationResponse {

		/** Required */
		TLSInspectionConfigurationArn: string;

		/** Required */
		TLSInspectionConfigurationName: string;

		/** Required */
		TLSInspectionConfigurationId: string;
		TLSInspectionConfigurationStatus?: ResourceStatus;
		Description?: string;
		Tags?: Array<Tag>;
		LastModifiedTime?: Date;
		NumberOfAssociations?: number | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		Certificates?: Array<TlsCertificateData>;
	}

	/** The high-level properties of a TLS inspection configuration. This, along with the <code>TLSInspectionConfiguration</code>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <code>DescribeTLSInspectionConfiguration</code>. */
	export interface TLSInspectionConfigurationResponseFormProperties {

		/** Required */
		TLSInspectionConfigurationArn: FormControl<string | null | undefined>,

		/** Required */
		TLSInspectionConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		TLSInspectionConfigurationId: FormControl<string | null | undefined>,
		TLSInspectionConfigurationStatus: FormControl<ResourceStatus | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		NumberOfAssociations: FormControl<number | null | undefined>,
	}
	export function CreateTLSInspectionConfigurationResponseFormGroup() {
		return new FormGroup<TLSInspectionConfigurationResponseFormProperties>({
			TLSInspectionConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TLSInspectionConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TLSInspectionConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TLSInspectionConfigurationStatus: new FormControl<ResourceStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfAssociations: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains metadata about an Certificate Manager certificate. */
	export interface TlsCertificateData {
		CertificateArn?: string;
		CertificateSerial?: string;
		Status?: string;
		StatusMessage?: string;
	}

	/** Contains metadata about an Certificate Manager certificate. */
	export interface TlsCertificateDataFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		CertificateSerial: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateTlsCertificateDataFormGroup() {
		return new FormGroup<TlsCertificateDataFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateSerial: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTLSInspectionConfigurationRequest {

		/** Required */
		TLSInspectionConfigurationName: string;

		/** Required */
		TLSInspectionConfiguration: TLSInspectionConfiguration;
		Description?: string;
		Tags?: Array<Tag>;

		/** A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface CreateTLSInspectionConfigurationRequestFormProperties {

		/** Required */
		TLSInspectionConfigurationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateTLSInspectionConfigurationRequestFormGroup() {
		return new FormGroup<CreateTLSInspectionConfigurationRequestFormProperties>({
			TLSInspectionConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> */
	export interface TLSInspectionConfiguration {
		ServerCertificateConfigurations?: Array<ServerCertificateConfiguration>;
	}

	/** <p>The object that defines a TLS inspection configuration. This, along with <a>TLSInspectionConfigurationResponse</a>, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling <a>DescribeTLSInspectionConfiguration</a>. </p> <p>Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.</p> <p>To use a TLS inspection configuration, you add it to a Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect inbound traffic. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> */
	export interface TLSInspectionConfigurationFormProperties {
	}
	export function CreateTLSInspectionConfigurationFormGroup() {
		return new FormGroup<TLSInspectionConfigurationFormProperties>({
		});

	}


	/** <p>Configures the associated Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificates and scope settings Network Firewall uses to decrypt traffic in a <a>TLSInspectionConfiguration</a>. For information about working with SSL/TLS certificates for TLS inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html"> Requirements for using SSL/TLS server certficiates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> <note> <p>If a server certificate that's associated with your <a>TLSInspectionConfiguration</a> is revoked, deleted, or expired it can result in client-side TLS errors.</p> </note> */
	export interface ServerCertificateConfiguration {
		ServerCertificates?: Array<ServerCertificate>;
		Scopes?: Array<ServerCertificateScope>;
	}

	/** <p>Configures the associated Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificates and scope settings Network Firewall uses to decrypt traffic in a <a>TLSInspectionConfiguration</a>. For information about working with SSL/TLS certificates for TLS inspection, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html"> Requirements for using SSL/TLS server certficiates with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>.</p> <note> <p>If a server certificate that's associated with your <a>TLSInspectionConfiguration</a> is revoked, deleted, or expired it can result in client-side TLS errors.</p> </note> */
	export interface ServerCertificateConfigurationFormProperties {
	}
	export function CreateServerCertificateConfigurationFormGroup() {
		return new FormGroup<ServerCertificateConfigurationFormProperties>({
		});

	}


	/** Any Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a <a>ServerCertificateConfiguration</a> used in a <a>TLSInspectionConfiguration</a>. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate </a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>. */
	export interface ServerCertificate {
		ResourceArn?: string;
	}

	/** Any Certificate Manager Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a <a>ServerCertificateConfiguration</a> used in a <a>TLSInspectionConfiguration</a>. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in Certificate Manager, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html">Request a public certificate </a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing certificates</a> in the <i>Certificate Manager User Guide</i>. */
	export interface ServerCertificateFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateServerCertificateFormGroup() {
		return new FormGroup<ServerCertificateFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine. */
	export interface ServerCertificateScope {
		Sources?: Array<Address>;
		Destinations?: Array<Address>;
		SourcePorts?: Array<PortRange>;
		DestinationPorts?: Array<PortRange>;
		Protocols?: Array<number> | null;
	}

	/** Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine. */
	export interface ServerCertificateScopeFormProperties {
	}
	export function CreateServerCertificateScopeFormGroup() {
		return new FormGroup<ServerCertificateScopeFormProperties>({
		});

	}

	export interface DeleteFirewallResponse {

		/** <p>The firewall defines the configuration settings for an Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p> */
		Firewall?: Firewall;

		/** Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN. */
		FirewallStatus?: FirewallStatus;
	}
	export interface DeleteFirewallResponseFormProperties {
	}
	export function CreateDeleteFirewallResponseFormGroup() {
		return new FormGroup<DeleteFirewallResponseFormProperties>({
		});

	}

	export interface DeleteFirewallRequest {
		FirewallName?: string;
		FirewallArn?: string;
	}
	export interface DeleteFirewallRequestFormProperties {
		FirewallName: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallRequestFormGroup() {
		return new FormGroup<DeleteFirewallRequestFormProperties>({
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface DeleteFirewallPolicyResponse {

		/** Required */
		FirewallPolicyResponse: FirewallPolicyResponse;
	}
	export interface DeleteFirewallPolicyResponseFormProperties {
	}
	export function CreateDeleteFirewallPolicyResponseFormGroup() {
		return new FormGroup<DeleteFirewallPolicyResponseFormProperties>({
		});

	}

	export interface DeleteFirewallPolicyRequest {
		FirewallPolicyName?: string;
		FirewallPolicyArn?: string;
	}
	export interface DeleteFirewallPolicyRequestFormProperties {
		FirewallPolicyName: FormControl<string | null | undefined>,
		FirewallPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallPolicyRequestFormGroup() {
		return new FormGroup<DeleteFirewallPolicyRequestFormProperties>({
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidResourcePolicyException {
	}
	export interface InvalidResourcePolicyExceptionFormProperties {
	}
	export function CreateInvalidResourcePolicyExceptionFormGroup() {
		return new FormGroup<InvalidResourcePolicyExceptionFormProperties>({
		});

	}

	export interface DeleteRuleGroupResponse {

		/** Required */
		RuleGroupResponse: RuleGroupResponse;
	}
	export interface DeleteRuleGroupResponseFormProperties {
	}
	export function CreateDeleteRuleGroupResponseFormGroup() {
		return new FormGroup<DeleteRuleGroupResponseFormProperties>({
		});

	}

	export interface DeleteRuleGroupRequest {
		RuleGroupName?: string;
		RuleGroupArn?: string;
		Type?: RuleGroupType;
	}
	export interface DeleteRuleGroupRequestFormProperties {
		RuleGroupName: FormControl<string | null | undefined>,
		RuleGroupArn: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
	}
	export function CreateDeleteRuleGroupRequestFormGroup() {
		return new FormGroup<DeleteRuleGroupRequestFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			RuleGroupArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
		});

	}

	export interface DeleteTLSInspectionConfigurationResponse {

		/** Required */
		TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
	}
	export interface DeleteTLSInspectionConfigurationResponseFormProperties {
	}
	export function CreateDeleteTLSInspectionConfigurationResponseFormGroup() {
		return new FormGroup<DeleteTLSInspectionConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteTLSInspectionConfigurationRequest {
		TLSInspectionConfigurationArn?: string;
		TLSInspectionConfigurationName?: string;
	}
	export interface DeleteTLSInspectionConfigurationRequestFormProperties {
		TLSInspectionConfigurationArn: FormControl<string | null | undefined>,
		TLSInspectionConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTLSInspectionConfigurationRequestFormGroup() {
		return new FormGroup<DeleteTLSInspectionConfigurationRequestFormProperties>({
			TLSInspectionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			TLSInspectionConfigurationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFirewallResponse {
		UpdateToken?: string;
		Firewall?: Firewall;
		FirewallStatus?: FirewallStatus;
	}
	export interface DescribeFirewallResponseFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFirewallResponseFormGroup() {
		return new FormGroup<DescribeFirewallResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFirewallRequest {
		FirewallName?: string;
		FirewallArn?: string;
	}
	export interface DescribeFirewallRequestFormProperties {
		FirewallName: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFirewallRequestFormGroup() {
		return new FormGroup<DescribeFirewallRequestFormProperties>({
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFirewallPolicyResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		FirewallPolicyResponse: FirewallPolicyResponse;
		FirewallPolicy?: FirewallPolicy;
	}
	export interface DescribeFirewallPolicyResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFirewallPolicyResponseFormGroup() {
		return new FormGroup<DescribeFirewallPolicyResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFirewallPolicyRequest {
		FirewallPolicyName?: string;
		FirewallPolicyArn?: string;
	}
	export interface DescribeFirewallPolicyRequestFormProperties {
		FirewallPolicyName: FormControl<string | null | undefined>,
		FirewallPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFirewallPolicyRequestFormGroup() {
		return new FormGroup<DescribeFirewallPolicyRequestFormProperties>({
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoggingConfigurationResponse {
		FirewallArn?: string;

		/** Defines how Network Firewall performs logging for a <a>Firewall</a>. */
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface DescribeLoggingConfigurationResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoggingConfigurationResponseFormGroup() {
		return new FormGroup<DescribeLoggingConfigurationResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines how Network Firewall performs logging for a <a>Firewall</a>.  */
	export interface LoggingConfiguration {

		/** Required */
		LogDestinationConfigs: Array<LogDestinationConfig>;
	}

	/** Defines how Network Firewall performs logging for a <a>Firewall</a>.  */
	export interface LoggingConfigurationFormProperties {
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
		});

	}


	/** <p>Defines where Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p> */
	export interface LogDestinationConfig {

		/** Required */
		LogType: LogType;

		/** Required */
		LogDestinationType: LogDestinationType;

		/** Required */
		LogDestination: LogDestinationMap;
	}

	/** <p>Defines where Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p> */
	export interface LogDestinationConfigFormProperties {

		/** Required */
		LogType: FormControl<LogType | null | undefined>,

		/** Required */
		LogDestinationType: FormControl<LogDestinationType | null | undefined>,
	}
	export function CreateLogDestinationConfigFormGroup() {
		return new FormGroup<LogDestinationConfigFormProperties>({
			LogType: new FormControl<LogType | null | undefined>(undefined, [Validators.required]),
			LogDestinationType: new FormControl<LogDestinationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogType { ALERT = 'ALERT', FLOW = 'FLOW' }

	export enum LogDestinationType { S3 = 'S3', CloudWatchLogs = 'CloudWatchLogs', KinesisDataFirehose = 'KinesisDataFirehose' }

	export interface LogDestinationMap {
	}
	export interface LogDestinationMapFormProperties {
	}
	export function CreateLogDestinationMapFormGroup() {
		return new FormGroup<LogDestinationMapFormProperties>({
		});

	}

	export interface DescribeLoggingConfigurationRequest {
		FirewallArn?: string;
		FirewallName?: string;
	}
	export interface DescribeLoggingConfigurationRequestFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DescribeLoggingConfigurationRequestFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePolicyResponse {
		Policy?: string;
	}
	export interface DescribeResourcePolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyResponseFormGroup() {
		return new FormGroup<DescribeResourcePolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DescribeResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyRequestFormGroup() {
		return new FormGroup<DescribeResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRuleGroupResponse {

		/** Required */
		UpdateToken: string;
		RuleGroup?: RuleGroup;

		/** Required */
		RuleGroupResponse: RuleGroupResponse;
	}
	export interface DescribeRuleGroupResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuleGroupResponseFormGroup() {
		return new FormGroup<DescribeRuleGroupResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRuleGroupRequest {
		RuleGroupName?: string;
		RuleGroupArn?: string;
		Type?: RuleGroupType;
	}
	export interface DescribeRuleGroupRequestFormProperties {
		RuleGroupName: FormControl<string | null | undefined>,
		RuleGroupArn: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
	}
	export function CreateDescribeRuleGroupRequestFormGroup() {
		return new FormGroup<DescribeRuleGroupRequestFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			RuleGroupArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
		});

	}

	export interface DescribeRuleGroupMetadataResponse {

		/** Required */
		RuleGroupArn: string;

		/** Required */
		RuleGroupName: string;
		Description?: string;
		Type?: RuleGroupType;
		Capacity?: number | null;

		/** Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups. */
		StatefulRuleOptions?: StatefulRuleOptions;
		LastModifiedTime?: Date;
	}
	export interface DescribeRuleGroupMetadataResponseFormProperties {

		/** Required */
		RuleGroupArn: FormControl<string | null | undefined>,

		/** Required */
		RuleGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRuleGroupMetadataResponseFormGroup() {
		return new FormGroup<DescribeRuleGroupMetadataResponseFormProperties>({
			RuleGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRuleGroupMetadataRequest {
		RuleGroupName?: string;
		RuleGroupArn?: string;
		Type?: RuleGroupType;
	}
	export interface DescribeRuleGroupMetadataRequestFormProperties {
		RuleGroupName: FormControl<string | null | undefined>,
		RuleGroupArn: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
	}
	export function CreateDescribeRuleGroupMetadataRequestFormGroup() {
		return new FormGroup<DescribeRuleGroupMetadataRequestFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			RuleGroupArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
		});

	}

	export interface DescribeTLSInspectionConfigurationResponse {

		/** Required */
		UpdateToken: string;
		TLSInspectionConfiguration?: TLSInspectionConfiguration;

		/** Required */
		TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
	}
	export interface DescribeTLSInspectionConfigurationResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTLSInspectionConfigurationResponseFormGroup() {
		return new FormGroup<DescribeTLSInspectionConfigurationResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTLSInspectionConfigurationRequest {
		TLSInspectionConfigurationArn?: string;
		TLSInspectionConfigurationName?: string;
	}
	export interface DescribeTLSInspectionConfigurationRequestFormProperties {
		TLSInspectionConfigurationArn: FormControl<string | null | undefined>,
		TLSInspectionConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTLSInspectionConfigurationRequestFormGroup() {
		return new FormGroup<DescribeTLSInspectionConfigurationRequestFormProperties>({
			TLSInspectionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			TLSInspectionConfigurationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateSubnetsResponse {
		FirewallArn?: string;
		FirewallName?: string;
		SubnetMappings?: Array<SubnetMapping>;
		UpdateToken?: string;
	}
	export interface DisassociateSubnetsResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSubnetsResponseFormGroup() {
		return new FormGroup<DisassociateSubnetsResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateSubnetsRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		SubnetIds: Array<string>;
	}
	export interface DisassociateSubnetsRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSubnetsRequestFormGroup() {
		return new FormGroup<DisassociateSubnetsRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallPoliciesResponse {
		NextToken?: string;
		FirewallPolicies?: Array<FirewallPolicyMetadata>;
	}
	export interface ListFirewallPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallPoliciesResponseFormGroup() {
		return new FormGroup<ListFirewallPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.  */
	export interface FirewallPolicyMetadata {
		Name?: string;
		Arn?: string;
	}

	/** High-level information about a firewall policy, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.  */
	export interface FirewallPolicyMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyMetadataFormGroup() {
		return new FormGroup<FirewallPolicyMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallPoliciesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFirewallPoliciesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFirewallPoliciesRequestFormGroup() {
		return new FormGroup<ListFirewallPoliciesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFirewallsResponse {
		NextToken?: string;
		Firewalls?: Array<FirewallMetadata>;
	}
	export interface ListFirewallsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallsResponseFormGroup() {
		return new FormGroup<ListFirewallsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall. */
	export interface FirewallMetadata {
		FirewallName?: string;
		FirewallArn?: string;
	}

	/** High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall. */
	export interface FirewallMetadataFormProperties {
		FirewallName: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
	}
	export function CreateFirewallMetadataFormGroup() {
		return new FormGroup<FirewallMetadataFormProperties>({
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallsRequest {
		NextToken?: string;
		VpcIds?: Array<string>;
		MaxResults?: number | null;
	}
	export interface ListFirewallsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFirewallsRequestFormGroup() {
		return new FormGroup<ListFirewallsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRuleGroupsResponse {
		NextToken?: string;
		RuleGroups?: Array<RuleGroupMetadata>;
	}
	export interface ListRuleGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuleGroupsResponseFormGroup() {
		return new FormGroup<ListRuleGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group. */
	export interface RuleGroupMetadata {
		Name?: string;
		Arn?: string;
	}

	/** High-level information about a rule group, returned by <a>ListRuleGroups</a>. You can use the information provided in the metadata to retrieve and manage a rule group. */
	export interface RuleGroupMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupMetadataFormGroup() {
		return new FormGroup<RuleGroupMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRuleGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Scope?: ResourceManagedStatus;
		ManagedType?: ResourceManagedType;
		Type?: RuleGroupType;
	}
	export interface ListRuleGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Scope: FormControl<ResourceManagedStatus | null | undefined>,
		ManagedType: FormControl<ResourceManagedType | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
	}
	export function CreateListRuleGroupsRequestFormGroup() {
		return new FormGroup<ListRuleGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Scope: new FormControl<ResourceManagedStatus | null | undefined>(undefined),
			ManagedType: new FormControl<ResourceManagedType | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
		});

	}

	export enum ResourceManagedStatus { MANAGED = 'MANAGED', ACCOUNT = 'ACCOUNT' }

	export enum ResourceManagedType { AWS_MANAGED_THREAT_SIGNATURES = 'AWS_MANAGED_THREAT_SIGNATURES', AWS_MANAGED_DOMAIN_LISTS = 'AWS_MANAGED_DOMAIN_LISTS' }

	export interface ListTLSInspectionConfigurationsResponse {
		NextToken?: string;
		TLSInspectionConfigurations?: Array<TLSInspectionConfigurationMetadata>;
	}
	export interface ListTLSInspectionConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTLSInspectionConfigurationsResponseFormGroup() {
		return new FormGroup<ListTLSInspectionConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a TLS inspection configuration, returned by <code>ListTLSInspectionConfigurations</code>. You can use the information provided in the metadata to retrieve and manage a TLS configuration. */
	export interface TLSInspectionConfigurationMetadata {
		Name?: string;
		Arn?: string;
	}

	/** High-level information about a TLS inspection configuration, returned by <code>ListTLSInspectionConfigurations</code>. You can use the information provided in the metadata to retrieve and manage a TLS configuration. */
	export interface TLSInspectionConfigurationMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTLSInspectionConfigurationMetadataFormGroup() {
		return new FormGroup<TLSInspectionConfigurationMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTLSInspectionConfigurationsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTLSInspectionConfigurationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTLSInspectionConfigurationsRequestFormGroup() {
		return new FormGroup<ListTLSInspectionConfigurationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		NextToken?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		NextToken?: string;
		MaxResults?: number | null;

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFirewallDeleteProtectionResponse {
		FirewallArn?: string;
		FirewallName?: string;
		DeleteProtection?: boolean | null;
		UpdateToken?: string;
	}
	export interface UpdateFirewallDeleteProtectionResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		DeleteProtection: FormControl<boolean | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallDeleteProtectionResponseFormGroup() {
		return new FormGroup<UpdateFirewallDeleteProtectionResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			DeleteProtection: new FormControl<boolean | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallDeleteProtectionRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		DeleteProtection: boolean;
	}
	export interface UpdateFirewallDeleteProtectionRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,

		/** Required */
		DeleteProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFirewallDeleteProtectionRequestFormGroup() {
		return new FormGroup<UpdateFirewallDeleteProtectionRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			DeleteProtection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceOwnerCheckException {
	}
	export interface ResourceOwnerCheckExceptionFormProperties {
	}
	export function CreateResourceOwnerCheckExceptionFormGroup() {
		return new FormGroup<ResourceOwnerCheckExceptionFormProperties>({
		});

	}

	export interface UpdateFirewallDescriptionResponse {
		FirewallArn?: string;
		FirewallName?: string;
		Description?: string;
		UpdateToken?: string;
	}
	export interface UpdateFirewallDescriptionResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallDescriptionResponseFormGroup() {
		return new FormGroup<UpdateFirewallDescriptionResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallDescriptionRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;
		Description?: string;
	}
	export interface UpdateFirewallDescriptionRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallDescriptionRequestFormGroup() {
		return new FormGroup<UpdateFirewallDescriptionRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallEncryptionConfigurationResponse {
		FirewallArn?: string;
		FirewallName?: string;
		UpdateToken?: string;

		/** A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface UpdateFirewallEncryptionConfigurationResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallEncryptionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateFirewallEncryptionConfigurationResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallEncryptionConfigurationRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-encryption-at-rest.html">Encryption at rest with Amazon Web Services Key Managment Service</a> in the <i>Network Firewall Developer Guide</i>. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface UpdateFirewallEncryptionConfigurationRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallEncryptionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateFirewallEncryptionConfigurationRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallPolicyResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		FirewallPolicyResponse: FirewallPolicyResponse;
	}
	export interface UpdateFirewallPolicyResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallPolicyResponseFormGroup() {
		return new FormGroup<UpdateFirewallPolicyResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFirewallPolicyRequest {

		/** Required */
		UpdateToken: string;
		FirewallPolicyArn?: string;
		FirewallPolicyName?: string;

		/** Required */
		FirewallPolicy: FirewallPolicy;
		Description?: string;
		DryRun?: boolean | null;
		EncryptionConfiguration?: EncryptionConfiguration;
	}
	export interface UpdateFirewallPolicyRequestFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
		FirewallPolicyArn: FormControl<string | null | undefined>,
		FirewallPolicyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFirewallPolicyRequestFormGroup() {
		return new FormGroup<UpdateFirewallPolicyRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallPolicyArn: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallPolicyChangeProtectionResponse {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;
		FirewallPolicyChangeProtection?: boolean | null;
	}
	export interface UpdateFirewallPolicyChangeProtectionResponseFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		FirewallPolicyChangeProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFirewallPolicyChangeProtectionResponseFormGroup() {
		return new FormGroup<UpdateFirewallPolicyChangeProtectionResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyChangeProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallPolicyChangeProtectionRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		FirewallPolicyChangeProtection: boolean;
	}
	export interface UpdateFirewallPolicyChangeProtectionRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,

		/** Required */
		FirewallPolicyChangeProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFirewallPolicyChangeProtectionRequestFormGroup() {
		return new FormGroup<UpdateFirewallPolicyChangeProtectionRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyChangeProtection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLoggingConfigurationResponse {
		FirewallArn?: string;
		FirewallName?: string;

		/** Defines how Network Firewall performs logging for a <a>Firewall</a>. */
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface UpdateLoggingConfigurationResponseFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationResponseFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationResponseFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLoggingConfigurationRequest {
		FirewallArn?: string;
		FirewallName?: string;
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface UpdateLoggingConfigurationRequestFormProperties {
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLoggingConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLoggingConfigurationRequestFormProperties>({
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LogDestinationPermissionException {
	}
	export interface LogDestinationPermissionExceptionFormProperties {
	}
	export function CreateLogDestinationPermissionExceptionFormGroup() {
		return new FormGroup<LogDestinationPermissionExceptionFormProperties>({
		});

	}

	export interface UpdateRuleGroupResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		RuleGroupResponse: RuleGroupResponse;
	}
	export interface UpdateRuleGroupResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupResponseFormGroup() {
		return new FormGroup<UpdateRuleGroupResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRuleGroupRequest {

		/** Required */
		UpdateToken: string;
		RuleGroupArn?: string;
		RuleGroupName?: string;
		RuleGroup?: RuleGroup;
		Rules?: string;
		Type?: RuleGroupType;
		Description?: string;
		DryRun?: boolean | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		SourceMetadata?: SourceMetadata;
	}
	export interface UpdateRuleGroupRequestFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
		RuleGroupArn: FormControl<string | null | undefined>,
		RuleGroupName: FormControl<string | null | undefined>,
		Rules: FormControl<string | null | undefined>,
		Type: FormControl<RuleGroupType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateRuleGroupRequestFormGroup() {
		return new FormGroup<UpdateRuleGroupRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleGroupArn: new FormControl<string | null | undefined>(undefined),
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			Rules: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RuleGroupType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSubnetChangeProtectionResponse {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;
		SubnetChangeProtection?: boolean | null;
	}
	export interface UpdateSubnetChangeProtectionResponseFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,
		SubnetChangeProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSubnetChangeProtectionResponseFormGroup() {
		return new FormGroup<UpdateSubnetChangeProtectionResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			SubnetChangeProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSubnetChangeProtectionRequest {
		UpdateToken?: string;
		FirewallArn?: string;
		FirewallName?: string;

		/** Required */
		SubnetChangeProtection: boolean;
	}
	export interface UpdateSubnetChangeProtectionRequestFormProperties {
		UpdateToken: FormControl<string | null | undefined>,
		FirewallArn: FormControl<string | null | undefined>,
		FirewallName: FormControl<string | null | undefined>,

		/** Required */
		SubnetChangeProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSubnetChangeProtectionRequestFormGroup() {
		return new FormGroup<UpdateSubnetChangeProtectionRequestFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			FirewallArn: new FormControl<string | null | undefined>(undefined),
			FirewallName: new FormControl<string | null | undefined>(undefined),
			SubnetChangeProtection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTLSInspectionConfigurationResponse {

		/** Required */
		UpdateToken: string;

		/** Required */
		TLSInspectionConfigurationResponse: TLSInspectionConfigurationResponse;
	}
	export interface UpdateTLSInspectionConfigurationResponseFormProperties {

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTLSInspectionConfigurationResponseFormGroup() {
		return new FormGroup<UpdateTLSInspectionConfigurationResponseFormProperties>({
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTLSInspectionConfigurationRequest {
		TLSInspectionConfigurationArn?: string;
		TLSInspectionConfigurationName?: string;

		/** Required */
		TLSInspectionConfiguration: TLSInspectionConfiguration;
		Description?: string;
		EncryptionConfiguration?: EncryptionConfiguration;

		/** Required */
		UpdateToken: string;
	}
	export interface UpdateTLSInspectionConfigurationRequestFormProperties {
		TLSInspectionConfigurationArn: FormControl<string | null | undefined>,
		TLSInspectionConfigurationName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTLSInspectionConfigurationRequestFormGroup() {
		return new FormGroup<UpdateTLSInspectionConfigurationRequestFormProperties>({
			TLSInspectionConfigurationArn: new FormControl<string | null | undefined>(undefined),
			TLSInspectionConfigurationName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttachmentStatus { CREATING = 'CREATING', DELETING = 'DELETING', FAILED = 'FAILED', ERROR = 'ERROR', SCALING = 'SCALING', READY = 'READY' }


	/** The configuration and status for a single subnet that you've specified for use by the Network Firewall firewall. This is part of the <a>FirewallStatus</a>. */
	export interface Attachment {
		SubnetId?: string;
		EndpointId?: string;
		Status?: AttachmentStatus;
		StatusMessage?: string;
	}

	/** The configuration and status for a single subnet that you've specified for use by the Network Firewall firewall. This is part of the <a>FirewallStatus</a>. */
	export interface AttachmentFormProperties {
		SubnetId: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		Status: FormControl<AttachmentStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AttachmentStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>.  */
	export interface IPSet {

		/** Required */
		Definition: Array<string>;
	}

	/** A list of IP addresses and address ranges, in CIDR notation. This is part of a <a>RuleVariables</a>.  */
	export interface IPSetFormProperties {
	}
	export function CreateIPSetFormGroup() {
		return new FormGroup<IPSetFormProperties>({
		});

	}


	/** General information about the IP set. */
	export interface IPSetMetadata {
		ResolvedCIDRCount?: number | null;
	}

	/** General information about the IP set. */
	export interface IPSetMetadataFormProperties {
		ResolvedCIDRCount: FormControl<number | null | undefined>,
	}
	export function CreateIPSetMetadataFormGroup() {
		return new FormGroup<IPSetMetadataFormProperties>({
			ResolvedCIDRCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p> */
	export interface IPSetReference {
		ReferenceArn?: string;
	}

	/** <p>Configures one or more IP set references for a Suricata-compatible rule group. This is used in <a>CreateRuleGroup</a> or <a>UpdateRuleGroup</a>. An IP set reference is a rule variable that references resources that you create and manage in another Amazon Web Services service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the resource you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references">Using IP set references</a> in the <i>Network Firewall Developer Guide</i>.</p> <p> Network Firewall currently supports <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Amazon VPC prefix lists</a> and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-referencing-resource-groups">resource groups</a> in IP set references. </p> */
	export interface IPSetReferenceFormProperties {
		ReferenceArn: FormControl<string | null | undefined>,
	}
	export function CreateIPSetReferenceFormGroup() {
		return new FormGroup<IPSetReferenceFormProperties>({
			ReferenceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PerObjectSyncStatus { PENDING = 'PENDING', IN_SYNC = 'IN_SYNC', CAPACITY_CONSTRAINED = 'CAPACITY_CONSTRAINED' }


	/** Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall. */
	export interface PerObjectStatus {
		SyncStatus?: ConfigurationSyncState;
		UpdateToken?: string;
	}

	/** Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall. */
	export interface PerObjectStatusFormProperties {
		SyncStatus: FormControl<ConfigurationSyncState | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
	}
	export function CreatePerObjectStatusFormGroup() {
		return new FormGroup<PerObjectStatusFormProperties>({
			SyncStatus: new FormControl<ConfigurationSyncState | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of port ranges for use in the rules in a rule group.  */
	export interface PortSet {
		Definition?: Array<string>;
	}

	/** A set of port ranges for use in the rules in a rule group.  */
	export interface PortSetFormProperties {
	}
	export function CreatePortSetFormGroup() {
		return new FormGroup<PortSetFormProperties>({
		});

	}

	export interface SyncStateConfig {
	}
	export interface SyncStateConfigFormProperties {
	}
	export function CreateSyncStateConfigFormGroup() {
		return new FormGroup<SyncStateConfigFormProperties>({
		});

	}


	/** <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p> */
	export interface SyncState {
		Attachment?: Attachment;
		Config?: SyncStateConfig;
	}

	/** <p>The status of the firewall endpoint and firewall policy configuration for a single VPC subnet. </p> <p>For each VPC subnet that you associate with a firewall, Network Firewall does the following: </p> <ul> <li> <p>Instantiates a firewall endpoint in the subnet, ready to take traffic.</p> </li> <li> <p>Configures the endpoint with the current firewall policy settings, to provide the filtering behavior for the endpoint.</p> </li> </ul> <p>When you update a firewall, for example to add a subnet association or change a rule group in the firewall policy, the affected sync states reflect out-of-sync or not ready status until the changes are complete. </p> */
	export interface SyncStateFormProperties {
	}
	export function CreateSyncStateFormGroup() {
		return new FormGroup<SyncStateFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy
		 * @return {AssociateFirewallPolicyResponse} Success
		 */
		AssociateFirewallPolicy(requestBody: AssociateFirewallPolicyRequest): Observable<AssociateFirewallPolicyResponse> {
			return this.http.post<AssociateFirewallPolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets
		 * @return {AssociateSubnetsResponse} Success
		 */
		AssociateSubnets(requestBody: AssociateSubnetsRequest): Observable<AssociateSubnetsResponse> {
			return this.http.post<AssociateSubnetsResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.CreateFirewall
		 * @return {CreateFirewallResponse} Success
		 */
		CreateFirewall(requestBody: CreateFirewallRequest): Observable<CreateFirewallResponse> {
			return this.http.post<CreateFirewallResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy
		 * @return {CreateFirewallPolicyResponse} Success
		 */
		CreateFirewallPolicy(requestBody: CreateFirewallPolicyRequest): Observable<CreateFirewallPolicyResponse> {
			return this.http.post<CreateFirewallPolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup
		 * @return {CreateRuleGroupResponse} Success
		 */
		CreateRuleGroup(requestBody: CreateRuleGroupRequest): Observable<CreateRuleGroupResponse> {
			return this.http.post<CreateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration
		 * @return {CreateTLSInspectionConfigurationResponse} Success
		 */
		CreateTLSInspectionConfiguration(requestBody: CreateTLSInspectionConfigurationRequest): Observable<CreateTLSInspectionConfigurationResponse> {
			return this.http.post<CreateTLSInspectionConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall
		 * @return {DeleteFirewallResponse} Success
		 */
		DeleteFirewall(requestBody: DeleteFirewallRequest): Observable<DeleteFirewallResponse> {
			return this.http.post<DeleteFirewallResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified <a>FirewallPolicy</a>.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy
		 * @return {DeleteFirewallPolicyResponse} Success
		 */
		DeleteFirewallPolicy(requestBody: DeleteFirewallPolicyRequest): Observable<DeleteFirewallPolicyResponse> {
			return this.http.post<DeleteFirewallPolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified <a>RuleGroup</a>.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup
		 * @return {DeleteRuleGroupResponse} Success
		 */
		DeleteRuleGroup(requestBody: DeleteRuleGroupRequest): Observable<DeleteRuleGroupResponse> {
			return this.http.post<DeleteRuleGroupResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified <a>TLSInspectionConfiguration</a>.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration
		 * @return {DeleteTLSInspectionConfigurationResponse} Success
		 */
		DeleteTLSInspectionConfiguration(requestBody: DeleteTLSInspectionConfigurationRequest): Observable<DeleteTLSInspectionConfigurationResponse> {
			return this.http.post<DeleteTLSInspectionConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data objects for the specified firewall.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall
		 * @return {DescribeFirewallResponse} Success
		 */
		DescribeFirewall(requestBody: DescribeFirewallRequest): Observable<DescribeFirewallResponse> {
			return this.http.post<DescribeFirewallResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data objects for the specified firewall policy.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy
		 * @return {DescribeFirewallPolicyResponse} Success
		 */
		DescribeFirewallPolicy(requestBody: DescribeFirewallPolicyRequest): Observable<DescribeFirewallPolicyResponse> {
			return this.http.post<DescribeFirewallPolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the logging configuration for the specified firewall.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration
		 * @return {DescribeLoggingConfigurationResponse} Success
		 */
		DescribeLoggingConfiguration(requestBody: DescribeLoggingConfigurationRequest): Observable<DescribeLoggingConfigurationResponse> {
			return this.http.post<DescribeLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy
		 * @return {DescribeResourcePolicyResponse} Success
		 */
		DescribeResourcePolicy(requestBody: DescribeResourcePolicyRequest): Observable<DescribeResourcePolicyResponse> {
			return this.http.post<DescribeResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data objects for the specified rule group.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup
		 * @return {DescribeRuleGroupResponse} Success
		 */
		DescribeRuleGroup(requestBody: DescribeRuleGroupRequest): Observable<DescribeRuleGroupResponse> {
			return this.http.post<DescribeRuleGroupResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata
		 * @return {DescribeRuleGroupMetadataResponse} Success
		 */
		DescribeRuleGroupMetadata(requestBody: DescribeRuleGroupMetadataRequest): Observable<DescribeRuleGroupMetadataResponse> {
			return this.http.post<DescribeRuleGroupMetadataResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data objects for the specified TLS inspection configuration.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration
		 * @return {DescribeTLSInspectionConfigurationResponse} Success
		 */
		DescribeTLSInspectionConfiguration(requestBody: DescribeTLSInspectionConfigurationRequest): Observable<DescribeTLSInspectionConfigurationResponse> {
			return this.http.post<DescribeTLSInspectionConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets
		 * @return {DisassociateSubnetsResponse} Success
		 */
		DisassociateSubnets(requestBody: DisassociateSubnetsRequest): Observable<DisassociateSubnetsResponse> {
			return this.http.post<DisassociateSubnetsResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallPoliciesResponse} Success
		 */
		ListFirewallPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallPoliciesRequest): Observable<ListFirewallPoliciesResponse> {
			return this.http.post<ListFirewallPoliciesResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.ListFirewalls
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallsResponse} Success
		 */
		ListFirewalls(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallsRequest): Observable<ListFirewallsResponse> {
			return this.http.post<ListFirewallsResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRuleGroupsResponse} Success
		 */
		ListRuleGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRuleGroupsRequest): Observable<ListRuleGroupsResponse> {
			return this.http.post<ListRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTLSInspectionConfigurationsResponse} Success
		 */
		ListTLSInspectionConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTLSInspectionConfigurationsRequest): Observable<ListTLSInspectionConfigurationsResponse> {
			return this.http.post<ListTLSInspectionConfigurationsResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection
		 * @return {UpdateFirewallDeleteProtectionResponse} Success
		 */
		UpdateFirewallDeleteProtection(requestBody: UpdateFirewallDeleteProtectionRequest): Observable<UpdateFirewallDeleteProtectionResponse> {
			return this.http.post<UpdateFirewallDeleteProtectionResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription
		 * @return {UpdateFirewallDescriptionResponse} Success
		 */
		UpdateFirewallDescription(requestBody: UpdateFirewallDescriptionRequest): Observable<UpdateFirewallDescriptionResponse> {
			return this.http.post<UpdateFirewallDescriptionResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A complex type that contains settings for encryption of your firewall resources.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration
		 * @return {UpdateFirewallEncryptionConfigurationResponse} Success
		 */
		UpdateFirewallEncryptionConfiguration(requestBody: UpdateFirewallEncryptionConfigurationRequest): Observable<UpdateFirewallEncryptionConfigurationResponse> {
			return this.http.post<UpdateFirewallEncryptionConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the properties of the specified firewall policy.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy
		 * @return {UpdateFirewallPolicyResponse} Success
		 */
		UpdateFirewallPolicy(requestBody: UpdateFirewallPolicyRequest): Observable<UpdateFirewallPolicyResponse> {
			return this.http.post<UpdateFirewallPolicyResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection
		 * @return {UpdateFirewallPolicyChangeProtectionResponse} Success
		 */
		UpdateFirewallPolicyChangeProtection(requestBody: UpdateFirewallPolicyChangeProtectionRequest): Observable<UpdateFirewallPolicyChangeProtectionResponse> {
			return this.http.post<UpdateFirewallPolicyChangeProtectionResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration
		 * @return {UpdateLoggingConfigurationResponse} Success
		 */
		UpdateLoggingConfiguration(requestBody: UpdateLoggingConfigurationRequest): Observable<UpdateLoggingConfigurationResponse> {
			return this.http.post<UpdateLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup
		 * @return {UpdateRuleGroupResponse} Success
		 */
		UpdateRuleGroup(requestBody: UpdateRuleGroupRequest): Observable<UpdateRuleGroupResponse> {
			return this.http.post<UpdateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p/>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection
		 * @return {UpdateSubnetChangeProtectionResponse} Success
		 */
		UpdateSubnetChangeProtection(requestBody: UpdateSubnetChangeProtectionRequest): Observable<UpdateSubnetChangeProtectionResponse> {
			return this.http.post<UpdateSubnetChangeProtectionResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>
		 * Post #X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration
		 * @return {UpdateTLSInspectionConfigurationResponse} Success
		 */
		UpdateTLSInspectionConfiguration(requestBody: UpdateTLSInspectionConfigurationRequest): Observable<UpdateTLSInspectionConfigurationResponse> {
			return this.http.post<UpdateTLSInspectionConfigurationResponse>(this.baseUri + '#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFirewallPolicyX_Amz_Target { 'NetworkFirewall_20201112.AssociateFirewallPolicy' = 'NetworkFirewall_20201112.AssociateFirewallPolicy' }

	export enum AssociateSubnetsX_Amz_Target { 'NetworkFirewall_20201112.AssociateSubnets' = 'NetworkFirewall_20201112.AssociateSubnets' }

	export enum CreateFirewallX_Amz_Target { 'NetworkFirewall_20201112.CreateFirewall' = 'NetworkFirewall_20201112.CreateFirewall' }

	export enum CreateFirewallPolicyX_Amz_Target { 'NetworkFirewall_20201112.CreateFirewallPolicy' = 'NetworkFirewall_20201112.CreateFirewallPolicy' }

	export enum CreateRuleGroupX_Amz_Target { 'NetworkFirewall_20201112.CreateRuleGroup' = 'NetworkFirewall_20201112.CreateRuleGroup' }

	export enum CreateTLSInspectionConfigurationX_Amz_Target { 'NetworkFirewall_20201112.CreateTLSInspectionConfiguration' = 'NetworkFirewall_20201112.CreateTLSInspectionConfiguration' }

	export enum DeleteFirewallX_Amz_Target { 'NetworkFirewall_20201112.DeleteFirewall' = 'NetworkFirewall_20201112.DeleteFirewall' }

	export enum DeleteFirewallPolicyX_Amz_Target { 'NetworkFirewall_20201112.DeleteFirewallPolicy' = 'NetworkFirewall_20201112.DeleteFirewallPolicy' }

	export enum DeleteResourcePolicyX_Amz_Target { 'NetworkFirewall_20201112.DeleteResourcePolicy' = 'NetworkFirewall_20201112.DeleteResourcePolicy' }

	export enum DeleteRuleGroupX_Amz_Target { 'NetworkFirewall_20201112.DeleteRuleGroup' = 'NetworkFirewall_20201112.DeleteRuleGroup' }

	export enum DeleteTLSInspectionConfigurationX_Amz_Target { 'NetworkFirewall_20201112.DeleteTLSInspectionConfiguration' = 'NetworkFirewall_20201112.DeleteTLSInspectionConfiguration' }

	export enum DescribeFirewallX_Amz_Target { 'NetworkFirewall_20201112.DescribeFirewall' = 'NetworkFirewall_20201112.DescribeFirewall' }

	export enum DescribeFirewallPolicyX_Amz_Target { 'NetworkFirewall_20201112.DescribeFirewallPolicy' = 'NetworkFirewall_20201112.DescribeFirewallPolicy' }

	export enum DescribeLoggingConfigurationX_Amz_Target { 'NetworkFirewall_20201112.DescribeLoggingConfiguration' = 'NetworkFirewall_20201112.DescribeLoggingConfiguration' }

	export enum DescribeResourcePolicyX_Amz_Target { 'NetworkFirewall_20201112.DescribeResourcePolicy' = 'NetworkFirewall_20201112.DescribeResourcePolicy' }

	export enum DescribeRuleGroupX_Amz_Target { 'NetworkFirewall_20201112.DescribeRuleGroup' = 'NetworkFirewall_20201112.DescribeRuleGroup' }

	export enum DescribeRuleGroupMetadataX_Amz_Target { 'NetworkFirewall_20201112.DescribeRuleGroupMetadata' = 'NetworkFirewall_20201112.DescribeRuleGroupMetadata' }

	export enum DescribeTLSInspectionConfigurationX_Amz_Target { 'NetworkFirewall_20201112.DescribeTLSInspectionConfiguration' = 'NetworkFirewall_20201112.DescribeTLSInspectionConfiguration' }

	export enum DisassociateSubnetsX_Amz_Target { 'NetworkFirewall_20201112.DisassociateSubnets' = 'NetworkFirewall_20201112.DisassociateSubnets' }

	export enum ListFirewallPoliciesX_Amz_Target { 'NetworkFirewall_20201112.ListFirewallPolicies' = 'NetworkFirewall_20201112.ListFirewallPolicies' }

	export enum ListFirewallsX_Amz_Target { 'NetworkFirewall_20201112.ListFirewalls' = 'NetworkFirewall_20201112.ListFirewalls' }

	export enum ListRuleGroupsX_Amz_Target { 'NetworkFirewall_20201112.ListRuleGroups' = 'NetworkFirewall_20201112.ListRuleGroups' }

	export enum ListTLSInspectionConfigurationsX_Amz_Target { 'NetworkFirewall_20201112.ListTLSInspectionConfigurations' = 'NetworkFirewall_20201112.ListTLSInspectionConfigurations' }

	export enum ListTagsForResourceX_Amz_Target { 'NetworkFirewall_20201112.ListTagsForResource' = 'NetworkFirewall_20201112.ListTagsForResource' }

	export enum PutResourcePolicyX_Amz_Target { 'NetworkFirewall_20201112.PutResourcePolicy' = 'NetworkFirewall_20201112.PutResourcePolicy' }

	export enum TagResourceX_Amz_Target { 'NetworkFirewall_20201112.TagResource' = 'NetworkFirewall_20201112.TagResource' }

	export enum UntagResourceX_Amz_Target { 'NetworkFirewall_20201112.UntagResource' = 'NetworkFirewall_20201112.UntagResource' }

	export enum UpdateFirewallDeleteProtectionX_Amz_Target { 'NetworkFirewall_20201112.UpdateFirewallDeleteProtection' = 'NetworkFirewall_20201112.UpdateFirewallDeleteProtection' }

	export enum UpdateFirewallDescriptionX_Amz_Target { 'NetworkFirewall_20201112.UpdateFirewallDescription' = 'NetworkFirewall_20201112.UpdateFirewallDescription' }

	export enum UpdateFirewallEncryptionConfigurationX_Amz_Target { 'NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration' = 'NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration' }

	export enum UpdateFirewallPolicyX_Amz_Target { 'NetworkFirewall_20201112.UpdateFirewallPolicy' = 'NetworkFirewall_20201112.UpdateFirewallPolicy' }

	export enum UpdateFirewallPolicyChangeProtectionX_Amz_Target { 'NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection' = 'NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection' }

	export enum UpdateLoggingConfigurationX_Amz_Target { 'NetworkFirewall_20201112.UpdateLoggingConfiguration' = 'NetworkFirewall_20201112.UpdateLoggingConfiguration' }

	export enum UpdateRuleGroupX_Amz_Target { 'NetworkFirewall_20201112.UpdateRuleGroup' = 'NetworkFirewall_20201112.UpdateRuleGroup' }

	export enum UpdateSubnetChangeProtectionX_Amz_Target { 'NetworkFirewall_20201112.UpdateSubnetChangeProtection' = 'NetworkFirewall_20201112.UpdateSubnetChangeProtection' }

	export enum UpdateTLSInspectionConfigurationX_Amz_Target { 'NetworkFirewall_20201112.UpdateTLSInspectionConfiguration' = 'NetworkFirewall_20201112.UpdateTLSInspectionConfiguration' }

}

