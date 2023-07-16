import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateResolverEndpointIpAddressResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}


	/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
	export interface ResolverEndpoint {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		Name?: string;
		SecurityGroupIds?: Array<string>;
		Direction?: ResolverEndpointDirection;
		IpAddressCount?: number;
		HostVPCId?: string;
		Status?: ResolverEndpointStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	export enum ResolverEndpointDirection { INBOUND = 0, OUTBOUND = 1 }

	export enum ResolverEndpointStatus { CREATING = 0, OPERATIONAL = 1, UPDATING = 2, AUTO_RECOVERING = 3, ACTION_NEEDED = 4, DELETING = 5 }

	export interface AssociateResolverEndpointIpAddressRequest {
		ResolverEndpointId: string;

		/**
		 * In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.
		 * Required
		 */
		IpAddress: IpAddressUpdate;
	}


	/** In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update. */
	export interface IpAddressUpdate {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidParameterException {
	}

	export interface InvalidRequestException {
	}

	export interface ResourceExistsException {
	}

	export interface InternalServiceErrorException {
	}

	export interface LimitExceededException {
	}

	export interface ThrottlingException {
	}

	export interface AssociateResolverRuleResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}


	/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
	export interface ResolverRuleAssociation {
		Id?: string;
		ResolverRuleId?: string;
		Name?: string;
		VPCId?: string;
		Status?: ResolverRuleAssociationStatus;
		StatusMessage?: string;
	}

	export enum ResolverRuleAssociationStatus { CREATING = 0, COMPLETE = 1, DELETING = 2, FAILED = 3, OVERRIDDEN = 4 }

	export interface AssociateResolverRuleRequest {
		ResolverRuleId: string;
		Name?: string;
		VPCId: string;
	}

	export interface ResourceUnavailableException {
	}

	export interface CreateResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface CreateResolverEndpointRequest {
		CreatorRequestId: string;
		Name?: string;
		SecurityGroupIds: Array<string>;
		Direction: ResolverEndpointDirection;
		IpAddresses: Array<IpAddressRequest>;
		Tags?: Array<Tag>;
	}


	/** In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries. */
	export interface IpAddressRequest {
		SubnetId: string;
		Ip?: string;
	}


	/** One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface CreateResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}


	/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
	export interface ResolverRule {
		Id?: string;
		CreatorRequestId?: string;
		Arn?: string;
		DomainName?: string;
		Status?: ResolverRuleStatus;
		StatusMessage?: string;
		RuleType?: ResolverRuleRuleType;
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		OwnerId?: string;
		ShareStatus?: ResolverRuleShareStatus;
	}

	export enum ResolverRuleStatus { COMPLETE = 0, DELETING = 1, UPDATING = 2, FAILED = 3 }

	export enum ResolverRuleRuleType { FORWARD = 0, SYSTEM = 1, RECURSIVE = 2 }


	/** In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to. */
	export interface TargetAddress {
		Ip: string;
		Port?: number;
	}

	export enum ResolverRuleShareStatus { NOT_SHARED = 0, SHARED_WITH_ME = 1, SHARED_BY_ME = 2 }

	export interface CreateResolverRuleRequest {
		CreatorRequestId: string;
		Name?: string;
		RuleType: ResolverRuleRuleType;
		DomainName: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
		Tags?: Array<Tag>;
	}

	export interface DeleteResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface DeleteResolverEndpointRequest {
		ResolverEndpointId: string;
	}

	export interface DeleteResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface DeleteResolverRuleRequest {
		ResolverRuleId: string;
	}

	export interface ResourceInUseException {
	}

	export interface DisassociateResolverEndpointIpAddressResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface DisassociateResolverEndpointIpAddressRequest {
		ResolverEndpointId: string;

		/**
		 * In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.
		 * Required
		 */
		IpAddress: IpAddressUpdate;
	}

	export interface DisassociateResolverRuleResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}

	export interface DisassociateResolverRuleRequest {
		VPCId: string;
		ResolverRuleId: string;
	}

	export interface GetResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface GetResolverEndpointRequest {
		ResolverEndpointId: string;
	}

	export interface GetResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface GetResolverRuleRequest {
		ResolverRuleId: string;
	}

	export interface GetResolverRuleAssociationResponse {

		/** In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC. */
		ResolverRuleAssociation?: ResolverRuleAssociation;
	}

	export interface GetResolverRuleAssociationRequest {
		ResolverRuleAssociationId: string;
	}

	export interface GetResolverRulePolicyResponse {
		ResolverRulePolicy?: string;
	}

	export interface GetResolverRulePolicyRequest {
		Arn: string;
	}

	export interface UnknownResourceException {
	}

	export interface ListResolverEndpointIpAddressesResponse {
		NextToken?: string;
		MaxResults?: number;
		IpAddresses?: Array<IpAddressResponse>;
	}


	/** In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that the resolver endpoint uses for DNS queries. */
	export interface IpAddressResponse {
		IpId?: string;
		SubnetId?: string;
		Ip?: string;
		Status?: IpAddressResponseStatus;
		StatusMessage?: string;
		CreationTime?: string;
		ModificationTime?: string;
	}

	export enum IpAddressResponseStatus { CREATING = 0, FAILED_CREATION = 1, ATTACHING = 2, ATTACHED = 3, REMAP_DETACHING = 4, REMAP_ATTACHING = 5, DETACHING = 6, FAILED_RESOURCE_GONE = 7, DELETING = 8, DELETE_FAILED_FAS_EXPIRED = 9 }

	export interface ListResolverEndpointIpAddressesRequest {
		ResolverEndpointId: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListResolverEndpointsResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverEndpoints?: Array<ResolverEndpoint>;
	}

	export interface ListResolverEndpointsRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}


	/** For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules. */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	export interface ListResolverRuleAssociationsResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
	}

	export interface ListResolverRuleAssociationsRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListResolverRulesResponse {
		NextToken?: string;
		MaxResults?: number;
		ResolverRules?: Array<ResolverRule>;
	}

	export interface ListResolverRulesRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}


	/** The response to a <code>PutResolverRulePolicy</code> request. */
	export interface PutResolverRulePolicyResponse {
		ReturnValue?: boolean;
	}

	export interface PutResolverRulePolicyRequest {
		Arn: string;
		ResolverRulePolicy: string;
	}

	export interface InvalidPolicyDocument {
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface InvalidTagException {
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateResolverEndpointResponse {

		/** In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint. */
		ResolverEndpoint?: ResolverEndpoint;
	}

	export interface UpdateResolverEndpointRequest {
		ResolverEndpointId: string;
		Name?: string;
	}

	export interface UpdateResolverRuleResponse {

		/** For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request. */
		ResolverRule?: ResolverRule;
	}

	export interface UpdateResolverRuleRequest {
		ResolverRuleId: string;

		/**
		 * In an <a>UpdateResolverRule</a> request, information about the changes that you want to make.
		 * Required
		 */
		Config: ResolverRuleConfig;
	}


	/** In an <a>UpdateResolverRule</a> request, information about the changes that you want to make. */
	export interface ResolverRuleConfig {
		Name?: string;
		TargetIps?: Array<TargetAddress>;
		ResolverEndpointId?: string;
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
		ListResolverEndpointIpAddresses(MaxResults: string, NextToken: string, requestBody: ListResolverEndpointIpAddressesRequest): Observable<ListResolverEndpointIpAddressesResponse> {
			return this.http.post<ListResolverEndpointIpAddressesResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the resolver endpoints that were created using the current AWS account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverEndpointsResponse} Success
		 */
		ListResolverEndpoints(MaxResults: string, NextToken: string, requestBody: ListResolverEndpointsRequest): Observable<ListResolverEndpointsResponse> {
			return this.http.post<ListResolverEndpointsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the associations that were created between resolver rules and VPCs using the current AWS account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverRuleAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRuleAssociationsResponse} Success
		 */
		ListResolverRuleAssociations(MaxResults: string, NextToken: string, requestBody: ListResolverRuleAssociationsRequest): Observable<ListResolverRuleAssociationsResponse> {
			return this.http.post<ListResolverRuleAssociationsResponse>(this.baseUri + '#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resolver rules that were created using the current AWS account.
		 * Post #X-Amz-Target=Route53Resolver.ListResolverRules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResolverRulesResponse} Success
		 */
		ListResolverRules(MaxResults: string, NextToken: string, requestBody: ListResolverRulesRequest): Observable<ListResolverRulesResponse> {
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

