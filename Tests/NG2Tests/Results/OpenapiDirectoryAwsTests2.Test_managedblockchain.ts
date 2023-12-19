import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMemberOutput {
		MemberId?: string | null;
	}
	export interface CreateMemberOutputFormProperties {
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberOutputFormGroup() {
		return new FormGroup<CreateMemberOutputFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkConfiguration {

		/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricConfiguration;
	}

	/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkConfigurationFormProperties {
	}
	export function CreateMemberFrameworkConfigurationFormGroup() {
		return new FormGroup<MemberFrameworkConfigurationFormProperties>({
		});

	}


	/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricConfiguration {
		AdminUsername: string;
		AdminPassword: string;
	}

	/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricConfigurationFormProperties {
		AdminUsername: FormControl<string | null | undefined>,
		AdminPassword: FormControl<string | null | undefined>,
	}
	export function CreateMemberFabricConfigurationFormGroup() {
		return new FormGroup<MemberFabricConfigurationFormProperties>({
			AdminUsername: new FormControl<string | null | undefined>(undefined),
			AdminPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
	export interface MemberLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricLogPublishingConfiguration;
	}

	/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
	export interface MemberLogPublishingConfigurationFormProperties {
	}
	export function CreateMemberLogPublishingConfigurationFormGroup() {
		return new FormGroup<MemberLogPublishingConfigurationFormProperties>({
		});

	}


	/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricLogPublishingConfiguration {

		/** A collection of log configurations. */
		CaLogs?: LogConfigurations;
	}

	/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricLogPublishingConfigurationFormProperties {
	}
	export function CreateMemberFabricLogPublishingConfigurationFormGroup() {
		return new FormGroup<MemberFabricLogPublishingConfigurationFormProperties>({
		});

	}


	/** A collection of log configurations. */
	export interface LogConfigurations {

		/** A configuration for logging events. */
		Cloudwatch?: LogConfiguration;
	}

	/** A collection of log configurations. */
	export interface LogConfigurationsFormProperties {
	}
	export function CreateLogConfigurationsFormGroup() {
		return new FormGroup<LogConfigurationsFormProperties>({
		});

	}


	/** A configuration for logging events. */
	export interface LogConfiguration {
		Enabled?: boolean | null;
	}

	/** A configuration for logging events. */
	export interface LogConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
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

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
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

	export interface CreateNetworkOutput {
		NetworkId?: string | null;
		MemberId?: string | null;
	}
	export interface CreateNetworkOutputFormProperties {
		NetworkId: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkOutputFormGroup() {
		return new FormGroup<CreateNetworkOutputFormProperties>({
			NetworkId: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hyperledger Fabric configuration properties for the network. */
	export interface NetworkFabricConfiguration {
		Edition: NetworkFabricConfigurationEdition;
	}

	/** Hyperledger Fabric configuration properties for the network. */
	export interface NetworkFabricConfigurationFormProperties {
		Edition: FormControl<NetworkFabricConfigurationEdition | null | undefined>,
	}
	export function CreateNetworkFabricConfigurationFormGroup() {
		return new FormGroup<NetworkFabricConfigurationFormProperties>({
			Edition: new FormControl<NetworkFabricConfigurationEdition | null | undefined>(undefined),
		});

	}

	export enum NetworkFabricConfigurationEdition { STARTER = 0, STANDARD = 1 }


	/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
	export interface ApprovalThresholdPolicy {
		ThresholdPercentage?: number | null;
		ProposalDurationInHours?: number | null;
		ThresholdComparator?: ApprovalThresholdPolicyThresholdComparator | null;
	}

	/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
	export interface ApprovalThresholdPolicyFormProperties {
		ThresholdPercentage: FormControl<number | null | undefined>,
		ProposalDurationInHours: FormControl<number | null | undefined>,
		ThresholdComparator: FormControl<ApprovalThresholdPolicyThresholdComparator | null | undefined>,
	}
	export function CreateApprovalThresholdPolicyFormGroup() {
		return new FormGroup<ApprovalThresholdPolicyFormProperties>({
			ThresholdPercentage: new FormControl<number | null | undefined>(undefined),
			ProposalDurationInHours: new FormControl<number | null | undefined>(undefined),
			ThresholdComparator: new FormControl<ApprovalThresholdPolicyThresholdComparator | null | undefined>(undefined),
		});

	}

	export enum ApprovalThresholdPolicyThresholdComparator { GREATER_THAN = 0, GREATER_THAN_OR_EQUAL_TO = 1 }

	export interface CreateNodeOutput {
		NodeId?: string | null;
	}
	export interface CreateNodeOutputFormProperties {
		NodeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeOutputFormGroup() {
		return new FormGroup<CreateNodeOutputFormProperties>({
			NodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		Fabric?: NodeFabricLogPublishingConfiguration;
	}

	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeLogPublishingConfigurationFormProperties {
	}
	export function CreateNodeLogPublishingConfigurationFormGroup() {
		return new FormGroup<NodeLogPublishingConfigurationFormProperties>({
		});

	}


	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeFabricLogPublishingConfiguration {

		/** A collection of log configurations. */
		ChaincodeLogs?: LogConfigurations;

		/** A collection of log configurations. */
		PeerLogs?: LogConfigurations;
	}

	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeFabricLogPublishingConfigurationFormProperties {
	}
	export function CreateNodeFabricLogPublishingConfigurationFormGroup() {
		return new FormGroup<NodeFabricLogPublishingConfigurationFormProperties>({
		});

	}

	export interface CreateProposalOutput {
		ProposalId?: string | null;
	}
	export interface CreateProposalOutputFormProperties {
		ProposalId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProposalOutputFormGroup() {
		return new FormGroup<CreateProposalOutputFormProperties>({
			ProposalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>. */
	export interface InviteAction {
		Principal: string;
	}

	/** An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>. */
	export interface InviteActionFormProperties {
		Principal: FormControl<string | null | undefined>,
	}
	export function CreateInviteActionFormGroup() {
		return new FormGroup<InviteActionFormProperties>({
			Principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network. */
	export interface RemoveAction {
		MemberId: string;
	}

	/** An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network. */
	export interface RemoveActionFormProperties {
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveActionFormGroup() {
		return new FormGroup<RemoveActionFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMemberOutput {
	}
	export interface DeleteMemberOutputFormProperties {
	}
	export function CreateDeleteMemberOutputFormGroup() {
		return new FormGroup<DeleteMemberOutputFormProperties>({
		});

	}

	export interface DeleteNodeOutput {
	}
	export interface DeleteNodeOutputFormProperties {
	}
	export function CreateDeleteNodeOutputFormGroup() {
		return new FormGroup<DeleteNodeOutputFormProperties>({
		});

	}

	export interface GetMemberOutput {

		/** Member configuration properties. */
		Member?: Member;
	}
	export interface GetMemberOutputFormProperties {
	}
	export function CreateGetMemberOutputFormGroup() {
		return new FormGroup<GetMemberOutputFormProperties>({
		});

	}


	/** Member configuration properties. */
	export interface Member {
		NetworkId?: string | null;
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;

		/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkAttributes?: MemberFrameworkAttributes;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Status?: MemberStatus | null;
		CreationDate?: Date | null;
	}

	/** Member configuration properties. */
	export interface MemberFormProperties {
		NetworkId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<MemberStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			NetworkId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MemberStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricAttributes;
	}

	/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkAttributesFormProperties {
	}
	export function CreateMemberFrameworkAttributesFormGroup() {
		return new FormGroup<MemberFrameworkAttributesFormProperties>({
		});

	}


	/** Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricAttributes {
		AdminUsername?: string | null;
		CaEndpoint?: string | null;
	}

	/** Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework. */
	export interface MemberFabricAttributesFormProperties {
		AdminUsername: FormControl<string | null | undefined>,
		CaEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateMemberFabricAttributesFormGroup() {
		return new FormGroup<MemberFabricAttributesFormProperties>({
			AdminUsername: new FormControl<string | null | undefined>(undefined),
			CaEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MemberStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, UPDATING = 3, DELETING = 4, DELETED = 5 }

	export interface GetNetworkOutput {

		/** Network configuration properties. */
		Network?: Network;
	}
	export interface GetNetworkOutputFormProperties {
	}
	export function CreateGetNetworkOutputFormGroup() {
		return new FormGroup<GetNetworkOutputFormProperties>({
		});

	}


	/** Network configuration properties. */
	export interface Network {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		Framework?: NetworkFramework | null;
		FrameworkVersion?: string | null;

		/** Attributes relevant to the network for the blockchain framework that the network uses. */
		FrameworkAttributes?: NetworkFrameworkAttributes;
		VpcEndpointServiceName?: string | null;

		/** The voting rules for the network to decide if a proposal is accepted */
		VotingPolicy?: VotingPolicy;
		Status?: NetworkStatus | null;
		CreationDate?: Date | null;
	}

	/** Network configuration properties. */
	export interface NetworkFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Framework: FormControl<NetworkFramework | null | undefined>,
		FrameworkVersion: FormControl<string | null | undefined>,
		VpcEndpointServiceName: FormControl<string | null | undefined>,
		Status: FormControl<NetworkStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<NetworkFramework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
			VpcEndpointServiceName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NetworkStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum NetworkFramework { HYPERLEDGER_FABRIC = 0 }


	/** Attributes relevant to the network for the blockchain framework that the network uses. */
	export interface NetworkFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a network. */
		Fabric?: NetworkFabricAttributes;
	}

	/** Attributes relevant to the network for the blockchain framework that the network uses. */
	export interface NetworkFrameworkAttributesFormProperties {
	}
	export function CreateNetworkFrameworkAttributesFormGroup() {
		return new FormGroup<NetworkFrameworkAttributesFormProperties>({
		});

	}


	/** Attributes of Hyperledger Fabric for a network. */
	export interface NetworkFabricAttributes {
		OrderingServiceEndpoint?: string | null;
		Edition?: NetworkFabricConfigurationEdition | null;
	}

	/** Attributes of Hyperledger Fabric for a network. */
	export interface NetworkFabricAttributesFormProperties {
		OrderingServiceEndpoint: FormControl<string | null | undefined>,
		Edition: FormControl<NetworkFabricConfigurationEdition | null | undefined>,
	}
	export function CreateNetworkFabricAttributesFormGroup() {
		return new FormGroup<NetworkFabricAttributesFormProperties>({
			OrderingServiceEndpoint: new FormControl<string | null | undefined>(undefined),
			Edition: new FormControl<NetworkFabricConfigurationEdition | null | undefined>(undefined),
		});

	}


	/**  The voting rules for the network to decide if a proposal is accepted  */
	export interface VotingPolicy {

		/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}

	/**  The voting rules for the network to decide if a proposal is accepted  */
	export interface VotingPolicyFormProperties {
	}
	export function CreateVotingPolicyFormGroup() {
		return new FormGroup<VotingPolicyFormProperties>({
		});

	}

	export enum NetworkStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, DELETING = 3, DELETED = 4 }

	export interface GetNodeOutput {

		/** Configuration properties of a peer node. */
		Node?: Node;
	}
	export interface GetNodeOutputFormProperties {
	}
	export function CreateGetNodeOutputFormGroup() {
		return new FormGroup<GetNodeOutputFormProperties>({
		});

	}


	/** Configuration properties of a peer node. */
	export interface Node {
		NetworkId?: string | null;
		MemberId?: string | null;
		Id?: string | null;
		InstanceType?: string | null;
		AvailabilityZone?: string | null;

		/** Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses. */
		FrameworkAttributes?: NodeFrameworkAttributes;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
		Status?: NodeStatus | null;
		CreationDate?: Date | null;
	}

	/** Configuration properties of a peer node. */
	export interface NodeFormProperties {
		NetworkId: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		Status: FormControl<NodeStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			NetworkId: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NodeStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses. */
	export interface NodeFrameworkAttributes {

		/** Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric. */
		Fabric?: NodeFabricAttributes;
	}

	/** Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses. */
	export interface NodeFrameworkAttributesFormProperties {
	}
	export function CreateNodeFrameworkAttributesFormGroup() {
		return new FormGroup<NodeFrameworkAttributesFormProperties>({
		});

	}


	/** Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric. */
	export interface NodeFabricAttributes {
		PeerEndpoint?: string | null;
		PeerEventEndpoint?: string | null;
	}

	/** Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric. */
	export interface NodeFabricAttributesFormProperties {
		PeerEndpoint: FormControl<string | null | undefined>,
		PeerEventEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateNodeFabricAttributesFormGroup() {
		return new FormGroup<NodeFabricAttributesFormProperties>({
			PeerEndpoint: new FormControl<string | null | undefined>(undefined),
			PeerEventEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeStatus { CREATING = 0, AVAILABLE = 1, CREATE_FAILED = 2, UPDATING = 3, DELETING = 4, DELETED = 5, FAILED = 6 }

	export interface GetProposalOutput {

		/** Properties of a proposal on a Managed Blockchain network. */
		Proposal?: Proposal;
	}
	export interface GetProposalOutputFormProperties {
	}
	export function CreateGetProposalOutputFormGroup() {
		return new FormGroup<GetProposalOutputFormProperties>({
		});

	}


	/** Properties of a proposal on a Managed Blockchain network. */
	export interface Proposal {
		ProposalId?: string | null;
		NetworkId?: string | null;
		Description?: string | null;

		/** The actions to carry out if a proposal is <code>APPROVED</code>. */
		Actions?: ProposalActions;
		ProposedByMemberId?: string | null;
		ProposedByMemberName?: string | null;
		Status?: ProposalStatus | null;
		CreationDate?: Date | null;
		ExpirationDate?: Date | null;
		YesVoteCount?: number | null;
		NoVoteCount?: number | null;
		OutstandingVoteCount?: number | null;
	}

	/** Properties of a proposal on a Managed Blockchain network. */
	export interface ProposalFormProperties {
		ProposalId: FormControl<string | null | undefined>,
		NetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProposedByMemberId: FormControl<string | null | undefined>,
		ProposedByMemberName: FormControl<string | null | undefined>,
		Status: FormControl<ProposalStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		YesVoteCount: FormControl<number | null | undefined>,
		NoVoteCount: FormControl<number | null | undefined>,
		OutstandingVoteCount: FormControl<number | null | undefined>,
	}
	export function CreateProposalFormGroup() {
		return new FormGroup<ProposalFormProperties>({
			ProposalId: new FormControl<string | null | undefined>(undefined),
			NetworkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProposedByMemberId: new FormControl<string | null | undefined>(undefined),
			ProposedByMemberName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProposalStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			YesVoteCount: new FormControl<number | null | undefined>(undefined),
			NoVoteCount: new FormControl<number | null | undefined>(undefined),
			OutstandingVoteCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The actions to carry out if a proposal is <code>APPROVED</code>.  */
	export interface ProposalActions {
		Invitations?: Array<InviteAction>;
		Removals?: Array<RemoveAction>;
	}

	/**  The actions to carry out if a proposal is <code>APPROVED</code>.  */
	export interface ProposalActionsFormProperties {
	}
	export function CreateProposalActionsFormGroup() {
		return new FormGroup<ProposalActionsFormProperties>({
		});

	}

	export enum ProposalStatus { IN_PROGRESS = 0, APPROVED = 1, REJECTED = 2, EXPIRED = 3, ACTION_FAILED = 4 }

	export interface ListInvitationsOutput {
		Invitations?: Array<Invitation>;
		NextToken?: string | null;
	}
	export interface ListInvitationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsOutputFormGroup() {
		return new FormGroup<ListInvitationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An invitation to an AWS account to create a member and join the network. */
	export interface Invitation {
		InvitationId?: string | null;
		CreationDate?: Date | null;
		ExpirationDate?: Date | null;
		Status?: InvitationStatus | null;

		/** A summary of network configuration properties. */
		NetworkSummary?: NetworkSummary;
	}

	/** An invitation to an AWS account to create a member and join the network. */
	export interface InvitationFormProperties {
		InvitationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Status: FormControl<InvitationStatus | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			InvitationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InvitationStatus | null | undefined>(undefined),
		});

	}

	export enum InvitationStatus { PENDING = 0, ACCEPTED = 1, ACCEPTING = 2, REJECTED = 3, EXPIRED = 4 }


	/** A summary of network configuration properties. */
	export interface NetworkSummary {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		Framework?: NetworkFramework | null;
		FrameworkVersion?: string | null;
		Status?: NetworkStatus | null;
		CreationDate?: Date | null;
	}

	/** A summary of network configuration properties. */
	export interface NetworkSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Framework: FormControl<NetworkFramework | null | undefined>,
		FrameworkVersion: FormControl<string | null | undefined>,
		Status: FormControl<NetworkStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateNetworkSummaryFormGroup() {
		return new FormGroup<NetworkSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<NetworkFramework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NetworkStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMembersOutput {
		Members?: Array<MemberSummary>;
		NextToken?: string | null;
	}
	export interface ListMembersOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersOutputFormGroup() {
		return new FormGroup<ListMembersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of configuration properties for a member. */
	export interface MemberSummary {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		Status?: MemberStatus | null;
		CreationDate?: Date | null;
		IsOwned?: boolean | null;
	}

	/** A summary of configuration properties for a member. */
	export interface MemberSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<MemberStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		IsOwned: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberSummaryFormGroup() {
		return new FormGroup<MemberSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MemberStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			IsOwned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListNetworksOutput {
		Networks?: Array<NetworkSummary>;
		NextToken?: string | null;
	}
	export interface ListNetworksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworksOutputFormGroup() {
		return new FormGroup<ListNetworksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNodesOutput {
		Nodes?: Array<NodeSummary>;
		NextToken?: string | null;
	}
	export interface ListNodesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesOutputFormGroup() {
		return new FormGroup<ListNodesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of configuration properties for a peer node. */
	export interface NodeSummary {
		Id?: string | null;
		Status?: NodeStatus | null;
		CreationDate?: Date | null;
		AvailabilityZone?: string | null;
		InstanceType?: string | null;
	}

	/** A summary of configuration properties for a peer node. */
	export interface NodeSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Status: FormControl<NodeStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateNodeSummaryFormGroup() {
		return new FormGroup<NodeSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NodeStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProposalVotesOutput {
		ProposalVotes?: Array<VoteSummary>;
		NextToken?: string | null;
	}
	export interface ListProposalVotesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalVotesOutputFormGroup() {
		return new FormGroup<ListProposalVotesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Properties of an individual vote that a member cast for a proposal.  */
	export interface VoteSummary {
		Vote?: VoteSummaryVote | null;
		MemberName?: string | null;
		MemberId?: string | null;
	}

	/**  Properties of an individual vote that a member cast for a proposal.  */
	export interface VoteSummaryFormProperties {
		Vote: FormControl<VoteSummaryVote | null | undefined>,
		MemberName: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateVoteSummaryFormGroup() {
		return new FormGroup<VoteSummaryFormProperties>({
			Vote: new FormControl<VoteSummaryVote | null | undefined>(undefined),
			MemberName: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoteSummaryVote { YES = 0, NO = 1 }

	export interface ListProposalsOutput {
		Proposals?: Array<ProposalSummary>;
		NextToken?: string | null;
	}
	export interface ListProposalsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalsOutputFormGroup() {
		return new FormGroup<ListProposalsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a proposal. */
	export interface ProposalSummary {
		ProposalId?: string | null;
		Description?: string | null;
		ProposedByMemberId?: string | null;
		ProposedByMemberName?: string | null;
		Status?: ProposalStatus | null;
		CreationDate?: Date | null;
		ExpirationDate?: Date | null;
	}

	/** Properties of a proposal. */
	export interface ProposalSummaryFormProperties {
		ProposalId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProposedByMemberId: FormControl<string | null | undefined>,
		ProposedByMemberName: FormControl<string | null | undefined>,
		Status: FormControl<ProposalStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateProposalSummaryFormGroup() {
		return new FormGroup<ProposalSummaryFormProperties>({
			ProposalId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProposedByMemberId: new FormControl<string | null | undefined>(undefined),
			ProposedByMemberName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProposalStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RejectInvitationOutput {
	}
	export interface RejectInvitationOutputFormProperties {
	}
	export function CreateRejectInvitationOutputFormGroup() {
		return new FormGroup<RejectInvitationOutputFormProperties>({
		});

	}

	export interface IllegalActionException {
	}
	export interface IllegalActionExceptionFormProperties {
	}
	export function CreateIllegalActionExceptionFormGroup() {
		return new FormGroup<IllegalActionExceptionFormProperties>({
		});

	}

	export interface UpdateMemberOutput {
	}
	export interface UpdateMemberOutputFormProperties {
	}
	export function CreateUpdateMemberOutputFormGroup() {
		return new FormGroup<UpdateMemberOutputFormProperties>({
		});

	}

	export interface UpdateNodeOutput {
	}
	export interface UpdateNodeOutputFormProperties {
	}
	export function CreateUpdateNodeOutputFormGroup() {
		return new FormGroup<UpdateNodeOutputFormProperties>({
		});

	}

	export interface VoteOnProposalOutput {
	}
	export interface VoteOnProposalOutputFormProperties {
	}
	export function CreateVoteOnProposalOutputFormGroup() {
		return new FormGroup<VoteOnProposalOutputFormProperties>({
		});

	}

	export enum ThresholdComparator { GREATER_THAN = 0, GREATER_THAN_OR_EQUAL_TO = 1 }


	/** Configuration properties of the member. */
	export interface MemberConfiguration {
		Name: string;
		Description?: string | null;

		/**
		 * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
		 * Required
		 */
		FrameworkConfiguration: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}

	/** Configuration properties of the member. */
	export interface MemberConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateMemberConfigurationFormGroup() {
		return new FormGroup<MemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateMemberInputFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberInputFormGroup() {
		return new FormGroup<CreateMemberInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Framework { HYPERLEDGER_FABRIC = 0 }


	/**  Configuration properties relevant to the network for the blockchain framework that the network uses.  */
	export interface NetworkFrameworkConfiguration {

		/** Hyperledger Fabric configuration properties for the network. */
		Fabric?: NetworkFabricConfiguration;
	}

	/**  Configuration properties relevant to the network for the blockchain framework that the network uses.  */
	export interface NetworkFrameworkConfigurationFormProperties {
	}
	export function CreateNetworkFrameworkConfigurationFormGroup() {
		return new FormGroup<NetworkFrameworkConfigurationFormProperties>({
		});

	}

	export interface CreateNetworkInput {
		ClientRequestToken: string;
		Name: string;
		Description?: string | null;
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
	export interface CreateNetworkInputFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Framework: FormControl<NetworkFramework | null | undefined>,
		FrameworkVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkInputFormGroup() {
		return new FormGroup<CreateNetworkInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<NetworkFramework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration properties of a peer node. */
	export interface NodeConfiguration {
		InstanceType: string;
		AvailabilityZone: string;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}

	/** Configuration properties of a peer node. */
	export interface NodeConfigurationFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateNodeConfigurationFormGroup() {
		return new FormGroup<NodeConfigurationFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodeInput {
		ClientRequestToken: string;

		/**
		 * Configuration properties of a peer node.
		 * Required
		 */
		NodeConfiguration: NodeConfiguration;
	}
	export interface CreateNodeInputFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeInputFormGroup() {
		return new FormGroup<CreateNodeInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProposalInput {
		ClientRequestToken: string;
		MemberId: string;

		/**
		 * The actions to carry out if a proposal is <code>APPROVED</code>.
		 * Required
		 */
		Actions: ProposalActions;
		Description?: string | null;
	}
	export interface CreateProposalInputFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProposalInputFormGroup() {
		return new FormGroup<CreateProposalInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMemberInput {
	}
	export interface DeleteMemberInputFormProperties {
	}
	export function CreateDeleteMemberInputFormGroup() {
		return new FormGroup<DeleteMemberInputFormProperties>({
		});

	}

	export interface DeleteNodeInput {
	}
	export interface DeleteNodeInputFormProperties {
	}
	export function CreateDeleteNodeInputFormGroup() {
		return new FormGroup<DeleteNodeInputFormProperties>({
		});

	}

	export enum Edition { STARTER = 0, STANDARD = 1 }

	export interface GetMemberInput {
	}
	export interface GetMemberInputFormProperties {
	}
	export function CreateGetMemberInputFormGroup() {
		return new FormGroup<GetMemberInputFormProperties>({
		});

	}

	export interface GetNetworkInput {
	}
	export interface GetNetworkInputFormProperties {
	}
	export function CreateGetNetworkInputFormGroup() {
		return new FormGroup<GetNetworkInputFormProperties>({
		});

	}

	export interface GetNodeInput {
	}
	export interface GetNodeInputFormProperties {
	}
	export function CreateGetNodeInputFormGroup() {
		return new FormGroup<GetNodeInputFormProperties>({
		});

	}

	export interface GetProposalInput {
	}
	export interface GetProposalInputFormProperties {
	}
	export function CreateGetProposalInputFormGroup() {
		return new FormGroup<GetProposalInputFormProperties>({
		});

	}

	export interface ListInvitationsInput {
	}
	export interface ListInvitationsInputFormProperties {
	}
	export function CreateListInvitationsInputFormGroup() {
		return new FormGroup<ListInvitationsInputFormProperties>({
		});

	}

	export interface ListMembersInput {
	}
	export interface ListMembersInputFormProperties {
	}
	export function CreateListMembersInputFormGroup() {
		return new FormGroup<ListMembersInputFormProperties>({
		});

	}

	export interface ListNetworksInput {
	}
	export interface ListNetworksInputFormProperties {
	}
	export function CreateListNetworksInputFormGroup() {
		return new FormGroup<ListNetworksInputFormProperties>({
		});

	}

	export interface ListNodesInput {
	}
	export interface ListNodesInputFormProperties {
	}
	export function CreateListNodesInputFormGroup() {
		return new FormGroup<ListNodesInputFormProperties>({
		});

	}

	export interface ListProposalVotesInput {
	}
	export interface ListProposalVotesInputFormProperties {
	}
	export function CreateListProposalVotesInputFormGroup() {
		return new FormGroup<ListProposalVotesInputFormProperties>({
		});

	}

	export interface ListProposalsInput {
	}
	export interface ListProposalsInputFormProperties {
	}
	export function CreateListProposalsInputFormGroup() {
		return new FormGroup<ListProposalsInputFormProperties>({
		});

	}

	export interface RejectInvitationInput {
	}
	export interface RejectInvitationInputFormProperties {
	}
	export function CreateRejectInvitationInputFormGroup() {
		return new FormGroup<RejectInvitationInputFormProperties>({
		});

	}

	export interface UpdateMemberInput {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}
	export interface UpdateMemberInputFormProperties {
	}
	export function CreateUpdateMemberInputFormGroup() {
		return new FormGroup<UpdateMemberInputFormProperties>({
		});

	}

	export interface UpdateNodeInput {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}
	export interface UpdateNodeInputFormProperties {
	}
	export function CreateUpdateNodeInputFormGroup() {
		return new FormGroup<UpdateNodeInputFormProperties>({
		});

	}

	export enum VoteValue { YES = 0, NO = 1 }

	export interface VoteOnProposalInput {
		VoterMemberId: string;
		Vote: VoteSummaryVote;
	}
	export interface VoteOnProposalInputFormProperties {
		VoterMemberId: FormControl<string | null | undefined>,
		Vote: FormControl<VoteSummaryVote | null | undefined>,
	}
	export function CreateVoteOnProposalInputFormGroup() {
		return new FormGroup<VoteOnProposalInputFormProperties>({
			VoterMemberId: new FormControl<string | null | undefined>(undefined),
			Vote: new FormControl<VoteSummaryVote | null | undefined>(undefined),
		});

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
		ListMembers(networkId: string, name: string | null | undefined, status: MemberStatus | null | undefined, isOwned: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMembersOutput> {
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
		ListNetworks(name: string | null | undefined, framework: NetworkFramework | null | undefined, status: NetworkStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNetworksOutput> {
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
		ListNodes(networkId: string, memberId: string, status: NodeStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNodesOutput> {
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
		ListProposals(networkId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProposalsOutput> {
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
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsOutput> {
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
		ListProposalVotes(networkId: string, proposalId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProposalVotesOutput> {
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
	export interface CreateMemberPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the invitation that is sent to the member to join the network.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyFormGroup() {
		return new FormGroup<CreateMemberPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			InvitationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMemberPostBodyMemberConfiguration {
		Name?: string | null;
		Description?: string | null;

		/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkConfiguration?: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}
	export interface CreateMemberPostBodyMemberConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyMemberConfigurationFormGroup() {
		return new FormGroup<CreateMemberPostBodyMemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

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
		Description?: string | null;

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
	export interface CreateNetworkPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The name of the network.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: .*\S.*
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * An optional description for the network.
		 * Max length: 128
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The blockchain framework that the network uses.
		 * Required
		 */
		Framework: FormControl<NetworkFramework | null | undefined>,

		/**
		 * The version of the blockchain framework that the network uses.
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		FrameworkVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkPostBodyFormGroup() {
		return new FormGroup<CreateNetworkPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<NetworkFramework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkPostBodyFrameworkConfiguration {

		/** Hyperledger Fabric configuration properties for the network. */
		Fabric?: NetworkFabricConfiguration;
	}
	export interface CreateNetworkPostBodyFrameworkConfigurationFormProperties {
	}
	export function CreateCreateNetworkPostBodyFrameworkConfigurationFormGroup() {
		return new FormGroup<CreateNetworkPostBodyFrameworkConfigurationFormProperties>({
		});

	}

	export interface CreateNetworkPostBodyVotingPolicy {

		/** A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created. */
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}
	export interface CreateNetworkPostBodyVotingPolicyFormProperties {
	}
	export function CreateCreateNetworkPostBodyVotingPolicyFormGroup() {
		return new FormGroup<CreateNetworkPostBodyVotingPolicyFormProperties>({
		});

	}

	export interface CreateNetworkPostBodyMemberConfiguration {
		Name?: string | null;
		Description?: string | null;

		/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
		FrameworkConfiguration?: MemberFrameworkConfiguration;

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}
	export interface CreateNetworkPostBodyMemberConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkPostBodyMemberConfigurationFormGroup() {
		return new FormGroup<CreateNetworkPostBodyMemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateNodePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodePostBodyFormGroup() {
		return new FormGroup<CreateNodePostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodePostBodyNodeConfiguration {
		InstanceType?: string | null;
		AvailabilityZone?: string | null;

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}
	export interface CreateNodePostBodyNodeConfigurationFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodePostBodyNodeConfigurationFormGroup() {
		return new FormGroup<CreateNodePostBodyNodeConfigurationFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

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
		Description?: string | null;
	}
	export interface CreateProposalPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		MemberId: FormControl<string | null | undefined>,

		/**
		 * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
		 * Max length: 128
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProposalPostBodyFormGroup() {
		return new FormGroup<CreateProposalPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProposalPostBodyActions {
		Invitations?: Array<InviteAction>;
		Removals?: Array<RemoveAction>;
	}
	export interface CreateProposalPostBodyActionsFormProperties {
	}
	export function CreateCreateProposalPostBodyActionsFormGroup() {
		return new FormGroup<CreateProposalPostBodyActionsFormProperties>({
		});

	}

	export interface UpdateMemberPatchBody {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
		LogPublishingConfiguration?: UpdateMemberPatchBodyLogPublishingConfiguration;
	}
	export interface UpdateMemberPatchBodyFormProperties {
	}
	export function CreateUpdateMemberPatchBodyFormGroup() {
		return new FormGroup<UpdateMemberPatchBodyFormProperties>({
		});

	}

	export interface UpdateMemberPatchBodyLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework. */
		Fabric?: MemberFabricLogPublishingConfiguration;
	}
	export interface UpdateMemberPatchBodyLogPublishingConfigurationFormProperties {
	}
	export function CreateUpdateMemberPatchBodyLogPublishingConfigurationFormGroup() {
		return new FormGroup<UpdateMemberPatchBodyLogPublishingConfigurationFormProperties>({
		});

	}

	export interface UpdateNodePatchBody {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		LogPublishingConfiguration?: UpdateNodePatchBodyLogPublishingConfiguration;
	}
	export interface UpdateNodePatchBodyFormProperties {
	}
	export function CreateUpdateNodePatchBodyFormGroup() {
		return new FormGroup<UpdateNodePatchBodyFormProperties>({
		});

	}

	export interface UpdateNodePatchBodyLogPublishingConfiguration {

		/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
		Fabric?: NodeFabricLogPublishingConfiguration;
	}
	export interface UpdateNodePatchBodyLogPublishingConfigurationFormProperties {
	}
	export function CreateUpdateNodePatchBodyLogPublishingConfigurationFormGroup() {
		return new FormGroup<UpdateNodePatchBodyLogPublishingConfigurationFormProperties>({
		});

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
	export interface VoteOnProposalPostBodyFormProperties {

		/**
		 * The unique identifier of the member casting the vote.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		VoterMemberId: FormControl<string | null | undefined>,

		/**
		 * The value of the vote.
		 * Required
		 */
		Vote: FormControl<VoteSummaryVote | null | undefined>,
	}
	export function CreateVoteOnProposalPostBodyFormGroup() {
		return new FormGroup<VoteOnProposalPostBodyFormProperties>({
			VoterMemberId: new FormControl<string | null | undefined>(undefined),
			Vote: new FormControl<VoteSummaryVote | null | undefined>(undefined),
		});

	}

}

