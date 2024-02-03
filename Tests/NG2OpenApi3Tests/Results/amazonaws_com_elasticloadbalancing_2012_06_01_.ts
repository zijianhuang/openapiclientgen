import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the output of AddTags. */
	export interface AddTagsOutput {
	}

	/** Contains the output of AddTags. */
	export interface AddTagsOutputFormProperties {
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
		});

	}


	/** Information about a tag. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Information about a tag. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessPointNotFoundException {
	}
	export interface AccessPointNotFoundExceptionFormProperties {
	}
	export function CreateAccessPointNotFoundExceptionFormGroup() {
		return new FormGroup<AccessPointNotFoundExceptionFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface DuplicateTagKeysException {
	}
	export interface DuplicateTagKeysExceptionFormProperties {
	}
	export function CreateDuplicateTagKeysExceptionFormGroup() {
		return new FormGroup<DuplicateTagKeysExceptionFormProperties>({
		});

	}


	/** Contains the output of ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerOutput {
		SecurityGroups?: Array<string>;
	}

	/** Contains the output of ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerOutputFormProperties {
	}
	export function CreateApplySecurityGroupsToLoadBalancerOutputFormGroup() {
		return new FormGroup<ApplySecurityGroupsToLoadBalancerOutputFormProperties>({
		});

	}

	export interface InvalidConfigurationRequestException {
	}
	export interface InvalidConfigurationRequestExceptionFormProperties {
	}
	export function CreateInvalidConfigurationRequestExceptionFormGroup() {
		return new FormGroup<InvalidConfigurationRequestExceptionFormProperties>({
		});

	}

	export interface InvalidSecurityGroupException {
	}
	export interface InvalidSecurityGroupExceptionFormProperties {
	}
	export function CreateInvalidSecurityGroupExceptionFormGroup() {
		return new FormGroup<InvalidSecurityGroupExceptionFormProperties>({
		});

	}


	/** Contains the output of AttachLoadBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsOutput {
		Subnets?: Array<string>;
	}

	/** Contains the output of AttachLoadBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsOutputFormProperties {
	}
	export function CreateAttachLoadBalancerToSubnetsOutputFormGroup() {
		return new FormGroup<AttachLoadBalancerToSubnetsOutputFormProperties>({
		});

	}

	export interface SubnetNotFoundException {
	}
	export interface SubnetNotFoundExceptionFormProperties {
	}
	export function CreateSubnetNotFoundExceptionFormGroup() {
		return new FormGroup<SubnetNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidSubnetException {
	}
	export interface InvalidSubnetExceptionFormProperties {
	}
	export function CreateInvalidSubnetExceptionFormGroup() {
		return new FormGroup<InvalidSubnetExceptionFormProperties>({
		});

	}


	/** Contains the output of ConfigureHealthCheck. */
	export interface ConfigureHealthCheckOutput {
		HealthCheck?: HealthCheck;
	}

	/** Contains the output of ConfigureHealthCheck. */
	export interface ConfigureHealthCheckOutputFormProperties {
	}
	export function CreateConfigureHealthCheckOutputFormGroup() {
		return new FormGroup<ConfigureHealthCheckOutputFormProperties>({
		});

	}


	/** Information about a health check. */
	export interface HealthCheck {

		/** Required */
		Target: string;

		/** Required */
		Interval: number;

		/** Required */
		Timeout: number;

		/** Required */
		UnhealthyThreshold: number;

		/** Required */
		HealthyThreshold: number;
	}

	/** Information about a health check. */
	export interface HealthCheckFormProperties {

		/** Required */
		Target: FormControl<string | null | undefined>,

		/** Required */
		Interval: FormControl<number | null | undefined>,

		/** Required */
		Timeout: FormControl<number | null | undefined>,

		/** Required */
		UnhealthyThreshold: FormControl<number | null | undefined>,

		/** Required */
		HealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UnhealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the output for CreateAppCookieStickinessPolicy. */
	export interface CreateAppCookieStickinessPolicyOutput {
	}

	/** Contains the output for CreateAppCookieStickinessPolicy. */
	export interface CreateAppCookieStickinessPolicyOutputFormProperties {
	}
	export function CreateCreateAppCookieStickinessPolicyOutputFormGroup() {
		return new FormGroup<CreateAppCookieStickinessPolicyOutputFormProperties>({
		});

	}

	export interface DuplicatePolicyNameException {
	}
	export interface DuplicatePolicyNameExceptionFormProperties {
	}
	export function CreateDuplicatePolicyNameExceptionFormGroup() {
		return new FormGroup<DuplicatePolicyNameExceptionFormProperties>({
		});

	}

	export interface TooManyPoliciesException {
	}
	export interface TooManyPoliciesExceptionFormProperties {
	}
	export function CreateTooManyPoliciesExceptionFormGroup() {
		return new FormGroup<TooManyPoliciesExceptionFormProperties>({
		});

	}


	/** Contains the output for CreateLBCookieStickinessPolicy. */
	export interface CreateLBCookieStickinessPolicyOutput {
	}

	/** Contains the output for CreateLBCookieStickinessPolicy. */
	export interface CreateLBCookieStickinessPolicyOutputFormProperties {
	}
	export function CreateCreateLBCookieStickinessPolicyOutputFormGroup() {
		return new FormGroup<CreateLBCookieStickinessPolicyOutputFormProperties>({
		});

	}


	/** Contains the output for CreateLoadBalancer. */
	export interface CreateAccessPointOutput {
		DNSName?: string;
	}

	/** Contains the output for CreateLoadBalancer. */
	export interface CreateAccessPointOutputFormProperties {
		DNSName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointOutputFormGroup() {
		return new FormGroup<CreateAccessPointOutputFormProperties>({
			DNSName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p> */
	export interface Listener {

		/** Required */
		Protocol: string;

		/** Required */
		LoadBalancerPort: number;
		InstanceProtocol?: string;

		/** Required */
		InstancePort: number;
		SSLCertificateId?: string;
	}

	/** <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p> */
	export interface ListenerFormProperties {

		/** Required */
		Protocol: FormControl<string | null | undefined>,

		/** Required */
		LoadBalancerPort: FormControl<number | null | undefined>,
		InstanceProtocol: FormControl<string | null | undefined>,

		/** Required */
		InstancePort: FormControl<number | null | undefined>,
		SSLCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
			Protocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LoadBalancerPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			InstanceProtocol: new FormControl<string | null | undefined>(undefined),
			InstancePort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SSLCertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DuplicateAccessPointNameException {
	}
	export interface DuplicateAccessPointNameExceptionFormProperties {
	}
	export function CreateDuplicateAccessPointNameExceptionFormGroup() {
		return new FormGroup<DuplicateAccessPointNameExceptionFormProperties>({
		});

	}

	export interface TooManyAccessPointsException {
	}
	export interface TooManyAccessPointsExceptionFormProperties {
	}
	export function CreateTooManyAccessPointsExceptionFormGroup() {
		return new FormGroup<TooManyAccessPointsExceptionFormProperties>({
		});

	}

	export interface CertificateNotFoundException {
	}
	export interface CertificateNotFoundExceptionFormProperties {
	}
	export function CreateCertificateNotFoundExceptionFormGroup() {
		return new FormGroup<CertificateNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidSchemeException {
	}
	export interface InvalidSchemeExceptionFormProperties {
	}
	export function CreateInvalidSchemeExceptionFormGroup() {
		return new FormGroup<InvalidSchemeExceptionFormProperties>({
		});

	}

	export interface UnsupportedProtocolException {
	}
	export interface UnsupportedProtocolExceptionFormProperties {
	}
	export function CreateUnsupportedProtocolExceptionFormGroup() {
		return new FormGroup<UnsupportedProtocolExceptionFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}


	/** Contains the parameters for CreateLoadBalancerListener. */
	export interface CreateLoadBalancerListenerOutput {
	}

	/** Contains the parameters for CreateLoadBalancerListener. */
	export interface CreateLoadBalancerListenerOutputFormProperties {
	}
	export function CreateCreateLoadBalancerListenerOutputFormGroup() {
		return new FormGroup<CreateLoadBalancerListenerOutputFormProperties>({
		});

	}

	export interface DuplicateListenerException {
	}
	export interface DuplicateListenerExceptionFormProperties {
	}
	export function CreateDuplicateListenerExceptionFormGroup() {
		return new FormGroup<DuplicateListenerExceptionFormProperties>({
		});

	}


	/** Contains the output of CreateLoadBalancerPolicy. */
	export interface CreateLoadBalancerPolicyOutput {
	}

	/** Contains the output of CreateLoadBalancerPolicy. */
	export interface CreateLoadBalancerPolicyOutputFormProperties {
	}
	export function CreateCreateLoadBalancerPolicyOutputFormGroup() {
		return new FormGroup<CreateLoadBalancerPolicyOutputFormProperties>({
		});

	}


	/** Information about a policy attribute. */
	export interface PolicyAttribute {
		AttributeName?: string;
		AttributeValue?: string;
	}

	/** Information about a policy attribute. */
	export interface PolicyAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAttributeFormGroup() {
		return new FormGroup<PolicyAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyTypeNotFoundException {
	}
	export interface PolicyTypeNotFoundExceptionFormProperties {
	}
	export function CreatePolicyTypeNotFoundExceptionFormGroup() {
		return new FormGroup<PolicyTypeNotFoundExceptionFormProperties>({
		});

	}


	/** Contains the output of DeleteLoadBalancer. */
	export interface DeleteAccessPointOutput {
	}

	/** Contains the output of DeleteLoadBalancer. */
	export interface DeleteAccessPointOutputFormProperties {
	}
	export function CreateDeleteAccessPointOutputFormGroup() {
		return new FormGroup<DeleteAccessPointOutputFormProperties>({
		});

	}


	/** Contains the output of DeleteLoadBalancerListeners. */
	export interface DeleteLoadBalancerListenerOutput {
	}

	/** Contains the output of DeleteLoadBalancerListeners. */
	export interface DeleteLoadBalancerListenerOutputFormProperties {
	}
	export function CreateDeleteLoadBalancerListenerOutputFormGroup() {
		return new FormGroup<DeleteLoadBalancerListenerOutputFormProperties>({
		});

	}


	/** Contains the output of DeleteLoadBalancerPolicy. */
	export interface DeleteLoadBalancerPolicyOutput {
	}

	/** Contains the output of DeleteLoadBalancerPolicy. */
	export interface DeleteLoadBalancerPolicyOutputFormProperties {
	}
	export function CreateDeleteLoadBalancerPolicyOutputFormGroup() {
		return new FormGroup<DeleteLoadBalancerPolicyOutputFormProperties>({
		});

	}


	/** Contains the output of DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsOutput {
		Instances?: Array<Instance>;
	}

	/** Contains the output of DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsOutputFormProperties {
	}
	export function CreateDeregisterEndPointsOutputFormGroup() {
		return new FormGroup<DeregisterEndPointsOutputFormProperties>({
		});

	}


	/** The ID of an EC2 instance. */
	export interface Instance {
		InstanceId?: string;
	}

	/** The ID of an EC2 instance. */
	export interface InstanceFormProperties {
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidEndPointException {
	}
	export interface InvalidEndPointExceptionFormProperties {
	}
	export function CreateInvalidEndPointExceptionFormGroup() {
		return new FormGroup<InvalidEndPointExceptionFormProperties>({
		});

	}

	export interface DescribeAccountLimitsOutput {
		Limits?: Array<Limit>;
		NextMarker?: string;
	}
	export interface DescribeAccountLimitsOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountLimitsOutputFormGroup() {
		return new FormGroup<DescribeAccountLimitsOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Elastic Load Balancing resource limit for your AWS account. */
	export interface Limit {
		Name?: string;
		Max?: string;
	}

	/** Information about an Elastic Load Balancing resource limit for your AWS account. */
	export interface LimitFormProperties {
		Name: FormControl<string | null | undefined>,
		Max: FormControl<string | null | undefined>,
	}
	export function CreateLimitFormGroup() {
		return new FormGroup<LimitFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Max: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output for DescribeInstanceHealth. */
	export interface DescribeEndPointStateOutput {
		InstanceStates?: Array<InstanceState>;
	}

	/** Contains the output for DescribeInstanceHealth. */
	export interface DescribeEndPointStateOutputFormProperties {
	}
	export function CreateDescribeEndPointStateOutputFormGroup() {
		return new FormGroup<DescribeEndPointStateOutputFormProperties>({
		});

	}


	/** Information about the state of an EC2 instance. */
	export interface InstanceState {
		InstanceId?: string;
		State?: string;
		ReasonCode?: string;
		Description?: string;
	}

	/** Information about the state of an EC2 instance. */
	export interface InstanceStateFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		ReasonCode: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateInstanceStateFormGroup() {
		return new FormGroup<InstanceStateFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			ReasonCode: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesOutput {
		LoadBalancerAttributes?: LoadBalancerAttributes;
	}

	/** Contains the output of DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesOutputFormProperties {
	}
	export function CreateDescribeLoadBalancerAttributesOutputFormGroup() {
		return new FormGroup<DescribeLoadBalancerAttributesOutputFormProperties>({
		});

	}


	/** The attributes for a load balancer. */
	export interface LoadBalancerAttributes {
		CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
		AccessLog?: AccessLog;
		ConnectionDraining?: ConnectionDraining;
		ConnectionSettings?: ConnectionSettings;
		AdditionalAttributes?: Array<AdditionalAttribute>;
	}

	/** The attributes for a load balancer. */
	export interface LoadBalancerAttributesFormProperties {
	}
	export function CreateLoadBalancerAttributesFormGroup() {
		return new FormGroup<LoadBalancerAttributesFormProperties>({
		});

	}


	/** Information about the <code>CrossZoneLoadBalancing</code> attribute. */
	export interface CrossZoneLoadBalancing {

		/** Required */
		Enabled: boolean;
	}

	/** Information about the <code>CrossZoneLoadBalancing</code> attribute. */
	export interface CrossZoneLoadBalancingFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCrossZoneLoadBalancingFormGroup() {
		return new FormGroup<CrossZoneLoadBalancingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the <code>AccessLog</code> attribute. */
	export interface AccessLog {

		/** Required */
		Enabled: boolean;
		S3BucketName?: string;
		EmitInterval?: number | null;
		S3BucketPrefix?: string;
	}

	/** Information about the <code>AccessLog</code> attribute. */
	export interface AccessLogFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		EmitInterval: FormControl<number | null | undefined>,
		S3BucketPrefix: FormControl<string | null | undefined>,
	}
	export function CreateAccessLogFormGroup() {
		return new FormGroup<AccessLogFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			EmitInterval: new FormControl<number | null | undefined>(undefined),
			S3BucketPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the <code>ConnectionDraining</code> attribute. */
	export interface ConnectionDraining {

		/** Required */
		Enabled: boolean;
		Timeout?: number | null;
	}

	/** Information about the <code>ConnectionDraining</code> attribute. */
	export interface ConnectionDrainingFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateConnectionDrainingFormGroup() {
		return new FormGroup<ConnectionDrainingFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the <code>ConnectionSettings</code> attribute. */
	export interface ConnectionSettings {

		/** Required */
		IdleTimeout: number;
	}

	/** Information about the <code>ConnectionSettings</code> attribute. */
	export interface ConnectionSettingsFormProperties {

		/** Required */
		IdleTimeout: FormControl<number | null | undefined>,
	}
	export function CreateConnectionSettingsFormGroup() {
		return new FormGroup<ConnectionSettingsFormProperties>({
			IdleTimeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about additional load balancer attributes. */
	export interface AdditionalAttribute {
		Key?: string;
		Value?: string;
	}

	/** Information about additional load balancer attributes. */
	export interface AdditionalAttributeFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalAttributeFormGroup() {
		return new FormGroup<AdditionalAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoadBalancerAttributeNotFoundException {
	}
	export interface LoadBalancerAttributeNotFoundExceptionFormProperties {
	}
	export function CreateLoadBalancerAttributeNotFoundExceptionFormGroup() {
		return new FormGroup<LoadBalancerAttributeNotFoundExceptionFormProperties>({
		});

	}


	/** Contains the output of DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesOutput {
		PolicyDescriptions?: Array<PolicyDescription>;
	}

	/** Contains the output of DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesOutputFormProperties {
	}
	export function CreateDescribeLoadBalancerPoliciesOutputFormGroup() {
		return new FormGroup<DescribeLoadBalancerPoliciesOutputFormProperties>({
		});

	}


	/** Information about a policy. */
	export interface PolicyDescription {
		PolicyName?: string;
		PolicyTypeName?: string;
		PolicyAttributeDescriptions?: Array<PolicyAttributeDescription>;
	}

	/** Information about a policy. */
	export interface PolicyDescriptionFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyTypeName: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDescriptionFormGroup() {
		return new FormGroup<PolicyDescriptionFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a policy attribute. */
	export interface PolicyAttributeDescription {
		AttributeName?: string;
		AttributeValue?: string;
	}

	/** Information about a policy attribute. */
	export interface PolicyAttributeDescriptionFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAttributeDescriptionFormGroup() {
		return new FormGroup<PolicyAttributeDescriptionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyNotFoundException {
	}
	export interface PolicyNotFoundExceptionFormProperties {
	}
	export function CreatePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<PolicyNotFoundExceptionFormProperties>({
		});

	}


	/** Contains the output of DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesOutput {
		PolicyTypeDescriptions?: Array<PolicyTypeDescription>;
	}

	/** Contains the output of DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesOutputFormProperties {
	}
	export function CreateDescribeLoadBalancerPolicyTypesOutputFormGroup() {
		return new FormGroup<DescribeLoadBalancerPolicyTypesOutputFormProperties>({
		});

	}


	/** Information about a policy type. */
	export interface PolicyTypeDescription {
		PolicyTypeName?: string;
		Description?: string;
		PolicyAttributeTypeDescriptions?: Array<PolicyAttributeTypeDescription>;
	}

	/** Information about a policy type. */
	export interface PolicyTypeDescriptionFormProperties {
		PolicyTypeName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePolicyTypeDescriptionFormGroup() {
		return new FormGroup<PolicyTypeDescriptionFormProperties>({
			PolicyTypeName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a policy attribute type. */
	export interface PolicyAttributeTypeDescription {
		AttributeName?: string;
		AttributeType?: string;
		Description?: string;
		DefaultValue?: string;
		Cardinality?: string;
	}

	/** Information about a policy attribute type. */
	export interface PolicyAttributeTypeDescriptionFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		AttributeType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		Cardinality: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAttributeTypeDescriptionFormGroup() {
		return new FormGroup<PolicyAttributeTypeDescriptionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			AttributeType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			Cardinality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsOutput {
		LoadBalancerDescriptions?: Array<LoadBalancerDescription>;
		NextMarker?: string;
	}

	/** Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessPointsOutputFormGroup() {
		return new FormGroup<DescribeAccessPointsOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a load balancer. */
	export interface LoadBalancerDescription {
		LoadBalancerName?: string;
		DNSName?: string;
		CanonicalHostedZoneName?: string;
		CanonicalHostedZoneNameID?: string;
		ListenerDescriptions?: Array<ListenerDescription>;
		Policies?: Policies;
		BackendServerDescriptions?: Array<BackendServerDescription>;
		AvailabilityZones?: Array<string>;
		Subnets?: Array<string>;
		VPCId?: string;
		Instances?: Array<Instance>;
		HealthCheck?: HealthCheck;
		SourceSecurityGroup?: SourceSecurityGroup;
		SecurityGroups?: Array<string>;
		CreatedTime?: Date;
		Scheme?: string;
	}

	/** Information about a load balancer. */
	export interface LoadBalancerDescriptionFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		CanonicalHostedZoneName: FormControl<string | null | undefined>,
		CanonicalHostedZoneNameID: FormControl<string | null | undefined>,
		VPCId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Scheme: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerDescriptionFormGroup() {
		return new FormGroup<LoadBalancerDescriptionFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			CanonicalHostedZoneName: new FormControl<string | null | undefined>(undefined),
			CanonicalHostedZoneNameID: new FormControl<string | null | undefined>(undefined),
			VPCId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Scheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policies enabled for a listener. */
	export interface ListenerDescription {
		Listener?: Listener;
		PolicyNames?: Array<string>;
	}

	/** The policies enabled for a listener. */
	export interface ListenerDescriptionFormProperties {
	}
	export function CreateListenerDescriptionFormGroup() {
		return new FormGroup<ListenerDescriptionFormProperties>({
		});

	}


	/** The policies for a load balancer. */
	export interface Policies {
		AppCookieStickinessPolicies?: Array<AppCookieStickinessPolicy>;
		LBCookieStickinessPolicies?: Array<LBCookieStickinessPolicy>;
		OtherPolicies?: Array<string>;
	}

	/** The policies for a load balancer. */
	export interface PoliciesFormProperties {
	}
	export function CreatePoliciesFormGroup() {
		return new FormGroup<PoliciesFormProperties>({
		});

	}


	/** Information about a policy for application-controlled session stickiness. */
	export interface AppCookieStickinessPolicy {
		PolicyName?: string;
		CookieName?: string;
	}

	/** Information about a policy for application-controlled session stickiness. */
	export interface AppCookieStickinessPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		CookieName: FormControl<string | null | undefined>,
	}
	export function CreateAppCookieStickinessPolicyFormGroup() {
		return new FormGroup<AppCookieStickinessPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			CookieName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a policy for duration-based session stickiness. */
	export interface LBCookieStickinessPolicy {
		PolicyName?: string;
		CookieExpirationPeriod?: number | null;
	}

	/** Information about a policy for duration-based session stickiness. */
	export interface LBCookieStickinessPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		CookieExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateLBCookieStickinessPolicyFormGroup() {
		return new FormGroup<LBCookieStickinessPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			CookieExpirationPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the configuration of an EC2 instance. */
	export interface BackendServerDescription {
		InstancePort?: number | null;
		PolicyNames?: Array<string>;
	}

	/** Information about the configuration of an EC2 instance. */
	export interface BackendServerDescriptionFormProperties {
		InstancePort: FormControl<number | null | undefined>,
	}
	export function CreateBackendServerDescriptionFormGroup() {
		return new FormGroup<BackendServerDescriptionFormProperties>({
			InstancePort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a source security group. */
	export interface SourceSecurityGroup {
		OwnerAlias?: string;
		GroupName?: string;
	}

	/** Information about a source security group. */
	export interface SourceSecurityGroupFormProperties {
		OwnerAlias: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateSourceSecurityGroupFormGroup() {
		return new FormGroup<SourceSecurityGroupFormProperties>({
			OwnerAlias: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DependencyThrottleException {
	}
	export interface DependencyThrottleExceptionFormProperties {
	}
	export function CreateDependencyThrottleExceptionFormGroup() {
		return new FormGroup<DependencyThrottleExceptionFormProperties>({
		});

	}


	/** Contains the output for DescribeTags. */
	export interface DescribeTagsOutput {
		TagDescriptions?: Array<TagDescription>;
	}

	/** Contains the output for DescribeTags. */
	export interface DescribeTagsOutputFormProperties {
	}
	export function CreateDescribeTagsOutputFormGroup() {
		return new FormGroup<DescribeTagsOutputFormProperties>({
		});

	}


	/** The tags associated with a load balancer. */
	export interface TagDescription {
		LoadBalancerName?: string;
		Tags?: Array<Tag>;
	}

	/** The tags associated with a load balancer. */
	export interface TagDescriptionFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateTagDescriptionFormGroup() {
		return new FormGroup<TagDescriptionFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsOutput {
		Subnets?: Array<string>;
	}

	/** Contains the output of DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsOutputFormProperties {
	}
	export function CreateDetachLoadBalancerFromSubnetsOutputFormGroup() {
		return new FormGroup<DetachLoadBalancerFromSubnetsOutputFormProperties>({
		});

	}


	/** Contains the output for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesOutput {
		AvailabilityZones?: Array<string>;
	}

	/** Contains the output for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesOutputFormProperties {
	}
	export function CreateRemoveAvailabilityZonesOutputFormGroup() {
		return new FormGroup<RemoveAvailabilityZonesOutputFormProperties>({
		});

	}


	/** Contains the output of EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesOutput {
		AvailabilityZones?: Array<string>;
	}

	/** Contains the output of EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesOutputFormProperties {
	}
	export function CreateAddAvailabilityZonesOutputFormGroup() {
		return new FormGroup<AddAvailabilityZonesOutputFormProperties>({
		});

	}


	/** Contains the output of ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesOutput {
		LoadBalancerName?: string;
		LoadBalancerAttributes?: LoadBalancerAttributes;
	}

	/** Contains the output of ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesOutputFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateModifyLoadBalancerAttributesOutputFormGroup() {
		return new FormGroup<ModifyLoadBalancerAttributesOutputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsOutput {
		Instances?: Array<Instance>;
	}

	/** Contains the output of RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsOutputFormProperties {
	}
	export function CreateRegisterEndPointsOutputFormGroup() {
		return new FormGroup<RegisterEndPointsOutputFormProperties>({
		});

	}


	/** Contains the output of RemoveTags. */
	export interface RemoveTagsOutput {
	}

	/** Contains the output of RemoveTags. */
	export interface RemoveTagsOutputFormProperties {
	}
	export function CreateRemoveTagsOutputFormGroup() {
		return new FormGroup<RemoveTagsOutputFormProperties>({
		});

	}


	/** The key of a tag. */
	export interface TagKeyOnly {
		Key?: string;
	}

	/** The key of a tag. */
	export interface TagKeyOnlyFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagKeyOnlyFormGroup() {
		return new FormGroup<TagKeyOnlyFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the output of SetLoadBalancerListenerSSLCertificate. */
	export interface SetLoadBalancerListenerSSLCertificateOutput {
	}

	/** Contains the output of SetLoadBalancerListenerSSLCertificate. */
	export interface SetLoadBalancerListenerSSLCertificateOutputFormProperties {
	}
	export function CreateSetLoadBalancerListenerSSLCertificateOutputFormGroup() {
		return new FormGroup<SetLoadBalancerListenerSSLCertificateOutputFormProperties>({
		});

	}

	export interface ListenerNotFoundException {
	}
	export interface ListenerNotFoundExceptionFormProperties {
	}
	export function CreateListenerNotFoundExceptionFormGroup() {
		return new FormGroup<ListenerNotFoundExceptionFormProperties>({
		});

	}


	/** Contains the output of SetLoadBalancerPoliciesForBackendServer. */
	export interface SetLoadBalancerPoliciesForBackendServerOutput {
	}

	/** Contains the output of SetLoadBalancerPoliciesForBackendServer. */
	export interface SetLoadBalancerPoliciesForBackendServerOutputFormProperties {
	}
	export function CreateSetLoadBalancerPoliciesForBackendServerOutputFormGroup() {
		return new FormGroup<SetLoadBalancerPoliciesForBackendServerOutputFormProperties>({
		});

	}


	/** Contains the output of SetLoadBalancePoliciesOfListener. */
	export interface SetLoadBalancerPoliciesOfListenerOutput {
	}

	/** Contains the output of SetLoadBalancePoliciesOfListener. */
	export interface SetLoadBalancerPoliciesOfListenerOutputFormProperties {
	}
	export function CreateSetLoadBalancerPoliciesOfListenerOutputFormGroup() {
		return new FormGroup<SetLoadBalancerPoliciesOfListenerOutputFormProperties>({
		});

	}


	/** Contains the parameters for EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		AvailabilityZones: Array<string>;
	}

	/** Contains the parameters for EnableAvailabilityZonesForLoadBalancer. */
	export interface AddAvailabilityZonesInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateAddAvailabilityZonesInputFormGroup() {
		return new FormGroup<AddAvailabilityZonesInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for AddTags. */
	export interface AddTagsInput {

		/** Required */
		LoadBalancerNames: Array<string>;

		/** Required */
		Tags: Array<Tag>;
	}

	/** Contains the parameters for AddTags. */
	export interface AddTagsInputFormProperties {
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
		});

	}


	/** Contains the parameters for ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		SecurityGroups: Array<string>;
	}

	/** Contains the parameters for ApplySecurityGroupsToLoadBalancer. */
	export interface ApplySecurityGroupsToLoadBalancerInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateApplySecurityGroupsToLoadBalancerInputFormGroup() {
		return new FormGroup<ApplySecurityGroupsToLoadBalancerInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for AttachLoaBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Subnets: Array<string>;
	}

	/** Contains the parameters for AttachLoaBalancerToSubnets. */
	export interface AttachLoadBalancerToSubnetsInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateAttachLoadBalancerToSubnetsInputFormGroup() {
		return new FormGroup<AttachLoadBalancerToSubnetsInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for ConfigureHealthCheck. */
	export interface ConfigureHealthCheckInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		HealthCheck: HealthCheck;
	}

	/** Contains the parameters for ConfigureHealthCheck. */
	export interface ConfigureHealthCheckInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureHealthCheckInputFormGroup() {
		return new FormGroup<ConfigureHealthCheckInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for CreateLoadBalancer. */
	export interface CreateAccessPointInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Listeners: Array<Listener>;
		AvailabilityZones?: Array<string>;
		Subnets?: Array<string>;
		SecurityGroups?: Array<string>;
		Scheme?: string;
		Tags?: Array<Tag>;
	}

	/** Contains the parameters for CreateLoadBalancer. */
	export interface CreateAccessPointInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
		Scheme: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPointInputFormGroup() {
		return new FormGroup<CreateAccessPointInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for CreateAppCookieStickinessPolicy. */
	export interface CreateAppCookieStickinessPolicyInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		PolicyName: string;

		/** Required */
		CookieName: string;
	}

	/** Contains the parameters for CreateAppCookieStickinessPolicy. */
	export interface CreateAppCookieStickinessPolicyInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		CookieName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppCookieStickinessPolicyInputFormGroup() {
		return new FormGroup<CreateAppCookieStickinessPolicyInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CookieName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for CreateLBCookieStickinessPolicy. */
	export interface CreateLBCookieStickinessPolicyInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		PolicyName: string;
		CookieExpirationPeriod?: number | null;
	}

	/** Contains the parameters for CreateLBCookieStickinessPolicy. */
	export interface CreateLBCookieStickinessPolicyInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		CookieExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateCreateLBCookieStickinessPolicyInputFormGroup() {
		return new FormGroup<CreateLBCookieStickinessPolicyInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CookieExpirationPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for CreateLoadBalancerListeners. */
	export interface CreateLoadBalancerListenerInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Listeners: Array<Listener>;
	}

	/** Contains the parameters for CreateLoadBalancerListeners. */
	export interface CreateLoadBalancerListenerInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerListenerInputFormGroup() {
		return new FormGroup<CreateLoadBalancerListenerInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for CreateLoadBalancerPolicy. */
	export interface CreateLoadBalancerPolicyInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		PolicyName: string;

		/** Required */
		PolicyTypeName: string;
		PolicyAttributes?: Array<PolicyAttribute>;
	}

	/** Contains the parameters for CreateLoadBalancerPolicy. */
	export interface CreateLoadBalancerPolicyInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		PolicyTypeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerPolicyInputFormGroup() {
		return new FormGroup<CreateLoadBalancerPolicyInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DeleteLoadBalancer. */
	export interface DeleteAccessPointInput {

		/** Required */
		LoadBalancerName: string;
	}

	/** Contains the parameters for DeleteLoadBalancer. */
	export interface DeleteAccessPointInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessPointInputFormGroup() {
		return new FormGroup<DeleteAccessPointInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DeleteLoadBalancerListeners. */
	export interface DeleteLoadBalancerListenerInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		LoadBalancerPorts: Array<number>;
	}

	/** Contains the parameters for DeleteLoadBalancerListeners. */
	export interface DeleteLoadBalancerListenerInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoadBalancerListenerInputFormGroup() {
		return new FormGroup<DeleteLoadBalancerListenerInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DeleteLoadBalancerPolicy. */
	export interface DeleteLoadBalancerPolicyInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		PolicyName: string;
	}

	/** Contains the parameters for DeleteLoadBalancerPolicy. */
	export interface DeleteLoadBalancerPolicyInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoadBalancerPolicyInputFormGroup() {
		return new FormGroup<DeleteLoadBalancerPolicyInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Instances: Array<Instance>;
	}

	/** Contains the parameters for DeregisterInstancesFromLoadBalancer. */
	export interface DeregisterEndPointsInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterEndPointsInputFormGroup() {
		return new FormGroup<DeregisterEndPointsInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsInput {
		LoadBalancerNames?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
	}

	/** Contains the parameters for DescribeLoadBalancers. */
	export interface DescribeAccessPointsInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccessPointsInputFormGroup() {
		return new FormGroup<DescribeAccessPointsInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountLimitsInput {
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeAccountLimitsInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountLimitsInputFormGroup() {
		return new FormGroup<DescribeAccountLimitsInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for DescribeInstanceHealth. */
	export interface DescribeEndPointStateInput {

		/** Required */
		LoadBalancerName: string;
		Instances?: Array<Instance>;
	}

	/** Contains the parameters for DescribeInstanceHealth. */
	export interface DescribeEndPointStateInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndPointStateInputFormGroup() {
		return new FormGroup<DescribeEndPointStateInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesInput {

		/** Required */
		LoadBalancerName: string;
	}

	/** Contains the parameters for DescribeLoadBalancerAttributes. */
	export interface DescribeLoadBalancerAttributesInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancerAttributesInputFormGroup() {
		return new FormGroup<DescribeLoadBalancerAttributesInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesInput {
		LoadBalancerName?: string;
		PolicyNames?: Array<string>;
	}

	/** Contains the parameters for DescribeLoadBalancerPolicies. */
	export interface DescribeLoadBalancerPoliciesInputFormProperties {
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancerPoliciesInputFormGroup() {
		return new FormGroup<DescribeLoadBalancerPoliciesInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesInput {
		PolicyTypeNames?: Array<string>;
	}

	/** Contains the parameters for DescribeLoadBalancerPolicyTypes. */
	export interface DescribeLoadBalancerPolicyTypesInputFormProperties {
	}
	export function CreateDescribeLoadBalancerPolicyTypesInputFormGroup() {
		return new FormGroup<DescribeLoadBalancerPolicyTypesInputFormProperties>({
		});

	}


	/** Contains the parameters for DescribeTags. */
	export interface DescribeTagsInput {

		/** Required */
		LoadBalancerNames: Array<string>;
	}

	/** Contains the parameters for DescribeTags. */
	export interface DescribeTagsInputFormProperties {
	}
	export function CreateDescribeTagsInputFormGroup() {
		return new FormGroup<DescribeTagsInputFormProperties>({
		});

	}


	/** Contains the parameters for DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Subnets: Array<string>;
	}

	/** Contains the parameters for DetachLoadBalancerFromSubnets. */
	export interface DetachLoadBalancerFromSubnetsInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateDetachLoadBalancerFromSubnetsInputFormGroup() {
		return new FormGroup<DetachLoadBalancerFromSubnetsInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		LoadBalancerAttributes: LoadBalancerAttributes;
	}

	/** Contains the parameters for ModifyLoadBalancerAttributes. */
	export interface ModifyLoadBalancerAttributesInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateModifyLoadBalancerAttributesInputFormGroup() {
		return new FormGroup<ModifyLoadBalancerAttributesInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		Instances: Array<Instance>;
	}

	/** Contains the parameters for RegisterInstancesWithLoadBalancer. */
	export interface RegisterEndPointsInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterEndPointsInputFormGroup() {
		return new FormGroup<RegisterEndPointsInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		AvailabilityZones: Array<string>;
	}

	/** Contains the parameters for DisableAvailabilityZonesForLoadBalancer. */
	export interface RemoveAvailabilityZonesInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAvailabilityZonesInputFormGroup() {
		return new FormGroup<RemoveAvailabilityZonesInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for RemoveTags. */
	export interface RemoveTagsInput {

		/** Required */
		LoadBalancerNames: Array<string>;

		/** Required */
		Tags: Array<TagKeyOnly>;
	}

	/** Contains the parameters for RemoveTags. */
	export interface RemoveTagsInputFormProperties {
	}
	export function CreateRemoveTagsInputFormGroup() {
		return new FormGroup<RemoveTagsInputFormProperties>({
		});

	}


	/** Contains the parameters for SetLoadBalancerListenerSSLCertificate. */
	export interface SetLoadBalancerListenerSSLCertificateInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		LoadBalancerPort: number;

		/** Required */
		SSLCertificateId: string;
	}

	/** Contains the parameters for SetLoadBalancerListenerSSLCertificate. */
	export interface SetLoadBalancerListenerSSLCertificateInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		LoadBalancerPort: FormControl<number | null | undefined>,

		/** Required */
		SSLCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateSetLoadBalancerListenerSSLCertificateInputFormGroup() {
		return new FormGroup<SetLoadBalancerListenerSSLCertificateInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LoadBalancerPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SSLCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for SetLoadBalancerPoliciesForBackendServer. */
	export interface SetLoadBalancerPoliciesForBackendServerInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		InstancePort: number;

		/** Required */
		PolicyNames: Array<string>;
	}

	/** Contains the parameters for SetLoadBalancerPoliciesForBackendServer. */
	export interface SetLoadBalancerPoliciesForBackendServerInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		InstancePort: FormControl<number | null | undefined>,
	}
	export function CreateSetLoadBalancerPoliciesForBackendServerInputFormGroup() {
		return new FormGroup<SetLoadBalancerPoliciesForBackendServerInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstancePort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for SetLoadBalancePoliciesOfListener. */
	export interface SetLoadBalancerPoliciesOfListenerInput {

		/** Required */
		LoadBalancerName: string;

		/** Required */
		LoadBalancerPort: number;

		/** Required */
		PolicyNames: Array<string>;
	}

	/** Contains the parameters for SetLoadBalancePoliciesOfListener. */
	export interface SetLoadBalancerPoliciesOfListenerInputFormProperties {

		/** Required */
		LoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		LoadBalancerPort: FormControl<number | null | undefined>,
	}
	export function CreateSetLoadBalancerPoliciesOfListenerInputFormGroup() {
		return new FormGroup<SetLoadBalancerPoliciesOfListenerInputFormProperties>({
			LoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LoadBalancerPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=AddTags
		 * @param {Array<string>} LoadBalancerNames The name of the load balancer. You can specify one load balancer only.
		 * @param {Array<Tag>} Tags The tags.
		 * @return {void} Success
		 */
		GET_AddTags(LoadBalancerNames: Array<string>, Tags: Array<Tag>, Action: GET_AddTagsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=ApplySecurityGroupsToLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} SecurityGroups The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.
		 * @return {void} Success
		 */
		GET_ApplySecurityGroupsToLoadBalancer(LoadBalancerName: string, SecurityGroups: Array<string>, Action: GET_ApplySecurityGroupsToLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplySecurityGroupsToLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + SecurityGroups.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=AttachLoadBalancerToSubnets
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} Subnets The IDs of the subnets to add. You can add only one subnet per Availability Zone.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancerToSubnets(LoadBalancerName: string, Subnets: Array<string>, Action: GET_AttachLoadBalancerToSubnetsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachLoadBalancerToSubnets?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Subnets.map(z => `Subnets=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=ConfigureHealthCheck
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {GET_ConfigureHealthCheckHealthCheck} HealthCheck The configuration information.
		 * @return {void} Success
		 */
		GET_ConfigureHealthCheck(LoadBalancerName: string, HealthCheck: GET_ConfigureHealthCheckHealthCheck, Action: GET_ConfigureHealthCheckAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ConfigureHealthCheck?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&HealthCheck=' + HealthCheck + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=CreateAppCookieStickinessPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
		 * @param {string} CookieName The name of the application cookie used for stickiness.
		 * @return {void} Success
		 */
		GET_CreateAppCookieStickinessPolicy(LoadBalancerName: string, PolicyName: string, CookieName: string, Action: GET_CreateAppCookieStickinessPolicyAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateAppCookieStickinessPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&CookieName=' + (CookieName == null ? '' : encodeURIComponent(CookieName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=CreateLBCookieStickinessPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
		 * @param {number} CookieExpirationPeriod The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
		 * @return {void} Success
		 */
		GET_CreateLBCookieStickinessPolicy(LoadBalancerName: string, PolicyName: string, CookieExpirationPeriod: number | null | undefined, Action: GET_CreateLBCookieStickinessPolicyAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLBCookieStickinessPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&CookieExpirationPeriod=' + CookieExpirationPeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=CreateLoadBalancer
		 * @param {string} LoadBalancerName <p>The name of the load balancer.</p> <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>
		 * @param {Array<Listener>} Listeners <p>The listeners.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * @param {Array<string>} AvailabilityZones <p>One or more Availability Zones from the same region as the load balancer.</p> <p>You must specify at least one Availability Zone.</p> <p>You can add more Availability Zones after you create the load balancer using <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>
		 * @param {Array<string>} Subnets The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.
		 * @param {Array<string>} SecurityGroups The IDs of the security groups to assign to the load balancer.
		 * @param {string} Scheme <p>The type of a load balancer. Valid only for load balancers in a VPC.</p> <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a> in the <i>Elastic Load Balancing User Guide</i>.</p> <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>
		 * @param {Array<Tag>} Tags <p>A list of tags to assign to the load balancer.</p> <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_CreateLoadBalancer(LoadBalancerName: string, Listeners: Array<Listener>, AvailabilityZones: Array<string> | null | undefined, Subnets: Array<string> | null | undefined, SecurityGroups: Array<string> | null | undefined, Scheme: string | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Listeners.map(z => `Listeners=${z}`).join('&') + '&' + AvailabilityZones?.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&' + Subnets?.map(z => `Subnets=${encodeURIComponent(z)}`).join('&') + '&' + SecurityGroups?.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&Scheme=' + (Scheme == null ? '' : encodeURIComponent(Scheme)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=CreateLoadBalancerListeners
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Listener>} Listeners The listeners.
		 * @return {void} Success
		 */
		GET_CreateLoadBalancerListeners(LoadBalancerName: string, Listeners: Array<Listener>, Action: GET_CreateLoadBalancerListenersAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLoadBalancerListeners?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Listeners.map(z => `Listeners=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
		 * Get #Action=CreateLoadBalancerPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.
		 * @param {string} PolicyTypeName The name of the base policy type. To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.
		 * @param {Array<PolicyAttribute>} PolicyAttributes The policy attributes.
		 * @return {void} Success
		 */
		GET_CreateLoadBalancerPolicy(LoadBalancerName: string, PolicyName: string, PolicyTypeName: string, PolicyAttributes: Array<PolicyAttribute> | null | undefined, Action: GET_CreateLoadBalancerPolicyAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLoadBalancerPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyTypeName=' + (PolicyTypeName == null ? '' : encodeURIComponent(PolicyTypeName)) + '&' + PolicyAttributes?.map(z => `PolicyAttributes=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>
		 * Get #Action=DeleteLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancer(LoadBalancerName: string, Action: GET_DeleteLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified listeners from the specified load balancer.
		 * Get #Action=DeleteLoadBalancerListeners
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<number>} LoadBalancerPorts The client port numbers of the listeners.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancerListeners(LoadBalancerName: string, LoadBalancerPorts: Array<number>, Action: GET_DeleteLoadBalancerListenersAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLoadBalancerListeners?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + LoadBalancerPorts.map(z => `LoadBalancerPorts=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
		 * Get #Action=DeleteLoadBalancerPolicy
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {string} PolicyName The name of the policy.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancerPolicy(LoadBalancerName: string, PolicyName: string, Action: GET_DeleteLoadBalancerPolicyAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLoadBalancerPolicy?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=DeregisterInstancesFromLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_DeregisterInstancesFromLoadBalancer(LoadBalancerName: string, Instances: Array<Instance>, Action: GET_DeregisterInstancesFromLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeregisterInstancesFromLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances.map(z => `Instances=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=DescribeAccountLimits
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeAccountLimitsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
		 * Get #Action=DescribeInstanceHealth
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_DescribeInstanceHealth(LoadBalancerName: string, Instances: Array<Instance> | null | undefined, Action: GET_DescribeInstanceHealthAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeInstanceHealth?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances?.map(z => `Instances=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the attributes for the specified load balancer.
		 * Get #Action=DescribeLoadBalancerAttributes
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerAttributes(LoadBalancerName: string, Action: GET_DescribeLoadBalancerAttributesAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerAttributes?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
		 * Get #Action=DescribeLoadBalancerPolicies
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} PolicyNames The names of the policies.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerPolicies(LoadBalancerName: string | null | undefined, PolicyNames: Array<string> | null | undefined, Action: GET_DescribeLoadBalancerPoliciesAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerPolicies?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + PolicyNames?.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
		 * Get #Action=DescribeLoadBalancerPolicyTypes
		 * @param {Array<string>} PolicyTypeNames The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerPolicyTypes(PolicyTypeNames: Array<string> | null | undefined, Action: GET_DescribeLoadBalancerPolicyTypesAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerPolicyTypes?' + PolicyTypeNames?.map(z => `PolicyTypeNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
		 * Get #Action=DescribeLoadBalancers
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call (a number from 1 to 400). The default is 400.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(LoadBalancerNames: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeLoadBalancersAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancers?' + LoadBalancerNames?.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the tags associated with the specified load balancers.
		 * Get #Action=DescribeTags
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers.
		 * @return {void} Success
		 */
		GET_DescribeTags(LoadBalancerNames: Array<string>, Action: GET_DescribeTagsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>
		 * Get #Action=DetachLoadBalancerFromSubnets
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} Subnets The IDs of the subnets.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancerFromSubnets(LoadBalancerName: string, Subnets: Array<string>, Action: GET_DetachLoadBalancerFromSubnetsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachLoadBalancerFromSubnets?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Subnets.map(z => `Subnets=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=DisableAvailabilityZonesForLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} AvailabilityZones The Availability Zones.
		 * @return {void} Success
		 */
		GET_DisableAvailabilityZonesForLoadBalancer(LoadBalancerName: string, AvailabilityZones: Array<string>, Action: GET_DisableAvailabilityZonesForLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableAvailabilityZonesForLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=EnableAvailabilityZonesForLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<string>} AvailabilityZones The Availability Zones. These must be in the same region as the load balancer.
		 * @return {void} Success
		 */
		GET_EnableAvailabilityZonesForLoadBalancer(LoadBalancerName: string, AvailabilityZones: Array<string>, Action: GET_EnableAvailabilityZonesForLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableAvailabilityZonesForLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>
		 * Get #Action=ModifyLoadBalancerAttributes
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {GET_ModifyLoadBalancerAttributesLoadBalancerAttributes} LoadBalancerAttributes The attributes for the load balancer.
		 * @return {void} Success
		 */
		GET_ModifyLoadBalancerAttributes(LoadBalancerName: string, LoadBalancerAttributes: GET_ModifyLoadBalancerAttributesLoadBalancerAttributes, Action: GET_ModifyLoadBalancerAttributesAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyLoadBalancerAttributes?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerAttributes=' + LoadBalancerAttributes + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=RegisterInstancesWithLoadBalancer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {Array<Instance>} Instances The IDs of the instances.
		 * @return {void} Success
		 */
		GET_RegisterInstancesWithLoadBalancer(LoadBalancerName: string, Instances: Array<Instance>, Action: GET_RegisterInstancesWithLoadBalancerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RegisterInstancesWithLoadBalancer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&' + Instances.map(z => `Instances=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more tags from the specified load balancer.
		 * Get #Action=RemoveTags
		 * @param {Array<string>} LoadBalancerNames The name of the load balancer. You can specify a maximum of one load balancer name.
		 * @param {Array<TagKeyOnly>} Tags The list of tag keys to remove.
		 * @return {void} Success
		 */
		GET_RemoveTags(LoadBalancerNames: Array<string>, Tags: Array<TagKeyOnly>, Action: GET_RemoveTagsAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTags?' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=SetLoadBalancerListenerSSLCertificate
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} LoadBalancerPort The port that uses the specified SSL certificate.
		 * @param {string} SSLCertificateId The Amazon Resource Name (ARN) of the SSL certificate.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerListenerSSLCertificate(LoadBalancerName: string, LoadBalancerPort: number, SSLCertificateId: string, Action: GET_SetLoadBalancerListenerSSLCertificateAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetLoadBalancerListenerSSLCertificate?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerPort=' + LoadBalancerPort + '&SSLCertificateId=' + (SSLCertificateId == null ? '' : encodeURIComponent(SSLCertificateId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=SetLoadBalancerPoliciesForBackendServer
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} InstancePort The port number associated with the EC2 instance.
		 * @param {Array<string>} PolicyNames The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerPoliciesForBackendServer(LoadBalancerName: string, InstancePort: number, PolicyNames: Array<string>, Action: GET_SetLoadBalancerPoliciesForBackendServerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetLoadBalancerPoliciesForBackendServer?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&InstancePort=' + InstancePort + '&' + PolicyNames.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
		 * Get #Action=SetLoadBalancerPoliciesOfListener
		 * @param {string} LoadBalancerName The name of the load balancer.
		 * @param {number} LoadBalancerPort The external port of the load balancer.
		 * @param {Array<string>} PolicyNames The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.
		 * @return {void} Success
		 */
		GET_SetLoadBalancerPoliciesOfListener(LoadBalancerName: string, LoadBalancerPort: number, PolicyNames: Array<string>, Action: GET_SetLoadBalancerPoliciesOfListenerAction, Version: GET_AddTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetLoadBalancerPoliciesOfListener?LoadBalancerName=' + (LoadBalancerName == null ? '' : encodeURIComponent(LoadBalancerName)) + '&LoadBalancerPort=' + LoadBalancerPort + '&' + PolicyNames.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddTagsAction { AddTags = 'AddTags' }

	export enum GET_AddTagsVersion { '2012-06-01' = '2012-06-01' }

	export enum GET_ApplySecurityGroupsToLoadBalancerAction { ApplySecurityGroupsToLoadBalancer = 'ApplySecurityGroupsToLoadBalancer' }

	export enum GET_AttachLoadBalancerToSubnetsAction { AttachLoadBalancerToSubnets = 'AttachLoadBalancerToSubnets' }

	export interface GET_ConfigureHealthCheckHealthCheck {

		/** Required */
		Target: string;

		/** Required */
		Interval: number;

		/** Required */
		Timeout: number;

		/** Required */
		UnhealthyThreshold: number;

		/** Required */
		HealthyThreshold: number;
	}
	export interface GET_ConfigureHealthCheckHealthCheckFormProperties {

		/** Required */
		Target: FormControl<string | null | undefined>,

		/** Required */
		Interval: FormControl<number | null | undefined>,

		/** Required */
		Timeout: FormControl<number | null | undefined>,

		/** Required */
		UnhealthyThreshold: FormControl<number | null | undefined>,

		/** Required */
		HealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateGET_ConfigureHealthCheckHealthCheckFormGroup() {
		return new FormGroup<GET_ConfigureHealthCheckHealthCheckFormProperties>({
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UnhealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GET_ConfigureHealthCheckAction { ConfigureHealthCheck = 'ConfigureHealthCheck' }

	export enum GET_CreateAppCookieStickinessPolicyAction { CreateAppCookieStickinessPolicy = 'CreateAppCookieStickinessPolicy' }

	export enum GET_CreateLBCookieStickinessPolicyAction { CreateLBCookieStickinessPolicy = 'CreateLBCookieStickinessPolicy' }

	export enum GET_CreateLoadBalancerAction { CreateLoadBalancer = 'CreateLoadBalancer' }

	export enum GET_CreateLoadBalancerListenersAction { CreateLoadBalancerListeners = 'CreateLoadBalancerListeners' }

	export enum GET_CreateLoadBalancerPolicyAction { CreateLoadBalancerPolicy = 'CreateLoadBalancerPolicy' }

	export enum GET_DeleteLoadBalancerAction { DeleteLoadBalancer = 'DeleteLoadBalancer' }

	export enum GET_DeleteLoadBalancerListenersAction { DeleteLoadBalancerListeners = 'DeleteLoadBalancerListeners' }

	export enum GET_DeleteLoadBalancerPolicyAction { DeleteLoadBalancerPolicy = 'DeleteLoadBalancerPolicy' }

	export enum GET_DeregisterInstancesFromLoadBalancerAction { DeregisterInstancesFromLoadBalancer = 'DeregisterInstancesFromLoadBalancer' }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 'DescribeAccountLimits' }

	export enum GET_DescribeInstanceHealthAction { DescribeInstanceHealth = 'DescribeInstanceHealth' }

	export enum GET_DescribeLoadBalancerAttributesAction { DescribeLoadBalancerAttributes = 'DescribeLoadBalancerAttributes' }

	export enum GET_DescribeLoadBalancerPoliciesAction { DescribeLoadBalancerPolicies = 'DescribeLoadBalancerPolicies' }

	export enum GET_DescribeLoadBalancerPolicyTypesAction { DescribeLoadBalancerPolicyTypes = 'DescribeLoadBalancerPolicyTypes' }

	export enum GET_DescribeLoadBalancersAction { DescribeLoadBalancers = 'DescribeLoadBalancers' }

	export enum GET_DescribeTagsAction { DescribeTags = 'DescribeTags' }

	export enum GET_DetachLoadBalancerFromSubnetsAction { DetachLoadBalancerFromSubnets = 'DetachLoadBalancerFromSubnets' }

	export enum GET_DisableAvailabilityZonesForLoadBalancerAction { DisableAvailabilityZonesForLoadBalancer = 'DisableAvailabilityZonesForLoadBalancer' }

	export enum GET_EnableAvailabilityZonesForLoadBalancerAction { EnableAvailabilityZonesForLoadBalancer = 'EnableAvailabilityZonesForLoadBalancer' }

	export interface GET_ModifyLoadBalancerAttributesLoadBalancerAttributes {
		CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
		AccessLog?: AccessLog;
		ConnectionDraining?: ConnectionDraining;
		ConnectionSettings?: ConnectionSettings;
		AdditionalAttributes?: Array<AdditionalAttribute>;
	}
	export interface GET_ModifyLoadBalancerAttributesLoadBalancerAttributesFormProperties {
	}
	export function CreateGET_ModifyLoadBalancerAttributesLoadBalancerAttributesFormGroup() {
		return new FormGroup<GET_ModifyLoadBalancerAttributesLoadBalancerAttributesFormProperties>({
		});

	}

	export enum GET_ModifyLoadBalancerAttributesAction { ModifyLoadBalancerAttributes = 'ModifyLoadBalancerAttributes' }

	export enum GET_RegisterInstancesWithLoadBalancerAction { RegisterInstancesWithLoadBalancer = 'RegisterInstancesWithLoadBalancer' }

	export enum GET_RemoveTagsAction { RemoveTags = 'RemoveTags' }

	export enum GET_SetLoadBalancerListenerSSLCertificateAction { SetLoadBalancerListenerSSLCertificate = 'SetLoadBalancerListenerSSLCertificate' }

	export enum GET_SetLoadBalancerPoliciesForBackendServerAction { SetLoadBalancerPoliciesForBackendServer = 'SetLoadBalancerPoliciesForBackendServer' }

	export enum GET_SetLoadBalancerPoliciesOfListenerAction { SetLoadBalancerPoliciesOfListener = 'SetLoadBalancerPoliciesOfListener' }

}

