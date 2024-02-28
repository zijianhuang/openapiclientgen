import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit. */
	export interface AuthorizationListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The authorizations in an ExpressRoute Circuit. */
		value?: Array<ExpressRouteCircuitAuthorization>;
	}

	/** Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit. */
	export interface AuthorizationListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationListResultFormGroup() {
		return new FormGroup<AuthorizationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteCircuitAuthorization {
	}
	export interface ExpressRouteCircuitAuthorizationFormProperties {
	}
	export function CreateExpressRouteCircuitAuthorizationFormGroup() {
		return new FormGroup<ExpressRouteCircuitAuthorizationFormProperties>({
		});

	}


	/** Properties of ExpressRouteCircuitAuthorization. */
	export interface AuthorizationPropertiesFormat {

		/** The authorization key. */
		authorizationKey?: string | null;

		/** The authorization use status. */
		authorizationUseStatus?: AuthorizationPropertiesFormatAuthorizationUseStatus | null;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;
	}

	/** Properties of ExpressRouteCircuitAuthorization. */
	export interface AuthorizationPropertiesFormatFormProperties {

		/** The authorization key. */
		authorizationKey: FormControl<string | null | undefined>,

		/** The authorization use status. */
		authorizationUseStatus: FormControl<AuthorizationPropertiesFormatAuthorizationUseStatus | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateAuthorizationPropertiesFormatFormGroup() {
		return new FormGroup<AuthorizationPropertiesFormatFormProperties>({
			authorizationKey: new FormControl<string | null | undefined>(undefined),
			authorizationUseStatus: new FormControl<AuthorizationPropertiesFormatAuthorizationUseStatus | null | undefined>(undefined),
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AuthorizationPropertiesFormatAuthorizationUseStatus { Available = 'Available', InUse = 'InUse' }

	export enum AuthorizationPropertiesFormatProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }


	/** Express Route Circuit connection state. */
	export enum CircuitConnectionStatus { Connected = 'Connected', Connecting = 'Connecting', Disconnected = 'Disconnected' }

	export interface ExpressRouteCircuit {
	}
	export interface ExpressRouteCircuitFormProperties {
	}
	export function CreateExpressRouteCircuitFormGroup() {
		return new FormGroup<ExpressRouteCircuitFormProperties>({
		});

	}


	/** The ARP table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitArpTable {

		/**
		 * Entry age in minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		age?: number | null;

		/** Interface address. */
		interface?: string | null;

		/** The IP address. */
		ipAddress?: string | null;

		/** The MAC address. */
		macAddress?: string | null;
	}

	/** The ARP table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitArpTableFormProperties {

		/**
		 * Entry age in minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		age: FormControl<number | null | undefined>,

		/** Interface address. */
		interface: FormControl<string | null | undefined>,

		/** The IP address. */
		ipAddress: FormControl<string | null | undefined>,

		/** The MAC address. */
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitArpTableFormGroup() {
		return new FormGroup<ExpressRouteCircuitArpTableFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			interface: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteCircuitConnection {
	}
	export interface ExpressRouteCircuitConnectionFormProperties {
	}
	export function CreateExpressRouteCircuitConnectionFormGroup() {
		return new FormGroup<ExpressRouteCircuitConnectionFormProperties>({
		});

	}


	/** Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitConnectionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The global reach connection associated with Private Peering in an ExpressRoute Circuit. */
		value?: Array<ExpressRouteCircuitConnection>;
	}

	/** Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitConnectionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitConnectionListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the express route circuit connection. */
	export interface ExpressRouteCircuitConnectionPropertiesFormat {

		/** /29 IP address space to carve out Customer addresses for tunnels. */
		addressPrefix?: string | null;

		/** The authorization key. */
		authorizationKey?: string | null;

		/** Express Route Circuit connection state. */
		circuitConnectionStatus?: CircuitConnectionStatus | null;

		/** Reference to another subresource. */
		expressRouteCircuitPeering?: any;

		/** Reference to another subresource. */
		peerExpressRouteCircuitPeering?: any;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;
	}

	/** Properties of the express route circuit connection. */
	export interface ExpressRouteCircuitConnectionPropertiesFormatFormProperties {

		/** /29 IP address space to carve out Customer addresses for tunnels. */
		addressPrefix: FormControl<string | null | undefined>,

		/** The authorization key. */
		authorizationKey: FormControl<string | null | undefined>,

		/** Express Route Circuit connection state. */
		circuitConnectionStatus: FormControl<CircuitConnectionStatus | null | undefined>,

		/** Reference to another subresource. */
		expressRouteCircuitPeering: FormControl<any | null | undefined>,

		/** Reference to another subresource. */
		peerExpressRouteCircuitPeering: FormControl<any | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateExpressRouteCircuitConnectionPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRouteCircuitConnectionPropertiesFormatFormProperties>({
			addressPrefix: new FormControl<string | null | undefined>(undefined),
			authorizationKey: new FormControl<string | null | undefined>(undefined),
			circuitConnectionStatus: new FormControl<CircuitConnectionStatus | null | undefined>(undefined),
			expressRouteCircuitPeering: new FormControl<any | null | undefined>(undefined),
			peerExpressRouteCircuitPeering: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** Response for ListExpressRouteCircuit API service call. */
	export interface ExpressRouteCircuitListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of ExpressRouteCircuits in a resource group. */
		value?: Array<ExpressRouteCircuit>;
	}

	/** Response for ListExpressRouteCircuit API service call. */
	export interface ExpressRouteCircuitListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteCircuitPeering {
	}
	export interface ExpressRouteCircuitPeeringFormProperties {
	}
	export function CreateExpressRouteCircuitPeeringFormGroup() {
		return new FormGroup<ExpressRouteCircuitPeeringFormProperties>({
		});

	}


	/** Specifies the peering configuration. */
	export interface ExpressRouteCircuitPeeringConfig {

		/** The communities of bgp peering. Specified for microsoft peering. */
		advertisedCommunities?: Array<string>;

		/** The reference of AdvertisedPublicPrefixes. */
		advertisedPublicPrefixes?: Array<string>;

		/** The advertised public prefix state of the Peering resource. */
		advertisedPublicPrefixesState?: ExpressRouteCircuitPeeringConfigAdvertisedPublicPrefixesState | null;

		/**
		 * The CustomerASN of the peering.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customerASN?: number | null;

		/**
		 * The legacy mode of the peering.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legacyMode?: number | null;

		/** The RoutingRegistryName of the configuration. */
		routingRegistryName?: string | null;
	}

	/** Specifies the peering configuration. */
	export interface ExpressRouteCircuitPeeringConfigFormProperties {

		/** The advertised public prefix state of the Peering resource. */
		advertisedPublicPrefixesState: FormControl<ExpressRouteCircuitPeeringConfigAdvertisedPublicPrefixesState | null | undefined>,

		/**
		 * The CustomerASN of the peering.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customerASN: FormControl<number | null | undefined>,

		/**
		 * The legacy mode of the peering.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		legacyMode: FormControl<number | null | undefined>,

		/** The RoutingRegistryName of the configuration. */
		routingRegistryName: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitPeeringConfigFormGroup() {
		return new FormGroup<ExpressRouteCircuitPeeringConfigFormProperties>({
			advertisedPublicPrefixesState: new FormControl<ExpressRouteCircuitPeeringConfigAdvertisedPublicPrefixesState | null | undefined>(undefined),
			customerASN: new FormControl<number | null | undefined>(undefined),
			legacyMode: new FormControl<number | null | undefined>(undefined),
			routingRegistryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteCircuitPeeringConfigAdvertisedPublicPrefixesState { NotConfigured = 'NotConfigured', Configuring = 'Configuring', Configured = 'Configured', ValidationNeeded = 'ValidationNeeded' }


	/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitPeeringListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The peerings in an express route circuit. */
		value?: Array<ExpressRouteCircuitPeering>;
	}

	/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitPeeringListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitPeeringListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitPeeringListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the express route circuit peering. */
	export interface ExpressRouteCircuitPeeringPropertiesFormat {

		/**
		 * The Azure ASN.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		azureASN?: number | null;

		/** The list of circuit connections associated with Azure Private Peering for this circuit. */
		connections?: Array<ExpressRouteCircuitConnection>;

		/** The ID of the ExpressRouteConnection. */
		expressRouteConnection?: any;

		/** The GatewayManager Etag. */
		gatewayManagerEtag?: string | null;

		/** Contains IPv6 peering config. */
		ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;

		/** Who was the last to modify the peering. */
		lastModifiedBy?: string | null;

		/** Specifies the peering configuration. */
		microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;

		/**
		 * The peer ASN.
		 * Minimum: 1
		 * Maximum: 4294967295
		 */
		peerASN?: string | null;

		/** The list of peered circuit connections associated with Azure Private Peering for this circuit. */
		peeredConnections?: Array<PeerExpressRouteCircuitConnection>;

		/** The peering type. */
		peeringType?: ExpressRouteCircuitPeeringPropertiesFormatPeeringType | null;

		/** The primary port. */
		primaryAzurePort?: string | null;

		/** The primary address prefix. */
		primaryPeerAddressPrefix?: string | null;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;

		/** Reference to another subresource. */
		routeFilter?: any;

		/** The secondary port. */
		secondaryAzurePort?: string | null;

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix?: string | null;

		/** The shared key. */
		sharedKey?: string | null;

		/** The state of peering. */
		state?: ExpressRouteCircuitPeeringPropertiesFormatState | null;

		/** Contains stats associated with the peering. */
		stats?: ExpressRouteCircuitStats;

		/**
		 * The VLAN ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vlanId?: number | null;
	}

	/** Properties of the express route circuit peering. */
	export interface ExpressRouteCircuitPeeringPropertiesFormatFormProperties {

		/**
		 * The Azure ASN.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		azureASN: FormControl<number | null | undefined>,

		/** The ID of the ExpressRouteConnection. */
		expressRouteConnection: FormControl<any | null | undefined>,

		/** The GatewayManager Etag. */
		gatewayManagerEtag: FormControl<string | null | undefined>,

		/** Who was the last to modify the peering. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/**
		 * The peer ASN.
		 * Minimum: 1
		 * Maximum: 4294967295
		 */
		peerASN: FormControl<string | null | undefined>,

		/** The peering type. */
		peeringType: FormControl<ExpressRouteCircuitPeeringPropertiesFormatPeeringType | null | undefined>,

		/** The primary port. */
		primaryAzurePort: FormControl<string | null | undefined>,

		/** The primary address prefix. */
		primaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,

		/** Reference to another subresource. */
		routeFilter: FormControl<any | null | undefined>,

		/** The secondary port. */
		secondaryAzurePort: FormControl<string | null | undefined>,

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** The shared key. */
		sharedKey: FormControl<string | null | undefined>,

		/** The state of peering. */
		state: FormControl<ExpressRouteCircuitPeeringPropertiesFormatState | null | undefined>,

		/**
		 * The VLAN ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vlanId: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteCircuitPeeringPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRouteCircuitPeeringPropertiesFormatFormProperties>({
			azureASN: new FormControl<number | null | undefined>(undefined),
			expressRouteConnection: new FormControl<any | null | undefined>(undefined),
			gatewayManagerEtag: new FormControl<string | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			peerASN: new FormControl<string | null | undefined>(undefined, [Validators.min(1), Validators.max(4294967295)]),
			peeringType: new FormControl<ExpressRouteCircuitPeeringPropertiesFormatPeeringType | null | undefined>(undefined),
			primaryAzurePort: new FormControl<string | null | undefined>(undefined),
			primaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
			routeFilter: new FormControl<any | null | undefined>(undefined),
			secondaryAzurePort: new FormControl<string | null | undefined>(undefined),
			secondaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			sharedKey: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExpressRouteCircuitPeeringPropertiesFormatState | null | undefined>(undefined),
			vlanId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PeerExpressRouteCircuitConnection {
	}
	export interface PeerExpressRouteCircuitConnectionFormProperties {
	}
	export function CreatePeerExpressRouteCircuitConnectionFormGroup() {
		return new FormGroup<PeerExpressRouteCircuitConnectionFormProperties>({
		});

	}

	export enum ExpressRouteCircuitPeeringPropertiesFormatPeeringType { AzurePublicPeering = 'AzurePublicPeering', AzurePrivatePeering = 'AzurePrivatePeering', MicrosoftPeering = 'MicrosoftPeering' }

	export enum ExpressRouteCircuitPeeringPropertiesFormatState { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Properties of ExpressRouteCircuit. */
	export interface ExpressRouteCircuitPropertiesFormat {

		/** Allow classic operations. */
		allowClassicOperations?: boolean | null;

		/** The list of authorizations. */
		authorizations?: Array<ExpressRouteCircuitAuthorization>;

		/**
		 * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
		 * Type: double
		 */
		bandwidthInGbps?: number | null;

		/** The CircuitProvisioningState state of the resource. */
		circuitProvisioningState?: string | null;

		/** Reference to another subresource. */
		expressRoutePort?: any;

		/** The GatewayManager Etag. */
		gatewayManagerEtag?: string | null;

		/** Flag denoting Global reach status. */
		globalReachEnabled?: boolean | null;

		/** The list of peerings. */
		peerings?: Array<ExpressRouteCircuitPeering>;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;

		/** The ServiceKey. */
		serviceKey?: string | null;

		/** The ServiceProviderNotes. */
		serviceProviderNotes?: string | null;

		/** Contains ServiceProviderProperties in an ExpressRouteCircuit. */
		serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties;

		/** The ServiceProviderProvisioningState state of the resource. */
		serviceProviderProvisioningState?: ExpressRouteCircuitPropertiesFormatServiceProviderProvisioningState | null;

		/**
		 * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stag?: number | null;
	}

	/** Properties of ExpressRouteCircuit. */
	export interface ExpressRouteCircuitPropertiesFormatFormProperties {

		/** Allow classic operations. */
		allowClassicOperations: FormControl<boolean | null | undefined>,

		/**
		 * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
		 * Type: double
		 */
		bandwidthInGbps: FormControl<number | null | undefined>,

		/** The CircuitProvisioningState state of the resource. */
		circuitProvisioningState: FormControl<string | null | undefined>,

		/** Reference to another subresource. */
		expressRoutePort: FormControl<any | null | undefined>,

		/** The GatewayManager Etag. */
		gatewayManagerEtag: FormControl<string | null | undefined>,

		/** Flag denoting Global reach status. */
		globalReachEnabled: FormControl<boolean | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,

		/** The ServiceKey. */
		serviceKey: FormControl<string | null | undefined>,

		/** The ServiceProviderNotes. */
		serviceProviderNotes: FormControl<string | null | undefined>,

		/** The ServiceProviderProvisioningState state of the resource. */
		serviceProviderProvisioningState: FormControl<ExpressRouteCircuitPropertiesFormatServiceProviderProvisioningState | null | undefined>,

		/**
		 * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stag: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteCircuitPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRouteCircuitPropertiesFormatFormProperties>({
			allowClassicOperations: new FormControl<boolean | null | undefined>(undefined),
			bandwidthInGbps: new FormControl<number | null | undefined>(undefined),
			circuitProvisioningState: new FormControl<string | null | undefined>(undefined),
			expressRoutePort: new FormControl<any | null | undefined>(undefined),
			gatewayManagerEtag: new FormControl<string | null | undefined>(undefined),
			globalReachEnabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
			serviceKey: new FormControl<string | null | undefined>(undefined),
			serviceProviderNotes: new FormControl<string | null | undefined>(undefined),
			serviceProviderProvisioningState: new FormControl<ExpressRouteCircuitPropertiesFormatServiceProviderProvisioningState | null | undefined>(undefined),
			stag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteCircuitPropertiesFormatServiceProviderProvisioningState { NotProvisioned = 'NotProvisioned', Provisioning = 'Provisioning', Provisioned = 'Provisioned', Deprovisioning = 'Deprovisioning' }


	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitRoutesTable {

		/** Local preference value as set with the set local-preference route-map configuration command. */
		locPrf?: string | null;

		/** IP address of a network entity. */
		network?: string | null;

		/** NextHop address. */
		nextHop?: string | null;

		/** Autonomous system paths to the destination network. */
		path?: string | null;

		/**
		 * Route Weight.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitRoutesTableFormProperties {

		/** Local preference value as set with the set local-preference route-map configuration command. */
		locPrf: FormControl<string | null | undefined>,

		/** IP address of a network entity. */
		network: FormControl<string | null | undefined>,

		/** NextHop address. */
		nextHop: FormControl<string | null | undefined>,

		/** Autonomous system paths to the destination network. */
		path: FormControl<string | null | undefined>,

		/**
		 * Route Weight.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteCircuitRoutesTableFormGroup() {
		return new FormGroup<ExpressRouteCircuitRoutesTableFormProperties>({
			locPrf: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nextHop: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitRoutesTableSummary {

		/**
		 * Autonomous system number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		as?: number | null;

		/** IP address of the neighbor. */
		neighbor?: string | null;

		/** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
		statePfxRcd?: string | null;

		/** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
		upDown?: string | null;

		/**
		 * BGP version number spoken to the neighbor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		v?: number | null;
	}

	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCircuitRoutesTableSummaryFormProperties {

		/**
		 * Autonomous system number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		as: FormControl<number | null | undefined>,

		/** IP address of the neighbor. */
		neighbor: FormControl<string | null | undefined>,

		/** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
		statePfxRcd: FormControl<string | null | undefined>,

		/** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
		upDown: FormControl<string | null | undefined>,

		/**
		 * BGP version number spoken to the neighbor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		v: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteCircuitRoutesTableSummaryFormGroup() {
		return new FormGroup<ExpressRouteCircuitRoutesTableSummaryFormProperties>({
			as: new FormControl<number | null | undefined>(undefined),
			neighbor: new FormControl<string | null | undefined>(undefined),
			statePfxRcd: new FormControl<string | null | undefined>(undefined),
			upDown: new FormControl<string | null | undefined>(undefined),
			v: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains ServiceProviderProperties in an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitServiceProviderProperties {

		/**
		 * The BandwidthInMbps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bandwidthInMbps?: number | null;

		/** The peering location. */
		peeringLocation?: string | null;

		/** The serviceProviderName. */
		serviceProviderName?: string | null;
	}

	/** Contains ServiceProviderProperties in an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitServiceProviderPropertiesFormProperties {

		/**
		 * The BandwidthInMbps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bandwidthInMbps: FormControl<number | null | undefined>,

		/** The peering location. */
		peeringLocation: FormControl<string | null | undefined>,

		/** The serviceProviderName. */
		serviceProviderName: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitServiceProviderPropertiesFormGroup() {
		return new FormGroup<ExpressRouteCircuitServiceProviderPropertiesFormProperties>({
			bandwidthInMbps: new FormControl<number | null | undefined>(undefined),
			peeringLocation: new FormControl<string | null | undefined>(undefined),
			serviceProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains SKU in an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitSku {

		/** The family of the SKU. */
		family?: ExpressRouteCircuitSkuFamily | null;

		/** The name of the SKU. */
		name?: string | null;

		/** The tier of the SKU. */
		tier?: ExpressRouteCircuitSkuTier | null;
	}

	/** Contains SKU in an ExpressRouteCircuit. */
	export interface ExpressRouteCircuitSkuFormProperties {

		/** The family of the SKU. */
		family: FormControl<ExpressRouteCircuitSkuFamily | null | undefined>,

		/** The name of the SKU. */
		name: FormControl<string | null | undefined>,

		/** The tier of the SKU. */
		tier: FormControl<ExpressRouteCircuitSkuTier | null | undefined>,
	}
	export function CreateExpressRouteCircuitSkuFormGroup() {
		return new FormGroup<ExpressRouteCircuitSkuFormProperties>({
			family: new FormControl<ExpressRouteCircuitSkuFamily | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ExpressRouteCircuitSkuTier | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteCircuitSkuFamily { UnlimitedData = 'UnlimitedData', MeteredData = 'MeteredData' }

	export enum ExpressRouteCircuitSkuTier { Standard = 'Standard', Premium = 'Premium', Basic = 'Basic', Local = 'Local' }


	/** Contains stats associated with the peering. */
	export interface ExpressRouteCircuitStats {

		/**
		 * The Primary BytesIn of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		primarybytesIn?: string | null;

		/**
		 * The primary BytesOut of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		primarybytesOut?: string | null;

		/**
		 * The secondary BytesIn of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		secondarybytesIn?: string | null;

		/**
		 * The secondary BytesOut of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		secondarybytesOut?: string | null;
	}

	/** Contains stats associated with the peering. */
	export interface ExpressRouteCircuitStatsFormProperties {

		/**
		 * The Primary BytesIn of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		primarybytesIn: FormControl<string | null | undefined>,

		/**
		 * The primary BytesOut of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		primarybytesOut: FormControl<string | null | undefined>,

		/**
		 * The secondary BytesIn of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		secondarybytesIn: FormControl<string | null | undefined>,

		/**
		 * The secondary BytesOut of the peering.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		secondarybytesOut: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitStatsFormGroup() {
		return new FormGroup<ExpressRouteCircuitStatsFormProperties>({
			primarybytesIn: new FormControl<string | null | undefined>(undefined),
			primarybytesOut: new FormControl<string | null | undefined>(undefined),
			secondarybytesIn: new FormControl<string | null | undefined>(undefined),
			secondarybytesOut: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListArpTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsArpTableListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of the ARP tables. */
		value?: Array<ExpressRouteCircuitArpTable>;
	}

	/** Response for ListArpTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsArpTableListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitsArpTableListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitsArpTableListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListRoutesTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsRoutesTableListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of routes table. */
		value?: Array<ExpressRouteCircuitRoutesTable>;
	}

	/** Response for ListRoutesTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsRoutesTableListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitsRoutesTableListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitsRoutesTableListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListRoutesTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsRoutesTableSummaryListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of the routes table. */
		value?: Array<ExpressRouteCircuitRoutesTableSummary>;
	}

	/** Response for ListRoutesTable associated with the Express Route Circuits API. */
	export interface ExpressRouteCircuitsRoutesTableSummaryListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitsRoutesTableSummaryListResultFormGroup() {
		return new FormGroup<ExpressRouteCircuitsRoutesTableSummaryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of peering. */
	export enum ExpressRoutePeeringState { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** The peering type. */
	export enum ExpressRoutePeeringType { AzurePublicPeering = 'AzurePublicPeering', AzurePrivatePeering = 'AzurePrivatePeering', MicrosoftPeering = 'MicrosoftPeering' }

	export interface ExpressRouteServiceProvider {
	}
	export interface ExpressRouteServiceProviderFormProperties {
	}
	export function CreateExpressRouteServiceProviderFormGroup() {
		return new FormGroup<ExpressRouteServiceProviderFormProperties>({
		});

	}


	/** Contains bandwidths offered in ExpressRouteServiceProvider resources. */
	export interface ExpressRouteServiceProviderBandwidthsOffered {

		/** The OfferName. */
		offerName?: string | null;

		/**
		 * The ValueInMbps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		valueInMbps?: number | null;
	}

	/** Contains bandwidths offered in ExpressRouteServiceProvider resources. */
	export interface ExpressRouteServiceProviderBandwidthsOfferedFormProperties {

		/** The OfferName. */
		offerName: FormControl<string | null | undefined>,

		/**
		 * The ValueInMbps.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		valueInMbps: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteServiceProviderBandwidthsOfferedFormGroup() {
		return new FormGroup<ExpressRouteServiceProviderBandwidthsOfferedFormProperties>({
			offerName: new FormControl<string | null | undefined>(undefined),
			valueInMbps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for the ListExpressRouteServiceProvider API service call. */
	export interface ExpressRouteServiceProviderListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of ExpressRouteResourceProvider resources. */
		value?: Array<ExpressRouteServiceProvider>;
	}

	/** Response for the ListExpressRouteServiceProvider API service call. */
	export interface ExpressRouteServiceProviderListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteServiceProviderListResultFormGroup() {
		return new FormGroup<ExpressRouteServiceProviderListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of ExpressRouteServiceProvider. */
	export interface ExpressRouteServiceProviderPropertiesFormat {

		/** A list of bandwidths offered. */
		bandwidthsOffered?: Array<ExpressRouteServiceProviderBandwidthsOffered>;

		/** A list of peering locations. */
		peeringLocations?: Array<string>;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;
	}

	/** Properties of ExpressRouteServiceProvider. */
	export interface ExpressRouteServiceProviderPropertiesFormatFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateExpressRouteServiceProviderPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRouteServiceProviderPropertiesFormatFormProperties>({
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** Contains IPv6 peering config. */
	export interface Ipv6ExpressRouteCircuitPeeringConfig {

		/** Specifies the peering configuration. */
		microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;

		/** The primary address prefix. */
		primaryPeerAddressPrefix?: string | null;

		/** Reference to another subresource. */
		routeFilter?: any;

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix?: string | null;

		/** The state of peering. */
		state?: ExpressRouteCircuitPeeringPropertiesFormatState | null;
	}

	/** Contains IPv6 peering config. */
	export interface Ipv6ExpressRouteCircuitPeeringConfigFormProperties {

		/** The primary address prefix. */
		primaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** Reference to another subresource. */
		routeFilter: FormControl<any | null | undefined>,

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** The state of peering. */
		state: FormControl<ExpressRouteCircuitPeeringPropertiesFormatState | null | undefined>,
	}
	export function CreateIpv6ExpressRouteCircuitPeeringConfigFormGroup() {
		return new FormGroup<Ipv6ExpressRouteCircuitPeeringConfigFormProperties>({
			primaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			routeFilter: new FormControl<any | null | undefined>(undefined),
			secondaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExpressRouteCircuitPeeringPropertiesFormatState | null | undefined>(undefined),
		});

	}


	/** Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit. */
	export interface PeerExpressRouteCircuitConnectionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The global reach peer circuit connection associated with Private Peering in an ExpressRoute Circuit. */
		value?: Array<PeerExpressRouteCircuitConnection>;
	}

	/** Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit. */
	export interface PeerExpressRouteCircuitConnectionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePeerExpressRouteCircuitConnectionListResultFormGroup() {
		return new FormGroup<PeerExpressRouteCircuitConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the peer express route circuit connection. */
	export interface PeerExpressRouteCircuitConnectionPropertiesFormat {

		/** /29 IP address space to carve out Customer addresses for tunnels. */
		addressPrefix?: string | null;

		/** The resource guid of the authorization used for the express route circuit connection. */
		authResourceGuid?: string | null;

		/** Express Route Circuit connection state. */
		circuitConnectionStatus?: CircuitConnectionStatus | null;

		/** The name of the express route circuit connection resource. */
		connectionName?: string | null;

		/** Reference to another subresource. */
		expressRouteCircuitPeering?: any;

		/** Reference to another subresource. */
		peerExpressRouteCircuitPeering?: any;

		/** The current provisioning state. */
		provisioningState?: AuthorizationPropertiesFormatProvisioningState | null;
	}

	/** Properties of the peer express route circuit connection. */
	export interface PeerExpressRouteCircuitConnectionPropertiesFormatFormProperties {

		/** /29 IP address space to carve out Customer addresses for tunnels. */
		addressPrefix: FormControl<string | null | undefined>,

		/** The resource guid of the authorization used for the express route circuit connection. */
		authResourceGuid: FormControl<string | null | undefined>,

		/** Express Route Circuit connection state. */
		circuitConnectionStatus: FormControl<CircuitConnectionStatus | null | undefined>,

		/** The name of the express route circuit connection resource. */
		connectionName: FormControl<string | null | undefined>,

		/** Reference to another subresource. */
		expressRouteCircuitPeering: FormControl<any | null | undefined>,

		/** Reference to another subresource. */
		peerExpressRouteCircuitPeering: FormControl<any | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreatePeerExpressRouteCircuitConnectionPropertiesFormatFormGroup() {
		return new FormGroup<PeerExpressRouteCircuitConnectionPropertiesFormatFormProperties>({
			addressPrefix: new FormControl<string | null | undefined>(undefined),
			authResourceGuid: new FormControl<string | null | undefined>(undefined),
			circuitConnectionStatus: new FormControl<CircuitConnectionStatus | null | undefined>(undefined),
			connectionName: new FormControl<string | null | undefined>(undefined),
			expressRouteCircuitPeering: new FormControl<any | null | undefined>(undefined),
			peerExpressRouteCircuitPeering: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<AuthorizationPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** The ServiceProviderProvisioningState state of the resource. */
	export enum ServiceProviderProvisioningState { NotProvisioned = 'NotProvisioned', Provisioning = 'Provisioning', Provisioned = 'Provisioned', Deprovisioning = 'Deprovisioning' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all the express route circuits in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCircuits
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitListResult} Request successful. The operation returns a list of ExpressRouteCircuit resources.
		 */
		ExpressRouteCircuits_ListAll(api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitListResult> {
			return this.http.get<ExpressRouteCircuitListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/expressRouteCircuits?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the available express route service providers.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteServiceProviders
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteServiceProviderListResult} Request successful. The operation returns a list of ExpressRouteServiceProvider resources.
		 */
		ExpressRouteServiceProviders_List(api_version: string, subscriptionId: string): Observable<ExpressRouteServiceProviderListResult> {
			return this.http.get<ExpressRouteServiceProviderListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/expressRouteServiceProviders?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the express route circuits in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitListResult} Request successful. The operation returns the resulting ExpressRouteCircuitAuthorization resource.
		 */
		ExpressRouteCircuits_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitListResult> {
			return this.http.get<ExpressRouteCircuitListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of express route circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuit} Request successful. The operation returns the resulting ExpressRouteCircuit resource.
		 */
		ExpressRouteCircuits_Get(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuit> {
			return this.http.get<ExpressRouteCircuit>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an express route circuit.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCircuit} requestBody Parameters supplied to the create or update express route circuit operation.
		 * @return {ExpressRouteCircuit} Update successful. The operation returns the resulting ExpressRouteCircuit resource.
		 */
		ExpressRouteCircuits_CreateOrUpdate(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCircuit): Observable<ExpressRouteCircuit> {
			return this.http.put<ExpressRouteCircuit>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified express route circuit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteCircuits_Delete(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an express route circuit tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to update express route circuit tags.
		 * @return {ExpressRouteCircuit} Update successful. The operation returns the resulting ExpressRouteCircuit resource.
		 */
		ExpressRouteCircuits_UpdateTags(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<ExpressRouteCircuit> {
			return this.http.patch<ExpressRouteCircuit>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all authorizations in an express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationListResult} Request successful. The operation returns a list of ExpressRouteCircuitAuthorization resources.
		 */
		ExpressRouteCircuitAuthorizations_List(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string): Observable<AuthorizationListResult> {
			return this.http.get<AuthorizationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/authorizations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified authorization from the specified express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} authorizationName The name of the authorization.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitAuthorization} Request successful. The operation returns the ExpressRouteCircuitAuthorization resource.
		 */
		ExpressRouteCircuitAuthorizations_Get(resourceGroupName: string, circuitName: string, authorizationName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitAuthorization> {
			return this.http.get<ExpressRouteCircuitAuthorization>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/authorizations/' + (authorizationName == null ? '' : encodeURIComponent(authorizationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an authorization in the specified express route circuit.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} authorizationName The name of the authorization.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCircuitAuthorization} requestBody Parameters supplied to the create or update express route circuit authorization operation.
		 * @return {ExpressRouteCircuitAuthorization} Update successful. The operation returns the resulting ExpressRouteCircuitAuthorization resource.
		 */
		ExpressRouteCircuitAuthorizations_CreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCircuitAuthorization): Observable<ExpressRouteCircuitAuthorization> {
			return this.http.put<ExpressRouteCircuitAuthorization>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/authorizations/' + (authorizationName == null ? '' : encodeURIComponent(authorizationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified authorization from the specified express route circuit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} authorizationName The name of the authorization.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteCircuitAuthorizations_Delete(resourceGroupName: string, circuitName: string, authorizationName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/authorizations/' + (authorizationName == null ? '' : encodeURIComponent(authorizationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all peerings in a specified express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitPeeringListResult} Request successful. The operation returns a list of ExpressRouteCircuitPeering resources.
		 */
		ExpressRouteCircuitPeerings_List(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitPeeringListResult> {
			return this.http.get<ExpressRouteCircuitPeeringListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified peering for the express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitPeering} Request successful. The operation returns the resulting ExpressRouteCircuitPeering resource.
		 */
		ExpressRouteCircuitPeerings_Get(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitPeering> {
			return this.http.get<ExpressRouteCircuitPeering>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a peering in the specified express route circuits.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCircuitPeering} requestBody Parameters supplied to the create or update express route circuit peering operation.
		 * @return {ExpressRouteCircuitPeering} Update successful. The operation returns the resulting ExpressRouteCircuitPeering resource.
		 */
		ExpressRouteCircuitPeerings_CreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCircuitPeering): Observable<ExpressRouteCircuitPeering> {
			return this.http.put<ExpressRouteCircuitPeering>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified peering from the specified express route circuit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteCircuitPeerings_Delete(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the currently advertised ARP table associated with the express route circuit in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/arpTables/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitsArpTableListResult} Request successful. The operation returns the resulting ExpressRouteCircuitsArpTable resource.
		 */
		ExpressRouteCircuits_ListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitsArpTableListResult> {
			return this.http.post<ExpressRouteCircuitsArpTableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/arpTables/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all global reach connections associated with a private peering in an express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitConnectionListResult} Request successful. The operation returns a list of ExpressRouteCircuitConnections resources.
		 */
		ExpressRouteCircuitConnections_List(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitConnectionListResult> {
			return this.http.get<ExpressRouteCircuitConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/connections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Express Route Circuit Connection from the specified express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} connectionName The name of the express route circuit connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitConnection} Request successful. The operation returns the resulting Express Route Circuit Connection resource.
		 */
		ExpressRouteCircuitConnections_Get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitConnection> {
			return this.http.get<ExpressRouteCircuitConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} connectionName The name of the express route circuit connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCircuitConnection} requestBody Parameters supplied to the create or update express route circuit connection operation.
		 * @return {ExpressRouteCircuitConnection} Update successful. The operation returns the resulting ExpressRouteCircuitPeering resource.
		 */
		ExpressRouteCircuitConnections_CreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCircuitConnection): Observable<ExpressRouteCircuitConnection> {
			return this.http.put<ExpressRouteCircuitConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/connections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} connectionName The name of the express route circuit connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteCircuitConnections_Delete(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all global reach peer connections associated with a private peering in an express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/peerConnections
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PeerExpressRouteCircuitConnectionListResult} Request successful. The operation returns a list of PeerExpressRouteCircuitConnections resources.
		 */
		PeerExpressRouteCircuitConnections_List(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<PeerExpressRouteCircuitConnectionListResult> {
			return this.http.get<PeerExpressRouteCircuitConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/peerConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Peer Express Route Circuit Connection from the specified express route circuit.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/peerConnections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} connectionName The name of the peer express route circuit connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PeerExpressRouteCircuitConnection} Request successful. The operation returns the resulting Peer Express Route Circuit Connection resource.
		 */
		PeerExpressRouteCircuitConnections_Get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<PeerExpressRouteCircuitConnection> {
			return this.http.get<PeerExpressRouteCircuitConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/peerConnections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the currently advertised routes table associated with the express route circuit in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/routeTables/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitsRoutesTableListResult} Request successful. The operation returns the resulting ExpressRouteCircuitsRouteTable resource.
		 */
		ExpressRouteCircuits_ListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitsRoutesTableListResult> {
			return this.http.post<ExpressRouteCircuitsRoutesTableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/routeTables/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the currently advertised routes table summary associated with the express route circuit in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/routeTablesSummary/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitsRoutesTableSummaryListResult} Request successful. The operation returns the resulting ExpressRouteCircuitsRoutesTableSummary resource.
		 */
		ExpressRouteCircuits_ListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitsRoutesTableSummaryListResult> {
			return this.http.post<ExpressRouteCircuitsRoutesTableSummaryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/routeTablesSummary/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all stats from an express route circuit in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/stats
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitStats} Request successful. The operation returns the resulting ExpressRouteCircuitStats resource.
		 */
		ExpressRouteCircuits_GetPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitStats> {
			return this.http.get<ExpressRouteCircuitStats>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/stats&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the stats from an express route circuit in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/stats
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} circuitName The name of the express route circuit.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCircuitStats} Request successful. The operation returns the resulting ExpressRouteCircuitStats resource.
		 */
		ExpressRouteCircuits_GetStats(resourceGroupName: string, circuitName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCircuitStats> {
			return this.http.get<ExpressRouteCircuitStats>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCircuits/' + (circuitName == null ? '' : encodeURIComponent(circuitName)) + '/stats&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

