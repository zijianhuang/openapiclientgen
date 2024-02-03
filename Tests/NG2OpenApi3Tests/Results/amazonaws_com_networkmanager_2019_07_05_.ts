import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptAttachmentResponse {
		Attachment?: Attachment;
	}
	export interface AcceptAttachmentResponseFormProperties {
	}
	export function CreateAcceptAttachmentResponseFormGroup() {
		return new FormGroup<AcceptAttachmentResponseFormProperties>({
		});

	}


	/** Describes a core network attachment. */
	export interface Attachment {
		CoreNetworkId?: string;
		CoreNetworkArn?: string;
		AttachmentId?: string;
		OwnerAccountId?: string;
		AttachmentType?: AttachmentType;
		State?: AttachmentState;
		EdgeLocation?: string;
		ResourceArn?: string;
		AttachmentPolicyRuleNumber?: number | null;
		SegmentName?: string;
		Tags?: Array<Tag>;
		ProposedSegmentChange?: ProposedSegmentChange;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}

	/** Describes a core network attachment. */
	export interface AttachmentFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		CoreNetworkArn: FormControl<string | null | undefined>,
		AttachmentId: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		AttachmentType: FormControl<AttachmentType | null | undefined>,
		State: FormControl<AttachmentState | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		AttachmentPolicyRuleNumber: FormControl<number | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkArn: new FormControl<string | null | undefined>(undefined),
			AttachmentId: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			AttachmentType: new FormControl<AttachmentType | null | undefined>(undefined),
			State: new FormControl<AttachmentState | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			AttachmentPolicyRuleNumber: new FormControl<number | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AttachmentType { CONNECT = 'CONNECT', SITE_TO_SITE_VPN = 'SITE_TO_SITE_VPN', VPC = 'VPC', TRANSIT_GATEWAY_ROUTE_TABLE = 'TRANSIT_GATEWAY_ROUTE_TABLE' }

	export enum AttachmentState { REJECTED = 'REJECTED', PENDING_ATTACHMENT_ACCEPTANCE = 'PENDING_ATTACHMENT_ACCEPTANCE', CREATING = 'CREATING', FAILED = 'FAILED', AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING', PENDING_NETWORK_UPDATE = 'PENDING_NETWORK_UPDATE', PENDING_TAG_ACCEPTANCE = 'PENDING_TAG_ACCEPTANCE', DELETING = 'DELETING' }


	/** Describes a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Describes a tag. */
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


	/** Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.  */
	export interface ProposedSegmentChange {
		Tags?: Array<Tag>;
		AttachmentPolicyRuleNumber?: number | null;
		SegmentName?: string;
	}

	/** Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.  */
	export interface ProposedSegmentChangeFormProperties {
		AttachmentPolicyRuleNumber: FormControl<number | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
	}
	export function CreateProposedSegmentChangeFormGroup() {
		return new FormGroup<ProposedSegmentChangeFormProperties>({
			AttachmentPolicyRuleNumber: new FormControl<number | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface AssociateConnectPeerResponse {
		ConnectPeerAssociation?: ConnectPeerAssociation;
	}
	export interface AssociateConnectPeerResponseFormProperties {
	}
	export function CreateAssociateConnectPeerResponseFormGroup() {
		return new FormGroup<AssociateConnectPeerResponseFormProperties>({
		});

	}


	/** Describes a core network Connect peer association. */
	export interface ConnectPeerAssociation {
		ConnectPeerId?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		State?: ConnectPeerAssociationState;
	}

	/** Describes a core network Connect peer association. */
	export interface ConnectPeerAssociationFormProperties {
		ConnectPeerId: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		State: FormControl<ConnectPeerAssociationState | null | undefined>,
	}
	export function CreateConnectPeerAssociationFormGroup() {
		return new FormGroup<ConnectPeerAssociationFormProperties>({
			ConnectPeerId: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConnectPeerAssociationState | null | undefined>(undefined),
		});

	}

	export enum ConnectPeerAssociationState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface AssociateCustomerGatewayResponse {
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}
	export interface AssociateCustomerGatewayResponseFormProperties {
	}
	export function CreateAssociateCustomerGatewayResponseFormGroup() {
		return new FormGroup<AssociateCustomerGatewayResponseFormProperties>({
		});

	}


	/** Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociation {
		CustomerGatewayArn?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		State?: ConnectPeerAssociationState;
	}

	/** Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociationFormProperties {
		CustomerGatewayArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		State: FormControl<ConnectPeerAssociationState | null | undefined>,
	}
	export function CreateCustomerGatewayAssociationFormGroup() {
		return new FormGroup<CustomerGatewayAssociationFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConnectPeerAssociationState | null | undefined>(undefined),
		});

	}

	export interface AssociateLinkResponse {
		LinkAssociation?: LinkAssociation;
	}
	export interface AssociateLinkResponseFormProperties {
	}
	export function CreateAssociateLinkResponseFormGroup() {
		return new FormGroup<AssociateLinkResponseFormProperties>({
		});

	}


	/** Describes the association between a device and a link. */
	export interface LinkAssociation {
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		LinkAssociationState?: ConnectPeerAssociationState;
	}

	/** Describes the association between a device and a link. */
	export interface LinkAssociationFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		LinkAssociationState: FormControl<ConnectPeerAssociationState | null | undefined>,
	}
	export function CreateLinkAssociationFormGroup() {
		return new FormGroup<LinkAssociationFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			LinkAssociationState: new FormControl<ConnectPeerAssociationState | null | undefined>(undefined),
		});

	}

	export interface AssociateTransitGatewayConnectPeerResponse {
		TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
	}
	export interface AssociateTransitGatewayConnectPeerResponseFormProperties {
	}
	export function CreateAssociateTransitGatewayConnectPeerResponseFormGroup() {
		return new FormGroup<AssociateTransitGatewayConnectPeerResponseFormProperties>({
		});

	}


	/** Describes a transit gateway Connect peer association. */
	export interface TransitGatewayConnectPeerAssociation {
		TransitGatewayConnectPeerArn?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		LinkId?: string;
		State?: ConnectPeerAssociationState;
	}

	/** Describes a transit gateway Connect peer association. */
	export interface TransitGatewayConnectPeerAssociationFormProperties {
		TransitGatewayConnectPeerArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		State: FormControl<ConnectPeerAssociationState | null | undefined>,
	}
	export function CreateTransitGatewayConnectPeerAssociationFormGroup() {
		return new FormGroup<TransitGatewayConnectPeerAssociationFormProperties>({
			TransitGatewayConnectPeerArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConnectPeerAssociationState | null | undefined>(undefined),
		});

	}

	export interface CreateConnectAttachmentResponse {
		ConnectAttachment?: ConnectAttachment;
	}
	export interface CreateConnectAttachmentResponseFormProperties {
	}
	export function CreateCreateConnectAttachmentResponseFormGroup() {
		return new FormGroup<CreateConnectAttachmentResponseFormProperties>({
		});

	}


	/** Describes a core network Connect attachment. */
	export interface ConnectAttachment {
		Attachment?: Attachment;
		TransportAttachmentId?: string;
		Options?: ConnectAttachmentOptions;
	}

	/** Describes a core network Connect attachment. */
	export interface ConnectAttachmentFormProperties {
		TransportAttachmentId: FormControl<string | null | undefined>,
	}
	export function CreateConnectAttachmentFormGroup() {
		return new FormGroup<ConnectAttachmentFormProperties>({
			TransportAttachmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a core network Connect attachment options. */
	export interface ConnectAttachmentOptions {
		Protocol?: TunnelProtocol;
	}

	/** Describes a core network Connect attachment options. */
	export interface ConnectAttachmentOptionsFormProperties {
		Protocol: FormControl<TunnelProtocol | null | undefined>,
	}
	export function CreateConnectAttachmentOptionsFormGroup() {
		return new FormGroup<ConnectAttachmentOptionsFormProperties>({
			Protocol: new FormControl<TunnelProtocol | null | undefined>(undefined),
		});

	}

	export enum TunnelProtocol { GRE = 'GRE' }

	export interface CreateConnectPeerResponse {
		ConnectPeer?: ConnectPeer;
	}
	export interface CreateConnectPeerResponseFormProperties {
	}
	export function CreateCreateConnectPeerResponseFormGroup() {
		return new FormGroup<CreateConnectPeerResponseFormProperties>({
		});

	}


	/** Describes a core network Connect peer. */
	export interface ConnectPeer {
		CoreNetworkId?: string;
		ConnectAttachmentId?: string;
		ConnectPeerId?: string;
		EdgeLocation?: string;
		State?: ConnectPeerState;
		CreatedAt?: Date;
		Configuration?: ConnectPeerConfiguration;
		Tags?: Array<Tag>;
	}

	/** Describes a core network Connect peer. */
	export interface ConnectPeerFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		ConnectAttachmentId: FormControl<string | null | undefined>,
		ConnectPeerId: FormControl<string | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
		State: FormControl<ConnectPeerState | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectPeerFormGroup() {
		return new FormGroup<ConnectPeerFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			ConnectAttachmentId: new FormControl<string | null | undefined>(undefined),
			ConnectPeerId: new FormControl<string | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConnectPeerState | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectPeerState { CREATING = 'CREATING', FAILED = 'FAILED', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING' }


	/** Describes a core network Connect peer configuration. */
	export interface ConnectPeerConfiguration {
		CoreNetworkAddress?: string;
		PeerAddress?: string;
		InsideCidrBlocks?: Array<string>;
		Protocol?: TunnelProtocol;
		BgpConfigurations?: Array<ConnectPeerBgpConfiguration>;
	}

	/** Describes a core network Connect peer configuration. */
	export interface ConnectPeerConfigurationFormProperties {
		CoreNetworkAddress: FormControl<string | null | undefined>,
		PeerAddress: FormControl<string | null | undefined>,
		Protocol: FormControl<TunnelProtocol | null | undefined>,
	}
	export function CreateConnectPeerConfigurationFormGroup() {
		return new FormGroup<ConnectPeerConfigurationFormProperties>({
			CoreNetworkAddress: new FormControl<string | null | undefined>(undefined),
			PeerAddress: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<TunnelProtocol | null | undefined>(undefined),
		});

	}


	/** Describes a core network BGP configuration. */
	export interface ConnectPeerBgpConfiguration {
		CoreNetworkAsn?: number | null;
		PeerAsn?: number | null;
		CoreNetworkAddress?: string;
		PeerAddress?: string;
	}

	/** Describes a core network BGP configuration. */
	export interface ConnectPeerBgpConfigurationFormProperties {
		CoreNetworkAsn: FormControl<number | null | undefined>,
		PeerAsn: FormControl<number | null | undefined>,
		CoreNetworkAddress: FormControl<string | null | undefined>,
		PeerAddress: FormControl<string | null | undefined>,
	}
	export function CreateConnectPeerBgpConfigurationFormGroup() {
		return new FormGroup<ConnectPeerBgpConfigurationFormProperties>({
			CoreNetworkAsn: new FormControl<number | null | undefined>(undefined),
			PeerAsn: new FormControl<number | null | undefined>(undefined),
			CoreNetworkAddress: new FormControl<string | null | undefined>(undefined),
			PeerAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionResponse {
		Connection?: Connection;
	}
	export interface CreateConnectionResponseFormProperties {
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
		});

	}


	/** Describes a connection. */
	export interface Connection {
		ConnectionId?: string;
		ConnectionArn?: string;
		GlobalNetworkId?: string;
		DeviceId?: string;
		ConnectedDeviceId?: string;
		LinkId?: string;
		ConnectedLinkId?: string;
		Description?: string;
		CreatedAt?: Date;
		State?: ConnectionState;
		Tags?: Array<Tag>;
	}

	/** Describes a connection. */
	export interface ConnectionFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		ConnectedDeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		ConnectedLinkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<ConnectionState | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			ConnectedDeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			ConnectedLinkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ConnectionState | null | undefined>(undefined),
		});

	}

	export enum ConnectionState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export interface CreateCoreNetworkResponse {
		CoreNetwork?: CoreNetwork;
	}
	export interface CreateCoreNetworkResponseFormProperties {
	}
	export function CreateCreateCoreNetworkResponseFormGroup() {
		return new FormGroup<CreateCoreNetworkResponseFormProperties>({
		});

	}


	/** Describes a core network. */
	export interface CoreNetwork {
		GlobalNetworkId?: string;
		CoreNetworkId?: string;
		CoreNetworkArn?: string;
		Description?: string;
		CreatedAt?: Date;
		State?: CoreNetworkState;
		Segments?: Array<CoreNetworkSegment>;
		Edges?: Array<CoreNetworkEdge>;
		Tags?: Array<Tag>;
	}

	/** Describes a core network. */
	export interface CoreNetworkFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		CoreNetworkId: FormControl<string | null | undefined>,
		CoreNetworkArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<CoreNetworkState | null | undefined>,
	}
	export function CreateCoreNetworkFormGroup() {
		return new FormGroup<CoreNetworkFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<CoreNetworkState | null | undefined>(undefined),
		});

	}

	export enum CoreNetworkState { CREATING = 'CREATING', UPDATING = 'UPDATING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING' }


	/** Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other. */
	export interface CoreNetworkSegment {
		Name?: string;
		EdgeLocations?: Array<string>;
		SharedSegments?: Array<string>;
	}

	/** Describes a core network segment, which are dedicated routes. Only attachments within this segment can communicate with each other. */
	export interface CoreNetworkSegmentFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkSegmentFormGroup() {
		return new FormGroup<CoreNetworkSegmentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a core network edge. */
	export interface CoreNetworkEdge {
		EdgeLocation?: string;
		Asn?: number | null;
		InsideCidrBlocks?: Array<string>;
	}

	/** Describes a core network edge. */
	export interface CoreNetworkEdgeFormProperties {
		EdgeLocation: FormControl<string | null | undefined>,
		Asn: FormControl<number | null | undefined>,
	}
	export function CreateCoreNetworkEdgeFormGroup() {
		return new FormGroup<CoreNetworkEdgeFormProperties>({
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			Asn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CoreNetworkPolicyException {
	}
	export interface CoreNetworkPolicyExceptionFormProperties {
	}
	export function CreateCoreNetworkPolicyExceptionFormGroup() {
		return new FormGroup<CoreNetworkPolicyExceptionFormProperties>({
		});

	}

	export interface CreateDeviceResponse {
		Device?: Device;
	}
	export interface CreateDeviceResponseFormProperties {
	}
	export function CreateCreateDeviceResponseFormGroup() {
		return new FormGroup<CreateDeviceResponseFormProperties>({
		});

	}


	/** Describes a device. */
	export interface Device {
		DeviceId?: string;
		DeviceArn?: string;
		GlobalNetworkId?: string;
		AWSLocation?: AWSLocation;
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;
		Location?: Location;
		SiteId?: string;
		CreatedAt?: Date;
		State?: ConnectionState;
		Tags?: Array<Tag>;
	}

	/** Describes a device. */
	export interface DeviceFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		DeviceArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<ConnectionState | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ConnectionState | null | undefined>(undefined),
		});

	}


	/** Specifies a location in Amazon Web Services. */
	export interface AWSLocation {
		Zone?: string;
		SubnetArn?: string;
	}

	/** Specifies a location in Amazon Web Services. */
	export interface AWSLocationFormProperties {
		Zone: FormControl<string | null | undefined>,
		SubnetArn: FormControl<string | null | undefined>,
	}
	export function CreateAWSLocationFormGroup() {
		return new FormGroup<AWSLocationFormProperties>({
			Zone: new FormControl<string | null | undefined>(undefined),
			SubnetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a location. */
	export interface Location {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}

	/** Describes a location. */
	export interface LocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGlobalNetworkResponse {
		GlobalNetwork?: GlobalNetwork;
	}
	export interface CreateGlobalNetworkResponseFormProperties {
	}
	export function CreateCreateGlobalNetworkResponseFormGroup() {
		return new FormGroup<CreateGlobalNetworkResponseFormProperties>({
		});

	}


	/** Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network. */
	export interface GlobalNetwork {
		GlobalNetworkId?: string;
		GlobalNetworkArn?: string;
		Description?: string;
		CreatedAt?: Date;
		State?: ConnectionState;
		Tags?: Array<Tag>;
	}

	/** Describes a global network. This is a single private network acting as a high-level container for your network objects, including an Amazon Web Services-managed Core Network. */
	export interface GlobalNetworkFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		GlobalNetworkArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<ConnectionState | null | undefined>,
	}
	export function CreateGlobalNetworkFormGroup() {
		return new FormGroup<GlobalNetworkFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ConnectionState | null | undefined>(undefined),
		});

	}

	export interface CreateLinkResponse {
		Link?: Link;
	}
	export interface CreateLinkResponseFormProperties {
	}
	export function CreateCreateLinkResponseFormGroup() {
		return new FormGroup<CreateLinkResponseFormProperties>({
		});

	}


	/** Describes a link. */
	export interface Link {
		LinkId?: string;
		LinkArn?: string;
		GlobalNetworkId?: string;
		SiteId?: string;
		Description?: string;
		Type?: string;
		Bandwidth?: Bandwidth;
		Provider?: string;
		CreatedAt?: Date;
		State?: ConnectionState;
		Tags?: Array<Tag>;
	}

	/** Describes a link. */
	export interface LinkFormProperties {
		LinkId: FormControl<string | null | undefined>,
		LinkArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<ConnectionState | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			LinkId: new FormControl<string | null | undefined>(undefined),
			LinkArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ConnectionState | null | undefined>(undefined),
		});

	}


	/** Describes bandwidth information. */
	export interface Bandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}

	/** Describes bandwidth information. */
	export interface BandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateBandwidthFormGroup() {
		return new FormGroup<BandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSiteResponse {
		Site?: Site;
	}
	export interface CreateSiteResponseFormProperties {
	}
	export function CreateCreateSiteResponseFormGroup() {
		return new FormGroup<CreateSiteResponseFormProperties>({
		});

	}


	/** Describes a site. */
	export interface Site {
		SiteId?: string;
		SiteArn?: string;
		GlobalNetworkId?: string;
		Description?: string;
		Location?: Location;
		CreatedAt?: Date;
		State?: ConnectionState;
		Tags?: Array<Tag>;
	}

	/** Describes a site. */
	export interface SiteFormProperties {
		SiteId: FormControl<string | null | undefined>,
		SiteArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<ConnectionState | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			SiteId: new FormControl<string | null | undefined>(undefined),
			SiteArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ConnectionState | null | undefined>(undefined),
		});

	}

	export interface CreateSiteToSiteVpnAttachmentResponse {
		SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
	}
	export interface CreateSiteToSiteVpnAttachmentResponseFormProperties {
	}
	export function CreateCreateSiteToSiteVpnAttachmentResponseFormGroup() {
		return new FormGroup<CreateSiteToSiteVpnAttachmentResponseFormProperties>({
		});

	}


	/** Creates a site-to-site VPN attachment. */
	export interface SiteToSiteVpnAttachment {
		Attachment?: Attachment;
		VpnConnectionArn?: string;
	}

	/** Creates a site-to-site VPN attachment. */
	export interface SiteToSiteVpnAttachmentFormProperties {
		VpnConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateSiteToSiteVpnAttachmentFormGroup() {
		return new FormGroup<SiteToSiteVpnAttachmentFormProperties>({
			VpnConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTransitGatewayPeeringResponse {
		TransitGatewayPeering?: TransitGatewayPeering;
	}
	export interface CreateTransitGatewayPeeringResponseFormProperties {
	}
	export function CreateCreateTransitGatewayPeeringResponseFormGroup() {
		return new FormGroup<CreateTransitGatewayPeeringResponseFormProperties>({
		});

	}


	/** Describes a transit gateway peering attachment. */
	export interface TransitGatewayPeering {
		Peering?: Peering;
		TransitGatewayArn?: string;
		TransitGatewayPeeringAttachmentId?: string;
	}

	/** Describes a transit gateway peering attachment. */
	export interface TransitGatewayPeeringFormProperties {
		TransitGatewayArn: FormControl<string | null | undefined>,
		TransitGatewayPeeringAttachmentId: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayPeeringFormGroup() {
		return new FormGroup<TransitGatewayPeeringFormProperties>({
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
			TransitGatewayPeeringAttachmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a peering connection. */
	export interface Peering {
		CoreNetworkId?: string;
		CoreNetworkArn?: string;
		PeeringId?: string;
		OwnerAccountId?: string;
		PeeringType?: PeeringType;
		State?: ConnectPeerState;
		EdgeLocation?: string;
		ResourceArn?: string;
		Tags?: Array<Tag>;
		CreatedAt?: Date;
	}

	/** Describes a peering connection. */
	export interface PeeringFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		CoreNetworkArn: FormControl<string | null | undefined>,
		PeeringId: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		PeeringType: FormControl<PeeringType | null | undefined>,
		State: FormControl<ConnectPeerState | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePeeringFormGroup() {
		return new FormGroup<PeeringFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkArn: new FormControl<string | null | undefined>(undefined),
			PeeringId: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			PeeringType: new FormControl<PeeringType | null | undefined>(undefined),
			State: new FormControl<ConnectPeerState | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PeeringType { TRANSIT_GATEWAY = 'TRANSIT_GATEWAY' }

	export interface CreateTransitGatewayRouteTableAttachmentResponse {
		TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
	}
	export interface CreateTransitGatewayRouteTableAttachmentResponseFormProperties {
	}
	export function CreateCreateTransitGatewayRouteTableAttachmentResponseFormGroup() {
		return new FormGroup<CreateTransitGatewayRouteTableAttachmentResponseFormProperties>({
		});

	}


	/** Describes a transit gateway route table attachment. */
	export interface TransitGatewayRouteTableAttachment {

		/** Describes a core network attachment. */
		Attachment?: Attachment;
		PeeringId?: string;
		TransitGatewayRouteTableArn?: string;
	}

	/** Describes a transit gateway route table attachment. */
	export interface TransitGatewayRouteTableAttachmentFormProperties {
		PeeringId: FormControl<string | null | undefined>,
		TransitGatewayRouteTableArn: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayRouteTableAttachmentFormGroup() {
		return new FormGroup<TransitGatewayRouteTableAttachmentFormProperties>({
			PeeringId: new FormControl<string | null | undefined>(undefined),
			TransitGatewayRouteTableArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcAttachmentResponse {
		VpcAttachment?: VpcAttachment;
	}
	export interface CreateVpcAttachmentResponseFormProperties {
	}
	export function CreateCreateVpcAttachmentResponseFormGroup() {
		return new FormGroup<CreateVpcAttachmentResponseFormProperties>({
		});

	}


	/** Describes a VPC attachment. */
	export interface VpcAttachment {
		Attachment?: Attachment;
		SubnetArns?: Array<string>;
		Options?: VpcOptions;
	}

	/** Describes a VPC attachment. */
	export interface VpcAttachmentFormProperties {
	}
	export function CreateVpcAttachmentFormGroup() {
		return new FormGroup<VpcAttachmentFormProperties>({
		});

	}


	/** Describes the VPC options. */
	export interface VpcOptions {
		Ipv6Support?: boolean | null;
		ApplianceModeSupport?: boolean | null;
	}

	/** Describes the VPC options. */
	export interface VpcOptionsFormProperties {
		Ipv6Support: FormControl<boolean | null | undefined>,
		ApplianceModeSupport: FormControl<boolean | null | undefined>,
	}
	export function CreateVpcOptionsFormGroup() {
		return new FormGroup<VpcOptionsFormProperties>({
			Ipv6Support: new FormControl<boolean | null | undefined>(undefined),
			ApplianceModeSupport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAttachmentResponse {
		Attachment?: Attachment;
	}
	export interface DeleteAttachmentResponseFormProperties {
	}
	export function CreateDeleteAttachmentResponseFormGroup() {
		return new FormGroup<DeleteAttachmentResponseFormProperties>({
		});

	}

	export interface DeleteConnectPeerResponse {
		ConnectPeer?: ConnectPeer;
	}
	export interface DeleteConnectPeerResponseFormProperties {
	}
	export function CreateDeleteConnectPeerResponseFormGroup() {
		return new FormGroup<DeleteConnectPeerResponseFormProperties>({
		});

	}

	export interface DeleteConnectionResponse {
		Connection?: Connection;
	}
	export interface DeleteConnectionResponseFormProperties {
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
		});

	}

	export interface DeleteCoreNetworkResponse {
		CoreNetwork?: CoreNetwork;
	}
	export interface DeleteCoreNetworkResponseFormProperties {
	}
	export function CreateDeleteCoreNetworkResponseFormGroup() {
		return new FormGroup<DeleteCoreNetworkResponseFormProperties>({
		});

	}

	export interface DeleteCoreNetworkPolicyVersionResponse {
		CoreNetworkPolicy?: CoreNetworkPolicy;
	}
	export interface DeleteCoreNetworkPolicyVersionResponseFormProperties {
	}
	export function CreateDeleteCoreNetworkPolicyVersionResponseFormGroup() {
		return new FormGroup<DeleteCoreNetworkPolicyVersionResponseFormProperties>({
		});

	}


	/** Describes a core network policy. You can have only one LIVE Core Policy. */
	export interface CoreNetworkPolicy {
		CoreNetworkId?: string;
		PolicyVersionId?: number | null;
		Alias?: CoreNetworkPolicyAlias;
		Description?: string;
		CreatedAt?: Date;
		ChangeSetState?: ChangeSetState;
		PolicyErrors?: Array<CoreNetworkPolicyError>;
		PolicyDocument?: string;
	}

	/** Describes a core network policy. You can have only one LIVE Core Policy. */
	export interface CoreNetworkPolicyFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		PolicyVersionId: FormControl<number | null | undefined>,
		Alias: FormControl<CoreNetworkPolicyAlias | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ChangeSetState: FormControl<ChangeSetState | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkPolicyFormGroup() {
		return new FormGroup<CoreNetworkPolicyFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			PolicyVersionId: new FormControl<number | null | undefined>(undefined),
			Alias: new FormControl<CoreNetworkPolicyAlias | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ChangeSetState: new FormControl<ChangeSetState | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CoreNetworkPolicyAlias { LIVE = 'LIVE', LATEST = 'LATEST' }

	export enum ChangeSetState { PENDING_GENERATION = 'PENDING_GENERATION', FAILED_GENERATION = 'FAILED_GENERATION', READY_TO_EXECUTE = 'READY_TO_EXECUTE', EXECUTING = 'EXECUTING', EXECUTION_SUCCEEDED = 'EXECUTION_SUCCEEDED', OUT_OF_DATE = 'OUT_OF_DATE' }


	/** Provides details about an error in a core network policy. */
	export interface CoreNetworkPolicyError {

		/** Required */
		ErrorCode: string;

		/** Required */
		Message: string;
		Path?: string;
	}

	/** Provides details about an error in a core network policy. */
	export interface CoreNetworkPolicyErrorFormProperties {

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkPolicyErrorFormGroup() {
		return new FormGroup<CoreNetworkPolicyErrorFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDeviceResponse {
		Device?: Device;
	}
	export interface DeleteDeviceResponseFormProperties {
	}
	export function CreateDeleteDeviceResponseFormGroup() {
		return new FormGroup<DeleteDeviceResponseFormProperties>({
		});

	}

	export interface DeleteGlobalNetworkResponse {
		GlobalNetwork?: GlobalNetwork;
	}
	export interface DeleteGlobalNetworkResponseFormProperties {
	}
	export function CreateDeleteGlobalNetworkResponseFormGroup() {
		return new FormGroup<DeleteGlobalNetworkResponseFormProperties>({
		});

	}

	export interface DeleteLinkResponse {
		Link?: Link;
	}
	export interface DeleteLinkResponseFormProperties {
	}
	export function CreateDeleteLinkResponseFormGroup() {
		return new FormGroup<DeleteLinkResponseFormProperties>({
		});

	}

	export interface DeletePeeringResponse {
		Peering?: Peering;
	}
	export interface DeletePeeringResponseFormProperties {
	}
	export function CreateDeletePeeringResponseFormGroup() {
		return new FormGroup<DeletePeeringResponseFormProperties>({
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

	export interface DeleteSiteResponse {
		Site?: Site;
	}
	export interface DeleteSiteResponseFormProperties {
	}
	export function CreateDeleteSiteResponseFormGroup() {
		return new FormGroup<DeleteSiteResponseFormProperties>({
		});

	}

	export interface DeregisterTransitGatewayResponse {
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}
	export interface DeregisterTransitGatewayResponseFormProperties {
	}
	export function CreateDeregisterTransitGatewayResponseFormGroup() {
		return new FormGroup<DeregisterTransitGatewayResponseFormProperties>({
		});

	}


	/** Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistration {
		GlobalNetworkId?: string;
		TransitGatewayArn?: string;
		State?: TransitGatewayRegistrationStateReason;
	}

	/** Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistrationFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayRegistrationFormGroup() {
		return new FormGroup<TransitGatewayRegistrationFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReason {
		Code?: TransitGatewayRegistrationState;
		Message?: string;
	}

	/** Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReasonFormProperties {
		Code: FormControl<TransitGatewayRegistrationState | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayRegistrationStateReasonFormGroup() {
		return new FormGroup<TransitGatewayRegistrationStateReasonFormProperties>({
			Code: new FormControl<TransitGatewayRegistrationState | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransitGatewayRegistrationState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED', FAILED = 'FAILED' }

	export interface DescribeGlobalNetworksResponse {
		GlobalNetworks?: Array<GlobalNetwork>;
		NextToken?: string;
	}
	export interface DescribeGlobalNetworksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalNetworksResponseFormGroup() {
		return new FormGroup<DescribeGlobalNetworksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateConnectPeerResponse {
		ConnectPeerAssociation?: ConnectPeerAssociation;
	}
	export interface DisassociateConnectPeerResponseFormProperties {
	}
	export function CreateDisassociateConnectPeerResponseFormGroup() {
		return new FormGroup<DisassociateConnectPeerResponseFormProperties>({
		});

	}

	export interface DisassociateCustomerGatewayResponse {
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}
	export interface DisassociateCustomerGatewayResponseFormProperties {
	}
	export function CreateDisassociateCustomerGatewayResponseFormGroup() {
		return new FormGroup<DisassociateCustomerGatewayResponseFormProperties>({
		});

	}

	export interface DisassociateLinkResponse {
		LinkAssociation?: LinkAssociation;
	}
	export interface DisassociateLinkResponseFormProperties {
	}
	export function CreateDisassociateLinkResponseFormGroup() {
		return new FormGroup<DisassociateLinkResponseFormProperties>({
		});

	}

	export interface DisassociateTransitGatewayConnectPeerResponse {
		TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
	}
	export interface DisassociateTransitGatewayConnectPeerResponseFormProperties {
	}
	export function CreateDisassociateTransitGatewayConnectPeerResponseFormGroup() {
		return new FormGroup<DisassociateTransitGatewayConnectPeerResponseFormProperties>({
		});

	}

	export interface ExecuteCoreNetworkChangeSetResponse {
	}
	export interface ExecuteCoreNetworkChangeSetResponseFormProperties {
	}
	export function CreateExecuteCoreNetworkChangeSetResponseFormGroup() {
		return new FormGroup<ExecuteCoreNetworkChangeSetResponseFormProperties>({
		});

	}

	export interface GetConnectAttachmentResponse {
		ConnectAttachment?: ConnectAttachment;
	}
	export interface GetConnectAttachmentResponseFormProperties {
	}
	export function CreateGetConnectAttachmentResponseFormGroup() {
		return new FormGroup<GetConnectAttachmentResponseFormProperties>({
		});

	}

	export interface GetConnectPeerResponse {
		ConnectPeer?: ConnectPeer;
	}
	export interface GetConnectPeerResponseFormProperties {
	}
	export function CreateGetConnectPeerResponseFormGroup() {
		return new FormGroup<GetConnectPeerResponseFormProperties>({
		});

	}

	export interface GetConnectPeerAssociationsResponse {
		ConnectPeerAssociations?: Array<ConnectPeerAssociation>;
		NextToken?: string;
	}
	export interface GetConnectPeerAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectPeerAssociationsResponseFormGroup() {
		return new FormGroup<GetConnectPeerAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConnectionsResponse {
		Connections?: Array<Connection>;
		NextToken?: string;
	}
	export interface GetConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionsResponseFormGroup() {
		return new FormGroup<GetConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoreNetworkResponse {
		CoreNetwork?: CoreNetwork;
	}
	export interface GetCoreNetworkResponseFormProperties {
	}
	export function CreateGetCoreNetworkResponseFormGroup() {
		return new FormGroup<GetCoreNetworkResponseFormProperties>({
		});

	}

	export interface GetCoreNetworkChangeEventsResponse {
		CoreNetworkChangeEvents?: Array<CoreNetworkChangeEvent>;
		NextToken?: string;
	}
	export interface GetCoreNetworkChangeEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCoreNetworkChangeEventsResponseFormGroup() {
		return new FormGroup<GetCoreNetworkChangeEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a core network change event. This can be a change to a segment, attachment, route, etc. */
	export interface CoreNetworkChangeEvent {
		Type?: ChangeType;
		Action?: ChangeAction;
		IdentifierPath?: string;
		EventTime?: Date;
		Status?: ChangeStatus;
		Values?: CoreNetworkChangeEventValues;
	}

	/** Describes a core network change event. This can be a change to a segment, attachment, route, etc. */
	export interface CoreNetworkChangeEventFormProperties {
		Type: FormControl<ChangeType | null | undefined>,
		Action: FormControl<ChangeAction | null | undefined>,
		IdentifierPath: FormControl<string | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		Status: FormControl<ChangeStatus | null | undefined>,
	}
	export function CreateCoreNetworkChangeEventFormGroup() {
		return new FormGroup<CoreNetworkChangeEventFormProperties>({
			Type: new FormControl<ChangeType | null | undefined>(undefined),
			Action: new FormControl<ChangeAction | null | undefined>(undefined),
			IdentifierPath: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ChangeStatus | null | undefined>(undefined),
		});

	}

	export enum ChangeType { CORE_NETWORK_SEGMENT = 'CORE_NETWORK_SEGMENT', CORE_NETWORK_EDGE = 'CORE_NETWORK_EDGE', ATTACHMENT_MAPPING = 'ATTACHMENT_MAPPING', ATTACHMENT_ROUTE_PROPAGATION = 'ATTACHMENT_ROUTE_PROPAGATION', ATTACHMENT_ROUTE_STATIC = 'ATTACHMENT_ROUTE_STATIC', CORE_NETWORK_CONFIGURATION = 'CORE_NETWORK_CONFIGURATION', SEGMENTS_CONFIGURATION = 'SEGMENTS_CONFIGURATION', SEGMENT_ACTIONS_CONFIGURATION = 'SEGMENT_ACTIONS_CONFIGURATION', ATTACHMENT_POLICIES_CONFIGURATION = 'ATTACHMENT_POLICIES_CONFIGURATION' }

	export enum ChangeAction { ADD = 'ADD', MODIFY = 'MODIFY', REMOVE = 'REMOVE' }

	export enum ChangeStatus { NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE', FAILED = 'FAILED' }


	/** Describes a core network change event. */
	export interface CoreNetworkChangeEventValues {
		EdgeLocation?: string;
		SegmentName?: string;
		AttachmentId?: string;
		Cidr?: string;
	}

	/** Describes a core network change event. */
	export interface CoreNetworkChangeEventValuesFormProperties {
		EdgeLocation: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		AttachmentId: FormControl<string | null | undefined>,
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkChangeEventValuesFormGroup() {
		return new FormGroup<CoreNetworkChangeEventValuesFormProperties>({
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			AttachmentId: new FormControl<string | null | undefined>(undefined),
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoreNetworkChangeSetResponse {
		CoreNetworkChanges?: Array<CoreNetworkChange>;
		NextToken?: string;
	}
	export interface GetCoreNetworkChangeSetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCoreNetworkChangeSetResponseFormGroup() {
		return new FormGroup<GetCoreNetworkChangeSetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details describing a core network change. */
	export interface CoreNetworkChange {
		Type?: ChangeType;
		Action?: ChangeAction;
		Identifier?: string;
		PreviousValues?: CoreNetworkChangeValues;
		NewValues?: CoreNetworkChangeValues;
		IdentifierPath?: string;
	}

	/** Details describing a core network change. */
	export interface CoreNetworkChangeFormProperties {
		Type: FormControl<ChangeType | null | undefined>,
		Action: FormControl<ChangeAction | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		IdentifierPath: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkChangeFormGroup() {
		return new FormGroup<CoreNetworkChangeFormProperties>({
			Type: new FormControl<ChangeType | null | undefined>(undefined),
			Action: new FormControl<ChangeAction | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			IdentifierPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a core network change. */
	export interface CoreNetworkChangeValues {
		SegmentName?: string;
		EdgeLocations?: Array<string>;
		Asn?: number | null;
		Cidr?: string;
		DestinationIdentifier?: string;
		InsideCidrBlocks?: Array<string>;
		SharedSegments?: Array<string>;
	}

	/** Describes a core network change. */
	export interface CoreNetworkChangeValuesFormProperties {
		SegmentName: FormControl<string | null | undefined>,
		Asn: FormControl<number | null | undefined>,
		Cidr: FormControl<string | null | undefined>,
		DestinationIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkChangeValuesFormGroup() {
		return new FormGroup<CoreNetworkChangeValuesFormProperties>({
			SegmentName: new FormControl<string | null | undefined>(undefined),
			Asn: new FormControl<number | null | undefined>(undefined),
			Cidr: new FormControl<string | null | undefined>(undefined),
			DestinationIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCoreNetworkPolicyResponse {
		CoreNetworkPolicy?: CoreNetworkPolicy;
	}
	export interface GetCoreNetworkPolicyResponseFormProperties {
	}
	export function CreateGetCoreNetworkPolicyResponseFormGroup() {
		return new FormGroup<GetCoreNetworkPolicyResponseFormProperties>({
		});

	}

	export interface GetCustomerGatewayAssociationsResponse {
		CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;
		NextToken?: string;
	}
	export interface GetCustomerGatewayAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerGatewayAssociationsResponseFormGroup() {
		return new FormGroup<GetCustomerGatewayAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevicesResponse {
		Devices?: Array<Device>;
		NextToken?: string;
	}
	export interface GetDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevicesResponseFormGroup() {
		return new FormGroup<GetDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkAssociationsResponse {
		LinkAssociations?: Array<LinkAssociation>;
		NextToken?: string;
	}
	export interface GetLinkAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkAssociationsResponseFormGroup() {
		return new FormGroup<GetLinkAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinksResponse {
		Links?: Array<Link>;
		NextToken?: string;
	}
	export interface GetLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLinksResponseFormGroup() {
		return new FormGroup<GetLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNetworkResourceCountsResponse {
		NetworkResourceCounts?: Array<NetworkResourceCount>;
		NextToken?: string;
	}
	export interface GetNetworkResourceCountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkResourceCountsResponseFormGroup() {
		return new FormGroup<GetNetworkResourceCountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource count. */
	export interface NetworkResourceCount {
		ResourceType?: string;
		Count?: number | null;
	}

	/** Describes a resource count. */
	export interface NetworkResourceCountFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
	}
	export function CreateNetworkResourceCountFormGroup() {
		return new FormGroup<NetworkResourceCountFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetNetworkResourceRelationshipsResponse {
		Relationships?: Array<Relationship>;
		NextToken?: string;
	}
	export interface GetNetworkResourceRelationshipsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkResourceRelationshipsResponseFormGroup() {
		return new FormGroup<GetNetworkResourceRelationshipsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource relationship. */
	export interface Relationship {
		From?: string;
		To?: string;
	}

	/** Describes a resource relationship. */
	export interface RelationshipFormProperties {
		From: FormControl<string | null | undefined>,
		To: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			From: new FormControl<string | null | undefined>(undefined),
			To: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNetworkResourcesResponse {
		NetworkResources?: Array<NetworkResource>;
		NextToken?: string;
	}
	export interface GetNetworkResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkResourcesResponseFormGroup() {
		return new FormGroup<GetNetworkResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a network resource. */
	export interface NetworkResource {
		RegisteredGatewayArn?: string;
		CoreNetworkId?: string;
		AwsRegion?: string;
		AccountId?: string;
		ResourceType?: string;
		ResourceId?: string;
		ResourceArn?: string;
		Definition?: string;
		DefinitionTimestamp?: Date;
		Tags?: Array<Tag>;
		Metadata?: NetworkResourceMetadataMap;
	}

	/** Describes a network resource. */
	export interface NetworkResourceFormProperties {
		RegisteredGatewayArn: FormControl<string | null | undefined>,
		CoreNetworkId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Definition: FormControl<string | null | undefined>,
		DefinitionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateNetworkResourceFormGroup() {
		return new FormGroup<NetworkResourceFormProperties>({
			RegisteredGatewayArn: new FormControl<string | null | undefined>(undefined),
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Definition: new FormControl<string | null | undefined>(undefined),
			DefinitionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NetworkResourceMetadataMap {
	}
	export interface NetworkResourceMetadataMapFormProperties {
	}
	export function CreateNetworkResourceMetadataMapFormGroup() {
		return new FormGroup<NetworkResourceMetadataMapFormProperties>({
		});

	}

	export interface GetNetworkRoutesResponse {
		RouteTableArn?: string;
		CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
		RouteTableType?: RouteTableType;
		RouteTableTimestamp?: Date;
		NetworkRoutes?: Array<NetworkRoute>;
	}
	export interface GetNetworkRoutesResponseFormProperties {
		RouteTableArn: FormControl<string | null | undefined>,
		RouteTableType: FormControl<RouteTableType | null | undefined>,
		RouteTableTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetNetworkRoutesResponseFormGroup() {
		return new FormGroup<GetNetworkRoutesResponseFormProperties>({
			RouteTableArn: new FormControl<string | null | undefined>(undefined),
			RouteTableType: new FormControl<RouteTableType | null | undefined>(undefined),
			RouteTableTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Returns details about a core network edge. */
	export interface CoreNetworkSegmentEdgeIdentifier {
		CoreNetworkId?: string;
		SegmentName?: string;
		EdgeLocation?: string;
	}

	/** Returns details about a core network edge. */
	export interface CoreNetworkSegmentEdgeIdentifierFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkSegmentEdgeIdentifierFormGroup() {
		return new FormGroup<CoreNetworkSegmentEdgeIdentifierFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteTableType { TRANSIT_GATEWAY_ROUTE_TABLE = 'TRANSIT_GATEWAY_ROUTE_TABLE', CORE_NETWORK_SEGMENT = 'CORE_NETWORK_SEGMENT' }


	/** Describes a network route. */
	export interface NetworkRoute {
		DestinationCidrBlock?: string;
		Destinations?: Array<NetworkRouteDestination>;
		PrefixListId?: string;
		State?: RouteState;
		Type?: RouteType;
	}

	/** Describes a network route. */
	export interface NetworkRouteFormProperties {
		DestinationCidrBlock: FormControl<string | null | undefined>,
		PrefixListId: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
		Type: FormControl<RouteType | null | undefined>,
	}
	export function CreateNetworkRouteFormGroup() {
		return new FormGroup<NetworkRouteFormProperties>({
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			PrefixListId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
			Type: new FormControl<RouteType | null | undefined>(undefined),
		});

	}


	/** Describes the destination of a network route. */
	export interface NetworkRouteDestination {
		CoreNetworkAttachmentId?: string;
		TransitGatewayAttachmentId?: string;
		SegmentName?: string;
		EdgeLocation?: string;
		ResourceType?: string;
		ResourceId?: string;
	}

	/** Describes the destination of a network route. */
	export interface NetworkRouteDestinationFormProperties {
		CoreNetworkAttachmentId: FormControl<string | null | undefined>,
		TransitGatewayAttachmentId: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkRouteDestinationFormGroup() {
		return new FormGroup<NetworkRouteDestinationFormProperties>({
			CoreNetworkAttachmentId: new FormControl<string | null | undefined>(undefined),
			TransitGatewayAttachmentId: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteState { ACTIVE = 'ACTIVE', BLACKHOLE = 'BLACKHOLE' }

	export enum RouteType { PROPAGATED = 'PROPAGATED', STATIC = 'STATIC' }

	export interface GetNetworkTelemetryResponse {
		NetworkTelemetry?: Array<NetworkTelemetry>;
		NextToken?: string;
	}
	export interface GetNetworkTelemetryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkTelemetryResponseFormGroup() {
		return new FormGroup<GetNetworkTelemetryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the telemetry information for a resource. */
	export interface NetworkTelemetry {
		RegisteredGatewayArn?: string;
		CoreNetworkId?: string;
		AwsRegion?: string;
		AccountId?: string;
		ResourceType?: string;
		ResourceId?: string;
		ResourceArn?: string;
		Address?: string;
		Health?: ConnectionHealth;
	}

	/** Describes the telemetry information for a resource. */
	export interface NetworkTelemetryFormProperties {
		RegisteredGatewayArn: FormControl<string | null | undefined>,
		CoreNetworkId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
	}
	export function CreateNetworkTelemetryFormGroup() {
		return new FormGroup<NetworkTelemetryFormProperties>({
			RegisteredGatewayArn: new FormControl<string | null | undefined>(undefined),
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes connection health. */
	export interface ConnectionHealth {
		Type?: ConnectionType;
		Status?: ConnectionStatus;
		Timestamp?: Date;
	}

	/** Describes connection health. */
	export interface ConnectionHealthFormProperties {
		Type: FormControl<ConnectionType | null | undefined>,
		Status: FormControl<ConnectionStatus | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionHealthFormGroup() {
		return new FormGroup<ConnectionHealthFormProperties>({
			Type: new FormControl<ConnectionType | null | undefined>(undefined),
			Status: new FormControl<ConnectionStatus | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionType { BGP = 'BGP', IPSEC = 'IPSEC' }

	export enum ConnectionStatus { UP = 'UP', DOWN = 'DOWN' }

	export interface GetResourcePolicyResponse {
		PolicyDocument?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteAnalysisResponse {
		RouteAnalysis?: RouteAnalysis;
	}
	export interface GetRouteAnalysisResponseFormProperties {
	}
	export function CreateGetRouteAnalysisResponseFormGroup() {
		return new FormGroup<GetRouteAnalysisResponseFormProperties>({
		});

	}


	/** Describes a route analysis. */
	export interface RouteAnalysis {
		GlobalNetworkId?: string;
		OwnerAccountId?: string;
		RouteAnalysisId?: string;
		StartTimestamp?: Date;
		Status?: RouteAnalysisStatus;
		Source?: RouteAnalysisEndpointOptions;
		Destination?: RouteAnalysisEndpointOptions;
		IncludeReturnPath?: boolean | null;
		UseMiddleboxes?: boolean | null;
		ForwardPath?: RouteAnalysisPath;
		ReturnPath?: RouteAnalysisPath;
	}

	/** Describes a route analysis. */
	export interface RouteAnalysisFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		RouteAnalysisId: FormControl<string | null | undefined>,
		StartTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<RouteAnalysisStatus | null | undefined>,
		IncludeReturnPath: FormControl<boolean | null | undefined>,
		UseMiddleboxes: FormControl<boolean | null | undefined>,
	}
	export function CreateRouteAnalysisFormGroup() {
		return new FormGroup<RouteAnalysisFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			RouteAnalysisId: new FormControl<string | null | undefined>(undefined),
			StartTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RouteAnalysisStatus | null | undefined>(undefined),
			IncludeReturnPath: new FormControl<boolean | null | undefined>(undefined),
			UseMiddleboxes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RouteAnalysisStatus { RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** Describes a source or a destination. */
	export interface RouteAnalysisEndpointOptions {
		TransitGatewayAttachmentArn?: string;
		TransitGatewayArn?: string;
		IpAddress?: string;
	}

	/** Describes a source or a destination. */
	export interface RouteAnalysisEndpointOptionsFormProperties {
		TransitGatewayAttachmentArn: FormControl<string | null | undefined>,
		TransitGatewayArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateRouteAnalysisEndpointOptionsFormGroup() {
		return new FormGroup<RouteAnalysisEndpointOptionsFormProperties>({
			TransitGatewayAttachmentArn: new FormControl<string | null | undefined>(undefined),
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a route analysis path. */
	export interface RouteAnalysisPath {
		CompletionStatus?: RouteAnalysisCompletion;
		Path?: Array<PathComponent>;
	}

	/** Describes a route analysis path. */
	export interface RouteAnalysisPathFormProperties {
	}
	export function CreateRouteAnalysisPathFormGroup() {
		return new FormGroup<RouteAnalysisPathFormProperties>({
		});

	}


	/** Describes the status of an analysis at completion. */
	export interface RouteAnalysisCompletion {
		ResultCode?: RouteAnalysisCompletionResultCode;
		ReasonCode?: RouteAnalysisCompletionReasonCode;
		ReasonContext?: ReasonContextMap;
	}

	/** Describes the status of an analysis at completion. */
	export interface RouteAnalysisCompletionFormProperties {
		ResultCode: FormControl<RouteAnalysisCompletionResultCode | null | undefined>,
		ReasonCode: FormControl<RouteAnalysisCompletionReasonCode | null | undefined>,
	}
	export function CreateRouteAnalysisCompletionFormGroup() {
		return new FormGroup<RouteAnalysisCompletionFormProperties>({
			ResultCode: new FormControl<RouteAnalysisCompletionResultCode | null | undefined>(undefined),
			ReasonCode: new FormControl<RouteAnalysisCompletionReasonCode | null | undefined>(undefined),
		});

	}

	export enum RouteAnalysisCompletionResultCode { CONNECTED = 'CONNECTED', NOT_CONNECTED = 'NOT_CONNECTED' }

	export enum RouteAnalysisCompletionReasonCode { TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND = 'TRANSIT_GATEWAY_ATTACHMENT_NOT_FOUND', TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY = 'TRANSIT_GATEWAY_ATTACHMENT_NOT_IN_TRANSIT_GATEWAY', CYCLIC_PATH_DETECTED = 'CYCLIC_PATH_DETECTED', TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND = 'TRANSIT_GATEWAY_ATTACHMENT_STABLE_ROUTE_TABLE_NOT_FOUND', ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND', BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND = 'BLACKHOLE_ROUTE_FOR_DESTINATION_FOUND', INACTIVE_ROUTE_FOR_DESTINATION_FOUND = 'INACTIVE_ROUTE_FOR_DESTINATION_FOUND', TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH = 'TRANSIT_GATEWAY_ATTACHMENT_ATTACH_ARN_NO_MATCH', MAX_HOPS_EXCEEDED = 'MAX_HOPS_EXCEEDED', POSSIBLE_MIDDLEBOX = 'POSSIBLE_MIDDLEBOX', NO_DESTINATION_ARN_PROVIDED = 'NO_DESTINATION_ARN_PROVIDED' }

	export interface ReasonContextMap {
	}
	export interface ReasonContextMapFormProperties {
	}
	export function CreateReasonContextMapFormGroup() {
		return new FormGroup<ReasonContextMapFormProperties>({
		});

	}


	/** Describes a path component. */
	export interface PathComponent {
		Sequence?: number | null;
		Resource?: NetworkResourceSummary;
		DestinationCidrBlock?: string;
	}

	/** Describes a path component. */
	export interface PathComponentFormProperties {
		Sequence: FormControl<number | null | undefined>,
		DestinationCidrBlock: FormControl<string | null | undefined>,
	}
	export function CreatePathComponentFormGroup() {
		return new FormGroup<PathComponentFormProperties>({
			Sequence: new FormControl<number | null | undefined>(undefined),
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a network resource. */
	export interface NetworkResourceSummary {
		RegisteredGatewayArn?: string;
		ResourceArn?: string;
		ResourceType?: string;
		Definition?: string;
		NameTag?: string;
		IsMiddlebox?: boolean | null;
	}

	/** Describes a network resource. */
	export interface NetworkResourceSummaryFormProperties {
		RegisteredGatewayArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Definition: FormControl<string | null | undefined>,
		NameTag: FormControl<string | null | undefined>,
		IsMiddlebox: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkResourceSummaryFormGroup() {
		return new FormGroup<NetworkResourceSummaryFormProperties>({
			RegisteredGatewayArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Definition: new FormControl<string | null | undefined>(undefined),
			NameTag: new FormControl<string | null | undefined>(undefined),
			IsMiddlebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetSiteToSiteVpnAttachmentResponse {
		SiteToSiteVpnAttachment?: SiteToSiteVpnAttachment;
	}
	export interface GetSiteToSiteVpnAttachmentResponseFormProperties {
	}
	export function CreateGetSiteToSiteVpnAttachmentResponseFormGroup() {
		return new FormGroup<GetSiteToSiteVpnAttachmentResponseFormProperties>({
		});

	}

	export interface GetSitesResponse {
		Sites?: Array<Site>;
		NextToken?: string;
	}
	export interface GetSitesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSitesResponseFormGroup() {
		return new FormGroup<GetSitesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransitGatewayConnectPeerAssociationsResponse {
		TransitGatewayConnectPeerAssociations?: Array<TransitGatewayConnectPeerAssociation>;
		NextToken?: string;
	}
	export interface GetTransitGatewayConnectPeerAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTransitGatewayConnectPeerAssociationsResponseFormGroup() {
		return new FormGroup<GetTransitGatewayConnectPeerAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransitGatewayPeeringResponse {
		TransitGatewayPeering?: TransitGatewayPeering;
	}
	export interface GetTransitGatewayPeeringResponseFormProperties {
	}
	export function CreateGetTransitGatewayPeeringResponseFormGroup() {
		return new FormGroup<GetTransitGatewayPeeringResponseFormProperties>({
		});

	}

	export interface GetTransitGatewayRegistrationsResponse {
		TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
		NextToken?: string;
	}
	export interface GetTransitGatewayRegistrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTransitGatewayRegistrationsResponseFormGroup() {
		return new FormGroup<GetTransitGatewayRegistrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransitGatewayRouteTableAttachmentResponse {
		TransitGatewayRouteTableAttachment?: TransitGatewayRouteTableAttachment;
	}
	export interface GetTransitGatewayRouteTableAttachmentResponseFormProperties {
	}
	export function CreateGetTransitGatewayRouteTableAttachmentResponseFormGroup() {
		return new FormGroup<GetTransitGatewayRouteTableAttachmentResponseFormProperties>({
		});

	}

	export interface GetVpcAttachmentResponse {
		VpcAttachment?: VpcAttachment;
	}
	export interface GetVpcAttachmentResponseFormProperties {
	}
	export function CreateGetVpcAttachmentResponseFormGroup() {
		return new FormGroup<GetVpcAttachmentResponseFormProperties>({
		});

	}

	export interface ListAttachmentsResponse {
		Attachments?: Array<Attachment>;
		NextToken?: string;
	}
	export interface ListAttachmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttachmentsResponseFormGroup() {
		return new FormGroup<ListAttachmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectPeersResponse {
		ConnectPeers?: Array<ConnectPeerSummary>;
		NextToken?: string;
	}
	export interface ListConnectPeersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectPeersResponseFormGroup() {
		return new FormGroup<ListConnectPeersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary description of a Connect peer. */
	export interface ConnectPeerSummary {
		CoreNetworkId?: string;
		ConnectAttachmentId?: string;
		ConnectPeerId?: string;
		EdgeLocation?: string;
		ConnectPeerState?: ConnectPeerState;
		CreatedAt?: Date;
		Tags?: Array<Tag>;
	}

	/** Summary description of a Connect peer. */
	export interface ConnectPeerSummaryFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		ConnectAttachmentId: FormControl<string | null | undefined>,
		ConnectPeerId: FormControl<string | null | undefined>,
		EdgeLocation: FormControl<string | null | undefined>,
		ConnectPeerState: FormControl<ConnectPeerState | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectPeerSummaryFormGroup() {
		return new FormGroup<ConnectPeerSummaryFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			ConnectAttachmentId: new FormControl<string | null | undefined>(undefined),
			ConnectPeerId: new FormControl<string | null | undefined>(undefined),
			EdgeLocation: new FormControl<string | null | undefined>(undefined),
			ConnectPeerState: new FormControl<ConnectPeerState | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCoreNetworkPolicyVersionsResponse {
		CoreNetworkPolicyVersions?: Array<CoreNetworkPolicyVersion>;
		NextToken?: string;
	}
	export interface ListCoreNetworkPolicyVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoreNetworkPolicyVersionsResponseFormGroup() {
		return new FormGroup<ListCoreNetworkPolicyVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a core network policy version. */
	export interface CoreNetworkPolicyVersion {
		CoreNetworkId?: string;
		PolicyVersionId?: number | null;
		Alias?: CoreNetworkPolicyAlias;
		Description?: string;
		CreatedAt?: Date;
		ChangeSetState?: ChangeSetState;
	}

	/** Describes a core network policy version. */
	export interface CoreNetworkPolicyVersionFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		PolicyVersionId: FormControl<number | null | undefined>,
		Alias: FormControl<CoreNetworkPolicyAlias | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ChangeSetState: FormControl<ChangeSetState | null | undefined>,
	}
	export function CreateCoreNetworkPolicyVersionFormGroup() {
		return new FormGroup<CoreNetworkPolicyVersionFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			PolicyVersionId: new FormControl<number | null | undefined>(undefined),
			Alias: new FormControl<CoreNetworkPolicyAlias | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ChangeSetState: new FormControl<ChangeSetState | null | undefined>(undefined),
		});

	}

	export interface ListCoreNetworksResponse {
		CoreNetworks?: Array<CoreNetworkSummary>;
		NextToken?: string;
	}
	export interface ListCoreNetworksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoreNetworksResponseFormGroup() {
		return new FormGroup<ListCoreNetworksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns summary information about a core network. */
	export interface CoreNetworkSummary {
		CoreNetworkId?: string;
		CoreNetworkArn?: string;
		GlobalNetworkId?: string;
		OwnerAccountId?: string;
		State?: CoreNetworkState;
		Description?: string;
		Tags?: Array<Tag>;
	}

	/** Returns summary information about a core network. */
	export interface CoreNetworkSummaryFormProperties {
		CoreNetworkId: FormControl<string | null | undefined>,
		CoreNetworkArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		State: FormControl<CoreNetworkState | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCoreNetworkSummaryFormGroup() {
		return new FormGroup<CoreNetworkSummaryFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined),
			CoreNetworkArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CoreNetworkState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationServiceAccessStatusResponse {
		OrganizationStatus?: OrganizationStatus;
		NextToken?: string;
	}
	export interface ListOrganizationServiceAccessStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationServiceAccessStatusResponseFormGroup() {
		return new FormGroup<ListOrganizationServiceAccessStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of an Amazon Web Services Organization and the accounts within that organization. */
	export interface OrganizationStatus {
		OrganizationId?: string;
		OrganizationAwsServiceAccessStatus?: string;
		SLRDeploymentStatus?: string;
		AccountStatusList?: Array<AccountStatus>;
	}

	/** The status of an Amazon Web Services Organization and the accounts within that organization. */
	export interface OrganizationStatusFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		OrganizationAwsServiceAccessStatus: FormControl<string | null | undefined>,
		SLRDeploymentStatus: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationStatusFormGroup() {
		return new FormGroup<OrganizationStatusFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			OrganizationAwsServiceAccessStatus: new FormControl<string | null | undefined>(undefined),
			SLRDeploymentStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs). */
	export interface AccountStatus {
		AccountId?: string;
		SLRDeploymentStatus?: string;
	}

	/** Describes the current status of an account within an Amazon Web Services Organization, including service-linked roles (SLRs). */
	export interface AccountStatusFormProperties {
		AccountId: FormControl<string | null | undefined>,
		SLRDeploymentStatus: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusFormGroup() {
		return new FormGroup<AccountStatusFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			SLRDeploymentStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPeeringsResponse {
		Peerings?: Array<Peering>;
		NextToken?: string;
	}
	export interface ListPeeringsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPeeringsResponseFormGroup() {
		return new FormGroup<ListPeeringsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutCoreNetworkPolicyResponse {
		CoreNetworkPolicy?: CoreNetworkPolicy;
	}
	export interface PutCoreNetworkPolicyResponseFormProperties {
	}
	export function CreatePutCoreNetworkPolicyResponseFormGroup() {
		return new FormGroup<PutCoreNetworkPolicyResponseFormProperties>({
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

	export interface RegisterTransitGatewayResponse {
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}
	export interface RegisterTransitGatewayResponseFormProperties {
	}
	export function CreateRegisterTransitGatewayResponseFormGroup() {
		return new FormGroup<RegisterTransitGatewayResponseFormProperties>({
		});

	}

	export interface RejectAttachmentResponse {
		Attachment?: Attachment;
	}
	export interface RejectAttachmentResponseFormProperties {
	}
	export function CreateRejectAttachmentResponseFormGroup() {
		return new FormGroup<RejectAttachmentResponseFormProperties>({
		});

	}

	export interface RestoreCoreNetworkPolicyVersionResponse {
		CoreNetworkPolicy?: CoreNetworkPolicy;
	}
	export interface RestoreCoreNetworkPolicyVersionResponseFormProperties {
	}
	export function CreateRestoreCoreNetworkPolicyVersionResponseFormGroup() {
		return new FormGroup<RestoreCoreNetworkPolicyVersionResponseFormProperties>({
		});

	}

	export interface StartOrganizationServiceAccessUpdateResponse {
		OrganizationStatus?: OrganizationStatus;
	}
	export interface StartOrganizationServiceAccessUpdateResponseFormProperties {
	}
	export function CreateStartOrganizationServiceAccessUpdateResponseFormGroup() {
		return new FormGroup<StartOrganizationServiceAccessUpdateResponseFormProperties>({
		});

	}

	export interface StartRouteAnalysisResponse {
		RouteAnalysis?: RouteAnalysis;
	}
	export interface StartRouteAnalysisResponseFormProperties {
	}
	export function CreateStartRouteAnalysisResponseFormGroup() {
		return new FormGroup<StartRouteAnalysisResponseFormProperties>({
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

	export interface UpdateConnectionResponse {
		Connection?: Connection;
	}
	export interface UpdateConnectionResponseFormProperties {
	}
	export function CreateUpdateConnectionResponseFormGroup() {
		return new FormGroup<UpdateConnectionResponseFormProperties>({
		});

	}

	export interface UpdateCoreNetworkResponse {
		CoreNetwork?: CoreNetwork;
	}
	export interface UpdateCoreNetworkResponseFormProperties {
	}
	export function CreateUpdateCoreNetworkResponseFormGroup() {
		return new FormGroup<UpdateCoreNetworkResponseFormProperties>({
		});

	}

	export interface UpdateDeviceResponse {
		Device?: Device;
	}
	export interface UpdateDeviceResponseFormProperties {
	}
	export function CreateUpdateDeviceResponseFormGroup() {
		return new FormGroup<UpdateDeviceResponseFormProperties>({
		});

	}

	export interface UpdateGlobalNetworkResponse {
		GlobalNetwork?: GlobalNetwork;
	}
	export interface UpdateGlobalNetworkResponseFormProperties {
	}
	export function CreateUpdateGlobalNetworkResponseFormGroup() {
		return new FormGroup<UpdateGlobalNetworkResponseFormProperties>({
		});

	}

	export interface UpdateLinkResponse {
		Link?: Link;
	}
	export interface UpdateLinkResponseFormProperties {
	}
	export function CreateUpdateLinkResponseFormGroup() {
		return new FormGroup<UpdateLinkResponseFormProperties>({
		});

	}

	export interface UpdateNetworkResourceMetadataResponse {
		ResourceArn?: string;
		Metadata?: NetworkResourceMetadataMap;
	}
	export interface UpdateNetworkResourceMetadataResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkResourceMetadataResponseFormGroup() {
		return new FormGroup<UpdateNetworkResourceMetadataResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteResponse {
		Site?: Site;
	}
	export interface UpdateSiteResponseFormProperties {
	}
	export function CreateUpdateSiteResponseFormGroup() {
		return new FormGroup<UpdateSiteResponseFormProperties>({
		});

	}

	export interface UpdateVpcAttachmentResponse {
		VpcAttachment?: VpcAttachment;
	}
	export interface UpdateVpcAttachmentResponseFormProperties {
	}
	export function CreateUpdateVpcAttachmentResponseFormGroup() {
		return new FormGroup<UpdateVpcAttachmentResponseFormProperties>({
		});

	}

	export interface AcceptAttachmentRequest {
	}
	export interface AcceptAttachmentRequestFormProperties {
	}
	export function CreateAcceptAttachmentRequestFormGroup() {
		return new FormGroup<AcceptAttachmentRequestFormProperties>({
		});

	}

	export interface AssociateConnectPeerRequest {

		/** Required */
		ConnectPeerId: string;

		/** Required */
		DeviceId: string;
		LinkId?: string;
	}
	export interface AssociateConnectPeerRequestFormProperties {

		/** Required */
		ConnectPeerId: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConnectPeerRequestFormGroup() {
		return new FormGroup<AssociateConnectPeerRequestFormProperties>({
			ConnectPeerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateCustomerGatewayRequest {

		/** Required */
		CustomerGatewayArn: string;

		/** Required */
		DeviceId: string;
		LinkId?: string;
	}
	export interface AssociateCustomerGatewayRequestFormProperties {

		/** Required */
		CustomerGatewayArn: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCustomerGatewayRequestFormGroup() {
		return new FormGroup<AssociateCustomerGatewayRequestFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateLinkRequest {

		/** Required */
		DeviceId: string;

		/** Required */
		LinkId: string;
	}
	export interface AssociateLinkRequestFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLinkRequestFormGroup() {
		return new FormGroup<AssociateLinkRequestFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateTransitGatewayConnectPeerRequest {

		/** Required */
		TransitGatewayConnectPeerArn: string;

		/** Required */
		DeviceId: string;
		LinkId?: string;
	}
	export interface AssociateTransitGatewayConnectPeerRequestFormProperties {

		/** Required */
		TransitGatewayConnectPeerArn: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTransitGatewayConnectPeerRequestFormGroup() {
		return new FormGroup<AssociateTransitGatewayConnectPeerRequestFormProperties>({
			TransitGatewayConnectPeerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the BGP options. */
	export interface BgpOptions {
		PeerAsn?: number | null;
	}

	/** Describes the BGP options. */
	export interface BgpOptionsFormProperties {
		PeerAsn: FormControl<number | null | undefined>,
	}
	export function CreateBgpOptionsFormGroup() {
		return new FormGroup<BgpOptionsFormProperties>({
			PeerAsn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateConnectAttachmentRequest {

		/** Required */
		CoreNetworkId: string;

		/** Required */
		EdgeLocation: string;

		/** Required */
		TransportAttachmentId: string;

		/** Required */
		Options: ConnectAttachmentOptions;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateConnectAttachmentRequestFormProperties {

		/** Required */
		CoreNetworkId: FormControl<string | null | undefined>,

		/** Required */
		EdgeLocation: FormControl<string | null | undefined>,

		/** Required */
		TransportAttachmentId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectAttachmentRequestFormGroup() {
		return new FormGroup<CreateConnectAttachmentRequestFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EdgeLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransportAttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectPeerRequest {

		/** Required */
		ConnectAttachmentId: string;
		CoreNetworkAddress?: string;

		/** Required */
		PeerAddress: string;
		BgpOptions?: BgpOptions;

		/** Required */
		InsideCidrBlocks: Array<string>;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateConnectPeerRequestFormProperties {

		/** Required */
		ConnectAttachmentId: FormControl<string | null | undefined>,
		CoreNetworkAddress: FormControl<string | null | undefined>,

		/** Required */
		PeerAddress: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectPeerRequestFormGroup() {
		return new FormGroup<CreateConnectPeerRequestFormProperties>({
			ConnectAttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CoreNetworkAddress: new FormControl<string | null | undefined>(undefined),
			PeerAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionRequest {

		/** Required */
		DeviceId: string;

		/** Required */
		ConnectedDeviceId: string;
		LinkId?: string;
		ConnectedLinkId?: string;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionRequestFormProperties {

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		ConnectedDeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		ConnectedLinkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectedDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkId: new FormControl<string | null | undefined>(undefined),
			ConnectedLinkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCoreNetworkRequest {

		/** Required */
		GlobalNetworkId: string;
		Description?: string;
		Tags?: Array<Tag>;
		PolicyDocument?: string;
		ClientToken?: string;
	}
	export interface CreateCoreNetworkRequestFormProperties {

		/** Required */
		GlobalNetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCoreNetworkRequestFormGroup() {
		return new FormGroup<CreateCoreNetworkRequestFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceRequest {
		AWSLocation?: AWSLocation;
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;
		Location?: Location;
		SiteId?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateDeviceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceRequestFormGroup() {
		return new FormGroup<CreateDeviceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGlobalNetworkRequest {
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateGlobalNetworkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalNetworkRequestFormGroup() {
		return new FormGroup<CreateGlobalNetworkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLinkRequest {
		Description?: string;
		Type?: string;

		/** Required */
		Bandwidth: Bandwidth;
		Provider?: string;

		/** Required */
		SiteId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateLinkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,

		/** Required */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkRequestFormGroup() {
		return new FormGroup<CreateLinkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSiteRequest {
		Description?: string;
		Location?: Location;
		Tags?: Array<Tag>;
	}
	export interface CreateSiteRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteRequestFormGroup() {
		return new FormGroup<CreateSiteRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSiteToSiteVpnAttachmentRequest {

		/** Required */
		CoreNetworkId: string;

		/** Required */
		VpnConnectionArn: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateSiteToSiteVpnAttachmentRequestFormProperties {

		/** Required */
		CoreNetworkId: FormControl<string | null | undefined>,

		/** Required */
		VpnConnectionArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteToSiteVpnAttachmentRequestFormGroup() {
		return new FormGroup<CreateSiteToSiteVpnAttachmentRequestFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpnConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTransitGatewayPeeringRequest {

		/** Required */
		CoreNetworkId: string;

		/** Required */
		TransitGatewayArn: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateTransitGatewayPeeringRequestFormProperties {

		/** Required */
		CoreNetworkId: FormControl<string | null | undefined>,

		/** Required */
		TransitGatewayArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransitGatewayPeeringRequestFormGroup() {
		return new FormGroup<CreateTransitGatewayPeeringRequestFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTransitGatewayRouteTableAttachmentRequest {

		/** Required */
		PeeringId: string;

		/** Required */
		TransitGatewayRouteTableArn: string;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateTransitGatewayRouteTableAttachmentRequestFormProperties {

		/** Required */
		PeeringId: FormControl<string | null | undefined>,

		/** Required */
		TransitGatewayRouteTableArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransitGatewayRouteTableAttachmentRequestFormGroup() {
		return new FormGroup<CreateTransitGatewayRouteTableAttachmentRequestFormProperties>({
			PeeringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransitGatewayRouteTableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcAttachmentRequest {

		/** Required */
		CoreNetworkId: string;

		/** Required */
		VpcArn: string;

		/** Required */
		SubnetArns: Array<string>;
		Options?: VpcOptions;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateVpcAttachmentRequestFormProperties {

		/** Required */
		CoreNetworkId: FormControl<string | null | undefined>,

		/** Required */
		VpcArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcAttachmentRequestFormGroup() {
		return new FormGroup<CreateVpcAttachmentRequestFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomerGatewayAssociationState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface DeleteAttachmentRequest {
	}
	export interface DeleteAttachmentRequestFormProperties {
	}
	export function CreateDeleteAttachmentRequestFormGroup() {
		return new FormGroup<DeleteAttachmentRequestFormProperties>({
		});

	}

	export interface DeleteConnectPeerRequest {
	}
	export interface DeleteConnectPeerRequestFormProperties {
	}
	export function CreateDeleteConnectPeerRequestFormGroup() {
		return new FormGroup<DeleteConnectPeerRequestFormProperties>({
		});

	}

	export interface DeleteConnectionRequest {
	}
	export interface DeleteConnectionRequestFormProperties {
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
		});

	}

	export interface DeleteCoreNetworkPolicyVersionRequest {
	}
	export interface DeleteCoreNetworkPolicyVersionRequestFormProperties {
	}
	export function CreateDeleteCoreNetworkPolicyVersionRequestFormGroup() {
		return new FormGroup<DeleteCoreNetworkPolicyVersionRequestFormProperties>({
		});

	}

	export interface DeleteCoreNetworkRequest {
	}
	export interface DeleteCoreNetworkRequestFormProperties {
	}
	export function CreateDeleteCoreNetworkRequestFormGroup() {
		return new FormGroup<DeleteCoreNetworkRequestFormProperties>({
		});

	}

	export interface DeleteDeviceRequest {
	}
	export interface DeleteDeviceRequestFormProperties {
	}
	export function CreateDeleteDeviceRequestFormGroup() {
		return new FormGroup<DeleteDeviceRequestFormProperties>({
		});

	}

	export interface DeleteGlobalNetworkRequest {
	}
	export interface DeleteGlobalNetworkRequestFormProperties {
	}
	export function CreateDeleteGlobalNetworkRequestFormGroup() {
		return new FormGroup<DeleteGlobalNetworkRequestFormProperties>({
		});

	}

	export interface DeleteLinkRequest {
	}
	export interface DeleteLinkRequestFormProperties {
	}
	export function CreateDeleteLinkRequestFormGroup() {
		return new FormGroup<DeleteLinkRequestFormProperties>({
		});

	}

	export interface DeletePeeringRequest {
	}
	export interface DeletePeeringRequestFormProperties {
	}
	export function CreateDeletePeeringRequestFormGroup() {
		return new FormGroup<DeletePeeringRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {
	}
	export interface DeleteResourcePolicyRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
		});

	}

	export interface DeleteSiteRequest {
	}
	export interface DeleteSiteRequestFormProperties {
	}
	export function CreateDeleteSiteRequestFormGroup() {
		return new FormGroup<DeleteSiteRequestFormProperties>({
		});

	}

	export interface DeregisterTransitGatewayRequest {
	}
	export interface DeregisterTransitGatewayRequestFormProperties {
	}
	export function CreateDeregisterTransitGatewayRequestFormGroup() {
		return new FormGroup<DeregisterTransitGatewayRequestFormProperties>({
		});

	}

	export interface DescribeGlobalNetworksRequest {
	}
	export interface DescribeGlobalNetworksRequestFormProperties {
	}
	export function CreateDescribeGlobalNetworksRequestFormGroup() {
		return new FormGroup<DescribeGlobalNetworksRequestFormProperties>({
		});

	}

	export enum DeviceState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export interface DisassociateConnectPeerRequest {
	}
	export interface DisassociateConnectPeerRequestFormProperties {
	}
	export function CreateDisassociateConnectPeerRequestFormGroup() {
		return new FormGroup<DisassociateConnectPeerRequestFormProperties>({
		});

	}

	export interface DisassociateCustomerGatewayRequest {
	}
	export interface DisassociateCustomerGatewayRequestFormProperties {
	}
	export function CreateDisassociateCustomerGatewayRequestFormGroup() {
		return new FormGroup<DisassociateCustomerGatewayRequestFormProperties>({
		});

	}

	export interface DisassociateLinkRequest {
	}
	export interface DisassociateLinkRequestFormProperties {
	}
	export function CreateDisassociateLinkRequestFormGroup() {
		return new FormGroup<DisassociateLinkRequestFormProperties>({
		});

	}

	export interface DisassociateTransitGatewayConnectPeerRequest {
	}
	export interface DisassociateTransitGatewayConnectPeerRequestFormProperties {
	}
	export function CreateDisassociateTransitGatewayConnectPeerRequestFormGroup() {
		return new FormGroup<DisassociateTransitGatewayConnectPeerRequestFormProperties>({
		});

	}

	export interface ExecuteCoreNetworkChangeSetRequest {
	}
	export interface ExecuteCoreNetworkChangeSetRequestFormProperties {
	}
	export function CreateExecuteCoreNetworkChangeSetRequestFormGroup() {
		return new FormGroup<ExecuteCoreNetworkChangeSetRequestFormProperties>({
		});

	}

	export interface FilterMap {
	}
	export interface FilterMapFormProperties {
	}
	export function CreateFilterMapFormGroup() {
		return new FormGroup<FilterMapFormProperties>({
		});

	}

	export interface GetConnectAttachmentRequest {
	}
	export interface GetConnectAttachmentRequestFormProperties {
	}
	export function CreateGetConnectAttachmentRequestFormGroup() {
		return new FormGroup<GetConnectAttachmentRequestFormProperties>({
		});

	}

	export interface GetConnectPeerAssociationsRequest {
	}
	export interface GetConnectPeerAssociationsRequestFormProperties {
	}
	export function CreateGetConnectPeerAssociationsRequestFormGroup() {
		return new FormGroup<GetConnectPeerAssociationsRequestFormProperties>({
		});

	}

	export interface GetConnectPeerRequest {
	}
	export interface GetConnectPeerRequestFormProperties {
	}
	export function CreateGetConnectPeerRequestFormGroup() {
		return new FormGroup<GetConnectPeerRequestFormProperties>({
		});

	}

	export interface GetConnectionsRequest {
	}
	export interface GetConnectionsRequestFormProperties {
	}
	export function CreateGetConnectionsRequestFormGroup() {
		return new FormGroup<GetConnectionsRequestFormProperties>({
		});

	}

	export interface GetCoreNetworkChangeEventsRequest {
	}
	export interface GetCoreNetworkChangeEventsRequestFormProperties {
	}
	export function CreateGetCoreNetworkChangeEventsRequestFormGroup() {
		return new FormGroup<GetCoreNetworkChangeEventsRequestFormProperties>({
		});

	}

	export interface GetCoreNetworkChangeSetRequest {
	}
	export interface GetCoreNetworkChangeSetRequestFormProperties {
	}
	export function CreateGetCoreNetworkChangeSetRequestFormGroup() {
		return new FormGroup<GetCoreNetworkChangeSetRequestFormProperties>({
		});

	}

	export interface GetCoreNetworkPolicyRequest {
	}
	export interface GetCoreNetworkPolicyRequestFormProperties {
	}
	export function CreateGetCoreNetworkPolicyRequestFormGroup() {
		return new FormGroup<GetCoreNetworkPolicyRequestFormProperties>({
		});

	}

	export interface GetCoreNetworkRequest {
	}
	export interface GetCoreNetworkRequestFormProperties {
	}
	export function CreateGetCoreNetworkRequestFormGroup() {
		return new FormGroup<GetCoreNetworkRequestFormProperties>({
		});

	}

	export interface GetCustomerGatewayAssociationsRequest {
	}
	export interface GetCustomerGatewayAssociationsRequestFormProperties {
	}
	export function CreateGetCustomerGatewayAssociationsRequestFormGroup() {
		return new FormGroup<GetCustomerGatewayAssociationsRequestFormProperties>({
		});

	}

	export interface GetDevicesRequest {
	}
	export interface GetDevicesRequestFormProperties {
	}
	export function CreateGetDevicesRequestFormGroup() {
		return new FormGroup<GetDevicesRequestFormProperties>({
		});

	}

	export interface GetLinkAssociationsRequest {
	}
	export interface GetLinkAssociationsRequestFormProperties {
	}
	export function CreateGetLinkAssociationsRequestFormGroup() {
		return new FormGroup<GetLinkAssociationsRequestFormProperties>({
		});

	}

	export interface GetLinksRequest {
	}
	export interface GetLinksRequestFormProperties {
	}
	export function CreateGetLinksRequestFormGroup() {
		return new FormGroup<GetLinksRequestFormProperties>({
		});

	}

	export interface GetNetworkResourceCountsRequest {
	}
	export interface GetNetworkResourceCountsRequestFormProperties {
	}
	export function CreateGetNetworkResourceCountsRequestFormGroup() {
		return new FormGroup<GetNetworkResourceCountsRequestFormProperties>({
		});

	}

	export interface GetNetworkResourceRelationshipsRequest {
	}
	export interface GetNetworkResourceRelationshipsRequestFormProperties {
	}
	export function CreateGetNetworkResourceRelationshipsRequestFormGroup() {
		return new FormGroup<GetNetworkResourceRelationshipsRequestFormProperties>({
		});

	}

	export interface GetNetworkResourcesRequest {
	}
	export interface GetNetworkResourcesRequestFormProperties {
	}
	export function CreateGetNetworkResourcesRequestFormGroup() {
		return new FormGroup<GetNetworkResourcesRequestFormProperties>({
		});

	}


	/** Describes a route table. */
	export interface RouteTableIdentifier {
		TransitGatewayRouteTableArn?: string;
		CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
	}

	/** Describes a route table. */
	export interface RouteTableIdentifierFormProperties {
		TransitGatewayRouteTableArn: FormControl<string | null | undefined>,
	}
	export function CreateRouteTableIdentifierFormGroup() {
		return new FormGroup<RouteTableIdentifierFormProperties>({
			TransitGatewayRouteTableArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNetworkRoutesRequest {

		/** Required */
		RouteTableIdentifier: RouteTableIdentifier;
		ExactCidrMatches?: Array<string>;
		LongestPrefixMatches?: Array<string>;
		SubnetOfMatches?: Array<string>;
		SupernetOfMatches?: Array<string>;
		PrefixListIds?: Array<string>;
		States?: Array<RouteState>;
		Types?: Array<RouteType>;
		DestinationFilters?: FilterMap;
	}
	export interface GetNetworkRoutesRequestFormProperties {
	}
	export function CreateGetNetworkRoutesRequestFormGroup() {
		return new FormGroup<GetNetworkRoutesRequestFormProperties>({
		});

	}

	export interface GetNetworkTelemetryRequest {
	}
	export interface GetNetworkTelemetryRequestFormProperties {
	}
	export function CreateGetNetworkTelemetryRequestFormGroup() {
		return new FormGroup<GetNetworkTelemetryRequestFormProperties>({
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
		});

	}

	export interface GetRouteAnalysisRequest {
	}
	export interface GetRouteAnalysisRequestFormProperties {
	}
	export function CreateGetRouteAnalysisRequestFormGroup() {
		return new FormGroup<GetRouteAnalysisRequestFormProperties>({
		});

	}

	export interface GetSiteToSiteVpnAttachmentRequest {
	}
	export interface GetSiteToSiteVpnAttachmentRequestFormProperties {
	}
	export function CreateGetSiteToSiteVpnAttachmentRequestFormGroup() {
		return new FormGroup<GetSiteToSiteVpnAttachmentRequestFormProperties>({
		});

	}

	export interface GetSitesRequest {
	}
	export interface GetSitesRequestFormProperties {
	}
	export function CreateGetSitesRequestFormGroup() {
		return new FormGroup<GetSitesRequestFormProperties>({
		});

	}

	export interface GetTransitGatewayConnectPeerAssociationsRequest {
	}
	export interface GetTransitGatewayConnectPeerAssociationsRequestFormProperties {
	}
	export function CreateGetTransitGatewayConnectPeerAssociationsRequestFormGroup() {
		return new FormGroup<GetTransitGatewayConnectPeerAssociationsRequestFormProperties>({
		});

	}

	export interface GetTransitGatewayPeeringRequest {
	}
	export interface GetTransitGatewayPeeringRequestFormProperties {
	}
	export function CreateGetTransitGatewayPeeringRequestFormGroup() {
		return new FormGroup<GetTransitGatewayPeeringRequestFormProperties>({
		});

	}

	export interface GetTransitGatewayRegistrationsRequest {
	}
	export interface GetTransitGatewayRegistrationsRequestFormProperties {
	}
	export function CreateGetTransitGatewayRegistrationsRequestFormGroup() {
		return new FormGroup<GetTransitGatewayRegistrationsRequestFormProperties>({
		});

	}

	export interface GetTransitGatewayRouteTableAttachmentRequest {
	}
	export interface GetTransitGatewayRouteTableAttachmentRequestFormProperties {
	}
	export function CreateGetTransitGatewayRouteTableAttachmentRequestFormGroup() {
		return new FormGroup<GetTransitGatewayRouteTableAttachmentRequestFormProperties>({
		});

	}

	export interface GetVpcAttachmentRequest {
	}
	export interface GetVpcAttachmentRequestFormProperties {
	}
	export function CreateGetVpcAttachmentRequestFormGroup() {
		return new FormGroup<GetVpcAttachmentRequestFormProperties>({
		});

	}

	export enum GlobalNetworkState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export enum LinkState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export enum LinkAssociationState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface ListAttachmentsRequest {
	}
	export interface ListAttachmentsRequestFormProperties {
	}
	export function CreateListAttachmentsRequestFormGroup() {
		return new FormGroup<ListAttachmentsRequestFormProperties>({
		});

	}

	export interface ListConnectPeersRequest {
	}
	export interface ListConnectPeersRequestFormProperties {
	}
	export function CreateListConnectPeersRequestFormGroup() {
		return new FormGroup<ListConnectPeersRequestFormProperties>({
		});

	}

	export interface ListCoreNetworkPolicyVersionsRequest {
	}
	export interface ListCoreNetworkPolicyVersionsRequestFormProperties {
	}
	export function CreateListCoreNetworkPolicyVersionsRequestFormGroup() {
		return new FormGroup<ListCoreNetworkPolicyVersionsRequestFormProperties>({
		});

	}

	export interface ListCoreNetworksRequest {
	}
	export interface ListCoreNetworksRequestFormProperties {
	}
	export function CreateListCoreNetworksRequestFormGroup() {
		return new FormGroup<ListCoreNetworksRequestFormProperties>({
		});

	}

	export interface ListOrganizationServiceAccessStatusRequest {
	}
	export interface ListOrganizationServiceAccessStatusRequestFormProperties {
	}
	export function CreateListOrganizationServiceAccessStatusRequestFormGroup() {
		return new FormGroup<ListOrganizationServiceAccessStatusRequestFormProperties>({
		});

	}

	export enum PeeringState { CREATING = 'CREATING', FAILED = 'FAILED', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING' }

	export interface ListPeeringsRequest {
	}
	export interface ListPeeringsRequestFormProperties {
	}
	export function CreateListPeeringsRequestFormGroup() {
		return new FormGroup<ListPeeringsRequestFormProperties>({
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

	export interface PutCoreNetworkPolicyRequest {

		/** Required */
		PolicyDocument: string;
		Description?: string;
		LatestVersionId?: number | null;
		ClientToken?: string;
	}
	export interface PutCoreNetworkPolicyRequestFormProperties {

		/** Required */
		PolicyDocument: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LatestVersionId: FormControl<number | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutCoreNetworkPolicyRequestFormGroup() {
		return new FormGroup<PutCoreNetworkPolicyRequestFormProperties>({
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LatestVersionId: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		PolicyDocument: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterTransitGatewayRequest {

		/** Required */
		TransitGatewayArn: string;
	}
	export interface RegisterTransitGatewayRequestFormProperties {

		/** Required */
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTransitGatewayRequestFormGroup() {
		return new FormGroup<RegisterTransitGatewayRequestFormProperties>({
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectAttachmentRequest {
	}
	export interface RejectAttachmentRequestFormProperties {
	}
	export function CreateRejectAttachmentRequestFormGroup() {
		return new FormGroup<RejectAttachmentRequestFormProperties>({
		});

	}

	export interface RestoreCoreNetworkPolicyVersionRequest {
	}
	export interface RestoreCoreNetworkPolicyVersionRequestFormProperties {
	}
	export function CreateRestoreCoreNetworkPolicyVersionRequestFormGroup() {
		return new FormGroup<RestoreCoreNetworkPolicyVersionRequestFormProperties>({
		});

	}


	/** Describes a source or a destination. */
	export interface RouteAnalysisEndpointOptionsSpecification {
		TransitGatewayAttachmentArn?: string;
		IpAddress?: string;
	}

	/** Describes a source or a destination. */
	export interface RouteAnalysisEndpointOptionsSpecificationFormProperties {
		TransitGatewayAttachmentArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateRouteAnalysisEndpointOptionsSpecificationFormGroup() {
		return new FormGroup<RouteAnalysisEndpointOptionsSpecificationFormProperties>({
			TransitGatewayAttachmentArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SiteState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', UPDATING = 'UPDATING' }

	export interface StartOrganizationServiceAccessUpdateRequest {

		/** Required */
		Action: string;
	}
	export interface StartOrganizationServiceAccessUpdateRequestFormProperties {

		/** Required */
		Action: FormControl<string | null | undefined>,
	}
	export function CreateStartOrganizationServiceAccessUpdateRequestFormGroup() {
		return new FormGroup<StartOrganizationServiceAccessUpdateRequestFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartRouteAnalysisRequest {

		/** Required */
		Source: RouteAnalysisEndpointOptionsSpecification;

		/** Required */
		Destination: RouteAnalysisEndpointOptionsSpecification;
		IncludeReturnPath?: boolean | null;
		UseMiddleboxes?: boolean | null;
	}
	export interface StartRouteAnalysisRequestFormProperties {
		IncludeReturnPath: FormControl<boolean | null | undefined>,
		UseMiddleboxes: FormControl<boolean | null | undefined>,
	}
	export function CreateStartRouteAnalysisRequestFormGroup() {
		return new FormGroup<StartRouteAnalysisRequestFormProperties>({
			IncludeReturnPath: new FormControl<boolean | null | undefined>(undefined),
			UseMiddleboxes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export enum TransitGatewayConnectPeerAssociationState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateConnectionRequest {
		LinkId?: string;
		ConnectedLinkId?: string;
		Description?: string;
	}
	export interface UpdateConnectionRequestFormProperties {
		LinkId: FormControl<string | null | undefined>,
		ConnectedLinkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionRequestFormGroup() {
		return new FormGroup<UpdateConnectionRequestFormProperties>({
			LinkId: new FormControl<string | null | undefined>(undefined),
			ConnectedLinkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCoreNetworkRequest {
		Description?: string;
	}
	export interface UpdateCoreNetworkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCoreNetworkRequestFormGroup() {
		return new FormGroup<UpdateCoreNetworkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceRequest {
		AWSLocation?: AWSLocation;
		Description?: string;
		Type?: string;
		Vendor?: string;
		Model?: string;
		SerialNumber?: string;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string;
	}
	export interface UpdateDeviceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceRequestFormGroup() {
		return new FormGroup<UpdateDeviceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalNetworkRequest {
		Description?: string;
	}
	export interface UpdateGlobalNetworkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalNetworkRequestFormGroup() {
		return new FormGroup<UpdateGlobalNetworkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLinkRequest {
		Description?: string;
		Type?: string;
		Bandwidth?: Bandwidth;
		Provider?: string;
	}
	export interface UpdateLinkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkRequestFormGroup() {
		return new FormGroup<UpdateLinkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkResourceMetadataRequest {

		/** Required */
		Metadata: NetworkResourceMetadataMap;
	}
	export interface UpdateNetworkResourceMetadataRequestFormProperties {
	}
	export function CreateUpdateNetworkResourceMetadataRequestFormGroup() {
		return new FormGroup<UpdateNetworkResourceMetadataRequestFormProperties>({
		});

	}

	export interface UpdateSiteRequest {
		Description?: string;
		Location?: Location;
	}
	export interface UpdateSiteRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSiteRequestFormGroup() {
		return new FormGroup<UpdateSiteRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcAttachmentRequest {
		AddSubnetArns?: Array<string>;
		RemoveSubnetArns?: Array<string>;
		Options?: VpcOptions;
	}
	export interface UpdateVpcAttachmentRequestFormProperties {
	}
	export function CreateUpdateVpcAttachmentRequestFormGroup() {
		return new FormGroup<UpdateVpcAttachmentRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts a core network attachment request. </p> <p>Once the attachment request is accepted by a core network owner, the attachment is created and connected to a core network.</p>
		 * Post attachments/{attachmentId}/accept
		 * @param {string} attachmentId The ID of the attachment. 
		 * @return {AcceptAttachmentResponse} Success
		 */
		AcceptAttachment(attachmentId: string): Observable<AcceptAttachmentResponse> {
			return this.http.post<AcceptAttachmentResponse>(this.baseUri + 'attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '/accept', null, {});
		}

		/**
		 * <p>Associates a core network Connect peer with a device and optionally, with a link. </p> <p>If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network. </p>
		 * Post global-networks/{globalNetworkId}/connect-peer-associations
		 * @param {string} globalNetworkId The ID of your global network.
		 * @return {AssociateConnectPeerResponse} Success
		 */
		AssociateConnectPeer(globalNetworkId: string, requestBody: AssociateConnectPeerPostBody): Observable<AssociateConnectPeerResponse> {
			return this.http.post<AssociateConnectPeerResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connect-peer-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a core network Connect peer associations.
		 * Get global-networks/{globalNetworkId}/connect-peer-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} connectPeerIds The IDs of the Connect peers.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConnectPeerAssociationsResponse} Success
		 */
		GetConnectPeerAssociations(globalNetworkId: string, connectPeerIds: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetConnectPeerAssociationsResponse> {
			return this.http.get<GetConnectPeerAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connect-peer-associations&' + connectPeerIds?.map(z => `connectPeerIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway or core network registered in your global network. When you register a transit gateway or core network, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>
		 * Post global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateCustomerGatewayResponse} Success
		 */
		AssociateCustomerGateway(globalNetworkId: string, requestBody: AssociateCustomerGatewayPostBody): Observable<AssociateCustomerGatewayResponse> {
			return this.http.post<AssociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the association information for customer gateways that are associated with devices and links in your global network.
		 * Get global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} customerGatewayArns One or more customer gateway Amazon Resource Names (ARNs). The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCustomerGatewayAssociationsResponse} Success
		 */
		GetCustomerGatewayAssociations(globalNetworkId: string, customerGatewayArns: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetCustomerGatewayAssociationsResponse> {
			return this.http.get<GetCustomerGatewayAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations&' + customerGatewayArns?.map(z => `customerGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
		 * Post global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateLinkResponse} Success
		 */
		AssociateLink(globalNetworkId: string, requestBody: AssociateLinkPostBody): Observable<AssociateLinkResponse> {
			return this.http.post<AssociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.
		 * Get global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinkAssociationsResponse} Success
		 */
		GetLinkAssociations(globalNetworkId: string, deviceId: string | null | undefined, linkId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetLinkAssociationsResponse> {
			return this.http.get<GetLinkAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate transit gateway Connect peers that have been created on a transit gateway that's registered in your global network.</p> <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
		 * Post global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateTransitGatewayConnectPeerResponse} Success
		 */
		AssociateTransitGatewayConnectPeer(globalNetworkId: string, requestBody: AssociateTransitGatewayConnectPeerPostBody): Observable<AssociateTransitGatewayConnectPeerResponse> {
			return this.http.post<AssociateTransitGatewayConnectPeerResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-connect-peer-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your transit gateway Connect peer associations in a global network.
		 * Get global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} transitGatewayConnectPeerArns One or more transit gateway Connect peer Amazon Resource Names (ARNs).
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTransitGatewayConnectPeerAssociationsResponse} Success
		 */
		GetTransitGatewayConnectPeerAssociations(globalNetworkId: string, transitGatewayConnectPeerArns: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetTransitGatewayConnectPeerAssociationsResponse> {
			return this.http.get<GetTransitGatewayConnectPeerAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-connect-peer-associations&' + transitGatewayConnectPeerArns?.map(z => `transitGatewayConnectPeerArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a core network Connect attachment from a specified core network attachment. </p> <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.</p>
		 * Post connect-attachments
		 * @return {CreateConnectAttachmentResponse} Success
		 */
		CreateConnectAttachment(requestBody: CreateConnectAttachmentPostBody): Observable<CreateConnectAttachmentResponse> {
			return this.http.post<CreateConnectAttachmentResponse>(this.baseUri + 'connect-attachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).
		 * Post connect-peers
		 * @return {CreateConnectPeerResponse} Success
		 */
		CreateConnectPeer(requestBody: CreateConnectPeerPostBody): Observable<CreateConnectPeerResponse> {
			return this.http.post<CreateConnectPeerResponse>(this.baseUri + 'connect-peers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of core network Connect peers.
		 * Get connect-peers
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {string} connectAttachmentId The ID of the attachment.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectPeersResponse} Success
		 */
		ListConnectPeers(coreNetworkId: string | null | undefined, connectAttachmentId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConnectPeersResponse> {
			return this.http.get<ListConnectPeersResponse>(this.baseUri + 'connect-peers?coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&connectAttachmentId=' + (connectAttachmentId == null ? '' : encodeURIComponent(connectAttachmentId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.
		 * Post global-networks/{globalNetworkId}/connections
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateConnectionResponse} Success
		 */
		CreateConnection(globalNetworkId: string, requestBody: CreateConnectionPostBody): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your connections in a global network.
		 * Get global-networks/{globalNetworkId}/connections
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} connectionIds One or more connection IDs.
		 * @param {string} deviceId The ID of the device.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConnectionsResponse} Success
		 */
		GetConnections(globalNetworkId: string, connectionIds: Array<string> | null | undefined, deviceId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetConnectionsResponse> {
			return this.http.get<GetConnectionsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connections&' + connectionIds?.map(z => `connectionIds=${encodeURIComponent(z)}`).join('&') + '&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a core network as part of your global network, and optionally, with a core network policy.
		 * Post core-networks
		 * @return {CreateCoreNetworkResponse} Success
		 */
		CreateCoreNetwork(requestBody: CreateCoreNetworkPostBody): Observable<CreateCoreNetworkResponse> {
			return this.http.post<CreateCoreNetworkResponse>(this.baseUri + 'core-networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of owned and shared core networks.
		 * Get core-networks
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCoreNetworksResponse} Success
		 */
		ListCoreNetworks(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreNetworksResponse> {
			return this.http.get<ListCoreNetworksResponse>(this.baseUri + 'core-networks?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.
		 * Post global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateDeviceResponse} Success
		 */
		CreateDevice(globalNetworkId: string, requestBody: CreateDevicePostBody): Observable<CreateDeviceResponse> {
			return this.http.post<CreateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your devices in a global network.
		 * Get global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} deviceIds One or more device IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevicesResponse} Success
		 */
		GetDevices(globalNetworkId: string, deviceIds: Array<string> | null | undefined, siteId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetDevicesResponse> {
			return this.http.get<GetDevicesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices&' + deviceIds?.map(z => `deviceIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new, empty global network.
		 * Post global-networks
		 * @return {CreateGlobalNetworkResponse} Success
		 */
		CreateGlobalNetwork(requestBody: CreateGlobalNetworkPostBody): Observable<CreateGlobalNetworkResponse> {
			return this.http.post<CreateGlobalNetworkResponse>(this.baseUri + 'global-networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.
		 * Get global-networks
		 * @param {Array<string>} globalNetworkIds The IDs of one or more global networks. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGlobalNetworksResponse} Success
		 */
		DescribeGlobalNetworks(globalNetworkIds: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeGlobalNetworksResponse> {
			return this.http.get<DescribeGlobalNetworksResponse>(this.baseUri + 'global-networks?' + globalNetworkIds?.map(z => `globalNetworkIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new link for a specified site.
		 * Post global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateLinkResponse} Success
		 */
		CreateLink(globalNetworkId: string, requestBody: CreateLinkPostBody): Observable<CreateLinkResponse> {
			return this.http.post<CreateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
		 * Get global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} linkIds One or more link IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {string} type The link type.
		 * @param {string} provider The link provider.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinksResponse} Success
		 */
		GetLinks(globalNetworkId: string, linkIds: Array<string> | null | undefined, siteId: string | null | undefined, type: string | null | undefined, provider: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetLinksResponse> {
			return this.http.get<GetLinksResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links&' + linkIds?.map(z => `linkIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&provider=' + (provider == null ? '' : encodeURIComponent(provider)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new site in a global network.
		 * Post global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateSiteResponse} Success
		 */
		CreateSite(globalNetworkId: string, requestBody: CreateSitePostBody): Observable<CreateSiteResponse> {
			return this.http.post<CreateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your sites in a global network.
		 * Get global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} siteIds One or more site IDs. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSitesResponse} Success
		 */
		GetSites(globalNetworkId: string, siteIds: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetSitesResponse> {
			return this.http.get<GetSitesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites&' + siteIds?.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.
		 * Post site-to-site-vpn-attachments
		 * @return {CreateSiteToSiteVpnAttachmentResponse} Success
		 */
		CreateSiteToSiteVpnAttachment(requestBody: CreateSiteToSiteVpnAttachmentPostBody): Observable<CreateSiteToSiteVpnAttachmentResponse> {
			return this.http.post<CreateSiteToSiteVpnAttachmentResponse>(this.baseUri + 'site-to-site-vpn-attachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a transit gateway peering connection.
		 * Post transit-gateway-peerings
		 * @return {CreateTransitGatewayPeeringResponse} Success
		 */
		CreateTransitGatewayPeering(requestBody: CreateTransitGatewayPeeringPostBody): Observable<CreateTransitGatewayPeeringResponse> {
			return this.http.post<CreateTransitGatewayPeeringResponse>(this.baseUri + 'transit-gateway-peerings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a transit gateway route table attachment.
		 * Post transit-gateway-route-table-attachments
		 * @return {CreateTransitGatewayRouteTableAttachmentResponse} Success
		 */
		CreateTransitGatewayRouteTableAttachment(requestBody: CreateTransitGatewayRouteTableAttachmentPostBody): Observable<CreateTransitGatewayRouteTableAttachmentResponse> {
			return this.http.post<CreateTransitGatewayRouteTableAttachmentResponse>(this.baseUri + 'transit-gateway-route-table-attachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a VPC attachment on an edge location of a core network.
		 * Post vpc-attachments
		 * @return {CreateVpcAttachmentResponse} Success
		 */
		CreateVpcAttachment(requestBody: CreateVpcAttachmentPostBody): Observable<CreateVpcAttachmentResponse> {
			return this.http.post<CreateVpcAttachmentResponse>(this.baseUri + 'vpc-attachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an attachment. Supports all attachment types.
		 * Delete attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the attachment to delete.
		 * @return {DeleteAttachmentResponse} Success
		 */
		DeleteAttachment(attachmentId: string): Observable<DeleteAttachmentResponse> {
			return this.http.delete<DeleteAttachmentResponse>(this.baseUri + 'attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), {});
		}

		/**
		 * Deletes a Connect peer.
		 * Delete connect-peers/{connectPeerId}
		 * @param {string} connectPeerId The ID of the deleted Connect peer.
		 * @return {DeleteConnectPeerResponse} Success
		 */
		DeleteConnectPeer(connectPeerId: string): Observable<DeleteConnectPeerResponse> {
			return this.http.delete<DeleteConnectPeerResponse>(this.baseUri + 'connect-peers/' + (connectPeerId == null ? '' : encodeURIComponent(connectPeerId)), {});
		}

		/**
		 * Returns information about a core network Connect peer.
		 * Get connect-peers/{connectPeerId}
		 * @param {string} connectPeerId The ID of the Connect peer.
		 * @return {GetConnectPeerResponse} Success
		 */
		GetConnectPeer(connectPeerId: string): Observable<GetConnectPeerResponse> {
			return this.http.get<GetConnectPeerResponse>(this.baseUri + 'connect-peers/' + (connectPeerId == null ? '' : encodeURIComponent(connectPeerId)), {});
		}

		/**
		 * Deletes the specified connection in your global network.
		 * Delete global-networks/{globalNetworkId}/connections/{connectionId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} connectionId The ID of the connection.
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(globalNetworkId: string, connectionId: string): Observable<DeleteConnectionResponse> {
			return this.http.delete<DeleteConnectionResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), {});
		}

		/**
		 * Updates the information for an existing connection. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/connections/{connectionId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} connectionId The ID of the connection.
		 * @return {UpdateConnectionResponse} Success
		 */
		UpdateConnection(globalNetworkId: string, connectionId: string, requestBody: UpdateConnectionPatchBody): Observable<UpdateConnectionResponse> {
			return this.http.patch<UpdateConnectionResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.
		 * Delete core-networks/{coreNetworkId}
		 * @param {string} coreNetworkId The network ID of the deleted core network.
		 * @return {DeleteCoreNetworkResponse} Success
		 */
		DeleteCoreNetwork(coreNetworkId: string): Observable<DeleteCoreNetworkResponse> {
			return this.http.delete<DeleteCoreNetworkResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)), {});
		}

		/**
		 * Returns information about the LIVE policy for a core network.
		 * Get core-networks/{coreNetworkId}
		 * @param {string} coreNetworkId The ID of a core network.
		 * @return {GetCoreNetworkResponse} Success
		 */
		GetCoreNetwork(coreNetworkId: string): Observable<GetCoreNetworkResponse> {
			return this.http.get<GetCoreNetworkResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)), {});
		}

		/**
		 * Updates the description of a core network.
		 * Patch core-networks/{coreNetworkId}
		 * @param {string} coreNetworkId The ID of a core network.
		 * @return {UpdateCoreNetworkResponse} Success
		 */
		UpdateCoreNetwork(coreNetworkId: string, requestBody: UpdateCoreNetworkPatchBody): Observable<UpdateCoreNetworkResponse> {
			return this.http.patch<UpdateCoreNetworkResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a policy version from a core network. You can't delete the current LIVE policy.
		 * Delete core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}
		 * @param {string} coreNetworkId The ID of a core network for the deleted policy.
		 * @param {number} policyVersionId The version ID of the deleted policy.
		 * @return {DeleteCoreNetworkPolicyVersionResponse} Success
		 */
		DeleteCoreNetworkPolicyVersion(coreNetworkId: string, policyVersionId: number): Observable<DeleteCoreNetworkPolicyVersionResponse> {
			return this.http.delete<DeleteCoreNetworkPolicyVersionResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-policy-versions/' + policyVersionId, {});
		}

		/**
		 * Deletes an existing device. You must first disassociate the device from any links and customer gateways.
		 * Delete global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(globalNetworkId: string, deviceId: string): Observable<DeleteDeviceResponse> {
			return this.http.delete<DeleteDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), {});
		}

		/**
		 * Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {UpdateDeviceResponse} Success
		 */
		UpdateDevice(globalNetworkId: string, deviceId: string, requestBody: UpdateDevicePatchBody): Observable<UpdateDeviceResponse> {
			return this.http.patch<UpdateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing global network. You must first delete all global network objects (devices, links, and sites), deregister all transit gateways, and delete any core networks.
		 * Delete global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {DeleteGlobalNetworkResponse} Success
		 */
		DeleteGlobalNetwork(globalNetworkId: string): Observable<DeleteGlobalNetworkResponse> {
			return this.http.delete<DeleteGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), {});
		}

		/**
		 * Updates an existing global network. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of your global network.
		 * @return {UpdateGlobalNetworkResponse} Success
		 */
		UpdateGlobalNetwork(globalNetworkId: string, requestBody: UpdateGlobalNetworkPatchBody): Observable<UpdateGlobalNetworkResponse> {
			return this.http.patch<UpdateGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing link. You must first disassociate the link from any devices and customer gateways.
		 * Delete global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {DeleteLinkResponse} Success
		 */
		DeleteLink(globalNetworkId: string, linkId: string): Observable<DeleteLinkResponse> {
			return this.http.delete<DeleteLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {UpdateLinkResponse} Success
		 */
		UpdateLink(globalNetworkId: string, linkId: string, requestBody: UpdateLinkPatchBody): Observable<UpdateLinkResponse> {
			return this.http.patch<UpdateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing peering connection.
		 * Delete peerings/{peeringId}
		 * @param {string} peeringId The ID of the peering connection to delete.
		 * @return {DeletePeeringResponse} Success
		 */
		DeletePeering(peeringId: string): Observable<DeletePeeringResponse> {
			return this.http.delete<DeletePeeringResponse>(this.baseUri + 'peerings/' + (peeringId == null ? '' : encodeURIComponent(peeringId)), {});
		}

		/**
		 * Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.
		 * Delete resource-policy/{resourceArn}
		 * @param {string} resourceArn The ARN of the policy to delete.
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(resourceArn: string): Observable<DeleteResourcePolicyResponse> {
			return this.http.delete<DeleteResourcePolicyResponse>(this.baseUri + 'resource-policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Returns information about a resource policy.
		 * Get resource-policy/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(resourceArn: string): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'resource-policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Creates or updates a resource policy.
		 * Post resource-policy/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource policy. 
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(resourceArn: string, requestBody: PutResourcePolicyPostBody): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + 'resource-policy/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing site. The site cannot be associated with any device or link.
		 * Delete global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of the site.
		 * @return {DeleteSiteResponse} Success
		 */
		DeleteSite(globalNetworkId: string, siteId: string): Observable<DeleteSiteResponse> {
			return this.http.delete<DeleteSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), {});
		}

		/**
		 * Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of your site.
		 * @return {UpdateSiteResponse} Success
		 */
		UpdateSite(globalNetworkId: string, siteId: string, requestBody: UpdateSitePatchBody): Observable<UpdateSiteResponse> {
			return this.http.patch<UpdateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
		 * Delete global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} transitGatewayArn The Amazon Resource Name (ARN) of the transit gateway.
		 * @return {DeregisterTransitGatewayResponse} Success
		 */
		DeregisterTransitGateway(globalNetworkId: string, transitGatewayArn: string): Observable<DeregisterTransitGatewayResponse> {
			return this.http.delete<DeregisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations/' + (transitGatewayArn == null ? '' : encodeURIComponent(transitGatewayArn)), {});
		}

		/**
		 * Disassociates a core network Connect peer from a device and a link.
		 * Delete global-networks/{globalNetworkId}/connect-peer-associations/{connectPeerId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} connectPeerId The ID of the Connect peer to disassociate from a device.
		 * @return {DisassociateConnectPeerResponse} Success
		 */
		DisassociateConnectPeer(globalNetworkId: string, connectPeerId: string): Observable<DisassociateConnectPeerResponse> {
			return this.http.delete<DisassociateConnectPeerResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/connect-peer-associations/' + (connectPeerId == null ? '' : encodeURIComponent(connectPeerId)), {});
		}

		/**
		 * Disassociates a customer gateway from a device and a link.
		 * Delete global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} customerGatewayArn The Amazon Resource Name (ARN) of the customer gateway.
		 * @return {DisassociateCustomerGatewayResponse} Success
		 */
		DisassociateCustomerGateway(globalNetworkId: string, customerGatewayArn: string): Observable<DisassociateCustomerGatewayResponse> {
			return this.http.delete<DisassociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations/' + (customerGatewayArn == null ? '' : encodeURIComponent(customerGatewayArn)), {});
		}

		/**
		 * Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.
		 * Delete global-networks/{globalNetworkId}/link-associations#deviceId&linkId
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @return {DisassociateLinkResponse} Success
		 */
		DisassociateLink(globalNetworkId: string, deviceId: string, linkId: string): Observable<DisassociateLinkResponse> {
			return this.http.delete<DisassociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations#deviceId&linkId&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Disassociates a transit gateway Connect peer from a device and link.
		 * Delete global-networks/{globalNetworkId}/transit-gateway-connect-peer-associations/{transitGatewayConnectPeerArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} transitGatewayConnectPeerArn The Amazon Resource Name (ARN) of the transit gateway Connect peer.
		 * @return {DisassociateTransitGatewayConnectPeerResponse} Success
		 */
		DisassociateTransitGatewayConnectPeer(globalNetworkId: string, transitGatewayConnectPeerArn: string): Observable<DisassociateTransitGatewayConnectPeerResponse> {
			return this.http.delete<DisassociateTransitGatewayConnectPeerResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-connect-peer-associations/' + (transitGatewayConnectPeerArn == null ? '' : encodeURIComponent(transitGatewayConnectPeerArn)), {});
		}

		/**
		 * Executes a change set on your core network. Deploys changes globally based on the policy submitted..
		 * Post core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}/execute
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} policyVersionId The ID of the policy version.
		 * @return {ExecuteCoreNetworkChangeSetResponse} Success
		 */
		ExecuteCoreNetworkChangeSet(coreNetworkId: string, policyVersionId: number): Observable<ExecuteCoreNetworkChangeSetResponse> {
			return this.http.post<ExecuteCoreNetworkChangeSetResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-change-sets/' + policyVersionId + '/execute', null, {});
		}

		/**
		 * Returns information about a core network Connect attachment.
		 * Get connect-attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {GetConnectAttachmentResponse} Success
		 */
		GetConnectAttachment(attachmentId: string): Observable<GetConnectAttachmentResponse> {
			return this.http.get<GetConnectAttachmentResponse>(this.baseUri + 'connect-attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), {});
		}

		/**
		 * Returns information about a core network change event.
		 * Get core-networks/{coreNetworkId}/core-network-change-events/{policyVersionId}
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} policyVersionId The ID of the policy version.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCoreNetworkChangeEventsResponse} Success
		 */
		GetCoreNetworkChangeEvents(coreNetworkId: string, policyVersionId: number, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetCoreNetworkChangeEventsResponse> {
			return this.http.get<GetCoreNetworkChangeEventsResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-change-events/' + policyVersionId + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a change set between the LIVE core network policy and a submitted policy.
		 * Get core-networks/{coreNetworkId}/core-network-change-sets/{policyVersionId}
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} policyVersionId The ID of the policy version.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCoreNetworkChangeSetResponse} Success
		 */
		GetCoreNetworkChangeSet(coreNetworkId: string, policyVersionId: number, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetCoreNetworkChangeSetResponse> {
			return this.http.get<GetCoreNetworkChangeSetResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-change-sets/' + policyVersionId + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns details about a core network policy. You can get details about your current live policy or any previous policy version.
		 * Get core-networks/{coreNetworkId}/core-network-policy
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} policyVersionId The ID of a core network policy version.
		 * @param {CoreNetworkPolicyAlias} alias The alias of a core network policy 
		 * @return {GetCoreNetworkPolicyResponse} Success
		 */
		GetCoreNetworkPolicy(coreNetworkId: string, policyVersionId: number | null | undefined, alias: CoreNetworkPolicyAlias | null | undefined): Observable<GetCoreNetworkPolicyResponse> {
			return this.http.get<GetCoreNetworkPolicyResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-policy&policyVersionId=' + policyVersionId + '&alias=' + alias, {});
		}

		/**
		 * Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.
		 * Post core-networks/{coreNetworkId}/core-network-policy
		 * @param {string} coreNetworkId The ID of a core network.
		 * @return {PutCoreNetworkPolicyResponse} Success
		 */
		PutCoreNetworkPolicy(coreNetworkId: string, requestBody: PutCoreNetworkPolicyPostBody): Observable<PutCoreNetworkPolicyResponse> {
			return this.http.post<PutCoreNetworkPolicyResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the count of network resources, by resource type, for the specified global network.
		 * Get global-networks/{globalNetworkId}/network-resource-count
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} resourceType <p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetNetworkResourceCountsResponse} Success
		 */
		GetNetworkResourceCounts(globalNetworkId: string, resourceType: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetNetworkResourceCountsResponse> {
			return this.http.get<GetNetworkResourceCountsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-resource-count&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets the network resource relationships for the specified global network.
		 * Get global-networks/{globalNetworkId}/network-resource-relationships
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {string} registeredGatewayArn The ARN of the registered gateway.
		 * @param {string} awsRegion The Amazon Web Services Region.
		 * @param {string} accountId The Amazon Web Services account ID.
		 * @param {string} resourceType <p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>
		 * @param {string} resourceArn The ARN of the gateway.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetNetworkResourceRelationshipsResponse} Success
		 */
		GetNetworkResourceRelationships(globalNetworkId: string, coreNetworkId: string | null | undefined, registeredGatewayArn: string | null | undefined, awsRegion: string | null | undefined, accountId: string | null | undefined, resourceType: string | null | undefined, resourceArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetNetworkResourceRelationshipsResponse> {
			return this.http.get<GetNetworkResourceRelationshipsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-resource-relationships&coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&registeredGatewayArn=' + (registeredGatewayArn == null ? '' : encodeURIComponent(registeredGatewayArn)) + '&awsRegion=' + (awsRegion == null ? '' : encodeURIComponent(awsRegion)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Describes the network resources for the specified global network.</p> <p>The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</p>
		 * Get global-networks/{globalNetworkId}/network-resources
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {string} registeredGatewayArn The ARN of the gateway.
		 * @param {string} awsRegion The Amazon Web Services Region.
		 * @param {string} accountId The Amazon Web Services account ID.
		 * @param {string} resourceType <p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>dx-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html">DirectConnectGateway</a>.</p> </li> <li> <p> <code>dx-vif</code> - The definition model is <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html">VirtualInterface</a>.</p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Connection.html">Connection</a>.</p> </li> <li> <p> <code>device</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Device.html">Device</a>.</p> </li> <li> <p> <code>link</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Link.html">Link</a>.</p> </li> <li> <p> <code>site</code> - The definition model is <a href="https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_Site.html">Site</a>.</p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CustomerGateway.html">CustomerGateway</a>.</p> </li> <li> <p> <code>transit-gateway</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGateway.html">TransitGateway</a>.</p> </li> <li> <p> <code>transit-gateway-attachment</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayAttachment.html">TransitGatewayAttachment</a>.</p> </li> <li> <p> <code>transit-gateway-connect-peer</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayConnectPeer.html">TransitGatewayConnectPeer</a>.</p> </li> <li> <p> <code>transit-gateway-route-table</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TransitGatewayRouteTable.html">TransitGatewayRouteTable</a>.</p> </li> <li> <p> <code>vpn-connection</code> - The definition model is <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnConnection.html">VpnConnection</a>.</p> </li> </ul>
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetNetworkResourcesResponse} Success
		 */
		GetNetworkResources(globalNetworkId: string, coreNetworkId: string | null | undefined, registeredGatewayArn: string | null | undefined, awsRegion: string | null | undefined, accountId: string | null | undefined, resourceType: string | null | undefined, resourceArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetNetworkResourcesResponse> {
			return this.http.get<GetNetworkResourcesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-resources&coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&registeredGatewayArn=' + (registeredGatewayArn == null ? '' : encodeURIComponent(registeredGatewayArn)) + '&awsRegion=' + (awsRegion == null ? '' : encodeURIComponent(awsRegion)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets the network routes of the specified global network.
		 * Post global-networks/{globalNetworkId}/network-routes
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {GetNetworkRoutesResponse} Success
		 */
		GetNetworkRoutes(globalNetworkId: string, requestBody: GetNetworkRoutesPostBody): Observable<GetNetworkRoutesResponse> {
			return this.http.post<GetNetworkRoutesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-routes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the network telemetry of the specified global network.
		 * Get global-networks/{globalNetworkId}/network-telemetry
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {string} registeredGatewayArn The ARN of the gateway.
		 * @param {string} awsRegion The Amazon Web Services Region.
		 * @param {string} accountId The Amazon Web Services account ID.
		 * @param {string} resourceType <p>The resource type.</p> <p>The following are the supported resource types for Direct Connect:</p> <ul> <li> <p> <code>dxcon</code> </p> </li> <li> <p> <code>dx-gateway</code> </p> </li> <li> <p> <code>dx-vif</code> </p> </li> </ul> <p>The following are the supported resource types for Network Manager:</p> <ul> <li> <p> <code>connection</code> </p> </li> <li> <p> <code>device</code> </p> </li> <li> <p> <code>link</code> </p> </li> <li> <p> <code>site</code> </p> </li> </ul> <p>The following are the supported resource types for Amazon VPC:</p> <ul> <li> <p> <code>customer-gateway</code> </p> </li> <li> <p> <code>transit-gateway</code> </p> </li> <li> <p> <code>transit-gateway-attachment</code> </p> </li> <li> <p> <code>transit-gateway-connect-peer</code> </p> </li> <li> <p> <code>transit-gateway-route-table</code> </p> </li> <li> <p> <code>vpn-connection</code> </p> </li> </ul>
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetNetworkTelemetryResponse} Success
		 */
		GetNetworkTelemetry(globalNetworkId: string, coreNetworkId: string | null | undefined, registeredGatewayArn: string | null | undefined, awsRegion: string | null | undefined, accountId: string | null | undefined, resourceType: string | null | undefined, resourceArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetNetworkTelemetryResponse> {
			return this.http.get<GetNetworkTelemetryResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-telemetry&coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&registeredGatewayArn=' + (registeredGatewayArn == null ? '' : encodeURIComponent(registeredGatewayArn)) + '&awsRegion=' + (awsRegion == null ? '' : encodeURIComponent(awsRegion)) + '&accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets information about the specified route analysis.
		 * Get global-networks/{globalNetworkId}/route-analyses/{routeAnalysisId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} routeAnalysisId The ID of the route analysis.
		 * @return {GetRouteAnalysisResponse} Success
		 */
		GetRouteAnalysis(globalNetworkId: string, routeAnalysisId: string): Observable<GetRouteAnalysisResponse> {
			return this.http.get<GetRouteAnalysisResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/route-analyses/' + (routeAnalysisId == null ? '' : encodeURIComponent(routeAnalysisId)), {});
		}

		/**
		 * Returns information about a site-to-site VPN attachment.
		 * Get site-to-site-vpn-attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {GetSiteToSiteVpnAttachmentResponse} Success
		 */
		GetSiteToSiteVpnAttachment(attachmentId: string): Observable<GetSiteToSiteVpnAttachmentResponse> {
			return this.http.get<GetSiteToSiteVpnAttachmentResponse>(this.baseUri + 'site-to-site-vpn-attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), {});
		}

		/**
		 * Returns information about a transit gateway peer.
		 * Get transit-gateway-peerings/{peeringId}
		 * @param {string} peeringId The ID of the peering request.
		 * @return {GetTransitGatewayPeeringResponse} Success
		 */
		GetTransitGatewayPeering(peeringId: string): Observable<GetTransitGatewayPeeringResponse> {
			return this.http.get<GetTransitGatewayPeeringResponse>(this.baseUri + 'transit-gateway-peerings/' + (peeringId == null ? '' : encodeURIComponent(peeringId)), {});
		}

		/**
		 * Gets information about the transit gateway registrations in a specified global network.
		 * Get global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} transitGatewayArns The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTransitGatewayRegistrationsResponse} Success
		 */
		GetTransitGatewayRegistrations(globalNetworkId: string, transitGatewayArns: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetTransitGatewayRegistrationsResponse> {
			return this.http.get<GetTransitGatewayRegistrationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations&' + transitGatewayArns?.map(z => `transitGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see <a href="https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions">Region Availability</a> in the <i>Amazon Web Services Transit Gateways for Global Networks User Guide</i>. The transit gateway can be in any of the supported Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global network. You cannot register a transit gateway in more than one global network.
		 * Post global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {RegisterTransitGatewayResponse} Success
		 */
		RegisterTransitGateway(globalNetworkId: string, requestBody: RegisterTransitGatewayPostBody): Observable<RegisterTransitGatewayResponse> {
			return this.http.post<RegisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a transit gateway route table attachment.
		 * Get transit-gateway-route-table-attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the transit gateway route table attachment.
		 * @return {GetTransitGatewayRouteTableAttachmentResponse} Success
		 */
		GetTransitGatewayRouteTableAttachment(attachmentId: string): Observable<GetTransitGatewayRouteTableAttachmentResponse> {
			return this.http.get<GetTransitGatewayRouteTableAttachmentResponse>(this.baseUri + 'transit-gateway-route-table-attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), {});
		}

		/**
		 * Returns information about a VPC attachment.
		 * Get vpc-attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {GetVpcAttachmentResponse} Success
		 */
		GetVpcAttachment(attachmentId: string): Observable<GetVpcAttachmentResponse> {
			return this.http.get<GetVpcAttachmentResponse>(this.baseUri + 'vpc-attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), {});
		}

		/**
		 * Updates a VPC attachment.
		 * Patch vpc-attachments/{attachmentId}
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {UpdateVpcAttachmentResponse} Success
		 */
		UpdateVpcAttachment(attachmentId: string, requestBody: UpdateVpcAttachmentPatchBody): Observable<UpdateVpcAttachmentResponse> {
			return this.http.patch<UpdateVpcAttachmentResponse>(this.baseUri + 'vpc-attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of core network attachments.
		 * Get attachments
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {AttachmentType} attachmentType The type of attachment.
		 * @param {string} edgeLocation The Region where the edge is located.
		 * @param {AttachmentState} state The state of the attachment.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttachmentsResponse} Success
		 */
		ListAttachments(coreNetworkId: string | null | undefined, attachmentType: AttachmentType | null | undefined, edgeLocation: string | null | undefined, state: AttachmentState | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAttachmentsResponse> {
			return this.http.get<ListAttachmentsResponse>(this.baseUri + 'attachments?coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&attachmentType=' + attachmentType + '&edgeLocation=' + (edgeLocation == null ? '' : encodeURIComponent(edgeLocation)) + '&state=' + state + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of core network policy versions.
		 * Get core-networks/{coreNetworkId}/core-network-policy-versions
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCoreNetworkPolicyVersionsResponse} Success
		 */
		ListCoreNetworkPolicyVersions(coreNetworkId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreNetworkPolicyVersionsResponse> {
			return this.http.get<ListCoreNetworkPolicyVersionsResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-policy-versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.
		 * Get organizations/service-access
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @return {ListOrganizationServiceAccessStatusResponse} Success
		 */
		ListOrganizationServiceAccessStatus(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListOrganizationServiceAccessStatusResponse> {
			return this.http.get<ListOrganizationServiceAccessStatusResponse>(this.baseUri + 'organizations/service-access?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization.
		 * Post organizations/service-access
		 * @return {StartOrganizationServiceAccessUpdateResponse} Success
		 */
		StartOrganizationServiceAccessUpdate(requestBody: StartOrganizationServiceAccessUpdatePostBody): Observable<StartOrganizationServiceAccessUpdateResponse> {
			return this.http.post<StartOrganizationServiceAccessUpdateResponse>(this.baseUri + 'organizations/service-access', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the peerings for a core network.
		 * Get peerings
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {PeeringType} peeringType Returns a list of a peering requests.
		 * @param {string} edgeLocation Returns a list edge locations for the 
		 * @param {ConnectPeerState} state Returns a list of the peering request states.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPeeringsResponse} Success
		 */
		ListPeerings(coreNetworkId: string | null | undefined, peeringType: PeeringType | null | undefined, edgeLocation: string | null | undefined, state: ConnectPeerState | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPeeringsResponse> {
			return this.http.get<ListPeeringsResponse>(this.baseUri + 'peerings?coreNetworkId=' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '&peeringType=' + peeringType + '&edgeLocation=' + (edgeLocation == null ? '' : encodeURIComponent(edgeLocation)) + '&state=' + state + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags for a specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects a core network attachment request.
		 * Post attachments/{attachmentId}/reject
		 * @param {string} attachmentId The ID of the attachment.
		 * @return {RejectAttachmentResponse} Success
		 */
		RejectAttachment(attachmentId: string): Observable<RejectAttachmentResponse> {
			return this.http.post<RejectAttachmentResponse>(this.baseUri + 'attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '/reject', null, {});
		}

		/**
		 * Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.
		 * Post core-networks/{coreNetworkId}/core-network-policy-versions/{policyVersionId}/restore
		 * @param {string} coreNetworkId The ID of a core network.
		 * @param {number} policyVersionId The ID of the policy version to restore.
		 * @return {RestoreCoreNetworkPolicyVersionResponse} Success
		 */
		RestoreCoreNetworkPolicyVersion(coreNetworkId: string, policyVersionId: number): Observable<RestoreCoreNetworkPolicyVersionResponse> {
			return this.http.post<RestoreCoreNetworkPolicyVersionResponse>(this.baseUri + 'core-networks/' + (coreNetworkId == null ? '' : encodeURIComponent(coreNetworkId)) + '/core-network-policy-versions/' + policyVersionId + '/restore', null, {});
		}

		/**
		 * Starts analyzing the routing path between the specified source and destination. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.
		 * Post global-networks/{globalNetworkId}/route-analyses
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {StartRouteAnalysisResponse} Success
		 */
		StartRouteAnalysis(globalNetworkId: string, requestBody: StartRouteAnalysisPostBody): Observable<StartRouteAnalysisResponse> {
			return this.http.post<StartRouteAnalysisResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/route-analyses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys to remove from the specified resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the resource metadata for the specified global network.
		 * Patch global-networks/{globalNetworkId}/network-resources/{resourceArn}/metadata
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {UpdateNetworkResourceMetadataResponse} Success
		 */
		UpdateNetworkResourceMetadata(globalNetworkId: string, resourceArn: string, requestBody: UpdateNetworkResourceMetadataPatchBody): Observable<UpdateNetworkResourceMetadataResponse> {
			return this.http.patch<UpdateNetworkResourceMetadataResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/network-resources/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateConnectPeerPostBody {

		/**
		 * The ID of the Connect peer.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectPeerId: string;

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId?: string | null;
	}
	export interface AssociateConnectPeerPostBodyFormProperties {

		/**
		 * The ID of the Connect peer.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectPeerId: FormControl<string | null | undefined>,

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConnectPeerPostBodyFormGroup() {
		return new FormGroup<AssociateConnectPeerPostBodyFormProperties>({
			ConnectPeerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^connect-peer-([0-9a-f]{8,17})$')]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface AssociateCustomerGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the customer gateway.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		CustomerGatewayArn: string;

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId?: string | null;
	}
	export interface AssociateCustomerGatewayPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the customer gateway.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		CustomerGatewayArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCustomerGatewayPostBodyFormGroup() {
		return new FormGroup<AssociateCustomerGatewayPostBodyFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[\s\S]*')]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface AssociateLinkPostBody {

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: string;
	}
	export interface AssociateLinkPostBodyFormProperties {

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLinkPostBodyFormGroup() {
		return new FormGroup<AssociateLinkPostBodyFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface AssociateTransitGatewayConnectPeerPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Connect peer.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayConnectPeerArn: string;

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId?: string | null;
	}
	export interface AssociateTransitGatewayConnectPeerPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Connect peer.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayConnectPeerArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the device.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTransitGatewayConnectPeerPostBodyFormGroup() {
		return new FormGroup<AssociateTransitGatewayConnectPeerPostBodyFormProperties>({
			TransitGatewayConnectPeerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[\s\S]*')]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateConnectAttachmentPostBody {

		/**
		 * The ID of a core network where you want to create the attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: string;

		/**
		 * The Region where the edge is located.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		EdgeLocation: string;

		/**
		 * The ID of the attachment between the two connections.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		TransportAttachmentId: string;

		/**
		 * Describes a core network Connect attachment options.
		 * Required
		 */
		Options: CreateConnectAttachmentPostBodyOptions;

		/** The list of key-value tags associated with the request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateConnectAttachmentPostBodyFormProperties {

		/**
		 * The ID of a core network where you want to create the attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: FormControl<string | null | undefined>,

		/**
		 * The Region where the edge is located.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		EdgeLocation: FormControl<string | null | undefined>,

		/**
		 * The ID of the attachment between the two connections.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		TransportAttachmentId: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectAttachmentPostBodyFormGroup() {
		return new FormGroup<CreateConnectAttachmentPostBodyFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^core-network-([0-9a-f]{8,17})$')]),
			EdgeLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[\s\S]*')]),
			TransportAttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^attachment-([0-9a-f]{8,17})$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateConnectAttachmentPostBodyOptions {
		Protocol?: TunnelProtocol;
	}
	export interface CreateConnectAttachmentPostBodyOptionsFormProperties {
		Protocol: FormControl<TunnelProtocol | null | undefined>,
	}
	export function CreateCreateConnectAttachmentPostBodyOptionsFormGroup() {
		return new FormGroup<CreateConnectAttachmentPostBodyOptionsFormProperties>({
			Protocol: new FormControl<TunnelProtocol | null | undefined>(undefined),
		});

	}

	export interface CreateConnectPeerPostBody {

		/**
		 * The ID of the connection attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectAttachmentId: string;

		/**
		 * A Connect peer core network address.
		 * Max length: 50
		 * Min length: 1
		 */
		CoreNetworkAddress?: string | null;

		/**
		 * The Connect peer address.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PeerAddress: string;

		/** Describes the BGP options. */
		BgpOptions?: CreateConnectPeerPostBodyBgpOptions;

		/**
		 * The inside IP addresses used for BGP peering.
		 * Required
		 */
		InsideCidrBlocks: Array<string>;

		/** The tags associated with the peer request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateConnectPeerPostBodyFormProperties {

		/**
		 * The ID of the connection attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectAttachmentId: FormControl<string | null | undefined>,

		/**
		 * A Connect peer core network address.
		 * Max length: 50
		 * Min length: 1
		 */
		CoreNetworkAddress: FormControl<string | null | undefined>,

		/**
		 * The Connect peer address.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		PeerAddress: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectPeerPostBodyFormGroup() {
		return new FormGroup<CreateConnectPeerPostBodyFormProperties>({
			ConnectAttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^attachment-([0-9a-f]{8,17})$')]),
			CoreNetworkAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			PeerAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateConnectPeerPostBodyBgpOptions {
		PeerAsn?: number | null;
	}
	export interface CreateConnectPeerPostBodyBgpOptionsFormProperties {
		PeerAsn: FormControl<number | null | undefined>,
	}
	export function CreateCreateConnectPeerPostBodyBgpOptionsFormGroup() {
		return new FormGroup<CreateConnectPeerPostBodyBgpOptionsFormProperties>({
			PeerAsn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionPostBody {

		/**
		 * The ID of the first device in the connection.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: string;

		/**
		 * The ID of the second device in the connection.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedDeviceId: string;

		/**
		 * The ID of the link for the first device.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId?: string | null;

		/**
		 * The ID of the link for the second device.
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedLinkId?: string | null;

		/**
		 * <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionPostBodyFormProperties {

		/**
		 * The ID of the first device in the connection.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the second device in the connection.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedDeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link for the first device.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link for the second device.
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedLinkId: FormControl<string | null | undefined>,

		/**
		 * <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionPostBodyFormGroup() {
		return new FormGroup<CreateConnectionPostBodyFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			ConnectedDeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			ConnectedLinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateCoreNetworkPostBody {

		/**
		 * The ID of the global network that a core network will be a part of.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		GlobalNetworkId: string;

		/**
		 * The description of a core network.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Key-value tags associated with a core network request. */
		Tags?: Array<Tag>;

		/**
		 * The policy document for creating a core network.
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument?: string | null;

		/**
		 * The client token associated with a core network request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateCoreNetworkPostBodyFormProperties {

		/**
		 * The ID of the global network that a core network will be a part of.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		GlobalNetworkId: FormControl<string | null | undefined>,

		/**
		 * The description of a core network.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The policy document for creating a core network.
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument: FormControl<string | null | undefined>,

		/**
		 * The client token associated with a core network request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCoreNetworkPostBodyFormGroup() {
		return new FormGroup<CreateCoreNetworkPostBodyFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(10000000), Validators.pattern('[\s\S]*')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateDevicePostBody {

		/** Specifies a location in Amazon Web Services. */
		AWSLocation?: CreateDevicePostBodyAWSLocation;

		/**
		 * <p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The type of the device.
		 * Max length: 256
		 * Min length: 0
		 */
		Type?: string | null;

		/**
		 * <p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Vendor?: string | null;

		/**
		 * <p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Model?: string | null;

		/**
		 * <p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: CreateDevicePostBodyLocation;

		/**
		 * The ID of the site.
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId?: string | null;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateDevicePostBodyFormProperties {

		/**
		 * <p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The type of the device.
		 * Max length: 256
		 * Min length: 0
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * <p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Vendor: FormControl<string | null | undefined>,

		/**
		 * <p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Model: FormControl<string | null | undefined>,

		/**
		 * <p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevicePostBodyFormGroup() {
		return new FormGroup<CreateDevicePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Vendor: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Model: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateDevicePostBodyAWSLocation {
		Zone?: string;
		SubnetArn?: string;
	}
	export interface CreateDevicePostBodyAWSLocationFormProperties {
		Zone: FormControl<string | null | undefined>,
		SubnetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevicePostBodyAWSLocationFormGroup() {
		return new FormGroup<CreateDevicePostBodyAWSLocationFormProperties>({
			Zone: new FormControl<string | null | undefined>(undefined),
			SubnetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDevicePostBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}
	export interface CreateDevicePostBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevicePostBodyLocationFormGroup() {
		return new FormGroup<CreateDevicePostBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGlobalNetworkPostBody {

		/**
		 * <p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateGlobalNetworkPostBodyFormProperties {

		/**
		 * <p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalNetworkPostBodyFormGroup() {
		return new FormGroup<CreateGlobalNetworkPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateLinkPostBody {

		/**
		 * <p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * <p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Type?: string | null;

		/**
		 * Describes bandwidth information.
		 * Required
		 */
		Bandwidth: CreateLinkPostBodyBandwidth;

		/**
		 * <p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Provider?: string | null;

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId: string;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateLinkPostBodyFormProperties {

		/**
		 * <p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * <p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Provider: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkPostBodyFormGroup() {
		return new FormGroup<CreateLinkPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Provider: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateLinkPostBodyBandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}
	export interface CreateLinkPostBodyBandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateCreateLinkPostBodyBandwidthFormGroup() {
		return new FormGroup<CreateLinkPostBodyBandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBody {

		/**
		 * <p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Describes a location. */
		Location?: CreateSitePostBodyLocation;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateSitePostBodyFormProperties {

		/**
		 * <p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyFormGroup() {
		return new FormGroup<CreateSitePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateSitePostBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}
	export interface CreateSitePostBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyLocationFormGroup() {
		return new FormGroup<CreateSitePostBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSiteToSiteVpnAttachmentPostBody {

		/**
		 * The ID of a core network where you're creating a site-to-site VPN attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: string;

		/**
		 * The ARN identifying the VPN attachment.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		VpnConnectionArn: string;

		/** The tags associated with the request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateSiteToSiteVpnAttachmentPostBodyFormProperties {

		/**
		 * The ID of a core network where you're creating a site-to-site VPN attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: FormControl<string | null | undefined>,

		/**
		 * The ARN identifying the VPN attachment.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		VpnConnectionArn: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteToSiteVpnAttachmentPostBodyFormGroup() {
		return new FormGroup<CreateSiteToSiteVpnAttachmentPostBodyFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^core-network-([0-9a-f]{8,17})$')]),
			VpnConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpn-connection\/vpn-[0-9a-f]{8,17}$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateTransitGatewayPeeringPostBody {

		/**
		 * The ID of a core network.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: string;

		/**
		 * The ARN of the transit gateway for the peering request.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayArn: string;

		/** The list of key-value tags associated with the request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateTransitGatewayPeeringPostBodyFormProperties {

		/**
		 * The ID of a core network.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: FormControl<string | null | undefined>,

		/**
		 * The ARN of the transit gateway for the peering request.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayArn: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransitGatewayPeeringPostBodyFormGroup() {
		return new FormGroup<CreateTransitGatewayPeeringPostBodyFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^core-network-([0-9a-f]{8,17})$')]),
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[\s\S]*')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateTransitGatewayRouteTableAttachmentPostBody {

		/**
		 * The ID of the peer for the
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		PeeringId: string;

		/**
		 * The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayRouteTableArn: string;

		/** The list of key-value tags associated with the request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateTransitGatewayRouteTableAttachmentPostBodyFormProperties {

		/**
		 * The ID of the peer for the
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		PeeringId: FormControl<string | null | undefined>,

		/**
		 * The ARN of the transit gateway route table for the attachment request. For example, <code>"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"</code>.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayRouteTableArn: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransitGatewayRouteTableAttachmentPostBodyFormGroup() {
		return new FormGroup<CreateTransitGatewayRouteTableAttachmentPostBodyFormProperties>({
			PeeringId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^peering-([0-9a-f]{8,17})$')]),
			TransitGatewayRouteTableArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[\s\S]*')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateVpcAttachmentPostBody {

		/**
		 * The ID of a core network for the VPC attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: string;

		/**
		 * The ARN of the VPC.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		VpcArn: string;

		/**
		 * The subnet ARN of the VPC attachment.
		 * Required
		 */
		SubnetArns: Array<string>;

		/** Describes the VPC options. */
		Options?: CreateVpcAttachmentPostBodyOptions;

		/** The key-value tags associated with the request. */
		Tags?: Array<Tag>;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface CreateVpcAttachmentPostBodyFormProperties {

		/**
		 * The ID of a core network for the VPC attachment.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		CoreNetworkId: FormControl<string | null | undefined>,

		/**
		 * The ARN of the VPC.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		VpcArn: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcAttachmentPostBodyFormGroup() {
		return new FormGroup<CreateVpcAttachmentPostBodyFormProperties>({
			CoreNetworkId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50), Validators.pattern('^core-network-([0-9a-f]{8,17})$')]),
			VpcArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:vpc\/vpc-[0-9a-f]{8,17}$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateVpcAttachmentPostBodyOptions {
		Ipv6Support?: boolean | null;
		ApplianceModeSupport?: boolean | null;
	}
	export interface CreateVpcAttachmentPostBodyOptionsFormProperties {
		Ipv6Support: FormControl<boolean | null | undefined>,
		ApplianceModeSupport: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateVpcAttachmentPostBodyOptionsFormGroup() {
		return new FormGroup<CreateVpcAttachmentPostBodyOptionsFormProperties>({
			Ipv6Support: new FormControl<boolean | null | undefined>(undefined),
			ApplianceModeSupport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectionPatchBody {

		/**
		 * The ID of the link for the first device in the connection.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId?: string | null;

		/**
		 * The ID of the link for the second device in the connection.
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedLinkId?: string | null;

		/**
		 * <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateConnectionPatchBodyFormProperties {

		/**
		 * The ID of the link for the first device in the connection.
		 * Max length: 50
		 * Min length: 0
		 */
		LinkId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link for the second device in the connection.
		 * Max length: 50
		 * Min length: 0
		 */
		ConnectedLinkId: FormControl<string | null | undefined>,

		/**
		 * <p>A description of the connection.</p> <p>Length Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionPatchBodyFormGroup() {
		return new FormGroup<UpdateConnectionPatchBodyFormProperties>({
			LinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			ConnectedLinkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateCoreNetworkPatchBody {

		/**
		 * The description of the update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateCoreNetworkPatchBodyFormProperties {

		/**
		 * The description of the update.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCoreNetworkPatchBodyFormGroup() {
		return new FormGroup<UpdateCoreNetworkPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateDevicePatchBody {

		/** Specifies a location in Amazon Web Services. */
		AWSLocation?: UpdateDevicePatchBodyAWSLocation;

		/**
		 * <p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The type of the device.
		 * Max length: 256
		 * Min length: 0
		 */
		Type?: string | null;

		/**
		 * <p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Vendor?: string | null;

		/**
		 * <p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Model?: string | null;

		/**
		 * <p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: UpdateDevicePatchBodyLocation;

		/**
		 * The ID of the site.
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId?: string | null;
	}
	export interface UpdateDevicePatchBodyFormProperties {

		/**
		 * <p>A description of the device.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The type of the device.
		 * Max length: 256
		 * Min length: 0
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * <p>The vendor of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Vendor: FormControl<string | null | undefined>,

		/**
		 * <p>The model of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Model: FormControl<string | null | undefined>,

		/**
		 * <p>The serial number of the device.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Max length: 50
		 * Min length: 0
		 */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePatchBodyFormGroup() {
		return new FormGroup<UpdateDevicePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Vendor: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Model: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateDevicePatchBodyAWSLocation {
		Zone?: string;
		SubnetArn?: string;
	}
	export interface UpdateDevicePatchBodyAWSLocationFormProperties {
		Zone: FormControl<string | null | undefined>,
		SubnetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePatchBodyAWSLocationFormGroup() {
		return new FormGroup<UpdateDevicePatchBodyAWSLocationFormProperties>({
			Zone: new FormControl<string | null | undefined>(undefined),
			SubnetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDevicePatchBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}
	export interface UpdateDevicePatchBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePatchBodyLocationFormGroup() {
		return new FormGroup<UpdateDevicePatchBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalNetworkPatchBody {

		/**
		 * <p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateGlobalNetworkPatchBodyFormProperties {

		/**
		 * <p>A description of the global network.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalNetworkPatchBodyFormGroup() {
		return new FormGroup<UpdateGlobalNetworkPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateLinkPatchBody {

		/**
		 * <p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * <p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Type?: string | null;

		/** Describes bandwidth information. */
		Bandwidth?: UpdateLinkPatchBodyBandwidth;

		/**
		 * <p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Provider?: string | null;
	}
	export interface UpdateLinkPatchBodyFormProperties {

		/**
		 * <p>A description of the link.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>The type of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * <p>The provider of the link.</p> <p>Constraints: Maximum length of 128 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Provider: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkPatchBodyFormGroup() {
		return new FormGroup<UpdateLinkPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			Provider: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateLinkPatchBodyBandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}
	export interface UpdateLinkPatchBodyBandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLinkPatchBodyBandwidthFormGroup() {
		return new FormGroup<UpdateLinkPatchBodyBandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyPostBody {

		/**
		 * The JSON resource policy document.
		 * Required
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument: string;
	}
	export interface PutResourcePolicyPostBodyFormProperties {

		/**
		 * The JSON resource policy document.
		 * Required
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPostBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPostBodyFormProperties>({
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10000000), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateSitePatchBody {

		/**
		 * <p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** Describes a location. */
		Location?: UpdateSitePatchBodyLocation;
	}
	export interface UpdateSitePatchBodyFormProperties {

		/**
		 * <p>A description of your site.</p> <p>Constraints: Maximum length of 256 characters.</p>
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePatchBodyFormGroup() {
		return new FormGroup<UpdateSitePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateSitePatchBodyLocation {
		Address?: string;
		Latitude?: string;
		Longitude?: string;
	}
	export interface UpdateSitePatchBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePatchBodyLocationFormGroup() {
		return new FormGroup<UpdateSitePatchBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutCoreNetworkPolicyPostBody {

		/**
		 * The policy document.
		 * Required
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument: string;

		/**
		 * a core network policy description.
		 * Max length: 256
		 * Min length: 0
		 */
		Description?: string | null;

		/** The ID of a core network policy. */
		LatestVersionId?: number | null;

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken?: string | null;
	}
	export interface PutCoreNetworkPolicyPostBodyFormProperties {

		/**
		 * The policy document.
		 * Required
		 * Max length: 10000000
		 * Min length: 0
		 */
		PolicyDocument: FormControl<string | null | undefined>,

		/**
		 * a core network policy description.
		 * Max length: 256
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** The ID of a core network policy. */
		LatestVersionId: FormControl<number | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Max length: 256
		 * Min length: 0
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutCoreNetworkPolicyPostBodyFormGroup() {
		return new FormGroup<PutCoreNetworkPolicyPostBodyFormProperties>({
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10000000), Validators.pattern('[\s\S]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
			LatestVersionId: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface GetNetworkRoutesPostBody {

		/**
		 * Describes a route table.
		 * Required
		 */
		RouteTableIdentifier: GetNetworkRoutesPostBodyRouteTableIdentifier;

		/** An exact CIDR block. */
		ExactCidrMatches?: Array<string>;

		/** The most specific route that matches the traffic (longest prefix match). */
		LongestPrefixMatches?: Array<string>;

		/** The routes with a subnet that match the specified CIDR filter. */
		SubnetOfMatches?: Array<string>;

		/** The routes with a CIDR that encompasses the CIDR filter. Example: If you specify 10.0.1.0/30, then the result returns 10.0.1.0/29. */
		SupernetOfMatches?: Array<string>;

		/** The IDs of the prefix lists. */
		PrefixListIds?: Array<string>;

		/** The route states. */
		States?: Array<RouteState>;

		/** The route types. */
		Types?: Array<RouteType>;

		/** Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE. */
		DestinationFilters?: {[id: string]: Array<string> };
	}
	export interface GetNetworkRoutesPostBodyFormProperties {

		/** Filter by route table destination. Possible Values: TRANSIT_GATEWAY_ATTACHMENT_ID, RESOURCE_ID, or RESOURCE_TYPE. */
		DestinationFilters: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateGetNetworkRoutesPostBodyFormGroup() {
		return new FormGroup<GetNetworkRoutesPostBodyFormProperties>({
			DestinationFilters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export interface GetNetworkRoutesPostBodyRouteTableIdentifier {
		TransitGatewayRouteTableArn?: string;
		CoreNetworkSegmentEdge?: CoreNetworkSegmentEdgeIdentifier;
	}
	export interface GetNetworkRoutesPostBodyRouteTableIdentifierFormProperties {
		TransitGatewayRouteTableArn: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkRoutesPostBodyRouteTableIdentifierFormGroup() {
		return new FormGroup<GetNetworkRoutesPostBodyRouteTableIdentifierFormProperties>({
			TransitGatewayRouteTableArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTransitGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the transit gateway.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayArn: string;
	}
	export interface RegisterTransitGatewayPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the transit gateway.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTransitGatewayPostBodyFormGroup() {
		return new FormGroup<RegisterTransitGatewayPostBodyFormProperties>({
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface UpdateVpcAttachmentPatchBody {

		/** Adds a subnet ARN to the VPC attachment. */
		AddSubnetArns?: Array<string>;

		/** Removes a subnet ARN from the attachment. */
		RemoveSubnetArns?: Array<string>;

		/** Describes the VPC options. */
		Options?: UpdateVpcAttachmentPatchBodyOptions;
	}
	export interface UpdateVpcAttachmentPatchBodyFormProperties {
	}
	export function CreateUpdateVpcAttachmentPatchBodyFormGroup() {
		return new FormGroup<UpdateVpcAttachmentPatchBodyFormProperties>({
		});

	}

	export interface UpdateVpcAttachmentPatchBodyOptions {
		Ipv6Support?: boolean | null;
		ApplianceModeSupport?: boolean | null;
	}
	export interface UpdateVpcAttachmentPatchBodyOptionsFormProperties {
		Ipv6Support: FormControl<boolean | null | undefined>,
		ApplianceModeSupport: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVpcAttachmentPatchBodyOptionsFormGroup() {
		return new FormGroup<UpdateVpcAttachmentPatchBodyOptionsFormProperties>({
			Ipv6Support: new FormControl<boolean | null | undefined>(undefined),
			ApplianceModeSupport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartOrganizationServiceAccessUpdatePostBody {

		/**
		 * The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		Action: string;
	}
	export interface StartOrganizationServiceAccessUpdatePostBodyFormProperties {

		/**
		 * The action to take for the update request. This can be either <code>ENABLE</code> or <code>DISABLE</code>.
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		Action: FormControl<string | null | undefined>,
	}
	export function CreateStartOrganizationServiceAccessUpdatePostBodyFormGroup() {
		return new FormGroup<StartOrganizationServiceAccessUpdatePostBodyFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to apply to the specified resource.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface StartRouteAnalysisPostBody {

		/**
		 * Describes a source or a destination.
		 * Required
		 */
		Source: StartRouteAnalysisPostBodySource;

		/**
		 * Describes a source or a destination.
		 * Required
		 */
		Destination: StartRouteAnalysisPostBodyDestination;

		/** Indicates whether to analyze the return path. The default is <code>false</code>. */
		IncludeReturnPath?: boolean | null;

		/** Indicates whether to include the location of middlebox appliances in the route analysis. The default is <code>false</code>. */
		UseMiddleboxes?: boolean | null;
	}
	export interface StartRouteAnalysisPostBodyFormProperties {

		/** Indicates whether to analyze the return path. The default is <code>false</code>. */
		IncludeReturnPath: FormControl<boolean | null | undefined>,

		/** Indicates whether to include the location of middlebox appliances in the route analysis. The default is <code>false</code>. */
		UseMiddleboxes: FormControl<boolean | null | undefined>,
	}
	export function CreateStartRouteAnalysisPostBodyFormGroup() {
		return new FormGroup<StartRouteAnalysisPostBodyFormProperties>({
			IncludeReturnPath: new FormControl<boolean | null | undefined>(undefined),
			UseMiddleboxes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartRouteAnalysisPostBodySource {
		TransitGatewayAttachmentArn?: string;
		IpAddress?: string;
	}
	export interface StartRouteAnalysisPostBodySourceFormProperties {
		TransitGatewayAttachmentArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateStartRouteAnalysisPostBodySourceFormGroup() {
		return new FormGroup<StartRouteAnalysisPostBodySourceFormProperties>({
			TransitGatewayAttachmentArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRouteAnalysisPostBodyDestination {
		TransitGatewayAttachmentArn?: string;
		IpAddress?: string;
	}
	export interface StartRouteAnalysisPostBodyDestinationFormProperties {
		TransitGatewayAttachmentArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateStartRouteAnalysisPostBodyDestinationFormGroup() {
		return new FormGroup<StartRouteAnalysisPostBodyDestinationFormProperties>({
			TransitGatewayAttachmentArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkResourceMetadataPatchBody {

		/**
		 * The resource metadata.
		 * Required
		 */
		Metadata: {[id: string]: string };
	}
	export interface UpdateNetworkResourceMetadataPatchBodyFormProperties {

		/**
		 * The resource metadata.
		 * Required
		 */
		Metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateNetworkResourceMetadataPatchBodyFormGroup() {
		return new FormGroup<UpdateNetworkResourceMetadataPatchBodyFormProperties>({
			Metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

