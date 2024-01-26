import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** 'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.' */
	export enum Action { DROP = 0, FORWARD_DECAPSULATED = 1, FORWARD_AS_IS = 2, PASSTHROUGH = 3, DUPLICATED_DECAPSULATED = 4, DUPLICATE_AS_IS = 5 }

	export interface AppD {

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1.
		 * Required
		 */
		appDId: string;

		/**
		 * Describes DNS rules the MEC application requires.
		 * Minimum items: 0
		 */
		appDNSRule?: Array<DNSRuleDescriptor>;

		/**
		 * Identifies the version of the application descriptor.
		 * Required
		 */
		appDVersion: string;

		/**
		 * Human readable description of the MEC application.
		 * Required
		 */
		appDescription: string;

		/**
		 * Describes external interface(s) exposed by this MEC application.
		 * Minimum items: 0
		 */
		appExtCpd?: Array<AppExternalCpd>;

		/**
		 * Describes features a MEC application may use if available.
		 * Minimum items: 0
		 */
		appFeatureOptional?: Array<FeatureDependency>;

		/**
		 * Describes features a MEC application requires to run.
		 * Minimum items: 0
		 */
		appFeatureRequired?: Array<FeatureDependency>;

		/** Human readable name for the MEC application. */
		appInfoName?: string | null;
		appLatency?: LatencyDescriptor;

		/**
		 * Name to identify the MEC application.
		 * Required
		 */
		appName: string;

		/**
		 * Provider of the application and of the AppD.
		 * Required
		 */
		appProvider: string;

		/**
		 * Describes services a MEC application may use if available.
		 * Minimum items: 0
		 */
		appServiceOptional?: Array<ServiceDependency>;

		/**
		 * Describes services a MEC application is able to produce to the platform or other MEC applications. Only relevant for service-producing apps.
		 * Minimum items: 0
		 */
		appServiceProduced?: Array<ServiceDescriptor>;

		/**
		 * Describes services a MEC application requires to run.
		 * Minimum items: 0
		 */
		appServiceRequired?: Array<ServiceDependency>;

		/**
		 * Identifies the version of software of the MEC application.
		 * Required
		 */
		appSoftVersion: string;

		/**
		 * Describes traffic rules the MEC application requires.
		 * Minimum items: 0
		 */
		appTrafficRule?: Array<TrafficRuleDescriptor>;

		/** NFV */
		changeAppInstanceStateOpConfig?: string | null;

		/**
		 * Identifies version(s) of MEC system compatible with the MEC application described in this version of the AppD.
		 * Required
		 * Minimum items: 1
		 */
		mecVersion: Array<string>;

		/**
		 * Ref NFV
		 * Required
		 */
		swImageDescriptor: string;

		/** NFV */
		terminateAppInstanceOpConfig?: string | null;

		/**
		 * Transports, if any, that this application requires to be provided by the platform. These transports will be used by the application to deliver services provided by this application. Only relevant for service-producing apps. See note 2.
		 * Minimum items: 0
		 */
		transportDependencies?: Array<TransportDependency>;

		/**
		 * Ref NFV
		 * Required
		 */
		virtualComputeDescriptor: string;

		/**
		 * Defines descriptors of virtual storage resources to be used by the MEC application.
		 * Minimum items: 0
		 */
		virtualStorageDescriptor?: Array<string>;
	}
	export interface AppDFormProperties {

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1.
		 * Required
		 */
		appDId: FormControl<string | null | undefined>,

		/**
		 * Identifies the version of the application descriptor.
		 * Required
		 */
		appDVersion: FormControl<string | null | undefined>,

		/**
		 * Human readable description of the MEC application.
		 * Required
		 */
		appDescription: FormControl<string | null | undefined>,

		/** Human readable name for the MEC application. */
		appInfoName: FormControl<string | null | undefined>,

		/**
		 * Name to identify the MEC application.
		 * Required
		 */
		appName: FormControl<string | null | undefined>,

		/**
		 * Provider of the application and of the AppD.
		 * Required
		 */
		appProvider: FormControl<string | null | undefined>,

		/**
		 * Identifies the version of software of the MEC application.
		 * Required
		 */
		appSoftVersion: FormControl<string | null | undefined>,

		/** NFV */
		changeAppInstanceStateOpConfig: FormControl<string | null | undefined>,

		/**
		 * Ref NFV
		 * Required
		 */
		swImageDescriptor: FormControl<string | null | undefined>,

		/** NFV */
		terminateAppInstanceOpConfig: FormControl<string | null | undefined>,

		/**
		 * Ref NFV
		 * Required
		 */
		virtualComputeDescriptor: FormControl<string | null | undefined>,
	}
	export function CreateAppDFormGroup() {
		return new FormGroup<AppDFormProperties>({
			appDId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appDVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appInfoName: new FormControl<string | null | undefined>(undefined),
			appName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appSoftVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			changeAppInstanceStateOpConfig: new FormControl<string | null | undefined>(undefined),
			swImageDescriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			terminateAppInstanceOpConfig: new FormControl<string | null | undefined>(undefined),
			virtualComputeDescriptor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DNSRuleDescriptor {

		/**
		 * Identifies the DNS Rule
		 * Required
		 */
		dnsRuleId: string;

		/**
		 * FQDN of the DNS rule
		 * Required
		 */
		domainName: string;

		/**
		 * IP address given by the DNS rule
		 * Required
		 */
		ipAddress: string;

		/**
		 * Specifies the IP address type
		 * Required
		 */
		ipAddressType: DNSRuleDescriptorIpAddressType;

		/** Time-to-live value */
		ttl?: number | null;
	}
	export interface DNSRuleDescriptorFormProperties {

		/**
		 * Identifies the DNS Rule
		 * Required
		 */
		dnsRuleId: FormControl<string | null | undefined>,

		/**
		 * FQDN of the DNS rule
		 * Required
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * IP address given by the DNS rule
		 * Required
		 */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * Specifies the IP address type
		 * Required
		 */
		ipAddressType: FormControl<DNSRuleDescriptorIpAddressType | null | undefined>,

		/** Time-to-live value */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateDNSRuleDescriptorFormGroup() {
		return new FormGroup<DNSRuleDescriptorFormProperties>({
			dnsRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddressType: new FormControl<DNSRuleDescriptorIpAddressType | null | undefined>(undefined, [Validators.required]),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DNSRuleDescriptorIpAddressType { IP_V6 = 0, IP_V4 = 1 }

	export interface AppExternalCpd {

		/**
		 * All attributes inherited from Cpd.
		 * Required
		 */
		inherited_attributes: string;

		/**
		 * Specifies requirements on a virtual network interface realizing the CPs instantiated from this CPD.
		 * Minimum items: 0
		 */
		virtualNetworkInterfaceRequirements?: Array<string>;
	}
	export interface AppExternalCpdFormProperties {

		/**
		 * All attributes inherited from Cpd.
		 * Required
		 */
		inherited_attributes: FormControl<string | null | undefined>,
	}
	export function CreateAppExternalCpdFormGroup() {
		return new FormGroup<AppExternalCpdFormProperties>({
			inherited_attributes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FeatureDependency {

		/**
		 * The name of the feature, for example, UserApps, UEIdentity, etc.
		 * Required
		 */
		featureName: string;

		/**
		 * The version of the feature.
		 * Required
		 */
		version: string;
	}
	export interface FeatureDependencyFormProperties {

		/**
		 * The name of the feature, for example, UserApps, UEIdentity, etc.
		 * Required
		 */
		featureName: FormControl<string | null | undefined>,

		/**
		 * The version of the feature.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFeatureDependencyFormGroup() {
		return new FormGroup<FeatureDependencyFormProperties>({
			featureName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LatencyDescriptor {

		/**
		 * The value of the maximum latency in nano seconds tolerated by the MEC application. See note.
		 * Required
		 */
		maxLatency: string;
	}
	export interface LatencyDescriptorFormProperties {

		/**
		 * The value of the maximum latency in nano seconds tolerated by the MEC application. See note.
		 * Required
		 */
		maxLatency: FormControl<string | null | undefined>,
	}
	export function CreateLatencyDescriptorFormGroup() {
		return new FormGroup<LatencyDescriptorFormProperties>({
			maxLatency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceDependency {

		/**
		 * Requested permissions regarding the access of the application to the service. See clause 8.2 of ETSI GS MEC 009 [4].
		 * The format of this attribute is left for the data model design stage.
		 * Minimum items: 0
		 */
		requestedPermissions?: Array<string>;

		/** See MEC011 */
		serCategory?: CategoryRef;

		/**
		 * The name of the service, for example, RNIS, LocationService, etc.
		 * Required
		 */
		serName: string;

		/**
		 * Indicates transport and serialization format dependencies of consuming the service. Defaults to REST + JSON if absent. See note.
		 * Minimum items: 0
		 */
		serTransportDependencies?: Array<TransportDependency>;

		/**
		 * The version of the service.
		 * Required
		 */
		version: string;
	}
	export interface ServiceDependencyFormProperties {

		/**
		 * The name of the service, for example, RNIS, LocationService, etc.
		 * Required
		 */
		serName: FormControl<string | null | undefined>,

		/**
		 * The version of the service.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceDependencyFormGroup() {
		return new FormGroup<ServiceDependencyFormProperties>({
			serName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransportDependency {

		/**
		 * Set of labels that allow to define groups of transport bindings. The mechanism of the grouping is defined below this table.
		 * Required
		 * Minimum items: 1
		 */
		labels: Array<string>;

		/**
		 * Information about the serializers in this transport binding, as defined in the SerializerTypes type in ETSI GS MEC 011 [i.4]. Support for at least one of the entries is required in conjunction with the transport.
		 * Required
		 * Minimum items: 1
		 */
		serializers: Array<string>;

		/** Required */
		transport: TransportDescriptor;
	}
	export interface TransportDependencyFormProperties {
	}
	export function CreateTransportDependencyFormGroup() {
		return new FormGroup<TransportDependencyFormProperties>({
		});

	}

	export interface TransportDescriptor {

		/**
		 * The name of the protocol used. Shall be set to HTTP for a REST API.
		 * Required
		 */
		protocol: string;

		/**
		 * See MEC011
		 * Required
		 */
		security: SecurityInfo;

		/** Required */
		type: string;

		/**
		 * The version of the protocol used.
		 * Required
		 */
		version: string;
	}
	export interface TransportDescriptorFormProperties {

		/**
		 * The name of the protocol used. Shall be set to HTTP for a REST API.
		 * Required
		 */
		protocol: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/**
		 * The version of the protocol used.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTransportDescriptorFormGroup() {
		return new FormGroup<TransportDescriptorFormProperties>({
			protocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.' */
	export interface ServiceDescriptor {

		/** See MEC011 */
		serCategory?: CategoryRef;

		/**
		 * The name of the service, for example, RNIS, LocationService, etc.
		 * Required
		 */
		serName: string;

		/** 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.' */
		transportsSupported?: TransportsSupported;

		/**
		 * The version of the service.
		 * Required
		 */
		version: string;
	}

	/** 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.' */
	export interface ServiceDescriptorFormProperties {

		/**
		 * The name of the service, for example, RNIS, LocationService, etc.
		 * Required
		 */
		serName: FormControl<string | null | undefined>,

		/**
		 * The version of the service.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceDescriptorFormGroup() {
		return new FormGroup<ServiceDescriptorFormProperties>({
			serName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.' */
	export interface TransportsSupported {

		/**
		 * 'Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 '
		 * Minimum items: 1
		 */
		serializers?: Array<string>;
		transport?: TransportDescriptor;
	}

	/** 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.' */
	export interface TransportsSupportedFormProperties {
	}
	export function CreateTransportsSupportedFormGroup() {
		return new FormGroup<TransportsSupportedFormProperties>({
		});

	}

	export interface TrafficRuleDescriptor {

		/**
		 * 'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'
		 * Required
		 */
		action: Action;

		/**
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		dstInterface?: Array<InterfaceDescriptor>;

		/**
		 * Definition of filter type: per FLOW or PACKET
		 * Required
		 */
		filterType: TrafficRuleDescriptorFilterType;

		/**
		 * Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence.
		 * Required
		 */
		priority: number;

		/**
		 * The filter used to identify specific flow/packets that need to be handled by the MEC host.
		 * Required
		 * Minimum items: 1
		 */
		trafficFilter: Array<TrafficFilter>;

		/**
		 * Identifies the traffic rule.
		 * Required
		 */
		trafficRuleId: string;
	}
	export interface TrafficRuleDescriptorFormProperties {

		/**
		 * 'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'
		 * Required
		 */
		action: FormControl<Action | null | undefined>,

		/**
		 * Definition of filter type: per FLOW or PACKET
		 * Required
		 */
		filterType: FormControl<TrafficRuleDescriptorFilterType | null | undefined>,

		/**
		 * Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence.
		 * Required
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Identifies the traffic rule.
		 * Required
		 */
		trafficRuleId: FormControl<string | null | undefined>,
	}
	export function CreateTrafficRuleDescriptorFormGroup() {
		return new FormGroup<TrafficRuleDescriptorFormProperties>({
			action: new FormControl<Action | null | undefined>(undefined, [Validators.required]),
			filterType: new FormControl<TrafficRuleDescriptorFilterType | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trafficRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InterfaceDescriptor {

		/** If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface. */
		dstIPAddress?: string | null;

		/** If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface. */
		dstMACAddress?: string | null;

		/**
		 * Type of interface.
		 * Required
		 */
		interfaceType: InterfaceDescriptorInterfaceType;

		/** If the interface type is MAC, the source address identifies the MAC address of the interface. */
		srcMACAddress?: string | null;
		tunnelInfo?: TunnelInfo;
	}
	export interface InterfaceDescriptorFormProperties {

		/** If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface. */
		dstIPAddress: FormControl<string | null | undefined>,

		/** If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface. */
		dstMACAddress: FormControl<string | null | undefined>,

		/**
		 * Type of interface.
		 * Required
		 */
		interfaceType: FormControl<InterfaceDescriptorInterfaceType | null | undefined>,

		/** If the interface type is MAC, the source address identifies the MAC address of the interface. */
		srcMACAddress: FormControl<string | null | undefined>,
	}
	export function CreateInterfaceDescriptorFormGroup() {
		return new FormGroup<InterfaceDescriptorFormProperties>({
			dstIPAddress: new FormControl<string | null | undefined>(undefined),
			dstMACAddress: new FormControl<string | null | undefined>(undefined),
			interfaceType: new FormControl<InterfaceDescriptorInterfaceType | null | undefined>(undefined, [Validators.required]),
			srcMACAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InterfaceDescriptorInterfaceType { TUNNEL = 0, MAC = 1, IP = 2 }

	export interface TunnelInfo {

		/**
		 * Destination address of the tunnel.
		 * Required
		 */
		tunnelDstAddress: string;
		tunnelSpecificData?: string | null;

		/**
		 * Source address of the tunnel.
		 * Required
		 */
		tunnelSrcAddress: string;

		/**
		 * Type of tunnel.
		 * Required
		 */
		tunnelType: TunnelInfoTunnelType;
	}
	export interface TunnelInfoFormProperties {

		/**
		 * Destination address of the tunnel.
		 * Required
		 */
		tunnelDstAddress: FormControl<string | null | undefined>,
		tunnelSpecificData: FormControl<string | null | undefined>,

		/**
		 * Source address of the tunnel.
		 * Required
		 */
		tunnelSrcAddress: FormControl<string | null | undefined>,

		/**
		 * Type of tunnel.
		 * Required
		 */
		tunnelType: FormControl<TunnelInfoTunnelType | null | undefined>,
	}
	export function CreateTunnelInfoFormGroup() {
		return new FormGroup<TunnelInfoFormProperties>({
			tunnelDstAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tunnelSpecificData: new FormControl<string | null | undefined>(undefined),
			tunnelSrcAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tunnelType: new FormControl<TunnelInfoTunnelType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TunnelInfoTunnelType { 'GTP-U' = 0, GRE = 1 }

	export enum TrafficRuleDescriptorFilterType { FLOW = 0, PACKET = 1 }

	export interface TrafficFilter {

		/** Used to match all IPv4 packets that have the same DSCP. */
		dSCP?: number | null;

		/**
		 * A IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.
		 * Minimum items: 0
		 */
		dstAddress?: Array<string>;

		/**
		 * A port or a range of ports.
		 * Minimum items: 0
		 */
		dstPort?: Array<string>;

		/**
		 * Used for GTP tunnel based traffic rule.
		 * Minimum items: 0
		 */
		dstTunnelPort?: Array<string>;

		/**
		 * Specify the protocol of the traffic filter.
		 * Minimum items: 0
		 */
		protocol?: Array<string>;

		/** Used to match all packets that have the same QCI. */
		qCI?: number | null;

		/**
		 * An IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.
		 * Minimum items: 0
		 */
		srcAddress?: Array<string>;

		/**
		 * A port or a range of ports.
		 * Minimum items: 0
		 */
		srcPort?: Array<string>;

		/**
		 * Used for GTP tunnel based traffic rule.
		 * Minimum items: 0
		 */
		srcTunnelAddress?: Array<string>;

		/**
		 * Used for GTP tunnel based traffic rule.
		 * Minimum items: 0
		 */
		srcTunnelPort?: Array<string>;

		/** Used to match all IPv6 packets that have the same TC. */
		tC?: number | null;

		/**
		 * Used for tag based traffic rule.
		 * Minimum items: 0
		 */
		tag?: Array<string>;

		/**
		 * Used for GTP tunnel based traffic rule.
		 * Minimum items: 0
		 */
		tgtTunnelAddress?: Array<string>;
	}
	export interface TrafficFilterFormProperties {

		/** Used to match all IPv4 packets that have the same DSCP. */
		dSCP: FormControl<number | null | undefined>,

		/** Used to match all packets that have the same QCI. */
		qCI: FormControl<number | null | undefined>,

		/** Used to match all IPv6 packets that have the same TC. */
		tC: FormControl<number | null | undefined>,
	}
	export function CreateTrafficFilterFormGroup() {
		return new FormGroup<TrafficFilterFormProperties>({
			dSCP: new FormControl<number | null | undefined>(undefined),
			qCI: new FormControl<number | null | undefined>(undefined),
			tC: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Discriminator for the different notification types */
	export enum AppPkgNotificationType { AppPackageOnBoarded = 0, AppPacakgeEnabled = 1, AppPacakgeDisabled = 2, AppPackageDeleted = 3 }


	/** Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests. */
	export enum AppPkgOperationalState { ENABLED = 0, DISABLED = 1 }


	/** Subscribed notification type. */
	export enum AppPkgSubscriptionType { AppPackageOnBoarding = 0, AppPacakgeOperationChange = 1, AppPackageDeletion = 2 }


	/** Additional information of application package artifacts that are not application software images. Type is TBD */
	export interface AppPkgArtifactInfo {
	}

	/** Additional information of application package artifacts that are not application software images. Type is TBD */
	export interface AppPkgArtifactInfoFormProperties {
	}
	export function CreateAppPkgArtifactInfoFormGroup() {
		return new FormGroup<AppPkgArtifactInfoFormProperties>({
		});

	}


	/** 'The data type AppPkgInfo represents the parameters for an application package resource' */
	export interface AppPkgInfo {

		/**
		 * Links to resources related to this resource.
		 * Required
		 */
		_links: AppPkgInfolinks;

		/** Additional information of application package artifacts that are not application software images. Type is TBD */
		additionalArtifacts?: AppPkgArtifactInfo;

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique.
		 * Required
		 */
		appDId: string;

		/**
		 * Identifies the version of the application descriptor.
		 * Required
		 */
		appDVersion: string;

		/**
		 * Name to identify the MEC application.
		 * Required
		 */
		appName: string;

		/** Provider of the application and of the AppD. */
		appProvider?: string | null;

		/**
		 * Software version of the application. This is updated when there is any change to the software in the onboarded application package.
		 * Required
		 */
		appSoftwareVersion: string;

		/** Required */
		checksum: Checksum;

		/**
		 * Identifier of the onboarded application package.
		 * Required
		 */
		id: string;

		/**
		 * Onboarding state of application package
		 * Required
		 */
		onboardingState: AppPkgInfoOnboardingState;

		/**
		 * Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.
		 * Required
		 */
		operationalState: AppPkgOperationalState;

		/**
		 * Information of application software image in application package. Type is TBD
		 * Required
		 */
		softwareImages: AppPkgSWImageInfo;

		/**
		 * Usage state of the onboarded instance of the application package
		 * Required
		 */
		usageState: AppPkgInfoUsageState;

		/** 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259' */
		userDefinedData?: KeyValuePairs;
	}

	/** 'The data type AppPkgInfo represents the parameters for an application package resource' */
	export interface AppPkgInfoFormProperties {

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique.
		 * Required
		 */
		appDId: FormControl<string | null | undefined>,

		/**
		 * Identifies the version of the application descriptor.
		 * Required
		 */
		appDVersion: FormControl<string | null | undefined>,

		/**
		 * Name to identify the MEC application.
		 * Required
		 */
		appName: FormControl<string | null | undefined>,

		/** Provider of the application and of the AppD. */
		appProvider: FormControl<string | null | undefined>,

		/**
		 * Software version of the application. This is updated when there is any change to the software in the onboarded application package.
		 * Required
		 */
		appSoftwareVersion: FormControl<string | null | undefined>,

		/**
		 * Identifier of the onboarded application package.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Onboarding state of application package
		 * Required
		 */
		onboardingState: FormControl<AppPkgInfoOnboardingState | null | undefined>,

		/**
		 * Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.
		 * Required
		 */
		operationalState: FormControl<AppPkgOperationalState | null | undefined>,

		/**
		 * Usage state of the onboarded instance of the application package
		 * Required
		 */
		usageState: FormControl<AppPkgInfoUsageState | null | undefined>,
	}
	export function CreateAppPkgInfoFormGroup() {
		return new FormGroup<AppPkgInfoFormProperties>({
			appDId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appDVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appProvider: new FormControl<string | null | undefined>(undefined),
			appSoftwareVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onboardingState: new FormControl<AppPkgInfoOnboardingState | null | undefined>(undefined, [Validators.required]),
			operationalState: new FormControl<AppPkgOperationalState | null | undefined>(undefined, [Validators.required]),
			usageState: new FormControl<AppPkgInfoUsageState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to resources related to this resource. */
	export interface AppPkgInfolinks {

		/** Required */
		appD: LinkType;

		/** Required */
		appPkgContent: LinkType;

		/** Required */
		self: LinkType;
	}

	/** Links to resources related to this resource. */
	export interface AppPkgInfolinksFormProperties {
	}
	export function CreateAppPkgInfolinksFormGroup() {
		return new FormGroup<AppPkgInfolinksFormProperties>({
		});

	}

	export interface LinkType {

		/**
		 * URI referring to a resource
		 * Required
		 */
		href: string;
	}
	export interface LinkTypeFormProperties {

		/**
		 * URI referring to a resource
		 * Required
		 */
		href: FormControl<string | null | undefined>,
	}
	export function CreateLinkTypeFormGroup() {
		return new FormGroup<LinkTypeFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Checksum {

		/**
		 * Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.
		 * Required
		 */
		algorithm: string;

		/**
		 * 'String 1 The hexadecimal value of the checksum'
		 * Required
		 */
		hash: string;
	}
	export interface ChecksumFormProperties {

		/**
		 * Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.
		 * Required
		 */
		algorithm: FormControl<string | null | undefined>,

		/**
		 * 'String 1 The hexadecimal value of the checksum'
		 * Required
		 */
		hash: FormControl<string | null | undefined>,
	}
	export function CreateChecksumFormGroup() {
		return new FormGroup<ChecksumFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppPkgInfoOnboardingState { CREATED = 0, UPLOADING = 1, PROCESSING = 2, ONBOARDED = 3 }

	export enum AppPkgInfoUsageState { IN_USE = 0, NOT_IN_USE = 1 }


	/** 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259' */
	export interface KeyValuePairs {
	}

	/** 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259' */
	export interface KeyValuePairsFormProperties {
	}
	export function CreateKeyValuePairsFormGroup() {
		return new FormGroup<KeyValuePairsFormProperties>({
		});

	}


	/** 'The data type represents the operational state for an application package resource' */
	export interface AppPkgInfoModifications {

		/** Required */
		operationState: AppPkgInfoModificationsOperationState;
	}

	/** 'The data type represents the operational state for an application package resource' */
	export interface AppPkgInfoModificationsFormProperties {

		/** Required */
		operationState: FormControl<AppPkgInfoModificationsOperationState | null | undefined>,
	}
	export function CreateAppPkgInfoModificationsFormGroup() {
		return new FormGroup<AppPkgInfoModificationsFormProperties>({
			operationState: new FormControl<AppPkgInfoModificationsOperationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppPkgInfoModificationsOperationState { DISABLED = 0, ENABLED = 1 }


	/** 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded' */
	export interface AppPkgNotification {

		/**
		 * Links to resources related to this resource.
		 * Required
		 */
		_links: AppPkgNotificationlinks;

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique.
		 * Required
		 */
		appDId: string;

		/**
		 * Identifier of the onboarded application package.
		 * Required
		 */
		appPkgId: string;

		/**
		 * ''
		 * Required
		 */
		id: string;

		/**
		 * Discriminator for the different notification types
		 * Required
		 */
		notificationType: AppPkgNotificationType;

		/** Required */
		operationalState: AppPkgInfoModificationsOperationState;

		/**
		 * Identifier of the subscription related to this notification.
		 * Required
		 */
		subscriptionId: string;

		/** Required */
		timeStamp: TimeStamp;
	}

	/** 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded' */
	export interface AppPkgNotificationFormProperties {

		/**
		 * Identifier of this MEC application descriptor. This attribute shall be globally unique.
		 * Required
		 */
		appDId: FormControl<string | null | undefined>,

		/**
		 * Identifier of the onboarded application package.
		 * Required
		 */
		appPkgId: FormControl<string | null | undefined>,

		/**
		 * ''
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Discriminator for the different notification types
		 * Required
		 */
		notificationType: FormControl<AppPkgNotificationType | null | undefined>,

		/** Required */
		operationalState: FormControl<AppPkgInfoModificationsOperationState | null | undefined>,

		/**
		 * Identifier of the subscription related to this notification.
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateAppPkgNotificationFormGroup() {
		return new FormGroup<AppPkgNotificationFormProperties>({
			appDId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appPkgId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notificationType: new FormControl<AppPkgNotificationType | null | undefined>(undefined, [Validators.required]),
			operationalState: new FormControl<AppPkgInfoModificationsOperationState | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to resources related to this resource. */
	export interface AppPkgNotificationlinks {

		/** Required */
		subscription: LinkType;
	}

	/** Links to resources related to this resource. */
	export interface AppPkgNotificationlinksFormProperties {
	}
	export function CreateAppPkgNotificationlinksFormGroup() {
		return new FormGroup<AppPkgNotificationlinksFormProperties>({
		});

	}

	export interface TimeStamp {

		/**
		 * The nanoseconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.
		 * Required
		 */
		nanoSeconds: string;

		/**
		 * The seconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.
		 * Required
		 */
		seconds: string;
	}
	export interface TimeStampFormProperties {

		/**
		 * The nanoseconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.
		 * Required
		 */
		nanoSeconds: FormControl<string | null | undefined>,

		/**
		 * The seconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.
		 * Required
		 */
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateTimeStampFormGroup() {
		return new FormGroup<TimeStampFormProperties>({
			nanoSeconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information of application software image in application package. Type is TBD */
	export interface AppPkgSWImageInfo {
	}

	/** Information of application software image in application package. Type is TBD */
	export interface AppPkgSWImageInfoFormProperties {
	}
	export function CreateAppPkgSWImageInfoFormGroup() {
		return new FormGroup<AppPkgSWImageInfoFormProperties>({
		});

	}


	/** 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.' */
	export interface AppPkgSubscription {
		appPkgFilter?: Array<string>;

		/**
		 * The URI of the endpoint for the notification to be sent to.
		 * Required
		 */
		callbackUri: string;

		/**
		 * 'Subscribed notification type'
		 * Required
		 */
		subsctiptionType: AppPkgSubscriptionType;
	}

	/** 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.' */
	export interface AppPkgSubscriptionFormProperties {

		/**
		 * The URI of the endpoint for the notification to be sent to.
		 * Required
		 */
		callbackUri: FormControl<string | null | undefined>,

		/**
		 * 'Subscribed notification type'
		 * Required
		 */
		subsctiptionType: FormControl<AppPkgSubscriptionType | null | undefined>,
	}
	export function CreateAppPkgSubscriptionFormGroup() {
		return new FormGroup<AppPkgSubscriptionFormProperties>({
			callbackUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subsctiptionType: new FormControl<AppPkgSubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package' */
	export interface AppPkgSubscriptionInfo {

		/**
		 * Links to resources related to this resource.
		 * Required
		 */
		_links: AppPkgSubscriptionInfolinks;

		/**
		 * The URI of the endpoint for the notification to be sent to.
		 * Required
		 */
		callbackUri: string;

		/**
		 * ''
		 * Required
		 */
		id: string;

		/**
		 * Subscribed notification type.
		 * Required
		 */
		subscriptionType: AppPkgSubscriptionType;
	}

	/** 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package' */
	export interface AppPkgSubscriptionInfoFormProperties {

		/**
		 * The URI of the endpoint for the notification to be sent to.
		 * Required
		 */
		callbackUri: FormControl<string | null | undefined>,

		/**
		 * ''
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Subscribed notification type.
		 * Required
		 */
		subscriptionType: FormControl<AppPkgSubscriptionType | null | undefined>,
	}
	export function CreateAppPkgSubscriptionInfoFormGroup() {
		return new FormGroup<AppPkgSubscriptionInfoFormProperties>({
			callbackUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionType: new FormControl<AppPkgSubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to resources related to this resource. */
	export interface AppPkgSubscriptionInfolinks {

		/** Required */
		self: LinkType;
	}

	/** Links to resources related to this resource. */
	export interface AppPkgSubscriptionInfolinksFormProperties {
	}
	export function CreateAppPkgSubscriptionInfolinksFormGroup() {
		return new FormGroup<AppPkgSubscriptionInfolinksFormProperties>({
		});

	}


	/** 'The data type represents a subscription link list of notification on application package management' */
	export interface AppPkgSubscriptionLinkList {

		/**
		 * Links to resources related to this resource.
		 * Required
		 */
		_links: AppPkgSubscriptionLinkListlinks;
	}

	/** 'The data type represents a subscription link list of notification on application package management' */
	export interface AppPkgSubscriptionLinkListFormProperties {
	}
	export function CreateAppPkgSubscriptionLinkListFormGroup() {
		return new FormGroup<AppPkgSubscriptionLinkListFormProperties>({
		});

	}


	/** Links to resources related to this resource. */
	export interface AppPkgSubscriptionLinkListlinks {

		/** Required */
		self: LinkType;
		subscriptions?: Array<SubscriptionsAppPkgSubscription>;
	}

	/** Links to resources related to this resource. */
	export interface AppPkgSubscriptionLinkListlinksFormProperties {
	}
	export function CreateAppPkgSubscriptionLinkListlinksFormGroup() {
		return new FormGroup<AppPkgSubscriptionLinkListlinksFormProperties>({
		});

	}


	/** 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.' */
	export interface SubscriptionsAppPkgSubscription {

		/**
		 * The URI referring to the subscription.
		 * Required
		 */
		href: string;

		/**
		 * 'Subscribed notification type'
		 * Required
		 */
		subsctiptionType: AppPkgSubscriptionType;
	}

	/** 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.' */
	export interface SubscriptionsAppPkgSubscriptionFormProperties {

		/**
		 * The URI referring to the subscription.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * 'Subscribed notification type'
		 * Required
		 */
		subsctiptionType: FormControl<AppPkgSubscriptionType | null | undefined>,
	}
	export function CreateSubscriptionsAppPkgSubscriptionFormGroup() {
		return new FormGroup<SubscriptionsAppPkgSubscriptionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subsctiptionType: new FormControl<AppPkgSubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** See MEC011 */
	export interface CategoryRef {
	}

	/** See MEC011 */
	export interface CategoryRefFormProperties {
	}
	export function CreateCategoryRefFormGroup() {
		return new FormGroup<CategoryRefFormProperties>({
		});

	}

	export interface CreateAppPkg {

		/**
		 * Name of the application package to be onboarded.
		 * Required
		 */
		appPkgName: string;

		/** Required */
		appPkgPath: string;

		/**
		 * Version of the application package to be onboarded.
		 * The appPkgName with appPkgVersion can be used to uniquely identify the application package.
		 * Required
		 */
		appPkgVersion: string;

		/** The provider's name of the application package to be onboarded. */
		appProvider?: string | null;

		/** Required */
		checksum: Checksum;

		/** 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259' */
		userDefinedData?: KeyValuePairs;
	}
	export interface CreateAppPkgFormProperties {

		/**
		 * Name of the application package to be onboarded.
		 * Required
		 */
		appPkgName: FormControl<string | null | undefined>,

		/** Required */
		appPkgPath: FormControl<string | null | undefined>,

		/**
		 * Version of the application package to be onboarded.
		 * The appPkgName with appPkgVersion can be used to uniquely identify the application package.
		 * Required
		 */
		appPkgVersion: FormControl<string | null | undefined>,

		/** The provider's name of the application package to be onboarded. */
		appProvider: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppPkgFormGroup() {
		return new FormGroup<CreateAppPkgFormProperties>({
			appPkgName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appPkgPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appPkgVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appProvider: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of filter type: per FLOW or PACKET */
	export enum FilterType { FLOW = 0, PACKET = 1 }


	/** Type of interface. */
	export enum InterfaceType { TUNNEL = 0, MAC = 1, IP = 2 }


	/** Specifies the IP address type */
	export enum IpAddressType { IP_V6 = 0, IP_V4 = 1 }


	/** Onboarding state of application package */
	export enum OnboardingState { CREATED = 0, UPLOADING = 1, PROCESSING = 2, ONBOARDED = 3 }

	export interface ProblemDetails {

		/** A human-readable explanation specific to this occurrence of the problem */
		detail?: string | null;

		/** A URI reference that identifies the specific occurrence of the problem */
		instance?: string | null;

		/** The HTTP status code for this occurrence of the problem */
		status?: number | null;

		/** A short, human-readable summary of the problem type */
		title?: string | null;

		/** A URI reference according to IETF RFC 3986 that identifies the problem type */
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {

		/** A human-readable explanation specific to this occurrence of the problem */
		detail: FormControl<string | null | undefined>,

		/** A URI reference that identifies the specific occurrence of the problem */
		instance: FormControl<string | null | undefined>,

		/** The HTTP status code for this occurrence of the problem */
		status: FormControl<number | null | undefined>,

		/** A short, human-readable summary of the problem type */
		title: FormControl<string | null | undefined>,

		/** A URI reference according to IETF RFC 3986 that identifies the problem type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** See MEC011 */
	export interface SecurityInfo {
	}

	/** See MEC011 */
	export interface SecurityInfoFormProperties {
	}
	export function CreateSecurityInfoFormGroup() {
		return new FormGroup<SecurityInfoFormProperties>({
		});

	}


	/** 'Subscribed notification type' */
	export enum SubsctiptionTypeAppPkg { AppPackageOnBoarding = 0, AppPacakgeOperationChange = 1, AppPackageDeletion = 2 }


	/** Type of tunnel. */
	export enum TunnelType { 'GTP-U' = 0, GRE = 1 }


	/** Usage state of the onboarded instance of the application package */
	export enum UsageState { IN_USE = 0, NOT_IN_USE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Queries information relating to on-boarded application packages in the MEO
		 * queries information relating to on-boarded application packages in the MEO
		 * Get app_packages
		 * @param {string} filter Attribute-based filtering parameters according to ETSI GS MEC 009
		 * @param {string} all_fields Include all complex attributes in the response.
		 * @param {string} fields Complex attributes of AppPkgInfo to be included into the response
		 * @param {string} exclude_fields Complex attributes of AppPkgInfo to be excluded from the response.
		 * @param {string} exclude_default Indicates to exclude the following complex attributes of AppPkgInfo from the response.
		 * @return {Array<AppPkgInfo>} Contains a representation of the application package resource
		 */
		App_packagesGET(filter: string | null | undefined, all_fields: string | null | undefined, fields: string | null | undefined, exclude_fields: string | null | undefined, exclude_default: string | null | undefined): Observable<Array<AppPkgInfo>> {
			return this.http.get<Array<AppPkgInfo>>(this.baseUri + 'app_packages?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&all_fields=' + (all_fields == null ? '' : encodeURIComponent(all_fields)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&exclude_fields=' + (exclude_fields == null ? '' : encodeURIComponent(exclude_fields)) + '&exclude_default=' + (exclude_default == null ? '' : encodeURIComponent(exclude_default)), {});
		}

		/**
		 * Create a resource for on-boarding an application package to a MEO
		 * Create a resource for on-boarding an application package to a MEO
		 * Post app_packages
		 * @param {CreateAppPkg} requestBody Resource to be created
		 * @return {void} 
		 */
		App_packagesPOST(requestBody: CreateAppPkg): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'app_packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an individual application package resources
		 * Deletes an individual application package resources
		 * Delete app_packages/{appPkgId}
		 * @return {void} 
		 */
		App_packageDELETE(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app_packages/{appPkgId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Queries the information related to individual application package resources
		 * Queries the information related to individual application package resources
		 * Get app_packages/{appPkgId}
		 * @return {AppPkgInfo} Contains a representation of the application package resource
		 */
		App_packageGET(): Observable<AppPkgInfo> {
			return this.http.get<AppPkgInfo>(this.baseUri + 'app_packages/{appPkgId}', {});
		}

		/**
		 * Updates the operational state of an individual application package resource
		 * Updates the operational state of an individual application package resources
		 * Patch app_packages/{appPkgId}
		 * @param {AppPkgInfoModifications} requestBody Operational state to be set
		 * @return {AppPkgInfoModifications} Shows that the operation has been completed successfully
		 */
		App_packagePATCH(requestBody: AppPkgInfoModifications): Observable<AppPkgInfoModifications> {
			return this.http.patch<AppPkgInfoModifications>(this.baseUri + 'app_packages/{appPkgId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reads the content of the AppD of on-boarded individual application package resources.
		 * Reads the content of the AppD of on-boarded individual application package resources.
		 * Get app_packages/{appPkgId}/appd
		 * @param {string} filter Attribute-based filtering parameters according to ETSI GS MEC 009
		 * @param {string} all_fields Include all complex attributes in the response.
		 * @param {string} fields Complex attributes of AppPkgInfo to be included into the response
		 * @param {string} exclude_fields Complex attributes of AppPkgInfo to be excluded from the response.
		 * @param {string} exclude_default Indicates to exclude the following complex attributes of AppPkgInfo from the response.
		 * @return {string} Content of the AppD is returned.
		 */
		AppPkgIdGET(filter: string | null | undefined, all_fields: string | null | undefined, fields: string | null | undefined, exclude_fields: string | null | undefined, exclude_default: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'app_packages/{appPkgId}/appd?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&all_fields=' + (all_fields == null ? '' : encodeURIComponent(all_fields)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&exclude_fields=' + (exclude_fields == null ? '' : encodeURIComponent(exclude_fields)) + '&exclude_default=' + (exclude_default == null ? '' : encodeURIComponent(exclude_default)), { responseType: 'text' });
		}

		/**
		 * Fetch the onboarded application package content identified by appPkgId or appDId.
		 * Fetch the onboarded application package content identified by appPkgId or appDId.
		 * Get app_packages/{appPkgId}/package_content
		 * @return {void} The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD.
		 */
		AppPkgGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'app_packages/{appPkgId}/package_content', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reads the content of the AppD of on-boarded individual application package resources.
		 * Reads the content of the AppD of on-boarded individual application package resources.
		 * Get onboarded_app_packages/{appDId}/appd
		 * @param {string} filter Attribute-based filtering parameters according to ETSI GS MEC 009
		 * @param {string} all_fields Include all complex attributes in the response.
		 * @param {string} fields Complex attributes of AppPkgInfo to be included into the response
		 * @param {string} exclude_fields Complex attributes of AppPkgInfo to be excluded from the response.
		 * @param {string} exclude_default Indicates to exclude the following complex attributes of AppPkgInfo from the response.
		 * @return {string} Content of the AppD is returned.
		 */
		AppDGET(filter: string | null | undefined, all_fields: string | null | undefined, fields: string | null | undefined, exclude_fields: string | null | undefined, exclude_default: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'onboarded_app_packages/{appDId}/appd?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&all_fields=' + (all_fields == null ? '' : encodeURIComponent(all_fields)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&exclude_fields=' + (exclude_fields == null ? '' : encodeURIComponent(exclude_fields)) + '&exclude_default=' + (exclude_default == null ? '' : encodeURIComponent(exclude_default)), { responseType: 'text' });
		}

		/**
		 * Fetch the onboarded application package content identified by appPkgId or appDId.
		 * Fetch the onboarded application package content identified by appPkgId or appDId.
		 * Get onboarded_app_packages/{appDId}/package_content
		 * @return {void} The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD.
		 */
		AppDIdGET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'onboarded_app_packages/{appDId}/package_content', { observe: 'response', responseType: 'text' });
		}

		/**
		 * used to retrieve the information of subscriptions to individual application package resource in MEO
		 * used to retrieve the information of subscriptions to individual application package resource in MEO package
		 * Get subscriptions
		 * @return {AppPkgSubscriptionLinkList} List of zero or more subscriptions
		 */
		SubscriptionsGET(): Observable<AppPkgSubscriptionLinkList> {
			return this.http.get<AppPkgSubscriptionLinkList>(this.baseUri + 'subscriptions', {});
		}

		/**
		 * Subscribe to notifications about on-boarding an application package
		 * Subscribe to notifications about on-boarding an application package
		 * Post subscriptions
		 * @param {AppPkgSubscription} requestBody The input parameters of subscribe operation to notifications
		 * @return {void} 
		 */
		SubscriptionsPOST(requestBody: AppPkgSubscription): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the individual subscription to notifications about application package changes in MEO.
		 * Deletes the individual subscription to notifications about application package changes in MEO.
		 * Delete subscriptions/{subscriptionId}
		 * @return {void} 
		 */
		IndividualSubscriptionDELETE(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/{subscriptionId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to represent an individual subscription to notifications about application package changes.
		 * Used to represent an individual subscription to notifications about application package changes.
		 * Get subscriptions/{subscriptionId}
		 * @return {AppPkgSubscriptionInfo} Representation of the resource.
		 */
		IndividualSubscriptionGET(): Observable<AppPkgSubscriptionInfo> {
			return this.http.get<AppPkgSubscriptionInfo>(this.baseUri + 'subscriptions/{subscriptionId}', {});
		}

		/**
		 * Registers a notification endpoint to notify application package operations
		 * Registers a notification endpoint to notify application package operations
		 * Post user_defined_notification
		 * @param {AppPkgNotification} requestBody Notification endpoint to be created
		 * @return {void} 
		 */
		App_pkg_notificationPOST(requestBody: AppPkgNotification): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user_defined_notification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

