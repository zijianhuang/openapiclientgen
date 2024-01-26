import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers. */
	export interface Address {
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

	export interface Pipe {

		/** The mode for the Pipe. Not applicable for abstract sockets. */
		mode?: number | null;

		/** Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux. */
		path?: string | null;
	}
	export interface PipeFormProperties {

		/** The mode for the Pipe. Not applicable for abstract sockets. */
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

		/** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized via :ref:`resolver_name `. */
		address?: string | null;

		/** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
		ipv4Compat?: boolean | null;

		/** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
		namedPort?: string | null;
		portValue?: number | null;
		protocol?: SocketAddressProtocol | null;

		/** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime. */
		resolverName?: string | null;
	}

	/** [#next-free-field: 7] */
	export interface SocketAddressFormProperties {

		/** The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized via :ref:`resolver_name `. */
		address: FormControl<string | null | undefined>,

		/** When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``. */
		ipv4Compat: FormControl<boolean | null | undefined>,

		/** This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution. */
		namedPort: FormControl<string | null | undefined>,
		portValue: FormControl<number | null | undefined>,
		protocol: FormControl<SocketAddressProtocol | null | undefined>,

		/** The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime. */
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

	export enum SocketAddressProtocol { TCP = 0, UDP = 1 }


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
		majorNumber?: number | null;
		minorNumber?: number | null;
		patch?: number | null;
	}

	/** Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored. */
	export interface SemanticVersionFormProperties {
		majorNumber: FormControl<number | null | undefined>,
		minorNumber: FormControl<number | null | undefined>,
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

		/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12] */
		node?: Node;
		xdsConfig?: Array<PerXdsConfig>;
	}

	/** All xds configs for a particular client. */
	export interface ClientConfigFormProperties {
	}
	export function CreateClientConfigFormGroup() {
		return new FormGroup<ClientConfigFormProperties>({
		});

	}


	/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12] */
	export interface Node {

		/** This is motivated by informing a management server during canary which version of Envoy is being tested in a heterogeneous fleet. This will be set by Envoy in management server RPCs. This field is deprecated in favor of the user_agent_name and user_agent_version values. */
		buildVersion?: string | null;

		/** Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example `com.acme.feature`. See :ref:`the list of features ` that xDS client may support. */
		clientFeatures?: Array<string>;

		/** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
		cluster?: string | null;

		/** List of extensions and their versions supported by the node. */
		extensions?: Array<Extension>;

		/** An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`. */
		id?: string | null;

		/** Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress `(0.0.0.0,80)`. The field is optional and just a hint. */
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

	/** Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12] */
	export interface NodeFormProperties {

		/** This is motivated by informing a management server during canary which version of Envoy is being tested in a heterogeneous fleet. This will be set by Envoy in management server RPCs. This field is deprecated in favor of the user_agent_name and user_agent_version values. */
		buildVersion: FormControl<string | null | undefined>,

		/** Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`. */
		cluster: FormControl<string | null | undefined>,

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
			buildVersion: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			userAgentName: new FormControl<string | null | undefined>(undefined),
			userAgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version and identification for an Envoy extension. [#next-free-field: 6] */
	export interface Extension {

		/** Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment: */
		category?: string | null;

		/** Indicates that the extension is present but was disabled via dynamic configuration. */
		disabled?: boolean | null;

		/** This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget. */
		name?: string | null;

		/** [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment: */
		typeDescriptor?: string | null;

		/** BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings. */
		version?: BuildVersion;
	}

	/** Version and identification for an Envoy extension. [#next-free-field: 6] */
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


	/** Detailed config (per xDS) with status. [#next-free-field: 6] */
	export interface PerXdsConfig {

		/** Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response. */
		clusterConfig?: ClustersConfigDump;

		/** Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response. */
		listenerConfig?: ListenersConfigDump;

		/** Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses. */
		routeConfig?: RoutesConfigDump;

		/** Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API. */
		scopedRouteConfig?: ScopedRoutesConfigDump;
		status?: PerXdsConfigStatus | null;
	}

	/** Detailed config (per xDS) with status. [#next-free-field: 6] */
	export interface PerXdsConfigFormProperties {
		status: FormControl<PerXdsConfigStatus | null | undefined>,
	}
	export function CreatePerXdsConfigFormGroup() {
		return new FormGroup<PerXdsConfigFormProperties>({
			status: new FormControl<PerXdsConfigStatus | null | undefined>(undefined),
		});

	}


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


	/** Describes a dynamically loaded cluster via the CDS API. */
	export interface DynamicCluster {

		/** The cluster config. */
		cluster?: {[id: string]: any };

		/** The timestamp when the Cluster was last updated. */
		lastUpdated?: string | null;

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
		versionInfo?: string | null;
	}

	/** Describes a dynamically loaded cluster via the CDS API. */
	export interface DynamicClusterFormProperties {

		/** The cluster config. */
		cluster: FormControl<{[id: string]: any } | null | undefined>,

		/** The timestamp when the Cluster was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicClusterFormGroup() {
		return new FormGroup<DynamicClusterFormProperties>({
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


	/** Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6] */
	export interface DynamicListener {
		activeState?: DynamicListenerState;
		drainingState?: DynamicListenerState;
		errorState?: UpdateFailureState;

		/** The name or unique id of this listener, pulled from the DynamicListenerState config. */
		name?: string | null;
		warmingState?: DynamicListenerState;
	}

	/** Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6] */
	export interface DynamicListenerFormProperties {

		/** The name or unique id of this listener, pulled from the DynamicListenerState config. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDynamicListenerFormGroup() {
		return new FormGroup<DynamicListenerFormProperties>({
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

	export interface UpdateFailureState {

		/** Details about the last failed update attempt. */
		details?: string | null;

		/** What the component configuration would have been if the update had succeeded. */
		failedConfiguration?: {[id: string]: any };

		/** Time of the latest failed update attempt. */
		lastUpdateAttempt?: string | null;
	}
	export interface UpdateFailureStateFormProperties {

		/** Details about the last failed update attempt. */
		details: FormControl<string | null | undefined>,

		/** What the component configuration would have been if the update had succeeded. */
		failedConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/** Time of the latest failed update attempt. */
		lastUpdateAttempt: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFailureStateFormGroup() {
		return new FormGroup<UpdateFailureStateFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			failedConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			lastUpdateAttempt: new FormControl<string | null | undefined>(undefined),
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

	export interface DynamicRouteConfig {

		/** The timestamp when the Route was last updated. */
		lastUpdated?: string | null;

		/** The route config. */
		routeConfig?: {[id: string]: any };

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
		versionInfo?: string | null;
	}
	export interface DynamicRouteConfigFormProperties {

		/** The timestamp when the Route was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The route config. */
		routeConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicRouteConfigFormGroup() {
		return new FormGroup<DynamicRouteConfigFormProperties>({
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

	export interface DynamicScopedRouteConfigs {

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated?: string | null;

		/** The name assigned to the scoped route configurations. */
		name?: string | null;

		/** The scoped route configurations. */
		scopedRouteConfigs?: Array<string>;

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
		versionInfo?: string | null;
	}
	export interface DynamicScopedRouteConfigsFormProperties {

		/** The timestamp when the scoped route config set was last updated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The name assigned to the scoped route configurations. */
		name: FormControl<string | null | undefined>,

		/** This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded. */
		versionInfo: FormControl<string | null | undefined>,
	}
	export function CreateDynamicScopedRouteConfigsFormGroup() {
		return new FormGroup<DynamicScopedRouteConfigsFormProperties>({
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

	export enum PerXdsConfigStatus { UNKNOWN = 0, SYNCED = 1, NOT_SENT = 2, STALE = 3, ERROR = 4 }


	/** Request for client status of clients identified by a list of NodeMatchers. */
	export interface ClientStatusRequest {

		/** Management server can use these match criteria to identify clients. The match follows OR semantics. */
		nodeMatchers?: Array<NodeMatcher>;
	}

	/** Request for client status of clients identified by a list of NodeMatchers. */
	export interface ClientStatusRequestFormProperties {
	}
	export function CreateClientStatusRequestFormGroup() {
		return new FormGroup<ClientStatusRequestFormProperties>({
		});

	}


	/** Specifies the way to match a Node. The match follows AND semantics. */
	export interface NodeMatcher {

		/** Specifies the way to match a string. [#next-free-field: 7] */
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


	/** Specifies the way to match a string. [#next-free-field: 7] */
	export interface StringMatcher {

		/** The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*. */
		exact?: string | null;

		/** If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true. */
		ignoreCase?: boolean | null;

		/** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz* */
		prefix?: string | null;

		/** The input string must match the regular expression specified here. The regex grammar is defined `here `_. Examples: * The regex ``\d{3}`` matches the value *123* * The regex ``\d{3}`` does not match the value *1234* * The regex ``\d{3}`` does not match the value *123.456* .. attention:: This field has been deprecated in favor of `safe_regex` as it is not safe for use with untrusted input in all cases. */
		regex?: string | null;

		/** A regex matcher designed for safety when used with untrusted input. */
		safeRegex?: RegexMatcher;

		/** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc* */
		suffix?: string | null;
	}

	/** Specifies the way to match a string. [#next-free-field: 7] */
	export interface StringMatcherFormProperties {

		/** The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*. */
		exact: FormControl<string | null | undefined>,

		/** If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true. */
		ignoreCase: FormControl<boolean | null | undefined>,

		/** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz* */
		prefix: FormControl<string | null | undefined>,

		/** The input string must match the regular expression specified here. The regex grammar is defined `here `_. Examples: * The regex ``\d{3}`` matches the value *123* * The regex ``\d{3}`` does not match the value *1234* * The regex ``\d{3}`` does not match the value *123.456* .. attention:: This field has been deprecated in favor of `safe_regex` as it is not safe for use with untrusted input in all cases. */
		regex: FormControl<string | null | undefined>,

		/** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc* */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateStringMatcherFormGroup() {
		return new FormGroup<StringMatcherFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			ignoreCase: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A regex matcher designed for safety when used with untrusted input. */
	export interface RegexMatcher {

		/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold. */
		googleRe2?: GoogleRE2;

		/** The regex match string. The string must be supported by the configured engine. */
		regex?: string | null;
	}

	/** A regex matcher designed for safety when used with untrusted input. */
	export interface RegexMatcherFormProperties {

		/** The regex match string. The string must be supported by the configured engine. */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatcherFormGroup() {
		return new FormGroup<RegexMatcherFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold. */
	export interface GoogleRE2 {

		/** This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. */
		maxProgramSize?: number | null;
	}

	/** Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold. */
	export interface GoogleRE2FormProperties {

		/** This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. */
		maxProgramSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleRE2FormGroup() {
		return new FormGroup<GoogleRE2FormProperties>({
			maxProgramSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node. */
	export interface StructMatcher {

		/** The path to retrieve the Value from the Struct. */
		path?: Array<PathSegment>;

		/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7] */
		value?: ValueMatcher;
	}

	/** StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node. */
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


	/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7] */
	export interface ValueMatcher {

		/** If specified, a match occurs if and only if the target value is a bool value and is equal to this field. */
		boolMatch?: boolean | null;

		/** Specifies the way to match a double value. */
		doubleMatch?: DoubleMatcher;

		/** Specifies the way to match a list value. */
		listMatch?: ListMatcher;

		/** NullMatch is an empty message to specify a null value. */
		nullMatch?: NullMatch;

		/** If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. */
		presentMatch?: boolean | null;

		/** Specifies the way to match a string. [#next-free-field: 7] */
		stringMatch?: StringMatcher;
	}

	/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7] */
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

		/** If specified, the input double value must be equal to the value specified here. */
		exact?: number | null;

		/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
		range?: DoubleRange;
	}

	/** Specifies the way to match a double value. */
	export interface DoubleMatcherFormProperties {

		/** If specified, the input double value must be equal to the value specified here. */
		exact: FormControl<number | null | undefined>,
	}
	export function CreateDoubleMatcherFormGroup() {
		return new FormGroup<DoubleMatcherFormProperties>({
			exact: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
	export interface DoubleRange {

		/** end of the range (exclusive) */
		end?: number | null;

		/** start of the range (inclusive) */
		start?: number | null;
	}

	/** Specifies the double start and end of the range using half-open interval semantics [start, end). */
	export interface DoubleRangeFormProperties {

		/** end of the range (exclusive) */
		end: FormControl<number | null | undefined>,

		/** start of the range (inclusive) */
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

		/** Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7] */
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
		 * Post v2/discovery:client_status
		 * @return {ClientStatusResponse} Successful response
		 */
		Trafficdirector_discovery_client_status(requestBody: ClientStatusRequest): Observable<ClientStatusResponse> {
			return this.http.post<ClientStatusResponse>(this.baseUri + 'v2/discovery:client_status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

