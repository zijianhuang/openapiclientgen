import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptDirectConnectGatewayAssociationProposalResult {

		/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}
	export interface AcceptDirectConnectGatewayAssociationProposalResultFormProperties {
	}
	export function CreateAcceptDirectConnectGatewayAssociationProposalResultFormGroup() {
		return new FormGroup<AcceptDirectConnectGatewayAssociationProposalResultFormProperties>({
		});

	}


	/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
	export interface DirectConnectGatewayAssociation {
		directConnectGatewayId?: string | null;
		directConnectGatewayOwnerAccount?: string | null;
		associationState?: DirectConnectGatewayAssociationAssociationState | null;
		stateChangeError?: string | null;

		/** Information about the associated gateway. */
		associatedGateway?: AssociatedGateway;
		associationId?: string | null;
		allowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		virtualGatewayId?: string | null;
		virtualGatewayRegion?: string | null;
		virtualGatewayOwnerAccount?: string | null;
	}

	/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
	export interface DirectConnectGatewayAssociationFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayOwnerAccount: FormControl<string | null | undefined>,
		associationState: FormControl<DirectConnectGatewayAssociationAssociationState | null | undefined>,
		stateChangeError: FormControl<string | null | undefined>,
		associationId: FormControl<string | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
		virtualGatewayRegion: FormControl<string | null | undefined>,
		virtualGatewayOwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateDirectConnectGatewayAssociationFormGroup() {
		return new FormGroup<DirectConnectGatewayAssociationFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayOwnerAccount: new FormControl<string | null | undefined>(undefined),
			associationState: new FormControl<DirectConnectGatewayAssociationAssociationState | null | undefined>(undefined),
			stateChangeError: new FormControl<string | null | undefined>(undefined),
			associationId: new FormControl<string | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
			virtualGatewayRegion: new FormControl<string | null | undefined>(undefined),
			virtualGatewayOwnerAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DirectConnectGatewayAssociationAssociationState { associating = 0, associated = 1, disassociating = 2, disassociated = 3, updating = 4 }


	/** Information about the associated gateway. */
	export interface AssociatedGateway {
		id?: string | null;
		type?: AssociatedGatewayType | null;
		ownerAccount?: string | null;
		region?: string | null;
	}

	/** Information about the associated gateway. */
	export interface AssociatedGatewayFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<AssociatedGatewayType | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedGatewayFormGroup() {
		return new FormGroup<AssociatedGatewayFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AssociatedGatewayType | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociatedGatewayType { virtualPrivateGateway = 0, transitGateway = 1 }


	/** Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface. */
	export interface RouteFilterPrefix {
		cidr?: string | null;
	}

	/** Information about a route filter prefix that a customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface. */
	export interface RouteFilterPrefixFormProperties {
		cidr: FormControl<string | null | undefined>,
	}
	export function CreateRouteFilterPrefixFormGroup() {
		return new FormGroup<RouteFilterPrefixFormProperties>({
			cidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AcceptDirectConnectGatewayAssociationProposalRequest {

		/** Required */
		directConnectGatewayId: string;

		/** Required */
		proposalId: string;

		/** Required */
		associatedGatewayOwnerAccount: string;
		overrideAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}
	export interface AcceptDirectConnectGatewayAssociationProposalRequestFormProperties {

		/** Required */
		directConnectGatewayId: FormControl<string | null | undefined>,

		/** Required */
		proposalId: FormControl<string | null | undefined>,

		/** Required */
		associatedGatewayOwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateAcceptDirectConnectGatewayAssociationProposalRequestFormGroup() {
		return new FormGroup<AcceptDirectConnectGatewayAssociationProposalRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			proposalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			associatedGatewayOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectConnectServerException {
	}
	export interface DirectConnectServerExceptionFormProperties {
	}
	export function CreateDirectConnectServerExceptionFormGroup() {
		return new FormGroup<DirectConnectServerExceptionFormProperties>({
		});

	}

	export interface DirectConnectClientException {
	}
	export interface DirectConnectClientExceptionFormProperties {
	}
	export function CreateDirectConnectClientExceptionFormGroup() {
		return new FormGroup<DirectConnectClientExceptionFormProperties>({
		});

	}


	/** Information about an AWS Direct Connect connection. */
	export interface Connection {
		ownerAccount?: string | null;
		connectionId?: string | null;
		connectionName?: string | null;
		connectionState?: ConnectionConnectionState | null;
		region?: string | null;
		location?: string | null;
		bandwidth?: string | null;
		vlan?: number | null;
		partnerName?: string | null;
		loaIssueTime?: Date | null;
		lagId?: string | null;
		awsDevice?: string | null;
		jumboFrameCapable?: boolean | null;
		awsDeviceV2?: string | null;
		hasLogicalRedundancy?: ConnectionHasLogicalRedundancy | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
		providerName?: string | null;
	}

	/** Information about an AWS Direct Connect connection. */
	export interface ConnectionFormProperties {
		ownerAccount: FormControl<string | null | undefined>,
		connectionId: FormControl<string | null | undefined>,
		connectionName: FormControl<string | null | undefined>,
		connectionState: FormControl<ConnectionConnectionState | null | undefined>,
		region: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		bandwidth: FormControl<string | null | undefined>,
		vlan: FormControl<number | null | undefined>,
		partnerName: FormControl<string | null | undefined>,
		loaIssueTime: FormControl<Date | null | undefined>,
		lagId: FormControl<string | null | undefined>,
		awsDevice: FormControl<string | null | undefined>,
		jumboFrameCapable: FormControl<boolean | null | undefined>,
		awsDeviceV2: FormControl<string | null | undefined>,
		hasLogicalRedundancy: FormControl<ConnectionHasLogicalRedundancy | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			connectionName: new FormControl<string | null | undefined>(undefined),
			connectionState: new FormControl<ConnectionConnectionState | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			bandwidth: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
			partnerName: new FormControl<string | null | undefined>(undefined),
			loaIssueTime: new FormControl<Date | null | undefined>(undefined),
			lagId: new FormControl<string | null | undefined>(undefined),
			awsDevice: new FormControl<string | null | undefined>(undefined),
			jumboFrameCapable: new FormControl<boolean | null | undefined>(undefined),
			awsDeviceV2: new FormControl<string | null | undefined>(undefined),
			hasLogicalRedundancy: new FormControl<ConnectionHasLogicalRedundancy | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionConnectionState { ordering = 0, requested = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum ConnectionHasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }


	/** Information about a tag. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value?: string | null;
	}

	/** Information about a tag. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface AllocateConnectionOnInterconnectRequest {

		/** Required */
		bandwidth: string;

		/** Required */
		connectionName: string;

		/** Required */
		ownerAccount: string;

		/** Required */
		interconnectId: string;

		/** Required */
		vlan: number;
	}
	export interface AllocateConnectionOnInterconnectRequestFormProperties {

		/** Required */
		bandwidth: FormControl<string | null | undefined>,

		/** Required */
		connectionName: FormControl<string | null | undefined>,

		/** Required */
		ownerAccount: FormControl<string | null | undefined>,

		/** Required */
		interconnectId: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateAllocateConnectionOnInterconnectRequestFormGroup() {
		return new FormGroup<AllocateConnectionOnInterconnectRequestFormProperties>({
			bandwidth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interconnectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllocateHostedConnectionRequest {

		/** Required */
		connectionId: string;

		/** Required */
		ownerAccount: string;

		/** Required */
		bandwidth: string;

		/** Required */
		connectionName: string;

		/** Required */
		vlan: number;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}
	export interface AllocateHostedConnectionRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		ownerAccount: FormControl<string | null | undefined>,

		/** Required */
		bandwidth: FormControl<string | null | undefined>,

		/** Required */
		connectionName: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateAllocateHostedConnectionRequestFormGroup() {
		return new FormGroup<AllocateHostedConnectionRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bandwidth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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


	/** Information about a virtual interface. */
	export interface VirtualInterface {
		ownerAccount?: string | null;
		virtualInterfaceId?: string | null;
		location?: string | null;
		connectionId?: string | null;
		virtualInterfaceType?: string | null;
		virtualInterfaceName?: string | null;
		vlan?: number | null;
		asn?: number | null;
		amazonSideAsn?: number | null;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState | null;
		customerRouterConfig?: string | null;
		mtu?: number | null;
		jumboFrameCapable?: boolean | null;
		virtualGatewayId?: string | null;
		directConnectGatewayId?: string | null;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;
		bgpPeers?: Array<BGPPeer>;
		region?: string | null;
		awsDeviceV2?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a virtual interface. */
	export interface VirtualInterfaceFormProperties {
		ownerAccount: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		connectionId: FormControl<string | null | undefined>,
		virtualInterfaceType: FormControl<string | null | undefined>,
		virtualInterfaceName: FormControl<string | null | undefined>,
		vlan: FormControl<number | null | undefined>,
		asn: FormControl<number | null | undefined>,
		amazonSideAsn: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		virtualInterfaceState: FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>,
		customerRouterConfig: FormControl<string | null | undefined>,
		mtu: FormControl<number | null | undefined>,
		jumboFrameCapable: FormControl<boolean | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		awsDeviceV2: FormControl<string | null | undefined>,
	}
	export function CreateVirtualInterfaceFormGroup() {
		return new FormGroup<VirtualInterfaceFormProperties>({
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceType: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
			asn: new FormControl<number | null | undefined>(undefined),
			amazonSideAsn: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			virtualInterfaceState: new FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>(undefined),
			customerRouterConfig: new FormControl<string | null | undefined>(undefined),
			mtu: new FormControl<number | null | undefined>(undefined),
			jumboFrameCapable: new FormControl<boolean | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			awsDeviceV2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualInterfaceAddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum VirtualInterfaceVirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }


	/** Information about a BGP peer. */
	export interface BGPPeer {
		bgpPeerId?: string | null;
		asn?: number | null;
		authKey?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		bgpPeerState?: BGPPeerBgpPeerState | null;
		bgpStatus?: BGPPeerBgpStatus | null;
		awsDeviceV2?: string | null;
	}

	/** Information about a BGP peer. */
	export interface BGPPeerFormProperties {
		bgpPeerId: FormControl<string | null | undefined>,
		asn: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		bgpPeerState: FormControl<BGPPeerBgpPeerState | null | undefined>,
		bgpStatus: FormControl<BGPPeerBgpStatus | null | undefined>,
		awsDeviceV2: FormControl<string | null | undefined>,
	}
	export function CreateBGPPeerFormGroup() {
		return new FormGroup<BGPPeerFormProperties>({
			bgpPeerId: new FormControl<string | null | undefined>(undefined),
			asn: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			bgpPeerState: new FormControl<BGPPeerBgpPeerState | null | undefined>(undefined),
			bgpStatus: new FormControl<BGPPeerBgpStatus | null | undefined>(undefined),
			awsDeviceV2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BGPPeerBgpPeerState { verifying = 0, pending = 1, available = 2, deleting = 3, deleted = 4 }

	export enum BGPPeerBgpStatus { up = 0, down = 1, unknown = 2 }

	export interface AllocatePrivateVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/** Required */
		ownerAccount: string;

		/**
		 * Information about a private virtual interface to be provisioned on a connection.
		 * Required
		 */
		newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
	}
	export interface AllocatePrivateVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		ownerAccount: FormControl<string | null | undefined>,
	}
	export function CreateAllocatePrivateVirtualInterfaceRequestFormGroup() {
		return new FormGroup<AllocatePrivateVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a private virtual interface to be provisioned on a connection. */
	export interface NewPrivateVirtualInterfaceAllocation {

		/** Required */
		virtualInterfaceName: string;

		/** Required */
		vlan: number;

		/** Required */
		asn: number;
		mtu?: number | null;
		authKey?: string | null;
		amazonAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		customerAddress?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a private virtual interface to be provisioned on a connection. */
	export interface NewPrivateVirtualInterfaceAllocationFormProperties {

		/** Required */
		virtualInterfaceName: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,

		/** Required */
		asn: FormControl<number | null | undefined>,
		mtu: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
	}
	export function CreateNewPrivateVirtualInterfaceAllocationFormGroup() {
		return new FormGroup<NewPrivateVirtualInterfaceAllocationFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mtu: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AllocatePublicVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/** Required */
		ownerAccount: string;

		/**
		 * Information about a public virtual interface to be provisioned on a connection.
		 * Required
		 */
		newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
	}
	export interface AllocatePublicVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		ownerAccount: FormControl<string | null | undefined>,
	}
	export function CreateAllocatePublicVirtualInterfaceRequestFormGroup() {
		return new FormGroup<AllocatePublicVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a public virtual interface to be provisioned on a connection. */
	export interface NewPublicVirtualInterfaceAllocation {

		/** Required */
		virtualInterfaceName: string;

		/** Required */
		vlan: number;

		/** Required */
		asn: number;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a public virtual interface to be provisioned on a connection. */
	export interface NewPublicVirtualInterfaceAllocationFormProperties {

		/** Required */
		virtualInterfaceName: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,

		/** Required */
		asn: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
	}
	export function CreateNewPublicVirtualInterfaceAllocationFormGroup() {
		return new FormGroup<NewPublicVirtualInterfaceAllocationFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
		});

	}

	export interface AllocateTransitVirtualInterfaceResult {

		/** Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}
	export interface AllocateTransitVirtualInterfaceResultFormProperties {
	}
	export function CreateAllocateTransitVirtualInterfaceResultFormGroup() {
		return new FormGroup<AllocateTransitVirtualInterfaceResultFormProperties>({
		});

	}

	export interface AllocateTransitVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/** Required */
		ownerAccount: string;

		/**
		 * Information about a transit virtual interface to be provisioned on a connection.
		 * Required
		 */
		newTransitVirtualInterfaceAllocation: NewTransitVirtualInterfaceAllocation;
	}
	export interface AllocateTransitVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		ownerAccount: FormControl<string | null | undefined>,
	}
	export function CreateAllocateTransitVirtualInterfaceRequestFormGroup() {
		return new FormGroup<AllocateTransitVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a transit virtual interface to be provisioned on a connection. */
	export interface NewTransitVirtualInterfaceAllocation {
		virtualInterfaceName?: string | null;
		vlan?: number | null;
		asn?: number | null;
		mtu?: number | null;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a transit virtual interface to be provisioned on a connection. */
	export interface NewTransitVirtualInterfaceAllocationFormProperties {
		virtualInterfaceName: FormControl<string | null | undefined>,
		vlan: FormControl<number | null | undefined>,
		asn: FormControl<number | null | undefined>,
		mtu: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
	}
	export function CreateNewTransitVirtualInterfaceAllocationFormGroup() {
		return new FormGroup<NewTransitVirtualInterfaceAllocationFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
			asn: new FormControl<number | null | undefined>(undefined),
			mtu: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
		});

	}

	export interface AssociateConnectionWithLagRequest {

		/** Required */
		connectionId: string;

		/** Required */
		lagId: string;
	}
	export interface AssociateConnectionWithLagRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		lagId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConnectionWithLagRequestFormGroup() {
		return new FormGroup<AssociateConnectionWithLagRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateHostedConnectionRequest {

		/** Required */
		connectionId: string;

		/** Required */
		parentConnectionId: string;
	}
	export interface AssociateHostedConnectionRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		parentConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateHostedConnectionRequestFormGroup() {
		return new FormGroup<AssociateHostedConnectionRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentConnectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateVirtualInterfaceRequest {

		/** Required */
		virtualInterfaceId: string;

		/** Required */
		connectionId: string;
	}
	export interface AssociateVirtualInterfaceRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateVirtualInterfaceRequestFormGroup() {
		return new FormGroup<AssociateVirtualInterfaceRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfirmConnectionResponse {
		connectionState?: ConnectionConnectionState | null;
	}
	export interface ConfirmConnectionResponseFormProperties {
		connectionState: FormControl<ConnectionConnectionState | null | undefined>,
	}
	export function CreateConfirmConnectionResponseFormGroup() {
		return new FormGroup<ConfirmConnectionResponseFormProperties>({
			connectionState: new FormControl<ConnectionConnectionState | null | undefined>(undefined),
		});

	}

	export interface ConfirmConnectionRequest {

		/** Required */
		connectionId: string;
	}
	export interface ConfirmConnectionRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateConfirmConnectionRequestFormGroup() {
		return new FormGroup<ConfirmConnectionRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfirmPrivateVirtualInterfaceResponse {
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState | null;
	}
	export interface ConfirmPrivateVirtualInterfaceResponseFormProperties {
		virtualInterfaceState: FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>,
	}
	export function CreateConfirmPrivateVirtualInterfaceResponseFormGroup() {
		return new FormGroup<ConfirmPrivateVirtualInterfaceResponseFormProperties>({
			virtualInterfaceState: new FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>(undefined),
		});

	}

	export interface ConfirmPrivateVirtualInterfaceRequest {

		/** Required */
		virtualInterfaceId: string;
		virtualGatewayId?: string | null;
		directConnectGatewayId?: string | null;
	}
	export interface ConfirmPrivateVirtualInterfaceRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateConfirmPrivateVirtualInterfaceRequestFormGroup() {
		return new FormGroup<ConfirmPrivateVirtualInterfaceRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfirmPublicVirtualInterfaceResponse {
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState | null;
	}
	export interface ConfirmPublicVirtualInterfaceResponseFormProperties {
		virtualInterfaceState: FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>,
	}
	export function CreateConfirmPublicVirtualInterfaceResponseFormGroup() {
		return new FormGroup<ConfirmPublicVirtualInterfaceResponseFormProperties>({
			virtualInterfaceState: new FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>(undefined),
		});

	}

	export interface ConfirmPublicVirtualInterfaceRequest {

		/** Required */
		virtualInterfaceId: string;
	}
	export interface ConfirmPublicVirtualInterfaceRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateConfirmPublicVirtualInterfaceRequestFormGroup() {
		return new FormGroup<ConfirmPublicVirtualInterfaceRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfirmTransitVirtualInterfaceResponse {
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState | null;
	}
	export interface ConfirmTransitVirtualInterfaceResponseFormProperties {
		virtualInterfaceState: FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>,
	}
	export function CreateConfirmTransitVirtualInterfaceResponseFormGroup() {
		return new FormGroup<ConfirmTransitVirtualInterfaceResponseFormProperties>({
			virtualInterfaceState: new FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>(undefined),
		});

	}

	export interface ConfirmTransitVirtualInterfaceRequest {

		/** Required */
		virtualInterfaceId: string;

		/** Required */
		directConnectGatewayId: string;
	}
	export interface ConfirmTransitVirtualInterfaceRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,

		/** Required */
		directConnectGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateConfirmTransitVirtualInterfaceRequestFormGroup() {
		return new FormGroup<ConfirmTransitVirtualInterfaceRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBGPPeerResponse {

		/** Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}
	export interface CreateBGPPeerResponseFormProperties {
	}
	export function CreateCreateBGPPeerResponseFormGroup() {
		return new FormGroup<CreateBGPPeerResponseFormProperties>({
		});

	}

	export interface CreateBGPPeerRequest {
		virtualInterfaceId?: string | null;

		/** Information about a new BGP peer. */
		newBGPPeer?: NewBGPPeer;
	}
	export interface CreateBGPPeerRequestFormProperties {
		virtualInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBGPPeerRequestFormGroup() {
		return new FormGroup<CreateBGPPeerRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a new BGP peer. */
	export interface NewBGPPeer {
		asn?: number | null;
		authKey?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
	}

	/** Information about a new BGP peer. */
	export interface NewBGPPeerFormProperties {
		asn: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
	}
	export function CreateNewBGPPeerFormGroup() {
		return new FormGroup<NewBGPPeerFormProperties>({
			asn: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionRequest {

		/** Required */
		location: string;

		/** Required */
		bandwidth: string;

		/** Required */
		connectionName: string;
		lagId?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
		providerName?: string | null;
	}
	export interface CreateConnectionRequestFormProperties {

		/** Required */
		location: FormControl<string | null | undefined>,

		/** Required */
		bandwidth: FormControl<string | null | undefined>,

		/** Required */
		connectionName: FormControl<string | null | undefined>,
		lagId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bandwidth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDirectConnectGatewayResult {

		/** Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
		directConnectGateway?: DirectConnectGateway;
	}
	export interface CreateDirectConnectGatewayResultFormProperties {
	}
	export function CreateCreateDirectConnectGatewayResultFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayResultFormProperties>({
		});

	}


	/** Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
	export interface DirectConnectGateway {
		directConnectGatewayId?: string | null;
		directConnectGatewayName?: string | null;
		amazonSideAsn?: number | null;
		ownerAccount?: string | null;
		directConnectGatewayState?: DirectConnectGatewayDirectConnectGatewayState | null;
		stateChangeError?: string | null;
	}

	/** Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
	export interface DirectConnectGatewayFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayName: FormControl<string | null | undefined>,
		amazonSideAsn: FormControl<number | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		directConnectGatewayState: FormControl<DirectConnectGatewayDirectConnectGatewayState | null | undefined>,
		stateChangeError: FormControl<string | null | undefined>,
	}
	export function CreateDirectConnectGatewayFormGroup() {
		return new FormGroup<DirectConnectGatewayFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayName: new FormControl<string | null | undefined>(undefined),
			amazonSideAsn: new FormControl<number | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayState: new FormControl<DirectConnectGatewayDirectConnectGatewayState | null | undefined>(undefined),
			stateChangeError: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DirectConnectGatewayDirectConnectGatewayState { pending = 0, available = 1, deleting = 2, deleted = 3 }

	export interface CreateDirectConnectGatewayRequest {

		/** Required */
		directConnectGatewayName: string;
		amazonSideAsn?: number | null;
	}
	export interface CreateDirectConnectGatewayRequestFormProperties {

		/** Required */
		directConnectGatewayName: FormControl<string | null | undefined>,
		amazonSideAsn: FormControl<number | null | undefined>,
	}
	export function CreateCreateDirectConnectGatewayRequestFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayRequestFormProperties>({
			directConnectGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amazonSideAsn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDirectConnectGatewayAssociationResult {

		/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}
	export interface CreateDirectConnectGatewayAssociationResultFormProperties {
	}
	export function CreateCreateDirectConnectGatewayAssociationResultFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayAssociationResultFormProperties>({
		});

	}

	export interface CreateDirectConnectGatewayAssociationRequest {

		/** Required */
		directConnectGatewayId: string;
		gatewayId?: string | null;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		virtualGatewayId?: string | null;
	}
	export interface CreateDirectConnectGatewayAssociationRequestFormProperties {

		/** Required */
		directConnectGatewayId: FormControl<string | null | undefined>,
		gatewayId: FormControl<string | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectConnectGatewayAssociationRequestFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayAssociationRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayId: new FormControl<string | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDirectConnectGatewayAssociationProposalResult {

		/** Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. */
		directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
	}
	export interface CreateDirectConnectGatewayAssociationProposalResultFormProperties {
	}
	export function CreateCreateDirectConnectGatewayAssociationProposalResultFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayAssociationProposalResultFormProperties>({
		});

	}


	/** Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.  */
	export interface DirectConnectGatewayAssociationProposal {
		proposalId?: string | null;
		directConnectGatewayId?: string | null;
		directConnectGatewayOwnerAccount?: string | null;
		proposalState?: DirectConnectGatewayAssociationProposalProposalState | null;

		/** Information about the associated gateway. */
		associatedGateway?: AssociatedGateway;
		existingAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		requestedAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}

	/** Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.  */
	export interface DirectConnectGatewayAssociationProposalFormProperties {
		proposalId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayOwnerAccount: FormControl<string | null | undefined>,
		proposalState: FormControl<DirectConnectGatewayAssociationProposalProposalState | null | undefined>,
	}
	export function CreateDirectConnectGatewayAssociationProposalFormGroup() {
		return new FormGroup<DirectConnectGatewayAssociationProposalFormProperties>({
			proposalId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayOwnerAccount: new FormControl<string | null | undefined>(undefined),
			proposalState: new FormControl<DirectConnectGatewayAssociationProposalProposalState | null | undefined>(undefined),
		});

	}

	export enum DirectConnectGatewayAssociationProposalProposalState { requested = 0, accepted = 1, deleted = 2 }

	export interface CreateDirectConnectGatewayAssociationProposalRequest {

		/** Required */
		directConnectGatewayId: string;

		/** Required */
		directConnectGatewayOwnerAccount: string;

		/** Required */
		gatewayId: string;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}
	export interface CreateDirectConnectGatewayAssociationProposalRequestFormProperties {

		/** Required */
		directConnectGatewayId: FormControl<string | null | undefined>,

		/** Required */
		directConnectGatewayOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		gatewayId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectConnectGatewayAssociationProposalRequestFormGroup() {
		return new FormGroup<CreateDirectConnectGatewayAssociationProposalRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			directConnectGatewayOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an interconnect. */
	export interface Interconnect {
		interconnectId?: string | null;
		interconnectName?: string | null;
		interconnectState?: InterconnectInterconnectState | null;
		region?: string | null;
		location?: string | null;
		bandwidth?: string | null;
		loaIssueTime?: Date | null;
		lagId?: string | null;
		awsDevice?: string | null;
		jumboFrameCapable?: boolean | null;
		awsDeviceV2?: string | null;
		hasLogicalRedundancy?: ConnectionHasLogicalRedundancy | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
		providerName?: string | null;
	}

	/** Information about an interconnect. */
	export interface InterconnectFormProperties {
		interconnectId: FormControl<string | null | undefined>,
		interconnectName: FormControl<string | null | undefined>,
		interconnectState: FormControl<InterconnectInterconnectState | null | undefined>,
		region: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		bandwidth: FormControl<string | null | undefined>,
		loaIssueTime: FormControl<Date | null | undefined>,
		lagId: FormControl<string | null | undefined>,
		awsDevice: FormControl<string | null | undefined>,
		jumboFrameCapable: FormControl<boolean | null | undefined>,
		awsDeviceV2: FormControl<string | null | undefined>,
		hasLogicalRedundancy: FormControl<ConnectionHasLogicalRedundancy | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateInterconnectFormGroup() {
		return new FormGroup<InterconnectFormProperties>({
			interconnectId: new FormControl<string | null | undefined>(undefined),
			interconnectName: new FormControl<string | null | undefined>(undefined),
			interconnectState: new FormControl<InterconnectInterconnectState | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			bandwidth: new FormControl<string | null | undefined>(undefined),
			loaIssueTime: new FormControl<Date | null | undefined>(undefined),
			lagId: new FormControl<string | null | undefined>(undefined),
			awsDevice: new FormControl<string | null | undefined>(undefined),
			jumboFrameCapable: new FormControl<boolean | null | undefined>(undefined),
			awsDeviceV2: new FormControl<string | null | undefined>(undefined),
			hasLogicalRedundancy: new FormControl<ConnectionHasLogicalRedundancy | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InterconnectInterconnectState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export interface CreateInterconnectRequest {

		/** Required */
		interconnectName: string;

		/** Required */
		bandwidth: string;

		/** Required */
		location: string;
		lagId?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
		providerName?: string | null;
	}
	export interface CreateInterconnectRequestFormProperties {

		/** Required */
		interconnectName: FormControl<string | null | undefined>,

		/** Required */
		bandwidth: FormControl<string | null | undefined>,

		/** Required */
		location: FormControl<string | null | undefined>,
		lagId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateInterconnectRequestFormGroup() {
		return new FormGroup<CreateInterconnectRequestFormProperties>({
			interconnectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bandwidth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a link aggregation group (LAG). */
	export interface Lag {
		connectionsBandwidth?: string | null;
		numberOfConnections?: number | null;
		lagId?: string | null;
		ownerAccount?: string | null;
		lagName?: string | null;
		lagState?: InterconnectInterconnectState | null;
		location?: string | null;
		region?: string | null;
		minimumLinks?: number | null;
		awsDevice?: string | null;
		awsDeviceV2?: string | null;
		connections?: Array<Connection>;
		allowsHostedConnections?: boolean | null;
		jumboFrameCapable?: boolean | null;
		hasLogicalRedundancy?: ConnectionHasLogicalRedundancy | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
		providerName?: string | null;
	}

	/** Information about a link aggregation group (LAG). */
	export interface LagFormProperties {
		connectionsBandwidth: FormControl<string | null | undefined>,
		numberOfConnections: FormControl<number | null | undefined>,
		lagId: FormControl<string | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		lagName: FormControl<string | null | undefined>,
		lagState: FormControl<InterconnectInterconnectState | null | undefined>,
		location: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		minimumLinks: FormControl<number | null | undefined>,
		awsDevice: FormControl<string | null | undefined>,
		awsDeviceV2: FormControl<string | null | undefined>,
		allowsHostedConnections: FormControl<boolean | null | undefined>,
		jumboFrameCapable: FormControl<boolean | null | undefined>,
		hasLogicalRedundancy: FormControl<ConnectionHasLogicalRedundancy | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateLagFormGroup() {
		return new FormGroup<LagFormProperties>({
			connectionsBandwidth: new FormControl<string | null | undefined>(undefined),
			numberOfConnections: new FormControl<number | null | undefined>(undefined),
			lagId: new FormControl<string | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			lagName: new FormControl<string | null | undefined>(undefined),
			lagState: new FormControl<InterconnectInterconnectState | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			minimumLinks: new FormControl<number | null | undefined>(undefined),
			awsDevice: new FormControl<string | null | undefined>(undefined),
			awsDeviceV2: new FormControl<string | null | undefined>(undefined),
			allowsHostedConnections: new FormControl<boolean | null | undefined>(undefined),
			jumboFrameCapable: new FormControl<boolean | null | undefined>(undefined),
			hasLogicalRedundancy: new FormControl<ConnectionHasLogicalRedundancy | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLagRequest {

		/** Required */
		numberOfConnections: number;

		/** Required */
		location: string;

		/** Required */
		connectionsBandwidth: string;

		/** Required */
		lagName: string;
		connectionId?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;

		/** Minimum items: 1 */
		childConnectionTags?: Array<Tag>;
		providerName?: string | null;
	}
	export interface CreateLagRequestFormProperties {

		/** Required */
		numberOfConnections: FormControl<number | null | undefined>,

		/** Required */
		location: FormControl<string | null | undefined>,

		/** Required */
		connectionsBandwidth: FormControl<string | null | undefined>,

		/** Required */
		lagName: FormControl<string | null | undefined>,
		connectionId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLagRequestFormGroup() {
		return new FormGroup<CreateLagRequestFormProperties>({
			numberOfConnections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionsBandwidth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectionId: new FormControl<string | null | undefined>(undefined),
			providerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePrivateVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/**
		 * Information about a private virtual interface.
		 * Required
		 */
		newPrivateVirtualInterface: NewPrivateVirtualInterface;
	}
	export interface CreatePrivateVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrivateVirtualInterfaceRequestFormGroup() {
		return new FormGroup<CreatePrivateVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a private virtual interface. */
	export interface NewPrivateVirtualInterface {

		/** Required */
		virtualInterfaceName: string;

		/** Required */
		vlan: number;

		/** Required */
		asn: number;
		mtu?: number | null;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		virtualGatewayId?: string | null;
		directConnectGatewayId?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a private virtual interface. */
	export interface NewPrivateVirtualInterfaceFormProperties {

		/** Required */
		virtualInterfaceName: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,

		/** Required */
		asn: FormControl<number | null | undefined>,
		mtu: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateNewPrivateVirtualInterfaceFormGroup() {
		return new FormGroup<NewPrivateVirtualInterfaceFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mtu: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePublicVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/**
		 * Information about a public virtual interface.
		 * Required
		 */
		newPublicVirtualInterface: NewPublicVirtualInterface;
	}
	export interface CreatePublicVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublicVirtualInterfaceRequestFormGroup() {
		return new FormGroup<CreatePublicVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a public virtual interface. */
	export interface NewPublicVirtualInterface {

		/** Required */
		virtualInterfaceName: string;

		/** Required */
		vlan: number;

		/** Required */
		asn: number;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		routeFilterPrefixes?: Array<RouteFilterPrefix>;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a public virtual interface. */
	export interface NewPublicVirtualInterfaceFormProperties {

		/** Required */
		virtualInterfaceName: FormControl<string | null | undefined>,

		/** Required */
		vlan: FormControl<number | null | undefined>,

		/** Required */
		asn: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
	}
	export function CreateNewPublicVirtualInterfaceFormGroup() {
		return new FormGroup<NewPublicVirtualInterfaceFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			asn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
		});

	}

	export interface CreateTransitVirtualInterfaceResult {

		/** Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}
	export interface CreateTransitVirtualInterfaceResultFormProperties {
	}
	export function CreateCreateTransitVirtualInterfaceResultFormGroup() {
		return new FormGroup<CreateTransitVirtualInterfaceResultFormProperties>({
		});

	}

	export interface CreateTransitVirtualInterfaceRequest {

		/** Required */
		connectionId: string;

		/**
		 * Information about a transit virtual interface.
		 * Required
		 */
		newTransitVirtualInterface: NewTransitVirtualInterface;
	}
	export interface CreateTransitVirtualInterfaceRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransitVirtualInterfaceRequestFormGroup() {
		return new FormGroup<CreateTransitVirtualInterfaceRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a transit virtual interface. */
	export interface NewTransitVirtualInterface {
		virtualInterfaceName?: string | null;
		vlan?: number | null;
		asn?: number | null;
		mtu?: number | null;
		authKey?: string | null;
		amazonAddress?: string | null;
		customerAddress?: string | null;
		addressFamily?: VirtualInterfaceAddressFamily | null;
		directConnectGatewayId?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a transit virtual interface. */
	export interface NewTransitVirtualInterfaceFormProperties {
		virtualInterfaceName: FormControl<string | null | undefined>,
		vlan: FormControl<number | null | undefined>,
		asn: FormControl<number | null | undefined>,
		mtu: FormControl<number | null | undefined>,
		authKey: FormControl<string | null | undefined>,
		amazonAddress: FormControl<string | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		addressFamily: FormControl<VirtualInterfaceAddressFamily | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateNewTransitVirtualInterfaceFormGroup() {
		return new FormGroup<NewTransitVirtualInterfaceFormProperties>({
			virtualInterfaceName: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
			asn: new FormControl<number | null | undefined>(undefined),
			mtu: new FormControl<number | null | undefined>(undefined),
			authKey: new FormControl<string | null | undefined>(undefined),
			amazonAddress: new FormControl<string | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			addressFamily: new FormControl<VirtualInterfaceAddressFamily | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBGPPeerResponse {

		/** Information about a virtual interface. */
		virtualInterface?: VirtualInterface;
	}
	export interface DeleteBGPPeerResponseFormProperties {
	}
	export function CreateDeleteBGPPeerResponseFormGroup() {
		return new FormGroup<DeleteBGPPeerResponseFormProperties>({
		});

	}

	export interface DeleteBGPPeerRequest {
		virtualInterfaceId?: string | null;
		asn?: number | null;
		customerAddress?: string | null;
		bgpPeerId?: string | null;
	}
	export interface DeleteBGPPeerRequestFormProperties {
		virtualInterfaceId: FormControl<string | null | undefined>,
		asn: FormControl<number | null | undefined>,
		customerAddress: FormControl<string | null | undefined>,
		bgpPeerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBGPPeerRequestFormGroup() {
		return new FormGroup<DeleteBGPPeerRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			asn: new FormControl<number | null | undefined>(undefined),
			customerAddress: new FormControl<string | null | undefined>(undefined),
			bgpPeerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteConnectionRequest {

		/** Required */
		connectionId: string;
	}
	export interface DeleteConnectionRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDirectConnectGatewayResult {

		/** Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways. */
		directConnectGateway?: DirectConnectGateway;
	}
	export interface DeleteDirectConnectGatewayResultFormProperties {
	}
	export function CreateDeleteDirectConnectGatewayResultFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayResultFormProperties>({
		});

	}

	export interface DeleteDirectConnectGatewayRequest {

		/** Required */
		directConnectGatewayId: string;
	}
	export interface DeleteDirectConnectGatewayRequestFormProperties {

		/** Required */
		directConnectGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectConnectGatewayRequestFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDirectConnectGatewayAssociationResult {

		/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}
	export interface DeleteDirectConnectGatewayAssociationResultFormProperties {
	}
	export function CreateDeleteDirectConnectGatewayAssociationResultFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayAssociationResultFormProperties>({
		});

	}

	export interface DeleteDirectConnectGatewayAssociationRequest {
		associationId?: string | null;
		directConnectGatewayId?: string | null;
		virtualGatewayId?: string | null;
	}
	export interface DeleteDirectConnectGatewayAssociationRequestFormProperties {
		associationId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectConnectGatewayAssociationRequestFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayAssociationRequestFormProperties>({
			associationId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDirectConnectGatewayAssociationProposalResult {

		/** Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. */
		directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
	}
	export interface DeleteDirectConnectGatewayAssociationProposalResultFormProperties {
	}
	export function CreateDeleteDirectConnectGatewayAssociationProposalResultFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayAssociationProposalResultFormProperties>({
		});

	}

	export interface DeleteDirectConnectGatewayAssociationProposalRequest {

		/** Required */
		proposalId: string;
	}
	export interface DeleteDirectConnectGatewayAssociationProposalRequestFormProperties {

		/** Required */
		proposalId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectConnectGatewayAssociationProposalRequestFormGroup() {
		return new FormGroup<DeleteDirectConnectGatewayAssociationProposalRequestFormProperties>({
			proposalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInterconnectResponse {
		interconnectState?: InterconnectInterconnectState | null;
	}
	export interface DeleteInterconnectResponseFormProperties {
		interconnectState: FormControl<InterconnectInterconnectState | null | undefined>,
	}
	export function CreateDeleteInterconnectResponseFormGroup() {
		return new FormGroup<DeleteInterconnectResponseFormProperties>({
			interconnectState: new FormControl<InterconnectInterconnectState | null | undefined>(undefined),
		});

	}

	export interface DeleteInterconnectRequest {

		/** Required */
		interconnectId: string;
	}
	export interface DeleteInterconnectRequestFormProperties {

		/** Required */
		interconnectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInterconnectRequestFormGroup() {
		return new FormGroup<DeleteInterconnectRequestFormProperties>({
			interconnectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLagRequest {

		/** Required */
		lagId: string;
	}
	export interface DeleteLagRequestFormProperties {

		/** Required */
		lagId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLagRequestFormGroup() {
		return new FormGroup<DeleteLagRequestFormProperties>({
			lagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVirtualInterfaceResponse {
		virtualInterfaceState?: VirtualInterfaceVirtualInterfaceState | null;
	}
	export interface DeleteVirtualInterfaceResponseFormProperties {
		virtualInterfaceState: FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>,
	}
	export function CreateDeleteVirtualInterfaceResponseFormGroup() {
		return new FormGroup<DeleteVirtualInterfaceResponseFormProperties>({
			virtualInterfaceState: new FormControl<VirtualInterfaceVirtualInterfaceState | null | undefined>(undefined),
		});

	}

	export interface DeleteVirtualInterfaceRequest {

		/** Required */
		virtualInterfaceId: string;
	}
	export interface DeleteVirtualInterfaceRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVirtualInterfaceRequestFormGroup() {
		return new FormGroup<DeleteVirtualInterfaceRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConnectionLoaResponse {

		/** Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
		loa?: Loa;
	}
	export interface DescribeConnectionLoaResponseFormProperties {
	}
	export function CreateDescribeConnectionLoaResponseFormGroup() {
		return new FormGroup<DescribeConnectionLoaResponseFormProperties>({
		});

	}


	/** Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
	export interface Loa {
		loaContent?: string | null;
		loaContentType?: LoaLoaContentType | null;
	}

	/** Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
	export interface LoaFormProperties {
		loaContent: FormControl<string | null | undefined>,
		loaContentType: FormControl<LoaLoaContentType | null | undefined>,
	}
	export function CreateLoaFormGroup() {
		return new FormGroup<LoaFormProperties>({
			loaContent: new FormControl<string | null | undefined>(undefined),
			loaContentType: new FormControl<LoaLoaContentType | null | undefined>(undefined),
		});

	}

	export enum LoaLoaContentType { application_pdf = 0 }

	export interface DescribeConnectionLoaRequest {

		/** Required */
		connectionId: string;
		providerName?: string | null;
		loaContentType?: DescribeConnectionLoaRequestLoaContentType | null;
	}
	export interface DescribeConnectionLoaRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
		loaContentType: FormControl<DescribeConnectionLoaRequestLoaContentType | null | undefined>,
	}
	export function CreateDescribeConnectionLoaRequestFormGroup() {
		return new FormGroup<DescribeConnectionLoaRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerName: new FormControl<string | null | undefined>(undefined),
			loaContentType: new FormControl<DescribeConnectionLoaRequestLoaContentType | null | undefined>(undefined),
		});

	}

	export enum DescribeConnectionLoaRequestLoaContentType { application_pdf = 0 }

	export interface Connections {
		connections?: Array<Connection>;
	}
	export interface ConnectionsFormProperties {
	}
	export function CreateConnectionsFormGroup() {
		return new FormGroup<ConnectionsFormProperties>({
		});

	}

	export interface DescribeConnectionsRequest {
		connectionId?: string | null;
	}
	export interface DescribeConnectionsRequestFormProperties {
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsRequestFormGroup() {
		return new FormGroup<DescribeConnectionsRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectionsOnInterconnectRequest {

		/** Required */
		interconnectId: string;
	}
	export interface DescribeConnectionsOnInterconnectRequestFormProperties {

		/** Required */
		interconnectId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsOnInterconnectRequestFormGroup() {
		return new FormGroup<DescribeConnectionsOnInterconnectRequestFormProperties>({
			interconnectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDirectConnectGatewayAssociationProposalsResult {
		directConnectGatewayAssociationProposals?: Array<DirectConnectGatewayAssociationProposal>;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewayAssociationProposalsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAssociationProposalsResultFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAssociationProposalsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewayAssociationProposalsRequest {
		directConnectGatewayId?: string | null;
		proposalId?: string | null;
		associatedGatewayId?: string | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewayAssociationProposalsRequestFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		proposalId: FormControl<string | null | undefined>,
		associatedGatewayId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAssociationProposalsRequestFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAssociationProposalsRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			associatedGatewayId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewayAssociationsResult {
		directConnectGatewayAssociations?: Array<DirectConnectGatewayAssociation>;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewayAssociationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAssociationsResultFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAssociationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewayAssociationsRequest {
		associationId?: string | null;
		associatedGatewayId?: string | null;
		directConnectGatewayId?: string | null;
		maxResults?: number | null;
		nextToken?: string | null;
		virtualGatewayId?: string | null;
	}
	export interface DescribeDirectConnectGatewayAssociationsRequestFormProperties {
		associationId: FormControl<string | null | undefined>,
		associatedGatewayId: FormControl<string | null | undefined>,
		directConnectGatewayId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		virtualGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAssociationsRequestFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAssociationsRequestFormProperties>({
			associationId: new FormControl<string | null | undefined>(undefined),
			associatedGatewayId: new FormControl<string | null | undefined>(undefined),
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewayAttachmentsResult {
		directConnectGatewayAttachments?: Array<DirectConnectGatewayAttachment>;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewayAttachmentsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAttachmentsResultFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAttachmentsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an attachment between a Direct Connect gateway and a virtual interface. */
	export interface DirectConnectGatewayAttachment {
		directConnectGatewayId?: string | null;
		virtualInterfaceId?: string | null;
		virtualInterfaceRegion?: string | null;
		virtualInterfaceOwnerAccount?: string | null;
		attachmentState?: DirectConnectGatewayAttachmentAttachmentState | null;
		attachmentType?: DirectConnectGatewayAttachmentAttachmentType | null;
		stateChangeError?: string | null;
	}

	/** Information about an attachment between a Direct Connect gateway and a virtual interface. */
	export interface DirectConnectGatewayAttachmentFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
		virtualInterfaceRegion: FormControl<string | null | undefined>,
		virtualInterfaceOwnerAccount: FormControl<string | null | undefined>,
		attachmentState: FormControl<DirectConnectGatewayAttachmentAttachmentState | null | undefined>,
		attachmentType: FormControl<DirectConnectGatewayAttachmentAttachmentType | null | undefined>,
		stateChangeError: FormControl<string | null | undefined>,
	}
	export function CreateDirectConnectGatewayAttachmentFormGroup() {
		return new FormGroup<DirectConnectGatewayAttachmentFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceRegion: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceOwnerAccount: new FormControl<string | null | undefined>(undefined),
			attachmentState: new FormControl<DirectConnectGatewayAttachmentAttachmentState | null | undefined>(undefined),
			attachmentType: new FormControl<DirectConnectGatewayAttachmentAttachmentType | null | undefined>(undefined),
			stateChangeError: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DirectConnectGatewayAttachmentAttachmentState { attaching = 0, attached = 1, detaching = 2, detached = 3 }

	export enum DirectConnectGatewayAttachmentAttachmentType { TransitVirtualInterface = 0, PrivateVirtualInterface = 1 }

	export interface DescribeDirectConnectGatewayAttachmentsRequest {
		directConnectGatewayId?: string | null;
		virtualInterfaceId?: string | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewayAttachmentsRequestFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewayAttachmentsRequestFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewayAttachmentsRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewaysResult {
		directConnectGateways?: Array<DirectConnectGateway>;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewaysResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewaysResultFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewaysResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDirectConnectGatewaysRequest {
		directConnectGatewayId?: string | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface DescribeDirectConnectGatewaysRequestFormProperties {
		directConnectGatewayId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectConnectGatewaysRequestFormGroup() {
		return new FormGroup<DescribeDirectConnectGatewaysRequestFormProperties>({
			directConnectGatewayId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeHostedConnectionsRequest {

		/** Required */
		connectionId: string;
	}
	export interface DescribeHostedConnectionsRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHostedConnectionsRequestFormGroup() {
		return new FormGroup<DescribeHostedConnectionsRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeInterconnectLoaResponse {

		/** Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection. */
		loa?: Loa;
	}
	export interface DescribeInterconnectLoaResponseFormProperties {
	}
	export function CreateDescribeInterconnectLoaResponseFormGroup() {
		return new FormGroup<DescribeInterconnectLoaResponseFormProperties>({
		});

	}

	export interface DescribeInterconnectLoaRequest {

		/** Required */
		interconnectId: string;
		providerName?: string | null;
		loaContentType?: DescribeInterconnectLoaRequestLoaContentType | null;
	}
	export interface DescribeInterconnectLoaRequestFormProperties {

		/** Required */
		interconnectId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
		loaContentType: FormControl<DescribeInterconnectLoaRequestLoaContentType | null | undefined>,
	}
	export function CreateDescribeInterconnectLoaRequestFormGroup() {
		return new FormGroup<DescribeInterconnectLoaRequestFormProperties>({
			interconnectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerName: new FormControl<string | null | undefined>(undefined),
			loaContentType: new FormControl<DescribeInterconnectLoaRequestLoaContentType | null | undefined>(undefined),
		});

	}

	export enum DescribeInterconnectLoaRequestLoaContentType { application_pdf = 0 }

	export interface Interconnects {
		interconnects?: Array<Interconnect>;
	}
	export interface InterconnectsFormProperties {
	}
	export function CreateInterconnectsFormGroup() {
		return new FormGroup<InterconnectsFormProperties>({
		});

	}

	export interface DescribeInterconnectsRequest {
		interconnectId?: string | null;
	}
	export interface DescribeInterconnectsRequestFormProperties {
		interconnectId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInterconnectsRequestFormGroup() {
		return new FormGroup<DescribeInterconnectsRequestFormProperties>({
			interconnectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Lags {
		lags?: Array<Lag>;
	}
	export interface LagsFormProperties {
	}
	export function CreateLagsFormGroup() {
		return new FormGroup<LagsFormProperties>({
		});

	}

	export interface DescribeLagsRequest {
		lagId?: string | null;
	}
	export interface DescribeLagsRequestFormProperties {
		lagId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLagsRequestFormGroup() {
		return new FormGroup<DescribeLagsRequestFormProperties>({
			lagId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLoaRequest {

		/** Required */
		connectionId: string;
		providerName?: string | null;
		loaContentType?: DescribeLoaRequestLoaContentType | null;
	}
	export interface DescribeLoaRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,
		providerName: FormControl<string | null | undefined>,
		loaContentType: FormControl<DescribeLoaRequestLoaContentType | null | undefined>,
	}
	export function CreateDescribeLoaRequestFormGroup() {
		return new FormGroup<DescribeLoaRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerName: new FormControl<string | null | undefined>(undefined),
			loaContentType: new FormControl<DescribeLoaRequestLoaContentType | null | undefined>(undefined),
		});

	}

	export enum DescribeLoaRequestLoaContentType { application_pdf = 0 }

	export interface Locations {
		locations?: Array<Location>;
	}
	export interface LocationsFormProperties {
	}
	export function CreateLocationsFormGroup() {
		return new FormGroup<LocationsFormProperties>({
		});

	}


	/** Information about an AWS Direct Connect location. */
	export interface Location {
		locationCode?: string | null;
		region?: string | null;
		availablePortSpeeds?: Array<string>;
		availableProviders?: Array<string>;
	}

	/** Information about an AWS Direct Connect location. */
	export interface LocationFormProperties {
		locationCode: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			locationCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsResponse {
		resourceTags?: Array<ResourceTag>;
	}
	export interface DescribeTagsResponseFormProperties {
	}
	export function CreateDescribeTagsResponseFormGroup() {
		return new FormGroup<DescribeTagsResponseFormProperties>({
		});

	}


	/** Information about a tag associated with an AWS Direct Connect resource. */
	export interface ResourceTag {
		resourceArn?: string | null;

		/** Minimum items: 1 */
		tags?: Array<Tag>;
	}

	/** Information about a tag associated with an AWS Direct Connect resource. */
	export interface ResourceTagFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsRequest {

		/** Required */
		resourceArns: Array<string>;
	}
	export interface DescribeTagsRequestFormProperties {
	}
	export function CreateDescribeTagsRequestFormGroup() {
		return new FormGroup<DescribeTagsRequestFormProperties>({
		});

	}

	export interface VirtualGateways {
		virtualGateways?: Array<VirtualGateway>;
	}
	export interface VirtualGatewaysFormProperties {
	}
	export function CreateVirtualGatewaysFormGroup() {
		return new FormGroup<VirtualGatewaysFormProperties>({
		});

	}


	/** Information about a virtual private gateway for a private virtual interface. */
	export interface VirtualGateway {
		virtualGatewayId?: string | null;
		virtualGatewayState?: string | null;
	}

	/** Information about a virtual private gateway for a private virtual interface. */
	export interface VirtualGatewayFormProperties {
		virtualGatewayId: FormControl<string | null | undefined>,
		virtualGatewayState: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayFormGroup() {
		return new FormGroup<VirtualGatewayFormProperties>({
			virtualGatewayId: new FormControl<string | null | undefined>(undefined),
			virtualGatewayState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VirtualInterfaces {
		virtualInterfaces?: Array<VirtualInterface>;
	}
	export interface VirtualInterfacesFormProperties {
	}
	export function CreateVirtualInterfacesFormGroup() {
		return new FormGroup<VirtualInterfacesFormProperties>({
		});

	}

	export interface DescribeVirtualInterfacesRequest {
		connectionId?: string | null;
		virtualInterfaceId?: string | null;
	}
	export interface DescribeVirtualInterfacesRequestFormProperties {
		connectionId: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVirtualInterfacesRequestFormGroup() {
		return new FormGroup<DescribeVirtualInterfacesRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateConnectionFromLagRequest {

		/** Required */
		connectionId: string;

		/** Required */
		lagId: string;
	}
	export interface DisassociateConnectionFromLagRequestFormProperties {

		/** Required */
		connectionId: FormControl<string | null | undefined>,

		/** Required */
		lagId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateConnectionFromLagRequestFormGroup() {
		return new FormGroup<DisassociateConnectionFromLagRequestFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVirtualInterfaceTestHistoryResponse {
		virtualInterfaceTestHistory?: Array<VirtualInterfaceTestHistory>;
		nextToken?: string | null;
	}
	export interface ListVirtualInterfaceTestHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualInterfaceTestHistoryResponseFormGroup() {
		return new FormGroup<ListVirtualInterfaceTestHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the virtual interface failover test. */
	export interface VirtualInterfaceTestHistory {
		testId?: string | null;
		virtualInterfaceId?: string | null;
		bgpPeers?: Array<string>;
		status?: string | null;
		ownerAccount?: string | null;
		testDurationInMinutes?: number | null;
		startTime?: Date | null;
		endTime?: Date | null;
	}

	/** Information about the virtual interface failover test. */
	export interface VirtualInterfaceTestHistoryFormProperties {
		testId: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		ownerAccount: FormControl<string | null | undefined>,
		testDurationInMinutes: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateVirtualInterfaceTestHistoryFormGroup() {
		return new FormGroup<VirtualInterfaceTestHistoryFormProperties>({
			testId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			ownerAccount: new FormControl<string | null | undefined>(undefined),
			testDurationInMinutes: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListVirtualInterfaceTestHistoryRequest {
		testId?: string | null;
		virtualInterfaceId?: string | null;
		bgpPeers?: Array<string>;
		status?: string | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface ListVirtualInterfaceTestHistoryRequestFormProperties {
		testId: FormControl<string | null | undefined>,
		virtualInterfaceId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualInterfaceTestHistoryRequestFormGroup() {
		return new FormGroup<ListVirtualInterfaceTestHistoryRequestFormProperties>({
			testId: new FormControl<string | null | undefined>(undefined),
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartBgpFailoverTestResponse {

		/** Information about the virtual interface failover test. */
		virtualInterfaceTest?: VirtualInterfaceTestHistory;
	}
	export interface StartBgpFailoverTestResponseFormProperties {
	}
	export function CreateStartBgpFailoverTestResponseFormGroup() {
		return new FormGroup<StartBgpFailoverTestResponseFormProperties>({
		});

	}

	export interface StartBgpFailoverTestRequest {

		/** Required */
		virtualInterfaceId: string;
		bgpPeers?: Array<string>;
		testDurationInMinutes?: number | null;
	}
	export interface StartBgpFailoverTestRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
		testDurationInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStartBgpFailoverTestRequestFormGroup() {
		return new FormGroup<StartBgpFailoverTestRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			testDurationInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StopBgpFailoverTestResponse {

		/** Information about the virtual interface failover test. */
		virtualInterfaceTest?: VirtualInterfaceTestHistory;
	}
	export interface StopBgpFailoverTestResponseFormProperties {
	}
	export function CreateStopBgpFailoverTestResponseFormGroup() {
		return new FormGroup<StopBgpFailoverTestResponseFormProperties>({
		});

	}

	export interface StopBgpFailoverTestRequest {

		/** Required */
		virtualInterfaceId: string;
	}
	export interface StopBgpFailoverTestRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateStopBgpFailoverTestRequestFormGroup() {
		return new FormGroup<StopBgpFailoverTestRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDirectConnectGatewayAssociationResult {

		/** Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway. */
		directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
	}
	export interface UpdateDirectConnectGatewayAssociationResultFormProperties {
	}
	export function CreateUpdateDirectConnectGatewayAssociationResultFormGroup() {
		return new FormGroup<UpdateDirectConnectGatewayAssociationResultFormProperties>({
		});

	}

	export interface UpdateDirectConnectGatewayAssociationRequest {
		associationId?: string | null;
		addAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
		removeAllowedPrefixesToDirectConnectGateway?: Array<RouteFilterPrefix>;
	}
	export interface UpdateDirectConnectGatewayAssociationRequestFormProperties {
		associationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDirectConnectGatewayAssociationRequestFormGroup() {
		return new FormGroup<UpdateDirectConnectGatewayAssociationRequestFormProperties>({
			associationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLagRequest {

		/** Required */
		lagId: string;
		lagName?: string | null;
		minimumLinks?: number | null;
	}
	export interface UpdateLagRequestFormProperties {

		/** Required */
		lagId: FormControl<string | null | undefined>,
		lagName: FormControl<string | null | undefined>,
		minimumLinks: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLagRequestFormGroup() {
		return new FormGroup<UpdateLagRequestFormProperties>({
			lagId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lagName: new FormControl<string | null | undefined>(undefined),
			minimumLinks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualInterfaceAttributesRequest {

		/** Required */
		virtualInterfaceId: string;
		mtu?: number | null;
	}
	export interface UpdateVirtualInterfaceAttributesRequestFormProperties {

		/** Required */
		virtualInterfaceId: FormControl<string | null | undefined>,
		mtu: FormControl<number | null | undefined>,
	}
	export function CreateUpdateVirtualInterfaceAttributesRequestFormGroup() {
		return new FormGroup<UpdateVirtualInterfaceAttributesRequestFormProperties>({
			virtualInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mtu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AddressFamily { ipv4 = 0, ipv6 = 1 }

	export enum GatewayType { virtualPrivateGateway = 0, transitGateway = 1 }

	export enum BGPPeerState { verifying = 0, pending = 1, available = 2, deleting = 3, deleted = 4 }

	export enum BGPStatus { up = 0, down = 1, unknown = 2 }

	export enum ConnectionState { ordering = 0, requested = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum VirtualInterfaceState { confirming = 0, verifying = 1, pending = 2, available = 3, down = 4, deleting = 5, deleted = 6, rejected = 7, unknown = 8 }

	export enum HasLogicalRedundancy { unknown = 0, yes = 1, no = 2 }

	export enum InterconnectState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	export enum LoaContentType { application_pdf = 0 }

	export enum DirectConnectGatewayState { pending = 0, available = 1, deleting = 2, deleted = 3 }

	export enum DirectConnectGatewayAssociationState { associating = 0, associated = 1, disassociating = 2, disassociated = 3, updating = 4 }

	export enum DirectConnectGatewayAssociationProposalState { requested = 0, accepted = 1, deleted = 2 }

	export enum DirectConnectGatewayAttachmentState { attaching = 0, attached = 1, detaching = 2, detached = 3 }

	export enum DirectConnectGatewayAttachmentType { TransitVirtualInterface = 0, PrivateVirtualInterface = 1 }

	export enum LagState { requested = 0, pending = 1, available = 2, down = 3, deleting = 4, deleted = 5, unknown = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.
		 * Post #X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal
		 * @return {AcceptDirectConnectGatewayAssociationProposalResult} Success
		 */
		AcceptDirectConnectGatewayAssociationProposal(requestBody: AcceptDirectConnectGatewayAssociationProposalRequest): Observable<AcceptDirectConnectGatewayAssociationProposalResult> {
			return this.http.post<AcceptDirectConnectGatewayAssociationProposalResult>(this.baseUri + '#X-Amz-Target=OvertureService.AcceptDirectConnectGatewayAssociationProposal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect
		 * @return {Connection} Success
		 */
		AllocateConnectionOnInterconnect(requestBody: AllocateConnectionOnInterconnectRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.AllocateConnectionOnInterconnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.AllocateHostedConnection
		 * @return {Connection} Success
		 */
		AllocateHostedConnection(requestBody: AllocateHostedConnectionRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.AllocateHostedConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
		 * Post #X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AllocatePrivateVirtualInterface(requestBody: AllocatePrivateVirtualInterfaceRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.AllocatePrivateVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
		 * Post #X-Amz-Target=OvertureService.AllocatePublicVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AllocatePublicVirtualInterface(requestBody: AllocatePublicVirtualInterfaceRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.AllocatePublicVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
		 * Post #X-Amz-Target=OvertureService.AllocateTransitVirtualInterface
		 * @return {AllocateTransitVirtualInterfaceResult} Success
		 */
		AllocateTransitVirtualInterface(requestBody: AllocateTransitVirtualInterfaceRequest): Observable<AllocateTransitVirtualInterfaceResult> {
			return this.http.post<AllocateTransitVirtualInterfaceResult>(this.baseUri + '#X-Amz-Target=OvertureService.AllocateTransitVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS is interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
		 * Post #X-Amz-Target=OvertureService.AssociateConnectionWithLag
		 * @return {Connection} Success
		 */
		AssociateConnectionWithLag(requestBody: AssociateConnectionWithLagRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.AssociateConnectionWithLag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.AssociateHostedConnection
		 * @return {Connection} Success
		 */
		AssociateHostedConnection(requestBody: AssociateHostedConnectionRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.AssociateHostedConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
		 * Post #X-Amz-Target=OvertureService.AssociateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		AssociateVirtualInterface(requestBody: AssociateVirtualInterfaceRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.AssociateVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
		 * Post #X-Amz-Target=OvertureService.ConfirmConnection
		 * @return {ConfirmConnectionResponse} Success
		 */
		ConfirmConnection(requestBody: ConfirmConnectionRequest): Observable<ConfirmConnectionResponse> {
			return this.http.post<ConfirmConnectionResponse>(this.baseUri + '#X-Amz-Target=OvertureService.ConfirmConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts ownership of a private virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
		 * Post #X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface
		 * @return {ConfirmPrivateVirtualInterfaceResponse} Success
		 */
		ConfirmPrivateVirtualInterface(requestBody: ConfirmPrivateVirtualInterfaceRequest): Observable<ConfirmPrivateVirtualInterfaceResponse> {
			return this.http.post<ConfirmPrivateVirtualInterfaceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.ConfirmPrivateVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts ownership of a public virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
		 * Post #X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface
		 * @return {ConfirmPublicVirtualInterfaceResponse} Success
		 */
		ConfirmPublicVirtualInterface(requestBody: ConfirmPublicVirtualInterfaceRequest): Observable<ConfirmPublicVirtualInterfaceResponse> {
			return this.http.post<ConfirmPublicVirtualInterfaceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.ConfirmPublicVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts ownership of a transit virtual interface created by another AWS account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
		 * Post #X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface
		 * @return {ConfirmTransitVirtualInterfaceResponse} Success
		 */
		ConfirmTransitVirtualInterface(requestBody: ConfirmTransitVirtualInterfaceRequest): Observable<ConfirmTransitVirtualInterfaceResponse> {
			return this.http.post<ConfirmTransitVirtualInterfaceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.ConfirmTransitVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>
		 * Post #X-Amz-Target=OvertureService.CreateBGPPeer
		 * @return {CreateBGPPeerResponse} Success
		 */
		CreateBGPPeer(requestBody: CreateBGPPeerRequest): Observable<CreateBGPPeerResponse> {
			return this.http.post<CreateBGPPeerResponse>(this.baseUri + '#X-Amz-Target=OvertureService.CreateBGPPeer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p> <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
		 * Post #X-Amz-Target=OvertureService.CreateConnection
		 * @return {Connection} Success
		 */
		CreateConnection(requestBody: CreateConnectionRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any AWS Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
		 * Post #X-Amz-Target=OvertureService.CreateDirectConnectGateway
		 * @return {CreateDirectConnectGatewayResult} Success
		 */
		CreateDirectConnectGateway(requestBody: CreateDirectConnectGatewayRequest): Observable<CreateDirectConnectGatewayResult> {
			return this.http.post<CreateDirectConnectGatewayResult>(this.baseUri + '#X-Amz-Target=OvertureService.CreateDirectConnectGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
		 * Post #X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation
		 * @return {CreateDirectConnectGatewayAssociationResult} Success
		 */
		CreateDirectConnectGatewayAssociation(requestBody: CreateDirectConnectGatewayAssociationRequest): Observable<CreateDirectConnectGatewayAssociationResult> {
			return this.http.post<CreateDirectConnectGatewayAssociationResult>(this.baseUri + '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can only associate a Direct Connect gateway and virtual private gateway or transit gateway when the account that owns the Direct Connect gateway and the account that owns the virtual private gateway or transit gateway have the same AWS Payer ID.</p>
		 * Post #X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal
		 * @return {CreateDirectConnectGatewayAssociationProposalResult} Success
		 */
		CreateDirectConnectGatewayAssociationProposal(requestBody: CreateDirectConnectGatewayAssociationProposalRequest): Observable<CreateDirectConnectGatewayAssociationProposalResult> {
			return this.http.post<CreateDirectConnectGatewayAssociationProposalResult>(this.baseUri + '#X-Amz-Target=OvertureService.CreateDirectConnectGatewayAssociationProposal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an interconnect between an AWS Direct Connect Partner's network and a specific AWS Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide AWS Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the AWS Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect Partner.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.CreateInterconnect
		 * @return {Interconnect} Success
		 */
		CreateInterconnect(requestBody: CreateInterconnectRequest): Observable<Interconnect> {
			return this.http.post<Interconnect>(this.baseUri + '#X-Amz-Target=OvertureService.CreateInterconnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint.</p> <p>You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the AWS account used to create a LAG is a registered AWS Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
		 * Post #X-Amz-Target=OvertureService.CreateLag
		 * @return {Lag} Success
		 */
		CreateLag(requestBody: CreateLagRequest): Observable<Lag> {
			return this.http.post<Lag>(this.baseUri + '#X-Amz-Target=OvertureService.CreateLag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post #X-Amz-Target=OvertureService.CreatePrivateVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		CreatePrivateVirtualInterface(requestBody: CreatePrivateVirtualInterfaceRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.CreatePrivateVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
		 * Post #X-Amz-Target=OvertureService.CreatePublicVirtualInterface
		 * @return {VirtualInterface} Success
		 */
		CreatePublicVirtualInterface(requestBody: CreatePublicVirtualInterfaceRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.CreatePublicVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post #X-Amz-Target=OvertureService.CreateTransitVirtualInterface
		 * @return {CreateTransitVirtualInterfaceResult} Success
		 */
		CreateTransitVirtualInterface(requestBody: CreateTransitVirtualInterfaceRequest): Observable<CreateTransitVirtualInterfaceResult> {
			return this.http.post<CreateTransitVirtualInterfaceResult>(this.baseUri + '#X-Amz-Target=OvertureService.CreateTransitVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
		 * Post #X-Amz-Target=OvertureService.DeleteBGPPeer
		 * @return {DeleteBGPPeerResponse} Success
		 */
		DeleteBGPPeer(requestBody: DeleteBGPPeerRequest): Observable<DeleteBGPPeerResponse> {
			return this.http.post<DeleteBGPPeerResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteBGPPeer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the AWS Direct Connect location, you must cancel your service with them separately.</p>
		 * Post #X-Amz-Target=OvertureService.DeleteConnection
		 * @return {Connection} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.
		 * Post #X-Amz-Target=OvertureService.DeleteDirectConnectGateway
		 * @return {DeleteDirectConnectGatewayResult} Success
		 */
		DeleteDirectConnectGateway(requestBody: DeleteDirectConnectGatewayRequest): Observable<DeleteDirectConnectGatewayResult> {
			return this.http.post<DeleteDirectConnectGatewayResult>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteDirectConnectGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
		 * Post #X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation
		 * @return {DeleteDirectConnectGatewayAssociationResult} Success
		 */
		DeleteDirectConnectGatewayAssociation(requestBody: DeleteDirectConnectGatewayAssociationRequest): Observable<DeleteDirectConnectGatewayAssociationResult> {
			return this.http.post<DeleteDirectConnectGatewayAssociationResult>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.
		 * Post #X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal
		 * @return {DeleteDirectConnectGatewayAssociationProposalResult} Success
		 */
		DeleteDirectConnectGatewayAssociationProposal(requestBody: DeleteDirectConnectGatewayAssociationProposalRequest): Observable<DeleteDirectConnectGatewayAssociationProposalResult> {
			return this.http.post<DeleteDirectConnectGatewayAssociationProposalResult>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteDirectConnectGatewayAssociationProposal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.DeleteInterconnect
		 * @return {DeleteInterconnectResponse} Success
		 */
		DeleteInterconnect(requestBody: DeleteInterconnectRequest): Observable<DeleteInterconnectResponse> {
			return this.http.post<DeleteInterconnectResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteInterconnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
		 * Post #X-Amz-Target=OvertureService.DeleteLag
		 * @return {Lag} Success
		 */
		DeleteLag(requestBody: DeleteLagRequest): Observable<Lag> {
			return this.http.post<Lag>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteLag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a virtual interface.
		 * Post #X-Amz-Target=OvertureService.DeleteVirtualInterface
		 * @return {DeleteVirtualInterfaceResponse} Success
		 */
		DeleteVirtualInterface(requestBody: DeleteVirtualInterfaceRequest): Observable<DeleteVirtualInterfaceResponse> {
			return this.http.post<DeleteVirtualInterfaceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DeleteVirtualInterface', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post #X-Amz-Target=OvertureService.DescribeConnectionLoa
		 * @return {DescribeConnectionLoaResponse} Success
		 */
		DescribeConnectionLoa(requestBody: DescribeConnectionLoaRequest): Observable<DescribeConnectionLoaResponse> {
			return this.http.post<DescribeConnectionLoaResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeConnectionLoa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the specified connection or all connections in this Region.
		 * Post #X-Amz-Target=OvertureService.DescribeConnections
		 * @return {Connections} Success
		 */
		DescribeConnections(requestBody: DescribeConnectionsRequest): Observable<Connections> {
			return this.http.post<Connections>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect
		 * @return {Connections} Success
		 */
		DescribeConnectionsOnInterconnect(requestBody: DescribeConnectionsOnInterconnectRequest): Observable<Connections> {
			return this.http.post<Connections>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeConnectionsOnInterconnect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.
		 * Post #X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals
		 * @return {DescribeDirectConnectGatewayAssociationProposalsResult} Success
		 */
		DescribeDirectConnectGatewayAssociationProposals(requestBody: DescribeDirectConnectGatewayAssociationProposalsRequest): Observable<DescribeDirectConnectGatewayAssociationProposalsResult> {
			return this.http.post<DescribeDirectConnectGatewayAssociationProposalsResult>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociationProposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the associations between your Direct Connect gateways and virtual private gateways. You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify a Direct Connect gateway, the response contains all virtual private gateways associated with the Direct Connect gateway. If you specify a virtual private gateway, the response contains all Direct Connect gateways associated with the virtual private gateway. If you specify both, the response contains the association between the Direct Connect gateway and the virtual private gateway.
		 * Post #X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations
		 * @return {DescribeDirectConnectGatewayAssociationsResult} Success
		 */
		DescribeDirectConnectGatewayAssociations(requestBody: DescribeDirectConnectGatewayAssociationsRequest): Observable<DescribeDirectConnectGatewayAssociationsResult> {
			return this.http.post<DescribeDirectConnectGatewayAssociationsResult>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
		 * Post #X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments
		 * @return {DescribeDirectConnectGatewayAttachmentsResult} Success
		 */
		DescribeDirectConnectGatewayAttachments(requestBody: DescribeDirectConnectGatewayAttachmentsRequest): Observable<DescribeDirectConnectGatewayAttachmentsResult> {
			return this.http.post<DescribeDirectConnectGatewayAttachmentsResult>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeDirectConnectGatewayAttachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
		 * Post #X-Amz-Target=OvertureService.DescribeDirectConnectGateways
		 * @return {DescribeDirectConnectGatewaysResult} Success
		 */
		DescribeDirectConnectGateways(requestBody: DescribeDirectConnectGatewaysRequest): Observable<DescribeDirectConnectGatewaysResult> {
			return this.http.post<DescribeDirectConnectGatewaysResult>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeDirectConnectGateways', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
		 * Post #X-Amz-Target=OvertureService.DescribeHostedConnections
		 * @return {Connections} Success
		 */
		DescribeHostedConnections(requestBody: DescribeHostedConnectionsRequest): Observable<Connections> {
			return this.http.post<Connections>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeHostedConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post #X-Amz-Target=OvertureService.DescribeInterconnectLoa
		 * @return {DescribeInterconnectLoaResponse} Success
		 */
		DescribeInterconnectLoa(requestBody: DescribeInterconnectLoaRequest): Observable<DescribeInterconnectLoaResponse> {
			return this.http.post<DescribeInterconnectLoaResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeInterconnectLoa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the interconnects owned by the AWS account or only the specified interconnect.
		 * Post #X-Amz-Target=OvertureService.DescribeInterconnects
		 * @return {Interconnects} Success
		 */
		DescribeInterconnects(requestBody: DescribeInterconnectsRequest): Observable<Interconnects> {
			return this.http.post<Interconnects>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeInterconnects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes all your link aggregation groups (LAG) or the specified LAG.
		 * Post #X-Amz-Target=OvertureService.DescribeLags
		 * @return {Lags} Success
		 */
		DescribeLags(requestBody: DescribeLagsRequest): Observable<Lags> {
			return this.http.post<Lags>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeLags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
		 * Post #X-Amz-Target=OvertureService.DescribeLoa
		 * @return {Loa} Success
		 */
		DescribeLoa(requestBody: DescribeLoaRequest): Observable<Loa> {
			return this.http.post<Loa>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeLoa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.
		 * Post #X-Amz-Target=OvertureService.DescribeLocations
		 * @return {Locations} Success
		 */
		DescribeLocations(): Observable<Locations> {
			return this.http.post<Locations>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeLocations', null, {});
		}

		/**
		 * Describes the tags associated with the specified AWS Direct Connect resources.
		 * Post #X-Amz-Target=OvertureService.DescribeTags
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(requestBody: DescribeTagsRequest): Observable<DescribeTagsResponse> {
			return this.http.post<DescribeTagsResponse>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the virtual private gateways owned by the AWS account.</p> <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
		 * Post #X-Amz-Target=OvertureService.DescribeVirtualGateways
		 * @return {VirtualGateways} Success
		 */
		DescribeVirtualGateways(): Observable<VirtualGateways> {
			return this.http.post<VirtualGateways>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeVirtualGateways', null, {});
		}

		/**
		 * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
		 * Post #X-Amz-Target=OvertureService.DescribeVirtualInterfaces
		 * @return {VirtualInterfaces} Success
		 */
		DescribeVirtualInterfaces(requestBody: DescribeVirtualInterfacesRequest): Observable<VirtualInterfaces> {
			return this.http.post<VirtualInterfaces>(this.baseUri + '#X-Amz-Target=OvertureService.DescribeVirtualInterfaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
		 * Post #X-Amz-Target=OvertureService.DisassociateConnectionFromLag
		 * @return {Connection} Success
		 */
		DisassociateConnectionFromLag(requestBody: DisassociateConnectionFromLagRequest): Observable<Connection> {
			return this.http.post<Connection>(this.baseUri + '#X-Amz-Target=OvertureService.DisassociateConnectionFromLag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the virtual interface failover test history.
		 * Post #X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory
		 * @return {ListVirtualInterfaceTestHistoryResponse} Success
		 */
		ListVirtualInterfaceTestHistory(requestBody: ListVirtualInterfaceTestHistoryRequest): Observable<ListVirtualInterfaceTestHistoryResponse> {
			return this.http.post<ListVirtualInterfaceTestHistoryResponse>(this.baseUri + '#X-Amz-Target=OvertureService.ListVirtualInterfaceTestHistory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
		 * Post #X-Amz-Target=OvertureService.StartBgpFailoverTest
		 * @return {StartBgpFailoverTestResponse} Success
		 */
		StartBgpFailoverTest(requestBody: StartBgpFailoverTestRequest): Observable<StartBgpFailoverTestResponse> {
			return this.http.post<StartBgpFailoverTestResponse>(this.baseUri + '#X-Amz-Target=OvertureService.StartBgpFailoverTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the virtual interface failover test.
		 * Post #X-Amz-Target=OvertureService.StopBgpFailoverTest
		 * @return {StopBgpFailoverTestResponse} Success
		 */
		StopBgpFailoverTest(requestBody: StopBgpFailoverTestRequest): Observable<StopBgpFailoverTestResponse> {
			return this.http.post<StopBgpFailoverTestResponse>(this.baseUri + '#X-Amz-Target=OvertureService.StopBgpFailoverTest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
		 * Post #X-Amz-Target=OvertureService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified AWS Direct Connect resource.
		 * Post #X-Amz-Target=OvertureService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=OvertureService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
		 * Post #X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation
		 * @return {UpdateDirectConnectGatewayAssociationResult} Success
		 */
		UpdateDirectConnectGatewayAssociation(requestBody: UpdateDirectConnectGatewayAssociationRequest): Observable<UpdateDirectConnectGatewayAssociationResult> {
			return this.http.post<UpdateDirectConnectGatewayAssociationResult>(this.baseUri + '#X-Amz-Target=OvertureService.UpdateDirectConnectGatewayAssociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> </ul> <p>When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value and the number of operational connections falls below the specified value, the LAG automatically goes down to avoid over-utilization of the remaining connections. Adjust this value with care, as it could force the LAG down if it is set higher than the current number of operational connections.</p>
		 * Post #X-Amz-Target=OvertureService.UpdateLag
		 * @return {Lag} Success
		 */
		UpdateLag(requestBody: UpdateLagRequest): Observable<Lag> {
			return this.http.post<Lag>(this.baseUri + '#X-Amz-Target=OvertureService.UpdateLag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
		 * Post #X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes
		 * @return {VirtualInterface} Success
		 */
		UpdateVirtualInterfaceAttributes(requestBody: UpdateVirtualInterfaceAttributesRequest): Observable<VirtualInterface> {
			return this.http.post<VirtualInterface>(this.baseUri + '#X-Amz-Target=OvertureService.UpdateVirtualInterfaceAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptDirectConnectGatewayAssociationProposalX_Amz_Target { OvertureService_AcceptDirectConnectGatewayAssociationProposal = 0 }

	export enum AllocateConnectionOnInterconnectX_Amz_Target { OvertureService_AllocateConnectionOnInterconnect = 0 }

	export enum AllocateHostedConnectionX_Amz_Target { OvertureService_AllocateHostedConnection = 0 }

	export enum AllocatePrivateVirtualInterfaceX_Amz_Target { OvertureService_AllocatePrivateVirtualInterface = 0 }

	export enum AllocatePublicVirtualInterfaceX_Amz_Target { OvertureService_AllocatePublicVirtualInterface = 0 }

	export enum AllocateTransitVirtualInterfaceX_Amz_Target { OvertureService_AllocateTransitVirtualInterface = 0 }

	export enum AssociateConnectionWithLagX_Amz_Target { OvertureService_AssociateConnectionWithLag = 0 }

	export enum AssociateHostedConnectionX_Amz_Target { OvertureService_AssociateHostedConnection = 0 }

	export enum AssociateVirtualInterfaceX_Amz_Target { OvertureService_AssociateVirtualInterface = 0 }

	export enum ConfirmConnectionX_Amz_Target { OvertureService_ConfirmConnection = 0 }

	export enum ConfirmPrivateVirtualInterfaceX_Amz_Target { OvertureService_ConfirmPrivateVirtualInterface = 0 }

	export enum ConfirmPublicVirtualInterfaceX_Amz_Target { OvertureService_ConfirmPublicVirtualInterface = 0 }

	export enum ConfirmTransitVirtualInterfaceX_Amz_Target { OvertureService_ConfirmTransitVirtualInterface = 0 }

	export enum CreateBGPPeerX_Amz_Target { OvertureService_CreateBGPPeer = 0 }

	export enum CreateConnectionX_Amz_Target { OvertureService_CreateConnection = 0 }

	export enum CreateDirectConnectGatewayX_Amz_Target { OvertureService_CreateDirectConnectGateway = 0 }

	export enum CreateDirectConnectGatewayAssociationX_Amz_Target { OvertureService_CreateDirectConnectGatewayAssociation = 0 }

	export enum CreateDirectConnectGatewayAssociationProposalX_Amz_Target { OvertureService_CreateDirectConnectGatewayAssociationProposal = 0 }

	export enum CreateInterconnectX_Amz_Target { OvertureService_CreateInterconnect = 0 }

	export enum CreateLagX_Amz_Target { OvertureService_CreateLag = 0 }

	export enum CreatePrivateVirtualInterfaceX_Amz_Target { OvertureService_CreatePrivateVirtualInterface = 0 }

	export enum CreatePublicVirtualInterfaceX_Amz_Target { OvertureService_CreatePublicVirtualInterface = 0 }

	export enum CreateTransitVirtualInterfaceX_Amz_Target { OvertureService_CreateTransitVirtualInterface = 0 }

	export enum DeleteBGPPeerX_Amz_Target { OvertureService_DeleteBGPPeer = 0 }

	export enum DeleteConnectionX_Amz_Target { OvertureService_DeleteConnection = 0 }

	export enum DeleteDirectConnectGatewayX_Amz_Target { OvertureService_DeleteDirectConnectGateway = 0 }

	export enum DeleteDirectConnectGatewayAssociationX_Amz_Target { OvertureService_DeleteDirectConnectGatewayAssociation = 0 }

	export enum DeleteDirectConnectGatewayAssociationProposalX_Amz_Target { OvertureService_DeleteDirectConnectGatewayAssociationProposal = 0 }

	export enum DeleteInterconnectX_Amz_Target { OvertureService_DeleteInterconnect = 0 }

	export enum DeleteLagX_Amz_Target { OvertureService_DeleteLag = 0 }

	export enum DeleteVirtualInterfaceX_Amz_Target { OvertureService_DeleteVirtualInterface = 0 }

	export enum DescribeConnectionLoaX_Amz_Target { OvertureService_DescribeConnectionLoa = 0 }

	export enum DescribeConnectionsX_Amz_Target { OvertureService_DescribeConnections = 0 }

	export enum DescribeConnectionsOnInterconnectX_Amz_Target { OvertureService_DescribeConnectionsOnInterconnect = 0 }

	export enum DescribeDirectConnectGatewayAssociationProposalsX_Amz_Target { OvertureService_DescribeDirectConnectGatewayAssociationProposals = 0 }

	export enum DescribeDirectConnectGatewayAssociationsX_Amz_Target { OvertureService_DescribeDirectConnectGatewayAssociations = 0 }

	export enum DescribeDirectConnectGatewayAttachmentsX_Amz_Target { OvertureService_DescribeDirectConnectGatewayAttachments = 0 }

	export enum DescribeDirectConnectGatewaysX_Amz_Target { OvertureService_DescribeDirectConnectGateways = 0 }

	export enum DescribeHostedConnectionsX_Amz_Target { OvertureService_DescribeHostedConnections = 0 }

	export enum DescribeInterconnectLoaX_Amz_Target { OvertureService_DescribeInterconnectLoa = 0 }

	export enum DescribeInterconnectsX_Amz_Target { OvertureService_DescribeInterconnects = 0 }

	export enum DescribeLagsX_Amz_Target { OvertureService_DescribeLags = 0 }

	export enum DescribeLoaX_Amz_Target { OvertureService_DescribeLoa = 0 }

	export enum DescribeLocationsX_Amz_Target { OvertureService_DescribeLocations = 0 }

	export enum DescribeTagsX_Amz_Target { OvertureService_DescribeTags = 0 }

	export enum DescribeVirtualGatewaysX_Amz_Target { OvertureService_DescribeVirtualGateways = 0 }

	export enum DescribeVirtualInterfacesX_Amz_Target { OvertureService_DescribeVirtualInterfaces = 0 }

	export enum DisassociateConnectionFromLagX_Amz_Target { OvertureService_DisassociateConnectionFromLag = 0 }

	export enum ListVirtualInterfaceTestHistoryX_Amz_Target { OvertureService_ListVirtualInterfaceTestHistory = 0 }

	export enum StartBgpFailoverTestX_Amz_Target { OvertureService_StartBgpFailoverTest = 0 }

	export enum StopBgpFailoverTestX_Amz_Target { OvertureService_StopBgpFailoverTest = 0 }

	export enum TagResourceX_Amz_Target { OvertureService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { OvertureService_UntagResource = 0 }

	export enum UpdateDirectConnectGatewayAssociationX_Amz_Target { OvertureService_UpdateDirectConnectGatewayAssociation = 0 }

	export enum UpdateLagX_Amz_Target { OvertureService_UpdateLag = 0 }

	export enum UpdateVirtualInterfaceAttributesX_Amz_Target { OvertureService_UpdateVirtualInterfaceAttributes = 0 }

}

