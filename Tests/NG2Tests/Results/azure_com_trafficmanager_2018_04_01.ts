import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Parameters supplied to check Traffic Manager name operation. */
	export interface CheckTrafficManagerRelativeDnsNameAvailabilityParameters {

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** Parameters supplied to check Traffic Manager name operation. */
	export interface CheckTrafficManagerRelativeDnsNameAvailabilityParametersFormProperties {

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckTrafficManagerRelativeDnsNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckTrafficManagerRelativeDnsNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error returned by the Azure Resource Manager */
	export interface CloudError {

		/** The content of an error returned by the Azure Resource Manager */
		error?: CloudErrorBody;
	}

	/** An error returned by the Azure Resource Manager */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** The content of an error returned by the Azure Resource Manager */
	export interface CloudErrorBody {

		/** Error code */
		code?: string | null;

		/** Error details */
		details?: Array<CloudErrorBody>;

		/** Error message */
		message?: string | null;

		/** Error target */
		target?: string | null;
	}

	/** The content of an error returned by the Azure Resource Manager */
	export interface CloudErrorBodyFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message */
		message: FormControl<string | null | undefined>,

		/** Error target */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the request or operation. */
	export interface DeleteOperationResult {

		/** The result of the operation or request. */
		boolean?: boolean | null;
	}

	/** The result of the request or operation. */
	export interface DeleteOperationResultFormProperties {

		/** The result of the operation or request. */
		boolean: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteOperationResultFormGroup() {
		return new FormGroup<DeleteOperationResultFormProperties>({
			boolean: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Class containing DNS settings in a Traffic Manager profile. */
	export interface DnsConfig {

		/** The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager. */
		fqdn?: string | null;

		/** The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile. */
		relativeName?: string | null;

		/**
		 * The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ttl?: string | null;
	}

	/** Class containing DNS settings in a Traffic Manager profile. */
	export interface DnsConfigFormProperties {

		/** The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager. */
		fqdn: FormControl<string | null | undefined>,

		/** The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile. */
		relativeName: FormControl<string | null | undefined>,

		/**
		 * The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateDnsConfigFormGroup() {
		return new FormGroup<DnsConfigFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			relativeName: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager endpoint. */
	export interface Endpoint extends ProxyResource {

		/** Class representing a Traffic Manager endpoint properties. */
		properties?: EndpointProperties;
	}

	/** Class representing a Traffic Manager endpoint. */
	export interface EndpointFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
		});

	}


	/** Class representing a Traffic Manager endpoint properties. */
	export interface EndpointProperties {

		/** List of custom headers. */
		EndpointPropertiesCustomHeaders?: Array<EndpointPropertiesCustomHeaders>;

		/** Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. */
		endpointLocation?: string | null;

		/** The monitoring status of the endpoint. */
		endpointMonitorStatus?: EndpointPropertiesEndpointMonitorStatus | null;

		/** The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. */
		endpointStatus?: EndpointPropertiesEndpointStatus | null;

		/** The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values. */
		geoMapping?: Array<string>;

		/**
		 * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minChildEndpoints?: string | null;

		/**
		 * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		priority?: string | null;

		/** The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints. */
		EndpointPropertiesSubnets?: Array<EndpointPropertiesSubnets>;

		/** The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. */
		target?: string | null;

		/** The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. */
		targetResourceId?: string | null;

		/**
		 * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		weight?: string | null;
	}

	/** Class representing a Traffic Manager endpoint properties. */
	export interface EndpointPropertiesFormProperties {

		/** Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method. */
		endpointLocation: FormControl<string | null | undefined>,

		/** The monitoring status of the endpoint. */
		endpointMonitorStatus: FormControl<EndpointPropertiesEndpointMonitorStatus | null | undefined>,

		/** The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method. */
		endpointStatus: FormControl<EndpointPropertiesEndpointStatus | null | undefined>,

		/**
		 * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minChildEndpoints: FormControl<string | null | undefined>,

		/**
		 * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		priority: FormControl<string | null | undefined>,

		/** The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint. */
		target: FormControl<string | null | undefined>,

		/** The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'. */
		targetResourceId: FormControl<string | null | undefined>,

		/**
		 * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPropertiesFormGroup() {
		return new FormGroup<EndpointPropertiesFormProperties>({
			endpointLocation: new FormControl<string | null | undefined>(undefined),
			endpointMonitorStatus: new FormControl<EndpointPropertiesEndpointMonitorStatus | null | undefined>(undefined),
			endpointStatus: new FormControl<EndpointPropertiesEndpointStatus | null | undefined>(undefined),
			minChildEndpoints: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndpointPropertiesCustomHeaders {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}
	export interface EndpointPropertiesCustomHeadersFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPropertiesCustomHeadersFormGroup() {
		return new FormGroup<EndpointPropertiesCustomHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointPropertiesEndpointMonitorStatus { CheckingEndpoint = 'CheckingEndpoint', Online = 'Online', Degraded = 'Degraded', Disabled = 'Disabled', Inactive = 'Inactive', Stopped = 'Stopped' }

	export enum EndpointPropertiesEndpointStatus { Enabled = 'Enabled', Disabled = 'Disabled' }

	export interface EndpointPropertiesSubnets {

		/** First address in the subnet. */
		first?: string | null;

		/** Last address in the subnet. */
		last?: string | null;

		/**
		 * Block size (number of leading bits in the subnet mask).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scope?: number | null;
	}
	export interface EndpointPropertiesSubnetsFormProperties {

		/** First address in the subnet. */
		first: FormControl<string | null | undefined>,

		/** Last address in the subnet. */
		last: FormControl<string | null | undefined>,

		/**
		 * Block size (number of leading bits in the subnet mask).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scope: FormControl<number | null | undefined>,
	}
	export function CreateEndpointPropertiesSubnetsFormGroup() {
		return new FormGroup<EndpointPropertiesSubnetsFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Class representing the properties of the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface GeographicHierarchyProperties {

		/** Class representing a region in the Geographic hierarchy used with the Geographic traffic routing method. */
		geographicHierarchy?: Region;
	}

	/** Class representing the properties of the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface GeographicHierarchyPropertiesFormProperties {
	}
	export function CreateGeographicHierarchyPropertiesFormGroup() {
		return new FormGroup<GeographicHierarchyPropertiesFormProperties>({
		});

	}


	/** Class which is a sparse representation of a Traffic Manager endpoint. */
	export interface HeatMapEndpoint {

		/**
		 * A number uniquely identifying this endpoint in query experiences.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endpointId?: number | null;

		/** The ARM Resource ID of this Traffic Manager endpoint. */
		resourceId?: string | null;
	}

	/** Class which is a sparse representation of a Traffic Manager endpoint. */
	export interface HeatMapEndpointFormProperties {

		/**
		 * A number uniquely identifying this endpoint in query experiences.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endpointId: FormControl<number | null | undefined>,

		/** The ARM Resource ID of this Traffic Manager endpoint. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateHeatMapEndpointFormGroup() {
		return new FormGroup<HeatMapEndpointFormProperties>({
			endpointId: new FormControl<number | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap. */
	export interface HeatMapModel extends ProxyResource {

		/** Class representing a Traffic Manager HeatMap properties. */
		properties?: HeatMapProperties;
	}

	/** Class representing a Traffic Manager HeatMap. */
	export interface HeatMapModelFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateHeatMapModelFormGroup() {
		return new FormGroup<HeatMapModelFormProperties>({
		});

	}


	/** Class representing a Traffic Manager HeatMap properties. */
	export interface HeatMapProperties {

		/** The ending of the time window for this HeatMap, exclusive. */
		endTime?: Date | null;

		/** The endpoints used in this HeatMap calculation. */
		endpoints?: Array<HeatMapEndpoint>;

		/** The beginning of the time window for this HeatMap, inclusive. */
		startTime?: Date | null;

		/** The traffic flows produced in this HeatMap calculation. */
		trafficFlows?: Array<TrafficFlow>;
	}

	/** Class representing a Traffic Manager HeatMap properties. */
	export interface HeatMapPropertiesFormProperties {

		/** The ending of the time window for this HeatMap, exclusive. */
		endTime: FormControl<Date | null | undefined>,

		/** The beginning of the time window for this HeatMap, inclusive. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateHeatMapPropertiesFormGroup() {
		return new FormGroup<HeatMapPropertiesFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap traffic flow properties. */
	export interface TrafficFlow {

		/**
		 * The approximate latitude that these queries originated from.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The approximate longitude that these queries originated from.
		 * Type: double
		 */
		longitude?: number | null;

		/** The query experiences produced in this HeatMap calculation. */
		queryExperiences?: Array<QueryExperience>;

		/** The IP address that this query experience originated from. */
		sourceIp?: string | null;
	}

	/** Class representing a Traffic Manager HeatMap traffic flow properties. */
	export interface TrafficFlowFormProperties {

		/**
		 * The approximate latitude that these queries originated from.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The approximate longitude that these queries originated from.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/** The IP address that this query experience originated from. */
		sourceIp: FormControl<string | null | undefined>,
	}
	export function CreateTrafficFlowFormGroup() {
		return new FormGroup<TrafficFlowFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing a Traffic Manager HeatMap query experience properties. */
	export interface QueryExperience {

		/**
		 * The id of the endpoint from the 'endpoints' array which these queries were routed to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endpointId: number;

		/**
		 * The latency experienced by queries originating from this location.
		 * Type: double
		 */
		latency?: number | null;

		/**
		 * The number of queries originating from this location.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queryCount: number;
	}

	/** Class representing a Traffic Manager HeatMap query experience properties. */
	export interface QueryExperienceFormProperties {

		/**
		 * The id of the endpoint from the 'endpoints' array which these queries were routed to.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endpointId: FormControl<number | null | undefined>,

		/**
		 * The latency experienced by queries originating from this location.
		 * Type: double
		 */
		latency: FormControl<number | null | undefined>,

		/**
		 * The number of queries originating from this location.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queryCount: FormControl<number | null | undefined>,
	}
	export function CreateQueryExperienceFormGroup() {
		return new FormGroup<QueryExperienceFormProperties>({
			endpointId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latency: new FormControl<number | null | undefined>(undefined),
			queryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Class containing endpoint monitoring settings in a Traffic Manager profile. */
	export interface MonitorConfig {

		/** List of custom headers. */
		MonitorConfigCustomHeaders?: Array<MonitorConfigCustomHeaders>;

		/** List of expected status code ranges. */
		MonitorConfigExpectedStatusCodeRanges?: Array<MonitorConfigExpectedStatusCodeRanges>;

		/**
		 * The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		intervalInSeconds?: string | null;

		/** The path relative to the endpoint domain name used to probe for endpoint health. */
		path?: string | null;

		/**
		 * The TCP port used to probe for endpoint health.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		port?: string | null;

		/** The profile-level monitoring status of the Traffic Manager profile. */
		profileMonitorStatus?: MonitorConfigProfileMonitorStatus | null;

		/** The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health. */
		protocol?: MonitorConfigProtocol | null;

		/**
		 * The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		timeoutInSeconds?: string | null;

		/**
		 * The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		toleratedNumberOfFailures?: string | null;
	}

	/** Class containing endpoint monitoring settings in a Traffic Manager profile. */
	export interface MonitorConfigFormProperties {

		/**
		 * The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		intervalInSeconds: FormControl<string | null | undefined>,

		/** The path relative to the endpoint domain name used to probe for endpoint health. */
		path: FormControl<string | null | undefined>,

		/**
		 * The TCP port used to probe for endpoint health.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		port: FormControl<string | null | undefined>,

		/** The profile-level monitoring status of the Traffic Manager profile. */
		profileMonitorStatus: FormControl<MonitorConfigProfileMonitorStatus | null | undefined>,

		/** The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health. */
		protocol: FormControl<MonitorConfigProtocol | null | undefined>,

		/**
		 * The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		timeoutInSeconds: FormControl<string | null | undefined>,

		/**
		 * The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		toleratedNumberOfFailures: FormControl<string | null | undefined>,
	}
	export function CreateMonitorConfigFormGroup() {
		return new FormGroup<MonitorConfigFormProperties>({
			intervalInSeconds: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			profileMonitorStatus: new FormControl<MonitorConfigProfileMonitorStatus | null | undefined>(undefined),
			protocol: new FormControl<MonitorConfigProtocol | null | undefined>(undefined),
			timeoutInSeconds: new FormControl<string | null | undefined>(undefined),
			toleratedNumberOfFailures: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MonitorConfigCustomHeaders {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}
	export interface MonitorConfigCustomHeadersFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMonitorConfigCustomHeadersFormGroup() {
		return new FormGroup<MonitorConfigCustomHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MonitorConfigExpectedStatusCodeRanges {

		/**
		 * Max status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max?: number | null;

		/**
		 * Min status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min?: number | null;
	}
	export interface MonitorConfigExpectedStatusCodeRangesFormProperties {

		/**
		 * Max status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * Min status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min: FormControl<number | null | undefined>,
	}
	export function CreateMonitorConfigExpectedStatusCodeRangesFormGroup() {
		return new FormGroup<MonitorConfigExpectedStatusCodeRangesFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MonitorConfigProfileMonitorStatus { CheckingEndpoints = 'CheckingEndpoints', Online = 'Online', Degraded = 'Degraded', Disabled = 'Disabled', Inactive = 'Inactive' }

	export enum MonitorConfigProtocol { HTTP = 'HTTP', HTTPS = 'HTTPS', TCP = 'TCP' }


	/** Class representing a Traffic Manager profile. */
	export interface Profile extends TrackedResource {

		/** Class representing the Traffic Manager profile properties. */
		properties?: ProfileProperties;
	}

	/** Class representing a Traffic Manager profile. */
	export interface ProfileFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The list Traffic Manager profiles operation response. */
	export interface ProfileListResult {

		/** Gets the list of Traffic manager profiles. */
		value?: Array<Profile>;
	}

	/** The list Traffic Manager profiles operation response. */
	export interface ProfileListResultFormProperties {
	}
	export function CreateProfileListResultFormGroup() {
		return new FormGroup<ProfileListResultFormProperties>({
		});

	}


	/** Class representing the Traffic Manager profile properties. */
	export interface ProfileProperties {

		/** Class containing DNS settings in a Traffic Manager profile. */
		dnsConfig?: DnsConfig;

		/** The list of endpoints in the Traffic Manager profile. */
		endpoints?: Array<Endpoint>;

		/**
		 * Maximum number of endpoints to be returned for MultiValue routing type.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxReturn?: string | null;

		/** Class containing endpoint monitoring settings in a Traffic Manager profile. */
		monitorConfig?: MonitorConfig;

		/** The status of the Traffic Manager profile. */
		profileStatus?: EndpointPropertiesEndpointStatus | null;

		/** The traffic routing method of the Traffic Manager profile. */
		trafficRoutingMethod?: ProfilePropertiesTrafficRoutingMethod | null;

		/** Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile. */
		trafficViewEnrollmentStatus?: EndpointPropertiesEndpointStatus | null;
	}

	/** Class representing the Traffic Manager profile properties. */
	export interface ProfilePropertiesFormProperties {

		/**
		 * Maximum number of endpoints to be returned for MultiValue routing type.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxReturn: FormControl<string | null | undefined>,

		/** The status of the Traffic Manager profile. */
		profileStatus: FormControl<EndpointPropertiesEndpointStatus | null | undefined>,

		/** The traffic routing method of the Traffic Manager profile. */
		trafficRoutingMethod: FormControl<ProfilePropertiesTrafficRoutingMethod | null | undefined>,

		/** Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile. */
		trafficViewEnrollmentStatus: FormControl<EndpointPropertiesEndpointStatus | null | undefined>,
	}
	export function CreateProfilePropertiesFormGroup() {
		return new FormGroup<ProfilePropertiesFormProperties>({
			maxReturn: new FormControl<string | null | undefined>(undefined),
			profileStatus: new FormControl<EndpointPropertiesEndpointStatus | null | undefined>(undefined),
			trafficRoutingMethod: new FormControl<ProfilePropertiesTrafficRoutingMethod | null | undefined>(undefined),
			trafficViewEnrollmentStatus: new FormControl<EndpointPropertiesEndpointStatus | null | undefined>(undefined),
		});

	}

	export enum ProfilePropertiesTrafficRoutingMethod { Performance = 'Performance', Priority = 'Priority', Weighted = 'Weighted', Geographic = 'Geographic', MultiValue = 'MultiValue', Subnet = 'Subnet' }


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** Class representing a region in the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface Region {

		/** The code of the region */
		code?: string | null;

		/** The name of the region */
		name?: string | null;

		/** The list of Regions grouped under this Region in the Geographic Hierarchy. */
		regions?: Array<Region>;
	}

	/** Class representing a region in the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface RegionFormProperties {

		/** The code of the region */
		code: FormControl<string | null | undefined>,

		/** The name of the region */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** The Azure Region where the resource lives */
		location?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** The Azure Region where the resource lives */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Class representing the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface TrafficManagerGeographicHierarchy extends ProxyResource {

		/** Class representing the properties of the Geographic hierarchy used with the Geographic traffic routing method. */
		properties?: GeographicHierarchyProperties;
	}

	/** Class representing the Geographic hierarchy used with the Geographic traffic routing method. */
	export interface TrafficManagerGeographicHierarchyFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateTrafficManagerGeographicHierarchyFormGroup() {
		return new FormGroup<TrafficManagerGeographicHierarchyFormProperties>({
		});

	}


	/** Class representing a Traffic Manager Name Availability response. */
	export interface TrafficManagerNameAvailability {

		/** Descriptive message that explains why the name is not available, when applicable. */
		message?: string | null;

		/** The relative name. */
		name?: string | null;

		/** Describes whether the relative name is available or not. */
		nameAvailable?: boolean | null;

		/** The reason why the name is not available, when applicable. */
		reason?: string | null;

		/** Traffic Manager profile resource type. */
		type?: string | null;
	}

	/** Class representing a Traffic Manager Name Availability response. */
	export interface TrafficManagerNameAvailabilityFormProperties {

		/** Descriptive message that explains why the name is not available, when applicable. */
		message: FormControl<string | null | undefined>,

		/** The relative name. */
		name: FormControl<string | null | undefined>,

		/** Describes whether the relative name is available or not. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason why the name is not available, when applicable. */
		reason: FormControl<string | null | undefined>,

		/** Traffic Manager profile resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTrafficManagerNameAvailabilityFormGroup() {
		return new FormGroup<TrafficManagerNameAvailabilityFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class representing Traffic Manager User Metrics. */
	export interface UserMetricsModel extends ProxyResource {

		/** Class representing a Traffic Manager Real User Metrics key response. */
		properties?: UserMetricsProperties;
	}

	/** Class representing Traffic Manager User Metrics. */
	export interface UserMetricsModelFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateUserMetricsModelFormGroup() {
		return new FormGroup<UserMetricsModelFormProperties>({
		});

	}


	/** Class representing a Traffic Manager Real User Metrics key response. */
	export interface UserMetricsProperties {

		/** The key returned by the User Metrics operation. */
		key?: string | null;
	}

	/** Class representing a Traffic Manager Real User Metrics key response. */
	export interface UserMetricsPropertiesFormProperties {

		/** The key returned by the User Metrics operation. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateUserMetricsPropertiesFormGroup() {
		return new FormGroup<UserMetricsPropertiesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Checks the availability of a Traffic Manager Relative DNS name.
		 * Post providers/Microsoft.Network/checkTrafficManagerNameAvailability
		 * @param {string} api_version Client Api Version.
		 * @param {CheckTrafficManagerRelativeDnsNameAvailabilityParameters} requestBody The Traffic Manager name parameters supplied to the CheckTrafficManagerNameAvailability operation.
		 * @return {TrafficManagerNameAvailability} The Traffic Manager Name Availability.
		 */
		Profiles_CheckTrafficManagerRelativeDnsNameAvailability(api_version: string, requestBody: CheckTrafficManagerRelativeDnsNameAvailabilityParameters): Observable<TrafficManagerNameAvailability> {
			return this.http.post<TrafficManagerNameAvailability>(this.baseUri + 'providers/Microsoft.Network/checkTrafficManagerNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the default Geographic Hierarchy used by the Geographic traffic routing method.
		 * Get providers/Microsoft.Network/trafficManagerGeographicHierarchies/default
		 * @param {string} api_version Client Api Version.
		 * @return {TrafficManagerGeographicHierarchy} The default Geographic Hierarchy.
		 */
		GeographicHierarchies_GetDefault(api_version: string): Observable<TrafficManagerGeographicHierarchy> {
			return this.http.get<TrafficManagerGeographicHierarchy>(this.baseUri + 'providers/Microsoft.Network/trafficManagerGeographicHierarchies/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the subscription-level key used for Real User Metrics collection.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {UserMetricsModel} The subscription-level Traffic Manager Real User Metrics key.
		 */
		TrafficManagerUserMetricsKeys_Get(api_version: string, subscriptionId: string): Observable<UserMetricsModel> {
			return this.http.get<UserMetricsModel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a subscription-level key used for Real User Metrics collection.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} 
		 */
		TrafficManagerUserMetricsKeys_CreateOrUpdate(api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a subscription-level key used for Real User Metrics collection.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DeleteOperationResult} The Traffic Manager Real User Metrics key was deleted successfully.
		 */
		TrafficManagerUserMetricsKeys_Delete(api_version: string, subscriptionId: string): Observable<DeleteOperationResult> {
			return this.http.delete<DeleteOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficManagerUserMetricsKeys/default?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Traffic Manager profiles within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficmanagerprofiles
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProfileListResult} The list of Traffic Manager profiles.
		 */
		Profiles_ListBySubscription(api_version: string, subscriptionId: string): Observable<ProfileListResult> {
			return this.http.get<ProfileListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/trafficmanagerprofiles?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Traffic Manager profiles within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager profiles to be listed.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProfileListResult} The list of Traffic Manager profiles.
		 */
		Profiles_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ProfileListResult> {
			return this.http.get<ProfileListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Traffic Manager profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager profile.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Profile} The Traffic Manager profile.
		 */
		Profiles_Get(resourceGroupName: string, profileName: string, api_version: string, subscriptionId: string): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Traffic Manager profile.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager profile.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Profile} requestBody The Traffic Manager profile parameters supplied to the CreateOrUpdate operation.
		 * @return {Profile} The created or updated Traffic Manager profile.
		 */
		Profiles_CreateOrUpdate(resourceGroupName: string, profileName: string, api_version: string, subscriptionId: string, requestBody: Profile): Observable<Profile> {
			return this.http.put<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Traffic Manager profile.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager profile to be deleted.
		 * @param {string} profileName The name of the Traffic Manager profile to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DeleteOperationResult} The Traffic Manager Profile was deleted successfully.
		 */
		Profiles_Delete(resourceGroupName: string, profileName: string, api_version: string, subscriptionId: string): Observable<DeleteOperationResult> {
			return this.http.delete<DeleteOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update a Traffic Manager profile.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager profile.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Profile} requestBody The Traffic Manager profile parameters supplied to the Update operation.
		 * @return {Profile} The updated Traffic Manager profile.
		 */
		Profiles_Update(resourceGroupName: string, profileName: string, api_version: string, subscriptionId: string, requestBody: Profile): Observable<Profile> {
			return this.http.patch<Profile>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets latest heatmap for Traffic Manager profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/heatMaps/{heatMapType}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {HeatMap_GetHeatMapType} heatMapType The type of HeatMap for the Traffic Manager profile.
		 * @param {Array<number>} topLeft The top left latitude,longitude pair of the rectangular viewport to query for.
		 * @param {Array<number>} botRight The bottom right latitude,longitude pair of the rectangular viewport to query for.
		 * @param {string} api_version Client Api Version.
		 * @return {HeatMapModel} The Traffic Manager heatmap.
		 */
		HeatMap_Get(subscriptionId: string, resourceGroupName: string, profileName: string, heatMapType: HeatMap_GetHeatMapType, topLeft: Array<number> | null | undefined, botRight: Array<number> | null | undefined, api_version: string): Observable<HeatMapModel> {
			return this.http.get<HeatMapModel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/heatMaps/' + heatMapType + '&' + topLeft?.map(z => `topLeft=${z}`).join('&') + '&' + botRight?.map(z => `botRight=${z}`).join('&') + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Traffic Manager endpoint.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} endpointType The type of the Traffic Manager endpoint.
		 * @param {string} endpointName The name of the Traffic Manager endpoint.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Endpoint} The Traffic Manager endpoint.
		 */
		Endpoints_Get(resourceGroupName: string, profileName: string, endpointType: string, endpointName: string, api_version: string, subscriptionId: string): Observable<Endpoint> {
			return this.http.get<Endpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/' + (endpointType == null ? '' : encodeURIComponent(endpointType)) + '/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Traffic Manager endpoint.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint to be created or updated.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} endpointType The type of the Traffic Manager endpoint to be created or updated.
		 * @param {string} endpointName The name of the Traffic Manager endpoint to be created or updated.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Endpoint} requestBody The Traffic Manager endpoint parameters supplied to the CreateOrUpdate operation.
		 * @return {Endpoint} The created or updated Endpoint.
		 */
		Endpoints_CreateOrUpdate(resourceGroupName: string, profileName: string, endpointType: string, endpointName: string, api_version: string, subscriptionId: string, requestBody: Endpoint): Observable<Endpoint> {
			return this.http.put<Endpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/' + (endpointType == null ? '' : encodeURIComponent(endpointType)) + '/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Traffic Manager endpoint.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint to be deleted.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} endpointType The type of the Traffic Manager endpoint to be deleted.
		 * @param {string} endpointName The name of the Traffic Manager endpoint to be deleted.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DeleteOperationResult} The Traffic Manager Endpoint was deleted successfully.
		 */
		Endpoints_Delete(resourceGroupName: string, profileName: string, endpointType: string, endpointName: string, api_version: string, subscriptionId: string): Observable<DeleteOperationResult> {
			return this.http.delete<DeleteOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/' + (endpointType == null ? '' : encodeURIComponent(endpointType)) + '/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update a Traffic Manager endpoint.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/{endpointType}/{endpointName}
		 * @param {string} resourceGroupName The name of the resource group containing the Traffic Manager endpoint to be updated.
		 * @param {string} profileName The name of the Traffic Manager profile.
		 * @param {string} endpointType The type of the Traffic Manager endpoint to be updated.
		 * @param {string} endpointName The name of the Traffic Manager endpoint to be updated.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Endpoint} requestBody The Traffic Manager endpoint parameters supplied to the Update operation.
		 * @return {Endpoint} The updated Traffic Manager endpoint.
		 */
		Endpoints_Update(resourceGroupName: string, profileName: string, endpointType: string, endpointName: string, api_version: string, subscriptionId: string, requestBody: Endpoint): Observable<Endpoint> {
			return this.http.patch<Endpoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/trafficmanagerprofiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/' + (endpointType == null ? '' : encodeURIComponent(endpointType)) + '/' + (endpointName == null ? '' : encodeURIComponent(endpointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum HeatMap_GetHeatMapType { default = 'default' }

}

