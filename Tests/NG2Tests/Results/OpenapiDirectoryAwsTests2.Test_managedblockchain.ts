import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateMemberOutput {
		MemberId?: string;
	}


	/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkConfiguration {

		/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricConfiguration;
	}


	/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricConfiguration {
		AdminUsername: string;
		AdminPassword: string;
	}


	/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
	export interface MemberLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricLogPublishingConfiguration;
	}


	/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricLogPublishingConfiguration {

		/** A collection of log configurations. */
		CaLogs?: LogConfigurations;
	}


	/** A collection of log configurations. */
	export interface LogConfigurations {

		/** A configuration for logging events. */
		Cloudwatch?: LogConfiguration;
	}


	/** A configuration for logging events. */
	export interface LogConfiguration {
		Enabled?: boolean;
	}

	export interface InvalidRequestException {
	}

	export interface AccessDeniedException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface ResourceNotReadyException {
	}

	export interface ThrottlingException {
	}

	export interface ResourceLimitExceededException {
	}

	export interface InternalServiceErrorException {
	}

	export interface CreateNetworkOutput {
		NetworkId?: string;
		MemberId?: string;
	}


	/** Hyperledger Fabric configuration properties for the network. */
	export interface NetworkFabricConfiguration {
		Edition: NetworkFabricConfigurationEdition;
	}

	export enum NetworkFabricConfigurationEdition { STARTER = 0, STANDARD = 1 }


	/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
	export interface ApprovalThresholdPolicy {
		ThresholdPercentage?: number;
		ProposalDurationInHours?: number;
		ThresholdComparator?: ApprovalThresholdPolicyThresholdComparator;
	}

	export enum ApprovalThresholdPolicyThresholdComparator { GREATER_THAN = 0, GREATER_THAN_OR_EQUAL_TO = 1 }

	export interface CreateNodeOutput {
		NodeId?: string;
	}


	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		Fabric?: NodeFabricLogPublishingConfiguration;
	}


	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeFabricLogPublishingConfiguration {

		/** A collection of log configurations. */
		ChaincodeLogs?: LogConfigurations;

		/** A collection of log configurations. */
		PeerLogs?: LogConfigurations;
	}

	export interface CreateProposalOutput {
		ProposalId?: string;
	}


	/** An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>. */
	export interface InviteAction {
		Principal: string;
	}


	/** An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network. */
	export interface RemoveAction {
		MemberId: string;
	}

	export interface DeleteMemberOutput {
	}

	export interface DeleteNodeOutput {
	}

	export interface GetMemberOutput {

		/** Member configuration properties. */
		Member?: Member;
	}


	/** Member configuration properties. */
	export interface Member {
		NetworkId?: string;
		Id?: string;
		Name?: string;
		Description?: string;

		/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkAttributes?: MemberFrameworkAttributes;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Status?: MemberStatus;
		CreationDate?: Date;
	}


	/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricAttributes;
	}


	/** Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricAttributes {
		AdminUsername?: string;
		CaEndpoint?: string;
	}

	export enum MemberStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, UPDATING = 3, DELETING = 4, DELETED = 5 }

	export interface GetNetworkOutput {

		/** Network configuration properties. */
		Network?: Network;
	}


	/** Network configuration properties. */
	export interface Network {
		Id?: string;
		Name?: string;
		Description?: string;
		Framework?: NetworkFramework;
		FrameworkVersion?: string;

		/** Attributes relevant to the network for the blockchain framework that the network uses. */
		FrameworkAttributes?: NetworkFrameworkAttributes;
		VpcEndpointServiceName?: string;

		/** The voting rules for the network to decide if a proposal is accepted */
		VotingPolicy?: VotingPolicy;
		Status?: NetworkStatus;
		CreationDate?: Date;
	}

	export enum NetworkFramework { HYPERLEDGER_FABRIC = 0 }


	/** Attributes relevant to the network for the blockchain framework that the network uses. */
	export interface NetworkFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a network. */
		Fabric?: NetworkFabricAttributes;
	}


	/** Attributes of Hyperledger Fabric for a network. */
	export interface NetworkFabricAttributes {
		OrderingServiceEndpoint?: string;
		Edition?: NetworkFabricConfigurationEdition;
	}


	/**  The voting rules for the network to decide if a proposal is accepted  */
	export interface VotingPolicy {

		/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}

	export enum NetworkStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, DELETING = 3, DELETED = 4 }

	export interface GetNodeOutput {

		/** Configuration properties of a peer node. */
		Node?: Node;
	}


	/** Configuration properties of a peer node. */
	export interface Node {
		NetworkId?: string;
		MemberId?: string;
		Id?: string;
		InstanceType?: string;
		AvailabilityZone?: string;

		/** Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses. */
		FrameworkAttributes?: NodeFrameworkAttributes;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
		Status?: NodeStatus;
		CreationDate?: Date;
	}


	/** Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses. */
	export interface NodeFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric. */
		Fabric?: NodeFabricAttributes;
	}


	/** Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric. */
	export interface NodeFabricAttributes {
		PeerEndpoint?: string;
		PeerEventEndpoint?: string;
	}

	export enum NodeStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, UPDATING = 3, DELETING = 4, DELETED = 5, FAILED = 6 }

	export interface GetProposalOutput {

		/** Properties of a proposal on a Managed Blockchain network. */
		Proposal?: Proposal;
	}


	/** Properties of a proposal on a Managed Blockchain network. */
	export interface Proposal {
		ProposalId?: string;
		NetworkId?: string;
		Description?: string;

		/** The actions to carry out if a proposal is <code>APPROVED</code>. */
		Actions?: ProposalActions;
		ProposedByMemberId?: string;
		ProposedByMemberName?: string;
		Status?: ProposalStatus;
		CreationDate?: Date;
		ExpirationDate?: Date;
		YesVoteCount?: number;
		NoVoteCount?: number;
		OutstandingVoteCount?: number;
	}


	/**  The actions to carry out if a proposal is <code>APPROVED</code>.  */
	export interface ProposalActions {
		Invitations?: Array<InviteAction>;
		Removals?: Array<RemoveAction>;
	}

	export enum ProposalStatus { IN_PROGRESS = 0, APPROVED = 1, REJECTED = 2, EXPIRED = 3, ACTION_FAILED = 4 }

	export interface ListInvitationsOutput {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}


	/** An invitation to an AWS account to create a member and join the network. */
	export interface Invitation {
		InvitationId?: string;
		CreationDate?: Date;
		ExpirationDate?: Date;
		Status?: InvitationStatus;

		/** A summary of network configuration properties. */
		NetworkSummary?: NetworkSummary;
	}

	export enum InvitationStatus { PENDING = 0, ACCEPTED = 1, ACCEPTING = 2, REJECTED = 3, EXPIRED = 4 }


	/** A summary of network configuration properties. */
	export interface NetworkSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		Framework?: NetworkFramework;
		FrameworkVersion?: string;
		Status?: NetworkStatus;
		CreationDate?: Date;
	}

	export interface ListMembersOutput {
		Members?: Array<MemberSummary>;
		NextToken?: string;
	}


	/** A summary of configuration properties for a member. */
	export interface MemberSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		Status?: MemberStatus;
		CreationDate?: Date;
		IsOwned?: boolean;
	}

	export interface ListNetworksOutput {
		Networks?: Array<NetworkSummary>;
		NextToken?: string;
	}

	export interface ListNodesOutput {
		Nodes?: Array<NodeSummary>;
		NextToken?: string;
	}


	/** A summary of configuration properties for a peer node. */
	export interface NodeSummary {
		Id?: string;
		Status?: NodeStatus;
		CreationDate?: Date;
		AvailabilityZone?: string;
		InstanceType?: string;
	}

	export interface ListProposalVotesOutput {
		ProposalVotes?: Array<VoteSummary>;
		NextToken?: string;
	}


	/**  Properties of an individual vote that a member cast for a proposal.  */
	export interface VoteSummary {
		Vote?: VoteSummaryVote;
		MemberName?: string;
		MemberId?: string;
	}

	export enum VoteSummaryVote { YES = 0, NO = 1 }

	export interface ListProposalsOutput {
		Proposals?: Array<ProposalSummary>;
		NextToken?: string;
	}


	/** Properties of a proposal. */
	export interface ProposalSummary {
		ProposalId?: string;
		Description?: string;
		ProposedByMemberId?: string;
		ProposedByMemberName?: string;
		Status?: ProposalStatus;
		CreationDate?: Date;
		ExpirationDate?: Date;
	}

	export interface RejectInvitationOutput {
	}

	export interface IllegalActionException {
	}

	export interface UpdateMemberOutput {
	}

	export interface UpdateNodeOutput {
	}

	export interface VoteOnProposalOutput {
	}

	export enum ThresholdComparator { GREATER_THAN = 0, GREATER_THAN_OR_EQUAL_TO = 1 }


	/** Configuration properties of the member. */
	export interface MemberConfiguration {
		Name: string;
		Description?: string;

		/**
		 * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
		 * Required
		 */
		FrameworkConfiguration: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}

	export interface CreateMemberInput {
		ClientRequestToken: string;
		InvitationId: string;

		/**
		 * Configuration properties of the member.
		 * Required
		 */
		MemberConfiguration: MemberConfiguration;
	}

	export enum Framework { HYPERLEDGER_FABRIC = 0 }


	/**  Configuration properties relevant to the network for the blockchain framework that the network uses.  */
	export interface NetworkFrameworkConfiguration {

		/** Hyperledger Fabric configuration properties for the network. */
		Fabric?: NetworkFabricConfiguration;
	}

	export interface CreateNetworkInput {
		ClientRequestToken: string;
		Name: string;
		Description?: string;
		Framework: NetworkFramework;
		FrameworkVersion: string;

		/** Configuration properties relevant to the network for the blockchain framework that the network uses. */
		FrameworkConfiguration?: NetworkFrameworkConfiguration;

		/**
		 * The voting rules for the network to decide if a proposal is accepted
		 * Required
		 */
		VotingPolicy: VotingPolicy;

		/**
		 * Configuration properties of the member.
		 * Required
		 */
		MemberConfiguration: MemberConfiguration;
	}


	/** Configuration properties of a peer node. */
	export interface NodeConfiguration {
		InstanceType: string;
		AvailabilityZone: string;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}

	export interface CreateNodeInput {
		ClientRequestToken: string;

		/**
		 * Configuration properties of a peer node.
		 * Required
		 */
		NodeConfiguration: NodeConfiguration;
	}

	export interface CreateProposalInput {
		ClientRequestToken: string;
		MemberId: string;

		/**
		 * The actions to carry out if a proposal is <code>APPROVED</code>.
		 * Required
		 */
		Actions: ProposalActions;
		Description?: string;
	}

	export interface DeleteMemberInput {
	}

	export interface DeleteNodeInput {
	}

	export enum Edition { STARTER = 0, STANDARD = 1 }

	export interface GetMemberInput {
	}

	export interface GetNetworkInput {
	}

	export interface GetNodeInput {
	}

	export interface GetProposalInput {
	}

	export interface ListInvitationsInput {
	}

	export interface ListMembersInput {
	}

	export interface ListNetworksInput {
	}

	export interface ListNodesInput {
	}

	export interface ListProposalVotesInput {
	}

	export interface ListProposalsInput {
	}

	export interface RejectInvitationInput {
	}

	export interface UpdateMemberInput {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}

	export interface UpdateNodeInput {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}

	export enum VoteValue { YES = 0, NO = 1 }

	export interface VoteOnProposalInput {
		VoterMemberId: string;
		Vote: VoteSummaryVote;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a member within a Managed Blockchain network.
		 * Post networks/{networkId}/members
		 * @param {string} networkId The unique identifier of the network in which the member is created.
		 * @return {CreateMemberOutput} Success
		 */
		CreateMember(networkId: string, requestBody: CreateMemberPostBody): Observable<CreateMemberOutput> {
			return this.http.post<CreateMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a listing of the members in a network and properties of their configurations.
		 * Get networks/{networkId}/members
		 * @param {string} networkId The unique identifier of the network for which to list members.
		 * @param {string} name The optional name of the member to list.
		 * @param {MemberStatus} status An optional status specifier. If provided, only members currently in this status are listed.
		 * @param {boolean} isOwned An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (<code>true</code>) or that other AWS accounts own (<code>false</code>). If omitted, all members are listed.
		 * @param {number} maxResults The maximum number of members to return in the request.
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersOutput} Success
		 */
		ListMembers(networkId: string, name: string, status: MemberStatus, isOwned: boolean, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListMembersOutput> {
			return this.http.get<ListMembersOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members&name=' + (name == null ? '' : encodeURIComponent(name)) + '&status=' + status + '&isOwned=' + isOwned + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new blockchain network using Amazon Managed Blockchain.
		 * Post networks
		 * @return {CreateNetworkOutput} Success
		 */
		CreateNetwork(requestBody: CreateNetworkPostBody): Observable<CreateNetworkOutput> {
			return this.http.post<CreateNetworkOutput>(this.baseUri + 'networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the networks in which the current AWS account has members.
		 * Get networks
		 * @param {string} name The name of the network.
		 * @param {NetworkFramework} framework An optional framework specifier. If provided, only networks of this framework type are listed.
		 * @param {NetworkStatus} status An optional status specifier. If provided, only networks currently in this status are listed.
		 * @param {number} maxResults The maximum number of networks to list.
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNetworksOutput} Success
		 */
		ListNetworks(name: string, framework: NetworkFramework, status: NetworkStatus, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListNetworksOutput> {
			return this.http.get<ListNetworksOutput>(this.baseUri + 'networks?name=' + (name == null ? '' : encodeURIComponent(name)) + '&framework=' + framework + '&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a peer node in a member.
		 * Post networks/{networkId}/members/{memberId}/nodes
		 * @param {string} networkId The unique identifier of the network in which this node runs.
		 * @param {string} memberId The unique identifier of the member that owns this node.
		 * @return {CreateNodeOutput} Success
		 */
		CreateNode(networkId: string, memberId: string, requestBody: CreateNodePostBody): Observable<CreateNodeOutput> {
			return this.http.post<CreateNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)) + '/nodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the nodes within a network.
		 * Get networks/{networkId}/members/{memberId}/nodes
		 * @param {string} networkId The unique identifier of the network for which to list nodes.
		 * @param {string} memberId The unique identifier of the member who owns the nodes to list.
		 * @param {NodeStatus} status An optional status specifier. If provided, only nodes currently in this status are listed.
		 * @param {number} maxResults The maximum number of nodes to list.
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNodesOutput} Success
		 */
		ListNodes(networkId: string, memberId: string, status: NodeStatus, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListNodesOutput> {
			return this.http.get<ListNodesOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)) + '/nodes&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.
		 * Post networks/{networkId}/proposals
		 * @param {string} networkId  The unique identifier of the network for which the proposal is made.
		 * @return {CreateProposalOutput} Success
		 */
		CreateProposal(networkId: string, requestBody: CreateProposalPostBody): Observable<CreateProposalOutput> {
			return this.http.post<CreateProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a listing of proposals for the network.
		 * Get networks/{networkId}/proposals
		 * @param {string} networkId  The unique identifier of the network. 
		 * @param {number} maxResults  The maximum number of proposals to return. 
		 * @param {string} nextToken  The pagination token that indicates the next set of results to retrieve. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProposalsOutput} Success
		 */
		ListProposals(networkId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListProposalsOutput> {
			return this.http.get<ListProposalsOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last AWS account, the network is deleted also.
		 * Delete networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique identifier of the network from which the member is removed.
		 * @param {string} memberId The unique identifier of the member to remove.
		 * @return {DeleteMemberOutput} Success
		 */
		DeleteMember(networkId: string, memberId: string): Observable<DeleteMemberOutput> {
			return this.http.delete<DeleteMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * Returns detailed information about a member.
		 * Get networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique identifier of the network to which the member belongs.
		 * @param {string} memberId The unique identifier of the member.
		 * @return {GetMemberOutput} Success
		 */
		GetMember(networkId: string, memberId: string): Observable<GetMemberOutput> {
			return this.http.get<GetMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * Updates a member configuration with new parameters.
		 * Patch networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique ID of the Managed Blockchain network to which the member belongs.
		 * @param {string} memberId The unique ID of the member.
		 * @return {UpdateMemberOutput} Success
		 */
		UpdateMember(networkId: string, memberId: string, requestBody: UpdateMemberPatchBody): Observable<UpdateMemberOutput> {
			return this.http.patch<UpdateMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.
		 * Delete networks/{networkId}/members/{memberId}/nodes/{nodeId}
		 * @param {string} networkId The unique identifier of the network that the node belongs to.
		 * @param {string} memberId The unique identifier of the member that owns this node.
		 * @param {string} nodeId The unique identifier of the node.
		 * @return {DeleteNodeOutput} Success
		 */
		DeleteNode(networkId: string, memberId: string, nodeId: string): Observable<DeleteNodeOutput> {
			return this.http.delete<DeleteNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)), {});
		}

		/**
		 * Returns detailed information about a peer node.
		 * Get networks/{networkId}/members/{memberId}/nodes/{nodeId}
		 * @param {string} networkId The unique identifier of the network to which the node belongs.
		 * @param {string} memberId The unique identifier of the member that owns the node.
		 * @param {string} nodeId The unique identifier of the node.
		 * @return {GetNodeOutput} Success
		 */
		GetNode(networkId: string, memberId: string, nodeId: string): Observable<GetNodeOutput> {
			return this.http.get<GetNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)), {});
		}

		/**
		 * Updates a node configuration with new parameters.
		 * Patch networks/{networkId}/members/{memberId}/nodes/{nodeId}
		 * @param {string} networkId The unique ID of the Managed Blockchain network to which the node belongs.
		 * @param {string} memberId The unique ID of the member that owns the node.
		 * @param {string} nodeId The unique ID of the node.
		 * @return {UpdateNodeOutput} Success
		 */
		UpdateNode(networkId: string, memberId: string, nodeId: string, requestBody: UpdateNodePatchBody): Observable<UpdateNodeOutput> {
			return this.http.patch<UpdateNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed information about a network.
		 * Get networks/{networkId}
		 * @param {string} networkId The unique identifier of the network to get information about.
		 * @return {GetNetworkOutput} Success
		 */
		GetNetwork(networkId: string): Observable<GetNetworkOutput> {
			return this.http.get<GetNetworkOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)), {});
		}

		/**
		 * Returns detailed information about a proposal.
		 * Get networks/{networkId}/proposals/{proposalId}
		 * @param {string} networkId The unique identifier of the network for which the proposal is made.
		 * @param {string} proposalId The unique identifier of the proposal.
		 * @return {GetProposalOutput} Success
		 */
		GetProposal(networkId: string, proposalId: string): Observable<GetProposalOutput> {
			return this.http.get<GetProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), {});
		}

		/**
		 * Returns a listing of all invitations made on the specified network.
		 * Get invitations
		 * @param {number} maxResults The maximum number of invitations to return.
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsOutput} Success
		 */
		ListInvitations(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListInvitationsOutput> {
			return this.http.get<ListInvitationsOutput>(this.baseUri + 'invitations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.
		 * Get networks/{networkId}/proposals/{proposalId}/votes
		 * @param {string} networkId  The unique identifier of the network. 
		 * @param {string} proposalId  The unique identifier of the proposal. 
		 * @param {number} maxResults  The maximum number of votes to return. 
		 * @param {string} nextToken  The pagination token that indicates the next set of results to retrieve. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProposalVotesOutput} Success
		 */
		ListProposalVotes(networkId: string, proposalId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListProposalVotesOutput> {
			return this.http.get<ListProposalVotesOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/votes&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.
		 * Post networks/{networkId}/proposals/{proposalId}/votes
		 * @param {string} networkId  The unique identifier of the network. 
		 * @param {string} proposalId  The unique identifier of the proposal. 
		 * @return {VoteOnProposalOutput} Success
		 */
		VoteOnProposal(networkId: string, proposalId: string, requestBody: VoteOnProposalPostBody): Observable<VoteOnProposalOutput> {
			return this.http.post<VoteOnProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/votes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.
		 * Delete invitations/{invitationId}
		 * @param {string} invitationId The unique identifier of the invitation to reject.
		 * @return {RejectInvitationOutput} Success
		 */
		RejectInvitation(invitationId: string): Observable<RejectInvitationOutput> {
			return this.http.delete<RejectInvitationOutput>(this.baseUri + 'invitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)), {});
		}
	}

	export interface CreateMemberPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/**
		 * The unique identifier of the invitation that is sent to the member to join the network.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		InvitationId: string;

		/**
		 * Configuration properties of the member.
		 * Required
		 */
		MemberConfiguration: CreateMemberPostBodyMemberConfiguration;
	}

	export interface CreateMemberPostBodyMemberConfiguration {
		Name?: string;
		Description?: string;

		/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkConfiguration?: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}

	export interface CreateNetworkPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/**
		 * The name of the network.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name: string;

		/**
		 * An optional description for the network.
		 * Max length: 128
		 */
		Description?: string;

		/**
		 * The blockchain framework that the network uses.
		 * Required
		 */
		Framework: NetworkFramework;

		/**
		 * The version of the blockchain framework that the network uses.
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		FrameworkVersion: string;

		/** Configuration properties relevant to the network for the blockchain framework that the network uses. */
		FrameworkConfiguration?: CreateNetworkPostBodyFrameworkConfiguration;

		/**
		 * The voting rules for the network to decide if a proposal is accepted
		 * Required
		 */
		VotingPolicy: CreateNetworkPostBodyVotingPolicy;

		/**
		 * Configuration properties of the member.
		 * Required
		 */
		MemberConfiguration: CreateNetworkPostBodyMemberConfiguration;
	}

	export interface CreateNetworkPostBodyFrameworkConfiguration {

		/** Hyperledger Fabric configuration properties for the network. */
		Fabric?: NetworkFabricConfiguration;
	}

	export interface CreateNetworkPostBodyVotingPolicy {

		/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}

	export interface CreateNetworkPostBodyMemberConfiguration {
		Name?: string;
		Description?: string;

		/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkConfiguration?: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}

	export interface CreateNodePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/**
		 * Configuration properties of a peer node.
		 * Required
		 */
		NodeConfiguration: CreateNodePostBodyNodeConfiguration;
	}

	export interface CreateNodePostBodyNodeConfiguration {
		InstanceType?: string;
		AvailabilityZone?: string;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}

	export interface CreateProposalPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/**
		 * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		MemberId: string;

		/**
		 * The actions to carry out if a proposal is <code>APPROVED</code>.
		 * Required
		 */
		Actions: CreateProposalPostBodyActions;

		/**
		 * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
		 * Max length: 128
		 */
		Description?: string;
	}

	export interface CreateProposalPostBodyActions {
		Invitations?: Array<InviteAction>;
		Removals?: Array<RemoveAction>;
	}

	export interface UpdateMemberPatchBody {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: UpdateMemberPatchBodyLogPublishingConfiguration;
	}

	export interface UpdateMemberPatchBodyLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricLogPublishingConfiguration;
	}

	export interface UpdateNodePatchBody {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: UpdateNodePatchBodyLogPublishingConfiguration;
	}

	export interface UpdateNodePatchBodyLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		Fabric?: NodeFabricLogPublishingConfiguration;
	}

	export interface VoteOnProposalPostBody {

		/**
		 * The unique identifier of the member casting the vote.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		VoterMemberId: string;

		/**
		 * The value of the vote.
		 * Required
		 */
		Vote: VoteSummaryVote;
	}

}

