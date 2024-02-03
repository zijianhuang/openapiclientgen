import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddListenerCertificatesOutput {
		Certificates?: Array<Certificate>;
	}
	export interface AddListenerCertificatesOutputFormProperties {
	}
	export function CreateAddListenerCertificatesOutputFormGroup() {
		return new FormGroup<AddListenerCertificatesOutputFormProperties>({
		});

	}


	/** Information about an SSL server certificate. */
	export interface Certificate {
		CertificateArn?: string;
		IsDefault?: boolean | null;
	}

	/** Information about an SSL server certificate. */
	export interface CertificateFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
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

	export interface TooManyCertificatesException {
	}
	export interface TooManyCertificatesExceptionFormProperties {
	}
	export function CreateTooManyCertificatesExceptionFormGroup() {
		return new FormGroup<TooManyCertificatesExceptionFormProperties>({
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

	export interface AddTagsOutput {
	}
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

	export interface DuplicateTagKeysException {
	}
	export interface DuplicateTagKeysExceptionFormProperties {
	}
	export function CreateDuplicateTagKeysExceptionFormGroup() {
		return new FormGroup<DuplicateTagKeysExceptionFormProperties>({
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

	export interface LoadBalancerNotFoundException {
	}
	export interface LoadBalancerNotFoundExceptionFormProperties {
	}
	export function CreateLoadBalancerNotFoundExceptionFormGroup() {
		return new FormGroup<LoadBalancerNotFoundExceptionFormProperties>({
		});

	}

	export interface TargetGroupNotFoundException {
	}
	export interface TargetGroupNotFoundExceptionFormProperties {
	}
	export function CreateTargetGroupNotFoundExceptionFormGroup() {
		return new FormGroup<TargetGroupNotFoundExceptionFormProperties>({
		});

	}

	export interface RuleNotFoundException {
	}
	export interface RuleNotFoundExceptionFormProperties {
	}
	export function CreateRuleNotFoundExceptionFormGroup() {
		return new FormGroup<RuleNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateListenerOutput {
		Listeners?: Array<Listener>;
	}
	export interface CreateListenerOutputFormProperties {
	}
	export function CreateCreateListenerOutputFormGroup() {
		return new FormGroup<CreateListenerOutputFormProperties>({
		});

	}


	/** Information about a listener. */
	export interface Listener {
		ListenerArn?: string;
		LoadBalancerArn?: string;
		Port?: number | null;
		Protocol?: ProtocolEnum;
		Certificates?: Array<Certificate>;
		SslPolicy?: string;
		DefaultActions?: Array<Action>;
		AlpnPolicy?: Array<string>;
	}

	/** Information about a listener. */
	export interface ListenerFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		LoadBalancerArn: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<ProtocolEnum | null | undefined>,
		SslPolicy: FormControl<string | null | undefined>,
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			SslPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProtocolEnum { HTTP = 'HTTP', HTTPS = 'HTTPS', TCP = 'TCP', TLS = 'TLS', UDP = 'UDP', TCP_UDP = 'TCP_UDP', GENEVE = 'GENEVE' }


	/** <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p> */
	export interface Action {

		/** Required */
		Type: ActionTypeEnum;
		TargetGroupArn?: string;
		AuthenticateOidcConfig?: AuthenticateOidcActionConfig;
		AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;
		Order?: number | null;
		RedirectConfig?: RedirectActionConfig;
		FixedResponseConfig?: FixedResponseActionConfig;
		ForwardConfig?: ForwardActionConfig;
	}

	/** <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p> */
	export interface ActionFormProperties {

		/** Required */
		Type: FormControl<ActionTypeEnum | null | undefined>,
		TargetGroupArn: FormControl<string | null | undefined>,
		Order: FormControl<number | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			Type: new FormControl<ActionTypeEnum | null | undefined>(undefined, [Validators.required]),
			TargetGroupArn: new FormControl<string | null | undefined>(undefined),
			Order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActionTypeEnum { forward = 'forward', 'authenticate-oidc' = 'authenticate-oidc', 'authenticate-cognito' = 'authenticate-cognito', redirect = 'redirect', 'fixed-response' = 'fixed-response' }


	/** Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users. */
	export interface AuthenticateOidcActionConfig {

		/** Required */
		Issuer: string;

		/** Required */
		AuthorizationEndpoint: string;

		/** Required */
		TokenEndpoint: string;

		/** Required */
		UserInfoEndpoint: string;

		/** Required */
		ClientId: string;
		ClientSecret?: string;
		SessionCookieName?: string;
		Scope?: string;
		SessionTimeout?: number | null;
		AuthenticationRequestExtraParams?: AuthenticateOidcActionAuthenticationRequestExtraParams;
		OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum;
		UseExistingClientSecret?: boolean | null;
	}

	/** Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users. */
	export interface AuthenticateOidcActionConfigFormProperties {

		/** Required */
		Issuer: FormControl<string | null | undefined>,

		/** Required */
		AuthorizationEndpoint: FormControl<string | null | undefined>,

		/** Required */
		TokenEndpoint: FormControl<string | null | undefined>,

		/** Required */
		UserInfoEndpoint: FormControl<string | null | undefined>,

		/** Required */
		ClientId: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
		SessionCookieName: FormControl<string | null | undefined>,
		Scope: FormControl<string | null | undefined>,
		SessionTimeout: FormControl<number | null | undefined>,
		OnUnauthenticatedRequest: FormControl<AuthenticateOidcActionConditionalBehaviorEnum | null | undefined>,
		UseExistingClientSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthenticateOidcActionConfigFormGroup() {
		return new FormGroup<AuthenticateOidcActionConfigFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthorizationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TokenEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserInfoEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
			SessionCookieName: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
			SessionTimeout: new FormControl<number | null | undefined>(undefined),
			OnUnauthenticatedRequest: new FormControl<AuthenticateOidcActionConditionalBehaviorEnum | null | undefined>(undefined),
			UseExistingClientSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AuthenticateOidcActionAuthenticationRequestExtraParams {
	}
	export interface AuthenticateOidcActionAuthenticationRequestExtraParamsFormProperties {
	}
	export function CreateAuthenticateOidcActionAuthenticationRequestExtraParamsFormGroup() {
		return new FormGroup<AuthenticateOidcActionAuthenticationRequestExtraParamsFormProperties>({
		});

	}

	export enum AuthenticateOidcActionConditionalBehaviorEnum { deny = 'deny', allow = 'allow', authenticate = 'authenticate' }


	/** Request parameters to use when integrating with Amazon Cognito to authenticate users. */
	export interface AuthenticateCognitoActionConfig {

		/** Required */
		UserPoolArn: string;

		/** Required */
		UserPoolClientId: string;

		/** Required */
		UserPoolDomain: string;
		SessionCookieName?: string;
		Scope?: string;
		SessionTimeout?: number | null;
		AuthenticationRequestExtraParams?: AuthenticateCognitoActionAuthenticationRequestExtraParams;
		OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum;
	}

	/** Request parameters to use when integrating with Amazon Cognito to authenticate users. */
	export interface AuthenticateCognitoActionConfigFormProperties {

		/** Required */
		UserPoolArn: FormControl<string | null | undefined>,

		/** Required */
		UserPoolClientId: FormControl<string | null | undefined>,

		/** Required */
		UserPoolDomain: FormControl<string | null | undefined>,
		SessionCookieName: FormControl<string | null | undefined>,
		Scope: FormControl<string | null | undefined>,
		SessionTimeout: FormControl<number | null | undefined>,
		OnUnauthenticatedRequest: FormControl<AuthenticateOidcActionConditionalBehaviorEnum | null | undefined>,
	}
	export function CreateAuthenticateCognitoActionConfigFormGroup() {
		return new FormGroup<AuthenticateCognitoActionConfigFormProperties>({
			UserPoolArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionCookieName: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
			SessionTimeout: new FormControl<number | null | undefined>(undefined),
			OnUnauthenticatedRequest: new FormControl<AuthenticateOidcActionConditionalBehaviorEnum | null | undefined>(undefined),
		});

	}

	export interface AuthenticateCognitoActionAuthenticationRequestExtraParams {
	}
	export interface AuthenticateCognitoActionAuthenticationRequestExtraParamsFormProperties {
	}
	export function CreateAuthenticateCognitoActionAuthenticationRequestExtraParamsFormGroup() {
		return new FormGroup<AuthenticateCognitoActionAuthenticationRequestExtraParamsFormProperties>({
		});

	}


	/** <p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p> */
	export interface RedirectActionConfig {
		Protocol?: string;
		Port?: string;
		Host?: string;
		Path?: string;
		Query?: string;

		/** Required */
		StatusCode: RedirectActionStatusCodeEnum;
	}

	/** <p>Information about a redirect action.</p> <p>A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.</p> <p>You can reuse URI components using the following reserved keywords:</p> <ul> <li> <p>#{protocol}</p> </li> <li> <p>#{host}</p> </li> <li> <p>#{port}</p> </li> <li> <p>#{path} (the leading "/" is removed)</p> </li> <li> <p>#{query}</p> </li> </ul> <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&amp;value=xyz".</p> */
	export interface RedirectActionConfigFormProperties {
		Protocol: FormControl<string | null | undefined>,
		Port: FormControl<string | null | undefined>,
		Host: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		Query: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<RedirectActionStatusCodeEnum | null | undefined>,
	}
	export function CreateRedirectActionConfigFormGroup() {
		return new FormGroup<RedirectActionConfigFormProperties>({
			Protocol: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<string | null | undefined>(undefined),
			Host: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<RedirectActionStatusCodeEnum | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RedirectActionStatusCodeEnum { HTTP_301 = 'HTTP_301', HTTP_302 = 'HTTP_302' }


	/** Information about an action that returns a custom HTTP response. */
	export interface FixedResponseActionConfig {
		MessageBody?: string;

		/** Required */
		StatusCode: string;
		ContentType?: string;
	}

	/** Information about an action that returns a custom HTTP response. */
	export interface FixedResponseActionConfigFormProperties {
		MessageBody: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateFixedResponseActionConfigFormGroup() {
		return new FormGroup<FixedResponseActionConfigFormProperties>({
			MessageBody: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a forward action. */
	export interface ForwardActionConfig {
		TargetGroups?: Array<TargetGroupTuple>;
		TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
	}

	/** Information about a forward action. */
	export interface ForwardActionConfigFormProperties {
	}
	export function CreateForwardActionConfigFormGroup() {
		return new FormGroup<ForwardActionConfigFormProperties>({
		});

	}


	/** Information about how traffic will be distributed between multiple target groups in a forward rule. */
	export interface TargetGroupTuple {
		TargetGroupArn?: string;
		Weight?: number | null;
	}

	/** Information about how traffic will be distributed between multiple target groups in a forward rule. */
	export interface TargetGroupTupleFormProperties {
		TargetGroupArn: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateTargetGroupTupleFormGroup() {
		return new FormGroup<TargetGroupTupleFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the target group stickiness for a rule. */
	export interface TargetGroupStickinessConfig {
		Enabled?: boolean | null;
		DurationSeconds?: number | null;
	}

	/** Information about the target group stickiness for a rule. */
	export interface TargetGroupStickinessConfigFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTargetGroupStickinessConfigFormGroup() {
		return new FormGroup<TargetGroupStickinessConfigFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
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

	export interface TooManyListenersException {
	}
	export interface TooManyListenersExceptionFormProperties {
	}
	export function CreateTooManyListenersExceptionFormGroup() {
		return new FormGroup<TooManyListenersExceptionFormProperties>({
		});

	}

	export interface TargetGroupAssociationLimitException {
	}
	export interface TargetGroupAssociationLimitExceptionFormProperties {
	}
	export function CreateTargetGroupAssociationLimitExceptionFormGroup() {
		return new FormGroup<TargetGroupAssociationLimitExceptionFormProperties>({
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

	export interface IncompatibleProtocolsException {
	}
	export interface IncompatibleProtocolsExceptionFormProperties {
	}
	export function CreateIncompatibleProtocolsExceptionFormGroup() {
		return new FormGroup<IncompatibleProtocolsExceptionFormProperties>({
		});

	}

	export interface SSLPolicyNotFoundException {
	}
	export interface SSLPolicyNotFoundExceptionFormProperties {
	}
	export function CreateSSLPolicyNotFoundExceptionFormGroup() {
		return new FormGroup<SSLPolicyNotFoundExceptionFormProperties>({
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

	export interface TooManyRegistrationsForTargetIdException {
	}
	export interface TooManyRegistrationsForTargetIdExceptionFormProperties {
	}
	export function CreateTooManyRegistrationsForTargetIdExceptionFormGroup() {
		return new FormGroup<TooManyRegistrationsForTargetIdExceptionFormProperties>({
		});

	}

	export interface TooManyTargetsException {
	}
	export interface TooManyTargetsExceptionFormProperties {
	}
	export function CreateTooManyTargetsExceptionFormGroup() {
		return new FormGroup<TooManyTargetsExceptionFormProperties>({
		});

	}

	export interface TooManyActionsException {
	}
	export interface TooManyActionsExceptionFormProperties {
	}
	export function CreateTooManyActionsExceptionFormGroup() {
		return new FormGroup<TooManyActionsExceptionFormProperties>({
		});

	}

	export interface InvalidLoadBalancerActionException {
	}
	export interface InvalidLoadBalancerActionExceptionFormProperties {
	}
	export function CreateInvalidLoadBalancerActionExceptionFormGroup() {
		return new FormGroup<InvalidLoadBalancerActionExceptionFormProperties>({
		});

	}

	export interface TooManyUniqueTargetGroupsPerLoadBalancerException {
	}
	export interface TooManyUniqueTargetGroupsPerLoadBalancerExceptionFormProperties {
	}
	export function CreateTooManyUniqueTargetGroupsPerLoadBalancerExceptionFormGroup() {
		return new FormGroup<TooManyUniqueTargetGroupsPerLoadBalancerExceptionFormProperties>({
		});

	}

	export interface ALPNPolicyNotSupportedException {
	}
	export interface ALPNPolicyNotSupportedExceptionFormProperties {
	}
	export function CreateALPNPolicyNotSupportedExceptionFormGroup() {
		return new FormGroup<ALPNPolicyNotSupportedExceptionFormProperties>({
		});

	}

	export interface CreateLoadBalancerOutput {
		LoadBalancers?: Array<LoadBalancer>;
	}
	export interface CreateLoadBalancerOutputFormProperties {
	}
	export function CreateCreateLoadBalancerOutputFormGroup() {
		return new FormGroup<CreateLoadBalancerOutputFormProperties>({
		});

	}


	/** Information about a load balancer. */
	export interface LoadBalancer {
		LoadBalancerArn?: string;
		DNSName?: string;
		CanonicalHostedZoneId?: string;
		CreatedTime?: Date;
		LoadBalancerName?: string;
		Scheme?: LoadBalancerSchemeEnum;
		VpcId?: string;
		State?: LoadBalancerState;
		Type?: LoadBalancerTypeEnum;
		AvailabilityZones?: Array<AvailabilityZone>;
		SecurityGroups?: Array<string>;
		IpAddressType?: IpAddressType;
		CustomerOwnedIpv4Pool?: string;
	}

	/** Information about a load balancer. */
	export interface LoadBalancerFormProperties {
		LoadBalancerArn: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		CanonicalHostedZoneId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LoadBalancerName: FormControl<string | null | undefined>,
		Scheme: FormControl<LoadBalancerSchemeEnum | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Type: FormControl<LoadBalancerTypeEnum | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		CustomerOwnedIpv4Pool: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			CanonicalHostedZoneId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LoadBalancerName: new FormControl<string | null | undefined>(undefined),
			Scheme: new FormControl<LoadBalancerSchemeEnum | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<LoadBalancerTypeEnum | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			CustomerOwnedIpv4Pool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerSchemeEnum { 'internet-facing' = 'internet-facing', internal = 'internal' }


	/** Information about the state of the load balancer. */
	export interface LoadBalancerState {
		Code?: LoadBalancerStateEnum;
		Reason?: string;
	}

	/** Information about the state of the load balancer. */
	export interface LoadBalancerStateFormProperties {
		Code: FormControl<LoadBalancerStateEnum | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerStateFormGroup() {
		return new FormGroup<LoadBalancerStateFormProperties>({
			Code: new FormControl<LoadBalancerStateEnum | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerStateEnum { active = 'active', provisioning = 'provisioning', active_impaired = 'active_impaired', failed = 'failed' }

	export enum LoadBalancerTypeEnum { application = 'application', network = 'network', gateway = 'gateway' }


	/** Information about an Availability Zone. */
	export interface AvailabilityZone {
		ZoneName?: string;
		SubnetId?: string;
		OutpostId?: string;
		LoadBalancerAddresses?: Array<LoadBalancerAddress>;
	}

	/** Information about an Availability Zone. */
	export interface AvailabilityZoneFormProperties {
		ZoneName: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		OutpostId: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			ZoneName: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			OutpostId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a static IP address for a load balancer. */
	export interface LoadBalancerAddress {
		IpAddress?: string;
		AllocationId?: string;
		PrivateIPv4Address?: string;
		IPv6Address?: string;
	}

	/** Information about a static IP address for a load balancer. */
	export interface LoadBalancerAddressFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		AllocationId: FormControl<string | null | undefined>,
		PrivateIPv4Address: FormControl<string | null | undefined>,
		IPv6Address: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerAddressFormGroup() {
		return new FormGroup<LoadBalancerAddressFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			AllocationId: new FormControl<string | null | undefined>(undefined),
			PrivateIPv4Address: new FormControl<string | null | undefined>(undefined),
			IPv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpAddressType { ipv4 = 'ipv4', dualstack = 'dualstack' }


	/** Information about a subnet mapping. */
	export interface SubnetMapping {
		SubnetId?: string;
		AllocationId?: string;
		PrivateIPv4Address?: string;
		IPv6Address?: string;
	}

	/** Information about a subnet mapping. */
	export interface SubnetMappingFormProperties {
		SubnetId: FormControl<string | null | undefined>,
		AllocationId: FormControl<string | null | undefined>,
		PrivateIPv4Address: FormControl<string | null | undefined>,
		IPv6Address: FormControl<string | null | undefined>,
	}
	export function CreateSubnetMappingFormGroup() {
		return new FormGroup<SubnetMappingFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
			AllocationId: new FormControl<string | null | undefined>(undefined),
			PrivateIPv4Address: new FormControl<string | null | undefined>(undefined),
			IPv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DuplicateLoadBalancerNameException {
	}
	export interface DuplicateLoadBalancerNameExceptionFormProperties {
	}
	export function CreateDuplicateLoadBalancerNameExceptionFormGroup() {
		return new FormGroup<DuplicateLoadBalancerNameExceptionFormProperties>({
		});

	}

	export interface TooManyLoadBalancersException {
	}
	export interface TooManyLoadBalancersExceptionFormProperties {
	}
	export function CreateTooManyLoadBalancersExceptionFormGroup() {
		return new FormGroup<TooManyLoadBalancersExceptionFormProperties>({
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

	export interface InvalidSecurityGroupException {
	}
	export interface InvalidSecurityGroupExceptionFormProperties {
	}
	export function CreateInvalidSecurityGroupExceptionFormGroup() {
		return new FormGroup<InvalidSecurityGroupExceptionFormProperties>({
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface AllocationIdNotFoundException {
	}
	export interface AllocationIdNotFoundExceptionFormProperties {
	}
	export function CreateAllocationIdNotFoundExceptionFormGroup() {
		return new FormGroup<AllocationIdNotFoundExceptionFormProperties>({
		});

	}

	export interface AvailabilityZoneNotSupportedException {
	}
	export interface AvailabilityZoneNotSupportedExceptionFormProperties {
	}
	export function CreateAvailabilityZoneNotSupportedExceptionFormGroup() {
		return new FormGroup<AvailabilityZoneNotSupportedExceptionFormProperties>({
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

	export interface CreateRuleOutput {
		Rules?: Array<Rule>;
	}
	export interface CreateRuleOutputFormProperties {
	}
	export function CreateCreateRuleOutputFormGroup() {
		return new FormGroup<CreateRuleOutputFormProperties>({
		});

	}


	/** Information about a rule. */
	export interface Rule {
		RuleArn?: string;
		Priority?: string;
		Conditions?: Array<RuleCondition>;
		Actions?: Array<Action>;
		IsDefault?: boolean | null;
	}

	/** Information about a rule. */
	export interface RuleFormProperties {
		RuleArn: FormControl<string | null | undefined>,
		Priority: FormControl<string | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<string | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>. Note that the value for a condition cannot be empty.</p> */
	export interface RuleCondition {
		Field?: string;
		Values?: Array<string>;
		HostHeaderConfig?: HostHeaderConditionConfig;
		PathPatternConfig?: PathPatternConditionConfig;
		HttpHeaderConfig?: HttpHeaderConditionConfig;
		QueryStringConfig?: QueryStringConditionConfig;
		HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;
		SourceIpConfig?: SourceIpConditionConfig;
	}

	/** <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>. Note that the value for a condition cannot be empty.</p> */
	export interface RuleConditionFormProperties {
		Field: FormControl<string | null | undefined>,
	}
	export function CreateRuleConditionFormGroup() {
		return new FormGroup<RuleConditionFormProperties>({
			Field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a host header condition. */
	export interface HostHeaderConditionConfig {
		Values?: Array<string>;
	}

	/** Information about a host header condition. */
	export interface HostHeaderConditionConfigFormProperties {
	}
	export function CreateHostHeaderConditionConfigFormGroup() {
		return new FormGroup<HostHeaderConditionConfigFormProperties>({
		});

	}


	/** Information about a path pattern condition. */
	export interface PathPatternConditionConfig {
		Values?: Array<string>;
	}

	/** Information about a path pattern condition. */
	export interface PathPatternConditionConfigFormProperties {
	}
	export function CreatePathPatternConditionConfigFormGroup() {
		return new FormGroup<PathPatternConditionConfigFormProperties>({
		});

	}


	/** <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p> */
	export interface HttpHeaderConditionConfig {
		HttpHeaderName?: string;
		Values?: Array<string>;
	}

	/** <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p> */
	export interface HttpHeaderConditionConfigFormProperties {
		HttpHeaderName: FormControl<string | null | undefined>,
	}
	export function CreateHttpHeaderConditionConfigFormGroup() {
		return new FormGroup<HttpHeaderConditionConfigFormProperties>({
			HttpHeaderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p> */
	export interface QueryStringConditionConfig {
		Values?: Array<QueryStringKeyValuePair>;
	}

	/** <p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p> */
	export interface QueryStringConditionConfigFormProperties {
	}
	export function CreateQueryStringConditionConfigFormGroup() {
		return new FormGroup<QueryStringConditionConfigFormProperties>({
		});

	}


	/** Information about a key/value pair. */
	export interface QueryStringKeyValuePair {
		Key?: string;
		Value?: string;
	}

	/** Information about a key/value pair. */
	export interface QueryStringKeyValuePairFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateQueryStringKeyValuePairFormGroup() {
		return new FormGroup<QueryStringKeyValuePairFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p> */
	export interface HttpRequestMethodConditionConfig {
		Values?: Array<string>;
	}

	/** <p>Information about an HTTP method condition.</p> <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>. You can also define custom HTTP methods.</p> */
	export interface HttpRequestMethodConditionConfigFormProperties {
	}
	export function CreateHttpRequestMethodConditionConfigFormGroup() {
		return new FormGroup<HttpRequestMethodConditionConfigFormProperties>({
		});

	}


	/** <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p> */
	export interface SourceIpConditionConfig {
		Values?: Array<string>;
	}

	/** <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p> */
	export interface SourceIpConditionConfigFormProperties {
	}
	export function CreateSourceIpConditionConfigFormGroup() {
		return new FormGroup<SourceIpConditionConfigFormProperties>({
		});

	}

	export interface PriorityInUseException {
	}
	export interface PriorityInUseExceptionFormProperties {
	}
	export function CreatePriorityInUseExceptionFormGroup() {
		return new FormGroup<PriorityInUseExceptionFormProperties>({
		});

	}

	export interface TooManyTargetGroupsException {
	}
	export interface TooManyTargetGroupsExceptionFormProperties {
	}
	export function CreateTooManyTargetGroupsExceptionFormGroup() {
		return new FormGroup<TooManyTargetGroupsExceptionFormProperties>({
		});

	}

	export interface TooManyRulesException {
	}
	export interface TooManyRulesExceptionFormProperties {
	}
	export function CreateTooManyRulesExceptionFormGroup() {
		return new FormGroup<TooManyRulesExceptionFormProperties>({
		});

	}

	export interface CreateTargetGroupOutput {
		TargetGroups?: Array<TargetGroup>;
	}
	export interface CreateTargetGroupOutputFormProperties {
	}
	export function CreateCreateTargetGroupOutputFormGroup() {
		return new FormGroup<CreateTargetGroupOutputFormProperties>({
		});

	}


	/** Information about a target group. */
	export interface TargetGroup {
		TargetGroupArn?: string;
		TargetGroupName?: string;
		Protocol?: ProtocolEnum;
		Port?: number | null;
		VpcId?: string;
		HealthCheckProtocol?: ProtocolEnum;
		HealthCheckPort?: string;
		HealthCheckEnabled?: boolean | null;
		HealthCheckIntervalSeconds?: number | null;
		HealthCheckTimeoutSeconds?: number | null;
		HealthyThresholdCount?: number | null;
		UnhealthyThresholdCount?: number | null;
		HealthCheckPath?: string;
		Matcher?: Matcher;
		LoadBalancerArns?: Array<string>;
		TargetType?: TargetTypeEnum;
		ProtocolVersion?: string;
		IpAddressType?: TargetGroupIpAddressTypeEnum;
	}

	/** Information about a target group. */
	export interface TargetGroupFormProperties {
		TargetGroupArn: FormControl<string | null | undefined>,
		TargetGroupName: FormControl<string | null | undefined>,
		Protocol: FormControl<ProtocolEnum | null | undefined>,
		Port: FormControl<number | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		HealthCheckProtocol: FormControl<ProtocolEnum | null | undefined>,
		HealthCheckPort: FormControl<string | null | undefined>,
		HealthCheckEnabled: FormControl<boolean | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		HealthCheckTimeoutSeconds: FormControl<number | null | undefined>,
		HealthyThresholdCount: FormControl<number | null | undefined>,
		UnhealthyThresholdCount: FormControl<number | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		TargetType: FormControl<TargetTypeEnum | null | undefined>,
		ProtocolVersion: FormControl<string | null | undefined>,
		IpAddressType: FormControl<TargetGroupIpAddressTypeEnum | null | undefined>,
	}
	export function CreateTargetGroupFormGroup() {
		return new FormGroup<TargetGroupFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined),
			TargetGroupName: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			HealthCheckPort: new FormControl<string | null | undefined>(undefined),
			HealthCheckEnabled: new FormControl<boolean | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			HealthCheckTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			HealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			UnhealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<TargetTypeEnum | null | undefined>(undefined),
			ProtocolVersion: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<TargetGroupIpAddressTypeEnum | null | undefined>(undefined),
		});

	}


	/** The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.  */
	export interface Matcher {
		HttpCode?: string;
		GrpcCode?: string;
	}

	/** The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.  */
	export interface MatcherFormProperties {
		HttpCode: FormControl<string | null | undefined>,
		GrpcCode: FormControl<string | null | undefined>,
	}
	export function CreateMatcherFormGroup() {
		return new FormGroup<MatcherFormProperties>({
			HttpCode: new FormControl<string | null | undefined>(undefined),
			GrpcCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetTypeEnum { instance = 'instance', ip = 'ip', lambda = 'lambda', alb = 'alb' }

	export enum TargetGroupIpAddressTypeEnum { ipv4 = 'ipv4', ipv6 = 'ipv6' }

	export interface DuplicateTargetGroupNameException {
	}
	export interface DuplicateTargetGroupNameExceptionFormProperties {
	}
	export function CreateDuplicateTargetGroupNameExceptionFormGroup() {
		return new FormGroup<DuplicateTargetGroupNameExceptionFormProperties>({
		});

	}

	export interface DeleteListenerOutput {
	}
	export interface DeleteListenerOutputFormProperties {
	}
	export function CreateDeleteListenerOutputFormGroup() {
		return new FormGroup<DeleteListenerOutputFormProperties>({
		});

	}

	export interface DeleteLoadBalancerOutput {
	}
	export interface DeleteLoadBalancerOutputFormProperties {
	}
	export function CreateDeleteLoadBalancerOutputFormGroup() {
		return new FormGroup<DeleteLoadBalancerOutputFormProperties>({
		});

	}

	export interface DeleteRuleOutput {
	}
	export interface DeleteRuleOutputFormProperties {
	}
	export function CreateDeleteRuleOutputFormGroup() {
		return new FormGroup<DeleteRuleOutputFormProperties>({
		});

	}

	export interface DeleteTargetGroupOutput {
	}
	export interface DeleteTargetGroupOutputFormProperties {
	}
	export function CreateDeleteTargetGroupOutputFormGroup() {
		return new FormGroup<DeleteTargetGroupOutputFormProperties>({
		});

	}

	export interface DeregisterTargetsOutput {
	}
	export interface DeregisterTargetsOutputFormProperties {
	}
	export function CreateDeregisterTargetsOutputFormGroup() {
		return new FormGroup<DeregisterTargetsOutputFormProperties>({
		});

	}


	/** Information about a target. */
	export interface TargetDescription {

		/** Required */
		Id: string;
		Port?: number | null;
		AvailabilityZone?: string;
	}

	/** Information about a target. */
	export interface TargetDescriptionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateTargetDescriptionFormGroup() {
		return new FormGroup<TargetDescriptionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTargetException {
	}
	export interface InvalidTargetExceptionFormProperties {
	}
	export function CreateInvalidTargetExceptionFormGroup() {
		return new FormGroup<InvalidTargetExceptionFormProperties>({
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


	/** Information about an Elastic Load Balancing resource limit for your Amazon Web Services account. */
	export interface Limit {
		Name?: string;
		Max?: string;
	}

	/** Information about an Elastic Load Balancing resource limit for your Amazon Web Services account. */
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

	export interface DescribeListenerCertificatesOutput {
		Certificates?: Array<Certificate>;
		NextMarker?: string;
	}
	export interface DescribeListenerCertificatesOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeListenerCertificatesOutputFormGroup() {
		return new FormGroup<DescribeListenerCertificatesOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeListenersOutput {
		Listeners?: Array<Listener>;
		NextMarker?: string;
	}
	export interface DescribeListenersOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeListenersOutputFormGroup() {
		return new FormGroup<DescribeListenersOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancerAttributesOutput {
		Attributes?: Array<LoadBalancerAttribute>;
	}
	export interface DescribeLoadBalancerAttributesOutputFormProperties {
	}
	export function CreateDescribeLoadBalancerAttributesOutputFormGroup() {
		return new FormGroup<DescribeLoadBalancerAttributesOutputFormProperties>({
		});

	}


	/** Information about a load balancer attribute. */
	export interface LoadBalancerAttribute {
		Key?: string;
		Value?: string;
	}

	/** Information about a load balancer attribute. */
	export interface LoadBalancerAttributeFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerAttributeFormGroup() {
		return new FormGroup<LoadBalancerAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancersOutput {
		LoadBalancers?: Array<LoadBalancer>;
		NextMarker?: string;
	}
	export interface DescribeLoadBalancersOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancersOutputFormGroup() {
		return new FormGroup<DescribeLoadBalancersOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRulesOutput {
		Rules?: Array<Rule>;
		NextMarker?: string;
	}
	export interface DescribeRulesOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRulesOutputFormGroup() {
		return new FormGroup<DescribeRulesOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSSLPoliciesOutput {
		SslPolicies?: Array<SslPolicy>;
		NextMarker?: string;
	}
	export interface DescribeSSLPoliciesOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSSLPoliciesOutputFormGroup() {
		return new FormGroup<DescribeSSLPoliciesOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a policy used for SSL negotiation. */
	export interface SslPolicy {
		SslProtocols?: Array<string>;
		Ciphers?: Array<Cipher>;
		Name?: string;
		SupportedLoadBalancerTypes?: Array<string>;
	}

	/** Information about a policy used for SSL negotiation. */
	export interface SslPolicyFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSslPolicyFormGroup() {
		return new FormGroup<SslPolicyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a cipher used in a policy. */
	export interface Cipher {
		Name?: string;
		Priority?: number | null;
	}

	/** Information about a cipher used in a policy. */
	export interface CipherFormProperties {
		Name: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateCipherFormGroup() {
		return new FormGroup<CipherFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsOutput {
		TagDescriptions?: Array<TagDescription>;
	}
	export interface DescribeTagsOutputFormProperties {
	}
	export function CreateDescribeTagsOutputFormGroup() {
		return new FormGroup<DescribeTagsOutputFormProperties>({
		});

	}


	/** The tags associated with a resource. */
	export interface TagDescription {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}

	/** The tags associated with a resource. */
	export interface TagDescriptionFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagDescriptionFormGroup() {
		return new FormGroup<TagDescriptionFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTargetGroupAttributesOutput {
		Attributes?: Array<TargetGroupAttribute>;
	}
	export interface DescribeTargetGroupAttributesOutputFormProperties {
	}
	export function CreateDescribeTargetGroupAttributesOutputFormGroup() {
		return new FormGroup<DescribeTargetGroupAttributesOutputFormProperties>({
		});

	}


	/** Information about a target group attribute. */
	export interface TargetGroupAttribute {
		Key?: string;
		Value?: string;
	}

	/** Information about a target group attribute. */
	export interface TargetGroupAttributeFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTargetGroupAttributeFormGroup() {
		return new FormGroup<TargetGroupAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTargetGroupsOutput {
		TargetGroups?: Array<TargetGroup>;
		NextMarker?: string;
	}
	export interface DescribeTargetGroupsOutputFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTargetGroupsOutputFormGroup() {
		return new FormGroup<DescribeTargetGroupsOutputFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTargetHealthOutput {
		TargetHealthDescriptions?: Array<TargetHealthDescription>;
	}
	export interface DescribeTargetHealthOutputFormProperties {
	}
	export function CreateDescribeTargetHealthOutputFormGroup() {
		return new FormGroup<DescribeTargetHealthOutputFormProperties>({
		});

	}


	/** Information about the health of a target. */
	export interface TargetHealthDescription {
		Target?: TargetDescription;
		HealthCheckPort?: string;
		TargetHealth?: TargetHealth;
	}

	/** Information about the health of a target. */
	export interface TargetHealthDescriptionFormProperties {
		HealthCheckPort: FormControl<string | null | undefined>,
	}
	export function CreateTargetHealthDescriptionFormGroup() {
		return new FormGroup<TargetHealthDescriptionFormProperties>({
			HealthCheckPort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the current health of a target. */
	export interface TargetHealth {
		State?: TargetHealthStateEnum;
		Reason?: TargetHealthReasonEnum;
		Description?: string;
	}

	/** Information about the current health of a target. */
	export interface TargetHealthFormProperties {
		State: FormControl<TargetHealthStateEnum | null | undefined>,
		Reason: FormControl<TargetHealthReasonEnum | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTargetHealthFormGroup() {
		return new FormGroup<TargetHealthFormProperties>({
			State: new FormControl<TargetHealthStateEnum | null | undefined>(undefined),
			Reason: new FormControl<TargetHealthReasonEnum | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetHealthStateEnum { initial = 'initial', healthy = 'healthy', unhealthy = 'unhealthy', unused = 'unused', draining = 'draining', unavailable = 'unavailable' }

	export enum TargetHealthReasonEnum { 'Elb.RegistrationInProgress' = 'Elb.RegistrationInProgress', 'Elb.InitialHealthChecking' = 'Elb.InitialHealthChecking', 'Target.ResponseCodeMismatch' = 'Target.ResponseCodeMismatch', 'Target.Timeout' = 'Target.Timeout', 'Target.FailedHealthChecks' = 'Target.FailedHealthChecks', 'Target.NotRegistered' = 'Target.NotRegistered', 'Target.NotInUse' = 'Target.NotInUse', 'Target.DeregistrationInProgress' = 'Target.DeregistrationInProgress', 'Target.InvalidState' = 'Target.InvalidState', 'Target.IpUnusable' = 'Target.IpUnusable', 'Target.HealthCheckDisabled' = 'Target.HealthCheckDisabled', 'Elb.InternalError' = 'Elb.InternalError' }

	export interface HealthUnavailableException {
	}
	export interface HealthUnavailableExceptionFormProperties {
	}
	export function CreateHealthUnavailableExceptionFormGroup() {
		return new FormGroup<HealthUnavailableExceptionFormProperties>({
		});

	}

	export interface ModifyListenerOutput {
		Listeners?: Array<Listener>;
	}
	export interface ModifyListenerOutputFormProperties {
	}
	export function CreateModifyListenerOutputFormGroup() {
		return new FormGroup<ModifyListenerOutputFormProperties>({
		});

	}

	export interface ModifyLoadBalancerAttributesOutput {
		Attributes?: Array<LoadBalancerAttribute>;
	}
	export interface ModifyLoadBalancerAttributesOutputFormProperties {
	}
	export function CreateModifyLoadBalancerAttributesOutputFormGroup() {
		return new FormGroup<ModifyLoadBalancerAttributesOutputFormProperties>({
		});

	}

	export interface ModifyRuleOutput {
		Rules?: Array<Rule>;
	}
	export interface ModifyRuleOutputFormProperties {
	}
	export function CreateModifyRuleOutputFormGroup() {
		return new FormGroup<ModifyRuleOutputFormProperties>({
		});

	}

	export interface ModifyTargetGroupOutput {
		TargetGroups?: Array<TargetGroup>;
	}
	export interface ModifyTargetGroupOutputFormProperties {
	}
	export function CreateModifyTargetGroupOutputFormGroup() {
		return new FormGroup<ModifyTargetGroupOutputFormProperties>({
		});

	}

	export interface ModifyTargetGroupAttributesOutput {
		Attributes?: Array<TargetGroupAttribute>;
	}
	export interface ModifyTargetGroupAttributesOutputFormProperties {
	}
	export function CreateModifyTargetGroupAttributesOutputFormGroup() {
		return new FormGroup<ModifyTargetGroupAttributesOutputFormProperties>({
		});

	}

	export interface RegisterTargetsOutput {
	}
	export interface RegisterTargetsOutputFormProperties {
	}
	export function CreateRegisterTargetsOutputFormGroup() {
		return new FormGroup<RegisterTargetsOutputFormProperties>({
		});

	}

	export interface RemoveListenerCertificatesOutput {
	}
	export interface RemoveListenerCertificatesOutputFormProperties {
	}
	export function CreateRemoveListenerCertificatesOutputFormGroup() {
		return new FormGroup<RemoveListenerCertificatesOutputFormProperties>({
		});

	}

	export interface RemoveTagsOutput {
	}
	export interface RemoveTagsOutputFormProperties {
	}
	export function CreateRemoveTagsOutputFormGroup() {
		return new FormGroup<RemoveTagsOutputFormProperties>({
		});

	}

	export interface SetIpAddressTypeOutput {
		IpAddressType?: IpAddressType;
	}
	export interface SetIpAddressTypeOutputFormProperties {
		IpAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateSetIpAddressTypeOutputFormGroup() {
		return new FormGroup<SetIpAddressTypeOutputFormProperties>({
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}

	export interface SetRulePrioritiesOutput {
		Rules?: Array<Rule>;
	}
	export interface SetRulePrioritiesOutputFormProperties {
	}
	export function CreateSetRulePrioritiesOutputFormGroup() {
		return new FormGroup<SetRulePrioritiesOutputFormProperties>({
		});

	}


	/** Information about the priorities for the rules for a listener. */
	export interface RulePriorityPair {
		RuleArn?: string;
		Priority?: number | null;
	}

	/** Information about the priorities for the rules for a listener. */
	export interface RulePriorityPairFormProperties {
		RuleArn: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateRulePriorityPairFormGroup() {
		return new FormGroup<RulePriorityPairFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SetSecurityGroupsOutput {
		SecurityGroupIds?: Array<string>;
	}
	export interface SetSecurityGroupsOutputFormProperties {
	}
	export function CreateSetSecurityGroupsOutputFormGroup() {
		return new FormGroup<SetSecurityGroupsOutputFormProperties>({
		});

	}

	export interface SetSubnetsOutput {
		AvailabilityZones?: Array<AvailabilityZone>;
		IpAddressType?: IpAddressType;
	}
	export interface SetSubnetsOutputFormProperties {
		IpAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateSetSubnetsOutputFormGroup() {
		return new FormGroup<SetSubnetsOutputFormProperties>({
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}

	export interface AddListenerCertificatesInput {

		/** Required */
		ListenerArn: string;

		/** Required */
		Certificates: Array<Certificate>;
	}
	export interface AddListenerCertificatesInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateAddListenerCertificatesInputFormGroup() {
		return new FormGroup<AddListenerCertificatesInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddTagsInput {

		/** Required */
		ResourceArns: Array<string>;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface AddTagsInputFormProperties {
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
		});

	}

	export enum AuthenticateCognitoActionConditionalBehaviorEnum { deny = 'deny', allow = 'allow', authenticate = 'authenticate' }

	export interface CreateListenerInput {

		/** Required */
		LoadBalancerArn: string;
		Protocol?: ProtocolEnum;
		Port?: number | null;
		SslPolicy?: string;
		Certificates?: Array<Certificate>;

		/** Required */
		DefaultActions: Array<Action>;
		AlpnPolicy?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateListenerInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
		Protocol: FormControl<ProtocolEnum | null | undefined>,
		Port: FormControl<number | null | undefined>,
		SslPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateListenerInputFormGroup() {
		return new FormGroup<CreateListenerInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			SslPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoadBalancerInput {

		/** Required */
		Name: string;
		Subnets?: Array<string>;
		SubnetMappings?: Array<SubnetMapping>;
		SecurityGroups?: Array<string>;
		Scheme?: LoadBalancerSchemeEnum;
		Tags?: Array<Tag>;
		Type?: LoadBalancerTypeEnum;
		IpAddressType?: IpAddressType;
		CustomerOwnedIpv4Pool?: string;
	}
	export interface CreateLoadBalancerInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Scheme: FormControl<LoadBalancerSchemeEnum | null | undefined>,
		Type: FormControl<LoadBalancerTypeEnum | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		CustomerOwnedIpv4Pool: FormControl<string | null | undefined>,
	}
	export function CreateCreateLoadBalancerInputFormGroup() {
		return new FormGroup<CreateLoadBalancerInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scheme: new FormControl<LoadBalancerSchemeEnum | null | undefined>(undefined),
			Type: new FormControl<LoadBalancerTypeEnum | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			CustomerOwnedIpv4Pool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleInput {

		/** Required */
		ListenerArn: string;

		/** Required */
		Conditions: Array<RuleCondition>;

		/** Required */
		Priority: number;

		/** Required */
		Actions: Array<Action>;
		Tags?: Array<Tag>;
	}
	export interface CreateRuleInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateRuleInputFormGroup() {
		return new FormGroup<CreateRuleInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTargetGroupInput {

		/** Required */
		Name: string;
		Protocol?: ProtocolEnum;
		ProtocolVersion?: string;
		Port?: number | null;
		VpcId?: string;
		HealthCheckProtocol?: ProtocolEnum;
		HealthCheckPort?: string;
		HealthCheckEnabled?: boolean | null;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number | null;
		HealthCheckTimeoutSeconds?: number | null;
		HealthyThresholdCount?: number | null;
		UnhealthyThresholdCount?: number | null;
		Matcher?: Matcher;
		TargetType?: TargetTypeEnum;
		Tags?: Array<Tag>;
		IpAddressType?: TargetGroupIpAddressTypeEnum;
	}
	export interface CreateTargetGroupInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Protocol: FormControl<ProtocolEnum | null | undefined>,
		ProtocolVersion: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		HealthCheckProtocol: FormControl<ProtocolEnum | null | undefined>,
		HealthCheckPort: FormControl<string | null | undefined>,
		HealthCheckEnabled: FormControl<boolean | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		HealthCheckTimeoutSeconds: FormControl<number | null | undefined>,
		HealthyThresholdCount: FormControl<number | null | undefined>,
		UnhealthyThresholdCount: FormControl<number | null | undefined>,
		TargetType: FormControl<TargetTypeEnum | null | undefined>,
		IpAddressType: FormControl<TargetGroupIpAddressTypeEnum | null | undefined>,
	}
	export function CreateCreateTargetGroupInputFormGroup() {
		return new FormGroup<CreateTargetGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			ProtocolVersion: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			HealthCheckPort: new FormControl<string | null | undefined>(undefined),
			HealthCheckEnabled: new FormControl<boolean | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			HealthCheckTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			HealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			UnhealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			TargetType: new FormControl<TargetTypeEnum | null | undefined>(undefined),
			IpAddressType: new FormControl<TargetGroupIpAddressTypeEnum | null | undefined>(undefined),
		});

	}

	export interface DeleteListenerInput {

		/** Required */
		ListenerArn: string;
	}
	export interface DeleteListenerInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteListenerInputFormGroup() {
		return new FormGroup<DeleteListenerInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLoadBalancerInput {

		/** Required */
		LoadBalancerArn: string;
	}
	export interface DeleteLoadBalancerInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoadBalancerInputFormGroup() {
		return new FormGroup<DeleteLoadBalancerInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleInput {

		/** Required */
		RuleArn: string;
	}
	export interface DeleteRuleInputFormProperties {

		/** Required */
		RuleArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleInputFormGroup() {
		return new FormGroup<DeleteRuleInputFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTargetGroupInput {

		/** Required */
		TargetGroupArn: string;
	}
	export interface DeleteTargetGroupInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTargetGroupInputFormGroup() {
		return new FormGroup<DeleteTargetGroupInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterTargetsInput {

		/** Required */
		TargetGroupArn: string;

		/** Required */
		Targets: Array<TargetDescription>;
	}
	export interface DeregisterTargetsInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTargetsInputFormGroup() {
		return new FormGroup<DeregisterTargetsInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeListenerCertificatesInput {

		/** Required */
		ListenerArn: string;
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeListenerCertificatesInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeListenerCertificatesInputFormGroup() {
		return new FormGroup<DescribeListenerCertificatesInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeListenersInput {
		LoadBalancerArn?: string;
		ListenerArns?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeListenersInputFormProperties {
		LoadBalancerArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeListenersInputFormGroup() {
		return new FormGroup<DescribeListenersInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBalancerAttributesInput {

		/** Required */
		LoadBalancerArn: string;
	}
	export interface DescribeLoadBalancerAttributesInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLoadBalancerAttributesInputFormGroup() {
		return new FormGroup<DescribeLoadBalancerAttributesInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLoadBalancersInput {
		LoadBalancerArns?: Array<string>;
		Names?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeLoadBalancersInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLoadBalancersInputFormGroup() {
		return new FormGroup<DescribeLoadBalancersInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRulesInput {
		ListenerArn?: string;
		RuleArns?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeRulesInputFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeRulesInputFormGroup() {
		return new FormGroup<DescribeRulesInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeSSLPoliciesInput {
		Names?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
		LoadBalancerType?: LoadBalancerTypeEnum;
	}
	export interface DescribeSSLPoliciesInputFormProperties {
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		LoadBalancerType: FormControl<LoadBalancerTypeEnum | null | undefined>,
	}
	export function CreateDescribeSSLPoliciesInputFormGroup() {
		return new FormGroup<DescribeSSLPoliciesInputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			LoadBalancerType: new FormControl<LoadBalancerTypeEnum | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsInput {

		/** Required */
		ResourceArns: Array<string>;
	}
	export interface DescribeTagsInputFormProperties {
	}
	export function CreateDescribeTagsInputFormGroup() {
		return new FormGroup<DescribeTagsInputFormProperties>({
		});

	}

	export interface DescribeTargetGroupAttributesInput {

		/** Required */
		TargetGroupArn: string;
	}
	export interface DescribeTargetGroupAttributesInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTargetGroupAttributesInputFormGroup() {
		return new FormGroup<DescribeTargetGroupAttributesInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTargetGroupsInput {
		LoadBalancerArn?: string;
		TargetGroupArns?: Array<string>;
		Names?: Array<string>;
		Marker?: string;
		PageSize?: number | null;
	}
	export interface DescribeTargetGroupsInputFormProperties {
		LoadBalancerArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTargetGroupsInputFormGroup() {
		return new FormGroup<DescribeTargetGroupsInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTargetHealthInput {

		/** Required */
		TargetGroupArn: string;
		Targets?: Array<TargetDescription>;
	}
	export interface DescribeTargetHealthInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTargetHealthInputFormGroup() {
		return new FormGroup<DescribeTargetHealthInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyListenerInput {

		/** Required */
		ListenerArn: string;
		Port?: number | null;
		Protocol?: ProtocolEnum;
		SslPolicy?: string;
		Certificates?: Array<Certificate>;
		DefaultActions?: Array<Action>;
		AlpnPolicy?: Array<string>;
	}
	export interface ModifyListenerInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<ProtocolEnum | null | undefined>,
		SslPolicy: FormControl<string | null | undefined>,
	}
	export function CreateModifyListenerInputFormGroup() {
		return new FormGroup<ModifyListenerInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			SslPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyLoadBalancerAttributesInput {

		/** Required */
		LoadBalancerArn: string;

		/** Required */
		Attributes: Array<LoadBalancerAttribute>;
	}
	export interface ModifyLoadBalancerAttributesInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyLoadBalancerAttributesInputFormGroup() {
		return new FormGroup<ModifyLoadBalancerAttributesInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyRuleInput {

		/** Required */
		RuleArn: string;
		Conditions?: Array<RuleCondition>;
		Actions?: Array<Action>;
	}
	export interface ModifyRuleInputFormProperties {

		/** Required */
		RuleArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyRuleInputFormGroup() {
		return new FormGroup<ModifyRuleInputFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyTargetGroupAttributesInput {

		/** Required */
		TargetGroupArn: string;

		/** Required */
		Attributes: Array<TargetGroupAttribute>;
	}
	export interface ModifyTargetGroupAttributesInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateModifyTargetGroupAttributesInputFormGroup() {
		return new FormGroup<ModifyTargetGroupAttributesInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyTargetGroupInput {

		/** Required */
		TargetGroupArn: string;
		HealthCheckProtocol?: ProtocolEnum;
		HealthCheckPort?: string;
		HealthCheckPath?: string;
		HealthCheckEnabled?: boolean | null;
		HealthCheckIntervalSeconds?: number | null;
		HealthCheckTimeoutSeconds?: number | null;
		HealthyThresholdCount?: number | null;
		UnhealthyThresholdCount?: number | null;
		Matcher?: Matcher;
	}
	export interface ModifyTargetGroupInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
		HealthCheckProtocol: FormControl<ProtocolEnum | null | undefined>,
		HealthCheckPort: FormControl<string | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckEnabled: FormControl<boolean | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		HealthCheckTimeoutSeconds: FormControl<number | null | undefined>,
		HealthyThresholdCount: FormControl<number | null | undefined>,
		UnhealthyThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateModifyTargetGroupInputFormGroup() {
		return new FormGroup<ModifyTargetGroupInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthCheckProtocol: new FormControl<ProtocolEnum | null | undefined>(undefined),
			HealthCheckPort: new FormControl<string | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckEnabled: new FormControl<boolean | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			HealthCheckTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			HealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
			UnhealthyThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterTargetsInput {

		/** Required */
		TargetGroupArn: string;

		/** Required */
		Targets: Array<TargetDescription>;
	}
	export interface RegisterTargetsInputFormProperties {

		/** Required */
		TargetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTargetsInputFormGroup() {
		return new FormGroup<RegisterTargetsInputFormProperties>({
			TargetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveListenerCertificatesInput {

		/** Required */
		ListenerArn: string;

		/** Required */
		Certificates: Array<Certificate>;
	}
	export interface RemoveListenerCertificatesInputFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveListenerCertificatesInputFormGroup() {
		return new FormGroup<RemoveListenerCertificatesInputFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsInput {

		/** Required */
		ResourceArns: Array<string>;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsInputFormProperties {
	}
	export function CreateRemoveTagsInputFormGroup() {
		return new FormGroup<RemoveTagsInputFormProperties>({
		});

	}

	export interface SetIpAddressTypeInput {

		/** Required */
		LoadBalancerArn: string;

		/** Required */
		IpAddressType: IpAddressType;
	}
	export interface SetIpAddressTypeInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,

		/** Required */
		IpAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateSetIpAddressTypeInputFormGroup() {
		return new FormGroup<SetIpAddressTypeInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetRulePrioritiesInput {

		/** Required */
		RulePriorities: Array<RulePriorityPair>;
	}
	export interface SetRulePrioritiesInputFormProperties {
	}
	export function CreateSetRulePrioritiesInputFormGroup() {
		return new FormGroup<SetRulePrioritiesInputFormProperties>({
		});

	}

	export interface SetSecurityGroupsInput {

		/** Required */
		LoadBalancerArn: string;

		/** Required */
		SecurityGroups: Array<string>;
	}
	export interface SetSecurityGroupsInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
	}
	export function CreateSetSecurityGroupsInputFormGroup() {
		return new FormGroup<SetSecurityGroupsInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetSubnetsInput {

		/** Required */
		LoadBalancerArn: string;
		Subnets?: Array<string>;
		SubnetMappings?: Array<SubnetMapping>;
		IpAddressType?: IpAddressType;
	}
	export interface SetSubnetsInputFormProperties {

		/** Required */
		LoadBalancerArn: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
	}
	export function CreateSetSubnetsInputFormGroup() {
		return new FormGroup<SetSubnetsInputFormProperties>({
			LoadBalancerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get #Action=AddListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<Certificate>} Certificates The certificate to add. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @return {void} Success
		 */
		GET_AddListenerCertificates(ListenerArn: string, Certificates: Array<Certificate>, Action: GET_AddListenerCertificatesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>
		 * Get #Action=AddTags
		 * @param {Array<string>} ResourceArns The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<Tag>} Tags The tags.
		 * @return {void} Success
		 */
		GET_AddTags(ResourceArns: Array<string>, Tags: Array<Tag>, Action: GET_AddTagsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTags?' + ResourceArns.map(z => `ResourceArns=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>
		 * Get #Action=CreateListener
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {ProtocolEnum} Protocol The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.
		 * @param {number} Port The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.
		 * @param {string} SslPolicy <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @param {Array<Certificate>} Certificates [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @param {Array<Action>} DefaultActions The actions for the default rule.
		 * @param {Array<string>} AlpnPolicy <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @param {Array<Tag>} Tags The tags to assign to the listener.
		 * @return {void} Success
		 */
		GET_CreateListener(LoadBalancerArn: string, Protocol: ProtocolEnum | null | undefined, Port: number | null | undefined, SslPolicy: string | null | undefined, Certificates: Array<Certificate> | null | undefined, DefaultActions: Array<Action>, AlpnPolicy: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateListenerAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateListener?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Protocol=' + Protocol + '&Port=' + Port + '&SslPolicy=' + (SslPolicy == null ? '' : encodeURIComponent(SslPolicy)) + '&' + Certificates?.map(z => `Certificates=${z}`).join('&') + '&' + DefaultActions.map(z => `DefaultActions=${z}`).join('&') + '&' + AlpnPolicy?.map(z => `AlpnPolicy=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>
		 * Get #Action=CreateLoadBalancer
		 * @param {string} Name <p>The name of the load balancer.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".</p>
		 * @param {Array<string>} Subnets <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones.</p>
		 * @param {Array<SubnetMapping>} SubnetMappings <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p> <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p>
		 * @param {Array<string>} SecurityGroups [Application Load Balancers] The IDs of the security groups for the load balancer.
		 * @param {LoadBalancerSchemeEnum} Scheme <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.</p> <p>The default is an Internet-facing load balancer.</p> <p>You cannot specify a scheme for a Gateway Load Balancer.</p>
		 * @param {Array<Tag>} Tags The tags to assign to the load balancer.
		 * @param {LoadBalancerTypeEnum} Type The type of load balancer. The default is <code>application</code>.
		 * @param {IpAddressType} IpAddressType The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). 
		 * @param {string} CustomerOwnedIpv4Pool [Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).
		 * @return {void} Success
		 */
		GET_CreateLoadBalancer(Name: string, Subnets: Array<string> | null | undefined, SubnetMappings: Array<SubnetMapping> | null | undefined, SecurityGroups: Array<string> | null | undefined, Scheme: LoadBalancerSchemeEnum | null | undefined, Tags: Array<Tag> | null | undefined, Type: LoadBalancerTypeEnum | null | undefined, IpAddressType: IpAddressType | null | undefined, CustomerOwnedIpv4Pool: string | null | undefined, Action: GET_CreateLoadBalancerAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLoadBalancer?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&' + Subnets?.map(z => `Subnets=${encodeURIComponent(z)}`).join('&') + '&' + SubnetMappings?.map(z => `SubnetMappings=${z}`).join('&') + '&' + SecurityGroups?.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&Scheme=' + Scheme + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Type=' + Type + '&IpAddressType=' + IpAddressType + '&CustomerOwnedIpv4Pool=' + (CustomerOwnedIpv4Pool == null ? '' : encodeURIComponent(CustomerOwnedIpv4Pool)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
		 * Get #Action=CreateRule
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<RuleCondition>} Conditions The conditions.
		 * @param {number} Priority The rule priority. A listener can't have multiple rules with the same priority.
		 * @param {Array<Action>} Actions The actions.
		 * @param {Array<Tag>} Tags The tags to assign to the rule.
		 * @return {void} Success
		 */
		GET_CreateRule(ListenerArn: string, Conditions: Array<RuleCondition>, Priority: number, Actions: Array<Action>, Tags: Array<Tag> | null | undefined, Action: GET_CreateRuleAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateRule?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Conditions.map(z => `Conditions=${z}`).join('&') + '&Priority=' + Priority + '&' + Actions.map(z => `Actions=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>
		 * Get #Action=CreateTargetGroup
		 * @param {string} Name <p>The name of the target group.</p> <p>This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.</p>
		 * @param {ProtocolEnum} Protocol The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.
		 * @param {string} ProtocolVersion [HTTP/HTTPS protocol] The protocol version. Specify <code>GRPC</code> to send requests to targets using gRPC. Specify <code>HTTP2</code> to send requests to targets using HTTP/2. The default is <code>HTTP1</code>, which sends requests to targets using HTTP/1.1.
		 * @param {number} Port The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
		 * @param {string} VpcId The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
		 * @param {ProtocolEnum} HealthCheckProtocol The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
		 * @param {string} HealthCheckPort The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is <code>traffic-port</code>, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.
		 * @param {boolean} HealthCheckEnabled Indicates whether health checks are enabled. If the target type is <code>lambda</code>, health checks are disabled by default but can be enabled. If the target type is <code>instance</code>, <code>ip</code>, or <code>alb</code>, health checks are always enabled and cannot be disabled.
		 * @param {string} HealthCheckPath <p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>
		 * @param {number} HealthCheckIntervalSeconds The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is <code>lambda</code>, the default is 35 seconds.
		 * @param {number} HealthCheckTimeoutSeconds The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is <code>lambda</code>, the default is 30 seconds.
		 * @param {number} HealthyThresholdCount The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is <code>lambda</code>, the default is 5.
		 * @param {number} UnhealthyThresholdCount The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is <code>lambda</code>, the default is 5.
		 * @param {GET_CreateTargetGroupMatcher} Matcher [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
		 * @param {TargetTypeEnum} TargetType <p>The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.</p> <ul> <li> <p> <code>instance</code> - Register targets by instance ID. This is the default value.</p> </li> <li> <p> <code>ip</code> - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.</p> </li> <li> <p> <code>lambda</code> - Register a single Lambda function as a target.</p> </li> <li> <p> <code>alb</code> - Register a single Application Load Balancer as a target.</p> </li> </ul>
		 * @param {Array<Tag>} Tags The tags to assign to the target group.
		 * @param {TargetGroupIpAddressTypeEnum} IpAddressType The type of IP address used for this target group. The possible values are <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified, the IP address type defaults to <code>ipv4</code>.
		 * @return {void} Success
		 */
		GET_CreateTargetGroup(Name: string, Protocol: ProtocolEnum | null | undefined, ProtocolVersion: string | null | undefined, Port: number | null | undefined, VpcId: string | null | undefined, HealthCheckProtocol: ProtocolEnum | null | undefined, HealthCheckPort: string | null | undefined, HealthCheckEnabled: boolean | null | undefined, HealthCheckPath: string | null | undefined, HealthCheckIntervalSeconds: number | null | undefined, HealthCheckTimeoutSeconds: number | null | undefined, HealthyThresholdCount: number | null | undefined, UnhealthyThresholdCount: number | null | undefined, Matcher: GET_CreateTargetGroupMatcher | null | undefined, TargetType: TargetTypeEnum | null | undefined, Tags: Array<Tag> | null | undefined, IpAddressType: TargetGroupIpAddressTypeEnum | null | undefined, Action: GET_CreateTargetGroupAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateTargetGroup?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Protocol=' + Protocol + '&ProtocolVersion=' + (ProtocolVersion == null ? '' : encodeURIComponent(ProtocolVersion)) + '&Port=' + Port + '&VpcId=' + (VpcId == null ? '' : encodeURIComponent(VpcId)) + '&HealthCheckProtocol=' + HealthCheckProtocol + '&HealthCheckPort=' + (HealthCheckPort == null ? '' : encodeURIComponent(HealthCheckPort)) + '&HealthCheckEnabled=' + HealthCheckEnabled + '&HealthCheckPath=' + (HealthCheckPath == null ? '' : encodeURIComponent(HealthCheckPath)) + '&HealthCheckIntervalSeconds=' + HealthCheckIntervalSeconds + '&HealthCheckTimeoutSeconds=' + HealthCheckTimeoutSeconds + '&HealthyThresholdCount=' + HealthyThresholdCount + '&UnhealthyThresholdCount=' + UnhealthyThresholdCount + '&Matcher=' + Matcher + '&TargetType=' + TargetType + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&IpAddressType=' + IpAddressType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
		 * Get #Action=DeleteListener
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @return {void} Success
		 */
		GET_DeleteListener(ListenerArn: string, Action: GET_DeleteListenerAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteListener?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
		 * Get #Action=DeleteLoadBalancer
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @return {void} Success
		 */
		GET_DeleteLoadBalancer(LoadBalancerArn: string, Action: GET_DeleteLoadBalancerAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLoadBalancer?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
		 * Get #Action=DeleteRule
		 * @param {string} RuleArn The Amazon Resource Name (ARN) of the rule.
		 * @return {void} Success
		 */
		GET_DeleteRule(RuleArn: string, Action: GET_DeleteRuleAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteRule?RuleArn=' + (RuleArn == null ? '' : encodeURIComponent(RuleArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
		 * Get #Action=DeleteTargetGroup
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @return {void} Success
		 */
		GET_DeleteTargetGroup(TargetGroupArn: string, Action: GET_DeleteTargetGroupAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTargetGroup?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
		 * Get #Action=DeregisterTargets
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.
		 * @return {void} Success
		 */
		GET_DeregisterTargets(TargetGroupArn: string, Targets: Array<TargetDescription>, Action: GET_DeregisterTargetsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeregisterTargets?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets.map(z => `Targets=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
		 * Get #Action=DescribeAccountLimits
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeAccountLimitsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get #Action=DescribeListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Names (ARN) of the listener.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeListenerCertificates(ListenerArn: string, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeListenerCertificatesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
		 * Get #Action=DescribeListeners
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<string>} ListenerArns The Amazon Resource Names (ARN) of the listeners.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeListeners(LoadBalancerArn: string | null | undefined, ListenerArns: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeListenersAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeListeners?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + ListenerArns?.map(z => `ListenerArns=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
		 * Get #Action=DescribeLoadBalancerAttributes
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerAttributes(LoadBalancerArn: string, Action: GET_DescribeLoadBalancerAttributesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerAttributes?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified load balancers or all of your load balancers.
		 * Get #Action=DescribeLoadBalancers
		 * @param {Array<string>} LoadBalancerArns The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
		 * @param {Array<string>} Names The names of the load balancers.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(LoadBalancerArns: Array<string> | null | undefined, Names: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeLoadBalancersAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancers?' + LoadBalancerArns?.map(z => `LoadBalancerArns=${encodeURIComponent(z)}`).join('&') + '&' + Names?.map(z => `Names=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
		 * Get #Action=DescribeRules
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<string>} RuleArns The Amazon Resource Names (ARN) of the rules.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeRules(ListenerArn: string | null | undefined, RuleArns: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeRulesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeRules?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + RuleArns?.map(z => `RuleArns=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * Get #Action=DescribeSSLPolicies
		 * @param {Array<string>} Names The names of the policies.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @param {LoadBalancerTypeEnum} LoadBalancerType  The type of load balancer. The default lists the SSL policies for all load balancers.
		 * @return {void} Success
		 */
		GET_DescribeSSLPolicies(Names: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, LoadBalancerType: LoadBalancerTypeEnum | null | undefined, Action: GET_DescribeSSLPoliciesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeSSLPolicies?' + Names?.map(z => `Names=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&LoadBalancerType=' + LoadBalancerType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
		 * Get #Action=DescribeTags
		 * @param {Array<string>} ResourceArns The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.
		 * @return {void} Success
		 */
		GET_DescribeTags(ResourceArns: Array<string>, Action: GET_DescribeTagsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTags?' + ResourceArns.map(z => `ResourceArns=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
		 * Get #Action=DescribeTargetGroupAttributes
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @return {void} Success
		 */
		GET_DescribeTargetGroupAttributes(TargetGroupArn: string, Action: GET_DescribeTargetGroupAttributesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTargetGroupAttributes?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
		 * Get #Action=DescribeTargetGroups
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<string>} TargetGroupArns The Amazon Resource Names (ARN) of the target groups.
		 * @param {Array<string>} Names The names of the target groups.
		 * @param {string} Marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} PageSize The maximum number of results to return with this call.
		 * @return {void} Success
		 */
		GET_DescribeTargetGroups(LoadBalancerArn: string | null | undefined, TargetGroupArns: Array<string> | null | undefined, Names: Array<string> | null | undefined, Marker: string | null | undefined, PageSize: number | null | undefined, Action: GET_DescribeTargetGroupsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTargetGroups?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + TargetGroupArns?.map(z => `TargetGroupArns=${encodeURIComponent(z)}`).join('&') + '&' + Names?.map(z => `Names=${encodeURIComponent(z)}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&PageSize=' + PageSize + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the health of the specified targets or all of your targets.
		 * Get #Action=DescribeTargetHealth
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets The targets.
		 * @return {void} Success
		 */
		GET_DescribeTargetHealth(TargetGroupArn: string, Targets: Array<TargetDescription> | null | undefined, Action: GET_DescribeTargetHealthAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTargetHealth?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets?.map(z => `Targets=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
		 * Get #Action=ModifyListener
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {number} Port The port for connections from clients to the load balancer. You cannot specify a port for a Gateway Load Balancer.
		 * @param {ProtocolEnum} Protocol The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols. You can’t change the protocol to UDP or TCP_UDP if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.
		 * @param {string} SslPolicy <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @param {Array<Certificate>} Certificates [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @param {Array<Action>} DefaultActions The actions for the default rule.
		 * @param {Array<string>} AlpnPolicy <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:</p> <ul> <li> <p> <code>HTTP1Only</code> </p> </li> <li> <p> <code>HTTP2Only</code> </p> </li> <li> <p> <code>HTTP2Optional</code> </p> </li> <li> <p> <code>HTTP2Preferred</code> </p> </li> <li> <p> <code>None</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN policies</a> in the <i>Network Load Balancers Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_ModifyListener(ListenerArn: string, Port: number | null | undefined, Protocol: ProtocolEnum | null | undefined, SslPolicy: string | null | undefined, Certificates: Array<Certificate> | null | undefined, DefaultActions: Array<Action> | null | undefined, AlpnPolicy: Array<string> | null | undefined, Action: GET_ModifyListenerAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyListener?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&Port=' + Port + '&Protocol=' + Protocol + '&SslPolicy=' + (SslPolicy == null ? '' : encodeURIComponent(SslPolicy)) + '&' + Certificates?.map(z => `Certificates=${z}`).join('&') + '&' + DefaultActions?.map(z => `DefaultActions=${z}`).join('&') + '&' + AlpnPolicy?.map(z => `AlpnPolicy=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
		 * Get #Action=ModifyLoadBalancerAttributes
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<LoadBalancerAttribute>} Attributes The load balancer attributes.
		 * @return {void} Success
		 */
		GET_ModifyLoadBalancerAttributes(LoadBalancerArn: string, Attributes: Array<LoadBalancerAttribute>, Action: GET_ModifyLoadBalancerAttributesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyLoadBalancerAttributes?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + Attributes.map(z => `Attributes=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
		 * Get #Action=ModifyRule
		 * @param {string} RuleArn The Amazon Resource Name (ARN) of the rule.
		 * @param {Array<RuleCondition>} Conditions The conditions.
		 * @param {Array<Action>} Actions The actions.
		 * @return {void} Success
		 */
		GET_ModifyRule(RuleArn: string, Conditions: Array<RuleCondition> | null | undefined, Actions: Array<Action> | null | undefined, Action: GET_ModifyRuleAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyRule?RuleArn=' + (RuleArn == null ? '' : encodeURIComponent(RuleArn)) + '&' + Conditions?.map(z => `Conditions=${z}`).join('&') + '&' + Actions?.map(z => `Actions=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the health checks used when evaluating the health state of the targets in the specified target group.
		 * Get #Action=ModifyTargetGroup
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {ProtocolEnum} HealthCheckProtocol The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
		 * @param {string} HealthCheckPort The port the load balancer uses when performing health checks on targets.
		 * @param {string} HealthCheckPath <p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>
		 * @param {boolean} HealthCheckEnabled Indicates whether health checks are enabled.
		 * @param {number} HealthCheckIntervalSeconds The approximate amount of time, in seconds, between health checks of an individual target.
		 * @param {number} HealthCheckTimeoutSeconds [HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.
		 * @param {number} HealthyThresholdCount The number of consecutive health checks successes required before considering an unhealthy target healthy.
		 * @param {number} UnhealthyThresholdCount The number of consecutive health check failures required before considering the target unhealthy.
		 * @param {GET_ModifyTargetGroupMatcher} Matcher [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
		 * @return {void} Success
		 */
		GET_ModifyTargetGroup(TargetGroupArn: string, HealthCheckProtocol: ProtocolEnum | null | undefined, HealthCheckPort: string | null | undefined, HealthCheckPath: string | null | undefined, HealthCheckEnabled: boolean | null | undefined, HealthCheckIntervalSeconds: number | null | undefined, HealthCheckTimeoutSeconds: number | null | undefined, HealthyThresholdCount: number | null | undefined, UnhealthyThresholdCount: number | null | undefined, Matcher: GET_ModifyTargetGroupMatcher | null | undefined, Action: GET_ModifyTargetGroupAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyTargetGroup?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&HealthCheckProtocol=' + HealthCheckProtocol + '&HealthCheckPort=' + (HealthCheckPort == null ? '' : encodeURIComponent(HealthCheckPort)) + '&HealthCheckPath=' + (HealthCheckPath == null ? '' : encodeURIComponent(HealthCheckPath)) + '&HealthCheckEnabled=' + HealthCheckEnabled + '&HealthCheckIntervalSeconds=' + HealthCheckIntervalSeconds + '&HealthCheckTimeoutSeconds=' + HealthCheckTimeoutSeconds + '&HealthyThresholdCount=' + HealthyThresholdCount + '&UnhealthyThresholdCount=' + UnhealthyThresholdCount + '&Matcher=' + Matcher + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the specified attributes of the specified target group.
		 * Get #Action=ModifyTargetGroupAttributes
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetGroupAttribute>} Attributes The attributes.
		 * @return {void} Success
		 */
		GET_ModifyTargetGroupAttributes(TargetGroupArn: string, Attributes: Array<TargetGroupAttribute>, Action: GET_ModifyTargetGroupAttributesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyTargetGroupAttributes?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Attributes.map(z => `Attributes=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>
		 * Get #Action=RegisterTargets
		 * @param {string} TargetGroupArn The Amazon Resource Name (ARN) of the target group.
		 * @param {Array<TargetDescription>} Targets The targets.
		 * @return {void} Success
		 */
		GET_RegisterTargets(TargetGroupArn: string, Targets: Array<TargetDescription>, Action: GET_RegisterTargetsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RegisterTargets?TargetGroupArn=' + (TargetGroupArn == null ? '' : encodeURIComponent(TargetGroupArn)) + '&' + Targets.map(z => `Targets=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.
		 * Get #Action=RemoveListenerCertificates
		 * @param {string} ListenerArn The Amazon Resource Name (ARN) of the listener.
		 * @param {Array<Certificate>} Certificates The certificate to remove. You can specify one certificate per call. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.
		 * @return {void} Success
		 */
		GET_RemoveListenerCertificates(ListenerArn: string, Certificates: Array<Certificate>, Action: GET_RemoveListenerCertificatesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveListenerCertificates?ListenerArn=' + (ListenerArn == null ? '' : encodeURIComponent(ListenerArn)) + '&' + Certificates.map(z => `Certificates=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
		 * Get #Action=RemoveTags
		 * @param {Array<string>} ResourceArns The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} TagKeys The tag keys for the tags to remove.
		 * @return {void} Success
		 */
		GET_RemoveTags(ResourceArns: Array<string>, TagKeys: Array<string>, Action: GET_RemoveTagsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTags?' + ResourceArns.map(z => `ResourceArns=${encodeURIComponent(z)}`).join('&') + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the type of IP addresses used by the subnets of the specified load balancer.
		 * Get #Action=SetIpAddressType
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {IpAddressType} IpAddressType The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.
		 * @return {void} Success
		 */
		GET_SetIpAddressType(LoadBalancerArn: string, IpAddressType: IpAddressType, Action: GET_SetIpAddressTypeAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIpAddressType?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&IpAddressType=' + IpAddressType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
		 * Get #Action=SetRulePriorities
		 * @param {Array<RulePriorityPair>} RulePriorities The rule priorities.
		 * @return {void} Success
		 */
		GET_SetRulePriorities(RulePriorities: Array<RulePriorityPair>, Action: GET_SetRulePrioritiesAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetRulePriorities?' + RulePriorities.map(z => `RulePriorities=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
		 * Get #Action=SetSecurityGroups
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<string>} SecurityGroups The IDs of the security groups.
		 * @return {void} Success
		 */
		GET_SetSecurityGroups(LoadBalancerArn: string, SecurityGroups: Array<string>, Action: GET_SetSecurityGroupsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSecurityGroups?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + SecurityGroups.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>
		 * Get #Action=SetSubnets
		 * @param {string} LoadBalancerArn The Amazon Resource Name (ARN) of the load balancer.
		 * @param {Array<string>} Subnets <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.</p>
		 * @param {Array<SubnetMapping>} SubnetMappings <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.</p> <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.</p> <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p> <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.</p> <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.</p>
		 * @param {IpAddressType} IpAddressType [Network Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener. .
		 * @return {void} Success
		 */
		GET_SetSubnets(LoadBalancerArn: string, Subnets: Array<string> | null | undefined, SubnetMappings: Array<SubnetMapping> | null | undefined, IpAddressType: IpAddressType | null | undefined, Action: GET_SetSubnetsAction, Version: GET_AddListenerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSubnets?LoadBalancerArn=' + (LoadBalancerArn == null ? '' : encodeURIComponent(LoadBalancerArn)) + '&' + Subnets?.map(z => `Subnets=${encodeURIComponent(z)}`).join('&') + '&' + SubnetMappings?.map(z => `SubnetMappings=${z}`).join('&') + '&IpAddressType=' + IpAddressType + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddListenerCertificatesAction { AddListenerCertificates = 'AddListenerCertificates' }

	export enum GET_AddListenerCertificatesVersion { '2015-12-01' = '2015-12-01' }

	export enum GET_AddTagsAction { AddTags = 'AddTags' }

	export enum GET_CreateListenerAction { CreateListener = 'CreateListener' }

	export enum GET_CreateLoadBalancerAction { CreateLoadBalancer = 'CreateLoadBalancer' }

	export enum GET_CreateRuleAction { CreateRule = 'CreateRule' }

	export interface GET_CreateTargetGroupMatcher {
		HttpCode?: string;
		GrpcCode?: string;
	}
	export interface GET_CreateTargetGroupMatcherFormProperties {
		HttpCode: FormControl<string | null | undefined>,
		GrpcCode: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateTargetGroupMatcherFormGroup() {
		return new FormGroup<GET_CreateTargetGroupMatcherFormProperties>({
			HttpCode: new FormControl<string | null | undefined>(undefined),
			GrpcCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateTargetGroupAction { CreateTargetGroup = 'CreateTargetGroup' }

	export enum GET_DeleteListenerAction { DeleteListener = 'DeleteListener' }

	export enum GET_DeleteLoadBalancerAction { DeleteLoadBalancer = 'DeleteLoadBalancer' }

	export enum GET_DeleteRuleAction { DeleteRule = 'DeleteRule' }

	export enum GET_DeleteTargetGroupAction { DeleteTargetGroup = 'DeleteTargetGroup' }

	export enum GET_DeregisterTargetsAction { DeregisterTargets = 'DeregisterTargets' }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 'DescribeAccountLimits' }

	export enum GET_DescribeListenerCertificatesAction { DescribeListenerCertificates = 'DescribeListenerCertificates' }

	export enum GET_DescribeListenersAction { DescribeListeners = 'DescribeListeners' }

	export enum GET_DescribeLoadBalancerAttributesAction { DescribeLoadBalancerAttributes = 'DescribeLoadBalancerAttributes' }

	export enum GET_DescribeLoadBalancersAction { DescribeLoadBalancers = 'DescribeLoadBalancers' }

	export enum GET_DescribeRulesAction { DescribeRules = 'DescribeRules' }

	export enum GET_DescribeSSLPoliciesAction { DescribeSSLPolicies = 'DescribeSSLPolicies' }

	export enum GET_DescribeTagsAction { DescribeTags = 'DescribeTags' }

	export enum GET_DescribeTargetGroupAttributesAction { DescribeTargetGroupAttributes = 'DescribeTargetGroupAttributes' }

	export enum GET_DescribeTargetGroupsAction { DescribeTargetGroups = 'DescribeTargetGroups' }

	export enum GET_DescribeTargetHealthAction { DescribeTargetHealth = 'DescribeTargetHealth' }

	export enum GET_ModifyListenerAction { ModifyListener = 'ModifyListener' }

	export enum GET_ModifyLoadBalancerAttributesAction { ModifyLoadBalancerAttributes = 'ModifyLoadBalancerAttributes' }

	export enum GET_ModifyRuleAction { ModifyRule = 'ModifyRule' }

	export interface GET_ModifyTargetGroupMatcher {
		HttpCode?: string;
		GrpcCode?: string;
	}
	export interface GET_ModifyTargetGroupMatcherFormProperties {
		HttpCode: FormControl<string | null | undefined>,
		GrpcCode: FormControl<string | null | undefined>,
	}
	export function CreateGET_ModifyTargetGroupMatcherFormGroup() {
		return new FormGroup<GET_ModifyTargetGroupMatcherFormProperties>({
			HttpCode: new FormControl<string | null | undefined>(undefined),
			GrpcCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_ModifyTargetGroupAction { ModifyTargetGroup = 'ModifyTargetGroup' }

	export enum GET_ModifyTargetGroupAttributesAction { ModifyTargetGroupAttributes = 'ModifyTargetGroupAttributes' }

	export enum GET_RegisterTargetsAction { RegisterTargets = 'RegisterTargets' }

	export enum GET_RemoveListenerCertificatesAction { RemoveListenerCertificates = 'RemoveListenerCertificates' }

	export enum GET_RemoveTagsAction { RemoveTags = 'RemoveTags' }

	export enum GET_SetIpAddressTypeAction { SetIpAddressType = 'SetIpAddressType' }

	export enum GET_SetRulePrioritiesAction { SetRulePriorities = 'SetRulePriorities' }

	export enum GET_SetSecurityGroupsAction { SetSecurityGroups = 'SetSecurityGroups' }

	export enum GET_SetSubnetsAction { SetSubnets = 'SetSubnets' }

}

