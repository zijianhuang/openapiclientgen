import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateResolverEndpointIpAddressResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface AssociateResolverEndpointIpAddressResponseFormProperties {
	}
	export function CreateAssociateResolverEndpointIpAddressResponseFormGroup() {
		return new FormGroup<AssociateResolverEndpointIpAddressResponseFormProperties>({
		});

	}


	/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
	export interface ResolverEndpoint {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Arn?: string | null;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;
		SecurityGroupIds?: Array<string>;
		Direction?: ResolverEndpointDirection | null;
		IpAddressCount?: number | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		HostVPCId?: string | null;
		Status?: ResolverEndpointStatus | null;

		/** Max length: 255 */
		StatusMessage?: string | null;

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		CreationTime?: string | null;

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		ModificationTime?: string | null;
	}

	/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
	export interface ResolverEndpointFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,
		Direction: FormControl<ResolverEndpointDirection | null | undefined>,
		IpAddressCount: FormControl<number | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		HostVPCId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverEndpointStatus | null | undefined>,

		/** Max length: 255 */
		StatusMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		CreationTime: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateResolverEndpointFormGroup() {
		return new FormGroup<ResolverEndpointFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			Direction: new FormControl<ResolverEndpointDirection | null | undefined>(undefined),
			IpAddressCount: new FormControl<number | null | undefined>(undefined),
			HostVPCId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Status: new FormControl<ResolverEndpointStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(20)]),
			ModificationTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(20)]),
		});

	}

	export enum ResolverEndpointDirection { INBOUND = 0, OUTBOUND = 1 }

	export enum ResolverEndpointStatus { CREATING = 0, OPERATIONAL = 1, UPDATING = 2, AUTO_RECOVERING = 3, ACTION_NEEDED = 4, DELETING = 5 }

	export interface AssociateResolverEndpointIpAddressRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;

		/**
		 * In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.
		 * Required
		 */
		IpAddress: IpAddressUpdate;
	}
	export interface AssociateResolverEndpointIpAddressRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResolverEndpointIpAddressRequestFormGroup() {
		return new FormGroup<AssociateResolverEndpointIpAddressRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdate {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		IpId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip?: string | null;
	}

	/** In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdateFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		IpId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressUpdateFormGroup() {
		return new FormGroup<IpAddressUpdateFormProperties>({
			IpId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36), Validators.minLength(7)]),
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

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AssociateResolverRuleResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface AssociateResolverRuleResponseFormProperties {
	}
	export function CreateAssociateResolverRuleResponseFormGroup() {
		return new FormGroup<AssociateResolverRuleResponseFormProperties>({
		});

	}


	/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
	export interface ResolverRuleAssociation {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId?: string | null;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId?: string | null;
		Status?: ResolverRuleAssociationStatus | null;

		/** Max length: 255 */
		StatusMessage?: string | null;
	}

	/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
	export interface ResolverRuleAssociationFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId: FormControl<string | null | undefined>,
		Status: FormControl<ResolverRuleAssociationStatus | null | undefined>,

		/** Max length: 255 */
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResolverRuleAssociationFormGroup() {
		return new FormGroup<ResolverRuleAssociationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Status: new FormControl<ResolverRuleAssociationStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export enum ResolverRuleAssociationStatus { CREATING = 0, COMPLETE = 1, DELETING = 2, FAILED = 3, OVERRIDDEN = 4 }

	export interface AssociateResolverRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: string;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId: string;
	}
	export interface AssociateResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResolverRuleRequestFormGroup() {
		return new FormGroup<AssociateResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
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

	export interface CreateResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface CreateResolverEndpointResponseFormProperties {
	}
	export function CreateCreateResolverEndpointResponseFormGroup() {
		return new FormGroup<CreateResolverEndpointResponseFormProperties>({
		});

	}

	export interface CreateResolverEndpointRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: string;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		Direction: ResolverEndpointDirection;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		IpAddresses: Array<IpAddressRequest>;
		Tags?: Array<Tag>;
	}
	export interface CreateResolverEndpointRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Direction: FormControl<ResolverEndpointDirection | null | undefined>,
	}
	export function CreateCreateResolverEndpointRequestFormGroup() {
		return new FormGroup<CreateResolverEndpointRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			Direction: new FormControl<ResolverEndpointDirection | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries. */
	export interface IpAddressRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId: string;

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip?: string | null;
	}

	/** In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries. */
	export interface IpAddressRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressRequestFormGroup() {
		return new FormGroup<IpAddressRequestFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36), Validators.minLength(7)]),
		});

	}


	/** One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}
	export interface CreateResolverRuleResponseFormProperties {
	}
	export function CreateCreateResolverRuleResponseFormGroup() {
		return new FormGroup<CreateResolverRuleResponseFormProperties>({
		});

	}


	/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
	export interface ResolverRule {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Arn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DomainName?: string | null;
		Status?: ResolverRuleStatus | null;

		/** Max length: 255 */
		StatusMessage?: string | null;
		RuleType?: ResolverRuleRuleType | null;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/** Minimum items: 1 */
		TargetIps?: Array<TargetAddress>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 12
		 */
		OwnerId?: string | null;
		ShareStatus?: ResolverRuleShareStatus | null;
	}

	/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
	export interface ResolverRuleFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
		Status: FormControl<ResolverRuleStatus | null | undefined>,

		/** Max length: 255 */
		StatusMessage: FormControl<string | null | undefined>,
		RuleType: FormControl<ResolverRuleRuleType | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<ResolverRuleShareStatus | null | undefined>,
	}
	export function CreateResolverRuleFormGroup() {
		return new FormGroup<ResolverRuleFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Status: new FormControl<ResolverRuleStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			RuleType: new FormControl<ResolverRuleRuleType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(12)]),
			ShareStatus: new FormControl<ResolverRuleShareStatus | null | undefined>(undefined),
		});

	}

	export enum ResolverRuleStatus { COMPLETE = 0, DELETING = 1, UPDATING = 2, FAILED = 3 }

	export enum ResolverRuleRuleType { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }


	/** In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddress {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 7
		 */
		Ip: string;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		Port?: number | null;
	}

	/** In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddressFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 7
		 */
		Ip: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateTargetAddressFormGroup() {
		return new FormGroup<TargetAddressFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(36), Validators.minLength(7)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}

	export enum ResolverRuleShareStatus { NOT_SHARED = 0, SHARED_WITH_ME = 1, SHARED_BY_ME = 2 }

	export interface CreateResolverRuleRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: string;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/** Required */
		RuleType: ResolverRuleRuleType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		DomainName: string;

		/** Minimum items: 1 */
		TargetIps?: Array<TargetAddress>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CreatorRequestId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RuleType: FormControl<ResolverRuleRuleType | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverRuleRequestFormGroup() {
		return new FormGroup<CreateResolverRuleRequestFormProperties>({
			CreatorRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			RuleType: new FormControl<ResolverRuleRuleType | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface DeleteResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface DeleteResolverEndpointResponseFormProperties {
	}
	export function CreateDeleteResolverEndpointResponseFormGroup() {
		return new FormGroup<DeleteResolverEndpointResponseFormProperties>({
		});

	}

	export interface DeleteResolverEndpointRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;
	}
	export interface DeleteResolverEndpointRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResolverEndpointRequestFormGroup() {
		return new FormGroup<DeleteResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface DeleteResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}
	export interface DeleteResolverRuleResponseFormProperties {
	}
	export function CreateDeleteResolverRuleResponseFormGroup() {
		return new FormGroup<DeleteResolverRuleResponseFormProperties>({
		});

	}

	export interface DeleteResolverRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: string;
	}
	export interface DeleteResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResolverRuleRequestFormGroup() {
		return new FormGroup<DeleteResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
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

	export interface DisassociateResolverEndpointIpAddressResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface DisassociateResolverEndpointIpAddressResponseFormProperties {
	}
	export function CreateDisassociateResolverEndpointIpAddressResponseFormGroup() {
		return new FormGroup<DisassociateResolverEndpointIpAddressResponseFormProperties>({
		});

	}

	export interface DisassociateResolverEndpointIpAddressRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;

		/**
		 * In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.
		 * Required
		 */
		IpAddress: IpAddressUpdate;
	}
	export interface DisassociateResolverEndpointIpAddressRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResolverEndpointIpAddressRequestFormGroup() {
		return new FormGroup<DisassociateResolverEndpointIpAddressRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface DisassociateResolverRuleResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface DisassociateResolverRuleResponseFormProperties {
	}
	export function CreateDisassociateResolverRuleResponseFormGroup() {
		return new FormGroup<DisassociateResolverRuleResponseFormProperties>({
		});

	}

	export interface DisassociateResolverRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: string;
	}
	export interface DisassociateResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		VPCId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResolverRuleRequestFormGroup() {
		return new FormGroup<DisassociateResolverRuleRequestFormProperties>({
			VPCId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface GetResolverEndpointResponseFormProperties {
	}
	export function CreateGetResolverEndpointResponseFormGroup() {
		return new FormGroup<GetResolverEndpointResponseFormProperties>({
		});

	}

	export interface GetResolverEndpointRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;
	}
	export interface GetResolverEndpointRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverEndpointRequestFormGroup() {
		return new FormGroup<GetResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}
	export interface GetResolverRuleResponseFormProperties {
	}
	export function CreateGetResolverRuleResponseFormGroup() {
		return new FormGroup<GetResolverRuleResponseFormProperties>({
		});

	}

	export interface GetResolverRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: string;
	}
	export interface GetResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRuleRequestFormGroup() {
		return new FormGroup<GetResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetResolverRuleAssociationResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}
	export interface GetResolverRuleAssociationResponseFormProperties {
	}
	export function CreateGetResolverRuleAssociationResponseFormGroup() {
		return new FormGroup<GetResolverRuleAssociationResponseFormProperties>({
		});

	}

	export interface GetResolverRuleAssociationRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleAssociationId: string;
	}
	export interface GetResolverRuleAssociationRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleAssociationId: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRuleAssociationRequestFormGroup() {
		return new FormGroup<GetResolverRuleAssociationRequestFormProperties>({
			ResolverRuleAssociationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetResolverRulePolicyResponse {

		/** Max length: 5000 */
		ResolverRulePolicy?: string | null;
	}
	export interface GetResolverRulePolicyResponseFormProperties {

		/** Max length: 5000 */
		ResolverRulePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRulePolicyResponseFormGroup() {
		return new FormGroup<GetResolverRulePolicyResponseFormProperties>({
			ResolverRulePolicy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
		});

	}

	export interface GetResolverRulePolicyRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: string;
	}
	export interface GetResolverRulePolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetResolverRulePolicyRequestFormGroup() {
		return new FormGroup<GetResolverRulePolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface ListResolverEndpointIpAddressesResponse {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		IpAddresses?: Array<IpAddressResponse>;
	}
	export interface ListResolverEndpointIpAddressesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverEndpointIpAddressesResponseFormGroup() {
		return new FormGroup<ListResolverEndpointIpAddressesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that the resolver endpoint uses for DNS queries. */
	export interface IpAddressResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		IpId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId?: string | null;

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip?: string | null;
		Status?: IpAddressResponseStatus | null;

		/** Max length: 255 */
		StatusMessage?: string | null;

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		CreationTime?: string | null;

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		ModificationTime?: string | null;
	}

	/** In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that the resolver endpoint uses for DNS queries. */
	export interface IpAddressResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		IpId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 7
		 */
		Ip: FormControl<string | null | undefined>,
		Status: FormControl<IpAddressResponseStatus | null | undefined>,

		/** Max length: 255 */
		StatusMessage: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		CreationTime: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 20
		 */
		ModificationTime: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressResponseFormGroup() {
		return new FormGroup<IpAddressResponseFormProperties>({
			IpId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36), Validators.minLength(7)]),
			Status: new FormControl<IpAddressResponseStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(20)]),
			ModificationTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(20)]),
		});

	}

	export enum IpAddressResponseStatus { CREATING = 0, FAILED_CREATION = 1, ATTACHING = 2, ATTACHED = 3, REMAP_DETACHING = 4, REMAP_ATTACHING = 5, DETACHING = 6, FAILED_RESOURCE_GONE = 7, DELETING = 8, DELETE_FAILED_FAS_EXPIRED = 9 }

	export interface ListResolverEndpointIpAddressesRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListResolverEndpointIpAddressesRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverEndpointIpAddressesRequestFormGroup() {
		return new FormGroup<ListResolverEndpointIpAddressesRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

	export interface ListResolverEndpointsResponse {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		ResolverEndpoints?: Array<ResolverEndpoint>;
	}
	export interface ListResolverEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverEndpointsResponseFormGroup() {
		return new FormGroup<ListResolverEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListResolverEndpointsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<Filter>;
	}
	export interface ListResolverEndpointsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverEndpointsRequestFormGroup() {
		return new FormGroup<ListResolverEndpointsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules. */
	export interface Filter {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;
		Values?: Array<string>;
	}

	/** For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules. */
	export interface FilterFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface ListResolverRuleAssociationsResponse {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
	}
	export interface ListResolverRuleAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverRuleAssociationsResponseFormGroup() {
		return new FormGroup<ListResolverRuleAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListResolverRuleAssociationsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<Filter>;
	}
	export interface ListResolverRuleAssociationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverRuleAssociationsRequestFormGroup() {
		return new FormGroup<ListResolverRuleAssociationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolverRulesResponse {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		ResolverRules?: Array<ResolverRule>;
	}
	export interface ListResolverRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResolverRulesResponseFormGroup() {
		return new FormGroup<ListResolverRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListResolverRulesRequest {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<Filter>;
	}
	export interface ListResolverRulesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolverRulesRequestFormGroup() {
		return new FormGroup<ListResolverRulesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string | null;
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: string;

		/**
		 * Required
		 * Max length: 5000
		 */
		ResolverRulePolicy: string;
	}
	export interface PutResolverRulePolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5000
		 */
		ResolverRulePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutResolverRulePolicyRequestFormGroup() {
		return new FormGroup<PutResolverRulePolicyRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			ResolverRulePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5000)]),
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface UpdateResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}
	export interface UpdateResolverEndpointResponseFormProperties {
	}
	export function CreateUpdateResolverEndpointResponseFormGroup() {
		return new FormGroup<UpdateResolverEndpointResponseFormProperties>({
		});

	}

	export interface UpdateResolverEndpointRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: string;

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;
	}
	export interface UpdateResolverEndpointRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverEndpointRequestFormGroup() {
		return new FormGroup<UpdateResolverEndpointRequestFormProperties>({
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
		});

	}

	export interface UpdateResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}
	export interface UpdateResolverRuleResponseFormProperties {
	}
	export function CreateUpdateResolverRuleResponseFormGroup() {
		return new FormGroup<UpdateResolverRuleResponseFormProperties>({
		});

	}

	export interface UpdateResolverRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: string;

		/**
		 * In an <a>UpdateResolverRule</a> request, information about the changes that you want to make.
		 * Required
		 */
		Config: ResolverRuleConfig;
	}
	export interface UpdateResolverRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverRuleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverRuleRequestFormGroup() {
		return new FormGroup<UpdateResolverRuleRequestFormProperties>({
			ResolverRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** In an <a>UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfig {

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name?: string | null;

		/** Minimum items: 1 */
		TargetIps?: Array<TargetAddress>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId?: string | null;
	}

	/** In an <a>UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfigFormProperties {

		/**
		 * Max length: 64
		 * Pattern: (?!^[0-9]+$)([a-zA-Z0-9-_' ']+)
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResolverEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateResolverRuleConfigFormGroup() {
		return new FormGroup<ResolverRuleConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			ResolverEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export enum RuleTypeOption { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }

	export enum IpAddressStatus { CREATING = 0, FAILED_CREATION = 1, ATTACHING = 2, ATTACHED = 3, REMAP_DETACHING = 4, REMAP_ATTACHING = 5, DETACHING = 6, FAILED_RESOURCE_GONE = 7, DELETING = 8, DELETE_FAILED_FAS_EXPIRED = 9 }

	export enum ShareStatus { NOT_SHARED = 0, SHARED_WITH_ME = 1, SHARED_BY_ME = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a>DisassociateResolverEndpointIpAddress</a>.</p>
		 * Post #X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress
		 * @return {AssociateResolverEndpointIpAddressResponse} Success
		 */
		AssociateResolverEndpointIpAddress(requestBody: AssociateResolverEndpointIpAddressRequest): Observable<AssociateResolverEndpointIpAddressResponse> {
			return this.http.post<AssociateResolverEndpointIpAddressResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a>CreateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.AssociateResolverRule
		 * @return {AssociateResolverRuleResponse} Success
		 */
		AssociateResolverRule(requestBody: AssociateResolverRuleRequest): Observable<AssociateResolverRuleResponse> {
			return this.http.post<AssociateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.AssociateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network or another VPC.</p> </li> <li> <p>An <i>outbound resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network or another VPC.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Resolver.CreateResolverEndpoint
		 * @return {CreateResolverEndpointResponse} Success
		 */
		CreateResolverEndpoint(requestBody: CreateResolverEndpointRequest): Observable<CreateResolverEndpointResponse> {
			return this.http.post<CreateResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
		 * Post #X-Amz-Target=Route53Resolver.CreateResolverRule
		 * @return {CreateResolverRuleResponse} Success
		 */
		CreateResolverRule(requestBody: CreateResolverRuleRequest): Observable<CreateResolverRuleResponse> {
			return this.http.post<CreateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.CreateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network or another VPC are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network or to another VPC.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Resolver.DeleteResolverEndpoint
		 * @return {DeleteResolverEndpointResponse} Success
		 */
		DeleteResolverEndpoint(requestBody: DeleteResolverEndpointRequest): Observable<DeleteResolverEndpointResponse> {
			return this.http.post<DeleteResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you associated the resolver rule with. For more infomation, see <a>DisassociateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.DeleteResolverRule
		 * @return {DeleteResolverRuleResponse} Success
		 */
		DeleteResolverRule(requestBody: DeleteResolverRuleRequest): Observable<DeleteResolverRuleResponse> {
			return this.http.post<DeleteResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DeleteResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a>AssociateResolverEndpointIpAddress</a>.</p>
		 * Post #X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress
		 * @return {DisassociateResolverEndpointIpAddressResponse} Success
		 */
		DisassociateResolverEndpointIpAddress(requestBody: DisassociateResolverEndpointIpAddressRequest): Observable<DisassociateResolverEndpointIpAddressResponse> {
			return this.http.post<DisassociateResolverEndpointIpAddressResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the association between a specified resolver rule and a specified VPC.</p> <important> <p>If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the resolver rule. </p> </important>
		 * Post #X-Amz-Target=Route53Resolver.DisassociateResolverRule
		 * @return {DisassociateResolverRuleResponse} Success
		 */
		DisassociateResolverRule(requestBody: DisassociateResolverRuleRequest): Observable<DisassociateResolverRuleResponse> {
			return this.http.post<DisassociateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.DisassociateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the current status of the endpoint.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverEndpoint
		 * @return {GetResolverEndpointResponse} Success
		 */
		GetResolverEndpoint(requestBody: GetResolverEndpointRequest): Observable<GetResolverEndpointResponse> {
			return this.http.post<GetResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound resolver endpoint that the rule is associated with.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRule
		 * @return {GetResolverRuleResponse} Success
		 */
		GetResolverRule(requestBody: GetResolverRuleRequest): Observable<GetResolverRuleResponse> {
			return this.http.post<GetResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using <a>AssociateResolverRule</a>.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRuleAssociation
		 * @return {GetResolverRuleAssociationResponse} Success
		 */
		GetResolverRuleAssociation(requestBody: GetResolverRuleAssociationRequest): Observable<GetResolverRuleAssociationResponse> {
			return this.http.post<GetResolverRuleAssociationResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
		 * Post #X-Amz-Target=Route53Resolver.GetResolverRulePolicy
		 * @return {GetResolverRulePolicyResponse} Success
		 */
		GetResolverRulePolicy(requestBody: GetResolverRulePolicyRequest): Observable<GetResolverRulePolicyResponse> {
			return this.http.post<GetResolverRulePolicyResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.GetResolverRulePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IP addresses for a specified resolver endpoint.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointIpAddressesResponse} Success
		 */
		ListResolverEndpointIpAddresses(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverEndpointIpAddressesRequest): Observable<ListResolverEndpointIpAddressesResponse> {
			return this.http.post<ListResolverEndpointIpAddressesResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the resolver endpoints that were created using the current AWS account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointsResponse} Success
		 */
		ListResolverEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverEndpointsRequest): Observable<ListResolverEndpointsResponse> {
			return this.http.post<ListResolverEndpointsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the associations that were created between resolver rules and VPCs using the current AWS account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverRuleAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRuleAssociationsResponse} Success
		 */
		ListResolverRuleAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResolverRuleAssociationsRequest): Observable<ListResolverRuleAssociationsResponse> {
			return this.http.post<ListResolverRuleAssociationsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resolver rules that were created using the current AWS account.
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
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
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
		 * Updates the name of an inbound or an outbound resolver endpoint.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverEndpoint
		 * @return {UpdateResolverEndpointResponse} Success
		 */
		UpdateResolverEndpoint(requestBody: UpdateResolverEndpointRequest): Observable<UpdateResolverEndpointResponse> {
			return this.http.post<UpdateResolverEndpointResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates settings for a specified resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
		 * Post #X-Amz-Target=Route53Resolver.UpdateResolverRule
		 * @return {UpdateResolverRuleResponse} Success
		 */
		UpdateResolverRule(requestBody: UpdateResolverRuleRequest): Observable<UpdateResolverRuleResponse> {
			return this.http.post<UpdateResolverRuleResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.UpdateResolverRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateResolverEndpointIpAddressX_Amz_Target { Route53Resolver_AssociateResolverEndpointIpAddress = 0 }

	export enum AssociateResolverRuleX_Amz_Target { Route53Resolver_AssociateResolverRule = 0 }

	export enum CreateResolverEndpointX_Amz_Target { Route53Resolver_CreateResolverEndpoint = 0 }

	export enum CreateResolverRuleX_Amz_Target { Route53Resolver_CreateResolverRule = 0 }

	export enum DeleteResolverEndpointX_Amz_Target { Route53Resolver_DeleteResolverEndpoint = 0 }

	export enum DeleteResolverRuleX_Amz_Target { Route53Resolver_DeleteResolverRule = 0 }

	export enum DisassociateResolverEndpointIpAddressX_Amz_Target { Route53Resolver_DisassociateResolverEndpointIpAddress = 0 }

	export enum DisassociateResolverRuleX_Amz_Target { Route53Resolver_DisassociateResolverRule = 0 }

	export enum GetResolverEndpointX_Amz_Target { Route53Resolver_GetResolverEndpoint = 0 }

	export enum GetResolverRuleX_Amz_Target { Route53Resolver_GetResolverRule = 0 }

	export enum GetResolverRuleAssociationX_Amz_Target { Route53Resolver_GetResolverRuleAssociation = 0 }

	export enum GetResolverRulePolicyX_Amz_Target { Route53Resolver_GetResolverRulePolicy = 0 }

	export enum ListResolverEndpointIpAddressesX_Amz_Target { Route53Resolver_ListResolverEndpointIpAddresses = 0 }

	export enum ListResolverEndpointsX_Amz_Target { Route53Resolver_ListResolverEndpoints = 0 }

	export enum ListResolverRuleAssociationsX_Amz_Target { Route53Resolver_ListResolverRuleAssociations = 0 }

	export enum ListResolverRulesX_Amz_Target { Route53Resolver_ListResolverRules = 0 }

	export enum ListTagsForResourceX_Amz_Target { Route53Resolver_ListTagsForResource = 0 }

	export enum PutResolverRulePolicyX_Amz_Target { Route53Resolver_PutResolverRulePolicy = 0 }

	export enum TagResourceX_Amz_Target { Route53Resolver_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { Route53Resolver_UntagResource = 0 }

	export enum UpdateResolverEndpointX_Amz_Target { Route53Resolver_UpdateResolverEndpoint = 0 }

	export enum UpdateResolverRuleX_Amz_Target { Route53Resolver_UpdateResolverRule = 0 }

}

