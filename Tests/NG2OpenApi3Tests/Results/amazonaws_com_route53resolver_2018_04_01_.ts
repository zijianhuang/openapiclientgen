import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateFirewallRuleGroupResponse {
		FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
	}
	export interface AssociateFirewallRuleGroupResponseFormProperties {
	}
	export function CreateAssociateFirewallRuleGroupResponseFormGroup() {
		return new FormGroup<AssociateFirewallRuleGroupResponseFormProperties>({
		});

	}


	/** An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.  */
	export interface FirewallRuleGroupAssociation {
		Id?: string;
		Arn?: string;
		FirewallRuleGroupId?: string;
		VpcId?: string;
		Name?: string;
		Priority?: number | null;
		MutationProtection?: MutationProtectionStatus;
		ManagedOwnerName?: string;
		Status?: FirewallRuleGroupAssociationStatus;
		StatusMessage?: string;
		CreatorRequestId?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.  */
	export interface FirewallRuleGroupAssociationFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		FirewallRuleGroupId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MutationProtection: FormControl<MutationProtectionStatus | null | undefined>,
		ManagedOwnerName: FormControl<string | null | undefined>,
		Status: FormControl<FirewallRuleGroupAssociationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleGroupAssociationFormGroup() {
		return new FormGroup<FirewallRuleGroupAssociationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			MutationProtection: new FormControl<MutationProtectionStatus | null | undefined>(undefined),
			ManagedOwnerName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FirewallRuleGroupAssociationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MutationProtectionStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum FirewallRuleGroupAssociationStatus { COMPLETE = 'COMPLETE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export interface AssociateFirewallRuleGroupRequest {

		/** Required */
		CreatorRequestId: string;

		/** Required */
		FirewallRuleGroupId: string;

		/** Required */
		VpcId: string;

		/** Required */
		Priority: number;

		/** Required */
		Name: string;
		MutationProtection?: MutationProtectionStatus;
		Tags?: Array<Tag>;
	}
	export interface AssociateFirewallRuleGroupRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		MutationProtection: FormControl<MutationProtectionStatus | null | undefined>,
	}
	export function CreateAssociateFirewallRuleGroupRequestFormGroup() {
		return new FormGroup<AssociateFirewallRuleGroupRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MutationProtection: new FormControl<MutationProtectionStatus | null | undefined>(undefined),
		});

	}


	/** One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
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

	export interface AssociateResolverEndpointIpAddressResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface AssociateResolverEndpointIpAddressResponseFormProperties {
	}
	export function CreateAssociateResolverEndpointIpAddressResponseFormGroup() {
		return new FormGroup<AssociateResolverEndpointIpAddressResponseFormProperties>({
		});

	}


	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, Updates the name, or ResolverEndpointType for an endpoint, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint. */
	export interface ResolverEndpoint {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		Name?: string;
		SecurityGroupIds?: Array<string>;
		Direction?: ResolverEndpointDirection;
		IpAddressCount?: number | null;
		HostVPCId?: string;
		Status?: ResolverEndpointStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
		ResolverEndpointType?: ResolverEndpointType;
		OutpostArn?: string;
		PreferredInstanceType?: string;
	}

	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, Updates the name, or ResolverEndpointType for an endpoint, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint. */
	export interface ResolverEndpointFormProperties {
		Id: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Direction: FormControl<ResolverEndpointDirection | null | undefined>,
		IpAddressCount: FormControl<number | null | undefined>,
		HostVPCId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverEndpointStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
		ResolverEndpointType: FormControl<ResolverEndpointType | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
		PreferredInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateResolverEndpointFormGroup() {
		return new FormGroup<ResolverEndpointFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Direction: new FormControl<ResolverEndpointDirection | null | undefined>(undefined),
			IpAddressCount: new FormControl<number | null | undefined>(undefined),
			HostVPCId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ResolverEndpointStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
			ResolverEndpointType: new FormControl<ResolverEndpointType | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			PreferredInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverEndpointDirection { INBOUND = 'INBOUND', OUTBOUND = 'OUTBOUND' }

	export enum ResolverEndpointStatus { CREATING = 'CREATING', OPERATIONAL = 'OPERATIONAL', UPDATING = 'UPDATING', AUTO_RECOVERING = 'AUTO_RECOVERING', ACTION_NEEDED = 'ACTION_NEEDED', DELETING = 'DELETING' }

	export enum ResolverEndpointType { IPV6 = 'IPV6', IPV4 = 'IPV4', DUALSTACK = 'DUALSTACK' }

	export interface AssociateResolverEndpointIpAddressRequest {

		/** Required */
		ResolverEndpointId: string;

		/** Required */
		IpAddress: IpAddressUpdate;
	}
	export interface AssociateResolverEndpointIpAddressRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResolverEndpointIpAddressRequestFormGroup() {
		return new FormGroup<AssociateResolverEndpointIpAddressRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdate {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
		Ipv6?: string;
	}

	/** In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdateFormProperties {
		IpId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		Ip: FormControl<string | null | undefined>,
		Ipv6: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressUpdateFormGroup() {
		return new FormGroup<IpAddressUpdateFormProperties>({
			IpId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			Ip: new FormControl<string | null | undefined>(undefined),
			Ipv6: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
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

	export interface ResourceExistsException {
	}
	export interface ResourceExistsExceptionFormProperties {
	}
	export function CreateResourceExistsExceptionFormGroup() {
		return new FormGroup<ResourceExistsExceptionFormProperties>({
		});

	}

	export interface AssociateResolverQueryLogConfigResponse {
		ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
	}
	export interface AssociateResolverQueryLogConfigResponseFormProperties {
	}
	export function CreateAssociateResolverQueryLogConfigResponseFormGroup() {
		return new FormGroup<AssociateResolverQueryLogConfigResponseFormProperties>({
		});

	}


	/** In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration. */
	export interface ResolverQueryLogConfigAssociation {
		Id?: string;
		ResolverQueryLogConfigId?: string;
		ResourceId?: string;
		Status?: ResolverQueryLogConfigAssociationStatus;
		Error?: ResolverQueryLogConfigAssociationError;
		ErrorMessage?: string;
		CreationTime?: string;
	}

	/** In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration. */
	export interface ResolverQueryLogConfigAssociationFormProperties {
		Id: FormControl<string | null | undefined>,
		ResolverQueryLogConfigId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverQueryLogConfigAssociationStatus | null | undefined>,
		Error: FormControl<ResolverQueryLogConfigAssociationError | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
	}
	export function CreateResolverQueryLogConfigAssociationFormGroup() {
		return new FormGroup<ResolverQueryLogConfigAssociationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ResolverQueryLogConfigId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ResolverQueryLogConfigAssociationStatus | null | undefined>(undefined),
			Error: new FormControl<ResolverQueryLogConfigAssociationError | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverQueryLogConfigAssociationStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', ACTION_NEEDED = 'ACTION_NEEDED', DELETING = 'DELETING', FAILED = 'FAILED' }

	export enum ResolverQueryLogConfigAssociationError { NONE = 'NONE', DESTINATION_NOT_FOUND = 'DESTINATION_NOT_FOUND', ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_SERVICE_ERROR = 'INTERNAL_SERVICE_ERROR' }

	export interface AssociateResolverQueryLogConfigRequest {

		/** Required */
		ResolverQueryLogConfigId: string;

		/** Required */
		ResourceId: string;
	}
	export interface AssociateResolverQueryLogConfigRequestFormProperties {

		/** Required */
		ResolverQueryLogConfigId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResolverQueryLogConfigRequestFormGroup() {
		return new FormGroup<AssociateResolverQueryLogConfigRequestFormProperties>({
			ResolverQueryLogConfigId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateResolverRuleResponse {
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface AssociateResolverRuleResponseFormProperties {
	}
	export function CreateAssociateResolverRuleResponseFormGroup() {
		return new FormGroup<AssociateResolverRuleResponseFormProperties>({
		});

	}


	/** In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.  */
	export interface ResolverRuleAssociation {
		Id?: string;
		ResolverRuleId?: string;
		Name?: string;
		VPCId?: string;
		Status?: ResolverRuleAssociationStatus;
		StatusMessage?: string;
	}

	/** In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.  */
	export interface ResolverRuleAssociationFormProperties {
		Id: FormControl<string | null | undefined>,
		ResolverRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VPCId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverRuleAssociationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResolverRuleAssociationFormGroup() {
		return new FormGroup<ResolverRuleAssociationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ResolverRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VPCId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ResolverRuleAssociationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverRuleAssociationStatus { CREATING = 'CREATING', COMPLETE = 'COMPLETE', DELETING = 'DELETING', FAILED = 'FAILED', OVERRIDDEN = 'OVERRIDDEN' }

	export interface AssociateResolverRuleRequest {

		/** Required */
		ResolverRuleId: string;
		Name?: string;

		/** Required */
		VPCId: string;
	}
	export interface AssociateResolverRuleRequestFormProperties {

		/** Required */
		ResolverRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResolverRuleRequestFormGroup() {
		return new FormGroup<AssociateResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateFirewallDomainListResponse {
		FirewallDomainList?: FirewallDomainList;
	}
	export interface CreateFirewallDomainListResponseFormProperties {
	}
	export function CreateCreateFirewallDomainListResponseFormGroup() {
		return new FormGroup<CreateFirewallDomainListResponseFormProperties>({
		});

	}


	/** <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p> */
	export interface FirewallDomainList {
		Id?: string;
		Arn?: string;
		Name?: string;
		DomainCount?: number | null;
		Status?: FirewallDomainListStatus;
		StatusMessage?: string;
		ManagedOwnerName?: string;
		CreatorRequestId?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p> */
	export interface FirewallDomainListFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DomainCount: FormControl<number | null | undefined>,
		Status: FormControl<FirewallDomainListStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ManagedOwnerName: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateFirewallDomainListFormGroup() {
		return new FormGroup<FirewallDomainListFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DomainCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<FirewallDomainListStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ManagedOwnerName: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallDomainListStatus { COMPLETE = 'COMPLETE', COMPLETE_IMPORT_FAILED = 'COMPLETE_IMPORT_FAILED', IMPORTING = 'IMPORTING', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export interface CreateFirewallDomainListRequest {

		/** Required */
		CreatorRequestId: string;

		/** Required */
		Name: string;
		Tags?: Array<Tag>;
	}
	export interface CreateFirewallDomainListRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallDomainListRequestFormGroup() {
		return new FormGroup<CreateFirewallDomainListRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFirewallRuleResponse {
		FirewallRule?: FirewallRule;
	}
	export interface CreateFirewallRuleResponseFormProperties {
	}
	export function CreateCreateFirewallRuleResponseFormGroup() {
		return new FormGroup<CreateFirewallRuleResponseFormProperties>({
		});

	}


	/** A single firewall rule in a rule group. */
	export interface FirewallRule {
		FirewallRuleGroupId?: string;
		FirewallDomainListId?: string;
		Name?: string;
		Priority?: number | null;
		Action?: Action;
		BlockResponse?: BlockResponse;
		BlockOverrideDomain?: string;
		BlockOverrideDnsType?: BlockOverrideDnsType;
		BlockOverrideTtl?: number | null;
		CreatorRequestId?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** A single firewall rule in a rule group. */
	export interface FirewallRuleFormProperties {
		FirewallRuleGroupId: FormControl<string | null | undefined>,
		FirewallDomainListId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Action: FormControl<Action | null | undefined>,
		BlockResponse: FormControl<BlockResponse | null | undefined>,
		BlockOverrideDomain: FormControl<string | null | undefined>,
		BlockOverrideDnsType: FormControl<BlockOverrideDnsType | null | undefined>,
		BlockOverrideTtl: FormControl<number | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleFormGroup() {
		return new FormGroup<FirewallRuleFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined),
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Action: new FormControl<Action | null | undefined>(undefined),
			BlockResponse: new FormControl<BlockResponse | null | undefined>(undefined),
			BlockOverrideDomain: new FormControl<string | null | undefined>(undefined),
			BlockOverrideDnsType: new FormControl<BlockOverrideDnsType | null | undefined>(undefined),
			BlockOverrideTtl: new FormControl<number | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Action { ALLOW = 'ALLOW', BLOCK = 'BLOCK', ALERT = 'ALERT' }

	export enum BlockResponse { NODATA = 'NODATA', NXDOMAIN = 'NXDOMAIN', OVERRIDE = 'OVERRIDE' }

	export enum BlockOverrideDnsType { CNAME = 'CNAME' }

	export interface CreateFirewallRuleRequest {

		/** Required */
		CreatorRequestId: string;

		/** Required */
		FirewallRuleGroupId: string;

		/** Required */
		FirewallDomainListId: string;

		/** Required */
		Priority: number;

		/** Required */
		Action: Action;
		BlockResponse?: BlockResponse;
		BlockOverrideDomain?: string;
		BlockOverrideDnsType?: BlockOverrideDnsType;
		BlockOverrideTtl?: number | null;

		/** Required */
		Name: string;
	}
	export interface CreateFirewallRuleRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Action: FormControl<Action | null | undefined>,
		BlockResponse: FormControl<BlockResponse | null | undefined>,
		BlockOverrideDomain: FormControl<string | null | undefined>,
		BlockOverrideDnsType: FormControl<BlockOverrideDnsType | null | undefined>,
		BlockOverrideTtl: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallRuleRequestFormGroup() {
		return new FormGroup<CreateFirewallRuleRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Action: new FormControl<Action | null | undefined>(undefined, [Validators.required]),
			BlockResponse: new FormControl<BlockResponse | null | undefined>(undefined),
			BlockOverrideDomain: new FormControl<string | null | undefined>(undefined),
			BlockOverrideDnsType: new FormControl<BlockOverrideDnsType | null | undefined>(undefined),
			BlockOverrideTtl: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFirewallRuleGroupResponse {
		FirewallRuleGroup?: FirewallRuleGroup;
	}
	export interface CreateFirewallRuleGroupResponseFormProperties {
	}
	export function CreateCreateFirewallRuleGroupResponseFormGroup() {
		return new FormGroup<CreateFirewallRuleGroupResponseFormProperties>({
		});

	}


	/** High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>. */
	export interface FirewallRuleGroup {
		Id?: string;
		Arn?: string;
		Name?: string;
		RuleCount?: number | null;
		Status?: FirewallRuleGroupAssociationStatus;
		StatusMessage?: string;
		OwnerId?: string;
		CreatorRequestId?: string;
		ShareStatus?: ShareStatus;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** High-level information for a firewall rule group. A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call <a>ListFirewallRules</a>. */
	export interface FirewallRuleGroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuleCount: FormControl<number | null | undefined>,
		Status: FormControl<FirewallRuleGroupAssociationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleGroupFormGroup() {
		return new FormGroup<FirewallRuleGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<FirewallRuleGroupAssociationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShareStatus { NOT_SHARED = 'NOT_SHARED', SHARED_WITH_ME = 'SHARED_WITH_ME', SHARED_BY_ME = 'SHARED_BY_ME' }

	export interface CreateFirewallRuleGroupRequest {

		/** Required */
		CreatorRequestId: string;

		/** Required */
		Name: string;
		Tags?: Array<Tag>;
	}
	export interface CreateFirewallRuleGroupRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallRuleGroupRequestFormGroup() {
		return new FormGroup<CreateFirewallRuleGroupRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOutpostResolverResponse {
		OutpostResolver?: OutpostResolver;
	}
	export interface CreateOutpostResolverResponseFormProperties {
	}
	export function CreateCreateOutpostResolverResponseFormGroup() {
		return new FormGroup<CreateOutpostResolverResponseFormProperties>({
		});

	}


	/** A complex type that contains settings for an existing Resolver on an Outpost. */
	export interface OutpostResolver {
		Arn?: string;
		CreationTime?: string;
		ModificationTime?: string;
		CreatorRequestId?: string;
		Id?: string;
		InstanceCount?: number | null;
		PreferredInstanceType?: string;
		Name?: string;
		Status?: OutpostResolverStatus;
		StatusMessage?: string;
		OutpostArn?: string;
	}

	/** A complex type that contains settings for an existing Resolver on an Outpost. */
	export interface OutpostResolverFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		PreferredInstanceType: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<OutpostResolverStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
	}
	export function CreateOutpostResolverFormGroup() {
		return new FormGroup<OutpostResolverFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			PreferredInstanceType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OutpostResolverStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OutpostResolverStatus { CREATING = 'CREATING', OPERATIONAL = 'OPERATIONAL', UPDATING = 'UPDATING', DELETING = 'DELETING', ACTION_NEEDED = 'ACTION_NEEDED', FAILED_CREATION = 'FAILED_CREATION', FAILED_DELETION = 'FAILED_DELETION' }

	export interface CreateOutpostResolverRequest {

		/** Required */
		CreatorRequestId: string;

		/** Required */
		Name: string;
		InstanceCount?: number | null;

		/** Required */
		PreferredInstanceType: string;

		/** Required */
		OutpostArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateOutpostResolverRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,

		/** Required */
		PreferredInstanceType: FormControl<string | null | undefined>,

		/** Required */
		OutpostArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOutpostResolverRequestFormGroup() {
		return new FormGroup<CreateOutpostResolverRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			PreferredInstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutpostArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateResolverEndpointResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface CreateResolverEndpointResponseFormProperties {
	}
	export function CreateCreateResolverEndpointResponseFormGroup() {
		return new FormGroup<CreateResolverEndpointResponseFormProperties>({
		});

	}

	export interface CreateResolverEndpointRequest {

		/** Required */
		CreatorRequestId: string;
		Name?: string;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		Direction: ResolverEndpointDirection;

		/** Required */
		IpAddresses: Array<IpAddressRequest>;
		Tags?: Array<Tag>;
		ResolverEndpointType?: ResolverEndpointType;
		OutpostArn?: string;
		PreferredInstanceType?: string;
	}
	export interface CreateResolverEndpointRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		Direction: FormControl<ResolverEndpointDirection | null | undefined>,
		ResolverEndpointType: FormControl<ResolverEndpointType | null | undefined>,
		OutpostArn: FormControl<string | null | undefined>,
		PreferredInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverEndpointRequestFormGroup() {
		return new FormGroup<CreateResolverEndpointRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Direction: new FormControl<ResolverEndpointDirection | null | undefined>(undefined, [Validators.required]),
			ResolverEndpointType: new FormControl<ResolverEndpointType | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			PreferredInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address. */
	export interface IpAddressRequest {

		/** Required */
		SubnetId: string;
		Ip?: string;
		Ipv6?: string;
	}

	/** In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address. */
	export interface IpAddressRequestFormProperties {

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
		Ip: FormControl<string | null | undefined>,
		Ipv6: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressRequestFormGroup() {
		return new FormGroup<IpAddressRequestFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Ip: new FormControl<string | null | undefined>(undefined),
			Ipv6: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResolverQueryLogConfigResponse {
		ResolverQueryLogConfig?: ResolverQueryLogConfig;
	}
	export interface CreateResolverQueryLogConfigResponseFormProperties {
	}
	export function CreateCreateResolverQueryLogConfigResponseFormGroup() {
		return new FormGroup<CreateResolverQueryLogConfigResponseFormProperties>({
		});

	}


	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration. */
	export interface ResolverQueryLogConfig {
		Id?: string;
		OwnerId?: string;
		Status?: ResolverQueryLogConfigStatus;
		ShareStatus?: ShareStatus;
		AssociationCount?: number | null;
		Arn?: string;
		Name?: string;
		DestinationArn?: string;
		CreatorRequestId?: string;
		CreationTime?: string;
	}

	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration. */
	export interface ResolverQueryLogConfigFormProperties {
		Id: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverQueryLogConfigStatus | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
		AssociationCount: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
	}
	export function CreateResolverQueryLogConfigFormGroup() {
		return new FormGroup<ResolverQueryLogConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ResolverQueryLogConfigStatus | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
			AssociationCount: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverQueryLogConfigStatus { CREATING = 'CREATING', CREATED = 'CREATED', DELETING = 'DELETING', FAILED = 'FAILED' }

	export interface CreateResolverQueryLogConfigRequest {

		/** Required */
		Name: string;

		/** Required */
		DestinationArn: string;

		/** Required */
		CreatorRequestId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateResolverQueryLogConfigRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DestinationArn: FormControl<string | null | undefined>,

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverQueryLogConfigRequestFormGroup() {
		return new FormGroup<CreateResolverQueryLogConfigRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResolverRuleResponse {
		ResolverRule?: ResolverRule;
	}
	export interface CreateResolverRuleResponseFormProperties {
	}
	export function CreateCreateResolverRuleResponseFormGroup() {
		return new FormGroup<CreateResolverRuleResponseFormProperties>({
		});

	}


	/** For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request. */
	export interface ResolverRule {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		DomainName?: string;
		Status?: ResolverRuleStatus;
		StatusMessage?: string;
		RuleType?: RuleTypeOption;
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		OwnerId?: string;
		ShareStatus?: ShareStatus;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request. */
	export interface ResolverRuleFormProperties {
		Id: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Status: FormControl<ResolverRuleStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		RuleType: FormControl<RuleTypeOption | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ResolverEndpointId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateResolverRuleFormGroup() {
		return new FormGroup<ResolverRuleFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ResolverRuleStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			RuleType: new FormControl<RuleTypeOption | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverRuleStatus { COMPLETE = 'COMPLETE', DELETING = 'DELETING', UPDATING = 'UPDATING', FAILED = 'FAILED' }

	export enum RuleTypeOption { FORWARD = 'FORWARD', SYSTEM = 'SYSTEM', RECURSIVE = 'RECURSIVE' }


	/** In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddress {
		Ip?: string;
		Port?: number | null;
		Ipv6?: string;
	}

	/** In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddressFormProperties {
		Ip: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Ipv6: FormControl<string | null | undefined>,
	}
	export function CreateTargetAddressFormGroup() {
		return new FormGroup<TargetAddressFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Ipv6: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResolverRuleRequest {

		/** Required */
		CreatorRequestId: string;
		Name?: string;

		/** Required */
		RuleType: RuleTypeOption;

		/** Required */
		DomainName: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateResolverRuleRequestFormProperties {

		/** Required */
		CreatorRequestId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		RuleType: FormControl<RuleTypeOption | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverRuleRequestFormGroup() {
		return new FormGroup<CreateResolverRuleRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleType: new FormControl<RuleTypeOption | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFirewallDomainListResponse {
		FirewallDomainList?: FirewallDomainList;
	}
	export interface DeleteFirewallDomainListResponseFormProperties {
	}
	export function CreateDeleteFirewallDomainListResponseFormGroup() {
		return new FormGroup<DeleteFirewallDomainListResponseFormProperties>({
		});

	}

	export interface DeleteFirewallDomainListRequest {

		/** Required */
		FirewallDomainListId: string;
	}
	export interface DeleteFirewallDomainListRequestFormProperties {

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallDomainListRequestFormGroup() {
		return new FormGroup<DeleteFirewallDomainListRequestFormProperties>({
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFirewallRuleResponse {
		FirewallRule?: FirewallRule;
	}
	export interface DeleteFirewallRuleResponseFormProperties {
	}
	export function CreateDeleteFirewallRuleResponseFormGroup() {
		return new FormGroup<DeleteFirewallRuleResponseFormProperties>({
		});

	}

	export interface DeleteFirewallRuleRequest {

		/** Required */
		FirewallRuleGroupId: string;

		/** Required */
		FirewallDomainListId: string;
	}
	export interface DeleteFirewallRuleRequestFormProperties {

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallRuleRequestFormGroup() {
		return new FormGroup<DeleteFirewallRuleRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFirewallRuleGroupResponse {
		FirewallRuleGroup?: FirewallRuleGroup;
	}
	export interface DeleteFirewallRuleGroupResponseFormProperties {
	}
	export function CreateDeleteFirewallRuleGroupResponseFormGroup() {
		return new FormGroup<DeleteFirewallRuleGroupResponseFormProperties>({
		});

	}

	export interface DeleteFirewallRuleGroupRequest {

		/** Required */
		FirewallRuleGroupId: string;
	}
	export interface DeleteFirewallRuleGroupRequestFormProperties {

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallRuleGroupRequestFormGroup() {
		return new FormGroup<DeleteFirewallRuleGroupRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOutpostResolverResponse {
		OutpostResolver?: OutpostResolver;
	}
	export interface DeleteOutpostResolverResponseFormProperties {
	}
	export function CreateDeleteOutpostResolverResponseFormGroup() {
		return new FormGroup<DeleteOutpostResolverResponseFormProperties>({
		});

	}

	export interface DeleteOutpostResolverRequest {

		/** Required */
		Id: string;
	}
	export interface DeleteOutpostResolverRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOutpostResolverRequestFormGroup() {
		return new FormGroup<DeleteOutpostResolverRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResolverEndpointResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface DeleteResolverEndpointResponseFormProperties {
	}
	export function CreateDeleteResolverEndpointResponseFormGroup() {
		return new FormGroup<DeleteResolverEndpointResponseFormProperties>({
		});

	}

	export interface DeleteResolverEndpointRequest {

		/** Required */
		ResolverEndpointId: string;
	}
	export interface DeleteResolverEndpointRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResolverEndpointRequestFormGroup() {
		return new FormGroup<DeleteResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResolverQueryLogConfigResponse {
		ResolverQueryLogConfig?: ResolverQueryLogConfig;
	}
	export interface DeleteResolverQueryLogConfigResponseFormProperties {
	}
	export function CreateDeleteResolverQueryLogConfigResponseFormGroup() {
		return new FormGroup<DeleteResolverQueryLogConfigResponseFormProperties>({
		});

	}

	export interface DeleteResolverQueryLogConfigRequest {

		/** Required */
		ResolverQueryLogConfigId: string;
	}
	export interface DeleteResolverQueryLogConfigRequestFormProperties {

		/** Required */
		ResolverQueryLogConfigId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResolverQueryLogConfigRequestFormGroup() {
		return new FormGroup<DeleteResolverQueryLogConfigRequestFormProperties>({
			ResolverQueryLogConfigId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResolverRuleResponse {
		ResolverRule?: ResolverRule;
	}
	export interface DeleteResolverRuleResponseFormProperties {
	}
	export function CreateDeleteResolverRuleResponseFormGroup() {
		return new FormGroup<DeleteResolverRuleResponseFormProperties>({
		});

	}

	export interface DeleteResolverRuleRequest {

		/** Required */
		ResolverRuleId: string;
	}
	export interface DeleteResolverRuleRequestFormProperties {

		/** Required */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResolverRuleRequestFormGroup() {
		return new FormGroup<DeleteResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DisassociateFirewallRuleGroupResponse {
		FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
	}
	export interface DisassociateFirewallRuleGroupResponseFormProperties {
	}
	export function CreateDisassociateFirewallRuleGroupResponseFormGroup() {
		return new FormGroup<DisassociateFirewallRuleGroupResponseFormProperties>({
		});

	}

	export interface DisassociateFirewallRuleGroupRequest {

		/** Required */
		FirewallRuleGroupAssociationId: string;
	}
	export interface DisassociateFirewallRuleGroupRequestFormProperties {

		/** Required */
		FirewallRuleGroupAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFirewallRuleGroupRequestFormGroup() {
		return new FormGroup<DisassociateFirewallRuleGroupRequestFormProperties>({
			FirewallRuleGroupAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateResolverEndpointIpAddressResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface DisassociateResolverEndpointIpAddressResponseFormProperties {
	}
	export function CreateDisassociateResolverEndpointIpAddressResponseFormGroup() {
		return new FormGroup<DisassociateResolverEndpointIpAddressResponseFormProperties>({
		});

	}

	export interface DisassociateResolverEndpointIpAddressRequest {

		/** Required */
		ResolverEndpointId: string;

		/** Required */
		IpAddress: IpAddressUpdate;
	}
	export interface DisassociateResolverEndpointIpAddressRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResolverEndpointIpAddressRequestFormGroup() {
		return new FormGroup<DisassociateResolverEndpointIpAddressRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateResolverQueryLogConfigResponse {
		ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
	}
	export interface DisassociateResolverQueryLogConfigResponseFormProperties {
	}
	export function CreateDisassociateResolverQueryLogConfigResponseFormGroup() {
		return new FormGroup<DisassociateResolverQueryLogConfigResponseFormProperties>({
		});

	}

	export interface DisassociateResolverQueryLogConfigRequest {

		/** Required */
		ResolverQueryLogConfigId: string;

		/** Required */
		ResourceId: string;
	}
	export interface DisassociateResolverQueryLogConfigRequestFormProperties {

		/** Required */
		ResolverQueryLogConfigId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResolverQueryLogConfigRequestFormGroup() {
		return new FormGroup<DisassociateResolverQueryLogConfigRequestFormProperties>({
			ResolverQueryLogConfigId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateResolverRuleResponse {
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface DisassociateResolverRuleResponseFormProperties {
	}
	export function CreateDisassociateResolverRuleResponseFormGroup() {
		return new FormGroup<DisassociateResolverRuleResponseFormProperties>({
		});

	}

	export interface DisassociateResolverRuleRequest {

		/** Required */
		VPCId: string;

		/** Required */
		ResolverRuleId: string;
	}
	export interface DisassociateResolverRuleRequestFormProperties {

		/** Required */
		VPCId: FormControl<string | null | undefined>,

		/** Required */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResolverRuleRequestFormGroup() {
		return new FormGroup<DisassociateResolverRuleRequestFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFirewallConfigResponse {
		FirewallConfig?: FirewallConfig;
	}
	export interface GetFirewallConfigResponseFormProperties {
	}
	export function CreateGetFirewallConfigResponseFormGroup() {
		return new FormGroup<GetFirewallConfigResponseFormProperties>({
		});

	}


	/** Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).  */
	export interface FirewallConfig {
		Id?: string;
		ResourceId?: string;
		OwnerId?: string;
		FirewallFailOpen?: FirewallFailOpenStatus;
	}

	/** Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).  */
	export interface FirewallConfigFormProperties {
		Id: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		FirewallFailOpen: FormControl<FirewallFailOpenStatus | null | undefined>,
	}
	export function CreateFirewallConfigFormGroup() {
		return new FormGroup<FirewallConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			FirewallFailOpen: new FormControl<FirewallFailOpenStatus | null | undefined>(undefined),
		});

	}

	export enum FirewallFailOpenStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED', USE_LOCAL_RESOURCE_SETTING = 'USE_LOCAL_RESOURCE_SETTING' }

	export interface GetFirewallConfigRequest {

		/** Required */
		ResourceId: string;
	}
	export interface GetFirewallConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallConfigRequestFormGroup() {
		return new FormGroup<GetFirewallConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFirewallDomainListResponse {
		FirewallDomainList?: FirewallDomainList;
	}
	export interface GetFirewallDomainListResponseFormProperties {
	}
	export function CreateGetFirewallDomainListResponseFormGroup() {
		return new FormGroup<GetFirewallDomainListResponseFormProperties>({
		});

	}

	export interface GetFirewallDomainListRequest {

		/** Required */
		FirewallDomainListId: string;
	}
	export interface GetFirewallDomainListRequestFormProperties {

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallDomainListRequestFormGroup() {
		return new FormGroup<GetFirewallDomainListRequestFormProperties>({
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFirewallRuleGroupResponse {
		FirewallRuleGroup?: FirewallRuleGroup;
	}
	export interface GetFirewallRuleGroupResponseFormProperties {
	}
	export function CreateGetFirewallRuleGroupResponseFormGroup() {
		return new FormGroup<GetFirewallRuleGroupResponseFormProperties>({
		});

	}

	export interface GetFirewallRuleGroupRequest {

		/** Required */
		FirewallRuleGroupId: string;
	}
	export interface GetFirewallRuleGroupRequestFormProperties {

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallRuleGroupRequestFormGroup() {
		return new FormGroup<GetFirewallRuleGroupRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFirewallRuleGroupAssociationResponse {
		FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
	}
	export interface GetFirewallRuleGroupAssociationResponseFormProperties {
	}
	export function CreateGetFirewallRuleGroupAssociationResponseFormGroup() {
		return new FormGroup<GetFirewallRuleGroupAssociationResponseFormProperties>({
		});

	}

	export interface GetFirewallRuleGroupAssociationRequest {

		/** Required */
		FirewallRuleGroupAssociationId: string;
	}
	export interface GetFirewallRuleGroupAssociationRequestFormProperties {

		/** Required */
		FirewallRuleGroupAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallRuleGroupAssociationRequestFormGroup() {
		return new FormGroup<GetFirewallRuleGroupAssociationRequestFormProperties>({
			FirewallRuleGroupAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFirewallRuleGroupPolicyResponse {
		FirewallRuleGroupPolicy?: string;
	}
	export interface GetFirewallRuleGroupPolicyResponseFormProperties {
		FirewallRuleGroupPolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallRuleGroupPolicyResponseFormGroup() {
		return new FormGroup<GetFirewallRuleGroupPolicyResponseFormProperties>({
			FirewallRuleGroupPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFirewallRuleGroupPolicyRequest {

		/** Required */
		Arn: string;
	}
	export interface GetFirewallRuleGroupPolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetFirewallRuleGroupPolicyRequestFormGroup() {
		return new FormGroup<GetFirewallRuleGroupPolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetOutpostResolverResponse {
		OutpostResolver?: OutpostResolver;
	}
	export interface GetOutpostResolverResponseFormProperties {
	}
	export function CreateGetOutpostResolverResponseFormGroup() {
		return new FormGroup<GetOutpostResolverResponseFormProperties>({
		});

	}

	export interface GetOutpostResolverRequest {

		/** Required */
		Id: string;
	}
	export interface GetOutpostResolverRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetOutpostResolverRequestFormGroup() {
		return new FormGroup<GetOutpostResolverRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverConfigResponse {
		ResolverConfig?: ResolverConfig;
	}
	export interface GetResolverConfigResponseFormProperties {
	}
	export function CreateGetResolverConfigResponseFormGroup() {
		return new FormGroup<GetResolverConfigResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a Resolver configuration for a VPC. */
	export interface ResolverConfig {
		Id?: string;
		ResourceId?: string;
		OwnerId?: string;
		AutodefinedReverse?: ResolverAutodefinedReverseStatus;
	}

	/** A complex type that contains information about a Resolver configuration for a VPC. */
	export interface ResolverConfigFormProperties {
		Id: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		AutodefinedReverse: FormControl<ResolverAutodefinedReverseStatus | null | undefined>,
	}
	export function CreateResolverConfigFormGroup() {
		return new FormGroup<ResolverConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			AutodefinedReverse: new FormControl<ResolverAutodefinedReverseStatus | null | undefined>(undefined),
		});

	}

	export enum ResolverAutodefinedReverseStatus { ENABLING = 'ENABLING', ENABLED = 'ENABLED', DISABLING = 'DISABLING', DISABLED = 'DISABLED', UPDATING_TO_USE_LOCAL_RESOURCE_SETTING = 'UPDATING_TO_USE_LOCAL_RESOURCE_SETTING', USE_LOCAL_RESOURCE_SETTING = 'USE_LOCAL_RESOURCE_SETTING' }

	export interface GetResolverConfigRequest {

		/** Required */
		ResourceId: string;
	}
	export interface GetResolverConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverConfigRequestFormGroup() {
		return new FormGroup<GetResolverConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverDnssecConfigResponse {
		ResolverDNSSECConfig?: ResolverDnssecConfig;
	}
	export interface GetResolverDnssecConfigResponseFormProperties {
	}
	export function CreateGetResolverDnssecConfigResponseFormGroup() {
		return new FormGroup<GetResolverDnssecConfigResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a configuration for DNSSEC validation. */
	export interface ResolverDnssecConfig {
		Id?: string;
		OwnerId?: string;
		ResourceId?: string;
		ValidationStatus?: ResolverAutodefinedReverseStatus;
	}

	/** A complex type that contains information about a configuration for DNSSEC validation. */
	export interface ResolverDnssecConfigFormProperties {
		Id: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ValidationStatus: FormControl<ResolverAutodefinedReverseStatus | null | undefined>,
	}
	export function CreateResolverDnssecConfigFormGroup() {
		return new FormGroup<ResolverDnssecConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ValidationStatus: new FormControl<ResolverAutodefinedReverseStatus | null | undefined>(undefined),
		});

	}

	export interface GetResolverDnssecConfigRequest {

		/** Required */
		ResourceId: string;
	}
	export interface GetResolverDnssecConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverDnssecConfigRequestFormGroup() {
		return new FormGroup<GetResolverDnssecConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverEndpointResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface GetResolverEndpointResponseFormProperties {
	}
	export function CreateGetResolverEndpointResponseFormGroup() {
		return new FormGroup<GetResolverEndpointResponseFormProperties>({
		});

	}

	export interface GetResolverEndpointRequest {

		/** Required */
		ResolverEndpointId: string;
	}
	export interface GetResolverEndpointRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverEndpointRequestFormGroup() {
		return new FormGroup<GetResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverQueryLogConfigResponse {
		ResolverQueryLogConfig?: ResolverQueryLogConfig;
	}
	export interface GetResolverQueryLogConfigResponseFormProperties {
	}
	export function CreateGetResolverQueryLogConfigResponseFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigResponseFormProperties>({
		});

	}

	export interface GetResolverQueryLogConfigRequest {

		/** Required */
		ResolverQueryLogConfigId: string;
	}
	export interface GetResolverQueryLogConfigRequestFormProperties {

		/** Required */
		ResolverQueryLogConfigId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverQueryLogConfigRequestFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigRequestFormProperties>({
			ResolverQueryLogConfigId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverQueryLogConfigAssociationResponse {
		ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
	}
	export interface GetResolverQueryLogConfigAssociationResponseFormProperties {
	}
	export function CreateGetResolverQueryLogConfigAssociationResponseFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigAssociationResponseFormProperties>({
		});

	}

	export interface GetResolverQueryLogConfigAssociationRequest {

		/** Required */
		ResolverQueryLogConfigAssociationId: string;
	}
	export interface GetResolverQueryLogConfigAssociationRequestFormProperties {

		/** Required */
		ResolverQueryLogConfigAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverQueryLogConfigAssociationRequestFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigAssociationRequestFormProperties>({
			ResolverQueryLogConfigAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverQueryLogConfigPolicyResponse {
		ResolverQueryLogConfigPolicy?: string;
	}
	export interface GetResolverQueryLogConfigPolicyResponseFormProperties {
		ResolverQueryLogConfigPolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverQueryLogConfigPolicyResponseFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigPolicyResponseFormProperties>({
			ResolverQueryLogConfigPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResolverQueryLogConfigPolicyRequest {

		/** Required */
		Arn: string;
	}
	export interface GetResolverQueryLogConfigPolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverQueryLogConfigPolicyRequestFormGroup() {
		return new FormGroup<GetResolverQueryLogConfigPolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnknownResourceException {
	}
	export interface UnknownResourceExceptionFormProperties {
	}
	export function CreateUnknownResourceExceptionFormGroup() {
		return new FormGroup<UnknownResourceExceptionFormProperties>({
		});

	}

	export interface GetResolverRuleResponse {
		ResolverRule?: ResolverRule;
	}
	export interface GetResolverRuleResponseFormProperties {
	}
	export function CreateGetResolverRuleResponseFormGroup() {
		return new FormGroup<GetResolverRuleResponseFormProperties>({
		});

	}

	export interface GetResolverRuleRequest {

		/** Required */
		ResolverRuleId: string;
	}
	export interface GetResolverRuleRequestFormProperties {

		/** Required */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRuleRequestFormGroup() {
		return new FormGroup<GetResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverRuleAssociationResponse {
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface GetResolverRuleAssociationResponseFormProperties {
	}
	export function CreateGetResolverRuleAssociationResponseFormGroup() {
		return new FormGroup<GetResolverRuleAssociationResponseFormProperties>({
		});

	}

	export interface GetResolverRuleAssociationRequest {

		/** Required */
		ResolverRuleAssociationId: string;
	}
	export interface GetResolverRuleAssociationRequestFormProperties {

		/** Required */
		ResolverRuleAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRuleAssociationRequestFormGroup() {
		return new FormGroup<GetResolverRuleAssociationRequestFormProperties>({
			ResolverRuleAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResolverRulePolicyResponse {
		ResolverRulePolicy?: string;
	}
	export interface GetResolverRulePolicyResponseFormProperties {
		ResolverRulePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRulePolicyResponseFormGroup() {
		return new FormGroup<GetResolverRulePolicyResponseFormProperties>({
			ResolverRulePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResolverRulePolicyRequest {

		/** Required */
		Arn: string;
	}
	export interface GetResolverRulePolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRulePolicyRequestFormGroup() {
		return new FormGroup<GetResolverRulePolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportFirewallDomainsResponse {
		Id?: string;
		Name?: string;
		Status?: FirewallDomainListStatus;
		StatusMessage?: string;
	}
	export interface ImportFirewallDomainsResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<FirewallDomainListStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateImportFirewallDomainsResponseFormGroup() {
		return new FormGroup<ImportFirewallDomainsResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FirewallDomainListStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportFirewallDomainsRequest {

		/** Required */
		FirewallDomainListId: string;

		/** Required */
		Operation: FirewallDomainImportOperation;

		/** Required */
		DomainFileUrl: string;
	}
	export interface ImportFirewallDomainsRequestFormProperties {

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,

		/** Required */
		Operation: FormControl<FirewallDomainImportOperation | null | undefined>,

		/** Required */
		DomainFileUrl: FormControl<string | null | undefined>,
	}
	export function CreateImportFirewallDomainsRequestFormGroup() {
		return new FormGroup<ImportFirewallDomainsRequestFormProperties>({
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operation: new FormControl<FirewallDomainImportOperation | null | undefined>(undefined, [Validators.required]),
			DomainFileUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallDomainImportOperation { REPLACE = 'REPLACE' }

	export interface ListFirewallConfigsResponse {
		NextToken?: string;
		FirewallConfigs?: Array<FirewallConfig>;
	}
	export interface ListFirewallConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallConfigsResponseFormGroup() {
		return new FormGroup<ListFirewallConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallConfigsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallConfigsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallConfigsRequestFormGroup() {
		return new FormGroup<ListFirewallConfigsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallDomainListsResponse {
		NextToken?: string;
		FirewallDomainLists?: Array<FirewallDomainListMetadata>;
	}
	export interface ListFirewallDomainListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallDomainListsResponseFormGroup() {
		return new FormGroup<ListFirewallDomainListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p> */
	export interface FirewallDomainListMetadata {
		Id?: string;
		Arn?: string;
		Name?: string;
		CreatorRequestId?: string;
		ManagedOwnerName?: string;
	}

	/** <p>Minimal high-level information for a firewall domain list. The action <a>ListFirewallDomainLists</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall domain list, call <a>GetFirewallDomainList</a> and <a>ListFirewallDomains</a>.</p> */
	export interface FirewallDomainListMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		ManagedOwnerName: FormControl<string | null | undefined>,
	}
	export function CreateFirewallDomainListMetadataFormGroup() {
		return new FormGroup<FirewallDomainListMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			ManagedOwnerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallDomainListsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallDomainListsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallDomainListsRequestFormGroup() {
		return new FormGroup<ListFirewallDomainListsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallDomainsResponse {
		NextToken?: string;
		Domains?: Array<string>;
	}
	export interface ListFirewallDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallDomainsResponseFormGroup() {
		return new FormGroup<ListFirewallDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallDomainsRequest {

		/** Required */
		FirewallDomainListId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallDomainsRequestFormProperties {

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallDomainsRequestFormGroup() {
		return new FormGroup<ListFirewallDomainsRequestFormProperties>({
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRuleGroupAssociationsResponse {
		NextToken?: string;
		FirewallRuleGroupAssociations?: Array<FirewallRuleGroupAssociation>;
	}
	export interface ListFirewallRuleGroupAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRuleGroupAssociationsResponseFormGroup() {
		return new FormGroup<ListFirewallRuleGroupAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRuleGroupAssociationsRequest {
		FirewallRuleGroupId?: string;
		VpcId?: string;
		Priority?: number | null;
		Status?: FirewallRuleGroupAssociationStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallRuleGroupAssociationsRequestFormProperties {
		FirewallRuleGroupId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Status: FormControl<FirewallRuleGroupAssociationStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRuleGroupAssociationsRequestFormGroup() {
		return new FormGroup<ListFirewallRuleGroupAssociationsRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<FirewallRuleGroupAssociationStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRuleGroupsResponse {
		NextToken?: string;
		FirewallRuleGroups?: Array<FirewallRuleGroupMetadata>;
	}
	export interface ListFirewallRuleGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRuleGroupsResponseFormGroup() {
		return new FormGroup<ListFirewallRuleGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p> */
	export interface FirewallRuleGroupMetadata {
		Id?: string;
		Arn?: string;
		Name?: string;
		OwnerId?: string;
		CreatorRequestId?: string;
		ShareStatus?: ShareStatus;
	}

	/** <p>Minimal high-level information for a firewall rule group. The action <a>ListFirewallRuleGroups</a> returns an array of these objects. </p> <p>To retrieve full information for a firewall rule group, call <a>GetFirewallRuleGroup</a> and <a>ListFirewallRules</a>.</p> */
	export interface FirewallRuleGroupMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
	}
	export function CreateFirewallRuleGroupMetadataFormGroup() {
		return new FormGroup<FirewallRuleGroupMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRuleGroupsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallRuleGroupsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRuleGroupsRequestFormGroup() {
		return new FormGroup<ListFirewallRuleGroupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRulesResponse {
		NextToken?: string;
		FirewallRules?: Array<FirewallRule>;
	}
	export interface ListFirewallRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRulesResponseFormGroup() {
		return new FormGroup<ListFirewallRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirewallRulesRequest {

		/** Required */
		FirewallRuleGroupId: string;
		Priority?: number | null;
		Action?: Action;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFirewallRulesRequestFormProperties {

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Action: FormControl<Action | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirewallRulesRequestFormGroup() {
		return new FormGroup<ListFirewallRulesRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			Action: new FormControl<Action | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutpostResolversResponse {
		OutpostResolvers?: Array<OutpostResolver>;
		NextToken?: string;
	}
	export interface ListOutpostResolversResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutpostResolversResponseFormGroup() {
		return new FormGroup<ListOutpostResolversResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOutpostResolversRequest {
		OutpostArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListOutpostResolversRequestFormProperties {
		OutpostArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutpostResolversRequestFormGroup() {
		return new FormGroup<ListOutpostResolversRequestFormProperties>({
			OutpostArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverConfigsResponse {
		NextToken?: string;
		ResolverConfigs?: Array<ResolverConfig>;
	}
	export interface ListResolverConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverConfigsResponseFormGroup() {
		return new FormGroup<ListResolverConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverConfigsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListResolverConfigsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverConfigsRequestFormGroup() {
		return new FormGroup<ListResolverConfigsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListResolverDnssecConfigsResponse {
		NextToken?: string;
		ResolverDnssecConfigs?: Array<ResolverDnssecConfig>;
	}
	export interface ListResolverDnssecConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverDnssecConfigsResponseFormGroup() {
		return new FormGroup<ListResolverDnssecConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverDnssecConfigsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListResolverDnssecConfigsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverDnssecConfigsRequestFormGroup() {
		return new FormGroup<ListResolverDnssecConfigsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p> */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	/** <p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p> */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverEndpointIpAddressesResponse {
		NextToken?: string;
		MaxResults?: number | null;
		IpAddresses?: Array<IpAddressResponse>;
	}
	export interface ListResolverEndpointIpAddressesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverEndpointIpAddressesResponseFormGroup() {
		return new FormGroup<ListResolverEndpointIpAddressesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries. */
	export interface IpAddressResponse {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
		Ipv6?: string;
		Status?: IpAddressStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	/** In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries. */
	export interface IpAddressResponseFormProperties {
		IpId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		Ip: FormControl<string | null | undefined>,
		Ipv6: FormControl<string | null | undefined>,
		Status: FormControl<IpAddressStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTime: FormControl<string | null | undefined>,
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressResponseFormGroup() {
		return new FormGroup<IpAddressResponseFormProperties>({
			IpId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			Ip: new FormControl<string | null | undefined>(undefined),
			Ipv6: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<IpAddressStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<string | null | undefined>(undefined),
			ModificationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpAddressStatus { CREATING = 'CREATING', FAILED_CREATION = 'FAILED_CREATION', ATTACHING = 'ATTACHING', ATTACHED = 'ATTACHED', REMAP_DETACHING = 'REMAP_DETACHING', REMAP_ATTACHING = 'REMAP_ATTACHING', DETACHING = 'DETACHING', FAILED_RESOURCE_GONE = 'FAILED_RESOURCE_GONE', DELETING = 'DELETING', DELETE_FAILED_FAS_EXPIRED = 'DELETE_FAILED_FAS_EXPIRED', UPDATING = 'UPDATING', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface ListResolverEndpointIpAddressesRequest {

		/** Required */
		ResolverEndpointId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListResolverEndpointIpAddressesRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverEndpointIpAddressesRequestFormGroup() {
		return new FormGroup<ListResolverEndpointIpAddressesRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverEndpointsResponse {
		NextToken?: string;
		MaxResults?: number | null;
		ResolverEndpoints?: Array<ResolverEndpoint>;
	}
	export interface ListResolverEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverEndpointsResponseFormGroup() {
		return new FormGroup<ListResolverEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResolverEndpointsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListResolverEndpointsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverEndpointsRequestFormGroup() {
		return new FormGroup<ListResolverEndpointsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverQueryLogConfigAssociationsResponse {
		NextToken?: string;
		TotalCount?: number | null;
		TotalFilteredCount?: number | null;
		ResolverQueryLogConfigAssociations?: Array<ResolverQueryLogConfigAssociation>;
	}
	export interface ListResolverQueryLogConfigAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
		TotalFilteredCount: FormControl<number | null | undefined>,
	}
	export function CreateListResolverQueryLogConfigAssociationsResponseFormGroup() {
		return new FormGroup<ListResolverQueryLogConfigAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
			TotalFilteredCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResolverQueryLogConfigAssociationsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
		SortBy?: string;
		SortOrder?: SortOrder;
	}
	export interface ListResolverQueryLogConfigAssociationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListResolverQueryLogConfigAssociationsRequestFormGroup() {
		return new FormGroup<ListResolverQueryLogConfigAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListResolverQueryLogConfigsResponse {
		NextToken?: string;
		TotalCount?: number | null;
		TotalFilteredCount?: number | null;
		ResolverQueryLogConfigs?: Array<ResolverQueryLogConfig>;
	}
	export interface ListResolverQueryLogConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
		TotalFilteredCount: FormControl<number | null | undefined>,
	}
	export function CreateListResolverQueryLogConfigsResponseFormGroup() {
		return new FormGroup<ListResolverQueryLogConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
			TotalFilteredCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResolverQueryLogConfigsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
		SortBy?: string;
		SortOrder?: SortOrder;
	}
	export interface ListResolverQueryLogConfigsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListResolverQueryLogConfigsRequestFormGroup() {
		return new FormGroup<ListResolverQueryLogConfigsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListResolverRuleAssociationsResponse {
		NextToken?: string;
		MaxResults?: number | null;
		ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
	}
	export interface ListResolverRuleAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverRuleAssociationsResponseFormGroup() {
		return new FormGroup<ListResolverRuleAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResolverRuleAssociationsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListResolverRuleAssociationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverRuleAssociationsRequestFormGroup() {
		return new FormGroup<ListResolverRuleAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverRulesResponse {
		NextToken?: string;
		MaxResults?: number | null;
		ResolverRules?: Array<ResolverRule>;
	}
	export interface ListResolverRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverRulesResponseFormGroup() {
		return new FormGroup<ListResolverRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResolverRulesRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListResolverRulesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverRulesRequestFormGroup() {
		return new FormGroup<ListResolverRulesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
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

		/** Required */
		ResourceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFirewallRuleGroupPolicyResponse {
		ReturnValue?: boolean | null;
	}
	export interface PutFirewallRuleGroupPolicyResponseFormProperties {
		ReturnValue: FormControl<boolean | null | undefined>,
	}
	export function CreatePutFirewallRuleGroupPolicyResponseFormGroup() {
		return new FormGroup<PutFirewallRuleGroupPolicyResponseFormProperties>({
			ReturnValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutFirewallRuleGroupPolicyRequest {

		/** Required */
		Arn: string;

		/** Required */
		FirewallRuleGroupPolicy: string;
	}
	export interface PutFirewallRuleGroupPolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		FirewallRuleGroupPolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutFirewallRuleGroupPolicyRequestFormGroup() {
		return new FormGroup<PutFirewallRuleGroupPolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallRuleGroupPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to a <code>PutResolverQueryLogConfigPolicy</code> request. */
	export interface PutResolverQueryLogConfigPolicyResponse {
		ReturnValue?: boolean | null;
	}

	/** The response to a <code>PutResolverQueryLogConfigPolicy</code> request. */
	export interface PutResolverQueryLogConfigPolicyResponseFormProperties {
		ReturnValue: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResolverQueryLogConfigPolicyResponseFormGroup() {
		return new FormGroup<PutResolverQueryLogConfigPolicyResponseFormProperties>({
			ReturnValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutResolverQueryLogConfigPolicyRequest {

		/** Required */
		Arn: string;

		/** Required */
		ResolverQueryLogConfigPolicy: string;
	}
	export interface PutResolverQueryLogConfigPolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ResolverQueryLogConfigPolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutResolverQueryLogConfigPolicyRequestFormGroup() {
		return new FormGroup<PutResolverQueryLogConfigPolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResolverQueryLogConfigPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidPolicyDocument {
	}
	export interface InvalidPolicyDocumentFormProperties {
	}
	export function CreateInvalidPolicyDocumentFormGroup() {
		return new FormGroup<InvalidPolicyDocumentFormProperties>({
		});

	}


	/** The response to a <code>PutResolverRulePolicy</code> request. */
	export interface PutResolverRulePolicyResponse {
		ReturnValue?: boolean | null;
	}

	/** The response to a <code>PutResolverRulePolicy</code> request. */
	export interface PutResolverRulePolicyResponseFormProperties {
		ReturnValue: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResolverRulePolicyResponseFormGroup() {
		return new FormGroup<PutResolverRulePolicyResponseFormProperties>({
			ReturnValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutResolverRulePolicyRequest {

		/** Required */
		Arn: string;

		/** Required */
		ResolverRulePolicy: string;
	}
	export interface PutResolverRulePolicyRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ResolverRulePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutResolverRulePolicyRequestFormGroup() {
		return new FormGroup<PutResolverRulePolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResolverRulePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidTagException {
	}
	export interface InvalidTagExceptionFormProperties {
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
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

	export interface UpdateFirewallConfigResponse {
		FirewallConfig?: FirewallConfig;
	}
	export interface UpdateFirewallConfigResponseFormProperties {
	}
	export function CreateUpdateFirewallConfigResponseFormGroup() {
		return new FormGroup<UpdateFirewallConfigResponseFormProperties>({
		});

	}

	export interface UpdateFirewallConfigRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		FirewallFailOpen: FirewallFailOpenStatus;
	}
	export interface UpdateFirewallConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		FirewallFailOpen: FormControl<FirewallFailOpenStatus | null | undefined>,
	}
	export function CreateUpdateFirewallConfigRequestFormGroup() {
		return new FormGroup<UpdateFirewallConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallFailOpen: new FormControl<FirewallFailOpenStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFirewallDomainsResponse {
		Id?: string;
		Name?: string;
		Status?: FirewallDomainListStatus;
		StatusMessage?: string;
	}
	export interface UpdateFirewallDomainsResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<FirewallDomainListStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallDomainsResponseFormGroup() {
		return new FormGroup<UpdateFirewallDomainsResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FirewallDomainListStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallDomainsRequest {

		/** Required */
		FirewallDomainListId: string;

		/** Required */
		Operation: FirewallDomainUpdateOperation;

		/** Required */
		Domains: Array<string>;
	}
	export interface UpdateFirewallDomainsRequestFormProperties {

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,

		/** Required */
		Operation: FormControl<FirewallDomainUpdateOperation | null | undefined>,
	}
	export function CreateUpdateFirewallDomainsRequestFormGroup() {
		return new FormGroup<UpdateFirewallDomainsRequestFormProperties>({
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operation: new FormControl<FirewallDomainUpdateOperation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallDomainUpdateOperation { ADD = 'ADD', REMOVE = 'REMOVE', REPLACE = 'REPLACE' }

	export interface UpdateFirewallRuleResponse {
		FirewallRule?: FirewallRule;
	}
	export interface UpdateFirewallRuleResponseFormProperties {
	}
	export function CreateUpdateFirewallRuleResponseFormGroup() {
		return new FormGroup<UpdateFirewallRuleResponseFormProperties>({
		});

	}

	export interface UpdateFirewallRuleRequest {

		/** Required */
		FirewallRuleGroupId: string;

		/** Required */
		FirewallDomainListId: string;
		Priority?: number | null;
		Action?: Action;
		BlockResponse?: BlockResponse;
		BlockOverrideDomain?: string;
		BlockOverrideDnsType?: BlockOverrideDnsType;
		BlockOverrideTtl?: number | null;
		Name?: string;
	}
	export interface UpdateFirewallRuleRequestFormProperties {

		/** Required */
		FirewallRuleGroupId: FormControl<string | null | undefined>,

		/** Required */
		FirewallDomainListId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Action: FormControl<Action | null | undefined>,
		BlockResponse: FormControl<BlockResponse | null | undefined>,
		BlockOverrideDomain: FormControl<string | null | undefined>,
		BlockOverrideDnsType: FormControl<BlockOverrideDnsType | null | undefined>,
		BlockOverrideTtl: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallRuleRequestFormGroup() {
		return new FormGroup<UpdateFirewallRuleRequestFormProperties>({
			FirewallRuleGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirewallDomainListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			Action: new FormControl<Action | null | undefined>(undefined),
			BlockResponse: new FormControl<BlockResponse | null | undefined>(undefined),
			BlockOverrideDomain: new FormControl<string | null | undefined>(undefined),
			BlockOverrideDnsType: new FormControl<BlockOverrideDnsType | null | undefined>(undefined),
			BlockOverrideTtl: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFirewallRuleGroupAssociationResponse {
		FirewallRuleGroupAssociation?: FirewallRuleGroupAssociation;
	}
	export interface UpdateFirewallRuleGroupAssociationResponseFormProperties {
	}
	export function CreateUpdateFirewallRuleGroupAssociationResponseFormGroup() {
		return new FormGroup<UpdateFirewallRuleGroupAssociationResponseFormProperties>({
		});

	}

	export interface UpdateFirewallRuleGroupAssociationRequest {

		/** Required */
		FirewallRuleGroupAssociationId: string;
		Priority?: number | null;
		MutationProtection?: MutationProtectionStatus;
		Name?: string;
	}
	export interface UpdateFirewallRuleGroupAssociationRequestFormProperties {

		/** Required */
		FirewallRuleGroupAssociationId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		MutationProtection: FormControl<MutationProtectionStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallRuleGroupAssociationRequestFormGroup() {
		return new FormGroup<UpdateFirewallRuleGroupAssociationRequestFormProperties>({
			FirewallRuleGroupAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			MutationProtection: new FormControl<MutationProtectionStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOutpostResolverResponse {
		OutpostResolver?: OutpostResolver;
	}
	export interface UpdateOutpostResolverResponseFormProperties {
	}
	export function CreateUpdateOutpostResolverResponseFormGroup() {
		return new FormGroup<UpdateOutpostResolverResponseFormProperties>({
		});

	}

	export interface UpdateOutpostResolverRequest {

		/** Required */
		Id: string;
		Name?: string;
		InstanceCount?: number | null;
		PreferredInstanceType?: string;
	}
	export interface UpdateOutpostResolverRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		PreferredInstanceType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOutpostResolverRequestFormGroup() {
		return new FormGroup<UpdateOutpostResolverRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			PreferredInstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverConfigResponse {
		ResolverConfig?: ResolverConfig;
	}
	export interface UpdateResolverConfigResponseFormProperties {
	}
	export function CreateUpdateResolverConfigResponseFormGroup() {
		return new FormGroup<UpdateResolverConfigResponseFormProperties>({
		});

	}

	export interface UpdateResolverConfigRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		AutodefinedReverseFlag: AutodefinedReverseFlag;
	}
	export interface UpdateResolverConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		AutodefinedReverseFlag: FormControl<AutodefinedReverseFlag | null | undefined>,
	}
	export function CreateUpdateResolverConfigRequestFormGroup() {
		return new FormGroup<UpdateResolverConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutodefinedReverseFlag: new FormControl<AutodefinedReverseFlag | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutodefinedReverseFlag { ENABLE = 'ENABLE', DISABLE = 'DISABLE', USE_LOCAL_RESOURCE_SETTING = 'USE_LOCAL_RESOURCE_SETTING' }

	export interface UpdateResolverDnssecConfigResponse {
		ResolverDNSSECConfig?: ResolverDnssecConfig;
	}
	export interface UpdateResolverDnssecConfigResponseFormProperties {
	}
	export function CreateUpdateResolverDnssecConfigResponseFormGroup() {
		return new FormGroup<UpdateResolverDnssecConfigResponseFormProperties>({
		});

	}

	export interface UpdateResolverDnssecConfigRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Validation: AutodefinedReverseFlag;
	}
	export interface UpdateResolverDnssecConfigRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		Validation: FormControl<AutodefinedReverseFlag | null | undefined>,
	}
	export function CreateUpdateResolverDnssecConfigRequestFormGroup() {
		return new FormGroup<UpdateResolverDnssecConfigRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Validation: new FormControl<AutodefinedReverseFlag | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResolverEndpointResponse {
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface UpdateResolverEndpointResponseFormProperties {
	}
	export function CreateUpdateResolverEndpointResponseFormGroup() {
		return new FormGroup<UpdateResolverEndpointResponseFormProperties>({
		});

	}

	export interface UpdateResolverEndpointRequest {

		/** Required */
		ResolverEndpointId: string;
		Name?: string;
		ResolverEndpointType?: ResolverEndpointType;
		UpdateIpAddresses?: Array<UpdateIpAddress>;
	}
	export interface UpdateResolverEndpointRequestFormProperties {

		/** Required */
		ResolverEndpointId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ResolverEndpointType: FormControl<ResolverEndpointType | null | undefined>,
	}
	export function CreateUpdateResolverEndpointRequestFormGroup() {
		return new FormGroup<UpdateResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			ResolverEndpointType: new FormControl<ResolverEndpointType | null | undefined>(undefined),
		});

	}


	/**  Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.  */
	export interface UpdateIpAddress {

		/** Required */
		IpId: string;

		/** Required */
		Ipv6: string;
	}

	/**  Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.  */
	export interface UpdateIpAddressFormProperties {

		/** Required */
		IpId: FormControl<string | null | undefined>,

		/** Required */
		Ipv6: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIpAddressFormGroup() {
		return new FormGroup<UpdateIpAddressFormProperties>({
			IpId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Ipv6: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResolverRuleResponse {
		ResolverRule?: ResolverRule;
	}
	export interface UpdateResolverRuleResponseFormProperties {
	}
	export function CreateUpdateResolverRuleResponseFormGroup() {
		return new FormGroup<UpdateResolverRuleResponseFormProperties>({
		});

	}

	export interface UpdateResolverRuleRequest {

		/** Required */
		ResolverRuleId: string;

		/** Required */
		Config: ResolverRuleConfig;
	}
	export interface UpdateResolverRuleRequestFormProperties {

		/** Required */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverRuleRequestFormGroup() {
		return new FormGroup<UpdateResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfig {
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
	}

	/** In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfigFormProperties {
		Name: FormControl<string | null | undefined>,
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateResolverRuleConfigFormGroup() {
		return new FormGroup<ResolverRuleConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallRuleGroupStatus { COMPLETE = 'COMPLETE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export enum ResolverDNSSECValidationStatus { ENABLING = 'ENABLING', ENABLED = 'ENABLED', DISABLING = 'DISABLING', DISABLED = 'DISABLED', UPDATING_TO_USE_LOCAL_RESOURCE_SETTING = 'UPDATING_TO_USE_LOCAL_RESOURCE_SETTING', USE_LOCAL_RESOURCE_SETTING = 'USE_LOCAL_RESOURCE_SETTING' }

	export enum Validation { ENABLE = 'ENABLE', DISABLE = 'DISABLE', USE_LOCAL_RESOURCE_SETTING = 'USE_LOCAL_RESOURCE_SETTING' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC.
		 * Post #X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup
		 * @return {AssociateFirewallRuleGroupResponse} Success
		 */
		AssociateFirewallRuleGroup(requestBody: AssociateFirewallRuleGroupRequest): Observable<AssociateFirewallRuleGroupResponse> {
			return this.http.post<AssociateFirewallRuleGroupResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
		 * Post #X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress
		 * @return {AssociateResolverEndpointIpAddressResponse} Success
		 */
		AssociateResolverEndpointIpAddress(requestBody: AssociateResolverEndpointIpAddressRequest): Observable<AssociateResolverEndpointIpAddressResponse> {
			return this.http.post<AssociateResolverEndpointIpAddressResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
		 * Post #X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig
		 * @return {AssociateResolverQueryLogConfigResponse} Success
		 */
		AssociateResolverQueryLogConfig(requestBody: AssociateResolverQueryLogConfigRequest): Observable<AssociateResolverQueryLogConfigResponse> {
			return this.http.post<AssociateResolverQueryLogConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.AssociateResolverRule
		 * @return {AssociateResolverRuleResponse} Success
		 */
		AssociateResolverRule(requestBody: AssociateResolverRuleRequest): Observable<AssociateResolverRuleResponse> {
			return this.http.post<AssociateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>.
		 * Post #X-Amz-Target=Route53Resolver.CreateFirewallDomainList
		 * @return {CreateFirewallDomainListResponse} Success
		 */
		CreateFirewallDomainList(requestBody: CreateFirewallDomainListRequest): Observable<CreateFirewallDomainListResponse> {
			return this.http.post<CreateFirewallDomainListResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateFirewallDomainList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
		 * Post #X-Amz-Target=Route53Resolver.CreateFirewallRule
		 * @return {CreateFirewallRuleResponse} Success
		 */
		CreateFirewallRule(requestBody: CreateFirewallRuleRequest): Observable<CreateFirewallRuleResponse> {
			return this.http.post<CreateFirewallRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateFirewallRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup
		 * @return {CreateFirewallRuleGroupResponse} Success
		 */
		CreateFirewallRuleGroup(requestBody: CreateFirewallRuleGroupRequest): Observable<CreateFirewallRuleGroupResponse> {
			return this.http.post<CreateFirewallRuleGroupResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Route 53 Resolver on an Outpost.
		 * Post #X-Amz-Target=Route53Resolver.CreateOutpostResolver
		 * @return {CreateOutpostResolverResponse} Success
		 */
		CreateOutpostResolver(requestBody: CreateOutpostResolverRequest): Observable<CreateOutpostResolverResponse> {
			return this.http.post<CreateOutpostResolverResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateOutpostResolver', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Resolver.CreateResolverEndpoint
		 * @return {CreateResolverEndpointResponse} Success
		 */
		CreateResolverEndpoint(requestBody: CreateResolverEndpointRequest): Observable<CreateResolverEndpointResponse> {
			return this.http.post<CreateResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
		 * Post #X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig
		 * @return {CreateResolverQueryLogConfigResponse} Success
		 */
		CreateResolverQueryLogConfig(requestBody: CreateResolverQueryLogConfigRequest): Observable<CreateResolverQueryLogConfigResponse> {
			return this.http.post<CreateResolverQueryLogConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
		 * Post #X-Amz-Target=Route53Resolver.CreateResolverRule
		 * @return {CreateResolverRuleResponse} Success
		 */
		CreateResolverRule(requestBody: CreateResolverRuleRequest): Observable<CreateResolverRuleResponse> {
			return this.http.post<CreateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified domain list.
		 * Post #X-Amz-Target=Route53Resolver.DeleteFirewallDomainList
		 * @return {DeleteFirewallDomainListResponse} Success
		 */
		DeleteFirewallDomainList(requestBody: DeleteFirewallDomainListRequest): Observable<DeleteFirewallDomainListResponse> {
			return this.http.post<DeleteFirewallDomainListResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified firewall rule.
		 * Post #X-Amz-Target=Route53Resolver.DeleteFirewallRule
		 * @return {DeleteFirewallRuleResponse} Success
		 */
		DeleteFirewallRule(requestBody: DeleteFirewallRuleRequest): Observable<DeleteFirewallRuleResponse> {
			return this.http.post<DeleteFirewallRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteFirewallRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified firewall rule group.
		 * Post #X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup
		 * @return {DeleteFirewallRuleGroupResponse} Success
		 */
		DeleteFirewallRuleGroup(requestBody: DeleteFirewallRuleGroupRequest): Observable<DeleteFirewallRuleGroupResponse> {
			return this.http.post<DeleteFirewallRuleGroupResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Resolver on the Outpost.
		 * Post #X-Amz-Target=Route53Resolver.DeleteOutpostResolver
		 * @return {DeleteOutpostResolverResponse} Success
		 */
		DeleteOutpostResolver(requestBody: DeleteOutpostResolverRequest): Observable<DeleteOutpostResolverResponse> {
			return this.http.post<DeleteOutpostResolverResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteOutpostResolver', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Resolver.DeleteResolverEndpoint
		 * @return {DeleteResolverEndpointResponse} Success
		 */
		DeleteResolverEndpoint(requestBody: DeleteResolverEndpointRequest): Observable<DeleteResolverEndpointResponse> {
			return this.http.post<DeleteResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
		 * Post #X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig
		 * @return {DeleteResolverQueryLogConfigResponse} Success
		 */
		DeleteResolverQueryLogConfig(requestBody: DeleteResolverQueryLogConfigRequest): Observable<DeleteResolverQueryLogConfigResponse> {
			return this.http.post<DeleteResolverQueryLogConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.DeleteResolverRule
		 * @return {DeleteResolverRuleResponse} Success
		 */
		DeleteResolverRule(requestBody: DeleteResolverRuleRequest): Observable<DeleteResolverRuleResponse> {
			return this.http.post<DeleteResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC.
		 * Post #X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup
		 * @return {DisassociateFirewallRuleGroupResponse} Success
		 */
		DisassociateFirewallRuleGroup(requestBody: DisassociateFirewallRuleGroupRequest): Observable<DisassociateFirewallRuleGroupResponse> {
			return this.http.post<DisassociateFirewallRuleGroupResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
		 * Post #X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress
		 * @return {DisassociateResolverEndpointIpAddressResponse} Success
		 */
		DisassociateResolverEndpointIpAddress(requestBody: DisassociateResolverEndpointIpAddressRequest): Observable<DisassociateResolverEndpointIpAddressResponse> {
			return this.http.post<DisassociateResolverEndpointIpAddressResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig
		 * @return {DisassociateResolverQueryLogConfigResponse} Success
		 */
		DisassociateResolverQueryLogConfig(requestBody: DisassociateResolverQueryLogConfigRequest): Observable<DisassociateResolverQueryLogConfigResponse> {
			return this.http.post<DisassociateResolverQueryLogConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
		 * Post #X-Amz-Target=Route53Resolver.DisassociateResolverRule
		 * @return {DisassociateResolverRuleResponse} Success
		 */
		DisassociateResolverRule(requestBody: DisassociateResolverRuleRequest): Observable<DisassociateResolverRuleResponse> {
			return this.http.post<DisassociateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
		 * Post #X-Amz-Target=Route53Resolver.GetFirewallConfig
		 * @return {GetFirewallConfigResponse} Success
		 */
		GetFirewallConfig(requestBody: GetFirewallConfigRequest): Observable<GetFirewallConfigResponse> {
			return this.http.post<GetFirewallConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetFirewallConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified firewall domain list.
		 * Post #X-Amz-Target=Route53Resolver.GetFirewallDomainList
		 * @return {GetFirewallDomainListResponse} Success
		 */
		GetFirewallDomainList(requestBody: GetFirewallDomainListRequest): Observable<GetFirewallDomainListResponse> {
			return this.http.post<GetFirewallDomainListResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetFirewallDomainList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified firewall rule group.
		 * Post #X-Amz-Target=Route53Resolver.GetFirewallRuleGroup
		 * @return {GetFirewallRuleGroupResponse} Success
		 */
		GetFirewallRuleGroup(requestBody: GetFirewallRuleGroupRequest): Observable<GetFirewallRuleGroupResponse> {
			return this.http.post<GetFirewallRuleGroupResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
		 * Post #X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation
		 * @return {GetFirewallRuleGroupAssociationResponse} Success
		 */
		GetFirewallRuleGroupAssociation(requestBody: GetFirewallRuleGroupAssociationRequest): Observable<GetFirewallRuleGroupAssociationResponse> {
			return this.http.post<GetFirewallRuleGroupAssociationResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).
		 * Post #X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy
		 * @return {GetFirewallRuleGroupPolicyResponse} Success
		 */
		GetFirewallRuleGroupPolicy(requestBody: GetFirewallRuleGroupPolicyRequest): Observable<GetFirewallRuleGroupPolicyResponse> {
			return this.http.post<GetFirewallRuleGroupPolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified Resolver on the Outpost, such as its instance count and type, name, and the current status of the Resolver.
		 * Post #X-Amz-Target=Route53Resolver.GetOutpostResolver
		 * @return {GetOutpostResolverResponse} Success
		 */
		GetOutpostResolver(requestBody: GetOutpostResolverRequest): Observable<GetOutpostResolverResponse> {
			return this.http.post<GetOutpostResolverResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetOutpostResolver', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverConfig
		 * @return {GetResolverConfigResponse} Success
		 */
		GetResolverConfig(requestBody: GetResolverConfigRequest): Observable<GetResolverConfigResponse> {
			return this.http.post<GetResolverConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets DNSSEC validation information for a specified resource.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverDnssecConfig
		 * @return {GetResolverDnssecConfigResponse} Success
		 */
		GetResolverDnssecConfig(requestBody: GetResolverDnssecConfigRequest): Observable<GetResolverDnssecConfigResponse> {
			return this.http.post<GetResolverDnssecConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverEndpoint
		 * @return {GetResolverEndpointResponse} Success
		 */
		GetResolverEndpoint(requestBody: GetResolverEndpointRequest): Observable<GetResolverEndpointResponse> {
			return this.http.post<GetResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig
		 * @return {GetResolverQueryLogConfigResponse} Success
		 */
		GetResolverQueryLogConfig(requestBody: GetResolverQueryLogConfigRequest): Observable<GetResolverQueryLogConfigResponse> {
			return this.http.post<GetResolverQueryLogConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation
		 * @return {GetResolverQueryLogConfigAssociationResponse} Success
		 */
		GetResolverQueryLogConfigAssociation(requestBody: GetResolverQueryLogConfigAssociationRequest): Observable<GetResolverQueryLogConfigAssociationResponse> {
			return this.http.post<GetResolverQueryLogConfigAssociationResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy
		 * @return {GetResolverQueryLogConfigPolicyResponse} Success
		 */
		GetResolverQueryLogConfigPolicy(requestBody: GetResolverQueryLogConfigPolicyRequest): Observable<GetResolverQueryLogConfigPolicyResponse> {
			return this.http.post<GetResolverQueryLogConfigPolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRule
		 * @return {GetResolverRuleResponse} Success
		 */
		GetResolverRule(requestBody: GetResolverRuleRequest): Observable<GetResolverRuleResponse> {
			return this.http.post<GetResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRuleAssociation
		 * @return {GetResolverRuleAssociationResponse} Success
		 */
		GetResolverRuleAssociation(requestBody: GetResolverRuleAssociationRequest): Observable<GetResolverRuleAssociationResponse> {
			return this.http.post<GetResolverRuleAssociationResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRulePolicy
		 * @return {GetResolverRulePolicyResponse} Success
		 */
		GetResolverRulePolicy(requestBody: GetResolverRulePolicyRequest): Observable<GetResolverRulePolicyResponse> {
			return this.http.post<GetResolverRulePolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRulePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
		 * Post #X-Amz-Target=Route53Resolver.ImportFirewallDomains
		 * @return {ImportFirewallDomainsResponse} Success
		 */
		ImportFirewallDomains(requestBody: ImportFirewallDomainsRequest): Observable<ImportFirewallDomainsResponse> {
			return this.http.post<ImportFirewallDomainsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ImportFirewallDomains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallConfigsResponse} Success
		 */
		ListFirewallConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallConfigsRequest): Observable<ListFirewallConfigsResponse> {
			return this.http.post<ListFirewallConfigsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallDomainLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallDomainListsResponse} Success
		 */
		ListFirewallDomainLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallDomainListsRequest): Observable<ListFirewallDomainListsResponse> {
			return this.http.post<ListFirewallDomainListsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallDomainLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallDomainsResponse} Success
		 */
		ListFirewallDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallDomainsRequest): Observable<ListFirewallDomainsResponse> {
			return this.http.post<ListFirewallDomainsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallRuleGroupAssociationsResponse} Success
		 */
		ListFirewallRuleGroupAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallRuleGroupAssociationsRequest): Observable<ListFirewallRuleGroupAssociationsResponse> {
			return this.http.post<ListFirewallRuleGroupAssociationsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallRuleGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallRuleGroupsResponse} Success
		 */
		ListFirewallRuleGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallRuleGroupsRequest): Observable<ListFirewallRuleGroupsResponse> {
			return this.http.post<ListFirewallRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
		 * Post #X-Amz-Target=Route53Resolver.ListFirewallRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFirewallRulesResponse} Success
		 */
		ListFirewallRules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFirewallRulesRequest): Observable<ListFirewallRulesResponse> {
			return this.http.post<ListFirewallRulesResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListFirewallRules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Resolvers on Outposts that were created using the current Amazon Web Services account.
		 * Post #X-Amz-Target=Route53Resolver.ListOutpostResolvers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOutpostResolversResponse} Success
		 */
		ListOutpostResolvers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOutpostResolversRequest): Observable<ListOutpostResolversResponse> {
			return this.http.post<ListOutpostResolversResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListOutpostResolvers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverConfigsResponse} Success
		 */
		ListResolverConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverConfigsRequest): Observable<ListResolverConfigsResponse> {
			return this.http.post<ListResolverConfigsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverDnssecConfigsResponse} Success
		 */
		ListResolverDnssecConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverDnssecConfigsRequest): Observable<ListResolverDnssecConfigsResponse> {
			return this.http.post<ListResolverDnssecConfigsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IP addresses for a specified Resolver endpoint.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointIpAddressesResponse} Success
		 */
		ListResolverEndpointIpAddresses(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverEndpointIpAddressesRequest): Observable<ListResolverEndpointIpAddressesResponse> {
			return this.http.post<ListResolverEndpointIpAddressesResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointsResponse} Success
		 */
		ListResolverEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverEndpointsRequest): Observable<ListResolverEndpointsResponse> {
			return this.http.post<ListResolverEndpointsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about associations between Amazon VPCs and query logging configurations.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverQueryLogConfigAssociationsResponse} Success
		 */
		ListResolverQueryLogConfigAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverQueryLogConfigAssociationsRequest): Observable<ListResolverQueryLogConfigAssociationsResponse> {
			return this.http.post<ListResolverQueryLogConfigAssociationsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverQueryLogConfigsResponse} Success
		 */
		ListResolverQueryLogConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverQueryLogConfigsRequest): Observable<ListResolverQueryLogConfigsResponse> {
			return this.http.post<ListResolverQueryLogConfigsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverRuleAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRuleAssociationsResponse} Success
		 */
		ListResolverRuleAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverRuleAssociationsRequest): Observable<ListResolverRuleAssociationsResponse> {
			return this.http.post<ListResolverRuleAssociationsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Resolver rules that were created using the current Amazon Web Services account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRulesResponse} Success
		 */
		ListResolverRules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverRulesRequest): Observable<ListResolverRulesResponse> {
			return this.http.post<ListResolverRulesResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverRules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that you associated with the specified resource.
		 * Post #X-Amz-Target=Route53Resolver.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM).
		 * Post #X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy
		 * @return {PutFirewallRuleGroupPolicyResponse} Success
		 */
		PutFirewallRuleGroupPolicy(requestBody: PutFirewallRuleGroupPolicyRequest): Observable<PutFirewallRuleGroupPolicyResponse> {
			return this.http.post<PutFirewallRuleGroupPolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
		 * Post #X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy
		 * @return {PutResolverQueryLogConfigPolicyResponse} Success
		 */
		PutResolverQueryLogConfigPolicy(requestBody: PutResolverQueryLogConfigPolicyRequest): Observable<PutResolverQueryLogConfigPolicyResponse> {
			return this.http.post<PutResolverQueryLogConfigPolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
		 * Post #X-Amz-Target=Route53Resolver.PutResolverRulePolicy
		 * @return {PutResolverRulePolicyResponse} Success
		 */
		PutResolverRulePolicy(requestBody: PutResolverRulePolicyRequest): Observable<PutResolverRulePolicyResponse> {
			return this.http.post<PutResolverRulePolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.PutResolverRulePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to a specified resource.
		 * Post #X-Amz-Target=Route53Resolver.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a specified resource.
		 * Post #X-Amz-Target=Route53Resolver.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
		 * Post #X-Amz-Target=Route53Resolver.UpdateFirewallConfig
		 * @return {UpdateFirewallConfigResponse} Success
		 */
		UpdateFirewallConfig(requestBody: UpdateFirewallConfigRequest): Observable<UpdateFirewallConfigResponse> {
			return this.http.post<UpdateFirewallConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateFirewallConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the firewall domain list from an array of domain specifications.
		 * Post #X-Amz-Target=Route53Resolver.UpdateFirewallDomains
		 * @return {UpdateFirewallDomainsResponse} Success
		 */
		UpdateFirewallDomains(requestBody: UpdateFirewallDomainsRequest): Observable<UpdateFirewallDomainsResponse> {
			return this.http.post<UpdateFirewallDomainsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateFirewallDomains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified firewall rule.
		 * Post #X-Amz-Target=Route53Resolver.UpdateFirewallRule
		 * @return {UpdateFirewallRuleResponse} Success
		 */
		UpdateFirewallRule(requestBody: UpdateFirewallRuleRequest): Observable<UpdateFirewallRuleResponse> {
			return this.http.post<UpdateFirewallRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateFirewallRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC.
		 * Post #X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation
		 * @return {UpdateFirewallRuleGroupAssociationResponse} Success
		 */
		UpdateFirewallRuleGroupAssociation(requestBody: UpdateFirewallRuleGroupAssociationRequest): Observable<UpdateFirewallRuleGroupAssociationResponse> {
			return this.http.post<UpdateFirewallRuleGroupAssociationResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * You can use <code>UpdateOutpostResolver</code> to update the instance count, type, or name of a Resolver on an Outpost.
		 * Post #X-Amz-Target=Route53Resolver.UpdateOutpostResolver
		 * @return {UpdateOutpostResolverResponse} Success
		 */
		UpdateOutpostResolver(requestBody: UpdateOutpostResolverRequest): Observable<UpdateOutpostResolverResponse> {
			return this.http.post<UpdateOutpostResolverResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateOutpostResolver', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverConfig
		 * @return {UpdateResolverConfigResponse} Success
		 */
		UpdateResolverConfig(requestBody: UpdateResolverConfigRequest): Observable<UpdateResolverConfigResponse> {
			return this.http.post<UpdateResolverConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig
		 * @return {UpdateResolverDnssecConfigResponse} Success
		 */
		UpdateResolverDnssecConfig(requestBody: UpdateResolverDnssecConfigRequest): Observable<UpdateResolverDnssecConfigResponse> {
			return this.http.post<UpdateResolverDnssecConfigResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverEndpoint
		 * @return {UpdateResolverEndpointResponse} Success
		 */
		UpdateResolverEndpoint(requestBody: UpdateResolverEndpointRequest): Observable<UpdateResolverEndpointResponse> {
			return this.http.post<UpdateResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverRule
		 * @return {UpdateResolverRuleResponse} Success
		 */
		UpdateResolverRule(requestBody: UpdateResolverRuleRequest): Observable<UpdateResolverRuleResponse> {
			return this.http.post<UpdateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFirewallRuleGroupX_Amz_Target { 'Route53Resolver.AssociateFirewallRuleGroup' = 'Route53Resolver.AssociateFirewallRuleGroup' }

	export enum AssociateResolverEndpointIpAddressX_Amz_Target { 'Route53Resolver.AssociateResolverEndpointIpAddress' = 'Route53Resolver.AssociateResolverEndpointIpAddress' }

	export enum AssociateResolverQueryLogConfigX_Amz_Target { 'Route53Resolver.AssociateResolverQueryLogConfig' = 'Route53Resolver.AssociateResolverQueryLogConfig' }

	export enum AssociateResolverRuleX_Amz_Target { 'Route53Resolver.AssociateResolverRule' = 'Route53Resolver.AssociateResolverRule' }

	export enum CreateFirewallDomainListX_Amz_Target { 'Route53Resolver.CreateFirewallDomainList' = 'Route53Resolver.CreateFirewallDomainList' }

	export enum CreateFirewallRuleX_Amz_Target { 'Route53Resolver.CreateFirewallRule' = 'Route53Resolver.CreateFirewallRule' }

	export enum CreateFirewallRuleGroupX_Amz_Target { 'Route53Resolver.CreateFirewallRuleGroup' = 'Route53Resolver.CreateFirewallRuleGroup' }

	export enum CreateOutpostResolverX_Amz_Target { 'Route53Resolver.CreateOutpostResolver' = 'Route53Resolver.CreateOutpostResolver' }

	export enum CreateResolverEndpointX_Amz_Target { 'Route53Resolver.CreateResolverEndpoint' = 'Route53Resolver.CreateResolverEndpoint' }

	export enum CreateResolverQueryLogConfigX_Amz_Target { 'Route53Resolver.CreateResolverQueryLogConfig' = 'Route53Resolver.CreateResolverQueryLogConfig' }

	export enum CreateResolverRuleX_Amz_Target { 'Route53Resolver.CreateResolverRule' = 'Route53Resolver.CreateResolverRule' }

	export enum DeleteFirewallDomainListX_Amz_Target { 'Route53Resolver.DeleteFirewallDomainList' = 'Route53Resolver.DeleteFirewallDomainList' }

	export enum DeleteFirewallRuleX_Amz_Target { 'Route53Resolver.DeleteFirewallRule' = 'Route53Resolver.DeleteFirewallRule' }

	export enum DeleteFirewallRuleGroupX_Amz_Target { 'Route53Resolver.DeleteFirewallRuleGroup' = 'Route53Resolver.DeleteFirewallRuleGroup' }

	export enum DeleteOutpostResolverX_Amz_Target { 'Route53Resolver.DeleteOutpostResolver' = 'Route53Resolver.DeleteOutpostResolver' }

	export enum DeleteResolverEndpointX_Amz_Target { 'Route53Resolver.DeleteResolverEndpoint' = 'Route53Resolver.DeleteResolverEndpoint' }

	export enum DeleteResolverQueryLogConfigX_Amz_Target { 'Route53Resolver.DeleteResolverQueryLogConfig' = 'Route53Resolver.DeleteResolverQueryLogConfig' }

	export enum DeleteResolverRuleX_Amz_Target { 'Route53Resolver.DeleteResolverRule' = 'Route53Resolver.DeleteResolverRule' }

	export enum DisassociateFirewallRuleGroupX_Amz_Target { 'Route53Resolver.DisassociateFirewallRuleGroup' = 'Route53Resolver.DisassociateFirewallRuleGroup' }

	export enum DisassociateResolverEndpointIpAddressX_Amz_Target { 'Route53Resolver.DisassociateResolverEndpointIpAddress' = 'Route53Resolver.DisassociateResolverEndpointIpAddress' }

	export enum DisassociateResolverQueryLogConfigX_Amz_Target { 'Route53Resolver.DisassociateResolverQueryLogConfig' = 'Route53Resolver.DisassociateResolverQueryLogConfig' }

	export enum DisassociateResolverRuleX_Amz_Target { 'Route53Resolver.DisassociateResolverRule' = 'Route53Resolver.DisassociateResolverRule' }

	export enum GetFirewallConfigX_Amz_Target { 'Route53Resolver.GetFirewallConfig' = 'Route53Resolver.GetFirewallConfig' }

	export enum GetFirewallDomainListX_Amz_Target { 'Route53Resolver.GetFirewallDomainList' = 'Route53Resolver.GetFirewallDomainList' }

	export enum GetFirewallRuleGroupX_Amz_Target { 'Route53Resolver.GetFirewallRuleGroup' = 'Route53Resolver.GetFirewallRuleGroup' }

	export enum GetFirewallRuleGroupAssociationX_Amz_Target { 'Route53Resolver.GetFirewallRuleGroupAssociation' = 'Route53Resolver.GetFirewallRuleGroupAssociation' }

	export enum GetFirewallRuleGroupPolicyX_Amz_Target { 'Route53Resolver.GetFirewallRuleGroupPolicy' = 'Route53Resolver.GetFirewallRuleGroupPolicy' }

	export enum GetOutpostResolverX_Amz_Target { 'Route53Resolver.GetOutpostResolver' = 'Route53Resolver.GetOutpostResolver' }

	export enum GetResolverConfigX_Amz_Target { 'Route53Resolver.GetResolverConfig' = 'Route53Resolver.GetResolverConfig' }

	export enum GetResolverDnssecConfigX_Amz_Target { 'Route53Resolver.GetResolverDnssecConfig' = 'Route53Resolver.GetResolverDnssecConfig' }

	export enum GetResolverEndpointX_Amz_Target { 'Route53Resolver.GetResolverEndpoint' = 'Route53Resolver.GetResolverEndpoint' }

	export enum GetResolverQueryLogConfigX_Amz_Target { 'Route53Resolver.GetResolverQueryLogConfig' = 'Route53Resolver.GetResolverQueryLogConfig' }

	export enum GetResolverQueryLogConfigAssociationX_Amz_Target { 'Route53Resolver.GetResolverQueryLogConfigAssociation' = 'Route53Resolver.GetResolverQueryLogConfigAssociation' }

	export enum GetResolverQueryLogConfigPolicyX_Amz_Target { 'Route53Resolver.GetResolverQueryLogConfigPolicy' = 'Route53Resolver.GetResolverQueryLogConfigPolicy' }

	export enum GetResolverRuleX_Amz_Target { 'Route53Resolver.GetResolverRule' = 'Route53Resolver.GetResolverRule' }

	export enum GetResolverRuleAssociationX_Amz_Target { 'Route53Resolver.GetResolverRuleAssociation' = 'Route53Resolver.GetResolverRuleAssociation' }

	export enum GetResolverRulePolicyX_Amz_Target { 'Route53Resolver.GetResolverRulePolicy' = 'Route53Resolver.GetResolverRulePolicy' }

	export enum ImportFirewallDomainsX_Amz_Target { 'Route53Resolver.ImportFirewallDomains' = 'Route53Resolver.ImportFirewallDomains' }

	export enum ListFirewallConfigsX_Amz_Target { 'Route53Resolver.ListFirewallConfigs' = 'Route53Resolver.ListFirewallConfigs' }

	export enum ListFirewallDomainListsX_Amz_Target { 'Route53Resolver.ListFirewallDomainLists' = 'Route53Resolver.ListFirewallDomainLists' }

	export enum ListFirewallDomainsX_Amz_Target { 'Route53Resolver.ListFirewallDomains' = 'Route53Resolver.ListFirewallDomains' }

	export enum ListFirewallRuleGroupAssociationsX_Amz_Target { 'Route53Resolver.ListFirewallRuleGroupAssociations' = 'Route53Resolver.ListFirewallRuleGroupAssociations' }

	export enum ListFirewallRuleGroupsX_Amz_Target { 'Route53Resolver.ListFirewallRuleGroups' = 'Route53Resolver.ListFirewallRuleGroups' }

	export enum ListFirewallRulesX_Amz_Target { 'Route53Resolver.ListFirewallRules' = 'Route53Resolver.ListFirewallRules' }

	export enum ListOutpostResolversX_Amz_Target { 'Route53Resolver.ListOutpostResolvers' = 'Route53Resolver.ListOutpostResolvers' }

	export enum ListResolverConfigsX_Amz_Target { 'Route53Resolver.ListResolverConfigs' = 'Route53Resolver.ListResolverConfigs' }

	export enum ListResolverDnssecConfigsX_Amz_Target { 'Route53Resolver.ListResolverDnssecConfigs' = 'Route53Resolver.ListResolverDnssecConfigs' }

	export enum ListResolverEndpointIpAddressesX_Amz_Target { 'Route53Resolver.ListResolverEndpointIpAddresses' = 'Route53Resolver.ListResolverEndpointIpAddresses' }

	export enum ListResolverEndpointsX_Amz_Target { 'Route53Resolver.ListResolverEndpoints' = 'Route53Resolver.ListResolverEndpoints' }

	export enum ListResolverQueryLogConfigAssociationsX_Amz_Target { 'Route53Resolver.ListResolverQueryLogConfigAssociations' = 'Route53Resolver.ListResolverQueryLogConfigAssociations' }

	export enum ListResolverQueryLogConfigsX_Amz_Target { 'Route53Resolver.ListResolverQueryLogConfigs' = 'Route53Resolver.ListResolverQueryLogConfigs' }

	export enum ListResolverRuleAssociationsX_Amz_Target { 'Route53Resolver.ListResolverRuleAssociations' = 'Route53Resolver.ListResolverRuleAssociations' }

	export enum ListResolverRulesX_Amz_Target { 'Route53Resolver.ListResolverRules' = 'Route53Resolver.ListResolverRules' }

	export enum ListTagsForResourceX_Amz_Target { 'Route53Resolver.ListTagsForResource' = 'Route53Resolver.ListTagsForResource' }

	export enum PutFirewallRuleGroupPolicyX_Amz_Target { 'Route53Resolver.PutFirewallRuleGroupPolicy' = 'Route53Resolver.PutFirewallRuleGroupPolicy' }

	export enum PutResolverQueryLogConfigPolicyX_Amz_Target { 'Route53Resolver.PutResolverQueryLogConfigPolicy' = 'Route53Resolver.PutResolverQueryLogConfigPolicy' }

	export enum PutResolverRulePolicyX_Amz_Target { 'Route53Resolver.PutResolverRulePolicy' = 'Route53Resolver.PutResolverRulePolicy' }

	export enum TagResourceX_Amz_Target { 'Route53Resolver.TagResource' = 'Route53Resolver.TagResource' }

	export enum UntagResourceX_Amz_Target { 'Route53Resolver.UntagResource' = 'Route53Resolver.UntagResource' }

	export enum UpdateFirewallConfigX_Amz_Target { 'Route53Resolver.UpdateFirewallConfig' = 'Route53Resolver.UpdateFirewallConfig' }

	export enum UpdateFirewallDomainsX_Amz_Target { 'Route53Resolver.UpdateFirewallDomains' = 'Route53Resolver.UpdateFirewallDomains' }

	export enum UpdateFirewallRuleX_Amz_Target { 'Route53Resolver.UpdateFirewallRule' = 'Route53Resolver.UpdateFirewallRule' }

	export enum UpdateFirewallRuleGroupAssociationX_Amz_Target { 'Route53Resolver.UpdateFirewallRuleGroupAssociation' = 'Route53Resolver.UpdateFirewallRuleGroupAssociation' }

	export enum UpdateOutpostResolverX_Amz_Target { 'Route53Resolver.UpdateOutpostResolver' = 'Route53Resolver.UpdateOutpostResolver' }

	export enum UpdateResolverConfigX_Amz_Target { 'Route53Resolver.UpdateResolverConfig' = 'Route53Resolver.UpdateResolverConfig' }

	export enum UpdateResolverDnssecConfigX_Amz_Target { 'Route53Resolver.UpdateResolverDnssecConfig' = 'Route53Resolver.UpdateResolverDnssecConfig' }

	export enum UpdateResolverEndpointX_Amz_Target { 'Route53Resolver.UpdateResolverEndpoint' = 'Route53Resolver.UpdateResolverEndpoint' }

	export enum UpdateResolverRuleX_Amz_Target { 'Route53Resolver.UpdateResolverRule' = 'Route53Resolver.UpdateResolverRule' }

}

