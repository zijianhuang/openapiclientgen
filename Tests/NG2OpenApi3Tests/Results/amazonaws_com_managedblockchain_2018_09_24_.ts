import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAccessorOutput {
		AccessorId?: string;
		BillingToken?: string;
	}
	export interface CreateAccessorOutputFormProperties {
		AccessorId: FormControl<string | null | undefined>,
		BillingToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessorOutputFormGroup() {
		return new FormGroup<CreateAccessorOutputFormProperties>({
			AccessorId: new FormControl<string | null | undefined>(undefined),
			BillingToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface CreateMemberOutput {
		MemberId?: string;
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
		Fabric?: MemberFabricConfiguration;
	}

	/** Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkConfigurationFormProperties {
	}
	export function CreateMemberFrameworkConfigurationFormGroup() {
		return new FormGroup<MemberFrameworkConfigurationFormProperties>({
		});

	}


	/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework. */
	export interface MemberFabricConfiguration {

		/** Required */
		AdminUsername: string;

		/** Required */
		AdminPassword: string;
	}

	/** Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework. */
	export interface MemberFabricConfigurationFormProperties {

		/** Required */
		AdminUsername: FormControl<string | null | undefined>,

		/** Required */
		AdminPassword: FormControl<string | null | undefined>,
	}
	export function CreateMemberFabricConfigurationFormGroup() {
		return new FormGroup<MemberFabricConfigurationFormProperties>({
			AdminUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration properties for logging events associated with a member of a Managed Blockchain network. */
	export interface MemberLogPublishingConfiguration {
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

	export interface InputTagMap {
	}
	export interface InputTagMapFormProperties {
	}
	export function CreateInputTagMapFormGroup() {
		return new FormGroup<InputTagMapFormProperties>({
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

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
		});

	}

	export interface CreateNetworkOutput {
		NetworkId?: string;
		MemberId?: string;
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

		/** Required */
		Edition: Edition;
	}

	/** Hyperledger Fabric configuration properties for the network. */
	export interface NetworkFabricConfigurationFormProperties {

		/** Required */
		Edition: FormControl<Edition | null | undefined>,
	}
	export function CreateNetworkFabricConfigurationFormGroup() {
		return new FormGroup<NetworkFabricConfigurationFormProperties>({
			Edition: new FormControl<Edition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Edition { STARTER = 'STARTER', STANDARD = 'STANDARD' }


	/** <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ApprovalThresholdPolicy {
		ThresholdPercentage?: number | null;
		ProposalDurationInHours?: number | null;
		ThresholdComparator?: ThresholdComparator;
	}

	/** <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ApprovalThresholdPolicyFormProperties {
		ThresholdPercentage: FormControl<number | null | undefined>,
		ProposalDurationInHours: FormControl<number | null | undefined>,
		ThresholdComparator: FormControl<ThresholdComparator | null | undefined>,
	}
	export function CreateApprovalThresholdPolicyFormGroup() {
		return new FormGroup<ApprovalThresholdPolicyFormProperties>({
			ThresholdPercentage: new FormControl<number | null | undefined>(undefined),
			ProposalDurationInHours: new FormControl<number | null | undefined>(undefined),
			ThresholdComparator: new FormControl<ThresholdComparator | null | undefined>(undefined),
		});

	}

	export enum ThresholdComparator { GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO' }

	export interface CreateNodeOutput {
		NodeId?: string;
	}
	export interface CreateNodeOutputFormProperties {
		NodeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeOutputFormGroup() {
		return new FormGroup<CreateNodeOutputFormProperties>({
			NodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain. */
	export interface NodeLogPublishingConfiguration {
		Fabric?: NodeFabricLogPublishingConfiguration;
	}

	/** Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain. */
	export interface NodeLogPublishingConfigurationFormProperties {
	}
	export function CreateNodeLogPublishingConfigurationFormGroup() {
		return new FormGroup<NodeLogPublishingConfigurationFormProperties>({
		});

	}


	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeFabricLogPublishingConfiguration {
		ChaincodeLogs?: LogConfigurations;
		PeerLogs?: LogConfigurations;
	}

	/** Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network. */
	export interface NodeFabricLogPublishingConfigurationFormProperties {
	}
	export function CreateNodeFabricLogPublishingConfigurationFormGroup() {
		return new FormGroup<NodeFabricLogPublishingConfigurationFormProperties>({
		});

	}

	export enum StateDBType { LevelDB = 'LevelDB', CouchDB = 'CouchDB' }

	export interface CreateProposalOutput {
		ProposalId?: string;
	}
	export interface CreateProposalOutputFormProperties {
		ProposalId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProposalOutputFormGroup() {
		return new FormGroup<CreateProposalOutputFormProperties>({
			ProposalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface InviteAction {

		/** Required */
		Principal: string;
	}

	/** <p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface InviteActionFormProperties {

		/** Required */
		Principal: FormControl<string | null | undefined>,
	}
	export function CreateInviteActionFormGroup() {
		return new FormGroup<InviteActionFormProperties>({
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface RemoveAction {

		/** Required */
		MemberId: string;
	}

	/** <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface RemoveActionFormProperties {

		/** Required */
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveActionFormGroup() {
		return new FormGroup<RemoveActionFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccessorOutput {
	}
	export interface DeleteAccessorOutputFormProperties {
	}
	export function CreateDeleteAccessorOutputFormGroup() {
		return new FormGroup<DeleteAccessorOutputFormProperties>({
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

	export interface GetAccessorOutput {
		Accessor?: Accessor;
	}
	export interface GetAccessorOutputFormProperties {
	}
	export function CreateGetAccessorOutputFormGroup() {
		return new FormGroup<GetAccessorOutputFormProperties>({
		});

	}


	/** The properties of the Accessor. */
	export interface Accessor {
		Id?: string;
		Type?: AccessorType;
		BillingToken?: string;
		Status?: AccessorStatus;
		CreationDate?: Date;
		Arn?: string;
		Tags?: OutputTagMap;
	}

	/** The properties of the Accessor. */
	export interface AccessorFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<AccessorType | null | undefined>,
		BillingToken: FormControl<string | null | undefined>,
		Status: FormControl<AccessorStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAccessorFormGroup() {
		return new FormGroup<AccessorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AccessorType | null | undefined>(undefined),
			BillingToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessorStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessorType { BILLING_TOKEN = 'BILLING_TOKEN' }

	export enum AccessorStatus { AVAILABLE = 'AVAILABLE', PENDING_DELETION = 'PENDING_DELETION', DELETED = 'DELETED' }

	export interface OutputTagMap {
	}
	export interface OutputTagMapFormProperties {
	}
	export function CreateOutputTagMapFormGroup() {
		return new FormGroup<OutputTagMapFormProperties>({
		});

	}

	export interface GetMemberOutput {
		Member?: Member;
	}
	export interface GetMemberOutputFormProperties {
	}
	export function CreateGetMemberOutputFormGroup() {
		return new FormGroup<GetMemberOutputFormProperties>({
		});

	}


	/** <p>Member configuration properties.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface Member {
		NetworkId?: string;
		Id?: string;
		Name?: string;
		Description?: string;
		FrameworkAttributes?: MemberFrameworkAttributes;
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Status?: MemberStatus;
		CreationDate?: Date;
		Tags?: OutputTagMap;
		Arn?: string;
		KmsKeyArn?: string;
	}

	/** <p>Member configuration properties.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface MemberFormProperties {
		NetworkId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<MemberStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			NetworkId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MemberStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses. */
	export interface MemberFrameworkAttributes {
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
		AdminUsername?: string;
		CaEndpoint?: string;
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

	export enum MemberStatus { CREATING = 'CREATING', AVAILABLE = 'AVAILABLE', CREATE_FAILED = 'CREATE_FAILED', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', INACCESSIBLE_ENCRYPTION_KEY = 'INACCESSIBLE_ENCRYPTION_KEY' }

	export interface GetNetworkOutput {
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
		Id?: string;
		Name?: string;
		Description?: string;
		Framework?: Framework;
		FrameworkVersion?: string;
		FrameworkAttributes?: NetworkFrameworkAttributes;
		VpcEndpointServiceName?: string;
		VotingPolicy?: VotingPolicy;
		Status?: NetworkStatus;
		CreationDate?: Date;
		Tags?: OutputTagMap;
		Arn?: string;
	}

	/** Network configuration properties. */
	export interface NetworkFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Framework: FormControl<Framework | null | undefined>,
		FrameworkVersion: FormControl<string | null | undefined>,
		VpcEndpointServiceName: FormControl<string | null | undefined>,
		Status: FormControl<NetworkStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<Framework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
			VpcEndpointServiceName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NetworkStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Framework { HYPERLEDGER_FABRIC = 'HYPERLEDGER_FABRIC', ETHEREUM = 'ETHEREUM' }


	/** Attributes relevant to the network for the blockchain framework that the network uses. */
	export interface NetworkFrameworkAttributes {
		Fabric?: NetworkFabricAttributes;
		Ethereum?: NetworkEthereumAttributes;
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
		OrderingServiceEndpoint?: string;
		Edition?: Edition;
	}

	/** Attributes of Hyperledger Fabric for a network. */
	export interface NetworkFabricAttributesFormProperties {
		OrderingServiceEndpoint: FormControl<string | null | undefined>,
		Edition: FormControl<Edition | null | undefined>,
	}
	export function CreateNetworkFabricAttributesFormGroup() {
		return new FormGroup<NetworkFabricAttributesFormProperties>({
			OrderingServiceEndpoint: new FormControl<string | null | undefined>(undefined),
			Edition: new FormControl<Edition | null | undefined>(undefined),
		});

	}


	/** Attributes of Ethereum for a network.  */
	export interface NetworkEthereumAttributes {
		ChainId?: string;
	}

	/** Attributes of Ethereum for a network.  */
	export interface NetworkEthereumAttributesFormProperties {
		ChainId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkEthereumAttributesFormGroup() {
		return new FormGroup<NetworkEthereumAttributesFormProperties>({
			ChainId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface VotingPolicy {
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}

	/** <p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface VotingPolicyFormProperties {
	}
	export function CreateVotingPolicyFormGroup() {
		return new FormGroup<VotingPolicyFormProperties>({
		});

	}

	export enum NetworkStatus { CREATING = 'CREATING', AVAILABLE = 'AVAILABLE', CREATE_FAILED = 'CREATE_FAILED', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface GetNodeOutput {
		Node?: Node;
	}
	export interface GetNodeOutputFormProperties {
	}
	export function CreateGetNodeOutputFormGroup() {
		return new FormGroup<GetNodeOutputFormProperties>({
		});

	}


	/** Configuration properties of a node. */
	export interface Node {
		NetworkId?: string;
		MemberId?: string;
		Id?: string;
		InstanceType?: string;
		AvailabilityZone?: string;
		FrameworkAttributes?: NodeFrameworkAttributes;
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
		StateDB?: StateDBType;
		Status?: NodeStatus;
		CreationDate?: Date;
		Tags?: OutputTagMap;
		Arn?: string;
		KmsKeyArn?: string;
	}

	/** Configuration properties of a node. */
	export interface NodeFormProperties {
		NetworkId: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		StateDB: FormControl<StateDBType | null | undefined>,
		Status: FormControl<NodeStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			NetworkId: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			StateDB: new FormControl<StateDBType | null | undefined>(undefined),
			Status: new FormControl<NodeStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses. */
	export interface NodeFrameworkAttributes {
		Fabric?: NodeFabricAttributes;
		Ethereum?: NodeEthereumAttributes;
	}

	/** Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses. */
	export interface NodeFrameworkAttributesFormProperties {
	}
	export function CreateNodeFrameworkAttributesFormGroup() {
		return new FormGroup<NodeFrameworkAttributesFormProperties>({
		});

	}


	/** Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain. */
	export interface NodeFabricAttributes {
		PeerEndpoint?: string;
		PeerEventEndpoint?: string;
	}

	/** Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain. */
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


	/** Attributes of an Ethereum node. */
	export interface NodeEthereumAttributes {
		HttpEndpoint?: string;
		WebSocketEndpoint?: string;
	}

	/** Attributes of an Ethereum node. */
	export interface NodeEthereumAttributesFormProperties {
		HttpEndpoint: FormControl<string | null | undefined>,
		WebSocketEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateNodeEthereumAttributesFormGroup() {
		return new FormGroup<NodeEthereumAttributesFormProperties>({
			HttpEndpoint: new FormControl<string | null | undefined>(undefined),
			WebSocketEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeStatus { CREATING = 'CREATING', AVAILABLE = 'AVAILABLE', UNHEALTHY = 'UNHEALTHY', CREATE_FAILED = 'CREATE_FAILED', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', FAILED = 'FAILED', INACCESSIBLE_ENCRYPTION_KEY = 'INACCESSIBLE_ENCRYPTION_KEY' }

	export interface GetProposalOutput {
		Proposal?: Proposal;
	}
	export interface GetProposalOutputFormProperties {
	}
	export function CreateGetProposalOutputFormGroup() {
		return new FormGroup<GetProposalOutputFormProperties>({
		});

	}


	/** <p>Properties of a proposal on a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface Proposal {
		ProposalId?: string;
		NetworkId?: string;
		Description?: string;
		Actions?: ProposalActions;
		ProposedByMemberId?: string;
		ProposedByMemberName?: string;
		Status?: ProposalStatus;
		CreationDate?: Date;
		ExpirationDate?: Date;
		YesVoteCount?: number | null;
		NoVoteCount?: number | null;
		OutstandingVoteCount?: number | null;
		Tags?: OutputTagMap;
		Arn?: string;
	}

	/** <p>Properties of a proposal on a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p> */
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
		Arn: FormControl<string | null | undefined>,
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
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ProposalActions {
		Invitations?: Array<InviteAction>;
		Removals?: Array<RemoveAction>;
	}

	/** <p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ProposalActionsFormProperties {
	}
	export function CreateProposalActionsFormGroup() {
		return new FormGroup<ProposalActionsFormProperties>({
		});

	}

	export enum ProposalStatus { IN_PROGRESS = 'IN_PROGRESS', APPROVED = 'APPROVED', REJECTED = 'REJECTED', EXPIRED = 'EXPIRED', ACTION_FAILED = 'ACTION_FAILED' }

	export interface ListAccessorsOutput {
		Accessors?: Array<AccessorSummary>;
		NextToken?: string;
	}
	export interface ListAccessorsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessorsOutputFormGroup() {
		return new FormGroup<ListAccessorsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of accessor properties. */
	export interface AccessorSummary {
		Id?: string;
		Type?: AccessorType;
		Status?: AccessorStatus;
		CreationDate?: Date;
		Arn?: string;
	}

	/** A summary of accessor properties. */
	export interface AccessorSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<AccessorType | null | undefined>,
		Status: FormControl<AccessorStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAccessorSummaryFormGroup() {
		return new FormGroup<AccessorSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AccessorType | null | undefined>(undefined),
			Status: new FormControl<AccessorStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsOutput {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}
	export interface ListInvitationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsOutputFormGroup() {
		return new FormGroup<ListInvitationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An invitation to an Amazon Web Services account to create a member and join the network.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface Invitation {
		InvitationId?: string;
		CreationDate?: Date;
		ExpirationDate?: Date;
		Status?: InvitationStatus;

		/** A summary of network configuration properties. */
		NetworkSummary?: NetworkSummary;
		Arn?: string;
	}

	/** <p>An invitation to an Amazon Web Services account to create a member and join the network.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface InvitationFormProperties {
		InvitationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Status: FormControl<InvitationStatus | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			InvitationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InvitationStatus | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvitationStatus { PENDING = 'PENDING', ACCEPTED = 'ACCEPTED', ACCEPTING = 'ACCEPTING', REJECTED = 'REJECTED', EXPIRED = 'EXPIRED' }


	/** A summary of network configuration properties. */
	export interface NetworkSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		Framework?: Framework;
		FrameworkVersion?: string;
		Status?: NetworkStatus;
		CreationDate?: Date;
		Arn?: string;
	}

	/** A summary of network configuration properties. */
	export interface NetworkSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Framework: FormControl<Framework | null | undefined>,
		FrameworkVersion: FormControl<string | null | undefined>,
		Status: FormControl<NetworkStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSummaryFormGroup() {
		return new FormGroup<NetworkSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<Framework | null | undefined>(undefined),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NetworkStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersOutput {
		Members?: Array<MemberSummary>;
		NextToken?: string;
	}
	export interface ListMembersOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersOutputFormGroup() {
		return new FormGroup<ListMembersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A summary of configuration properties for a member.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface MemberSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		Status?: MemberStatus;
		CreationDate?: Date;
		IsOwned?: boolean | null;
		Arn?: string;
	}

	/** <p>A summary of configuration properties for a member.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface MemberSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<MemberStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		IsOwned: FormControl<boolean | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateMemberSummaryFormGroup() {
		return new FormGroup<MemberSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MemberStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			IsOwned: new FormControl<boolean | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworksOutput {
		Networks?: Array<NetworkSummary>;
		NextToken?: string;
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
		NextToken?: string;
	}
	export interface ListNodesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesOutputFormGroup() {
		return new FormGroup<ListNodesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of configuration properties for a node. */
	export interface NodeSummary {
		Id?: string;
		Status?: NodeStatus;
		CreationDate?: Date;
		AvailabilityZone?: string;
		InstanceType?: string;
		Arn?: string;
	}

	/** A summary of configuration properties for a node. */
	export interface NodeSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Status: FormControl<NodeStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateNodeSummaryFormGroup() {
		return new FormGroup<NodeSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NodeStatus | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProposalVotesOutput {
		ProposalVotes?: Array<VoteSummary>;
		NextToken?: string;
	}
	export interface ListProposalVotesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalVotesOutputFormGroup() {
		return new FormGroup<ListProposalVotesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Properties of an individual vote that a member cast for a proposal. </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface VoteSummary {
		Vote?: VoteValue;
		MemberName?: string;
		MemberId?: string;
	}

	/** <p> Properties of an individual vote that a member cast for a proposal. </p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface VoteSummaryFormProperties {
		Vote: FormControl<VoteValue | null | undefined>,
		MemberName: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateVoteSummaryFormGroup() {
		return new FormGroup<VoteSummaryFormProperties>({
			Vote: new FormControl<VoteValue | null | undefined>(undefined),
			MemberName: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoteValue { YES = 'YES', NO = 'NO' }

	export interface ListProposalsOutput {
		Proposals?: Array<ProposalSummary>;
		NextToken?: string;
	}
	export interface ListProposalsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalsOutputFormGroup() {
		return new FormGroup<ListProposalsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Properties of a proposal.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ProposalSummary {
		ProposalId?: string;
		Description?: string;
		ProposedByMemberId?: string;
		ProposedByMemberName?: string;
		Status?: ProposalStatus;
		CreationDate?: Date;
		ExpirationDate?: Date;
		Arn?: string;
	}

	/** <p>Properties of a proposal.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface ProposalSummaryFormProperties {
		ProposalId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProposedByMemberId: FormControl<string | null | undefined>,
		ProposedByMemberName: FormControl<string | null | undefined>,
		Status: FormControl<ProposalStatus | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Arn: FormControl<string | null | undefined>,
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
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: OutputTagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface CreateAccessorInput {

		/** Required */
		ClientRequestToken: string;

		/** Required */
		AccessorType: AccessorType;
		Tags?: InputTagMap;
	}
	export interface CreateAccessorInputFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		AccessorType: FormControl<AccessorType | null | undefined>,
	}
	export function CreateCreateAccessorInputFormGroup() {
		return new FormGroup<CreateAccessorInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessorType: new FormControl<AccessorType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface MemberConfiguration {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		FrameworkConfiguration: MemberFrameworkConfiguration;
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Tags?: InputTagMap;
		KmsKeyArn?: string;
	}

	/** <p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p> */
	export interface MemberConfigurationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateMemberConfigurationFormGroup() {
		return new FormGroup<MemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMemberInput {

		/** Required */
		ClientRequestToken: string;

		/** Required */
		InvitationId: string;

		/** Required */
		MemberConfiguration: MemberConfiguration;
	}
	export interface CreateMemberInputFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberInputFormGroup() {
		return new FormGroup<CreateMemberInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Configuration properties relevant to the network for the blockchain framework that the network uses.  */
	export interface NetworkFrameworkConfiguration {
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

		/** Required */
		ClientRequestToken: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Framework: Framework;

		/** Required */
		FrameworkVersion: string;
		FrameworkConfiguration?: NetworkFrameworkConfiguration;

		/** Required */
		VotingPolicy: VotingPolicy;

		/** Required */
		MemberConfiguration: MemberConfiguration;
		Tags?: InputTagMap;
	}
	export interface CreateNetworkInputFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Framework: FormControl<Framework | null | undefined>,

		/** Required */
		FrameworkVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkInputFormGroup() {
		return new FormGroup<CreateNetworkInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Framework: new FormControl<Framework | null | undefined>(undefined, [Validators.required]),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration properties of a node. */
	export interface NodeConfiguration {

		/** Required */
		InstanceType: string;
		AvailabilityZone?: string;
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
		StateDB?: StateDBType;
	}

	/** Configuration properties of a node. */
	export interface NodeConfigurationFormProperties {

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		StateDB: FormControl<StateDBType | null | undefined>,
	}
	export function CreateNodeConfigurationFormGroup() {
		return new FormGroup<NodeConfigurationFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			StateDB: new FormControl<StateDBType | null | undefined>(undefined),
		});

	}

	export interface CreateNodeInput {

		/** Required */
		ClientRequestToken: string;
		MemberId?: string;

		/** Required */
		NodeConfiguration: NodeConfiguration;
		Tags?: InputTagMap;
	}
	export interface CreateNodeInputFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeInputFormGroup() {
		return new FormGroup<CreateNodeInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProposalInput {

		/** Required */
		ClientRequestToken: string;

		/** Required */
		MemberId: string;

		/** Required */
		Actions: ProposalActions;
		Description?: string;
		Tags?: InputTagMap;
	}
	export interface CreateProposalInputFormProperties {

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		MemberId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateProposalInputFormGroup() {
		return new FormGroup<CreateProposalInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessorInput {
	}
	export interface DeleteAccessorInputFormProperties {
	}
	export function CreateDeleteAccessorInputFormGroup() {
		return new FormGroup<DeleteAccessorInputFormProperties>({
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

	export interface GetAccessorInput {
	}
	export interface GetAccessorInputFormProperties {
	}
	export function CreateGetAccessorInputFormGroup() {
		return new FormGroup<GetAccessorInputFormProperties>({
		});

	}

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

	export interface ListAccessorsInput {
	}
	export interface ListAccessorsInputFormProperties {
	}
	export function CreateListAccessorsInputFormGroup() {
		return new FormGroup<ListAccessorsInputFormProperties>({
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

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
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

	export interface TagResourceRequest {

		/** Required */
		Tags: InputTagMap;
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

	export interface UpdateMemberInput {
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
	}
	export interface UpdateMemberInputFormProperties {
	}
	export function CreateUpdateMemberInputFormGroup() {
		return new FormGroup<UpdateMemberInputFormProperties>({
		});

	}

	export interface UpdateNodeInput {
		MemberId?: string;
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
	}
	export interface UpdateNodeInputFormProperties {
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodeInputFormGroup() {
		return new FormGroup<UpdateNodeInputFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VoteOnProposalInput {

		/** Required */
		VoterMemberId: string;

		/** Required */
		Vote: VoteValue;
	}
	export interface VoteOnProposalInputFormProperties {

		/** Required */
		VoterMemberId: FormControl<string | null | undefined>,

		/** Required */
		Vote: FormControl<VoteValue | null | undefined>,
	}
	export function CreateVoteOnProposalInputFormGroup() {
		return new FormGroup<VoteOnProposalInputFormProperties>({
			VoterMemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Vote: new FormControl<VoteValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor contains information required for token based access to your Ethereum nodes.
		 * Post accessors
		 * @return {CreateAccessorOutput} Success
		 */
		CreateAccessor(requestBody: CreateAccessorPostBody): Observable<CreateAccessorOutput> {
			return this.http.post<CreateAccessorOutput>(this.baseUri + 'accessors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the accessors and their properties. Accessor objects are containers that have the information required for token based access to your Ethereum nodes.
		 * Get accessors
		 * @param {number} maxResults  The maximum number of accessors to list.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken  The pagination token that indicates the next set of results to retrieve. 
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccessorsOutput} Success
		 */
		ListAccessors(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAccessorsOutput> {
			return this.http.get<ListAccessorsOutput>(this.baseUri + 'accessors?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a member within a Managed Blockchain network.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Post networks/{networkId}/members
		 * @param {string} networkId The unique identifier of the network in which the member is created.
		 *     Min length: 1    Max length: 32
		 * @return {CreateMemberOutput} Success
		 */
		CreateMember(networkId: string, requestBody: CreateMemberPostBody): Observable<CreateMemberOutput> {
			return this.http.post<CreateMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the members in a network and properties of their configurations.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get networks/{networkId}/members
		 * @param {string} networkId The unique identifier of the network for which to list members.
		 *     Min length: 1    Max length: 32
		 * @param {string} name The optional name of the member to list.
		 * @param {MemberStatus} status An optional status specifier. If provided, only members currently in this status are listed.
		 * @param {boolean} isOwned An optional Boolean value. If provided, the request is limited either to members that the current Amazon Web Services account owns (<code>true</code>) or that other Amazon Web Services accountsn own (<code>false</code>). If omitted, all members are listed.
		 * @param {number} maxResults The maximum number of members to return in the request.
		 *     Minimum: 1    Maximum: 20
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersOutput} Success
		 */
		ListMembers(networkId: string, name: string | null | undefined, status: MemberStatus | null | undefined, isOwned: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMembersOutput> {
			return this.http.get<ListMembersOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members&name=' + (name == null ? '' : encodeURIComponent(name)) + '&status=' + status + '&isOwned=' + isOwned + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Post networks
		 * @return {CreateNetworkOutput} Success
		 */
		CreateNetwork(requestBody: CreateNetworkPostBody): Observable<CreateNetworkOutput> {
			return this.http.post<CreateNetworkOutput>(this.baseUri + 'networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the networks in which the current Amazon Web Services account participates.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Get networks
		 * @param {string} name The name of the network.
		 * @param {Framework} framework An optional framework specifier. If provided, only networks of this framework type are listed.
		 * @param {NetworkStatus} status <p>An optional status specifier. If provided, only networks currently in this status are listed.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * @param {number} maxResults The maximum number of networks to list.
		 *     Minimum: 1    Maximum: 10
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNetworksOutput} Success
		 */
		ListNetworks(name: string | null | undefined, framework: Framework | null | undefined, status: NetworkStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNetworksOutput> {
			return this.http.get<ListNetworksOutput>(this.baseUri + 'networks?name=' + (name == null ? '' : encodeURIComponent(name)) + '&framework=' + framework + '&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a node on the specified blockchain network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Post networks/{networkId}/nodes
		 * @param {string} networkId <p>The unique identifier of the network for the node.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>
		 *     Min length: 1    Max length: 32
		 * @return {CreateNodeOutput} Success
		 */
		CreateNode(networkId: string, requestBody: CreateNodePostBody): Observable<CreateNodeOutput> {
			return this.http.post<CreateNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/nodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the nodes within a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Get networks/{networkId}/nodes
		 * @param {string} networkId The unique identifier of the network for which to list nodes.
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId <p>The unique identifier of the member who owns the nodes to list.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
		 *     Min length: 1    Max length: 32
		 * @param {NodeStatus} status An optional status specifier. If provided, only nodes currently in this status are listed.
		 * @param {number} maxResults The maximum number of nodes to list.
		 *     Minimum: 1    Maximum: 20
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNodesOutput} Success
		 */
		ListNodes(networkId: string, memberId: string | null | undefined, status: NodeStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNodesOutput> {
			return this.http.get<ListNodesOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/nodes&memberId=' + (memberId == null ? '' : encodeURIComponent(memberId)) + '&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Post networks/{networkId}/proposals
		 * @param {string} networkId  The unique identifier of the network for which the proposal is made.
		 *     Min length: 1    Max length: 32
		 * @return {CreateProposalOutput} Success
		 */
		CreateProposal(networkId: string, requestBody: CreateProposalPostBody): Observable<CreateProposalOutput> {
			return this.http.post<CreateProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of proposals for the network.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get networks/{networkId}/proposals
		 * @param {string} networkId  The unique identifier of the network. 
		 *     Min length: 1    Max length: 32
		 * @param {number} maxResults  The maximum number of proposals to return. 
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken  The pagination token that indicates the next set of results to retrieve. 
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProposalsOutput} Success
		 */
		ListProposals(networkId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProposalsOutput> {
			return this.http.get<ListProposalsOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the information required for token based access to your Ethereum nodes including, the <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or HTTP requests. However, WebSocket connections that were initiated while the accessor was in the <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).
		 * Delete accessors/{AccessorId}
		 * @param {string} AccessorId The unique identifier of the accessor.
		 *     Min length: 1    Max length: 32
		 * @return {DeleteAccessorOutput} Success
		 */
		DeleteAccessor(AccessorId: string): Observable<DeleteAccessorOutput> {
			return this.http.delete<DeleteAccessorOutput>(this.baseUri + 'accessors/' + (AccessorId == null ? '' : encodeURIComponent(AccessorId)), {});
		}

		/**
		 * Returns detailed information about an accessor. An accessor object is a container that has the information required for token based access to your Ethereum nodes.
		 * Get accessors/{AccessorId}
		 * @param {string} AccessorId The unique identifier of the accessor.
		 *     Min length: 1    Max length: 32
		 * @return {GetAccessorOutput} Success
		 */
		GetAccessor(AccessorId: string): Observable<GetAccessorOutput> {
			return this.http.get<GetAccessorOutput>(this.baseUri + 'accessors/' + (AccessorId == null ? '' : encodeURIComponent(AccessorId)), {});
		}

		/**
		 * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the Amazon Web Services account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last Amazon Web Services account, the network is deleted also.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Delete networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique identifier of the network from which the member is removed.
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId The unique identifier of the member to remove.
		 *     Min length: 1    Max length: 32
		 * @return {DeleteMemberOutput} Success
		 */
		DeleteMember(networkId: string, memberId: string): Observable<DeleteMemberOutput> {
			return this.http.delete<DeleteMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * <p>Returns detailed information about a member.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique identifier of the network to which the member belongs.
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId The unique identifier of the member.
		 *     Min length: 1    Max length: 32
		 * @return {GetMemberOutput} Success
		 */
		GetMember(networkId: string, memberId: string): Observable<GetMemberOutput> {
			return this.http.get<GetMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * <p>Updates a member configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Patch networks/{networkId}/members/{memberId}
		 * @param {string} networkId The unique identifier of the Managed Blockchain network to which the member belongs.
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId The unique identifier of the member.
		 *     Min length: 1    Max length: 32
		 * @return {UpdateMemberOutput} Success
		 */
		UpdateMember(networkId: string, memberId: string, requestBody: UpdateMemberPatchBody): Observable<UpdateMemberOutput> {
			return this.http.patch<UpdateMemberOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a node that your Amazon Web Services account owns. All data on the node is lost and cannot be recovered.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Delete networks/{networkId}/nodes/{nodeId}
		 * @param {string} networkId <p>The unique identifier of the network that the node is on.</p> <p>Ethereum public networks have the following <code>NetworkId</code>s:</p> <ul> <li> <p> <code>n-ethereum-mainnet</code> </p> </li> <li> <p> <code>n-ethereum-goerli</code> </p> </li> <li> <p> <code>n-ethereum-rinkeby</code> </p> </li> </ul>
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId <p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
		 *     Min length: 1    Max length: 32
		 * @param {string} nodeId The unique identifier of the node.
		 *     Min length: 1    Max length: 32
		 * @return {DeleteNodeOutput} Success
		 */
		DeleteNode(networkId: string, memberId: string | null | undefined, nodeId: string): Observable<DeleteNodeOutput> {
			return this.http.delete<DeleteNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&memberId=' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * <p>Returns detailed information about a node.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Get networks/{networkId}/nodes/{nodeId}
		 * @param {string} networkId The unique identifier of the network that the node is on.
		 *     Min length: 1    Max length: 32
		 * @param {string} memberId <p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
		 *     Min length: 1    Max length: 32
		 * @param {string} nodeId The unique identifier of the node.
		 *     Min length: 1    Max length: 32
		 * @return {GetNodeOutput} Success
		 */
		GetNode(networkId: string, memberId: string | null | undefined, nodeId: string): Observable<GetNodeOutput> {
			return this.http.get<GetNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&memberId=' + (memberId == null ? '' : encodeURIComponent(memberId)), {});
		}

		/**
		 * <p>Updates a node configuration with new parameters.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Patch networks/{networkId}/nodes/{nodeId}
		 * @param {string} networkId The unique identifier of the network that the node is on.
		 *     Min length: 1    Max length: 32
		 * @param {string} nodeId The unique identifier of the node.
		 *     Min length: 1    Max length: 32
		 * @return {UpdateNodeOutput} Success
		 */
		UpdateNode(networkId: string, nodeId: string, requestBody: UpdateNodePatchBody): Observable<UpdateNodeOutput> {
			return this.http.patch<UpdateNodeOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed information about a network.</p> <p>Applies to Hyperledger Fabric and Ethereum.</p>
		 * Get networks/{networkId}
		 * @param {string} networkId The unique identifier of the network to get information about.
		 *     Min length: 1    Max length: 32
		 * @return {GetNetworkOutput} Success
		 */
		GetNetwork(networkId: string): Observable<GetNetworkOutput> {
			return this.http.get<GetNetworkOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)), {});
		}

		/**
		 * <p>Returns detailed information about a proposal.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get networks/{networkId}/proposals/{proposalId}
		 * @param {string} networkId The unique identifier of the network for which the proposal is made.
		 *     Min length: 1    Max length: 32
		 * @param {string} proposalId The unique identifier of the proposal.
		 *     Min length: 1    Max length: 32
		 * @return {GetProposalOutput} Success
		 */
		GetProposal(networkId: string, proposalId: string): Observable<GetProposalOutput> {
			return this.http.get<GetProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), {});
		}

		/**
		 * <p>Returns a list of all invitations for the current Amazon Web Services account.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get invitations
		 * @param {number} maxResults The maximum number of invitations to return.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The pagination token that indicates the next set of results to retrieve.
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsOutput} Success
		 */
		ListInvitations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInvitationsOutput> {
			return this.http.get<ListInvitationsOutput>(this.baseUri + 'invitations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Get networks/{networkId}/proposals/{proposalId}/votes
		 * @param {string} networkId  The unique identifier of the network. 
		 *     Min length: 1    Max length: 32
		 * @param {string} proposalId  The unique identifier of the proposal. 
		 *     Min length: 1    Max length: 32
		 * @param {number} maxResults  The maximum number of votes to return. 
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken  The pagination token that indicates the next set of results to retrieve. 
		 *     Max length: 128
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProposalVotesOutput} Success
		 */
		ListProposalVotes(networkId: string, proposalId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProposalVotesOutput> {
			return this.http.get<ListProposalVotesOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/votes&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same Amazon Web Services account as the principal that calls the action.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Post networks/{networkId}/proposals/{proposalId}/votes
		 * @param {string} networkId  The unique identifier of the network. 
		 *     Min length: 1    Max length: 32
		 * @param {string} proposalId  The unique identifier of the proposal. 
		 *     Min length: 1    Max length: 32
		 * @return {VoteOnProposalOutput} Success
		 */
		VoteOnProposal(networkId: string, proposalId: string, requestBody: VoteOnProposalPostBody): Observable<VoteOnProposalOutput> {
			return this.http.post<VoteOnProposalOutput>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/votes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tags for the specified resource. Each tag consists of a key and optional value.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 1    Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds or overwrites the specified tags for the specified Amazon Managed Blockchain resource. Each tag consists of a key and optional value.</p> <p>When you specify a tag key that already exists, the tag value is overwritten with the new value. Use <code>UntagResource</code> to remove tag keys.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 1    Max length: 1011
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Delete invitations/{invitationId}
		 * @param {string} invitationId The unique identifier of the invitation to reject.
		 *     Min length: 1    Max length: 32
		 * @return {RejectInvitationOutput} Success
		 */
		RejectInvitation(invitationId: string): Observable<RejectInvitationOutput> {
			return this.http.delete<RejectInvitationOutput>(this.baseUri + 'invitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)), {});
		}

		/**
		 * <p>Removes the specified tags from the Amazon Managed Blockchain resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 1    Max length: 1011
		 * @param {Array<string>} tagKeys The tag keys.
		 *     Minimum items: 0    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAccessorPostBody {

		/**
		 * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * <p>The type of accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>
		 * Required
		 */
		AccessorType: AccessorType;

		/** <p>Tags to assign to the Accessor.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateAccessorPostBodyFormProperties {

		/**
		 * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * <p>The type of accessor.</p> <note> <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p> </note>
		 * Required
		 */
		AccessorType: FormControl<AccessorType | null | undefined>,

		/** <p>Tags to assign to the Accessor.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAccessorPostBodyFormGroup() {
		return new FormGroup<CreateAccessorPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			AccessorType: new FormControl<AccessorType | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMemberPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * The unique identifier of the invitation that is sent to the member to join the network.
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		InvitationId: string;

		/**
		 * <p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Required
		 */
		MemberConfiguration: CreateMemberPostBodyMemberConfiguration;
	}
	export interface CreateMemberPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the invitation that is sent to the member to join the network.
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		InvitationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyFormGroup() {
		return new FormGroup<CreateMemberPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			InvitationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
		});

	}

	export interface CreateMemberPostBodyMemberConfiguration {
		Name?: string;
		Description?: string;
		FrameworkConfiguration?: MemberFrameworkConfiguration;
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Tags?: InputTagMap;
		KmsKeyArn?: string;
	}
	export interface CreateMemberPostBodyMemberConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyMemberConfigurationFormGroup() {
		return new FormGroup<CreateMemberPostBodyMemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkPostBody {

		/**
		 * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * The name of the network.
		 * Required
		 * Min length: 1
		 * Max length: 64
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
		Framework: Framework;

		/**
		 * The version of the blockchain framework that the network uses.
		 * Required
		 * Min length: 1
		 * Max length: 8
		 */
		FrameworkVersion: string;

		/** Configuration properties relevant to the network for the blockchain framework that the network uses. */
		FrameworkConfiguration?: CreateNetworkPostBodyFrameworkConfiguration;

		/**
		 * <p> The voting rules for the network to decide if a proposal is accepted </p> <p>Applies only to Hyperledger Fabric.</p>
		 * Required
		 */
		VotingPolicy: CreateNetworkPostBodyVotingPolicy;

		/**
		 * <p>Configuration properties of the member.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Required
		 */
		MemberConfiguration: CreateNetworkPostBodyMemberConfiguration;

		/** <p>Tags to assign to the network.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateNetworkPostBodyFormProperties {

		/**
		 * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The name of the network.
		 * Required
		 * Min length: 1
		 * Max length: 64
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
		Framework: FormControl<Framework | null | undefined>,

		/**
		 * The version of the blockchain framework that the network uses.
		 * Required
		 * Min length: 1
		 * Max length: 8
		 */
		FrameworkVersion: FormControl<string | null | undefined>,

		/** <p>Tags to assign to the network.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateNetworkPostBodyFormGroup() {
		return new FormGroup<CreateNetworkPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Framework: new FormControl<Framework | null | undefined>(undefined, [Validators.required]),
			FrameworkVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(8)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkPostBodyFrameworkConfiguration {
		Fabric?: NetworkFabricConfiguration;
	}
	export interface CreateNetworkPostBodyFrameworkConfigurationFormProperties {
	}
	export function CreateCreateNetworkPostBodyFrameworkConfigurationFormGroup() {
		return new FormGroup<CreateNetworkPostBodyFrameworkConfigurationFormProperties>({
		});

	}

	export interface CreateNetworkPostBodyVotingPolicy {
		ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
	}
	export interface CreateNetworkPostBodyVotingPolicyFormProperties {
	}
	export function CreateCreateNetworkPostBodyVotingPolicyFormGroup() {
		return new FormGroup<CreateNetworkPostBodyVotingPolicyFormProperties>({
		});

	}

	export interface CreateNetworkPostBodyMemberConfiguration {
		Name?: string;
		Description?: string;
		FrameworkConfiguration?: MemberFrameworkConfiguration;
		LogPublishingConfiguration?: MemberLogPublishingConfiguration;
		Tags?: InputTagMap;
		KmsKeyArn?: string;
	}
	export interface CreateNetworkPostBodyMemberConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkPostBodyMemberConfigurationFormGroup() {
		return new FormGroup<CreateNetworkPostBodyMemberConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNodePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * <p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId?: string | null;

		/**
		 * Configuration properties of a node.
		 * Required
		 */
		NodeConfiguration: CreateNodePostBodyNodeConfiguration;

		/** <p>Tags to assign to the node.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateNodePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * <p>The unique identifier of the member that owns this node.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId: FormControl<string | null | undefined>,

		/** <p>Tags to assign to the node.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateNodePostBodyFormGroup() {
		return new FormGroup<CreateNodePostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateNodePostBodyNodeConfiguration {
		InstanceType?: string;
		AvailabilityZone?: string;
		LogPublishingConfiguration?: NodeLogPublishingConfiguration;
		StateDB?: StateDBType;
	}
	export interface CreateNodePostBodyNodeConfigurationFormProperties {
		InstanceType: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		StateDB: FormControl<StateDBType | null | undefined>,
	}
	export function CreateCreateNodePostBodyNodeConfigurationFormGroup() {
		return new FormGroup<CreateNodePostBodyNodeConfigurationFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			StateDB: new FormControl<StateDBType | null | undefined>(undefined),
		});

	}

	export interface CreateProposalPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: string;

		/**
		 * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId: string;

		/**
		 * <p> The actions to carry out if a proposal is <code>APPROVED</code>. </p> <p>Applies only to Hyperledger Fabric.</p>
		 * Required
		 */
		Actions: CreateProposalPostBodyActions;

		/**
		 * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
		 * Max length: 128
		 */
		Description?: string | null;

		/** <p>Tags to assign to the proposal.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateProposalPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId: FormControl<string | null | undefined>,

		/**
		 * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
		 * Max length: 128
		 */
		Description: FormControl<string | null | undefined>,

		/** <p>Tags to assign to the proposal.</p> <p> Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProposalPostBodyFormGroup() {
		return new FormGroup<CreateProposalPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
		Fabric?: MemberFabricLogPublishingConfiguration;
	}
	export interface UpdateMemberPatchBodyLogPublishingConfigurationFormProperties {
	}
	export function CreateUpdateMemberPatchBodyLogPublishingConfigurationFormGroup() {
		return new FormGroup<UpdateMemberPatchBodyLogPublishingConfigurationFormProperties>({
		});

	}

	export interface UpdateNodePatchBody {

		/**
		 * <p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId?: string | null;

		/** Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain. */
		LogPublishingConfiguration?: UpdateNodePatchBodyLogPublishingConfiguration;
	}
	export interface UpdateNodePatchBodyFormProperties {

		/**
		 * <p>The unique identifier of the member that owns the node.</p> <p>Applies only to Hyperledger Fabric.</p>
		 * Min length: 1
		 * Max length: 32
		 */
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNodePatchBodyFormGroup() {
		return new FormGroup<UpdateNodePatchBodyFormProperties>({
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
		});

	}

	export interface UpdateNodePatchBodyLogPublishingConfiguration {
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
		 * Min length: 1
		 * Max length: 32
		 */
		VoterMemberId: string;

		/**
		 * The value of the vote.
		 * Required
		 */
		Vote: VoteValue;
	}
	export interface VoteOnProposalPostBodyFormProperties {

		/**
		 * The unique identifier of the member casting the vote.
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		VoterMemberId: FormControl<string | null | undefined>,

		/**
		 * The value of the vote.
		 * Required
		 */
		Vote: FormControl<VoteValue | null | undefined>,
	}
	export function CreateVoteOnProposalPostBodyFormGroup() {
		return new FormGroup<VoteOnProposalPostBodyFormProperties>({
			VoterMemberId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
			Vote: new FormControl<VoteValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.
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

