import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers. */
	export interface Address {

		/** The address represents an envoy internal listener. [#comment: */
		envoyInternalAddress?: EnvoyInternalAddress;
		pipe?: Pipe;

		/** [#next-free-field: 7] */
		socketAddress?: SocketAddress;
	}

	/** Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers. */
	export interface AddressFormProperties {
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
		});

	}


	/** The address represents an envoy internal listener. [#comment:  */
	export interface EnvoyInternalAddress {

		/** Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for example, may be set to the final destination IP for the target internal listener. */
		endpointId?: string | null;

		/** Specifies the :ref:`name ` of the internal listener. */
		serverListenerName?: string | null;
	}

	/** The address represents an envoy internal listener. [#comment:  */
	export interface EnvoyInternalAddressFormProperties {

		/** Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for example, may be set to the final destination IP for the target internal listener. */
		endpointId: FormControl<string | null | undefined>,

		/** Specifies the :ref:`name ` of the internal listener. */
		serverListenerName: FormControl<string | null | undefined>,
	}
	export function CreateEnvoyInternalAddressFormGroup() {
		return new FormGroup<EnvoyInternalAddressFormProperties>({
			endpointId: new FormControl<string | null | undefined>(undefined),
			serverListenerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pipe {

		/**
		 * The mode for the Pipe. Not applicable for abstract sockets.
		 * Type: uint, 0 to 4,294,967,295
		 */
		mode?: number | null;

		/** Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux. */
		path?: string | null;
	}
	export interface PipeFormProperties {

		/**
		 * The mode for the Pipe. Not applicable for abstract sockets.
		 * Type: uint, 0 to 4,294,967,295
		 */
		mode: FormControl<number | null | undefined>,

		/** Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux. */
		path: FormControl<string | null | undefined>,
	}
	export function CreatePipeFormGroup() {
		return new FormGroup<PipeFormProperties>({
			mode: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** [#next-free-field: 7] */
	export interface SocketAddress {

		/** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (``STATIC`` or ``EDS`` clusters) or a hostname resolved by DNS (``STRICT_DNS`` or ``LOGICAL_DNS`` clusters). Address resolution can be customized via :ref:`resolver_name `. */
		address?: string | null;

		/** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
		ipv4Compat?: boolean | null;

		/** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
		namedPort?: string | null;

		/** Type: uint, 0 to 4,294,967,295 */
		portValue?: number | null;
		protocol?: SocketAddressProtocol | null;

		/** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with ``STRICT_DNS`` or ``LOGICAL_DNS`` will generate an error at runtime. */
		resolverName?: string | null;
	}

	/** [#next-free-field: 7] */
	export interface SocketAddressFormProperties {

		/** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (``STATIC`` or ``EDS`` clusters) or a hostname resolved by DNS (``STRICT_DNS`` or ``LOGICAL_DNS`` clusters). Address resolution can be customized via :ref:`resolver_name `. */
		address: FormControl<string | null | undefined>,

		/** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
		ipv4Compat: FormControl<boolean | null | undefined>,

		/** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
		namedPort: FormControl<string | null | undefined>,

		/** Type: uint, 0 to 4,294,967,295 */
		portValue: FormControl<number | null | undefined>,
		protocol: FormControl<SocketAddressProtocol | null | undefined>,

		/** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with ``STRICT_DNS`` or ``LOGICAL_DNS`` will generate an error at runtime. */
		resolverName: FormControl<string | null | undefined>,
	}
	export function CreateSocketAddressFormGroup() {
		return new FormGroup<SocketAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			ipv4Compat: new FormControl<boolean | null | undefined>(undefined),
			namedPort: new FormControl<string | null | undefined>(undefined),
			portValue: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<SocketAddressProtocol | null | undefined>(undefined),
			resolverName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SocketAddressProtocol { TCP = 'TCP', UDP = 'UDP' }


	/** BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings. */
	export interface BuildVersion {

		/** Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file */
		metadata?: {[id: string]: any };

		/** Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored. */
		version?: SemanticVersion;
	}

	/** BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings. */
	export interface BuildVersionFormProperties {

		/** Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateBuildVersionFormGroup() {
		return new FormGroup<BuildVersionFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored. */
	export interface SemanticVersion {

		/** Type: uint, 0 to 4,294,967,295 */
		majorNumber?: number | null;

		/** Type: uint, 0 to 4,294,967,295 */
		minorNumber?: number | null;

		/** Type: uint, 0 to 4,294,967,295 */
		patch?: number | null;
	}

	/** Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored. */
	export interface SemanticVersionFormProperties {

		/** Type: uint, 0 to 4,294,967,295 */
		majorNumber: FormControl<number | null | undefined>,

		/** Type: uint, 0 to 4,294,967,295 */
		minorNumber: FormControl<number | null | undefined>,

		/** Type: uint, 0 to 4,294,967,295 */
		patch: FormControl<number | null | undefined>,
	}
	export function CreateSemanticVersionFormGroup() {
		return new FormGroup<SemanticVersionFormProperties>({
			majorNumber: new FormControl<number | null | undefined>(undefined),
			minorNumber: new FormControl<number | null | undefined>(undefined),
			patch: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** All xds configs for a particular client. */
	export interface ClientConfig {

		/** Represents generic xDS config and the exact config structure depends on the type URL (like Cluster if it is CDS) */
		genericXdsConfigs?: Array<GenericXdsConfig>;

		/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 13] */
		node?: Node;

		/** This field is deprecated in favor of generic_xds_configs which is much simpler and uniform in structure. */
		xdsConfig?: Array<PerXdsConfig>;
	}

	/** All xds configs for a particular client. */
	export interface ClientConfigFormProperties {
	}
	export function CreateClientConfigFormGroup() {
		return new FormGroup<ClientConfigFormProperties>({
		});

	}


	/** GenericXdsConfig is used to specify the config status and the dump of any xDS resource identified by their type URL. It is the generalized version of the now deprecated ListenersConfigDump, ClustersConfigDump etc [#next-free-field: 10] */
	export interface GenericXdsConfig {

		/** Per xDS resource status from the view of a xDS client */
		clientStatus?: GenericXdsConfigClientStatus | null;

		/** Per xDS resource config status. It is generated by management servers. It will not be present if the CSDS server is an xDS client. */
		configStatus?: GenericXdsConfigConfigStatus | null;
		errorState?: UpdateFailureState;

		/** Is static resource is true if it is specified in the config supplied through the file at the startup. */
		isStaticResource?: boolean | null;

		/** Timestamp when the xDS resource was last updated */
		lastUpdated?: string | null;

		/** Name of the xDS resource */
		name?: string | null;

		/** Type_url represents the fully qualified name of xDS resource type like envoy.v3.Cluster, envoy.v3.ClusterLoadAssignment etc. */
		typeUrl?: string | null;

		/** This is the :ref:`version_info ` in the last processed xDS discovery response. If there are only static bootstrap listeners, this field will be "" */
		versionInfo?: string | null;

		/** The xDS resource config. Actual content depends on the type */
		xdsConfig?: {[id: string]: any };
	}

	/** GenericXdsConfig is used to specify the config status and the dump of any xDS resource identified by their type URL. It is the generalized version of the now deprecated ListenersConfigDump, ClustersConfigDump etc [#next-free-field: 10] */
	export interface GenericXdsConfigFormProperties {

		/** Per xDS resource status from the view of a xDS client */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** Per xDS resource config status. It is generated by management servers. It will not be present if the CSDS server is an xDS client. */
		configStatus: FormControl<GenericXdsConfigConfigStatus | null | undefined>,

		/** Is static resource is true if it is specified in the config supplied through the file at the startup. */
		isStaticResource: FormControl<boolean | null | undefined>,

		/** Timestamp when the xDS resource was last updated */
		lastUpdated: FormControl<string | null | undefined>,

		/** Name of the xDS resource */
		name: FormControl<string | null | undefined>,

		/** Type_url represents the fully qualified name of xDS resource type like envoy.v3.Cluster, envoy.v3.ClusterLoadAssignment etc. */
		typeUrl: FormControl<string | null | undefined>,

		/** This is the :ref:`version_info ` in the last processed xDS discovery response. If there are only static bootstrap listeners, this field will be "" */
		versionInfo: FormControl<string | null | undefined>,

		/** The xDS resource config. Actual content depends on the type */
		xdsConfig: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGenericXdsConfigFormGroup() {
		return new FormGroup<GenericXdsConfigFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			configStatus: new FormControl<GenericXdsConfigConfigStatus | null | undefined>(undefined),
			isStaticResource: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeUrl: new FormControl<string | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
			xdsConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum GenericXdsConfigClientStatus { UNKNOWN = 'UNKNOWN', REQUESTED = 'REQUESTED', DOES_NOT_EXIST = 'DOES_NOT_EXIST', ACKED = 'ACKED', NACKED = 'NACKED' }

	export enum GenericXdsConfigConfigStatus { UNKNOWN = 'UNKNOWN', SYNCED = 'SYNCED', NOT_SENT = 'NOT_SENT', STALE = 'STALE', ERROR = 'ERROR' }

	export interface UpdateFailureState {

		/** Details about the last failed update attempt. */
		details?: string | null;

		/** What the component configuration would have been if the update had succeeded. This field may not be populated by xDS clients due to storage overhead. */
		failedConfiguration?: {[id: string]: any };

		/** Time of the latest failed update attempt. */
		lastUpdateAttempt?: string | null;

		/** This is the version of the rejected resource. [#not-implemented-hide:] */
		versionInfo?: string | null;
	}
	export interface UpdateFailureStateFormProperties {

		/** Details about the last failed update attempt. */
		details: FormControl<string | null | undefined>,

		/** What the component configuration would have been if the update had succeeded. This field may not be populated by xDS clients due to storage overhead. */
		failedConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/** Time of the latest failed update attempt. */
		lastUpdateAttempt: FormControl<string | null | undefined>,

		/** This is the version of the rejected resource. [#not-implemented-hide:] */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFailureStateFormGroup() {
		return new FormGroup<UpdateFailureStateFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			failedConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdateAttempt: new FormControl<string | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 13] */
	export interface Node {

		/** Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example ``com.acme.feature``. See :ref:`the list of features ` that xDS client may support. */
		clientFeatures?: Array<string>;

		/** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
		cluster?: string | null;

		/** Map from xDS resource type URL to dynamic context parameters. These may vary at runtime (unlike other fields in this message). For example, the xDS client may have a shard identifier that changes during the lifetime of the xDS client. In Envoy, this would be achieved by updating the dynamic context on the Server::Instance's LocalInfo context provider. The shard ID dynamic parameter then appears in this field during future discovery requests. */
		dynamicParameters?: {[id: string]: ContextParams };

		/** List of extensions and their versions supported by the node. */
		extensions?: Array<Extension>;

		/** An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`. */
		id?: string | null;

		/** Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress ``(0.0.0.0,80)``. The field is optional and just a hint. */
		listeningAddresses?: Array<Address>;

		/** Identifies location of where either Envoy runs or where upstream hosts run. */
		locality?: Locality;

		/** Opaque metadata extending the node identifier. Envoy will pass this directly to the management server. */
		metadata?: {[id: string]: any };

		/** BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings. */
		userAgentBuildVersion?: BuildVersion;

		/** Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc" */
		userAgentName?: string | null;

		/** Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild" */
		userAgentVersion?: string | null;
	}

	/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 13] */
	export interface NodeFormProperties {

		/** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
		cluster: FormControl<string | null | undefined>,

		/** Map from xDS resource type URL to dynamic context parameters. These may vary at runtime (unlike other fields in this message). For example, the xDS client may have a shard identifier that changes during the lifetime of the xDS client. In Envoy, this would be achieved by updating the dynamic context on the Server::Instance's LocalInfo context provider. The shard ID dynamic parameter then appears in this field during future discovery requests. */
		dynamicParameters: FormControl<{[id: string]: ContextParams } | null | undefined>,

		/** An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`. */
		id: FormControl<string | null | undefined>,

		/** Opaque metadata extending the node identifier. Envoy will pass this directly to the management server. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc" */
		userAgentName: FormControl<string | null | undefined>,

		/** Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild" */
		userAgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			dynamicParameters: new FormControl<{[id: string]: ContextParams } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			userAgentName: new FormControl<string | null | undefined>(undefined),
			userAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional parameters that can be used to select resource variants. These include any global context parameters, per-resource type client feature capabilities and per-resource type functional attributes. All per-resource type attributes will be `xds.resource.` prefixed and some of these are documented below: `xds.resource.listening_address`: The value is "IP:port" (e.g. "10.1.1.3:8080") which is the listening address of a Listener. Used in a Listener resource query. */
	export interface ContextParams {
		params?: {[id: string]: string };
	}

	/** Additional parameters that can be used to select resource variants. These include any global context parameters, per-resource type client feature capabilities and per-resource type functional attributes. All per-resource type attributes will be `xds.resource.` prefixed and some of these are documented below: `xds.resource.listening_address`: The value is "IP:port" (e.g. "10.1.1.3:8080") which is the listening address of a Listener. Used in a Listener resource query. */
	export interface ContextParamsFormProperties {
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateContextParamsFormGroup() {
		return new FormGroup<ContextParamsFormProperties>({
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Version and identification for an Envoy extension. [#next-free-field: 7] */
	export interface Extension {

		/** Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment: */
		category?: string | null;

		/** Indicates that the extension is present but was disabled via dynamic configuration. */
		disabled?: boolean | null;

		/** This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. */
		name?: string | null;

		/** [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: */
		typeDescriptor?: string | null;

		/** Type URLs of extension configuration protos. */
		typeUrls?: Array<string>;

		/** BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings. */
		version?: BuildVersion;
	}

	/** Version and identification for an Envoy extension. [#next-free-field: 7] */
	export interface ExtensionFormProperties {

		/** Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment: */
		category: FormControl<string | null | undefined>,

		/** Indicates that the extension is present but was disabled via dynamic configuration. */
		disabled: FormControl<boolean | null | undefined>,

		/** This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. */
		name: FormControl<string | null | undefined>,

		/** [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: */
		typeDescriptor: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeDescriptor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies location of where either Envoy runs or where upstream hosts run. */
	export interface Locality {

		/** Region this :ref:`zone ` belongs to. */
		region?: string | null;

		/** When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently. */
		subZone?: string | null;

		/** Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc. */
		zone?: string | null;
	}

	/** Identifies location of where either Envoy runs or where upstream hosts run. */
	export interface LocalityFormProperties {

		/** Region this :ref:`zone ` belongs to. */
		region: FormControl<string | null | undefined>,

		/** When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently. */
		subZone: FormControl<string | null | undefined>,

		/** Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateLocalityFormGroup() {
		return new FormGroup<LocalityFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
			subZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed config (per xDS) with status. [#next-free-field: 8] */
	export interface PerXdsConfig {

		/** Client config status is populated by xDS clients. Will not be present if the CSDS server is an xDS server. No matter what the client config status is, xDS clients should always dump the most recent accepted xDS config. .. attention:: This field is deprecated. Use :ref:`ClientResourceStatus ` for per-resource config status instead. */
		clientStatus?: PerXdsConfigClientStatus | null;

		/** Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response. */
		clusterConfig?: ClustersConfigDump;

		/** Envoy's admin fill this message with all currently known endpoints. Endpoint configuration information can be used to recreate an Envoy configuration by populating all endpoints as static endpoints or by returning them in an EDS response. */
		endpointConfig?: EndpointsConfigDump;

		/** Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response. */
		listenerConfig?: ListenersConfigDump;

		/** Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses. */
		routeConfig?: RoutesConfigDump;

		/** Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API. */
		scopedRouteConfig?: ScopedRoutesConfigDump;

		/** Config status generated by management servers. Will not be present if the CSDS server is an xDS client. */
		status?: GenericXdsConfigConfigStatus | null;
	}

	/** Detailed config (per xDS) with status. [#next-free-field: 8] */
	export interface PerXdsConfigFormProperties {

		/** Client config status is populated by xDS clients. Will not be present if the CSDS server is an xDS server. No matter what the client config status is, xDS clients should always dump the most recent accepted xDS config. .. attention:: This field is deprecated. Use :ref:`ClientResourceStatus ` for per-resource config status instead. */
		clientStatus: FormControl<PerXdsConfigClientStatus | null | undefined>,

		/** Config status generated by management servers. Will not be present if the CSDS server is an xDS client. */
		status: FormControl<GenericXdsConfigConfigStatus | null | undefined>,
	}
	export function CreatePerXdsConfigFormGroup() {
		return new FormGroup<PerXdsConfigFormProperties>({
			clientStatus: new FormControl<PerXdsConfigClientStatus | null | undefined>(undefined),
			status: new FormControl<GenericXdsConfigConfigStatus | null | undefined>(undefined),
		});

	}

	export enum PerXdsConfigClientStatus { CLIENT_UNKNOWN = 'CLIENT_UNKNOWN', CLIENT_REQUESTED = 'CLIENT_REQUESTED', CLIENT_ACKED = 'CLIENT_ACKED', CLIENT_NACKED = 'CLIENT_NACKED' }


	/** Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response. */
	export interface ClustersConfigDump {

		/** The dynamically loaded active clusters. These are clusters that are available to service data plane traffic. */
		dynamicActiveClusters?: Array<DynamicCluster>;

		/** The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded. */
		dynamicWarmingClusters?: Array<DynamicCluster>;

		/** The statically loaded cluster configs. */
		staticClusters?: Array<StaticCluster>;

		/** This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "". */
		versionInfo?: string | null;
	}

	/** Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response. */
	export interface ClustersConfigDumpFormProperties {

		/** This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "". */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateClustersConfigDumpFormGroup() {
		return new FormGroup<ClustersConfigDumpFormProperties>({
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a dynamically loaded cluster via the CDS API. [#next-free-field: 6] */
	export interface DynamicCluster {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus?: GenericXdsConfigClientStatus | null;

		/** The cluster config. */
		cluster?: {[id: string]: any };
		errorState?: UpdateFailureState;

		/** The timestamp when the Cluster was last updated. */
		lastUpdated?: string | null;

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
		versionInfo?: string | null;
	}

	/** Describes a dynamically loaded cluster via the CDS API. [#next-free-field: 6] */
	export interface DynamicClusterFormProperties {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** The cluster config. */
		cluster: FormControl<{[id: string]: any } | null | undefined>,

		/** The timestamp when the Cluster was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicClusterFormGroup() {
		return new FormGroup<DynamicClusterFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			cluster: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a statically loaded cluster. */
	export interface StaticCluster {

		/** The cluster config. */
		cluster?: {[id: string]: any };

		/** The timestamp when the Cluster was last updated. */
		lastUpdated?: string | null;
	}

	/** Describes a statically loaded cluster. */
	export interface StaticClusterFormProperties {

		/** The cluster config. */
		cluster: FormControl<{[id: string]: any } | null | undefined>,

		/** The timestamp when the Cluster was last updated. */
		lastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateStaticClusterFormGroup() {
		return new FormGroup<StaticClusterFormProperties>({
			cluster: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Envoy's admin fill this message with all currently known endpoints. Endpoint configuration information can be used to recreate an Envoy configuration by populating all endpoints as static endpoints or by returning them in an EDS response. */
	export interface EndpointsConfigDump {

		/** The dynamically loaded endpoint configs. */
		dynamicEndpointConfigs?: Array<DynamicEndpointConfig>;

		/** The statically loaded endpoint configs. */
		staticEndpointConfigs?: Array<StaticEndpointConfig>;
	}

	/** Envoy's admin fill this message with all currently known endpoints. Endpoint configuration information can be used to recreate an Envoy configuration by populating all endpoints as static endpoints or by returning them in an EDS response. */
	export interface EndpointsConfigDumpFormProperties {
	}
	export function CreateEndpointsConfigDumpFormGroup() {
		return new FormGroup<EndpointsConfigDumpFormProperties>({
		});

	}


	/** [#next-free-field: 6] */
	export interface DynamicEndpointConfig {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus?: GenericXdsConfigClientStatus | null;

		/** The endpoint config. */
		endpointConfig?: {[id: string]: any };
		errorState?: UpdateFailureState;

		/** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
		lastUpdated?: string | null;

		/** [#not-implemented-hide:] This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the endpoint configuration was loaded. */
		versionInfo?: string | null;
	}

	/** [#next-free-field: 6] */
	export interface DynamicEndpointConfigFormProperties {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** The endpoint config. */
		endpointConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** [#not-implemented-hide:] This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the endpoint configuration was loaded. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicEndpointConfigFormGroup() {
		return new FormGroup<DynamicEndpointConfigFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			endpointConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StaticEndpointConfig {

		/** The endpoint config. */
		endpointConfig?: {[id: string]: any };

		/** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
		lastUpdated?: string | null;
	}
	export interface StaticEndpointConfigFormProperties {

		/** The endpoint config. */
		endpointConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** [#not-implemented-hide:] The timestamp when the Endpoint was last updated. */
		lastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateStaticEndpointConfigFormGroup() {
		return new FormGroup<StaticEndpointConfigFormProperties>({
			endpointConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response. */
	export interface ListenersConfigDump {

		/** State for any warming, active, or draining listeners. */
		dynamicListeners?: Array<DynamicListener>;

		/** The statically loaded listener configs. */
		staticListeners?: Array<StaticListener>;

		/** This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "". */
		versionInfo?: string | null;
	}

	/** Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response. */
	export interface ListenersConfigDumpFormProperties {

		/** This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "". */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateListenersConfigDumpFormGroup() {
		return new FormGroup<ListenersConfigDumpFormProperties>({
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a dynamically loaded listener via the LDS API. [#next-free-field: 7] */
	export interface DynamicListener {
		activeState?: DynamicListenerState;

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus?: GenericXdsConfigClientStatus | null;
		drainingState?: DynamicListenerState;
		errorState?: UpdateFailureState;

		/** The name or unique id of this listener, pulled from the DynamicListenerState config. */
		name?: string | null;
		warmingState?: DynamicListenerState;
	}

	/** Describes a dynamically loaded listener via the LDS API. [#next-free-field: 7] */
	export interface DynamicListenerFormProperties {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** The name or unique id of this listener, pulled from the DynamicListenerState config. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDynamicListenerFormGroup() {
		return new FormGroup<DynamicListenerFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DynamicListenerState {

		/** The timestamp when the Listener was last successfully updated. */
		lastUpdated?: string | null;

		/** The listener config. */
		listener?: {[id: string]: any };

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API. */
		versionInfo?: string | null;
	}
	export interface DynamicListenerStateFormProperties {

		/** The timestamp when the Listener was last successfully updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The listener config. */
		listener: FormControl<{[id: string]: any } | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicListenerStateFormGroup() {
		return new FormGroup<DynamicListenerStateFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			listener: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a statically loaded listener. */
	export interface StaticListener {

		/** The timestamp when the Listener was last successfully updated. */
		lastUpdated?: string | null;

		/** The listener config. */
		listener?: {[id: string]: any };
	}

	/** Describes a statically loaded listener. */
	export interface StaticListenerFormProperties {

		/** The timestamp when the Listener was last successfully updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The listener config. */
		listener: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateStaticListenerFormGroup() {
		return new FormGroup<StaticListenerFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			listener: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses. */
	export interface RoutesConfigDump {

		/** The dynamically loaded route configs. */
		dynamicRouteConfigs?: Array<DynamicRouteConfig>;

		/** The statically loaded route configs. */
		staticRouteConfigs?: Array<StaticRouteConfig>;
	}

	/** Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses. */
	export interface RoutesConfigDumpFormProperties {
	}
	export function CreateRoutesConfigDumpFormGroup() {
		return new FormGroup<RoutesConfigDumpFormProperties>({
		});

	}


	/** [#next-free-field: 6] */
	export interface DynamicRouteConfig {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus?: GenericXdsConfigClientStatus | null;
		errorState?: UpdateFailureState;

		/** The timestamp when the Route was last updated. */
		lastUpdated?: string | null;

		/** The route config. */
		routeConfig?: {[id: string]: any };

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
		versionInfo?: string | null;
	}

	/** [#next-free-field: 6] */
	export interface DynamicRouteConfigFormProperties {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** The timestamp when the Route was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The route config. */
		routeConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicRouteConfigFormGroup() {
		return new FormGroup<DynamicRouteConfigFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			routeConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StaticRouteConfig {

		/** The timestamp when the Route was last updated. */
		lastUpdated?: string | null;

		/** The route config. */
		routeConfig?: {[id: string]: any };
	}
	export interface StaticRouteConfigFormProperties {

		/** The timestamp when the Route was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The route config. */
		routeConfig: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateStaticRouteConfigFormGroup() {
		return new FormGroup<StaticRouteConfigFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			routeConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API. */
	export interface ScopedRoutesConfigDump {

		/** The dynamically loaded scoped route configs. */
		dynamicScopedRouteConfigs?: Array<DynamicScopedRouteConfigs>;

		/** The statically loaded scoped route configs. */
		inlineScopedRouteConfigs?: Array<InlineScopedRouteConfigs>;
	}

	/** Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API. */
	export interface ScopedRoutesConfigDumpFormProperties {
	}
	export function CreateScopedRoutesConfigDumpFormGroup() {
		return new FormGroup<ScopedRoutesConfigDumpFormProperties>({
		});

	}


	/** [#next-free-field: 7] */
	export interface DynamicScopedRouteConfigs {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus?: GenericXdsConfigClientStatus | null;
		errorState?: UpdateFailureState;

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated?: string | null;

		/** The name assigned to the scoped route configurations. */
		name?: string | null;

		/** The scoped route configurations. */
		scopedRouteConfigs?: Array<string>;

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
		versionInfo?: string | null;
	}

	/** [#next-free-field: 7] */
	export interface DynamicScopedRouteConfigsFormProperties {

		/** The client status of this resource. [#not-implemented-hide:] */
		clientStatus: FormControl<GenericXdsConfigClientStatus | null | undefined>,

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The name assigned to the scoped route configurations. */
		name: FormControl<string | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicScopedRouteConfigsFormGroup() {
		return new FormGroup<DynamicScopedRouteConfigsFormProperties>({
			clientStatus: new FormControl<GenericXdsConfigClientStatus | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			versionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InlineScopedRouteConfigs {

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated?: string | null;

		/** The name assigned to the scoped route configurations. */
		name?: string | null;

		/** The scoped route configurations. */
		scopedRouteConfigs?: Array<string>;
	}
	export interface InlineScopedRouteConfigsFormProperties {

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The name assigned to the scoped route configurations. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInlineScopedRouteConfigsFormGroup() {
		return new FormGroup<InlineScopedRouteConfigsFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for client status of clients identified by a list of NodeMatchers. */
	export interface ClientStatusRequest {

		/** If true, the server will not include the resource contents in the response (i.e., the generic_xds_configs.xds_config field will not be populated). [#not-implemented-hide:] */
		excludeResourceContents?: boolean | null;

		/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 13] */
		node?: Node;

		/** Management server can use these match criteria to identify clients. The match follows OR semantics. */
		nodeMatchers?: Array<NodeMatcher>;
	}

	/** Request for client status of clients identified by a list of NodeMatchers. */
	export interface ClientStatusRequestFormProperties {

		/** If true, the server will not include the resource contents in the response (i.e., the generic_xds_configs.xds_config field will not be populated). [#not-implemented-hide:] */
		excludeResourceContents: FormControl<boolean | null | undefined>,
	}
	export function CreateClientStatusRequestFormGroup() {
		return new FormGroup<ClientStatusRequestFormProperties>({
			excludeResourceContents: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the way to match a Node. The match follows AND semantics. */
	export interface NodeMatcher {

		/** Specifies the way to match a string. [#next-free-field: 8] */
		nodeId?: StringMatcher;

		/** Specifies match criteria on the node metadata. */
		nodeMetadatas?: Array<StructMatcher>;
	}

	/** Specifies the way to match a Node. The match follows AND semantics. */
	export interface NodeMatcherFormProperties {
	}
	export function CreateNodeMatcherFormGroup() {
		return new FormGroup<NodeMatcherFormProperties>({
		});

	}


	/** Specifies the way to match a string. [#next-free-field: 8] */
	export interface StringMatcher {

		/** The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc.def`` */
		contains?: string | null;

		/** The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``. */
		exact?: string | null;

		/** If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if set to true. */
		ignoreCase?: boolean | null;

		/** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``abc.xyz`` */
		prefix?: string | null;

		/** A regex matcher designed for safety when used with untrusted input. */
		safeRegex?: RegexMatcher;

		/** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc`` */
		suffix?: string | null;
	}

	/** Specifies the way to match a string. [#next-free-field: 8] */
	export interface StringMatcherFormProperties {

		/** The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc.def`` */
		contains: FormControl<string | null | undefined>,

		/** The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``. */
		exact: FormControl<string | null | undefined>,

		/** If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if set to true. */
		ignoreCase: FormControl<boolean | null | undefined>,

		/** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``abc.xyz`` */
		prefix: FormControl<string | null | undefined>,

		/** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc`` */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateStringMatcherFormGroup() {
		return new FormGroup<StringMatcherFormProperties>({
			contains: new FormControl<string | null | undefined>(undefined),
			exact: new FormControl<string | null | undefined>(undefined),
			ignoreCase: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A regex matcher designed for safety when used with untrusted input. */
	export interface RegexMatcher {

		/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``, which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented each time the program size exceeds the warn level threshold. */
		googleRe2?: GoogleRE2;

		/** The regex match string. The string must be supported by the configured engine. The regex is matched against the full string, not as a partial match. */
		regex?: string | null;
	}

	/** A regex matcher designed for safety when used with untrusted input. */
	export interface RegexMatcherFormProperties {

		/** The regex match string. The string must be supported by the configured engine. The regex is matched against the full string, not as a partial match. */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatcherFormGroup() {
		return new FormGroup<RegexMatcherFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``, which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented each time the program size exceeds the warn level threshold. */
	export interface GoogleRE2 {

		/**
		 * This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. .. note:: Although this field is deprecated, the program size will still be checked against the global ``re2.max_program_size.error_level`` runtime value.
		 * Type: uint, 0 to 4,294,967,295
		 */
		maxProgramSize?: number | null;
	}

	/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``, which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented each time the program size exceeds the warn level threshold. */
	export interface GoogleRE2FormProperties {

		/**
		 * This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. .. note:: Although this field is deprecated, the program size will still be checked against the global ``re2.max_program_size.error_level`` runtime value.
		 * Type: uint, 0 to 4,294,967,295
		 */
		maxProgramSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleRE2FormGroup() {
		return new FormGroup<GoogleRE2FormProperties>({
			maxProgramSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses ``path`` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node. */
	export interface StructMatcher {

		/** The path to retrieve the Value from the Struct. */
		path?: Array<PathSegment>;

		/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8] */
		value?: ValueMatcher;
	}

	/** StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses ``path`` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node. */
	export interface StructMatcherFormProperties {
	}
	export function CreateStructMatcherFormGroup() {
		return new FormGroup<StructMatcherFormProperties>({
		});

	}


	/** Specifies the segment in a path to retrieve value from Struct. */
	export interface PathSegment {

		/** If specified, use the key to retrieve the value in a Struct. */
		key?: string | null;
	}

	/** Specifies the segment in a path to retrieve value from Struct. */
	export interface PathSegmentFormProperties {

		/** If specified, use the key to retrieve the value in a Struct. */
		key: FormControl<string | null | undefined>,
	}
	export function CreatePathSegmentFormGroup() {
		return new FormGroup<PathSegmentFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8] */
	export interface ValueMatcher {

		/** If specified, a match occurs if and only if the target value is a bool value and is equal to this field. */
		boolMatch?: boolean | null;

		/** Specifies the way to match a double value. */
		doubleMatch?: DoubleMatcher;

		/** Specifies the way to match a list value. */
		listMatch?: ListMatcher;

		/** NullMatch is an empty message to specify a null value. */
		nullMatch?: NullMatch;

		/** Specifies a list of alternatives for the match. */
		orMatch?: OrMatcher;

		/** If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. */
		presentMatch?: boolean | null;

		/** Specifies the way to match a string. [#next-free-field: 8] */
		stringMatch?: StringMatcher;
	}

	/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8] */
	export interface ValueMatcherFormProperties {

		/** If specified, a match occurs if and only if the target value is a bool value and is equal to this field. */
		boolMatch: FormControl<boolean | null | undefined>,

		/** If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. */
		presentMatch: FormControl<boolean | null | undefined>,
	}
	export function CreateValueMatcherFormGroup() {
		return new FormGroup<ValueMatcherFormProperties>({
			boolMatch: new FormControl<boolean | null | undefined>(undefined),
			presentMatch: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the way to match a double value. */
	export interface DoubleMatcher {

		/**
		 * If specified, the input double value must be equal to the value specified here.
		 * Type: double
		 */
		exact?: number | null;

		/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
		range?: DoubleRange;
	}

	/** Specifies the way to match a double value. */
	export interface DoubleMatcherFormProperties {

		/**
		 * If specified, the input double value must be equal to the value specified here.
		 * Type: double
		 */
		exact: FormControl<number | null | undefined>,
	}
	export function CreateDoubleMatcherFormGroup() {
		return new FormGroup<DoubleMatcherFormProperties>({
			exact: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
	export interface DoubleRange {

		/**
		 * end of the range (exclusive)
		 * Type: double
		 */
		end?: number | null;

		/**
		 * start of the range (inclusive)
		 * Type: double
		 */
		start?: number | null;
	}

	/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
	export interface DoubleRangeFormProperties {

		/**
		 * end of the range (exclusive)
		 * Type: double
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * start of the range (inclusive)
		 * Type: double
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateDoubleRangeFormGroup() {
		return new FormGroup<DoubleRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the way to match a list value. */
	export interface ListMatcher {

		/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8] */
		oneOf?: ValueMatcher;
	}

	/** Specifies the way to match a list value. */
	export interface ListMatcherFormProperties {
	}
	export function CreateListMatcherFormGroup() {
		return new FormGroup<ListMatcherFormProperties>({
		});

	}


	/** NullMatch is an empty message to specify a null value. */
	export interface NullMatch {
	}

	/** NullMatch is an empty message to specify a null value. */
	export interface NullMatchFormProperties {
	}
	export function CreateNullMatchFormGroup() {
		return new FormGroup<NullMatchFormProperties>({
		});

	}


	/** Specifies a list of alternatives for the match. */
	export interface OrMatcher {
		valueMatchers?: Array<ValueMatcher>;
	}

	/** Specifies a list of alternatives for the match. */
	export interface OrMatcherFormProperties {
	}
	export function CreateOrMatcherFormGroup() {
		return new FormGroup<OrMatcherFormProperties>({
		});

	}

	export interface ClientStatusResponse {

		/** Client configs for the clients specified in the ClientStatusRequest. */
		config?: Array<ClientConfig>;
	}
	export interface ClientStatusResponseFormProperties {
	}
	export function CreateClientStatusResponseFormGroup() {
		return new FormGroup<ClientStatusResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post v3/discovery:client_status
		 * @return {ClientStatusResponse} Successful response
		 */
		Trafficdirector_discovery_client_status(requestBody: ClientStatusRequest): Observable<ClientStatusResponse> {
			return this.http.post<ClientStatusResponse>(this.baseUri + 'v3/discovery:client_status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

